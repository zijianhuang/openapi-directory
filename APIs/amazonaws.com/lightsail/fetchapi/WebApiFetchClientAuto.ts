export namespace My_Demo_Client {
	export interface AllocateStaticIpResult {
		operations?: Array<Operation>;
	}

	export interface AllocateStaticIpRequest {
		staticIpName: string;
	}

	export interface AttachDiskResult {
		operations?: Array<Operation>;
	}

	export interface AttachDiskRequest {
		diskName: string;
		instanceName: string;
		diskPath: string;
	}

	export interface AttachInstancesToLoadBalancerResult {
		operations?: Array<Operation>;
	}

	export interface AttachInstancesToLoadBalancerRequest {
		loadBalancerName: string;
		instanceNames: Array<ResourceName>;
	}

	export interface AttachLoadBalancerTlsCertificateResult {
		operations?: Array<Operation>;
	}

	export interface AttachLoadBalancerTlsCertificateRequest {
		loadBalancerName: string;
		certificateName: string;
	}

	export interface AttachStaticIpResult {
		operations?: Array<Operation>;
	}

	export interface AttachStaticIpRequest {
		staticIpName: string;
		instanceName: string;
	}

	export interface CloseInstancePublicPortsResult {

		/**Describes the API operation. */
		operation?: Operation;
	}

	export interface CloseInstancePublicPortsRequest {

		/**Describes ports to open on an instance, the IP addresses allowed to connect to the instance through the ports, and the protocol. */
		portInfo: PortInfo;
		instanceName: string;
	}

	export interface CopySnapshotResult {
		operations?: Array<Operation>;
	}

	export interface CopySnapshotRequest {
		sourceSnapshotName?: string;
		sourceResourceName?: string;
		restoreDate?: string;
		useLatestRestorableAutoSnapshot?: boolean;
		targetSnapshotName: string;
		sourceRegion: CopySnapshotRequestSourceRegion;
	}

	export enum CopySnapshotRequestSourceRegion { us-east-1 = 0, us-east-2 = 1, us-west-1 = 2, us-west-2 = 3, eu-west-1 = 4, eu-west-2 = 5, eu-west-3 = 6, eu-central-1 = 7, ca-central-1 = 8, ap-south-1 = 9, ap-southeast-1 = 10, ap-southeast-2 = 11, ap-northeast-1 = 12, ap-northeast-2 = 13 }

	export interface CreateCloudFormationStackResult {
		operations?: Array<Operation>;
	}

	export interface CreateCloudFormationStackRequest {
		instances: Array<InstanceEntry>;
	}

	export interface CreateContactMethodResult {
		operations?: Array<Operation>;
	}

	export interface CreateContactMethodRequest {
		protocol: CreateContactMethodRequestProtocol;
		contactEndpoint: string;
	}

	export enum CreateContactMethodRequestProtocol { Email = 0, SMS = 1 }

	export interface CreateDiskResult {
		operations?: Array<Operation>;
	}

	export interface CreateDiskRequest {
		diskName: string;
		availabilityZone: string;
		sizeInGb: number;
		tags?: Array<Tag>;
		addOns?: Array<AddOnRequest>;
	}

	export interface CreateDiskFromSnapshotResult {
		operations?: Array<Operation>;
	}

	export interface CreateDiskFromSnapshotRequest {
		diskName: string;
		diskSnapshotName?: string;
		availabilityZone: string;
		sizeInGb: number;
		tags?: Array<Tag>;
		addOns?: Array<AddOnRequest>;
		sourceDiskName?: string;
		restoreDate?: string;
		useLatestRestorableAutoSnapshot?: boolean;
	}

	export interface CreateDiskSnapshotResult {
		operations?: Array<Operation>;
	}

	export interface CreateDiskSnapshotRequest {
		diskName?: string;
		diskSnapshotName: string;
		instanceName?: string;
		tags?: Array<Tag>;
	}

	export interface CreateDomainResult {

		/**Describes the API operation. */
		operation?: Operation;
	}

	export interface CreateDomainRequest {
		domainName: string;
		tags?: Array<Tag>;
	}

	export interface CreateDomainEntryResult {

		/**Describes the API operation. */
		operation?: Operation;
	}

	export interface CreateDomainEntryRequest {
		domainName: string;

		/**Describes a domain recordset entry. */
		domainEntry: DomainEntry;
	}

	export interface CreateInstanceSnapshotResult {
		operations?: Array<Operation>;
	}

	export interface CreateInstanceSnapshotRequest {
		instanceSnapshotName: string;
		instanceName: string;
		tags?: Array<Tag>;
	}

	export interface CreateInstancesResult {
		operations?: Array<Operation>;
	}

	export interface CreateInstancesRequest {
		instanceNames: Array<string>;
		availabilityZone: string;
		customImageName?: string;
		blueprintId: string;
		bundleId: string;
		userData?: string;
		keyPairName?: string;
		tags?: Array<Tag>;
		addOns?: Array<AddOnRequest>;
	}

	export interface CreateInstancesFromSnapshotResult {
		operations?: Array<Operation>;
	}

	export interface CreateInstancesFromSnapshotRequest {
		instanceNames: Array<string>;
		attachedDiskMapping?: AttachedDiskMap;
		availabilityZone: string;
		instanceSnapshotName?: string;
		bundleId: string;
		userData?: string;
		keyPairName?: string;
		tags?: Array<Tag>;
		addOns?: Array<AddOnRequest>;
		sourceInstanceName?: string;
		restoreDate?: string;
		useLatestRestorableAutoSnapshot?: boolean;
	}

	export interface CreateKeyPairResult {

		/**Describes the SSH key pair. */
		keyPair?: KeyPair;
		publicKeyBase64?: string;
		privateKeyBase64?: string;

		/**Describes the API operation. */
		operation?: Operation;
	}

	export interface CreateKeyPairRequest {
		keyPairName: string;
		tags?: Array<Tag>;
	}

	export interface CreateLoadBalancerResult {
		operations?: Array<Operation>;
	}

	export interface CreateLoadBalancerRequest {
		loadBalancerName: string;
		instancePort: number;
		healthCheckPath?: string;
		certificateName?: string;
		certificateDomainName?: string;
		certificateAlternativeNames?: Array<DomainName>;
		tags?: Array<Tag>;
	}

	export interface CreateLoadBalancerTlsCertificateResult {
		operations?: Array<Operation>;
	}

	export interface CreateLoadBalancerTlsCertificateRequest {
		loadBalancerName: string;
		certificateName: string;
		certificateDomainName: string;
		certificateAlternativeNames?: Array<DomainName>;
		tags?: Array<Tag>;
	}

	export interface CreateRelationalDatabaseResult {
		operations?: Array<Operation>;
	}

	export interface CreateRelationalDatabaseRequest {
		relationalDatabaseName: string;
		availabilityZone?: string;
		relationalDatabaseBlueprintId: string;
		relationalDatabaseBundleId: string;
		masterDatabaseName: string;
		masterUsername: string;
		masterUserPassword?: string;
		preferredBackupWindow?: string;
		preferredMaintenanceWindow?: string;
		publiclyAccessible?: boolean;
		tags?: Array<Tag>;
	}

	export interface CreateRelationalDatabaseFromSnapshotResult {
		operations?: Array<Operation>;
	}

	export interface CreateRelationalDatabaseFromSnapshotRequest {
		relationalDatabaseName: string;
		availabilityZone?: string;
		publiclyAccessible?: boolean;
		relationalDatabaseSnapshotName?: string;
		relationalDatabaseBundleId?: string;
		sourceRelationalDatabaseName?: string;
		restoreTime?: Date;
		useLatestRestorableTime?: boolean;
		tags?: Array<Tag>;
	}

	export interface CreateRelationalDatabaseSnapshotResult {
		operations?: Array<Operation>;
	}

	export interface CreateRelationalDatabaseSnapshotRequest {
		relationalDatabaseName: string;
		relationalDatabaseSnapshotName: string;
		tags?: Array<Tag>;
	}

	export interface DeleteAlarmResult {
		operations?: Array<Operation>;
	}

	export interface DeleteAlarmRequest {
		alarmName: string;
	}

	export interface DeleteAutoSnapshotResult {
		operations?: Array<Operation>;
	}

	export interface DeleteAutoSnapshotRequest {
		resourceName: string;
		date: string;
	}

	export interface DeleteContactMethodResult {
		operations?: Array<Operation>;
	}

	export interface DeleteContactMethodRequest {
		protocol: DeleteContactMethodRequestProtocol;
	}

	export enum DeleteContactMethodRequestProtocol { Email = 0, SMS = 1 }

	export interface DeleteDiskResult {
		operations?: Array<Operation>;
	}

	export interface DeleteDiskRequest {
		diskName: string;
		forceDeleteAddOns?: boolean;
	}

	export interface DeleteDiskSnapshotResult {
		operations?: Array<Operation>;
	}

	export interface DeleteDiskSnapshotRequest {
		diskSnapshotName: string;
	}

	export interface DeleteDomainResult {

		/**Describes the API operation. */
		operation?: Operation;
	}

	export interface DeleteDomainRequest {
		domainName: string;
	}

	export interface DeleteDomainEntryResult {

		/**Describes the API operation. */
		operation?: Operation;
	}

	export interface DeleteDomainEntryRequest {
		domainName: string;

		/**Describes a domain recordset entry. */
		domainEntry: DomainEntry;
	}

	export interface DeleteInstanceResult {
		operations?: Array<Operation>;
	}

	export interface DeleteInstanceRequest {
		instanceName: string;
		forceDeleteAddOns?: boolean;
	}

	export interface DeleteInstanceSnapshotResult {
		operations?: Array<Operation>;
	}

	export interface DeleteInstanceSnapshotRequest {
		instanceSnapshotName: string;
	}

	export interface DeleteKeyPairResult {

		/**Describes the API operation. */
		operation?: Operation;
	}

	export interface DeleteKeyPairRequest {
		keyPairName: string;
	}

	export interface DeleteKnownHostKeysResult {
		operations?: Array<Operation>;
	}

	export interface DeleteKnownHostKeysRequest {
		instanceName: string;
	}

	export interface DeleteLoadBalancerResult {
		operations?: Array<Operation>;
	}

	export interface DeleteLoadBalancerRequest {
		loadBalancerName: string;
	}

	export interface DeleteLoadBalancerTlsCertificateResult {
		operations?: Array<Operation>;
	}

	export interface DeleteLoadBalancerTlsCertificateRequest {
		loadBalancerName: string;
		certificateName: string;
		force?: boolean;
	}

	export interface DeleteRelationalDatabaseResult {
		operations?: Array<Operation>;
	}

	export interface DeleteRelationalDatabaseRequest {
		relationalDatabaseName: string;
		skipFinalSnapshot?: boolean;
		finalRelationalDatabaseSnapshotName?: string;
	}

	export interface DeleteRelationalDatabaseSnapshotResult {
		operations?: Array<Operation>;
	}

	export interface DeleteRelationalDatabaseSnapshotRequest {
		relationalDatabaseSnapshotName: string;
	}

	export interface DetachDiskResult {
		operations?: Array<Operation>;
	}

	export interface DetachDiskRequest {
		diskName: string;
	}

	export interface DetachInstancesFromLoadBalancerResult {
		operations?: Array<Operation>;
	}

	export interface DetachInstancesFromLoadBalancerRequest {
		loadBalancerName: string;
		instanceNames: Array<ResourceName>;
	}

	export interface DetachStaticIpResult {
		operations?: Array<Operation>;
	}

	export interface DetachStaticIpRequest {
		staticIpName: string;
	}

	export interface DisableAddOnResult {
		operations?: Array<Operation>;
	}

	export interface DisableAddOnRequest {
		addOnType: DisableAddOnRequestAddOnType;
		resourceName: string;
	}

	export enum DisableAddOnRequestAddOnType { AutoSnapshot = 0 }

	export interface DownloadDefaultKeyPairResult {
		publicKeyBase64?: string;
		privateKeyBase64?: string;
	}

	export interface EnableAddOnResult {
		operations?: Array<Operation>;
	}

	export interface EnableAddOnRequest {
		resourceName: string;

		/**<p>Describes a request to enable, modify, or disable an add-on for an Amazon Lightsail resource.</p> <note> <p>An additional cost may be associated with enabling add-ons. For more information, see the <a href="https://aws.amazon.com/lightsail/pricing/">Lightsail pricing page</a>.</p> </note> */
		addOnRequest: AddOnRequest;
	}

	export interface ExportSnapshotResult {
		operations?: Array<Operation>;
	}

	export interface ExportSnapshotRequest {
		sourceSnapshotName: string;
	}

	export interface GetActiveNamesResult {
		activeNames?: Array<string>;
		nextPageToken?: string;
	}

	export interface GetActiveNamesRequest {
		pageToken?: string;
	}

	export interface GetAlarmsResult {
		alarms?: Array<Alarm>;
		nextPageToken?: string;
	}

	export interface GetAlarmsRequest {
		alarmName?: string;
		pageToken?: string;
		monitoredResourceName?: string;
	}

	export interface GetAutoSnapshotsResult {
		resourceName?: string;
		resourceType?: GetAutoSnapshotsResultResourceType;
		autoSnapshots?: Array<AutoSnapshotDetails>;
	}

	export enum GetAutoSnapshotsResultResourceType { Instance = 0, StaticIp = 1, KeyPair = 2, InstanceSnapshot = 3, Domain = 4, PeeredVpc = 5, LoadBalancer = 6, LoadBalancerTlsCertificate = 7, Disk = 8, DiskSnapshot = 9, RelationalDatabase = 10, RelationalDatabaseSnapshot = 11, ExportSnapshotRecord = 12, CloudFormationStackRecord = 13, Alarm = 14, ContactMethod = 15 }

	export interface GetAutoSnapshotsRequest {
		resourceName: string;
	}

	export interface GetBlueprintsResult {
		blueprints?: Array<Blueprint>;
		nextPageToken?: string;
	}

	export interface GetBlueprintsRequest {
		includeInactive?: boolean;
		pageToken?: string;
	}

	export interface GetBundlesResult {
		bundles?: Array<Bundle>;
		nextPageToken?: string;
	}

	export interface GetBundlesRequest {
		includeInactive?: boolean;
		pageToken?: string;
	}

	export interface GetCloudFormationStackRecordsResult {
		cloudFormationStackRecords?: Array<CloudFormationStackRecord>;
		nextPageToken?: string;
	}

	export interface GetCloudFormationStackRecordsRequest {
		pageToken?: string;
	}

	export interface GetContactMethodsResult {
		contactMethods?: Array<ContactMethod>;
	}

	export interface GetContactMethodsRequest {
		protocols?: Array<ContactProtocol>;
	}

	export interface GetDiskResult {

		/**Describes a system disk or a block storage disk. */
		disk?: Disk;
	}

	export interface GetDiskRequest {
		diskName: string;
	}

	export interface GetDiskSnapshotResult {

		/**Describes a block storage disk snapshot. */
		diskSnapshot?: DiskSnapshot;
	}

	export interface GetDiskSnapshotRequest {
		diskSnapshotName: string;
	}

	export interface GetDiskSnapshotsResult {
		diskSnapshots?: Array<DiskSnapshot>;
		nextPageToken?: string;
	}

	export interface GetDiskSnapshotsRequest {
		pageToken?: string;
	}

	export interface GetDisksResult {
		disks?: Array<Disk>;
		nextPageToken?: string;
	}

	export interface GetDisksRequest {
		pageToken?: string;
	}

	export interface GetDomainResult {

		/**Describes a domain where you are storing recordsets in Lightsail. */
		domain?: Domain;
	}

	export interface GetDomainRequest {
		domainName: string;
	}

	export interface GetDomainsResult {
		domains?: Array<Domain>;
		nextPageToken?: string;
	}

	export interface GetDomainsRequest {
		pageToken?: string;
	}

	export interface GetExportSnapshotRecordsResult {
		exportSnapshotRecords?: Array<ExportSnapshotRecord>;
		nextPageToken?: string;
	}

	export interface GetExportSnapshotRecordsRequest {
		pageToken?: string;
	}

	export interface GetInstanceResult {

		/**Describes an instance (a virtual private server). */
		instance?: Instance;
	}

	export interface GetInstanceRequest {
		instanceName: string;
	}

	export interface GetInstanceAccessDetailsResult {

		/**The parameters for gaining temporary access to one of your Amazon Lightsail instances. */
		accessDetails?: InstanceAccessDetails;
	}

	export interface GetInstanceAccessDetailsRequest {
		instanceName: string;
		protocol?: GetInstanceAccessDetailsRequestProtocol;
	}

	export enum GetInstanceAccessDetailsRequestProtocol { ssh = 0, rdp = 1 }

	export interface GetInstanceMetricDataResult {
		metricName?: GetInstanceMetricDataResultMetricName;
		metricData?: Array<MetricDatapoint>;
	}

	export enum GetInstanceMetricDataResultMetricName { CPUUtilization = 0, NetworkIn = 1, NetworkOut = 2, StatusCheckFailed = 3, StatusCheckFailed_Instance = 4, StatusCheckFailed_System = 5, BurstCapacityTime = 6, BurstCapacityPercentage = 7 }

	export interface GetInstanceMetricDataRequest {
		instanceName: string;
		metricName: GetInstanceMetricDataRequestMetricName;
		period: number;
		startTime: Date;
		endTime: Date;
		unit: GetInstanceMetricDataRequestUnit;
		statistics: Array<MetricStatistic>;
	}

	export enum GetInstanceMetricDataRequestMetricName { CPUUtilization = 0, NetworkIn = 1, NetworkOut = 2, StatusCheckFailed = 3, StatusCheckFailed_Instance = 4, StatusCheckFailed_System = 5, BurstCapacityTime = 6, BurstCapacityPercentage = 7 }

	export enum GetInstanceMetricDataRequestUnit { Seconds = 0, Microseconds = 1, Milliseconds = 2, Bytes = 3, Kilobytes = 4, Megabytes = 5, Gigabytes = 6, Terabytes = 7, Bits = 8, Kilobits = 9, Megabits = 10, Gigabits = 11, Terabits = 12, Percent = 13, Count = 14, Bytes/Second = 15, Kilobytes/Second = 16, Megabytes/Second = 17, Gigabytes/Second = 18, Terabytes/Second = 19, Bits/Second = 20, Kilobits/Second = 21, Megabits/Second = 22, Gigabits/Second = 23, Terabits/Second = 24, Count/Second = 25, None = 26 }

	export interface GetInstancePortStatesResult {
		portStates?: Array<InstancePortState>;
	}

	export interface GetInstancePortStatesRequest {
		instanceName: string;
	}

	export interface GetInstanceSnapshotResult {

		/**Describes an instance snapshot. */
		instanceSnapshot?: InstanceSnapshot;
	}

	export interface GetInstanceSnapshotRequest {
		instanceSnapshotName: string;
	}

	export interface GetInstanceSnapshotsResult {
		instanceSnapshots?: Array<InstanceSnapshot>;
		nextPageToken?: string;
	}

	export interface GetInstanceSnapshotsRequest {
		pageToken?: string;
	}

	export interface GetInstanceStateResult {

		/**Describes the virtual private server (or <i>instance</i>) status. */
		state?: InstanceState;
	}

	export interface GetInstanceStateRequest {
		instanceName: string;
	}

	export interface GetInstancesResult {
		instances?: Array<Instance>;
		nextPageToken?: string;
	}

	export interface GetInstancesRequest {
		pageToken?: string;
	}

	export interface GetKeyPairResult {

		/**Describes the SSH key pair. */
		keyPair?: KeyPair;
	}

	export interface GetKeyPairRequest {
		keyPairName: string;
	}

	export interface GetKeyPairsResult {
		keyPairs?: Array<KeyPair>;
		nextPageToken?: string;
	}

	export interface GetKeyPairsRequest {
		pageToken?: string;
	}

	export interface GetLoadBalancerResult {

		/**Describes the Lightsail load balancer. */
		loadBalancer?: LoadBalancer;
	}

	export interface GetLoadBalancerRequest {
		loadBalancerName: string;
	}

	export interface GetLoadBalancerMetricDataResult {
		metricName?: GetLoadBalancerMetricDataResultMetricName;
		metricData?: Array<MetricDatapoint>;
	}

	export enum GetLoadBalancerMetricDataResultMetricName { ClientTLSNegotiationErrorCount = 0, HealthyHostCount = 1, UnhealthyHostCount = 2, HTTPCode_LB_4XX_Count = 3, HTTPCode_LB_5XX_Count = 4, HTTPCode_Instance_2XX_Count = 5, HTTPCode_Instance_3XX_Count = 6, HTTPCode_Instance_4XX_Count = 7, HTTPCode_Instance_5XX_Count = 8, InstanceResponseTime = 9, RejectedConnectionCount = 10, RequestCount = 11 }

	export interface GetLoadBalancerMetricDataRequest {
		loadBalancerName: string;
		metricName: GetLoadBalancerMetricDataRequestMetricName;
		period: number;
		startTime: Date;
		endTime: Date;
		unit: GetLoadBalancerMetricDataRequestUnit;
		statistics: Array<MetricStatistic>;
	}

	export enum GetLoadBalancerMetricDataRequestMetricName { ClientTLSNegotiationErrorCount = 0, HealthyHostCount = 1, UnhealthyHostCount = 2, HTTPCode_LB_4XX_Count = 3, HTTPCode_LB_5XX_Count = 4, HTTPCode_Instance_2XX_Count = 5, HTTPCode_Instance_3XX_Count = 6, HTTPCode_Instance_4XX_Count = 7, HTTPCode_Instance_5XX_Count = 8, InstanceResponseTime = 9, RejectedConnectionCount = 10, RequestCount = 11 }

	export enum GetLoadBalancerMetricDataRequestUnit { Seconds = 0, Microseconds = 1, Milliseconds = 2, Bytes = 3, Kilobytes = 4, Megabytes = 5, Gigabytes = 6, Terabytes = 7, Bits = 8, Kilobits = 9, Megabits = 10, Gigabits = 11, Terabits = 12, Percent = 13, Count = 14, Bytes/Second = 15, Kilobytes/Second = 16, Megabytes/Second = 17, Gigabytes/Second = 18, Terabytes/Second = 19, Bits/Second = 20, Kilobits/Second = 21, Megabits/Second = 22, Gigabits/Second = 23, Terabits/Second = 24, Count/Second = 25, None = 26 }

	export interface GetLoadBalancerTlsCertificatesResult {
		tlsCertificates?: Array<LoadBalancerTlsCertificate>;
	}

	export interface GetLoadBalancerTlsCertificatesRequest {
		loadBalancerName: string;
	}

	export interface GetLoadBalancersResult {
		loadBalancers?: Array<LoadBalancer>;
		nextPageToken?: string;
	}

	export interface GetLoadBalancersRequest {
		pageToken?: string;
	}

	export interface GetOperationResult {

		/**Describes the API operation. */
		operation?: Operation;
	}

	export interface GetOperationRequest {
		operationId: string;
	}

	export interface GetOperationsResult {
		operations?: Array<Operation>;
		nextPageToken?: string;
	}

	export interface GetOperationsRequest {
		pageToken?: string;
	}

	export interface GetOperationsForResourceResult {
		operations?: Array<Operation>;
		nextPageCount?: string;
		nextPageToken?: string;
	}

	export interface GetOperationsForResourceRequest {
		resourceName: string;
		pageToken?: string;
	}

	export interface GetRegionsResult {
		regions?: Array<Region>;
	}

	export interface GetRegionsRequest {
		includeAvailabilityZones?: boolean;
		includeRelationalDatabaseAvailabilityZones?: boolean;
	}

	export interface GetRelationalDatabaseResult {

		/**Describes a database. */
		relationalDatabase?: RelationalDatabase;
	}

	export interface GetRelationalDatabaseRequest {
		relationalDatabaseName: string;
	}

	export interface GetRelationalDatabaseBlueprintsResult {
		blueprints?: Array<RelationalDatabaseBlueprint>;
		nextPageToken?: string;
	}

	export interface GetRelationalDatabaseBlueprintsRequest {
		pageToken?: string;
	}

	export interface GetRelationalDatabaseBundlesResult {
		bundles?: Array<RelationalDatabaseBundle>;
		nextPageToken?: string;
	}

	export interface GetRelationalDatabaseBundlesRequest {
		pageToken?: string;
	}

	export interface GetRelationalDatabaseEventsResult {
		relationalDatabaseEvents?: Array<RelationalDatabaseEvent>;
		nextPageToken?: string;
	}

	export interface GetRelationalDatabaseEventsRequest {
		relationalDatabaseName: string;
		durationInMinutes?: number;
		pageToken?: string;
	}

	export interface GetRelationalDatabaseLogEventsResult {
		resourceLogEvents?: Array<LogEvent>;
		nextBackwardToken?: string;
		nextForwardToken?: string;
	}

	export interface GetRelationalDatabaseLogEventsRequest {
		relationalDatabaseName: string;
		logStreamName: string;
		startTime?: Date;
		endTime?: Date;
		startFromHead?: boolean;
		pageToken?: string;
	}

	export interface GetRelationalDatabaseLogStreamsResult {
		logStreams?: Array<string>;
	}

	export interface GetRelationalDatabaseLogStreamsRequest {
		relationalDatabaseName: string;
	}

	export interface GetRelationalDatabaseMasterUserPasswordResult {
		masterUserPassword?: string;
		createdAt?: Date;
	}

	export interface GetRelationalDatabaseMasterUserPasswordRequest {
		relationalDatabaseName: string;
		passwordVersion?: GetRelationalDatabaseMasterUserPasswordRequestPasswordVersion;
	}

	export enum GetRelationalDatabaseMasterUserPasswordRequestPasswordVersion { CURRENT = 0, PREVIOUS = 1, PENDING = 2 }

	export interface GetRelationalDatabaseMetricDataResult {
		metricName?: GetRelationalDatabaseMetricDataResultMetricName;
		metricData?: Array<MetricDatapoint>;
	}

	export enum GetRelationalDatabaseMetricDataResultMetricName { CPUUtilization = 0, DatabaseConnections = 1, DiskQueueDepth = 2, FreeStorageSpace = 3, NetworkReceiveThroughput = 4, NetworkTransmitThroughput = 5 }

	export interface GetRelationalDatabaseMetricDataRequest {
		relationalDatabaseName: string;
		metricName: GetRelationalDatabaseMetricDataRequestMetricName;
		period: number;
		startTime: Date;
		endTime: Date;
		unit: GetRelationalDatabaseMetricDataRequestUnit;
		statistics: Array<MetricStatistic>;
	}

	export enum GetRelationalDatabaseMetricDataRequestMetricName { CPUUtilization = 0, DatabaseConnections = 1, DiskQueueDepth = 2, FreeStorageSpace = 3, NetworkReceiveThroughput = 4, NetworkTransmitThroughput = 5 }

	export enum GetRelationalDatabaseMetricDataRequestUnit { Seconds = 0, Microseconds = 1, Milliseconds = 2, Bytes = 3, Kilobytes = 4, Megabytes = 5, Gigabytes = 6, Terabytes = 7, Bits = 8, Kilobits = 9, Megabits = 10, Gigabits = 11, Terabits = 12, Percent = 13, Count = 14, Bytes/Second = 15, Kilobytes/Second = 16, Megabytes/Second = 17, Gigabytes/Second = 18, Terabytes/Second = 19, Bits/Second = 20, Kilobits/Second = 21, Megabits/Second = 22, Gigabits/Second = 23, Terabits/Second = 24, Count/Second = 25, None = 26 }

	export interface GetRelationalDatabaseParametersResult {
		parameters?: Array<RelationalDatabaseParameter>;
		nextPageToken?: string;
	}

	export interface GetRelationalDatabaseParametersRequest {
		relationalDatabaseName: string;
		pageToken?: string;
	}

	export interface GetRelationalDatabaseSnapshotResult {

		/**Describes a database snapshot. */
		relationalDatabaseSnapshot?: RelationalDatabaseSnapshot;
	}

	export interface GetRelationalDatabaseSnapshotRequest {
		relationalDatabaseSnapshotName: string;
	}

	export interface GetRelationalDatabaseSnapshotsResult {
		relationalDatabaseSnapshots?: Array<RelationalDatabaseSnapshot>;
		nextPageToken?: string;
	}

	export interface GetRelationalDatabaseSnapshotsRequest {
		pageToken?: string;
	}

	export interface GetRelationalDatabasesResult {
		relationalDatabases?: Array<RelationalDatabase>;
		nextPageToken?: string;
	}

	export interface GetRelationalDatabasesRequest {
		pageToken?: string;
	}

	export interface GetStaticIpResult {

		/**Describes the static IP. */
		staticIp?: StaticIp;
	}

	export interface GetStaticIpRequest {
		staticIpName: string;
	}

	export interface GetStaticIpsResult {
		staticIps?: Array<StaticIp>;
		nextPageToken?: string;
	}

	export interface GetStaticIpsRequest {
		pageToken?: string;
	}

	export interface ImportKeyPairResult {

		/**Describes the API operation. */
		operation?: Operation;
	}

	export interface ImportKeyPairRequest {
		keyPairName: string;
		publicKeyBase64: string;
	}

	export interface IsVpcPeeredResult {
		isPeered?: boolean;
	}

	export interface OpenInstancePublicPortsResult {

		/**Describes the API operation. */
		operation?: Operation;
	}

	export interface OpenInstancePublicPortsRequest {

		/**Describes ports to open on an instance, the IP addresses allowed to connect to the instance through the ports, and the protocol. */
		portInfo: PortInfo;
		instanceName: string;
	}

	export interface PeerVpcResult {

		/**Describes the API operation. */
		operation?: Operation;
	}

	export interface PutAlarmResult {
		operations?: Array<Operation>;
	}

	export interface PutAlarmRequest {
		alarmName: string;
		metricName: PutAlarmRequestMetricName;
		monitoredResourceName: string;
		comparisonOperator: PutAlarmRequestComparisonOperator;
		threshold: number;
		evaluationPeriods: number;
		datapointsToAlarm?: number;
		treatMissingData?: PutAlarmRequestTreatMissingData;
		contactProtocols?: Array<ContactProtocol>;
		notificationTriggers?: Array<AlarmState>;
		notificationEnabled?: boolean;
	}

	export enum PutAlarmRequestMetricName { CPUUtilization = 0, NetworkIn = 1, NetworkOut = 2, StatusCheckFailed = 3, StatusCheckFailed_Instance = 4, StatusCheckFailed_System = 5, ClientTLSNegotiationErrorCount = 6, HealthyHostCount = 7, UnhealthyHostCount = 8, HTTPCode_LB_4XX_Count = 9, HTTPCode_LB_5XX_Count = 10, HTTPCode_Instance_2XX_Count = 11, HTTPCode_Instance_3XX_Count = 12, HTTPCode_Instance_4XX_Count = 13, HTTPCode_Instance_5XX_Count = 14, InstanceResponseTime = 15, RejectedConnectionCount = 16, RequestCount = 17, DatabaseConnections = 18, DiskQueueDepth = 19, FreeStorageSpace = 20, NetworkReceiveThroughput = 21, NetworkTransmitThroughput = 22, BurstCapacityTime = 23, BurstCapacityPercentage = 24 }

	export enum PutAlarmRequestComparisonOperator { GreaterThanOrEqualToThreshold = 0, GreaterThanThreshold = 1, LessThanThreshold = 2, LessThanOrEqualToThreshold = 3 }

	export enum PutAlarmRequestTreatMissingData { breaching = 0, notBreaching = 1, ignore = 2, missing = 3 }

	export interface PutInstancePublicPortsResult {

		/**Describes the API operation. */
		operation?: Operation;
	}

	export interface PutInstancePublicPortsRequest {
		portInfos: Array<PortInfo>;
		instanceName: string;
	}

	export interface RebootInstanceResult {
		operations?: Array<Operation>;
	}

	export interface RebootInstanceRequest {
		instanceName: string;
	}

	export interface RebootRelationalDatabaseResult {
		operations?: Array<Operation>;
	}

	export interface RebootRelationalDatabaseRequest {
		relationalDatabaseName: string;
	}

	export interface ReleaseStaticIpResult {
		operations?: Array<Operation>;
	}

	export interface ReleaseStaticIpRequest {
		staticIpName: string;
	}

	export interface SendContactMethodVerificationResult {
		operations?: Array<Operation>;
	}

	export interface SendContactMethodVerificationRequest {
		protocol: SendContactMethodVerificationRequestProtocol;
	}

	export enum SendContactMethodVerificationRequestProtocol { Email = 0 }

	export interface StartInstanceResult {
		operations?: Array<Operation>;
	}

	export interface StartInstanceRequest {
		instanceName: string;
	}

	export interface StartRelationalDatabaseResult {
		operations?: Array<Operation>;
	}

	export interface StartRelationalDatabaseRequest {
		relationalDatabaseName: string;
	}

	export interface StopInstanceResult {
		operations?: Array<Operation>;
	}

	export interface StopInstanceRequest {
		instanceName: string;
		force?: boolean;
	}

	export interface StopRelationalDatabaseResult {
		operations?: Array<Operation>;
	}

	export interface StopRelationalDatabaseRequest {
		relationalDatabaseName: string;
		relationalDatabaseSnapshotName?: string;
	}

	export interface TagResourceResult {
		operations?: Array<Operation>;
	}

	export interface TagResourceRequest {
		resourceName: string;
		resourceArn?: string;
		tags: Array<Tag>;
	}

	export interface TestAlarmResult {
		operations?: Array<Operation>;
	}

	export interface TestAlarmRequest {
		alarmName: string;
		state: TestAlarmRequestState;
	}

	export enum TestAlarmRequestState { OK = 0, ALARM = 1, INSUFFICIENT_DATA = 2 }

	export interface UnpeerVpcResult {

		/**Describes the API operation. */
		operation?: Operation;
	}

	export interface UntagResourceResult {
		operations?: Array<Operation>;
	}

	export interface UntagResourceRequest {
		resourceName: string;
		resourceArn?: string;
		tagKeys: Array<TagKey>;
	}

	export interface UpdateDomainEntryResult {
		operations?: Array<Operation>;
	}

	export interface UpdateDomainEntryRequest {
		domainName: string;

		/**Describes a domain recordset entry. */
		domainEntry: DomainEntry;
	}

	export interface UpdateLoadBalancerAttributeResult {
		operations?: Array<Operation>;
	}

	export interface UpdateLoadBalancerAttributeRequest {
		loadBalancerName: string;
		attributeName: UpdateLoadBalancerAttributeRequestAttributeName;
		attributeValue: string;
	}

	export enum UpdateLoadBalancerAttributeRequestAttributeName { HealthCheckPath = 0, SessionStickinessEnabled = 1, SessionStickiness_LB_CookieDurationSeconds = 2 }

	export interface UpdateRelationalDatabaseResult {
		operations?: Array<Operation>;
	}

	export interface UpdateRelationalDatabaseRequest {
		relationalDatabaseName: string;
		masterUserPassword?: string;
		rotateMasterUserPassword?: boolean;
		preferredBackupWindow?: string;
		preferredMaintenanceWindow?: string;
		enableBackupRetention?: boolean;
		disableBackupRetention?: boolean;
		publiclyAccessible?: boolean;
		applyImmediately?: boolean;
		caCertificateIdentifier?: string;
	}

	export interface UpdateRelationalDatabaseParametersResult {
		operations?: Array<Operation>;
	}

	export interface UpdateRelationalDatabaseParametersRequest {
		relationalDatabaseName: string;
		parameters: Array<RelationalDatabaseParameter>;
	}

	export enum AccessDirection { inbound = 0, outbound = 1 }


	/**Describes an add-on that is enabled for an Amazon Lightsail resource. */
	export interface AddOn {
		name?: string;
		status?: string;
		snapshotTimeOfDay?: string;
		nextSnapshotTimeOfDay?: string;
	}

	export enum AddOnType { AutoSnapshot = 0 }


	/**<p>Describes a request to enable or modify the automatic snapshot add-on for an Amazon Lightsail instance or disk.</p> <p>When you modify the automatic snapshot time for a resource, it is typically effective immediately except under the following conditions:</p> <ul> <li> <p>If an automatic snapshot has been created for the current day, and you change the snapshot time to a later time of day, then the new snapshot time will be effective the following day. This ensures that two snapshots are not created for the current day.</p> </li> <li> <p>If an automatic snapshot has not yet been created for the current day, and you change the snapshot time to an earlier time of day, then the new snapshot time will be effective the following day and a snapshot is automatically created at the previously set time for the current day. This ensures that a snapshot is created for the current day.</p> </li> <li> <p>If an automatic snapshot has not yet been created for the current day, and you change the snapshot time to a time that is within 30 minutes from your current time, then the new snapshot time will be effective the following day and a snapshot is automatically created at the previously set time for the current day. This ensures that a snapshot is created for the current day, because 30 minutes is required between your current time and the new snapshot time that you specify.</p> </li> <li> <p>If an automatic snapshot is scheduled to be created within 30 minutes from your current time and you change the snapshot time, then the new snapshot time will be effective the following day and a snapshot is automatically created at the previously set time for the current day. This ensures that a snapshot is created for the current day, because 30 minutes is required between your current time and the new snapshot time that you specify.</p> </li> </ul> */
	export interface AutoSnapshotAddOnRequest {
		snapshotTimeOfDay?: string;
	}


	/**<p>Describes a request to enable, modify, or disable an add-on for an Amazon Lightsail resource.</p> <note> <p>An additional cost may be associated with enabling add-ons. For more information, see the <a href="https://aws.amazon.com/lightsail/pricing/">Lightsail pricing page</a>.</p> </note> */
	export interface AddOnRequest {
		addOnType: AddOnRequestAddOnType;

		/**<p>Describes a request to enable or modify the automatic snapshot add-on for an Amazon Lightsail instance or disk.</p> <p>When you modify the automatic snapshot time for a resource, it is typically effective immediately except under the following conditions:</p> <ul> <li> <p>If an automatic snapshot has been created for the current day, and you change the snapshot time to a later time of day, then the new snapshot time will be effective the following day. This ensures that two snapshots are not created for the current day.</p> </li> <li> <p>If an automatic snapshot has not yet been created for the current day, and you change the snapshot time to an earlier time of day, then the new snapshot time will be effective the following day and a snapshot is automatically created at the previously set time for the current day. This ensures that a snapshot is created for the current day.</p> </li> <li> <p>If an automatic snapshot has not yet been created for the current day, and you change the snapshot time to a time that is within 30 minutes from your current time, then the new snapshot time will be effective the following day and a snapshot is automatically created at the previously set time for the current day. This ensures that a snapshot is created for the current day, because 30 minutes is required between your current time and the new snapshot time that you specify.</p> </li> <li> <p>If an automatic snapshot is scheduled to be created within 30 minutes from your current time and you change the snapshot time, then the new snapshot time will be effective the following day and a snapshot is automatically created at the previously set time for the current day. This ensures that a snapshot is created for the current day, because 30 minutes is required between your current time and the new snapshot time that you specify.</p> </li> </ul> */
		autoSnapshotAddOnRequest?: AutoSnapshotAddOnRequest;
	}

	export enum AddOnRequestAddOnType { AutoSnapshot = 0 }


	/**Describes the resource location. */
	export interface ResourceLocation {
		availabilityZone?: string;
		regionName?: ResourceLocationRegionName;
	}

	export enum ResourceLocationRegionName { us-east-1 = 0, us-east-2 = 1, us-west-1 = 2, us-west-2 = 3, eu-west-1 = 4, eu-west-2 = 5, eu-west-3 = 6, eu-central-1 = 7, ca-central-1 = 8, ap-south-1 = 9, ap-southeast-1 = 10, ap-southeast-2 = 11, ap-northeast-1 = 12, ap-northeast-2 = 13 }

	export enum ResourceType { Instance = 0, StaticIp = 1, KeyPair = 2, InstanceSnapshot = 3, Domain = 4, PeeredVpc = 5, LoadBalancer = 6, LoadBalancerTlsCertificate = 7, Disk = 8, DiskSnapshot = 9, RelationalDatabase = 10, RelationalDatabaseSnapshot = 11, ExportSnapshotRecord = 12, CloudFormationStackRecord = 13, Alarm = 14, ContactMethod = 15 }


	/**<p>Describes resource being monitored by an alarm.</p> <p>An alarm is a way to monitor your Amazon Lightsail resource metrics. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p> */
	export interface MonitoredResourceInfo {
		arn?: string;
		name?: string;
		resourceType?: MonitoredResourceInfoResourceType;
	}

	export enum MonitoredResourceInfoResourceType { Instance = 0, StaticIp = 1, KeyPair = 2, InstanceSnapshot = 3, Domain = 4, PeeredVpc = 5, LoadBalancer = 6, LoadBalancerTlsCertificate = 7, Disk = 8, DiskSnapshot = 9, RelationalDatabase = 10, RelationalDatabaseSnapshot = 11, ExportSnapshotRecord = 12, CloudFormationStackRecord = 13, Alarm = 14, ContactMethod = 15 }

	export enum ComparisonOperator { GreaterThanOrEqualToThreshold = 0, GreaterThanThreshold = 1, LessThanThreshold = 2, LessThanOrEqualToThreshold = 3 }

	export enum TreatMissingData { breaching = 0, notBreaching = 1, ignore = 2, missing = 3 }

	export enum MetricStatistic { Minimum = 0, Maximum = 1, Sum = 2, Average = 3, SampleCount = 4 }

	export enum MetricName { CPUUtilization = 0, NetworkIn = 1, NetworkOut = 2, StatusCheckFailed = 3, StatusCheckFailed_Instance = 4, StatusCheckFailed_System = 5, ClientTLSNegotiationErrorCount = 6, HealthyHostCount = 7, UnhealthyHostCount = 8, HTTPCode_LB_4XX_Count = 9, HTTPCode_LB_5XX_Count = 10, HTTPCode_Instance_2XX_Count = 11, HTTPCode_Instance_3XX_Count = 12, HTTPCode_Instance_4XX_Count = 13, HTTPCode_Instance_5XX_Count = 14, InstanceResponseTime = 15, RejectedConnectionCount = 16, RequestCount = 17, DatabaseConnections = 18, DiskQueueDepth = 19, FreeStorageSpace = 20, NetworkReceiveThroughput = 21, NetworkTransmitThroughput = 22, BurstCapacityTime = 23, BurstCapacityPercentage = 24 }

	export enum AlarmState { OK = 0, ALARM = 1, INSUFFICIENT_DATA = 2 }

	export enum MetricUnit { Seconds = 0, Microseconds = 1, Milliseconds = 2, Bytes = 3, Kilobytes = 4, Megabytes = 5, Gigabytes = 6, Terabytes = 7, Bits = 8, Kilobits = 9, Megabits = 10, Gigabits = 11, Terabits = 12, Percent = 13, Count = 14, Bytes/Second = 15, Kilobytes/Second = 16, Megabytes/Second = 17, Gigabytes/Second = 18, Terabytes/Second = 19, Bits/Second = 20, Kilobits/Second = 21, Megabits/Second = 22, Gigabits/Second = 23, Terabits/Second = 24, Count/Second = 25, None = 26 }


	/**<p>Describes an alarm.</p> <p>An alarm is a way to monitor your Amazon Lightsail resource metrics. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p> */
	export interface Alarm {
		name?: string;
		arn?: string;
		createdAt?: Date;

		/**Describes the resource location. */
		location?: ResourceLocation;
		resourceType?: AlarmResourceType;
		supportCode?: string;

		/**<p>Describes resource being monitored by an alarm.</p> <p>An alarm is a way to monitor your Amazon Lightsail resource metrics. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p> */
		monitoredResourceInfo?: MonitoredResourceInfo;
		comparisonOperator?: AlarmComparisonOperator;
		evaluationPeriods?: number;
		period?: number;
		threshold?: number;
		datapointsToAlarm?: number;
		treatMissingData?: AlarmTreatMissingData;
		statistic?: AlarmStatistic;
		metricName?: AlarmMetricName;
		state?: AlarmState;
		unit?: AlarmUnit;
		contactProtocols?: Array<ContactProtocol>;
		notificationTriggers?: Array<AlarmState>;
		notificationEnabled?: boolean;
	}

	export enum AlarmResourceType { Instance = 0, StaticIp = 1, KeyPair = 2, InstanceSnapshot = 3, Domain = 4, PeeredVpc = 5, LoadBalancer = 6, LoadBalancerTlsCertificate = 7, Disk = 8, DiskSnapshot = 9, RelationalDatabase = 10, RelationalDatabaseSnapshot = 11, ExportSnapshotRecord = 12, CloudFormationStackRecord = 13, Alarm = 14, ContactMethod = 15 }

	export enum AlarmComparisonOperator { GreaterThanOrEqualToThreshold = 0, GreaterThanThreshold = 1, LessThanThreshold = 2, LessThanOrEqualToThreshold = 3 }

	export enum AlarmTreatMissingData { breaching = 0, notBreaching = 1, ignore = 2, missing = 3 }

	export enum AlarmStatistic { Minimum = 0, Maximum = 1, Sum = 2, Average = 3, SampleCount = 4 }

	export enum AlarmMetricName { CPUUtilization = 0, NetworkIn = 1, NetworkOut = 2, StatusCheckFailed = 3, StatusCheckFailed_Instance = 4, StatusCheckFailed_System = 5, ClientTLSNegotiationErrorCount = 6, HealthyHostCount = 7, UnhealthyHostCount = 8, HTTPCode_LB_4XX_Count = 9, HTTPCode_LB_5XX_Count = 10, HTTPCode_Instance_2XX_Count = 11, HTTPCode_Instance_3XX_Count = 12, HTTPCode_Instance_4XX_Count = 13, HTTPCode_Instance_5XX_Count = 14, InstanceResponseTime = 15, RejectedConnectionCount = 16, RequestCount = 17, DatabaseConnections = 18, DiskQueueDepth = 19, FreeStorageSpace = 20, NetworkReceiveThroughput = 21, NetworkTransmitThroughput = 22, BurstCapacityTime = 23, BurstCapacityPercentage = 24 }

	export enum AlarmState { OK = 0, ALARM = 1, INSUFFICIENT_DATA = 2 }

	export enum AlarmUnit { Seconds = 0, Microseconds = 1, Milliseconds = 2, Bytes = 3, Kilobytes = 4, Megabytes = 5, Gigabytes = 6, Terabytes = 7, Bits = 8, Kilobits = 9, Megabits = 10, Gigabits = 11, Terabits = 12, Percent = 13, Count = 14, Bytes/Second = 15, Kilobytes/Second = 16, Megabytes/Second = 17, Gigabytes/Second = 18, Terabytes/Second = 19, Bits/Second = 20, Kilobits/Second = 21, Megabits/Second = 22, Gigabits/Second = 23, Terabits/Second = 24, Count/Second = 25, None = 26 }


	/**Describes a block storage disk that is attached to an instance, and is included in an automatic snapshot. */
	export interface AttachedDisk {
		path?: string;
		sizeInGb?: number;
	}

	export enum AutoSnapshotStatus { Success = 0, Failed = 1, InProgress = 2, NotFound = 3 }


	/**Describes an automatic snapshot. */
	export interface AutoSnapshotDetails {
		date?: string;
		createdAt?: Date;
		status?: AutoSnapshotDetailsStatus;
		fromAttachedDisks?: Array<AttachedDisk>;
	}

	export enum AutoSnapshotDetailsStatus { Success = 0, Failed = 1, InProgress = 2, NotFound = 3 }


	/**Describes an Availability Zone. */
	export interface AvailabilityZone {
		zoneName?: string;
		state?: string;
	}

	export enum BlueprintType { os = 0, app = 1 }

	export enum InstancePlatform { LINUX_UNIX = 0, WINDOWS = 1 }


	/**Describes a blueprint (a virtual private server image). */
	export interface Blueprint {
		blueprintId?: string;
		name?: string;
		group?: string;
		type?: BlueprintType;
		description?: string;
		isActive?: boolean;
		minPower?: number;
		version?: string;
		versionCode?: string;
		productUrl?: string;
		licenseUrl?: string;
		platform?: BlueprintPlatform;
	}

	export enum BlueprintType { os = 0, app = 1 }

	export enum BlueprintPlatform { LINUX_UNIX = 0, WINDOWS = 1 }


	/**Describes a bundle, which is a set of specs describing your virtual private server (or <i>instance</i>). */
	export interface Bundle {
		price?: number;
		cpuCount?: number;
		diskSizeInGb?: number;
		bundleId?: string;
		instanceType?: string;
		isActive?: boolean;
		name?: string;
		power?: number;
		ramSizeInGb?: number;
		transferPerMonthInGb?: number;
		supportedPlatforms?: Array<InstancePlatform>;
	}


	/**Describes ports to open on an instance, the IP addresses allowed to connect to the instance through the ports, and the protocol. */
	export interface PortInfo {
		fromPort?: number;
		toPort?: number;
		protocol?: PortInfoProtocol;
		cidrs?: Array<string>;
		cidrListAliases?: Array<string>;
	}

	export enum PortInfoProtocol { tcp = 0, all = 1, udp = 2, icmp = 3 }


	/**Describes the API operation. */
	export interface Operation {
		id?: string;
		resourceName?: string;
		resourceType?: OperationResourceType;
		createdAt?: Date;

		/**Describes the resource location. */
		location?: ResourceLocation;
		isTerminal?: boolean;
		operationDetails?: string;
		operationType?: OperationOperationType;
		status?: OperationStatus;
		statusChangedAt?: Date;
		errorCode?: string;
		errorDetails?: string;
	}

	export enum OperationResourceType { Instance = 0, StaticIp = 1, KeyPair = 2, InstanceSnapshot = 3, Domain = 4, PeeredVpc = 5, LoadBalancer = 6, LoadBalancerTlsCertificate = 7, Disk = 8, DiskSnapshot = 9, RelationalDatabase = 10, RelationalDatabaseSnapshot = 11, ExportSnapshotRecord = 12, CloudFormationStackRecord = 13, Alarm = 14, ContactMethod = 15 }

	export enum OperationOperationType { DeleteKnownHostKeys = 0, DeleteInstance = 1, CreateInstance = 2, StopInstance = 3, StartInstance = 4, RebootInstance = 5, OpenInstancePublicPorts = 6, PutInstancePublicPorts = 7, CloseInstancePublicPorts = 8, AllocateStaticIp = 9, ReleaseStaticIp = 10, AttachStaticIp = 11, DetachStaticIp = 12, UpdateDomainEntry = 13, DeleteDomainEntry = 14, CreateDomain = 15, DeleteDomain = 16, CreateInstanceSnapshot = 17, DeleteInstanceSnapshot = 18, CreateInstancesFromSnapshot = 19, CreateLoadBalancer = 20, DeleteLoadBalancer = 21, AttachInstancesToLoadBalancer = 22, DetachInstancesFromLoadBalancer = 23, UpdateLoadBalancerAttribute = 24, CreateLoadBalancerTlsCertificate = 25, DeleteLoadBalancerTlsCertificate = 26, AttachLoadBalancerTlsCertificate = 27, CreateDisk = 28, DeleteDisk = 29, AttachDisk = 30, DetachDisk = 31, CreateDiskSnapshot = 32, DeleteDiskSnapshot = 33, CreateDiskFromSnapshot = 34, CreateRelationalDatabase = 35, UpdateRelationalDatabase = 36, DeleteRelationalDatabase = 37, CreateRelationalDatabaseFromSnapshot = 38, CreateRelationalDatabaseSnapshot = 39, DeleteRelationalDatabaseSnapshot = 40, UpdateRelationalDatabaseParameters = 41, StartRelationalDatabase = 42, RebootRelationalDatabase = 43, StopRelationalDatabase = 44, EnableAddOn = 45, DisableAddOn = 46, PutAlarm = 47, GetAlarms = 48, DeleteAlarm = 49, TestAlarm = 50, CreateContactMethod = 51, GetContactMethods = 52, SendContactMethodVerification = 53, DeleteContactMethod = 54 }

	export enum OperationStatus { NotStarted = 0, Started = 1, Failed = 2, Completed = 3, Succeeded = 4 }

	export enum RecordState { Started = 0, Succeeded = 1, Failed = 2 }


	/**Describes the destination of a record. */
	export interface DestinationInfo {
		id?: string;
		service?: string;
	}


	/**<p>Describes a CloudFormation stack record created as a result of the <code>create cloud formation stack</code> operation.</p> <p>A CloudFormation stack record provides information about the AWS CloudFormation stack used to create a new Amazon Elastic Compute Cloud instance from an exported Lightsail instance snapshot.</p> */
	export interface CloudFormationStackRecord {
		name?: string;
		arn?: string;
		createdAt?: Date;

		/**Describes the resource location. */
		location?: ResourceLocation;
		resourceType?: CloudFormationStackRecordResourceType;
		state?: CloudFormationStackRecordState;
		sourceInfo?: Array<CloudFormationStackRecordSourceInfo>;

		/**Describes the destination of a record. */
		destinationInfo?: DestinationInfo;
	}

	export enum CloudFormationStackRecordResourceType { Instance = 0, StaticIp = 1, KeyPair = 2, InstanceSnapshot = 3, Domain = 4, PeeredVpc = 5, LoadBalancer = 6, LoadBalancerTlsCertificate = 7, Disk = 8, DiskSnapshot = 9, RelationalDatabase = 10, RelationalDatabaseSnapshot = 11, ExportSnapshotRecord = 12, CloudFormationStackRecord = 13, Alarm = 14, ContactMethod = 15 }

	export enum CloudFormationStackRecordState { Started = 0, Succeeded = 1, Failed = 2 }

	export enum CloudFormationStackRecordSourceType { ExportSnapshotRecord = 0 }


	/**Describes the source of a CloudFormation stack record (i.e., the export snapshot record). */
	export interface CloudFormationStackRecordSourceInfo {
		resourceType?: CloudFormationStackRecordSourceInfoResourceType;
		name?: string;
		arn?: string;
	}

	export enum CloudFormationStackRecordSourceInfoResourceType { ExportSnapshotRecord = 0 }

	export enum ContactMethodStatus { PendingVerification = 0, Valid = 1, Invalid = 2 }

	export enum ContactProtocol { Email = 0, SMS = 1 }


	/**<p>Describes a contact method.</p> <p>A contact method is a way to send you notifications. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p> */
	export interface ContactMethod {
		contactEndpoint?: string;
		status?: ContactMethodStatus;
		protocol?: ContactMethodProtocol;
		name?: string;
		arn?: string;
		createdAt?: Date;

		/**Describes the resource location. */
		location?: ResourceLocation;
		resourceType?: ContactMethodResourceType;
		supportCode?: string;
	}

	export enum ContactMethodStatus { PendingVerification = 0, Valid = 1, Invalid = 2 }

	export enum ContactMethodProtocol { Email = 0, SMS = 1 }

	export enum ContactMethodResourceType { Instance = 0, StaticIp = 1, KeyPair = 2, InstanceSnapshot = 3, Domain = 4, PeeredVpc = 5, LoadBalancer = 6, LoadBalancerTlsCertificate = 7, Disk = 8, DiskSnapshot = 9, RelationalDatabase = 10, RelationalDatabaseSnapshot = 11, ExportSnapshotRecord = 12, CloudFormationStackRecord = 13, Alarm = 14, ContactMethod = 15 }

	export enum ContactMethodVerificationProtocol { Email = 0 }

	export enum RegionName { us-east-1 = 0, us-east-2 = 1, us-west-1 = 2, us-west-2 = 3, eu-west-1 = 4, eu-west-2 = 5, eu-west-3 = 6, eu-central-1 = 7, ca-central-1 = 8, ap-south-1 = 9, ap-southeast-1 = 10, ap-southeast-2 = 11, ap-northeast-1 = 12, ap-northeast-2 = 13 }


	/**Describes a domain recordset entry. */
	export interface DomainEntry {
		id?: string;
		name?: string;
		target?: string;
		isAlias?: boolean;
		type?: string;
		options?: DomainEntryOptions;
	}


	/**Describes the SSH key pair. */
	export interface KeyPair {
		name?: string;
		arn?: string;
		supportCode?: string;
		createdAt?: Date;

		/**Describes the resource location. */
		location?: ResourceLocation;
		resourceType?: KeyPairResourceType;
		tags?: Array<Tag>;
		fingerprint?: string;
	}

	export enum KeyPairResourceType { Instance = 0, StaticIp = 1, KeyPair = 2, InstanceSnapshot = 3, Domain = 4, PeeredVpc = 5, LoadBalancer = 6, LoadBalancerTlsCertificate = 7, Disk = 8, DiskSnapshot = 9, RelationalDatabase = 10, RelationalDatabaseSnapshot = 11, ExportSnapshotRecord = 12, CloudFormationStackRecord = 13, Alarm = 14, ContactMethod = 15 }

	export enum DiskState { pending = 0, error = 1, available = 2, in-use = 3, unknown = 4 }


	/**Describes a system disk or a block storage disk. */
	export interface Disk {
		name?: string;
		arn?: string;
		supportCode?: string;
		createdAt?: Date;

		/**Describes the resource location. */
		location?: ResourceLocation;
		resourceType?: DiskResourceType;
		tags?: Array<Tag>;
		addOns?: Array<AddOn>;
		sizeInGb?: number;
		isSystemDisk?: boolean;
		iops?: number;
		path?: string;
		state?: DiskState;
		attachedTo?: string;
		isAttached?: boolean;
		attachmentState?: string;
		gbInUse?: number;
	}

	export enum DiskResourceType { Instance = 0, StaticIp = 1, KeyPair = 2, InstanceSnapshot = 3, Domain = 4, PeeredVpc = 5, LoadBalancer = 6, LoadBalancerTlsCertificate = 7, Disk = 8, DiskSnapshot = 9, RelationalDatabase = 10, RelationalDatabaseSnapshot = 11, ExportSnapshotRecord = 12, CloudFormationStackRecord = 13, Alarm = 14, ContactMethod = 15 }

	export enum DiskState { pending = 0, error = 1, available = 2, in-use = 3, unknown = 4 }


	/**Describes a disk. */
	export interface DiskInfo {
		name?: string;
		path?: string;
		sizeInGb?: number;
		isSystemDisk?: boolean;
	}


	/**Describes a block storage disk mapping. */
	export interface DiskMap {
		originalDiskPath?: string;
		newDiskName?: string;
	}

	export enum DiskSnapshotState { pending = 0, completed = 1, error = 2, unknown = 3 }


	/**Describes a block storage disk snapshot. */
	export interface DiskSnapshot {
		name?: string;
		arn?: string;
		supportCode?: string;
		createdAt?: Date;

		/**Describes the resource location. */
		location?: ResourceLocation;
		resourceType?: DiskSnapshotResourceType;
		tags?: Array<Tag>;
		sizeInGb?: number;
		state?: DiskSnapshotState;
		progress?: string;
		fromDiskName?: string;
		fromDiskArn?: string;
		fromInstanceName?: string;
		fromInstanceArn?: string;
		isFromAutoSnapshot?: boolean;
	}

	export enum DiskSnapshotResourceType { Instance = 0, StaticIp = 1, KeyPair = 2, InstanceSnapshot = 3, Domain = 4, PeeredVpc = 5, LoadBalancer = 6, LoadBalancerTlsCertificate = 7, Disk = 8, DiskSnapshot = 9, RelationalDatabase = 10, RelationalDatabaseSnapshot = 11, ExportSnapshotRecord = 12, CloudFormationStackRecord = 13, Alarm = 14, ContactMethod = 15 }

	export enum DiskSnapshotState { pending = 0, completed = 1, error = 2, unknown = 3 }


	/**Describes a disk snapshot. */
	export interface DiskSnapshotInfo {
		sizeInGb?: number;
	}


	/**Describes a domain where you are storing recordsets in Lightsail. */
	export interface Domain {
		name?: string;
		arn?: string;
		supportCode?: string;
		createdAt?: Date;

		/**Describes the resource location. */
		location?: ResourceLocation;
		resourceType?: DomainResourceType;
		tags?: Array<Tag>;
		domainEntries?: Array<DomainEntry>;
	}

	export enum DomainResourceType { Instance = 0, StaticIp = 1, KeyPair = 2, InstanceSnapshot = 3, Domain = 4, PeeredVpc = 5, LoadBalancer = 6, LoadBalancerTlsCertificate = 7, Disk = 8, DiskSnapshot = 9, RelationalDatabase = 10, RelationalDatabaseSnapshot = 11, ExportSnapshotRecord = 12, CloudFormationStackRecord = 13, Alarm = 14, ContactMethod = 15 }


	/**Describes the source of an export snapshot record. */
	export interface ExportSnapshotRecordSourceInfo {
		resourceType?: ExportSnapshotRecordSourceInfoResourceType;
		createdAt?: Date;
		name?: string;
		arn?: string;
		fromResourceName?: string;
		fromResourceArn?: string;

		/**Describes an instance snapshot. */
		instanceSnapshotInfo?: InstanceSnapshotInfo;

		/**Describes a disk snapshot. */
		diskSnapshotInfo?: DiskSnapshotInfo;
	}

	export enum ExportSnapshotRecordSourceInfoResourceType { InstanceSnapshot = 0, DiskSnapshot = 1 }


	/**Describes an export snapshot record. */
	export interface ExportSnapshotRecord {
		name?: string;
		arn?: string;
		createdAt?: Date;

		/**Describes the resource location. */
		location?: ResourceLocation;
		resourceType?: ExportSnapshotRecordResourceType;
		state?: ExportSnapshotRecordState;

		/**Describes the source of an export snapshot record. */
		sourceInfo?: ExportSnapshotRecordSourceInfo;

		/**Describes the destination of a record. */
		destinationInfo?: DestinationInfo;
	}

	export enum ExportSnapshotRecordResourceType { Instance = 0, StaticIp = 1, KeyPair = 2, InstanceSnapshot = 3, Domain = 4, PeeredVpc = 5, LoadBalancer = 6, LoadBalancerTlsCertificate = 7, Disk = 8, DiskSnapshot = 9, RelationalDatabase = 10, RelationalDatabaseSnapshot = 11, ExportSnapshotRecord = 12, CloudFormationStackRecord = 13, Alarm = 14, ContactMethod = 15 }

	export enum ExportSnapshotRecordState { Started = 0, Succeeded = 1, Failed = 2 }

	export enum ExportSnapshotRecordSourceType { InstanceSnapshot = 0, DiskSnapshot = 1 }


	/**Describes an instance snapshot. */
	export interface InstanceSnapshotInfo {
		fromBundleId?: string;
		fromBlueprintId?: string;
		fromDiskInfo?: Array<DiskInfo>;
	}

	export enum InstanceAccessProtocol { ssh = 0, rdp = 1 }


	/**The parameters for gaining temporary access to one of your Amazon Lightsail instances. */
	export interface InstanceAccessDetails {
		certKey?: string;
		expiresAt?: Date;
		ipAddress?: string;
		password?: string;

		/**The password data for the Windows Server-based instance, including the ciphertext and the key pair name. */
		passwordData?: PasswordData;
		privateKey?: string;
		protocol?: InstanceAccessDetailsProtocol;
		instanceName?: string;
		username?: string;
		hostKeys?: Array<HostKeyAttributes>;
	}

	export enum InstanceAccessDetailsProtocol { ssh = 0, rdp = 1 }

	export enum InstanceMetricName { CPUUtilization = 0, NetworkIn = 1, NetworkOut = 2, StatusCheckFailed = 3, StatusCheckFailed_Instance = 4, StatusCheckFailed_System = 5, BurstCapacityTime = 6, BurstCapacityPercentage = 7 }


	/**Describes an instance (a virtual private server). */
	export interface Instance {
		name?: string;
		arn?: string;
		supportCode?: string;
		createdAt?: Date;

		/**Describes the resource location. */
		location?: ResourceLocation;
		resourceType?: InstanceResourceType;
		tags?: Array<Tag>;
		blueprintId?: string;
		blueprintName?: string;
		bundleId?: string;
		addOns?: Array<AddOn>;
		isStaticIp?: boolean;
		privateIpAddress?: string;
		publicIpAddress?: string;
		ipv6Address?: string;

		/**Describes the hardware for the instance. */
		hardware?: InstanceHardware;

		/**Describes monthly data transfer rates and port information for an instance. */
		networking?: InstanceNetworking;

		/**Describes the virtual private server (or <i>instance</i>) status. */
		state?: InstanceState;
		username?: string;
		sshKeyName?: string;
	}

	export enum InstanceResourceType { Instance = 0, StaticIp = 1, KeyPair = 2, InstanceSnapshot = 3, Domain = 4, PeeredVpc = 5, LoadBalancer = 6, LoadBalancerTlsCertificate = 7, Disk = 8, DiskSnapshot = 9, RelationalDatabase = 10, RelationalDatabaseSnapshot = 11, ExportSnapshotRecord = 12, CloudFormationStackRecord = 13, Alarm = 14, ContactMethod = 15 }


	/**Describes an instance snapshot. */
	export interface InstanceSnapshot {
		name?: string;
		arn?: string;
		supportCode?: string;
		createdAt?: Date;

		/**Describes the resource location. */
		location?: ResourceLocation;
		resourceType?: InstanceSnapshotResourceType;
		tags?: Array<Tag>;
		state?: InstanceSnapshotState;
		progress?: string;
		fromAttachedDisks?: Array<Disk>;
		fromInstanceName?: string;
		fromInstanceArn?: string;
		fromBlueprintId?: string;
		fromBundleId?: string;
		isFromAutoSnapshot?: boolean;
		sizeInGb?: number;
	}

	export enum InstanceSnapshotResourceType { Instance = 0, StaticIp = 1, KeyPair = 2, InstanceSnapshot = 3, Domain = 4, PeeredVpc = 5, LoadBalancer = 6, LoadBalancerTlsCertificate = 7, Disk = 8, DiskSnapshot = 9, RelationalDatabase = 10, RelationalDatabaseSnapshot = 11, ExportSnapshotRecord = 12, CloudFormationStackRecord = 13, Alarm = 14, ContactMethod = 15 }

	export enum InstanceSnapshotState { pending = 0, error = 1, available = 2 }


	/**Describes the virtual private server (or <i>instance</i>) status. */
	export interface InstanceState {
		code?: number;
		name?: string;
	}

	export enum LoadBalancerMetricName { ClientTLSNegotiationErrorCount = 0, HealthyHostCount = 1, UnhealthyHostCount = 2, HTTPCode_LB_4XX_Count = 3, HTTPCode_LB_5XX_Count = 4, HTTPCode_Instance_2XX_Count = 5, HTTPCode_Instance_3XX_Count = 6, HTTPCode_Instance_4XX_Count = 7, HTTPCode_Instance_5XX_Count = 8, InstanceResponseTime = 9, RejectedConnectionCount = 10, RequestCount = 11 }


	/**Describes the Lightsail load balancer. */
	export interface LoadBalancer {
		name?: string;
		arn?: string;
		supportCode?: string;
		createdAt?: Date;

		/**Describes the resource location. */
		location?: ResourceLocation;
		resourceType?: LoadBalancerResourceType;
		tags?: Array<Tag>;
		dnsName?: string;
		state?: LoadBalancerState;
		protocol?: LoadBalancerProtocol;
		publicPorts?: Array<Port>;
		healthCheckPath?: string;
		instancePort?: number;
		instanceHealthSummary?: Array<InstanceHealthSummary>;
		tlsCertificateSummaries?: Array<LoadBalancerTlsCertificateSummary>;
		configurationOptions?: LoadBalancerConfigurationOptions;
	}

	export enum LoadBalancerResourceType { Instance = 0, StaticIp = 1, KeyPair = 2, InstanceSnapshot = 3, Domain = 4, PeeredVpc = 5, LoadBalancer = 6, LoadBalancerTlsCertificate = 7, Disk = 8, DiskSnapshot = 9, RelationalDatabase = 10, RelationalDatabaseSnapshot = 11, ExportSnapshotRecord = 12, CloudFormationStackRecord = 13, Alarm = 14, ContactMethod = 15 }

	export enum LoadBalancerState { active = 0, provisioning = 1, active_impaired = 2, failed = 3, unknown = 4 }

	export enum LoadBalancerProtocol { HTTP_HTTPS = 0, HTTP = 1 }

	export enum RelationalDatabasePasswordVersion { CURRENT = 0, PREVIOUS = 1, PENDING = 2 }

	export enum RelationalDatabaseMetricName { CPUUtilization = 0, DatabaseConnections = 1, DiskQueueDepth = 2, FreeStorageSpace = 3, NetworkReceiveThroughput = 4, NetworkTransmitThroughput = 5 }


	/**Describes a database. */
	export interface RelationalDatabase {
		name?: string;
		arn?: string;
		supportCode?: string;
		createdAt?: Date;

		/**Describes the resource location. */
		location?: ResourceLocation;
		resourceType?: RelationalDatabaseResourceType;
		tags?: Array<Tag>;
		relationalDatabaseBlueprintId?: string;
		relationalDatabaseBundleId?: string;
		masterDatabaseName?: string;

		/**Describes the hardware of a database. */
		hardware?: RelationalDatabaseHardware;
		state?: string;
		secondaryAvailabilityZone?: string;
		backupRetentionEnabled?: boolean;

		/**Describes a pending database value modification. */
		pendingModifiedValues?: PendingModifiedRelationalDatabaseValues;
		engine?: string;
		engineVersion?: string;
		latestRestorableTime?: Date;
		masterUsername?: string;
		parameterApplyStatus?: string;
		preferredBackupWindow?: string;
		preferredMaintenanceWindow?: string;
		publiclyAccessible?: boolean;

		/**Describes an endpoint for a database. */
		masterEndpoint?: RelationalDatabaseEndpoint;
		pendingMaintenanceActions?: Array<PendingMaintenanceAction>;
		caCertificateIdentifier?: string;
	}

	export enum RelationalDatabaseResourceType { Instance = 0, StaticIp = 1, KeyPair = 2, InstanceSnapshot = 3, Domain = 4, PeeredVpc = 5, LoadBalancer = 6, LoadBalancerTlsCertificate = 7, Disk = 8, DiskSnapshot = 9, RelationalDatabase = 10, RelationalDatabaseSnapshot = 11, ExportSnapshotRecord = 12, CloudFormationStackRecord = 13, Alarm = 14, ContactMethod = 15 }


	/**Describes a database snapshot. */
	export interface RelationalDatabaseSnapshot {
		name?: string;
		arn?: string;
		supportCode?: string;
		createdAt?: Date;

		/**Describes the resource location. */
		location?: ResourceLocation;
		resourceType?: RelationalDatabaseSnapshotResourceType;
		tags?: Array<Tag>;
		engine?: string;
		engineVersion?: string;
		sizeInGb?: number;
		state?: string;
		fromRelationalDatabaseName?: string;
		fromRelationalDatabaseArn?: string;
		fromRelationalDatabaseBundleId?: string;
		fromRelationalDatabaseBlueprintId?: string;
	}

	export enum RelationalDatabaseSnapshotResourceType { Instance = 0, StaticIp = 1, KeyPair = 2, InstanceSnapshot = 3, Domain = 4, PeeredVpc = 5, LoadBalancer = 6, LoadBalancerTlsCertificate = 7, Disk = 8, DiskSnapshot = 9, RelationalDatabase = 10, RelationalDatabaseSnapshot = 11, ExportSnapshotRecord = 12, CloudFormationStackRecord = 13, Alarm = 14, ContactMethod = 15 }


	/**Describes the static IP. */
	export interface StaticIp {
		name?: string;
		arn?: string;
		supportCode?: string;
		createdAt?: Date;

		/**Describes the resource location. */
		location?: ResourceLocation;
		resourceType?: StaticIpResourceType;
		ipAddress?: string;
		attachedTo?: string;
		isAttached?: boolean;
	}

	export enum StaticIpResourceType { Instance = 0, StaticIp = 1, KeyPair = 2, InstanceSnapshot = 3, Domain = 4, PeeredVpc = 5, LoadBalancer = 6, LoadBalancerTlsCertificate = 7, Disk = 8, DiskSnapshot = 9, RelationalDatabase = 10, RelationalDatabaseSnapshot = 11, ExportSnapshotRecord = 12, CloudFormationStackRecord = 13, Alarm = 14, ContactMethod = 15 }


	/**Describes the public SSH host keys or the RDP certificate. */
	export interface HostKeyAttributes {
		algorithm?: string;
		publicKey?: string;
		witnessedAt?: Date;
		fingerprintSHA1?: string;
		fingerprintSHA256?: string;
		notValidBefore?: Date;
		notValidAfter?: Date;
	}


	/**Describes the hardware for the instance. */
	export interface InstanceHardware {
		cpuCount?: number;
		disks?: Array<Disk>;
		ramSizeInGb?: number;
	}


	/**Describes monthly data transfer rates and port information for an instance. */
	export interface InstanceNetworking {

		/**Describes the monthly data transfer in and out of your virtual private server (or <i>instance</i>). */
		monthlyTransfer?: MonthlyTransfer;
		ports?: Array<InstancePortInfo>;
	}


	/**The password data for the Windows Server-based instance, including the ciphertext and the key pair name. */
	export interface PasswordData {
		ciphertext?: string;
		keyPairName?: string;
	}

	export enum PortInfoSourceType { DEFAULT = 0, INSTANCE = 1, NONE = 2, CLOSED = 3 }


	/**Describes the Amazon Elastic Compute Cloud instance and related resources to be created using the <code>create cloud formation stack</code> operation. */
	export interface InstanceEntry {
		sourceName: string;
		instanceType: string;
		portInfoSource: InstanceEntryPortInfoSource;
		userData?: string;
		availabilityZone: string;
	}

	export enum InstanceEntryPortInfoSource { DEFAULT = 0, INSTANCE = 1, NONE = 2, CLOSED = 3 }

	export enum InstanceHealthReason { Lb.RegistrationInProgress = 0, Lb.InitialHealthChecking = 1, Lb.InternalError = 2, Instance.ResponseCodeMismatch = 3, Instance.Timeout = 4, Instance.FailedHealthChecks = 5, Instance.NotRegistered = 6, Instance.NotInUse = 7, Instance.DeregistrationInProgress = 8, Instance.InvalidState = 9, Instance.IpUnusable = 10 }

	export enum InstanceHealthState { initial = 0, healthy = 1, unhealthy = 2, unused = 3, draining = 4, unavailable = 5 }


	/**Describes information about the health of the instance. */
	export interface InstanceHealthSummary {
		instanceName?: string;
		instanceHealth?: InstanceHealthSummaryInstanceHealth;
		instanceHealthReason?: InstanceHealthSummaryInstanceHealthReason;
	}

	export enum InstanceHealthSummaryInstanceHealth { initial = 0, healthy = 1, unhealthy = 2, unused = 3, draining = 4, unavailable = 5 }

	export enum InstanceHealthSummaryInstanceHealthReason { Lb.RegistrationInProgress = 0, Lb.InitialHealthChecking = 1, Lb.InternalError = 2, Instance.ResponseCodeMismatch = 3, Instance.Timeout = 4, Instance.FailedHealthChecks = 5, Instance.NotRegistered = 6, Instance.NotInUse = 7, Instance.DeregistrationInProgress = 8, Instance.InvalidState = 9, Instance.IpUnusable = 10 }


	/**Describes the monthly data transfer in and out of your virtual private server (or <i>instance</i>). */
	export interface MonthlyTransfer {
		gbPerMonthAllocated?: number;
	}

	export enum NetworkProtocol { tcp = 0, all = 1, udp = 2, icmp = 3 }

	export enum PortAccessType { Public = 0, Private = 1 }


	/**Describes information about ports for an Amazon Lightsail instance. */
	export interface InstancePortInfo {
		fromPort?: number;
		toPort?: number;
		protocol?: InstancePortInfoProtocol;
		accessFrom?: string;
		accessType?: InstancePortInfoAccessType;
		commonName?: string;
		accessDirection?: InstancePortInfoAccessDirection;
		cidrs?: Array<string>;
		cidrListAliases?: Array<string>;
	}

	export enum InstancePortInfoProtocol { tcp = 0, all = 1, udp = 2, icmp = 3 }

	export enum InstancePortInfoAccessType { Public = 0, Private = 1 }

	export enum InstancePortInfoAccessDirection { inbound = 0, outbound = 1 }

	export enum PortState { open = 0, closed = 1 }


	/**Describes open ports on an instance, the IP addresses allowed to connect to the instance through the ports, and the protocol. */
	export interface InstancePortState {
		fromPort?: number;
		toPort?: number;
		protocol?: InstancePortStateProtocol;
		state?: InstancePortStateState;
		cidrs?: Array<string>;
		cidrListAliases?: Array<string>;
	}

	export enum InstancePortStateProtocol { tcp = 0, all = 1, udp = 2, icmp = 3 }

	export enum InstancePortStateState { open = 0, closed = 1 }

	export enum InstanceSnapshotState { pending = 0, error = 1, available = 2 }

	export enum LoadBalancerState { active = 0, provisioning = 1, active_impaired = 2, failed = 3, unknown = 4 }

	export enum LoadBalancerProtocol { HTTP_HTTPS = 0, HTTP = 1 }

	export enum LoadBalancerAttributeName { HealthCheckPath = 0, SessionStickinessEnabled = 1, SessionStickiness_LB_CookieDurationSeconds = 2 }

	export enum LoadBalancerTlsCertificateStatus { PENDING_VALIDATION = 0, ISSUED = 1, INACTIVE = 2, EXPIRED = 3, VALIDATION_TIMED_OUT = 4, REVOKED = 5, FAILED = 6, UNKNOWN = 7 }

	export enum LoadBalancerTlsCertificateFailureReason { NO_AVAILABLE_CONTACTS = 0, ADDITIONAL_VERIFICATION_REQUIRED = 1, DOMAIN_NOT_ALLOWED = 2, INVALID_PUBLIC_DOMAIN = 3, OTHER = 4 }


	/**Contains information about the status of Lightsail's managed renewal for the certificate. */
	export interface LoadBalancerTlsCertificateRenewalSummary {
		renewalStatus?: LoadBalancerTlsCertificateRenewalSummaryRenewalStatus;
		domainValidationOptions?: Array<LoadBalancerTlsCertificateDomainValidationOption>;
	}

	export enum LoadBalancerTlsCertificateRenewalSummaryRenewalStatus { PENDING_AUTO_RENEWAL = 0, PENDING_VALIDATION = 1, SUCCESS = 2, FAILED = 3 }

	export enum LoadBalancerTlsCertificateRevocationReason { UNSPECIFIED = 0, KEY_COMPROMISE = 1, CA_COMPROMISE = 2, AFFILIATION_CHANGED = 3, SUPERCEDED = 4, CESSATION_OF_OPERATION = 5, CERTIFICATE_HOLD = 6, REMOVE_FROM_CRL = 7, PRIVILEGE_WITHDRAWN = 8, A_A_COMPROMISE = 9 }


	/**<p>Describes a load balancer SSL/TLS certificate.</p> <p>TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p> */
	export interface LoadBalancerTlsCertificate {
		name?: string;
		arn?: string;
		supportCode?: string;
		createdAt?: Date;

		/**Describes the resource location. */
		location?: ResourceLocation;
		resourceType?: LoadBalancerTlsCertificateResourceType;
		tags?: Array<Tag>;
		loadBalancerName?: string;
		isAttached?: boolean;
		status?: LoadBalancerTlsCertificateStatus;
		domainName?: string;
		domainValidationRecords?: Array<LoadBalancerTlsCertificateDomainValidationRecord>;
		failureReason?: LoadBalancerTlsCertificateFailureReason;
		issuedAt?: Date;
		issuer?: string;
		keyAlgorithm?: string;
		notAfter?: Date;
		notBefore?: Date;

		/**Contains information about the status of Lightsail's managed renewal for the certificate. */
		renewalSummary?: LoadBalancerTlsCertificateRenewalSummary;
		revocationReason?: LoadBalancerTlsCertificateRevocationReason;
		revokedAt?: Date;
		serial?: string;
		signatureAlgorithm?: string;
		subject?: string;
		subjectAlternativeNames?: Array<string>;
	}

	export enum LoadBalancerTlsCertificateResourceType { Instance = 0, StaticIp = 1, KeyPair = 2, InstanceSnapshot = 3, Domain = 4, PeeredVpc = 5, LoadBalancer = 6, LoadBalancerTlsCertificate = 7, Disk = 8, DiskSnapshot = 9, RelationalDatabase = 10, RelationalDatabaseSnapshot = 11, ExportSnapshotRecord = 12, CloudFormationStackRecord = 13, Alarm = 14, ContactMethod = 15 }

	export enum LoadBalancerTlsCertificateStatus { PENDING_VALIDATION = 0, ISSUED = 1, INACTIVE = 2, EXPIRED = 3, VALIDATION_TIMED_OUT = 4, REVOKED = 5, FAILED = 6, UNKNOWN = 7 }

	export enum LoadBalancerTlsCertificateFailureReason { NO_AVAILABLE_CONTACTS = 0, ADDITIONAL_VERIFICATION_REQUIRED = 1, DOMAIN_NOT_ALLOWED = 2, INVALID_PUBLIC_DOMAIN = 3, OTHER = 4 }

	export enum LoadBalancerTlsCertificateRevocationReason { UNSPECIFIED = 0, KEY_COMPROMISE = 1, CA_COMPROMISE = 2, AFFILIATION_CHANGED = 3, SUPERCEDED = 4, CESSATION_OF_OPERATION = 5, CERTIFICATE_HOLD = 6, REMOVE_FROM_CRL = 7, PRIVILEGE_WITHDRAWN = 8, A_A_COMPROMISE = 9 }

	export enum LoadBalancerTlsCertificateDomainStatus { PENDING_VALIDATION = 0, FAILED = 1, SUCCESS = 2 }


	/**Contains information about the domain names on an SSL/TLS certificate that you will use to validate domain ownership. */
	export interface LoadBalancerTlsCertificateDomainValidationOption {
		domainName?: string;
		validationStatus?: LoadBalancerTlsCertificateDomainValidationOptionValidationStatus;
	}

	export enum LoadBalancerTlsCertificateDomainValidationOptionValidationStatus { PENDING_VALIDATION = 0, FAILED = 1, SUCCESS = 2 }


	/**Describes the validation record of each domain name in the SSL/TLS certificate. */
	export interface LoadBalancerTlsCertificateDomainValidationRecord {
		name?: string;
		type?: string;
		value?: string;
		validationStatus?: LoadBalancerTlsCertificateDomainValidationRecordValidationStatus;
		domainName?: string;
	}

	export enum LoadBalancerTlsCertificateDomainValidationRecordValidationStatus { PENDING_VALIDATION = 0, FAILED = 1, SUCCESS = 2 }

	export enum LoadBalancerTlsCertificateRenewalStatus { PENDING_AUTO_RENEWAL = 0, PENDING_VALIDATION = 1, SUCCESS = 2, FAILED = 3 }


	/**Provides a summary of SSL/TLS certificate metadata. */
	export interface LoadBalancerTlsCertificateSummary {
		name?: string;
		isAttached?: boolean;
	}


	/**Describes a database log event. */
	export interface LogEvent {
		createdAt?: Date;
		message?: string;
	}


	/**Describes the metric data point. */
	export interface MetricDatapoint {
		average?: number;
		maximum?: number;
		minimum?: number;
		sampleCount?: number;
		sum?: number;
		timestamp?: Date;
		unit?: MetricDatapointUnit;
	}

	export enum MetricDatapointUnit { Seconds = 0, Microseconds = 1, Milliseconds = 2, Bytes = 3, Kilobytes = 4, Megabytes = 5, Gigabytes = 6, Terabytes = 7, Bits = 8, Kilobits = 9, Megabits = 10, Gigabits = 11, Terabits = 12, Percent = 13, Count = 14, Bytes/Second = 15, Kilobytes/Second = 16, Megabytes/Second = 17, Gigabytes/Second = 18, Terabytes/Second = 19, Bits/Second = 20, Kilobits/Second = 21, Megabits/Second = 22, Gigabits/Second = 23, Terabits/Second = 24, Count/Second = 25, None = 26 }

	export enum OperationType { DeleteKnownHostKeys = 0, DeleteInstance = 1, CreateInstance = 2, StopInstance = 3, StartInstance = 4, RebootInstance = 5, OpenInstancePublicPorts = 6, PutInstancePublicPorts = 7, CloseInstancePublicPorts = 8, AllocateStaticIp = 9, ReleaseStaticIp = 10, AttachStaticIp = 11, DetachStaticIp = 12, UpdateDomainEntry = 13, DeleteDomainEntry = 14, CreateDomain = 15, DeleteDomain = 16, CreateInstanceSnapshot = 17, DeleteInstanceSnapshot = 18, CreateInstancesFromSnapshot = 19, CreateLoadBalancer = 20, DeleteLoadBalancer = 21, AttachInstancesToLoadBalancer = 22, DetachInstancesFromLoadBalancer = 23, UpdateLoadBalancerAttribute = 24, CreateLoadBalancerTlsCertificate = 25, DeleteLoadBalancerTlsCertificate = 26, AttachLoadBalancerTlsCertificate = 27, CreateDisk = 28, DeleteDisk = 29, AttachDisk = 30, DetachDisk = 31, CreateDiskSnapshot = 32, DeleteDiskSnapshot = 33, CreateDiskFromSnapshot = 34, CreateRelationalDatabase = 35, UpdateRelationalDatabase = 36, DeleteRelationalDatabase = 37, CreateRelationalDatabaseFromSnapshot = 38, CreateRelationalDatabaseSnapshot = 39, DeleteRelationalDatabaseSnapshot = 40, UpdateRelationalDatabaseParameters = 41, StartRelationalDatabase = 42, RebootRelationalDatabase = 43, StopRelationalDatabase = 44, EnableAddOn = 45, DisableAddOn = 46, PutAlarm = 47, GetAlarms = 48, DeleteAlarm = 49, TestAlarm = 50, CreateContactMethod = 51, GetContactMethods = 52, SendContactMethodVerification = 53, DeleteContactMethod = 54 }

	export enum OperationStatus { NotStarted = 0, Started = 1, Failed = 2, Completed = 3, Succeeded = 4 }


	/**Describes a pending database maintenance action. */
	export interface PendingMaintenanceAction {
		action?: string;
		description?: string;
		currentApplyDate?: Date;
	}


	/**Describes a pending database value modification. */
	export interface PendingModifiedRelationalDatabaseValues {
		masterUserPassword?: string;
		engineVersion?: string;
		backupRetentionEnabled?: boolean;
	}


	/**Describes the AWS Region. */
	export interface Region {
		continentCode?: string;
		description?: string;
		displayName?: string;
		name?: RegionName;
		availabilityZones?: Array<AvailabilityZone>;
		relationalDatabaseAvailabilityZones?: Array<AvailabilityZone>;
	}

	export enum RegionName { us-east-1 = 0, us-east-2 = 1, us-west-1 = 2, us-west-2 = 3, eu-west-1 = 4, eu-west-2 = 5, eu-west-3 = 6, eu-central-1 = 7, ca-central-1 = 8, ap-south-1 = 9, ap-southeast-1 = 10, ap-southeast-2 = 11, ap-northeast-1 = 12, ap-northeast-2 = 13 }


	/**Describes the hardware of a database. */
	export interface RelationalDatabaseHardware {
		cpuCount?: number;
		diskSizeInGb?: number;
		ramSizeInGb?: number;
	}


	/**Describes an endpoint for a database. */
	export interface RelationalDatabaseEndpoint {
		port?: number;
		address?: string;
	}

	export enum RelationalDatabaseEngine { mysql = 0 }


	/**Describes a database image, or blueprint. A blueprint describes the major engine version of a database. */
	export interface RelationalDatabaseBlueprint {
		blueprintId?: string;
		engine?: RelationalDatabaseBlueprintEngine;
		engineVersion?: string;
		engineDescription?: string;
		engineVersionDescription?: string;
		isEngineDefault?: boolean;
	}

	export enum RelationalDatabaseBlueprintEngine { mysql = 0 }


	/**Describes a database bundle. A bundle describes the performance specifications of the database. */
	export interface RelationalDatabaseBundle {
		bundleId?: string;
		name?: string;
		price?: number;
		ramSizeInGb?: number;
		diskSizeInGb?: number;
		transferPerMonthInGb?: number;
		cpuCount?: number;
		isEncrypted?: boolean;
		isActive?: boolean;
	}


	/**Describes an event for a database. */
	export interface RelationalDatabaseEvent {
		resource?: string;
		createdAt?: Date;
		message?: string;
		eventCategories?: Array<string>;
	}


	/**Describes the parameters of a database. */
	export interface RelationalDatabaseParameter {
		allowedValues?: string;
		applyMethod?: string;
		applyType?: string;
		dataType?: string;
		description?: string;
		isModifiable?: boolean;
		parameterName?: string;
		parameterValue?: string;
	}


	/**<p>Describes a tag key and optional value assigned to an Amazon Lightsail resource.</p> <p>For more information about tags in Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-tags">Lightsail Dev Guide</a>.</p> */
	export interface Tag {
		key?: string;
		value?: string;
	}

	export class DemoClient {
		constructor(private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/') {
		}

		/**
		 * Allocates a static IP address.
		 * Post /#X-Amz-Target=Lightsail_20161128.AllocateStaticIp
		 * @return {AllocateStaticIpResult} Success
		 */
		AllocateStaticIp(requestBody: AllocateStaticIpRequest, headersHandler?: () => {[header: string]: string}): Promise<AllocateStaticIpResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.AllocateStaticIp', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Attaches a block storage disk to a running or stopped Lightsail instance and exposes it to the instance with the specified disk name.</p> <p>The <code>attach disk</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>disk name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post /#X-Amz-Target=Lightsail_20161128.AttachDisk
		 * @return {AttachDiskResult} Success
		 */
		AttachDisk(requestBody: AttachDiskRequest, headersHandler?: () => {[header: string]: string}): Promise<AttachDiskResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.AttachDisk', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Attaches one or more Lightsail instances to a load balancer.</p> <p>After some time, the instances are attached to the load balancer and the health check status is available.</p> <p>The <code>attach instances to load balancer</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post /#X-Amz-Target=Lightsail_20161128.AttachInstancesToLoadBalancer
		 * @return {AttachInstancesToLoadBalancerResult} Success
		 */
		AttachInstancesToLoadBalancer(requestBody: AttachInstancesToLoadBalancerRequest, headersHandler?: () => {[header: string]: string}): Promise<AttachInstancesToLoadBalancerResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.AttachInstancesToLoadBalancer', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Attaches a Transport Layer Security (TLS) certificate to your load balancer. TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p> <p>Once you create and validate your certificate, you can attach it to your load balancer. You can also use this API to rotate the certificates on your account. Use the <code>AttachLoadBalancerTlsCertificate</code> action with the non-attached certificate, and it will replace the existing one and become the attached certificate.</p> <p>The <code>AttachLoadBalancerTlsCertificate</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post /#X-Amz-Target=Lightsail_20161128.AttachLoadBalancerTlsCertificate
		 * @return {AttachLoadBalancerTlsCertificateResult} Success
		 */
		AttachLoadBalancerTlsCertificate(requestBody: AttachLoadBalancerTlsCertificateRequest, headersHandler?: () => {[header: string]: string}): Promise<AttachLoadBalancerTlsCertificateResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.AttachLoadBalancerTlsCertificate', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Attaches a static IP address to a specific Amazon Lightsail instance.
		 * Post /#X-Amz-Target=Lightsail_20161128.AttachStaticIp
		 * @return {AttachStaticIpResult} Success
		 */
		AttachStaticIp(requestBody: AttachStaticIpRequest, headersHandler?: () => {[header: string]: string}): Promise<AttachStaticIpResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.AttachStaticIp', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Closes ports for a specific Amazon Lightsail instance.</p> <p>The <code>CloseInstancePublicPorts</code> action supports tag-based access control via resource tags applied to the resource identified by <code>instanceName</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post /#X-Amz-Target=Lightsail_20161128.CloseInstancePublicPorts
		 * @return {CloseInstancePublicPortsResult} Success
		 */
		CloseInstancePublicPorts(requestBody: CloseInstancePublicPortsRequest, headersHandler?: () => {[header: string]: string}): Promise<CloseInstancePublicPortsResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.CloseInstancePublicPorts', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Copies a manual snapshot of an instance or disk as another manual snapshot, or copies an automatic snapshot of an instance or disk as a manual snapshot. This operation can also be used to copy a manual or automatic snapshot of an instance or a disk from one AWS Region to another in Amazon Lightsail.</p> <p>When copying a <i>manual snapshot</i>, be sure to define the <code>source region</code>, <code>source snapshot name</code>, and <code>target snapshot name</code> parameters.</p> <p>When copying an <i>automatic snapshot</i>, be sure to define the <code>source region</code>, <code>source resource name</code>, <code>target snapshot name</code>, and either the <code>restore date</code> or the <code>use latest restorable auto snapshot</code> parameters.</p>
		 * Post /#X-Amz-Target=Lightsail_20161128.CopySnapshot
		 * @return {CopySnapshotResult} Success
		 */
		CopySnapshot(requestBody: CopySnapshotRequest, headersHandler?: () => {[header: string]: string}): Promise<CopySnapshotResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.CopySnapshot', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Creates an AWS CloudFormation stack, which creates a new Amazon EC2 instance from an exported Amazon Lightsail snapshot. This operation results in a CloudFormation stack record that can be used to track the AWS CloudFormation stack created. Use the <code>get cloud formation stack records</code> operation to get a list of the CloudFormation stacks created.</p> <important> <p>Wait until after your new Amazon EC2 instance is created before running the <code>create cloud formation stack</code> operation again with the same export snapshot record.</p> </important>
		 * Post /#X-Amz-Target=Lightsail_20161128.CreateCloudFormationStack
		 * @return {CreateCloudFormationStackResult} Success
		 */
		CreateCloudFormationStack(requestBody: CreateCloudFormationStackRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateCloudFormationStackResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.CreateCloudFormationStack', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Creates an email or SMS text message contact method.</p> <p>A contact method is used to send you notifications about your Amazon Lightsail resources. You can add one email address and one mobile phone number contact method in each AWS Region. However, SMS text messaging is not supported in some AWS Regions, and SMS text messages cannot be sent to some countries/regions. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p>
		 * Post /#X-Amz-Target=Lightsail_20161128.CreateContactMethod
		 * @return {CreateContactMethodResult} Success
		 */
		CreateContactMethod(requestBody: CreateContactMethodRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateContactMethodResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.CreateContactMethod', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Creates a block storage disk that can be attached to an Amazon Lightsail instance in the same Availability Zone (e.g., <code>us-east-2a</code>).</p> <p>The <code>create disk</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post /#X-Amz-Target=Lightsail_20161128.CreateDisk
		 * @return {CreateDiskResult} Success
		 */
		CreateDisk(requestBody: CreateDiskRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateDiskResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.CreateDisk', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Creates a block storage disk from a manual or automatic snapshot of a disk. The resulting disk can be attached to an Amazon Lightsail instance in the same Availability Zone (e.g., <code>us-east-2a</code>).</p> <p>The <code>create disk from snapshot</code> operation supports tag-based access control via request tags and resource tags applied to the resource identified by <code>disk snapshot name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post /#X-Amz-Target=Lightsail_20161128.CreateDiskFromSnapshot
		 * @return {CreateDiskFromSnapshotResult} Success
		 */
		CreateDiskFromSnapshot(requestBody: CreateDiskFromSnapshotRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateDiskFromSnapshotResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.CreateDiskFromSnapshot', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Creates a snapshot of a block storage disk. You can use snapshots for backups, to make copies of disks, and to save data before shutting down a Lightsail instance.</p> <p>You can take a snapshot of an attached disk that is in use; however, snapshots only capture data that has been written to your disk at the time the snapshot command is issued. This may exclude any data that has been cached by any applications or the operating system. If you can pause any file systems on the disk long enough to take a snapshot, your snapshot should be complete. Nevertheless, if you cannot pause all file writes to the disk, you should unmount the disk from within the Lightsail instance, issue the create disk snapshot command, and then remount the disk to ensure a consistent and complete snapshot. You may remount and use your disk while the snapshot status is pending.</p> <p>You can also use this operation to create a snapshot of an instance's system volume. You might want to do this, for example, to recover data from the system volume of a botched instance or to create a backup of the system volume like you would for a block storage disk. To create a snapshot of a system volume, just define the <code>instance name</code> parameter when issuing the snapshot command, and a snapshot of the defined instance's system volume will be created. After the snapshot is available, you can create a block storage disk from the snapshot and attach it to a running instance to access the data on the disk.</p> <p>The <code>create disk snapshot</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post /#X-Amz-Target=Lightsail_20161128.CreateDiskSnapshot
		 * @return {CreateDiskSnapshotResult} Success
		 */
		CreateDiskSnapshot(requestBody: CreateDiskSnapshotRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateDiskSnapshotResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.CreateDiskSnapshot', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Creates a domain resource for the specified domain (e.g., example.com).</p> <p>The <code>create domain</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post /#X-Amz-Target=Lightsail_20161128.CreateDomain
		 * @return {CreateDomainResult} Success
		 */
		CreateDomain(requestBody: CreateDomainRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateDomainResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.CreateDomain', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Creates one of the following entry records associated with the domain: Address (A), canonical name (CNAME), mail exchanger (MX), name server (NS), start of authority (SOA), service locator (SRV), or text (TXT).</p> <p>The <code>create domain entry</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>domain name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post /#X-Amz-Target=Lightsail_20161128.CreateDomainEntry
		 * @return {CreateDomainEntryResult} Success
		 */
		CreateDomainEntry(requestBody: CreateDomainEntryRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateDomainEntryResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.CreateDomainEntry', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Creates a snapshot of a specific virtual private server, or <i>instance</i>. You can use a snapshot to create a new instance that is based on that snapshot.</p> <p>The <code>create instance snapshot</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post /#X-Amz-Target=Lightsail_20161128.CreateInstanceSnapshot
		 * @return {CreateInstanceSnapshotResult} Success
		 */
		CreateInstanceSnapshot(requestBody: CreateInstanceSnapshotRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateInstanceSnapshotResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.CreateInstanceSnapshot', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Creates one or more Amazon Lightsail instances.</p> <p>The <code>create instances</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post /#X-Amz-Target=Lightsail_20161128.CreateInstances
		 * @return {CreateInstancesResult} Success
		 */
		CreateInstances(requestBody: CreateInstancesRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateInstancesResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.CreateInstances', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Creates one or more new instances from a manual or automatic snapshot of an instance.</p> <p>The <code>create instances from snapshot</code> operation supports tag-based access control via request tags and resource tags applied to the resource identified by <code>instance snapshot name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post /#X-Amz-Target=Lightsail_20161128.CreateInstancesFromSnapshot
		 * @return {CreateInstancesFromSnapshotResult} Success
		 */
		CreateInstancesFromSnapshot(requestBody: CreateInstancesFromSnapshotRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateInstancesFromSnapshotResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.CreateInstancesFromSnapshot', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Creates an SSH key pair.</p> <p>The <code>create key pair</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post /#X-Amz-Target=Lightsail_20161128.CreateKeyPair
		 * @return {CreateKeyPairResult} Success
		 */
		CreateKeyPair(requestBody: CreateKeyPairRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateKeyPairResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.CreateKeyPair', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Creates a Lightsail load balancer. To learn more about deciding whether to load balance your application, see <a href="https://lightsail.aws.amazon.com/ls/docs/how-to/article/configure-lightsail-instances-for-load-balancing">Configure your Lightsail instances for load balancing</a>. You can create up to 5 load balancers per AWS Region in your account.</p> <p>When you create a load balancer, you can specify a unique name and port settings. To change additional load balancer settings, use the <code>UpdateLoadBalancerAttribute</code> operation.</p> <p>The <code>create load balancer</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post /#X-Amz-Target=Lightsail_20161128.CreateLoadBalancer
		 * @return {CreateLoadBalancerResult} Success
		 */
		CreateLoadBalancer(requestBody: CreateLoadBalancerRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateLoadBalancerResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.CreateLoadBalancer', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Creates a Lightsail load balancer TLS certificate.</p> <p>TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p> <p>The <code>CreateLoadBalancerTlsCertificate</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post /#X-Amz-Target=Lightsail_20161128.CreateLoadBalancerTlsCertificate
		 * @return {CreateLoadBalancerTlsCertificateResult} Success
		 */
		CreateLoadBalancerTlsCertificate(requestBody: CreateLoadBalancerTlsCertificateRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateLoadBalancerTlsCertificateResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.CreateLoadBalancerTlsCertificate', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Creates a new database in Amazon Lightsail.</p> <p>The <code>create relational database</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post /#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabase
		 * @return {CreateRelationalDatabaseResult} Success
		 */
		CreateRelationalDatabase(requestBody: CreateRelationalDatabaseRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateRelationalDatabaseResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabase', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Creates a new database from an existing database snapshot in Amazon Lightsail.</p> <p>You can create a new database from a snapshot in if something goes wrong with your original database, or to change it to a different plan, such as a high availability or standard plan.</p> <p>The <code>create relational database from snapshot</code> operation supports tag-based access control via request tags and resource tags applied to the resource identified by relationalDatabaseSnapshotName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post /#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabaseFromSnapshot
		 * @return {CreateRelationalDatabaseFromSnapshotResult} Success
		 */
		CreateRelationalDatabaseFromSnapshot(requestBody: CreateRelationalDatabaseFromSnapshotRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateRelationalDatabaseFromSnapshotResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabaseFromSnapshot', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Creates a snapshot of your database in Amazon Lightsail. You can use snapshots for backups, to make copies of a database, and to save data before deleting a database.</p> <p>The <code>create relational database snapshot</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post /#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabaseSnapshot
		 * @return {CreateRelationalDatabaseSnapshotResult} Success
		 */
		CreateRelationalDatabaseSnapshot(requestBody: CreateRelationalDatabaseSnapshotRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateRelationalDatabaseSnapshotResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabaseSnapshot', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Deletes an alarm.</p> <p>An alarm is used to monitor a single metric for one of your resources. When a metric condition is met, the alarm can notify you by email, SMS text message, and a banner displayed on the Amazon Lightsail console. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p>
		 * Post /#X-Amz-Target=Lightsail_20161128.DeleteAlarm
		 * @return {DeleteAlarmResult} Success
		 */
		DeleteAlarm(requestBody: DeleteAlarmRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteAlarmResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.DeleteAlarm', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Deletes an automatic snapshot of an instance or disk. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Lightsail Dev Guide</a>.
		 * Post /#X-Amz-Target=Lightsail_20161128.DeleteAutoSnapshot
		 * @return {DeleteAutoSnapshotResult} Success
		 */
		DeleteAutoSnapshot(requestBody: DeleteAutoSnapshotRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteAutoSnapshotResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.DeleteAutoSnapshot', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Deletes a contact method.</p> <p>A contact method is used to send you notifications about your Amazon Lightsail resources. You can add one email address and one mobile phone number contact method in each AWS Region. However, SMS text messaging is not supported in some AWS Regions, and SMS text messages cannot be sent to some countries/regions. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p>
		 * Post /#X-Amz-Target=Lightsail_20161128.DeleteContactMethod
		 * @return {DeleteContactMethodResult} Success
		 */
		DeleteContactMethod(requestBody: DeleteContactMethodRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteContactMethodResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.DeleteContactMethod', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Deletes the specified block storage disk. The disk must be in the <code>available</code> state (not attached to a Lightsail instance).</p> <note> <p>The disk may remain in the <code>deleting</code> state for several minutes.</p> </note> <p>The <code>delete disk</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>disk name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post /#X-Amz-Target=Lightsail_20161128.DeleteDisk
		 * @return {DeleteDiskResult} Success
		 */
		DeleteDisk(requestBody: DeleteDiskRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteDiskResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.DeleteDisk', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Deletes the specified disk snapshot.</p> <p>When you make periodic snapshots of a disk, the snapshots are incremental, and only the blocks on the device that have changed since your last snapshot are saved in the new snapshot. When you delete a snapshot, only the data not needed for any other snapshot is removed. So regardless of which prior snapshots have been deleted, all active snapshots will have access to all the information needed to restore the disk.</p> <p>The <code>delete disk snapshot</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>disk snapshot name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post /#X-Amz-Target=Lightsail_20161128.DeleteDiskSnapshot
		 * @return {DeleteDiskSnapshotResult} Success
		 */
		DeleteDiskSnapshot(requestBody: DeleteDiskSnapshotRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteDiskSnapshotResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.DeleteDiskSnapshot', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Deletes the specified domain recordset and all of its domain records.</p> <p>The <code>delete domain</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>domain name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post /#X-Amz-Target=Lightsail_20161128.DeleteDomain
		 * @return {DeleteDomainResult} Success
		 */
		DeleteDomain(requestBody: DeleteDomainRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteDomainResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.DeleteDomain', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Deletes a specific domain entry.</p> <p>The <code>delete domain entry</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>domain name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post /#X-Amz-Target=Lightsail_20161128.DeleteDomainEntry
		 * @return {DeleteDomainEntryResult} Success
		 */
		DeleteDomainEntry(requestBody: DeleteDomainEntryRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteDomainEntryResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.DeleteDomainEntry', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Deletes an Amazon Lightsail instance.</p> <p>The <code>delete instance</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post /#X-Amz-Target=Lightsail_20161128.DeleteInstance
		 * @return {DeleteInstanceResult} Success
		 */
		DeleteInstance(requestBody: DeleteInstanceRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteInstanceResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.DeleteInstance', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Deletes a specific snapshot of a virtual private server (or <i>instance</i>).</p> <p>The <code>delete instance snapshot</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance snapshot name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post /#X-Amz-Target=Lightsail_20161128.DeleteInstanceSnapshot
		 * @return {DeleteInstanceSnapshotResult} Success
		 */
		DeleteInstanceSnapshot(requestBody: DeleteInstanceSnapshotRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteInstanceSnapshotResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.DeleteInstanceSnapshot', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Deletes a specific SSH key pair.</p> <p>The <code>delete key pair</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>key pair name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post /#X-Amz-Target=Lightsail_20161128.DeleteKeyPair
		 * @return {DeleteKeyPairResult} Success
		 */
		DeleteKeyPair(requestBody: DeleteKeyPairRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteKeyPairResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.DeleteKeyPair', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Deletes the known host key or certificate used by the Amazon Lightsail browser-based SSH or RDP clients to authenticate an instance. This operation enables the Lightsail browser-based SSH or RDP clients to connect to the instance after a host key mismatch.</p> <important> <p>Perform this operation only if you were expecting the host key or certificate mismatch or if you are familiar with the new host key or certificate on the instance. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-troubleshooting-browser-based-ssh-rdp-client-connection">Troubleshooting connection issues when using the Amazon Lightsail browser-based SSH or RDP client</a>.</p> </important>
		 * Post /#X-Amz-Target=Lightsail_20161128.DeleteKnownHostKeys
		 * @return {DeleteKnownHostKeysResult} Success
		 */
		DeleteKnownHostKeys(requestBody: DeleteKnownHostKeysRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteKnownHostKeysResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.DeleteKnownHostKeys', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Deletes a Lightsail load balancer and all its associated SSL/TLS certificates. Once the load balancer is deleted, you will need to create a new load balancer, create a new certificate, and verify domain ownership again.</p> <p>The <code>delete load balancer</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post /#X-Amz-Target=Lightsail_20161128.DeleteLoadBalancer
		 * @return {DeleteLoadBalancerResult} Success
		 */
		DeleteLoadBalancer(requestBody: DeleteLoadBalancerRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteLoadBalancerResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.DeleteLoadBalancer', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Deletes an SSL/TLS certificate associated with a Lightsail load balancer.</p> <p>The <code>DeleteLoadBalancerTlsCertificate</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post /#X-Amz-Target=Lightsail_20161128.DeleteLoadBalancerTlsCertificate
		 * @return {DeleteLoadBalancerTlsCertificateResult} Success
		 */
		DeleteLoadBalancerTlsCertificate(requestBody: DeleteLoadBalancerTlsCertificateRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteLoadBalancerTlsCertificateResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.DeleteLoadBalancerTlsCertificate', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Deletes a database in Amazon Lightsail.</p> <p>The <code>delete relational database</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post /#X-Amz-Target=Lightsail_20161128.DeleteRelationalDatabase
		 * @return {DeleteRelationalDatabaseResult} Success
		 */
		DeleteRelationalDatabase(requestBody: DeleteRelationalDatabaseRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteRelationalDatabaseResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.DeleteRelationalDatabase', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Deletes a database snapshot in Amazon Lightsail.</p> <p>The <code>delete relational database snapshot</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post /#X-Amz-Target=Lightsail_20161128.DeleteRelationalDatabaseSnapshot
		 * @return {DeleteRelationalDatabaseSnapshotResult} Success
		 */
		DeleteRelationalDatabaseSnapshot(requestBody: DeleteRelationalDatabaseSnapshotRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteRelationalDatabaseSnapshotResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.DeleteRelationalDatabaseSnapshot', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Detaches a stopped block storage disk from a Lightsail instance. Make sure to unmount any file systems on the device within your operating system before stopping the instance and detaching the disk.</p> <p>The <code>detach disk</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>disk name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post /#X-Amz-Target=Lightsail_20161128.DetachDisk
		 * @return {DetachDiskResult} Success
		 */
		DetachDisk(requestBody: DetachDiskRequest, headersHandler?: () => {[header: string]: string}): Promise<DetachDiskResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.DetachDisk', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Detaches the specified instances from a Lightsail load balancer.</p> <p>This operation waits until the instances are no longer needed before they are detached from the load balancer.</p> <p>The <code>detach instances from load balancer</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post /#X-Amz-Target=Lightsail_20161128.DetachInstancesFromLoadBalancer
		 * @return {DetachInstancesFromLoadBalancerResult} Success
		 */
		DetachInstancesFromLoadBalancer(requestBody: DetachInstancesFromLoadBalancerRequest, headersHandler?: () => {[header: string]: string}): Promise<DetachInstancesFromLoadBalancerResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.DetachInstancesFromLoadBalancer', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Detaches a static IP from the Amazon Lightsail instance to which it is attached.
		 * Post /#X-Amz-Target=Lightsail_20161128.DetachStaticIp
		 * @return {DetachStaticIpResult} Success
		 */
		DetachStaticIp(requestBody: DetachStaticIpRequest, headersHandler?: () => {[header: string]: string}): Promise<DetachStaticIpResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.DetachStaticIp', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Disables an add-on for an Amazon Lightsail resource. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Lightsail Dev Guide</a>.
		 * Post /#X-Amz-Target=Lightsail_20161128.DisableAddOn
		 * @return {DisableAddOnResult} Success
		 */
		DisableAddOn(requestBody: DisableAddOnRequest, headersHandler?: () => {[header: string]: string}): Promise<DisableAddOnResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.DisableAddOn', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Downloads the default SSH key pair from the user's account.
		 * Post /#X-Amz-Target=Lightsail_20161128.DownloadDefaultKeyPair
		 * @return {DownloadDefaultKeyPairResult} Success
		 */
		DownloadDefaultKeyPair(requestBody: DownloadDefaultKeyPairRequest, headersHandler?: () => {[header: string]: string}): Promise<DownloadDefaultKeyPairResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.DownloadDefaultKeyPair', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Enables or modifies an add-on for an Amazon Lightsail resource. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Lightsail Dev Guide</a>.
		 * Post /#X-Amz-Target=Lightsail_20161128.EnableAddOn
		 * @return {EnableAddOnResult} Success
		 */
		EnableAddOn(requestBody: EnableAddOnRequest, headersHandler?: () => {[header: string]: string}): Promise<EnableAddOnResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.EnableAddOn', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Exports an Amazon Lightsail instance or block storage disk snapshot to Amazon Elastic Compute Cloud (Amazon EC2). This operation results in an export snapshot record that can be used with the <code>create cloud formation stack</code> operation to create new Amazon EC2 instances.</p> <p>Exported instance snapshots appear in Amazon EC2 as Amazon Machine Images (AMIs), and the instance system disk appears as an Amazon Elastic Block Store (Amazon EBS) volume. Exported disk snapshots appear in Amazon EC2 as Amazon EBS volumes. Snapshots are exported to the same Amazon Web Services Region in Amazon EC2 as the source Lightsail snapshot.</p> <p/> <p>The <code>export snapshot</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>source snapshot name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p> <note> <p>Use the <code>get instance snapshots</code> or <code>get disk snapshots</code> operations to get a list of snapshots that you can export to Amazon EC2.</p> </note>
		 * Post /#X-Amz-Target=Lightsail_20161128.ExportSnapshot
		 * @return {ExportSnapshotResult} Success
		 */
		ExportSnapshot(requestBody: ExportSnapshotRequest, headersHandler?: () => {[header: string]: string}): Promise<ExportSnapshotResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.ExportSnapshot', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns the names of all active (not deleted) resources.
		 * Post /#X-Amz-Target=Lightsail_20161128.GetActiveNames
		 * @return {GetActiveNamesResult} Success
		 */
		GetActiveNames(requestBody: GetActiveNamesRequest, headersHandler?: () => {[header: string]: string}): Promise<GetActiveNamesResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.GetActiveNames', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Returns information about the configured alarms. Specify an alarm name in your request to return information about a specific alarm, or specify a monitored resource name to return information about all alarms for a specific resource.</p> <p>An alarm is used to monitor a single metric for one of your resources. When a metric condition is met, the alarm can notify you by email, SMS text message, and a banner displayed on the Amazon Lightsail console. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p>
		 * Post /#X-Amz-Target=Lightsail_20161128.GetAlarms
		 * @return {GetAlarmsResult} Success
		 */
		GetAlarms(requestBody: GetAlarmsRequest, headersHandler?: () => {[header: string]: string}): Promise<GetAlarmsResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.GetAlarms', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns the available automatic snapshots for an instance or disk. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Lightsail Dev Guide</a>.
		 * Post /#X-Amz-Target=Lightsail_20161128.GetAutoSnapshots
		 * @return {GetAutoSnapshotsResult} Success
		 */
		GetAutoSnapshots(requestBody: GetAutoSnapshotsRequest, headersHandler?: () => {[header: string]: string}): Promise<GetAutoSnapshotsResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.GetAutoSnapshots', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Returns the list of available instance images, or <i>blueprints</i>. You can use a blueprint to create a new instance already running a specific operating system, as well as a preinstalled app or development stack. The software each instance is running depends on the blueprint image you choose.</p> <note> <p>Use active blueprints when creating new instances. Inactive blueprints are listed to support customers with existing instances and are not necessarily available to create new instances. Blueprints are marked inactive when they become outdated due to operating system updates or new application releases.</p> </note>
		 * Post /#X-Amz-Target=Lightsail_20161128.GetBlueprints
		 * @return {GetBlueprintsResult} Success
		 */
		GetBlueprints(requestBody: GetBlueprintsRequest, headersHandler?: () => {[header: string]: string}): Promise<GetBlueprintsResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.GetBlueprints', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns the list of bundles that are available for purchase. A bundle describes the specs for your virtual private server (or <i>instance</i>).
		 * Post /#X-Amz-Target=Lightsail_20161128.GetBundles
		 * @return {GetBundlesResult} Success
		 */
		GetBundles(requestBody: GetBundlesRequest, headersHandler?: () => {[header: string]: string}): Promise<GetBundlesResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.GetBundles', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Returns the CloudFormation stack record created as a result of the <code>create cloud formation stack</code> operation.</p> <p>An AWS CloudFormation stack is used to create a new Amazon EC2 instance from an exported Lightsail snapshot.</p>
		 * Post /#X-Amz-Target=Lightsail_20161128.GetCloudFormationStackRecords
		 * @return {GetCloudFormationStackRecordsResult} Success
		 */
		GetCloudFormationStackRecords(requestBody: GetCloudFormationStackRecordsRequest, headersHandler?: () => {[header: string]: string}): Promise<GetCloudFormationStackRecordsResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.GetCloudFormationStackRecords', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Returns information about the configured contact methods. Specify a protocol in your request to return information about a specific contact method.</p> <p>A contact method is used to send you notifications about your Amazon Lightsail resources. You can add one email address and one mobile phone number contact method in each AWS Region. However, SMS text messaging is not supported in some AWS Regions, and SMS text messages cannot be sent to some countries/regions. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p>
		 * Post /#X-Amz-Target=Lightsail_20161128.GetContactMethods
		 * @return {GetContactMethodsResult} Success
		 */
		GetContactMethods(requestBody: GetContactMethodsRequest, headersHandler?: () => {[header: string]: string}): Promise<GetContactMethodsResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.GetContactMethods', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns information about a specific block storage disk.
		 * Post /#X-Amz-Target=Lightsail_20161128.GetDisk
		 * @return {GetDiskResult} Success
		 */
		GetDisk(requestBody: GetDiskRequest, headersHandler?: () => {[header: string]: string}): Promise<GetDiskResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.GetDisk', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns information about a specific block storage disk snapshot.
		 * Post /#X-Amz-Target=Lightsail_20161128.GetDiskSnapshot
		 * @return {GetDiskSnapshotResult} Success
		 */
		GetDiskSnapshot(requestBody: GetDiskSnapshotRequest, headersHandler?: () => {[header: string]: string}): Promise<GetDiskSnapshotResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.GetDiskSnapshot', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns information about all block storage disk snapshots in your AWS account and region.
		 * Post /#X-Amz-Target=Lightsail_20161128.GetDiskSnapshots
		 * @return {GetDiskSnapshotsResult} Success
		 */
		GetDiskSnapshots(requestBody: GetDiskSnapshotsRequest, headersHandler?: () => {[header: string]: string}): Promise<GetDiskSnapshotsResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.GetDiskSnapshots', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns information about all block storage disks in your AWS account and region.
		 * Post /#X-Amz-Target=Lightsail_20161128.GetDisks
		 * @return {GetDisksResult} Success
		 */
		GetDisks(requestBody: GetDisksRequest, headersHandler?: () => {[header: string]: string}): Promise<GetDisksResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.GetDisks', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns information about a specific domain recordset.
		 * Post /#X-Amz-Target=Lightsail_20161128.GetDomain
		 * @return {GetDomainResult} Success
		 */
		GetDomain(requestBody: GetDomainRequest, headersHandler?: () => {[header: string]: string}): Promise<GetDomainResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.GetDomain', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns a list of all domains in the user's account.
		 * Post /#X-Amz-Target=Lightsail_20161128.GetDomains
		 * @return {GetDomainsResult} Success
		 */
		GetDomains(requestBody: GetDomainsRequest, headersHandler?: () => {[header: string]: string}): Promise<GetDomainsResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.GetDomains', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Returns the export snapshot record created as a result of the <code>export snapshot</code> operation.</p> <p>An export snapshot record can be used to create a new Amazon EC2 instance and its related resources with the <code>create cloud formation stack</code> operation.</p>
		 * Post /#X-Amz-Target=Lightsail_20161128.GetExportSnapshotRecords
		 * @return {GetExportSnapshotRecordsResult} Success
		 */
		GetExportSnapshotRecords(requestBody: GetExportSnapshotRecordsRequest, headersHandler?: () => {[header: string]: string}): Promise<GetExportSnapshotRecordsResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.GetExportSnapshotRecords', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns information about a specific Amazon Lightsail instance, which is a virtual private server.
		 * Post /#X-Amz-Target=Lightsail_20161128.GetInstance
		 * @return {GetInstanceResult} Success
		 */
		GetInstance(requestBody: GetInstanceRequest, headersHandler?: () => {[header: string]: string}): Promise<GetInstanceResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.GetInstance', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Returns temporary SSH keys you can use to connect to a specific virtual private server, or <i>instance</i>.</p> <p>The <code>get instance access details</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post /#X-Amz-Target=Lightsail_20161128.GetInstanceAccessDetails
		 * @return {GetInstanceAccessDetailsResult} Success
		 */
		GetInstanceAccessDetails(requestBody: GetInstanceAccessDetailsRequest, headersHandler?: () => {[header: string]: string}): Promise<GetInstanceAccessDetailsResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.GetInstanceAccessDetails', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Returns the data points for the specified Amazon Lightsail instance metric, given an instance name.</p> <p>Metrics report the utilization of your resources, and the error counts generated by them. Monitor and collect metric data regularly to maintain the reliability, availability, and performance of your resources.</p>
		 * Post /#X-Amz-Target=Lightsail_20161128.GetInstanceMetricData
		 * @return {GetInstanceMetricDataResult} Success
		 */
		GetInstanceMetricData(requestBody: GetInstanceMetricDataRequest, headersHandler?: () => {[header: string]: string}): Promise<GetInstanceMetricDataResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.GetInstanceMetricData', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns the firewall port states for a specific Amazon Lightsail instance, the IP addresses allowed to connect to the instance through the ports, and the protocol.
		 * Post /#X-Amz-Target=Lightsail_20161128.GetInstancePortStates
		 * @return {GetInstancePortStatesResult} Success
		 */
		GetInstancePortStates(requestBody: GetInstancePortStatesRequest, headersHandler?: () => {[header: string]: string}): Promise<GetInstancePortStatesResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.GetInstancePortStates', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns information about a specific instance snapshot.
		 * Post /#X-Amz-Target=Lightsail_20161128.GetInstanceSnapshot
		 * @return {GetInstanceSnapshotResult} Success
		 */
		GetInstanceSnapshot(requestBody: GetInstanceSnapshotRequest, headersHandler?: () => {[header: string]: string}): Promise<GetInstanceSnapshotResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.GetInstanceSnapshot', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns all instance snapshots for the user's account.
		 * Post /#X-Amz-Target=Lightsail_20161128.GetInstanceSnapshots
		 * @return {GetInstanceSnapshotsResult} Success
		 */
		GetInstanceSnapshots(requestBody: GetInstanceSnapshotsRequest, headersHandler?: () => {[header: string]: string}): Promise<GetInstanceSnapshotsResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.GetInstanceSnapshots', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns the state of a specific instance. Works on one instance at a time.
		 * Post /#X-Amz-Target=Lightsail_20161128.GetInstanceState
		 * @return {GetInstanceStateResult} Success
		 */
		GetInstanceState(requestBody: GetInstanceStateRequest, headersHandler?: () => {[header: string]: string}): Promise<GetInstanceStateResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.GetInstanceState', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns information about all Amazon Lightsail virtual private servers, or <i>instances</i>.
		 * Post /#X-Amz-Target=Lightsail_20161128.GetInstances
		 * @return {GetInstancesResult} Success
		 */
		GetInstances(requestBody: GetInstancesRequest, headersHandler?: () => {[header: string]: string}): Promise<GetInstancesResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.GetInstances', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns information about a specific key pair.
		 * Post /#X-Amz-Target=Lightsail_20161128.GetKeyPair
		 * @return {GetKeyPairResult} Success
		 */
		GetKeyPair(requestBody: GetKeyPairRequest, headersHandler?: () => {[header: string]: string}): Promise<GetKeyPairResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.GetKeyPair', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns information about all key pairs in the user's account.
		 * Post /#X-Amz-Target=Lightsail_20161128.GetKeyPairs
		 * @return {GetKeyPairsResult} Success
		 */
		GetKeyPairs(requestBody: GetKeyPairsRequest, headersHandler?: () => {[header: string]: string}): Promise<GetKeyPairsResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.GetKeyPairs', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns information about the specified Lightsail load balancer.
		 * Post /#X-Amz-Target=Lightsail_20161128.GetLoadBalancer
		 * @return {GetLoadBalancerResult} Success
		 */
		GetLoadBalancer(requestBody: GetLoadBalancerRequest, headersHandler?: () => {[header: string]: string}): Promise<GetLoadBalancerResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.GetLoadBalancer', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Returns information about health metrics for your Lightsail load balancer.</p> <p>Metrics report the utilization of your resources, and the error counts generated by them. Monitor and collect metric data regularly to maintain the reliability, availability, and performance of your resources.</p>
		 * Post /#X-Amz-Target=Lightsail_20161128.GetLoadBalancerMetricData
		 * @return {GetLoadBalancerMetricDataResult} Success
		 */
		GetLoadBalancerMetricData(requestBody: GetLoadBalancerMetricDataRequest, headersHandler?: () => {[header: string]: string}): Promise<GetLoadBalancerMetricDataResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.GetLoadBalancerMetricData', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Returns information about the TLS certificates that are associated with the specified Lightsail load balancer.</p> <p>TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p> <p>You can have a maximum of 2 certificates associated with a Lightsail load balancer. One is active and the other is inactive.</p>
		 * Post /#X-Amz-Target=Lightsail_20161128.GetLoadBalancerTlsCertificates
		 * @return {GetLoadBalancerTlsCertificatesResult} Success
		 */
		GetLoadBalancerTlsCertificates(requestBody: GetLoadBalancerTlsCertificatesRequest, headersHandler?: () => {[header: string]: string}): Promise<GetLoadBalancerTlsCertificatesResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.GetLoadBalancerTlsCertificates', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns information about all load balancers in an account.
		 * Post /#X-Amz-Target=Lightsail_20161128.GetLoadBalancers
		 * @return {GetLoadBalancersResult} Success
		 */
		GetLoadBalancers(requestBody: GetLoadBalancersRequest, headersHandler?: () => {[header: string]: string}): Promise<GetLoadBalancersResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.GetLoadBalancers', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns information about a specific operation. Operations include events such as when you create an instance, allocate a static IP, attach a static IP, and so on.
		 * Post /#X-Amz-Target=Lightsail_20161128.GetOperation
		 * @return {GetOperationResult} Success
		 */
		GetOperation(requestBody: GetOperationRequest, headersHandler?: () => {[header: string]: string}): Promise<GetOperationResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.GetOperation', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Returns information about all operations.</p> <p>Results are returned from oldest to newest, up to a maximum of 200. Results can be paged by making each subsequent call to <code>GetOperations</code> use the maximum (last) <code>statusChangedAt</code> value from the previous request.</p>
		 * Post /#X-Amz-Target=Lightsail_20161128.GetOperations
		 * @return {GetOperationsResult} Success
		 */
		GetOperations(requestBody: GetOperationsRequest, headersHandler?: () => {[header: string]: string}): Promise<GetOperationsResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.GetOperations', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Gets operations for a specific resource (e.g., an instance or a static IP).
		 * Post /#X-Amz-Target=Lightsail_20161128.GetOperationsForResource
		 * @return {GetOperationsForResourceResult} Success
		 */
		GetOperationsForResource(requestBody: GetOperationsForResourceRequest, headersHandler?: () => {[header: string]: string}): Promise<GetOperationsForResourceResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.GetOperationsForResource', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns a list of all valid regions for Amazon Lightsail. Use the <code>include availability zones</code> parameter to also return the Availability Zones in a region.
		 * Post /#X-Amz-Target=Lightsail_20161128.GetRegions
		 * @return {GetRegionsResult} Success
		 */
		GetRegions(requestBody: GetRegionsRequest, headersHandler?: () => {[header: string]: string}): Promise<GetRegionsResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.GetRegions', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns information about a specific database in Amazon Lightsail.
		 * Post /#X-Amz-Target=Lightsail_20161128.GetRelationalDatabase
		 * @return {GetRelationalDatabaseResult} Success
		 */
		GetRelationalDatabase(requestBody: GetRelationalDatabaseRequest, headersHandler?: () => {[header: string]: string}): Promise<GetRelationalDatabaseResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabase', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Returns a list of available database blueprints in Amazon Lightsail. A blueprint describes the major engine version of a database.</p> <p>You can use a blueprint ID to create a new database that runs a specific database engine.</p>
		 * Post /#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseBlueprints
		 * @return {GetRelationalDatabaseBlueprintsResult} Success
		 */
		GetRelationalDatabaseBlueprints(requestBody: GetRelationalDatabaseBlueprintsRequest, headersHandler?: () => {[header: string]: string}): Promise<GetRelationalDatabaseBlueprintsResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseBlueprints', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Returns the list of bundles that are available in Amazon Lightsail. A bundle describes the performance specifications for a database.</p> <p>You can use a bundle ID to create a new database with explicit performance specifications.</p>
		 * Post /#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseBundles
		 * @return {GetRelationalDatabaseBundlesResult} Success
		 */
		GetRelationalDatabaseBundles(requestBody: GetRelationalDatabaseBundlesRequest, headersHandler?: () => {[header: string]: string}): Promise<GetRelationalDatabaseBundlesResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseBundles', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns a list of events for a specific database in Amazon Lightsail.
		 * Post /#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseEvents
		 * @return {GetRelationalDatabaseEventsResult} Success
		 */
		GetRelationalDatabaseEvents(requestBody: GetRelationalDatabaseEventsRequest, headersHandler?: () => {[header: string]: string}): Promise<GetRelationalDatabaseEventsResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseEvents', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns a list of log events for a database in Amazon Lightsail.
		 * Post /#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseLogEvents
		 * @return {GetRelationalDatabaseLogEventsResult} Success
		 */
		GetRelationalDatabaseLogEvents(requestBody: GetRelationalDatabaseLogEventsRequest, headersHandler?: () => {[header: string]: string}): Promise<GetRelationalDatabaseLogEventsResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseLogEvents', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns a list of available log streams for a specific database in Amazon Lightsail.
		 * Post /#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseLogStreams
		 * @return {GetRelationalDatabaseLogStreamsResult} Success
		 */
		GetRelationalDatabaseLogStreams(requestBody: GetRelationalDatabaseLogStreamsRequest, headersHandler?: () => {[header: string]: string}): Promise<GetRelationalDatabaseLogStreamsResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseLogStreams', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Returns the current, previous, or pending versions of the master user password for a Lightsail database.</p> <p>The <code>GetRelationalDatabaseMasterUserPassword</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName.</p>
		 * Post /#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseMasterUserPassword
		 * @return {GetRelationalDatabaseMasterUserPasswordResult} Success
		 */
		GetRelationalDatabaseMasterUserPassword(requestBody: GetRelationalDatabaseMasterUserPasswordRequest, headersHandler?: () => {[header: string]: string}): Promise<GetRelationalDatabaseMasterUserPasswordResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseMasterUserPassword', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Returns the data points of the specified metric for a database in Amazon Lightsail.</p> <p>Metrics report the utilization of your resources, and the error counts generated by them. Monitor and collect metric data regularly to maintain the reliability, availability, and performance of your resources.</p>
		 * Post /#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseMetricData
		 * @return {GetRelationalDatabaseMetricDataResult} Success
		 */
		GetRelationalDatabaseMetricData(requestBody: GetRelationalDatabaseMetricDataRequest, headersHandler?: () => {[header: string]: string}): Promise<GetRelationalDatabaseMetricDataResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseMetricData', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Returns all of the runtime parameters offered by the underlying database software, or engine, for a specific database in Amazon Lightsail.</p> <p>In addition to the parameter names and values, this operation returns other information about each parameter. This information includes whether changes require a reboot, whether the parameter is modifiable, the allowed values, and the data types.</p>
		 * Post /#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseParameters
		 * @return {GetRelationalDatabaseParametersResult} Success
		 */
		GetRelationalDatabaseParameters(requestBody: GetRelationalDatabaseParametersRequest, headersHandler?: () => {[header: string]: string}): Promise<GetRelationalDatabaseParametersResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseParameters', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns information about a specific database snapshot in Amazon Lightsail.
		 * Post /#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseSnapshot
		 * @return {GetRelationalDatabaseSnapshotResult} Success
		 */
		GetRelationalDatabaseSnapshot(requestBody: GetRelationalDatabaseSnapshotRequest, headersHandler?: () => {[header: string]: string}): Promise<GetRelationalDatabaseSnapshotResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseSnapshot', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns information about all of your database snapshots in Amazon Lightsail.
		 * Post /#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseSnapshots
		 * @return {GetRelationalDatabaseSnapshotsResult} Success
		 */
		GetRelationalDatabaseSnapshots(requestBody: GetRelationalDatabaseSnapshotsRequest, headersHandler?: () => {[header: string]: string}): Promise<GetRelationalDatabaseSnapshotsResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseSnapshots', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns information about all of your databases in Amazon Lightsail.
		 * Post /#X-Amz-Target=Lightsail_20161128.GetRelationalDatabases
		 * @return {GetRelationalDatabasesResult} Success
		 */
		GetRelationalDatabases(requestBody: GetRelationalDatabasesRequest, headersHandler?: () => {[header: string]: string}): Promise<GetRelationalDatabasesResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabases', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns information about a specific static IP.
		 * Post /#X-Amz-Target=Lightsail_20161128.GetStaticIp
		 * @return {GetStaticIpResult} Success
		 */
		GetStaticIp(requestBody: GetStaticIpRequest, headersHandler?: () => {[header: string]: string}): Promise<GetStaticIpResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.GetStaticIp', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns information about all static IPs in the user's account.
		 * Post /#X-Amz-Target=Lightsail_20161128.GetStaticIps
		 * @return {GetStaticIpsResult} Success
		 */
		GetStaticIps(requestBody: GetStaticIpsRequest, headersHandler?: () => {[header: string]: string}): Promise<GetStaticIpsResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.GetStaticIps', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Imports a public SSH key from a specific key pair.
		 * Post /#X-Amz-Target=Lightsail_20161128.ImportKeyPair
		 * @return {ImportKeyPairResult} Success
		 */
		ImportKeyPair(requestBody: ImportKeyPairRequest, headersHandler?: () => {[header: string]: string}): Promise<ImportKeyPairResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.ImportKeyPair', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns a Boolean value indicating whether your Lightsail VPC is peered.
		 * Post /#X-Amz-Target=Lightsail_20161128.IsVpcPeered
		 * @return {IsVpcPeeredResult} Success
		 */
		IsVpcPeered(requestBody: IsVpcPeeredRequest, headersHandler?: () => {[header: string]: string}): Promise<IsVpcPeeredResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.IsVpcPeered', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Opens ports for a specific Amazon Lightsail instance, and specifies the IP addresses allowed to connect to the instance through the ports, and the protocol.</p> <p>The <code>OpenInstancePublicPorts</code> action supports tag-based access control via resource tags applied to the resource identified by <code>instanceName</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post /#X-Amz-Target=Lightsail_20161128.OpenInstancePublicPorts
		 * @return {OpenInstancePublicPortsResult} Success
		 */
		OpenInstancePublicPorts(requestBody: OpenInstancePublicPortsRequest, headersHandler?: () => {[header: string]: string}): Promise<OpenInstancePublicPortsResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.OpenInstancePublicPorts', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Tries to peer the Lightsail VPC with the user's default VPC.
		 * Post /#X-Amz-Target=Lightsail_20161128.PeerVpc
		 * @return {PeerVpcResult} Success
		 */
		PeerVpc(requestBody: PeerVpcRequest, headersHandler?: () => {[header: string]: string}): Promise<PeerVpcResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.PeerVpc', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Creates or updates an alarm, and associates it with the specified metric.</p> <p>An alarm is used to monitor a single metric for one of your resources. When a metric condition is met, the alarm can notify you by email, SMS text message, and a banner displayed on the Amazon Lightsail console. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p> <p>When this action creates an alarm, the alarm state is immediately set to <code>INSUFFICIENT_DATA</code>. The alarm is then evaluated and its state is set appropriately. Any actions associated with the new state are then executed.</p> <p>When you update an existing alarm, its state is left unchanged, but the update completely overwrites the previous configuration of the alarm. The alarm is then evaluated with the updated configuration.</p>
		 * Post /#X-Amz-Target=Lightsail_20161128.PutAlarm
		 * @return {PutAlarmResult} Success
		 */
		PutAlarm(requestBody: PutAlarmRequest, headersHandler?: () => {[header: string]: string}): Promise<PutAlarmResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.PutAlarm', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Opens ports for a specific Amazon Lightsail instance, and specifies the IP addresses allowed to connect to the instance through the ports, and the protocol. This action also closes all currently open ports that are not included in the request. Include all of the ports and the protocols you want to open in your <code>PutInstancePublicPorts</code>request. Or use the <code>OpenInstancePublicPorts</code> action to open ports without closing currently open ports.</p> <p>The <code>PutInstancePublicPorts</code> action supports tag-based access control via resource tags applied to the resource identified by <code>instanceName</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post /#X-Amz-Target=Lightsail_20161128.PutInstancePublicPorts
		 * @return {PutInstancePublicPortsResult} Success
		 */
		PutInstancePublicPorts(requestBody: PutInstancePublicPortsRequest, headersHandler?: () => {[header: string]: string}): Promise<PutInstancePublicPortsResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.PutInstancePublicPorts', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Restarts a specific instance.</p> <p>The <code>reboot instance</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post /#X-Amz-Target=Lightsail_20161128.RebootInstance
		 * @return {RebootInstanceResult} Success
		 */
		RebootInstance(requestBody: RebootInstanceRequest, headersHandler?: () => {[header: string]: string}): Promise<RebootInstanceResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.RebootInstance', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Restarts a specific database in Amazon Lightsail.</p> <p>The <code>reboot relational database</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post /#X-Amz-Target=Lightsail_20161128.RebootRelationalDatabase
		 * @return {RebootRelationalDatabaseResult} Success
		 */
		RebootRelationalDatabase(requestBody: RebootRelationalDatabaseRequest, headersHandler?: () => {[header: string]: string}): Promise<RebootRelationalDatabaseResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.RebootRelationalDatabase', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Deletes a specific static IP from your account.
		 * Post /#X-Amz-Target=Lightsail_20161128.ReleaseStaticIp
		 * @return {ReleaseStaticIpResult} Success
		 */
		ReleaseStaticIp(requestBody: ReleaseStaticIpRequest, headersHandler?: () => {[header: string]: string}): Promise<ReleaseStaticIpResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.ReleaseStaticIp', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Sends a verification request to an email contact method to ensure it's owned by the requester. SMS contact methods don't need to be verified.</p> <p>A contact method is used to send you notifications about your Amazon Lightsail resources. You can add one email address and one mobile phone number contact method in each AWS Region. However, SMS text messaging is not supported in some AWS Regions, and SMS text messages cannot be sent to some countries/regions. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p> <p>A verification request is sent to the contact method when you initially create it. Use this action to send another verification request if a previous verification request was deleted, or has expired.</p> <important> <p>Notifications are not sent to an email contact method until after it is verified, and confirmed as valid.</p> </important>
		 * Post /#X-Amz-Target=Lightsail_20161128.SendContactMethodVerification
		 * @return {SendContactMethodVerificationResult} Success
		 */
		SendContactMethodVerification(requestBody: SendContactMethodVerificationRequest, headersHandler?: () => {[header: string]: string}): Promise<SendContactMethodVerificationResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.SendContactMethodVerification', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Starts a specific Amazon Lightsail instance from a stopped state. To restart an instance, use the <code>reboot instance</code> operation.</p> <note> <p>When you start a stopped instance, Lightsail assigns a new public IP address to the instance. To use the same IP address after stopping and starting an instance, create a static IP address and attach it to the instance. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/lightsail-create-static-ip">Lightsail Dev Guide</a>.</p> </note> <p>The <code>start instance</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post /#X-Amz-Target=Lightsail_20161128.StartInstance
		 * @return {StartInstanceResult} Success
		 */
		StartInstance(requestBody: StartInstanceRequest, headersHandler?: () => {[header: string]: string}): Promise<StartInstanceResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.StartInstance', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Starts a specific database from a stopped state in Amazon Lightsail. To restart a database, use the <code>reboot relational database</code> operation.</p> <p>The <code>start relational database</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post /#X-Amz-Target=Lightsail_20161128.StartRelationalDatabase
		 * @return {StartRelationalDatabaseResult} Success
		 */
		StartRelationalDatabase(requestBody: StartRelationalDatabaseRequest, headersHandler?: () => {[header: string]: string}): Promise<StartRelationalDatabaseResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.StartRelationalDatabase', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Stops a specific Amazon Lightsail instance that is currently running.</p> <note> <p>When you start a stopped instance, Lightsail assigns a new public IP address to the instance. To use the same IP address after stopping and starting an instance, create a static IP address and attach it to the instance. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/lightsail-create-static-ip">Lightsail Dev Guide</a>.</p> </note> <p>The <code>stop instance</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post /#X-Amz-Target=Lightsail_20161128.StopInstance
		 * @return {StopInstanceResult} Success
		 */
		StopInstance(requestBody: StopInstanceRequest, headersHandler?: () => {[header: string]: string}): Promise<StopInstanceResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.StopInstance', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Stops a specific database that is currently running in Amazon Lightsail.</p> <p>The <code>stop relational database</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post /#X-Amz-Target=Lightsail_20161128.StopRelationalDatabase
		 * @return {StopRelationalDatabaseResult} Success
		 */
		StopRelationalDatabase(requestBody: StopRelationalDatabaseRequest, headersHandler?: () => {[header: string]: string}): Promise<StopRelationalDatabaseResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.StopRelationalDatabase', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Adds one or more tags to the specified Amazon Lightsail resource. Each resource can have a maximum of 50 tags. Each tag consists of a key and an optional value. Tag keys must be unique per resource. For more information about tags, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-tags">Lightsail Dev Guide</a>.</p> <p>The <code>tag resource</code> operation supports tag-based access control via request tags and resource tags applied to the resource identified by <code>resource name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post /#X-Amz-Target=Lightsail_20161128.TagResource
		 * @return {TagResourceResult} Success
		 */
		TagResource(requestBody: TagResourceRequest, headersHandler?: () => {[header: string]: string}): Promise<TagResourceResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.TagResource', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Tests an alarm by displaying a banner on the Amazon Lightsail console. If a notification trigger is configured for the specified alarm, the test also sends a notification to the notification protocol (<code>Email</code> and/or <code>SMS</code>) configured for the alarm.</p> <p>An alarm is used to monitor a single metric for one of your resources. When a metric condition is met, the alarm can notify you by email, SMS text message, and a banner displayed on the Amazon Lightsail console. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p>
		 * Post /#X-Amz-Target=Lightsail_20161128.TestAlarm
		 * @return {TestAlarmResult} Success
		 */
		TestAlarm(requestBody: TestAlarmRequest, headersHandler?: () => {[header: string]: string}): Promise<TestAlarmResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.TestAlarm', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Attempts to unpeer the Lightsail VPC from the user's default VPC.
		 * Post /#X-Amz-Target=Lightsail_20161128.UnpeerVpc
		 * @return {UnpeerVpcResult} Success
		 */
		UnpeerVpc(requestBody: UnpeerVpcRequest, headersHandler?: () => {[header: string]: string}): Promise<UnpeerVpcResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.UnpeerVpc', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Deletes the specified set of tag keys and their values from the specified Amazon Lightsail resource.</p> <p>The <code>untag resource</code> operation supports tag-based access control via request tags and resource tags applied to the resource identified by <code>resource name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post /#X-Amz-Target=Lightsail_20161128.UntagResource
		 * @return {UntagResourceResult} Success
		 */
		UntagResource(requestBody: UntagResourceRequest, headersHandler?: () => {[header: string]: string}): Promise<UntagResourceResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.UntagResource', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Updates a domain recordset after it is created.</p> <p>The <code>update domain entry</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>domain name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post /#X-Amz-Target=Lightsail_20161128.UpdateDomainEntry
		 * @return {UpdateDomainEntryResult} Success
		 */
		UpdateDomainEntry(requestBody: UpdateDomainEntryRequest, headersHandler?: () => {[header: string]: string}): Promise<UpdateDomainEntryResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.UpdateDomainEntry', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Updates the specified attribute for a load balancer. You can only update one attribute at a time.</p> <p>The <code>update load balancer attribute</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post /#X-Amz-Target=Lightsail_20161128.UpdateLoadBalancerAttribute
		 * @return {UpdateLoadBalancerAttributeResult} Success
		 */
		UpdateLoadBalancerAttribute(requestBody: UpdateLoadBalancerAttributeRequest, headersHandler?: () => {[header: string]: string}): Promise<UpdateLoadBalancerAttributeResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.UpdateLoadBalancerAttribute', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Allows the update of one or more attributes of a database in Amazon Lightsail.</p> <p>Updates are applied immediately, or in cases where the updates could result in an outage, are applied during the database's predefined maintenance window.</p> <p>The <code>update relational database</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post /#X-Amz-Target=Lightsail_20161128.UpdateRelationalDatabase
		 * @return {UpdateRelationalDatabaseResult} Success
		 */
		UpdateRelationalDatabase(requestBody: UpdateRelationalDatabaseRequest, headersHandler?: () => {[header: string]: string}): Promise<UpdateRelationalDatabaseResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.UpdateRelationalDatabase', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Allows the update of one or more parameters of a database in Amazon Lightsail.</p> <p>Parameter updates don't cause outages; therefore, their application is not subject to the preferred maintenance window. However, there are two ways in which parameter updates are applied: <code>dynamic</code> or <code>pending-reboot</code>. Parameters marked with a <code>dynamic</code> apply type are applied immediately. Parameters marked with a <code>pending-reboot</code> apply type are applied only after the database is rebooted using the <code>reboot relational database</code> operation.</p> <p>The <code>update relational database parameters</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post /#X-Amz-Target=Lightsail_20161128.UpdateRelationalDatabaseParameters
		 * @return {UpdateRelationalDatabaseParametersResult} Success
		 */
		UpdateRelationalDatabaseParameters(requestBody: UpdateRelationalDatabaseParametersRequest, headersHandler?: () => {[header: string]: string}): Promise<UpdateRelationalDatabaseParametersResult> {
			return fetch(this.baseUri + '/#X-Amz-Target=Lightsail_20161128.UpdateRelationalDatabaseParameters', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}
	}

}

