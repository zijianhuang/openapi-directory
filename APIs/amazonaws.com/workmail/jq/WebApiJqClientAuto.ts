///<reference path="HttpClient.ts" />
namespace My_Demo_Client {
	export interface AssociateDelegateToResourceRequest {
		OrganizationId: string;
		ResourceId: string;
		EntityId: string;
	}

	export interface AssociateMemberToGroupRequest {
		OrganizationId: string;
		GroupId: string;
		MemberId: string;
	}

	export interface CreateAliasRequest {
		OrganizationId: string;
		EntityId: string;
		Alias: string;
	}

	export interface CreateGroupResponse {
		GroupId?: string;
	}

	export interface CreateGroupRequest {
		OrganizationId: string;
		Name: string;
	}

	export interface CreateResourceResponse {
		ResourceId?: string;
	}

	export interface CreateResourceRequest {
		OrganizationId: string;
		Name: string;
		Type: CreateResourceRequestType;
	}

	export enum CreateResourceRequestType { ROOM = 0, EQUIPMENT = 1 }

	export interface CreateUserResponse {
		UserId?: string;
	}

	export interface CreateUserRequest {
		OrganizationId: string;
		Name: string;
		DisplayName: string;
		Password: string;
	}

	export interface DeleteAccessControlRuleRequest {
		OrganizationId: string;
		Name: string;
	}

	export interface DeleteAliasRequest {
		OrganizationId: string;
		EntityId: string;
		Alias: string;
	}

	export interface DeleteGroupRequest {
		OrganizationId: string;
		GroupId: string;
	}

	export interface DeleteMailboxPermissionsRequest {
		OrganizationId: string;
		EntityId: string;
		GranteeId: string;
	}

	export interface DeleteResourceRequest {
		OrganizationId: string;
		ResourceId: string;
	}

	export interface DeleteRetentionPolicyRequest {
		OrganizationId: string;
		Id: string;
	}

	export interface DeleteUserRequest {
		OrganizationId: string;
		UserId: string;
	}

	export interface DeregisterFromWorkMailRequest {
		OrganizationId: string;
		EntityId: string;
	}

	export interface DescribeGroupResponse {
		GroupId?: string;
		Name?: string;
		Email?: string;
		State?: DescribeGroupResponseState;
		EnabledDate?: Date;
		DisabledDate?: Date;
	}

	export enum DescribeGroupResponseState { ENABLED = 0, DISABLED = 1, DELETED = 2 }

	export interface DescribeGroupRequest {
		OrganizationId: string;
		GroupId: string;
	}

	export interface DescribeOrganizationResponse {
		OrganizationId?: string;
		Alias?: string;
		State?: string;
		DirectoryId?: string;
		DirectoryType?: string;
		DefaultMailDomain?: string;
		CompletedDate?: Date;
		ErrorMessage?: string;
		ARN?: string;
	}

	export interface DescribeOrganizationRequest {
		OrganizationId: string;
	}

	export interface DescribeResourceResponse {
		ResourceId?: string;
		Email?: string;
		Name?: string;
		Type?: DescribeResourceResponseType;

		/**At least one delegate must be associated to the resource to disable automatic replies from the resource. */
		BookingOptions?: BookingOptions;
		State?: DescribeResourceResponseState;
		EnabledDate?: Date;
		DisabledDate?: Date;
	}

	export enum DescribeResourceResponseType { ROOM = 0, EQUIPMENT = 1 }

	export enum DescribeResourceResponseState { ENABLED = 0, DISABLED = 1, DELETED = 2 }

	export interface DescribeResourceRequest {
		OrganizationId: string;
		ResourceId: string;
	}

	export interface DescribeUserResponse {
		UserId?: string;
		Name?: string;
		Email?: string;
		DisplayName?: string;
		State?: DescribeUserResponseState;
		UserRole?: DescribeUserResponseUserRole;
		EnabledDate?: Date;
		DisabledDate?: Date;
	}

	export enum DescribeUserResponseState { ENABLED = 0, DISABLED = 1, DELETED = 2 }

	export enum DescribeUserResponseUserRole { USER = 0, RESOURCE = 1, SYSTEM_USER = 2 }

	export interface DescribeUserRequest {
		OrganizationId: string;
		UserId: string;
	}

	export interface DisassociateDelegateFromResourceRequest {
		OrganizationId: string;
		ResourceId: string;
		EntityId: string;
	}

	export interface DisassociateMemberFromGroupRequest {
		OrganizationId: string;
		GroupId: string;
		MemberId: string;
	}

	export interface GetAccessControlEffectResponse {
		Effect?: GetAccessControlEffectResponseEffect;
		MatchedRules?: Array<AccessControlRuleName>;
	}

	export enum GetAccessControlEffectResponseEffect { ALLOW = 0, DENY = 1 }

	export interface GetAccessControlEffectRequest {
		OrganizationId: string;
		IpAddress: string;
		Action: string;
		UserId: string;
	}

	export interface GetDefaultRetentionPolicyResponse {
		Id?: string;
		Name?: string;
		Description?: string;
		FolderConfigurations?: Array<FolderConfiguration>;
	}

	export interface GetDefaultRetentionPolicyRequest {
		OrganizationId: string;
	}

	export interface GetMailboxDetailsResponse {
		MailboxQuota?: number;
		MailboxSize?: number;
	}

	export interface GetMailboxDetailsRequest {
		OrganizationId: string;
		UserId: string;
	}

	export interface ListAccessControlRulesResponse {
		Rules?: Array<AccessControlRule>;
	}

	export interface ListAccessControlRulesRequest {
		OrganizationId: string;
	}

	export interface ListAliasesResponse {
		Aliases?: Array<EmailAddress>;
		NextToken?: string;
	}

	export interface ListAliasesRequest {
		OrganizationId: string;
		EntityId: string;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListGroupMembersResponse {
		Members?: Array<Member>;
		NextToken?: string;
	}

	export interface ListGroupMembersRequest {
		OrganizationId: string;
		GroupId: string;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListGroupsResponse {
		Groups?: Array<Group>;
		NextToken?: string;
	}

	export interface ListGroupsRequest {
		OrganizationId: string;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListMailboxPermissionsResponse {
		Permissions?: Array<Permission>;
		NextToken?: string;
	}

	export interface ListMailboxPermissionsRequest {
		OrganizationId: string;
		EntityId: string;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListOrganizationsResponse {
		OrganizationSummaries?: Array<OrganizationSummary>;
		NextToken?: string;
	}

	export interface ListOrganizationsRequest {
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListResourceDelegatesResponse {
		Delegates?: Array<Delegate>;
		NextToken?: string;
	}

	export interface ListResourceDelegatesRequest {
		OrganizationId: string;
		ResourceId: string;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListResourcesResponse {
		Resources?: Array<Resource>;
		NextToken?: string;
	}

	export interface ListResourcesRequest {
		OrganizationId: string;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListTagsForResourceResponse {
		Tags?: Array<Tag>;
	}

	export interface ListTagsForResourceRequest {
		ResourceARN: string;
	}

	export interface ListUsersResponse {
		Users?: Array<User>;
		NextToken?: string;
	}

	export interface ListUsersRequest {
		OrganizationId: string;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface PutAccessControlRuleRequest {
		Name: string;
		Effect: PutAccessControlRuleRequestEffect;
		Description: string;
		IpRanges?: Array<IpRange>;
		NotIpRanges?: Array<IpRange>;
		Actions?: Array<AccessControlRuleAction>;
		NotActions?: Array<AccessControlRuleAction>;
		UserIds?: Array<WorkMailIdentifier>;
		NotUserIds?: Array<WorkMailIdentifier>;
		OrganizationId: string;
	}

	export enum PutAccessControlRuleRequestEffect { ALLOW = 0, DENY = 1 }

	export interface PutMailboxPermissionsRequest {
		OrganizationId: string;
		EntityId: string;
		GranteeId: string;
		PermissionValues: Array<PermissionType>;
	}

	export interface PutRetentionPolicyRequest {
		OrganizationId: string;
		Id?: string;
		Name: string;
		Description?: string;
		FolderConfigurations: Array<FolderConfiguration>;
	}

	export interface RegisterToWorkMailRequest {
		OrganizationId: string;
		EntityId: string;
		Email: string;
	}

	export interface ResetPasswordRequest {
		OrganizationId: string;
		UserId: string;
		Password: string;
	}

	export interface TagResourceRequest {
		ResourceARN: string;
		Tags: Array<Tag>;
	}

	export interface UntagResourceRequest {
		ResourceARN: string;
		TagKeys: Array<TagKey>;
	}

	export interface UpdateMailboxQuotaRequest {
		OrganizationId: string;
		UserId: string;
		MailboxQuota: number;
	}

	export interface UpdatePrimaryEmailAddressRequest {
		OrganizationId: string;
		EntityId: string;
		Email: string;
	}

	export interface UpdateResourceRequest {
		OrganizationId: string;
		ResourceId: string;
		Name?: string;

		/**At least one delegate must be associated to the resource to disable automatic replies from the resource. */
		BookingOptions?: BookingOptions;
	}

	export enum AccessControlRuleEffect { ALLOW = 0, DENY = 1 }


	/**A rule that controls access to an Amazon WorkMail organization. */
	export interface AccessControlRule {
		Name?: string;
		Effect?: AccessControlRuleEffect;
		Description?: string;
		IpRanges?: Array<IpRange>;
		NotIpRanges?: Array<IpRange>;
		Actions?: Array<AccessControlRuleAction>;
		NotActions?: Array<AccessControlRuleAction>;
		UserIds?: Array<WorkMailIdentifier>;
		NotUserIds?: Array<WorkMailIdentifier>;
		DateCreated?: Date;
		DateModified?: Date;
	}

	export enum AccessControlRuleEffect { ALLOW = 0, DENY = 1 }


	/**At least one delegate must be associated to the resource to disable automatic replies from the resource. */
	export interface BookingOptions {
		AutoAcceptRequests?: boolean;
		AutoDeclineRecurringRequests?: boolean;
		AutoDeclineConflictingRequests?: boolean;
	}

	export enum ResourceType { ROOM = 0, EQUIPMENT = 1 }

	export enum MemberType { GROUP = 0, USER = 1 }


	/**The name of the attribute, which is one of the values defined in the UserAttribute enumeration. */
	export interface Delegate {
		Id: string;
		Type: DelegateType;
	}

	export enum DelegateType { GROUP = 0, USER = 1 }

	export enum EntityState { ENABLED = 0, DISABLED = 1, DELETED = 2 }

	export enum UserRole { USER = 0, RESOURCE = 1, SYSTEM_USER = 2 }

	export enum FolderName { INBOX = 0, DELETED_ITEMS = 1, SENT_ITEMS = 2, DRAFTS = 3, JUNK_EMAIL = 4 }

	export enum RetentionAction { NONE = 0, DELETE = 1, PERMANENTLY_DELETE = 2 }


	/**The configuration applied to an organization's folders by its retention policy. */
	export interface FolderConfiguration {
		Name: FolderConfigurationName;
		Action: FolderConfigurationAction;
		Period?: number;
	}

	export enum FolderConfigurationName { INBOX = 0, DELETED_ITEMS = 1, SENT_ITEMS = 2, DRAFTS = 3, JUNK_EMAIL = 4 }

	export enum FolderConfigurationAction { NONE = 0, DELETE = 1, PERMANENTLY_DELETE = 2 }


	/**The representation of an Amazon WorkMail group. */
	export interface Group {
		Id?: string;
		Email?: string;
		Name?: string;
		State?: GroupState;
		EnabledDate?: Date;
		DisabledDate?: Date;
	}

	export enum GroupState { ENABLED = 0, DISABLED = 1, DELETED = 2 }


	/**The representation of a user or group. */
	export interface Member {
		Id?: string;
		Name?: string;
		Type?: MemberType;
		State?: MemberState;
		EnabledDate?: Date;
		DisabledDate?: Date;
	}

	export enum MemberType { GROUP = 0, USER = 1 }

	export enum MemberState { ENABLED = 0, DISABLED = 1, DELETED = 2 }


	/**The representation of an organization. */
	export interface OrganizationSummary {
		OrganizationId?: string;
		Alias?: string;
		ErrorMessage?: string;
		State?: string;
	}


	/**Permission granted to a user, group, or resource to access a certain aspect of another user, group, or resource mailbox. */
	export interface Permission {
		GranteeId: string;
		GranteeType: PermissionGranteeType;
		PermissionValues: Array<PermissionType>;
	}

	export enum PermissionGranteeType { GROUP = 0, USER = 1 }

	export enum PermissionType { FULL_ACCESS = 0, SEND_AS = 1, SEND_ON_BEHALF = 2 }


	/**The representation of a resource. */
	export interface Resource {
		Id?: string;
		Email?: string;
		Name?: string;
		Type?: ResourceType;
		State?: ResourceState;
		EnabledDate?: Date;
		DisabledDate?: Date;
	}

	export enum ResourceType { ROOM = 0, EQUIPMENT = 1 }

	export enum ResourceState { ENABLED = 0, DISABLED = 1, DELETED = 2 }


	/**Describes a tag applied to a resource. */
	export interface Tag {
		Key: string;
		Value: string;
	}


	/**The representation of an Amazon WorkMail user. */
	export interface User {
		Id?: string;
		Email?: string;
		Name?: string;
		DisplayName?: string;
		State?: UserState;
		UserRole?: UserUserRole;
		EnabledDate?: Date;
		DisabledDate?: Date;
	}

	export enum UserState { ENABLED = 0, DISABLED = 1, DELETED = 2 }

	export enum UserUserRole { USER = 0, RESOURCE = 1, SYSTEM_USER = 2 }

	export class DemoClient {
		constructor(private baseUri: string = HttpClient.locationOrigin, private httpClient: HttpClientBase = new HttpClient(), private error?: (xhr: JQueryXHR, ajaxOptions: string, thrown: string) => any, private statusCode?: { [key: string]: any; }) {
		}

		/**
		 * Adds a member (user or group) to the resource's set of delegates.
		 * Post /#X-Amz-Target=WorkMailService.AssociateDelegateToResource
		 * @return {AssociateDelegateToResourceResponse} Success
		 */
		AssociateDelegateToResource(callback: (data : AssociateDelegateToResourceResponse) => any, requestBody: AssociateDelegateToResourceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=WorkMailService.AssociateDelegateToResource', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Adds a member (user or group) to the group's set.
		 * Post /#X-Amz-Target=WorkMailService.AssociateMemberToGroup
		 * @return {AssociateMemberToGroupResponse} Success
		 */
		AssociateMemberToGroup(callback: (data : AssociateMemberToGroupResponse) => any, requestBody: AssociateMemberToGroupRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=WorkMailService.AssociateMemberToGroup', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Adds an alias to the set of a given member (user or group) of Amazon WorkMail.
		 * Post /#X-Amz-Target=WorkMailService.CreateAlias
		 * @return {CreateAliasResponse} Success
		 */
		CreateAlias(callback: (data : CreateAliasResponse) => any, requestBody: CreateAliasRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=WorkMailService.CreateAlias', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Creates a group that can be used in Amazon WorkMail by calling the <a>RegisterToWorkMail</a> operation.
		 * Post /#X-Amz-Target=WorkMailService.CreateGroup
		 * @return {CreateGroupResponse} Success
		 */
		CreateGroup(callback: (data : CreateGroupResponse) => any, requestBody: CreateGroupRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=WorkMailService.CreateGroup', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Creates a new Amazon WorkMail resource.
		 * Post /#X-Amz-Target=WorkMailService.CreateResource
		 * @return {CreateResourceResponse} Success
		 */
		CreateResource(callback: (data : CreateResourceResponse) => any, requestBody: CreateResourceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=WorkMailService.CreateResource', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Creates a user who can be used in Amazon WorkMail by calling the <a>RegisterToWorkMail</a> operation.
		 * Post /#X-Amz-Target=WorkMailService.CreateUser
		 * @return {CreateUserResponse} Success
		 */
		CreateUser(callback: (data : CreateUserResponse) => any, requestBody: CreateUserRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=WorkMailService.CreateUser', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Deletes an access control rule for the specified WorkMail organization.
		 * Post /#X-Amz-Target=WorkMailService.DeleteAccessControlRule
		 * @return {DeleteAccessControlRuleResponse} Success
		 */
		DeleteAccessControlRule(callback: (data : DeleteAccessControlRuleResponse) => any, requestBody: DeleteAccessControlRuleRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=WorkMailService.DeleteAccessControlRule', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Remove one or more specified aliases from a set of aliases for a given user.
		 * Post /#X-Amz-Target=WorkMailService.DeleteAlias
		 * @return {DeleteAliasResponse} Success
		 */
		DeleteAlias(callback: (data : DeleteAliasResponse) => any, requestBody: DeleteAliasRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=WorkMailService.DeleteAlias', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Deletes a group from Amazon WorkMail.
		 * Post /#X-Amz-Target=WorkMailService.DeleteGroup
		 * @return {DeleteGroupResponse} Success
		 */
		DeleteGroup(callback: (data : DeleteGroupResponse) => any, requestBody: DeleteGroupRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=WorkMailService.DeleteGroup', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Deletes permissions granted to a member (user or group).
		 * Post /#X-Amz-Target=WorkMailService.DeleteMailboxPermissions
		 * @return {DeleteMailboxPermissionsResponse} Success
		 */
		DeleteMailboxPermissions(callback: (data : DeleteMailboxPermissionsResponse) => any, requestBody: DeleteMailboxPermissionsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=WorkMailService.DeleteMailboxPermissions', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Deletes the specified resource.
		 * Post /#X-Amz-Target=WorkMailService.DeleteResource
		 * @return {DeleteResourceResponse} Success
		 */
		DeleteResource(callback: (data : DeleteResourceResponse) => any, requestBody: DeleteResourceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=WorkMailService.DeleteResource', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Deletes the specified retention policy from the specified organization.
		 * Post /#X-Amz-Target=WorkMailService.DeleteRetentionPolicy
		 * @return {DeleteRetentionPolicyResponse} Success
		 */
		DeleteRetentionPolicy(callback: (data : DeleteRetentionPolicyResponse) => any, requestBody: DeleteRetentionPolicyRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=WorkMailService.DeleteRetentionPolicy', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Deletes a user from Amazon WorkMail and all subsequent systems. Before you can delete a user, the user state must be <code>DISABLED</code>. Use the <a>DescribeUser</a> action to confirm the user state.</p> <p>Deleting a user is permanent and cannot be undone. WorkMail archives user mailboxes for 30 days before they are permanently removed.</p>
		 * Post /#X-Amz-Target=WorkMailService.DeleteUser
		 * @return {DeleteUserResponse} Success
		 */
		DeleteUser(callback: (data : DeleteUserResponse) => any, requestBody: DeleteUserRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=WorkMailService.DeleteUser', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Mark a user, group, or resource as no longer used in Amazon WorkMail. This action disassociates the mailbox and schedules it for clean-up. WorkMail keeps mailboxes for 30 days before they are permanently removed. The functionality in the console is <i>Disable</i>.
		 * Post /#X-Amz-Target=WorkMailService.DeregisterFromWorkMail
		 * @return {DeregisterFromWorkMailResponse} Success
		 */
		DeregisterFromWorkMail(callback: (data : DeregisterFromWorkMailResponse) => any, requestBody: DeregisterFromWorkMailRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=WorkMailService.DeregisterFromWorkMail', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Returns the data available for the group.
		 * Post /#X-Amz-Target=WorkMailService.DescribeGroup
		 * @return {DescribeGroupResponse} Success
		 */
		DescribeGroup(callback: (data : DescribeGroupResponse) => any, requestBody: DescribeGroupRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=WorkMailService.DescribeGroup', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Provides more information regarding a given organization based on its identifier.
		 * Post /#X-Amz-Target=WorkMailService.DescribeOrganization
		 * @return {DescribeOrganizationResponse} Success
		 */
		DescribeOrganization(callback: (data : DescribeOrganizationResponse) => any, requestBody: DescribeOrganizationRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=WorkMailService.DescribeOrganization', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Returns the data available for the resource.
		 * Post /#X-Amz-Target=WorkMailService.DescribeResource
		 * @return {DescribeResourceResponse} Success
		 */
		DescribeResource(callback: (data : DescribeResourceResponse) => any, requestBody: DescribeResourceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=WorkMailService.DescribeResource', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Provides information regarding the user.
		 * Post /#X-Amz-Target=WorkMailService.DescribeUser
		 * @return {DescribeUserResponse} Success
		 */
		DescribeUser(callback: (data : DescribeUserResponse) => any, requestBody: DescribeUserRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=WorkMailService.DescribeUser', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Removes a member from the resource's set of delegates.
		 * Post /#X-Amz-Target=WorkMailService.DisassociateDelegateFromResource
		 * @return {DisassociateDelegateFromResourceResponse} Success
		 */
		DisassociateDelegateFromResource(callback: (data : DisassociateDelegateFromResourceResponse) => any, requestBody: DisassociateDelegateFromResourceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=WorkMailService.DisassociateDelegateFromResource', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Removes a member from a group.
		 * Post /#X-Amz-Target=WorkMailService.DisassociateMemberFromGroup
		 * @return {DisassociateMemberFromGroupResponse} Success
		 */
		DisassociateMemberFromGroup(callback: (data : DisassociateMemberFromGroupResponse) => any, requestBody: DisassociateMemberFromGroupRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=WorkMailService.DisassociateMemberFromGroup', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Gets the effects of an organization's access control rules as they apply to a specified IPv4 address, access protocol action, or user ID.
		 * Post /#X-Amz-Target=WorkMailService.GetAccessControlEffect
		 * @return {GetAccessControlEffectResponse} Success
		 */
		GetAccessControlEffect(callback: (data : GetAccessControlEffectResponse) => any, requestBody: GetAccessControlEffectRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=WorkMailService.GetAccessControlEffect', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Gets the default retention policy details for the specified organization.
		 * Post /#X-Amz-Target=WorkMailService.GetDefaultRetentionPolicy
		 * @return {GetDefaultRetentionPolicyResponse} Success
		 */
		GetDefaultRetentionPolicy(callback: (data : GetDefaultRetentionPolicyResponse) => any, requestBody: GetDefaultRetentionPolicyRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=WorkMailService.GetDefaultRetentionPolicy', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Requests a user's mailbox details for a specified organization and user.
		 * Post /#X-Amz-Target=WorkMailService.GetMailboxDetails
		 * @return {GetMailboxDetailsResponse} Success
		 */
		GetMailboxDetails(callback: (data : GetMailboxDetailsResponse) => any, requestBody: GetMailboxDetailsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=WorkMailService.GetMailboxDetails', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Lists the access control rules for the specified organization.
		 * Post /#X-Amz-Target=WorkMailService.ListAccessControlRules
		 * @return {ListAccessControlRulesResponse} Success
		 */
		ListAccessControlRules(callback: (data : ListAccessControlRulesResponse) => any, requestBody: ListAccessControlRulesRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=WorkMailService.ListAccessControlRules', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Creates a paginated call to list the aliases associated with a given entity.
		 * Post /#X-Amz-Target=WorkMailService.ListAliases
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAliasesResponse} Success
		 */
		ListAliases(MaxResults: string, NextToken: string, callback: (data : ListAliasesResponse) => any, requestBody: ListAliasesRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=WorkMailService.ListAliases?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Returns an overview of the members of a group. Users and groups can be members of a group.
		 * Post /#X-Amz-Target=WorkMailService.ListGroupMembers
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListGroupMembersResponse} Success
		 */
		ListGroupMembers(MaxResults: string, NextToken: string, callback: (data : ListGroupMembersResponse) => any, requestBody: ListGroupMembersRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=WorkMailService.ListGroupMembers?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Returns summaries of the organization's groups.
		 * Post /#X-Amz-Target=WorkMailService.ListGroups
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListGroupsResponse} Success
		 */
		ListGroups(MaxResults: string, NextToken: string, callback: (data : ListGroupsResponse) => any, requestBody: ListGroupsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=WorkMailService.ListGroups?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Lists the mailbox permissions associated with a user, group, or resource mailbox.
		 * Post /#X-Amz-Target=WorkMailService.ListMailboxPermissions
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListMailboxPermissionsResponse} Success
		 */
		ListMailboxPermissions(MaxResults: string, NextToken: string, callback: (data : ListMailboxPermissionsResponse) => any, requestBody: ListMailboxPermissionsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=WorkMailService.ListMailboxPermissions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Returns summaries of the customer's organizations.
		 * Post /#X-Amz-Target=WorkMailService.ListOrganizations
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListOrganizationsResponse} Success
		 */
		ListOrganizations(MaxResults: string, NextToken: string, callback: (data : ListOrganizationsResponse) => any, requestBody: ListOrganizationsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=WorkMailService.ListOrganizations?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Lists the delegates associated with a resource. Users and groups can be resource delegates and answer requests on behalf of the resource.
		 * Post /#X-Amz-Target=WorkMailService.ListResourceDelegates
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListResourceDelegatesResponse} Success
		 */
		ListResourceDelegates(MaxResults: string, NextToken: string, callback: (data : ListResourceDelegatesResponse) => any, requestBody: ListResourceDelegatesRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=WorkMailService.ListResourceDelegates?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Returns summaries of the organization's resources.
		 * Post /#X-Amz-Target=WorkMailService.ListResources
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListResourcesResponse} Success
		 */
		ListResources(MaxResults: string, NextToken: string, callback: (data : ListResourcesResponse) => any, requestBody: ListResourcesRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=WorkMailService.ListResources?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Lists the tags applied to an Amazon WorkMail organization resource.
		 * Post /#X-Amz-Target=WorkMailService.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(callback: (data : ListTagsForResourceResponse) => any, requestBody: ListTagsForResourceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=WorkMailService.ListTagsForResource', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Returns summaries of the organization's users.
		 * Post /#X-Amz-Target=WorkMailService.ListUsers
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListUsersResponse} Success
		 */
		ListUsers(MaxResults: string, NextToken: string, callback: (data : ListUsersResponse) => any, requestBody: ListUsersRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=WorkMailService.ListUsers?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Adds a new access control rule for the specified organization. The rule allows or denies access to the organization for the specified IPv4 addresses, access protocol actions, and user IDs. Adding a new rule with the same name as an existing rule replaces the older rule.
		 * Post /#X-Amz-Target=WorkMailService.PutAccessControlRule
		 * @return {PutAccessControlRuleResponse} Success
		 */
		PutAccessControlRule(callback: (data : PutAccessControlRuleResponse) => any, requestBody: PutAccessControlRuleRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=WorkMailService.PutAccessControlRule', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Sets permissions for a user, group, or resource. This replaces any pre-existing permissions.
		 * Post /#X-Amz-Target=WorkMailService.PutMailboxPermissions
		 * @return {PutMailboxPermissionsResponse} Success
		 */
		PutMailboxPermissions(callback: (data : PutMailboxPermissionsResponse) => any, requestBody: PutMailboxPermissionsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=WorkMailService.PutMailboxPermissions', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Puts a retention policy to the specified organization.
		 * Post /#X-Amz-Target=WorkMailService.PutRetentionPolicy
		 * @return {PutRetentionPolicyResponse} Success
		 */
		PutRetentionPolicy(callback: (data : PutRetentionPolicyResponse) => any, requestBody: PutRetentionPolicyRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=WorkMailService.PutRetentionPolicy', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Registers an existing and disabled user, group, or resource for Amazon WorkMail use by associating a mailbox and calendaring capabilities. It performs no change if the user, group, or resource is enabled and fails if the user, group, or resource is deleted. This operation results in the accumulation of costs. For more information, see <a href="https://aws.amazon.com/workmail/pricing">Pricing</a>. The equivalent console functionality for this operation is <i>Enable</i>. </p> <p>Users can either be created by calling the <a>CreateUser</a> API operation or they can be synchronized from your directory. For more information, see <a>DeregisterFromWorkMail</a>.</p>
		 * Post /#X-Amz-Target=WorkMailService.RegisterToWorkMail
		 * @return {RegisterToWorkMailResponse} Success
		 */
		RegisterToWorkMail(callback: (data : RegisterToWorkMailResponse) => any, requestBody: RegisterToWorkMailRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=WorkMailService.RegisterToWorkMail', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Allows the administrator to reset the password for a user.
		 * Post /#X-Amz-Target=WorkMailService.ResetPassword
		 * @return {ResetPasswordResponse} Success
		 */
		ResetPassword(callback: (data : ResetPasswordResponse) => any, requestBody: ResetPasswordRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=WorkMailService.ResetPassword', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Applies the specified tags to the specified Amazon WorkMail organization resource.
		 * Post /#X-Amz-Target=WorkMailService.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(callback: (data : TagResourceResponse) => any, requestBody: TagResourceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=WorkMailService.TagResource', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Untags the specified tags from the specified Amazon WorkMail organization resource.
		 * Post /#X-Amz-Target=WorkMailService.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(callback: (data : UntagResourceResponse) => any, requestBody: UntagResourceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=WorkMailService.UntagResource', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Updates a user's current mailbox quota for a specified organization and user.
		 * Post /#X-Amz-Target=WorkMailService.UpdateMailboxQuota
		 * @return {UpdateMailboxQuotaResponse} Success
		 */
		UpdateMailboxQuota(callback: (data : UpdateMailboxQuotaResponse) => any, requestBody: UpdateMailboxQuotaRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=WorkMailService.UpdateMailboxQuota', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Updates the primary email for a user, group, or resource. The current email is moved into the list of aliases (or swapped between an existing alias and the current primary email), and the email provided in the input is promoted as the primary.
		 * Post /#X-Amz-Target=WorkMailService.UpdatePrimaryEmailAddress
		 * @return {UpdatePrimaryEmailAddressResponse} Success
		 */
		UpdatePrimaryEmailAddress(callback: (data : UpdatePrimaryEmailAddressResponse) => any, requestBody: UpdatePrimaryEmailAddressRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=WorkMailService.UpdatePrimaryEmailAddress', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Updates data for the resource. To have the latest information, it must be preceded by a <a>DescribeResource</a> call. The dataset in the request should be the one expected when performing another <code>DescribeResource</code> call.
		 * Post /#X-Amz-Target=WorkMailService.UpdateResource
		 * @return {UpdateResourceResponse} Success
		 */
		UpdateResource(callback: (data : UpdateResourceResponse) => any, requestBody: UpdateResourceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=WorkMailService.UpdateResource', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}
	}

}

