///<reference path="HttpClient.ts" />
namespace My_Demo_Client {

	/**Role definition permissions. */
	export interface Permission {

		/**Allowed actions. */
		actions?: Array<string>;

		/**Denied actions. */
		notActions?: Array<string>;
	}


	/**Permissions information. */
	export interface PermissionGetResult {

		/**The URL to use for getting the next set of results. */
		nextLink?: string;

		/**An array of permissions. */
		value?: Array<Permission>;
	}


	/**Operation */
	export interface ProviderOperation {

		/**The operation description. */
		description?: string;

		/**The operation display name. */
		displayName?: string;

		/**The operation name. */
		name?: string;

		/**The operation origin. */
		origin?: string;

		/**The operation properties. */
		properties?: string;
	}


	/**Provider Operations metadata */
	export interface ProviderOperationsMetadata {

		/**The provider display name. */
		displayName?: string;

		/**The provider id. */
		id?: string;

		/**The provider name. */
		name?: string;

		/**The provider operations. */
		operations?: Array<ProviderOperation>;

		/**The provider resource types */
		resourceTypes?: Array<ResourceType>;

		/**The provider type. */
		type?: string;
	}


	/**Provider operations metadata list */
	export interface ProviderOperationsMetadataListResult {

		/**The URL to use for getting the next set of results. */
		nextLink?: string;

		/**The list of providers. */
		value?: Array<ProviderOperationsMetadata>;
	}


	/**Resource Type */
	export interface ResourceType {

		/**The resource type display name. */
		displayName?: string;

		/**The resource type name. */
		name?: string;

		/**The resource type operations. */
		operations?: Array<ProviderOperation>;
	}


	/**Role Assignments */
	export interface RoleAssignment {

		/**The role assignment ID. */
		id?: string;

		/**The role assignment name. */
		name?: string;

		/**Role assignment properties with scope. */
		properties?: RoleAssignmentPropertiesWithScope;

		/**The role assignment type. */
		type?: string;
	}


	/**Role assignment create parameters. */
	export interface RoleAssignmentCreateParameters {

		/**Role assignment properties. */
		properties: RoleAssignmentProperties;
	}


	/**Role Assignments filter */
	export interface RoleAssignmentFilter {

		/**Returns role assignment of the specific principal. */
		principalId?: string;
	}


	/**Role assignment list operation result. */
	export interface RoleAssignmentListResult {

		/**The URL to use for getting the next set of results. */
		nextLink?: string;

		/**Role assignment list. */
		value?: Array<RoleAssignment>;
	}


	/**Role assignment properties. */
	export interface RoleAssignmentProperties {

		/**The principal ID assigned to the role. This maps to the ID inside the Active Directory. It can point to a user, service principal, or security group. */
		principalId: string;

		/**The role definition ID used in the role assignment. */
		roleDefinitionId: string;
	}


	/**Role assignment properties with scope. */
	export interface RoleAssignmentPropertiesWithScope {

		/**The principal ID. */
		principalId?: string;

		/**The role definition ID. */
		roleDefinitionId?: string;

		/**The role assignment scope. */
		scope?: string;
	}


	/**Role definition. */
	export interface RoleDefinition {

		/**The role definition ID. */
		id?: string;

		/**The role definition name. */
		name?: string;

		/**Role definition properties. */
		properties?: RoleDefinitionProperties;

		/**The role definition type. */
		type?: string;
	}


	/**Role Definitions filter */
	export interface RoleDefinitionFilter {

		/**Returns role definition with the specific name. */
		roleName?: string;
	}


	/**Role definition list operation result. */
	export interface RoleDefinitionListResult {

		/**The URL to use for getting the next set of results. */
		nextLink?: string;

		/**Role definition list. */
		value?: Array<RoleDefinition>;
	}


	/**Role definition properties. */
	export interface RoleDefinitionProperties {

		/**Role definition assignable scopes. */
		assignableScopes?: Array<string>;

		/**The role definition description. */
		description?: string;

		/**Role definition permissions. */
		permissions?: Array<Permission>;

		/**The role name. */
		roleName?: string;

		/**The role type. */
		type?: string;
	}

	export class DemoClient {
		constructor(private baseUri: string = HttpClient.locationOrigin, private httpClient: HttpClientBase = new HttpClient(), private error?: (xhr: JQueryXHR, ajaxOptions: string, thrown: string) => any, private statusCode?: { [key: string]: any; }) {
		}

		/**
		 * Elevates access for a Global Administrator.
		 * Post providers/Microsoft.Authorization/elevateAccess
		 * @param {string} api_version The API version to use for this operation.
		 * @return {void} OK - Returns an HttpResponseMessage with HttpStatusCode 200.
		 */
		ElevateAccess_Post(api_version: string, callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'providers/Microsoft.Authorization/elevateAccess?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Gets provider operations metadata for all resource providers.
		 * Get providers/Microsoft.Authorization/providerOperations
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} expand Specifies whether to expand the values.
		 * @return {ProviderOperationsMetadataListResult} OK - Returns an array of the operations metadata.
		 */
		ProviderOperationsMetadata_List(api_version: string, expand: string, callback: (data : ProviderOperationsMetadataListResult) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'providers/Microsoft.Authorization/providerOperations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Gets provider operations metadata for the specified resource provider.
		 * Get providers/Microsoft.Authorization/providerOperations/{resourceProviderNamespace}
		 * @param {string} resourceProviderNamespace The namespace of the resource provider.
		 * @param {string} api_version The API version to use for the operation.
		 * @param {string} expand Specifies whether to expand the values.
		 * @return {ProviderOperationsMetadata} OK - Returns the operations metadata.
		 */
		ProviderOperationsMetadata_Get(resourceProviderNamespace: string, api_version: string, expand: string, callback: (data : ProviderOperationsMetadata) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'providers/Microsoft.Authorization/providerOperations/' + (resourceProviderNamespace == null ? '' : encodeURIComponent(resourceProviderNamespace)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Gets all role assignments for the subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Authorization/roleAssignments
		 * @param {string} filter The filter to apply on the operation. Use $filter=atScope() to return all role assignments at or above the scope. Use $filter=principalId eq {id} to return all role assignments at, above or below the scope for the specified principal.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {RoleAssignmentListResult} OK - Returns an array of role assignments.
		 */
		RoleAssignments_List(filter: string, api_version: string, subscriptionId: string, callback: (data : RoleAssignmentListResult) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Authorization/roleAssignments?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Gets role assignments for a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Authorization/roleAssignments
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} filter The filter to apply on the operation. Use $filter=atScope() to return all role assignments at or above the scope. Use $filter=principalId eq {id} to return all role assignments at, above or below the scope for the specified principal.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {RoleAssignmentListResult} OK - Returns an array of role assignments.
		 */
		RoleAssignments_ListForResourceGroup(resourceGroupName: string, filter: string, api_version: string, subscriptionId: string, callback: (data : RoleAssignmentListResult) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Authorization/roleAssignments&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Gets all permissions the caller has for a resource group.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Authorization/permissions
		 * @param {string} resourceGroupName The name of the resource group to get the permissions for. The name is case insensitive.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {PermissionGetResult} OK - Returns an array of permissions.
		 */
		Permissions_ListForResourceGroup(resourceGroupName: string, api_version: string, subscriptionId: string, callback: (data : PermissionGetResult) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Authorization/permissions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Gets all permissions the caller has for a resource.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePath}/{resourceType}/{resourceName}/providers/Microsoft.Authorization/permissions
		 * @param {string} resourceGroupName The name of the resource group containing the resource. The name is case insensitive.
		 * @param {string} resourceProviderNamespace The namespace of the resource provider.
		 * @param {string} parentResourcePath The parent resource identity.
		 * @param {string} resourceType The resource type of the resource.
		 * @param {string} resourceName The name of the resource to get the permissions for.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {PermissionGetResult} OK - Returns an array of permissions.
		 */
		Permissions_ListForResource(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, api_version: string, subscriptionId: string, callback: (data : PermissionGetResult) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/' + (resourceProviderNamespace == null ? '' : encodeURIComponent(resourceProviderNamespace)) + '/' + (parentResourcePath == null ? '' : encodeURIComponent(parentResourcePath)) + '/' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/providers/Microsoft.Authorization/permissions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Gets role assignments for a resource.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePath}/{resourceType}/{resourceName}/providers/Microsoft.Authorization/roleAssignments
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} resourceProviderNamespace The namespace of the resource provider.
		 * @param {string} parentResourcePath The parent resource identity.
		 * @param {string} resourceType The resource type of the resource.
		 * @param {string} resourceName The name of the resource to get role assignments for.
		 * @param {string} filter The filter to apply on the operation. Use $filter=atScope() to return all role assignments at or above the scope. Use $filter=principalId eq {id} to return all role assignments at, above or below the scope for the specified principal.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {RoleAssignmentListResult} OK - Returns an array of role assignments.
		 */
		RoleAssignments_ListForResource(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, filter: string, api_version: string, subscriptionId: string, callback: (data : RoleAssignmentListResult) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/' + (resourceProviderNamespace == null ? '' : encodeURIComponent(resourceProviderNamespace)) + '/' + (parentResourcePath == null ? '' : encodeURIComponent(parentResourcePath)) + '/' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/providers/Microsoft.Authorization/roleAssignments&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Deletes a role assignment.
		 * Delete {roleAssignmentId}
		 * @param {string} roleAssignmentId The fully qualified ID of the role assignment, including the scope, resource name and resource type. Use the format, /{scope}/providers/Microsoft.Authorization/roleAssignments/{roleAssignmentName}. Example: /subscriptions/{subId}/resourcegroups/{rgname}//providers/Microsoft.Authorization/roleAssignments/{roleAssignmentName}.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {RoleAssignment} OK - Returns information about the role assignment.
		 */
		RoleAssignments_DeleteById(roleAssignmentId: string, api_version: string, callback: (data : RoleAssignment) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + (roleAssignmentId == null ? '' : encodeURIComponent(roleAssignmentId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Gets a role assignment by ID.
		 * Get {roleAssignmentId}
		 * @param {string} roleAssignmentId The fully qualified ID of the role assignment, including the scope, resource name and resource type. Use the format, /{scope}/providers/Microsoft.Authorization/roleAssignments/{roleAssignmentName}. Example: /subscriptions/{subId}/resourcegroups/{rgname}//providers/Microsoft.Authorization/roleAssignments/{roleAssignmentName}.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {RoleAssignment} OK - Returns the role assignment.
		 */
		RoleAssignments_GetById(roleAssignmentId: string, api_version: string, callback: (data : RoleAssignment) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + (roleAssignmentId == null ? '' : encodeURIComponent(roleAssignmentId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Creates a role assignment by ID.
		 * Put {roleAssignmentId}
		 * @param {string} roleAssignmentId The fully qualified ID of the role assignment, including the scope, resource name and resource type. Use the format, /{scope}/providers/Microsoft.Authorization/roleAssignments/{roleAssignmentName}. Example: /subscriptions/{subId}/resourcegroups/{rgname}//providers/Microsoft.Authorization/roleAssignments/{roleAssignmentName}.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {RoleAssignmentCreateParameters} requestBody Parameters for the role assignment.
		 * @return {void} 
		 */
		RoleAssignments_CreateById(roleAssignmentId: string, api_version: string, callback: (data : void) => any, requestBody: RoleAssignmentCreateParameters, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.put(this.baseUri + (roleAssignmentId == null ? '' : encodeURIComponent(roleAssignmentId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Gets role assignments for a scope.
		 * Get {scope}/providers/Microsoft.Authorization/roleAssignments
		 * @param {string} scope The scope of the role assignments.
		 * @param {string} filter The filter to apply on the operation. Use $filter=atScope() to return all role assignments at or above the scope. Use $filter=principalId eq {id} to return all role assignments at, above or below the scope for the specified principal.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {RoleAssignmentListResult} OK - Returns an array of role assignments.
		 */
		RoleAssignments_ListForScope(scope: string, filter: string, api_version: string, callback: (data : RoleAssignmentListResult) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Authorization/roleAssignments&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Deletes a role assignment.
		 * Delete {scope}/providers/Microsoft.Authorization/roleAssignments/{roleAssignmentName}
		 * @param {string} scope The scope of the role assignment to delete.
		 * @param {string} roleAssignmentName The name of the role assignment to delete.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {RoleAssignment} OK - Returns information about the role assignment.
		 */
		RoleAssignments_Delete(scope: string, roleAssignmentName: string, api_version: string, callback: (data : RoleAssignment) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Authorization/roleAssignments/' + (roleAssignmentName == null ? '' : encodeURIComponent(roleAssignmentName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Get the specified role assignment.
		 * Get {scope}/providers/Microsoft.Authorization/roleAssignments/{roleAssignmentName}
		 * @param {string} scope The scope of the role assignment.
		 * @param {string} roleAssignmentName The name of the role assignment to get.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {RoleAssignment} OK - Returns information about the role assignment.
		 */
		RoleAssignments_Get(scope: string, roleAssignmentName: string, api_version: string, callback: (data : RoleAssignment) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Authorization/roleAssignments/' + (roleAssignmentName == null ? '' : encodeURIComponent(roleAssignmentName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Creates a role assignment.
		 * Put {scope}/providers/Microsoft.Authorization/roleAssignments/{roleAssignmentName}
		 * @param {string} scope The scope of the role assignment to create. The scope can be any REST resource instance. For example, use '/subscriptions/{subscription-id}/' for a subscription, '/subscriptions/{subscription-id}/resourceGroups/{resource-group-name}' for a resource group, and '/subscriptions/{subscription-id}/resourceGroups/{resource-group-name}/providers/{resource-provider}/{resource-type}/{resource-name}' for a resource.
		 * @param {string} roleAssignmentName The name of the role assignment to create. It can be any valid GUID.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {RoleAssignmentCreateParameters} requestBody Parameters for the role assignment.
		 * @return {void} 
		 */
		RoleAssignments_Create(scope: string, roleAssignmentName: string, api_version: string, callback: (data : void) => any, requestBody: RoleAssignmentCreateParameters, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.put(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Authorization/roleAssignments/' + (roleAssignmentName == null ? '' : encodeURIComponent(roleAssignmentName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Get all role definitions that are applicable at scope and above.
		 * Get {scope}/providers/Microsoft.Authorization/roleDefinitions
		 * @param {string} scope The scope of the role definition.
		 * @param {string} filter The filter to apply on the operation. Use atScopeAndBelow filter to search below the given scope as well.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {RoleDefinitionListResult} OK - Returns an array of role definitions.
		 */
		RoleDefinitions_List(scope: string, filter: string, api_version: string, callback: (data : RoleDefinitionListResult) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Authorization/roleDefinitions&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Deletes a role definition.
		 * Delete {scope}/providers/Microsoft.Authorization/roleDefinitions/{roleDefinitionId}
		 * @param {string} scope The scope of the role definition.
		 * @param {string} roleDefinitionId The ID of the role definition to delete.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {RoleDefinition} OK - Returns information about the role definition.
		 */
		RoleDefinitions_Delete(scope: string, roleDefinitionId: string, api_version: string, callback: (data : RoleDefinition) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Authorization/roleDefinitions/' + (roleDefinitionId == null ? '' : encodeURIComponent(roleDefinitionId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Get role definition by name (GUID).
		 * Get {scope}/providers/Microsoft.Authorization/roleDefinitions/{roleDefinitionId}
		 * @param {string} scope The scope of the role definition.
		 * @param {string} roleDefinitionId The ID of the role definition.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {RoleDefinition} OK - Returns information about the role definition.
		 */
		RoleDefinitions_Get(scope: string, roleDefinitionId: string, api_version: string, callback: (data : RoleDefinition) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Authorization/roleDefinitions/' + (roleDefinitionId == null ? '' : encodeURIComponent(roleDefinitionId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Creates or updates a role definition.
		 * Put {scope}/providers/Microsoft.Authorization/roleDefinitions/{roleDefinitionId}
		 * @param {string} scope The scope of the role definition.
		 * @param {string} roleDefinitionId The ID of the role definition.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {RoleDefinition} requestBody The values for the role definition.
		 * @return {void} 
		 */
		RoleDefinitions_CreateOrUpdate(scope: string, roleDefinitionId: string, api_version: string, callback: (data : void) => any, requestBody: RoleDefinition, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.put(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Authorization/roleDefinitions/' + (roleDefinitionId == null ? '' : encodeURIComponent(roleDefinitionId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}
	}

}

