export namespace My_Demo_Client {
	export interface AcceptReservedNodeExchangeOutputMessage {

		/**Describes a reserved node. You can call the <a>DescribeReservedNodeOfferings</a> API to obtain the available reserved node offerings. */
		ExchangedReservedNode?: ReservedNode;
	}

	export interface AuthorizeClusterSecurityGroupIngressResult {

		/**Describes a security group. */
		ClusterSecurityGroup?: ClusterSecurityGroup;
	}

	export interface AuthorizeSnapshotAccessResult {

		/**Describes a snapshot. */
		Snapshot?: Snapshot;
	}

	export interface BatchDeleteClusterSnapshotsResult {
		Resources?: Array<String>;
		Errors?: Array<SnapshotErrorMessage>;
	}


	/**<p/> */
	export interface DeleteClusterSnapshotMessage {
		SnapshotIdentifier: string;
		SnapshotClusterIdentifier?: string;
	}

	export interface BatchModifyClusterSnapshotsOutputMessage {
		Resources?: Array<String>;
		Errors?: Array<SnapshotErrorMessage>;
	}


	/**Describes the result of a cluster resize operation. */
	export interface ResizeProgressMessage {
		TargetNodeType?: string;
		TargetNumberOfNodes?: number;
		TargetClusterType?: string;
		Status?: string;
		ImportTablesCompleted?: Array<String>;
		ImportTablesInProgress?: Array<String>;
		ImportTablesNotStarted?: Array<String>;
		AvgResizeRateInMegaBytesPerSecond?: number;
		TotalResizeDataInMegaBytes?: number;
		ProgressInMegaBytes?: number;
		ElapsedTimeInSeconds?: number;
		EstimatedTimeToCompletionInSeconds?: number;
		ResizeType?: string;
		Message?: string;
		TargetEncryptionType?: string;
		DataTransferProgressPercent?: number;
	}

	export interface CopyClusterSnapshotResult {

		/**Describes a snapshot. */
		Snapshot?: Snapshot;
	}

	export interface CreateClusterResult {

		/**Describes a cluster. */
		Cluster?: Cluster;
	}


	/**A tag consisting of a name/value pair for a resource. */
	export interface Tag {
		Key?: string;
		Value?: string;
	}

	export interface CreateClusterParameterGroupResult {

		/**Describes a parameter group. */
		ClusterParameterGroup?: ClusterParameterGroup;
	}

	export interface CreateClusterSecurityGroupResult {

		/**Describes a security group. */
		ClusterSecurityGroup?: ClusterSecurityGroup;
	}

	export interface CreateClusterSnapshotResult {

		/**Describes a snapshot. */
		Snapshot?: Snapshot;
	}

	export interface CreateClusterSubnetGroupResult {

		/**Describes a subnet group. */
		ClusterSubnetGroup?: ClusterSubnetGroup;
	}

	export interface CreateEventSubscriptionResult {

		/**Describes event subscriptions. */
		EventSubscription?: EventSubscription;
	}

	export interface CreateHsmClientCertificateResult {

		/**Returns information about an HSM client certificate. The certificate is stored in a secure Hardware Storage Module (HSM), and used by the Amazon Redshift cluster to encrypt data files. */
		HsmClientCertificate?: HsmClientCertificate;
	}

	export interface CreateHsmConfigurationResult {

		/**Returns information about an HSM configuration, which is an object that describes to Amazon Redshift clusters the information they require to connect to an HSM where they can store database encryption keys. */
		HsmConfiguration?: HsmConfiguration;
	}


	/**Describes a scheduled action. You can use a scheduled action to trigger some Amazon Redshift API operations on a schedule. For information about which API operations can be scheduled, see <a>ScheduledActionType</a>.  */
	export interface ScheduledAction {
		ScheduledActionName?: string;

		/**The action type that specifies an Amazon Redshift API operation that is supported by the Amazon Redshift scheduler. */
		TargetAction?: ScheduledActionType;
		Schedule?: string;
		IamRole?: string;
		ScheduledActionDescription?: string;
		State?: ScheduledActionState;
		NextInvocations?: Array<TStamp>;
		StartTime?: Date;
		EndTime?: Date;
	}

	export enum ScheduledActionState { ACTIVE = 0, DISABLED = 1 }

	export interface ResizeClusterMessage {
		ClusterIdentifier: string;
		ClusterType?: string;
		NodeType?: string;
		NumberOfNodes?: number;
		Classic?: boolean;
	}

	export interface PauseClusterMessage {
		ClusterIdentifier: string;
	}

	export interface ResumeClusterMessage {
		ClusterIdentifier: string;
	}

	export interface CreateSnapshotCopyGrantResult {

		/**<p>The snapshot copy grant that grants Amazon Redshift permission to encrypt copied snapshots with the specified customer master key (CMK) from AWS KMS in the destination region.</p> <p> For more information about managing snapshot copy grants, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html">Amazon Redshift Database Encryption</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p> */
		SnapshotCopyGrant?: SnapshotCopyGrant;
	}


	/**Describes a snapshot schedule. You can set a regular interval for creating snapshots of a cluster. You can also schedule snapshots for specific dates.  */
	export interface SnapshotSchedule {
		ScheduleDefinitions?: Array<String>;
		ScheduleIdentifier?: string;
		ScheduleDescription?: string;
		Tags?: Array<Tag>;
		NextInvocations?: Array<TStamp>;
		AssociatedClusterCount?: number;
		AssociatedClusters?: Array<ClusterAssociatedToSchedule>;
	}


	/**Describes a usage limit object for a cluster.  */
	export interface UsageLimit {
		UsageLimitId?: string;
		ClusterIdentifier?: string;
		FeatureType?: UsageLimitFeatureType;
		LimitType?: UsageLimitLimitType;
		Amount?: number;
		Period?: UsageLimitPeriod;
		BreachAction?: UsageLimitBreachAction;
		Tags?: Array<Tag>;
	}

	export enum UsageLimitFeatureType { spectrum = 0, concurrency-scaling = 1 }

	export enum UsageLimitLimitType { time = 0, data-scanned = 1 }

	export enum UsageLimitPeriod { daily = 0, weekly = 1, monthly = 2 }

	export enum UsageLimitBreachAction { log = 0, emit-metric = 1, disable = 2 }

	export interface DeleteClusterResult {

		/**Describes a cluster. */
		Cluster?: Cluster;
	}

	export interface DeleteClusterSnapshotResult {

		/**Describes a snapshot. */
		Snapshot?: Snapshot;
	}

	export interface AccountAttributeList {
		AccountAttributes?: Array<AccountAttribute>;
	}

	export interface ClusterDbRevisionsMessage {
		Marker?: string;
		ClusterDbRevisions?: Array<ClusterDbRevision>;
	}


	/**Contains the output from the <a>DescribeClusterParameterGroups</a> action.  */
	export interface ClusterParameterGroupsMessage {
		Marker?: string;
		ParameterGroups?: Array<ClusterParameterGroup>;
	}


	/**Contains the output from the <a>DescribeClusterParameters</a> action.  */
	export interface ClusterParameterGroupDetails {
		Parameters?: Array<Parameter>;
		Marker?: string;
	}


	/**<p/> */
	export interface ClusterSecurityGroupMessage {
		Marker?: string;
		ClusterSecurityGroups?: Array<ClusterSecurityGroup>;
	}


	/**Contains the output from the <a>DescribeClusterSnapshots</a> action.  */
	export interface SnapshotMessage {
		Marker?: string;
		Snapshots?: Array<Snapshot>;
	}


	/**Describes a sorting entity */
	export interface SnapshotSortingEntity {
		Attribute: SnapshotSortingEntityAttribute;
		SortOrder?: SnapshotSortingEntitySortOrder;
	}

	export enum SnapshotSortingEntityAttribute { SOURCE_TYPE = 0, TOTAL_SIZE = 1, CREATE_TIME = 2 }

	export enum SnapshotSortingEntitySortOrder { ASC = 0, DESC = 1 }


	/**Contains the output from the <a>DescribeClusterSubnetGroups</a> action.  */
	export interface ClusterSubnetGroupMessage {
		Marker?: string;
		ClusterSubnetGroups?: Array<ClusterSubnetGroup>;
	}

	export interface TrackListMessage {
		MaintenanceTracks?: Array<MaintenanceTrack>;
		Marker?: string;
	}


	/**Contains the output from the <a>DescribeClusterVersions</a> action.  */
	export interface ClusterVersionsMessage {
		Marker?: string;
		ClusterVersions?: Array<ClusterVersion>;
	}


	/**Contains the output from the <a>DescribeClusters</a> action.  */
	export interface ClustersMessage {
		Marker?: string;
		Clusters?: Array<Cluster>;
	}

	export interface DescribeDefaultClusterParametersResult {

		/**Describes the default cluster parameters for a parameter group family. */
		DefaultClusterParameters?: DefaultClusterParameters;
	}


	/**<p/> */
	export interface EventCategoriesMessage {
		EventCategoriesMapList?: Array<EventCategoriesMap>;
	}


	/**<p/> */
	export interface EventSubscriptionsMessage {
		Marker?: string;
		EventSubscriptionsList?: Array<EventSubscription>;
	}


	/**<p/> */
	export interface EventsMessage {
		Marker?: string;
		Events?: Array<Event>;
	}


	/**<p/> */
	export interface HsmClientCertificateMessage {
		Marker?: string;
		HsmClientCertificates?: Array<HsmClientCertificate>;
	}


	/**<p/> */
	export interface HsmConfigurationMessage {
		Marker?: string;
		HsmConfigurations?: Array<HsmConfiguration>;
	}


	/**Describes the status of logging for a cluster. */
	export interface LoggingStatus {
		LoggingEnabled?: boolean;
		BucketName?: string;
		S3KeyPrefix?: string;
		LastSuccessfulDeliveryTime?: Date;
		LastFailureTime?: Date;
		LastFailureMessage?: string;
	}

	export interface NodeConfigurationOptionsMessage {
		NodeConfigurationOptionList?: Array<NodeConfigurationOption>;
		Marker?: string;
	}


	/**A set of elements to filter the returned node configurations. */
	export interface NodeConfigurationOptionsFilter {
		Name?: NodeConfigurationOptionsFilterName;
		Operator?: NodeConfigurationOptionsFilterOperator;
		Values?: Array<String>;
	}

	export enum NodeConfigurationOptionsFilterName { NodeType = 0, NumberOfNodes = 1, EstimatedDiskUtilizationPercent = 2, Mode = 3 }

	export enum NodeConfigurationOptionsFilterOperator { eq = 0, lt = 1, gt = 2, le = 3, ge = 4, in = 5, between = 6 }


	/**Contains the output from the <a>DescribeOrderableClusterOptions</a> action.  */
	export interface OrderableClusterOptionsMessage {
		OrderableClusterOptions?: Array<OrderableClusterOption>;
		Marker?: string;
	}


	/**<p/> */
	export interface ReservedNodeOfferingsMessage {
		Marker?: string;
		ReservedNodeOfferings?: Array<ReservedNodeOffering>;
	}


	/**<p/> */
	export interface ReservedNodesMessage {
		Marker?: string;
		ReservedNodes?: Array<ReservedNode>;
	}

	export interface ScheduledActionsMessage {
		Marker?: string;
		ScheduledActions?: Array<ScheduledAction>;
	}


	/**A set of elements to filter the returned scheduled actions.  */
	export interface ScheduledActionFilter {
		Name: ScheduledActionFilterName;
		Values: Array<String>;
	}

	export enum ScheduledActionFilterName { cluster-identifier = 0, iam-role = 1 }


	/**<p/> */
	export interface SnapshotCopyGrantMessage {
		Marker?: string;
		SnapshotCopyGrants?: Array<SnapshotCopyGrant>;
	}

	export interface DescribeSnapshotSchedulesOutputMessage {
		SnapshotSchedules?: Array<SnapshotSchedule>;
		Marker?: string;
	}

	export interface CustomerStorageMessage {
		TotalBackupSizeInMegaBytes?: number;
		TotalProvisionedStorageInMegaBytes?: number;
	}


	/**<p/> */
	export interface TableRestoreStatusMessage {
		TableRestoreStatusDetails?: Array<TableRestoreStatus>;
		Marker?: string;
	}


	/**<p/> */
	export interface TaggedResourceListMessage {
		TaggedResources?: Array<TaggedResource>;
		Marker?: string;
	}

	export interface UsageLimitList {
		UsageLimits?: Array<UsageLimit>;
		Marker?: string;
	}

	export interface DisableSnapshotCopyResult {

		/**Describes a cluster. */
		Cluster?: Cluster;
	}

	export interface EnableSnapshotCopyResult {

		/**Describes a cluster. */
		Cluster?: Cluster;
	}


	/**Temporary credentials with authorization to log on to an Amazon Redshift database.  */
	export interface ClusterCredentials {
		DbUser?: string;
		DbPassword?: string;
		Expiration?: Date;
	}

	export interface GetReservedNodeExchangeOfferingsOutputMessage {
		Marker?: string;
		ReservedNodeOfferings?: Array<ReservedNodeOffering>;
	}

	export interface ModifyClusterResult {

		/**Describes a cluster. */
		Cluster?: Cluster;
	}

	export interface ModifyClusterDbRevisionResult {

		/**Describes a cluster. */
		Cluster?: Cluster;
	}

	export interface ModifyClusterIamRolesResult {

		/**Describes a cluster. */
		Cluster?: Cluster;
	}

	export interface ModifyClusterMaintenanceResult {

		/**Describes a cluster. */
		Cluster?: Cluster;
	}


	/**<p/> */
	export interface ClusterParameterGroupNameMessage {
		ParameterGroupName?: string;
		ParameterGroupStatus?: string;
	}


	/**Describes a parameter in a cluster parameter group. */
	export interface Parameter {
		ParameterName?: string;
		ParameterValue?: string;
		Description?: string;
		Source?: string;
		DataType?: string;
		AllowedValues?: string;
		ApplyType?: ParameterApplyType;
		IsModifiable?: boolean;
		MinimumEngineVersion?: string;
	}

	export enum ParameterApplyType { static = 0, dynamic = 1 }

	export interface ModifyClusterSnapshotResult {

		/**Describes a snapshot. */
		Snapshot?: Snapshot;
	}

	export interface ModifyClusterSubnetGroupResult {

		/**Describes a subnet group. */
		ClusterSubnetGroup?: ClusterSubnetGroup;
	}

	export interface ModifyEventSubscriptionResult {

		/**Describes event subscriptions. */
		EventSubscription?: EventSubscription;
	}

	export interface ModifySnapshotCopyRetentionPeriodResult {

		/**Describes a cluster. */
		Cluster?: Cluster;
	}

	export interface PauseClusterResult {

		/**Describes a cluster. */
		Cluster?: Cluster;
	}

	export interface PurchaseReservedNodeOfferingResult {

		/**Describes a reserved node. You can call the <a>DescribeReservedNodeOfferings</a> API to obtain the available reserved node offerings. */
		ReservedNode?: ReservedNode;
	}

	export interface RebootClusterResult {

		/**Describes a cluster. */
		Cluster?: Cluster;
	}

	export interface ResizeClusterResult {

		/**Describes a cluster. */
		Cluster?: Cluster;
	}

	export interface RestoreFromClusterSnapshotResult {

		/**Describes a cluster. */
		Cluster?: Cluster;
	}

	export interface RestoreTableFromClusterSnapshotResult {

		/**Describes the status of a <a>RestoreTableFromClusterSnapshot</a> operation. */
		TableRestoreStatus?: TableRestoreStatus;
	}

	export interface ResumeClusterResult {

		/**Describes a cluster. */
		Cluster?: Cluster;
	}

	export interface RevokeClusterSecurityGroupIngressResult {

		/**Describes a security group. */
		ClusterSecurityGroup?: ClusterSecurityGroup;
	}

	export interface RevokeSnapshotAccessResult {

		/**Describes a snapshot. */
		Snapshot?: Snapshot;
	}

	export interface RotateEncryptionKeyResult {

		/**Describes a cluster. */
		Cluster?: Cluster;
	}

	export interface AcceptReservedNodeExchangeInputMessage {
		ReservedNodeId: string;
		TargetReservedNodeOfferingId: string;
	}


	/**Describes a reserved node. You can call the <a>DescribeReservedNodeOfferings</a> API to obtain the available reserved node offerings.  */
	export interface ReservedNode {
		ReservedNodeId?: string;
		ReservedNodeOfferingId?: string;
		NodeType?: string;
		StartTime?: Date;
		Duration?: number;
		FixedPrice?: number;
		UsagePrice?: number;
		CurrencyCode?: string;
		NodeCount?: number;
		State?: string;
		OfferingType?: string;
		RecurringCharges?: Array<RecurringCharge>;
		ReservedNodeOfferingType?: ReservedNodeReservedNodeOfferingType;
	}

	export enum ReservedNodeReservedNodeOfferingType { Regular = 0, Upgradable = 1 }


	/**A name value pair that describes an aspect of an account.  */
	export interface AccountAttribute {
		AttributeName?: string;
		AttributeValues?: Array<AttributeValueTarget>;
	}


	/**Describes an AWS customer account authorized to restore a snapshot. */
	export interface AccountWithRestoreAccess {
		AccountId?: string;
		AccountAlias?: string;
	}

	export enum ActionType { restore-cluster = 0, recommend-node-config = 1, resize-cluster = 2 }


	/**<p/> */
	export interface ClusterAssociatedToSchedule {
		ClusterIdentifier?: string;
		ScheduleAssociationState?: ClusterAssociatedToScheduleScheduleAssociationState;
	}

	export enum ClusterAssociatedToScheduleScheduleAssociationState { MODIFYING = 0, ACTIVE = 1, FAILED = 2 }


	/**Describes an attribute value. */
	export interface AttributeValueTarget {
		AttributeValue?: string;
	}


	/**<p/> */
	export interface AuthorizeClusterSecurityGroupIngressMessage {
		ClusterSecurityGroupName: string;
		CIDRIP?: string;
		EC2SecurityGroupName?: string;
		EC2SecurityGroupOwnerId?: string;
	}


	/**Describes a security group. */
	export interface ClusterSecurityGroup {
		ClusterSecurityGroupName?: string;
		Description?: string;
		EC2SecurityGroups?: Array<EC2SecurityGroup>;
		IPRanges?: Array<IPRange>;
		Tags?: Array<Tag>;
	}


	/**<p/> */
	export interface AuthorizeSnapshotAccessMessage {
		SnapshotIdentifier: string;
		SnapshotClusterIdentifier?: string;
		AccountWithRestoreAccess: string;
	}


	/**Describes a snapshot. */
	export interface Snapshot {
		SnapshotIdentifier?: string;
		ClusterIdentifier?: string;
		SnapshotCreateTime?: Date;
		Status?: string;
		Port?: number;
		AvailabilityZone?: string;
		ClusterCreateTime?: Date;
		MasterUsername?: string;
		ClusterVersion?: string;
		SnapshotType?: string;
		NodeType?: string;
		NumberOfNodes?: number;
		DBName?: string;
		VpcId?: string;
		Encrypted?: boolean;
		KmsKeyId?: string;
		EncryptedWithHSM?: boolean;
		AccountsWithRestoreAccess?: Array<AccountWithRestoreAccess>;
		OwnerAccount?: string;
		TotalBackupSizeInMegaBytes?: number;
		ActualIncrementalBackupSizeInMegaBytes?: number;
		BackupProgressInMegaBytes?: number;
		CurrentBackupRateInMegaBytesPerSecond?: number;
		EstimatedSecondsToCompletion?: number;
		ElapsedTimeInSeconds?: number;
		SourceRegion?: string;
		Tags?: Array<Tag>;
		RestorableNodeTypes?: Array<String>;
		EnhancedVpcRouting?: boolean;
		MaintenanceTrackName?: string;
		ManualSnapshotRetentionPeriod?: number;
		ManualSnapshotRemainingDays?: number;
		SnapshotRetentionStartTime?: Date;
	}


	/**Describes an availability zone. */
	export interface AvailabilityZone {
		Name?: string;
		SupportedPlatforms?: Array<SupportedPlatform>;
	}

	export interface BatchDeleteClusterSnapshotsRequest {
		Identifiers: Array<DeleteClusterSnapshotMessage>;
	}

	export interface BatchModifyClusterSnapshotsMessage {
		SnapshotIdentifierList: Array<String>;
		ManualSnapshotRetentionPeriod?: number;
		Force?: boolean;
	}


	/**Describes the errors returned by a snapshot. */
	export interface SnapshotErrorMessage {
		SnapshotIdentifier?: string;
		SnapshotClusterIdentifier?: string;
		FailureCode?: string;
		FailureReason?: string;
	}

	export interface CancelResizeMessage {
		ClusterIdentifier: string;
	}


	/**Describes a connection endpoint. */
	export interface Endpoint {
		Address?: string;
		Port?: number;
	}


	/**Describes cluster attributes that are in a pending state. A change to one or more the attributes was requested and is in progress or will be applied. */
	export interface PendingModifiedValues {
		MasterUserPassword?: string;
		NodeType?: string;
		NumberOfNodes?: number;
		ClusterType?: string;
		ClusterVersion?: string;
		AutomatedSnapshotRetentionPeriod?: number;
		ClusterIdentifier?: string;
		PubliclyAccessible?: boolean;
		EnhancedVpcRouting?: boolean;
		MaintenanceTrackName?: string;
		EncryptionType?: string;
	}


	/**Describes the status of a cluster restore action. Returns null if the cluster was not created by restoring a snapshot. */
	export interface RestoreStatus {
		Status?: string;
		CurrentRestoreRateInMegaBytesPerSecond?: number;
		SnapshotSizeInMegaBytes?: number;
		ProgressInMegaBytes?: number;
		ElapsedTimeInSeconds?: number;
		EstimatedTimeToCompletionInSeconds?: number;
	}


	/**Describes the status of a cluster while it is in the process of resizing with an incremental resize. */
	export interface DataTransferProgress {
		Status?: string;
		CurrentRateInMegaBytesPerSecond?: number;
		TotalDataInMegaBytes?: number;
		DataTransferredInMegaBytes?: number;
		EstimatedTimeToCompletionInSeconds?: number;
		ElapsedTimeInSeconds?: number;
	}


	/**Describes the status of changes to HSM settings. */
	export interface HsmStatus {
		HsmClientCertificateIdentifier?: string;
		HsmConfigurationIdentifier?: string;
		Status?: string;
	}


	/**Returns the destination region and retention period that are configured for cross-region snapshot copy. */
	export interface ClusterSnapshotCopyStatus {
		DestinationRegion?: string;
		RetentionPeriod?: number;
		ManualSnapshotRetentionPeriod?: number;
		SnapshotCopyGrantName?: string;
	}


	/**Describes the status of the elastic IP (EIP) address. */
	export interface ElasticIpStatus {
		ElasticIp?: string;
		Status?: string;
	}

	export enum ScheduleState { MODIFYING = 0, ACTIVE = 1, FAILED = 2 }


	/**Describes a resize operation. */
	export interface ResizeInfo {
		ResizeType?: string;
		AllowCancelResize?: boolean;
	}


	/**Describes a cluster. */
	export interface Cluster {
		ClusterIdentifier?: string;
		NodeType?: string;
		ClusterStatus?: string;
		ClusterAvailabilityStatus?: string;
		ModifyStatus?: string;
		MasterUsername?: string;
		DBName?: string;

		/**Describes a connection endpoint. */
		Endpoint?: Endpoint;
		ClusterCreateTime?: Date;
		AutomatedSnapshotRetentionPeriod?: number;
		ManualSnapshotRetentionPeriod?: number;
		ClusterSecurityGroups?: Array<ClusterSecurityGroupMembership>;
		VpcSecurityGroups?: Array<VpcSecurityGroupMembership>;
		ClusterParameterGroups?: Array<ClusterParameterGroupStatus>;
		ClusterSubnetGroupName?: string;
		VpcId?: string;
		AvailabilityZone?: string;
		PreferredMaintenanceWindow?: string;

		/**Describes cluster attributes that are in a pending state. A change to one or more the attributes was requested and is in progress or will be applied. */
		PendingModifiedValues?: PendingModifiedValues;
		ClusterVersion?: string;
		AllowVersionUpgrade?: boolean;
		NumberOfNodes?: number;
		PubliclyAccessible?: boolean;
		Encrypted?: boolean;

		/**Describes the status of a cluster restore action. Returns null if the cluster was not created by restoring a snapshot. */
		RestoreStatus?: RestoreStatus;

		/**Describes the status of a cluster while it is in the process of resizing with an incremental resize. */
		DataTransferProgress?: DataTransferProgress;

		/**Describes the status of changes to HSM settings. */
		HsmStatus?: HsmStatus;

		/**Returns the destination region and retention period that are configured for cross-region snapshot copy. */
		ClusterSnapshotCopyStatus?: ClusterSnapshotCopyStatus;
		ClusterPublicKey?: string;
		ClusterNodes?: Array<ClusterNode>;

		/**Describes the status of the elastic IP (EIP) address. */
		ElasticIpStatus?: ElasticIpStatus;
		ClusterRevisionNumber?: string;
		Tags?: Array<Tag>;
		KmsKeyId?: string;
		EnhancedVpcRouting?: boolean;
		IamRoles?: Array<ClusterIamRole>;
		PendingActions?: Array<String>;
		MaintenanceTrackName?: string;
		ElasticResizeNumberOfNodeOptions?: string;
		DeferredMaintenanceWindows?: Array<DeferredMaintenanceWindow>;
		SnapshotScheduleIdentifier?: string;
		SnapshotScheduleState?: ClusterSnapshotScheduleState;
		ExpectedNextSnapshotScheduleTime?: Date;
		ExpectedNextSnapshotScheduleTimeStatus?: string;
		NextMaintenanceWindowStartTime?: Date;

		/**Describes a resize operation. */
		ResizeInfo?: ResizeInfo;
	}

	export enum ClusterSnapshotScheduleState { MODIFYING = 0, ACTIVE = 1, FAILED = 2 }


	/**Describes a <code>ClusterDbRevision</code>. */
	export interface ClusterDbRevision {
		ClusterIdentifier?: string;
		CurrentDatabaseRevision?: string;
		DatabaseRevisionReleaseDate?: Date;
		RevisionTargets?: Array<RevisionTarget>;
	}


	/**An AWS Identity and Access Management (IAM) role that can be used by the associated Amazon Redshift cluster to access other AWS services. */
	export interface ClusterIamRole {
		IamRoleArn?: string;
		ApplyStatus?: string;
	}


	/**The identifier of a node in a cluster. */
	export interface ClusterNode {
		NodeRole?: string;
		PrivateIPAddress?: string;
		PublicIPAddress?: string;
	}


	/**Describes a parameter group. */
	export interface ClusterParameterGroup {
		ParameterGroupName?: string;
		ParameterGroupFamily?: string;
		Description?: string;
		Tags?: Array<Tag>;
	}


	/**Describes the status of a parameter group. */
	export interface ClusterParameterGroupStatus {
		ParameterGroupName?: string;
		ParameterApplyStatus?: string;
		ClusterParameterStatusList?: Array<ClusterParameterStatus>;
	}


	/**Describes the status of a parameter group. */
	export interface ClusterParameterStatus {
		ParameterName?: string;
		ParameterApplyStatus?: string;
		ParameterApplyErrorDescription?: string;
	}


	/**Describes a cluster security group. */
	export interface ClusterSecurityGroupMembership {
		ClusterSecurityGroupName?: string;
		Status?: string;
	}


	/**Describes a subnet group. */
	export interface ClusterSubnetGroup {
		ClusterSubnetGroupName?: string;
		Description?: string;
		VpcId?: string;
		SubnetGroupStatus?: string;
		Subnets?: Array<Subnet>;
		Tags?: Array<Tag>;
	}


	/**Describes a cluster version, including the parameter group family and description of the version. */
	export interface ClusterVersion {
		ClusterVersion?: string;
		ClusterParameterGroupFamily?: string;
		Description?: string;
	}


	/**<p/> */
	export interface CopyClusterSnapshotMessage {
		SourceSnapshotIdentifier: string;
		SourceSnapshotClusterIdentifier?: string;
		TargetSnapshotIdentifier: string;
		ManualSnapshotRetentionPeriod?: number;
	}


	/**<p/> */
	export interface CreateClusterMessage {
		DBName?: string;
		ClusterIdentifier: string;
		ClusterType?: string;
		NodeType: string;
		MasterUsername: string;
		MasterUserPassword: string;
		ClusterSecurityGroups?: Array<String>;
		VpcSecurityGroupIds?: Array<String>;
		ClusterSubnetGroupName?: string;
		AvailabilityZone?: string;
		PreferredMaintenanceWindow?: string;
		ClusterParameterGroupName?: string;
		AutomatedSnapshotRetentionPeriod?: number;
		ManualSnapshotRetentionPeriod?: number;
		Port?: number;
		ClusterVersion?: string;
		AllowVersionUpgrade?: boolean;
		NumberOfNodes?: number;
		PubliclyAccessible?: boolean;
		Encrypted?: boolean;
		HsmClientCertificateIdentifier?: string;
		HsmConfigurationIdentifier?: string;
		ElasticIp?: string;
		Tags?: Array<Tag>;
		KmsKeyId?: string;
		EnhancedVpcRouting?: boolean;
		AdditionalInfo?: string;
		IamRoles?: Array<String>;
		MaintenanceTrackName?: string;
		SnapshotScheduleIdentifier?: string;
	}


	/**<p/> */
	export interface CreateClusterParameterGroupMessage {
		ParameterGroupName: string;
		ParameterGroupFamily: string;
		Description: string;
		Tags?: Array<Tag>;
	}


	/**<p/> */
	export interface CreateClusterSecurityGroupMessage {
		ClusterSecurityGroupName: string;
		Description: string;
		Tags?: Array<Tag>;
	}


	/**<p/> */
	export interface CreateClusterSnapshotMessage {
		SnapshotIdentifier: string;
		ClusterIdentifier: string;
		ManualSnapshotRetentionPeriod?: number;
		Tags?: Array<Tag>;
	}


	/**<p/> */
	export interface CreateClusterSubnetGroupMessage {
		ClusterSubnetGroupName: string;
		Description: string;
		SubnetIds: Array<String>;
		Tags?: Array<Tag>;
	}


	/**<p/> */
	export interface CreateEventSubscriptionMessage {
		SubscriptionName: string;
		SnsTopicArn: string;
		SourceType?: string;
		SourceIds?: Array<String>;
		EventCategories?: Array<String>;
		Severity?: string;
		Enabled?: boolean;
		Tags?: Array<Tag>;
	}


	/**Describes event subscriptions. */
	export interface EventSubscription {
		CustomerAwsId?: string;
		CustSubscriptionId?: string;
		SnsTopicArn?: string;
		Status?: string;
		SubscriptionCreationTime?: Date;
		SourceType?: string;
		SourceIdsList?: Array<String>;
		EventCategoriesList?: Array<String>;
		Severity?: string;
		Enabled?: boolean;
		Tags?: Array<Tag>;
	}


	/**<p/> */
	export interface CreateHsmClientCertificateMessage {
		HsmClientCertificateIdentifier: string;
		Tags?: Array<Tag>;
	}


	/**Returns information about an HSM client certificate. The certificate is stored in a secure Hardware Storage Module (HSM), and used by the Amazon Redshift cluster to encrypt data files. */
	export interface HsmClientCertificate {
		HsmClientCertificateIdentifier?: string;
		HsmClientCertificatePublicKey?: string;
		Tags?: Array<Tag>;
	}


	/**<p/> */
	export interface CreateHsmConfigurationMessage {
		HsmConfigurationIdentifier: string;
		Description: string;
		HsmIpAddress: string;
		HsmPartitionName: string;
		HsmPartitionPassword: string;
		HsmServerPublicCertificate: string;
		Tags?: Array<Tag>;
	}


	/**Returns information about an HSM configuration, which is an object that describes to Amazon Redshift clusters the information they require to connect to an HSM where they can store database encryption keys. */
	export interface HsmConfiguration {
		HsmConfigurationIdentifier?: string;
		Description?: string;
		HsmIpAddress?: string;
		HsmPartitionName?: string;
		Tags?: Array<Tag>;
	}


	/**The action type that specifies an Amazon Redshift API operation that is supported by the Amazon Redshift scheduler.  */
	export interface ScheduledActionType {
		ResizeCluster?: ResizeClusterMessage;
		PauseCluster?: PauseClusterMessage;
		ResumeCluster?: ResumeClusterMessage;
	}

	export interface CreateScheduledActionMessage {
		ScheduledActionName: string;

		/**The action type that specifies an Amazon Redshift API operation that is supported by the Amazon Redshift scheduler. */
		TargetAction: ScheduledActionType;
		Schedule: string;
		IamRole: string;
		ScheduledActionDescription?: string;
		StartTime?: Date;
		EndTime?: Date;
		Enable?: boolean;
	}


	/**The result of the <code>CreateSnapshotCopyGrant</code> action. */
	export interface CreateSnapshotCopyGrantMessage {
		SnapshotCopyGrantName: string;
		KmsKeyId?: string;
		Tags?: Array<Tag>;
	}


	/**<p>The snapshot copy grant that grants Amazon Redshift permission to encrypt copied snapshots with the specified customer master key (CMK) from AWS KMS in the destination region.</p> <p> For more information about managing snapshot copy grants, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html">Amazon Redshift Database Encryption</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p> */
	export interface SnapshotCopyGrant {
		SnapshotCopyGrantName?: string;
		KmsKeyId?: string;
		Tags?: Array<Tag>;
	}

	export interface CreateSnapshotScheduleMessage {
		ScheduleDefinitions?: Array<String>;
		ScheduleIdentifier?: string;
		ScheduleDescription?: string;
		Tags?: Array<Tag>;
		DryRun?: boolean;
		NextInvocations?: number;
	}


	/**Contains the output from the <code>CreateTags</code> action.  */
	export interface CreateTagsMessage {
		ResourceName: string;
		Tags: Array<Tag>;
	}

	export enum UsageLimitFeatureType { spectrum = 0, concurrency-scaling = 1 }

	export enum UsageLimitLimitType { time = 0, data-scanned = 1 }

	export enum UsageLimitPeriod { daily = 0, weekly = 1, monthly = 2 }

	export enum UsageLimitBreachAction { log = 0, emit-metric = 1, disable = 2 }

	export interface CreateUsageLimitMessage {
		ClusterIdentifier: string;
		FeatureType: CreateUsageLimitMessageFeatureType;
		LimitType: CreateUsageLimitMessageLimitType;
		Amount: number;
		Period?: CreateUsageLimitMessagePeriod;
		BreachAction?: CreateUsageLimitMessageBreachAction;
		Tags?: Array<Tag>;
	}

	export enum CreateUsageLimitMessageFeatureType { spectrum = 0, concurrency-scaling = 1 }

	export enum CreateUsageLimitMessageLimitType { time = 0, data-scanned = 1 }

	export enum CreateUsageLimitMessagePeriod { daily = 0, weekly = 1, monthly = 2 }

	export enum CreateUsageLimitMessageBreachAction { log = 0, emit-metric = 1, disable = 2 }


	/**Describes the default cluster parameters for a parameter group family. */
	export interface DefaultClusterParameters {
		ParameterGroupFamily?: string;
		Marker?: string;
		Parameters?: Array<Parameter>;
	}


	/**Describes a deferred maintenance window */
	export interface DeferredMaintenanceWindow {
		DeferMaintenanceIdentifier?: string;
		DeferMaintenanceStartTime?: Date;
		DeferMaintenanceEndTime?: Date;
	}


	/**<p/> */
	export interface DeleteClusterMessage {
		ClusterIdentifier: string;
		SkipFinalClusterSnapshot?: boolean;
		FinalClusterSnapshotIdentifier?: string;
		FinalClusterSnapshotRetentionPeriod?: number;
	}


	/**<p/> */
	export interface DeleteClusterParameterGroupMessage {
		ParameterGroupName: string;
	}


	/**<p/> */
	export interface DeleteClusterSecurityGroupMessage {
		ClusterSecurityGroupName: string;
	}


	/**<p/> */
	export interface DeleteClusterSubnetGroupMessage {
		ClusterSubnetGroupName: string;
	}


	/**<p/> */
	export interface DeleteEventSubscriptionMessage {
		SubscriptionName: string;
	}


	/**<p/> */
	export interface DeleteHsmClientCertificateMessage {
		HsmClientCertificateIdentifier: string;
	}


	/**<p/> */
	export interface DeleteHsmConfigurationMessage {
		HsmConfigurationIdentifier: string;
	}

	export interface DeleteScheduledActionMessage {
		ScheduledActionName: string;
	}


	/**The result of the <code>DeleteSnapshotCopyGrant</code> action. */
	export interface DeleteSnapshotCopyGrantMessage {
		SnapshotCopyGrantName: string;
	}

	export interface DeleteSnapshotScheduleMessage {
		ScheduleIdentifier: string;
	}


	/**Contains the output from the <code>DeleteTags</code> action.  */
	export interface DeleteTagsMessage {
		ResourceName: string;
		TagKeys: Array<String>;
	}

	export interface DeleteUsageLimitMessage {
		UsageLimitId: string;
	}

	export interface DescribeAccountAttributesMessage {
		AttributeNames?: Array<String>;
	}

	export interface DescribeClusterDbRevisionsMessage {
		ClusterIdentifier?: string;
		MaxRecords?: number;
		Marker?: string;
	}


	/**<p/> */
	export interface DescribeClusterParameterGroupsMessage {
		ParameterGroupName?: string;
		MaxRecords?: number;
		Marker?: string;
		TagKeys?: Array<String>;
		TagValues?: Array<String>;
	}


	/**<p/> */
	export interface DescribeClusterParametersMessage {
		ParameterGroupName: string;
		Source?: string;
		MaxRecords?: number;
		Marker?: string;
	}


	/**<p/> */
	export interface DescribeClusterSecurityGroupsMessage {
		ClusterSecurityGroupName?: string;
		MaxRecords?: number;
		Marker?: string;
		TagKeys?: Array<String>;
		TagValues?: Array<String>;
	}


	/**<p/> */
	export interface DescribeClusterSnapshotsMessage {
		ClusterIdentifier?: string;
		SnapshotIdentifier?: string;
		SnapshotType?: string;
		StartTime?: Date;
		EndTime?: Date;
		MaxRecords?: number;
		Marker?: string;
		OwnerAccount?: string;
		TagKeys?: Array<String>;
		TagValues?: Array<String>;
		ClusterExists?: boolean;
		SortingEntities?: Array<SnapshotSortingEntity>;
	}


	/**<p/> */
	export interface DescribeClusterSubnetGroupsMessage {
		ClusterSubnetGroupName?: string;
		MaxRecords?: number;
		Marker?: string;
		TagKeys?: Array<String>;
		TagValues?: Array<String>;
	}

	export interface DescribeClusterTracksMessage {
		MaintenanceTrackName?: string;
		MaxRecords?: number;
		Marker?: string;
	}


	/**<p/> */
	export interface DescribeClusterVersionsMessage {
		ClusterVersion?: string;
		ClusterParameterGroupFamily?: string;
		MaxRecords?: number;
		Marker?: string;
	}


	/**<p/> */
	export interface DescribeClustersMessage {
		ClusterIdentifier?: string;
		MaxRecords?: number;
		Marker?: string;
		TagKeys?: Array<String>;
		TagValues?: Array<String>;
	}


	/**<p/> */
	export interface DescribeDefaultClusterParametersMessage {
		ParameterGroupFamily: string;
		MaxRecords?: number;
		Marker?: string;
	}


	/**<p/> */
	export interface DescribeEventCategoriesMessage {
		SourceType?: string;
	}


	/**<p/> */
	export interface DescribeEventSubscriptionsMessage {
		SubscriptionName?: string;
		MaxRecords?: number;
		Marker?: string;
		TagKeys?: Array<String>;
		TagValues?: Array<String>;
	}

	export enum SourceType { cluster = 0, cluster-parameter-group = 1, cluster-security-group = 2, cluster-snapshot = 3, scheduled-action = 4 }


	/**<p/> */
	export interface DescribeEventsMessage {
		SourceIdentifier?: string;
		SourceType?: DescribeEventsMessageSourceType;
		StartTime?: Date;
		EndTime?: Date;
		Duration?: number;
		MaxRecords?: number;
		Marker?: string;
	}

	export enum DescribeEventsMessageSourceType { cluster = 0, cluster-parameter-group = 1, cluster-security-group = 2, cluster-snapshot = 3, scheduled-action = 4 }


	/**<p/> */
	export interface DescribeHsmClientCertificatesMessage {
		HsmClientCertificateIdentifier?: string;
		MaxRecords?: number;
		Marker?: string;
		TagKeys?: Array<String>;
		TagValues?: Array<String>;
	}


	/**<p/> */
	export interface DescribeHsmConfigurationsMessage {
		HsmConfigurationIdentifier?: string;
		MaxRecords?: number;
		Marker?: string;
		TagKeys?: Array<String>;
		TagValues?: Array<String>;
	}


	/**<p/> */
	export interface DescribeLoggingStatusMessage {
		ClusterIdentifier: string;
	}

	export interface DescribeNodeConfigurationOptionsMessage {
		ActionType: DescribeNodeConfigurationOptionsMessageActionType;
		ClusterIdentifier?: string;
		SnapshotIdentifier?: string;
		OwnerAccount?: string;
		Filters?: Array<NodeConfigurationOptionsFilter>;
		Marker?: string;
		MaxRecords?: number;
	}

	export enum DescribeNodeConfigurationOptionsMessageActionType { restore-cluster = 0, recommend-node-config = 1, resize-cluster = 2 }


	/**<p/> */
	export interface DescribeOrderableClusterOptionsMessage {
		ClusterVersion?: string;
		NodeType?: string;
		MaxRecords?: number;
		Marker?: string;
	}


	/**<p/> */
	export interface DescribeReservedNodeOfferingsMessage {
		ReservedNodeOfferingId?: string;
		MaxRecords?: number;
		Marker?: string;
	}


	/**<p/> */
	export interface DescribeReservedNodesMessage {
		ReservedNodeId?: string;
		MaxRecords?: number;
		Marker?: string;
	}


	/**<p/> */
	export interface DescribeResizeMessage {
		ClusterIdentifier: string;
	}

	export enum ScheduledActionTypeValues { ResizeCluster = 0, PauseCluster = 1, ResumeCluster = 2 }

	export interface DescribeScheduledActionsMessage {
		ScheduledActionName?: string;
		TargetActionType?: DescribeScheduledActionsMessageTargetActionType;
		StartTime?: Date;
		EndTime?: Date;
		Active?: boolean;
		Filters?: Array<ScheduledActionFilter>;
		Marker?: string;
		MaxRecords?: number;
	}

	export enum DescribeScheduledActionsMessageTargetActionType { ResizeCluster = 0, PauseCluster = 1, ResumeCluster = 2 }


	/**The result of the <code>DescribeSnapshotCopyGrants</code> action. */
	export interface DescribeSnapshotCopyGrantsMessage {
		SnapshotCopyGrantName?: string;
		MaxRecords?: number;
		Marker?: string;
		TagKeys?: Array<String>;
		TagValues?: Array<String>;
	}

	export interface DescribeSnapshotSchedulesMessage {
		ClusterIdentifier?: string;
		ScheduleIdentifier?: string;
		TagKeys?: Array<String>;
		TagValues?: Array<String>;
		Marker?: string;
		MaxRecords?: number;
	}


	/**<p/> */
	export interface DescribeTableRestoreStatusMessage {
		ClusterIdentifier?: string;
		TableRestoreRequestId?: string;
		MaxRecords?: number;
		Marker?: string;
	}


	/**<p/> */
	export interface DescribeTagsMessage {
		ResourceName?: string;
		ResourceType?: string;
		MaxRecords?: number;
		Marker?: string;
		TagKeys?: Array<String>;
		TagValues?: Array<String>;
	}

	export interface DescribeUsageLimitsMessage {
		UsageLimitId?: string;
		ClusterIdentifier?: string;
		FeatureType?: DescribeUsageLimitsMessageFeatureType;
		MaxRecords?: number;
		Marker?: string;
		TagKeys?: Array<String>;
		TagValues?: Array<String>;
	}

	export enum DescribeUsageLimitsMessageFeatureType { spectrum = 0, concurrency-scaling = 1 }


	/**<p/> */
	export interface DisableLoggingMessage {
		ClusterIdentifier: string;
	}


	/**<p/> */
	export interface DisableSnapshotCopyMessage {
		ClusterIdentifier: string;
	}


	/**Describes an Amazon EC2 security group. */
	export interface EC2SecurityGroup {
		Status?: string;
		EC2SecurityGroupName?: string;
		EC2SecurityGroupOwnerId?: string;
		Tags?: Array<Tag>;
	}


	/**A maintenance track that you can switch the current track to. */
	export interface UpdateTarget {
		MaintenanceTrackName?: string;
		DatabaseVersion?: string;
		SupportedOperations?: Array<SupportedOperation>;
	}


	/**<p/> */
	export interface EnableLoggingMessage {
		ClusterIdentifier: string;
		BucketName: string;
		S3KeyPrefix?: string;
	}


	/**<p/> */
	export interface EnableSnapshotCopyMessage {
		ClusterIdentifier: string;
		DestinationRegion: string;
		RetentionPeriod?: number;
		SnapshotCopyGrantName?: string;
		ManualSnapshotRetentionPeriod?: number;
	}


	/**Describes an event. */
	export interface Event {
		SourceIdentifier?: string;
		SourceType?: EventSourceType;
		Message?: string;
		EventCategories?: Array<String>;
		Severity?: string;
		Date?: Date;
		EventId?: string;
	}

	export enum EventSourceType { cluster = 0, cluster-parameter-group = 1, cluster-security-group = 2, cluster-snapshot = 3, scheduled-action = 4 }


	/**Describes event categories. */
	export interface EventCategoriesMap {
		SourceType?: string;
		Events?: Array<EventInfoMap>;
	}


	/**Describes event information. */
	export interface EventInfoMap {
		EventId?: string;
		EventCategories?: Array<String>;
		EventDescription?: string;
		Severity?: string;
	}


	/**The request parameters to get cluster credentials. */
	export interface GetClusterCredentialsMessage {
		DbUser: string;
		DbName?: string;
		ClusterIdentifier: string;
		DurationSeconds?: number;
		AutoCreate?: boolean;
		DbGroups?: Array<String>;
	}


	/**<p/> */
	export interface GetReservedNodeExchangeOfferingsInputMessage {
		ReservedNodeId: string;
		MaxRecords?: number;
		Marker?: string;
	}


	/**Describes an IP range used in a security group. */
	export interface IPRange {
		Status?: string;
		CIDRIP?: string;
		Tags?: Array<Tag>;
	}


	/**Defines a maintenance track that determines which Amazon Redshift version to apply during a maintenance window. If the value for <code>MaintenanceTrack</code> is <code>current</code>, the cluster is updated to the most recently certified maintenance release. If the value is <code>trailing</code>, the cluster is updated to the previously certified maintenance release.  */
	export interface MaintenanceTrack {
		MaintenanceTrackName?: string;
		DatabaseVersion?: string;
		UpdateTargets?: Array<UpdateTarget>;
	}

	export enum Mode { standard = 0, high-performance = 1 }

	export interface ModifyClusterDbRevisionMessage {
		ClusterIdentifier: string;
		RevisionTarget: string;
	}


	/**<p/> */
	export interface ModifyClusterIamRolesMessage {
		ClusterIdentifier: string;
		AddIamRoles?: Array<String>;
		RemoveIamRoles?: Array<String>;
	}

	export interface ModifyClusterMaintenanceMessage {
		ClusterIdentifier: string;
		DeferMaintenance?: boolean;
		DeferMaintenanceIdentifier?: string;
		DeferMaintenanceStartTime?: Date;
		DeferMaintenanceEndTime?: Date;
		DeferMaintenanceDuration?: number;
	}


	/**<p/> */
	export interface ModifyClusterMessage {
		ClusterIdentifier: string;
		ClusterType?: string;
		NodeType?: string;
		NumberOfNodes?: number;
		ClusterSecurityGroups?: Array<String>;
		VpcSecurityGroupIds?: Array<String>;
		MasterUserPassword?: string;
		ClusterParameterGroupName?: string;
		AutomatedSnapshotRetentionPeriod?: number;
		ManualSnapshotRetentionPeriod?: number;
		PreferredMaintenanceWindow?: string;
		ClusterVersion?: string;
		AllowVersionUpgrade?: boolean;
		HsmClientCertificateIdentifier?: string;
		HsmConfigurationIdentifier?: string;
		NewClusterIdentifier?: string;
		PubliclyAccessible?: boolean;
		ElasticIp?: string;
		EnhancedVpcRouting?: boolean;
		MaintenanceTrackName?: string;
		Encrypted?: boolean;
		KmsKeyId?: string;
	}


	/**<p/> */
	export interface ModifyClusterParameterGroupMessage {
		ParameterGroupName: string;
		Parameters: Array<Parameter>;
	}

	export interface ModifyClusterSnapshotMessage {
		SnapshotIdentifier: string;
		ManualSnapshotRetentionPeriod?: number;
		Force?: boolean;
	}

	export interface ModifyClusterSnapshotScheduleMessage {
		ClusterIdentifier: string;
		ScheduleIdentifier?: string;
		DisassociateSchedule?: boolean;
	}


	/**<p/> */
	export interface ModifyClusterSubnetGroupMessage {
		ClusterSubnetGroupName: string;
		Description?: string;
		SubnetIds: Array<String>;
	}


	/**<p/> */
	export interface ModifyEventSubscriptionMessage {
		SubscriptionName: string;
		SnsTopicArn?: string;
		SourceType?: string;
		SourceIds?: Array<String>;
		EventCategories?: Array<String>;
		Severity?: string;
		Enabled?: boolean;
	}

	export interface ModifyScheduledActionMessage {
		ScheduledActionName: string;

		/**The action type that specifies an Amazon Redshift API operation that is supported by the Amazon Redshift scheduler. */
		TargetAction?: ScheduledActionType;
		Schedule?: string;
		IamRole?: string;
		ScheduledActionDescription?: string;
		StartTime?: Date;
		EndTime?: Date;
		Enable?: boolean;
	}


	/**<p/> */
	export interface ModifySnapshotCopyRetentionPeriodMessage {
		ClusterIdentifier: string;
		RetentionPeriod: number;
		Manual?: boolean;
	}

	export interface ModifySnapshotScheduleMessage {
		ScheduleIdentifier: string;
		ScheduleDefinitions: Array<String>;
	}

	export interface ModifyUsageLimitMessage {
		UsageLimitId: string;
		Amount?: number;
		BreachAction?: ModifyUsageLimitMessageBreachAction;
	}

	export enum ModifyUsageLimitMessageBreachAction { log = 0, emit-metric = 1, disable = 2 }


	/**A list of node configurations. */
	export interface NodeConfigurationOption {
		NodeType?: string;
		NumberOfNodes?: number;
		EstimatedDiskUtilizationPercent?: number;
		Mode?: NodeConfigurationOptionMode;
	}

	export enum NodeConfigurationOptionMode { standard = 0, high-performance = 1 }

	export enum NodeConfigurationOptionsFilterName { NodeType = 0, NumberOfNodes = 1, EstimatedDiskUtilizationPercent = 2, Mode = 3 }

	export enum OperatorType { eq = 0, lt = 1, gt = 2, le = 3, ge = 4, in = 5, between = 6 }


	/**Describes an orderable cluster option. */
	export interface OrderableClusterOption {
		ClusterVersion?: string;
		ClusterType?: string;
		NodeType?: string;
		AvailabilityZones?: Array<AvailabilityZone>;
	}

	export enum ParameterApplyType { static = 0, dynamic = 1 }


	/**<p/> */
	export interface PurchaseReservedNodeOfferingMessage {
		ReservedNodeOfferingId: string;
		NodeCount?: number;
	}


	/**<p/> */
	export interface RebootClusterMessage {
		ClusterIdentifier: string;
	}


	/**Describes a recurring charge. */
	export interface RecurringCharge {
		RecurringChargeAmount?: number;
		RecurringChargeFrequency?: string;
	}

	export enum ReservedNodeOfferingType { Regular = 0, Upgradable = 1 }


	/**Describes a reserved node offering. */
	export interface ReservedNodeOffering {
		ReservedNodeOfferingId?: string;
		NodeType?: string;
		Duration?: number;
		FixedPrice?: number;
		UsagePrice?: number;
		CurrencyCode?: string;
		OfferingType?: string;
		RecurringCharges?: Array<RecurringCharge>;
		ReservedNodeOfferingType?: ReservedNodeOfferingReservedNodeOfferingType;
	}

	export enum ReservedNodeOfferingReservedNodeOfferingType { Regular = 0, Upgradable = 1 }


	/**<p/> */
	export interface ResetClusterParameterGroupMessage {
		ParameterGroupName: string;
		ResetAllParameters?: boolean;
		Parameters?: Array<Parameter>;
	}


	/**<p/> */
	export interface RestoreFromClusterSnapshotMessage {
		ClusterIdentifier: string;
		SnapshotIdentifier: string;
		SnapshotClusterIdentifier?: string;
		Port?: number;
		AvailabilityZone?: string;
		AllowVersionUpgrade?: boolean;
		ClusterSubnetGroupName?: string;
		PubliclyAccessible?: boolean;
		OwnerAccount?: string;
		HsmClientCertificateIdentifier?: string;
		HsmConfigurationIdentifier?: string;
		ElasticIp?: string;
		ClusterParameterGroupName?: string;
		ClusterSecurityGroups?: Array<String>;
		VpcSecurityGroupIds?: Array<String>;
		PreferredMaintenanceWindow?: string;
		AutomatedSnapshotRetentionPeriod?: number;
		ManualSnapshotRetentionPeriod?: number;
		KmsKeyId?: string;
		NodeType?: string;
		EnhancedVpcRouting?: boolean;
		AdditionalInfo?: string;
		IamRoles?: Array<String>;
		MaintenanceTrackName?: string;
		SnapshotScheduleIdentifier?: string;
		NumberOfNodes?: number;
	}


	/**<p/> */
	export interface RestoreTableFromClusterSnapshotMessage {
		ClusterIdentifier: string;
		SnapshotIdentifier: string;
		SourceDatabaseName: string;
		SourceSchemaName?: string;
		SourceTableName: string;
		TargetDatabaseName?: string;
		TargetSchemaName?: string;
		NewTableName: string;
	}


	/**Describes the status of a <a>RestoreTableFromClusterSnapshot</a> operation. */
	export interface TableRestoreStatus {
		TableRestoreRequestId?: string;
		Status?: TableRestoreStatusStatus;
		Message?: string;
		RequestTime?: Date;
		ProgressInMegaBytes?: number;
		TotalDataInMegaBytes?: number;
		ClusterIdentifier?: string;
		SnapshotIdentifier?: string;
		SourceDatabaseName?: string;
		SourceSchemaName?: string;
		SourceTableName?: string;
		TargetDatabaseName?: string;
		TargetSchemaName?: string;
		NewTableName?: string;
	}

	export enum TableRestoreStatusStatus { PENDING = 0, IN_PROGRESS = 1, SUCCEEDED = 2, FAILED = 3, CANCELED = 4 }


	/**Describes a <code>RevisionTarget</code>. */
	export interface RevisionTarget {
		DatabaseRevision?: string;
		Description?: string;
		DatabaseRevisionReleaseDate?: Date;
	}


	/**<p/> */
	export interface RevokeClusterSecurityGroupIngressMessage {
		ClusterSecurityGroupName: string;
		CIDRIP?: string;
		EC2SecurityGroupName?: string;
		EC2SecurityGroupOwnerId?: string;
	}


	/**<p/> */
	export interface RevokeSnapshotAccessMessage {
		SnapshotIdentifier: string;
		SnapshotClusterIdentifier?: string;
		AccountWithRestoreAccess: string;
	}


	/**<p/> */
	export interface RotateEncryptionKeyMessage {
		ClusterIdentifier: string;
	}

	export enum ScheduledActionState { ACTIVE = 0, DISABLED = 1 }

	export enum ScheduledActionFilterName { cluster-identifier = 0, iam-role = 1 }

	export enum SnapshotAttributeToSortBy { SOURCE_TYPE = 0, TOTAL_SIZE = 1, CREATE_TIME = 2 }

	export enum SortByOrder { ASC = 0, DESC = 1 }


	/**Describes a subnet. */
	export interface Subnet {
		SubnetIdentifier?: string;

		/**Describes an availability zone. */
		SubnetAvailabilityZone?: AvailabilityZone;
		SubnetStatus?: string;
	}


	/**Describes the operations that are allowed on a maintenance track. */
	export interface SupportedOperation {
		OperationName?: string;
	}


	/**A list of supported platforms for orderable clusters. */
	export interface SupportedPlatform {
		Name?: string;
	}

	export enum TableRestoreStatusType { PENDING = 0, IN_PROGRESS = 1, SUCCEEDED = 2, FAILED = 3, CANCELED = 4 }


	/**A tag and its associated resource. */
	export interface TaggedResource {

		/**A tag consisting of a name/value pair for a resource. */
		Tag?: Tag;
		ResourceName?: string;
		ResourceType?: string;
	}


	/**Describes the members of a VPC security group. */
	export interface VpcSecurityGroupMembership {
		VpcSecurityGroupId?: string;
		Status?: string;
	}

	export class DemoClient {
		constructor(private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/') {
		}

		/**
		 * Exchanges a DC1 Reserved Node for a DC2 Reserved Node with no changes to the configuration (term, payment type, or number of nodes) and no additional costs.
		 * Get /#Action=AcceptReservedNodeExchange
		 * @param {string} ReservedNodeId A string representing the node identifier of the DC1 Reserved Node to be exchanged.
		 * @param {string} TargetReservedNodeOfferingId The unique identifier of the DC2 Reserved Node offering to be used for the exchange. You can obtain the value for the parameter by calling <a>GetReservedNodeExchangeOfferings</a> 
		 * @return {void} Success
		 */
		GET_AcceptReservedNodeExchange(ReservedNodeId: string, TargetReservedNodeOfferingId: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=AcceptReservedNodeExchange?ReservedNodeId=' + (ReservedNodeId == null ? '' : encodeURIComponent(ReservedNodeId)) + '&TargetReservedNodeOfferingId=' + (TargetReservedNodeOfferingId == null ? '' : encodeURIComponent(TargetReservedNodeOfferingId)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Adds an inbound (ingress) rule to an Amazon Redshift security group. Depending on whether the application accessing your cluster is running on the Internet or an Amazon EC2 instance, you can authorize inbound access to either a Classless Interdomain Routing (CIDR)/Internet Protocol (IP) range or to an Amazon EC2 security group. You can add as many as 20 ingress rules to an Amazon Redshift security group.</p> <p>If you authorize access to an Amazon EC2 security group, specify <i>EC2SecurityGroupName</i> and <i>EC2SecurityGroupOwnerId</i>. The Amazon EC2 security group and Amazon Redshift cluster must be in the same AWS Region. </p> <p>If you authorize access to a CIDR/IP address range, specify <i>CIDRIP</i>. For an overview of CIDR blocks, see the Wikipedia article on <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless Inter-Domain Routing</a>. </p> <p>You must also associate the security group with a cluster so that clients running on these IP addresses or the EC2 instance are authorized to connect to the cluster. For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Working with Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
		 * Get /#Action=AuthorizeClusterSecurityGroupIngress
		 * @param {string} ClusterSecurityGroupName The name of the security group to which the ingress rule is added.
		 * @param {string} CIDRIP The IP range to be added the Amazon Redshift security group.
		 * @param {string} EC2SecurityGroupName The EC2 security group to be added the Amazon Redshift security group.
		 * @param {string} EC2SecurityGroupOwnerId <p>The AWS account number of the owner of the security group specified by the <i>EC2SecurityGroupName</i> parameter. The AWS Access Key ID is not an acceptable value. </p> <p>Example: <code>111122223333</code> </p>
		 * @return {void} Success
		 */
		GET_AuthorizeClusterSecurityGroupIngress(ClusterSecurityGroupName: string, CIDRIP: string, EC2SecurityGroupName: string, EC2SecurityGroupOwnerId: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=AuthorizeClusterSecurityGroupIngress?ClusterSecurityGroupName=' + (ClusterSecurityGroupName == null ? '' : encodeURIComponent(ClusterSecurityGroupName)) + '&CIDRIP=' + (CIDRIP == null ? '' : encodeURIComponent(CIDRIP)) + '&EC2SecurityGroupName=' + (EC2SecurityGroupName == null ? '' : encodeURIComponent(EC2SecurityGroupName)) + '&EC2SecurityGroupOwnerId=' + (EC2SecurityGroupOwnerId == null ? '' : encodeURIComponent(EC2SecurityGroupOwnerId)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Authorizes the specified AWS customer account to restore the specified snapshot.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
		 * Get /#Action=AuthorizeSnapshotAccess
		 * @param {string} SnapshotIdentifier The identifier of the snapshot the account is authorized to restore.
		 * @param {string} SnapshotClusterIdentifier The identifier of the cluster the snapshot was created from. This parameter is required if your IAM user has a policy containing a snapshot resource element that specifies anything other than * for the cluster name.
		 * @param {string} AccountWithRestoreAccess <p>The identifier of the AWS customer account authorized to restore the specified snapshot.</p> <p>To share a snapshot with AWS support, specify amazon-redshift-support.</p>
		 * @return {void} Success
		 */
		GET_AuthorizeSnapshotAccess(SnapshotIdentifier: string, SnapshotClusterIdentifier: string, AccountWithRestoreAccess: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=AuthorizeSnapshotAccess?SnapshotIdentifier=' + (SnapshotIdentifier == null ? '' : encodeURIComponent(SnapshotIdentifier)) + '&SnapshotClusterIdentifier=' + (SnapshotClusterIdentifier == null ? '' : encodeURIComponent(SnapshotClusterIdentifier)) + '&AccountWithRestoreAccess=' + (AccountWithRestoreAccess == null ? '' : encodeURIComponent(AccountWithRestoreAccess)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes a set of cluster snapshots.
		 * Get /#Action=BatchDeleteClusterSnapshots
		 * @param {Array<DeleteClusterSnapshotMessage>} Identifiers A list of identifiers for the snapshots that you want to delete.
		 * @return {void} Success
		 */
		GET_BatchDeleteClusterSnapshots(Identifiers: Array<DeleteClusterSnapshotMessage>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=BatchDeleteClusterSnapshots?' + Identifiers.map(z => `Identifiers=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Modifies the settings for a set of cluster snapshots.
		 * Get /#Action=BatchModifyClusterSnapshots
		 * @param {Array<String>} SnapshotIdentifierList A list of snapshot identifiers you want to modify.
		 * @param {number} ManualSnapshotRetentionPeriod <p>The number of days that a manual snapshot is retained. If you specify the value -1, the manual snapshot is retained indefinitely.</p> <p>The number must be either -1 or an integer between 1 and 3,653.</p> <p>If you decrease the manual snapshot retention period from its current value, existing manual snapshots that fall outside of the new retention period will return an error. If you want to suppress the errors and delete the snapshots, use the force option. </p>
		 * @param {boolean} Force A boolean value indicating whether to override an exception if the retention period has passed. 
		 * @return {void} Success
		 */
		GET_BatchModifyClusterSnapshots(SnapshotIdentifierList: Array<String>, ManualSnapshotRetentionPeriod: number, Force: boolean, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=BatchModifyClusterSnapshots?' + SnapshotIdentifierList.map(z => `SnapshotIdentifierList=${z}`).join('&') + '&ManualSnapshotRetentionPeriod=' + ManualSnapshotRetentionPeriod + '&Force=' + Force + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Cancels a resize operation for a cluster.
		 * Get /#Action=CancelResize
		 * @param {string} ClusterIdentifier The unique identifier for the cluster that you want to cancel a resize operation for.
		 * @return {void} Success
		 */
		GET_CancelResize(ClusterIdentifier: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=CancelResize?ClusterIdentifier=' + (ClusterIdentifier == null ? '' : encodeURIComponent(ClusterIdentifier)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Copies the specified automated cluster snapshot to a new manual cluster snapshot. The source must be an automated snapshot and it must be in the available state.</p> <p>When you delete a cluster, Amazon Redshift deletes any automated snapshots of the cluster. Also, when the retention period of the snapshot expires, Amazon Redshift automatically deletes it. If you want to keep an automated snapshot for a longer period, you can make a manual copy of the snapshot. Manual snapshots are retained until you delete them.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
		 * Get /#Action=CopyClusterSnapshot
		 * @param {string} SourceSnapshotIdentifier <p>The identifier for the source snapshot.</p> <p>Constraints:</p> <ul> <li> <p>Must be the identifier for a valid automated snapshot whose state is <code>available</code>.</p> </li> </ul>
		 * @param {string} SourceSnapshotClusterIdentifier <p>The identifier of the cluster the source snapshot was created from. This parameter is required if your IAM user has a policy containing a snapshot resource element that specifies anything other than * for the cluster name.</p> <p>Constraints:</p> <ul> <li> <p>Must be the identifier for a valid cluster.</p> </li> </ul>
		 * @param {string} TargetSnapshotIdentifier <p>The identifier given to the new manual snapshot.</p> <p>Constraints:</p> <ul> <li> <p>Cannot be null, empty, or blank.</p> </li> <li> <p>Must contain from 1 to 255 alphanumeric characters or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> <li> <p>Must be unique for the AWS account that is making the request.</p> </li> </ul>
		 * @param {number} ManualSnapshotRetentionPeriod <p>The number of days that a manual snapshot is retained. If the value is -1, the manual snapshot is retained indefinitely. </p> <p>The value must be either -1 or an integer between 1 and 3,653.</p> <p>The default value is -1.</p>
		 * @return {void} Success
		 */
		GET_CopyClusterSnapshot(SourceSnapshotIdentifier: string, SourceSnapshotClusterIdentifier: string, TargetSnapshotIdentifier: string, ManualSnapshotRetentionPeriod: number, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=CopyClusterSnapshot?SourceSnapshotIdentifier=' + (SourceSnapshotIdentifier == null ? '' : encodeURIComponent(SourceSnapshotIdentifier)) + '&SourceSnapshotClusterIdentifier=' + (SourceSnapshotClusterIdentifier == null ? '' : encodeURIComponent(SourceSnapshotClusterIdentifier)) + '&TargetSnapshotIdentifier=' + (TargetSnapshotIdentifier == null ? '' : encodeURIComponent(TargetSnapshotIdentifier)) + '&ManualSnapshotRetentionPeriod=' + ManualSnapshotRetentionPeriod + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Creates a new cluster with the specified parameters.</p> <p>To create a cluster in Virtual Private Cloud (VPC), you must provide a cluster subnet group name. The cluster subnet group identifies the subnets of your VPC that Amazon Redshift uses when creating the cluster. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
		 * Get /#Action=CreateCluster
		 * @param {string} DBName <p>The name of the first database to be created when the cluster is created.</p> <p>To create additional databases after the cluster is created, connect to the cluster with a SQL client and use SQL commands to create a database. For more information, go to <a href="https://docs.aws.amazon.com/redshift/latest/dg/t_creating_database.html">Create a Database</a> in the Amazon Redshift Database Developer Guide. </p> <p>Default: <code>dev</code> </p> <p>Constraints:</p> <ul> <li> <p>Must contain 1 to 64 alphanumeric characters.</p> </li> <li> <p>Must contain only lowercase letters.</p> </li> <li> <p>Cannot be a word that is reserved by the service. A list of reserved words can be found in <a href="https://docs.aws.amazon.com/redshift/latest/dg/r_pg_keywords.html">Reserved Words</a> in the Amazon Redshift Database Developer Guide. </p> </li> </ul>
		 * @param {string} ClusterIdentifier <p>A unique identifier for the cluster. You use this identifier to refer to the cluster for any subsequent cluster operations such as deleting or modifying. The identifier also appears in the Amazon Redshift console.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 alphanumeric characters or hyphens.</p> </li> <li> <p>Alphabetic characters must be lowercase.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> <li> <p>Must be unique for all clusters within an AWS account.</p> </li> </ul> <p>Example: <code>myexamplecluster</code> </p>
		 * @param {string} ClusterType <p>The type of the cluster. When cluster type is specified as</p> <ul> <li> <p> <code>single-node</code>, the <b>NumberOfNodes</b> parameter is not required.</p> </li> <li> <p> <code>multi-node</code>, the <b>NumberOfNodes</b> parameter is required.</p> </li> </ul> <p>Valid Values: <code>multi-node</code> | <code>single-node</code> </p> <p>Default: <code>multi-node</code> </p>
		 * @param {string} NodeType <p>The node type to be provisioned for the cluster. For information about node types, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#how-many-nodes"> Working with Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p> <p>Valid Values: <code>ds2.xlarge</code> | <code>ds2.8xlarge</code> | <code>dc1.large</code> | <code>dc1.8xlarge</code> | <code>dc2.large</code> | <code>dc2.8xlarge</code> | <code>ra3.4xlarge</code> | <code>ra3.16xlarge</code> </p>
		 * @param {string} MasterUsername <p>The user name associated with the master user account for the cluster that is being created.</p> <p>Constraints:</p> <ul> <li> <p>Must be 1 - 128 alphanumeric characters. The user name can't be <code>PUBLIC</code>.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot be a reserved word. A list of reserved words can be found in <a href="https://docs.aws.amazon.com/redshift/latest/dg/r_pg_keywords.html">Reserved Words</a> in the Amazon Redshift Database Developer Guide. </p> </li> </ul>
		 * @param {string} MasterUserPassword <p>The password associated with the master user account for the cluster that is being created.</p> <p>Constraints:</p> <ul> <li> <p>Must be between 8 and 64 characters in length.</p> </li> <li> <p>Must contain at least one uppercase letter.</p> </li> <li> <p>Must contain at least one lowercase letter.</p> </li> <li> <p>Must contain one number.</p> </li> <li> <p>Can be any printable ASCII character (ASCII code 33 to 126) except ' (single quote), " (double quote), \, /, @, or space.</p> </li> </ul>
		 * @param {Array<String>} ClusterSecurityGroups <p>A list of security groups to be associated with this cluster.</p> <p>Default: The default cluster security group for Amazon Redshift.</p>
		 * @param {Array<String>} VpcSecurityGroupIds <p>A list of Virtual Private Cloud (VPC) security groups to be associated with the cluster.</p> <p>Default: The default VPC security group is associated with the cluster.</p>
		 * @param {string} ClusterSubnetGroupName <p>The name of a cluster subnet group to be associated with this cluster.</p> <p>If this parameter is not provided the resulting cluster will be deployed outside virtual private cloud (VPC).</p>
		 * @param {string} AvailabilityZone <p>The EC2 Availability Zone (AZ) in which you want Amazon Redshift to provision the cluster. For example, if you have several EC2 instances running in a specific Availability Zone, then you might want the cluster to be provisioned in the same zone in order to decrease network latency.</p> <p>Default: A random, system-chosen Availability Zone in the region that is specified by the endpoint.</p> <p>Example: <code>us-east-2d</code> </p> <p>Constraint: The specified Availability Zone must be in the same region as the current endpoint.</p>
		 * @param {string} PreferredMaintenanceWindow <p>The weekly time range (in UTC) during which automated cluster maintenance can occur.</p> <p> Format: <code>ddd:hh24:mi-ddd:hh24:mi</code> </p> <p> Default: A 30-minute window selected at random from an 8-hour block of time per region, occurring on a random day of the week. For more information about the time blocks for each region, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#rs-maintenance-windows">Maintenance Windows</a> in Amazon Redshift Cluster Management Guide.</p> <p>Valid Days: Mon | Tue | Wed | Thu | Fri | Sat | Sun</p> <p>Constraints: Minimum 30-minute window.</p>
		 * @param {string} ClusterParameterGroupName <p>The name of the parameter group to be associated with this cluster.</p> <p>Default: The default Amazon Redshift cluster parameter group. For information about the default parameter group, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Working with Amazon Redshift Parameter Groups</a> </p> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 255 alphanumeric characters or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul>
		 * @param {number} AutomatedSnapshotRetentionPeriod <p>The number of days that automated snapshots are retained. If the value is 0, automated snapshots are disabled. Even if automated snapshots are disabled, you can still create manual snapshots when you want with <a>CreateClusterSnapshot</a>. </p> <p>Default: <code>1</code> </p> <p>Constraints: Must be a value from 0 to 35.</p>
		 * @param {number} ManualSnapshotRetentionPeriod <p>The default number of days to retain a manual snapshot. If the value is -1, the snapshot is retained indefinitely. This setting doesn't change the retention period of existing snapshots.</p> <p>The value must be either -1 or an integer between 1 and 3,653.</p>
		 * @param {number} Port <p>The port number on which the cluster accepts incoming connections.</p> <p>The cluster is accessible only via the JDBC and ODBC connection strings. Part of the connection string requires the port on which the cluster will listen for incoming connections.</p> <p>Default: <code>5439</code> </p> <p>Valid Values: <code>1150-65535</code> </p>
		 * @param {string} ClusterVersion <p>The version of the Amazon Redshift engine software that you want to deploy on the cluster.</p> <p>The version selected runs on all the nodes in the cluster.</p> <p>Constraints: Only version 1.0 is currently available.</p> <p>Example: <code>1.0</code> </p>
		 * @param {boolean} AllowVersionUpgrade <p>If <code>true</code>, major version upgrades can be applied during the maintenance window to the Amazon Redshift engine that is running on the cluster.</p> <p>When a new major version of the Amazon Redshift engine is released, you can request that the service automatically apply upgrades during the maintenance window to the Amazon Redshift engine that is running on your cluster.</p> <p>Default: <code>true</code> </p>
		 * @param {number} NumberOfNodes <p>The number of compute nodes in the cluster. This parameter is required when the <b>ClusterType</b> parameter is specified as <code>multi-node</code>. </p> <p>For information about determining how many nodes you need, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#how-many-nodes"> Working with Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p> <p>If you don't specify this parameter, you get a single-node cluster. When requesting a multi-node cluster, you must specify the number of nodes that you want in the cluster.</p> <p>Default: <code>1</code> </p> <p>Constraints: Value must be at least 1 and no more than 100.</p>
		 * @param {boolean} PubliclyAccessible If <code>true</code>, the cluster can be accessed from a public network. 
		 * @param {boolean} Encrypted <p>If <code>true</code>, the data in the cluster is encrypted at rest. </p> <p>Default: false</p>
		 * @param {string} HsmClientCertificateIdentifier Specifies the name of the HSM client certificate the Amazon Redshift cluster uses to retrieve the data encryption keys stored in an HSM.
		 * @param {string} HsmConfigurationIdentifier Specifies the name of the HSM configuration that contains the information the Amazon Redshift cluster can use to retrieve and store keys in an HSM.
		 * @param {string} ElasticIp <p>The Elastic IP (EIP) address for the cluster.</p> <p>Constraints: The cluster must be provisioned in EC2-VPC and publicly-accessible through an Internet gateway. For more information about provisioning clusters in EC2-VPC, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#cluster-platforms">Supported Platforms to Launch Your Cluster</a> in the Amazon Redshift Cluster Management Guide.</p>
		 * @param {Array<Tag>} Tags A list of tag instances.
		 * @param {string} KmsKeyId The AWS Key Management Service (KMS) key ID of the encryption key that you want to use to encrypt data in the cluster.
		 * @param {boolean} EnhancedVpcRouting <p>An option that specifies whether to create the cluster with enhanced VPC routing enabled. To create a cluster that uses enhanced VPC routing, the cluster must be in a VPC. For more information, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/enhanced-vpc-routing.html">Enhanced VPC Routing</a> in the Amazon Redshift Cluster Management Guide.</p> <p>If this option is <code>true</code>, enhanced VPC routing is enabled. </p> <p>Default: false</p>
		 * @param {string} AdditionalInfo Reserved.
		 * @param {Array<String>} IamRoles <p>A list of AWS Identity and Access Management (IAM) roles that can be used by the cluster to access other AWS services. You must supply the IAM roles in their Amazon Resource Name (ARN) format. You can supply up to 10 IAM roles in a single request.</p> <p>A cluster can have up to 10 IAM roles associated with it at any time.</p>
		 * @param {string} MaintenanceTrackName An optional parameter for the name of the maintenance track for the cluster. If you don't provide a maintenance track name, the cluster is assigned to the <code>current</code> track.
		 * @param {string} SnapshotScheduleIdentifier A unique identifier for the snapshot schedule.
		 * @return {void} Success
		 */
		GET_CreateCluster(DBName: string, ClusterIdentifier: string, ClusterType: string, NodeType: string, MasterUsername: string, MasterUserPassword: string, ClusterSecurityGroups: Array<String>, VpcSecurityGroupIds: Array<String>, ClusterSubnetGroupName: string, AvailabilityZone: string, PreferredMaintenanceWindow: string, ClusterParameterGroupName: string, AutomatedSnapshotRetentionPeriod: number, ManualSnapshotRetentionPeriod: number, Port: number, ClusterVersion: string, AllowVersionUpgrade: boolean, NumberOfNodes: number, PubliclyAccessible: boolean, Encrypted: boolean, HsmClientCertificateIdentifier: string, HsmConfigurationIdentifier: string, ElasticIp: string, Tags: Array<Tag>, KmsKeyId: string, EnhancedVpcRouting: boolean, AdditionalInfo: string, IamRoles: Array<String>, MaintenanceTrackName: string, SnapshotScheduleIdentifier: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=CreateCluster?DBName=' + (DBName == null ? '' : encodeURIComponent(DBName)) + '&ClusterIdentifier=' + (ClusterIdentifier == null ? '' : encodeURIComponent(ClusterIdentifier)) + '&ClusterType=' + (ClusterType == null ? '' : encodeURIComponent(ClusterType)) + '&NodeType=' + (NodeType == null ? '' : encodeURIComponent(NodeType)) + '&MasterUsername=' + (MasterUsername == null ? '' : encodeURIComponent(MasterUsername)) + '&MasterUserPassword=' + (MasterUserPassword == null ? '' : encodeURIComponent(MasterUserPassword)) + '&' + ClusterSecurityGroups.map(z => `ClusterSecurityGroups=${z}`).join('&') + '&' + VpcSecurityGroupIds.map(z => `VpcSecurityGroupIds=${z}`).join('&') + '&ClusterSubnetGroupName=' + (ClusterSubnetGroupName == null ? '' : encodeURIComponent(ClusterSubnetGroupName)) + '&AvailabilityZone=' + (AvailabilityZone == null ? '' : encodeURIComponent(AvailabilityZone)) + '&PreferredMaintenanceWindow=' + (PreferredMaintenanceWindow == null ? '' : encodeURIComponent(PreferredMaintenanceWindow)) + '&ClusterParameterGroupName=' + (ClusterParameterGroupName == null ? '' : encodeURIComponent(ClusterParameterGroupName)) + '&AutomatedSnapshotRetentionPeriod=' + AutomatedSnapshotRetentionPeriod + '&ManualSnapshotRetentionPeriod=' + ManualSnapshotRetentionPeriod + '&Port=' + Port + '&ClusterVersion=' + (ClusterVersion == null ? '' : encodeURIComponent(ClusterVersion)) + '&AllowVersionUpgrade=' + AllowVersionUpgrade + '&NumberOfNodes=' + NumberOfNodes + '&PubliclyAccessible=' + PubliclyAccessible + '&Encrypted=' + Encrypted + '&HsmClientCertificateIdentifier=' + (HsmClientCertificateIdentifier == null ? '' : encodeURIComponent(HsmClientCertificateIdentifier)) + '&HsmConfigurationIdentifier=' + (HsmConfigurationIdentifier == null ? '' : encodeURIComponent(HsmConfigurationIdentifier)) + '&ElasticIp=' + (ElasticIp == null ? '' : encodeURIComponent(ElasticIp)) + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&KmsKeyId=' + (KmsKeyId == null ? '' : encodeURIComponent(KmsKeyId)) + '&EnhancedVpcRouting=' + EnhancedVpcRouting + '&AdditionalInfo=' + (AdditionalInfo == null ? '' : encodeURIComponent(AdditionalInfo)) + '&' + IamRoles.map(z => `IamRoles=${z}`).join('&') + '&MaintenanceTrackName=' + (MaintenanceTrackName == null ? '' : encodeURIComponent(MaintenanceTrackName)) + '&SnapshotScheduleIdentifier=' + (SnapshotScheduleIdentifier == null ? '' : encodeURIComponent(SnapshotScheduleIdentifier)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Creates an Amazon Redshift parameter group.</p> <p>Creating parameter groups is independent of creating clusters. You can associate a cluster with a parameter group when you create the cluster. You can also associate an existing cluster with a parameter group after the cluster is created by using <a>ModifyCluster</a>. </p> <p>Parameters in the parameter group define specific behavior that applies to the databases you create on the cluster. For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
		 * Get /#Action=CreateClusterParameterGroup
		 * @param {string} ParameterGroupName <p>The name of the cluster parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 255 alphanumeric characters or hyphens</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> <li> <p>Must be unique withing your AWS account.</p> </li> </ul> <note> <p>This value is stored as a lower-case string.</p> </note>
		 * @param {string} ParameterGroupFamily <p>The Amazon Redshift engine version to which the cluster parameter group applies. The cluster engine version determines the set of parameters.</p> <p>To get a list of valid parameter group family names, you can call <a>DescribeClusterParameterGroups</a>. By default, Amazon Redshift returns a list of all the parameter groups that are owned by your AWS account, including the default parameter groups for each Amazon Redshift engine version. The parameter group family names associated with the default parameter groups provide you the valid values. For example, a valid family name is "redshift-1.0". </p>
		 * @param {string} Description A description of the parameter group.
		 * @param {Array<Tag>} Tags A list of tag instances.
		 * @return {void} Success
		 */
		GET_CreateClusterParameterGroup(ParameterGroupName: string, ParameterGroupFamily: string, Description: string, Tags: Array<Tag>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=CreateClusterParameterGroup?ParameterGroupName=' + (ParameterGroupName == null ? '' : encodeURIComponent(ParameterGroupName)) + '&ParameterGroupFamily=' + (ParameterGroupFamily == null ? '' : encodeURIComponent(ParameterGroupFamily)) + '&Description=' + (Description == null ? '' : encodeURIComponent(Description)) + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Creates a new Amazon Redshift security group. You use security groups to control access to non-VPC clusters.</p> <p> For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
		 * Get /#Action=CreateClusterSecurityGroup
		 * @param {string} ClusterSecurityGroupName <p>The name for the security group. Amazon Redshift stores the value as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain no more than 255 alphanumeric characters or hyphens.</p> </li> <li> <p>Must not be "Default".</p> </li> <li> <p>Must be unique for all security groups that are created by your AWS account.</p> </li> </ul> <p>Example: <code>examplesecuritygroup</code> </p>
		 * @param {string} Description A description for the security group.
		 * @param {Array<Tag>} Tags A list of tag instances.
		 * @return {void} Success
		 */
		GET_CreateClusterSecurityGroup(ClusterSecurityGroupName: string, Description: string, Tags: Array<Tag>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=CreateClusterSecurityGroup?ClusterSecurityGroupName=' + (ClusterSecurityGroupName == null ? '' : encodeURIComponent(ClusterSecurityGroupName)) + '&Description=' + (Description == null ? '' : encodeURIComponent(Description)) + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Creates a manual snapshot of the specified cluster. The cluster must be in the <code>available</code> state. </p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
		 * Get /#Action=CreateClusterSnapshot
		 * @param {string} SnapshotIdentifier <p>A unique identifier for the snapshot that you are requesting. This identifier must be unique for all snapshots within the AWS account.</p> <p>Constraints:</p> <ul> <li> <p>Cannot be null, empty, or blank</p> </li> <li> <p>Must contain from 1 to 255 alphanumeric characters or hyphens</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> </ul> <p>Example: <code>my-snapshot-id</code> </p>
		 * @param {string} ClusterIdentifier The cluster identifier for which you want a snapshot.
		 * @param {number} ManualSnapshotRetentionPeriod <p>The number of days that a manual snapshot is retained. If the value is -1, the manual snapshot is retained indefinitely. </p> <p>The value must be either -1 or an integer between 1 and 3,653.</p> <p>The default value is -1.</p>
		 * @param {Array<Tag>} Tags A list of tag instances.
		 * @return {void} Success
		 */
		GET_CreateClusterSnapshot(SnapshotIdentifier: string, ClusterIdentifier: string, ManualSnapshotRetentionPeriod: number, Tags: Array<Tag>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=CreateClusterSnapshot?SnapshotIdentifier=' + (SnapshotIdentifier == null ? '' : encodeURIComponent(SnapshotIdentifier)) + '&ClusterIdentifier=' + (ClusterIdentifier == null ? '' : encodeURIComponent(ClusterIdentifier)) + '&ManualSnapshotRetentionPeriod=' + ManualSnapshotRetentionPeriod + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Creates a new Amazon Redshift subnet group. You must provide a list of one or more subnets in your existing Amazon Virtual Private Cloud (Amazon VPC) when creating Amazon Redshift subnet group.</p> <p> For information about subnet groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-cluster-subnet-groups.html">Amazon Redshift Cluster Subnet Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
		 * Get /#Action=CreateClusterSubnetGroup
		 * @param {string} ClusterSubnetGroupName <p>The name for the subnet group. Amazon Redshift stores the value as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain no more than 255 alphanumeric characters or hyphens.</p> </li> <li> <p>Must not be "Default".</p> </li> <li> <p>Must be unique for all subnet groups that are created by your AWS account.</p> </li> </ul> <p>Example: <code>examplesubnetgroup</code> </p>
		 * @param {string} Description A description for the subnet group.
		 * @param {Array<String>} SubnetIds An array of VPC subnet IDs. A maximum of 20 subnets can be modified in a single request.
		 * @param {Array<Tag>} Tags A list of tag instances.
		 * @return {void} Success
		 */
		GET_CreateClusterSubnetGroup(ClusterSubnetGroupName: string, Description: string, SubnetIds: Array<String>, Tags: Array<Tag>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=CreateClusterSubnetGroup?ClusterSubnetGroupName=' + (ClusterSubnetGroupName == null ? '' : encodeURIComponent(ClusterSubnetGroupName)) + '&Description=' + (Description == null ? '' : encodeURIComponent(Description)) + '&' + SubnetIds.map(z => `SubnetIds=${z}`).join('&') + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Creates an Amazon Redshift event notification subscription. This action requires an ARN (Amazon Resource Name) of an Amazon SNS topic created by either the Amazon Redshift console, the Amazon SNS console, or the Amazon SNS API. To obtain an ARN with Amazon SNS, you must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in the SNS console.</p> <p>You can specify the source type, and lists of Amazon Redshift source IDs, event categories, and event severities. Notifications will be sent for all events you want that match those criteria. For example, you can specify source type = cluster, source ID = my-cluster-1 and mycluster2, event categories = Availability, Backup, and severity = ERROR. The subscription will only send notifications for those ERROR events in the Availability and Backup categories for the specified clusters.</p> <p>If you specify both the source type and source IDs, such as source type = cluster and source identifier = my-cluster-1, notifications will be sent for all the cluster events for my-cluster-1. If you specify a source type but do not specify a source identifier, you will receive notice of the events for the objects of that type in your AWS account. If you do not specify either the SourceType nor the SourceIdentifier, you will be notified of events generated from all Amazon Redshift sources belonging to your AWS account. You must specify a source type if you specify a source ID.</p>
		 * Get /#Action=CreateEventSubscription
		 * @param {string} SubscriptionName <p>The name of the event subscription to be created.</p> <p>Constraints:</p> <ul> <li> <p>Cannot be null, empty, or blank.</p> </li> <li> <p>Must contain from 1 to 255 alphanumeric characters or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul>
		 * @param {string} SnsTopicArn The Amazon Resource Name (ARN) of the Amazon SNS topic used to transmit the event notifications. The ARN is created by Amazon SNS when you create a topic and subscribe to it.
		 * @param {string} SourceType <p>The type of source that will be generating the events. For example, if you want to be notified of events generated by a cluster, you would set this parameter to cluster. If this value is not specified, events are returned for all Amazon Redshift objects in your AWS account. You must specify a source type in order to specify source IDs.</p> <p>Valid values: cluster, cluster-parameter-group, cluster-security-group, cluster-snapshot, and scheduled-action.</p>
		 * @param {Array<String>} SourceIds <p>A list of one or more identifiers of Amazon Redshift source objects. All of the objects must be of the same type as was specified in the source type parameter. The event subscription will return only events generated by the specified objects. If not specified, then events are returned for all objects within the source type specified.</p> <p>Example: my-cluster-1, my-cluster-2</p> <p>Example: my-snapshot-20131010</p>
		 * @param {Array<String>} EventCategories <p>Specifies the Amazon Redshift event categories to be published by the event notification subscription.</p> <p>Values: configuration, management, monitoring, security</p>
		 * @param {string} Severity <p>Specifies the Amazon Redshift event severity to be published by the event notification subscription.</p> <p>Values: ERROR, INFO</p>
		 * @param {boolean} Enabled A boolean value; set to <code>true</code> to activate the subscription, and set to <code>false</code> to create the subscription but not activate it. 
		 * @param {Array<Tag>} Tags A list of tag instances.
		 * @return {void} Success
		 */
		GET_CreateEventSubscription(SubscriptionName: string, SnsTopicArn: string, SourceType: string, SourceIds: Array<String>, EventCategories: Array<String>, Severity: string, Enabled: boolean, Tags: Array<Tag>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=CreateEventSubscription?SubscriptionName=' + (SubscriptionName == null ? '' : encodeURIComponent(SubscriptionName)) + '&SnsTopicArn=' + (SnsTopicArn == null ? '' : encodeURIComponent(SnsTopicArn)) + '&SourceType=' + (SourceType == null ? '' : encodeURIComponent(SourceType)) + '&' + SourceIds.map(z => `SourceIds=${z}`).join('&') + '&' + EventCategories.map(z => `EventCategories=${z}`).join('&') + '&Severity=' + (Severity == null ? '' : encodeURIComponent(Severity)) + '&Enabled=' + Enabled + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Creates an HSM client certificate that an Amazon Redshift cluster will use to connect to the client's HSM in order to store and retrieve the keys used to encrypt the cluster databases.</p> <p>The command returns a public key, which you must store in the HSM. In addition to creating the HSM certificate, you must create an Amazon Redshift HSM configuration that provides a cluster the information needed to store and use encryption keys in the HSM. For more information, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-HSM.html">Hardware Security Modules</a> in the Amazon Redshift Cluster Management Guide.</p>
		 * Get /#Action=CreateHsmClientCertificate
		 * @param {string} HsmClientCertificateIdentifier The identifier to be assigned to the new HSM client certificate that the cluster will use to connect to the HSM to use the database encryption keys.
		 * @param {Array<Tag>} Tags A list of tag instances.
		 * @return {void} Success
		 */
		GET_CreateHsmClientCertificate(HsmClientCertificateIdentifier: string, Tags: Array<Tag>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=CreateHsmClientCertificate?HsmClientCertificateIdentifier=' + (HsmClientCertificateIdentifier == null ? '' : encodeURIComponent(HsmClientCertificateIdentifier)) + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Creates an HSM configuration that contains the information required by an Amazon Redshift cluster to store and use database encryption keys in a Hardware Security Module (HSM). After creating the HSM configuration, you can specify it as a parameter when creating a cluster. The cluster will then store its encryption keys in the HSM.</p> <p>In addition to creating an HSM configuration, you must also create an HSM client certificate. For more information, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-HSM.html">Hardware Security Modules</a> in the Amazon Redshift Cluster Management Guide.</p>
		 * Get /#Action=CreateHsmConfiguration
		 * @param {string} HsmConfigurationIdentifier The identifier to be assigned to the new Amazon Redshift HSM configuration.
		 * @param {string} Description A text description of the HSM configuration to be created.
		 * @param {string} HsmIpAddress The IP address that the Amazon Redshift cluster must use to access the HSM.
		 * @param {string} HsmPartitionName The name of the partition in the HSM where the Amazon Redshift clusters will store their database encryption keys.
		 * @param {string} HsmPartitionPassword The password required to access the HSM partition.
		 * @param {string} HsmServerPublicCertificate The HSMs public certificate file. When using Cloud HSM, the file name is server.pem.
		 * @param {Array<Tag>} Tags A list of tag instances.
		 * @return {void} Success
		 */
		GET_CreateHsmConfiguration(HsmConfigurationIdentifier: string, Description: string, HsmIpAddress: string, HsmPartitionName: string, HsmPartitionPassword: string, HsmServerPublicCertificate: string, Tags: Array<Tag>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=CreateHsmConfiguration?HsmConfigurationIdentifier=' + (HsmConfigurationIdentifier == null ? '' : encodeURIComponent(HsmConfigurationIdentifier)) + '&Description=' + (Description == null ? '' : encodeURIComponent(Description)) + '&HsmIpAddress=' + (HsmIpAddress == null ? '' : encodeURIComponent(HsmIpAddress)) + '&HsmPartitionName=' + (HsmPartitionName == null ? '' : encodeURIComponent(HsmPartitionName)) + '&HsmPartitionPassword=' + (HsmPartitionPassword == null ? '' : encodeURIComponent(HsmPartitionPassword)) + '&HsmServerPublicCertificate=' + (HsmServerPublicCertificate == null ? '' : encodeURIComponent(HsmServerPublicCertificate)) + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Creates a scheduled action. A scheduled action contains a schedule and an Amazon Redshift API action. For example, you can create a schedule of when to run the <code>ResizeCluster</code> API operation.
		 * Get /#Action=CreateScheduledAction
		 * @param {string} ScheduledActionName The name of the scheduled action. The name must be unique within an account. For more information about this parameter, see <a>ScheduledAction</a>. 
		 * @param {string} TargetAction A JSON format string of the Amazon Redshift API operation with input parameters. For more information about this parameter, see <a>ScheduledAction</a>. 
		 * @param {string} Schedule The schedule in <code>at( )</code> or <code>cron( )</code> format. For more information about this parameter, see <a>ScheduledAction</a>.
		 * @param {string} IamRole The IAM role to assume to run the target action. For more information about this parameter, see <a>ScheduledAction</a>. 
		 * @param {string} ScheduledActionDescription The description of the scheduled action. 
		 * @param {Date} StartTime The start time in UTC of the scheduled action. Before this time, the scheduled action does not trigger. For more information about this parameter, see <a>ScheduledAction</a>.
		 * @param {Date} EndTime The end time in UTC of the scheduled action. After this time, the scheduled action does not trigger. For more information about this parameter, see <a>ScheduledAction</a>. 
		 * @param {boolean} Enable If true, the schedule is enabled. If false, the scheduled action does not trigger. For more information about <code>state</code> of the scheduled action, see <a>ScheduledAction</a>. 
		 * @return {void} Success
		 */
		GET_CreateScheduledAction(ScheduledActionName: string, TargetAction: string, Schedule: string, IamRole: string, ScheduledActionDescription: string, StartTime: Date, EndTime: Date, Enable: boolean, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=CreateScheduledAction?ScheduledActionName=' + (ScheduledActionName == null ? '' : encodeURIComponent(ScheduledActionName)) + '&TargetAction=' + (TargetAction == null ? '' : encodeURIComponent(TargetAction)) + '&Schedule=' + (Schedule == null ? '' : encodeURIComponent(Schedule)) + '&IamRole=' + (IamRole == null ? '' : encodeURIComponent(IamRole)) + '&ScheduledActionDescription=' + (ScheduledActionDescription == null ? '' : encodeURIComponent(ScheduledActionDescription)) + '&StartTime=' + StartTime.toISOString() + '&EndTime=' + EndTime.toISOString() + '&Enable=' + Enable + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Creates a snapshot copy grant that permits Amazon Redshift to use a customer master key (CMK) from AWS Key Management Service (AWS KMS) to encrypt copied snapshots in a destination region.</p> <p> For more information about managing snapshot copy grants, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html">Amazon Redshift Database Encryption</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
		 * Get /#Action=CreateSnapshotCopyGrant
		 * @param {string} SnapshotCopyGrantName <p>The name of the snapshot copy grant. This name must be unique in the region for the AWS account.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 alphanumeric characters or hyphens.</p> </li> <li> <p>Alphabetic characters must be lowercase.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> <li> <p>Must be unique for all clusters within an AWS account.</p> </li> </ul>
		 * @param {string} KmsKeyId The unique identifier of the customer master key (CMK) to which to grant Amazon Redshift permission. If no key is specified, the default key is used.
		 * @param {Array<Tag>} Tags A list of tag instances.
		 * @return {void} Success
		 */
		GET_CreateSnapshotCopyGrant(SnapshotCopyGrantName: string, KmsKeyId: string, Tags: Array<Tag>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=CreateSnapshotCopyGrant?SnapshotCopyGrantName=' + (SnapshotCopyGrantName == null ? '' : encodeURIComponent(SnapshotCopyGrantName)) + '&KmsKeyId=' + (KmsKeyId == null ? '' : encodeURIComponent(KmsKeyId)) + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a snapshot schedule that can be associated to a cluster and which overrides the default system backup schedule.
		 * Get /#Action=CreateSnapshotSchedule
		 * @param {Array<String>} ScheduleDefinitions The definition of the snapshot schedule. The definition is made up of schedule expressions, for example "cron(30 12 *)" or "rate(12 hours)". 
		 * @param {string} ScheduleIdentifier A unique identifier for a snapshot schedule. Only alphanumeric characters are allowed for the identifier.
		 * @param {string} ScheduleDescription The description of the snapshot schedule.
		 * @param {Array<Tag>} Tags An optional set of tags you can use to search for the schedule.
		 * @param {boolean} DryRun <p/>
		 * @param {number} NextInvocations <p/>
		 * @return {void} Success
		 */
		GET_CreateSnapshotSchedule(ScheduleDefinitions: Array<String>, ScheduleIdentifier: string, ScheduleDescription: string, Tags: Array<Tag>, DryRun: boolean, NextInvocations: number, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=CreateSnapshotSchedule?' + ScheduleDefinitions.map(z => `ScheduleDefinitions=${z}`).join('&') + '&ScheduleIdentifier=' + (ScheduleIdentifier == null ? '' : encodeURIComponent(ScheduleIdentifier)) + '&ScheduleDescription=' + (ScheduleDescription == null ? '' : encodeURIComponent(ScheduleDescription)) + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&DryRun=' + DryRun + '&NextInvocations=' + NextInvocations + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Adds tags to a cluster.</p> <p>A resource can have up to 50 tags. If you try to create more than 50 tags for a resource, you will receive an error and the attempt will fail.</p> <p>If you specify a key that already exists for the resource, the value for that key will be updated with the new value.</p>
		 * Get /#Action=CreateTags
		 * @param {string} ResourceName The Amazon Resource Name (ARN) to which you want to add the tag or tags. For example, <code>arn:aws:redshift:us-east-2:123456789:cluster:t1</code>. 
		 * @param {Array<Tag>} Tags One or more name/value pairs to add as tags to the specified resource. Each tag name is passed in with the parameter <code>Key</code> and the corresponding value is passed in with the parameter <code>Value</code>. The <code>Key</code> and <code>Value</code> parameters are separated by a comma (,). Separate multiple tags with a space. For example, <code>--tags "Key"="owner","Value"="admin" "Key"="environment","Value"="test" "Key"="version","Value"="1.0"</code>. 
		 * @return {void} Success
		 */
		GET_CreateTags(ResourceName: string, Tags: Array<Tag>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=CreateTags?ResourceName=' + (ResourceName == null ? '' : encodeURIComponent(ResourceName)) + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Creates a usage limit for a specified Amazon Redshift feature on a cluster. The usage limit is identified by the returned usage limit identifier.
		 * Get /#Action=CreateUsageLimit
		 * @param {string} ClusterIdentifier The identifier of the cluster that you want to limit usage.
		 * @param {UsageLimitFeatureType} FeatureType The Amazon Redshift feature that you want to limit.
		 * @param {UsageLimitLimitType} LimitType The type of limit. Depending on the feature type, this can be based on a time duration or data size. If <code>FeatureType</code> is <code>spectrum</code>, then <code>LimitType</code> must be <code>data-scanned</code>. If <code>FeatureType</code> is <code>concurrency-scaling</code>, then <code>LimitType</code> must be <code>time</code>. 
		 * @param {number} Amount The limit amount. If time-based, this amount is in minutes. If data-based, this amount is in terabytes (TB). The value must be a positive number. 
		 * @param {UsageLimitPeriod} Period The time period that the amount applies to. A <code>weekly</code> period begins on Sunday. The default is <code>monthly</code>. 
		 * @param {UsageLimitBreachAction} BreachAction The action that Amazon Redshift takes when the limit is reached. The default is log. For more information about this parameter, see <a>UsageLimit</a>.
		 * @param {Array<Tag>} Tags A list of tag instances.
		 * @return {void} Success
		 */
		GET_CreateUsageLimit(ClusterIdentifier: string, FeatureType: UsageLimitFeatureType, LimitType: UsageLimitLimitType, Amount: number, Period: UsageLimitPeriod, BreachAction: UsageLimitBreachAction, Tags: Array<Tag>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=CreateUsageLimit?ClusterIdentifier=' + (ClusterIdentifier == null ? '' : encodeURIComponent(ClusterIdentifier)) + '&FeatureType=' + FeatureType + '&LimitType=' + LimitType + '&Amount=' + Amount + '&Period=' + Period + '&BreachAction=' + BreachAction + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Deletes a previously provisioned cluster without its final snapshot being created. A successful response from the web service indicates that the request was received correctly. Use <a>DescribeClusters</a> to monitor the status of the deletion. The delete operation cannot be canceled or reverted once submitted. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you want to shut down the cluster and retain it for future use, set <i>SkipFinalClusterSnapshot</i> to <code>false</code> and specify a name for <i>FinalClusterSnapshotIdentifier</i>. You can later restore this snapshot to resume using the cluster. If a final cluster snapshot is requested, the status of the cluster will be "final-snapshot" while the snapshot is being taken, then it's "deleting" once Amazon Redshift begins deleting the cluster. </p> <p> For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
		 * Get /#Action=DeleteCluster
		 * @param {string} ClusterIdentifier <p>The identifier of the cluster to be deleted.</p> <p>Constraints:</p> <ul> <li> <p>Must contain lowercase characters.</p> </li> <li> <p>Must contain from 1 to 63 alphanumeric characters or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul>
		 * @param {boolean} SkipFinalClusterSnapshot <p>Determines whether a final snapshot of the cluster is created before Amazon Redshift deletes the cluster. If <code>true</code>, a final cluster snapshot is not created. If <code>false</code>, a final cluster snapshot is created before the cluster is deleted. </p> <note> <p>The <i>FinalClusterSnapshotIdentifier</i> parameter must be specified if <i>SkipFinalClusterSnapshot</i> is <code>false</code>.</p> </note> <p>Default: <code>false</code> </p>
		 * @param {string} FinalClusterSnapshotIdentifier <p>The identifier of the final snapshot that is to be created immediately before deleting the cluster. If this parameter is provided, <i>SkipFinalClusterSnapshot</i> must be <code>false</code>. </p> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 255 alphanumeric characters.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul>
		 * @param {number} FinalClusterSnapshotRetentionPeriod <p>The number of days that a manual snapshot is retained. If the value is -1, the manual snapshot is retained indefinitely.</p> <p>The value must be either -1 or an integer between 1 and 3,653.</p> <p>The default value is -1.</p>
		 * @return {void} Success
		 */
		GET_DeleteCluster(ClusterIdentifier: string, SkipFinalClusterSnapshot: boolean, FinalClusterSnapshotIdentifier: string, FinalClusterSnapshotRetentionPeriod: number, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DeleteCluster?ClusterIdentifier=' + (ClusterIdentifier == null ? '' : encodeURIComponent(ClusterIdentifier)) + '&SkipFinalClusterSnapshot=' + SkipFinalClusterSnapshot + '&FinalClusterSnapshotIdentifier=' + (FinalClusterSnapshotIdentifier == null ? '' : encodeURIComponent(FinalClusterSnapshotIdentifier)) + '&FinalClusterSnapshotRetentionPeriod=' + FinalClusterSnapshotRetentionPeriod + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Deletes a specified Amazon Redshift parameter group.</p> <note> <p>You cannot delete a parameter group if it is associated with a cluster.</p> </note>
		 * Get /#Action=DeleteClusterParameterGroup
		 * @param {string} ParameterGroupName <p>The name of the parameter group to be deleted.</p> <p>Constraints:</p> <ul> <li> <p>Must be the name of an existing cluster parameter group.</p> </li> <li> <p>Cannot delete a default cluster parameter group.</p> </li> </ul>
		 * @return {void} Success
		 */
		GET_DeleteClusterParameterGroup(ParameterGroupName: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DeleteClusterParameterGroup?ParameterGroupName=' + (ParameterGroupName == null ? '' : encodeURIComponent(ParameterGroupName)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Deletes an Amazon Redshift security group.</p> <note> <p>You cannot delete a security group that is associated with any clusters. You cannot delete the default security group.</p> </note> <p> For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
		 * Get /#Action=DeleteClusterSecurityGroup
		 * @param {string} ClusterSecurityGroupName The name of the cluster security group to be deleted.
		 * @return {void} Success
		 */
		GET_DeleteClusterSecurityGroup(ClusterSecurityGroupName: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DeleteClusterSecurityGroup?ClusterSecurityGroupName=' + (ClusterSecurityGroupName == null ? '' : encodeURIComponent(ClusterSecurityGroupName)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Deletes the specified manual snapshot. The snapshot must be in the <code>available</code> state, with no other users authorized to access the snapshot. </p> <p>Unlike automated snapshots, manual snapshots are retained even after you delete your cluster. Amazon Redshift does not delete your manual snapshots. You must delete manual snapshot explicitly to avoid getting charged. If other accounts are authorized to access the snapshot, you must revoke all of the authorizations before you can delete the snapshot.</p>
		 * Get /#Action=DeleteClusterSnapshot
		 * @param {string} SnapshotIdentifier <p>The unique identifier of the manual snapshot to be deleted.</p> <p>Constraints: Must be the name of an existing snapshot that is in the <code>available</code>, <code>failed</code>, or <code>cancelled</code> state.</p>
		 * @param {string} SnapshotClusterIdentifier <p>The unique identifier of the cluster the snapshot was created from. This parameter is required if your IAM user has a policy containing a snapshot resource element that specifies anything other than * for the cluster name.</p> <p>Constraints: Must be the name of valid cluster.</p>
		 * @return {void} Success
		 */
		GET_DeleteClusterSnapshot(SnapshotIdentifier: string, SnapshotClusterIdentifier: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DeleteClusterSnapshot?SnapshotIdentifier=' + (SnapshotIdentifier == null ? '' : encodeURIComponent(SnapshotIdentifier)) + '&SnapshotClusterIdentifier=' + (SnapshotClusterIdentifier == null ? '' : encodeURIComponent(SnapshotClusterIdentifier)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes the specified cluster subnet group.
		 * Get /#Action=DeleteClusterSubnetGroup
		 * @param {string} ClusterSubnetGroupName The name of the cluster subnet group name to be deleted.
		 * @return {void} Success
		 */
		GET_DeleteClusterSubnetGroup(ClusterSubnetGroupName: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DeleteClusterSubnetGroup?ClusterSubnetGroupName=' + (ClusterSubnetGroupName == null ? '' : encodeURIComponent(ClusterSubnetGroupName)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes an Amazon Redshift event notification subscription.
		 * Get /#Action=DeleteEventSubscription
		 * @param {string} SubscriptionName The name of the Amazon Redshift event notification subscription to be deleted.
		 * @return {void} Success
		 */
		GET_DeleteEventSubscription(SubscriptionName: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DeleteEventSubscription?SubscriptionName=' + (SubscriptionName == null ? '' : encodeURIComponent(SubscriptionName)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes the specified HSM client certificate.
		 * Get /#Action=DeleteHsmClientCertificate
		 * @param {string} HsmClientCertificateIdentifier The identifier of the HSM client certificate to be deleted.
		 * @return {void} Success
		 */
		GET_DeleteHsmClientCertificate(HsmClientCertificateIdentifier: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DeleteHsmClientCertificate?HsmClientCertificateIdentifier=' + (HsmClientCertificateIdentifier == null ? '' : encodeURIComponent(HsmClientCertificateIdentifier)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes the specified Amazon Redshift HSM configuration.
		 * Get /#Action=DeleteHsmConfiguration
		 * @param {string} HsmConfigurationIdentifier The identifier of the Amazon Redshift HSM configuration to be deleted.
		 * @return {void} Success
		 */
		GET_DeleteHsmConfiguration(HsmConfigurationIdentifier: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DeleteHsmConfiguration?HsmConfigurationIdentifier=' + (HsmConfigurationIdentifier == null ? '' : encodeURIComponent(HsmConfigurationIdentifier)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes a scheduled action.
		 * Get /#Action=DeleteScheduledAction
		 * @param {string} ScheduledActionName The name of the scheduled action to delete. 
		 * @return {void} Success
		 */
		GET_DeleteScheduledAction(ScheduledActionName: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DeleteScheduledAction?ScheduledActionName=' + (ScheduledActionName == null ? '' : encodeURIComponent(ScheduledActionName)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes the specified snapshot copy grant.
		 * Get /#Action=DeleteSnapshotCopyGrant
		 * @param {string} SnapshotCopyGrantName The name of the snapshot copy grant to delete.
		 * @return {void} Success
		 */
		GET_DeleteSnapshotCopyGrant(SnapshotCopyGrantName: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DeleteSnapshotCopyGrant?SnapshotCopyGrantName=' + (SnapshotCopyGrantName == null ? '' : encodeURIComponent(SnapshotCopyGrantName)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes a snapshot schedule.
		 * Get /#Action=DeleteSnapshotSchedule
		 * @param {string} ScheduleIdentifier A unique identifier of the snapshot schedule to delete.
		 * @return {void} Success
		 */
		GET_DeleteSnapshotSchedule(ScheduleIdentifier: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DeleteSnapshotSchedule?ScheduleIdentifier=' + (ScheduleIdentifier == null ? '' : encodeURIComponent(ScheduleIdentifier)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes tags from a resource. You must provide the ARN of the resource from which you want to delete the tag or tags.
		 * Get /#Action=DeleteTags
		 * @param {string} ResourceName The Amazon Resource Name (ARN) from which you want to remove the tag or tags. For example, <code>arn:aws:redshift:us-east-2:123456789:cluster:t1</code>. 
		 * @param {Array<String>} TagKeys The tag key that you want to delete.
		 * @return {void} Success
		 */
		GET_DeleteTags(ResourceName: string, TagKeys: Array<String>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DeleteTags?ResourceName=' + (ResourceName == null ? '' : encodeURIComponent(ResourceName)) + '&' + TagKeys.map(z => `TagKeys=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes a usage limit from a cluster.
		 * Get /#Action=DeleteUsageLimit
		 * @param {string} UsageLimitId The identifier of the usage limit to delete.
		 * @return {void} Success
		 */
		GET_DeleteUsageLimit(UsageLimitId: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DeleteUsageLimit?UsageLimitId=' + (UsageLimitId == null ? '' : encodeURIComponent(UsageLimitId)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a list of attributes attached to an account
		 * Get /#Action=DescribeAccountAttributes
		 * @param {Array<String>} AttributeNames A list of attribute names.
		 * @return {void} Success
		 */
		GET_DescribeAccountAttributes(AttributeNames: Array<String>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DescribeAccountAttributes?' + AttributeNames.map(z => `AttributeNames=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns an array of <code>ClusterDbRevision</code> objects.
		 * Get /#Action=DescribeClusterDbRevisions
		 * @param {string} ClusterIdentifier A unique identifier for a cluster whose <code>ClusterDbRevisions</code> you are requesting. This parameter is case sensitive. All clusters defined for an account are returned by default.
		 * @param {number} MaxRecords <p>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified MaxRecords value, a value is returned in the <code>marker</code> field of the response. You can retrieve the next set of response records by providing the returned <code>marker</code> value in the <code>marker</code> parameter and retrying the request. </p> <p>Default: 100</p> <p>Constraints: minimum 20, maximum 100.</p>
		 * @param {string} Marker <p>An optional parameter that specifies the starting point for returning a set of response records. When the results of a <code>DescribeClusterDbRevisions</code> request exceed the value specified in <code>MaxRecords</code>, Amazon Redshift returns a value in the <code>marker</code> field of the response. You can retrieve the next set of response records by providing the returned <code>marker</code> value in the <code>marker</code> parameter and retrying the request. </p> <p>Constraints: You can specify either the <code>ClusterIdentifier</code> parameter, or the <code>marker</code> parameter, but not both.</p>
		 * @return {void} Success
		 */
		GET_DescribeClusterDbRevisions(ClusterIdentifier: string, MaxRecords: number, Marker: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DescribeClusterDbRevisions?ClusterIdentifier=' + (ClusterIdentifier == null ? '' : encodeURIComponent(ClusterIdentifier)) + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Returns a list of Amazon Redshift parameter groups, including parameter groups you created and the default parameter group. For each parameter group, the response includes the parameter group name, description, and parameter group family name. You can optionally specify a name to retrieve the description of a specific parameter group.</p> <p> For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all parameter groups that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all parameter groups that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, parameter groups are returned regardless of whether they have tag keys or values associated with them.</p>
		 * Get /#Action=DescribeClusterParameterGroups
		 * @param {string} ParameterGroupName The name of a specific parameter group for which to return details. By default, details about all parameter groups and the default parameter group are returned.
		 * @param {number} MaxRecords <p>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified <code>MaxRecords</code> value, a value is returned in a <code>marker</code> field of the response. You can retrieve the next set of records by retrying the command with the returned marker value. </p> <p>Default: <code>100</code> </p> <p>Constraints: minimum 20, maximum 100.</p>
		 * @param {string} Marker An optional parameter that specifies the starting point to return a set of response records. When the results of a <a>DescribeClusterParameterGroups</a> request exceed the value specified in <code>MaxRecords</code>, AWS returns a value in the <code>Marker</code> field of the response. You can retrieve the next set of response records by providing the returned marker value in the <code>Marker</code> parameter and retrying the request. 
		 * @param {Array<String>} TagKeys A tag key or keys for which you want to return all matching cluster parameter groups that are associated with the specified key or keys. For example, suppose that you have parameter groups that are tagged with keys called <code>owner</code> and <code>environment</code>. If you specify both of these tag keys in the request, Amazon Redshift returns a response with the parameter groups that have either or both of these tag keys associated with them.
		 * @param {Array<String>} TagValues A tag value or values for which you want to return all matching cluster parameter groups that are associated with the specified tag value or values. For example, suppose that you have parameter groups that are tagged with values called <code>admin</code> and <code>test</code>. If you specify both of these tag values in the request, Amazon Redshift returns a response with the parameter groups that have either or both of these tag values associated with them.
		 * @return {void} Success
		 */
		GET_DescribeClusterParameterGroups(ParameterGroupName: string, MaxRecords: number, Marker: string, TagKeys: Array<String>, TagValues: Array<String>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DescribeClusterParameterGroups?ParameterGroupName=' + (ParameterGroupName == null ? '' : encodeURIComponent(ParameterGroupName)) + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&' + TagKeys.map(z => `TagKeys=${z}`).join('&') + '&' + TagValues.map(z => `TagValues=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Returns a detailed list of parameters contained within the specified Amazon Redshift parameter group. For each parameter the response includes information such as parameter name, description, data type, value, whether the parameter value is modifiable, and so on.</p> <p>You can specify <i>source</i> filter to retrieve parameters of only specific type. For example, to retrieve parameters that were modified by a user action such as from <a>ModifyClusterParameterGroup</a>, you can specify <i>source</i> equal to <i>user</i>.</p> <p> For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
		 * Get /#Action=DescribeClusterParameters
		 * @param {string} ParameterGroupName The name of a cluster parameter group for which to return details.
		 * @param {string} Source <p>The parameter types to return. Specify <code>user</code> to show parameters that are different form the default. Similarly, specify <code>engine-default</code> to show parameters that are the same as the default parameter group. </p> <p>Default: All parameter types returned.</p> <p>Valid Values: <code>user</code> | <code>engine-default</code> </p>
		 * @param {number} MaxRecords <p>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified <code>MaxRecords</code> value, a value is returned in a <code>marker</code> field of the response. You can retrieve the next set of records by retrying the command with the returned marker value. </p> <p>Default: <code>100</code> </p> <p>Constraints: minimum 20, maximum 100.</p>
		 * @param {string} Marker An optional parameter that specifies the starting point to return a set of response records. When the results of a <a>DescribeClusterParameters</a> request exceed the value specified in <code>MaxRecords</code>, AWS returns a value in the <code>Marker</code> field of the response. You can retrieve the next set of response records by providing the returned marker value in the <code>Marker</code> parameter and retrying the request. 
		 * @return {void} Success
		 */
		GET_DescribeClusterParameters(ParameterGroupName: string, Source: string, MaxRecords: number, Marker: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DescribeClusterParameters?ParameterGroupName=' + (ParameterGroupName == null ? '' : encodeURIComponent(ParameterGroupName)) + '&Source=' + (Source == null ? '' : encodeURIComponent(Source)) + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Returns information about Amazon Redshift security groups. If the name of a security group is specified, the response will contain only information about only that security group.</p> <p> For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all security groups that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all security groups that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, security groups are returned regardless of whether they have tag keys or values associated with them.</p>
		 * Get /#Action=DescribeClusterSecurityGroups
		 * @param {string} ClusterSecurityGroupName <p>The name of a cluster security group for which you are requesting details. You can specify either the <b>Marker</b> parameter or a <b>ClusterSecurityGroupName</b> parameter, but not both. </p> <p> Example: <code>securitygroup1</code> </p>
		 * @param {number} MaxRecords <p>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified <code>MaxRecords</code> value, a value is returned in a <code>marker</code> field of the response. You can retrieve the next set of records by retrying the command with the returned marker value. </p> <p>Default: <code>100</code> </p> <p>Constraints: minimum 20, maximum 100.</p>
		 * @param {string} Marker <p>An optional parameter that specifies the starting point to return a set of response records. When the results of a <a>DescribeClusterSecurityGroups</a> request exceed the value specified in <code>MaxRecords</code>, AWS returns a value in the <code>Marker</code> field of the response. You can retrieve the next set of response records by providing the returned marker value in the <code>Marker</code> parameter and retrying the request. </p> <p>Constraints: You can specify either the <b>ClusterSecurityGroupName</b> parameter or the <b>Marker</b> parameter, but not both. </p>
		 * @param {Array<String>} TagKeys A tag key or keys for which you want to return all matching cluster security groups that are associated with the specified key or keys. For example, suppose that you have security groups that are tagged with keys called <code>owner</code> and <code>environment</code>. If you specify both of these tag keys in the request, Amazon Redshift returns a response with the security groups that have either or both of these tag keys associated with them.
		 * @param {Array<String>} TagValues A tag value or values for which you want to return all matching cluster security groups that are associated with the specified tag value or values. For example, suppose that you have security groups that are tagged with values called <code>admin</code> and <code>test</code>. If you specify both of these tag values in the request, Amazon Redshift returns a response with the security groups that have either or both of these tag values associated with them.
		 * @return {void} Success
		 */
		GET_DescribeClusterSecurityGroups(ClusterSecurityGroupName: string, MaxRecords: number, Marker: string, TagKeys: Array<String>, TagValues: Array<String>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DescribeClusterSecurityGroups?ClusterSecurityGroupName=' + (ClusterSecurityGroupName == null ? '' : encodeURIComponent(ClusterSecurityGroupName)) + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&' + TagKeys.map(z => `TagKeys=${z}`).join('&') + '&' + TagValues.map(z => `TagValues=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Returns one or more snapshot objects, which contain metadata about your cluster snapshots. By default, this operation returns information about all snapshots of all clusters that are owned by you AWS customer account. No information is returned for snapshots owned by inactive AWS customer accounts.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all snapshots that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all snapshots that have any combination of those values are returned. Only snapshots that you own are returned in the response; shared snapshots are not returned with the tag key and tag value request parameters.</p> <p>If both tag keys and values are omitted from the request, snapshots are returned regardless of whether they have tag keys or values associated with them.</p>
		 * Get /#Action=DescribeClusterSnapshots
		 * @param {string} ClusterIdentifier The identifier of the cluster which generated the requested snapshots.
		 * @param {string} SnapshotIdentifier The snapshot identifier of the snapshot about which to return information.
		 * @param {string} SnapshotType <p>The type of snapshots for which you are requesting information. By default, snapshots of all types are returned.</p> <p>Valid Values: <code>automated</code> | <code>manual</code> </p>
		 * @param {Date} StartTime <p>A value that requests only snapshots created at or after the specified time. The time value is specified in ISO 8601 format. For more information about ISO 8601, go to the <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO8601 Wikipedia page.</a> </p> <p>Example: <code>2012-07-16T18:00:00Z</code> </p>
		 * @param {Date} EndTime <p>A time value that requests only snapshots created at or before the specified time. The time value is specified in ISO 8601 format. For more information about ISO 8601, go to the <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO8601 Wikipedia page.</a> </p> <p>Example: <code>2012-07-16T18:00:00Z</code> </p>
		 * @param {number} MaxRecords <p>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified <code>MaxRecords</code> value, a value is returned in a <code>marker</code> field of the response. You can retrieve the next set of records by retrying the command with the returned marker value. </p> <p>Default: <code>100</code> </p> <p>Constraints: minimum 20, maximum 100.</p>
		 * @param {string} Marker An optional parameter that specifies the starting point to return a set of response records. When the results of a <a>DescribeClusterSnapshots</a> request exceed the value specified in <code>MaxRecords</code>, AWS returns a value in the <code>Marker</code> field of the response. You can retrieve the next set of response records by providing the returned marker value in the <code>Marker</code> parameter and retrying the request. 
		 * @param {string} OwnerAccount The AWS customer account used to create or copy the snapshot. Use this field to filter the results to snapshots owned by a particular account. To describe snapshots you own, either specify your AWS customer account, or do not specify the parameter.
		 * @param {Array<String>} TagKeys A tag key or keys for which you want to return all matching cluster snapshots that are associated with the specified key or keys. For example, suppose that you have snapshots that are tagged with keys called <code>owner</code> and <code>environment</code>. If you specify both of these tag keys in the request, Amazon Redshift returns a response with the snapshots that have either or both of these tag keys associated with them.
		 * @param {Array<String>} TagValues A tag value or values for which you want to return all matching cluster snapshots that are associated with the specified tag value or values. For example, suppose that you have snapshots that are tagged with values called <code>admin</code> and <code>test</code>. If you specify both of these tag values in the request, Amazon Redshift returns a response with the snapshots that have either or both of these tag values associated with them.
		 * @param {boolean} ClusterExists <p>A value that indicates whether to return snapshots only for an existing cluster. You can perform table-level restore only by using a snapshot of an existing cluster, that is, a cluster that has not been deleted. Values for this parameter work as follows: </p> <ul> <li> <p>If <code>ClusterExists</code> is set to <code>true</code>, <code>ClusterIdentifier</code> is required.</p> </li> <li> <p>If <code>ClusterExists</code> is set to <code>false</code> and <code>ClusterIdentifier</code> isn't specified, all snapshots associated with deleted clusters (orphaned snapshots) are returned. </p> </li> <li> <p>If <code>ClusterExists</code> is set to <code>false</code> and <code>ClusterIdentifier</code> is specified for a deleted cluster, snapshots associated with that cluster are returned.</p> </li> <li> <p>If <code>ClusterExists</code> is set to <code>false</code> and <code>ClusterIdentifier</code> is specified for an existing cluster, no snapshots are returned. </p> </li> </ul>
		 * @param {Array<SnapshotSortingEntity>} SortingEntities <p/>
		 * @return {void} Success
		 */
		GET_DescribeClusterSnapshots(ClusterIdentifier: string, SnapshotIdentifier: string, SnapshotType: string, StartTime: Date, EndTime: Date, MaxRecords: number, Marker: string, OwnerAccount: string, TagKeys: Array<String>, TagValues: Array<String>, ClusterExists: boolean, SortingEntities: Array<SnapshotSortingEntity>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DescribeClusterSnapshots?ClusterIdentifier=' + (ClusterIdentifier == null ? '' : encodeURIComponent(ClusterIdentifier)) + '&SnapshotIdentifier=' + (SnapshotIdentifier == null ? '' : encodeURIComponent(SnapshotIdentifier)) + '&SnapshotType=' + (SnapshotType == null ? '' : encodeURIComponent(SnapshotType)) + '&StartTime=' + StartTime.toISOString() + '&EndTime=' + EndTime.toISOString() + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&OwnerAccount=' + (OwnerAccount == null ? '' : encodeURIComponent(OwnerAccount)) + '&' + TagKeys.map(z => `TagKeys=${z}`).join('&') + '&' + TagValues.map(z => `TagValues=${z}`).join('&') + '&ClusterExists=' + ClusterExists + '&' + SortingEntities.map(z => `SortingEntities=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Returns one or more cluster subnet group objects, which contain metadata about your cluster subnet groups. By default, this operation returns information about all cluster subnet groups that are defined in you AWS account.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all subnet groups that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all subnet groups that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, subnet groups are returned regardless of whether they have tag keys or values associated with them.</p>
		 * Get /#Action=DescribeClusterSubnetGroups
		 * @param {string} ClusterSubnetGroupName The name of the cluster subnet group for which information is requested.
		 * @param {number} MaxRecords <p>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified <code>MaxRecords</code> value, a value is returned in a <code>marker</code> field of the response. You can retrieve the next set of records by retrying the command with the returned marker value. </p> <p>Default: <code>100</code> </p> <p>Constraints: minimum 20, maximum 100.</p>
		 * @param {string} Marker An optional parameter that specifies the starting point to return a set of response records. When the results of a <a>DescribeClusterSubnetGroups</a> request exceed the value specified in <code>MaxRecords</code>, AWS returns a value in the <code>Marker</code> field of the response. You can retrieve the next set of response records by providing the returned marker value in the <code>Marker</code> parameter and retrying the request. 
		 * @param {Array<String>} TagKeys A tag key or keys for which you want to return all matching cluster subnet groups that are associated with the specified key or keys. For example, suppose that you have subnet groups that are tagged with keys called <code>owner</code> and <code>environment</code>. If you specify both of these tag keys in the request, Amazon Redshift returns a response with the subnet groups that have either or both of these tag keys associated with them.
		 * @param {Array<String>} TagValues A tag value or values for which you want to return all matching cluster subnet groups that are associated with the specified tag value or values. For example, suppose that you have subnet groups that are tagged with values called <code>admin</code> and <code>test</code>. If you specify both of these tag values in the request, Amazon Redshift returns a response with the subnet groups that have either or both of these tag values associated with them.
		 * @return {void} Success
		 */
		GET_DescribeClusterSubnetGroups(ClusterSubnetGroupName: string, MaxRecords: number, Marker: string, TagKeys: Array<String>, TagValues: Array<String>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DescribeClusterSubnetGroups?ClusterSubnetGroupName=' + (ClusterSubnetGroupName == null ? '' : encodeURIComponent(ClusterSubnetGroupName)) + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&' + TagKeys.map(z => `TagKeys=${z}`).join('&') + '&' + TagValues.map(z => `TagValues=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a list of all the available maintenance tracks.
		 * Get /#Action=DescribeClusterTracks
		 * @param {string} MaintenanceTrackName The name of the maintenance track. 
		 * @param {number} MaxRecords An integer value for the maximum number of maintenance tracks to return.
		 * @param {string} Marker An optional parameter that specifies the starting point to return a set of response records. When the results of a <code>DescribeClusterTracks</code> request exceed the value specified in <code>MaxRecords</code>, Amazon Redshift returns a value in the <code>Marker</code> field of the response. You can retrieve the next set of response records by providing the returned marker value in the <code>Marker</code> parameter and retrying the request. 
		 * @return {void} Success
		 */
		GET_DescribeClusterTracks(MaintenanceTrackName: string, MaxRecords: number, Marker: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DescribeClusterTracks?MaintenanceTrackName=' + (MaintenanceTrackName == null ? '' : encodeURIComponent(MaintenanceTrackName)) + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns descriptions of the available Amazon Redshift cluster versions. You can call this operation even before creating any clusters to learn more about the Amazon Redshift versions. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.
		 * Get /#Action=DescribeClusterVersions
		 * @param {string} ClusterVersion <p>The specific cluster version to return.</p> <p>Example: <code>1.0</code> </p>
		 * @param {string} ClusterParameterGroupFamily <p>The name of a specific cluster parameter group family to return details for.</p> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 255 alphanumeric characters</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> </ul>
		 * @param {number} MaxRecords <p>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified <code>MaxRecords</code> value, a value is returned in a <code>marker</code> field of the response. You can retrieve the next set of records by retrying the command with the returned marker value. </p> <p>Default: <code>100</code> </p> <p>Constraints: minimum 20, maximum 100.</p>
		 * @param {string} Marker An optional parameter that specifies the starting point to return a set of response records. When the results of a <a>DescribeClusterVersions</a> request exceed the value specified in <code>MaxRecords</code>, AWS returns a value in the <code>Marker</code> field of the response. You can retrieve the next set of response records by providing the returned marker value in the <code>Marker</code> parameter and retrying the request. 
		 * @return {void} Success
		 */
		GET_DescribeClusterVersions(ClusterVersion: string, ClusterParameterGroupFamily: string, MaxRecords: number, Marker: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DescribeClusterVersions?ClusterVersion=' + (ClusterVersion == null ? '' : encodeURIComponent(ClusterVersion)) + '&ClusterParameterGroupFamily=' + (ClusterParameterGroupFamily == null ? '' : encodeURIComponent(ClusterParameterGroupFamily)) + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Returns properties of provisioned clusters including general cluster properties, cluster database properties, maintenance and backup properties, and security and access properties. This operation supports pagination. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all clusters that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all clusters that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, clusters are returned regardless of whether they have tag keys or values associated with them.</p>
		 * Get /#Action=DescribeClusters
		 * @param {string} ClusterIdentifier <p>The unique identifier of a cluster whose properties you are requesting. This parameter is case sensitive.</p> <p>The default is that all clusters defined for an account are returned.</p>
		 * @param {number} MaxRecords <p>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified <code>MaxRecords</code> value, a value is returned in a <code>marker</code> field of the response. You can retrieve the next set of records by retrying the command with the returned marker value. </p> <p>Default: <code>100</code> </p> <p>Constraints: minimum 20, maximum 100.</p>
		 * @param {string} Marker <p>An optional parameter that specifies the starting point to return a set of response records. When the results of a <a>DescribeClusters</a> request exceed the value specified in <code>MaxRecords</code>, AWS returns a value in the <code>Marker</code> field of the response. You can retrieve the next set of response records by providing the returned marker value in the <code>Marker</code> parameter and retrying the request. </p> <p>Constraints: You can specify either the <b>ClusterIdentifier</b> parameter or the <b>Marker</b> parameter, but not both. </p>
		 * @param {Array<String>} TagKeys A tag key or keys for which you want to return all matching clusters that are associated with the specified key or keys. For example, suppose that you have clusters that are tagged with keys called <code>owner</code> and <code>environment</code>. If you specify both of these tag keys in the request, Amazon Redshift returns a response with the clusters that have either or both of these tag keys associated with them.
		 * @param {Array<String>} TagValues A tag value or values for which you want to return all matching clusters that are associated with the specified tag value or values. For example, suppose that you have clusters that are tagged with values called <code>admin</code> and <code>test</code>. If you specify both of these tag values in the request, Amazon Redshift returns a response with the clusters that have either or both of these tag values associated with them.
		 * @return {void} Success
		 */
		GET_DescribeClusters(ClusterIdentifier: string, MaxRecords: number, Marker: string, TagKeys: Array<String>, TagValues: Array<String>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DescribeClusters?ClusterIdentifier=' + (ClusterIdentifier == null ? '' : encodeURIComponent(ClusterIdentifier)) + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&' + TagKeys.map(z => `TagKeys=${z}`).join('&') + '&' + TagValues.map(z => `TagValues=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Returns a list of parameter settings for the specified parameter group family.</p> <p> For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
		 * Get /#Action=DescribeDefaultClusterParameters
		 * @param {string} ParameterGroupFamily The name of the cluster parameter group family.
		 * @param {number} MaxRecords <p>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified <code>MaxRecords</code> value, a value is returned in a <code>marker</code> field of the response. You can retrieve the next set of records by retrying the command with the returned marker value. </p> <p>Default: <code>100</code> </p> <p>Constraints: minimum 20, maximum 100.</p>
		 * @param {string} Marker An optional parameter that specifies the starting point to return a set of response records. When the results of a <a>DescribeDefaultClusterParameters</a> request exceed the value specified in <code>MaxRecords</code>, AWS returns a value in the <code>Marker</code> field of the response. You can retrieve the next set of response records by providing the returned marker value in the <code>Marker</code> parameter and retrying the request. 
		 * @return {void} Success
		 */
		GET_DescribeDefaultClusterParameters(ParameterGroupFamily: string, MaxRecords: number, Marker: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DescribeDefaultClusterParameters?ParameterGroupFamily=' + (ParameterGroupFamily == null ? '' : encodeURIComponent(ParameterGroupFamily)) + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Displays a list of event categories for all event source types, or for a specified source type. For a list of the event categories and source types, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-event-notifications.html">Amazon Redshift Event Notifications</a>.
		 * Get /#Action=DescribeEventCategories
		 * @param {string} SourceType <p>The source type, such as cluster or parameter group, to which the described event categories apply.</p> <p>Valid values: cluster, cluster-snapshot, cluster-parameter-group, cluster-security-group, and scheduled-action.</p>
		 * @return {void} Success
		 */
		GET_DescribeEventCategories(SourceType: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DescribeEventCategories?SourceType=' + (SourceType == null ? '' : encodeURIComponent(SourceType)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Lists descriptions of all the Amazon Redshift event notification subscriptions for a customer account. If you specify a subscription name, lists the description for that subscription.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all event notification subscriptions that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all subscriptions that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, subscriptions are returned regardless of whether they have tag keys or values associated with them.</p>
		 * Get /#Action=DescribeEventSubscriptions
		 * @param {string} SubscriptionName The name of the Amazon Redshift event notification subscription to be described.
		 * @param {number} MaxRecords <p>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified <code>MaxRecords</code> value, a value is returned in a <code>marker</code> field of the response. You can retrieve the next set of records by retrying the command with the returned marker value. </p> <p>Default: <code>100</code> </p> <p>Constraints: minimum 20, maximum 100.</p>
		 * @param {string} Marker An optional parameter that specifies the starting point to return a set of response records. When the results of a DescribeEventSubscriptions request exceed the value specified in <code>MaxRecords</code>, AWS returns a value in the <code>Marker</code> field of the response. You can retrieve the next set of response records by providing the returned marker value in the <code>Marker</code> parameter and retrying the request. 
		 * @param {Array<String>} TagKeys A tag key or keys for which you want to return all matching event notification subscriptions that are associated with the specified key or keys. For example, suppose that you have subscriptions that are tagged with keys called <code>owner</code> and <code>environment</code>. If you specify both of these tag keys in the request, Amazon Redshift returns a response with the subscriptions that have either or both of these tag keys associated with them.
		 * @param {Array<String>} TagValues A tag value or values for which you want to return all matching event notification subscriptions that are associated with the specified tag value or values. For example, suppose that you have subscriptions that are tagged with values called <code>admin</code> and <code>test</code>. If you specify both of these tag values in the request, Amazon Redshift returns a response with the subscriptions that have either or both of these tag values associated with them.
		 * @return {void} Success
		 */
		GET_DescribeEventSubscriptions(SubscriptionName: string, MaxRecords: number, Marker: string, TagKeys: Array<String>, TagValues: Array<String>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DescribeEventSubscriptions?SubscriptionName=' + (SubscriptionName == null ? '' : encodeURIComponent(SubscriptionName)) + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&' + TagKeys.map(z => `TagKeys=${z}`).join('&') + '&' + TagValues.map(z => `TagValues=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns events related to clusters, security groups, snapshots, and parameter groups for the past 14 days. Events specific to a particular cluster, security group, snapshot or parameter group can be obtained by providing the name as a parameter. By default, the past hour of events are returned.
		 * Get /#Action=DescribeEvents
		 * @param {string} SourceIdentifier <p>The identifier of the event source for which events will be returned. If this parameter is not specified, then all sources are included in the response.</p> <p>Constraints:</p> <p>If <i>SourceIdentifier</i> is supplied, <i>SourceType</i> must also be provided.</p> <ul> <li> <p>Specify a cluster identifier when <i>SourceType</i> is <code>cluster</code>.</p> </li> <li> <p>Specify a cluster security group name when <i>SourceType</i> is <code>cluster-security-group</code>.</p> </li> <li> <p>Specify a cluster parameter group name when <i>SourceType</i> is <code>cluster-parameter-group</code>.</p> </li> <li> <p>Specify a cluster snapshot identifier when <i>SourceType</i> is <code>cluster-snapshot</code>.</p> </li> </ul>
		 * @param {SourceType} SourceType <p>The event source to retrieve events for. If no value is specified, all events are returned.</p> <p>Constraints:</p> <p>If <i>SourceType</i> is supplied, <i>SourceIdentifier</i> must also be provided.</p> <ul> <li> <p>Specify <code>cluster</code> when <i>SourceIdentifier</i> is a cluster identifier.</p> </li> <li> <p>Specify <code>cluster-security-group</code> when <i>SourceIdentifier</i> is a cluster security group name.</p> </li> <li> <p>Specify <code>cluster-parameter-group</code> when <i>SourceIdentifier</i> is a cluster parameter group name.</p> </li> <li> <p>Specify <code>cluster-snapshot</code> when <i>SourceIdentifier</i> is a cluster snapshot identifier.</p> </li> </ul>
		 * @param {Date} StartTime <p>The beginning of the time interval to retrieve events for, specified in ISO 8601 format. For more information about ISO 8601, go to the <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO8601 Wikipedia page.</a> </p> <p>Example: <code>2009-07-08T18:00Z</code> </p>
		 * @param {Date} EndTime <p>The end of the time interval for which to retrieve events, specified in ISO 8601 format. For more information about ISO 8601, go to the <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO8601 Wikipedia page.</a> </p> <p>Example: <code>2009-07-08T18:00Z</code> </p>
		 * @param {number} Duration <p>The number of minutes prior to the time of the request for which to retrieve events. For example, if the request is sent at 18:00 and you specify a duration of 60, then only events which have occurred after 17:00 will be returned.</p> <p>Default: <code>60</code> </p>
		 * @param {number} MaxRecords <p>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified <code>MaxRecords</code> value, a value is returned in a <code>marker</code> field of the response. You can retrieve the next set of records by retrying the command with the returned marker value. </p> <p>Default: <code>100</code> </p> <p>Constraints: minimum 20, maximum 100.</p>
		 * @param {string} Marker An optional parameter that specifies the starting point to return a set of response records. When the results of a <a>DescribeEvents</a> request exceed the value specified in <code>MaxRecords</code>, AWS returns a value in the <code>Marker</code> field of the response. You can retrieve the next set of response records by providing the returned marker value in the <code>Marker</code> parameter and retrying the request. 
		 * @return {void} Success
		 */
		GET_DescribeEvents(SourceIdentifier: string, SourceType: SourceType, StartTime: Date, EndTime: Date, Duration: number, MaxRecords: number, Marker: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DescribeEvents?SourceIdentifier=' + (SourceIdentifier == null ? '' : encodeURIComponent(SourceIdentifier)) + '&SourceType=' + SourceType + '&StartTime=' + StartTime.toISOString() + '&EndTime=' + EndTime.toISOString() + '&Duration=' + Duration + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Returns information about the specified HSM client certificate. If no certificate ID is specified, returns information about all the HSM certificates owned by your AWS customer account.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all HSM client certificates that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all HSM client certificates that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, HSM client certificates are returned regardless of whether they have tag keys or values associated with them.</p>
		 * Get /#Action=DescribeHsmClientCertificates
		 * @param {string} HsmClientCertificateIdentifier The identifier of a specific HSM client certificate for which you want information. If no identifier is specified, information is returned for all HSM client certificates owned by your AWS customer account.
		 * @param {number} MaxRecords <p>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified <code>MaxRecords</code> value, a value is returned in a <code>marker</code> field of the response. You can retrieve the next set of records by retrying the command with the returned marker value. </p> <p>Default: <code>100</code> </p> <p>Constraints: minimum 20, maximum 100.</p>
		 * @param {string} Marker An optional parameter that specifies the starting point to return a set of response records. When the results of a <a>DescribeHsmClientCertificates</a> request exceed the value specified in <code>MaxRecords</code>, AWS returns a value in the <code>Marker</code> field of the response. You can retrieve the next set of response records by providing the returned marker value in the <code>Marker</code> parameter and retrying the request. 
		 * @param {Array<String>} TagKeys A tag key or keys for which you want to return all matching HSM client certificates that are associated with the specified key or keys. For example, suppose that you have HSM client certificates that are tagged with keys called <code>owner</code> and <code>environment</code>. If you specify both of these tag keys in the request, Amazon Redshift returns a response with the HSM client certificates that have either or both of these tag keys associated with them.
		 * @param {Array<String>} TagValues A tag value or values for which you want to return all matching HSM client certificates that are associated with the specified tag value or values. For example, suppose that you have HSM client certificates that are tagged with values called <code>admin</code> and <code>test</code>. If you specify both of these tag values in the request, Amazon Redshift returns a response with the HSM client certificates that have either or both of these tag values associated with them.
		 * @return {void} Success
		 */
		GET_DescribeHsmClientCertificates(HsmClientCertificateIdentifier: string, MaxRecords: number, Marker: string, TagKeys: Array<String>, TagValues: Array<String>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DescribeHsmClientCertificates?HsmClientCertificateIdentifier=' + (HsmClientCertificateIdentifier == null ? '' : encodeURIComponent(HsmClientCertificateIdentifier)) + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&' + TagKeys.map(z => `TagKeys=${z}`).join('&') + '&' + TagValues.map(z => `TagValues=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Returns information about the specified Amazon Redshift HSM configuration. If no configuration ID is specified, returns information about all the HSM configurations owned by your AWS customer account.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all HSM connections that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all HSM connections that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, HSM connections are returned regardless of whether they have tag keys or values associated with them.</p>
		 * Get /#Action=DescribeHsmConfigurations
		 * @param {string} HsmConfigurationIdentifier The identifier of a specific Amazon Redshift HSM configuration to be described. If no identifier is specified, information is returned for all HSM configurations owned by your AWS customer account.
		 * @param {number} MaxRecords <p>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified <code>MaxRecords</code> value, a value is returned in a <code>marker</code> field of the response. You can retrieve the next set of records by retrying the command with the returned marker value. </p> <p>Default: <code>100</code> </p> <p>Constraints: minimum 20, maximum 100.</p>
		 * @param {string} Marker An optional parameter that specifies the starting point to return a set of response records. When the results of a <a>DescribeHsmConfigurations</a> request exceed the value specified in <code>MaxRecords</code>, AWS returns a value in the <code>Marker</code> field of the response. You can retrieve the next set of response records by providing the returned marker value in the <code>Marker</code> parameter and retrying the request. 
		 * @param {Array<String>} TagKeys A tag key or keys for which you want to return all matching HSM configurations that are associated with the specified key or keys. For example, suppose that you have HSM configurations that are tagged with keys called <code>owner</code> and <code>environment</code>. If you specify both of these tag keys in the request, Amazon Redshift returns a response with the HSM configurations that have either or both of these tag keys associated with them.
		 * @param {Array<String>} TagValues A tag value or values for which you want to return all matching HSM configurations that are associated with the specified tag value or values. For example, suppose that you have HSM configurations that are tagged with values called <code>admin</code> and <code>test</code>. If you specify both of these tag values in the request, Amazon Redshift returns a response with the HSM configurations that have either or both of these tag values associated with them.
		 * @return {void} Success
		 */
		GET_DescribeHsmConfigurations(HsmConfigurationIdentifier: string, MaxRecords: number, Marker: string, TagKeys: Array<String>, TagValues: Array<String>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DescribeHsmConfigurations?HsmConfigurationIdentifier=' + (HsmConfigurationIdentifier == null ? '' : encodeURIComponent(HsmConfigurationIdentifier)) + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&' + TagKeys.map(z => `TagKeys=${z}`).join('&') + '&' + TagValues.map(z => `TagValues=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Describes whether information, such as queries and connection attempts, is being logged for the specified Amazon Redshift cluster.
		 * Get /#Action=DescribeLoggingStatus
		 * @param {string} ClusterIdentifier <p>The identifier of the cluster from which to get the logging status.</p> <p>Example: <code>examplecluster</code> </p>
		 * @return {void} Success
		 */
		GET_DescribeLoggingStatus(ClusterIdentifier: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DescribeLoggingStatus?ClusterIdentifier=' + (ClusterIdentifier == null ? '' : encodeURIComponent(ClusterIdentifier)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns properties of possible node configurations such as node type, number of nodes, and disk usage for the specified action type.
		 * Get /#Action=DescribeNodeConfigurationOptions
		 * @param {ActionType} ActionType The action type to evaluate for possible node configurations. Specify "restore-cluster" to get configuration combinations based on an existing snapshot. Specify "recommend-node-config" to get configuration recommendations based on an existing cluster or snapshot. Specify "resize-cluster" to get configuration combinations for elastic resize based on an existing cluster. 
		 * @param {string} ClusterIdentifier The identifier of the cluster to evaluate for possible node configurations.
		 * @param {string} SnapshotIdentifier The identifier of the snapshot to evaluate for possible node configurations.
		 * @param {string} OwnerAccount The AWS customer account used to create or copy the snapshot. Required if you are restoring a snapshot you do not own, optional if you own the snapshot.
		 * @param {Array<NodeConfigurationOptionsFilter>} Filter A set of name, operator, and value items to filter the results.
		 * @param {string} Marker An optional parameter that specifies the starting point to return a set of response records. When the results of a <a>DescribeNodeConfigurationOptions</a> request exceed the value specified in <code>MaxRecords</code>, AWS returns a value in the <code>Marker</code> field of the response. You can retrieve the next set of response records by providing the returned marker value in the <code>Marker</code> parameter and retrying the request. 
		 * @param {number} MaxRecords <p>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified <code>MaxRecords</code> value, a value is returned in a <code>marker</code> field of the response. You can retrieve the next set of records by retrying the command with the returned marker value. </p> <p>Default: <code>500</code> </p> <p>Constraints: minimum 100, maximum 500.</p>
		 * @return {void} Success
		 */
		GET_DescribeNodeConfigurationOptions(ActionType: ActionType, ClusterIdentifier: string, SnapshotIdentifier: string, OwnerAccount: string, Filter: Array<NodeConfigurationOptionsFilter>, Marker: string, MaxRecords: number, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DescribeNodeConfigurationOptions?ActionType=' + ActionType + '&ClusterIdentifier=' + (ClusterIdentifier == null ? '' : encodeURIComponent(ClusterIdentifier)) + '&SnapshotIdentifier=' + (SnapshotIdentifier == null ? '' : encodeURIComponent(SnapshotIdentifier)) + '&OwnerAccount=' + (OwnerAccount == null ? '' : encodeURIComponent(OwnerAccount)) + '&' + Filter.map(z => `Filter=${z}`).join('&') + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxRecords=' + MaxRecords + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a list of orderable cluster options. Before you create a new cluster you can use this operation to find what options are available, such as the EC2 Availability Zones (AZ) in the specific AWS Region that you can specify, and the node types you can request. The node types differ by available storage, memory, CPU and price. With the cost involved you might want to obtain a list of cluster options in the specific region and specify values when creating a cluster. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.
		 * Get /#Action=DescribeOrderableClusterOptions
		 * @param {string} ClusterVersion <p>The version filter value. Specify this parameter to show only the available offerings matching the specified version.</p> <p>Default: All versions.</p> <p>Constraints: Must be one of the version returned from <a>DescribeClusterVersions</a>.</p>
		 * @param {string} NodeType The node type filter value. Specify this parameter to show only the available offerings matching the specified node type.
		 * @param {number} MaxRecords <p>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified <code>MaxRecords</code> value, a value is returned in a <code>marker</code> field of the response. You can retrieve the next set of records by retrying the command with the returned marker value. </p> <p>Default: <code>100</code> </p> <p>Constraints: minimum 20, maximum 100.</p>
		 * @param {string} Marker An optional parameter that specifies the starting point to return a set of response records. When the results of a <a>DescribeOrderableClusterOptions</a> request exceed the value specified in <code>MaxRecords</code>, AWS returns a value in the <code>Marker</code> field of the response. You can retrieve the next set of response records by providing the returned marker value in the <code>Marker</code> parameter and retrying the request. 
		 * @return {void} Success
		 */
		GET_DescribeOrderableClusterOptions(ClusterVersion: string, NodeType: string, MaxRecords: number, Marker: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DescribeOrderableClusterOptions?ClusterVersion=' + (ClusterVersion == null ? '' : encodeURIComponent(ClusterVersion)) + '&NodeType=' + (NodeType == null ? '' : encodeURIComponent(NodeType)) + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Returns a list of the available reserved node offerings by Amazon Redshift with their descriptions including the node type, the fixed and recurring costs of reserving the node and duration the node will be reserved for you. These descriptions help you determine which reserve node offering you want to purchase. You then use the unique offering ID in you call to <a>PurchaseReservedNodeOffering</a> to reserve one or more nodes for your Amazon Redshift cluster. </p> <p> For more information about reserved node offerings, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/purchase-reserved-node-instance.html">Purchasing Reserved Nodes</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
		 * Get /#Action=DescribeReservedNodeOfferings
		 * @param {string} ReservedNodeOfferingId The unique identifier for the offering.
		 * @param {number} MaxRecords <p>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified <code>MaxRecords</code> value, a value is returned in a <code>marker</code> field of the response. You can retrieve the next set of records by retrying the command with the returned marker value. </p> <p>Default: <code>100</code> </p> <p>Constraints: minimum 20, maximum 100.</p>
		 * @param {string} Marker An optional parameter that specifies the starting point to return a set of response records. When the results of a <a>DescribeReservedNodeOfferings</a> request exceed the value specified in <code>MaxRecords</code>, AWS returns a value in the <code>Marker</code> field of the response. You can retrieve the next set of response records by providing the returned marker value in the <code>Marker</code> parameter and retrying the request. 
		 * @return {void} Success
		 */
		GET_DescribeReservedNodeOfferings(ReservedNodeOfferingId: string, MaxRecords: number, Marker: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DescribeReservedNodeOfferings?ReservedNodeOfferingId=' + (ReservedNodeOfferingId == null ? '' : encodeURIComponent(ReservedNodeOfferingId)) + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the descriptions of the reserved nodes.
		 * Get /#Action=DescribeReservedNodes
		 * @param {string} ReservedNodeId Identifier for the node reservation.
		 * @param {number} MaxRecords <p>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified <code>MaxRecords</code> value, a value is returned in a <code>marker</code> field of the response. You can retrieve the next set of records by retrying the command with the returned marker value. </p> <p>Default: <code>100</code> </p> <p>Constraints: minimum 20, maximum 100.</p>
		 * @param {string} Marker An optional parameter that specifies the starting point to return a set of response records. When the results of a <a>DescribeReservedNodes</a> request exceed the value specified in <code>MaxRecords</code>, AWS returns a value in the <code>Marker</code> field of the response. You can retrieve the next set of response records by providing the returned marker value in the <code>Marker</code> parameter and retrying the request. 
		 * @return {void} Success
		 */
		GET_DescribeReservedNodes(ReservedNodeId: string, MaxRecords: number, Marker: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DescribeReservedNodes?ReservedNodeId=' + (ReservedNodeId == null ? '' : encodeURIComponent(ReservedNodeId)) + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Returns information about the last resize operation for the specified cluster. If no resize operation has ever been initiated for the specified cluster, a <code>HTTP 404</code> error is returned. If a resize operation was initiated and completed, the status of the resize remains as <code>SUCCEEDED</code> until the next resize. </p> <p>A resize operation can be requested using <a>ModifyCluster</a> and specifying a different number or type of nodes for the cluster. </p>
		 * Get /#Action=DescribeResize
		 * @param {string} ClusterIdentifier <p>The unique identifier of a cluster whose resize progress you are requesting. This parameter is case-sensitive.</p> <p>By default, resize operations for all clusters defined for an AWS account are returned.</p>
		 * @return {void} Success
		 */
		GET_DescribeResize(ClusterIdentifier: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DescribeResize?ClusterIdentifier=' + (ClusterIdentifier == null ? '' : encodeURIComponent(ClusterIdentifier)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Describes properties of scheduled actions.
		 * Get /#Action=DescribeScheduledActions
		 * @param {string} ScheduledActionName The name of the scheduled action to retrieve. 
		 * @param {ScheduledActionTypeValues} TargetActionType The type of the scheduled actions to retrieve. 
		 * @param {Date} StartTime The start time in UTC of the scheduled actions to retrieve. Only active scheduled actions that have invocations after this time are retrieved.
		 * @param {Date} EndTime The end time in UTC of the scheduled action to retrieve. Only active scheduled actions that have invocations before this time are retrieved.
		 * @param {boolean} Active If true, retrieve only active scheduled actions. If false, retrieve only disabled scheduled actions. 
		 * @param {Array<ScheduledActionFilter>} Filters List of scheduled action filters. 
		 * @param {string} Marker An optional parameter that specifies the starting point to return a set of response records. When the results of a <a>DescribeScheduledActions</a> request exceed the value specified in <code>MaxRecords</code>, AWS returns a value in the <code>Marker</code> field of the response. You can retrieve the next set of response records by providing the returned marker value in the <code>Marker</code> parameter and retrying the request. 
		 * @param {number} MaxRecords <p>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified <code>MaxRecords</code> value, a value is returned in a <code>marker</code> field of the response. You can retrieve the next set of records by retrying the command with the returned marker value. </p> <p>Default: <code>100</code> </p> <p>Constraints: minimum 20, maximum 100.</p>
		 * @return {void} Success
		 */
		GET_DescribeScheduledActions(ScheduledActionName: string, TargetActionType: ScheduledActionTypeValues, StartTime: Date, EndTime: Date, Active: boolean, Filters: Array<ScheduledActionFilter>, Marker: string, MaxRecords: number, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DescribeScheduledActions?ScheduledActionName=' + (ScheduledActionName == null ? '' : encodeURIComponent(ScheduledActionName)) + '&TargetActionType=' + TargetActionType + '&StartTime=' + StartTime.toISOString() + '&EndTime=' + EndTime.toISOString() + '&Active=' + Active + '&' + Filters.map(z => `Filters=${z}`).join('&') + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxRecords=' + MaxRecords + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Returns a list of snapshot copy grants owned by the AWS account in the destination region.</p> <p> For more information about managing snapshot copy grants, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html">Amazon Redshift Database Encryption</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
		 * Get /#Action=DescribeSnapshotCopyGrants
		 * @param {string} SnapshotCopyGrantName The name of the snapshot copy grant.
		 * @param {number} MaxRecords <p>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified <code>MaxRecords</code> value, a value is returned in a <code>marker</code> field of the response. You can retrieve the next set of records by retrying the command with the returned marker value. </p> <p>Default: <code>100</code> </p> <p>Constraints: minimum 20, maximum 100.</p>
		 * @param {string} Marker <p>An optional parameter that specifies the starting point to return a set of response records. When the results of a <code>DescribeSnapshotCopyGrant</code> request exceed the value specified in <code>MaxRecords</code>, AWS returns a value in the <code>Marker</code> field of the response. You can retrieve the next set of response records by providing the returned marker value in the <code>Marker</code> parameter and retrying the request. </p> <p>Constraints: You can specify either the <b>SnapshotCopyGrantName</b> parameter or the <b>Marker</b> parameter, but not both. </p>
		 * @param {Array<String>} TagKeys A tag key or keys for which you want to return all matching resources that are associated with the specified key or keys. For example, suppose that you have resources tagged with keys called <code>owner</code> and <code>environment</code>. If you specify both of these tag keys in the request, Amazon Redshift returns a response with all resources that have either or both of these tag keys associated with them.
		 * @param {Array<String>} TagValues A tag value or values for which you want to return all matching resources that are associated with the specified value or values. For example, suppose that you have resources tagged with values called <code>admin</code> and <code>test</code>. If you specify both of these tag values in the request, Amazon Redshift returns a response with all resources that have either or both of these tag values associated with them.
		 * @return {void} Success
		 */
		GET_DescribeSnapshotCopyGrants(SnapshotCopyGrantName: string, MaxRecords: number, Marker: string, TagKeys: Array<String>, TagValues: Array<String>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DescribeSnapshotCopyGrants?SnapshotCopyGrantName=' + (SnapshotCopyGrantName == null ? '' : encodeURIComponent(SnapshotCopyGrantName)) + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&' + TagKeys.map(z => `TagKeys=${z}`).join('&') + '&' + TagValues.map(z => `TagValues=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a list of snapshot schedules.
		 * Get /#Action=DescribeSnapshotSchedules
		 * @param {string} ClusterIdentifier The unique identifier for the cluster whose snapshot schedules you want to view.
		 * @param {string} ScheduleIdentifier A unique identifier for a snapshot schedule.
		 * @param {Array<String>} TagKeys The key value for a snapshot schedule tag.
		 * @param {Array<String>} TagValues The value corresponding to the key of the snapshot schedule tag.
		 * @param {string} Marker A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned marker value in the <code>marker</code> parameter and retrying the command. If the <code>marker</code> field is empty, all response records have been retrieved for the request.
		 * @param {number} MaxRecords The maximum number or response records to return in each call. If the number of remaining response records exceeds the specified <code>MaxRecords</code> value, a value is returned in a <code>marker</code> field of the response. You can retrieve the next set of records by retrying the command with the returned <code>marker</code> value.
		 * @return {void} Success
		 */
		GET_DescribeSnapshotSchedules(ClusterIdentifier: string, ScheduleIdentifier: string, TagKeys: Array<String>, TagValues: Array<String>, Marker: string, MaxRecords: number, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DescribeSnapshotSchedules?ClusterIdentifier=' + (ClusterIdentifier == null ? '' : encodeURIComponent(ClusterIdentifier)) + '&ScheduleIdentifier=' + (ScheduleIdentifier == null ? '' : encodeURIComponent(ScheduleIdentifier)) + '&' + TagKeys.map(z => `TagKeys=${z}`).join('&') + '&' + TagValues.map(z => `TagValues=${z}`).join('&') + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxRecords=' + MaxRecords + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns account level backups storage size and provisional storage.
		 * Get /#Action=DescribeStorage
		 * @return {void} Success
		 */
		GET_DescribeStorage(Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DescribeStorage?Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns account level backups storage size and provisional storage.
		 * Post /#Action=DescribeStorage
		 * @return {void} Success
		 */
		POST_DescribeStorage(Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DescribeStorage?Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'post', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Lists the status of one or more table restore requests made using the <a>RestoreTableFromClusterSnapshot</a> API action. If you don't specify a value for the <code>TableRestoreRequestId</code> parameter, then <code>DescribeTableRestoreStatus</code> returns the status of all table restore requests ordered by the date and time of the request in ascending order. Otherwise <code>DescribeTableRestoreStatus</code> returns the status of the table specified by <code>TableRestoreRequestId</code>.
		 * Get /#Action=DescribeTableRestoreStatus
		 * @param {string} ClusterIdentifier The Amazon Redshift cluster that the table is being restored to.
		 * @param {string} TableRestoreRequestId The identifier of the table restore request to return status for. If you don't specify a <code>TableRestoreRequestId</code> value, then <code>DescribeTableRestoreStatus</code> returns the status of all in-progress table restore requests.
		 * @param {number} MaxRecords The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.
		 * @param {string} Marker An optional pagination token provided by a previous <code>DescribeTableRestoreStatus</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by the <code>MaxRecords</code> parameter.
		 * @return {void} Success
		 */
		GET_DescribeTableRestoreStatus(ClusterIdentifier: string, TableRestoreRequestId: string, MaxRecords: number, Marker: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DescribeTableRestoreStatus?ClusterIdentifier=' + (ClusterIdentifier == null ? '' : encodeURIComponent(ClusterIdentifier)) + '&TableRestoreRequestId=' + (TableRestoreRequestId == null ? '' : encodeURIComponent(TableRestoreRequestId)) + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Returns a list of tags. You can return tags from a specific resource by specifying an ARN, or you can return all tags for a given type of resource, such as clusters, snapshots, and so on.</p> <p>The following are limitations for <code>DescribeTags</code>: </p> <ul> <li> <p>You cannot specify an ARN and a resource-type value together in the same request.</p> </li> <li> <p>You cannot use the <code>MaxRecords</code> and <code>Marker</code> parameters together with the ARN parameter.</p> </li> <li> <p>The <code>MaxRecords</code> parameter can be a range from 10 to 50 results to return in a request.</p> </li> </ul> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all resources that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all resources that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, resources are returned regardless of whether they have tag keys or values associated with them.</p>
		 * Get /#Action=DescribeTags
		 * @param {string} ResourceName The Amazon Resource Name (ARN) for which you want to describe the tag or tags. For example, <code>arn:aws:redshift:us-east-2:123456789:cluster:t1</code>. 
		 * @param {string} ResourceType <p>The type of resource with which you want to view tags. Valid resource types are: </p> <ul> <li> <p>Cluster</p> </li> <li> <p>CIDR/IP</p> </li> <li> <p>EC2 security group</p> </li> <li> <p>Snapshot</p> </li> <li> <p>Cluster security group</p> </li> <li> <p>Subnet group</p> </li> <li> <p>HSM connection</p> </li> <li> <p>HSM certificate</p> </li> <li> <p>Parameter group</p> </li> <li> <p>Snapshot copy grant</p> </li> </ul> <p>For more information about Amazon Redshift resource types and constructing ARNs, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-iam-access-control-specify-actions">Specifying Policy Elements: Actions, Effects, Resources, and Principals</a> in the Amazon Redshift Cluster Management Guide. </p>
		 * @param {number} MaxRecords The maximum number or response records to return in each call. If the number of remaining response records exceeds the specified <code>MaxRecords</code> value, a value is returned in a <code>marker</code> field of the response. You can retrieve the next set of records by retrying the command with the returned <code>marker</code> value. 
		 * @param {string} Marker A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned marker value in the <code>marker</code> parameter and retrying the command. If the <code>marker</code> field is empty, all response records have been retrieved for the request. 
		 * @param {Array<String>} TagKeys A tag key or keys for which you want to return all matching resources that are associated with the specified key or keys. For example, suppose that you have resources tagged with keys called <code>owner</code> and <code>environment</code>. If you specify both of these tag keys in the request, Amazon Redshift returns a response with all resources that have either or both of these tag keys associated with them.
		 * @param {Array<String>} TagValues A tag value or values for which you want to return all matching resources that are associated with the specified value or values. For example, suppose that you have resources tagged with values called <code>admin</code> and <code>test</code>. If you specify both of these tag values in the request, Amazon Redshift returns a response with all resources that have either or both of these tag values associated with them.
		 * @return {void} Success
		 */
		GET_DescribeTags(ResourceName: string, ResourceType: string, MaxRecords: number, Marker: string, TagKeys: Array<String>, TagValues: Array<String>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DescribeTags?ResourceName=' + (ResourceName == null ? '' : encodeURIComponent(ResourceName)) + '&ResourceType=' + (ResourceType == null ? '' : encodeURIComponent(ResourceType)) + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&' + TagKeys.map(z => `TagKeys=${z}`).join('&') + '&' + TagValues.map(z => `TagValues=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Shows usage limits on a cluster. Results are filtered based on the combination of input usage limit identifier, cluster identifier, and feature type parameters:</p> <ul> <li> <p>If usage limit identifier, cluster identifier, and feature type are not provided, then all usage limit objects for the current account in the current region are returned.</p> </li> <li> <p>If usage limit identifier is provided, then the corresponding usage limit object is returned.</p> </li> <li> <p>If cluster identifier is provided, then all usage limit objects for the specified cluster are returned.</p> </li> <li> <p>If cluster identifier and feature type are provided, then all usage limit objects for the combination of cluster and feature are returned.</p> </li> </ul>
		 * Get /#Action=DescribeUsageLimits
		 * @param {string} UsageLimitId The identifier of the usage limit to describe.
		 * @param {string} ClusterIdentifier The identifier of the cluster for which you want to describe usage limits.
		 * @param {UsageLimitFeatureType} FeatureType The feature type for which you want to describe usage limits.
		 * @param {number} MaxRecords <p>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified <code>MaxRecords</code> value, a value is returned in a <code>marker</code> field of the response. You can retrieve the next set of records by retrying the command with the returned marker value. </p> <p>Default: <code>100</code> </p> <p>Constraints: minimum 20, maximum 100.</p>
		 * @param {string} Marker An optional parameter that specifies the starting point to return a set of response records. When the results of a <a>DescribeUsageLimits</a> request exceed the value specified in <code>MaxRecords</code>, AWS returns a value in the <code>Marker</code> field of the response. You can retrieve the next set of response records by providing the returned marker value in the <code>Marker</code> parameter and retrying the request. 
		 * @param {Array<String>} TagKeys A tag key or keys for which you want to return all matching usage limit objects that are associated with the specified key or keys. For example, suppose that you have parameter groups that are tagged with keys called <code>owner</code> and <code>environment</code>. If you specify both of these tag keys in the request, Amazon Redshift returns a response with the usage limit objects have either or both of these tag keys associated with them.
		 * @param {Array<String>} TagValues A tag value or values for which you want to return all matching usage limit objects that are associated with the specified tag value or values. For example, suppose that you have parameter groups that are tagged with values called <code>admin</code> and <code>test</code>. If you specify both of these tag values in the request, Amazon Redshift returns a response with the usage limit objects that have either or both of these tag values associated with them.
		 * @return {void} Success
		 */
		GET_DescribeUsageLimits(UsageLimitId: string, ClusterIdentifier: string, FeatureType: UsageLimitFeatureType, MaxRecords: number, Marker: string, TagKeys: Array<String>, TagValues: Array<String>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DescribeUsageLimits?UsageLimitId=' + (UsageLimitId == null ? '' : encodeURIComponent(UsageLimitId)) + '&ClusterIdentifier=' + (ClusterIdentifier == null ? '' : encodeURIComponent(ClusterIdentifier)) + '&FeatureType=' + FeatureType + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&' + TagKeys.map(z => `TagKeys=${z}`).join('&') + '&' + TagValues.map(z => `TagValues=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Stops logging information, such as queries and connection attempts, for the specified Amazon Redshift cluster.
		 * Get /#Action=DisableLogging
		 * @param {string} ClusterIdentifier <p>The identifier of the cluster on which logging is to be stopped.</p> <p>Example: <code>examplecluster</code> </p>
		 * @return {void} Success
		 */
		GET_DisableLogging(ClusterIdentifier: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DisableLogging?ClusterIdentifier=' + (ClusterIdentifier == null ? '' : encodeURIComponent(ClusterIdentifier)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Disables the automatic copying of snapshots from one region to another region for a specified cluster.</p> <p>If your cluster and its snapshots are encrypted using a customer master key (CMK) from AWS KMS, use <a>DeleteSnapshotCopyGrant</a> to delete the grant that grants Amazon Redshift permission to the CMK in the destination region. </p>
		 * Get /#Action=DisableSnapshotCopy
		 * @param {string} ClusterIdentifier <p>The unique identifier of the source cluster that you want to disable copying of snapshots to a destination region.</p> <p>Constraints: Must be the valid name of an existing cluster that has cross-region snapshot copy enabled.</p>
		 * @return {void} Success
		 */
		GET_DisableSnapshotCopy(ClusterIdentifier: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=DisableSnapshotCopy?ClusterIdentifier=' + (ClusterIdentifier == null ? '' : encodeURIComponent(ClusterIdentifier)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Starts logging information, such as queries and connection attempts, for the specified Amazon Redshift cluster.
		 * Get /#Action=EnableLogging
		 * @param {string} ClusterIdentifier <p>The identifier of the cluster on which logging is to be started.</p> <p>Example: <code>examplecluster</code> </p>
		 * @param {string} BucketName <p>The name of an existing S3 bucket where the log files are to be stored.</p> <p>Constraints:</p> <ul> <li> <p>Must be in the same region as the cluster</p> </li> <li> <p>The cluster must have read bucket and put object permissions</p> </li> </ul>
		 * @param {string} S3KeyPrefix <p>The prefix applied to the log file names.</p> <p>Constraints:</p> <ul> <li> <p>Cannot exceed 512 characters</p> </li> <li> <p>Cannot contain spaces( ), double quotes ("), single quotes ('), a backslash (\), or control characters. The hexadecimal codes for invalid characters are: </p> <ul> <li> <p>x00 to x20</p> </li> <li> <p>x22</p> </li> <li> <p>x27</p> </li> <li> <p>x5c</p> </li> <li> <p>x7f or larger</p> </li> </ul> </li> </ul>
		 * @return {void} Success
		 */
		GET_EnableLogging(ClusterIdentifier: string, BucketName: string, S3KeyPrefix: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=EnableLogging?ClusterIdentifier=' + (ClusterIdentifier == null ? '' : encodeURIComponent(ClusterIdentifier)) + '&BucketName=' + (BucketName == null ? '' : encodeURIComponent(BucketName)) + '&S3KeyPrefix=' + (S3KeyPrefix == null ? '' : encodeURIComponent(S3KeyPrefix)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Enables the automatic copy of snapshots from one region to another region for a specified cluster.
		 * Get /#Action=EnableSnapshotCopy
		 * @param {string} ClusterIdentifier <p>The unique identifier of the source cluster to copy snapshots from.</p> <p>Constraints: Must be the valid name of an existing cluster that does not already have cross-region snapshot copy enabled.</p>
		 * @param {string} DestinationRegion <p>The destination AWS Region that you want to copy snapshots to.</p> <p>Constraints: Must be the name of a valid AWS Region. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#redshift_region">Regions and Endpoints</a> in the Amazon Web Services General Reference. </p>
		 * @param {number} RetentionPeriod <p>The number of days to retain automated snapshots in the destination region after they are copied from the source region.</p> <p>Default: 7.</p> <p>Constraints: Must be at least 1 and no more than 35.</p>
		 * @param {string} SnapshotCopyGrantName The name of the snapshot copy grant to use when snapshots of an AWS KMS-encrypted cluster are copied to the destination region.
		 * @param {number} ManualSnapshotRetentionPeriod <p>The number of days to retain newly copied snapshots in the destination AWS Region after they are copied from the source AWS Region. If the value is -1, the manual snapshot is retained indefinitely. </p> <p>The value must be either -1 or an integer between 1 and 3,653.</p>
		 * @return {void} Success
		 */
		GET_EnableSnapshotCopy(ClusterIdentifier: string, DestinationRegion: string, RetentionPeriod: number, SnapshotCopyGrantName: string, ManualSnapshotRetentionPeriod: number, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=EnableSnapshotCopy?ClusterIdentifier=' + (ClusterIdentifier == null ? '' : encodeURIComponent(ClusterIdentifier)) + '&DestinationRegion=' + (DestinationRegion == null ? '' : encodeURIComponent(DestinationRegion)) + '&RetentionPeriod=' + RetentionPeriod + '&SnapshotCopyGrantName=' + (SnapshotCopyGrantName == null ? '' : encodeURIComponent(SnapshotCopyGrantName)) + '&ManualSnapshotRetentionPeriod=' + ManualSnapshotRetentionPeriod + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Returns a database user name and temporary password with temporary authorization to log on to an Amazon Redshift database. The action returns the database user name prefixed with <code>IAM:</code> if <code>AutoCreate</code> is <code>False</code> or <code>IAMA:</code> if <code>AutoCreate</code> is <code>True</code>. You can optionally specify one or more database user groups that the user will join at log on. By default, the temporary credentials expire in 900 seconds. You can optionally specify a duration between 900 seconds (15 minutes) and 3600 seconds (60 minutes). For more information, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/generating-user-credentials.html">Using IAM Authentication to Generate Database User Credentials</a> in the Amazon Redshift Cluster Management Guide.</p> <p>The AWS Identity and Access Management (IAM)user or role that executes GetClusterCredentials must have an IAM policy attached that allows access to all necessary actions and resources. For more information about permissions, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-identity-based.html#redshift-policy-resources.getclustercredentials-resources">Resource Policies for GetClusterCredentials</a> in the Amazon Redshift Cluster Management Guide.</p> <p>If the <code>DbGroups</code> parameter is specified, the IAM policy must allow the <code>redshift:JoinGroup</code> action with access to the listed <code>dbgroups</code>. </p> <p>In addition, if the <code>AutoCreate</code> parameter is set to <code>True</code>, then the policy must include the <code>redshift:CreateClusterUser</code> privilege.</p> <p>If the <code>DbName</code> parameter is specified, the IAM policy must allow access to the resource <code>dbname</code> for the specified database name. </p>
		 * Get /#Action=GetClusterCredentials
		 * @param {string} DbUser <p>The name of a database user. If a user name matching <code>DbUser</code> exists in the database, the temporary user credentials have the same permissions as the existing user. If <code>DbUser</code> doesn't exist in the database and <code>Autocreate</code> is <code>True</code>, a new user is created using the value for <code>DbUser</code> with PUBLIC permissions. If a database user matching the value for <code>DbUser</code> doesn't exist and <code>Autocreate</code> is <code>False</code>, then the command succeeds but the connection attempt will fail because the user doesn't exist in the database.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/redshift/latest/dg/r_CREATE_USER.html">CREATE USER</a> in the Amazon Redshift Database Developer Guide. </p> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 64 alphanumeric characters or hyphens. The user name can't be <code>PUBLIC</code>.</p> </li> <li> <p>Must contain only lowercase letters, numbers, underscore, plus sign, period (dot), at symbol (@), or hyphen.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Must not contain a colon ( : ) or slash ( / ). </p> </li> <li> <p>Cannot be a reserved word. A list of reserved words can be found in <a href="http://docs.aws.amazon.com/redshift/latest/dg/r_pg_keywords.html">Reserved Words</a> in the Amazon Redshift Database Developer Guide.</p> </li> </ul>
		 * @param {string} DbName <p>The name of a database that <code>DbUser</code> is authorized to log on to. If <code>DbName</code> is not specified, <code>DbUser</code> can log on to any existing database.</p> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 64 alphanumeric characters or hyphens</p> </li> <li> <p>Must contain only lowercase letters, numbers, underscore, plus sign, period (dot), at symbol (@), or hyphen.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Must not contain a colon ( : ) or slash ( / ). </p> </li> <li> <p>Cannot be a reserved word. A list of reserved words can be found in <a href="http://docs.aws.amazon.com/redshift/latest/dg/r_pg_keywords.html">Reserved Words</a> in the Amazon Redshift Database Developer Guide.</p> </li> </ul>
		 * @param {string} ClusterIdentifier The unique identifier of the cluster that contains the database for which your are requesting credentials. This parameter is case sensitive.
		 * @param {number} DurationSeconds <p>The number of seconds until the returned temporary password expires.</p> <p>Constraint: minimum 900, maximum 3600.</p> <p>Default: 900</p>
		 * @param {boolean} AutoCreate Create a database user with the name specified for the user named in <code>DbUser</code> if one does not exist.
		 * @param {Array<String>} DbGroups <p>A list of the names of existing database groups that the user named in <code>DbUser</code> will join for the current session, in addition to any group memberships for an existing user. If not specified, a new user is added only to PUBLIC.</p> <p>Database group name constraints</p> <ul> <li> <p>Must be 1 to 64 alphanumeric characters or hyphens</p> </li> <li> <p>Must contain only lowercase letters, numbers, underscore, plus sign, period (dot), at symbol (@), or hyphen.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Must not contain a colon ( : ) or slash ( / ). </p> </li> <li> <p>Cannot be a reserved word. A list of reserved words can be found in <a href="http://docs.aws.amazon.com/redshift/latest/dg/r_pg_keywords.html">Reserved Words</a> in the Amazon Redshift Database Developer Guide.</p> </li> </ul>
		 * @return {void} Success
		 */
		GET_GetClusterCredentials(DbUser: string, DbName: string, ClusterIdentifier: string, DurationSeconds: number, AutoCreate: boolean, DbGroups: Array<String>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=GetClusterCredentials?DbUser=' + (DbUser == null ? '' : encodeURIComponent(DbUser)) + '&DbName=' + (DbName == null ? '' : encodeURIComponent(DbName)) + '&ClusterIdentifier=' + (ClusterIdentifier == null ? '' : encodeURIComponent(ClusterIdentifier)) + '&DurationSeconds=' + DurationSeconds + '&AutoCreate=' + AutoCreate + '&' + DbGroups.map(z => `DbGroups=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns an array of DC2 ReservedNodeOfferings that matches the payment type, term, and usage price of the given DC1 reserved node.
		 * Get /#Action=GetReservedNodeExchangeOfferings
		 * @param {string} ReservedNodeId A string representing the node identifier for the DC1 Reserved Node to be exchanged.
		 * @param {number} MaxRecords An integer setting the maximum number of ReservedNodeOfferings to retrieve.
		 * @param {string} Marker A value that indicates the starting point for the next set of ReservedNodeOfferings.
		 * @return {void} Success
		 */
		GET_GetReservedNodeExchangeOfferings(ReservedNodeId: string, MaxRecords: number, Marker: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=GetReservedNodeExchangeOfferings?ReservedNodeId=' + (ReservedNodeId == null ? '' : encodeURIComponent(ReservedNodeId)) + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Modifies the settings for a cluster.</p> <p>You can also change node type and the number of nodes to scale up or down the cluster. When resizing a cluster, you must specify both the number of nodes and the node type even if one of the parameters does not change.</p> <p>You can add another security or parameter group, or change the master user password. Resetting a cluster password or modifying the security groups associated with a cluster do not need a reboot. However, modifying a parameter group requires a reboot for parameters to take effect. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
		 * Get /#Action=ModifyCluster
		 * @param {string} ClusterIdentifier <p>The unique identifier of the cluster to be modified.</p> <p>Example: <code>examplecluster</code> </p>
		 * @param {string} ClusterType <p>The new cluster type.</p> <p>When you submit your cluster resize request, your existing cluster goes into a read-only mode. After Amazon Redshift provisions a new cluster based on your resize requirements, there will be outage for a period while the old cluster is deleted and your connection is switched to the new cluster. You can use <a>DescribeResize</a> to track the progress of the resize request. </p> <p>Valid Values: <code> multi-node | single-node </code> </p>
		 * @param {string} NodeType <p>The new node type of the cluster. If you specify a new node type, you must also specify the number of nodes parameter.</p> <p> For more information about resizing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/rs-resize-tutorial.html">Resizing Clusters in Amazon Redshift</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>Valid Values: <code>ds2.xlarge</code> | <code>ds2.8xlarge</code> | <code>dc1.large</code> | <code>dc1.8xlarge</code> | <code>dc2.large</code> | <code>dc2.8xlarge</code> | <code>ra3.4xlarge</code> | <code>ra3.16xlarge</code> </p>
		 * @param {number} NumberOfNodes <p>The new number of nodes of the cluster. If you specify a new number of nodes, you must also specify the node type parameter.</p> <p> For more information about resizing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/rs-resize-tutorial.html">Resizing Clusters in Amazon Redshift</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>Valid Values: Integer greater than <code>0</code>.</p>
		 * @param {Array<String>} ClusterSecurityGroups <p>A list of cluster security groups to be authorized on this cluster. This change is asynchronously applied as soon as possible.</p> <p>Security groups currently associated with the cluster, and not in the list of groups to apply, will be revoked from the cluster.</p> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 255 alphanumeric characters or hyphens</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> </ul>
		 * @param {Array<String>} VpcSecurityGroupIds A list of virtual private cloud (VPC) security groups to be associated with the cluster. This change is asynchronously applied as soon as possible.
		 * @param {string} MasterUserPassword <p>The new password for the cluster master user. This change is asynchronously applied as soon as possible. Between the time of the request and the completion of the request, the <code>MasterUserPassword</code> element exists in the <code>PendingModifiedValues</code> element of the operation response. </p> <note> <p>Operations never return the password, so this operation provides a way to regain access to the master user account for a cluster if the password is lost.</p> </note> <p>Default: Uses existing setting.</p> <p>Constraints:</p> <ul> <li> <p>Must be between 8 and 64 characters in length.</p> </li> <li> <p>Must contain at least one uppercase letter.</p> </li> <li> <p>Must contain at least one lowercase letter.</p> </li> <li> <p>Must contain one number.</p> </li> <li> <p>Can be any printable ASCII character (ASCII code 33 to 126) except ' (single quote), " (double quote), \, /, @, or space.</p> </li> </ul>
		 * @param {string} ClusterParameterGroupName <p>The name of the cluster parameter group to apply to this cluster. This change is applied only after the cluster is rebooted. To reboot a cluster use <a>RebootCluster</a>. </p> <p>Default: Uses existing setting.</p> <p>Constraints: The cluster parameter group must be in the same parameter group family that matches the cluster version.</p>
		 * @param {number} AutomatedSnapshotRetentionPeriod <p>The number of days that automated snapshots are retained. If the value is 0, automated snapshots are disabled. Even if automated snapshots are disabled, you can still create manual snapshots when you want with <a>CreateClusterSnapshot</a>. </p> <p>If you decrease the automated snapshot retention period from its current value, existing automated snapshots that fall outside of the new retention period will be immediately deleted.</p> <p>Default: Uses existing setting.</p> <p>Constraints: Must be a value from 0 to 35.</p>
		 * @param {number} ManualSnapshotRetentionPeriod <p>The default for number of days that a newly created manual snapshot is retained. If the value is -1, the manual snapshot is retained indefinitely. This value doesn't retroactively change the retention periods of existing manual snapshots.</p> <p>The value must be either -1 or an integer between 1 and 3,653.</p> <p>The default value is -1.</p>
		 * @param {string} PreferredMaintenanceWindow <p>The weekly time range (in UTC) during which system maintenance can occur, if necessary. If system maintenance is necessary during the window, it may result in an outage.</p> <p>This maintenance window change is made immediately. If the new maintenance window indicates the current time, there must be at least 120 minutes between the current time and end of the window in order to ensure that pending changes are applied.</p> <p>Default: Uses existing setting.</p> <p>Format: ddd:hh24:mi-ddd:hh24:mi, for example <code>wed:07:30-wed:08:00</code>.</p> <p>Valid Days: Mon | Tue | Wed | Thu | Fri | Sat | Sun</p> <p>Constraints: Must be at least 30 minutes.</p>
		 * @param {string} ClusterVersion <p>The new version number of the Amazon Redshift engine to upgrade to.</p> <p>For major version upgrades, if a non-default cluster parameter group is currently in use, a new cluster parameter group in the cluster parameter group family for the new version must be specified. The new cluster parameter group can be the default for that cluster parameter group family. For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>Example: <code>1.0</code> </p>
		 * @param {boolean} AllowVersionUpgrade <p>If <code>true</code>, major version upgrades will be applied automatically to the cluster during the maintenance window. </p> <p>Default: <code>false</code> </p>
		 * @param {string} HsmClientCertificateIdentifier Specifies the name of the HSM client certificate the Amazon Redshift cluster uses to retrieve the data encryption keys stored in an HSM.
		 * @param {string} HsmConfigurationIdentifier Specifies the name of the HSM configuration that contains the information the Amazon Redshift cluster can use to retrieve and store keys in an HSM.
		 * @param {string} NewClusterIdentifier <p>The new identifier for the cluster.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 alphanumeric characters or hyphens.</p> </li> <li> <p>Alphabetic characters must be lowercase.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> <li> <p>Must be unique for all clusters within an AWS account.</p> </li> </ul> <p>Example: <code>examplecluster</code> </p>
		 * @param {boolean} PubliclyAccessible If <code>true</code>, the cluster can be accessed from a public network. Only clusters in VPCs can be set to be publicly available.
		 * @param {string} ElasticIp <p>The Elastic IP (EIP) address for the cluster.</p> <p>Constraints: The cluster must be provisioned in EC2-VPC and publicly-accessible through an Internet gateway. For more information about provisioning clusters in EC2-VPC, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#cluster-platforms">Supported Platforms to Launch Your Cluster</a> in the Amazon Redshift Cluster Management Guide.</p>
		 * @param {boolean} EnhancedVpcRouting <p>An option that specifies whether to create the cluster with enhanced VPC routing enabled. To create a cluster that uses enhanced VPC routing, the cluster must be in a VPC. For more information, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/enhanced-vpc-routing.html">Enhanced VPC Routing</a> in the Amazon Redshift Cluster Management Guide.</p> <p>If this option is <code>true</code>, enhanced VPC routing is enabled. </p> <p>Default: false</p>
		 * @param {string} MaintenanceTrackName The name for the maintenance track that you want to assign for the cluster. This name change is asynchronous. The new track name stays in the <code>PendingModifiedValues</code> for the cluster until the next maintenance window. When the maintenance track changes, the cluster is switched to the latest cluster release available for the maintenance track. At this point, the maintenance track name is applied.
		 * @param {boolean} Encrypted <p>Indicates whether the cluster is encrypted. If the value is encrypted (true) and you provide a value for the <code>KmsKeyId</code> parameter, we encrypt the cluster with the provided <code>KmsKeyId</code>. If you don't provide a <code>KmsKeyId</code>, we encrypt with the default key. In the China region we use legacy encryption if you specify that the cluster is encrypted.</p> <p>If the value is not encrypted (false), then the cluster is decrypted. </p>
		 * @param {string} KmsKeyId The AWS Key Management Service (KMS) key ID of the encryption key that you want to use to encrypt data in the cluster.
		 * @return {void} Success
		 */
		GET_ModifyCluster(ClusterIdentifier: string, ClusterType: string, NodeType: string, NumberOfNodes: number, ClusterSecurityGroups: Array<String>, VpcSecurityGroupIds: Array<String>, MasterUserPassword: string, ClusterParameterGroupName: string, AutomatedSnapshotRetentionPeriod: number, ManualSnapshotRetentionPeriod: number, PreferredMaintenanceWindow: string, ClusterVersion: string, AllowVersionUpgrade: boolean, HsmClientCertificateIdentifier: string, HsmConfigurationIdentifier: string, NewClusterIdentifier: string, PubliclyAccessible: boolean, ElasticIp: string, EnhancedVpcRouting: boolean, MaintenanceTrackName: string, Encrypted: boolean, KmsKeyId: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=ModifyCluster?ClusterIdentifier=' + (ClusterIdentifier == null ? '' : encodeURIComponent(ClusterIdentifier)) + '&ClusterType=' + (ClusterType == null ? '' : encodeURIComponent(ClusterType)) + '&NodeType=' + (NodeType == null ? '' : encodeURIComponent(NodeType)) + '&NumberOfNodes=' + NumberOfNodes + '&' + ClusterSecurityGroups.map(z => `ClusterSecurityGroups=${z}`).join('&') + '&' + VpcSecurityGroupIds.map(z => `VpcSecurityGroupIds=${z}`).join('&') + '&MasterUserPassword=' + (MasterUserPassword == null ? '' : encodeURIComponent(MasterUserPassword)) + '&ClusterParameterGroupName=' + (ClusterParameterGroupName == null ? '' : encodeURIComponent(ClusterParameterGroupName)) + '&AutomatedSnapshotRetentionPeriod=' + AutomatedSnapshotRetentionPeriod + '&ManualSnapshotRetentionPeriod=' + ManualSnapshotRetentionPeriod + '&PreferredMaintenanceWindow=' + (PreferredMaintenanceWindow == null ? '' : encodeURIComponent(PreferredMaintenanceWindow)) + '&ClusterVersion=' + (ClusterVersion == null ? '' : encodeURIComponent(ClusterVersion)) + '&AllowVersionUpgrade=' + AllowVersionUpgrade + '&HsmClientCertificateIdentifier=' + (HsmClientCertificateIdentifier == null ? '' : encodeURIComponent(HsmClientCertificateIdentifier)) + '&HsmConfigurationIdentifier=' + (HsmConfigurationIdentifier == null ? '' : encodeURIComponent(HsmConfigurationIdentifier)) + '&NewClusterIdentifier=' + (NewClusterIdentifier == null ? '' : encodeURIComponent(NewClusterIdentifier)) + '&PubliclyAccessible=' + PubliclyAccessible + '&ElasticIp=' + (ElasticIp == null ? '' : encodeURIComponent(ElasticIp)) + '&EnhancedVpcRouting=' + EnhancedVpcRouting + '&MaintenanceTrackName=' + (MaintenanceTrackName == null ? '' : encodeURIComponent(MaintenanceTrackName)) + '&Encrypted=' + Encrypted + '&KmsKeyId=' + (KmsKeyId == null ? '' : encodeURIComponent(KmsKeyId)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Modifies the database revision of a cluster. The database revision is a unique revision of the database running in a cluster.
		 * Get /#Action=ModifyClusterDbRevision
		 * @param {string} ClusterIdentifier <p>The unique identifier of a cluster whose database revision you want to modify. </p> <p>Example: <code>examplecluster</code> </p>
		 * @param {string} RevisionTarget The identifier of the database revision. You can retrieve this value from the response to the <a>DescribeClusterDbRevisions</a> request.
		 * @return {void} Success
		 */
		GET_ModifyClusterDbRevision(ClusterIdentifier: string, RevisionTarget: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=ModifyClusterDbRevision?ClusterIdentifier=' + (ClusterIdentifier == null ? '' : encodeURIComponent(ClusterIdentifier)) + '&RevisionTarget=' + (RevisionTarget == null ? '' : encodeURIComponent(RevisionTarget)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Modifies the list of AWS Identity and Access Management (IAM) roles that can be used by the cluster to access other AWS services.</p> <p>A cluster can have up to 10 IAM roles associated at any time.</p>
		 * Get /#Action=ModifyClusterIamRoles
		 * @param {string} ClusterIdentifier The unique identifier of the cluster for which you want to associate or disassociate IAM roles.
		 * @param {Array<String>} AddIamRoles Zero or more IAM roles to associate with the cluster. The roles must be in their Amazon Resource Name (ARN) format. You can associate up to 10 IAM roles with a single cluster in a single request.
		 * @param {Array<String>} RemoveIamRoles Zero or more IAM roles in ARN format to disassociate from the cluster. You can disassociate up to 10 IAM roles from a single cluster in a single request.
		 * @return {void} Success
		 */
		GET_ModifyClusterIamRoles(ClusterIdentifier: string, AddIamRoles: Array<String>, RemoveIamRoles: Array<String>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=ModifyClusterIamRoles?ClusterIdentifier=' + (ClusterIdentifier == null ? '' : encodeURIComponent(ClusterIdentifier)) + '&' + AddIamRoles.map(z => `AddIamRoles=${z}`).join('&') + '&' + RemoveIamRoles.map(z => `RemoveIamRoles=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Modifies the maintenance settings of a cluster.
		 * Get /#Action=ModifyClusterMaintenance
		 * @param {string} ClusterIdentifier A unique identifier for the cluster.
		 * @param {boolean} DeferMaintenance A boolean indicating whether to enable the deferred maintenance window. 
		 * @param {string} DeferMaintenanceIdentifier A unique identifier for the deferred maintenance window.
		 * @param {Date} DeferMaintenanceStartTime A timestamp indicating the start time for the deferred maintenance window.
		 * @param {Date} DeferMaintenanceEndTime A timestamp indicating end time for the deferred maintenance window. If you specify an end time, you can't specify a duration.
		 * @param {number} DeferMaintenanceDuration An integer indicating the duration of the maintenance window in days. If you specify a duration, you can't specify an end time. The duration must be 45 days or less.
		 * @return {void} Success
		 */
		GET_ModifyClusterMaintenance(ClusterIdentifier: string, DeferMaintenance: boolean, DeferMaintenanceIdentifier: string, DeferMaintenanceStartTime: Date, DeferMaintenanceEndTime: Date, DeferMaintenanceDuration: number, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=ModifyClusterMaintenance?ClusterIdentifier=' + (ClusterIdentifier == null ? '' : encodeURIComponent(ClusterIdentifier)) + '&DeferMaintenance=' + DeferMaintenance + '&DeferMaintenanceIdentifier=' + (DeferMaintenanceIdentifier == null ? '' : encodeURIComponent(DeferMaintenanceIdentifier)) + '&DeferMaintenanceStartTime=' + DeferMaintenanceStartTime.toISOString() + '&DeferMaintenanceEndTime=' + DeferMaintenanceEndTime.toISOString() + '&DeferMaintenanceDuration=' + DeferMaintenanceDuration + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Modifies the parameters of a parameter group.</p> <p> For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
		 * Get /#Action=ModifyClusterParameterGroup
		 * @param {string} ParameterGroupName The name of the parameter group to be modified.
		 * @param {Array<Parameter>} Parameters <p>An array of parameters to be modified. A maximum of 20 parameters can be modified in a single request.</p> <p>For each parameter to be modified, you must supply at least the parameter name and parameter value; other name-value pairs of the parameter are optional.</p> <p>For the workload management (WLM) configuration, you must supply all the name-value pairs in the wlm_json_configuration parameter.</p>
		 * @return {void} Success
		 */
		GET_ModifyClusterParameterGroup(ParameterGroupName: string, Parameters: Array<Parameter>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=ModifyClusterParameterGroup?ParameterGroupName=' + (ParameterGroupName == null ? '' : encodeURIComponent(ParameterGroupName)) + '&' + Parameters.map(z => `Parameters=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Modifies the settings for a snapshot.</p> <p>This exanmple modifies the manual retention period setting for a cluster snapshot.</p>
		 * Get /#Action=ModifyClusterSnapshot
		 * @param {string} SnapshotIdentifier The identifier of the snapshot whose setting you want to modify.
		 * @param {number} ManualSnapshotRetentionPeriod <p>The number of days that a manual snapshot is retained. If the value is -1, the manual snapshot is retained indefinitely.</p> <p>If the manual snapshot falls outside of the new retention period, you can specify the force option to immediately delete the snapshot.</p> <p>The value must be either -1 or an integer between 1 and 3,653.</p>
		 * @param {boolean} Force A Boolean option to override an exception if the retention period has already passed.
		 * @return {void} Success
		 */
		GET_ModifyClusterSnapshot(SnapshotIdentifier: string, ManualSnapshotRetentionPeriod: number, Force: boolean, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=ModifyClusterSnapshot?SnapshotIdentifier=' + (SnapshotIdentifier == null ? '' : encodeURIComponent(SnapshotIdentifier)) + '&ManualSnapshotRetentionPeriod=' + ManualSnapshotRetentionPeriod + '&Force=' + Force + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Modifies a snapshot schedule for a cluster.
		 * Get /#Action=ModifyClusterSnapshotSchedule
		 * @param {string} ClusterIdentifier A unique identifier for the cluster whose snapshot schedule you want to modify. 
		 * @param {string} ScheduleIdentifier A unique alphanumeric identifier for the schedule that you want to associate with the cluster.
		 * @param {boolean} DisassociateSchedule A boolean to indicate whether to remove the assoiciation between the cluster and the schedule.
		 * @return {void} Success
		 */
		GET_ModifyClusterSnapshotSchedule(ClusterIdentifier: string, ScheduleIdentifier: string, DisassociateSchedule: boolean, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=ModifyClusterSnapshotSchedule?ClusterIdentifier=' + (ClusterIdentifier == null ? '' : encodeURIComponent(ClusterIdentifier)) + '&ScheduleIdentifier=' + (ScheduleIdentifier == null ? '' : encodeURIComponent(ScheduleIdentifier)) + '&DisassociateSchedule=' + DisassociateSchedule + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Modifies a cluster subnet group to include the specified list of VPC subnets. The operation replaces the existing list of subnets with the new list of subnets.
		 * Get /#Action=ModifyClusterSubnetGroup
		 * @param {string} ClusterSubnetGroupName The name of the subnet group to be modified.
		 * @param {string} Description A text description of the subnet group to be modified.
		 * @param {Array<String>} SubnetIds An array of VPC subnet IDs. A maximum of 20 subnets can be modified in a single request.
		 * @return {void} Success
		 */
		GET_ModifyClusterSubnetGroup(ClusterSubnetGroupName: string, Description: string, SubnetIds: Array<String>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=ModifyClusterSubnetGroup?ClusterSubnetGroupName=' + (ClusterSubnetGroupName == null ? '' : encodeURIComponent(ClusterSubnetGroupName)) + '&Description=' + (Description == null ? '' : encodeURIComponent(Description)) + '&' + SubnetIds.map(z => `SubnetIds=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Modifies an existing Amazon Redshift event notification subscription.
		 * Get /#Action=ModifyEventSubscription
		 * @param {string} SubscriptionName The name of the modified Amazon Redshift event notification subscription.
		 * @param {string} SnsTopicArn The Amazon Resource Name (ARN) of the SNS topic to be used by the event notification subscription.
		 * @param {string} SourceType <p>The type of source that will be generating the events. For example, if you want to be notified of events generated by a cluster, you would set this parameter to cluster. If this value is not specified, events are returned for all Amazon Redshift objects in your AWS account. You must specify a source type in order to specify source IDs.</p> <p>Valid values: cluster, cluster-parameter-group, cluster-security-group, cluster-snapshot, and scheduled-action.</p>
		 * @param {Array<String>} SourceIds <p>A list of one or more identifiers of Amazon Redshift source objects. All of the objects must be of the same type as was specified in the source type parameter. The event subscription will return only events generated by the specified objects. If not specified, then events are returned for all objects within the source type specified.</p> <p>Example: my-cluster-1, my-cluster-2</p> <p>Example: my-snapshot-20131010</p>
		 * @param {Array<String>} EventCategories <p>Specifies the Amazon Redshift event categories to be published by the event notification subscription.</p> <p>Values: configuration, management, monitoring, security</p>
		 * @param {string} Severity <p>Specifies the Amazon Redshift event severity to be published by the event notification subscription.</p> <p>Values: ERROR, INFO</p>
		 * @param {boolean} Enabled A Boolean value indicating if the subscription is enabled. <code>true</code> indicates the subscription is enabled 
		 * @return {void} Success
		 */
		GET_ModifyEventSubscription(SubscriptionName: string, SnsTopicArn: string, SourceType: string, SourceIds: Array<String>, EventCategories: Array<String>, Severity: string, Enabled: boolean, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=ModifyEventSubscription?SubscriptionName=' + (SubscriptionName == null ? '' : encodeURIComponent(SubscriptionName)) + '&SnsTopicArn=' + (SnsTopicArn == null ? '' : encodeURIComponent(SnsTopicArn)) + '&SourceType=' + (SourceType == null ? '' : encodeURIComponent(SourceType)) + '&' + SourceIds.map(z => `SourceIds=${z}`).join('&') + '&' + EventCategories.map(z => `EventCategories=${z}`).join('&') + '&Severity=' + (Severity == null ? '' : encodeURIComponent(Severity)) + '&Enabled=' + Enabled + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Modifies a scheduled action.
		 * Get /#Action=ModifyScheduledAction
		 * @param {string} ScheduledActionName The name of the scheduled action to modify. 
		 * @param {string} TargetAction A modified JSON format of the scheduled action. For more information about this parameter, see <a>ScheduledAction</a>. 
		 * @param {string} Schedule A modified schedule in either <code>at( )</code> or <code>cron( )</code> format. For more information about this parameter, see <a>ScheduledAction</a>.
		 * @param {string} IamRole A different IAM role to assume to run the target action. For more information about this parameter, see <a>ScheduledAction</a>.
		 * @param {string} ScheduledActionDescription A modified description of the scheduled action. 
		 * @param {Date} StartTime A modified start time of the scheduled action. For more information about this parameter, see <a>ScheduledAction</a>. 
		 * @param {Date} EndTime A modified end time of the scheduled action. For more information about this parameter, see <a>ScheduledAction</a>. 
		 * @param {boolean} Enable A modified enable flag of the scheduled action. If true, the scheduled action is active. If false, the scheduled action is disabled. 
		 * @return {void} Success
		 */
		GET_ModifyScheduledAction(ScheduledActionName: string, TargetAction: string, Schedule: string, IamRole: string, ScheduledActionDescription: string, StartTime: Date, EndTime: Date, Enable: boolean, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=ModifyScheduledAction?ScheduledActionName=' + (ScheduledActionName == null ? '' : encodeURIComponent(ScheduledActionName)) + '&TargetAction=' + (TargetAction == null ? '' : encodeURIComponent(TargetAction)) + '&Schedule=' + (Schedule == null ? '' : encodeURIComponent(Schedule)) + '&IamRole=' + (IamRole == null ? '' : encodeURIComponent(IamRole)) + '&ScheduledActionDescription=' + (ScheduledActionDescription == null ? '' : encodeURIComponent(ScheduledActionDescription)) + '&StartTime=' + StartTime.toISOString() + '&EndTime=' + EndTime.toISOString() + '&Enable=' + Enable + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Modifies the number of days to retain snapshots in the destination AWS Region after they are copied from the source AWS Region. By default, this operation only changes the retention period of copied automated snapshots. The retention periods for both new and existing copied automated snapshots are updated with the new retention period. You can set the manual option to change only the retention periods of copied manual snapshots. If you set this option, only newly copied manual snapshots have the new retention period.
		 * Get /#Action=ModifySnapshotCopyRetentionPeriod
		 * @param {string} ClusterIdentifier <p>The unique identifier of the cluster for which you want to change the retention period for either automated or manual snapshots that are copied to a destination AWS Region.</p> <p>Constraints: Must be the valid name of an existing cluster that has cross-region snapshot copy enabled.</p>
		 * @param {number} RetentionPeriod <p>The number of days to retain automated snapshots in the destination AWS Region after they are copied from the source AWS Region.</p> <p>By default, this only changes the retention period of copied automated snapshots. </p> <p>If you decrease the retention period for automated snapshots that are copied to a destination AWS Region, Amazon Redshift deletes any existing automated snapshots that were copied to the destination AWS Region and that fall outside of the new retention period.</p> <p>Constraints: Must be at least 1 and no more than 35 for automated snapshots. </p> <p>If you specify the <code>manual</code> option, only newly copied manual snapshots will have the new retention period. </p> <p>If you specify the value of -1 newly copied manual snapshots are retained indefinitely.</p> <p>Constraints: The number of days must be either -1 or an integer between 1 and 3,653 for manual snapshots.</p>
		 * @param {boolean} Manual Indicates whether to apply the snapshot retention period to newly copied manual snapshots instead of automated snapshots.
		 * @return {void} Success
		 */
		GET_ModifySnapshotCopyRetentionPeriod(ClusterIdentifier: string, RetentionPeriod: number, Manual: boolean, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=ModifySnapshotCopyRetentionPeriod?ClusterIdentifier=' + (ClusterIdentifier == null ? '' : encodeURIComponent(ClusterIdentifier)) + '&RetentionPeriod=' + RetentionPeriod + '&Manual=' + Manual + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Modifies a snapshot schedule. Any schedule associated with a cluster is modified asynchronously.
		 * Get /#Action=ModifySnapshotSchedule
		 * @param {string} ScheduleIdentifier A unique alphanumeric identifier of the schedule to modify.
		 * @param {Array<String>} ScheduleDefinitions An updated list of schedule definitions. A schedule definition is made up of schedule expressions, for example, "cron(30 12 *)" or "rate(12 hours)".
		 * @return {void} Success
		 */
		GET_ModifySnapshotSchedule(ScheduleIdentifier: string, ScheduleDefinitions: Array<String>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=ModifySnapshotSchedule?ScheduleIdentifier=' + (ScheduleIdentifier == null ? '' : encodeURIComponent(ScheduleIdentifier)) + '&' + ScheduleDefinitions.map(z => `ScheduleDefinitions=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Modifies a usage limit in a cluster. You can't modify the feature type or period of a usage limit.
		 * Get /#Action=ModifyUsageLimit
		 * @param {string} UsageLimitId The identifier of the usage limit to modify.
		 * @param {number} Amount The new limit amount. For more information about this parameter, see <a>UsageLimit</a>. 
		 * @param {UsageLimitBreachAction} BreachAction The new action that Amazon Redshift takes when the limit is reached. For more information about this parameter, see <a>UsageLimit</a>. 
		 * @return {void} Success
		 */
		GET_ModifyUsageLimit(UsageLimitId: string, Amount: number, BreachAction: UsageLimitBreachAction, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=ModifyUsageLimit?UsageLimitId=' + (UsageLimitId == null ? '' : encodeURIComponent(UsageLimitId)) + '&Amount=' + Amount + '&BreachAction=' + BreachAction + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Pauses a cluster.
		 * Get /#Action=PauseCluster
		 * @param {string} ClusterIdentifier The identifier of the cluster to be paused.
		 * @return {void} Success
		 */
		GET_PauseCluster(ClusterIdentifier: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=PauseCluster?ClusterIdentifier=' + (ClusterIdentifier == null ? '' : encodeURIComponent(ClusterIdentifier)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Allows you to purchase reserved nodes. Amazon Redshift offers a predefined set of reserved node offerings. You can purchase one or more of the offerings. You can call the <a>DescribeReservedNodeOfferings</a> API to obtain the available reserved node offerings. You can call this API by providing a specific reserved node offering and the number of nodes you want to reserve. </p> <p> For more information about reserved node offerings, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/purchase-reserved-node-instance.html">Purchasing Reserved Nodes</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
		 * Get /#Action=PurchaseReservedNodeOffering
		 * @param {string} ReservedNodeOfferingId The unique identifier of the reserved node offering you want to purchase.
		 * @param {number} NodeCount <p>The number of reserved nodes that you want to purchase.</p> <p>Default: <code>1</code> </p>
		 * @return {void} Success
		 */
		GET_PurchaseReservedNodeOffering(ReservedNodeOfferingId: string, NodeCount: number, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=PurchaseReservedNodeOffering?ReservedNodeOfferingId=' + (ReservedNodeOfferingId == null ? '' : encodeURIComponent(ReservedNodeOfferingId)) + '&NodeCount=' + NodeCount + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Reboots a cluster. This action is taken as soon as possible. It results in a momentary outage to the cluster, during which the cluster status is set to <code>rebooting</code>. A cluster event is created when the reboot is completed. Any pending cluster modifications (see <a>ModifyCluster</a>) are applied at this reboot. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.
		 * Get /#Action=RebootCluster
		 * @param {string} ClusterIdentifier The cluster identifier.
		 * @return {void} Success
		 */
		GET_RebootCluster(ClusterIdentifier: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=RebootCluster?ClusterIdentifier=' + (ClusterIdentifier == null ? '' : encodeURIComponent(ClusterIdentifier)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Sets one or more parameters of the specified parameter group to their default values and sets the source values of the parameters to "engine-default". To reset the entire parameter group specify the <i>ResetAllParameters</i> parameter. For parameter changes to take effect you must reboot any associated clusters.
		 * Get /#Action=ResetClusterParameterGroup
		 * @param {string} ParameterGroupName The name of the cluster parameter group to be reset.
		 * @param {boolean} ResetAllParameters <p>If <code>true</code>, all parameters in the specified parameter group will be reset to their default values. </p> <p>Default: <code>true</code> </p>
		 * @param {Array<Parameter>} Parameters <p>An array of names of parameters to be reset. If <i>ResetAllParameters</i> option is not used, then at least one parameter name must be supplied. </p> <p>Constraints: A maximum of 20 parameters can be reset in a single request.</p>
		 * @return {void} Success
		 */
		GET_ResetClusterParameterGroup(ParameterGroupName: string, ResetAllParameters: boolean, Parameters: Array<Parameter>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=ResetClusterParameterGroup?ParameterGroupName=' + (ParameterGroupName == null ? '' : encodeURIComponent(ParameterGroupName)) + '&ResetAllParameters=' + ResetAllParameters + '&' + Parameters.map(z => `Parameters=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Changes the size of the cluster. You can change the cluster's type, or change the number or type of nodes. The default behavior is to use the elastic resize method. With an elastic resize, your cluster is available for read and write operations more quickly than with the classic resize method. </p> <p>Elastic resize operations have the following restrictions:</p> <ul> <li> <p>You can only resize clusters of the following types:</p> <ul> <li> <p>dc2.large</p> </li> <li> <p>dc2.8xlarge</p> </li> <li> <p>ds2.xlarge</p> </li> <li> <p>ds2.8xlarge</p> </li> <li> <p>ra3.4xlarge</p> </li> <li> <p>ra3.16xlarge</p> </li> </ul> </li> <li> <p>The type of nodes that you add must match the node type for the cluster.</p> </li> </ul>
		 * Get /#Action=ResizeCluster
		 * @param {string} ClusterIdentifier The unique identifier for the cluster to resize.
		 * @param {string} ClusterType The new cluster type for the specified cluster.
		 * @param {string} NodeType The new node type for the nodes you are adding. If not specified, the cluster's current node type is used.
		 * @param {number} NumberOfNodes The new number of nodes for the cluster.
		 * @param {boolean} Classic A boolean value indicating whether the resize operation is using the classic resize process. If you don't provide this parameter or set the value to <code>false</code>, the resize type is elastic. 
		 * @return {void} Success
		 */
		GET_ResizeCluster(ClusterIdentifier: string, ClusterType: string, NodeType: string, NumberOfNodes: number, Classic: boolean, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=ResizeCluster?ClusterIdentifier=' + (ClusterIdentifier == null ? '' : encodeURIComponent(ClusterIdentifier)) + '&ClusterType=' + (ClusterType == null ? '' : encodeURIComponent(ClusterType)) + '&NodeType=' + (NodeType == null ? '' : encodeURIComponent(NodeType)) + '&NumberOfNodes=' + NumberOfNodes + '&Classic=' + Classic + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Creates a new cluster from a snapshot. By default, Amazon Redshift creates the resulting cluster with the same configuration as the original cluster from which the snapshot was created, except that the new cluster is created with the default cluster security and parameter groups. After Amazon Redshift creates the cluster, you can use the <a>ModifyCluster</a> API to associate a different security group and different parameter group with the restored cluster. If you are using a DS node type, you can also choose to change to another DS node type of the same size during restore.</p> <p>If you restore a cluster into a VPC, you must provide a cluster subnet group where you want the cluster restored.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
		 * Get /#Action=RestoreFromClusterSnapshot
		 * @param {string} ClusterIdentifier <p>The identifier of the cluster that will be created from restoring the snapshot.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 alphanumeric characters or hyphens.</p> </li> <li> <p>Alphabetic characters must be lowercase.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> <li> <p>Must be unique for all clusters within an AWS account.</p> </li> </ul>
		 * @param {string} SnapshotIdentifier <p>The name of the snapshot from which to create the new cluster. This parameter isn't case sensitive.</p> <p>Example: <code>my-snapshot-id</code> </p>
		 * @param {string} SnapshotClusterIdentifier The name of the cluster the source snapshot was created from. This parameter is required if your IAM user has a policy containing a snapshot resource element that specifies anything other than * for the cluster name.
		 * @param {number} Port <p>The port number on which the cluster accepts connections.</p> <p>Default: The same port as the original cluster.</p> <p>Constraints: Must be between <code>1115</code> and <code>65535</code>.</p>
		 * @param {string} AvailabilityZone <p>The Amazon EC2 Availability Zone in which to restore the cluster.</p> <p>Default: A random, system-chosen Availability Zone.</p> <p>Example: <code>us-east-2a</code> </p>
		 * @param {boolean} AllowVersionUpgrade <p>If <code>true</code>, major version upgrades can be applied during the maintenance window to the Amazon Redshift engine that is running on the cluster. </p> <p>Default: <code>true</code> </p>
		 * @param {string} ClusterSubnetGroupName <p>The name of the subnet group where you want to cluster restored.</p> <p>A snapshot of cluster in VPC can be restored only in VPC. Therefore, you must provide subnet group name where you want the cluster restored.</p>
		 * @param {boolean} PubliclyAccessible If <code>true</code>, the cluster can be accessed from a public network. 
		 * @param {string} OwnerAccount The AWS customer account used to create or copy the snapshot. Required if you are restoring a snapshot you do not own, optional if you own the snapshot.
		 * @param {string} HsmClientCertificateIdentifier Specifies the name of the HSM client certificate the Amazon Redshift cluster uses to retrieve the data encryption keys stored in an HSM.
		 * @param {string} HsmConfigurationIdentifier Specifies the name of the HSM configuration that contains the information the Amazon Redshift cluster can use to retrieve and store keys in an HSM.
		 * @param {string} ElasticIp The elastic IP (EIP) address for the cluster.
		 * @param {string} ClusterParameterGroupName <p>The name of the parameter group to be associated with this cluster.</p> <p>Default: The default Amazon Redshift cluster parameter group. For information about the default parameter group, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Working with Amazon Redshift Parameter Groups</a>.</p> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 255 alphanumeric characters or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul>
		 * @param {Array<String>} ClusterSecurityGroups <p>A list of security groups to be associated with this cluster.</p> <p>Default: The default cluster security group for Amazon Redshift.</p> <p>Cluster security groups only apply to clusters outside of VPCs.</p>
		 * @param {Array<String>} VpcSecurityGroupIds <p>A list of Virtual Private Cloud (VPC) security groups to be associated with the cluster.</p> <p>Default: The default VPC security group is associated with the cluster.</p> <p>VPC security groups only apply to clusters in VPCs.</p>
		 * @param {string} PreferredMaintenanceWindow <p>The weekly time range (in UTC) during which automated cluster maintenance can occur.</p> <p> Format: <code>ddd:hh24:mi-ddd:hh24:mi</code> </p> <p> Default: The value selected for the cluster from which the snapshot was taken. For more information about the time blocks for each region, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#rs-maintenance-windows">Maintenance Windows</a> in Amazon Redshift Cluster Management Guide. </p> <p>Valid Days: Mon | Tue | Wed | Thu | Fri | Sat | Sun</p> <p>Constraints: Minimum 30-minute window.</p>
		 * @param {number} AutomatedSnapshotRetentionPeriod <p>The number of days that automated snapshots are retained. If the value is 0, automated snapshots are disabled. Even if automated snapshots are disabled, you can still create manual snapshots when you want with <a>CreateClusterSnapshot</a>. </p> <p>Default: The value selected for the cluster from which the snapshot was taken.</p> <p>Constraints: Must be a value from 0 to 35.</p>
		 * @param {number} ManualSnapshotRetentionPeriod <p>The default number of days to retain a manual snapshot. If the value is -1, the snapshot is retained indefinitely. This setting doesn't change the retention period of existing snapshots.</p> <p>The value must be either -1 or an integer between 1 and 3,653.</p>
		 * @param {string} KmsKeyId The AWS Key Management Service (KMS) key ID of the encryption key that you want to use to encrypt data in the cluster that you restore from a shared snapshot.
		 * @param {string} NodeType <p>The node type that the restored cluster will be provisioned with.</p> <p>Default: The node type of the cluster from which the snapshot was taken. You can modify this if you are using any DS node type. In that case, you can choose to restore into another DS node type of the same size. For example, you can restore ds1.8xlarge into ds2.8xlarge, or ds1.xlarge into ds2.xlarge. If you have a DC instance type, you must restore into that same instance type and size. In other words, you can only restore a dc1.large instance type into another dc1.large instance type or dc2.large instance type. You can't restore dc1.8xlarge to dc2.8xlarge. First restore to a dc1.8xlarge cluster, then resize to a dc2.8large cluster. For more information about node types, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#rs-about-clusters-and-nodes"> About Clusters and Nodes</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
		 * @param {boolean} EnhancedVpcRouting <p>An option that specifies whether to create the cluster with enhanced VPC routing enabled. To create a cluster that uses enhanced VPC routing, the cluster must be in a VPC. For more information, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/enhanced-vpc-routing.html">Enhanced VPC Routing</a> in the Amazon Redshift Cluster Management Guide.</p> <p>If this option is <code>true</code>, enhanced VPC routing is enabled. </p> <p>Default: false</p>
		 * @param {string} AdditionalInfo Reserved.
		 * @param {Array<String>} IamRoles <p>A list of AWS Identity and Access Management (IAM) roles that can be used by the cluster to access other AWS services. You must supply the IAM roles in their Amazon Resource Name (ARN) format. You can supply up to 10 IAM roles in a single request.</p> <p>A cluster can have up to 10 IAM roles associated at any time.</p>
		 * @param {string} MaintenanceTrackName The name of the maintenance track for the restored cluster. When you take a snapshot, the snapshot inherits the <code>MaintenanceTrack</code> value from the cluster. The snapshot might be on a different track than the cluster that was the source for the snapshot. For example, suppose that you take a snapshot of a cluster that is on the current track and then change the cluster to be on the trailing track. In this case, the snapshot and the source cluster are on different tracks.
		 * @param {string} SnapshotScheduleIdentifier A unique identifier for the snapshot schedule.
		 * @param {number} NumberOfNodes The number of nodes specified when provisioning the restored cluster.
		 * @return {void} Success
		 */
		GET_RestoreFromClusterSnapshot(ClusterIdentifier: string, SnapshotIdentifier: string, SnapshotClusterIdentifier: string, Port: number, AvailabilityZone: string, AllowVersionUpgrade: boolean, ClusterSubnetGroupName: string, PubliclyAccessible: boolean, OwnerAccount: string, HsmClientCertificateIdentifier: string, HsmConfigurationIdentifier: string, ElasticIp: string, ClusterParameterGroupName: string, ClusterSecurityGroups: Array<String>, VpcSecurityGroupIds: Array<String>, PreferredMaintenanceWindow: string, AutomatedSnapshotRetentionPeriod: number, ManualSnapshotRetentionPeriod: number, KmsKeyId: string, NodeType: string, EnhancedVpcRouting: boolean, AdditionalInfo: string, IamRoles: Array<String>, MaintenanceTrackName: string, SnapshotScheduleIdentifier: string, NumberOfNodes: number, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=RestoreFromClusterSnapshot?ClusterIdentifier=' + (ClusterIdentifier == null ? '' : encodeURIComponent(ClusterIdentifier)) + '&SnapshotIdentifier=' + (SnapshotIdentifier == null ? '' : encodeURIComponent(SnapshotIdentifier)) + '&SnapshotClusterIdentifier=' + (SnapshotClusterIdentifier == null ? '' : encodeURIComponent(SnapshotClusterIdentifier)) + '&Port=' + Port + '&AvailabilityZone=' + (AvailabilityZone == null ? '' : encodeURIComponent(AvailabilityZone)) + '&AllowVersionUpgrade=' + AllowVersionUpgrade + '&ClusterSubnetGroupName=' + (ClusterSubnetGroupName == null ? '' : encodeURIComponent(ClusterSubnetGroupName)) + '&PubliclyAccessible=' + PubliclyAccessible + '&OwnerAccount=' + (OwnerAccount == null ? '' : encodeURIComponent(OwnerAccount)) + '&HsmClientCertificateIdentifier=' + (HsmClientCertificateIdentifier == null ? '' : encodeURIComponent(HsmClientCertificateIdentifier)) + '&HsmConfigurationIdentifier=' + (HsmConfigurationIdentifier == null ? '' : encodeURIComponent(HsmConfigurationIdentifier)) + '&ElasticIp=' + (ElasticIp == null ? '' : encodeURIComponent(ElasticIp)) + '&ClusterParameterGroupName=' + (ClusterParameterGroupName == null ? '' : encodeURIComponent(ClusterParameterGroupName)) + '&' + ClusterSecurityGroups.map(z => `ClusterSecurityGroups=${z}`).join('&') + '&' + VpcSecurityGroupIds.map(z => `VpcSecurityGroupIds=${z}`).join('&') + '&PreferredMaintenanceWindow=' + (PreferredMaintenanceWindow == null ? '' : encodeURIComponent(PreferredMaintenanceWindow)) + '&AutomatedSnapshotRetentionPeriod=' + AutomatedSnapshotRetentionPeriod + '&ManualSnapshotRetentionPeriod=' + ManualSnapshotRetentionPeriod + '&KmsKeyId=' + (KmsKeyId == null ? '' : encodeURIComponent(KmsKeyId)) + '&NodeType=' + (NodeType == null ? '' : encodeURIComponent(NodeType)) + '&EnhancedVpcRouting=' + EnhancedVpcRouting + '&AdditionalInfo=' + (AdditionalInfo == null ? '' : encodeURIComponent(AdditionalInfo)) + '&' + IamRoles.map(z => `IamRoles=${z}`).join('&') + '&MaintenanceTrackName=' + (MaintenanceTrackName == null ? '' : encodeURIComponent(MaintenanceTrackName)) + '&SnapshotScheduleIdentifier=' + (SnapshotScheduleIdentifier == null ? '' : encodeURIComponent(SnapshotScheduleIdentifier)) + '&NumberOfNodes=' + NumberOfNodes + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Creates a new table from a table in an Amazon Redshift cluster snapshot. You must create the new table within the Amazon Redshift cluster that the snapshot was taken from.</p> <p>You cannot use <code>RestoreTableFromClusterSnapshot</code> to restore a table with the same name as an existing table in an Amazon Redshift cluster. That is, you cannot overwrite an existing table in a cluster with a restored table. If you want to replace your original table with a new, restored table, then rename or drop your original table before you call <code>RestoreTableFromClusterSnapshot</code>. When you have renamed your original table, then you can pass the original name of the table as the <code>NewTableName</code> parameter value in the call to <code>RestoreTableFromClusterSnapshot</code>. This way, you can replace the original table with the table created from the snapshot.</p>
		 * Get /#Action=RestoreTableFromClusterSnapshot
		 * @param {string} ClusterIdentifier The identifier of the Amazon Redshift cluster to restore the table to.
		 * @param {string} SnapshotIdentifier The identifier of the snapshot to restore the table from. This snapshot must have been created from the Amazon Redshift cluster specified by the <code>ClusterIdentifier</code> parameter.
		 * @param {string} SourceDatabaseName The name of the source database that contains the table to restore from.
		 * @param {string} SourceSchemaName The name of the source schema that contains the table to restore from. If you do not specify a <code>SourceSchemaName</code> value, the default is <code>public</code>.
		 * @param {string} SourceTableName The name of the source table to restore from.
		 * @param {string} TargetDatabaseName The name of the database to restore the table to.
		 * @param {string} TargetSchemaName The name of the schema to restore the table to.
		 * @param {string} NewTableName The name of the table to create as a result of the current request.
		 * @return {void} Success
		 */
		GET_RestoreTableFromClusterSnapshot(ClusterIdentifier: string, SnapshotIdentifier: string, SourceDatabaseName: string, SourceSchemaName: string, SourceTableName: string, TargetDatabaseName: string, TargetSchemaName: string, NewTableName: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=RestoreTableFromClusterSnapshot?ClusterIdentifier=' + (ClusterIdentifier == null ? '' : encodeURIComponent(ClusterIdentifier)) + '&SnapshotIdentifier=' + (SnapshotIdentifier == null ? '' : encodeURIComponent(SnapshotIdentifier)) + '&SourceDatabaseName=' + (SourceDatabaseName == null ? '' : encodeURIComponent(SourceDatabaseName)) + '&SourceSchemaName=' + (SourceSchemaName == null ? '' : encodeURIComponent(SourceSchemaName)) + '&SourceTableName=' + (SourceTableName == null ? '' : encodeURIComponent(SourceTableName)) + '&TargetDatabaseName=' + (TargetDatabaseName == null ? '' : encodeURIComponent(TargetDatabaseName)) + '&TargetSchemaName=' + (TargetSchemaName == null ? '' : encodeURIComponent(TargetSchemaName)) + '&NewTableName=' + (NewTableName == null ? '' : encodeURIComponent(NewTableName)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Resumes a paused cluster.
		 * Get /#Action=ResumeCluster
		 * @param {string} ClusterIdentifier The identifier of the cluster to be resumed.
		 * @return {void} Success
		 */
		GET_ResumeCluster(ClusterIdentifier: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=ResumeCluster?ClusterIdentifier=' + (ClusterIdentifier == null ? '' : encodeURIComponent(ClusterIdentifier)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Revokes an ingress rule in an Amazon Redshift security group for a previously authorized IP range or Amazon EC2 security group. To add an ingress rule, see <a>AuthorizeClusterSecurityGroupIngress</a>. For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.
		 * Get /#Action=RevokeClusterSecurityGroupIngress
		 * @param {string} ClusterSecurityGroupName The name of the security Group from which to revoke the ingress rule.
		 * @param {string} CIDRIP The IP range for which to revoke access. This range must be a valid Classless Inter-Domain Routing (CIDR) block of IP addresses. If <code>CIDRIP</code> is specified, <code>EC2SecurityGroupName</code> and <code>EC2SecurityGroupOwnerId</code> cannot be provided. 
		 * @param {string} EC2SecurityGroupName The name of the EC2 Security Group whose access is to be revoked. If <code>EC2SecurityGroupName</code> is specified, <code>EC2SecurityGroupOwnerId</code> must also be provided and <code>CIDRIP</code> cannot be provided. 
		 * @param {string} EC2SecurityGroupOwnerId <p>The AWS account number of the owner of the security group specified in the <code>EC2SecurityGroupName</code> parameter. The AWS access key ID is not an acceptable value. If <code>EC2SecurityGroupOwnerId</code> is specified, <code>EC2SecurityGroupName</code> must also be provided. and <code>CIDRIP</code> cannot be provided. </p> <p>Example: <code>111122223333</code> </p>
		 * @return {void} Success
		 */
		GET_RevokeClusterSecurityGroupIngress(ClusterSecurityGroupName: string, CIDRIP: string, EC2SecurityGroupName: string, EC2SecurityGroupOwnerId: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=RevokeClusterSecurityGroupIngress?ClusterSecurityGroupName=' + (ClusterSecurityGroupName == null ? '' : encodeURIComponent(ClusterSecurityGroupName)) + '&CIDRIP=' + (CIDRIP == null ? '' : encodeURIComponent(CIDRIP)) + '&EC2SecurityGroupName=' + (EC2SecurityGroupName == null ? '' : encodeURIComponent(EC2SecurityGroupName)) + '&EC2SecurityGroupOwnerId=' + (EC2SecurityGroupOwnerId == null ? '' : encodeURIComponent(EC2SecurityGroupOwnerId)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Removes the ability of the specified AWS customer account to restore the specified snapshot. If the account is currently restoring the snapshot, the restore will run to completion.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
		 * Get /#Action=RevokeSnapshotAccess
		 * @param {string} SnapshotIdentifier The identifier of the snapshot that the account can no longer access.
		 * @param {string} SnapshotClusterIdentifier The identifier of the cluster the snapshot was created from. This parameter is required if your IAM user has a policy containing a snapshot resource element that specifies anything other than * for the cluster name.
		 * @param {string} AccountWithRestoreAccess The identifier of the AWS customer account that can no longer restore the specified snapshot.
		 * @return {void} Success
		 */
		GET_RevokeSnapshotAccess(SnapshotIdentifier: string, SnapshotClusterIdentifier: string, AccountWithRestoreAccess: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=RevokeSnapshotAccess?SnapshotIdentifier=' + (SnapshotIdentifier == null ? '' : encodeURIComponent(SnapshotIdentifier)) + '&SnapshotClusterIdentifier=' + (SnapshotClusterIdentifier == null ? '' : encodeURIComponent(SnapshotClusterIdentifier)) + '&AccountWithRestoreAccess=' + (AccountWithRestoreAccess == null ? '' : encodeURIComponent(AccountWithRestoreAccess)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Rotates the encryption keys for a cluster.
		 * Get /#Action=RotateEncryptionKey
		 * @param {string} ClusterIdentifier <p>The unique identifier of the cluster that you want to rotate the encryption keys for.</p> <p>Constraints: Must be the name of valid cluster that has encryption enabled.</p>
		 * @return {void} Success
		 */
		GET_RotateEncryptionKey(ClusterIdentifier: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#Action=RotateEncryptionKey?ClusterIdentifier=' + (ClusterIdentifier == null ? '' : encodeURIComponent(ClusterIdentifier)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}
	}

}

