export namespace My_Demo_Client {

	/**An API key used for authenticating with a configuration store endpoint. */
	export interface ApiKey {

		/**A connection string that can be used by supporting clients for authentication. */
		connectionString?: string;

		/**The key ID. */
		id?: string;

		/**The last time any of the key's properties were modified. */
		lastModified?: Date;

		/**A name for the key describing its usage. */
		name?: string;

		/**Whether this key can only be used for read operations. */
		readOnly?: boolean;

		/**The value of the key that is used for authentication purposes. */
		value?: string;
	}


	/**The result of a request to list API keys. */
	export interface ApiKeyListResult {

		/**The URI that can be used to request the next set of paged results. */
		nextLink?: string;

		/**The collection value. */
		value?: Array<ApiKey>;
	}


	/**Parameters used for checking whether a resource name is available. */
	export interface CheckNameAvailabilityParameters {

		/**The name to check for availability. */
		name: string;

		/**The resource type to check for name availability. */
		type: CheckNameAvailabilityParametersType;
	}

	export enum CheckNameAvailabilityParametersType { Microsoft.AppConfiguration/configurationStores = 0 }


	/**The configuration store along with all resource properties. The Configuration Store will have all information to begin utilizing it. */
	export interface ConfigurationStore {

		/**An identity that can be associated with a resource. */
		identity?: ResourceIdentity;

		/**The properties of a configuration store. */
		properties?: ConfigurationStoreProperties;

		/**Describes a configuration store SKU. */
		sku: Sku;
	}


	/**The result of a request to list configuration stores. */
	export interface ConfigurationStoreListResult {

		/**The URI that can be used to request the next set of paged results. */
		nextLink?: string;

		/**The collection value. */
		value?: Array<ConfigurationStore>;
	}


	/**The properties of a configuration store. */
	export interface ConfigurationStoreProperties {

		/**The creation date of configuration store. */
		creationDate?: Date;

		/**The encryption settings for a configuration store. */
		encryption?: EncryptionProperties;

		/**The DNS endpoint where the configuration store API will be available. */
		endpoint?: string;

		/**The provisioning state of the configuration store. */
		provisioningState?: ConfigurationStorePropertiesProvisioningState;
	}

	export enum ConfigurationStorePropertiesProvisioningState { Creating = 0, Updating = 1, Deleting = 2, Succeeded = 3, Failed = 4, Canceled = 5 }


	/**The properties for updating a configuration store. */
	export interface ConfigurationStorePropertiesUpdateParameters {

		/**The encryption settings for a configuration store. */
		encryption?: EncryptionProperties;
	}


	/**The parameters for updating a configuration store. */
	export interface ConfigurationStoreUpdateParameters {

		/**An identity that can be associated with a resource. */
		identity?: ResourceIdentity;

		/**The properties for updating a configuration store. */
		properties?: ConfigurationStorePropertiesUpdateParameters;

		/**Describes a configuration store SKU. */
		sku?: Sku;

		/**The ARM resource tags. */
		tags?: string;
	}


	/**The encryption settings for a configuration store. */
	export interface EncryptionProperties {

		/**Settings concerning key vault encryption for a configuration store. */
		keyVaultProperties?: KeyVaultProperties;
	}


	/**AppConfiguration error object. */
	export interface Error {

		/**Error code. */
		code?: string;

		/**Error message. */
		message?: string;
	}


	/**The result of a request to retrieve a key-value from the specified configuration store. */
	export interface KeyValue {

		/**
		 * The content type of the key-value's value.
		 * Providing a proper content-type can enable transformations of values when they are retrieved by applications.
		 */
		contentType?: string;

		/**An ETag indicating the state of a key-value within a configuration store. */
		eTag?: string;

		/**
		 * The primary identifier of a key-value.
		 * The key is used in unison with the label to uniquely identify a key-value.
		 */
		key?: string;

		/**
		 * A value used to group key-values.
		 * The label is used in unison with the key to uniquely identify a key-value.
		 */
		label?: string;

		/**The last time a modifying operation was performed on the given key-value. */
		lastModified?: Date;

		/**
		 * A value indicating whether the key-value is locked.
		 * A locked key-value may not be modified until it is unlocked.
		 */
		locked?: boolean;

		/**A dictionary of tags that can help identify what a key-value may be applicable for. */
		tags?: string;

		/**The value of the key-value. */
		value?: string;
	}


	/**Settings concerning key vault encryption for a configuration store. */
	export interface KeyVaultProperties {

		/**The client id of the identity which will be used to access key vault. */
		identityClientId?: string;

		/**The URI of the key vault key used to encrypt data. */
		keyIdentifier?: string;
	}


	/**The parameters used to list a configuration store key-value */
	export interface ListKeyValueParameters {

		/**The key to retrieve. */
		key: string;

		/**The label of the key. */
		label?: string;
	}


	/**The result of a request to check the availability of a resource name. */
	export interface NameAvailabilityStatus {

		/**If any, the error message that provides more detail for the reason that the name is not available. */
		message?: string;

		/**The value indicating whether the resource name is available. */
		nameAvailable?: boolean;

		/**If any, the reason that the name is not available. */
		reason?: string;
	}


	/**The definition of a configuration store operation. */
	export interface OperationDefinition {

		/**The display information for a configuration store operation. */
		display?: OperationDefinitionDisplay;

		/**Operation name: {provider}/{resource}/{operation}. */
		name?: string;
	}


	/**The display information for a configuration store operation. */
	export interface OperationDefinitionDisplay {

		/**The description for the operation. */
		description?: string;

		/**The operation that users can perform. */
		operation?: string;

		/**The resource provider name: Microsoft App Configuration." */
		provider?: string;

		/**The resource on which the operation is performed. */
		resource?: string;
	}


	/**The result of a request to list configuration store operations. */
	export interface OperationDefinitionListResult {

		/**The URI that can be used to request the next set of paged results. */
		nextLink?: string;

		/**The collection value. */
		value?: Array<OperationDefinition>;
	}


	/**Private endpoint which a connection belongs to. */
	export interface PrivateEndpoint {

		/**The resource Id for private endpoint */
		id?: string;
	}


	/**A private endpoint connection */
	export interface PrivateEndpointConnection {

		/**The resource ID. */
		id?: string;

		/**The name of the resource. */
		name?: string;

		/**Properties of a private endpoint connection. */
		properties?: PrivateEndpointConnectionProperties;

		/**The type of the resource. */
		type?: string;
	}


	/**A list of private endpoint connections */
	export interface PrivateEndpointConnectionListResult {

		/**The URI that can be used to request the next set of paged results. */
		nextLink?: string;

		/**The collection value. */
		value?: Array<PrivateEndpointConnection>;
	}


	/**Properties of a private endpoint connection. */
	export interface PrivateEndpointConnectionProperties {

		/**Private endpoint which a connection belongs to. */
		privateEndpoint?: PrivateEndpoint;

		/**The state of a private link service connection. */
		privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;

		/**The provisioning status of the private endpoint connection. */
		provisioningState?: PrivateEndpointConnectionPropertiesProvisioningState;
	}

	export enum PrivateEndpointConnectionPropertiesProvisioningState { Creating = 0, Updating = 1, Deleting = 2, Succeeded = 3, Failed = 4, Canceled = 5 }


	/**A resource that supports private link capabilities. */
	export interface PrivateLinkResource {

		/**The resource ID. */
		id?: string;

		/**The name of the resource. */
		name?: string;

		/**Properties of a private link resource. */
		properties?: PrivateLinkResourceProperties;

		/**The type of the resource. */
		type?: string;
	}


	/**A list of private link resources. */
	export interface PrivateLinkResourceListResult {

		/**The URI that can be used to request the next set of paged results. */
		nextLink?: string;

		/**The collection value. */
		value?: Array<PrivateLinkResource>;
	}


	/**Properties of a private link resource. */
	export interface PrivateLinkResourceProperties {

		/**The private link resource group id. */
		groupId?: string;

		/**The private link resource required member names. */
		requiredMembers?: Array<string>;
	}


	/**The state of a private link service connection. */
	export interface PrivateLinkServiceConnectionState {

		/**Any action that is required beyond basic workflow (approve/ reject/ disconnect) */
		actionsRequired?: PrivateLinkServiceConnectionStateActionsRequired;

		/**The private link service connection description. */
		description?: string;

		/**The private link service connection status. */
		status?: PrivateLinkServiceConnectionStateStatus;
	}

	export enum PrivateLinkServiceConnectionStateActionsRequired { None = 0, Recreate = 1 }

	export enum PrivateLinkServiceConnectionStateStatus { Pending = 0, Approved = 1, Rejected = 2, Disconnected = 3 }


	/**The parameters used to regenerate an API key. */
	export interface RegenerateKeyParameters {

		/**The id of the key to regenerate. */
		id?: string;
	}


	/**An Azure resource. */
	export interface Resource {

		/**The resource ID. */
		id?: string;

		/**The location of the resource. This cannot be changed after the resource is created. */
		location: string;

		/**The name of the resource. */
		name?: string;

		/**The tags of the resource. */
		tags?: string;

		/**The type of the resource. */
		type?: string;
	}


	/**An identity that can be associated with a resource. */
	export interface ResourceIdentity {

		/**The principal id of the identity. This property will only be provided for a system-assigned identity. */
		principalId?: string;

		/**The tenant id associated with the resource's identity. This property will only be provided for a system-assigned identity. */
		tenantId?: string;

		/**The type of managed identity used. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user-assigned identities. The type 'None' will remove any identities. */
		type?: ResourceIdentityType;

		/**The list of user-assigned identities associated with the resource. The user-assigned identity dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. */
		userAssignedIdentities?: string;
	}

	export enum ResourceIdentityType { None = 0, SystemAssigned = 1, UserAssigned = 2, SystemAssigned, UserAssigned = 3 }


	/**Describes a configuration store SKU. */
	export interface Sku {

		/**The SKU name of the configuration store. */
		name: string;
	}


	/**A resource identity that is managed by the user of the service. */
	export interface UserIdentity {

		/**The client ID of the user-assigned identity. */
		clientId?: string;

		/**The principal ID of the user-assigned identity. */
		principalId?: string;
	}

	export class DemoClient {
		constructor(private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/') {
		}

		/**
		 * Lists the operations available from this provider.
		 * Get providers/Microsoft.AppConfiguration/operations
		 * @param {string} api_version The client API version.
		 * @param {string} skipToken A skip token is used to continue retrieving items after an operation returns a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skipToken parameter that specifies a starting point to use for subsequent calls.
		 * @return {OperationDefinitionListResult} The request was successful; the request was well-formed and received properly.
		 */
		Operations_List(api_version: string, skipToken: string, headersHandler?: () => {[header: string]: string}): Promise<OperationDefinitionListResult> {
			return fetch(this.baseUri + 'providers/Microsoft.AppConfiguration/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&skipToken=' + (skipToken == null ? '' : encodeURIComponent(skipToken)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Checks whether the configuration store name is available for use.
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.AppConfiguration/checkNameAvailability
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} api_version The client API version.
		 * @param {CheckNameAvailabilityParameters} requestBody The object containing information for the availability request.
		 * @return {NameAvailabilityStatus} The request was successful; the request was well-formed and received properly.
		 */
		Operations_CheckNameAvailability(subscriptionId: string, api_version: string, requestBody: CheckNameAvailabilityParameters, headersHandler?: () => {[header: string]: string}): Promise<NameAvailabilityStatus> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.AppConfiguration/checkNameAvailability&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Lists the configuration stores for a given subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.AppConfiguration/configurationStores
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} api_version The client API version.
		 * @param {string} skipToken A skip token is used to continue retrieving items after an operation returns a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skipToken parameter that specifies a starting point to use for subsequent calls.
		 * @return {ConfigurationStoreListResult} The request was successful; the request was well-formed and received properly.
		 */
		ConfigurationStores_List(subscriptionId: string, api_version: string, skipToken: string, headersHandler?: () => {[header: string]: string}): Promise<ConfigurationStoreListResult> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.AppConfiguration/configurationStores&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&skipToken=' + (skipToken == null ? '' : encodeURIComponent(skipToken)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Lists the configuration stores for a given resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} api_version The client API version.
		 * @param {string} skipToken A skip token is used to continue retrieving items after an operation returns a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skipToken parameter that specifies a starting point to use for subsequent calls.
		 * @return {ConfigurationStoreListResult} The request was successful; the request was well-formed and received properly.
		 */
		ConfigurationStores_ListByResourceGroup(subscriptionId: string, resourceGroupName: string, api_version: string, skipToken: string, headersHandler?: () => {[header: string]: string}): Promise<ConfigurationStoreListResult> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppConfiguration/configurationStores&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&skipToken=' + (skipToken == null ? '' : encodeURIComponent(skipToken)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Deletes a configuration store.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores/{configStoreName}
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} configStoreName The name of the configuration store.
		 * @param {string} api_version The client API version.
		 * @return {void} The request was successful; the request was well-formed and received properly.
		 */
		ConfigurationStores_Delete(subscriptionId: string, resourceGroupName: string, configStoreName: string, api_version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppConfiguration/configurationStores/' + (configStoreName == null ? '' : encodeURIComponent(configStoreName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets the properties of the specified configuration store.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores/{configStoreName}
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} configStoreName The name of the configuration store.
		 * @param {string} api_version The client API version.
		 * @return {ConfigurationStore} The request was successful; the request was well-formed and received properly.
		 */
		ConfigurationStores_Get(subscriptionId: string, resourceGroupName: string, configStoreName: string, api_version: string, headersHandler?: () => {[header: string]: string}): Promise<ConfigurationStore> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppConfiguration/configurationStores/' + (configStoreName == null ? '' : encodeURIComponent(configStoreName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Creates a configuration store with the specified parameters.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores/{configStoreName}
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} configStoreName The name of the configuration store.
		 * @param {string} api_version The client API version.
		 * @param {ConfigurationStore} requestBody The parameters for creating a configuration store.
		 * @return {ConfigurationStore} The request was successful; the request was well-formed and received properly.
		 */
		ConfigurationStores_Create(subscriptionId: string, resourceGroupName: string, configStoreName: string, api_version: string, requestBody: ConfigurationStore, headersHandler?: () => {[header: string]: string}): Promise<ConfigurationStore> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppConfiguration/configurationStores/' + (configStoreName == null ? '' : encodeURIComponent(configStoreName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Lists the access key for the specified configuration store.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores/{configStoreName}/ListKeys
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} configStoreName The name of the configuration store.
		 * @param {string} api_version The client API version.
		 * @param {string} skipToken A skip token is used to continue retrieving items after an operation returns a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skipToken parameter that specifies a starting point to use for subsequent calls.
		 * @return {ApiKeyListResult} The request was successful; the request was well-formed and received properly.
		 */
		ConfigurationStores_ListKeys(subscriptionId: string, resourceGroupName: string, configStoreName: string, api_version: string, skipToken: string, headersHandler?: () => {[header: string]: string}): Promise<ApiKeyListResult> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppConfiguration/configurationStores/' + (configStoreName == null ? '' : encodeURIComponent(configStoreName)) + '/ListKeys&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&skipToken=' + (skipToken == null ? '' : encodeURIComponent(skipToken)), { method: 'post', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Regenerates an access key for the specified configuration store.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores/{configStoreName}/RegenerateKey
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} configStoreName The name of the configuration store.
		 * @param {string} api_version The client API version.
		 * @param {RegenerateKeyParameters} requestBody The parameters for regenerating an access key.
		 * @return {ApiKey} The request was successful; the request was well-formed and received properly.
		 */
		ConfigurationStores_RegenerateKey(subscriptionId: string, resourceGroupName: string, configStoreName: string, api_version: string, requestBody: RegenerateKeyParameters, headersHandler?: () => {[header: string]: string}): Promise<ApiKey> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppConfiguration/configurationStores/' + (configStoreName == null ? '' : encodeURIComponent(configStoreName)) + '/RegenerateKey&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Lists a configuration store key-value.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores/{configStoreName}/listKeyValue
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} configStoreName The name of the configuration store.
		 * @param {string} api_version The client API version.
		 * @param {ListKeyValueParameters} requestBody The parameters for retrieving a key-value.
		 * @return {KeyValue} The request was successful; the request was well-formed and received properly.
		 */
		ConfigurationStores_ListKeyValue(subscriptionId: string, resourceGroupName: string, configStoreName: string, api_version: string, requestBody: ListKeyValueParameters, headersHandler?: () => {[header: string]: string}): Promise<KeyValue> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppConfiguration/configurationStores/' + (configStoreName == null ? '' : encodeURIComponent(configStoreName)) + '/listKeyValue&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Lists all private endpoint connections for a configuration store.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores/{configStoreName}/privateEndpointConnections
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} configStoreName The name of the configuration store.
		 * @param {string} api_version The client API version.
		 * @return {PrivateEndpointConnectionListResult} The request was successful; the request was well-formed and received properly.
		 */
		PrivateEndpointConnections_ListByConfigurationStore(subscriptionId: string, resourceGroupName: string, configStoreName: string, api_version: string, headersHandler?: () => {[header: string]: string}): Promise<PrivateEndpointConnectionListResult> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppConfiguration/configurationStores/' + (configStoreName == null ? '' : encodeURIComponent(configStoreName)) + '/privateEndpointConnections&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Deletes a private endpoint connection.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores/{configStoreName}/privateEndpointConnections/{privateEndpointConnectionName}
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} configStoreName The name of the configuration store.
		 * @param {string} api_version The client API version.
		 * @param {string} privateEndpointConnectionName Private endpoint connection name
		 * @return {void} The request was successful; the request was well-formed and received properly.
		 */
		PrivateEndpointConnections_Delete(subscriptionId: string, resourceGroupName: string, configStoreName: string, api_version: string, privateEndpointConnectionName: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppConfiguration/configurationStores/' + (configStoreName == null ? '' : encodeURIComponent(configStoreName)) + '/privateEndpointConnections/' + (privateEndpointConnectionName == null ? '' : encodeURIComponent(privateEndpointConnectionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets the specified private endpoint connection associated with the configuration store.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores/{configStoreName}/privateEndpointConnections/{privateEndpointConnectionName}
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} configStoreName The name of the configuration store.
		 * @param {string} api_version The client API version.
		 * @param {string} privateEndpointConnectionName Private endpoint connection name
		 * @return {PrivateEndpointConnection} The request was successful; the request was well-formed and received properly.
		 */
		PrivateEndpointConnections_Get(subscriptionId: string, resourceGroupName: string, configStoreName: string, api_version: string, privateEndpointConnectionName: string, headersHandler?: () => {[header: string]: string}): Promise<PrivateEndpointConnection> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppConfiguration/configurationStores/' + (configStoreName == null ? '' : encodeURIComponent(configStoreName)) + '/privateEndpointConnections/' + (privateEndpointConnectionName == null ? '' : encodeURIComponent(privateEndpointConnectionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Update the state of the specified private endpoint connection associated with the configuration store.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores/{configStoreName}/privateEndpointConnections/{privateEndpointConnectionName}
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} configStoreName The name of the configuration store.
		 * @param {string} api_version The client API version.
		 * @param {string} privateEndpointConnectionName Private endpoint connection name
		 * @param {PrivateEndpointConnection} requestBody The private endpoint connection properties.
		 * @return {PrivateEndpointConnection} The request was successful; the request was well-formed and received properly.
		 */
		PrivateEndpointConnections_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, configStoreName: string, api_version: string, privateEndpointConnectionName: string, requestBody: PrivateEndpointConnection, headersHandler?: () => {[header: string]: string}): Promise<PrivateEndpointConnection> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppConfiguration/configurationStores/' + (configStoreName == null ? '' : encodeURIComponent(configStoreName)) + '/privateEndpointConnections/' + (privateEndpointConnectionName == null ? '' : encodeURIComponent(privateEndpointConnectionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Gets the private link resources that need to be created for a configuration store.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores/{configStoreName}/privateLinkResources
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} configStoreName The name of the configuration store.
		 * @param {string} api_version The client API version.
		 * @return {PrivateLinkResourceListResult} The request was successful; the request was well-formed and received properly.
		 */
		PrivateLinkResources_ListByConfigurationStore(subscriptionId: string, resourceGroupName: string, configStoreName: string, api_version: string, headersHandler?: () => {[header: string]: string}): Promise<PrivateLinkResourceListResult> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppConfiguration/configurationStores/' + (configStoreName == null ? '' : encodeURIComponent(configStoreName)) + '/privateLinkResources&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Gets a private link resource that need to be created for a configuration store.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores/{configStoreName}/privateLinkResources/{groupName}
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} configStoreName The name of the configuration store.
		 * @param {string} api_version The client API version.
		 * @param {string} groupName The name of the private link resource group.
		 * @return {PrivateLinkResource} The request was successful; the request was well-formed and received properly.
		 */
		PrivateLinkResources_Get(subscriptionId: string, resourceGroupName: string, configStoreName: string, api_version: string, groupName: string, headersHandler?: () => {[header: string]: string}): Promise<PrivateLinkResource> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppConfiguration/configurationStores/' + (configStoreName == null ? '' : encodeURIComponent(configStoreName)) + '/privateLinkResources/' + (groupName == null ? '' : encodeURIComponent(groupName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}
	}

}

