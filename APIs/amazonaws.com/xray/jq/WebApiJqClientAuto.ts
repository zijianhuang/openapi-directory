///<reference path="HttpClient.ts" />
namespace My_Demo_Client {
	export interface BatchGetTracesResult {
		Traces?: Array<Trace>;
		UnprocessedTraceIds?: Array<TraceId>;
		NextToken?: string;
	}

	export interface CreateGroupResult {

		/**Details and metadata for a group. */
		Group?: Group;
	}

	export interface CreateSamplingRuleResult {

		/**A <a>SamplingRule</a> and its metadata. */
		SamplingRuleRecord?: SamplingRuleRecord;
	}

	export interface DeleteSamplingRuleResult {

		/**A <a>SamplingRule</a> and its metadata. */
		SamplingRuleRecord?: SamplingRuleRecord;
	}

	export interface GetEncryptionConfigResult {

		/**A configuration document that specifies encryption configuration settings. */
		EncryptionConfig?: EncryptionConfig;
	}

	export interface GetGroupResult {

		/**Details and metadata for a group. */
		Group?: Group;
	}

	export interface GetGroupsResult {
		Groups?: Array<GroupSummary>;
		NextToken?: string;
	}

	export interface GetSamplingRulesResult {
		SamplingRuleRecords?: Array<SamplingRuleRecord>;
		NextToken?: string;
	}

	export interface GetSamplingStatisticSummariesResult {
		SamplingStatisticSummaries?: Array<SamplingStatisticSummary>;
		NextToken?: string;
	}

	export interface GetSamplingTargetsResult {
		SamplingTargetDocuments?: Array<SamplingTargetDocument>;
		LastRuleModification?: Date;
		UnprocessedStatistics?: Array<UnprocessedStatistics>;
	}


	/**Request sampling results for a single rule from a service. Results are for the last 10 seconds unless the service has been assigned a longer reporting interval after a previous call to <a>GetSamplingTargets</a>. */
	export interface SamplingStatisticsDocument {
		RuleName: string;
		ClientID: string;
		Timestamp: Date;
		RequestCount: number;
		SampledCount: number;
		BorrowCount?: number;
	}

	export interface GetServiceGraphResult {
		StartTime?: Date;
		EndTime?: Date;
		Services?: Array<Service>;
		ContainsOldGroupVersions?: boolean;
		NextToken?: string;
	}

	export interface GetTimeSeriesServiceStatisticsResult {
		TimeSeriesServiceStatistics?: Array<TimeSeriesServiceStatistics>;
		ContainsOldGroupVersions?: boolean;
		NextToken?: string;
	}

	export interface GetTraceGraphResult {
		Services?: Array<Service>;
		NextToken?: string;
	}

	export interface GetTraceSummariesResult {
		TraceSummaries?: Array<TraceSummary>;
		ApproximateTime?: Date;
		TracesProcessedCount?: number;
		NextToken?: string;
	}

	export enum SamplingStrategyName { PartialScan = 0, FixedRate = 1 }

	export interface PutEncryptionConfigResult {

		/**A configuration document that specifies encryption configuration settings. */
		EncryptionConfig?: EncryptionConfig;
	}


	/**<p/> */
	export interface TelemetryRecord {
		Timestamp: Date;
		SegmentsReceivedCount?: number;
		SegmentsSentCount?: number;
		SegmentsSpilloverCount?: number;
		SegmentsRejectedCount?: number;

		/**<p/> */
		BackendConnectionErrors?: BackendConnectionErrors;
	}

	export interface PutTraceSegmentsResult {
		UnprocessedTraceSegments?: Array<UnprocessedTraceSegment>;
	}

	export interface UpdateGroupResult {

		/**Details and metadata for a group. */
		Group?: Group;
	}

	export interface UpdateSamplingRuleResult {

		/**A <a>SamplingRule</a> and its metadata. */
		SamplingRuleRecord?: SamplingRuleRecord;
	}


	/**An alias for an edge. */
	export interface Alias {
		Name?: string;
		Names?: Array<String>;
		Type?: string;
	}


	/**Value of a segment annotation. Has one of three value types: Number, Boolean or String. */
	export interface AnnotationValue {
		NumberValue?: number;
		BooleanValue?: boolean;
		StringValue?: string;
	}


	/**A list of availability zones corresponding to the segments in a trace. */
	export interface AvailabilityZoneDetail {
		Name?: string;
	}


	/**<p/> */
	export interface BackendConnectionErrors {
		TimeoutCount?: number;
		ConnectionRefusedCount?: number;
		HTTPCode4XXCount?: number;
		HTTPCode5XXCount?: number;
		UnknownHostCount?: number;
		OtherCount?: number;
	}

	export interface BatchGetTracesRequest {
		TraceIds: Array<TraceId>;
		NextToken?: string;
	}

	export interface CreateGroupRequest {
		GroupName: string;
		FilterExpression?: string;
	}


	/**Details and metadata for a group. */
	export interface Group {
		GroupName?: string;
		GroupARN?: string;
		FilterExpression?: string;
	}


	/**A sampling rule that services use to decide whether to instrument a request. Rule fields can match properties of the service, or properties of a request. The service can ignore rules that don't match its properties. */
	export interface SamplingRule {
		RuleName?: string;
		RuleARN?: string;
		ResourceARN: string;
		Priority: number;
		FixedRate: number;
		ReservoirSize: number;
		ServiceName: string;
		ServiceType: string;
		Host: string;
		HTTPMethod: string;
		URLPath: string;
		Version: number;
		Attributes?: AttributeMap;
	}

	export interface CreateSamplingRuleRequest {

		/**A sampling rule that services use to decide whether to instrument a request. Rule fields can match properties of the service, or properties of a request. The service can ignore rules that don't match its properties. */
		SamplingRule: SamplingRule;
	}


	/**A <a>SamplingRule</a> and its metadata. */
	export interface SamplingRuleRecord {

		/**A sampling rule that services use to decide whether to instrument a request. Rule fields can match properties of the service, or properties of a request. The service can ignore rules that don't match its properties. */
		SamplingRule?: SamplingRule;
		CreatedAt?: Date;
		ModifiedAt?: Date;
	}

	export interface DeleteGroupRequest {
		GroupName?: string;
		GroupARN?: string;
	}

	export interface DeleteSamplingRuleRequest {
		RuleName?: string;
		RuleARN?: string;
	}


	/**Response statistics for an edge. */
	export interface EdgeStatistics {
		OkCount?: number;

		/**Information about requests that failed with a 4xx Client Error status code. */
		ErrorStatistics?: ErrorStatistics;

		/**Information about requests that failed with a 5xx Server Error status code. */
		FaultStatistics?: FaultStatistics;
		TotalCount?: number;
		TotalResponseTime?: number;
	}


	/**Information about a connection between two services. */
	export interface Edge {
		ReferenceId?: number;
		StartTime?: Date;
		EndTime?: Date;

		/**Response statistics for an edge. */
		SummaryStatistics?: EdgeStatistics;
		ResponseTimeHistogram?: Array<HistogramEntry>;
		Aliases?: Array<Alias>;
	}


	/**Information about requests that failed with a 4xx Client Error status code. */
	export interface ErrorStatistics {
		ThrottleCount?: number;
		OtherCount?: number;
		TotalCount?: number;
	}


	/**Information about requests that failed with a 5xx Server Error status code. */
	export interface FaultStatistics {
		OtherCount?: number;
		TotalCount?: number;
	}

	export enum EncryptionStatus { UPDATING = 0, ACTIVE = 1 }

	export enum EncryptionType { NONE = 0, KMS = 1 }


	/**A configuration document that specifies encryption configuration settings. */
	export interface EncryptionConfig {
		KeyId?: string;
		Status?: EncryptionConfigStatus;
		Type?: EncryptionConfigType;
	}

	export enum EncryptionConfigStatus { UPDATING = 0, ACTIVE = 1 }

	export enum EncryptionConfigType { NONE = 0, KMS = 1 }


	/**The root cause of a trace summary error. */
	export interface ErrorRootCause {
		Services?: Array<ErrorRootCauseService>;
		ClientImpacting?: boolean;
	}


	/**A collection of segments and corresponding subsegments associated to a trace summary error. */
	export interface ErrorRootCauseEntity {
		Name?: string;
		Exceptions?: Array<RootCauseException>;
		Remote?: boolean;
	}


	/**A collection of fields identifying the services in a trace summary error. */
	export interface ErrorRootCauseService {
		Name?: string;
		Names?: Array<String>;
		Type?: string;
		AccountId?: string;
		EntityPath?: Array<ErrorRootCauseEntity>;
		Inferred?: boolean;
	}


	/**The root cause information for a trace summary fault. */
	export interface FaultRootCause {
		Services?: Array<FaultRootCauseService>;
		ClientImpacting?: boolean;
	}


	/**A collection of segments and corresponding subsegments associated to a trace summary fault error. */
	export interface FaultRootCauseEntity {
		Name?: string;
		Exceptions?: Array<RootCauseException>;
		Remote?: boolean;
	}


	/**A collection of fields identifying the services in a trace summary fault. */
	export interface FaultRootCauseService {
		Name?: string;
		Names?: Array<String>;
		Type?: string;
		AccountId?: string;
		EntityPath?: Array<FaultRootCauseEntity>;
		Inferred?: boolean;
	}

	export interface GetGroupRequest {
		GroupName?: string;
		GroupARN?: string;
	}

	export interface GetGroupsRequest {
		NextToken?: string;
	}

	export interface GetSamplingRulesRequest {
		NextToken?: string;
	}

	export interface GetSamplingStatisticSummariesRequest {
		NextToken?: string;
	}

	export interface GetSamplingTargetsRequest {
		SamplingStatisticsDocuments: Array<SamplingStatisticsDocument>;
	}

	export interface GetServiceGraphRequest {
		StartTime: Date;
		EndTime: Date;
		GroupName?: string;
		GroupARN?: string;
		NextToken?: string;
	}

	export interface GetTimeSeriesServiceStatisticsRequest {
		StartTime: Date;
		EndTime: Date;
		GroupName?: string;
		GroupARN?: string;
		EntitySelectorExpression?: string;
		Period?: number;
		NextToken?: string;
	}

	export interface GetTraceGraphRequest {
		TraceIds: Array<TraceId>;
		NextToken?: string;
	}

	export enum TimeRangeType { TraceId = 0, Event = 1 }


	/**The name and value of a sampling rule to apply to a trace summary. */
	export interface SamplingStrategy {
		Name?: SamplingStrategyName;
		Value?: number;
	}

	export enum SamplingStrategyName { PartialScan = 0, FixedRate = 1 }

	export interface GetTraceSummariesRequest {
		StartTime: Date;
		EndTime: Date;
		TimeRangeType?: GetTraceSummariesRequestTimeRangeType;
		Sampling?: boolean;

		/**The name and value of a sampling rule to apply to a trace summary. */
		SamplingStrategy?: SamplingStrategy;
		FilterExpression?: string;
		NextToken?: string;
	}

	export enum GetTraceSummariesRequestTimeRangeType { TraceId = 0, Event = 1 }


	/**Details for a group without metadata. */
	export interface GroupSummary {
		GroupName?: string;
		GroupARN?: string;
		FilterExpression?: string;
	}


	/**An entry in a histogram for a statistic. A histogram maps the range of observed values on the X axis, and the prevalence of each value on the Y axis. */
	export interface HistogramEntry {
		Value?: number;
		Count?: number;
	}


	/**Information about an HTTP request. */
	export interface Http {
		HttpURL?: string;
		HttpStatus?: number;
		HttpMethod?: string;
		UserAgent?: string;
		ClientIp?: string;
	}


	/**A list of EC2 instance IDs corresponding to the segments in a trace.  */
	export interface InstanceIdDetail {
		Id?: string;
	}

	export interface PutEncryptionConfigRequest {
		KeyId?: string;
		Type: PutEncryptionConfigRequestType;
	}

	export enum PutEncryptionConfigRequestType { NONE = 0, KMS = 1 }

	export interface PutTelemetryRecordsRequest {
		TelemetryRecords: Array<TelemetryRecord>;
		EC2InstanceId?: string;
		Hostname?: string;
		ResourceARN?: string;
	}

	export interface PutTraceSegmentsRequest {
		TraceSegmentDocuments: Array<TraceSegmentDocument>;
	}


	/**A list of resources ARNs corresponding to the segments in a trace. */
	export interface ResourceARNDetail {
		ARN?: string;
	}


	/**The root cause information for a response time warning. */
	export interface ResponseTimeRootCause {
		Services?: Array<ResponseTimeRootCauseService>;
		ClientImpacting?: boolean;
	}


	/**A collection of segments and corresponding subsegments associated to a response time warning. */
	export interface ResponseTimeRootCauseEntity {
		Name?: string;
		Coverage?: number;
		Remote?: boolean;
	}


	/**A collection of fields identifying the service in a response time warning. */
	export interface ResponseTimeRootCauseService {
		Name?: string;
		Names?: Array<String>;
		Type?: string;
		AccountId?: string;
		EntityPath?: Array<ResponseTimeRootCauseEntity>;
		Inferred?: boolean;
	}


	/**The exception associated with a root cause. */
	export interface RootCauseException {
		Name?: string;
		Message?: string;
	}


	/**A document specifying changes to a sampling rule's configuration. */
	export interface SamplingRuleUpdate {
		RuleName?: string;
		RuleARN?: string;
		ResourceARN?: string;
		Priority?: number;
		FixedRate?: number;
		ReservoirSize?: number;
		Host?: string;
		ServiceName?: string;
		ServiceType?: string;
		HTTPMethod?: string;
		URLPath?: string;
		Attributes?: AttributeMap;
	}


	/**Aggregated request sampling data for a sampling rule across all services for a 10 second window. */
	export interface SamplingStatisticSummary {
		RuleName?: string;
		Timestamp?: Date;
		RequestCount?: number;
		BorrowCount?: number;
		SampledCount?: number;
	}


	/**Temporary changes to a sampling rule configuration. To meet the global sampling target for a rule, X-Ray calculates a new reservoir for each service based on the recent sampling results of all services that called <a>GetSamplingTargets</a>. */
	export interface SamplingTargetDocument {
		RuleName?: string;
		FixedRate?: number;
		ReservoirQuota?: number;
		ReservoirQuotaTTL?: Date;
		Interval?: number;
	}


	/**<p>A segment from a trace that has been ingested by the X-Ray service. The segment can be compiled from documents uploaded with <a>PutTraceSegments</a>, or an <code>inferred</code> segment for a downstream service, generated from a subsegment sent by the service that called it.</p> <p>For the full segment document schema, see <a href="https://docs.aws.amazon.com/xray/latest/devguide/xray-api-segmentdocuments.html">AWS X-Ray Segment Documents</a> in the <i>AWS X-Ray Developer Guide</i>.</p> */
	export interface Segment {
		Id?: string;
		Document?: string;
	}


	/**Response statistics for a service. */
	export interface ServiceStatistics {
		OkCount?: number;

		/**Information about requests that failed with a 4xx Client Error status code. */
		ErrorStatistics?: ErrorStatistics;

		/**Information about requests that failed with a 5xx Server Error status code. */
		FaultStatistics?: FaultStatistics;
		TotalCount?: number;
		TotalResponseTime?: number;
	}


	/**Information about an application that processed requests, users that made requests, or downstream services, resources and applications that an application used. */
	export interface Service {
		ReferenceId?: number;
		Name?: string;
		Names?: Array<String>;
		Root?: boolean;
		AccountId?: string;
		Type?: string;
		State?: string;
		StartTime?: Date;
		EndTime?: Date;
		Edges?: Array<Edge>;

		/**Response statistics for a service. */
		SummaryStatistics?: ServiceStatistics;
		DurationHistogram?: Array<HistogramEntry>;
		ResponseTimeHistogram?: Array<HistogramEntry>;
	}


	/**<p/> */
	export interface ServiceId {
		Name?: string;
		Names?: Array<String>;
		AccountId?: string;
		Type?: string;
	}


	/**A list of TimeSeriesStatistic structures. */
	export interface TimeSeriesServiceStatistics {
		Timestamp?: Date;

		/**Response statistics for an edge. */
		EdgeSummaryStatistics?: EdgeStatistics;

		/**Response statistics for a service. */
		ServiceSummaryStatistics?: ServiceStatistics;
		ResponseTimeHistogram?: Array<HistogramEntry>;
	}


	/**A collection of segment documents with matching trace IDs. */
	export interface Trace {
		Id?: string;
		Duration?: number;
		Segments?: Array<Segment>;
	}


	/**Metadata generated from the segment documents in a trace. */
	export interface TraceSummary {
		Id?: string;
		Duration?: number;
		ResponseTime?: number;
		HasFault?: boolean;
		HasError?: boolean;
		HasThrottle?: boolean;
		IsPartial?: boolean;

		/**Information about an HTTP request. */
		Http?: Http;
		Annotations?: Annotations;
		Users?: Array<TraceUser>;
		ServiceIds?: Array<ServiceId>;
		ResourceARNs?: Array<ResourceARNDetail>;
		InstanceIds?: Array<InstanceIdDetail>;
		AvailabilityZones?: Array<AvailabilityZoneDetail>;

		/**<p/> */
		EntryPoint?: ServiceId;
		FaultRootCauses?: Array<FaultRootCause>;
		ErrorRootCauses?: Array<ErrorRootCause>;
		ResponseTimeRootCauses?: Array<ResponseTimeRootCause>;
		Revision?: number;
		MatchedEventTime?: Date;
	}


	/**Information about a user recorded in segment documents. */
	export interface TraceUser {
		UserName?: string;
		ServiceIds?: Array<ServiceId>;
	}


	/**Sampling statistics from a call to <a>GetSamplingTargets</a> that X-Ray could not process. */
	export interface UnprocessedStatistics {
		RuleName?: string;
		ErrorCode?: string;
		Message?: string;
	}


	/**Information about a segment that failed processing. */
	export interface UnprocessedTraceSegment {
		Id?: string;
		ErrorCode?: string;
		Message?: string;
	}

	export interface UpdateGroupRequest {
		GroupName?: string;
		GroupARN?: string;
		FilterExpression?: string;
	}

	export interface UpdateSamplingRuleRequest {

		/**A document specifying changes to a sampling rule's configuration. */
		SamplingRuleUpdate: SamplingRuleUpdate;
	}


	/**Information about a segment annotation. */
	export interface ValueWithServiceIds {

		/**Value of a segment annotation. Has one of three value types: Number, Boolean or String. */
		AnnotationValue?: AnnotationValue;
		ServiceIds?: Array<ServiceId>;
	}

	export class DemoClient {
		constructor(private baseUri: string = HttpClient.locationOrigin, private httpClient: HttpClientBase = new HttpClient(), private error?: (xhr: JQueryXHR, ajaxOptions: string, thrown: string) => any, private statusCode?: { [key: string]: any; }) {
		}

		/**
		 * Retrieves a list of traces specified by ID. Each trace is a collection of segment documents that originates from a single request. Use <code>GetTraceSummaries</code> to get a list of trace IDs.
		 * Post /Traces
		 * @param {string} NextToken Pagination token
		 * @return {BatchGetTracesResult} Success
		 */
		BatchGetTraces(NextToken: string, callback: (data : BatchGetTracesResult) => any, requestBody: BatchGetTracesBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/Traces?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Creates a group resource with a name and a filter expression.
		 * Post /CreateGroup
		 * @return {CreateGroupResult} Success
		 */
		CreateGroup(callback: (data : CreateGroupResult) => any, requestBody: CreateGroupBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/CreateGroup', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Creates a rule to control sampling behavior for instrumented applications. Services retrieve rules with <a>GetSamplingRules</a>, and evaluate each rule in ascending order of <i>priority</i> for each request. If a rule matches, the service records a trace, borrowing it from the reservoir size. After 10 seconds, the service reports back to X-Ray with <a>GetSamplingTargets</a> to get updated versions of each in-use rule. The updated rule contains a trace quota that the service can use instead of borrowing from the reservoir.
		 * Post /CreateSamplingRule
		 * @return {CreateSamplingRuleResult} Success
		 */
		CreateSamplingRule(callback: (data : CreateSamplingRuleResult) => any, requestBody: CreateSamplingRuleBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/CreateSamplingRule', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Deletes a group resource.
		 * Post /DeleteGroup
		 * @return {DeleteGroupResult} Success
		 */
		DeleteGroup(callback: (data : DeleteGroupResult) => any, requestBody: DeleteGroupBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/DeleteGroup', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Deletes a sampling rule.
		 * Post /DeleteSamplingRule
		 * @return {DeleteSamplingRuleResult} Success
		 */
		DeleteSamplingRule(callback: (data : DeleteSamplingRuleResult) => any, requestBody: DeleteSamplingRuleBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/DeleteSamplingRule', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Retrieves the current encryption configuration for X-Ray data.
		 * Post /EncryptionConfig
		 * @return {GetEncryptionConfigResult} Success
		 */
		GetEncryptionConfig(callback: (data : GetEncryptionConfigResult) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/EncryptionConfig', null, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Retrieves group resource details.
		 * Post /GetGroup
		 * @return {GetGroupResult} Success
		 */
		GetGroup(callback: (data : GetGroupResult) => any, requestBody: GetGroupBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/GetGroup', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Retrieves all active group details.
		 * Post /Groups
		 * @param {string} NextToken Pagination token
		 * @return {GetGroupsResult} Success
		 */
		GetGroups(NextToken: string, callback: (data : GetGroupsResult) => any, requestBody: GetGroupsBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/Groups?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Retrieves all sampling rules.
		 * Post /GetSamplingRules
		 * @param {string} NextToken Pagination token
		 * @return {GetSamplingRulesResult} Success
		 */
		GetSamplingRules(NextToken: string, callback: (data : GetSamplingRulesResult) => any, requestBody: GetSamplingRulesBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/GetSamplingRules?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Retrieves information about recent sampling results for all sampling rules.
		 * Post /SamplingStatisticSummaries
		 * @param {string} NextToken Pagination token
		 * @return {GetSamplingStatisticSummariesResult} Success
		 */
		GetSamplingStatisticSummaries(NextToken: string, callback: (data : GetSamplingStatisticSummariesResult) => any, requestBody: GetSamplingStatisticSummariesBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/SamplingStatisticSummaries?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Requests a sampling quota for rules that the service is using to sample requests.
		 * Post /SamplingTargets
		 * @return {GetSamplingTargetsResult} Success
		 */
		GetSamplingTargets(callback: (data : GetSamplingTargetsResult) => any, requestBody: GetSamplingTargetsBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/SamplingTargets', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Retrieves a document that describes services that process incoming requests, and downstream services that they call as a result. Root services process incoming requests and make calls to downstream services. Root services are applications that use the <a href="https://docs.aws.amazon.com/xray/index.html">AWS X-Ray SDK</a>. Downstream services can be other applications, AWS resources, HTTP web APIs, or SQL databases.
		 * Post /ServiceGraph
		 * @param {string} NextToken Pagination token
		 * @return {GetServiceGraphResult} Success
		 */
		GetServiceGraph(NextToken: string, callback: (data : GetServiceGraphResult) => any, requestBody: GetServiceGraphBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/ServiceGraph?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Get an aggregation of service statistics defined by a specific time range.
		 * Post /TimeSeriesServiceStatistics
		 * @param {string} NextToken Pagination token
		 * @return {GetTimeSeriesServiceStatisticsResult} Success
		 */
		GetTimeSeriesServiceStatistics(NextToken: string, callback: (data : GetTimeSeriesServiceStatisticsResult) => any, requestBody: GetTimeSeriesServiceStatisticsBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/TimeSeriesServiceStatistics?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Retrieves a service graph for one or more specific trace IDs.
		 * Post /TraceGraph
		 * @param {string} NextToken Pagination token
		 * @return {GetTraceGraphResult} Success
		 */
		GetTraceGraph(NextToken: string, callback: (data : GetTraceGraphResult) => any, requestBody: GetTraceGraphBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/TraceGraph?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Retrieves IDs and annotations for traces available for a specified time frame using an optional filter. To get the full traces, pass the trace IDs to <code>BatchGetTraces</code>.</p> <p>A filter expression can target traced requests that hit specific service nodes or edges, have errors, or come from a known user. For example, the following filter expression targets traces that pass through <code>api.example.com</code>:</p> <p> <code>service("api.example.com")</code> </p> <p>This filter expression finds traces that have an annotation named <code>account</code> with the value <code>12345</code>:</p> <p> <code>annotation.account = "12345"</code> </p> <p>For a full list of indexed fields and keywords that you can use in filter expressions, see <a href="https://docs.aws.amazon.com/xray/latest/devguide/xray-console-filters.html">Using Filter Expressions</a> in the <i>AWS X-Ray Developer Guide</i>.</p>
		 * Post /TraceSummaries
		 * @param {string} NextToken Pagination token
		 * @return {GetTraceSummariesResult} Success
		 */
		GetTraceSummaries(NextToken: string, callback: (data : GetTraceSummariesResult) => any, requestBody: GetTraceSummariesBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/TraceSummaries?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Updates the encryption configuration for X-Ray data.
		 * Post /PutEncryptionConfig
		 * @return {PutEncryptionConfigResult} Success
		 */
		PutEncryptionConfig(callback: (data : PutEncryptionConfigResult) => any, requestBody: PutEncryptionConfigBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/PutEncryptionConfig', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Used by the AWS X-Ray daemon to upload telemetry.
		 * Post /TelemetryRecords
		 * @return {PutTelemetryRecordsResult} Success
		 */
		PutTelemetryRecords(callback: (data : PutTelemetryRecordsResult) => any, requestBody: PutTelemetryRecordsBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/TelemetryRecords', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Uploads segment documents to AWS X-Ray. The <a href="https://docs.aws.amazon.com/xray/index.html">X-Ray SDK</a> generates segment documents and sends them to the X-Ray daemon, which uploads them in batches. A segment document can be a completed segment, an in-progress segment, or an array of subsegments.</p> <p>Segments must include the following fields. For the full segment document schema, see <a href="https://docs.aws.amazon.com/xray/latest/devguide/xray-api-segmentdocuments.html">AWS X-Ray Segment Documents</a> in the <i>AWS X-Ray Developer Guide</i>.</p> <p class="title"> <b>Required Segment Document Fields</b> </p> <ul> <li> <p> <code>name</code> - The name of the service that handled the request.</p> </li> <li> <p> <code>id</code> - A 64-bit identifier for the segment, unique among segments in the same trace, in 16 hexadecimal digits.</p> </li> <li> <p> <code>trace_id</code> - A unique identifier that connects all segments and subsegments originating from a single client request.</p> </li> <li> <p> <code>start_time</code> - Time the segment or subsegment was created, in floating point seconds in epoch time, accurate to milliseconds. For example, <code>1480615200.010</code> or <code>1.480615200010E9</code>.</p> </li> <li> <p> <code>end_time</code> - Time the segment or subsegment was closed. For example, <code>1480615200.090</code> or <code>1.480615200090E9</code>. Specify either an <code>end_time</code> or <code>in_progress</code>.</p> </li> <li> <p> <code>in_progress</code> - Set to <code>true</code> instead of specifying an <code>end_time</code> to record that a segment has been started, but is not complete. Send an in progress segment when your application receives a request that will take a long time to serve, to trace the fact that the request was received. When the response is sent, send the complete segment to overwrite the in-progress segment.</p> </li> </ul> <p>A <code>trace_id</code> consists of three numbers separated by hyphens. For example, 1-58406520-a006649127e371903a2de979. This includes:</p> <p class="title"> <b>Trace ID Format</b> </p> <ul> <li> <p>The version number, i.e. <code>1</code>.</p> </li> <li> <p>The time of the original request, in Unix epoch time, in 8 hexadecimal digits. For example, 10:00AM December 2nd, 2016 PST in epoch time is <code>1480615200</code> seconds, or <code>58406520</code> in hexadecimal.</p> </li> <li> <p>A 96-bit identifier for the trace, globally unique, in 24 hexadecimal digits.</p> </li> </ul>
		 * Post /TraceSegments
		 * @return {PutTraceSegmentsResult} Success
		 */
		PutTraceSegments(callback: (data : PutTraceSegmentsResult) => any, requestBody: PutTraceSegmentsBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/TraceSegments', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Updates a group resource.
		 * Post /UpdateGroup
		 * @return {UpdateGroupResult} Success
		 */
		UpdateGroup(callback: (data : UpdateGroupResult) => any, requestBody: UpdateGroupBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/UpdateGroup', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Modifies a sampling rule's configuration.
		 * Post /UpdateSamplingRule
		 * @return {UpdateSamplingRuleResult} Success
		 */
		UpdateSamplingRule(callback: (data : UpdateSamplingRuleResult) => any, requestBody: UpdateSamplingRuleBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/UpdateSamplingRule', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}
	}

	export interface BatchGetTracesBody {

		/**Specify the trace IDs of requests for which to retrieve segments. */
		TraceIds: Array<TraceId>;

		/**Pagination token. */
		NextToken?: string;
	}

	export interface CreateGroupBody {

		/**
		 * The case-sensitive name of the new group. Default is a reserved name and names must be unique.
		 * Max length: 32
		 * Min length: 1
		 */
		GroupName: string;

		/**The filter expression defining criteria by which to group traces. */
		FilterExpression?: string;
	}

	export interface CreateSamplingRuleBody {

		/**A sampling rule that services use to decide whether to instrument a request. Rule fields can match properties of the service, or properties of a request. The service can ignore rules that don't match its properties. */
		SamplingRule: string;
	}

	export interface DeleteGroupBody {

		/**
		 * The case-sensitive name of the group.
		 * Max length: 32
		 * Min length: 1
		 */
		GroupName?: string;

		/**
		 * The ARN of the group that was generated on creation.
		 * Max length: 400
		 * Min length: 1
		 */
		GroupARN?: string;
	}

	export interface DeleteSamplingRuleBody {

		/**The name of the sampling rule. Specify a rule by either name or ARN, but not both. */
		RuleName?: string;

		/**The ARN of the sampling rule. Specify a rule by either name or ARN, but not both. */
		RuleARN?: string;
	}

	export interface GetGroupBody {

		/**
		 * The case-sensitive name of the group.
		 * Max length: 32
		 * Min length: 1
		 */
		GroupName?: string;

		/**
		 * The ARN of the group that was generated on creation.
		 * Max length: 400
		 * Min length: 1
		 */
		GroupARN?: string;
	}

	export interface GetGroupsBody {

		/**
		 * Pagination token.
		 * Max length: 100
		 * Min length: 1
		 */
		NextToken?: string;
	}

	export interface GetSamplingRulesBody {

		/**Pagination token. */
		NextToken?: string;
	}

	export interface GetSamplingStatisticSummariesBody {

		/**Pagination token. */
		NextToken?: string;
	}

	export interface GetSamplingTargetsBody {

		/**
		 * Information about rules that the service is using to sample requests.
		 * Maximum items: 25
		 */
		SamplingStatisticsDocuments: Array<SamplingStatisticsDocument>;
	}

	export interface GetServiceGraphBody {

		/**The start of the time frame for which to generate a graph. */
		StartTime: Date;

		/**The end of the timeframe for which to generate a graph. */
		EndTime: Date;

		/**
		 * The name of a group to generate a graph based on.
		 * Max length: 32
		 * Min length: 1
		 */
		GroupName?: string;

		/**
		 * The ARN of a group to generate a graph based on.
		 * Max length: 400
		 * Min length: 1
		 */
		GroupARN?: string;

		/**Pagination token. */
		NextToken?: string;
	}

	export interface GetTimeSeriesServiceStatisticsBody {

		/**The start of the time frame for which to aggregate statistics. */
		StartTime: Date;

		/**The end of the time frame for which to aggregate statistics. */
		EndTime: Date;

		/**
		 * The case-sensitive name of the group for which to pull statistics from.
		 * Max length: 32
		 * Min length: 1
		 */
		GroupName?: string;

		/**
		 * The ARN of the group for which to pull statistics from.
		 * Max length: 400
		 * Min length: 1
		 */
		GroupARN?: string;

		/**
		 * A filter expression defining entities that will be aggregated for statistics. Supports ID, service, and edge functions. If no selector expression is specified, edge statistics are returned.
		 * Max length: 500
		 * Min length: 1
		 */
		EntitySelectorExpression?: string;

		/**Aggregation period in seconds. */
		Period?: number;

		/**Pagination token. */
		NextToken?: string;
	}

	export interface GetTraceGraphBody {

		/**Trace IDs of requests for which to generate a service graph. */
		TraceIds: Array<TraceId>;

		/**Pagination token. */
		NextToken?: string;
	}

	export interface GetTraceSummariesBody {

		/**The start of the time frame for which to retrieve traces. */
		StartTime: Date;

		/**The end of the time frame for which to retrieve traces. */
		EndTime: Date;

		/**A parameter to indicate whether to query trace summaries by TraceId or Event time. */
		TimeRangeType?: GetTraceSummariesBodyTimeRangeType;

		/**Set to <code>true</code> to get summaries for only a subset of available traces. */
		Sampling?: boolean;

		/**The name and value of a sampling rule to apply to a trace summary. */
		SamplingStrategy?: string;

		/**Specify a filter expression to retrieve trace summaries for services or requests that meet certain requirements. */
		FilterExpression?: string;

		/**Specify the pagination token returned by a previous request to retrieve the next page of results. */
		NextToken?: string;
	}

	export enum GetTraceSummariesBodyTimeRangeType { TraceId = 0, Event = 1 }

	export interface PutEncryptionConfigBody {

		/**
		 * <p>An AWS KMS customer master key (CMK) in one of the following formats:</p> <ul> <li> <p> <b>Alias</b> - The name of the key. For example, <code>alias/MyKey</code>.</p> </li> <li> <p> <b>Key ID</b> - The KMS key ID of the key. For example, <code>ae4aa6d49-a4d8-9df9-a475-4ff6d7898456</code>. AWS X-Ray does not support asymmetric CMKs.</p> </li> <li> <p> <b>ARN</b> - The full Amazon Resource Name of the key ID or alias. For example, <code>arn:aws:kms:us-east-2:123456789012:key/ae4aa6d49-a4d8-9df9-a475-4ff6d7898456</code>. Use this format to specify a key in a different account.</p> </li> </ul> <p>Omit this key if you set <code>Type</code> to <code>NONE</code>.</p>
		 * Max length: 3000
		 * Min length: 1
		 */
		KeyId?: string;

		/**The type of encryption. Set to <code>KMS</code> to use your own key for encryption. Set to <code>NONE</code> for default encryption. */
		Type: PutEncryptionConfigBodyType;
	}

	export enum PutEncryptionConfigBodyType { NONE = 0, KMS = 1 }

	export interface PutTelemetryRecordsBody {

		/**<p/> */
		TelemetryRecords: Array<TelemetryRecord>;

		/**
		 * <p/>
		 * Max length: 20
		 */
		EC2InstanceId?: string;

		/**
		 * <p/>
		 * Max length: 255
		 */
		Hostname?: string;

		/**
		 * <p/>
		 * Max length: 500
		 */
		ResourceARN?: string;
	}

	export interface PutTraceSegmentsBody {

		/**A string containing a JSON document defining one or more segments or subsegments. */
		TraceSegmentDocuments: Array<TraceSegmentDocument>;
	}

	export interface UpdateGroupBody {

		/**
		 * The case-sensitive name of the group.
		 * Max length: 32
		 * Min length: 1
		 */
		GroupName?: string;

		/**
		 * The ARN that was generated upon creation.
		 * Max length: 400
		 * Min length: 1
		 */
		GroupARN?: string;

		/**The updated filter expression defining criteria by which to group traces. */
		FilterExpression?: string;
	}

	export interface UpdateSamplingRuleBody {

		/**A document specifying changes to a sampling rule's configuration. */
		SamplingRuleUpdate: string;
	}

}

