export namespace My_Demo_Client {
	export interface AddTagsToResourceRequest {
		ResourceType: AddTagsToResourceRequestResourceType;
		ResourceId: string;
		Tags: Array<Tag>;
	}

	export enum AddTagsToResourceRequestResourceType { Document = 0, ManagedInstance = 1, MaintenanceWindow = 2, Parameter = 3, PatchBaseline = 4, OpsItem = 5 }


	/**<p/> */
	export interface CancelCommandRequest {
		CommandId: string;
		InstanceIds?: Array<InstanceId>;
	}

	export interface CancelMaintenanceWindowExecutionResult {
		WindowExecutionId?: string;
	}

	export interface CancelMaintenanceWindowExecutionRequest {
		WindowExecutionId: string;
	}

	export interface CreateActivationResult {
		ActivationId?: string;
		ActivationCode?: string;
	}

	export interface CreateActivationRequest {
		Description?: string;
		DefaultInstanceName?: string;
		IamRole: string;
		RegistrationLimit?: number;
		ExpirationDate?: Date;
		Tags?: Array<Tag>;
	}

	export interface CreateAssociationResult {

		/**Describes the parameters for a document. */
		AssociationDescription?: AssociationDescription;
	}

	export interface CreateAssociationRequest {
		Name: string;
		DocumentVersion?: string;
		InstanceId?: string;
		Parameters?: Parameters;
		Targets?: Array<Target>;
		ScheduleExpression?: string;

		/**An S3 bucket where you want to store the results of this request. */
		OutputLocation?: InstanceAssociationOutputLocation;
		AssociationName?: string;
		AutomationTargetParameterName?: string;
		MaxErrors?: string;
		MaxConcurrency?: string;
		ComplianceSeverity?: CreateAssociationRequestComplianceSeverity;
		SyncCompliance?: CreateAssociationRequestSyncCompliance;
		ApplyOnlyAtCronInterval?: boolean;
	}

	export enum CreateAssociationRequestComplianceSeverity { CRITICAL = 0, HIGH = 1, MEDIUM = 2, LOW = 3, UNSPECIFIED = 4 }

	export enum CreateAssociationRequestSyncCompliance { AUTO = 0, MANUAL = 1 }

	export interface CreateAssociationBatchResult {
		Successful?: Array<AssociationDescription>;
		Failed?: Array<FailedCreateAssociation>;
	}

	export interface CreateAssociationBatchRequest {
		Entries: Array<CreateAssociationBatchRequestEntry>;
	}

	export interface CreateDocumentResult {

		/**Describes a Systems Manager document. */
		DocumentDescription?: DocumentDescription;
	}

	export interface CreateDocumentRequest {
		Content: string;
		Requires?: Array<DocumentRequires>;
		Attachments?: Array<AttachmentsSource>;
		Name: string;
		VersionName?: string;
		DocumentType?: CreateDocumentRequestDocumentType;
		DocumentFormat?: CreateDocumentRequestDocumentFormat;
		TargetType?: string;
		Tags?: Array<Tag>;
	}

	export enum CreateDocumentRequestDocumentType { Command = 0, Policy = 1, Automation = 2, Session = 3, Package = 4, ApplicationConfiguration = 5, ApplicationConfigurationSchema = 6, DeploymentStrategy = 7, ChangeCalendar = 8 }

	export enum CreateDocumentRequestDocumentFormat { YAML = 0, JSON = 1, TEXT = 2 }

	export interface CreateMaintenanceWindowResult {
		WindowId?: string;
	}

	export interface CreateMaintenanceWindowRequest {
		Name: string;
		Description?: string;
		StartDate?: string;
		EndDate?: string;
		Schedule: string;
		ScheduleTimezone?: string;
		Duration: number;
		Cutoff: number;
		AllowUnassociatedTargets: boolean;
		ClientToken?: string;
		Tags?: Array<Tag>;
	}

	export interface CreateOpsItemResponse {
		OpsItemId?: string;
	}

	export interface CreateOpsItemRequest {
		Description: string;
		OperationalData?: OpsItemOperationalData;
		Notifications?: Array<OpsItemNotification>;
		Priority?: number;
		RelatedOpsItems?: Array<RelatedOpsItem>;
		Source: string;
		Title: string;
		Tags?: Array<Tag>;
		Category?: string;
		Severity?: string;
	}

	export interface CreatePatchBaselineResult {
		BaselineId?: string;
	}

	export interface CreatePatchBaselineRequest {
		OperatingSystem?: CreatePatchBaselineRequestOperatingSystem;
		Name: string;

		/**A set of patch filters, typically used for approval rules. */
		GlobalFilters?: PatchFilterGroup;

		/**A set of rules defining the approval rules for a patch baseline. */
		ApprovalRules?: PatchRuleGroup;
		ApprovedPatches?: Array<PatchId>;
		ApprovedPatchesComplianceLevel?: CreatePatchBaselineRequestApprovedPatchesComplianceLevel;
		ApprovedPatchesEnableNonSecurity?: boolean;
		RejectedPatches?: Array<PatchId>;
		RejectedPatchesAction?: CreatePatchBaselineRequestRejectedPatchesAction;
		Description?: string;
		Sources?: Array<PatchSource>;
		ClientToken?: string;
		Tags?: Array<Tag>;
	}

	export enum CreatePatchBaselineRequestOperatingSystem { WINDOWS = 0, AMAZON_LINUX = 1, AMAZON_LINUX_2 = 2, UBUNTU = 3, REDHAT_ENTERPRISE_LINUX = 4, SUSE = 5, CENTOS = 6, ORACLE_LINUX = 7, DEBIAN = 8 }

	export enum CreatePatchBaselineRequestApprovedPatchesComplianceLevel { CRITICAL = 0, HIGH = 1, MEDIUM = 2, LOW = 3, INFORMATIONAL = 4, UNSPECIFIED = 5 }

	export enum CreatePatchBaselineRequestRejectedPatchesAction { ALLOW_AS_DEPENDENCY = 0, BLOCK = 1 }

	export interface CreateResourceDataSyncRequest {
		SyncName: string;

		/**Information about the target S3 bucket for the Resource Data Sync. */
		S3Destination?: ResourceDataSyncS3Destination;
		SyncType?: string;

		/**Information about the source of the data included in the resource data sync. */
		SyncSource?: ResourceDataSyncSource;
	}

	export interface DeleteActivationRequest {
		ActivationId: string;
	}

	export interface DeleteAssociationRequest {
		Name?: string;
		InstanceId?: string;
		AssociationId?: string;
	}

	export interface DeleteDocumentRequest {
		Name: string;
		DocumentVersion?: string;
		VersionName?: string;
		Force?: boolean;
	}

	export interface DeleteInventoryResult {
		DeletionId?: string;
		TypeName?: string;

		/**Information about the delete operation. */
		DeletionSummary?: InventoryDeletionSummary;
	}

	export interface DeleteInventoryRequest {
		TypeName: string;
		SchemaDeleteOption?: DeleteInventoryRequestSchemaDeleteOption;
		DryRun?: boolean;
		ClientToken?: string;
	}

	export enum DeleteInventoryRequestSchemaDeleteOption { DisableSchema = 0, DeleteSchema = 1 }

	export interface DeleteMaintenanceWindowResult {
		WindowId?: string;
	}

	export interface DeleteMaintenanceWindowRequest {
		WindowId: string;
	}

	export interface DeleteParameterRequest {
		Name: string;
	}

	export interface DeleteParametersResult {
		DeletedParameters?: Array<PSParameterName>;
		InvalidParameters?: Array<PSParameterName>;
	}

	export interface DeleteParametersRequest {
		Names: Array<PSParameterName>;
	}

	export interface DeletePatchBaselineResult {
		BaselineId?: string;
	}

	export interface DeletePatchBaselineRequest {
		BaselineId: string;
	}

	export interface DeleteResourceDataSyncRequest {
		SyncName: string;
		SyncType?: string;
	}

	export interface DeregisterManagedInstanceRequest {
		InstanceId: string;
	}

	export interface DeregisterPatchBaselineForPatchGroupResult {
		BaselineId?: string;
		PatchGroup?: string;
	}

	export interface DeregisterPatchBaselineForPatchGroupRequest {
		BaselineId: string;
		PatchGroup: string;
	}

	export interface DeregisterTargetFromMaintenanceWindowResult {
		WindowId?: string;
		WindowTargetId?: string;
	}

	export interface DeregisterTargetFromMaintenanceWindowRequest {
		WindowId: string;
		WindowTargetId: string;
		Safe?: boolean;
	}

	export interface DeregisterTaskFromMaintenanceWindowResult {
		WindowId?: string;
		WindowTaskId?: string;
	}

	export interface DeregisterTaskFromMaintenanceWindowRequest {
		WindowId: string;
		WindowTaskId: string;
	}

	export interface DescribeActivationsResult {
		ActivationList?: Array<Activation>;
		NextToken?: string;
	}

	export interface DescribeActivationsRequest {
		Filters?: Array<DescribeActivationsFilter>;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface DescribeAssociationResult {

		/**Describes the parameters for a document. */
		AssociationDescription?: AssociationDescription;
	}

	export interface DescribeAssociationRequest {
		Name?: string;
		InstanceId?: string;
		AssociationId?: string;
		AssociationVersion?: string;
	}

	export interface DescribeAssociationExecutionTargetsResult {
		AssociationExecutionTargets?: Array<AssociationExecutionTarget>;
		NextToken?: string;
	}

	export interface DescribeAssociationExecutionTargetsRequest {
		AssociationId: string;
		ExecutionId: string;
		Filters?: Array<AssociationExecutionTargetsFilter>;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface DescribeAssociationExecutionsResult {
		AssociationExecutions?: Array<AssociationExecution>;
		NextToken?: string;
	}

	export interface DescribeAssociationExecutionsRequest {
		AssociationId: string;
		Filters?: Array<AssociationExecutionFilter>;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface DescribeAutomationExecutionsResult {
		AutomationExecutionMetadataList?: Array<AutomationExecutionMetadata>;
		NextToken?: string;
	}

	export interface DescribeAutomationExecutionsRequest {
		Filters?: Array<AutomationExecutionFilter>;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface DescribeAutomationStepExecutionsResult {
		StepExecutions?: Array<StepExecution>;
		NextToken?: string;
	}

	export interface DescribeAutomationStepExecutionsRequest {
		AutomationExecutionId: string;
		Filters?: Array<StepExecutionFilter>;
		NextToken?: string;
		MaxResults?: number;
		ReverseOrder?: boolean;
	}

	export interface DescribeAvailablePatchesResult {
		Patches?: Array<Patch>;
		NextToken?: string;
	}

	export interface DescribeAvailablePatchesRequest {
		Filters?: Array<PatchOrchestratorFilter>;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface DescribeDocumentResult {

		/**Describes a Systems Manager document. */
		Document?: DocumentDescription;
	}

	export interface DescribeDocumentRequest {
		Name: string;
		DocumentVersion?: string;
		VersionName?: string;
	}

	export interface DescribeDocumentPermissionResponse {
		AccountIds?: Array<AccountId>;

		/**A list of of AWS accounts where the current document is shared and the version shared with each account. */
		AccountSharingInfoList?: Array<AccountSharingInfo>;
	}

	export interface DescribeDocumentPermissionRequest {
		Name: string;
		PermissionType: DescribeDocumentPermissionRequestPermissionType;
	}

	export enum DescribeDocumentPermissionRequestPermissionType { Share = 0 }

	export interface DescribeEffectiveInstanceAssociationsResult {
		Associations?: Array<InstanceAssociation>;
		NextToken?: string;
	}

	export interface DescribeEffectiveInstanceAssociationsRequest {
		InstanceId: string;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface DescribeEffectivePatchesForPatchBaselineResult {
		EffectivePatches?: Array<EffectivePatch>;
		NextToken?: string;
	}

	export interface DescribeEffectivePatchesForPatchBaselineRequest {
		BaselineId: string;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface DescribeInstanceAssociationsStatusResult {
		InstanceAssociationStatusInfos?: Array<InstanceAssociationStatusInfo>;
		NextToken?: string;
	}

	export interface DescribeInstanceAssociationsStatusRequest {
		InstanceId: string;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface DescribeInstanceInformationResult {
		InstanceInformationList?: Array<InstanceInformation>;
		NextToken?: string;
	}

	export interface DescribeInstanceInformationRequest {
		InstanceInformationFilterList?: Array<InstanceInformationFilter>;
		Filters?: Array<InstanceInformationStringFilter>;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface DescribeInstancePatchStatesResult {
		InstancePatchStates?: Array<InstancePatchState>;
		NextToken?: string;
	}

	export interface DescribeInstancePatchStatesRequest {
		InstanceIds: Array<InstanceId>;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface DescribeInstancePatchStatesForPatchGroupResult {
		InstancePatchStates?: Array<InstancePatchState>;
		NextToken?: string;
	}

	export interface DescribeInstancePatchStatesForPatchGroupRequest {
		PatchGroup: string;
		Filters?: Array<InstancePatchStateFilter>;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface DescribeInstancePatchesResult {
		Patches?: Array<PatchComplianceData>;
		NextToken?: string;
	}

	export interface DescribeInstancePatchesRequest {
		InstanceId: string;
		Filters?: Array<PatchOrchestratorFilter>;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface DescribeInventoryDeletionsResult {
		InventoryDeletions?: Array<InventoryDeletionStatusItem>;
		NextToken?: string;
	}

	export interface DescribeInventoryDeletionsRequest {
		DeletionId?: string;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface DescribeMaintenanceWindowExecutionTaskInvocationsResult {
		WindowExecutionTaskInvocationIdentities?: Array<MaintenanceWindowExecutionTaskInvocationIdentity>;
		NextToken?: string;
	}

	export interface DescribeMaintenanceWindowExecutionTaskInvocationsRequest {
		WindowExecutionId: string;
		TaskId: string;
		Filters?: Array<MaintenanceWindowFilter>;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface DescribeMaintenanceWindowExecutionTasksResult {
		WindowExecutionTaskIdentities?: Array<MaintenanceWindowExecutionTaskIdentity>;
		NextToken?: string;
	}

	export interface DescribeMaintenanceWindowExecutionTasksRequest {
		WindowExecutionId: string;
		Filters?: Array<MaintenanceWindowFilter>;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface DescribeMaintenanceWindowExecutionsResult {
		WindowExecutions?: Array<MaintenanceWindowExecution>;
		NextToken?: string;
	}

	export interface DescribeMaintenanceWindowExecutionsRequest {
		WindowId: string;
		Filters?: Array<MaintenanceWindowFilter>;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface DescribeMaintenanceWindowScheduleResult {
		ScheduledWindowExecutions?: Array<ScheduledWindowExecution>;
		NextToken?: string;
	}

	export interface DescribeMaintenanceWindowScheduleRequest {
		WindowId?: string;
		Targets?: Array<Target>;
		ResourceType?: DescribeMaintenanceWindowScheduleRequestResourceType;
		Filters?: Array<PatchOrchestratorFilter>;
		MaxResults?: number;
		NextToken?: string;
	}

	export enum DescribeMaintenanceWindowScheduleRequestResourceType { INSTANCE = 0, RESOURCE_GROUP = 1 }

	export interface DescribeMaintenanceWindowTargetsResult {
		Targets?: Array<MaintenanceWindowTarget>;
		NextToken?: string;
	}

	export interface DescribeMaintenanceWindowTargetsRequest {
		WindowId: string;
		Filters?: Array<MaintenanceWindowFilter>;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface DescribeMaintenanceWindowTasksResult {
		Tasks?: Array<MaintenanceWindowTask>;
		NextToken?: string;
	}

	export interface DescribeMaintenanceWindowTasksRequest {
		WindowId: string;
		Filters?: Array<MaintenanceWindowFilter>;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface DescribeMaintenanceWindowsResult {
		WindowIdentities?: Array<MaintenanceWindowIdentity>;
		NextToken?: string;
	}

	export interface DescribeMaintenanceWindowsRequest {
		Filters?: Array<MaintenanceWindowFilter>;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface DescribeMaintenanceWindowsForTargetResult {
		WindowIdentities?: Array<MaintenanceWindowIdentityForTarget>;
		NextToken?: string;
	}

	export interface DescribeMaintenanceWindowsForTargetRequest {
		Targets: Array<Target>;
		ResourceType: DescribeMaintenanceWindowsForTargetRequestResourceType;
		MaxResults?: number;
		NextToken?: string;
	}

	export enum DescribeMaintenanceWindowsForTargetRequestResourceType { INSTANCE = 0, RESOURCE_GROUP = 1 }

	export interface DescribeOpsItemsResponse {
		NextToken?: string;
		OpsItemSummaries?: Array<OpsItemSummary>;
	}

	export interface DescribeOpsItemsRequest {
		OpsItemFilters?: Array<OpsItemFilter>;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface DescribeParametersResult {
		Parameters?: Array<ParameterMetadata>;
		NextToken?: string;
	}

	export interface DescribeParametersRequest {
		Filters?: Array<ParametersFilter>;
		ParameterFilters?: Array<ParameterStringFilter>;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface DescribePatchBaselinesResult {
		BaselineIdentities?: Array<PatchBaselineIdentity>;
		NextToken?: string;
	}

	export interface DescribePatchBaselinesRequest {
		Filters?: Array<PatchOrchestratorFilter>;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface DescribePatchGroupStateResult {
		Instances?: number;
		InstancesWithInstalledPatches?: number;
		InstancesWithInstalledOtherPatches?: number;
		InstancesWithInstalledPendingRebootPatches?: number;
		InstancesWithInstalledRejectedPatches?: number;
		InstancesWithMissingPatches?: number;
		InstancesWithFailedPatches?: number;
		InstancesWithNotApplicablePatches?: number;
		InstancesWithUnreportedNotApplicablePatches?: number;
	}

	export interface DescribePatchGroupStateRequest {
		PatchGroup: string;
	}

	export interface DescribePatchGroupsResult {
		Mappings?: Array<PatchGroupPatchBaselineMapping>;
		NextToken?: string;
	}

	export interface DescribePatchGroupsRequest {
		MaxResults?: number;
		Filters?: Array<PatchOrchestratorFilter>;
		NextToken?: string;
	}

	export interface DescribePatchPropertiesResult {
		Properties?: Array<PatchPropertyEntry>;
		NextToken?: string;
	}

	export interface DescribePatchPropertiesRequest {
		OperatingSystem: DescribePatchPropertiesRequestOperatingSystem;
		Property: DescribePatchPropertiesRequestProperty;
		PatchSet?: DescribePatchPropertiesRequestPatchSet;
		MaxResults?: number;
		NextToken?: string;
	}

	export enum DescribePatchPropertiesRequestOperatingSystem { WINDOWS = 0, AMAZON_LINUX = 1, AMAZON_LINUX_2 = 2, UBUNTU = 3, REDHAT_ENTERPRISE_LINUX = 4, SUSE = 5, CENTOS = 6, ORACLE_LINUX = 7, DEBIAN = 8 }

	export enum DescribePatchPropertiesRequestProperty { PRODUCT = 0, PRODUCT_FAMILY = 1, CLASSIFICATION = 2, MSRC_SEVERITY = 3, PRIORITY = 4, SEVERITY = 5 }

	export enum DescribePatchPropertiesRequestPatchSet { OS = 0, APPLICATION = 1 }

	export interface DescribeSessionsResponse {
		Sessions?: Array<Session>;
		NextToken?: string;
	}

	export interface DescribeSessionsRequest {
		State: DescribeSessionsRequestState;
		MaxResults?: number;
		NextToken?: string;
		Filters?: Array<SessionFilter>;
	}

	export enum DescribeSessionsRequestState { Active = 0, History = 1 }

	export interface GetAutomationExecutionResult {

		/**Detailed information about the current state of an individual Automation execution. */
		AutomationExecution?: AutomationExecution;
	}

	export interface GetAutomationExecutionRequest {
		AutomationExecutionId: string;
	}

	export interface GetCalendarStateResponse {
		State?: GetCalendarStateResponseState;
		AtTime?: string;
		NextTransitionTime?: string;
	}

	export enum GetCalendarStateResponseState { OPEN = 0, CLOSED = 1 }

	export interface GetCalendarStateRequest {
		CalendarNames: Array<CalendarNameOrARN>;
		AtTime?: string;
	}

	export interface GetCommandInvocationResult {
		CommandId?: string;
		InstanceId?: string;
		Comment?: string;
		DocumentName?: string;
		DocumentVersion?: string;
		PluginName?: string;
		ResponseCode?: number;
		ExecutionStartDateTime?: string;
		ExecutionElapsedTime?: string;
		ExecutionEndDateTime?: string;
		Status?: GetCommandInvocationResultStatus;
		StatusDetails?: string;
		StandardOutputContent?: string;
		StandardOutputUrl?: string;
		StandardErrorContent?: string;
		StandardErrorUrl?: string;

		/**Configuration options for sending command output to CloudWatch Logs. */
		CloudWatchOutputConfig?: CloudWatchOutputConfig;
	}

	export enum GetCommandInvocationResultStatus { Pending = 0, InProgress = 1, Delayed = 2, Success = 3, Cancelled = 4, TimedOut = 5, Failed = 6, Cancelling = 7 }

	export interface GetCommandInvocationRequest {
		CommandId: string;
		InstanceId: string;
		PluginName?: string;
	}

	export interface GetConnectionStatusResponse {
		Target?: string;
		Status?: GetConnectionStatusResponseStatus;
	}

	export enum GetConnectionStatusResponseStatus { Connected = 0, NotConnected = 1 }

	export interface GetConnectionStatusRequest {
		Target: string;
	}

	export interface GetDefaultPatchBaselineResult {
		BaselineId?: string;
		OperatingSystem?: GetDefaultPatchBaselineResultOperatingSystem;
	}

	export enum GetDefaultPatchBaselineResultOperatingSystem { WINDOWS = 0, AMAZON_LINUX = 1, AMAZON_LINUX_2 = 2, UBUNTU = 3, REDHAT_ENTERPRISE_LINUX = 4, SUSE = 5, CENTOS = 6, ORACLE_LINUX = 7, DEBIAN = 8 }

	export interface GetDefaultPatchBaselineRequest {
		OperatingSystem?: GetDefaultPatchBaselineRequestOperatingSystem;
	}

	export enum GetDefaultPatchBaselineRequestOperatingSystem { WINDOWS = 0, AMAZON_LINUX = 1, AMAZON_LINUX_2 = 2, UBUNTU = 3, REDHAT_ENTERPRISE_LINUX = 4, SUSE = 5, CENTOS = 6, ORACLE_LINUX = 7, DEBIAN = 8 }

	export interface GetDeployablePatchSnapshotForInstanceResult {
		InstanceId?: string;
		SnapshotId?: string;
		SnapshotDownloadUrl?: string;
		Product?: string;
	}

	export interface GetDeployablePatchSnapshotForInstanceRequest {
		InstanceId: string;
		SnapshotId: string;
	}

	export interface GetDocumentResult {
		Name?: string;
		VersionName?: string;
		DocumentVersion?: string;

		/**The status of a document. */
		Status?: GetDocumentResultStatus;
		StatusInformation?: string;
		Content?: string;
		DocumentType?: GetDocumentResultDocumentType;
		DocumentFormat?: GetDocumentResultDocumentFormat;
		Requires?: Array<DocumentRequires>;
		AttachmentsContent?: Array<AttachmentContent>;
	}

	export enum GetDocumentResultStatus { Creating = 0, Active = 1, Updating = 2, Deleting = 3, Failed = 4 }

	export enum GetDocumentResultDocumentType { Command = 0, Policy = 1, Automation = 2, Session = 3, Package = 4, ApplicationConfiguration = 5, ApplicationConfigurationSchema = 6, DeploymentStrategy = 7, ChangeCalendar = 8 }

	export enum GetDocumentResultDocumentFormat { YAML = 0, JSON = 1, TEXT = 2 }

	export interface GetDocumentRequest {
		Name: string;
		VersionName?: string;
		DocumentVersion?: string;
		DocumentFormat?: GetDocumentRequestDocumentFormat;
	}

	export enum GetDocumentRequestDocumentFormat { YAML = 0, JSON = 1, TEXT = 2 }

	export interface GetInventoryResult {
		Entities?: Array<InventoryResultEntity>;
		NextToken?: string;
	}

	export interface GetInventoryRequest {
		Filters?: Array<InventoryFilter>;
		Aggregators?: Array<InventoryAggregator>;
		ResultAttributes?: Array<ResultAttribute>;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface GetInventorySchemaResult {
		Schemas?: Array<InventoryItemSchema>;
		NextToken?: string;
	}

	export interface GetInventorySchemaRequest {
		TypeName?: string;
		NextToken?: string;
		MaxResults?: number;
		Aggregator?: boolean;
		SubType?: boolean;
	}

	export interface GetMaintenanceWindowResult {
		WindowId?: string;
		Name?: string;
		Description?: string;
		StartDate?: string;
		EndDate?: string;
		Schedule?: string;
		ScheduleTimezone?: string;
		NextExecutionTime?: string;
		Duration?: number;
		Cutoff?: number;
		AllowUnassociatedTargets?: boolean;
		Enabled?: boolean;
		CreatedDate?: Date;
		ModifiedDate?: Date;
	}

	export interface GetMaintenanceWindowRequest {
		WindowId: string;
	}

	export interface GetMaintenanceWindowExecutionResult {
		WindowExecutionId?: string;
		TaskIds?: Array<MaintenanceWindowExecutionTaskId>;
		Status?: GetMaintenanceWindowExecutionResultStatus;
		StatusDetails?: string;
		StartTime?: Date;
		EndTime?: Date;
	}

	export enum GetMaintenanceWindowExecutionResultStatus { PENDING = 0, IN_PROGRESS = 1, SUCCESS = 2, FAILED = 3, TIMED_OUT = 4, CANCELLING = 5, CANCELLED = 6, SKIPPED_OVERLAPPING = 7 }

	export interface GetMaintenanceWindowExecutionRequest {
		WindowExecutionId: string;
	}

	export interface GetMaintenanceWindowExecutionTaskResult {
		WindowExecutionId?: string;
		TaskExecutionId?: string;
		TaskArn?: string;
		ServiceRole?: string;
		Type?: GetMaintenanceWindowExecutionTaskResultType;
		TaskParameters?: Array<MaintenanceWindowTaskParameters>;
		Priority?: number;
		MaxConcurrency?: string;
		MaxErrors?: string;
		Status?: GetMaintenanceWindowExecutionTaskResultStatus;
		StatusDetails?: string;
		StartTime?: Date;
		EndTime?: Date;
	}

	export enum GetMaintenanceWindowExecutionTaskResultType { RUN_COMMAND = 0, AUTOMATION = 1, STEP_FUNCTIONS = 2, LAMBDA = 3 }

	export enum GetMaintenanceWindowExecutionTaskResultStatus { PENDING = 0, IN_PROGRESS = 1, SUCCESS = 2, FAILED = 3, TIMED_OUT = 4, CANCELLING = 5, CANCELLED = 6, SKIPPED_OVERLAPPING = 7 }

	export interface GetMaintenanceWindowExecutionTaskRequest {
		WindowExecutionId: string;
		TaskId: string;
	}

	export interface GetMaintenanceWindowExecutionTaskInvocationResult {
		WindowExecutionId?: string;
		TaskExecutionId?: string;
		InvocationId?: string;
		ExecutionId?: string;
		TaskType?: GetMaintenanceWindowExecutionTaskInvocationResultTaskType;
		Parameters?: string;
		Status?: GetMaintenanceWindowExecutionTaskInvocationResultStatus;
		StatusDetails?: string;
		StartTime?: Date;
		EndTime?: Date;
		OwnerInformation?: string;
		WindowTargetId?: string;
	}

	export enum GetMaintenanceWindowExecutionTaskInvocationResultTaskType { RUN_COMMAND = 0, AUTOMATION = 1, STEP_FUNCTIONS = 2, LAMBDA = 3 }

	export enum GetMaintenanceWindowExecutionTaskInvocationResultStatus { PENDING = 0, IN_PROGRESS = 1, SUCCESS = 2, FAILED = 3, TIMED_OUT = 4, CANCELLING = 5, CANCELLED = 6, SKIPPED_OVERLAPPING = 7 }

	export interface GetMaintenanceWindowExecutionTaskInvocationRequest {
		WindowExecutionId: string;
		TaskId: string;
		InvocationId: string;
	}

	export interface GetMaintenanceWindowTaskResult {
		WindowId?: string;
		WindowTaskId?: string;
		Targets?: Array<Target>;
		TaskArn?: string;
		ServiceRoleArn?: string;
		TaskType?: GetMaintenanceWindowTaskResultTaskType;
		TaskParameters?: MaintenanceWindowTaskParameters;

		/**The parameters for task execution. */
		TaskInvocationParameters?: MaintenanceWindowTaskInvocationParameters;
		Priority?: number;
		MaxConcurrency?: string;
		MaxErrors?: string;

		/**<p>Information about an S3 bucket to write instance-level logs to.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> </note> */
		LoggingInfo?: LoggingInfo;
		Name?: string;
		Description?: string;
	}

	export enum GetMaintenanceWindowTaskResultTaskType { RUN_COMMAND = 0, AUTOMATION = 1, STEP_FUNCTIONS = 2, LAMBDA = 3 }

	export interface GetMaintenanceWindowTaskRequest {
		WindowId: string;
		WindowTaskId: string;
	}

	export interface GetOpsItemResponse {

		/**Operations engineers and IT professionals use OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their AWS resources. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">AWS Systems Manager OpsCenter</a> in the <i>AWS Systems Manager User Guide</i>. */
		OpsItem?: OpsItem;
	}

	export interface GetOpsItemRequest {
		OpsItemId: string;
	}

	export interface GetOpsSummaryResult {
		Entities?: Array<OpsEntity>;
		NextToken?: string;
	}

	export interface GetOpsSummaryRequest {
		SyncName?: string;
		Filters?: Array<OpsFilter>;
		Aggregators?: Array<OpsAggregator>;
		ResultAttributes?: Array<OpsResultAttribute>;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface GetParameterResult {

		/**An Systems Manager parameter in Parameter Store. */
		Parameter?: Parameter;
	}

	export interface GetParameterRequest {
		Name: string;
		WithDecryption?: boolean;
	}

	export interface GetParameterHistoryResult {
		Parameters?: Array<ParameterHistory>;
		NextToken?: string;
	}

	export interface GetParameterHistoryRequest {
		Name: string;
		WithDecryption?: boolean;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface GetParametersResult {
		Parameters?: Array<Parameter>;
		InvalidParameters?: Array<PSParameterName>;
	}

	export interface GetParametersRequest {
		Names: Array<PSParameterName>;
		WithDecryption?: boolean;
	}

	export interface GetParametersByPathResult {
		Parameters?: Array<Parameter>;
		NextToken?: string;
	}

	export interface GetParametersByPathRequest {
		Path: string;
		Recursive?: boolean;
		ParameterFilters?: Array<ParameterStringFilter>;
		WithDecryption?: boolean;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface GetPatchBaselineResult {
		BaselineId?: string;
		Name?: string;
		OperatingSystem?: GetPatchBaselineResultOperatingSystem;

		/**A set of patch filters, typically used for approval rules. */
		GlobalFilters?: PatchFilterGroup;

		/**A set of rules defining the approval rules for a patch baseline. */
		ApprovalRules?: PatchRuleGroup;
		ApprovedPatches?: Array<PatchId>;
		ApprovedPatchesComplianceLevel?: GetPatchBaselineResultApprovedPatchesComplianceLevel;
		ApprovedPatchesEnableNonSecurity?: boolean;
		RejectedPatches?: Array<PatchId>;
		RejectedPatchesAction?: GetPatchBaselineResultRejectedPatchesAction;
		PatchGroups?: Array<PatchGroup>;
		CreatedDate?: Date;
		ModifiedDate?: Date;
		Description?: string;
		Sources?: Array<PatchSource>;
	}

	export enum GetPatchBaselineResultOperatingSystem { WINDOWS = 0, AMAZON_LINUX = 1, AMAZON_LINUX_2 = 2, UBUNTU = 3, REDHAT_ENTERPRISE_LINUX = 4, SUSE = 5, CENTOS = 6, ORACLE_LINUX = 7, DEBIAN = 8 }

	export enum GetPatchBaselineResultApprovedPatchesComplianceLevel { CRITICAL = 0, HIGH = 1, MEDIUM = 2, LOW = 3, INFORMATIONAL = 4, UNSPECIFIED = 5 }

	export enum GetPatchBaselineResultRejectedPatchesAction { ALLOW_AS_DEPENDENCY = 0, BLOCK = 1 }

	export interface GetPatchBaselineRequest {
		BaselineId: string;
	}

	export interface GetPatchBaselineForPatchGroupResult {
		BaselineId?: string;
		PatchGroup?: string;
		OperatingSystem?: GetPatchBaselineForPatchGroupResultOperatingSystem;
	}

	export enum GetPatchBaselineForPatchGroupResultOperatingSystem { WINDOWS = 0, AMAZON_LINUX = 1, AMAZON_LINUX_2 = 2, UBUNTU = 3, REDHAT_ENTERPRISE_LINUX = 4, SUSE = 5, CENTOS = 6, ORACLE_LINUX = 7, DEBIAN = 8 }

	export interface GetPatchBaselineForPatchGroupRequest {
		PatchGroup: string;
		OperatingSystem?: GetPatchBaselineForPatchGroupRequestOperatingSystem;
	}

	export enum GetPatchBaselineForPatchGroupRequestOperatingSystem { WINDOWS = 0, AMAZON_LINUX = 1, AMAZON_LINUX_2 = 2, UBUNTU = 3, REDHAT_ENTERPRISE_LINUX = 4, SUSE = 5, CENTOS = 6, ORACLE_LINUX = 7, DEBIAN = 8 }


	/**The query result body of the GetServiceSetting API action. */
	export interface GetServiceSettingResult {

		/**<p>The service setting data structure.</p> <p> <code>ServiceSetting</code> is an account-level setting for an AWS service. This setting defines how a user interacts with or uses a service or a feature of a service. For example, if an AWS service charges money to the account based on feature or service usage, then the AWS service team might create a default setting of "false". This means the user can't use this feature unless they change the setting to "true" and intentionally opt in for a paid feature.</p> <p>Services map a <code>SettingId</code> object to a setting value. AWS services teams define the default value for a <code>SettingId</code>. You can't create a new <code>SettingId</code>, but you can overwrite the default value if you have the <code>ssm:UpdateServiceSetting</code> permission for the setting. Use the <a>UpdateServiceSetting</a> API action to change the default setting. Or, use the <a>ResetServiceSetting</a> to change the value back to the original value defined by the AWS service team.</p> */
		ServiceSetting?: ServiceSetting;
	}


	/**The request body of the GetServiceSetting API action. */
	export interface GetServiceSettingRequest {
		SettingId: string;
	}

	export interface LabelParameterVersionResult {
		InvalidLabels?: Array<ParameterLabel>;
		ParameterVersion?: number;
	}

	export interface LabelParameterVersionRequest {
		Name: string;
		ParameterVersion?: number;
		Labels: Array<ParameterLabel>;
	}

	export interface ListAssociationVersionsResult {
		AssociationVersions?: Array<AssociationVersionInfo>;
		NextToken?: string;
	}

	export interface ListAssociationVersionsRequest {
		AssociationId: string;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface ListAssociationsResult {
		Associations?: Array<Association>;
		NextToken?: string;
	}

	export interface ListAssociationsRequest {
		AssociationFilterList?: Array<AssociationFilter>;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface ListCommandInvocationsResult {
		CommandInvocations?: Array<CommandInvocation>;
		NextToken?: string;
	}

	export interface ListCommandInvocationsRequest {
		CommandId?: string;
		InstanceId?: string;
		MaxResults?: number;
		NextToken?: string;
		Filters?: Array<CommandFilter>;
		Details?: boolean;
	}

	export interface ListCommandsResult {
		Commands?: Array<Command>;
		NextToken?: string;
	}

	export interface ListCommandsRequest {
		CommandId?: string;
		InstanceId?: string;
		MaxResults?: number;
		NextToken?: string;
		Filters?: Array<CommandFilter>;
	}

	export interface ListComplianceItemsResult {
		ComplianceItems?: Array<ComplianceItem>;
		NextToken?: string;
	}

	export interface ListComplianceItemsRequest {
		Filters?: Array<ComplianceStringFilter>;
		ResourceIds?: Array<ComplianceResourceId>;
		ResourceTypes?: Array<ComplianceResourceType>;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListComplianceSummariesResult {
		ComplianceSummaryItems?: Array<ComplianceSummaryItem>;
		NextToken?: string;
	}

	export interface ListComplianceSummariesRequest {
		Filters?: Array<ComplianceStringFilter>;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListDocumentVersionsResult {
		DocumentVersions?: Array<DocumentVersionInfo>;
		NextToken?: string;
	}

	export interface ListDocumentVersionsRequest {
		Name: string;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface ListDocumentsResult {
		DocumentIdentifiers?: Array<DocumentIdentifier>;
		NextToken?: string;
	}

	export interface ListDocumentsRequest {
		DocumentFilterList?: Array<DocumentFilter>;
		Filters?: Array<DocumentKeyValuesFilter>;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface ListInventoryEntriesResult {
		TypeName?: string;
		InstanceId?: string;
		SchemaVersion?: string;
		CaptureTime?: string;
		Entries?: Array<InventoryItemEntry>;
		NextToken?: string;
	}

	export interface ListInventoryEntriesRequest {
		InstanceId: string;
		TypeName: string;
		Filters?: Array<InventoryFilter>;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListResourceComplianceSummariesResult {
		ResourceComplianceSummaryItems?: Array<ResourceComplianceSummaryItem>;
		NextToken?: string;
	}

	export interface ListResourceComplianceSummariesRequest {
		Filters?: Array<ComplianceStringFilter>;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListResourceDataSyncResult {
		ResourceDataSyncItems?: Array<ResourceDataSyncItem>;
		NextToken?: string;
	}

	export interface ListResourceDataSyncRequest {
		SyncType?: string;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListTagsForResourceResult {
		TagList?: Array<Tag>;
	}

	export interface ListTagsForResourceRequest {
		ResourceType: ListTagsForResourceRequestResourceType;
		ResourceId: string;
	}

	export enum ListTagsForResourceRequestResourceType { Document = 0, ManagedInstance = 1, MaintenanceWindow = 2, Parameter = 3, PatchBaseline = 4, OpsItem = 5 }

	export interface ModifyDocumentPermissionRequest {
		Name: string;
		PermissionType: ModifyDocumentPermissionRequestPermissionType;
		AccountIdsToAdd?: Array<AccountId>;
		AccountIdsToRemove?: Array<AccountId>;

		/**
		 * The document version shared with other accounts. You can share <code>Latest</code>, <code>Default</code> or <code>All versions</code>.
		 * Max length: 8
		 * Pattern: ([$]LATEST|[$]DEFAULT|[$]ALL)
		 */
		SharedDocumentVersion?: string;
	}

	export enum ModifyDocumentPermissionRequestPermissionType { Share = 0 }

	export interface PutComplianceItemsRequest {
		ResourceId: string;
		ResourceType: string;
		ComplianceType: string;

		/**A summary of the call execution that includes an execution ID, the type of execution (for example, <code>Command</code>), and the date/time of the execution using a datetime object that is saved in the following format: yyyy-MM-dd'T'HH:mm:ss'Z'. */
		ExecutionSummary: ComplianceExecutionSummary;
		Items: Array<ComplianceItemEntry>;
		ItemContentHash?: string;
		UploadType?: PutComplianceItemsRequestUploadType;
	}

	export enum PutComplianceItemsRequestUploadType { COMPLETE = 0, PARTIAL = 1 }

	export interface PutInventoryResult {
		Message?: string;
	}

	export interface PutInventoryRequest {
		InstanceId: string;
		Items: Array<InventoryItem>;
	}

	export interface PutParameterResult {
		Version?: number;
		Tier?: PutParameterResultTier;
	}

	export enum PutParameterResultTier { Standard = 0, Advanced = 1, Intelligent-Tiering = 2 }

	export interface PutParameterRequest {
		Name: string;
		Description?: string;
		Value: string;
		Type?: PutParameterRequestType;
		KeyId?: string;
		Overwrite?: boolean;
		AllowedPattern?: string;
		Tags?: Array<Tag>;
		Tier?: PutParameterRequestTier;
		Policies?: string;
		DataType?: string;
	}

	export enum PutParameterRequestType { String = 0, StringList = 1, SecureString = 2 }

	export enum PutParameterRequestTier { Standard = 0, Advanced = 1, Intelligent-Tiering = 2 }

	export interface RegisterDefaultPatchBaselineResult {
		BaselineId?: string;
	}

	export interface RegisterDefaultPatchBaselineRequest {
		BaselineId: string;
	}

	export interface RegisterPatchBaselineForPatchGroupResult {
		BaselineId?: string;
		PatchGroup?: string;
	}

	export interface RegisterPatchBaselineForPatchGroupRequest {
		BaselineId: string;
		PatchGroup: string;
	}

	export interface RegisterTargetWithMaintenanceWindowResult {
		WindowTargetId?: string;
	}

	export interface RegisterTargetWithMaintenanceWindowRequest {
		WindowId: string;
		ResourceType: RegisterTargetWithMaintenanceWindowRequestResourceType;
		Targets: Array<Target>;
		OwnerInformation?: string;
		Name?: string;
		Description?: string;
		ClientToken?: string;
	}

	export enum RegisterTargetWithMaintenanceWindowRequestResourceType { INSTANCE = 0, RESOURCE_GROUP = 1 }

	export interface RegisterTaskWithMaintenanceWindowResult {
		WindowTaskId?: string;
	}

	export interface RegisterTaskWithMaintenanceWindowRequest {
		WindowId: string;
		Targets: Array<Target>;
		TaskArn: string;
		ServiceRoleArn?: string;
		TaskType: RegisterTaskWithMaintenanceWindowRequestTaskType;
		TaskParameters?: MaintenanceWindowTaskParameters;

		/**The parameters for task execution. */
		TaskInvocationParameters?: MaintenanceWindowTaskInvocationParameters;
		Priority?: number;
		MaxConcurrency: string;
		MaxErrors: string;

		/**<p>Information about an S3 bucket to write instance-level logs to.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> </note> */
		LoggingInfo?: LoggingInfo;
		Name?: string;
		Description?: string;
		ClientToken?: string;
	}

	export enum RegisterTaskWithMaintenanceWindowRequestTaskType { RUN_COMMAND = 0, AUTOMATION = 1, STEP_FUNCTIONS = 2, LAMBDA = 3 }

	export interface RemoveTagsFromResourceRequest {
		ResourceType: RemoveTagsFromResourceRequestResourceType;
		ResourceId: string;
		TagKeys: Array<TagKey>;
	}

	export enum RemoveTagsFromResourceRequestResourceType { Document = 0, ManagedInstance = 1, MaintenanceWindow = 2, Parameter = 3, PatchBaseline = 4, OpsItem = 5 }


	/**The result body of the ResetServiceSetting API action. */
	export interface ResetServiceSettingResult {

		/**<p>The service setting data structure.</p> <p> <code>ServiceSetting</code> is an account-level setting for an AWS service. This setting defines how a user interacts with or uses a service or a feature of a service. For example, if an AWS service charges money to the account based on feature or service usage, then the AWS service team might create a default setting of "false". This means the user can't use this feature unless they change the setting to "true" and intentionally opt in for a paid feature.</p> <p>Services map a <code>SettingId</code> object to a setting value. AWS services teams define the default value for a <code>SettingId</code>. You can't create a new <code>SettingId</code>, but you can overwrite the default value if you have the <code>ssm:UpdateServiceSetting</code> permission for the setting. Use the <a>UpdateServiceSetting</a> API action to change the default setting. Or, use the <a>ResetServiceSetting</a> to change the value back to the original value defined by the AWS service team.</p> */
		ServiceSetting?: ServiceSetting;
	}


	/**The request body of the ResetServiceSetting API action. */
	export interface ResetServiceSettingRequest {
		SettingId: string;
	}

	export interface ResumeSessionResponse {
		SessionId?: string;
		TokenValue?: string;
		StreamUrl?: string;
	}

	export interface ResumeSessionRequest {
		SessionId: string;
	}

	export interface SendAutomationSignalRequest {
		AutomationExecutionId: string;
		SignalType: SendAutomationSignalRequestSignalType;
		Payload?: AutomationParameterMap;
	}

	export enum SendAutomationSignalRequestSignalType { Approve = 0, Reject = 1, StartStep = 2, StopStep = 3, Resume = 4 }

	export interface SendCommandResult {

		/**Describes a command request. */
		Command?: Command;
	}

	export interface SendCommandRequest {
		InstanceIds?: Array<InstanceId>;
		Targets?: Array<Target>;
		DocumentName: string;
		DocumentVersion?: string;
		DocumentHash?: string;
		DocumentHashType?: SendCommandRequestDocumentHashType;
		TimeoutSeconds?: number;
		Comment?: string;
		Parameters?: Parameters;
		OutputS3Region?: string;
		OutputS3BucketName?: string;
		OutputS3KeyPrefix?: string;
		MaxConcurrency?: string;
		MaxErrors?: string;
		ServiceRoleArn?: string;

		/**Configurations for sending notifications. */
		NotificationConfig?: NotificationConfig;

		/**Configuration options for sending command output to CloudWatch Logs. */
		CloudWatchOutputConfig?: CloudWatchOutputConfig;
	}

	export enum SendCommandRequestDocumentHashType { Sha256 = 0, Sha1 = 1 }

	export interface StartAssociationsOnceRequest {
		AssociationIds: Array<AssociationId>;
	}

	export interface StartAutomationExecutionResult {
		AutomationExecutionId?: string;
	}

	export interface StartAutomationExecutionRequest {
		DocumentName: string;
		DocumentVersion?: string;
		Parameters?: AutomationParameterMap;
		ClientToken?: string;
		Mode?: StartAutomationExecutionRequestMode;
		TargetParameterName?: string;
		Targets?: Array<Target>;
		TargetMaps?: Array<TargetMap>;
		MaxConcurrency?: string;
		MaxErrors?: string;
		TargetLocations?: Array<TargetLocation>;
		Tags?: Array<Tag>;
	}

	export enum StartAutomationExecutionRequestMode { Auto = 0, Interactive = 1 }

	export interface StartSessionResponse {
		SessionId?: string;
		TokenValue?: string;
		StreamUrl?: string;
	}

	export interface StartSessionRequest {
		Target: string;
		DocumentName?: string;
		Parameters?: SessionManagerParameters;
	}

	export interface StopAutomationExecutionRequest {
		AutomationExecutionId: string;
		Type?: StopAutomationExecutionRequestType;
	}

	export enum StopAutomationExecutionRequestType { Complete = 0, Cancel = 1 }

	export interface TerminateSessionResponse {
		SessionId?: string;
	}

	export interface TerminateSessionRequest {
		SessionId: string;
	}

	export interface UpdateAssociationResult {

		/**Describes the parameters for a document. */
		AssociationDescription?: AssociationDescription;
	}

	export interface UpdateAssociationRequest {
		AssociationId: string;
		Parameters?: Parameters;
		DocumentVersion?: string;
		ScheduleExpression?: string;

		/**An S3 bucket where you want to store the results of this request. */
		OutputLocation?: InstanceAssociationOutputLocation;
		Name?: string;
		Targets?: Array<Target>;
		AssociationName?: string;
		AssociationVersion?: string;
		AutomationTargetParameterName?: string;
		MaxErrors?: string;
		MaxConcurrency?: string;
		ComplianceSeverity?: UpdateAssociationRequestComplianceSeverity;
		SyncCompliance?: UpdateAssociationRequestSyncCompliance;
		ApplyOnlyAtCronInterval?: boolean;
	}

	export enum UpdateAssociationRequestComplianceSeverity { CRITICAL = 0, HIGH = 1, MEDIUM = 2, LOW = 3, UNSPECIFIED = 4 }

	export enum UpdateAssociationRequestSyncCompliance { AUTO = 0, MANUAL = 1 }

	export interface UpdateAssociationStatusResult {

		/**Describes the parameters for a document. */
		AssociationDescription?: AssociationDescription;
	}

	export interface UpdateAssociationStatusRequest {
		Name: string;
		InstanceId: string;

		/**Describes an association status. */
		AssociationStatus: AssociationStatus;
	}

	export interface UpdateDocumentResult {

		/**Describes a Systems Manager document. */
		DocumentDescription?: DocumentDescription;
	}

	export interface UpdateDocumentRequest {
		Content: string;
		Attachments?: Array<AttachmentsSource>;
		Name: string;
		VersionName?: string;
		DocumentVersion?: string;
		DocumentFormat?: UpdateDocumentRequestDocumentFormat;
		TargetType?: string;
	}

	export enum UpdateDocumentRequestDocumentFormat { YAML = 0, JSON = 1, TEXT = 2 }

	export interface UpdateDocumentDefaultVersionResult {

		/**A default version of a document. */
		Description?: DocumentDefaultVersionDescription;
	}

	export interface UpdateDocumentDefaultVersionRequest {
		Name: string;
		DocumentVersion: string;
	}

	export interface UpdateMaintenanceWindowResult {
		WindowId?: string;
		Name?: string;
		Description?: string;
		StartDate?: string;
		EndDate?: string;
		Schedule?: string;
		ScheduleTimezone?: string;
		Duration?: number;
		Cutoff?: number;
		AllowUnassociatedTargets?: boolean;
		Enabled?: boolean;
	}

	export interface UpdateMaintenanceWindowRequest {
		WindowId: string;
		Name?: string;
		Description?: string;
		StartDate?: string;
		EndDate?: string;
		Schedule?: string;
		ScheduleTimezone?: string;
		Duration?: number;
		Cutoff?: number;
		AllowUnassociatedTargets?: boolean;
		Enabled?: boolean;
		Replace?: boolean;
	}

	export interface UpdateMaintenanceWindowTargetResult {
		WindowId?: string;
		WindowTargetId?: string;
		Targets?: Array<Target>;
		OwnerInformation?: string;
		Name?: string;
		Description?: string;
	}

	export interface UpdateMaintenanceWindowTargetRequest {
		WindowId: string;
		WindowTargetId: string;
		Targets?: Array<Target>;
		OwnerInformation?: string;
		Name?: string;
		Description?: string;
		Replace?: boolean;
	}

	export interface UpdateMaintenanceWindowTaskResult {
		WindowId?: string;
		WindowTaskId?: string;
		Targets?: Array<Target>;
		TaskArn?: string;
		ServiceRoleArn?: string;
		TaskParameters?: MaintenanceWindowTaskParameters;

		/**The parameters for task execution. */
		TaskInvocationParameters?: MaintenanceWindowTaskInvocationParameters;
		Priority?: number;
		MaxConcurrency?: string;
		MaxErrors?: string;

		/**<p>Information about an S3 bucket to write instance-level logs to.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> </note> */
		LoggingInfo?: LoggingInfo;
		Name?: string;
		Description?: string;
	}

	export interface UpdateMaintenanceWindowTaskRequest {
		WindowId: string;
		WindowTaskId: string;
		Targets?: Array<Target>;
		TaskArn?: string;
		ServiceRoleArn?: string;
		TaskParameters?: MaintenanceWindowTaskParameters;

		/**The parameters for task execution. */
		TaskInvocationParameters?: MaintenanceWindowTaskInvocationParameters;
		Priority?: number;
		MaxConcurrency?: string;
		MaxErrors?: string;

		/**<p>Information about an S3 bucket to write instance-level logs to.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> </note> */
		LoggingInfo?: LoggingInfo;
		Name?: string;
		Description?: string;
		Replace?: boolean;
	}

	export interface UpdateManagedInstanceRoleRequest {
		InstanceId: string;
		IamRole: string;
	}

	export interface UpdateOpsItemRequest {
		Description?: string;
		OperationalData?: OpsItemOperationalData;
		OperationalDataToDelete?: Array<String>;
		Notifications?: Array<OpsItemNotification>;
		Priority?: number;
		RelatedOpsItems?: Array<RelatedOpsItem>;
		Status?: UpdateOpsItemRequestStatus;
		OpsItemId: string;
		Title?: string;
		Category?: string;
		Severity?: string;
	}

	export enum UpdateOpsItemRequestStatus { Open = 0, InProgress = 1, Resolved = 2 }

	export interface UpdatePatchBaselineResult {
		BaselineId?: string;
		Name?: string;
		OperatingSystem?: UpdatePatchBaselineResultOperatingSystem;

		/**A set of patch filters, typically used for approval rules. */
		GlobalFilters?: PatchFilterGroup;

		/**A set of rules defining the approval rules for a patch baseline. */
		ApprovalRules?: PatchRuleGroup;
		ApprovedPatches?: Array<PatchId>;
		ApprovedPatchesComplianceLevel?: UpdatePatchBaselineResultApprovedPatchesComplianceLevel;
		ApprovedPatchesEnableNonSecurity?: boolean;
		RejectedPatches?: Array<PatchId>;
		RejectedPatchesAction?: UpdatePatchBaselineResultRejectedPatchesAction;
		CreatedDate?: Date;
		ModifiedDate?: Date;
		Description?: string;
		Sources?: Array<PatchSource>;
	}

	export enum UpdatePatchBaselineResultOperatingSystem { WINDOWS = 0, AMAZON_LINUX = 1, AMAZON_LINUX_2 = 2, UBUNTU = 3, REDHAT_ENTERPRISE_LINUX = 4, SUSE = 5, CENTOS = 6, ORACLE_LINUX = 7, DEBIAN = 8 }

	export enum UpdatePatchBaselineResultApprovedPatchesComplianceLevel { CRITICAL = 0, HIGH = 1, MEDIUM = 2, LOW = 3, INFORMATIONAL = 4, UNSPECIFIED = 5 }

	export enum UpdatePatchBaselineResultRejectedPatchesAction { ALLOW_AS_DEPENDENCY = 0, BLOCK = 1 }

	export interface UpdatePatchBaselineRequest {
		BaselineId: string;
		Name?: string;

		/**A set of patch filters, typically used for approval rules. */
		GlobalFilters?: PatchFilterGroup;

		/**A set of rules defining the approval rules for a patch baseline. */
		ApprovalRules?: PatchRuleGroup;
		ApprovedPatches?: Array<PatchId>;
		ApprovedPatchesComplianceLevel?: UpdatePatchBaselineRequestApprovedPatchesComplianceLevel;
		ApprovedPatchesEnableNonSecurity?: boolean;
		RejectedPatches?: Array<PatchId>;
		RejectedPatchesAction?: UpdatePatchBaselineRequestRejectedPatchesAction;
		Description?: string;
		Sources?: Array<PatchSource>;
		Replace?: boolean;
	}

	export enum UpdatePatchBaselineRequestApprovedPatchesComplianceLevel { CRITICAL = 0, HIGH = 1, MEDIUM = 2, LOW = 3, INFORMATIONAL = 4, UNSPECIFIED = 5 }

	export enum UpdatePatchBaselineRequestRejectedPatchesAction { ALLOW_AS_DEPENDENCY = 0, BLOCK = 1 }

	export interface UpdateResourceDataSyncRequest {
		SyncName: string;
		SyncType: string;

		/**Information about the source of the data included in the resource data sync. */
		SyncSource: ResourceDataSyncSource;
	}


	/**The request body of the UpdateServiceSetting API action. */
	export interface UpdateServiceSettingRequest {
		SettingId: string;
		SettingValue: string;
	}


	/**Information includes the AWS account ID where the current document is shared and the version shared with that account. */
	export interface AccountSharingInfo {
		AccountId?: string;

		/**
		 * The document version shared with other accounts. You can share <code>Latest</code>, <code>Default</code> or <code>All versions</code>.
		 * Max length: 8
		 * Pattern: ([$]LATEST|[$]DEFAULT|[$]ALL)
		 */
		SharedDocumentVersion?: string;
	}


	/**An activation registers one or more on-premises servers or virtual machines (VMs) with AWS so that you can configure those servers or VMs using Run Command. A server or VM that has been registered with AWS is called a managed instance. */
	export interface Activation {
		ActivationId?: string;
		Description?: string;
		DefaultInstanceName?: string;
		IamRole?: string;
		RegistrationLimit?: number;
		RegistrationsCount?: number;
		ExpirationDate?: Date;
		Expired?: boolean;
		CreatedDate?: Date;
		Tags?: Array<Tag>;
	}

	export enum ResourceTypeForTagging { Document = 0, ManagedInstance = 1, MaintenanceWindow = 2, Parameter = 3, PatchBaseline = 4, OpsItem = 5 }


	/**Information about the association. */
	export interface AssociationOverview {
		Status?: string;
		DetailedStatus?: string;
		AssociationStatusAggregatedCount?: AssociationStatusAggregatedCount;
	}


	/**Describes an association of a Systems Manager document and an instance. */
	export interface Association {
		Name?: string;
		InstanceId?: string;
		AssociationId?: string;
		AssociationVersion?: string;
		DocumentVersion?: string;
		Targets?: Array<Target>;
		LastExecutionDate?: Date;

		/**Information about the association. */
		Overview?: AssociationOverview;
		ScheduleExpression?: string;
		AssociationName?: string;
	}

	export enum AssociationComplianceSeverity { CRITICAL = 0, HIGH = 1, MEDIUM = 2, LOW = 3, UNSPECIFIED = 4 }


	/**Describes an association status. */
	export interface AssociationStatus {
		Date: Date;
		Name: AssociationStatusName;
		Message: string;
		AdditionalInfo?: string;
	}

	export enum AssociationStatusName { Pending = 0, Success = 1, Failed = 2 }


	/**An S3 bucket where you want to store the results of this request. */
	export interface InstanceAssociationOutputLocation {

		/**An S3 bucket where you want to store the results of this request. */
		S3Location?: S3OutputLocation;
	}

	export enum AssociationSyncCompliance { AUTO = 0, MANUAL = 1 }


	/**Describes the parameters for a document. */
	export interface AssociationDescription {
		Name?: string;
		InstanceId?: string;
		AssociationVersion?: string;
		Date?: Date;
		LastUpdateAssociationDate?: Date;

		/**Describes an association status. */
		Status?: AssociationStatus;

		/**Information about the association. */
		Overview?: AssociationOverview;
		DocumentVersion?: string;
		AutomationTargetParameterName?: string;
		Parameters?: Parameters;
		AssociationId?: string;
		Targets?: Array<Target>;
		ScheduleExpression?: string;

		/**An S3 bucket where you want to store the results of this request. */
		OutputLocation?: InstanceAssociationOutputLocation;
		LastExecutionDate?: Date;
		LastSuccessfulExecutionDate?: Date;
		AssociationName?: string;
		MaxErrors?: string;
		MaxConcurrency?: string;
		ComplianceSeverity?: AssociationDescriptionComplianceSeverity;
		SyncCompliance?: AssociationDescriptionSyncCompliance;
		ApplyOnlyAtCronInterval?: boolean;
	}

	export enum AssociationDescriptionComplianceSeverity { CRITICAL = 0, HIGH = 1, MEDIUM = 2, LOW = 3, UNSPECIFIED = 4 }

	export enum AssociationDescriptionSyncCompliance { AUTO = 0, MANUAL = 1 }


	/**Includes information about the specified association. */
	export interface AssociationExecution {
		AssociationId?: string;
		AssociationVersion?: string;
		ExecutionId?: string;
		Status?: string;
		DetailedStatus?: string;
		CreatedTime?: Date;
		LastExecutionDate?: Date;
		ResourceCountByStatus?: string;
	}

	export enum AssociationExecutionFilterKey { ExecutionId = 0, Status = 1, CreatedTime = 2 }

	export enum AssociationFilterOperatorType { EQUAL = 0, LESS_THAN = 1, GREATER_THAN = 2 }


	/**Filters used in the request. */
	export interface AssociationExecutionFilter {
		Key: AssociationExecutionFilterKey;
		Value: string;
		Type: AssociationExecutionFilterType;
	}

	export enum AssociationExecutionFilterKey { ExecutionId = 0, Status = 1, CreatedTime = 2 }

	export enum AssociationExecutionFilterType { EQUAL = 0, LESS_THAN = 1, GREATER_THAN = 2 }


	/**Information about the source where the association execution details are stored. */
	export interface OutputSource {
		OutputSourceId?: string;
		OutputSourceType?: string;
	}


	/**Includes information about the specified association execution. */
	export interface AssociationExecutionTarget {
		AssociationId?: string;
		AssociationVersion?: string;
		ExecutionId?: string;
		ResourceId?: string;
		ResourceType?: string;
		Status?: string;
		DetailedStatus?: string;
		LastExecutionDate?: Date;

		/**Information about the source where the association execution details are stored. */
		OutputSource?: OutputSource;
	}

	export enum AssociationExecutionTargetsFilterKey { Status = 0, ResourceId = 1, ResourceType = 2 }


	/**Filters for the association execution. */
	export interface AssociationExecutionTargetsFilter {
		Key: AssociationExecutionTargetsFilterKey;
		Value: string;
	}

	export enum AssociationExecutionTargetsFilterKey { Status = 0, ResourceId = 1, ResourceType = 2 }

	export enum AssociationFilterKey { InstanceId = 0, Name = 1, AssociationId = 2, AssociationStatusName = 3, LastExecutedBefore = 4, LastExecutedAfter = 5, AssociationName = 6, ResourceGroupName = 7 }


	/**Describes a filter. */
	export interface AssociationFilter {
		key: AssociationFilterKey;
		value: string;
	}

	export enum AssociationFilterKey { InstanceId = 0, Name = 1, AssociationId = 2, AssociationStatusName = 3, LastExecutedBefore = 4, LastExecutedAfter = 5, AssociationName = 6, ResourceGroupName = 7 }

	export enum AssociationStatusName { Pending = 0, Success = 1, Failed = 2 }


	/**Information about the association version. */
	export interface AssociationVersionInfo {
		AssociationId?: string;
		AssociationVersion?: string;
		CreatedDate?: Date;
		Name?: string;
		DocumentVersion?: string;
		Parameters?: Parameters;
		Targets?: Array<Target>;
		ScheduleExpression?: string;

		/**An S3 bucket where you want to store the results of this request. */
		OutputLocation?: InstanceAssociationOutputLocation;
		AssociationName?: string;
		MaxErrors?: string;
		MaxConcurrency?: string;
		ComplianceSeverity?: AssociationVersionInfoComplianceSeverity;
		SyncCompliance?: AssociationVersionInfoSyncCompliance;
		ApplyOnlyAtCronInterval?: boolean;
	}

	export enum AssociationVersionInfoComplianceSeverity { CRITICAL = 0, HIGH = 1, MEDIUM = 2, LOW = 3, UNSPECIFIED = 4 }

	export enum AssociationVersionInfoSyncCompliance { AUTO = 0, MANUAL = 1 }

	export enum AttachmentHashType { Sha256 = 0 }


	/**A structure that includes attributes that describe a document attachment. */
	export interface AttachmentContent {
		Name?: string;
		Size?: number;
		Hash?: string;
		HashType?: AttachmentContentHashType;
		Url?: string;
	}

	export enum AttachmentContentHashType { Sha256 = 0 }


	/**An attribute of an attachment, such as the attachment name. */
	export interface AttachmentInformation {
		Name?: string;
	}

	export enum AttachmentsSourceKey { SourceUrl = 0, S3FileUrl = 1, AttachmentReference = 2 }


	/**Identifying information about a document attachment, including the file name and a key-value pair that identifies the location of an attachment to a document. */
	export interface AttachmentsSource {
		Key?: AttachmentsSourceKey;
		Values?: Array<AttachmentsSourceValue>;
		Name?: string;
	}

	export enum AttachmentsSourceKey { SourceUrl = 0, S3FileUrl = 1, AttachmentReference = 2 }

	export enum AutomationExecutionStatus { Pending = 0, InProgress = 1, Waiting = 2, Success = 3, TimedOut = 4, Cancelling = 5, Cancelled = 6, Failed = 7 }

	export enum ExecutionMode { Auto = 0, Interactive = 1 }


	/**Information about targets that resolved during the Automation execution. */
	export interface ResolvedTargets {
		ParameterValues?: Array<ParameterValue>;
		Truncated?: boolean;
	}


	/**An aggregate of step execution statuses displayed in the AWS Console for a multi-Region and multi-account Automation execution. */
	export interface ProgressCounters {
		TotalSteps?: number;
		SuccessSteps?: number;
		FailedSteps?: number;
		CancelledSteps?: number;
		TimedOutSteps?: number;
	}


	/**Detailed information about the current state of an individual Automation execution. */
	export interface AutomationExecution {
		AutomationExecutionId?: string;
		DocumentName?: string;
		DocumentVersion?: string;
		ExecutionStartTime?: Date;
		ExecutionEndTime?: Date;
		AutomationExecutionStatus?: AutomationExecutionAutomationExecutionStatus;
		StepExecutions?: Array<StepExecution>;
		StepExecutionsTruncated?: boolean;
		Parameters?: AutomationParameterMap;
		Outputs?: AutomationParameterMap;
		FailureMessage?: string;
		Mode?: AutomationExecutionMode;
		ParentAutomationExecutionId?: string;
		ExecutedBy?: string;
		CurrentStepName?: string;
		CurrentAction?: string;
		TargetParameterName?: string;
		Targets?: Array<Target>;
		TargetMaps?: Array<TargetMap>;

		/**Information about targets that resolved during the Automation execution. */
		ResolvedTargets?: ResolvedTargets;
		MaxConcurrency?: string;
		MaxErrors?: string;
		Target?: string;
		TargetLocations?: Array<TargetLocation>;

		/**An aggregate of step execution statuses displayed in the AWS Console for a multi-Region and multi-account Automation execution. */
		ProgressCounters?: ProgressCounters;
	}

	export enum AutomationExecutionAutomationExecutionStatus { Pending = 0, InProgress = 1, Waiting = 2, Success = 3, TimedOut = 4, Cancelling = 5, Cancelled = 6, Failed = 7 }

	export enum AutomationExecutionMode { Auto = 0, Interactive = 1 }

	export enum AutomationExecutionFilterKey { DocumentNamePrefix = 0, ExecutionStatus = 1, ExecutionId = 2, ParentExecutionId = 3, CurrentAction = 4, StartTimeBefore = 5, StartTimeAfter = 6, AutomationType = 7, TagKey = 8 }


	/**A filter used to match specific automation executions. This is used to limit the scope of Automation execution information returned. */
	export interface AutomationExecutionFilter {
		Key: AutomationExecutionFilterKey;
		Values: Array<AutomationExecutionFilterValue>;
	}

	export enum AutomationExecutionFilterKey { DocumentNamePrefix = 0, ExecutionStatus = 1, ExecutionId = 2, ParentExecutionId = 3, CurrentAction = 4, StartTimeBefore = 5, StartTimeAfter = 6, AutomationType = 7, TagKey = 8 }

	export enum AutomationType { CrossAccount = 0, Local = 1 }


	/**Details about a specific Automation execution. */
	export interface AutomationExecutionMetadata {
		AutomationExecutionId?: string;
		DocumentName?: string;
		DocumentVersion?: string;
		AutomationExecutionStatus?: AutomationExecutionMetadataAutomationExecutionStatus;
		ExecutionStartTime?: Date;
		ExecutionEndTime?: Date;
		ExecutedBy?: string;
		LogFile?: string;
		Outputs?: AutomationParameterMap;
		Mode?: AutomationExecutionMetadataMode;
		ParentAutomationExecutionId?: string;
		CurrentStepName?: string;
		CurrentAction?: string;
		FailureMessage?: string;
		TargetParameterName?: string;
		Targets?: Array<Target>;
		TargetMaps?: Array<TargetMap>;

		/**Information about targets that resolved during the Automation execution. */
		ResolvedTargets?: ResolvedTargets;
		MaxConcurrency?: string;
		MaxErrors?: string;
		Target?: string;
		AutomationType?: AutomationExecutionMetadataAutomationType;
	}

	export enum AutomationExecutionMetadataAutomationExecutionStatus { Pending = 0, InProgress = 1, Waiting = 2, Success = 3, TimedOut = 4, Cancelling = 5, Cancelled = 6, Failed = 7 }

	export enum AutomationExecutionMetadataMode { Auto = 0, Interactive = 1 }

	export enum AutomationExecutionMetadataAutomationType { CrossAccount = 0, Local = 1 }

	export enum CalendarState { OPEN = 0, CLOSED = 1 }


	/**Configuration options for sending command output to CloudWatch Logs. */
	export interface CloudWatchOutputConfig {
		CloudWatchLogGroupName?: string;
		CloudWatchOutputEnabled?: boolean;
	}

	export enum CommandStatus { Pending = 0, InProgress = 1, Success = 2, Cancelled = 3, Failed = 4, TimedOut = 5, Cancelling = 6 }


	/**Configurations for sending notifications. */
	export interface NotificationConfig {
		NotificationArn?: string;
		NotificationEvents?: Array<NotificationEvent>;
		NotificationType?: NotificationConfigNotificationType;
	}

	export enum NotificationConfigNotificationType { Command = 0, Invocation = 1 }


	/**Describes a command request. */
	export interface Command {
		CommandId?: string;
		DocumentName?: string;
		DocumentVersion?: string;
		Comment?: string;
		ExpiresAfter?: Date;
		Parameters?: Parameters;
		InstanceIds?: Array<InstanceId>;
		Targets?: Array<Target>;
		RequestedDateTime?: Date;
		Status?: CommandStatus;
		StatusDetails?: string;
		OutputS3Region?: string;
		OutputS3BucketName?: string;
		OutputS3KeyPrefix?: string;
		MaxConcurrency?: string;
		MaxErrors?: string;
		TargetCount?: number;
		CompletedCount?: number;
		ErrorCount?: number;
		DeliveryTimedOutCount?: number;
		ServiceRole?: string;

		/**Configurations for sending notifications. */
		NotificationConfig?: NotificationConfig;

		/**Configuration options for sending command output to CloudWatch Logs. */
		CloudWatchOutputConfig?: CloudWatchOutputConfig;
		TimeoutSeconds?: number;
	}

	export enum CommandStatus { Pending = 0, InProgress = 1, Success = 2, Cancelled = 3, Failed = 4, TimedOut = 5, Cancelling = 6 }

	export enum CommandFilterKey { InvokedAfter = 0, InvokedBefore = 1, Status = 2, ExecutionStage = 3, DocumentName = 4 }


	/**Describes a command filter. */
	export interface CommandFilter {
		key: CommandFilterKey;
		value: string;
	}

	export enum CommandFilterKey { InvokedAfter = 0, InvokedBefore = 1, Status = 2, ExecutionStage = 3, DocumentName = 4 }

	export enum CommandInvocationStatus { Pending = 0, InProgress = 1, Delayed = 2, Success = 3, Cancelled = 4, TimedOut = 5, Failed = 6, Cancelling = 7 }


	/**An invocation is copy of a command sent to a specific instance. A command can apply to one or more instances. A command invocation applies to one instance. For example, if a user runs SendCommand against three instances, then a command invocation is created for each requested instance ID. A command invocation returns status and detail information about a command you ran.  */
	export interface CommandInvocation {
		CommandId?: string;
		InstanceId?: string;
		InstanceName?: string;
		Comment?: string;
		DocumentName?: string;
		DocumentVersion?: string;
		RequestedDateTime?: Date;
		Status?: CommandInvocationStatus;
		StatusDetails?: string;
		TraceOutput?: string;
		StandardOutputUrl?: string;
		StandardErrorUrl?: string;
		CommandPlugins?: Array<CommandPlugin>;
		ServiceRole?: string;

		/**Configurations for sending notifications. */
		NotificationConfig?: NotificationConfig;

		/**Configuration options for sending command output to CloudWatch Logs. */
		CloudWatchOutputConfig?: CloudWatchOutputConfig;
	}

	export enum CommandInvocationStatus { Pending = 0, InProgress = 1, Delayed = 2, Success = 3, Cancelled = 4, TimedOut = 5, Failed = 6, Cancelling = 7 }

	export enum CommandPluginStatus { Pending = 0, InProgress = 1, Success = 2, TimedOut = 3, Cancelled = 4, Failed = 5 }


	/**Describes plugin details. */
	export interface CommandPlugin {
		Name?: string;
		Status?: CommandPluginStatus;
		StatusDetails?: string;
		ResponseCode?: number;
		ResponseStartDateTime?: Date;
		ResponseFinishDateTime?: Date;
		Output?: string;
		StandardOutputUrl?: string;
		StandardErrorUrl?: string;
		OutputS3Region?: string;
		OutputS3BucketName?: string;
		OutputS3KeyPrefix?: string;
	}

	export enum CommandPluginStatus { Pending = 0, InProgress = 1, Success = 2, TimedOut = 3, Cancelled = 4, Failed = 5 }


	/**A summary of the call execution that includes an execution ID, the type of execution (for example, <code>Command</code>), and the date/time of the execution using a datetime object that is saved in the following format: yyyy-MM-dd'T'HH:mm:ss'Z'. */
	export interface ComplianceExecutionSummary {
		ExecutionTime: Date;
		ExecutionId?: string;
		ExecutionType?: string;
	}

	export enum ComplianceStatus { COMPLIANT = 0, NON_COMPLIANT = 1 }

	export enum ComplianceSeverity { CRITICAL = 0, HIGH = 1, MEDIUM = 2, LOW = 3, INFORMATIONAL = 4, UNSPECIFIED = 5 }


	/**Information about the compliance as defined by the resource type. For example, for a patch resource type, <code>Items</code> includes information about the PatchSeverity, Classification, and so on. */
	export interface ComplianceItem {
		ComplianceType?: string;
		ResourceType?: string;
		ResourceId?: string;
		Id?: string;
		Title?: string;
		Status?: ComplianceItemStatus;
		Severity?: ComplianceItemSeverity;

		/**A summary of the call execution that includes an execution ID, the type of execution (for example, <code>Command</code>), and the date/time of the execution using a datetime object that is saved in the following format: yyyy-MM-dd'T'HH:mm:ss'Z'. */
		ExecutionSummary?: ComplianceExecutionSummary;
		Details?: ComplianceItemDetails;
	}

	export enum ComplianceItemStatus { COMPLIANT = 0, NON_COMPLIANT = 1 }

	export enum ComplianceItemSeverity { CRITICAL = 0, HIGH = 1, MEDIUM = 2, LOW = 3, INFORMATIONAL = 4, UNSPECIFIED = 5 }


	/**Information about a compliance item. */
	export interface ComplianceItemEntry {
		Id?: string;
		Title?: string;
		Severity: ComplianceItemEntrySeverity;
		Status: ComplianceItemEntryStatus;
		Details?: ComplianceItemDetails;
	}

	export enum ComplianceItemEntrySeverity { CRITICAL = 0, HIGH = 1, MEDIUM = 2, LOW = 3, INFORMATIONAL = 4, UNSPECIFIED = 5 }

	export enum ComplianceItemEntryStatus { COMPLIANT = 0, NON_COMPLIANT = 1 }

	export enum ComplianceQueryOperatorType { EQUAL = 0, NOT_EQUAL = 1, BEGIN_WITH = 2, LESS_THAN = 3, GREATER_THAN = 4 }


	/**One or more filters. Use a filter to return a more specific list of results. */
	export interface ComplianceStringFilter {
		Key?: string;
		Values?: Array<ComplianceFilterValue>;
		Type?: ComplianceStringFilterType;
	}

	export enum ComplianceStringFilterType { EQUAL = 0, NOT_EQUAL = 1, BEGIN_WITH = 2, LESS_THAN = 3, GREATER_THAN = 4 }


	/**A summary of resources that are compliant. The summary is organized according to the resource count for each compliance type. */
	export interface CompliantSummary {
		CompliantCount?: number;

		/**The number of managed instances found for each patch severity level defined in the request filter. */
		SeveritySummary?: SeveritySummary;
	}


	/**A summary of resources that are not compliant. The summary is organized according to resource type. */
	export interface NonCompliantSummary {
		NonCompliantCount?: number;

		/**The number of managed instances found for each patch severity level defined in the request filter. */
		SeveritySummary?: SeveritySummary;
	}


	/**A summary of compliance information by compliance type. */
	export interface ComplianceSummaryItem {
		ComplianceType?: string;

		/**A summary of resources that are compliant. The summary is organized according to the resource count for each compliance type. */
		CompliantSummary?: CompliantSummary;

		/**A summary of resources that are not compliant. The summary is organized according to resource type. */
		NonCompliantSummary?: NonCompliantSummary;
	}

	export enum ComplianceUploadType { COMPLETE = 0, PARTIAL = 1 }


	/**The number of managed instances found for each patch severity level defined in the request filter. */
	export interface SeveritySummary {
		CriticalCount?: number;
		HighCount?: number;
		MediumCount?: number;
		LowCount?: number;
		InformationalCount?: number;
		UnspecifiedCount?: number;
	}

	export enum ConnectionStatus { Connected = 0, NotConnected = 1 }


	/**Describes the association of a Systems Manager SSM document and an instance. */
	export interface CreateAssociationBatchRequestEntry {
		Name: string;
		InstanceId?: string;
		Parameters?: Parameters;
		AutomationTargetParameterName?: string;
		DocumentVersion?: string;
		Targets?: Array<Target>;
		ScheduleExpression?: string;

		/**An S3 bucket where you want to store the results of this request. */
		OutputLocation?: InstanceAssociationOutputLocation;
		AssociationName?: string;
		MaxErrors?: string;
		MaxConcurrency?: string;
		ComplianceSeverity?: CreateAssociationBatchRequestEntryComplianceSeverity;
		SyncCompliance?: CreateAssociationBatchRequestEntrySyncCompliance;
		ApplyOnlyAtCronInterval?: boolean;
	}

	export enum CreateAssociationBatchRequestEntryComplianceSeverity { CRITICAL = 0, HIGH = 1, MEDIUM = 2, LOW = 3, UNSPECIFIED = 4 }

	export enum CreateAssociationBatchRequestEntrySyncCompliance { AUTO = 0, MANUAL = 1 }

	export enum DocumentType { Command = 0, Policy = 1, Automation = 2, Session = 3, Package = 4, ApplicationConfiguration = 5, ApplicationConfigurationSchema = 6, DeploymentStrategy = 7, ChangeCalendar = 8 }

	export enum DocumentFormat { YAML = 0, JSON = 1, TEXT = 2 }


	/**Describes a Systems Manager document.  */
	export interface DocumentDescription {
		Sha1?: string;
		Hash?: string;
		HashType?: DocumentDescriptionHashType;
		Name?: string;
		VersionName?: string;
		Owner?: string;
		CreatedDate?: Date;

		/**The status of a document. */
		Status?: DocumentDescriptionStatus;
		StatusInformation?: string;
		DocumentVersion?: string;
		Description?: string;
		Parameters?: Array<DocumentParameter>;
		PlatformTypes?: Array<PlatformType>;
		DocumentType?: DocumentDescriptionDocumentType;
		SchemaVersion?: string;
		LatestVersion?: string;
		DefaultVersion?: string;
		DocumentFormat?: DocumentDescriptionDocumentFormat;
		TargetType?: string;
		Tags?: Array<Tag>;
		AttachmentsInformation?: Array<AttachmentInformation>;
		Requires?: Array<DocumentRequires>;
	}

	export enum DocumentDescriptionHashType { Sha256 = 0, Sha1 = 1 }

	export enum DocumentDescriptionStatus { Creating = 0, Active = 1, Updating = 2, Deleting = 3, Failed = 4 }

	export enum DocumentDescriptionDocumentType { Command = 0, Policy = 1, Automation = 2, Session = 3, Package = 4, ApplicationConfiguration = 5, ApplicationConfigurationSchema = 6, DeploymentStrategy = 7, ChangeCalendar = 8 }

	export enum DocumentDescriptionDocumentFormat { YAML = 0, JSON = 1, TEXT = 2 }

	export enum OperatingSystem { WINDOWS = 0, AMAZON_LINUX = 1, AMAZON_LINUX_2 = 2, UBUNTU = 3, REDHAT_ENTERPRISE_LINUX = 4, SUSE = 5, CENTOS = 6, ORACLE_LINUX = 7, DEBIAN = 8 }


	/**A set of patch filters, typically used for approval rules. */
	export interface PatchFilterGroup {
		PatchFilters: Array<PatchFilter>;
	}


	/**A set of rules defining the approval rules for a patch baseline. */
	export interface PatchRuleGroup {
		PatchRules: Array<PatchRule>;
	}

	export enum PatchComplianceLevel { CRITICAL = 0, HIGH = 1, MEDIUM = 2, LOW = 3, INFORMATIONAL = 4, UNSPECIFIED = 5 }

	export enum PatchAction { ALLOW_AS_DEPENDENCY = 0, BLOCK = 1 }


	/**Information about the target S3 bucket for the Resource Data Sync. */
	export interface ResourceDataSyncS3Destination {
		BucketName: string;
		Prefix?: string;
		SyncFormat: ResourceDataSyncS3DestinationSyncFormat;
		Region: string;
		AWSKMSKeyARN?: string;

		/**Synchronize Systems Manager Inventory data from multiple AWS accounts defined in AWS Organizations to a centralized S3 bucket. Data is synchronized to individual key prefixes in the central bucket. Each key prefix represents a different AWS account ID. */
		DestinationDataSharing?: ResourceDataSyncDestinationDataSharing;
	}

	export enum ResourceDataSyncS3DestinationSyncFormat { JsonSerDe = 0 }


	/**Information about the source of the data included in the resource data sync. */
	export interface ResourceDataSyncSource {
		SourceType: string;

		/**Information about the AwsOrganizationsSource resource data sync source. A sync source of this type can synchronize data from AWS Organizations or, if an AWS Organization is not present, from multiple AWS Regions. */
		AwsOrganizationsSource?: ResourceDataSyncAwsOrganizationsSource;
		SourceRegions: Array<ResourceDataSyncSourceRegion>;
		IncludeFutureRegions?: boolean;
	}

	export enum InventorySchemaDeleteOption { DisableSchema = 0, DeleteSchema = 1 }


	/**Information about the delete operation. */
	export interface InventoryDeletionSummary {
		TotalCount?: number;
		RemainingCount?: number;
		SummaryItems?: Array<InventoryDeletionSummaryItem>;
	}

	export enum DescribeActivationsFilterKeys { ActivationIds = 0, DefaultInstanceName = 1, IamRole = 2 }


	/**Filter for the DescribeActivation API. */
	export interface DescribeActivationsFilter {
		FilterKey?: DescribeActivationsFilterFilterKey;
		FilterValues?: Array<String>;
	}

	export enum DescribeActivationsFilterFilterKey { ActivationIds = 0, DefaultInstanceName = 1, IamRole = 2 }

	export enum DocumentPermissionType { Share = 0 }

	export enum MaintenanceWindowResourceType { INSTANCE = 0, RESOURCE_GROUP = 1 }

	export enum PatchProperty { PRODUCT = 0, PRODUCT_FAMILY = 1, CLASSIFICATION = 2, MSRC_SEVERITY = 3, PRIORITY = 4, SEVERITY = 5 }

	export enum PatchSet { OS = 0, APPLICATION = 1 }

	export enum SessionState { Active = 0, History = 1 }


	/**A default version of a document. */
	export interface DocumentDefaultVersionDescription {
		Name?: string;
		DefaultVersion?: string;
		DefaultVersionName?: string;
	}

	export enum DocumentHashType { Sha256 = 0, Sha1 = 1 }


	/**The status of a document. */
	export enum DocumentStatus { Creating = 0, Active = 1, Updating = 2, Deleting = 3, Failed = 4 }

	export enum DocumentFilterKey { Name = 0, Owner = 1, PlatformTypes = 2, DocumentType = 3 }


	/**This data type is deprecated. Instead, use <a>DocumentKeyValuesFilter</a>. */
	export interface DocumentFilter {
		key: DocumentFilterKey;
		value: string;
	}

	export enum DocumentFilterKey { Name = 0, Owner = 1, PlatformTypes = 2, DocumentType = 3 }


	/**Describes the name of a Systems Manager document. */
	export interface DocumentIdentifier {
		Name?: string;
		Owner?: string;
		VersionName?: string;
		PlatformTypes?: Array<PlatformType>;
		DocumentVersion?: string;
		DocumentType?: DocumentIdentifierDocumentType;
		SchemaVersion?: string;
		DocumentFormat?: DocumentIdentifierDocumentFormat;
		TargetType?: string;
		Tags?: Array<Tag>;
		Requires?: Array<DocumentRequires>;
	}

	export enum DocumentIdentifierDocumentType { Command = 0, Policy = 1, Automation = 2, Session = 3, Package = 4, ApplicationConfiguration = 5, ApplicationConfigurationSchema = 6, DeploymentStrategy = 7, ChangeCalendar = 8 }

	export enum DocumentIdentifierDocumentFormat { YAML = 0, JSON = 1, TEXT = 2 }


	/**<p>One or more filters. Use a filter to return a more specific list of documents.</p> <p>For keys, you can specify one or more tags that have been applied to a document. </p> <p>Other valid values include <code>Owner</code>, <code>Name</code>, <code>PlatformTypes</code>, <code>DocumentType</code>, and <code>TargetType</code>.</p> <p>Note that only one Owner can be specified in a request. For example: <code>Key=Owner,Values=Self</code>.</p> <p>If you use Name as a key, you can use a name prefix to return a list of documents. For example, in the AWS CLI, to return a list of all documents that begin with <code>Te</code>, run the following command:</p> <p> <code>aws ssm list-documents --filters Key=Name,Values=Te</code> </p> <p>If you specify more than two keys, only documents that are identified by all the tags are returned in the results. If you specify more than two values for a key, documents that are identified by any of the values are returned in the results.</p> <p>To specify a custom key and value pair, use the format <code>Key=tag:tagName,Values=valueName</code>.</p> <p>For example, if you created a Key called region and are using the AWS CLI to call the <code>list-documents</code> command: </p> <p> <code>aws ssm list-documents --filters Key=tag:region,Values=east,west Key=Owner,Values=Self</code> </p> */
	export interface DocumentKeyValuesFilter {
		Key?: string;
		Values?: Array<DocumentKeyValuesFilterValue>;
	}

	export enum DocumentParameterType { String = 0, StringList = 1 }


	/**Parameters specified in a System Manager document that run on the server when the command is run.  */
	export interface DocumentParameter {
		Name?: string;
		Type?: DocumentParameterType;
		Description?: string;
		DefaultValue?: string;
	}

	export enum DocumentParameterType { String = 0, StringList = 1 }


	/**An SSM document required by the current document. */
	export interface DocumentRequires {
		Name: string;
		Version?: string;
	}


	/**Version information about the document. */
	export interface DocumentVersionInfo {
		Name?: string;
		DocumentVersion?: string;
		VersionName?: string;
		CreatedDate?: Date;
		IsDefaultVersion?: boolean;
		DocumentFormat?: DocumentVersionInfoDocumentFormat;

		/**The status of a document. */
		Status?: DocumentVersionInfoStatus;
		StatusInformation?: string;
	}

	export enum DocumentVersionInfoDocumentFormat { YAML = 0, JSON = 1, TEXT = 2 }

	export enum DocumentVersionInfoStatus { Creating = 0, Active = 1, Updating = 2, Deleting = 3, Failed = 4 }


	/**Represents metadata about a patch. */
	export interface Patch {
		Id?: string;
		ReleaseDate?: Date;
		Title?: string;
		Description?: string;
		ContentUrl?: string;
		Vendor?: string;
		ProductFamily?: string;
		Product?: string;
		Classification?: string;
		MsrcSeverity?: string;
		KbNumber?: string;
		MsrcNumber?: string;
		Language?: string;
	}


	/**Information about the approval status of a patch. */
	export interface PatchStatus {
		DeploymentStatus?: PatchStatusDeploymentStatus;
		ComplianceLevel?: PatchStatusComplianceLevel;
		ApprovalDate?: Date;
	}

	export enum PatchStatusDeploymentStatus { APPROVED = 0, PENDING_APPROVAL = 1, EXPLICIT_APPROVED = 2, EXPLICIT_REJECTED = 3 }

	export enum PatchStatusComplianceLevel { CRITICAL = 0, HIGH = 1, MEDIUM = 2, LOW = 3, INFORMATIONAL = 4, UNSPECIFIED = 5 }


	/**The EffectivePatch structure defines metadata about a patch along with the approval state of the patch in a particular patch baseline. The approval state includes information about whether the patch is currently approved, due to be approved by a rule, explicitly approved, or explicitly rejected and the date the patch was or will be approved. */
	export interface EffectivePatch {

		/**Represents metadata about a patch. */
		Patch?: Patch;

		/**Information about the approval status of a patch. */
		PatchStatus?: PatchStatus;
	}

	export enum Fault { Client = 0, Server = 1, Unknown = 2 }


	/**Describes a failed association. */
	export interface FailedCreateAssociation {

		/**Describes the association of a Systems Manager SSM document and an instance. */
		Entry?: CreateAssociationBatchRequestEntry;
		Message?: string;
		Fault?: FailedCreateAssociationFault;
	}

	export enum FailedCreateAssociationFault { Client = 0, Server = 1, Unknown = 2 }


	/**Information about an Automation failure. */
	export interface FailureDetails {
		FailureStage?: string;
		FailureType?: string;
		Details?: AutomationParameterMap;
	}

	export enum MaintenanceWindowExecutionStatus { PENDING = 0, IN_PROGRESS = 1, SUCCESS = 2, FAILED = 3, TIMED_OUT = 4, CANCELLING = 5, CANCELLED = 6, SKIPPED_OVERLAPPING = 7 }

	export enum MaintenanceWindowTaskType { RUN_COMMAND = 0, AUTOMATION = 1, STEP_FUNCTIONS = 2, LAMBDA = 3 }


	/**The parameters for task execution. */
	export interface MaintenanceWindowTaskInvocationParameters {

		/**<p>The parameters for a RUN_COMMAND task type.</p> <p>For information about specifying and updating task parameters, see <a>RegisterTaskWithMaintenanceWindow</a> and <a>UpdateMaintenanceWindowTask</a>.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p> <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs, instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p>For Run Command tasks, Systems Manager uses specified values for <code>TaskParameters</code> and <code>LoggingInfo</code> only if no values are specified for <code>TaskInvocationParameters</code>. </p> </note> */
		RunCommand?: MaintenanceWindowRunCommandParameters;

		/**The parameters for an AUTOMATION task type. */
		Automation?: MaintenanceWindowAutomationParameters;

		/**<p>The parameters for a STEP_FUNCTIONS task.</p> <p>For information about specifying and updating task parameters, see <a>RegisterTaskWithMaintenanceWindow</a> and <a>UpdateMaintenanceWindowTask</a>.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p> <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs, instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p>For Step Functions tasks, Systems Manager ignores any values specified for <code>TaskParameters</code> and <code>LoggingInfo</code>.</p> </note> */
		StepFunctions?: MaintenanceWindowStepFunctionsParameters;

		/**<p>The parameters for a LAMBDA task type.</p> <p>For information about specifying and updating task parameters, see <a>RegisterTaskWithMaintenanceWindow</a> and <a>UpdateMaintenanceWindowTask</a>.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p> <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs, instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p>For Lambda tasks, Systems Manager ignores any values specified for TaskParameters and LoggingInfo.</p> </note> */
		Lambda?: MaintenanceWindowLambdaParameters;
	}


	/**<p>Information about an S3 bucket to write instance-level logs to.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> </note> */
	export interface LoggingInfo {
		S3BucketName: string;
		S3KeyPrefix?: string;
		S3Region: string;
	}


	/**Operations engineers and IT professionals use OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their AWS resources. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">AWS Systems Manager OpsCenter</a> in the <i>AWS Systems Manager User Guide</i>.  */
	export interface OpsItem {
		CreatedBy?: string;
		CreatedTime?: Date;
		Description?: string;
		LastModifiedBy?: string;
		LastModifiedTime?: Date;
		Notifications?: Array<OpsItemNotification>;
		Priority?: number;
		RelatedOpsItems?: Array<RelatedOpsItem>;
		Status?: OpsItemStatus;
		OpsItemId?: string;
		Version?: string;
		Title?: string;
		Source?: string;
		OperationalData?: OpsItemOperationalData;
		Category?: string;
		Severity?: string;
	}

	export enum OpsItemStatus { Open = 0, InProgress = 1, Resolved = 2 }


	/**An Systems Manager parameter in Parameter Store. */
	export interface Parameter {
		Name?: string;
		Type?: ParameterType;
		Value?: string;
		Version?: number;
		Selector?: string;
		SourceResult?: string;
		LastModifiedDate?: Date;
		ARN?: string;
		DataType?: string;
	}

	export enum ParameterType { String = 0, StringList = 1, SecureString = 2 }


	/**<p>The service setting data structure.</p> <p> <code>ServiceSetting</code> is an account-level setting for an AWS service. This setting defines how a user interacts with or uses a service or a feature of a service. For example, if an AWS service charges money to the account based on feature or service usage, then the AWS service team might create a default setting of "false". This means the user can't use this feature unless they change the setting to "true" and intentionally opt in for a paid feature.</p> <p>Services map a <code>SettingId</code> object to a setting value. AWS services teams define the default value for a <code>SettingId</code>. You can't create a new <code>SettingId</code>, but you can overwrite the default value if you have the <code>ssm:UpdateServiceSetting</code> permission for the setting. Use the <a>UpdateServiceSetting</a> API action to change the default setting. Or, use the <a>ResetServiceSetting</a> to change the value back to the original value defined by the AWS service team.</p> */
	export interface ServiceSetting {
		SettingId?: string;
		SettingValue?: string;
		LastModifiedDate?: Date;
		LastModifiedUser?: string;
		ARN?: string;
		Status?: string;
	}


	/**Status information about the aggregated associations. */
	export interface InstanceAggregatedAssociationOverview {
		DetailedStatus?: string;
		InstanceAssociationStatusAggregatedCount?: InstanceAssociationStatusAggregatedCount;
	}


	/**One or more association documents on the instance.  */
	export interface InstanceAssociation {
		AssociationId?: string;
		InstanceId?: string;
		Content?: string;
		AssociationVersion?: string;
	}


	/**An S3 bucket where you want to store the results of this request. */
	export interface S3OutputLocation {
		OutputS3Region?: string;
		OutputS3BucketName?: string;
		OutputS3KeyPrefix?: string;
	}


	/**A URL for the S3 bucket where you want to store the results of this request. */
	export interface S3OutputUrl {
		OutputUrl?: string;
	}


	/**The URL of S3 bucket where you want to store the results of this request. */
	export interface InstanceAssociationOutputUrl {

		/**A URL for the S3 bucket where you want to store the results of this request. */
		S3OutputUrl?: S3OutputUrl;
	}


	/**Status information about the instance association. */
	export interface InstanceAssociationStatusInfo {
		AssociationId?: string;
		Name?: string;
		DocumentVersion?: string;
		AssociationVersion?: string;
		InstanceId?: string;
		ExecutionDate?: Date;
		Status?: string;
		DetailedStatus?: string;
		ExecutionSummary?: string;
		ErrorCode?: string;

		/**The URL of S3 bucket where you want to store the results of this request. */
		OutputUrl?: InstanceAssociationOutputUrl;
		AssociationName?: string;
	}

	export enum PingStatus { Online = 0, ConnectionLost = 1, Inactive = 2 }

	export enum PlatformType { Windows = 0, Linux = 1 }

	export enum ResourceType { ManagedInstance = 0, Document = 1, EC2Instance = 2 }


	/**Describes a filter for a specific list of instances.  */
	export interface InstanceInformation {
		InstanceId?: string;
		PingStatus?: InstanceInformationPingStatus;
		LastPingDateTime?: Date;
		AgentVersion?: string;
		IsLatestVersion?: boolean;
		PlatformType?: InstanceInformationPlatformType;
		PlatformName?: string;
		PlatformVersion?: string;
		ActivationId?: string;
		IamRole?: string;
		RegistrationDate?: Date;
		ResourceType?: InstanceInformationResourceType;
		Name?: string;
		IPAddress?: string;
		ComputerName?: string;
		AssociationStatus?: string;
		LastAssociationExecutionDate?: Date;
		LastSuccessfulAssociationExecutionDate?: Date;

		/**Status information about the aggregated associations. */
		AssociationOverview?: InstanceAggregatedAssociationOverview;
	}

	export enum InstanceInformationPingStatus { Online = 0, ConnectionLost = 1, Inactive = 2 }

	export enum InstanceInformationPlatformType { Windows = 0, Linux = 1 }

	export enum InstanceInformationResourceType { ManagedInstance = 0, Document = 1, EC2Instance = 2 }

	export enum InstanceInformationFilterKey { InstanceIds = 0, AgentVersion = 1, PingStatus = 2, PlatformTypes = 3, ActivationIds = 4, IamRole = 5, ResourceType = 6, AssociationStatus = 7 }


	/**<p>Describes a filter for a specific list of instances. You can filter instances information by using tags. You specify tags by using a key-value mapping.</p> <p>Use this action instead of the <a>DescribeInstanceInformationRequest$InstanceInformationFilterList</a> method. The <code>InstanceInformationFilterList</code> method is a legacy method and does not support tags. </p> */
	export interface InstanceInformationFilter {
		key: InstanceInformationFilterKey;
		valueSet: Array<InstanceInformationFilterValue>;
	}

	export enum InstanceInformationFilterKey { InstanceIds = 0, AgentVersion = 1, PingStatus = 2, PlatformTypes = 3, ActivationIds = 4, IamRole = 5, ResourceType = 6, AssociationStatus = 7 }


	/**The filters to describe or get information about your managed instances. */
	export interface InstanceInformationStringFilter {
		Key: string;
		Values: Array<InstanceInformationFilterValue>;
	}

	export enum PatchOperationType { Scan = 0, Install = 1 }

	export enum RebootOption { RebootIfNeeded = 0, NoReboot = 1 }


	/**Defines the high-level patch compliance state for a managed instance, providing information about the number of installed, missing, not applicable, and failed patches along with metadata about the operation when this information was gathered for the instance. */
	export interface InstancePatchState {
		InstanceId: string;
		PatchGroup: string;
		BaselineId: string;
		SnapshotId?: string;
		InstallOverrideList?: string;
		OwnerInformation?: string;
		InstalledCount?: number;
		InstalledOtherCount?: number;
		InstalledPendingRebootCount?: number;
		InstalledRejectedCount?: number;
		MissingCount?: number;
		FailedCount?: number;
		UnreportedNotApplicableCount?: number;
		NotApplicableCount?: number;
		OperationStartTime: Date;
		OperationEndTime: Date;
		Operation: InstancePatchStateOperation;
		LastNoRebootInstallOperationTime?: Date;
		RebootOption?: InstancePatchStateRebootOption;
	}

	export enum InstancePatchStateOperation { Scan = 0, Install = 1 }

	export enum InstancePatchStateRebootOption { RebootIfNeeded = 0, NoReboot = 1 }

	export enum InstancePatchStateOperatorType { Equal = 0, NotEqual = 1, LessThan = 2, GreaterThan = 3 }


	/**Defines a filter used in DescribeInstancePatchStatesForPatchGroup used to scope down the information returned by the API. */
	export interface InstancePatchStateFilter {
		Key: string;
		Values: Array<InstancePatchStateFilterValue>;
		Type: InstancePatchStateFilterType;
	}

	export enum InstancePatchStateFilterType { Equal = 0, NotEqual = 1, LessThan = 2, GreaterThan = 3 }


	/**Specifies the inventory type and attribute for the aggregation execution. */
	export interface InventoryAggregator {
		Expression?: string;
		Aggregators?: Array<InventoryAggregator>;
		Groups?: Array<InventoryGroup>;
	}

	export enum InventoryAttributeDataType { string = 0, number = 1 }

	export enum InventoryDeletionStatus { InProgress = 0, Complete = 1 }


	/**Status information returned by the <code>DeleteInventory</code> action. */
	export interface InventoryDeletionStatusItem {
		DeletionId?: string;
		TypeName?: string;
		DeletionStartTime?: Date;
		LastStatus?: InventoryDeletionStatusItemLastStatus;
		LastStatusMessage?: string;

		/**Information about the delete operation. */
		DeletionSummary?: InventoryDeletionSummary;
		LastStatusUpdateTime?: Date;
	}

	export enum InventoryDeletionStatusItemLastStatus { InProgress = 0, Complete = 1 }


	/**Either a count, remaining count, or a version number in a delete inventory summary. */
	export interface InventoryDeletionSummaryItem {
		Version?: string;
		Count?: number;
		RemainingCount?: number;
	}

	export enum InventoryQueryOperatorType { Equal = 0, NotEqual = 1, BeginWith = 2, LessThan = 3, GreaterThan = 4, Exists = 5 }


	/**One or more filters. Use a filter to return a more specific list of results. */
	export interface InventoryFilter {
		Key: string;
		Values: Array<InventoryFilterValue>;
		Type?: InventoryFilterType;
	}

	export enum InventoryFilterType { Equal = 0, NotEqual = 1, BeginWith = 2, LessThan = 3, GreaterThan = 4, Exists = 5 }


	/**A user-defined set of one or more filters on which to aggregate inventory data. Groups return a count of resources that match and don't match the specified criteria. */
	export interface InventoryGroup {
		Name: string;
		Filters: Array<InventoryFilter>;
	}


	/**Information collected from managed instances based on your inventory policy document */
	export interface InventoryItem {
		TypeName: string;
		SchemaVersion: string;
		CaptureTime: string;
		ContentHash?: string;
		Content?: Array<InventoryItemEntry>;
		Context?: InventoryItemContentContext;
	}


	/**Attributes are the entries within the inventory item content. It contains name and value. */
	export interface InventoryItemAttribute {
		Name: string;
		DataType: InventoryItemAttributeDataType;
	}

	export enum InventoryItemAttributeDataType { string = 0, number = 1 }


	/**The inventory item schema definition. Users can use this to compose inventory query filters. */
	export interface InventoryItemSchema {
		TypeName: string;
		Version?: string;
		Attributes: Array<InventoryItemAttribute>;
		DisplayName?: string;
	}


	/**Inventory query results. */
	export interface InventoryResultEntity {
		Id?: string;
		Data?: InventoryResultItemMap;
	}


	/**The inventory result item. */
	export interface InventoryResultItem {
		TypeName: string;
		SchemaVersion: string;
		CaptureTime?: string;
		ContentHash?: string;
		Content: Array<InventoryItemEntry>;
	}

	export enum LastResourceDataSyncStatus { Successful = 0, Failed = 1, InProgress = 2 }


	/**The parameters for an AUTOMATION task type. */
	export interface MaintenanceWindowAutomationParameters {
		DocumentVersion?: string;
		Parameters?: AutomationParameterMap;
	}


	/**Describes the information about an execution of a maintenance window.  */
	export interface MaintenanceWindowExecution {
		WindowId?: string;
		WindowExecutionId?: string;
		Status?: MaintenanceWindowExecutionStatus;
		StatusDetails?: string;
		StartTime?: Date;
		EndTime?: Date;
	}

	export enum MaintenanceWindowExecutionStatus { PENDING = 0, IN_PROGRESS = 1, SUCCESS = 2, FAILED = 3, TIMED_OUT = 4, CANCELLING = 5, CANCELLED = 6, SKIPPED_OVERLAPPING = 7 }


	/**Information about a task execution performed as part of a maintenance window execution. */
	export interface MaintenanceWindowExecutionTaskIdentity {
		WindowExecutionId?: string;
		TaskExecutionId?: string;
		Status?: MaintenanceWindowExecutionTaskIdentityStatus;
		StatusDetails?: string;
		StartTime?: Date;
		EndTime?: Date;
		TaskArn?: string;
		TaskType?: MaintenanceWindowExecutionTaskIdentityTaskType;
	}

	export enum MaintenanceWindowExecutionTaskIdentityStatus { PENDING = 0, IN_PROGRESS = 1, SUCCESS = 2, FAILED = 3, TIMED_OUT = 4, CANCELLING = 5, CANCELLED = 6, SKIPPED_OVERLAPPING = 7 }

	export enum MaintenanceWindowExecutionTaskIdentityTaskType { RUN_COMMAND = 0, AUTOMATION = 1, STEP_FUNCTIONS = 2, LAMBDA = 3 }


	/**Describes the information about a task invocation for a particular target as part of a task execution performed as part of a maintenance window execution. */
	export interface MaintenanceWindowExecutionTaskInvocationIdentity {
		WindowExecutionId?: string;
		TaskExecutionId?: string;
		InvocationId?: string;
		ExecutionId?: string;
		TaskType?: MaintenanceWindowExecutionTaskInvocationIdentityTaskType;
		Parameters?: string;
		Status?: MaintenanceWindowExecutionTaskInvocationIdentityStatus;
		StatusDetails?: string;
		StartTime?: Date;
		EndTime?: Date;
		OwnerInformation?: string;
		WindowTargetId?: string;
	}

	export enum MaintenanceWindowExecutionTaskInvocationIdentityTaskType { RUN_COMMAND = 0, AUTOMATION = 1, STEP_FUNCTIONS = 2, LAMBDA = 3 }

	export enum MaintenanceWindowExecutionTaskInvocationIdentityStatus { PENDING = 0, IN_PROGRESS = 1, SUCCESS = 2, FAILED = 3, TIMED_OUT = 4, CANCELLING = 5, CANCELLED = 6, SKIPPED_OVERLAPPING = 7 }


	/**Filter used in the request. Supported filter keys are Name and Enabled. */
	export interface MaintenanceWindowFilter {
		Key?: string;
		Values?: Array<MaintenanceWindowFilterValue>;
	}


	/**Information about the maintenance window. */
	export interface MaintenanceWindowIdentity {
		WindowId?: string;
		Name?: string;
		Description?: string;
		Enabled?: boolean;
		Duration?: number;
		Cutoff?: number;
		Schedule?: string;
		ScheduleTimezone?: string;
		EndDate?: string;
		StartDate?: string;
		NextExecutionTime?: string;
	}


	/**The maintenance window to which the specified target belongs. */
	export interface MaintenanceWindowIdentityForTarget {
		WindowId?: string;
		Name?: string;
	}


	/**<p>The parameters for a LAMBDA task type.</p> <p>For information about specifying and updating task parameters, see <a>RegisterTaskWithMaintenanceWindow</a> and <a>UpdateMaintenanceWindowTask</a>.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p> <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs, instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p>For Lambda tasks, Systems Manager ignores any values specified for TaskParameters and LoggingInfo.</p> </note> */
	export interface MaintenanceWindowLambdaParameters {
		ClientContext?: string;
		Qualifier?: string;
		Payload?: string;
	}


	/**<p>The parameters for a RUN_COMMAND task type.</p> <p>For information about specifying and updating task parameters, see <a>RegisterTaskWithMaintenanceWindow</a> and <a>UpdateMaintenanceWindowTask</a>.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p> <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs, instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p>For Run Command tasks, Systems Manager uses specified values for <code>TaskParameters</code> and <code>LoggingInfo</code> only if no values are specified for <code>TaskInvocationParameters</code>. </p> </note> */
	export interface MaintenanceWindowRunCommandParameters {
		Comment?: string;

		/**Configuration options for sending command output to CloudWatch Logs. */
		CloudWatchOutputConfig?: CloudWatchOutputConfig;
		DocumentHash?: string;
		DocumentHashType?: MaintenanceWindowRunCommandParametersDocumentHashType;
		DocumentVersion?: string;

		/**Configurations for sending notifications. */
		NotificationConfig?: NotificationConfig;
		OutputS3BucketName?: string;
		OutputS3KeyPrefix?: string;
		Parameters?: Parameters;
		ServiceRoleArn?: string;
		TimeoutSeconds?: number;
	}

	export enum MaintenanceWindowRunCommandParametersDocumentHashType { Sha256 = 0, Sha1 = 1 }


	/**<p>The parameters for a STEP_FUNCTIONS task.</p> <p>For information about specifying and updating task parameters, see <a>RegisterTaskWithMaintenanceWindow</a> and <a>UpdateMaintenanceWindowTask</a>.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p> <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs, instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p>For Step Functions tasks, Systems Manager ignores any values specified for <code>TaskParameters</code> and <code>LoggingInfo</code>.</p> </note> */
	export interface MaintenanceWindowStepFunctionsParameters {
		Input?: string;
		Name?: string;
	}


	/**The target registered with the maintenance window. */
	export interface MaintenanceWindowTarget {
		WindowId?: string;
		WindowTargetId?: string;
		ResourceType?: MaintenanceWindowTargetResourceType;
		Targets?: Array<Target>;
		OwnerInformation?: string;
		Name?: string;
		Description?: string;
	}

	export enum MaintenanceWindowTargetResourceType { INSTANCE = 0, RESOURCE_GROUP = 1 }


	/**Information about a task defined for a maintenance window. */
	export interface MaintenanceWindowTask {
		WindowId?: string;
		WindowTaskId?: string;
		TaskArn?: string;
		Type?: MaintenanceWindowTaskType;
		Targets?: Array<Target>;
		TaskParameters?: MaintenanceWindowTaskParameters;
		Priority?: number;

		/**<p>Information about an S3 bucket to write instance-level logs to.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> </note> */
		LoggingInfo?: LoggingInfo;
		ServiceRoleArn?: string;
		MaxConcurrency?: string;
		MaxErrors?: string;
		Name?: string;
		Description?: string;
	}

	export enum MaintenanceWindowTaskType { RUN_COMMAND = 0, AUTOMATION = 1, STEP_FUNCTIONS = 2, LAMBDA = 3 }


	/**Defines the values for a task parameter. */
	export interface MaintenanceWindowTaskParameterValueExpression {
		Values?: Array<MaintenanceWindowTaskParameterValue>;
	}

	export enum NotificationType { Command = 0, Invocation = 1 }

	export enum NotificationEvent { All = 0, InProgress = 1, Success = 2, TimedOut = 3, Cancelled = 4, Failed = 5 }


	/**One or more aggregators for viewing counts of OpsItems using different dimensions such as <code>Source</code>, <code>CreatedTime</code>, or <code>Source and CreatedTime</code>, to name a few. */
	export interface OpsAggregator {
		AggregatorType?: string;
		TypeName?: string;
		AttributeName?: string;
		Values?: OpsAggregatorValueMap;
		Filters?: Array<OpsFilter>;
		Aggregators?: Array<OpsAggregator>;
	}


	/**The result of the query. */
	export interface OpsEntity {
		Id?: string;
		Data?: OpsEntityItemMap;
	}


	/**The OpsItem summaries result item. */
	export interface OpsEntityItem {
		CaptureTime?: string;
		Content?: Array<OpsEntityItemEntry>;
	}

	export enum OpsFilterOperatorType { Equal = 0, NotEqual = 1, BeginWith = 2, LessThan = 3, GreaterThan = 4, Exists = 5 }


	/**A filter for viewing OpsItem summaries. */
	export interface OpsFilter {
		Key: string;
		Values: Array<OpsFilterValue>;
		Type?: OpsFilterType;
	}

	export enum OpsFilterType { Equal = 0, NotEqual = 1, BeginWith = 2, LessThan = 3, GreaterThan = 4, Exists = 5 }

	export enum OpsItemStatus { Open = 0, InProgress = 1, Resolved = 2 }

	export enum OpsItemDataType { SearchableString = 0, String = 1 }


	/**An object that defines the value of the key and its type in the OperationalData map. */
	export interface OpsItemDataValue {
		Value?: string;
		Type?: OpsItemDataValueType;
	}

	export enum OpsItemDataValueType { SearchableString = 0, String = 1 }

	export enum OpsItemFilterKey { Status = 0, CreatedBy = 1, Source = 2, Priority = 3, Title = 4, OpsItemId = 5, CreatedTime = 6, LastModifiedTime = 7, OperationalData = 8, OperationalDataKey = 9, OperationalDataValue = 10, ResourceId = 11, AutomationId = 12, Category = 13, Severity = 14 }

	export enum OpsItemFilterOperator { Equal = 0, Contains = 1, GreaterThan = 2, LessThan = 3 }


	/**Describes an OpsItem filter. */
	export interface OpsItemFilter {
		Key: OpsItemFilterKey;
		Values: Array<OpsItemFilterValue>;
		Operator: OpsItemFilterOperator;
	}

	export enum OpsItemFilterKey { Status = 0, CreatedBy = 1, Source = 2, Priority = 3, Title = 4, OpsItemId = 5, CreatedTime = 6, LastModifiedTime = 7, OperationalData = 8, OperationalDataKey = 9, OperationalDataValue = 10, ResourceId = 11, AutomationId = 12, Category = 13, Severity = 14 }

	export enum OpsItemFilterOperator { Equal = 0, Contains = 1, GreaterThan = 2, LessThan = 3 }


	/**A notification about the OpsItem. */
	export interface OpsItemNotification {
		Arn?: string;
	}


	/**A count of OpsItems. */
	export interface OpsItemSummary {
		CreatedBy?: string;
		CreatedTime?: Date;
		LastModifiedBy?: string;
		LastModifiedTime?: Date;
		Priority?: number;
		Source?: string;
		Status?: OpsItemSummaryStatus;
		OpsItemId?: string;
		Title?: string;
		OperationalData?: OpsItemOperationalData;
		Category?: string;
		Severity?: string;
	}

	export enum OpsItemSummaryStatus { Open = 0, InProgress = 1, Resolved = 2 }


	/**The OpsItem data type to return. */
	export interface OpsResultAttribute {
		TypeName: string;
	}

	export enum ParameterType { String = 0, StringList = 1, SecureString = 2 }

	export enum ParameterTier { Standard = 0, Advanced = 1, Intelligent-Tiering = 2 }


	/**Information about parameter usage. */
	export interface ParameterHistory {
		Name?: string;
		Type?: ParameterHistoryType;
		KeyId?: string;
		LastModifiedDate?: Date;
		LastModifiedUser?: string;
		Description?: string;
		Value?: string;
		AllowedPattern?: string;
		Version?: number;
		Labels?: Array<ParameterLabel>;
		Tier?: ParameterHistoryTier;
		Policies?: Array<ParameterInlinePolicy>;
		DataType?: string;
	}

	export enum ParameterHistoryType { String = 0, StringList = 1, SecureString = 2 }

	export enum ParameterHistoryTier { Standard = 0, Advanced = 1, Intelligent-Tiering = 2 }


	/**One or more policies assigned to a parameter. */
	export interface ParameterInlinePolicy {
		PolicyText?: string;
		PolicyType?: string;
		PolicyStatus?: string;
	}


	/**Metadata includes information like the ARN of the last user and the date/time the parameter was last used. */
	export interface ParameterMetadata {
		Name?: string;
		Type?: ParameterMetadataType;
		KeyId?: string;
		LastModifiedDate?: Date;
		LastModifiedUser?: string;
		Description?: string;
		AllowedPattern?: string;
		Version?: number;
		Tier?: ParameterMetadataTier;
		Policies?: Array<ParameterInlinePolicy>;
		DataType?: string;
	}

	export enum ParameterMetadataType { String = 0, StringList = 1, SecureString = 2 }

	export enum ParameterMetadataTier { Standard = 0, Advanced = 1, Intelligent-Tiering = 2 }


	/**<p>One or more filters. Use a filter to return a more specific list of results.</p> <important> <p>The <code>ParameterStringFilter</code> object is used by the <a>DescribeParameters</a> and <a>GetParametersByPath</a> API actions. However, not all of the pattern values listed for <code>Key</code> can be used with both actions.</p> <p>For <code>DescribeActions</code>, all of the listed patterns are valid, with the exception of <code>Label</code>.</p> <p>For <code>GetParametersByPath</code>, the following patterns listed for <code>Key</code> are not valid: <code>Name</code>, <code>Path</code>, and <code>Tier</code>.</p> <p>For examples of CLI commands demonstrating valid parameter filter constructions, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-search.html">Searching for Systems Manager parameters</a> in the <i>AWS Systems Manager User Guide</i>.</p> </important> */
	export interface ParameterStringFilter {
		Key: string;
		Option?: string;
		Values?: Array<ParameterStringFilterValue>;
	}

	export enum ParametersFilterKey { Name = 0, Type = 1, KeyId = 2 }


	/**This data type is deprecated. Instead, use <a>ParameterStringFilter</a>. */
	export interface ParametersFilter {
		Key: ParametersFilterKey;
		Values: Array<ParametersFilterValue>;
	}

	export enum ParametersFilterKey { Name = 0, Type = 1, KeyId = 2 }


	/**Defines the basic information about a patch baseline. */
	export interface PatchBaselineIdentity {
		BaselineId?: string;
		BaselineName?: string;
		OperatingSystem?: PatchBaselineIdentityOperatingSystem;
		BaselineDescription?: string;
		DefaultBaseline?: boolean;
	}

	export enum PatchBaselineIdentityOperatingSystem { WINDOWS = 0, AMAZON_LINUX = 1, AMAZON_LINUX_2 = 2, UBUNTU = 3, REDHAT_ENTERPRISE_LINUX = 4, SUSE = 5, CENTOS = 6, ORACLE_LINUX = 7, DEBIAN = 8 }

	export enum PatchComplianceDataState { INSTALLED = 0, INSTALLED_OTHER = 1, INSTALLED_PENDING_REBOOT = 2, INSTALLED_REJECTED = 3, MISSING = 4, NOT_APPLICABLE = 5, FAILED = 6 }


	/**Information about the state of a patch on a particular instance as it relates to the patch baseline used to patch the instance. */
	export interface PatchComplianceData {
		Title: string;
		KBId: string;
		Classification: string;
		Severity: string;
		State: PatchComplianceDataState;
		InstalledTime: Date;
	}

	export enum PatchComplianceDataState { INSTALLED = 0, INSTALLED_OTHER = 1, INSTALLED_PENDING_REBOOT = 2, INSTALLED_REJECTED = 3, MISSING = 4, NOT_APPLICABLE = 5, FAILED = 6 }

	export enum PatchDeploymentStatus { APPROVED = 0, PENDING_APPROVAL = 1, EXPLICIT_APPROVED = 2, EXPLICIT_REJECTED = 3 }

	export enum PatchFilterKey { PATCH_SET = 0, PRODUCT = 1, PRODUCT_FAMILY = 2, CLASSIFICATION = 3, MSRC_SEVERITY = 4, PATCH_ID = 5, SECTION = 6, PRIORITY = 7, SEVERITY = 8 }


	/**<p> Defines which patches should be included in a patch baseline.</p> <p>A patch filter consists of a key and a set of values. The filter key is a patch property. For example, the available filter keys for WINDOWS are PATCH_SET, PRODUCT, PRODUCT_FAMILY, CLASSIFICATION, and MSRC_SEVERITY. The filter values define a matching criterion for the patch property indicated by the key. For example, if the filter key is PRODUCT and the filter values are ["Office 2013", "Office 2016"], then the filter accepts all patches where product name is either "Office 2013" or "Office 2016". The filter values can be exact values for the patch property given as a key, or a wildcard (*), which matches all values.</p> <p>You can view lists of valid values for the patch properties by running the <code>DescribePatchProperties</code> command. For information about which patch properties can be used with each major operating system, see <a>DescribePatchProperties</a>.</p> */
	export interface PatchFilter {
		Key: PatchFilterKey;
		Values: Array<PatchFilterValue>;
	}

	export enum PatchFilterKey { PATCH_SET = 0, PRODUCT = 1, PRODUCT_FAMILY = 2, CLASSIFICATION = 3, MSRC_SEVERITY = 4, PATCH_ID = 5, SECTION = 6, PRIORITY = 7, SEVERITY = 8 }


	/**The mapping between a patch group and the patch baseline the patch group is registered with. */
	export interface PatchGroupPatchBaselineMapping {
		PatchGroup?: string;

		/**Defines the basic information about a patch baseline. */
		BaselineIdentity?: PatchBaselineIdentity;
	}


	/**Defines a filter used in Patch Manager APIs. */
	export interface PatchOrchestratorFilter {
		Key?: string;
		Values?: Array<PatchOrchestratorFilterValue>;
	}


	/**Defines an approval rule for a patch baseline. */
	export interface PatchRule {

		/**A set of patch filters, typically used for approval rules. */
		PatchFilterGroup: PatchFilterGroup;
		ComplianceLevel?: PatchRuleComplianceLevel;
		ApproveAfterDays?: number;
		ApproveUntilDate?: string;
		EnableNonSecurity?: boolean;
	}

	export enum PatchRuleComplianceLevel { CRITICAL = 0, HIGH = 1, MEDIUM = 2, LOW = 3, INFORMATIONAL = 4, UNSPECIFIED = 5 }


	/**Information about the patches to use to update the instances, including target operating systems and source repository. Applies to Linux instances only. */
	export interface PatchSource {
		Name: string;
		Products: Array<PatchSourceProduct>;
		Configuration: string;
	}


	/**An OpsItems that shares something in common with the current OpsItem. For example, related OpsItems can include OpsItems with similar error messages, impacted resources, or statuses for the impacted resource. */
	export interface RelatedOpsItem {
		OpsItemId: string;
	}


	/**Compliance summary information for a specific resource.  */
	export interface ResourceComplianceSummaryItem {
		ComplianceType?: string;
		ResourceType?: string;
		ResourceId?: string;
		Status?: ResourceComplianceSummaryItemStatus;
		OverallSeverity?: ResourceComplianceSummaryItemOverallSeverity;

		/**A summary of the call execution that includes an execution ID, the type of execution (for example, <code>Command</code>), and the date/time of the execution using a datetime object that is saved in the following format: yyyy-MM-dd'T'HH:mm:ss'Z'. */
		ExecutionSummary?: ComplianceExecutionSummary;

		/**A summary of resources that are compliant. The summary is organized according to the resource count for each compliance type. */
		CompliantSummary?: CompliantSummary;

		/**A summary of resources that are not compliant. The summary is organized according to resource type. */
		NonCompliantSummary?: NonCompliantSummary;
	}

	export enum ResourceComplianceSummaryItemStatus { COMPLIANT = 0, NON_COMPLIANT = 1 }

	export enum ResourceComplianceSummaryItemOverallSeverity { CRITICAL = 0, HIGH = 1, MEDIUM = 2, LOW = 3, INFORMATIONAL = 4, UNSPECIFIED = 5 }


	/**Information about the AwsOrganizationsSource resource data sync source. A sync source of this type can synchronize data from AWS Organizations or, if an AWS Organization is not present, from multiple AWS Regions. */
	export interface ResourceDataSyncAwsOrganizationsSource {
		OrganizationSourceType: string;
		OrganizationalUnits?: Array<ResourceDataSyncOrganizationalUnit>;
	}


	/**Synchronize Systems Manager Inventory data from multiple AWS accounts defined in AWS Organizations to a centralized S3 bucket. Data is synchronized to individual key prefixes in the central bucket. Each key prefix represents a different AWS account ID. */
	export interface ResourceDataSyncDestinationDataSharing {
		DestinationDataSharingType?: string;
	}


	/**<p>The data type name for including resource data sync state. There are four sync states:</p> <p> <code>OrganizationNotExists</code> (Your organization doesn't exist)</p> <p> <code>NoPermissions</code> (The system can't locate the service-linked role. This role is automatically created when a user creates a resource data sync in Explorer.)</p> <p> <code>InvalidOrganizationalUnit</code> (You specified or selected an invalid unit in the resource data sync configuration.)</p> <p> <code>TrustedAccessDisabled</code> (You disabled Systems Manager access in the organization in AWS Organizations.)</p> */
	export interface ResourceDataSyncSourceWithState {
		SourceType?: string;

		/**Information about the AwsOrganizationsSource resource data sync source. A sync source of this type can synchronize data from AWS Organizations or, if an AWS Organization is not present, from multiple AWS Regions. */
		AwsOrganizationsSource?: ResourceDataSyncAwsOrganizationsSource;
		SourceRegions?: Array<ResourceDataSyncSourceRegion>;
		IncludeFutureRegions?: boolean;
		State?: string;
	}


	/**Information about a Resource Data Sync configuration, including its current status and last successful sync. */
	export interface ResourceDataSyncItem {
		SyncName?: string;
		SyncType?: string;

		/**<p>The data type name for including resource data sync state. There are four sync states:</p> <p> <code>OrganizationNotExists</code> (Your organization doesn't exist)</p> <p> <code>NoPermissions</code> (The system can't locate the service-linked role. This role is automatically created when a user creates a resource data sync in Explorer.)</p> <p> <code>InvalidOrganizationalUnit</code> (You specified or selected an invalid unit in the resource data sync configuration.)</p> <p> <code>TrustedAccessDisabled</code> (You disabled Systems Manager access in the organization in AWS Organizations.)</p> */
		SyncSource?: ResourceDataSyncSourceWithState;

		/**Information about the target S3 bucket for the Resource Data Sync. */
		S3Destination?: ResourceDataSyncS3Destination;
		LastSyncTime?: Date;
		LastSuccessfulSyncTime?: Date;
		SyncLastModifiedTime?: Date;
		LastStatus?: ResourceDataSyncItemLastStatus;
		SyncCreatedTime?: Date;
		LastSyncStatusMessage?: string;
	}

	export enum ResourceDataSyncItemLastStatus { Successful = 0, Failed = 1, InProgress = 2 }


	/**The AWS Organizations organizational unit data source for the sync. */
	export interface ResourceDataSyncOrganizationalUnit {
		OrganizationalUnitId?: string;
	}

	export enum ResourceDataSyncS3Format { JsonSerDe = 0 }


	/**The inventory item result attribute. */
	export interface ResultAttribute {
		TypeName: string;
	}


	/**Information about a scheduled execution for a maintenance window. */
	export interface ScheduledWindowExecution {
		WindowId?: string;
		Name?: string;
		ExecutionTime?: string;
	}

	export enum SignalType { Approve = 0, Reject = 1, StartStep = 2, StopStep = 3, Resume = 4 }

	export enum SessionStatus { Connected = 0, Connecting = 1, Disconnected = 2, Terminated = 3, Terminating = 4, Failed = 5 }


	/**Reserved for future use. */
	export interface SessionManagerOutputUrl {
		S3OutputUrl?: string;
		CloudWatchOutputUrl?: string;
	}


	/**Information about a Session Manager connection to an instance. */
	export interface Session {
		SessionId?: string;
		Target?: string;
		Status?: SessionStatus;
		StartDate?: Date;
		EndDate?: Date;
		DocumentName?: string;
		Owner?: string;
		Details?: string;

		/**Reserved for future use. */
		OutputUrl?: SessionManagerOutputUrl;
	}

	export enum SessionStatus { Connected = 0, Connecting = 1, Disconnected = 2, Terminated = 3, Terminating = 4, Failed = 5 }

	export enum SessionFilterKey { InvokedAfter = 0, InvokedBefore = 1, Target = 2, Owner = 3, Status = 4 }


	/**Describes a filter for Session Manager information. */
	export interface SessionFilter {
		key: SessionFilterKey;
		value: string;
	}

	export enum SessionFilterKey { InvokedAfter = 0, InvokedBefore = 1, Target = 2, Owner = 3, Status = 4 }


	/**The combination of AWS Regions and accounts targeted by the current Automation execution. */
	export interface TargetLocation {
		Accounts?: Array<Account>;
		Regions?: Array<Region>;
		TargetLocationMaxConcurrency?: string;
		TargetLocationMaxErrors?: string;
		ExecutionRoleName?: string;
	}


	/**Detailed information about an the execution state of an Automation step. */
	export interface StepExecution {
		StepName?: string;
		Action?: string;
		TimeoutSeconds?: number;
		OnFailure?: string;
		MaxAttempts?: number;
		ExecutionStartTime?: Date;
		ExecutionEndTime?: Date;
		StepStatus?: StepExecutionStepStatus;
		ResponseCode?: string;
		Inputs?: NormalStringMap;
		Outputs?: AutomationParameterMap;
		Response?: string;
		FailureMessage?: string;

		/**Information about an Automation failure. */
		FailureDetails?: FailureDetails;
		StepExecutionId?: string;
		OverriddenParameters?: AutomationParameterMap;
		IsEnd?: boolean;
		NextStep?: string;
		IsCritical?: boolean;
		ValidNextSteps?: Array<ValidNextStep>;
		Targets?: Array<Target>;

		/**The combination of AWS Regions and accounts targeted by the current Automation execution. */
		TargetLocation?: TargetLocation;
	}

	export enum StepExecutionStepStatus { Pending = 0, InProgress = 1, Waiting = 2, Success = 3, TimedOut = 4, Cancelling = 5, Cancelled = 6, Failed = 7 }

	export enum StepExecutionFilterKey { StartTimeBefore = 0, StartTimeAfter = 1, StepExecutionStatus = 2, StepExecutionId = 3, StepName = 4, Action = 5 }


	/**A filter to limit the amount of step execution information returned by the call. */
	export interface StepExecutionFilter {
		Key: StepExecutionFilterKey;
		Values: Array<StepExecutionFilterValue>;
	}

	export enum StepExecutionFilterKey { StartTimeBefore = 0, StartTimeAfter = 1, StepExecutionStatus = 2, StepExecutionId = 3, StepName = 4, Action = 5 }

	export enum StopType { Complete = 0, Cancel = 1 }


	/**Metadata that you assign to your AWS resources. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment. In Systems Manager, you can apply tags to documents, managed instances, maintenance windows, Parameter Store parameters, and patch baselines. */
	export interface Tag {
		Key: string;
		Value: string;
	}


	/**<p>An array of search criteria that targets instances using a Key,Value combination that you specify. </p> <p>Supported formats include the following.</p> <ul> <li> <p> <code>Key=InstanceIds,Values=<i>instance-id-1</i>,<i>instance-id-2</i>,<i>instance-id-3</i> </code> </p> </li> <li> <p> <code>Key=tag:<i>my-tag-key</i>,Values=<i>my-tag-value-1</i>,<i>my-tag-value-2</i> </code> </p> </li> <li> <p> <code>Key=tag-key,Values=<i>my-tag-key-1</i>,<i>my-tag-key-2</i> </code> </p> </li> <li> <p>(Maintenance window targets only) <code>Key=resource-groups:Name,Values=<i>resource-group-name</i> </code> </p> </li> <li> <p>(Maintenance window targets only) <code>Key=resource-groups:ResourceTypeFilters,Values=<i>resource-type-1</i>,<i>resource-type-2</i> </code> </p> </li> </ul> <p>For example:</p> <ul> <li> <p> <code>Key=InstanceIds,Values=i-02573cafcfEXAMPLE,i-0471e04240EXAMPLE,i-07782c72faEXAMPLE</code> </p> </li> <li> <p> <code>Key=tag:CostCenter,Values=CostCenter1,CostCenter2,CostCenter3</code> </p> </li> <li> <p> <code>Key=tag-key,Values=Name,Instance-Type,CostCenter</code> </p> </li> <li> <p>(Maintenance window targets only) <code>Key=resource-groups:Name,Values=ProductionResourceGroup</code> </p> <p>This example demonstrates how to target all resources in the resource group <b>ProductionResourceGroup</b> in your maintenance window.</p> </li> <li> <p>(Maintenance window targets only) <code>Key=resource-groups:ResourceTypeFilters,Values=<i>AWS::EC2::INSTANCE</i>,<i>AWS::EC2::VPC</i> </code> </p> <p>This example demonstrates how to target only EC2 instances and VPCs in your maintenance window.</p> </li> <li> <p>(State Manager association targets only) <code>Key=InstanceIds,Values=<i>*</i> </code> </p> <p>This example demonstrates how to target all managed instances in the AWS Region where the association was created.</p> </li> </ul> <p>For information about how to send commands that target instances using <code>Key,Value</code> parameters, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/send-commands-multiple.html#send-commands-targeting">Targeting multiple instances</a> in the <i>AWS Systems Manager User Guide</i>.</p> */
	export interface Target {
		Key?: string;
		Values?: Array<TargetValue>;
	}

	export class DemoClient {
		constructor(private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/') {
		}

		/**
		 * <p>Adds or overwrites one or more tags for the specified resource. Tags are metadata that you can assign to your documents, managed instances, maintenance windows, Parameter Store parameters, and patch baselines. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment. Each tag consists of a key and an optional value, both of which you define. For example, you could define a set of tags for your account's managed instances that helps you track each instance's owner and stack level. For example: Key=Owner and Value=DbAdmin, SysAdmin, or Dev. Or Key=Stack and Value=Production, Pre-Production, or Test.</p> <p>Each resource can have a maximum of 50 tags. </p> <p>We recommend that you devise a set of tag keys that meets your needs for each resource type. Using a consistent set of tag keys makes it easier for you to manage your resources. You can search and filter the resources based on the tags you add. Tags don't have any semantic meaning to and are interpreted strictly as a string of characters. </p> <p>For more information about using tags with EC2 instances, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html">Tagging your Amazon EC2 resources</a> in the <i>Amazon EC2 User Guide</i>.</p>
		 * Post /#X-Amz-Target=AmazonSSM.AddTagsToResource
		 * @return {AddTagsToResourceResult} Success
		 */
		AddTagsToResource(requestBody: AddTagsToResourceRequest, headersHandler?: () => {[header: string]: string}): Promise<AddTagsToResourceResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.AddTagsToResource', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Attempts to cancel the command specified by the Command ID. There is no guarantee that the command will be terminated and the underlying process stopped.
		 * Post /#X-Amz-Target=AmazonSSM.CancelCommand
		 * @return {CancelCommandResult} Success
		 */
		CancelCommand(requestBody: CancelCommandRequest, headersHandler?: () => {[header: string]: string}): Promise<CancelCommandResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.CancelCommand', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Stops a maintenance window execution that is already in progress and cancels any tasks in the window that have not already starting running. (Tasks already in progress will continue to completion.)
		 * Post /#X-Amz-Target=AmazonSSM.CancelMaintenanceWindowExecution
		 * @return {CancelMaintenanceWindowExecutionResult} Success
		 */
		CancelMaintenanceWindowExecution(requestBody: CancelMaintenanceWindowExecutionRequest, headersHandler?: () => {[header: string]: string}): Promise<CancelMaintenanceWindowExecutionResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.CancelMaintenanceWindowExecution', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Generates an activation code and activation ID you can use to register your on-premises server or virtual machine (VM) with Systems Manager. Registering these machines with Systems Manager makes it possible to manage them using Systems Manager capabilities. You use the activation code and ID when installing SSM Agent on machines in your hybrid environment. For more information about requirements for managing on-premises instances and VMs using Systems Manager, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-managedinstances.html">Setting up AWS Systems Manager for hybrid environments</a> in the <i>AWS Systems Manager User Guide</i>. </p> <note> <p>On-premises servers or VMs that are registered with Systems Manager and EC2 instances that you manage with Systems Manager are all called <i>managed instances</i>.</p> </note>
		 * Post /#X-Amz-Target=AmazonSSM.CreateActivation
		 * @return {CreateActivationResult} Success
		 */
		CreateActivation(requestBody: CreateActivationRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateActivationResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.CreateActivation', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Associates the specified Systems Manager document with the specified instances or targets.</p> <p>When you associate a document with one or more instances, SSM Agent running on the instance processes the document and configures the instance as specified. If you associate a document with an instance that already has an associated document, the system returns the <code>AssociationAlreadyExists</code> exception.</p>
		 * Post /#X-Amz-Target=AmazonSSM.CreateAssociation
		 * @return {CreateAssociationResult} Success
		 */
		CreateAssociation(requestBody: CreateAssociationRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateAssociationResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.CreateAssociation', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Associates the specified Systems Manager document with the specified instances or targets.</p> <p>When you associate a document with one or more instances using instance IDs or tags, SSM Agent running on the instance processes the document and configures the instance as specified.</p> <p>If you associate a document with an instance that already has an associated document, the system returns the AssociationAlreadyExists exception.</p>
		 * Post /#X-Amz-Target=AmazonSSM.CreateAssociationBatch
		 * @return {CreateAssociationBatchResult} Success
		 */
		CreateAssociationBatch(requestBody: CreateAssociationBatchRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateAssociationBatchResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.CreateAssociationBatch', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Creates a Systems Manager (SSM) document. An SSM document defines the actions that Systems Manager performs on your managed instances. For more information about SSM documents, including information about supported schemas, features, and syntax, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-ssm-docs.html">AWS Systems Manager Documents</a> in the <i>AWS Systems Manager User Guide</i>.
		 * Post /#X-Amz-Target=AmazonSSM.CreateDocument
		 * @return {CreateDocumentResult} Success
		 */
		CreateDocument(requestBody: CreateDocumentRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateDocumentResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.CreateDocument', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Creates a new maintenance window.</p> <note> <p>The value you specify for <code>Duration</code> determines the specific end time for the maintenance window based on the time it begins. No maintenance window tasks are permitted to start after the resulting endtime minus the number of hours you specify for <code>Cutoff</code>. For example, if the maintenance window starts at 3 PM, the duration is three hours, and the value you specify for <code>Cutoff</code> is one hour, no maintenance window tasks can start after 5 PM.</p> </note>
		 * Post /#X-Amz-Target=AmazonSSM.CreateMaintenanceWindow
		 * @return {CreateMaintenanceWindowResult} Success
		 */
		CreateMaintenanceWindow(requestBody: CreateMaintenanceWindowRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateMaintenanceWindowResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.CreateMaintenanceWindow', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Creates a new OpsItem. You must have permission in AWS Identity and Access Management (IAM) to create a new OpsItem. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-getting-started.html">Getting started with OpsCenter</a> in the <i>AWS Systems Manager User Guide</i>.</p> <p>Operations engineers and IT professionals use OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their AWS resources. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">AWS Systems Manager OpsCenter</a> in the <i>AWS Systems Manager User Guide</i>. </p>
		 * Post /#X-Amz-Target=AmazonSSM.CreateOpsItem
		 * @return {CreateOpsItemResponse} Success
		 */
		CreateOpsItem(requestBody: CreateOpsItemRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateOpsItemResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.CreateOpsItem', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Creates a patch baseline.</p> <note> <p>For information about valid key and value pairs in <code>PatchFilters</code> for each supported operating system type, see <a href="http://docs.aws.amazon.com/systems-manager/latest/APIReference/API_PatchFilter.html">PatchFilter</a>.</p> </note>
		 * Post /#X-Amz-Target=AmazonSSM.CreatePatchBaseline
		 * @return {CreatePatchBaselineResult} Success
		 */
		CreatePatchBaseline(requestBody: CreatePatchBaselineRequest, headersHandler?: () => {[header: string]: string}): Promise<CreatePatchBaselineResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.CreatePatchBaseline', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>A resource data sync helps you view data from multiple sources in a single location. Systems Manager offers two types of resource data sync: <code>SyncToDestination</code> and <code>SyncFromSource</code>.</p> <p>You can configure Systems Manager Inventory to use the <code>SyncToDestination</code> type to synchronize Inventory data from multiple AWS Regions to a single S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-inventory-datasync.html">Configuring Resource Data Sync for Inventory</a> in the <i>AWS Systems Manager User Guide</i>.</p> <p>You can configure Systems Manager Explorer to use the <code>SyncFromSource</code> type to synchronize operational work items (OpsItems) and operational data (OpsData) from multiple AWS Regions to a single S3 bucket. This type can synchronize OpsItems and OpsData from multiple AWS accounts and Regions or <code>EntireOrganization</code> by using AWS Organizations. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/Explorer-resource-data-sync.html">Setting up Systems Manager Explorer to display data from multiple accounts and Regions</a> in the <i>AWS Systems Manager User Guide</i>.</p> <p>A resource data sync is an asynchronous operation that returns immediately. After a successful initial sync is completed, the system continuously syncs data. To check the status of a sync, use the <a>ListResourceDataSync</a>.</p> <note> <p>By default, data is not encrypted in Amazon S3. We strongly recommend that you enable encryption in Amazon S3 to ensure secure data storage. We also recommend that you secure access to the Amazon S3 bucket by creating a restrictive bucket policy. </p> </note>
		 * Post /#X-Amz-Target=AmazonSSM.CreateResourceDataSync
		 * @return {CreateResourceDataSyncResult} Success
		 */
		CreateResourceDataSync(requestBody: CreateResourceDataSyncRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateResourceDataSyncResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.CreateResourceDataSync', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Deletes an activation. You are not required to delete an activation. If you delete an activation, you can no longer use it to register additional managed instances. Deleting an activation does not de-register managed instances. You must manually de-register managed instances.
		 * Post /#X-Amz-Target=AmazonSSM.DeleteActivation
		 * @return {DeleteActivationResult} Success
		 */
		DeleteActivation(requestBody: DeleteActivationRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteActivationResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.DeleteActivation', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Disassociates the specified Systems Manager document from the specified instance.</p> <p>When you disassociate a document from an instance, it does not change the configuration of the instance. To change the configuration state of an instance after you disassociate a document, you must create a new document with the desired configuration and associate it with the instance.</p>
		 * Post /#X-Amz-Target=AmazonSSM.DeleteAssociation
		 * @return {DeleteAssociationResult} Success
		 */
		DeleteAssociation(requestBody: DeleteAssociationRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteAssociationResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.DeleteAssociation', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Deletes the Systems Manager document and all instance associations to the document.</p> <p>Before you delete the document, we recommend that you use <a>DeleteAssociation</a> to disassociate all instances that are associated with the document.</p>
		 * Post /#X-Amz-Target=AmazonSSM.DeleteDocument
		 * @return {DeleteDocumentResult} Success
		 */
		DeleteDocument(requestBody: DeleteDocumentRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteDocumentResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.DeleteDocument', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Delete a custom inventory type, or the data associated with a custom Inventory type. Deleting a custom inventory type is also referred to as deleting a custom inventory schema.
		 * Post /#X-Amz-Target=AmazonSSM.DeleteInventory
		 * @return {DeleteInventoryResult} Success
		 */
		DeleteInventory(requestBody: DeleteInventoryRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteInventoryResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.DeleteInventory', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Deletes a maintenance window.
		 * Post /#X-Amz-Target=AmazonSSM.DeleteMaintenanceWindow
		 * @return {DeleteMaintenanceWindowResult} Success
		 */
		DeleteMaintenanceWindow(requestBody: DeleteMaintenanceWindowRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteMaintenanceWindowResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.DeleteMaintenanceWindow', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Delete a parameter from the system.
		 * Post /#X-Amz-Target=AmazonSSM.DeleteParameter
		 * @return {DeleteParameterResult} Success
		 */
		DeleteParameter(requestBody: DeleteParameterRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteParameterResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.DeleteParameter', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Delete a list of parameters.
		 * Post /#X-Amz-Target=AmazonSSM.DeleteParameters
		 * @return {DeleteParametersResult} Success
		 */
		DeleteParameters(requestBody: DeleteParametersRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteParametersResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.DeleteParameters', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Deletes a patch baseline.
		 * Post /#X-Amz-Target=AmazonSSM.DeletePatchBaseline
		 * @return {DeletePatchBaselineResult} Success
		 */
		DeletePatchBaseline(requestBody: DeletePatchBaselineRequest, headersHandler?: () => {[header: string]: string}): Promise<DeletePatchBaselineResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.DeletePatchBaseline', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Deletes a Resource Data Sync configuration. After the configuration is deleted, changes to data on managed instances are no longer synced to or from the target. Deleting a sync configuration does not delete data.
		 * Post /#X-Amz-Target=AmazonSSM.DeleteResourceDataSync
		 * @return {DeleteResourceDataSyncResult} Success
		 */
		DeleteResourceDataSync(requestBody: DeleteResourceDataSyncRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteResourceDataSyncResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.DeleteResourceDataSync', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Removes the server or virtual machine from the list of registered servers. You can reregister the instance again at any time. If you don't plan to use Run Command on the server, we suggest uninstalling SSM Agent first.
		 * Post /#X-Amz-Target=AmazonSSM.DeregisterManagedInstance
		 * @return {DeregisterManagedInstanceResult} Success
		 */
		DeregisterManagedInstance(requestBody: DeregisterManagedInstanceRequest, headersHandler?: () => {[header: string]: string}): Promise<DeregisterManagedInstanceResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.DeregisterManagedInstance', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Removes a patch group from a patch baseline.
		 * Post /#X-Amz-Target=AmazonSSM.DeregisterPatchBaselineForPatchGroup
		 * @return {DeregisterPatchBaselineForPatchGroupResult} Success
		 */
		DeregisterPatchBaselineForPatchGroup(requestBody: DeregisterPatchBaselineForPatchGroupRequest, headersHandler?: () => {[header: string]: string}): Promise<DeregisterPatchBaselineForPatchGroupResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.DeregisterPatchBaselineForPatchGroup', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Removes a target from a maintenance window.
		 * Post /#X-Amz-Target=AmazonSSM.DeregisterTargetFromMaintenanceWindow
		 * @return {DeregisterTargetFromMaintenanceWindowResult} Success
		 */
		DeregisterTargetFromMaintenanceWindow(requestBody: DeregisterTargetFromMaintenanceWindowRequest, headersHandler?: () => {[header: string]: string}): Promise<DeregisterTargetFromMaintenanceWindowResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.DeregisterTargetFromMaintenanceWindow', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Removes a task from a maintenance window.
		 * Post /#X-Amz-Target=AmazonSSM.DeregisterTaskFromMaintenanceWindow
		 * @return {DeregisterTaskFromMaintenanceWindowResult} Success
		 */
		DeregisterTaskFromMaintenanceWindow(requestBody: DeregisterTaskFromMaintenanceWindowRequest, headersHandler?: () => {[header: string]: string}): Promise<DeregisterTaskFromMaintenanceWindowResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.DeregisterTaskFromMaintenanceWindow', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Describes details about the activation, such as the date and time the activation was created, its expiration date, the IAM role assigned to the instances in the activation, and the number of instances registered by using this activation.
		 * Post /#X-Amz-Target=AmazonSSM.DescribeActivations
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeActivationsResult} Success
		 */
		DescribeActivations(MaxResults: string, NextToken: string, requestBody: DescribeActivationsRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeActivationsResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.DescribeActivations?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Describes the association for the specified target or instance. If you created the association by using the <code>Targets</code> parameter, then you must retrieve the association by using the association ID. If you created the association by specifying an instance ID and a Systems Manager document, then you retrieve the association by specifying the document name and the instance ID.
		 * Post /#X-Amz-Target=AmazonSSM.DescribeAssociation
		 * @return {DescribeAssociationResult} Success
		 */
		DescribeAssociation(requestBody: DescribeAssociationRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeAssociationResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.DescribeAssociation', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Use this API action to view information about a specific execution of a specific association.
		 * Post /#X-Amz-Target=AmazonSSM.DescribeAssociationExecutionTargets
		 * @return {DescribeAssociationExecutionTargetsResult} Success
		 */
		DescribeAssociationExecutionTargets(requestBody: DescribeAssociationExecutionTargetsRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeAssociationExecutionTargetsResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.DescribeAssociationExecutionTargets', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Use this API action to view all executions for a specific association ID.
		 * Post /#X-Amz-Target=AmazonSSM.DescribeAssociationExecutions
		 * @return {DescribeAssociationExecutionsResult} Success
		 */
		DescribeAssociationExecutions(requestBody: DescribeAssociationExecutionsRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeAssociationExecutionsResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.DescribeAssociationExecutions', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Provides details about all active and terminated Automation executions.
		 * Post /#X-Amz-Target=AmazonSSM.DescribeAutomationExecutions
		 * @return {DescribeAutomationExecutionsResult} Success
		 */
		DescribeAutomationExecutions(requestBody: DescribeAutomationExecutionsRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeAutomationExecutionsResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.DescribeAutomationExecutions', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Information about all active and terminated step executions in an Automation workflow.
		 * Post /#X-Amz-Target=AmazonSSM.DescribeAutomationStepExecutions
		 * @return {DescribeAutomationStepExecutionsResult} Success
		 */
		DescribeAutomationStepExecutions(requestBody: DescribeAutomationStepExecutionsRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeAutomationStepExecutionsResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.DescribeAutomationStepExecutions', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Lists all patches eligible to be included in a patch baseline.
		 * Post /#X-Amz-Target=AmazonSSM.DescribeAvailablePatches
		 * @return {DescribeAvailablePatchesResult} Success
		 */
		DescribeAvailablePatches(requestBody: DescribeAvailablePatchesRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeAvailablePatchesResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.DescribeAvailablePatches', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Describes the specified Systems Manager document.
		 * Post /#X-Amz-Target=AmazonSSM.DescribeDocument
		 * @return {DescribeDocumentResult} Success
		 */
		DescribeDocument(requestBody: DescribeDocumentRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeDocumentResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.DescribeDocument', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Describes the permissions for a Systems Manager document. If you created the document, you are the owner. If a document is shared, it can either be shared privately (by specifying a user's AWS account ID) or publicly (<i>All</i>).
		 * Post /#X-Amz-Target=AmazonSSM.DescribeDocumentPermission
		 * @return {DescribeDocumentPermissionResponse} Success
		 */
		DescribeDocumentPermission(requestBody: DescribeDocumentPermissionRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeDocumentPermissionResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.DescribeDocumentPermission', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * All associations for the instance(s).
		 * Post /#X-Amz-Target=AmazonSSM.DescribeEffectiveInstanceAssociations
		 * @return {DescribeEffectiveInstanceAssociationsResult} Success
		 */
		DescribeEffectiveInstanceAssociations(requestBody: DescribeEffectiveInstanceAssociationsRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeEffectiveInstanceAssociationsResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.DescribeEffectiveInstanceAssociations', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Retrieves the current effective patches (the patch and the approval state) for the specified patch baseline. Note that this API applies only to Windows patch baselines.
		 * Post /#X-Amz-Target=AmazonSSM.DescribeEffectivePatchesForPatchBaseline
		 * @return {DescribeEffectivePatchesForPatchBaselineResult} Success
		 */
		DescribeEffectivePatchesForPatchBaseline(requestBody: DescribeEffectivePatchesForPatchBaselineRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeEffectivePatchesForPatchBaselineResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.DescribeEffectivePatchesForPatchBaseline', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * The status of the associations for the instance(s).
		 * Post /#X-Amz-Target=AmazonSSM.DescribeInstanceAssociationsStatus
		 * @return {DescribeInstanceAssociationsStatusResult} Success
		 */
		DescribeInstanceAssociationsStatus(requestBody: DescribeInstanceAssociationsStatusRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeInstanceAssociationsStatusResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.DescribeInstanceAssociationsStatus', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Describes one or more of your instances, including information about the operating system platform, the version of SSM Agent installed on the instance, instance status, and so on.</p> <p>If you specify one or more instance IDs, it returns information for those instances. If you do not specify instance IDs, it returns information for all your instances. If you specify an instance ID that is not valid or an instance that you do not own, you receive an error.</p> <note> <p>The IamRole field for this API action is the Amazon Identity and Access Management (IAM) role assigned to on-premises instances. This call does not return the IAM role for EC2 instances.</p> </note>
		 * Post /#X-Amz-Target=AmazonSSM.DescribeInstanceInformation
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeInstanceInformationResult} Success
		 */
		DescribeInstanceInformation(MaxResults: string, NextToken: string, requestBody: DescribeInstanceInformationRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeInstanceInformationResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.DescribeInstanceInformation?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Retrieves the high-level patch state of one or more instances.
		 * Post /#X-Amz-Target=AmazonSSM.DescribeInstancePatchStates
		 * @return {DescribeInstancePatchStatesResult} Success
		 */
		DescribeInstancePatchStates(requestBody: DescribeInstancePatchStatesRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeInstancePatchStatesResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.DescribeInstancePatchStates', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Retrieves the high-level patch state for the instances in the specified patch group.
		 * Post /#X-Amz-Target=AmazonSSM.DescribeInstancePatchStatesForPatchGroup
		 * @return {DescribeInstancePatchStatesForPatchGroupResult} Success
		 */
		DescribeInstancePatchStatesForPatchGroup(requestBody: DescribeInstancePatchStatesForPatchGroupRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeInstancePatchStatesForPatchGroupResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.DescribeInstancePatchStatesForPatchGroup', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Retrieves information about the patches on the specified instance and their state relative to the patch baseline being used for the instance.
		 * Post /#X-Amz-Target=AmazonSSM.DescribeInstancePatches
		 * @return {DescribeInstancePatchesResult} Success
		 */
		DescribeInstancePatches(requestBody: DescribeInstancePatchesRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeInstancePatchesResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.DescribeInstancePatches', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Describes a specific delete inventory operation.
		 * Post /#X-Amz-Target=AmazonSSM.DescribeInventoryDeletions
		 * @return {DescribeInventoryDeletionsResult} Success
		 */
		DescribeInventoryDeletions(requestBody: DescribeInventoryDeletionsRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeInventoryDeletionsResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.DescribeInventoryDeletions', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Retrieves the individual task executions (one per target) for a particular task run as part of a maintenance window execution.
		 * Post /#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutionTaskInvocations
		 * @return {DescribeMaintenanceWindowExecutionTaskInvocationsResult} Success
		 */
		DescribeMaintenanceWindowExecutionTaskInvocations(requestBody: DescribeMaintenanceWindowExecutionTaskInvocationsRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeMaintenanceWindowExecutionTaskInvocationsResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutionTaskInvocations', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * For a given maintenance window execution, lists the tasks that were run.
		 * Post /#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutionTasks
		 * @return {DescribeMaintenanceWindowExecutionTasksResult} Success
		 */
		DescribeMaintenanceWindowExecutionTasks(requestBody: DescribeMaintenanceWindowExecutionTasksRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeMaintenanceWindowExecutionTasksResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutionTasks', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Lists the executions of a maintenance window. This includes information about when the maintenance window was scheduled to be active, and information about tasks registered and run with the maintenance window.
		 * Post /#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutions
		 * @return {DescribeMaintenanceWindowExecutionsResult} Success
		 */
		DescribeMaintenanceWindowExecutions(requestBody: DescribeMaintenanceWindowExecutionsRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeMaintenanceWindowExecutionsResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutions', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Retrieves information about upcoming executions of a maintenance window.
		 * Post /#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowSchedule
		 * @return {DescribeMaintenanceWindowScheduleResult} Success
		 */
		DescribeMaintenanceWindowSchedule(requestBody: DescribeMaintenanceWindowScheduleRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeMaintenanceWindowScheduleResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowSchedule', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Lists the targets registered with the maintenance window.
		 * Post /#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowTargets
		 * @return {DescribeMaintenanceWindowTargetsResult} Success
		 */
		DescribeMaintenanceWindowTargets(requestBody: DescribeMaintenanceWindowTargetsRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeMaintenanceWindowTargetsResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowTargets', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Lists the tasks in a maintenance window.
		 * Post /#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowTasks
		 * @return {DescribeMaintenanceWindowTasksResult} Success
		 */
		DescribeMaintenanceWindowTasks(requestBody: DescribeMaintenanceWindowTasksRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeMaintenanceWindowTasksResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowTasks', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Retrieves the maintenance windows in an AWS account.
		 * Post /#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindows
		 * @return {DescribeMaintenanceWindowsResult} Success
		 */
		DescribeMaintenanceWindows(requestBody: DescribeMaintenanceWindowsRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeMaintenanceWindowsResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindows', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Retrieves information about the maintenance window targets or tasks that an instance is associated with.
		 * Post /#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowsForTarget
		 * @return {DescribeMaintenanceWindowsForTargetResult} Success
		 */
		DescribeMaintenanceWindowsForTarget(requestBody: DescribeMaintenanceWindowsForTargetRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeMaintenanceWindowsForTargetResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowsForTarget', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Query a set of OpsItems. You must have permission in AWS Identity and Access Management (IAM) to query a list of OpsItems. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-getting-started.html">Getting started with OpsCenter</a> in the <i>AWS Systems Manager User Guide</i>.</p> <p>Operations engineers and IT professionals use OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their AWS resources. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">AWS Systems Manager OpsCenter</a> in the <i>AWS Systems Manager User Guide</i>. </p>
		 * Post /#X-Amz-Target=AmazonSSM.DescribeOpsItems
		 * @return {DescribeOpsItemsResponse} Success
		 */
		DescribeOpsItems(requestBody: DescribeOpsItemsRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeOpsItemsResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.DescribeOpsItems', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Get information about a parameter.</p> <note> <p>Request results are returned on a best-effort basis. If you specify <code>MaxResults</code> in the request, the response includes information up to the limit specified. The number of items returned, however, can be between zero and the value of <code>MaxResults</code>. If the service reaches an internal limit while processing the results, it stops the operation and returns the matching values up to that point and a <code>NextToken</code>. You can specify the <code>NextToken</code> in a subsequent call to get the next set of results.</p> </note>
		 * Post /#X-Amz-Target=AmazonSSM.DescribeParameters
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeParametersResult} Success
		 */
		DescribeParameters(MaxResults: string, NextToken: string, requestBody: DescribeParametersRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeParametersResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.DescribeParameters?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Lists the patch baselines in your AWS account.
		 * Post /#X-Amz-Target=AmazonSSM.DescribePatchBaselines
		 * @return {DescribePatchBaselinesResult} Success
		 */
		DescribePatchBaselines(requestBody: DescribePatchBaselinesRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribePatchBaselinesResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.DescribePatchBaselines', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns high-level aggregated patch compliance state for a patch group.
		 * Post /#X-Amz-Target=AmazonSSM.DescribePatchGroupState
		 * @return {DescribePatchGroupStateResult} Success
		 */
		DescribePatchGroupState(requestBody: DescribePatchGroupStateRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribePatchGroupStateResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.DescribePatchGroupState', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Lists all patch groups that have been registered with patch baselines.
		 * Post /#X-Amz-Target=AmazonSSM.DescribePatchGroups
		 * @return {DescribePatchGroupsResult} Success
		 */
		DescribePatchGroups(requestBody: DescribePatchGroupsRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribePatchGroupsResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.DescribePatchGroups', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Lists the properties of available patches organized by product, product family, classification, severity, and other properties of available patches. You can use the reported properties in the filters you specify in requests for actions such as <a>CreatePatchBaseline</a>, <a>UpdatePatchBaseline</a>, <a>DescribeAvailablePatches</a>, and <a>DescribePatchBaselines</a>.</p> <p>The following section lists the properties that can be used in filters for each major operating system type:</p> <dl> <dt>WINDOWS</dt> <dd> <p>Valid properties: PRODUCT, PRODUCT_FAMILY, CLASSIFICATION, MSRC_SEVERITY</p> </dd> <dt>AMAZON_LINUX</dt> <dd> <p>Valid properties: PRODUCT, CLASSIFICATION, SEVERITY</p> </dd> <dt>AMAZON_LINUX_2</dt> <dd> <p>Valid properties: PRODUCT, CLASSIFICATION, SEVERITY</p> </dd> <dt>UBUNTU </dt> <dd> <p>Valid properties: PRODUCT, PRIORITY</p> </dd> <dt>REDHAT_ENTERPRISE_LINUX</dt> <dd> <p>Valid properties: PRODUCT, CLASSIFICATION, SEVERITY</p> </dd> <dt>SUSE</dt> <dd> <p>Valid properties: PRODUCT, CLASSIFICATION, SEVERITY</p> </dd> <dt>CENTOS</dt> <dd> <p>Valid properties: PRODUCT, CLASSIFICATION, SEVERITY</p> </dd> </dl>
		 * Post /#X-Amz-Target=AmazonSSM.DescribePatchProperties
		 * @return {DescribePatchPropertiesResult} Success
		 */
		DescribePatchProperties(requestBody: DescribePatchPropertiesRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribePatchPropertiesResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.DescribePatchProperties', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Retrieves a list of all active sessions (both connected and disconnected) or terminated sessions from the past 30 days.
		 * Post /#X-Amz-Target=AmazonSSM.DescribeSessions
		 * @return {DescribeSessionsResponse} Success
		 */
		DescribeSessions(requestBody: DescribeSessionsRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeSessionsResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.DescribeSessions', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Get detailed information about a particular Automation execution.
		 * Post /#X-Amz-Target=AmazonSSM.GetAutomationExecution
		 * @return {GetAutomationExecutionResult} Success
		 */
		GetAutomationExecution(requestBody: GetAutomationExecutionRequest, headersHandler?: () => {[header: string]: string}): Promise<GetAutomationExecutionResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.GetAutomationExecution', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Gets the state of the AWS Systems Manager Change Calendar at an optional, specified time. If you specify a time, <code>GetCalendarState</code> returns the state of the calendar at a specific time, and returns the next time that the Change Calendar state will transition. If you do not specify a time, <code>GetCalendarState</code> assumes the current time. Change Calendar entries have two possible states: <code>OPEN</code> or <code>CLOSED</code>. For more information about Systems Manager Change Calendar, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-change-calendar.html">AWS Systems Manager Change Calendar</a> in the <i>AWS Systems Manager User Guide</i>.
		 * Post /#X-Amz-Target=AmazonSSM.GetCalendarState
		 * @return {GetCalendarStateResponse} Success
		 */
		GetCalendarState(requestBody: GetCalendarStateRequest, headersHandler?: () => {[header: string]: string}): Promise<GetCalendarStateResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.GetCalendarState', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns detailed information about command execution for an invocation or plugin.
		 * Post /#X-Amz-Target=AmazonSSM.GetCommandInvocation
		 * @return {GetCommandInvocationResult} Success
		 */
		GetCommandInvocation(requestBody: GetCommandInvocationRequest, headersHandler?: () => {[header: string]: string}): Promise<GetCommandInvocationResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.GetCommandInvocation', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Retrieves the Session Manager connection status for an instance to determine whether it is running and ready to receive Session Manager connections.
		 * Post /#X-Amz-Target=AmazonSSM.GetConnectionStatus
		 * @return {GetConnectionStatusResponse} Success
		 */
		GetConnectionStatus(requestBody: GetConnectionStatusRequest, headersHandler?: () => {[header: string]: string}): Promise<GetConnectionStatusResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.GetConnectionStatus', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Retrieves the default patch baseline. Note that Systems Manager supports creating multiple default patch baselines. For example, you can create a default patch baseline for each operating system.</p> <p>If you do not specify an operating system value, the default patch baseline for Windows is returned.</p>
		 * Post /#X-Amz-Target=AmazonSSM.GetDefaultPatchBaseline
		 * @return {GetDefaultPatchBaselineResult} Success
		 */
		GetDefaultPatchBaseline(requestBody: GetDefaultPatchBaselineRequest, headersHandler?: () => {[header: string]: string}): Promise<GetDefaultPatchBaselineResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.GetDefaultPatchBaseline', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Retrieves the current snapshot for the patch baseline the instance uses. This API is primarily used by the AWS-RunPatchBaseline Systems Manager document.
		 * Post /#X-Amz-Target=AmazonSSM.GetDeployablePatchSnapshotForInstance
		 * @return {GetDeployablePatchSnapshotForInstanceResult} Success
		 */
		GetDeployablePatchSnapshotForInstance(requestBody: GetDeployablePatchSnapshotForInstanceRequest, headersHandler?: () => {[header: string]: string}): Promise<GetDeployablePatchSnapshotForInstanceResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.GetDeployablePatchSnapshotForInstance', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Gets the contents of the specified Systems Manager document.
		 * Post /#X-Amz-Target=AmazonSSM.GetDocument
		 * @return {GetDocumentResult} Success
		 */
		GetDocument(requestBody: GetDocumentRequest, headersHandler?: () => {[header: string]: string}): Promise<GetDocumentResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.GetDocument', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Query inventory information.
		 * Post /#X-Amz-Target=AmazonSSM.GetInventory
		 * @return {GetInventoryResult} Success
		 */
		GetInventory(requestBody: GetInventoryRequest, headersHandler?: () => {[header: string]: string}): Promise<GetInventoryResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.GetInventory', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Return a list of inventory type names for the account, or return a list of attribute names for a specific Inventory item type.
		 * Post /#X-Amz-Target=AmazonSSM.GetInventorySchema
		 * @return {GetInventorySchemaResult} Success
		 */
		GetInventorySchema(requestBody: GetInventorySchemaRequest, headersHandler?: () => {[header: string]: string}): Promise<GetInventorySchemaResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.GetInventorySchema', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Retrieves a maintenance window.
		 * Post /#X-Amz-Target=AmazonSSM.GetMaintenanceWindow
		 * @return {GetMaintenanceWindowResult} Success
		 */
		GetMaintenanceWindow(requestBody: GetMaintenanceWindowRequest, headersHandler?: () => {[header: string]: string}): Promise<GetMaintenanceWindowResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.GetMaintenanceWindow', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Retrieves details about a specific a maintenance window execution.
		 * Post /#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecution
		 * @return {GetMaintenanceWindowExecutionResult} Success
		 */
		GetMaintenanceWindowExecution(requestBody: GetMaintenanceWindowExecutionRequest, headersHandler?: () => {[header: string]: string}): Promise<GetMaintenanceWindowExecutionResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecution', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Retrieves the details about a specific task run as part of a maintenance window execution.
		 * Post /#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecutionTask
		 * @return {GetMaintenanceWindowExecutionTaskResult} Success
		 */
		GetMaintenanceWindowExecutionTask(requestBody: GetMaintenanceWindowExecutionTaskRequest, headersHandler?: () => {[header: string]: string}): Promise<GetMaintenanceWindowExecutionTaskResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecutionTask', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Retrieves information about a specific task running on a specific target.
		 * Post /#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecutionTaskInvocation
		 * @return {GetMaintenanceWindowExecutionTaskInvocationResult} Success
		 */
		GetMaintenanceWindowExecutionTaskInvocation(requestBody: GetMaintenanceWindowExecutionTaskInvocationRequest, headersHandler?: () => {[header: string]: string}): Promise<GetMaintenanceWindowExecutionTaskInvocationResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecutionTaskInvocation', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Lists the tasks in a maintenance window.
		 * Post /#X-Amz-Target=AmazonSSM.GetMaintenanceWindowTask
		 * @return {GetMaintenanceWindowTaskResult} Success
		 */
		GetMaintenanceWindowTask(requestBody: GetMaintenanceWindowTaskRequest, headersHandler?: () => {[header: string]: string}): Promise<GetMaintenanceWindowTaskResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.GetMaintenanceWindowTask', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Get information about an OpsItem by using the ID. You must have permission in AWS Identity and Access Management (IAM) to view information about an OpsItem. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-getting-started.html">Getting started with OpsCenter</a> in the <i>AWS Systems Manager User Guide</i>.</p> <p>Operations engineers and IT professionals use OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their AWS resources. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">AWS Systems Manager OpsCenter</a> in the <i>AWS Systems Manager User Guide</i>. </p>
		 * Post /#X-Amz-Target=AmazonSSM.GetOpsItem
		 * @return {GetOpsItemResponse} Success
		 */
		GetOpsItem(requestBody: GetOpsItemRequest, headersHandler?: () => {[header: string]: string}): Promise<GetOpsItemResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.GetOpsItem', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * View a summary of OpsItems based on specified filters and aggregators.
		 * Post /#X-Amz-Target=AmazonSSM.GetOpsSummary
		 * @return {GetOpsSummaryResult} Success
		 */
		GetOpsSummary(requestBody: GetOpsSummaryRequest, headersHandler?: () => {[header: string]: string}): Promise<GetOpsSummaryResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.GetOpsSummary', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Get information about a parameter by using the parameter name. Don't confuse this API action with the <a>GetParameters</a> API action.
		 * Post /#X-Amz-Target=AmazonSSM.GetParameter
		 * @return {GetParameterResult} Success
		 */
		GetParameter(requestBody: GetParameterRequest, headersHandler?: () => {[header: string]: string}): Promise<GetParameterResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.GetParameter', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Query a list of all parameters used by the AWS account.
		 * Post /#X-Amz-Target=AmazonSSM.GetParameterHistory
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetParameterHistoryResult} Success
		 */
		GetParameterHistory(MaxResults: string, NextToken: string, requestBody: GetParameterHistoryRequest, headersHandler?: () => {[header: string]: string}): Promise<GetParameterHistoryResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.GetParameterHistory?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Get details of a parameter. Don't confuse this API action with the <a>GetParameter</a> API action.
		 * Post /#X-Amz-Target=AmazonSSM.GetParameters
		 * @return {GetParametersResult} Success
		 */
		GetParameters(requestBody: GetParametersRequest, headersHandler?: () => {[header: string]: string}): Promise<GetParametersResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.GetParameters', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Retrieve information about one or more parameters in a specific hierarchy. </p> <note> <p>Request results are returned on a best-effort basis. If you specify <code>MaxResults</code> in the request, the response includes information up to the limit specified. The number of items returned, however, can be between zero and the value of <code>MaxResults</code>. If the service reaches an internal limit while processing the results, it stops the operation and returns the matching values up to that point and a <code>NextToken</code>. You can specify the <code>NextToken</code> in a subsequent call to get the next set of results.</p> </note>
		 * Post /#X-Amz-Target=AmazonSSM.GetParametersByPath
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetParametersByPathResult} Success
		 */
		GetParametersByPath(MaxResults: string, NextToken: string, requestBody: GetParametersByPathRequest, headersHandler?: () => {[header: string]: string}): Promise<GetParametersByPathResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.GetParametersByPath?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Retrieves information about a patch baseline.
		 * Post /#X-Amz-Target=AmazonSSM.GetPatchBaseline
		 * @return {GetPatchBaselineResult} Success
		 */
		GetPatchBaseline(requestBody: GetPatchBaselineRequest, headersHandler?: () => {[header: string]: string}): Promise<GetPatchBaselineResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.GetPatchBaseline', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Retrieves the patch baseline that should be used for the specified patch group.
		 * Post /#X-Amz-Target=AmazonSSM.GetPatchBaselineForPatchGroup
		 * @return {GetPatchBaselineForPatchGroupResult} Success
		 */
		GetPatchBaselineForPatchGroup(requestBody: GetPatchBaselineForPatchGroupRequest, headersHandler?: () => {[header: string]: string}): Promise<GetPatchBaselineForPatchGroupResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.GetPatchBaselineForPatchGroup', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p> <code>ServiceSetting</code> is an account-level setting for an AWS service. This setting defines how a user interacts with or uses a service or a feature of a service. For example, if an AWS service charges money to the account based on feature or service usage, then the AWS service team might create a default setting of "false". This means the user can't use this feature unless they change the setting to "true" and intentionally opt in for a paid feature.</p> <p>Services map a <code>SettingId</code> object to a setting value. AWS services teams define the default value for a <code>SettingId</code>. You can't create a new <code>SettingId</code>, but you can overwrite the default value if you have the <code>ssm:UpdateServiceSetting</code> permission for the setting. Use the <a>UpdateServiceSetting</a> API action to change the default setting. Or use the <a>ResetServiceSetting</a> to change the value back to the original value defined by the AWS service team.</p> <p>Query the current service setting for the account. </p>
		 * Post /#X-Amz-Target=AmazonSSM.GetServiceSetting
		 * @return {GetServiceSettingResult} Success
		 */
		GetServiceSetting(requestBody: GetServiceSettingRequest, headersHandler?: () => {[header: string]: string}): Promise<GetServiceSettingResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.GetServiceSetting', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>A parameter label is a user-defined alias to help you manage different versions of a parameter. When you modify a parameter, Systems Manager automatically saves a new version and increments the version number by one. A label can help you remember the purpose of a parameter when there are multiple versions. </p> <p>Parameter labels have the following requirements and restrictions.</p> <ul> <li> <p>A version of a parameter can have a maximum of 10 labels.</p> </li> <li> <p>You can't attach the same label to different versions of the same parameter. For example, if version 1 has the label Production, then you can't attach Production to version 2.</p> </li> <li> <p>You can move a label from one version of a parameter to another.</p> </li> <li> <p>You can't create a label when you create a new parameter. You must attach a label to a specific version of a parameter.</p> </li> <li> <p>You can't delete a parameter label. If you no longer want to use a parameter label, then you must move it to a different version of a parameter.</p> </li> <li> <p>A label can have a maximum of 100 characters.</p> </li> <li> <p>Labels can contain letters (case sensitive), numbers, periods (.), hyphens (-), or underscores (_).</p> </li> <li> <p>Labels can't begin with a number, "aws," or "ssm" (not case sensitive). If a label fails to meet these requirements, then the label is not associated with a parameter and the system displays it in the list of InvalidLabels.</p> </li> </ul>
		 * Post /#X-Amz-Target=AmazonSSM.LabelParameterVersion
		 * @return {LabelParameterVersionResult} Success
		 */
		LabelParameterVersion(requestBody: LabelParameterVersionRequest, headersHandler?: () => {[header: string]: string}): Promise<LabelParameterVersionResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.LabelParameterVersion', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Retrieves all versions of an association for a specific association ID.
		 * Post /#X-Amz-Target=AmazonSSM.ListAssociationVersions
		 * @return {ListAssociationVersionsResult} Success
		 */
		ListAssociationVersions(requestBody: ListAssociationVersionsRequest, headersHandler?: () => {[header: string]: string}): Promise<ListAssociationVersionsResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.ListAssociationVersions', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns all State Manager associations in the current AWS account and Region. You can limit the results to a specific State Manager association document or instance by specifying a filter.
		 * Post /#X-Amz-Target=AmazonSSM.ListAssociations
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAssociationsResult} Success
		 */
		ListAssociations(MaxResults: string, NextToken: string, requestBody: ListAssociationsRequest, headersHandler?: () => {[header: string]: string}): Promise<ListAssociationsResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.ListAssociations?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * An invocation is copy of a command sent to a specific instance. A command can apply to one or more instances. A command invocation applies to one instance. For example, if a user runs SendCommand against three instances, then a command invocation is created for each requested instance ID. ListCommandInvocations provide status about command execution.
		 * Post /#X-Amz-Target=AmazonSSM.ListCommandInvocations
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListCommandInvocationsResult} Success
		 */
		ListCommandInvocations(MaxResults: string, NextToken: string, requestBody: ListCommandInvocationsRequest, headersHandler?: () => {[header: string]: string}): Promise<ListCommandInvocationsResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.ListCommandInvocations?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Lists the commands requested by users of the AWS account.
		 * Post /#X-Amz-Target=AmazonSSM.ListCommands
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListCommandsResult} Success
		 */
		ListCommands(MaxResults: string, NextToken: string, requestBody: ListCommandsRequest, headersHandler?: () => {[header: string]: string}): Promise<ListCommandsResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.ListCommands?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * For a specified resource ID, this API action returns a list of compliance statuses for different resource types. Currently, you can only specify one resource ID per call. List results depend on the criteria specified in the filter.
		 * Post /#X-Amz-Target=AmazonSSM.ListComplianceItems
		 * @return {ListComplianceItemsResult} Success
		 */
		ListComplianceItems(requestBody: ListComplianceItemsRequest, headersHandler?: () => {[header: string]: string}): Promise<ListComplianceItemsResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.ListComplianceItems', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns a summary count of compliant and non-compliant resources for a compliance type. For example, this call can return State Manager associations, patches, or custom compliance types according to the filter criteria that you specify.
		 * Post /#X-Amz-Target=AmazonSSM.ListComplianceSummaries
		 * @return {ListComplianceSummariesResult} Success
		 */
		ListComplianceSummaries(requestBody: ListComplianceSummariesRequest, headersHandler?: () => {[header: string]: string}): Promise<ListComplianceSummariesResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.ListComplianceSummaries', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * List all versions for a document.
		 * Post /#X-Amz-Target=AmazonSSM.ListDocumentVersions
		 * @return {ListDocumentVersionsResult} Success
		 */
		ListDocumentVersions(requestBody: ListDocumentVersionsRequest, headersHandler?: () => {[header: string]: string}): Promise<ListDocumentVersionsResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.ListDocumentVersions', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns all Systems Manager (SSM) documents in the current AWS account and Region. You can limit the results of this request by using a filter.
		 * Post /#X-Amz-Target=AmazonSSM.ListDocuments
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDocumentsResult} Success
		 */
		ListDocuments(MaxResults: string, NextToken: string, requestBody: ListDocumentsRequest, headersHandler?: () => {[header: string]: string}): Promise<ListDocumentsResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.ListDocuments?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * A list of inventory items returned by the request.
		 * Post /#X-Amz-Target=AmazonSSM.ListInventoryEntries
		 * @return {ListInventoryEntriesResult} Success
		 */
		ListInventoryEntries(requestBody: ListInventoryEntriesRequest, headersHandler?: () => {[header: string]: string}): Promise<ListInventoryEntriesResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.ListInventoryEntries', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns a resource-level summary count. The summary includes information about compliant and non-compliant statuses and detailed compliance-item severity counts, according to the filter criteria you specify.
		 * Post /#X-Amz-Target=AmazonSSM.ListResourceComplianceSummaries
		 * @return {ListResourceComplianceSummariesResult} Success
		 */
		ListResourceComplianceSummaries(requestBody: ListResourceComplianceSummariesRequest, headersHandler?: () => {[header: string]: string}): Promise<ListResourceComplianceSummariesResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.ListResourceComplianceSummaries', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Lists your resource data sync configurations. Includes information about the last time a sync attempted to start, the last sync status, and the last time a sync successfully completed.</p> <p>The number of sync configurations might be too large to return using a single call to <code>ListResourceDataSync</code>. You can limit the number of sync configurations returned by using the <code>MaxResults</code> parameter. To determine whether there are more sync configurations to list, check the value of <code>NextToken</code> in the output. If there are more sync configurations to list, you can request them by specifying the <code>NextToken</code> returned in the call to the parameter of a subsequent call. </p>
		 * Post /#X-Amz-Target=AmazonSSM.ListResourceDataSync
		 * @return {ListResourceDataSyncResult} Success
		 */
		ListResourceDataSync(requestBody: ListResourceDataSyncRequest, headersHandler?: () => {[header: string]: string}): Promise<ListResourceDataSyncResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.ListResourceDataSync', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns a list of the tags assigned to the specified resource.
		 * Post /#X-Amz-Target=AmazonSSM.ListTagsForResource
		 * @return {ListTagsForResourceResult} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest, headersHandler?: () => {[header: string]: string}): Promise<ListTagsForResourceResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.ListTagsForResource', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Shares a Systems Manager document publicly or privately. If you share a document privately, you must specify the AWS user account IDs for those people who can use the document. If you share a document publicly, you must specify <i>All</i> as the account ID.
		 * Post /#X-Amz-Target=AmazonSSM.ModifyDocumentPermission
		 * @return {ModifyDocumentPermissionResponse} Success
		 */
		ModifyDocumentPermission(requestBody: ModifyDocumentPermissionRequest, headersHandler?: () => {[header: string]: string}): Promise<ModifyDocumentPermissionResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.ModifyDocumentPermission', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Registers a compliance type and other compliance details on a designated resource. This action lets you register custom compliance details with a resource. This call overwrites existing compliance information on the resource, so you must provide a full list of compliance items each time that you send the request.</p> <p>ComplianceType can be one of the following:</p> <ul> <li> <p>ExecutionId: The execution ID when the patch, association, or custom compliance item was applied.</p> </li> <li> <p>ExecutionType: Specify patch, association, or Custom:<code>string</code>.</p> </li> <li> <p>ExecutionTime. The time the patch, association, or custom compliance item was applied to the instance.</p> </li> <li> <p>Id: The patch, association, or custom compliance ID.</p> </li> <li> <p>Title: A title.</p> </li> <li> <p>Status: The status of the compliance item. For example, <code>approved</code> for patches, or <code>Failed</code> for associations.</p> </li> <li> <p>Severity: A patch severity. For example, <code>critical</code>.</p> </li> <li> <p>DocumentName: A SSM document name. For example, AWS-RunPatchBaseline.</p> </li> <li> <p>DocumentVersion: An SSM document version number. For example, 4.</p> </li> <li> <p>Classification: A patch classification. For example, <code>security updates</code>.</p> </li> <li> <p>PatchBaselineId: A patch baseline ID.</p> </li> <li> <p>PatchSeverity: A patch severity. For example, <code>Critical</code>.</p> </li> <li> <p>PatchState: A patch state. For example, <code>InstancesWithFailedPatches</code>.</p> </li> <li> <p>PatchGroup: The name of a patch group.</p> </li> <li> <p>InstalledTime: The time the association, patch, or custom compliance item was applied to the resource. Specify the time by using the following format: yyyy-MM-dd'T'HH:mm:ss'Z'</p> </li> </ul>
		 * Post /#X-Amz-Target=AmazonSSM.PutComplianceItems
		 * @return {PutComplianceItemsResult} Success
		 */
		PutComplianceItems(requestBody: PutComplianceItemsRequest, headersHandler?: () => {[header: string]: string}): Promise<PutComplianceItemsResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.PutComplianceItems', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Bulk update custom inventory items on one more instance. The request adds an inventory item, if it doesn't already exist, or updates an inventory item, if it does exist.
		 * Post /#X-Amz-Target=AmazonSSM.PutInventory
		 * @return {PutInventoryResult} Success
		 */
		PutInventory(requestBody: PutInventoryRequest, headersHandler?: () => {[header: string]: string}): Promise<PutInventoryResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.PutInventory', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Add a parameter to the system.
		 * Post /#X-Amz-Target=AmazonSSM.PutParameter
		 * @return {PutParameterResult} Success
		 */
		PutParameter(requestBody: PutParameterRequest, headersHandler?: () => {[header: string]: string}): Promise<PutParameterResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.PutParameter', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Defines the default patch baseline for the relevant operating system.</p> <p>To reset the AWS predefined patch baseline as the default, specify the full patch baseline ARN as the baseline ID value. For example, for CentOS, specify <code>arn:aws:ssm:us-east-2:733109147000:patchbaseline/pb-0574b43a65ea646ed</code> instead of <code>pb-0574b43a65ea646ed</code>.</p>
		 * Post /#X-Amz-Target=AmazonSSM.RegisterDefaultPatchBaseline
		 * @return {RegisterDefaultPatchBaselineResult} Success
		 */
		RegisterDefaultPatchBaseline(requestBody: RegisterDefaultPatchBaselineRequest, headersHandler?: () => {[header: string]: string}): Promise<RegisterDefaultPatchBaselineResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.RegisterDefaultPatchBaseline', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Registers a patch baseline for a patch group.
		 * Post /#X-Amz-Target=AmazonSSM.RegisterPatchBaselineForPatchGroup
		 * @return {RegisterPatchBaselineForPatchGroupResult} Success
		 */
		RegisterPatchBaselineForPatchGroup(requestBody: RegisterPatchBaselineForPatchGroupRequest, headersHandler?: () => {[header: string]: string}): Promise<RegisterPatchBaselineForPatchGroupResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.RegisterPatchBaselineForPatchGroup', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Registers a target with a maintenance window.
		 * Post /#X-Amz-Target=AmazonSSM.RegisterTargetWithMaintenanceWindow
		 * @return {RegisterTargetWithMaintenanceWindowResult} Success
		 */
		RegisterTargetWithMaintenanceWindow(requestBody: RegisterTargetWithMaintenanceWindowRequest, headersHandler?: () => {[header: string]: string}): Promise<RegisterTargetWithMaintenanceWindowResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.RegisterTargetWithMaintenanceWindow', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Adds a new task to a maintenance window.
		 * Post /#X-Amz-Target=AmazonSSM.RegisterTaskWithMaintenanceWindow
		 * @return {RegisterTaskWithMaintenanceWindowResult} Success
		 */
		RegisterTaskWithMaintenanceWindow(requestBody: RegisterTaskWithMaintenanceWindowRequest, headersHandler?: () => {[header: string]: string}): Promise<RegisterTaskWithMaintenanceWindowResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.RegisterTaskWithMaintenanceWindow', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Removes tag keys from the specified resource.
		 * Post /#X-Amz-Target=AmazonSSM.RemoveTagsFromResource
		 * @return {RemoveTagsFromResourceResult} Success
		 */
		RemoveTagsFromResource(requestBody: RemoveTagsFromResourceRequest, headersHandler?: () => {[header: string]: string}): Promise<RemoveTagsFromResourceResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.RemoveTagsFromResource', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p> <code>ServiceSetting</code> is an account-level setting for an AWS service. This setting defines how a user interacts with or uses a service or a feature of a service. For example, if an AWS service charges money to the account based on feature or service usage, then the AWS service team might create a default setting of "false". This means the user can't use this feature unless they change the setting to "true" and intentionally opt in for a paid feature.</p> <p>Services map a <code>SettingId</code> object to a setting value. AWS services teams define the default value for a <code>SettingId</code>. You can't create a new <code>SettingId</code>, but you can overwrite the default value if you have the <code>ssm:UpdateServiceSetting</code> permission for the setting. Use the <a>GetServiceSetting</a> API action to view the current value. Use the <a>UpdateServiceSetting</a> API action to change the default setting. </p> <p>Reset the service setting for the account to the default value as provisioned by the AWS service team. </p>
		 * Post /#X-Amz-Target=AmazonSSM.ResetServiceSetting
		 * @return {ResetServiceSettingResult} Success
		 */
		ResetServiceSetting(requestBody: ResetServiceSettingRequest, headersHandler?: () => {[header: string]: string}): Promise<ResetServiceSettingResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.ResetServiceSetting', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Reconnects a session to an instance after it has been disconnected. Connections can be resumed for disconnected sessions, but not terminated sessions.</p> <note> <p>This command is primarily for use by client machines to automatically reconnect during intermittent network issues. It is not intended for any other use.</p> </note>
		 * Post /#X-Amz-Target=AmazonSSM.ResumeSession
		 * @return {ResumeSessionResponse} Success
		 */
		ResumeSession(requestBody: ResumeSessionRequest, headersHandler?: () => {[header: string]: string}): Promise<ResumeSessionResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.ResumeSession', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Sends a signal to an Automation execution to change the current behavior or status of the execution.
		 * Post /#X-Amz-Target=AmazonSSM.SendAutomationSignal
		 * @return {SendAutomationSignalResult} Success
		 */
		SendAutomationSignal(requestBody: SendAutomationSignalRequest, headersHandler?: () => {[header: string]: string}): Promise<SendAutomationSignalResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.SendAutomationSignal', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Runs commands on one or more managed instances.
		 * Post /#X-Amz-Target=AmazonSSM.SendCommand
		 * @return {SendCommandResult} Success
		 */
		SendCommand(requestBody: SendCommandRequest, headersHandler?: () => {[header: string]: string}): Promise<SendCommandResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.SendCommand', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Use this API action to run an association immediately and only one time. This action can be helpful when troubleshooting associations.
		 * Post /#X-Amz-Target=AmazonSSM.StartAssociationsOnce
		 * @return {StartAssociationsOnceResult} Success
		 */
		StartAssociationsOnce(requestBody: StartAssociationsOnceRequest, headersHandler?: () => {[header: string]: string}): Promise<StartAssociationsOnceResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.StartAssociationsOnce', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Initiates execution of an Automation document.
		 * Post /#X-Amz-Target=AmazonSSM.StartAutomationExecution
		 * @return {StartAutomationExecutionResult} Success
		 */
		StartAutomationExecution(requestBody: StartAutomationExecutionRequest, headersHandler?: () => {[header: string]: string}): Promise<StartAutomationExecutionResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.StartAutomationExecution', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Initiates a connection to a target (for example, an instance) for a Session Manager session. Returns a URL and token that can be used to open a WebSocket connection for sending input and receiving outputs.</p> <note> <p>AWS CLI usage: <code>start-session</code> is an interactive command that requires the Session Manager plugin to be installed on the client machine making the call. For information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-working-with-install-plugin.html">Install the Session Manager plugin for the AWS CLI</a> in the <i>AWS Systems Manager User Guide</i>.</p> <p>AWS Tools for PowerShell usage: Start-SSMSession is not currently supported by AWS Tools for PowerShell on Windows local machines.</p> </note>
		 * Post /#X-Amz-Target=AmazonSSM.StartSession
		 * @return {StartSessionResponse} Success
		 */
		StartSession(requestBody: StartSessionRequest, headersHandler?: () => {[header: string]: string}): Promise<StartSessionResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.StartSession', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Stop an Automation that is currently running.
		 * Post /#X-Amz-Target=AmazonSSM.StopAutomationExecution
		 * @return {StopAutomationExecutionResult} Success
		 */
		StopAutomationExecution(requestBody: StopAutomationExecutionRequest, headersHandler?: () => {[header: string]: string}): Promise<StopAutomationExecutionResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.StopAutomationExecution', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Permanently ends a session and closes the data connection between the Session Manager client and SSM Agent on the instance. A terminated session cannot be resumed.
		 * Post /#X-Amz-Target=AmazonSSM.TerminateSession
		 * @return {TerminateSessionResponse} Success
		 */
		TerminateSession(requestBody: TerminateSessionRequest, headersHandler?: () => {[header: string]: string}): Promise<TerminateSessionResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.TerminateSession', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Updates an association. You can update the association name and version, the document version, schedule, parameters, and Amazon S3 output. </p> <p>In order to call this API action, your IAM user account, group, or role must be configured with permission to call the <a>DescribeAssociation</a> API action. If you don't have permission to call DescribeAssociation, then you receive the following error: <code>An error occurred (AccessDeniedException) when calling the UpdateAssociation operation: User: &lt;user_arn&gt; is not authorized to perform: ssm:DescribeAssociation on resource: &lt;resource_arn&gt;</code> </p> <important> <p>When you update an association, the association immediately runs against the specified targets.</p> </important>
		 * Post /#X-Amz-Target=AmazonSSM.UpdateAssociation
		 * @return {UpdateAssociationResult} Success
		 */
		UpdateAssociation(requestBody: UpdateAssociationRequest, headersHandler?: () => {[header: string]: string}): Promise<UpdateAssociationResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.UpdateAssociation', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Updates the status of the Systems Manager document associated with the specified instance.
		 * Post /#X-Amz-Target=AmazonSSM.UpdateAssociationStatus
		 * @return {UpdateAssociationStatusResult} Success
		 */
		UpdateAssociationStatus(requestBody: UpdateAssociationStatusRequest, headersHandler?: () => {[header: string]: string}): Promise<UpdateAssociationStatusResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.UpdateAssociationStatus', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Updates one or more values for an SSM document.
		 * Post /#X-Amz-Target=AmazonSSM.UpdateDocument
		 * @return {UpdateDocumentResult} Success
		 */
		UpdateDocument(requestBody: UpdateDocumentRequest, headersHandler?: () => {[header: string]: string}): Promise<UpdateDocumentResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.UpdateDocument', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Set the default version of a document.
		 * Post /#X-Amz-Target=AmazonSSM.UpdateDocumentDefaultVersion
		 * @return {UpdateDocumentDefaultVersionResult} Success
		 */
		UpdateDocumentDefaultVersion(requestBody: UpdateDocumentDefaultVersionRequest, headersHandler?: () => {[header: string]: string}): Promise<UpdateDocumentDefaultVersionResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.UpdateDocumentDefaultVersion', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Updates an existing maintenance window. Only specified parameters are modified.</p> <note> <p>The value you specify for <code>Duration</code> determines the specific end time for the maintenance window based on the time it begins. No maintenance window tasks are permitted to start after the resulting endtime minus the number of hours you specify for <code>Cutoff</code>. For example, if the maintenance window starts at 3 PM, the duration is three hours, and the value you specify for <code>Cutoff</code> is one hour, no maintenance window tasks can start after 5 PM.</p> </note>
		 * Post /#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindow
		 * @return {UpdateMaintenanceWindowResult} Success
		 */
		UpdateMaintenanceWindow(requestBody: UpdateMaintenanceWindowRequest, headersHandler?: () => {[header: string]: string}): Promise<UpdateMaintenanceWindowResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindow', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Modifies the target of an existing maintenance window. You can change the following:</p> <ul> <li> <p>Name</p> </li> <li> <p>Description</p> </li> <li> <p>Owner</p> </li> <li> <p>IDs for an ID target</p> </li> <li> <p>Tags for a Tag target</p> </li> <li> <p>From any supported tag type to another. The three supported tag types are ID target, Tag target, and resource group. For more information, see <a>Target</a>.</p> </li> </ul> <note> <p>If a parameter is null, then the corresponding field is not modified.</p> </note>
		 * Post /#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindowTarget
		 * @return {UpdateMaintenanceWindowTargetResult} Success
		 */
		UpdateMaintenanceWindowTarget(requestBody: UpdateMaintenanceWindowTargetRequest, headersHandler?: () => {[header: string]: string}): Promise<UpdateMaintenanceWindowTargetResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindowTarget', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Modifies a task assigned to a maintenance window. You can't change the task type, but you can change the following values:</p> <ul> <li> <p>TaskARN. For example, you can change a RUN_COMMAND task from AWS-RunPowerShellScript to AWS-RunShellScript.</p> </li> <li> <p>ServiceRoleArn</p> </li> <li> <p>TaskInvocationParameters</p> </li> <li> <p>Priority</p> </li> <li> <p>MaxConcurrency</p> </li> <li> <p>MaxErrors</p> </li> </ul> <p>If a parameter is null, then the corresponding field is not modified. Also, if you set Replace to true, then all fields required by the <a>RegisterTaskWithMaintenanceWindow</a> action are required for this request. Optional fields that aren't specified are set to null.</p>
		 * Post /#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindowTask
		 * @return {UpdateMaintenanceWindowTaskResult} Success
		 */
		UpdateMaintenanceWindowTask(requestBody: UpdateMaintenanceWindowTaskRequest, headersHandler?: () => {[header: string]: string}): Promise<UpdateMaintenanceWindowTaskResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindowTask', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Changes the Amazon Identity and Access Management (IAM) role that is assigned to the on-premises instance or virtual machines (VM). IAM roles are first assigned to these hybrid instances during the activation process. For more information, see <a>CreateActivation</a>.
		 * Post /#X-Amz-Target=AmazonSSM.UpdateManagedInstanceRole
		 * @return {UpdateManagedInstanceRoleResult} Success
		 */
		UpdateManagedInstanceRole(requestBody: UpdateManagedInstanceRoleRequest, headersHandler?: () => {[header: string]: string}): Promise<UpdateManagedInstanceRoleResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.UpdateManagedInstanceRole', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Edit or change an OpsItem. You must have permission in AWS Identity and Access Management (IAM) to update an OpsItem. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-getting-started.html">Getting started with OpsCenter</a> in the <i>AWS Systems Manager User Guide</i>.</p> <p>Operations engineers and IT professionals use OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their AWS resources. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">AWS Systems Manager OpsCenter</a> in the <i>AWS Systems Manager User Guide</i>. </p>
		 * Post /#X-Amz-Target=AmazonSSM.UpdateOpsItem
		 * @return {UpdateOpsItemResponse} Success
		 */
		UpdateOpsItem(requestBody: UpdateOpsItemRequest, headersHandler?: () => {[header: string]: string}): Promise<UpdateOpsItemResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.UpdateOpsItem', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Modifies an existing patch baseline. Fields not specified in the request are left unchanged.</p> <note> <p>For information about valid key and value pairs in <code>PatchFilters</code> for each supported operating system type, see <a href="http://docs.aws.amazon.com/systems-manager/latest/APIReference/API_PatchFilter.html">PatchFilter</a>.</p> </note>
		 * Post /#X-Amz-Target=AmazonSSM.UpdatePatchBaseline
		 * @return {UpdatePatchBaselineResult} Success
		 */
		UpdatePatchBaseline(requestBody: UpdatePatchBaselineRequest, headersHandler?: () => {[header: string]: string}): Promise<UpdatePatchBaselineResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.UpdatePatchBaseline', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Update a resource data sync. After you create a resource data sync for a Region, you can't change the account options for that sync. For example, if you create a sync in the us-east-2 (Ohio) Region and you choose the Include only the current account option, you can't edit that sync later and choose the Include all accounts from my AWS Organizations configuration option. Instead, you must delete the first resource data sync, and create a new one.</p> <note> <p>This API action only supports a resource data sync that was created with a SyncFromSource <code>SyncType</code>.</p> </note>
		 * Post /#X-Amz-Target=AmazonSSM.UpdateResourceDataSync
		 * @return {UpdateResourceDataSyncResult} Success
		 */
		UpdateResourceDataSync(requestBody: UpdateResourceDataSyncRequest, headersHandler?: () => {[header: string]: string}): Promise<UpdateResourceDataSyncResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.UpdateResourceDataSync', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p> <code>ServiceSetting</code> is an account-level setting for an AWS service. This setting defines how a user interacts with or uses a service or a feature of a service. For example, if an AWS service charges money to the account based on feature or service usage, then the AWS service team might create a default setting of "false". This means the user can't use this feature unless they change the setting to "true" and intentionally opt in for a paid feature.</p> <p>Services map a <code>SettingId</code> object to a setting value. AWS services teams define the default value for a <code>SettingId</code>. You can't create a new <code>SettingId</code>, but you can overwrite the default value if you have the <code>ssm:UpdateServiceSetting</code> permission for the setting. Use the <a>GetServiceSetting</a> API action to view the current value. Or, use the <a>ResetServiceSetting</a> to change the value back to the original value defined by the AWS service team.</p> <p>Update the service setting for the account. </p>
		 * Post /#X-Amz-Target=AmazonSSM.UpdateServiceSetting
		 * @return {UpdateServiceSettingResult} Success
		 */
		UpdateServiceSetting(requestBody: UpdateServiceSettingRequest, headersHandler?: () => {[header: string]: string}): Promise<UpdateServiceSettingResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=AmazonSSM.UpdateServiceSetting', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}
	}

}

