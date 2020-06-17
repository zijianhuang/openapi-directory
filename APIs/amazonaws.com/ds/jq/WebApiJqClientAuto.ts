///<reference path="HttpClient.ts" />
namespace My_Demo_Client {
	export interface AcceptSharedDirectoryResult {

		/**Details about the shared directory in the directory owner account for which the share request in the directory consumer account has been accepted. */
		SharedDirectory?: SharedDirectory;
	}

	export interface AcceptSharedDirectoryRequest {
		SharedDirectoryId: string;
	}

	export interface AddIpRoutesRequest {
		DirectoryId: string;
		IpRoutes: Array<IpRoute>;
		UpdateSecurityGroupForDirectoryControllers?: boolean;
	}

	export interface AddTagsToResourceRequest {
		ResourceId: string;
		Tags: Array<Tag>;
	}

	export interface CancelSchemaExtensionRequest {
		DirectoryId: string;
		SchemaExtensionId: string;
	}


	/**Contains the results of the <a>ConnectDirectory</a> operation. */
	export interface ConnectDirectoryResult {
		DirectoryId?: string;
	}


	/**Contains the inputs for the <a>ConnectDirectory</a> operation. */
	export interface ConnectDirectoryRequest {
		Name: string;
		ShortName?: string;
		Password: string;
		Description?: string;
		Size: ConnectDirectoryRequestSize;

		/**Contains information for the <a>ConnectDirectory</a> operation when an AD Connector directory is being created. */
		ConnectSettings: DirectoryConnectSettings;
		Tags?: Array<Tag>;
	}

	export enum ConnectDirectoryRequestSize { Small = 0, Large = 1 }


	/**Contains the results of the <a>CreateAlias</a> operation. */
	export interface CreateAliasResult {
		DirectoryId?: string;
		Alias?: string;
	}


	/**Contains the inputs for the <a>CreateAlias</a> operation. */
	export interface CreateAliasRequest {
		DirectoryId: string;
		Alias: string;
	}


	/**Contains the results for the <a>CreateComputer</a> operation. */
	export interface CreateComputerResult {

		/**Contains information about a computer account in a directory. */
		Computer?: Computer;
	}


	/**Contains the inputs for the <a>CreateComputer</a> operation. */
	export interface CreateComputerRequest {
		DirectoryId: string;
		ComputerName: string;
		Password: string;
		OrganizationalUnitDistinguishedName?: string;
		ComputerAttributes?: Array<Attribute>;
	}


	/**Initiates the creation of a conditional forwarder for your AWS Directory Service for Microsoft Active Directory. Conditional forwarders are required in order to set up a trust relationship with another domain. */
	export interface CreateConditionalForwarderRequest {
		DirectoryId: string;
		RemoteDomainName: string;
		DnsIpAddrs: Array<IpAddr>;
	}


	/**Contains the results of the <a>CreateDirectory</a> operation. */
	export interface CreateDirectoryResult {
		DirectoryId?: string;
	}


	/**Contains the inputs for the <a>CreateDirectory</a> operation.  */
	export interface CreateDirectoryRequest {
		Name: string;
		ShortName?: string;
		Password: string;
		Description?: string;
		Size: CreateDirectoryRequestSize;

		/**Contains VPC information for the <a>CreateDirectory</a> or <a>CreateMicrosoftAD</a> operation. */
		VpcSettings?: DirectoryVpcSettings;
		Tags?: Array<Tag>;
	}

	export enum CreateDirectoryRequestSize { Small = 0, Large = 1 }

	export interface CreateLogSubscriptionRequest {
		DirectoryId: string;
		LogGroupName: string;
	}


	/**Result of a CreateMicrosoftAD request. */
	export interface CreateMicrosoftADResult {
		DirectoryId?: string;
	}


	/**Creates an AWS Managed Microsoft AD directory. */
	export interface CreateMicrosoftADRequest {
		Name: string;
		ShortName?: string;
		Password: string;
		Description?: string;

		/**Contains VPC information for the <a>CreateDirectory</a> or <a>CreateMicrosoftAD</a> operation. */
		VpcSettings: DirectoryVpcSettings;
		Edition?: CreateMicrosoftADRequestEdition;
		Tags?: Array<Tag>;
	}

	export enum CreateMicrosoftADRequestEdition { Enterprise = 0, Standard = 1 }


	/**Contains the results of the <a>CreateSnapshot</a> operation. */
	export interface CreateSnapshotResult {
		SnapshotId?: string;
	}


	/**Contains the inputs for the <a>CreateSnapshot</a> operation. */
	export interface CreateSnapshotRequest {
		DirectoryId: string;
		Name?: string;
	}


	/**The result of a CreateTrust request. */
	export interface CreateTrustResult {
		TrustId?: string;
	}


	/**<p>AWS Directory Service for Microsoft Active Directory allows you to configure trust relationships. For example, you can establish a trust between your AWS Managed Microsoft AD directory, and your existing on-premises Microsoft Active Directory. This would allow you to provide users and groups access to resources in either domain, with a single set of credentials.</p> <p>This action initiates the creation of the AWS side of a trust relationship between an AWS Managed Microsoft AD directory and an external domain.</p> */
	export interface CreateTrustRequest {
		DirectoryId: string;
		RemoteDomainName: string;
		TrustPassword: string;
		TrustDirection: CreateTrustRequestTrustDirection;
		TrustType?: CreateTrustRequestTrustType;
		ConditionalForwarderIpAddrs?: Array<IpAddr>;
		SelectiveAuth?: CreateTrustRequestSelectiveAuth;
	}

	export enum CreateTrustRequestTrustDirection { One-Way: Outgoing = 0, One-Way: Incoming = 1, Two-Way = 2 }

	export enum CreateTrustRequestTrustType { Forest = 0, External = 1 }

	export enum CreateTrustRequestSelectiveAuth { Enabled = 0, Disabled = 1 }


	/**Deletes a conditional forwarder. */
	export interface DeleteConditionalForwarderRequest {
		DirectoryId: string;
		RemoteDomainName: string;
	}


	/**Contains the results of the <a>DeleteDirectory</a> operation. */
	export interface DeleteDirectoryResult {
		DirectoryId?: string;
	}


	/**Contains the inputs for the <a>DeleteDirectory</a> operation. */
	export interface DeleteDirectoryRequest {
		DirectoryId: string;
	}

	export interface DeleteLogSubscriptionRequest {
		DirectoryId: string;
	}


	/**Contains the results of the <a>DeleteSnapshot</a> operation. */
	export interface DeleteSnapshotResult {
		SnapshotId?: string;
	}


	/**Contains the inputs for the <a>DeleteSnapshot</a> operation. */
	export interface DeleteSnapshotRequest {
		SnapshotId: string;
	}


	/**The result of a DeleteTrust request. */
	export interface DeleteTrustResult {
		TrustId?: string;
	}


	/**Deletes the local side of an existing trust relationship between the AWS Managed Microsoft AD directory and the external domain. */
	export interface DeleteTrustRequest {
		TrustId: string;
		DeleteAssociatedConditionalForwarder?: boolean;
	}

	export interface DeregisterCertificateRequest {
		DirectoryId: string;
		CertificateId: string;
	}


	/**Removes the specified directory as a publisher to the specified SNS topic. */
	export interface DeregisterEventTopicRequest {
		DirectoryId: string;
		TopicName: string;
	}

	export interface DescribeCertificateResult {

		/**Information about the certificate. */
		Certificate?: Certificate;
	}

	export interface DescribeCertificateRequest {
		DirectoryId: string;
		CertificateId: string;
	}


	/**The result of a DescribeConditionalForwarder request. */
	export interface DescribeConditionalForwardersResult {
		ConditionalForwarders?: Array<ConditionalForwarder>;
	}


	/**Describes a conditional forwarder. */
	export interface DescribeConditionalForwardersRequest {
		DirectoryId: string;
		RemoteDomainNames?: Array<RemoteDomainName>;
	}


	/**Contains the results of the <a>DescribeDirectories</a> operation. */
	export interface DescribeDirectoriesResult {

		/**A list of directory descriptions. */
		DirectoryDescriptions?: Array<DirectoryDescription>;
		NextToken?: string;
	}


	/**Contains the inputs for the <a>DescribeDirectories</a> operation. */
	export interface DescribeDirectoriesRequest {

		/**A list of directory identifiers. */
		DirectoryIds?: Array<DirectoryId>;
		NextToken?: string;
		Limit?: number;
	}

	export interface DescribeDomainControllersResult {
		DomainControllers?: Array<DomainController>;
		NextToken?: string;
	}

	export interface DescribeDomainControllersRequest {
		DirectoryId: string;
		DomainControllerIds?: Array<DomainControllerId>;
		NextToken?: string;
		Limit?: number;
	}


	/**The result of a DescribeEventTopic request. */
	export interface DescribeEventTopicsResult {
		EventTopics?: Array<EventTopic>;
	}


	/**Describes event topics. */
	export interface DescribeEventTopicsRequest {
		DirectoryId?: string;
		TopicNames?: Array<TopicName>;
	}

	export interface DescribeLDAPSSettingsResult {
		LDAPSSettingsInfo?: Array<LDAPSSettingInfo>;
		NextToken?: string;
	}

	export interface DescribeLDAPSSettingsRequest {
		DirectoryId: string;
		Type?: DescribeLDAPSSettingsRequestType;
		NextToken?: string;
		Limit?: number;
	}

	export enum DescribeLDAPSSettingsRequestType { Client = 0 }

	export interface DescribeSharedDirectoriesResult {
		SharedDirectories?: Array<SharedDirectory>;
		NextToken?: string;
	}

	export interface DescribeSharedDirectoriesRequest {
		OwnerDirectoryId: string;

		/**A list of directory identifiers. */
		SharedDirectoryIds?: Array<DirectoryId>;
		NextToken?: string;
		Limit?: number;
	}


	/**Contains the results of the <a>DescribeSnapshots</a> operation. */
	export interface DescribeSnapshotsResult {

		/**A list of descriptions of directory snapshots. */
		Snapshots?: Array<Snapshot>;
		NextToken?: string;
	}


	/**Contains the inputs for the <a>DescribeSnapshots</a> operation. */
	export interface DescribeSnapshotsRequest {
		DirectoryId?: string;

		/**A list of directory snapshot identifiers. */
		SnapshotIds?: Array<SnapshotId>;
		NextToken?: string;
		Limit?: number;
	}


	/**The result of a DescribeTrust request. */
	export interface DescribeTrustsResult {
		Trusts?: Array<Trust>;
		NextToken?: string;
	}


	/**Describes the trust relationships for a particular AWS Managed Microsoft AD directory. If no input parameters are are provided, such as directory ID or trust ID, this request describes all the trust relationships. */
	export interface DescribeTrustsRequest {
		DirectoryId?: string;
		TrustIds?: Array<TrustId>;
		NextToken?: string;
		Limit?: number;
	}

	export interface DisableLDAPSRequest {
		DirectoryId: string;
		Type: DisableLDAPSRequestType;
	}

	export enum DisableLDAPSRequestType { Client = 0 }


	/**Contains the inputs for the <a>DisableRadius</a> operation. */
	export interface DisableRadiusRequest {
		DirectoryId: string;
	}


	/**Contains the inputs for the <a>DisableSso</a> operation. */
	export interface DisableSsoRequest {
		DirectoryId: string;
		UserName?: string;
		Password?: string;
	}

	export interface EnableLDAPSRequest {
		DirectoryId: string;
		Type: EnableLDAPSRequestType;
	}

	export enum EnableLDAPSRequestType { Client = 0 }


	/**Contains the inputs for the <a>EnableRadius</a> operation. */
	export interface EnableRadiusRequest {
		DirectoryId: string;

		/**Contains information about a Remote Authentication Dial In User Service (RADIUS) server. */
		RadiusSettings: RadiusSettings;
	}


	/**Contains the inputs for the <a>EnableSso</a> operation. */
	export interface EnableSsoRequest {
		DirectoryId: string;
		UserName?: string;
		Password?: string;
	}


	/**Contains the results of the <a>GetDirectoryLimits</a> operation. */
	export interface GetDirectoryLimitsResult {

		/**Contains directory limit information for a Region. */
		DirectoryLimits?: DirectoryLimits;
	}


	/**Contains the results of the <a>GetSnapshotLimits</a> operation. */
	export interface GetSnapshotLimitsResult {

		/**Contains manual snapshot limit information for a directory. */
		SnapshotLimits?: SnapshotLimits;
	}


	/**Contains the inputs for the <a>GetSnapshotLimits</a> operation. */
	export interface GetSnapshotLimitsRequest {
		DirectoryId: string;
	}

	export interface ListCertificatesResult {
		NextToken?: string;
		CertificatesInfo?: Array<CertificateInfo>;
	}

	export interface ListCertificatesRequest {
		DirectoryId: string;
		NextToken?: string;
		Limit?: number;
	}

	export interface ListIpRoutesResult {
		IpRoutesInfo?: Array<IpRouteInfo>;
		NextToken?: string;
	}

	export interface ListIpRoutesRequest {
		DirectoryId: string;
		NextToken?: string;
		Limit?: number;
	}

	export interface ListLogSubscriptionsResult {
		LogSubscriptions?: Array<LogSubscription>;
		NextToken?: string;
	}

	export interface ListLogSubscriptionsRequest {
		DirectoryId?: string;
		NextToken?: string;
		Limit?: number;
	}

	export interface ListSchemaExtensionsResult {
		SchemaExtensionsInfo?: Array<SchemaExtensionInfo>;
		NextToken?: string;
	}

	export interface ListSchemaExtensionsRequest {
		DirectoryId: string;
		NextToken?: string;
		Limit?: number;
	}

	export interface ListTagsForResourceResult {
		Tags?: Array<Tag>;
		NextToken?: string;
	}

	export interface ListTagsForResourceRequest {
		ResourceId: string;
		NextToken?: string;
		Limit?: number;
	}

	export interface RegisterCertificateResult {
		CertificateId?: string;
	}

	export interface RegisterCertificateRequest {
		DirectoryId: string;
		CertificateData: string;
	}


	/**Registers a new event topic. */
	export interface RegisterEventTopicRequest {
		DirectoryId: string;
		TopicName: string;
	}

	export interface RejectSharedDirectoryResult {
		SharedDirectoryId?: string;
	}

	export interface RejectSharedDirectoryRequest {
		SharedDirectoryId: string;
	}

	export interface RemoveIpRoutesRequest {
		DirectoryId: string;
		CidrIps: Array<CidrIp>;
	}

	export interface RemoveTagsFromResourceRequest {
		ResourceId: string;
		TagKeys: Array<TagKey>;
	}

	export interface ResetUserPasswordRequest {
		DirectoryId: string;
		UserName: string;
		NewPassword: string;
	}


	/**An object representing the inputs for the <a>RestoreFromSnapshot</a> operation. */
	export interface RestoreFromSnapshotRequest {
		SnapshotId: string;
	}

	export interface ShareDirectoryResult {
		SharedDirectoryId?: string;
	}

	export interface ShareDirectoryRequest {
		DirectoryId: string;
		ShareNotes?: string;

		/**Identifier that contains details about the directory consumer account. */
		ShareTarget: ShareTarget;
		ShareMethod: ShareDirectoryRequestShareMethod;
	}

	export enum ShareDirectoryRequestShareMethod { ORGANIZATIONS = 0, HANDSHAKE = 1 }

	export interface StartSchemaExtensionResult {
		SchemaExtensionId?: string;
	}

	export interface StartSchemaExtensionRequest {
		DirectoryId: string;
		CreateSnapshotBeforeSchemaExtension: boolean;
		LdifContent: string;
		Description: string;
	}

	export interface UnshareDirectoryResult {
		SharedDirectoryId?: string;
	}

	export interface UnshareDirectoryRequest {
		DirectoryId: string;

		/**Identifier that contains details about the directory consumer account with whom the directory is being unshared. */
		UnshareTarget: UnshareTarget;
	}


	/**Updates a conditional forwarder. */
	export interface UpdateConditionalForwarderRequest {
		DirectoryId: string;
		RemoteDomainName: string;
		DnsIpAddrs: Array<IpAddr>;
	}

	export interface UpdateNumberOfDomainControllersRequest {
		DirectoryId: string;
		DesiredNumber: number;
	}


	/**Contains the inputs for the <a>UpdateRadius</a> operation. */
	export interface UpdateRadiusRequest {
		DirectoryId: string;

		/**Contains information about a Remote Authentication Dial In User Service (RADIUS) server. */
		RadiusSettings: RadiusSettings;
	}

	export interface UpdateTrustResult {

		/**
		 * The AWS request identifier.
		 * Pattern: ^([A-Fa-f0-9]{8}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{12})$
		 */
		RequestId?: string;
		TrustId?: string;
	}

	export interface UpdateTrustRequest {
		TrustId: string;
		SelectiveAuth?: UpdateTrustRequestSelectiveAuth;
	}

	export enum UpdateTrustRequestSelectiveAuth { Enabled = 0, Disabled = 1 }


	/**Result of a VerifyTrust request. */
	export interface VerifyTrustResult {
		TrustId?: string;
	}


	/**Initiates the verification of an existing trust relationship between an AWS Managed Microsoft AD directory and an external domain. */
	export interface VerifyTrustRequest {
		TrustId: string;
	}


	/**Details about the shared directory in the directory owner account for which the share request in the directory consumer account has been accepted. */
	export interface SharedDirectory {
		OwnerAccountId?: string;
		OwnerDirectoryId?: string;
		ShareMethod?: SharedDirectoryShareMethod;
		SharedAccountId?: string;
		SharedDirectoryId?: string;
		ShareStatus?: SharedDirectoryShareStatus;
		ShareNotes?: string;
		CreatedDateTime?: Date;
		LastUpdatedDateTime?: Date;
	}

	export enum SharedDirectoryShareMethod { ORGANIZATIONS = 0, HANDSHAKE = 1 }

	export enum SharedDirectoryShareStatus { Shared = 0, PendingAcceptance = 1, Rejected = 2, Rejecting = 3, RejectFailed = 4, Sharing = 5, ShareFailed = 6, Deleted = 7, Deleting = 8 }


	/**Represents a named directory attribute. */
	export interface Attribute {
		Name?: string;
		Value?: string;
	}

	export enum CertificateState { Registering = 0, Registered = 1, RegisterFailed = 2, Deregistering = 3, Deregistered = 4, DeregisterFailed = 5 }


	/**Information about the certificate. */
	export interface Certificate {
		CertificateId?: string;
		State?: CertificateState;
		StateReason?: string;
		CommonName?: string;
		RegisteredDateTime?: Date;
		ExpiryDateTime?: Date;
	}

	export enum CertificateState { Registering = 0, Registered = 1, RegisterFailed = 2, Deregistering = 3, Deregistered = 4, DeregisterFailed = 5 }


	/**Contains general information about a certificate. */
	export interface CertificateInfo {
		CertificateId?: string;
		CommonName?: string;
		State?: CertificateInfoState;
		ExpiryDateTime?: Date;
	}

	export enum CertificateInfoState { Registering = 0, Registered = 1, RegisterFailed = 2, Deregistering = 3, Deregistered = 4, DeregisterFailed = 5 }


	/**Contains information about a computer account in a directory. */
	export interface Computer {
		ComputerId?: string;
		ComputerName?: string;
		ComputerAttributes?: Array<Attribute>;
	}

	export enum ReplicationScope { Domain = 0 }


	/**Points to a remote domain with which you are setting up a trust relationship. Conditional forwarders are required in order to set up a trust relationship with another domain. */
	export interface ConditionalForwarder {
		RemoteDomainName?: string;
		DnsIpAddrs?: Array<IpAddr>;
		ReplicationScope?: ConditionalForwarderReplicationScope;
	}

	export enum ConditionalForwarderReplicationScope { Domain = 0 }

	export enum DirectorySize { Small = 0, Large = 1 }


	/**Contains information for the <a>ConnectDirectory</a> operation when an AD Connector directory is being created. */
	export interface DirectoryConnectSettings {
		VpcId: string;
		SubnetIds: Array<SubnetId>;
		CustomerDnsIps: Array<IpAddr>;
		CustomerUserName: string;
	}


	/**Contains VPC information for the <a>CreateDirectory</a> or <a>CreateMicrosoftAD</a> operation. */
	export interface DirectoryVpcSettings {
		VpcId: string;
		SubnetIds: Array<SubnetId>;
	}

	export enum DirectoryEdition { Enterprise = 0, Standard = 1 }

	export enum TrustDirection { One-Way: Outgoing = 0, One-Way: Incoming = 1, Two-Way = 2 }

	export enum TrustType { Forest = 0, External = 1 }

	export enum SelectiveAuth { Enabled = 0, Disabled = 1 }

	export enum LDAPSType { Client = 0 }


	/**Contains information about an AD Connector directory. */
	export interface DirectoryConnectSettingsDescription {
		VpcId?: string;
		SubnetIds?: Array<SubnetId>;
		CustomerUserName?: string;
		SecurityGroupId?: string;
		AvailabilityZones?: Array<AvailabilityZone>;
		ConnectIps?: Array<IpAddr>;
	}

	export enum DirectoryStage { Requested = 0, Creating = 1, Created = 2, Active = 3, Inoperable = 4, Impaired = 5, Restoring = 6, RestoreFailed = 7, Deleting = 8, Deleted = 9, Failed = 10 }

	export enum ShareStatus { Shared = 0, PendingAcceptance = 1, Rejected = 2, Rejecting = 3, RejectFailed = 4, Sharing = 5, ShareFailed = 6, Deleted = 7, Deleting = 8 }

	export enum ShareMethod { ORGANIZATIONS = 0, HANDSHAKE = 1 }

	export enum DirectoryType { SimpleAD = 0, ADConnector = 1, MicrosoftAD = 2, SharedMicrosoftAD = 3 }


	/**Contains information about the directory. */
	export interface DirectoryVpcSettingsDescription {
		VpcId?: string;
		SubnetIds?: Array<SubnetId>;
		SecurityGroupId?: string;
		AvailabilityZones?: Array<AvailabilityZone>;
	}


	/**Contains information about a Remote Authentication Dial In User Service (RADIUS) server. */
	export interface RadiusSettings {
		RadiusServers?: Array<Server>;
		RadiusPort?: number;
		RadiusTimeout?: number;
		RadiusRetries?: number;
		SharedSecret?: string;
		AuthenticationProtocol?: RadiusSettingsAuthenticationProtocol;
		DisplayLabel?: string;
		UseSameUsername?: boolean;
	}

	export enum RadiusSettingsAuthenticationProtocol { PAP = 0, CHAP = 1, MS-CHAPv1 = 2, MS-CHAPv2 = 3 }

	export enum RadiusStatus { Creating = 0, Completed = 1, Failed = 2 }


	/**Describes the directory owner account details that have been shared to the directory consumer account. */
	export interface OwnerDirectoryDescription {
		DirectoryId?: string;
		AccountId?: string;
		DnsIpAddrs?: Array<IpAddr>;

		/**Contains information about the directory. */
		VpcSettings?: DirectoryVpcSettingsDescription;

		/**Contains information about a Remote Authentication Dial In User Service (RADIUS) server. */
		RadiusSettings?: RadiusSettings;
		RadiusStatus?: OwnerDirectoryDescriptionRadiusStatus;
	}

	export enum OwnerDirectoryDescriptionRadiusStatus { Creating = 0, Completed = 1, Failed = 2 }


	/**Contains information about an AWS Directory Service directory. */
	export interface DirectoryDescription {
		DirectoryId?: string;
		Name?: string;
		ShortName?: string;
		Size?: DirectoryDescriptionSize;
		Edition?: DirectoryDescriptionEdition;
		Alias?: string;
		AccessUrl?: string;
		Description?: string;
		DnsIpAddrs?: Array<IpAddr>;
		Stage?: DirectoryDescriptionStage;
		ShareStatus?: DirectoryDescriptionShareStatus;
		ShareMethod?: DirectoryDescriptionShareMethod;
		ShareNotes?: string;
		LaunchTime?: Date;
		StageLastUpdatedDateTime?: Date;
		Type?: DirectoryDescriptionType;

		/**Contains information about the directory. */
		VpcSettings?: DirectoryVpcSettingsDescription;

		/**Contains information about an AD Connector directory. */
		ConnectSettings?: DirectoryConnectSettingsDescription;

		/**Contains information about a Remote Authentication Dial In User Service (RADIUS) server. */
		RadiusSettings?: RadiusSettings;
		RadiusStatus?: DirectoryDescriptionRadiusStatus;
		StageReason?: string;
		SsoEnabled?: boolean;
		DesiredNumberOfDomainControllers?: number;

		/**Describes the directory owner account details that have been shared to the directory consumer account. */
		OwnerDirectoryDescription?: OwnerDirectoryDescription;
	}

	export enum DirectoryDescriptionSize { Small = 0, Large = 1 }

	export enum DirectoryDescriptionEdition { Enterprise = 0, Standard = 1 }

	export enum DirectoryDescriptionStage { Requested = 0, Creating = 1, Created = 2, Active = 3, Inoperable = 4, Impaired = 5, Restoring = 6, RestoreFailed = 7, Deleting = 8, Deleted = 9, Failed = 10 }

	export enum DirectoryDescriptionShareStatus { Shared = 0, PendingAcceptance = 1, Rejected = 2, Rejecting = 3, RejectFailed = 4, Sharing = 5, ShareFailed = 6, Deleted = 7, Deleting = 8 }

	export enum DirectoryDescriptionShareMethod { ORGANIZATIONS = 0, HANDSHAKE = 1 }

	export enum DirectoryDescriptionType { SimpleAD = 0, ADConnector = 1, MicrosoftAD = 2, SharedMicrosoftAD = 3 }

	export enum DirectoryDescriptionRadiusStatus { Creating = 0, Completed = 1, Failed = 2 }


	/**Contains directory limit information for a Region. */
	export interface DirectoryLimits {
		CloudOnlyDirectoriesLimit?: number;
		CloudOnlyDirectoriesCurrentCount?: number;
		CloudOnlyDirectoriesLimitReached?: boolean;
		CloudOnlyMicrosoftADLimit?: number;
		CloudOnlyMicrosoftADCurrentCount?: number;
		CloudOnlyMicrosoftADLimitReached?: boolean;
		ConnectedDirectoriesLimit?: number;
		ConnectedDirectoriesCurrentCount?: number;
		ConnectedDirectoriesLimitReached?: boolean;
	}

	export enum DomainControllerStatus { Creating = 0, Active = 1, Impaired = 2, Restoring = 3, Deleting = 4, Deleted = 5, Failed = 6 }


	/**Contains information about the domain controllers for a specified directory. */
	export interface DomainController {
		DirectoryId?: string;
		DomainControllerId?: string;
		DnsIpAddr?: string;
		VpcId?: string;
		SubnetId?: string;
		AvailabilityZone?: string;
		Status?: DomainControllerStatus;
		StatusReason?: string;
		LaunchTime?: Date;
		StatusLastUpdatedDateTime?: Date;
	}

	export enum DomainControllerStatus { Creating = 0, Active = 1, Impaired = 2, Restoring = 3, Deleting = 4, Deleted = 5, Failed = 6 }

	export enum TopicStatus { Registered = 0, Topic not found = 1, Failed = 2, Deleted = 3 }


	/**Information about SNS topic and AWS Directory Service directory associations. */
	export interface EventTopic {
		DirectoryId?: string;
		TopicName?: string;
		TopicArn?: string;
		CreatedDateTime?: Date;
		Status?: EventTopicStatus;
	}

	export enum EventTopicStatus { Registered = 0, Topic not found = 1, Failed = 2, Deleted = 3 }


	/**Contains manual snapshot limit information for a directory. */
	export interface SnapshotLimits {
		ManualSnapshotsLimit?: number;
		ManualSnapshotsCurrentCount?: number;
		ManualSnapshotsLimitReached?: boolean;
	}


	/**IP address block. This is often the address block of the DNS server used for your on-premises domain.  */
	export interface IpRoute {
		CidrIp?: string;
		Description?: string;
	}

	export enum IpRouteStatusMsg { Adding = 0, Added = 1, Removing = 2, Removed = 3, AddFailed = 4, RemoveFailed = 5 }


	/**Information about one or more IP address blocks. */
	export interface IpRouteInfo {
		DirectoryId?: string;
		CidrIp?: string;
		IpRouteStatusMsg?: IpRouteInfoIpRouteStatusMsg;
		AddedDateTime?: Date;
		IpRouteStatusReason?: string;
		Description?: string;
	}

	export enum IpRouteInfoIpRouteStatusMsg { Adding = 0, Added = 1, Removing = 2, Removed = 3, AddFailed = 4, RemoveFailed = 5 }

	export enum LDAPSStatus { Enabling = 0, Enabled = 1, EnableFailed = 2, Disabled = 3 }


	/**Contains general information about the LDAPS settings. */
	export interface LDAPSSettingInfo {
		LDAPSStatus?: LDAPSSettingInfoLDAPSStatus;
		LDAPSStatusReason?: string;
		LastUpdatedDateTime?: Date;
	}

	export enum LDAPSSettingInfoLDAPSStatus { Enabling = 0, Enabled = 1, EnableFailed = 2, Disabled = 3 }


	/**Represents a log subscription, which tracks real-time data from a chosen log group to a specified destination. */
	export interface LogSubscription {
		DirectoryId?: string;
		LogGroupName?: string;
		SubscriptionCreatedDateTime?: Date;
	}

	export enum RadiusAuthenticationProtocol { PAP = 0, CHAP = 1, MS-CHAPv1 = 2, MS-CHAPv2 = 3 }

	export enum SchemaExtensionStatus { Initializing = 0, CreatingSnapshot = 1, UpdatingSchema = 2, Replicating = 3, CancelInProgress = 4, RollbackInProgress = 5, Cancelled = 6, Failed = 7, Completed = 8 }


	/**Information about a schema extension. */
	export interface SchemaExtensionInfo {
		DirectoryId?: string;
		SchemaExtensionId?: string;
		Description?: string;
		SchemaExtensionStatus?: SchemaExtensionInfoSchemaExtensionStatus;
		SchemaExtensionStatusReason?: string;
		StartDateTime?: Date;
		EndDateTime?: Date;
	}

	export enum SchemaExtensionInfoSchemaExtensionStatus { Initializing = 0, CreatingSnapshot = 1, UpdatingSchema = 2, Replicating = 3, CancelInProgress = 4, RollbackInProgress = 5, Cancelled = 6, Failed = 7, Completed = 8 }


	/**Identifier that contains details about the directory consumer account. */
	export interface ShareTarget {
		Id: string;
		Type: ShareTargetType;
	}

	export enum ShareTargetType { ACCOUNT = 0 }

	export enum TargetType { ACCOUNT = 0 }

	export enum SnapshotType { Auto = 0, Manual = 1 }

	export enum SnapshotStatus { Creating = 0, Completed = 1, Failed = 2 }


	/**Describes a directory snapshot. */
	export interface Snapshot {
		DirectoryId?: string;
		SnapshotId?: string;
		Type?: SnapshotType;
		Name?: string;
		Status?: SnapshotStatus;
		StartTime?: Date;
	}

	export enum SnapshotType { Auto = 0, Manual = 1 }

	export enum SnapshotStatus { Creating = 0, Completed = 1, Failed = 2 }


	/**Metadata assigned to a directory consisting of a key-value pair. */
	export interface Tag {
		Key: string;
		Value: string;
	}

	export enum TrustState { Creating = 0, Created = 1, Verifying = 2, VerifyFailed = 3, Verified = 4, Updating = 5, UpdateFailed = 6, Updated = 7, Deleting = 8, Deleted = 9, Failed = 10 }


	/**Describes a trust relationship between an AWS Managed Microsoft AD directory and an external domain. */
	export interface Trust {
		DirectoryId?: string;
		TrustId?: string;
		RemoteDomainName?: string;
		TrustType?: TrustTrustType;
		TrustDirection?: TrustTrustDirection;
		TrustState?: TrustTrustState;
		CreatedDateTime?: Date;
		LastUpdatedDateTime?: Date;
		StateLastUpdatedDateTime?: Date;
		TrustStateReason?: string;
		SelectiveAuth?: TrustSelectiveAuth;
	}

	export enum TrustTrustType { Forest = 0, External = 1 }

	export enum TrustTrustDirection { One-Way: Outgoing = 0, One-Way: Incoming = 1, Two-Way = 2 }

	export enum TrustTrustState { Creating = 0, Created = 1, Verifying = 2, VerifyFailed = 3, Verified = 4, Updating = 5, UpdateFailed = 6, Updated = 7, Deleting = 8, Deleted = 9, Failed = 10 }

	export enum TrustSelectiveAuth { Enabled = 0, Disabled = 1 }


	/**Identifier that contains details about the directory consumer account with whom the directory is being unshared. */
	export interface UnshareTarget {
		Id: string;
		Type: UnshareTargetType;
	}

	export enum UnshareTargetType { ACCOUNT = 0 }

	export class DemoClient {
		constructor(private baseUri: string = HttpClient.locationOrigin, private httpClient: HttpClientBase = new HttpClient(), private error?: (xhr: JQueryXHR, ajaxOptions: string, thrown: string) => any, private statusCode?: { [key: string]: any; }) {
		}

		/**
		 * Accepts a directory sharing request that was sent from the directory owner account.
		 * Post /#X-Amz-Target=DirectoryService_20150416.AcceptSharedDirectory
		 * @return {AcceptSharedDirectoryResult} Success
		 */
		AcceptSharedDirectory(callback: (data : AcceptSharedDirectoryResult) => any, requestBody: AcceptSharedDirectoryRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=DirectoryService_20150416.AcceptSharedDirectory', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>If the DNS server for your on-premises domain uses a publicly addressable IP address, you must add a CIDR address block to correctly route traffic to and from your Microsoft AD on Amazon Web Services. <i>AddIpRoutes</i> adds this address block. You can also use <i>AddIpRoutes</i> to facilitate routing traffic that uses public IP ranges from your Microsoft AD on AWS to a peer VPC. </p> <p>Before you call <i>AddIpRoutes</i>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <i>AddIpRoutes</i> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">AWS Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
		 * Post /#X-Amz-Target=DirectoryService_20150416.AddIpRoutes
		 * @return {AddIpRoutesResult} Success
		 */
		AddIpRoutes(callback: (data : AddIpRoutesResult) => any, requestBody: AddIpRoutesRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=DirectoryService_20150416.AddIpRoutes', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Adds or overwrites one or more tags for the specified directory. Each directory can have a maximum of 50 tags. Each tag consists of a key and optional value. Tag keys must be unique to each resource.
		 * Post /#X-Amz-Target=DirectoryService_20150416.AddTagsToResource
		 * @return {AddTagsToResourceResult} Success
		 */
		AddTagsToResource(callback: (data : AddTagsToResourceResult) => any, requestBody: AddTagsToResourceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=DirectoryService_20150416.AddTagsToResource', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Cancels an in-progress schema extension to a Microsoft AD directory. Once a schema extension has started replicating to all domain controllers, the task can no longer be canceled. A schema extension can be canceled during any of the following states; <code>Initializing</code>, <code>CreatingSnapshot</code>, and <code>UpdatingSchema</code>.
		 * Post /#X-Amz-Target=DirectoryService_20150416.CancelSchemaExtension
		 * @return {CancelSchemaExtensionResult} Success
		 */
		CancelSchemaExtension(callback: (data : CancelSchemaExtensionResult) => any, requestBody: CancelSchemaExtensionRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=DirectoryService_20150416.CancelSchemaExtension', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Creates an AD Connector to connect to an on-premises directory.</p> <p>Before you call <code>ConnectDirectory</code>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <code>ConnectDirectory</code> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">AWS Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
		 * Post /#X-Amz-Target=DirectoryService_20150416.ConnectDirectory
		 * @return {ConnectDirectoryResult} Success
		 */
		ConnectDirectory(callback: (data : ConnectDirectoryResult) => any, requestBody: ConnectDirectoryRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=DirectoryService_20150416.ConnectDirectory', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Creates an alias for a directory and assigns the alias to the directory. The alias is used to construct the access URL for the directory, such as <code>http://&lt;alias&gt;.awsapps.com</code>.</p> <important> <p>After an alias has been created, it cannot be deleted or reused, so this operation should only be used when absolutely necessary.</p> </important>
		 * Post /#X-Amz-Target=DirectoryService_20150416.CreateAlias
		 * @return {CreateAliasResult} Success
		 */
		CreateAlias(callback: (data : CreateAliasResult) => any, requestBody: CreateAliasRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=DirectoryService_20150416.CreateAlias', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Creates a computer account in the specified directory, and joins the computer to the directory.
		 * Post /#X-Amz-Target=DirectoryService_20150416.CreateComputer
		 * @return {CreateComputerResult} Success
		 */
		CreateComputer(callback: (data : CreateComputerResult) => any, requestBody: CreateComputerRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=DirectoryService_20150416.CreateComputer', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Creates a conditional forwarder associated with your AWS directory. Conditional forwarders are required in order to set up a trust relationship with another domain. The conditional forwarder points to the trusted domain.
		 * Post /#X-Amz-Target=DirectoryService_20150416.CreateConditionalForwarder
		 * @return {CreateConditionalForwarderResult} Success
		 */
		CreateConditionalForwarder(callback: (data : CreateConditionalForwarderResult) => any, requestBody: CreateConditionalForwarderRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=DirectoryService_20150416.CreateConditionalForwarder', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Creates a Simple AD directory. For more information, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_simple_ad.html">Simple Active Directory</a> in the <i>AWS Directory Service Admin Guide</i>.</p> <p>Before you call <code>CreateDirectory</code>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <code>CreateDirectory</code> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">AWS Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
		 * Post /#X-Amz-Target=DirectoryService_20150416.CreateDirectory
		 * @return {CreateDirectoryResult} Success
		 */
		CreateDirectory(callback: (data : CreateDirectoryResult) => any, requestBody: CreateDirectoryRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=DirectoryService_20150416.CreateDirectory', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Creates a subscription to forward real-time Directory Service domain controller security logs to the specified Amazon CloudWatch log group in your AWS account.
		 * Post /#X-Amz-Target=DirectoryService_20150416.CreateLogSubscription
		 * @return {CreateLogSubscriptionResult} Success
		 */
		CreateLogSubscription(callback: (data : CreateLogSubscriptionResult) => any, requestBody: CreateLogSubscriptionRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=DirectoryService_20150416.CreateLogSubscription', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Creates a Microsoft AD directory in the AWS Cloud. For more information, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_microsoft_ad.html">AWS Managed Microsoft AD</a> in the <i>AWS Directory Service Admin Guide</i>.</p> <p>Before you call <i>CreateMicrosoftAD</i>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <i>CreateMicrosoftAD</i> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">AWS Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
		 * Post /#X-Amz-Target=DirectoryService_20150416.CreateMicrosoftAD
		 * @return {CreateMicrosoftADResult} Success
		 */
		CreateMicrosoftAD(callback: (data : CreateMicrosoftADResult) => any, requestBody: CreateMicrosoftADRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=DirectoryService_20150416.CreateMicrosoftAD', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Creates a snapshot of a Simple AD or Microsoft AD directory in the AWS cloud.</p> <note> <p>You cannot take snapshots of AD Connector directories.</p> </note>
		 * Post /#X-Amz-Target=DirectoryService_20150416.CreateSnapshot
		 * @return {CreateSnapshotResult} Success
		 */
		CreateSnapshot(callback: (data : CreateSnapshotResult) => any, requestBody: CreateSnapshotRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=DirectoryService_20150416.CreateSnapshot', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>AWS Directory Service for Microsoft Active Directory allows you to configure trust relationships. For example, you can establish a trust between your AWS Managed Microsoft AD directory, and your existing on-premises Microsoft Active Directory. This would allow you to provide users and groups access to resources in either domain, with a single set of credentials.</p> <p>This action initiates the creation of the AWS side of a trust relationship between an AWS Managed Microsoft AD directory and an external domain. You can create either a forest trust or an external trust.</p>
		 * Post /#X-Amz-Target=DirectoryService_20150416.CreateTrust
		 * @return {CreateTrustResult} Success
		 */
		CreateTrust(callback: (data : CreateTrustResult) => any, requestBody: CreateTrustRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=DirectoryService_20150416.CreateTrust', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Deletes a conditional forwarder that has been set up for your AWS directory.
		 * Post /#X-Amz-Target=DirectoryService_20150416.DeleteConditionalForwarder
		 * @return {DeleteConditionalForwarderResult} Success
		 */
		DeleteConditionalForwarder(callback: (data : DeleteConditionalForwarderResult) => any, requestBody: DeleteConditionalForwarderRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=DirectoryService_20150416.DeleteConditionalForwarder', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Deletes an AWS Directory Service directory.</p> <p>Before you call <code>DeleteDirectory</code>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <code>DeleteDirectory</code> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">AWS Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
		 * Post /#X-Amz-Target=DirectoryService_20150416.DeleteDirectory
		 * @return {DeleteDirectoryResult} Success
		 */
		DeleteDirectory(callback: (data : DeleteDirectoryResult) => any, requestBody: DeleteDirectoryRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=DirectoryService_20150416.DeleteDirectory', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Deletes the specified log subscription.
		 * Post /#X-Amz-Target=DirectoryService_20150416.DeleteLogSubscription
		 * @return {DeleteLogSubscriptionResult} Success
		 */
		DeleteLogSubscription(callback: (data : DeleteLogSubscriptionResult) => any, requestBody: DeleteLogSubscriptionRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=DirectoryService_20150416.DeleteLogSubscription', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Deletes a directory snapshot.
		 * Post /#X-Amz-Target=DirectoryService_20150416.DeleteSnapshot
		 * @return {DeleteSnapshotResult} Success
		 */
		DeleteSnapshot(callback: (data : DeleteSnapshotResult) => any, requestBody: DeleteSnapshotRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=DirectoryService_20150416.DeleteSnapshot', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Deletes an existing trust relationship between your AWS Managed Microsoft AD directory and an external domain.
		 * Post /#X-Amz-Target=DirectoryService_20150416.DeleteTrust
		 * @return {DeleteTrustResult} Success
		 */
		DeleteTrust(callback: (data : DeleteTrustResult) => any, requestBody: DeleteTrustRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=DirectoryService_20150416.DeleteTrust', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Deletes from the system the certificate that was registered for a secured LDAP connection.
		 * Post /#X-Amz-Target=DirectoryService_20150416.DeregisterCertificate
		 * @return {DeregisterCertificateResult} Success
		 */
		DeregisterCertificate(callback: (data : DeregisterCertificateResult) => any, requestBody: DeregisterCertificateRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=DirectoryService_20150416.DeregisterCertificate', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Removes the specified directory as a publisher to the specified SNS topic.
		 * Post /#X-Amz-Target=DirectoryService_20150416.DeregisterEventTopic
		 * @return {DeregisterEventTopicResult} Success
		 */
		DeregisterEventTopic(callback: (data : DeregisterEventTopicResult) => any, requestBody: DeregisterEventTopicRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=DirectoryService_20150416.DeregisterEventTopic', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Displays information about the certificate registered for a secured LDAP connection.
		 * Post /#X-Amz-Target=DirectoryService_20150416.DescribeCertificate
		 * @return {DescribeCertificateResult} Success
		 */
		DescribeCertificate(callback: (data : DescribeCertificateResult) => any, requestBody: DescribeCertificateRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=DirectoryService_20150416.DescribeCertificate', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Obtains information about the conditional forwarders for this account.</p> <p>If no input parameters are provided for RemoteDomainNames, this request describes all conditional forwarders for the specified directory ID.</p>
		 * Post /#X-Amz-Target=DirectoryService_20150416.DescribeConditionalForwarders
		 * @return {DescribeConditionalForwardersResult} Success
		 */
		DescribeConditionalForwarders(callback: (data : DescribeConditionalForwardersResult) => any, requestBody: DescribeConditionalForwardersRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=DirectoryService_20150416.DescribeConditionalForwarders', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Obtains information about the directories that belong to this account.</p> <p>You can retrieve information about specific directories by passing the directory identifiers in the <code>DirectoryIds</code> parameter. Otherwise, all directories that belong to the current account are returned.</p> <p>This operation supports pagination with the use of the <code>NextToken</code> request and response parameters. If more results are available, the <code>DescribeDirectoriesResult.NextToken</code> member contains a token that you pass in the next call to <a>DescribeDirectories</a> to retrieve the next set of items.</p> <p>You can also specify a maximum number of return results with the <code>Limit</code> parameter.</p>
		 * Post /#X-Amz-Target=DirectoryService_20150416.DescribeDirectories
		 * @return {DescribeDirectoriesResult} Success
		 */
		DescribeDirectories(callback: (data : DescribeDirectoriesResult) => any, requestBody: DescribeDirectoriesRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=DirectoryService_20150416.DescribeDirectories', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Provides information about any domain controllers in your directory.
		 * Post /#X-Amz-Target=DirectoryService_20150416.DescribeDomainControllers
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeDomainControllersResult} Success
		 */
		DescribeDomainControllers(Limit: string, NextToken: string, callback: (data : DescribeDomainControllersResult) => any, requestBody: DescribeDomainControllersRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=DirectoryService_20150416.DescribeDomainControllers?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Obtains information about which SNS topics receive status messages from the specified directory.</p> <p>If no input parameters are provided, such as DirectoryId or TopicName, this request describes all of the associations in the account.</p>
		 * Post /#X-Amz-Target=DirectoryService_20150416.DescribeEventTopics
		 * @return {DescribeEventTopicsResult} Success
		 */
		DescribeEventTopics(callback: (data : DescribeEventTopicsResult) => any, requestBody: DescribeEventTopicsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=DirectoryService_20150416.DescribeEventTopics', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Describes the status of LDAP security for the specified directory.
		 * Post /#X-Amz-Target=DirectoryService_20150416.DescribeLDAPSSettings
		 * @return {DescribeLDAPSSettingsResult} Success
		 */
		DescribeLDAPSSettings(callback: (data : DescribeLDAPSSettingsResult) => any, requestBody: DescribeLDAPSSettingsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=DirectoryService_20150416.DescribeLDAPSSettings', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Returns the shared directories in your account.
		 * Post /#X-Amz-Target=DirectoryService_20150416.DescribeSharedDirectories
		 * @return {DescribeSharedDirectoriesResult} Success
		 */
		DescribeSharedDirectories(callback: (data : DescribeSharedDirectoriesResult) => any, requestBody: DescribeSharedDirectoriesRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=DirectoryService_20150416.DescribeSharedDirectories', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Obtains information about the directory snapshots that belong to this account.</p> <p>This operation supports pagination with the use of the <i>NextToken</i> request and response parameters. If more results are available, the <i>DescribeSnapshots.NextToken</i> member contains a token that you pass in the next call to <a>DescribeSnapshots</a> to retrieve the next set of items.</p> <p>You can also specify a maximum number of return results with the <i>Limit</i> parameter.</p>
		 * Post /#X-Amz-Target=DirectoryService_20150416.DescribeSnapshots
		 * @return {DescribeSnapshotsResult} Success
		 */
		DescribeSnapshots(callback: (data : DescribeSnapshotsResult) => any, requestBody: DescribeSnapshotsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=DirectoryService_20150416.DescribeSnapshots', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Obtains information about the trust relationships for this account.</p> <p>If no input parameters are provided, such as DirectoryId or TrustIds, this request describes all the trust relationships belonging to the account.</p>
		 * Post /#X-Amz-Target=DirectoryService_20150416.DescribeTrusts
		 * @return {DescribeTrustsResult} Success
		 */
		DescribeTrusts(callback: (data : DescribeTrustsResult) => any, requestBody: DescribeTrustsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=DirectoryService_20150416.DescribeTrusts', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Deactivates LDAP secure calls for the specified directory.
		 * Post /#X-Amz-Target=DirectoryService_20150416.DisableLDAPS
		 * @return {DisableLDAPSResult} Success
		 */
		DisableLDAPS(callback: (data : DisableLDAPSResult) => any, requestBody: DisableLDAPSRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=DirectoryService_20150416.DisableLDAPS', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Disables multi-factor authentication (MFA) with the Remote Authentication Dial In User Service (RADIUS) server for an AD Connector or Microsoft AD directory.
		 * Post /#X-Amz-Target=DirectoryService_20150416.DisableRadius
		 * @return {DisableRadiusResult} Success
		 */
		DisableRadius(callback: (data : DisableRadiusResult) => any, requestBody: DisableRadiusRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=DirectoryService_20150416.DisableRadius', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Disables single-sign on for a directory.
		 * Post /#X-Amz-Target=DirectoryService_20150416.DisableSso
		 * @return {DisableSsoResult} Success
		 */
		DisableSso(callback: (data : DisableSsoResult) => any, requestBody: DisableSsoRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=DirectoryService_20150416.DisableSso', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Activates the switch for the specific directory to always use LDAP secure calls.
		 * Post /#X-Amz-Target=DirectoryService_20150416.EnableLDAPS
		 * @return {EnableLDAPSResult} Success
		 */
		EnableLDAPS(callback: (data : EnableLDAPSResult) => any, requestBody: EnableLDAPSRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=DirectoryService_20150416.EnableLDAPS', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Enables multi-factor authentication (MFA) with the Remote Authentication Dial In User Service (RADIUS) server for an AD Connector or Microsoft AD directory.
		 * Post /#X-Amz-Target=DirectoryService_20150416.EnableRadius
		 * @return {EnableRadiusResult} Success
		 */
		EnableRadius(callback: (data : EnableRadiusResult) => any, requestBody: EnableRadiusRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=DirectoryService_20150416.EnableRadius', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Enables single sign-on for a directory. Single sign-on allows users in your directory to access certain AWS services from a computer joined to the directory without having to enter their credentials separately.
		 * Post /#X-Amz-Target=DirectoryService_20150416.EnableSso
		 * @return {EnableSsoResult} Success
		 */
		EnableSso(callback: (data : EnableSsoResult) => any, requestBody: EnableSsoRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=DirectoryService_20150416.EnableSso', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Obtains directory limit information for the current Region.
		 * Post /#X-Amz-Target=DirectoryService_20150416.GetDirectoryLimits
		 * @return {GetDirectoryLimitsResult} Success
		 */
		GetDirectoryLimits(callback: (data : GetDirectoryLimitsResult) => any, requestBody: GetDirectoryLimitsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=DirectoryService_20150416.GetDirectoryLimits', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Obtains the manual snapshot limits for a directory.
		 * Post /#X-Amz-Target=DirectoryService_20150416.GetSnapshotLimits
		 * @return {GetSnapshotLimitsResult} Success
		 */
		GetSnapshotLimits(callback: (data : GetSnapshotLimitsResult) => any, requestBody: GetSnapshotLimitsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=DirectoryService_20150416.GetSnapshotLimits', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * For the specified directory, lists all the certificates registered for a secured LDAP connection.
		 * Post /#X-Amz-Target=DirectoryService_20150416.ListCertificates
		 * @return {ListCertificatesResult} Success
		 */
		ListCertificates(callback: (data : ListCertificatesResult) => any, requestBody: ListCertificatesRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=DirectoryService_20150416.ListCertificates', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Lists the address blocks that you have added to a directory.
		 * Post /#X-Amz-Target=DirectoryService_20150416.ListIpRoutes
		 * @return {ListIpRoutesResult} Success
		 */
		ListIpRoutes(callback: (data : ListIpRoutesResult) => any, requestBody: ListIpRoutesRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=DirectoryService_20150416.ListIpRoutes', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Lists the active log subscriptions for the AWS account.
		 * Post /#X-Amz-Target=DirectoryService_20150416.ListLogSubscriptions
		 * @return {ListLogSubscriptionsResult} Success
		 */
		ListLogSubscriptions(callback: (data : ListLogSubscriptionsResult) => any, requestBody: ListLogSubscriptionsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=DirectoryService_20150416.ListLogSubscriptions', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Lists all schema extensions applied to a Microsoft AD Directory.
		 * Post /#X-Amz-Target=DirectoryService_20150416.ListSchemaExtensions
		 * @return {ListSchemaExtensionsResult} Success
		 */
		ListSchemaExtensions(callback: (data : ListSchemaExtensionsResult) => any, requestBody: ListSchemaExtensionsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=DirectoryService_20150416.ListSchemaExtensions', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Lists all tags on a directory.
		 * Post /#X-Amz-Target=DirectoryService_20150416.ListTagsForResource
		 * @return {ListTagsForResourceResult} Success
		 */
		ListTagsForResource(callback: (data : ListTagsForResourceResult) => any, requestBody: ListTagsForResourceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=DirectoryService_20150416.ListTagsForResource', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Registers a certificate for secured LDAP connection.
		 * Post /#X-Amz-Target=DirectoryService_20150416.RegisterCertificate
		 * @return {RegisterCertificateResult} Success
		 */
		RegisterCertificate(callback: (data : RegisterCertificateResult) => any, requestBody: RegisterCertificateRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=DirectoryService_20150416.RegisterCertificate', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Associates a directory with an SNS topic. This establishes the directory as a publisher to the specified SNS topic. You can then receive email or text (SMS) messages when the status of your directory changes. You get notified if your directory goes from an Active status to an Impaired or Inoperable status. You also receive a notification when the directory returns to an Active status.
		 * Post /#X-Amz-Target=DirectoryService_20150416.RegisterEventTopic
		 * @return {RegisterEventTopicResult} Success
		 */
		RegisterEventTopic(callback: (data : RegisterEventTopicResult) => any, requestBody: RegisterEventTopicRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=DirectoryService_20150416.RegisterEventTopic', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Rejects a directory sharing request that was sent from the directory owner account.
		 * Post /#X-Amz-Target=DirectoryService_20150416.RejectSharedDirectory
		 * @return {RejectSharedDirectoryResult} Success
		 */
		RejectSharedDirectory(callback: (data : RejectSharedDirectoryResult) => any, requestBody: RejectSharedDirectoryRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=DirectoryService_20150416.RejectSharedDirectory', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Removes IP address blocks from a directory.
		 * Post /#X-Amz-Target=DirectoryService_20150416.RemoveIpRoutes
		 * @return {RemoveIpRoutesResult} Success
		 */
		RemoveIpRoutes(callback: (data : RemoveIpRoutesResult) => any, requestBody: RemoveIpRoutesRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=DirectoryService_20150416.RemoveIpRoutes', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Removes tags from a directory.
		 * Post /#X-Amz-Target=DirectoryService_20150416.RemoveTagsFromResource
		 * @return {RemoveTagsFromResourceResult} Success
		 */
		RemoveTagsFromResource(callback: (data : RemoveTagsFromResourceResult) => any, requestBody: RemoveTagsFromResourceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=DirectoryService_20150416.RemoveTagsFromResource', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Resets the password for any user in your AWS Managed Microsoft AD or Simple AD directory.</p> <p>You can reset the password for any user in your directory with the following exceptions:</p> <ul> <li> <p>For Simple AD, you cannot reset the password for any user that is a member of either the <b>Domain Admins</b> or <b>Enterprise Admins</b> group except for the administrator user.</p> </li> <li> <p>For AWS Managed Microsoft AD, you can only reset the password for a user that is in an OU based off of the NetBIOS name that you typed when you created your directory. For example, you cannot reset the password for a user in the <b>AWS Reserved</b> OU. For more information about the OU structure for an AWS Managed Microsoft AD directory, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/ms_ad_getting_started_what_gets_created.html">What Gets Created</a> in the <i>AWS Directory Service Administration Guide</i>.</p> </li> </ul>
		 * Post /#X-Amz-Target=DirectoryService_20150416.ResetUserPassword
		 * @return {ResetUserPasswordResult} Success
		 */
		ResetUserPassword(callback: (data : ResetUserPasswordResult) => any, requestBody: ResetUserPasswordRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=DirectoryService_20150416.ResetUserPassword', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Restores a directory using an existing directory snapshot.</p> <p>When you restore a directory from a snapshot, any changes made to the directory after the snapshot date are overwritten.</p> <p>This action returns as soon as the restore operation is initiated. You can monitor the progress of the restore operation by calling the <a>DescribeDirectories</a> operation with the directory identifier. When the <b>DirectoryDescription.Stage</b> value changes to <code>Active</code>, the restore operation is complete.</p>
		 * Post /#X-Amz-Target=DirectoryService_20150416.RestoreFromSnapshot
		 * @return {RestoreFromSnapshotResult} Success
		 */
		RestoreFromSnapshot(callback: (data : RestoreFromSnapshotResult) => any, requestBody: RestoreFromSnapshotRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=DirectoryService_20150416.RestoreFromSnapshot', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Shares a specified directory (<code>DirectoryId</code>) in your AWS account (directory owner) with another AWS account (directory consumer). With this operation you can use your directory from any AWS account and from any Amazon VPC within an AWS Region.</p> <p>When you share your AWS Managed Microsoft AD directory, AWS Directory Service creates a shared directory in the directory consumer account. This shared directory contains the metadata to provide access to the directory within the directory owner account. The shared directory is visible in all VPCs in the directory consumer account.</p> <p>The <code>ShareMethod</code> parameter determines whether the specified directory can be shared between AWS accounts inside the same AWS organization (<code>ORGANIZATIONS</code>). It also determines whether you can share the directory with any other AWS account either inside or outside of the organization (<code>HANDSHAKE</code>).</p> <p>The <code>ShareNotes</code> parameter is only used when <code>HANDSHAKE</code> is called, which sends a directory sharing request to the directory consumer. </p>
		 * Post /#X-Amz-Target=DirectoryService_20150416.ShareDirectory
		 * @return {ShareDirectoryResult} Success
		 */
		ShareDirectory(callback: (data : ShareDirectoryResult) => any, requestBody: ShareDirectoryRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=DirectoryService_20150416.ShareDirectory', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Applies a schema extension to a Microsoft AD directory.
		 * Post /#X-Amz-Target=DirectoryService_20150416.StartSchemaExtension
		 * @return {StartSchemaExtensionResult} Success
		 */
		StartSchemaExtension(callback: (data : StartSchemaExtensionResult) => any, requestBody: StartSchemaExtensionRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=DirectoryService_20150416.StartSchemaExtension', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Stops the directory sharing between the directory owner and consumer accounts.
		 * Post /#X-Amz-Target=DirectoryService_20150416.UnshareDirectory
		 * @return {UnshareDirectoryResult} Success
		 */
		UnshareDirectory(callback: (data : UnshareDirectoryResult) => any, requestBody: UnshareDirectoryRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=DirectoryService_20150416.UnshareDirectory', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Updates a conditional forwarder that has been set up for your AWS directory.
		 * Post /#X-Amz-Target=DirectoryService_20150416.UpdateConditionalForwarder
		 * @return {UpdateConditionalForwarderResult} Success
		 */
		UpdateConditionalForwarder(callback: (data : UpdateConditionalForwarderResult) => any, requestBody: UpdateConditionalForwarderRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=DirectoryService_20150416.UpdateConditionalForwarder', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Adds or removes domain controllers to or from the directory. Based on the difference between current value and new value (provided through this API call), domain controllers will be added or removed. It may take up to 45 minutes for any new domain controllers to become fully active once the requested number of domain controllers is updated. During this time, you cannot make another update request.
		 * Post /#X-Amz-Target=DirectoryService_20150416.UpdateNumberOfDomainControllers
		 * @return {UpdateNumberOfDomainControllersResult} Success
		 */
		UpdateNumberOfDomainControllers(callback: (data : UpdateNumberOfDomainControllersResult) => any, requestBody: UpdateNumberOfDomainControllersRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=DirectoryService_20150416.UpdateNumberOfDomainControllers', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Updates the Remote Authentication Dial In User Service (RADIUS) server information for an AD Connector or Microsoft AD directory.
		 * Post /#X-Amz-Target=DirectoryService_20150416.UpdateRadius
		 * @return {UpdateRadiusResult} Success
		 */
		UpdateRadius(callback: (data : UpdateRadiusResult) => any, requestBody: UpdateRadiusRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=DirectoryService_20150416.UpdateRadius', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Updates the trust that has been set up between your AWS Managed Microsoft AD directory and an on-premises Active Directory.
		 * Post /#X-Amz-Target=DirectoryService_20150416.UpdateTrust
		 * @return {UpdateTrustResult} Success
		 */
		UpdateTrust(callback: (data : UpdateTrustResult) => any, requestBody: UpdateTrustRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=DirectoryService_20150416.UpdateTrust', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>AWS Directory Service for Microsoft Active Directory allows you to configure and verify trust relationships.</p> <p>This action verifies a trust relationship between your AWS Managed Microsoft AD directory and an external domain.</p>
		 * Post /#X-Amz-Target=DirectoryService_20150416.VerifyTrust
		 * @return {VerifyTrustResult} Success
		 */
		VerifyTrust(callback: (data : VerifyTrustResult) => any, requestBody: VerifyTrustRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=DirectoryService_20150416.VerifyTrust', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}
	}

}

