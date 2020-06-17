import Axios from 'axios';
import { AxiosResponse } from 'axios';
export namespace My_Demo_Client {

	/** Result structure used in response to a request to create a project.  */
	export interface CreateProjectResult {

		/**Detailed information about an AWS Mobile Hub project. */
		details?: ProjectDetails;
	}


	/** The service has encountered an unexpected error condition which prevents it from servicing the request.  */
	export interface InternalFailureException {

		/**The Exception Error Message. */
		message?: string;
	}


	/** The service is temporarily unavailable. The request should be retried after some time delay.  */
	export interface ServiceUnavailableException {

		/**The Exception Error Message. */
		message?: string;
	}


	/** Credentials of the caller are insufficient to authorize the request.  */
	export interface UnauthorizedException {

		/**The Exception Error Message. */
		message?: string;
	}


	/** Too many requests have been received for this AWS account in too short a time. The request should be retried after some time delay.  */
	export interface TooManyRequestsException {

		/**The Exception Error Message. */
		message?: string;
	}


	/** The request cannot be processed because some parameter is not valid or the project state prevents the operation from being performed.  */
	export interface BadRequestException {

		/**The Exception Error Message. */
		message?: string;
	}


	/** No entity can be found with the specified identifier.  */
	export interface NotFoundException {

		/**The Exception Error Message. */
		message?: string;
	}


	/** There are too many AWS Mobile Hub projects in the account or the account has exceeded the maximum number of resources in some AWS service. You should create another sub-account using AWS Organizations or remove some resources and retry your request.  */
	export interface LimitExceededException {

		/**The Exception Error Message. */
		message?: string;
	}


	/** Result structure used in response to request to delete a project.  */
	export interface DeleteProjectResult {

		/**List of AWS resources associated with a project. */
		deletedResources?: Array<Resource>;

		/**List of AWS resources associated with a project. */
		orphanedResources?: Array<Resource>;
	}


	/** Result structure contains the details of the bundle.  */
	export interface DescribeBundleResult {

		/**The details of the bundle. */
		details?: BundleDetails;
	}


	/** Result structure used for requests of project details.  */
	export interface DescribeProjectResult {

		/**Detailed information about an AWS Mobile Hub project. */
		details?: ProjectDetails;
	}


	/** Result structure which contains link to download custom-generated SDK and tool packages used to integrate mobile web or app clients with backed AWS resources.  */
	export interface ExportBundleResult {

		/**The download Url. */
		downloadUrl?: string;
	}


	/** Result structure used for requests to export project configuration details.  */
	export interface ExportProjectResult {

		/**The download Url. */
		downloadUrl?: string;

		/**URL which can be shared to allow other AWS users to create their own project in AWS Mobile Hub with the same configuration as the specified project. This URL pertains to a snapshot in time of the project configuration that is created when this API is called. If you want to share additional changes to your project configuration, then you will need to create and share a new snapshot by calling this method again. */
		shareUrl?: string;

		/**Unique identifier for the exported snapshot of the project configuration. This snapshot identifier is included in the share URL. */
		snapshotId?: string;
	}


	/** Result structure contains a list of all available bundles with details.  */
	export interface ListBundlesResult {

		/**A list of bundles. */
		bundleList?: Array<BundleDetails>;

		/**Pagination token. Set to null to start listing records from start. If non-null pagination token is returned in a result, then pass its value in here in another request to list more entries. */
		nextToken?: string;
	}


	/** Result structure used for requests to list projects in AWS Mobile Hub.  */
	export interface ListProjectsResult {

		/**List of projects. */
		projects?: Array<ProjectSummary>;

		/**Pagination token. Set to null to start listing records from start. If non-null pagination token is returned in a result, then pass its value in here in another request to list more entries. */
		nextToken?: string;
	}


	/** Result structure used for requests to updated project configuration.  */
	export interface UpdateProjectResult {

		/**Detailed information about an AWS Mobile Hub project. */
		details?: ProjectDetails;
	}


	/** Account Action is required in order to continue the request.  */
	export interface AccountActionRequiredException {

		/**The Exception Error Message. */
		message?: string;
	}


	/** The details of the bundle.  */
	export interface BundleDetails {

		/**Unique bundle identifier. */
		bundleId?: string;

		/**Title of the download bundle. */
		title?: string;

		/**Version of the download bundle. */
		version?: string;

		/**Description of the download bundle. */
		description?: string;

		/**Icon for the download bundle. */
		iconUrl?: string;

		/**Developer desktop or mobile app or website platforms. */
		availablePlatforms?: Array<Platform>;
	}


	/** Request structure used to request a project be created.  */
	export interface CreateProjectRequest {

		/**Binary file data. */
		contents?: string;
	}


	/** Detailed information about an AWS Mobile Hub project.  */
	export interface ProjectDetails {

		/**Name of the project. */
		name?: string;

		/**Unique project identifier. */
		projectId?: string;

		/**Default region to use for AWS resource creation in the AWS Mobile Hub project. */
		region?: string;

		/**Synchronization state for a project. */
		state?: ProjectDetailsState;
		createdDate?: Date;
		lastUpdatedDate?: Date;
		consoleUrl?: string;

		/**List of AWS resources associated with a project. */
		resources?: Array<Resource>;
	}

	export enum ProjectDetailsState { NORMAL = 0, SYNCING = 1, IMPORTING = 2 }


	/** Developer desktop or target mobile app or website platform.  */
	export enum Platform { OSX = 0, WINDOWS = 1, LINUX = 2, OBJC = 3, SWIFT = 4, ANDROID = 5, JAVASCRIPT = 6 }


	/** Synchronization state for a project.  */
	export enum ProjectState { NORMAL = 0, SYNCING = 1, IMPORTING = 2 }


	/** Summary information about an AWS Mobile Hub project.  */
	export interface ProjectSummary {

		/**Name of the project. */
		name?: string;

		/**Unique project identifier. */
		projectId?: string;
	}


	/** Information about an instance of an AWS resource associated with a project.  */
	export interface Resource {

		/**Simplified name for type of AWS resource (e.g., bucket is an Amazon S3 bucket). */
		type?: string;

		/**Name of the AWS resource (e.g., for an Amazon S3 bucket this is the name of the bucket). */
		name?: string;

		/**AWS resource name which uniquely identifies the resource in AWS systems. */
		arn?: string;

		/**Identifies which feature in AWS Mobile Hub is associated with this AWS resource. */
		feature?: string;

		/**Key-value attribute pairs. */
		attributes?: Attributes;
	}


	/** Request structure used for requests to update project configuration.  */
	export interface UpdateProjectRequest {

		/**Binary file data. */
		contents?: string;
	}

	export class DemoClient {
		constructor(private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/') {
		}

		/**
		 * Creates an AWS Mobile Hub project.
		 * Post /projects
		 * @param {string} name  Name of the project. 
		 * @param {string} region  Default region where project resources should be created. 
		 * @param {string} snapshotId  Unique identifier for an exported snapshot of project configuration. This snapshot identifier is included in the share URL when a project is exported. 
		 * @return {CreateProjectResult} Success
		 */
		CreateProject(name: string, region: string, snapshotId: string, requestBody: CreateProjectBody, headersHandler?: () => {[header: string]: string}): Promise<CreateProjectResult> {
			return Axios.post<CreateProjectResult>(this.baseUri + '/projects?name=' + (name == null ? '' : encodeURIComponent(name)) + '&region=' + (region == null ? '' : encodeURIComponent(region)) + '&snapshotId=' + (snapshotId == null ? '' : encodeURIComponent(snapshotId)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Lists projects in AWS Mobile Hub.
		 * Get /projects
		 * @param {number} maxResults  Maximum number of records to list in a single response. 
		 * @param {string} nextToken  Pagination token. Set to null to start listing projects from start. If non-null pagination token is returned in a result, then pass its value in here in another request to list more projects. 
		 * @return {ListProjectsResult} Success
		 */
		ListProjects(maxResults: number, nextToken: string, headersHandler?: () => {[header: string]: string}): Promise<ListProjectsResult> {
			return Axios.get<ListProjectsResult>(this.baseUri + '/projects?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Delets a project in AWS Mobile Hub.
		 * Delete /projects/{projectId}
		 * @param {string} projectId  Unique project identifier. 
		 * @return {DeleteProjectResult} Success
		 */
		DeleteProject(projectId: string, headersHandler?: () => {[header: string]: string}): Promise<DeleteProjectResult> {
			return Axios.delete<DeleteProjectResult>(this.baseUri + '/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Get the bundle details for the requested bundle id.
		 * Get /bundles/{bundleId}
		 * @param {string} bundleId  Unique bundle identifier. 
		 * @return {DescribeBundleResult} Success
		 */
		DescribeBundle(bundleId: string, headersHandler?: () => {[header: string]: string}): Promise<DescribeBundleResult> {
			return Axios.get<DescribeBundleResult>(this.baseUri + '/bundles/' + (bundleId == null ? '' : encodeURIComponent(bundleId)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Generates customized software development kit (SDK) and or tool packages used to integrate mobile web or mobile app clients with backend AWS resources.
		 * Post /bundles/{bundleId}
		 * @param {string} bundleId  Unique bundle identifier. 
		 * @param {string} projectId  Unique project identifier. 
		 * @param {Platform} platform  Developer desktop or target application platform. 
		 * @return {ExportBundleResult} Success
		 */
		ExportBundle(bundleId: string, projectId: string, platform: Platform, headersHandler?: () => {[header: string]: string}): Promise<ExportBundleResult> {
			return Axios.post<ExportBundleResult>(this.baseUri + '/bundles/' + (bundleId == null ? '' : encodeURIComponent(bundleId)) + '&projectId=' + (projectId == null ? '' : encodeURIComponent(projectId)) + '&platform=' + platform, null, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Gets details about a project in AWS Mobile Hub.
		 * Get /project#projectId
		 * @param {string} projectId  Unique project identifier. 
		 * @param {boolean} syncFromResources  If set to true, causes AWS Mobile Hub to synchronize information from other services, e.g., update state of AWS CloudFormation stacks in the AWS Mobile Hub project. 
		 * @return {DescribeProjectResult} Success
		 */
		DescribeProject(projectId: string, syncFromResources: boolean, headersHandler?: () => {[header: string]: string}): Promise<DescribeProjectResult> {
			return Axios.get<DescribeProjectResult>(this.baseUri + '/project#projectId?projectId=' + (projectId == null ? '' : encodeURIComponent(projectId)) + '&syncFromResources=' + syncFromResources, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Exports project configuration to a snapshot which can be downloaded and shared. Note that mobile app push credentials are encrypted in exported projects, so they can only be shared successfully within the same AWS account.
		 * Post /exports/{projectId}
		 * @param {string} projectId  Unique project identifier. 
		 * @return {ExportProjectResult} Success
		 */
		ExportProject(projectId: string, headersHandler?: () => {[header: string]: string}): Promise<ExportProjectResult> {
			return Axios.post<ExportProjectResult>(this.baseUri + '/exports/' + (projectId == null ? '' : encodeURIComponent(projectId)), null, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * List all available bundles.
		 * Get /bundles
		 * @param {number} maxResults  Maximum number of records to list in a single response. 
		 * @param {string} nextToken  Pagination token. Set to null to start listing bundles from start. If non-null pagination token is returned in a result, then pass its value in here in another request to list more bundles. 
		 * @return {ListBundlesResult} Success
		 */
		ListBundles(maxResults: number, nextToken: string, headersHandler?: () => {[header: string]: string}): Promise<ListBundlesResult> {
			return Axios.get<ListBundlesResult>(this.baseUri + '/bundles?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Update an existing project.
		 * Post /update#projectId
		 * @param {string} projectId  Unique project identifier. 
		 * @return {UpdateProjectResult} Success
		 */
		UpdateProject(projectId: string, requestBody: UpdateProjectBody, headersHandler?: () => {[header: string]: string}): Promise<UpdateProjectResult> {
			return Axios.post<UpdateProjectResult>(this.baseUri + '/update#projectId?projectId=' + (projectId == null ? '' : encodeURIComponent(projectId)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}
	}

	export interface CreateProjectBody {

		/**Binary file data. */
		contents?: string;
	}

	export interface UpdateProjectBody {

		/**Binary file data. */
		contents?: string;
	}

}

