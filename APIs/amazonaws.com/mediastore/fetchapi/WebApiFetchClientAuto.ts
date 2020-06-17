export namespace My_Demo_Client {
	export interface CreateContainerOutput {

		/**This section describes operations that you can perform on an AWS Elemental MediaStore container. */
		Container: Container;
	}

	export interface CreateContainerInput {
		ContainerName: string;
		Tags?: Array<Tag>;
	}

	export interface DeleteContainerInput {
		ContainerName: string;
	}

	export interface DeleteContainerPolicyInput {
		ContainerName: string;
	}

	export interface DeleteCorsPolicyInput {
		ContainerName: string;
	}

	export interface DeleteLifecyclePolicyInput {
		ContainerName: string;
	}

	export interface DeleteMetricPolicyInput {
		ContainerName: string;
	}

	export interface DescribeContainerOutput {

		/**This section describes operations that you can perform on an AWS Elemental MediaStore container. */
		Container?: Container;
	}

	export interface DescribeContainerInput {
		ContainerName?: string;
	}

	export interface GetContainerPolicyOutput {
		Policy: string;
	}

	export interface GetContainerPolicyInput {
		ContainerName: string;
	}

	export interface GetCorsPolicyOutput {

		/**
		 * The CORS policy of the container.
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		CorsPolicy: Array<CorsRule>;
	}

	export interface GetCorsPolicyInput {
		ContainerName: string;
	}

	export interface GetLifecyclePolicyOutput {
		LifecyclePolicy: string;
	}

	export interface GetLifecyclePolicyInput {
		ContainerName: string;
	}

	export interface GetMetricPolicyOutput {

		/**<p>The metric policy that is associated with the container. A metric policy allows AWS Elemental MediaStore to send metrics to Amazon CloudWatch. In the policy, you must indicate whether you want MediaStore to send container-level metrics. You can also include rules to define groups of objects that you want MediaStore to send object-level metrics for.</p> <p>To view examples of how to construct a metric policy for your use case, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/policies-metric-examples.html">Example Metric Policies</a>.</p> */
		MetricPolicy: MetricPolicy;
	}

	export interface GetMetricPolicyInput {
		ContainerName: string;
	}

	export interface ListContainersOutput {
		Containers: Array<Container>;
		NextToken?: string;
	}

	export interface ListContainersInput {
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListTagsForResourceOutput {
		Tags?: Array<Tag>;
	}

	export interface ListTagsForResourceInput {
		Resource: string;
	}

	export interface PutContainerPolicyInput {
		ContainerName: string;
		Policy: string;
	}

	export interface PutCorsPolicyInput {
		ContainerName: string;

		/**
		 * The CORS policy of the container.
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		CorsPolicy: Array<CorsRule>;
	}

	export interface PutLifecyclePolicyInput {
		ContainerName: string;
		LifecyclePolicy: string;
	}

	export interface PutMetricPolicyInput {
		ContainerName: string;

		/**<p>The metric policy that is associated with the container. A metric policy allows AWS Elemental MediaStore to send metrics to Amazon CloudWatch. In the policy, you must indicate whether you want MediaStore to send container-level metrics. You can also include rules to define groups of objects that you want MediaStore to send object-level metrics for.</p> <p>To view examples of how to construct a metric policy for your use case, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/policies-metric-examples.html">Example Metric Policies</a>.</p> */
		MetricPolicy: MetricPolicy;
	}

	export interface StartAccessLoggingInput {
		ContainerName: string;
	}

	export interface StopAccessLoggingInput {
		ContainerName: string;
	}

	export interface TagResourceInput {
		Resource: string;
		Tags: Array<Tag>;
	}

	export interface UntagResourceInput {
		Resource: string;
		TagKeys: Array<TagKey>;
	}

	export enum MethodName { PUT = 0, GET = 1, DELETE = 2, HEAD = 3 }

	export enum ContainerStatus { ACTIVE = 0, CREATING = 1, DELETING = 2 }


	/**This section describes operations that you can perform on an AWS Elemental MediaStore container. */
	export interface Container {
		Endpoint?: string;
		CreationTime?: Date;
		ARN?: string;
		Name?: string;
		Status?: ContainerStatus;
		AccessLoggingEnabled?: boolean;
	}

	export enum ContainerStatus { ACTIVE = 0, CREATING = 1, DELETING = 2 }

	export enum ContainerLevelMetrics { ENABLED = 0, DISABLED = 1 }


	/**A rule for a CORS policy. You can add up to 100 rules to a CORS policy. If more than one rule applies, the service uses the first applicable rule listed. */
	export interface CorsRule {
		AllowedOrigins: Array<Origin>;
		AllowedMethods?: Array<MethodName>;
		AllowedHeaders: Array<Header>;
		MaxAgeSeconds?: number;
		ExposeHeaders?: Array<Header>;
	}


	/**<p>The metric policy that is associated with the container. A metric policy allows AWS Elemental MediaStore to send metrics to Amazon CloudWatch. In the policy, you must indicate whether you want MediaStore to send container-level metrics. You can also include rules to define groups of objects that you want MediaStore to send object-level metrics for.</p> <p>To view examples of how to construct a metric policy for your use case, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/policies-metric-examples.html">Example Metric Policies</a>.</p> */
	export interface MetricPolicy {
		ContainerLevelMetrics: MetricPolicyContainerLevelMetrics;
		MetricPolicyRules?: Array<MetricPolicyRule>;
	}

	export enum MetricPolicyContainerLevelMetrics { ENABLED = 0, DISABLED = 1 }


	/**A setting that enables metrics at the object level. Each rule contains an object group and an object group name. If the policy includes the MetricPolicyRules parameter, you must include at least one rule. Each metric policy can include up to five rules by default. You can also <a href="https://console.aws.amazon.com/servicequotas/home?region=us-east-1#!/services/mediastore/quotas">request a quota increase</a> to allow up to 300 rules per policy. */
	export interface MetricPolicyRule {
		ObjectGroup: string;
		ObjectGroupName: string;
	}


	/**A collection of tags associated with a container. Each tag consists of a key:value pair, which can be anything you define. Typically, the tag key represents a category (such as "environment") and the tag value represents a specific value within that category (such as "test," "development," or "production"). You can add up to 50 tags to each container. For more information about tagging, including naming and usage conventions, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/tagging.html">Tagging Resources in MediaStore</a>. */
	export interface Tag {
		Key: string;
		Value?: string;
	}

	export class DemoClient {
		constructor(private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/') {
		}

		/**
		 * Creates a storage container to hold objects. A container is similar to a bucket in the Amazon S3 service.
		 * Post /#X-Amz-Target=MediaStore_20170901.CreateContainer
		 * @return {CreateContainerOutput} Success
		 */
		CreateContainer(requestBody: CreateContainerInput, headersHandler?: () => {[header: string]: string}): Promise<CreateContainerOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=MediaStore_20170901.CreateContainer', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Deletes the specified container. Before you make a <code>DeleteContainer</code> request, delete any objects in the container or in any folders in the container. You can delete only empty containers.
		 * Post /#X-Amz-Target=MediaStore_20170901.DeleteContainer
		 * @return {DeleteContainerOutput} Success
		 */
		DeleteContainer(requestBody: DeleteContainerInput, headersHandler?: () => {[header: string]: string}): Promise<DeleteContainerOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=MediaStore_20170901.DeleteContainer', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Deletes the access policy that is associated with the specified container.
		 * Post /#X-Amz-Target=MediaStore_20170901.DeleteContainerPolicy
		 * @return {DeleteContainerPolicyOutput} Success
		 */
		DeleteContainerPolicy(requestBody: DeleteContainerPolicyInput, headersHandler?: () => {[header: string]: string}): Promise<DeleteContainerPolicyOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=MediaStore_20170901.DeleteContainerPolicy', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Deletes the cross-origin resource sharing (CORS) configuration information that is set for the container.</p> <p>To use this operation, you must have permission to perform the <code>MediaStore:DeleteCorsPolicy</code> action. The container owner has this permission by default and can grant this permission to others.</p>
		 * Post /#X-Amz-Target=MediaStore_20170901.DeleteCorsPolicy
		 * @return {DeleteCorsPolicyOutput} Success
		 */
		DeleteCorsPolicy(requestBody: DeleteCorsPolicyInput, headersHandler?: () => {[header: string]: string}): Promise<DeleteCorsPolicyOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=MediaStore_20170901.DeleteCorsPolicy', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Removes an object lifecycle policy from a container. It takes up to 20 minutes for the change to take effect.
		 * Post /#X-Amz-Target=MediaStore_20170901.DeleteLifecyclePolicy
		 * @return {DeleteLifecyclePolicyOutput} Success
		 */
		DeleteLifecyclePolicy(requestBody: DeleteLifecyclePolicyInput, headersHandler?: () => {[header: string]: string}): Promise<DeleteLifecyclePolicyOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=MediaStore_20170901.DeleteLifecyclePolicy', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Deletes the metric policy that is associated with the specified container. If there is no metric policy associated with the container, MediaStore doesn't send metrics to CloudWatch.
		 * Post /#X-Amz-Target=MediaStore_20170901.DeleteMetricPolicy
		 * @return {DeleteMetricPolicyOutput} Success
		 */
		DeleteMetricPolicy(requestBody: DeleteMetricPolicyInput, headersHandler?: () => {[header: string]: string}): Promise<DeleteMetricPolicyOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=MediaStore_20170901.DeleteMetricPolicy', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Retrieves the properties of the requested container. This request is commonly used to retrieve the endpoint of a container. An endpoint is a value assigned by the service when a new container is created. A container's endpoint does not change after it has been assigned. The <code>DescribeContainer</code> request returns a single <code>Container</code> object based on <code>ContainerName</code>. To return all <code>Container</code> objects that are associated with a specified AWS account, use <a>ListContainers</a>.
		 * Post /#X-Amz-Target=MediaStore_20170901.DescribeContainer
		 * @return {DescribeContainerOutput} Success
		 */
		DescribeContainer(requestBody: DescribeContainerInput, headersHandler?: () => {[header: string]: string}): Promise<DescribeContainerOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=MediaStore_20170901.DescribeContainer', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Retrieves the access policy for the specified container. For information about the data that is included in an access policy, see the <a href="https://aws.amazon.com/documentation/iam/">AWS Identity and Access Management User Guide</a>.
		 * Post /#X-Amz-Target=MediaStore_20170901.GetContainerPolicy
		 * @return {GetContainerPolicyOutput} Success
		 */
		GetContainerPolicy(requestBody: GetContainerPolicyInput, headersHandler?: () => {[header: string]: string}): Promise<GetContainerPolicyOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=MediaStore_20170901.GetContainerPolicy', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Returns the cross-origin resource sharing (CORS) configuration information that is set for the container.</p> <p>To use this operation, you must have permission to perform the <code>MediaStore:GetCorsPolicy</code> action. By default, the container owner has this permission and can grant it to others.</p>
		 * Post /#X-Amz-Target=MediaStore_20170901.GetCorsPolicy
		 * @return {GetCorsPolicyOutput} Success
		 */
		GetCorsPolicy(requestBody: GetCorsPolicyInput, headersHandler?: () => {[header: string]: string}): Promise<GetCorsPolicyOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=MediaStore_20170901.GetCorsPolicy', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Retrieves the object lifecycle policy that is assigned to a container.
		 * Post /#X-Amz-Target=MediaStore_20170901.GetLifecyclePolicy
		 * @return {GetLifecyclePolicyOutput} Success
		 */
		GetLifecyclePolicy(requestBody: GetLifecyclePolicyInput, headersHandler?: () => {[header: string]: string}): Promise<GetLifecyclePolicyOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=MediaStore_20170901.GetLifecyclePolicy', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns the metric policy for the specified container.
		 * Post /#X-Amz-Target=MediaStore_20170901.GetMetricPolicy
		 * @return {GetMetricPolicyOutput} Success
		 */
		GetMetricPolicy(requestBody: GetMetricPolicyInput, headersHandler?: () => {[header: string]: string}): Promise<GetMetricPolicyOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=MediaStore_20170901.GetMetricPolicy', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Lists the properties of all containers in AWS Elemental MediaStore. </p> <p>You can query to receive all the containers in one response. Or you can include the <code>MaxResults</code> parameter to receive a limited number of containers in each response. In this case, the response includes a token. To get the next set of containers, send the command again, this time with the <code>NextToken</code> parameter (with the returned token as its value). The next set of responses appears, with a token if there are still more containers to receive. </p> <p>See also <a>DescribeContainer</a>, which gets the properties of one container. </p>
		 * Post /#X-Amz-Target=MediaStore_20170901.ListContainers
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListContainersOutput} Success
		 */
		ListContainers(MaxResults: string, NextToken: string, requestBody: ListContainersInput, headersHandler?: () => {[header: string]: string}): Promise<ListContainersOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=MediaStore_20170901.ListContainers?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns a list of the tags assigned to the specified container.
		 * Post /#X-Amz-Target=MediaStore_20170901.ListTagsForResource
		 * @return {ListTagsForResourceOutput} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceInput, headersHandler?: () => {[header: string]: string}): Promise<ListTagsForResourceOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=MediaStore_20170901.ListTagsForResource', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Creates an access policy for the specified container to restrict the users and clients that can access it. For information about the data that is included in an access policy, see the <a href="https://aws.amazon.com/documentation/iam/">AWS Identity and Access Management User Guide</a>.</p> <p>For this release of the REST API, you can create only one policy for a container. If you enter <code>PutContainerPolicy</code> twice, the second command modifies the existing policy. </p>
		 * Post /#X-Amz-Target=MediaStore_20170901.PutContainerPolicy
		 * @return {PutContainerPolicyOutput} Success
		 */
		PutContainerPolicy(requestBody: PutContainerPolicyInput, headersHandler?: () => {[header: string]: string}): Promise<PutContainerPolicyOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=MediaStore_20170901.PutContainerPolicy', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Sets the cross-origin resource sharing (CORS) configuration on a container so that the container can service cross-origin requests. For example, you might want to enable a request whose origin is http://www.example.com to access your AWS Elemental MediaStore container at my.example.container.com by using the browser's XMLHttpRequest capability.</p> <p>To enable CORS on a container, you attach a CORS policy to the container. In the CORS policy, you configure rules that identify origins and the HTTP methods that can be executed on your container. The policy can contain up to 398,000 characters. You can add up to 100 rules to a CORS policy. If more than one rule applies, the service uses the first applicable rule listed.</p> <p>To learn more about CORS, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/cors-policy.html">Cross-Origin Resource Sharing (CORS) in AWS Elemental MediaStore</a>.</p>
		 * Post /#X-Amz-Target=MediaStore_20170901.PutCorsPolicy
		 * @return {PutCorsPolicyOutput} Success
		 */
		PutCorsPolicy(requestBody: PutCorsPolicyInput, headersHandler?: () => {[header: string]: string}): Promise<PutCorsPolicyOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=MediaStore_20170901.PutCorsPolicy', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Writes an object lifecycle policy to a container. If the container already has an object lifecycle policy, the service replaces the existing policy with the new policy. It takes up to 20 minutes for the change to take effect.</p> <p>For information about how to construct an object lifecycle policy, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/policies-object-lifecycle-components.html">Components of an Object Lifecycle Policy</a>.</p>
		 * Post /#X-Amz-Target=MediaStore_20170901.PutLifecyclePolicy
		 * @return {PutLifecyclePolicyOutput} Success
		 */
		PutLifecyclePolicy(requestBody: PutLifecyclePolicyInput, headersHandler?: () => {[header: string]: string}): Promise<PutLifecyclePolicyOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=MediaStore_20170901.PutLifecyclePolicy', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * The metric policy that you want to add to the container. A metric policy allows AWS Elemental MediaStore to send metrics to Amazon CloudWatch. It takes up to 20 minutes for the new policy to take effect.
		 * Post /#X-Amz-Target=MediaStore_20170901.PutMetricPolicy
		 * @return {PutMetricPolicyOutput} Success
		 */
		PutMetricPolicy(requestBody: PutMetricPolicyInput, headersHandler?: () => {[header: string]: string}): Promise<PutMetricPolicyOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=MediaStore_20170901.PutMetricPolicy', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Starts access logging on the specified container. When you enable access logging on a container, MediaStore delivers access logs for objects stored in that container to Amazon CloudWatch Logs.
		 * Post /#X-Amz-Target=MediaStore_20170901.StartAccessLogging
		 * @return {StartAccessLoggingOutput} Success
		 */
		StartAccessLogging(requestBody: StartAccessLoggingInput, headersHandler?: () => {[header: string]: string}): Promise<StartAccessLoggingOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=MediaStore_20170901.StartAccessLogging', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Stops access logging on the specified container. When you stop access logging on a container, MediaStore stops sending access logs to Amazon CloudWatch Logs. These access logs are not saved and are not retrievable.
		 * Post /#X-Amz-Target=MediaStore_20170901.StopAccessLogging
		 * @return {StopAccessLoggingOutput} Success
		 */
		StopAccessLogging(requestBody: StopAccessLoggingInput, headersHandler?: () => {[header: string]: string}): Promise<StopAccessLoggingOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=MediaStore_20170901.StopAccessLogging', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Adds tags to the specified AWS Elemental MediaStore container. Tags are key:value pairs that you can associate with AWS resources. For example, the tag key might be "customer" and the tag value might be "companyA." You can specify one or more tags to add to each container. You can add up to 50 tags to each container. For more information about tagging, including naming and usage conventions, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/tagging.html">Tagging Resources in MediaStore</a>.
		 * Post /#X-Amz-Target=MediaStore_20170901.TagResource
		 * @return {TagResourceOutput} Success
		 */
		TagResource(requestBody: TagResourceInput, headersHandler?: () => {[header: string]: string}): Promise<TagResourceOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=MediaStore_20170901.TagResource', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Removes tags from the specified container. You can specify one or more tags to remove.
		 * Post /#X-Amz-Target=MediaStore_20170901.UntagResource
		 * @return {UntagResourceOutput} Success
		 */
		UntagResource(requestBody: UntagResourceInput, headersHandler?: () => {[header: string]: string}): Promise<UntagResourceOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=MediaStore_20170901.UntagResource', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}
	}

}

