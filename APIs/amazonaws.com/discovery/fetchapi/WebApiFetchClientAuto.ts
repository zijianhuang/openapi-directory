export namespace My_Demo_Client {
	export interface AssociateConfigurationItemsToApplicationRequest {
		applicationConfigurationId: string;
		configurationIds: Array<ConfigurationId>;
	}

	export interface BatchDeleteImportDataResponse {
		errors?: Array<BatchDeleteImportDataError>;
	}

	export interface BatchDeleteImportDataRequest {
		importTaskIds: Array<ImportTaskIdentifier>;
	}

	export interface CreateApplicationResponse {
		configurationId?: string;
	}

	export interface CreateApplicationRequest {
		name: string;
		description?: string;
	}

	export interface CreateTagsRequest {
		configurationIds: Array<ConfigurationId>;
		tags: Array<Tag>;
	}

	export interface DeleteApplicationsRequest {
		configurationIds: Array<ApplicationId>;
	}

	export interface DeleteTagsRequest {
		configurationIds: Array<ConfigurationId>;
		tags?: Array<Tag>;
	}

	export interface DescribeAgentsResponse {
		agentsInfo?: Array<AgentInfo>;
		nextToken?: string;
	}

	export interface DescribeAgentsRequest {
		agentIds?: Array<AgentId>;
		filters?: Array<Filter>;
		maxResults?: number;
		nextToken?: string;
	}

	export interface DescribeConfigurationsResponse {
		configurations?: Array<DescribeConfigurationsAttribute>;
	}

	export interface DescribeConfigurationsRequest {
		configurationIds: Array<ConfigurationId>;
	}

	export interface DescribeContinuousExportsResponse {
		descriptions?: Array<ContinuousExportDescription>;
		nextToken?: string;
	}

	export interface DescribeContinuousExportsRequest {
		exportIds?: Array<ConfigurationsExportId>;
		maxResults?: number;
		nextToken?: string;
	}

	export interface DescribeExportConfigurationsResponse {
		exportsInfo?: Array<ExportInfo>;
		nextToken?: string;
	}

	export interface DescribeExportConfigurationsRequest {
		exportIds?: Array<ConfigurationsExportId>;
		maxResults?: number;
		nextToken?: string;
	}

	export interface DescribeExportTasksResponse {
		exportsInfo?: Array<ExportInfo>;
		nextToken?: string;
	}

	export interface DescribeExportTasksRequest {
		exportIds?: Array<ConfigurationsExportId>;
		filters?: Array<ExportFilter>;
		maxResults?: number;
		nextToken?: string;
	}

	export interface DescribeImportTasksResponse {
		nextToken?: string;
		tasks?: Array<ImportTask>;
	}

	export interface DescribeImportTasksRequest {
		filters?: Array<ImportTaskFilter>;
		maxResults?: number;
		nextToken?: string;
	}

	export interface DescribeTagsResponse {
		tags?: Array<ConfigurationTag>;
		nextToken?: string;
	}

	export interface DescribeTagsRequest {
		filters?: Array<TagFilter>;
		maxResults?: number;
		nextToken?: string;
	}

	export interface DisassociateConfigurationItemsFromApplicationRequest {
		applicationConfigurationId: string;
		configurationIds: Array<ConfigurationId>;
	}

	export interface ExportConfigurationsResponse {
		exportId?: string;
	}

	export interface GetDiscoverySummaryResponse {
		servers?: number;
		applications?: number;
		serversMappedToApplications?: number;
		serversMappedtoTags?: number;

		/**Inventory data for installed discovery agents. */
		agentSummary?: CustomerAgentInfo;

		/**Inventory data for installed discovery connectors. */
		connectorSummary?: CustomerConnectorInfo;
	}

	export interface ListConfigurationsResponse {
		configurations?: Array<Configuration>;
		nextToken?: string;
	}

	export interface ListConfigurationsRequest {
		configurationType: ListConfigurationsRequestConfigurationType;
		filters?: Array<Filter>;
		maxResults?: number;
		nextToken?: string;
		orderBy?: Array<OrderByElement>;
	}

	export enum ListConfigurationsRequestConfigurationType { SERVER = 0, PROCESS = 1, CONNECTION = 2, APPLICATION = 3 }

	export interface ListServerNeighborsResponse {
		neighbors: Array<NeighborConnectionDetail>;
		nextToken?: string;
		knownDependencyCount?: number;
	}

	export interface ListServerNeighborsRequest {
		configurationId: string;
		portInformationNeeded?: boolean;
		neighborConfigurationIds?: Array<ConfigurationId>;
		maxResults?: number;
		nextToken?: string;
	}

	export interface StartContinuousExportResponse {
		exportId?: string;
		s3Bucket?: string;
		startTime?: Date;
		dataSource?: StartContinuousExportResponseDataSource;
		schemaStorageConfig?: SchemaStorageConfig;
	}

	export enum StartContinuousExportResponseDataSource { AGENT = 0 }

	export interface StartDataCollectionByAgentIdsResponse {
		agentsConfigurationStatus?: Array<AgentConfigurationStatus>;
	}

	export interface StartDataCollectionByAgentIdsRequest {
		agentIds: Array<AgentId>;
	}

	export interface StartExportTaskResponse {
		exportId?: string;
	}

	export interface StartExportTaskRequest {
		exportDataFormat?: Array<ExportDataFormat>;
		filters?: Array<ExportFilter>;
		startTime?: Date;
		endTime?: Date;
	}

	export interface StartImportTaskResponse {

		/**An array of information related to the import task request that includes status information, times, IDs, the Amazon S3 Object URL for the import file, and more. */
		task?: ImportTask;
	}

	export interface StartImportTaskRequest {
		clientRequestToken?: string;
		name: string;
		importUrl: string;
	}

	export interface StopContinuousExportResponse {
		startTime?: Date;
		stopTime?: Date;
	}

	export interface StopContinuousExportRequest {
		exportId: string;
	}

	export interface StopDataCollectionByAgentIdsResponse {
		agentsConfigurationStatus?: Array<AgentConfigurationStatus>;
	}

	export interface StopDataCollectionByAgentIdsRequest {
		agentIds: Array<AgentId>;
	}

	export interface UpdateApplicationRequest {
		configurationId: string;
		name?: string;
		description?: string;
	}


	/**Information about agents or connectors that were instructed to start collecting data. Information includes the agent/connector ID, a description of the operation, and whether the agent/connector configuration was updated. */
	export interface AgentConfigurationStatus {
		agentId?: string;
		operationSucceeded?: boolean;
		description?: string;
	}

	export enum AgentStatus { HEALTHY = 0, UNHEALTHY = 1, RUNNING = 2, UNKNOWN = 3, BLACKLISTED = 4, SHUTDOWN = 5 }


	/**Information about agents or connectors associated with the user’s AWS account. Information includes agent or connector IDs, IP addresses, media access control (MAC) addresses, agent or connector health, hostname where the agent or connector resides, and agent version for each agent. */
	export interface AgentInfo {
		agentId?: string;
		hostName?: string;
		agentNetworkInfoList?: Array<AgentNetworkInfo>;
		connectorId?: string;
		version?: string;
		health?: AgentInfoHealth;
		lastHealthPingTime?: string;
		collectionStatus?: string;
		agentType?: string;
		registeredTime?: string;
	}

	export enum AgentInfoHealth { HEALTHY = 0, UNHEALTHY = 1, RUNNING = 2, UNKNOWN = 3, BLACKLISTED = 4, SHUTDOWN = 5 }


	/**Network details about the host where the agent/connector resides. */
	export interface AgentNetworkInfo {
		ipAddress?: string;
		macAddress?: string;
	}

	export enum BatchDeleteImportDataErrorCode { NOT_FOUND = 0, INTERNAL_SERVER_ERROR = 1, OVER_LIMIT = 2 }


	/**Error messages returned for each import task that you deleted as a response for this command. */
	export interface BatchDeleteImportDataError {
		importTaskId?: string;
		errorCode?: BatchDeleteImportDataErrorErrorCode;
		errorDescription?: string;
	}

	export enum BatchDeleteImportDataErrorErrorCode { NOT_FOUND = 0, INTERNAL_SERVER_ERROR = 1, OVER_LIMIT = 2 }

	export enum ConfigurationItemType { SERVER = 0, PROCESS = 1, CONNECTION = 2, APPLICATION = 3 }


	/**Tags for a configuration item. Tags are metadata that help you categorize IT assets. */
	export interface ConfigurationTag {
		configurationType?: ConfigurationTagConfigurationType;
		configurationId?: string;
		key?: string;
		value?: string;
		timeOfCreation?: Date;
	}

	export enum ConfigurationTagConfigurationType { SERVER = 0, PROCESS = 1, CONNECTION = 2, APPLICATION = 3 }

	export enum ContinuousExportStatus { START_IN_PROGRESS = 0, START_FAILED = 1, ACTIVE = 2, ERROR = 3, STOP_IN_PROGRESS = 4, STOP_FAILED = 5, INACTIVE = 6 }

	export enum DataSource { AGENT = 0 }


	/**A list of continuous export descriptions. */
	export interface ContinuousExportDescription {
		exportId?: string;
		status?: ContinuousExportDescriptionStatus;
		statusDetail?: string;
		s3Bucket?: string;
		startTime?: Date;
		stopTime?: Date;
		dataSource?: ContinuousExportDescriptionDataSource;
		schemaStorageConfig?: SchemaStorageConfig;
	}

	export enum ContinuousExportDescriptionStatus { START_IN_PROGRESS = 0, START_FAILED = 1, ACTIVE = 2, ERROR = 3, STOP_IN_PROGRESS = 4, STOP_FAILED = 5, INACTIVE = 6 }

	export enum ContinuousExportDescriptionDataSource { AGENT = 0 }


	/**Inventory data for installed discovery agents. */
	export interface CustomerAgentInfo {
		activeAgents: number;
		healthyAgents: number;
		blackListedAgents: number;
		shutdownAgents: number;
		unhealthyAgents: number;
		totalAgents: number;
		unknownAgents: number;
	}


	/**Inventory data for installed discovery connectors. */
	export interface CustomerConnectorInfo {
		activeConnectors: number;
		healthyConnectors: number;
		blackListedConnectors: number;
		shutdownConnectors: number;
		unhealthyConnectors: number;
		totalConnectors: number;
		unknownConnectors: number;
	}


	/**<p>A name-values pair of elements you can use to filter the results when querying your import tasks. Currently, wildcards are not supported for filters.</p> <note> <p>When filtering by import status, all other filter values are ignored.</p> </note> */
	export interface ImportTaskFilter {
		name?: ImportTaskFilterName;
		values?: Array<ImportTaskFilterValue>;
	}

	export enum ImportTaskFilterName { IMPORT_TASK_ID = 0, STATUS = 1, NAME = 2 }

	export enum ExportDataFormat { CSV = 0, GRAPHML = 1 }


	/**Used to select which agent's data is to be exported. A single agent ID may be selected for export using the <a href="http://docs.aws.amazon.com/application-discovery/latest/APIReference/API_StartExportTask.html">StartExportTask</a> action. */
	export interface ExportFilter {
		name: string;
		values: Array<FilterValue>;
		condition: string;
	}

	export enum ExportStatus { FAILED = 0, SUCCEEDED = 1, IN_PROGRESS = 2 }


	/**Information regarding the export status of discovered data. The value is an array of objects. */
	export interface ExportInfo {
		exportId: string;
		exportStatus: ExportInfoExportStatus;
		statusMessage: string;
		configurationsDownloadUrl?: string;
		exportRequestTime: Date;
		isTruncated?: boolean;
		requestedStartTime?: Date;
		requestedEndTime?: Date;
	}

	export enum ExportInfoExportStatus { FAILED = 0, SUCCEEDED = 1, IN_PROGRESS = 2 }


	/**<p>A filter that can use conditional operators.</p> <p>For more information about filters, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-api-queries.html">Querying Discovered Configuration Items</a> in the <i>AWS Application Discovery Service User Guide</i>. </p> */
	export interface Filter {
		name: string;
		values: Array<FilterValue>;
		condition: string;
	}

	export enum ImportStatus { IMPORT_IN_PROGRESS = 0, IMPORT_COMPLETE = 1, IMPORT_COMPLETE_WITH_ERRORS = 2, IMPORT_FAILED = 3, IMPORT_FAILED_SERVER_LIMIT_EXCEEDED = 4, IMPORT_FAILED_RECORD_LIMIT_EXCEEDED = 5, DELETE_IN_PROGRESS = 6, DELETE_COMPLETE = 7, DELETE_FAILED = 8, DELETE_FAILED_LIMIT_EXCEEDED = 9, INTERNAL_ERROR = 10 }


	/**An array of information related to the import task request that includes status information, times, IDs, the Amazon S3 Object URL for the import file, and more. */
	export interface ImportTask {
		importTaskId?: string;
		clientRequestToken?: string;
		name?: string;
		importUrl?: string;
		status?: ImportTaskStatus;
		importRequestTime?: Date;
		importCompletionTime?: Date;
		importDeletedTime?: Date;
		serverImportSuccess?: number;
		serverImportFailure?: number;
		applicationImportSuccess?: number;
		applicationImportFailure?: number;
		errorsAndFailedEntriesZip?: string;
	}

	export enum ImportTaskStatus { IMPORT_IN_PROGRESS = 0, IMPORT_COMPLETE = 1, IMPORT_COMPLETE_WITH_ERRORS = 2, IMPORT_FAILED = 3, IMPORT_FAILED_SERVER_LIMIT_EXCEEDED = 4, IMPORT_FAILED_RECORD_LIMIT_EXCEEDED = 5, DELETE_IN_PROGRESS = 6, DELETE_COMPLETE = 7, DELETE_FAILED = 8, DELETE_FAILED_LIMIT_EXCEEDED = 9, INTERNAL_ERROR = 10 }

	export enum ImportTaskFilterName { IMPORT_TASK_ID = 0, STATUS = 1, NAME = 2 }


	/**Details about neighboring servers. */
	export interface NeighborConnectionDetail {
		sourceServerId: string;
		destinationServerId: string;
		destinationPort?: number;
		transportProtocol?: string;
		connectionsCount: number;
	}

	export enum OrderString { ASC = 0, DESC = 1 }


	/**A field and direction for ordered output. */
	export interface OrderByElement {
		fieldName: string;
		sortOrder?: OrderByElementSortOrder;
	}

	export enum OrderByElementSortOrder { ASC = 0, DESC = 1 }


	/**Metadata that help you categorize IT assets. */
	export interface Tag {
		key: string;
		value: string;
	}


	/**The tag filter. Valid names are: <code>tagKey</code>, <code>tagValue</code>, <code>configurationId</code>. */
	export interface TagFilter {
		name: string;
		values: Array<FilterValue>;
	}

	export class DemoClient {
		constructor(private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/') {
		}

		/**
		 * Associates one or more configuration items with an application.
		 * Post /#X-Amz-Target=AWSPoseidonService_V2015_11_01.AssociateConfigurationItemsToApplication
		 * @return {AssociateConfigurationItemsToApplicationResponse} Success
		 */
		AssociateConfigurationItemsToApplication(requestBody: AssociateConfigurationItemsToApplicationRequest, headersHandler?: () => {[header: string]: string}): Promise<AssociateConfigurationItemsToApplicationResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.AssociateConfigurationItemsToApplication', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Deletes one or more import tasks, each identified by their import ID. Each import task has a number of records that can identify servers or applications. </p> <p>AWS Application Discovery Service has built-in matching logic that will identify when discovered servers match existing entries that you've previously discovered, the information for the already-existing discovered server is updated. When you delete an import task that contains records that were used to match, the information in those matched records that comes from the deleted records will also be deleted.</p>
		 * Post /#X-Amz-Target=AWSPoseidonService_V2015_11_01.BatchDeleteImportData
		 * @return {BatchDeleteImportDataResponse} Success
		 */
		BatchDeleteImportData(requestBody: BatchDeleteImportDataRequest, headersHandler?: () => {[header: string]: string}): Promise<BatchDeleteImportDataResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.BatchDeleteImportData', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Creates an application with the given name and description.
		 * Post /#X-Amz-Target=AWSPoseidonService_V2015_11_01.CreateApplication
		 * @return {CreateApplicationResponse} Success
		 */
		CreateApplication(requestBody: CreateApplicationRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateApplicationResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.CreateApplication', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Creates one or more tags for configuration items. Tags are metadata that help you categorize IT assets. This API accepts a list of multiple configuration items.
		 * Post /#X-Amz-Target=AWSPoseidonService_V2015_11_01.CreateTags
		 * @return {CreateTagsResponse} Success
		 */
		CreateTags(requestBody: CreateTagsRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateTagsResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.CreateTags', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Deletes a list of applications and their associations with configuration items.
		 * Post /#X-Amz-Target=AWSPoseidonService_V2015_11_01.DeleteApplications
		 * @return {DeleteApplicationsResponse} Success
		 */
		DeleteApplications(requestBody: DeleteApplicationsRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteApplicationsResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.DeleteApplications', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Deletes the association between configuration items and one or more tags. This API accepts a list of multiple configuration items.
		 * Post /#X-Amz-Target=AWSPoseidonService_V2015_11_01.DeleteTags
		 * @return {DeleteTagsResponse} Success
		 */
		DeleteTags(requestBody: DeleteTagsRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteTagsResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.DeleteTags', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Lists agents or connectors as specified by ID or other filters. All agents/connectors associated with your user account can be listed if you call <code>DescribeAgents</code> as is without passing any parameters.
		 * Post /#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeAgents
		 * @return {DescribeAgentsResponse} Success
		 */
		DescribeAgents(requestBody: DescribeAgentsRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeAgentsResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeAgents', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Retrieves attributes for a list of configuration item IDs.</p> <note> <p>All of the supplied IDs must be for the same asset type from one of the following:</p> <ul> <li> <p>server</p> </li> <li> <p>application</p> </li> <li> <p>process</p> </li> <li> <p>connection</p> </li> </ul> <p>Output fields are specific to the asset type specified. For example, the output for a <i>server</i> configuration item includes a list of attributes about the server, such as host name, operating system, number of network cards, etc.</p> <p>For a complete list of outputs for each asset type, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-api-queries.html#DescribeConfigurations">Using the DescribeConfigurations Action</a> in the <i>AWS Application Discovery Service User Guide</i>.</p> </note>
		 * Post /#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeConfigurations
		 * @return {DescribeConfigurationsResponse} Success
		 */
		DescribeConfigurations(requestBody: DescribeConfigurationsRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeConfigurationsResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeConfigurations', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Lists exports as specified by ID. All continuous exports associated with your user account can be listed if you call <code>DescribeContinuousExports</code> as is without passing any parameters.
		 * Post /#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeContinuousExports
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeContinuousExportsResponse} Success
		 */
		DescribeContinuousExports(maxResults: string, nextToken: string, requestBody: DescribeContinuousExportsRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeContinuousExportsResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeContinuousExports?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <code>DescribeExportConfigurations</code> is deprecated. Use <a href="https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DescribeExportTasks.html">DescribeImportTasks</a>, instead.
		 * Post /#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeExportConfigurations
		 * @return {DescribeExportConfigurationsResponse} Success
		 */
		DescribeExportConfigurations(requestBody: DescribeExportConfigurationsRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeExportConfigurationsResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeExportConfigurations', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Retrieve status of one or more export tasks. You can retrieve the status of up to 100 export tasks.
		 * Post /#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeExportTasks
		 * @return {DescribeExportTasksResponse} Success
		 */
		DescribeExportTasks(requestBody: DescribeExportTasksRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeExportTasksResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeExportTasks', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns an array of import tasks for your account, including status information, times, IDs, the Amazon S3 Object URL for the import file, and more.
		 * Post /#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeImportTasks
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeImportTasksResponse} Success
		 */
		DescribeImportTasks(maxResults: string, nextToken: string, requestBody: DescribeImportTasksRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeImportTasksResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeImportTasks?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Retrieves a list of configuration items that have tags as specified by the key-value pairs, name and value, passed to the optional parameter <code>filters</code>.</p> <p>There are three valid tag filter names:</p> <ul> <li> <p>tagKey</p> </li> <li> <p>tagValue</p> </li> <li> <p>configurationId</p> </li> </ul> <p>Also, all configuration items associated with your user account that have tags can be listed if you call <code>DescribeTags</code> as is without passing any parameters.</p>
		 * Post /#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeTags
		 * @return {DescribeTagsResponse} Success
		 */
		DescribeTags(requestBody: DescribeTagsRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeTagsResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeTags', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Disassociates one or more configuration items from an application.
		 * Post /#X-Amz-Target=AWSPoseidonService_V2015_11_01.DisassociateConfigurationItemsFromApplication
		 * @return {DisassociateConfigurationItemsFromApplicationResponse} Success
		 */
		DisassociateConfigurationItemsFromApplication(requestBody: DisassociateConfigurationItemsFromApplicationRequest, headersHandler?: () => {[header: string]: string}): Promise<DisassociateConfigurationItemsFromApplicationResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.DisassociateConfigurationItemsFromApplication', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Deprecated. Use <code>StartExportTask</code> instead.</p> <p>Exports all discovered configuration data to an Amazon S3 bucket or an application that enables you to view and evaluate the data. Data includes tags and tag associations, processes, connections, servers, and system performance. This API returns an export ID that you can query using the <i>DescribeExportConfigurations</i> API. The system imposes a limit of two configuration exports in six hours.</p>
		 * Post /#X-Amz-Target=AWSPoseidonService_V2015_11_01.ExportConfigurations
		 * @return {ExportConfigurationsResponse} Success
		 */
		ExportConfigurations(headersHandler?: () => {[header: string]: string}): Promise<ExportConfigurationsResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.ExportConfigurations', { method: 'post', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * <p>Retrieves a short summary of discovered assets.</p> <p>This API operation takes no request parameters and is called as is at the command prompt as shown in the example.</p>
		 * Post /#X-Amz-Target=AWSPoseidonService_V2015_11_01.GetDiscoverySummary
		 * @return {GetDiscoverySummaryResponse} Success
		 */
		GetDiscoverySummary(requestBody: GetDiscoverySummaryRequest, headersHandler?: () => {[header: string]: string}): Promise<GetDiscoverySummaryResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.GetDiscoverySummary', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Retrieves a list of configuration items as specified by the value passed to the required parameter <code>configurationType</code>. Optional filtering may be applied to refine search results.
		 * Post /#X-Amz-Target=AWSPoseidonService_V2015_11_01.ListConfigurations
		 * @return {ListConfigurationsResponse} Success
		 */
		ListConfigurations(requestBody: ListConfigurationsRequest, headersHandler?: () => {[header: string]: string}): Promise<ListConfigurationsResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.ListConfigurations', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Retrieves a list of servers that are one network hop away from a specified server.
		 * Post /#X-Amz-Target=AWSPoseidonService_V2015_11_01.ListServerNeighbors
		 * @return {ListServerNeighborsResponse} Success
		 */
		ListServerNeighbors(requestBody: ListServerNeighborsRequest, headersHandler?: () => {[header: string]: string}): Promise<ListServerNeighborsResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.ListServerNeighbors', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Start the continuous flow of agent's discovered data into Amazon Athena.
		 * Post /#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartContinuousExport
		 * @return {StartContinuousExportResponse} Success
		 */
		StartContinuousExport(requestBody: StartContinuousExportRequest, headersHandler?: () => {[header: string]: string}): Promise<StartContinuousExportResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartContinuousExport', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Instructs the specified agents or connectors to start collecting data.
		 * Post /#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartDataCollectionByAgentIds
		 * @return {StartDataCollectionByAgentIdsResponse} Success
		 */
		StartDataCollectionByAgentIds(requestBody: StartDataCollectionByAgentIdsRequest, headersHandler?: () => {[header: string]: string}): Promise<StartDataCollectionByAgentIdsResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartDataCollectionByAgentIds', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p> Begins the export of discovered data to an S3 bucket.</p> <p> If you specify <code>agentIds</code> in a filter, the task exports up to 72 hours of detailed data collected by the identified Application Discovery Agent, including network, process, and performance details. A time range for exported agent data may be set by using <code>startTime</code> and <code>endTime</code>. Export of detailed agent data is limited to five concurrently running exports. </p> <p> If you do not include an <code>agentIds</code> filter, summary data is exported that includes both AWS Agentless Discovery Connector data and summary data from AWS Discovery Agents. Export of summary data is limited to two exports per day. </p>
		 * Post /#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartExportTask
		 * @return {StartExportTaskResponse} Success
		 */
		StartExportTask(requestBody: StartExportTaskRequest, headersHandler?: () => {[header: string]: string}): Promise<StartExportTaskResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartExportTask', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Starts an import task, which allows you to import details of your on-premises environment directly into AWS Migration Hub without having to use the Application Discovery Service (ADS) tools such as the Discovery Connector or Discovery Agent. This gives you the option to perform migration assessment and planning directly from your imported data, including the ability to group your devices as applications and track their migration status.</p> <p>To start an import request, do this:</p> <ol> <li> <p>Download the specially formatted comma separated value (CSV) import template, which you can find here: <a href="https://s3-us-west-2.amazonaws.com/templates-7cffcf56-bd96-4b1c-b45b-a5b42f282e46/import_template.csv">https://s3-us-west-2.amazonaws.com/templates-7cffcf56-bd96-4b1c-b45b-a5b42f282e46/import_template.csv</a>.</p> </li> <li> <p>Fill out the template with your server and application data.</p> </li> <li> <p>Upload your import file to an Amazon S3 bucket, and make a note of it's Object URL. Your import file must be in the CSV format.</p> </li> <li> <p>Use the console or the <code>StartImportTask</code> command with the AWS CLI or one of the AWS SDKs to import the records from your file.</p> </li> </ol> <p>For more information, including step-by-step procedures, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-import.html">Migration Hub Import</a> in the <i>AWS Application Discovery Service User Guide</i>.</p> <note> <p>There are limits to the number of import tasks you can create (and delete) in an AWS account. For more information, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/ads_service_limits.html">AWS Application Discovery Service Limits</a> in the <i>AWS Application Discovery Service User Guide</i>.</p> </note>
		 * Post /#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartImportTask
		 * @return {StartImportTaskResponse} Success
		 */
		StartImportTask(requestBody: StartImportTaskRequest, headersHandler?: () => {[header: string]: string}): Promise<StartImportTaskResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartImportTask', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Stop the continuous flow of agent's discovered data into Amazon Athena.
		 * Post /#X-Amz-Target=AWSPoseidonService_V2015_11_01.StopContinuousExport
		 * @return {StopContinuousExportResponse} Success
		 */
		StopContinuousExport(requestBody: StopContinuousExportRequest, headersHandler?: () => {[header: string]: string}): Promise<StopContinuousExportResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.StopContinuousExport', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Instructs the specified agents or connectors to stop collecting data.
		 * Post /#X-Amz-Target=AWSPoseidonService_V2015_11_01.StopDataCollectionByAgentIds
		 * @return {StopDataCollectionByAgentIdsResponse} Success
		 */
		StopDataCollectionByAgentIds(requestBody: StopDataCollectionByAgentIdsRequest, headersHandler?: () => {[header: string]: string}): Promise<StopDataCollectionByAgentIdsResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.StopDataCollectionByAgentIds', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Updates metadata about an application.
		 * Post /#X-Amz-Target=AWSPoseidonService_V2015_11_01.UpdateApplication
		 * @return {UpdateApplicationResponse} Success
		 */
		UpdateApplication(requestBody: UpdateApplicationRequest, headersHandler?: () => {[header: string]: string}): Promise<UpdateApplicationResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.UpdateApplication', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}
	}

}

