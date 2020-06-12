export namespace My_Demo_Client {

	/**The structure representing the configureAgentResponse. */
	export interface ConfigureAgentResponse {

		/**<p/> */
		configuration: AgentConfiguration;
	}


	/**The structure representing the createProfilingGroupResponse. */
	export interface CreateProfilingGroupResponse {

		/**The description of a profiling group. */
		profilingGroup: ProfilingGroupDescription;
	}


	/**The structure representing the describeProfilingGroupResponse. */
	export interface DescribeProfilingGroupResponse {

		/**The description of a profiling group. */
		profilingGroup: ProfilingGroupDescription;
	}


	/**The structure representing the getPolicyResponse. */
	export interface GetPolicyResponse {
		policy: string;
		revisionId: string;
	}


	/**The structure representing the getProfileResponse. */
	export interface GetProfileResponse {
		profile: string;
	}


	/**The structure representing the listProfileTimesResponse. */
	export interface ListProfileTimesResponse {
		nextToken?: string;
		profileTimes: Array<ProfileTime>;
	}


	/**The structure representing the listProfilingGroupsResponse. */
	export interface ListProfilingGroupsResponse {
		nextToken?: string;
		profilingGroupNames: Array<ProfilingGroupName>;
		profilingGroups?: Array<ProfilingGroupDescription>;
	}


	/**The structure representing the putPermissionResponse. */
	export interface PutPermissionResponse {
		policy: string;
		revisionId: string;
	}


	/**The structure representing the removePermissionResponse. */
	export interface RemovePermissionResponse {
		policy: string;
		revisionId: string;
	}


	/**The structure representing the updateProfilingGroupResponse. */
	export interface UpdateProfilingGroupResponse {

		/**The description of a profiling group. */
		profilingGroup: ProfilingGroupDescription;
	}

	export enum ActionGroup { agentPermissions = 0 }


	/**<p/> */
	export interface AgentConfiguration {
		periodInSeconds: number;
		shouldProfile: boolean;
	}


	/**<p/> */
	export interface AgentOrchestrationConfig {
		profilingEnabled: boolean;
	}

	export enum AggregationPeriod { P1D = 0, PT1H = 1, PT5M = 2 }


	/**Information about the time range of the latest available aggregated profile. */
	export interface AggregatedProfileTime {
		period?: AggregatedProfileTimePeriod;
		start?: Date;
	}

	export enum AggregatedProfileTimePeriod { P1D = 0, PT1H = 1, PT5M = 2 }


	/**The structure representing the configureAgentRequest. */
	export interface ConfigureAgentRequest {
		fleetInstanceId?: string;
	}


	/**The structure representing the createProfiliingGroupRequest. */
	export interface CreateProfilingGroupRequest {

		/**<p/> */
		agentOrchestrationConfig?: AgentOrchestrationConfig;
		profilingGroupName: string;
	}


	/**The description of a profiling group. */
	export interface ProfilingGroupDescription {

		/**<p/> */
		agentOrchestrationConfig?: AgentOrchestrationConfig;
		arn?: string;
		createdAt?: Date;
		name?: string;

		/**Information about the profiling status. */
		profilingStatus?: ProfilingStatus;
		updatedAt?: Date;
	}

	export enum OrderBy { TimestampAscending = 0, TimestampDescending = 1 }


	/**The structure representing the postAgentProfileRequest. */
	export interface PostAgentProfileRequest {
		agentProfile: string;
	}


	/**Information about the profile time. */
	export interface ProfileTime {
		start?: Date;
	}


	/**Information about the profiling status. */
	export interface ProfilingStatus {
		latestAgentOrchestratedAt?: Date;
		latestAgentProfileReportedAt?: Date;

		/**Information about the time range of the latest available aggregated profile. */
		latestAggregatedProfile?: AggregatedProfileTime;
	}


	/**The structure representing the putPermissionRequest. */
	export interface PutPermissionRequest {
		principals: Array<Principal>;
		revisionId?: string;
	}


	/**The structure representing the updateProfilingGroupRequest. */
	export interface UpdateProfilingGroupRequest {

		/**<p/> */
		agentOrchestrationConfig: AgentOrchestrationConfig;
	}

	export class DemoClient {
		constructor(private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/') {
		}

		/**
		 * <p/>
		 * Post /profilingGroups/{profilingGroupName}/configureAgent
		 * @param {string} profilingGroupName <p/>
		 * @return {ConfigureAgentResponse} Success
		 */
		ConfigureAgent(profilingGroupName: string, requestBody: ConfigureAgentBody, headersHandler?: () => {[header: string]: string}): Promise<ConfigureAgentResponse> {
			return fetch(this.baseUri + '/profilingGroups/' + (profilingGroupName == null ? '' : encodeURIComponent(profilingGroupName)) + '/configureAgent', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Creates a profiling group.
		 * Post /profilingGroups#clientToken
		 * @param {string} clientToken <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p> <p>This parameter specifies a unique identifier for the new profiling group that helps ensure idempotency.</p>
		 * @return {void} 
		 */
		CreateProfilingGroup(clientToken: string, requestBody: CreateProfilingGroupBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/profilingGroups#clientToken?clientToken=' + (clientToken == null ? '' : encodeURIComponent(clientToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Deletes a profiling group.
		 * Delete /profilingGroups/{profilingGroupName}
		 * @param {string} profilingGroupName The profiling group name to delete.
		 * @return {void} 
		 */
		DeleteProfilingGroup(profilingGroupName: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/profilingGroups/' + (profilingGroupName == null ? '' : encodeURIComponent(profilingGroupName)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Describes a profiling group.
		 * Get /profilingGroups/{profilingGroupName}
		 * @param {string} profilingGroupName The profiling group name.
		 * @return {DescribeProfilingGroupResponse} Success
		 */
		DescribeProfilingGroup(profilingGroupName: string, headersHandler?: () => {[header: string]: string}): Promise<DescribeProfilingGroupResponse> {
			return fetch(this.baseUri + '/profilingGroups/' + (profilingGroupName == null ? '' : encodeURIComponent(profilingGroupName)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Updates a profiling group.
		 * Put /profilingGroups/{profilingGroupName}
		 * @param {string} profilingGroupName The name of the profiling group to update.
		 * @return {UpdateProfilingGroupResponse} Success
		 */
		UpdateProfilingGroup(profilingGroupName: string, requestBody: UpdateProfilingGroupBody, headersHandler?: () => {[header: string]: string}): Promise<UpdateProfilingGroupResponse> {
			return fetch(this.baseUri + '/profilingGroups/' + (profilingGroupName == null ? '' : encodeURIComponent(profilingGroupName)), { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Gets the profiling group policy.
		 * Get /profilingGroups/{profilingGroupName}/policy
		 * @param {string} profilingGroupName The name of the profiling group.
		 * @return {GetPolicyResponse} Success
		 */
		GetPolicy(profilingGroupName: string, headersHandler?: () => {[header: string]: string}): Promise<GetPolicyResponse> {
			return fetch(this.baseUri + '/profilingGroups/' + (profilingGroupName == null ? '' : encodeURIComponent(profilingGroupName)) + '/policy', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * <p>Gets the aggregated profile of a profiling group for the specified time range. If the requested time range does not align with the available aggregated profiles, it is expanded to attain alignment. If aggregated profiles are available only for part of the period requested, the profile is returned from the earliest available to the latest within the requested time range. </p> <p>For example, if the requested time range is from 00:00 to 00:20 and the available profiles are from 00:15 to 00:25, the returned profile will be from 00:15 to 00:20. </p> <p>You must specify exactly two of the following parameters: <code>startTime</code>, <code>period</code>, and <code>endTime</code>. </p>
		 * Get /profilingGroups/{profilingGroupName}/profile
		 * @param {Date} endTime <p/> <p>You must specify exactly two of the following parameters: <code>startTime</code>, <code>period</code>, and <code>endTime</code>. </p>
		 * @param {number} maxDepth The maximum depth of the graph.
		 * @param {string} period <p>The period of the profile to get. The time range must be in the past and not longer than one week. </p> <p>You must specify exactly two of the following parameters: <code>startTime</code>, <code>period</code>, and <code>endTime</code>. </p>
		 * @param {string} profilingGroupName The name of the profiling group to get.
		 * @param {Date} startTime <p>The start time of the profile to get.</p> <p>You must specify exactly two of the following parameters: <code>startTime</code>, <code>period</code>, and <code>endTime</code>. </p>
		 * @return {GetProfileResponse} Success
		 */
		GetProfile(endTime: Date, maxDepth: number, period: string, profilingGroupName: string, startTime: Date, headersHandler?: () => {[header: string]: string}): Promise<GetProfileResponse> {
			return fetch(this.baseUri + '/profilingGroups/' + (profilingGroupName == null ? '' : encodeURIComponent(profilingGroupName)) + '/profile?endTime=' + endTime.toISOString() + '&maxDepth=' + maxDepth + '&period=' + (period == null ? '' : encodeURIComponent(period)) + '&startTime=' + startTime.toISOString(), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * List the start times of the available aggregated profiles of a profiling group for an aggregation period within the specified time range.
		 * Get /profilingGroups/{profilingGroupName}/profileTimes#endTime&period&startTime
		 * @param {Date} endTime The end time of the time range from which to list the profiles.
		 * @param {number} maxResults The maximum number of profile time results returned by <code>ListProfileTimes</code> in paginated output. When this parameter is used, <code>ListProfileTimes</code> only returns <code>maxResults</code> results in a single page with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListProfileTimes</code> request with the returned <code>nextToken</code> value. 
		 * @param {string} nextToken <p>The <code>nextToken</code> value returned from a previous paginated <code>ListProfileTimes</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. </p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>
		 * @param {OrderBy} orderBy The order (ascending or descending by start time of the profile) to use when listing profiles. Defaults to <code>TIMESTAMP_DESCENDING</code>. 
		 * @param {AggregationPeriod} period The aggregation period.
		 * @param {string} profilingGroupName The name of the profiling group.
		 * @param {Date} startTime The start time of the time range from which to list the profiles.
		 * @return {ListProfileTimesResponse} Success
		 */
		ListProfileTimes(endTime: Date, maxResults: number, nextToken: string, orderBy: OrderBy, period: AggregationPeriod, profilingGroupName: string, startTime: Date, headersHandler?: () => {[header: string]: string}): Promise<ListProfileTimesResponse> {
			return fetch(this.baseUri + '/profilingGroups/' + (profilingGroupName == null ? '' : encodeURIComponent(profilingGroupName)) + '/profileTimes#endTime&period&startTime?endTime=' + endTime.toISOString() + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&orderBy=' + orderBy + '&period=' + period + '&startTime=' + startTime.toISOString(), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Lists profiling groups.
		 * Get /profilingGroups
		 * @param {boolean} includeDescription A Boolean value indicating whether to include a description.
		 * @param {number} maxResults The maximum number of profiling groups results returned by <code>ListProfilingGroups</code> in paginated output. When this parameter is used, <code>ListProfilingGroups</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListProfilingGroups</code> request with the returned <code>nextToken</code> value. 
		 * @param {string} nextToken <p>The <code>nextToken</code> value returned from a previous paginated <code>ListProfilingGroups</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. </p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>
		 * @return {ListProfilingGroupsResponse} Success
		 */
		ListProfilingGroups(includeDescription: boolean, maxResults: number, nextToken: string, headersHandler?: () => {[header: string]: string}): Promise<ListProfilingGroupsResponse> {
			return fetch(this.baseUri + '/profilingGroups?includeDescription=' + includeDescription + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * <p/>
		 * Post /profilingGroups/{profilingGroupName}/agentProfile#Content-Type
		 * @param {string} profileToken <p/>
		 * @param {string} profilingGroupName <p/>
		 * @return {void} 
		 */
		PostAgentProfile(profileToken: string, profilingGroupName: string, requestBody: PostAgentProfileBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/profilingGroups/' + (profilingGroupName == null ? '' : encodeURIComponent(profilingGroupName)) + '/agentProfile#Content-Type?profileToken=' + (profileToken == null ? '' : encodeURIComponent(profileToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Provides permission to the principals. This overwrites the existing permissions, and is not additive.
		 * Put /profilingGroups/{profilingGroupName}/policy/{actionGroup}
		 * @param {ActionGroup} actionGroup The list of actions that the users and roles can perform on the profiling group.
		 * @param {string} profilingGroupName The name of the profiling group.
		 * @return {PutPermissionResponse} Success
		 */
		PutPermission(actionGroup: ActionGroup, profilingGroupName: string, requestBody: PutPermissionBody, headersHandler?: () => {[header: string]: string}): Promise<PutPermissionResponse> {
			return fetch(this.baseUri + '/profilingGroups/' + (profilingGroupName == null ? '' : encodeURIComponent(profilingGroupName)) + '/policy/' + actionGroup, { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Removes statement for the provided action group from the policy.
		 * Delete /profilingGroups/{profilingGroupName}/policy/{actionGroup}#revisionId
		 * @param {ActionGroup} actionGroup The list of actions that the users and roles can perform on the profiling group.
		 * @param {string} profilingGroupName The name of the profiling group.
		 * @param {string} revisionId A unique identifier for the current revision of the policy.
		 * @return {RemovePermissionResponse} Success
		 */
		RemovePermission(actionGroup: ActionGroup, profilingGroupName: string, revisionId: string, headersHandler?: () => {[header: string]: string}): Promise<RemovePermissionResponse> {
			return fetch(this.baseUri + '/profilingGroups/' + (profilingGroupName == null ? '' : encodeURIComponent(profilingGroupName)) + '/policy/' + actionGroup + '#revisionId&revisionId=' + (revisionId == null ? '' : encodeURIComponent(revisionId)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}
	}

	export interface ConfigureAgentBody {

		/**
		 * <p/>
		 * Max length: 255
		 * Min length: 1
		 * Pattern: ^[\w-.:/]+$
		 */
		fleetInstanceId?: string;
	}

	export interface CreateProfilingGroupBody {

		/**<p/> */
		agentOrchestrationConfig?: string;

		/**
		 * The name of the profiling group.
		 * Max length: 255
		 * Min length: 1
		 * Pattern: ^[\w-]+$
		 */
		profilingGroupName: string;
	}

	export interface UpdateProfilingGroupBody {

		/**<p/> */
		agentOrchestrationConfig: string;
	}

	export interface PostAgentProfileBody {

		/**<p/> */
		agentProfile: string;
	}

	export interface PutPermissionBody {

		/**
		 * The list of role and user ARNs or the accountId that needs access (wildcards are not allowed).
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		principals: Array<Principal>;

		/**
		 * A unique identifier for the current revision of the policy. This is required, if a policy exists for the profiling group. This is not required when creating the policy for the first time.
		 * Pattern: [a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}
		 */
		revisionId?: string;
	}

}

