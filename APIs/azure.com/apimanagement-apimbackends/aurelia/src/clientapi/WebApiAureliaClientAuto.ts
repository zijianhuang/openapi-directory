import {HttpClient} from 'aurelia-fetch-client';
import {autoinject} from 'aurelia-framework';
export namespace My_Demo_Client {
	@autoinject()
	export class DemoClient {
		constructor(private http: HttpClient) {
		}

		/**
		 * Lists a collection of backends in the specified service instance.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/backends
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} filter |   Field     |     Usage     |     Supported operators     |     Supported functions     |</br>|-------------|-------------|-------------|-------------|</br>| name | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| title | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| url | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>
		 * @param {number} top Number of records to return.
		 * @param {number} skip Number of records to skip.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Lists a collection of Backend entities.
		 */
		Backend_ListByService(resourceGroupName: string, serviceName: string, filter: string, top: number, skip: number, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.get('subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/backends&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&skip=' + skip + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes the specified backend.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/backends/{backendId}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} backendId Identifier of the Backend entity. Must be unique in the current API Management service instance.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} The backend was successfully deleted.
		 */
		Backend_Delete(resourceGroupName: string, serviceName: string, backendId: string, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.delete('subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/backends/' + (backendId == null ? '' : encodeURIComponent(backendId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets the details of the backend specified by its identifier.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/backends/{backendId}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} backendId Identifier of the Backend entity. Must be unique in the current API Management service instance.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} The response body contains the specified Backend entity.
		 */
		Backend_Get(resourceGroupName: string, serviceName: string, backendId: string, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.get('subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/backends/' + (backendId == null ? '' : encodeURIComponent(backendId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Creates or Updates a backend.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/backends/{backendId}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} backendId Identifier of the Backend entity. Must be unique in the current API Management service instance.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {} requestBody Create parameters.
		 * @return {void} The existing backend was successfully updated.
		 */
		Backend_CreateOrUpdate(resourceGroupName: string, serviceName: string, backendId: string, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.put('subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/backends/' + (backendId == null ? '' : encodeURIComponent(backendId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Notifies the APIM proxy to create a new connection to the backend after the specified timeout. If no timeout was specified, timeout of 2 minutes is used.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/backends/{backendId}/reconnect
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} backendId Identifier of the Backend entity. Must be unique in the current API Management service instance.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {} requestBody Reconnect request parameters.
		 * @return {void} 
		 */
		Backend_Reconnect(resourceGroupName: string, serviceName: string, backendId: string, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.post('subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/backends/' + (backendId == null ? '' : encodeURIComponent(backendId)) + '/reconnect&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { headers: headersHandler ? headersHandler() : undefined });
		}
	}

}

