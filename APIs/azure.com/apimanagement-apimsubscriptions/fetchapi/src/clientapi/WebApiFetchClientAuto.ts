export namespace My_Demo_Client {
	export class DemoClient {
		constructor(private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/') {
		}

		/**
		 * Lists all subscriptions of the API Management service instance.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/subscriptions
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} filter |   Field     |     Usage     |     Supported operators     |     Supported functions     |</br>|-------------|-------------|-------------|-------------|</br>| name | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| displayName | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| stateComment | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| ownerId | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| scope | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| userId | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| productId | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| state | filter | eq |     | </br>| user | expand |     |     | </br>
		 * @param {number} top Number of records to return.
		 * @param {number} skip Number of records to skip.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} A collection of the Subscription entities for the specified API Management service instance.
		 */
		Subscription_List(resourceGroupName: string, serviceName: string, filter: string, top: number, skip: number, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/subscriptions&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&skip=' + skip + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes the specified subscription.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/subscriptions/{sid}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} sid Subscription entity Identifier. The entity represents the association between a user and a product in API Management.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} The subscription details were successfully deleted.
		 */
		Subscription_Delete(resourceGroupName: string, serviceName: string, sid: string, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/subscriptions/' + (sid == null ? '' : encodeURIComponent(sid)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets the specified Subscription entity.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/subscriptions/{sid}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} sid Subscription entity Identifier. The entity represents the association between a user and a product in API Management.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} The response body contains the specified Subscription entity.
		 */
		Subscription_Get(resourceGroupName: string, serviceName: string, sid: string, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/subscriptions/' + (sid == null ? '' : encodeURIComponent(sid)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Creates or updates the subscription of specified user to the specified product.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/subscriptions/{sid}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} sid Subscription entity Identifier. The entity represents the association between a user and a product in API Management.
		 * @param {boolean} notify Notify change in Subscription State. 
		 *  - If false, do not send any email notification for change of state of subscription 
		 *  - If true, send email notification of change of state of subscription 
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {} requestBody Create parameters.
		 * @return {void} The user already subscribed to the product.
		 */
		Subscription_CreateOrUpdate(resourceGroupName: string, serviceName: string, sid: string, notify: boolean, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/subscriptions/' + (sid == null ? '' : encodeURIComponent(sid)) + '&notify=' + notify + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'put', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets the subscription keys.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/subscriptions/{sid}/listSecrets
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} sid Subscription entity Identifier. The entity represents the association between a user and a product in API Management.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} The response body contains subscription keys.
		 */
		Subscription_ListSecrets(resourceGroupName: string, serviceName: string, sid: string, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/subscriptions/' + (sid == null ? '' : encodeURIComponent(sid)) + '/listSecrets&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'post', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Regenerates primary key of existing subscription of the API Management service instance.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/subscriptions/{sid}/regeneratePrimaryKey
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} sid Subscription entity Identifier. The entity represents the association between a user and a product in API Management.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} 
		 */
		Subscription_RegeneratePrimaryKey(resourceGroupName: string, serviceName: string, sid: string, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/subscriptions/' + (sid == null ? '' : encodeURIComponent(sid)) + '/regeneratePrimaryKey&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'post', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Regenerates secondary key of existing subscription of the API Management service instance.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/subscriptions/{sid}/regenerateSecondaryKey
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} sid Subscription entity Identifier. The entity represents the association between a user and a product in API Management.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} 
		 */
		Subscription_RegenerateSecondaryKey(resourceGroupName: string, serviceName: string, sid: string, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/subscriptions/' + (sid == null ? '' : encodeURIComponent(sid)) + '/regenerateSecondaryKey&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'post', headers: headersHandler ? headersHandler() : undefined });
		}
	}

}

