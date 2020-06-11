export namespace My_Demo_Client {
	export interface AssociateFleetRequest {
		FleetName: string;
		StackName: string;
	}

	export interface BatchAssociateUserStackResult {
		errors?: Array<UserStackAssociationError>;
	}

	export interface BatchAssociateUserStackRequest {
		UserStackAssociations: Array<UserStackAssociation>;
	}

	export interface BatchDisassociateUserStackResult {
		errors?: Array<UserStackAssociationError>;
	}

	export interface BatchDisassociateUserStackRequest {
		UserStackAssociations: Array<UserStackAssociation>;
	}

	export interface CopyImageResponse {
		DestinationImageName?: string;
	}

	export interface CopyImageRequest {
		SourceImageName: string;
		DestinationImageName: string;
		DestinationRegion: string;
		DestinationImageDescription?: string;
	}

	export interface CreateDirectoryConfigResult {

		/**Describes the configuration information required to join fleets and image builders to Microsoft Active Directory domains. */
		DirectoryConfig?: DirectoryConfig;
	}

	export interface CreateDirectoryConfigRequest {
		DirectoryName: string;
		OrganizationalUnitDistinguishedNames: Array<OrganizationalUnitDistinguishedName>;

		/**Describes the credentials for the service account used by the fleet or image builder to connect to the directory. */
		ServiceAccountCredentials: ServiceAccountCredentials;
	}

	export interface CreateFleetResult {

		/**Describes a fleet. */
		Fleet?: Fleet;
	}

	export interface CreateFleetRequest {
		Name: string;
		ImageName?: string;
		ImageArn?: string;
		InstanceType: string;
		FleetType?: CreateFleetRequestFleetType;

		/**Describes the capacity for a fleet. */
		ComputeCapacity: ComputeCapacity;

		/**Describes VPC configuration information for fleets and image builders. */
		VpcConfig?: VpcConfig;
		MaxUserDurationInSeconds?: number;
		DisconnectTimeoutInSeconds?: number;
		Description?: string;
		DisplayName?: string;
		EnableDefaultInternetAccess?: boolean;

		/**Describes the configuration information required to join fleets and image builders to Microsoft Active Directory domains. */
		DomainJoinInfo?: DomainJoinInfo;
		Tags?: Tags;
		IdleDisconnectTimeoutInSeconds?: number;
		IamRoleArn?: string;
	}

	export enum CreateFleetRequestFleetType { ALWAYS_ON = 0, ON_DEMAND = 1 }

	export interface CreateImageBuilderResult {

		/**Describes a virtual machine that is used to create an image. */
		ImageBuilder?: ImageBuilder;
	}

	export interface CreateImageBuilderRequest {
		Name: string;
		ImageName?: string;
		ImageArn?: string;
		InstanceType: string;
		Description?: string;
		DisplayName?: string;

		/**Describes VPC configuration information for fleets and image builders. */
		VpcConfig?: VpcConfig;
		IamRoleArn?: string;
		EnableDefaultInternetAccess?: boolean;

		/**Describes the configuration information required to join fleets and image builders to Microsoft Active Directory domains. */
		DomainJoinInfo?: DomainJoinInfo;
		AppstreamAgentVersion?: string;
		Tags?: Tags;
		AccessEndpoints?: Array<AccessEndpoint>;
	}

	export interface CreateImageBuilderStreamingURLResult {
		StreamingURL?: string;
		Expires?: Date;
	}

	export interface CreateImageBuilderStreamingURLRequest {
		Name: string;
		Validity?: number;
	}

	export interface CreateStackResult {

		/**Describes a stack. */
		Stack?: Stack;
	}

	export interface CreateStackRequest {
		Name: string;
		Description?: string;
		DisplayName?: string;

		/**The storage connectors. */
		StorageConnectors?: Array<StorageConnector>;
		RedirectURL?: string;
		FeedbackURL?: string;
		UserSettings?: Array<UserSetting>;

		/**The persistent application settings for users of a stack. */
		ApplicationSettings?: ApplicationSettings;
		Tags?: Tags;
		AccessEndpoints?: Array<AccessEndpoint>;
		EmbedHostDomains?: Array<EmbedHostDomain>;
	}

	export interface CreateStreamingURLResult {
		StreamingURL?: string;
		Expires?: Date;
	}

	export interface CreateStreamingURLRequest {
		StackName: string;
		FleetName: string;
		UserId: string;
		ApplicationId?: string;
		Validity?: number;
		SessionContext?: string;
	}

	export interface CreateUsageReportSubscriptionResult {
		S3BucketName?: string;
		Schedule?: CreateUsageReportSubscriptionResultSchedule;
	}

	export enum CreateUsageReportSubscriptionResultSchedule { DAILY = 0 }

	export interface CreateUserRequest {
		UserName: string;
		MessageAction?: CreateUserRequestMessageAction;
		FirstName?: string;
		LastName?: string;
		AuthenticationType: CreateUserRequestAuthenticationType;
	}

	export enum CreateUserRequestMessageAction { SUPPRESS = 0, RESEND = 1 }

	export enum CreateUserRequestAuthenticationType { API = 0, SAML = 1, USERPOOL = 2 }

	export interface DeleteDirectoryConfigRequest {
		DirectoryName: string;
	}

	export interface DeleteFleetRequest {
		Name: string;
	}

	export interface DeleteImageResult {

		/**Describes an image. */
		Image?: Image;
	}

	export interface DeleteImageRequest {
		Name: string;
	}

	export interface DeleteImageBuilderResult {

		/**Describes a virtual machine that is used to create an image. */
		ImageBuilder?: ImageBuilder;
	}

	export interface DeleteImageBuilderRequest {
		Name: string;
	}

	export interface DeleteImagePermissionsRequest {
		Name: string;
		SharedAccountId: string;
	}

	export interface DeleteStackRequest {
		Name: string;
	}

	export interface DeleteUserRequest {
		UserName: string;
		AuthenticationType: DeleteUserRequestAuthenticationType;
	}

	export enum DeleteUserRequestAuthenticationType { API = 0, SAML = 1, USERPOOL = 2 }

	export interface DescribeDirectoryConfigsResult {
		DirectoryConfigs?: Array<DirectoryConfig>;
		NextToken?: string;
	}

	export interface DescribeDirectoryConfigsRequest {
		DirectoryNames?: Array<DirectoryName>;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface DescribeFleetsResult {

		/**The fleets. */
		Fleets?: Array<Fleet>;
		NextToken?: string;
	}

	export interface DescribeFleetsRequest {
		Names?: Array<String>;
		NextToken?: string;
	}

	export interface DescribeImageBuildersResult {
		ImageBuilders?: Array<ImageBuilder>;
		NextToken?: string;
	}

	export interface DescribeImageBuildersRequest {
		Names?: Array<String>;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface DescribeImagePermissionsResult {
		Name?: string;
		SharedImagePermissionsList?: Array<SharedImagePermissions>;
		NextToken?: string;
	}

	export interface DescribeImagePermissionsRequest {
		Name: string;
		MaxResults?: number;
		SharedAwsAccountIds?: Array<AwsAccountId>;
		NextToken?: string;
	}

	export interface DescribeImagesResult {
		Images?: Array<Image>;
		NextToken?: string;
	}

	export interface DescribeImagesRequest {
		Names?: Array<String>;
		Arns?: Array<Arn>;
		Type?: DescribeImagesRequestType;
		NextToken?: string;
		MaxResults?: number;
	}

	export enum DescribeImagesRequestType { PUBLIC = 0, PRIVATE = 1, SHARED = 2 }

	export interface DescribeSessionsResult {

		/**List of sessions. */
		Sessions?: Array<Session>;
		NextToken?: string;
	}

	export interface DescribeSessionsRequest {
		StackName: string;
		FleetName: string;
		UserId?: string;
		NextToken?: string;
		Limit?: number;
		AuthenticationType?: DescribeSessionsRequestAuthenticationType;
	}

	export enum DescribeSessionsRequestAuthenticationType { API = 0, SAML = 1, USERPOOL = 2 }

	export interface DescribeStacksResult {

		/**The stacks. */
		Stacks?: Array<Stack>;
		NextToken?: string;
	}

	export interface DescribeStacksRequest {
		Names?: Array<String>;
		NextToken?: string;
	}

	export interface DescribeUsageReportSubscriptionsResult {
		UsageReportSubscriptions?: Array<UsageReportSubscription>;
		NextToken?: string;
	}

	export interface DescribeUsageReportSubscriptionsRequest {
		MaxResults?: number;
		NextToken?: string;
	}

	export interface DescribeUserStackAssociationsResult {
		UserStackAssociations?: Array<UserStackAssociation>;
		NextToken?: string;
	}

	export interface DescribeUserStackAssociationsRequest {
		StackName?: string;
		UserName?: string;
		AuthenticationType?: DescribeUserStackAssociationsRequestAuthenticationType;
		MaxResults?: number;
		NextToken?: string;
	}

	export enum DescribeUserStackAssociationsRequestAuthenticationType { API = 0, SAML = 1, USERPOOL = 2 }

	export interface DescribeUsersResult {
		Users?: Array<User>;
		NextToken?: string;
	}

	export interface DescribeUsersRequest {
		AuthenticationType: DescribeUsersRequestAuthenticationType;
		MaxResults?: number;
		NextToken?: string;
	}

	export enum DescribeUsersRequestAuthenticationType { API = 0, SAML = 1, USERPOOL = 2 }

	export interface DisableUserRequest {
		UserName: string;
		AuthenticationType: DisableUserRequestAuthenticationType;
	}

	export enum DisableUserRequestAuthenticationType { API = 0, SAML = 1, USERPOOL = 2 }

	export interface DisassociateFleetRequest {
		FleetName: string;
		StackName: string;
	}

	export interface EnableUserRequest {
		UserName: string;
		AuthenticationType: EnableUserRequestAuthenticationType;
	}

	export enum EnableUserRequestAuthenticationType { API = 0, SAML = 1, USERPOOL = 2 }

	export interface ExpireSessionRequest {
		SessionId: string;
	}

	export interface ListAssociatedFleetsResult {
		Names?: Array<String>;
		NextToken?: string;
	}

	export interface ListAssociatedFleetsRequest {
		StackName: string;
		NextToken?: string;
	}

	export interface ListAssociatedStacksResult {
		Names?: Array<String>;
		NextToken?: string;
	}

	export interface ListAssociatedStacksRequest {
		FleetName: string;
		NextToken?: string;
	}

	export interface ListTagsForResourceResponse {
		Tags?: Tags;
	}

	export interface ListTagsForResourceRequest {
		ResourceArn: string;
	}

	export interface StartFleetRequest {
		Name: string;
	}

	export interface StartImageBuilderResult {

		/**Describes a virtual machine that is used to create an image. */
		ImageBuilder?: ImageBuilder;
	}

	export interface StartImageBuilderRequest {
		Name: string;
		AppstreamAgentVersion?: string;
	}

	export interface StopFleetRequest {
		Name: string;
	}

	export interface StopImageBuilderResult {

		/**Describes a virtual machine that is used to create an image. */
		ImageBuilder?: ImageBuilder;
	}

	export interface StopImageBuilderRequest {
		Name: string;
	}

	export interface TagResourceRequest {
		ResourceArn: string;
		Tags: Tags;
	}

	export interface UntagResourceRequest {
		ResourceArn: string;
		TagKeys: Array<TagKey>;
	}

	export interface UpdateDirectoryConfigResult {

		/**Describes the configuration information required to join fleets and image builders to Microsoft Active Directory domains. */
		DirectoryConfig?: DirectoryConfig;
	}

	export interface UpdateDirectoryConfigRequest {
		DirectoryName: string;
		OrganizationalUnitDistinguishedNames?: Array<OrganizationalUnitDistinguishedName>;

		/**Describes the credentials for the service account used by the fleet or image builder to connect to the directory. */
		ServiceAccountCredentials?: ServiceAccountCredentials;
	}

	export interface UpdateFleetResult {

		/**Describes a fleet. */
		Fleet?: Fleet;
	}

	export interface UpdateFleetRequest {
		ImageName?: string;
		ImageArn?: string;
		Name?: string;
		InstanceType?: string;

		/**Describes the capacity for a fleet. */
		ComputeCapacity?: ComputeCapacity;

		/**Describes VPC configuration information for fleets and image builders. */
		VpcConfig?: VpcConfig;
		MaxUserDurationInSeconds?: number;
		DisconnectTimeoutInSeconds?: number;
		DeleteVpcConfig?: boolean;
		Description?: string;
		DisplayName?: string;
		EnableDefaultInternetAccess?: boolean;

		/**Describes the configuration information required to join fleets and image builders to Microsoft Active Directory domains. */
		DomainJoinInfo?: DomainJoinInfo;
		IdleDisconnectTimeoutInSeconds?: number;

		/**The fleet attributes. */
		AttributesToDelete?: Array<FleetAttribute>;
		IamRoleArn?: string;
	}

	export interface UpdateImagePermissionsRequest {
		Name: string;
		SharedAccountId: string;

		/**Describes the permissions for an image. */
		ImagePermissions: ImagePermissions;
	}

	export interface UpdateStackResult {

		/**Describes a stack. */
		Stack?: Stack;
	}

	export interface UpdateStackRequest {
		DisplayName?: string;
		Description?: string;
		Name: string;

		/**The storage connectors. */
		StorageConnectors?: Array<StorageConnector>;
		DeleteStorageConnectors?: boolean;
		RedirectURL?: string;
		FeedbackURL?: string;
		AttributesToDelete?: Array<StackAttribute>;
		UserSettings?: Array<UserSetting>;

		/**The persistent application settings for users of a stack. */
		ApplicationSettings?: ApplicationSettings;
		AccessEndpoints?: Array<AccessEndpoint>;
		EmbedHostDomains?: Array<EmbedHostDomain>;
	}

	export enum AccessEndpointType { STREAMING = 0 }


	/**Describes an interface VPC endpoint (interface endpoint) that lets you create a private connection between the virtual private cloud (VPC) that you specify and AppStream 2.0. When you specify an interface endpoint for a stack, users of the stack can connect to AppStream 2.0 only through that endpoint. When you specify an interface endpoint for an image builder, administrators can connect to the image builder only through that endpoint. */
	export interface AccessEndpoint {
		EndpointType: AccessEndpointEndpointType;
		VpceId?: string;
	}

	export enum AccessEndpointEndpointType { STREAMING = 0 }

	export enum Action { CLIPBOARD_COPY_FROM_LOCAL_DEVICE = 0, CLIPBOARD_COPY_TO_LOCAL_DEVICE = 1, FILE_UPLOAD = 2, FILE_DOWNLOAD = 3, PRINTING_TO_LOCAL_DEVICE = 4 }


	/**Describes an application in the application catalog. */
	export interface Application {
		Name?: string;
		DisplayName?: string;
		IconURL?: string;
		LaunchPath?: string;
		LaunchParameters?: string;
		Enabled?: boolean;
		Metadata?: Metadata;
	}


	/**The persistent application settings for users of a stack. */
	export interface ApplicationSettings {
		Enabled: boolean;
		SettingsGroup?: string;
	}


	/**Describes the persistent application settings for users of a stack. */
	export interface ApplicationSettingsResponse {
		Enabled?: boolean;
		SettingsGroup?: string;
		S3BucketName?: string;
	}

	export enum AuthenticationType { API = 0, SAML = 1, USERPOOL = 2 }


	/**Describes the capacity for a fleet. */
	export interface ComputeCapacity {
		DesiredInstances: number;
	}


	/**Describes the capacity status for a fleet. */
	export interface ComputeCapacityStatus {
		Desired: number;
		Running?: number;
		InUse?: number;
		Available?: number;
	}


	/**Describes the credentials for the service account used by the fleet or image builder to connect to the directory. */
	export interface ServiceAccountCredentials {
		AccountName: string;
		AccountPassword: string;
	}


	/**Describes the configuration information required to join fleets and image builders to Microsoft Active Directory domains. */
	export interface DirectoryConfig {
		DirectoryName: string;
		OrganizationalUnitDistinguishedNames?: Array<OrganizationalUnitDistinguishedName>;

		/**Describes the credentials for the service account used by the fleet or image builder to connect to the directory. */
		ServiceAccountCredentials?: ServiceAccountCredentials;
		CreatedTime?: Date;
	}

	export enum FleetType { ALWAYS_ON = 0, ON_DEMAND = 1 }


	/**Describes VPC configuration information for fleets and image builders. */
	export interface VpcConfig {

		/**The subnet identifiers. */
		SubnetIds?: Array<String>;

		/**
		 * The security group identifiers.
		 * Maximum items: 5
		 */
		SecurityGroupIds?: Array<String>;
	}


	/**Describes the configuration information required to join fleets and image builders to Microsoft Active Directory domains. */
	export interface DomainJoinInfo {
		DirectoryName?: string;
		OrganizationalUnitDistinguishedName?: string;
	}


	/**Describes a fleet. */
	export interface Fleet {
		Arn: string;
		Name: string;
		DisplayName?: string;
		Description?: string;
		ImageName?: string;
		ImageArn?: string;
		InstanceType: string;
		FleetType?: FleetFleetType;

		/**Describes the capacity status for a fleet. */
		ComputeCapacityStatus: ComputeCapacityStatus;
		MaxUserDurationInSeconds?: number;
		DisconnectTimeoutInSeconds?: number;
		State: FleetState;

		/**Describes VPC configuration information for fleets and image builders. */
		VpcConfig?: VpcConfig;
		CreatedTime?: Date;
		FleetErrors?: Array<FleetError>;
		EnableDefaultInternetAccess?: boolean;

		/**Describes the configuration information required to join fleets and image builders to Microsoft Active Directory domains. */
		DomainJoinInfo?: DomainJoinInfo;
		IdleDisconnectTimeoutInSeconds?: number;
		IamRoleArn?: string;
	}

	export enum FleetFleetType { ALWAYS_ON = 0, ON_DEMAND = 1 }

	export enum FleetState { STARTING = 0, RUNNING = 1, STOPPING = 2, STOPPED = 3 }


	/**Describes a virtual machine that is used to create an image.  */
	export interface ImageBuilder {
		Name: string;
		Arn?: string;
		ImageArn?: string;
		Description?: string;
		DisplayName?: string;

		/**Describes VPC configuration information for fleets and image builders. */
		VpcConfig?: VpcConfig;
		InstanceType?: string;
		Platform?: ImageBuilderPlatform;
		IamRoleArn?: string;
		State?: ImageBuilderState;

		/**Describes the reason why the last image builder state change occurred. */
		StateChangeReason?: ImageBuilderStateChangeReason;
		CreatedTime?: Date;
		EnableDefaultInternetAccess?: boolean;

		/**Describes the configuration information required to join fleets and image builders to Microsoft Active Directory domains. */
		DomainJoinInfo?: DomainJoinInfo;

		/**Describes the network details of the fleet or image builder instance. */
		NetworkAccessConfiguration?: NetworkAccessConfiguration;
		ImageBuilderErrors?: Array<ResourceError>;
		AppstreamAgentVersion?: string;
		AccessEndpoints?: Array<AccessEndpoint>;
	}

	export enum ImageBuilderPlatform { WINDOWS = 0, WINDOWS_SERVER_2016 = 1, WINDOWS_SERVER_2019 = 2 }

	export enum ImageBuilderState { PENDING = 0, UPDATING_AGENT = 1, RUNNING = 2, STOPPING = 3, STOPPED = 4, REBOOTING = 5, SNAPSHOTTING = 6, DELETING = 7, FAILED = 8 }


	/**Describes a stack. */
	export interface Stack {
		Arn?: string;
		Name: string;
		Description?: string;
		DisplayName?: string;
		CreatedTime?: Date;

		/**The storage connectors. */
		StorageConnectors?: Array<StorageConnector>;
		RedirectURL?: string;
		FeedbackURL?: string;

		/**The stack errors. */
		StackErrors?: Array<StackError>;
		UserSettings?: Array<UserSetting>;

		/**Describes the persistent application settings for users of a stack. */
		ApplicationSettings?: ApplicationSettingsResponse;
		AccessEndpoints?: Array<AccessEndpoint>;
		EmbedHostDomains?: Array<EmbedHostDomain>;
	}

	export enum UsageReportSchedule { DAILY = 0 }

	export enum MessageAction { SUPPRESS = 0, RESEND = 1 }


	/**Describes an image. */
	export interface Image {
		Name: string;
		Arn?: string;
		BaseImageArn?: string;
		DisplayName?: string;
		State?: ImageState;
		Visibility?: ImageVisibility;
		ImageBuilderSupported?: boolean;
		ImageBuilderName?: string;
		Platform?: ImagePlatform;
		Description?: string;

		/**Describes the reason why the last image state change occurred. */
		StateChangeReason?: ImageStateChangeReason;
		Applications?: Array<Application>;
		CreatedTime?: Date;
		PublicBaseImageReleasedDate?: Date;
		AppstreamAgentVersion?: string;

		/**Describes the permissions for an image. */
		ImagePermissions?: ImagePermissions;
	}

	export enum ImageState { PENDING = 0, AVAILABLE = 1, FAILED = 2, COPYING = 3, DELETING = 4 }

	export enum ImageVisibility { PUBLIC = 0, PRIVATE = 1, SHARED = 2 }

	export enum ImagePlatform { WINDOWS = 0, WINDOWS_SERVER_2016 = 1, WINDOWS_SERVER_2019 = 2 }

	export enum VisibilityType { PUBLIC = 0, PRIVATE = 1, SHARED = 2 }

	export enum FleetState { STARTING = 0, RUNNING = 1, STOPPING = 2, STOPPED = 3 }


	/**The fleet attribute. */
	export enum FleetAttribute { VPC_CONFIGURATION = 0, VPC_CONFIGURATION_SECURITY_GROUP_IDS = 1, DOMAIN_JOIN_INFO = 2, IAM_ROLE_ARN = 3 }

	export enum FleetErrorCode { IAM_SERVICE_ROLE_MISSING_ENI_DESCRIBE_ACTION = 0, IAM_SERVICE_ROLE_MISSING_ENI_CREATE_ACTION = 1, IAM_SERVICE_ROLE_MISSING_ENI_DELETE_ACTION = 2, NETWORK_INTERFACE_LIMIT_EXCEEDED = 3, INTERNAL_SERVICE_ERROR = 4, IAM_SERVICE_ROLE_IS_MISSING = 5, MACHINE_ROLE_IS_MISSING = 6, STS_DISABLED_IN_REGION = 7, SUBNET_HAS_INSUFFICIENT_IP_ADDRESSES = 8, IAM_SERVICE_ROLE_MISSING_DESCRIBE_SUBNET_ACTION = 9, SUBNET_NOT_FOUND = 10, IMAGE_NOT_FOUND = 11, INVALID_SUBNET_CONFIGURATION = 12, SECURITY_GROUPS_NOT_FOUND = 13, IGW_NOT_ATTACHED = 14, IAM_SERVICE_ROLE_MISSING_DESCRIBE_SECURITY_GROUPS_ACTION = 15, DOMAIN_JOIN_ERROR_FILE_NOT_FOUND = 16, DOMAIN_JOIN_ERROR_ACCESS_DENIED = 17, DOMAIN_JOIN_ERROR_LOGON_FAILURE = 18, DOMAIN_JOIN_ERROR_INVALID_PARAMETER = 19, DOMAIN_JOIN_ERROR_MORE_DATA = 20, DOMAIN_JOIN_ERROR_NO_SUCH_DOMAIN = 21, DOMAIN_JOIN_ERROR_NOT_SUPPORTED = 22, DOMAIN_JOIN_NERR_INVALID_WORKGROUP_NAME = 23, DOMAIN_JOIN_NERR_WORKSTATION_NOT_STARTED = 24, DOMAIN_JOIN_ERROR_DS_MACHINE_ACCOUNT_QUOTA_EXCEEDED = 25, DOMAIN_JOIN_NERR_PASSWORD_EXPIRED = 26, DOMAIN_JOIN_INTERNAL_SERVICE_ERROR = 27 }


	/**Describes a fleet error. */
	export interface FleetError {
		ErrorCode?: FleetErrorErrorCode;
		ErrorMessage?: string;
	}

	export enum FleetErrorErrorCode { IAM_SERVICE_ROLE_MISSING_ENI_DESCRIBE_ACTION = 0, IAM_SERVICE_ROLE_MISSING_ENI_CREATE_ACTION = 1, IAM_SERVICE_ROLE_MISSING_ENI_DELETE_ACTION = 2, NETWORK_INTERFACE_LIMIT_EXCEEDED = 3, INTERNAL_SERVICE_ERROR = 4, IAM_SERVICE_ROLE_IS_MISSING = 5, MACHINE_ROLE_IS_MISSING = 6, STS_DISABLED_IN_REGION = 7, SUBNET_HAS_INSUFFICIENT_IP_ADDRESSES = 8, IAM_SERVICE_ROLE_MISSING_DESCRIBE_SUBNET_ACTION = 9, SUBNET_NOT_FOUND = 10, IMAGE_NOT_FOUND = 11, INVALID_SUBNET_CONFIGURATION = 12, SECURITY_GROUPS_NOT_FOUND = 13, IGW_NOT_ATTACHED = 14, IAM_SERVICE_ROLE_MISSING_DESCRIBE_SECURITY_GROUPS_ACTION = 15, DOMAIN_JOIN_ERROR_FILE_NOT_FOUND = 16, DOMAIN_JOIN_ERROR_ACCESS_DENIED = 17, DOMAIN_JOIN_ERROR_LOGON_FAILURE = 18, DOMAIN_JOIN_ERROR_INVALID_PARAMETER = 19, DOMAIN_JOIN_ERROR_MORE_DATA = 20, DOMAIN_JOIN_ERROR_NO_SUCH_DOMAIN = 21, DOMAIN_JOIN_ERROR_NOT_SUPPORTED = 22, DOMAIN_JOIN_NERR_INVALID_WORKGROUP_NAME = 23, DOMAIN_JOIN_NERR_WORKSTATION_NOT_STARTED = 24, DOMAIN_JOIN_ERROR_DS_MACHINE_ACCOUNT_QUOTA_EXCEEDED = 25, DOMAIN_JOIN_NERR_PASSWORD_EXPIRED = 26, DOMAIN_JOIN_INTERNAL_SERVICE_ERROR = 27 }

	export enum ImageState { PENDING = 0, AVAILABLE = 1, FAILED = 2, COPYING = 3, DELETING = 4 }

	export enum PlatformType { WINDOWS = 0, WINDOWS_SERVER_2016 = 1, WINDOWS_SERVER_2019 = 2 }


	/**Describes the reason why the last image state change occurred. */
	export interface ImageStateChangeReason {
		Code?: ImageStateChangeReasonCode;
		Message?: string;
	}

	export enum ImageStateChangeReasonCode { INTERNAL_ERROR = 0, IMAGE_BUILDER_NOT_AVAILABLE = 1, IMAGE_COPY_FAILURE = 2 }


	/**Describes the permissions for an image.  */
	export interface ImagePermissions {
		allowFleet?: boolean;
		allowImageBuilder?: boolean;
	}

	export enum ImageBuilderState { PENDING = 0, UPDATING_AGENT = 1, RUNNING = 2, STOPPING = 3, STOPPED = 4, REBOOTING = 5, SNAPSHOTTING = 6, DELETING = 7, FAILED = 8 }


	/**Describes the reason why the last image builder state change occurred. */
	export interface ImageBuilderStateChangeReason {
		Code?: ImageBuilderStateChangeReasonCode;
		Message?: string;
	}

	export enum ImageBuilderStateChangeReasonCode { INTERNAL_ERROR = 0, IMAGE_UNAVAILABLE = 1 }


	/**Describes the network details of the fleet or image builder instance. */
	export interface NetworkAccessConfiguration {
		EniPrivateIpAddress?: string;
		EniId?: string;
	}

	export enum ImageBuilderStateChangeReasonCode { INTERNAL_ERROR = 0, IMAGE_UNAVAILABLE = 1 }

	export enum ImageStateChangeReasonCode { INTERNAL_ERROR = 0, IMAGE_BUILDER_NOT_AVAILABLE = 1, IMAGE_COPY_FAILURE = 2 }

	export enum UsageReportExecutionErrorCode { RESOURCE_NOT_FOUND = 0, ACCESS_DENIED = 1, INTERNAL_SERVICE_ERROR = 2 }


	/**Describes the error that is returned when a usage report can't be generated. */
	export interface LastReportGenerationExecutionError {
		ErrorCode?: LastReportGenerationExecutionErrorErrorCode;
		ErrorMessage?: string;
	}

	export enum LastReportGenerationExecutionErrorErrorCode { RESOURCE_NOT_FOUND = 0, ACCESS_DENIED = 1, INTERNAL_SERVICE_ERROR = 2 }

	export enum Permission { ENABLED = 0, DISABLED = 1 }


	/**Describes a resource error. */
	export interface ResourceError {
		ErrorCode?: ResourceErrorErrorCode;
		ErrorMessage?: string;
		ErrorTimestamp?: Date;
	}

	export enum ResourceErrorErrorCode { IAM_SERVICE_ROLE_MISSING_ENI_DESCRIBE_ACTION = 0, IAM_SERVICE_ROLE_MISSING_ENI_CREATE_ACTION = 1, IAM_SERVICE_ROLE_MISSING_ENI_DELETE_ACTION = 2, NETWORK_INTERFACE_LIMIT_EXCEEDED = 3, INTERNAL_SERVICE_ERROR = 4, IAM_SERVICE_ROLE_IS_MISSING = 5, MACHINE_ROLE_IS_MISSING = 6, STS_DISABLED_IN_REGION = 7, SUBNET_HAS_INSUFFICIENT_IP_ADDRESSES = 8, IAM_SERVICE_ROLE_MISSING_DESCRIBE_SUBNET_ACTION = 9, SUBNET_NOT_FOUND = 10, IMAGE_NOT_FOUND = 11, INVALID_SUBNET_CONFIGURATION = 12, SECURITY_GROUPS_NOT_FOUND = 13, IGW_NOT_ATTACHED = 14, IAM_SERVICE_ROLE_MISSING_DESCRIBE_SECURITY_GROUPS_ACTION = 15, DOMAIN_JOIN_ERROR_FILE_NOT_FOUND = 16, DOMAIN_JOIN_ERROR_ACCESS_DENIED = 17, DOMAIN_JOIN_ERROR_LOGON_FAILURE = 18, DOMAIN_JOIN_ERROR_INVALID_PARAMETER = 19, DOMAIN_JOIN_ERROR_MORE_DATA = 20, DOMAIN_JOIN_ERROR_NO_SUCH_DOMAIN = 21, DOMAIN_JOIN_ERROR_NOT_SUPPORTED = 22, DOMAIN_JOIN_NERR_INVALID_WORKGROUP_NAME = 23, DOMAIN_JOIN_NERR_WORKSTATION_NOT_STARTED = 24, DOMAIN_JOIN_ERROR_DS_MACHINE_ACCOUNT_QUOTA_EXCEEDED = 25, DOMAIN_JOIN_NERR_PASSWORD_EXPIRED = 26, DOMAIN_JOIN_INTERNAL_SERVICE_ERROR = 27 }


	/**Possible values for the state of a streaming session. */
	export enum SessionState { ACTIVE = 0, PENDING = 1, EXPIRED = 2 }

	export enum SessionConnectionState { CONNECTED = 0, NOT_CONNECTED = 1 }


	/**Describes a streaming session. */
	export interface Session {
		Id: string;
		UserId: string;
		StackName: string;
		FleetName: string;

		/**Possible values for the state of a streaming session. */
		State: SessionState;
		ConnectionState?: SessionConnectionState;
		StartTime?: Date;
		MaxExpirationTime?: Date;
		AuthenticationType?: SessionAuthenticationType;

		/**Describes the network details of the fleet or image builder instance. */
		NetworkAccessConfiguration?: NetworkAccessConfiguration;
	}

	export enum SessionState { ACTIVE = 0, PENDING = 1, EXPIRED = 2 }

	export enum SessionConnectionState { CONNECTED = 0, NOT_CONNECTED = 1 }

	export enum SessionAuthenticationType { API = 0, SAML = 1, USERPOOL = 2 }


	/**Describes the permissions that are available to the specified AWS account for a shared image. */
	export interface SharedImagePermissions {
		sharedAccountId: string;

		/**Describes the permissions for an image. */
		imagePermissions: ImagePermissions;
	}

	export enum StackAttribute { STORAGE_CONNECTORS = 0, STORAGE_CONNECTOR_HOMEFOLDERS = 1, STORAGE_CONNECTOR_GOOGLE_DRIVE = 2, STORAGE_CONNECTOR_ONE_DRIVE = 3, REDIRECT_URL = 4, FEEDBACK_URL = 5, THEME_NAME = 6, USER_SETTINGS = 7, EMBED_HOST_DOMAINS = 8, IAM_ROLE_ARN = 9, ACCESS_ENDPOINTS = 10 }

	export enum StackErrorCode { STORAGE_CONNECTOR_ERROR = 0, INTERNAL_SERVICE_ERROR = 1 }


	/**Describes a stack error. */
	export interface StackError {
		ErrorCode?: StackErrorErrorCode;
		ErrorMessage?: string;
	}

	export enum StackErrorErrorCode { STORAGE_CONNECTOR_ERROR = 0, INTERNAL_SERVICE_ERROR = 1 }


	/**The type of storage connector. */
	export enum StorageConnectorType { HOMEFOLDERS = 0, GOOGLE_DRIVE = 1, ONE_DRIVE = 2 }


	/**Describes a connector that enables persistent storage for users. */
	export interface StorageConnector {

		/**The type of storage connector. */
		ConnectorType: StorageConnectorConnectorType;

		/**
		 * The ARN of the resource.
		 * Min length: 1
		 */
		ResourceIdentifier?: string;
		Domains?: Array<Domain>;
	}

	export enum StorageConnectorConnectorType { HOMEFOLDERS = 0, GOOGLE_DRIVE = 1, ONE_DRIVE = 2 }


	/**Describes information about the usage report subscription. */
	export interface UsageReportSubscription {
		S3BucketName?: string;
		Schedule?: UsageReportSubscriptionSchedule;
		LastGeneratedReportDate?: Date;
		SubscriptionErrors?: Array<LastReportGenerationExecutionError>;
	}

	export enum UsageReportSubscriptionSchedule { DAILY = 0 }


	/**Describes a user in the user pool. */
	export interface User {
		Arn?: string;
		UserName?: string;
		Enabled?: boolean;
		Status?: string;
		FirstName?: string;
		LastName?: string;
		CreatedTime?: Date;
		AuthenticationType: UserAuthenticationType;
	}

	export enum UserAuthenticationType { API = 0, SAML = 1, USERPOOL = 2 }


	/**Describes an action and whether the action is enabled or disabled for users during their streaming sessions. */
	export interface UserSetting {
		Action: UserSettingAction;
		Permission: UserSettingPermission;
	}

	export enum UserSettingAction { CLIPBOARD_COPY_FROM_LOCAL_DEVICE = 0, CLIPBOARD_COPY_TO_LOCAL_DEVICE = 1, FILE_UPLOAD = 2, FILE_DOWNLOAD = 3, PRINTING_TO_LOCAL_DEVICE = 4 }

	export enum UserSettingPermission { ENABLED = 0, DISABLED = 1 }


	/**Describes a user in the user pool and the associated stack. */
	export interface UserStackAssociation {
		StackName: string;
		UserName: string;
		AuthenticationType: UserStackAssociationAuthenticationType;
		SendEmailNotification?: boolean;
	}

	export enum UserStackAssociationAuthenticationType { API = 0, SAML = 1, USERPOOL = 2 }

	export enum UserStackAssociationErrorCode { STACK_NOT_FOUND = 0, USER_NAME_NOT_FOUND = 1, INTERNAL_ERROR = 2 }


	/**Describes the error that is returned when a user can’t be associated with or disassociated from a stack.  */
	export interface UserStackAssociationError {

		/**Describes a user in the user pool and the associated stack. */
		UserStackAssociation?: UserStackAssociation;
		ErrorCode?: UserStackAssociationErrorErrorCode;
		ErrorMessage?: string;
	}

	export enum UserStackAssociationErrorErrorCode { STACK_NOT_FOUND = 0, USER_NAME_NOT_FOUND = 1, INTERNAL_ERROR = 2 }

	export class DemoClient {
		constructor(private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/') {
		}

		/**
		 * Associates the specified fleet with the specified stack.
		 * Post /#X-Amz-Target=PhotonAdminProxyService.AssociateFleet
		 * @return {AssociateFleetResult} Success
		 */
		AssociateFleet(requestBody: AssociateFleetRequest, headersHandler?: () => {[header: string]: string}): Promise<AssociateFleetResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=PhotonAdminProxyService.AssociateFleet', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Associates the specified users with the specified stacks. Users in a user pool cannot be assigned to stacks with fleets that are joined to an Active Directory domain.
		 * Post /#X-Amz-Target=PhotonAdminProxyService.BatchAssociateUserStack
		 * @return {BatchAssociateUserStackResult} Success
		 */
		BatchAssociateUserStack(requestBody: BatchAssociateUserStackRequest, headersHandler?: () => {[header: string]: string}): Promise<BatchAssociateUserStackResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=PhotonAdminProxyService.BatchAssociateUserStack', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Disassociates the specified users from the specified stacks.
		 * Post /#X-Amz-Target=PhotonAdminProxyService.BatchDisassociateUserStack
		 * @return {BatchDisassociateUserStackResult} Success
		 */
		BatchDisassociateUserStack(requestBody: BatchDisassociateUserStackRequest, headersHandler?: () => {[header: string]: string}): Promise<BatchDisassociateUserStackResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=PhotonAdminProxyService.BatchDisassociateUserStack', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Copies the image within the same region or to a new region within the same AWS account. Note that any tags you added to the image will not be copied.
		 * Post /#X-Amz-Target=PhotonAdminProxyService.CopyImage
		 * @return {CopyImageResponse} Success
		 */
		CopyImage(requestBody: CopyImageRequest, headersHandler?: () => {[header: string]: string}): Promise<CopyImageResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=PhotonAdminProxyService.CopyImage', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Creates a Directory Config object in AppStream 2.0. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.
		 * Post /#X-Amz-Target=PhotonAdminProxyService.CreateDirectoryConfig
		 * @return {CreateDirectoryConfigResult} Success
		 */
		CreateDirectoryConfig(requestBody: CreateDirectoryConfigRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateDirectoryConfigResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=PhotonAdminProxyService.CreateDirectoryConfig', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Creates a fleet. A fleet consists of streaming instances that run a specified image.
		 * Post /#X-Amz-Target=PhotonAdminProxyService.CreateFleet
		 * @return {CreateFleetResult} Success
		 */
		CreateFleet(requestBody: CreateFleetRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateFleetResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=PhotonAdminProxyService.CreateFleet', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Creates an image builder. An image builder is a virtual machine that is used to create an image.</p> <p>The initial state of the builder is <code>PENDING</code>. When it is ready, the state is <code>RUNNING</code>.</p>
		 * Post /#X-Amz-Target=PhotonAdminProxyService.CreateImageBuilder
		 * @return {CreateImageBuilderResult} Success
		 */
		CreateImageBuilder(requestBody: CreateImageBuilderRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateImageBuilderResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=PhotonAdminProxyService.CreateImageBuilder', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Creates a URL to start an image builder streaming session.
		 * Post /#X-Amz-Target=PhotonAdminProxyService.CreateImageBuilderStreamingURL
		 * @return {CreateImageBuilderStreamingURLResult} Success
		 */
		CreateImageBuilderStreamingURL(requestBody: CreateImageBuilderStreamingURLRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateImageBuilderStreamingURLResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=PhotonAdminProxyService.CreateImageBuilderStreamingURL', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Creates a stack to start streaming applications to users. A stack consists of an associated fleet, user access policies, and storage configurations.
		 * Post /#X-Amz-Target=PhotonAdminProxyService.CreateStack
		 * @return {CreateStackResult} Success
		 */
		CreateStack(requestBody: CreateStackRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateStackResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=PhotonAdminProxyService.CreateStack', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Creates a temporary URL to start an AppStream 2.0 streaming session for the specified user. A streaming URL enables application streaming to be tested without user setup.
		 * Post /#X-Amz-Target=PhotonAdminProxyService.CreateStreamingURL
		 * @return {CreateStreamingURLResult} Success
		 */
		CreateStreamingURL(requestBody: CreateStreamingURLRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateStreamingURLResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=PhotonAdminProxyService.CreateStreamingURL', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Creates a usage report subscription. Usage reports are generated daily.
		 * Post /#X-Amz-Target=PhotonAdminProxyService.CreateUsageReportSubscription
		 * @return {CreateUsageReportSubscriptionResult} Success
		 */
		CreateUsageReportSubscription(requestBody: CreateUsageReportSubscriptionRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateUsageReportSubscriptionResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=PhotonAdminProxyService.CreateUsageReportSubscription', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Creates a new user in the user pool.
		 * Post /#X-Amz-Target=PhotonAdminProxyService.CreateUser
		 * @return {CreateUserResult} Success
		 */
		CreateUser(requestBody: CreateUserRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateUserResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=PhotonAdminProxyService.CreateUser', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Deletes the specified Directory Config object from AppStream 2.0. This object includes the information required to join streaming instances to an Active Directory domain.
		 * Post /#X-Amz-Target=PhotonAdminProxyService.DeleteDirectoryConfig
		 * @return {DeleteDirectoryConfigResult} Success
		 */
		DeleteDirectoryConfig(requestBody: DeleteDirectoryConfigRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteDirectoryConfigResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=PhotonAdminProxyService.DeleteDirectoryConfig', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Deletes the specified fleet.
		 * Post /#X-Amz-Target=PhotonAdminProxyService.DeleteFleet
		 * @return {DeleteFleetResult} Success
		 */
		DeleteFleet(requestBody: DeleteFleetRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteFleetResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=PhotonAdminProxyService.DeleteFleet', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Deletes the specified image. You cannot delete an image when it is in use. After you delete an image, you cannot provision new capacity using the image.
		 * Post /#X-Amz-Target=PhotonAdminProxyService.DeleteImage
		 * @return {DeleteImageResult} Success
		 */
		DeleteImage(requestBody: DeleteImageRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteImageResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=PhotonAdminProxyService.DeleteImage', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Deletes the specified image builder and releases the capacity.
		 * Post /#X-Amz-Target=PhotonAdminProxyService.DeleteImageBuilder
		 * @return {DeleteImageBuilderResult} Success
		 */
		DeleteImageBuilder(requestBody: DeleteImageBuilderRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteImageBuilderResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=PhotonAdminProxyService.DeleteImageBuilder', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Deletes permissions for the specified private image. After you delete permissions for an image, AWS accounts to which you previously granted these permissions can no longer use the image.
		 * Post /#X-Amz-Target=PhotonAdminProxyService.DeleteImagePermissions
		 * @return {DeleteImagePermissionsResult} Success
		 */
		DeleteImagePermissions(requestBody: DeleteImagePermissionsRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteImagePermissionsResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=PhotonAdminProxyService.DeleteImagePermissions', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Deletes the specified stack. After the stack is deleted, the application streaming environment provided by the stack is no longer available to users. Also, any reservations made for application streaming sessions for the stack are released.
		 * Post /#X-Amz-Target=PhotonAdminProxyService.DeleteStack
		 * @return {DeleteStackResult} Success
		 */
		DeleteStack(requestBody: DeleteStackRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteStackResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=PhotonAdminProxyService.DeleteStack', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Disables usage report generation.
		 * Post /#X-Amz-Target=PhotonAdminProxyService.DeleteUsageReportSubscription
		 * @return {DeleteUsageReportSubscriptionResult} Success
		 */
		DeleteUsageReportSubscription(requestBody: DeleteUsageReportSubscriptionRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteUsageReportSubscriptionResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=PhotonAdminProxyService.DeleteUsageReportSubscription', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Deletes a user from the user pool.
		 * Post /#X-Amz-Target=PhotonAdminProxyService.DeleteUser
		 * @return {DeleteUserResult} Success
		 */
		DeleteUser(requestBody: DeleteUserRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteUserResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=PhotonAdminProxyService.DeleteUser', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Retrieves a list that describes one or more specified Directory Config objects for AppStream 2.0, if the names for these objects are provided. Otherwise, all Directory Config objects in the account are described. These objects include the configuration information required to join fleets and image builders to Microsoft Active Directory domains. </p> <p>Although the response syntax in this topic includes the account password, this password is not returned in the actual response.</p>
		 * Post /#X-Amz-Target=PhotonAdminProxyService.DescribeDirectoryConfigs
		 * @return {DescribeDirectoryConfigsResult} Success
		 */
		DescribeDirectoryConfigs(requestBody: DescribeDirectoryConfigsRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeDirectoryConfigsResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=PhotonAdminProxyService.DescribeDirectoryConfigs', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Retrieves a list that describes one or more specified fleets, if the fleet names are provided. Otherwise, all fleets in the account are described.
		 * Post /#X-Amz-Target=PhotonAdminProxyService.DescribeFleets
		 * @return {DescribeFleetsResult} Success
		 */
		DescribeFleets(requestBody: DescribeFleetsRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeFleetsResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=PhotonAdminProxyService.DescribeFleets', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Retrieves a list that describes one or more specified image builders, if the image builder names are provided. Otherwise, all image builders in the account are described.
		 * Post /#X-Amz-Target=PhotonAdminProxyService.DescribeImageBuilders
		 * @return {DescribeImageBuildersResult} Success
		 */
		DescribeImageBuilders(requestBody: DescribeImageBuildersRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeImageBuildersResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=PhotonAdminProxyService.DescribeImageBuilders', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Retrieves a list that describes the permissions for shared AWS account IDs on a private image that you own.
		 * Post /#X-Amz-Target=PhotonAdminProxyService.DescribeImagePermissions
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeImagePermissionsResult} Success
		 */
		DescribeImagePermissions(MaxResults: string, NextToken: string, requestBody: DescribeImagePermissionsRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeImagePermissionsResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=PhotonAdminProxyService.DescribeImagePermissions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Retrieves a list that describes one or more specified images, if the image names or image ARNs are provided. Otherwise, all images in the account are described.
		 * Post /#X-Amz-Target=PhotonAdminProxyService.DescribeImages
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeImagesResult} Success
		 */
		DescribeImages(MaxResults: string, NextToken: string, requestBody: DescribeImagesRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeImagesResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=PhotonAdminProxyService.DescribeImages?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Retrieves a list that describes the streaming sessions for a specified stack and fleet. If a UserId is provided for the stack and fleet, only streaming sessions for that user are described. If an authentication type is not provided, the default is to authenticate users using a streaming URL.
		 * Post /#X-Amz-Target=PhotonAdminProxyService.DescribeSessions
		 * @return {DescribeSessionsResult} Success
		 */
		DescribeSessions(requestBody: DescribeSessionsRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeSessionsResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=PhotonAdminProxyService.DescribeSessions', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Retrieves a list that describes one or more specified stacks, if the stack names are provided. Otherwise, all stacks in the account are described.
		 * Post /#X-Amz-Target=PhotonAdminProxyService.DescribeStacks
		 * @return {DescribeStacksResult} Success
		 */
		DescribeStacks(requestBody: DescribeStacksRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeStacksResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=PhotonAdminProxyService.DescribeStacks', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Retrieves a list that describes one or more usage report subscriptions.
		 * Post /#X-Amz-Target=PhotonAdminProxyService.DescribeUsageReportSubscriptions
		 * @return {DescribeUsageReportSubscriptionsResult} Success
		 */
		DescribeUsageReportSubscriptions(requestBody: DescribeUsageReportSubscriptionsRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeUsageReportSubscriptionsResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=PhotonAdminProxyService.DescribeUsageReportSubscriptions', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Retrieves a list that describes the UserStackAssociation objects. You must specify either or both of the following:</p> <ul> <li> <p>The stack name</p> </li> <li> <p>The user name (email address of the user associated with the stack) and the authentication type for the user</p> </li> </ul>
		 * Post /#X-Amz-Target=PhotonAdminProxyService.DescribeUserStackAssociations
		 * @return {DescribeUserStackAssociationsResult} Success
		 */
		DescribeUserStackAssociations(requestBody: DescribeUserStackAssociationsRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeUserStackAssociationsResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=PhotonAdminProxyService.DescribeUserStackAssociations', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Retrieves a list that describes one or more specified users in the user pool.
		 * Post /#X-Amz-Target=PhotonAdminProxyService.DescribeUsers
		 * @return {DescribeUsersResult} Success
		 */
		DescribeUsers(requestBody: DescribeUsersRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeUsersResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=PhotonAdminProxyService.DescribeUsers', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Disables the specified user in the user pool. Users can't sign in to AppStream 2.0 until they are re-enabled. This action does not delete the user.
		 * Post /#X-Amz-Target=PhotonAdminProxyService.DisableUser
		 * @return {DisableUserResult} Success
		 */
		DisableUser(requestBody: DisableUserRequest, headersHandler?: () => {[header: string]: string}): Promise<DisableUserResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=PhotonAdminProxyService.DisableUser', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Disassociates the specified fleet from the specified stack.
		 * Post /#X-Amz-Target=PhotonAdminProxyService.DisassociateFleet
		 * @return {DisassociateFleetResult} Success
		 */
		DisassociateFleet(requestBody: DisassociateFleetRequest, headersHandler?: () => {[header: string]: string}): Promise<DisassociateFleetResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=PhotonAdminProxyService.DisassociateFleet', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Enables a user in the user pool. After being enabled, users can sign in to AppStream 2.0 and open applications from the stacks to which they are assigned.
		 * Post /#X-Amz-Target=PhotonAdminProxyService.EnableUser
		 * @return {EnableUserResult} Success
		 */
		EnableUser(requestBody: EnableUserRequest, headersHandler?: () => {[header: string]: string}): Promise<EnableUserResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=PhotonAdminProxyService.EnableUser', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Immediately stops the specified streaming session.
		 * Post /#X-Amz-Target=PhotonAdminProxyService.ExpireSession
		 * @return {ExpireSessionResult} Success
		 */
		ExpireSession(requestBody: ExpireSessionRequest, headersHandler?: () => {[header: string]: string}): Promise<ExpireSessionResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=PhotonAdminProxyService.ExpireSession', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Retrieves the name of the fleet that is associated with the specified stack.
		 * Post /#X-Amz-Target=PhotonAdminProxyService.ListAssociatedFleets
		 * @return {ListAssociatedFleetsResult} Success
		 */
		ListAssociatedFleets(requestBody: ListAssociatedFleetsRequest, headersHandler?: () => {[header: string]: string}): Promise<ListAssociatedFleetsResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=PhotonAdminProxyService.ListAssociatedFleets', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Retrieves the name of the stack with which the specified fleet is associated.
		 * Post /#X-Amz-Target=PhotonAdminProxyService.ListAssociatedStacks
		 * @return {ListAssociatedStacksResult} Success
		 */
		ListAssociatedStacks(requestBody: ListAssociatedStacksRequest, headersHandler?: () => {[header: string]: string}): Promise<ListAssociatedStacksResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=PhotonAdminProxyService.ListAssociatedStacks', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Retrieves a list of all tags for the specified AppStream 2.0 resource. You can tag AppStream 2.0 image builders, images, fleets, and stacks.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
		 * Post /#X-Amz-Target=PhotonAdminProxyService.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest, headersHandler?: () => {[header: string]: string}): Promise<ListTagsForResourceResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=PhotonAdminProxyService.ListTagsForResource', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Starts the specified fleet.
		 * Post /#X-Amz-Target=PhotonAdminProxyService.StartFleet
		 * @return {StartFleetResult} Success
		 */
		StartFleet(requestBody: StartFleetRequest, headersHandler?: () => {[header: string]: string}): Promise<StartFleetResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=PhotonAdminProxyService.StartFleet', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Starts the specified image builder.
		 * Post /#X-Amz-Target=PhotonAdminProxyService.StartImageBuilder
		 * @return {StartImageBuilderResult} Success
		 */
		StartImageBuilder(requestBody: StartImageBuilderRequest, headersHandler?: () => {[header: string]: string}): Promise<StartImageBuilderResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=PhotonAdminProxyService.StartImageBuilder', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Stops the specified fleet.
		 * Post /#X-Amz-Target=PhotonAdminProxyService.StopFleet
		 * @return {StopFleetResult} Success
		 */
		StopFleet(requestBody: StopFleetRequest, headersHandler?: () => {[header: string]: string}): Promise<StopFleetResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=PhotonAdminProxyService.StopFleet', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Stops the specified image builder.
		 * Post /#X-Amz-Target=PhotonAdminProxyService.StopImageBuilder
		 * @return {StopImageBuilderResult} Success
		 */
		StopImageBuilder(requestBody: StopImageBuilderRequest, headersHandler?: () => {[header: string]: string}): Promise<StopImageBuilderResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=PhotonAdminProxyService.StopImageBuilder', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Adds or overwrites one or more tags for the specified AppStream 2.0 resource. You can tag AppStream 2.0 image builders, images, fleets, and stacks.</p> <p>Each tag consists of a key and an optional value. If a resource already has a tag with the same key, this operation updates its value.</p> <p>To list the current tags for your resources, use <a>ListTagsForResource</a>. To disassociate tags from your resources, use <a>UntagResource</a>.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
		 * Post /#X-Amz-Target=PhotonAdminProxyService.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest, headersHandler?: () => {[header: string]: string}): Promise<TagResourceResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=PhotonAdminProxyService.TagResource', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Disassociates one or more specified tags from the specified AppStream 2.0 resource.</p> <p>To list the current tags for your resources, use <a>ListTagsForResource</a>.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
		 * Post /#X-Amz-Target=PhotonAdminProxyService.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest, headersHandler?: () => {[header: string]: string}): Promise<UntagResourceResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=PhotonAdminProxyService.UntagResource', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Updates the specified Directory Config object in AppStream 2.0. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.
		 * Post /#X-Amz-Target=PhotonAdminProxyService.UpdateDirectoryConfig
		 * @return {UpdateDirectoryConfigResult} Success
		 */
		UpdateDirectoryConfig(requestBody: UpdateDirectoryConfigRequest, headersHandler?: () => {[header: string]: string}): Promise<UpdateDirectoryConfigResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=PhotonAdminProxyService.UpdateDirectoryConfig', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Updates the specified fleet.</p> <p>If the fleet is in the <code>STOPPED</code> state, you can update any attribute except the fleet name. If the fleet is in the <code>RUNNING</code> state, you can update the <code>DisplayName</code>, <code>ComputeCapacity</code>, <code>ImageARN</code>, <code>ImageName</code>, <code>IdleDisconnectTimeoutInSeconds</code>, and <code>DisconnectTimeoutInSeconds</code> attributes. If the fleet is in the <code>STARTING</code> or <code>STOPPING</code> state, you can't update it.</p>
		 * Post /#X-Amz-Target=PhotonAdminProxyService.UpdateFleet
		 * @return {UpdateFleetResult} Success
		 */
		UpdateFleet(requestBody: UpdateFleetRequest, headersHandler?: () => {[header: string]: string}): Promise<UpdateFleetResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=PhotonAdminProxyService.UpdateFleet', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Adds or updates permissions for the specified private image.
		 * Post /#X-Amz-Target=PhotonAdminProxyService.UpdateImagePermissions
		 * @return {UpdateImagePermissionsResult} Success
		 */
		UpdateImagePermissions(requestBody: UpdateImagePermissionsRequest, headersHandler?: () => {[header: string]: string}): Promise<UpdateImagePermissionsResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=PhotonAdminProxyService.UpdateImagePermissions', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Updates the specified fields for the specified stack.
		 * Post /#X-Amz-Target=PhotonAdminProxyService.UpdateStack
		 * @return {UpdateStackResult} Success
		 */
		UpdateStack(requestBody: UpdateStackRequest, headersHandler?: () => {[header: string]: string}): Promise<UpdateStackResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=PhotonAdminProxyService.UpdateStack', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}
	}

}

