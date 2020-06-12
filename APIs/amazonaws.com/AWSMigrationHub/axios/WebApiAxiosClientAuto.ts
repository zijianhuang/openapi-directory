import Axios from 'axios';
import { AxiosResponse } from 'axios';
export namespace My_Demo_Client {
	export interface AssociateCreatedArtifactRequest {
		ProgressUpdateStream: string;
		MigrationTaskName: string;

		/**An ARN of the AWS cloud resource target receiving the migration (e.g., AMI, EC2 instance, RDS instance, etc.). */
		CreatedArtifact: CreatedArtifact;
		DryRun?: boolean;
	}

	export interface AssociateDiscoveredResourceRequest {
		ProgressUpdateStream: string;
		MigrationTaskName: string;

		/**Object representing the on-premises resource being migrated. */
		DiscoveredResource: DiscoveredResource;
		DryRun?: boolean;
	}

	export interface CreateProgressUpdateStreamRequest {
		ProgressUpdateStreamName: string;
		DryRun?: boolean;
	}

	export interface DeleteProgressUpdateStreamRequest {
		ProgressUpdateStreamName: string;
		DryRun?: boolean;
	}

	export interface DescribeApplicationStateResult {
		ApplicationStatus?: DescribeApplicationStateResultApplicationStatus;
		LastUpdatedTime?: Date;
	}

	export enum DescribeApplicationStateResultApplicationStatus { NOT_STARTED = 0, IN_PROGRESS = 1, COMPLETED = 2 }

	export interface DescribeApplicationStateRequest {
		ApplicationId: string;
	}

	export interface DescribeMigrationTaskResult {

		/**Represents a migration task in a migration tool. */
		MigrationTask?: MigrationTask;
	}

	export interface DescribeMigrationTaskRequest {
		ProgressUpdateStream: string;
		MigrationTaskName: string;
	}

	export interface DisassociateCreatedArtifactRequest {
		ProgressUpdateStream: string;
		MigrationTaskName: string;
		CreatedArtifactName: string;
		DryRun?: boolean;
	}

	export interface DisassociateDiscoveredResourceRequest {
		ProgressUpdateStream: string;
		MigrationTaskName: string;
		ConfigurationId: string;
		DryRun?: boolean;
	}

	export interface ImportMigrationTaskRequest {
		ProgressUpdateStream: string;
		MigrationTaskName: string;
		DryRun?: boolean;
	}

	export interface ListApplicationStatesResult {
		ApplicationStateList?: Array<ApplicationState>;
		NextToken?: string;
	}

	export interface ListApplicationStatesRequest {
		ApplicationIds?: Array<ApplicationId>;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListCreatedArtifactsResult {
		NextToken?: string;
		CreatedArtifactList?: Array<CreatedArtifact>;
	}

	export interface ListCreatedArtifactsRequest {
		ProgressUpdateStream: string;
		MigrationTaskName: string;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListDiscoveredResourcesResult {
		NextToken?: string;
		DiscoveredResourceList?: Array<DiscoveredResource>;
	}

	export interface ListDiscoveredResourcesRequest {
		ProgressUpdateStream: string;
		MigrationTaskName: string;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListMigrationTasksResult {
		NextToken?: string;
		MigrationTaskSummaryList?: Array<MigrationTaskSummary>;
	}

	export interface ListMigrationTasksRequest {
		NextToken?: string;
		MaxResults?: number;
		ResourceName?: string;
	}

	export interface ListProgressUpdateStreamsResult {
		ProgressUpdateStreamSummaryList?: Array<ProgressUpdateStreamSummary>;
		NextToken?: string;
	}

	export interface ListProgressUpdateStreamsRequest {
		NextToken?: string;
		MaxResults?: number;
	}

	export interface NotifyApplicationStateRequest {
		ApplicationId: string;
		Status: NotifyApplicationStateRequestStatus;
		UpdateDateTime?: Date;
		DryRun?: boolean;
	}

	export enum NotifyApplicationStateRequestStatus { NOT_STARTED = 0, IN_PROGRESS = 1, COMPLETED = 2 }

	export interface NotifyMigrationTaskStateRequest {
		ProgressUpdateStream: string;
		MigrationTaskName: string;

		/**Task object encapsulating task information. */
		Task: Task;
		UpdateDateTime: Date;
		NextUpdateSeconds: number;
		DryRun?: boolean;
	}

	export interface PutResourceAttributesRequest {
		ProgressUpdateStream: string;
		MigrationTaskName: string;
		ResourceAttributeList: Array<ResourceAttribute>;
		DryRun?: boolean;
	}

	export enum ApplicationStatus { NOT_STARTED = 0, IN_PROGRESS = 1, COMPLETED = 2 }


	/**The state of an application discovered through Migration Hub import, the AWS Agentless Discovery Connector, or the AWS Application Discovery Agent. */
	export interface ApplicationState {
		ApplicationId?: string;
		ApplicationStatus?: ApplicationStateApplicationStatus;
		LastUpdatedTime?: Date;
	}

	export enum ApplicationStateApplicationStatus { NOT_STARTED = 0, IN_PROGRESS = 1, COMPLETED = 2 }


	/**An ARN of the AWS cloud resource target receiving the migration (e.g., AMI, EC2 instance, RDS instance, etc.). */
	export interface CreatedArtifact {
		Name: string;
		Description?: string;
	}


	/**Object representing the on-premises resource being migrated. */
	export interface DiscoveredResource {
		ConfigurationId: string;
		Description?: string;
	}


	/**Represents a migration task in a migration tool. */
	export interface MigrationTask {
		ProgressUpdateStream?: string;
		MigrationTaskName?: string;

		/**Task object encapsulating task information. */
		Task?: Task;
		UpdateDateTime?: Date;
		ResourceAttributeList?: Array<ResourceAttribute>;
	}


	/**<p>Attribute associated with a resource.</p> <p>Note the corresponding format required per type listed below:</p> <dl> <dt>IPV4</dt> <dd> <p> <code>x.x.x.x</code> </p> <p> <i>where x is an integer in the range [0,255]</i> </p> </dd> <dt>IPV6</dt> <dd> <p> <code>y : y : y : y : y : y : y : y</code> </p> <p> <i>where y is a hexadecimal between 0 and FFFF. [0, FFFF]</i> </p> </dd> <dt>MAC_ADDRESS</dt> <dd> <p> <code>^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$</code> </p> </dd> <dt>FQDN</dt> <dd> <p> <code>^[^&lt;&gt;{}\\\\/?,=\\p{Cntrl}]{1,256}$</code> </p> </dd> </dl> */
	export interface ResourceAttribute {
		Type: ResourceAttributeType;
		Value: string;
	}

	export enum ResourceAttributeType { IPV4_ADDRESS = 0, IPV6_ADDRESS = 1, MAC_ADDRESS = 2, FQDN = 3, VM_MANAGER_ID = 4, VM_MANAGED_OBJECT_REFERENCE = 5, VM_NAME = 6, VM_PATH = 7, BIOS_ID = 8, MOTHERBOARD_SERIAL_NUMBER = 9 }


	/**Task object encapsulating task information. */
	export interface Task {
		Status: TaskStatus;
		StatusDetail?: string;
		ProgressPercent?: number;
	}

	export enum TaskStatus { NOT_STARTED = 0, IN_PROGRESS = 1, FAILED = 2, COMPLETED = 3 }

	export enum Status { NOT_STARTED = 0, IN_PROGRESS = 1, FAILED = 2, COMPLETED = 3 }


	/**MigrationTaskSummary includes <code>MigrationTaskName</code>, <code>ProgressPercent</code>, <code>ProgressUpdateStream</code>, <code>Status</code>, and <code>UpdateDateTime</code> for each task. */
	export interface MigrationTaskSummary {
		ProgressUpdateStream?: string;
		MigrationTaskName?: string;
		Status?: MigrationTaskSummaryStatus;
		ProgressPercent?: number;
		StatusDetail?: string;
		UpdateDateTime?: Date;
	}

	export enum MigrationTaskSummaryStatus { NOT_STARTED = 0, IN_PROGRESS = 1, FAILED = 2, COMPLETED = 3 }


	/**Summary of the AWS resource used for access control that is implicitly linked to your AWS account. */
	export interface ProgressUpdateStreamSummary {
		ProgressUpdateStreamName?: string;
	}

	export enum ResourceAttributeType { IPV4_ADDRESS = 0, IPV6_ADDRESS = 1, MAC_ADDRESS = 2, FQDN = 3, VM_MANAGER_ID = 4, VM_MANAGED_OBJECT_REFERENCE = 5, VM_NAME = 6, VM_PATH = 7, BIOS_ID = 8, MOTHERBOARD_SERIAL_NUMBER = 9 }

	export class DemoClient {
		constructor(private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/') {
		}

		/**
		 * <p>Associates a created artifact of an AWS cloud resource, the target receiving the migration, with the migration task performed by a migration tool. This API has the following traits:</p> <ul> <li> <p>Migration tools can call the <code>AssociateCreatedArtifact</code> operation to indicate which AWS artifact is associated with a migration task.</p> </li> <li> <p>The created artifact name must be provided in ARN (Amazon Resource Name) format which will contain information about type and region; for example: <code>arn:aws:ec2:us-east-1:488216288981:image/ami-6d0ba87b</code>.</p> </li> <li> <p>Examples of the AWS resource behind the created artifact are, AMI's, EC2 instance, or DMS endpoint, etc.</p> </li> </ul>
		 * Post /#X-Amz-Target=AWSMigrationHub.AssociateCreatedArtifact
		 * @return {AssociateCreatedArtifactResult} Success
		 */
		AssociateCreatedArtifact(requestBody: AssociateCreatedArtifactRequest, headersHandler?: () => {[header: string]: string}): Promise<AssociateCreatedArtifactResult> {
			return Axios.post<AssociateCreatedArtifactResult>(this.baseUri + '/#X-Amz-Target=AWSMigrationHub.AssociateCreatedArtifact', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Associates a discovered resource ID from Application Discovery Service with a migration task.
		 * Post /#X-Amz-Target=AWSMigrationHub.AssociateDiscoveredResource
		 * @return {AssociateDiscoveredResourceResult} Success
		 */
		AssociateDiscoveredResource(requestBody: AssociateDiscoveredResourceRequest, headersHandler?: () => {[header: string]: string}): Promise<AssociateDiscoveredResourceResult> {
			return Axios.post<AssociateDiscoveredResourceResult>(this.baseUri + '/#X-Amz-Target=AWSMigrationHub.AssociateDiscoveredResource', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Creates a progress update stream which is an AWS resource used for access control as well as a namespace for migration task names that is implicitly linked to your AWS account. It must uniquely identify the migration tool as it is used for all updates made by the tool; however, it does not need to be unique for each AWS account because it is scoped to the AWS account.
		 * Post /#X-Amz-Target=AWSMigrationHub.CreateProgressUpdateStream
		 * @return {CreateProgressUpdateStreamResult} Success
		 */
		CreateProgressUpdateStream(requestBody: CreateProgressUpdateStreamRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateProgressUpdateStreamResult> {
			return Axios.post<CreateProgressUpdateStreamResult>(this.baseUri + '/#X-Amz-Target=AWSMigrationHub.CreateProgressUpdateStream', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * <p>Deletes a progress update stream, including all of its tasks, which was previously created as an AWS resource used for access control. This API has the following traits:</p> <ul> <li> <p>The only parameter needed for <code>DeleteProgressUpdateStream</code> is the stream name (same as a <code>CreateProgressUpdateStream</code> call).</p> </li> <li> <p>The call will return, and a background process will asynchronously delete the stream and all of its resources (tasks, associated resources, resource attributes, created artifacts).</p> </li> <li> <p>If the stream takes time to be deleted, it might still show up on a <code>ListProgressUpdateStreams</code> call.</p> </li> <li> <p> <code>CreateProgressUpdateStream</code>, <code>ImportMigrationTask</code>, <code>NotifyMigrationTaskState</code>, and all Associate[*] APIs related to the tasks belonging to the stream will throw "InvalidInputException" if the stream of the same name is in the process of being deleted.</p> </li> <li> <p>Once the stream and all of its resources are deleted, <code>CreateProgressUpdateStream</code> for a stream of the same name will succeed, and that stream will be an entirely new logical resource (without any resources associated with the old stream).</p> </li> </ul>
		 * Post /#X-Amz-Target=AWSMigrationHub.DeleteProgressUpdateStream
		 * @return {DeleteProgressUpdateStreamResult} Success
		 */
		DeleteProgressUpdateStream(requestBody: DeleteProgressUpdateStreamRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteProgressUpdateStreamResult> {
			return Axios.post<DeleteProgressUpdateStreamResult>(this.baseUri + '/#X-Amz-Target=AWSMigrationHub.DeleteProgressUpdateStream', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Gets the migration status of an application.
		 * Post /#X-Amz-Target=AWSMigrationHub.DescribeApplicationState
		 * @return {DescribeApplicationStateResult} Success
		 */
		DescribeApplicationState(requestBody: DescribeApplicationStateRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeApplicationStateResult> {
			return Axios.post<DescribeApplicationStateResult>(this.baseUri + '/#X-Amz-Target=AWSMigrationHub.DescribeApplicationState', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Retrieves a list of all attributes associated with a specific migration task.
		 * Post /#X-Amz-Target=AWSMigrationHub.DescribeMigrationTask
		 * @return {DescribeMigrationTaskResult} Success
		 */
		DescribeMigrationTask(requestBody: DescribeMigrationTaskRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeMigrationTaskResult> {
			return Axios.post<DescribeMigrationTaskResult>(this.baseUri + '/#X-Amz-Target=AWSMigrationHub.DescribeMigrationTask', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * <p>Disassociates a created artifact of an AWS resource with a migration task performed by a migration tool that was previously associated. This API has the following traits:</p> <ul> <li> <p>A migration user can call the <code>DisassociateCreatedArtifacts</code> operation to disassociate a created AWS Artifact from a migration task.</p> </li> <li> <p>The created artifact name must be provided in ARN (Amazon Resource Name) format which will contain information about type and region; for example: <code>arn:aws:ec2:us-east-1:488216288981:image/ami-6d0ba87b</code>.</p> </li> <li> <p>Examples of the AWS resource behind the created artifact are, AMI's, EC2 instance, or RDS instance, etc.</p> </li> </ul>
		 * Post /#X-Amz-Target=AWSMigrationHub.DisassociateCreatedArtifact
		 * @return {DisassociateCreatedArtifactResult} Success
		 */
		DisassociateCreatedArtifact(requestBody: DisassociateCreatedArtifactRequest, headersHandler?: () => {[header: string]: string}): Promise<DisassociateCreatedArtifactResult> {
			return Axios.post<DisassociateCreatedArtifactResult>(this.baseUri + '/#X-Amz-Target=AWSMigrationHub.DisassociateCreatedArtifact', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Disassociate an Application Discovery Service discovered resource from a migration task.
		 * Post /#X-Amz-Target=AWSMigrationHub.DisassociateDiscoveredResource
		 * @return {DisassociateDiscoveredResourceResult} Success
		 */
		DisassociateDiscoveredResource(requestBody: DisassociateDiscoveredResourceRequest, headersHandler?: () => {[header: string]: string}): Promise<DisassociateDiscoveredResourceResult> {
			return Axios.post<DisassociateDiscoveredResourceResult>(this.baseUri + '/#X-Amz-Target=AWSMigrationHub.DisassociateDiscoveredResource', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * <p>Registers a new migration task which represents a server, database, etc., being migrated to AWS by a migration tool.</p> <p>This API is a prerequisite to calling the <code>NotifyMigrationTaskState</code> API as the migration tool must first register the migration task with Migration Hub.</p>
		 * Post /#X-Amz-Target=AWSMigrationHub.ImportMigrationTask
		 * @return {ImportMigrationTaskResult} Success
		 */
		ImportMigrationTask(requestBody: ImportMigrationTaskRequest, headersHandler?: () => {[header: string]: string}): Promise<ImportMigrationTaskResult> {
			return Axios.post<ImportMigrationTaskResult>(this.baseUri + '/#X-Amz-Target=AWSMigrationHub.ImportMigrationTask', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Lists all the migration statuses for your applications. If you use the optional <code>ApplicationIds</code> parameter, only the migration statuses for those applications will be returned.
		 * Post /#X-Amz-Target=AWSMigrationHub.ListApplicationStates
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListApplicationStatesResult} Success
		 */
		ListApplicationStates(MaxResults: string, NextToken: string, requestBody: ListApplicationStatesRequest, headersHandler?: () => {[header: string]: string}): Promise<ListApplicationStatesResult> {
			return Axios.post<ListApplicationStatesResult>(this.baseUri + '/#X-Amz-Target=AWSMigrationHub.ListApplicationStates?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * <p>Lists the created artifacts attached to a given migration task in an update stream. This API has the following traits:</p> <ul> <li> <p>Gets the list of the created artifacts while migration is taking place.</p> </li> <li> <p>Shows the artifacts created by the migration tool that was associated by the <code>AssociateCreatedArtifact</code> API. </p> </li> <li> <p>Lists created artifacts in a paginated interface. </p> </li> </ul>
		 * Post /#X-Amz-Target=AWSMigrationHub.ListCreatedArtifacts
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListCreatedArtifactsResult} Success
		 */
		ListCreatedArtifacts(MaxResults: string, NextToken: string, requestBody: ListCreatedArtifactsRequest, headersHandler?: () => {[header: string]: string}): Promise<ListCreatedArtifactsResult> {
			return Axios.post<ListCreatedArtifactsResult>(this.baseUri + '/#X-Amz-Target=AWSMigrationHub.ListCreatedArtifacts?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Lists discovered resources associated with the given <code>MigrationTask</code>.
		 * Post /#X-Amz-Target=AWSMigrationHub.ListDiscoveredResources
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDiscoveredResourcesResult} Success
		 */
		ListDiscoveredResources(MaxResults: string, NextToken: string, requestBody: ListDiscoveredResourcesRequest, headersHandler?: () => {[header: string]: string}): Promise<ListDiscoveredResourcesResult> {
			return Axios.post<ListDiscoveredResourcesResult>(this.baseUri + '/#X-Amz-Target=AWSMigrationHub.ListDiscoveredResources?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * <p>Lists all, or filtered by resource name, migration tasks associated with the user account making this call. This API has the following traits:</p> <ul> <li> <p>Can show a summary list of the most recent migration tasks.</p> </li> <li> <p>Can show a summary list of migration tasks associated with a given discovered resource.</p> </li> <li> <p>Lists migration tasks in a paginated interface.</p> </li> </ul>
		 * Post /#X-Amz-Target=AWSMigrationHub.ListMigrationTasks
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListMigrationTasksResult} Success
		 */
		ListMigrationTasks(MaxResults: string, NextToken: string, requestBody: ListMigrationTasksRequest, headersHandler?: () => {[header: string]: string}): Promise<ListMigrationTasksResult> {
			return Axios.post<ListMigrationTasksResult>(this.baseUri + '/#X-Amz-Target=AWSMigrationHub.ListMigrationTasks?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Lists progress update streams associated with the user account making this call.
		 * Post /#X-Amz-Target=AWSMigrationHub.ListProgressUpdateStreams
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListProgressUpdateStreamsResult} Success
		 */
		ListProgressUpdateStreams(MaxResults: string, NextToken: string, requestBody: ListProgressUpdateStreamsRequest, headersHandler?: () => {[header: string]: string}): Promise<ListProgressUpdateStreamsResult> {
			return Axios.post<ListProgressUpdateStreamsResult>(this.baseUri + '/#X-Amz-Target=AWSMigrationHub.ListProgressUpdateStreams?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Sets the migration state of an application. For a given application identified by the value passed to <code>ApplicationId</code>, its status is set or updated by passing one of three values to <code>Status</code>: <code>NOT_STARTED | IN_PROGRESS | COMPLETED</code>.
		 * Post /#X-Amz-Target=AWSMigrationHub.NotifyApplicationState
		 * @return {NotifyApplicationStateResult} Success
		 */
		NotifyApplicationState(requestBody: NotifyApplicationStateRequest, headersHandler?: () => {[header: string]: string}): Promise<NotifyApplicationStateResult> {
			return Axios.post<NotifyApplicationStateResult>(this.baseUri + '/#X-Amz-Target=AWSMigrationHub.NotifyApplicationState', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * <p>Notifies Migration Hub of the current status, progress, or other detail regarding a migration task. This API has the following traits:</p> <ul> <li> <p>Migration tools will call the <code>NotifyMigrationTaskState</code> API to share the latest progress and status.</p> </li> <li> <p> <code>MigrationTaskName</code> is used for addressing updates to the correct target.</p> </li> <li> <p> <code>ProgressUpdateStream</code> is used for access control and to provide a namespace for each migration tool.</p> </li> </ul>
		 * Post /#X-Amz-Target=AWSMigrationHub.NotifyMigrationTaskState
		 * @return {NotifyMigrationTaskStateResult} Success
		 */
		NotifyMigrationTaskState(requestBody: NotifyMigrationTaskStateRequest, headersHandler?: () => {[header: string]: string}): Promise<NotifyMigrationTaskStateResult> {
			return Axios.post<NotifyMigrationTaskStateResult>(this.baseUri + '/#X-Amz-Target=AWSMigrationHub.NotifyMigrationTaskState', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * <p>Provides identifying details of the resource being migrated so that it can be associated in the Application Discovery Service repository. This association occurs asynchronously after <code>PutResourceAttributes</code> returns.</p> <important> <ul> <li> <p>Keep in mind that subsequent calls to PutResourceAttributes will override previously stored attributes. For example, if it is first called with a MAC address, but later, it is desired to <i>add</i> an IP address, it will then be required to call it with <i>both</i> the IP and MAC addresses to prevent overriding the MAC address.</p> </li> <li> <p>Note the instructions regarding the special use case of the <a href="https://docs.aws.amazon.com/migrationhub/latest/ug/API_PutResourceAttributes.html#migrationhub-PutResourceAttributes-request-ResourceAttributeList"> <code>ResourceAttributeList</code> </a> parameter when specifying any "VM" related value.</p> </li> </ul> </important> <note> <p>Because this is an asynchronous call, it will always return 200, whether an association occurs or not. To confirm if an association was found based on the provided details, call <code>ListDiscoveredResources</code>.</p> </note>
		 * Post /#X-Amz-Target=AWSMigrationHub.PutResourceAttributes
		 * @return {PutResourceAttributesResult} Success
		 */
		PutResourceAttributes(requestBody: PutResourceAttributesRequest, headersHandler?: () => {[header: string]: string}): Promise<PutResourceAttributesResult> {
			return Axios.post<PutResourceAttributesResult>(this.baseUri + '/#X-Amz-Target=AWSMigrationHub.PutResourceAttributes', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}
	}

}

