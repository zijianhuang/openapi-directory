import Axios from 'axios';
import { AxiosResponse } from 'axios';
export namespace My_Demo_Client {
	export interface AcceptResourceShareInvitationResponse {

		/**Describes an invitation to join a resource share. */
		resourceShareInvitation?: ResourceShareInvitation;
		clientToken?: string;
	}

	export interface AssociateResourceShareResponse {
		resourceShareAssociations?: Array<ResourceShareAssociation>;
		clientToken?: string;
	}

	export interface AssociateResourceSharePermissionResponse {
		returnValue?: boolean;
		clientToken?: string;
	}

	export interface CreateResourceShareResponse {

		/**Describes a resource share. */
		resourceShare?: ResourceShare;
		clientToken?: string;
	}


	/**Information about a tag. */
	export interface Tag {
		key?: string;
		value?: string;
	}

	export interface DeleteResourceShareResponse {
		returnValue?: boolean;
		clientToken?: string;
	}

	export interface DisassociateResourceShareResponse {
		resourceShareAssociations?: Array<ResourceShareAssociation>;
		clientToken?: string;
	}

	export interface DisassociateResourceSharePermissionResponse {
		returnValue?: boolean;
		clientToken?: string;
	}

	export interface EnableSharingWithAwsOrganizationResponse {
		returnValue?: boolean;
	}

	export interface GetPermissionResponse {

		/**Information about an AWS RAM permission. */
		permission?: ResourceSharePermissionDetail;
	}

	export interface GetResourcePoliciesResponse {
		policies?: Array<Policy>;
		nextToken?: string;
	}

	export interface GetResourceShareAssociationsResponse {
		resourceShareAssociations?: Array<ResourceShareAssociation>;
		nextToken?: string;
	}

	export interface GetResourceShareInvitationsResponse {
		resourceShareInvitations?: Array<ResourceShareInvitation>;
		nextToken?: string;
	}

	export interface GetResourceSharesResponse {
		resourceShares?: Array<ResourceShare>;
		nextToken?: string;
	}


	/**Used to filter information based on tags. */
	export interface TagFilter {
		tagKey?: string;
		tagValues?: Array<TagValue>;
	}

	export interface ListPendingInvitationResourcesResponse {
		resources?: Array<Resource>;
		nextToken?: string;
	}

	export interface ListPermissionsResponse {
		permissions?: Array<ResourceSharePermissionSummary>;
		nextToken?: string;
	}

	export interface ListPrincipalsResponse {
		principals?: Array<Principal>;
		nextToken?: string;
	}

	export interface ListResourceSharePermissionsResponse {
		permissions?: Array<ResourceSharePermissionSummary>;
		nextToken?: string;
	}

	export interface ListResourceTypesResponse {
		resourceTypes?: Array<ServiceNameAndResourceType>;
		nextToken?: string;
	}

	export interface ListResourcesResponse {
		resources?: Array<Resource>;
		nextToken?: string;
	}

	export interface PromoteResourceShareCreatedFromPolicyResponse {
		returnValue?: boolean;
	}

	export interface RejectResourceShareInvitationResponse {

		/**Describes an invitation to join a resource share. */
		resourceShareInvitation?: ResourceShareInvitation;
		clientToken?: string;
	}

	export interface UpdateResourceShareResponse {

		/**Describes a resource share. */
		resourceShare?: ResourceShare;
		clientToken?: string;
	}

	export interface AcceptResourceShareInvitationRequest {
		resourceShareInvitationArn: string;
		clientToken?: string;
	}


	/**Describes an invitation to join a resource share. */
	export interface ResourceShareInvitation {
		resourceShareInvitationArn?: string;
		resourceShareName?: string;
		resourceShareArn?: string;
		senderAccountId?: string;
		receiverAccountId?: string;
		invitationTimestamp?: Date;
		status?: ResourceShareInvitationStatus;
		resourceShareAssociations?: Array<ResourceShareAssociation>;
	}

	export enum ResourceShareInvitationStatus { PENDING = 0, ACCEPTED = 1, REJECTED = 2, EXPIRED = 3 }

	export interface AssociateResourceSharePermissionRequest {
		resourceShareArn: string;
		permissionArn: string;
		replace?: boolean;
		clientToken?: string;
	}

	export interface AssociateResourceShareRequest {
		resourceShareArn: string;
		resourceArns?: Array<String>;
		principals?: Array<String>;
		clientToken?: string;
	}

	export interface CreateResourceShareRequest {
		name: string;
		resourceArns?: Array<String>;
		principals?: Array<String>;
		tags?: Array<Tag>;
		allowExternalPrincipals?: boolean;
		clientToken?: string;
		permissionArns?: Array<String>;
	}


	/**Describes a resource share. */
	export interface ResourceShare {
		resourceShareArn?: string;
		name?: string;
		owningAccountId?: string;
		allowExternalPrincipals?: boolean;
		status?: ResourceShareStatus;
		statusMessage?: string;
		tags?: Array<Tag>;
		creationTime?: Date;
		lastUpdatedTime?: Date;
		featureSet?: ResourceShareFeatureSet;
	}

	export enum ResourceShareStatus { PENDING = 0, ACTIVE = 1, FAILED = 2, DELETING = 3, DELETED = 4 }

	export enum ResourceShareFeatureSet { CREATED_FROM_POLICY = 0, PROMOTING_TO_STANDARD = 1, STANDARD = 2 }

	export interface DisassociateResourceSharePermissionRequest {
		resourceShareArn: string;
		permissionArn: string;
		clientToken?: string;
	}

	export interface DisassociateResourceShareRequest {
		resourceShareArn: string;
		resourceArns?: Array<String>;
		principals?: Array<String>;
		clientToken?: string;
	}

	export interface GetPermissionRequest {
		permissionArn: string;
		permissionVersion?: number;
	}


	/**Information about an AWS RAM permission. */
	export interface ResourceSharePermissionDetail {
		arn?: string;
		version?: string;
		defaultVersion?: boolean;
		name?: string;
		resourceType?: string;
		permission?: string;
		creationTime?: Date;
		lastUpdatedTime?: Date;
	}

	export interface GetResourcePoliciesRequest {
		resourceArns: Array<String>;
		principal?: string;
		nextToken?: string;
		maxResults?: number;
	}

	export enum ResourceShareAssociationType { PRINCIPAL = 0, RESOURCE = 1 }

	export enum ResourceShareAssociationStatus { ASSOCIATING = 0, ASSOCIATED = 1, FAILED = 2, DISASSOCIATING = 3, DISASSOCIATED = 4 }

	export interface GetResourceShareAssociationsRequest {
		associationType: GetResourceShareAssociationsRequestAssociationType;
		resourceShareArns?: Array<String>;
		resourceArn?: string;
		principal?: string;
		associationStatus?: GetResourceShareAssociationsRequestAssociationStatus;
		nextToken?: string;
		maxResults?: number;
	}

	export enum GetResourceShareAssociationsRequestAssociationType { PRINCIPAL = 0, RESOURCE = 1 }

	export enum GetResourceShareAssociationsRequestAssociationStatus { ASSOCIATING = 0, ASSOCIATED = 1, FAILED = 2, DISASSOCIATING = 3, DISASSOCIATED = 4 }

	export interface GetResourceShareInvitationsRequest {
		resourceShareInvitationArns?: Array<String>;
		resourceShareArns?: Array<String>;
		nextToken?: string;
		maxResults?: number;
	}

	export enum ResourceShareStatus { PENDING = 0, ACTIVE = 1, FAILED = 2, DELETING = 3, DELETED = 4 }

	export enum ResourceOwner { SELF = 0, OTHER-ACCOUNTS = 1 }

	export interface GetResourceSharesRequest {
		resourceShareArns?: Array<String>;
		resourceShareStatus?: GetResourceSharesRequestResourceShareStatus;
		resourceOwner: GetResourceSharesRequestResourceOwner;
		name?: string;
		tagFilters?: Array<TagFilter>;
		nextToken?: string;
		maxResults?: number;
	}

	export enum GetResourceSharesRequestResourceShareStatus { PENDING = 0, ACTIVE = 1, FAILED = 2, DELETING = 3, DELETED = 4 }

	export enum GetResourceSharesRequestResourceOwner { SELF = 0, OTHER-ACCOUNTS = 1 }

	export interface ListPendingInvitationResourcesRequest {
		resourceShareInvitationArn: string;
		nextToken?: string;
		maxResults?: number;
	}

	export interface ListPermissionsRequest {
		resourceType?: string;
		nextToken?: string;
		maxResults?: number;
	}

	export interface ListPrincipalsRequest {
		resourceOwner: ListPrincipalsRequestResourceOwner;
		resourceArn?: string;
		principals?: Array<String>;
		resourceType?: string;
		resourceShareArns?: Array<String>;
		nextToken?: string;
		maxResults?: number;
	}

	export enum ListPrincipalsRequestResourceOwner { SELF = 0, OTHER-ACCOUNTS = 1 }

	export interface ListResourceSharePermissionsRequest {
		resourceShareArn: string;
		nextToken?: string;
		maxResults?: number;
	}

	export interface ListResourceTypesRequest {
		nextToken?: string;
		maxResults?: number;
	}

	export interface ListResourcesRequest {
		resourceOwner: ListResourcesRequestResourceOwner;
		principal?: string;
		resourceType?: string;
		resourceArns?: Array<String>;
		resourceShareArns?: Array<String>;
		nextToken?: string;
		maxResults?: number;
	}

	export enum ListResourcesRequestResourceOwner { SELF = 0, OTHER-ACCOUNTS = 1 }


	/**Describes a principal for use with AWS Resource Access Manager. */
	export interface Principal {
		id?: string;
		resourceShareArn?: string;
		creationTime?: Date;
		lastUpdatedTime?: Date;
		external?: boolean;
	}

	export interface RejectResourceShareInvitationRequest {
		resourceShareInvitationArn: string;
		clientToken?: string;
	}

	export enum ResourceStatus { AVAILABLE = 0, ZONAL_RESOURCE_INACCESSIBLE = 1, LIMIT_EXCEEDED = 2, UNAVAILABLE = 3, PENDING = 4 }


	/**Describes a resource associated with a resource share. */
	export interface Resource {
		arn?: string;
		type?: string;
		resourceShareArn?: string;
		resourceGroupArn?: string;
		status?: ResourceStatus;
		statusMessage?: string;
		creationTime?: Date;
		lastUpdatedTime?: Date;
	}

	export enum ResourceStatus { AVAILABLE = 0, ZONAL_RESOURCE_INACCESSIBLE = 1, LIMIT_EXCEEDED = 2, UNAVAILABLE = 3, PENDING = 4 }

	export enum ResourceShareFeatureSet { CREATED_FROM_POLICY = 0, PROMOTING_TO_STANDARD = 1, STANDARD = 2 }


	/**Describes an association with a resource share. */
	export interface ResourceShareAssociation {
		resourceShareArn?: string;
		resourceShareName?: string;
		associatedEntity?: string;
		associationType?: ResourceShareAssociationAssociationType;
		status?: ResourceShareAssociationStatus;
		statusMessage?: string;
		creationTime?: Date;
		lastUpdatedTime?: Date;
		external?: boolean;
	}

	export enum ResourceShareAssociationAssociationType { PRINCIPAL = 0, RESOURCE = 1 }

	export enum ResourceShareAssociationStatus { ASSOCIATING = 0, ASSOCIATED = 1, FAILED = 2, DISASSOCIATING = 3, DISASSOCIATED = 4 }

	export enum ResourceShareInvitationStatus { PENDING = 0, ACCEPTED = 1, REJECTED = 2, EXPIRED = 3 }


	/**Information about a permission that is associated with a resource share. */
	export interface ResourceSharePermissionSummary {
		arn?: string;
		version?: string;
		defaultVersion?: boolean;
		name?: string;
		resourceType?: string;
		status?: string;
		creationTime?: Date;
		lastUpdatedTime?: Date;
	}


	/**Information about the shareable resource types and the AWS services to which they belong. */
	export interface ServiceNameAndResourceType {
		resourceType?: string;
		serviceName?: string;
	}

	export interface TagResourceRequest {
		resourceShareArn: string;
		tags: Array<Tag>;
	}

	export interface UntagResourceRequest {
		resourceShareArn: string;
		tagKeys: Array<TagKey>;
	}

	export interface UpdateResourceShareRequest {
		resourceShareArn: string;
		name?: string;
		allowExternalPrincipals?: boolean;
		clientToken?: string;
	}

	export class DemoClient {
		constructor(private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/') {
		}

		/**
		 * Accepts an invitation to a resource share from another AWS account.
		 * Post /acceptresourceshareinvitation
		 * @return {AcceptResourceShareInvitationResponse} Success
		 */
		AcceptResourceShareInvitation(requestBody: AcceptResourceShareInvitationBody, headersHandler?: () => {[header: string]: string}): Promise<AcceptResourceShareInvitationResponse> {
			return Axios.post<AcceptResourceShareInvitationResponse>(this.baseUri + '/acceptresourceshareinvitation', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Associates the specified resource share with the specified principals and resources.
		 * Post /associateresourceshare
		 * @return {AssociateResourceShareResponse} Success
		 */
		AssociateResourceShare(requestBody: AssociateResourceShareBody, headersHandler?: () => {[header: string]: string}): Promise<AssociateResourceShareResponse> {
			return Axios.post<AssociateResourceShareResponse>(this.baseUri + '/associateresourceshare', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Associates a permission with a resource share.
		 * Post /associateresourcesharepermission
		 * @return {AssociateResourceSharePermissionResponse} Success
		 */
		AssociateResourceSharePermission(requestBody: AssociateResourceSharePermissionBody, headersHandler?: () => {[header: string]: string}): Promise<AssociateResourceSharePermissionResponse> {
			return Axios.post<AssociateResourceSharePermissionResponse>(this.baseUri + '/associateresourcesharepermission', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Creates a resource share.
		 * Post /createresourceshare
		 * @return {CreateResourceShareResponse} Success
		 */
		CreateResourceShare(requestBody: CreateResourceShareBody, headersHandler?: () => {[header: string]: string}): Promise<CreateResourceShareResponse> {
			return Axios.post<CreateResourceShareResponse>(this.baseUri + '/createresourceshare', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Deletes the specified resource share.
		 * Delete /deleteresourceshare#resourceShareArn
		 * @param {string} resourceShareArn The Amazon Resource Name (ARN) of the resource share.
		 * @param {string} clientToken A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
		 * @return {DeleteResourceShareResponse} Success
		 */
		DeleteResourceShare(resourceShareArn: string, clientToken: string, headersHandler?: () => {[header: string]: string}): Promise<DeleteResourceShareResponse> {
			return Axios.delete<DeleteResourceShareResponse>(this.baseUri + '/deleteresourceshare#resourceShareArn?resourceShareArn=' + (resourceShareArn == null ? '' : encodeURIComponent(resourceShareArn)) + '&clientToken=' + (clientToken == null ? '' : encodeURIComponent(clientToken)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Disassociates the specified principals or resources from the specified resource share.
		 * Post /disassociateresourceshare
		 * @return {DisassociateResourceShareResponse} Success
		 */
		DisassociateResourceShare(requestBody: DisassociateResourceShareBody, headersHandler?: () => {[header: string]: string}): Promise<DisassociateResourceShareResponse> {
			return Axios.post<DisassociateResourceShareResponse>(this.baseUri + '/disassociateresourceshare', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Disassociates an AWS RAM permission from a resource share.
		 * Post /disassociateresourcesharepermission
		 * @return {DisassociateResourceSharePermissionResponse} Success
		 */
		DisassociateResourceSharePermission(requestBody: DisassociateResourceSharePermissionBody, headersHandler?: () => {[header: string]: string}): Promise<DisassociateResourceSharePermissionResponse> {
			return Axios.post<DisassociateResourceSharePermissionResponse>(this.baseUri + '/disassociateresourcesharepermission', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * <p>Enables resource sharing within your AWS Organization.</p> <p>The caller must be the master account for the AWS Organization.</p>
		 * Post /enablesharingwithawsorganization
		 * @return {EnableSharingWithAwsOrganizationResponse} Success
		 */
		EnableSharingWithAwsOrganization(headersHandler?: () => {[header: string]: string}): Promise<EnableSharingWithAwsOrganizationResponse> {
			return Axios.post<EnableSharingWithAwsOrganizationResponse>(this.baseUri + '/enablesharingwithawsorganization', null, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Gets the contents of an AWS RAM permission in JSON format.
		 * Post /getpermission
		 * @return {GetPermissionResponse} Success
		 */
		GetPermission(requestBody: GetPermissionBody, headersHandler?: () => {[header: string]: string}): Promise<GetPermissionResponse> {
			return Axios.post<GetPermissionResponse>(this.baseUri + '/getpermission', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Gets the policies for the specified resources that you own and have shared.
		 * Post /getresourcepolicies
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetResourcePoliciesResponse} Success
		 */
		GetResourcePolicies(maxResults: string, nextToken: string, requestBody: GetResourcePoliciesBody, headersHandler?: () => {[header: string]: string}): Promise<GetResourcePoliciesResponse> {
			return Axios.post<GetResourcePoliciesResponse>(this.baseUri + '/getresourcepolicies?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Gets the resources or principals for the resource shares that you own.
		 * Post /getresourceshareassociations
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetResourceShareAssociationsResponse} Success
		 */
		GetResourceShareAssociations(maxResults: string, nextToken: string, requestBody: GetResourceShareAssociationsBody, headersHandler?: () => {[header: string]: string}): Promise<GetResourceShareAssociationsResponse> {
			return Axios.post<GetResourceShareAssociationsResponse>(this.baseUri + '/getresourceshareassociations?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Gets the invitations for resource sharing that you've received.
		 * Post /getresourceshareinvitations
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetResourceShareInvitationsResponse} Success
		 */
		GetResourceShareInvitations(maxResults: string, nextToken: string, requestBody: GetResourceShareInvitationsBody, headersHandler?: () => {[header: string]: string}): Promise<GetResourceShareInvitationsResponse> {
			return Axios.post<GetResourceShareInvitationsResponse>(this.baseUri + '/getresourceshareinvitations?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Gets the resource shares that you own or the resource shares that are shared with you.
		 * Post /getresourceshares
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetResourceSharesResponse} Success
		 */
		GetResourceShares(maxResults: string, nextToken: string, requestBody: GetResourceSharesBody, headersHandler?: () => {[header: string]: string}): Promise<GetResourceSharesResponse> {
			return Axios.post<GetResourceSharesResponse>(this.baseUri + '/getresourceshares?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Lists the resources in a resource share that is shared with you but that the invitation is still pending for.
		 * Post /listpendinginvitationresources
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListPendingInvitationResourcesResponse} Success
		 */
		ListPendingInvitationResources(maxResults: string, nextToken: string, requestBody: ListPendingInvitationResourcesBody, headersHandler?: () => {[header: string]: string}): Promise<ListPendingInvitationResourcesResponse> {
			return Axios.post<ListPendingInvitationResourcesResponse>(this.baseUri + '/listpendinginvitationresources?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Lists the AWS RAM permissions.
		 * Post /listpermissions
		 * @return {ListPermissionsResponse} Success
		 */
		ListPermissions(requestBody: ListPermissionsBody, headersHandler?: () => {[header: string]: string}): Promise<ListPermissionsResponse> {
			return Axios.post<ListPermissionsResponse>(this.baseUri + '/listpermissions', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Lists the principals that you have shared resources with or that have shared resources with you.
		 * Post /listprincipals
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListPrincipalsResponse} Success
		 */
		ListPrincipals(maxResults: string, nextToken: string, requestBody: ListPrincipalsBody, headersHandler?: () => {[header: string]: string}): Promise<ListPrincipalsResponse> {
			return Axios.post<ListPrincipalsResponse>(this.baseUri + '/listprincipals?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Lists the AWS RAM permissions that are associated with a resource share.
		 * Post /listresourcesharepermissions
		 * @return {ListResourceSharePermissionsResponse} Success
		 */
		ListResourceSharePermissions(requestBody: ListResourceSharePermissionsBody, headersHandler?: () => {[header: string]: string}): Promise<ListResourceSharePermissionsResponse> {
			return Axios.post<ListResourceSharePermissionsResponse>(this.baseUri + '/listresourcesharepermissions', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Lists the shareable resource types supported by AWS RAM.
		 * Post /listresourcetypes
		 * @return {ListResourceTypesResponse} Success
		 */
		ListResourceTypes(requestBody: ListResourceTypesBody, headersHandler?: () => {[header: string]: string}): Promise<ListResourceTypesResponse> {
			return Axios.post<ListResourceTypesResponse>(this.baseUri + '/listresourcetypes', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Lists the resources that you added to a resource shares or the resources that are shared with you.
		 * Post /listresources
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListResourcesResponse} Success
		 */
		ListResources(maxResults: string, nextToken: string, requestBody: ListResourcesBody, headersHandler?: () => {[header: string]: string}): Promise<ListResourcesResponse> {
			return Axios.post<ListResourcesResponse>(this.baseUri + '/listresources?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * <p>Resource shares that were created by attaching a policy to a resource are visible only to the resource share owner, and the resource share cannot be modified in AWS RAM.</p> <p>Use this API action to promote the resource share. When you promote the resource share, it becomes:</p> <ul> <li> <p>Visible to all principals that it is shared with.</p> </li> <li> <p>Modifiable in AWS RAM.</p> </li> </ul>
		 * Post /promoteresourcesharecreatedfrompolicy#resourceShareArn
		 * @param {string} resourceShareArn The ARN of the resource share to promote.
		 * @return {PromoteResourceShareCreatedFromPolicyResponse} Success
		 */
		PromoteResourceShareCreatedFromPolicy(resourceShareArn: string, headersHandler?: () => {[header: string]: string}): Promise<PromoteResourceShareCreatedFromPolicyResponse> {
			return Axios.post<PromoteResourceShareCreatedFromPolicyResponse>(this.baseUri + '/promoteresourcesharecreatedfrompolicy#resourceShareArn?resourceShareArn=' + (resourceShareArn == null ? '' : encodeURIComponent(resourceShareArn)), null, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Rejects an invitation to a resource share from another AWS account.
		 * Post /rejectresourceshareinvitation
		 * @return {RejectResourceShareInvitationResponse} Success
		 */
		RejectResourceShareInvitation(requestBody: RejectResourceShareInvitationBody, headersHandler?: () => {[header: string]: string}): Promise<RejectResourceShareInvitationResponse> {
			return Axios.post<RejectResourceShareInvitationResponse>(this.baseUri + '/rejectresourceshareinvitation', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Adds the specified tags to the specified resource share that you own.
		 * Post /tagresource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceBody, headersHandler?: () => {[header: string]: string}): Promise<TagResourceResponse> {
			return Axios.post<TagResourceResponse>(this.baseUri + '/tagresource', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Removes the specified tags from the specified resource share that you own.
		 * Post /untagresource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceBody, headersHandler?: () => {[header: string]: string}): Promise<UntagResourceResponse> {
			return Axios.post<UntagResourceResponse>(this.baseUri + '/untagresource', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Updates the specified resource share that you own.
		 * Post /updateresourceshare
		 * @return {UpdateResourceShareResponse} Success
		 */
		UpdateResourceShare(requestBody: UpdateResourceShareBody, headersHandler?: () => {[header: string]: string}): Promise<UpdateResourceShareResponse> {
			return Axios.post<UpdateResourceShareResponse>(this.baseUri + '/updateresourceshare', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}
	}

	export interface AcceptResourceShareInvitationBody {

		/**The Amazon Resource Name (ARN) of the invitation. */
		resourceShareInvitationArn: string;

		/**A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. */
		clientToken?: string;
	}

	export interface AssociateResourceShareBody {

		/**The Amazon Resource Name (ARN) of the resource share. */
		resourceShareArn: string;

		/**The Amazon Resource Names (ARN) of the resources. */
		resourceArns?: Array<String>;

		/**The principals. */
		principals?: Array<String>;

		/**A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. */
		clientToken?: string;
	}

	export interface AssociateResourceSharePermissionBody {

		/**The Amazon Resource Name (ARN) of the resource share. */
		resourceShareArn: string;

		/**The ARN of the AWS RAM permission to associate with the resource share. */
		permissionArn: string;

		/**Indicates whether the permission should replace the permissions that are currently associated with the resource share. Use <code>true</code> to replace the current permissions. Use <code>false</code> to add the permission to the current permission. */
		replace?: boolean;

		/**A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. */
		clientToken?: string;
	}

	export interface CreateResourceShareBody {

		/**The name of the resource share. */
		name: string;

		/**The Amazon Resource Names (ARN) of the resources to associate with the resource share. */
		resourceArns?: Array<String>;

		/**The principals to associate with the resource share. The possible values are IDs of AWS accounts, the ARN of an OU or organization from AWS Organizations. */
		principals?: Array<String>;

		/**One or more tags. */
		tags?: Array<Tag>;

		/**Indicates whether principals outside your AWS organization can be associated with a resource share. */
		allowExternalPrincipals?: boolean;

		/**A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. */
		clientToken?: string;

		/**The ARNs of the permissions to associate with the resource share. If you do not specify an ARN for the permission, AWS RAM automatically attaches the default version of the permission for each resource type. */
		permissionArns?: Array<String>;
	}

	export interface DisassociateResourceShareBody {

		/**The Amazon Resource Name (ARN) of the resource share. */
		resourceShareArn: string;

		/**The Amazon Resource Names (ARNs) of the resources. */
		resourceArns?: Array<String>;

		/**The principals. */
		principals?: Array<String>;

		/**A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. */
		clientToken?: string;
	}

	export interface DisassociateResourceSharePermissionBody {

		/**The Amazon Resource Name (ARN) of the resource share. */
		resourceShareArn: string;

		/**The ARN of the permission to disassociate from the resource share. */
		permissionArn: string;

		/**A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. */
		clientToken?: string;
	}

	export interface GetPermissionBody {

		/**The ARN of the permission. */
		permissionArn: string;

		/**The identifier for the version of the permission. */
		permissionVersion?: number;
	}

	export interface GetResourcePoliciesBody {

		/**The Amazon Resource Names (ARN) of the resources. */
		resourceArns: Array<String>;

		/**The principal. */
		principal?: string;

		/**The token for the next page of results. */
		nextToken?: string;

		/**
		 * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults?: number;
	}

	export interface GetResourceShareAssociationsBody {

		/**The association type. Specify <code>PRINCIPAL</code> to list the principals that are associated with the specified resource share. Specify <code>RESOURCE</code> to list the resources that are associated with the specified resource share. */
		associationType: GetResourceShareAssociationsBodyAssociationType;

		/**The Amazon Resource Names (ARN) of the resource shares. */
		resourceShareArns?: Array<String>;

		/**The Amazon Resource Name (ARN) of the resource. You cannot specify this parameter if the association type is <code>PRINCIPAL</code>. */
		resourceArn?: string;

		/**The principal. You cannot specify this parameter if the association type is <code>RESOURCE</code>. */
		principal?: string;

		/**The association status. */
		associationStatus?: GetResourceShareAssociationsBodyAssociationStatus;

		/**The token for the next page of results. */
		nextToken?: string;

		/**
		 * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults?: number;
	}

	export enum GetResourceShareAssociationsBodyAssociationType { PRINCIPAL = 0, RESOURCE = 1 }

	export enum GetResourceShareAssociationsBodyAssociationStatus { ASSOCIATING = 0, ASSOCIATED = 1, FAILED = 2, DISASSOCIATING = 3, DISASSOCIATED = 4 }

	export interface GetResourceShareInvitationsBody {

		/**The Amazon Resource Names (ARN) of the invitations. */
		resourceShareInvitationArns?: Array<String>;

		/**The Amazon Resource Names (ARN) of the resource shares. */
		resourceShareArns?: Array<String>;

		/**The token for the next page of results. */
		nextToken?: string;

		/**
		 * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults?: number;
	}

	export interface GetResourceSharesBody {

		/**The Amazon Resource Names (ARN) of the resource shares. */
		resourceShareArns?: Array<String>;

		/**The status of the resource share. */
		resourceShareStatus?: GetResourceSharesBodyResourceShareStatus;

		/**The type of owner. */
		resourceOwner: GetResourceSharesBodyResourceOwner;

		/**The name of the resource share. */
		name?: string;

		/**One or more tag filters. */
		tagFilters?: Array<TagFilter>;

		/**The token for the next page of results. */
		nextToken?: string;

		/**
		 * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults?: number;
	}

	export enum GetResourceSharesBodyResourceShareStatus { PENDING = 0, ACTIVE = 1, FAILED = 2, DELETING = 3, DELETED = 4 }

	export enum GetResourceSharesBodyResourceOwner { SELF = 0, OTHER-ACCOUNTS = 1 }

	export interface ListPendingInvitationResourcesBody {

		/**The Amazon Resource Name (ARN) of the invitation. */
		resourceShareInvitationArn: string;

		/**The token for the next page of results. */
		nextToken?: string;

		/**
		 * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults?: number;
	}

	export interface ListPermissionsBody {

		/**Specifies the resource type for which to list permissions. For example, to list only permissions that apply to EC2 subnets, specify <code>ec2:Subnet</code>. */
		resourceType?: string;

		/**The token for the next page of results. */
		nextToken?: string;

		/**
		 * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults?: number;
	}

	export interface ListPrincipalsBody {

		/**The type of owner. */
		resourceOwner: ListPrincipalsBodyResourceOwner;

		/**The Amazon Resource Name (ARN) of the resource. */
		resourceArn?: string;

		/**The principals. */
		principals?: Array<String>;

		/**<p>The resource type.</p> <p>Valid values: <code>codebuild:Project</code> | <code>codebuild:ReportGroup</code> | <code>ec2:CapacityReservation</code> | <code>ec2:DedicatedHost</code> | <code>ec2:Subnet</code> | <code>ec2:TrafficMirrorTarget</code> | <code>ec2:TransitGateway</code> | <code>imagebuilder:Component</code> | <code>imagebuilder:Image</code> | <code>imagebuilder:ImageRecipe</code> | <code>license-manager:LicenseConfiguration</code> I <code>resource-groups:Group</code> | <code>rds:Cluster</code> | <code>route53resolver:ResolverRule</code> </p> */
		resourceType?: string;

		/**The Amazon Resource Names (ARN) of the resource shares. */
		resourceShareArns?: Array<String>;

		/**The token for the next page of results. */
		nextToken?: string;

		/**
		 * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults?: number;
	}

	export enum ListPrincipalsBodyResourceOwner { SELF = 0, OTHER-ACCOUNTS = 1 }

	export interface ListResourceSharePermissionsBody {

		/**The Amazon Resource Name (ARN) of the resource share. */
		resourceShareArn: string;

		/**The token for the next page of results. */
		nextToken?: string;

		/**
		 * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults?: number;
	}

	export interface ListResourceTypesBody {

		/**The token for the next page of results. */
		nextToken?: string;

		/**
		 * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults?: number;
	}

	export interface ListResourcesBody {

		/**The type of owner. */
		resourceOwner: ListResourcesBodyResourceOwner;

		/**The principal. */
		principal?: string;

		/**<p>The resource type.</p> <p>Valid values: <code>codebuild:Project</code> | <code>codebuild:ReportGroup</code> | <code>ec2:CapacityReservation</code> | <code>ec2:DedicatedHost</code> | <code>ec2:Subnet</code> | <code>ec2:TrafficMirrorTarget</code> | <code>ec2:TransitGateway</code> | <code>imagebuilder:Component</code> | <code>imagebuilder:Image</code> | <code>imagebuilder:ImageRecipe</code> | <code>license-manager:LicenseConfiguration</code> I <code>resource-groups:Group</code> | <code>rds:Cluster</code> | <code>route53resolver:ResolverRule</code> </p> */
		resourceType?: string;

		/**The Amazon Resource Names (ARN) of the resources. */
		resourceArns?: Array<String>;

		/**The Amazon Resource Names (ARN) of the resource shares. */
		resourceShareArns?: Array<String>;

		/**The token for the next page of results. */
		nextToken?: string;

		/**
		 * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults?: number;
	}

	export enum ListResourcesBodyResourceOwner { SELF = 0, OTHER-ACCOUNTS = 1 }

	export interface RejectResourceShareInvitationBody {

		/**The Amazon Resource Name (ARN) of the invitation. */
		resourceShareInvitationArn: string;

		/**A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. */
		clientToken?: string;
	}

	export interface TagResourceBody {

		/**The Amazon Resource Name (ARN) of the resource share. */
		resourceShareArn: string;

		/**One or more tags. */
		tags: Array<Tag>;
	}

	export interface UntagResourceBody {

		/**The Amazon Resource Name (ARN) of the resource share. */
		resourceShareArn: string;

		/**The tag keys of the tags to remove. */
		tagKeys: Array<TagKey>;
	}

	export interface UpdateResourceShareBody {

		/**The Amazon Resource Name (ARN) of the resource share. */
		resourceShareArn: string;

		/**The name of the resource share. */
		name?: string;

		/**Indicates whether principals outside your AWS organization can be associated with a resource share. */
		allowExternalPrincipals?: boolean;

		/**A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. */
		clientToken?: string;
	}

}

