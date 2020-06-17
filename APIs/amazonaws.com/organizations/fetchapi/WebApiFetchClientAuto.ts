export namespace My_Demo_Client {
	export interface AcceptHandshakeResponse {

		/**<p>Contains information that must be exchanged to securely establish a relationship between two accounts (an <i>originator</i> and a <i>recipient</i>). For example, when a master account (the originator) invites another account (the recipient) to join its organization, the two accounts exchange information as a series of handshake requests and responses.</p> <p> <b>Note:</b> Handshakes that are CANCELED, ACCEPTED, or DECLINED show up in lists for only 30 days after entering that state After that they are deleted.</p> */
		Handshake?: Handshake;
	}

	export interface AcceptHandshakeRequest {
		HandshakeId: string;
	}

	export interface AttachPolicyRequest {
		PolicyId: string;
		TargetId: string;
	}

	export interface CancelHandshakeResponse {

		/**<p>Contains information that must be exchanged to securely establish a relationship between two accounts (an <i>originator</i> and a <i>recipient</i>). For example, when a master account (the originator) invites another account (the recipient) to join its organization, the two accounts exchange information as a series of handshake requests and responses.</p> <p> <b>Note:</b> Handshakes that are CANCELED, ACCEPTED, or DECLINED show up in lists for only 30 days after entering that state After that they are deleted.</p> */
		Handshake?: Handshake;
	}

	export interface CancelHandshakeRequest {
		HandshakeId: string;
	}

	export interface CreateAccountResponse {

		/**Contains the status about a <a>CreateAccount</a> or <a>CreateGovCloudAccount</a> request to create an AWS account or an AWS GovCloud (US) account in an organization. */
		CreateAccountStatus?: CreateAccountStatus;
	}

	export interface CreateAccountRequest {
		Email: string;
		AccountName: string;
		RoleName?: string;
		IamUserAccessToBilling?: CreateAccountRequestIamUserAccessToBilling;
	}

	export enum CreateAccountRequestIamUserAccessToBilling { ALLOW = 0, DENY = 1 }

	export interface CreateGovCloudAccountResponse {

		/**Contains the status about a <a>CreateAccount</a> or <a>CreateGovCloudAccount</a> request to create an AWS account or an AWS GovCloud (US) account in an organization. */
		CreateAccountStatus?: CreateAccountStatus;
	}

	export interface CreateGovCloudAccountRequest {
		Email: string;
		AccountName: string;
		RoleName?: string;
		IamUserAccessToBilling?: CreateGovCloudAccountRequestIamUserAccessToBilling;
	}

	export enum CreateGovCloudAccountRequestIamUserAccessToBilling { ALLOW = 0, DENY = 1 }

	export interface CreateOrganizationResponse {

		/**Contains details about an organization. An organization is a collection of accounts that are centrally managed together using consolidated billing, organized hierarchically with organizational units (OUs), and controlled with policies . */
		Organization?: Organization;
	}

	export interface CreateOrganizationRequest {
		FeatureSet?: CreateOrganizationRequestFeatureSet;
	}

	export enum CreateOrganizationRequestFeatureSet { ALL = 0, CONSOLIDATED_BILLING = 1 }

	export interface CreateOrganizationalUnitResponse {

		/**Contains details about an organizational unit (OU). An OU is a container of AWS accounts within a root of an organization. Policies that are attached to an OU apply to all accounts contained in that OU and in any child OUs. */
		OrganizationalUnit?: OrganizationalUnit;
	}

	export interface CreateOrganizationalUnitRequest {
		ParentId: string;
		Name: string;
	}

	export interface CreatePolicyResponse {

		/**Contains rules to be applied to the affected accounts. Policies can be attached directly to accounts, or to roots and OUs to affect all accounts in those hierarchies. */
		Policy?: Policy;
	}

	export interface CreatePolicyRequest {
		Content: string;
		Description: string;
		Name: string;
		Type: CreatePolicyRequestType;
	}

	export enum CreatePolicyRequestType { SERVICE_CONTROL_POLICY = 0, TAG_POLICY = 1 }

	export interface DeclineHandshakeResponse {

		/**<p>Contains information that must be exchanged to securely establish a relationship between two accounts (an <i>originator</i> and a <i>recipient</i>). For example, when a master account (the originator) invites another account (the recipient) to join its organization, the two accounts exchange information as a series of handshake requests and responses.</p> <p> <b>Note:</b> Handshakes that are CANCELED, ACCEPTED, or DECLINED show up in lists for only 30 days after entering that state After that they are deleted.</p> */
		Handshake?: Handshake;
	}

	export interface DeclineHandshakeRequest {
		HandshakeId: string;
	}

	export interface DeleteOrganizationalUnitRequest {
		OrganizationalUnitId: string;
	}

	export interface DeletePolicyRequest {
		PolicyId: string;
	}

	export interface DeregisterDelegatedAdministratorRequest {
		AccountId: string;
		ServicePrincipal: string;
	}

	export interface DescribeAccountResponse {

		/**Contains information about an AWS account that is a member of an organization. */
		Account?: Account;
	}

	export interface DescribeAccountRequest {
		AccountId: string;
	}

	export interface DescribeCreateAccountStatusResponse {

		/**Contains the status about a <a>CreateAccount</a> or <a>CreateGovCloudAccount</a> request to create an AWS account or an AWS GovCloud (US) account in an organization. */
		CreateAccountStatus?: CreateAccountStatus;
	}

	export interface DescribeCreateAccountStatusRequest {
		CreateAccountRequestId: string;
	}

	export interface DescribeEffectivePolicyResponse {

		/**Contains rules to be applied to the affected accounts. The effective policy is the aggregation of any policies the account inherits, plus any policy directly attached to the account. */
		EffectivePolicy?: EffectivePolicy;
	}

	export interface DescribeEffectivePolicyRequest {
		PolicyType: DescribeEffectivePolicyRequestPolicyType;
		TargetId?: string;
	}

	export enum DescribeEffectivePolicyRequestPolicyType { TAG_POLICY = 0 }

	export interface DescribeHandshakeResponse {

		/**<p>Contains information that must be exchanged to securely establish a relationship between two accounts (an <i>originator</i> and a <i>recipient</i>). For example, when a master account (the originator) invites another account (the recipient) to join its organization, the two accounts exchange information as a series of handshake requests and responses.</p> <p> <b>Note:</b> Handshakes that are CANCELED, ACCEPTED, or DECLINED show up in lists for only 30 days after entering that state After that they are deleted.</p> */
		Handshake?: Handshake;
	}

	export interface DescribeHandshakeRequest {
		HandshakeId: string;
	}

	export interface DescribeOrganizationResponse {

		/**Contains details about an organization. An organization is a collection of accounts that are centrally managed together using consolidated billing, organized hierarchically with organizational units (OUs), and controlled with policies . */
		Organization?: Organization;
	}

	export interface DescribeOrganizationalUnitResponse {

		/**Contains details about an organizational unit (OU). An OU is a container of AWS accounts within a root of an organization. Policies that are attached to an OU apply to all accounts contained in that OU and in any child OUs. */
		OrganizationalUnit?: OrganizationalUnit;
	}

	export interface DescribeOrganizationalUnitRequest {
		OrganizationalUnitId: string;
	}

	export interface DescribePolicyResponse {

		/**Contains rules to be applied to the affected accounts. Policies can be attached directly to accounts, or to roots and OUs to affect all accounts in those hierarchies. */
		Policy?: Policy;
	}

	export interface DescribePolicyRequest {
		PolicyId: string;
	}

	export interface DetachPolicyRequest {
		PolicyId: string;
		TargetId: string;
	}

	export interface DisableAWSServiceAccessRequest {
		ServicePrincipal: string;
	}

	export interface DisablePolicyTypeResponse {

		/**Contains details about a root. A root is a top-level parent node in the hierarchy of an organization that can contain organizational units (OUs) and accounts. Every root contains every AWS account in the organization. Each root enables the accounts to be organized in a different way and to have different policy types enabled for use in that root. */
		Root?: Root;
	}

	export interface DisablePolicyTypeRequest {
		RootId: string;
		PolicyType: DisablePolicyTypeRequestPolicyType;
	}

	export enum DisablePolicyTypeRequestPolicyType { SERVICE_CONTROL_POLICY = 0, TAG_POLICY = 1 }

	export interface EnableAWSServiceAccessRequest {
		ServicePrincipal: string;
	}

	export interface EnableAllFeaturesResponse {

		/**<p>Contains information that must be exchanged to securely establish a relationship between two accounts (an <i>originator</i> and a <i>recipient</i>). For example, when a master account (the originator) invites another account (the recipient) to join its organization, the two accounts exchange information as a series of handshake requests and responses.</p> <p> <b>Note:</b> Handshakes that are CANCELED, ACCEPTED, or DECLINED show up in lists for only 30 days after entering that state After that they are deleted.</p> */
		Handshake?: Handshake;
	}

	export interface EnablePolicyTypeResponse {

		/**Contains details about a root. A root is a top-level parent node in the hierarchy of an organization that can contain organizational units (OUs) and accounts. Every root contains every AWS account in the organization. Each root enables the accounts to be organized in a different way and to have different policy types enabled for use in that root. */
		Root?: Root;
	}

	export interface EnablePolicyTypeRequest {
		RootId: string;
		PolicyType: EnablePolicyTypeRequestPolicyType;
	}

	export enum EnablePolicyTypeRequestPolicyType { SERVICE_CONTROL_POLICY = 0, TAG_POLICY = 1 }

	export interface InviteAccountToOrganizationResponse {

		/**<p>Contains information that must be exchanged to securely establish a relationship between two accounts (an <i>originator</i> and a <i>recipient</i>). For example, when a master account (the originator) invites another account (the recipient) to join its organization, the two accounts exchange information as a series of handshake requests and responses.</p> <p> <b>Note:</b> Handshakes that are CANCELED, ACCEPTED, or DECLINED show up in lists for only 30 days after entering that state After that they are deleted.</p> */
		Handshake?: Handshake;
	}

	export interface InviteAccountToOrganizationRequest {

		/**Identifies a participant in a handshake. */
		Target: HandshakeParty;
		Notes?: string;
	}

	export interface ListAWSServiceAccessForOrganizationResponse {
		EnabledServicePrincipals?: Array<EnabledServicePrincipal>;
		NextToken?: string;
	}

	export interface ListAWSServiceAccessForOrganizationRequest {
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListAccountsResponse {
		Accounts?: Array<Account>;
		NextToken?: string;
	}

	export interface ListAccountsRequest {
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListAccountsForParentResponse {
		Accounts?: Array<Account>;
		NextToken?: string;
	}

	export interface ListAccountsForParentRequest {
		ParentId: string;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListChildrenResponse {
		Children?: Array<Child>;
		NextToken?: string;
	}

	export interface ListChildrenRequest {
		ParentId: string;
		ChildType: ListChildrenRequestChildType;
		NextToken?: string;
		MaxResults?: number;
	}

	export enum ListChildrenRequestChildType { ACCOUNT = 0, ORGANIZATIONAL_UNIT = 1 }

	export interface ListCreateAccountStatusResponse {
		CreateAccountStatuses?: Array<CreateAccountStatus>;
		NextToken?: string;
	}

	export interface ListCreateAccountStatusRequest {
		States?: Array<CreateAccountState>;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListDelegatedAdministratorsResponse {
		DelegatedAdministrators?: Array<DelegatedAdministrator>;
		NextToken?: string;
	}

	export interface ListDelegatedAdministratorsRequest {
		ServicePrincipal?: string;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListDelegatedServicesForAccountResponse {
		DelegatedServices?: Array<DelegatedService>;
		NextToken?: string;
	}

	export interface ListDelegatedServicesForAccountRequest {
		AccountId: string;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListHandshakesForAccountResponse {
		Handshakes?: Array<Handshake>;
		NextToken?: string;
	}

	export interface ListHandshakesForAccountRequest {

		/**Specifies the criteria that are used to select the handshakes for the operation. */
		Filter?: HandshakeFilter;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListHandshakesForOrganizationResponse {
		Handshakes?: Array<Handshake>;
		NextToken?: string;
	}

	export interface ListHandshakesForOrganizationRequest {

		/**Specifies the criteria that are used to select the handshakes for the operation. */
		Filter?: HandshakeFilter;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListOrganizationalUnitsForParentResponse {
		OrganizationalUnits?: Array<OrganizationalUnit>;
		NextToken?: string;
	}

	export interface ListOrganizationalUnitsForParentRequest {
		ParentId: string;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListParentsResponse {
		Parents?: Array<Parent>;
		NextToken?: string;
	}

	export interface ListParentsRequest {
		ChildId: string;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListPoliciesResponse {
		Policies?: Array<PolicySummary>;
		NextToken?: string;
	}

	export interface ListPoliciesRequest {
		Filter: ListPoliciesRequestFilter;
		NextToken?: string;
		MaxResults?: number;
	}

	export enum ListPoliciesRequestFilter { SERVICE_CONTROL_POLICY = 0, TAG_POLICY = 1 }

	export interface ListPoliciesForTargetResponse {
		Policies?: Array<PolicySummary>;
		NextToken?: string;
	}

	export interface ListPoliciesForTargetRequest {
		TargetId: string;
		Filter: ListPoliciesForTargetRequestFilter;
		NextToken?: string;
		MaxResults?: number;
	}

	export enum ListPoliciesForTargetRequestFilter { SERVICE_CONTROL_POLICY = 0, TAG_POLICY = 1 }

	export interface ListRootsResponse {
		Roots?: Array<Root>;
		NextToken?: string;
	}

	export interface ListRootsRequest {
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListTagsForResourceResponse {
		Tags?: Array<Tag>;
		NextToken?: string;
	}

	export interface ListTagsForResourceRequest {
		ResourceId: string;
		NextToken?: string;
	}

	export interface ListTargetsForPolicyResponse {
		Targets?: Array<PolicyTargetSummary>;
		NextToken?: string;
	}

	export interface ListTargetsForPolicyRequest {
		PolicyId: string;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface MoveAccountRequest {
		AccountId: string;
		SourceParentId: string;
		DestinationParentId: string;
	}

	export interface RegisterDelegatedAdministratorRequest {
		AccountId: string;
		ServicePrincipal: string;
	}

	export interface RemoveAccountFromOrganizationRequest {
		AccountId: string;
	}

	export interface TagResourceRequest {
		ResourceId: string;
		Tags: Array<Tag>;
	}

	export interface UntagResourceRequest {
		ResourceId: string;
		TagKeys: Array<TagKey>;
	}

	export interface UpdateOrganizationalUnitResponse {

		/**Contains details about an organizational unit (OU). An OU is a container of AWS accounts within a root of an organization. Policies that are attached to an OU apply to all accounts contained in that OU and in any child OUs. */
		OrganizationalUnit?: OrganizationalUnit;
	}

	export interface UpdateOrganizationalUnitRequest {
		OrganizationalUnitId: string;
		Name?: string;
	}

	export interface UpdatePolicyResponse {

		/**Contains rules to be applied to the affected accounts. Policies can be attached directly to accounts, or to roots and OUs to affect all accounts in those hierarchies. */
		Policy?: Policy;
	}

	export interface UpdatePolicyRequest {
		PolicyId: string;
		Name?: string;
		Description?: string;
		Content?: string;
	}


	/**<p>Contains information that must be exchanged to securely establish a relationship between two accounts (an <i>originator</i> and a <i>recipient</i>). For example, when a master account (the originator) invites another account (the recipient) to join its organization, the two accounts exchange information as a series of handshake requests and responses.</p> <p> <b>Note:</b> Handshakes that are CANCELED, ACCEPTED, or DECLINED show up in lists for only 30 days after entering that state After that they are deleted.</p> */
	export interface Handshake {
		Id?: string;
		Arn?: string;
		Parties?: Array<HandshakeParty>;
		State?: HandshakeState;
		RequestedTimestamp?: Date;
		ExpirationTimestamp?: Date;
		Action?: HandshakeAction;
		Resources?: Array<HandshakeResource>;
	}

	export enum HandshakeState { REQUESTED = 0, OPEN = 1, CANCELED = 2, ACCEPTED = 3, DECLINED = 4, EXPIRED = 5 }

	export enum HandshakeAction { INVITE = 0, ENABLE_ALL_FEATURES = 1, APPROVE_ALL_FEATURES = 2, ADD_ORGANIZATIONS_SERVICE_LINKED_ROLE = 3 }

	export enum AccountStatus { ACTIVE = 0, SUSPENDED = 1 }

	export enum AccountJoinedMethod { INVITED = 0, CREATED = 1 }


	/**Contains information about an AWS account that is a member of an organization. */
	export interface Account {
		Id?: string;
		Arn?: string;
		Email?: string;
		Name?: string;
		Status?: AccountStatus;
		JoinedMethod?: AccountJoinedMethod;
		JoinedTimestamp?: Date;
	}

	export enum AccountStatus { ACTIVE = 0, SUSPENDED = 1 }

	export enum AccountJoinedMethod { INVITED = 0, CREATED = 1 }

	export enum ActionType { INVITE = 0, ENABLE_ALL_FEATURES = 1, APPROVE_ALL_FEATURES = 2, ADD_ORGANIZATIONS_SERVICE_LINKED_ROLE = 3 }

	export enum ChildType { ACCOUNT = 0, ORGANIZATIONAL_UNIT = 1 }


	/**Contains a list of child entities, either OUs or accounts. */
	export interface Child {
		Id?: string;
		Type?: ChildType;
	}

	export enum ChildType { ACCOUNT = 0, ORGANIZATIONAL_UNIT = 1 }

	export enum CreateAccountFailureReason { ACCOUNT_LIMIT_EXCEEDED = 0, EMAIL_ALREADY_EXISTS = 1, INVALID_ADDRESS = 2, INVALID_EMAIL = 3, CONCURRENT_ACCOUNT_MODIFICATION = 4, INTERNAL_FAILURE = 5, GOVCLOUD_ACCOUNT_ALREADY_EXISTS = 6 }

	export enum IAMUserAccessToBilling { ALLOW = 0, DENY = 1 }


	/**Contains the status about a <a>CreateAccount</a> or <a>CreateGovCloudAccount</a> request to create an AWS account or an AWS GovCloud (US) account in an organization. */
	export interface CreateAccountStatus {
		Id?: string;
		AccountName?: string;
		State?: CreateAccountStatusState;
		RequestedTimestamp?: Date;
		CompletedTimestamp?: Date;
		AccountId?: string;
		GovCloudAccountId?: string;
		FailureReason?: CreateAccountStatusFailureReason;
	}

	export enum CreateAccountStatusState { IN_PROGRESS = 0, SUCCEEDED = 1, FAILED = 2 }

	export enum CreateAccountStatusFailureReason { ACCOUNT_LIMIT_EXCEEDED = 0, EMAIL_ALREADY_EXISTS = 1, INVALID_ADDRESS = 2, INVALID_EMAIL = 3, CONCURRENT_ACCOUNT_MODIFICATION = 4, INTERNAL_FAILURE = 5, GOVCLOUD_ACCOUNT_ALREADY_EXISTS = 6 }

	export enum CreateAccountState { IN_PROGRESS = 0, SUCCEEDED = 1, FAILED = 2 }

	export enum OrganizationFeatureSet { ALL = 0, CONSOLIDATED_BILLING = 1 }


	/**Contains details about an organization. An organization is a collection of accounts that are centrally managed together using consolidated billing, organized hierarchically with organizational units (OUs), and controlled with policies . */
	export interface Organization {
		Id?: string;
		Arn?: string;
		FeatureSet?: OrganizationFeatureSet;
		MasterAccountArn?: string;
		MasterAccountId?: string;
		MasterAccountEmail?: string;
		AvailablePolicyTypes?: Array<PolicyTypeSummary>;
	}

	export enum OrganizationFeatureSet { ALL = 0, CONSOLIDATED_BILLING = 1 }


	/**Contains details about an organizational unit (OU). An OU is a container of AWS accounts within a root of an organization. Policies that are attached to an OU apply to all accounts contained in that OU and in any child OUs. */
	export interface OrganizationalUnit {
		Id?: string;
		Arn?: string;
		Name?: string;
	}

	export enum PolicyType { SERVICE_CONTROL_POLICY = 0, TAG_POLICY = 1 }


	/**Contains rules to be applied to the affected accounts. Policies can be attached directly to accounts, or to roots and OUs to affect all accounts in those hierarchies. */
	export interface Policy {

		/**Contains information about a policy, but does not include the content. To see the content of a policy, see <a>DescribePolicy</a>. */
		PolicySummary?: PolicySummary;
		Content?: string;
	}


	/**Contains information about the delegated administrator. */
	export interface DelegatedAdministrator {
		Id?: string;
		Arn?: string;
		Email?: string;
		Name?: string;
		Status?: DelegatedAdministratorStatus;
		JoinedMethod?: DelegatedAdministratorJoinedMethod;
		JoinedTimestamp?: Date;
		DelegationEnabledDate?: Date;
	}

	export enum DelegatedAdministratorStatus { ACTIVE = 0, SUSPENDED = 1 }

	export enum DelegatedAdministratorJoinedMethod { INVITED = 0, CREATED = 1 }


	/**Contains information about the AWS service for which the account is a delegated administrator. */
	export interface DelegatedService {
		ServicePrincipal?: string;
		DelegationEnabledDate?: Date;
	}

	export enum EffectivePolicyType { TAG_POLICY = 0 }


	/**Contains rules to be applied to the affected accounts. The effective policy is the aggregation of any policies the account inherits, plus any policy directly attached to the account. */
	export interface EffectivePolicy {
		PolicyContent?: string;
		LastUpdatedTimestamp?: Date;
		TargetId?: string;
		PolicyType?: EffectivePolicyPolicyType;
	}

	export enum EffectivePolicyPolicyType { TAG_POLICY = 0 }


	/**Contains details about a root. A root is a top-level parent node in the hierarchy of an organization that can contain organizational units (OUs) and accounts. Every root contains every AWS account in the organization. Each root enables the accounts to be organized in a different way and to have different policy types enabled for use in that root. */
	export interface Root {
		Id?: string;
		Arn?: string;
		Name?: string;
		PolicyTypes?: Array<PolicyTypeSummary>;
	}


	/**A structure that contains details of a service principal that represents an AWS service that is enabled to integrate with AWS Organizations. */
	export interface EnabledServicePrincipal {
		ServicePrincipal?: string;
		DateEnabled?: Date;
	}

	export enum HandshakeState { REQUESTED = 0, OPEN = 1, CANCELED = 2, ACCEPTED = 3, DECLINED = 4, EXPIRED = 5 }


	/**Specifies the criteria that are used to select the handshakes for the operation. */
	export interface HandshakeFilter {
		ActionType?: HandshakeFilterActionType;
		ParentHandshakeId?: string;
	}

	export enum HandshakeFilterActionType { INVITE = 0, ENABLE_ALL_FEATURES = 1, APPROVE_ALL_FEATURES = 2, ADD_ORGANIZATIONS_SERVICE_LINKED_ROLE = 3 }


	/**Identifies a participant in a handshake. */
	export interface HandshakeParty {
		Id: string;
		Type: HandshakePartyType;
	}

	export enum HandshakePartyType { ACCOUNT = 0, ORGANIZATION = 1, EMAIL = 2 }

	export enum HandshakePartyType { ACCOUNT = 0, ORGANIZATION = 1, EMAIL = 2 }

	export enum HandshakeResourceType { ACCOUNT = 0, ORGANIZATION = 1, ORGANIZATION_FEATURE_SET = 2, EMAIL = 3, MASTER_EMAIL = 4, MASTER_NAME = 5, NOTES = 6, PARENT_HANDSHAKE = 7 }


	/**Contains additional data that is needed to process a handshake. */
	export interface HandshakeResource {
		Value?: string;
		Type?: HandshakeResourceType;
		Resources?: Array<HandshakeResource>;
	}

	export enum HandshakeResourceType { ACCOUNT = 0, ORGANIZATION = 1, ORGANIZATION_FEATURE_SET = 2, EMAIL = 3, MASTER_EMAIL = 4, MASTER_NAME = 5, NOTES = 6, PARENT_HANDSHAKE = 7 }

	export enum ParentType { ROOT = 0, ORGANIZATIONAL_UNIT = 1 }


	/**Contains information about either a root or an organizational unit (OU) that can contain OUs or accounts in an organization. */
	export interface Parent {
		Id?: string;
		Type?: ParentType;
	}

	export enum ParentType { ROOT = 0, ORGANIZATIONAL_UNIT = 1 }


	/**Contains information about a policy, but does not include the content. To see the content of a policy, see <a>DescribePolicy</a>. */
	export interface PolicySummary {
		Id?: string;
		Arn?: string;
		Name?: string;
		Description?: string;
		Type?: PolicySummaryType;
		AwsManaged?: boolean;
	}

	export enum PolicySummaryType { SERVICE_CONTROL_POLICY = 0, TAG_POLICY = 1 }

	export enum TargetType { ACCOUNT = 0, ORGANIZATIONAL_UNIT = 1, ROOT = 2 }


	/**Contains information about a root, OU, or account that a policy is attached to. */
	export interface PolicyTargetSummary {
		TargetId?: string;
		Arn?: string;
		Name?: string;
		Type?: PolicyTargetSummaryType;
	}

	export enum PolicyTargetSummaryType { ACCOUNT = 0, ORGANIZATIONAL_UNIT = 1, ROOT = 2 }

	export enum PolicyTypeStatus { ENABLED = 0, PENDING_ENABLE = 1, PENDING_DISABLE = 2 }


	/**Contains information about a policy type and its status in the associated root. */
	export interface PolicyTypeSummary {
		Type?: PolicyTypeSummaryType;
		Status?: PolicyTypeSummaryStatus;
	}

	export enum PolicyTypeSummaryType { SERVICE_CONTROL_POLICY = 0, TAG_POLICY = 1 }

	export enum PolicyTypeSummaryStatus { ENABLED = 0, PENDING_ENABLE = 1, PENDING_DISABLE = 2 }


	/**A custom key-value pair associated with a resource such as an account within your organization.  */
	export interface Tag {
		Key: string;
		Value: string;
	}

	export class DemoClient {
		constructor(private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/') {
		}

		/**
		 * <p>Sends a response to the originator of a handshake agreeing to the action proposed by the handshake request. </p> <p>This operation can be called only by the following principals when they also have the relevant IAM permissions:</p> <ul> <li> <p> <b>Invitation to join</b> or <b>Approve all features request</b> handshakes: only a principal from the member account. </p> <p>The user who calls the API for an invitation to join must have the <code>organizations:AcceptHandshake</code> permission. If you enabled all features in the organization, the user must also have the <code>iam:CreateServiceLinkedRole</code> permission so that AWS Organizations can create the required service-linked role named <code>AWSServiceRoleForOrganizations</code>. For more information, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_integration_services.html#orgs_integration_service-linked-roles">AWS Organizations and Service-Linked Roles</a> in the <i>AWS Organizations User Guide</i>.</p> </li> <li> <p> <b>Enable all features final confirmation</b> handshake: only a principal from the master account.</p> <p>For more information about invitations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_invites.html">Inviting an AWS Account to Join Your Organization</a> in the <i>AWS Organizations User Guide.</i> For more information about requests to enable all features in the organization, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">Enabling All Features in Your Organization</a> in the <i>AWS Organizations User Guide.</i> </p> </li> </ul> <p>After you accept a handshake, it continues to appear in the results of relevant APIs for only 30 days. After that, it's deleted.</p>
		 * Post /#X-Amz-Target=AWSOrganizationsV20161128.AcceptHandshake
		 * @return {AcceptHandshakeResponse} Success
		 */
		AcceptHandshake(requestBody: AcceptHandshakeRequest, headersHandler?: () => {[header: string]: string}): Promise<AcceptHandshakeResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSOrganizationsV20161128.AcceptHandshake', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Attaches a policy to a root, an organizational unit (OU), or an individual account. How the policy affects accounts depends on the type of policy:</p> <ul> <li> <p> <b>Service control policy (SCP)</b> - An SCP specifies what permissions can be delegated to users in affected member accounts. The scope of influence for a policy depends on what you attach the policy to:</p> <ul> <li> <p>If you attach an SCP to a root, it affects all accounts in the organization.</p> </li> <li> <p>If you attach an SCP to an OU, it affects all accounts in that OU and in any child OUs.</p> </li> <li> <p>If you attach the policy directly to an account, it affects only that account.</p> </li> </ul> <p>SCPs are JSON policies that specify the maximum permissions for an organization or organizational unit (OU). You can attach one SCP to a higher level root or OU, and a different SCP to a child OU or to an account. The child policy can further restrict only the permissions that pass through the parent filter and are available to the child. An SCP that is attached to a child can't grant a permission that the parent hasn't already granted. For example, imagine that the parent SCP allows permissions A, B, C, D, and E. The child SCP allows C, D, E, F, and G. The result is that the accounts affected by the child SCP are allowed to use only C, D, and E. They can't use A or B because the child OU filtered them out. They also can't use F and G because the parent OU filtered them out. They can't be granted back by the child SCP; child SCPs can only filter the permissions they receive from the parent SCP.</p> <p>AWS Organizations attaches a default SCP named <code>"FullAWSAccess</code> to every root, OU, and account. This default SCP allows all services and actions, enabling any new child OU or account to inherit the permissions of the parent root or OU. If you detach the default policy, you must replace it with a policy that specifies the permissions that you want to allow in that OU or account.</p> <p>For more information about how AWS Organizations policies permissions work, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scp.html">Using Service Control Policies</a> in the <i>AWS Organizations User Guide.</i> </p> </li> </ul> <p>This operation can be called only from the organization's master account.</p>
		 * Post /#X-Amz-Target=AWSOrganizationsV20161128.AttachPolicy
		 * @return {void} Success
		 */
		AttachPolicy(requestBody: AttachPolicyRequest, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSOrganizationsV20161128.AttachPolicy', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * <p>Cancels a handshake. Canceling a handshake sets the handshake state to <code>CANCELED</code>. </p> <p>This operation can be called only from the account that originated the handshake. The recipient of the handshake can't cancel it, but can use <a>DeclineHandshake</a> instead. After a handshake is canceled, the recipient can no longer respond to that handshake.</p> <p>After you cancel a handshake, it continues to appear in the results of relevant APIs for only 30 days. After that, it's deleted.</p>
		 * Post /#X-Amz-Target=AWSOrganizationsV20161128.CancelHandshake
		 * @return {CancelHandshakeResponse} Success
		 */
		CancelHandshake(requestBody: CancelHandshakeRequest, headersHandler?: () => {[header: string]: string}): Promise<CancelHandshakeResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSOrganizationsV20161128.CancelHandshake', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Creates an AWS account that is automatically a member of the organization whose credentials made the request. This is an asynchronous request that AWS performs in the background. Because <code>CreateAccount</code> operates asynchronously, it can return a successful completion message even though account initialization might still be in progress. You might need to wait a few minutes before you can successfully access the account. To check the status of the request, do one of the following:</p> <ul> <li> <p>Use the <code>OperationId</code> response element from this operation to provide as a parameter to the <a>DescribeCreateAccountStatus</a> operation.</p> </li> <li> <p>Check the AWS CloudTrail log for the <code>CreateAccountResult</code> event. For information on using AWS CloudTrail with AWS Organizations, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_monitoring.html">Monitoring the Activity in Your Organization</a> in the <i>AWS Organizations User Guide.</i> </p> </li> </ul> <p/> <p>The user who calls the API to create an account must have the <code>organizations:CreateAccount</code> permission. If you enabled all features in the organization, AWS Organizations creates the required service-linked role named <code>AWSServiceRoleForOrganizations</code>. For more information, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html#orgs_integrate_services-using_slrs">AWS Organizations and Service-Linked Roles</a> in the <i>AWS Organizations User Guide</i>.</p> <p>AWS Organizations preconfigures the new member account with a role (named <code>OrganizationAccountAccessRole</code> by default) that grants users in the master account administrator permissions in the new member account. Principals in the master account can assume the role. AWS Organizations clones the company name and address information for the new account from the organization's master account.</p> <p>This operation can be called only from the organization's master account.</p> <p>For more information about creating accounts, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_create.html">Creating an AWS Account in Your Organization</a> in the <i>AWS Organizations User Guide.</i> </p> <important> <ul> <li> <p>When you create an account in an organization using the AWS Organizations console, API, or CLI commands, the information required for the account to operate as a standalone account, such as a payment method and signing the end user license agreement (EULA) is <i>not</i> automatically collected. If you must remove an account from your organization later, you can do so only after you provide the missing information. Follow the steps at <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html#leave-without-all-info"> To leave an organization as a member account</a> in the <i>AWS Organizations User Guide</i>.</p> </li> <li> <p>If you get an exception that indicates that you exceeded your account limits for the organization, contact <a href="https://console.aws.amazon.com/support/home#/">AWS Support</a>.</p> </li> <li> <p>If you get an exception that indicates that the operation failed because your organization is still initializing, wait one hour and then try again. If the error persists, contact <a href="https://console.aws.amazon.com/support/home#/">AWS Support</a>.</p> </li> <li> <p>Using <code>CreateAccount</code> to create multiple temporary accounts isn't recommended. You can only close an account from the Billing and Cost Management Console, and you must be signed in as the root user. For information on the requirements and process for closing an account, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_close.html">Closing an AWS Account</a> in the <i>AWS Organizations User Guide</i>.</p> </li> </ul> </important> <note> <p>When you create a member account with this operation, you can choose whether to create the account with the <b>IAM User and Role Access to Billing Information</b> switch enabled. If you enable it, IAM users and roles that have appropriate permissions can view billing information for the account. If you disable it, only the account root user can access billing information. For information about how to disable this switch for an account, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/grantaccess.html">Granting Access to Your Billing Information and Tools</a>.</p> </note>
		 * Post /#X-Amz-Target=AWSOrganizationsV20161128.CreateAccount
		 * @return {CreateAccountResponse} Success
		 */
		CreateAccount(requestBody: CreateAccountRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateAccountResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSOrganizationsV20161128.CreateAccount', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>This action is available if all of the following are true:</p> <ul> <li> <p>You're authorized to create accounts in the AWS GovCloud (US) Region. For more information on the AWS GovCloud (US) Region, see the <a href="http://docs.aws.amazon.com/govcloud-us/latest/UserGuide/welcome.html"> <i>AWS GovCloud User Guide</i>.</a> </p> </li> <li> <p>You already have an account in the AWS GovCloud (US) Region that is associated with your master account in the commercial Region. </p> </li> <li> <p>You call this action from the master account of your organization in the commercial Region.</p> </li> <li> <p>You have the <code>organizations:CreateGovCloudAccount</code> permission. AWS Organizations creates the required service-linked role named <code>AWSServiceRoleForOrganizations</code>. For more information, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html#orgs_integrate_services-using_slrs">AWS Organizations and Service-Linked Roles</a> in the <i>AWS Organizations User Guide.</i> </p> </li> </ul> <p>AWS automatically enables AWS CloudTrail for AWS GovCloud (US) accounts, but you should also do the following:</p> <ul> <li> <p>Verify that AWS CloudTrail is enabled to store logs.</p> </li> <li> <p>Create an S3 bucket for AWS CloudTrail log storage.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/govcloud-us/latest/UserGuide/verifying-cloudtrail.html">Verifying AWS CloudTrail Is Enabled</a> in the <i>AWS GovCloud User Guide</i>. </p> </li> </ul> <p>You call this action from the master account of your organization in the commercial Region to create a standalone AWS account in the AWS GovCloud (US) Region. After the account is created, the master account of an organization in the AWS GovCloud (US) Region can invite it to that organization. For more information on inviting standalone accounts in the AWS GovCloud (US) to join an organization, see <a href="http://docs.aws.amazon.com/govcloud-us/latest/UserGuide/govcloud-organizations.html">AWS Organizations</a> in the <i>AWS GovCloud User Guide.</i> </p> <p>Calling <code>CreateGovCloudAccount</code> is an asynchronous request that AWS performs in the background. Because <code>CreateGovCloudAccount</code> operates asynchronously, it can return a successful completion message even though account initialization might still be in progress. You might need to wait a few minutes before you can successfully access the account. To check the status of the request, do one of the following:</p> <ul> <li> <p>Use the <code>OperationId</code> response element from this operation to provide as a parameter to the <a>DescribeCreateAccountStatus</a> operation.</p> </li> <li> <p>Check the AWS CloudTrail log for the <code>CreateAccountResult</code> event. For information on using AWS CloudTrail with Organizations, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_monitoring.html">Monitoring the Activity in Your Organization</a> in the <i>AWS Organizations User Guide.</i> </p> </li> </ul> <p/> <p>When you call the <code>CreateGovCloudAccount</code> action, you create two accounts: a standalone account in the AWS GovCloud (US) Region and an associated account in the commercial Region for billing and support purposes. The account in the commercial Region is automatically a member of the organization whose credentials made the request. Both accounts are associated with the same email address.</p> <p>A role is created in the new account in the commercial Region that allows the master account in the organization in the commercial Region to assume it. An AWS GovCloud (US) account is then created and associated with the commercial account that you just created. A role is created in the new AWS GovCloud (US) account that can be assumed by the AWS GovCloud (US) account that is associated with the master account of the commercial organization. For more information and to view a diagram that explains how account access works, see <a href="http://docs.aws.amazon.com/govcloud-us/latest/UserGuide/govcloud-organizations.html">AWS Organizations</a> in the <i>AWS GovCloud User Guide.</i> </p> <p>For more information about creating accounts, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_create.html">Creating an AWS Account in Your Organization</a> in the <i>AWS Organizations User Guide.</i> </p> <important> <ul> <li> <p>When you create an account in an organization using the AWS Organizations console, API, or CLI commands, the information required for the account to operate as a standalone account, such as a payment method and signing the end user license agreement (EULA) is <i>not</i> automatically collected. If you must remove an account from your organization later, you can do so only after you provide the missing information. Follow the steps at <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html#leave-without-all-info"> To leave an organization as a member account</a> in the <i>AWS Organizations User Guide.</i> </p> </li> <li> <p>If you get an exception that indicates that you exceeded your account limits for the organization, contact <a href="https://console.aws.amazon.com/support/home#/">AWS Support</a>.</p> </li> <li> <p>If you get an exception that indicates that the operation failed because your organization is still initializing, wait one hour and then try again. If the error persists, contact <a href="https://console.aws.amazon.com/support/home#/">AWS Support</a>.</p> </li> <li> <p>Using <code>CreateGovCloudAccount</code> to create multiple temporary accounts isn't recommended. You can only close an account from the AWS Billing and Cost Management console, and you must be signed in as the root user. For information on the requirements and process for closing an account, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_close.html">Closing an AWS Account</a> in the <i>AWS Organizations User Guide</i>.</p> </li> </ul> </important> <note> <p>When you create a member account with this operation, you can choose whether to create the account with the <b>IAM User and Role Access to Billing Information</b> switch enabled. If you enable it, IAM users and roles that have appropriate permissions can view billing information for the account. If you disable it, only the account root user can access billing information. For information about how to disable this switch for an account, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/grantaccess.html">Granting Access to Your Billing Information and Tools</a>.</p> </note>
		 * Post /#X-Amz-Target=AWSOrganizationsV20161128.CreateGovCloudAccount
		 * @return {CreateGovCloudAccountResponse} Success
		 */
		CreateGovCloudAccount(requestBody: CreateGovCloudAccountRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateGovCloudAccountResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSOrganizationsV20161128.CreateGovCloudAccount', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Creates an AWS organization. The account whose user is calling the <code>CreateOrganization</code> operation automatically becomes the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/orgs_getting-started_concepts.html#account">master account</a> of the new organization.</p> <p>This operation must be called using credentials from the account that is to become the new organization's master account. The principal must also have the relevant IAM permissions.</p> <p>By default (or if you set the <code>FeatureSet</code> parameter to <code>ALL</code>), the new organization is created with all features enabled and service control policies automatically enabled in the root. If you instead choose to create the organization supporting only the consolidated billing features by setting the <code>FeatureSet</code> parameter to <code>CONSOLIDATED_BILLING"</code>, no policy types are enabled by default, and you can't use organization policies</p>
		 * Post /#X-Amz-Target=AWSOrganizationsV20161128.CreateOrganization
		 * @return {CreateOrganizationResponse} Success
		 */
		CreateOrganization(requestBody: CreateOrganizationRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateOrganizationResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSOrganizationsV20161128.CreateOrganization', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Creates an organizational unit (OU) within a root or parent OU. An OU is a container for accounts that enables you to organize your accounts to apply policies according to your business requirements. The number of levels deep that you can nest OUs is dependent upon the policy types enabled for that root. For service control policies, the limit is five. </p> <p>For more information about OUs, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_ous.html">Managing Organizational Units</a> in the <i>AWS Organizations User Guide.</i> </p> <p>This operation can be called only from the organization's master account.</p>
		 * Post /#X-Amz-Target=AWSOrganizationsV20161128.CreateOrganizationalUnit
		 * @return {CreateOrganizationalUnitResponse} Success
		 */
		CreateOrganizationalUnit(requestBody: CreateOrganizationalUnitRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateOrganizationalUnitResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSOrganizationsV20161128.CreateOrganizationalUnit', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Creates a policy of a specified type that you can attach to a root, an organizational unit (OU), or an individual AWS account.</p> <p>For more information about policies and their use, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies.html">Managing Organization Policies</a>.</p> <p>This operation can be called only from the organization's master account.</p>
		 * Post /#X-Amz-Target=AWSOrganizationsV20161128.CreatePolicy
		 * @return {CreatePolicyResponse} Success
		 */
		CreatePolicy(requestBody: CreatePolicyRequest, headersHandler?: () => {[header: string]: string}): Promise<CreatePolicyResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSOrganizationsV20161128.CreatePolicy', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Declines a handshake request. This sets the handshake state to <code>DECLINED</code> and effectively deactivates the request.</p> <p>This operation can be called only from the account that received the handshake. The originator of the handshake can use <a>CancelHandshake</a> instead. The originator can't reactivate a declined request, but can reinitiate the process with a new handshake request.</p> <p>After you decline a handshake, it continues to appear in the results of relevant APIs for only 30 days. After that, it's deleted.</p>
		 * Post /#X-Amz-Target=AWSOrganizationsV20161128.DeclineHandshake
		 * @return {DeclineHandshakeResponse} Success
		 */
		DeclineHandshake(requestBody: DeclineHandshakeRequest, headersHandler?: () => {[header: string]: string}): Promise<DeclineHandshakeResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSOrganizationsV20161128.DeclineHandshake', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Deletes the organization. You can delete an organization only by using credentials from the master account. The organization must be empty of member accounts.
		 * Post /#X-Amz-Target=AWSOrganizationsV20161128.DeleteOrganization
		 * @return {void} Success
		 */
		DeleteOrganization(headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSOrganizationsV20161128.DeleteOrganization', { method: 'post', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Deletes an organizational unit (OU) from a root or another OU. You must first remove all accounts and child OUs from the OU that you want to delete.</p> <p>This operation can be called only from the organization's master account.</p>
		 * Post /#X-Amz-Target=AWSOrganizationsV20161128.DeleteOrganizationalUnit
		 * @return {void} Success
		 */
		DeleteOrganizationalUnit(requestBody: DeleteOrganizationalUnitRequest, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSOrganizationsV20161128.DeleteOrganizationalUnit', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * <p>Deletes the specified policy from your organization. Before you perform this operation, you must first detach the policy from all organizational units (OUs), roots, and accounts.</p> <p>This operation can be called only from the organization's master account.</p>
		 * Post /#X-Amz-Target=AWSOrganizationsV20161128.DeletePolicy
		 * @return {void} Success
		 */
		DeletePolicy(requestBody: DeletePolicyRequest, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSOrganizationsV20161128.DeletePolicy', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * <p>Removes the specified member AWS account as a delegated administrator for the specified AWS service.</p> <p>You can run this action only for AWS services that support this feature. For a current list of services that support it, see the column <i>Supports Delegated Administrator</i> in the table at <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrated-services-list.html">AWS Services that you can use with AWS Organizations</a> in the <i>AWS Organizations User Guide.</i> </p> <p>This operation can be called only from the organization's master account.</p>
		 * Post /#X-Amz-Target=AWSOrganizationsV20161128.DeregisterDelegatedAdministrator
		 * @return {void} Success
		 */
		DeregisterDelegatedAdministrator(requestBody: DeregisterDelegatedAdministratorRequest, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSOrganizationsV20161128.DeregisterDelegatedAdministrator', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * <p>Retrieves AWS Organizations-related information about the specified account.</p> <p>This operation can be called only from the organization's master account or by a member account that is a delegated administrator for an AWS service.</p>
		 * Post /#X-Amz-Target=AWSOrganizationsV20161128.DescribeAccount
		 * @return {DescribeAccountResponse} Success
		 */
		DescribeAccount(requestBody: DescribeAccountRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeAccountResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSOrganizationsV20161128.DescribeAccount', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Retrieves the current status of an asynchronous request to create an account.</p> <p>This operation can be called only from the organization's master account or by a member account that is a delegated administrator for an AWS service.</p>
		 * Post /#X-Amz-Target=AWSOrganizationsV20161128.DescribeCreateAccountStatus
		 * @return {DescribeCreateAccountStatusResponse} Success
		 */
		DescribeCreateAccountStatus(requestBody: DescribeCreateAccountStatusRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeCreateAccountStatusResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSOrganizationsV20161128.DescribeCreateAccountStatus', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Returns the contents of the effective tag policy for the account. The effective tag policy is the aggregation of any tag policies the account inherits, plus any policy directly that is attached to the account. </p> <p>This action returns information on tag policies only.</p> <p>For more information on policy inheritance, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies-inheritance.html">How Policy Inheritance Works</a> in the <i>AWS Organizations User Guide</i>.</p> <p>This operation can be called only from the organization's master account or by a member account that is a delegated administrator for an AWS service.</p>
		 * Post /#X-Amz-Target=AWSOrganizationsV20161128.DescribeEffectivePolicy
		 * @return {DescribeEffectivePolicyResponse} Success
		 */
		DescribeEffectivePolicy(requestBody: DescribeEffectivePolicyRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeEffectivePolicyResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSOrganizationsV20161128.DescribeEffectivePolicy', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Retrieves information about a previously requested handshake. The handshake ID comes from the response to the original <a>InviteAccountToOrganization</a> operation that generated the handshake.</p> <p>You can access handshakes that are <code>ACCEPTED</code>, <code>DECLINED</code>, or <code>CANCELED</code> for only 30 days after they change to that state. They're then deleted and no longer accessible.</p> <p>This operation can be called from any account in the organization.</p>
		 * Post /#X-Amz-Target=AWSOrganizationsV20161128.DescribeHandshake
		 * @return {DescribeHandshakeResponse} Success
		 */
		DescribeHandshake(requestBody: DescribeHandshakeRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeHandshakeResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSOrganizationsV20161128.DescribeHandshake', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Retrieves information about the organization that the user's account belongs to.</p> <p>This operation can be called from any account in the organization.</p> <note> <p>Even if a policy type is shown as available in the organization, you can disable it separately at the root level with <a>DisablePolicyType</a>. Use <a>ListRoots</a> to see the status of policy types for a specified root.</p> </note>
		 * Post /#X-Amz-Target=AWSOrganizationsV20161128.DescribeOrganization
		 * @return {DescribeOrganizationResponse} Success
		 */
		DescribeOrganization(headersHandler?: () => {[header: string]: string}): Promise<DescribeOrganizationResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSOrganizationsV20161128.DescribeOrganization', { method: 'post', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * <p>Retrieves information about an organizational unit (OU).</p> <p>This operation can be called only from the organization's master account or by a member account that is a delegated administrator for an AWS service.</p>
		 * Post /#X-Amz-Target=AWSOrganizationsV20161128.DescribeOrganizationalUnit
		 * @return {DescribeOrganizationalUnitResponse} Success
		 */
		DescribeOrganizationalUnit(requestBody: DescribeOrganizationalUnitRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeOrganizationalUnitResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSOrganizationsV20161128.DescribeOrganizationalUnit', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Retrieves information about a policy.</p> <p>This operation can be called only from the organization's master account or by a member account that is a delegated administrator for an AWS service.</p>
		 * Post /#X-Amz-Target=AWSOrganizationsV20161128.DescribePolicy
		 * @return {DescribePolicyResponse} Success
		 */
		DescribePolicy(requestBody: DescribePolicyRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribePolicyResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSOrganizationsV20161128.DescribePolicy', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Detaches a policy from a target root, organizational unit (OU), or account. If the policy being detached is a service control policy (SCP), the changes to permissions for IAM users and roles in affected accounts are immediate.</p> <p> <b>Note:</b> Every root, OU, and account must have at least one SCP attached. If you want to replace the default <code>FullAWSAccess</code> policy with one that limits the permissions that can be delegated, you must attach the replacement policy before you can remove the default one. This is the authorization strategy of an "<a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_about-scps.html#orgs_policies_whitelist">allow list</a>". If you instead attach a second SCP and leave the <code>FullAWSAccess</code> SCP still attached, and specify <code>"Effect": "Deny"</code> in the second SCP to override the <code>"Effect": "Allow"</code> in the <code>FullAWSAccess</code> policy (or any other attached SCP), you're using the authorization strategy of a "<a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_about-scps.html#orgs_policies_blacklist">deny list</a>".</p> <p>This operation can be called only from the organization's master account.</p>
		 * Post /#X-Amz-Target=AWSOrganizationsV20161128.DetachPolicy
		 * @return {void} Success
		 */
		DetachPolicy(requestBody: DetachPolicyRequest, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSOrganizationsV20161128.DetachPolicy', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * <p>Disables the integration of an AWS service (the service that is specified by <code>ServicePrincipal</code>) with AWS Organizations. When you disable integration, the specified service no longer can create a <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/using-service-linked-roles.html">service-linked role</a> in <i>new</i> accounts in your organization. This means the service can't perform operations on your behalf on any new accounts in your organization. The service can still perform operations in older accounts until the service completes its clean-up from AWS Organizations.</p> <p/> <important> <p>We recommend that you disable integration between AWS Organizations and the specified AWS service by using the console or commands that are provided by the specified service. Doing so ensures that the other service is aware that it can clean up any resources that are required only for the integration. How the service cleans up its resources in the organization's accounts depends on that service. For more information, see the documentation for the other AWS service.</p> </important> <p>After you perform the <code>DisableAWSServiceAccess</code> operation, the specified service can no longer perform operations in your organization's accounts unless the operations are explicitly permitted by the IAM policies that are attached to your roles.</p> <p>For more information about integrating other services with AWS Organizations, including the list of services that work with Organizations, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html">Integrating AWS Organizations with Other AWS Services</a> in the <i>AWS Organizations User Guide.</i> </p> <p>This operation can be called only from the organization's master account.</p>
		 * Post /#X-Amz-Target=AWSOrganizationsV20161128.DisableAWSServiceAccess
		 * @return {void} Success
		 */
		DisableAWSServiceAccess(requestBody: DisableAWSServiceAccessRequest, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSOrganizationsV20161128.DisableAWSServiceAccess', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * <p>Disables an organizational control policy type in a root. A policy of a certain type can be attached to entities in a root only if that type is enabled in the root. After you perform this operation, you no longer can attach policies of the specified type to that root or to any organizational unit (OU) or account in that root. You can undo this by using the <a>EnablePolicyType</a> operation.</p> <p>This is an asynchronous request that AWS performs in the background. If you disable a policy for a root, it still appears enabled for the organization if <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">all features</a> are enabled for the organization. AWS recommends that you first use <a>ListRoots</a> to see the status of policy types for a specified root, and then use this operation. </p> <p>This operation can be called only from the organization's master account.</p> <p> To view the status of available policy types in the organization, use <a>DescribeOrganization</a>.</p>
		 * Post /#X-Amz-Target=AWSOrganizationsV20161128.DisablePolicyType
		 * @return {DisablePolicyTypeResponse} Success
		 */
		DisablePolicyType(requestBody: DisablePolicyTypeRequest, headersHandler?: () => {[header: string]: string}): Promise<DisablePolicyTypeResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSOrganizationsV20161128.DisablePolicyType', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Enables the integration of an AWS service (the service that is specified by <code>ServicePrincipal</code>) with AWS Organizations. When you enable integration, you allow the specified service to create a <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/using-service-linked-roles.html">service-linked role</a> in all the accounts in your organization. This allows the service to perform operations on your behalf in your organization and its accounts.</p> <important> <p>We recommend that you enable integration between AWS Organizations and the specified AWS service by using the console or commands that are provided by the specified service. Doing so ensures that the service is aware that it can create the resources that are required for the integration. How the service creates those resources in the organization's accounts depends on that service. For more information, see the documentation for the other AWS service.</p> </important> <p>For more information about enabling services to integrate with AWS Organizations, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html">Integrating AWS Organizations with Other AWS Services</a> in the <i>AWS Organizations User Guide.</i> </p> <p>This operation can be called only from the organization's master account and only if the organization has <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">enabled all features</a>.</p>
		 * Post /#X-Amz-Target=AWSOrganizationsV20161128.EnableAWSServiceAccess
		 * @return {void} Success
		 */
		EnableAWSServiceAccess(requestBody: EnableAWSServiceAccessRequest, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSOrganizationsV20161128.EnableAWSServiceAccess', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * <p>Enables all features in an organization. This enables the use of organization policies that can restrict the services and actions that can be called in each account. Until you enable all features, you have access only to consolidated billing, and you can't use any of the advanced account administration features that AWS Organizations supports. For more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">Enabling All Features in Your Organization</a> in the <i>AWS Organizations User Guide.</i> </p> <important> <p>This operation is required only for organizations that were created explicitly with only the consolidated billing features enabled. Calling this operation sends a handshake to every invited account in the organization. The feature set change can be finalized and the additional features enabled only after all administrators in the invited accounts approve the change by accepting the handshake.</p> </important> <p>After you enable all features, you can separately enable or disable individual policy types in a root using <a>EnablePolicyType</a> and <a>DisablePolicyType</a>. To see the status of policy types in a root, use <a>ListRoots</a>.</p> <p>After all invited member accounts accept the handshake, you finalize the feature set change by accepting the handshake that contains <code>"Action": "ENABLE_ALL_FEATURES"</code>. This completes the change.</p> <p>After you enable all features in your organization, the master account in the organization can apply policies on all member accounts. These policies can restrict what users and even administrators in those accounts can do. The master account can apply policies that prevent accounts from leaving the organization. Ensure that your account administrators are aware of this.</p> <p>This operation can be called only from the organization's master account. </p>
		 * Post /#X-Amz-Target=AWSOrganizationsV20161128.EnableAllFeatures
		 * @return {EnableAllFeaturesResponse} Success
		 */
		EnableAllFeatures(requestBody: EnableAllFeaturesRequest, headersHandler?: () => {[header: string]: string}): Promise<EnableAllFeaturesResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSOrganizationsV20161128.EnableAllFeatures', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Enables a policy type in a root. After you enable a policy type in a root, you can attach policies of that type to the root, any organizational unit (OU), or account in that root. You can undo this by using the <a>DisablePolicyType</a> operation.</p> <p>This is an asynchronous request that AWS performs in the background. AWS recommends that you first use <a>ListRoots</a> to see the status of policy types for a specified root, and then use this operation. </p> <p>This operation can be called only from the organization's master account.</p> <p>You can enable a policy type in a root only if that policy type is available in the organization. To view the status of available policy types in the organization, use <a>DescribeOrganization</a>.</p>
		 * Post /#X-Amz-Target=AWSOrganizationsV20161128.EnablePolicyType
		 * @return {EnablePolicyTypeResponse} Success
		 */
		EnablePolicyType(requestBody: EnablePolicyTypeRequest, headersHandler?: () => {[header: string]: string}): Promise<EnablePolicyTypeResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSOrganizationsV20161128.EnablePolicyType', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Sends an invitation to another account to join your organization as a member account. AWS Organizations sends email on your behalf to the email address that is associated with the other account's owner. The invitation is implemented as a <a>Handshake</a> whose details are in the response.</p> <important> <ul> <li> <p>You can invite AWS accounts only from the same seller as the master account. For example, if your organization's master account was created by Amazon Internet Services Pvt. Ltd (AISPL), an AWS seller in India, you can invite only other AISPL accounts to your organization. You can't combine accounts from AISPL and AWS or from any other AWS seller. For more information, see <a href="http://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/useconsolidatedbilliing-India.html">Consolidated Billing in India</a>.</p> </li> <li> <p>If you receive an exception that indicates that you exceeded your account limits for the organization or that the operation failed because your organization is still initializing, wait one hour and then try again. If the error persists after an hour, contact <a href="https://console.aws.amazon.com/support/home#/">AWS Support</a>.</p> </li> </ul> </important> <p>This operation can be called only from the organization's master account.</p>
		 * Post /#X-Amz-Target=AWSOrganizationsV20161128.InviteAccountToOrganization
		 * @return {InviteAccountToOrganizationResponse} Success
		 */
		InviteAccountToOrganization(requestBody: InviteAccountToOrganizationRequest, headersHandler?: () => {[header: string]: string}): Promise<InviteAccountToOrganizationResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSOrganizationsV20161128.InviteAccountToOrganization', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Removes a member account from its parent organization. This version of the operation is performed by the account that wants to leave. To remove a member account as a user in the master account, use <a>RemoveAccountFromOrganization</a> instead.</p> <p>This operation can be called only from a member account in the organization.</p> <important> <ul> <li> <p>The master account in an organization with all features enabled can set service control policies (SCPs) that can restrict what administrators of member accounts can do. This includes preventing them from successfully calling <code>LeaveOrganization</code> and leaving the organization. </p> </li> <li> <p>You can leave an organization as a member account only if the account is configured with the information required to operate as a standalone account. When you create an account in an organization using the AWS Organizations console, API, or CLI commands, the information required of standalone accounts is <i>not</i> automatically collected. For each account that you want to make standalone, you must do the following steps:</p> <ul> <li> <p>Accept the end user license agreement (EULA)</p> </li> <li> <p>Choose a support plan</p> </li> <li> <p>Provide and verify the required contact information</p> </li> <li> <p>Provide a current payment method</p> </li> </ul> <p>AWS uses the payment method to charge for any billable (not free tier) AWS activity that occurs while the account isn't attached to an organization. Follow the steps at <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html#leave-without-all-info"> To leave an organization when all required account information has not yet been provided</a> in the <i>AWS Organizations User Guide.</i> </p> </li> <li> <p>You can leave an organization only after you enable IAM user access to billing in your account. For more information, see <a href="http://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/grantaccess.html#ControllingAccessWebsite-Activate">Activating Access to the Billing and Cost Management Console</a> in the <i>AWS Billing and Cost Management User Guide.</i> </p> </li> </ul> </important>
		 * Post /#X-Amz-Target=AWSOrganizationsV20161128.LeaveOrganization
		 * @return {void} Success
		 */
		LeaveOrganization(headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSOrganizationsV20161128.LeaveOrganization', { method: 'post', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Returns a list of the AWS services that you enabled to integrate with your organization. After a service on this list creates the resources that it requires for the integration, it can perform operations on your organization and its accounts.</p> <p>For more information about integrating other services with AWS Organizations, including the list of services that currently work with Organizations, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html">Integrating AWS Organizations with Other AWS Services</a> in the <i>AWS Organizations User Guide.</i> </p> <p>This operation can be called only from the organization's master account or by a member account that is a delegated administrator for an AWS service.</p>
		 * Post /#X-Amz-Target=AWSOrganizationsV20161128.ListAWSServiceAccessForOrganization
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAWSServiceAccessForOrganizationResponse} Success
		 */
		ListAWSServiceAccessForOrganization(MaxResults: string, NextToken: string, requestBody: ListAWSServiceAccessForOrganizationRequest, headersHandler?: () => {[header: string]: string}): Promise<ListAWSServiceAccessForOrganizationResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSOrganizationsV20161128.ListAWSServiceAccessForOrganization?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Lists all the accounts in the organization. To request only the accounts in a specified root or organizational unit (OU), use the <a>ListAccountsForParent</a> operation instead.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's master account or by a member account that is a delegated administrator for an AWS service.</p>
		 * Post /#X-Amz-Target=AWSOrganizationsV20161128.ListAccounts
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAccountsResponse} Success
		 */
		ListAccounts(MaxResults: string, NextToken: string, requestBody: ListAccountsRequest, headersHandler?: () => {[header: string]: string}): Promise<ListAccountsResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSOrganizationsV20161128.ListAccounts?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Lists the accounts in an organization that are contained by the specified target root or organizational unit (OU). If you specify the root, you get a list of all the accounts that aren't in any OU. If you specify an OU, you get a list of all the accounts in only that OU and not in any child OUs. To get a list of all accounts in the organization, use the <a>ListAccounts</a> operation.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's master account or by a member account that is a delegated administrator for an AWS service.</p>
		 * Post /#X-Amz-Target=AWSOrganizationsV20161128.ListAccountsForParent
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAccountsForParentResponse} Success
		 */
		ListAccountsForParent(MaxResults: string, NextToken: string, requestBody: ListAccountsForParentRequest, headersHandler?: () => {[header: string]: string}): Promise<ListAccountsForParentResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSOrganizationsV20161128.ListAccountsForParent?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Lists all of the organizational units (OUs) or accounts that are contained in the specified parent OU or root. This operation, along with <a>ListParents</a> enables you to traverse the tree structure that makes up this root.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's master account or by a member account that is a delegated administrator for an AWS service.</p>
		 * Post /#X-Amz-Target=AWSOrganizationsV20161128.ListChildren
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListChildrenResponse} Success
		 */
		ListChildren(MaxResults: string, NextToken: string, requestBody: ListChildrenRequest, headersHandler?: () => {[header: string]: string}): Promise<ListChildrenResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSOrganizationsV20161128.ListChildren?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Lists the account creation requests that match the specified status that is currently being tracked for the organization.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's master account or by a member account that is a delegated administrator for an AWS service.</p>
		 * Post /#X-Amz-Target=AWSOrganizationsV20161128.ListCreateAccountStatus
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListCreateAccountStatusResponse} Success
		 */
		ListCreateAccountStatus(MaxResults: string, NextToken: string, requestBody: ListCreateAccountStatusRequest, headersHandler?: () => {[header: string]: string}): Promise<ListCreateAccountStatusResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSOrganizationsV20161128.ListCreateAccountStatus?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Lists the AWS accounts that are designated as delegated administrators in this organization.</p> <p>This operation can be called only from the organization's master account or by a member account that is a delegated administrator for an AWS service.</p>
		 * Post /#X-Amz-Target=AWSOrganizationsV20161128.ListDelegatedAdministrators
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDelegatedAdministratorsResponse} Success
		 */
		ListDelegatedAdministrators(MaxResults: string, NextToken: string, requestBody: ListDelegatedAdministratorsRequest, headersHandler?: () => {[header: string]: string}): Promise<ListDelegatedAdministratorsResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSOrganizationsV20161128.ListDelegatedAdministrators?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>List the AWS services for which the specified account is a delegated administrator. </p> <p>This operation can be called only from the organization's master account or by a member account that is a delegated administrator for an AWS service.</p>
		 * Post /#X-Amz-Target=AWSOrganizationsV20161128.ListDelegatedServicesForAccount
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDelegatedServicesForAccountResponse} Success
		 */
		ListDelegatedServicesForAccount(MaxResults: string, NextToken: string, requestBody: ListDelegatedServicesForAccountRequest, headersHandler?: () => {[header: string]: string}): Promise<ListDelegatedServicesForAccountResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSOrganizationsV20161128.ListDelegatedServicesForAccount?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Lists the current handshakes that are associated with the account of the requesting user.</p> <p>Handshakes that are <code>ACCEPTED</code>, <code>DECLINED</code>, or <code>CANCELED</code> appear in the results of this API for only 30 days after changing to that state. After that, they're deleted and no longer accessible.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's master account or by a member account that is a delegated administrator for an AWS service.</p>
		 * Post /#X-Amz-Target=AWSOrganizationsV20161128.ListHandshakesForAccount
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListHandshakesForAccountResponse} Success
		 */
		ListHandshakesForAccount(MaxResults: string, NextToken: string, requestBody: ListHandshakesForAccountRequest, headersHandler?: () => {[header: string]: string}): Promise<ListHandshakesForAccountResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSOrganizationsV20161128.ListHandshakesForAccount?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Lists the handshakes that are associated with the organization that the requesting user is part of. The <code>ListHandshakesForOrganization</code> operation returns a list of handshake structures. Each structure contains details and status about a handshake.</p> <p>Handshakes that are <code>ACCEPTED</code>, <code>DECLINED</code>, or <code>CANCELED</code> appear in the results of this API for only 30 days after changing to that state. After that, they're deleted and no longer accessible.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's master account or by a member account that is a delegated administrator for an AWS service.</p>
		 * Post /#X-Amz-Target=AWSOrganizationsV20161128.ListHandshakesForOrganization
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListHandshakesForOrganizationResponse} Success
		 */
		ListHandshakesForOrganization(MaxResults: string, NextToken: string, requestBody: ListHandshakesForOrganizationRequest, headersHandler?: () => {[header: string]: string}): Promise<ListHandshakesForOrganizationResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSOrganizationsV20161128.ListHandshakesForOrganization?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Lists the organizational units (OUs) in a parent organizational unit or root.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's master account or by a member account that is a delegated administrator for an AWS service.</p>
		 * Post /#X-Amz-Target=AWSOrganizationsV20161128.ListOrganizationalUnitsForParent
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListOrganizationalUnitsForParentResponse} Success
		 */
		ListOrganizationalUnitsForParent(MaxResults: string, NextToken: string, requestBody: ListOrganizationalUnitsForParentRequest, headersHandler?: () => {[header: string]: string}): Promise<ListOrganizationalUnitsForParentResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSOrganizationsV20161128.ListOrganizationalUnitsForParent?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Lists the root or organizational units (OUs) that serve as the immediate parent of the specified child OU or account. This operation, along with <a>ListChildren</a> enables you to traverse the tree structure that makes up this root.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's master account or by a member account that is a delegated administrator for an AWS service.</p> <note> <p>In the current release, a child can have only a single parent. </p> </note>
		 * Post /#X-Amz-Target=AWSOrganizationsV20161128.ListParents
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListParentsResponse} Success
		 */
		ListParents(MaxResults: string, NextToken: string, requestBody: ListParentsRequest, headersHandler?: () => {[header: string]: string}): Promise<ListParentsResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSOrganizationsV20161128.ListParents?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Retrieves the list of all policies in an organization of a specified type.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's master account or by a member account that is a delegated administrator for an AWS service.</p>
		 * Post /#X-Amz-Target=AWSOrganizationsV20161128.ListPolicies
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListPoliciesResponse} Success
		 */
		ListPolicies(MaxResults: string, NextToken: string, requestBody: ListPoliciesRequest, headersHandler?: () => {[header: string]: string}): Promise<ListPoliciesResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSOrganizationsV20161128.ListPolicies?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Lists the policies that are directly attached to the specified target root, organizational unit (OU), or account. You must specify the policy type that you want included in the returned list.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's master account or by a member account that is a delegated administrator for an AWS service.</p>
		 * Post /#X-Amz-Target=AWSOrganizationsV20161128.ListPoliciesForTarget
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListPoliciesForTargetResponse} Success
		 */
		ListPoliciesForTarget(MaxResults: string, NextToken: string, requestBody: ListPoliciesForTargetRequest, headersHandler?: () => {[header: string]: string}): Promise<ListPoliciesForTargetResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSOrganizationsV20161128.ListPoliciesForTarget?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Lists the roots that are defined in the current organization.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's master account or by a member account that is a delegated administrator for an AWS service.</p> <note> <p>Policy types can be enabled and disabled in roots. This is distinct from whether they're available in the organization. When you enable all features, you make policy types available for use in that organization. Individual policy types can then be enabled and disabled in a root. To see the availability of a policy type in an organization, use <a>DescribeOrganization</a>.</p> </note>
		 * Post /#X-Amz-Target=AWSOrganizationsV20161128.ListRoots
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListRootsResponse} Success
		 */
		ListRoots(MaxResults: string, NextToken: string, requestBody: ListRootsRequest, headersHandler?: () => {[header: string]: string}): Promise<ListRootsResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSOrganizationsV20161128.ListRoots?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Lists tags for the specified resource. </p> <p>Currently, you can list tags on an account in AWS Organizations.</p> <p>This operation can be called only from the organization's master account or by a member account that is a delegated administrator for an AWS service.</p>
		 * Post /#X-Amz-Target=AWSOrganizationsV20161128.ListTagsForResource
		 * @param {string} NextToken Pagination token
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(NextToken: string, requestBody: ListTagsForResourceRequest, headersHandler?: () => {[header: string]: string}): Promise<ListTagsForResourceResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSOrganizationsV20161128.ListTagsForResource?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Lists all the roots, organizational units (OUs), and accounts that the specified policy is attached to.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's master account or by a member account that is a delegated administrator for an AWS service.</p>
		 * Post /#X-Amz-Target=AWSOrganizationsV20161128.ListTargetsForPolicy
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTargetsForPolicyResponse} Success
		 */
		ListTargetsForPolicy(MaxResults: string, NextToken: string, requestBody: ListTargetsForPolicyRequest, headersHandler?: () => {[header: string]: string}): Promise<ListTargetsForPolicyResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSOrganizationsV20161128.ListTargetsForPolicy?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Moves an account from its current source parent root or organizational unit (OU) to the specified destination parent root or OU.</p> <p>This operation can be called only from the organization's master account.</p>
		 * Post /#X-Amz-Target=AWSOrganizationsV20161128.MoveAccount
		 * @return {void} Success
		 */
		MoveAccount(requestBody: MoveAccountRequest, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSOrganizationsV20161128.MoveAccount', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * <p>Enables the specified member account to administer the Organizations features of the specified AWS service. It grants read-only access to AWS Organizations service data. The account still requires IAM permissions to access and administer the AWS service.</p> <p>You can run this action only for AWS services that support this feature. For a current list of services that support it, see the column <i>Supports Delegated Administrator</i> in the table at <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrated-services-list.html">AWS Services that you can use with AWS Organizations</a> in the <i>AWS Organizations User Guide.</i> </p> <p>This operation can be called only from the organization's master account.</p>
		 * Post /#X-Amz-Target=AWSOrganizationsV20161128.RegisterDelegatedAdministrator
		 * @return {void} Success
		 */
		RegisterDelegatedAdministrator(requestBody: RegisterDelegatedAdministratorRequest, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSOrganizationsV20161128.RegisterDelegatedAdministrator', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * <p>Removes the specified account from the organization.</p> <p>The removed account becomes a standalone account that isn't a member of any organization. It's no longer subject to any policies and is responsible for its own bill payments. The organization's master account is no longer charged for any expenses accrued by the member account after it's removed from the organization.</p> <p>This operation can be called only from the organization's master account. Member accounts can remove themselves with <a>LeaveOrganization</a> instead.</p> <important> <p>You can remove an account from your organization only if the account is configured with the information required to operate as a standalone account. When you create an account in an organization using the AWS Organizations console, API, or CLI commands, the information required of standalone accounts is <i>not</i> automatically collected. For an account that you want to make standalone, you must accept the end user license agreement (EULA), choose a support plan, provide and verify the required contact information, and provide a current payment method. AWS uses the payment method to charge for any billable (not free tier) AWS activity that occurs while the account isn't attached to an organization. To remove an account that doesn't yet have this information, you must sign in as the member account and follow the steps at <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html#leave-without-all-info"> To leave an organization when all required account information has not yet been provided</a> in the <i>AWS Organizations User Guide.</i> </p> </important>
		 * Post /#X-Amz-Target=AWSOrganizationsV20161128.RemoveAccountFromOrganization
		 * @return {void} Success
		 */
		RemoveAccountFromOrganization(requestBody: RemoveAccountFromOrganizationRequest, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSOrganizationsV20161128.RemoveAccountFromOrganization', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * <p>Adds one or more tags to the specified resource.</p> <p>Currently, you can tag and untag accounts in AWS Organizations.</p> <p>This operation can be called only from the organization's master account.</p>
		 * Post /#X-Amz-Target=AWSOrganizationsV20161128.TagResource
		 * @return {void} Success
		 */
		TagResource(requestBody: TagResourceRequest, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSOrganizationsV20161128.TagResource', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * <p>Removes a tag from the specified resource. </p> <p>Currently, you can tag and untag accounts in AWS Organizations.</p> <p>This operation can be called only from the organization's master account.</p>
		 * Post /#X-Amz-Target=AWSOrganizationsV20161128.UntagResource
		 * @return {void} Success
		 */
		UntagResource(requestBody: UntagResourceRequest, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSOrganizationsV20161128.UntagResource', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * <p>Renames the specified organizational unit (OU). The ID and ARN don't change. The child OUs and accounts remain in place, and any attached policies of the OU remain attached. </p> <p>This operation can be called only from the organization's master account.</p>
		 * Post /#X-Amz-Target=AWSOrganizationsV20161128.UpdateOrganizationalUnit
		 * @return {UpdateOrganizationalUnitResponse} Success
		 */
		UpdateOrganizationalUnit(requestBody: UpdateOrganizationalUnitRequest, headersHandler?: () => {[header: string]: string}): Promise<UpdateOrganizationalUnitResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSOrganizationsV20161128.UpdateOrganizationalUnit', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Updates an existing policy with a new name, description, or content. If you don't supply any parameter, that value remains unchanged. You can't change a policy's type.</p> <p>This operation can be called only from the organization's master account.</p>
		 * Post /#X-Amz-Target=AWSOrganizationsV20161128.UpdatePolicy
		 * @return {UpdatePolicyResponse} Success
		 */
		UpdatePolicy(requestBody: UpdatePolicyRequest, headersHandler?: () => {[header: string]: string}): Promise<UpdatePolicyResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSOrganizationsV20161128.UpdatePolicy', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}
	}

}

