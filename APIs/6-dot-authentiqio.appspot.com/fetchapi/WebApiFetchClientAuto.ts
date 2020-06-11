export namespace My_Demo_Client {

	/**
	 * Authentiq ID in JWT format, self-signed.
	 */
	export interface AuthentiqID {

		/**device token for push messages */
		devtoken?: string;

		/**UUID and public signing key */
		sub: string;
	}


	/**
	 * Claim in JWT format, self- or issuer-signed. 
	 */
	export interface Claims {
		email?: string;
		phone?: string;

		/**claim scope */
		scope: string;

		/**UUID */
		sub: string;
		type?: string;
	}

	export interface Error {
		detail?: string;
		error: number;
		title?: string;

		/**unique uri for this error */
		type?: string;
	}


	/**
	 * PushToken in JWT format, self-signed. 
	 */
	export interface PushToken {

		/**audience (URI) */
		aud: string;
		exp?: number;
		iat?: number;

		/**issuer (URI) */
		iss: string;
		nbf?: number;

		/**UUID and public signing key */
		sub: string;
	}

	export class DemoClient {
		constructor(private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/') {
		}

		/**
		 * Revoke an Authentiq ID using email & phone.
		 * If called with `email` and `phone` only, a verification code
		 * will be sent by email. Do a second call adding `code` to
		 * complete the revocation.
		 * Delete key
		 * @param {string} email primary email associated to Key (ID)
		 * @param {string} phone primary phone number, international representation
		 * @param {string} code verification code sent by email
		 * @return {string} Successfully deleted
		 */
		Key_revoke_nosecret(email: string, phone: string, code: string, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return fetch(this.baseUri + 'key?email=' + (email == null ? '' : encodeURIComponent(email)) + '&phone=' + (phone == null ? '' : encodeURIComponent(phone)) + '&code=' + (code == null ? '' : encodeURIComponent(code)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined }).then(d => d.text());
		}

		/**
		 * Register a new ID `JWT(sub, devtoken)`
		 * v5: `JWT(sub, pk, devtoken, ...)`
		 * See: https://github.com/skion/authentiq/wiki/JWT-Examples
		 * Post key
		 * @param {AuthentiqID} requestBody Authentiq ID to register
		 * @return {void} 
		 */
		Key_register(requestBody: AuthentiqID, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'key', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Revoke an Identity (Key) with a revocation secret
		 * Delete key/{PK}
		 * @param {string} PK Public Signing Key - Authentiq ID (43 chars)
		 * @param {string} secret revokation secret
		 * @return {string} Successful response
		 */
		Key_revoke(PK: string, secret: string, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return fetch(this.baseUri + 'key/' + (PK == null ? '' : encodeURIComponent(PK)) + '&secret=' + (secret == null ? '' : encodeURIComponent(secret)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined }).then(d => d.text());
		}

		/**
		 * Get public details of an Authentiq ID.
		 * Get key/{PK}
		 * @param {string} PK Public Signing Key - Authentiq ID (43 chars)
		 * @return {string} Successfully retrieved
		 */
		KeyGetByPK(PK: string, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return fetch(this.baseUri + 'key/' + (PK == null ? '' : encodeURIComponent(PK)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.text());
		}

		/**
		 * update properties of an Authentiq ID.
		 * (not operational in v4; use PUT for now)
		 * v5: POST issuer-signed email & phone scopes in
		 * a self-signed JWT
		 * See: https://github.com/skion/authentiq/wiki/JWT-Examples
		 * Post key/{PK}
		 * @param {string} PK Public Signing Key - Authentiq ID (43 chars)
		 * @param {AuthentiqID} requestBody Authentiq ID to register
		 * @return {string} Successfully updated
		 */
		Key_update(PK: string, requestBody: AuthentiqID, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return fetch(this.baseUri + 'key/' + (PK == null ? '' : encodeURIComponent(PK)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.text());
		}

		/**
		 * Update Authentiq ID by replacing the object.
		 * v4: `JWT(sub,email,phone)` to bind email/phone hash;
		 * v5: POST issuer-signed email & phone scopes
		 * and PUT to update registration `JWT(sub, pk, devtoken, ...)`
		 * See: https://github.com/skion/authentiq/wiki/JWT-Examples
		 * Put key/{PK}
		 * @param {string} PK Public Signing Key - Authentiq ID (43 chars)
		 * @param {AuthentiqID} requestBody Authentiq ID to register
		 * @return {string} Successfully updated
		 */
		Key_bind(PK: string, requestBody: AuthentiqID, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return fetch(this.baseUri + 'key/' + (PK == null ? '' : encodeURIComponent(PK)), { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.text());
		}

		/**
		 * push sign-in request
		 * See: https://github.com/skion/authentiq/wiki/JWT-Examples
		 * Post login
		 * @param {string} callback URI App will connect to
		 * @param {PushToken} requestBody Push Token.
		 * @return {string} Successful response
		 */
		Push_login_request(callback: string, requestBody: PushToken, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return fetch(this.baseUri + 'login?callback=' + (callback == null ? '' : encodeURIComponent(callback)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.text());
		}

		/**
		 * scope verification request
		 * See: https://github.com/skion/authentiq/wiki/JWT-Examples
		 * Post scope
		 * @param {number} test test only mode, using test issuer
		 * @param {Scope} requestBody Claims of scope
		 * @return {void} 
		 */
		Sign_request(test: number, requestBody: Scope, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'scope?test=' + test, { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * delete a verification job
		 * Delete scope/{job}
		 * @param {string} job Job ID (20 chars)
		 * @return {string} Successfully deleted
		 */
		Sign_delete(job: string, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return fetch(this.baseUri + 'scope/' + (job == null ? '' : encodeURIComponent(job)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined }).then(d => d.text());
		}

		/**
		 * get the status / current content of a verification job
		 * Get scope/{job}
		 * @param {string} job Job ID (20 chars)
		 * @return {string} Successful response (JWT)
		 */
		Sign_retrieve(job: string, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return fetch(this.baseUri + 'scope/' + (job == null ? '' : encodeURIComponent(job)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.text());
		}

		/**
		 * this is a scope confirmation
		 * Post scope/{job}
		 * @param {string} job Job ID (20 chars)
		 * @return {void} 
		 */
		Sign_confirm(job: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'scope/' + (job == null ? '' : encodeURIComponent(job)), { method: 'post', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * authority updates a JWT with its signature
		 * See: https://github.com/skion/authentiq/wiki/JWT-Examples
		 * Put scope/{job}
		 * @param {string} job Job ID (20 chars)
		 * @return {void} Successfully updated
		 */
		Sign_update(job: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'scope/' + (job == null ? '' : encodeURIComponent(job)), { method: 'put', headers: headersHandler ? headersHandler() : undefined });
		}
	}

}

