export namespace My_Demo_Client {
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
		constructor(private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/') {
		}

		/**
		 * Adds a member (user or group) to the resource's set of delegates.
		 * Post /#X-Amz-Target=WorkMailService.AssociateDelegateToResource
		 * @return {AssociateDelegateToResourceResponse} Success
		 */
		AssociateDelegateToResource(requestBody: AssociateDelegateToResourceRequest, headersHandler?: () => {[header: string]: string}): Promise<AssociateDelegateToResourceResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkMailService.AssociateDelegateToResource', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Adds a member (user or group) to the group's set.
		 * Post /#X-Amz-Target=WorkMailService.AssociateMemberToGroup
		 * @return {AssociateMemberToGroupResponse} Success
		 */
		AssociateMemberToGroup(requestBody: AssociateMemberToGroupRequest, headersHandler?: () => {[header: string]: string}): Promise<AssociateMemberToGroupResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkMailService.AssociateMemberToGroup', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Adds an alias to the set of a given member (user or group) of Amazon WorkMail.
		 * Post /#X-Amz-Target=WorkMailService.CreateAlias
		 * @return {CreateAliasResponse} Success
		 */
		CreateAlias(requestBody: CreateAliasRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateAliasResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkMailService.CreateAlias', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Creates a group that can be used in Amazon WorkMail by calling the <a>RegisterToWorkMail</a> operation.
		 * Post /#X-Amz-Target=WorkMailService.CreateGroup
		 * @return {CreateGroupResponse} Success
		 */
		CreateGroup(requestBody: CreateGroupRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateGroupResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkMailService.CreateGroup', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Creates a new Amazon WorkMail resource.
		 * Post /#X-Amz-Target=WorkMailService.CreateResource
		 * @return {CreateResourceResponse} Success
		 */
		CreateResource(requestBody: CreateResourceRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateResourceResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkMailService.CreateResource', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Creates a user who can be used in Amazon WorkMail by calling the <a>RegisterToWorkMail</a> operation.
		 * Post /#X-Amz-Target=WorkMailService.CreateUser
		 * @return {CreateUserResponse} Success
		 */
		CreateUser(requestBody: CreateUserRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateUserResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkMailService.CreateUser', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Deletes an access control rule for the specified WorkMail organization.
		 * Post /#X-Amz-Target=WorkMailService.DeleteAccessControlRule
		 * @return {DeleteAccessControlRuleResponse} Success
		 */
		DeleteAccessControlRule(requestBody: DeleteAccessControlRuleRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteAccessControlRuleResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkMailService.DeleteAccessControlRule', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Remove one or more specified aliases from a set of aliases for a given user.
		 * Post /#X-Amz-Target=WorkMailService.DeleteAlias
		 * @return {DeleteAliasResponse} Success
		 */
		DeleteAlias(requestBody: DeleteAliasRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteAliasResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkMailService.DeleteAlias', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Deletes a group from Amazon WorkMail.
		 * Post /#X-Amz-Target=WorkMailService.DeleteGroup
		 * @return {DeleteGroupResponse} Success
		 */
		DeleteGroup(requestBody: DeleteGroupRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteGroupResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkMailService.DeleteGroup', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Deletes permissions granted to a member (user or group).
		 * Post /#X-Amz-Target=WorkMailService.DeleteMailboxPermissions
		 * @return {DeleteMailboxPermissionsResponse} Success
		 */
		DeleteMailboxPermissions(requestBody: DeleteMailboxPermissionsRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteMailboxPermissionsResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkMailService.DeleteMailboxPermissions', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Deletes the specified resource.
		 * Post /#X-Amz-Target=WorkMailService.DeleteResource
		 * @return {DeleteResourceResponse} Success
		 */
		DeleteResource(requestBody: DeleteResourceRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteResourceResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkMailService.DeleteResource', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Deletes the specified retention policy from the specified organization.
		 * Post /#X-Amz-Target=WorkMailService.DeleteRetentionPolicy
		 * @return {DeleteRetentionPolicyResponse} Success
		 */
		DeleteRetentionPolicy(requestBody: DeleteRetentionPolicyRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteRetentionPolicyResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkMailService.DeleteRetentionPolicy', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Deletes a user from Amazon WorkMail and all subsequent systems. Before you can delete a user, the user state must be <code>DISABLED</code>. Use the <a>DescribeUser</a> action to confirm the user state.</p> <p>Deleting a user is permanent and cannot be undone. WorkMail archives user mailboxes for 30 days before they are permanently removed.</p>
		 * Post /#X-Amz-Target=WorkMailService.DeleteUser
		 * @return {DeleteUserResponse} Success
		 */
		DeleteUser(requestBody: DeleteUserRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteUserResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkMailService.DeleteUser', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Mark a user, group, or resource as no longer used in Amazon WorkMail. This action disassociates the mailbox and schedules it for clean-up. WorkMail keeps mailboxes for 30 days before they are permanently removed. The functionality in the console is <i>Disable</i>.
		 * Post /#X-Amz-Target=WorkMailService.DeregisterFromWorkMail
		 * @return {DeregisterFromWorkMailResponse} Success
		 */
		DeregisterFromWorkMail(requestBody: DeregisterFromWorkMailRequest, headersHandler?: () => {[header: string]: string}): Promise<DeregisterFromWorkMailResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkMailService.DeregisterFromWorkMail', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns the data available for the group.
		 * Post /#X-Amz-Target=WorkMailService.DescribeGroup
		 * @return {DescribeGroupResponse} Success
		 */
		DescribeGroup(requestBody: DescribeGroupRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeGroupResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkMailService.DescribeGroup', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Provides more information regarding a given organization based on its identifier.
		 * Post /#X-Amz-Target=WorkMailService.DescribeOrganization
		 * @return {DescribeOrganizationResponse} Success
		 */
		DescribeOrganization(requestBody: DescribeOrganizationRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeOrganizationResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkMailService.DescribeOrganization', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns the data available for the resource.
		 * Post /#X-Amz-Target=WorkMailService.DescribeResource
		 * @return {DescribeResourceResponse} Success
		 */
		DescribeResource(requestBody: DescribeResourceRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeResourceResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkMailService.DescribeResource', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Provides information regarding the user.
		 * Post /#X-Amz-Target=WorkMailService.DescribeUser
		 * @return {DescribeUserResponse} Success
		 */
		DescribeUser(requestBody: DescribeUserRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeUserResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkMailService.DescribeUser', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Removes a member from the resource's set of delegates.
		 * Post /#X-Amz-Target=WorkMailService.DisassociateDelegateFromResource
		 * @return {DisassociateDelegateFromResourceResponse} Success
		 */
		DisassociateDelegateFromResource(requestBody: DisassociateDelegateFromResourceRequest, headersHandler?: () => {[header: string]: string}): Promise<DisassociateDelegateFromResourceResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkMailService.DisassociateDelegateFromResource', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Removes a member from a group.
		 * Post /#X-Amz-Target=WorkMailService.DisassociateMemberFromGroup
		 * @return {DisassociateMemberFromGroupResponse} Success
		 */
		DisassociateMemberFromGroup(requestBody: DisassociateMemberFromGroupRequest, headersHandler?: () => {[header: string]: string}): Promise<DisassociateMemberFromGroupResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkMailService.DisassociateMemberFromGroup', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Gets the effects of an organization's access control rules as they apply to a specified IPv4 address, access protocol action, or user ID.
		 * Post /#X-Amz-Target=WorkMailService.GetAccessControlEffect
		 * @return {GetAccessControlEffectResponse} Success
		 */
		GetAccessControlEffect(requestBody: GetAccessControlEffectRequest, headersHandler?: () => {[header: string]: string}): Promise<GetAccessControlEffectResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkMailService.GetAccessControlEffect', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Gets the default retention policy details for the specified organization.
		 * Post /#X-Amz-Target=WorkMailService.GetDefaultRetentionPolicy
		 * @return {GetDefaultRetentionPolicyResponse} Success
		 */
		GetDefaultRetentionPolicy(requestBody: GetDefaultRetentionPolicyRequest, headersHandler?: () => {[header: string]: string}): Promise<GetDefaultRetentionPolicyResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkMailService.GetDefaultRetentionPolicy', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Requests a user's mailbox details for a specified organization and user.
		 * Post /#X-Amz-Target=WorkMailService.GetMailboxDetails
		 * @return {GetMailboxDetailsResponse} Success
		 */
		GetMailboxDetails(requestBody: GetMailboxDetailsRequest, headersHandler?: () => {[header: string]: string}): Promise<GetMailboxDetailsResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkMailService.GetMailboxDetails', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Lists the access control rules for the specified organization.
		 * Post /#X-Amz-Target=WorkMailService.ListAccessControlRules
		 * @return {ListAccessControlRulesResponse} Success
		 */
		ListAccessControlRules(requestBody: ListAccessControlRulesRequest, headersHandler?: () => {[header: string]: string}): Promise<ListAccessControlRulesResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkMailService.ListAccessControlRules', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Creates a paginated call to list the aliases associated with a given entity.
		 * Post /#X-Amz-Target=WorkMailService.ListAliases
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAliasesResponse} Success
		 */
		ListAliases(MaxResults: string, NextToken: string, requestBody: ListAliasesRequest, headersHandler?: () => {[header: string]: string}): Promise<ListAliasesResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkMailService.ListAliases?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns an overview of the members of a group. Users and groups can be members of a group.
		 * Post /#X-Amz-Target=WorkMailService.ListGroupMembers
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListGroupMembersResponse} Success
		 */
		ListGroupMembers(MaxResults: string, NextToken: string, requestBody: ListGroupMembersRequest, headersHandler?: () => {[header: string]: string}): Promise<ListGroupMembersResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkMailService.ListGroupMembers?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns summaries of the organization's groups.
		 * Post /#X-Amz-Target=WorkMailService.ListGroups
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListGroupsResponse} Success
		 */
		ListGroups(MaxResults: string, NextToken: string, requestBody: ListGroupsRequest, headersHandler?: () => {[header: string]: string}): Promise<ListGroupsResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkMailService.ListGroups?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Lists the mailbox permissions associated with a user, group, or resource mailbox.
		 * Post /#X-Amz-Target=WorkMailService.ListMailboxPermissions
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListMailboxPermissionsResponse} Success
		 */
		ListMailboxPermissions(MaxResults: string, NextToken: string, requestBody: ListMailboxPermissionsRequest, headersHandler?: () => {[header: string]: string}): Promise<ListMailboxPermissionsResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkMailService.ListMailboxPermissions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns summaries of the customer's organizations.
		 * Post /#X-Amz-Target=WorkMailService.ListOrganizations
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListOrganizationsResponse} Success
		 */
		ListOrganizations(MaxResults: string, NextToken: string, requestBody: ListOrganizationsRequest, headersHandler?: () => {[header: string]: string}): Promise<ListOrganizationsResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkMailService.ListOrganizations?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Lists the delegates associated with a resource. Users and groups can be resource delegates and answer requests on behalf of the resource.
		 * Post /#X-Amz-Target=WorkMailService.ListResourceDelegates
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListResourceDelegatesResponse} Success
		 */
		ListResourceDelegates(MaxResults: string, NextToken: string, requestBody: ListResourceDelegatesRequest, headersHandler?: () => {[header: string]: string}): Promise<ListResourceDelegatesResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkMailService.ListResourceDelegates?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns summaries of the organization's resources.
		 * Post /#X-Amz-Target=WorkMailService.ListResources
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListResourcesResponse} Success
		 */
		ListResources(MaxResults: string, NextToken: string, requestBody: ListResourcesRequest, headersHandler?: () => {[header: string]: string}): Promise<ListResourcesResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkMailService.ListResources?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Lists the tags applied to an Amazon WorkMail organization resource.
		 * Post /#X-Amz-Target=WorkMailService.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest, headersHandler?: () => {[header: string]: string}): Promise<ListTagsForResourceResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkMailService.ListTagsForResource', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns summaries of the organization's users.
		 * Post /#X-Amz-Target=WorkMailService.ListUsers
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListUsersResponse} Success
		 */
		ListUsers(MaxResults: string, NextToken: string, requestBody: ListUsersRequest, headersHandler?: () => {[header: string]: string}): Promise<ListUsersResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkMailService.ListUsers?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Adds a new access control rule for the specified organization. The rule allows or denies access to the organization for the specified IPv4 addresses, access protocol actions, and user IDs. Adding a new rule with the same name as an existing rule replaces the older rule.
		 * Post /#X-Amz-Target=WorkMailService.PutAccessControlRule
		 * @return {PutAccessControlRuleResponse} Success
		 */
		PutAccessControlRule(requestBody: PutAccessControlRuleRequest, headersHandler?: () => {[header: string]: string}): Promise<PutAccessControlRuleResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkMailService.PutAccessControlRule', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Sets permissions for a user, group, or resource. This replaces any pre-existing permissions.
		 * Post /#X-Amz-Target=WorkMailService.PutMailboxPermissions
		 * @return {PutMailboxPermissionsResponse} Success
		 */
		PutMailboxPermissions(requestBody: PutMailboxPermissionsRequest, headersHandler?: () => {[header: string]: string}): Promise<PutMailboxPermissionsResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkMailService.PutMailboxPermissions', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Puts a retention policy to the specified organization.
		 * Post /#X-Amz-Target=WorkMailService.PutRetentionPolicy
		 * @return {PutRetentionPolicyResponse} Success
		 */
		PutRetentionPolicy(requestBody: PutRetentionPolicyRequest, headersHandler?: () => {[header: string]: string}): Promise<PutRetentionPolicyResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkMailService.PutRetentionPolicy', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Registers an existing and disabled user, group, or resource for Amazon WorkMail use by associating a mailbox and calendaring capabilities. It performs no change if the user, group, or resource is enabled and fails if the user, group, or resource is deleted. This operation results in the accumulation of costs. For more information, see <a href="https://aws.amazon.com/workmail/pricing">Pricing</a>. The equivalent console functionality for this operation is <i>Enable</i>. </p> <p>Users can either be created by calling the <a>CreateUser</a> API operation or they can be synchronized from your directory. For more information, see <a>DeregisterFromWorkMail</a>.</p>
		 * Post /#X-Amz-Target=WorkMailService.RegisterToWorkMail
		 * @return {RegisterToWorkMailResponse} Success
		 */
		RegisterToWorkMail(requestBody: RegisterToWorkMailRequest, headersHandler?: () => {[header: string]: string}): Promise<RegisterToWorkMailResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkMailService.RegisterToWorkMail', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Allows the administrator to reset the password for a user.
		 * Post /#X-Amz-Target=WorkMailService.ResetPassword
		 * @return {ResetPasswordResponse} Success
		 */
		ResetPassword(requestBody: ResetPasswordRequest, headersHandler?: () => {[header: string]: string}): Promise<ResetPasswordResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkMailService.ResetPassword', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Applies the specified tags to the specified Amazon WorkMail organization resource.
		 * Post /#X-Amz-Target=WorkMailService.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest, headersHandler?: () => {[header: string]: string}): Promise<TagResourceResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkMailService.TagResource', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Untags the specified tags from the specified Amazon WorkMail organization resource.
		 * Post /#X-Amz-Target=WorkMailService.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest, headersHandler?: () => {[header: string]: string}): Promise<UntagResourceResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkMailService.UntagResource', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Updates a user's current mailbox quota for a specified organization and user.
		 * Post /#X-Amz-Target=WorkMailService.UpdateMailboxQuota
		 * @return {UpdateMailboxQuotaResponse} Success
		 */
		UpdateMailboxQuota(requestBody: UpdateMailboxQuotaRequest, headersHandler?: () => {[header: string]: string}): Promise<UpdateMailboxQuotaResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkMailService.UpdateMailboxQuota', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Updates the primary email for a user, group, or resource. The current email is moved into the list of aliases (or swapped between an existing alias and the current primary email), and the email provided in the input is promoted as the primary.
		 * Post /#X-Amz-Target=WorkMailService.UpdatePrimaryEmailAddress
		 * @return {UpdatePrimaryEmailAddressResponse} Success
		 */
		UpdatePrimaryEmailAddress(requestBody: UpdatePrimaryEmailAddressRequest, headersHandler?: () => {[header: string]: string}): Promise<UpdatePrimaryEmailAddressResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkMailService.UpdatePrimaryEmailAddress', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Updates data for the resource. To have the latest information, it must be preceded by a <a>DescribeResource</a> call. The dataset in the request should be the one expected when performing another <code>DescribeResource</code> call.
		 * Post /#X-Amz-Target=WorkMailService.UpdateResource
		 * @return {UpdateResourceResponse} Success
		 */
		UpdateResource(requestBody: UpdateResourceRequest, headersHandler?: () => {[header: string]: string}): Promise<UpdateResourceResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkMailService.UpdateResource', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}
	}

}

