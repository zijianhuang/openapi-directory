import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace My_Demo_Client {
	export interface InstallStatus {
		status?: string;
	}

	export interface KeystoreChainItems {

		/**e.g. "CN=Admin" */
		issuer?: string;

		/**e.g. "Sun Jun 30 23:59:50 AEST 2019" */
		notAfter?: string;

		/**e.g. "Sun Jul 01 12:00:00 AEST 2018" */
		notBefore?: string;

		/**18165099476682912368 */
		serialNumber?: number;

		/**e.g. "CN=localhost" */
		subject?: string;
	}

	export interface KeystoreInfo {
		aliases?: Array<KeystoreItems>;

		/**False if truststore don't exist */
		exists?: boolean;
	}

	export interface KeystoreItems {

		/**e.g. "RSA" */
		algorithm?: string;

		/**Keystore alias name */
		alias?: string;
		chain?: Array<KeystoreChainItems>;

		/**e.g. "privateKey" */
		entryType?: string;

		/**e.g. "PKCS#8" */
		format?: string;
	}

	export interface SamlConfigurationInfo {

		/**needed for configuration binding */
		bundle_location?: string;

		/**Title */
		description?: string;

		/**Persistent Identity (PID) */
		pid?: string;
		properties?: string;

		/**needed for configuraiton binding */
		service_location?: string;

		/**Title */
		title?: string;
	}

	export interface SamlConfigurationProperties {

		/**Whether or not a user should be automatically added to CRX groups after successful authentication. */
		addGroupMemberships?: Array<SamlConfigurationPropertyItemsBoolean>;

		/**The (optional) AssertionConsumerServiceURL attribute of an Authn request specifies the location to which a <Response> message MUST be sent to the requester. */
		assertionConsumerServiceURL?: Array<SamlConfigurationPropertyItemsString>;

		/**Time tolerance in seconds to compensate clock skew between IDP and SP when validating Assertions. */
		clockTolerance?: Array<SamlConfigurationPropertyItemsLong>;

		/**Whether or not to autocreate nonexisting users in the repository. */
		createUser?: Array<SamlConfigurationPropertyItemsBoolean>;

		/**A list of default CRX groups users are added to after successful authentication. */
		defaultGroups?: Array<SamlConfigurationPropertyItemsArray>;

		/**The default location to redirect to after successful authentication. */
		defaultRedirectUrl?: Array<SamlConfigurationPropertyItemsString>;

		/**The digest algorithm to use when signing a SAML message. */
		digestMethod?: Array<SamlConfigurationPropertyItemsString>;

		/**The name of the attribute containing a list of CRX groups this user should be added to. */
		groupMembershipAttribute?: Array<SamlConfigurationPropertyItemsString>;

		/**Whether or not logout (dropCredentials) requests will be processed by this handler. */
		handleLogout?: Array<SamlConfigurationPropertyItemsBoolean>;

		/**The alias of the IdP's certificate in the global truststore. If this property is empty the authentication handler is disabled. */
		idpCertAlias?: Array<SamlConfigurationPropertyItemsString>;

		/**Use an HTTP Redirect to the IDP URL instead of sending an AuthnRequest-message to request credentials. Use this for IDP initiated authentication. */
		idpHttpRedirect?: Array<SamlConfigurationPropertyItemsBoolean>;

		/**URL of the IDP where the SAML Authentication Request should be sent to. If this property is empty the authentication handler is disabled. (idpUrl) */
		idpUrl?: Array<SamlConfigurationPropertyItemsString>;

		/**The password of the key-store of the 'authentication-service' system user. */
		keyStorePassword?: Array<SamlConfigurationPropertyItemsString>;

		/**URL of the IDP where the SAML Logout Request should be sent to. If this property is empty the authentication handler won't handle logouts. */
		logoutUrl?: Array<SamlConfigurationPropertyItemsString>;

		/**The value of the NameIDPolicy format parameter to send in the AuthnRequest message. */
		nameIdFormat?: Array<SamlConfigurationPropertyItemsString>;

		/**Repository path for which this authentication handler should be used by Sling. If this is empty, the authentication handler will be disabled. */
		path?: Array<SamlConfigurationPropertyItemsArray>;

		/**OSGi Framework Service Ranking value to indicate the order in which to call this service. This is an int value where higher values designate higher precedence. Default value is 0. */
		service.ranking?: Array<SamlConfigurationPropertyItemsLong>;

		/**ID which uniquely identifies this service provider with the identity provider. If this property is empty the authentication handler is disabled. */
		serviceProviderEntityId?: Array<SamlConfigurationPropertyItemsString>;

		/**The signature algorithm to use when signing a SAML message. */
		signatureMethod?: Array<SamlConfigurationPropertyItemsString>;

		/**The alias of the SP's private key in the key-store of the 'authentication-service' system user. If this property is empty the handler will not be able to sign or decrypt messages. */
		spPrivateKeyAlias?: Array<SamlConfigurationPropertyItemsString>;

		/**A list of attribute mappings (in the format \attributename=path/relative/to/user/node\) which should be stored in the repository on user-synchronization. */
		synchronizeAttributes?: Array<SamlConfigurationPropertyItemsArray>;

		/**Whether or not this authentication handler expects encrypted SAML assertions. If this is enabled the SP's private key must be provided in the key-store of the 'authentication-service' system user (see SP Private Key Alias above). */
		useEncryption?: Array<SamlConfigurationPropertyItemsBoolean>;

		/**The name of the attribute containing the user ID used to authenticate and create the user in the CRX repository. Leave empty to use the Subject:NameId. */
		userIDAttribute?: Array<SamlConfigurationPropertyItemsString>;

		/**User intermediate path to store created users. */
		userIntermediatePath?: Array<SamlConfigurationPropertyItemsString>;
	}

	export interface SamlConfigurationPropertyItemsArray {

		/**Property description */
		description?: string;

		/**True if property is set */
		is_set?: boolean;

		/**property name */
		name?: string;

		/**True if optional */
		optional?: boolean;

		/**Property type, 1=String, 3=long, 11=boolean, 12=Password */
		type?: number;

		/**Property value */
		values?: Array<string>;
	}

	export interface SamlConfigurationPropertyItemsBoolean {

		/**Property description */
		description?: string;

		/**True if property is set */
		is_set?: boolean;

		/**property name */
		name?: string;

		/**True if optional */
		optional?: boolean;

		/**Property type, 1=String, 3=long, 11=boolean, 12=Password */
		type?: number;

		/**Property value */
		values?: boolean;
	}

	export interface SamlConfigurationPropertyItemsLong {

		/**Property description */
		description?: string;

		/**True if property is set */
		is_set?: boolean;

		/**property name */
		name?: string;

		/**True if optional */
		optional?: boolean;

		/**Property type, 1=String, 3=long, 11=boolean, 12=Password */
		type?: number;

		/**Property value */
		values?: number;
	}

	export interface SamlConfigurationPropertyItemsString {

		/**Property description */
		description?: string;

		/**True if property is set */
		is_set?: boolean;

		/**property name */
		name?: string;

		/**True if optional */
		optional?: boolean;

		/**Property type, 1=String, 3=long, 11=boolean, 12=Password */
		type?: number;

		/**Property value */
		values?: string;
	}

	export interface TruststoreInfo {
		aliases?: Array<TruststoreItems>;

		/**False if truststore don't exist */
		exists?: boolean;
	}

	export interface TruststoreItems {

		/**Truststore alias name */
		alias?: string;
		entryType?: string;

		/**e.g. "CN=Admin" */
		issuer?: string;

		/**e.g. "Sun Jun 30 23:59:50 AEST 2019" */
		notAfter?: string;

		/**e.g. "Sun Jul 01 12:00:00 AEST 2018" */
		notBefore?: string;

		/**18165099476682912368 */
		serialNumber?: number;

		/**e.g. "CN=localhost" */
		subject?: string;
	}

	@Injectable()
	export class DemoClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Post .cqactions.html
		 * @return {void} 
		 */
		PostCqActions(authorizableId: string, changelog: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '.cqactions.html?authorizableId=' + (authorizableId == null ? '' : encodeURIComponent(authorizableId)) + '&changelog=' + (changelog == null ? '' : encodeURIComponent(changelog)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post apps/system/config/com.adobe.granite.auth.saml.SamlAuthenticationHandler.config
		 * @return {void} 
		 */
		PostConfigAdobeGraniteSamlAuthenticationHandler(keyStorePassword: string, keyStorePassword@TypeHint: string, service.ranking: number, service.ranking@TypeHint: string, idpHttpRedirect: boolean, idpHttpRedirect@TypeHint: string, createUser: boolean, createUser@TypeHint: string, defaultRedirectUrl: string, defaultRedirectUrl@TypeHint: string, userIDAttribute: string, userIDAttribute@TypeHint: string, defaultGroups: Array<string>, defaultGroups@TypeHint: string, idpCertAlias: string, idpCertAlias@TypeHint: string, addGroupMemberships: boolean, addGroupMemberships@TypeHint: string, path: Array<string>, path@TypeHint: string, synchronizeAttributes: Array<string>, synchronizeAttributes@TypeHint: string, clockTolerance: number, clockTolerance@TypeHint: string, groupMembershipAttribute: string, groupMembershipAttribute@TypeHint: string, idpUrl: string, idpUrl@TypeHint: string, logoutUrl: string, logoutUrl@TypeHint: string, serviceProviderEntityId: string, serviceProviderEntityId@TypeHint: string, assertionConsumerServiceURL: string, assertionConsumerServiceURL@TypeHint: string, handleLogout: boolean, handleLogout@TypeHint: string, spPrivateKeyAlias: string, spPrivateKeyAlias@TypeHint: string, useEncryption: boolean, useEncryption@TypeHint: string, nameIdFormat: string, nameIdFormat@TypeHint: string, digestMethod: string, digestMethod@TypeHint: string, signatureMethod: string, signatureMethod@TypeHint: string, userIntermediatePath: string, userIntermediatePath@TypeHint: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'apps/system/config/com.adobe.granite.auth.saml.SamlAuthenticationHandler.config?keyStorePassword=' + (keyStorePassword == null ? '' : encodeURIComponent(keyStorePassword)) + '&keyStorePassword@TypeHint=' + (keyStorePassword@TypeHint == null ? '' : encodeURIComponent(keyStorePassword@TypeHint)) + '&service.ranking=' + service.ranking + '&service.ranking@TypeHint=' + (service.ranking@TypeHint == null ? '' : encodeURIComponent(service.ranking@TypeHint)) + '&idpHttpRedirect=' + idpHttpRedirect + '&idpHttpRedirect@TypeHint=' + (idpHttpRedirect@TypeHint == null ? '' : encodeURIComponent(idpHttpRedirect@TypeHint)) + '&createUser=' + createUser + '&createUser@TypeHint=' + (createUser@TypeHint == null ? '' : encodeURIComponent(createUser@TypeHint)) + '&defaultRedirectUrl=' + (defaultRedirectUrl == null ? '' : encodeURIComponent(defaultRedirectUrl)) + '&defaultRedirectUrl@TypeHint=' + (defaultRedirectUrl@TypeHint == null ? '' : encodeURIComponent(defaultRedirectUrl@TypeHint)) + '&userIDAttribute=' + (userIDAttribute == null ? '' : encodeURIComponent(userIDAttribute)) + '&userIDAttribute@TypeHint=' + (userIDAttribute@TypeHint == null ? '' : encodeURIComponent(userIDAttribute@TypeHint)) + '&' + defaultGroups.map(z => `defaultGroups=${encodeURIComponent(z)}`).join('&') + '&defaultGroups@TypeHint=' + (defaultGroups@TypeHint == null ? '' : encodeURIComponent(defaultGroups@TypeHint)) + '&idpCertAlias=' + (idpCertAlias == null ? '' : encodeURIComponent(idpCertAlias)) + '&idpCertAlias@TypeHint=' + (idpCertAlias@TypeHint == null ? '' : encodeURIComponent(idpCertAlias@TypeHint)) + '&addGroupMemberships=' + addGroupMemberships + '&addGroupMemberships@TypeHint=' + (addGroupMemberships@TypeHint == null ? '' : encodeURIComponent(addGroupMemberships@TypeHint)) + '&' + path.map(z => `path=${encodeURIComponent(z)}`).join('&') + '&path@TypeHint=' + (path@TypeHint == null ? '' : encodeURIComponent(path@TypeHint)) + '&' + synchronizeAttributes.map(z => `synchronizeAttributes=${encodeURIComponent(z)}`).join('&') + '&synchronizeAttributes@TypeHint=' + (synchronizeAttributes@TypeHint == null ? '' : encodeURIComponent(synchronizeAttributes@TypeHint)) + '&clockTolerance=' + clockTolerance + '&clockTolerance@TypeHint=' + (clockTolerance@TypeHint == null ? '' : encodeURIComponent(clockTolerance@TypeHint)) + '&groupMembershipAttribute=' + (groupMembershipAttribute == null ? '' : encodeURIComponent(groupMembershipAttribute)) + '&groupMembershipAttribute@TypeHint=' + (groupMembershipAttribute@TypeHint == null ? '' : encodeURIComponent(groupMembershipAttribute@TypeHint)) + '&idpUrl=' + (idpUrl == null ? '' : encodeURIComponent(idpUrl)) + '&idpUrl@TypeHint=' + (idpUrl@TypeHint == null ? '' : encodeURIComponent(idpUrl@TypeHint)) + '&logoutUrl=' + (logoutUrl == null ? '' : encodeURIComponent(logoutUrl)) + '&logoutUrl@TypeHint=' + (logoutUrl@TypeHint == null ? '' : encodeURIComponent(logoutUrl@TypeHint)) + '&serviceProviderEntityId=' + (serviceProviderEntityId == null ? '' : encodeURIComponent(serviceProviderEntityId)) + '&serviceProviderEntityId@TypeHint=' + (serviceProviderEntityId@TypeHint == null ? '' : encodeURIComponent(serviceProviderEntityId@TypeHint)) + '&assertionConsumerServiceURL=' + (assertionConsumerServiceURL == null ? '' : encodeURIComponent(assertionConsumerServiceURL)) + '&assertionConsumerServiceURL@TypeHint=' + (assertionConsumerServiceURL@TypeHint == null ? '' : encodeURIComponent(assertionConsumerServiceURL@TypeHint)) + '&handleLogout=' + handleLogout + '&handleLogout@TypeHint=' + (handleLogout@TypeHint == null ? '' : encodeURIComponent(handleLogout@TypeHint)) + '&spPrivateKeyAlias=' + (spPrivateKeyAlias == null ? '' : encodeURIComponent(spPrivateKeyAlias)) + '&spPrivateKeyAlias@TypeHint=' + (spPrivateKeyAlias@TypeHint == null ? '' : encodeURIComponent(spPrivateKeyAlias@TypeHint)) + '&useEncryption=' + useEncryption + '&useEncryption@TypeHint=' + (useEncryption@TypeHint == null ? '' : encodeURIComponent(useEncryption@TypeHint)) + '&nameIdFormat=' + (nameIdFormat == null ? '' : encodeURIComponent(nameIdFormat)) + '&nameIdFormat@TypeHint=' + (nameIdFormat@TypeHint == null ? '' : encodeURIComponent(nameIdFormat@TypeHint)) + '&digestMethod=' + (digestMethod == null ? '' : encodeURIComponent(digestMethod)) + '&digestMethod@TypeHint=' + (digestMethod@TypeHint == null ? '' : encodeURIComponent(digestMethod@TypeHint)) + '&signatureMethod=' + (signatureMethod == null ? '' : encodeURIComponent(signatureMethod)) + '&signatureMethod@TypeHint=' + (signatureMethod@TypeHint == null ? '' : encodeURIComponent(signatureMethod@TypeHint)) + '&userIntermediatePath=' + (userIntermediatePath == null ? '' : encodeURIComponent(userIntermediatePath)) + '&userIntermediatePath@TypeHint=' + (userIntermediatePath@TypeHint == null ? '' : encodeURIComponent(userIntermediatePath@TypeHint)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post apps/system/config/com.shinesolutions.aem.passwordreset.Activator
		 * @return {void} 
		 */
		PostConfigAemPasswordReset(pwdreset.authorizables: Array<string>, pwdreset.authorizables@TypeHint: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'apps/system/config/com.shinesolutions.aem.passwordreset.Activator?' + pwdreset.authorizables.map(z => `pwdreset.authorizables=${encodeURIComponent(z)}`).join('&') + '&pwdreset.authorizables@TypeHint=' + (pwdreset.authorizables@TypeHint == null ? '' : encodeURIComponent(pwdreset.authorizables@TypeHint)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post apps/system/config/com.shinesolutions.healthcheck.hc.impl.ActiveBundleHealthCheck
		 * @return {void} 
		 */
		PostConfigAemHealthCheckServlet(bundles.ignored: Array<string>, bundles.ignored@TypeHint: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'apps/system/config/com.shinesolutions.healthcheck.hc.impl.ActiveBundleHealthCheck?' + bundles.ignored.map(z => `bundles.ignored=${encodeURIComponent(z)}`).join('&') + '&bundles.ignored@TypeHint=' + (bundles.ignored@TypeHint == null ? '' : encodeURIComponent(bundles.ignored@TypeHint)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post apps/system/config/org.apache.felix.http
		 * @return {void} 
		 */
		PostConfigApacheFelixJettyBasedHttpService(org.apache.felix.https.nio: boolean, org.apache.felix.https.nio@TypeHint: string, org.apache.felix.https.keystore: string, org.apache.felix.https.keystore@TypeHint: string, org.apache.felix.https.keystore.password: string, org.apache.felix.https.keystore.password@TypeHint: string, org.apache.felix.https.keystore.key: string, org.apache.felix.https.keystore.key@TypeHint: string, org.apache.felix.https.keystore.key.password: string, org.apache.felix.https.keystore.key.password@TypeHint: string, org.apache.felix.https.truststore: string, org.apache.felix.https.truststore@TypeHint: string, org.apache.felix.https.truststore.password: string, org.apache.felix.https.truststore.password@TypeHint: string, org.apache.felix.https.clientcertificate: string, org.apache.felix.https.clientcertificate@TypeHint: string, org.apache.felix.https.enable: boolean, org.apache.felix.https.enable@TypeHint: string, org.osgi.service.http.port.secure: string, org.osgi.service.http.port.secure@TypeHint: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'apps/system/config/org.apache.felix.http?org.apache.felix.https.nio=' + org.apache.felix.https.nio + '&org.apache.felix.https.nio@TypeHint=' + (org.apache.felix.https.nio@TypeHint == null ? '' : encodeURIComponent(org.apache.felix.https.nio@TypeHint)) + '&org.apache.felix.https.keystore=' + (org.apache.felix.https.keystore == null ? '' : encodeURIComponent(org.apache.felix.https.keystore)) + '&org.apache.felix.https.keystore@TypeHint=' + (org.apache.felix.https.keystore@TypeHint == null ? '' : encodeURIComponent(org.apache.felix.https.keystore@TypeHint)) + '&org.apache.felix.https.keystore.password=' + (org.apache.felix.https.keystore.password == null ? '' : encodeURIComponent(org.apache.felix.https.keystore.password)) + '&org.apache.felix.https.keystore.password@TypeHint=' + (org.apache.felix.https.keystore.password@TypeHint == null ? '' : encodeURIComponent(org.apache.felix.https.keystore.password@TypeHint)) + '&org.apache.felix.https.keystore.key=' + (org.apache.felix.https.keystore.key == null ? '' : encodeURIComponent(org.apache.felix.https.keystore.key)) + '&org.apache.felix.https.keystore.key@TypeHint=' + (org.apache.felix.https.keystore.key@TypeHint == null ? '' : encodeURIComponent(org.apache.felix.https.keystore.key@TypeHint)) + '&org.apache.felix.https.keystore.key.password=' + (org.apache.felix.https.keystore.key.password == null ? '' : encodeURIComponent(org.apache.felix.https.keystore.key.password)) + '&org.apache.felix.https.keystore.key.password@TypeHint=' + (org.apache.felix.https.keystore.key.password@TypeHint == null ? '' : encodeURIComponent(org.apache.felix.https.keystore.key.password@TypeHint)) + '&org.apache.felix.https.truststore=' + (org.apache.felix.https.truststore == null ? '' : encodeURIComponent(org.apache.felix.https.truststore)) + '&org.apache.felix.https.truststore@TypeHint=' + (org.apache.felix.https.truststore@TypeHint == null ? '' : encodeURIComponent(org.apache.felix.https.truststore@TypeHint)) + '&org.apache.felix.https.truststore.password=' + (org.apache.felix.https.truststore.password == null ? '' : encodeURIComponent(org.apache.felix.https.truststore.password)) + '&org.apache.felix.https.truststore.password@TypeHint=' + (org.apache.felix.https.truststore.password@TypeHint == null ? '' : encodeURIComponent(org.apache.felix.https.truststore.password@TypeHint)) + '&org.apache.felix.https.clientcertificate=' + (org.apache.felix.https.clientcertificate == null ? '' : encodeURIComponent(org.apache.felix.https.clientcertificate)) + '&org.apache.felix.https.clientcertificate@TypeHint=' + (org.apache.felix.https.clientcertificate@TypeHint == null ? '' : encodeURIComponent(org.apache.felix.https.clientcertificate@TypeHint)) + '&org.apache.felix.https.enable=' + org.apache.felix.https.enable + '&org.apache.felix.https.enable@TypeHint=' + (org.apache.felix.https.enable@TypeHint == null ? '' : encodeURIComponent(org.apache.felix.https.enable@TypeHint)) + '&org.osgi.service.http.port.secure=' + (org.osgi.service.http.port.secure == null ? '' : encodeURIComponent(org.osgi.service.http.port.secure)) + '&org.osgi.service.http.port.secure@TypeHint=' + (org.osgi.service.http.port.secure@TypeHint == null ? '' : encodeURIComponent(org.osgi.service.http.port.secure@TypeHint)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post apps/system/config/org.apache.http.proxyconfigurator.config
		 * @return {void} 
		 */
		PostConfigApacheHttpComponentsProxyConfiguration(proxy.host: string, proxy.host@TypeHint: string, proxy.port: number, proxy.port@TypeHint: string, proxy.exceptions: Array<string>, proxy.exceptions@TypeHint: string, proxy.enabled: boolean, proxy.enabled@TypeHint: string, proxy.user: string, proxy.user@TypeHint: string, proxy.password: string, proxy.password@TypeHint: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'apps/system/config/org.apache.http.proxyconfigurator.config?proxy.host=' + (proxy.host == null ? '' : encodeURIComponent(proxy.host)) + '&proxy.host@TypeHint=' + (proxy.host@TypeHint == null ? '' : encodeURIComponent(proxy.host@TypeHint)) + '&proxy.port=' + proxy.port + '&proxy.port@TypeHint=' + (proxy.port@TypeHint == null ? '' : encodeURIComponent(proxy.port@TypeHint)) + '&' + proxy.exceptions.map(z => `proxy.exceptions=${encodeURIComponent(z)}`).join('&') + '&proxy.exceptions@TypeHint=' + (proxy.exceptions@TypeHint == null ? '' : encodeURIComponent(proxy.exceptions@TypeHint)) + '&proxy.enabled=' + proxy.enabled + '&proxy.enabled@TypeHint=' + (proxy.enabled@TypeHint == null ? '' : encodeURIComponent(proxy.enabled@TypeHint)) + '&proxy.user=' + (proxy.user == null ? '' : encodeURIComponent(proxy.user)) + '&proxy.user@TypeHint=' + (proxy.user@TypeHint == null ? '' : encodeURIComponent(proxy.user@TypeHint)) + '&proxy.password=' + (proxy.password == null ? '' : encodeURIComponent(proxy.password)) + '&proxy.password@TypeHint=' + (proxy.password@TypeHint == null ? '' : encodeURIComponent(proxy.password@TypeHint)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post apps/system/config/org.apache.sling.jcr.davex.impl.servlets.SlingDavExServlet
		 * @return {void} 
		 */
		PostConfigApacheSlingDavExServlet(alias: string, alias@TypeHint: string, dav.create-absolute-uri: boolean, dav.create-absolute-uri@TypeHint: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'apps/system/config/org.apache.sling.jcr.davex.impl.servlets.SlingDavExServlet?alias=' + (alias == null ? '' : encodeURIComponent(alias)) + '&alias@TypeHint=' + (alias@TypeHint == null ? '' : encodeURIComponent(alias@TypeHint)) + '&dav.create-absolute-uri=' + dav.create-absolute-uri + '&dav.create-absolute-uri@TypeHint=' + (dav.create-absolute-uri@TypeHint == null ? '' : encodeURIComponent(dav.create-absolute-uri@TypeHint)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post apps/system/config/org.apache.sling.security.impl.ReferrerFilter
		 * @return {void} 
		 */
		PostConfigApacheSlingReferrerFilter(allow.empty: boolean, allow.empty@TypeHint: string, allow.hosts: string, allow.hosts@TypeHint: string, allow.hosts.regexp: string, allow.hosts.regexp@TypeHint: string, filter.methods: string, filter.methods@TypeHint: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'apps/system/config/org.apache.sling.security.impl.ReferrerFilter?allow.empty=' + allow.empty + '&allow.empty@TypeHint=' + (allow.empty@TypeHint == null ? '' : encodeURIComponent(allow.empty@TypeHint)) + '&allow.hosts=' + (allow.hosts == null ? '' : encodeURIComponent(allow.hosts)) + '&allow.hosts@TypeHint=' + (allow.hosts@TypeHint == null ? '' : encodeURIComponent(allow.hosts@TypeHint)) + '&allow.hosts.regexp=' + (allow.hosts.regexp == null ? '' : encodeURIComponent(allow.hosts.regexp)) + '&allow.hosts.regexp@TypeHint=' + (allow.hosts.regexp@TypeHint == null ? '' : encodeURIComponent(allow.hosts.regexp@TypeHint)) + '&filter.methods=' + (filter.methods == null ? '' : encodeURIComponent(filter.methods)) + '&filter.methods@TypeHint=' + (filter.methods@TypeHint == null ? '' : encodeURIComponent(filter.methods@TypeHint)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post apps/system/config/org.apache.sling.servlets.get.DefaultGetServlet
		 * @return {void} 
		 */
		PostConfigApacheSlingGetServlet(json.maximumresults: string, json.maximumresults@TypeHint: string, enable.html: boolean, enable.html@TypeHint: string, enable.txt: boolean, enable.txt@TypeHint: string, enable.xml: boolean, enable.xml@TypeHint: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'apps/system/config/org.apache.sling.servlets.get.DefaultGetServlet?json.maximumresults=' + (json.maximumresults == null ? '' : encodeURIComponent(json.maximumresults)) + '&json.maximumresults@TypeHint=' + (json.maximumresults@TypeHint == null ? '' : encodeURIComponent(json.maximumresults@TypeHint)) + '&enable.html=' + enable.html + '&enable.html@TypeHint=' + (enable.html@TypeHint == null ? '' : encodeURIComponent(enable.html@TypeHint)) + '&enable.txt=' + enable.txt + '&enable.txt@TypeHint=' + (enable.txt@TypeHint == null ? '' : encodeURIComponent(enable.txt@TypeHint)) + '&enable.xml=' + enable.xml + '&enable.xml@TypeHint=' + (enable.xml@TypeHint == null ? '' : encodeURIComponent(enable.xml@TypeHint)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get bin/querybuilder.json
		 * @return {void} 
		 */
		GetQuery(path: string, p.limit: number, 1_property: string, 1_property.value: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'bin/querybuilder.json?path=' + (path == null ? '' : encodeURIComponent(path)) + '&p.limit=' + p.limit + '&1_property=' + (1_property == null ? '' : encodeURIComponent(1_property)) + '&1_property.value=' + (1_property.value == null ? '' : encodeURIComponent(1_property.value)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post bin/querybuilder.json
		 * @return {void} 
		 */
		PostQuery(path: string, p.limit: number, 1_property: string, 1_property.value: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'bin/querybuilder.json?path=' + (path == null ? '' : encodeURIComponent(path)) + '&p.limit=' + p.limit + '&1_property=' + (1_property == null ? '' : encodeURIComponent(1_property)) + '&1_property.value=' + (1_property.value == null ? '' : encodeURIComponent(1_property.value)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post crx/explorer/ui/setpassword.jsp
		 * @return {void} 
		 */
		PostSetPassword(old: string, plain: string, verify: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'crx/explorer/ui/setpassword.jsp?old=' + (old == null ? '' : encodeURIComponent(old)) + '&plain=' + (plain == null ? '' : encodeURIComponent(plain)) + '&verify=' + (verify == null ? '' : encodeURIComponent(verify)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get crx/packmgr/installstatus.jsp
		 * @return {InstallStatus} Retrieved CRX package manager install status
		 */
		GetInstallStatus(headersHandler?: () => HttpHeaders): Observable<InstallStatus> {
			return this.http.get<InstallStatus>(this.baseUri + 'crx/packmgr/installstatus.jsp', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post crx/packmgr/service.jsp
		 * @return {void} 
		 */
		PostPackageService(cmd: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'crx/packmgr/service.jsp?cmd=' + (cmd == null ? '' : encodeURIComponent(cmd)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get crx/packmgr/service/script.html
		 * @return {void} 
		 */
		GetPackageManagerServlet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'crx/packmgr/service/script.html', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post crx/packmgr/update.jsp
		 * @return {void} 
		 */
		PostPackageUpdate(groupName: string, packageName: string, version: string, path: string, filter: string, _charset_: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'crx/packmgr/update.jsp?groupName=' + (groupName == null ? '' : encodeURIComponent(groupName)) + '&packageName=' + (packageName == null ? '' : encodeURIComponent(packageName)) + '&version=' + (version == null ? '' : encodeURIComponent(version)) + '&path=' + (path == null ? '' : encodeURIComponent(path)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&_charset_=' + (_charset_ == null ? '' : encodeURIComponent(_charset_)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get crx/server/crx.default/jcr:root/.1.json
		 * @return {void} CRXDE is enabled
		 */
		GetCrxdeStatus(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'crx/server/crx.default/jcr:root/.1.json', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get etc/packages/{group}/{name}-{version}.zip
		 * @return {void} 
		 */
		GetPackage(group: string, name: string, version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'etc/packages/' + (group == null ? '' : encodeURIComponent(group)) + '/' + (name == null ? '' : encodeURIComponent(name)) + '-' + (version == null ? '' : encodeURIComponent(version)) + '.zip', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get etc/packages/{group}/{name}-{version}.zip/jcr:content/vlt:definition/filter.tidy.2.json
		 * @return {void} 
		 */
		GetPackageFilter(group: string, name: string, version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'etc/packages/' + (group == null ? '' : encodeURIComponent(group)) + '/' + (name == null ? '' : encodeURIComponent(name)) + '-' + (version == null ? '' : encodeURIComponent(version)) + '.zip/jcr:content/vlt:definition/filter.tidy.2.json', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get etc/replication/agents.{runmode}.-1.json
		 * @return {void} 
		 */
		GetAgents(runmode: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'etc/replication/agents.' + (runmode == null ? '' : encodeURIComponent(runmode)) + '.-1.json', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete etc/replication/agents.{runmode}/{name}
		 * @return {void} 
		 */
		DeleteAgent(runmode: string, name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'etc/replication/agents.' + (runmode == null ? '' : encodeURIComponent(runmode)) + '/' + (name == null ? '' : encodeURIComponent(name)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get etc/replication/agents.{runmode}/{name}
		 * @return {void} 
		 */
		GetAgent(runmode: string, name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'etc/replication/agents.' + (runmode == null ? '' : encodeURIComponent(runmode)) + '/' + (name == null ? '' : encodeURIComponent(name)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post etc/replication/agents.{runmode}/{name}
		 * @return {void} 
		 */
		PostAgent(runmode: string, name: string, jcr:content/cq:distribute: boolean, jcr:content/cq:distribute@TypeHint: string, jcr:content/cq:name: string, jcr:content/cq:template: string, jcr:content/enabled: boolean, jcr:content/jcr:description: string, jcr:content/jcr:lastModified: string, jcr:content/jcr:lastModifiedBy: string, jcr:content/jcr:mixinTypes: string, jcr:content/jcr:title: string, jcr:content/logLevel: string, jcr:content/noStatusUpdate: boolean, jcr:content/noVersioning: boolean, jcr:content/protocolConnectTimeout: number, jcr:content/protocolHTTPConnectionClosed: boolean, jcr:content/protocolHTTPExpired: string, jcr:content/protocolHTTPHeaders: Array<string>, jcr:content/protocolHTTPHeaders@TypeHint: string, jcr:content/protocolHTTPMethod: string, jcr:content/protocolHTTPSRelaxed: boolean, jcr:content/protocolInterface: string, jcr:content/protocolSocketTimeout: number, jcr:content/protocolVersion: string, jcr:content/proxyNTLMDomain: string, jcr:content/proxyNTLMHost: string, jcr:content/proxyHost: string, jcr:content/proxyPassword: string, jcr:content/proxyPort: number, jcr:content/proxyUser: string, jcr:content/queueBatchMaxSize: number, jcr:content/queueBatchMode: string, jcr:content/queueBatchWaitTime: number, jcr:content/retryDelay: string, jcr:content/reverseReplication: boolean, jcr:content/serializationType: string, jcr:content/sling:resourceType: string, jcr:content/ssl: string, jcr:content/transportNTLMDomain: string, jcr:content/transportNTLMHost: string, jcr:content/transportPassword: string, jcr:content/transportUri: string, jcr:content/transportUser: string, jcr:content/triggerDistribute: boolean, jcr:content/triggerModified: boolean, jcr:content/triggerOnOffTime: boolean, jcr:content/triggerReceive: boolean, jcr:content/triggerSpecific: boolean, jcr:content/userId: string, jcr:primaryType: string, :operation: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'etc/replication/agents.' + (runmode == null ? '' : encodeURIComponent(runmode)) + '/' + (name == null ? '' : encodeURIComponent(name)) + '&jcr:content/cq:distribute=' + jcr:content/cq:distribute + '&jcr:content/cq:distribute@TypeHint=' + (jcr:content/cq:distribute@TypeHint == null ? '' : encodeURIComponent(jcr:content/cq:distribute@TypeHint)) + '&jcr:content/cq:name=' + (jcr:content/cq:name == null ? '' : encodeURIComponent(jcr:content/cq:name)) + '&jcr:content/cq:template=' + (jcr:content/cq:template == null ? '' : encodeURIComponent(jcr:content/cq:template)) + '&jcr:content/enabled=' + jcr:content/enabled + '&jcr:content/jcr:description=' + (jcr:content/jcr:description == null ? '' : encodeURIComponent(jcr:content/jcr:description)) + '&jcr:content/jcr:lastModified=' + (jcr:content/jcr:lastModified == null ? '' : encodeURIComponent(jcr:content/jcr:lastModified)) + '&jcr:content/jcr:lastModifiedBy=' + (jcr:content/jcr:lastModifiedBy == null ? '' : encodeURIComponent(jcr:content/jcr:lastModifiedBy)) + '&jcr:content/jcr:mixinTypes=' + (jcr:content/jcr:mixinTypes == null ? '' : encodeURIComponent(jcr:content/jcr:mixinTypes)) + '&jcr:content/jcr:title=' + (jcr:content/jcr:title == null ? '' : encodeURIComponent(jcr:content/jcr:title)) + '&jcr:content/logLevel=' + (jcr:content/logLevel == null ? '' : encodeURIComponent(jcr:content/logLevel)) + '&jcr:content/noStatusUpdate=' + jcr:content/noStatusUpdate + '&jcr:content/noVersioning=' + jcr:content/noVersioning + '&jcr:content/protocolConnectTimeout=' + jcr:content/protocolConnectTimeout + '&jcr:content/protocolHTTPConnectionClosed=' + jcr:content/protocolHTTPConnectionClosed + '&jcr:content/protocolHTTPExpired=' + (jcr:content/protocolHTTPExpired == null ? '' : encodeURIComponent(jcr:content/protocolHTTPExpired)) + '&' + jcr:content/protocolHTTPHeaders.map(z => `jcr:content/protocolHTTPHeaders=${encodeURIComponent(z)}`).join('&') + '&jcr:content/protocolHTTPHeaders@TypeHint=' + (jcr:content/protocolHTTPHeaders@TypeHint == null ? '' : encodeURIComponent(jcr:content/protocolHTTPHeaders@TypeHint)) + '&jcr:content/protocolHTTPMethod=' + (jcr:content/protocolHTTPMethod == null ? '' : encodeURIComponent(jcr:content/protocolHTTPMethod)) + '&jcr:content/protocolHTTPSRelaxed=' + jcr:content/protocolHTTPSRelaxed + '&jcr:content/protocolInterface=' + (jcr:content/protocolInterface == null ? '' : encodeURIComponent(jcr:content/protocolInterface)) + '&jcr:content/protocolSocketTimeout=' + jcr:content/protocolSocketTimeout + '&jcr:content/protocolVersion=' + (jcr:content/protocolVersion == null ? '' : encodeURIComponent(jcr:content/protocolVersion)) + '&jcr:content/proxyNTLMDomain=' + (jcr:content/proxyNTLMDomain == null ? '' : encodeURIComponent(jcr:content/proxyNTLMDomain)) + '&jcr:content/proxyNTLMHost=' + (jcr:content/proxyNTLMHost == null ? '' : encodeURIComponent(jcr:content/proxyNTLMHost)) + '&jcr:content/proxyHost=' + (jcr:content/proxyHost == null ? '' : encodeURIComponent(jcr:content/proxyHost)) + '&jcr:content/proxyPassword=' + (jcr:content/proxyPassword == null ? '' : encodeURIComponent(jcr:content/proxyPassword)) + '&jcr:content/proxyPort=' + jcr:content/proxyPort + '&jcr:content/proxyUser=' + (jcr:content/proxyUser == null ? '' : encodeURIComponent(jcr:content/proxyUser)) + '&jcr:content/queueBatchMaxSize=' + jcr:content/queueBatchMaxSize + '&jcr:content/queueBatchMode=' + (jcr:content/queueBatchMode == null ? '' : encodeURIComponent(jcr:content/queueBatchMode)) + '&jcr:content/queueBatchWaitTime=' + jcr:content/queueBatchWaitTime + '&jcr:content/retryDelay=' + (jcr:content/retryDelay == null ? '' : encodeURIComponent(jcr:content/retryDelay)) + '&jcr:content/reverseReplication=' + jcr:content/reverseReplication + '&jcr:content/serializationType=' + (jcr:content/serializationType == null ? '' : encodeURIComponent(jcr:content/serializationType)) + '&jcr:content/sling:resourceType=' + (jcr:content/sling:resourceType == null ? '' : encodeURIComponent(jcr:content/sling:resourceType)) + '&jcr:content/ssl=' + (jcr:content/ssl == null ? '' : encodeURIComponent(jcr:content/ssl)) + '&jcr:content/transportNTLMDomain=' + (jcr:content/transportNTLMDomain == null ? '' : encodeURIComponent(jcr:content/transportNTLMDomain)) + '&jcr:content/transportNTLMHost=' + (jcr:content/transportNTLMHost == null ? '' : encodeURIComponent(jcr:content/transportNTLMHost)) + '&jcr:content/transportPassword=' + (jcr:content/transportPassword == null ? '' : encodeURIComponent(jcr:content/transportPassword)) + '&jcr:content/transportUri=' + (jcr:content/transportUri == null ? '' : encodeURIComponent(jcr:content/transportUri)) + '&jcr:content/transportUser=' + (jcr:content/transportUser == null ? '' : encodeURIComponent(jcr:content/transportUser)) + '&jcr:content/triggerDistribute=' + jcr:content/triggerDistribute + '&jcr:content/triggerModified=' + jcr:content/triggerModified + '&jcr:content/triggerOnOffTime=' + jcr:content/triggerOnOffTime + '&jcr:content/triggerReceive=' + jcr:content/triggerReceive + '&jcr:content/triggerSpecific=' + jcr:content/triggerSpecific + '&jcr:content/userId=' + (jcr:content/userId == null ? '' : encodeURIComponent(jcr:content/userId)) + '&jcr:primaryType=' + (jcr:primaryType == null ? '' : encodeURIComponent(jcr:primaryType)) + '&:operation=' + (:operation == null ? '' : encodeURIComponent(:operation)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post etc/replication/treeactivation.html
		 * @return {void} 
		 */
		PostTreeActivation(ignoredeactivated: boolean, onlymodified: boolean, path: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'etc/replication/treeactivation.html?ignoredeactivated=' + ignoredeactivated + '&onlymodified=' + onlymodified + '&path=' + (path == null ? '' : encodeURIComponent(path)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get etc/truststore/truststore.p12
		 * @return {void} 
		 */
		GetTruststore(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'etc/truststore/truststore.p12', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get libs/granite/core/content/login.html
		 * @return {void} 
		 */
		GetLoginPage(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'libs/granite/core/content/login.html', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post libs/granite/security/post/authorizables
		 * @return {void} 
		 */
		PostAuthorizables(authorizableId: string, intermediatePath: string, createUser: string, createGroup: string, rep:password: string, profile/givenName: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'libs/granite/security/post/authorizables?authorizableId=' + (authorizableId == null ? '' : encodeURIComponent(authorizableId)) + '&intermediatePath=' + (intermediatePath == null ? '' : encodeURIComponent(intermediatePath)) + '&createUser=' + (createUser == null ? '' : encodeURIComponent(createUser)) + '&createGroup=' + (createGroup == null ? '' : encodeURIComponent(createGroup)) + '&rep:password=' + (rep:password == null ? '' : encodeURIComponent(rep:password)) + '&profile/givenName=' + (profile/givenName == null ? '' : encodeURIComponent(profile/givenName)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get libs/granite/security/truststore.json
		 * @return {TruststoreInfo} Retrieved AEM Truststore info
		 */
		GetTruststoreInfo(headersHandler?: () => HttpHeaders): Observable<TruststoreInfo> {
			return this.http.get<TruststoreInfo>(this.baseUri + 'libs/granite/security/truststore.json', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post system/console/bundles/{name}
		 * @return {void} 
		 */
		PostBundle(name: string, action: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'system/console/bundles/' + (name == null ? '' : encodeURIComponent(name)) + '&action=' + (action == null ? '' : encodeURIComponent(action)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post system/console/configMgr/com.adobe.granite.auth.saml.SamlAuthenticationHandler
		 * @return {string} Retrieved AEM SAML Configuration
		 */
		PostSamlConfiguration(post: boolean, apply: boolean, delete: boolean, action: string, $location: string, path: Array<string>, service.ranking: number, idpUrl: string, idpCertAlias: string, idpHttpRedirect: boolean, serviceProviderEntityId: string, assertionConsumerServiceURL: string, spPrivateKeyAlias: string, keyStorePassword: string, defaultRedirectUrl: string, userIDAttribute: string, useEncryption: boolean, createUser: boolean, addGroupMemberships: boolean, groupMembershipAttribute: string, defaultGroups: Array<string>, nameIdFormat: string, synchronizeAttributes: Array<string>, handleLogout: boolean, logoutUrl: string, clockTolerance: number, digestMethod: string, signatureMethod: string, userIntermediatePath: string, propertylist: Array<string>, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.post(this.baseUri + 'system/console/configMgr/com.adobe.granite.auth.saml.SamlAuthenticationHandler?post=' + post + '&apply=' + apply + '&delete=' + delete + '&action=' + (action == null ? '' : encodeURIComponent(action)) + '&$location=' + ($location == null ? '' : encodeURIComponent($location)) + '&' + path.map(z => `path=${encodeURIComponent(z)}`).join('&') + '&service.ranking=' + service.ranking + '&idpUrl=' + (idpUrl == null ? '' : encodeURIComponent(idpUrl)) + '&idpCertAlias=' + (idpCertAlias == null ? '' : encodeURIComponent(idpCertAlias)) + '&idpHttpRedirect=' + idpHttpRedirect + '&serviceProviderEntityId=' + (serviceProviderEntityId == null ? '' : encodeURIComponent(serviceProviderEntityId)) + '&assertionConsumerServiceURL=' + (assertionConsumerServiceURL == null ? '' : encodeURIComponent(assertionConsumerServiceURL)) + '&spPrivateKeyAlias=' + (spPrivateKeyAlias == null ? '' : encodeURIComponent(spPrivateKeyAlias)) + '&keyStorePassword=' + (keyStorePassword == null ? '' : encodeURIComponent(keyStorePassword)) + '&defaultRedirectUrl=' + (defaultRedirectUrl == null ? '' : encodeURIComponent(defaultRedirectUrl)) + '&userIDAttribute=' + (userIDAttribute == null ? '' : encodeURIComponent(userIDAttribute)) + '&useEncryption=' + useEncryption + '&createUser=' + createUser + '&addGroupMemberships=' + addGroupMemberships + '&groupMembershipAttribute=' + (groupMembershipAttribute == null ? '' : encodeURIComponent(groupMembershipAttribute)) + '&' + defaultGroups.map(z => `defaultGroups=${encodeURIComponent(z)}`).join('&') + '&nameIdFormat=' + (nameIdFormat == null ? '' : encodeURIComponent(nameIdFormat)) + '&' + synchronizeAttributes.map(z => `synchronizeAttributes=${encodeURIComponent(z)}`).join('&') + '&handleLogout=' + handleLogout + '&logoutUrl=' + (logoutUrl == null ? '' : encodeURIComponent(logoutUrl)) + '&clockTolerance=' + clockTolerance + '&digestMethod=' + (digestMethod == null ? '' : encodeURIComponent(digestMethod)) + '&signatureMethod=' + (signatureMethod == null ? '' : encodeURIComponent(signatureMethod)) + '&userIntermediatePath=' + (userIntermediatePath == null ? '' : encodeURIComponent(userIntermediatePath)) + '&' + propertylist.map(z => `propertylist=${encodeURIComponent(z)}`).join('&'), null, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Post system/console/jmx/com.adobe.granite:type=Repository/op/{action}
		 * @return {void} 
		 */
		PostJmxRepository(action: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'system/console/jmx/com.adobe.granite:type=Repository/op/' + (action == null ? '' : encodeURIComponent(action)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get system/console/status-productinfo.json
		 * @return {void} 
		 */
		GetAemProductInfo(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'system/console/status-productinfo.json', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get system/health
		 * @return {void} 
		 */
		GetAemHealthCheck(tags: string, combineTagsOr: boolean, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'system/health?tags=' + (tags == null ? '' : encodeURIComponent(tags)) + '&combineTagsOr=' + combineTagsOr, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get {intermediatePath}/{authorizableId}.ks.json
		 * @return {string} Retrieved Authorizable Keystore info
		 */
		GetAuthorizableKeystore(intermediatePath: string, authorizableId: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + (intermediatePath == null ? '' : encodeURIComponent(intermediatePath)) + '/' + (authorizableId == null ? '' : encodeURIComponent(authorizableId)) + '.ks.json', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Get {intermediatePath}/{authorizableId}/keystore/store.p12
		 * @return {void} 
		 */
		GetKeystore(intermediatePath: string, authorizableId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (intermediatePath == null ? '' : encodeURIComponent(intermediatePath)) + '/' + (authorizableId == null ? '' : encodeURIComponent(authorizableId)) + '/keystore/store.p12', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post {path}/
		 * @return {void} 
		 */
		PostPath(path: string, jcr:primaryType: string, :name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (path == null ? '' : encodeURIComponent(path)) + '/&jcr:primaryType=' + (jcr:primaryType == null ? '' : encodeURIComponent(jcr:primaryType)) + '&:name=' + (:name == null ? '' : encodeURIComponent(:name)) + '', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete {path}/{name}
		 * @return {void} 
		 */
		DeleteNode(path: string, name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + (path == null ? '' : encodeURIComponent(path)) + '/' + (name == null ? '' : encodeURIComponent(name)) + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get {path}/{name}
		 * @return {void} 
		 */
		GetNode(path: string, name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (path == null ? '' : encodeURIComponent(path)) + '/' + (name == null ? '' : encodeURIComponent(name)) + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post {path}/{name}.rw.html
		 * @return {void} 
		 */
		PostNodeRw(path: string, name: string, addMembers: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (path == null ? '' : encodeURIComponent(path)) + '/' + (name == null ? '' : encodeURIComponent(name)) + '.rw.html&addMembers=' + (addMembers == null ? '' : encodeURIComponent(addMembers)) + '', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}
	}

}

