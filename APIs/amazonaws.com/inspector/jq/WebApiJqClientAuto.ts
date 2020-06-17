///<reference path="HttpClient.ts" />
namespace My_Demo_Client {
	export interface AddAttributesToFindingsResponse {
		failedItems: FailedItems;
	}

	export interface AddAttributesToFindingsRequest {
		findingArns: Array<Arn>;
		attributes: Array<Attribute>;
	}

	export interface CreateAssessmentTargetResponse {
		assessmentTargetArn: string;
	}

	export interface CreateAssessmentTargetRequest {
		assessmentTargetName: string;
		resourceGroupArn?: string;
	}

	export interface CreateAssessmentTemplateResponse {
		assessmentTemplateArn: string;
	}

	export interface CreateAssessmentTemplateRequest {
		assessmentTargetArn: string;
		assessmentTemplateName: string;
		durationInSeconds: number;
		rulesPackageArns: Array<Arn>;
		userAttributesForFindings?: Array<Attribute>;
	}

	export interface CreateExclusionsPreviewResponse {
		previewToken: string;
	}

	export interface CreateExclusionsPreviewRequest {
		assessmentTemplateArn: string;
	}

	export interface CreateResourceGroupResponse {
		resourceGroupArn: string;
	}

	export interface CreateResourceGroupRequest {
		resourceGroupTags: Array<ResourceGroupTag>;
	}

	export interface DeleteAssessmentRunRequest {
		assessmentRunArn: string;
	}

	export interface DeleteAssessmentTargetRequest {
		assessmentTargetArn: string;
	}

	export interface DeleteAssessmentTemplateRequest {
		assessmentTemplateArn: string;
	}

	export interface DescribeAssessmentRunsResponse {
		assessmentRuns: Array<AssessmentRun>;
		failedItems: FailedItems;
	}

	export interface DescribeAssessmentRunsRequest {
		assessmentRunArns: Array<Arn>;
	}

	export interface DescribeAssessmentTargetsResponse {
		assessmentTargets: Array<AssessmentTarget>;
		failedItems: FailedItems;
	}

	export interface DescribeAssessmentTargetsRequest {
		assessmentTargetArns: Array<Arn>;
	}

	export interface DescribeAssessmentTemplatesResponse {
		assessmentTemplates: Array<AssessmentTemplate>;
		failedItems: FailedItems;
	}

	export interface DescribeAssessmentTemplatesRequest {
		assessmentTemplateArns: Array<Arn>;
	}

	export interface DescribeCrossAccountAccessRoleResponse {
		roleArn: string;
		valid: boolean;
		registeredAt: Date;
	}

	export interface DescribeExclusionsResponse {
		exclusions: ExclusionMap;
		failedItems: FailedItems;
	}

	export interface DescribeExclusionsRequest {
		exclusionArns: Array<Arn>;
		locale?: DescribeExclusionsRequestLocale;
	}

	export enum DescribeExclusionsRequestLocale { EN_US = 0 }

	export interface DescribeFindingsResponse {
		findings: Array<Finding>;
		failedItems: FailedItems;
	}

	export interface DescribeFindingsRequest {
		findingArns: Array<Arn>;
		locale?: DescribeFindingsRequestLocale;
	}

	export enum DescribeFindingsRequestLocale { EN_US = 0 }

	export interface DescribeResourceGroupsResponse {
		resourceGroups: Array<ResourceGroup>;
		failedItems: FailedItems;
	}

	export interface DescribeResourceGroupsRequest {
		resourceGroupArns: Array<Arn>;
	}

	export interface DescribeRulesPackagesResponse {
		rulesPackages: Array<RulesPackage>;
		failedItems: FailedItems;
	}

	export interface DescribeRulesPackagesRequest {
		rulesPackageArns: Array<Arn>;
		locale?: DescribeRulesPackagesRequestLocale;
	}

	export enum DescribeRulesPackagesRequestLocale { EN_US = 0 }

	export interface GetAssessmentReportResponse {
		status: GetAssessmentReportResponseStatus;
		url?: string;
	}

	export enum GetAssessmentReportResponseStatus { WORK_IN_PROGRESS = 0, FAILED = 1, COMPLETED = 2 }

	export interface GetAssessmentReportRequest {
		assessmentRunArn: string;
		reportFileFormat: GetAssessmentReportRequestReportFileFormat;
		reportType: GetAssessmentReportRequestReportType;
	}

	export enum GetAssessmentReportRequestReportFileFormat { HTML = 0, PDF = 1 }

	export enum GetAssessmentReportRequestReportType { FINDING = 0, FULL = 1 }

	export interface GetExclusionsPreviewResponse {
		previewStatus: GetExclusionsPreviewResponsePreviewStatus;
		exclusionPreviews?: Array<ExclusionPreview>;
		nextToken?: string;
	}

	export enum GetExclusionsPreviewResponsePreviewStatus { WORK_IN_PROGRESS = 0, COMPLETED = 1 }

	export interface GetExclusionsPreviewRequest {
		assessmentTemplateArn: string;
		previewToken: string;
		nextToken?: string;
		maxResults?: number;
		locale?: GetExclusionsPreviewRequestLocale;
	}

	export enum GetExclusionsPreviewRequestLocale { EN_US = 0 }

	export interface GetTelemetryMetadataResponse {
		telemetryMetadata: Array<TelemetryMetadata>;
	}

	export interface GetTelemetryMetadataRequest {
		assessmentRunArn: string;
	}

	export interface ListAssessmentRunAgentsResponse {
		assessmentRunAgents: Array<AssessmentRunAgent>;
		nextToken?: string;
	}

	export interface ListAssessmentRunAgentsRequest {
		assessmentRunArn: string;

		/**Contains information about an Amazon Inspector agent. This data type is used as a request parameter in the <a>ListAssessmentRunAgents</a> action. */
		filter?: AgentFilter;
		nextToken?: string;
		maxResults?: number;
	}

	export interface ListAssessmentRunsResponse {
		assessmentRunArns: Array<Arn>;
		nextToken?: string;
	}

	export interface ListAssessmentRunsRequest {
		assessmentTemplateArns?: Array<Arn>;

		/**Used as the request parameter in the <a>ListAssessmentRuns</a> action. */
		filter?: AssessmentRunFilter;
		nextToken?: string;
		maxResults?: number;
	}

	export interface ListAssessmentTargetsResponse {
		assessmentTargetArns: Array<Arn>;
		nextToken?: string;
	}

	export interface ListAssessmentTargetsRequest {

		/**Used as the request parameter in the <a>ListAssessmentTargets</a> action. */
		filter?: AssessmentTargetFilter;
		nextToken?: string;
		maxResults?: number;
	}

	export interface ListAssessmentTemplatesResponse {
		assessmentTemplateArns: Array<Arn>;
		nextToken?: string;
	}

	export interface ListAssessmentTemplatesRequest {
		assessmentTargetArns?: Array<Arn>;

		/**Used as the request parameter in the <a>ListAssessmentTemplates</a> action. */
		filter?: AssessmentTemplateFilter;
		nextToken?: string;
		maxResults?: number;
	}

	export interface ListEventSubscriptionsResponse {
		subscriptions: Array<Subscription>;
		nextToken?: string;
	}

	export interface ListEventSubscriptionsRequest {
		resourceArn?: string;
		nextToken?: string;
		maxResults?: number;
	}

	export interface ListExclusionsResponse {
		exclusionArns: Array<Arn>;
		nextToken?: string;
	}

	export interface ListExclusionsRequest {
		assessmentRunArn: string;
		nextToken?: string;
		maxResults?: number;
	}

	export interface ListFindingsResponse {
		findingArns: Array<Arn>;
		nextToken?: string;
	}

	export interface ListFindingsRequest {
		assessmentRunArns?: Array<Arn>;

		/**This data type is used as a request parameter in the <a>ListFindings</a> action. */
		filter?: FindingFilter;
		nextToken?: string;
		maxResults?: number;
	}

	export interface ListRulesPackagesResponse {
		rulesPackageArns: Array<Arn>;
		nextToken?: string;
	}

	export interface ListRulesPackagesRequest {
		nextToken?: string;
		maxResults?: number;
	}

	export interface ListTagsForResourceResponse {
		tags: Array<Tag>;
	}

	export interface ListTagsForResourceRequest {
		resourceArn: string;
	}

	export interface PreviewAgentsResponse {
		agentPreviews: Array<AgentPreview>;
		nextToken?: string;
	}

	export interface PreviewAgentsRequest {
		previewAgentsArn: string;
		nextToken?: string;
		maxResults?: number;
	}

	export interface RegisterCrossAccountAccessRoleRequest {
		roleArn: string;
	}

	export interface RemoveAttributesFromFindingsResponse {
		failedItems: FailedItems;
	}

	export interface RemoveAttributesFromFindingsRequest {
		findingArns: Array<Arn>;
		attributeKeys: Array<AttributeKey>;
	}

	export interface SetTagsForResourceRequest {
		resourceArn: string;
		tags?: Array<Tag>;
	}

	export interface StartAssessmentRunResponse {
		assessmentRunArn: string;
	}

	export interface StartAssessmentRunRequest {
		assessmentTemplateArn: string;
		assessmentRunName?: string;
	}

	export interface StopAssessmentRunRequest {
		assessmentRunArn: string;
		stopAction?: StopAssessmentRunRequestStopAction;
	}

	export enum StopAssessmentRunRequestStopAction { START_EVALUATION = 0, SKIP_EVALUATION = 1 }

	export interface SubscribeToEventRequest {
		resourceArn: string;
		event: SubscribeToEventRequestEvent;
		topicArn: string;
	}

	export enum SubscribeToEventRequestEvent { ASSESSMENT_RUN_STARTED = 0, ASSESSMENT_RUN_COMPLETED = 1, ASSESSMENT_RUN_STATE_CHANGED = 2, FINDING_REPORTED = 3, OTHER = 4 }

	export interface UnsubscribeFromEventRequest {
		resourceArn: string;
		event: UnsubscribeFromEventRequestEvent;
		topicArn: string;
	}

	export enum UnsubscribeFromEventRequestEvent { ASSESSMENT_RUN_STARTED = 0, ASSESSMENT_RUN_COMPLETED = 1, ASSESSMENT_RUN_STATE_CHANGED = 2, FINDING_REPORTED = 3, OTHER = 4 }

	export interface UpdateAssessmentTargetRequest {
		assessmentTargetArn: string;
		assessmentTargetName: string;
		resourceGroupArn?: string;
	}


	/**Contains information about an Amazon Inspector agent. This data type is used as a request parameter in the <a>ListAssessmentRunAgents</a> action. */
	export interface AgentFilter {
		agentHealths: Array<AgentHealth>;
		agentHealthCodes: Array<AgentHealthCode>;
	}

	export enum AgentHealth { HEALTHY = 0, UNHEALTHY = 1, UNKNOWN = 2 }

	export enum AgentHealthCode { IDLE = 0, RUNNING = 1, SHUTDOWN = 2, UNHEALTHY = 3, THROTTLED = 4, UNKNOWN = 5 }


	/**Used as a response element in the <a>PreviewAgents</a> action. */
	export interface AgentPreview {
		hostname?: string;
		agentId: string;
		autoScalingGroup?: string;
		agentHealth?: AgentPreviewAgentHealth;
		agentVersion?: string;
		operatingSystem?: string;
		kernelVersion?: string;
		ipv4Address?: string;
	}

	export enum AgentPreviewAgentHealth { HEALTHY = 0, UNHEALTHY = 1, UNKNOWN = 2 }

	export enum AssessmentRunState { CREATED = 0, START_DATA_COLLECTION_PENDING = 1, START_DATA_COLLECTION_IN_PROGRESS = 2, COLLECTING_DATA = 3, STOP_DATA_COLLECTION_PENDING = 4, DATA_COLLECTED = 5, START_EVALUATING_RULES_PENDING = 6, EVALUATING_RULES = 7, FAILED = 8, ERROR = 9, COMPLETED = 10, COMPLETED_WITH_ERRORS = 11, CANCELED = 12 }


	/**<p>A snapshot of an Amazon Inspector assessment run that contains the findings of the assessment run .</p> <p>Used as the response element in the <a>DescribeAssessmentRuns</a> action.</p> */
	export interface AssessmentRun {
		arn: string;
		name: string;
		assessmentTemplateArn: string;
		state: AssessmentRunState;
		durationInSeconds: number;
		rulesPackageArns: Array<Arn>;
		userAttributesForFindings: Array<Attribute>;
		createdAt: Date;
		startedAt?: Date;
		completedAt?: Date;
		stateChangedAt: Date;
		dataCollected: boolean;
		stateChanges: Array<AssessmentRunStateChange>;
		notifications: Array<AssessmentRunNotification>;
		findingCounts: AssessmentRunFindingCounts;
	}

	export enum AssessmentRunState { CREATED = 0, START_DATA_COLLECTION_PENDING = 1, START_DATA_COLLECTION_IN_PROGRESS = 2, COLLECTING_DATA = 3, STOP_DATA_COLLECTION_PENDING = 4, DATA_COLLECTED = 5, START_EVALUATING_RULES_PENDING = 6, EVALUATING_RULES = 7, FAILED = 8, ERROR = 9, COMPLETED = 10, COMPLETED_WITH_ERRORS = 11, CANCELED = 12 }


	/**Contains information about an Amazon Inspector agent. This data type is used as a response element in the <a>ListAssessmentRunAgents</a> action. */
	export interface AssessmentRunAgent {
		agentId: string;
		assessmentRunArn: string;
		agentHealth: AssessmentRunAgentAgentHealth;
		agentHealthCode: AssessmentRunAgentAgentHealthCode;
		agentHealthDetails?: string;
		autoScalingGroup?: string;
		telemetryMetadata: Array<TelemetryMetadata>;
	}

	export enum AssessmentRunAgentAgentHealth { HEALTHY = 0, UNHEALTHY = 1, UNKNOWN = 2 }

	export enum AssessmentRunAgentAgentHealthCode { IDLE = 0, RUNNING = 1, SHUTDOWN = 2, UNHEALTHY = 3, THROTTLED = 4, UNKNOWN = 5 }


	/**This data type is used in the <a>AssessmentTemplateFilter</a> data type. */
	export interface DurationRange {
		minSeconds?: number;
		maxSeconds?: number;
	}


	/**This data type is used in the <a>AssessmentRunFilter</a> data type. */
	export interface TimestampRange {
		beginDate?: Date;
		endDate?: Date;
	}


	/**Used as the request parameter in the <a>ListAssessmentRuns</a> action. */
	export interface AssessmentRunFilter {
		namePattern?: string;
		states?: Array<AssessmentRunState>;

		/**This data type is used in the <a>AssessmentTemplateFilter</a> data type. */
		durationRange?: DurationRange;
		rulesPackageArns?: Array<Arn>;

		/**This data type is used in the <a>AssessmentRunFilter</a> data type. */
		startTimeRange?: TimestampRange;

		/**This data type is used in the <a>AssessmentRunFilter</a> data type. */
		completionTimeRange?: TimestampRange;

		/**This data type is used in the <a>AssessmentRunFilter</a> data type. */
		stateChangeTimeRange?: TimestampRange;
	}

	export enum InspectorEvent { ASSESSMENT_RUN_STARTED = 0, ASSESSMENT_RUN_COMPLETED = 1, ASSESSMENT_RUN_STATE_CHANGED = 2, FINDING_REPORTED = 3, OTHER = 4 }

	export enum AssessmentRunNotificationSnsStatusCode { SUCCESS = 0, TOPIC_DOES_NOT_EXIST = 1, ACCESS_DENIED = 2, INTERNAL_ERROR = 3 }


	/**Used as one of the elements of the <a>AssessmentRun</a> data type. */
	export interface AssessmentRunNotification {
		date: Date;
		event: AssessmentRunNotificationEvent;
		message?: string;
		error: boolean;
		snsTopicArn?: string;
		snsPublishStatusCode?: AssessmentRunNotificationSnsPublishStatusCode;
	}

	export enum AssessmentRunNotificationEvent { ASSESSMENT_RUN_STARTED = 0, ASSESSMENT_RUN_COMPLETED = 1, ASSESSMENT_RUN_STATE_CHANGED = 2, FINDING_REPORTED = 3, OTHER = 4 }

	export enum AssessmentRunNotificationSnsPublishStatusCode { SUCCESS = 0, TOPIC_DOES_NOT_EXIST = 1, ACCESS_DENIED = 2, INTERNAL_ERROR = 3 }


	/**Used as one of the elements of the <a>AssessmentRun</a> data type. */
	export interface AssessmentRunStateChange {
		stateChangedAt: Date;
		state: AssessmentRunStateChangeState;
	}

	export enum AssessmentRunStateChangeState { CREATED = 0, START_DATA_COLLECTION_PENDING = 1, START_DATA_COLLECTION_IN_PROGRESS = 2, COLLECTING_DATA = 3, STOP_DATA_COLLECTION_PENDING = 4, DATA_COLLECTED = 5, START_EVALUATING_RULES_PENDING = 6, EVALUATING_RULES = 7, FAILED = 8, ERROR = 9, COMPLETED = 10, COMPLETED_WITH_ERRORS = 11, CANCELED = 12 }


	/**Contains information about an Amazon Inspector application. This data type is used as the response element in the <a>DescribeAssessmentTargets</a> action. */
	export interface AssessmentTarget {
		arn: string;
		name: string;
		resourceGroupArn?: string;
		createdAt: Date;
		updatedAt: Date;
	}


	/**Used as the request parameter in the <a>ListAssessmentTargets</a> action. */
	export interface AssessmentTargetFilter {
		assessmentTargetNamePattern?: string;
	}


	/**Contains information about an Amazon Inspector assessment template. This data type is used as the response element in the <a>DescribeAssessmentTemplates</a> action. */
	export interface AssessmentTemplate {
		arn: string;
		name: string;
		assessmentTargetArn: string;
		durationInSeconds: number;
		rulesPackageArns: Array<Arn>;
		userAttributesForFindings: Array<Attribute>;
		lastAssessmentRunArn?: string;
		assessmentRunCount: number;
		createdAt: Date;
	}


	/**Used as the request parameter in the <a>ListAssessmentTemplates</a> action. */
	export interface AssessmentTemplateFilter {
		namePattern?: string;

		/**This data type is used in the <a>AssessmentTemplateFilter</a> data type. */
		durationRange?: DurationRange;
		rulesPackageArns?: Array<Arn>;
	}


	/**A collection of attributes of the host from which the finding is generated. */
	export interface AssetAttributes {
		schemaVersion: number;
		agentId?: string;
		autoScalingGroup?: string;
		amiId?: string;
		hostname?: string;
		ipv4Addresses?: Array<Ipv4Address>;
		tags?: Array<Tag>;
		networkInterfaces?: Array<NetworkInterface>;
	}

	export enum AssetType { ec2-instance = 0 }


	/**This data type is used as a request parameter in the <a>AddAttributesToFindings</a> and <a>CreateAssessmentTemplate</a> actions. */
	export interface Attribute {
		key: string;
		value?: string;
	}

	export enum Locale { EN_US = 0 }


	/**This data type is used in the <a>Subscription</a> data type. */
	export interface EventSubscription {
		event: EventSubscriptionEvent;
		subscribedAt: Date;
	}

	export enum EventSubscriptionEvent { ASSESSMENT_RUN_STARTED = 0, ASSESSMENT_RUN_COMPLETED = 1, ASSESSMENT_RUN_STATE_CHANGED = 2, FINDING_REPORTED = 3, OTHER = 4 }


	/**Contains information about what was excluded from an assessment run. */
	export interface Exclusion {
		arn: string;
		title: string;
		description: string;
		recommendation: string;
		scopes: Array<Scope>;
		attributes?: Array<Attribute>;
	}


	/**Contains information about what is excluded from an assessment run given the current state of the assessment template. */
	export interface ExclusionPreview {
		title: string;
		description: string;
		recommendation: string;
		scopes: Array<Scope>;
		attributes?: Array<Attribute>;
	}

	export enum FailedItemErrorCode { INVALID_ARN = 0, DUPLICATE_ARN = 1, ITEM_DOES_NOT_EXIST = 2, ACCESS_DENIED = 3, LIMIT_EXCEEDED = 4, INTERNAL_ERROR = 5 }


	/**Includes details about the failed items. */
	export interface FailedItemDetails {
		failureCode: FailedItemDetailsFailureCode;
		retryable: boolean;
	}

	export enum FailedItemDetailsFailureCode { INVALID_ARN = 0, DUPLICATE_ARN = 1, ITEM_DOES_NOT_EXIST = 2, ACCESS_DENIED = 3, LIMIT_EXCEEDED = 4, INTERNAL_ERROR = 5 }


	/**This data type is used in the <a>Finding</a> data type. */
	export interface InspectorServiceAttributes {
		schemaVersion: number;
		assessmentRunArn?: string;
		rulesPackageArn?: string;
	}

	export enum Severity { Low = 0, Medium = 1, High = 2, Informational = 3, Undefined = 4 }


	/**Contains information about an Amazon Inspector finding. This data type is used as the response element in the <a>DescribeFindings</a> action. */
	export interface Finding {
		arn: string;
		schemaVersion?: number;
		service?: string;

		/**This data type is used in the <a>Finding</a> data type. */
		serviceAttributes?: InspectorServiceAttributes;
		assetType?: FindingAssetType;

		/**A collection of attributes of the host from which the finding is generated. */
		assetAttributes?: AssetAttributes;
		id?: string;
		title?: string;
		description?: string;
		recommendation?: string;
		severity?: FindingSeverity;
		numericSeverity?: number;
		confidence?: number;
		indicatorOfCompromise?: boolean;
		attributes: Array<Attribute>;
		userAttributes: Array<Attribute>;
		createdAt: Date;
		updatedAt: Date;
	}

	export enum FindingAssetType { ec2-instance = 0 }

	export enum FindingSeverity { Low = 0, Medium = 1, High = 2, Informational = 3, Undefined = 4 }


	/**This data type is used as a request parameter in the <a>ListFindings</a> action. */
	export interface FindingFilter {
		agentIds?: Array<AgentId>;
		autoScalingGroups?: Array<AutoScalingGroup>;
		ruleNames?: Array<RuleName>;
		severities?: Array<Severity>;
		rulesPackageArns?: Array<Arn>;
		attributes?: Array<Attribute>;
		userAttributes?: Array<Attribute>;

		/**This data type is used in the <a>AssessmentRunFilter</a> data type. */
		creationTimeRange?: TimestampRange;
	}

	export enum ReportFileFormat { HTML = 0, PDF = 1 }

	export enum ReportType { FINDING = 0, FULL = 1 }

	export enum ReportStatus { WORK_IN_PROGRESS = 0, FAILED = 1, COMPLETED = 2 }

	export enum PreviewStatus { WORK_IN_PROGRESS = 0, COMPLETED = 1 }


	/**Contains information about the network interfaces interacting with an EC2 instance. This data type is used as one of the elements of the <a>AssetAttributes</a> data type. */
	export interface NetworkInterface {
		networkInterfaceId?: string;
		subnetId?: string;
		vpcId?: string;
		privateDnsName?: string;
		privateIpAddress?: string;
		privateIpAddresses?: Array<PrivateIp>;
		publicDnsName?: string;
		publicIp?: string;
		ipv6Addresses?: Array<Text>;
		securityGroups?: Array<SecurityGroup>;
	}


	/**Contains information about a private IP address associated with a network interface. This data type is used as a response element in the <a>DescribeFindings</a> action. */
	export interface PrivateIp {
		privateDnsName?: string;
		privateIpAddress?: string;
	}


	/**Contains information about a resource group. The resource group defines a set of tags that, when queried, identify the AWS resources that make up the assessment target. This data type is used as the response element in the <a>DescribeResourceGroups</a> action. */
	export interface ResourceGroup {
		arn: string;
		tags: Array<ResourceGroupTag>;
		createdAt: Date;
	}


	/**This data type is used as one of the elements of the <a>ResourceGroup</a> data type. */
	export interface ResourceGroupTag {
		key: string;
		value?: string;
	}


	/**Contains information about an Amazon Inspector rules package. This data type is used as the response element in the <a>DescribeRulesPackages</a> action. */
	export interface RulesPackage {
		arn: string;
		name: string;
		version: string;
		provider: string;
		description?: string;
	}

	export enum ScopeType { INSTANCE_ID = 0, RULES_PACKAGE_ARN = 1 }


	/**This data type contains key-value pairs that identify various Amazon resources. */
	export interface Scope {
		key?: ScopeKey;
		value?: string;
	}

	export enum ScopeKey { INSTANCE_ID = 0, RULES_PACKAGE_ARN = 1 }


	/**Contains information about a security group associated with a network interface. This data type is used as one of the elements of the <a>NetworkInterface</a> data type. */
	export interface SecurityGroup {
		groupName?: string;
		groupId?: string;
	}

	export enum StopAction { START_EVALUATION = 0, SKIP_EVALUATION = 1 }


	/**This data type is used as a response element in the <a>ListEventSubscriptions</a> action. */
	export interface Subscription {
		resourceArn: string;
		topicArn: string;
		eventSubscriptions: Array<EventSubscription>;
	}


	/**A key and value pair. This data type is used as a request parameter in the <a>SetTagsForResource</a> action and a response element in the <a>ListTagsForResource</a> action. */
	export interface Tag {
		key: string;
		value?: string;
	}


	/**The metadata about the Amazon Inspector application data metrics collected by the agent. This data type is used as the response element in the <a>GetTelemetryMetadata</a> action. */
	export interface TelemetryMetadata {
		messageType: string;
		count: number;
		dataSize?: number;
	}

	export class DemoClient {
		constructor(private baseUri: string = HttpClient.locationOrigin, private httpClient: HttpClientBase = new HttpClient(), private error?: (xhr: JQueryXHR, ajaxOptions: string, thrown: string) => any, private statusCode?: { [key: string]: any; }) {
		}

		/**
		 * Assigns attributes (key and value pairs) to the findings that are specified by the ARNs of the findings.
		 * Post /#X-Amz-Target=InspectorService.AddAttributesToFindings
		 * @return {AddAttributesToFindingsResponse} Success
		 */
		AddAttributesToFindings(callback: (data : AddAttributesToFindingsResponse) => any, requestBody: AddAttributesToFindingsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=InspectorService.AddAttributesToFindings', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Creates a new assessment target using the ARN of the resource group that is generated by <a>CreateResourceGroup</a>. If resourceGroupArn is not specified, all EC2 instances in the current AWS account and region are included in the assessment target. If the <a href="https://docs.aws.amazon.com/inspector/latest/userguide/inspector_slr.html">service-linked role</a> isn’t already registered, this action also creates and registers a service-linked role to grant Amazon Inspector access to AWS Services needed to perform security assessments. You can create up to 50 assessment targets per AWS account. You can run up to 500 concurrent agents per AWS account. For more information, see <a href="https://docs.aws.amazon.com/inspector/latest/userguide/inspector_applications.html"> Amazon Inspector Assessment Targets</a>.
		 * Post /#X-Amz-Target=InspectorService.CreateAssessmentTarget
		 * @return {CreateAssessmentTargetResponse} Success
		 */
		CreateAssessmentTarget(callback: (data : CreateAssessmentTargetResponse) => any, requestBody: CreateAssessmentTargetRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=InspectorService.CreateAssessmentTarget', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Creates an assessment template for the assessment target that is specified by the ARN of the assessment target. If the <a href="https://docs.aws.amazon.com/inspector/latest/userguide/inspector_slr.html">service-linked role</a> isn’t already registered, this action also creates and registers a service-linked role to grant Amazon Inspector access to AWS Services needed to perform security assessments.
		 * Post /#X-Amz-Target=InspectorService.CreateAssessmentTemplate
		 * @return {CreateAssessmentTemplateResponse} Success
		 */
		CreateAssessmentTemplate(callback: (data : CreateAssessmentTemplateResponse) => any, requestBody: CreateAssessmentTemplateRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=InspectorService.CreateAssessmentTemplate', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Starts the generation of an exclusions preview for the specified assessment template. The exclusions preview lists the potential exclusions (ExclusionPreview) that Inspector can detect before it runs the assessment.
		 * Post /#X-Amz-Target=InspectorService.CreateExclusionsPreview
		 * @return {CreateExclusionsPreviewResponse} Success
		 */
		CreateExclusionsPreview(callback: (data : CreateExclusionsPreviewResponse) => any, requestBody: CreateExclusionsPreviewRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=InspectorService.CreateExclusionsPreview', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Creates a resource group using the specified set of tags (key and value pairs) that are used to select the EC2 instances to be included in an Amazon Inspector assessment target. The created resource group is then used to create an Amazon Inspector assessment target. For more information, see <a>CreateAssessmentTarget</a>.
		 * Post /#X-Amz-Target=InspectorService.CreateResourceGroup
		 * @return {CreateResourceGroupResponse} Success
		 */
		CreateResourceGroup(callback: (data : CreateResourceGroupResponse) => any, requestBody: CreateResourceGroupRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=InspectorService.CreateResourceGroup', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Deletes the assessment run that is specified by the ARN of the assessment run.
		 * Post /#X-Amz-Target=InspectorService.DeleteAssessmentRun
		 * @return {void} Success
		 */
		DeleteAssessmentRun(callback: (data : void) => any, requestBody: DeleteAssessmentRunRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=InspectorService.DeleteAssessmentRun', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Deletes the assessment target that is specified by the ARN of the assessment target.
		 * Post /#X-Amz-Target=InspectorService.DeleteAssessmentTarget
		 * @return {void} Success
		 */
		DeleteAssessmentTarget(callback: (data : void) => any, requestBody: DeleteAssessmentTargetRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=InspectorService.DeleteAssessmentTarget', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Deletes the assessment template that is specified by the ARN of the assessment template.
		 * Post /#X-Amz-Target=InspectorService.DeleteAssessmentTemplate
		 * @return {void} Success
		 */
		DeleteAssessmentTemplate(callback: (data : void) => any, requestBody: DeleteAssessmentTemplateRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=InspectorService.DeleteAssessmentTemplate', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Describes the assessment runs that are specified by the ARNs of the assessment runs.
		 * Post /#X-Amz-Target=InspectorService.DescribeAssessmentRuns
		 * @return {DescribeAssessmentRunsResponse} Success
		 */
		DescribeAssessmentRuns(callback: (data : DescribeAssessmentRunsResponse) => any, requestBody: DescribeAssessmentRunsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=InspectorService.DescribeAssessmentRuns', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Describes the assessment targets that are specified by the ARNs of the assessment targets.
		 * Post /#X-Amz-Target=InspectorService.DescribeAssessmentTargets
		 * @return {DescribeAssessmentTargetsResponse} Success
		 */
		DescribeAssessmentTargets(callback: (data : DescribeAssessmentTargetsResponse) => any, requestBody: DescribeAssessmentTargetsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=InspectorService.DescribeAssessmentTargets', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Describes the assessment templates that are specified by the ARNs of the assessment templates.
		 * Post /#X-Amz-Target=InspectorService.DescribeAssessmentTemplates
		 * @return {DescribeAssessmentTemplatesResponse} Success
		 */
		DescribeAssessmentTemplates(callback: (data : DescribeAssessmentTemplatesResponse) => any, requestBody: DescribeAssessmentTemplatesRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=InspectorService.DescribeAssessmentTemplates', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Describes the IAM role that enables Amazon Inspector to access your AWS account.
		 * Post /#X-Amz-Target=InspectorService.DescribeCrossAccountAccessRole
		 * @return {DescribeCrossAccountAccessRoleResponse} Success
		 */
		DescribeCrossAccountAccessRole(callback: (data : DescribeCrossAccountAccessRoleResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=InspectorService.DescribeCrossAccountAccessRole', null, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Describes the exclusions that are specified by the exclusions' ARNs.
		 * Post /#X-Amz-Target=InspectorService.DescribeExclusions
		 * @return {DescribeExclusionsResponse} Success
		 */
		DescribeExclusions(callback: (data : DescribeExclusionsResponse) => any, requestBody: DescribeExclusionsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=InspectorService.DescribeExclusions', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Describes the findings that are specified by the ARNs of the findings.
		 * Post /#X-Amz-Target=InspectorService.DescribeFindings
		 * @return {DescribeFindingsResponse} Success
		 */
		DescribeFindings(callback: (data : DescribeFindingsResponse) => any, requestBody: DescribeFindingsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=InspectorService.DescribeFindings', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Describes the resource groups that are specified by the ARNs of the resource groups.
		 * Post /#X-Amz-Target=InspectorService.DescribeResourceGroups
		 * @return {DescribeResourceGroupsResponse} Success
		 */
		DescribeResourceGroups(callback: (data : DescribeResourceGroupsResponse) => any, requestBody: DescribeResourceGroupsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=InspectorService.DescribeResourceGroups', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Describes the rules packages that are specified by the ARNs of the rules packages.
		 * Post /#X-Amz-Target=InspectorService.DescribeRulesPackages
		 * @return {DescribeRulesPackagesResponse} Success
		 */
		DescribeRulesPackages(callback: (data : DescribeRulesPackagesResponse) => any, requestBody: DescribeRulesPackagesRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=InspectorService.DescribeRulesPackages', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Produces an assessment report that includes detailed and comprehensive results of a specified assessment run.
		 * Post /#X-Amz-Target=InspectorService.GetAssessmentReport
		 * @return {GetAssessmentReportResponse} Success
		 */
		GetAssessmentReport(callback: (data : GetAssessmentReportResponse) => any, requestBody: GetAssessmentReportRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=InspectorService.GetAssessmentReport', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Retrieves the exclusions preview (a list of ExclusionPreview objects) specified by the preview token. You can obtain the preview token by running the CreateExclusionsPreview API.
		 * Post /#X-Amz-Target=InspectorService.GetExclusionsPreview
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetExclusionsPreviewResponse} Success
		 */
		GetExclusionsPreview(maxResults: string, nextToken: string, callback: (data : GetExclusionsPreviewResponse) => any, requestBody: GetExclusionsPreviewRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=InspectorService.GetExclusionsPreview?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Information about the data that is collected for the specified assessment run.
		 * Post /#X-Amz-Target=InspectorService.GetTelemetryMetadata
		 * @return {GetTelemetryMetadataResponse} Success
		 */
		GetTelemetryMetadata(callback: (data : GetTelemetryMetadataResponse) => any, requestBody: GetTelemetryMetadataRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=InspectorService.GetTelemetryMetadata', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Lists the agents of the assessment runs that are specified by the ARNs of the assessment runs.
		 * Post /#X-Amz-Target=InspectorService.ListAssessmentRunAgents
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListAssessmentRunAgentsResponse} Success
		 */
		ListAssessmentRunAgents(maxResults: string, nextToken: string, callback: (data : ListAssessmentRunAgentsResponse) => any, requestBody: ListAssessmentRunAgentsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=InspectorService.ListAssessmentRunAgents?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Lists the assessment runs that correspond to the assessment templates that are specified by the ARNs of the assessment templates.
		 * Post /#X-Amz-Target=InspectorService.ListAssessmentRuns
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListAssessmentRunsResponse} Success
		 */
		ListAssessmentRuns(maxResults: string, nextToken: string, callback: (data : ListAssessmentRunsResponse) => any, requestBody: ListAssessmentRunsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=InspectorService.ListAssessmentRuns?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Lists the ARNs of the assessment targets within this AWS account. For more information about assessment targets, see <a href="https://docs.aws.amazon.com/inspector/latest/userguide/inspector_applications.html">Amazon Inspector Assessment Targets</a>.
		 * Post /#X-Amz-Target=InspectorService.ListAssessmentTargets
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListAssessmentTargetsResponse} Success
		 */
		ListAssessmentTargets(maxResults: string, nextToken: string, callback: (data : ListAssessmentTargetsResponse) => any, requestBody: ListAssessmentTargetsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=InspectorService.ListAssessmentTargets?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Lists the assessment templates that correspond to the assessment targets that are specified by the ARNs of the assessment targets.
		 * Post /#X-Amz-Target=InspectorService.ListAssessmentTemplates
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListAssessmentTemplatesResponse} Success
		 */
		ListAssessmentTemplates(maxResults: string, nextToken: string, callback: (data : ListAssessmentTemplatesResponse) => any, requestBody: ListAssessmentTemplatesRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=InspectorService.ListAssessmentTemplates?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Lists all the event subscriptions for the assessment template that is specified by the ARN of the assessment template. For more information, see <a>SubscribeToEvent</a> and <a>UnsubscribeFromEvent</a>.
		 * Post /#X-Amz-Target=InspectorService.ListEventSubscriptions
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListEventSubscriptionsResponse} Success
		 */
		ListEventSubscriptions(maxResults: string, nextToken: string, callback: (data : ListEventSubscriptionsResponse) => any, requestBody: ListEventSubscriptionsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=InspectorService.ListEventSubscriptions?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * List exclusions that are generated by the assessment run.
		 * Post /#X-Amz-Target=InspectorService.ListExclusions
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListExclusionsResponse} Success
		 */
		ListExclusions(maxResults: string, nextToken: string, callback: (data : ListExclusionsResponse) => any, requestBody: ListExclusionsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=InspectorService.ListExclusions?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Lists findings that are generated by the assessment runs that are specified by the ARNs of the assessment runs.
		 * Post /#X-Amz-Target=InspectorService.ListFindings
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListFindingsResponse} Success
		 */
		ListFindings(maxResults: string, nextToken: string, callback: (data : ListFindingsResponse) => any, requestBody: ListFindingsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=InspectorService.ListFindings?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Lists all available Amazon Inspector rules packages.
		 * Post /#X-Amz-Target=InspectorService.ListRulesPackages
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListRulesPackagesResponse} Success
		 */
		ListRulesPackages(maxResults: string, nextToken: string, callback: (data : ListRulesPackagesResponse) => any, requestBody: ListRulesPackagesRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=InspectorService.ListRulesPackages?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Lists all tags associated with an assessment template.
		 * Post /#X-Amz-Target=InspectorService.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(callback: (data : ListTagsForResourceResponse) => any, requestBody: ListTagsForResourceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=InspectorService.ListTagsForResource', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Previews the agents installed on the EC2 instances that are part of the specified assessment target.
		 * Post /#X-Amz-Target=InspectorService.PreviewAgents
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {PreviewAgentsResponse} Success
		 */
		PreviewAgents(maxResults: string, nextToken: string, callback: (data : PreviewAgentsResponse) => any, requestBody: PreviewAgentsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=InspectorService.PreviewAgents?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Registers the IAM role that grants Amazon Inspector access to AWS Services needed to perform security assessments.
		 * Post /#X-Amz-Target=InspectorService.RegisterCrossAccountAccessRole
		 * @return {void} Success
		 */
		RegisterCrossAccountAccessRole(callback: (data : void) => any, requestBody: RegisterCrossAccountAccessRoleRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=InspectorService.RegisterCrossAccountAccessRole', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Removes entire attributes (key and value pairs) from the findings that are specified by the ARNs of the findings where an attribute with the specified key exists.
		 * Post /#X-Amz-Target=InspectorService.RemoveAttributesFromFindings
		 * @return {RemoveAttributesFromFindingsResponse} Success
		 */
		RemoveAttributesFromFindings(callback: (data : RemoveAttributesFromFindingsResponse) => any, requestBody: RemoveAttributesFromFindingsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=InspectorService.RemoveAttributesFromFindings', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Sets tags (key and value pairs) to the assessment template that is specified by the ARN of the assessment template.
		 * Post /#X-Amz-Target=InspectorService.SetTagsForResource
		 * @return {void} Success
		 */
		SetTagsForResource(callback: (data : void) => any, requestBody: SetTagsForResourceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=InspectorService.SetTagsForResource', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Starts the assessment run specified by the ARN of the assessment template. For this API to function properly, you must not exceed the limit of running up to 500 concurrent agents per AWS account.
		 * Post /#X-Amz-Target=InspectorService.StartAssessmentRun
		 * @return {StartAssessmentRunResponse} Success
		 */
		StartAssessmentRun(callback: (data : StartAssessmentRunResponse) => any, requestBody: StartAssessmentRunRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=InspectorService.StartAssessmentRun', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Stops the assessment run that is specified by the ARN of the assessment run.
		 * Post /#X-Amz-Target=InspectorService.StopAssessmentRun
		 * @return {void} Success
		 */
		StopAssessmentRun(callback: (data : void) => any, requestBody: StopAssessmentRunRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=InspectorService.StopAssessmentRun', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Enables the process of sending Amazon Simple Notification Service (SNS) notifications about a specified event to a specified SNS topic.
		 * Post /#X-Amz-Target=InspectorService.SubscribeToEvent
		 * @return {void} Success
		 */
		SubscribeToEvent(callback: (data : void) => any, requestBody: SubscribeToEventRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=InspectorService.SubscribeToEvent', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Disables the process of sending Amazon Simple Notification Service (SNS) notifications about a specified event to a specified SNS topic.
		 * Post /#X-Amz-Target=InspectorService.UnsubscribeFromEvent
		 * @return {void} Success
		 */
		UnsubscribeFromEvent(callback: (data : void) => any, requestBody: UnsubscribeFromEventRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=InspectorService.UnsubscribeFromEvent', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Updates the assessment target that is specified by the ARN of the assessment target.</p> <p>If resourceGroupArn is not specified, all EC2 instances in the current AWS account and region are included in the assessment target.</p>
		 * Post /#X-Amz-Target=InspectorService.UpdateAssessmentTarget
		 * @return {void} Success
		 */
		UpdateAssessmentTarget(callback: (data : void) => any, requestBody: UpdateAssessmentTargetRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=InspectorService.UpdateAssessmentTarget', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}
	}

}

