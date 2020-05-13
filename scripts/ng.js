//@ts-check

const fs = require('fs');
const path = require('path');

const keyv = require('keyv');
const rf = require('node-readfiles');
const sortobject = require('deep-sort-object');
const yaml = require('yaml');

const now = new Date();
let metadata = {};
const cacheFile = path.resolve(__dirname,'..','resources','cache.sqlite');
const cache = new keyv('sqlite://'+cacheFile);

const colour = process.env.NODE_DISABLE_COLORS ?
    { red: '', yellow: '', green: '', normal: '' } :
    { red: '\x1b[31m', yellow: '\x1b[33;1m', green: '\x1b[32m', normal: '\x1b[0m' };

function sortJson(json) {
  json = sortobject(json, function (a, b) {
    if (a === b) return 0;
    return (a < b) ? -1 : 1;
  });

  //detect OpenAPI format
  if (!json.openapi && !json.swagger) {
    return json;
  }

  const fieldOrder = [
    'swagger',
    'schemes',
    'host',
    'basePath',
    'openapi',
    'servers',
    'x-hasEquivalentPaths',
    'info',
    'externalDocs',
    'consumes',
    'produces',
    'securityDefinitions',
    'security',
    'parameters',
    'responses',
    'tags',
    'paths',
    'definitions',
    'components'
  ];

  let sorted = {};
  fieldOrder.forEach(function(name) {
    if (typeof json[name] === 'undefined') return;
    sorted[name] = json[name];
    delete json[name];
  });
  sorted = Object.assign(sorted, json);
  return sorted;
}

function clone(o) {
  return JSON.parse(JSON.stringify(o));
}

function loadMetadata() {
  const metaStr = fs.readFileSync(path.resolve(__dirname,'..','resources','metadata.yaml'),'utf8');
  metadata = yaml.parse(metaStr);
  return metadata;
}

function saveMetadata() {
  const metaStr = yaml.stringify(metadata);
  fs.writeFileSync(path.resolve(__dirname,'..','resources','metadata.yaml'),metaStr,'utf8');
}

async function gather(pathspec) {
  const apis = {};
  console.log('Gathering...');
  let fileArr = await rf(pathspec, { filter: '**/*.yaml', readContents: true, filenameFormat: rf.FULL_PATH }, function(err, filename, content) {
    if ((filename.indexOf('openapi.yaml')>=0) || (filename.indexOf('swagger.yaml')>=0)) {
      const obj = yaml.parse(content);
      apis[filename] = { swagger: obj.swagger, openapi: obj.openapi, info: obj.info };
      const fdir = path.dirname(filename);
      let patch = {};
      let patchfile = path.join(fdir,'..','..','patch.yaml');
      if (fs.existsSync(patchfile)) {
        patch = yaml.parse(fs.readFileSync(patchfile,'utf8'));
      }
      patchfile = path.join(fdir,'..','patch.yaml');
      if (fs.existsSync(patchfile)) {
        patch = yaml.parse(fs.readFileSync(patchfile,'utf8'));
      }
      patchfile = path.join(fdir,'patch.yaml');
      if (fs.existsSync(patchfile)) {
        patch = yaml.parse(fs.readFileSync(patchfile,'utf8'));
      }
      if (Object.keys(patch).length) apis[filename].patch = patch;
    }
  });
  return apis;
}

function populateMetadata(apis) {

  for (let provider in metadata) {
    for (let service in metadata[provider].apis) {
      for (let version in metadata[provider].apis[service]) {
        metadata[provider].apis[service][version].run = false;
      }
    }
  }

  for (let filename in apis) {
    const api = apis[filename];
    filename = path.resolve(filename);
    const comp = filename.split('/');
    const name = comp.pop();
    const openapi = api.openapi ? api.openapi : api.swagger;
    const version = comp.pop();
    const serviceName = api.info['x-serviceName'] ? api.info['x-serviceName'] : '';
    const providerName = api.info['x-providerName'];
    const preferred = (typeof api.info['x-preferred'] === 'boolean') ? api.info['x-preferred'] : undefined;
    if (serviceName) comp.pop();
    comp.pop(); // providerName
    const filepath = comp.join('/');
    const origin = api.info['x-origin'] || [ {} ];
    const source = origin.pop();
    const history = api.info['x-origin'];
    const entry = { name, openapi, preferred, filename, source, history, patch: api.patch, run: true, runDate: now };
    if (!metadata[providerName]) metadata[providerName] = { driver: 'url', apis: {} };
    if (!metadata[providerName].apis[serviceName]) metadata[providerName].apis[serviceName] = {};
    if (!metadata[providerName].apis[serviceName][version]) metadata[providerName].apis[serviceName][version] = {};
    metadata[providerName].apis[serviceName][version] = Object.assign({},metadata[providerName].apis[serviceName][version],entry);
  }
  return metadata;
}

async function runDrivers() {
}

function getCandidates() {
  const result = [];

  for (let provider in metadata) {
    for (let service in metadata[provider].apis) {
      for (let version in metadata[provider].apis[service]) {
        if (metadata[provider].apis[service][version].run) {
          const entry = { provider, driver: metadata[provider].driver, service, version, md: metadata[provider].apis[service][version] };
          result.push(entry);
        }
      }
    }
  }

  return result;
}

module.exports = {
  colour,
  sortJson,
  clone,
  loadMetadata,
  saveMetadata,
  gather,
  populateMetadata,
  metadata,
  cache,
  runDrivers,
  getCandidates
};

