import Axios from 'axios';
import { AxiosResponse } from 'axios';
export namespace My_Demo_Client {
	export interface CreateLifecyclePolicyResponse {
		PolicyId?: string;
	}

	export enum PolicyTypeValues { EBS_SNAPSHOT_MANAGEMENT = 0 }


	/**Specifies optional parameters to add to a policy. The set of valid parameters depends on the combination of policy type and resource type. */
	export interface Parameters {
		ExcludeBootVolume?: boolean;
	}

	export interface GetLifecyclePoliciesResponse {
		Policies?: Array<LifecyclePolicySummary>;
	}

	export enum ResourceTypeValues { VOLUME = 0, INSTANCE = 1 }

	export interface GetLifecyclePolicyResponse {

		/**Detailed information about a lifecycle policy. */
		Policy?: LifecyclePolicy;
	}

	export interface ListTagsForResourceResponse {
		Tags?: TagMap;
	}

	export enum SettablePolicyStateValues { ENABLED = 0, DISABLED = 1 }


	/**Specifies the configuration of a lifecycle policy. */
	export interface PolicyDetails {
		PolicyType?: PolicyDetailsPolicyType;
		ResourceTypes?: Array<ResourceTypeValues>;
		TargetTags?: Array<Tag>;
		Schedules?: Array<Schedule>;

		/**Specifies optional parameters to add to a policy. The set of valid parameters depends on the combination of policy type and resource type. */
		Parameters?: Parameters;
	}

	export enum PolicyDetailsPolicyType { EBS_SNAPSHOT_MANAGEMENT = 0 }

	export interface CreateLifecyclePolicyRequest {
		ExecutionRoleArn: string;
		Description: string;
		State: CreateLifecyclePolicyRequestState;

		/**Specifies the configuration of a lifecycle policy. */
		PolicyDetails: PolicyDetails;
		Tags?: TagMap;
	}

	export enum CreateLifecyclePolicyRequestState { ENABLED = 0, DISABLED = 1 }

	export enum IntervalUnitValues { HOURS = 0 }


	/**<p>Specifies when to create snapshots of EBS volumes.</p> <p>You must specify either a Cron expression or an interval, interval unit, and start time. You cannot specify both.</p> */
	export interface CreateRule {
		Interval?: number;
		IntervalUnit?: CreateRuleIntervalUnit;
		Times?: Array<Time>;
		CronExpression?: string;
	}

	export enum CreateRuleIntervalUnit { HOURS = 0 }

	export enum RetentionIntervalUnitValues { DAYS = 0, WEEKS = 1, MONTHS = 2, YEARS = 3 }


	/**Specifies the retention rule for cross-Region snapshot copies. */
	export interface CrossRegionCopyRetainRule {
		Interval?: number;
		IntervalUnit?: CrossRegionCopyRetainRuleIntervalUnit;
	}

	export enum CrossRegionCopyRetainRuleIntervalUnit { DAYS = 0, WEEKS = 1, MONTHS = 2, YEARS = 3 }


	/**Specifies a rule for cross-Region snapshot copies. */
	export interface CrossRegionCopyRule {
		TargetRegion: string;
		Encrypted: boolean;
		CmkArn?: string;
		CopyTags?: boolean;

		/**Specifies the retention rule for cross-Region snapshot copies. */
		RetainRule?: CrossRegionCopyRetainRule;
	}


	/**Specifies a rule for enabling fast snapshot restore. You can enable fast snapshot restore based on either a count or a time interval. */
	export interface FastRestoreRule {
		Count?: number;
		Interval?: number;
		IntervalUnit?: FastRestoreRuleIntervalUnit;
		AvailabilityZones: Array<AvailabilityZone>;
	}

	export enum FastRestoreRuleIntervalUnit { DAYS = 0, WEEKS = 1, MONTHS = 2, YEARS = 3 }

	export enum GettablePolicyStateValues { ENABLED = 0, DISABLED = 1, ERROR = 2 }


	/**Detailed information about a lifecycle policy. */
	export interface LifecyclePolicy {
		PolicyId?: string;
		Description?: string;
		State?: LifecyclePolicyState;
		StatusMessage?: string;
		ExecutionRoleArn?: string;
		DateCreated?: Date;
		DateModified?: Date;

		/**Specifies the configuration of a lifecycle policy. */
		PolicyDetails?: PolicyDetails;
		Tags?: TagMap;
		PolicyArn?: string;
	}

	export enum LifecyclePolicyState { ENABLED = 0, DISABLED = 1, ERROR = 2 }


	/**Summary information about a lifecycle policy. */
	export interface LifecyclePolicySummary {
		PolicyId?: string;
		Description?: string;
		State?: LifecyclePolicySummaryState;
		Tags?: TagMap;
	}

	export enum LifecyclePolicySummaryState { ENABLED = 0, DISABLED = 1, ERROR = 2 }


	/**Specifies the retention rule for a lifecycle policy. You can retain snapshots based on either a count or a time interval. */
	export interface RetainRule {
		Count?: number;
		Interval?: number;
		IntervalUnit?: RetainRuleIntervalUnit;
	}

	export enum RetainRuleIntervalUnit { DAYS = 0, WEEKS = 1, MONTHS = 2, YEARS = 3 }


	/**Specifies a backup schedule. */
	export interface Schedule {
		Name?: string;
		CopyTags?: boolean;
		TagsToAdd?: Array<Tag>;
		VariableTags?: Array<Tag>;

		/**<p>Specifies when to create snapshots of EBS volumes.</p> <p>You must specify either a Cron expression or an interval, interval unit, and start time. You cannot specify both.</p> */
		CreateRule?: CreateRule;

		/**Specifies the retention rule for a lifecycle policy. You can retain snapshots based on either a count or a time interval. */
		RetainRule?: RetainRule;

		/**Specifies a rule for enabling fast snapshot restore. You can enable fast snapshot restore based on either a count or a time interval. */
		FastRestoreRule?: FastRestoreRule;
		CrossRegionCopyRules?: Array<CrossRegionCopyRule>;
	}


	/**Specifies a tag for a resource. */
	export interface Tag {
		Key: string;
		Value: string;
	}

	export interface TagResourceRequest {
		Tags: TagMap;
	}

	export interface UpdateLifecyclePolicyRequest {
		ExecutionRoleArn?: string;
		State?: UpdateLifecyclePolicyRequestState;
		Description?: string;

		/**Specifies the configuration of a lifecycle policy. */
		PolicyDetails?: PolicyDetails;
	}

	export enum UpdateLifecyclePolicyRequestState { ENABLED = 0, DISABLED = 1 }

	export class DemoClient {
		constructor(private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/') {
		}

		/**
		 * Creates a policy to manage the lifecycle of the specified AWS resources. You can create up to 100 lifecycle policies.
		 * Post /policies
		 * @return {CreateLifecyclePolicyResponse} Success
		 */
		CreateLifecyclePolicy(requestBody: CreateLifecyclePolicyBody, headersHandler?: () => {[header: string]: string}): Promise<CreateLifecyclePolicyResponse> {
			return Axios.post<CreateLifecyclePolicyResponse>(this.baseUri + '/policies', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * <p>Gets summary information about all or the specified data lifecycle policies.</p> <p>To get complete information about a policy, use <a>GetLifecyclePolicy</a>.</p>
		 * Get /policies
		 * @param {Array<PolicyId>} policyIds The identifiers of the data lifecycle policies.
		 * @param {GettablePolicyStateValues} state The activation state.
		 * @param {Array<ResourceTypeValues>} resourceTypes The resource type.
		 * @param {Array<TagFilter>} targetTags <p>The target tag for a policy.</p> <p>Tags are strings in the format <code>key=value</code>.</p>
		 * @param {Array<TagFilter>} tagsToAdd <p>The tags to add to objects created by the policy.</p> <p>Tags are strings in the format <code>key=value</code>.</p> <p>These user-defined tags are added in addition to the AWS-added lifecycle tags.</p>
		 * @return {GetLifecyclePoliciesResponse} Success
		 */
		GetLifecyclePolicies(policyIds: Array<PolicyId>, state: GettablePolicyStateValues, resourceTypes: Array<ResourceTypeValues>, targetTags: Array<TagFilter>, tagsToAdd: Array<TagFilter>, headersHandler?: () => {[header: string]: string}): Promise<GetLifecyclePoliciesResponse> {
			return Axios.get<GetLifecyclePoliciesResponse>(this.baseUri + '/policies?' + policyIds.map(z => `policyIds=${z}`).join('&') + '&state=' + state + '&' + resourceTypes.map(z => `resourceTypes=${z}`).join('&') + '&' + targetTags.map(z => `targetTags=${z}`).join('&') + '&' + tagsToAdd.map(z => `tagsToAdd=${z}`).join('&'), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Deletes the specified lifecycle policy and halts the automated operations that the policy specified.
		 * Delete /policies/{policyId}/
		 * @param {string} policyId The identifier of the lifecycle policy.
		 * @return {DeleteLifecyclePolicyResponse} Success
		 */
		DeleteLifecyclePolicy(policyId: string, headersHandler?: () => {[header: string]: string}): Promise<DeleteLifecyclePolicyResponse> {
			return Axios.delete<DeleteLifecyclePolicyResponse>(this.baseUri + '/policies/' + (policyId == null ? '' : encodeURIComponent(policyId)) + '/', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Gets detailed information about the specified lifecycle policy.
		 * Get /policies/{policyId}/
		 * @param {string} policyId The identifier of the lifecycle policy.
		 * @return {GetLifecyclePolicyResponse} Success
		 */
		GetLifecyclePolicy(policyId: string, headersHandler?: () => {[header: string]: string}): Promise<GetLifecyclePolicyResponse> {
			return Axios.get<GetLifecyclePolicyResponse>(this.baseUri + '/policies/' + (policyId == null ? '' : encodeURIComponent(policyId)) + '/', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Lists the tags for the specified resource.
		 * Get /tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string, headersHandler?: () => {[header: string]: string}): Promise<ListTagsForResourceResponse> {
			return Axios.get<ListTagsForResourceResponse>(this.baseUri + '/tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Adds the specified tags to the specified resource.
		 * Post /tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource.
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourceBody, headersHandler?: () => {[header: string]: string}): Promise<TagResourceResponse> {
			return Axios.post<TagResourceResponse>(this.baseUri + '/tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Removes the specified tags from the specified resource.
		 * Delete /tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource.
		 * @param {Array<TagKey>} tagKeys The tag keys.
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<TagKey>, headersHandler?: () => {[header: string]: string}): Promise<UntagResourceResponse> {
			return Axios.delete<UntagResourceResponse>(this.baseUri + '/tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${z}`).join('&'), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}
	}

	export interface CreateLifecyclePolicyBody {

		/**
		 * The Amazon Resource Name (ARN) of the IAM role used to run the operations specified by the lifecycle policy.
		 * Max length: 2048
		 * Min length: 0
		 * Pattern: arn:aws(-[a-z]{1,3}){0,2}:iam::\d+:role/.*
		 */
		ExecutionRoleArn: string;

		/**
		 * A description of the lifecycle policy. The characters ^[0-9A-Za-z _-]+$ are supported.
		 * Max length: 500
		 * Min length: 0
		 * Pattern: [0-9A-Za-z _-]+
		 */
		Description: string;

		/**The desired activation state of the lifecycle policy after creation. */
		State: CreateLifecyclePolicyBodyState;

		/**Specifies the configuration of a lifecycle policy. */
		PolicyDetails: string;

		/**The tags to apply to the lifecycle policy during creation. */
		Tags?: string;
	}

	export enum CreateLifecyclePolicyBodyState { ENABLED = 0, DISABLED = 1 }

	export interface TagResourceBody {

		/**One or more tags. */
		Tags: string;
	}

}

