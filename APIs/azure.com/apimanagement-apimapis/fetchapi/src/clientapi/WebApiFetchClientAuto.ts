export namespace My_Demo_Client {
	export class DemoClient {
		constructor(private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/') {
		}

		/**
		 * Lists all APIs of the API Management service instance.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} filter |   Field     |     Usage     |     Supported operators     |     Supported functions     |</br>|-------------|-------------|-------------|-------------|</br>| name | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| displayName | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| description | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| serviceUrl | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| path | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>
		 * @param {number} top Number of records to return.
		 * @param {number} skip Number of records to skip.
		 * @param {string} tags Include tags in the response.
		 * @param {boolean} expandApiVersionSet Include full ApiVersionSet resource in response
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Paged Result response of Apis.
		 */
		Api_ListByService(resourceGroupName: string, serviceName: string, filter: string, top: number, skip: number, tags: string, expandApiVersionSet: boolean, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apis&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&skip=' + skip + '&tags=' + (tags == null ? '' : encodeURIComponent(tags)) + '&expandApiVersionSet=' + expandApiVersionSet + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes the specified API of the API Management service instance.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} apiId API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
		 * @param {boolean} deleteRevisions Delete all revisions of the Api.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} The API was successfully deleted.
		 */
		Api_Delete(resourceGroupName: string, serviceName: string, apiId: string, deleteRevisions: boolean, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '&deleteRevisions=' + deleteRevisions + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets the details of the API specified by its identifier.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} apiId API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} The response body contains the specified API entity.
		 */
		Api_Get(resourceGroupName: string, serviceName: string, apiId: string, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Creates new or updates existing specified API of the API Management service instance.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} apiId API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {} requestBody Create or update parameters.
		 * @return {void} API was successfully updated.
		 */
		Api_CreateOrUpdate(resourceGroupName: string, serviceName: string, apiId: string, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'put', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Lists all diagnostics of an API.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/diagnostics
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} apiId API identifier. Must be unique in the current API Management service instance.
		 * @param {string} filter |   Field     |     Usage     |     Supported operators     |     Supported functions     |</br>|-------------|-------------|-------------|-------------|</br>| name | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>
		 * @param {number} top Number of records to return.
		 * @param {number} skip Number of records to skip.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Paged Result response of diagnostics for an API.
		 */
		ApiDiagnostic_ListByService(resourceGroupName: string, serviceName: string, apiId: string, filter: string, top: number, skip: number, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/diagnostics&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&skip=' + skip + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes the specified Diagnostic from an API.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/diagnostics/{diagnosticId}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} apiId API identifier. Must be unique in the current API Management service instance.
		 * @param {string} diagnosticId Diagnostic identifier. Must be unique in the current API Management service instance.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Diagnostic successfully removed
		 */
		ApiDiagnostic_Delete(resourceGroupName: string, serviceName: string, apiId: string, diagnosticId: string, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/diagnostics/' + (diagnosticId == null ? '' : encodeURIComponent(diagnosticId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets the details of the Diagnostic for an API specified by its identifier.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/diagnostics/{diagnosticId}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} apiId API identifier. Must be unique in the current API Management service instance.
		 * @param {string} diagnosticId Diagnostic identifier. Must be unique in the current API Management service instance.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} The response body contains the specified Diagnostic entity.
		 */
		ApiDiagnostic_Get(resourceGroupName: string, serviceName: string, apiId: string, diagnosticId: string, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/diagnostics/' + (diagnosticId == null ? '' : encodeURIComponent(diagnosticId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Creates a new Diagnostic for an API or updates an existing one.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/diagnostics/{diagnosticId}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} apiId API identifier. Must be unique in the current API Management service instance.
		 * @param {string} diagnosticId Diagnostic identifier. Must be unique in the current API Management service instance.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {} requestBody Create parameters.
		 * @return {void} Diagnostic was successfully updated.
		 */
		ApiDiagnostic_CreateOrUpdate(resourceGroupName: string, serviceName: string, apiId: string, diagnosticId: string, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/diagnostics/' + (diagnosticId == null ? '' : encodeURIComponent(diagnosticId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'put', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Lists all issues associated with the specified API.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/issues
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} apiId API identifier. Must be unique in the current API Management service instance.
		 * @param {string} filter |   Field     |     Usage     |     Supported operators     |     Supported functions     |</br>|-------------|-------------|-------------|-------------|</br>| name | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| userId | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| state | filter | eq |     | </br>
		 * @param {boolean} expandCommentsAttachments Expand the comment attachments. 
		 * @param {number} top Number of records to return.
		 * @param {number} skip Number of records to skip.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Paged Result response of issues for the API.
		 */
		ApiIssue_ListByService(resourceGroupName: string, serviceName: string, apiId: string, filter: string, expandCommentsAttachments: boolean, top: number, skip: number, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/issues&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&expandCommentsAttachments=' + expandCommentsAttachments + '&top=' + top + '&skip=' + skip + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes the specified Issue from an API.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/issues/{issueId}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} apiId API identifier. Must be unique in the current API Management service instance.
		 * @param {string} issueId Issue identifier. Must be unique in the current API Management service instance.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Issue successfully removed
		 */
		ApiIssue_Delete(resourceGroupName: string, serviceName: string, apiId: string, issueId: string, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/issues/' + (issueId == null ? '' : encodeURIComponent(issueId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets the details of the Issue for an API specified by its identifier.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/issues/{issueId}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} apiId API identifier. Must be unique in the current API Management service instance.
		 * @param {string} issueId Issue identifier. Must be unique in the current API Management service instance.
		 * @param {boolean} expandCommentsAttachments Expand the comment attachments. 
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} The response body contains the specified Issue entity.
		 */
		ApiIssue_Get(resourceGroupName: string, serviceName: string, apiId: string, issueId: string, expandCommentsAttachments: boolean, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/issues/' + (issueId == null ? '' : encodeURIComponent(issueId)) + '&expandCommentsAttachments=' + expandCommentsAttachments + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Creates a new Issue for an API or updates an existing one.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/issues/{issueId}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} apiId API identifier. Must be unique in the current API Management service instance.
		 * @param {string} issueId Issue identifier. Must be unique in the current API Management service instance.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {} requestBody Create parameters.
		 * @return {void} Api issue successfully updated
		 */
		ApiIssue_CreateOrUpdate(resourceGroupName: string, serviceName: string, apiId: string, issueId: string, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/issues/' + (issueId == null ? '' : encodeURIComponent(issueId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'put', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Lists all attachments for the Issue associated with the specified API.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/issues/{issueId}/attachments
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} apiId API identifier. Must be unique in the current API Management service instance.
		 * @param {string} issueId Issue identifier. Must be unique in the current API Management service instance.
		 * @param {string} filter |   Field     |     Usage     |     Supported operators     |     Supported functions     |</br>|-------------|-------------|-------------|-------------|</br>| name | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| userId | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>
		 * @param {number} top Number of records to return.
		 * @param {number} skip Number of records to skip.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Paged Result response of issue attachments for the API.
		 */
		ApiIssueAttachment_ListByService(resourceGroupName: string, serviceName: string, apiId: string, issueId: string, filter: string, top: number, skip: number, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/issues/' + (issueId == null ? '' : encodeURIComponent(issueId)) + '/attachments&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&skip=' + skip + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes the specified comment from an Issue.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/issues/{issueId}/attachments/{attachmentId}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} apiId API identifier. Must be unique in the current API Management service instance.
		 * @param {string} issueId Issue identifier. Must be unique in the current API Management service instance.
		 * @param {string} attachmentId Attachment identifier within an Issue. Must be unique in the current Issue.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Attachment successfully removed
		 */
		ApiIssueAttachment_Delete(resourceGroupName: string, serviceName: string, apiId: string, issueId: string, attachmentId: string, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/issues/' + (issueId == null ? '' : encodeURIComponent(issueId)) + '/attachments/' + (attachmentId == null ? '' : encodeURIComponent(attachmentId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets the details of the issue Attachment for an API specified by its identifier.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/issues/{issueId}/attachments/{attachmentId}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} apiId API identifier. Must be unique in the current API Management service instance.
		 * @param {string} issueId Issue identifier. Must be unique in the current API Management service instance.
		 * @param {string} attachmentId Attachment identifier within an Issue. Must be unique in the current Issue.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} The response body contains the specified issue Attachment entity.
		 */
		ApiIssueAttachment_Get(resourceGroupName: string, serviceName: string, apiId: string, issueId: string, attachmentId: string, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/issues/' + (issueId == null ? '' : encodeURIComponent(issueId)) + '/attachments/' + (attachmentId == null ? '' : encodeURIComponent(attachmentId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Creates a new Attachment for the Issue in an API or updates an existing one.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/issues/{issueId}/attachments/{attachmentId}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} apiId API identifier. Must be unique in the current API Management service instance.
		 * @param {string} issueId Issue identifier. Must be unique in the current API Management service instance.
		 * @param {string} attachmentId Attachment identifier within an Issue. Must be unique in the current Issue.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {} requestBody Create parameters.
		 * @return {void} Api issue attachment successfully updated
		 */
		ApiIssueAttachment_CreateOrUpdate(resourceGroupName: string, serviceName: string, apiId: string, issueId: string, attachmentId: string, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/issues/' + (issueId == null ? '' : encodeURIComponent(issueId)) + '/attachments/' + (attachmentId == null ? '' : encodeURIComponent(attachmentId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'put', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Lists all comments for the Issue associated with the specified API.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/issues/{issueId}/comments
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} apiId API identifier. Must be unique in the current API Management service instance.
		 * @param {string} issueId Issue identifier. Must be unique in the current API Management service instance.
		 * @param {string} filter |   Field     |     Usage     |     Supported operators     |     Supported functions     |</br>|-------------|-------------|-------------|-------------|</br>| name | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| userId | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>
		 * @param {number} top Number of records to return.
		 * @param {number} skip Number of records to skip.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Paged Result response of issue comments for the API.
		 */
		ApiIssueComment_ListByService(resourceGroupName: string, serviceName: string, apiId: string, issueId: string, filter: string, top: number, skip: number, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/issues/' + (issueId == null ? '' : encodeURIComponent(issueId)) + '/comments&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&skip=' + skip + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes the specified comment from an Issue.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/issues/{issueId}/comments/{commentId}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} apiId API identifier. Must be unique in the current API Management service instance.
		 * @param {string} issueId Issue identifier. Must be unique in the current API Management service instance.
		 * @param {string} commentId Comment identifier within an Issue. Must be unique in the current Issue.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Comment successfully removed
		 */
		ApiIssueComment_Delete(resourceGroupName: string, serviceName: string, apiId: string, issueId: string, commentId: string, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/issues/' + (issueId == null ? '' : encodeURIComponent(issueId)) + '/comments/' + (commentId == null ? '' : encodeURIComponent(commentId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets the details of the issue Comment for an API specified by its identifier.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/issues/{issueId}/comments/{commentId}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} apiId API identifier. Must be unique in the current API Management service instance.
		 * @param {string} issueId Issue identifier. Must be unique in the current API Management service instance.
		 * @param {string} commentId Comment identifier within an Issue. Must be unique in the current Issue.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} The response body contains the specified issue Comment entity.
		 */
		ApiIssueComment_Get(resourceGroupName: string, serviceName: string, apiId: string, issueId: string, commentId: string, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/issues/' + (issueId == null ? '' : encodeURIComponent(issueId)) + '/comments/' + (commentId == null ? '' : encodeURIComponent(commentId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Creates a new Comment for the Issue in an API or updates an existing one.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/issues/{issueId}/comments/{commentId}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} apiId API identifier. Must be unique in the current API Management service instance.
		 * @param {string} issueId Issue identifier. Must be unique in the current API Management service instance.
		 * @param {string} commentId Comment identifier within an Issue. Must be unique in the current Issue.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {} requestBody Create parameters.
		 * @return {void} Api issue comment successfully updated
		 */
		ApiIssueComment_CreateOrUpdate(resourceGroupName: string, serviceName: string, apiId: string, issueId: string, commentId: string, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/issues/' + (issueId == null ? '' : encodeURIComponent(issueId)) + '/comments/' + (commentId == null ? '' : encodeURIComponent(commentId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'put', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Lists a collection of the operations for the specified API.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/operations
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} apiId API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
		 * @param {string} filter |   Field     |     Usage     |     Supported operators     |     Supported functions     |</br>|-------------|-------------|-------------|-------------|</br>| name | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| displayName | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| method | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| description | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| urlTemplate | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>
		 * @param {number} top Number of records to return.
		 * @param {number} skip Number of records to skip.
		 * @param {string} tags Include tags in the response.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} A collection of operation summary entities at the API level.
		 */
		ApiOperation_ListByApi(resourceGroupName: string, serviceName: string, apiId: string, filter: string, top: number, skip: number, tags: string, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&skip=' + skip + '&tags=' + (tags == null ? '' : encodeURIComponent(tags)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes the specified operation in the API.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/operations/{operationId}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} apiId API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
		 * @param {string} operationId Operation identifier within an API. Must be unique in the current API Management service instance.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} API operation successfully removed
		 */
		ApiOperation_Delete(resourceGroupName: string, serviceName: string, apiId: string, operationId: string, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/operations/' + (operationId == null ? '' : encodeURIComponent(operationId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets the details of the API Operation specified by its identifier.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/operations/{operationId}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} apiId API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
		 * @param {string} operationId Operation identifier within an API. Must be unique in the current API Management service instance.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} The response body contains the specified Operation entity.
		 */
		ApiOperation_Get(resourceGroupName: string, serviceName: string, apiId: string, operationId: string, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/operations/' + (operationId == null ? '' : encodeURIComponent(operationId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Creates a new operation in the API or updates an existing one.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/operations/{operationId}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} apiId API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
		 * @param {string} operationId Operation identifier within an API. Must be unique in the current API Management service instance.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {} requestBody Create parameters.
		 * @return {void} Operation was successfully updated.
		 */
		ApiOperation_CreateOrUpdate(resourceGroupName: string, serviceName: string, apiId: string, operationId: string, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/operations/' + (operationId == null ? '' : encodeURIComponent(operationId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'put', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get the list of policy configuration at the API Operation level.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/operations/{operationId}/policies
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} apiId API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
		 * @param {string} operationId Operation identifier within an API. Must be unique in the current API Management service instance.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Api Operations Policy Collection.
		 */
		ApiOperationPolicy_ListByOperation(resourceGroupName: string, serviceName: string, apiId: string, operationId: string, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/operations/' + (operationId == null ? '' : encodeURIComponent(operationId)) + '/policies&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes the policy configuration at the Api Operation.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/operations/{operationId}/policies/{policyId}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} apiId API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
		 * @param {string} operationId Operation identifier within an API. Must be unique in the current API Management service instance.
		 * @param {string} policyId The identifier of the Policy.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Policy successfully removed
		 */
		ApiOperationPolicy_Delete(resourceGroupName: string, serviceName: string, apiId: string, operationId: string, policyId: string, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/operations/' + (operationId == null ? '' : encodeURIComponent(operationId)) + '/policies/' + (policyId == null ? '' : encodeURIComponent(policyId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get the policy configuration at the API Operation level.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/operations/{operationId}/policies/{policyId}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} apiId API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
		 * @param {string} operationId Operation identifier within an API. Must be unique in the current API Management service instance.
		 * @param {string} format Policy Export Format.
		 * @param {string} policyId The identifier of the Policy.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Api Operation Policy information.
		 */
		ApiOperationPolicy_Get(resourceGroupName: string, serviceName: string, apiId: string, operationId: string, format: string, policyId: string, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/operations/' + (operationId == null ? '' : encodeURIComponent(operationId)) + '/policies/' + (policyId == null ? '' : encodeURIComponent(policyId)) + '&format=' + (format == null ? '' : encodeURIComponent(format)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Creates or updates policy configuration for the API Operation level.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/operations/{operationId}/policies/{policyId}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} apiId API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
		 * @param {string} operationId Operation identifier within an API. Must be unique in the current API Management service instance.
		 * @param {string} policyId The identifier of the Policy.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {} requestBody The policy contents to apply.
		 * @return {void} Api Operation policy configuration of the tenant was successfully updated.
		 */
		ApiOperationPolicy_CreateOrUpdate(resourceGroupName: string, serviceName: string, apiId: string, operationId: string, policyId: string, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/operations/' + (operationId == null ? '' : encodeURIComponent(operationId)) + '/policies/' + (policyId == null ? '' : encodeURIComponent(policyId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'put', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Lists all Tags associated with the Operation.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/operations/{operationId}/tags
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} apiId API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
		 * @param {string} operationId Operation identifier within an API. Must be unique in the current API Management service instance.
		 * @param {string} filter |   Field     |     Usage     |     Supported operators     |     Supported functions     |</br>|-------------|-------------|-------------|-------------|</br>| displayName | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| name | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>
		 * @param {number} top Number of records to return.
		 * @param {number} skip Number of records to skip.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} The operation returns a collection of tags associated with the Operation entity.
		 */
		Tag_ListByOperation(resourceGroupName: string, serviceName: string, apiId: string, operationId: string, filter: string, top: number, skip: number, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/operations/' + (operationId == null ? '' : encodeURIComponent(operationId)) + '/tags&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&skip=' + skip + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Detach the tag from the Operation.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/operations/{operationId}/tags/{tagId}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} apiId API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
		 * @param {string} operationId Operation identifier within an API. Must be unique in the current API Management service instance.
		 * @param {string} tagId Tag identifier. Must be unique in the current API Management service instance.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Tag was successfully removed from Operation
		 */
		Tag_DetachFromOperation(resourceGroupName: string, serviceName: string, apiId: string, operationId: string, tagId: string, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/operations/' + (operationId == null ? '' : encodeURIComponent(operationId)) + '/tags/' + (tagId == null ? '' : encodeURIComponent(tagId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get tag associated with the Operation.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/operations/{operationId}/tags/{tagId}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} apiId API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
		 * @param {string} operationId Operation identifier within an API. Must be unique in the current API Management service instance.
		 * @param {string} tagId Tag identifier. Must be unique in the current API Management service instance.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Gets the details of the tag specified by its identifier.
		 */
		Tag_GetByOperation(resourceGroupName: string, serviceName: string, apiId: string, operationId: string, tagId: string, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/operations/' + (operationId == null ? '' : encodeURIComponent(operationId)) + '/tags/' + (tagId == null ? '' : encodeURIComponent(tagId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Assign tag to the Operation.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/operations/{operationId}/tags/{tagId}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} apiId API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
		 * @param {string} operationId Operation identifier within an API. Must be unique in the current API Management service instance.
		 * @param {string} tagId Tag identifier. Must be unique in the current API Management service instance.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Tag is already assigned to the Operation.
		 */
		Tag_AssignToOperation(resourceGroupName: string, serviceName: string, apiId: string, operationId: string, tagId: string, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/operations/' + (operationId == null ? '' : encodeURIComponent(operationId)) + '/tags/' + (tagId == null ? '' : encodeURIComponent(tagId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'put', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Lists a collection of operations associated with tags.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/operationsByTags
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} apiId API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
		 * @param {string} filter |   Field     |     Usage     |     Supported operators     |     Supported functions     |</br>|-------------|-------------|-------------|-------------|</br>| name | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| displayName | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| apiName | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| description | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| method | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| urlTemplate | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>
		 * @param {number} top Number of records to return.
		 * @param {number} skip Number of records to skip.
		 * @param {boolean} includeNotTaggedOperations Include not tagged Operations.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Lists a collection of TagResource entities.
		 */
		Operation_ListByTags(resourceGroupName: string, serviceName: string, apiId: string, filter: string, top: number, skip: number, includeNotTaggedOperations: boolean, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/operationsByTags&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&skip=' + skip + '&includeNotTaggedOperations=' + includeNotTaggedOperations + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get the policy configuration at the API level.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/policies
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} apiId API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Apis Policy Collection.
		 */
		ApiPolicy_ListByApi(resourceGroupName: string, serviceName: string, apiId: string, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/policies&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes the policy configuration at the Api.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/policies/{policyId}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} apiId API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
		 * @param {string} policyId The identifier of the Policy.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Successfully deleted the policy configuration at the API level.
		 */
		ApiPolicy_Delete(resourceGroupName: string, serviceName: string, apiId: string, policyId: string, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/policies/' + (policyId == null ? '' : encodeURIComponent(policyId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get the policy configuration at the API level.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/policies/{policyId}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} apiId API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
		 * @param {string} policyId The identifier of the Policy.
		 * @param {string} format Policy Export Format.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Api Policy information.
		 */
		ApiPolicy_Get(resourceGroupName: string, serviceName: string, apiId: string, policyId: string, format: string, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/policies/' + (policyId == null ? '' : encodeURIComponent(policyId)) + '&format=' + (format == null ? '' : encodeURIComponent(format)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Creates or updates policy configuration for the API.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/policies/{policyId}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} apiId API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
		 * @param {string} policyId The identifier of the Policy.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {} requestBody The policy contents to apply.
		 * @return {void} Api policy configuration of the tenant was successfully updated.
		 */
		ApiPolicy_CreateOrUpdate(resourceGroupName: string, serviceName: string, apiId: string, policyId: string, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/policies/' + (policyId == null ? '' : encodeURIComponent(policyId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'put', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Lists all Products, which the API is part of.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/products
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} apiId API identifier. Must be unique in the current API Management service instance.
		 * @param {string} filter |   Field     |     Usage     |     Supported operators     |     Supported functions     |</br>|-------------|-------------|-------------|-------------|</br>| displayName | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>
		 * @param {number} top Number of records to return.
		 * @param {number} skip Number of records to skip.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} The operation returns a collection of products which have the Api entity.
		 */
		ApiProduct_ListByApis(resourceGroupName: string, serviceName: string, apiId: string, filter: string, top: number, skip: number, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/products&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&skip=' + skip + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Lists all releases of an API. An API release is created when making an API Revision current. Releases are also used to rollback to previous revisions. Results will be paged and can be constrained by the $top and $skip parameters.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/releases
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} apiId API identifier. Must be unique in the current API Management service instance.
		 * @param {string} filter |   Field     |     Usage     |     Supported operators     |     Supported functions     |</br>|-------------|-------------|-------------|-------------|</br>| notes | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>
		 * @param {number} top Number of records to return.
		 * @param {number} skip Number of records to skip.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} The operation returns a list of API Releases.
		 */
		ApiRelease_ListByService(resourceGroupName: string, serviceName: string, apiId: string, filter: string, top: number, skip: number, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/releases&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&skip=' + skip + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes the specified release in the API.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/releases/{releaseId}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} apiId API identifier. Must be unique in the current API Management service instance.
		 * @param {string} releaseId Release identifier within an API. Must be unique in the current API Management service instance.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} API release successfully removed
		 */
		ApiRelease_Delete(resourceGroupName: string, serviceName: string, apiId: string, releaseId: string, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/releases/' + (releaseId == null ? '' : encodeURIComponent(releaseId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the details of an API release.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/releases/{releaseId}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} apiId API identifier. Must be unique in the current API Management service instance.
		 * @param {string} releaseId Release identifier within an API. Must be unique in the current API Management service instance.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} The operation returns the details of an API Release.
		 */
		ApiRelease_Get(resourceGroupName: string, serviceName: string, apiId: string, releaseId: string, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/releases/' + (releaseId == null ? '' : encodeURIComponent(releaseId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Creates a new Release for the API.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/releases/{releaseId}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} apiId API identifier. Must be unique in the current API Management service instance.
		 * @param {string} releaseId Release identifier within an API. Must be unique in the current API Management service instance.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {} requestBody Create parameters.
		 * @return {void} Release was successfully updated.
		 */
		ApiRelease_CreateOrUpdate(resourceGroupName: string, serviceName: string, apiId: string, releaseId: string, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/releases/' + (releaseId == null ? '' : encodeURIComponent(releaseId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'put', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Lists all revisions of an API.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/revisions
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} apiId API identifier. Must be unique in the current API Management service instance.
		 * @param {string} filter |   Field     |     Usage     |     Supported operators     |     Supported functions     |</br>|-------------|-------------|-------------|-------------|</br>| apiRevision | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>
		 * @param {number} top Number of records to return.
		 * @param {number} skip Number of records to skip.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} The operation returns a list of revision details.
		 */
		ApiRevision_ListByService(resourceGroupName: string, serviceName: string, apiId: string, filter: string, top: number, skip: number, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/revisions&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&skip=' + skip + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get the schema configuration at the API level.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/schemas
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} apiId API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
		 * @param {string} filter |   Field     |     Usage     |     Supported operators     |     Supported functions     |</br>|-------------|-------------|-------------|-------------|</br>| contentType | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>
		 * @param {number} top Number of records to return.
		 * @param {number} skip Number of records to skip.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Apis Schema Collection.
		 */
		ApiSchema_ListByApi(resourceGroupName: string, serviceName: string, apiId: string, filter: string, top: number, skip: number, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/schemas&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&skip=' + skip + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes the schema configuration at the Api.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/schemas/{schemaId}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} apiId API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
		 * @param {string} schemaId Schema identifier within an API. Must be unique in the current API Management service instance.
		 * @param {boolean} force If true removes all references to the schema before deleting it.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Successfully deleted the schema configuration at the API level.
		 */
		ApiSchema_Delete(resourceGroupName: string, serviceName: string, apiId: string, schemaId: string, force: boolean, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/schemas/' + (schemaId == null ? '' : encodeURIComponent(schemaId)) + '&force=' + force + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get the schema configuration at the API level.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/schemas/{schemaId}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} apiId API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
		 * @param {string} schemaId Schema identifier within an API. Must be unique in the current API Management service instance.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Api Schema information.
		 */
		ApiSchema_Get(resourceGroupName: string, serviceName: string, apiId: string, schemaId: string, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/schemas/' + (schemaId == null ? '' : encodeURIComponent(schemaId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Creates or updates schema configuration for the API.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/schemas/{schemaId}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} apiId API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
		 * @param {string} schemaId Schema identifier within an API. Must be unique in the current API Management service instance.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {} requestBody The schema contents to apply.
		 * @return {void} Api schema configuration of the tenant was successfully updated.
		 */
		ApiSchema_CreateOrUpdate(resourceGroupName: string, serviceName: string, apiId: string, schemaId: string, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/schemas/' + (schemaId == null ? '' : encodeURIComponent(schemaId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'put', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Lists all Tags descriptions in scope of API. Model similar to swagger - tagDescription is defined on API level but tag may be assigned to the Operations
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/tagDescriptions
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} apiId API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
		 * @param {string} filter |   Field     |     Usage     |     Supported operators     |     Supported functions     |</br>|-------------|-------------|-------------|-------------|</br>| displayName | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| name | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>
		 * @param {number} top Number of records to return.
		 * @param {number} skip Number of records to skip.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} The operation returns a collection of tagDescriptions associated with the Api entity.
		 */
		ApiTagDescription_ListByService(resourceGroupName: string, serviceName: string, apiId: string, filter: string, top: number, skip: number, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/tagDescriptions&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&skip=' + skip + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete tag description for the Api.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/tagDescriptions/{tagDescriptionId}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} apiId API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
		 * @param {string} tagDescriptionId Tag description identifier. Used when creating tagDescription for API/Tag association. Based on API and Tag names.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Tag description successfully removed
		 */
		ApiTagDescription_Delete(resourceGroupName: string, serviceName: string, apiId: string, tagDescriptionId: string, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/tagDescriptions/' + (tagDescriptionId == null ? '' : encodeURIComponent(tagDescriptionId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Tag description in scope of API
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/tagDescriptions/{tagDescriptionId}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} apiId API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
		 * @param {string} tagDescriptionId Tag description identifier. Used when creating tagDescription for API/Tag association. Based on API and Tag names.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Gets the description of the tag specified by its identifier in scope if the Api.
		 */
		ApiTagDescription_Get(resourceGroupName: string, serviceName: string, apiId: string, tagDescriptionId: string, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/tagDescriptions/' + (tagDescriptionId == null ? '' : encodeURIComponent(tagDescriptionId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create/Update tag description in scope of the Api.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/tagDescriptions/{tagDescriptionId}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} apiId API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
		 * @param {string} tagDescriptionId Tag description identifier. Used when creating tagDescription for API/Tag association. Based on API and Tag names.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {} requestBody Create parameters.
		 * @return {void} Tag Description was updated for the Api.
		 */
		ApiTagDescription_CreateOrUpdate(resourceGroupName: string, serviceName: string, apiId: string, tagDescriptionId: string, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/tagDescriptions/' + (tagDescriptionId == null ? '' : encodeURIComponent(tagDescriptionId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'put', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Lists all Tags associated with the API.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/tags
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} apiId API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
		 * @param {string} filter |   Field     |     Usage     |     Supported operators     |     Supported functions     |</br>|-------------|-------------|-------------|-------------|</br>| displayName | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>| name | filter | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | </br>
		 * @param {number} top Number of records to return.
		 * @param {number} skip Number of records to skip.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} The operation returns a collection of tags associated with the Api entity.
		 */
		Tag_ListByApi(resourceGroupName: string, serviceName: string, apiId: string, filter: string, top: number, skip: number, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/tags&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&skip=' + skip + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Detach the tag from the Api.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/tags/{tagId}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} apiId API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
		 * @param {string} tagId Tag identifier. Must be unique in the current API Management service instance.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} API/Tag association successfully removed
		 */
		Tag_DetachFromApi(resourceGroupName: string, serviceName: string, apiId: string, tagId: string, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/tags/' + (tagId == null ? '' : encodeURIComponent(tagId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get tag associated with the API.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/tags/{tagId}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} apiId API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
		 * @param {string} tagId Tag identifier. Must be unique in the current API Management service instance.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Gets the details of the tag specified by its identifier.
		 */
		Tag_GetByApi(resourceGroupName: string, serviceName: string, apiId: string, tagId: string, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/tags/' + (tagId == null ? '' : encodeURIComponent(tagId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Assign tag to the Api.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/tags/{tagId}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} serviceName The name of the API Management service.
		 * @param {string} apiId API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
		 * @param {string} tagId Tag identifier. Must be unique in the current API Management service instance.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Tag is already assigned to the Api.
		 */
		Tag_AssignToApi(resourceGroupName: string, serviceName: string, apiId: string, tagId: string, api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ApiManagement/service/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/tags/' + (tagId == null ? '' : encodeURIComponent(tagId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { method: 'put', headers: headersHandler ? headersHandler() : undefined });
		}
	}

}

