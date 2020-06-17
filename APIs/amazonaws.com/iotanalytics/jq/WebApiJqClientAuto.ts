///<reference path="HttpClient.ts" />
namespace My_Demo_Client {
	export interface BatchPutMessageResponse {
		batchPutMessageErrorEntries?: Array<BatchPutMessageErrorEntry>;
	}


	/**Information about a message. */
	export interface Message {
		messageId: string;
		payload: string;
	}

	export interface CreateChannelResponse {
		channelName?: string;
		channelArn?: string;

		/**How long, in days, message data is kept. */
		retentionPeriod?: RetentionPeriod;
	}


	/**Use this to store channel data in an S3 bucket that you manage. If customer managed storage is selected, the "retentionPeriod" parameter is ignored. The choice of service-managed or customer-managed S3 storage cannot be changed after creation of the channel. */
	export interface CustomerManagedChannelS3Storage {
		bucket: string;
		keyPrefix?: string;
		roleArn: string;
	}


	/**A set of key/value pairs which are used to manage the resource. */
	export interface Tag {
		key: string;
		value: string;
	}

	export interface CreateDatasetResponse {
		datasetName?: string;
		datasetArn?: string;

		/**How long, in days, message data is kept. */
		retentionPeriod?: RetentionPeriod;
	}


	/**A "DatasetAction" object that specifies how data set contents are automatically created. */
	export interface DatasetAction {
		actionName?: string;

		/**The SQL query to modify the message. */
		queryAction?: SqlQueryDatasetAction;

		/**Information needed to run the "containerAction" to produce data set contents. */
		containerAction?: ContainerDatasetAction;
	}


	/**The "DatasetTrigger" that specifies when the data set is automatically updated. */
	export interface DatasetTrigger {

		/**The schedule for when to trigger an update. */
		schedule?: Schedule;

		/**Information about the data set whose content generation triggers the new data set content generation. */
		dataset?: TriggeringDataset;
	}


	/**When data set contents are created they are delivered to destination specified here. */
	export interface DatasetContentDeliveryRule {
		entryName?: string;

		/**The destination to which data set contents are delivered. */
		destination: DatasetContentDeliveryDestination;
	}

	export interface CreateDatasetContentResponse {
		versionId?: string;
	}

	export interface CreateDatastoreResponse {
		datastoreName?: string;
		datastoreArn?: string;

		/**How long, in days, message data is kept. */
		retentionPeriod?: RetentionPeriod;
	}


	/**Use this to store data store data in an S3 bucket that you manage. When customer managed storage is selected, the "retentionPeriod" parameter is ignored. The choice of service-managed or customer-managed S3 storage cannot be changed after creation of the data store. */
	export interface CustomerManagedDatastoreS3Storage {
		bucket: string;
		keyPrefix?: string;
		roleArn: string;
	}

	export interface CreatePipelineResponse {
		pipelineName?: string;
		pipelineArn?: string;
	}


	/**An activity that performs a transformation on a message. */
	export interface PipelineActivity {

		/**The activity that determines the source of the messages to be processed. */
		channel?: ChannelActivity;

		/**An activity that runs a Lambda function to modify the message. */
		lambda?: LambdaActivity;

		/**The 'datastore' activity that specifies where to store the processed data. */
		datastore?: DatastoreActivity;

		/**An activity that adds other attributes based on existing attributes in the message. */
		addAttributes?: AddAttributesActivity;

		/**An activity that removes attributes from a message. */
		removeAttributes?: RemoveAttributesActivity;

		/**Creates a new message using only the specified attributes from the original message. */
		selectAttributes?: SelectAttributesActivity;

		/**An activity that filters a message based on its attributes. */
		filter?: FilterActivity;

		/**An activity that computes an arithmetic expression using the message's attributes. */
		math?: MathActivity;

		/**An activity that adds data from the AWS IoT device registry to your message. */
		deviceRegistryEnrich?: DeviceRegistryEnrichActivity;

		/**An activity that adds information from the AWS IoT Device Shadows service to a message. */
		deviceShadowEnrich?: DeviceShadowEnrichActivity;
	}

	export interface DescribeChannelResponse {

		/**A collection of data from an MQTT topic. Channels archive the raw, unprocessed messages before publishing the data to a pipeline. */
		channel?: Channel;

		/**Statistics information about the channel. */
		statistics?: ChannelStatistics;
	}

	export interface DescribeDatasetResponse {

		/**Information about a data set. */
		dataset?: Dataset;
	}

	export interface DescribeDatastoreResponse {

		/**Information about a data store. */
		datastore?: Datastore;

		/**Statistical information about the data store. */
		statistics?: DatastoreStatistics;
	}

	export interface DescribeLoggingOptionsResponse {

		/**Information about logging options. */
		loggingOptions?: LoggingOptions;
	}

	export interface DescribePipelineResponse {

		/**Contains information about a pipeline. */
		pipeline?: Pipeline;
	}

	export interface GetDatasetContentResponse {
		entries?: Array<DatasetEntry>;
		timestamp?: Date;

		/**The state of the data set contents and the reason they are in this state. */
		status?: DatasetContentStatus;
	}

	export interface ListChannelsResponse {
		channelSummaries?: Array<ChannelSummary>;
		nextToken?: string;
	}

	export interface ListDatasetContentsResponse {
		datasetContentSummaries?: Array<DatasetContentSummary>;
		nextToken?: string;
	}

	export interface ListDatasetsResponse {
		datasetSummaries?: Array<DatasetSummary>;
		nextToken?: string;
	}

	export interface ListDatastoresResponse {
		datastoreSummaries?: Array<DatastoreSummary>;
		nextToken?: string;
	}

	export interface ListPipelinesResponse {
		pipelineSummaries?: Array<PipelineSummary>;
		nextToken?: string;
	}

	export interface ListTagsForResourceResponse {
		tags?: Array<Tag>;
	}

	export enum LoggingLevel { ERROR = 0 }

	export interface RunPipelineActivityResponse {
		payloads?: Array<MessagePayload>;
		logResult?: string;
	}


	/**The activity that determines the source of the messages to be processed. */
	export interface ChannelActivity {
		name: string;
		channelName: string;
		next?: string;
	}


	/**An activity that runs a Lambda function to modify the message. */
	export interface LambdaActivity {
		name: string;
		lambdaName: string;
		batchSize: number;
		next?: string;
	}


	/**The 'datastore' activity that specifies where to store the processed data. */
	export interface DatastoreActivity {
		name: string;
		datastoreName: string;
	}


	/**An activity that adds other attributes based on existing attributes in the message. */
	export interface AddAttributesActivity {
		name: string;
		attributes: AttributeNameMapping;
		next?: string;
	}


	/**An activity that removes attributes from a message. */
	export interface RemoveAttributesActivity {
		name: string;
		attributes: Array<AttributeName>;
		next?: string;
	}


	/**Creates a new message using only the specified attributes from the original message. */
	export interface SelectAttributesActivity {
		name: string;
		attributes: Array<AttributeName>;
		next?: string;
	}


	/**An activity that filters a message based on its attributes. */
	export interface FilterActivity {
		name: string;
		filter: string;
		next?: string;
	}


	/**An activity that computes an arithmetic expression using the message's attributes. */
	export interface MathActivity {
		name: string;
		attribute: string;
		math: string;
		next?: string;
	}


	/**An activity that adds data from the AWS IoT device registry to your message. */
	export interface DeviceRegistryEnrichActivity {
		name: string;
		attribute: string;
		thingName: string;
		roleArn: string;
		next?: string;
	}


	/**An activity that adds information from the AWS IoT Device Shadows service to a message. */
	export interface DeviceShadowEnrichActivity {
		name: string;
		attribute: string;
		thingName: string;
		roleArn: string;
		next?: string;
	}

	export interface SampleChannelDataResponse {
		payloads?: Array<MessagePayload>;
	}

	export interface StartPipelineReprocessingResponse {
		reprocessingId?: string;
	}


	/**Contains informations about errors. */
	export interface BatchPutMessageErrorEntry {
		messageId?: string;
		errorCode?: string;
		errorMessage?: string;
	}

	export interface BatchPutMessageRequest {
		channelName: string;
		messages: Array<Message>;
	}


	/**Where channel data is stored. You may choose one of "serviceManagedS3" or "customerManagedS3" storage. If not specified, the default is "serviceManagedS3". This cannot be changed after creation of the channel. */
	export interface ChannelStorage {

		/**Use this to store channel data in an S3 bucket managed by the AWS IoT Analytics service. The choice of service-managed or customer-managed S3 storage cannot be changed after creation of the channel. */
		serviceManagedS3?: ServiceManagedChannelS3Storage;

		/**Use this to store channel data in an S3 bucket that you manage. If customer managed storage is selected, the "retentionPeriod" parameter is ignored. The choice of service-managed or customer-managed S3 storage cannot be changed after creation of the channel. */
		customerManagedS3?: CustomerManagedChannelS3Storage;
	}

	export enum ChannelStatus { CREATING = 0, ACTIVE = 1, DELETING = 2 }


	/**How long, in days, message data is kept. */
	export interface RetentionPeriod {
		unlimited?: boolean;
		numberOfDays?: number;
	}


	/**A collection of data from an MQTT topic. Channels archive the raw, unprocessed messages before publishing the data to a pipeline. */
	export interface Channel {
		name?: string;

		/**Where channel data is stored. You may choose one of "serviceManagedS3" or "customerManagedS3" storage. If not specified, the default is "serviceManagedS3". This cannot be changed after creation of the channel. */
		storage?: ChannelStorage;
		arn?: string;
		status?: ChannelStatus;

		/**How long, in days, message data is kept. */
		retentionPeriod?: RetentionPeriod;
		creationTime?: Date;
		lastUpdateTime?: Date;
	}

	export enum ChannelStatus { CREATING = 0, ACTIVE = 1, DELETING = 2 }


	/**The estimated size of the resource. */
	export interface EstimatedResourceSize {
		estimatedSizeInBytes?: number;
		estimatedOn?: Date;
	}


	/**Statistics information about the channel. */
	export interface ChannelStatistics {

		/**The estimated size of the resource. */
		size?: EstimatedResourceSize;
	}


	/**Used to store channel data in an S3 bucket that you manage. */
	export interface CustomerManagedChannelS3StorageSummary {
		bucket?: string;
		keyPrefix?: string;
		roleArn?: string;
	}


	/**Where channel data is stored. */
	export interface ChannelStorageSummary {

		/**Used to store channel data in an S3 bucket managed by the AWS IoT Analytics service. */
		serviceManagedS3?: ServiceManagedChannelS3StorageSummary;

		/**Used to store channel data in an S3 bucket that you manage. */
		customerManagedS3?: CustomerManagedChannelS3StorageSummary;
	}


	/**A summary of information about a channel. */
	export interface ChannelSummary {
		channelName?: string;

		/**Where channel data is stored. */
		channelStorage?: ChannelStorageSummary;
		status?: ChannelSummaryStatus;
		creationTime?: Date;
		lastUpdateTime?: Date;
	}

	export enum ChannelSummaryStatus { CREATING = 0, ACTIVE = 1, DELETING = 2 }

	export enum ComputeType { ACU_1 = 0, ACU_2 = 1 }


	/**The configuration of the resource used to execute the "containerAction". */
	export interface ResourceConfiguration {
		computeType: ResourceConfigurationComputeType;
		volumeSizeInGB: number;
	}

	export enum ResourceConfigurationComputeType { ACU_1 = 0, ACU_2 = 1 }


	/**Information needed to run the "containerAction" to produce data set contents. */
	export interface ContainerDatasetAction {
		image: string;
		executionRoleArn: string;

		/**The configuration of the resource used to execute the "containerAction". */
		resourceConfiguration: ResourceConfiguration;
		variables?: Array<Variable>;
	}

	export interface CreateChannelRequest {
		channelName: string;

		/**Where channel data is stored. You may choose one of "serviceManagedS3" or "customerManagedS3" storage. If not specified, the default is "serviceManagedS3". This cannot be changed after creation of the channel. */
		channelStorage?: ChannelStorage;

		/**How long, in days, message data is kept. */
		retentionPeriod?: RetentionPeriod;
		tags?: Array<Tag>;
	}


	/**Information about the versioning of data set contents. */
	export interface VersioningConfiguration {
		unlimited?: boolean;
		maxVersions?: number;
	}

	export interface CreateDatasetRequest {
		datasetName: string;
		actions: Array<DatasetAction>;
		triggers?: Array<DatasetTrigger>;
		contentDeliveryRules?: Array<DatasetContentDeliveryRule>;

		/**How long, in days, message data is kept. */
		retentionPeriod?: RetentionPeriod;

		/**Information about the versioning of data set contents. */
		versioningConfiguration?: VersioningConfiguration;
		tags?: Array<Tag>;
	}


	/**Where data store data is stored. You may choose one of "serviceManagedS3" or "customerManagedS3" storage. If not specified, the default is "serviceManagedS3". This cannot be changed after the data store is created. */
	export interface DatastoreStorage {

		/**Use this to store data store data in an S3 bucket managed by the AWS IoT Analytics service. The choice of service-managed or customer-managed S3 storage cannot be changed after creation of the data store. */
		serviceManagedS3?: ServiceManagedDatastoreS3Storage;

		/**Use this to store data store data in an S3 bucket that you manage. When customer managed storage is selected, the "retentionPeriod" parameter is ignored. The choice of service-managed or customer-managed S3 storage cannot be changed after creation of the data store. */
		customerManagedS3?: CustomerManagedDatastoreS3Storage;
	}

	export interface CreateDatastoreRequest {
		datastoreName: string;

		/**Where data store data is stored. You may choose one of "serviceManagedS3" or "customerManagedS3" storage. If not specified, the default is "serviceManagedS3". This cannot be changed after the data store is created. */
		datastoreStorage?: DatastoreStorage;

		/**How long, in days, message data is kept. */
		retentionPeriod?: RetentionPeriod;
		tags?: Array<Tag>;
	}

	export interface CreatePipelineRequest {
		pipelineName: string;
		pipelineActivities: Array<PipelineActivity>;
		tags?: Array<Tag>;
	}


	/**Used to store data store data in an S3 bucket that you manage. */
	export interface CustomerManagedDatastoreS3StorageSummary {
		bucket?: string;
		keyPrefix?: string;
		roleArn?: string;
	}

	export enum DatasetStatus { CREATING = 0, ACTIVE = 1, DELETING = 2 }


	/**Information about a data set. */
	export interface Dataset {
		name?: string;
		arn?: string;
		actions?: Array<DatasetAction>;
		triggers?: Array<DatasetTrigger>;
		contentDeliveryRules?: Array<DatasetContentDeliveryRule>;
		status?: DatasetStatus;
		creationTime?: Date;
		lastUpdateTime?: Date;

		/**How long, in days, message data is kept. */
		retentionPeriod?: RetentionPeriod;

		/**Information about the versioning of data set contents. */
		versioningConfiguration?: VersioningConfiguration;
	}

	export enum DatasetStatus { CREATING = 0, ACTIVE = 1, DELETING = 2 }


	/**The SQL query to modify the message. */
	export interface SqlQueryDatasetAction {
		sqlQuery: string;
		filters?: Array<QueryFilter>;
	}


	/**Information about the action which automatically creates the data set's contents. */
	export interface DatasetActionSummary {
		actionName?: string;
		actionType?: DatasetActionSummaryActionType;
	}

	export enum DatasetActionSummaryActionType { QUERY = 0, CONTAINER = 1 }

	export enum DatasetActionType { QUERY = 0, CONTAINER = 1 }


	/**Configuration information for delivery of data set contents to AWS IoT Events. */
	export interface IotEventsDestinationConfiguration {
		inputName: string;
		roleArn: string;
	}


	/**Configuration information for delivery of data set contents to Amazon S3. */
	export interface S3DestinationConfiguration {
		bucket: string;
		key: string;

		/**Configuration information for coordination with the AWS Glue ETL (extract, transform and load) service. */
		glueConfiguration?: GlueConfiguration;
		roleArn: string;
	}


	/**The destination to which data set contents are delivered. */
	export interface DatasetContentDeliveryDestination {

		/**Configuration information for delivery of data set contents to AWS IoT Events. */
		iotEventsDestinationConfiguration?: IotEventsDestinationConfiguration;

		/**Configuration information for delivery of data set contents to Amazon S3. */
		s3DestinationConfiguration?: S3DestinationConfiguration;
	}

	export enum DatasetContentState { CREATING = 0, SUCCEEDED = 1, FAILED = 2 }


	/**The state of the data set contents and the reason they are in this state. */
	export interface DatasetContentStatus {
		state?: DatasetContentStatusState;
		reason?: string;
	}

	export enum DatasetContentStatusState { CREATING = 0, SUCCEEDED = 1, FAILED = 2 }


	/**Summary information about data set contents. */
	export interface DatasetContentSummary {
		version?: string;

		/**The state of the data set contents and the reason they are in this state. */
		status?: DatasetContentStatus;
		creationTime?: Date;
		scheduleTime?: Date;
		completionTime?: Date;
	}


	/**The data set whose latest contents are used as input to the notebook or application. */
	export interface DatasetContentVersionValue {
		datasetName: string;
	}


	/**The reference to a data set entry. */
	export interface DatasetEntry {
		entryName?: string;
		dataURI?: string;
	}


	/**A summary of information about a data set. */
	export interface DatasetSummary {
		datasetName?: string;
		status?: DatasetSummaryStatus;
		creationTime?: Date;
		lastUpdateTime?: Date;
		triggers?: Array<DatasetTrigger>;
		actions?: Array<DatasetActionSummary>;
	}

	export enum DatasetSummaryStatus { CREATING = 0, ACTIVE = 1, DELETING = 2 }


	/**The schedule for when to trigger an update. */
	export interface Schedule {
		expression?: string;
	}


	/**Information about the data set whose content generation triggers the new data set content generation. */
	export interface TriggeringDataset {
		name: string;
	}

	export enum DatastoreStatus { CREATING = 0, ACTIVE = 1, DELETING = 2 }


	/**Information about a data store. */
	export interface Datastore {
		name?: string;

		/**Where data store data is stored. You may choose one of "serviceManagedS3" or "customerManagedS3" storage. If not specified, the default is "serviceManagedS3". This cannot be changed after the data store is created. */
		storage?: DatastoreStorage;
		arn?: string;
		status?: DatastoreStatus;

		/**How long, in days, message data is kept. */
		retentionPeriod?: RetentionPeriod;
		creationTime?: Date;
		lastUpdateTime?: Date;
	}

	export enum DatastoreStatus { CREATING = 0, ACTIVE = 1, DELETING = 2 }


	/**Statistical information about the data store. */
	export interface DatastoreStatistics {

		/**The estimated size of the resource. */
		size?: EstimatedResourceSize;
	}


	/**Where data store data is stored. */
	export interface DatastoreStorageSummary {

		/**Used to store data store data in an S3 bucket managed by the AWS IoT Analytics service. */
		serviceManagedS3?: ServiceManagedDatastoreS3StorageSummary;

		/**Used to store data store data in an S3 bucket that you manage. */
		customerManagedS3?: CustomerManagedDatastoreS3StorageSummary;
	}


	/**A summary of information about a data store. */
	export interface DatastoreSummary {
		datastoreName?: string;

		/**Where data store data is stored. */
		datastoreStorage?: DatastoreStorageSummary;
		status?: DatastoreSummaryStatus;
		creationTime?: Date;
		lastUpdateTime?: Date;
	}

	export enum DatastoreSummaryStatus { CREATING = 0, ACTIVE = 1, DELETING = 2 }


	/**Used to limit data to that which has arrived since the last execution of the action. */
	export interface DeltaTime {
		offsetSeconds: number;
		timeExpression: string;
	}


	/**Information about logging options. */
	export interface LoggingOptions {
		roleArn: string;
		level: LoggingOptionsLevel;
		enabled: boolean;
	}

	export enum LoggingOptionsLevel { ERROR = 0 }


	/**Contains information about a pipeline. */
	export interface Pipeline {
		name?: string;
		arn?: string;
		activities?: Array<PipelineActivity>;
		reprocessingSummaries?: Array<ReprocessingSummary>;
		creationTime?: Date;
		lastUpdateTime?: Date;
	}


	/**Configuration information for coordination with the AWS Glue ETL (extract, transform and load) service. */
	export interface GlueConfiguration {
		tableName: string;
		databaseName: string;
	}


	/**The value of the variable as a structure that specifies an output file URI. */
	export interface OutputFileUriValue {
		fileName: string;
	}


	/**A summary of information about a pipeline. */
	export interface PipelineSummary {
		pipelineName?: string;
		reprocessingSummaries?: Array<ReprocessingSummary>;
		creationTime?: Date;
		lastUpdateTime?: Date;
	}

	export interface PutLoggingOptionsRequest {

		/**Information about logging options. */
		loggingOptions: LoggingOptions;
	}


	/**Information which is used to filter message data, to segregate it according to the time frame in which it arrives. */
	export interface QueryFilter {

		/**Used to limit data to that which has arrived since the last execution of the action. */
		deltaTime?: DeltaTime;
	}

	export enum ReprocessingStatus { RUNNING = 0, SUCCEEDED = 1, CANCELLED = 2, FAILED = 3 }


	/**Information about pipeline reprocessing. */
	export interface ReprocessingSummary {
		id?: string;
		status?: ReprocessingSummaryStatus;
		creationTime?: Date;
	}

	export enum ReprocessingSummaryStatus { RUNNING = 0, SUCCEEDED = 1, CANCELLED = 2, FAILED = 3 }

	export interface RunPipelineActivityRequest {

		/**An activity that performs a transformation on a message. */
		pipelineActivity: PipelineActivity;
		payloads: Array<MessagePayload>;
	}

	export interface StartPipelineReprocessingRequest {
		startTime?: Date;
		endTime?: Date;
	}

	export interface TagResourceRequest {
		tags: Array<Tag>;
	}

	export interface UpdateChannelRequest {

		/**Where channel data is stored. You may choose one of "serviceManagedS3" or "customerManagedS3" storage. If not specified, the default is "serviceManagedS3". This cannot be changed after creation of the channel. */
		channelStorage?: ChannelStorage;

		/**How long, in days, message data is kept. */
		retentionPeriod?: RetentionPeriod;
	}

	export interface UpdateDatasetRequest {
		actions: Array<DatasetAction>;
		triggers?: Array<DatasetTrigger>;
		contentDeliveryRules?: Array<DatasetContentDeliveryRule>;

		/**How long, in days, message data is kept. */
		retentionPeriod?: RetentionPeriod;

		/**Information about the versioning of data set contents. */
		versioningConfiguration?: VersioningConfiguration;
	}

	export interface UpdateDatastoreRequest {

		/**How long, in days, message data is kept. */
		retentionPeriod?: RetentionPeriod;

		/**Where data store data is stored. You may choose one of "serviceManagedS3" or "customerManagedS3" storage. If not specified, the default is "serviceManagedS3". This cannot be changed after the data store is created. */
		datastoreStorage?: DatastoreStorage;
	}

	export interface UpdatePipelineRequest {
		pipelineActivities: Array<PipelineActivity>;
	}


	/**An instance of a variable to be passed to the "containerAction" execution. Each variable must have a name and a value given by one of "stringValue", "datasetContentVersionValue", or "outputFileUriValue". */
	export interface Variable {
		name: string;
		stringValue?: string;
		doubleValue?: number;

		/**The data set whose latest contents are used as input to the notebook or application. */
		datasetContentVersionValue?: DatasetContentVersionValue;

		/**The value of the variable as a structure that specifies an output file URI. */
		outputFileUriValue?: OutputFileUriValue;
	}

	export class DemoClient {
		constructor(private baseUri: string = HttpClient.locationOrigin, private httpClient: HttpClientBase = new HttpClient(), private error?: (xhr: JQueryXHR, ajaxOptions: string, thrown: string) => any, private statusCode?: { [key: string]: any; }) {
		}

		/**
		 * Sends messages to a channel.
		 * Post /messages/batch
		 * @return {BatchPutMessageResponse} Success
		 */
		BatchPutMessage(callback: (data : BatchPutMessageResponse) => any, requestBody: BatchPutMessageBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/messages/batch', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Cancels the reprocessing of data through the pipeline.
		 * Delete /pipelines/{pipelineName}/reprocessing/{reprocessingId}
		 * @param {string} pipelineName The name of pipeline for which data reprocessing is canceled.
		 * @param {string} reprocessingId The ID of the reprocessing task (returned by "StartPipelineReprocessing").
		 * @return {CancelPipelineReprocessingResponse} Success
		 */
		CancelPipelineReprocessing(pipelineName: string, reprocessingId: string, callback: (data : CancelPipelineReprocessingResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + '/pipelines/' + (pipelineName == null ? '' : encodeURIComponent(pipelineName)) + '/reprocessing/' + (reprocessingId == null ? '' : encodeURIComponent(reprocessingId)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Creates a channel. A channel collects data from an MQTT topic and archives the raw, unprocessed messages before publishing the data to a pipeline.
		 * Post /channels
		 * @return {void} 
		 */
		CreateChannel(callback: (data : void) => any, requestBody: CreateChannelBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/channels', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Retrieves a list of channels.
		 * Get /channels
		 * @param {string} nextToken The token for the next set of results.
		 * @param {number} maxResults <p>The maximum number of results to return in this request.</p> <p>The default value is 100.</p>
		 * @return {ListChannelsResponse} Success
		 */
		ListChannels(nextToken: string, maxResults: number, callback: (data : ListChannelsResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/channels?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Creates a data set. A data set stores data retrieved from a data store by applying a "queryAction" (a SQL query) or a "containerAction" (executing a containerized application). This operation creates the skeleton of a data set. The data set can be populated manually by calling "CreateDatasetContent" or automatically according to a "trigger" you specify.
		 * Post /datasets
		 * @return {void} 
		 */
		CreateDataset(callback: (data : void) => any, requestBody: CreateDatasetBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/datasets', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Retrieves information about data sets.
		 * Get /datasets
		 * @param {string} nextToken The token for the next set of results.
		 * @param {number} maxResults <p>The maximum number of results to return in this request.</p> <p>The default value is 100.</p>
		 * @return {ListDatasetsResponse} Success
		 */
		ListDatasets(nextToken: string, maxResults: number, callback: (data : ListDatasetsResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/datasets?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Creates the content of a data set by applying a "queryAction" (a SQL query) or a "containerAction" (executing a containerized application).
		 * Post /datasets/{datasetName}/content
		 * @param {string} datasetName The name of the data set.
		 * @return {CreateDatasetContentResponse} Success
		 */
		CreateDatasetContent(datasetName: string, callback: (data : CreateDatasetContentResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/datasets/' + (datasetName == null ? '' : encodeURIComponent(datasetName)) + '/content', null, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Deletes the content of the specified data set.
		 * Delete /datasets/{datasetName}/content
		 * @param {string} datasetName The name of the data set whose content is deleted.
		 * @param {string} versionId The version of the data set whose content is deleted. You can also use the strings "$LATEST" or "$LATEST_SUCCEEDED" to delete the latest or latest successfully completed data set. If not specified, "$LATEST_SUCCEEDED" is the default.
		 * @return {void} 
		 */
		DeleteDatasetContent(datasetName: string, versionId: string, callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + '/datasets/' + (datasetName == null ? '' : encodeURIComponent(datasetName)) + '/content&versionId=' + (versionId == null ? '' : encodeURIComponent(versionId)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Retrieves the contents of a data set as pre-signed URIs.
		 * Get /datasets/{datasetName}/content
		 * @param {string} datasetName The name of the data set whose contents are retrieved.
		 * @param {string} versionId The version of the data set whose contents are retrieved. You can also use the strings "$LATEST" or "$LATEST_SUCCEEDED" to retrieve the contents of the latest or latest successfully completed data set. If not specified, "$LATEST_SUCCEEDED" is the default.
		 * @return {GetDatasetContentResponse} Success
		 */
		GetDatasetContent(datasetName: string, versionId: string, callback: (data : GetDatasetContentResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/datasets/' + (datasetName == null ? '' : encodeURIComponent(datasetName)) + '/content&versionId=' + (versionId == null ? '' : encodeURIComponent(versionId)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Creates a data store, which is a repository for messages.
		 * Post /datastores
		 * @return {void} 
		 */
		CreateDatastore(callback: (data : void) => any, requestBody: CreateDatastoreBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/datastores', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Retrieves a list of data stores.
		 * Get /datastores
		 * @param {string} nextToken The token for the next set of results.
		 * @param {number} maxResults <p>The maximum number of results to return in this request.</p> <p>The default value is 100.</p>
		 * @return {ListDatastoresResponse} Success
		 */
		ListDatastores(nextToken: string, maxResults: number, callback: (data : ListDatastoresResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/datastores?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Creates a pipeline. A pipeline consumes messages from a channel and allows you to process the messages before storing them in a data store. You must specify both a <code>channel</code> and a <code>datastore</code> activity and, optionally, as many as 23 additional activities in the <code>pipelineActivities</code> array.
		 * Post /pipelines
		 * @return {void} 
		 */
		CreatePipeline(callback: (data : void) => any, requestBody: CreatePipelineBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/pipelines', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Retrieves a list of pipelines.
		 * Get /pipelines
		 * @param {string} nextToken The token for the next set of results.
		 * @param {number} maxResults <p>The maximum number of results to return in this request.</p> <p>The default value is 100.</p>
		 * @return {ListPipelinesResponse} Success
		 */
		ListPipelines(nextToken: string, maxResults: number, callback: (data : ListPipelinesResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/pipelines?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Deletes the specified channel.
		 * Delete /channels/{channelName}
		 * @param {string} channelName The name of the channel to delete.
		 * @return {void} 
		 */
		DeleteChannel(channelName: string, callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + '/channels/' + (channelName == null ? '' : encodeURIComponent(channelName)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Retrieves information about a channel.
		 * Get /channels/{channelName}
		 * @param {string} channelName The name of the channel whose information is retrieved.
		 * @param {boolean} includeStatistics If true, additional statistical information about the channel is included in the response. This feature cannot be used with a channel whose S3 storage is customer-managed.
		 * @return {DescribeChannelResponse} Success
		 */
		DescribeChannel(channelName: string, includeStatistics: boolean, callback: (data : DescribeChannelResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/channels/' + (channelName == null ? '' : encodeURIComponent(channelName)) + '&includeStatistics=' + includeStatistics, callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Updates the settings of a channel.
		 * Put /channels/{channelName}
		 * @param {string} channelName The name of the channel to be updated.
		 * @return {void} Success
		 */
		UpdateChannel(channelName: string, callback: (data : void) => any, requestBody: UpdateChannelBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.put(this.baseUri + '/channels/' + (channelName == null ? '' : encodeURIComponent(channelName)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Deletes the specified data set.</p> <p>You do not have to delete the content of the data set before you perform this operation.</p>
		 * Delete /datasets/{datasetName}
		 * @param {string} datasetName The name of the data set to delete.
		 * @return {void} 
		 */
		DeleteDataset(datasetName: string, callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + '/datasets/' + (datasetName == null ? '' : encodeURIComponent(datasetName)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Retrieves information about a data set.
		 * Get /datasets/{datasetName}
		 * @param {string} datasetName The name of the data set whose information is retrieved.
		 * @return {DescribeDatasetResponse} Success
		 */
		DescribeDataset(datasetName: string, callback: (data : DescribeDatasetResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/datasets/' + (datasetName == null ? '' : encodeURIComponent(datasetName)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Updates the settings of a data set.
		 * Put /datasets/{datasetName}
		 * @param {string} datasetName The name of the data set to update.
		 * @return {void} Success
		 */
		UpdateDataset(datasetName: string, callback: (data : void) => any, requestBody: UpdateDatasetBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.put(this.baseUri + '/datasets/' + (datasetName == null ? '' : encodeURIComponent(datasetName)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Deletes the specified data store.
		 * Delete /datastores/{datastoreName}
		 * @param {string} datastoreName The name of the data store to delete.
		 * @return {void} 
		 */
		DeleteDatastore(datastoreName: string, callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + '/datastores/' + (datastoreName == null ? '' : encodeURIComponent(datastoreName)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Retrieves information about a data store.
		 * Get /datastores/{datastoreName}
		 * @param {string} datastoreName The name of the data store
		 * @param {boolean} includeStatistics If true, additional statistical information about the data store is included in the response. This feature cannot be used with a data store whose S3 storage is customer-managed.
		 * @return {DescribeDatastoreResponse} Success
		 */
		DescribeDatastore(datastoreName: string, includeStatistics: boolean, callback: (data : DescribeDatastoreResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/datastores/' + (datastoreName == null ? '' : encodeURIComponent(datastoreName)) + '&includeStatistics=' + includeStatistics, callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Updates the settings of a data store.
		 * Put /datastores/{datastoreName}
		 * @param {string} datastoreName The name of the data store to be updated.
		 * @return {void} Success
		 */
		UpdateDatastore(datastoreName: string, callback: (data : void) => any, requestBody: UpdateDatastoreBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.put(this.baseUri + '/datastores/' + (datastoreName == null ? '' : encodeURIComponent(datastoreName)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Deletes the specified pipeline.
		 * Delete /pipelines/{pipelineName}
		 * @param {string} pipelineName The name of the pipeline to delete.
		 * @return {void} 
		 */
		DeletePipeline(pipelineName: string, callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + '/pipelines/' + (pipelineName == null ? '' : encodeURIComponent(pipelineName)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Retrieves information about a pipeline.
		 * Get /pipelines/{pipelineName}
		 * @param {string} pipelineName The name of the pipeline whose information is retrieved.
		 * @return {DescribePipelineResponse} Success
		 */
		DescribePipeline(pipelineName: string, callback: (data : DescribePipelineResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/pipelines/' + (pipelineName == null ? '' : encodeURIComponent(pipelineName)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Updates the settings of a pipeline. You must specify both a <code>channel</code> and a <code>datastore</code> activity and, optionally, as many as 23 additional activities in the <code>pipelineActivities</code> array.
		 * Put /pipelines/{pipelineName}
		 * @param {string} pipelineName The name of the pipeline to update.
		 * @return {void} Success
		 */
		UpdatePipeline(pipelineName: string, callback: (data : void) => any, requestBody: UpdatePipelineBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.put(this.baseUri + '/pipelines/' + (pipelineName == null ? '' : encodeURIComponent(pipelineName)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Retrieves the current settings of the AWS IoT Analytics logging options.
		 * Get /logging
		 * @return {DescribeLoggingOptionsResponse} Success
		 */
		DescribeLoggingOptions(callback: (data : DescribeLoggingOptionsResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/logging', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * <p>Sets or updates the AWS IoT Analytics logging options.</p> <p>Note that if you update the value of any <code>loggingOptions</code> field, it takes up to one minute for the change to take effect. Also, if you change the policy attached to the role you specified in the roleArn field (for example, to correct an invalid policy) it takes up to 5 minutes for that change to take effect. </p>
		 * Put /logging
		 * @return {void} Success
		 */
		PutLoggingOptions(callback: (data : void) => any, requestBody: PutLoggingOptionsBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.put(this.baseUri + '/logging', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Lists information about data set contents that have been created.
		 * Get /datasets/{datasetName}/contents
		 * @param {string} datasetName The name of the data set whose contents information you want to list.
		 * @param {string} nextToken The token for the next set of results.
		 * @param {number} maxResults The maximum number of results to return in this request.
		 * @param {Date} scheduledOnOrAfter A filter to limit results to those data set contents whose creation is scheduled on or after the given time. See the field <code>triggers.schedule</code> in the CreateDataset request. (timestamp)
		 * @param {Date} scheduledBefore A filter to limit results to those data set contents whose creation is scheduled before the given time. See the field <code>triggers.schedule</code> in the CreateDataset request. (timestamp)
		 * @return {ListDatasetContentsResponse} Success
		 */
		ListDatasetContents(datasetName: string, nextToken: string, maxResults: number, scheduledOnOrAfter: Date, scheduledBefore: Date, callback: (data : ListDatasetContentsResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/datasets/' + (datasetName == null ? '' : encodeURIComponent(datasetName)) + '/contents&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&scheduledOnOrAfter=' + scheduledOnOrAfter.toISOString() + '&scheduledBefore=' + scheduledBefore.toISOString(), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Lists the tags (metadata) which you have assigned to the resource.
		 * Get /tags#resourceArn
		 * @param {string} resourceArn The ARN of the resource whose tags you want to list.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string, callback: (data : ListTagsForResourceResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/tags#resourceArn?resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Adds to or modifies the tags of the given resource. Tags are metadata which can be used to manage a resource.
		 * Post /tags#resourceArn
		 * @param {string} resourceArn The ARN of the resource whose tags you want to modify.
		 * @return {void} 
		 */
		TagResource(resourceArn: string, callback: (data : void) => any, requestBody: TagResourceBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/tags#resourceArn?resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Simulates the results of running a pipeline activity on a message payload.
		 * Post /pipelineactivities/run
		 * @return {RunPipelineActivityResponse} Success
		 */
		RunPipelineActivity(callback: (data : RunPipelineActivityResponse) => any, requestBody: RunPipelineActivityBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/pipelineactivities/run', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Retrieves a sample of messages from the specified channel ingested during the specified timeframe. Up to 10 messages can be retrieved.
		 * Get /channels/{channelName}/sample
		 * @param {string} channelName The name of the channel whose message samples are retrieved.
		 * @param {number} maxMessages The number of sample messages to be retrieved. The limit is 10, the default is also 10.
		 * @param {Date} startTime The start of the time window from which sample messages are retrieved.
		 * @param {Date} endTime The end of the time window from which sample messages are retrieved.
		 * @return {SampleChannelDataResponse} Success
		 */
		SampleChannelData(channelName: string, maxMessages: number, startTime: Date, endTime: Date, callback: (data : SampleChannelDataResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/channels/' + (channelName == null ? '' : encodeURIComponent(channelName)) + '/sample&maxMessages=' + maxMessages + '&startTime=' + startTime.toISOString() + '&endTime=' + endTime.toISOString(), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Starts the reprocessing of raw message data through the pipeline.
		 * Post /pipelines/{pipelineName}/reprocessing
		 * @param {string} pipelineName The name of the pipeline on which to start reprocessing.
		 * @return {StartPipelineReprocessingResponse} Success
		 */
		StartPipelineReprocessing(pipelineName: string, callback: (data : StartPipelineReprocessingResponse) => any, requestBody: StartPipelineReprocessingBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/pipelines/' + (pipelineName == null ? '' : encodeURIComponent(pipelineName)) + '/reprocessing', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Removes the given tags (metadata) from the resource.
		 * Delete /tags#resourceArn&tagKeys
		 * @param {string} resourceArn The ARN of the resource whose tags you want to remove.
		 * @param {Array<TagKey>} tagKeys The keys of those tags which you want to remove.
		 * @return {void} 
		 */
		UntagResource(resourceArn: string, tagKeys: Array<TagKey>, callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + '/tags#resourceArn&tagKeys?resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '&' + tagKeys.map(z => `tagKeys=${z}`).join('&'), callback, this.error, this.statusCode, headersHandler);
		}
	}

	export interface BatchPutMessageBody {

		/**
		 * The name of the channel where the messages are sent.
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9_]+$
		 */
		channelName: string;

		/**<p>The list of messages to be sent. Each message has format: '{ "messageId": "string", "payload": "string"}'.</p> <p>Note that the field names of message payloads (data) that you send to AWS IoT Analytics:</p> <ul> <li> <p>Must contain only alphanumeric characters and undescores (_); no other special characters are allowed.</p> </li> <li> <p>Must begin with an alphabetic character or single underscore (_).</p> </li> <li> <p>Cannot contain hyphens (-).</p> </li> <li> <p>In regular expression terms: "^[A-Za-z_]([A-Za-z0-9]*|[A-Za-z0-9][A-Za-z0-9_]*)$". </p> </li> <li> <p>Cannot be greater than 255 characters.</p> </li> <li> <p>Are case-insensitive. (Fields named "foo" and "FOO" in the same payload are considered duplicates.)</p> </li> </ul> <p>For example, {"temp_01": 29} or {"_temp_01": 29} are valid, but {"temp-01": 29}, {"01_temp": 29} or {"__temp_01": 29} are invalid in message payloads. </p> */
		messages: Array<Message>;
	}

	export interface CreateChannelBody {

		/**
		 * The name of the channel.
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9_]+$
		 */
		channelName: string;

		/**Where channel data is stored. You may choose one of "serviceManagedS3" or "customerManagedS3" storage. If not specified, the default is "serviceManagedS3". This cannot be changed after creation of the channel. */
		channelStorage?: string;

		/**How long, in days, message data is kept. */
		retentionPeriod?: string;

		/**
		 * Metadata which can be used to manage the channel.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		tags?: Array<Tag>;
	}

	export interface CreateDatasetBody {

		/**
		 * The name of the data set.
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9_]+$
		 */
		datasetName: string;

		/**
		 * A list of actions that create the data set contents.
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		actions: Array<DatasetAction>;

		/**
		 * A list of triggers. A trigger causes data set contents to be populated at a specified time interval or when another data set's contents are created. The list of triggers can be empty or contain up to five <b>DataSetTrigger</b> objects.
		 * Minimum items: 0
		 * Maximum items: 5
		 */
		triggers?: Array<DatasetTrigger>;

		/**
		 * When data set contents are created they are delivered to destinations specified here.
		 * Minimum items: 0
		 * Maximum items: 20
		 */
		contentDeliveryRules?: Array<DatasetContentDeliveryRule>;

		/**How long, in days, message data is kept. */
		retentionPeriod?: string;

		/**Information about the versioning of data set contents. */
		versioningConfiguration?: string;

		/**
		 * Metadata which can be used to manage the data set.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		tags?: Array<Tag>;
	}

	export interface CreateDatastoreBody {

		/**
		 * The name of the data store.
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9_]+$
		 */
		datastoreName: string;

		/**Where data store data is stored. You may choose one of "serviceManagedS3" or "customerManagedS3" storage. If not specified, the default is "serviceManagedS3". This cannot be changed after the data store is created. */
		datastoreStorage?: string;

		/**How long, in days, message data is kept. */
		retentionPeriod?: string;

		/**
		 * Metadata which can be used to manage the data store.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		tags?: Array<Tag>;
	}

	export interface CreatePipelineBody {

		/**
		 * The name of the pipeline.
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9_]+$
		 */
		pipelineName: string;

		/**
		 * <p>A list of "PipelineActivity" objects. Activities perform transformations on your messages, such as removing, renaming or adding message attributes; filtering messages based on attribute values; invoking your Lambda functions on messages for advanced processing; or performing mathematical transformations to normalize device data.</p> <p>The list can be 2-25 <b>PipelineActivity</b> objects and must contain both a <code>channel</code> and a <code>datastore</code> activity. Each entry in the list must contain only one activity, for example:</p> <p> <code>pipelineActivities = [ { "channel": { ... } }, { "lambda": { ... } }, ... ]</code> </p>
		 * Minimum items: 1
		 * Maximum items: 25
		 */
		pipelineActivities: Array<PipelineActivity>;

		/**
		 * Metadata which can be used to manage the pipeline.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		tags?: Array<Tag>;
	}

	export interface UpdateChannelBody {

		/**Where channel data is stored. You may choose one of "serviceManagedS3" or "customerManagedS3" storage. If not specified, the default is "serviceManagedS3". This cannot be changed after creation of the channel. */
		channelStorage?: string;

		/**How long, in days, message data is kept. */
		retentionPeriod?: string;
	}

	export interface UpdateDatasetBody {

		/**
		 * A list of "DatasetAction" objects.
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		actions: Array<DatasetAction>;

		/**
		 * A list of "DatasetTrigger" objects. The list can be empty or can contain up to five <b>DataSetTrigger</b> objects.
		 * Minimum items: 0
		 * Maximum items: 5
		 */
		triggers?: Array<DatasetTrigger>;

		/**
		 * When data set contents are created they are delivered to destinations specified here.
		 * Minimum items: 0
		 * Maximum items: 20
		 */
		contentDeliveryRules?: Array<DatasetContentDeliveryRule>;

		/**How long, in days, message data is kept. */
		retentionPeriod?: string;

		/**Information about the versioning of data set contents. */
		versioningConfiguration?: string;
	}

	export interface UpdateDatastoreBody {

		/**How long, in days, message data is kept. */
		retentionPeriod?: string;

		/**Where data store data is stored. You may choose one of "serviceManagedS3" or "customerManagedS3" storage. If not specified, the default is "serviceManagedS3". This cannot be changed after the data store is created. */
		datastoreStorage?: string;
	}

	export interface UpdatePipelineBody {

		/**
		 * <p>A list of "PipelineActivity" objects. Activities perform transformations on your messages, such as removing, renaming or adding message attributes; filtering messages based on attribute values; invoking your Lambda functions on messages for advanced processing; or performing mathematical transformations to normalize device data.</p> <p>The list can be 2-25 <b>PipelineActivity</b> objects and must contain both a <code>channel</code> and a <code>datastore</code> activity. Each entry in the list must contain only one activity, for example:</p> <p> <code>pipelineActivities = [ { "channel": { ... } }, { "lambda": { ... } }, ... ]</code> </p>
		 * Minimum items: 1
		 * Maximum items: 25
		 */
		pipelineActivities: Array<PipelineActivity>;
	}

	export interface PutLoggingOptionsBody {

		/**Information about logging options. */
		loggingOptions: string;
	}

	export interface TagResourceBody {

		/**
		 * The new or modified tags for the resource.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		tags: Array<Tag>;
	}

	export interface RunPipelineActivityBody {

		/**An activity that performs a transformation on a message. */
		pipelineActivity: string;

		/**
		 * The sample message payloads on which the pipeline activity is run.
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		payloads: Array<MessagePayload>;
	}

	export interface StartPipelineReprocessingBody {

		/**The start time (inclusive) of raw message data that is reprocessed. */
		startTime?: Date;

		/**The end time (exclusive) of raw message data that is reprocessed. */
		endTime?: Date;
	}

}

