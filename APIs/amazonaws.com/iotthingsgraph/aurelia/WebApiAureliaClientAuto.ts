import {HttpClient} from 'aurelia-fetch-client';
import {autoinject} from 'aurelia-framework';
export namespace My_Demo_Client {
	export interface AssociateEntityToThingRequest {
		thingName: string;
		entityId: string;
		namespaceVersion?: number;
	}

	export interface CreateFlowTemplateResponse {

		/**An object that contains summary information about a workflow. */
		summary?: FlowTemplateSummary;
	}

	export interface CreateFlowTemplateRequest {

		/**A document that defines an entity. */
		definition: DefinitionDocument;
		compatibleNamespaceVersion?: number;
	}

	export interface CreateSystemInstanceResponse {

		/**An object that contains summary information about a system instance. */
		summary?: SystemInstanceSummary;
	}

	export interface CreateSystemInstanceRequest {
		tags?: Array<Tag>;

		/**A document that defines an entity. */
		definition: DefinitionDocument;
		target: CreateSystemInstanceRequestTarget;
		greengrassGroupName?: string;
		s3BucketName?: string;

		/**An object that specifies whether cloud metrics are collected in a deployment and, if so, what role is used to collect metrics. */
		metricsConfiguration?: MetricsConfiguration;
		flowActionsRoleArn?: string;
	}

	export enum CreateSystemInstanceRequestTarget { GREENGRASS = 0, CLOUD = 1 }

	export interface CreateSystemTemplateResponse {

		/**An object that contains information about a system. */
		summary?: SystemTemplateSummary;
	}

	export interface CreateSystemTemplateRequest {

		/**A document that defines an entity. */
		definition: DefinitionDocument;
		compatibleNamespaceVersion?: number;
	}

	export interface DeleteFlowTemplateRequest {
		id: string;
	}

	export interface DeleteNamespaceResponse {
		namespaceArn?: string;
		namespaceName?: string;
	}

	export interface DeleteSystemInstanceRequest {
		id?: string;
	}

	export interface DeleteSystemTemplateRequest {
		id: string;
	}

	export interface DeploySystemInstanceResponse {

		/**An object that contains summary information about a system instance. */
		summary: SystemInstanceSummary;
		greengrassDeploymentId?: string;
	}

	export interface DeploySystemInstanceRequest {
		id?: string;
	}

	export interface DeprecateFlowTemplateRequest {
		id: string;
	}

	export interface DeprecateSystemTemplateRequest {
		id: string;
	}

	export interface DescribeNamespaceResponse {
		namespaceArn?: string;
		namespaceName?: string;
		trackingNamespaceName?: string;
		trackingNamespaceVersion?: number;
		namespaceVersion?: number;
	}

	export interface DescribeNamespaceRequest {
		namespaceName?: string;
	}

	export interface DissociateEntityFromThingRequest {
		thingName: string;
		entityType: DissociateEntityFromThingRequestEntityType;
	}

	export enum DissociateEntityFromThingRequestEntityType { DEVICE = 0, SERVICE = 1, DEVICE_MODEL = 2, CAPABILITY = 3, STATE = 4, ACTION = 5, EVENT = 6, PROPERTY = 7, MAPPING = 8, ENUM = 9 }

	export interface GetEntitiesResponse {
		descriptions?: Array<EntityDescription>;
	}

	export interface GetEntitiesRequest {
		ids: Array<Urn>;
		namespaceVersion?: number;
	}

	export interface GetFlowTemplateResponse {

		/**An object that contains a workflow's definition and summary information. */
		description?: FlowTemplateDescription;
	}

	export interface GetFlowTemplateRequest {
		id: string;
		revisionNumber?: number;
	}

	export interface GetFlowTemplateRevisionsResponse {
		summaries?: Array<FlowTemplateSummary>;
		nextToken?: string;
	}

	export interface GetFlowTemplateRevisionsRequest {
		id: string;
		nextToken?: string;
		maxResults?: number;
	}

	export interface GetNamespaceDeletionStatusResponse {
		namespaceArn?: string;
		namespaceName?: string;
		status?: GetNamespaceDeletionStatusResponseStatus;
		errorCode?: GetNamespaceDeletionStatusResponseErrorCode;
		errorMessage?: string;
	}

	export enum GetNamespaceDeletionStatusResponseStatus { IN_PROGRESS = 0, SUCCEEDED = 1, FAILED = 2 }

	export enum GetNamespaceDeletionStatusResponseErrorCode { VALIDATION_FAILED = 0 }

	export interface GetSystemInstanceResponse {

		/**An object that contains a system instance definition and summary information. */
		description?: SystemInstanceDescription;
	}

	export interface GetSystemInstanceRequest {
		id: string;
	}

	export interface GetSystemTemplateResponse {

		/**An object that contains a system's definition document and summary information. */
		description?: SystemTemplateDescription;
	}

	export interface GetSystemTemplateRequest {
		id: string;
		revisionNumber?: number;
	}

	export interface GetSystemTemplateRevisionsResponse {
		summaries?: Array<SystemTemplateSummary>;
		nextToken?: string;
	}

	export interface GetSystemTemplateRevisionsRequest {
		id: string;
		nextToken?: string;
		maxResults?: number;
	}

	export interface GetUploadStatusResponse {
		uploadId: string;
		uploadStatus: GetUploadStatusResponseUploadStatus;
		namespaceArn?: string;
		namespaceName?: string;
		namespaceVersion?: number;
		failureReason?: Array<String>;
		createdDate: Date;
	}

	export enum GetUploadStatusResponseUploadStatus { IN_PROGRESS = 0, SUCCEEDED = 1, FAILED = 2 }

	export interface GetUploadStatusRequest {
		uploadId: string;
	}

	export interface ListFlowExecutionMessagesResponse {
		messages?: Array<FlowExecutionMessage>;
		nextToken?: string;
	}

	export interface ListFlowExecutionMessagesRequest {
		flowExecutionId: string;
		nextToken?: string;
		maxResults?: number;
	}

	export interface ListTagsForResourceResponse {
		tags?: Array<Tag>;
		nextToken?: string;
	}

	export interface ListTagsForResourceRequest {
		maxResults?: number;
		resourceArn: string;
		nextToken?: string;
	}

	export interface SearchEntitiesResponse {
		descriptions?: Array<EntityDescription>;
		nextToken?: string;
	}

	export interface SearchEntitiesRequest {
		entityTypes: Array<EntityType>;
		filters?: Array<EntityFilter>;
		nextToken?: string;
		maxResults?: number;
		namespaceVersion?: number;
	}

	export interface SearchFlowExecutionsResponse {
		summaries?: Array<FlowExecutionSummary>;
		nextToken?: string;
	}

	export interface SearchFlowExecutionsRequest {
		systemInstanceId: string;
		flowExecutionId?: string;
		startTime?: Date;
		endTime?: Date;
		nextToken?: string;
		maxResults?: number;
	}

	export interface SearchFlowTemplatesResponse {
		summaries?: Array<FlowTemplateSummary>;
		nextToken?: string;
	}

	export interface SearchFlowTemplatesRequest {
		filters?: Array<FlowTemplateFilter>;
		nextToken?: string;
		maxResults?: number;
	}

	export interface SearchSystemInstancesResponse {
		summaries?: Array<SystemInstanceSummary>;
		nextToken?: string;
	}

	export interface SearchSystemInstancesRequest {
		filters?: Array<SystemInstanceFilter>;
		nextToken?: string;
		maxResults?: number;
	}

	export interface SearchSystemTemplatesResponse {
		summaries?: Array<SystemTemplateSummary>;
		nextToken?: string;
	}

	export interface SearchSystemTemplatesRequest {
		filters?: Array<SystemTemplateFilter>;
		nextToken?: string;
		maxResults?: number;
	}

	export interface SearchThingsResponse {
		things?: Array<Thing>;
		nextToken?: string;
	}

	export interface SearchThingsRequest {
		entityId: string;
		nextToken?: string;
		maxResults?: number;
		namespaceVersion?: number;
	}

	export interface TagResourceRequest {
		resourceArn: string;
		tags: Array<Tag>;
	}

	export interface UndeploySystemInstanceResponse {

		/**An object that contains summary information about a system instance. */
		summary?: SystemInstanceSummary;
	}

	export interface UndeploySystemInstanceRequest {
		id?: string;
	}

	export interface UntagResourceRequest {
		resourceArn: string;
		tagKeys: Array<TagKey>;
	}

	export interface UpdateFlowTemplateResponse {

		/**An object that contains summary information about a workflow. */
		summary?: FlowTemplateSummary;
	}

	export interface UpdateFlowTemplateRequest {
		id: string;

		/**A document that defines an entity. */
		definition: DefinitionDocument;
		compatibleNamespaceVersion?: number;
	}

	export interface UpdateSystemTemplateResponse {

		/**An object that contains information about a system. */
		summary?: SystemTemplateSummary;
	}

	export interface UpdateSystemTemplateRequest {
		id: string;

		/**A document that defines an entity. */
		definition: DefinitionDocument;
		compatibleNamespaceVersion?: number;
	}

	export interface UploadEntityDefinitionsResponse {
		uploadId: string;
	}

	export interface UploadEntityDefinitionsRequest {

		/**A document that defines an entity. */
		document?: DefinitionDocument;
		syncWithPublicNamespace?: boolean;
		deprecateExistingEntities?: boolean;
	}


	/**A document that defines an entity.  */
	export interface DefinitionDocument {
		language: DefinitionDocumentLanguage;
		text: string;
	}

	export enum DefinitionDocumentLanguage { GRAPHQL = 0 }


	/**An object that contains summary information about a workflow. */
	export interface FlowTemplateSummary {
		id?: string;
		arn?: string;
		revisionNumber?: number;
		createdAt?: Date;
	}

	export enum DeploymentTarget { GREENGRASS = 0, CLOUD = 1 }


	/**An object that specifies whether cloud metrics are collected in a deployment and, if so, what role is used to collect metrics. */
	export interface MetricsConfiguration {
		cloudMetricEnabled?: boolean;
		metricRuleRoleArn?: string;
	}


	/**An object that contains summary information about a system instance. */
	export interface SystemInstanceSummary {
		id?: string;
		arn?: string;
		status?: SystemInstanceSummaryStatus;
		target?: SystemInstanceSummaryTarget;
		greengrassGroupName?: string;
		createdAt?: Date;
		updatedAt?: Date;
		greengrassGroupId?: string;
		greengrassGroupVersionId?: string;
	}

	export enum SystemInstanceSummaryStatus { NOT_DEPLOYED = 0, BOOTSTRAP = 1, DEPLOY_IN_PROGRESS = 2, DEPLOYED_IN_TARGET = 3, UNDEPLOY_IN_PROGRESS = 4, FAILED = 5, PENDING_DELETE = 6, DELETED_IN_TARGET = 7 }

	export enum SystemInstanceSummaryTarget { GREENGRASS = 0, CLOUD = 1 }


	/**An object that contains information about a system. */
	export interface SystemTemplateSummary {
		id?: string;
		arn?: string;
		revisionNumber?: number;
		createdAt?: Date;
	}

	export enum DefinitionLanguage { GRAPHQL = 0 }


	/**An object that contains the ID and revision number of a workflow or system that is part of a deployment. */
	export interface DependencyRevision {
		id?: string;
		revisionNumber?: number;
	}

	export enum EntityType { DEVICE = 0, SERVICE = 1, DEVICE_MODEL = 2, CAPABILITY = 3, STATE = 4, ACTION = 5, EVENT = 6, PROPERTY = 7, MAPPING = 8, ENUM = 9 }


	/**Describes the properties of an entity. */
	export interface EntityDescription {
		id?: string;
		arn?: string;
		type?: EntityDescriptionType;
		createdAt?: Date;

		/**A document that defines an entity. */
		definition?: DefinitionDocument;
	}

	export enum EntityDescriptionType { DEVICE = 0, SERVICE = 1, DEVICE_MODEL = 2, CAPABILITY = 3, STATE = 4, ACTION = 5, EVENT = 6, PROPERTY = 7, MAPPING = 8, ENUM = 9 }

	export enum EntityFilterName { NAME = 0, NAMESPACE = 1, SEMANTIC_TYPE_PATH = 2, REFERENCED_ENTITY_ID = 3 }


	/**An object that filters an entity search. Multiple filters function as OR criteria in the search. For example a search that includes a <code>NAMESPACE</code> and a <code>REFERENCED_ENTITY_ID</code> filter searches for entities in the specified namespace that use the entity specified by the value of <code>REFERENCED_ENTITY_ID</code>. */
	export interface EntityFilter {
		name?: EntityFilterName;
		value?: Array<EntityFilterValue>;
	}

	export enum EntityFilterName { NAME = 0, NAMESPACE = 1, SEMANTIC_TYPE_PATH = 2, REFERENCED_ENTITY_ID = 3 }

	export enum FlowExecutionEventType { EXECUTION_STARTED = 0, EXECUTION_FAILED = 1, EXECUTION_ABORTED = 2, EXECUTION_SUCCEEDED = 3, STEP_STARTED = 4, STEP_FAILED = 5, STEP_SUCCEEDED = 6, ACTIVITY_SCHEDULED = 7, ACTIVITY_STARTED = 8, ACTIVITY_FAILED = 9, ACTIVITY_SUCCEEDED = 10, START_FLOW_EXECUTION_TASK = 11, SCHEDULE_NEXT_READY_STEPS_TASK = 12, THING_ACTION_TASK = 13, THING_ACTION_TASK_FAILED = 14, THING_ACTION_TASK_SUCCEEDED = 15, ACKNOWLEDGE_TASK_MESSAGE = 16 }


	/**An object that contains information about a flow event. */
	export interface FlowExecutionMessage {
		messageId?: string;
		eventType?: FlowExecutionMessageEventType;
		timestamp?: Date;
		payload?: string;
	}

	export enum FlowExecutionMessageEventType { EXECUTION_STARTED = 0, EXECUTION_FAILED = 1, EXECUTION_ABORTED = 2, EXECUTION_SUCCEEDED = 3, STEP_STARTED = 4, STEP_FAILED = 5, STEP_SUCCEEDED = 6, ACTIVITY_SCHEDULED = 7, ACTIVITY_STARTED = 8, ACTIVITY_FAILED = 9, ACTIVITY_SUCCEEDED = 10, START_FLOW_EXECUTION_TASK = 11, SCHEDULE_NEXT_READY_STEPS_TASK = 12, THING_ACTION_TASK = 13, THING_ACTION_TASK_FAILED = 14, THING_ACTION_TASK_SUCCEEDED = 15, ACKNOWLEDGE_TASK_MESSAGE = 16 }

	export enum FlowExecutionStatus { RUNNING = 0, ABORTED = 1, SUCCEEDED = 2, FAILED = 3 }


	/**An object that contains summary information about a flow execution. */
	export interface FlowExecutionSummary {
		flowExecutionId?: string;
		status?: FlowExecutionSummaryStatus;
		systemInstanceId?: string;
		flowTemplateId?: string;
		createdAt?: Date;
		updatedAt?: Date;
	}

	export enum FlowExecutionSummaryStatus { RUNNING = 0, ABORTED = 1, SUCCEEDED = 2, FAILED = 3 }


	/**An object that contains a workflow's definition and summary information. */
	export interface FlowTemplateDescription {

		/**An object that contains summary information about a workflow. */
		summary?: FlowTemplateSummary;

		/**A document that defines an entity. */
		definition?: DefinitionDocument;
		validatedNamespaceVersion?: number;
	}

	export enum FlowTemplateFilterName { DEVICE_MODEL_ID = 0 }


	/**An object that filters a workflow search. */
	export interface FlowTemplateFilter {
		name: FlowTemplateFilterName;
		value: Array<FlowTemplateFilterValue>;
	}

	export enum FlowTemplateFilterName { DEVICE_MODEL_ID = 0 }

	export enum NamespaceDeletionStatus { IN_PROGRESS = 0, SUCCEEDED = 1, FAILED = 2 }

	export enum NamespaceDeletionStatusErrorCodes { VALIDATION_FAILED = 0 }


	/**An object that contains a system instance definition and summary information. */
	export interface SystemInstanceDescription {

		/**An object that contains summary information about a system instance. */
		summary?: SystemInstanceSummary;

		/**A document that defines an entity. */
		definition?: DefinitionDocument;
		s3BucketName?: string;

		/**An object that specifies whether cloud metrics are collected in a deployment and, if so, what role is used to collect metrics. */
		metricsConfiguration?: MetricsConfiguration;
		validatedNamespaceVersion?: number;
		validatedDependencyRevisions?: Array<DependencyRevision>;
		flowActionsRoleArn?: string;
	}


	/**An object that contains a system's definition document and summary information. */
	export interface SystemTemplateDescription {

		/**An object that contains information about a system. */
		summary?: SystemTemplateSummary;

		/**A document that defines an entity. */
		definition?: DefinitionDocument;
		validatedNamespaceVersion?: number;
	}

	export enum UploadStatus { IN_PROGRESS = 0, SUCCEEDED = 1, FAILED = 2 }

	export enum SystemInstanceDeploymentStatus { NOT_DEPLOYED = 0, BOOTSTRAP = 1, DEPLOY_IN_PROGRESS = 2, DEPLOYED_IN_TARGET = 3, UNDEPLOY_IN_PROGRESS = 4, FAILED = 5, PENDING_DELETE = 6, DELETED_IN_TARGET = 7 }

	export enum SystemInstanceFilterName { SYSTEM_TEMPLATE_ID = 0, STATUS = 1, GREENGRASS_GROUP_NAME = 2 }


	/**An object that filters a system instance search. Multiple filters function as OR criteria in the search. For example a search that includes a GREENGRASS_GROUP_NAME and a STATUS filter searches for system instances in the specified Greengrass group that have the specified status. */
	export interface SystemInstanceFilter {
		name?: SystemInstanceFilterName;
		value?: Array<SystemInstanceFilterValue>;
	}

	export enum SystemInstanceFilterName { SYSTEM_TEMPLATE_ID = 0, STATUS = 1, GREENGRASS_GROUP_NAME = 2 }

	export enum SystemTemplateFilterName { FLOW_TEMPLATE_ID = 0 }


	/**An object that filters a system search. */
	export interface SystemTemplateFilter {
		name: SystemTemplateFilterName;
		value: Array<SystemTemplateFilterValue>;
	}

	export enum SystemTemplateFilterName { FLOW_TEMPLATE_ID = 0 }


	/**Metadata assigned to an AWS IoT Things Graph resource consisting of a key-value pair. */
	export interface Tag {
		key: string;
		value: string;
	}


	/**An AWS IoT thing. */
	export interface Thing {
		thingArn?: string;
		thingName?: string;
	}

	@autoinject()
	export class DemoClient {
		constructor(private http: HttpClient) {
		}

		/**
		 * <p>Associates a device with a concrete thing that is in the user's registry.</p> <p>A thing can be associated with only one device at a time. If you associate a thing with a new device id, its previous association will be removed.</p>
		 * Post /#X-Amz-Target=IotThingsGraphFrontEndService.AssociateEntityToThing
		 * @return {AssociateEntityToThingResponse} Success
		 */
		AssociateEntityToThing(requestBody: AssociateEntityToThingRequest, headersHandler?: () => {[header: string]: string}): Promise<AssociateEntityToThingResponse> {
			return this.http.post('/#X-Amz-Target=IotThingsGraphFrontEndService.AssociateEntityToThing', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Creates a workflow template. Workflows can be created only in the user's namespace. (The public namespace contains only entities.) The workflow can contain only entities in the specified namespace. The workflow is validated against the entities in the latest version of the user's namespace unless another namespace version is specified in the request.
		 * Post /#X-Amz-Target=IotThingsGraphFrontEndService.CreateFlowTemplate
		 * @return {CreateFlowTemplateResponse} Success
		 */
		CreateFlowTemplate(requestBody: CreateFlowTemplateRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateFlowTemplateResponse> {
			return this.http.post('/#X-Amz-Target=IotThingsGraphFrontEndService.CreateFlowTemplate', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * <p>Creates a system instance. </p> <p>This action validates the system instance, prepares the deployment-related resources. For Greengrass deployments, it updates the Greengrass group that is specified by the <code>greengrassGroupName</code> parameter. It also adds a file to the S3 bucket specified by the <code>s3BucketName</code> parameter. You need to call <code>DeploySystemInstance</code> after running this action.</p> <p>For Greengrass deployments, since this action modifies and adds resources to a Greengrass group and an S3 bucket on the caller's behalf, the calling identity must have write permissions to both the specified Greengrass group and S3 bucket. Otherwise, the call will fail with an authorization error.</p> <p>For cloud deployments, this action requires a <code>flowActionsRoleArn</code> value. This is an IAM role that has permissions to access AWS services, such as AWS Lambda and AWS IoT, that the flow uses when it executes.</p> <p>If the definition document doesn't specify a version of the user's namespace, the latest version will be used by default.</p>
		 * Post /#X-Amz-Target=IotThingsGraphFrontEndService.CreateSystemInstance
		 * @return {CreateSystemInstanceResponse} Success
		 */
		CreateSystemInstance(requestBody: CreateSystemInstanceRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateSystemInstanceResponse> {
			return this.http.post('/#X-Amz-Target=IotThingsGraphFrontEndService.CreateSystemInstance', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Creates a system. The system is validated against the entities in the latest version of the user's namespace unless another namespace version is specified in the request.
		 * Post /#X-Amz-Target=IotThingsGraphFrontEndService.CreateSystemTemplate
		 * @return {CreateSystemTemplateResponse} Success
		 */
		CreateSystemTemplate(requestBody: CreateSystemTemplateRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateSystemTemplateResponse> {
			return this.http.post('/#X-Amz-Target=IotThingsGraphFrontEndService.CreateSystemTemplate', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Deletes a workflow. Any new system or deployment that contains this workflow will fail to update or deploy. Existing deployments that contain the workflow will continue to run (since they use a snapshot of the workflow taken at the time of deployment).
		 * Post /#X-Amz-Target=IotThingsGraphFrontEndService.DeleteFlowTemplate
		 * @return {DeleteFlowTemplateResponse} Success
		 */
		DeleteFlowTemplate(requestBody: DeleteFlowTemplateRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteFlowTemplateResponse> {
			return this.http.post('/#X-Amz-Target=IotThingsGraphFrontEndService.DeleteFlowTemplate', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Deletes the specified namespace. This action deletes all of the entities in the namespace. Delete the systems and flows that use entities in the namespace before performing this action.
		 * Post /#X-Amz-Target=IotThingsGraphFrontEndService.DeleteNamespace
		 * @return {DeleteNamespaceResponse} Success
		 */
		DeleteNamespace(requestBody: DeleteNamespaceRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteNamespaceResponse> {
			return this.http.post('/#X-Amz-Target=IotThingsGraphFrontEndService.DeleteNamespace', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * <p>Deletes a system instance. Only system instances that have never been deployed, or that have been undeployed can be deleted.</p> <p>Users can create a new system instance that has the same ID as a deleted system instance.</p>
		 * Post /#X-Amz-Target=IotThingsGraphFrontEndService.DeleteSystemInstance
		 * @return {DeleteSystemInstanceResponse} Success
		 */
		DeleteSystemInstance(requestBody: DeleteSystemInstanceRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteSystemInstanceResponse> {
			return this.http.post('/#X-Amz-Target=IotThingsGraphFrontEndService.DeleteSystemInstance', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Deletes a system. New deployments can't contain the system after its deletion. Existing deployments that contain the system will continue to work because they use a snapshot of the system that is taken when it is deployed.
		 * Post /#X-Amz-Target=IotThingsGraphFrontEndService.DeleteSystemTemplate
		 * @return {DeleteSystemTemplateResponse} Success
		 */
		DeleteSystemTemplate(requestBody: DeleteSystemTemplateRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteSystemTemplateResponse> {
			return this.http.post('/#X-Amz-Target=IotThingsGraphFrontEndService.DeleteSystemTemplate', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * <p> <b>Greengrass and Cloud Deployments</b> </p> <p>Deploys the system instance to the target specified in <code>CreateSystemInstance</code>. </p> <p> <b>Greengrass Deployments</b> </p> <p>If the system or any workflows and entities have been updated before this action is called, then the deployment will create a new Amazon Simple Storage Service resource file and then deploy it.</p> <p>Since this action creates a Greengrass deployment on the caller's behalf, the calling identity must have write permissions to the specified Greengrass group. Otherwise, the call will fail with an authorization error.</p> <p>For information about the artifacts that get added to your Greengrass core device when you use this API, see <a href="https://docs.aws.amazon.com/thingsgraph/latest/ug/iot-tg-greengrass.html">AWS IoT Things Graph and AWS IoT Greengrass</a>.</p>
		 * Post /#X-Amz-Target=IotThingsGraphFrontEndService.DeploySystemInstance
		 * @return {DeploySystemInstanceResponse} Success
		 */
		DeploySystemInstance(requestBody: DeploySystemInstanceRequest, headersHandler?: () => {[header: string]: string}): Promise<DeploySystemInstanceResponse> {
			return this.http.post('/#X-Amz-Target=IotThingsGraphFrontEndService.DeploySystemInstance', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Deprecates the specified workflow. This action marks the workflow for deletion. Deprecated flows can't be deployed, but existing deployments will continue to run.
		 * Post /#X-Amz-Target=IotThingsGraphFrontEndService.DeprecateFlowTemplate
		 * @return {DeprecateFlowTemplateResponse} Success
		 */
		DeprecateFlowTemplate(requestBody: DeprecateFlowTemplateRequest, headersHandler?: () => {[header: string]: string}): Promise<DeprecateFlowTemplateResponse> {
			return this.http.post('/#X-Amz-Target=IotThingsGraphFrontEndService.DeprecateFlowTemplate', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Deprecates the specified system.
		 * Post /#X-Amz-Target=IotThingsGraphFrontEndService.DeprecateSystemTemplate
		 * @return {DeprecateSystemTemplateResponse} Success
		 */
		DeprecateSystemTemplate(requestBody: DeprecateSystemTemplateRequest, headersHandler?: () => {[header: string]: string}): Promise<DeprecateSystemTemplateResponse> {
			return this.http.post('/#X-Amz-Target=IotThingsGraphFrontEndService.DeprecateSystemTemplate', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Gets the latest version of the user's namespace and the public version that it is tracking.
		 * Post /#X-Amz-Target=IotThingsGraphFrontEndService.DescribeNamespace
		 * @return {DescribeNamespaceResponse} Success
		 */
		DescribeNamespace(requestBody: DescribeNamespaceRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeNamespaceResponse> {
			return this.http.post('/#X-Amz-Target=IotThingsGraphFrontEndService.DescribeNamespace', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Dissociates a device entity from a concrete thing. The action takes only the type of the entity that you need to dissociate because only one entity of a particular type can be associated with a thing.
		 * Post /#X-Amz-Target=IotThingsGraphFrontEndService.DissociateEntityFromThing
		 * @return {DissociateEntityFromThingResponse} Success
		 */
		DissociateEntityFromThing(requestBody: DissociateEntityFromThingRequest, headersHandler?: () => {[header: string]: string}): Promise<DissociateEntityFromThingResponse> {
			return this.http.post('/#X-Amz-Target=IotThingsGraphFrontEndService.DissociateEntityFromThing', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * <p>Gets definitions of the specified entities. Uses the latest version of the user's namespace by default. This API returns the following TDM entities.</p> <ul> <li> <p>Properties</p> </li> <li> <p>States</p> </li> <li> <p>Events</p> </li> <li> <p>Actions</p> </li> <li> <p>Capabilities</p> </li> <li> <p>Mappings</p> </li> <li> <p>Devices</p> </li> <li> <p>Device Models</p> </li> <li> <p>Services</p> </li> </ul> <p>This action doesn't return definitions for systems, flows, and deployments.</p>
		 * Post /#X-Amz-Target=IotThingsGraphFrontEndService.GetEntities
		 * @return {GetEntitiesResponse} Success
		 */
		GetEntities(requestBody: GetEntitiesRequest, headersHandler?: () => {[header: string]: string}): Promise<GetEntitiesResponse> {
			return this.http.post('/#X-Amz-Target=IotThingsGraphFrontEndService.GetEntities', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Gets the latest version of the <code>DefinitionDocument</code> and <code>FlowTemplateSummary</code> for the specified workflow.
		 * Post /#X-Amz-Target=IotThingsGraphFrontEndService.GetFlowTemplate
		 * @return {GetFlowTemplateResponse} Success
		 */
		GetFlowTemplate(requestBody: GetFlowTemplateRequest, headersHandler?: () => {[header: string]: string}): Promise<GetFlowTemplateResponse> {
			return this.http.post('/#X-Amz-Target=IotThingsGraphFrontEndService.GetFlowTemplate', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Gets revisions of the specified workflow. Only the last 100 revisions are stored. If the workflow has been deprecated, this action will return revisions that occurred before the deprecation. This action won't work for workflows that have been deleted.
		 * Post /#X-Amz-Target=IotThingsGraphFrontEndService.GetFlowTemplateRevisions
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetFlowTemplateRevisionsResponse} Success
		 */
		GetFlowTemplateRevisions(maxResults: string, nextToken: string, requestBody: GetFlowTemplateRevisionsRequest, headersHandler?: () => {[header: string]: string}): Promise<GetFlowTemplateRevisionsResponse> {
			return this.http.post('/#X-Amz-Target=IotThingsGraphFrontEndService.GetFlowTemplateRevisions?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Gets the status of a namespace deletion task.
		 * Post /#X-Amz-Target=IotThingsGraphFrontEndService.GetNamespaceDeletionStatus
		 * @return {GetNamespaceDeletionStatusResponse} Success
		 */
		GetNamespaceDeletionStatus(requestBody: GetNamespaceDeletionStatusRequest, headersHandler?: () => {[header: string]: string}): Promise<GetNamespaceDeletionStatusResponse> {
			return this.http.post('/#X-Amz-Target=IotThingsGraphFrontEndService.GetNamespaceDeletionStatus', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Gets a system instance.
		 * Post /#X-Amz-Target=IotThingsGraphFrontEndService.GetSystemInstance
		 * @return {GetSystemInstanceResponse} Success
		 */
		GetSystemInstance(requestBody: GetSystemInstanceRequest, headersHandler?: () => {[header: string]: string}): Promise<GetSystemInstanceResponse> {
			return this.http.post('/#X-Amz-Target=IotThingsGraphFrontEndService.GetSystemInstance', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Gets a system.
		 * Post /#X-Amz-Target=IotThingsGraphFrontEndService.GetSystemTemplate
		 * @return {GetSystemTemplateResponse} Success
		 */
		GetSystemTemplate(requestBody: GetSystemTemplateRequest, headersHandler?: () => {[header: string]: string}): Promise<GetSystemTemplateResponse> {
			return this.http.post('/#X-Amz-Target=IotThingsGraphFrontEndService.GetSystemTemplate', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Gets revisions made to the specified system template. Only the previous 100 revisions are stored. If the system has been deprecated, this action will return the revisions that occurred before its deprecation. This action won't work with systems that have been deleted.
		 * Post /#X-Amz-Target=IotThingsGraphFrontEndService.GetSystemTemplateRevisions
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetSystemTemplateRevisionsResponse} Success
		 */
		GetSystemTemplateRevisions(maxResults: string, nextToken: string, requestBody: GetSystemTemplateRevisionsRequest, headersHandler?: () => {[header: string]: string}): Promise<GetSystemTemplateRevisionsResponse> {
			return this.http.post('/#X-Amz-Target=IotThingsGraphFrontEndService.GetSystemTemplateRevisions?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Gets the status of the specified upload.
		 * Post /#X-Amz-Target=IotThingsGraphFrontEndService.GetUploadStatus
		 * @return {GetUploadStatusResponse} Success
		 */
		GetUploadStatus(requestBody: GetUploadStatusRequest, headersHandler?: () => {[header: string]: string}): Promise<GetUploadStatusResponse> {
			return this.http.post('/#X-Amz-Target=IotThingsGraphFrontEndService.GetUploadStatus', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Returns a list of objects that contain information about events in a flow execution.
		 * Post /#X-Amz-Target=IotThingsGraphFrontEndService.ListFlowExecutionMessages
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListFlowExecutionMessagesResponse} Success
		 */
		ListFlowExecutionMessages(maxResults: string, nextToken: string, requestBody: ListFlowExecutionMessagesRequest, headersHandler?: () => {[header: string]: string}): Promise<ListFlowExecutionMessagesResponse> {
			return this.http.post('/#X-Amz-Target=IotThingsGraphFrontEndService.ListFlowExecutionMessages?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Lists all tags on an AWS IoT Things Graph resource.
		 * Post /#X-Amz-Target=IotThingsGraphFrontEndService.ListTagsForResource
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(maxResults: string, nextToken: string, requestBody: ListTagsForResourceRequest, headersHandler?: () => {[header: string]: string}): Promise<ListTagsForResourceResponse> {
			return this.http.post('/#X-Amz-Target=IotThingsGraphFrontEndService.ListTagsForResource?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Searches for entities of the specified type. You can search for entities in your namespace and the public namespace that you're tracking.
		 * Post /#X-Amz-Target=IotThingsGraphFrontEndService.SearchEntities
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {SearchEntitiesResponse} Success
		 */
		SearchEntities(maxResults: string, nextToken: string, requestBody: SearchEntitiesRequest, headersHandler?: () => {[header: string]: string}): Promise<SearchEntitiesResponse> {
			return this.http.post('/#X-Amz-Target=IotThingsGraphFrontEndService.SearchEntities?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Searches for AWS IoT Things Graph workflow execution instances.
		 * Post /#X-Amz-Target=IotThingsGraphFrontEndService.SearchFlowExecutions
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {SearchFlowExecutionsResponse} Success
		 */
		SearchFlowExecutions(maxResults: string, nextToken: string, requestBody: SearchFlowExecutionsRequest, headersHandler?: () => {[header: string]: string}): Promise<SearchFlowExecutionsResponse> {
			return this.http.post('/#X-Amz-Target=IotThingsGraphFrontEndService.SearchFlowExecutions?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Searches for summary information about workflows.
		 * Post /#X-Amz-Target=IotThingsGraphFrontEndService.SearchFlowTemplates
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {SearchFlowTemplatesResponse} Success
		 */
		SearchFlowTemplates(maxResults: string, nextToken: string, requestBody: SearchFlowTemplatesRequest, headersHandler?: () => {[header: string]: string}): Promise<SearchFlowTemplatesResponse> {
			return this.http.post('/#X-Amz-Target=IotThingsGraphFrontEndService.SearchFlowTemplates?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Searches for system instances in the user's account.
		 * Post /#X-Amz-Target=IotThingsGraphFrontEndService.SearchSystemInstances
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {SearchSystemInstancesResponse} Success
		 */
		SearchSystemInstances(maxResults: string, nextToken: string, requestBody: SearchSystemInstancesRequest, headersHandler?: () => {[header: string]: string}): Promise<SearchSystemInstancesResponse> {
			return this.http.post('/#X-Amz-Target=IotThingsGraphFrontEndService.SearchSystemInstances?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Searches for summary information about systems in the user's account. You can filter by the ID of a workflow to return only systems that use the specified workflow.
		 * Post /#X-Amz-Target=IotThingsGraphFrontEndService.SearchSystemTemplates
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {SearchSystemTemplatesResponse} Success
		 */
		SearchSystemTemplates(maxResults: string, nextToken: string, requestBody: SearchSystemTemplatesRequest, headersHandler?: () => {[header: string]: string}): Promise<SearchSystemTemplatesResponse> {
			return this.http.post('/#X-Amz-Target=IotThingsGraphFrontEndService.SearchSystemTemplates?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * <p>Searches for things associated with the specified entity. You can search by both device and device model.</p> <p>For example, if two different devices, camera1 and camera2, implement the camera device model, the user can associate thing1 to camera1 and thing2 to camera2. <code>SearchThings(camera2)</code> will return only thing2, but <code>SearchThings(camera)</code> will return both thing1 and thing2.</p> <p>This action searches for exact matches and doesn't perform partial text matching.</p>
		 * Post /#X-Amz-Target=IotThingsGraphFrontEndService.SearchThings
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {SearchThingsResponse} Success
		 */
		SearchThings(maxResults: string, nextToken: string, requestBody: SearchThingsRequest, headersHandler?: () => {[header: string]: string}): Promise<SearchThingsResponse> {
			return this.http.post('/#X-Amz-Target=IotThingsGraphFrontEndService.SearchThings?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Creates a tag for the specified resource.
		 * Post /#X-Amz-Target=IotThingsGraphFrontEndService.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest, headersHandler?: () => {[header: string]: string}): Promise<TagResourceResponse> {
			return this.http.post('/#X-Amz-Target=IotThingsGraphFrontEndService.TagResource', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Removes a system instance from its target (Cloud or Greengrass).
		 * Post /#X-Amz-Target=IotThingsGraphFrontEndService.UndeploySystemInstance
		 * @return {UndeploySystemInstanceResponse} Success
		 */
		UndeploySystemInstance(requestBody: UndeploySystemInstanceRequest, headersHandler?: () => {[header: string]: string}): Promise<UndeploySystemInstanceResponse> {
			return this.http.post('/#X-Amz-Target=IotThingsGraphFrontEndService.UndeploySystemInstance', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Removes a tag from the specified resource.
		 * Post /#X-Amz-Target=IotThingsGraphFrontEndService.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest, headersHandler?: () => {[header: string]: string}): Promise<UntagResourceResponse> {
			return this.http.post('/#X-Amz-Target=IotThingsGraphFrontEndService.UntagResource', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Updates the specified workflow. All deployed systems and system instances that use the workflow will see the changes in the flow when it is redeployed. If you don't want this behavior, copy the workflow (creating a new workflow with a different ID), and update the copy. The workflow can contain only entities in the specified namespace.
		 * Post /#X-Amz-Target=IotThingsGraphFrontEndService.UpdateFlowTemplate
		 * @return {UpdateFlowTemplateResponse} Success
		 */
		UpdateFlowTemplate(requestBody: UpdateFlowTemplateRequest, headersHandler?: () => {[header: string]: string}): Promise<UpdateFlowTemplateResponse> {
			return this.http.post('/#X-Amz-Target=IotThingsGraphFrontEndService.UpdateFlowTemplate', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Updates the specified system. You don't need to run this action after updating a workflow. Any deployment that uses the system will see the changes in the system when it is redeployed.
		 * Post /#X-Amz-Target=IotThingsGraphFrontEndService.UpdateSystemTemplate
		 * @return {UpdateSystemTemplateResponse} Success
		 */
		UpdateSystemTemplate(requestBody: UpdateSystemTemplateRequest, headersHandler?: () => {[header: string]: string}): Promise<UpdateSystemTemplateResponse> {
			return this.http.post('/#X-Amz-Target=IotThingsGraphFrontEndService.UpdateSystemTemplate', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * <p>Asynchronously uploads one or more entity definitions to the user's namespace. The <code>document</code> parameter is required if <code>syncWithPublicNamespace</code> and <code>deleteExistingEntites</code> are false. If the <code>syncWithPublicNamespace</code> parameter is set to <code>true</code>, the user's namespace will synchronize with the latest version of the public namespace. If <code>deprecateExistingEntities</code> is set to true, all entities in the latest version will be deleted before the new <code>DefinitionDocument</code> is uploaded.</p> <p>When a user uploads entity definitions for the first time, the service creates a new namespace for the user. The new namespace tracks the public namespace. Currently users can have only one namespace. The namespace version increments whenever a user uploads entity definitions that are backwards-incompatible and whenever a user sets the <code>syncWithPublicNamespace</code> parameter or the <code>deprecateExistingEntities</code> parameter to <code>true</code>.</p> <p>The IDs for all of the entities should be in URN format. Each entity must be in the user's namespace. Users can't create entities in the public namespace, but entity definitions can refer to entities in the public namespace.</p> <p>Valid entities are <code>Device</code>, <code>DeviceModel</code>, <code>Service</code>, <code>Capability</code>, <code>State</code>, <code>Action</code>, <code>Event</code>, <code>Property</code>, <code>Mapping</code>, <code>Enum</code>. </p>
		 * Post /#X-Amz-Target=IotThingsGraphFrontEndService.UploadEntityDefinitions
		 * @return {UploadEntityDefinitionsResponse} Success
		 */
		UploadEntityDefinitions(requestBody: UploadEntityDefinitionsRequest, headersHandler?: () => {[header: string]: string}): Promise<UploadEntityDefinitionsResponse> {
			return this.http.post('/#X-Amz-Target=IotThingsGraphFrontEndService.UploadEntityDefinitions', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}
	}

}

