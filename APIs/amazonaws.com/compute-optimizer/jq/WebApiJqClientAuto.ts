///<reference path="HttpClient.ts" />
namespace My_Demo_Client {
	export interface GetAutoScalingGroupRecommendationsResponse {
		nextToken?: string;
		autoScalingGroupRecommendations?: Array<AutoScalingGroupRecommendation>;
		errors?: Array<GetRecommendationError>;
	}

	export interface GetAutoScalingGroupRecommendationsRequest {
		accountIds?: Array<AccountId>;
		autoScalingGroupArns?: Array<AutoScalingGroupArn>;
		nextToken?: string;
		maxResults?: number;
		filters?: Array<Filter>;
	}

	export interface GetEC2InstanceRecommendationsResponse {
		nextToken?: string;
		instanceRecommendations?: Array<InstanceRecommendation>;
		errors?: Array<GetRecommendationError>;
	}

	export interface GetEC2InstanceRecommendationsRequest {
		instanceArns?: Array<InstanceArn>;
		nextToken?: string;
		maxResults?: number;
		filters?: Array<Filter>;
		accountIds?: Array<AccountId>;
	}

	export interface GetEC2RecommendationProjectedMetricsResponse {
		recommendedOptionProjectedMetrics?: Array<RecommendedOptionProjectedMetric>;
	}

	export interface GetEC2RecommendationProjectedMetricsRequest {
		instanceArn: string;
		stat: GetEC2RecommendationProjectedMetricsRequestStat;
		period: number;
		startTime: Date;
		endTime: Date;
	}

	export enum GetEC2RecommendationProjectedMetricsRequestStat { Maximum = 0, Average = 1 }

	export interface GetEnrollmentStatusResponse {
		status?: GetEnrollmentStatusResponseStatus;
		statusReason?: string;
		memberAccountsEnrolled?: boolean;
	}

	export enum GetEnrollmentStatusResponseStatus { Active = 0, Inactive = 1, Pending = 2, Failed = 3 }

	export interface GetRecommendationSummariesResponse {
		nextToken?: string;
		recommendationSummaries?: Array<RecommendationSummary>;
	}

	export interface GetRecommendationSummariesRequest {
		accountIds?: Array<AccountId>;
		nextToken?: string;
		maxResults?: number;
	}

	export interface UpdateEnrollmentStatusResponse {
		status?: UpdateEnrollmentStatusResponseStatus;
		statusReason?: string;
	}

	export enum UpdateEnrollmentStatusResponseStatus { Active = 0, Inactive = 1, Pending = 2, Failed = 3 }

	export interface UpdateEnrollmentStatusRequest {
		status: UpdateEnrollmentStatusRequestStatus;
		includeMemberAccounts?: boolean;
	}

	export enum UpdateEnrollmentStatusRequestStatus { Active = 0, Inactive = 1, Pending = 2, Failed = 3 }


	/**Describes the configuration of an Auto Scaling group. */
	export interface AutoScalingGroupConfiguration {
		desiredCapacity?: number;
		minSize?: number;
		maxSize?: number;
		instanceType?: string;
	}

	export enum Finding { Underprovisioned = 0, Overprovisioned = 1, Optimized = 2, NotOptimized = 3 }


	/**Describes an Auto Scaling group recommendation. */
	export interface AutoScalingGroupRecommendation {
		accountId?: string;
		autoScalingGroupArn?: string;
		autoScalingGroupName?: string;
		finding?: AutoScalingGroupRecommendationFinding;
		utilizationMetrics?: Array<UtilizationMetric>;
		lookBackPeriodInDays?: number;

		/**Describes the configuration of an Auto Scaling group. */
		currentConfiguration?: AutoScalingGroupConfiguration;
		recommendationOptions?: Array<AutoScalingGroupRecommendationOption>;
		lastRefreshTimestamp?: Date;
	}

	export enum AutoScalingGroupRecommendationFinding { Underprovisioned = 0, Overprovisioned = 1, Optimized = 2, NotOptimized = 3 }


	/**Describes a recommendation option for an Auto Scaling group. */
	export interface AutoScalingGroupRecommendationOption {

		/**Describes the configuration of an Auto Scaling group. */
		configuration?: AutoScalingGroupConfiguration;
		projectedUtilizationMetrics?: Array<UtilizationMetric>;
		performanceRisk?: number;
		rank?: number;
	}

	export enum FilterName { Finding = 0, RecommendationSourceType = 1 }


	/**Describes a filter that returns a more specific list of recommendations. */
	export interface Filter {
		name?: FilterName;
		values?: Array<FilterValue>;
	}

	export enum FilterName { Finding = 0, RecommendationSourceType = 1 }

	export enum MetricStatistic { Maximum = 0, Average = 1 }

	export enum Status { Active = 0, Inactive = 1, Pending = 2, Failed = 3 }


	/**<p>Describes an error experienced when getting recommendations.</p> <p>For example, an error is returned if you request recommendations for an unsupported Auto Scaling group, or if you request recommendations for an instance of an unsupported instance family.</p> */
	export interface GetRecommendationError {
		identifier?: string;
		code?: string;
		message?: string;
	}


	/**Describes an Amazon EC2 instance recommendation. */
	export interface InstanceRecommendation {
		instanceArn?: string;
		accountId?: string;
		instanceName?: string;
		currentInstanceType?: string;
		finding?: InstanceRecommendationFinding;
		utilizationMetrics?: Array<UtilizationMetric>;
		lookBackPeriodInDays?: number;
		recommendationOptions?: Array<InstanceRecommendationOption>;
		recommendationSources?: Array<RecommendationSource>;
		lastRefreshTimestamp?: Date;
	}

	export enum InstanceRecommendationFinding { Underprovisioned = 0, Overprovisioned = 1, Optimized = 2, NotOptimized = 3 }


	/**Describes a recommendation option for an Amazon EC2 instance. */
	export interface InstanceRecommendationOption {
		instanceType?: string;
		projectedUtilizationMetrics?: Array<UtilizationMetric>;
		performanceRisk?: number;
		rank?: number;
	}

	export enum MetricName { Cpu = 0, Memory = 1 }


	/**Describes a projected utilization metric of a recommendation option, such as an Amazon EC2 instance. */
	export interface ProjectedMetric {
		name?: ProjectedMetricName;
		timestamps?: Array<Timestamp>;
		values?: Array<MetricValue>;
	}

	export enum ProjectedMetricName { Cpu = 0, Memory = 1 }


	/**Describes a utilization metric of a resource, such as an Amazon EC2 instance. */
	export interface UtilizationMetric {
		name?: UtilizationMetricName;
		statistic?: UtilizationMetricStatistic;
		value?: number;
	}

	export enum UtilizationMetricName { Cpu = 0, Memory = 1 }

	export enum UtilizationMetricStatistic { Maximum = 0, Average = 1 }

	export enum RecommendationSourceType { Ec2Instance = 0, AutoScalingGroup = 1 }


	/**Describes the source of a recommendation, such as an Amazon EC2 instance or Auto Scaling group. */
	export interface RecommendationSource {
		recommendationSourceArn?: string;
		recommendationSourceType?: RecommendationSourceRecommendationSourceType;
	}

	export enum RecommendationSourceRecommendationSourceType { Ec2Instance = 0, AutoScalingGroup = 1 }


	/**A summary of a recommendation. */
	export interface RecommendationSummary {
		summaries?: Array<Summary>;
		recommendationResourceType?: RecommendationSummaryRecommendationResourceType;
		accountId?: string;
	}

	export enum RecommendationSummaryRecommendationResourceType { Ec2Instance = 0, AutoScalingGroup = 1 }


	/**Describes a projected utilization metric of a recommendation option. */
	export interface RecommendedOptionProjectedMetric {
		recommendedInstanceType?: string;
		rank?: number;
		projectedMetrics?: Array<ProjectedMetric>;
	}


	/**The summary of a recommendation. */
	export interface Summary {
		name?: SummaryName;
		value?: number;
	}

	export enum SummaryName { Underprovisioned = 0, Overprovisioned = 1, Optimized = 2, NotOptimized = 3 }

	export class DemoClient {
		constructor(private baseUri: string = HttpClient.locationOrigin, private httpClient: HttpClientBase = new HttpClient(), private error?: (xhr: JQueryXHR, ajaxOptions: string, thrown: string) => any, private statusCode?: { [key: string]: any; }) {
		}

		/**
		 * <p>Returns Auto Scaling group recommendations.</p> <p>AWS Compute Optimizer currently generates recommendations for Auto Scaling groups that are configured to run instances of the M, C, R, T, and X instance families. The service does not generate recommendations for Auto Scaling groups that have a scaling policy attached to them, or that do not have the same values for desired, minimum, and maximum capacity. In order for Compute Optimizer to analyze your Auto Scaling groups, they must be of a fixed size. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/what-is.html">AWS Compute Optimizer User Guide</a>.</p>
		 * Post /#X-Amz-Target=ComputeOptimizerService.GetAutoScalingGroupRecommendations
		 * @return {GetAutoScalingGroupRecommendationsResponse} Success
		 */
		GetAutoScalingGroupRecommendations(callback: (data : GetAutoScalingGroupRecommendationsResponse) => any, requestBody: GetAutoScalingGroupRecommendationsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=ComputeOptimizerService.GetAutoScalingGroupRecommendations', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Returns Amazon EC2 instance recommendations.</p> <p>AWS Compute Optimizer currently generates recommendations for Amazon Elastic Compute Cloud (Amazon EC2) and Amazon EC2 Auto Scaling. It generates recommendations for M, C, R, T, and X instance families. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/what-is.html">AWS Compute Optimizer User Guide</a>.</p>
		 * Post /#X-Amz-Target=ComputeOptimizerService.GetEC2InstanceRecommendations
		 * @return {GetEC2InstanceRecommendationsResponse} Success
		 */
		GetEC2InstanceRecommendations(callback: (data : GetEC2InstanceRecommendationsResponse) => any, requestBody: GetEC2InstanceRecommendationsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=ComputeOptimizerService.GetEC2InstanceRecommendations', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Returns the projected utilization metrics of Amazon EC2 instance recommendations.
		 * Post /#X-Amz-Target=ComputeOptimizerService.GetEC2RecommendationProjectedMetrics
		 * @return {GetEC2RecommendationProjectedMetricsResponse} Success
		 */
		GetEC2RecommendationProjectedMetrics(callback: (data : GetEC2RecommendationProjectedMetricsResponse) => any, requestBody: GetEC2RecommendationProjectedMetricsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=ComputeOptimizerService.GetEC2RecommendationProjectedMetrics', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Returns the enrollment (opt in) status of an account to the AWS Compute Optimizer service.</p> <p>If the account is a master account of an organization, this operation also confirms the enrollment status of member accounts within the organization.</p>
		 * Post /#X-Amz-Target=ComputeOptimizerService.GetEnrollmentStatus
		 * @return {GetEnrollmentStatusResponse} Success
		 */
		GetEnrollmentStatus(callback: (data : GetEnrollmentStatusResponse) => any, requestBody: GetEnrollmentStatusRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=ComputeOptimizerService.GetEnrollmentStatus', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Returns the optimization findings for an account.</p> <p>For example, it returns the number of Amazon EC2 instances in an account that are under-provisioned, over-provisioned, or optimized. It also returns the number of Auto Scaling groups in an account that are not optimized, or optimized.</p>
		 * Post /#X-Amz-Target=ComputeOptimizerService.GetRecommendationSummaries
		 * @return {GetRecommendationSummariesResponse} Success
		 */
		GetRecommendationSummaries(callback: (data : GetRecommendationSummariesResponse) => any, requestBody: GetRecommendationSummariesRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=ComputeOptimizerService.GetRecommendationSummaries', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Updates the enrollment (opt in) status of an account to the AWS Compute Optimizer service.</p> <p>If the account is a master account of an organization, this operation can also enroll member accounts within the organization.</p>
		 * Post /#X-Amz-Target=ComputeOptimizerService.UpdateEnrollmentStatus
		 * @return {UpdateEnrollmentStatusResponse} Success
		 */
		UpdateEnrollmentStatus(callback: (data : UpdateEnrollmentStatusResponse) => any, requestBody: UpdateEnrollmentStatusRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=ComputeOptimizerService.UpdateEnrollmentStatus', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}
	}

}

