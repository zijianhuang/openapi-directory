///<reference path="HttpClient.ts" />
namespace My_Demo_Client {
	export interface CreateDetectorResponse {
		DetectorId?: string;
	}

	export interface CreateFilterResponse {
		Name: string;
	}

	export interface CreateIPSetResponse {
		IpSetId: string;
	}

	export interface CreateMembersResponse {
		UnprocessedAccounts: Array<UnprocessedAccount>;
	}


	/**Contains information about the account. */
	export interface AccountDetail {
		AccountId: string;
		Email: string;
	}

	export interface CreatePublishingDestinationResponse {
		DestinationId: string;
	}

	export interface CreateThreatIntelSetResponse {
		ThreatIntelSetId: string;
	}

	export interface DeclineInvitationsResponse {
		UnprocessedAccounts: Array<UnprocessedAccount>;
	}

	export interface DeleteInvitationsResponse {
		UnprocessedAccounts: Array<UnprocessedAccount>;
	}

	export interface DeleteMembersResponse {
		UnprocessedAccounts: Array<UnprocessedAccount>;
	}

	export interface DescribeOrganizationConfigurationResponse {
		AutoEnable: boolean;
		MemberAccountLimitReached: boolean;
	}

	export interface DescribePublishingDestinationResponse {
		DestinationId: string;
		DestinationType: DescribePublishingDestinationResponseDestinationType;
		Status: DescribePublishingDestinationResponseStatus;
		PublishingFailureStartTimestamp: number;

		/**Contains the Amazon Resource Name (ARN) of the resource to publish to, such as an S3 bucket, and the ARN of the KMS key to use to encrypt published findings. */
		DestinationProperties: DestinationProperties;
	}

	export enum DescribePublishingDestinationResponseDestinationType { S3 = 0 }

	export enum DescribePublishingDestinationResponseStatus { PENDING_VERIFICATION = 0, PUBLISHING = 1, UNABLE_TO_PUBLISH_FIX_DESTINATION_PROPERTY = 2, STOPPED = 3 }

	export interface DisassociateMembersResponse {
		UnprocessedAccounts: Array<UnprocessedAccount>;
	}

	export interface GetDetectorResponse {
		CreatedAt?: string;
		FindingPublishingFrequency?: GetDetectorResponseFindingPublishingFrequency;
		ServiceRole: string;
		Status: GetDetectorResponseStatus;
		UpdatedAt?: string;
		Tags?: TagMap;
	}

	export enum GetDetectorResponseFindingPublishingFrequency { FIFTEEN_MINUTES = 0, ONE_HOUR = 1, SIX_HOURS = 2 }

	export enum GetDetectorResponseStatus { ENABLED = 0, DISABLED = 1 }

	export interface GetFilterResponse {
		Name: string;
		Description?: string;
		Action: GetFilterResponseAction;
		Rank?: number;

		/**Contains information about the criteria used for querying findings. */
		FindingCriteria: FindingCriteria;
		Tags?: TagMap;
	}

	export enum GetFilterResponseAction { NOOP = 0, ARCHIVE = 1 }

	export interface GetFindingsResponse {
		Findings: Array<Finding>;
	}

	export enum OrderBy { ASC = 0, DESC = 1 }

	export interface GetFindingsStatisticsResponse {

		/**Contains information about finding statistics. */
		FindingStatistics: FindingStatistics;
	}

	export enum FindingStatisticType { COUNT_BY_SEVERITY = 0 }

	export interface GetIPSetResponse {
		Name: string;
		Format: GetIPSetResponseFormat;
		Location: string;
		Status: GetIPSetResponseStatus;
		Tags?: TagMap;
	}

	export enum GetIPSetResponseFormat { TXT = 0, STIX = 1, OTX_CSV = 2, ALIEN_VAULT = 3, PROOF_POINT = 4, FIRE_EYE = 5 }

	export enum GetIPSetResponseStatus { INACTIVE = 0, ACTIVATING = 1, ACTIVE = 2, DEACTIVATING = 3, ERROR = 4, DELETE_PENDING = 5, DELETED = 6 }

	export interface GetInvitationsCountResponse {
		InvitationsCount?: number;
	}

	export interface GetMasterAccountResponse {

		/**Contains information about the master account and invitation. */
		Master: Master;
	}

	export interface GetMembersResponse {
		Members: Array<Member>;
		UnprocessedAccounts: Array<UnprocessedAccount>;
	}

	export interface GetThreatIntelSetResponse {
		Name: string;
		Format: GetThreatIntelSetResponseFormat;
		Location: string;
		Status: GetThreatIntelSetResponseStatus;
		Tags?: TagMap;
	}

	export enum GetThreatIntelSetResponseFormat { TXT = 0, STIX = 1, OTX_CSV = 2, ALIEN_VAULT = 3, PROOF_POINT = 4, FIRE_EYE = 5 }

	export enum GetThreatIntelSetResponseStatus { INACTIVE = 0, ACTIVATING = 1, ACTIVE = 2, DEACTIVATING = 3, ERROR = 4, DELETE_PENDING = 5, DELETED = 6 }

	export interface InviteMembersResponse {
		UnprocessedAccounts: Array<UnprocessedAccount>;
	}

	export interface ListDetectorsResponse {
		DetectorIds: Array<DetectorId>;
		NextToken?: string;
	}

	export interface ListFiltersResponse {
		FilterNames: Array<FilterName>;
		NextToken?: string;
	}

	export interface ListFindingsResponse {
		FindingIds: Array<FindingId>;
		NextToken?: string;
	}

	export interface ListIPSetsResponse {
		IpSetIds: Array<String>;
		NextToken?: string;
	}

	export interface ListInvitationsResponse {
		Invitations?: Array<Invitation>;
		NextToken?: string;
	}

	export interface ListMembersResponse {
		Members?: Array<Member>;
		NextToken?: string;
	}

	export interface ListOrganizationAdminAccountsResponse {
		AdminAccounts?: Array<AdminAccount>;
		NextToken?: string;
	}

	export interface ListPublishingDestinationsResponse {
		Destinations: Array<Destination>;
		NextToken?: string;
	}

	export interface ListTagsForResourceResponse {
		Tags?: TagMap;
	}

	export interface ListThreatIntelSetsResponse {
		ThreatIntelSetIds: Array<String>;
		NextToken?: string;
	}

	export interface StartMonitoringMembersResponse {
		UnprocessedAccounts: Array<UnprocessedAccount>;
	}

	export interface StopMonitoringMembersResponse {
		UnprocessedAccounts: Array<UnprocessedAccount>;
	}

	export interface UpdateFilterResponse {
		Name: string;
	}

	export interface AcceptInvitationRequest {
		MasterId: string;
		InvitationId: string;
	}


	/**Contains information on the current access control policies for the bucket. */
	export interface AccessControlList {
		AllowsPublicReadAccess?: boolean;
		AllowsPublicWriteAccess?: boolean;
	}


	/**Contains information about the access keys. */
	export interface AccessKeyDetails {
		AccessKeyId?: string;
		PrincipalId?: string;
		UserName?: string;
		UserType?: string;
	}


	/**Contains information on how the bucker owner's S3 Block Public Access settings are being applied to the S3 bucket. See <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html">S3 Block Public Access</a> for more information.  */
	export interface BlockPublicAccess {
		IgnorePublicAcls?: boolean;
		RestrictPublicBuckets?: boolean;
		BlockPublicAcls?: boolean;
		BlockPublicPolicy?: boolean;
	}


	/**Contains information about the account level permissions on the S3 bucket. */
	export interface AccountLevelPermissions {

		/**Contains information on how the bucker owner's S3 Block Public Access settings are being applied to the S3 bucket. See <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html">S3 Block Public Access</a> for more information. */
		BlockPublicAccess?: BlockPublicAccess;
	}


	/**Contains information about the API operation. */
	export interface AwsApiCallAction {
		Api?: string;
		CallerType?: string;

		/**Contains information about the domain. */
		DomainDetails?: DomainDetails;

		/**Contains information about the remote IP address of the connection. */
		RemoteIpDetails?: RemoteIpDetails;
		ServiceName?: string;
	}


	/**Contains information about the DNS_REQUEST action described in this finding. */
	export interface DnsRequestAction {
		Domain?: string;
	}


	/**Contains information about the NETWORK_CONNECTION action described in the finding. */
	export interface NetworkConnectionAction {
		Blocked?: boolean;
		ConnectionDirection?: string;

		/**Contains information about the port for the local connection. */
		LocalPortDetails?: LocalPortDetails;
		Protocol?: string;

		/**Contains information about the local IP address of the connection. */
		LocalIpDetails?: LocalIpDetails;

		/**Contains information about the remote IP address of the connection. */
		RemoteIpDetails?: RemoteIpDetails;

		/**Contains information about the remote port. */
		RemotePortDetails?: RemotePortDetails;
	}


	/**Contains information about the PORT_PROBE action described in the finding. */
	export interface PortProbeAction {
		Blocked?: boolean;
		PortProbeDetails?: Array<PortProbeDetail>;
	}


	/**Contains information about actions. */
	export interface Action {
		ActionType?: string;

		/**Contains information about the API operation. */
		AwsApiCallAction?: AwsApiCallAction;

		/**Contains information about the DNS_REQUEST action described in this finding. */
		DnsRequestAction?: DnsRequestAction;

		/**Contains information about the NETWORK_CONNECTION action described in the finding. */
		NetworkConnectionAction?: NetworkConnectionAction;

		/**Contains information about the PORT_PROBE action described in the finding. */
		PortProbeAction?: PortProbeAction;
	}

	export enum AdminStatus { ENABLED = 0, DISABLE_IN_PROGRESS = 1 }


	/**The account within the organization specified as the GuardDuty delegated administrator. */
	export interface AdminAccount {
		AdminAccountId?: string;
		AdminStatus?: AdminAccountAdminStatus;
	}

	export enum AdminAccountAdminStatus { ENABLED = 0, DISABLE_IN_PROGRESS = 1 }

	export interface ArchiveFindingsRequest {
		FindingIds: Array<FindingId>;
	}


	/**Contains information about the domain. */
	export interface DomainDetails {
		Domain?: string;
	}


	/**Contains information about the remote IP address of the connection. */
	export interface RemoteIpDetails {

		/**Contains information about the city associated with the IP address. */
		City?: City;

		/**Contains information about the country where the remote IP address is located. */
		Country?: Country;

		/**Contains information about the location of the remote IP address. */
		GeoLocation?: GeoLocation;
		IpAddressV4?: string;

		/**Contains information about the ISP organization of the remote IP address. */
		Organization?: Organization;
	}


	/**Contains information on the current bucket policies for the S3 bucket. */
	export interface BucketPolicy {
		AllowsPublicReadAccess?: boolean;
		AllowsPublicWriteAccess?: boolean;
	}


	/**Contains information about the bucket level permissions for the S3 bucket. */
	export interface BucketLevelPermissions {

		/**Contains information on the current access control policies for the bucket. */
		AccessControlList?: AccessControlList;

		/**Contains information on the current bucket policies for the S3 bucket. */
		BucketPolicy?: BucketPolicy;

		/**Contains information on how the bucker owner's S3 Block Public Access settings are being applied to the S3 bucket. See <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html">S3 Block Public Access</a> for more information. */
		BlockPublicAccess?: BlockPublicAccess;
	}


	/**Contains information about the city associated with the IP address. */
	export interface City {
		CityName?: string;
	}


	/**Contains information about the condition. */
	export interface Condition {
		Eq?: Array<String>;
		Neq?: Array<String>;
		Gt?: number;
		Gte?: number;
		Lt?: number;
		Lte?: number;
		Equals?: Array<String>;
		NotEquals?: Array<String>;
		GreaterThan?: number;
		GreaterThanOrEqual?: number;
		LessThan?: number;
		LessThanOrEqual?: number;
	}


	/**Contains information about the country where the remote IP address is located. */
	export interface Country {
		CountryCode?: string;
		CountryName?: string;
	}

	export enum FindingPublishingFrequency { FIFTEEN_MINUTES = 0, ONE_HOUR = 1, SIX_HOURS = 2 }

	export interface CreateDetectorRequest {
		Enable: boolean;
		ClientToken?: string;
		FindingPublishingFrequency?: CreateDetectorRequestFindingPublishingFrequency;
		Tags?: TagMap;
	}

	export enum CreateDetectorRequestFindingPublishingFrequency { FIFTEEN_MINUTES = 0, ONE_HOUR = 1, SIX_HOURS = 2 }

	export enum FilterAction { NOOP = 0, ARCHIVE = 1 }


	/**Contains information about the criteria used for querying findings. */
	export interface FindingCriteria {
		Criterion?: Criterion;
	}

	export interface CreateFilterRequest {
		Name: string;
		Description?: string;
		Action?: CreateFilterRequestAction;
		Rank?: number;

		/**Contains information about the criteria used for querying findings. */
		FindingCriteria: FindingCriteria;
		ClientToken?: string;
		Tags?: TagMap;
	}

	export enum CreateFilterRequestAction { NOOP = 0, ARCHIVE = 1 }

	export enum IpSetFormat { TXT = 0, STIX = 1, OTX_CSV = 2, ALIEN_VAULT = 3, PROOF_POINT = 4, FIRE_EYE = 5 }

	export interface CreateIPSetRequest {
		Name: string;
		Format: CreateIPSetRequestFormat;
		Location: string;
		Activate: boolean;
		ClientToken?: string;
		Tags?: TagMap;
	}

	export enum CreateIPSetRequestFormat { TXT = 0, STIX = 1, OTX_CSV = 2, ALIEN_VAULT = 3, PROOF_POINT = 4, FIRE_EYE = 5 }

	export interface CreateMembersRequest {
		AccountDetails: Array<AccountDetail>;
	}

	export enum DestinationType { S3 = 0 }


	/**Contains the Amazon Resource Name (ARN) of the resource to publish to, such as an S3 bucket, and the ARN of the KMS key to use to encrypt published findings. */
	export interface DestinationProperties {
		DestinationArn?: string;
		KmsKeyArn?: string;
	}

	export interface CreatePublishingDestinationRequest {
		DestinationType: CreatePublishingDestinationRequestDestinationType;

		/**Contains the Amazon Resource Name (ARN) of the resource to publish to, such as an S3 bucket, and the ARN of the KMS key to use to encrypt published findings. */
		DestinationProperties: DestinationProperties;
		ClientToken?: string;
	}

	export enum CreatePublishingDestinationRequestDestinationType { S3 = 0 }

	export interface CreateSampleFindingsRequest {
		FindingTypes?: Array<FindingType>;
	}

	export enum ThreatIntelSetFormat { TXT = 0, STIX = 1, OTX_CSV = 2, ALIEN_VAULT = 3, PROOF_POINT = 4, FIRE_EYE = 5 }

	export interface CreateThreatIntelSetRequest {
		Name: string;
		Format: CreateThreatIntelSetRequestFormat;
		Location: string;
		Activate: boolean;
		ClientToken?: string;
		Tags?: TagMap;
	}

	export enum CreateThreatIntelSetRequestFormat { TXT = 0, STIX = 1, OTX_CSV = 2, ALIEN_VAULT = 3, PROOF_POINT = 4, FIRE_EYE = 5 }

	export interface DeclineInvitationsRequest {
		AccountIds: Array<AccountId>;
	}


	/**Contains information on the server side encryption method used in the S3 bucket. See <a href="https://docs.aws.amazon.com/AmazonS3/atest/dev/serv-side-encryption.html">S3 Server-Side Encryption</a> for more information. */
	export interface DefaultServerSideEncryption {
		EncryptionType?: string;
		KmsMasterKeyArn?: string;
	}

	export interface DeleteInvitationsRequest {
		AccountIds: Array<AccountId>;
	}

	export interface DeleteMembersRequest {
		AccountIds: Array<AccountId>;
	}

	export enum PublishingStatus { PENDING_VERIFICATION = 0, PUBLISHING = 1, UNABLE_TO_PUBLISH_FIX_DESTINATION_PROPERTY = 2, STOPPED = 3 }


	/**Contains information about the publishing destination, including the ID, type, and status. */
	export interface Destination {
		DestinationId: string;
		DestinationType: DestinationDestinationType;
		Status: DestinationStatus;
	}

	export enum DestinationDestinationType { S3 = 0 }

	export enum DestinationStatus { PENDING_VERIFICATION = 0, PUBLISHING = 1, UNABLE_TO_PUBLISH_FIX_DESTINATION_PROPERTY = 2, STOPPED = 3 }

	export enum DetectorStatus { ENABLED = 0, DISABLED = 1 }

	export interface DisableOrganizationAdminAccountRequest {
		AdminAccountId: string;
	}

	export interface DisassociateMembersRequest {
		AccountIds: Array<AccountId>;
	}

	export interface EnableOrganizationAdminAccountRequest {
		AdminAccountId: string;
	}


	/**Contains information about the reason that the finding was generated. */
	export interface Evidence {
		ThreatIntelligenceDetails?: Array<ThreatIntelligenceDetail>;
	}

	export enum Feedback { USEFUL = 0, NOT_USEFUL = 1 }


	/**Contains information about the AWS resource associated with the activity that prompted GuardDuty to generate a finding. */
	export interface Resource {

		/**Contains information about the access keys. */
		AccessKeyDetails?: AccessKeyDetails;

		/**Contains information on the S3 bucket. */
		S3BucketDetails?: Array<S3BucketDetail>;

		/**Contains information about the details of an instance. */
		InstanceDetails?: InstanceDetails;
		ResourceType?: string;
	}


	/**Contains additional information about the generated finding. */
	export interface Service {

		/**Contains information about actions. */
		Action?: Action;

		/**Contains information about the reason that the finding was generated. */
		Evidence?: Evidence;
		Archived?: boolean;
		Count?: number;
		DetectorId?: string;
		EventFirstSeen?: string;
		EventLastSeen?: string;
		ResourceRole?: string;
		ServiceName?: string;
		UserFeedback?: string;
	}


	/**Contains information about the finding, which is generated when abnormal or suspicious activity is detected. */
	export interface Finding {
		AccountId: string;
		Arn: string;
		Confidence?: number;
		CreatedAt: string;
		Description?: string;
		Id: string;
		Partition?: string;
		Region: string;

		/**Contains information about the AWS resource associated with the activity that prompted GuardDuty to generate a finding. */
		Resource: Resource;
		SchemaVersion: string;

		/**Contains additional information about the generated finding. */
		Service?: Service;
		Severity: number;
		Title?: string;
		Type: string;
		UpdatedAt: string;
	}


	/**Contains information about finding statistics. */
	export interface FindingStatistics {
		CountBySeverity?: CountBySeverity;
	}


	/**Contains information about the location of the remote IP address. */
	export interface GeoLocation {
		Lat?: number;
		Lon?: number;
	}


	/**Contains information about the criteria used for sorting findings. */
	export interface SortCriteria {
		AttributeName?: string;
		OrderBy?: SortCriteriaOrderBy;
	}

	export enum SortCriteriaOrderBy { ASC = 0, DESC = 1 }

	export interface GetFindingsRequest {
		FindingIds: Array<FindingId>;

		/**Contains information about the criteria used for sorting findings. */
		SortCriteria?: SortCriteria;
	}

	export interface GetFindingsStatisticsRequest {
		FindingStatisticTypes: Array<FindingStatisticType>;

		/**Contains information about the criteria used for querying findings. */
		FindingCriteria?: FindingCriteria;
	}

	export enum IpSetStatus { INACTIVE = 0, ACTIVATING = 1, ACTIVE = 2, DEACTIVATING = 3, ERROR = 4, DELETE_PENDING = 5, DELETED = 6 }


	/**Contains information about the master account and invitation. */
	export interface Master {
		AccountId?: string;
		InvitationId?: string;
		RelationshipStatus?: string;
		InvitedAt?: string;
	}

	export interface GetMembersRequest {
		AccountIds: Array<AccountId>;
	}

	export enum ThreatIntelSetStatus { INACTIVE = 0, ACTIVATING = 1, ACTIVE = 2, DEACTIVATING = 3, ERROR = 4, DELETE_PENDING = 5, DELETED = 6 }


	/**Contains information about the EC2 instance profile. */
	export interface IamInstanceProfile {
		Arn?: string;
		Id?: string;
	}


	/**Contains information about the details of an instance. */
	export interface InstanceDetails {
		AvailabilityZone?: string;

		/**Contains information about the EC2 instance profile. */
		IamInstanceProfile?: IamInstanceProfile;
		ImageDescription?: string;
		ImageId?: string;
		InstanceId?: string;
		InstanceState?: string;
		InstanceType?: string;
		OutpostArn?: string;
		LaunchTime?: string;
		NetworkInterfaces?: Array<NetworkInterface>;
		Platform?: string;
		ProductCodes?: Array<ProductCode>;
		Tags?: Array<Tag>;
	}


	/**Contains information about the invitation to become a member account. */
	export interface Invitation {
		AccountId?: string;
		InvitationId?: string;
		RelationshipStatus?: string;
		InvitedAt?: string;
	}

	export interface InviteMembersRequest {
		AccountIds: Array<AccountId>;
		DisableEmailNotification?: boolean;
		Message?: string;
	}

	export interface ListFindingsRequest {

		/**Contains information about the criteria used for querying findings. */
		FindingCriteria?: FindingCriteria;

		/**Contains information about the criteria used for sorting findings. */
		SortCriteria?: SortCriteria;
		MaxResults?: number;
		NextToken?: string;
	}


	/**Contains information about the local IP address of the connection. */
	export interface LocalIpDetails {
		IpAddressV4?: string;
	}


	/**Contains information about the port for the local connection. */
	export interface LocalPortDetails {
		Port?: number;
		PortName?: string;
	}


	/**Contains information about the member account.  */
	export interface Member {
		AccountId: string;
		DetectorId?: string;
		MasterId: string;
		Email: string;
		RelationshipStatus: string;
		InvitedAt?: string;
		UpdatedAt: string;
	}


	/**Contains information about the remote port. */
	export interface RemotePortDetails {
		Port?: number;
		PortName?: string;
	}


	/**Contains information about the elastic network interface of the EC2 instance. */
	export interface NetworkInterface {
		Ipv6Addresses?: Array<String>;
		NetworkInterfaceId?: string;
		PrivateDnsName?: string;
		PrivateIpAddress?: string;
		PrivateIpAddresses?: Array<PrivateIpAddressDetails>;
		PublicDnsName?: string;
		PublicIp?: string;
		SecurityGroups?: Array<SecurityGroup>;
		SubnetId?: string;
		VpcId?: string;
	}


	/**Contains information about the ISP organization of the remote IP address. */
	export interface Organization {
		Asn?: string;
		AsnOrg?: string;
		Isp?: string;
		Org?: string;
	}


	/**Contains information on the owner of the bucket. */
	export interface Owner {
		Id?: string;
	}


	/**Contains information about how permissions are configured for the S3 bucket. */
	export interface PermissionConfiguration {

		/**Contains information about the bucket level permissions for the S3 bucket. */
		BucketLevelPermissions?: BucketLevelPermissions;

		/**Contains information about the account level permissions on the S3 bucket. */
		AccountLevelPermissions?: AccountLevelPermissions;
	}


	/**Contains information about the port probe details. */
	export interface PortProbeDetail {

		/**Contains information about the port for the local connection. */
		LocalPortDetails?: LocalPortDetails;

		/**Contains information about the local IP address of the connection. */
		LocalIpDetails?: LocalIpDetails;

		/**Contains information about the remote IP address of the connection. */
		RemoteIpDetails?: RemoteIpDetails;
	}


	/**Contains other private IP address information of the EC2 instance. */
	export interface PrivateIpAddressDetails {
		PrivateDnsName?: string;
		PrivateIpAddress?: string;
	}


	/**Contains information about the product code for the EC2 instance. */
	export interface ProductCode {
		Code?: string;
		ProductType?: string;
	}


	/**Describes the public access policies that apply to the S3 bucket. */
	export interface PublicAccess {

		/**Contains information about how permissions are configured for the S3 bucket. */
		PermissionConfiguration?: PermissionConfiguration;
		EffectivePermission?: string;
	}

	export interface S3BucketDetail {
		Arn?: string;
		Name?: string;
		Type?: string;
		CreatedAt?: Date;

		/**Contains information on the owner of the bucket. */
		Owner?: Owner;
		Tags?: Array<Tag>;

		/**Contains information on the server side encryption method used in the S3 bucket. See <a href="https://docs.aws.amazon.com/AmazonS3/atest/dev/serv-side-encryption.html">S3 Server-Side Encryption</a> for more information. */
		DefaultServerSideEncryption?: DefaultServerSideEncryption;

		/**Describes the public access policies that apply to the S3 bucket. */
		PublicAccess?: PublicAccess;
	}


	/**Contains information about the security groups associated with the EC2 instance. */
	export interface SecurityGroup {
		GroupId?: string;
		GroupName?: string;
	}

	export interface StartMonitoringMembersRequest {
		AccountIds: Array<AccountId>;
	}

	export interface StopMonitoringMembersRequest {
		AccountIds: Array<AccountId>;
	}


	/**Contains information about a tag associated with the EC2 instance. */
	export interface Tag {
		Key?: string;
		Value?: string;
	}

	export interface TagResourceRequest {
		Tags: TagMap;
	}


	/**An instance of a threat intelligence detail that constitutes evidence for the finding. */
	export interface ThreatIntelligenceDetail {
		ThreatListName?: string;
		ThreatNames?: Array<String>;
	}

	export interface UnarchiveFindingsRequest {
		FindingIds: Array<FindingId>;
	}


	/**Contains information about the accounts that weren't processed. */
	export interface UnprocessedAccount {
		AccountId: string;
		Result: string;
	}

	export interface UpdateDetectorRequest {
		Enable?: boolean;
		FindingPublishingFrequency?: UpdateDetectorRequestFindingPublishingFrequency;
	}

	export enum UpdateDetectorRequestFindingPublishingFrequency { FIFTEEN_MINUTES = 0, ONE_HOUR = 1, SIX_HOURS = 2 }

	export interface UpdateFilterRequest {
		Description?: string;
		Action?: UpdateFilterRequestAction;
		Rank?: number;

		/**Contains information about the criteria used for querying findings. */
		FindingCriteria?: FindingCriteria;
	}

	export enum UpdateFilterRequestAction { NOOP = 0, ARCHIVE = 1 }

	export interface UpdateFindingsFeedbackRequest {
		FindingIds: Array<FindingId>;
		Feedback: UpdateFindingsFeedbackRequestFeedback;
		Comments?: string;
	}

	export enum UpdateFindingsFeedbackRequestFeedback { USEFUL = 0, NOT_USEFUL = 1 }

	export interface UpdateIPSetRequest {
		Name?: string;
		Location?: string;
		Activate?: boolean;
	}

	export interface UpdateOrganizationConfigurationRequest {
		AutoEnable: boolean;
	}

	export interface UpdatePublishingDestinationRequest {

		/**Contains the Amazon Resource Name (ARN) of the resource to publish to, such as an S3 bucket, and the ARN of the KMS key to use to encrypt published findings. */
		DestinationProperties?: DestinationProperties;
	}

	export interface UpdateThreatIntelSetRequest {
		Name?: string;
		Location?: string;
		Activate?: boolean;
	}

	export class DemoClient {
		constructor(private baseUri: string = HttpClient.locationOrigin, private httpClient: HttpClientBase = new HttpClient(), private error?: (xhr: JQueryXHR, ajaxOptions: string, thrown: string) => any, private statusCode?: { [key: string]: any; }) {
		}

		/**
		 * Accepts the invitation to be monitored by a master GuardDuty account.
		 * Post /detector/{detectorId}/master
		 * @param {string} detectorId The unique ID of the detector of the GuardDuty member account.
		 * @return {AcceptInvitationResponse} Success
		 */
		AcceptInvitation(detectorId: string, callback: (data : AcceptInvitationResponse) => any, requestBody: AcceptInvitationBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/master', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Provides the details for the GuardDuty master account associated with the current GuardDuty member account.
		 * Get /detector/{detectorId}/master
		 * @param {string} detectorId The unique ID of the detector of the GuardDuty member account.
		 * @return {GetMasterAccountResponse} Success
		 */
		GetMasterAccount(detectorId: string, callback: (data : GetMasterAccountResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/master', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * <p>Archives GuardDuty findings that are specified by the list of finding IDs.</p> <note> <p>Only the master account can archive findings. Member accounts don't have permission to archive findings from their accounts.</p> </note>
		 * Post /detector/{detectorId}/findings/archive
		 * @param {string} detectorId The ID of the detector that specifies the GuardDuty service whose findings you want to archive.
		 * @return {ArchiveFindingsResponse} Success
		 */
		ArchiveFindings(detectorId: string, callback: (data : ArchiveFindingsResponse) => any, requestBody: ArchiveFindingsBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/findings/archive', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Creates a single Amazon GuardDuty detector. A detector is a resource that represents the GuardDuty service. To start using GuardDuty, you must create a detector in each Region where you enable the service. You can have only one detector per account per Region.
		 * Post /detector
		 * @return {CreateDetectorResponse} Success
		 */
		CreateDetector(callback: (data : CreateDetectorResponse) => any, requestBody: CreateDetectorBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/detector', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Lists detectorIds of all the existing Amazon GuardDuty detector resources.
		 * Get /detector
		 * @param {number} maxResults You can use this parameter to indicate the maximum number of items that you want in the response. The default value is 50. The maximum value is 50.
		 * @param {string} nextToken You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDetectorsResponse} Success
		 */
		ListDetectors(maxResults: number, nextToken: string, MaxResults: string, NextToken: string, callback: (data : ListDetectorsResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/detector?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Creates a filter using the specified finding criteria.
		 * Post /detector/{detectorId}/filter
		 * @param {string} detectorId The unique ID of the detector of the GuardDuty account that you want to create a filter for.
		 * @return {CreateFilterResponse} Success
		 */
		CreateFilter(detectorId: string, callback: (data : CreateFilterResponse) => any, requestBody: CreateFilterBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/filter', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Returns a paginated list of the current filters.
		 * Get /detector/{detectorId}/filter
		 * @param {string} detectorId The unique ID of the detector that the filter is associated with.
		 * @param {number} maxResults You can use this parameter to indicate the maximum number of items that you want in the response. The default value is 50. The maximum value is 50.
		 * @param {string} nextToken You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListFiltersResponse} Success
		 */
		ListFilters(detectorId: string, maxResults: number, nextToken: string, MaxResults: string, NextToken: string, callback: (data : ListFiltersResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/filter&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Creates a new IPSet, which is called a trusted IP list in the console user interface. An IPSet is a list of IP addresses that are trusted for secure communication with AWS infrastructure and applications. GuardDuty doesn't generate findings for IP addresses that are included in IPSets. Only users from the master account can use this operation.
		 * Post /detector/{detectorId}/ipset
		 * @param {string} detectorId The unique ID of the detector of the GuardDuty account that you want to create an IPSet for.
		 * @return {CreateIPSetResponse} Success
		 */
		CreateIPSet(detectorId: string, callback: (data : CreateIPSetResponse) => any, requestBody: CreateIPSetBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/ipset', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Lists the IPSets of the GuardDuty service specified by the detector ID. If you use this operation from a member account, the IPSets returned are the IPSets from the associated master account.
		 * Get /detector/{detectorId}/ipset
		 * @param {string} detectorId The unique ID of the detector that the IPSet is associated with.
		 * @param {number} maxResults You can use this parameter to indicate the maximum number of items you want in the response. The default value is 50. The maximum value is 50.
		 * @param {string} nextToken You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListIPSetsResponse} Success
		 */
		ListIPSets(detectorId: string, maxResults: number, nextToken: string, MaxResults: string, NextToken: string, callback: (data : ListIPSetsResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/ipset&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Creates member accounts of the current AWS account by specifying a list of AWS account IDs. The current AWS account can then invite these members to manage GuardDuty in their accounts.
		 * Post /detector/{detectorId}/member
		 * @param {string} detectorId The unique ID of the detector of the GuardDuty account that you want to associate member accounts with.
		 * @return {CreateMembersResponse} Success
		 */
		CreateMembers(detectorId: string, callback: (data : CreateMembersResponse) => any, requestBody: CreateMembersBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/member', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Lists details about all member accounts for the current GuardDuty master account.
		 * Get /detector/{detectorId}/member
		 * @param {string} detectorId The unique ID of the detector the member is associated with.
		 * @param {number} maxResults You can use this parameter to indicate the maximum number of items you want in the response. The default value is 50. The maximum value is 50.
		 * @param {string} nextToken You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data.
		 * @param {string} onlyAssociated Specifies whether to only return associated members or to return all members (including members who haven't been invited yet or have been disassociated).
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListMembersResponse} Success
		 */
		ListMembers(detectorId: string, maxResults: number, nextToken: string, onlyAssociated: string, MaxResults: string, NextToken: string, callback: (data : ListMembersResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/member&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&onlyAssociated=' + (onlyAssociated == null ? '' : encodeURIComponent(onlyAssociated)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Creates a publishing destination to export findings to. The resource to export findings to must exist before you use this operation.
		 * Post /detector/{detectorId}/publishingDestination
		 * @param {string} detectorId The ID of the GuardDuty detector associated with the publishing destination.
		 * @return {CreatePublishingDestinationResponse} Success
		 */
		CreatePublishingDestination(detectorId: string, callback: (data : CreatePublishingDestinationResponse) => any, requestBody: CreatePublishingDestinationBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/publishingDestination', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Returns a list of publishing destinations associated with the specified <code>dectectorId</code>.
		 * Get /detector/{detectorId}/publishingDestination
		 * @param {string} detectorId The ID of the detector to retrieve publishing destinations for.
		 * @param {number} maxResults The maximum number of results to return in the response.
		 * @param {string} nextToken A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the <code>NextToken</code> value returned from the previous request to continue listing results after the first page.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListPublishingDestinationsResponse} Success
		 */
		ListPublishingDestinations(detectorId: string, maxResults: number, nextToken: string, MaxResults: string, NextToken: string, callback: (data : ListPublishingDestinationsResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/publishingDestination&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Generates example findings of types specified by the list of finding types. If 'NULL' is specified for <code>findingTypes</code>, the API generates example findings of all supported finding types.
		 * Post /detector/{detectorId}/findings/create
		 * @param {string} detectorId The ID of the detector to create sample findings for.
		 * @return {CreateSampleFindingsResponse} Success
		 */
		CreateSampleFindings(detectorId: string, callback: (data : CreateSampleFindingsResponse) => any, requestBody: CreateSampleFindingsBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/findings/create', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Creates a new ThreatIntelSet. ThreatIntelSets consist of known malicious IP addresses. GuardDuty generates findings based on ThreatIntelSets. Only users of the master account can use this operation.
		 * Post /detector/{detectorId}/threatintelset
		 * @param {string} detectorId The unique ID of the detector of the GuardDuty account that you want to create a threatIntelSet for.
		 * @return {CreateThreatIntelSetResponse} Success
		 */
		CreateThreatIntelSet(detectorId: string, callback: (data : CreateThreatIntelSetResponse) => any, requestBody: CreateThreatIntelSetBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/threatintelset', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Lists the ThreatIntelSets of the GuardDuty service specified by the detector ID. If you use this operation from a member account, the ThreatIntelSets associated with the master account are returned.
		 * Get /detector/{detectorId}/threatintelset
		 * @param {string} detectorId The unique ID of the detector that the threatIntelSet is associated with.
		 * @param {number} maxResults You can use this parameter to indicate the maximum number of items that you want in the response. The default value is 50. The maximum value is 50.
		 * @param {string} nextToken You can use this parameter to paginate results in the response. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListThreatIntelSetsResponse} Success
		 */
		ListThreatIntelSets(detectorId: string, maxResults: number, nextToken: string, MaxResults: string, NextToken: string, callback: (data : ListThreatIntelSetsResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/threatintelset&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Declines invitations sent to the current member account by AWS accounts specified by their account IDs.
		 * Post /invitation/decline
		 * @return {DeclineInvitationsResponse} Success
		 */
		DeclineInvitations(callback: (data : DeclineInvitationsResponse) => any, requestBody: DeclineInvitationsBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/invitation/decline', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Deletes an Amazon GuardDuty detector that is specified by the detector ID.
		 * Delete /detector/{detectorId}
		 * @param {string} detectorId The unique ID of the detector that you want to delete.
		 * @return {DeleteDetectorResponse} Success
		 */
		DeleteDetector(detectorId: string, callback: (data : DeleteDetectorResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + '/detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Retrieves an Amazon GuardDuty detector specified by the detectorId.
		 * Get /detector/{detectorId}
		 * @param {string} detectorId The unique ID of the detector that you want to get.
		 * @return {GetDetectorResponse} Success
		 */
		GetDetector(detectorId: string, callback: (data : GetDetectorResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Updates the Amazon GuardDuty detector specified by the detectorId.
		 * Post /detector/{detectorId}
		 * @param {string} detectorId The unique ID of the detector to update.
		 * @return {UpdateDetectorResponse} Success
		 */
		UpdateDetector(detectorId: string, callback: (data : UpdateDetectorResponse) => any, requestBody: UpdateDetectorBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Deletes the filter specified by the filter name.
		 * Delete /detector/{detectorId}/filter/{filterName}
		 * @param {string} detectorId The unique ID of the detector that the filter is associated with.
		 * @param {string} filterName The name of the filter that you want to delete.
		 * @return {DeleteFilterResponse} Success
		 */
		DeleteFilter(detectorId: string, filterName: string, callback: (data : DeleteFilterResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + '/detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/filter/' + (filterName == null ? '' : encodeURIComponent(filterName)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Returns the details of the filter specified by the filter name.
		 * Get /detector/{detectorId}/filter/{filterName}
		 * @param {string} detectorId The unique ID of the detector that the filter is associated with.
		 * @param {string} filterName The name of the filter you want to get.
		 * @return {GetFilterResponse} Success
		 */
		GetFilter(detectorId: string, filterName: string, callback: (data : GetFilterResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/filter/' + (filterName == null ? '' : encodeURIComponent(filterName)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Updates the filter specified by the filter name.
		 * Post /detector/{detectorId}/filter/{filterName}
		 * @param {string} detectorId The unique ID of the detector that specifies the GuardDuty service where you want to update a filter.
		 * @param {string} filterName The name of the filter.
		 * @return {UpdateFilterResponse} Success
		 */
		UpdateFilter(detectorId: string, filterName: string, callback: (data : UpdateFilterResponse) => any, requestBody: UpdateFilterBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/filter/' + (filterName == null ? '' : encodeURIComponent(filterName)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Deletes the IPSet specified by the <code>ipSetId</code>. IPSets are called trusted IP lists in the console user interface.
		 * Delete /detector/{detectorId}/ipset/{ipSetId}
		 * @param {string} detectorId The unique ID of the detector associated with the IPSet.
		 * @param {string} ipSetId The unique ID of the IPSet to delete.
		 * @return {DeleteIPSetResponse} Success
		 */
		DeleteIPSet(detectorId: string, ipSetId: string, callback: (data : DeleteIPSetResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + '/detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/ipset/' + (ipSetId == null ? '' : encodeURIComponent(ipSetId)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Retrieves the IPSet specified by the <code>ipSetId</code>.
		 * Get /detector/{detectorId}/ipset/{ipSetId}
		 * @param {string} detectorId The unique ID of the detector that the IPSet is associated with.
		 * @param {string} ipSetId The unique ID of the IPSet to retrieve.
		 * @return {GetIPSetResponse} Success
		 */
		GetIPSet(detectorId: string, ipSetId: string, callback: (data : GetIPSetResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/ipset/' + (ipSetId == null ? '' : encodeURIComponent(ipSetId)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Updates the IPSet specified by the IPSet ID.
		 * Post /detector/{detectorId}/ipset/{ipSetId}
		 * @param {string} detectorId The detectorID that specifies the GuardDuty service whose IPSet you want to update.
		 * @param {string} ipSetId The unique ID that specifies the IPSet that you want to update.
		 * @return {UpdateIPSetResponse} Success
		 */
		UpdateIPSet(detectorId: string, ipSetId: string, callback: (data : UpdateIPSetResponse) => any, requestBody: UpdateIPSetBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/ipset/' + (ipSetId == null ? '' : encodeURIComponent(ipSetId)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Deletes invitations sent to the current member account by AWS accounts specified by their account IDs.
		 * Post /invitation/delete
		 * @return {DeleteInvitationsResponse} Success
		 */
		DeleteInvitations(callback: (data : DeleteInvitationsResponse) => any, requestBody: DeleteInvitationsBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/invitation/delete', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Deletes GuardDuty member accounts (to the current GuardDuty master account) specified by the account IDs.
		 * Post /detector/{detectorId}/member/delete
		 * @param {string} detectorId The unique ID of the detector of the GuardDuty account whose members you want to delete.
		 * @return {DeleteMembersResponse} Success
		 */
		DeleteMembers(detectorId: string, callback: (data : DeleteMembersResponse) => any, requestBody: DeleteMembersBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/member/delete', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Deletes the publishing definition with the specified <code>destinationId</code>.
		 * Delete /detector/{detectorId}/publishingDestination/{destinationId}
		 * @param {string} detectorId The unique ID of the detector associated with the publishing destination to delete.
		 * @param {string} destinationId The ID of the publishing destination to delete.
		 * @return {DeletePublishingDestinationResponse} Success
		 */
		DeletePublishingDestination(detectorId: string, destinationId: string, callback: (data : DeletePublishingDestinationResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + '/detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/publishingDestination/' + (destinationId == null ? '' : encodeURIComponent(destinationId)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Returns information about the publishing destination specified by the provided <code>destinationId</code>.
		 * Get /detector/{detectorId}/publishingDestination/{destinationId}
		 * @param {string} detectorId The unique ID of the detector associated with the publishing destination to retrieve.
		 * @param {string} destinationId The ID of the publishing destination to retrieve.
		 * @return {DescribePublishingDestinationResponse} Success
		 */
		DescribePublishingDestination(detectorId: string, destinationId: string, callback: (data : DescribePublishingDestinationResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/publishingDestination/' + (destinationId == null ? '' : encodeURIComponent(destinationId)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Updates information about the publishing destination specified by the <code>destinationId</code>.
		 * Post /detector/{detectorId}/publishingDestination/{destinationId}
		 * @param {string} detectorId The ID of the detector associated with the publishing destinations to update.
		 * @param {string} destinationId The ID of the publishing destination to update.
		 * @return {UpdatePublishingDestinationResponse} Success
		 */
		UpdatePublishingDestination(detectorId: string, destinationId: string, callback: (data : UpdatePublishingDestinationResponse) => any, requestBody: UpdatePublishingDestinationBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/publishingDestination/' + (destinationId == null ? '' : encodeURIComponent(destinationId)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Deletes the ThreatIntelSet specified by the ThreatIntelSet ID.
		 * Delete /detector/{detectorId}/threatintelset/{threatIntelSetId}
		 * @param {string} detectorId The unique ID of the detector that the threatIntelSet is associated with.
		 * @param {string} threatIntelSetId The unique ID of the threatIntelSet that you want to delete.
		 * @return {DeleteThreatIntelSetResponse} Success
		 */
		DeleteThreatIntelSet(detectorId: string, threatIntelSetId: string, callback: (data : DeleteThreatIntelSetResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + '/detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/threatintelset/' + (threatIntelSetId == null ? '' : encodeURIComponent(threatIntelSetId)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Retrieves the ThreatIntelSet that is specified by the ThreatIntelSet ID.
		 * Get /detector/{detectorId}/threatintelset/{threatIntelSetId}
		 * @param {string} detectorId The unique ID of the detector that the threatIntelSet is associated with.
		 * @param {string} threatIntelSetId The unique ID of the threatIntelSet that you want to get.
		 * @return {GetThreatIntelSetResponse} Success
		 */
		GetThreatIntelSet(detectorId: string, threatIntelSetId: string, callback: (data : GetThreatIntelSetResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/threatintelset/' + (threatIntelSetId == null ? '' : encodeURIComponent(threatIntelSetId)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Updates the ThreatIntelSet specified by the ThreatIntelSet ID.
		 * Post /detector/{detectorId}/threatintelset/{threatIntelSetId}
		 * @param {string} detectorId The detectorID that specifies the GuardDuty service whose ThreatIntelSet you want to update.
		 * @param {string} threatIntelSetId The unique ID that specifies the ThreatIntelSet that you want to update.
		 * @return {UpdateThreatIntelSetResponse} Success
		 */
		UpdateThreatIntelSet(detectorId: string, threatIntelSetId: string, callback: (data : UpdateThreatIntelSetResponse) => any, requestBody: UpdateThreatIntelSetBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/threatintelset/' + (threatIntelSetId == null ? '' : encodeURIComponent(threatIntelSetId)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Returns information about the account selected as the delegated administrator for GuardDuty.
		 * Get /detector/{detectorId}/admin
		 * @param {string} detectorId The ID of the detector to retrieve information about the delegated administrator from.
		 * @return {DescribeOrganizationConfigurationResponse} Success
		 */
		DescribeOrganizationConfiguration(detectorId: string, callback: (data : DescribeOrganizationConfigurationResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/admin', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Updates the delegated administrator account with the values provided.
		 * Post /detector/{detectorId}/admin
		 * @param {string} detectorId The ID of the detector to update the delegated administrator for.
		 * @return {UpdateOrganizationConfigurationResponse} Success
		 */
		UpdateOrganizationConfiguration(detectorId: string, callback: (data : UpdateOrganizationConfigurationResponse) => any, requestBody: UpdateOrganizationConfigurationBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/admin', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Disables an AWS account within the Organization as the GuardDuty delegated administrator.
		 * Post /admin/disable
		 * @return {DisableOrganizationAdminAccountResponse} Success
		 */
		DisableOrganizationAdminAccount(callback: (data : DisableOrganizationAdminAccountResponse) => any, requestBody: DisableOrganizationAdminAccountBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/admin/disable', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Disassociates the current GuardDuty member account from its master account.
		 * Post /detector/{detectorId}/master/disassociate
		 * @param {string} detectorId The unique ID of the detector of the GuardDuty member account.
		 * @return {DisassociateFromMasterAccountResponse} Success
		 */
		DisassociateFromMasterAccount(detectorId: string, callback: (data : DisassociateFromMasterAccountResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/master/disassociate', null, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Disassociates GuardDuty member accounts (to the current GuardDuty master account) specified by the account IDs.
		 * Post /detector/{detectorId}/member/disassociate
		 * @param {string} detectorId The unique ID of the detector of the GuardDuty account whose members you want to disassociate from the master account.
		 * @return {DisassociateMembersResponse} Success
		 */
		DisassociateMembers(detectorId: string, callback: (data : DisassociateMembersResponse) => any, requestBody: DisassociateMembersBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/member/disassociate', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Enables an AWS account within the organization as the GuardDuty delegated administrator.
		 * Post /admin/enable
		 * @return {EnableOrganizationAdminAccountResponse} Success
		 */
		EnableOrganizationAdminAccount(callback: (data : EnableOrganizationAdminAccountResponse) => any, requestBody: EnableOrganizationAdminAccountBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/admin/enable', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Describes Amazon GuardDuty findings specified by finding IDs.
		 * Post /detector/{detectorId}/findings/get
		 * @param {string} detectorId The ID of the detector that specifies the GuardDuty service whose findings you want to retrieve.
		 * @return {GetFindingsResponse} Success
		 */
		GetFindings(detectorId: string, callback: (data : GetFindingsResponse) => any, requestBody: GetFindingsBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/findings/get', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Lists Amazon GuardDuty findings statistics for the specified detector ID.
		 * Post /detector/{detectorId}/findings/statistics
		 * @param {string} detectorId The ID of the detector that specifies the GuardDuty service whose findings' statistics you want to retrieve.
		 * @return {GetFindingsStatisticsResponse} Success
		 */
		GetFindingsStatistics(detectorId: string, callback: (data : GetFindingsStatisticsResponse) => any, requestBody: GetFindingsStatisticsBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/findings/statistics', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Returns the count of all GuardDuty membership invitations that were sent to the current member account except the currently accepted invitation.
		 * Get /invitation/count
		 * @return {GetInvitationsCountResponse} Success
		 */
		GetInvitationsCount(callback: (data : GetInvitationsCountResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/invitation/count', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Retrieves GuardDuty member accounts (to the current GuardDuty master account) specified by the account IDs.
		 * Post /detector/{detectorId}/member/get
		 * @param {string} detectorId The unique ID of the detector of the GuardDuty account whose members you want to retrieve.
		 * @return {GetMembersResponse} Success
		 */
		GetMembers(detectorId: string, callback: (data : GetMembersResponse) => any, requestBody: GetMembersBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/member/get', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Invites other AWS accounts (created as members of the current AWS account by CreateMembers) to enable GuardDuty, and allow the current AWS account to view and manage these accounts' GuardDuty findings on their behalf as the master account.
		 * Post /detector/{detectorId}/member/invite
		 * @param {string} detectorId The unique ID of the detector of the GuardDuty account that you want to invite members with.
		 * @return {InviteMembersResponse} Success
		 */
		InviteMembers(detectorId: string, callback: (data : InviteMembersResponse) => any, requestBody: InviteMembersBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/member/invite', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Lists Amazon GuardDuty findings for the specified detector ID.
		 * Post /detector/{detectorId}/findings
		 * @param {string} detectorId The ID of the detector that specifies the GuardDuty service whose findings you want to list.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListFindingsResponse} Success
		 */
		ListFindings(detectorId: string, MaxResults: string, NextToken: string, callback: (data : ListFindingsResponse) => any, requestBody: ListFindingsBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/findings&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Lists all GuardDuty membership invitations that were sent to the current AWS account.
		 * Get /invitation
		 * @param {number} maxResults You can use this parameter to indicate the maximum number of items that you want in the response. The default value is 50. The maximum value is 50.
		 * @param {string} nextToken You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListInvitationsResponse} Success
		 */
		ListInvitations(maxResults: number, nextToken: string, MaxResults: string, NextToken: string, callback: (data : ListInvitationsResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/invitation?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Lists the accounts configured as GuardDuty delegated administrators.
		 * Get /admin
		 * @param {number} maxResults The maximum number of results to return in the response.
		 * @param {string} nextToken A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the <code>NextToken</code> value returned from the previous request to continue listing results after the first page.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListOrganizationAdminAccountsResponse} Success
		 */
		ListOrganizationAdminAccounts(maxResults: number, nextToken: string, MaxResults: string, NextToken: string, callback: (data : ListOrganizationAdminAccountsResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/admin?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Lists tags for a resource. Tagging is currently supported for detectors, finding filters, IP sets, and threat intel sets, with a limit of 50 tags per resource. When invoked, this operation returns all assigned tags for a given resource.
		 * Get /tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) for the given GuardDuty resource. 
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string, callback: (data : ListTagsForResourceResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Adds tags to a resource.
		 * Post /tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) for the GuardDuty resource to apply a tag to.
		 * @return {void} 
		 */
		TagResource(resourceArn: string, callback: (data : void) => any, requestBody: TagResourceBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Turns on GuardDuty monitoring of the specified member accounts. Use this operation to restart monitoring of accounts that you stopped monitoring with the <code>StopMonitoringMembers</code> operation.
		 * Post /detector/{detectorId}/member/start
		 * @param {string} detectorId The unique ID of the detector of the GuardDuty master account associated with the member accounts to monitor.
		 * @return {StartMonitoringMembersResponse} Success
		 */
		StartMonitoringMembers(detectorId: string, callback: (data : StartMonitoringMembersResponse) => any, requestBody: StartMonitoringMembersBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/member/start', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Stops GuardDuty monitoring for the specified member accounts. Use the <code>StartMonitoringMembers</code> operation to restart monitoring for those accounts.
		 * Post /detector/{detectorId}/member/stop
		 * @param {string} detectorId The unique ID of the detector associated with the GuardDuty master account that is monitoring member accounts.
		 * @return {StopMonitoringMembersResponse} Success
		 */
		StopMonitoringMembers(detectorId: string, callback: (data : StopMonitoringMembersResponse) => any, requestBody: StopMonitoringMembersBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/member/stop', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Unarchives GuardDuty findings specified by the <code>findingIds</code>.
		 * Post /detector/{detectorId}/findings/unarchive
		 * @param {string} detectorId The ID of the detector associated with the findings to unarchive.
		 * @return {UnarchiveFindingsResponse} Success
		 */
		UnarchiveFindings(detectorId: string, callback: (data : UnarchiveFindingsResponse) => any, requestBody: UnarchiveFindingsBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/findings/unarchive', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Removes tags from a resource.
		 * Delete /tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The Amazon Resource Name (ARN) for the resource to remove tags from.
		 * @param {Array<TagKey>} tagKeys The tag keys to remove from the resource.
		 * @return {void} 
		 */
		UntagResource(resourceArn: string, tagKeys: Array<TagKey>, callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + '/tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${z}`).join('&'), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Marks the specified GuardDuty findings as useful or not useful.
		 * Post /detector/{detectorId}/findings/feedback
		 * @param {string} detectorId The ID of the detector associated with the findings to update feedback for.
		 * @return {UpdateFindingsFeedbackResponse} Success
		 */
		UpdateFindingsFeedback(detectorId: string, callback: (data : UpdateFindingsFeedbackResponse) => any, requestBody: UpdateFindingsFeedbackBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/findings/feedback', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}
	}

	export interface AcceptInvitationBody {

		/**The account ID of the master GuardDuty account whose invitation you're accepting. */
		masterId: string;

		/**The value that is used to validate the master account to the member account. */
		invitationId: string;
	}

	export interface ArchiveFindingsBody {

		/**
		 * The IDs of the findings that you want to archive.
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		findingIds: Array<FindingId>;
	}

	export interface CreateDetectorBody {

		/**A Boolean value that specifies whether the detector is to be enabled. */
		enable: boolean;

		/**
		 * The idempotency token for the create request.
		 * Max length: 64
		 * Min length: 0
		 */
		clientToken?: string;

		/**An enum value that specifies how frequently updated findings are exported. */
		findingPublishingFrequency?: CreateDetectorBodyFindingPublishingFrequency;

		/**The tags to be added to a new detector resource. */
		tags?: string;
	}

	export enum CreateDetectorBodyFindingPublishingFrequency { FIFTEEN_MINUTES = 0, ONE_HOUR = 1, SIX_HOURS = 2 }

	export interface CreateFilterBody {

		/**
		 * The name of the filter.
		 * Max length: 64
		 * Min length: 3
		 */
		name: string;

		/**
		 * The description of the filter.
		 * Max length: 512
		 * Min length: 0
		 */
		description?: string;

		/**
		 * Specifies the action that is to be applied to the findings that match the filter.
		 * Max length: 300
		 * Min length: 1
		 */
		action?: CreateFilterBodyAction;

		/**
		 * Specifies the position of the filter in the list of current filters. Also specifies the order in which this filter is applied to the findings.
		 * Minimum: 1
		 * Maximum: 100
		 */
		rank?: number;

		/**Contains information about the criteria used for querying findings. */
		findingCriteria: string;

		/**
		 * The idempotency token for the create request.
		 * Max length: 64
		 * Min length: 0
		 */
		clientToken?: string;

		/**The tags to be added to a new filter resource. */
		tags?: string;
	}

	export enum CreateFilterBodyAction { NOOP = 0, ARCHIVE = 1 }

	export interface CreateIPSetBody {

		/**
		 * <p>The user-friendly name to identify the IPSet.</p> <p> Allowed characters are alphanumerics, spaces, hyphens (-), and underscores (_).</p>
		 * Max length: 300
		 * Min length: 1
		 */
		name: string;

		/**
		 * The format of the file that contains the IPSet.
		 * Max length: 300
		 * Min length: 1
		 */
		format: CreateIPSetBodyFormat;

		/**
		 * The URI of the file that contains the IPSet. For example: https://s3.us-west-2.amazonaws.com/my-bucket/my-object-key.
		 * Max length: 300
		 * Min length: 1
		 */
		location: string;

		/**A Boolean value that indicates whether GuardDuty is to start using the uploaded IPSet. */
		activate: boolean;

		/**
		 * The idempotency token for the create request.
		 * Max length: 64
		 * Min length: 0
		 */
		clientToken?: string;

		/**The tags to be added to a new IP set resource. */
		tags?: string;
	}

	export enum CreateIPSetBodyFormat { TXT = 0, STIX = 1, OTX_CSV = 2, ALIEN_VAULT = 3, PROOF_POINT = 4, FIRE_EYE = 5 }

	export interface CreateMembersBody {

		/**
		 * A list of account ID and email address pairs of the accounts that you want to associate with the master GuardDuty account.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		accountDetails: Array<AccountDetail>;
	}

	export interface CreatePublishingDestinationBody {

		/**
		 * The type of resource for the publishing destination. Currently only Amazon S3 buckets are supported.
		 * Max length: 300
		 * Min length: 1
		 */
		destinationType: CreatePublishingDestinationBodyDestinationType;

		/**Contains the Amazon Resource Name (ARN) of the resource to publish to, such as an S3 bucket, and the ARN of the KMS key to use to encrypt published findings. */
		destinationProperties: string;

		/**
		 * The idempotency token for the request.
		 * Max length: 64
		 * Min length: 0
		 */
		clientToken?: string;
	}

	export enum CreatePublishingDestinationBodyDestinationType { S3 = 0 }

	export interface CreateSampleFindingsBody {

		/**
		 * The types of sample findings to generate.
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		findingTypes?: Array<FindingType>;
	}

	export interface CreateThreatIntelSetBody {

		/**
		 * A user-friendly ThreatIntelSet name displayed in all findings that are generated by activity that involves IP addresses included in this ThreatIntelSet.
		 * Max length: 300
		 * Min length: 1
		 */
		name: string;

		/**
		 * The format of the file that contains the ThreatIntelSet.
		 * Max length: 300
		 * Min length: 1
		 */
		format: CreateThreatIntelSetBodyFormat;

		/**
		 * The URI of the file that contains the ThreatIntelSet. For example: https://s3.us-west-2.amazonaws.com/my-bucket/my-object-key.
		 * Max length: 300
		 * Min length: 1
		 */
		location: string;

		/**A Boolean value that indicates whether GuardDuty is to start using the uploaded ThreatIntelSet. */
		activate: boolean;

		/**
		 * The idempotency token for the create request.
		 * Max length: 64
		 * Min length: 0
		 */
		clientToken?: string;

		/**The tags to be added to a new threat list resource. */
		tags?: string;
	}

	export enum CreateThreatIntelSetBodyFormat { TXT = 0, STIX = 1, OTX_CSV = 2, ALIEN_VAULT = 3, PROOF_POINT = 4, FIRE_EYE = 5 }

	export interface DeclineInvitationsBody {

		/**
		 * A list of account IDs of the AWS accounts that sent invitations to the current member account that you want to decline invitations from.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		accountIds: Array<AccountId>;
	}

	export interface UpdateDetectorBody {

		/**Specifies whether the detector is enabled or not enabled. */
		enable?: boolean;

		/**An enum value that specifies how frequently findings are exported, such as to CloudWatch Events. */
		findingPublishingFrequency?: UpdateDetectorBodyFindingPublishingFrequency;
	}

	export enum UpdateDetectorBodyFindingPublishingFrequency { FIFTEEN_MINUTES = 0, ONE_HOUR = 1, SIX_HOURS = 2 }

	export interface UpdateFilterBody {

		/**
		 * The description of the filter.
		 * Max length: 512
		 * Min length: 0
		 */
		description?: string;

		/**
		 * Specifies the action that is to be applied to the findings that match the filter.
		 * Max length: 300
		 * Min length: 1
		 */
		action?: UpdateFilterBodyAction;

		/**
		 * Specifies the position of the filter in the list of current filters. Also specifies the order in which this filter is applied to the findings.
		 * Minimum: 1
		 * Maximum: 100
		 */
		rank?: number;

		/**Contains information about the criteria used for querying findings. */
		findingCriteria?: string;
	}

	export enum UpdateFilterBodyAction { NOOP = 0, ARCHIVE = 1 }

	export interface UpdateIPSetBody {

		/**
		 * The unique ID that specifies the IPSet that you want to update.
		 * Max length: 300
		 * Min length: 1
		 */
		name?: string;

		/**
		 * The updated URI of the file that contains the IPSet. For example: https://s3.us-west-2.amazonaws.com/my-bucket/my-object-key.
		 * Max length: 300
		 * Min length: 1
		 */
		location?: string;

		/**The updated Boolean value that specifies whether the IPSet is active or not. */
		activate?: boolean;
	}

	export interface DeleteInvitationsBody {

		/**
		 * A list of account IDs of the AWS accounts that sent invitations to the current member account that you want to delete invitations from.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		accountIds: Array<AccountId>;
	}

	export interface DeleteMembersBody {

		/**
		 * A list of account IDs of the GuardDuty member accounts that you want to delete.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		accountIds: Array<AccountId>;
	}

	export interface UpdatePublishingDestinationBody {

		/**Contains the Amazon Resource Name (ARN) of the resource to publish to, such as an S3 bucket, and the ARN of the KMS key to use to encrypt published findings. */
		destinationProperties?: string;
	}

	export interface UpdateThreatIntelSetBody {

		/**
		 * The unique ID that specifies the ThreatIntelSet that you want to update.
		 * Max length: 300
		 * Min length: 1
		 */
		name?: string;

		/**
		 * The updated URI of the file that contains the ThreateIntelSet. For example: https://s3.us-west-2.amazonaws.com/my-bucket/my-object-key.
		 * Max length: 300
		 * Min length: 1
		 */
		location?: string;

		/**The updated Boolean value that specifies whether the ThreateIntelSet is active or not. */
		activate?: boolean;
	}

	export interface UpdateOrganizationConfigurationBody {

		/**Indicates whether to automatically enable member accounts in the organization. */
		autoEnable: boolean;
	}

	export interface DisableOrganizationAdminAccountBody {

		/**The AWS Account ID for the organizations account to be disabled as a GuardDuty delegated administrator. */
		adminAccountId: string;
	}

	export interface DisassociateMembersBody {

		/**
		 * A list of account IDs of the GuardDuty member accounts that you want to disassociate from the master account.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		accountIds: Array<AccountId>;
	}

	export interface EnableOrganizationAdminAccountBody {

		/**The AWS Account ID for the organization account to be enabled as a GuardDuty delegated administrator. */
		adminAccountId: string;
	}

	export interface GetFindingsBody {

		/**
		 * The IDs of the findings that you want to retrieve.
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		findingIds: Array<FindingId>;

		/**Contains information about the criteria used for sorting findings. */
		sortCriteria?: string;
	}

	export interface GetFindingsStatisticsBody {

		/**
		 * The types of finding statistics to retrieve.
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		findingStatisticTypes: Array<FindingStatisticType>;

		/**Contains information about the criteria used for querying findings. */
		findingCriteria?: string;
	}

	export interface GetMembersBody {

		/**
		 * A list of account IDs of the GuardDuty member accounts that you want to describe.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		accountIds: Array<AccountId>;
	}

	export interface InviteMembersBody {

		/**
		 * A list of account IDs of the accounts that you want to invite to GuardDuty as members.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		accountIds: Array<AccountId>;

		/**A Boolean value that specifies whether you want to disable email notification to the accounts that you’re inviting to GuardDuty as members. */
		disableEmailNotification?: boolean;

		/**The invitation message that you want to send to the accounts that you’re inviting to GuardDuty as members. */
		message?: string;
	}

	export interface ListFindingsBody {

		/**Contains information about the criteria used for querying findings. */
		findingCriteria?: string;

		/**Contains information about the criteria used for sorting findings. */
		sortCriteria?: string;

		/**
		 * You can use this parameter to indicate the maximum number of items you want in the response. The default value is 50. The maximum value is 50.
		 * Minimum: 1
		 * Maximum: 50
		 */
		maxResults?: number;

		/**You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data. */
		nextToken?: string;
	}

	export interface TagResourceBody {

		/**The tags to be added to a resource. */
		tags: string;
	}

	export interface StartMonitoringMembersBody {

		/**
		 * A list of account IDs of the GuardDuty member accounts to start monitoring.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		accountIds: Array<AccountId>;
	}

	export interface StopMonitoringMembersBody {

		/**
		 * A list of account IDs for the member accounts to stop monitoring.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		accountIds: Array<AccountId>;
	}

	export interface UnarchiveFindingsBody {

		/**
		 * The IDs of the findings to unarchive.
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		findingIds: Array<FindingId>;
	}

	export interface UpdateFindingsFeedbackBody {

		/**
		 * The IDs of the findings that you want to mark as useful or not useful.
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		findingIds: Array<FindingId>;

		/**The feedback for the finding. */
		feedback: UpdateFindingsFeedbackBodyFeedback;

		/**Additional feedback about the GuardDuty findings. */
		comments?: string;
	}

	export enum UpdateFindingsFeedbackBodyFeedback { USEFUL = 0, NOT_USEFUL = 1 }

}

