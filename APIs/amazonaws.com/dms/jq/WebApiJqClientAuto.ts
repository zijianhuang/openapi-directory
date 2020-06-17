///<reference path="HttpClient.ts" />
namespace My_Demo_Client {

	/**Associates a set of tags with an AWS DMS resource. */
	export interface AddTagsToResourceMessage {
		ResourceArn: string;
		Tags: Array<Tag>;
	}


	/**<p/> */
	export interface ApplyPendingMaintenanceActionResponse {

		/**Identifies an AWS DMS resource and any pending actions for it. */
		ResourcePendingMaintenanceActions?: ResourcePendingMaintenanceActions;
	}


	/**<p/> */
	export interface ApplyPendingMaintenanceActionMessage {
		ReplicationInstanceArn: string;
		ApplyAction: string;
		OptInType: string;
	}


	/**<p/> */
	export interface CreateEndpointResponse {

		/**<p>Describes an endpoint of a database instance in response to operations such as the following:</p> <ul> <li> <p> <code>CreateEndpoint</code> </p> </li> <li> <p> <code>DescribeEndpoint</code> </p> </li> <li> <p> <code>DescribeEndpointTypes</code> </p> </li> <li> <p> <code>ModifyEndpoint</code> </p> </li> </ul> */
		Endpoint?: Endpoint;
	}


	/**<p/> */
	export interface CreateEndpointMessage {
		EndpointIdentifier: string;
		EndpointType: CreateEndpointMessageEndpointType;
		EngineName: string;
		Username?: string;
		Password?: string;
		ServerName?: string;
		Port?: number;
		DatabaseName?: string;
		ExtraConnectionAttributes?: string;
		KmsKeyId?: string;
		Tags?: Array<Tag>;
		CertificateArn?: string;
		SslMode?: CreateEndpointMessageSslMode;
		ServiceAccessRoleArn?: string;
		ExternalTableDefinition?: string;

		/**Provides the Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role used to define an Amazon DynamoDB target endpoint. */
		DynamoDbSettings?: DynamoDbSettings;

		/**Settings for exporting data to Amazon S3. */
		S3Settings?: S3Settings;

		/**The settings in JSON format for the DMS Transfer type source endpoint. */
		DmsTransferSettings?: DmsTransferSettings;

		/**Provides information that defines a MongoDB endpoint. */
		MongoDbSettings?: MongoDbSettings;

		/**Provides information that describes an Amazon Kinesis Data Stream endpoint. This information includes the output format of records applied to the endpoint and details of transaction and control table data information. */
		KinesisSettings?: KinesisSettings;

		/**Provides information that describes an Apache Kafka endpoint. This information includes the output format of records applied to the endpoint and details of transaction and control table data information. */
		KafkaSettings?: KafkaSettings;

		/**Provides information that defines an Elasticsearch endpoint. */
		ElasticsearchSettings?: ElasticsearchSettings;

		/**Provides information that defines an Amazon Neptune endpoint. */
		NeptuneSettings?: NeptuneSettings;

		/**Provides information that defines an Amazon Redshift endpoint. */
		RedshiftSettings?: RedshiftSettings;
	}

	export enum CreateEndpointMessageEndpointType { source = 0, target = 1 }

	export enum CreateEndpointMessageSslMode { none = 0, require = 1, verify-ca = 2, verify-full = 3 }


	/**<p/> */
	export interface CreateEventSubscriptionResponse {

		/**Describes an event notification subscription created by the <code>CreateEventSubscription</code> operation. */
		EventSubscription?: EventSubscription;
	}


	/**<p/> */
	export interface CreateEventSubscriptionMessage {
		SubscriptionName: string;
		SnsTopicArn: string;
		SourceType?: string;
		EventCategories?: Array<String>;
		SourceIds?: Array<String>;
		Enabled?: boolean;
		Tags?: Array<Tag>;
	}


	/**<p/> */
	export interface CreateReplicationInstanceResponse {

		/**Provides information that defines a replication instance. */
		ReplicationInstance?: ReplicationInstance;
	}


	/**<p/> */
	export interface CreateReplicationInstanceMessage {
		ReplicationInstanceIdentifier: string;
		AllocatedStorage?: number;
		ReplicationInstanceClass: string;
		VpcSecurityGroupIds?: Array<String>;
		AvailabilityZone?: string;
		ReplicationSubnetGroupIdentifier?: string;
		PreferredMaintenanceWindow?: string;
		MultiAZ?: boolean;
		EngineVersion?: string;
		AutoMinorVersionUpgrade?: boolean;
		Tags?: Array<Tag>;
		KmsKeyId?: string;
		PubliclyAccessible?: boolean;
		DnsNameServers?: string;
	}


	/**<p/> */
	export interface CreateReplicationSubnetGroupResponse {

		/**Describes a subnet group in response to a request by the <code>DescribeReplicationSubnetGroup</code> operation. */
		ReplicationSubnetGroup?: ReplicationSubnetGroup;
	}


	/**<p/> */
	export interface CreateReplicationSubnetGroupMessage {
		ReplicationSubnetGroupIdentifier: string;
		ReplicationSubnetGroupDescription: string;
		SubnetIds: Array<String>;
		Tags?: Array<Tag>;
	}


	/**<p/> */
	export interface CreateReplicationTaskResponse {

		/**Provides information that describes a replication task created by the <code>CreateReplicationTask</code> operation. */
		ReplicationTask?: ReplicationTask;
	}


	/**<p/> */
	export interface CreateReplicationTaskMessage {
		ReplicationTaskIdentifier: string;
		SourceEndpointArn: string;
		TargetEndpointArn: string;
		ReplicationInstanceArn: string;
		MigrationType: CreateReplicationTaskMessageMigrationType;
		TableMappings: string;
		ReplicationTaskSettings?: string;
		CdcStartTime?: Date;
		CdcStartPosition?: string;
		CdcStopPosition?: string;
		Tags?: Array<Tag>;
		TaskData?: string;
	}

	export enum CreateReplicationTaskMessageMigrationType { full-load = 0, cdc = 1, full-load-and-cdc = 2 }

	export interface DeleteCertificateResponse {

		/**The SSL certificate that can be used to encrypt connections between the endpoints and the replication instance. */
		Certificate?: Certificate;
	}

	export interface DeleteCertificateMessage {
		CertificateArn: string;
	}


	/**<p/> */
	export interface DeleteConnectionResponse {

		/**Status of the connection between an endpoint and a replication instance, including Amazon Resource Names (ARNs) and the last error message issued. */
		Connection?: Connection;
	}


	/**<p/> */
	export interface DeleteConnectionMessage {
		EndpointArn: string;
		ReplicationInstanceArn: string;
	}


	/**<p/> */
	export interface DeleteEndpointResponse {

		/**<p>Describes an endpoint of a database instance in response to operations such as the following:</p> <ul> <li> <p> <code>CreateEndpoint</code> </p> </li> <li> <p> <code>DescribeEndpoint</code> </p> </li> <li> <p> <code>DescribeEndpointTypes</code> </p> </li> <li> <p> <code>ModifyEndpoint</code> </p> </li> </ul> */
		Endpoint?: Endpoint;
	}


	/**<p/> */
	export interface DeleteEndpointMessage {
		EndpointArn: string;
	}


	/**<p/> */
	export interface DeleteEventSubscriptionResponse {

		/**Describes an event notification subscription created by the <code>CreateEventSubscription</code> operation. */
		EventSubscription?: EventSubscription;
	}


	/**<p/> */
	export interface DeleteEventSubscriptionMessage {
		SubscriptionName: string;
	}


	/**<p/> */
	export interface DeleteReplicationInstanceResponse {

		/**Provides information that defines a replication instance. */
		ReplicationInstance?: ReplicationInstance;
	}


	/**<p/> */
	export interface DeleteReplicationInstanceMessage {
		ReplicationInstanceArn: string;
	}


	/**<p/> */
	export interface DeleteReplicationSubnetGroupMessage {
		ReplicationSubnetGroupIdentifier: string;
	}


	/**<p/> */
	export interface DeleteReplicationTaskResponse {

		/**Provides information that describes a replication task created by the <code>CreateReplicationTask</code> operation. */
		ReplicationTask?: ReplicationTask;
	}


	/**<p/> */
	export interface DeleteReplicationTaskMessage {
		ReplicationTaskArn: string;
	}


	/**<p/> */
	export interface DescribeAccountAttributesResponse {
		AccountQuotas?: Array<AccountQuota>;
		UniqueAccountIdentifier?: string;
	}

	export interface DescribeCertificatesResponse {
		Marker?: string;
		Certificates?: Array<Certificate>;
	}

	export interface DescribeCertificatesMessage {
		Filters?: Array<Filter>;
		MaxRecords?: number;
		Marker?: string;
	}


	/**<p/> */
	export interface DescribeConnectionsResponse {
		Marker?: string;
		Connections?: Array<Connection>;
	}


	/**<p/> */
	export interface DescribeConnectionsMessage {
		Filters?: Array<Filter>;
		MaxRecords?: number;
		Marker?: string;
	}


	/**<p/> */
	export interface DescribeEndpointTypesResponse {
		Marker?: string;
		SupportedEndpointTypes?: Array<SupportedEndpointType>;
	}


	/**<p/> */
	export interface DescribeEndpointTypesMessage {
		Filters?: Array<Filter>;
		MaxRecords?: number;
		Marker?: string;
	}


	/**<p/> */
	export interface DescribeEndpointsResponse {
		Marker?: string;
		Endpoints?: Array<Endpoint>;
	}


	/**<p/> */
	export interface DescribeEndpointsMessage {
		Filters?: Array<Filter>;
		MaxRecords?: number;
		Marker?: string;
	}


	/**<p/> */
	export interface DescribeEventCategoriesResponse {
		EventCategoryGroupList?: Array<EventCategoryGroup>;
	}


	/**<p/> */
	export interface DescribeEventCategoriesMessage {
		SourceType?: string;
		Filters?: Array<Filter>;
	}


	/**<p/> */
	export interface DescribeEventSubscriptionsResponse {
		Marker?: string;
		EventSubscriptionsList?: Array<EventSubscription>;
	}


	/**<p/> */
	export interface DescribeEventSubscriptionsMessage {
		SubscriptionName?: string;
		Filters?: Array<Filter>;
		MaxRecords?: number;
		Marker?: string;
	}


	/**<p/> */
	export interface DescribeEventsResponse {
		Marker?: string;
		Events?: Array<Event>;
	}


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

	export enum DescribeEventsMessageSourceType { replication-instance = 0 }


	/**<p/> */
	export interface DescribeOrderableReplicationInstancesResponse {
		OrderableReplicationInstances?: Array<OrderableReplicationInstance>;
		Marker?: string;
	}


	/**<p/> */
	export interface DescribeOrderableReplicationInstancesMessage {
		MaxRecords?: number;
		Marker?: string;
	}


	/**<p/> */
	export interface DescribePendingMaintenanceActionsResponse {
		PendingMaintenanceActions?: Array<ResourcePendingMaintenanceActions>;
		Marker?: string;
	}


	/**<p/> */
	export interface DescribePendingMaintenanceActionsMessage {
		ReplicationInstanceArn?: string;
		Filters?: Array<Filter>;
		Marker?: string;
		MaxRecords?: number;
	}


	/**<p/> */
	export interface DescribeRefreshSchemasStatusResponse {

		/**Provides information that describes status of a schema at an endpoint specified by the <code>DescribeRefreshSchemaStatus</code> operation. */
		RefreshSchemasStatus?: RefreshSchemasStatus;
	}


	/**<p/> */
	export interface DescribeRefreshSchemasStatusMessage {
		EndpointArn: string;
	}

	export interface DescribeReplicationInstanceTaskLogsResponse {
		ReplicationInstanceArn?: string;
		ReplicationInstanceTaskLogs?: Array<ReplicationInstanceTaskLog>;
		Marker?: string;
	}

	export interface DescribeReplicationInstanceTaskLogsMessage {
		ReplicationInstanceArn: string;
		MaxRecords?: number;
		Marker?: string;
	}


	/**<p/> */
	export interface DescribeReplicationInstancesResponse {
		Marker?: string;
		ReplicationInstances?: Array<ReplicationInstance>;
	}


	/**<p/> */
	export interface DescribeReplicationInstancesMessage {
		Filters?: Array<Filter>;
		MaxRecords?: number;
		Marker?: string;
	}


	/**<p/> */
	export interface DescribeReplicationSubnetGroupsResponse {
		Marker?: string;
		ReplicationSubnetGroups?: Array<ReplicationSubnetGroup>;
	}


	/**<p/> */
	export interface DescribeReplicationSubnetGroupsMessage {
		Filters?: Array<Filter>;
		MaxRecords?: number;
		Marker?: string;
	}


	/**<p/> */
	export interface DescribeReplicationTaskAssessmentResultsResponse {
		Marker?: string;
		BucketName?: string;
		ReplicationTaskAssessmentResults?: Array<ReplicationTaskAssessmentResult>;
	}


	/**<p/> */
	export interface DescribeReplicationTaskAssessmentResultsMessage {
		ReplicationTaskArn?: string;
		MaxRecords?: number;
		Marker?: string;
	}


	/**<p/> */
	export interface DescribeReplicationTasksResponse {
		Marker?: string;
		ReplicationTasks?: Array<ReplicationTask>;
	}


	/**<p/> */
	export interface DescribeReplicationTasksMessage {
		Filters?: Array<Filter>;
		MaxRecords?: number;
		Marker?: string;
		WithoutSettings?: boolean;
	}


	/**<p/> */
	export interface DescribeSchemasResponse {
		Marker?: string;
		Schemas?: Array<String>;
	}


	/**<p/> */
	export interface DescribeSchemasMessage {
		EndpointArn: string;
		MaxRecords?: number;
		Marker?: string;
	}


	/**<p/> */
	export interface DescribeTableStatisticsResponse {
		ReplicationTaskArn?: string;
		TableStatistics?: Array<TableStatistics>;
		Marker?: string;
	}


	/**<p/> */
	export interface DescribeTableStatisticsMessage {
		ReplicationTaskArn: string;
		MaxRecords?: number;
		Marker?: string;
		Filters?: Array<Filter>;
	}

	export interface ImportCertificateResponse {

		/**The SSL certificate that can be used to encrypt connections between the endpoints and the replication instance. */
		Certificate?: Certificate;
	}

	export interface ImportCertificateMessage {
		CertificateIdentifier: string;
		CertificatePem?: string;
		CertificateWallet?: string;
		Tags?: Array<Tag>;
	}


	/**<p/> */
	export interface ListTagsForResourceResponse {
		TagList?: Array<Tag>;
	}


	/**<p/> */
	export interface ListTagsForResourceMessage {
		ResourceArn: string;
	}


	/**<p/> */
	export interface ModifyEndpointResponse {

		/**<p>Describes an endpoint of a database instance in response to operations such as the following:</p> <ul> <li> <p> <code>CreateEndpoint</code> </p> </li> <li> <p> <code>DescribeEndpoint</code> </p> </li> <li> <p> <code>DescribeEndpointTypes</code> </p> </li> <li> <p> <code>ModifyEndpoint</code> </p> </li> </ul> */
		Endpoint?: Endpoint;
	}


	/**<p/> */
	export interface ModifyEndpointMessage {
		EndpointArn: string;
		EndpointIdentifier?: string;
		EndpointType?: ModifyEndpointMessageEndpointType;
		EngineName?: string;
		Username?: string;
		Password?: string;
		ServerName?: string;
		Port?: number;
		DatabaseName?: string;
		ExtraConnectionAttributes?: string;
		CertificateArn?: string;
		SslMode?: ModifyEndpointMessageSslMode;
		ServiceAccessRoleArn?: string;
		ExternalTableDefinition?: string;

		/**Provides the Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role used to define an Amazon DynamoDB target endpoint. */
		DynamoDbSettings?: DynamoDbSettings;

		/**Settings for exporting data to Amazon S3. */
		S3Settings?: S3Settings;

		/**The settings in JSON format for the DMS Transfer type source endpoint. */
		DmsTransferSettings?: DmsTransferSettings;

		/**Provides information that defines a MongoDB endpoint. */
		MongoDbSettings?: MongoDbSettings;

		/**Provides information that describes an Amazon Kinesis Data Stream endpoint. This information includes the output format of records applied to the endpoint and details of transaction and control table data information. */
		KinesisSettings?: KinesisSettings;

		/**Provides information that describes an Apache Kafka endpoint. This information includes the output format of records applied to the endpoint and details of transaction and control table data information. */
		KafkaSettings?: KafkaSettings;

		/**Provides information that defines an Elasticsearch endpoint. */
		ElasticsearchSettings?: ElasticsearchSettings;

		/**Provides information that defines an Amazon Neptune endpoint. */
		NeptuneSettings?: NeptuneSettings;

		/**Provides information that defines an Amazon Redshift endpoint. */
		RedshiftSettings?: RedshiftSettings;
	}

	export enum ModifyEndpointMessageEndpointType { source = 0, target = 1 }

	export enum ModifyEndpointMessageSslMode { none = 0, require = 1, verify-ca = 2, verify-full = 3 }


	/**<p/> */
	export interface ModifyEventSubscriptionResponse {

		/**Describes an event notification subscription created by the <code>CreateEventSubscription</code> operation. */
		EventSubscription?: EventSubscription;
	}


	/**<p/> */
	export interface ModifyEventSubscriptionMessage {
		SubscriptionName: string;
		SnsTopicArn?: string;
		SourceType?: string;
		EventCategories?: Array<String>;
		Enabled?: boolean;
	}


	/**<p/> */
	export interface ModifyReplicationInstanceResponse {

		/**Provides information that defines a replication instance. */
		ReplicationInstance?: ReplicationInstance;
	}


	/**<p/> */
	export interface ModifyReplicationInstanceMessage {
		ReplicationInstanceArn: string;
		AllocatedStorage?: number;
		ApplyImmediately?: boolean;
		ReplicationInstanceClass?: string;
		VpcSecurityGroupIds?: Array<String>;
		PreferredMaintenanceWindow?: string;
		MultiAZ?: boolean;
		EngineVersion?: string;
		AllowMajorVersionUpgrade?: boolean;
		AutoMinorVersionUpgrade?: boolean;
		ReplicationInstanceIdentifier?: string;
	}


	/**<p/> */
	export interface ModifyReplicationSubnetGroupResponse {

		/**Describes a subnet group in response to a request by the <code>DescribeReplicationSubnetGroup</code> operation. */
		ReplicationSubnetGroup?: ReplicationSubnetGroup;
	}


	/**<p/> */
	export interface ModifyReplicationSubnetGroupMessage {
		ReplicationSubnetGroupIdentifier: string;
		ReplicationSubnetGroupDescription?: string;
		SubnetIds: Array<String>;
	}


	/**<p/> */
	export interface ModifyReplicationTaskResponse {

		/**Provides information that describes a replication task created by the <code>CreateReplicationTask</code> operation. */
		ReplicationTask?: ReplicationTask;
	}


	/**<p/> */
	export interface ModifyReplicationTaskMessage {
		ReplicationTaskArn: string;
		ReplicationTaskIdentifier?: string;
		MigrationType?: ModifyReplicationTaskMessageMigrationType;
		TableMappings?: string;
		ReplicationTaskSettings?: string;
		CdcStartTime?: Date;
		CdcStartPosition?: string;
		CdcStopPosition?: string;
		TaskData?: string;
	}

	export enum ModifyReplicationTaskMessageMigrationType { full-load = 0, cdc = 1, full-load-and-cdc = 2 }

	export interface RebootReplicationInstanceResponse {

		/**Provides information that defines a replication instance. */
		ReplicationInstance?: ReplicationInstance;
	}

	export interface RebootReplicationInstanceMessage {
		ReplicationInstanceArn: string;
		ForceFailover?: boolean;
	}


	/**<p/> */
	export interface RefreshSchemasResponse {

		/**Provides information that describes status of a schema at an endpoint specified by the <code>DescribeRefreshSchemaStatus</code> operation. */
		RefreshSchemasStatus?: RefreshSchemasStatus;
	}


	/**<p/> */
	export interface RefreshSchemasMessage {
		EndpointArn: string;
		ReplicationInstanceArn: string;
	}

	export interface ReloadTablesResponse {
		ReplicationTaskArn?: string;
	}

	export interface ReloadTablesMessage {
		ReplicationTaskArn: string;
		TablesToReload: Array<TableToReload>;
		ReloadOption?: ReloadTablesMessageReloadOption;
	}

	export enum ReloadTablesMessageReloadOption { data-reload = 0, validate-only = 1 }


	/**Removes one or more tags from an AWS DMS resource. */
	export interface RemoveTagsFromResourceMessage {
		ResourceArn: string;
		TagKeys: Array<String>;
	}


	/**<p/> */
	export interface StartReplicationTaskResponse {

		/**Provides information that describes a replication task created by the <code>CreateReplicationTask</code> operation. */
		ReplicationTask?: ReplicationTask;
	}


	/**<p/> */
	export interface StartReplicationTaskMessage {
		ReplicationTaskArn: string;
		StartReplicationTaskType: StartReplicationTaskMessageStartReplicationTaskType;
		CdcStartTime?: Date;
		CdcStartPosition?: string;
		CdcStopPosition?: string;
	}

	export enum StartReplicationTaskMessageStartReplicationTaskType { start-replication = 0, resume-processing = 1, reload-target = 2 }


	/**<p/> */
	export interface StartReplicationTaskAssessmentResponse {

		/**Provides information that describes a replication task created by the <code>CreateReplicationTask</code> operation. */
		ReplicationTask?: ReplicationTask;
	}


	/**<p/> */
	export interface StartReplicationTaskAssessmentMessage {
		ReplicationTaskArn: string;
	}


	/**<p/> */
	export interface StopReplicationTaskResponse {

		/**Provides information that describes a replication task created by the <code>CreateReplicationTask</code> operation. */
		ReplicationTask?: ReplicationTask;
	}


	/**<p/> */
	export interface StopReplicationTaskMessage {
		ReplicationTaskArn: string;
	}


	/**<p/> */
	export interface TestConnectionResponse {

		/**Status of the connection between an endpoint and a replication instance, including Amazon Resource Names (ARNs) and the last error message issued. */
		Connection?: Connection;
	}


	/**<p/> */
	export interface TestConnectionMessage {
		ReplicationInstanceArn: string;
		EndpointArn: string;
	}


	/**Describes a quota for an AWS account, for example, the number of replication instances allowed. */
	export interface AccountQuota {
		AccountQuotaName?: string;
		Used?: number;
		Max?: number;
	}


	/**Identifies an AWS DMS resource and any pending actions for it. */
	export interface ResourcePendingMaintenanceActions {
		ResourceIdentifier?: string;
		PendingMaintenanceActionDetails?: Array<PendingMaintenanceAction>;
	}

	export enum AuthMechanismValue { default = 0, mongodb_cr = 1, scram_sha_1 = 2 }

	export enum AuthTypeValue { no = 0, password = 1 }


	/**The name of the Availability Zone for use during database migration. */
	export interface AvailabilityZone {
		Name?: string;
	}


	/**The SSL certificate that can be used to encrypt connections between the endpoints and the replication instance. */
	export interface Certificate {
		CertificateIdentifier?: string;
		CertificateCreationDate?: Date;
		CertificatePem?: string;
		CertificateWallet?: string;
		CertificateArn?: string;
		CertificateOwner?: string;
		ValidFromDate?: Date;
		ValidToDate?: Date;
		SigningAlgorithm?: string;
		KeyLength?: number;
	}

	export enum CompressionTypeValue { none = 0, gzip = 1 }


	/**Status of the connection between an endpoint and a replication instance, including Amazon Resource Names (ARNs) and the last error message issued. */
	export interface Connection {
		ReplicationInstanceArn?: string;
		EndpointArn?: string;
		Status?: string;
		LastFailureMessage?: string;
		EndpointIdentifier?: string;
		ReplicationInstanceIdentifier?: string;
	}

	export enum ReplicationEndpointTypeValue { source = 0, target = 1 }

	export enum DmsSslModeValue { none = 0, require = 1, verify-ca = 2, verify-full = 3 }


	/**Provides the Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role used to define an Amazon DynamoDB target endpoint. */
	export interface DynamoDbSettings {
		ServiceAccessRoleArn: string;
	}


	/**Settings for exporting data to Amazon S3.  */
	export interface S3Settings {
		ServiceAccessRoleArn?: string;
		ExternalTableDefinition?: string;
		CsvRowDelimiter?: string;
		CsvDelimiter?: string;
		BucketFolder?: string;
		BucketName?: string;
		CompressionType?: S3SettingsCompressionType;
		EncryptionMode?: S3SettingsEncryptionMode;
		ServerSideEncryptionKmsKeyId?: string;
		DataFormat?: S3SettingsDataFormat;
		EncodingType?: S3SettingsEncodingType;
		DictPageSizeLimit?: number;
		RowGroupLength?: number;
		DataPageSize?: number;
		ParquetVersion?: S3SettingsParquetVersion;
		EnableStatistics?: boolean;
		IncludeOpForFullLoad?: boolean;
		CdcInsertsOnly?: boolean;
		TimestampColumnName?: string;
		ParquetTimestampInMillisecond?: boolean;
		CdcInsertsAndUpdates?: boolean;
	}

	export enum S3SettingsCompressionType { none = 0, gzip = 1 }

	export enum S3SettingsEncryptionMode { sse-s3 = 0, sse-kms = 1 }

	export enum S3SettingsDataFormat { csv = 0, parquet = 1 }

	export enum S3SettingsEncodingType { plain = 0, plain-dictionary = 1, rle-dictionary = 2 }

	export enum S3SettingsParquetVersion { parquet-1-0 = 0, parquet-2-0 = 1 }


	/** The settings in JSON format for the DMS Transfer type source endpoint.  */
	export interface DmsTransferSettings {
		ServiceAccessRoleArn?: string;
		BucketName?: string;
	}


	/**Provides information that defines a MongoDB endpoint. */
	export interface MongoDbSettings {
		Username?: string;
		Password?: string;
		ServerName?: string;
		Port?: number;
		DatabaseName?: string;
		AuthType?: MongoDbSettingsAuthType;
		AuthMechanism?: MongoDbSettingsAuthMechanism;
		NestingLevel?: MongoDbSettingsNestingLevel;
		ExtractDocId?: string;
		DocsToInvestigate?: string;
		AuthSource?: string;
		KmsKeyId?: string;
	}

	export enum MongoDbSettingsAuthType { no = 0, password = 1 }

	export enum MongoDbSettingsAuthMechanism { default = 0, mongodb_cr = 1, scram_sha_1 = 2 }

	export enum MongoDbSettingsNestingLevel { none = 0, one = 1 }


	/**Provides information that describes an Amazon Kinesis Data Stream endpoint. This information includes the output format of records applied to the endpoint and details of transaction and control table data information. */
	export interface KinesisSettings {
		StreamArn?: string;
		MessageFormat?: KinesisSettingsMessageFormat;
		ServiceAccessRoleArn?: string;
		IncludeTransactionDetails?: boolean;
		IncludePartitionValue?: boolean;
		PartitionIncludeSchemaTable?: boolean;
		IncludeTableAlterOperations?: boolean;
		IncludeControlDetails?: boolean;
	}

	export enum KinesisSettingsMessageFormat { json = 0, json-unformatted = 1 }


	/**Provides information that describes an Apache Kafka endpoint. This information includes the output format of records applied to the endpoint and details of transaction and control table data information. */
	export interface KafkaSettings {
		Broker?: string;
		Topic?: string;
	}


	/**Provides information that defines an Elasticsearch endpoint. */
	export interface ElasticsearchSettings {
		ServiceAccessRoleArn: string;
		EndpointUri: string;
		FullLoadErrorPercentage?: number;
		ErrorRetryDuration?: number;
	}


	/**Provides information that defines an Amazon Neptune endpoint. */
	export interface NeptuneSettings {
		ServiceAccessRoleArn?: string;
		S3BucketName: string;
		S3BucketFolder: string;
		ErrorRetryDuration?: number;
		MaxFileSize?: number;
		MaxRetryCount?: number;
		IamAuthEnabled?: boolean;
	}


	/**Provides information that defines an Amazon Redshift endpoint. */
	export interface RedshiftSettings {
		AcceptAnyDate?: boolean;
		AfterConnectScript?: string;
		BucketFolder?: string;
		BucketName?: string;
		ConnectionTimeout?: number;
		DatabaseName?: string;
		DateFormat?: string;
		EmptyAsNull?: boolean;
		EncryptionMode?: RedshiftSettingsEncryptionMode;
		FileTransferUploadStreams?: number;
		LoadTimeout?: number;
		MaxFileSize?: number;
		Password?: string;
		Port?: number;
		RemoveQuotes?: boolean;
		ReplaceInvalidChars?: string;
		ReplaceChars?: string;
		ServerName?: string;
		ServiceAccessRoleArn?: string;
		ServerSideEncryptionKmsKeyId?: string;
		TimeFormat?: string;
		TrimBlanks?: boolean;
		TruncateColumns?: boolean;
		Username?: string;
		WriteBufferSize?: number;
	}

	export enum RedshiftSettingsEncryptionMode { sse-s3 = 0, sse-kms = 1 }


	/**<p>Describes an endpoint of a database instance in response to operations such as the following:</p> <ul> <li> <p> <code>CreateEndpoint</code> </p> </li> <li> <p> <code>DescribeEndpoint</code> </p> </li> <li> <p> <code>DescribeEndpointTypes</code> </p> </li> <li> <p> <code>ModifyEndpoint</code> </p> </li> </ul> */
	export interface Endpoint {
		EndpointIdentifier?: string;
		EndpointType?: EndpointEndpointType;
		EngineName?: string;
		EngineDisplayName?: string;
		Username?: string;
		ServerName?: string;
		Port?: number;
		DatabaseName?: string;
		ExtraConnectionAttributes?: string;
		Status?: string;
		KmsKeyId?: string;
		EndpointArn?: string;
		CertificateArn?: string;
		SslMode?: EndpointSslMode;
		ServiceAccessRoleArn?: string;
		ExternalTableDefinition?: string;
		ExternalId?: string;

		/**Provides the Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role used to define an Amazon DynamoDB target endpoint. */
		DynamoDbSettings?: DynamoDbSettings;

		/**Settings for exporting data to Amazon S3. */
		S3Settings?: S3Settings;

		/**The settings in JSON format for the DMS Transfer type source endpoint. */
		DmsTransferSettings?: DmsTransferSettings;

		/**Provides information that defines a MongoDB endpoint. */
		MongoDbSettings?: MongoDbSettings;

		/**Provides information that describes an Amazon Kinesis Data Stream endpoint. This information includes the output format of records applied to the endpoint and details of transaction and control table data information. */
		KinesisSettings?: KinesisSettings;

		/**Provides information that describes an Apache Kafka endpoint. This information includes the output format of records applied to the endpoint and details of transaction and control table data information. */
		KafkaSettings?: KafkaSettings;

		/**Provides information that defines an Elasticsearch endpoint. */
		ElasticsearchSettings?: ElasticsearchSettings;

		/**Provides information that defines an Amazon Neptune endpoint. */
		NeptuneSettings?: NeptuneSettings;

		/**Provides information that defines an Amazon Redshift endpoint. */
		RedshiftSettings?: RedshiftSettings;
	}

	export enum EndpointEndpointType { source = 0, target = 1 }

	export enum EndpointSslMode { none = 0, require = 1, verify-ca = 2, verify-full = 3 }


	/**Describes an event notification subscription created by the <code>CreateEventSubscription</code> operation. */
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
	}


	/**Provides information that defines a replication instance. */
	export interface ReplicationInstance {
		ReplicationInstanceIdentifier?: string;
		ReplicationInstanceClass?: string;
		ReplicationInstanceStatus?: string;
		AllocatedStorage?: number;
		InstanceCreateTime?: Date;
		VpcSecurityGroups?: Array<VpcSecurityGroupMembership>;
		AvailabilityZone?: string;

		/**Describes a subnet group in response to a request by the <code>DescribeReplicationSubnetGroup</code> operation. */
		ReplicationSubnetGroup?: ReplicationSubnetGroup;
		PreferredMaintenanceWindow?: string;

		/**Provides information about the values of pending modifications to a replication instance. This data type is an object of the <code>ReplicationInstance</code> user-defined data type. */
		PendingModifiedValues?: ReplicationPendingModifiedValues;
		MultiAZ?: boolean;
		EngineVersion?: string;
		AutoMinorVersionUpgrade?: boolean;
		KmsKeyId?: string;
		ReplicationInstanceArn?: string;
		ReplicationInstancePublicIpAddress?: string;
		ReplicationInstancePrivateIpAddress?: string;
		ReplicationInstancePublicIpAddresses?: Array<String>;
		ReplicationInstancePrivateIpAddresses?: Array<String>;
		PubliclyAccessible?: boolean;
		SecondaryAvailabilityZone?: string;
		FreeUntil?: Date;
		DnsNameServers?: string;
	}


	/**Describes a subnet group in response to a request by the <code>DescribeReplicationSubnetGroup</code> operation. */
	export interface ReplicationSubnetGroup {
		ReplicationSubnetGroupIdentifier?: string;
		ReplicationSubnetGroupDescription?: string;
		VpcId?: string;
		SubnetGroupStatus?: string;
		Subnets?: Array<Subnet>;
	}

	export enum MigrationTypeValue { full-load = 0, cdc = 1, full-load-and-cdc = 2 }


	/**Provides information that describes a replication task created by the <code>CreateReplicationTask</code> operation. */
	export interface ReplicationTask {
		ReplicationTaskIdentifier?: string;
		SourceEndpointArn?: string;
		TargetEndpointArn?: string;
		ReplicationInstanceArn?: string;
		MigrationType?: ReplicationTaskMigrationType;
		TableMappings?: string;
		ReplicationTaskSettings?: string;
		Status?: string;
		LastFailureMessage?: string;
		StopReason?: string;
		ReplicationTaskCreationDate?: Date;
		ReplicationTaskStartDate?: Date;
		CdcStartPosition?: string;
		CdcStopPosition?: string;
		RecoveryCheckpoint?: string;
		ReplicationTaskArn?: string;

		/**In response to a request by the <code>DescribeReplicationTasks</code> operation, this object provides a collection of statistics about a replication task. */
		ReplicationTaskStats?: ReplicationTaskStats;
		TaskData?: string;
	}

	export enum ReplicationTaskMigrationType { full-load = 0, cdc = 1, full-load-and-cdc = 2 }

	export enum DataFormatValue { csv = 0, parquet = 1 }

	export enum SourceType { replication-instance = 0 }


	/**Provides information that describes status of a schema at an endpoint specified by the <code>DescribeRefreshSchemaStatus</code> operation. */
	export interface RefreshSchemasStatus {
		EndpointArn?: string;
		ReplicationInstanceArn?: string;
		Status?: RefreshSchemasStatusStatus;
		LastRefreshDate?: Date;
		LastFailureMessage?: string;
	}

	export enum RefreshSchemasStatusStatus { successful = 0, failed = 1, refreshing = 2 }

	export enum EncodingTypeValue { plain = 0, plain-dictionary = 1, rle-dictionary = 2 }

	export enum EncryptionModeValue { sse-s3 = 0, sse-kms = 1 }


	/**Describes an identifiable significant activity that affects a replication instance or task. This object can provide the message, the available event categories, the date and source of the event, and the AWS DMS resource type. */
	export interface Event {
		SourceIdentifier?: string;
		SourceType?: EventSourceType;
		Message?: string;
		EventCategories?: Array<String>;
		Date?: Date;
	}

	export enum EventSourceType { replication-instance = 0 }


	/**Lists categories of events subscribed to, and generated by, the applicable AWS DMS resource type. */
	export interface EventCategoryGroup {
		SourceType?: string;
		EventCategories?: Array<String>;
	}


	/**Identifies the name and value of a source filter object used to limit the number and type of records transferred from your source to your target. */
	export interface Filter {
		Name: string;
		Values: Array<String>;
	}

	export enum MessageFormatValue { json = 0, json-unformatted = 1 }

	export enum NestingLevelValue { none = 0, one = 1 }

	export enum ReleaseStatusValues { beta = 0 }


	/**In response to the <code>DescribeOrderableReplicationInstances</code> operation, this object describes an available replication instance. This description includes the replication instance's type, engine version, and allocated storage. */
	export interface OrderableReplicationInstance {
		EngineVersion?: string;
		ReplicationInstanceClass?: string;
		StorageType?: string;
		MinAllocatedStorage?: number;
		MaxAllocatedStorage?: number;
		DefaultAllocatedStorage?: number;
		IncludedAllocatedStorage?: number;
		AvailabilityZones?: Array<String>;
		ReleaseStatus?: OrderableReplicationInstanceReleaseStatus;
	}

	export enum OrderableReplicationInstanceReleaseStatus { beta = 0 }

	export enum ParquetVersionValue { parquet-1-0 = 0, parquet-2-0 = 1 }


	/**Describes a maintenance action pending for an AWS DMS resource, including when and how it will be applied. This data type is a response element to the <code>DescribePendingMaintenanceActions</code> operation. */
	export interface PendingMaintenanceAction {
		Action?: string;
		AutoAppliedAfterDate?: Date;
		ForcedApplyDate?: Date;
		OptInStatus?: string;
		CurrentApplyDate?: Date;
		Description?: string;
	}

	export enum RefreshSchemasStatusTypeValue { successful = 0, failed = 1, refreshing = 2 }

	export enum ReloadOptionValue { data-reload = 0, validate-only = 1 }


	/**Provides information about the values of pending modifications to a replication instance. This data type is an object of the <code>ReplicationInstance</code> user-defined data type.  */
	export interface ReplicationPendingModifiedValues {
		ReplicationInstanceClass?: string;
		AllocatedStorage?: number;
		MultiAZ?: boolean;
		EngineVersion?: string;
	}


	/**Contains metadata for a replication instance task log. */
	export interface ReplicationInstanceTaskLog {
		ReplicationTaskName?: string;
		ReplicationTaskArn?: string;
		ReplicationInstanceTaskLogSize?: number;
	}


	/**In response to a request by the <code>DescribeReplicationTasks</code> operation, this object provides a collection of statistics about a replication task. */
	export interface ReplicationTaskStats {
		FullLoadProgressPercent?: number;
		ElapsedTimeMillis?: number;
		TablesLoaded?: number;
		TablesLoading?: number;
		TablesQueued?: number;
		TablesErrored?: number;
		FreshStartDate?: Date;
		StartDate?: Date;
		StopDate?: Date;
		FullLoadStartDate?: Date;
		FullLoadFinishDate?: Date;
	}


	/** The task assessment report in JSON format.  */
	export interface ReplicationTaskAssessmentResult {
		ReplicationTaskIdentifier?: string;
		ReplicationTaskArn?: string;
		ReplicationTaskLastAssessmentDate?: Date;
		AssessmentStatus?: string;
		AssessmentResultsFile?: string;
		AssessmentResults?: string;
		S3ObjectUrl?: string;
	}

	export enum StartReplicationTaskTypeValue { start-replication = 0, resume-processing = 1, reload-target = 2 }


	/**In response to a request by the <code>DescribeReplicationSubnetGroup</code> operation, this object identifies a subnet by its given Availability Zone, subnet identifier, and status. */
	export interface Subnet {
		SubnetIdentifier?: string;

		/**The name of the Availability Zone for use during database migration. */
		SubnetAvailabilityZone?: AvailabilityZone;
		SubnetStatus?: string;
	}


	/**Provides information about types of supported endpoints in response to a request by the <code>DescribeEndpointTypes</code> operation. This information includes the type of endpoint, the database engine name, and whether change data capture (CDC) is supported. */
	export interface SupportedEndpointType {
		EngineName?: string;
		SupportsCDC?: boolean;
		EndpointType?: SupportedEndpointTypeEndpointType;
		ReplicationInstanceEngineMinimumVersion?: string;
		EngineDisplayName?: string;
	}

	export enum SupportedEndpointTypeEndpointType { source = 0, target = 1 }


	/**Provides the name of the schema and table to be reloaded. */
	export interface TableToReload {
		SchemaName?: string;
		TableName?: string;
	}


	/**Provides a collection of table statistics in response to a request by the <code>DescribeTableStatistics</code> operation. */
	export interface TableStatistics {
		SchemaName?: string;
		TableName?: string;
		Inserts?: number;
		Deletes?: number;
		Updates?: number;
		Ddls?: number;
		FullLoadRows?: number;
		FullLoadCondtnlChkFailedRows?: number;
		FullLoadErrorRows?: number;
		FullLoadStartTime?: Date;
		FullLoadEndTime?: Date;
		FullLoadReloaded?: boolean;
		LastUpdateTime?: Date;
		TableState?: string;
		ValidationPendingRecords?: number;
		ValidationFailedRecords?: number;
		ValidationSuspendedRecords?: number;
		ValidationState?: string;
		ValidationStateDetails?: string;
	}


	/**<p>A user-defined key-value pair that describes metadata added to an AWS DMS resource and that is used by operations such as the following:</p> <ul> <li> <p> <code>AddTagsToResource</code> </p> </li> <li> <p> <code>ListTagsForResource</code> </p> </li> <li> <p> <code>RemoveTagsFromResource</code> </p> </li> </ul> */
	export interface Tag {
		Key?: string;
		Value?: string;
	}


	/**Describes status of a security group associated with the virtual private cloud hosting your replication and DB instances. */
	export interface VpcSecurityGroupMembership {
		VpcSecurityGroupId?: string;
		Status?: string;
	}

	export class DemoClient {
		constructor(private baseUri: string = HttpClient.locationOrigin, private httpClient: HttpClientBase = new HttpClient(), private error?: (xhr: JQueryXHR, ajaxOptions: string, thrown: string) => any, private statusCode?: { [key: string]: any; }) {
		}

		/**
		 * Adds metadata tags to an AWS DMS resource, including replication instance, endpoint, security group, and migration task. These tags can also be used with cost allocation reporting to track cost associated with DMS resources, or used in a Condition statement in an IAM policy for DMS.
		 * Post /#X-Amz-Target=AmazonDMSv20160101.AddTagsToResource
		 * @return {AddTagsToResourceResponse} Success
		 */
		AddTagsToResource(callback: (data : AddTagsToResourceResponse) => any, requestBody: AddTagsToResourceMessage, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonDMSv20160101.AddTagsToResource', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Applies a pending maintenance action to a resource (for example, to a replication instance).
		 * Post /#X-Amz-Target=AmazonDMSv20160101.ApplyPendingMaintenanceAction
		 * @return {ApplyPendingMaintenanceActionResponse} Success
		 */
		ApplyPendingMaintenanceAction(callback: (data : ApplyPendingMaintenanceActionResponse) => any, requestBody: ApplyPendingMaintenanceActionMessage, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonDMSv20160101.ApplyPendingMaintenanceAction', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Creates an endpoint using the provided settings.
		 * Post /#X-Amz-Target=AmazonDMSv20160101.CreateEndpoint
		 * @return {CreateEndpointResponse} Success
		 */
		CreateEndpoint(callback: (data : CreateEndpointResponse) => any, requestBody: CreateEndpointMessage, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonDMSv20160101.CreateEndpoint', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p> Creates an AWS DMS event notification subscription. </p> <p>You can specify the type of source (<code>SourceType</code>) you want to be notified of, provide a list of AWS DMS source IDs (<code>SourceIds</code>) that triggers the events, and provide a list of event categories (<code>EventCategories</code>) for events you want to be notified of. If you specify both the <code>SourceType</code> and <code>SourceIds</code>, such as <code>SourceType = replication-instance</code> and <code>SourceIdentifier = my-replinstance</code>, you will be notified of all the replication instance events for the specified source. If you specify a <code>SourceType</code> but don't specify a <code>SourceIdentifier</code>, you receive notice of the events for that source type for all your AWS DMS sources. If you don't specify either <code>SourceType</code> nor <code>SourceIdentifier</code>, you will be notified of events generated from all AWS DMS sources belonging to your customer account.</p> <p>For more information about AWS DMS events, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html">Working with Events and Notifications</a> in the <i>AWS Database Migration Service User Guide.</i> </p>
		 * Post /#X-Amz-Target=AmazonDMSv20160101.CreateEventSubscription
		 * @return {CreateEventSubscriptionResponse} Success
		 */
		CreateEventSubscription(callback: (data : CreateEventSubscriptionResponse) => any, requestBody: CreateEventSubscriptionMessage, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonDMSv20160101.CreateEventSubscription', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Creates the replication instance using the specified parameters.</p> <p>AWS DMS requires that your account have certain roles with appropriate permissions before you can create a replication instance. For information on the required roles, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.APIRole.html">Creating the IAM Roles to Use With the AWS CLI and AWS DMS API</a>. For information on the required permissions, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.IAMPermissions.html">IAM Permissions Needed to Use AWS DMS</a>.</p>
		 * Post /#X-Amz-Target=AmazonDMSv20160101.CreateReplicationInstance
		 * @return {CreateReplicationInstanceResponse} Success
		 */
		CreateReplicationInstance(callback: (data : CreateReplicationInstanceResponse) => any, requestBody: CreateReplicationInstanceMessage, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonDMSv20160101.CreateReplicationInstance', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Creates a replication subnet group given a list of the subnet IDs in a VPC.
		 * Post /#X-Amz-Target=AmazonDMSv20160101.CreateReplicationSubnetGroup
		 * @return {CreateReplicationSubnetGroupResponse} Success
		 */
		CreateReplicationSubnetGroup(callback: (data : CreateReplicationSubnetGroupResponse) => any, requestBody: CreateReplicationSubnetGroupMessage, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonDMSv20160101.CreateReplicationSubnetGroup', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Creates a replication task using the specified parameters.
		 * Post /#X-Amz-Target=AmazonDMSv20160101.CreateReplicationTask
		 * @return {CreateReplicationTaskResponse} Success
		 */
		CreateReplicationTask(callback: (data : CreateReplicationTaskResponse) => any, requestBody: CreateReplicationTaskMessage, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonDMSv20160101.CreateReplicationTask', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Deletes the specified certificate.
		 * Post /#X-Amz-Target=AmazonDMSv20160101.DeleteCertificate
		 * @return {DeleteCertificateResponse} Success
		 */
		DeleteCertificate(callback: (data : DeleteCertificateResponse) => any, requestBody: DeleteCertificateMessage, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonDMSv20160101.DeleteCertificate', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Deletes the connection between a replication instance and an endpoint.
		 * Post /#X-Amz-Target=AmazonDMSv20160101.DeleteConnection
		 * @return {DeleteConnectionResponse} Success
		 */
		DeleteConnection(callback: (data : DeleteConnectionResponse) => any, requestBody: DeleteConnectionMessage, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonDMSv20160101.DeleteConnection', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Deletes the specified endpoint.</p> <note> <p>All tasks associated with the endpoint must be deleted before you can delete the endpoint.</p> </note> <p/>
		 * Post /#X-Amz-Target=AmazonDMSv20160101.DeleteEndpoint
		 * @return {DeleteEndpointResponse} Success
		 */
		DeleteEndpoint(callback: (data : DeleteEndpointResponse) => any, requestBody: DeleteEndpointMessage, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonDMSv20160101.DeleteEndpoint', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Deletes an AWS DMS event subscription.
		 * Post /#X-Amz-Target=AmazonDMSv20160101.DeleteEventSubscription
		 * @return {DeleteEventSubscriptionResponse} Success
		 */
		DeleteEventSubscription(callback: (data : DeleteEventSubscriptionResponse) => any, requestBody: DeleteEventSubscriptionMessage, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonDMSv20160101.DeleteEventSubscription', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Deletes the specified replication instance.</p> <note> <p>You must delete any migration tasks that are associated with the replication instance before you can delete it.</p> </note> <p/>
		 * Post /#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationInstance
		 * @return {DeleteReplicationInstanceResponse} Success
		 */
		DeleteReplicationInstance(callback: (data : DeleteReplicationInstanceResponse) => any, requestBody: DeleteReplicationInstanceMessage, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationInstance', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Deletes a subnet group.
		 * Post /#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationSubnetGroup
		 * @return {DeleteReplicationSubnetGroupResponse} Success
		 */
		DeleteReplicationSubnetGroup(callback: (data : DeleteReplicationSubnetGroupResponse) => any, requestBody: DeleteReplicationSubnetGroupMessage, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationSubnetGroup', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Deletes the specified replication task.
		 * Post /#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationTask
		 * @return {DeleteReplicationTaskResponse} Success
		 */
		DeleteReplicationTask(callback: (data : DeleteReplicationTaskResponse) => any, requestBody: DeleteReplicationTaskMessage, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationTask', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Lists all of the AWS DMS attributes for a customer account. These attributes include AWS DMS quotas for the account and a unique account identifier in a particular DMS region. DMS quotas include a list of resource quotas supported by the account, such as the number of replication instances allowed. The description for each resource quota, includes the quota name, current usage toward that quota, and the quota's maximum value. DMS uses the unique account identifier to name each artifact used by DMS in the given region.</p> <p>This command does not take any parameters.</p>
		 * Post /#X-Amz-Target=AmazonDMSv20160101.DescribeAccountAttributes
		 * @return {DescribeAccountAttributesResponse} Success
		 */
		DescribeAccountAttributes(callback: (data : DescribeAccountAttributesResponse) => any, requestBody: DescribeAccountAttributesMessage, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonDMSv20160101.DescribeAccountAttributes', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Provides a description of the certificate.
		 * Post /#X-Amz-Target=AmazonDMSv20160101.DescribeCertificates
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeCertificatesResponse} Success
		 */
		DescribeCertificates(MaxRecords: string, Marker: string, callback: (data : DescribeCertificatesResponse) => any, requestBody: DescribeCertificatesMessage, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonDMSv20160101.DescribeCertificates?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Describes the status of the connections that have been made between the replication instance and an endpoint. Connections are created when you test an endpoint.
		 * Post /#X-Amz-Target=AmazonDMSv20160101.DescribeConnections
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeConnectionsResponse} Success
		 */
		DescribeConnections(MaxRecords: string, Marker: string, callback: (data : DescribeConnectionsResponse) => any, requestBody: DescribeConnectionsMessage, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonDMSv20160101.DescribeConnections?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Returns information about the type of endpoints available.
		 * Post /#X-Amz-Target=AmazonDMSv20160101.DescribeEndpointTypes
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeEndpointTypesResponse} Success
		 */
		DescribeEndpointTypes(MaxRecords: string, Marker: string, callback: (data : DescribeEndpointTypesResponse) => any, requestBody: DescribeEndpointTypesMessage, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonDMSv20160101.DescribeEndpointTypes?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Returns information about the endpoints for your account in the current region.
		 * Post /#X-Amz-Target=AmazonDMSv20160101.DescribeEndpoints
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeEndpointsResponse} Success
		 */
		DescribeEndpoints(MaxRecords: string, Marker: string, callback: (data : DescribeEndpointsResponse) => any, requestBody: DescribeEndpointsMessage, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonDMSv20160101.DescribeEndpoints?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Lists categories for all event source types, or, if specified, for a specified source type. You can see a list of the event categories and source types in <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html">Working with Events and Notifications</a> in the <i>AWS Database Migration Service User Guide.</i>
		 * Post /#X-Amz-Target=AmazonDMSv20160101.DescribeEventCategories
		 * @return {DescribeEventCategoriesResponse} Success
		 */
		DescribeEventCategories(callback: (data : DescribeEventCategoriesResponse) => any, requestBody: DescribeEventCategoriesMessage, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonDMSv20160101.DescribeEventCategories', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Lists all the event subscriptions for a customer account. The description of a subscription includes <code>SubscriptionName</code>, <code>SNSTopicARN</code>, <code>CustomerID</code>, <code>SourceType</code>, <code>SourceID</code>, <code>CreationTime</code>, and <code>Status</code>. </p> <p>If you specify <code>SubscriptionName</code>, this action lists the description for that subscription.</p>
		 * Post /#X-Amz-Target=AmazonDMSv20160101.DescribeEventSubscriptions
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeEventSubscriptionsResponse} Success
		 */
		DescribeEventSubscriptions(MaxRecords: string, Marker: string, callback: (data : DescribeEventSubscriptionsResponse) => any, requestBody: DescribeEventSubscriptionsMessage, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonDMSv20160101.DescribeEventSubscriptions?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Lists events for a given source identifier and source type. You can also specify a start and end time. For more information on AWS DMS events, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html">Working with Events and Notifications</a> in the <i>AWS Database Migration User Guide.</i>
		 * Post /#X-Amz-Target=AmazonDMSv20160101.DescribeEvents
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeEventsResponse} Success
		 */
		DescribeEvents(MaxRecords: string, Marker: string, callback: (data : DescribeEventsResponse) => any, requestBody: DescribeEventsMessage, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonDMSv20160101.DescribeEvents?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Returns information about the replication instance types that can be created in the specified region.
		 * Post /#X-Amz-Target=AmazonDMSv20160101.DescribeOrderableReplicationInstances
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeOrderableReplicationInstancesResponse} Success
		 */
		DescribeOrderableReplicationInstances(MaxRecords: string, Marker: string, callback: (data : DescribeOrderableReplicationInstancesResponse) => any, requestBody: DescribeOrderableReplicationInstancesMessage, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonDMSv20160101.DescribeOrderableReplicationInstances?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * For internal use only
		 * Post /#X-Amz-Target=AmazonDMSv20160101.DescribePendingMaintenanceActions
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribePendingMaintenanceActionsResponse} Success
		 */
		DescribePendingMaintenanceActions(MaxRecords: string, Marker: string, callback: (data : DescribePendingMaintenanceActionsResponse) => any, requestBody: DescribePendingMaintenanceActionsMessage, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonDMSv20160101.DescribePendingMaintenanceActions?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Returns the status of the RefreshSchemas operation.
		 * Post /#X-Amz-Target=AmazonDMSv20160101.DescribeRefreshSchemasStatus
		 * @return {DescribeRefreshSchemasStatusResponse} Success
		 */
		DescribeRefreshSchemasStatus(callback: (data : DescribeRefreshSchemasStatusResponse) => any, requestBody: DescribeRefreshSchemasStatusMessage, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonDMSv20160101.DescribeRefreshSchemasStatus', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Returns information about the task logs for the specified task.
		 * Post /#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationInstanceTaskLogs
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeReplicationInstanceTaskLogsResponse} Success
		 */
		DescribeReplicationInstanceTaskLogs(MaxRecords: string, Marker: string, callback: (data : DescribeReplicationInstanceTaskLogsResponse) => any, requestBody: DescribeReplicationInstanceTaskLogsMessage, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationInstanceTaskLogs?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Returns information about replication instances for your account in the current region.
		 * Post /#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationInstances
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeReplicationInstancesResponse} Success
		 */
		DescribeReplicationInstances(MaxRecords: string, Marker: string, callback: (data : DescribeReplicationInstancesResponse) => any, requestBody: DescribeReplicationInstancesMessage, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationInstances?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Returns information about the replication subnet groups.
		 * Post /#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationSubnetGroups
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeReplicationSubnetGroupsResponse} Success
		 */
		DescribeReplicationSubnetGroups(MaxRecords: string, Marker: string, callback: (data : DescribeReplicationSubnetGroupsResponse) => any, requestBody: DescribeReplicationSubnetGroupsMessage, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationSubnetGroups?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Returns the task assessment results from Amazon S3. This action always returns the latest results.
		 * Post /#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskAssessmentResults
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeReplicationTaskAssessmentResultsResponse} Success
		 */
		DescribeReplicationTaskAssessmentResults(MaxRecords: string, Marker: string, callback: (data : DescribeReplicationTaskAssessmentResultsResponse) => any, requestBody: DescribeReplicationTaskAssessmentResultsMessage, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskAssessmentResults?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Returns information about replication tasks for your account in the current region.
		 * Post /#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTasks
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeReplicationTasksResponse} Success
		 */
		DescribeReplicationTasks(MaxRecords: string, Marker: string, callback: (data : DescribeReplicationTasksResponse) => any, requestBody: DescribeReplicationTasksMessage, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTasks?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Returns information about the schema for the specified endpoint.</p> <p/>
		 * Post /#X-Amz-Target=AmazonDMSv20160101.DescribeSchemas
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeSchemasResponse} Success
		 */
		DescribeSchemas(MaxRecords: string, Marker: string, callback: (data : DescribeSchemasResponse) => any, requestBody: DescribeSchemasMessage, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonDMSv20160101.DescribeSchemas?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Returns table statistics on the database migration task, including table name, rows inserted, rows updated, and rows deleted.</p> <p>Note that the "last updated" column the DMS console only indicates the time that AWS DMS last updated the table statistics record for a table. It does not indicate the time of the last update to the table.</p>
		 * Post /#X-Amz-Target=AmazonDMSv20160101.DescribeTableStatistics
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeTableStatisticsResponse} Success
		 */
		DescribeTableStatistics(MaxRecords: string, Marker: string, callback: (data : DescribeTableStatisticsResponse) => any, requestBody: DescribeTableStatisticsMessage, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonDMSv20160101.DescribeTableStatistics?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Uploads the specified certificate.
		 * Post /#X-Amz-Target=AmazonDMSv20160101.ImportCertificate
		 * @return {ImportCertificateResponse} Success
		 */
		ImportCertificate(callback: (data : ImportCertificateResponse) => any, requestBody: ImportCertificateMessage, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonDMSv20160101.ImportCertificate', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Lists all tags for an AWS DMS resource.
		 * Post /#X-Amz-Target=AmazonDMSv20160101.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(callback: (data : ListTagsForResourceResponse) => any, requestBody: ListTagsForResourceMessage, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonDMSv20160101.ListTagsForResource', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Modifies the specified endpoint.
		 * Post /#X-Amz-Target=AmazonDMSv20160101.ModifyEndpoint
		 * @return {ModifyEndpointResponse} Success
		 */
		ModifyEndpoint(callback: (data : ModifyEndpointResponse) => any, requestBody: ModifyEndpointMessage, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonDMSv20160101.ModifyEndpoint', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Modifies an existing AWS DMS event notification subscription.
		 * Post /#X-Amz-Target=AmazonDMSv20160101.ModifyEventSubscription
		 * @return {ModifyEventSubscriptionResponse} Success
		 */
		ModifyEventSubscription(callback: (data : ModifyEventSubscriptionResponse) => any, requestBody: ModifyEventSubscriptionMessage, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonDMSv20160101.ModifyEventSubscription', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Modifies the replication instance to apply new settings. You can change one or more parameters by specifying these parameters and the new values in the request.</p> <p>Some settings are applied during the maintenance window.</p> <p/>
		 * Post /#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationInstance
		 * @return {ModifyReplicationInstanceResponse} Success
		 */
		ModifyReplicationInstance(callback: (data : ModifyReplicationInstanceResponse) => any, requestBody: ModifyReplicationInstanceMessage, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationInstance', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Modifies the settings for the specified replication subnet group.
		 * Post /#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationSubnetGroup
		 * @return {ModifyReplicationSubnetGroupResponse} Success
		 */
		ModifyReplicationSubnetGroup(callback: (data : ModifyReplicationSubnetGroupResponse) => any, requestBody: ModifyReplicationSubnetGroupMessage, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationSubnetGroup', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Modifies the specified replication task.</p> <p>You can't modify the task endpoints. The task must be stopped before you can modify it. </p> <p>For more information about AWS DMS tasks, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.html">Working with Migration Tasks</a> in the <i>AWS Database Migration Service User Guide</i>.</p>
		 * Post /#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationTask
		 * @return {ModifyReplicationTaskResponse} Success
		 */
		ModifyReplicationTask(callback: (data : ModifyReplicationTaskResponse) => any, requestBody: ModifyReplicationTaskMessage, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationTask', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Reboots a replication instance. Rebooting results in a momentary outage, until the replication instance becomes available again.
		 * Post /#X-Amz-Target=AmazonDMSv20160101.RebootReplicationInstance
		 * @return {RebootReplicationInstanceResponse} Success
		 */
		RebootReplicationInstance(callback: (data : RebootReplicationInstanceResponse) => any, requestBody: RebootReplicationInstanceMessage, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonDMSv20160101.RebootReplicationInstance', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Populates the schema for the specified endpoint. This is an asynchronous operation and can take several minutes. You can check the status of this operation by calling the DescribeRefreshSchemasStatus operation.
		 * Post /#X-Amz-Target=AmazonDMSv20160101.RefreshSchemas
		 * @return {RefreshSchemasResponse} Success
		 */
		RefreshSchemas(callback: (data : RefreshSchemasResponse) => any, requestBody: RefreshSchemasMessage, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonDMSv20160101.RefreshSchemas', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Reloads the target database table with the source data.
		 * Post /#X-Amz-Target=AmazonDMSv20160101.ReloadTables
		 * @return {ReloadTablesResponse} Success
		 */
		ReloadTables(callback: (data : ReloadTablesResponse) => any, requestBody: ReloadTablesMessage, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonDMSv20160101.ReloadTables', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Removes metadata tags from a DMS resource.
		 * Post /#X-Amz-Target=AmazonDMSv20160101.RemoveTagsFromResource
		 * @return {RemoveTagsFromResourceResponse} Success
		 */
		RemoveTagsFromResource(callback: (data : RemoveTagsFromResourceResponse) => any, requestBody: RemoveTagsFromResourceMessage, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonDMSv20160101.RemoveTagsFromResource', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Starts the replication task.</p> <p>For more information about AWS DMS tasks, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.html">Working with Migration Tasks </a> in the <i>AWS Database Migration Service User Guide.</i> </p>
		 * Post /#X-Amz-Target=AmazonDMSv20160101.StartReplicationTask
		 * @return {StartReplicationTaskResponse} Success
		 */
		StartReplicationTask(callback: (data : StartReplicationTaskResponse) => any, requestBody: StartReplicationTaskMessage, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonDMSv20160101.StartReplicationTask', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Starts the replication task assessment for unsupported data types in the source database.
		 * Post /#X-Amz-Target=AmazonDMSv20160101.StartReplicationTaskAssessment
		 * @return {StartReplicationTaskAssessmentResponse} Success
		 */
		StartReplicationTaskAssessment(callback: (data : StartReplicationTaskAssessmentResponse) => any, requestBody: StartReplicationTaskAssessmentMessage, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonDMSv20160101.StartReplicationTaskAssessment', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Stops the replication task.</p> <p/>
		 * Post /#X-Amz-Target=AmazonDMSv20160101.StopReplicationTask
		 * @return {StopReplicationTaskResponse} Success
		 */
		StopReplicationTask(callback: (data : StopReplicationTaskResponse) => any, requestBody: StopReplicationTaskMessage, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonDMSv20160101.StopReplicationTask', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Tests the connection between the replication instance and the endpoint.
		 * Post /#X-Amz-Target=AmazonDMSv20160101.TestConnection
		 * @return {TestConnectionResponse} Success
		 */
		TestConnection(callback: (data : TestConnectionResponse) => any, requestBody: TestConnectionMessage, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonDMSv20160101.TestConnection', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}
	}

}

