export namespace My_Demo_Client {
	export interface AssociateIpGroupsRequest {
		DirectoryId: string;
		GroupIds: Array<IpGroupId>;
	}

	export interface AuthorizeIpRulesRequest {
		GroupId: string;
		UserRules: Array<IpRuleItem>;
	}

	export interface CopyWorkspaceImageResult {
		ImageId?: string;
	}

	export interface CopyWorkspaceImageRequest {
		Name: string;
		Description?: string;
		SourceImageId: string;
		SourceRegion: string;
		Tags?: Array<Tag>;
	}

	export interface CreateIpGroupResult {
		GroupId?: string;
	}

	export interface CreateIpGroupRequest {
		GroupName: string;
		GroupDesc?: string;
		UserRules?: Array<IpRuleItem>;
		Tags?: Array<Tag>;
	}

	export interface CreateTagsRequest {
		ResourceId: string;
		Tags: Array<Tag>;
	}

	export interface CreateWorkspacesResult {
		FailedRequests?: Array<FailedCreateWorkspaceRequest>;
		PendingRequests?: Array<Workspace>;
	}

	export interface CreateWorkspacesRequest {
		Workspaces: Array<WorkspaceRequest>;
	}

	export interface DeleteIpGroupRequest {
		GroupId: string;
	}

	export interface DeleteTagsRequest {
		ResourceId: string;
		TagKeys: Array<NonEmptyString>;
	}

	export interface DeleteWorkspaceImageRequest {
		ImageId: string;
	}

	export interface DeregisterWorkspaceDirectoryRequest {
		DirectoryId: string;
	}

	export interface DescribeAccountResult {
		DedicatedTenancySupport?: DescribeAccountResultDedicatedTenancySupport;
		DedicatedTenancyManagementCidrRange?: string;
	}

	export enum DescribeAccountResultDedicatedTenancySupport { ENABLED = 0, DISABLED = 1 }

	export interface DescribeAccountModificationsResult {
		AccountModifications?: Array<AccountModification>;
		NextToken?: string;
	}

	export interface DescribeAccountModificationsRequest {
		NextToken?: string;
	}

	export interface DescribeClientPropertiesResult {
		ClientPropertiesList?: Array<ClientPropertiesResult>;
	}

	export interface DescribeClientPropertiesRequest {
		ResourceIds: Array<NonEmptyString>;
	}

	export interface DescribeIpGroupsResult {
		Result?: Array<WorkspacesIpGroup>;
		NextToken?: string;
	}

	export interface DescribeIpGroupsRequest {
		GroupIds?: Array<IpGroupId>;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface DescribeTagsResult {
		TagList?: Array<Tag>;
	}

	export interface DescribeTagsRequest {
		ResourceId: string;
	}

	export interface DescribeWorkspaceBundlesResult {
		Bundles?: Array<WorkspaceBundle>;
		NextToken?: string;
	}

	export interface DescribeWorkspaceBundlesRequest {
		BundleIds?: Array<BundleId>;
		Owner?: string;
		NextToken?: string;
	}

	export interface DescribeWorkspaceDirectoriesResult {
		Directories?: Array<WorkspaceDirectory>;
		NextToken?: string;
	}

	export interface DescribeWorkspaceDirectoriesRequest {
		DirectoryIds?: Array<DirectoryId>;
		Limit?: number;
		NextToken?: string;
	}

	export interface DescribeWorkspaceImagesResult {
		Images?: Array<WorkspaceImage>;
		NextToken?: string;
	}

	export interface DescribeWorkspaceImagesRequest {
		ImageIds?: Array<WorkspaceImageId>;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface DescribeWorkspaceSnapshotsResult {
		RebuildSnapshots?: Array<Snapshot>;
		RestoreSnapshots?: Array<Snapshot>;
	}

	export interface DescribeWorkspaceSnapshotsRequest {
		WorkspaceId: string;
	}

	export interface DescribeWorkspacesResult {
		Workspaces?: Array<Workspace>;
		NextToken?: string;
	}

	export interface DescribeWorkspacesRequest {
		WorkspaceIds?: Array<WorkspaceId>;
		DirectoryId?: string;
		UserName?: string;
		BundleId?: string;
		Limit?: number;
		NextToken?: string;
	}

	export interface DescribeWorkspacesConnectionStatusResult {
		WorkspacesConnectionStatus?: Array<WorkspaceConnectionStatus>;
		NextToken?: string;
	}

	export interface DescribeWorkspacesConnectionStatusRequest {
		WorkspaceIds?: Array<WorkspaceId>;
		NextToken?: string;
	}

	export interface DisassociateIpGroupsRequest {
		DirectoryId: string;
		GroupIds: Array<IpGroupId>;
	}

	export interface ImportWorkspaceImageResult {
		ImageId?: string;
	}

	export interface ImportWorkspaceImageRequest {
		Ec2ImageId: string;
		IngestionProcess: ImportWorkspaceImageRequestIngestionProcess;
		ImageName: string;
		ImageDescription: string;
		Tags?: Array<Tag>;
	}

	export enum ImportWorkspaceImageRequestIngestionProcess { BYOL_REGULAR = 0, BYOL_GRAPHICS = 1, BYOL_GRAPHICSPRO = 2 }

	export interface ListAvailableManagementCidrRangesResult {
		ManagementCidrRanges?: Array<DedicatedTenancyManagementCidrRange>;
		NextToken?: string;
	}

	export interface ListAvailableManagementCidrRangesRequest {
		ManagementCidrRangeConstraint: string;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface MigrateWorkspaceResult {
		SourceWorkspaceId?: string;
		TargetWorkspaceId?: string;
	}

	export interface MigrateWorkspaceRequest {
		SourceWorkspaceId: string;
		BundleId: string;
	}

	export interface ModifyAccountRequest {
		DedicatedTenancySupport?: ModifyAccountRequestDedicatedTenancySupport;
		DedicatedTenancyManagementCidrRange?: string;
	}

	export enum ModifyAccountRequestDedicatedTenancySupport { ENABLED = 0 }

	export interface ModifyClientPropertiesRequest {
		ResourceId: string;

		/**Describes an Amazon WorkSpaces client. */
		ClientProperties: ClientProperties;
	}

	export interface ModifySelfservicePermissionsRequest {
		ResourceId: string;

		/**Describes the self-service permissions for a directory. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/enable-user-self-service-workspace-management.html">Enable Self-Service WorkSpace Management Capabilities for Your Users</a>. */
		SelfservicePermissions: SelfservicePermissions;
	}

	export interface ModifyWorkspaceAccessPropertiesRequest {
		ResourceId: string;

		/**The device types and operating systems that can be used to access a WorkSpace. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspaces-network-requirements.html">Amazon WorkSpaces Client Network Requirements</a>. */
		WorkspaceAccessProperties: WorkspaceAccessProperties;
	}

	export interface ModifyWorkspaceCreationPropertiesRequest {
		ResourceId: string;

		/**Describes the default properties that are used for creating WorkSpaces. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-directory-details.html">Update Directory Details for Your WorkSpaces</a>. */
		WorkspaceCreationProperties: WorkspaceCreationProperties;
	}

	export interface ModifyWorkspacePropertiesRequest {
		WorkspaceId: string;

		/**Describes a WorkSpace. */
		WorkspaceProperties: WorkspaceProperties;
	}

	export interface ModifyWorkspaceStateRequest {
		WorkspaceId: string;
		WorkspaceState: ModifyWorkspaceStateRequestWorkspaceState;
	}

	export enum ModifyWorkspaceStateRequestWorkspaceState { AVAILABLE = 0, ADMIN_MAINTENANCE = 1 }

	export interface RebootWorkspacesResult {
		FailedRequests?: Array<FailedWorkspaceChangeRequest>;
	}

	export interface RebootWorkspacesRequest {
		RebootWorkspaceRequests: Array<RebootRequest>;
	}

	export interface RebuildWorkspacesResult {
		FailedRequests?: Array<FailedWorkspaceChangeRequest>;
	}

	export interface RebuildWorkspacesRequest {
		RebuildWorkspaceRequests: Array<RebuildRequest>;
	}

	export interface RegisterWorkspaceDirectoryRequest {
		DirectoryId: string;
		SubnetIds?: Array<SubnetId>;
		EnableWorkDocs: boolean;
		EnableSelfService?: boolean;
		Tenancy?: RegisterWorkspaceDirectoryRequestTenancy;
		Tags?: Array<Tag>;
	}

	export enum RegisterWorkspaceDirectoryRequestTenancy { DEDICATED = 0, SHARED = 1 }

	export interface RestoreWorkspaceRequest {
		WorkspaceId: string;
	}

	export interface RevokeIpRulesRequest {
		GroupId: string;
		UserRules: Array<IpRule>;
	}

	export interface StartWorkspacesResult {
		FailedRequests?: Array<FailedWorkspaceChangeRequest>;
	}

	export interface StartWorkspacesRequest {
		StartWorkspaceRequests: Array<StartRequest>;
	}

	export interface StopWorkspacesResult {
		FailedRequests?: Array<FailedWorkspaceChangeRequest>;
	}

	export interface StopWorkspacesRequest {
		StopWorkspaceRequests: Array<StopRequest>;
	}

	export interface TerminateWorkspacesResult {
		FailedRequests?: Array<FailedWorkspaceChangeRequest>;
	}

	export interface TerminateWorkspacesRequest {
		TerminateWorkspaceRequests: Array<TerminateRequest>;
	}

	export interface UpdateRulesOfIpGroupRequest {
		GroupId: string;
		UserRules: Array<IpRuleItem>;
	}

	export enum AccessPropertyValue { ALLOW = 0, DENY = 1 }

	export enum DedicatedTenancyModificationStateEnum { PENDING = 0, COMPLETED = 1, FAILED = 2 }

	export enum DedicatedTenancySupportResultEnum { ENABLED = 0, DISABLED = 1 }


	/**Describes a modification to the configuration of Bring Your Own License (BYOL) for the specified account.  */
	export interface AccountModification {
		ModificationState?: AccountModificationModificationState;
		DedicatedTenancySupport?: AccountModificationDedicatedTenancySupport;
		DedicatedTenancyManagementCidrRange?: string;
		StartTime?: Date;
		ErrorCode?: string;
		ErrorMessage?: string;
	}

	export enum AccountModificationModificationState { PENDING = 0, COMPLETED = 1, FAILED = 2 }

	export enum AccountModificationDedicatedTenancySupport { ENABLED = 0, DISABLED = 1 }


	/**Describes a WorkSpace bundle. */
	export interface WorkspaceBundle {
		BundleId?: string;
		Name?: string;
		Owner?: string;
		Description?: string;
		ImageId?: string;

		/**Describes the root volume for a WorkSpace bundle. */
		RootStorage?: RootStorage;

		/**Describes the user storage for a WorkSpace bundle. */
		UserStorage?: UserStorage;

		/**Describes the compute type. */
		ComputeType?: ComputeType;
		LastUpdatedTime?: Date;
	}

	export enum ReconnectEnum { ENABLED = 0, DISABLED = 1 }


	/**Describes an Amazon WorkSpaces client. */
	export interface ClientProperties {
		ReconnectEnabled?: ClientPropertiesReconnectEnabled;
	}

	export enum ClientPropertiesReconnectEnabled { ENABLED = 0, DISABLED = 1 }


	/**Information about the Amazon WorkSpaces client. */
	export interface ClientPropertiesResult {
		ResourceId?: string;

		/**Describes an Amazon WorkSpaces client. */
		ClientProperties?: ClientProperties;
	}

	export enum Compute { VALUE = 0, STANDARD = 1, PERFORMANCE = 2, POWER = 3, GRAPHICS = 4, POWERPRO = 5, GRAPHICSPRO = 6 }


	/**Describes the compute type. */
	export interface ComputeType {
		Name?: ComputeTypeName;
	}

	export enum ComputeTypeName { VALUE = 0, STANDARD = 1, PERFORMANCE = 2, POWER = 3, GRAPHICS = 4, POWERPRO = 5, GRAPHICSPRO = 6 }

	export enum ConnectionState { CONNECTED = 0, DISCONNECTED = 1, UNKNOWN = 2 }

	export enum DedicatedTenancySupportEnum { ENABLED = 0 }


	/**Describes the default values that are used to create WorkSpaces. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-directory-details.html">Update Directory Details for Your WorkSpaces</a>. */
	export interface DefaultWorkspaceCreationProperties {
		EnableWorkDocs?: boolean;
		EnableInternetAccess?: boolean;
		DefaultOu?: string;
		CustomSecurityGroupId?: string;
		UserEnabledAsLocalAdministrator?: boolean;
		EnableMaintenanceMode?: boolean;
	}


	/**Describes a directory that is used with Amazon WorkSpaces. */
	export interface WorkspaceDirectory {
		DirectoryId?: string;
		Alias?: string;
		DirectoryName?: string;
		RegistrationCode?: string;
		SubnetIds?: Array<SubnetId>;
		DnsIpAddresses?: Array<IpAddress>;
		CustomerUserName?: string;
		IamRoleId?: string;
		DirectoryType?: WorkspaceDirectoryDirectoryType;
		WorkspaceSecurityGroupId?: string;
		State?: WorkspaceDirectoryState;

		/**Describes the default values that are used to create WorkSpaces. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-directory-details.html">Update Directory Details for Your WorkSpaces</a>. */
		WorkspaceCreationProperties?: DefaultWorkspaceCreationProperties;
		ipGroupIds?: Array<IpGroupId>;

		/**The device types and operating systems that can be used to access a WorkSpace. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspaces-network-requirements.html">Amazon WorkSpaces Client Network Requirements</a>. */
		WorkspaceAccessProperties?: WorkspaceAccessProperties;
		Tenancy?: WorkspaceDirectoryTenancy;

		/**Describes the self-service permissions for a directory. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/enable-user-self-service-workspace-management.html">Enable Self-Service WorkSpace Management Capabilities for Your Users</a>. */
		SelfservicePermissions?: SelfservicePermissions;
	}

	export enum WorkspaceDirectoryDirectoryType { SIMPLE_AD = 0, AD_CONNECTOR = 1 }

	export enum WorkspaceDirectoryState { REGISTERING = 0, REGISTERED = 1, DEREGISTERING = 2, DEREGISTERED = 3, ERROR = 4 }

	export enum WorkspaceDirectoryTenancy { DEDICATED = 0, SHARED = 1 }


	/**Describes the information used to create a WorkSpace. */
	export interface WorkspaceRequest {
		DirectoryId: string;
		UserName: string;
		BundleId: string;
		VolumeEncryptionKey?: string;
		UserVolumeEncryptionEnabled?: boolean;
		RootVolumeEncryptionEnabled?: boolean;

		/**Describes a WorkSpace. */
		WorkspaceProperties?: WorkspaceProperties;
		Tags?: Array<Tag>;
	}


	/**Describes a WorkSpace that cannot be created. */
	export interface FailedCreateWorkspaceRequest {

		/**Describes the information used to create a WorkSpace. */
		WorkspaceRequest?: WorkspaceRequest;
		ErrorCode?: string;
		ErrorMessage?: string;
	}


	/**Describes a WorkSpace that could not be rebooted. (<a>RebootWorkspaces</a>), rebuilt (<a>RebuildWorkspaces</a>), restored (<a>RestoreWorkspace</a>), terminated (<a>TerminateWorkspaces</a>), started (<a>StartWorkspaces</a>), or stopped (<a>StopWorkspaces</a>). */
	export interface FailedWorkspaceChangeRequest {
		WorkspaceId?: string;
		ErrorCode?: string;
		ErrorMessage?: string;
	}

	export enum WorkspaceImageIngestionProcess { BYOL_REGULAR = 0, BYOL_GRAPHICS = 1, BYOL_GRAPHICSPRO = 2 }


	/**Describes a rule for an IP access control group. */
	export interface IpRuleItem {
		ipRule?: string;
		ruleDesc?: string;
	}

	export enum ModificationResourceEnum { ROOT_VOLUME = 0, USER_VOLUME = 1, COMPUTE_TYPE = 2 }

	export enum ModificationStateEnum { UPDATE_INITIATED = 0, UPDATE_IN_PROGRESS = 1 }


	/**Describes a WorkSpace modification. */
	export interface ModificationState {
		Resource?: ModificationStateResource;
		State?: ModificationStateState;
	}

	export enum ModificationStateResource { ROOT_VOLUME = 0, USER_VOLUME = 1, COMPUTE_TYPE = 2 }

	export enum ModificationStateState { UPDATE_INITIATED = 0, UPDATE_IN_PROGRESS = 1 }


	/**Describes the self-service permissions for a directory. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/enable-user-self-service-workspace-management.html">Enable Self-Service WorkSpace Management Capabilities for Your Users</a>. */
	export interface SelfservicePermissions {
		RestartWorkspace?: SelfservicePermissionsRestartWorkspace;
		IncreaseVolumeSize?: SelfservicePermissionsIncreaseVolumeSize;
		ChangeComputeType?: SelfservicePermissionsChangeComputeType;
		SwitchRunningMode?: SelfservicePermissionsSwitchRunningMode;
		RebuildWorkspace?: SelfservicePermissionsRebuildWorkspace;
	}

	export enum SelfservicePermissionsRestartWorkspace { ENABLED = 0, DISABLED = 1 }

	export enum SelfservicePermissionsIncreaseVolumeSize { ENABLED = 0, DISABLED = 1 }

	export enum SelfservicePermissionsChangeComputeType { ENABLED = 0, DISABLED = 1 }

	export enum SelfservicePermissionsSwitchRunningMode { ENABLED = 0, DISABLED = 1 }

	export enum SelfservicePermissionsRebuildWorkspace { ENABLED = 0, DISABLED = 1 }


	/**The device types and operating systems that can be used to access a WorkSpace. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspaces-network-requirements.html">Amazon WorkSpaces Client Network Requirements</a>. */
	export interface WorkspaceAccessProperties {
		DeviceTypeWindows?: WorkspaceAccessPropertiesDeviceTypeWindows;
		DeviceTypeOsx?: WorkspaceAccessPropertiesDeviceTypeOsx;
		DeviceTypeWeb?: WorkspaceAccessPropertiesDeviceTypeWeb;
		DeviceTypeIos?: WorkspaceAccessPropertiesDeviceTypeIos;
		DeviceTypeAndroid?: WorkspaceAccessPropertiesDeviceTypeAndroid;
		DeviceTypeChromeOs?: WorkspaceAccessPropertiesDeviceTypeChromeOs;
		DeviceTypeZeroClient?: WorkspaceAccessPropertiesDeviceTypeZeroClient;
	}

	export enum WorkspaceAccessPropertiesDeviceTypeWindows { ALLOW = 0, DENY = 1 }

	export enum WorkspaceAccessPropertiesDeviceTypeOsx { ALLOW = 0, DENY = 1 }

	export enum WorkspaceAccessPropertiesDeviceTypeWeb { ALLOW = 0, DENY = 1 }

	export enum WorkspaceAccessPropertiesDeviceTypeIos { ALLOW = 0, DENY = 1 }

	export enum WorkspaceAccessPropertiesDeviceTypeAndroid { ALLOW = 0, DENY = 1 }

	export enum WorkspaceAccessPropertiesDeviceTypeChromeOs { ALLOW = 0, DENY = 1 }

	export enum WorkspaceAccessPropertiesDeviceTypeZeroClient { ALLOW = 0, DENY = 1 }


	/**Describes the default properties that are used for creating WorkSpaces. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-directory-details.html">Update Directory Details for Your WorkSpaces</a>.  */
	export interface WorkspaceCreationProperties {
		EnableInternetAccess?: boolean;
		DefaultOu?: string;
		CustomSecurityGroupId?: string;
		UserEnabledAsLocalAdministrator?: boolean;
		EnableMaintenanceMode?: boolean;
	}


	/**Describes a WorkSpace. */
	export interface WorkspaceProperties {
		RunningMode?: WorkspacePropertiesRunningMode;
		RunningModeAutoStopTimeoutInMinutes?: number;
		RootVolumeSizeGib?: number;
		UserVolumeSizeGib?: number;
		ComputeTypeName?: WorkspacePropertiesComputeTypeName;
	}

	export enum WorkspacePropertiesRunningMode { AUTO_STOP = 0, ALWAYS_ON = 1 }

	export enum WorkspacePropertiesComputeTypeName { VALUE = 0, STANDARD = 1, PERFORMANCE = 2, POWER = 3, GRAPHICS = 4, POWERPRO = 5, GRAPHICSPRO = 6 }

	export enum TargetWorkspaceState { AVAILABLE = 0, ADMIN_MAINTENANCE = 1 }

	export enum OperatingSystemType { WINDOWS = 0, LINUX = 1 }


	/**The operating system that the image is running. */
	export interface OperatingSystem {
		Type?: OperatingSystemType;
	}

	export enum OperatingSystemType { WINDOWS = 0, LINUX = 1 }


	/**Describes the information used to reboot a WorkSpace. */
	export interface RebootRequest {
		WorkspaceId: string;
	}


	/**Describes the information used to rebuild a WorkSpace. */
	export interface RebuildRequest {
		WorkspaceId: string;
	}

	export enum Tenancy { DEDICATED = 0, SHARED = 1 }


	/**Describes the root volume for a WorkSpace bundle. */
	export interface RootStorage {
		Capacity?: string;
	}

	export enum RunningMode { AUTO_STOP = 0, ALWAYS_ON = 1 }


	/**Describes a snapshot. */
	export interface Snapshot {
		SnapshotTime?: Date;
	}


	/**Information used to start a WorkSpace. */
	export interface StartRequest {
		WorkspaceId?: string;
	}


	/**Describes the information used to stop a WorkSpace. */
	export interface StopRequest {
		WorkspaceId?: string;
	}


	/**Describes a tag. */
	export interface Tag {
		Key: string;
		Value?: string;
	}


	/**Describes the information used to terminate a WorkSpace. */
	export interface TerminateRequest {
		WorkspaceId: string;
	}


	/**Describes the user storage for a WorkSpace bundle. */
	export interface UserStorage {
		Capacity?: string;
	}

	export enum WorkspaceState { PENDING = 0, AVAILABLE = 1, IMPAIRED = 2, UNHEALTHY = 3, REBOOTING = 4, STARTING = 5, REBUILDING = 6, RESTORING = 7, MAINTENANCE = 8, ADMIN_MAINTENANCE = 9, TERMINATING = 10, TERMINATED = 11, SUSPENDED = 12, UPDATING = 13, STOPPING = 14, STOPPED = 15, ERROR = 16 }


	/**Describes a WorkSpace. */
	export interface Workspace {
		WorkspaceId?: string;
		DirectoryId?: string;
		UserName?: string;
		IpAddress?: string;
		State?: WorkspaceState;
		BundleId?: string;
		SubnetId?: string;
		ErrorMessage?: string;
		ErrorCode?: string;
		ComputerName?: string;
		VolumeEncryptionKey?: string;
		UserVolumeEncryptionEnabled?: boolean;
		RootVolumeEncryptionEnabled?: boolean;

		/**Describes a WorkSpace. */
		WorkspaceProperties?: WorkspaceProperties;
		ModificationStates?: Array<ModificationState>;
	}

	export enum WorkspaceState { PENDING = 0, AVAILABLE = 1, IMPAIRED = 2, UNHEALTHY = 3, REBOOTING = 4, STARTING = 5, REBUILDING = 6, RESTORING = 7, MAINTENANCE = 8, ADMIN_MAINTENANCE = 9, TERMINATING = 10, TERMINATED = 11, SUSPENDED = 12, UPDATING = 13, STOPPING = 14, STOPPED = 15, ERROR = 16 }


	/**Describes the connection status of a WorkSpace. */
	export interface WorkspaceConnectionStatus {
		WorkspaceId?: string;
		ConnectionState?: WorkspaceConnectionStatusConnectionState;
		ConnectionStateCheckTimestamp?: Date;
		LastKnownUserConnectionTimestamp?: Date;
	}

	export enum WorkspaceConnectionStatusConnectionState { CONNECTED = 0, DISCONNECTED = 1, UNKNOWN = 2 }

	export enum WorkspaceDirectoryType { SIMPLE_AD = 0, AD_CONNECTOR = 1 }

	export enum WorkspaceDirectoryState { REGISTERING = 0, REGISTERED = 1, DEREGISTERING = 2, DEREGISTERED = 3, ERROR = 4 }

	export enum WorkspaceImageState { AVAILABLE = 0, PENDING = 1, ERROR = 2 }

	export enum WorkspaceImageRequiredTenancy { DEFAULT = 0, DEDICATED = 1 }


	/**Describes a WorkSpace image. */
	export interface WorkspaceImage {
		ImageId?: string;
		Name?: string;
		Description?: string;

		/**The operating system that the image is running. */
		OperatingSystem?: OperatingSystem;
		State?: WorkspaceImageState;
		RequiredTenancy?: WorkspaceImageRequiredTenancy;
		ErrorCode?: string;
		ErrorMessage?: string;
	}

	export enum WorkspaceImageState { AVAILABLE = 0, PENDING = 1, ERROR = 2 }

	export enum WorkspaceImageRequiredTenancy { DEFAULT = 0, DEDICATED = 1 }


	/**Describes an IP access control group. */
	export interface WorkspacesIpGroup {
		groupId?: string;
		groupName?: string;
		groupDesc?: string;
		userRules?: Array<IpRuleItem>;
	}

	export class DemoClient {
		constructor(private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/') {
		}

		/**
		 * Associates the specified IP access control group with the specified directory.
		 * Post /#X-Amz-Target=WorkspacesService.AssociateIpGroups
		 * @return {AssociateIpGroupsResult} Success
		 */
		AssociateIpGroups(requestBody: AssociateIpGroupsRequest, headersHandler?: () => {[header: string]: string}): Promise<AssociateIpGroupsResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkspacesService.AssociateIpGroups', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Adds one or more rules to the specified IP access control group.</p> <p>This action gives users permission to access their WorkSpaces from the CIDR address ranges specified in the rules.</p>
		 * Post /#X-Amz-Target=WorkspacesService.AuthorizeIpRules
		 * @return {AuthorizeIpRulesResult} Success
		 */
		AuthorizeIpRules(requestBody: AuthorizeIpRulesRequest, headersHandler?: () => {[header: string]: string}): Promise<AuthorizeIpRulesResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkspacesService.AuthorizeIpRules', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Copies the specified image from the specified Region to the current Region.
		 * Post /#X-Amz-Target=WorkspacesService.CopyWorkspaceImage
		 * @return {CopyWorkspaceImageResult} Success
		 */
		CopyWorkspaceImage(requestBody: CopyWorkspaceImageRequest, headersHandler?: () => {[header: string]: string}): Promise<CopyWorkspaceImageResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkspacesService.CopyWorkspaceImage', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Creates an IP access control group.</p> <p>An IP access control group provides you with the ability to control the IP addresses from which users are allowed to access their WorkSpaces. To specify the CIDR address ranges, add rules to your IP access control group and then associate the group with your directory. You can add rules when you create the group or at any time using <a>AuthorizeIpRules</a>.</p> <p>There is a default IP access control group associated with your directory. If you don't associate an IP access control group with your directory, the default group is used. The default group includes a default rule that allows users to access their WorkSpaces from anywhere. You cannot modify the default IP access control group for your directory.</p>
		 * Post /#X-Amz-Target=WorkspacesService.CreateIpGroup
		 * @return {CreateIpGroupResult} Success
		 */
		CreateIpGroup(requestBody: CreateIpGroupRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateIpGroupResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkspacesService.CreateIpGroup', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Creates the specified tags for the specified WorkSpaces resource.
		 * Post /#X-Amz-Target=WorkspacesService.CreateTags
		 * @return {CreateTagsResult} Success
		 */
		CreateTags(requestBody: CreateTagsRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateTagsResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkspacesService.CreateTags', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Creates one or more WorkSpaces.</p> <p>This operation is asynchronous and returns before the WorkSpaces are created.</p>
		 * Post /#X-Amz-Target=WorkspacesService.CreateWorkspaces
		 * @return {CreateWorkspacesResult} Success
		 */
		CreateWorkspaces(requestBody: CreateWorkspacesRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateWorkspacesResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkspacesService.CreateWorkspaces', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Deletes the specified IP access control group.</p> <p>You cannot delete an IP access control group that is associated with a directory.</p>
		 * Post /#X-Amz-Target=WorkspacesService.DeleteIpGroup
		 * @return {DeleteIpGroupResult} Success
		 */
		DeleteIpGroup(requestBody: DeleteIpGroupRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteIpGroupResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkspacesService.DeleteIpGroup', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Deletes the specified tags from the specified WorkSpaces resource.
		 * Post /#X-Amz-Target=WorkspacesService.DeleteTags
		 * @return {DeleteTagsResult} Success
		 */
		DeleteTags(requestBody: DeleteTagsRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteTagsResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkspacesService.DeleteTags', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Deletes the specified image from your account. To delete an image, you must first delete any bundles that are associated with the image and un-share the image if it is shared with other accounts.
		 * Post /#X-Amz-Target=WorkspacesService.DeleteWorkspaceImage
		 * @return {DeleteWorkspaceImageResult} Success
		 */
		DeleteWorkspaceImage(requestBody: DeleteWorkspaceImageRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteWorkspaceImageResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkspacesService.DeleteWorkspaceImage', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Deregisters the specified directory. This operation is asynchronous and returns before the WorkSpace directory is deregistered. If any WorkSpaces are registered to this directory, you must remove them before you can deregister the directory.
		 * Post /#X-Amz-Target=WorkspacesService.DeregisterWorkspaceDirectory
		 * @return {DeregisterWorkspaceDirectoryResult} Success
		 */
		DeregisterWorkspaceDirectory(requestBody: DeregisterWorkspaceDirectoryRequest, headersHandler?: () => {[header: string]: string}): Promise<DeregisterWorkspaceDirectoryResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkspacesService.DeregisterWorkspaceDirectory', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Retrieves a list that describes the configuration of Bring Your Own License (BYOL) for the specified account.
		 * Post /#X-Amz-Target=WorkspacesService.DescribeAccount
		 * @return {DescribeAccountResult} Success
		 */
		DescribeAccount(requestBody: DescribeAccountRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeAccountResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkspacesService.DescribeAccount', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Retrieves a list that describes modifications to the configuration of Bring Your Own License (BYOL) for the specified account.
		 * Post /#X-Amz-Target=WorkspacesService.DescribeAccountModifications
		 * @return {DescribeAccountModificationsResult} Success
		 */
		DescribeAccountModifications(requestBody: DescribeAccountModificationsRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeAccountModificationsResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkspacesService.DescribeAccountModifications', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Retrieves a list that describes one or more specified Amazon WorkSpaces clients.
		 * Post /#X-Amz-Target=WorkspacesService.DescribeClientProperties
		 * @return {DescribeClientPropertiesResult} Success
		 */
		DescribeClientProperties(requestBody: DescribeClientPropertiesRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeClientPropertiesResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkspacesService.DescribeClientProperties', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Describes one or more of your IP access control groups.
		 * Post /#X-Amz-Target=WorkspacesService.DescribeIpGroups
		 * @return {DescribeIpGroupsResult} Success
		 */
		DescribeIpGroups(requestBody: DescribeIpGroupsRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeIpGroupsResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkspacesService.DescribeIpGroups', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Describes the specified tags for the specified WorkSpaces resource.
		 * Post /#X-Amz-Target=WorkspacesService.DescribeTags
		 * @return {DescribeTagsResult} Success
		 */
		DescribeTags(requestBody: DescribeTagsRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeTagsResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkspacesService.DescribeTags', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Retrieves a list that describes the available WorkSpace bundles.</p> <p>You can filter the results using either bundle ID or owner, but not both.</p>
		 * Post /#X-Amz-Target=WorkspacesService.DescribeWorkspaceBundles
		 * @param {string} NextToken Pagination token
		 * @return {DescribeWorkspaceBundlesResult} Success
		 */
		DescribeWorkspaceBundles(NextToken: string, requestBody: DescribeWorkspaceBundlesRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeWorkspaceBundlesResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkspacesService.DescribeWorkspaceBundles?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Describes the available directories that are registered with Amazon WorkSpaces.
		 * Post /#X-Amz-Target=WorkspacesService.DescribeWorkspaceDirectories
		 * @param {string} NextToken Pagination token
		 * @return {DescribeWorkspaceDirectoriesResult} Success
		 */
		DescribeWorkspaceDirectories(NextToken: string, requestBody: DescribeWorkspaceDirectoriesRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeWorkspaceDirectoriesResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkspacesService.DescribeWorkspaceDirectories?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Retrieves a list that describes one or more specified images, if the image identifiers are provided. Otherwise, all images in the account are described.
		 * Post /#X-Amz-Target=WorkspacesService.DescribeWorkspaceImages
		 * @return {DescribeWorkspaceImagesResult} Success
		 */
		DescribeWorkspaceImages(requestBody: DescribeWorkspaceImagesRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeWorkspaceImagesResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkspacesService.DescribeWorkspaceImages', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Describes the snapshots for the specified WorkSpace.
		 * Post /#X-Amz-Target=WorkspacesService.DescribeWorkspaceSnapshots
		 * @return {DescribeWorkspaceSnapshotsResult} Success
		 */
		DescribeWorkspaceSnapshots(requestBody: DescribeWorkspaceSnapshotsRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeWorkspaceSnapshotsResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkspacesService.DescribeWorkspaceSnapshots', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Describes the specified WorkSpaces.</p> <p>You can filter the results by using the bundle identifier, directory identifier, or owner, but you can specify only one filter at a time.</p>
		 * Post /#X-Amz-Target=WorkspacesService.DescribeWorkspaces
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeWorkspacesResult} Success
		 */
		DescribeWorkspaces(Limit: string, NextToken: string, requestBody: DescribeWorkspacesRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeWorkspacesResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkspacesService.DescribeWorkspaces?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Describes the connection status of the specified WorkSpaces.
		 * Post /#X-Amz-Target=WorkspacesService.DescribeWorkspacesConnectionStatus
		 * @return {DescribeWorkspacesConnectionStatusResult} Success
		 */
		DescribeWorkspacesConnectionStatus(requestBody: DescribeWorkspacesConnectionStatusRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeWorkspacesConnectionStatusResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkspacesService.DescribeWorkspacesConnectionStatus', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Disassociates the specified IP access control group from the specified directory.
		 * Post /#X-Amz-Target=WorkspacesService.DisassociateIpGroups
		 * @return {DisassociateIpGroupsResult} Success
		 */
		DisassociateIpGroups(requestBody: DisassociateIpGroupsRequest, headersHandler?: () => {[header: string]: string}): Promise<DisassociateIpGroupsResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkspacesService.DisassociateIpGroups', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Imports the specified Windows 7 or Windows 10 Bring Your Own License (BYOL) image into Amazon WorkSpaces. The image must be an already licensed EC2 image that is in your AWS account, and you must own the image.
		 * Post /#X-Amz-Target=WorkspacesService.ImportWorkspaceImage
		 * @return {ImportWorkspaceImageResult} Success
		 */
		ImportWorkspaceImage(requestBody: ImportWorkspaceImageRequest, headersHandler?: () => {[header: string]: string}): Promise<ImportWorkspaceImageResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkspacesService.ImportWorkspaceImage', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Retrieves a list of IP address ranges, specified as IPv4 CIDR blocks, that you can use for the network management interface when you enable Bring Your Own License (BYOL). </p> <p>The management network interface is connected to a secure Amazon WorkSpaces management network. It is used for interactive streaming of the WorkSpace desktop to Amazon WorkSpaces clients, and to allow Amazon WorkSpaces to manage the WorkSpace.</p>
		 * Post /#X-Amz-Target=WorkspacesService.ListAvailableManagementCidrRanges
		 * @return {ListAvailableManagementCidrRangesResult} Success
		 */
		ListAvailableManagementCidrRanges(requestBody: ListAvailableManagementCidrRangesRequest, headersHandler?: () => {[header: string]: string}): Promise<ListAvailableManagementCidrRangesResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkspacesService.ListAvailableManagementCidrRanges', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Migrates a WorkSpace from one operating system or bundle type to another, while retaining the data on the user volume.</p> <p>The migration process recreates the WorkSpace by using a new root volume from the target bundle image and the user volume from the last available snapshot of the original WorkSpace. During migration, the original <code>D:\Users\%USERNAME%</code> user profile folder is renamed to <code>D:\Users\%USERNAME%MMddyyTHHmmss%.NotMigrated</code>. A new <code>D:\Users\%USERNAME%\</code> folder is generated by the new OS. Certain files in the old user profile are moved to the new user profile.</p> <p>For available migration scenarios, details about what happens during migration, and best practices, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/migrate-workspaces.html">Migrate a WorkSpace</a>.</p>
		 * Post /#X-Amz-Target=WorkspacesService.MigrateWorkspace
		 * @return {MigrateWorkspaceResult} Success
		 */
		MigrateWorkspace(requestBody: MigrateWorkspaceRequest, headersHandler?: () => {[header: string]: string}): Promise<MigrateWorkspaceResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkspacesService.MigrateWorkspace', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Modifies the configuration of Bring Your Own License (BYOL) for the specified account.
		 * Post /#X-Amz-Target=WorkspacesService.ModifyAccount
		 * @return {ModifyAccountResult} Success
		 */
		ModifyAccount(requestBody: ModifyAccountRequest, headersHandler?: () => {[header: string]: string}): Promise<ModifyAccountResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkspacesService.ModifyAccount', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Modifies the properties of the specified Amazon WorkSpaces clients.
		 * Post /#X-Amz-Target=WorkspacesService.ModifyClientProperties
		 * @return {ModifyClientPropertiesResult} Success
		 */
		ModifyClientProperties(requestBody: ModifyClientPropertiesRequest, headersHandler?: () => {[header: string]: string}): Promise<ModifyClientPropertiesResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkspacesService.ModifyClientProperties', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Modifies the self-service WorkSpace management capabilities for your users. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/enable-user-self-service-workspace-management.html">Enable Self-Service WorkSpace Management Capabilities for Your Users</a>.
		 * Post /#X-Amz-Target=WorkspacesService.ModifySelfservicePermissions
		 * @return {ModifySelfservicePermissionsResult} Success
		 */
		ModifySelfservicePermissions(requestBody: ModifySelfservicePermissionsRequest, headersHandler?: () => {[header: string]: string}): Promise<ModifySelfservicePermissionsResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkspacesService.ModifySelfservicePermissions', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Specifies which devices and operating systems users can use to access their WorkSpaces. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-directory-details.html#control-device-access"> Control Device Access</a>.
		 * Post /#X-Amz-Target=WorkspacesService.ModifyWorkspaceAccessProperties
		 * @return {ModifyWorkspaceAccessPropertiesResult} Success
		 */
		ModifyWorkspaceAccessProperties(requestBody: ModifyWorkspaceAccessPropertiesRequest, headersHandler?: () => {[header: string]: string}): Promise<ModifyWorkspaceAccessPropertiesResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkspacesService.ModifyWorkspaceAccessProperties', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Modify the default properties used to create WorkSpaces.
		 * Post /#X-Amz-Target=WorkspacesService.ModifyWorkspaceCreationProperties
		 * @return {ModifyWorkspaceCreationPropertiesResult} Success
		 */
		ModifyWorkspaceCreationProperties(requestBody: ModifyWorkspaceCreationPropertiesRequest, headersHandler?: () => {[header: string]: string}): Promise<ModifyWorkspaceCreationPropertiesResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkspacesService.ModifyWorkspaceCreationProperties', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Modifies the specified WorkSpace properties.
		 * Post /#X-Amz-Target=WorkspacesService.ModifyWorkspaceProperties
		 * @return {ModifyWorkspacePropertiesResult} Success
		 */
		ModifyWorkspaceProperties(requestBody: ModifyWorkspacePropertiesRequest, headersHandler?: () => {[header: string]: string}): Promise<ModifyWorkspacePropertiesResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkspacesService.ModifyWorkspaceProperties', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Sets the state of the specified WorkSpace.</p> <p>To maintain a WorkSpace without being interrupted, set the WorkSpace state to <code>ADMIN_MAINTENANCE</code>. WorkSpaces in this state do not respond to requests to reboot, stop, start, rebuild, or restore. An AutoStop WorkSpace in this state is not stopped. Users cannot log into a WorkSpace in the <code>ADMIN_MAINTENANCE</code> state.</p>
		 * Post /#X-Amz-Target=WorkspacesService.ModifyWorkspaceState
		 * @return {ModifyWorkspaceStateResult} Success
		 */
		ModifyWorkspaceState(requestBody: ModifyWorkspaceStateRequest, headersHandler?: () => {[header: string]: string}): Promise<ModifyWorkspaceStateResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkspacesService.ModifyWorkspaceState', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Reboots the specified WorkSpaces.</p> <p>You cannot reboot a WorkSpace unless its state is <code>AVAILABLE</code> or <code>UNHEALTHY</code>.</p> <p>This operation is asynchronous and returns before the WorkSpaces have rebooted.</p>
		 * Post /#X-Amz-Target=WorkspacesService.RebootWorkspaces
		 * @return {RebootWorkspacesResult} Success
		 */
		RebootWorkspaces(requestBody: RebootWorkspacesRequest, headersHandler?: () => {[header: string]: string}): Promise<RebootWorkspacesResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkspacesService.RebootWorkspaces', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Rebuilds the specified WorkSpace.</p> <p>You cannot rebuild a WorkSpace unless its state is <code>AVAILABLE</code>, <code>ERROR</code>, <code>UNHEALTHY</code>, or <code>STOPPED</code>.</p> <p>Rebuilding a WorkSpace is a potentially destructive action that can result in the loss of data. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/reset-workspace.html">Rebuild a WorkSpace</a>.</p> <p>This operation is asynchronous and returns before the WorkSpaces have been completely rebuilt.</p>
		 * Post /#X-Amz-Target=WorkspacesService.RebuildWorkspaces
		 * @return {RebuildWorkspacesResult} Success
		 */
		RebuildWorkspaces(requestBody: RebuildWorkspacesRequest, headersHandler?: () => {[header: string]: string}): Promise<RebuildWorkspacesResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkspacesService.RebuildWorkspaces', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Registers the specified directory. This operation is asynchronous and returns before the WorkSpace directory is registered. If this is the first time you are registering a directory, you will need to create the workspaces_DefaultRole role before you can register a directory. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspaces-access-control.html#create-default-role"> Creating the workspaces_DefaultRole Role</a>.
		 * Post /#X-Amz-Target=WorkspacesService.RegisterWorkspaceDirectory
		 * @return {RegisterWorkspaceDirectoryResult} Success
		 */
		RegisterWorkspaceDirectory(requestBody: RegisterWorkspaceDirectoryRequest, headersHandler?: () => {[header: string]: string}): Promise<RegisterWorkspaceDirectoryResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkspacesService.RegisterWorkspaceDirectory', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Restores the specified WorkSpace to its last known healthy state.</p> <p>You cannot restore a WorkSpace unless its state is <code> AVAILABLE</code>, <code>ERROR</code>, <code>UNHEALTHY</code>, or <code>STOPPED</code>.</p> <p>Restoring a WorkSpace is a potentially destructive action that can result in the loss of data. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/restore-workspace.html">Restore a WorkSpace</a>.</p> <p>This operation is asynchronous and returns before the WorkSpace is completely restored.</p>
		 * Post /#X-Amz-Target=WorkspacesService.RestoreWorkspace
		 * @return {RestoreWorkspaceResult} Success
		 */
		RestoreWorkspace(requestBody: RestoreWorkspaceRequest, headersHandler?: () => {[header: string]: string}): Promise<RestoreWorkspaceResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkspacesService.RestoreWorkspace', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Removes one or more rules from the specified IP access control group.
		 * Post /#X-Amz-Target=WorkspacesService.RevokeIpRules
		 * @return {RevokeIpRulesResult} Success
		 */
		RevokeIpRules(requestBody: RevokeIpRulesRequest, headersHandler?: () => {[header: string]: string}): Promise<RevokeIpRulesResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkspacesService.RevokeIpRules', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Starts the specified WorkSpaces.</p> <p>You cannot start a WorkSpace unless it has a running mode of <code>AutoStop</code> and a state of <code>STOPPED</code>.</p>
		 * Post /#X-Amz-Target=WorkspacesService.StartWorkspaces
		 * @return {StartWorkspacesResult} Success
		 */
		StartWorkspaces(requestBody: StartWorkspacesRequest, headersHandler?: () => {[header: string]: string}): Promise<StartWorkspacesResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkspacesService.StartWorkspaces', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p> Stops the specified WorkSpaces.</p> <p>You cannot stop a WorkSpace unless it has a running mode of <code>AutoStop</code> and a state of <code>AVAILABLE</code>, <code>IMPAIRED</code>, <code>UNHEALTHY</code>, or <code>ERROR</code>.</p>
		 * Post /#X-Amz-Target=WorkspacesService.StopWorkspaces
		 * @return {StopWorkspacesResult} Success
		 */
		StopWorkspaces(requestBody: StopWorkspacesRequest, headersHandler?: () => {[header: string]: string}): Promise<StopWorkspacesResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkspacesService.StopWorkspaces', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Terminates the specified WorkSpaces.</p> <p>Terminating a WorkSpace is a permanent action and cannot be undone. The user's data is destroyed. If you need to archive any user data, contact Amazon Web Services before terminating the WorkSpace.</p> <p>You can terminate a WorkSpace that is in any state except <code>SUSPENDED</code>.</p> <p>This operation is asynchronous and returns before the WorkSpaces have been completely terminated.</p>
		 * Post /#X-Amz-Target=WorkspacesService.TerminateWorkspaces
		 * @return {TerminateWorkspacesResult} Success
		 */
		TerminateWorkspaces(requestBody: TerminateWorkspacesRequest, headersHandler?: () => {[header: string]: string}): Promise<TerminateWorkspacesResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkspacesService.TerminateWorkspaces', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Replaces the current rules of the specified IP access control group with the specified rules.
		 * Post /#X-Amz-Target=WorkspacesService.UpdateRulesOfIpGroup
		 * @return {UpdateRulesOfIpGroupResult} Success
		 */
		UpdateRulesOfIpGroup(requestBody: UpdateRulesOfIpGroupRequest, headersHandler?: () => {[header: string]: string}): Promise<UpdateRulesOfIpGroupResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=WorkspacesService.UpdateRulesOfIpGroup', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}
	}

}

