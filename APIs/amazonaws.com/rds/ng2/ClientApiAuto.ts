import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace My_Demo_Client {
	export interface AddSourceIdentifierToSubscriptionResult {

		/**Contains the results of a successful invocation of the <code>DescribeEventSubscriptions</code> action. */
		EventSubscription?: EventSubscription;
	}


	/**Metadata assigned to an Amazon RDS resource consisting of a key-value pair. */
	export interface Tag {
		Key?: string;
		Value?: string;
	}

	export interface ApplyPendingMaintenanceActionResult {

		/**Describes the pending maintenance actions for a resource. */
		ResourcePendingMaintenanceActions?: ResourcePendingMaintenanceActions;
	}

	export interface AuthorizeDBSecurityGroupIngressResult {

		/**<p>Contains the details for an Amazon RDS DB security group. </p> <p>This data type is used as a response element in the <code>DescribeDBSecurityGroups</code> action. </p> */
		DBSecurityGroup?: DBSecurityGroup;
	}


	/**This data type is used as a response element in the <code>DescribeDBClusterBacktracks</code> action. */
	export interface DBClusterBacktrack {
		DBClusterIdentifier?: string;
		BacktrackIdentifier?: string;
		BacktrackTo?: Date;
		BacktrackedFrom?: Date;
		BacktrackRequestCreationTime?: Date;
		Status?: string;
	}


	/**<p>Contains the details of a snapshot export to Amazon S3. </p> <p>This data type is used as a response element in the <code>DescribeExportTasks</code> action. </p> */
	export interface ExportTask {
		ExportTaskIdentifier?: string;
		SourceArn?: string;
		ExportOnly?: Array<String>;
		SnapshotTime?: Date;
		TaskStartTime?: Date;
		TaskEndTime?: Date;
		S3Bucket?: string;
		S3Prefix?: string;
		IamRoleArn?: string;
		KmsKeyId?: string;
		Status?: string;
		PercentProgress?: number;
		TotalExtractedDataInGB?: number;
		FailureCause?: string;
		WarningMessage?: string;
	}

	export interface CopyDBClusterParameterGroupResult {

		/**<p>Contains the details of an Amazon RDS DB cluster parameter group. </p> <p>This data type is used as a response element in the <code>DescribeDBClusterParameterGroups</code> action. </p> */
		DBClusterParameterGroup?: DBClusterParameterGroup;
	}

	export interface CopyDBClusterSnapshotResult {

		/**<p>Contains the details for an Amazon RDS DB cluster snapshot </p> <p>This data type is used as a response element in the <code>DescribeDBClusterSnapshots</code> action. </p> */
		DBClusterSnapshot?: DBClusterSnapshot;
	}

	export interface CopyDBParameterGroupResult {

		/**<p>Contains the details of an Amazon RDS DB parameter group. </p> <p>This data type is used as a response element in the <code>DescribeDBParameterGroups</code> action. </p> */
		DBParameterGroup?: DBParameterGroup;
	}

	export interface CopyDBSnapshotResult {

		/**<p>Contains the details of an Amazon RDS DB snapshot. </p> <p>This data type is used as a response element in the <code>DescribeDBSnapshots</code> action. </p> */
		DBSnapshot?: DBSnapshot;
	}

	export interface CopyOptionGroupResult {

		/**<p/> */
		OptionGroup?: OptionGroup;
	}

	export interface CreateCustomAvailabilityZoneResult {

		/**<p>A custom Availability Zone (AZ) is an on-premises AZ that is integrated with a VMware vSphere cluster.</p> <p>For more information about RDS on VMware, see the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/RDSonVMwareUserGuide/rds-on-vmware.html"> <i>RDS on VMware User Guide.</i> </a> </p> */
		CustomAvailabilityZone?: CustomAvailabilityZone;
	}

	export interface CreateDBClusterResult {

		/**<p>Contains the details of an Amazon Aurora DB cluster. </p> <p>This data type is used as a response element in the <code>DescribeDBClusters</code>, <code>StopDBCluster</code>, and <code>StartDBCluster</code> actions. </p> */
		DBCluster?: DBCluster;
	}


	/**<p>This data type represents the information you need to connect to an Amazon Aurora DB cluster. This data type is used as a response element in the following actions:</p> <ul> <li> <p> <code>CreateDBClusterEndpoint</code> </p> </li> <li> <p> <code>DescribeDBClusterEndpoints</code> </p> </li> <li> <p> <code>ModifyDBClusterEndpoint</code> </p> </li> <li> <p> <code>DeleteDBClusterEndpoint</code> </p> </li> </ul> <p>For the data structure that represents Amazon RDS DB instance endpoints, see <code>Endpoint</code>.</p> */
	export interface DBClusterEndpoint {
		DBClusterEndpointIdentifier?: string;
		DBClusterIdentifier?: string;
		DBClusterEndpointResourceIdentifier?: string;
		Endpoint?: string;
		Status?: string;
		EndpointType?: string;
		CustomEndpointType?: string;
		StaticMembers?: Array<String>;
		ExcludedMembers?: Array<String>;
		DBClusterEndpointArn?: string;
	}

	export interface CreateDBClusterParameterGroupResult {

		/**<p>Contains the details of an Amazon RDS DB cluster parameter group. </p> <p>This data type is used as a response element in the <code>DescribeDBClusterParameterGroups</code> action. </p> */
		DBClusterParameterGroup?: DBClusterParameterGroup;
	}

	export interface CreateDBClusterSnapshotResult {

		/**<p>Contains the details for an Amazon RDS DB cluster snapshot </p> <p>This data type is used as a response element in the <code>DescribeDBClusterSnapshots</code> action. </p> */
		DBClusterSnapshot?: DBClusterSnapshot;
	}

	export interface CreateDBInstanceResult {

		/**<p>Contains the details of an Amazon RDS DB instance. </p> <p>This data type is used as a response element in the <code>DescribeDBInstances</code> action. </p> */
		DBInstance?: DBInstance;
	}


	/**<p>Contains the processor features of a DB instance class.</p> <p>To specify the number of CPU cores, use the <code>coreCount</code> feature name for the <code>Name</code> parameter. To specify the number of threads per core, use the <code>threadsPerCore</code> feature name for the <code>Name</code> parameter.</p> <p>You can set the processor features of the DB instance class for a DB instance when you call one of the following actions:</p> <ul> <li> <p> <code>CreateDBInstance</code> </p> </li> <li> <p> <code>ModifyDBInstance</code> </p> </li> <li> <p> <code>RestoreDBInstanceFromDBSnapshot</code> </p> </li> <li> <p> <code>RestoreDBInstanceFromS3</code> </p> </li> <li> <p> <code>RestoreDBInstanceToPointInTime</code> </p> </li> </ul> <p>You can view the valid processor values for a particular instance class by calling the <code>DescribeOrderableDBInstanceOptions</code> action and specifying the instance class for the <code>DBInstanceClass</code> parameter.</p> <p>In addition, you can use the following actions for DB instance class processor information:</p> <ul> <li> <p> <code>DescribeDBInstances</code> </p> </li> <li> <p> <code>DescribeDBSnapshots</code> </p> </li> <li> <p> <code>DescribeValidDBInstanceModifications</code> </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html#USER_ConfigureProcessor">Configuring the Processor of the DB Instance Class</a> in the <i>Amazon RDS User Guide. </i> </p> */
	export interface ProcessorFeature {
		Name?: string;
		Value?: string;
	}

	export interface CreateDBInstanceReadReplicaResult {

		/**<p>Contains the details of an Amazon RDS DB instance. </p> <p>This data type is used as a response element in the <code>DescribeDBInstances</code> action. </p> */
		DBInstance?: DBInstance;
	}

	export interface CreateDBParameterGroupResult {

		/**<p>Contains the details of an Amazon RDS DB parameter group. </p> <p>This data type is used as a response element in the <code>DescribeDBParameterGroups</code> action. </p> */
		DBParameterGroup?: DBParameterGroup;
	}

	export interface CreateDBProxyResponse {

		/**<note> <p>This is prerelease documentation for the RDS Database Proxy feature in preview release. It is subject to change.</p> </note> <p>The data structure representing a proxy managed by the RDS Proxy.</p> <p>This data type is used as a response element in the <code>DescribeDBProxies</code> action.</p> */
		DBProxy?: DBProxy;
	}


	/**<note> <p>This is prerelease documentation for the RDS Database Proxy feature in preview release. It is subject to change.</p> </note> <p>Specifies the details of authentication used by a proxy to log in as a specific database user.</p> */
	export interface UserAuthConfig {
		Description?: string;
		UserName?: string;
		AuthScheme?: UserAuthConfigAuthScheme;
		SecretArn?: string;
		IAMAuth?: UserAuthConfigIAMAuth;
	}

	export enum UserAuthConfigAuthScheme { SECRETS = 0 }

	export enum UserAuthConfigIAMAuth { DISABLED = 0, REQUIRED = 1 }

	export interface CreateDBSecurityGroupResult {

		/**<p>Contains the details for an Amazon RDS DB security group. </p> <p>This data type is used as a response element in the <code>DescribeDBSecurityGroups</code> action. </p> */
		DBSecurityGroup?: DBSecurityGroup;
	}

	export interface CreateDBSnapshotResult {

		/**<p>Contains the details of an Amazon RDS DB snapshot. </p> <p>This data type is used as a response element in the <code>DescribeDBSnapshots</code> action. </p> */
		DBSnapshot?: DBSnapshot;
	}

	export interface CreateDBSubnetGroupResult {

		/**<p>Contains the details of an Amazon RDS DB subnet group. </p> <p>This data type is used as a response element in the <code>DescribeDBSubnetGroups</code> action. </p> */
		DBSubnetGroup?: DBSubnetGroup;
	}

	export interface CreateEventSubscriptionResult {

		/**Contains the results of a successful invocation of the <code>DescribeEventSubscriptions</code> action. */
		EventSubscription?: EventSubscription;
	}

	export interface CreateGlobalClusterResult {

		/**A data type representing an Aurora global database. */
		GlobalCluster?: GlobalCluster;
	}

	export interface CreateOptionGroupResult {

		/**<p/> */
		OptionGroup?: OptionGroup;
	}

	export interface DeleteCustomAvailabilityZoneResult {

		/**<p>A custom Availability Zone (AZ) is an on-premises AZ that is integrated with a VMware vSphere cluster.</p> <p>For more information about RDS on VMware, see the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/RDSonVMwareUserGuide/rds-on-vmware.html"> <i>RDS on VMware User Guide.</i> </a> </p> */
		CustomAvailabilityZone?: CustomAvailabilityZone;
	}

	export interface DeleteDBClusterResult {

		/**<p>Contains the details of an Amazon Aurora DB cluster. </p> <p>This data type is used as a response element in the <code>DescribeDBClusters</code>, <code>StopDBCluster</code>, and <code>StartDBCluster</code> actions. </p> */
		DBCluster?: DBCluster;
	}

	export interface DeleteDBClusterSnapshotResult {

		/**<p>Contains the details for an Amazon RDS DB cluster snapshot </p> <p>This data type is used as a response element in the <code>DescribeDBClusterSnapshots</code> action. </p> */
		DBClusterSnapshot?: DBClusterSnapshot;
	}

	export interface DeleteDBInstanceResult {

		/**<p>Contains the details of an Amazon RDS DB instance. </p> <p>This data type is used as a response element in the <code>DescribeDBInstances</code> action. </p> */
		DBInstance?: DBInstance;
	}

	export interface DeleteDBInstanceAutomatedBackupResult {

		/**An automated backup of a DB instance. It it consists of system backups, transaction logs, and the database instance properties that existed at the time you deleted the source instance. */
		DBInstanceAutomatedBackup?: DBInstanceAutomatedBackup;
	}

	export interface DeleteDBProxyResponse {

		/**<note> <p>This is prerelease documentation for the RDS Database Proxy feature in preview release. It is subject to change.</p> </note> <p>The data structure representing a proxy managed by the RDS Proxy.</p> <p>This data type is used as a response element in the <code>DescribeDBProxies</code> action.</p> */
		DBProxy?: DBProxy;
	}

	export interface DeleteDBSnapshotResult {

		/**<p>Contains the details of an Amazon RDS DB snapshot. </p> <p>This data type is used as a response element in the <code>DescribeDBSnapshots</code> action. </p> */
		DBSnapshot?: DBSnapshot;
	}

	export interface DeleteEventSubscriptionResult {

		/**Contains the results of a successful invocation of the <code>DescribeEventSubscriptions</code> action. */
		EventSubscription?: EventSubscription;
	}

	export interface DeleteGlobalClusterResult {

		/**A data type representing an Aurora global database. */
		GlobalCluster?: GlobalCluster;
	}


	/**Contains the installation media for a DB engine that requires an on-premises customer provided license, such as Microsoft SQL Server. */
	export interface InstallationMedia {
		InstallationMediaId?: string;
		CustomAvailabilityZoneId?: string;
		Engine?: string;
		EngineVersion?: string;
		EngineInstallationMediaPath?: string;
		OSInstallationMediaPath?: string;
		Status?: string;

		/**Contains the cause of an installation media failure. Installation media is used for a DB engine that requires an on-premises customer provided license, such as Microsoft SQL Server. */
		FailureCause?: InstallationMediaFailureCause;
	}


	/**Data returned by the <b>DescribeAccountAttributes</b> action. */
	export interface AccountAttributesMessage {
		AccountQuotas?: Array<AccountQuota>;
	}


	/**Data returned by the <b>DescribeCertificates</b> action. */
	export interface CertificateMessage {
		Certificates?: Array<Certificate>;
		Marker?: string;
	}


	/**<p>A filter name and value pair that is used to return a more specific list of results from a describe operation. Filters can be used to match a set of resources by specific criteria, such as IDs. The filters supported by a describe operation are documented with the describe operation.</p> <note> <p>Currently, wildcards are not supported in filters.</p> </note> <p>The following actions can be filtered:</p> <ul> <li> <p> <code>DescribeDBClusterBacktracks</code> </p> </li> <li> <p> <code>DescribeDBClusterEndpoints</code> </p> </li> <li> <p> <code>DescribeDBClusters</code> </p> </li> <li> <p> <code>DescribeDBInstances</code> </p> </li> <li> <p> <code>DescribePendingMaintenanceActions</code> </p> </li> </ul> */
	export interface Filter {
		Name: string;
		Values: Array<String>;
	}

	export interface CustomAvailabilityZoneMessage {
		Marker?: string;
		CustomAvailabilityZones?: Array<CustomAvailabilityZone>;
	}


	/**Contains the result of a successful invocation of the <code>DescribeDBClusterBacktracks</code> action. */
	export interface DBClusterBacktrackMessage {
		Marker?: string;
		DBClusterBacktracks?: Array<DBClusterBacktrack>;
	}

	export interface DBClusterEndpointMessage {
		Marker?: string;
		DBClusterEndpoints?: Array<DBClusterEndpoint>;
	}


	/**<p/> */
	export interface DBClusterParameterGroupsMessage {
		Marker?: string;
		DBClusterParameterGroups?: Array<DBClusterParameterGroup>;
	}


	/**Provides details about a DB cluster parameter group including the parameters in the DB cluster parameter group. */
	export interface DBClusterParameterGroupDetails {
		Parameters?: Array<Parameter>;
		Marker?: string;
	}

	export interface DescribeDBClusterSnapshotAttributesResult {

		/**<p>Contains the results of a successful call to the <code>DescribeDBClusterSnapshotAttributes</code> API action.</p> <p>Manual DB cluster snapshot attributes are used to authorize other AWS accounts to copy or restore a manual DB cluster snapshot. For more information, see the <code>ModifyDBClusterSnapshotAttribute</code> API action.</p> */
		DBClusterSnapshotAttributesResult?: DBClusterSnapshotAttributesResult;
	}


	/** Provides a list of DB cluster snapshots for the user as the result of a call to the <code>DescribeDBClusterSnapshots</code> action.  */
	export interface DBClusterSnapshotMessage {
		Marker?: string;
		DBClusterSnapshots?: Array<DBClusterSnapshot>;
	}


	/**Contains the result of a successful invocation of the <code>DescribeDBClusters</code> action. */
	export interface DBClusterMessage {
		Marker?: string;
		DBClusters?: Array<DBCluster>;
	}


	/** Contains the result of a successful invocation of the <code>DescribeDBEngineVersions</code> action.  */
	export interface DBEngineVersionMessage {
		Marker?: string;
		DBEngineVersions?: Array<DBEngineVersion>;
	}


	/** Contains the result of a successful invocation of the <code>DescribeDBInstanceAutomatedBackups</code> action.  */
	export interface DBInstanceAutomatedBackupMessage {
		Marker?: string;
		DBInstanceAutomatedBackups?: Array<DBInstanceAutomatedBackup>;
	}


	/** Contains the result of a successful invocation of the <code>DescribeDBInstances</code> action.  */
	export interface DBInstanceMessage {
		Marker?: string;
		DBInstances?: Array<DBInstance>;
	}


	/** The response from a call to <code>DescribeDBLogFiles</code>.  */
	export interface DescribeDBLogFilesResponse {
		DescribeDBLogFiles?: Array<DescribeDBLogFilesDetails>;
		Marker?: string;
	}


	/** Contains the result of a successful invocation of the <code>DescribeDBParameterGroups</code> action.  */
	export interface DBParameterGroupsMessage {
		Marker?: string;
		DBParameterGroups?: Array<DBParameterGroup>;
	}


	/** Contains the result of a successful invocation of the <code>DescribeDBParameters</code> action.  */
	export interface DBParameterGroupDetails {
		Parameters?: Array<Parameter>;
		Marker?: string;
	}

	export interface DescribeDBProxiesResponse {
		DBProxies?: Array<DBProxy>;
		Marker?: string;
	}

	export interface DescribeDBProxyTargetGroupsResponse {
		TargetGroups?: Array<DBProxyTargetGroup>;
		Marker?: string;
	}

	export interface DescribeDBProxyTargetsResponse {
		Targets?: Array<DBProxyTarget>;
		Marker?: string;
	}


	/** Contains the result of a successful invocation of the <code>DescribeDBSecurityGroups</code> action.  */
	export interface DBSecurityGroupMessage {
		Marker?: string;
		DBSecurityGroups?: Array<DBSecurityGroup>;
	}

	export interface DescribeDBSnapshotAttributesResult {

		/**<p>Contains the results of a successful call to the <code>DescribeDBSnapshotAttributes</code> API action.</p> <p>Manual DB snapshot attributes are used to authorize other AWS accounts to copy or restore a manual DB snapshot. For more information, see the <code>ModifyDBSnapshotAttribute</code> API action.</p> */
		DBSnapshotAttributesResult?: DBSnapshotAttributesResult;
	}


	/** Contains the result of a successful invocation of the <code>DescribeDBSnapshots</code> action.  */
	export interface DBSnapshotMessage {
		Marker?: string;
		DBSnapshots?: Array<DBSnapshot>;
	}


	/** Contains the result of a successful invocation of the <code>DescribeDBSubnetGroups</code> action.  */
	export interface DBSubnetGroupMessage {
		Marker?: string;
		DBSubnetGroups?: Array<DBSubnetGroup>;
	}

	export interface DescribeEngineDefaultClusterParametersResult {

		/**Contains the result of a successful invocation of the <code>DescribeEngineDefaultParameters</code> action. */
		EngineDefaults?: EngineDefaults;
	}

	export interface DescribeEngineDefaultParametersResult {

		/**Contains the result of a successful invocation of the <code>DescribeEngineDefaultParameters</code> action. */
		EngineDefaults?: EngineDefaults;
	}


	/**Data returned from the <b>DescribeEventCategories</b> action. */
	export interface EventCategoriesMessage {
		EventCategoriesMapList?: Array<EventCategoriesMap>;
	}


	/**Data returned by the <b>DescribeEventSubscriptions</b> action. */
	export interface EventSubscriptionsMessage {
		Marker?: string;
		EventSubscriptionsList?: Array<EventSubscription>;
	}


	/** Contains the result of a successful invocation of the <code>DescribeEvents</code> action.  */
	export interface EventsMessage {
		Marker?: string;
		Events?: Array<Event>;
	}

	export interface ExportTasksMessage {
		Marker?: string;
		ExportTasks?: Array<ExportTask>;
	}

	export interface GlobalClustersMessage {
		Marker?: string;
		GlobalClusters?: Array<GlobalCluster>;
	}

	export interface InstallationMediaMessage {
		Marker?: string;
		InstallationMedia?: Array<InstallationMedia>;
	}


	/**<p/> */
	export interface OptionGroupOptionsMessage {

		/**List of available option group options. */
		OptionGroupOptions?: Array<OptionGroupOption>;
		Marker?: string;
	}


	/**List of option groups. */
	export interface OptionGroups {
		OptionGroupsList?: Array<OptionGroup>;
		Marker?: string;
	}


	/** Contains the result of a successful invocation of the <code>DescribeOrderableDBInstanceOptions</code> action.  */
	export interface OrderableDBInstanceOptionsMessage {
		OrderableDBInstanceOptions?: Array<OrderableDBInstanceOption>;
		Marker?: string;
	}


	/**Data returned from the <b>DescribePendingMaintenanceActions</b> action. */
	export interface PendingMaintenanceActionsMessage {
		PendingMaintenanceActions?: Array<ResourcePendingMaintenanceActions>;
		Marker?: string;
	}


	/** Contains the result of a successful invocation of the <code>DescribeReservedDBInstances</code> action.  */
	export interface ReservedDBInstanceMessage {
		Marker?: string;
		ReservedDBInstances?: Array<ReservedDBInstance>;
	}


	/** Contains the result of a successful invocation of the <code>DescribeReservedDBInstancesOfferings</code> action.  */
	export interface ReservedDBInstancesOfferingMessage {
		Marker?: string;
		ReservedDBInstancesOfferings?: Array<ReservedDBInstancesOffering>;
	}


	/**Contains the result of a successful invocation of the <code>DescribeSourceRegions</code> action. */
	export interface SourceRegionMessage {
		Marker?: string;
		SourceRegions?: Array<SourceRegion>;
	}

	export interface DescribeValidDBInstanceModificationsResult {

		/**Information about valid modifications that you can make to your DB instance. Contains the result of a successful call to the <code>DescribeValidDBInstanceModifications</code> action. You can use this information when you call <code>ModifyDBInstance</code>. */
		ValidDBInstanceModificationsMessage?: ValidDBInstanceModificationsMessage;
	}


	/**This data type is used as a response element to <code>DownloadDBLogFilePortion</code>. */
	export interface DownloadDBLogFilePortionDetails {
		LogFileData?: string;
		Marker?: string;
		AdditionalDataPending?: boolean;
	}

	export interface FailoverDBClusterResult {

		/**<p>Contains the details of an Amazon Aurora DB cluster. </p> <p>This data type is used as a response element in the <code>DescribeDBClusters</code>, <code>StopDBCluster</code>, and <code>StartDBCluster</code> actions. </p> */
		DBCluster?: DBCluster;
	}


	/**<p/> */
	export interface TagListMessage {

		/**A list of tags. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i> */
		TagList?: Array<Tag>;
	}

	export interface ModifyCertificatesResult {

		/**A CA certificate for an AWS account. */
		Certificate?: Certificate;
	}

	export interface DBClusterCapacityInfo {
		DBClusterIdentifier?: string;
		PendingCapacity?: number;
		CurrentCapacity?: number;
		SecondsBeforeTimeout?: number;
		TimeoutAction?: string;
	}

	export interface ModifyDBClusterResult {

		/**<p>Contains the details of an Amazon Aurora DB cluster. </p> <p>This data type is used as a response element in the <code>DescribeDBClusters</code>, <code>StopDBCluster</code>, and <code>StartDBCluster</code> actions. </p> */
		DBCluster?: DBCluster;
	}


	/**<p/> */
	export interface DBClusterParameterGroupNameMessage {
		DBClusterParameterGroupName?: string;
	}


	/**<p> This data type is used as a request parameter in the <code>ModifyDBParameterGroup</code> and <code>ResetDBParameterGroup</code> actions. </p> <p>This data type is used as a response element in the <code>DescribeEngineDefaultParameters</code> and <code>DescribeDBParameters</code> actions.</p> */
	export interface Parameter {
		ParameterName?: string;
		ParameterValue?: string;
		Description?: string;
		Source?: string;
		ApplyType?: string;
		DataType?: string;
		AllowedValues?: string;
		IsModifiable?: boolean;
		MinimumEngineVersion?: string;
		ApplyMethod?: ParameterApplyMethod;
		SupportedEngineModes?: Array<String>;
	}

	export enum ParameterApplyMethod { immediate = 0, pending-reboot = 1 }

	export interface ModifyDBClusterSnapshotAttributeResult {

		/**<p>Contains the results of a successful call to the <code>DescribeDBClusterSnapshotAttributes</code> API action.</p> <p>Manual DB cluster snapshot attributes are used to authorize other AWS accounts to copy or restore a manual DB cluster snapshot. For more information, see the <code>ModifyDBClusterSnapshotAttribute</code> API action.</p> */
		DBClusterSnapshotAttributesResult?: DBClusterSnapshotAttributesResult;
	}

	export interface ModifyDBInstanceResult {

		/**<p>Contains the details of an Amazon RDS DB instance. </p> <p>This data type is used as a response element in the <code>DescribeDBInstances</code> action. </p> */
		DBInstance?: DBInstance;
	}


	/** Contains the result of a successful invocation of the <code>ModifyDBParameterGroup</code> or <code>ResetDBParameterGroup</code> action.  */
	export interface DBParameterGroupNameMessage {
		DBParameterGroupName?: string;
	}

	export interface ModifyDBProxyResponse {

		/**<note> <p>This is prerelease documentation for the RDS Database Proxy feature in preview release. It is subject to change.</p> </note> <p>The data structure representing a proxy managed by the RDS Proxy.</p> <p>This data type is used as a response element in the <code>DescribeDBProxies</code> action.</p> */
		DBProxy?: DBProxy;
	}

	export interface ModifyDBProxyTargetGroupResponse {

		/**<note> <p>This is prerelease documentation for the RDS Database Proxy feature in preview release. It is subject to change.</p> </note> <p>Represents a set of RDS DB instances, Aurora DB clusters, or both that a proxy can connect to. Currently, each target group is associated with exactly one RDS DB instance or Aurora DB cluster.</p> <p>This data type is used as a response element in the <code>DescribeDBProxyTargetGroups</code> action.</p> */
		DBProxyTargetGroup?: DBProxyTargetGroup;
	}

	export interface ModifyDBSnapshotResult {

		/**<p>Contains the details of an Amazon RDS DB snapshot. </p> <p>This data type is used as a response element in the <code>DescribeDBSnapshots</code> action. </p> */
		DBSnapshot?: DBSnapshot;
	}

	export interface ModifyDBSnapshotAttributeResult {

		/**<p>Contains the results of a successful call to the <code>DescribeDBSnapshotAttributes</code> API action.</p> <p>Manual DB snapshot attributes are used to authorize other AWS accounts to copy or restore a manual DB snapshot. For more information, see the <code>ModifyDBSnapshotAttribute</code> API action.</p> */
		DBSnapshotAttributesResult?: DBSnapshotAttributesResult;
	}

	export interface ModifyDBSubnetGroupResult {

		/**<p>Contains the details of an Amazon RDS DB subnet group. </p> <p>This data type is used as a response element in the <code>DescribeDBSubnetGroups</code> action. </p> */
		DBSubnetGroup?: DBSubnetGroup;
	}

	export interface ModifyEventSubscriptionResult {

		/**Contains the results of a successful invocation of the <code>DescribeEventSubscriptions</code> action. */
		EventSubscription?: EventSubscription;
	}

	export interface ModifyGlobalClusterResult {

		/**A data type representing an Aurora global database. */
		GlobalCluster?: GlobalCluster;
	}

	export interface ModifyOptionGroupResult {

		/**<p/> */
		OptionGroup?: OptionGroup;
	}


	/**A list of all available options */
	export interface OptionConfiguration {
		OptionName: string;
		Port?: number;
		OptionVersion?: string;
		DBSecurityGroupMemberships?: Array<String>;
		VpcSecurityGroupMemberships?: Array<String>;
		OptionSettings?: Array<OptionSetting>;
	}

	export interface PromoteReadReplicaResult {

		/**<p>Contains the details of an Amazon RDS DB instance. </p> <p>This data type is used as a response element in the <code>DescribeDBInstances</code> action. </p> */
		DBInstance?: DBInstance;
	}

	export interface PromoteReadReplicaDBClusterResult {

		/**<p>Contains the details of an Amazon Aurora DB cluster. </p> <p>This data type is used as a response element in the <code>DescribeDBClusters</code>, <code>StopDBCluster</code>, and <code>StartDBCluster</code> actions. </p> */
		DBCluster?: DBCluster;
	}

	export interface PurchaseReservedDBInstancesOfferingResult {

		/**This data type is used as a response element in the <code>DescribeReservedDBInstances</code> and <code>PurchaseReservedDBInstancesOffering</code> actions. */
		ReservedDBInstance?: ReservedDBInstance;
	}

	export interface RebootDBInstanceResult {

		/**<p>Contains the details of an Amazon RDS DB instance. </p> <p>This data type is used as a response element in the <code>DescribeDBInstances</code> action. </p> */
		DBInstance?: DBInstance;
	}

	export interface RegisterDBProxyTargetsResponse {
		DBProxyTargets?: Array<DBProxyTarget>;
	}

	export interface RemoveFromGlobalClusterResult {

		/**A data type representing an Aurora global database. */
		GlobalCluster?: GlobalCluster;
	}

	export interface RemoveSourceIdentifierFromSubscriptionResult {

		/**Contains the results of a successful invocation of the <code>DescribeEventSubscriptions</code> action. */
		EventSubscription?: EventSubscription;
	}

	export interface RestoreDBClusterFromS3Result {

		/**<p>Contains the details of an Amazon Aurora DB cluster. </p> <p>This data type is used as a response element in the <code>DescribeDBClusters</code>, <code>StopDBCluster</code>, and <code>StartDBCluster</code> actions. </p> */
		DBCluster?: DBCluster;
	}

	export interface RestoreDBClusterFromSnapshotResult {

		/**<p>Contains the details of an Amazon Aurora DB cluster. </p> <p>This data type is used as a response element in the <code>DescribeDBClusters</code>, <code>StopDBCluster</code>, and <code>StartDBCluster</code> actions. </p> */
		DBCluster?: DBCluster;
	}

	export interface RestoreDBClusterToPointInTimeResult {

		/**<p>Contains the details of an Amazon Aurora DB cluster. </p> <p>This data type is used as a response element in the <code>DescribeDBClusters</code>, <code>StopDBCluster</code>, and <code>StartDBCluster</code> actions. </p> */
		DBCluster?: DBCluster;
	}

	export interface RestoreDBInstanceFromDBSnapshotResult {

		/**<p>Contains the details of an Amazon RDS DB instance. </p> <p>This data type is used as a response element in the <code>DescribeDBInstances</code> action. </p> */
		DBInstance?: DBInstance;
	}

	export interface RestoreDBInstanceFromS3Result {

		/**<p>Contains the details of an Amazon RDS DB instance. </p> <p>This data type is used as a response element in the <code>DescribeDBInstances</code> action. </p> */
		DBInstance?: DBInstance;
	}

	export interface RestoreDBInstanceToPointInTimeResult {

		/**<p>Contains the details of an Amazon RDS DB instance. </p> <p>This data type is used as a response element in the <code>DescribeDBInstances</code> action. </p> */
		DBInstance?: DBInstance;
	}

	export interface RevokeDBSecurityGroupIngressResult {

		/**<p>Contains the details for an Amazon RDS DB security group. </p> <p>This data type is used as a response element in the <code>DescribeDBSecurityGroups</code> action. </p> */
		DBSecurityGroup?: DBSecurityGroup;
	}

	export interface StartActivityStreamResponse {
		KmsKeyId?: string;
		KinesisStreamName?: string;
		Status?: StartActivityStreamResponseStatus;
		Mode?: StartActivityStreamResponseMode;
		ApplyImmediately?: boolean;
	}

	export enum StartActivityStreamResponseStatus { stopped = 0, starting = 1, started = 2, stopping = 3 }

	export enum StartActivityStreamResponseMode { sync = 0, async = 1 }

	export interface StartDBClusterResult {

		/**<p>Contains the details of an Amazon Aurora DB cluster. </p> <p>This data type is used as a response element in the <code>DescribeDBClusters</code>, <code>StopDBCluster</code>, and <code>StartDBCluster</code> actions. </p> */
		DBCluster?: DBCluster;
	}

	export interface StartDBInstanceResult {

		/**<p>Contains the details of an Amazon RDS DB instance. </p> <p>This data type is used as a response element in the <code>DescribeDBInstances</code> action. </p> */
		DBInstance?: DBInstance;
	}

	export interface StopActivityStreamResponse {
		KmsKeyId?: string;
		KinesisStreamName?: string;
		Status?: StopActivityStreamResponseStatus;
	}

	export enum StopActivityStreamResponseStatus { stopped = 0, starting = 1, started = 2, stopping = 3 }

	export interface StopDBClusterResult {

		/**<p>Contains the details of an Amazon Aurora DB cluster. </p> <p>This data type is used as a response element in the <code>DescribeDBClusters</code>, <code>StopDBCluster</code>, and <code>StartDBCluster</code> actions. </p> */
		DBCluster?: DBCluster;
	}

	export interface StopDBInstanceResult {

		/**<p>Contains the details of an Amazon RDS DB instance. </p> <p>This data type is used as a response element in the <code>DescribeDBInstances</code> action. </p> */
		DBInstance?: DBInstance;
	}


	/**<p>Describes a quota for an AWS account.</p> <p>The following are account quotas:</p> <ul> <li> <p> <code>AllocatedStorage</code> - The total allocated storage per account, in GiB. The used value is the total allocated storage in the account, in GiB.</p> </li> <li> <p> <code>AuthorizationsPerDBSecurityGroup</code> - The number of ingress rules per DB security group. The used value is the highest number of ingress rules in a DB security group in the account. Other DB security groups in the account might have a lower number of ingress rules.</p> </li> <li> <p> <code>CustomEndpointsPerDBCluster</code> - The number of custom endpoints per DB cluster. The used value is the highest number of custom endpoints in a DB clusters in the account. Other DB clusters in the account might have a lower number of custom endpoints.</p> </li> <li> <p> <code>DBClusterParameterGroups</code> - The number of DB cluster parameter groups per account, excluding default parameter groups. The used value is the count of nondefault DB cluster parameter groups in the account.</p> </li> <li> <p> <code>DBClusterRoles</code> - The number of associated AWS Identity and Access Management (IAM) roles per DB cluster. The used value is the highest number of associated IAM roles for a DB cluster in the account. Other DB clusters in the account might have a lower number of associated IAM roles.</p> </li> <li> <p> <code>DBClusters</code> - The number of DB clusters per account. The used value is the count of DB clusters in the account.</p> </li> <li> <p> <code>DBInstanceRoles</code> - The number of associated IAM roles per DB instance. The used value is the highest number of associated IAM roles for a DB instance in the account. Other DB instances in the account might have a lower number of associated IAM roles.</p> </li> <li> <p> <code>DBInstances</code> - The number of DB instances per account. The used value is the count of the DB instances in the account.</p> <p>Amazon RDS DB instances, Amazon Aurora DB instances, Amazon Neptune instances, and Amazon DocumentDB instances apply to this quota.</p> </li> <li> <p> <code>DBParameterGroups</code> - The number of DB parameter groups per account, excluding default parameter groups. The used value is the count of nondefault DB parameter groups in the account.</p> </li> <li> <p> <code>DBSecurityGroups</code> - The number of DB security groups (not VPC security groups) per account, excluding the default security group. The used value is the count of nondefault DB security groups in the account.</p> </li> <li> <p> <code>DBSubnetGroups</code> - The number of DB subnet groups per account. The used value is the count of the DB subnet groups in the account.</p> </li> <li> <p> <code>EventSubscriptions</code> - The number of event subscriptions per account. The used value is the count of the event subscriptions in the account.</p> </li> <li> <p> <code>ManualSnapshots</code> - The number of manual DB snapshots per account. The used value is the count of the manual DB snapshots in the account.</p> </li> <li> <p> <code>OptionGroups</code> - The number of DB option groups per account, excluding default option groups. The used value is the count of nondefault DB option groups in the account.</p> </li> <li> <p> <code>ReadReplicasPerMaster</code> - The number of read replicas per DB instance. The used value is the highest number of read replicas for a DB instance in the account. Other DB instances in the account might have a lower number of read replicas.</p> </li> <li> <p> <code>ReservedDBInstances</code> - The number of reserved DB instances per account. The used value is the count of the active reserved DB instances in the account.</p> </li> <li> <p> <code>SubnetsPerDBSubnetGroup</code> - The number of subnets per DB subnet group. The used value is highest number of subnets for a DB subnet group in the account. Other DB subnet groups in the account might have a lower number of subnets.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Limits.html">Quotas for Amazon RDS</a> in the <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_Limits.html">Quotas for Amazon Aurora</a> in the <i>Amazon Aurora User Guide</i>.</p> */
	export interface AccountQuota {
		AccountQuotaName?: string;
		Used?: number;
		Max?: number;
	}

	export enum ActivityStreamMode { sync = 0, async = 1 }

	export enum ActivityStreamStatus { stopped = 0, starting = 1, started = 2, stopping = 3 }

	export interface AddRoleToDBClusterMessage {
		DBClusterIdentifier: string;
		RoleArn: string;
		FeatureName?: string;
	}

	export interface AddRoleToDBInstanceMessage {
		DBInstanceIdentifier: string;
		RoleArn: string;
		FeatureName: string;
	}


	/**<p/> */
	export interface AddSourceIdentifierToSubscriptionMessage {
		SubscriptionName: string;
		SourceIdentifier: string;
	}


	/**Contains the results of a successful invocation of the <code>DescribeEventSubscriptions</code> action. */
	export interface EventSubscription {
		CustomerAwsId?: string;
		CustSubscriptionId?: string;
		SnsTopicArn?: string;
		Status?: string;
		SubscriptionCreationTime?: string;
		SourceType?: string;
		SourceIdsList?: Array<String>;
		EventCategoriesList?: Array<String>;
		Enabled?: boolean;
		EventSubscriptionArn?: string;
	}


	/**<p/> */
	export interface AddTagsToResourceMessage {
		ResourceName: string;

		/**A list of tags. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i> */
		Tags: Array<Tag>;
	}

	export enum ApplyMethod { immediate = 0, pending-reboot = 1 }


	/**<p/> */
	export interface ApplyPendingMaintenanceActionMessage {
		ResourceIdentifier: string;
		ApplyAction: string;
		OptInType: string;
	}


	/**Describes the pending maintenance actions for a resource. */
	export interface ResourcePendingMaintenanceActions {
		ResourceIdentifier?: string;
		PendingMaintenanceActionDetails?: Array<PendingMaintenanceAction>;
	}

	export enum AuthScheme { SECRETS = 0 }


	/**<p/> */
	export interface AuthorizeDBSecurityGroupIngressMessage {
		DBSecurityGroupName: string;
		CIDRIP?: string;
		EC2SecurityGroupName?: string;
		EC2SecurityGroupId?: string;
		EC2SecurityGroupOwnerId?: string;
	}


	/**<p>Contains the details for an Amazon RDS DB security group. </p> <p>This data type is used as a response element in the <code>DescribeDBSecurityGroups</code> action. </p> */
	export interface DBSecurityGroup {
		OwnerId?: string;
		DBSecurityGroupName?: string;
		DBSecurityGroupDescription?: string;
		VpcId?: string;
		EC2SecurityGroups?: Array<EC2SecurityGroup>;
		IPRanges?: Array<IPRange>;
		DBSecurityGroupArn?: string;
	}


	/**<p>Contains Availability Zone information.</p> <p> This data type is used as an element in the <code>OrderableDBInstanceOption</code> data type.</p> */
	export interface AvailabilityZone {
		Name?: string;
	}


	/**<p>Contains the available processor feature information for the DB instance class of a DB instance.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html#USER_ConfigureProcessor">Configuring the Processor of the DB Instance Class</a> in the <i>Amazon RDS User Guide. </i> </p> */
	export interface AvailableProcessorFeature {
		Name?: string;
		DefaultValue?: string;
		AllowedValues?: string;
	}


	/**<p/> */
	export interface BacktrackDBClusterMessage {
		DBClusterIdentifier: string;
		BacktrackTo: Date;
		Force?: boolean;
		UseEarliestTimeOnPointInTimeUnavailable?: boolean;
	}

	export interface CancelExportTaskMessage {
		ExportTaskIdentifier: string;
	}


	/**A CA certificate for an AWS account. */
	export interface Certificate {
		CertificateIdentifier?: string;
		CertificateType?: string;
		Thumbprint?: string;
		ValidFrom?: Date;
		ValidTill?: Date;
		CertificateArn?: string;
		CustomerOverride?: boolean;
		CustomerOverrideValidTill?: Date;
	}


	/** This data type is used as a response element in the action <code>DescribeDBEngineVersions</code>.  */
	export interface CharacterSet {
		CharacterSetName?: string;
		CharacterSetDescription?: string;
	}


	/**<p>The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB instance or DB cluster.</p> <p>The <code>EnableLogTypes</code> and <code>DisableLogTypes</code> arrays determine which logs will be exported (or not exported) to CloudWatch Logs. The values within these arrays depend on the DB engine being used. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs </a> in the <i>Amazon RDS User Guide</i>.</p> */
	export interface CloudwatchLogsExportConfiguration {
		EnableLogTypes?: Array<String>;
		DisableLogTypes?: Array<String>;
	}


	/**<note> <p>This is prerelease documentation for the RDS Database Proxy feature in preview release. It is subject to change.</p> </note> <p>Specifies the settings that control the size and behavior of the connection pool associated with a <code>DBProxyTargetGroup</code>.</p> */
	export interface ConnectionPoolConfiguration {
		MaxConnectionsPercent?: number;
		MaxIdleConnectionsPercent?: number;
		ConnectionBorrowTimeout?: number;
		SessionPinningFilters?: Array<String>;
		InitQuery?: string;
	}


	/**<note> <p>This is prerelease documentation for the RDS Database Proxy feature in preview release. It is subject to change.</p> </note> <p>Displays the settings that control the size and behavior of the connection pool associated with a <code>DBProxyTarget</code>.</p> */
	export interface ConnectionPoolConfigurationInfo {
		MaxConnectionsPercent?: number;
		MaxIdleConnectionsPercent?: number;
		ConnectionBorrowTimeout?: number;
		SessionPinningFilters?: Array<String>;
		InitQuery?: string;
	}

	export interface CopyDBClusterParameterGroupMessage {
		SourceDBClusterParameterGroupIdentifier: string;
		TargetDBClusterParameterGroupIdentifier: string;
		TargetDBClusterParameterGroupDescription: string;

		/**A list of tags. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i> */
		Tags?: Array<Tag>;
	}


	/**<p>Contains the details of an Amazon RDS DB cluster parameter group. </p> <p>This data type is used as a response element in the <code>DescribeDBClusterParameterGroups</code> action. </p> */
	export interface DBClusterParameterGroup {
		DBClusterParameterGroupName?: string;
		DBParameterGroupFamily?: string;
		Description?: string;
		DBClusterParameterGroupArn?: string;
	}


	/**<p/> */
	export interface CopyDBClusterSnapshotMessage {
		SourceDBClusterSnapshotIdentifier: string;
		TargetDBClusterSnapshotIdentifier: string;
		KmsKeyId?: string;
		PreSignedUrl?: string;
		CopyTags?: boolean;

		/**A list of tags. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i> */
		Tags?: Array<Tag>;
		SourceRegion?: string;
	}


	/**<p>Contains the details for an Amazon RDS DB cluster snapshot </p> <p>This data type is used as a response element in the <code>DescribeDBClusterSnapshots</code> action. </p> */
	export interface DBClusterSnapshot {
		AvailabilityZones?: Array<String>;
		DBClusterSnapshotIdentifier?: string;
		DBClusterIdentifier?: string;
		SnapshotCreateTime?: Date;
		Engine?: string;
		AllocatedStorage?: number;
		Status?: string;
		Port?: number;
		VpcId?: string;
		ClusterCreateTime?: Date;
		MasterUsername?: string;
		EngineVersion?: string;
		LicenseModel?: string;
		SnapshotType?: string;
		PercentProgress?: number;
		StorageEncrypted?: boolean;
		KmsKeyId?: string;
		DBClusterSnapshotArn?: string;
		SourceDBClusterSnapshotArn?: string;
		IAMDatabaseAuthenticationEnabled?: boolean;
	}


	/**<p/> */
	export interface CopyDBParameterGroupMessage {
		SourceDBParameterGroupIdentifier: string;
		TargetDBParameterGroupIdentifier: string;
		TargetDBParameterGroupDescription: string;

		/**A list of tags. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i> */
		Tags?: Array<Tag>;
	}


	/**<p>Contains the details of an Amazon RDS DB parameter group. </p> <p>This data type is used as a response element in the <code>DescribeDBParameterGroups</code> action. </p> */
	export interface DBParameterGroup {
		DBParameterGroupName?: string;
		DBParameterGroupFamily?: string;
		Description?: string;
		DBParameterGroupArn?: string;
	}


	/**<p/> */
	export interface CopyDBSnapshotMessage {
		SourceDBSnapshotIdentifier: string;
		TargetDBSnapshotIdentifier: string;
		KmsKeyId?: string;

		/**A list of tags. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i> */
		Tags?: Array<Tag>;
		CopyTags?: boolean;
		PreSignedUrl?: string;
		OptionGroupName?: string;
		SourceRegion?: string;
	}


	/**<p>Contains the details of an Amazon RDS DB snapshot. </p> <p>This data type is used as a response element in the <code>DescribeDBSnapshots</code> action. </p> */
	export interface DBSnapshot {
		DBSnapshotIdentifier?: string;
		DBInstanceIdentifier?: string;
		SnapshotCreateTime?: Date;
		Engine?: string;
		AllocatedStorage?: number;
		Status?: string;
		Port?: number;
		AvailabilityZone?: string;
		VpcId?: string;
		InstanceCreateTime?: Date;
		MasterUsername?: string;
		EngineVersion?: string;
		LicenseModel?: string;
		SnapshotType?: string;
		Iops?: number;
		OptionGroupName?: string;
		PercentProgress?: number;
		SourceRegion?: string;
		SourceDBSnapshotIdentifier?: string;
		StorageType?: string;
		TdeCredentialArn?: string;
		Encrypted?: boolean;
		KmsKeyId?: string;
		DBSnapshotArn?: string;
		Timezone?: string;
		IAMDatabaseAuthenticationEnabled?: boolean;
		ProcessorFeatures?: Array<ProcessorFeature>;
		DbiResourceId?: string;
	}


	/**<p/> */
	export interface CopyOptionGroupMessage {
		SourceOptionGroupIdentifier: string;
		TargetOptionGroupIdentifier: string;
		TargetOptionGroupDescription: string;

		/**A list of tags. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i> */
		Tags?: Array<Tag>;
	}


	/**<p/> */
	export interface OptionGroup {
		OptionGroupName?: string;
		OptionGroupDescription?: string;
		EngineName?: string;
		MajorEngineVersion?: string;
		Options?: Array<Option>;
		AllowsVpcAndNonVpcInstanceMemberships?: boolean;
		VpcId?: string;
		OptionGroupArn?: string;
	}


	/**<p/> */
	export interface CreateCustomAvailabilityZoneMessage {
		CustomAvailabilityZoneName: string;
		ExistingVpnId?: string;
		NewVpnTunnelName?: string;
		VpnTunnelOriginatorIP?: string;
	}


	/**<p>A custom Availability Zone (AZ) is an on-premises AZ that is integrated with a VMware vSphere cluster.</p> <p>For more information about RDS on VMware, see the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/RDSonVMwareUserGuide/rds-on-vmware.html"> <i>RDS on VMware User Guide.</i> </a> </p> */
	export interface CustomAvailabilityZone {
		CustomAvailabilityZoneId?: string;
		CustomAvailabilityZoneName?: string;
		CustomAvailabilityZoneStatus?: string;

		/**<p>Information about the virtual private network (VPN) between the VMware vSphere cluster and the AWS website.</p> <p>For more information about RDS on VMware, see the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/RDSonVMwareUserGuide/rds-on-vmware.html"> <i>RDS on VMware User Guide.</i> </a> </p> */
		VpnDetails?: VpnDetails;
	}

	export interface CreateDBClusterEndpointMessage {
		DBClusterIdentifier: string;
		DBClusterEndpointIdentifier: string;
		EndpointType: string;
		StaticMembers?: Array<String>;
		ExcludedMembers?: Array<String>;

		/**A list of tags. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i> */
		Tags?: Array<Tag>;
	}


	/**<p>Contains the scaling configuration of an Aurora Serverless DB cluster.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html">Using Amazon Aurora Serverless</a> in the <i>Amazon Aurora User Guide</i>.</p> */
	export interface ScalingConfiguration {
		MinCapacity?: number;
		MaxCapacity?: number;
		AutoPause?: boolean;
		SecondsUntilAutoPause?: number;
		TimeoutAction?: string;
	}


	/**<p/> */
	export interface CreateDBClusterMessage {
		AvailabilityZones?: Array<String>;
		BackupRetentionPeriod?: number;
		CharacterSetName?: string;
		DatabaseName?: string;
		DBClusterIdentifier: string;
		DBClusterParameterGroupName?: string;
		VpcSecurityGroupIds?: Array<String>;
		DBSubnetGroupName?: string;
		Engine: string;
		EngineVersion?: string;
		Port?: number;
		MasterUsername?: string;
		MasterUserPassword?: string;
		OptionGroupName?: string;
		PreferredBackupWindow?: string;
		PreferredMaintenanceWindow?: string;
		ReplicationSourceIdentifier?: string;

		/**A list of tags. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i> */
		Tags?: Array<Tag>;
		StorageEncrypted?: boolean;
		KmsKeyId?: string;
		PreSignedUrl?: string;
		EnableIAMDatabaseAuthentication?: boolean;
		BacktrackWindow?: number;
		EnableCloudwatchLogsExports?: Array<String>;
		EngineMode?: string;

		/**<p>Contains the scaling configuration of an Aurora Serverless DB cluster.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html">Using Amazon Aurora Serverless</a> in the <i>Amazon Aurora User Guide</i>.</p> */
		ScalingConfiguration?: ScalingConfiguration;
		DeletionProtection?: boolean;
		GlobalClusterIdentifier?: string;
		EnableHttpEndpoint?: boolean;
		CopyTagsToSnapshot?: boolean;
		Domain?: string;
		DomainIAMRoleName?: string;
		SourceRegion?: string;
	}


	/**<p/> */
	export interface CreateDBClusterParameterGroupMessage {
		DBClusterParameterGroupName: string;
		DBParameterGroupFamily: string;
		Description: string;

		/**A list of tags. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i> */
		Tags?: Array<Tag>;
	}


	/**<p>Contains the details of an Amazon Aurora DB cluster. </p> <p>This data type is used as a response element in the <code>DescribeDBClusters</code>, <code>StopDBCluster</code>, and <code>StartDBCluster</code> actions. </p> */
	export interface DBCluster {
		AllocatedStorage?: number;
		AvailabilityZones?: Array<String>;
		BackupRetentionPeriod?: number;
		CharacterSetName?: string;
		DatabaseName?: string;
		DBClusterIdentifier?: string;
		DBClusterParameterGroup?: string;
		DBSubnetGroup?: string;
		Status?: string;
		PercentProgress?: string;
		EarliestRestorableTime?: Date;
		Endpoint?: string;
		ReaderEndpoint?: string;
		CustomEndpoints?: Array<String>;
		MultiAZ?: boolean;
		Engine?: string;
		EngineVersion?: string;
		LatestRestorableTime?: Date;
		Port?: number;
		MasterUsername?: string;
		DBClusterOptionGroupMemberships?: Array<DBClusterOptionGroupStatus>;
		PreferredBackupWindow?: string;
		PreferredMaintenanceWindow?: string;
		ReplicationSourceIdentifier?: string;
		ReadReplicaIdentifiers?: Array<String>;
		DBClusterMembers?: Array<DBClusterMember>;
		VpcSecurityGroups?: Array<VpcSecurityGroupMembership>;
		HostedZoneId?: string;
		StorageEncrypted?: boolean;
		KmsKeyId?: string;
		DbClusterResourceId?: string;
		DBClusterArn?: string;
		AssociatedRoles?: Array<DBClusterRole>;
		IAMDatabaseAuthenticationEnabled?: boolean;
		CloneGroupId?: string;
		ClusterCreateTime?: Date;
		EarliestBacktrackTime?: Date;
		BacktrackWindow?: number;
		BacktrackConsumedChangeRecords?: number;
		EnabledCloudwatchLogsExports?: Array<String>;
		Capacity?: number;
		EngineMode?: string;

		/**<p>Shows the scaling configuration for an Aurora DB cluster in <code>serverless</code> DB engine mode.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html">Using Amazon Aurora Serverless</a> in the <i>Amazon Aurora User Guide</i>.</p> */
		ScalingConfigurationInfo?: ScalingConfigurationInfo;
		DeletionProtection?: boolean;
		HttpEndpointEnabled?: boolean;
		ActivityStreamMode?: DBClusterActivityStreamMode;
		ActivityStreamStatus?: DBClusterActivityStreamStatus;
		ActivityStreamKmsKeyId?: string;
		ActivityStreamKinesisStreamName?: string;
		CopyTagsToSnapshot?: boolean;
		CrossAccountClone?: boolean;

		/**List of Active Directory Domain membership records associated with a DB instance or cluster. */
		DomainMemberships?: Array<DomainMembership>;
	}

	export enum DBClusterActivityStreamMode { sync = 0, async = 1 }

	export enum DBClusterActivityStreamStatus { stopped = 0, starting = 1, started = 2, stopping = 3 }


	/**<p/> */
	export interface CreateDBClusterSnapshotMessage {
		DBClusterSnapshotIdentifier: string;
		DBClusterIdentifier: string;

		/**A list of tags. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i> */
		Tags?: Array<Tag>;
	}


	/**<p/> */
	export interface CreateDBInstanceMessage {
		DBName?: string;
		DBInstanceIdentifier: string;
		AllocatedStorage?: number;
		DBInstanceClass: string;
		Engine: string;
		MasterUsername?: string;
		MasterUserPassword?: string;
		DBSecurityGroups?: Array<String>;
		VpcSecurityGroupIds?: Array<String>;
		AvailabilityZone?: string;
		DBSubnetGroupName?: string;
		PreferredMaintenanceWindow?: string;
		DBParameterGroupName?: string;
		BackupRetentionPeriod?: number;
		PreferredBackupWindow?: string;
		Port?: number;
		MultiAZ?: boolean;
		EngineVersion?: string;
		AutoMinorVersionUpgrade?: boolean;
		LicenseModel?: string;
		Iops?: number;
		OptionGroupName?: string;
		CharacterSetName?: string;
		PubliclyAccessible?: boolean;

		/**A list of tags. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i> */
		Tags?: Array<Tag>;
		DBClusterIdentifier?: string;
		StorageType?: string;
		TdeCredentialArn?: string;
		TdeCredentialPassword?: string;
		StorageEncrypted?: boolean;
		KmsKeyId?: string;
		Domain?: string;
		CopyTagsToSnapshot?: boolean;
		MonitoringInterval?: number;
		MonitoringRoleArn?: string;
		DomainIAMRoleName?: string;
		PromotionTier?: number;
		Timezone?: string;
		EnableIAMDatabaseAuthentication?: boolean;
		EnablePerformanceInsights?: boolean;
		PerformanceInsightsKMSKeyId?: string;
		PerformanceInsightsRetentionPeriod?: number;
		EnableCloudwatchLogsExports?: Array<String>;
		ProcessorFeatures?: Array<ProcessorFeature>;
		DeletionProtection?: boolean;
		MaxAllocatedStorage?: number;
	}

	export interface CreateDBInstanceReadReplicaMessage {
		DBInstanceIdentifier: string;
		SourceDBInstanceIdentifier: string;
		DBInstanceClass?: string;
		AvailabilityZone?: string;
		Port?: number;
		MultiAZ?: boolean;
		AutoMinorVersionUpgrade?: boolean;
		Iops?: number;
		OptionGroupName?: string;
		DBParameterGroupName?: string;
		PubliclyAccessible?: boolean;

		/**A list of tags. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i> */
		Tags?: Array<Tag>;
		DBSubnetGroupName?: string;
		VpcSecurityGroupIds?: Array<String>;
		StorageType?: string;
		CopyTagsToSnapshot?: boolean;
		MonitoringInterval?: number;
		MonitoringRoleArn?: string;
		KmsKeyId?: string;
		PreSignedUrl?: string;
		EnableIAMDatabaseAuthentication?: boolean;
		EnablePerformanceInsights?: boolean;
		PerformanceInsightsKMSKeyId?: string;
		PerformanceInsightsRetentionPeriod?: number;
		EnableCloudwatchLogsExports?: Array<String>;
		ProcessorFeatures?: Array<ProcessorFeature>;
		UseDefaultProcessorFeatures?: boolean;
		DeletionProtection?: boolean;
		Domain?: string;
		DomainIAMRoleName?: string;
		SourceRegion?: string;
	}


	/**<p>Contains the details of an Amazon RDS DB instance. </p> <p>This data type is used as a response element in the <code>DescribeDBInstances</code> action. </p> */
	export interface DBInstance {
		DBInstanceIdentifier?: string;
		DBInstanceClass?: string;
		Engine?: string;
		DBInstanceStatus?: string;
		MasterUsername?: string;
		DBName?: string;

		/**<p>This data type represents the information you need to connect to an Amazon RDS DB instance. This data type is used as a response element in the following actions:</p> <ul> <li> <p> <code>CreateDBInstance</code> </p> </li> <li> <p> <code>DescribeDBInstances</code> </p> </li> <li> <p> <code>DeleteDBInstance</code> </p> </li> </ul> <p>For the data structure that represents Amazon Aurora DB cluster endpoints, see <code>DBClusterEndpoint</code>.</p> */
		Endpoint?: Endpoint;
		AllocatedStorage?: number;
		InstanceCreateTime?: Date;
		PreferredBackupWindow?: string;
		BackupRetentionPeriod?: number;
		DBSecurityGroups?: Array<DBSecurityGroupMembership>;
		VpcSecurityGroups?: Array<VpcSecurityGroupMembership>;
		DBParameterGroups?: Array<DBParameterGroupStatus>;
		AvailabilityZone?: string;

		/**<p>Contains the details of an Amazon RDS DB subnet group. </p> <p>This data type is used as a response element in the <code>DescribeDBSubnetGroups</code> action. </p> */
		DBSubnetGroup?: DBSubnetGroup;
		PreferredMaintenanceWindow?: string;

		/**This data type is used as a response element in the <code>ModifyDBInstance</code> action. */
		PendingModifiedValues?: PendingModifiedValues;
		LatestRestorableTime?: Date;
		MultiAZ?: boolean;
		EngineVersion?: string;
		AutoMinorVersionUpgrade?: boolean;
		ReadReplicaSourceDBInstanceIdentifier?: string;
		ReadReplicaDBInstanceIdentifiers?: Array<String>;
		ReadReplicaDBClusterIdentifiers?: Array<String>;
		LicenseModel?: string;
		Iops?: number;
		OptionGroupMemberships?: Array<OptionGroupMembership>;
		CharacterSetName?: string;
		SecondaryAvailabilityZone?: string;
		PubliclyAccessible?: boolean;
		StatusInfos?: Array<DBInstanceStatusInfo>;
		StorageType?: string;
		TdeCredentialArn?: string;
		DbInstancePort?: number;
		DBClusterIdentifier?: string;
		StorageEncrypted?: boolean;
		KmsKeyId?: string;
		DbiResourceId?: string;
		CACertificateIdentifier?: string;

		/**List of Active Directory Domain membership records associated with a DB instance or cluster. */
		DomainMemberships?: Array<DomainMembership>;
		CopyTagsToSnapshot?: boolean;
		MonitoringInterval?: number;
		EnhancedMonitoringResourceArn?: string;
		MonitoringRoleArn?: string;
		PromotionTier?: number;
		DBInstanceArn?: string;
		Timezone?: string;
		IAMDatabaseAuthenticationEnabled?: boolean;
		PerformanceInsightsEnabled?: boolean;
		PerformanceInsightsKMSKeyId?: string;
		PerformanceInsightsRetentionPeriod?: number;
		EnabledCloudwatchLogsExports?: Array<String>;
		ProcessorFeatures?: Array<ProcessorFeature>;
		DeletionProtection?: boolean;
		AssociatedRoles?: Array<DBInstanceRole>;

		/**<p>This data type represents the information you need to connect to an Amazon RDS DB instance. This data type is used as a response element in the following actions:</p> <ul> <li> <p> <code>CreateDBInstance</code> </p> </li> <li> <p> <code>DescribeDBInstances</code> </p> </li> <li> <p> <code>DeleteDBInstance</code> </p> </li> </ul> <p>For the data structure that represents Amazon Aurora DB cluster endpoints, see <code>DBClusterEndpoint</code>.</p> */
		ListenerEndpoint?: Endpoint;
		MaxAllocatedStorage?: number;
	}


	/**<p/> */
	export interface CreateDBParameterGroupMessage {
		DBParameterGroupName: string;
		DBParameterGroupFamily: string;
		Description: string;

		/**A list of tags. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i> */
		Tags?: Array<Tag>;
	}

	export enum EngineFamily { MYSQL = 0, POSTGRESQL = 1 }

	export interface CreateDBProxyRequest {
		DBProxyName: string;
		EngineFamily: CreateDBProxyRequestEngineFamily;
		Auth: Array<UserAuthConfig>;
		RoleArn: string;
		VpcSubnetIds: Array<String>;
		VpcSecurityGroupIds?: Array<String>;
		RequireTLS?: boolean;
		IdleClientTimeout?: number;
		DebugLogging?: boolean;

		/**A list of tags. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i> */
		Tags?: Array<Tag>;
	}

	export enum CreateDBProxyRequestEngineFamily { MYSQL = 0, POSTGRESQL = 1 }


	/**<note> <p>This is prerelease documentation for the RDS Database Proxy feature in preview release. It is subject to change.</p> </note> <p>The data structure representing a proxy managed by the RDS Proxy.</p> <p>This data type is used as a response element in the <code>DescribeDBProxies</code> action.</p> */
	export interface DBProxy {
		DBProxyName?: string;
		DBProxyArn?: string;
		Status?: DBProxyStatus;
		EngineFamily?: string;
		VpcSecurityGroupIds?: Array<String>;
		VpcSubnetIds?: Array<String>;
		Auth?: Array<UserAuthConfigInfo>;
		RoleArn?: string;
		Endpoint?: string;
		RequireTLS?: boolean;
		IdleClientTimeout?: number;
		DebugLogging?: boolean;
		CreatedDate?: Date;
		UpdatedDate?: Date;
	}

	export enum DBProxyStatus { available = 0, modifying = 1, incompatible-network = 2, insufficient-resource-limits = 3, creating = 4, deleting = 5, suspended = 6, suspending = 7, reactivating = 8 }


	/**<p/> */
	export interface CreateDBSecurityGroupMessage {
		DBSecurityGroupName: string;
		DBSecurityGroupDescription: string;

		/**A list of tags. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i> */
		Tags?: Array<Tag>;
	}


	/**<p/> */
	export interface CreateDBSnapshotMessage {
		DBSnapshotIdentifier: string;
		DBInstanceIdentifier: string;

		/**A list of tags. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i> */
		Tags?: Array<Tag>;
	}


	/**<p/> */
	export interface CreateDBSubnetGroupMessage {
		DBSubnetGroupName: string;
		DBSubnetGroupDescription: string;
		SubnetIds: Array<String>;

		/**A list of tags. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i> */
		Tags?: Array<Tag>;
	}


	/**<p>Contains the details of an Amazon RDS DB subnet group. </p> <p>This data type is used as a response element in the <code>DescribeDBSubnetGroups</code> action. </p> */
	export interface DBSubnetGroup {
		DBSubnetGroupName?: string;
		DBSubnetGroupDescription?: string;
		VpcId?: string;
		SubnetGroupStatus?: string;
		Subnets?: Array<Subnet>;
		DBSubnetGroupArn?: string;
	}


	/**<p/> */
	export interface CreateEventSubscriptionMessage {
		SubscriptionName: string;
		SnsTopicArn: string;
		SourceType?: string;
		EventCategories?: Array<String>;
		SourceIds?: Array<String>;
		Enabled?: boolean;

		/**A list of tags. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i> */
		Tags?: Array<Tag>;
	}

	export interface CreateGlobalClusterMessage {
		GlobalClusterIdentifier?: string;
		SourceDBClusterIdentifier?: string;
		Engine?: string;
		EngineVersion?: string;
		DeletionProtection?: boolean;
		DatabaseName?: string;
		StorageEncrypted?: boolean;
	}


	/**A data type representing an Aurora global database. */
	export interface GlobalCluster {
		GlobalClusterIdentifier?: string;
		GlobalClusterResourceId?: string;
		GlobalClusterArn?: string;
		Status?: string;
		Engine?: string;
		EngineVersion?: string;
		DatabaseName?: string;
		StorageEncrypted?: boolean;
		DeletionProtection?: boolean;
		GlobalClusterMembers?: Array<GlobalClusterMember>;
	}


	/**<p/> */
	export interface CreateOptionGroupMessage {
		OptionGroupName: string;
		EngineName: string;
		MajorEngineVersion: string;
		OptionGroupDescription: string;

		/**A list of tags. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i> */
		Tags?: Array<Tag>;
	}


	/**<p>Information about the virtual private network (VPN) between the VMware vSphere cluster and the AWS website.</p> <p>For more information about RDS on VMware, see the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/RDSonVMwareUserGuide/rds-on-vmware.html"> <i>RDS on VMware User Guide.</i> </a> </p> */
	export interface VpnDetails {
		VpnId?: string;
		VpnTunnelOriginatorIP?: string;
		VpnGatewayIp?: string;
		VpnPSK?: string;
		VpnName?: string;
		VpnState?: string;
	}


	/**<p>Shows the scaling configuration for an Aurora DB cluster in <code>serverless</code> DB engine mode.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html">Using Amazon Aurora Serverless</a> in the <i>Amazon Aurora User Guide</i>.</p> */
	export interface ScalingConfigurationInfo {
		MinCapacity?: number;
		MaxCapacity?: number;
		AutoPause?: boolean;
		SecondsUntilAutoPause?: number;
		TimeoutAction?: string;
	}


	/**Contains information about an instance that is part of a DB cluster. */
	export interface DBClusterMember {
		DBInstanceIdentifier?: string;
		IsClusterWriter?: boolean;
		DBClusterParameterGroupStatus?: string;
		PromotionTier?: number;
	}


	/**Contains status information for a DB cluster option group. */
	export interface DBClusterOptionGroupStatus {
		DBClusterOptionGroupName?: string;
		Status?: string;
	}


	/**Describes an AWS Identity and Access Management (IAM) role that is associated with a DB cluster. */
	export interface DBClusterRole {
		RoleArn?: string;
		Status?: string;
		FeatureName?: string;
	}


	/**<p>Contains the name and values of a manual DB cluster snapshot attribute.</p> <p>Manual DB cluster snapshot attributes are used to authorize other AWS accounts to restore a manual DB cluster snapshot. For more information, see the <code>ModifyDBClusterSnapshotAttribute</code> API action.</p> */
	export interface DBClusterSnapshotAttribute {
		AttributeName?: string;
		AttributeValues?: Array<String>;
	}


	/**<p>Contains the results of a successful call to the <code>DescribeDBClusterSnapshotAttributes</code> API action.</p> <p>Manual DB cluster snapshot attributes are used to authorize other AWS accounts to copy or restore a manual DB cluster snapshot. For more information, see the <code>ModifyDBClusterSnapshotAttribute</code> API action.</p> */
	export interface DBClusterSnapshotAttributesResult {
		DBClusterSnapshotIdentifier?: string;
		DBClusterSnapshotAttributes?: Array<DBClusterSnapshotAttribute>;
	}


	/** This data type is used as a response element in the action <code>DescribeDBEngineVersions</code>.  */
	export interface DBEngineVersion {
		Engine?: string;
		EngineVersion?: string;
		DBParameterGroupFamily?: string;
		DBEngineDescription?: string;
		DBEngineVersionDescription?: string;

		/**This data type is used as a response element in the action <code>DescribeDBEngineVersions</code>. */
		DefaultCharacterSet?: CharacterSet;
		SupportedCharacterSets?: Array<CharacterSet>;
		ValidUpgradeTarget?: Array<UpgradeTarget>;
		SupportedTimezones?: Array<Timezone>;
		ExportableLogTypes?: Array<String>;
		SupportsLogExportsToCloudwatchLogs?: boolean;
		SupportsReadReplica?: boolean;
		SupportedEngineModes?: Array<String>;
		SupportedFeatureNames?: Array<String>;
		Status?: string;
	}


	/**<p>This data type represents the information you need to connect to an Amazon RDS DB instance. This data type is used as a response element in the following actions:</p> <ul> <li> <p> <code>CreateDBInstance</code> </p> </li> <li> <p> <code>DescribeDBInstances</code> </p> </li> <li> <p> <code>DeleteDBInstance</code> </p> </li> </ul> <p>For the data structure that represents Amazon Aurora DB cluster endpoints, see <code>DBClusterEndpoint</code>.</p> */
	export interface Endpoint {
		Address?: string;
		Port?: number;
		HostedZoneId?: string;
	}


	/** This data type is used as a response element in the <code>ModifyDBInstance</code> action.  */
	export interface PendingModifiedValues {
		DBInstanceClass?: string;
		AllocatedStorage?: number;
		MasterUserPassword?: string;
		Port?: number;
		BackupRetentionPeriod?: number;
		MultiAZ?: boolean;
		EngineVersion?: string;
		LicenseModel?: string;
		Iops?: number;
		DBInstanceIdentifier?: string;
		StorageType?: string;
		CACertificateIdentifier?: string;
		DBSubnetGroupName?: string;

		/**A list of the log types whose configuration is still pending. In other words, these log types are in the process of being activated or deactivated. */
		PendingCloudwatchLogsExports?: PendingCloudwatchLogsExports;
		ProcessorFeatures?: Array<ProcessorFeature>;
	}


	/**Earliest and latest time an instance can be restored to: */
	export interface RestoreWindow {
		EarliestTime?: Date;
		LatestTime?: Date;
	}


	/**An automated backup of a DB instance. It it consists of system backups, transaction logs, and the database instance properties that existed at the time you deleted the source instance.  */
	export interface DBInstanceAutomatedBackup {
		DBInstanceArn?: string;
		DbiResourceId?: string;
		Region?: string;
		DBInstanceIdentifier?: string;

		/**Earliest and latest time an instance can be restored to: */
		RestoreWindow?: RestoreWindow;
		AllocatedStorage?: number;
		Status?: string;
		Port?: number;
		AvailabilityZone?: string;
		VpcId?: string;
		InstanceCreateTime?: Date;
		MasterUsername?: string;
		Engine?: string;
		EngineVersion?: string;
		LicenseModel?: string;
		Iops?: number;
		OptionGroupName?: string;
		TdeCredentialArn?: string;
		Encrypted?: boolean;
		StorageType?: string;
		KmsKeyId?: string;
		Timezone?: string;
		IAMDatabaseAuthenticationEnabled?: boolean;
	}


	/**Describes an AWS Identity and Access Management (IAM) role that is associated with a DB instance. */
	export interface DBInstanceRole {
		RoleArn?: string;
		FeatureName?: string;
		Status?: string;
	}


	/**Provides a list of status information for a DB instance. */
	export interface DBInstanceStatusInfo {
		StatusType?: string;
		Normal?: boolean;
		Status?: string;
		Message?: string;
	}


	/**<p>The status of the DB parameter group.</p> <p>This data type is used as a response element in the following actions:</p> <ul> <li> <p> <code>CreateDBInstance</code> </p> </li> <li> <p> <code>CreateDBInstanceReadReplica</code> </p> </li> <li> <p> <code>DeleteDBInstance</code> </p> </li> <li> <p> <code>ModifyDBInstance</code> </p> </li> <li> <p> <code>RebootDBInstance</code> </p> </li> <li> <p> <code>RestoreDBInstanceFromDBSnapshot</code> </p> </li> </ul> */
	export interface DBParameterGroupStatus {
		DBParameterGroupName?: string;
		ParameterApplyStatus?: string;
	}

	export enum DBProxyStatus { available = 0, modifying = 1, incompatible-network = 2, insufficient-resource-limits = 3, creating = 4, deleting = 5, suspended = 6, suspending = 7, reactivating = 8 }

	export enum TargetType { RDS_INSTANCE = 0, RDS_SERVERLESS_ENDPOINT = 1, TRACKED_CLUSTER = 2 }


	/**<note> <p>This is prerelease documentation for the RDS Database Proxy feature in preview release. It is subject to change.</p> </note> <p>Information about the connection health of an RDS Proxy target.</p> */
	export interface TargetHealth {
		State?: TargetHealthState;
		Reason?: TargetHealthReason;
		Description?: string;
	}

	export enum TargetHealthState { REGISTERING = 0, AVAILABLE = 1, UNAVAILABLE = 2 }

	export enum TargetHealthReason { UNREACHABLE = 0, CONNECTION_FAILED = 1, AUTH_FAILURE = 2, PENDING_PROXY_CAPACITY = 3 }


	/**<note> <p>This is prerelease documentation for the RDS Database Proxy feature in preview release. It is subject to change.</p> </note> <p>Contains the details for an RDS Proxy target. It represents an RDS DB instance or Aurora DB cluster that the proxy can connect to. One or more targets are associated with an RDS Proxy target group.</p> <p>This data type is used as a response element in the <code>DescribeDBProxyTargets</code> action.</p> */
	export interface DBProxyTarget {
		TargetArn?: string;
		Endpoint?: string;
		TrackedClusterId?: string;
		RdsResourceId?: string;
		Port?: number;
		Type?: DBProxyTargetType;

		/**<note> <p>This is prerelease documentation for the RDS Database Proxy feature in preview release. It is subject to change.</p> </note> <p>Information about the connection health of an RDS Proxy target.</p> */
		TargetHealth?: TargetHealth;
	}

	export enum DBProxyTargetType { RDS_INSTANCE = 0, RDS_SERVERLESS_ENDPOINT = 1, TRACKED_CLUSTER = 2 }


	/**<note> <p>This is prerelease documentation for the RDS Database Proxy feature in preview release. It is subject to change.</p> </note> <p>Represents a set of RDS DB instances, Aurora DB clusters, or both that a proxy can connect to. Currently, each target group is associated with exactly one RDS DB instance or Aurora DB cluster.</p> <p>This data type is used as a response element in the <code>DescribeDBProxyTargetGroups</code> action.</p> */
	export interface DBProxyTargetGroup {
		DBProxyName?: string;
		TargetGroupName?: string;
		TargetGroupArn?: string;
		IsDefault?: boolean;
		Status?: string;

		/**<note> <p>This is prerelease documentation for the RDS Database Proxy feature in preview release. It is subject to change.</p> </note> <p>Displays the settings that control the size and behavior of the connection pool associated with a <code>DBProxyTarget</code>.</p> */
		ConnectionPoolConfig?: ConnectionPoolConfigurationInfo;
		CreatedDate?: Date;
		UpdatedDate?: Date;
	}


	/**<p>This data type is used as a response element in the following actions:</p> <ul> <li> <p> <code>ModifyDBInstance</code> </p> </li> <li> <p> <code>RebootDBInstance</code> </p> </li> <li> <p> <code>RestoreDBInstanceFromDBSnapshot</code> </p> </li> <li> <p> <code>RestoreDBInstanceToPointInTime</code> </p> </li> </ul> */
	export interface DBSecurityGroupMembership {
		DBSecurityGroupName?: string;
		Status?: string;
	}


	/**<p>Contains the name and values of a manual DB snapshot attribute</p> <p>Manual DB snapshot attributes are used to authorize other AWS accounts to restore a manual DB snapshot. For more information, see the <code>ModifyDBSnapshotAttribute</code> API.</p> */
	export interface DBSnapshotAttribute {
		AttributeName?: string;
		AttributeValues?: Array<String>;
	}


	/**<p>Contains the results of a successful call to the <code>DescribeDBSnapshotAttributes</code> API action.</p> <p>Manual DB snapshot attributes are used to authorize other AWS accounts to copy or restore a manual DB snapshot. For more information, see the <code>ModifyDBSnapshotAttribute</code> API action.</p> */
	export interface DBSnapshotAttributesResult {
		DBSnapshotIdentifier?: string;
		DBSnapshotAttributes?: Array<DBSnapshotAttribute>;
	}

	export interface DeleteCustomAvailabilityZoneMessage {
		CustomAvailabilityZoneId: string;
	}

	export interface DeleteDBClusterEndpointMessage {
		DBClusterEndpointIdentifier: string;
	}


	/**<p/> */
	export interface DeleteDBClusterMessage {
		DBClusterIdentifier: string;
		SkipFinalSnapshot?: boolean;
		FinalDBSnapshotIdentifier?: string;
	}


	/**<p/> */
	export interface DeleteDBClusterParameterGroupMessage {
		DBClusterParameterGroupName: string;
	}


	/**<p/> */
	export interface DeleteDBClusterSnapshotMessage {
		DBClusterSnapshotIdentifier: string;
	}


	/**Parameter input for the <code>DeleteDBInstanceAutomatedBackup</code> operation.  */
	export interface DeleteDBInstanceAutomatedBackupMessage {
		DbiResourceId: string;
	}


	/**<p/> */
	export interface DeleteDBInstanceMessage {
		DBInstanceIdentifier: string;
		SkipFinalSnapshot?: boolean;
		FinalDBSnapshotIdentifier?: string;
		DeleteAutomatedBackups?: boolean;
	}


	/**<p/> */
	export interface DeleteDBParameterGroupMessage {
		DBParameterGroupName: string;
	}

	export interface DeleteDBProxyRequest {
		DBProxyName: string;
	}


	/**<p/> */
	export interface DeleteDBSecurityGroupMessage {
		DBSecurityGroupName: string;
	}


	/**<p/> */
	export interface DeleteDBSnapshotMessage {
		DBSnapshotIdentifier: string;
	}


	/**<p/> */
	export interface DeleteDBSubnetGroupMessage {
		DBSubnetGroupName: string;
	}


	/**<p/> */
	export interface DeleteEventSubscriptionMessage {
		SubscriptionName: string;
	}

	export interface DeleteGlobalClusterMessage {
		GlobalClusterIdentifier: string;
	}

	export interface DeleteInstallationMediaMessage {
		InstallationMediaId: string;
	}


	/**<p/> */
	export interface DeleteOptionGroupMessage {
		OptionGroupName: string;
	}

	export interface DeregisterDBProxyTargetsRequest {
		DBProxyName: string;
		TargetGroupName?: string;
		DBInstanceIdentifiers?: Array<String>;
		DBClusterIdentifiers?: Array<String>;
	}


	/**<p/> */
	export interface DescribeCertificatesMessage {
		CertificateIdentifier?: string;
		Filters?: Array<Filter>;
		MaxRecords?: number;
		Marker?: string;
	}

	export interface DescribeCustomAvailabilityZonesMessage {
		CustomAvailabilityZoneId?: string;
		Filters?: Array<Filter>;
		MaxRecords?: number;
		Marker?: string;
	}


	/**<p/> */
	export interface DescribeDBClusterBacktracksMessage {
		DBClusterIdentifier: string;
		BacktrackIdentifier?: string;
		Filters?: Array<Filter>;
		MaxRecords?: number;
		Marker?: string;
	}

	export interface DescribeDBClusterEndpointsMessage {
		DBClusterIdentifier?: string;
		DBClusterEndpointIdentifier?: string;
		Filters?: Array<Filter>;
		MaxRecords?: number;
		Marker?: string;
	}


	/**<p/> */
	export interface DescribeDBClusterParameterGroupsMessage {
		DBClusterParameterGroupName?: string;
		Filters?: Array<Filter>;
		MaxRecords?: number;
		Marker?: string;
	}


	/**<p/> */
	export interface DescribeDBClusterParametersMessage {
		DBClusterParameterGroupName: string;
		Source?: string;
		Filters?: Array<Filter>;
		MaxRecords?: number;
		Marker?: string;
	}


	/**<p/> */
	export interface DescribeDBClusterSnapshotAttributesMessage {
		DBClusterSnapshotIdentifier: string;
	}


	/**<p/> */
	export interface DescribeDBClusterSnapshotsMessage {
		DBClusterIdentifier?: string;
		DBClusterSnapshotIdentifier?: string;
		SnapshotType?: string;
		Filters?: Array<Filter>;
		MaxRecords?: number;
		Marker?: string;
		IncludeShared?: boolean;
		IncludePublic?: boolean;
	}


	/**<p/> */
	export interface DescribeDBClustersMessage {
		DBClusterIdentifier?: string;
		Filters?: Array<Filter>;
		MaxRecords?: number;
		Marker?: string;
		IncludeShared?: boolean;
	}

	export interface DescribeDBEngineVersionsMessage {
		Engine?: string;
		EngineVersion?: string;
		DBParameterGroupFamily?: string;
		Filters?: Array<Filter>;
		MaxRecords?: number;
		Marker?: string;
		DefaultOnly?: boolean;
		ListSupportedCharacterSets?: boolean;
		ListSupportedTimezones?: boolean;
		IncludeAll?: boolean;
	}


	/**Parameter input for DescribeDBInstanceAutomatedBackups.  */
	export interface DescribeDBInstanceAutomatedBackupsMessage {
		DbiResourceId?: string;
		DBInstanceIdentifier?: string;
		Filters?: Array<Filter>;
		MaxRecords?: number;
		Marker?: string;
	}


	/**<p/> */
	export interface DescribeDBInstancesMessage {
		DBInstanceIdentifier?: string;
		Filters?: Array<Filter>;
		MaxRecords?: number;
		Marker?: string;
	}


	/**This data type is used as a response element to <code>DescribeDBLogFiles</code>. */
	export interface DescribeDBLogFilesDetails {
		LogFileName?: string;
		LastWritten?: number;
		Size?: number;
	}


	/**<p/> */
	export interface DescribeDBLogFilesMessage {
		DBInstanceIdentifier: string;
		FilenameContains?: string;
		FileLastWritten?: number;
		FileSize?: number;
		Filters?: Array<Filter>;
		MaxRecords?: number;
		Marker?: string;
	}


	/**<p/> */
	export interface DescribeDBParameterGroupsMessage {
		DBParameterGroupName?: string;
		Filters?: Array<Filter>;
		MaxRecords?: number;
		Marker?: string;
	}

	export interface DescribeDBParametersMessage {
		DBParameterGroupName: string;
		Source?: string;
		Filters?: Array<Filter>;
		MaxRecords?: number;
		Marker?: string;
	}

	export interface DescribeDBProxiesRequest {
		DBProxyName?: string;
		Filters?: Array<Filter>;
		Marker?: string;
		MaxRecords?: number;
	}

	export interface DescribeDBProxyTargetGroupsRequest {
		DBProxyName: string;
		TargetGroupName?: string;
		Filters?: Array<Filter>;
		Marker?: string;
		MaxRecords?: number;
	}

	export interface DescribeDBProxyTargetsRequest {
		DBProxyName: string;
		TargetGroupName?: string;
		Filters?: Array<Filter>;
		Marker?: string;
		MaxRecords?: number;
	}


	/**<p/> */
	export interface DescribeDBSecurityGroupsMessage {
		DBSecurityGroupName?: string;
		Filters?: Array<Filter>;
		MaxRecords?: number;
		Marker?: string;
	}


	/**<p/> */
	export interface DescribeDBSnapshotAttributesMessage {
		DBSnapshotIdentifier: string;
	}


	/**<p/> */
	export interface DescribeDBSnapshotsMessage {
		DBInstanceIdentifier?: string;
		DBSnapshotIdentifier?: string;
		SnapshotType?: string;
		Filters?: Array<Filter>;
		MaxRecords?: number;
		Marker?: string;
		IncludeShared?: boolean;
		IncludePublic?: boolean;
		DbiResourceId?: string;
	}


	/**<p/> */
	export interface DescribeDBSubnetGroupsMessage {
		DBSubnetGroupName?: string;
		Filters?: Array<Filter>;
		MaxRecords?: number;
		Marker?: string;
	}


	/**<p/> */
	export interface DescribeEngineDefaultClusterParametersMessage {
		DBParameterGroupFamily: string;
		Filters?: Array<Filter>;
		MaxRecords?: number;
		Marker?: string;
	}


	/** Contains the result of a successful invocation of the <code>DescribeEngineDefaultParameters</code> action.  */
	export interface EngineDefaults {
		DBParameterGroupFamily?: string;
		Marker?: string;
		Parameters?: Array<Parameter>;
	}


	/**<p/> */
	export interface DescribeEngineDefaultParametersMessage {
		DBParameterGroupFamily: string;
		Filters?: Array<Filter>;
		MaxRecords?: number;
		Marker?: string;
	}


	/**<p/> */
	export interface DescribeEventCategoriesMessage {
		SourceType?: string;
		Filters?: Array<Filter>;
	}


	/**<p/> */
	export interface DescribeEventSubscriptionsMessage {
		SubscriptionName?: string;
		Filters?: Array<Filter>;
		MaxRecords?: number;
		Marker?: string;
	}

	export enum SourceType { db-instance = 0, db-parameter-group = 1, db-security-group = 2, db-snapshot = 3, db-cluster = 4, db-cluster-snapshot = 5 }


	/**<p/> */
	export interface DescribeEventsMessage {
		SourceIdentifier?: string;
		SourceType?: DescribeEventsMessageSourceType;
		StartTime?: Date;
		EndTime?: Date;
		Duration?: number;
		EventCategories?: Array<String>;
		Filters?: Array<Filter>;
		MaxRecords?: number;
		Marker?: string;
	}

	export enum DescribeEventsMessageSourceType { db-instance = 0, db-parameter-group = 1, db-security-group = 2, db-snapshot = 3, db-cluster = 4, db-cluster-snapshot = 5 }

	export interface DescribeExportTasksMessage {
		ExportTaskIdentifier?: string;
		SourceArn?: string;
		Filters?: Array<Filter>;
		Marker?: string;
		MaxRecords?: number;
	}

	export interface DescribeGlobalClustersMessage {
		GlobalClusterIdentifier?: string;
		Filters?: Array<Filter>;
		MaxRecords?: number;
		Marker?: string;
	}

	export interface DescribeInstallationMediaMessage {
		InstallationMediaId?: string;
		Filters?: Array<Filter>;
		MaxRecords?: number;
		Marker?: string;
	}


	/**<p/> */
	export interface DescribeOptionGroupOptionsMessage {
		EngineName: string;
		MajorEngineVersion?: string;
		Filters?: Array<Filter>;
		MaxRecords?: number;
		Marker?: string;
	}


	/**<p/> */
	export interface DescribeOptionGroupsMessage {
		OptionGroupName?: string;
		Filters?: Array<Filter>;
		Marker?: string;
		MaxRecords?: number;
		EngineName?: string;
		MajorEngineVersion?: string;
	}


	/**<p/> */
	export interface DescribeOrderableDBInstanceOptionsMessage {
		Engine: string;
		EngineVersion?: string;
		DBInstanceClass?: string;
		LicenseModel?: string;
		AvailabilityZoneGroup?: string;
		Vpc?: boolean;
		Filters?: Array<Filter>;
		MaxRecords?: number;
		Marker?: string;
	}


	/**<p/> */
	export interface DescribePendingMaintenanceActionsMessage {
		ResourceIdentifier?: string;
		Filters?: Array<Filter>;
		Marker?: string;
		MaxRecords?: number;
	}


	/**<p/> */
	export interface DescribeReservedDBInstancesMessage {
		ReservedDBInstanceId?: string;
		ReservedDBInstancesOfferingId?: string;
		DBInstanceClass?: string;
		Duration?: string;
		ProductDescription?: string;
		OfferingType?: string;
		MultiAZ?: boolean;
		LeaseId?: string;
		Filters?: Array<Filter>;
		MaxRecords?: number;
		Marker?: string;
	}


	/**<p/> */
	export interface DescribeReservedDBInstancesOfferingsMessage {
		ReservedDBInstancesOfferingId?: string;
		DBInstanceClass?: string;
		Duration?: string;
		ProductDescription?: string;
		OfferingType?: string;
		MultiAZ?: boolean;
		Filters?: Array<Filter>;
		MaxRecords?: number;
		Marker?: string;
	}


	/**<p/> */
	export interface DescribeSourceRegionsMessage {
		RegionName?: string;
		MaxRecords?: number;
		Marker?: string;
		Filters?: Array<Filter>;
	}


	/**<p/> */
	export interface DescribeValidDBInstanceModificationsMessage {
		DBInstanceIdentifier: string;
	}


	/**Information about valid modifications that you can make to your DB instance. Contains the result of a successful call to the <code>DescribeValidDBInstanceModifications</code> action. You can use this information when you call <code>ModifyDBInstance</code>.  */
	export interface ValidDBInstanceModificationsMessage {
		Storage?: Array<ValidStorageOptions>;
		ValidProcessorFeatures?: Array<AvailableProcessorFeature>;
	}


	/**An Active Directory Domain membership record associated with the DB instance or cluster. */
	export interface DomainMembership {
		Domain?: string;
		Status?: string;
		FQDN?: string;
		IAMRoleName?: string;
	}


	/**A range of double values. */
	export interface DoubleRange {
		From?: number;
		To?: number;
	}


	/**<p/> */
	export interface DownloadDBLogFilePortionMessage {
		DBInstanceIdentifier: string;
		LogFileName: string;
		Marker?: string;
		NumberOfLines?: number;
	}


	/**<p>This data type is used as a response element in the following actions:</p> <ul> <li> <p> <code>AuthorizeDBSecurityGroupIngress</code> </p> </li> <li> <p> <code>DescribeDBSecurityGroups</code> </p> </li> <li> <p> <code>RevokeDBSecurityGroupIngress</code> </p> </li> </ul> */
	export interface EC2SecurityGroup {
		Status?: string;
		EC2SecurityGroupName?: string;
		EC2SecurityGroupId?: string;
		EC2SecurityGroupOwnerId?: string;
	}


	/** This data type is used as a response element in the <code>DescribeEvents</code> action.  */
	export interface Event {
		SourceIdentifier?: string;
		SourceType?: EventSourceType;
		Message?: string;
		EventCategories?: Array<String>;
		Date?: Date;
		SourceArn?: string;
	}

	export enum EventSourceType { db-instance = 0, db-parameter-group = 1, db-security-group = 2, db-snapshot = 3, db-cluster = 4, db-cluster-snapshot = 5 }


	/**Contains the results of a successful invocation of the <code>DescribeEventCategories</code> action. */
	export interface EventCategoriesMap {
		SourceType?: string;
		EventCategories?: Array<String>;
	}


	/**<p/> */
	export interface FailoverDBClusterMessage {
		DBClusterIdentifier: string;
		TargetDBInstanceIdentifier?: string;
	}


	/** A data structure with information about any primary and secondary clusters associated with an Aurora global database.  */
	export interface GlobalClusterMember {
		DBClusterArn?: string;
		Readers?: Array<String>;
		IsWriter?: boolean;
	}

	export enum IAMAuthMode { DISABLED = 0, REQUIRED = 1 }


	/** This data type is used as a response element in the <code>DescribeDBSecurityGroups</code> action.  */
	export interface IPRange {
		Status?: string;
		CIDRIP?: string;
	}

	export interface ImportInstallationMediaMessage {
		CustomAvailabilityZoneId: string;
		Engine: string;
		EngineVersion: string;
		EngineInstallationMediaPath: string;
		OSInstallationMediaPath: string;
	}


	/**Contains the cause of an installation media failure. Installation media is used for a DB engine that requires an on-premises customer provided license, such as Microsoft SQL Server. */
	export interface InstallationMediaFailureCause {
		Message?: string;
	}


	/**<p/> */
	export interface ListTagsForResourceMessage {
		ResourceName: string;
		Filters?: Array<Filter>;
	}


	/**The minimum DB engine version required for each corresponding allowed value for an option setting. */
	export interface MinimumEngineVersionPerAllowedValue {
		AllowedValue?: string;
		MinimumEngineVersion?: string;
	}

	export interface ModifyCertificatesMessage {
		CertificateIdentifier?: string;
		RemoveCustomerOverride?: boolean;
	}

	export interface ModifyCurrentDBClusterCapacityMessage {
		DBClusterIdentifier: string;
		Capacity?: number;
		SecondsBeforeTimeout?: number;
		TimeoutAction?: string;
	}

	export interface ModifyDBClusterEndpointMessage {
		DBClusterEndpointIdentifier: string;
		EndpointType?: string;
		StaticMembers?: Array<String>;
		ExcludedMembers?: Array<String>;
	}


	/**<p/> */
	export interface ModifyDBClusterMessage {
		DBClusterIdentifier: string;
		NewDBClusterIdentifier?: string;
		ApplyImmediately?: boolean;
		BackupRetentionPeriod?: number;
		DBClusterParameterGroupName?: string;
		VpcSecurityGroupIds?: Array<String>;
		Port?: number;
		MasterUserPassword?: string;
		OptionGroupName?: string;
		PreferredBackupWindow?: string;
		PreferredMaintenanceWindow?: string;
		EnableIAMDatabaseAuthentication?: boolean;
		BacktrackWindow?: number;

		/**<p>The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB instance or DB cluster.</p> <p>The <code>EnableLogTypes</code> and <code>DisableLogTypes</code> arrays determine which logs will be exported (or not exported) to CloudWatch Logs. The values within these arrays depend on the DB engine being used. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs </a> in the <i>Amazon RDS User Guide</i>.</p> */
		CloudwatchLogsExportConfiguration?: CloudwatchLogsExportConfiguration;
		EngineVersion?: string;
		AllowMajorVersionUpgrade?: boolean;
		DBInstanceParameterGroupName?: string;
		Domain?: string;
		DomainIAMRoleName?: string;

		/**<p>Contains the scaling configuration of an Aurora Serverless DB cluster.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html">Using Amazon Aurora Serverless</a> in the <i>Amazon Aurora User Guide</i>.</p> */
		ScalingConfiguration?: ScalingConfiguration;
		DeletionProtection?: boolean;
		EnableHttpEndpoint?: boolean;
		CopyTagsToSnapshot?: boolean;
	}


	/**<p/> */
	export interface ModifyDBClusterParameterGroupMessage {
		DBClusterParameterGroupName: string;
		Parameters: Array<Parameter>;
	}


	/**<p/> */
	export interface ModifyDBClusterSnapshotAttributeMessage {
		DBClusterSnapshotIdentifier: string;
		AttributeName: string;
		ValuesToAdd?: Array<String>;
		ValuesToRemove?: Array<String>;
	}


	/**<p/> */
	export interface ModifyDBInstanceMessage {
		DBInstanceIdentifier: string;
		AllocatedStorage?: number;
		DBInstanceClass?: string;
		DBSubnetGroupName?: string;
		DBSecurityGroups?: Array<String>;
		VpcSecurityGroupIds?: Array<String>;
		ApplyImmediately?: boolean;
		MasterUserPassword?: string;
		DBParameterGroupName?: string;
		BackupRetentionPeriod?: number;
		PreferredBackupWindow?: string;
		PreferredMaintenanceWindow?: string;
		MultiAZ?: boolean;
		EngineVersion?: string;
		AllowMajorVersionUpgrade?: boolean;
		AutoMinorVersionUpgrade?: boolean;
		LicenseModel?: string;
		Iops?: number;
		OptionGroupName?: string;
		NewDBInstanceIdentifier?: string;
		StorageType?: string;
		TdeCredentialArn?: string;
		TdeCredentialPassword?: string;
		CACertificateIdentifier?: string;
		Domain?: string;
		CopyTagsToSnapshot?: boolean;
		MonitoringInterval?: number;
		DBPortNumber?: number;
		PubliclyAccessible?: boolean;
		MonitoringRoleArn?: string;
		DomainIAMRoleName?: string;
		PromotionTier?: number;
		EnableIAMDatabaseAuthentication?: boolean;
		EnablePerformanceInsights?: boolean;
		PerformanceInsightsKMSKeyId?: string;
		PerformanceInsightsRetentionPeriod?: number;

		/**<p>The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB instance or DB cluster.</p> <p>The <code>EnableLogTypes</code> and <code>DisableLogTypes</code> arrays determine which logs will be exported (or not exported) to CloudWatch Logs. The values within these arrays depend on the DB engine being used. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs </a> in the <i>Amazon RDS User Guide</i>.</p> */
		CloudwatchLogsExportConfiguration?: CloudwatchLogsExportConfiguration;
		ProcessorFeatures?: Array<ProcessorFeature>;
		UseDefaultProcessorFeatures?: boolean;
		DeletionProtection?: boolean;
		MaxAllocatedStorage?: number;
		CertificateRotationRestart?: boolean;
	}


	/**<p/> */
	export interface ModifyDBParameterGroupMessage {
		DBParameterGroupName: string;
		Parameters: Array<Parameter>;
	}

	export interface ModifyDBProxyRequest {
		DBProxyName: string;
		NewDBProxyName?: string;
		Auth?: Array<UserAuthConfig>;
		RequireTLS?: boolean;
		IdleClientTimeout?: number;
		DebugLogging?: boolean;
		RoleArn?: string;
		SecurityGroups?: Array<String>;
	}

	export interface ModifyDBProxyTargetGroupRequest {
		TargetGroupName: string;
		DBProxyName: string;

		/**<note> <p>This is prerelease documentation for the RDS Database Proxy feature in preview release. It is subject to change.</p> </note> <p>Specifies the settings that control the size and behavior of the connection pool associated with a <code>DBProxyTargetGroup</code>.</p> */
		ConnectionPoolConfig?: ConnectionPoolConfiguration;
		NewName?: string;
	}


	/**<p/> */
	export interface ModifyDBSnapshotAttributeMessage {
		DBSnapshotIdentifier: string;
		AttributeName: string;
		ValuesToAdd?: Array<String>;
		ValuesToRemove?: Array<String>;
	}

	export interface ModifyDBSnapshotMessage {
		DBSnapshotIdentifier: string;
		EngineVersion?: string;
		OptionGroupName?: string;
	}


	/**<p/> */
	export interface ModifyDBSubnetGroupMessage {
		DBSubnetGroupName: string;
		DBSubnetGroupDescription?: string;
		SubnetIds: Array<String>;
	}


	/**<p/> */
	export interface ModifyEventSubscriptionMessage {
		SubscriptionName: string;
		SnsTopicArn?: string;
		SourceType?: string;
		EventCategories?: Array<String>;
		Enabled?: boolean;
	}

	export interface ModifyGlobalClusterMessage {
		GlobalClusterIdentifier?: string;
		NewGlobalClusterIdentifier?: string;
		DeletionProtection?: boolean;
	}


	/**<p/> */
	export interface ModifyOptionGroupMessage {
		OptionGroupName: string;
		OptionsToInclude?: Array<OptionConfiguration>;
		OptionsToRemove?: Array<String>;
		ApplyImmediately?: boolean;
	}


	/**Option details. */
	export interface Option {
		OptionName?: string;
		OptionDescription?: string;
		Persistent?: boolean;
		Permanent?: boolean;
		Port?: number;
		OptionVersion?: string;
		OptionSettings?: Array<OptionSetting>;
		DBSecurityGroupMemberships?: Array<DBSecurityGroupMembership>;
		VpcSecurityGroupMemberships?: Array<VpcSecurityGroupMembership>;
	}


	/**Provides information on the option groups the DB instance is a member of. */
	export interface OptionGroupMembership {
		OptionGroupName?: string;
		Status?: string;
	}


	/**Available option. */
	export interface OptionGroupOption {
		Name?: string;
		Description?: string;
		EngineName?: string;
		MajorEngineVersion?: string;
		MinimumRequiredMinorEngineVersion?: string;
		PortRequired?: boolean;
		DefaultPort?: number;
		OptionsDependedOn?: Array<String>;
		OptionsConflictsWith?: Array<String>;
		Persistent?: boolean;
		Permanent?: boolean;
		RequiresAutoMinorEngineVersionUpgrade?: boolean;
		VpcOnly?: boolean;
		SupportsOptionVersionDowngrade?: boolean;
		OptionGroupOptionSettings?: Array<OptionGroupOptionSetting>;
		OptionGroupOptionVersions?: Array<OptionVersion>;
	}


	/**Option group option settings are used to display settings available for each option with their default values and other information. These values are used with the DescribeOptionGroupOptions action. */
	export interface OptionGroupOptionSetting {
		SettingName?: string;
		SettingDescription?: string;
		DefaultValue?: string;
		ApplyType?: string;
		AllowedValues?: string;
		IsModifiable?: boolean;
		IsRequired?: boolean;
		MinimumEngineVersionPerAllowedValue?: Array<MinimumEngineVersionPerAllowedValue>;
	}


	/**The version for an option. Option group option versions are returned by the <code>DescribeOptionGroupOptions</code> action. */
	export interface OptionVersion {
		Version?: string;
		IsDefault?: boolean;
	}


	/**Option settings are the actual settings being applied or configured for that option. It is used when you modify an option group or describe option groups. For example, the NATIVE_NETWORK_ENCRYPTION option has a setting called SQLNET.ENCRYPTION_SERVER that can have several different values. */
	export interface OptionSetting {
		Name?: string;
		Value?: string;
		DefaultValue?: string;
		Description?: string;
		ApplyType?: string;
		DataType?: string;
		AllowedValues?: string;
		IsModifiable?: boolean;
		IsCollection?: boolean;
	}


	/**<p>Contains a list of available options for a DB instance.</p> <p> This data type is used as a response element in the <code>DescribeOrderableDBInstanceOptions</code> action. </p> */
	export interface OrderableDBInstanceOption {
		Engine?: string;
		EngineVersion?: string;
		DBInstanceClass?: string;
		LicenseModel?: string;
		AvailabilityZoneGroup?: string;
		AvailabilityZones?: Array<AvailabilityZone>;
		MultiAZCapable?: boolean;
		ReadReplicaCapable?: boolean;
		Vpc?: boolean;
		SupportsStorageEncryption?: boolean;
		StorageType?: string;
		SupportsIops?: boolean;
		SupportsEnhancedMonitoring?: boolean;
		SupportsIAMDatabaseAuthentication?: boolean;
		SupportsPerformanceInsights?: boolean;
		MinStorageSize?: number;
		MaxStorageSize?: number;
		MinIopsPerDbInstance?: number;
		MaxIopsPerDbInstance?: number;
		MinIopsPerGib?: number;
		MaxIopsPerGib?: number;
		AvailableProcessorFeatures?: Array<AvailableProcessorFeature>;
		SupportedEngineModes?: Array<String>;
		SupportsStorageAutoscaling?: boolean;
		SupportsKerberosAuthentication?: boolean;
	}


	/**A list of the log types whose configuration is still pending. In other words, these log types are in the process of being activated or deactivated. */
	export interface PendingCloudwatchLogsExports {
		LogTypesToEnable?: Array<String>;
		LogTypesToDisable?: Array<String>;
	}


	/**Provides information about a pending maintenance action for a resource. */
	export interface PendingMaintenanceAction {
		Action?: string;
		AutoAppliedAfterDate?: Date;
		ForcedApplyDate?: Date;
		OptInStatus?: string;
		CurrentApplyDate?: Date;
		Description?: string;
	}


	/**<p/> */
	export interface PromoteReadReplicaDBClusterMessage {
		DBClusterIdentifier: string;
	}


	/**<p/> */
	export interface PromoteReadReplicaMessage {
		DBInstanceIdentifier: string;
		BackupRetentionPeriod?: number;
		PreferredBackupWindow?: string;
	}


	/**<p/> */
	export interface PurchaseReservedDBInstancesOfferingMessage {
		ReservedDBInstancesOfferingId: string;
		ReservedDBInstanceId?: string;
		DBInstanceCount?: number;

		/**A list of tags. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i> */
		Tags?: Array<Tag>;
	}


	/** This data type is used as a response element in the <code>DescribeReservedDBInstances</code> and <code>PurchaseReservedDBInstancesOffering</code> actions.  */
	export interface ReservedDBInstance {
		ReservedDBInstanceId?: string;
		ReservedDBInstancesOfferingId?: string;
		DBInstanceClass?: string;
		StartTime?: Date;
		Duration?: number;
		FixedPrice?: number;
		UsagePrice?: number;
		CurrencyCode?: string;
		DBInstanceCount?: number;
		ProductDescription?: string;
		OfferingType?: string;
		MultiAZ?: boolean;
		State?: string;
		RecurringCharges?: Array<RecurringCharge>;
		ReservedDBInstanceArn?: string;
		LeaseId?: string;
	}


	/**A range of integer values. */
	export interface Range {
		From?: number;
		To?: number;
		Step?: number;
	}


	/**<p/> */
	export interface RebootDBInstanceMessage {
		DBInstanceIdentifier: string;
		ForceFailover?: boolean;
	}


	/** This data type is used as a response element in the <code>DescribeReservedDBInstances</code> and <code>DescribeReservedDBInstancesOfferings</code> actions.  */
	export interface RecurringCharge {
		RecurringChargeAmount?: number;
		RecurringChargeFrequency?: string;
	}

	export interface RegisterDBProxyTargetsRequest {
		DBProxyName: string;
		TargetGroupName?: string;
		DBInstanceIdentifiers?: Array<String>;
		DBClusterIdentifiers?: Array<String>;
	}

	export interface RemoveFromGlobalClusterMessage {
		GlobalClusterIdentifier?: string;
		DbClusterIdentifier?: string;
	}

	export interface RemoveRoleFromDBClusterMessage {
		DBClusterIdentifier: string;
		RoleArn: string;
		FeatureName?: string;
	}

	export interface RemoveRoleFromDBInstanceMessage {
		DBInstanceIdentifier: string;
		RoleArn: string;
		FeatureName: string;
	}


	/**<p/> */
	export interface RemoveSourceIdentifierFromSubscriptionMessage {
		SubscriptionName: string;
		SourceIdentifier: string;
	}


	/**<p/> */
	export interface RemoveTagsFromResourceMessage {
		ResourceName: string;
		TagKeys: Array<String>;
	}


	/** This data type is used as a response element in the <code>DescribeReservedDBInstancesOfferings</code> action.  */
	export interface ReservedDBInstancesOffering {
		ReservedDBInstancesOfferingId?: string;
		DBInstanceClass?: string;
		Duration?: number;
		FixedPrice?: number;
		UsagePrice?: number;
		CurrencyCode?: string;
		ProductDescription?: string;
		OfferingType?: string;
		MultiAZ?: boolean;
		RecurringCharges?: Array<RecurringCharge>;
	}


	/**<p/> */
	export interface ResetDBClusterParameterGroupMessage {
		DBClusterParameterGroupName: string;
		ResetAllParameters?: boolean;
		Parameters?: Array<Parameter>;
	}


	/**<p/> */
	export interface ResetDBParameterGroupMessage {
		DBParameterGroupName: string;
		ResetAllParameters?: boolean;
		Parameters?: Array<Parameter>;
	}

	export interface RestoreDBClusterFromS3Message {
		AvailabilityZones?: Array<String>;
		BackupRetentionPeriod?: number;
		CharacterSetName?: string;
		DatabaseName?: string;
		DBClusterIdentifier: string;
		DBClusterParameterGroupName?: string;
		VpcSecurityGroupIds?: Array<String>;
		DBSubnetGroupName?: string;
		Engine: string;
		EngineVersion?: string;
		Port?: number;
		MasterUsername: string;
		MasterUserPassword: string;
		OptionGroupName?: string;
		PreferredBackupWindow?: string;
		PreferredMaintenanceWindow?: string;

		/**A list of tags. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i> */
		Tags?: Array<Tag>;
		StorageEncrypted?: boolean;
		KmsKeyId?: string;
		EnableIAMDatabaseAuthentication?: boolean;
		SourceEngine: string;
		SourceEngineVersion: string;
		S3BucketName: string;
		S3Prefix?: string;
		S3IngestionRoleArn: string;
		BacktrackWindow?: number;
		EnableCloudwatchLogsExports?: Array<String>;
		DeletionProtection?: boolean;
		CopyTagsToSnapshot?: boolean;
		Domain?: string;
		DomainIAMRoleName?: string;
	}


	/**<p/> */
	export interface RestoreDBClusterFromSnapshotMessage {
		AvailabilityZones?: Array<String>;
		DBClusterIdentifier: string;
		SnapshotIdentifier: string;
		Engine: string;
		EngineVersion?: string;
		Port?: number;
		DBSubnetGroupName?: string;
		DatabaseName?: string;
		OptionGroupName?: string;
		VpcSecurityGroupIds?: Array<String>;

		/**A list of tags. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i> */
		Tags?: Array<Tag>;
		KmsKeyId?: string;
		EnableIAMDatabaseAuthentication?: boolean;
		BacktrackWindow?: number;
		EnableCloudwatchLogsExports?: Array<String>;
		EngineMode?: string;

		/**<p>Contains the scaling configuration of an Aurora Serverless DB cluster.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html">Using Amazon Aurora Serverless</a> in the <i>Amazon Aurora User Guide</i>.</p> */
		ScalingConfiguration?: ScalingConfiguration;
		DBClusterParameterGroupName?: string;
		DeletionProtection?: boolean;
		CopyTagsToSnapshot?: boolean;
		Domain?: string;
		DomainIAMRoleName?: string;
	}


	/**<p/> */
	export interface RestoreDBClusterToPointInTimeMessage {
		DBClusterIdentifier: string;
		RestoreType?: string;
		SourceDBClusterIdentifier: string;
		RestoreToTime?: Date;
		UseLatestRestorableTime?: boolean;
		Port?: number;
		DBSubnetGroupName?: string;
		OptionGroupName?: string;
		VpcSecurityGroupIds?: Array<String>;

		/**A list of tags. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i> */
		Tags?: Array<Tag>;
		KmsKeyId?: string;
		EnableIAMDatabaseAuthentication?: boolean;
		BacktrackWindow?: number;
		EnableCloudwatchLogsExports?: Array<String>;
		DBClusterParameterGroupName?: string;
		DeletionProtection?: boolean;
		CopyTagsToSnapshot?: boolean;
		Domain?: string;
		DomainIAMRoleName?: string;
	}


	/**<p/> */
	export interface RestoreDBInstanceFromDBSnapshotMessage {
		DBInstanceIdentifier: string;
		DBSnapshotIdentifier: string;
		DBInstanceClass?: string;
		Port?: number;
		AvailabilityZone?: string;
		DBSubnetGroupName?: string;
		MultiAZ?: boolean;
		PubliclyAccessible?: boolean;
		AutoMinorVersionUpgrade?: boolean;
		LicenseModel?: string;
		DBName?: string;
		Engine?: string;
		Iops?: number;
		OptionGroupName?: string;

		/**A list of tags. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i> */
		Tags?: Array<Tag>;
		StorageType?: string;
		TdeCredentialArn?: string;
		TdeCredentialPassword?: string;
		VpcSecurityGroupIds?: Array<String>;
		Domain?: string;
		CopyTagsToSnapshot?: boolean;
		DomainIAMRoleName?: string;
		EnableIAMDatabaseAuthentication?: boolean;
		EnableCloudwatchLogsExports?: Array<String>;
		ProcessorFeatures?: Array<ProcessorFeature>;
		UseDefaultProcessorFeatures?: boolean;
		DBParameterGroupName?: string;
		DeletionProtection?: boolean;
	}

	export interface RestoreDBInstanceFromS3Message {
		DBName?: string;
		DBInstanceIdentifier: string;
		AllocatedStorage?: number;
		DBInstanceClass: string;
		Engine: string;
		MasterUsername?: string;
		MasterUserPassword?: string;
		DBSecurityGroups?: Array<String>;
		VpcSecurityGroupIds?: Array<String>;
		AvailabilityZone?: string;
		DBSubnetGroupName?: string;
		PreferredMaintenanceWindow?: string;
		DBParameterGroupName?: string;
		BackupRetentionPeriod?: number;
		PreferredBackupWindow?: string;
		Port?: number;
		MultiAZ?: boolean;
		EngineVersion?: string;
		AutoMinorVersionUpgrade?: boolean;
		LicenseModel?: string;
		Iops?: number;
		OptionGroupName?: string;
		PubliclyAccessible?: boolean;

		/**A list of tags. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i> */
		Tags?: Array<Tag>;
		StorageType?: string;
		StorageEncrypted?: boolean;
		KmsKeyId?: string;
		CopyTagsToSnapshot?: boolean;
		MonitoringInterval?: number;
		MonitoringRoleArn?: string;
		EnableIAMDatabaseAuthentication?: boolean;
		SourceEngine: string;
		SourceEngineVersion: string;
		S3BucketName: string;
		S3Prefix?: string;
		S3IngestionRoleArn: string;
		EnablePerformanceInsights?: boolean;
		PerformanceInsightsKMSKeyId?: string;
		PerformanceInsightsRetentionPeriod?: number;
		EnableCloudwatchLogsExports?: Array<String>;
		ProcessorFeatures?: Array<ProcessorFeature>;
		UseDefaultProcessorFeatures?: boolean;
		DeletionProtection?: boolean;
	}


	/**<p/> */
	export interface RestoreDBInstanceToPointInTimeMessage {
		SourceDBInstanceIdentifier?: string;
		TargetDBInstanceIdentifier: string;
		RestoreTime?: Date;
		UseLatestRestorableTime?: boolean;
		DBInstanceClass?: string;
		Port?: number;
		AvailabilityZone?: string;
		DBSubnetGroupName?: string;
		MultiAZ?: boolean;
		PubliclyAccessible?: boolean;
		AutoMinorVersionUpgrade?: boolean;
		LicenseModel?: string;
		DBName?: string;
		Engine?: string;
		Iops?: number;
		OptionGroupName?: string;
		CopyTagsToSnapshot?: boolean;

		/**A list of tags. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i> */
		Tags?: Array<Tag>;
		StorageType?: string;
		TdeCredentialArn?: string;
		TdeCredentialPassword?: string;
		VpcSecurityGroupIds?: Array<String>;
		Domain?: string;
		DomainIAMRoleName?: string;
		EnableIAMDatabaseAuthentication?: boolean;
		EnableCloudwatchLogsExports?: Array<String>;
		ProcessorFeatures?: Array<ProcessorFeature>;
		UseDefaultProcessorFeatures?: boolean;
		DBParameterGroupName?: string;
		DeletionProtection?: boolean;
		SourceDbiResourceId?: string;
	}


	/**<p/> */
	export interface RevokeDBSecurityGroupIngressMessage {
		DBSecurityGroupName: string;
		CIDRIP?: string;
		EC2SecurityGroupName?: string;
		EC2SecurityGroupId?: string;
		EC2SecurityGroupOwnerId?: string;
	}


	/**Contains an AWS Region name as the result of a successful call to the <code>DescribeSourceRegions</code> action. */
	export interface SourceRegion {
		RegionName?: string;
		Endpoint?: string;
		Status?: string;
	}

	export interface StartActivityStreamRequest {
		ResourceArn: string;
		Mode: StartActivityStreamRequestMode;
		KmsKeyId: string;
		ApplyImmediately?: boolean;
	}

	export enum StartActivityStreamRequestMode { sync = 0, async = 1 }

	export interface StartDBClusterMessage {
		DBClusterIdentifier: string;
	}

	export interface StartDBInstanceMessage {
		DBInstanceIdentifier: string;
	}

	export interface StartExportTaskMessage {
		ExportTaskIdentifier: string;
		SourceArn: string;
		S3BucketName: string;
		IamRoleArn: string;
		KmsKeyId: string;
		S3Prefix?: string;
		ExportOnly?: Array<String>;
	}

	export interface StopActivityStreamRequest {
		ResourceArn: string;
		ApplyImmediately?: boolean;
	}

	export interface StopDBClusterMessage {
		DBClusterIdentifier: string;
	}

	export interface StopDBInstanceMessage {
		DBInstanceIdentifier: string;
		DBSnapshotIdentifier?: string;
	}


	/** This data type is used as a response element in the <code>DescribeDBSubnetGroups</code> action.  */
	export interface Subnet {
		SubnetIdentifier?: string;

		/**<p>Contains Availability Zone information.</p> <p> This data type is used as an element in the <code>OrderableDBInstanceOption</code> data type.</p> */
		SubnetAvailabilityZone?: AvailabilityZone;
		SubnetStatus?: string;
	}


	/**A time zone associated with a <code>DBInstance</code> or a <code>DBSnapshot</code>. This data type is an element in the response to the <code>DescribeDBInstances</code>, the <code>DescribeDBSnapshots</code>, and the <code>DescribeDBEngineVersions</code> actions.  */
	export interface Timezone {
		TimezoneName?: string;
	}

	export enum TargetState { REGISTERING = 0, AVAILABLE = 1, UNAVAILABLE = 2 }

	export enum TargetHealthReason { UNREACHABLE = 0, CONNECTION_FAILED = 1, AUTH_FAILURE = 2, PENDING_PROXY_CAPACITY = 3 }


	/**The version of the database engine that a DB instance can be upgraded to. */
	export interface UpgradeTarget {
		Engine?: string;
		EngineVersion?: string;
		Description?: string;
		AutoUpgrade?: boolean;
		IsMajorVersionUpgrade?: boolean;
	}


	/**<note> <p>This is prerelease documentation for the RDS Database Proxy feature in preview release. It is subject to change.</p> </note> <p>Returns the details of authentication used by a proxy to log in as a specific database user.</p> */
	export interface UserAuthConfigInfo {
		Description?: string;
		UserName?: string;
		AuthScheme?: UserAuthConfigInfoAuthScheme;
		SecretArn?: string;
		IAMAuth?: UserAuthConfigInfoIAMAuth;
	}

	export enum UserAuthConfigInfoAuthScheme { SECRETS = 0 }

	export enum UserAuthConfigInfoIAMAuth { DISABLED = 0, REQUIRED = 1 }


	/**Information about valid modifications that you can make to your DB instance. Contains the result of a successful call to the <code>DescribeValidDBInstanceModifications</code> action.  */
	export interface ValidStorageOptions {
		StorageType?: string;
		StorageSize?: Array<Range>;
		ProvisionedIops?: Array<Range>;
		IopsToStorageRatio?: Array<DoubleRange>;
		SupportsStorageAutoscaling?: boolean;
	}


	/**This data type is used as a response element for queries on VPC security group membership. */
	export interface VpcSecurityGroupMembership {
		VpcSecurityGroupId?: string;
		Status?: string;
	}

	@Injectable()
	export class DemoClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Associates an Identity and Access Management (IAM) role from an Amazon Aurora DB cluster. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Integrating.Authorizing.html">Authorizing Amazon Aurora MySQL to Access Other AWS Services on Your Behalf</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
		 * Get /#Action=AddRoleToDBCluster
		 * @param {string} DBClusterIdentifier The name of the DB cluster to associate the IAM role with.
		 * @param {string} RoleArn The Amazon Resource Name (ARN) of the IAM role to associate with the Aurora DB cluster, for example <code>arn:aws:iam::123456789012:role/AuroraAccessRole</code>.
		 * @param {string} FeatureName The name of the feature for the DB cluster that the IAM role is to be associated with. For the list of supported feature names, see <a>DBEngineVersion</a>.
		 * @return {void} Success
		 */
		GET_AddRoleToDBCluster(DBClusterIdentifier: string, RoleArn: string, FeatureName: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=AddRoleToDBCluster?DBClusterIdentifier=' + (DBClusterIdentifier == null ? '' : encodeURIComponent(DBClusterIdentifier)) + '&RoleArn=' + (RoleArn == null ? '' : encodeURIComponent(RoleArn)) + '&FeatureName=' + (FeatureName == null ? '' : encodeURIComponent(FeatureName)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Associates an AWS Identity and Access Management (IAM) role with a DB instance.</p> <note> <p>To add a role to a DB instance, the status of the DB instance must be <code>available</code>.</p> </note>
		 * Get /#Action=AddRoleToDBInstance
		 * @param {string} DBInstanceIdentifier The name of the DB instance to associate the IAM role with.
		 * @param {string} RoleArn The Amazon Resource Name (ARN) of the IAM role to associate with the DB instance, for example <code>arn:aws:iam::123456789012:role/AccessRole</code>. 
		 * @param {string} FeatureName The name of the feature for the DB instance that the IAM role is to be associated with. For the list of supported feature names, see <a>DBEngineVersion</a>. 
		 * @return {void} Success
		 */
		GET_AddRoleToDBInstance(DBInstanceIdentifier: string, RoleArn: string, FeatureName: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=AddRoleToDBInstance?DBInstanceIdentifier=' + (DBInstanceIdentifier == null ? '' : encodeURIComponent(DBInstanceIdentifier)) + '&RoleArn=' + (RoleArn == null ? '' : encodeURIComponent(RoleArn)) + '&FeatureName=' + (FeatureName == null ? '' : encodeURIComponent(FeatureName)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds a source identifier to an existing RDS event notification subscription.
		 * Get /#Action=AddSourceIdentifierToSubscription
		 * @param {string} SubscriptionName The name of the RDS event notification subscription you want to add a source identifier to.
		 * @param {string} SourceIdentifier <p>The identifier of the event source to be added.</p> <p>Constraints:</p> <ul> <li> <p>If the source type is a DB instance, then a <code>DBInstanceIdentifier</code> must be supplied.</p> </li> <li> <p>If the source type is a DB security group, a <code>DBSecurityGroupName</code> must be supplied.</p> </li> <li> <p>If the source type is a DB parameter group, a <code>DBParameterGroupName</code> must be supplied.</p> </li> <li> <p>If the source type is a DB snapshot, a <code>DBSnapshotIdentifier</code> must be supplied.</p> </li> </ul>
		 * @return {void} Success
		 */
		GET_AddSourceIdentifierToSubscription(SubscriptionName: string, SourceIdentifier: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=AddSourceIdentifierToSubscription?SubscriptionName=' + (SubscriptionName == null ? '' : encodeURIComponent(SubscriptionName)) + '&SourceIdentifier=' + (SourceIdentifier == null ? '' : encodeURIComponent(SourceIdentifier)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Adds metadata tags to an Amazon RDS resource. These tags can also be used with cost allocation reporting to track cost associated with Amazon RDS resources, or used in a Condition statement in an IAM policy for Amazon RDS.</p> <p>For an overview on tagging Amazon RDS resources, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Tagging.html">Tagging Amazon RDS Resources</a>.</p>
		 * Get /#Action=AddTagsToResource
		 * @param {string} ResourceName The Amazon RDS resource that the tags are added to. This value is an Amazon Resource Name (ARN). For information about creating an ARN, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing"> Constructing an RDS Amazon Resource Name (ARN)</a>.
		 * @param {Array<Tag>} Tags The tags to be assigned to the Amazon RDS resource.
		 * @return {void} Success
		 */
		GET_AddTagsToResource(ResourceName: string, Tags: Array<Tag>, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=AddTagsToResource?ResourceName=' + (ResourceName == null ? '' : encodeURIComponent(ResourceName)) + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Applies a pending maintenance action to a resource (for example, to a DB instance).
		 * Get /#Action=ApplyPendingMaintenanceAction
		 * @param {string} ResourceIdentifier The RDS Amazon Resource Name (ARN) of the resource that the pending maintenance action applies to. For information about creating an ARN, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing"> Constructing an RDS Amazon Resource Name (ARN)</a>.
		 * @param {string} ApplyAction <p>The pending maintenance action to apply to this resource.</p> <p>Valid values: <code>system-update</code>, <code>db-upgrade</code>, <code>hardware-maintenance</code>, <code>ca-certificate-rotation</code> </p>
		 * @param {string} OptInType <p>A value that specifies the type of opt-in request, or undoes an opt-in request. An opt-in request of type <code>immediate</code> can't be undone.</p> <p>Valid values:</p> <ul> <li> <p> <code>immediate</code> - Apply the maintenance action immediately.</p> </li> <li> <p> <code>next-maintenance</code> - Apply the maintenance action during the next maintenance window for the resource.</p> </li> <li> <p> <code>undo-opt-in</code> - Cancel any existing <code>next-maintenance</code> opt-in requests.</p> </li> </ul>
		 * @return {void} Success
		 */
		GET_ApplyPendingMaintenanceAction(ResourceIdentifier: string, ApplyAction: string, OptInType: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=ApplyPendingMaintenanceAction?ResourceIdentifier=' + (ResourceIdentifier == null ? '' : encodeURIComponent(ResourceIdentifier)) + '&ApplyAction=' + (ApplyAction == null ? '' : encodeURIComponent(ApplyAction)) + '&OptInType=' + (OptInType == null ? '' : encodeURIComponent(OptInType)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Enables ingress to a DBSecurityGroup using one of two forms of authorization. First, EC2 or VPC security groups can be added to the DBSecurityGroup if the application using the database is running on EC2 or VPC instances. Second, IP ranges are available if the application accessing your database is running on the Internet. Required parameters for this API are one of CIDR range, EC2SecurityGroupId for VPC, or (EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId for non-VPC).</p> <note> <p>You can't authorize ingress from an EC2 security group in one AWS Region to an Amazon RDS DB instance in another. You can't authorize ingress from a VPC security group in one VPC to an Amazon RDS DB instance in another.</p> </note> <p>For an overview of CIDR ranges, go to the <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Wikipedia Tutorial</a>. </p>
		 * Get /#Action=AuthorizeDBSecurityGroupIngress
		 * @param {string} DBSecurityGroupName The name of the DB security group to add authorization to.
		 * @param {string} CIDRIP The IP range to authorize.
		 * @param {string} EC2SecurityGroupName  Name of the EC2 security group to authorize. For VPC DB security groups, <code>EC2SecurityGroupId</code> must be provided. Otherwise, <code>EC2SecurityGroupOwnerId</code> and either <code>EC2SecurityGroupName</code> or <code>EC2SecurityGroupId</code> must be provided. 
		 * @param {string} EC2SecurityGroupId  Id of the EC2 security group to authorize. For VPC DB security groups, <code>EC2SecurityGroupId</code> must be provided. Otherwise, <code>EC2SecurityGroupOwnerId</code> and either <code>EC2SecurityGroupName</code> or <code>EC2SecurityGroupId</code> must be provided. 
		 * @param {string} EC2SecurityGroupOwnerId  AWS account number of the owner of the EC2 security group specified in the <code>EC2SecurityGroupName</code> parameter. The AWS access key ID isn't an acceptable value. For VPC DB security groups, <code>EC2SecurityGroupId</code> must be provided. Otherwise, <code>EC2SecurityGroupOwnerId</code> and either <code>EC2SecurityGroupName</code> or <code>EC2SecurityGroupId</code> must be provided. 
		 * @return {void} Success
		 */
		GET_AuthorizeDBSecurityGroupIngress(DBSecurityGroupName: string, CIDRIP: string, EC2SecurityGroupName: string, EC2SecurityGroupId: string, EC2SecurityGroupOwnerId: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=AuthorizeDBSecurityGroupIngress?DBSecurityGroupName=' + (DBSecurityGroupName == null ? '' : encodeURIComponent(DBSecurityGroupName)) + '&CIDRIP=' + (CIDRIP == null ? '' : encodeURIComponent(CIDRIP)) + '&EC2SecurityGroupName=' + (EC2SecurityGroupName == null ? '' : encodeURIComponent(EC2SecurityGroupName)) + '&EC2SecurityGroupId=' + (EC2SecurityGroupId == null ? '' : encodeURIComponent(EC2SecurityGroupId)) + '&EC2SecurityGroupOwnerId=' + (EC2SecurityGroupOwnerId == null ? '' : encodeURIComponent(EC2SecurityGroupOwnerId)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Backtracks a DB cluster to a specific time, without creating a new DB cluster.</p> <p>For more information on backtracking, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Managing.Backtrack.html"> Backtracking an Aurora DB Cluster</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
		 * Get /#Action=BacktrackDBCluster
		 * @param {string} DBClusterIdentifier <p>The DB cluster identifier of the DB cluster to be backtracked. This parameter is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 alphanumeric characters or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Can't end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>my-cluster1</code> </p>
		 * @param {Date} BacktrackTo <p>The timestamp of the time to backtrack the DB cluster to, specified in ISO 8601 format. For more information about ISO 8601, see the <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO8601 Wikipedia page.</a> </p> <note> <p>If the specified time isn't a consistent time for the DB cluster, Aurora automatically chooses the nearest possible consistent time for the DB cluster.</p> </note> <p>Constraints:</p> <ul> <li> <p>Must contain a valid ISO 8601 timestamp.</p> </li> <li> <p>Can't contain a timestamp set in the future.</p> </li> </ul> <p>Example: <code>2017-07-08T18:00Z</code> </p>
		 * @param {boolean} Force A value that indicates whether to force the DB cluster to backtrack when binary logging is enabled. Otherwise, an error occurs when binary logging is enabled.
		 * @param {boolean} UseEarliestTimeOnPointInTimeUnavailable A value that indicates whether to backtrack the DB cluster to the earliest possible backtrack time when <i>BacktrackTo</i> is set to a timestamp earlier than the earliest backtrack time. When this parameter is disabled and <i>BacktrackTo</i> is set to a timestamp earlier than the earliest backtrack time, an error occurs.
		 * @return {void} Success
		 */
		GET_BacktrackDBCluster(DBClusterIdentifier: string, BacktrackTo: Date, Force: boolean, UseEarliestTimeOnPointInTimeUnavailable: boolean, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=BacktrackDBCluster?DBClusterIdentifier=' + (DBClusterIdentifier == null ? '' : encodeURIComponent(DBClusterIdentifier)) + '&BacktrackTo=' + BacktrackTo.toISOString() + '&Force=' + Force + '&UseEarliestTimeOnPointInTimeUnavailable=' + UseEarliestTimeOnPointInTimeUnavailable + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Cancels an export task in progress that is exporting a snapshot to Amazon S3. Any data that has already been written to the S3 bucket isn't removed.
		 * Get /#Action=CancelExportTask
		 * @param {string} ExportTaskIdentifier The identifier of the snapshot export task to cancel.
		 * @return {void} Success
		 */
		GET_CancelExportTask(ExportTaskIdentifier: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=CancelExportTask?ExportTaskIdentifier=' + (ExportTaskIdentifier == null ? '' : encodeURIComponent(ExportTaskIdentifier)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Copies the specified DB cluster parameter group.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
		 * Get /#Action=CopyDBClusterParameterGroup
		 * @param {string} SourceDBClusterParameterGroupIdentifier <p>The identifier or Amazon Resource Name (ARN) for the source DB cluster parameter group. For information about creating an ARN, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing"> Constructing an ARN for Amazon RDS</a> in the <i>Amazon Aurora User Guide</i>. </p> <p>Constraints:</p> <ul> <li> <p>Must specify a valid DB cluster parameter group.</p> </li> <li> <p>If the source DB cluster parameter group is in the same AWS Region as the copy, specify a valid DB parameter group identifier, for example <code>my-db-cluster-param-group</code>, or a valid ARN.</p> </li> <li> <p>If the source DB parameter group is in a different AWS Region than the copy, specify a valid DB cluster parameter group ARN, for example <code>arn:aws:rds:us-east-1:123456789012:cluster-pg:custom-cluster-group1</code>.</p> </li> </ul>
		 * @param {string} TargetDBClusterParameterGroupIdentifier <p>The identifier for the copied DB cluster parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Can't be null, empty, or blank</p> </li> <li> <p>Must contain from 1 to 255 letters, numbers, or hyphens</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Can't end with a hyphen or contain two consecutive hyphens</p> </li> </ul> <p>Example: <code>my-cluster-param-group1</code> </p>
		 * @param {string} TargetDBClusterParameterGroupDescription A description for the copied DB cluster parameter group.
		 * @return {void} Success
		 */
		GET_CopyDBClusterParameterGroup(SourceDBClusterParameterGroupIdentifier: string, TargetDBClusterParameterGroupIdentifier: string, TargetDBClusterParameterGroupDescription: string, Tags: Array<Tag>, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=CopyDBClusterParameterGroup?SourceDBClusterParameterGroupIdentifier=' + (SourceDBClusterParameterGroupIdentifier == null ? '' : encodeURIComponent(SourceDBClusterParameterGroupIdentifier)) + '&TargetDBClusterParameterGroupIdentifier=' + (TargetDBClusterParameterGroupIdentifier == null ? '' : encodeURIComponent(TargetDBClusterParameterGroupIdentifier)) + '&TargetDBClusterParameterGroupDescription=' + (TargetDBClusterParameterGroupDescription == null ? '' : encodeURIComponent(TargetDBClusterParameterGroupDescription)) + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Copies a snapshot of a DB cluster.</p> <p>To copy a DB cluster snapshot from a shared manual DB cluster snapshot, <code>SourceDBClusterSnapshotIdentifier</code> must be the Amazon Resource Name (ARN) of the shared DB cluster snapshot.</p> <p>You can copy an encrypted DB cluster snapshot from another AWS Region. In that case, the AWS Region where you call the <code>CopyDBClusterSnapshot</code> action is the destination AWS Region for the encrypted DB cluster snapshot to be copied to. To copy an encrypted DB cluster snapshot from another AWS Region, you must provide the following values:</p> <ul> <li> <p> <code>KmsKeyId</code> - The AWS Key Management System (AWS KMS) key identifier for the key to use to encrypt the copy of the DB cluster snapshot in the destination AWS Region.</p> </li> <li> <p> <code>PreSignedUrl</code> - A URL that contains a Signature Version 4 signed request for the <code>CopyDBClusterSnapshot</code> action to be called in the source AWS Region where the DB cluster snapshot is copied from. The pre-signed URL must be a valid request for the <code>CopyDBClusterSnapshot</code> API action that can be executed in the source AWS Region that contains the encrypted DB cluster snapshot to be copied.</p> <p>The pre-signed URL request must contain the following parameter values:</p> <ul> <li> <p> <code>KmsKeyId</code> - The KMS key identifier for the key to use to encrypt the copy of the DB cluster snapshot in the destination AWS Region. This is the same identifier for both the <code>CopyDBClusterSnapshot</code> action that is called in the destination AWS Region, and the action contained in the pre-signed URL.</p> </li> <li> <p> <code>DestinationRegion</code> - The name of the AWS Region that the DB cluster snapshot is to be created in.</p> </li> <li> <p> <code>SourceDBClusterSnapshotIdentifier</code> - The DB cluster snapshot identifier for the encrypted DB cluster snapshot to be copied. This identifier must be in the Amazon Resource Name (ARN) format for the source AWS Region. For example, if you are copying an encrypted DB cluster snapshot from the us-west-2 AWS Region, then your <code>SourceDBClusterSnapshotIdentifier</code> looks like the following example: <code>arn:aws:rds:us-west-2:123456789012:cluster-snapshot:aurora-cluster1-snapshot-20161115</code>.</p> </li> </ul> <p>To learn how to generate a Signature Version 4 signed request, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-query-string-auth.html"> Authenticating Requests: Using Query Parameters (AWS Signature Version 4)</a> and <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html"> Signature Version 4 Signing Process</a>.</p> <note> <p>If you are using an AWS SDK tool or the AWS CLI, you can specify <code>SourceRegion</code> (or <code>--source-region</code> for the AWS CLI) instead of specifying <code>PreSignedUrl</code> manually. Specifying <code>SourceRegion</code> autogenerates a pre-signed URL that is a valid request for the operation that can be executed in the source AWS Region.</p> </note> </li> <li> <p> <code>TargetDBClusterSnapshotIdentifier</code> - The identifier for the new copy of the DB cluster snapshot in the destination AWS Region.</p> </li> <li> <p> <code>SourceDBClusterSnapshotIdentifier</code> - The DB cluster snapshot identifier for the encrypted DB cluster snapshot to be copied. This identifier must be in the ARN format for the source AWS Region and is the same value as the <code>SourceDBClusterSnapshotIdentifier</code> in the pre-signed URL. </p> </li> </ul> <p>To cancel the copy operation once it is in progress, delete the target DB cluster snapshot identified by <code>TargetDBClusterSnapshotIdentifier</code> while that DB cluster snapshot is in "copying" status.</p> <p>For more information on copying encrypted DB cluster snapshots from one AWS Region to another, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_CopySnapshot.html"> Copying a Snapshot</a> in the <i>Amazon Aurora User Guide.</i> </p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
		 * Get /#Action=CopyDBClusterSnapshot
		 * @param {string} SourceDBClusterSnapshotIdentifier <p>The identifier of the DB cluster snapshot to copy. This parameter isn't case-sensitive.</p> <p>You can't copy an encrypted, shared DB cluster snapshot from one AWS Region to another.</p> <p>Constraints:</p> <ul> <li> <p>Must specify a valid system snapshot in the "available" state.</p> </li> <li> <p>If the source snapshot is in the same AWS Region as the copy, specify a valid DB snapshot identifier.</p> </li> <li> <p>If the source snapshot is in a different AWS Region than the copy, specify a valid DB cluster snapshot ARN. For more information, go to <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_CopySnapshot.html#USER_CopySnapshot.AcrossRegions"> Copying Snapshots Across AWS Regions</a> in the <i>Amazon Aurora User Guide.</i> </p> </li> </ul> <p>Example: <code>my-cluster-snapshot1</code> </p>
		 * @param {string} TargetDBClusterSnapshotIdentifier <p>The identifier of the new DB cluster snapshot to create from the source DB cluster snapshot. This parameter isn't case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Can't end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>my-cluster-snapshot2</code> </p>
		 * @param {string} KmsKeyId <p>The AWS KMS key ID for an encrypted DB cluster snapshot. The KMS key ID is the Amazon Resource Name (ARN), KMS key identifier, or the KMS key alias for the KMS encryption key. </p> <p>If you copy an encrypted DB cluster snapshot from your AWS account, you can specify a value for <code>KmsKeyId</code> to encrypt the copy with a new KMS encryption key. If you don't specify a value for <code>KmsKeyId</code>, then the copy of the DB cluster snapshot is encrypted with the same KMS key as the source DB cluster snapshot. </p> <p>If you copy an encrypted DB cluster snapshot that is shared from another AWS account, then you must specify a value for <code>KmsKeyId</code>. </p> <p>To copy an encrypted DB cluster snapshot to another AWS Region, you must set <code>KmsKeyId</code> to the KMS key ID you want to use to encrypt the copy of the DB cluster snapshot in the destination AWS Region. KMS encryption keys are specific to the AWS Region that they are created in, and you can't use encryption keys from one AWS Region in another AWS Region.</p> <p>If you copy an unencrypted DB cluster snapshot and specify a value for the <code>KmsKeyId</code> parameter, an error is returned.</p>
		 * @param {string} PreSignedUrl <p>The URL that contains a Signature Version 4 signed request for the <code>CopyDBClusterSnapshot</code> API action in the AWS Region that contains the source DB cluster snapshot to copy. The <code>PreSignedUrl</code> parameter must be used when copying an encrypted DB cluster snapshot from another AWS Region. Don't specify <code>PreSignedUrl</code> when you are copying an encrypted DB cluster snapshot in the same AWS Region.</p> <p>The pre-signed URL must be a valid request for the <code>CopyDBClusterSnapshot</code> API action that can be executed in the source AWS Region that contains the encrypted DB cluster snapshot to be copied. The pre-signed URL request must contain the following parameter values:</p> <ul> <li> <p> <code>KmsKeyId</code> - The AWS KMS key identifier for the key to use to encrypt the copy of the DB cluster snapshot in the destination AWS Region. This is the same identifier for both the <code>CopyDBClusterSnapshot</code> action that is called in the destination AWS Region, and the action contained in the pre-signed URL.</p> </li> <li> <p> <code>DestinationRegion</code> - The name of the AWS Region that the DB cluster snapshot is to be created in.</p> </li> <li> <p> <code>SourceDBClusterSnapshotIdentifier</code> - The DB cluster snapshot identifier for the encrypted DB cluster snapshot to be copied. This identifier must be in the Amazon Resource Name (ARN) format for the source AWS Region. For example, if you are copying an encrypted DB cluster snapshot from the us-west-2 AWS Region, then your <code>SourceDBClusterSnapshotIdentifier</code> looks like the following example: <code>arn:aws:rds:us-west-2:123456789012:cluster-snapshot:aurora-cluster1-snapshot-20161115</code>.</p> </li> </ul> <p>To learn how to generate a Signature Version 4 signed request, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-query-string-auth.html"> Authenticating Requests: Using Query Parameters (AWS Signature Version 4)</a> and <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html"> Signature Version 4 Signing Process</a>.</p> <note> <p>If you are using an AWS SDK tool or the AWS CLI, you can specify <code>SourceRegion</code> (or <code>--source-region</code> for the AWS CLI) instead of specifying <code>PreSignedUrl</code> manually. Specifying <code>SourceRegion</code> autogenerates a pre-signed URL that is a valid request for the operation that can be executed in the source AWS Region.</p> </note><note><p>If you supply a value for this operation's <code>SourceRegion</code> parameter, a pre-signed URL will be calculated on your behalf.</p></note>
		 * @param {boolean} CopyTags A value that indicates whether to copy all tags from the source DB cluster snapshot to the target DB cluster snapshot. By default, tags are not copied.
		 * @param {string} SourceRegion The ID of the region that contains the snapshot to be copied.
		 * @return {void} Success
		 */
		GET_CopyDBClusterSnapshot(SourceDBClusterSnapshotIdentifier: string, TargetDBClusterSnapshotIdentifier: string, KmsKeyId: string, PreSignedUrl: string, CopyTags: boolean, Tags: Array<Tag>, SourceRegion: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=CopyDBClusterSnapshot?SourceDBClusterSnapshotIdentifier=' + (SourceDBClusterSnapshotIdentifier == null ? '' : encodeURIComponent(SourceDBClusterSnapshotIdentifier)) + '&TargetDBClusterSnapshotIdentifier=' + (TargetDBClusterSnapshotIdentifier == null ? '' : encodeURIComponent(TargetDBClusterSnapshotIdentifier)) + '&KmsKeyId=' + (KmsKeyId == null ? '' : encodeURIComponent(KmsKeyId)) + '&PreSignedUrl=' + (PreSignedUrl == null ? '' : encodeURIComponent(PreSignedUrl)) + '&CopyTags=' + CopyTags + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&SourceRegion=' + (SourceRegion == null ? '' : encodeURIComponent(SourceRegion)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Copies the specified DB parameter group.
		 * Get /#Action=CopyDBParameterGroup
		 * @param {string} SourceDBParameterGroupIdentifier <p> The identifier or ARN for the source DB parameter group. For information about creating an ARN, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing"> Constructing an ARN for Amazon RDS</a> in the <i>Amazon RDS User Guide</i>. </p> <p>Constraints:</p> <ul> <li> <p>Must specify a valid DB parameter group.</p> </li> <li> <p>Must specify a valid DB parameter group identifier, for example <code>my-db-param-group</code>, or a valid ARN.</p> </li> </ul>
		 * @param {string} TargetDBParameterGroupIdentifier <p>The identifier for the copied DB parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Can't be null, empty, or blank</p> </li> <li> <p>Must contain from 1 to 255 letters, numbers, or hyphens</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Can't end with a hyphen or contain two consecutive hyphens</p> </li> </ul> <p>Example: <code>my-db-parameter-group</code> </p>
		 * @param {string} TargetDBParameterGroupDescription A description for the copied DB parameter group.
		 * @return {void} Success
		 */
		GET_CopyDBParameterGroup(SourceDBParameterGroupIdentifier: string, TargetDBParameterGroupIdentifier: string, TargetDBParameterGroupDescription: string, Tags: Array<Tag>, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=CopyDBParameterGroup?SourceDBParameterGroupIdentifier=' + (SourceDBParameterGroupIdentifier == null ? '' : encodeURIComponent(SourceDBParameterGroupIdentifier)) + '&TargetDBParameterGroupIdentifier=' + (TargetDBParameterGroupIdentifier == null ? '' : encodeURIComponent(TargetDBParameterGroupIdentifier)) + '&TargetDBParameterGroupDescription=' + (TargetDBParameterGroupDescription == null ? '' : encodeURIComponent(TargetDBParameterGroupDescription)) + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Copies the specified DB snapshot. The source DB snapshot must be in the "available" state.</p> <p>You can copy a snapshot from one AWS Region to another. In that case, the AWS Region where you call the <code>CopyDBSnapshot</code> action is the destination AWS Region for the DB snapshot copy. </p> <p>For more information about copying snapshots, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CopySnapshot.html#USER_CopyDBSnapshot">Copying a DB Snapshot</a> in the <i>Amazon RDS User Guide.</i> </p>
		 * Get /#Action=CopyDBSnapshot
		 * @param {string} SourceDBSnapshotIdentifier <p>The identifier for the source DB snapshot.</p> <p>If the source snapshot is in the same AWS Region as the copy, specify a valid DB snapshot identifier. For example, you might specify <code>rds:mysql-instance1-snapshot-20130805</code>. </p> <p>If the source snapshot is in a different AWS Region than the copy, specify a valid DB snapshot ARN. For example, you might specify <code>arn:aws:rds:us-west-2:123456789012:snapshot:mysql-instance1-snapshot-20130805</code>. </p> <p>If you are copying from a shared manual DB snapshot, this parameter must be the Amazon Resource Name (ARN) of the shared DB snapshot. </p> <p>If you are copying an encrypted snapshot this parameter must be in the ARN format for the source AWS Region, and must match the <code>SourceDBSnapshotIdentifier</code> in the <code>PreSignedUrl</code> parameter. </p> <p>Constraints:</p> <ul> <li> <p>Must specify a valid system snapshot in the "available" state.</p> </li> </ul> <p>Example: <code>rds:mydb-2012-04-02-00-01</code> </p> <p>Example: <code>arn:aws:rds:us-west-2:123456789012:snapshot:mysql-instance1-snapshot-20130805</code> </p>
		 * @param {string} TargetDBSnapshotIdentifier <p>The identifier for the copy of the snapshot. </p> <p>Constraints:</p> <ul> <li> <p>Can't be null, empty, or blank</p> </li> <li> <p>Must contain from 1 to 255 letters, numbers, or hyphens</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Can't end with a hyphen or contain two consecutive hyphens</p> </li> </ul> <p>Example: <code>my-db-snapshot</code> </p>
		 * @param {string} KmsKeyId <p>The AWS KMS key ID for an encrypted DB snapshot. The KMS key ID is the Amazon Resource Name (ARN), KMS key identifier, or the KMS key alias for the KMS encryption key. </p> <p>If you copy an encrypted DB snapshot from your AWS account, you can specify a value for this parameter to encrypt the copy with a new KMS encryption key. If you don't specify a value for this parameter, then the copy of the DB snapshot is encrypted with the same KMS key as the source DB snapshot. </p> <p>If you copy an encrypted DB snapshot that is shared from another AWS account, then you must specify a value for this parameter. </p> <p>If you specify this parameter when you copy an unencrypted snapshot, the copy is encrypted. </p> <p>If you copy an encrypted snapshot to a different AWS Region, then you must specify a KMS key for the destination AWS Region. KMS encryption keys are specific to the AWS Region that they are created in, and you can't use encryption keys from one AWS Region in another AWS Region. </p>
		 * @param {boolean} CopyTags A value that indicates whether to copy all tags from the source DB snapshot to the target DB snapshot. By default, tags are not copied.
		 * @param {string} PreSignedUrl <p>The URL that contains a Signature Version 4 signed request for the <code>CopyDBSnapshot</code> API action in the source AWS Region that contains the source DB snapshot to copy. </p> <p>You must specify this parameter when you copy an encrypted DB snapshot from another AWS Region by using the Amazon RDS API. Don't specify <code>PreSignedUrl</code> when you are copying an encrypted DB snapshot in the same AWS Region.</p> <p>The presigned URL must be a valid request for the <code>CopyDBSnapshot</code> API action that can be executed in the source AWS Region that contains the encrypted DB snapshot to be copied. The presigned URL request must contain the following parameter values: </p> <ul> <li> <p> <code>DestinationRegion</code> - The AWS Region that the encrypted DB snapshot is copied to. This AWS Region is the same one where the <code>CopyDBSnapshot</code> action is called that contains this presigned URL. </p> <p>For example, if you copy an encrypted DB snapshot from the us-west-2 AWS Region to the us-east-1 AWS Region, then you call the <code>CopyDBSnapshot</code> action in the us-east-1 AWS Region and provide a presigned URL that contains a call to the <code>CopyDBSnapshot</code> action in the us-west-2 AWS Region. For this example, the <code>DestinationRegion</code> in the presigned URL must be set to the us-east-1 AWS Region. </p> </li> <li> <p> <code>KmsKeyId</code> - The AWS KMS key identifier for the key to use to encrypt the copy of the DB snapshot in the destination AWS Region. This is the same identifier for both the <code>CopyDBSnapshot</code> action that is called in the destination AWS Region, and the action contained in the presigned URL. </p> </li> <li> <p> <code>SourceDBSnapshotIdentifier</code> - The DB snapshot identifier for the encrypted snapshot to be copied. This identifier must be in the Amazon Resource Name (ARN) format for the source AWS Region. For example, if you are copying an encrypted DB snapshot from the us-west-2 AWS Region, then your <code>SourceDBSnapshotIdentifier</code> looks like the following example: <code>arn:aws:rds:us-west-2:123456789012:snapshot:mysql-instance1-snapshot-20161115</code>. </p> </li> </ul> <p>To learn how to generate a Signature Version 4 signed request, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-query-string-auth.html">Authenticating Requests: Using Query Parameters (AWS Signature Version 4)</a> and <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 Signing Process</a>. </p> <note> <p>If you are using an AWS SDK tool or the AWS CLI, you can specify <code>SourceRegion</code> (or <code>--source-region</code> for the AWS CLI) instead of specifying <code>PreSignedUrl</code> manually. Specifying <code>SourceRegion</code> autogenerates a pre-signed URL that is a valid request for the operation that can be executed in the source AWS Region.</p> </note><note><p>If you supply a value for this operation's <code>SourceRegion</code> parameter, a pre-signed URL will be calculated on your behalf.</p></note>
		 * @param {string} OptionGroupName <p>The name of an option group to associate with the copy of the snapshot.</p> <p>Specify this option if you are copying a snapshot from one AWS Region to another, and your DB instance uses a nondefault option group. If your source DB instance uses Transparent Data Encryption for Oracle or Microsoft SQL Server, you must specify this option when copying across AWS Regions. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CopySnapshot.html#USER_CopySnapshot.Options">Option Group Considerations</a> in the <i>Amazon RDS User Guide.</i> </p>
		 * @param {string} SourceRegion The ID of the region that contains the snapshot to be copied.
		 * @return {void} Success
		 */
		GET_CopyDBSnapshot(SourceDBSnapshotIdentifier: string, TargetDBSnapshotIdentifier: string, KmsKeyId: string, Tags: Array<Tag>, CopyTags: boolean, PreSignedUrl: string, OptionGroupName: string, SourceRegion: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=CopyDBSnapshot?SourceDBSnapshotIdentifier=' + (SourceDBSnapshotIdentifier == null ? '' : encodeURIComponent(SourceDBSnapshotIdentifier)) + '&TargetDBSnapshotIdentifier=' + (TargetDBSnapshotIdentifier == null ? '' : encodeURIComponent(TargetDBSnapshotIdentifier)) + '&KmsKeyId=' + (KmsKeyId == null ? '' : encodeURIComponent(KmsKeyId)) + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&CopyTags=' + CopyTags + '&PreSignedUrl=' + (PreSignedUrl == null ? '' : encodeURIComponent(PreSignedUrl)) + '&OptionGroupName=' + (OptionGroupName == null ? '' : encodeURIComponent(OptionGroupName)) + '&SourceRegion=' + (SourceRegion == null ? '' : encodeURIComponent(SourceRegion)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Copies the specified option group.
		 * Get /#Action=CopyOptionGroup
		 * @param {string} SourceOptionGroupIdentifier <p>The identifier or ARN for the source option group. For information about creating an ARN, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing"> Constructing an ARN for Amazon RDS</a> in the <i>Amazon RDS User Guide</i>. </p> <p>Constraints:</p> <ul> <li> <p>Must specify a valid option group.</p> </li> <li> <p>If the source option group is in the same AWS Region as the copy, specify a valid option group identifier, for example <code>my-option-group</code>, or a valid ARN.</p> </li> <li> <p>If the source option group is in a different AWS Region than the copy, specify a valid option group ARN, for example <code>arn:aws:rds:us-west-2:123456789012:og:special-options</code>.</p> </li> </ul>
		 * @param {string} TargetOptionGroupIdentifier <p>The identifier for the copied option group.</p> <p>Constraints:</p> <ul> <li> <p>Can't be null, empty, or blank</p> </li> <li> <p>Must contain from 1 to 255 letters, numbers, or hyphens</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Can't end with a hyphen or contain two consecutive hyphens</p> </li> </ul> <p>Example: <code>my-option-group</code> </p>
		 * @param {string} TargetOptionGroupDescription The description for the copied option group.
		 * @return {void} Success
		 */
		GET_CopyOptionGroup(SourceOptionGroupIdentifier: string, TargetOptionGroupIdentifier: string, TargetOptionGroupDescription: string, Tags: Array<Tag>, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=CopyOptionGroup?SourceOptionGroupIdentifier=' + (SourceOptionGroupIdentifier == null ? '' : encodeURIComponent(SourceOptionGroupIdentifier)) + '&TargetOptionGroupIdentifier=' + (TargetOptionGroupIdentifier == null ? '' : encodeURIComponent(TargetOptionGroupIdentifier)) + '&TargetOptionGroupDescription=' + (TargetOptionGroupDescription == null ? '' : encodeURIComponent(TargetOptionGroupDescription)) + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a custom Availability Zone (AZ).</p> <p>A custom AZ is an on-premises AZ that is integrated with a VMware vSphere cluster.</p> <p>For more information about RDS on VMware, see the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/RDSonVMwareUserGuide/rds-on-vmware.html"> <i>RDS on VMware User Guide.</i> </a> </p>
		 * Get /#Action=CreateCustomAvailabilityZone
		 * @param {string} CustomAvailabilityZoneName The name of the custom Availability Zone (AZ).
		 * @param {string} ExistingVpnId The ID of an existing virtual private network (VPN) between the Amazon RDS website and the VMware vSphere cluster.
		 * @param {string} NewVpnTunnelName <p>The name of a new VPN tunnel between the Amazon RDS website and the VMware vSphere cluster.</p> <p>Specify this parameter only if <code>ExistingVpnId</code> isn't specified.</p>
		 * @param {string} VpnTunnelOriginatorIP <p>The IP address of network traffic from your on-premises data center. A custom AZ receives the network traffic.</p> <p>Specify this parameter only if <code>ExistingVpnId</code> isn't specified.</p>
		 * @return {void} Success
		 */
		GET_CreateCustomAvailabilityZone(CustomAvailabilityZoneName: string, ExistingVpnId: string, NewVpnTunnelName: string, VpnTunnelOriginatorIP: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=CreateCustomAvailabilityZone?CustomAvailabilityZoneName=' + (CustomAvailabilityZoneName == null ? '' : encodeURIComponent(CustomAvailabilityZoneName)) + '&ExistingVpnId=' + (ExistingVpnId == null ? '' : encodeURIComponent(ExistingVpnId)) + '&NewVpnTunnelName=' + (NewVpnTunnelName == null ? '' : encodeURIComponent(NewVpnTunnelName)) + '&VpnTunnelOriginatorIP=' + (VpnTunnelOriginatorIP == null ? '' : encodeURIComponent(VpnTunnelOriginatorIP)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a new Amazon Aurora DB cluster.</p> <p>You can use the <code>ReplicationSourceIdentifier</code> parameter to create the DB cluster as a read replica of another DB cluster or Amazon RDS MySQL DB instance. For cross-region replication where the DB cluster identified by <code>ReplicationSourceIdentifier</code> is encrypted, you must also specify the <code>PreSignedUrl</code> parameter.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
		 * Get /#Action=CreateDBCluster
		 * @param {Array<String>} AvailabilityZones A list of Availability Zones (AZs) where instances in the DB cluster can be created. For information on AWS Regions and Availability Zones, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.RegionsAndAvailabilityZones.html">Choosing the Regions and Availability Zones</a> in the <i>Amazon Aurora User Guide</i>. 
		 * @param {number} BackupRetentionPeriod <p>The number of days for which automated backups are retained.</p> <p>Default: 1</p> <p>Constraints:</p> <ul> <li> <p>Must be a value from 1 to 35</p> </li> </ul>
		 * @param {string} CharacterSetName A value that indicates that the DB cluster should be associated with the specified CharacterSet.
		 * @param {string} DatabaseName The name for your database of up to 64 alphanumeric characters. If you do not provide a name, Amazon RDS doesn't create a database in the DB cluster you are creating.
		 * @param {string} DBClusterIdentifier <p>The DB cluster identifier. This parameter is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Can't end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>my-cluster1</code> </p>
		 * @param {string} DBClusterParameterGroupName <p> The name of the DB cluster parameter group to associate with this DB cluster. If you do not specify a value, then the default DB cluster parameter group for the specified DB engine and version is used. </p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the name of an existing DB cluster parameter group.</p> </li> </ul>
		 * @param {Array<String>} VpcSecurityGroupIds A list of EC2 VPC security groups to associate with this DB cluster.
		 * @param {string} DBSubnetGroupName <p>A DB subnet group to associate with this DB cluster.</p> <p>Constraints: Must match the name of an existing DBSubnetGroup. Must not be default.</p> <p>Example: <code>mySubnetgroup</code> </p>
		 * @param {string} Engine <p>The name of the database engine to be used for this DB cluster.</p> <p>Valid Values: <code>aurora</code> (for MySQL 5.6-compatible Aurora), <code>aurora-mysql</code> (for MySQL 5.7-compatible Aurora), and <code>aurora-postgresql</code> </p>
		 * @param {string} EngineVersion <p>The version number of the database engine to use.</p> <p>To list all of the available engine versions for <code>aurora</code> (for MySQL 5.6-compatible Aurora), use the following command:</p> <p> <code>aws rds describe-db-engine-versions --engine aurora --query "DBEngineVersions[].EngineVersion"</code> </p> <p>To list all of the available engine versions for <code>aurora-mysql</code> (for MySQL 5.7-compatible Aurora), use the following command:</p> <p> <code>aws rds describe-db-engine-versions --engine aurora-mysql --query "DBEngineVersions[].EngineVersion"</code> </p> <p>To list all of the available engine versions for <code>aurora-postgresql</code>, use the following command:</p> <p> <code>aws rds describe-db-engine-versions --engine aurora-postgresql --query "DBEngineVersions[].EngineVersion"</code> </p> <p> <b>Aurora MySQL</b> </p> <p>Example: <code>5.6.10a</code>, <code>5.6.mysql_aurora.1.19.2</code>, <code>5.7.12</code>, <code>5.7.mysql_aurora.2.04.5</code> </p> <p> <b>Aurora PostgreSQL</b> </p> <p>Example: <code>9.6.3</code>, <code>10.7</code> </p>
		 * @param {number} Port <p>The port number on which the instances in the DB cluster accept connections.</p> <p> Default: <code>3306</code> if engine is set as aurora or <code>5432</code> if set to aurora-postgresql. </p>
		 * @param {string} MasterUsername <p>The name of the master user for the DB cluster.</p> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 16 letters or numbers.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Can't be a reserved word for the chosen database engine.</p> </li> </ul>
		 * @param {string} MasterUserPassword <p>The password for the master database user. This password can contain any printable ASCII character except "/", """, or "@".</p> <p>Constraints: Must contain from 8 to 41 characters.</p>
		 * @param {string} OptionGroupName <p>A value that indicates that the DB cluster should be associated with the specified option group.</p> <p>Permanent options can't be removed from an option group. The option group can't be removed from a DB cluster once it is associated with a DB cluster.</p>
		 * @param {string} PreferredBackupWindow <p>The daily time range during which automated backups are created if automated backups are enabled using the <code>BackupRetentionPeriod</code> parameter. </p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region. To see the time blocks available, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow.Aurora"> Adjusting the Preferred DB Cluster Maintenance Window</a> in the <i>Amazon Aurora User Guide.</i> </p> <p>Constraints:</p> <ul> <li> <p>Must be in the format <code>hh24:mi-hh24:mi</code>.</p> </li> <li> <p>Must be in Universal Coordinated Time (UTC).</p> </li> <li> <p>Must not conflict with the preferred maintenance window.</p> </li> <li> <p>Must be at least 30 minutes.</p> </li> </ul>
		 * @param {string} PreferredMaintenanceWindow <p>The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p> <p>Format: <code>ddd:hh24:mi-ddd:hh24:mi</code> </p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region, occurring on a random day of the week. To see the time blocks available, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow.Aurora"> Adjusting the Preferred DB Cluster Maintenance Window</a> in the <i>Amazon Aurora User Guide.</i> </p> <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p> <p>Constraints: Minimum 30-minute window.</p>
		 * @param {string} ReplicationSourceIdentifier The Amazon Resource Name (ARN) of the source DB instance or DB cluster if this DB cluster is created as a read replica.
		 * @param {Array<Tag>} Tags Tags to assign to the DB cluster.
		 * @param {boolean} StorageEncrypted A value that indicates whether the DB cluster is encrypted.
		 * @param {string} KmsKeyId <p>The AWS KMS key identifier for an encrypted DB cluster.</p> <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are creating a DB cluster with the same AWS account that owns the KMS encryption key used to encrypt the new DB cluster, then you can use the KMS key alias instead of the ARN for the KMS encryption key.</p> <p>If an encryption key isn't specified in <code>KmsKeyId</code>:</p> <ul> <li> <p>If <code>ReplicationSourceIdentifier</code> identifies an encrypted source, then Amazon RDS will use the encryption key used to encrypt the source. Otherwise, Amazon RDS will use your default encryption key. </p> </li> <li> <p>If the <code>StorageEncrypted</code> parameter is enabled and <code>ReplicationSourceIdentifier</code> isn't specified, then Amazon RDS will use your default encryption key.</p> </li> </ul> <p>AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS Region.</p> <p>If you create a read replica of an encrypted DB cluster in another AWS Region, you must set <code>KmsKeyId</code> to a KMS key ID that is valid in the destination AWS Region. This key is used to encrypt the read replica in that AWS Region.</p>
		 * @param {string} PreSignedUrl <p>A URL that contains a Signature Version 4 signed request for the <code>CreateDBCluster</code> action to be called in the source AWS Region where the DB cluster is replicated from. You only need to specify <code>PreSignedUrl</code> when you are performing cross-region replication from an encrypted DB cluster.</p> <p>The pre-signed URL must be a valid request for the <code>CreateDBCluster</code> API action that can be executed in the source AWS Region that contains the encrypted DB cluster to be copied.</p> <p>The pre-signed URL request must contain the following parameter values:</p> <ul> <li> <p> <code>KmsKeyId</code> - The AWS KMS key identifier for the key to use to encrypt the copy of the DB cluster in the destination AWS Region. This should refer to the same KMS key for both the <code>CreateDBCluster</code> action that is called in the destination AWS Region, and the action contained in the pre-signed URL.</p> </li> <li> <p> <code>DestinationRegion</code> - The name of the AWS Region that Aurora read replica will be created in.</p> </li> <li> <p> <code>ReplicationSourceIdentifier</code> - The DB cluster identifier for the encrypted DB cluster to be copied. This identifier must be in the Amazon Resource Name (ARN) format for the source AWS Region. For example, if you are copying an encrypted DB cluster from the us-west-2 AWS Region, then your <code>ReplicationSourceIdentifier</code> would look like Example: <code>arn:aws:rds:us-west-2:123456789012:cluster:aurora-cluster1</code>.</p> </li> </ul> <p>To learn how to generate a Signature Version 4 signed request, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-query-string-auth.html"> Authenticating Requests: Using Query Parameters (AWS Signature Version 4)</a> and <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html"> Signature Version 4 Signing Process</a>.</p> <note> <p>If you are using an AWS SDK tool or the AWS CLI, you can specify <code>SourceRegion</code> (or <code>--source-region</code> for the AWS CLI) instead of specifying <code>PreSignedUrl</code> manually. Specifying <code>SourceRegion</code> autogenerates a pre-signed URL that is a valid request for the operation that can be executed in the source AWS Region.</p> </note><note><p>If you supply a value for this operation's <code>SourceRegion</code> parameter, a pre-signed URL will be calculated on your behalf.</p></note>
		 * @param {boolean} EnableIAMDatabaseAuthentication <p>A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. By default, mapping is disabled.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBAuth.html"> IAM Database Authentication</a> in the <i>Amazon Aurora User Guide.</i> </p>
		 * @param {number} BacktrackWindow <p>The target backtrack window, in seconds. To disable backtracking, set this value to 0. </p> <p>Default: 0</p> <p>Constraints:</p> <ul> <li> <p>If specified, this value must be set to a number from 0 to 259,200 (72 hours).</p> </li> </ul>
		 * @param {Array<String>} EnableCloudwatchLogsExports The list of log types that need to be enabled for exporting to CloudWatch Logs. The values in the list depend on the DB engine being used. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon Aurora User Guide</i>.
		 * @param {string} EngineMode <p>The DB engine mode of the DB cluster, either <code>provisioned</code>, <code>serverless</code>, <code>parallelquery</code>, <code>global</code>, or <code>multimaster</code>.</p> <note> <p> <code>global</code> engine mode only applies for global database clusters created with Aurora MySQL version 5.6.10a. For higher Aurora MySQL versions, the clusters in a global database use <code>provisioned</code> engine mode. </p> </note> <p>Limitations and requirements apply to some DB engine modes. For more information, see the following sections in the <i>Amazon Aurora User Guide</i>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html#aurora-serverless.limitations"> Limitations of Aurora Serverless</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-mysql-parallel-query.html#aurora-mysql-parallel-query-limitations"> Limitations of Parallel Query</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html#aurora-global-database.limitations"> Requirements for Aurora Global Databases</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-multi-master.html#aurora-multi-master-limitations"> Limitations of Multi-Master Clusters</a> </p> </li> </ul>
		 * @param {string} ScalingConfiguration For DB clusters in <code>serverless</code> DB engine mode, the scaling properties of the DB cluster.
		 * @param {boolean} DeletionProtection A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled.
		 * @param {string} GlobalClusterIdentifier  The global cluster ID of an Aurora cluster that becomes the primary cluster in the new global database cluster. 
		 * @param {boolean} EnableHttpEndpoint <p>A value that indicates whether to enable the HTTP endpoint for an Aurora Serverless DB cluster. By default, the HTTP endpoint is disabled.</p> <p>When enabled, the HTTP endpoint provides a connectionless web service API for running SQL queries on the Aurora Serverless DB cluster. You can also query your database from inside the RDS console with the query editor.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html">Using the Data API for Aurora Serverless</a> in the <i>Amazon Aurora User Guide</i>.</p>
		 * @param {boolean} CopyTagsToSnapshot A value that indicates whether to copy all tags from the DB cluster to snapshots of the DB cluster. The default is not to copy them.
		 * @param {string} Domain <p>The Active Directory directory ID to create the DB cluster in.</p> <p> For Amazon Aurora DB clusters, Amazon RDS can use Kerberos Authentication to authenticate users that connect to the DB cluster. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/kerberos-authentication.html">Kerberos Authentication</a> in the <i>Amazon Aurora User Guide</i>. </p>
		 * @param {string} DomainIAMRoleName Specify the name of the IAM role to be used when making API calls to the Directory Service.
		 * @param {string} SourceRegion The ID of the region that contains the source for the read replica.
		 * @return {void} Success
		 */
		GET_CreateDBCluster(AvailabilityZones: Array<String>, BackupRetentionPeriod: number, CharacterSetName: string, DatabaseName: string, DBClusterIdentifier: string, DBClusterParameterGroupName: string, VpcSecurityGroupIds: Array<String>, DBSubnetGroupName: string, Engine: string, EngineVersion: string, Port: number, MasterUsername: string, MasterUserPassword: string, OptionGroupName: string, PreferredBackupWindow: string, PreferredMaintenanceWindow: string, ReplicationSourceIdentifier: string, Tags: Array<Tag>, StorageEncrypted: boolean, KmsKeyId: string, PreSignedUrl: string, EnableIAMDatabaseAuthentication: boolean, BacktrackWindow: number, EnableCloudwatchLogsExports: Array<String>, EngineMode: string, ScalingConfiguration: string, DeletionProtection: boolean, GlobalClusterIdentifier: string, EnableHttpEndpoint: boolean, CopyTagsToSnapshot: boolean, Domain: string, DomainIAMRoleName: string, SourceRegion: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=CreateDBCluster?' + AvailabilityZones.map(z => `AvailabilityZones=${z}`).join('&') + '&BackupRetentionPeriod=' + BackupRetentionPeriod + '&CharacterSetName=' + (CharacterSetName == null ? '' : encodeURIComponent(CharacterSetName)) + '&DatabaseName=' + (DatabaseName == null ? '' : encodeURIComponent(DatabaseName)) + '&DBClusterIdentifier=' + (DBClusterIdentifier == null ? '' : encodeURIComponent(DBClusterIdentifier)) + '&DBClusterParameterGroupName=' + (DBClusterParameterGroupName == null ? '' : encodeURIComponent(DBClusterParameterGroupName)) + '&' + VpcSecurityGroupIds.map(z => `VpcSecurityGroupIds=${z}`).join('&') + '&DBSubnetGroupName=' + (DBSubnetGroupName == null ? '' : encodeURIComponent(DBSubnetGroupName)) + '&Engine=' + (Engine == null ? '' : encodeURIComponent(Engine)) + '&EngineVersion=' + (EngineVersion == null ? '' : encodeURIComponent(EngineVersion)) + '&Port=' + Port + '&MasterUsername=' + (MasterUsername == null ? '' : encodeURIComponent(MasterUsername)) + '&MasterUserPassword=' + (MasterUserPassword == null ? '' : encodeURIComponent(MasterUserPassword)) + '&OptionGroupName=' + (OptionGroupName == null ? '' : encodeURIComponent(OptionGroupName)) + '&PreferredBackupWindow=' + (PreferredBackupWindow == null ? '' : encodeURIComponent(PreferredBackupWindow)) + '&PreferredMaintenanceWindow=' + (PreferredMaintenanceWindow == null ? '' : encodeURIComponent(PreferredMaintenanceWindow)) + '&ReplicationSourceIdentifier=' + (ReplicationSourceIdentifier == null ? '' : encodeURIComponent(ReplicationSourceIdentifier)) + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&StorageEncrypted=' + StorageEncrypted + '&KmsKeyId=' + (KmsKeyId == null ? '' : encodeURIComponent(KmsKeyId)) + '&PreSignedUrl=' + (PreSignedUrl == null ? '' : encodeURIComponent(PreSignedUrl)) + '&EnableIAMDatabaseAuthentication=' + EnableIAMDatabaseAuthentication + '&BacktrackWindow=' + BacktrackWindow + '&' + EnableCloudwatchLogsExports.map(z => `EnableCloudwatchLogsExports=${z}`).join('&') + '&EngineMode=' + (EngineMode == null ? '' : encodeURIComponent(EngineMode)) + '&ScalingConfiguration=' + (ScalingConfiguration == null ? '' : encodeURIComponent(ScalingConfiguration)) + '&DeletionProtection=' + DeletionProtection + '&GlobalClusterIdentifier=' + (GlobalClusterIdentifier == null ? '' : encodeURIComponent(GlobalClusterIdentifier)) + '&EnableHttpEndpoint=' + EnableHttpEndpoint + '&CopyTagsToSnapshot=' + CopyTagsToSnapshot + '&Domain=' + (Domain == null ? '' : encodeURIComponent(Domain)) + '&DomainIAMRoleName=' + (DomainIAMRoleName == null ? '' : encodeURIComponent(DomainIAMRoleName)) + '&SourceRegion=' + (SourceRegion == null ? '' : encodeURIComponent(SourceRegion)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a new custom endpoint and associates it with an Amazon Aurora DB cluster.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
		 * Get /#Action=CreateDBClusterEndpoint
		 * @param {string} DBClusterIdentifier The DB cluster identifier of the DB cluster associated with the endpoint. This parameter is stored as a lowercase string.
		 * @param {string} DBClusterEndpointIdentifier The identifier to use for the new endpoint. This parameter is stored as a lowercase string.
		 * @param {string} EndpointType The type of the endpoint. One of: <code>READER</code>, <code>WRITER</code>, <code>ANY</code>.
		 * @param {Array<String>} StaticMembers List of DB instance identifiers that are part of the custom endpoint group.
		 * @param {Array<String>} ExcludedMembers List of DB instance identifiers that aren't part of the custom endpoint group. All other eligible instances are reachable through the custom endpoint. Only relevant if the list of static members is empty.
		 * @param {Array<Tag>} Tags The tags to be assigned to the Amazon RDS resource.
		 * @return {void} Success
		 */
		GET_CreateDBClusterEndpoint(DBClusterIdentifier: string, DBClusterEndpointIdentifier: string, EndpointType: string, StaticMembers: Array<String>, ExcludedMembers: Array<String>, Tags: Array<Tag>, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=CreateDBClusterEndpoint?DBClusterIdentifier=' + (DBClusterIdentifier == null ? '' : encodeURIComponent(DBClusterIdentifier)) + '&DBClusterEndpointIdentifier=' + (DBClusterEndpointIdentifier == null ? '' : encodeURIComponent(DBClusterEndpointIdentifier)) + '&EndpointType=' + (EndpointType == null ? '' : encodeURIComponent(EndpointType)) + '&' + StaticMembers.map(z => `StaticMembers=${z}`).join('&') + '&' + ExcludedMembers.map(z => `ExcludedMembers=${z}`).join('&') + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a new DB cluster parameter group.</p> <p>Parameters in a DB cluster parameter group apply to all of the instances in a DB cluster.</p> <p> A DB cluster parameter group is initially created with the default parameters for the database engine used by instances in the DB cluster. To provide custom values for any of the parameters, you must modify the group after creating it using <code>ModifyDBClusterParameterGroup</code>. Once you've created a DB cluster parameter group, you need to associate it with your DB cluster using <code>ModifyDBCluster</code>. When you associate a new DB cluster parameter group with a running DB cluster, you need to reboot the DB instances in the DB cluster without failover for the new DB cluster parameter group and associated settings to take effect. </p> <important> <p>After you create a DB cluster parameter group, you should wait at least 5 minutes before creating your first DB cluster that uses that DB cluster parameter group as the default parameter group. This allows Amazon RDS to fully complete the create action before the DB cluster parameter group is used as the default for a new DB cluster. This is especially important for parameters that are critical when creating the default database for a DB cluster, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon RDS console</a> or the <code>DescribeDBClusterParameters</code> action to verify that your DB cluster parameter group has been created or modified.</p> </important> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
		 * Get /#Action=CreateDBClusterParameterGroup
		 * @param {string} DBClusterParameterGroupName <p>The name of the DB cluster parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Must match the name of an existing DB cluster parameter group.</p> </li> </ul> <note> <p>This value is stored as a lowercase string.</p> </note>
		 * @param {string} DBParameterGroupFamily <p>The DB cluster parameter group family name. A DB cluster parameter group can be associated with one and only one DB cluster parameter group family, and can be applied only to a DB cluster running a database engine and engine version compatible with that DB cluster parameter group family.</p> <p> <b>Aurora MySQL</b> </p> <p>Example: <code>aurora5.6</code>, <code>aurora-mysql5.7</code> </p> <p> <b>Aurora PostgreSQL</b> </p> <p>Example: <code>aurora-postgresql9.6</code> </p>
		 * @param {string} Description The description for the DB cluster parameter group.
		 * @param {Array<Tag>} Tags Tags to assign to the DB cluster parameter group.
		 * @return {void} Success
		 */
		GET_CreateDBClusterParameterGroup(DBClusterParameterGroupName: string, DBParameterGroupFamily: string, Description: string, Tags: Array<Tag>, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=CreateDBClusterParameterGroup?DBClusterParameterGroupName=' + (DBClusterParameterGroupName == null ? '' : encodeURIComponent(DBClusterParameterGroupName)) + '&DBParameterGroupFamily=' + (DBParameterGroupFamily == null ? '' : encodeURIComponent(DBParameterGroupFamily)) + '&Description=' + (Description == null ? '' : encodeURIComponent(Description)) + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a snapshot of a DB cluster. For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
		 * Get /#Action=CreateDBClusterSnapshot
		 * @param {string} DBClusterSnapshotIdentifier <p>The identifier of the DB cluster snapshot. This parameter is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Can't end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>my-cluster1-snapshot1</code> </p>
		 * @param {string} DBClusterIdentifier <p>The identifier of the DB cluster to create a snapshot for. This parameter isn't case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing DBCluster.</p> </li> </ul> <p>Example: <code>my-cluster1</code> </p>
		 * @param {Array<Tag>} Tags The tags to be assigned to the DB cluster snapshot.
		 * @return {void} Success
		 */
		GET_CreateDBClusterSnapshot(DBClusterSnapshotIdentifier: string, DBClusterIdentifier: string, Tags: Array<Tag>, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=CreateDBClusterSnapshot?DBClusterSnapshotIdentifier=' + (DBClusterSnapshotIdentifier == null ? '' : encodeURIComponent(DBClusterSnapshotIdentifier)) + '&DBClusterIdentifier=' + (DBClusterIdentifier == null ? '' : encodeURIComponent(DBClusterIdentifier)) + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new DB instance.
		 * Get /#Action=CreateDBInstance
		 * @param {string} DBName <p>The meaning of this parameter differs according to the database engine you use.</p> <p> <b>MySQL</b> </p> <p>The name of the database to create when the DB instance is created. If this parameter isn't specified, no database is created in the DB instance.</p> <p>Constraints:</p> <ul> <li> <p>Must contain 1 to 64 letters or numbers.</p> </li> <li> <p>Can't be a word reserved by the specified database engine</p> </li> </ul> <p> <b>MariaDB</b> </p> <p>The name of the database to create when the DB instance is created. If this parameter isn't specified, no database is created in the DB instance.</p> <p>Constraints:</p> <ul> <li> <p>Must contain 1 to 64 letters or numbers.</p> </li> <li> <p>Can't be a word reserved by the specified database engine</p> </li> </ul> <p> <b>PostgreSQL</b> </p> <p>The name of the database to create when the DB instance is created. If this parameter isn't specified, the default "postgres" database is created in the DB instance.</p> <p>Constraints:</p> <ul> <li> <p>Must contain 1 to 63 letters, numbers, or underscores.</p> </li> <li> <p>Must begin with a letter or an underscore. Subsequent characters can be letters, underscores, or digits (0-9).</p> </li> <li> <p>Can't be a word reserved by the specified database engine</p> </li> </ul> <p> <b>Oracle</b> </p> <p>The Oracle System ID (SID) of the created DB instance. If you specify <code>null</code>, the default value <code>ORCL</code> is used. You can't specify the string NULL, or any other reserved word, for <code>DBName</code>. </p> <p>Default: <code>ORCL</code> </p> <p>Constraints:</p> <ul> <li> <p>Can't be longer than 8 characters</p> </li> </ul> <p> <b>SQL Server</b> </p> <p>Not applicable. Must be null.</p> <p> <b>Amazon Aurora</b> </p> <p>The name of the database to create when the primary instance of the DB cluster is created. If this parameter isn't specified, no database is created in the DB instance.</p> <p>Constraints:</p> <ul> <li> <p>Must contain 1 to 64 letters or numbers.</p> </li> <li> <p>Can't be a word reserved by the specified database engine</p> </li> </ul>
		 * @param {string} DBInstanceIdentifier <p>The DB instance identifier. This parameter is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Can't end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>mydbinstance</code> </p>
		 * @param {number} AllocatedStorage <p>The amount of storage (in gibibytes) to allocate for the DB instance.</p> <p>Type: Integer</p> <p> <b>Amazon Aurora</b> </p> <p>Not applicable. Aurora cluster volumes automatically grow as the amount of data in your database increases, though you are only charged for the space that you use in an Aurora cluster volume.</p> <p> <b>MySQL</b> </p> <p>Constraints to the amount of storage for each storage type are the following: </p> <ul> <li> <p>General Purpose (SSD) storage (gp2): Must be an integer from 20 to 65536.</p> </li> <li> <p>Provisioned IOPS storage (io1): Must be an integer from 100 to 65536.</p> </li> <li> <p>Magnetic storage (standard): Must be an integer from 5 to 3072.</p> </li> </ul> <p> <b>MariaDB</b> </p> <p>Constraints to the amount of storage for each storage type are the following: </p> <ul> <li> <p>General Purpose (SSD) storage (gp2): Must be an integer from 20 to 65536.</p> </li> <li> <p>Provisioned IOPS storage (io1): Must be an integer from 100 to 65536.</p> </li> <li> <p>Magnetic storage (standard): Must be an integer from 5 to 3072.</p> </li> </ul> <p> <b>PostgreSQL</b> </p> <p>Constraints to the amount of storage for each storage type are the following: </p> <ul> <li> <p>General Purpose (SSD) storage (gp2): Must be an integer from 20 to 65536.</p> </li> <li> <p>Provisioned IOPS storage (io1): Must be an integer from 100 to 65536.</p> </li> <li> <p>Magnetic storage (standard): Must be an integer from 5 to 3072.</p> </li> </ul> <p> <b>Oracle</b> </p> <p>Constraints to the amount of storage for each storage type are the following: </p> <ul> <li> <p>General Purpose (SSD) storage (gp2): Must be an integer from 20 to 65536.</p> </li> <li> <p>Provisioned IOPS storage (io1): Must be an integer from 100 to 65536.</p> </li> <li> <p>Magnetic storage (standard): Must be an integer from 10 to 3072.</p> </li> </ul> <p> <b>SQL Server</b> </p> <p>Constraints to the amount of storage for each storage type are the following: </p> <ul> <li> <p>General Purpose (SSD) storage (gp2):</p> <ul> <li> <p>Enterprise and Standard editions: Must be an integer from 200 to 16384.</p> </li> <li> <p>Web and Express editions: Must be an integer from 20 to 16384.</p> </li> </ul> </li> <li> <p>Provisioned IOPS storage (io1):</p> <ul> <li> <p>Enterprise and Standard editions: Must be an integer from 200 to 16384.</p> </li> <li> <p>Web and Express editions: Must be an integer from 100 to 16384.</p> </li> </ul> </li> <li> <p>Magnetic storage (standard):</p> <ul> <li> <p>Enterprise and Standard editions: Must be an integer from 200 to 1024.</p> </li> <li> <p>Web and Express editions: Must be an integer from 20 to 1024.</p> </li> </ul> </li> </ul>
		 * @param {string} DBInstanceClass The compute and memory capacity of the DB instance, for example, <code>db.m4.large</code>. Not all DB instance classes are available in all AWS Regions, or for all database engines. For the full list of DB instance classes, and availability for your engine, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html">DB Instance Class</a> in the <i>Amazon RDS User Guide.</i> 
		 * @param {string} Engine <p>The name of the database engine to be used for this instance. </p> <p>Not every database engine is available for every AWS Region. </p> <p>Valid Values: </p> <ul> <li> <p> <code>aurora</code> (for MySQL 5.6-compatible Aurora)</p> </li> <li> <p> <code>aurora-mysql</code> (for MySQL 5.7-compatible Aurora)</p> </li> <li> <p> <code>aurora-postgresql</code> </p> </li> <li> <p> <code>mariadb</code> </p> </li> <li> <p> <code>mysql</code> </p> </li> <li> <p> <code>oracle-ee</code> </p> </li> <li> <p> <code>oracle-se2</code> </p> </li> <li> <p> <code>oracle-se1</code> </p> </li> <li> <p> <code>oracle-se</code> </p> </li> <li> <p> <code>postgres</code> </p> </li> <li> <p> <code>sqlserver-ee</code> </p> </li> <li> <p> <code>sqlserver-se</code> </p> </li> <li> <p> <code>sqlserver-ex</code> </p> </li> <li> <p> <code>sqlserver-web</code> </p> </li> </ul>
		 * @param {string} MasterUsername <p>The name for the master user.</p> <p> <b>Amazon Aurora</b> </p> <p>Not applicable. The name for the master user is managed by the DB cluster. </p> <p> <b>MariaDB</b> </p> <p>Constraints:</p> <ul> <li> <p>Required for MariaDB.</p> </li> <li> <p>Must be 1 to 16 letters or numbers.</p> </li> <li> <p>Can't be a reserved word for the chosen database engine.</p> </li> </ul> <p> <b>Microsoft SQL Server</b> </p> <p>Constraints:</p> <ul> <li> <p>Required for SQL Server.</p> </li> <li> <p>Must be 1 to 128 letters or numbers.</p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Can't be a reserved word for the chosen database engine.</p> </li> </ul> <p> <b>MySQL</b> </p> <p>Constraints:</p> <ul> <li> <p>Required for MySQL.</p> </li> <li> <p>Must be 1 to 16 letters or numbers.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Can't be a reserved word for the chosen database engine.</p> </li> </ul> <p> <b>Oracle</b> </p> <p>Constraints:</p> <ul> <li> <p>Required for Oracle.</p> </li> <li> <p>Must be 1 to 30 letters or numbers.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Can't be a reserved word for the chosen database engine.</p> </li> </ul> <p> <b>PostgreSQL</b> </p> <p>Constraints:</p> <ul> <li> <p>Required for PostgreSQL.</p> </li> <li> <p>Must be 1 to 63 letters or numbers.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Can't be a reserved word for the chosen database engine.</p> </li> </ul>
		 * @param {string} MasterUserPassword <p>The password for the master user. The password can include any printable ASCII character except "/", """, or "@".</p> <p> <b>Amazon Aurora</b> </p> <p>Not applicable. The password for the master user is managed by the DB cluster.</p> <p> <b>MariaDB</b> </p> <p>Constraints: Must contain from 8 to 41 characters.</p> <p> <b>Microsoft SQL Server</b> </p> <p>Constraints: Must contain from 8 to 128 characters.</p> <p> <b>MySQL</b> </p> <p>Constraints: Must contain from 8 to 41 characters.</p> <p> <b>Oracle</b> </p> <p>Constraints: Must contain from 8 to 30 characters.</p> <p> <b>PostgreSQL</b> </p> <p>Constraints: Must contain from 8 to 128 characters.</p>
		 * @param {Array<String>} DBSecurityGroups <p>A list of DB security groups to associate with this DB instance.</p> <p>Default: The default DB security group for the database engine.</p>
		 * @param {Array<String>} VpcSecurityGroupIds <p>A list of Amazon EC2 VPC security groups to associate with this DB instance.</p> <p> <b>Amazon Aurora</b> </p> <p>Not applicable. The associated list of EC2 VPC security groups is managed by the DB cluster.</p> <p>Default: The default EC2 VPC security group for the DB subnet group's VPC.</p>
		 * @param {string} AvailabilityZone <p> The Availability Zone (AZ) where the database will be created. For information on AWS Regions and Availability Zones, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html">Regions and Availability Zones</a>. </p> <p>Default: A random, system-chosen Availability Zone in the endpoint's AWS Region.</p> <p> Example: <code>us-east-1d</code> </p> <p> Constraint: The <code>AvailabilityZone</code> parameter can't be specified if the DB instance is a Multi-AZ deployment. The specified Availability Zone must be in the same AWS Region as the current endpoint. </p> <note> <p>If you're creating a DB instance in an RDS on VMware environment, specify the identifier of the custom Availability Zone to create the DB instance in.</p> <p>For more information about RDS on VMware, see the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/RDSonVMwareUserGuide/rds-on-vmware.html"> <i>RDS on VMware User Guide.</i> </a> </p> </note>
		 * @param {string} DBSubnetGroupName <p>A DB subnet group to associate with this DB instance.</p> <p>If there is no DB subnet group, then it is a non-VPC DB instance.</p>
		 * @param {string} PreferredMaintenanceWindow <p>The time range each week during which system maintenance can occur, in Universal Coordinated Time (UTC). For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Maintenance.html#Concepts.DBMaintenance">Amazon RDS Maintenance Window</a>. </p> <p> Format: <code>ddd:hh24:mi-ddd:hh24:mi</code> </p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region, occurring on a random day of the week. </p> <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p> <p>Constraints: Minimum 30-minute window.</p>
		 * @param {string} DBParameterGroupName <p>The name of the DB parameter group to associate with this DB instance. If you do not specify a value, then the default DB parameter group for the specified DB engine and version is used.</p> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 255 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Can't end with a hyphen or contain two consecutive hyphens</p> </li> </ul>
		 * @param {number} BackupRetentionPeriod <p>The number of days for which automated backups are retained. Setting this parameter to a positive number enables backups. Setting this parameter to 0 disables automated backups.</p> <p> <b>Amazon Aurora</b> </p> <p>Not applicable. The retention period for automated backups is managed by the DB cluster.</p> <p>Default: 1</p> <p>Constraints:</p> <ul> <li> <p>Must be a value from 0 to 35</p> </li> <li> <p>Can't be set to 0 if the DB instance is a source to read replicas</p> </li> </ul>
		 * @param {string} PreferredBackupWindow <p> The daily time range during which automated backups are created if automated backups are enabled, using the <code>BackupRetentionPeriod</code> parameter. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html#USER_WorkingWithAutomatedBackups.BackupWindow">The Backup Window</a> in the <i>Amazon RDS User Guide</i>. </p> <p> <b>Amazon Aurora</b> </p> <p>Not applicable. The daily time range for creating automated backups is managed by the DB cluster.</p> <p> The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region. To see the time blocks available, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow"> Adjusting the Preferred DB Instance Maintenance Window</a> in the <i>Amazon RDS User Guide</i>. </p> <p>Constraints:</p> <ul> <li> <p>Must be in the format <code>hh24:mi-hh24:mi</code>.</p> </li> <li> <p>Must be in Universal Coordinated Time (UTC).</p> </li> <li> <p>Must not conflict with the preferred maintenance window.</p> </li> <li> <p>Must be at least 30 minutes.</p> </li> </ul>
		 * @param {number} Port <p>The port number on which the database accepts connections.</p> <p> <b>MySQL</b> </p> <p> Default: <code>3306</code> </p> <p> Valid values: <code>1150-65535</code> </p> <p>Type: Integer</p> <p> <b>MariaDB</b> </p> <p> Default: <code>3306</code> </p> <p> Valid values: <code>1150-65535</code> </p> <p>Type: Integer</p> <p> <b>PostgreSQL</b> </p> <p> Default: <code>5432</code> </p> <p> Valid values: <code>1150-65535</code> </p> <p>Type: Integer</p> <p> <b>Oracle</b> </p> <p> Default: <code>1521</code> </p> <p> Valid values: <code>1150-65535</code> </p> <p> <b>SQL Server</b> </p> <p> Default: <code>1433</code> </p> <p> Valid values: <code>1150-65535</code> except <code>1234</code>, <code>1434</code>, <code>3260</code>, <code>3343</code>, <code>3389</code>, <code>47001</code>, and <code>49152-49156</code>.</p> <p> <b>Amazon Aurora</b> </p> <p> Default: <code>3306</code> </p> <p> Valid values: <code>1150-65535</code> </p> <p>Type: Integer</p>
		 * @param {boolean} MultiAZ A value that indicates whether the DB instance is a Multi-AZ deployment. You can't set the <code>AvailabilityZone</code> parameter if the DB instance is a Multi-AZ deployment.
		 * @param {string} EngineVersion <p>The version number of the database engine to use.</p> <p>For a list of valid engine versions, use the <code>DescribeDBEngineVersions</code> action.</p> <p>The following are the database engines and links to information about the major and minor versions that are available with Amazon RDS. Not every database engine is available for every AWS Region.</p> <p> <b>Amazon Aurora</b> </p> <p>Not applicable. The version number of the database engine to be used by the DB instance is managed by the DB cluster.</p> <p> <b>MariaDB</b> </p> <p>See <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_MariaDB.html#MariaDB.Concepts.VersionMgmt">MariaDB on Amazon RDS Versions</a> in the <i>Amazon RDS User Guide.</i> </p> <p> <b>Microsoft SQL Server</b> </p> <p>See <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_SQLServer.html#SQLServer.Concepts.General.FeatureSupport">Version and Feature Support on Amazon RDS</a> in the <i>Amazon RDS User Guide.</i> </p> <p> <b>MySQL</b> </p> <p>See <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_MySQL.html#MySQL.Concepts.VersionMgmt">MySQL on Amazon RDS Versions</a> in the <i>Amazon RDS User Guide.</i> </p> <p> <b>Oracle</b> </p> <p>See <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Appendix.Oracle.PatchComposition.html">Oracle Database Engine Release Notes</a> in the <i>Amazon RDS User Guide.</i> </p> <p> <b>PostgreSQL</b> </p> <p>See <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_PostgreSQL.html#PostgreSQL.Concepts.General.DBVersions">Supported PostgreSQL Database Versions</a> in the <i>Amazon RDS User Guide.</i> </p>
		 * @param {boolean} AutoMinorVersionUpgrade A value that indicates whether minor engine upgrades are applied automatically to the DB instance during the maintenance window. By default, minor engine upgrades are applied automatically.
		 * @param {string} LicenseModel <p>License model information for this DB instance.</p> <p> Valid values: <code>license-included</code> | <code>bring-your-own-license</code> | <code>general-public-license</code> </p>
		 * @param {number} Iops <p>The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for the DB instance. For information about valid Iops values, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html#USER_PIOPS">Amazon RDS Provisioned IOPS Storage to Improve Performance</a> in the <i>Amazon RDS User Guide</i>. </p> <p>Constraints: For MariaDB, MySQL, Oracle, and PostgreSQL DB instances, must be a multiple between .5 and 50 of the storage amount for the DB instance. For SQL Server DB instances, must be a multiple between 1 and 50 of the storage amount for the DB instance. </p>
		 * @param {string} OptionGroupName <p>Indicates that the DB instance should be associated with the specified option group.</p> <p>Permanent options, such as the TDE option for Oracle Advanced Security TDE, can't be removed from an option group. Also, that option group can't be removed from a DB instance once it is associated with a DB instance</p>
		 * @param {string} CharacterSetName <p>For supported engines, indicates that the DB instance should be associated with the specified CharacterSet.</p> <p> <b>Amazon Aurora</b> </p> <p>Not applicable. The character set is managed by the DB cluster. For more information, see <code>CreateDBCluster</code>.</p>
		 * @param {boolean} PubliclyAccessible <p>A value that indicates whether the DB instance is publicly accessible. When the DB instance is publicly accessible, it is an Internet-facing instance with a publicly resolvable DNS name, which resolves to a public IP address. When the DB instance isn't publicly accessible, it is an internal instance with a DNS name that resolves to a private IP address.</p> <p>Default: The default behavior varies depending on whether <code>DBSubnetGroupName</code> is specified.</p> <p>If <code>DBSubnetGroupName</code> isn't specified, and <code>PubliclyAccessible</code> isn't specified, the following applies:</p> <ul> <li> <p>If the default VPC in the target region doesn’t have an Internet gateway attached to it, the DB instance is private.</p> </li> <li> <p>If the default VPC in the target region has an Internet gateway attached to it, the DB instance is public.</p> </li> </ul> <p>If <code>DBSubnetGroupName</code> is specified, and <code>PubliclyAccessible</code> isn't specified, the following applies:</p> <ul> <li> <p>If the subnets are part of a VPC that doesn’t have an Internet gateway attached to it, the DB instance is private.</p> </li> <li> <p>If the subnets are part of a VPC that has an Internet gateway attached to it, the DB instance is public.</p> </li> </ul>
		 * @param {Array<Tag>} Tags Tags to assign to the DB instance.
		 * @param {string} DBClusterIdentifier The identifier of the DB cluster that the instance will belong to.
		 * @param {string} StorageType <p>Specifies the storage type to be associated with the DB instance.</p> <p> Valid values: <code>standard | gp2 | io1</code> </p> <p> If you specify <code>io1</code>, you must also include a value for the <code>Iops</code> parameter. </p> <p> Default: <code>io1</code> if the <code>Iops</code> parameter is specified, otherwise <code>gp2</code> </p>
		 * @param {string} TdeCredentialArn The ARN from the key store with which to associate the instance for TDE encryption.
		 * @param {string} TdeCredentialPassword The password for the given ARN from the key store in order to access the device.
		 * @param {boolean} StorageEncrypted <p>A value that indicates whether the DB instance is encrypted. By default, it isn't encrypted.</p> <p> <b>Amazon Aurora</b> </p> <p>Not applicable. The encryption for DB instances is managed by the DB cluster.</p>
		 * @param {string} KmsKeyId <p>The AWS KMS key identifier for an encrypted DB instance.</p> <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are creating a DB instance with the same AWS account that owns the KMS encryption key used to encrypt the new DB instance, then you can use the KMS key alias instead of the ARN for the KM encryption key.</p> <p> <b>Amazon Aurora</b> </p> <p>Not applicable. The KMS key identifier is managed by the DB cluster. For more information, see <code>CreateDBCluster</code>.</p> <p>If <code>StorageEncrypted</code> is enabled, and you do not specify a value for the <code>KmsKeyId</code> parameter, then Amazon RDS will use your default encryption key. AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS Region.</p>
		 * @param {string} Domain <p>The Active Directory directory ID to create the DB instance in. Currently, only Microsoft SQL Server and Oracle DB instances can be created in an Active Directory Domain.</p> <p>For Microsoft SQL Server DB instances, Amazon RDS can use Windows Authentication to authenticate users that connect to the DB instance. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_SQLServerWinAuth.html"> Using Windows Authentication with an Amazon RDS DB Instance Running Microsoft SQL Server</a> in the <i>Amazon RDS User Guide</i>.</p> <p>For Oracle DB instances, Amazon RDS can use Kerberos Authentication to authenticate users that connect to the DB instance. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/oracle-kerberos.html"> Using Kerberos Authentication with Amazon RDS for Oracle</a> in the <i>Amazon RDS User Guide</i>.</p>
		 * @param {boolean} CopyTagsToSnapshot <p>A value that indicates whether to copy tags from the DB instance to snapshots of the DB instance. By default, tags are not copied.</p> <p> <b>Amazon Aurora</b> </p> <p>Not applicable. Copying tags to snapshots is managed by the DB cluster. Setting this value for an Aurora DB instance has no effect on the DB cluster setting.</p>
		 * @param {number} MonitoringInterval <p>The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collecting Enhanced Monitoring metrics, specify 0. The default is 0.</p> <p>If <code>MonitoringRoleArn</code> is specified, then you must also set <code>MonitoringInterval</code> to a value other than 0.</p> <p>Valid Values: <code>0, 1, 5, 10, 15, 30, 60</code> </p>
		 * @param {string} MonitoringRoleArn <p>The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to Amazon CloudWatch Logs. For example, <code>arn:aws:iam:123456789012:role/emaccess</code>. For information on creating a monitoring role, go to <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.OS.html#USER_Monitoring.OS.Enabling">Setting Up and Enabling Enhanced Monitoring</a> in the <i>Amazon RDS User Guide</i>.</p> <p>If <code>MonitoringInterval</code> is set to a value other than 0, then you must supply a <code>MonitoringRoleArn</code> value.</p>
		 * @param {string} DomainIAMRoleName Specify the name of the IAM role to be used when making API calls to the Directory Service.
		 * @param {number} PromotionTier <p>A value that specifies the order in which an Aurora Replica is promoted to the primary instance after a failure of the existing primary instance. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Backups.html#Aurora.Managing.FaultTolerance"> Fault Tolerance for an Aurora DB Cluster</a> in the <i>Amazon Aurora User Guide</i>. </p> <p>Default: 1</p> <p>Valid Values: 0 - 15</p>
		 * @param {string} Timezone The time zone of the DB instance. The time zone parameter is currently supported only by <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_SQLServer.html#SQLServer.Concepts.General.TimeZone">Microsoft SQL Server</a>. 
		 * @param {boolean} EnableIAMDatabaseAuthentication <p>A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. By default, mapping is disabled.</p> <p>You can enable IAM database authentication for the following database engines:</p> <p> <b>Amazon Aurora</b> </p> <p>Not applicable. Mapping AWS IAM accounts to database accounts is managed by the DB cluster.</p> <p> <b>MySQL</b> </p> <ul> <li> <p>For MySQL 5.6, minor version 5.6.34 or higher</p> </li> <li> <p>For MySQL 5.7, minor version 5.7.16 or higher</p> </li> <li> <p>For MySQL 8.0, minor version 8.0.16 or higher</p> </li> </ul> <p> <b>PostgreSQL</b> </p> <ul> <li> <p>For PostgreSQL 9.5, minor version 9.5.15 or higher</p> </li> <li> <p>For PostgreSQL 9.6, minor version 9.6.11 or higher</p> </li> <li> <p>PostgreSQL 10.6, 10.7, and 10.9</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html"> IAM Database Authentication for MySQL and PostgreSQL</a> in the <i>Amazon RDS User Guide.</i> </p>
		 * @param {boolean} EnablePerformanceInsights <p>A value that indicates whether to enable Performance Insights for the DB instance. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html">Using Amazon Performance Insights</a> in the <i>Amazon Relational Database Service User Guide</i>. </p>
		 * @param {string} PerformanceInsightsKMSKeyId <p>The AWS KMS key identifier for encryption of Performance Insights data. The KMS key ID is the Amazon Resource Name (ARN), KMS key identifier, or the KMS key alias for the KMS encryption key.</p> <p>If you do not specify a value for <code>PerformanceInsightsKMSKeyId</code>, then Amazon RDS uses your default encryption key. AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS Region.</p>
		 * @param {number} PerformanceInsightsRetentionPeriod The amount of time, in days, to retain Performance Insights data. Valid values are 7 or 731 (2 years). 
		 * @param {Array<String>} EnableCloudwatchLogsExports The list of log types that need to be enabled for exporting to CloudWatch Logs. The values in the list depend on the DB engine being used. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs </a> in the <i>Amazon Relational Database Service User Guide</i>.
		 * @param {Array<ProcessorFeature>} ProcessorFeatures The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.
		 * @param {boolean} DeletionProtection <p>A value that indicates whether the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_DeleteInstance.html"> Deleting a DB Instance</a>. </p> <p> <b>Amazon Aurora</b> </p> <p>Not applicable. You can enable or disable deletion protection for the DB cluster. For more information, see <code>CreateDBCluster</code>. DB instances in a DB cluster can be deleted even when deletion protection is enabled for the DB cluster. </p>
		 * @param {number} MaxAllocatedStorage The upper limit to which Amazon RDS can automatically scale the storage of the DB instance.
		 * @return {void} Success
		 */
		GET_CreateDBInstance(DBName: string, DBInstanceIdentifier: string, AllocatedStorage: number, DBInstanceClass: string, Engine: string, MasterUsername: string, MasterUserPassword: string, DBSecurityGroups: Array<String>, VpcSecurityGroupIds: Array<String>, AvailabilityZone: string, DBSubnetGroupName: string, PreferredMaintenanceWindow: string, DBParameterGroupName: string, BackupRetentionPeriod: number, PreferredBackupWindow: string, Port: number, MultiAZ: boolean, EngineVersion: string, AutoMinorVersionUpgrade: boolean, LicenseModel: string, Iops: number, OptionGroupName: string, CharacterSetName: string, PubliclyAccessible: boolean, Tags: Array<Tag>, DBClusterIdentifier: string, StorageType: string, TdeCredentialArn: string, TdeCredentialPassword: string, StorageEncrypted: boolean, KmsKeyId: string, Domain: string, CopyTagsToSnapshot: boolean, MonitoringInterval: number, MonitoringRoleArn: string, DomainIAMRoleName: string, PromotionTier: number, Timezone: string, EnableIAMDatabaseAuthentication: boolean, EnablePerformanceInsights: boolean, PerformanceInsightsKMSKeyId: string, PerformanceInsightsRetentionPeriod: number, EnableCloudwatchLogsExports: Array<String>, ProcessorFeatures: Array<ProcessorFeature>, DeletionProtection: boolean, MaxAllocatedStorage: number, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=CreateDBInstance?DBName=' + (DBName == null ? '' : encodeURIComponent(DBName)) + '&DBInstanceIdentifier=' + (DBInstanceIdentifier == null ? '' : encodeURIComponent(DBInstanceIdentifier)) + '&AllocatedStorage=' + AllocatedStorage + '&DBInstanceClass=' + (DBInstanceClass == null ? '' : encodeURIComponent(DBInstanceClass)) + '&Engine=' + (Engine == null ? '' : encodeURIComponent(Engine)) + '&MasterUsername=' + (MasterUsername == null ? '' : encodeURIComponent(MasterUsername)) + '&MasterUserPassword=' + (MasterUserPassword == null ? '' : encodeURIComponent(MasterUserPassword)) + '&' + DBSecurityGroups.map(z => `DBSecurityGroups=${z}`).join('&') + '&' + VpcSecurityGroupIds.map(z => `VpcSecurityGroupIds=${z}`).join('&') + '&AvailabilityZone=' + (AvailabilityZone == null ? '' : encodeURIComponent(AvailabilityZone)) + '&DBSubnetGroupName=' + (DBSubnetGroupName == null ? '' : encodeURIComponent(DBSubnetGroupName)) + '&PreferredMaintenanceWindow=' + (PreferredMaintenanceWindow == null ? '' : encodeURIComponent(PreferredMaintenanceWindow)) + '&DBParameterGroupName=' + (DBParameterGroupName == null ? '' : encodeURIComponent(DBParameterGroupName)) + '&BackupRetentionPeriod=' + BackupRetentionPeriod + '&PreferredBackupWindow=' + (PreferredBackupWindow == null ? '' : encodeURIComponent(PreferredBackupWindow)) + '&Port=' + Port + '&MultiAZ=' + MultiAZ + '&EngineVersion=' + (EngineVersion == null ? '' : encodeURIComponent(EngineVersion)) + '&AutoMinorVersionUpgrade=' + AutoMinorVersionUpgrade + '&LicenseModel=' + (LicenseModel == null ? '' : encodeURIComponent(LicenseModel)) + '&Iops=' + Iops + '&OptionGroupName=' + (OptionGroupName == null ? '' : encodeURIComponent(OptionGroupName)) + '&CharacterSetName=' + (CharacterSetName == null ? '' : encodeURIComponent(CharacterSetName)) + '&PubliclyAccessible=' + PubliclyAccessible + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&DBClusterIdentifier=' + (DBClusterIdentifier == null ? '' : encodeURIComponent(DBClusterIdentifier)) + '&StorageType=' + (StorageType == null ? '' : encodeURIComponent(StorageType)) + '&TdeCredentialArn=' + (TdeCredentialArn == null ? '' : encodeURIComponent(TdeCredentialArn)) + '&TdeCredentialPassword=' + (TdeCredentialPassword == null ? '' : encodeURIComponent(TdeCredentialPassword)) + '&StorageEncrypted=' + StorageEncrypted + '&KmsKeyId=' + (KmsKeyId == null ? '' : encodeURIComponent(KmsKeyId)) + '&Domain=' + (Domain == null ? '' : encodeURIComponent(Domain)) + '&CopyTagsToSnapshot=' + CopyTagsToSnapshot + '&MonitoringInterval=' + MonitoringInterval + '&MonitoringRoleArn=' + (MonitoringRoleArn == null ? '' : encodeURIComponent(MonitoringRoleArn)) + '&DomainIAMRoleName=' + (DomainIAMRoleName == null ? '' : encodeURIComponent(DomainIAMRoleName)) + '&PromotionTier=' + PromotionTier + '&Timezone=' + (Timezone == null ? '' : encodeURIComponent(Timezone)) + '&EnableIAMDatabaseAuthentication=' + EnableIAMDatabaseAuthentication + '&EnablePerformanceInsights=' + EnablePerformanceInsights + '&PerformanceInsightsKMSKeyId=' + (PerformanceInsightsKMSKeyId == null ? '' : encodeURIComponent(PerformanceInsightsKMSKeyId)) + '&PerformanceInsightsRetentionPeriod=' + PerformanceInsightsRetentionPeriod + '&' + EnableCloudwatchLogsExports.map(z => `EnableCloudwatchLogsExports=${z}`).join('&') + '&' + ProcessorFeatures.map(z => `ProcessorFeatures=${z}`).join('&') + '&DeletionProtection=' + DeletionProtection + '&MaxAllocatedStorage=' + MaxAllocatedStorage + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a new DB instance that acts as a read replica for an existing source DB instance. You can create a read replica for a DB instance running MySQL, MariaDB, Oracle, PostgreSQL, or SQL Server. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html">Working with Read Replicas</a> in the <i>Amazon RDS User Guide</i>. </p> <p>Amazon Aurora doesn't support this action. Call the <code>CreateDBInstance</code> action to create a DB instance for an Aurora DB cluster.</p> <p>All read replica DB instances are created with backups disabled. All other DB instance attributes (including DB security groups and DB parameter groups) are inherited from the source DB instance, except as specified.</p> <important> <p>Your source DB instance must have backup retention enabled. </p> </important>
		 * Get /#Action=CreateDBInstanceReadReplica
		 * @param {string} DBInstanceIdentifier The DB instance identifier of the read replica. This identifier is the unique key that identifies a DB instance. This parameter is stored as a lowercase string.
		 * @param {string} SourceDBInstanceIdentifier <p>The identifier of the DB instance that will act as the source for the read replica. Each DB instance can have up to five read replicas.</p> <p>Constraints:</p> <ul> <li> <p>Must be the identifier of an existing MySQL, MariaDB, Oracle, PostgreSQL, or SQL Server DB instance.</p> </li> <li> <p>Can specify a DB instance that is a MySQL read replica only if the source is running MySQL 5.6 or later.</p> </li> <li> <p>For the limitations of Oracle read replicas, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/oracle-read-replicas.html">Read Replica Limitations with Oracle</a> in the <i>Amazon RDS User Guide</i>.</p> </li> <li> <p>For the limitations of SQL Server read replicas, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/SQLServer.ReadReplicas.Limitations.html">Read Replica Limitations with Microsoft SQL Server</a> in the <i>Amazon RDS User Guide</i>.</p> </li> <li> <p>Can specify a PostgreSQL DB instance only if the source is running PostgreSQL 9.3.5 or later (9.4.7 and higher for cross-region replication).</p> </li> <li> <p>The specified DB instance must have automatic backups enabled, that is, its backup retention period must be greater than 0.</p> </li> <li> <p>If the source DB instance is in the same AWS Region as the read replica, specify a valid DB instance identifier.</p> </li> <li> <p>If the source DB instance is in a different AWS Region from the read replica, specify a valid DB instance ARN. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing">Constructing an ARN for Amazon RDS</a> in the <i>Amazon RDS User Guide</i>. This doesn't apply to SQL Server, which doesn't support cross-region replicas.</p> </li> </ul>
		 * @param {string} DBInstanceClass <p>The compute and memory capacity of the read replica, for example, <code>db.m4.large</code>. Not all DB instance classes are available in all AWS Regions, or for all database engines. For the full list of DB instance classes, and availability for your engine, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html">DB Instance Class</a> in the <i>Amazon RDS User Guide.</i> </p> <p>Default: Inherits from the source DB instance.</p>
		 * @param {string} AvailabilityZone <p>The Availability Zone (AZ) where the read replica will be created.</p> <p>Default: A random, system-chosen Availability Zone in the endpoint's AWS Region.</p> <p> Example: <code>us-east-1d</code> </p>
		 * @param {number} Port <p>The port number that the DB instance uses for connections.</p> <p>Default: Inherits from the source DB instance</p> <p>Valid Values: <code>1150-65535</code> </p>
		 * @param {boolean} MultiAZ <p>A value that indicates whether the read replica is in a Multi-AZ deployment. </p> <p>You can create a read replica as a Multi-AZ DB instance. RDS creates a standby of your replica in another Availability Zone for failover support for the replica. Creating your read replica as a Multi-AZ DB instance is independent of whether the source database is a Multi-AZ DB instance. </p>
		 * @param {boolean} AutoMinorVersionUpgrade <p>A value that indicates whether minor engine upgrades are applied automatically to the read replica during the maintenance window.</p> <p>Default: Inherits from the source DB instance</p>
		 * @param {number} Iops The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for the DB instance.
		 * @param {string} OptionGroupName <p>The option group the DB instance is associated with. If omitted, the option group associated with the source instance is used.</p> <note> <p>For SQL Server, you must use the option group associated with the source instance.</p> </note>
		 * @param {string} DBParameterGroupName <p>The name of the DB parameter group to associate with this DB instance.</p> <p>If you do not specify a value for <code>DBParameterGroupName</code>, then Amazon RDS uses the <code>DBParameterGroup</code> of source DB instance for a same region read replica, or the default <code>DBParameterGroup</code> for the specified DB engine for a cross region read replica.</p> <note> <p>Currently, specifying a parameter group for this operation is only supported for Oracle DB instances.</p> </note> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 255 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Can't end with a hyphen or contain two consecutive hyphens</p> </li> </ul>
		 * @param {boolean} PubliclyAccessible A value that indicates whether the DB instance is publicly accessible. When the DB instance is publicly accessible, it is an Internet-facing instance with a publicly resolvable DNS name, which resolves to a public IP address. When the DB instance isn't publicly accessible, it is an internal instance with a DNS name that resolves to a private IP address. For more information, see <a>CreateDBInstance</a>.
		 * @param {string} DBSubnetGroupName <p>Specifies a DB subnet group for the DB instance. The new DB instance is created in the VPC associated with the DB subnet group. If no DB subnet group is specified, then the new DB instance isn't created in a VPC.</p> <p>Constraints:</p> <ul> <li> <p>Can only be specified if the source DB instance identifier specifies a DB instance in another AWS Region.</p> </li> <li> <p>If supplied, must match the name of an existing DBSubnetGroup.</p> </li> <li> <p>The specified DB subnet group must be in the same AWS Region in which the operation is running.</p> </li> <li> <p>All read replicas in one AWS Region that are created from the same source DB instance must either:&gt;</p> <ul> <li> <p>Specify DB subnet groups from the same VPC. All these read replicas are created in the same VPC.</p> </li> <li> <p>Not specify a DB subnet group. All these read replicas are created outside of any VPC.</p> </li> </ul> </li> </ul> <p>Example: <code>mySubnetgroup</code> </p>
		 * @param {Array<String>} VpcSecurityGroupIds <p> A list of EC2 VPC security groups to associate with the read replica. </p> <p> Default: The default EC2 VPC security group for the DB subnet group's VPC. </p>
		 * @param {string} StorageType <p>Specifies the storage type to be associated with the read replica.</p> <p> Valid values: <code>standard | gp2 | io1</code> </p> <p> If you specify <code>io1</code>, you must also include a value for the <code>Iops</code> parameter. </p> <p> Default: <code>io1</code> if the <code>Iops</code> parameter is specified, otherwise <code>gp2</code> </p>
		 * @param {boolean} CopyTagsToSnapshot A value that indicates whether to copy all tags from the read replica to snapshots of the read replica. By default, tags are not copied.
		 * @param {number} MonitoringInterval <p>The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the read replica. To disable collecting Enhanced Monitoring metrics, specify 0. The default is 0.</p> <p>If <code>MonitoringRoleArn</code> is specified, then you must also set <code>MonitoringInterval</code> to a value other than 0.</p> <p>Valid Values: <code>0, 1, 5, 10, 15, 30, 60</code> </p>
		 * @param {string} MonitoringRoleArn <p>The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to Amazon CloudWatch Logs. For example, <code>arn:aws:iam:123456789012:role/emaccess</code>. For information on creating a monitoring role, go to <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.html#USER_Monitoring.OS.IAMRole">To create an IAM role for Amazon RDS Enhanced Monitoring</a> in the <i>Amazon RDS User Guide</i>.</p> <p>If <code>MonitoringInterval</code> is set to a value other than 0, then you must supply a <code>MonitoringRoleArn</code> value.</p>
		 * @param {string} KmsKeyId <p>The AWS KMS key ID for an encrypted read replica. The KMS key ID is the Amazon Resource Name (ARN), KMS key identifier, or the KMS key alias for the KMS encryption key.</p> <p>If you create an encrypted read replica in the same AWS Region as the source DB instance, then you do not have to specify a value for this parameter. The read replica is encrypted with the same KMS key as the source DB instance.</p> <p>If you create an encrypted read replica in a different AWS Region, then you must specify a KMS key for the destination AWS Region. KMS encryption keys are specific to the AWS Region that they are created in, and you can't use encryption keys from one AWS Region in another AWS Region.</p> <p>You can't create an encrypted read replica from an unencrypted DB instance.</p>
		 * @param {string} PreSignedUrl <p>The URL that contains a Signature Version 4 signed request for the <code>CreateDBInstanceReadReplica</code> API action in the source AWS Region that contains the source DB instance. </p> <p>You must specify this parameter when you create an encrypted read replica from another AWS Region by using the Amazon RDS API. Don't specify <code>PreSignedUrl</code> when you are creating an encrypted read replica in the same AWS Region.</p> <p>The presigned URL must be a valid request for the <code>CreateDBInstanceReadReplica</code> API action that can be executed in the source AWS Region that contains the encrypted source DB instance. The presigned URL request must contain the following parameter values: </p> <ul> <li> <p> <code>DestinationRegion</code> - The AWS Region that the encrypted read replica is created in. This AWS Region is the same one where the <code>CreateDBInstanceReadReplica</code> action is called that contains this presigned URL.</p> <p>For example, if you create an encrypted DB instance in the us-west-1 AWS Region, from a source DB instance in the us-east-2 AWS Region, then you call the <code>CreateDBInstanceReadReplica</code> action in the us-east-1 AWS Region and provide a presigned URL that contains a call to the <code>CreateDBInstanceReadReplica</code> action in the us-west-2 AWS Region. For this example, the <code>DestinationRegion</code> in the presigned URL must be set to the us-east-1 AWS Region. </p> </li> <li> <p> <code>KmsKeyId</code> - The AWS KMS key identifier for the key to use to encrypt the read replica in the destination AWS Region. This is the same identifier for both the <code>CreateDBInstanceReadReplica</code> action that is called in the destination AWS Region, and the action contained in the presigned URL. </p> </li> <li> <p> <code>SourceDBInstanceIdentifier</code> - The DB instance identifier for the encrypted DB instance to be replicated. This identifier must be in the Amazon Resource Name (ARN) format for the source AWS Region. For example, if you are creating an encrypted read replica from a DB instance in the us-west-2 AWS Region, then your <code>SourceDBInstanceIdentifier</code> looks like the following example: <code>arn:aws:rds:us-west-2:123456789012:instance:mysql-instance1-20161115</code>. </p> </li> </ul> <p>To learn how to generate a Signature Version 4 signed request, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-query-string-auth.html">Authenticating Requests: Using Query Parameters (AWS Signature Version 4)</a> and <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 Signing Process</a>. </p> <note> <p>If you are using an AWS SDK tool or the AWS CLI, you can specify <code>SourceRegion</code> (or <code>--source-region</code> for the AWS CLI) instead of specifying <code>PreSignedUrl</code> manually. Specifying <code>SourceRegion</code> autogenerates a presigned URL that is a valid request for the operation that can be executed in the source AWS Region.</p> <p> <code>SourceRegion</code> isn't supported for SQL Server, because SQL Server on Amazon RDS doesn't support cross-region read replicas.</p> </note><note><p>If you supply a value for this operation's <code>SourceRegion</code> parameter, a pre-signed URL will be calculated on your behalf.</p></note>
		 * @param {boolean} EnableIAMDatabaseAuthentication <p>A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. By default, mapping is disabled. For information about the supported DB engines, see <a>CreateDBInstance</a>.</p> <p>For more information about IAM database authentication, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html"> IAM Database Authentication for MySQL and PostgreSQL</a> in the <i>Amazon RDS User Guide.</i> </p>
		 * @param {boolean} EnablePerformanceInsights <p>A value that indicates whether to enable Performance Insights for the read replica. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html">Using Amazon Performance Insights</a> in the <i>Amazon RDS User Guide</i>. </p>
		 * @param {string} PerformanceInsightsKMSKeyId <p>The AWS KMS key identifier for encryption of Performance Insights data. The KMS key ID is the Amazon Resource Name (ARN), KMS key identifier, or the KMS key alias for the KMS encryption key.</p> <p>If you do not specify a value for <code>PerformanceInsightsKMSKeyId</code>, then Amazon RDS uses your default encryption key. AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS Region.</p>
		 * @param {number} PerformanceInsightsRetentionPeriod The amount of time, in days, to retain Performance Insights data. Valid values are 7 or 731 (2 years). 
		 * @param {Array<String>} EnableCloudwatchLogsExports The list of logs that the new DB instance is to export to CloudWatch Logs. The values in the list depend on the DB engine being used. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs </a> in the <i>Amazon RDS User Guide</i>.
		 * @param {Array<ProcessorFeature>} ProcessorFeatures The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.
		 * @param {boolean} UseDefaultProcessorFeatures A value that indicates whether the DB instance class of the DB instance uses its default processor features.
		 * @param {boolean} DeletionProtection A value that indicates whether the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_DeleteInstance.html"> Deleting a DB Instance</a>. 
		 * @param {string} Domain <p>The Active Directory directory ID to create the DB instance in.</p> <p>For Oracle DB instances, Amazon RDS can use Kerberos Authentication to authenticate users that connect to the DB instance. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/oracle-kerberos.html"> Using Kerberos Authentication with Amazon RDS for Oracle</a> in the <i>Amazon RDS User Guide</i>.</p> <p>For Microsoft SQL Server DB instances, Amazon RDS can use Windows Authentication to authenticate users that connect to the DB instance. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_SQLServerWinAuth.html"> Using Windows Authentication with an Amazon RDS DB Instance Running Microsoft SQL Server</a> in the <i>Amazon RDS User Guide</i>.</p>
		 * @param {string} DomainIAMRoleName Specify the name of the IAM role to be used when making API calls to the Directory Service.
		 * @param {string} SourceRegion The ID of the region that contains the source for the read replica.
		 * @return {void} Success
		 */
		GET_CreateDBInstanceReadReplica(DBInstanceIdentifier: string, SourceDBInstanceIdentifier: string, DBInstanceClass: string, AvailabilityZone: string, Port: number, MultiAZ: boolean, AutoMinorVersionUpgrade: boolean, Iops: number, OptionGroupName: string, DBParameterGroupName: string, PubliclyAccessible: boolean, Tags: Array<Tag>, DBSubnetGroupName: string, VpcSecurityGroupIds: Array<String>, StorageType: string, CopyTagsToSnapshot: boolean, MonitoringInterval: number, MonitoringRoleArn: string, KmsKeyId: string, PreSignedUrl: string, EnableIAMDatabaseAuthentication: boolean, EnablePerformanceInsights: boolean, PerformanceInsightsKMSKeyId: string, PerformanceInsightsRetentionPeriod: number, EnableCloudwatchLogsExports: Array<String>, ProcessorFeatures: Array<ProcessorFeature>, UseDefaultProcessorFeatures: boolean, DeletionProtection: boolean, Domain: string, DomainIAMRoleName: string, SourceRegion: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=CreateDBInstanceReadReplica?DBInstanceIdentifier=' + (DBInstanceIdentifier == null ? '' : encodeURIComponent(DBInstanceIdentifier)) + '&SourceDBInstanceIdentifier=' + (SourceDBInstanceIdentifier == null ? '' : encodeURIComponent(SourceDBInstanceIdentifier)) + '&DBInstanceClass=' + (DBInstanceClass == null ? '' : encodeURIComponent(DBInstanceClass)) + '&AvailabilityZone=' + (AvailabilityZone == null ? '' : encodeURIComponent(AvailabilityZone)) + '&Port=' + Port + '&MultiAZ=' + MultiAZ + '&AutoMinorVersionUpgrade=' + AutoMinorVersionUpgrade + '&Iops=' + Iops + '&OptionGroupName=' + (OptionGroupName == null ? '' : encodeURIComponent(OptionGroupName)) + '&DBParameterGroupName=' + (DBParameterGroupName == null ? '' : encodeURIComponent(DBParameterGroupName)) + '&PubliclyAccessible=' + PubliclyAccessible + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&DBSubnetGroupName=' + (DBSubnetGroupName == null ? '' : encodeURIComponent(DBSubnetGroupName)) + '&' + VpcSecurityGroupIds.map(z => `VpcSecurityGroupIds=${z}`).join('&') + '&StorageType=' + (StorageType == null ? '' : encodeURIComponent(StorageType)) + '&CopyTagsToSnapshot=' + CopyTagsToSnapshot + '&MonitoringInterval=' + MonitoringInterval + '&MonitoringRoleArn=' + (MonitoringRoleArn == null ? '' : encodeURIComponent(MonitoringRoleArn)) + '&KmsKeyId=' + (KmsKeyId == null ? '' : encodeURIComponent(KmsKeyId)) + '&PreSignedUrl=' + (PreSignedUrl == null ? '' : encodeURIComponent(PreSignedUrl)) + '&EnableIAMDatabaseAuthentication=' + EnableIAMDatabaseAuthentication + '&EnablePerformanceInsights=' + EnablePerformanceInsights + '&PerformanceInsightsKMSKeyId=' + (PerformanceInsightsKMSKeyId == null ? '' : encodeURIComponent(PerformanceInsightsKMSKeyId)) + '&PerformanceInsightsRetentionPeriod=' + PerformanceInsightsRetentionPeriod + '&' + EnableCloudwatchLogsExports.map(z => `EnableCloudwatchLogsExports=${z}`).join('&') + '&' + ProcessorFeatures.map(z => `ProcessorFeatures=${z}`).join('&') + '&UseDefaultProcessorFeatures=' + UseDefaultProcessorFeatures + '&DeletionProtection=' + DeletionProtection + '&Domain=' + (Domain == null ? '' : encodeURIComponent(Domain)) + '&DomainIAMRoleName=' + (DomainIAMRoleName == null ? '' : encodeURIComponent(DomainIAMRoleName)) + '&SourceRegion=' + (SourceRegion == null ? '' : encodeURIComponent(SourceRegion)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a new DB parameter group.</p> <p> A DB parameter group is initially created with the default parameters for the database engine used by the DB instance. To provide custom values for any of the parameters, you must modify the group after creating it using <i>ModifyDBParameterGroup</i>. Once you've created a DB parameter group, you need to associate it with your DB instance using <i>ModifyDBInstance</i>. When you associate a new DB parameter group with a running DB instance, you need to reboot the DB instance without failover for the new DB parameter group and associated settings to take effect. </p> <important> <p>After you create a DB parameter group, you should wait at least 5 minutes before creating your first DB instance that uses that DB parameter group as the default parameter group. This allows Amazon RDS to fully complete the create action before the parameter group is used as the default for a new DB instance. This is especially important for parameters that are critical when creating the default database for a DB instance, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon RDS console</a> or the <i>DescribeDBParameters</i> command to verify that your DB parameter group has been created or modified.</p> </important>
		 * Get /#Action=CreateDBParameterGroup
		 * @param {string} DBParameterGroupName <p>The name of the DB parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 255 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Can't end with a hyphen or contain two consecutive hyphens</p> </li> </ul> <note> <p>This value is stored as a lowercase string.</p> </note>
		 * @param {string} DBParameterGroupFamily <p>The DB parameter group family name. A DB parameter group can be associated with one and only one DB parameter group family, and can be applied only to a DB instance running a database engine and engine version compatible with that DB parameter group family.</p> <p>To list all of the available parameter group families, use the following command:</p> <p> <code>aws rds describe-db-engine-versions --query "DBEngineVersions[].DBParameterGroupFamily"</code> </p> <note> <p>The output contains duplicates.</p> </note>
		 * @param {string} Description The description for the DB parameter group.
		 * @param {Array<Tag>} Tags Tags to assign to the DB parameter group.
		 * @return {void} Success
		 */
		GET_CreateDBParameterGroup(DBParameterGroupName: string, DBParameterGroupFamily: string, Description: string, Tags: Array<Tag>, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=CreateDBParameterGroup?DBParameterGroupName=' + (DBParameterGroupName == null ? '' : encodeURIComponent(DBParameterGroupName)) + '&DBParameterGroupFamily=' + (DBParameterGroupFamily == null ? '' : encodeURIComponent(DBParameterGroupFamily)) + '&Description=' + (Description == null ? '' : encodeURIComponent(Description)) + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <note> <p>This is prerelease documentation for the RDS Database Proxy feature in preview release. It is subject to change.</p> </note> <p>Creates a new DB proxy.</p>
		 * Get /#Action=CreateDBProxy
		 * @param {string} DBProxyName The identifier for the proxy. This name must be unique for all proxies owned by your AWS account in the specified AWS Region. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it can't end with a hyphen or contain two consecutive hyphens.
		 * @param {EngineFamily} EngineFamily The kinds of databases that the proxy can connect to. This value determines which database network protocol the proxy recognizes when it interprets network traffic to and from the database. The engine family applies to MySQL and PostgreSQL for both RDS and Aurora.
		 * @param {Array<UserAuthConfig>} Auth The authorization mechanism that the proxy uses.
		 * @param {string} RoleArn The Amazon Resource Name (ARN) of the IAM role that the proxy uses to access secrets in AWS Secrets Manager.
		 * @param {Array<String>} VpcSubnetIds One or more VPC subnet IDs to associate with the new proxy.
		 * @param {Array<String>} VpcSecurityGroupIds One or more VPC security group IDs to associate with the new proxy.
		 * @param {boolean} RequireTLS A Boolean parameter that specifies whether Transport Layer Security (TLS) encryption is required for connections to the proxy. By enabling this setting, you can enforce encrypted TLS connections to the proxy.
		 * @param {number} IdleClientTimeout The number of seconds that a connection to the proxy can be inactive before the proxy disconnects it. You can set this value higher or lower than the connection timeout limit for the associated database.
		 * @param {boolean} DebugLogging Whether the proxy includes detailed information about SQL statements in its logs. This information helps you to debug issues involving SQL behavior or the performance and scalability of the proxy connections. The debug information includes the text of SQL statements that you submit through the proxy. Thus, only enable this setting when needed for debugging, and only when you have security measures in place to safeguard any sensitive information that appears in the logs.
		 * @param {Array<Tag>} Tags An optional set of key-value pairs to associate arbitrary data of your choosing with the proxy.
		 * @return {void} Success
		 */
		GET_CreateDBProxy(DBProxyName: string, EngineFamily: EngineFamily, Auth: Array<UserAuthConfig>, RoleArn: string, VpcSubnetIds: Array<String>, VpcSecurityGroupIds: Array<String>, RequireTLS: boolean, IdleClientTimeout: number, DebugLogging: boolean, Tags: Array<Tag>, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=CreateDBProxy?DBProxyName=' + (DBProxyName == null ? '' : encodeURIComponent(DBProxyName)) + '&EngineFamily=' + EngineFamily + '&' + Auth.map(z => `Auth=${z}`).join('&') + '&RoleArn=' + (RoleArn == null ? '' : encodeURIComponent(RoleArn)) + '&' + VpcSubnetIds.map(z => `VpcSubnetIds=${z}`).join('&') + '&' + VpcSecurityGroupIds.map(z => `VpcSecurityGroupIds=${z}`).join('&') + '&RequireTLS=' + RequireTLS + '&IdleClientTimeout=' + IdleClientTimeout + '&DebugLogging=' + DebugLogging + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a new DB security group. DB security groups control access to a DB instance.</p> <note> <p>A DB security group controls access to EC2-Classic DB instances that are not in a VPC.</p> </note>
		 * Get /#Action=CreateDBSecurityGroup
		 * @param {string} DBSecurityGroupName <p>The name for the DB security group. This value is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 255 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Can't end with a hyphen or contain two consecutive hyphens</p> </li> <li> <p>Must not be "Default"</p> </li> </ul> <p>Example: <code>mysecuritygroup</code> </p>
		 * @param {string} DBSecurityGroupDescription The description for the DB security group.
		 * @param {Array<Tag>} Tags Tags to assign to the DB security group.
		 * @return {void} Success
		 */
		GET_CreateDBSecurityGroup(DBSecurityGroupName: string, DBSecurityGroupDescription: string, Tags: Array<Tag>, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=CreateDBSecurityGroup?DBSecurityGroupName=' + (DBSecurityGroupName == null ? '' : encodeURIComponent(DBSecurityGroupName)) + '&DBSecurityGroupDescription=' + (DBSecurityGroupDescription == null ? '' : encodeURIComponent(DBSecurityGroupDescription)) + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a DBSnapshot. The source DBInstance must be in "available" state.
		 * Get /#Action=CreateDBSnapshot
		 * @param {string} DBSnapshotIdentifier <p>The identifier for the DB snapshot.</p> <p>Constraints:</p> <ul> <li> <p>Can't be null, empty, or blank</p> </li> <li> <p>Must contain from 1 to 255 letters, numbers, or hyphens</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Can't end with a hyphen or contain two consecutive hyphens</p> </li> </ul> <p>Example: <code>my-snapshot-id</code> </p>
		 * @param {string} DBInstanceIdentifier <p>The identifier of the DB instance that you want to create the snapshot of.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing DBInstance.</p> </li> </ul>
		 * @return {void} Success
		 */
		GET_CreateDBSnapshot(DBSnapshotIdentifier: string, DBInstanceIdentifier: string, Tags: Array<Tag>, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=CreateDBSnapshot?DBSnapshotIdentifier=' + (DBSnapshotIdentifier == null ? '' : encodeURIComponent(DBSnapshotIdentifier)) + '&DBInstanceIdentifier=' + (DBInstanceIdentifier == null ? '' : encodeURIComponent(DBInstanceIdentifier)) + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the AWS Region.
		 * Get /#Action=CreateDBSubnetGroup
		 * @param {string} DBSubnetGroupName <p>The name for the DB subnet group. This value is stored as a lowercase string.</p> <p>Constraints: Must contain no more than 255 letters, numbers, periods, underscores, spaces, or hyphens. Must not be default.</p> <p>Example: <code>mySubnetgroup</code> </p>
		 * @param {string} DBSubnetGroupDescription The description for the DB subnet group.
		 * @param {Array<String>} SubnetIds The EC2 Subnet IDs for the DB subnet group.
		 * @param {Array<Tag>} Tags Tags to assign to the DB subnet group.
		 * @return {void} Success
		 */
		GET_CreateDBSubnetGroup(DBSubnetGroupName: string, DBSubnetGroupDescription: string, SubnetIds: Array<String>, Tags: Array<Tag>, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=CreateDBSubnetGroup?DBSubnetGroupName=' + (DBSubnetGroupName == null ? '' : encodeURIComponent(DBSubnetGroupName)) + '&DBSubnetGroupDescription=' + (DBSubnetGroupDescription == null ? '' : encodeURIComponent(DBSubnetGroupDescription)) + '&' + SubnetIds.map(z => `SubnetIds=${z}`).join('&') + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates an RDS event notification subscription. This action requires a topic Amazon Resource Name (ARN) created by either the RDS console, the SNS console, or the SNS API. To obtain an ARN with SNS, you must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in the SNS console.</p> <p>You can specify the type of source (SourceType) you want to be notified of, provide a list of RDS sources (SourceIds) that triggers the events, and provide a list of event categories (EventCategories) for events you want to be notified of. For example, you can specify SourceType = db-instance, SourceIds = mydbinstance1, mydbinstance2 and EventCategories = Availability, Backup.</p> <p>If you specify both the SourceType and SourceIds, such as SourceType = db-instance and SourceIdentifier = myDBInstance1, you are notified of all the db-instance events for the specified source. If you specify a SourceType but do not specify a SourceIdentifier, you receive notice of the events for that source type for all your RDS sources. If you don't specify either the SourceType or the SourceIdentifier, you are notified of events generated from all RDS sources belonging to your customer account.</p> <note> <p>RDS event notification is only available for unencrypted SNS topics. If you specify an encrypted SNS topic, event notifications aren't sent for the topic.</p> </note>
		 * Get /#Action=CreateEventSubscription
		 * @param {string} SubscriptionName <p>The name of the subscription.</p> <p>Constraints: The name must be less than 255 characters.</p>
		 * @param {string} SnsTopicArn The Amazon Resource Name (ARN) of the SNS topic created for event notification. The ARN is created by Amazon SNS when you create a topic and subscribe to it.
		 * @param {string} SourceType <p>The type of source that is generating the events. For example, if you want to be notified of events generated by a DB instance, you would set this parameter to db-instance. if this value isn't specified, all events are returned.</p> <p>Valid values: <code>db-instance</code> | <code>db-cluster</code> | <code>db-parameter-group</code> | <code>db-security-group</code> | <code>db-snapshot</code> | <code>db-cluster-snapshot</code> </p>
		 * @param {Array<String>} EventCategories  A list of event categories for a SourceType that you want to subscribe to. You can see a list of the categories for a given SourceType in the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.html">Events</a> topic in the <i>Amazon RDS User Guide</i> or by using the <b>DescribeEventCategories</b> action. 
		 * @param {Array<String>} SourceIds <p>The list of identifiers of the event sources for which events are returned. If not specified, then all sources are included in the response. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens. It can't end with a hyphen or contain two consecutive hyphens.</p> <p>Constraints:</p> <ul> <li> <p>If SourceIds are supplied, SourceType must also be provided.</p> </li> <li> <p>If the source type is a DB instance, then a <code>DBInstanceIdentifier</code> must be supplied.</p> </li> <li> <p>If the source type is a DB security group, a <code>DBSecurityGroupName</code> must be supplied.</p> </li> <li> <p>If the source type is a DB parameter group, a <code>DBParameterGroupName</code> must be supplied.</p> </li> <li> <p>If the source type is a DB snapshot, a <code>DBSnapshotIdentifier</code> must be supplied.</p> </li> </ul>
		 * @param {boolean} Enabled  A value that indicates whether to activate the subscription. If the event notification subscription isn't activated, the subscription is created but not active. 
		 * @return {void} Success
		 */
		GET_CreateEventSubscription(SubscriptionName: string, SnsTopicArn: string, SourceType: string, EventCategories: Array<String>, SourceIds: Array<String>, Enabled: boolean, Tags: Array<Tag>, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=CreateEventSubscription?SubscriptionName=' + (SubscriptionName == null ? '' : encodeURIComponent(SubscriptionName)) + '&SnsTopicArn=' + (SnsTopicArn == null ? '' : encodeURIComponent(SnsTopicArn)) + '&SourceType=' + (SourceType == null ? '' : encodeURIComponent(SourceType)) + '&' + EventCategories.map(z => `EventCategories=${z}`).join('&') + '&' + SourceIds.map(z => `SourceIds=${z}`).join('&') + '&Enabled=' + Enabled + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p> </p> <p> Creates an Aurora global database spread across multiple regions. The global database contains a single primary cluster with read-write capability, and a read-only secondary cluster that receives data from the primary cluster through high-speed replication performed by the Aurora storage subsystem. </p> <p> You can create a global database that is initially empty, and then add a primary cluster and a secondary cluster to it. Or you can specify an existing Aurora cluster during the create operation, and this cluster becomes the primary cluster of the global database. </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
		 * Get /#Action=CreateGlobalCluster
		 * @param {string} GlobalClusterIdentifier The cluster identifier of the new global database cluster.
		 * @param {string} SourceDBClusterIdentifier  The Amazon Resource Name (ARN) to use as the primary cluster of the global database. This parameter is optional. 
		 * @param {string} Engine Provides the name of the database engine to be used for this DB cluster.
		 * @param {string} EngineVersion The engine version of the Aurora global database.
		 * @param {boolean} DeletionProtection  The deletion protection setting for the new global database. The global database can't be deleted when deletion protection is enabled. 
		 * @param {string} DatabaseName  The name for your database of up to 64 alpha-numeric characters. If you do not provide a name, Amazon Aurora will not create a database in the global database cluster you are creating. 
		 * @param {boolean} StorageEncrypted  The storage encryption setting for the new global database cluster. 
		 * @return {void} Success
		 */
		GET_CreateGlobalCluster(GlobalClusterIdentifier: string, SourceDBClusterIdentifier: string, Engine: string, EngineVersion: string, DeletionProtection: boolean, DatabaseName: string, StorageEncrypted: boolean, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=CreateGlobalCluster?GlobalClusterIdentifier=' + (GlobalClusterIdentifier == null ? '' : encodeURIComponent(GlobalClusterIdentifier)) + '&SourceDBClusterIdentifier=' + (SourceDBClusterIdentifier == null ? '' : encodeURIComponent(SourceDBClusterIdentifier)) + '&Engine=' + (Engine == null ? '' : encodeURIComponent(Engine)) + '&EngineVersion=' + (EngineVersion == null ? '' : encodeURIComponent(EngineVersion)) + '&DeletionProtection=' + DeletionProtection + '&DatabaseName=' + (DatabaseName == null ? '' : encodeURIComponent(DatabaseName)) + '&StorageEncrypted=' + StorageEncrypted + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new option group. You can create up to 20 option groups.
		 * Get /#Action=CreateOptionGroup
		 * @param {string} OptionGroupName <p>Specifies the name of the option group to be created.</p> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 255 letters, numbers, or hyphens</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Can't end with a hyphen or contain two consecutive hyphens</p> </li> </ul> <p>Example: <code>myoptiongroup</code> </p>
		 * @param {string} EngineName Specifies the name of the engine that this option group should be associated with.
		 * @param {string} MajorEngineVersion Specifies the major version of the engine that this option group should be associated with.
		 * @param {string} OptionGroupDescription The description of the option group.
		 * @param {Array<Tag>} Tags Tags to assign to the option group.
		 * @return {void} Success
		 */
		GET_CreateOptionGroup(OptionGroupName: string, EngineName: string, MajorEngineVersion: string, OptionGroupDescription: string, Tags: Array<Tag>, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=CreateOptionGroup?OptionGroupName=' + (OptionGroupName == null ? '' : encodeURIComponent(OptionGroupName)) + '&EngineName=' + (EngineName == null ? '' : encodeURIComponent(EngineName)) + '&MajorEngineVersion=' + (MajorEngineVersion == null ? '' : encodeURIComponent(MajorEngineVersion)) + '&OptionGroupDescription=' + (OptionGroupDescription == null ? '' : encodeURIComponent(OptionGroupDescription)) + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a custom Availability Zone (AZ).</p> <p>A custom AZ is an on-premises AZ that is integrated with a VMware vSphere cluster.</p> <p>For more information about RDS on VMware, see the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/RDSonVMwareUserGuide/rds-on-vmware.html"> <i>RDS on VMware User Guide.</i> </a> </p>
		 * Get /#Action=DeleteCustomAvailabilityZone
		 * @param {string} CustomAvailabilityZoneId The custom AZ identifier.
		 * @return {void} Success
		 */
		GET_DeleteCustomAvailabilityZone(CustomAvailabilityZoneId: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=DeleteCustomAvailabilityZone?CustomAvailabilityZoneId=' + (CustomAvailabilityZoneId == null ? '' : encodeURIComponent(CustomAvailabilityZoneId)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>The DeleteDBCluster action deletes a previously provisioned DB cluster. When you delete a DB cluster, all automated backups for that DB cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified DB cluster are not deleted.</p> <p/> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
		 * Get /#Action=DeleteDBCluster
		 * @param {string} DBClusterIdentifier <p>The DB cluster identifier for the DB cluster to be deleted. This parameter isn't case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must match an existing DBClusterIdentifier.</p> </li> </ul>
		 * @param {boolean} SkipFinalSnapshot <p>A value that indicates whether to skip the creation of a final DB cluster snapshot before the DB cluster is deleted. If skip is specified, no DB cluster snapshot is created. If skip isn't specified, a DB cluster snapshot is created before the DB cluster is deleted. By default, skip isn't specified, and the DB cluster snapshot is created. By default, this parameter is disabled.</p> <note> <p>You must specify a <code>FinalDBSnapshotIdentifier</code> parameter if <code>SkipFinalSnapshot</code> is disabled.</p> </note>
		 * @param {string} FinalDBSnapshotIdentifier <p> The DB cluster snapshot identifier of the new DB cluster snapshot created when <code>SkipFinalSnapshot</code> is disabled. </p> <note> <p> Specifying this parameter and also skipping the creation of a final DB cluster snapshot with the <code>SkipFinalShapshot</code> parameter results in an error.</p> </note> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 255 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Can't end with a hyphen or contain two consecutive hyphens</p> </li> </ul>
		 * @return {void} Success
		 */
		GET_DeleteDBCluster(DBClusterIdentifier: string, SkipFinalSnapshot: boolean, FinalDBSnapshotIdentifier: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=DeleteDBCluster?DBClusterIdentifier=' + (DBClusterIdentifier == null ? '' : encodeURIComponent(DBClusterIdentifier)) + '&SkipFinalSnapshot=' + SkipFinalSnapshot + '&FinalDBSnapshotIdentifier=' + (FinalDBSnapshotIdentifier == null ? '' : encodeURIComponent(FinalDBSnapshotIdentifier)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a custom endpoint and removes it from an Amazon Aurora DB cluster.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
		 * Get /#Action=DeleteDBClusterEndpoint
		 * @param {string} DBClusterEndpointIdentifier The identifier associated with the custom endpoint. This parameter is stored as a lowercase string.
		 * @return {void} Success
		 */
		GET_DeleteDBClusterEndpoint(DBClusterEndpointIdentifier: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=DeleteDBClusterEndpoint?DBClusterEndpointIdentifier=' + (DBClusterEndpointIdentifier == null ? '' : encodeURIComponent(DBClusterEndpointIdentifier)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a specified DB cluster parameter group. The DB cluster parameter group to be deleted can't be associated with any DB clusters.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
		 * Get /#Action=DeleteDBClusterParameterGroup
		 * @param {string} DBClusterParameterGroupName <p>The name of the DB cluster parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Must be the name of an existing DB cluster parameter group.</p> </li> <li> <p>You can't delete a default DB cluster parameter group.</p> </li> <li> <p>Can't be associated with any DB clusters.</p> </li> </ul>
		 * @return {void} Success
		 */
		GET_DeleteDBClusterParameterGroup(DBClusterParameterGroupName: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=DeleteDBClusterParameterGroup?DBClusterParameterGroupName=' + (DBClusterParameterGroupName == null ? '' : encodeURIComponent(DBClusterParameterGroupName)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a DB cluster snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The DB cluster snapshot must be in the <code>available</code> state to be deleted.</p> </note> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
		 * Get /#Action=DeleteDBClusterSnapshot
		 * @param {string} DBClusterSnapshotIdentifier <p>The identifier of the DB cluster snapshot to delete.</p> <p>Constraints: Must be the name of an existing DB cluster snapshot in the <code>available</code> state.</p>
		 * @return {void} Success
		 */
		GET_DeleteDBClusterSnapshot(DBClusterSnapshotIdentifier: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=DeleteDBClusterSnapshot?DBClusterSnapshotIdentifier=' + (DBClusterSnapshotIdentifier == null ? '' : encodeURIComponent(DBClusterSnapshotIdentifier)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>The DeleteDBInstance action deletes a previously provisioned DB instance. When you delete a DB instance, all automated backups for that instance are deleted and can't be recovered. Manual DB snapshots of the DB instance to be deleted by <code>DeleteDBInstance</code> are not deleted.</p> <p> If you request a final DB snapshot the status of the Amazon RDS DB instance is <code>deleting</code> until the DB snapshot is created. The API action <code>DescribeDBInstance</code> is used to monitor the status of this operation. The action can't be canceled or reverted once submitted. </p> <p>When a DB instance is in a failure state and has a status of <code>failed</code>, <code>incompatible-restore</code>, or <code>incompatible-network</code>, you can only delete it when you skip creation of the final snapshot with the <code>SkipFinalSnapshot</code> parameter.</p> <p>If the specified DB instance is part of an Amazon Aurora DB cluster, you can't delete the DB instance if both of the following conditions are true:</p> <ul> <li> <p>The DB cluster is a read replica of another Amazon Aurora DB cluster.</p> </li> <li> <p>The DB instance is the only instance in the DB cluster.</p> </li> </ul> <p>To delete a DB instance in this case, first call the <code>PromoteReadReplicaDBCluster</code> API action to promote the DB cluster so it's no longer a read replica. After the promotion completes, then call the <code>DeleteDBInstance</code> API action to delete the final instance in the DB cluster.</p>
		 * Get /#Action=DeleteDBInstance
		 * @param {string} DBInstanceIdentifier <p>The DB instance identifier for the DB instance to be deleted. This parameter isn't case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must match the name of an existing DB instance.</p> </li> </ul>
		 * @param {boolean} SkipFinalSnapshot <p>A value that indicates whether to skip the creation of a final DB snapshot before the DB instance is deleted. If skip is specified, no DB snapshot is created. If skip isn't specified, a DB snapshot is created before the DB instance is deleted. By default, skip isn't specified, and the DB snapshot is created.</p> <p>When a DB instance is in a failure state and has a status of 'failed', 'incompatible-restore', or 'incompatible-network', it can only be deleted when skip is specified.</p> <p>Specify skip when deleting a read replica.</p> <note> <p>The FinalDBSnapshotIdentifier parameter must be specified if skip isn't specified.</p> </note>
		 * @param {string} FinalDBSnapshotIdentifier <p> The <code>DBSnapshotIdentifier</code> of the new <code>DBSnapshot</code> created when the <code>SkipFinalSnapshot</code> parameter is disabled. </p> <note> <p>Specifying this parameter and also specifying to skip final DB snapshot creation in SkipFinalShapshot results in an error.</p> </note> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 255 letters or numbers.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Can't end with a hyphen or contain two consecutive hyphens.</p> </li> <li> <p>Can't be specified when deleting a read replica.</p> </li> </ul>
		 * @param {boolean} DeleteAutomatedBackups A value that indicates whether to remove automated backups immediately after the DB instance is deleted. This parameter isn't case-sensitive. The default is to remove automated backups immediately after the DB instance is deleted.
		 * @return {void} Success
		 */
		GET_DeleteDBInstance(DBInstanceIdentifier: string, SkipFinalSnapshot: boolean, FinalDBSnapshotIdentifier: string, DeleteAutomatedBackups: boolean, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=DeleteDBInstance?DBInstanceIdentifier=' + (DBInstanceIdentifier == null ? '' : encodeURIComponent(DBInstanceIdentifier)) + '&SkipFinalSnapshot=' + SkipFinalSnapshot + '&FinalDBSnapshotIdentifier=' + (FinalDBSnapshotIdentifier == null ? '' : encodeURIComponent(FinalDBSnapshotIdentifier)) + '&DeleteAutomatedBackups=' + DeleteAutomatedBackups + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes automated backups based on the source instance's <code>DbiResourceId</code> value or the restorable instance's resource ID.
		 * Get /#Action=DeleteDBInstanceAutomatedBackup
		 * @param {string} DbiResourceId The identifier for the source DB instance, which can't be changed and which is unique to an AWS Region.
		 * @return {void} Success
		 */
		GET_DeleteDBInstanceAutomatedBackup(DbiResourceId: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=DeleteDBInstanceAutomatedBackup?DbiResourceId=' + (DbiResourceId == null ? '' : encodeURIComponent(DbiResourceId)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a specified DB parameter group. The DB parameter group to be deleted can't be associated with any DB instances.
		 * Get /#Action=DeleteDBParameterGroup
		 * @param {string} DBParameterGroupName <p>The name of the DB parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Must be the name of an existing DB parameter group</p> </li> <li> <p>You can't delete a default DB parameter group</p> </li> <li> <p>Can't be associated with any DB instances</p> </li> </ul>
		 * @return {void} Success
		 */
		GET_DeleteDBParameterGroup(DBParameterGroupName: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=DeleteDBParameterGroup?DBParameterGroupName=' + (DBParameterGroupName == null ? '' : encodeURIComponent(DBParameterGroupName)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <note> <p>This is prerelease documentation for the RDS Database Proxy feature in preview release. It is subject to change.</p> </note> <p>Deletes an existing proxy.</p>
		 * Get /#Action=DeleteDBProxy
		 * @param {string} DBProxyName The name of the DB proxy to delete.
		 * @return {void} Success
		 */
		GET_DeleteDBProxy(DBProxyName: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=DeleteDBProxy?DBProxyName=' + (DBProxyName == null ? '' : encodeURIComponent(DBProxyName)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a DB security group.</p> <note> <p>The specified DB security group must not be associated with any DB instances.</p> </note>
		 * Get /#Action=DeleteDBSecurityGroup
		 * @param {string} DBSecurityGroupName <p>The name of the DB security group to delete.</p> <note> <p>You can't delete the default DB security group.</p> </note> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 255 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Can't end with a hyphen or contain two consecutive hyphens</p> </li> <li> <p>Must not be "Default"</p> </li> </ul>
		 * @return {void} Success
		 */
		GET_DeleteDBSecurityGroup(DBSecurityGroupName: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=DeleteDBSecurityGroup?DBSecurityGroupName=' + (DBSecurityGroupName == null ? '' : encodeURIComponent(DBSecurityGroupName)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a DB snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The DB snapshot must be in the <code>available</code> state to be deleted.</p> </note>
		 * Get /#Action=DeleteDBSnapshot
		 * @param {string} DBSnapshotIdentifier <p>The DB snapshot identifier.</p> <p>Constraints: Must be the name of an existing DB snapshot in the <code>available</code> state.</p>
		 * @return {void} Success
		 */
		GET_DeleteDBSnapshot(DBSnapshotIdentifier: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=DeleteDBSnapshot?DBSnapshotIdentifier=' + (DBSnapshotIdentifier == null ? '' : encodeURIComponent(DBSnapshotIdentifier)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a DB subnet group.</p> <note> <p>The specified database subnet group must not be associated with any DB instances.</p> </note>
		 * Get /#Action=DeleteDBSubnetGroup
		 * @param {string} DBSubnetGroupName <p>The name of the database subnet group to delete.</p> <note> <p>You can't delete the default subnet group.</p> </note> <p>Constraints:</p> <p>Constraints: Must match the name of an existing DBSubnetGroup. Must not be default.</p> <p>Example: <code>mySubnetgroup</code> </p>
		 * @return {void} Success
		 */
		GET_DeleteDBSubnetGroup(DBSubnetGroupName: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=DeleteDBSubnetGroup?DBSubnetGroupName=' + (DBSubnetGroupName == null ? '' : encodeURIComponent(DBSubnetGroupName)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes an RDS event notification subscription.
		 * Get /#Action=DeleteEventSubscription
		 * @param {string} SubscriptionName The name of the RDS event notification subscription you want to delete.
		 * @return {void} Success
		 */
		GET_DeleteEventSubscription(SubscriptionName: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=DeleteEventSubscription?SubscriptionName=' + (SubscriptionName == null ? '' : encodeURIComponent(SubscriptionName)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p> Deletes a global database cluster. The primary and secondary clusters must already be detached or destroyed first. </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
		 * Get /#Action=DeleteGlobalCluster
		 * @param {string} GlobalClusterIdentifier  The cluster identifier of the global database cluster being deleted. 
		 * @return {void} Success
		 */
		GET_DeleteGlobalCluster(GlobalClusterIdentifier: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=DeleteGlobalCluster?GlobalClusterIdentifier=' + (GlobalClusterIdentifier == null ? '' : encodeURIComponent(GlobalClusterIdentifier)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the installation medium for a DB engine that requires an on-premises customer provided license, such as Microsoft SQL Server.
		 * Get /#Action=DeleteInstallationMedia
		 * @param {string} InstallationMediaId The installation medium ID.
		 * @return {void} Success
		 */
		GET_DeleteInstallationMedia(InstallationMediaId: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=DeleteInstallationMedia?InstallationMediaId=' + (InstallationMediaId == null ? '' : encodeURIComponent(InstallationMediaId)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes an existing option group.
		 * Get /#Action=DeleteOptionGroup
		 * @param {string} OptionGroupName <p>The name of the option group to be deleted.</p> <note> <p>You can't delete default option groups.</p> </note>
		 * @return {void} Success
		 */
		GET_DeleteOptionGroup(OptionGroupName: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=DeleteOptionGroup?OptionGroupName=' + (OptionGroupName == null ? '' : encodeURIComponent(OptionGroupName)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <note> <p>This is prerelease documentation for the RDS Database Proxy feature in preview release. It is subject to change.</p> </note> <p>Remove the association between one or more <code>DBProxyTarget</code> data structures and a <code>DBProxyTargetGroup</code>.</p>
		 * Get /#Action=DeregisterDBProxyTargets
		 * @param {string} DBProxyName The identifier of the <code>DBProxy</code> that is associated with the <code>DBProxyTargetGroup</code>.
		 * @param {string} TargetGroupName The identifier of the <code>DBProxyTargetGroup</code>.
		 * @param {Array<String>} DBInstanceIdentifiers One or more DB instance identifiers.
		 * @param {Array<String>} DBClusterIdentifiers One or more DB cluster identifiers.
		 * @return {void} Success
		 */
		GET_DeregisterDBProxyTargets(DBProxyName: string, TargetGroupName: string, DBInstanceIdentifiers: Array<String>, DBClusterIdentifiers: Array<String>, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=DeregisterDBProxyTargets?DBProxyName=' + (DBProxyName == null ? '' : encodeURIComponent(DBProxyName)) + '&TargetGroupName=' + (TargetGroupName == null ? '' : encodeURIComponent(TargetGroupName)) + '&' + DBInstanceIdentifiers.map(z => `DBInstanceIdentifiers=${z}`).join('&') + '&' + DBClusterIdentifiers.map(z => `DBClusterIdentifiers=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists all of the attributes for a customer account. The attributes include Amazon RDS quotas for the account, such as the number of DB instances allowed. The description for a quota includes the quota name, current usage toward that quota, and the quota's maximum value.</p> <p>This command doesn't take any parameters.</p>
		 * Get /#Action=DescribeAccountAttributes
		 * @return {void} Success
		 */
		GET_DescribeAccountAttributes(Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=DescribeAccountAttributes?Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the set of CA certificates provided by Amazon RDS for this AWS account.
		 * Get /#Action=DescribeCertificates
		 * @param {string} CertificateIdentifier <p>The user-supplied certificate identifier. If this parameter is specified, information for only the identified certificate is returned. This parameter isn't case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must match an existing CertificateIdentifier.</p> </li> </ul>
		 * @param {Array<Filter>} Filters This parameter isn't currently supported.
		 * @param {number} MaxRecords <p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so you can retrieve the remaining results. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 * @param {string} Marker  An optional pagination token provided by a previous <code>DescribeCertificates</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. 
		 * @return {void} Success
		 */
		GET_DescribeCertificates(CertificateIdentifier: string, Filters: Array<Filter>, MaxRecords: number, Marker: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=DescribeCertificates?CertificateIdentifier=' + (CertificateIdentifier == null ? '' : encodeURIComponent(CertificateIdentifier)) + '&' + Filters.map(z => `Filters=${z}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns information about custom Availability Zones (AZs).</p> <p>A custom AZ is an on-premises AZ that is integrated with a VMware vSphere cluster.</p> <p>For more information about RDS on VMware, see the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/RDSonVMwareUserGuide/rds-on-vmware.html"> <i>RDS on VMware User Guide.</i> </a> </p>
		 * Get /#Action=DescribeCustomAvailabilityZones
		 * @param {string} CustomAvailabilityZoneId The custom AZ identifier. If this parameter is specified, information from only the specific custom AZ is returned.
		 * @param {Array<Filter>} Filters A filter that specifies one or more custom AZs to describe.
		 * @param {number} MaxRecords <p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so you can retrieve the remaining results.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 * @param {string} Marker An optional pagination token provided by a previous <code>DescribeCustomAvailabilityZones</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
		 * @return {void} Success
		 */
		GET_DescribeCustomAvailabilityZones(CustomAvailabilityZoneId: string, Filters: Array<Filter>, MaxRecords: number, Marker: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=DescribeCustomAvailabilityZones?CustomAvailabilityZoneId=' + (CustomAvailabilityZoneId == null ? '' : encodeURIComponent(CustomAvailabilityZoneId)) + '&' + Filters.map(z => `Filters=${z}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns information about backtracks for a DB cluster.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
		 * Get /#Action=DescribeDBClusterBacktracks
		 * @param {string} DBClusterIdentifier <p>The DB cluster identifier of the DB cluster to be described. This parameter is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 alphanumeric characters or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Can't end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>my-cluster1</code> </p>
		 * @param {string} BacktrackIdentifier <p>If specified, this value is the backtrack identifier of the backtrack to be described.</p> <p>Constraints:</p> <ul> <li> <p>Must contain a valid universally unique identifier (UUID). For more information about UUIDs, see <a href="http://www.ietf.org/rfc/rfc4122.txt">A Universally Unique Identifier (UUID) URN Namespace</a>.</p> </li> </ul> <p>Example: <code>123e4567-e89b-12d3-a456-426655440000</code> </p>
		 * @param {Array<Filter>} Filters <p>A filter that specifies one or more DB clusters to describe. Supported filters include the following:</p> <ul> <li> <p> <code>db-cluster-backtrack-id</code> - Accepts backtrack identifiers. The results list includes information about only the backtracks identified by these identifiers.</p> </li> <li> <p> <code>db-cluster-backtrack-status</code> - Accepts any of the following backtrack status values:</p> <ul> <li> <p> <code>applying</code> </p> </li> <li> <p> <code>completed</code> </p> </li> <li> <p> <code>failed</code> </p> </li> <li> <p> <code>pending</code> </p> </li> </ul> <p>The results list includes information about only the backtracks identified by these values.</p> </li> </ul>
		 * @param {number} MaxRecords <p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so you can retrieve the remaining results. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 * @param {string} Marker  An optional pagination token provided by a previous <code>DescribeDBClusterBacktracks</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. 
		 * @return {void} Success
		 */
		GET_DescribeDBClusterBacktracks(DBClusterIdentifier: string, BacktrackIdentifier: string, Filters: Array<Filter>, MaxRecords: number, Marker: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=DescribeDBClusterBacktracks?DBClusterIdentifier=' + (DBClusterIdentifier == null ? '' : encodeURIComponent(DBClusterIdentifier)) + '&BacktrackIdentifier=' + (BacktrackIdentifier == null ? '' : encodeURIComponent(BacktrackIdentifier)) + '&' + Filters.map(z => `Filters=${z}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns information about endpoints for an Amazon Aurora DB cluster.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
		 * Get /#Action=DescribeDBClusterEndpoints
		 * @param {string} DBClusterIdentifier The DB cluster identifier of the DB cluster associated with the endpoint. This parameter is stored as a lowercase string.
		 * @param {string} DBClusterEndpointIdentifier The identifier of the endpoint to describe. This parameter is stored as a lowercase string.
		 * @param {Array<Filter>} Filters A set of name-value pairs that define which endpoints to include in the output. The filters are specified as name-value pairs, in the format <code>Name=<i>endpoint_type</i>,Values=<i>endpoint_type1</i>,<i>endpoint_type2</i>,...</code>. <code>Name</code> can be one of: <code>db-cluster-endpoint-type</code>, <code>db-cluster-endpoint-custom-type</code>, <code>db-cluster-endpoint-id</code>, <code>db-cluster-endpoint-status</code>. <code>Values</code> for the <code> db-cluster-endpoint-type</code> filter can be one or more of: <code>reader</code>, <code>writer</code>, <code>custom</code>. <code>Values</code> for the <code>db-cluster-endpoint-custom-type</code> filter can be one or more of: <code>reader</code>, <code>any</code>. <code>Values</code> for the <code>db-cluster-endpoint-status</code> filter can be one or more of: <code>available</code>, <code>creating</code>, <code>deleting</code>, <code>modifying</code>. 
		 * @param {number} MaxRecords <p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so you can retrieve the remaining results. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 * @param {string} Marker  An optional pagination token provided by a previous <code>DescribeDBClusterEndpoints</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. 
		 * @return {void} Success
		 */
		GET_DescribeDBClusterEndpoints(DBClusterIdentifier: string, DBClusterEndpointIdentifier: string, Filters: Array<Filter>, MaxRecords: number, Marker: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=DescribeDBClusterEndpoints?DBClusterIdentifier=' + (DBClusterIdentifier == null ? '' : encodeURIComponent(DBClusterIdentifier)) + '&DBClusterEndpointIdentifier=' + (DBClusterEndpointIdentifier == null ? '' : encodeURIComponent(DBClusterEndpointIdentifier)) + '&' + Filters.map(z => `Filters=${z}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p> Returns a list of <code>DBClusterParameterGroup</code> descriptions. If a <code>DBClusterParameterGroupName</code> parameter is specified, the list will contain only the description of the specified DB cluster parameter group. </p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
		 * Get /#Action=DescribeDBClusterParameterGroups
		 * @param {string} DBClusterParameterGroupName <p>The name of a specific DB cluster parameter group to return details for.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p> </li> </ul>
		 * @param {Array<Filter>} Filters This parameter isn't currently supported.
		 * @param {number} MaxRecords <p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so you can retrieve the remaining results. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 * @param {string} Marker  An optional pagination token provided by a previous <code>DescribeDBClusterParameterGroups</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. 
		 * @return {void} Success
		 */
		GET_DescribeDBClusterParameterGroups(DBClusterParameterGroupName: string, Filters: Array<Filter>, MaxRecords: number, Marker: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=DescribeDBClusterParameterGroups?DBClusterParameterGroupName=' + (DBClusterParameterGroupName == null ? '' : encodeURIComponent(DBClusterParameterGroupName)) + '&' + Filters.map(z => `Filters=${z}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns the detailed parameter list for a particular DB cluster parameter group.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
		 * Get /#Action=DescribeDBClusterParameters
		 * @param {string} DBClusterParameterGroupName <p>The name of a specific DB cluster parameter group to return parameter details for.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p> </li> </ul>
		 * @param {string} Source  A value that indicates to return only parameters for a specific source. Parameter sources can be <code>engine</code>, <code>service</code>, or <code>customer</code>. 
		 * @param {Array<Filter>} Filters This parameter isn't currently supported.
		 * @param {number} MaxRecords <p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so you can retrieve the remaining results. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 * @param {string} Marker  An optional pagination token provided by a previous <code>DescribeDBClusterParameters</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. 
		 * @return {void} Success
		 */
		GET_DescribeDBClusterParameters(DBClusterParameterGroupName: string, Source: string, Filters: Array<Filter>, MaxRecords: number, Marker: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=DescribeDBClusterParameters?DBClusterParameterGroupName=' + (DBClusterParameterGroupName == null ? '' : encodeURIComponent(DBClusterParameterGroupName)) + '&Source=' + (Source == null ? '' : encodeURIComponent(Source)) + '&' + Filters.map(z => `Filters=${z}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns a list of DB cluster snapshot attribute names and values for a manual DB cluster snapshot.</p> <p>When sharing snapshots with other AWS accounts, <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the AWS accounts that are authorized to copy or restore the manual DB cluster snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual DB cluster snapshot is public and can be copied or restored by all AWS accounts.</p> <p>To add or remove access for an AWS account to copy or restore a manual DB cluster snapshot, or to make the manual DB cluster snapshot public or private, use the <code>ModifyDBClusterSnapshotAttribute</code> API action.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
		 * Get /#Action=DescribeDBClusterSnapshotAttributes
		 * @param {string} DBClusterSnapshotIdentifier The identifier for the DB cluster snapshot to describe the attributes for.
		 * @return {void} Success
		 */
		GET_DescribeDBClusterSnapshotAttributes(DBClusterSnapshotIdentifier: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=DescribeDBClusterSnapshotAttributes?DBClusterSnapshotIdentifier=' + (DBClusterSnapshotIdentifier == null ? '' : encodeURIComponent(DBClusterSnapshotIdentifier)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns information about DB cluster snapshots. This API action supports pagination.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
		 * Get /#Action=DescribeDBClusterSnapshots
		 * @param {string} DBClusterIdentifier <p>The ID of the DB cluster to retrieve the list of DB cluster snapshots for. This parameter can't be used in conjunction with the <code>DBClusterSnapshotIdentifier</code> parameter. This parameter isn't case-sensitive. </p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the identifier of an existing DBCluster.</p> </li> </ul>
		 * @param {string} DBClusterSnapshotIdentifier <p>A specific DB cluster snapshot identifier to describe. This parameter can't be used in conjunction with the <code>DBClusterIdentifier</code> parameter. This value is stored as a lowercase string. </p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the identifier of an existing DBClusterSnapshot.</p> </li> <li> <p>If this identifier is for an automated snapshot, the <code>SnapshotType</code> parameter must also be specified.</p> </li> </ul>
		 * @param {string} SnapshotType <p>The type of DB cluster snapshots to be returned. You can specify one of the following values:</p> <ul> <li> <p> <code>automated</code> - Return all DB cluster snapshots that have been automatically taken by Amazon RDS for my AWS account.</p> </li> <li> <p> <code>manual</code> - Return all DB cluster snapshots that have been taken by my AWS account.</p> </li> <li> <p> <code>shared</code> - Return all manual DB cluster snapshots that have been shared to my AWS account.</p> </li> <li> <p> <code>public</code> - Return all DB cluster snapshots that have been marked as public.</p> </li> </ul> <p>If you don't specify a <code>SnapshotType</code> value, then both automated and manual DB cluster snapshots are returned. You can include shared DB cluster snapshots with these results by enabling the <code>IncludeShared</code> parameter. You can include public DB cluster snapshots with these results by enabling the <code>IncludePublic</code> parameter.</p> <p>The <code>IncludeShared</code> and <code>IncludePublic</code> parameters don't apply for <code>SnapshotType</code> values of <code>manual</code> or <code>automated</code>. The <code>IncludePublic</code> parameter doesn't apply when <code>SnapshotType</code> is set to <code>shared</code>. The <code>IncludeShared</code> parameter doesn't apply when <code>SnapshotType</code> is set to <code>public</code>.</p>
		 * @param {Array<Filter>} Filters <p>A filter that specifies one or more DB cluster snapshots to describe.</p> <p>Supported filters:</p> <ul> <li> <p> <code>db-cluster-id</code> - Accepts DB cluster identifiers and DB cluster Amazon Resource Names (ARNs).</p> </li> <li> <p> <code>db-cluster-snapshot-id</code> - Accepts DB cluster snapshot identifiers.</p> </li> <li> <p> <code>snapshot-type</code> - Accepts types of DB cluster snapshots.</p> </li> <li> <p> <code>engine</code> - Accepts names of database engines.</p> </li> </ul>
		 * @param {number} MaxRecords <p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so you can retrieve the remaining results. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 * @param {string} Marker An optional pagination token provided by a previous <code>DescribeDBClusterSnapshots</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. 
		 * @param {boolean} IncludeShared <p>A value that indicates whether to include shared manual DB cluster snapshots from other AWS accounts that this AWS account has been given permission to copy or restore. By default, these snapshots are not included.</p> <p>You can give an AWS account permission to restore a manual DB cluster snapshot from another AWS account by the <code>ModifyDBClusterSnapshotAttribute</code> API action.</p>
		 * @param {boolean} IncludePublic <p>A value that indicates whether to include manual DB cluster snapshots that are public and can be copied or restored by any AWS account. By default, the public snapshots are not included.</p> <p>You can share a manual DB cluster snapshot as public by using the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>
		 * @return {void} Success
		 */
		GET_DescribeDBClusterSnapshots(DBClusterIdentifier: string, DBClusterSnapshotIdentifier: string, SnapshotType: string, Filters: Array<Filter>, MaxRecords: number, Marker: string, IncludeShared: boolean, IncludePublic: boolean, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=DescribeDBClusterSnapshots?DBClusterIdentifier=' + (DBClusterIdentifier == null ? '' : encodeURIComponent(DBClusterIdentifier)) + '&DBClusterSnapshotIdentifier=' + (DBClusterSnapshotIdentifier == null ? '' : encodeURIComponent(DBClusterSnapshotIdentifier)) + '&SnapshotType=' + (SnapshotType == null ? '' : encodeURIComponent(SnapshotType)) + '&' + Filters.map(z => `Filters=${z}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&IncludeShared=' + IncludeShared + '&IncludePublic=' + IncludePublic + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns information about provisioned Aurora DB clusters. This API supports pagination.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This operation can also return information for Amazon Neptune DB instances and Amazon DocumentDB instances.</p> </note>
		 * Get /#Action=DescribeDBClusters
		 * @param {string} DBClusterIdentifier <p>The user-supplied DB cluster identifier. If this parameter is specified, information from only the specific DB cluster is returned. This parameter isn't case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match an existing DBClusterIdentifier.</p> </li> </ul>
		 * @param {Array<Filter>} Filters <p>A filter that specifies one or more DB clusters to describe.</p> <p>Supported filters:</p> <ul> <li> <p> <code>db-cluster-id</code> - Accepts DB cluster identifiers and DB cluster Amazon Resource Names (ARNs). The results list will only include information about the DB clusters identified by these ARNs.</p> </li> </ul>
		 * @param {number} MaxRecords <p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so you can retrieve the remaining results. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 * @param {string} Marker An optional pagination token provided by a previous <code>DescribeDBClusters</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. 
		 * @param {boolean} IncludeShared Optional Boolean parameter that specifies whether the output includes information about clusters shared from other AWS accounts.
		 * @return {void} Success
		 */
		GET_DescribeDBClusters(DBClusterIdentifier: string, Filters: Array<Filter>, MaxRecords: number, Marker: string, IncludeShared: boolean, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=DescribeDBClusters?DBClusterIdentifier=' + (DBClusterIdentifier == null ? '' : encodeURIComponent(DBClusterIdentifier)) + '&' + Filters.map(z => `Filters=${z}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&IncludeShared=' + IncludeShared + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of the available DB engines.
		 * Get /#Action=DescribeDBEngineVersions
		 * @param {string} Engine The database engine to return.
		 * @param {string} EngineVersion <p>The database engine version to return.</p> <p>Example: <code>5.1.49</code> </p>
		 * @param {string} DBParameterGroupFamily <p>The name of a specific DB parameter group family to return details for.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match an existing DBParameterGroupFamily.</p> </li> </ul>
		 * @param {Array<Filter>} Filters This parameter isn't currently supported.
		 * @param {number} MaxRecords <p> The maximum number of records to include in the response. If more than the <code>MaxRecords</code> value is available, a pagination token called a marker is included in the response so you can retrieve the remaining results. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 * @param {string} Marker  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. 
		 * @param {boolean} DefaultOnly A value that indicates whether only the default version of the specified engine or engine and major version combination is returned.
		 * @param {boolean} ListSupportedCharacterSets <p>A value that indicates whether to list the supported character sets for each engine version.</p> <p>If this parameter is enabled and the requested engine supports the <code>CharacterSetName</code> parameter for <code>CreateDBInstance</code>, the response includes a list of supported character sets for each engine version. </p>
		 * @param {boolean} ListSupportedTimezones <p>A value that indicates whether to list the supported time zones for each engine version.</p> <p>If this parameter is enabled and the requested engine supports the <code>TimeZone</code> parameter for <code>CreateDBInstance</code>, the response includes a list of supported time zones for each engine version. </p>
		 * @param {boolean} IncludeAll A value that indicates whether to include engine versions that aren't available in the list. The default is to list only available engine versions.
		 * @return {void} Success
		 */
		GET_DescribeDBEngineVersions(Engine: string, EngineVersion: string, DBParameterGroupFamily: string, Filters: Array<Filter>, MaxRecords: number, Marker: string, DefaultOnly: boolean, ListSupportedCharacterSets: boolean, ListSupportedTimezones: boolean, IncludeAll: boolean, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=DescribeDBEngineVersions?Engine=' + (Engine == null ? '' : encodeURIComponent(Engine)) + '&EngineVersion=' + (EngineVersion == null ? '' : encodeURIComponent(EngineVersion)) + '&DBParameterGroupFamily=' + (DBParameterGroupFamily == null ? '' : encodeURIComponent(DBParameterGroupFamily)) + '&' + Filters.map(z => `Filters=${z}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&DefaultOnly=' + DefaultOnly + '&ListSupportedCharacterSets=' + ListSupportedCharacterSets + '&ListSupportedTimezones=' + ListSupportedTimezones + '&IncludeAll=' + IncludeAll + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Displays backups for both current and deleted instances. For example, use this operation to find details about automated backups for previously deleted instances. Current instances with retention periods greater than zero (0) are returned for both the <code>DescribeDBInstanceAutomatedBackups</code> and <code>DescribeDBInstances</code> operations.</p> <p>All parameters are optional.</p>
		 * Get /#Action=DescribeDBInstanceAutomatedBackups
		 * @param {string} DbiResourceId The resource ID of the DB instance that is the source of the automated backup. This parameter isn't case-sensitive. 
		 * @param {string} DBInstanceIdentifier (Optional) The user-supplied instance identifier. If this parameter is specified, it must match the identifier of an existing DB instance. It returns information from the specific DB instance' automated backup. This parameter isn't case-sensitive. 
		 * @param {Array<Filter>} Filters <p>A filter that specifies which resources to return based on status.</p> <p>Supported filters are the following:</p> <ul> <li> <p> <code>status</code> </p> <ul> <li> <p> <code>active</code> - automated backups for current instances</p> </li> <li> <p> <code>retained</code> - automated backups for deleted instances</p> </li> <li> <p> <code>creating</code> - automated backups that are waiting for the first automated snapshot to be available</p> </li> </ul> </li> <li> <p> <code>db-instance-id</code> - Accepts DB instance identifiers and Amazon Resource Names (ARNs) for DB instances. The results list includes only information about the DB instance automated backupss identified by these ARNs.</p> </li> <li> <p> <code>dbi-resource-id</code> - Accepts DB instance resource identifiers and DB Amazon Resource Names (ARNs) for DB instances. The results list includes only information about the DB instance resources identified by these ARNs.</p> </li> </ul> <p>Returns all resources by default. The status for each resource is specified in the response.</p>
		 * @param {number} MaxRecords The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that you can retrieve the remaining results.
		 * @param {string} Marker The pagination token provided in the previous request. If this parameter is specified the response includes only records beyond the marker, up to <code>MaxRecords</code>.
		 * @return {void} Success
		 */
		GET_DescribeDBInstanceAutomatedBackups(DbiResourceId: string, DBInstanceIdentifier: string, Filters: Array<Filter>, MaxRecords: number, Marker: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=DescribeDBInstanceAutomatedBackups?DbiResourceId=' + (DbiResourceId == null ? '' : encodeURIComponent(DbiResourceId)) + '&DBInstanceIdentifier=' + (DBInstanceIdentifier == null ? '' : encodeURIComponent(DBInstanceIdentifier)) + '&' + Filters.map(z => `Filters=${z}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns information about provisioned RDS instances. This API supports pagination.</p> <note> <p>This operation can also return information for Amazon Neptune DB instances and Amazon DocumentDB instances.</p> </note>
		 * Get /#Action=DescribeDBInstances
		 * @param {string} DBInstanceIdentifier <p>The user-supplied instance identifier. If this parameter is specified, information from only the specific DB instance is returned. This parameter isn't case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the identifier of an existing DBInstance.</p> </li> </ul>
		 * @param {Array<Filter>} Filters <p>A filter that specifies one or more DB instances to describe.</p> <p>Supported filters:</p> <ul> <li> <p> <code>db-cluster-id</code> - Accepts DB cluster identifiers and DB cluster Amazon Resource Names (ARNs). The results list will only include information about the DB instances associated with the DB clusters identified by these ARNs.</p> </li> <li> <p> <code>db-instance-id</code> - Accepts DB instance identifiers and DB instance Amazon Resource Names (ARNs). The results list will only include information about the DB instances identified by these ARNs.</p> </li> <li> <p> <code>dbi-resource-id</code> - Accepts DB instance resource identifiers. The results list will only include information about the DB instances identified by these DB instance resource identifiers.</p> </li> <li> <p> <code>domain</code> - Accepts Active Directory directory IDs. The results list will only include information about the DB instances associated with these domains.</p> </li> <li> <p> <code>engine</code> - Accepts engine names. The results list will only include information about the DB instances for these engines.</p> </li> </ul>
		 * @param {number} MaxRecords <p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that you can retrieve the remaining results. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 * @param {string} Marker  An optional pagination token provided by a previous <code>DescribeDBInstances</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. 
		 * @return {void} Success
		 */
		GET_DescribeDBInstances(DBInstanceIdentifier: string, Filters: Array<Filter>, MaxRecords: number, Marker: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=DescribeDBInstances?DBInstanceIdentifier=' + (DBInstanceIdentifier == null ? '' : encodeURIComponent(DBInstanceIdentifier)) + '&' + Filters.map(z => `Filters=${z}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of DB log files for the DB instance.
		 * Get /#Action=DescribeDBLogFiles
		 * @param {string} DBInstanceIdentifier <p>The customer-assigned name of the DB instance that contains the log files you want to list.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing DBInstance.</p> </li> </ul>
		 * @param {string} FilenameContains Filters the available log files for log file names that contain the specified string.
		 * @param {number} FileLastWritten Filters the available log files for files written since the specified date, in POSIX timestamp format with milliseconds.
		 * @param {number} FileSize Filters the available log files for files larger than the specified size.
		 * @param {Array<Filter>} Filters This parameter isn't currently supported.
		 * @param {number} MaxRecords The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so you can retrieve the remaining results.
		 * @param {string} Marker The pagination token provided in the previous request. If this parameter is specified the response includes only records beyond the marker, up to MaxRecords.
		 * @return {void} Success
		 */
		GET_DescribeDBLogFiles(DBInstanceIdentifier: string, FilenameContains: string, FileLastWritten: number, FileSize: number, Filters: Array<Filter>, MaxRecords: number, Marker: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=DescribeDBLogFiles?DBInstanceIdentifier=' + (DBInstanceIdentifier == null ? '' : encodeURIComponent(DBInstanceIdentifier)) + '&FilenameContains=' + (FilenameContains == null ? '' : encodeURIComponent(FilenameContains)) + '&FileLastWritten=' + FileLastWritten + '&FileSize=' + FileSize + '&' + Filters.map(z => `Filters=${z}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of <code>DBParameterGroup</code> descriptions. If a <code>DBParameterGroupName</code> is specified, the list will contain only the description of the specified DB parameter group.
		 * Get /#Action=DescribeDBParameterGroups
		 * @param {string} DBParameterGroupName <p>The name of a specific DB parameter group to return details for.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p> </li> </ul>
		 * @param {Array<Filter>} Filters This parameter isn't currently supported.
		 * @param {number} MaxRecords <p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that you can retrieve the remaining results. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 * @param {string} Marker  An optional pagination token provided by a previous <code>DescribeDBParameterGroups</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. 
		 * @return {void} Success
		 */
		GET_DescribeDBParameterGroups(DBParameterGroupName: string, Filters: Array<Filter>, MaxRecords: number, Marker: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=DescribeDBParameterGroups?DBParameterGroupName=' + (DBParameterGroupName == null ? '' : encodeURIComponent(DBParameterGroupName)) + '&' + Filters.map(z => `Filters=${z}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the detailed parameter list for a particular DB parameter group.
		 * Get /#Action=DescribeDBParameters
		 * @param {string} DBParameterGroupName <p>The name of a specific DB parameter group to return details for.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the name of an existing DBParameterGroup.</p> </li> </ul>
		 * @param {string} Source <p>The parameter types to return.</p> <p>Default: All parameter types returned</p> <p>Valid Values: <code>user | system | engine-default</code> </p>
		 * @param {Array<Filter>} Filters This parameter isn't currently supported.
		 * @param {number} MaxRecords <p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that you can retrieve the remaining results. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 * @param {string} Marker  An optional pagination token provided by a previous <code>DescribeDBParameters</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. 
		 * @return {void} Success
		 */
		GET_DescribeDBParameters(DBParameterGroupName: string, Source: string, Filters: Array<Filter>, MaxRecords: number, Marker: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=DescribeDBParameters?DBParameterGroupName=' + (DBParameterGroupName == null ? '' : encodeURIComponent(DBParameterGroupName)) + '&Source=' + (Source == null ? '' : encodeURIComponent(Source)) + '&' + Filters.map(z => `Filters=${z}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <note> <p>This is prerelease documentation for the RDS Database Proxy feature in preview release. It is subject to change.</p> </note> <p>Returns information about DB proxies.</p>
		 * Get /#Action=DescribeDBProxies
		 * @param {string} DBProxyName The name of the DB proxy.
		 * @param {Array<Filter>} Filters This parameter is not currently supported.
		 * @param {string} Marker  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. 
		 * @param {number} MaxRecords <p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 * @return {void} Success
		 */
		GET_DescribeDBProxies(DBProxyName: string, Filters: Array<Filter>, Marker: string, MaxRecords: number, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=DescribeDBProxies?DBProxyName=' + (DBProxyName == null ? '' : encodeURIComponent(DBProxyName)) + '&' + Filters.map(z => `Filters=${z}`).join('&') + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxRecords=' + MaxRecords + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <note> <p>This is prerelease documentation for the RDS Database Proxy feature in preview release. It is subject to change.</p> </note> <p>Returns information about DB proxy target groups, represented by <code>DBProxyTargetGroup</code> data structures.</p>
		 * Get /#Action=DescribeDBProxyTargetGroups
		 * @param {string} DBProxyName The identifier of the <code>DBProxy</code> associated with the target group.
		 * @param {string} TargetGroupName The identifier of the <code>DBProxyTargetGroup</code> to describe.
		 * @param {Array<Filter>} Filters This parameter is not currently supported.
		 * @param {string} Marker  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. 
		 * @param {number} MaxRecords <p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 * @return {void} Success
		 */
		GET_DescribeDBProxyTargetGroups(DBProxyName: string, TargetGroupName: string, Filters: Array<Filter>, Marker: string, MaxRecords: number, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=DescribeDBProxyTargetGroups?DBProxyName=' + (DBProxyName == null ? '' : encodeURIComponent(DBProxyName)) + '&TargetGroupName=' + (TargetGroupName == null ? '' : encodeURIComponent(TargetGroupName)) + '&' + Filters.map(z => `Filters=${z}`).join('&') + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxRecords=' + MaxRecords + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <note> <p>This is prerelease documentation for the RDS Database Proxy feature in preview release. It is subject to change.</p> </note> <p>Returns information about <code>DBProxyTarget</code> objects. This API supports pagination.</p>
		 * Get /#Action=DescribeDBProxyTargets
		 * @param {string} DBProxyName The identifier of the <code>DBProxyTarget</code> to describe.
		 * @param {string} TargetGroupName The identifier of the <code>DBProxyTargetGroup</code> to describe.
		 * @param {Array<Filter>} Filters This parameter is not currently supported.
		 * @param {string} Marker  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. 
		 * @param {number} MaxRecords <p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 * @return {void} Success
		 */
		GET_DescribeDBProxyTargets(DBProxyName: string, TargetGroupName: string, Filters: Array<Filter>, Marker: string, MaxRecords: number, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=DescribeDBProxyTargets?DBProxyName=' + (DBProxyName == null ? '' : encodeURIComponent(DBProxyName)) + '&TargetGroupName=' + (TargetGroupName == null ? '' : encodeURIComponent(TargetGroupName)) + '&' + Filters.map(z => `Filters=${z}`).join('&') + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxRecords=' + MaxRecords + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of <code>DBSecurityGroup</code> descriptions. If a <code>DBSecurityGroupName</code> is specified, the list will contain only the descriptions of the specified DB security group.
		 * Get /#Action=DescribeDBSecurityGroups
		 * @param {string} DBSecurityGroupName The name of the DB security group to return details for.
		 * @param {Array<Filter>} Filters This parameter isn't currently supported.
		 * @param {number} MaxRecords <p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that you can retrieve the remaining results. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 * @param {string} Marker  An optional pagination token provided by a previous <code>DescribeDBSecurityGroups</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. 
		 * @return {void} Success
		 */
		GET_DescribeDBSecurityGroups(DBSecurityGroupName: string, Filters: Array<Filter>, MaxRecords: number, Marker: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=DescribeDBSecurityGroups?DBSecurityGroupName=' + (DBSecurityGroupName == null ? '' : encodeURIComponent(DBSecurityGroupName)) + '&' + Filters.map(z => `Filters=${z}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns a list of DB snapshot attribute names and values for a manual DB snapshot.</p> <p>When sharing snapshots with other AWS accounts, <code>DescribeDBSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the AWS accounts that are authorized to copy or restore the manual DB snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual DB snapshot is public and can be copied or restored by all AWS accounts.</p> <p>To add or remove access for an AWS account to copy or restore a manual DB snapshot, or to make the manual DB snapshot public or private, use the <code>ModifyDBSnapshotAttribute</code> API action.</p>
		 * Get /#Action=DescribeDBSnapshotAttributes
		 * @param {string} DBSnapshotIdentifier The identifier for the DB snapshot to describe the attributes for.
		 * @return {void} Success
		 */
		GET_DescribeDBSnapshotAttributes(DBSnapshotIdentifier: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=DescribeDBSnapshotAttributes?DBSnapshotIdentifier=' + (DBSnapshotIdentifier == null ? '' : encodeURIComponent(DBSnapshotIdentifier)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns information about DB snapshots. This API action supports pagination.
		 * Get /#Action=DescribeDBSnapshots
		 * @param {string} DBInstanceIdentifier <p>The ID of the DB instance to retrieve the list of DB snapshots for. This parameter can't be used in conjunction with <code>DBSnapshotIdentifier</code>. This parameter isn't case-sensitive. </p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the identifier of an existing DBInstance.</p> </li> </ul>
		 * @param {string} DBSnapshotIdentifier <p> A specific DB snapshot identifier to describe. This parameter can't be used in conjunction with <code>DBInstanceIdentifier</code>. This value is stored as a lowercase string. </p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the identifier of an existing DBSnapshot.</p> </li> <li> <p>If this identifier is for an automated snapshot, the <code>SnapshotType</code> parameter must also be specified.</p> </li> </ul>
		 * @param {string} SnapshotType <p>The type of snapshots to be returned. You can specify one of the following values:</p> <ul> <li> <p> <code>automated</code> - Return all DB snapshots that have been automatically taken by Amazon RDS for my AWS account.</p> </li> <li> <p> <code>manual</code> - Return all DB snapshots that have been taken by my AWS account.</p> </li> <li> <p> <code>shared</code> - Return all manual DB snapshots that have been shared to my AWS account.</p> </li> <li> <p> <code>public</code> - Return all DB snapshots that have been marked as public.</p> </li> <li> <p> <code>awsbackup</code> - Return the DB snapshots managed by the AWS Backup service.</p> <p>For information about AWS Backup, see the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html"> <i>AWS Backup Developer Guide.</i> </a> </p> <p>The <code>awsbackup</code> type does not apply to Aurora.</p> </li> </ul> <p>If you don't specify a <code>SnapshotType</code> value, then both automated and manual snapshots are returned. Shared and public DB snapshots are not included in the returned results by default. You can include shared snapshots with these results by enabling the <code>IncludeShared</code> parameter. You can include public snapshots with these results by enabling the <code>IncludePublic</code> parameter.</p> <p>The <code>IncludeShared</code> and <code>IncludePublic</code> parameters don't apply for <code>SnapshotType</code> values of <code>manual</code> or <code>automated</code>. The <code>IncludePublic</code> parameter doesn't apply when <code>SnapshotType</code> is set to <code>shared</code>. The <code>IncludeShared</code> parameter doesn't apply when <code>SnapshotType</code> is set to <code>public</code>.</p>
		 * @param {Array<Filter>} Filters <p>A filter that specifies one or more DB snapshots to describe.</p> <p>Supported filters:</p> <ul> <li> <p> <code>db-instance-id</code> - Accepts DB instance identifiers and DB instance Amazon Resource Names (ARNs).</p> </li> <li> <p> <code>db-snapshot-id</code> - Accepts DB snapshot identifiers.</p> </li> <li> <p> <code>dbi-resource-id</code> - Accepts identifiers of source DB instances.</p> </li> <li> <p> <code>snapshot-type</code> - Accepts types of DB snapshots.</p> </li> <li> <p> <code>engine</code> - Accepts names of database engines.</p> </li> </ul>
		 * @param {number} MaxRecords <p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that you can retrieve the remaining results. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 * @param {string} Marker  An optional pagination token provided by a previous <code>DescribeDBSnapshots</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. 
		 * @param {boolean} IncludeShared <p>A value that indicates whether to include shared manual DB cluster snapshots from other AWS accounts that this AWS account has been given permission to copy or restore. By default, these snapshots are not included.</p> <p>You can give an AWS account permission to restore a manual DB snapshot from another AWS account by using the <code>ModifyDBSnapshotAttribute</code> API action.</p>
		 * @param {boolean} IncludePublic <p>A value that indicates whether to include manual DB cluster snapshots that are public and can be copied or restored by any AWS account. By default, the public snapshots are not included.</p> <p>You can share a manual DB snapshot as public by using the <a>ModifyDBSnapshotAttribute</a> API.</p>
		 * @param {string} DbiResourceId A specific DB resource ID to describe.
		 * @return {void} Success
		 */
		GET_DescribeDBSnapshots(DBInstanceIdentifier: string, DBSnapshotIdentifier: string, SnapshotType: string, Filters: Array<Filter>, MaxRecords: number, Marker: string, IncludeShared: boolean, IncludePublic: boolean, DbiResourceId: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=DescribeDBSnapshots?DBInstanceIdentifier=' + (DBInstanceIdentifier == null ? '' : encodeURIComponent(DBInstanceIdentifier)) + '&DBSnapshotIdentifier=' + (DBSnapshotIdentifier == null ? '' : encodeURIComponent(DBSnapshotIdentifier)) + '&SnapshotType=' + (SnapshotType == null ? '' : encodeURIComponent(SnapshotType)) + '&' + Filters.map(z => `Filters=${z}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&IncludeShared=' + IncludeShared + '&IncludePublic=' + IncludePublic + '&DbiResourceId=' + (DbiResourceId == null ? '' : encodeURIComponent(DbiResourceId)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns a list of DBSubnetGroup descriptions. If a DBSubnetGroupName is specified, the list will contain only the descriptions of the specified DBSubnetGroup.</p> <p>For an overview of CIDR ranges, go to the <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Wikipedia Tutorial</a>. </p>
		 * Get /#Action=DescribeDBSubnetGroups
		 * @param {string} DBSubnetGroupName The name of the DB subnet group to return details for.
		 * @param {Array<Filter>} Filters This parameter isn't currently supported.
		 * @param {number} MaxRecords <p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that you can retrieve the remaining results. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 * @param {string} Marker  An optional pagination token provided by a previous DescribeDBSubnetGroups request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. 
		 * @return {void} Success
		 */
		GET_DescribeDBSubnetGroups(DBSubnetGroupName: string, Filters: Array<Filter>, MaxRecords: number, Marker: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=DescribeDBSubnetGroups?DBSubnetGroupName=' + (DBSubnetGroupName == null ? '' : encodeURIComponent(DBSubnetGroupName)) + '&' + Filters.map(z => `Filters=${z}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns the default engine and system parameter information for the cluster database engine.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p>
		 * Get /#Action=DescribeEngineDefaultClusterParameters
		 * @param {string} DBParameterGroupFamily The name of the DB cluster parameter group family to return engine parameter information for.
		 * @param {Array<Filter>} Filters This parameter isn't currently supported.
		 * @param {number} MaxRecords <p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so you can retrieve the remaining results. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 * @param {string} Marker  An optional pagination token provided by a previous <code>DescribeEngineDefaultClusterParameters</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. 
		 * @return {void} Success
		 */
		GET_DescribeEngineDefaultClusterParameters(DBParameterGroupFamily: string, Filters: Array<Filter>, MaxRecords: number, Marker: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=DescribeEngineDefaultClusterParameters?DBParameterGroupFamily=' + (DBParameterGroupFamily == null ? '' : encodeURIComponent(DBParameterGroupFamily)) + '&' + Filters.map(z => `Filters=${z}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the default engine and system parameter information for the specified database engine.
		 * Get /#Action=DescribeEngineDefaultParameters
		 * @param {string} DBParameterGroupFamily The name of the DB parameter group family.
		 * @param {Array<Filter>} Filters This parameter isn't currently supported.
		 * @param {number} MaxRecords <p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so you can retrieve the remaining results. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 * @param {string} Marker  An optional pagination token provided by a previous <code>DescribeEngineDefaultParameters</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. 
		 * @return {void} Success
		 */
		GET_DescribeEngineDefaultParameters(DBParameterGroupFamily: string, Filters: Array<Filter>, MaxRecords: number, Marker: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=DescribeEngineDefaultParameters?DBParameterGroupFamily=' + (DBParameterGroupFamily == null ? '' : encodeURIComponent(DBParameterGroupFamily)) + '&' + Filters.map(z => `Filters=${z}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Displays a list of categories for all event source types, or, if specified, for a specified source type. You can see a list of the event categories and source types in the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.html"> Events</a> topic in the <i>Amazon RDS User Guide.</i>
		 * Get /#Action=DescribeEventCategories
		 * @param {string} SourceType <p>The type of source that is generating the events.</p> <p>Valid values: db-instance | db-parameter-group | db-security-group | db-snapshot</p>
		 * @param {Array<Filter>} Filters This parameter isn't currently supported.
		 * @return {void} Success
		 */
		GET_DescribeEventCategories(SourceType: string, Filters: Array<Filter>, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=DescribeEventCategories?SourceType=' + (SourceType == null ? '' : encodeURIComponent(SourceType)) + '&' + Filters.map(z => `Filters=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists all the subscription descriptions for a customer account. The description for a subscription includes SubscriptionName, SNSTopicARN, CustomerID, SourceType, SourceID, CreationTime, and Status.</p> <p>If you specify a SubscriptionName, lists the description for that subscription.</p>
		 * Get /#Action=DescribeEventSubscriptions
		 * @param {string} SubscriptionName The name of the RDS event notification subscription you want to describe.
		 * @param {Array<Filter>} Filters This parameter isn't currently supported.
		 * @param {number} MaxRecords <p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that you can retrieve the remaining results. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 * @param {string} Marker  An optional pagination token provided by a previous DescribeOrderableDBInstanceOptions request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code> . 
		 * @return {void} Success
		 */
		GET_DescribeEventSubscriptions(SubscriptionName: string, Filters: Array<Filter>, MaxRecords: number, Marker: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=DescribeEventSubscriptions?SubscriptionName=' + (SubscriptionName == null ? '' : encodeURIComponent(SubscriptionName)) + '&' + Filters.map(z => `Filters=${z}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns events related to DB instances, DB security groups, DB snapshots, and DB parameter groups for the past 14 days. Events specific to a particular DB instance, DB security group, database snapshot, or DB parameter group can be obtained by providing the name as a parameter. By default, the past hour of events are returned.
		 * Get /#Action=DescribeEvents
		 * @param {string} SourceIdentifier <p>The identifier of the event source for which events are returned. If not specified, then all sources are included in the response.</p> <p>Constraints:</p> <ul> <li> <p>If SourceIdentifier is supplied, SourceType must also be provided.</p> </li> <li> <p>If the source type is <code>DBInstance</code>, then a <code>DBInstanceIdentifier</code> must be supplied.</p> </li> <li> <p>If the source type is <code>DBSecurityGroup</code>, a <code>DBSecurityGroupName</code> must be supplied.</p> </li> <li> <p>If the source type is <code>DBParameterGroup</code>, a <code>DBParameterGroupName</code> must be supplied.</p> </li> <li> <p>If the source type is <code>DBSnapshot</code>, a <code>DBSnapshotIdentifier</code> must be supplied.</p> </li> <li> <p>Can't end with a hyphen or contain two consecutive hyphens.</p> </li> </ul>
		 * @param {SourceType} SourceType The event source to retrieve events for. If no value is specified, all events are returned.
		 * @param {Date} StartTime <p> The beginning of the time interval to retrieve events for, specified in ISO 8601 format. For more information about ISO 8601, go to the <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO8601 Wikipedia page.</a> </p> <p>Example: 2009-07-08T18:00Z</p>
		 * @param {Date} EndTime <p> The end of the time interval for which to retrieve events, specified in ISO 8601 format. For more information about ISO 8601, go to the <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO8601 Wikipedia page.</a> </p> <p>Example: 2009-07-08T18:00Z</p>
		 * @param {number} Duration <p>The number of minutes to retrieve events for.</p> <p>Default: 60</p>
		 * @param {Array<String>} EventCategories A list of event categories that trigger notifications for a event notification subscription.
		 * @param {Array<Filter>} Filters This parameter isn't currently supported.
		 * @param {number} MaxRecords <p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that you can retrieve the remaining results. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 * @param {string} Marker  An optional pagination token provided by a previous DescribeEvents request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. 
		 * @return {void} Success
		 */
		GET_DescribeEvents(SourceIdentifier: string, SourceType: SourceType, StartTime: Date, EndTime: Date, Duration: number, EventCategories: Array<String>, Filters: Array<Filter>, MaxRecords: number, Marker: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=DescribeEvents?SourceIdentifier=' + (SourceIdentifier == null ? '' : encodeURIComponent(SourceIdentifier)) + '&SourceType=' + SourceType + '&StartTime=' + StartTime.toISOString() + '&EndTime=' + EndTime.toISOString() + '&Duration=' + Duration + '&' + EventCategories.map(z => `EventCategories=${z}`).join('&') + '&' + Filters.map(z => `Filters=${z}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns information about a snapshot export to Amazon S3. This API operation supports pagination.
		 * Get /#Action=DescribeExportTasks
		 * @param {string} ExportTaskIdentifier The identifier of the snapshot export task to be described.
		 * @param {string} SourceArn The Amazon Resource Name (ARN) of the snapshot exported to Amazon S3.
		 * @param {Array<Filter>} Filters <p>Filters specify one or more snapshot exports to describe. The filters are specified as name-value pairs that define what to include in the output.</p> <p>Supported filters include the following: </p> <ul> <li> <p> <code>export-task-identifier</code> - An identifier for the snapshot export task.</p> </li> <li> <p> <code>s3-bucket</code> - The Amazon S3 bucket the snapshot is exported to.</p> </li> <li> <p> <code>source-arn</code> - The Amazon Resource Name (ARN) of the snapshot exported to Amazon S3</p> </li> <li> <p> <code>status</code> - The status of the export task.</p> </li> </ul>
		 * @param {string} Marker  An optional pagination token provided by a previous <code>DescribeExportTasks</code> request. If you specify this parameter, the response includes only records beyond the marker, up to the value specified by the <code>MaxRecords</code> parameter. 
		 * @param {number} MaxRecords <p> The maximum number of records to include in the response. If more records exist than the specified value, a pagination token called a marker is included in the response. You can use the marker in a later <code>DescribeExportTasks</code> request to retrieve the remaining results. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 * @return {void} Success
		 */
		GET_DescribeExportTasks(ExportTaskIdentifier: string, SourceArn: string, Filters: Array<Filter>, Marker: string, MaxRecords: number, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=DescribeExportTasks?ExportTaskIdentifier=' + (ExportTaskIdentifier == null ? '' : encodeURIComponent(ExportTaskIdentifier)) + '&SourceArn=' + (SourceArn == null ? '' : encodeURIComponent(SourceArn)) + '&' + Filters.map(z => `Filters=${z}`).join('&') + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxRecords=' + MaxRecords + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p> Returns information about Aurora global database clusters. This API supports pagination. </p> <p> For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
		 * Get /#Action=DescribeGlobalClusters
		 * @param {string} GlobalClusterIdentifier <p> The user-supplied DB cluster identifier. If this parameter is specified, information from only the specific DB cluster is returned. This parameter isn't case-sensitive. </p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match an existing DBClusterIdentifier.</p> </li> </ul>
		 * @param {Array<Filter>} Filters <p>A filter that specifies one or more global DB clusters to describe.</p> <p>Supported filters:</p> <ul> <li> <p> <code>db-cluster-id</code> - Accepts DB cluster identifiers and DB cluster Amazon Resource Names (ARNs). The results list will only include information about the DB clusters identified by these ARNs.</p> </li> </ul>
		 * @param {number} MaxRecords <p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that you can retrieve the remaining results. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 * @param {string} Marker  An optional pagination token provided by a previous <code>DescribeGlobalClusters</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. 
		 * @return {void} Success
		 */
		GET_DescribeGlobalClusters(GlobalClusterIdentifier: string, Filters: Array<Filter>, MaxRecords: number, Marker: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=DescribeGlobalClusters?GlobalClusterIdentifier=' + (GlobalClusterIdentifier == null ? '' : encodeURIComponent(GlobalClusterIdentifier)) + '&' + Filters.map(z => `Filters=${z}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes the available installation media for a DB engine that requires an on-premises customer provided license, such as Microsoft SQL Server.
		 * Get /#Action=DescribeInstallationMedia
		 * @param {string} InstallationMediaId The installation medium ID.
		 * @param {Array<Filter>} Filters <p>A filter that specifies one or more installation media to describe. Supported filters include the following:</p> <ul> <li> <p> <code>custom-availability-zone-id</code> - Accepts custom Availability Zone (AZ) identifiers. The results list includes information about only the custom AZs identified by these identifiers.</p> </li> <li> <p> <code>engine</code> - Accepts database engines. The results list includes information about only the database engines identified by these identifiers.</p> <p>For more information about the valid engines for installation media, see <a>ImportInstallationMedia</a>.</p> </li> </ul>
		 * @param {number} MaxRecords An optional pagination token provided by a previous DescribeInstallationMedia request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
		 * @param {string} Marker An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
		 * @return {void} Success
		 */
		GET_DescribeInstallationMedia(InstallationMediaId: string, Filters: Array<Filter>, MaxRecords: number, Marker: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=DescribeInstallationMedia?InstallationMediaId=' + (InstallationMediaId == null ? '' : encodeURIComponent(InstallationMediaId)) + '&' + Filters.map(z => `Filters=${z}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes all available options.
		 * Get /#Action=DescribeOptionGroupOptions
		 * @param {string} EngineName A required parameter. Options available for the given engine name are described.
		 * @param {string} MajorEngineVersion If specified, filters the results to include only options for the specified major engine version.
		 * @param {Array<Filter>} Filters This parameter isn't currently supported.
		 * @param {number} MaxRecords <p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that you can retrieve the remaining results. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 * @param {string} Marker An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
		 * @return {void} Success
		 */
		GET_DescribeOptionGroupOptions(EngineName: string, MajorEngineVersion: string, Filters: Array<Filter>, MaxRecords: number, Marker: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=DescribeOptionGroupOptions?EngineName=' + (EngineName == null ? '' : encodeURIComponent(EngineName)) + '&MajorEngineVersion=' + (MajorEngineVersion == null ? '' : encodeURIComponent(MajorEngineVersion)) + '&' + Filters.map(z => `Filters=${z}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes the available option groups.
		 * Get /#Action=DescribeOptionGroups
		 * @param {string} OptionGroupName The name of the option group to describe. Can't be supplied together with EngineName or MajorEngineVersion.
		 * @param {Array<Filter>} Filters This parameter isn't currently supported.
		 * @param {string} Marker  An optional pagination token provided by a previous DescribeOptionGroups request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. 
		 * @param {number} MaxRecords <p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that you can retrieve the remaining results. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 * @param {string} EngineName Filters the list of option groups to only include groups associated with a specific database engine.
		 * @param {string} MajorEngineVersion Filters the list of option groups to only include groups associated with a specific database engine version. If specified, then EngineName must also be specified.
		 * @return {void} Success
		 */
		GET_DescribeOptionGroups(OptionGroupName: string, Filters: Array<Filter>, Marker: string, MaxRecords: number, EngineName: string, MajorEngineVersion: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=DescribeOptionGroups?OptionGroupName=' + (OptionGroupName == null ? '' : encodeURIComponent(OptionGroupName)) + '&' + Filters.map(z => `Filters=${z}`).join('&') + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxRecords=' + MaxRecords + '&EngineName=' + (EngineName == null ? '' : encodeURIComponent(EngineName)) + '&MajorEngineVersion=' + (MajorEngineVersion == null ? '' : encodeURIComponent(MajorEngineVersion)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of orderable DB instance options for the specified engine.
		 * Get /#Action=DescribeOrderableDBInstanceOptions
		 * @param {string} Engine The name of the engine to retrieve DB instance options for.
		 * @param {string} EngineVersion The engine version filter value. Specify this parameter to show only the available offerings matching the specified engine version.
		 * @param {string} DBInstanceClass The DB instance class filter value. Specify this parameter to show only the available offerings matching the specified DB instance class.
		 * @param {string} LicenseModel The license model filter value. Specify this parameter to show only the available offerings matching the specified license model.
		 * @param {string} AvailabilityZoneGroup <p>The Availability Zone group associated with a Local Zone. Specify this parameter to retrieve available offerings for the Local Zones in the group.</p> <p>Omit this parameter to show the available offerings in the specified AWS Region.</p>
		 * @param {boolean} Vpc A value that indicates whether to show only VPC or non-VPC offerings.
		 * @param {Array<Filter>} Filters This parameter isn't currently supported.
		 * @param {number} MaxRecords <p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that you can retrieve the remaining results. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 * @param {string} Marker  An optional pagination token provided by a previous DescribeOrderableDBInstanceOptions request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code> . 
		 * @return {void} Success
		 */
		GET_DescribeOrderableDBInstanceOptions(Engine: string, EngineVersion: string, DBInstanceClass: string, LicenseModel: string, AvailabilityZoneGroup: string, Vpc: boolean, Filters: Array<Filter>, MaxRecords: number, Marker: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=DescribeOrderableDBInstanceOptions?Engine=' + (Engine == null ? '' : encodeURIComponent(Engine)) + '&EngineVersion=' + (EngineVersion == null ? '' : encodeURIComponent(EngineVersion)) + '&DBInstanceClass=' + (DBInstanceClass == null ? '' : encodeURIComponent(DBInstanceClass)) + '&LicenseModel=' + (LicenseModel == null ? '' : encodeURIComponent(LicenseModel)) + '&AvailabilityZoneGroup=' + (AvailabilityZoneGroup == null ? '' : encodeURIComponent(AvailabilityZoneGroup)) + '&Vpc=' + Vpc + '&' + Filters.map(z => `Filters=${z}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of resources (for example, DB instances) that have at least one pending maintenance action.
		 * Get /#Action=DescribePendingMaintenanceActions
		 * @param {string} ResourceIdentifier The ARN of a resource to return pending maintenance actions for.
		 * @param {Array<Filter>} Filters <p>A filter that specifies one or more resources to return pending maintenance actions for.</p> <p>Supported filters:</p> <ul> <li> <p> <code>db-cluster-id</code> - Accepts DB cluster identifiers and DB cluster Amazon Resource Names (ARNs). The results list will only include pending maintenance actions for the DB clusters identified by these ARNs.</p> </li> <li> <p> <code>db-instance-id</code> - Accepts DB instance identifiers and DB instance ARNs. The results list will only include pending maintenance actions for the DB instances identified by these ARNs.</p> </li> </ul>
		 * @param {string} Marker  An optional pagination token provided by a previous <code>DescribePendingMaintenanceActions</code> request. If this parameter is specified, the response includes only records beyond the marker, up to a number of records specified by <code>MaxRecords</code>. 
		 * @param {number} MaxRecords <p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that you can retrieve the remaining results. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 * @return {void} Success
		 */
		GET_DescribePendingMaintenanceActions(ResourceIdentifier: string, Filters: Array<Filter>, Marker: string, MaxRecords: number, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=DescribePendingMaintenanceActions?ResourceIdentifier=' + (ResourceIdentifier == null ? '' : encodeURIComponent(ResourceIdentifier)) + '&' + Filters.map(z => `Filters=${z}`).join('&') + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxRecords=' + MaxRecords + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns information about reserved DB instances for this account, or about a specified reserved DB instance.
		 * Get /#Action=DescribeReservedDBInstances
		 * @param {string} ReservedDBInstanceId The reserved DB instance identifier filter value. Specify this parameter to show only the reservation that matches the specified reservation ID.
		 * @param {string} ReservedDBInstancesOfferingId The offering identifier filter value. Specify this parameter to show only purchased reservations matching the specified offering identifier.
		 * @param {string} DBInstanceClass The DB instance class filter value. Specify this parameter to show only those reservations matching the specified DB instances class.
		 * @param {string} Duration <p>The duration filter value, specified in years or seconds. Specify this parameter to show only reservations for this duration.</p> <p>Valid Values: <code>1 | 3 | 31536000 | 94608000</code> </p>
		 * @param {string} ProductDescription The product description filter value. Specify this parameter to show only those reservations matching the specified product description.
		 * @param {string} OfferingType <p>The offering type filter value. Specify this parameter to show only the available offerings matching the specified offering type.</p> <p>Valid Values: <code>"Partial Upfront" | "All Upfront" | "No Upfront" </code> </p>
		 * @param {boolean} MultiAZ A value that indicates whether to show only those reservations that support Multi-AZ.
		 * @param {string} LeaseId <p>The lease identifier filter value. Specify this parameter to show only the reservation that matches the specified lease ID.</p> <note> <p>AWS Support might request the lease ID for an issue related to a reserved DB instance.</p> </note>
		 * @param {Array<Filter>} Filters This parameter isn't currently supported.
		 * @param {number} MaxRecords <p> The maximum number of records to include in the response. If more than the <code>MaxRecords</code> value is available, a pagination token called a marker is included in the response so you can retrieve the remaining results. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 * @param {string} Marker  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. 
		 * @return {void} Success
		 */
		GET_DescribeReservedDBInstances(ReservedDBInstanceId: string, ReservedDBInstancesOfferingId: string, DBInstanceClass: string, Duration: string, ProductDescription: string, OfferingType: string, MultiAZ: boolean, LeaseId: string, Filters: Array<Filter>, MaxRecords: number, Marker: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=DescribeReservedDBInstances?ReservedDBInstanceId=' + (ReservedDBInstanceId == null ? '' : encodeURIComponent(ReservedDBInstanceId)) + '&ReservedDBInstancesOfferingId=' + (ReservedDBInstancesOfferingId == null ? '' : encodeURIComponent(ReservedDBInstancesOfferingId)) + '&DBInstanceClass=' + (DBInstanceClass == null ? '' : encodeURIComponent(DBInstanceClass)) + '&Duration=' + (Duration == null ? '' : encodeURIComponent(Duration)) + '&ProductDescription=' + (ProductDescription == null ? '' : encodeURIComponent(ProductDescription)) + '&OfferingType=' + (OfferingType == null ? '' : encodeURIComponent(OfferingType)) + '&MultiAZ=' + MultiAZ + '&LeaseId=' + (LeaseId == null ? '' : encodeURIComponent(LeaseId)) + '&' + Filters.map(z => `Filters=${z}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists available reserved DB instance offerings.
		 * Get /#Action=DescribeReservedDBInstancesOfferings
		 * @param {string} ReservedDBInstancesOfferingId <p>The offering identifier filter value. Specify this parameter to show only the available offering that matches the specified reservation identifier.</p> <p>Example: <code>438012d3-4052-4cc7-b2e3-8d3372e0e706</code> </p>
		 * @param {string} DBInstanceClass The DB instance class filter value. Specify this parameter to show only the available offerings matching the specified DB instance class.
		 * @param {string} Duration <p>Duration filter value, specified in years or seconds. Specify this parameter to show only reservations for this duration.</p> <p>Valid Values: <code>1 | 3 | 31536000 | 94608000</code> </p>
		 * @param {string} ProductDescription <p>Product description filter value. Specify this parameter to show only the available offerings that contain the specified product description.</p> <note> <p>The results show offerings that partially match the filter value.</p> </note>
		 * @param {string} OfferingType <p>The offering type filter value. Specify this parameter to show only the available offerings matching the specified offering type.</p> <p>Valid Values: <code>"Partial Upfront" | "All Upfront" | "No Upfront" </code> </p>
		 * @param {boolean} MultiAZ A value that indicates whether to show only those reservations that support Multi-AZ.
		 * @param {Array<Filter>} Filters This parameter isn't currently supported.
		 * @param {number} MaxRecords <p> The maximum number of records to include in the response. If more than the <code>MaxRecords</code> value is available, a pagination token called a marker is included in the response so you can retrieve the remaining results. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 * @param {string} Marker  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. 
		 * @return {void} Success
		 */
		GET_DescribeReservedDBInstancesOfferings(ReservedDBInstancesOfferingId: string, DBInstanceClass: string, Duration: string, ProductDescription: string, OfferingType: string, MultiAZ: boolean, Filters: Array<Filter>, MaxRecords: number, Marker: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=DescribeReservedDBInstancesOfferings?ReservedDBInstancesOfferingId=' + (ReservedDBInstancesOfferingId == null ? '' : encodeURIComponent(ReservedDBInstancesOfferingId)) + '&DBInstanceClass=' + (DBInstanceClass == null ? '' : encodeURIComponent(DBInstanceClass)) + '&Duration=' + (Duration == null ? '' : encodeURIComponent(Duration)) + '&ProductDescription=' + (ProductDescription == null ? '' : encodeURIComponent(ProductDescription)) + '&OfferingType=' + (OfferingType == null ? '' : encodeURIComponent(OfferingType)) + '&MultiAZ=' + MultiAZ + '&' + Filters.map(z => `Filters=${z}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of the source AWS Regions where the current AWS Region can create a read replica or copy a DB snapshot from. This API action supports pagination.
		 * Get /#Action=DescribeSourceRegions
		 * @param {string} RegionName <p>The source AWS Region name. For example, <code>us-east-1</code>.</p> <p>Constraints:</p> <ul> <li> <p>Must specify a valid AWS Region name.</p> </li> </ul>
		 * @param {number} MaxRecords <p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so you can retrieve the remaining results. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 * @param {string} Marker An optional pagination token provided by a previous <code>DescribeSourceRegions</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
		 * @param {Array<Filter>} Filters This parameter isn't currently supported.
		 * @return {void} Success
		 */
		GET_DescribeSourceRegions(RegionName: string, MaxRecords: number, Marker: string, Filters: Array<Filter>, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=DescribeSourceRegions?RegionName=' + (RegionName == null ? '' : encodeURIComponent(RegionName)) + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&' + Filters.map(z => `Filters=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * You can call <code>DescribeValidDBInstanceModifications</code> to learn what modifications you can make to your DB instance. You can use this information when you call <code>ModifyDBInstance</code>.
		 * Get /#Action=DescribeValidDBInstanceModifications
		 * @param {string} DBInstanceIdentifier The customer identifier or the ARN of your DB instance. 
		 * @return {void} Success
		 */
		GET_DescribeValidDBInstanceModifications(DBInstanceIdentifier: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=DescribeValidDBInstanceModifications?DBInstanceIdentifier=' + (DBInstanceIdentifier == null ? '' : encodeURIComponent(DBInstanceIdentifier)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Downloads all or a portion of the specified log file, up to 1 MB in size.
		 * Get /#Action=DownloadDBLogFilePortion
		 * @param {string} DBInstanceIdentifier <p>The customer-assigned name of the DB instance that contains the log files you want to list.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing DBInstance.</p> </li> </ul>
		 * @param {string} LogFileName The name of the log file to be downloaded.
		 * @param {string} Marker The pagination token provided in the previous request or "0". If the Marker parameter is specified the response includes only records beyond the marker until the end of the file or up to NumberOfLines.
		 * @param {number} NumberOfLines <p>The number of lines to download. If the number of lines specified results in a file over 1 MB in size, the file is truncated at 1 MB in size.</p> <p>If the NumberOfLines parameter is specified, then the block of lines returned can be from the beginning or the end of the log file, depending on the value of the Marker parameter.</p> <ul> <li> <p>If neither Marker or NumberOfLines are specified, the entire log file is returned up to a maximum of 10000 lines, starting with the most recent log entries first.</p> </li> <li> <p>If NumberOfLines is specified and Marker isn't specified, then the most recent lines from the end of the log file are returned.</p> </li> <li> <p>If Marker is specified as "0", then the specified number of lines from the beginning of the log file are returned.</p> </li> <li> <p>You can download the log file in blocks of lines by specifying the size of the block using the NumberOfLines parameter, and by specifying a value of "0" for the Marker parameter in your first request. Include the Marker value returned in the response as the Marker value for the next request, continuing until the AdditionalDataPending response element returns false.</p> </li> </ul>
		 * @return {void} Success
		 */
		GET_DownloadDBLogFilePortion(DBInstanceIdentifier: string, LogFileName: string, Marker: string, NumberOfLines: number, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=DownloadDBLogFilePortion?DBInstanceIdentifier=' + (DBInstanceIdentifier == null ? '' : encodeURIComponent(DBInstanceIdentifier)) + '&LogFileName=' + (LogFileName == null ? '' : encodeURIComponent(LogFileName)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&NumberOfLines=' + NumberOfLines + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Forces a failover for a DB cluster.</p> <p>A failover for a DB cluster promotes one of the Aurora Replicas (read-only instances) in the DB cluster to be the primary instance (the cluster writer).</p> <p>Amazon Aurora will automatically fail over to an Aurora Replica, if one exists, when the primary instance fails. You can force a failover when you want to simulate a failure of a primary instance for testing. Because each instance in a DB cluster has its own endpoint address, you will need to clean up and re-establish any existing connections that use those endpoint addresses when the failover is complete.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
		 * Get /#Action=FailoverDBCluster
		 * @param {string} DBClusterIdentifier <p>A DB cluster identifier to force a failover for. This parameter isn't case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing DBCluster.</p> </li> </ul>
		 * @param {string} TargetDBInstanceIdentifier <p>The name of the instance to promote to the primary instance.</p> <p>You must specify the instance identifier for an Aurora Replica in the DB cluster. For example, <code>mydbcluster-replica1</code>.</p>
		 * @return {void} Success
		 */
		GET_FailoverDBCluster(DBClusterIdentifier: string, TargetDBInstanceIdentifier: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=FailoverDBCluster?DBClusterIdentifier=' + (DBClusterIdentifier == null ? '' : encodeURIComponent(DBClusterIdentifier)) + '&TargetDBInstanceIdentifier=' + (TargetDBInstanceIdentifier == null ? '' : encodeURIComponent(TargetDBInstanceIdentifier)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Imports the installation media for a DB engine that requires an on-premises customer provided license, such as SQL Server.
		 * Get /#Action=ImportInstallationMedia
		 * @param {string} CustomAvailabilityZoneId The identifier of the custom Availability Zone (AZ) to import the installation media to.
		 * @param {string} Engine <p>The name of the database engine to be used for this instance. </p> <p>The list only includes supported DB engines that require an on-premises customer provided license. </p> <p>Valid Values: </p> <ul> <li> <p> <code>sqlserver-ee</code> </p> </li> <li> <p> <code>sqlserver-se</code> </p> </li> <li> <p> <code>sqlserver-ex</code> </p> </li> <li> <p> <code>sqlserver-web</code> </p> </li> </ul>
		 * @param {string} EngineVersion <p>The version number of the database engine to use.</p> <p>For a list of valid engine versions, call <a>DescribeDBEngineVersions</a>.</p> <p>The following are the database engines and links to information about the major and minor versions. The list only includes DB engines that require an on-premises customer provided license.</p> <p> <b>Microsoft SQL Server</b> </p> <p>See <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_SQLServer.html#SQLServer.Concepts.General.FeatureSupport">Version and Feature Support on Amazon RDS</a> in the <i>Amazon RDS User Guide.</i> </p>
		 * @param {string} EngineInstallationMediaPath <p>The path to the installation medium for the specified DB engine.</p> <p>Example: <code>SQLServerISO/en_sql_server_2016_enterprise_x64_dvd_8701793.iso</code> </p>
		 * @param {string} OSInstallationMediaPath <p>The path to the installation medium for the operating system associated with the specified DB engine.</p> <p>Example: <code>WindowsISO/en_windows_server_2016_x64_dvd_9327751.iso</code> </p>
		 * @return {void} Success
		 */
		GET_ImportInstallationMedia(CustomAvailabilityZoneId: string, Engine: string, EngineVersion: string, EngineInstallationMediaPath: string, OSInstallationMediaPath: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=ImportInstallationMedia?CustomAvailabilityZoneId=' + (CustomAvailabilityZoneId == null ? '' : encodeURIComponent(CustomAvailabilityZoneId)) + '&Engine=' + (Engine == null ? '' : encodeURIComponent(Engine)) + '&EngineVersion=' + (EngineVersion == null ? '' : encodeURIComponent(EngineVersion)) + '&EngineInstallationMediaPath=' + (EngineInstallationMediaPath == null ? '' : encodeURIComponent(EngineInstallationMediaPath)) + '&OSInstallationMediaPath=' + (OSInstallationMediaPath == null ? '' : encodeURIComponent(OSInstallationMediaPath)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists all tags on an Amazon RDS resource.</p> <p>For an overview on tagging an Amazon RDS resource, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide</i>.</p>
		 * Get /#Action=ListTagsForResource
		 * @param {string} ResourceName The Amazon RDS resource with tags to be listed. This value is an Amazon Resource Name (ARN). For information about creating an ARN, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing"> Constructing an ARN for Amazon RDS</a> in the <i>Amazon RDS User Guide</i>.
		 * @param {Array<Filter>} Filters This parameter isn't currently supported.
		 * @return {void} Success
		 */
		GET_ListTagsForResource(ResourceName: string, Filters: Array<Filter>, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=ListTagsForResource?ResourceName=' + (ResourceName == null ? '' : encodeURIComponent(ResourceName)) + '&' + Filters.map(z => `Filters=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Override the system-default Secure Sockets Layer/Transport Layer Security (SSL/TLS) certificate for Amazon RDS for new DB instances temporarily, or remove the override.</p> <p>By using this operation, you can specify an RDS-approved SSL/TLS certificate for new DB instances that is different from the default certificate provided by RDS. You can also use this operation to remove the override, so that new DB instances use the default certificate provided by RDS.</p> <p>You might need to override the default certificate in the following situations:</p> <ul> <li> <p>You already migrated your applications to support the latest certificate authority (CA) certificate, but the new CA certificate is not yet the RDS default CA certificate for the specified AWS Region.</p> </li> <li> <p>RDS has already moved to a new default CA certificate for the specified AWS Region, but you are still in the process of supporting the new CA certificate. In this case, you temporarily need additional time to finish your application changes.</p> </li> </ul> <p>For more information about rotating your SSL/TLS certificate for RDS DB engines, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL-certificate-rotation.html"> Rotating Your SSL/TLS Certificate</a> in the <i>Amazon RDS User Guide</i>.</p> <p>For more information about rotating your SSL/TLS certificate for Aurora DB engines, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL-certificate-rotation.html"> Rotating Your SSL/TLS Certificate</a> in the <i>Amazon Aurora User Guide</i>.</p>
		 * Get /#Action=ModifyCertificates
		 * @param {string} CertificateIdentifier <p>The new default certificate identifier to override the current one with.</p> <p>To determine the valid values, use the <code>describe-certificates</code> AWS CLI command or the <code>DescribeCertificates</code> API operation.</p>
		 * @param {boolean} RemoveCustomerOverride A value that indicates whether to remove the override for the default certificate. If the override is removed, the default certificate is the system default.
		 * @return {void} Success
		 */
		GET_ModifyCertificates(CertificateIdentifier: string, RemoveCustomerOverride: boolean, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=ModifyCertificates?CertificateIdentifier=' + (CertificateIdentifier == null ? '' : encodeURIComponent(CertificateIdentifier)) + '&RemoveCustomerOverride=' + RemoveCustomerOverride + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Set the capacity of an Aurora Serverless DB cluster to a specific value.</p> <p>Aurora Serverless scales seamlessly based on the workload on the DB cluster. In some cases, the capacity might not scale fast enough to meet a sudden change in workload, such as a large number of new transactions. Call <code>ModifyCurrentDBClusterCapacity</code> to set the capacity explicitly.</p> <p>After this call sets the DB cluster capacity, Aurora Serverless can automatically scale the DB cluster based on the cooldown period for scaling up and the cooldown period for scaling down.</p> <p>For more information about Aurora Serverless, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html">Using Amazon Aurora Serverless</a> in the <i>Amazon Aurora User Guide</i>.</p> <important> <p>If you call <code>ModifyCurrentDBClusterCapacity</code> with the default <code>TimeoutAction</code>, connections that prevent Aurora Serverless from finding a scaling point might be dropped. For more information about scaling points, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.how-it-works.html#aurora-serverless.how-it-works.auto-scaling"> Autoscaling for Aurora Serverless</a> in the <i>Amazon Aurora User Guide</i>.</p> </important> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
		 * Get /#Action=ModifyCurrentDBClusterCapacity
		 * @param {string} DBClusterIdentifier <p>The DB cluster identifier for the cluster being modified. This parameter isn't case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing DB cluster.</p> </li> </ul>
		 * @param {number} Capacity <p>The DB cluster capacity.</p> <p>When you change the capacity of a paused Aurora Serverless DB cluster, it automatically resumes.</p> <p>Constraints:</p> <ul> <li> <p>For Aurora MySQL, valid capacity values are <code>1</code>, <code>2</code>, <code>4</code>, <code>8</code>, <code>16</code>, <code>32</code>, <code>64</code>, <code>128</code>, and <code>256</code>.</p> </li> <li> <p>For Aurora PostgreSQL, valid capacity values are <code>2</code>, <code>4</code>, <code>8</code>, <code>16</code>, <code>32</code>, <code>64</code>, <code>192</code>, and <code>384</code>.</p> </li> </ul>
		 * @param {number} SecondsBeforeTimeout <p>The amount of time, in seconds, that Aurora Serverless tries to find a scaling point to perform seamless scaling before enforcing the timeout action. The default is 300.</p> <ul> <li> <p>Value must be from 10 through 600.</p> </li> </ul>
		 * @param {string} TimeoutAction <p>The action to take when the timeout is reached, either <code>ForceApplyCapacityChange</code> or <code>RollbackCapacityChange</code>.</p> <p> <code>ForceApplyCapacityChange</code>, the default, sets the capacity to the specified value as soon as possible.</p> <p> <code>RollbackCapacityChange</code> ignores the capacity change if a scaling point isn't found in the timeout period.</p>
		 * @return {void} Success
		 */
		GET_ModifyCurrentDBClusterCapacity(DBClusterIdentifier: string, Capacity: number, SecondsBeforeTimeout: number, TimeoutAction: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=ModifyCurrentDBClusterCapacity?DBClusterIdentifier=' + (DBClusterIdentifier == null ? '' : encodeURIComponent(DBClusterIdentifier)) + '&Capacity=' + Capacity + '&SecondsBeforeTimeout=' + SecondsBeforeTimeout + '&TimeoutAction=' + (TimeoutAction == null ? '' : encodeURIComponent(TimeoutAction)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Modify a setting for an Amazon Aurora DB cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
		 * Get /#Action=ModifyDBCluster
		 * @param {string} DBClusterIdentifier <p>The DB cluster identifier for the cluster being modified. This parameter isn't case-sensitive.</p> <p>Constraints: This identifier must match the identifier of an existing DB cluster.</p>
		 * @param {string} NewDBClusterIdentifier <p>The new DB cluster identifier for the DB cluster when renaming a DB cluster. This value is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens</p> </li> <li> <p>The first character must be a letter</p> </li> <li> <p>Can't end with a hyphen or contain two consecutive hyphens</p> </li> </ul> <p>Example: <code>my-cluster2</code> </p>
		 * @param {boolean} ApplyImmediately <p>A value that indicates whether the modifications in this request and any pending modifications are asynchronously applied as soon as possible, regardless of the <code>PreferredMaintenanceWindow</code> setting for the DB cluster. If this parameter is disabled, changes to the DB cluster are applied during the next maintenance window.</p> <p>The <code>ApplyImmediately</code> parameter only affects the <code>EnableIAMDatabaseAuthentication</code>, <code>MasterUserPassword</code>, and <code>NewDBClusterIdentifier</code> values. If the <code>ApplyImmediately</code> parameter is disabled, then changes to the <code>EnableIAMDatabaseAuthentication</code>, <code>MasterUserPassword</code>, and <code>NewDBClusterIdentifier</code> values are applied during the next maintenance window. All other changes are applied immediately, regardless of the value of the <code>ApplyImmediately</code> parameter.</p> <p>By default, this parameter is disabled.</p>
		 * @param {number} BackupRetentionPeriod <p>The number of days for which automated backups are retained. You must specify a minimum value of 1.</p> <p>Default: 1</p> <p>Constraints:</p> <ul> <li> <p>Must be a value from 1 to 35</p> </li> </ul>
		 * @param {string} DBClusterParameterGroupName The name of the DB cluster parameter group to use for the DB cluster.
		 * @param {Array<String>} VpcSecurityGroupIds A list of VPC security groups that the DB cluster will belong to.
		 * @param {number} Port <p>The port number on which the DB cluster accepts connections.</p> <p>Constraints: Value must be <code>1150-65535</code> </p> <p>Default: The same port as the original DB cluster.</p>
		 * @param {string} MasterUserPassword <p>The new password for the master database user. This password can contain any printable ASCII character except "/", """, or "@".</p> <p>Constraints: Must contain from 8 to 41 characters.</p>
		 * @param {string} OptionGroupName <p>A value that indicates that the DB cluster should be associated with the specified option group. Changing this parameter doesn't result in an outage except in the following case, and the change is applied during the next maintenance window unless the <code>ApplyImmediately</code> is enabled for this request. If the parameter change results in an option group that enables OEM, this change can cause a brief (sub-second) period during which new connections are rejected but existing connections are not interrupted. </p> <p>Permanent options can't be removed from an option group. The option group can't be removed from a DB cluster once it is associated with a DB cluster.</p>
		 * @param {string} PreferredBackupWindow <p>The daily time range during which automated backups are created if automated backups are enabled, using the <code>BackupRetentionPeriod</code> parameter. </p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region. To see the time blocks available, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow.Aurora"> Adjusting the Preferred DB Cluster Maintenance Window</a> in the <i>Amazon Aurora User Guide.</i> </p> <p>Constraints:</p> <ul> <li> <p>Must be in the format <code>hh24:mi-hh24:mi</code>.</p> </li> <li> <p>Must be in Universal Coordinated Time (UTC).</p> </li> <li> <p>Must not conflict with the preferred maintenance window.</p> </li> <li> <p>Must be at least 30 minutes.</p> </li> </ul>
		 * @param {string} PreferredMaintenanceWindow <p>The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p> <p>Format: <code>ddd:hh24:mi-ddd:hh24:mi</code> </p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region, occurring on a random day of the week. To see the time blocks available, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow.Aurora"> Adjusting the Preferred DB Cluster Maintenance Window</a> in the <i>Amazon Aurora User Guide.</i> </p> <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p> <p>Constraints: Minimum 30-minute window.</p>
		 * @param {boolean} EnableIAMDatabaseAuthentication <p>A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. By default, mapping is disabled.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBAuth.html"> IAM Database Authentication</a> in the <i>Amazon Aurora User Guide.</i> </p>
		 * @param {number} BacktrackWindow <p>The target backtrack window, in seconds. To disable backtracking, set this value to 0.</p> <p>Default: 0</p> <p>Constraints:</p> <ul> <li> <p>If specified, this value must be set to a number from 0 to 259,200 (72 hours).</p> </li> </ul>
		 * @param {string} CloudwatchLogsExportConfiguration The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB cluster.
		 * @param {string} EngineVersion <p>The version number of the database engine to which you want to upgrade. Changing this parameter results in an outage. The change is applied during the next maintenance window unless <code>ApplyImmediately</code> is enabled.</p> <p>To list all of the available engine versions for <code>aurora</code> (for MySQL 5.6-compatible Aurora), use the following command:</p> <p> <code>aws rds describe-db-engine-versions --engine aurora --query "DBEngineVersions[].EngineVersion"</code> </p> <p>To list all of the available engine versions for <code>aurora-mysql</code> (for MySQL 5.7-compatible Aurora), use the following command:</p> <p> <code>aws rds describe-db-engine-versions --engine aurora-mysql --query "DBEngineVersions[].EngineVersion"</code> </p> <p>To list all of the available engine versions for <code>aurora-postgresql</code>, use the following command:</p> <p> <code>aws rds describe-db-engine-versions --engine aurora-postgresql --query "DBEngineVersions[].EngineVersion"</code> </p>
		 * @param {boolean} AllowMajorVersionUpgrade <p>A value that indicates whether major version upgrades are allowed.</p> <p>Constraints: You must allow major version upgrades when specifying a value for the <code>EngineVersion</code> parameter that is a different major version than the DB cluster's current version.</p>
		 * @param {string} DBInstanceParameterGroupName <p>The name of the DB parameter group to apply to all instances of the DB cluster. </p> <note> <p>When you apply a parameter group using the <code>DBInstanceParameterGroupName</code> parameter, the DB cluster isn't rebooted automatically. Also, parameter changes aren't applied during the next maintenance window but instead are applied immediately.</p> </note> <p>Default: The existing name setting</p> <p>Constraints:</p> <ul> <li> <p>The DB parameter group must be in the same DB parameter group family as this DB cluster.</p> </li> <li> <p>The <code>DBInstanceParameterGroupName</code> parameter is only valid in combination with the <code>AllowMajorVersionUpgrade</code> parameter.</p> </li> </ul>
		 * @param {string} Domain The Active Directory directory ID to move the DB cluster to. Specify <code>none</code> to remove the cluster from its current domain. The domain must be created prior to this operation. 
		 * @param {string} DomainIAMRoleName Specify the name of the IAM role to be used when making API calls to the Directory Service.
		 * @param {string} ScalingConfiguration The scaling properties of the DB cluster. You can only modify scaling properties for DB clusters in <code>serverless</code> DB engine mode.
		 * @param {boolean} DeletionProtection A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled. 
		 * @param {boolean} EnableHttpEndpoint <p>A value that indicates whether to enable the HTTP endpoint for an Aurora Serverless DB cluster. By default, the HTTP endpoint is disabled.</p> <p>When enabled, the HTTP endpoint provides a connectionless web service API for running SQL queries on the Aurora Serverless DB cluster. You can also query your database from inside the RDS console with the query editor.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html">Using the Data API for Aurora Serverless</a> in the <i>Amazon Aurora User Guide</i>.</p>
		 * @param {boolean} CopyTagsToSnapshot A value that indicates whether to copy all tags from the DB cluster to snapshots of the DB cluster. The default is not to copy them.
		 * @return {void} Success
		 */
		GET_ModifyDBCluster(DBClusterIdentifier: string, NewDBClusterIdentifier: string, ApplyImmediately: boolean, BackupRetentionPeriod: number, DBClusterParameterGroupName: string, VpcSecurityGroupIds: Array<String>, Port: number, MasterUserPassword: string, OptionGroupName: string, PreferredBackupWindow: string, PreferredMaintenanceWindow: string, EnableIAMDatabaseAuthentication: boolean, BacktrackWindow: number, CloudwatchLogsExportConfiguration: string, EngineVersion: string, AllowMajorVersionUpgrade: boolean, DBInstanceParameterGroupName: string, Domain: string, DomainIAMRoleName: string, ScalingConfiguration: string, DeletionProtection: boolean, EnableHttpEndpoint: boolean, CopyTagsToSnapshot: boolean, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=ModifyDBCluster?DBClusterIdentifier=' + (DBClusterIdentifier == null ? '' : encodeURIComponent(DBClusterIdentifier)) + '&NewDBClusterIdentifier=' + (NewDBClusterIdentifier == null ? '' : encodeURIComponent(NewDBClusterIdentifier)) + '&ApplyImmediately=' + ApplyImmediately + '&BackupRetentionPeriod=' + BackupRetentionPeriod + '&DBClusterParameterGroupName=' + (DBClusterParameterGroupName == null ? '' : encodeURIComponent(DBClusterParameterGroupName)) + '&' + VpcSecurityGroupIds.map(z => `VpcSecurityGroupIds=${z}`).join('&') + '&Port=' + Port + '&MasterUserPassword=' + (MasterUserPassword == null ? '' : encodeURIComponent(MasterUserPassword)) + '&OptionGroupName=' + (OptionGroupName == null ? '' : encodeURIComponent(OptionGroupName)) + '&PreferredBackupWindow=' + (PreferredBackupWindow == null ? '' : encodeURIComponent(PreferredBackupWindow)) + '&PreferredMaintenanceWindow=' + (PreferredMaintenanceWindow == null ? '' : encodeURIComponent(PreferredMaintenanceWindow)) + '&EnableIAMDatabaseAuthentication=' + EnableIAMDatabaseAuthentication + '&BacktrackWindow=' + BacktrackWindow + '&CloudwatchLogsExportConfiguration=' + (CloudwatchLogsExportConfiguration == null ? '' : encodeURIComponent(CloudwatchLogsExportConfiguration)) + '&EngineVersion=' + (EngineVersion == null ? '' : encodeURIComponent(EngineVersion)) + '&AllowMajorVersionUpgrade=' + AllowMajorVersionUpgrade + '&DBInstanceParameterGroupName=' + (DBInstanceParameterGroupName == null ? '' : encodeURIComponent(DBInstanceParameterGroupName)) + '&Domain=' + (Domain == null ? '' : encodeURIComponent(Domain)) + '&DomainIAMRoleName=' + (DomainIAMRoleName == null ? '' : encodeURIComponent(DomainIAMRoleName)) + '&ScalingConfiguration=' + (ScalingConfiguration == null ? '' : encodeURIComponent(ScalingConfiguration)) + '&DeletionProtection=' + DeletionProtection + '&EnableHttpEndpoint=' + EnableHttpEndpoint + '&CopyTagsToSnapshot=' + CopyTagsToSnapshot + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Modifies the properties of an endpoint in an Amazon Aurora DB cluster.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
		 * Get /#Action=ModifyDBClusterEndpoint
		 * @param {string} DBClusterEndpointIdentifier The identifier of the endpoint to modify. This parameter is stored as a lowercase string.
		 * @param {string} EndpointType The type of the endpoint. One of: <code>READER</code>, <code>WRITER</code>, <code>ANY</code>.
		 * @param {Array<String>} StaticMembers List of DB instance identifiers that are part of the custom endpoint group.
		 * @param {Array<String>} ExcludedMembers List of DB instance identifiers that aren't part of the custom endpoint group. All other eligible instances are reachable through the custom endpoint. Only relevant if the list of static members is empty.
		 * @return {void} Success
		 */
		GET_ModifyDBClusterEndpoint(DBClusterEndpointIdentifier: string, EndpointType: string, StaticMembers: Array<String>, ExcludedMembers: Array<String>, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=ModifyDBClusterEndpoint?DBClusterEndpointIdentifier=' + (DBClusterEndpointIdentifier == null ? '' : encodeURIComponent(DBClusterEndpointIdentifier)) + '&EndpointType=' + (EndpointType == null ? '' : encodeURIComponent(EndpointType)) + '&' + StaticMembers.map(z => `StaticMembers=${z}`).join('&') + '&' + ExcludedMembers.map(z => `ExcludedMembers=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p> Modifies the parameters of a DB cluster parameter group. To modify more than one parameter, submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request. </p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>Changes to dynamic parameters are applied immediately. Changes to static parameters require a reboot without failover to the DB cluster associated with the parameter group before the change can take effect.</p> </note> <important> <p>After you create a DB cluster parameter group, you should wait at least 5 minutes before creating your first DB cluster that uses that DB cluster parameter group as the default parameter group. This allows Amazon RDS to fully complete the create action before the parameter group is used as the default for a new DB cluster. This is especially important for parameters that are critical when creating the default database for a DB cluster, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon RDS console</a> or the <code>DescribeDBClusterParameters</code> action to verify that your DB cluster parameter group has been created or modified.</p> <p>If the modified DB cluster parameter group is used by an Aurora Serverless cluster, Aurora applies the update immediately. The cluster restart might interrupt your workload. In that case, your application must reopen any connections and retry any transactions that were active when the parameter changes took effect.</p> </important> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
		 * Get /#Action=ModifyDBClusterParameterGroup
		 * @param {string} DBClusterParameterGroupName The name of the DB cluster parameter group to modify.
		 * @param {Array<Parameter>} Parameters A list of parameters in the DB cluster parameter group to modify.
		 * @return {void} Success
		 */
		GET_ModifyDBClusterParameterGroup(DBClusterParameterGroupName: string, Parameters: Array<Parameter>, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=ModifyDBClusterParameterGroup?DBClusterParameterGroupName=' + (DBClusterParameterGroupName == null ? '' : encodeURIComponent(DBClusterParameterGroupName)) + '&' + Parameters.map(z => `Parameters=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Adds an attribute and values to, or removes an attribute and values from, a manual DB cluster snapshot.</p> <p>To share a manual DB cluster snapshot with other AWS accounts, specify <code>restore</code> as the <code>AttributeName</code> and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the AWS accounts that are authorized to restore the manual DB cluster snapshot. Use the value <code>all</code> to make the manual DB cluster snapshot public, which means that it can be copied or restored by all AWS accounts. Do not add the <code>all</code> value for any manual DB cluster snapshots that contain private information that you don't want available to all AWS accounts. If a manual DB cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized AWS account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p> <p>To view which AWS accounts have access to copy or restore a manual DB cluster snapshot, or whether a manual DB cluster snapshot public or private, use the <code>DescribeDBClusterSnapshotAttributes</code> API action.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
		 * Get /#Action=ModifyDBClusterSnapshotAttribute
		 * @param {string} DBClusterSnapshotIdentifier The identifier for the DB cluster snapshot to modify the attributes for.
		 * @param {string} AttributeName <p>The name of the DB cluster snapshot attribute to modify.</p> <p>To manage authorization for other AWS accounts to copy or restore a manual DB cluster snapshot, set this value to <code>restore</code>.</p>
		 * @param {Array<String>} ValuesToAdd <p>A list of DB cluster snapshot attributes to add to the attribute specified by <code>AttributeName</code>.</p> <p>To authorize other AWS accounts to copy or restore a manual DB cluster snapshot, set this list to include one or more AWS account IDs, or <code>all</code> to make the manual DB cluster snapshot restorable by any AWS account. Do not add the <code>all</code> value for any manual DB cluster snapshots that contain private information that you don't want available to all AWS accounts.</p>
		 * @param {Array<String>} ValuesToRemove <p>A list of DB cluster snapshot attributes to remove from the attribute specified by <code>AttributeName</code>.</p> <p>To remove authorization for other AWS accounts to copy or restore a manual DB cluster snapshot, set this list to include one or more AWS account identifiers, or <code>all</code> to remove authorization for any AWS account to copy or restore the DB cluster snapshot. If you specify <code>all</code>, an AWS account whose account ID is explicitly added to the <code>restore</code> attribute can still copy or restore a manual DB cluster snapshot.</p>
		 * @return {void} Success
		 */
		GET_ModifyDBClusterSnapshotAttribute(DBClusterSnapshotIdentifier: string, AttributeName: string, ValuesToAdd: Array<String>, ValuesToRemove: Array<String>, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=ModifyDBClusterSnapshotAttribute?DBClusterSnapshotIdentifier=' + (DBClusterSnapshotIdentifier == null ? '' : encodeURIComponent(DBClusterSnapshotIdentifier)) + '&AttributeName=' + (AttributeName == null ? '' : encodeURIComponent(AttributeName)) + '&' + ValuesToAdd.map(z => `ValuesToAdd=${z}`).join('&') + '&' + ValuesToRemove.map(z => `ValuesToRemove=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Modifies settings for a DB instance. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. To learn what modifications you can make to your DB instance, call <code>DescribeValidDBInstanceModifications</code> before you call <code>ModifyDBInstance</code>.
		 * Get /#Action=ModifyDBInstance
		 * @param {string} DBInstanceIdentifier <p>The DB instance identifier. This value is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing DBInstance.</p> </li> </ul>
		 * @param {number} AllocatedStorage <p>The new amount of storage (in gibibytes) to allocate for the DB instance. </p> <p>For MariaDB, MySQL, Oracle, and PostgreSQL, the value supplied must be at least 10% greater than the current value. Values that are not at least 10% greater than the existing value are rounded up so that they are 10% greater than the current value. </p> <p>For the valid values for allocated storage for each engine, see <code>CreateDBInstance</code>. </p>
		 * @param {string} DBInstanceClass <p>The new compute and memory capacity of the DB instance, for example, <code>db.m4.large</code>. Not all DB instance classes are available in all AWS Regions, or for all database engines. For the full list of DB instance classes, and availability for your engine, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html">DB Instance Class</a> in the <i>Amazon RDS User Guide.</i> </p> <p>If you modify the DB instance class, an outage occurs during the change. The change is applied during the next maintenance window, unless <code>ApplyImmediately</code> is enabled for this request. </p> <p>Default: Uses existing setting</p>
		 * @param {string} DBSubnetGroupName <p>The new DB subnet group for the DB instance. You can use this parameter to move your DB instance to a different VPC. If your DB instance isn't in a VPC, you can also use this parameter to move your DB instance into a VPC. For more information, see <a href="http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html#USER_VPC.Non-VPC2VPC">Updating the VPC for a DB Instance</a> in the <i>Amazon RDS User Guide.</i> </p> <p>Changing the subnet group causes an outage during the change. The change is applied during the next maintenance window, unless you enable <code>ApplyImmediately</code>. </p> <p>Constraints: If supplied, must match the name of an existing DBSubnetGroup.</p> <p>Example: <code>mySubnetGroup</code> </p>
		 * @param {Array<String>} DBSecurityGroups <p>A list of DB security groups to authorize on this DB instance. Changing this setting doesn't result in an outage and the change is asynchronously applied as soon as possible.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match existing DBSecurityGroups.</p> </li> </ul>
		 * @param {Array<String>} VpcSecurityGroupIds <p>A list of EC2 VPC security groups to authorize on this DB instance. This change is asynchronously applied as soon as possible.</p> <p> <b>Amazon Aurora</b> </p> <p>Not applicable. The associated list of EC2 VPC security groups is managed by the DB cluster. For more information, see <code>ModifyDBCluster</code>.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match existing VpcSecurityGroupIds.</p> </li> </ul>
		 * @param {boolean} ApplyImmediately <p>A value that indicates whether the modifications in this request and any pending modifications are asynchronously applied as soon as possible, regardless of the <code>PreferredMaintenanceWindow</code> setting for the DB instance. By default, this parameter is disabled. </p> <p> If this parameter is disabled, changes to the DB instance are applied during the next maintenance window. Some parameter changes can cause an outage and are applied on the next call to <a>RebootDBInstance</a>, or the next failure reboot. Review the table of parameters in <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.DBInstance.Modifying.html">Modifying a DB Instance</a> in the <i>Amazon RDS User Guide.</i> to see the impact of enabling or disabling <code>ApplyImmediately</code> for each modified parameter and to determine when the changes are applied. </p>
		 * @param {string} MasterUserPassword <p>The new password for the master user. The password can include any printable ASCII character except "/", """, or "@".</p> <p> Changing this parameter doesn't result in an outage and the change is asynchronously applied as soon as possible. Between the time of the request and the completion of the request, the <code>MasterUserPassword</code> element exists in the <code>PendingModifiedValues</code> element of the operation response. </p> <p> <b>Amazon Aurora</b> </p> <p>Not applicable. The password for the master user is managed by the DB cluster. For more information, see <code>ModifyDBCluster</code>. </p> <p>Default: Uses existing setting</p> <p> <b>MariaDB</b> </p> <p>Constraints: Must contain from 8 to 41 characters.</p> <p> <b>Microsoft SQL Server</b> </p> <p>Constraints: Must contain from 8 to 128 characters.</p> <p> <b>MySQL</b> </p> <p>Constraints: Must contain from 8 to 41 characters.</p> <p> <b>Oracle</b> </p> <p>Constraints: Must contain from 8 to 30 characters.</p> <p> <b>PostgreSQL</b> </p> <p>Constraints: Must contain from 8 to 128 characters.</p> <note> <p>Amazon RDS API actions never return the password, so this action provides a way to regain access to a primary instance user if the password is lost. This includes restoring privileges that might have been accidentally revoked. </p> </note>
		 * @param {string} DBParameterGroupName <p>The name of the DB parameter group to apply to the DB instance. Changing this setting doesn't result in an outage. The parameter group name itself is changed immediately, but the actual parameter changes are not applied until you reboot the instance without failover. In this case, the DB instance isn't rebooted automatically and the parameter changes isn't applied during the next maintenance window.</p> <p>Default: Uses existing setting</p> <p>Constraints: The DB parameter group must be in the same DB parameter group family as this DB instance.</p>
		 * @param {number} BackupRetentionPeriod <p>The number of days to retain automated backups. Setting this parameter to a positive number enables backups. Setting this parameter to 0 disables automated backups.</p> <p>Changing this parameter can result in an outage if you change from 0 to a non-zero value or from a non-zero value to 0. These changes are applied during the next maintenance window unless the <code>ApplyImmediately</code> parameter is enabled for this request. If you change the parameter from one non-zero value to another non-zero value, the change is asynchronously applied as soon as possible.</p> <p> <b>Amazon Aurora</b> </p> <p>Not applicable. The retention period for automated backups is managed by the DB cluster. For more information, see <code>ModifyDBCluster</code>.</p> <p>Default: Uses existing setting</p> <p>Constraints:</p> <ul> <li> <p>Must be a value from 0 to 35</p> </li> <li> <p>Can be specified for a MySQL read replica only if the source is running MySQL 5.6 or later</p> </li> <li> <p>Can be specified for a PostgreSQL read replica only if the source is running PostgreSQL 9.3.5</p> </li> <li> <p>Can't be set to 0 if the DB instance is a source to read replicas</p> </li> </ul>
		 * @param {string} PreferredBackupWindow <p> The daily time range during which automated backups are created if automated backups are enabled, as determined by the <code>BackupRetentionPeriod</code> parameter. Changing this parameter doesn't result in an outage and the change is asynchronously applied as soon as possible. </p> <p> <b>Amazon Aurora</b> </p> <p>Not applicable. The daily time range for creating automated backups is managed by the DB cluster. For more information, see <code>ModifyDBCluster</code>.</p> <p>Constraints:</p> <ul> <li> <p>Must be in the format hh24:mi-hh24:mi</p> </li> <li> <p>Must be in Universal Time Coordinated (UTC)</p> </li> <li> <p>Must not conflict with the preferred maintenance window</p> </li> <li> <p>Must be at least 30 minutes</p> </li> </ul>
		 * @param {string} PreferredMaintenanceWindow <p>The weekly time range (in UTC) during which system maintenance can occur, which might result in an outage. Changing this parameter doesn't result in an outage, except in the following situation, and the change is asynchronously applied as soon as possible. If there are pending actions that cause a reboot, and the maintenance window is changed to include the current time, then changing this parameter will cause a reboot of the DB instance. If moving this window to the current time, there must be at least 30 minutes between the current time and end of the window to ensure pending changes are applied.</p> <p>Default: Uses existing setting</p> <p>Format: ddd:hh24:mi-ddd:hh24:mi</p> <p>Valid Days: Mon | Tue | Wed | Thu | Fri | Sat | Sun</p> <p>Constraints: Must be at least 30 minutes</p>
		 * @param {boolean} MultiAZ A value that indicates whether the DB instance is a Multi-AZ deployment. Changing this parameter doesn't result in an outage and the change is applied during the next maintenance window unless the <code>ApplyImmediately</code> parameter is enabled for this request. 
		 * @param {string} EngineVersion <p> The version number of the database engine to upgrade to. Changing this parameter results in an outage and the change is applied during the next maintenance window unless the <code>ApplyImmediately</code> parameter is eanbled for this request. </p> <p>For major version upgrades, if a nondefault DB parameter group is currently in use, a new DB parameter group in the DB parameter group family for the new engine version must be specified. The new DB parameter group can be the default for that DB parameter group family.</p> <p>For information about valid engine versions, see <code>CreateDBInstance</code>, or call <code>DescribeDBEngineVersions</code>.</p>
		 * @param {boolean} AllowMajorVersionUpgrade <p>A value that indicates whether major version upgrades are allowed. Changing this parameter doesn't result in an outage and the change is asynchronously applied as soon as possible.</p> <p>Constraints: Major version upgrades must be allowed when specifying a value for the EngineVersion parameter that is a different major version than the DB instance's current version.</p>
		 * @param {boolean} AutoMinorVersionUpgrade  A value that indicates whether minor version upgrades are applied automatically to the DB instance during the maintenance window. Changing this parameter doesn't result in an outage except in the following case and the change is asynchronously applied as soon as possible. An outage results if this parameter is enabled during the maintenance window, and a newer minor version is available, and RDS has enabled auto patching for that engine version. 
		 * @param {string} LicenseModel <p>The license model for the DB instance.</p> <p>Valid values: <code>license-included</code> | <code>bring-your-own-license</code> | <code>general-public-license</code> </p>
		 * @param {number} Iops <p>The new Provisioned IOPS (I/O operations per second) value for the RDS instance. </p> <p>Changing this setting doesn't result in an outage and the change is applied during the next maintenance window unless the <code>ApplyImmediately</code> parameter is enabled for this request. If you are migrating from Provisioned IOPS to standard storage, set this value to 0. The DB instance will require a reboot for the change in storage type to take effect. </p> <p>If you choose to migrate your DB instance from using standard storage to using Provisioned IOPS, or from using Provisioned IOPS to using standard storage, the process can take time. The duration of the migration depends on several factors such as database load, storage size, storage type (standard or Provisioned IOPS), amount of IOPS provisioned (if any), and the number of prior scale storage operations. Typical migration times are under 24 hours, but the process can take up to several days in some cases. During the migration, the DB instance is available for use, but might experience performance degradation. While the migration takes place, nightly backups for the instance are suspended. No other Amazon RDS operations can take place for the instance, including modifying the instance, rebooting the instance, deleting the instance, creating a read replica for the instance, and creating a DB snapshot of the instance. </p> <p>Constraints: For MariaDB, MySQL, Oracle, and PostgreSQL, the value supplied must be at least 10% greater than the current value. Values that are not at least 10% greater than the existing value are rounded up so that they are 10% greater than the current value. </p> <p>Default: Uses existing setting</p>
		 * @param {string} OptionGroupName <p> Indicates that the DB instance should be associated with the specified option group. Changing this parameter doesn't result in an outage except in the following case and the change is applied during the next maintenance window unless the <code>ApplyImmediately</code> parameter is enabled for this request. If the parameter change results in an option group that enables OEM, this change can cause a brief (sub-second) period during which new connections are rejected but existing connections are not interrupted. </p> <p>Permanent options, such as the TDE option for Oracle Advanced Security TDE, can't be removed from an option group, and that option group can't be removed from a DB instance once it is associated with a DB instance</p>
		 * @param {string} NewDBInstanceIdentifier <p> The new DB instance identifier for the DB instance when renaming a DB instance. When you change the DB instance identifier, an instance reboot occurs immediately if you enable <code>ApplyImmediately</code>, or will occur during the next maintenance window if you disable Apply Immediately. This value is stored as a lowercase string. </p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Can't end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>mydbinstance</code> </p>
		 * @param {string} StorageType <p>Specifies the storage type to be associated with the DB instance. </p> <p>If you specify Provisioned IOPS (<code>io1</code>), you must also include a value for the <code>Iops</code> parameter. </p> <p>If you choose to migrate your DB instance from using standard storage to using Provisioned IOPS, or from using Provisioned IOPS to using standard storage, the process can take time. The duration of the migration depends on several factors such as database load, storage size, storage type (standard or Provisioned IOPS), amount of IOPS provisioned (if any), and the number of prior scale storage operations. Typical migration times are under 24 hours, but the process can take up to several days in some cases. During the migration, the DB instance is available for use, but might experience performance degradation. While the migration takes place, nightly backups for the instance are suspended. No other Amazon RDS operations can take place for the instance, including modifying the instance, rebooting the instance, deleting the instance, creating a read replica for the instance, and creating a DB snapshot of the instance. </p> <p> Valid values: <code>standard | gp2 | io1</code> </p> <p>Default: <code>io1</code> if the <code>Iops</code> parameter is specified, otherwise <code>gp2</code> </p>
		 * @param {string} TdeCredentialArn The ARN from the key store with which to associate the instance for TDE encryption.
		 * @param {string} TdeCredentialPassword The password for the given ARN from the key store in order to access the device.
		 * @param {string} CACertificateIdentifier Indicates the certificate that needs to be associated with the instance.
		 * @param {string} Domain <p>The Active Directory directory ID to move the DB instance to. Specify <code>none</code> to remove the instance from its current domain. The domain must be created prior to this operation. Currently, only Microsoft SQL Server and Oracle DB instances can be created in an Active Directory Domain. </p> <p>For Microsoft SQL Server DB instances, Amazon RDS can use Windows Authentication to authenticate users that connect to the DB instance. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_SQLServerWinAuth.html"> Using Windows Authentication with an Amazon RDS DB Instance Running Microsoft SQL Server</a> in the <i>Amazon RDS User Guide</i>.</p> <p>For Oracle DB instances, Amazon RDS can use Kerberos Authentication to authenticate users that connect to the DB instance. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/oracle-kerberos.html"> Using Kerberos Authentication with Amazon RDS for Oracle</a> in the <i>Amazon RDS User Guide</i>.</p>
		 * @param {boolean} CopyTagsToSnapshot <p>A value that indicates whether to copy all tags from the DB instance to snapshots of the DB instance. By default, tags are not copied.</p> <p> <b>Amazon Aurora</b> </p> <p>Not applicable. Copying tags to snapshots is managed by the DB cluster. Setting this value for an Aurora DB instance has no effect on the DB cluster setting. For more information, see <code>ModifyDBCluster</code>.</p>
		 * @param {number} MonitoringInterval <p>The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collecting Enhanced Monitoring metrics, specify 0. The default is 0.</p> <p>If <code>MonitoringRoleArn</code> is specified, then you must also set <code>MonitoringInterval</code> to a value other than 0.</p> <p>Valid Values: <code>0, 1, 5, 10, 15, 30, 60</code> </p>
		 * @param {number} DBPortNumber <p>The port number on which the database accepts connections.</p> <p>The value of the <code>DBPortNumber</code> parameter must not match any of the port values specified for options in the option group for the DB instance.</p> <p>Your database will restart when you change the <code>DBPortNumber</code> value regardless of the value of the <code>ApplyImmediately</code> parameter.</p> <p> <b>MySQL</b> </p> <p> Default: <code>3306</code> </p> <p> Valid values: <code>1150-65535</code> </p> <p> <b>MariaDB</b> </p> <p> Default: <code>3306</code> </p> <p> Valid values: <code>1150-65535</code> </p> <p> <b>PostgreSQL</b> </p> <p> Default: <code>5432</code> </p> <p> Valid values: <code>1150-65535</code> </p> <p>Type: Integer</p> <p> <b>Oracle</b> </p> <p> Default: <code>1521</code> </p> <p> Valid values: <code>1150-65535</code> </p> <p> <b>SQL Server</b> </p> <p> Default: <code>1433</code> </p> <p> Valid values: <code>1150-65535</code> except <code>1234</code>, <code>1434</code>, <code>3260</code>, <code>3343</code>, <code>3389</code>, <code>47001</code>, and <code>49152-49156</code>.</p> <p> <b>Amazon Aurora</b> </p> <p> Default: <code>3306</code> </p> <p> Valid values: <code>1150-65535</code> </p>
		 * @param {boolean} PubliclyAccessible <p>A value that indicates whether the DB instance is publicly accessible. When the DB instance is publicly accessible, it is an Internet-facing instance with a publicly resolvable DNS name, which resolves to a public IP address. When the DB instance isn't publicly accessible, it is an internal instance with a DNS name that resolves to a private IP address. </p> <p> <code>PubliclyAccessible</code> only applies to DB instances in a VPC. The DB instance must be part of a public subnet and <code>PubliclyAccessible</code> must be enabled for it to be publicly accessible. </p> <p>Changes to the <code>PubliclyAccessible</code> parameter are applied immediately regardless of the value of the <code>ApplyImmediately</code> parameter.</p>
		 * @param {string} MonitoringRoleArn <p>The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to Amazon CloudWatch Logs. For example, <code>arn:aws:iam:123456789012:role/emaccess</code>. For information on creating a monitoring role, go to <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.html#USER_Monitoring.OS.IAMRole">To create an IAM role for Amazon RDS Enhanced Monitoring</a> in the <i>Amazon RDS User Guide.</i> </p> <p>If <code>MonitoringInterval</code> is set to a value other than 0, then you must supply a <code>MonitoringRoleArn</code> value.</p>
		 * @param {string} DomainIAMRoleName The name of the IAM role to use when making API calls to the Directory Service.
		 * @param {number} PromotionTier <p>A value that specifies the order in which an Aurora Replica is promoted to the primary instance after a failure of the existing primary instance. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Backups.html#Aurora.Managing.FaultTolerance"> Fault Tolerance for an Aurora DB Cluster</a> in the <i>Amazon Aurora User Guide</i>. </p> <p>Default: 1</p> <p>Valid Values: 0 - 15</p>
		 * @param {boolean} EnableIAMDatabaseAuthentication <p>A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. By default, mapping is disabled. For information about the supported DB engines, see <a>CreateDBInstance</a>.</p> <p>For more information about IAM database authentication, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html"> IAM Database Authentication for MySQL and PostgreSQL</a> in the <i>Amazon RDS User Guide.</i> </p>
		 * @param {boolean} EnablePerformanceInsights <p>A value that indicates whether to enable Performance Insights for the DB instance.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html">Using Amazon Performance Insights</a> in the <i>Amazon Relational Database Service User Guide</i>. </p>
		 * @param {string} PerformanceInsightsKMSKeyId <p>The AWS KMS key identifier for encryption of Performance Insights data. The KMS key ID is the Amazon Resource Name (ARN), KMS key identifier, or the KMS key alias for the KMS encryption key.</p> <p>If you do not specify a value for <code>PerformanceInsightsKMSKeyId</code>, then Amazon RDS uses your default encryption key. AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS Region.</p>
		 * @param {number} PerformanceInsightsRetentionPeriod The amount of time, in days, to retain Performance Insights data. Valid values are 7 or 731 (2 years). 
		 * @param {string} CloudwatchLogsExportConfiguration <p>The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB instance.</p> <p>A change to the <code>CloudwatchLogsExportConfiguration</code> parameter is always applied to the DB instance immediately. Therefore, the <code>ApplyImmediately</code> parameter has no effect.</p>
		 * @param {Array<ProcessorFeature>} ProcessorFeatures The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.
		 * @param {boolean} UseDefaultProcessorFeatures A value that indicates whether the DB instance class of the DB instance uses its default processor features.
		 * @param {boolean} DeletionProtection A value that indicates whether the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_DeleteInstance.html"> Deleting a DB Instance</a>. 
		 * @param {number} MaxAllocatedStorage The upper limit to which Amazon RDS can automatically scale the storage of the DB instance.
		 * @param {boolean} CertificateRotationRestart <p>A value that indicates whether the DB instance is restarted when you rotate your SSL/TLS certificate.</p> <p>By default, the DB instance is restarted when you rotate your SSL/TLS certificate. The certificate is not updated until the DB instance is restarted.</p> <important> <p>Set this parameter only if you are <i>not</i> using SSL/TLS to connect to the DB instance.</p> </important> <p>If you are using SSL/TLS to connect to the DB instance, follow the appropriate instructions for your DB engine to rotate your SSL/TLS certificate:</p> <ul> <li> <p>For more information about rotating your SSL/TLS certificate for RDS DB engines, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL-certificate-rotation.html"> Rotating Your SSL/TLS Certificate.</a> in the <i>Amazon RDS User Guide.</i> </p> </li> <li> <p>For more information about rotating your SSL/TLS certificate for Aurora DB engines, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL-certificate-rotation.html"> Rotating Your SSL/TLS Certificate</a> in the <i>Amazon Aurora User Guide.</i> </p> </li> </ul>
		 * @return {void} Success
		 */
		GET_ModifyDBInstance(DBInstanceIdentifier: string, AllocatedStorage: number, DBInstanceClass: string, DBSubnetGroupName: string, DBSecurityGroups: Array<String>, VpcSecurityGroupIds: Array<String>, ApplyImmediately: boolean, MasterUserPassword: string, DBParameterGroupName: string, BackupRetentionPeriod: number, PreferredBackupWindow: string, PreferredMaintenanceWindow: string, MultiAZ: boolean, EngineVersion: string, AllowMajorVersionUpgrade: boolean, AutoMinorVersionUpgrade: boolean, LicenseModel: string, Iops: number, OptionGroupName: string, NewDBInstanceIdentifier: string, StorageType: string, TdeCredentialArn: string, TdeCredentialPassword: string, CACertificateIdentifier: string, Domain: string, CopyTagsToSnapshot: boolean, MonitoringInterval: number, DBPortNumber: number, PubliclyAccessible: boolean, MonitoringRoleArn: string, DomainIAMRoleName: string, PromotionTier: number, EnableIAMDatabaseAuthentication: boolean, EnablePerformanceInsights: boolean, PerformanceInsightsKMSKeyId: string, PerformanceInsightsRetentionPeriod: number, CloudwatchLogsExportConfiguration: string, ProcessorFeatures: Array<ProcessorFeature>, UseDefaultProcessorFeatures: boolean, DeletionProtection: boolean, MaxAllocatedStorage: number, CertificateRotationRestart: boolean, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=ModifyDBInstance?DBInstanceIdentifier=' + (DBInstanceIdentifier == null ? '' : encodeURIComponent(DBInstanceIdentifier)) + '&AllocatedStorage=' + AllocatedStorage + '&DBInstanceClass=' + (DBInstanceClass == null ? '' : encodeURIComponent(DBInstanceClass)) + '&DBSubnetGroupName=' + (DBSubnetGroupName == null ? '' : encodeURIComponent(DBSubnetGroupName)) + '&' + DBSecurityGroups.map(z => `DBSecurityGroups=${z}`).join('&') + '&' + VpcSecurityGroupIds.map(z => `VpcSecurityGroupIds=${z}`).join('&') + '&ApplyImmediately=' + ApplyImmediately + '&MasterUserPassword=' + (MasterUserPassword == null ? '' : encodeURIComponent(MasterUserPassword)) + '&DBParameterGroupName=' + (DBParameterGroupName == null ? '' : encodeURIComponent(DBParameterGroupName)) + '&BackupRetentionPeriod=' + BackupRetentionPeriod + '&PreferredBackupWindow=' + (PreferredBackupWindow == null ? '' : encodeURIComponent(PreferredBackupWindow)) + '&PreferredMaintenanceWindow=' + (PreferredMaintenanceWindow == null ? '' : encodeURIComponent(PreferredMaintenanceWindow)) + '&MultiAZ=' + MultiAZ + '&EngineVersion=' + (EngineVersion == null ? '' : encodeURIComponent(EngineVersion)) + '&AllowMajorVersionUpgrade=' + AllowMajorVersionUpgrade + '&AutoMinorVersionUpgrade=' + AutoMinorVersionUpgrade + '&LicenseModel=' + (LicenseModel == null ? '' : encodeURIComponent(LicenseModel)) + '&Iops=' + Iops + '&OptionGroupName=' + (OptionGroupName == null ? '' : encodeURIComponent(OptionGroupName)) + '&NewDBInstanceIdentifier=' + (NewDBInstanceIdentifier == null ? '' : encodeURIComponent(NewDBInstanceIdentifier)) + '&StorageType=' + (StorageType == null ? '' : encodeURIComponent(StorageType)) + '&TdeCredentialArn=' + (TdeCredentialArn == null ? '' : encodeURIComponent(TdeCredentialArn)) + '&TdeCredentialPassword=' + (TdeCredentialPassword == null ? '' : encodeURIComponent(TdeCredentialPassword)) + '&CACertificateIdentifier=' + (CACertificateIdentifier == null ? '' : encodeURIComponent(CACertificateIdentifier)) + '&Domain=' + (Domain == null ? '' : encodeURIComponent(Domain)) + '&CopyTagsToSnapshot=' + CopyTagsToSnapshot + '&MonitoringInterval=' + MonitoringInterval + '&DBPortNumber=' + DBPortNumber + '&PubliclyAccessible=' + PubliclyAccessible + '&MonitoringRoleArn=' + (MonitoringRoleArn == null ? '' : encodeURIComponent(MonitoringRoleArn)) + '&DomainIAMRoleName=' + (DomainIAMRoleName == null ? '' : encodeURIComponent(DomainIAMRoleName)) + '&PromotionTier=' + PromotionTier + '&EnableIAMDatabaseAuthentication=' + EnableIAMDatabaseAuthentication + '&EnablePerformanceInsights=' + EnablePerformanceInsights + '&PerformanceInsightsKMSKeyId=' + (PerformanceInsightsKMSKeyId == null ? '' : encodeURIComponent(PerformanceInsightsKMSKeyId)) + '&PerformanceInsightsRetentionPeriod=' + PerformanceInsightsRetentionPeriod + '&CloudwatchLogsExportConfiguration=' + (CloudwatchLogsExportConfiguration == null ? '' : encodeURIComponent(CloudwatchLogsExportConfiguration)) + '&' + ProcessorFeatures.map(z => `ProcessorFeatures=${z}`).join('&') + '&UseDefaultProcessorFeatures=' + UseDefaultProcessorFeatures + '&DeletionProtection=' + DeletionProtection + '&MaxAllocatedStorage=' + MaxAllocatedStorage + '&CertificateRotationRestart=' + CertificateRotationRestart + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p> Modifies the parameters of a DB parameter group. To modify more than one parameter, submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request. </p> <note> <p>Changes to dynamic parameters are applied immediately. Changes to static parameters require a reboot without failover to the DB instance associated with the parameter group before the change can take effect.</p> </note> <important> <p>After you modify a DB parameter group, you should wait at least 5 minutes before creating your first DB instance that uses that DB parameter group as the default parameter group. This allows Amazon RDS to fully complete the modify action before the parameter group is used as the default for a new DB instance. This is especially important for parameters that are critical when creating the default database for a DB instance, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon RDS console</a> or the <i>DescribeDBParameters</i> command to verify that your DB parameter group has been created or modified.</p> </important>
		 * Get /#Action=ModifyDBParameterGroup
		 * @param {string} DBParameterGroupName <p>The name of the DB parameter group.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the name of an existing <code>DBParameterGroup</code>.</p> </li> </ul>
		 * @param {Array<Parameter>} Parameters <p>An array of parameter names, values, and the apply method for the parameter update. At least one parameter name, value, and apply method must be supplied; later arguments are optional. A maximum of 20 parameters can be modified in a single request.</p> <p>Valid Values (for the application method): <code>immediate | pending-reboot</code> </p> <note> <p>You can use the immediate value with dynamic parameters only. You can use the pending-reboot value for both dynamic and static parameters, and changes are applied when you reboot the DB instance without failover.</p> </note>
		 * @return {void} Success
		 */
		GET_ModifyDBParameterGroup(DBParameterGroupName: string, Parameters: Array<Parameter>, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=ModifyDBParameterGroup?DBParameterGroupName=' + (DBParameterGroupName == null ? '' : encodeURIComponent(DBParameterGroupName)) + '&' + Parameters.map(z => `Parameters=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <note> <p>This is prerelease documentation for the RDS Database Proxy feature in preview release. It is subject to change.</p> </note> <p>Changes the settings for an existing DB proxy.</p>
		 * Get /#Action=ModifyDBProxy
		 * @param {string} DBProxyName The identifier for the <code>DBProxy</code> to modify.
		 * @param {string} NewDBProxyName The new identifier for the <code>DBProxy</code>. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it can't end with a hyphen or contain two consecutive hyphens.
		 * @param {Array<UserAuthConfig>} Auth The new authentication settings for the <code>DBProxy</code>.
		 * @param {boolean} RequireTLS Whether Transport Layer Security (TLS) encryption is required for connections to the proxy. By enabling this setting, you can enforce encrypted TLS connections to the proxy, even if the associated database doesn't use TLS.
		 * @param {number} IdleClientTimeout The number of seconds that a connection to the proxy can be inactive before the proxy disconnects it. You can set this value higher or lower than the connection timeout limit for the associated database.
		 * @param {boolean} DebugLogging Whether the proxy includes detailed information about SQL statements in its logs. This information helps you to debug issues involving SQL behavior or the performance and scalability of the proxy connections. The debug information includes the text of SQL statements that you submit through the proxy. Thus, only enable this setting when needed for debugging, and only when you have security measures in place to safeguard any sensitive information that appears in the logs.
		 * @param {string} RoleArn The Amazon Resource Name (ARN) of the IAM role that the proxy uses to access secrets in AWS Secrets Manager.
		 * @param {Array<String>} SecurityGroups The new list of security groups for the <code>DBProxy</code>.
		 * @return {void} Success
		 */
		GET_ModifyDBProxy(DBProxyName: string, NewDBProxyName: string, Auth: Array<UserAuthConfig>, RequireTLS: boolean, IdleClientTimeout: number, DebugLogging: boolean, RoleArn: string, SecurityGroups: Array<String>, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=ModifyDBProxy?DBProxyName=' + (DBProxyName == null ? '' : encodeURIComponent(DBProxyName)) + '&NewDBProxyName=' + (NewDBProxyName == null ? '' : encodeURIComponent(NewDBProxyName)) + '&' + Auth.map(z => `Auth=${z}`).join('&') + '&RequireTLS=' + RequireTLS + '&IdleClientTimeout=' + IdleClientTimeout + '&DebugLogging=' + DebugLogging + '&RoleArn=' + (RoleArn == null ? '' : encodeURIComponent(RoleArn)) + '&' + SecurityGroups.map(z => `SecurityGroups=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <note> <p>This is prerelease documentation for the RDS Database Proxy feature in preview release. It is subject to change.</p> </note> <p>Modifies the properties of a <code>DBProxyTargetGroup</code>.</p>
		 * Get /#Action=ModifyDBProxyTargetGroup
		 * @param {string} TargetGroupName The name of the new target group to assign to the proxy.
		 * @param {string} DBProxyName The name of the new proxy to which to assign the target group.
		 * @param {string} ConnectionPoolConfig The settings that determine the size and behavior of the connection pool for the target group.
		 * @param {string} NewName The new name for the modified <code>DBProxyTarget</code>. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it can't end with a hyphen or contain two consecutive hyphens.
		 * @return {void} Success
		 */
		GET_ModifyDBProxyTargetGroup(TargetGroupName: string, DBProxyName: string, ConnectionPoolConfig: string, NewName: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=ModifyDBProxyTargetGroup?TargetGroupName=' + (TargetGroupName == null ? '' : encodeURIComponent(TargetGroupName)) + '&DBProxyName=' + (DBProxyName == null ? '' : encodeURIComponent(DBProxyName)) + '&ConnectionPoolConfig=' + (ConnectionPoolConfig == null ? '' : encodeURIComponent(ConnectionPoolConfig)) + '&NewName=' + (NewName == null ? '' : encodeURIComponent(NewName)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Updates a manual DB snapshot with a new engine version. The snapshot can be encrypted or unencrypted, but not shared or public. </p> <p>Amazon RDS supports upgrading DB snapshots for MySQL, Oracle, and PostgreSQL. </p>
		 * Get /#Action=ModifyDBSnapshot
		 * @param {string} DBSnapshotIdentifier The identifier of the DB snapshot to modify.
		 * @param {string} EngineVersion <p>The engine version to upgrade the DB snapshot to. </p> <p>The following are the database engines and engine versions that are available when you upgrade a DB snapshot. </p> <p> <b>MySQL</b> </p> <ul> <li> <p> <code>5.5.46</code> (supported for 5.1 DB snapshots)</p> </li> </ul> <p> <b>Oracle</b> </p> <ul> <li> <p> <code>12.1.0.2.v8</code> (supported for 12.1.0.1 DB snapshots)</p> </li> <li> <p> <code>11.2.0.4.v12</code> (supported for 11.2.0.2 DB snapshots)</p> </li> <li> <p> <code>11.2.0.4.v11</code> (supported for 11.2.0.3 DB snapshots)</p> </li> </ul> <p> <b>PostgreSQL</b> </p> <p>For the list of engine versions that are available for upgrading a DB snapshot, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.PostgreSQL.html#USER_UpgradeDBInstance.PostgreSQL.MajorVersion"> Upgrading the PostgreSQL DB Engine for Amazon RDS</a>. </p>
		 * @param {string} OptionGroupName <p>The option group to identify with the upgraded DB snapshot. </p> <p>You can specify this parameter when you upgrade an Oracle DB snapshot. The same option group considerations apply when upgrading a DB snapshot as when upgrading a DB instance. For more information, see <a href="http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Oracle.html#USER_UpgradeDBInstance.Oracle.OGPG.OG">Option Group Considerations</a> in the <i>Amazon RDS User Guide.</i> </p>
		 * @return {void} Success
		 */
		GET_ModifyDBSnapshot(DBSnapshotIdentifier: string, EngineVersion: string, OptionGroupName: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=ModifyDBSnapshot?DBSnapshotIdentifier=' + (DBSnapshotIdentifier == null ? '' : encodeURIComponent(DBSnapshotIdentifier)) + '&EngineVersion=' + (EngineVersion == null ? '' : encodeURIComponent(EngineVersion)) + '&OptionGroupName=' + (OptionGroupName == null ? '' : encodeURIComponent(OptionGroupName)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Adds an attribute and values to, or removes an attribute and values from, a manual DB snapshot.</p> <p>To share a manual DB snapshot with other AWS accounts, specify <code>restore</code> as the <code>AttributeName</code> and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the AWS accounts that are authorized to restore the manual DB snapshot. Uses the value <code>all</code> to make the manual DB snapshot public, which means it can be copied or restored by all AWS accounts. Do not add the <code>all</code> value for any manual DB snapshots that contain private information that you don't want available to all AWS accounts. If the manual DB snapshot is encrypted, it can be shared, but only by specifying a list of authorized AWS account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p> <p>To view which AWS accounts have access to copy or restore a manual DB snapshot, or whether a manual DB snapshot public or private, use the <code>DescribeDBSnapshotAttributes</code> API action.</p>
		 * Get /#Action=ModifyDBSnapshotAttribute
		 * @param {string} DBSnapshotIdentifier The identifier for the DB snapshot to modify the attributes for.
		 * @param {string} AttributeName <p>The name of the DB snapshot attribute to modify.</p> <p>To manage authorization for other AWS accounts to copy or restore a manual DB snapshot, set this value to <code>restore</code>.</p>
		 * @param {Array<String>} ValuesToAdd <p>A list of DB snapshot attributes to add to the attribute specified by <code>AttributeName</code>.</p> <p>To authorize other AWS accounts to copy or restore a manual snapshot, set this list to include one or more AWS account IDs, or <code>all</code> to make the manual DB snapshot restorable by any AWS account. Do not add the <code>all</code> value for any manual DB snapshots that contain private information that you don't want available to all AWS accounts.</p>
		 * @param {Array<String>} ValuesToRemove <p>A list of DB snapshot attributes to remove from the attribute specified by <code>AttributeName</code>.</p> <p>To remove authorization for other AWS accounts to copy or restore a manual snapshot, set this list to include one or more AWS account identifiers, or <code>all</code> to remove authorization for any AWS account to copy or restore the DB snapshot. If you specify <code>all</code>, an AWS account whose account ID is explicitly added to the <code>restore</code> attribute can still copy or restore the manual DB snapshot.</p>
		 * @return {void} Success
		 */
		GET_ModifyDBSnapshotAttribute(DBSnapshotIdentifier: string, AttributeName: string, ValuesToAdd: Array<String>, ValuesToRemove: Array<String>, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=ModifyDBSnapshotAttribute?DBSnapshotIdentifier=' + (DBSnapshotIdentifier == null ? '' : encodeURIComponent(DBSnapshotIdentifier)) + '&AttributeName=' + (AttributeName == null ? '' : encodeURIComponent(AttributeName)) + '&' + ValuesToAdd.map(z => `ValuesToAdd=${z}`).join('&') + '&' + ValuesToRemove.map(z => `ValuesToRemove=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Modifies an existing DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the AWS Region.
		 * Get /#Action=ModifyDBSubnetGroup
		 * @param {string} DBSubnetGroupName <p>The name for the DB subnet group. This value is stored as a lowercase string. You can't modify the default subnet group. </p> <p>Constraints: Must match the name of an existing DBSubnetGroup. Must not be default.</p> <p>Example: <code>mySubnetgroup</code> </p>
		 * @param {string} DBSubnetGroupDescription The description for the DB subnet group.
		 * @param {Array<String>} SubnetIds The EC2 subnet IDs for the DB subnet group.
		 * @return {void} Success
		 */
		GET_ModifyDBSubnetGroup(DBSubnetGroupName: string, DBSubnetGroupDescription: string, SubnetIds: Array<String>, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=ModifyDBSubnetGroup?DBSubnetGroupName=' + (DBSubnetGroupName == null ? '' : encodeURIComponent(DBSubnetGroupName)) + '&DBSubnetGroupDescription=' + (DBSubnetGroupDescription == null ? '' : encodeURIComponent(DBSubnetGroupDescription)) + '&' + SubnetIds.map(z => `SubnetIds=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Modifies an existing RDS event notification subscription. You can't modify the source identifiers using this call. To change source identifiers for a subscription, use the <code>AddSourceIdentifierToSubscription</code> and <code>RemoveSourceIdentifierFromSubscription</code> calls.</p> <p>You can see a list of the event categories for a given SourceType in the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.html">Events</a> topic in the <i>Amazon RDS User Guide</i> or by using the <b>DescribeEventCategories</b> action.</p>
		 * Get /#Action=ModifyEventSubscription
		 * @param {string} SubscriptionName The name of the RDS event notification subscription.
		 * @param {string} SnsTopicArn The Amazon Resource Name (ARN) of the SNS topic created for event notification. The ARN is created by Amazon SNS when you create a topic and subscribe to it.
		 * @param {string} SourceType <p>The type of source that is generating the events. For example, if you want to be notified of events generated by a DB instance, you would set this parameter to db-instance. If this value isn't specified, all events are returned.</p> <p>Valid values: db-instance | db-parameter-group | db-security-group | db-snapshot</p>
		 * @param {Array<String>} EventCategories  A list of event categories for a SourceType that you want to subscribe to. You can see a list of the categories for a given SourceType in the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.html">Events</a> topic in the <i>Amazon RDS User Guide</i> or by using the <b>DescribeEventCategories</b> action. 
		 * @param {boolean} Enabled  A value that indicates whether to activate the subscription. 
		 * @return {void} Success
		 */
		GET_ModifyEventSubscription(SubscriptionName: string, SnsTopicArn: string, SourceType: string, EventCategories: Array<String>, Enabled: boolean, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=ModifyEventSubscription?SubscriptionName=' + (SubscriptionName == null ? '' : encodeURIComponent(SubscriptionName)) + '&SnsTopicArn=' + (SnsTopicArn == null ? '' : encodeURIComponent(SnsTopicArn)) + '&SourceType=' + (SourceType == null ? '' : encodeURIComponent(SourceType)) + '&' + EventCategories.map(z => `EventCategories=${z}`).join('&') + '&Enabled=' + Enabled + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p> Modify a setting for an Amazon Aurora global cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
		 * Get /#Action=ModifyGlobalCluster
		 * @param {string} GlobalClusterIdentifier <p> The DB cluster identifier for the global cluster being modified. This parameter isn't case-sensitive. </p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing global database cluster.</p> </li> </ul>
		 * @param {string} NewGlobalClusterIdentifier <p> The new cluster identifier for the global database cluster when modifying a global database cluster. This value is stored as a lowercase string. </p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens</p> </li> <li> <p>The first character must be a letter</p> </li> <li> <p>Can't end with a hyphen or contain two consecutive hyphens</p> </li> </ul> <p>Example: <code>my-cluster2</code> </p>
		 * @param {boolean} DeletionProtection  Indicates if the global database cluster has deletion protection enabled. The global database cluster can't be deleted when deletion protection is enabled. 
		 * @return {void} Success
		 */
		GET_ModifyGlobalCluster(GlobalClusterIdentifier: string, NewGlobalClusterIdentifier: string, DeletionProtection: boolean, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=ModifyGlobalCluster?GlobalClusterIdentifier=' + (GlobalClusterIdentifier == null ? '' : encodeURIComponent(GlobalClusterIdentifier)) + '&NewGlobalClusterIdentifier=' + (NewGlobalClusterIdentifier == null ? '' : encodeURIComponent(NewGlobalClusterIdentifier)) + '&DeletionProtection=' + DeletionProtection + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Modifies an existing option group.
		 * Get /#Action=ModifyOptionGroup
		 * @param {string} OptionGroupName <p>The name of the option group to be modified.</p> <p>Permanent options, such as the TDE option for Oracle Advanced Security TDE, can't be removed from an option group, and that option group can't be removed from a DB instance once it is associated with a DB instance</p>
		 * @param {Array<OptionConfiguration>} OptionsToInclude Options in this list are added to the option group or, if already present, the specified configuration is used to update the existing configuration.
		 * @param {Array<String>} OptionsToRemove Options in this list are removed from the option group.
		 * @param {boolean} ApplyImmediately A value that indicates whether to apply the change immediately or during the next maintenance window for each instance associated with the option group.
		 * @return {void} Success
		 */
		GET_ModifyOptionGroup(OptionGroupName: string, OptionsToInclude: Array<OptionConfiguration>, OptionsToRemove: Array<String>, ApplyImmediately: boolean, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=ModifyOptionGroup?OptionGroupName=' + (OptionGroupName == null ? '' : encodeURIComponent(OptionGroupName)) + '&' + OptionsToInclude.map(z => `OptionsToInclude=${z}`).join('&') + '&' + OptionsToRemove.map(z => `OptionsToRemove=${z}`).join('&') + '&ApplyImmediately=' + ApplyImmediately + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Promotes a read replica DB instance to a standalone DB instance.</p> <note> <ul> <li> <p>Backup duration is a function of the amount of changes to the database since the previous backup. If you plan to promote a read replica to a standalone instance, we recommend that you enable backups and complete at least one backup prior to promotion. In addition, a read replica cannot be promoted to a standalone instance when it is in the <code>backing-up</code> status. If you have enabled backups on your read replica, configure the automated backup window so that daily backups do not interfere with read replica promotion.</p> </li> <li> <p>This command doesn't apply to Aurora MySQL and Aurora PostgreSQL.</p> </li> </ul> </note>
		 * Get /#Action=PromoteReadReplica
		 * @param {string} DBInstanceIdentifier <p>The DB instance identifier. This value is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing read replica DB instance.</p> </li> </ul> <p>Example: <code>mydbinstance</code> </p>
		 * @param {number} BackupRetentionPeriod <p>The number of days for which automated backups are retained. Setting this parameter to a positive number enables backups. Setting this parameter to 0 disables automated backups.</p> <p>Default: 1</p> <p>Constraints:</p> <ul> <li> <p>Must be a value from 0 to 35.</p> </li> <li> <p>Can't be set to 0 if the DB instance is a source to read replicas.</p> </li> </ul>
		 * @param {string} PreferredBackupWindow <p> The daily time range during which automated backups are created if automated backups are enabled, using the <code>BackupRetentionPeriod</code> parameter. </p> <p> The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region. To see the time blocks available, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/AdjustingTheMaintenanceWindow.html"> Adjusting the Preferred Maintenance Window</a> in the <i>Amazon RDS User Guide.</i> </p> <p>Constraints:</p> <ul> <li> <p>Must be in the format <code>hh24:mi-hh24:mi</code>.</p> </li> <li> <p>Must be in Universal Coordinated Time (UTC).</p> </li> <li> <p>Must not conflict with the preferred maintenance window.</p> </li> <li> <p>Must be at least 30 minutes.</p> </li> </ul>
		 * @return {void} Success
		 */
		GET_PromoteReadReplica(DBInstanceIdentifier: string, BackupRetentionPeriod: number, PreferredBackupWindow: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=PromoteReadReplica?DBInstanceIdentifier=' + (DBInstanceIdentifier == null ? '' : encodeURIComponent(DBInstanceIdentifier)) + '&BackupRetentionPeriod=' + BackupRetentionPeriod + '&PreferredBackupWindow=' + (PreferredBackupWindow == null ? '' : encodeURIComponent(PreferredBackupWindow)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Promotes a read replica DB cluster to a standalone DB cluster.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
		 * Get /#Action=PromoteReadReplicaDBCluster
		 * @param {string} DBClusterIdentifier <p>The identifier of the DB cluster read replica to promote. This parameter isn't case-sensitive. </p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing DB cluster read replica.</p> </li> </ul> <p>Example: <code>my-cluster-replica1</code> </p>
		 * @return {void} Success
		 */
		GET_PromoteReadReplicaDBCluster(DBClusterIdentifier: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=PromoteReadReplicaDBCluster?DBClusterIdentifier=' + (DBClusterIdentifier == null ? '' : encodeURIComponent(DBClusterIdentifier)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Purchases a reserved DB instance offering.
		 * Get /#Action=PurchaseReservedDBInstancesOffering
		 * @param {string} ReservedDBInstancesOfferingId <p>The ID of the Reserved DB instance offering to purchase.</p> <p>Example: 438012d3-4052-4cc7-b2e3-8d3372e0e706</p>
		 * @param {string} ReservedDBInstanceId <p>Customer-specified identifier to track this reservation.</p> <p>Example: myreservationID</p>
		 * @param {number} DBInstanceCount <p>The number of instances to reserve.</p> <p>Default: <code>1</code> </p>
		 * @return {void} Success
		 */
		GET_PurchaseReservedDBInstancesOffering(ReservedDBInstancesOfferingId: string, ReservedDBInstanceId: string, DBInstanceCount: number, Tags: Array<Tag>, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=PurchaseReservedDBInstancesOffering?ReservedDBInstancesOfferingId=' + (ReservedDBInstancesOfferingId == null ? '' : encodeURIComponent(ReservedDBInstancesOfferingId)) + '&ReservedDBInstanceId=' + (ReservedDBInstanceId == null ? '' : encodeURIComponent(ReservedDBInstanceId)) + '&DBInstanceCount=' + DBInstanceCount + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>You might need to reboot your DB instance, usually for maintenance reasons. For example, if you make certain modifications, or if you change the DB parameter group associated with the DB instance, you must reboot the instance for the changes to take effect. </p> <p>Rebooting a DB instance restarts the database engine service. Rebooting a DB instance results in a momentary outage, during which the DB instance status is set to rebooting. </p> <p>For more information about rebooting, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_RebootInstance.html">Rebooting a DB Instance</a> in the <i>Amazon RDS User Guide.</i> </p>
		 * Get /#Action=RebootDBInstance
		 * @param {string} DBInstanceIdentifier <p>The DB instance identifier. This parameter is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing DBInstance.</p> </li> </ul>
		 * @param {boolean} ForceFailover <p> A value that indicates whether the reboot is conducted through a Multi-AZ failover. </p> <p>Constraint: You can't enable force failover if the instance isn't configured for Multi-AZ.</p>
		 * @return {void} Success
		 */
		GET_RebootDBInstance(DBInstanceIdentifier: string, ForceFailover: boolean, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=RebootDBInstance?DBInstanceIdentifier=' + (DBInstanceIdentifier == null ? '' : encodeURIComponent(DBInstanceIdentifier)) + '&ForceFailover=' + ForceFailover + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <note> <p>This is prerelease documentation for the RDS Database Proxy feature in preview release. It is subject to change.</p> </note> <p>Associate one or more <code>DBProxyTarget</code> data structures with a <code>DBProxyTargetGroup</code>.</p>
		 * Get /#Action=RegisterDBProxyTargets
		 * @param {string} DBProxyName The identifier of the <code>DBProxy</code> that is associated with the <code>DBProxyTargetGroup</code>.
		 * @param {string} TargetGroupName The identifier of the <code>DBProxyTargetGroup</code>.
		 * @param {Array<String>} DBInstanceIdentifiers One or more DB instance identifiers.
		 * @param {Array<String>} DBClusterIdentifiers One or more DB cluster identifiers.
		 * @return {void} Success
		 */
		GET_RegisterDBProxyTargets(DBProxyName: string, TargetGroupName: string, DBInstanceIdentifiers: Array<String>, DBClusterIdentifiers: Array<String>, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=RegisterDBProxyTargets?DBProxyName=' + (DBProxyName == null ? '' : encodeURIComponent(DBProxyName)) + '&TargetGroupName=' + (TargetGroupName == null ? '' : encodeURIComponent(TargetGroupName)) + '&' + DBInstanceIdentifiers.map(z => `DBInstanceIdentifiers=${z}`).join('&') + '&' + DBClusterIdentifiers.map(z => `DBClusterIdentifiers=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p> Detaches an Aurora secondary cluster from an Aurora global database cluster. The cluster becomes a standalone cluster with read-write capability instead of being read-only and receiving data from a primary cluster in a different region. </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
		 * Get /#Action=RemoveFromGlobalCluster
		 * @param {string} GlobalClusterIdentifier  The cluster identifier to detach from the Aurora global database cluster. 
		 * @param {string} DbClusterIdentifier  The Amazon Resource Name (ARN) identifying the cluster that was detached from the Aurora global database cluster. 
		 * @return {void} Success
		 */
		GET_RemoveFromGlobalCluster(GlobalClusterIdentifier: string, DbClusterIdentifier: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=RemoveFromGlobalCluster?GlobalClusterIdentifier=' + (GlobalClusterIdentifier == null ? '' : encodeURIComponent(GlobalClusterIdentifier)) + '&DbClusterIdentifier=' + (DbClusterIdentifier == null ? '' : encodeURIComponent(DbClusterIdentifier)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Disassociates an AWS Identity and Access Management (IAM) role from an Amazon Aurora DB cluster. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Integrating.Authorizing.html">Authorizing Amazon Aurora MySQL to Access Other AWS Services on Your Behalf </a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
		 * Get /#Action=RemoveRoleFromDBCluster
		 * @param {string} DBClusterIdentifier The name of the DB cluster to disassociate the IAM role from.
		 * @param {string} RoleArn The Amazon Resource Name (ARN) of the IAM role to disassociate from the Aurora DB cluster, for example <code>arn:aws:iam::123456789012:role/AuroraAccessRole</code>.
		 * @param {string} FeatureName The name of the feature for the DB cluster that the IAM role is to be disassociated from. For the list of supported feature names, see <a>DBEngineVersion</a>.
		 * @return {void} Success
		 */
		GET_RemoveRoleFromDBCluster(DBClusterIdentifier: string, RoleArn: string, FeatureName: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=RemoveRoleFromDBCluster?DBClusterIdentifier=' + (DBClusterIdentifier == null ? '' : encodeURIComponent(DBClusterIdentifier)) + '&RoleArn=' + (RoleArn == null ? '' : encodeURIComponent(RoleArn)) + '&FeatureName=' + (FeatureName == null ? '' : encodeURIComponent(FeatureName)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Disassociates an AWS Identity and Access Management (IAM) role from a DB instance.
		 * Get /#Action=RemoveRoleFromDBInstance
		 * @param {string} DBInstanceIdentifier The name of the DB instance to disassociate the IAM role from.
		 * @param {string} RoleArn The Amazon Resource Name (ARN) of the IAM role to disassociate from the DB instance, for example <code>arn:aws:iam::123456789012:role/AccessRole</code>.
		 * @param {string} FeatureName The name of the feature for the DB instance that the IAM role is to be disassociated from. For the list of supported feature names, see <code>DBEngineVersion</code>. 
		 * @return {void} Success
		 */
		GET_RemoveRoleFromDBInstance(DBInstanceIdentifier: string, RoleArn: string, FeatureName: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=RemoveRoleFromDBInstance?DBInstanceIdentifier=' + (DBInstanceIdentifier == null ? '' : encodeURIComponent(DBInstanceIdentifier)) + '&RoleArn=' + (RoleArn == null ? '' : encodeURIComponent(RoleArn)) + '&FeatureName=' + (FeatureName == null ? '' : encodeURIComponent(FeatureName)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes a source identifier from an existing RDS event notification subscription.
		 * Get /#Action=RemoveSourceIdentifierFromSubscription
		 * @param {string} SubscriptionName The name of the RDS event notification subscription you want to remove a source identifier from.
		 * @param {string} SourceIdentifier  The source identifier to be removed from the subscription, such as the <b>DB instance identifier</b> for a DB instance or the name of a security group. 
		 * @return {void} Success
		 */
		GET_RemoveSourceIdentifierFromSubscription(SubscriptionName: string, SourceIdentifier: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=RemoveSourceIdentifierFromSubscription?SubscriptionName=' + (SubscriptionName == null ? '' : encodeURIComponent(SubscriptionName)) + '&SourceIdentifier=' + (SourceIdentifier == null ? '' : encodeURIComponent(SourceIdentifier)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Removes metadata tags from an Amazon RDS resource.</p> <p>For an overview on tagging an Amazon RDS resource, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i> </p>
		 * Get /#Action=RemoveTagsFromResource
		 * @param {string} ResourceName The Amazon RDS resource that the tags are removed from. This value is an Amazon Resource Name (ARN). For information about creating an ARN, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing"> Constructing an ARN for Amazon RDS</a> in the <i>Amazon RDS User Guide.</i> 
		 * @param {Array<String>} TagKeys The tag key (name) of the tag to be removed.
		 * @return {void} Success
		 */
		GET_RemoveTagsFromResource(ResourceName: string, TagKeys: Array<String>, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=RemoveTagsFromResource?ResourceName=' + (ResourceName == null ? '' : encodeURIComponent(ResourceName)) + '&' + TagKeys.map(z => `TagKeys=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p> Modifies the parameters of a DB cluster parameter group to the default value. To reset specific parameters submit a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. To reset the entire DB cluster parameter group, specify the <code>DBClusterParameterGroupName</code> and <code>ResetAllParameters</code> parameters. </p> <p> When resetting the entire group, dynamic parameters are updated immediately and static parameters are set to <code>pending-reboot</code> to take effect on the next DB instance restart or <code>RebootDBInstance</code> request. You must call <code>RebootDBInstance</code> for every DB instance in your DB cluster that you want the updated static parameter to apply to.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
		 * Get /#Action=ResetDBClusterParameterGroup
		 * @param {string} DBClusterParameterGroupName The name of the DB cluster parameter group to reset.
		 * @param {boolean} ResetAllParameters A value that indicates whether to reset all parameters in the DB cluster parameter group to their default values. You can't use this parameter if there is a list of parameter names specified for the <code>Parameters</code> parameter.
		 * @param {Array<Parameter>} Parameters A list of parameter names in the DB cluster parameter group to reset to the default values. You can't use this parameter if the <code>ResetAllParameters</code> parameter is enabled.
		 * @return {void} Success
		 */
		GET_ResetDBClusterParameterGroup(DBClusterParameterGroupName: string, ResetAllParameters: boolean, Parameters: Array<Parameter>, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=ResetDBClusterParameterGroup?DBClusterParameterGroupName=' + (DBClusterParameterGroupName == null ? '' : encodeURIComponent(DBClusterParameterGroupName)) + '&ResetAllParameters=' + ResetAllParameters + '&' + Parameters.map(z => `Parameters=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Modifies the parameters of a DB parameter group to the engine/system default value. To reset specific parameters, provide a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. To reset the entire DB parameter group, specify the <code>DBParameterGroup</code> name and <code>ResetAllParameters</code> parameters. When resetting the entire group, dynamic parameters are updated immediately and static parameters are set to <code>pending-reboot</code> to take effect on the next DB instance restart or <code>RebootDBInstance</code> request.
		 * Get /#Action=ResetDBParameterGroup
		 * @param {string} DBParameterGroupName <p>The name of the DB parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Must match the name of an existing <code>DBParameterGroup</code>.</p> </li> </ul>
		 * @param {boolean} ResetAllParameters  A value that indicates whether to reset all parameters in the DB parameter group to default values. By default, all parameters in the DB parameter group are reset to default values. 
		 * @param {Array<Parameter>} Parameters <p>To reset the entire DB parameter group, specify the <code>DBParameterGroup</code> name and <code>ResetAllParameters</code> parameters. To reset specific parameters, provide a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request.</p> <p> <b>MySQL</b> </p> <p>Valid Values (for Apply method): <code>immediate</code> | <code>pending-reboot</code> </p> <p>You can use the immediate value with dynamic parameters only. You can use the <code>pending-reboot</code> value for both dynamic and static parameters, and changes are applied when DB instance reboots.</p> <p> <b>MariaDB</b> </p> <p>Valid Values (for Apply method): <code>immediate</code> | <code>pending-reboot</code> </p> <p>You can use the immediate value with dynamic parameters only. You can use the <code>pending-reboot</code> value for both dynamic and static parameters, and changes are applied when DB instance reboots.</p> <p> <b>Oracle</b> </p> <p>Valid Values (for Apply method): <code>pending-reboot</code> </p>
		 * @return {void} Success
		 */
		GET_ResetDBParameterGroup(DBParameterGroupName: string, ResetAllParameters: boolean, Parameters: Array<Parameter>, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=ResetDBParameterGroup?DBParameterGroupName=' + (DBParameterGroupName == null ? '' : encodeURIComponent(DBParameterGroupName)) + '&ResetAllParameters=' + ResetAllParameters + '&' + Parameters.map(z => `Parameters=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates an Amazon Aurora DB cluster from data stored in an Amazon S3 bucket. Amazon RDS must be authorized to access the Amazon S3 bucket and the data must be created using the Percona XtraBackup utility as described in <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Migrating.html"> Migrating Data to an Amazon Aurora MySQL DB Cluster</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only restores the DB cluster, not the DB instances for that DB cluster. You must invoke the <code>CreateDBInstance</code> action to create DB instances for the restored DB cluster, specifying the identifier of the restored DB cluster in <code>DBClusterIdentifier</code>. You can create DB instances only after the <code>RestoreDBClusterFromS3</code> action has completed and the DB cluster is available.</p> </note> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
		 * Get /#Action=RestoreDBClusterFromS3
		 * @param {Array<String>} AvailabilityZones A list of Availability Zones (AZs) where instances in the restored DB cluster can be created.
		 * @param {number} BackupRetentionPeriod <p>The number of days for which automated backups of the restored DB cluster are retained. You must specify a minimum value of 1.</p> <p>Default: 1</p> <p>Constraints:</p> <ul> <li> <p>Must be a value from 1 to 35</p> </li> </ul>
		 * @param {string} CharacterSetName A value that indicates that the restored DB cluster should be associated with the specified CharacterSet.
		 * @param {string} DatabaseName The database name for the restored DB cluster.
		 * @param {string} DBClusterIdentifier <p>The name of the DB cluster to create from the source data in the Amazon S3 bucket. This parameter is isn't case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Can't end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>my-cluster1</code> </p>
		 * @param {string} DBClusterParameterGroupName <p>The name of the DB cluster parameter group to associate with the restored DB cluster. If this argument is omitted, <code>default.aurora5.6</code> is used. </p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p> </li> </ul>
		 * @param {Array<String>} VpcSecurityGroupIds A list of EC2 VPC security groups to associate with the restored DB cluster.
		 * @param {string} DBSubnetGroupName <p>A DB subnet group to associate with the restored DB cluster.</p> <p>Constraints: If supplied, must match the name of an existing DBSubnetGroup. </p> <p>Example: <code>mySubnetgroup</code> </p>
		 * @param {string} Engine <p>The name of the database engine to be used for the restored DB cluster.</p> <p>Valid Values: <code>aurora</code>, <code>aurora-postgresql</code> </p>
		 * @param {string} EngineVersion <p>The version number of the database engine to use.</p> <p>To list all of the available engine versions for <code>aurora</code> (for MySQL 5.6-compatible Aurora), use the following command:</p> <p> <code>aws rds describe-db-engine-versions --engine aurora --query "DBEngineVersions[].EngineVersion"</code> </p> <p>To list all of the available engine versions for <code>aurora-mysql</code> (for MySQL 5.7-compatible Aurora), use the following command:</p> <p> <code>aws rds describe-db-engine-versions --engine aurora-mysql --query "DBEngineVersions[].EngineVersion"</code> </p> <p>To list all of the available engine versions for <code>aurora-postgresql</code>, use the following command:</p> <p> <code>aws rds describe-db-engine-versions --engine aurora-postgresql --query "DBEngineVersions[].EngineVersion"</code> </p> <p> <b>Aurora MySQL</b> </p> <p>Example: <code>5.6.10a</code>, <code>5.6.mysql_aurora.1.19.2</code>, <code>5.7.12</code>, <code>5.7.mysql_aurora.2.04.5</code> </p> <p> <b>Aurora PostgreSQL</b> </p> <p>Example: <code>9.6.3</code>, <code>10.7</code> </p>
		 * @param {number} Port <p>The port number on which the instances in the restored DB cluster accept connections.</p> <p> Default: <code>3306</code> </p>
		 * @param {string} MasterUsername <p>The name of the master user for the restored DB cluster.</p> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 16 letters or numbers.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Can't be a reserved word for the chosen database engine.</p> </li> </ul>
		 * @param {string} MasterUserPassword <p>The password for the master database user. This password can contain any printable ASCII character except "/", """, or "@".</p> <p>Constraints: Must contain from 8 to 41 characters.</p>
		 * @param {string} OptionGroupName <p>A value that indicates that the restored DB cluster should be associated with the specified option group.</p> <p>Permanent options can't be removed from an option group. An option group can't be removed from a DB cluster once it is associated with a DB cluster.</p>
		 * @param {string} PreferredBackupWindow <p>The daily time range during which automated backups are created if automated backups are enabled using the <code>BackupRetentionPeriod</code> parameter. </p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region. To see the time blocks available, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow.Aurora"> Adjusting the Preferred Maintenance Window</a> in the <i>Amazon Aurora User Guide.</i> </p> <p>Constraints:</p> <ul> <li> <p>Must be in the format <code>hh24:mi-hh24:mi</code>.</p> </li> <li> <p>Must be in Universal Coordinated Time (UTC).</p> </li> <li> <p>Must not conflict with the preferred maintenance window.</p> </li> <li> <p>Must be at least 30 minutes.</p> </li> </ul>
		 * @param {string} PreferredMaintenanceWindow <p>The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p> <p>Format: <code>ddd:hh24:mi-ddd:hh24:mi</code> </p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region, occurring on a random day of the week. To see the time blocks available, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow.Aurora"> Adjusting the Preferred Maintenance Window</a> in the <i>Amazon Aurora User Guide.</i> </p> <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p> <p>Constraints: Minimum 30-minute window.</p>
		 * @param {boolean} StorageEncrypted A value that indicates whether the restored DB cluster is encrypted.
		 * @param {string} KmsKeyId <p>The AWS KMS key identifier for an encrypted DB cluster.</p> <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are creating a DB cluster with the same AWS account that owns the KMS encryption key used to encrypt the new DB cluster, then you can use the KMS key alias instead of the ARN for the KM encryption key.</p> <p>If the StorageEncrypted parameter is enabled, and you do not specify a value for the <code>KmsKeyId</code> parameter, then Amazon RDS will use your default encryption key. AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS Region.</p>
		 * @param {boolean} EnableIAMDatabaseAuthentication <p>A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. By default, mapping is disabled.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBAuth.html"> IAM Database Authentication</a> in the <i>Amazon Aurora User Guide.</i> </p>
		 * @param {string} SourceEngine <p>The identifier for the database engine that was backed up to create the files stored in the Amazon S3 bucket. </p> <p>Valid values: <code>mysql</code> </p>
		 * @param {string} SourceEngineVersion <p>The version of the database that the backup files were created from.</p> <p>MySQL version 5.5 and 5.6 are supported. </p> <p>Example: <code>5.6.22</code> </p>
		 * @param {string} S3BucketName The name of the Amazon S3 bucket that contains the data used to create the Amazon Aurora DB cluster.
		 * @param {string} S3Prefix The prefix for all of the file names that contain the data used to create the Amazon Aurora DB cluster. If you do not specify a <b>SourceS3Prefix</b> value, then the Amazon Aurora DB cluster is created by using all of the files in the Amazon S3 bucket.
		 * @param {string} S3IngestionRoleArn The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that authorizes Amazon RDS to access the Amazon S3 bucket on your behalf.
		 * @param {number} BacktrackWindow <p>The target backtrack window, in seconds. To disable backtracking, set this value to 0.</p> <p>Default: 0</p> <p>Constraints:</p> <ul> <li> <p>If specified, this value must be set to a number from 0 to 259,200 (72 hours).</p> </li> </ul>
		 * @param {Array<String>} EnableCloudwatchLogsExports The list of logs that the restored DB cluster is to export to CloudWatch Logs. The values in the list depend on the DB engine being used. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon Aurora User Guide</i>.
		 * @param {boolean} DeletionProtection A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled. 
		 * @param {boolean} CopyTagsToSnapshot A value that indicates whether to copy all tags from the restored DB cluster to snapshots of the restored DB cluster. The default is not to copy them.
		 * @param {string} Domain <p>Specify the Active Directory directory ID to restore the DB cluster in. The domain must be created prior to this operation. </p> <p> For Amazon Aurora DB clusters, Amazon RDS can use Kerberos Authentication to authenticate users that connect to the DB cluster. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/kerberos-authentication.html">Kerberos Authentication</a> in the <i>Amazon Aurora User Guide</i>. </p>
		 * @param {string} DomainIAMRoleName Specify the name of the IAM role to be used when making API calls to the Directory Service.
		 * @return {void} Success
		 */
		GET_RestoreDBClusterFromS3(AvailabilityZones: Array<String>, BackupRetentionPeriod: number, CharacterSetName: string, DatabaseName: string, DBClusterIdentifier: string, DBClusterParameterGroupName: string, VpcSecurityGroupIds: Array<String>, DBSubnetGroupName: string, Engine: string, EngineVersion: string, Port: number, MasterUsername: string, MasterUserPassword: string, OptionGroupName: string, PreferredBackupWindow: string, PreferredMaintenanceWindow: string, Tags: Array<Tag>, StorageEncrypted: boolean, KmsKeyId: string, EnableIAMDatabaseAuthentication: boolean, SourceEngine: string, SourceEngineVersion: string, S3BucketName: string, S3Prefix: string, S3IngestionRoleArn: string, BacktrackWindow: number, EnableCloudwatchLogsExports: Array<String>, DeletionProtection: boolean, CopyTagsToSnapshot: boolean, Domain: string, DomainIAMRoleName: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=RestoreDBClusterFromS3?' + AvailabilityZones.map(z => `AvailabilityZones=${z}`).join('&') + '&BackupRetentionPeriod=' + BackupRetentionPeriod + '&CharacterSetName=' + (CharacterSetName == null ? '' : encodeURIComponent(CharacterSetName)) + '&DatabaseName=' + (DatabaseName == null ? '' : encodeURIComponent(DatabaseName)) + '&DBClusterIdentifier=' + (DBClusterIdentifier == null ? '' : encodeURIComponent(DBClusterIdentifier)) + '&DBClusterParameterGroupName=' + (DBClusterParameterGroupName == null ? '' : encodeURIComponent(DBClusterParameterGroupName)) + '&' + VpcSecurityGroupIds.map(z => `VpcSecurityGroupIds=${z}`).join('&') + '&DBSubnetGroupName=' + (DBSubnetGroupName == null ? '' : encodeURIComponent(DBSubnetGroupName)) + '&Engine=' + (Engine == null ? '' : encodeURIComponent(Engine)) + '&EngineVersion=' + (EngineVersion == null ? '' : encodeURIComponent(EngineVersion)) + '&Port=' + Port + '&MasterUsername=' + (MasterUsername == null ? '' : encodeURIComponent(MasterUsername)) + '&MasterUserPassword=' + (MasterUserPassword == null ? '' : encodeURIComponent(MasterUserPassword)) + '&OptionGroupName=' + (OptionGroupName == null ? '' : encodeURIComponent(OptionGroupName)) + '&PreferredBackupWindow=' + (PreferredBackupWindow == null ? '' : encodeURIComponent(PreferredBackupWindow)) + '&PreferredMaintenanceWindow=' + (PreferredMaintenanceWindow == null ? '' : encodeURIComponent(PreferredMaintenanceWindow)) + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&StorageEncrypted=' + StorageEncrypted + '&KmsKeyId=' + (KmsKeyId == null ? '' : encodeURIComponent(KmsKeyId)) + '&EnableIAMDatabaseAuthentication=' + EnableIAMDatabaseAuthentication + '&SourceEngine=' + (SourceEngine == null ? '' : encodeURIComponent(SourceEngine)) + '&SourceEngineVersion=' + (SourceEngineVersion == null ? '' : encodeURIComponent(SourceEngineVersion)) + '&S3BucketName=' + (S3BucketName == null ? '' : encodeURIComponent(S3BucketName)) + '&S3Prefix=' + (S3Prefix == null ? '' : encodeURIComponent(S3Prefix)) + '&S3IngestionRoleArn=' + (S3IngestionRoleArn == null ? '' : encodeURIComponent(S3IngestionRoleArn)) + '&BacktrackWindow=' + BacktrackWindow + '&' + EnableCloudwatchLogsExports.map(z => `EnableCloudwatchLogsExports=${z}`).join('&') + '&DeletionProtection=' + DeletionProtection + '&CopyTagsToSnapshot=' + CopyTagsToSnapshot + '&Domain=' + (Domain == null ? '' : encodeURIComponent(Domain)) + '&DomainIAMRoleName=' + (DomainIAMRoleName == null ? '' : encodeURIComponent(DomainIAMRoleName)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a new DB cluster from a DB snapshot or DB cluster snapshot. This action only applies to Aurora DB clusters.</p> <p>The target DB cluster is created from the source snapshot with a default configuration. If you don't specify a security group, the new DB cluster is associated with the default security group.</p> <note> <p>This action only restores the DB cluster, not the DB instances for that DB cluster. You must invoke the <code>CreateDBInstance</code> action to create DB instances for the restored DB cluster, specifying the identifier of the restored DB cluster in <code>DBClusterIdentifier</code>. You can create DB instances only after the <code>RestoreDBClusterFromSnapshot</code> action has completed and the DB cluster is available.</p> </note> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
		 * Get /#Action=RestoreDBClusterFromSnapshot
		 * @param {Array<String>} AvailabilityZones Provides the list of Availability Zones (AZs) where instances in the restored DB cluster can be created.
		 * @param {string} DBClusterIdentifier <p>The name of the DB cluster to create from the DB snapshot or DB cluster snapshot. This parameter isn't case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Can't end with a hyphen or contain two consecutive hyphens</p> </li> </ul> <p>Example: <code>my-snapshot-id</code> </p>
		 * @param {string} SnapshotIdentifier <p>The identifier for the DB snapshot or DB cluster snapshot to restore from.</p> <p>You can use either the name or the Amazon Resource Name (ARN) to specify a DB cluster snapshot. However, you can use only the ARN to specify a DB snapshot.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing Snapshot.</p> </li> </ul>
		 * @param {string} Engine <p>The database engine to use for the new DB cluster.</p> <p>Default: The same as source</p> <p>Constraint: Must be compatible with the engine of the source</p>
		 * @param {string} EngineVersion <p>The version of the database engine to use for the new DB cluster.</p> <p>To list all of the available engine versions for <code>aurora</code> (for MySQL 5.6-compatible Aurora), use the following command:</p> <p> <code>aws rds describe-db-engine-versions --engine aurora --query "DBEngineVersions[].EngineVersion"</code> </p> <p>To list all of the available engine versions for <code>aurora-mysql</code> (for MySQL 5.7-compatible Aurora), use the following command:</p> <p> <code>aws rds describe-db-engine-versions --engine aurora-mysql --query "DBEngineVersions[].EngineVersion"</code> </p> <p>To list all of the available engine versions for <code>aurora-postgresql</code>, use the following command:</p> <p> <code>aws rds describe-db-engine-versions --engine aurora-postgresql --query "DBEngineVersions[].EngineVersion"</code> </p> <note> <p>If you aren't using the default engine version, then you must specify the engine version.</p> </note> <p> <b>Aurora MySQL</b> </p> <p>Example: <code>5.6.10a</code>, <code>5.6.mysql_aurora.1.19.2</code>, <code>5.7.12</code>, <code>5.7.mysql_aurora.2.04.5</code> </p> <p> <b>Aurora PostgreSQL</b> </p> <p>Example: <code>9.6.3</code>, <code>10.7</code> </p>
		 * @param {number} Port <p>The port number on which the new DB cluster accepts connections.</p> <p>Constraints: This value must be <code>1150-65535</code> </p> <p>Default: The same port as the original DB cluster.</p>
		 * @param {string} DBSubnetGroupName <p>The name of the DB subnet group to use for the new DB cluster.</p> <p>Constraints: If supplied, must match the name of an existing DB subnet group.</p> <p>Example: <code>mySubnetgroup</code> </p>
		 * @param {string} DatabaseName The database name for the restored DB cluster.
		 * @param {string} OptionGroupName The name of the option group to use for the restored DB cluster.
		 * @param {Array<String>} VpcSecurityGroupIds A list of VPC security groups that the new DB cluster will belong to.
		 * @param {Array<Tag>} Tags The tags to be assigned to the restored DB cluster.
		 * @param {string} KmsKeyId <p>The AWS KMS key identifier to use when restoring an encrypted DB cluster from a DB snapshot or DB cluster snapshot.</p> <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are restoring a DB cluster with the same AWS account that owns the KMS encryption key used to encrypt the new DB cluster, then you can use the KMS key alias instead of the ARN for the KMS encryption key.</p> <p>If you don't specify a value for the <code>KmsKeyId</code> parameter, then the following occurs:</p> <ul> <li> <p>If the DB snapshot or DB cluster snapshot in <code>SnapshotIdentifier</code> is encrypted, then the restored DB cluster is encrypted using the KMS key that was used to encrypt the DB snapshot or DB cluster snapshot.</p> </li> <li> <p>If the DB snapshot or DB cluster snapshot in <code>SnapshotIdentifier</code> isn't encrypted, then the restored DB cluster isn't encrypted.</p> </li> </ul>
		 * @param {boolean} EnableIAMDatabaseAuthentication <p>A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. By default, mapping is disabled.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBAuth.html"> IAM Database Authentication</a> in the <i>Amazon Aurora User Guide.</i> </p>
		 * @param {number} BacktrackWindow <p>The target backtrack window, in seconds. To disable backtracking, set this value to 0.</p> <p>Default: 0</p> <p>Constraints:</p> <ul> <li> <p>If specified, this value must be set to a number from 0 to 259,200 (72 hours).</p> </li> </ul>
		 * @param {Array<String>} EnableCloudwatchLogsExports The list of logs that the restored DB cluster is to export to Amazon CloudWatch Logs. The values in the list depend on the DB engine being used. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs </a> in the <i>Amazon Aurora User Guide</i>.
		 * @param {string} EngineMode The DB engine mode of the DB cluster, either <code>provisioned</code>, <code>serverless</code>, <code>parallelquery</code>, <code>global</code>, or <code>multimaster</code>.
		 * @param {string} ScalingConfiguration For DB clusters in <code>serverless</code> DB engine mode, the scaling properties of the DB cluster.
		 * @param {string} DBClusterParameterGroupName <p>The name of the DB cluster parameter group to associate with this DB cluster. If this argument is omitted, the default DB cluster parameter group for the specified engine is used.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the name of an existing default DB cluster parameter group.</p> </li> <li> <p>Must be 1 to 255 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Can't end with a hyphen or contain two consecutive hyphens.</p> </li> </ul>
		 * @param {boolean} DeletionProtection A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled. 
		 * @param {boolean} CopyTagsToSnapshot A value that indicates whether to copy all tags from the restored DB cluster to snapshots of the restored DB cluster. The default is not to copy them.
		 * @param {string} Domain Specify the Active Directory directory ID to restore the DB cluster in. The domain must be created prior to this operation. 
		 * @param {string} DomainIAMRoleName Specify the name of the IAM role to be used when making API calls to the Directory Service.
		 * @return {void} Success
		 */
		GET_RestoreDBClusterFromSnapshot(AvailabilityZones: Array<String>, DBClusterIdentifier: string, SnapshotIdentifier: string, Engine: string, EngineVersion: string, Port: number, DBSubnetGroupName: string, DatabaseName: string, OptionGroupName: string, VpcSecurityGroupIds: Array<String>, Tags: Array<Tag>, KmsKeyId: string, EnableIAMDatabaseAuthentication: boolean, BacktrackWindow: number, EnableCloudwatchLogsExports: Array<String>, EngineMode: string, ScalingConfiguration: string, DBClusterParameterGroupName: string, DeletionProtection: boolean, CopyTagsToSnapshot: boolean, Domain: string, DomainIAMRoleName: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=RestoreDBClusterFromSnapshot?' + AvailabilityZones.map(z => `AvailabilityZones=${z}`).join('&') + '&DBClusterIdentifier=' + (DBClusterIdentifier == null ? '' : encodeURIComponent(DBClusterIdentifier)) + '&SnapshotIdentifier=' + (SnapshotIdentifier == null ? '' : encodeURIComponent(SnapshotIdentifier)) + '&Engine=' + (Engine == null ? '' : encodeURIComponent(Engine)) + '&EngineVersion=' + (EngineVersion == null ? '' : encodeURIComponent(EngineVersion)) + '&Port=' + Port + '&DBSubnetGroupName=' + (DBSubnetGroupName == null ? '' : encodeURIComponent(DBSubnetGroupName)) + '&DatabaseName=' + (DatabaseName == null ? '' : encodeURIComponent(DatabaseName)) + '&OptionGroupName=' + (OptionGroupName == null ? '' : encodeURIComponent(OptionGroupName)) + '&' + VpcSecurityGroupIds.map(z => `VpcSecurityGroupIds=${z}`).join('&') + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&KmsKeyId=' + (KmsKeyId == null ? '' : encodeURIComponent(KmsKeyId)) + '&EnableIAMDatabaseAuthentication=' + EnableIAMDatabaseAuthentication + '&BacktrackWindow=' + BacktrackWindow + '&' + EnableCloudwatchLogsExports.map(z => `EnableCloudwatchLogsExports=${z}`).join('&') + '&EngineMode=' + (EngineMode == null ? '' : encodeURIComponent(EngineMode)) + '&ScalingConfiguration=' + (ScalingConfiguration == null ? '' : encodeURIComponent(ScalingConfiguration)) + '&DBClusterParameterGroupName=' + (DBClusterParameterGroupName == null ? '' : encodeURIComponent(DBClusterParameterGroupName)) + '&DeletionProtection=' + DeletionProtection + '&CopyTagsToSnapshot=' + CopyTagsToSnapshot + '&Domain=' + (Domain == null ? '' : encodeURIComponent(Domain)) + '&DomainIAMRoleName=' + (DomainIAMRoleName == null ? '' : encodeURIComponent(DomainIAMRoleName)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Restores a DB cluster to an arbitrary point in time. Users can restore to any point in time before <code>LatestRestorableTime</code> for up to <code>BackupRetentionPeriod</code> days. The target DB cluster is created from the source DB cluster with the same configuration as the original DB cluster, except that the new DB cluster is created with the default DB security group. </p> <note> <p>This action only restores the DB cluster, not the DB instances for that DB cluster. You must invoke the <code>CreateDBInstance</code> action to create DB instances for the restored DB cluster, specifying the identifier of the restored DB cluster in <code>DBClusterIdentifier</code>. You can create DB instances only after the <code>RestoreDBClusterToPointInTime</code> action has completed and the DB cluster is available.</p> </note> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
		 * Get /#Action=RestoreDBClusterToPointInTime
		 * @param {string} DBClusterIdentifier <p>The name of the new DB cluster to be created.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Can't end with a hyphen or contain two consecutive hyphens</p> </li> </ul>
		 * @param {string} RestoreType <p>The type of restore to be performed. You can specify one of the following values:</p> <ul> <li> <p> <code>full-copy</code> - The new DB cluster is restored as a full copy of the source DB cluster.</p> </li> <li> <p> <code>copy-on-write</code> - The new DB cluster is restored as a clone of the source DB cluster.</p> </li> </ul> <p>Constraints: You can't specify <code>copy-on-write</code> if the engine version of the source DB cluster is earlier than 1.11.</p> <p>If you don't specify a <code>RestoreType</code> value, then the new DB cluster is restored as a full copy of the source DB cluster.</p>
		 * @param {string} SourceDBClusterIdentifier <p>The identifier of the source DB cluster from which to restore.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing DBCluster.</p> </li> </ul>
		 * @param {Date} RestoreToTime <p>The date and time to restore the DB cluster to.</p> <p>Valid Values: Value must be a time in Universal Coordinated Time (UTC) format</p> <p>Constraints:</p> <ul> <li> <p>Must be before the latest restorable time for the DB instance</p> </li> <li> <p>Must be specified if <code>UseLatestRestorableTime</code> parameter isn't provided</p> </li> <li> <p>Can't be specified if the <code>UseLatestRestorableTime</code> parameter is enabled</p> </li> <li> <p>Can't be specified if the <code>RestoreType</code> parameter is <code>copy-on-write</code> </p> </li> </ul> <p>Example: <code>2015-03-07T23:45:00Z</code> </p>
		 * @param {boolean} UseLatestRestorableTime <p>A value that indicates whether to restore the DB cluster to the latest restorable backup time. By default, the DB cluster isn't restored to the latest restorable backup time. </p> <p>Constraints: Can't be specified if <code>RestoreToTime</code> parameter is provided.</p>
		 * @param {number} Port <p>The port number on which the new DB cluster accepts connections.</p> <p>Constraints: A value from <code>1150-65535</code>. </p> <p>Default: The default port for the engine.</p>
		 * @param {string} DBSubnetGroupName <p>The DB subnet group name to use for the new DB cluster.</p> <p>Constraints: If supplied, must match the name of an existing DBSubnetGroup.</p> <p>Example: <code>mySubnetgroup</code> </p>
		 * @param {string} OptionGroupName The name of the option group for the new DB cluster.
		 * @param {Array<String>} VpcSecurityGroupIds A list of VPC security groups that the new DB cluster belongs to.
		 * @param {string} KmsKeyId <p>The AWS KMS key identifier to use when restoring an encrypted DB cluster from an encrypted DB cluster.</p> <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are restoring a DB cluster with the same AWS account that owns the KMS encryption key used to encrypt the new DB cluster, then you can use the KMS key alias instead of the ARN for the KMS encryption key.</p> <p>You can restore to a new DB cluster and encrypt the new DB cluster with a KMS key that is different than the KMS key used to encrypt the source DB cluster. The new DB cluster is encrypted with the KMS key identified by the <code>KmsKeyId</code> parameter.</p> <p>If you don't specify a value for the <code>KmsKeyId</code> parameter, then the following occurs:</p> <ul> <li> <p>If the DB cluster is encrypted, then the restored DB cluster is encrypted using the KMS key that was used to encrypt the source DB cluster.</p> </li> <li> <p>If the DB cluster isn't encrypted, then the restored DB cluster isn't encrypted.</p> </li> </ul> <p>If <code>DBClusterIdentifier</code> refers to a DB cluster that isn't encrypted, then the restore request is rejected.</p>
		 * @param {boolean} EnableIAMDatabaseAuthentication <p>A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. By default, mapping is disabled.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBAuth.html"> IAM Database Authentication</a> in the <i>Amazon Aurora User Guide.</i> </p>
		 * @param {number} BacktrackWindow <p>The target backtrack window, in seconds. To disable backtracking, set this value to 0.</p> <p>Default: 0</p> <p>Constraints:</p> <ul> <li> <p>If specified, this value must be set to a number from 0 to 259,200 (72 hours).</p> </li> </ul>
		 * @param {Array<String>} EnableCloudwatchLogsExports The list of logs that the restored DB cluster is to export to CloudWatch Logs. The values in the list depend on the DB engine being used. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon Aurora User Guide</i>.
		 * @param {string} DBClusterParameterGroupName <p>The name of the DB cluster parameter group to associate with this DB cluster. If this argument is omitted, the default DB cluster parameter group for the specified engine is used.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the name of an existing DB cluster parameter group.</p> </li> <li> <p>Must be 1 to 255 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Can't end with a hyphen or contain two consecutive hyphens.</p> </li> </ul>
		 * @param {boolean} DeletionProtection A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled. 
		 * @param {boolean} CopyTagsToSnapshot A value that indicates whether to copy all tags from the restored DB cluster to snapshots of the restored DB cluster. The default is not to copy them.
		 * @param {string} Domain <p>Specify the Active Directory directory ID to restore the DB cluster in. The domain must be created prior to this operation. </p> <p> For Amazon Aurora DB clusters, Amazon RDS can use Kerberos Authentication to authenticate users that connect to the DB cluster. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/kerberos-authentication.html">Kerberos Authentication</a> in the <i>Amazon Aurora User Guide</i>. </p>
		 * @param {string} DomainIAMRoleName Specify the name of the IAM role to be used when making API calls to the Directory Service.
		 * @return {void} Success
		 */
		GET_RestoreDBClusterToPointInTime(DBClusterIdentifier: string, RestoreType: string, SourceDBClusterIdentifier: string, RestoreToTime: Date, UseLatestRestorableTime: boolean, Port: number, DBSubnetGroupName: string, OptionGroupName: string, VpcSecurityGroupIds: Array<String>, Tags: Array<Tag>, KmsKeyId: string, EnableIAMDatabaseAuthentication: boolean, BacktrackWindow: number, EnableCloudwatchLogsExports: Array<String>, DBClusterParameterGroupName: string, DeletionProtection: boolean, CopyTagsToSnapshot: boolean, Domain: string, DomainIAMRoleName: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=RestoreDBClusterToPointInTime?DBClusterIdentifier=' + (DBClusterIdentifier == null ? '' : encodeURIComponent(DBClusterIdentifier)) + '&RestoreType=' + (RestoreType == null ? '' : encodeURIComponent(RestoreType)) + '&SourceDBClusterIdentifier=' + (SourceDBClusterIdentifier == null ? '' : encodeURIComponent(SourceDBClusterIdentifier)) + '&RestoreToTime=' + RestoreToTime.toISOString() + '&UseLatestRestorableTime=' + UseLatestRestorableTime + '&Port=' + Port + '&DBSubnetGroupName=' + (DBSubnetGroupName == null ? '' : encodeURIComponent(DBSubnetGroupName)) + '&OptionGroupName=' + (OptionGroupName == null ? '' : encodeURIComponent(OptionGroupName)) + '&' + VpcSecurityGroupIds.map(z => `VpcSecurityGroupIds=${z}`).join('&') + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&KmsKeyId=' + (KmsKeyId == null ? '' : encodeURIComponent(KmsKeyId)) + '&EnableIAMDatabaseAuthentication=' + EnableIAMDatabaseAuthentication + '&BacktrackWindow=' + BacktrackWindow + '&' + EnableCloudwatchLogsExports.map(z => `EnableCloudwatchLogsExports=${z}`).join('&') + '&DBClusterParameterGroupName=' + (DBClusterParameterGroupName == null ? '' : encodeURIComponent(DBClusterParameterGroupName)) + '&DeletionProtection=' + DeletionProtection + '&CopyTagsToSnapshot=' + CopyTagsToSnapshot + '&Domain=' + (Domain == null ? '' : encodeURIComponent(Domain)) + '&DomainIAMRoleName=' + (DomainIAMRoleName == null ? '' : encodeURIComponent(DomainIAMRoleName)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a new DB instance from a DB snapshot. The target database is created from the source database restore point with the most of original configuration with the default security group and the default DB parameter group. By default, the new DB instance is created as a single-AZ deployment except when the instance is a SQL Server instance that has an option group that is associated with mirroring; in this case, the instance becomes a mirrored AZ deployment and not a single-AZ deployment.</p> <p>If your intent is to replace your original DB instance with the new, restored DB instance, then rename your original DB instance before you call the RestoreDBInstanceFromDBSnapshot action. RDS doesn't allow two DB instances with the same name. Once you have renamed your original DB instance with a different identifier, then you can pass the original name of the DB instance as the DBInstanceIdentifier in the call to the RestoreDBInstanceFromDBSnapshot action. The result is that you will replace the original DB instance with the DB instance created from the snapshot.</p> <p>If you are restoring from a shared manual DB snapshot, the <code>DBSnapshotIdentifier</code> must be the ARN of the shared DB snapshot.</p> <note> <p>This command doesn't apply to Aurora MySQL and Aurora PostgreSQL. For Aurora, use <code>RestoreDBClusterFromSnapshot</code>.</p> </note>
		 * Get /#Action=RestoreDBInstanceFromDBSnapshot
		 * @param {string} DBInstanceIdentifier <p>Name of the DB instance to create from the DB snapshot. This parameter isn't case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 numbers, letters, or hyphens</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Can't end with a hyphen or contain two consecutive hyphens</p> </li> </ul> <p>Example: <code>my-snapshot-id</code> </p>
		 * @param {string} DBSnapshotIdentifier <p>The identifier for the DB snapshot to restore from.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing DBSnapshot.</p> </li> <li> <p>If you are restoring from a shared manual DB snapshot, the <code>DBSnapshotIdentifier</code> must be the ARN of the shared DB snapshot.</p> </li> </ul>
		 * @param {string} DBInstanceClass <p>The compute and memory capacity of the Amazon RDS DB instance, for example, <code>db.m4.large</code>. Not all DB instance classes are available in all AWS Regions, or for all database engines. For the full list of DB instance classes, and availability for your engine, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html">DB Instance Class</a> in the <i>Amazon RDS User Guide.</i> </p> <p>Default: The same DBInstanceClass as the original DB instance.</p>
		 * @param {number} Port <p>The port number on which the database accepts connections.</p> <p>Default: The same port as the original DB instance</p> <p>Constraints: Value must be <code>1150-65535</code> </p>
		 * @param {string} AvailabilityZone <p>The Availability Zone (AZ) where the DB instance will be created.</p> <p>Default: A random, system-chosen Availability Zone.</p> <p>Constraint: You can't specify the <code>AvailabilityZone</code> parameter if the DB instance is a Multi-AZ deployment.</p> <p>Example: <code>us-east-1a</code> </p>
		 * @param {string} DBSubnetGroupName <p>The DB subnet group name to use for the new instance.</p> <p>Constraints: If supplied, must match the name of an existing DBSubnetGroup.</p> <p>Example: <code>mySubnetgroup</code> </p>
		 * @param {boolean} MultiAZ <p>A value that indicates whether the DB instance is a Multi-AZ deployment.</p> <p>Constraint: You can't specify the <code>AvailabilityZone</code> parameter if the DB instance is a Multi-AZ deployment.</p>
		 * @param {boolean} PubliclyAccessible A value that indicates whether the DB instance is publicly accessible. When the DB instance is publicly accessible, it is an Internet-facing instance with a publicly resolvable DNS name, which resolves to a public IP address. When the DB instance isn't publicly accessible, it is an internal instance with a DNS name that resolves to a private IP address. For more information, see <a>CreateDBInstance</a>.
		 * @param {boolean} AutoMinorVersionUpgrade A value that indicates whether minor version upgrades are applied automatically to the DB instance during the maintenance window.
		 * @param {string} LicenseModel <p>License model information for the restored DB instance.</p> <p>Default: Same as source.</p> <p> Valid values: <code>license-included</code> | <code>bring-your-own-license</code> | <code>general-public-license</code> </p>
		 * @param {string} DBName <p>The database name for the restored DB instance.</p> <note> <p>This parameter doesn't apply to the MySQL, PostgreSQL, or MariaDB engines.</p> </note>
		 * @param {string} Engine <p>The database engine to use for the new instance.</p> <p>Default: The same as source</p> <p>Constraint: Must be compatible with the engine of the source. For example, you can restore a MariaDB 10.1 DB instance from a MySQL 5.6 snapshot.</p> <p>Valid Values:</p> <ul> <li> <p> <code>mariadb</code> </p> </li> <li> <p> <code>mysql</code> </p> </li> <li> <p> <code>oracle-ee</code> </p> </li> <li> <p> <code>oracle-se2</code> </p> </li> <li> <p> <code>oracle-se1</code> </p> </li> <li> <p> <code>oracle-se</code> </p> </li> <li> <p> <code>postgres</code> </p> </li> <li> <p> <code>sqlserver-ee</code> </p> </li> <li> <p> <code>sqlserver-se</code> </p> </li> <li> <p> <code>sqlserver-ex</code> </p> </li> <li> <p> <code>sqlserver-web</code> </p> </li> </ul>
		 * @param {number} Iops <p>Specifies the amount of provisioned IOPS for the DB instance, expressed in I/O operations per second. If this parameter isn't specified, the IOPS value is taken from the backup. If this parameter is set to 0, the new instance is converted to a non-PIOPS instance. The conversion takes additional time, though your DB instance is available for connections before the conversion starts. </p> <p>The provisioned IOPS value must follow the requirements for your database engine. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html#USER_PIOPS">Amazon RDS Provisioned IOPS Storage to Improve Performance</a> in the <i>Amazon RDS User Guide.</i> </p> <p>Constraints: Must be an integer greater than 1000.</p>
		 * @param {string} OptionGroupName <p>The name of the option group to be used for the restored DB instance.</p> <p>Permanent options, such as the TDE option for Oracle Advanced Security TDE, can't be removed from an option group, and that option group can't be removed from a DB instance once it is associated with a DB instance</p>
		 * @param {string} StorageType <p>Specifies the storage type to be associated with the DB instance.</p> <p> Valid values: <code>standard | gp2 | io1</code> </p> <p> If you specify <code>io1</code>, you must also include a value for the <code>Iops</code> parameter. </p> <p> Default: <code>io1</code> if the <code>Iops</code> parameter is specified, otherwise <code>gp2</code> </p>
		 * @param {string} TdeCredentialArn The ARN from the key store with which to associate the instance for TDE encryption.
		 * @param {string} TdeCredentialPassword The password for the given ARN from the key store in order to access the device.
		 * @param {Array<String>} VpcSecurityGroupIds <p> A list of EC2 VPC security groups to associate with this DB instance. </p> <p> Default: The default EC2 VPC security group for the DB subnet group's VPC. </p>
		 * @param {string} Domain <p>Specify the Active Directory directory ID to restore the DB instance in. The domain must be created prior to this operation. Currently, only Microsoft SQL Server and Oracle DB instances can be created in an Active Directory Domain. </p> <p>For Microsoft SQL Server DB instances, Amazon RDS can use Windows Authentication to authenticate users that connect to the DB instance. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_SQLServerWinAuth.html"> Using Windows Authentication with an Amazon RDS DB Instance Running Microsoft SQL Server</a> in the <i>Amazon RDS User Guide</i>.</p> <p>For Oracle DB instances, Amazon RDS can use Kerberos Authentication to authenticate users that connect to the DB instance. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/oracle-kerberos.html"> Using Kerberos Authentication with Amazon RDS for Oracle</a> in the <i>Amazon RDS User Guide</i>.</p>
		 * @param {boolean} CopyTagsToSnapshot A value that indicates whether to copy all tags from the restored DB instance to snapshots of the DB instance. By default, tags are not copied.
		 * @param {string} DomainIAMRoleName Specify the name of the IAM role to be used when making API calls to the Directory Service.
		 * @param {boolean} EnableIAMDatabaseAuthentication <p>A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. By default, mapping is disabled. For information about the supported DB engines, see <a>CreateDBInstance</a>.</p> <p>For more information about IAM database authentication, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html"> IAM Database Authentication for MySQL and PostgreSQL</a> in the <i>Amazon RDS User Guide.</i> </p>
		 * @param {Array<String>} EnableCloudwatchLogsExports The list of logs that the restored DB instance is to export to CloudWatch Logs. The values in the list depend on the DB engine being used. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon Aurora User Guide</i>.
		 * @param {Array<ProcessorFeature>} ProcessorFeatures The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.
		 * @param {boolean} UseDefaultProcessorFeatures A value that indicates whether the DB instance class of the DB instance uses its default processor features.
		 * @param {string} DBParameterGroupName <p>The name of the DB parameter group to associate with this DB instance.</p> <p>If you do not specify a value for <code>DBParameterGroupName</code>, then the default <code>DBParameterGroup</code> for the specified DB engine is used.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the name of an existing DBParameterGroup.</p> </li> <li> <p>Must be 1 to 255 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Can't end with a hyphen or contain two consecutive hyphens.</p> </li> </ul>
		 * @param {boolean} DeletionProtection A value that indicates whether the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_DeleteInstance.html"> Deleting a DB Instance</a>. 
		 * @return {void} Success
		 */
		GET_RestoreDBInstanceFromDBSnapshot(DBInstanceIdentifier: string, DBSnapshotIdentifier: string, DBInstanceClass: string, Port: number, AvailabilityZone: string, DBSubnetGroupName: string, MultiAZ: boolean, PubliclyAccessible: boolean, AutoMinorVersionUpgrade: boolean, LicenseModel: string, DBName: string, Engine: string, Iops: number, OptionGroupName: string, Tags: Array<Tag>, StorageType: string, TdeCredentialArn: string, TdeCredentialPassword: string, VpcSecurityGroupIds: Array<String>, Domain: string, CopyTagsToSnapshot: boolean, DomainIAMRoleName: string, EnableIAMDatabaseAuthentication: boolean, EnableCloudwatchLogsExports: Array<String>, ProcessorFeatures: Array<ProcessorFeature>, UseDefaultProcessorFeatures: boolean, DBParameterGroupName: string, DeletionProtection: boolean, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=RestoreDBInstanceFromDBSnapshot?DBInstanceIdentifier=' + (DBInstanceIdentifier == null ? '' : encodeURIComponent(DBInstanceIdentifier)) + '&DBSnapshotIdentifier=' + (DBSnapshotIdentifier == null ? '' : encodeURIComponent(DBSnapshotIdentifier)) + '&DBInstanceClass=' + (DBInstanceClass == null ? '' : encodeURIComponent(DBInstanceClass)) + '&Port=' + Port + '&AvailabilityZone=' + (AvailabilityZone == null ? '' : encodeURIComponent(AvailabilityZone)) + '&DBSubnetGroupName=' + (DBSubnetGroupName == null ? '' : encodeURIComponent(DBSubnetGroupName)) + '&MultiAZ=' + MultiAZ + '&PubliclyAccessible=' + PubliclyAccessible + '&AutoMinorVersionUpgrade=' + AutoMinorVersionUpgrade + '&LicenseModel=' + (LicenseModel == null ? '' : encodeURIComponent(LicenseModel)) + '&DBName=' + (DBName == null ? '' : encodeURIComponent(DBName)) + '&Engine=' + (Engine == null ? '' : encodeURIComponent(Engine)) + '&Iops=' + Iops + '&OptionGroupName=' + (OptionGroupName == null ? '' : encodeURIComponent(OptionGroupName)) + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&StorageType=' + (StorageType == null ? '' : encodeURIComponent(StorageType)) + '&TdeCredentialArn=' + (TdeCredentialArn == null ? '' : encodeURIComponent(TdeCredentialArn)) + '&TdeCredentialPassword=' + (TdeCredentialPassword == null ? '' : encodeURIComponent(TdeCredentialPassword)) + '&' + VpcSecurityGroupIds.map(z => `VpcSecurityGroupIds=${z}`).join('&') + '&Domain=' + (Domain == null ? '' : encodeURIComponent(Domain)) + '&CopyTagsToSnapshot=' + CopyTagsToSnapshot + '&DomainIAMRoleName=' + (DomainIAMRoleName == null ? '' : encodeURIComponent(DomainIAMRoleName)) + '&EnableIAMDatabaseAuthentication=' + EnableIAMDatabaseAuthentication + '&' + EnableCloudwatchLogsExports.map(z => `EnableCloudwatchLogsExports=${z}`).join('&') + '&' + ProcessorFeatures.map(z => `ProcessorFeatures=${z}`).join('&') + '&UseDefaultProcessorFeatures=' + UseDefaultProcessorFeatures + '&DBParameterGroupName=' + (DBParameterGroupName == null ? '' : encodeURIComponent(DBParameterGroupName)) + '&DeletionProtection=' + DeletionProtection + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Amazon Relational Database Service (Amazon RDS) supports importing MySQL databases by using backup files. You can create a backup of your on-premises database, store it on Amazon Simple Storage Service (Amazon S3), and then restore the backup file onto a new Amazon RDS DB instance running MySQL. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/MySQL.Procedural.Importing.html">Importing Data into an Amazon RDS MySQL DB Instance</a> in the <i>Amazon RDS User Guide.</i>
		 * Get /#Action=RestoreDBInstanceFromS3
		 * @param {string} DBName The name of the database to create when the DB instance is created. Follow the naming rules specified in <code>CreateDBInstance</code>. 
		 * @param {string} DBInstanceIdentifier <p>The DB instance identifier. This parameter is stored as a lowercase string. </p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Can't end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>mydbinstance</code> </p>
		 * @param {number} AllocatedStorage <p>The amount of storage (in gigabytes) to allocate initially for the DB instance. Follow the allocation rules specified in <code>CreateDBInstance</code>. </p> <note> <p>Be sure to allocate enough memory for your new DB instance so that the restore operation can succeed. You can also allocate additional memory for future growth. </p> </note>
		 * @param {string} DBInstanceClass <p>The compute and memory capacity of the DB instance, for example, <code>db.m4.large</code>. Not all DB instance classes are available in all AWS Regions, or for all database engines. For the full list of DB instance classes, and availability for your engine, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html">DB Instance Class</a> in the <i>Amazon RDS User Guide.</i> </p> <p>Importing from Amazon S3 isn't supported on the db.t2.micro DB instance class. </p>
		 * @param {string} Engine <p>The name of the database engine to be used for this instance. </p> <p>Valid Values: <code>mysql</code> </p>
		 * @param {string} MasterUsername <p>The name for the master user. </p> <p>Constraints: </p> <ul> <li> <p>Must be 1 to 16 letters or numbers.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Can't be a reserved word for the chosen database engine.</p> </li> </ul>
		 * @param {string} MasterUserPassword <p>The password for the master user. The password can include any printable ASCII character except "/", """, or "@". </p> <p>Constraints: Must contain from 8 to 41 characters.</p>
		 * @param {Array<String>} DBSecurityGroups <p>A list of DB security groups to associate with this DB instance.</p> <p>Default: The default DB security group for the database engine.</p>
		 * @param {Array<String>} VpcSecurityGroupIds A list of VPC security groups to associate with this DB instance. 
		 * @param {string} AvailabilityZone <p>The Availability Zone that the DB instance is created in. For information about AWS Regions and Availability Zones, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html">Regions and Availability Zones</a> in the <i>Amazon RDS User Guide.</i> </p> <p>Default: A random, system-chosen Availability Zone in the endpoint's AWS Region. </p> <p> Example: <code>us-east-1d</code> </p> <p>Constraint: The <code>AvailabilityZone</code> parameter can't be specified if the DB instance is a Multi-AZ deployment. The specified Availability Zone must be in the same AWS Region as the current endpoint. </p>
		 * @param {string} DBSubnetGroupName A DB subnet group to associate with this DB instance.
		 * @param {string} PreferredMaintenanceWindow <p>The time range each week during which system maintenance can occur, in Universal Coordinated Time (UTC). For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Maintenance.html#Concepts.DBMaintenance">Amazon RDS Maintenance Window</a> in the <i>Amazon RDS User Guide.</i> </p> <p>Constraints:</p> <ul> <li> <p>Must be in the format <code>ddd:hh24:mi-ddd:hh24:mi</code>.</p> </li> <li> <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p> </li> <li> <p>Must be in Universal Coordinated Time (UTC).</p> </li> <li> <p>Must not conflict with the preferred backup window.</p> </li> <li> <p>Must be at least 30 minutes.</p> </li> </ul>
		 * @param {string} DBParameterGroupName <p>The name of the DB parameter group to associate with this DB instance.</p> <p>If you do not specify a value for <code>DBParameterGroupName</code>, then the default <code>DBParameterGroup</code> for the specified DB engine is used.</p>
		 * @param {number} BackupRetentionPeriod The number of days for which automated backups are retained. Setting this parameter to a positive number enables backups. For more information, see <code>CreateDBInstance</code>. 
		 * @param {string} PreferredBackupWindow <p>The time range each day during which automated backups are created if automated backups are enabled. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html#USER_WorkingWithAutomatedBackups.BackupWindow">The Backup Window</a> in the <i>Amazon RDS User Guide.</i> </p> <p>Constraints:</p> <ul> <li> <p>Must be in the format <code>hh24:mi-hh24:mi</code>.</p> </li> <li> <p>Must be in Universal Coordinated Time (UTC).</p> </li> <li> <p>Must not conflict with the preferred maintenance window.</p> </li> <li> <p>Must be at least 30 minutes.</p> </li> </ul>
		 * @param {number} Port <p>The port number on which the database accepts connections. </p> <p>Type: Integer </p> <p>Valid Values: <code>1150</code>-<code>65535</code> </p> <p>Default: <code>3306</code> </p>
		 * @param {boolean} MultiAZ A value that indicates whether the DB instance is a Multi-AZ deployment. If the DB instance is a Multi-AZ deployment, you can't set the <code>AvailabilityZone</code> parameter. 
		 * @param {string} EngineVersion The version number of the database engine to use. Choose the latest minor version of your database engine. For information about engine versions, see <code>CreateDBInstance</code>, or call <code>DescribeDBEngineVersions</code>. 
		 * @param {boolean} AutoMinorVersionUpgrade A value that indicates whether minor engine upgrades are applied automatically to the DB instance during the maintenance window. By default, minor engine upgrades are not applied automatically. 
		 * @param {string} LicenseModel The license model for this DB instance. Use <code>general-public-license</code>. 
		 * @param {number} Iops The amount of Provisioned IOPS (input/output operations per second) to allocate initially for the DB instance. For information about valid Iops values, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html#USER_PIOPS">Amazon RDS Provisioned IOPS Storage to Improve Performance</a> in the <i>Amazon RDS User Guide.</i> 
		 * @param {string} OptionGroupName The name of the option group to associate with this DB instance. If this argument is omitted, the default option group for the specified engine is used. 
		 * @param {boolean} PubliclyAccessible A value that indicates whether the DB instance is publicly accessible. When the DB instance is publicly accessible, it is an Internet-facing instance with a publicly resolvable DNS name, which resolves to a public IP address. When the DB instance isn't publicly accessible, it is an internal instance with a DNS name that resolves to a private IP address. For more information, see <a>CreateDBInstance</a>.
		 * @param {Array<Tag>} Tags A list of tags to associate with this DB instance. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i> 
		 * @param {string} StorageType <p>Specifies the storage type to be associated with the DB instance. </p> <p>Valid values: <code>standard</code> | <code>gp2</code> | <code>io1</code> </p> <p>If you specify <code>io1</code>, you must also include a value for the <code>Iops</code> parameter. </p> <p>Default: <code>io1</code> if the <code>Iops</code> parameter is specified; otherwise <code>gp2</code> </p>
		 * @param {boolean} StorageEncrypted A value that indicates whether the new DB instance is encrypted or not. 
		 * @param {string} KmsKeyId <p>The AWS KMS key identifier for an encrypted DB instance. </p> <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are creating a DB instance with the same AWS account that owns the KMS encryption key used to encrypt the new DB instance, then you can use the KMS key alias instead of the ARN for the KM encryption key. </p> <p>If the <code>StorageEncrypted</code> parameter is enabled, and you do not specify a value for the <code>KmsKeyId</code> parameter, then Amazon RDS will use your default encryption key. AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS Region. </p>
		 * @param {boolean} CopyTagsToSnapshot A value that indicates whether to copy all tags from the DB instance to snapshots of the DB instance. By default, tags are not copied. 
		 * @param {number} MonitoringInterval <p>The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collecting Enhanced Monitoring metrics, specify 0. </p> <p>If <code>MonitoringRoleArn</code> is specified, then you must also set <code>MonitoringInterval</code> to a value other than 0. </p> <p>Valid Values: 0, 1, 5, 10, 15, 30, 60 </p> <p>Default: <code>0</code> </p>
		 * @param {string} MonitoringRoleArn <p>The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to Amazon CloudWatch Logs. For example, <code>arn:aws:iam:123456789012:role/emaccess</code>. For information on creating a monitoring role, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.OS.html#USER_Monitoring.OS.Enabling">Setting Up and Enabling Enhanced Monitoring</a> in the <i>Amazon RDS User Guide.</i> </p> <p>If <code>MonitoringInterval</code> is set to a value other than 0, then you must supply a <code>MonitoringRoleArn</code> value. </p>
		 * @param {boolean} EnableIAMDatabaseAuthentication <p>A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. By default, mapping is disabled. For information about the supported DB engines, see <a>CreateDBInstance</a>.</p> <p>For more information about IAM database authentication, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html"> IAM Database Authentication for MySQL and PostgreSQL</a> in the <i>Amazon RDS User Guide.</i> </p>
		 * @param {string} SourceEngine <p>The name of the engine of your source database. </p> <p>Valid Values: <code>mysql</code> </p>
		 * @param {string} SourceEngineVersion <p>The engine version of your source database. </p> <p>Valid Values: <code>5.6</code> </p>
		 * @param {string} S3BucketName The name of your Amazon S3 bucket that contains your database backup file. 
		 * @param {string} S3Prefix The prefix of your Amazon S3 bucket. 
		 * @param {string} S3IngestionRoleArn An AWS Identity and Access Management (IAM) role to allow Amazon RDS to access your Amazon S3 bucket. 
		 * @param {boolean} EnablePerformanceInsights <p>A value that indicates whether to enable Performance Insights for the DB instance. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html">Using Amazon Performance Insights</a> in the <i>Amazon Relational Database Service User Guide</i>. </p>
		 * @param {string} PerformanceInsightsKMSKeyId <p>The AWS KMS key identifier for encryption of Performance Insights data. The KMS key ID is the Amazon Resource Name (ARN), the KMS key identifier, or the KMS key alias for the KMS encryption key. </p> <p>If you do not specify a value for <code>PerformanceInsightsKMSKeyId</code>, then Amazon RDS uses your default encryption key. AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS Region.</p>
		 * @param {number} PerformanceInsightsRetentionPeriod The amount of time, in days, to retain Performance Insights data. Valid values are 7 or 731 (2 years). 
		 * @param {Array<String>} EnableCloudwatchLogsExports The list of logs that the restored DB instance is to export to CloudWatch Logs. The values in the list depend on the DB engine being used. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon RDS User Guide</i>.
		 * @param {Array<ProcessorFeature>} ProcessorFeatures The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.
		 * @param {boolean} UseDefaultProcessorFeatures A value that indicates whether the DB instance class of the DB instance uses its default processor features.
		 * @param {boolean} DeletionProtection A value that indicates whether the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_DeleteInstance.html"> Deleting a DB Instance</a>. 
		 * @return {void} Success
		 */
		GET_RestoreDBInstanceFromS3(DBName: string, DBInstanceIdentifier: string, AllocatedStorage: number, DBInstanceClass: string, Engine: string, MasterUsername: string, MasterUserPassword: string, DBSecurityGroups: Array<String>, VpcSecurityGroupIds: Array<String>, AvailabilityZone: string, DBSubnetGroupName: string, PreferredMaintenanceWindow: string, DBParameterGroupName: string, BackupRetentionPeriod: number, PreferredBackupWindow: string, Port: number, MultiAZ: boolean, EngineVersion: string, AutoMinorVersionUpgrade: boolean, LicenseModel: string, Iops: number, OptionGroupName: string, PubliclyAccessible: boolean, Tags: Array<Tag>, StorageType: string, StorageEncrypted: boolean, KmsKeyId: string, CopyTagsToSnapshot: boolean, MonitoringInterval: number, MonitoringRoleArn: string, EnableIAMDatabaseAuthentication: boolean, SourceEngine: string, SourceEngineVersion: string, S3BucketName: string, S3Prefix: string, S3IngestionRoleArn: string, EnablePerformanceInsights: boolean, PerformanceInsightsKMSKeyId: string, PerformanceInsightsRetentionPeriod: number, EnableCloudwatchLogsExports: Array<String>, ProcessorFeatures: Array<ProcessorFeature>, UseDefaultProcessorFeatures: boolean, DeletionProtection: boolean, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=RestoreDBInstanceFromS3?DBName=' + (DBName == null ? '' : encodeURIComponent(DBName)) + '&DBInstanceIdentifier=' + (DBInstanceIdentifier == null ? '' : encodeURIComponent(DBInstanceIdentifier)) + '&AllocatedStorage=' + AllocatedStorage + '&DBInstanceClass=' + (DBInstanceClass == null ? '' : encodeURIComponent(DBInstanceClass)) + '&Engine=' + (Engine == null ? '' : encodeURIComponent(Engine)) + '&MasterUsername=' + (MasterUsername == null ? '' : encodeURIComponent(MasterUsername)) + '&MasterUserPassword=' + (MasterUserPassword == null ? '' : encodeURIComponent(MasterUserPassword)) + '&' + DBSecurityGroups.map(z => `DBSecurityGroups=${z}`).join('&') + '&' + VpcSecurityGroupIds.map(z => `VpcSecurityGroupIds=${z}`).join('&') + '&AvailabilityZone=' + (AvailabilityZone == null ? '' : encodeURIComponent(AvailabilityZone)) + '&DBSubnetGroupName=' + (DBSubnetGroupName == null ? '' : encodeURIComponent(DBSubnetGroupName)) + '&PreferredMaintenanceWindow=' + (PreferredMaintenanceWindow == null ? '' : encodeURIComponent(PreferredMaintenanceWindow)) + '&DBParameterGroupName=' + (DBParameterGroupName == null ? '' : encodeURIComponent(DBParameterGroupName)) + '&BackupRetentionPeriod=' + BackupRetentionPeriod + '&PreferredBackupWindow=' + (PreferredBackupWindow == null ? '' : encodeURIComponent(PreferredBackupWindow)) + '&Port=' + Port + '&MultiAZ=' + MultiAZ + '&EngineVersion=' + (EngineVersion == null ? '' : encodeURIComponent(EngineVersion)) + '&AutoMinorVersionUpgrade=' + AutoMinorVersionUpgrade + '&LicenseModel=' + (LicenseModel == null ? '' : encodeURIComponent(LicenseModel)) + '&Iops=' + Iops + '&OptionGroupName=' + (OptionGroupName == null ? '' : encodeURIComponent(OptionGroupName)) + '&PubliclyAccessible=' + PubliclyAccessible + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&StorageType=' + (StorageType == null ? '' : encodeURIComponent(StorageType)) + '&StorageEncrypted=' + StorageEncrypted + '&KmsKeyId=' + (KmsKeyId == null ? '' : encodeURIComponent(KmsKeyId)) + '&CopyTagsToSnapshot=' + CopyTagsToSnapshot + '&MonitoringInterval=' + MonitoringInterval + '&MonitoringRoleArn=' + (MonitoringRoleArn == null ? '' : encodeURIComponent(MonitoringRoleArn)) + '&EnableIAMDatabaseAuthentication=' + EnableIAMDatabaseAuthentication + '&SourceEngine=' + (SourceEngine == null ? '' : encodeURIComponent(SourceEngine)) + '&SourceEngineVersion=' + (SourceEngineVersion == null ? '' : encodeURIComponent(SourceEngineVersion)) + '&S3BucketName=' + (S3BucketName == null ? '' : encodeURIComponent(S3BucketName)) + '&S3Prefix=' + (S3Prefix == null ? '' : encodeURIComponent(S3Prefix)) + '&S3IngestionRoleArn=' + (S3IngestionRoleArn == null ? '' : encodeURIComponent(S3IngestionRoleArn)) + '&EnablePerformanceInsights=' + EnablePerformanceInsights + '&PerformanceInsightsKMSKeyId=' + (PerformanceInsightsKMSKeyId == null ? '' : encodeURIComponent(PerformanceInsightsKMSKeyId)) + '&PerformanceInsightsRetentionPeriod=' + PerformanceInsightsRetentionPeriod + '&' + EnableCloudwatchLogsExports.map(z => `EnableCloudwatchLogsExports=${z}`).join('&') + '&' + ProcessorFeatures.map(z => `ProcessorFeatures=${z}`).join('&') + '&UseDefaultProcessorFeatures=' + UseDefaultProcessorFeatures + '&DeletionProtection=' + DeletionProtection + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Restores a DB instance to an arbitrary point in time. You can restore to any point in time before the time identified by the LatestRestorableTime property. You can restore to a point up to the number of days specified by the BackupRetentionPeriod property.</p> <p>The target database is created with most of the original configuration, but in a system-selected Availability Zone, with the default security group, the default subnet group, and the default DB parameter group. By default, the new DB instance is created as a single-AZ deployment except when the instance is a SQL Server instance that has an option group that is associated with mirroring; in this case, the instance becomes a mirrored deployment and not a single-AZ deployment.</p> <note> <p>This command doesn't apply to Aurora MySQL and Aurora PostgreSQL. For Aurora, use <code>RestoreDBClusterToPointInTime</code>.</p> </note>
		 * Get /#Action=RestoreDBInstanceToPointInTime
		 * @param {string} SourceDBInstanceIdentifier <p>The identifier of the source DB instance from which to restore.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing DB instance.</p> </li> </ul>
		 * @param {string} TargetDBInstanceIdentifier <p>The name of the new DB instance to be created.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Can't end with a hyphen or contain two consecutive hyphens</p> </li> </ul>
		 * @param {Date} RestoreTime <p>The date and time to restore from.</p> <p>Valid Values: Value must be a time in Universal Coordinated Time (UTC) format</p> <p>Constraints:</p> <ul> <li> <p>Must be before the latest restorable time for the DB instance</p> </li> <li> <p>Can't be specified if the <code>UseLatestRestorableTime</code> parameter is enabled</p> </li> </ul> <p>Example: <code>2009-09-07T23:45:00Z</code> </p>
		 * @param {boolean} UseLatestRestorableTime <p> A value that indicates whether the DB instance is restored from the latest backup time. By default, the DB instance isn't restored from the latest backup time. </p> <p>Constraints: Can't be specified if the <code>RestoreTime</code> parameter is provided.</p>
		 * @param {string} DBInstanceClass <p>The compute and memory capacity of the Amazon RDS DB instance, for example, <code>db.m4.large</code>. Not all DB instance classes are available in all AWS Regions, or for all database engines. For the full list of DB instance classes, and availability for your engine, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html">DB Instance Class</a> in the <i>Amazon RDS User Guide.</i> </p> <p>Default: The same DBInstanceClass as the original DB instance.</p>
		 * @param {number} Port <p>The port number on which the database accepts connections.</p> <p>Constraints: Value must be <code>1150-65535</code> </p> <p>Default: The same port as the original DB instance.</p>
		 * @param {string} AvailabilityZone <p>The Availability Zone (AZ) where the DB instance will be created.</p> <p>Default: A random, system-chosen Availability Zone.</p> <p>Constraint: You can't specify the <code>AvailabilityZone</code> parameter if the DB instance is a Multi-AZ deployment.</p> <p>Example: <code>us-east-1a</code> </p>
		 * @param {string} DBSubnetGroupName <p>The DB subnet group name to use for the new instance.</p> <p>Constraints: If supplied, must match the name of an existing DBSubnetGroup.</p> <p>Example: <code>mySubnetgroup</code> </p>
		 * @param {boolean} MultiAZ <p>A value that indicates whether the DB instance is a Multi-AZ deployment.</p> <p>Constraint: You can't specify the <code>AvailabilityZone</code> parameter if the DB instance is a Multi-AZ deployment.</p>
		 * @param {boolean} PubliclyAccessible A value that indicates whether the DB instance is publicly accessible. When the DB instance is publicly accessible, it is an Internet-facing instance with a publicly resolvable DNS name, which resolves to a public IP address. When the DB instance isn't publicly accessible, it is an internal instance with a DNS name that resolves to a private IP address. For more information, see <a>CreateDBInstance</a>.
		 * @param {boolean} AutoMinorVersionUpgrade A value that indicates whether minor version upgrades are applied automatically to the DB instance during the maintenance window.
		 * @param {string} LicenseModel <p>License model information for the restored DB instance.</p> <p>Default: Same as source.</p> <p> Valid values: <code>license-included</code> | <code>bring-your-own-license</code> | <code>general-public-license</code> </p>
		 * @param {string} DBName <p>The database name for the restored DB instance.</p> <note> <p>This parameter isn't used for the MySQL or MariaDB engines.</p> </note>
		 * @param {string} Engine <p>The database engine to use for the new instance.</p> <p>Default: The same as source</p> <p>Constraint: Must be compatible with the engine of the source</p> <p>Valid Values:</p> <ul> <li> <p> <code>mariadb</code> </p> </li> <li> <p> <code>mysql</code> </p> </li> <li> <p> <code>oracle-ee</code> </p> </li> <li> <p> <code>oracle-se2</code> </p> </li> <li> <p> <code>oracle-se1</code> </p> </li> <li> <p> <code>oracle-se</code> </p> </li> <li> <p> <code>postgres</code> </p> </li> <li> <p> <code>sqlserver-ee</code> </p> </li> <li> <p> <code>sqlserver-se</code> </p> </li> <li> <p> <code>sqlserver-ex</code> </p> </li> <li> <p> <code>sqlserver-web</code> </p> </li> </ul>
		 * @param {number} Iops <p>The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for the DB instance.</p> <p>Constraints: Must be an integer greater than 1000.</p> <p> <b>SQL Server</b> </p> <p>Setting the IOPS value for the SQL Server database engine isn't supported.</p>
		 * @param {string} OptionGroupName <p>The name of the option group to be used for the restored DB instance.</p> <p>Permanent options, such as the TDE option for Oracle Advanced Security TDE, can't be removed from an option group, and that option group can't be removed from a DB instance once it is associated with a DB instance</p>
		 * @param {boolean} CopyTagsToSnapshot A value that indicates whether to copy all tags from the restored DB instance to snapshots of the DB instance. By default, tags are not copied.
		 * @param {string} StorageType <p>Specifies the storage type to be associated with the DB instance.</p> <p> Valid values: <code>standard | gp2 | io1</code> </p> <p> If you specify <code>io1</code>, you must also include a value for the <code>Iops</code> parameter. </p> <p> Default: <code>io1</code> if the <code>Iops</code> parameter is specified, otherwise <code>gp2</code> </p>
		 * @param {string} TdeCredentialArn The ARN from the key store with which to associate the instance for TDE encryption.
		 * @param {string} TdeCredentialPassword The password for the given ARN from the key store in order to access the device.
		 * @param {Array<String>} VpcSecurityGroupIds <p> A list of EC2 VPC security groups to associate with this DB instance. </p> <p> Default: The default EC2 VPC security group for the DB subnet group's VPC. </p>
		 * @param {string} Domain <p>Specify the Active Directory directory ID to restore the DB instance in. The domain must be created prior to this operation. Currently, only Microsoft SQL Server and Oracle DB instances can be created in an Active Directory Domain. </p> <p>For Microsoft SQL Server DB instances, Amazon RDS can use Windows Authentication to authenticate users that connect to the DB instance. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_SQLServerWinAuth.html"> Using Windows Authentication with an Amazon RDS DB Instance Running Microsoft SQL Server</a> in the <i>Amazon RDS User Guide</i>.</p> <p>For Oracle DB instances, Amazon RDS can use Kerberos Authentication to authenticate users that connect to the DB instance. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/oracle-kerberos.html"> Using Kerberos Authentication with Amazon RDS for Oracle</a> in the <i>Amazon RDS User Guide</i>.</p>
		 * @param {string} DomainIAMRoleName Specify the name of the IAM role to be used when making API calls to the Directory Service.
		 * @param {boolean} EnableIAMDatabaseAuthentication <p>A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. By default, mapping is disabled. For information about the supported DB engines, see <a>CreateDBInstance</a>.</p> <p>For more information about IAM database authentication, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html"> IAM Database Authentication for MySQL and PostgreSQL</a> in the <i>Amazon RDS User Guide.</i> </p>
		 * @param {Array<String>} EnableCloudwatchLogsExports The list of logs that the restored DB instance is to export to CloudWatch Logs. The values in the list depend on the DB engine being used. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon RDS User Guide</i>.
		 * @param {Array<ProcessorFeature>} ProcessorFeatures The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.
		 * @param {boolean} UseDefaultProcessorFeatures A value that indicates whether the DB instance class of the DB instance uses its default processor features.
		 * @param {string} DBParameterGroupName <p>The name of the DB parameter group to associate with this DB instance.</p> <p>If you do not specify a value for <code>DBParameterGroupName</code>, then the default <code>DBParameterGroup</code> for the specified DB engine is used.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the name of an existing DBParameterGroup.</p> </li> <li> <p>Must be 1 to 255 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Can't end with a hyphen or contain two consecutive hyphens.</p> </li> </ul>
		 * @param {boolean} DeletionProtection A value that indicates whether the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_DeleteInstance.html"> Deleting a DB Instance</a>. 
		 * @param {string} SourceDbiResourceId The resource ID of the source DB instance from which to restore.
		 * @return {void} Success
		 */
		GET_RestoreDBInstanceToPointInTime(SourceDBInstanceIdentifier: string, TargetDBInstanceIdentifier: string, RestoreTime: Date, UseLatestRestorableTime: boolean, DBInstanceClass: string, Port: number, AvailabilityZone: string, DBSubnetGroupName: string, MultiAZ: boolean, PubliclyAccessible: boolean, AutoMinorVersionUpgrade: boolean, LicenseModel: string, DBName: string, Engine: string, Iops: number, OptionGroupName: string, CopyTagsToSnapshot: boolean, Tags: Array<Tag>, StorageType: string, TdeCredentialArn: string, TdeCredentialPassword: string, VpcSecurityGroupIds: Array<String>, Domain: string, DomainIAMRoleName: string, EnableIAMDatabaseAuthentication: boolean, EnableCloudwatchLogsExports: Array<String>, ProcessorFeatures: Array<ProcessorFeature>, UseDefaultProcessorFeatures: boolean, DBParameterGroupName: string, DeletionProtection: boolean, SourceDbiResourceId: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=RestoreDBInstanceToPointInTime?SourceDBInstanceIdentifier=' + (SourceDBInstanceIdentifier == null ? '' : encodeURIComponent(SourceDBInstanceIdentifier)) + '&TargetDBInstanceIdentifier=' + (TargetDBInstanceIdentifier == null ? '' : encodeURIComponent(TargetDBInstanceIdentifier)) + '&RestoreTime=' + RestoreTime.toISOString() + '&UseLatestRestorableTime=' + UseLatestRestorableTime + '&DBInstanceClass=' + (DBInstanceClass == null ? '' : encodeURIComponent(DBInstanceClass)) + '&Port=' + Port + '&AvailabilityZone=' + (AvailabilityZone == null ? '' : encodeURIComponent(AvailabilityZone)) + '&DBSubnetGroupName=' + (DBSubnetGroupName == null ? '' : encodeURIComponent(DBSubnetGroupName)) + '&MultiAZ=' + MultiAZ + '&PubliclyAccessible=' + PubliclyAccessible + '&AutoMinorVersionUpgrade=' + AutoMinorVersionUpgrade + '&LicenseModel=' + (LicenseModel == null ? '' : encodeURIComponent(LicenseModel)) + '&DBName=' + (DBName == null ? '' : encodeURIComponent(DBName)) + '&Engine=' + (Engine == null ? '' : encodeURIComponent(Engine)) + '&Iops=' + Iops + '&OptionGroupName=' + (OptionGroupName == null ? '' : encodeURIComponent(OptionGroupName)) + '&CopyTagsToSnapshot=' + CopyTagsToSnapshot + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&StorageType=' + (StorageType == null ? '' : encodeURIComponent(StorageType)) + '&TdeCredentialArn=' + (TdeCredentialArn == null ? '' : encodeURIComponent(TdeCredentialArn)) + '&TdeCredentialPassword=' + (TdeCredentialPassword == null ? '' : encodeURIComponent(TdeCredentialPassword)) + '&' + VpcSecurityGroupIds.map(z => `VpcSecurityGroupIds=${z}`).join('&') + '&Domain=' + (Domain == null ? '' : encodeURIComponent(Domain)) + '&DomainIAMRoleName=' + (DomainIAMRoleName == null ? '' : encodeURIComponent(DomainIAMRoleName)) + '&EnableIAMDatabaseAuthentication=' + EnableIAMDatabaseAuthentication + '&' + EnableCloudwatchLogsExports.map(z => `EnableCloudwatchLogsExports=${z}`).join('&') + '&' + ProcessorFeatures.map(z => `ProcessorFeatures=${z}`).join('&') + '&UseDefaultProcessorFeatures=' + UseDefaultProcessorFeatures + '&DBParameterGroupName=' + (DBParameterGroupName == null ? '' : encodeURIComponent(DBParameterGroupName)) + '&DeletionProtection=' + DeletionProtection + '&SourceDbiResourceId=' + (SourceDbiResourceId == null ? '' : encodeURIComponent(SourceDbiResourceId)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Revokes ingress from a DBSecurityGroup for previously authorized IP ranges or EC2 or VPC Security Groups. Required parameters for this API are one of CIDRIP, EC2SecurityGroupId for VPC, or (EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId).
		 * Get /#Action=RevokeDBSecurityGroupIngress
		 * @param {string} DBSecurityGroupName The name of the DB security group to revoke ingress from.
		 * @param {string} CIDRIP  The IP range to revoke access from. Must be a valid CIDR range. If <code>CIDRIP</code> is specified, <code>EC2SecurityGroupName</code>, <code>EC2SecurityGroupId</code> and <code>EC2SecurityGroupOwnerId</code> can't be provided. 
		 * @param {string} EC2SecurityGroupName  The name of the EC2 security group to revoke access from. For VPC DB security groups, <code>EC2SecurityGroupId</code> must be provided. Otherwise, EC2SecurityGroupOwnerId and either <code>EC2SecurityGroupName</code> or <code>EC2SecurityGroupId</code> must be provided. 
		 * @param {string} EC2SecurityGroupId  The id of the EC2 security group to revoke access from. For VPC DB security groups, <code>EC2SecurityGroupId</code> must be provided. Otherwise, EC2SecurityGroupOwnerId and either <code>EC2SecurityGroupName</code> or <code>EC2SecurityGroupId</code> must be provided. 
		 * @param {string} EC2SecurityGroupOwnerId  The AWS account number of the owner of the EC2 security group specified in the <code>EC2SecurityGroupName</code> parameter. The AWS access key ID isn't an acceptable value. For VPC DB security groups, <code>EC2SecurityGroupId</code> must be provided. Otherwise, EC2SecurityGroupOwnerId and either <code>EC2SecurityGroupName</code> or <code>EC2SecurityGroupId</code> must be provided. 
		 * @return {void} Success
		 */
		GET_RevokeDBSecurityGroupIngress(DBSecurityGroupName: string, CIDRIP: string, EC2SecurityGroupName: string, EC2SecurityGroupId: string, EC2SecurityGroupOwnerId: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=RevokeDBSecurityGroupIngress?DBSecurityGroupName=' + (DBSecurityGroupName == null ? '' : encodeURIComponent(DBSecurityGroupName)) + '&CIDRIP=' + (CIDRIP == null ? '' : encodeURIComponent(CIDRIP)) + '&EC2SecurityGroupName=' + (EC2SecurityGroupName == null ? '' : encodeURIComponent(EC2SecurityGroupName)) + '&EC2SecurityGroupId=' + (EC2SecurityGroupId == null ? '' : encodeURIComponent(EC2SecurityGroupId)) + '&EC2SecurityGroupOwnerId=' + (EC2SecurityGroupOwnerId == null ? '' : encodeURIComponent(EC2SecurityGroupOwnerId)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Starts a database activity stream to monitor activity on the database. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/DBActivityStreams.html">Database Activity Streams</a> in the <i>Amazon Aurora User Guide</i>.
		 * Get /#Action=StartActivityStream
		 * @param {string} ResourceArn The Amazon Resource Name (ARN) of the DB cluster, for example <code>arn:aws:rds:us-east-1:12345667890:cluster:das-cluster</code>.
		 * @param {StartActivityStreamResponseMode} Mode Specifies the mode of the database activity stream. Database events such as a change or access generate an activity stream event. The database session can handle these events either synchronously or asynchronously. 
		 * @param {string} KmsKeyId The AWS KMS key identifier for encrypting messages in the database activity stream. The key identifier can be either a key ID, a key ARN, or a key alias.
		 * @param {boolean} ApplyImmediately Specifies whether or not the database activity stream is to start as soon as possible, regardless of the maintenance window for the database.
		 * @return {void} Success
		 */
		GET_StartActivityStream(ResourceArn: string, Mode: StartActivityStreamResponseMode, KmsKeyId: string, ApplyImmediately: boolean, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=StartActivityStream?ResourceArn=' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)) + '&Mode=' + Mode + '&KmsKeyId=' + (KmsKeyId == null ? '' : encodeURIComponent(KmsKeyId)) + '&ApplyImmediately=' + ApplyImmediately + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Starts an Amazon Aurora DB cluster that was stopped using the AWS console, the stop-db-cluster AWS CLI command, or the StopDBCluster action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-cluster-stop-start.html"> Stopping and Starting an Aurora Cluster</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
		 * Get /#Action=StartDBCluster
		 * @param {string} DBClusterIdentifier The DB cluster identifier of the Amazon Aurora DB cluster to be started. This parameter is stored as a lowercase string.
		 * @return {void} Success
		 */
		GET_StartDBCluster(DBClusterIdentifier: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=StartDBCluster?DBClusterIdentifier=' + (DBClusterIdentifier == null ? '' : encodeURIComponent(DBClusterIdentifier)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p> Starts an Amazon RDS DB instance that was stopped using the AWS console, the stop-db-instance AWS CLI command, or the StopDBInstance action. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_StartInstance.html"> Starting an Amazon RDS DB instance That Was Previously Stopped</a> in the <i>Amazon RDS User Guide.</i> </p> <note> <p> This command doesn't apply to Aurora MySQL and Aurora PostgreSQL. For Aurora DB clusters, use <code>StartDBCluster</code> instead. </p> </note>
		 * Get /#Action=StartDBInstance
		 * @param {string} DBInstanceIdentifier  The user-supplied instance identifier. 
		 * @return {void} Success
		 */
		GET_StartDBInstance(DBInstanceIdentifier: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=StartDBInstance?DBInstanceIdentifier=' + (DBInstanceIdentifier == null ? '' : encodeURIComponent(DBInstanceIdentifier)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Starts an export of a snapshot to Amazon S3. The provided IAM role must have access to the S3 bucket.
		 * Get /#Action=StartExportTask
		 * @param {string} ExportTaskIdentifier A unique identifier for the snapshot export task. This ID isn't an identifier for the Amazon S3 bucket where the snapshot is to be exported to. 
		 * @param {string} SourceArn The Amazon Resource Name (ARN) of the snapshot to export to Amazon S3.
		 * @param {string} S3BucketName The name of the Amazon S3 bucket to export the snapshot to.
		 * @param {string} IamRoleArn The name of the IAM role to use for writing to the Amazon S3 bucket when exporting a snapshot. 
		 * @param {string} KmsKeyId The ID of the AWS KMS key to use to encrypt the snapshot exported to Amazon S3. The KMS key ID is the Amazon Resource Name (ARN), the KMS key identifier, or the KMS key alias for the KMS encryption key. The IAM role used for the snapshot export must have encryption and decryption permissions to use this KMS key. 
		 * @param {string} S3Prefix The Amazon S3 bucket prefix to use as the file name and path of the exported snapshot.
		 * @param {Array<String>} ExportOnly <p>The data to be exported from the snapshot. If this parameter is not provided, all the snapshot data is exported. Valid values are the following:</p> <ul> <li> <p> <code>database</code> - Export all the data from a specified database.</p> </li> <li> <p> <code>database.table</code> <i>table-name</i> - Export a table of the snapshot. This format is valid only for RDS for MySQL, RDS for MariaDB, and Aurora MySQL.</p> </li> <li> <p> <code>database.schema</code> <i>schema-name</i> - Export a database schema of the snapshot. This format is valid only for RDS for PostgreSQL and Aurora PostgreSQL.</p> </li> <li> <p> <code>database.schema.table</code> <i>table-name</i> - Export a table of the database schema. This format is valid only for RDS for PostgreSQL and Aurora PostgreSQL.</p> </li> </ul>
		 * @return {void} Success
		 */
		GET_StartExportTask(ExportTaskIdentifier: string, SourceArn: string, S3BucketName: string, IamRoleArn: string, KmsKeyId: string, S3Prefix: string, ExportOnly: Array<String>, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=StartExportTask?ExportTaskIdentifier=' + (ExportTaskIdentifier == null ? '' : encodeURIComponent(ExportTaskIdentifier)) + '&SourceArn=' + (SourceArn == null ? '' : encodeURIComponent(SourceArn)) + '&S3BucketName=' + (S3BucketName == null ? '' : encodeURIComponent(S3BucketName)) + '&IamRoleArn=' + (IamRoleArn == null ? '' : encodeURIComponent(IamRoleArn)) + '&KmsKeyId=' + (KmsKeyId == null ? '' : encodeURIComponent(KmsKeyId)) + '&S3Prefix=' + (S3Prefix == null ? '' : encodeURIComponent(S3Prefix)) + '&' + ExportOnly.map(z => `ExportOnly=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Stops a database activity stream that was started using the AWS console, the <code>start-activity-stream</code> AWS CLI command, or the <code>StartActivityStream</code> action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/DBActivityStreams.html">Database Activity Streams</a> in the <i>Amazon Aurora User Guide</i>.</p>
		 * Get /#Action=StopActivityStream
		 * @param {string} ResourceArn The Amazon Resource Name (ARN) of the DB cluster for the database activity stream. For example, <code>arn:aws:rds:us-east-1:12345667890:cluster:das-cluster</code>. 
		 * @param {boolean} ApplyImmediately Specifies whether or not the database activity stream is to stop as soon as possible, regardless of the maintenance window for the database.
		 * @return {void} Success
		 */
		GET_StopActivityStream(ResourceArn: string, ApplyImmediately: boolean, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=StopActivityStream?ResourceArn=' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)) + '&ApplyImmediately=' + ApplyImmediately + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p> Stops an Amazon Aurora DB cluster. When you stop a DB cluster, Aurora retains the DB cluster's metadata, including its endpoints and DB parameter groups. Aurora also retains the transaction logs so you can do a point-in-time restore if necessary. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-cluster-stop-start.html"> Stopping and Starting an Aurora Cluster</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
		 * Get /#Action=StopDBCluster
		 * @param {string} DBClusterIdentifier The DB cluster identifier of the Amazon Aurora DB cluster to be stopped. This parameter is stored as a lowercase string.
		 * @return {void} Success
		 */
		GET_StopDBCluster(DBClusterIdentifier: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=StopDBCluster?DBClusterIdentifier=' + (DBClusterIdentifier == null ? '' : encodeURIComponent(DBClusterIdentifier)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p> Stops an Amazon RDS DB instance. When you stop a DB instance, Amazon RDS retains the DB instance's metadata, including its endpoint, DB parameter group, and option group membership. Amazon RDS also retains the transaction logs so you can do a point-in-time restore if necessary. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_StopInstance.html"> Stopping an Amazon RDS DB Instance Temporarily</a> in the <i>Amazon RDS User Guide.</i> </p> <note> <p> This command doesn't apply to Aurora MySQL and Aurora PostgreSQL. For Aurora clusters, use <code>StopDBCluster</code> instead. </p> </note>
		 * Get /#Action=StopDBInstance
		 * @param {string} DBInstanceIdentifier  The user-supplied instance identifier. 
		 * @param {string} DBSnapshotIdentifier  The user-supplied instance identifier of the DB Snapshot created immediately before the DB instance is stopped. 
		 * @return {void} Success
		 */
		GET_StopDBInstance(DBInstanceIdentifier: string, DBSnapshotIdentifier: string, Action: string, Version: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/#Action=StopDBInstance?DBInstanceIdentifier=' + (DBInstanceIdentifier == null ? '' : encodeURIComponent(DBInstanceIdentifier)) + '&DBSnapshotIdentifier=' + (DBSnapshotIdentifier == null ? '' : encodeURIComponent(DBSnapshotIdentifier)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}
	}

}

