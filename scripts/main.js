const fs = require('fs');
const path = require('path');

const deepmerge = require('deepmerge');
const got = require('got');
const jmespath = require('jmespath');
const s2o = require('swagger2openapi');
const validator = require('oas-validator');
const yaml = require('yaml');

const ng = require('./ng.js');

//Disable check of SSL certificates
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

async function validateObj(o,s) {
  const options = { direct: true, patch: true, text: s, validateSchema: 'never', resolve: false };
  let result;
  try {
    if (o.swagger && o.swagger == '2.0') {
      o = await s2o.convertObj(o, options);
    }
    result = await validator.validate(o, options);
  }
  catch (ex) {
    console.warn(ex.message);
    result = { valid: false };
  }
  console.log('  ',result.valid);
  if (!result.valid) process.exitCode = 1;
  return result.valid;
}

async function fix(candidate, o) {
  // TODO use jmespath queries to fix up stuff
}

const commands = {
  validate: async function(candidate) {
    const s = fs.readFileSync(candidate.md.filename,'utf8');
    const o = yaml.parse(s);
    return await validateObj(o,s);
  },
  update: async function(candidate) {
    if (!candidate.md.source.url) return false;
    try {
      const response = await got(candidate.md.source.url, { rejectUnauthorized: false });
      const s = response.body;
      let o = yaml.parse(s);
      if (o.info && o.info.version !== candidate.version) {
        console.log('  Updated to',o.info.version);
      }
      const result = await validateObj(o,s);
      if (result) {
        o = deepmerge(candidate.md.patch,o);
        o.info['x-providerName'] = candidate.provider;
        const origin = candidate.md.history;
        origin.push(candidate.md.source);
        o.info['x-origin'] = origin;
        if (candidate.service) o.info['x-serviceName'] = candidate.service;
        if (candidate.md.preferred) o.info['x-preferred'] = candidate.md.preferred;
        fs.writeFileSync(candidate.md.filename,yaml.stringify(ng.sortJson(o)),'utf8');
      }
    }
    catch (ex) {
      console.warn(ex);
      return true;
    }
  }
};

async function main(command,pathspec) {
  ng.loadMetadata();
  const apis = await ng.gather(pathspec);
  console.log(Object.keys(apis).length,'APIs found');
  ng.populateMetadata(apis);
  ng.runDrivers();
  const candidates = ng.getCandidates();
  for (let candidate of candidates) {
    console.log(candidate.provider,candidate.driver,candidate.service,candidate.version,candidate.md.source.url);
    await commands[command](candidate);
  }
  ng.saveMetadata();
}

let command = process.argv[2];
if (!command) process.exit(1);
let pathspec = process.argv[3];
if (!pathspec) pathspec = path.resolve(__dirname,'..','APIs');
main(command,pathspec);
