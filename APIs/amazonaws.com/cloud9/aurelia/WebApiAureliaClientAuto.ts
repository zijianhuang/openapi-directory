import {HttpClient} from 'aurelia-fetch-client';
import {autoinject} from 'aurelia-framework';
export namespace My_Demo_Client {
	export interface CreateEnvironmentEC2Result {
		environmentId?: string;
	}

	export interface CreateEnvironmentEC2Request {
		name: string;
		description?: string;
		clientRequestToken?: string;
		instanceType: string;
		subnetId?: string;
		automaticStopTimeMinutes?: number;
		ownerArn?: string;
		tags?: Array<Tag>;
	}

	export interface CreateEnvironmentMembershipResult {

		/**Information about an environment member for an AWS Cloud9 development environment. */
		membership?: EnvironmentMember;
	}

	export interface CreateEnvironmentMembershipRequest {
		environmentId: string;
		userArn: string;
		permissions: CreateEnvironmentMembershipRequestPermissions;
	}

	export enum CreateEnvironmentMembershipRequestPermissions { read-write = 0, read-only = 1 }

	export interface DeleteEnvironmentRequest {
		environmentId: string;
	}

	export interface DeleteEnvironmentMembershipRequest {
		environmentId: string;
		userArn: string;
	}

	export interface DescribeEnvironmentMembershipsResult {
		memberships?: Array<EnvironmentMember>;
		nextToken?: string;
	}

	export interface DescribeEnvironmentMembershipsRequest {
		userArn?: string;
		environmentId?: string;
		permissions?: Array<Permissions>;
		nextToken?: string;
		maxResults?: number;
	}

	export interface DescribeEnvironmentStatusResult {
		status?: DescribeEnvironmentStatusResultStatus;
		message?: string;
	}

	export enum DescribeEnvironmentStatusResultStatus { error = 0, creating = 1, connecting = 2, ready = 3, stopping = 4, stopped = 5, deleting = 6 }

	export interface DescribeEnvironmentStatusRequest {
		environmentId: string;
	}

	export interface DescribeEnvironmentsResult {
		environments?: Array<Environment>;
	}

	export interface DescribeEnvironmentsRequest {
		environmentIds: Array<EnvironmentId>;
	}

	export interface ListEnvironmentsResult {
		nextToken?: string;
		environmentIds?: Array<EnvironmentId>;
	}

	export interface ListEnvironmentsRequest {
		nextToken?: string;
		maxResults?: number;
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

	export interface UpdateEnvironmentRequest {
		environmentId: string;
		name?: string;
		description?: string;
	}

	export interface UpdateEnvironmentMembershipResult {

		/**Information about an environment member for an AWS Cloud9 development environment. */
		membership?: EnvironmentMember;
	}

	export interface UpdateEnvironmentMembershipRequest {
		environmentId: string;
		userArn: string;
		permissions: UpdateEnvironmentMembershipRequestPermissions;
	}

	export enum UpdateEnvironmentMembershipRequestPermissions { read-write = 0, read-only = 1 }

	export enum MemberPermissions { read-write = 0, read-only = 1 }


	/**Information about an environment member for an AWS Cloud9 development environment. */
	export interface EnvironmentMember {
		permissions?: EnvironmentMemberPermissions;
		userId?: string;
		userArn?: string;
		environmentId?: string;
		lastAccess?: Date;
	}

	export enum EnvironmentMemberPermissions { owner = 0, read-write = 1, read-only = 2 }

	export enum EnvironmentStatus { error = 0, creating = 1, connecting = 2, ready = 3, stopping = 4, stopped = 5, deleting = 6 }

	export enum EnvironmentType { ssh = 0, ec2 = 1 }


	/**Information about the current creation or deletion lifecycle state of an AWS Cloud9 development environment. */
	export interface EnvironmentLifecycle {
		status?: EnvironmentLifecycleStatus;
		reason?: string;
		failureResource?: string;
	}

	export enum EnvironmentLifecycleStatus { CREATING = 0, CREATED = 1, CREATE_FAILED = 2, DELETING = 3, DELETE_FAILED = 4 }


	/**Information about an AWS Cloud9 development environment. */
	export interface Environment {
		id?: string;
		name?: string;
		description?: string;
		type?: EnvironmentType;
		arn?: string;
		ownerArn?: string;

		/**Information about the current creation or deletion lifecycle state of an AWS Cloud9 development environment. */
		lifecycle?: EnvironmentLifecycle;
	}

	export enum EnvironmentType { ssh = 0, ec2 = 1 }

	export enum EnvironmentLifecycleStatus { CREATING = 0, CREATED = 1, CREATE_FAILED = 2, DELETING = 3, DELETE_FAILED = 4 }

	export enum Permissions { owner = 0, read-write = 1, read-only = 2 }


	/**Metadata that is associated with AWS resources. In particular, a name-value pair that can be associated with an AWS Cloud9 development environment. There are two types of tags: <i>user tags</i> and <i>system tags</i>. A user tag is created by the user. A system tag is automatically created by AWS services. A system tag is prefixed with "aws:" and cannot be modified by the user. */
	export interface Tag {
		Key: string;
		Value: string;
	}

	@autoinject()
	export class DemoClient {
		constructor(private http: HttpClient) {
		}

		/**
		 * Creates an AWS Cloud9 development environment, launches an Amazon Elastic Compute Cloud (Amazon EC2) instance, and then connects from the instance to the environment.
		 * Post /#X-Amz-Target=AWSCloud9WorkspaceManagementService.CreateEnvironmentEC2
		 * @return {CreateEnvironmentEC2Result} Success
		 */
		CreateEnvironmentEC2(requestBody: CreateEnvironmentEC2Request, headersHandler?: () => {[header: string]: string}): Promise<CreateEnvironmentEC2Result> {
			return this.http.post('/#X-Amz-Target=AWSCloud9WorkspaceManagementService.CreateEnvironmentEC2', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Adds an environment member to an AWS Cloud9 development environment.
		 * Post /#X-Amz-Target=AWSCloud9WorkspaceManagementService.CreateEnvironmentMembership
		 * @return {CreateEnvironmentMembershipResult} Success
		 */
		CreateEnvironmentMembership(requestBody: CreateEnvironmentMembershipRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateEnvironmentMembershipResult> {
			return this.http.post('/#X-Amz-Target=AWSCloud9WorkspaceManagementService.CreateEnvironmentMembership', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Deletes an AWS Cloud9 development environment. If an Amazon EC2 instance is connected to the environment, also terminates the instance.
		 * Post /#X-Amz-Target=AWSCloud9WorkspaceManagementService.DeleteEnvironment
		 * @return {DeleteEnvironmentResult} Success
		 */
		DeleteEnvironment(requestBody: DeleteEnvironmentRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteEnvironmentResult> {
			return this.http.post('/#X-Amz-Target=AWSCloud9WorkspaceManagementService.DeleteEnvironment', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Deletes an environment member from an AWS Cloud9 development environment.
		 * Post /#X-Amz-Target=AWSCloud9WorkspaceManagementService.DeleteEnvironmentMembership
		 * @return {DeleteEnvironmentMembershipResult} Success
		 */
		DeleteEnvironmentMembership(requestBody: DeleteEnvironmentMembershipRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteEnvironmentMembershipResult> {
			return this.http.post('/#X-Amz-Target=AWSCloud9WorkspaceManagementService.DeleteEnvironmentMembership', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Gets information about environment members for an AWS Cloud9 development environment.
		 * Post /#X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironmentMemberships
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeEnvironmentMembershipsResult} Success
		 */
		DescribeEnvironmentMemberships(maxResults: string, nextToken: string, requestBody: DescribeEnvironmentMembershipsRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeEnvironmentMembershipsResult> {
			return this.http.post('/#X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironmentMemberships?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Gets status information for an AWS Cloud9 development environment.
		 * Post /#X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironmentStatus
		 * @return {DescribeEnvironmentStatusResult} Success
		 */
		DescribeEnvironmentStatus(requestBody: DescribeEnvironmentStatusRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeEnvironmentStatusResult> {
			return this.http.post('/#X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironmentStatus', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Gets information about AWS Cloud9 development environments.
		 * Post /#X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironments
		 * @return {DescribeEnvironmentsResult} Success
		 */
		DescribeEnvironments(requestBody: DescribeEnvironmentsRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeEnvironmentsResult> {
			return this.http.post('/#X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironments', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Gets a list of AWS Cloud9 development environment identifiers.
		 * Post /#X-Amz-Target=AWSCloud9WorkspaceManagementService.ListEnvironments
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListEnvironmentsResult} Success
		 */
		ListEnvironments(maxResults: string, nextToken: string, requestBody: ListEnvironmentsRequest, headersHandler?: () => {[header: string]: string}): Promise<ListEnvironmentsResult> {
			return this.http.post('/#X-Amz-Target=AWSCloud9WorkspaceManagementService.ListEnvironments?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Gets a list of the tags associated with an AWS Cloud9 development environment.
		 * Post /#X-Amz-Target=AWSCloud9WorkspaceManagementService.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest, headersHandler?: () => {[header: string]: string}): Promise<ListTagsForResourceResponse> {
			return this.http.post('/#X-Amz-Target=AWSCloud9WorkspaceManagementService.ListTagsForResource', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * <p>Adds tags to an AWS Cloud9 development environment.</p> <important> <p>Tags that you add to an AWS Cloud9 environment by using this method will NOT be automatically propagated to underlying resources.</p> </important>
		 * Post /#X-Amz-Target=AWSCloud9WorkspaceManagementService.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest, headersHandler?: () => {[header: string]: string}): Promise<TagResourceResponse> {
			return this.http.post('/#X-Amz-Target=AWSCloud9WorkspaceManagementService.TagResource', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Removes tags from an AWS Cloud9 development environment.
		 * Post /#X-Amz-Target=AWSCloud9WorkspaceManagementService.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest, headersHandler?: () => {[header: string]: string}): Promise<UntagResourceResponse> {
			return this.http.post('/#X-Amz-Target=AWSCloud9WorkspaceManagementService.UntagResource', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Changes the settings of an existing AWS Cloud9 development environment.
		 * Post /#X-Amz-Target=AWSCloud9WorkspaceManagementService.UpdateEnvironment
		 * @return {UpdateEnvironmentResult} Success
		 */
		UpdateEnvironment(requestBody: UpdateEnvironmentRequest, headersHandler?: () => {[header: string]: string}): Promise<UpdateEnvironmentResult> {
			return this.http.post('/#X-Amz-Target=AWSCloud9WorkspaceManagementService.UpdateEnvironment', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Changes the settings of an existing environment member for an AWS Cloud9 development environment.
		 * Post /#X-Amz-Target=AWSCloud9WorkspaceManagementService.UpdateEnvironmentMembership
		 * @return {UpdateEnvironmentMembershipResult} Success
		 */
		UpdateEnvironmentMembership(requestBody: UpdateEnvironmentMembershipRequest, headersHandler?: () => {[header: string]: string}): Promise<UpdateEnvironmentMembershipResult> {
			return this.http.post('/#X-Amz-Target=AWSCloud9WorkspaceManagementService.UpdateEnvironmentMembership', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}
	}

}

