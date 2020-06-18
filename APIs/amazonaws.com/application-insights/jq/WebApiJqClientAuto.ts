///<reference path="HttpClient.ts" />
namespace My_Demo_Client {
	export interface CreateApplicationResponse {

		/**Describes the status of the application. */
		ApplicationInfo?: ApplicationInfo;
	}

	export interface CreateApplicationRequest {
		ResourceGroupName: string;
		OpsCenterEnabled?: boolean;
		CWEMonitorEnabled?: boolean;
		OpsItemSNSTopicArn?: string;
		Tags?: Array<Tag>;
	}

	export interface CreateComponentRequest {
		ResourceGroupName: string;
		ComponentName: string;
		ResourceList: Array<ResourceARN>;
	}

	export interface CreateLogPatternResponse {

		/**An object that defines the log patterns that belongs to a <code>LogPatternSet</code>. */
		LogPattern?: LogPattern;
		ResourceGroupName?: string;
	}

	export interface CreateLogPatternRequest {
		ResourceGroupName: string;
		PatternSetName: string;
		PatternName: string;
		Pattern: string;
		Rank: number;
	}

	export interface DeleteApplicationRequest {
		ResourceGroupName: string;
	}

	export interface DeleteComponentRequest {
		ResourceGroupName: string;
		ComponentName: string;
	}

	export interface DeleteLogPatternRequest {
		ResourceGroupName: string;
		PatternSetName: string;
		PatternName: string;
	}

	export interface DescribeApplicationResponse {

		/**Describes the status of the application. */
		ApplicationInfo?: ApplicationInfo;
	}

	export interface DescribeApplicationRequest {
		ResourceGroupName: string;
	}

	export interface DescribeComponentResponse {

		/**Describes a standalone resource or similarly grouped resources that the application is made up of. */
		ApplicationComponent?: ApplicationComponent;
		ResourceList?: Array<ResourceARN>;
	}

	export interface DescribeComponentRequest {
		ResourceGroupName: string;
		ComponentName: string;
	}

	export interface DescribeComponentConfigurationResponse {
		Monitor?: boolean;
		Tier?: DescribeComponentConfigurationResponseTier;
		ComponentConfiguration?: string;
	}

	export enum DescribeComponentConfigurationResponseTier { DEFAULT = 0, DOT_NET_CORE = 1, DOT_NET_WORKER = 2, DOT_NET_WEB = 3, SQL_SERVER = 4 }

	export interface DescribeComponentConfigurationRequest {
		ResourceGroupName: string;
		ComponentName: string;
	}

	export interface DescribeComponentConfigurationRecommendationResponse {
		ComponentConfiguration?: string;
	}

	export interface DescribeComponentConfigurationRecommendationRequest {
		ResourceGroupName: string;
		ComponentName: string;
		Tier: DescribeComponentConfigurationRecommendationRequestTier;
	}

	export enum DescribeComponentConfigurationRecommendationRequestTier { DEFAULT = 0, DOT_NET_CORE = 1, DOT_NET_WORKER = 2, DOT_NET_WEB = 3, SQL_SERVER = 4 }

	export interface DescribeLogPatternResponse {
		ResourceGroupName?: string;

		/**An object that defines the log patterns that belongs to a <code>LogPatternSet</code>. */
		LogPattern?: LogPattern;
	}

	export interface DescribeLogPatternRequest {
		ResourceGroupName: string;
		PatternSetName: string;
		PatternName: string;
	}

	export interface DescribeObservationResponse {

		/**Describes an anomaly or error with the application. */
		Observation?: Observation;
	}

	export interface DescribeObservationRequest {
		ObservationId: string;
	}

	export interface DescribeProblemResponse {

		/**Describes a problem that is detected by correlating observations. */
		Problem?: Problem;
	}

	export interface DescribeProblemRequest {
		ProblemId: string;
	}

	export interface DescribeProblemObservationsResponse {

		/**Describes observations related to the problem. */
		RelatedObservations?: RelatedObservations;
	}

	export interface DescribeProblemObservationsRequest {
		ProblemId: string;
	}

	export interface ListApplicationsResponse {
		ApplicationInfoList?: Array<ApplicationInfo>;
		NextToken?: string;
	}

	export interface ListApplicationsRequest {
		MaxResults?: number;
		NextToken?: string;
	}

	export interface ListComponentsResponse {
		ApplicationComponentList?: Array<ApplicationComponent>;
		NextToken?: string;
	}

	export interface ListComponentsRequest {
		ResourceGroupName: string;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface ListConfigurationHistoryResponse {
		EventList?: Array<ConfigurationEvent>;
		NextToken?: string;
	}

	export interface ListConfigurationHistoryRequest {
		ResourceGroupName?: string;
		StartTime?: Date;
		EndTime?: Date;
		EventStatus?: ListConfigurationHistoryRequestEventStatus;
		MaxResults?: number;
		NextToken?: string;
	}

	export enum ListConfigurationHistoryRequestEventStatus { INFO = 0, WARN = 1, ERROR = 2 }

	export interface ListLogPatternSetsResponse {
		ResourceGroupName?: string;
		LogPatternSets?: Array<LogPatternSetName>;
		NextToken?: string;
	}

	export interface ListLogPatternSetsRequest {
		ResourceGroupName: string;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface ListLogPatternsResponse {
		ResourceGroupName?: string;
		LogPatterns?: Array<LogPattern>;
		NextToken?: string;
	}

	export interface ListLogPatternsRequest {
		ResourceGroupName: string;
		PatternSetName?: string;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface ListProblemsResponse {
		ProblemList?: Array<Problem>;
		NextToken?: string;
	}

	export interface ListProblemsRequest {
		ResourceGroupName?: string;
		StartTime?: Date;
		EndTime?: Date;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface ListTagsForResourceResponse {
		Tags?: Array<Tag>;
	}

	export interface ListTagsForResourceRequest {
		ResourceARN: string;
	}

	export interface TagResourceRequest {
		ResourceARN: string;
		Tags: Array<Tag>;
	}

	export interface UntagResourceRequest {
		ResourceARN: string;
		TagKeys: Array<TagKey>;
	}

	export interface UpdateApplicationResponse {

		/**Describes the status of the application. */
		ApplicationInfo?: ApplicationInfo;
	}

	export interface UpdateApplicationRequest {
		ResourceGroupName: string;
		OpsCenterEnabled?: boolean;
		CWEMonitorEnabled?: boolean;
		OpsItemSNSTopicArn?: string;
		RemoveSNSTopic?: boolean;
	}

	export interface UpdateComponentRequest {
		ResourceGroupName: string;
		ComponentName: string;
		NewComponentName?: string;
		ResourceList?: Array<ResourceARN>;
	}

	export interface UpdateComponentConfigurationRequest {
		ResourceGroupName: string;
		ComponentName: string;
		Monitor?: boolean;
		Tier?: UpdateComponentConfigurationRequestTier;
		ComponentConfiguration?: string;
	}

	export enum UpdateComponentConfigurationRequestTier { DEFAULT = 0, DOT_NET_CORE = 1, DOT_NET_WORKER = 2, DOT_NET_WEB = 3, SQL_SERVER = 4 }

	export interface UpdateLogPatternResponse {
		ResourceGroupName?: string;

		/**An object that defines the log patterns that belongs to a <code>LogPatternSet</code>. */
		LogPattern?: LogPattern;
	}

	export interface UpdateLogPatternRequest {
		ResourceGroupName: string;
		PatternSetName: string;
		PatternName: string;
		Pattern?: string;
		Rank?: number;
	}

	export enum Tier { DEFAULT = 0, DOT_NET_CORE = 1, DOT_NET_WORKER = 2, DOT_NET_WEB = 3, SQL_SERVER = 4 }


	/**Describes a standalone resource or similarly grouped resources that the application is made up of. */
	export interface ApplicationComponent {
		ComponentName?: string;
		ResourceType?: string;
		Tier?: ApplicationComponentTier;
		Monitor?: boolean;
	}

	export enum ApplicationComponentTier { DEFAULT = 0, DOT_NET_CORE = 1, DOT_NET_WORKER = 2, DOT_NET_WEB = 3, SQL_SERVER = 4 }


	/**Describes the status of the application. */
	export interface ApplicationInfo {
		ResourceGroupName?: string;
		LifeCycle?: string;
		OpsItemSNSTopicArn?: string;
		OpsCenterEnabled?: boolean;
		CWEMonitorEnabled?: boolean;
		Remarks?: string;
	}

	export enum CloudWatchEventSource { EC2 = 0, CODE_DEPLOY = 1, HEALTH = 2 }

	export enum ConfigurationEventStatus { INFO = 0, WARN = 1, ERROR = 2 }

	export enum ConfigurationEventResourceType { CLOUDWATCH_ALARM = 0, CLOUDFORMATION = 1, SSM_ASSOCIATION = 2 }


	/** The event information.  */
	export interface ConfigurationEvent {
		MonitoredResourceARN?: string;
		EventStatus?: ConfigurationEventEventStatus;
		EventResourceType?: ConfigurationEventEventResourceType;
		EventTime?: Date;
		EventDetail?: string;
		EventResourceName?: string;
	}

	export enum ConfigurationEventEventStatus { INFO = 0, WARN = 1, ERROR = 2 }

	export enum ConfigurationEventEventResourceType { CLOUDWATCH_ALARM = 0, CLOUDFORMATION = 1, SSM_ASSOCIATION = 2 }


	/**An object that defines the log patterns that belongs to a <code>LogPatternSet</code>. */
	export interface LogPattern {
		PatternSetName?: string;
		PatternName?: string;
		Pattern?: string;
		Rank?: number;
	}


	/**Describes an anomaly or error with the application. */
	export interface Observation {
		Id?: string;
		StartTime?: Date;
		EndTime?: Date;
		SourceType?: string;
		SourceARN?: string;
		LogGroup?: string;
		LineTime?: Date;
		LogText?: string;
		LogFilter?: ObservationLogFilter;
		MetricNamespace?: string;
		MetricName?: string;
		Unit?: string;
		Value?: number;
		CloudWatchEventId?: string;
		CloudWatchEventSource?: ObservationCloudWatchEventSource;
		CloudWatchEventDetailType?: string;
		HealthEventArn?: string;
		HealthService?: string;
		HealthEventTypeCode?: string;
		HealthEventTypeCategory?: string;
		HealthEventDescription?: string;
		CodeDeployDeploymentId?: string;
		CodeDeployDeploymentGroup?: string;
		CodeDeployState?: string;
		CodeDeployApplication?: string;
		CodeDeployInstanceGroupId?: string;
		Ec2State?: string;
		XRayFaultPercent?: number;
		XRayThrottlePercent?: number;
		XRayErrorPercent?: number;
		XRayRequestCount?: number;
		XRayRequestAverageLatency?: number;
		XRayNodeName?: string;
		XRayNodeType?: string;
	}

	export enum ObservationLogFilter { ERROR = 0, WARN = 1, INFO = 2 }

	export enum ObservationCloudWatchEventSource { EC2 = 0, CODE_DEPLOY = 1, HEALTH = 2 }


	/**Describes observations related to the problem. */
	export interface RelatedObservations {
		ObservationList?: Array<Observation>;
	}


	/**Describes a problem that is detected by correlating observations. */
	export interface Problem {
		Id?: string;
		Title?: string;
		Insights?: string;
		Status?: ProblemStatus;
		AffectedResource?: string;
		StartTime?: Date;
		EndTime?: Date;
		SeverityLevel?: ProblemSeverityLevel;
		ResourceGroupName?: string;
		Feedback?: Feedback;
	}

	export enum ProblemStatus { IGNORE = 0, RESOLVED = 1, PENDING = 2 }

	export enum ProblemSeverityLevel { Low = 0, Medium = 1, High = 2 }

	export enum FeedbackValue { NOT_SPECIFIED = 0, USEFUL = 1, NOT_USEFUL = 2 }

	export enum FeedbackKey { INSIGHTS_FEEDBACK = 0 }

	export enum LogFilter { ERROR = 0, WARN = 1, INFO = 2 }

	export enum Status { IGNORE = 0, RESOLVED = 1, PENDING = 2 }

	export enum SeverityLevel { Low = 0, Medium = 1, High = 2 }


	/**<p>An object that defines the tags associated with an application. A <i>tag</i> is a label that you optionally define and associate with an application. Tags can help you categorize and manage resources in different ways, such as by purpose, owner, environment, or other criteria.</p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for a more specific tag value. A tag value acts as a descriptor within a tag key. A tag key can contain as many as 128 characters. A tag value can contain as many as 256 characters. The characters can be Unicode letters, digits, white space, or one of the following symbols: _ . : / = + -. The following additional restrictions apply to tags:</p> <ul> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>For each associated resource, each tag key must be unique and it can have only one value.</p> </li> <li> <p>The <code>aws:</code> prefix is reserved for use by AWS; you can’t use it in any tag keys or values that you define. In addition, you can't edit or remove tag keys or values that use this prefix. </p> </li> </ul> */
	export interface Tag {
		Key: string;
		Value: string;
	}

	export class DemoClient {
		constructor(private baseUri: string = HttpClient.locationOrigin, private httpClient: HttpClientBase = new HttpClient(), private error?: (xhr: JQueryXHR, ajaxOptions: string, thrown: string) => any, private statusCode?: { [key: string]: any; }) {
		}

		/**
		 * Adds an application that is created from a resource group.
		 * Post /#X-Amz-Target=EC2WindowsBarleyService.CreateApplication
		 * @return {CreateApplicationResponse} Success
		 */
		CreateApplication(callback: (data : CreateApplicationResponse) => any, requestBody: CreateApplicationRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=EC2WindowsBarleyService.CreateApplication', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Creates a custom component by grouping similar standalone instances to monitor.
		 * Post /#X-Amz-Target=EC2WindowsBarleyService.CreateComponent
		 * @return {CreateComponentResponse} Success
		 */
		CreateComponent(callback: (data : CreateComponentResponse) => any, requestBody: CreateComponentRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=EC2WindowsBarleyService.CreateComponent', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Adds an log pattern to a <code>LogPatternSet</code>.
		 * Post /#X-Amz-Target=EC2WindowsBarleyService.CreateLogPattern
		 * @return {CreateLogPatternResponse} Success
		 */
		CreateLogPattern(callback: (data : CreateLogPatternResponse) => any, requestBody: CreateLogPatternRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=EC2WindowsBarleyService.CreateLogPattern', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Removes the specified application from monitoring. Does not delete the application.
		 * Post /#X-Amz-Target=EC2WindowsBarleyService.DeleteApplication
		 * @return {DeleteApplicationResponse} Success
		 */
		DeleteApplication(callback: (data : DeleteApplicationResponse) => any, requestBody: DeleteApplicationRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=EC2WindowsBarleyService.DeleteApplication', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Ungroups a custom component. When you ungroup custom components, all applicable monitors that are set up for the component are removed and the instances revert to their standalone status.
		 * Post /#X-Amz-Target=EC2WindowsBarleyService.DeleteComponent
		 * @return {DeleteComponentResponse} Success
		 */
		DeleteComponent(callback: (data : DeleteComponentResponse) => any, requestBody: DeleteComponentRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=EC2WindowsBarleyService.DeleteComponent', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Removes the specified log pattern from a <code>LogPatternSet</code>.
		 * Post /#X-Amz-Target=EC2WindowsBarleyService.DeleteLogPattern
		 * @return {DeleteLogPatternResponse} Success
		 */
		DeleteLogPattern(callback: (data : DeleteLogPatternResponse) => any, requestBody: DeleteLogPatternRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=EC2WindowsBarleyService.DeleteLogPattern', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Describes the application.
		 * Post /#X-Amz-Target=EC2WindowsBarleyService.DescribeApplication
		 * @return {DescribeApplicationResponse} Success
		 */
		DescribeApplication(callback: (data : DescribeApplicationResponse) => any, requestBody: DescribeApplicationRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=EC2WindowsBarleyService.DescribeApplication', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Describes a component and lists the resources that are grouped together in a component.
		 * Post /#X-Amz-Target=EC2WindowsBarleyService.DescribeComponent
		 * @return {DescribeComponentResponse} Success
		 */
		DescribeComponent(callback: (data : DescribeComponentResponse) => any, requestBody: DescribeComponentRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=EC2WindowsBarleyService.DescribeComponent', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Describes the monitoring configuration of the component.
		 * Post /#X-Amz-Target=EC2WindowsBarleyService.DescribeComponentConfiguration
		 * @return {DescribeComponentConfigurationResponse} Success
		 */
		DescribeComponentConfiguration(callback: (data : DescribeComponentConfigurationResponse) => any, requestBody: DescribeComponentConfigurationRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=EC2WindowsBarleyService.DescribeComponentConfiguration', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Describes the recommended monitoring configuration of the component.
		 * Post /#X-Amz-Target=EC2WindowsBarleyService.DescribeComponentConfigurationRecommendation
		 * @return {DescribeComponentConfigurationRecommendationResponse} Success
		 */
		DescribeComponentConfigurationRecommendation(callback: (data : DescribeComponentConfigurationRecommendationResponse) => any, requestBody: DescribeComponentConfigurationRecommendationRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=EC2WindowsBarleyService.DescribeComponentConfigurationRecommendation', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Describe a specific log pattern from a <code>LogPatternSet</code>.
		 * Post /#X-Amz-Target=EC2WindowsBarleyService.DescribeLogPattern
		 * @return {DescribeLogPatternResponse} Success
		 */
		DescribeLogPattern(callback: (data : DescribeLogPatternResponse) => any, requestBody: DescribeLogPatternRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=EC2WindowsBarleyService.DescribeLogPattern', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Describes an anomaly or error with the application.
		 * Post /#X-Amz-Target=EC2WindowsBarleyService.DescribeObservation
		 * @return {DescribeObservationResponse} Success
		 */
		DescribeObservation(callback: (data : DescribeObservationResponse) => any, requestBody: DescribeObservationRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=EC2WindowsBarleyService.DescribeObservation', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Describes an application problem.
		 * Post /#X-Amz-Target=EC2WindowsBarleyService.DescribeProblem
		 * @return {DescribeProblemResponse} Success
		 */
		DescribeProblem(callback: (data : DescribeProblemResponse) => any, requestBody: DescribeProblemRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=EC2WindowsBarleyService.DescribeProblem', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Describes the anomalies or errors associated with the problem.
		 * Post /#X-Amz-Target=EC2WindowsBarleyService.DescribeProblemObservations
		 * @return {DescribeProblemObservationsResponse} Success
		 */
		DescribeProblemObservations(callback: (data : DescribeProblemObservationsResponse) => any, requestBody: DescribeProblemObservationsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=EC2WindowsBarleyService.DescribeProblemObservations', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Lists the IDs of the applications that you are monitoring.
		 * Post /#X-Amz-Target=EC2WindowsBarleyService.ListApplications
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListApplicationsResponse} Success
		 */
		ListApplications(MaxResults: string, NextToken: string, callback: (data : ListApplicationsResponse) => any, requestBody: ListApplicationsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=EC2WindowsBarleyService.ListApplications?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Lists the auto-grouped, standalone, and custom components of the application.
		 * Post /#X-Amz-Target=EC2WindowsBarleyService.ListComponents
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListComponentsResponse} Success
		 */
		ListComponents(MaxResults: string, NextToken: string, callback: (data : ListComponentsResponse) => any, requestBody: ListComponentsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=EC2WindowsBarleyService.ListComponents?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p> Lists the INFO, WARN, and ERROR events for periodic configuration updates performed by Application Insights. Examples of events represented are: </p> <ul> <li> <p>INFO: creating a new alarm or updating an alarm threshold.</p> </li> <li> <p>WARN: alarm not created due to insufficient data points used to predict thresholds.</p> </li> <li> <p>ERROR: alarm not created due to permission errors or exceeding quotas. </p> </li> </ul>
		 * Post /#X-Amz-Target=EC2WindowsBarleyService.ListConfigurationHistory
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListConfigurationHistoryResponse} Success
		 */
		ListConfigurationHistory(MaxResults: string, NextToken: string, callback: (data : ListConfigurationHistoryResponse) => any, requestBody: ListConfigurationHistoryRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=EC2WindowsBarleyService.ListConfigurationHistory?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Lists the log pattern sets in the specific application.
		 * Post /#X-Amz-Target=EC2WindowsBarleyService.ListLogPatternSets
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListLogPatternSetsResponse} Success
		 */
		ListLogPatternSets(MaxResults: string, NextToken: string, callback: (data : ListLogPatternSetsResponse) => any, requestBody: ListLogPatternSetsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=EC2WindowsBarleyService.ListLogPatternSets?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Lists the log patterns in the specific log <code>LogPatternSet</code>.
		 * Post /#X-Amz-Target=EC2WindowsBarleyService.ListLogPatterns
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListLogPatternsResponse} Success
		 */
		ListLogPatterns(MaxResults: string, NextToken: string, callback: (data : ListLogPatternsResponse) => any, requestBody: ListLogPatternsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=EC2WindowsBarleyService.ListLogPatterns?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Lists the problems with your application.
		 * Post /#X-Amz-Target=EC2WindowsBarleyService.ListProblems
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListProblemsResponse} Success
		 */
		ListProblems(MaxResults: string, NextToken: string, callback: (data : ListProblemsResponse) => any, requestBody: ListProblemsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=EC2WindowsBarleyService.ListProblems?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Retrieve a list of the tags (keys and values) that are associated with a specified application. A <i>tag</i> is a label that you optionally define and associate with an application. Each tag consists of a required <i>tag key</i> and an optional associated <i>tag value</i>. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.
		 * Post /#X-Amz-Target=EC2WindowsBarleyService.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(callback: (data : ListTagsForResourceResponse) => any, requestBody: ListTagsForResourceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=EC2WindowsBarleyService.ListTagsForResource', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Add one or more tags (keys and values) to a specified application. A <i>tag</i> is a label that you optionally define and associate with an application. Tags can help you categorize and manage application in different ways, such as by purpose, owner, environment, or other criteria. </p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.</p>
		 * Post /#X-Amz-Target=EC2WindowsBarleyService.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(callback: (data : TagResourceResponse) => any, requestBody: TagResourceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=EC2WindowsBarleyService.TagResource', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Remove one or more tags (keys and values) from a specified application.
		 * Post /#X-Amz-Target=EC2WindowsBarleyService.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(callback: (data : UntagResourceResponse) => any, requestBody: UntagResourceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=EC2WindowsBarleyService.UntagResource', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Updates the application.
		 * Post /#X-Amz-Target=EC2WindowsBarleyService.UpdateApplication
		 * @return {UpdateApplicationResponse} Success
		 */
		UpdateApplication(callback: (data : UpdateApplicationResponse) => any, requestBody: UpdateApplicationRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=EC2WindowsBarleyService.UpdateApplication', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Updates the custom component name and/or the list of resources that make up the component.
		 * Post /#X-Amz-Target=EC2WindowsBarleyService.UpdateComponent
		 * @return {UpdateComponentResponse} Success
		 */
		UpdateComponent(callback: (data : UpdateComponentResponse) => any, requestBody: UpdateComponentRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=EC2WindowsBarleyService.UpdateComponent', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Updates the monitoring configurations for the component. The configuration input parameter is an escaped JSON of the configuration and should match the schema of what is returned by <code>DescribeComponentConfigurationRecommendation</code>.
		 * Post /#X-Amz-Target=EC2WindowsBarleyService.UpdateComponentConfiguration
		 * @return {UpdateComponentConfigurationResponse} Success
		 */
		UpdateComponentConfiguration(callback: (data : UpdateComponentConfigurationResponse) => any, requestBody: UpdateComponentConfigurationRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=EC2WindowsBarleyService.UpdateComponentConfiguration', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Adds a log pattern to a <code>LogPatternSet</code>.
		 * Post /#X-Amz-Target=EC2WindowsBarleyService.UpdateLogPattern
		 * @return {UpdateLogPatternResponse} Success
		 */
		UpdateLogPattern(callback: (data : UpdateLogPatternResponse) => any, requestBody: UpdateLogPatternRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=EC2WindowsBarleyService.UpdateLogPattern', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}
	}

}
