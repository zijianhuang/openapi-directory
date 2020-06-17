import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace My_Demo_Client {
	export interface BatchCreatePartitionResponse {
		Errors?: Array<PartitionError>;
	}

	export interface BatchCreatePartitionRequest {
		CatalogId?: string;
		DatabaseName: string;
		TableName: string;
		PartitionInputList: Array<PartitionInput>;
	}

	export interface BatchDeleteConnectionResponse {
		Succeeded?: Array<NameString>;
		Errors?: ErrorByName;
	}

	export interface BatchDeleteConnectionRequest {
		CatalogId?: string;
		ConnectionNameList: Array<NameString>;
	}

	export interface BatchDeletePartitionResponse {
		Errors?: Array<PartitionError>;
	}

	export interface BatchDeletePartitionRequest {
		CatalogId?: string;
		DatabaseName: string;
		TableName: string;
		PartitionsToDelete: Array<PartitionValueList>;
	}

	export interface BatchDeleteTableResponse {
		Errors?: Array<TableError>;
	}

	export interface BatchDeleteTableRequest {
		CatalogId?: string;
		DatabaseName: string;
		TablesToDelete: Array<NameString>;
	}

	export interface BatchDeleteTableVersionResponse {
		Errors?: Array<TableVersionError>;
	}

	export interface BatchDeleteTableVersionRequest {
		CatalogId?: string;
		DatabaseName: string;
		TableName: string;
		VersionIds: Array<VersionString>;
	}

	export interface BatchGetCrawlersResponse {
		Crawlers?: Array<Crawler>;
		CrawlersNotFound?: Array<NameString>;
	}

	export interface BatchGetCrawlersRequest {
		CrawlerNames: Array<NameString>;
	}

	export interface BatchGetDevEndpointsResponse {
		DevEndpoints?: Array<DevEndpoint>;
		DevEndpointsNotFound?: Array<GenericString>;
	}

	export interface BatchGetDevEndpointsRequest {
		DevEndpointNames: Array<GenericString>;
	}

	export interface BatchGetJobsResponse {
		Jobs?: Array<Job>;
		JobsNotFound?: Array<NameString>;
	}

	export interface BatchGetJobsRequest {
		JobNames: Array<NameString>;
	}

	export interface BatchGetPartitionResponse {
		Partitions?: Array<Partition>;
		UnprocessedKeys?: Array<PartitionValueList>;
	}

	export interface BatchGetPartitionRequest {
		CatalogId?: string;
		DatabaseName: string;
		TableName: string;
		PartitionsToGet: Array<PartitionValueList>;
	}

	export interface BatchGetTriggersResponse {
		Triggers?: Array<Trigger>;
		TriggersNotFound?: Array<NameString>;
	}

	export interface BatchGetTriggersRequest {
		TriggerNames: Array<NameString>;
	}

	export interface BatchGetWorkflowsResponse {
		Workflows?: Array<Workflow>;
		MissingWorkflows?: Array<NameString>;
	}

	export interface BatchGetWorkflowsRequest {
		Names: Array<NameString>;
		IncludeGraph?: boolean;
	}

	export interface BatchStopJobRunResponse {
		SuccessfulSubmissions?: Array<BatchStopJobRunSuccessfulSubmission>;
		Errors?: Array<BatchStopJobRunError>;
	}

	export interface BatchStopJobRunRequest {
		JobName: string;
		JobRunIds: Array<IdString>;
	}

	export interface CancelMLTaskRunResponse {
		TransformId?: string;
		TaskRunId?: string;
		Status?: CancelMLTaskRunResponseStatus;
	}

	export enum CancelMLTaskRunResponseStatus { STARTING = 0, RUNNING = 1, STOPPING = 2, STOPPED = 3, SUCCEEDED = 4, FAILED = 5, TIMEOUT = 6 }

	export interface CancelMLTaskRunRequest {
		TransformId: string;
		TaskRunId: string;
	}

	export interface CreateClassifierRequest {

		/**Specifies a <code>grok</code> classifier for <code>CreateClassifier</code> to create. */
		GrokClassifier?: CreateGrokClassifierRequest;

		/**Specifies an XML classifier for <code>CreateClassifier</code> to create. */
		XMLClassifier?: CreateXMLClassifierRequest;

		/**Specifies a JSON classifier for <code>CreateClassifier</code> to create. */
		JsonClassifier?: CreateJsonClassifierRequest;

		/**Specifies a custom CSV classifier for <code>CreateClassifier</code> to create. */
		CsvClassifier?: CreateCsvClassifierRequest;
	}

	export interface CreateConnectionRequest {
		CatalogId?: string;

		/**A structure that is used to specify a connection to create or update. */
		ConnectionInput: ConnectionInput;
	}

	export interface CreateCrawlerRequest {
		Name: string;
		Role: string;
		DatabaseName?: string;
		Description?: string;

		/**Specifies data stores to crawl. */
		Targets: CrawlerTargets;
		Schedule?: string;
		Classifiers?: Array<NameString>;
		TablePrefix?: string;

		/**A policy that specifies update and deletion behaviors for the crawler. */
		SchemaChangePolicy?: SchemaChangePolicy;
		Configuration?: string;
		CrawlerSecurityConfiguration?: string;
		Tags?: TagsMap;
	}

	export interface CreateDatabaseRequest {
		CatalogId?: string;

		/**The structure used to create or update a database. */
		DatabaseInput: DatabaseInput;
	}

	export interface CreateDevEndpointResponse {
		EndpointName?: string;
		Status?: string;
		SecurityGroupIds?: Array<GenericString>;
		SubnetId?: string;
		RoleArn?: string;
		YarnEndpointAddress?: string;
		ZeppelinRemoteSparkInterpreterPort?: number;
		NumberOfNodes?: number;
		WorkerType?: CreateDevEndpointResponseWorkerType;
		GlueVersion?: string;
		NumberOfWorkers?: number;
		AvailabilityZone?: string;
		VpcId?: string;
		ExtraPythonLibsS3Path?: string;
		ExtraJarsS3Path?: string;
		FailureReason?: string;
		SecurityConfiguration?: string;
		CreatedTimestamp?: Date;
		Arguments?: MapValue;
	}

	export enum CreateDevEndpointResponseWorkerType { Standard = 0, G.1X = 1, G.2X = 2 }

	export interface CreateDevEndpointRequest {
		EndpointName: string;
		RoleArn: string;
		SecurityGroupIds?: Array<GenericString>;
		SubnetId?: string;
		PublicKey?: string;
		PublicKeys?: Array<GenericString>;
		NumberOfNodes?: number;
		WorkerType?: CreateDevEndpointRequestWorkerType;
		GlueVersion?: string;
		NumberOfWorkers?: number;
		ExtraPythonLibsS3Path?: string;
		ExtraJarsS3Path?: string;
		SecurityConfiguration?: string;
		Tags?: TagsMap;
		Arguments?: MapValue;
	}

	export enum CreateDevEndpointRequestWorkerType { Standard = 0, G.1X = 1, G.2X = 2 }

	export interface CreateJobResponse {
		Name?: string;
	}

	export interface CreateJobRequest {
		Name: string;
		Description?: string;
		LogUri?: string;
		Role: string;

		/**An execution property of a job. */
		ExecutionProperty?: ExecutionProperty;

		/**Specifies code executed when a job is run. */
		Command: JobCommand;
		DefaultArguments?: GenericMap;
		NonOverridableArguments?: GenericMap;

		/**Specifies the connections used by a job. */
		Connections?: ConnectionsList;
		MaxRetries?: number;
		AllocatedCapacity?: number;
		Timeout?: number;
		MaxCapacity?: number;
		SecurityConfiguration?: string;
		Tags?: TagsMap;

		/**Specifies configuration properties of a notification. */
		NotificationProperty?: NotificationProperty;
		GlueVersion?: string;
		NumberOfWorkers?: number;
		WorkerType?: CreateJobRequestWorkerType;
	}

	export enum CreateJobRequestWorkerType { Standard = 0, G.1X = 1, G.2X = 2 }

	export interface CreateMLTransformResponse {
		TransformId?: string;
	}

	export interface CreateMLTransformRequest {
		Name: string;
		Description?: string;
		InputRecordTables: Array<GlueTable>;

		/**The algorithm-specific parameters that are associated with the machine learning transform. */
		Parameters: TransformParameters;
		Role: string;
		GlueVersion?: string;
		MaxCapacity?: number;
		WorkerType?: CreateMLTransformRequestWorkerType;
		NumberOfWorkers?: number;
		Timeout?: number;
		MaxRetries?: number;
		Tags?: TagsMap;
	}

	export enum CreateMLTransformRequestWorkerType { Standard = 0, G.1X = 1, G.2X = 2 }

	export interface CreatePartitionRequest {
		CatalogId?: string;
		DatabaseName: string;
		TableName: string;

		/**The structure used to create and update a partition. */
		PartitionInput: PartitionInput;
	}

	export interface CreateScriptResponse {
		PythonScript?: string;
		ScalaCode?: string;
	}

	export interface CreateScriptRequest {
		DagNodes?: Array<CodeGenNode>;
		DagEdges?: Array<CodeGenEdge>;
		Language?: CreateScriptRequestLanguage;
	}

	export enum CreateScriptRequestLanguage { PYTHON = 0, SCALA = 1 }

	export interface CreateSecurityConfigurationResponse {
		Name?: string;
		CreatedTimestamp?: Date;
	}

	export interface CreateSecurityConfigurationRequest {
		Name: string;

		/**Specifies an encryption configuration. */
		EncryptionConfiguration: EncryptionConfiguration;
	}

	export interface CreateTableRequest {
		CatalogId?: string;
		DatabaseName: string;

		/**A structure used to define a table. */
		TableInput: TableInput;
	}

	export interface CreateTriggerResponse {
		Name?: string;
	}

	export interface CreateTriggerRequest {
		Name: string;
		WorkflowName?: string;
		Type: CreateTriggerRequestType;
		Schedule?: string;

		/**Defines the predicate of the trigger, which determines when it fires. */
		Predicate?: Predicate;
		Actions: Array<Action>;
		Description?: string;
		StartOnCreation?: boolean;
		Tags?: TagsMap;
	}

	export enum CreateTriggerRequestType { SCHEDULED = 0, CONDITIONAL = 1, ON_DEMAND = 2 }

	export interface CreateUserDefinedFunctionRequest {
		CatalogId?: string;
		DatabaseName: string;

		/**A structure used to create or update a user-defined function. */
		FunctionInput: UserDefinedFunctionInput;
	}

	export interface CreateWorkflowResponse {
		Name?: string;
	}

	export interface CreateWorkflowRequest {
		Name: string;
		Description?: string;
		DefaultRunProperties?: WorkflowRunProperties;
		Tags?: TagsMap;
	}

	export interface DeleteClassifierRequest {
		Name: string;
	}

	export interface DeleteConnectionRequest {
		CatalogId?: string;
		ConnectionName: string;
	}

	export interface DeleteCrawlerRequest {
		Name: string;
	}

	export interface DeleteDatabaseRequest {
		CatalogId?: string;
		Name: string;
	}

	export interface DeleteDevEndpointRequest {
		EndpointName: string;
	}

	export interface DeleteJobResponse {
		JobName?: string;
	}

	export interface DeleteJobRequest {
		JobName: string;
	}

	export interface DeleteMLTransformResponse {
		TransformId?: string;
	}

	export interface DeleteMLTransformRequest {
		TransformId: string;
	}

	export interface DeletePartitionRequest {
		CatalogId?: string;
		DatabaseName: string;
		TableName: string;
		PartitionValues: Array<ValueString>;
	}

	export interface DeleteResourcePolicyRequest {
		PolicyHashCondition?: string;
	}

	export interface DeleteSecurityConfigurationRequest {
		Name: string;
	}

	export interface DeleteTableRequest {
		CatalogId?: string;
		DatabaseName: string;
		Name: string;
	}

	export interface DeleteTableVersionRequest {
		CatalogId?: string;
		DatabaseName: string;
		TableName: string;
		VersionId: string;
	}

	export interface DeleteTriggerResponse {
		Name?: string;
	}

	export interface DeleteTriggerRequest {
		Name: string;
	}

	export interface DeleteUserDefinedFunctionRequest {
		CatalogId?: string;
		DatabaseName: string;
		FunctionName: string;
	}

	export interface DeleteWorkflowResponse {
		Name?: string;
	}

	export interface DeleteWorkflowRequest {
		Name: string;
	}

	export interface GetCatalogImportStatusResponse {

		/**A structure containing migration status information. */
		ImportStatus?: CatalogImportStatus;
	}

	export interface GetCatalogImportStatusRequest {
		CatalogId?: string;
	}

	export interface GetClassifierResponse {

		/**<p>Classifiers are triggered during a crawl task. A classifier checks whether a given file is in a format it can handle. If it is, the classifier creates a schema in the form of a <code>StructType</code> object that matches that data format.</p> <p>You can use the standard classifiers that AWS Glue provides, or you can write your own classifiers to best categorize your data sources and specify the appropriate schemas to use for them. A classifier can be a <code>grok</code> classifier, an <code>XML</code> classifier, a <code>JSON</code> classifier, or a custom <code>CSV</code> classifier, as specified in one of the fields in the <code>Classifier</code> object.</p> */
		Classifier?: Classifier;
	}

	export interface GetClassifierRequest {
		Name: string;
	}

	export interface GetClassifiersResponse {
		Classifiers?: Array<Classifier>;
		NextToken?: string;
	}

	export interface GetClassifiersRequest {
		MaxResults?: number;
		NextToken?: string;
	}

	export interface GetConnectionResponse {

		/**Defines a connection to a data source. */
		Connection?: Connection;
	}

	export interface GetConnectionRequest {
		CatalogId?: string;
		Name: string;
		HidePassword?: boolean;
	}

	export interface GetConnectionsResponse {
		ConnectionList?: Array<Connection>;
		NextToken?: string;
	}

	export interface GetConnectionsRequest {
		CatalogId?: string;

		/**Filters the connection definitions that are returned by the <code>GetConnections</code> API operation. */
		Filter?: GetConnectionsFilter;
		HidePassword?: boolean;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface GetCrawlerResponse {

		/**Specifies a crawler program that examines a data source and uses classifiers to try to determine its schema. If successful, the crawler records metadata concerning the data source in the AWS Glue Data Catalog. */
		Crawler?: Crawler;
	}

	export interface GetCrawlerRequest {
		Name: string;
	}

	export interface GetCrawlerMetricsResponse {
		CrawlerMetricsList?: Array<CrawlerMetrics>;
		NextToken?: string;
	}

	export interface GetCrawlerMetricsRequest {
		CrawlerNameList?: Array<NameString>;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface GetCrawlersResponse {
		Crawlers?: Array<Crawler>;
		NextToken?: string;
	}

	export interface GetCrawlersRequest {
		MaxResults?: number;
		NextToken?: string;
	}

	export interface GetDataCatalogEncryptionSettingsResponse {

		/**Contains configuration information for maintaining Data Catalog security. */
		DataCatalogEncryptionSettings?: DataCatalogEncryptionSettings;
	}

	export interface GetDataCatalogEncryptionSettingsRequest {
		CatalogId?: string;
	}

	export interface GetDatabaseResponse {

		/**The <code>Database</code> object represents a logical grouping of tables that might reside in a Hive metastore or an RDBMS. */
		Database?: Database;
	}

	export interface GetDatabaseRequest {
		CatalogId?: string;
		Name: string;
	}

	export interface GetDatabasesResponse {
		DatabaseList: Array<Database>;
		NextToken?: string;
	}

	export interface GetDatabasesRequest {
		CatalogId?: string;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface GetDataflowGraphResponse {
		DagNodes?: Array<CodeGenNode>;
		DagEdges?: Array<CodeGenEdge>;
	}

	export interface GetDataflowGraphRequest {
		PythonScript?: string;
	}

	export interface GetDevEndpointResponse {

		/**A development endpoint where a developer can remotely debug extract, transform, and load (ETL) scripts. */
		DevEndpoint?: DevEndpoint;
	}

	export interface GetDevEndpointRequest {
		EndpointName: string;
	}

	export interface GetDevEndpointsResponse {
		DevEndpoints?: Array<DevEndpoint>;
		NextToken?: string;
	}

	export interface GetDevEndpointsRequest {
		MaxResults?: number;
		NextToken?: string;
	}

	export interface GetJobResponse {

		/**Specifies a job definition. */
		Job?: Job;
	}

	export interface GetJobRequest {
		JobName: string;
	}

	export interface GetJobBookmarkResponse {

		/**Defines a point that a job can resume processing. */
		JobBookmarkEntry?: JobBookmarkEntry;
	}

	export interface GetJobBookmarkRequest {
		JobName: string;
		RunId?: string;
	}

	export interface GetJobRunResponse {

		/**Contains information about a job run. */
		JobRun?: JobRun;
	}

	export interface GetJobRunRequest {
		JobName: string;
		RunId: string;
		PredecessorsIncluded?: boolean;
	}

	export interface GetJobRunsResponse {
		JobRuns?: Array<JobRun>;
		NextToken?: string;
	}

	export interface GetJobRunsRequest {
		JobName: string;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface GetJobsResponse {
		Jobs?: Array<Job>;
		NextToken?: string;
	}

	export interface GetJobsRequest {
		NextToken?: string;
		MaxResults?: number;
	}

	export interface GetMLTaskRunResponse {
		TransformId?: string;
		TaskRunId?: string;
		Status?: GetMLTaskRunResponseStatus;
		LogGroupName?: string;

		/**The configuration properties for the task run. */
		Properties?: TaskRunProperties;
		ErrorString?: string;
		StartedOn?: Date;
		LastModifiedOn?: Date;
		CompletedOn?: Date;
		ExecutionTime?: number;
	}

	export enum GetMLTaskRunResponseStatus { STARTING = 0, RUNNING = 1, STOPPING = 2, STOPPED = 3, SUCCEEDED = 4, FAILED = 5, TIMEOUT = 6 }

	export interface GetMLTaskRunRequest {
		TransformId: string;
		TaskRunId: string;
	}

	export interface GetMLTaskRunsResponse {
		TaskRuns?: Array<TaskRun>;
		NextToken?: string;
	}

	export interface GetMLTaskRunsRequest {
		TransformId: string;
		NextToken?: string;
		MaxResults?: number;

		/**The criteria that are used to filter the task runs for the machine learning transform. */
		Filter?: TaskRunFilterCriteria;

		/**The sorting criteria that are used to sort the list of task runs for the machine learning transform. */
		Sort?: TaskRunSortCriteria;
	}

	export interface GetMLTransformResponse {
		TransformId?: string;
		Name?: string;
		Description?: string;
		Status?: GetMLTransformResponseStatus;
		CreatedOn?: Date;
		LastModifiedOn?: Date;
		InputRecordTables?: Array<GlueTable>;

		/**The algorithm-specific parameters that are associated with the machine learning transform. */
		Parameters?: TransformParameters;

		/**Evaluation metrics provide an estimate of the quality of your machine learning transform. */
		EvaluationMetrics?: EvaluationMetrics;
		LabelCount?: number;
		Schema?: Array<SchemaColumn>;
		Role?: string;
		GlueVersion?: string;
		MaxCapacity?: number;
		WorkerType?: GetMLTransformResponseWorkerType;
		NumberOfWorkers?: number;
		Timeout?: number;
		MaxRetries?: number;
	}

	export enum GetMLTransformResponseStatus { NOT_READY = 0, READY = 1, DELETING = 2 }

	export enum GetMLTransformResponseWorkerType { Standard = 0, G.1X = 1, G.2X = 2 }

	export interface GetMLTransformRequest {
		TransformId: string;
	}

	export interface GetMLTransformsResponse {
		Transforms: Array<MLTransform>;
		NextToken?: string;
	}

	export interface GetMLTransformsRequest {
		NextToken?: string;
		MaxResults?: number;

		/**The criteria used to filter the machine learning transforms. */
		Filter?: TransformFilterCriteria;

		/**The sorting criteria that are associated with the machine learning transform. */
		Sort?: TransformSortCriteria;
	}

	export interface GetMappingResponse {
		Mapping: Array<MappingEntry>;
	}

	export interface GetMappingRequest {

		/**Specifies a table definition in the AWS Glue Data Catalog. */
		Source: CatalogEntry;
		Sinks?: Array<CatalogEntry>;

		/**The location of resources. */
		Location?: Location;
	}

	export interface GetPartitionResponse {

		/**Represents a slice of table data. */
		Partition?: Partition;
	}

	export interface GetPartitionRequest {
		CatalogId?: string;
		DatabaseName: string;
		TableName: string;
		PartitionValues: Array<ValueString>;
	}

	export interface GetPartitionsResponse {
		Partitions?: Array<Partition>;
		NextToken?: string;
	}

	export interface GetPartitionsRequest {
		CatalogId?: string;
		DatabaseName: string;
		TableName: string;
		Expression?: string;
		NextToken?: string;

		/**Defines a non-overlapping region of a table's partitions, allowing multiple requests to be executed in parallel. */
		Segment?: Segment;
		MaxResults?: number;
	}

	export interface GetPlanResponse {
		PythonScript?: string;
		ScalaCode?: string;
	}

	export interface GetPlanRequest {
		Mapping: Array<MappingEntry>;

		/**Specifies a table definition in the AWS Glue Data Catalog. */
		Source: CatalogEntry;
		Sinks?: Array<CatalogEntry>;

		/**The location of resources. */
		Location?: Location;
		Language?: GetPlanRequestLanguage;
	}

	export enum GetPlanRequestLanguage { PYTHON = 0, SCALA = 1 }

	export interface GetResourcePolicyResponse {
		PolicyInJson?: string;
		PolicyHash?: string;
		CreateTime?: Date;
		UpdateTime?: Date;
	}

	export interface GetSecurityConfigurationResponse {

		/**Specifies a security configuration. */
		SecurityConfiguration?: SecurityConfiguration;
	}

	export interface GetSecurityConfigurationRequest {
		Name: string;
	}

	export interface GetSecurityConfigurationsResponse {
		SecurityConfigurations?: Array<SecurityConfiguration>;
		NextToken?: string;
	}

	export interface GetSecurityConfigurationsRequest {
		MaxResults?: number;
		NextToken?: string;
	}

	export interface GetTableResponse {

		/**Represents a collection of related data organized in columns and rows. */
		Table?: Table;
	}

	export interface GetTableRequest {
		CatalogId?: string;
		DatabaseName: string;
		Name: string;
	}

	export interface GetTableVersionResponse {

		/**Specifies a version of a table. */
		TableVersion?: TableVersion;
	}

	export interface GetTableVersionRequest {
		CatalogId?: string;
		DatabaseName: string;
		TableName: string;
		VersionId?: string;
	}

	export interface GetTableVersionsResponse {
		TableVersions?: Array<TableVersion>;
		NextToken?: string;
	}

	export interface GetTableVersionsRequest {
		CatalogId?: string;
		DatabaseName: string;
		TableName: string;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface GetTablesResponse {
		TableList?: Array<Table>;
		NextToken?: string;
	}

	export interface GetTablesRequest {
		CatalogId?: string;
		DatabaseName: string;
		Expression?: string;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface GetTagsResponse {
		Tags?: TagsMap;
	}

	export interface GetTagsRequest {
		ResourceArn: string;
	}

	export interface GetTriggerResponse {

		/**Information about a specific trigger. */
		Trigger?: Trigger;
	}

	export interface GetTriggerRequest {
		Name: string;
	}

	export interface GetTriggersResponse {
		Triggers?: Array<Trigger>;
		NextToken?: string;
	}

	export interface GetTriggersRequest {
		NextToken?: string;
		DependentJobName?: string;
		MaxResults?: number;
	}

	export interface GetUserDefinedFunctionResponse {

		/**Represents the equivalent of a Hive user-defined function (<code>UDF</code>) definition. */
		UserDefinedFunction?: UserDefinedFunction;
	}

	export interface GetUserDefinedFunctionRequest {
		CatalogId?: string;
		DatabaseName: string;
		FunctionName: string;
	}

	export interface GetUserDefinedFunctionsResponse {
		UserDefinedFunctions?: Array<UserDefinedFunction>;
		NextToken?: string;
	}

	export interface GetUserDefinedFunctionsRequest {
		CatalogId?: string;
		DatabaseName?: string;
		Pattern: string;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface GetWorkflowResponse {

		/**A workflow represents a flow in which AWS Glue components should be executed to complete a logical task. */
		Workflow?: Workflow;
	}

	export interface GetWorkflowRequest {
		Name: string;
		IncludeGraph?: boolean;
	}

	export interface GetWorkflowRunResponse {

		/**A workflow run is an execution of a workflow providing all the runtime information. */
		Run?: WorkflowRun;
	}

	export interface GetWorkflowRunRequest {
		Name: string;
		RunId: string;
		IncludeGraph?: boolean;
	}

	export interface GetWorkflowRunPropertiesResponse {
		RunProperties?: WorkflowRunProperties;
	}

	export interface GetWorkflowRunPropertiesRequest {
		Name: string;
		RunId: string;
	}

	export interface GetWorkflowRunsResponse {
		Runs?: Array<WorkflowRun>;
		NextToken?: string;
	}

	export interface GetWorkflowRunsRequest {
		Name: string;
		IncludeGraph?: boolean;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ImportCatalogToGlueRequest {
		CatalogId?: string;
	}

	export interface ListCrawlersResponse {
		CrawlerNames?: Array<NameString>;
		NextToken?: string;
	}

	export interface ListCrawlersRequest {
		MaxResults?: number;
		NextToken?: string;
		Tags?: TagsMap;
	}

	export interface ListDevEndpointsResponse {
		DevEndpointNames?: Array<NameString>;
		NextToken?: string;
	}

	export interface ListDevEndpointsRequest {
		NextToken?: string;
		MaxResults?: number;
		Tags?: TagsMap;
	}

	export interface ListJobsResponse {
		JobNames?: Array<NameString>;
		NextToken?: string;
	}

	export interface ListJobsRequest {
		NextToken?: string;
		MaxResults?: number;
		Tags?: TagsMap;
	}

	export interface ListMLTransformsResponse {
		TransformIds: Array<HashString>;
		NextToken?: string;
	}

	export interface ListMLTransformsRequest {
		NextToken?: string;
		MaxResults?: number;

		/**The criteria used to filter the machine learning transforms. */
		Filter?: TransformFilterCriteria;

		/**The sorting criteria that are associated with the machine learning transform. */
		Sort?: TransformSortCriteria;
		Tags?: TagsMap;
	}

	export interface ListTriggersResponse {
		TriggerNames?: Array<NameString>;
		NextToken?: string;
	}

	export interface ListTriggersRequest {
		NextToken?: string;
		DependentJobName?: string;
		MaxResults?: number;
		Tags?: TagsMap;
	}

	export interface ListWorkflowsResponse {
		Workflows?: Array<NameString>;
		NextToken?: string;
	}

	export interface ListWorkflowsRequest {
		NextToken?: string;
		MaxResults?: number;
	}

	export interface PutDataCatalogEncryptionSettingsRequest {
		CatalogId?: string;

		/**Contains configuration information for maintaining Data Catalog security. */
		DataCatalogEncryptionSettings: DataCatalogEncryptionSettings;
	}

	export interface PutResourcePolicyResponse {
		PolicyHash?: string;
	}

	export interface PutResourcePolicyRequest {
		PolicyInJson: string;
		PolicyHashCondition?: string;
		PolicyExistsCondition?: PutResourcePolicyRequestPolicyExistsCondition;
	}

	export enum PutResourcePolicyRequestPolicyExistsCondition { MUST_EXIST = 0, NOT_EXIST = 1, NONE = 2 }

	export interface PutWorkflowRunPropertiesRequest {
		Name: string;
		RunId: string;
		RunProperties: WorkflowRunProperties;
	}

	export interface ResetJobBookmarkResponse {

		/**Defines a point that a job can resume processing. */
		JobBookmarkEntry?: JobBookmarkEntry;
	}

	export interface ResetJobBookmarkRequest {
		JobName: string;
		RunId?: string;
	}

	export interface SearchTablesResponse {
		NextToken?: string;
		TableList?: Array<Table>;
	}

	export interface SearchTablesRequest {
		CatalogId?: string;
		NextToken?: string;
		Filters?: Array<PropertyPredicate>;
		SearchText?: string;
		SortCriteria?: Array<SortCriterion>;
		MaxResults?: number;
	}

	export interface StartCrawlerRequest {
		Name: string;
	}

	export interface StartCrawlerScheduleRequest {
		CrawlerName: string;
	}

	export interface StartExportLabelsTaskRunResponse {
		TaskRunId?: string;
	}

	export interface StartExportLabelsTaskRunRequest {
		TransformId: string;
		OutputS3Path: string;
	}

	export interface StartImportLabelsTaskRunResponse {
		TaskRunId?: string;
	}

	export interface StartImportLabelsTaskRunRequest {
		TransformId: string;
		InputS3Path: string;
		ReplaceAllLabels?: boolean;
	}

	export interface StartJobRunResponse {
		JobRunId?: string;
	}

	export interface StartJobRunRequest {
		JobName: string;
		JobRunId?: string;
		Arguments?: GenericMap;
		AllocatedCapacity?: number;
		Timeout?: number;
		MaxCapacity?: number;
		SecurityConfiguration?: string;

		/**Specifies configuration properties of a notification. */
		NotificationProperty?: NotificationProperty;
		WorkerType?: StartJobRunRequestWorkerType;
		NumberOfWorkers?: number;
	}

	export enum StartJobRunRequestWorkerType { Standard = 0, G.1X = 1, G.2X = 2 }

	export interface StartMLEvaluationTaskRunResponse {
		TaskRunId?: string;
	}

	export interface StartMLEvaluationTaskRunRequest {
		TransformId: string;
	}

	export interface StartMLLabelingSetGenerationTaskRunResponse {
		TaskRunId?: string;
	}

	export interface StartMLLabelingSetGenerationTaskRunRequest {
		TransformId: string;
		OutputS3Path: string;
	}

	export interface StartTriggerResponse {
		Name?: string;
	}

	export interface StartTriggerRequest {
		Name: string;
	}

	export interface StartWorkflowRunResponse {
		RunId?: string;
	}

	export interface StartWorkflowRunRequest {
		Name: string;
	}

	export interface StopCrawlerRequest {
		Name: string;
	}

	export interface StopCrawlerScheduleRequest {
		CrawlerName: string;
	}

	export interface StopTriggerResponse {
		Name?: string;
	}

	export interface StopTriggerRequest {
		Name: string;
	}

	export interface StopWorkflowRunRequest {
		Name: string;
		RunId: string;
	}

	export interface TagResourceRequest {
		ResourceArn: string;
		TagsToAdd: TagsMap;
	}

	export interface UntagResourceRequest {
		ResourceArn: string;
		TagsToRemove: Array<TagKey>;
	}

	export interface UpdateClassifierRequest {

		/**Specifies a grok classifier to update when passed to <code>UpdateClassifier</code>. */
		GrokClassifier?: UpdateGrokClassifierRequest;

		/**Specifies an XML classifier to be updated. */
		XMLClassifier?: UpdateXMLClassifierRequest;

		/**Specifies a JSON classifier to be updated. */
		JsonClassifier?: UpdateJsonClassifierRequest;

		/**Specifies a custom CSV classifier to be updated. */
		CsvClassifier?: UpdateCsvClassifierRequest;
	}

	export interface UpdateConnectionRequest {
		CatalogId?: string;
		Name: string;

		/**A structure that is used to specify a connection to create or update. */
		ConnectionInput: ConnectionInput;
	}

	export interface UpdateCrawlerRequest {
		Name: string;
		Role?: string;
		DatabaseName?: string;
		Description?: string;

		/**Specifies data stores to crawl. */
		Targets?: CrawlerTargets;
		Schedule?: string;
		Classifiers?: Array<NameString>;
		TablePrefix?: string;

		/**A policy that specifies update and deletion behaviors for the crawler. */
		SchemaChangePolicy?: SchemaChangePolicy;
		Configuration?: string;
		CrawlerSecurityConfiguration?: string;
	}

	export interface UpdateCrawlerScheduleRequest {
		CrawlerName: string;
		Schedule?: string;
	}

	export interface UpdateDatabaseRequest {
		CatalogId?: string;
		Name: string;

		/**The structure used to create or update a database. */
		DatabaseInput: DatabaseInput;
	}

	export interface UpdateDevEndpointRequest {
		EndpointName: string;
		PublicKey?: string;
		AddPublicKeys?: Array<GenericString>;
		DeletePublicKeys?: Array<GenericString>;

		/**Custom libraries to be loaded into a development endpoint. */
		CustomLibraries?: DevEndpointCustomLibraries;
		UpdateEtlLibraries?: boolean;
		DeleteArguments?: Array<GenericString>;
		AddArguments?: MapValue;
	}

	export interface UpdateJobResponse {
		JobName?: string;
	}

	export interface UpdateJobRequest {
		JobName: string;

		/**Specifies information used to update an existing job definition. The previous job definition is completely overwritten by this information. */
		JobUpdate: JobUpdate;
	}

	export interface UpdateMLTransformResponse {
		TransformId?: string;
	}

	export interface UpdateMLTransformRequest {
		TransformId: string;
		Name?: string;
		Description?: string;

		/**The algorithm-specific parameters that are associated with the machine learning transform. */
		Parameters?: TransformParameters;
		Role?: string;
		GlueVersion?: string;
		MaxCapacity?: number;
		WorkerType?: UpdateMLTransformRequestWorkerType;
		NumberOfWorkers?: number;
		Timeout?: number;
		MaxRetries?: number;
	}

	export enum UpdateMLTransformRequestWorkerType { Standard = 0, G.1X = 1, G.2X = 2 }

	export interface UpdatePartitionRequest {
		CatalogId?: string;
		DatabaseName: string;
		TableName: string;
		PartitionValueList: Array<ValueString>;

		/**The structure used to create and update a partition. */
		PartitionInput: PartitionInput;
	}

	export interface UpdateTableRequest {
		CatalogId?: string;
		DatabaseName: string;

		/**A structure used to define a table. */
		TableInput: TableInput;
		SkipArchive?: boolean;
	}

	export interface UpdateTriggerResponse {

		/**Information about a specific trigger. */
		Trigger?: Trigger;
	}

	export interface UpdateTriggerRequest {
		Name: string;

		/**A structure used to provide information used to update a trigger. This object updates the previous trigger definition by overwriting it completely. */
		TriggerUpdate: TriggerUpdate;
	}

	export interface UpdateUserDefinedFunctionRequest {
		CatalogId?: string;
		DatabaseName: string;
		FunctionName: string;

		/**A structure used to create or update a user-defined function. */
		FunctionInput: UserDefinedFunctionInput;
	}

	export interface UpdateWorkflowResponse {
		Name?: string;
	}

	export interface UpdateWorkflowRequest {
		Name: string;
		Description?: string;
		DefaultRunProperties?: WorkflowRunProperties;
	}


	/**Specifies configuration properties of a notification. */
	export interface NotificationProperty {
		NotifyDelayAfter?: number;
	}


	/**Defines an action to be initiated by a trigger. */
	export interface Action {
		JobName?: string;
		Arguments?: GenericMap;
		Timeout?: number;
		SecurityConfiguration?: string;

		/**Specifies configuration properties of a notification. */
		NotificationProperty?: NotificationProperty;
		CrawlerName?: string;
	}


	/**Contains a list of values defining partitions. */
	export interface PartitionValueList {
		Values: Array<ValueString>;
	}


	/**Contains details about an error. */
	export interface ErrorDetail {
		ErrorCode?: string;
		ErrorMessage?: string;
	}


	/**Records an error that occurred when attempting to stop a specified job run. */
	export interface BatchStopJobRunError {
		JobName?: string;
		JobRunId?: string;

		/**Contains details about an error. */
		ErrorDetail?: ErrorDetail;
	}


	/**Records a successful request to stop a specified <code>JobRun</code>. */
	export interface BatchStopJobRunSuccessfulSubmission {
		JobName?: string;
		JobRunId?: string;
	}

	export enum TaskStatusType { STARTING = 0, RUNNING = 1, STOPPING = 2, STOPPED = 3, SUCCEEDED = 4, FAILED = 5, TIMEOUT = 6 }

	export enum CatalogEncryptionMode { DISABLED = 0, SSE-KMS = 1 }


	/**Specifies a table definition in the AWS Glue Data Catalog. */
	export interface CatalogEntry {
		DatabaseName: string;
		TableName: string;
	}


	/**A structure containing migration status information. */
	export interface CatalogImportStatus {
		ImportCompleted?: boolean;
		ImportTime?: Date;
		ImportedBy?: string;
	}


	/**Specifies an AWS Glue Data Catalog target. */
	export interface CatalogTarget {
		DatabaseName: string;
		Tables: Array<NameString>;
	}


	/**A classifier that uses <code>grok</code> patterns. */
	export interface GrokClassifier {
		Name: string;
		Classification: string;
		CreationTime?: Date;
		LastUpdated?: Date;
		Version?: number;
		GrokPattern: string;
		CustomPatterns?: string;
	}


	/**A classifier for <code>XML</code> content. */
	export interface XMLClassifier {
		Name: string;
		Classification: string;
		CreationTime?: Date;
		LastUpdated?: Date;
		Version?: number;
		RowTag?: string;
	}


	/**A classifier for <code>JSON</code> content. */
	export interface JsonClassifier {
		Name: string;
		CreationTime?: Date;
		LastUpdated?: Date;
		Version?: number;
		JsonPath: string;
	}


	/**A classifier for custom <code>CSV</code> content. */
	export interface CsvClassifier {
		Name: string;
		CreationTime?: Date;
		LastUpdated?: Date;
		Version?: number;
		Delimiter?: string;
		QuoteSymbol?: string;
		ContainsHeader?: CsvClassifierContainsHeader;
		Header?: Array<NameString>;
		DisableValueTrimming?: boolean;
		AllowSingleColumn?: boolean;
	}

	export enum CsvClassifierContainsHeader { UNKNOWN = 0, PRESENT = 1, ABSENT = 2 }


	/**<p>Classifiers are triggered during a crawl task. A classifier checks whether a given file is in a format it can handle. If it is, the classifier creates a schema in the form of a <code>StructType</code> object that matches that data format.</p> <p>You can use the standard classifiers that AWS Glue provides, or you can write your own classifiers to best categorize your data sources and specify the appropriate schemas to use for them. A classifier can be a <code>grok</code> classifier, an <code>XML</code> classifier, a <code>JSON</code> classifier, or a custom <code>CSV</code> classifier, as specified in one of the fields in the <code>Classifier</code> object.</p> */
	export interface Classifier {

		/**A classifier that uses <code>grok</code> patterns. */
		GrokClassifier?: GrokClassifier;

		/**A classifier for <code>XML</code> content. */
		XMLClassifier?: XMLClassifier;

		/**A classifier for <code>JSON</code> content. */
		JsonClassifier?: JsonClassifier;

		/**A classifier for custom <code>CSV</code> content. */
		CsvClassifier?: CsvClassifier;
	}

	export enum CloudWatchEncryptionMode { DISABLED = 0, SSE-KMS = 1 }


	/**Specifies how Amazon CloudWatch data should be encrypted. */
	export interface CloudWatchEncryption {
		CloudWatchEncryptionMode?: CloudWatchEncryptionCloudWatchEncryptionMode;
		KmsKeyArn?: string;
	}

	export enum CloudWatchEncryptionCloudWatchEncryptionMode { DISABLED = 0, SSE-KMS = 1 }


	/**Represents a directional edge in a directed acyclic graph (DAG). */
	export interface CodeGenEdge {
		Source: string;
		Target: string;
		TargetParameter?: string;
	}


	/**Represents a node in a directed acyclic graph (DAG) */
	export interface CodeGenNode {
		Id: string;
		NodeType: string;
		Args: Array<CodeGenNodeArg>;
		LineNumber?: number;
	}


	/**An argument or property of a node. */
	export interface CodeGenNodeArg {
		Name: string;
		Value: string;
		Param?: boolean;
	}


	/**A column in a <code>Table</code>. */
	export interface Column {
		Name: string;
		Type?: string;
		Comment?: string;
		Parameters?: ParametersMap;
	}

	export enum Comparator { EQUALS = 0, GREATER_THAN = 1, LESS_THAN = 2, GREATER_THAN_EQUALS = 3, LESS_THAN_EQUALS = 4 }

	export enum LogicalOperator { EQUALS = 0 }

	export enum JobRunState { STARTING = 0, RUNNING = 1, STOPPING = 2, STOPPED = 3, SUCCEEDED = 4, FAILED = 5, TIMEOUT = 6 }

	export enum CrawlState { RUNNING = 0, CANCELLING = 1, CANCELLED = 2, SUCCEEDED = 3, FAILED = 4 }


	/**Defines a condition under which a trigger fires. */
	export interface Condition {
		LogicalOperator?: ConditionLogicalOperator;
		JobName?: string;
		State?: ConditionState;
		CrawlerName?: string;
		CrawlState?: ConditionCrawlState;
	}

	export enum ConditionLogicalOperator { EQUALS = 0 }

	export enum ConditionState { STARTING = 0, RUNNING = 1, STOPPING = 2, STOPPED = 3, SUCCEEDED = 4, FAILED = 5, TIMEOUT = 6 }

	export enum ConditionCrawlState { RUNNING = 0, CANCELLING = 1, CANCELLED = 2, SUCCEEDED = 3, FAILED = 4 }


	/**<p>The confusion matrix shows you what your transform is predicting accurately and what types of errors it is making.</p> <p>For more information, see <a href="https://en.wikipedia.org/wiki/Confusion_matrix">Confusion matrix</a> in Wikipedia.</p> */
	export interface ConfusionMatrix {
		NumTruePositives?: number;
		NumFalsePositives?: number;
		NumTrueNegatives?: number;
		NumFalseNegatives?: number;
	}

	export enum ConnectionType { JDBC = 0, SFTP = 1, MONGODB = 2, KAFKA = 3 }


	/**Specifies the physical requirements for a connection. */
	export interface PhysicalConnectionRequirements {
		SubnetId?: string;
		SecurityGroupIdList?: Array<NameString>;
		AvailabilityZone?: string;
	}


	/**Defines a connection to a data source. */
	export interface Connection {
		Name?: string;
		Description?: string;
		ConnectionType?: ConnectionConnectionType;
		MatchCriteria?: Array<NameString>;
		ConnectionProperties?: ConnectionProperties;

		/**Specifies the physical requirements for a connection. */
		PhysicalConnectionRequirements?: PhysicalConnectionRequirements;
		CreationTime?: Date;
		LastUpdatedTime?: Date;
		LastUpdatedBy?: string;
	}

	export enum ConnectionConnectionType { JDBC = 0, SFTP = 1, MONGODB = 2, KAFKA = 3 }


	/**A structure that is used to specify a connection to create or update. */
	export interface ConnectionInput {
		Name: string;
		Description?: string;
		ConnectionType: ConnectionInputConnectionType;
		MatchCriteria?: Array<NameString>;
		ConnectionProperties: ConnectionProperties;

		/**Specifies the physical requirements for a connection. */
		PhysicalConnectionRequirements?: PhysicalConnectionRequirements;
	}

	export enum ConnectionInputConnectionType { JDBC = 0, SFTP = 1, MONGODB = 2, KAFKA = 3 }


	/**<p>The data structure used by the Data Catalog to encrypt the password as part of <code>CreateConnection</code> or <code>UpdateConnection</code> and store it in the <code>ENCRYPTED_PASSWORD</code> field in the connection properties. You can enable catalog encryption or only password encryption.</p> <p>When a <code>CreationConnection</code> request arrives containing a password, the Data Catalog first encrypts the password using your AWS KMS key. It then encrypts the whole connection object again if catalog encryption is also enabled.</p> <p>This encryption requires that you set AWS KMS key permissions to enable or restrict access on the password key according to your security requirements. For example, you might want only administrators to have decrypt permission on the password key.</p> */
	export interface ConnectionPasswordEncryption {
		ReturnConnectionPasswordEncrypted: boolean;
		AwsKmsKeyId?: string;
	}

	export enum ConnectionPropertyKey { HOST = 0, PORT = 1, USERNAME = 2, PASSWORD = 3, ENCRYPTED_PASSWORD = 4, JDBC_DRIVER_JAR_URI = 5, JDBC_DRIVER_CLASS_NAME = 6, JDBC_ENGINE = 7, JDBC_ENGINE_VERSION = 8, CONFIG_FILES = 9, INSTANCE_ID = 10, JDBC_CONNECTION_URL = 11, JDBC_ENFORCE_SSL = 12, CUSTOM_JDBC_CERT = 13, SKIP_CUSTOM_JDBC_CERT_VALIDATION = 14, CUSTOM_JDBC_CERT_STRING = 15, CONNECTION_URL = 16, KAFKA_BOOTSTRAP_SERVERS = 17 }


	/**Specifies the connections used by a job. */
	export interface ConnectionsList {
		Connections?: Array<GenericString>;
	}


	/**The details of a crawl in the workflow. */
	export interface Crawl {
		State?: CrawlState;
		StartedOn?: Date;
		CompletedOn?: Date;
		ErrorMessage?: string;
		LogGroup?: string;
		LogStream?: string;
	}

	export enum CrawlState { RUNNING = 0, CANCELLING = 1, CANCELLED = 2, SUCCEEDED = 3, FAILED = 4 }


	/**Specifies data stores to crawl. */
	export interface CrawlerTargets {
		S3Targets?: Array<S3Target>;
		JdbcTargets?: Array<JdbcTarget>;
		DynamoDBTargets?: Array<DynamoDBTarget>;
		CatalogTargets?: Array<CatalogTarget>;
	}


	/**A policy that specifies update and deletion behaviors for the crawler. */
	export interface SchemaChangePolicy {
		UpdateBehavior?: SchemaChangePolicyUpdateBehavior;
		DeleteBehavior?: SchemaChangePolicyDeleteBehavior;
	}

	export enum SchemaChangePolicyUpdateBehavior { LOG = 0, UPDATE_IN_DATABASE = 1 }

	export enum SchemaChangePolicyDeleteBehavior { LOG = 0, DELETE_FROM_DATABASE = 1, DEPRECATE_IN_DATABASE = 2 }

	export enum CrawlerState { READY = 0, RUNNING = 1, STOPPING = 2 }


	/**A scheduling object using a <code>cron</code> statement to schedule an event. */
	export interface Schedule {
		ScheduleExpression?: string;
		State?: ScheduleState;
	}

	export enum ScheduleState { SCHEDULED = 0, NOT_SCHEDULED = 1, TRANSITIONING = 2 }


	/**Status and error information about the most recent crawl. */
	export interface LastCrawlInfo {
		Status?: LastCrawlInfoStatus;
		ErrorMessage?: string;
		LogGroup?: string;
		LogStream?: string;
		MessagePrefix?: string;
		StartTime?: Date;
	}

	export enum LastCrawlInfoStatus { SUCCEEDED = 0, CANCELLED = 1, FAILED = 2 }


	/**Specifies a crawler program that examines a data source and uses classifiers to try to determine its schema. If successful, the crawler records metadata concerning the data source in the AWS Glue Data Catalog. */
	export interface Crawler {
		Name?: string;
		Role?: string;

		/**Specifies data stores to crawl. */
		Targets?: CrawlerTargets;
		DatabaseName?: string;
		Description?: string;
		Classifiers?: Array<NameString>;

		/**A policy that specifies update and deletion behaviors for the crawler. */
		SchemaChangePolicy?: SchemaChangePolicy;
		State?: CrawlerState;
		TablePrefix?: string;

		/**A scheduling object using a <code>cron</code> statement to schedule an event. */
		Schedule?: Schedule;
		CrawlElapsedTime?: number;
		CreationTime?: Date;
		LastUpdated?: Date;

		/**Status and error information about the most recent crawl. */
		LastCrawl?: LastCrawlInfo;
		Version?: number;
		Configuration?: string;
		CrawlerSecurityConfiguration?: string;
	}

	export enum CrawlerState { READY = 0, RUNNING = 1, STOPPING = 2 }


	/**Metrics for a specified crawler. */
	export interface CrawlerMetrics {
		CrawlerName?: string;
		TimeLeftSeconds?: number;
		StillEstimating?: boolean;
		LastRuntimeSeconds?: number;
		MedianRuntimeSeconds?: number;
		TablesCreated?: number;
		TablesUpdated?: number;
		TablesDeleted?: number;
	}


	/**The details of a Crawler node present in the workflow. */
	export interface CrawlerNodeDetails {
		Crawls?: Array<Crawl>;
	}


	/**Specifies a <code>grok</code> classifier for <code>CreateClassifier</code> to create. */
	export interface CreateGrokClassifierRequest {
		Classification: string;
		Name: string;
		GrokPattern: string;
		CustomPatterns?: string;
	}


	/**Specifies an XML classifier for <code>CreateClassifier</code> to create. */
	export interface CreateXMLClassifierRequest {
		Classification: string;
		Name: string;
		RowTag?: string;
	}


	/**Specifies a JSON classifier for <code>CreateClassifier</code> to create. */
	export interface CreateJsonClassifierRequest {
		Name: string;
		JsonPath: string;
	}


	/**Specifies a custom CSV classifier for <code>CreateClassifier</code> to create. */
	export interface CreateCsvClassifierRequest {
		Name: string;
		Delimiter?: string;
		QuoteSymbol?: string;
		ContainsHeader?: CreateCsvClassifierRequestContainsHeader;
		Header?: Array<NameString>;
		DisableValueTrimming?: boolean;
		AllowSingleColumn?: boolean;
	}

	export enum CreateCsvClassifierRequestContainsHeader { UNKNOWN = 0, PRESENT = 1, ABSENT = 2 }

	export enum CsvHeaderOption { UNKNOWN = 0, PRESENT = 1, ABSENT = 2 }


	/**The structure used to create or update a database. */
	export interface DatabaseInput {
		Name: string;
		Description?: string;
		LocationUri?: string;
		Parameters?: ParametersMap;
		CreateTableDefaultPermissions?: Array<PrincipalPermissions>;
	}

	export enum WorkerType { Standard = 0, G.1X = 1, G.2X = 2 }


	/**An execution property of a job. */
	export interface ExecutionProperty {
		MaxConcurrentRuns?: number;
	}


	/**Specifies code executed when a job is run. */
	export interface JobCommand {
		Name?: string;
		ScriptLocation?: string;
		PythonVersion?: string;
	}


	/**The algorithm-specific parameters that are associated with the machine learning transform. */
	export interface TransformParameters {
		TransformType: TransformParametersTransformType;

		/**The parameters to configure the find matches transform. */
		FindMatchesParameters?: FindMatchesParameters;
	}

	export enum TransformParametersTransformType { FIND_MATCHES = 0 }


	/**The structure used to create and update a partition. */
	export interface PartitionInput {
		Values?: Array<ValueString>;
		LastAccessTime?: Date;

		/**Describes the physical storage of table data. */
		StorageDescriptor?: StorageDescriptor;
		Parameters?: ParametersMap;
		LastAnalyzedTime?: Date;
	}

	export enum Language { PYTHON = 0, SCALA = 1 }


	/**Specifies an encryption configuration. */
	export interface EncryptionConfiguration {
		S3Encryption?: Array<S3Encryption>;

		/**Specifies how Amazon CloudWatch data should be encrypted. */
		CloudWatchEncryption?: CloudWatchEncryption;

		/**Specifies how job bookmark data should be encrypted. */
		JobBookmarksEncryption?: JobBookmarksEncryption;
	}


	/**A structure used to define a table. */
	export interface TableInput {
		Name: string;
		Description?: string;
		Owner?: string;
		LastAccessTime?: Date;
		LastAnalyzedTime?: Date;
		Retention?: number;

		/**Describes the physical storage of table data. */
		StorageDescriptor?: StorageDescriptor;
		PartitionKeys?: Array<Column>;
		ViewOriginalText?: string;
		ViewExpandedText?: string;
		TableType?: string;
		Parameters?: ParametersMap;
	}

	export enum TriggerType { SCHEDULED = 0, CONDITIONAL = 1, ON_DEMAND = 2 }


	/**Defines the predicate of the trigger, which determines when it fires. */
	export interface Predicate {
		Logical?: PredicateLogical;
		Conditions?: Array<Condition>;
	}

	export enum PredicateLogical { AND = 0, ANY = 1 }


	/**A structure used to create or update a user-defined function. */
	export interface UserDefinedFunctionInput {
		FunctionName?: string;
		ClassName?: string;
		OwnerName?: string;
		OwnerType?: UserDefinedFunctionInputOwnerType;
		ResourceUris?: Array<ResourceUri>;
	}

	export enum UserDefinedFunctionInputOwnerType { USER = 0, ROLE = 1, GROUP = 2 }


	/**Specifies the encryption-at-rest configuration for the Data Catalog. */
	export interface EncryptionAtRest {
		CatalogEncryptionMode: EncryptionAtRestCatalogEncryptionMode;
		SseAwsKmsKeyId?: string;
	}

	export enum EncryptionAtRestCatalogEncryptionMode { DISABLED = 0, SSE-KMS = 1 }


	/**Contains configuration information for maintaining Data Catalog security. */
	export interface DataCatalogEncryptionSettings {

		/**Specifies the encryption-at-rest configuration for the Data Catalog. */
		EncryptionAtRest?: EncryptionAtRest;

		/**<p>The data structure used by the Data Catalog to encrypt the password as part of <code>CreateConnection</code> or <code>UpdateConnection</code> and store it in the <code>ENCRYPTED_PASSWORD</code> field in the connection properties. You can enable catalog encryption or only password encryption.</p> <p>When a <code>CreationConnection</code> request arrives containing a password, the Data Catalog first encrypts the password using your AWS KMS key. It then encrypts the whole connection object again if catalog encryption is also enabled.</p> <p>This encryption requires that you set AWS KMS key permissions to enable or restrict access on the password key according to your security requirements. For example, you might want only administrators to have decrypt permission on the password key.</p> */
		ConnectionPasswordEncryption?: ConnectionPasswordEncryption;
	}


	/**The AWS Lake Formation principal. */
	export interface DataLakePrincipal {
		DataLakePrincipalIdentifier?: string;
	}


	/**The <code>Database</code> object represents a logical grouping of tables that might reside in a Hive metastore or an RDBMS. */
	export interface Database {
		Name: string;
		Description?: string;
		LocationUri?: string;
		Parameters?: ParametersMap;
		CreateTime?: Date;
		CreateTableDefaultPermissions?: Array<PrincipalPermissions>;
	}

	export enum DeleteBehavior { LOG = 0, DELETE_FROM_DATABASE = 1, DEPRECATE_IN_DATABASE = 2 }


	/**A development endpoint where a developer can remotely debug extract, transform, and load (ETL) scripts. */
	export interface DevEndpoint {
		EndpointName?: string;
		RoleArn?: string;
		SecurityGroupIds?: Array<GenericString>;
		SubnetId?: string;
		YarnEndpointAddress?: string;
		PrivateAddress?: string;
		ZeppelinRemoteSparkInterpreterPort?: number;
		PublicAddress?: string;
		Status?: string;
		WorkerType?: DevEndpointWorkerType;
		GlueVersion?: string;
		NumberOfWorkers?: number;
		NumberOfNodes?: number;
		AvailabilityZone?: string;
		VpcId?: string;
		ExtraPythonLibsS3Path?: string;
		ExtraJarsS3Path?: string;
		FailureReason?: string;
		LastUpdateStatus?: string;
		CreatedTimestamp?: Date;
		LastModifiedTimestamp?: Date;
		PublicKey?: string;
		PublicKeys?: Array<GenericString>;
		SecurityConfiguration?: string;
		Arguments?: MapValue;
	}

	export enum DevEndpointWorkerType { Standard = 0, G.1X = 1, G.2X = 2 }


	/**Custom libraries to be loaded into a development endpoint. */
	export interface DevEndpointCustomLibraries {
		ExtraPythonLibsS3Path?: string;
		ExtraJarsS3Path?: string;
	}


	/**Specifies an Amazon DynamoDB table to crawl. */
	export interface DynamoDBTarget {
		Path?: string;
	}


	/**An edge represents a directed connection between two AWS Glue components which are part of the workflow the edge belongs to. */
	export interface Edge {
		SourceId?: string;
		DestinationId?: string;
	}


	/**Specifies how job bookmark data should be encrypted. */
	export interface JobBookmarksEncryption {
		JobBookmarksEncryptionMode?: JobBookmarksEncryptionJobBookmarksEncryptionMode;
		KmsKeyArn?: string;
	}

	export enum JobBookmarksEncryptionJobBookmarksEncryptionMode { DISABLED = 0, CSE-KMS = 1 }

	export enum TransformType { FIND_MATCHES = 0 }


	/**The evaluation metrics for the find matches algorithm. The quality of your machine learning transform is measured by getting your transform to predict some matches and comparing the results to known matches from the same dataset. The quality metrics are based on a subset of your data, so they are not precise. */
	export interface FindMatchesMetrics {
		AreaUnderPRCurve?: number;
		Precision?: number;
		Recall?: number;
		F1?: number;

		/**<p>The confusion matrix shows you what your transform is predicting accurately and what types of errors it is making.</p> <p>For more information, see <a href="https://en.wikipedia.org/wiki/Confusion_matrix">Confusion matrix</a> in Wikipedia.</p> */
		ConfusionMatrix?: ConfusionMatrix;
	}


	/**Evaluation metrics provide an estimate of the quality of your machine learning transform. */
	export interface EvaluationMetrics {
		TransformType: EvaluationMetricsTransformType;

		/**The evaluation metrics for the find matches algorithm. The quality of your machine learning transform is measured by getting your transform to predict some matches and comparing the results to known matches from the same dataset. The quality metrics are based on a subset of your data, so they are not precise. */
		FindMatchesMetrics?: FindMatchesMetrics;
	}

	export enum EvaluationMetricsTransformType { FIND_MATCHES = 0 }

	export enum ExistCondition { MUST_EXIST = 0, NOT_EXIST = 1, NONE = 2 }


	/**Specifies configuration properties for an exporting labels task run. */
	export interface ExportLabelsTaskRunProperties {
		OutputS3Path?: string;
	}


	/**The parameters to configure the find matches transform. */
	export interface FindMatchesParameters {
		PrimaryKeyColumnName?: string;
		PrecisionRecallTradeoff?: number;
		AccuracyCostTradeoff?: number;
		EnforceProvidedLabels?: boolean;
	}


	/**Specifies configuration properties for a Find Matches task run. */
	export interface FindMatchesTaskRunProperties {
		JobId?: string;
		JobName?: string;
		JobRunId?: string;
	}


	/**Filters the connection definitions that are returned by the <code>GetConnections</code> API operation. */
	export interface GetConnectionsFilter {
		MatchCriteria?: Array<NameString>;
		ConnectionType?: GetConnectionsFilterConnectionType;
	}

	export enum GetConnectionsFilterConnectionType { JDBC = 0, SFTP = 1, MONGODB = 2, KAFKA = 3 }


	/**Defines a point that a job can resume processing. */
	export interface JobBookmarkEntry {
		JobName?: string;
		Version?: number;
		Run?: number;
		Attempt?: number;
		PreviousRunId?: string;
		RunId?: string;
		JobBookmark?: string;
	}


	/**Specifies a job definition. */
	export interface Job {
		Name?: string;
		Description?: string;
		LogUri?: string;
		Role?: string;
		CreatedOn?: Date;
		LastModifiedOn?: Date;

		/**An execution property of a job. */
		ExecutionProperty?: ExecutionProperty;

		/**Specifies code executed when a job is run. */
		Command?: JobCommand;
		DefaultArguments?: GenericMap;
		NonOverridableArguments?: GenericMap;

		/**Specifies the connections used by a job. */
		Connections?: ConnectionsList;
		MaxRetries?: number;
		AllocatedCapacity?: number;
		Timeout?: number;
		MaxCapacity?: number;
		WorkerType?: JobWorkerType;
		NumberOfWorkers?: number;
		SecurityConfiguration?: string;

		/**Specifies configuration properties of a notification. */
		NotificationProperty?: NotificationProperty;
		GlueVersion?: string;
	}

	export enum JobWorkerType { Standard = 0, G.1X = 1, G.2X = 2 }


	/**Contains information about a job run. */
	export interface JobRun {
		Id?: string;
		Attempt?: number;
		PreviousRunId?: string;
		TriggerName?: string;
		JobName?: string;
		StartedOn?: Date;
		LastModifiedOn?: Date;
		CompletedOn?: Date;
		JobRunState?: JobRunJobRunState;
		Arguments?: GenericMap;
		ErrorMessage?: string;
		PredecessorRuns?: Array<Predecessor>;
		AllocatedCapacity?: number;
		ExecutionTime?: number;
		Timeout?: number;
		MaxCapacity?: number;
		WorkerType?: JobRunWorkerType;
		NumberOfWorkers?: number;
		SecurityConfiguration?: string;
		LogGroupName?: string;

		/**Specifies configuration properties of a notification. */
		NotificationProperty?: NotificationProperty;
		GlueVersion?: string;
	}

	export enum JobRunJobRunState { STARTING = 0, RUNNING = 1, STOPPING = 2, STOPPED = 3, SUCCEEDED = 4, FAILED = 5, TIMEOUT = 6 }

	export enum JobRunWorkerType { Standard = 0, G.1X = 1, G.2X = 2 }


	/**The configuration properties for the task run. */
	export interface TaskRunProperties {
		TaskType?: TaskRunPropertiesTaskType;

		/**Specifies configuration properties for an importing labels task run. */
		ImportLabelsTaskRunProperties?: ImportLabelsTaskRunProperties;

		/**Specifies configuration properties for an exporting labels task run. */
		ExportLabelsTaskRunProperties?: ExportLabelsTaskRunProperties;

		/**Specifies configuration properties for a labeling set generation task run. */
		LabelingSetGenerationTaskRunProperties?: LabelingSetGenerationTaskRunProperties;

		/**Specifies configuration properties for a Find Matches task run. */
		FindMatchesTaskRunProperties?: FindMatchesTaskRunProperties;
	}

	export enum TaskRunPropertiesTaskType { EVALUATION = 0, LABELING_SET_GENERATION = 1, IMPORT_LABELS = 2, EXPORT_LABELS = 3, FIND_MATCHES = 4 }


	/**The criteria that are used to filter the task runs for the machine learning transform. */
	export interface TaskRunFilterCriteria {
		TaskRunType?: TaskRunFilterCriteriaTaskRunType;
		Status?: TaskRunFilterCriteriaStatus;
		StartedBefore?: Date;
		StartedAfter?: Date;
	}

	export enum TaskRunFilterCriteriaTaskRunType { EVALUATION = 0, LABELING_SET_GENERATION = 1, IMPORT_LABELS = 2, EXPORT_LABELS = 3, FIND_MATCHES = 4 }

	export enum TaskRunFilterCriteriaStatus { STARTING = 0, RUNNING = 1, STOPPING = 2, STOPPED = 3, SUCCEEDED = 4, FAILED = 5, TIMEOUT = 6 }


	/**The sorting criteria that are used to sort the list of task runs for the machine learning transform. */
	export interface TaskRunSortCriteria {
		Column: TaskRunSortCriteriaColumn;
		SortDirection: TaskRunSortCriteriaSortDirection;
	}

	export enum TaskRunSortCriteriaColumn { TASK_RUN_TYPE = 0, STATUS = 1, STARTED = 2 }

	export enum TaskRunSortCriteriaSortDirection { DESCENDING = 0, ASCENDING = 1 }

	export enum TransformStatusType { NOT_READY = 0, READY = 1, DELETING = 2 }


	/**The criteria used to filter the machine learning transforms. */
	export interface TransformFilterCriteria {
		Name?: string;
		TransformType?: TransformFilterCriteriaTransformType;
		Status?: TransformFilterCriteriaStatus;
		GlueVersion?: string;
		CreatedBefore?: Date;
		CreatedAfter?: Date;
		LastModifiedBefore?: Date;
		LastModifiedAfter?: Date;
		Schema?: Array<SchemaColumn>;
	}

	export enum TransformFilterCriteriaTransformType { FIND_MATCHES = 0 }

	export enum TransformFilterCriteriaStatus { NOT_READY = 0, READY = 1, DELETING = 2 }


	/**The sorting criteria that are associated with the machine learning transform. */
	export interface TransformSortCriteria {
		Column: TransformSortCriteriaColumn;
		SortDirection: TransformSortCriteriaSortDirection;
	}

	export enum TransformSortCriteriaColumn { NAME = 0, TRANSFORM_TYPE = 1, STATUS = 2, CREATED = 3, LAST_MODIFIED = 4 }

	export enum TransformSortCriteriaSortDirection { DESCENDING = 0, ASCENDING = 1 }


	/**The location of resources. */
	export interface Location {
		Jdbc?: Array<CodeGenNodeArg>;
		S3?: Array<CodeGenNodeArg>;
		DynamoDB?: Array<CodeGenNodeArg>;
	}


	/**Represents a slice of table data. */
	export interface Partition {
		Values?: Array<ValueString>;
		DatabaseName?: string;
		TableName?: string;
		CreationTime?: Date;
		LastAccessTime?: Date;

		/**Describes the physical storage of table data. */
		StorageDescriptor?: StorageDescriptor;
		Parameters?: ParametersMap;
		LastAnalyzedTime?: Date;
	}


	/**Defines a non-overlapping region of a table's partitions, allowing multiple requests to be executed in parallel. */
	export interface Segment {
		SegmentNumber: number;
		TotalSegments: number;
	}


	/**Specifies a security configuration. */
	export interface SecurityConfiguration {
		Name?: string;
		CreatedTimeStamp?: Date;

		/**Specifies an encryption configuration. */
		EncryptionConfiguration?: EncryptionConfiguration;
	}


	/**Represents a collection of related data organized in columns and rows. */
	export interface Table {
		Name: string;
		DatabaseName?: string;
		Description?: string;
		Owner?: string;
		CreateTime?: Date;
		UpdateTime?: Date;
		LastAccessTime?: Date;
		LastAnalyzedTime?: Date;
		Retention?: number;

		/**Describes the physical storage of table data. */
		StorageDescriptor?: StorageDescriptor;
		PartitionKeys?: Array<Column>;
		ViewOriginalText?: string;
		ViewExpandedText?: string;
		TableType?: string;
		Parameters?: ParametersMap;
		CreatedBy?: string;
		IsRegisteredWithLakeFormation?: boolean;
	}


	/**Specifies a version of a table. */
	export interface TableVersion {

		/**Represents a collection of related data organized in columns and rows. */
		Table?: Table;
		VersionId?: string;
	}


	/**Information about a specific trigger. */
	export interface Trigger {
		Name?: string;
		WorkflowName?: string;
		Id?: string;
		Type?: TriggerType;
		State?: TriggerState;
		Description?: string;
		Schedule?: string;
		Actions?: Array<Action>;

		/**Defines the predicate of the trigger, which determines when it fires. */
		Predicate?: Predicate;
	}

	export enum TriggerType { SCHEDULED = 0, CONDITIONAL = 1, ON_DEMAND = 2 }

	export enum TriggerState { CREATING = 0, CREATED = 1, ACTIVATING = 2, ACTIVATED = 3, DEACTIVATING = 4, DEACTIVATED = 5, DELETING = 6, UPDATING = 7 }


	/**Represents the equivalent of a Hive user-defined function (<code>UDF</code>) definition. */
	export interface UserDefinedFunction {
		FunctionName?: string;
		DatabaseName?: string;
		ClassName?: string;
		OwnerName?: string;
		OwnerType?: UserDefinedFunctionOwnerType;
		CreateTime?: Date;
		ResourceUris?: Array<ResourceUri>;
	}

	export enum UserDefinedFunctionOwnerType { USER = 0, ROLE = 1, GROUP = 2 }


	/**A workflow represents a flow in which AWS Glue components should be executed to complete a logical task. */
	export interface Workflow {
		Name?: string;
		Description?: string;
		DefaultRunProperties?: WorkflowRunProperties;
		CreatedOn?: Date;
		LastModifiedOn?: Date;

		/**A workflow run is an execution of a workflow providing all the runtime information. */
		LastRun?: WorkflowRun;

		/**A workflow graph represents the complete workflow containing all the AWS Glue components present in the workflow and all the directed connections between them. */
		Graph?: WorkflowGraph;
	}


	/**A workflow run is an execution of a workflow providing all the runtime information. */
	export interface WorkflowRun {
		Name?: string;
		WorkflowRunId?: string;
		WorkflowRunProperties?: WorkflowRunProperties;
		StartedOn?: Date;
		CompletedOn?: Date;
		Status?: WorkflowRunStatus;

		/**Workflow run statistics provides statistics about the workflow run. */
		Statistics?: WorkflowRunStatistics;

		/**A workflow graph represents the complete workflow containing all the AWS Glue components present in the workflow and all the directed connections between them. */
		Graph?: WorkflowGraph;
	}

	export enum WorkflowRunStatus { RUNNING = 0, COMPLETED = 1, STOPPING = 2, STOPPED = 3 }


	/**The database and table in the AWS Glue Data Catalog that is used for input or output data. */
	export interface GlueTable {
		DatabaseName: string;
		TableName: string;
		CatalogId?: string;
		ConnectionName?: string;
	}


	/**Specifies configuration properties for an importing labels task run. */
	export interface ImportLabelsTaskRunProperties {
		InputS3Path?: string;
		Replace?: boolean;
	}


	/**Specifies a JDBC data store to crawl. */
	export interface JdbcTarget {
		ConnectionName?: string;
		Path?: string;
		Exclusions?: Array<Path>;
	}

	export enum JobBookmarksEncryptionMode { DISABLED = 0, CSE-KMS = 1 }


	/**The details of a Job node present in the workflow. */
	export interface JobNodeDetails {
		JobRuns?: Array<JobRun>;
	}


	/**Specifies information used to update an existing job definition. The previous job definition is completely overwritten by this information. */
	export interface JobUpdate {
		Description?: string;
		LogUri?: string;
		Role?: string;

		/**An execution property of a job. */
		ExecutionProperty?: ExecutionProperty;

		/**Specifies code executed when a job is run. */
		Command?: JobCommand;
		DefaultArguments?: GenericMap;
		NonOverridableArguments?: GenericMap;

		/**Specifies the connections used by a job. */
		Connections?: ConnectionsList;
		MaxRetries?: number;
		AllocatedCapacity?: number;
		Timeout?: number;
		MaxCapacity?: number;
		WorkerType?: JobUpdateWorkerType;
		NumberOfWorkers?: number;
		SecurityConfiguration?: string;

		/**Specifies configuration properties of a notification. */
		NotificationProperty?: NotificationProperty;
		GlueVersion?: string;
	}

	export enum JobUpdateWorkerType { Standard = 0, G.1X = 1, G.2X = 2 }


	/**Specifies configuration properties for a labeling set generation task run. */
	export interface LabelingSetGenerationTaskRunProperties {
		OutputS3Path?: string;
	}

	export enum LastCrawlStatus { SUCCEEDED = 0, CANCELLED = 1, FAILED = 2 }

	export enum Logical { AND = 0, ANY = 1 }


	/**A structure for a machine learning transform. */
	export interface MLTransform {
		TransformId?: string;
		Name?: string;
		Description?: string;
		Status?: MLTransformStatus;
		CreatedOn?: Date;
		LastModifiedOn?: Date;
		InputRecordTables?: Array<GlueTable>;

		/**The algorithm-specific parameters that are associated with the machine learning transform. */
		Parameters?: TransformParameters;

		/**Evaluation metrics provide an estimate of the quality of your machine learning transform. */
		EvaluationMetrics?: EvaluationMetrics;
		LabelCount?: number;
		Schema?: Array<SchemaColumn>;
		Role?: string;
		GlueVersion?: string;
		MaxCapacity?: number;
		WorkerType?: MLTransformWorkerType;
		NumberOfWorkers?: number;
		Timeout?: number;
		MaxRetries?: number;
	}

	export enum MLTransformStatus { NOT_READY = 0, READY = 1, DELETING = 2 }

	export enum MLTransformWorkerType { Standard = 0, G.1X = 1, G.2X = 2 }


	/**Defines a mapping. */
	export interface MappingEntry {
		SourceTable?: string;
		SourcePath?: string;
		SourceType?: string;
		TargetTable?: string;
		TargetPath?: string;
		TargetType?: string;
	}

	export enum NodeType { CRAWLER = 0, JOB = 1, TRIGGER = 2 }


	/**The details of a Trigger node present in the workflow. */
	export interface TriggerNodeDetails {

		/**Information about a specific trigger. */
		Trigger?: Trigger;
	}


	/**A node represents an AWS Glue component like Trigger, Job etc. which is part of a workflow. */
	export interface Node {
		Type?: NodeType;
		Name?: string;
		UniqueId?: string;

		/**The details of a Trigger node present in the workflow. */
		TriggerDetails?: TriggerNodeDetails;

		/**The details of a Job node present in the workflow. */
		JobDetails?: JobNodeDetails;

		/**The details of a Crawler node present in the workflow. */
		CrawlerDetails?: CrawlerNodeDetails;
	}

	export enum NodeType { CRAWLER = 0, JOB = 1, TRIGGER = 2 }


	/**Specifies the sort order of a sorted column. */
	export interface Order {
		Column: string;
		SortOrder: number;
	}


	/**Describes the physical storage of table data. */
	export interface StorageDescriptor {
		Columns?: Array<Column>;
		Location?: string;
		InputFormat?: string;
		OutputFormat?: string;
		Compressed?: boolean;
		NumberOfBuckets?: number;

		/**Information about a serialization/deserialization program (SerDe) that serves as an extractor and loader. */
		SerdeInfo?: SerDeInfo;
		BucketColumns?: Array<NameString>;
		SortColumns?: Array<Order>;
		Parameters?: ParametersMap;

		/**Specifies skewed values in a table. Skewed values are those that occur with very high frequency. */
		SkewedInfo?: SkewedInfo;
		StoredAsSubDirectories?: boolean;
	}


	/**Contains information about a partition error. */
	export interface PartitionError {
		PartitionValues?: Array<ValueString>;

		/**Contains details about an error. */
		ErrorDetail?: ErrorDetail;
	}

	export enum Permission { ALL = 0, SELECT = 1, ALTER = 2, DROP = 3, DELETE = 4, INSERT = 5, CREATE_DATABASE = 6, CREATE_TABLE = 7, DATA_LOCATION_ACCESS = 8 }


	/**A job run that was used in the predicate of a conditional trigger that triggered this job run. */
	export interface Predecessor {
		JobName?: string;
		RunId?: string;
	}


	/**Permissions granted to a principal. */
	export interface PrincipalPermissions {

		/**The AWS Lake Formation principal. */
		Principal?: DataLakePrincipal;
		Permissions?: Array<Permission>;
	}

	export enum PrincipalType { USER = 0, ROLE = 1, GROUP = 2 }


	/**Defines a property predicate. */
	export interface PropertyPredicate {
		Key?: string;
		Value?: string;
		Comparator?: PropertyPredicateComparator;
	}

	export enum PropertyPredicateComparator { EQUALS = 0, GREATER_THAN = 1, LESS_THAN = 2, GREATER_THAN_EQUALS = 3, LESS_THAN_EQUALS = 4 }

	export enum ResourceType { JAR = 0, FILE = 1, ARCHIVE = 2 }


	/**The URIs for function resources. */
	export interface ResourceUri {
		ResourceType?: ResourceUriResourceType;
		Uri?: string;
	}

	export enum ResourceUriResourceType { JAR = 0, FILE = 1, ARCHIVE = 2 }

	export enum S3EncryptionMode { DISABLED = 0, SSE-KMS = 1, SSE-S3 = 2 }


	/**Specifies how Amazon Simple Storage Service (Amazon S3) data should be encrypted. */
	export interface S3Encryption {
		S3EncryptionMode?: S3EncryptionS3EncryptionMode;
		KmsKeyArn?: string;
	}

	export enum S3EncryptionS3EncryptionMode { DISABLED = 0, SSE-KMS = 1, SSE-S3 = 2 }


	/**Specifies a data store in Amazon Simple Storage Service (Amazon S3). */
	export interface S3Target {
		Path?: string;
		Exclusions?: Array<Path>;
	}

	export enum ScheduleState { SCHEDULED = 0, NOT_SCHEDULED = 1, TRANSITIONING = 2 }

	export enum UpdateBehavior { LOG = 0, UPDATE_IN_DATABASE = 1 }


	/**A key-value pair representing a column and data type that this transform can run against. The <code>Schema</code> parameter of the <code>MLTransform</code> may contain up to 100 of these structures. */
	export interface SchemaColumn {
		Name?: string;
		DataType?: string;
	}


	/**Information about a serialization/deserialization program (SerDe) that serves as an extractor and loader. */
	export interface SerDeInfo {
		Name?: string;
		SerializationLibrary?: string;
		Parameters?: ParametersMap;
	}


	/**Specifies skewed values in a table. Skewed values are those that occur with very high frequency. */
	export interface SkewedInfo {
		SkewedColumnNames?: Array<NameString>;
		SkewedColumnValues?: Array<ColumnValuesString>;
		SkewedColumnValueLocationMaps?: LocationMap;
	}

	export enum Sort { ASC = 0, DESC = 1 }


	/**Specifies a field to sort by and a sort order. */
	export interface SortCriterion {
		FieldName?: string;
		Sort?: SortCriterionSort;
	}

	export enum SortCriterionSort { ASC = 0, DESC = 1 }

	export enum SortDirectionType { DESCENDING = 0, ASCENDING = 1 }


	/**An error record for table operations. */
	export interface TableError {
		TableName?: string;

		/**Contains details about an error. */
		ErrorDetail?: ErrorDetail;
	}


	/**An error record for table-version operations. */
	export interface TableVersionError {
		TableName?: string;
		VersionId?: string;

		/**Contains details about an error. */
		ErrorDetail?: ErrorDetail;
	}


	/**The sampling parameters that are associated with the machine learning transform. */
	export interface TaskRun {
		TransformId?: string;
		TaskRunId?: string;
		Status?: TaskRunStatus;
		LogGroupName?: string;

		/**The configuration properties for the task run. */
		Properties?: TaskRunProperties;
		ErrorString?: string;
		StartedOn?: Date;
		LastModifiedOn?: Date;
		CompletedOn?: Date;
		ExecutionTime?: number;
	}

	export enum TaskRunStatus { STARTING = 0, RUNNING = 1, STOPPING = 2, STOPPED = 3, SUCCEEDED = 4, FAILED = 5, TIMEOUT = 6 }

	export enum TaskType { EVALUATION = 0, LABELING_SET_GENERATION = 1, IMPORT_LABELS = 2, EXPORT_LABELS = 3, FIND_MATCHES = 4 }

	export enum TaskRunSortColumnType { TASK_RUN_TYPE = 0, STATUS = 1, STARTED = 2 }

	export enum TransformSortColumnType { NAME = 0, TRANSFORM_TYPE = 1, STATUS = 2, CREATED = 3, LAST_MODIFIED = 4 }

	export enum TriggerState { CREATING = 0, CREATED = 1, ACTIVATING = 2, ACTIVATED = 3, DEACTIVATING = 4, DEACTIVATED = 5, DELETING = 6, UPDATING = 7 }


	/**A structure used to provide information used to update a trigger. This object updates the previous trigger definition by overwriting it completely. */
	export interface TriggerUpdate {
		Name?: string;
		Description?: string;
		Schedule?: string;
		Actions?: Array<Action>;

		/**Defines the predicate of the trigger, which determines when it fires. */
		Predicate?: Predicate;
	}


	/**Specifies a grok classifier to update when passed to <code>UpdateClassifier</code>. */
	export interface UpdateGrokClassifierRequest {
		Name: string;
		Classification?: string;
		GrokPattern?: string;
		CustomPatterns?: string;
	}


	/**Specifies an XML classifier to be updated. */
	export interface UpdateXMLClassifierRequest {
		Name: string;
		Classification?: string;
		RowTag?: string;
	}


	/**Specifies a JSON classifier to be updated. */
	export interface UpdateJsonClassifierRequest {
		Name: string;
		JsonPath?: string;
	}


	/**Specifies a custom CSV classifier to be updated. */
	export interface UpdateCsvClassifierRequest {
		Name: string;
		Delimiter?: string;
		QuoteSymbol?: string;
		ContainsHeader?: UpdateCsvClassifierRequestContainsHeader;
		Header?: Array<NameString>;
		DisableValueTrimming?: boolean;
		AllowSingleColumn?: boolean;
	}

	export enum UpdateCsvClassifierRequestContainsHeader { UNKNOWN = 0, PRESENT = 1, ABSENT = 2 }


	/**A workflow graph represents the complete workflow containing all the AWS Glue components present in the workflow and all the directed connections between them. */
	export interface WorkflowGraph {
		Nodes?: Array<Node>;
		Edges?: Array<Edge>;
	}

	export enum WorkflowRunStatus { RUNNING = 0, COMPLETED = 1, STOPPING = 2, STOPPED = 3 }


	/**Workflow run statistics provides statistics about the workflow run. */
	export interface WorkflowRunStatistics {
		TotalActions?: number;
		TimeoutActions?: number;
		FailedActions?: number;
		StoppedActions?: number;
		SucceededActions?: number;
		RunningActions?: number;
	}

	@Injectable()
	export class DemoClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates one or more partitions in a batch operation.
		 * Post /#X-Amz-Target=AWSGlue.BatchCreatePartition
		 * @return {BatchCreatePartitionResponse} Success
		 */
		BatchCreatePartition(requestBody: BatchCreatePartitionRequest, headersHandler?: () => HttpHeaders): Observable<BatchCreatePartitionResponse> {
			return this.http.post<BatchCreatePartitionResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.BatchCreatePartition', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Deletes a list of connection definitions from the Data Catalog.
		 * Post /#X-Amz-Target=AWSGlue.BatchDeleteConnection
		 * @return {BatchDeleteConnectionResponse} Success
		 */
		BatchDeleteConnection(requestBody: BatchDeleteConnectionRequest, headersHandler?: () => HttpHeaders): Observable<BatchDeleteConnectionResponse> {
			return this.http.post<BatchDeleteConnectionResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.BatchDeleteConnection', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Deletes one or more partitions in a batch operation.
		 * Post /#X-Amz-Target=AWSGlue.BatchDeletePartition
		 * @return {BatchDeletePartitionResponse} Success
		 */
		BatchDeletePartition(requestBody: BatchDeletePartitionRequest, headersHandler?: () => HttpHeaders): Observable<BatchDeletePartitionResponse> {
			return this.http.post<BatchDeletePartitionResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.BatchDeletePartition', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Deletes multiple tables at once.</p> <note> <p>After completing this operation, you no longer have access to the table versions and partitions that belong to the deleted table. AWS Glue deletes these "orphaned" resources asynchronously in a timely manner, at the discretion of the service.</p> <p>To ensure the immediate deletion of all related resources, before calling <code>BatchDeleteTable</code>, use <code>DeleteTableVersion</code> or <code>BatchDeleteTableVersion</code>, and <code>DeletePartition</code> or <code>BatchDeletePartition</code>, to delete any resources that belong to the table.</p> </note>
		 * Post /#X-Amz-Target=AWSGlue.BatchDeleteTable
		 * @return {BatchDeleteTableResponse} Success
		 */
		BatchDeleteTable(requestBody: BatchDeleteTableRequest, headersHandler?: () => HttpHeaders): Observable<BatchDeleteTableResponse> {
			return this.http.post<BatchDeleteTableResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.BatchDeleteTable', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Deletes a specified batch of versions of a table.
		 * Post /#X-Amz-Target=AWSGlue.BatchDeleteTableVersion
		 * @return {BatchDeleteTableVersionResponse} Success
		 */
		BatchDeleteTableVersion(requestBody: BatchDeleteTableVersionRequest, headersHandler?: () => HttpHeaders): Observable<BatchDeleteTableVersionResponse> {
			return this.http.post<BatchDeleteTableVersionResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.BatchDeleteTableVersion', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Returns a list of resource metadata for a given list of crawler names. After calling the <code>ListCrawlers</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.
		 * Post /#X-Amz-Target=AWSGlue.BatchGetCrawlers
		 * @return {BatchGetCrawlersResponse} Success
		 */
		BatchGetCrawlers(requestBody: BatchGetCrawlersRequest, headersHandler?: () => HttpHeaders): Observable<BatchGetCrawlersResponse> {
			return this.http.post<BatchGetCrawlersResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.BatchGetCrawlers', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Returns a list of resource metadata for a given list of development endpoint names. After calling the <code>ListDevEndpoints</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.
		 * Post /#X-Amz-Target=AWSGlue.BatchGetDevEndpoints
		 * @return {BatchGetDevEndpointsResponse} Success
		 */
		BatchGetDevEndpoints(requestBody: BatchGetDevEndpointsRequest, headersHandler?: () => HttpHeaders): Observable<BatchGetDevEndpointsResponse> {
			return this.http.post<BatchGetDevEndpointsResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.BatchGetDevEndpoints', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Returns a list of resource metadata for a given list of job names. After calling the <code>ListJobs</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.
		 * Post /#X-Amz-Target=AWSGlue.BatchGetJobs
		 * @return {BatchGetJobsResponse} Success
		 */
		BatchGetJobs(requestBody: BatchGetJobsRequest, headersHandler?: () => HttpHeaders): Observable<BatchGetJobsResponse> {
			return this.http.post<BatchGetJobsResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.BatchGetJobs', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieves partitions in a batch request.
		 * Post /#X-Amz-Target=AWSGlue.BatchGetPartition
		 * @return {BatchGetPartitionResponse} Success
		 */
		BatchGetPartition(requestBody: BatchGetPartitionRequest, headersHandler?: () => HttpHeaders): Observable<BatchGetPartitionResponse> {
			return this.http.post<BatchGetPartitionResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.BatchGetPartition', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Returns a list of resource metadata for a given list of trigger names. After calling the <code>ListTriggers</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.
		 * Post /#X-Amz-Target=AWSGlue.BatchGetTriggers
		 * @return {BatchGetTriggersResponse} Success
		 */
		BatchGetTriggers(requestBody: BatchGetTriggersRequest, headersHandler?: () => HttpHeaders): Observable<BatchGetTriggersResponse> {
			return this.http.post<BatchGetTriggersResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.BatchGetTriggers', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Returns a list of resource metadata for a given list of workflow names. After calling the <code>ListWorkflows</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.
		 * Post /#X-Amz-Target=AWSGlue.BatchGetWorkflows
		 * @return {BatchGetWorkflowsResponse} Success
		 */
		BatchGetWorkflows(requestBody: BatchGetWorkflowsRequest, headersHandler?: () => HttpHeaders): Observable<BatchGetWorkflowsResponse> {
			return this.http.post<BatchGetWorkflowsResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.BatchGetWorkflows', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Stops one or more job runs for a specified job definition.
		 * Post /#X-Amz-Target=AWSGlue.BatchStopJobRun
		 * @return {BatchStopJobRunResponse} Success
		 */
		BatchStopJobRun(requestBody: BatchStopJobRunRequest, headersHandler?: () => HttpHeaders): Observable<BatchStopJobRunResponse> {
			return this.http.post<BatchStopJobRunResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.BatchStopJobRun', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Cancels (stops) a task run. Machine learning task runs are asynchronous tasks that AWS Glue runs on your behalf as part of various machine learning workflows. You can cancel a machine learning task run at any time by calling <code>CancelMLTaskRun</code> with a task run's parent transform's <code>TransformID</code> and the task run's <code>TaskRunId</code>.
		 * Post /#X-Amz-Target=AWSGlue.CancelMLTaskRun
		 * @return {CancelMLTaskRunResponse} Success
		 */
		CancelMLTaskRun(requestBody: CancelMLTaskRunRequest, headersHandler?: () => HttpHeaders): Observable<CancelMLTaskRunResponse> {
			return this.http.post<CancelMLTaskRunResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.CancelMLTaskRun', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Creates a classifier in the user's account. This can be a <code>GrokClassifier</code>, an <code>XMLClassifier</code>, a <code>JsonClassifier</code>, or a <code>CsvClassifier</code>, depending on which field of the request is present.
		 * Post /#X-Amz-Target=AWSGlue.CreateClassifier
		 * @return {CreateClassifierResponse} Success
		 */
		CreateClassifier(requestBody: CreateClassifierRequest, headersHandler?: () => HttpHeaders): Observable<CreateClassifierResponse> {
			return this.http.post<CreateClassifierResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.CreateClassifier', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Creates a connection definition in the Data Catalog.
		 * Post /#X-Amz-Target=AWSGlue.CreateConnection
		 * @return {CreateConnectionResponse} Success
		 */
		CreateConnection(requestBody: CreateConnectionRequest, headersHandler?: () => HttpHeaders): Observable<CreateConnectionResponse> {
			return this.http.post<CreateConnectionResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.CreateConnection', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Creates a new crawler with specified targets, role, configuration, and optional schedule. At least one crawl target must be specified, in the <code>s3Targets</code> field, the <code>jdbcTargets</code> field, or the <code>DynamoDBTargets</code> field.
		 * Post /#X-Amz-Target=AWSGlue.CreateCrawler
		 * @return {CreateCrawlerResponse} Success
		 */
		CreateCrawler(requestBody: CreateCrawlerRequest, headersHandler?: () => HttpHeaders): Observable<CreateCrawlerResponse> {
			return this.http.post<CreateCrawlerResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.CreateCrawler', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Creates a new database in a Data Catalog.
		 * Post /#X-Amz-Target=AWSGlue.CreateDatabase
		 * @return {CreateDatabaseResponse} Success
		 */
		CreateDatabase(requestBody: CreateDatabaseRequest, headersHandler?: () => HttpHeaders): Observable<CreateDatabaseResponse> {
			return this.http.post<CreateDatabaseResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.CreateDatabase', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Creates a new development endpoint.
		 * Post /#X-Amz-Target=AWSGlue.CreateDevEndpoint
		 * @return {CreateDevEndpointResponse} Success
		 */
		CreateDevEndpoint(requestBody: CreateDevEndpointRequest, headersHandler?: () => HttpHeaders): Observable<CreateDevEndpointResponse> {
			return this.http.post<CreateDevEndpointResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.CreateDevEndpoint', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Creates a new job definition.
		 * Post /#X-Amz-Target=AWSGlue.CreateJob
		 * @return {CreateJobResponse} Success
		 */
		CreateJob(requestBody: CreateJobRequest, headersHandler?: () => HttpHeaders): Observable<CreateJobResponse> {
			return this.http.post<CreateJobResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.CreateJob', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Creates an AWS Glue machine learning transform. This operation creates the transform and all the necessary parameters to train it.</p> <p>Call this operation as the first step in the process of using a machine learning transform (such as the <code>FindMatches</code> transform) for deduplicating data. You can provide an optional <code>Description</code>, in addition to the parameters that you want to use for your algorithm.</p> <p>You must also specify certain parameters for the tasks that AWS Glue runs on your behalf as part of learning from your data and creating a high-quality machine learning transform. These parameters include <code>Role</code>, and optionally, <code>AllocatedCapacity</code>, <code>Timeout</code>, and <code>MaxRetries</code>. For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html">Jobs</a>.</p>
		 * Post /#X-Amz-Target=AWSGlue.CreateMLTransform
		 * @return {CreateMLTransformResponse} Success
		 */
		CreateMLTransform(requestBody: CreateMLTransformRequest, headersHandler?: () => HttpHeaders): Observable<CreateMLTransformResponse> {
			return this.http.post<CreateMLTransformResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.CreateMLTransform', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Creates a new partition.
		 * Post /#X-Amz-Target=AWSGlue.CreatePartition
		 * @return {CreatePartitionResponse} Success
		 */
		CreatePartition(requestBody: CreatePartitionRequest, headersHandler?: () => HttpHeaders): Observable<CreatePartitionResponse> {
			return this.http.post<CreatePartitionResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.CreatePartition', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Transforms a directed acyclic graph (DAG) into code.
		 * Post /#X-Amz-Target=AWSGlue.CreateScript
		 * @return {CreateScriptResponse} Success
		 */
		CreateScript(requestBody: CreateScriptRequest, headersHandler?: () => HttpHeaders): Observable<CreateScriptResponse> {
			return this.http.post<CreateScriptResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.CreateScript', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Creates a new security configuration. A security configuration is a set of security properties that can be used by AWS Glue. You can use a security configuration to encrypt data at rest. For information about using security configurations in AWS Glue, see <a href="https://docs.aws.amazon.com/glue/latest/dg/encryption-security-configuration.html">Encrypting Data Written by Crawlers, Jobs, and Development Endpoints</a>.
		 * Post /#X-Amz-Target=AWSGlue.CreateSecurityConfiguration
		 * @return {CreateSecurityConfigurationResponse} Success
		 */
		CreateSecurityConfiguration(requestBody: CreateSecurityConfigurationRequest, headersHandler?: () => HttpHeaders): Observable<CreateSecurityConfigurationResponse> {
			return this.http.post<CreateSecurityConfigurationResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.CreateSecurityConfiguration', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Creates a new table definition in the Data Catalog.
		 * Post /#X-Amz-Target=AWSGlue.CreateTable
		 * @return {CreateTableResponse} Success
		 */
		CreateTable(requestBody: CreateTableRequest, headersHandler?: () => HttpHeaders): Observable<CreateTableResponse> {
			return this.http.post<CreateTableResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.CreateTable', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Creates a new trigger.
		 * Post /#X-Amz-Target=AWSGlue.CreateTrigger
		 * @return {CreateTriggerResponse} Success
		 */
		CreateTrigger(requestBody: CreateTriggerRequest, headersHandler?: () => HttpHeaders): Observable<CreateTriggerResponse> {
			return this.http.post<CreateTriggerResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.CreateTrigger', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Creates a new function definition in the Data Catalog.
		 * Post /#X-Amz-Target=AWSGlue.CreateUserDefinedFunction
		 * @return {CreateUserDefinedFunctionResponse} Success
		 */
		CreateUserDefinedFunction(requestBody: CreateUserDefinedFunctionRequest, headersHandler?: () => HttpHeaders): Observable<CreateUserDefinedFunctionResponse> {
			return this.http.post<CreateUserDefinedFunctionResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.CreateUserDefinedFunction', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Creates a new workflow.
		 * Post /#X-Amz-Target=AWSGlue.CreateWorkflow
		 * @return {CreateWorkflowResponse} Success
		 */
		CreateWorkflow(requestBody: CreateWorkflowRequest, headersHandler?: () => HttpHeaders): Observable<CreateWorkflowResponse> {
			return this.http.post<CreateWorkflowResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.CreateWorkflow', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Removes a classifier from the Data Catalog.
		 * Post /#X-Amz-Target=AWSGlue.DeleteClassifier
		 * @return {DeleteClassifierResponse} Success
		 */
		DeleteClassifier(requestBody: DeleteClassifierRequest, headersHandler?: () => HttpHeaders): Observable<DeleteClassifierResponse> {
			return this.http.post<DeleteClassifierResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.DeleteClassifier', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Deletes a connection from the Data Catalog.
		 * Post /#X-Amz-Target=AWSGlue.DeleteConnection
		 * @return {DeleteConnectionResponse} Success
		 */
		DeleteConnection(requestBody: DeleteConnectionRequest, headersHandler?: () => HttpHeaders): Observable<DeleteConnectionResponse> {
			return this.http.post<DeleteConnectionResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.DeleteConnection', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Removes a specified crawler from the AWS Glue Data Catalog, unless the crawler state is <code>RUNNING</code>.
		 * Post /#X-Amz-Target=AWSGlue.DeleteCrawler
		 * @return {DeleteCrawlerResponse} Success
		 */
		DeleteCrawler(requestBody: DeleteCrawlerRequest, headersHandler?: () => HttpHeaders): Observable<DeleteCrawlerResponse> {
			return this.http.post<DeleteCrawlerResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.DeleteCrawler', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Removes a specified database from a Data Catalog.</p> <note> <p>After completing this operation, you no longer have access to the tables (and all table versions and partitions that might belong to the tables) and the user-defined functions in the deleted database. AWS Glue deletes these "orphaned" resources asynchronously in a timely manner, at the discretion of the service.</p> <p>To ensure the immediate deletion of all related resources, before calling <code>DeleteDatabase</code>, use <code>DeleteTableVersion</code> or <code>BatchDeleteTableVersion</code>, <code>DeletePartition</code> or <code>BatchDeletePartition</code>, <code>DeleteUserDefinedFunction</code>, and <code>DeleteTable</code> or <code>BatchDeleteTable</code>, to delete any resources that belong to the database.</p> </note>
		 * Post /#X-Amz-Target=AWSGlue.DeleteDatabase
		 * @return {DeleteDatabaseResponse} Success
		 */
		DeleteDatabase(requestBody: DeleteDatabaseRequest, headersHandler?: () => HttpHeaders): Observable<DeleteDatabaseResponse> {
			return this.http.post<DeleteDatabaseResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.DeleteDatabase', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Deletes a specified development endpoint.
		 * Post /#X-Amz-Target=AWSGlue.DeleteDevEndpoint
		 * @return {DeleteDevEndpointResponse} Success
		 */
		DeleteDevEndpoint(requestBody: DeleteDevEndpointRequest, headersHandler?: () => HttpHeaders): Observable<DeleteDevEndpointResponse> {
			return this.http.post<DeleteDevEndpointResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.DeleteDevEndpoint', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Deletes a specified job definition. If the job definition is not found, no exception is thrown.
		 * Post /#X-Amz-Target=AWSGlue.DeleteJob
		 * @return {DeleteJobResponse} Success
		 */
		DeleteJob(requestBody: DeleteJobRequest, headersHandler?: () => HttpHeaders): Observable<DeleteJobResponse> {
			return this.http.post<DeleteJobResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.DeleteJob', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Deletes an AWS Glue machine learning transform. Machine learning transforms are a special type of transform that use machine learning to learn the details of the transformation to be performed by learning from examples provided by humans. These transformations are then saved by AWS Glue. If you no longer need a transform, you can delete it by calling <code>DeleteMLTransforms</code>. However, any AWS Glue jobs that still reference the deleted transform will no longer succeed.
		 * Post /#X-Amz-Target=AWSGlue.DeleteMLTransform
		 * @return {DeleteMLTransformResponse} Success
		 */
		DeleteMLTransform(requestBody: DeleteMLTransformRequest, headersHandler?: () => HttpHeaders): Observable<DeleteMLTransformResponse> {
			return this.http.post<DeleteMLTransformResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.DeleteMLTransform', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Deletes a specified partition.
		 * Post /#X-Amz-Target=AWSGlue.DeletePartition
		 * @return {DeletePartitionResponse} Success
		 */
		DeletePartition(requestBody: DeletePartitionRequest, headersHandler?: () => HttpHeaders): Observable<DeletePartitionResponse> {
			return this.http.post<DeletePartitionResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.DeletePartition', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Deletes a specified policy.
		 * Post /#X-Amz-Target=AWSGlue.DeleteResourcePolicy
		 * @return {DeleteResourcePolicyResponse} Success
		 */
		DeleteResourcePolicy(requestBody: DeleteResourcePolicyRequest, headersHandler?: () => HttpHeaders): Observable<DeleteResourcePolicyResponse> {
			return this.http.post<DeleteResourcePolicyResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.DeleteResourcePolicy', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Deletes a specified security configuration.
		 * Post /#X-Amz-Target=AWSGlue.DeleteSecurityConfiguration
		 * @return {DeleteSecurityConfigurationResponse} Success
		 */
		DeleteSecurityConfiguration(requestBody: DeleteSecurityConfigurationRequest, headersHandler?: () => HttpHeaders): Observable<DeleteSecurityConfigurationResponse> {
			return this.http.post<DeleteSecurityConfigurationResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.DeleteSecurityConfiguration', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Removes a table definition from the Data Catalog.</p> <note> <p>After completing this operation, you no longer have access to the table versions and partitions that belong to the deleted table. AWS Glue deletes these "orphaned" resources asynchronously in a timely manner, at the discretion of the service.</p> <p>To ensure the immediate deletion of all related resources, before calling <code>DeleteTable</code>, use <code>DeleteTableVersion</code> or <code>BatchDeleteTableVersion</code>, and <code>DeletePartition</code> or <code>BatchDeletePartition</code>, to delete any resources that belong to the table.</p> </note>
		 * Post /#X-Amz-Target=AWSGlue.DeleteTable
		 * @return {DeleteTableResponse} Success
		 */
		DeleteTable(requestBody: DeleteTableRequest, headersHandler?: () => HttpHeaders): Observable<DeleteTableResponse> {
			return this.http.post<DeleteTableResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.DeleteTable', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Deletes a specified version of a table.
		 * Post /#X-Amz-Target=AWSGlue.DeleteTableVersion
		 * @return {DeleteTableVersionResponse} Success
		 */
		DeleteTableVersion(requestBody: DeleteTableVersionRequest, headersHandler?: () => HttpHeaders): Observable<DeleteTableVersionResponse> {
			return this.http.post<DeleteTableVersionResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.DeleteTableVersion', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Deletes a specified trigger. If the trigger is not found, no exception is thrown.
		 * Post /#X-Amz-Target=AWSGlue.DeleteTrigger
		 * @return {DeleteTriggerResponse} Success
		 */
		DeleteTrigger(requestBody: DeleteTriggerRequest, headersHandler?: () => HttpHeaders): Observable<DeleteTriggerResponse> {
			return this.http.post<DeleteTriggerResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.DeleteTrigger', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Deletes an existing function definition from the Data Catalog.
		 * Post /#X-Amz-Target=AWSGlue.DeleteUserDefinedFunction
		 * @return {DeleteUserDefinedFunctionResponse} Success
		 */
		DeleteUserDefinedFunction(requestBody: DeleteUserDefinedFunctionRequest, headersHandler?: () => HttpHeaders): Observable<DeleteUserDefinedFunctionResponse> {
			return this.http.post<DeleteUserDefinedFunctionResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.DeleteUserDefinedFunction', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Deletes a workflow.
		 * Post /#X-Amz-Target=AWSGlue.DeleteWorkflow
		 * @return {DeleteWorkflowResponse} Success
		 */
		DeleteWorkflow(requestBody: DeleteWorkflowRequest, headersHandler?: () => HttpHeaders): Observable<DeleteWorkflowResponse> {
			return this.http.post<DeleteWorkflowResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.DeleteWorkflow', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieves the status of a migration operation.
		 * Post /#X-Amz-Target=AWSGlue.GetCatalogImportStatus
		 * @return {GetCatalogImportStatusResponse} Success
		 */
		GetCatalogImportStatus(requestBody: GetCatalogImportStatusRequest, headersHandler?: () => HttpHeaders): Observable<GetCatalogImportStatusResponse> {
			return this.http.post<GetCatalogImportStatusResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.GetCatalogImportStatus', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve a classifier by name.
		 * Post /#X-Amz-Target=AWSGlue.GetClassifier
		 * @return {GetClassifierResponse} Success
		 */
		GetClassifier(requestBody: GetClassifierRequest, headersHandler?: () => HttpHeaders): Observable<GetClassifierResponse> {
			return this.http.post<GetClassifierResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.GetClassifier', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lists all classifier objects in the Data Catalog.
		 * Post /#X-Amz-Target=AWSGlue.GetClassifiers
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetClassifiersResponse} Success
		 */
		GetClassifiers(MaxResults: string, NextToken: string, requestBody: GetClassifiersRequest, headersHandler?: () => HttpHeaders): Observable<GetClassifiersResponse> {
			return this.http.post<GetClassifiersResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.GetClassifiers?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieves a connection definition from the Data Catalog.
		 * Post /#X-Amz-Target=AWSGlue.GetConnection
		 * @return {GetConnectionResponse} Success
		 */
		GetConnection(requestBody: GetConnectionRequest, headersHandler?: () => HttpHeaders): Observable<GetConnectionResponse> {
			return this.http.post<GetConnectionResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.GetConnection', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieves a list of connection definitions from the Data Catalog.
		 * Post /#X-Amz-Target=AWSGlue.GetConnections
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetConnectionsResponse} Success
		 */
		GetConnections(MaxResults: string, NextToken: string, requestBody: GetConnectionsRequest, headersHandler?: () => HttpHeaders): Observable<GetConnectionsResponse> {
			return this.http.post<GetConnectionsResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.GetConnections?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieves metadata for a specified crawler.
		 * Post /#X-Amz-Target=AWSGlue.GetCrawler
		 * @return {GetCrawlerResponse} Success
		 */
		GetCrawler(requestBody: GetCrawlerRequest, headersHandler?: () => HttpHeaders): Observable<GetCrawlerResponse> {
			return this.http.post<GetCrawlerResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.GetCrawler', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieves metrics about specified crawlers.
		 * Post /#X-Amz-Target=AWSGlue.GetCrawlerMetrics
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetCrawlerMetricsResponse} Success
		 */
		GetCrawlerMetrics(MaxResults: string, NextToken: string, requestBody: GetCrawlerMetricsRequest, headersHandler?: () => HttpHeaders): Observable<GetCrawlerMetricsResponse> {
			return this.http.post<GetCrawlerMetricsResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.GetCrawlerMetrics?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieves metadata for all crawlers defined in the customer account.
		 * Post /#X-Amz-Target=AWSGlue.GetCrawlers
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetCrawlersResponse} Success
		 */
		GetCrawlers(MaxResults: string, NextToken: string, requestBody: GetCrawlersRequest, headersHandler?: () => HttpHeaders): Observable<GetCrawlersResponse> {
			return this.http.post<GetCrawlersResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.GetCrawlers?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieves the security configuration for a specified catalog.
		 * Post /#X-Amz-Target=AWSGlue.GetDataCatalogEncryptionSettings
		 * @return {GetDataCatalogEncryptionSettingsResponse} Success
		 */
		GetDataCatalogEncryptionSettings(requestBody: GetDataCatalogEncryptionSettingsRequest, headersHandler?: () => HttpHeaders): Observable<GetDataCatalogEncryptionSettingsResponse> {
			return this.http.post<GetDataCatalogEncryptionSettingsResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.GetDataCatalogEncryptionSettings', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieves the definition of a specified database.
		 * Post /#X-Amz-Target=AWSGlue.GetDatabase
		 * @return {GetDatabaseResponse} Success
		 */
		GetDatabase(requestBody: GetDatabaseRequest, headersHandler?: () => HttpHeaders): Observable<GetDatabaseResponse> {
			return this.http.post<GetDatabaseResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.GetDatabase', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieves all databases defined in a given Data Catalog.
		 * Post /#X-Amz-Target=AWSGlue.GetDatabases
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetDatabasesResponse} Success
		 */
		GetDatabases(MaxResults: string, NextToken: string, requestBody: GetDatabasesRequest, headersHandler?: () => HttpHeaders): Observable<GetDatabasesResponse> {
			return this.http.post<GetDatabasesResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.GetDatabases?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Transforms a Python script into a directed acyclic graph (DAG).
		 * Post /#X-Amz-Target=AWSGlue.GetDataflowGraph
		 * @return {GetDataflowGraphResponse} Success
		 */
		GetDataflowGraph(requestBody: GetDataflowGraphRequest, headersHandler?: () => HttpHeaders): Observable<GetDataflowGraphResponse> {
			return this.http.post<GetDataflowGraphResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.GetDataflowGraph', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Retrieves information about a specified development endpoint.</p> <note> <p>When you create a development endpoint in a virtual private cloud (VPC), AWS Glue returns only a private IP address, and the public IP address field is not populated. When you create a non-VPC development endpoint, AWS Glue returns only a public IP address.</p> </note>
		 * Post /#X-Amz-Target=AWSGlue.GetDevEndpoint
		 * @return {GetDevEndpointResponse} Success
		 */
		GetDevEndpoint(requestBody: GetDevEndpointRequest, headersHandler?: () => HttpHeaders): Observable<GetDevEndpointResponse> {
			return this.http.post<GetDevEndpointResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.GetDevEndpoint', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Retrieves all the development endpoints in this AWS account.</p> <note> <p>When you create a development endpoint in a virtual private cloud (VPC), AWS Glue returns only a private IP address and the public IP address field is not populated. When you create a non-VPC development endpoint, AWS Glue returns only a public IP address.</p> </note>
		 * Post /#X-Amz-Target=AWSGlue.GetDevEndpoints
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetDevEndpointsResponse} Success
		 */
		GetDevEndpoints(MaxResults: string, NextToken: string, requestBody: GetDevEndpointsRequest, headersHandler?: () => HttpHeaders): Observable<GetDevEndpointsResponse> {
			return this.http.post<GetDevEndpointsResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.GetDevEndpoints?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieves an existing job definition.
		 * Post /#X-Amz-Target=AWSGlue.GetJob
		 * @return {GetJobResponse} Success
		 */
		GetJob(requestBody: GetJobRequest, headersHandler?: () => HttpHeaders): Observable<GetJobResponse> {
			return this.http.post<GetJobResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.GetJob', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Returns information on a job bookmark entry.
		 * Post /#X-Amz-Target=AWSGlue.GetJobBookmark
		 * @return {GetJobBookmarkResponse} Success
		 */
		GetJobBookmark(requestBody: GetJobBookmarkRequest, headersHandler?: () => HttpHeaders): Observable<GetJobBookmarkResponse> {
			return this.http.post<GetJobBookmarkResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.GetJobBookmark', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieves the metadata for a given job run.
		 * Post /#X-Amz-Target=AWSGlue.GetJobRun
		 * @return {GetJobRunResponse} Success
		 */
		GetJobRun(requestBody: GetJobRunRequest, headersHandler?: () => HttpHeaders): Observable<GetJobRunResponse> {
			return this.http.post<GetJobRunResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.GetJobRun', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieves metadata for all runs of a given job definition.
		 * Post /#X-Amz-Target=AWSGlue.GetJobRuns
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetJobRunsResponse} Success
		 */
		GetJobRuns(MaxResults: string, NextToken: string, requestBody: GetJobRunsRequest, headersHandler?: () => HttpHeaders): Observable<GetJobRunsResponse> {
			return this.http.post<GetJobRunsResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.GetJobRuns?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieves all current job definitions.
		 * Post /#X-Amz-Target=AWSGlue.GetJobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetJobsResponse} Success
		 */
		GetJobs(MaxResults: string, NextToken: string, requestBody: GetJobsRequest, headersHandler?: () => HttpHeaders): Observable<GetJobsResponse> {
			return this.http.post<GetJobsResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.GetJobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Gets details for a specific task run on a machine learning transform. Machine learning task runs are asynchronous tasks that AWS Glue runs on your behalf as part of various machine learning workflows. You can check the stats of any task run by calling <code>GetMLTaskRun</code> with the <code>TaskRunID</code> and its parent transform's <code>TransformID</code>.
		 * Post /#X-Amz-Target=AWSGlue.GetMLTaskRun
		 * @return {GetMLTaskRunResponse} Success
		 */
		GetMLTaskRun(requestBody: GetMLTaskRunRequest, headersHandler?: () => HttpHeaders): Observable<GetMLTaskRunResponse> {
			return this.http.post<GetMLTaskRunResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.GetMLTaskRun', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Gets a list of runs for a machine learning transform. Machine learning task runs are asynchronous tasks that AWS Glue runs on your behalf as part of various machine learning workflows. You can get a sortable, filterable list of machine learning task runs by calling <code>GetMLTaskRuns</code> with their parent transform's <code>TransformID</code> and other optional parameters as documented in this section.</p> <p>This operation returns a list of historic runs and must be paginated.</p>
		 * Post /#X-Amz-Target=AWSGlue.GetMLTaskRuns
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetMLTaskRunsResponse} Success
		 */
		GetMLTaskRuns(MaxResults: string, NextToken: string, requestBody: GetMLTaskRunsRequest, headersHandler?: () => HttpHeaders): Observable<GetMLTaskRunsResponse> {
			return this.http.post<GetMLTaskRunsResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.GetMLTaskRuns?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Gets an AWS Glue machine learning transform artifact and all its corresponding metadata. Machine learning transforms are a special type of transform that use machine learning to learn the details of the transformation to be performed by learning from examples provided by humans. These transformations are then saved by AWS Glue. You can retrieve their metadata by calling <code>GetMLTransform</code>.
		 * Post /#X-Amz-Target=AWSGlue.GetMLTransform
		 * @return {GetMLTransformResponse} Success
		 */
		GetMLTransform(requestBody: GetMLTransformRequest, headersHandler?: () => HttpHeaders): Observable<GetMLTransformResponse> {
			return this.http.post<GetMLTransformResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.GetMLTransform', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Gets a sortable, filterable list of existing AWS Glue machine learning transforms. Machine learning transforms are a special type of transform that use machine learning to learn the details of the transformation to be performed by learning from examples provided by humans. These transformations are then saved by AWS Glue, and you can retrieve their metadata by calling <code>GetMLTransforms</code>.
		 * Post /#X-Amz-Target=AWSGlue.GetMLTransforms
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetMLTransformsResponse} Success
		 */
		GetMLTransforms(MaxResults: string, NextToken: string, requestBody: GetMLTransformsRequest, headersHandler?: () => HttpHeaders): Observable<GetMLTransformsResponse> {
			return this.http.post<GetMLTransformsResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.GetMLTransforms?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Creates mappings.
		 * Post /#X-Amz-Target=AWSGlue.GetMapping
		 * @return {GetMappingResponse} Success
		 */
		GetMapping(requestBody: GetMappingRequest, headersHandler?: () => HttpHeaders): Observable<GetMappingResponse> {
			return this.http.post<GetMappingResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.GetMapping', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieves information about a specified partition.
		 * Post /#X-Amz-Target=AWSGlue.GetPartition
		 * @return {GetPartitionResponse} Success
		 */
		GetPartition(requestBody: GetPartitionRequest, headersHandler?: () => HttpHeaders): Observable<GetPartitionResponse> {
			return this.http.post<GetPartitionResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.GetPartition', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieves information about the partitions in a table.
		 * Post /#X-Amz-Target=AWSGlue.GetPartitions
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetPartitionsResponse} Success
		 */
		GetPartitions(MaxResults: string, NextToken: string, requestBody: GetPartitionsRequest, headersHandler?: () => HttpHeaders): Observable<GetPartitionsResponse> {
			return this.http.post<GetPartitionsResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.GetPartitions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Gets code to perform a specified mapping.
		 * Post /#X-Amz-Target=AWSGlue.GetPlan
		 * @return {GetPlanResponse} Success
		 */
		GetPlan(requestBody: GetPlanRequest, headersHandler?: () => HttpHeaders): Observable<GetPlanResponse> {
			return this.http.post<GetPlanResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.GetPlan', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieves a specified resource policy.
		 * Post /#X-Amz-Target=AWSGlue.GetResourcePolicy
		 * @return {GetResourcePolicyResponse} Success
		 */
		GetResourcePolicy(requestBody: GetResourcePolicyRequest, headersHandler?: () => HttpHeaders): Observable<GetResourcePolicyResponse> {
			return this.http.post<GetResourcePolicyResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.GetResourcePolicy', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieves a specified security configuration.
		 * Post /#X-Amz-Target=AWSGlue.GetSecurityConfiguration
		 * @return {GetSecurityConfigurationResponse} Success
		 */
		GetSecurityConfiguration(requestBody: GetSecurityConfigurationRequest, headersHandler?: () => HttpHeaders): Observable<GetSecurityConfigurationResponse> {
			return this.http.post<GetSecurityConfigurationResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.GetSecurityConfiguration', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieves a list of all security configurations.
		 * Post /#X-Amz-Target=AWSGlue.GetSecurityConfigurations
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetSecurityConfigurationsResponse} Success
		 */
		GetSecurityConfigurations(MaxResults: string, NextToken: string, requestBody: GetSecurityConfigurationsRequest, headersHandler?: () => HttpHeaders): Observable<GetSecurityConfigurationsResponse> {
			return this.http.post<GetSecurityConfigurationsResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.GetSecurityConfigurations?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieves the <code>Table</code> definition in a Data Catalog for a specified table.
		 * Post /#X-Amz-Target=AWSGlue.GetTable
		 * @return {GetTableResponse} Success
		 */
		GetTable(requestBody: GetTableRequest, headersHandler?: () => HttpHeaders): Observable<GetTableResponse> {
			return this.http.post<GetTableResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.GetTable', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieves a specified version of a table.
		 * Post /#X-Amz-Target=AWSGlue.GetTableVersion
		 * @return {GetTableVersionResponse} Success
		 */
		GetTableVersion(requestBody: GetTableVersionRequest, headersHandler?: () => HttpHeaders): Observable<GetTableVersionResponse> {
			return this.http.post<GetTableVersionResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.GetTableVersion', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieves a list of strings that identify available versions of a specified table.
		 * Post /#X-Amz-Target=AWSGlue.GetTableVersions
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetTableVersionsResponse} Success
		 */
		GetTableVersions(MaxResults: string, NextToken: string, requestBody: GetTableVersionsRequest, headersHandler?: () => HttpHeaders): Observable<GetTableVersionsResponse> {
			return this.http.post<GetTableVersionsResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.GetTableVersions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieves the definitions of some or all of the tables in a given <code>Database</code>.
		 * Post /#X-Amz-Target=AWSGlue.GetTables
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetTablesResponse} Success
		 */
		GetTables(MaxResults: string, NextToken: string, requestBody: GetTablesRequest, headersHandler?: () => HttpHeaders): Observable<GetTablesResponse> {
			return this.http.post<GetTablesResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.GetTables?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieves a list of tags associated with a resource.
		 * Post /#X-Amz-Target=AWSGlue.GetTags
		 * @return {GetTagsResponse} Success
		 */
		GetTags(requestBody: GetTagsRequest, headersHandler?: () => HttpHeaders): Observable<GetTagsResponse> {
			return this.http.post<GetTagsResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.GetTags', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieves the definition of a trigger.
		 * Post /#X-Amz-Target=AWSGlue.GetTrigger
		 * @return {GetTriggerResponse} Success
		 */
		GetTrigger(requestBody: GetTriggerRequest, headersHandler?: () => HttpHeaders): Observable<GetTriggerResponse> {
			return this.http.post<GetTriggerResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.GetTrigger', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Gets all the triggers associated with a job.
		 * Post /#X-Amz-Target=AWSGlue.GetTriggers
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetTriggersResponse} Success
		 */
		GetTriggers(MaxResults: string, NextToken: string, requestBody: GetTriggersRequest, headersHandler?: () => HttpHeaders): Observable<GetTriggersResponse> {
			return this.http.post<GetTriggersResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.GetTriggers?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieves a specified function definition from the Data Catalog.
		 * Post /#X-Amz-Target=AWSGlue.GetUserDefinedFunction
		 * @return {GetUserDefinedFunctionResponse} Success
		 */
		GetUserDefinedFunction(requestBody: GetUserDefinedFunctionRequest, headersHandler?: () => HttpHeaders): Observable<GetUserDefinedFunctionResponse> {
			return this.http.post<GetUserDefinedFunctionResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.GetUserDefinedFunction', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieves multiple function definitions from the Data Catalog.
		 * Post /#X-Amz-Target=AWSGlue.GetUserDefinedFunctions
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetUserDefinedFunctionsResponse} Success
		 */
		GetUserDefinedFunctions(MaxResults: string, NextToken: string, requestBody: GetUserDefinedFunctionsRequest, headersHandler?: () => HttpHeaders): Observable<GetUserDefinedFunctionsResponse> {
			return this.http.post<GetUserDefinedFunctionsResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.GetUserDefinedFunctions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieves resource metadata for a workflow.
		 * Post /#X-Amz-Target=AWSGlue.GetWorkflow
		 * @return {GetWorkflowResponse} Success
		 */
		GetWorkflow(requestBody: GetWorkflowRequest, headersHandler?: () => HttpHeaders): Observable<GetWorkflowResponse> {
			return this.http.post<GetWorkflowResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.GetWorkflow', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieves the metadata for a given workflow run.
		 * Post /#X-Amz-Target=AWSGlue.GetWorkflowRun
		 * @return {GetWorkflowRunResponse} Success
		 */
		GetWorkflowRun(requestBody: GetWorkflowRunRequest, headersHandler?: () => HttpHeaders): Observable<GetWorkflowRunResponse> {
			return this.http.post<GetWorkflowRunResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.GetWorkflowRun', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieves the workflow run properties which were set during the run.
		 * Post /#X-Amz-Target=AWSGlue.GetWorkflowRunProperties
		 * @return {GetWorkflowRunPropertiesResponse} Success
		 */
		GetWorkflowRunProperties(requestBody: GetWorkflowRunPropertiesRequest, headersHandler?: () => HttpHeaders): Observable<GetWorkflowRunPropertiesResponse> {
			return this.http.post<GetWorkflowRunPropertiesResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.GetWorkflowRunProperties', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieves metadata for all runs of a given workflow.
		 * Post /#X-Amz-Target=AWSGlue.GetWorkflowRuns
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetWorkflowRunsResponse} Success
		 */
		GetWorkflowRuns(MaxResults: string, NextToken: string, requestBody: GetWorkflowRunsRequest, headersHandler?: () => HttpHeaders): Observable<GetWorkflowRunsResponse> {
			return this.http.post<GetWorkflowRunsResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.GetWorkflowRuns?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Imports an existing Amazon Athena Data Catalog to AWS Glue
		 * Post /#X-Amz-Target=AWSGlue.ImportCatalogToGlue
		 * @return {ImportCatalogToGlueResponse} Success
		 */
		ImportCatalogToGlue(requestBody: ImportCatalogToGlueRequest, headersHandler?: () => HttpHeaders): Observable<ImportCatalogToGlueResponse> {
			return this.http.post<ImportCatalogToGlueResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.ImportCatalogToGlue', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Retrieves the names of all crawler resources in this AWS account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names.</p> <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on the response so that tagged resources can be retrieved as a group. If you choose to use tags filtering, only resources with the tag are retrieved.</p>
		 * Post /#X-Amz-Target=AWSGlue.ListCrawlers
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListCrawlersResponse} Success
		 */
		ListCrawlers(MaxResults: string, NextToken: string, requestBody: ListCrawlersRequest, headersHandler?: () => HttpHeaders): Observable<ListCrawlersResponse> {
			return this.http.post<ListCrawlersResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.ListCrawlers?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Retrieves the names of all <code>DevEndpoint</code> resources in this AWS account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names.</p> <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on the response so that tagged resources can be retrieved as a group. If you choose to use tags filtering, only resources with the tag are retrieved.</p>
		 * Post /#X-Amz-Target=AWSGlue.ListDevEndpoints
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDevEndpointsResponse} Success
		 */
		ListDevEndpoints(MaxResults: string, NextToken: string, requestBody: ListDevEndpointsRequest, headersHandler?: () => HttpHeaders): Observable<ListDevEndpointsResponse> {
			return this.http.post<ListDevEndpointsResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.ListDevEndpoints?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Retrieves the names of all job resources in this AWS account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names.</p> <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on the response so that tagged resources can be retrieved as a group. If you choose to use tags filtering, only resources with the tag are retrieved.</p>
		 * Post /#X-Amz-Target=AWSGlue.ListJobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListJobsResponse} Success
		 */
		ListJobs(MaxResults: string, NextToken: string, requestBody: ListJobsRequest, headersHandler?: () => HttpHeaders): Observable<ListJobsResponse> {
			return this.http.post<ListJobsResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.ListJobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieves a sortable, filterable list of existing AWS Glue machine learning transforms in this AWS account, or the resources with the specified tag. This operation takes the optional <code>Tags</code> field, which you can use as a filter of the responses so that tagged resources can be retrieved as a group. If you choose to use tag filtering, only resources with the tags are retrieved.
		 * Post /#X-Amz-Target=AWSGlue.ListMLTransforms
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListMLTransformsResponse} Success
		 */
		ListMLTransforms(MaxResults: string, NextToken: string, requestBody: ListMLTransformsRequest, headersHandler?: () => HttpHeaders): Observable<ListMLTransformsResponse> {
			return this.http.post<ListMLTransformsResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.ListMLTransforms?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Retrieves the names of all trigger resources in this AWS account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names.</p> <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on the response so that tagged resources can be retrieved as a group. If you choose to use tags filtering, only resources with the tag are retrieved.</p>
		 * Post /#X-Amz-Target=AWSGlue.ListTriggers
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTriggersResponse} Success
		 */
		ListTriggers(MaxResults: string, NextToken: string, requestBody: ListTriggersRequest, headersHandler?: () => HttpHeaders): Observable<ListTriggersResponse> {
			return this.http.post<ListTriggersResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.ListTriggers?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lists names of workflows created in the account.
		 * Post /#X-Amz-Target=AWSGlue.ListWorkflows
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListWorkflowsResponse} Success
		 */
		ListWorkflows(MaxResults: string, NextToken: string, requestBody: ListWorkflowsRequest, headersHandler?: () => HttpHeaders): Observable<ListWorkflowsResponse> {
			return this.http.post<ListWorkflowsResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.ListWorkflows?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Sets the security configuration for a specified catalog. After the configuration has been set, the specified encryption is applied to every catalog write thereafter.
		 * Post /#X-Amz-Target=AWSGlue.PutDataCatalogEncryptionSettings
		 * @return {PutDataCatalogEncryptionSettingsResponse} Success
		 */
		PutDataCatalogEncryptionSettings(requestBody: PutDataCatalogEncryptionSettingsRequest, headersHandler?: () => HttpHeaders): Observable<PutDataCatalogEncryptionSettingsResponse> {
			return this.http.post<PutDataCatalogEncryptionSettingsResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.PutDataCatalogEncryptionSettings', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Sets the Data Catalog resource policy for access control.
		 * Post /#X-Amz-Target=AWSGlue.PutResourcePolicy
		 * @return {PutResourcePolicyResponse} Success
		 */
		PutResourcePolicy(requestBody: PutResourcePolicyRequest, headersHandler?: () => HttpHeaders): Observable<PutResourcePolicyResponse> {
			return this.http.post<PutResourcePolicyResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.PutResourcePolicy', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Puts the specified workflow run properties for the given workflow run. If a property already exists for the specified run, then it overrides the value otherwise adds the property to existing properties.
		 * Post /#X-Amz-Target=AWSGlue.PutWorkflowRunProperties
		 * @return {PutWorkflowRunPropertiesResponse} Success
		 */
		PutWorkflowRunProperties(requestBody: PutWorkflowRunPropertiesRequest, headersHandler?: () => HttpHeaders): Observable<PutWorkflowRunPropertiesResponse> {
			return this.http.post<PutWorkflowRunPropertiesResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.PutWorkflowRunProperties', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Resets a bookmark entry.
		 * Post /#X-Amz-Target=AWSGlue.ResetJobBookmark
		 * @return {ResetJobBookmarkResponse} Success
		 */
		ResetJobBookmark(requestBody: ResetJobBookmarkRequest, headersHandler?: () => HttpHeaders): Observable<ResetJobBookmarkResponse> {
			return this.http.post<ResetJobBookmarkResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.ResetJobBookmark', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Searches a set of tables based on properties in the table metadata as well as on the parent database. You can search against text or filter conditions. </p> <p>You can only get tables that you have access to based on the security policies defined in Lake Formation. You need at least a read-only access to the table for it to be returned. If you do not have access to all the columns in the table, these columns will not be searched against when returning the list of tables back to you. If you have access to the columns but not the data in the columns, those columns and the associated metadata for those columns will be included in the search. </p>
		 * Post /#X-Amz-Target=AWSGlue.SearchTables
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {SearchTablesResponse} Success
		 */
		SearchTables(MaxResults: string, NextToken: string, requestBody: SearchTablesRequest, headersHandler?: () => HttpHeaders): Observable<SearchTablesResponse> {
			return this.http.post<SearchTablesResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.SearchTables?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Starts a crawl using the specified crawler, regardless of what is scheduled. If the crawler is already running, returns a <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-exceptions.html#aws-glue-api-exceptions-CrawlerRunningException">CrawlerRunningException</a>.
		 * Post /#X-Amz-Target=AWSGlue.StartCrawler
		 * @return {StartCrawlerResponse} Success
		 */
		StartCrawler(requestBody: StartCrawlerRequest, headersHandler?: () => HttpHeaders): Observable<StartCrawlerResponse> {
			return this.http.post<StartCrawlerResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.StartCrawler', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Changes the schedule state of the specified crawler to <code>SCHEDULED</code>, unless the crawler is already running or the schedule state is already <code>SCHEDULED</code>.
		 * Post /#X-Amz-Target=AWSGlue.StartCrawlerSchedule
		 * @return {StartCrawlerScheduleResponse} Success
		 */
		StartCrawlerSchedule(requestBody: StartCrawlerScheduleRequest, headersHandler?: () => HttpHeaders): Observable<StartCrawlerScheduleResponse> {
			return this.http.post<StartCrawlerScheduleResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.StartCrawlerSchedule', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Begins an asynchronous task to export all labeled data for a particular transform. This task is the only label-related API call that is not part of the typical active learning workflow. You typically use <code>StartExportLabelsTaskRun</code> when you want to work with all of your existing labels at the same time, such as when you want to remove or change labels that were previously submitted as truth. This API operation accepts the <code>TransformId</code> whose labels you want to export and an Amazon Simple Storage Service (Amazon S3) path to export the labels to. The operation returns a <code>TaskRunId</code>. You can check on the status of your task run by calling the <code>GetMLTaskRun</code> API.
		 * Post /#X-Amz-Target=AWSGlue.StartExportLabelsTaskRun
		 * @return {StartExportLabelsTaskRunResponse} Success
		 */
		StartExportLabelsTaskRun(requestBody: StartExportLabelsTaskRunRequest, headersHandler?: () => HttpHeaders): Observable<StartExportLabelsTaskRunResponse> {
			return this.http.post<StartExportLabelsTaskRunResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.StartExportLabelsTaskRun', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Enables you to provide additional labels (examples of truth) to be used to teach the machine learning transform and improve its quality. This API operation is generally used as part of the active learning workflow that starts with the <code>StartMLLabelingSetGenerationTaskRun</code> call and that ultimately results in improving the quality of your machine learning transform. </p> <p>After the <code>StartMLLabelingSetGenerationTaskRun</code> finishes, AWS Glue machine learning will have generated a series of questions for humans to answer. (Answering these questions is often called 'labeling' in the machine learning workflows). In the case of the <code>FindMatches</code> transform, these questions are of the form, “What is the correct way to group these rows together into groups composed entirely of matching records?” After the labeling process is finished, users upload their answers/labels with a call to <code>StartImportLabelsTaskRun</code>. After <code>StartImportLabelsTaskRun</code> finishes, all future runs of the machine learning transform use the new and improved labels and perform a higher-quality transformation.</p> <p>By default, <code>StartMLLabelingSetGenerationTaskRun</code> continually learns from and combines all labels that you upload unless you set <code>Replace</code> to true. If you set <code>Replace</code> to true, <code>StartImportLabelsTaskRun</code> deletes and forgets all previously uploaded labels and learns only from the exact set that you upload. Replacing labels can be helpful if you realize that you previously uploaded incorrect labels, and you believe that they are having a negative effect on your transform quality.</p> <p>You can check on the status of your task run by calling the <code>GetMLTaskRun</code> operation. </p>
		 * Post /#X-Amz-Target=AWSGlue.StartImportLabelsTaskRun
		 * @return {StartImportLabelsTaskRunResponse} Success
		 */
		StartImportLabelsTaskRun(requestBody: StartImportLabelsTaskRunRequest, headersHandler?: () => HttpHeaders): Observable<StartImportLabelsTaskRunResponse> {
			return this.http.post<StartImportLabelsTaskRunResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.StartImportLabelsTaskRun', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Starts a job run using a job definition.
		 * Post /#X-Amz-Target=AWSGlue.StartJobRun
		 * @return {StartJobRunResponse} Success
		 */
		StartJobRun(requestBody: StartJobRunRequest, headersHandler?: () => HttpHeaders): Observable<StartJobRunResponse> {
			return this.http.post<StartJobRunResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.StartJobRun', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Starts a task to estimate the quality of the transform. </p> <p>When you provide label sets as examples of truth, AWS Glue machine learning uses some of those examples to learn from them. The rest of the labels are used as a test to estimate quality.</p> <p>Returns a unique identifier for the run. You can call <code>GetMLTaskRun</code> to get more information about the stats of the <code>EvaluationTaskRun</code>.</p>
		 * Post /#X-Amz-Target=AWSGlue.StartMLEvaluationTaskRun
		 * @return {StartMLEvaluationTaskRunResponse} Success
		 */
		StartMLEvaluationTaskRun(requestBody: StartMLEvaluationTaskRunRequest, headersHandler?: () => HttpHeaders): Observable<StartMLEvaluationTaskRunResponse> {
			return this.http.post<StartMLEvaluationTaskRunResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.StartMLEvaluationTaskRun', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Starts the active learning workflow for your machine learning transform to improve the transform's quality by generating label sets and adding labels.</p> <p>When the <code>StartMLLabelingSetGenerationTaskRun</code> finishes, AWS Glue will have generated a "labeling set" or a set of questions for humans to answer.</p> <p>In the case of the <code>FindMatches</code> transform, these questions are of the form, “What is the correct way to group these rows together into groups composed entirely of matching records?” </p> <p>After the labeling process is finished, you can upload your labels with a call to <code>StartImportLabelsTaskRun</code>. After <code>StartImportLabelsTaskRun</code> finishes, all future runs of the machine learning transform will use the new and improved labels and perform a higher-quality transformation.</p>
		 * Post /#X-Amz-Target=AWSGlue.StartMLLabelingSetGenerationTaskRun
		 * @return {StartMLLabelingSetGenerationTaskRunResponse} Success
		 */
		StartMLLabelingSetGenerationTaskRun(requestBody: StartMLLabelingSetGenerationTaskRunRequest, headersHandler?: () => HttpHeaders): Observable<StartMLLabelingSetGenerationTaskRunResponse> {
			return this.http.post<StartMLLabelingSetGenerationTaskRunResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.StartMLLabelingSetGenerationTaskRun', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Starts an existing trigger. See <a href="https://docs.aws.amazon.com/glue/latest/dg/trigger-job.html">Triggering Jobs</a> for information about how different types of trigger are started.
		 * Post /#X-Amz-Target=AWSGlue.StartTrigger
		 * @return {StartTriggerResponse} Success
		 */
		StartTrigger(requestBody: StartTriggerRequest, headersHandler?: () => HttpHeaders): Observable<StartTriggerResponse> {
			return this.http.post<StartTriggerResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.StartTrigger', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Starts a new run of the specified workflow.
		 * Post /#X-Amz-Target=AWSGlue.StartWorkflowRun
		 * @return {StartWorkflowRunResponse} Success
		 */
		StartWorkflowRun(requestBody: StartWorkflowRunRequest, headersHandler?: () => HttpHeaders): Observable<StartWorkflowRunResponse> {
			return this.http.post<StartWorkflowRunResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.StartWorkflowRun', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * If the specified crawler is running, stops the crawl.
		 * Post /#X-Amz-Target=AWSGlue.StopCrawler
		 * @return {StopCrawlerResponse} Success
		 */
		StopCrawler(requestBody: StopCrawlerRequest, headersHandler?: () => HttpHeaders): Observable<StopCrawlerResponse> {
			return this.http.post<StopCrawlerResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.StopCrawler', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Sets the schedule state of the specified crawler to <code>NOT_SCHEDULED</code>, but does not stop the crawler if it is already running.
		 * Post /#X-Amz-Target=AWSGlue.StopCrawlerSchedule
		 * @return {StopCrawlerScheduleResponse} Success
		 */
		StopCrawlerSchedule(requestBody: StopCrawlerScheduleRequest, headersHandler?: () => HttpHeaders): Observable<StopCrawlerScheduleResponse> {
			return this.http.post<StopCrawlerScheduleResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.StopCrawlerSchedule', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Stops a specified trigger.
		 * Post /#X-Amz-Target=AWSGlue.StopTrigger
		 * @return {StopTriggerResponse} Success
		 */
		StopTrigger(requestBody: StopTriggerRequest, headersHandler?: () => HttpHeaders): Observable<StopTriggerResponse> {
			return this.http.post<StopTriggerResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.StopTrigger', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Stops the execution of the specified workflow run.
		 * Post /#X-Amz-Target=AWSGlue.StopWorkflowRun
		 * @return {StopWorkflowRunResponse} Success
		 */
		StopWorkflowRun(requestBody: StopWorkflowRunRequest, headersHandler?: () => HttpHeaders): Observable<StopWorkflowRunResponse> {
			return this.http.post<StopWorkflowRunResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.StopWorkflowRun', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Adds tags to a resource. A tag is a label you can assign to an AWS resource. In AWS Glue, you can tag only certain resources. For information about what resources you can tag, see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-tags.html">AWS Tags in AWS Glue</a>.
		 * Post /#X-Amz-Target=AWSGlue.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest, headersHandler?: () => HttpHeaders): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.TagResource', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Removes tags from a resource.
		 * Post /#X-Amz-Target=AWSGlue.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest, headersHandler?: () => HttpHeaders): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.UntagResource', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Modifies an existing classifier (a <code>GrokClassifier</code>, an <code>XMLClassifier</code>, a <code>JsonClassifier</code>, or a <code>CsvClassifier</code>, depending on which field is present).
		 * Post /#X-Amz-Target=AWSGlue.UpdateClassifier
		 * @return {UpdateClassifierResponse} Success
		 */
		UpdateClassifier(requestBody: UpdateClassifierRequest, headersHandler?: () => HttpHeaders): Observable<UpdateClassifierResponse> {
			return this.http.post<UpdateClassifierResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.UpdateClassifier', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Updates a connection definition in the Data Catalog.
		 * Post /#X-Amz-Target=AWSGlue.UpdateConnection
		 * @return {UpdateConnectionResponse} Success
		 */
		UpdateConnection(requestBody: UpdateConnectionRequest, headersHandler?: () => HttpHeaders): Observable<UpdateConnectionResponse> {
			return this.http.post<UpdateConnectionResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.UpdateConnection', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Updates a crawler. If a crawler is running, you must stop it using <code>StopCrawler</code> before updating it.
		 * Post /#X-Amz-Target=AWSGlue.UpdateCrawler
		 * @return {UpdateCrawlerResponse} Success
		 */
		UpdateCrawler(requestBody: UpdateCrawlerRequest, headersHandler?: () => HttpHeaders): Observable<UpdateCrawlerResponse> {
			return this.http.post<UpdateCrawlerResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.UpdateCrawler', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Updates the schedule of a crawler using a <code>cron</code> expression.
		 * Post /#X-Amz-Target=AWSGlue.UpdateCrawlerSchedule
		 * @return {UpdateCrawlerScheduleResponse} Success
		 */
		UpdateCrawlerSchedule(requestBody: UpdateCrawlerScheduleRequest, headersHandler?: () => HttpHeaders): Observable<UpdateCrawlerScheduleResponse> {
			return this.http.post<UpdateCrawlerScheduleResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.UpdateCrawlerSchedule', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Updates an existing database definition in a Data Catalog.
		 * Post /#X-Amz-Target=AWSGlue.UpdateDatabase
		 * @return {UpdateDatabaseResponse} Success
		 */
		UpdateDatabase(requestBody: UpdateDatabaseRequest, headersHandler?: () => HttpHeaders): Observable<UpdateDatabaseResponse> {
			return this.http.post<UpdateDatabaseResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.UpdateDatabase', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Updates a specified development endpoint.
		 * Post /#X-Amz-Target=AWSGlue.UpdateDevEndpoint
		 * @return {UpdateDevEndpointResponse} Success
		 */
		UpdateDevEndpoint(requestBody: UpdateDevEndpointRequest, headersHandler?: () => HttpHeaders): Observable<UpdateDevEndpointResponse> {
			return this.http.post<UpdateDevEndpointResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.UpdateDevEndpoint', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Updates an existing job definition.
		 * Post /#X-Amz-Target=AWSGlue.UpdateJob
		 * @return {UpdateJobResponse} Success
		 */
		UpdateJob(requestBody: UpdateJobRequest, headersHandler?: () => HttpHeaders): Observable<UpdateJobResponse> {
			return this.http.post<UpdateJobResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.UpdateJob', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Updates an existing machine learning transform. Call this operation to tune the algorithm parameters to achieve better results.</p> <p>After calling this operation, you can call the <code>StartMLEvaluationTaskRun</code> operation to assess how well your new parameters achieved your goals (such as improving the quality of your machine learning transform, or making it more cost-effective).</p>
		 * Post /#X-Amz-Target=AWSGlue.UpdateMLTransform
		 * @return {UpdateMLTransformResponse} Success
		 */
		UpdateMLTransform(requestBody: UpdateMLTransformRequest, headersHandler?: () => HttpHeaders): Observable<UpdateMLTransformResponse> {
			return this.http.post<UpdateMLTransformResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.UpdateMLTransform', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Updates a partition.
		 * Post /#X-Amz-Target=AWSGlue.UpdatePartition
		 * @return {UpdatePartitionResponse} Success
		 */
		UpdatePartition(requestBody: UpdatePartitionRequest, headersHandler?: () => HttpHeaders): Observable<UpdatePartitionResponse> {
			return this.http.post<UpdatePartitionResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.UpdatePartition', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Updates a metadata table in the Data Catalog.
		 * Post /#X-Amz-Target=AWSGlue.UpdateTable
		 * @return {UpdateTableResponse} Success
		 */
		UpdateTable(requestBody: UpdateTableRequest, headersHandler?: () => HttpHeaders): Observable<UpdateTableResponse> {
			return this.http.post<UpdateTableResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.UpdateTable', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Updates a trigger definition.
		 * Post /#X-Amz-Target=AWSGlue.UpdateTrigger
		 * @return {UpdateTriggerResponse} Success
		 */
		UpdateTrigger(requestBody: UpdateTriggerRequest, headersHandler?: () => HttpHeaders): Observable<UpdateTriggerResponse> {
			return this.http.post<UpdateTriggerResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.UpdateTrigger', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Updates an existing function definition in the Data Catalog.
		 * Post /#X-Amz-Target=AWSGlue.UpdateUserDefinedFunction
		 * @return {UpdateUserDefinedFunctionResponse} Success
		 */
		UpdateUserDefinedFunction(requestBody: UpdateUserDefinedFunctionRequest, headersHandler?: () => HttpHeaders): Observable<UpdateUserDefinedFunctionResponse> {
			return this.http.post<UpdateUserDefinedFunctionResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.UpdateUserDefinedFunction', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Updates an existing workflow.
		 * Post /#X-Amz-Target=AWSGlue.UpdateWorkflow
		 * @return {UpdateWorkflowResponse} Success
		 */
		UpdateWorkflow(requestBody: UpdateWorkflowRequest, headersHandler?: () => HttpHeaders): Observable<UpdateWorkflowResponse> {
			return this.http.post<UpdateWorkflowResponse>(this.baseUri + '/#X-Amz-Target=AWSGlue.UpdateWorkflow', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}
	}

}

