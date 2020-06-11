import Axios from 'axios';
import { AxiosResponse } from 'axios';
export namespace My_Demo_Client {
	export interface CreateAppResult {

		/**Amplify App represents different branches of a repository for building, deploying, and hosting. */
		app: App;
	}


	/** Custom rewrite / redirect rule.  */
	export interface CustomRule {
		source: string;
		target: string;
		status?: string;
		condition?: string;
	}

	export enum Stage { PRODUCTION = 0, BETA = 1, DEVELOPMENT = 2, EXPERIMENTAL = 3, PULL_REQUEST = 4 }


	/** Result structure for create backend environment.  */
	export interface CreateBackendEnvironmentResult {

		/**Backend environment for an Amplify App. */
		backendEnvironment: BackendEnvironment;
	}


	/** Result structure for create branch request.  */
	export interface CreateBranchResult {

		/**Branch for an Amplify App, which maps to a 3rd party repository branch. */
		branch: Branch;
	}


	/** Result structure for create a new deployment.  */
	export interface CreateDeploymentResult {
		jobId?: string;
		fileUploadUrls: FileUploadUrls;
		zipUploadUrl: string;
	}


	/** Result structure for the create Domain Association request.  */
	export interface CreateDomainAssociationResult {

		/**Structure for Domain Association, which associates a custom domain with an Amplify App. */
		domainAssociation: DomainAssociation;
	}


	/** Setting for the Subdomain.  */
	export interface SubDomainSetting {
		prefix: string;
		branchName: string;
	}


	/** Result structure for the create webhook request.  */
	export interface CreateWebhookResult {

		/**Structure for webhook, which associates a webhook with an Amplify App. */
		webhook: Webhook;
	}


	/** Result structure for an Amplify App delete request.  */
	export interface DeleteAppResult {

		/**Amplify App represents different branches of a repository for building, deploying, and hosting. */
		app: App;
	}


	/** Result structure of a delete backend environment result.  */
	export interface DeleteBackendEnvironmentResult {

		/**Backend environment for an Amplify App. */
		backendEnvironment: BackendEnvironment;
	}


	/** Result structure for delete branch request.  */
	export interface DeleteBranchResult {

		/**Branch for an Amplify App, which maps to a 3rd party repository branch. */
		branch: Branch;
	}

	export interface DeleteDomainAssociationResult {

		/**Structure for Domain Association, which associates a custom domain with an Amplify App. */
		domainAssociation: DomainAssociation;
	}


	/** Result structure for the delete job request.  */
	export interface DeleteJobResult {

		/**Structure for the summary of a Job. */
		jobSummary: JobSummary;
	}


	/** Result structure for the delete webhook request.  */
	export interface DeleteWebhookResult {

		/**Structure for webhook, which associates a webhook with an Amplify App. */
		webhook: Webhook;
	}


	/** Result structure for the generate access logs request.  */
	export interface GenerateAccessLogsResult {
		logUrl?: string;
	}

	export interface GetAppResult {

		/**Amplify App represents different branches of a repository for building, deploying, and hosting. */
		app: App;
	}


	/** Result structure for the get artifact request.  */
	export interface GetArtifactUrlResult {
		artifactId: string;
		artifactUrl: string;
	}


	/** Result structure for get backend environment result.  */
	export interface GetBackendEnvironmentResult {

		/**Backend environment for an Amplify App. */
		backendEnvironment: BackendEnvironment;
	}

	export interface GetBranchResult {

		/**Branch for an Amplify App, which maps to a 3rd party repository branch. */
		branch: Branch;
	}


	/** Result structure for the get Domain Association request.  */
	export interface GetDomainAssociationResult {

		/**Structure for Domain Association, which associates a custom domain with an Amplify App. */
		domainAssociation: DomainAssociation;
	}

	export interface GetJobResult {

		/**Structure for an execution job for an Amplify App. */
		job: Job;
	}


	/** Result structure for the get webhook request.  */
	export interface GetWebhookResult {

		/**Structure for webhook, which associates a webhook with an Amplify App. */
		webhook: Webhook;
	}


	/** Result structure for an Amplify App list request.  */
	export interface ListAppsResult {
		apps: Array<App>;
		nextToken?: string;
	}


	/** Result structure for the list artifacts request.  */
	export interface ListArtifactsResult {
		artifacts: Array<Artifact>;
		nextToken?: string;
	}


	/** Result structure for list backend environments result.  */
	export interface ListBackendEnvironmentsResult {
		backendEnvironments: Array<BackendEnvironment>;
		nextToken?: string;
	}


	/** Result structure for list branches request.  */
	export interface ListBranchesResult {
		branches: Array<Branch>;
		nextToken?: string;
	}


	/** Result structure for the list Domain Association request.  */
	export interface ListDomainAssociationsResult {
		domainAssociations: Array<DomainAssociation>;
		nextToken?: string;
	}


	/** Maximum number of records to list in a single response.  */
	export interface ListJobsResult {
		jobSummaries: Array<JobSummary>;
		nextToken?: string;
	}


	/** Response for list tags.  */
	export interface ListTagsForResourceResponse {
		tags?: TagMap;
	}


	/** Result structure for the list webhooks request.  */
	export interface ListWebhooksResult {
		webhooks: Array<Webhook>;
		nextToken?: string;
	}


	/** Result structure for start a deployment.  */
	export interface StartDeploymentResult {

		/**Structure for the summary of a Job. */
		jobSummary: JobSummary;
	}


	/** Result structure for run job request.  */
	export interface StartJobResult {

		/**Structure for the summary of a Job. */
		jobSummary: JobSummary;
	}


	/** Result structure for the stop job request.  */
	export interface StopJobResult {

		/**Structure for the summary of a Job. */
		jobSummary: JobSummary;
	}


	/** Result structure for an Amplify App update request.  */
	export interface UpdateAppResult {

		/**Amplify App represents different branches of a repository for building, deploying, and hosting. */
		app: App;
	}


	/** Result structure for update branch request.  */
	export interface UpdateBranchResult {

		/**Branch for an Amplify App, which maps to a 3rd party repository branch. */
		branch: Branch;
	}


	/** Result structure for the update Domain Association request.  */
	export interface UpdateDomainAssociationResult {

		/**Structure for Domain Association, which associates a custom domain with an Amplify App. */
		domainAssociation: DomainAssociation;
	}


	/** Result structure for the update webhook request.  */
	export interface UpdateWebhookResult {

		/**Structure for webhook, which associates a webhook with an Amplify App. */
		webhook: Webhook;
	}

	export enum Platform { WEB = 0 }


	/** Structure with Production Branch information.  */
	export interface ProductionBranch {
		lastDeployTime?: Date;
		status?: string;
		thumbnailUrl?: string;
		branchName?: string;
	}


	/** Structure with auto branch creation config.  */
	export interface AutoBranchCreationConfig {
		stage?: AutoBranchCreationConfigStage;
		framework?: string;
		enableAutoBuild?: boolean;
		environmentVariables?: EnvironmentVariables;
		basicAuthCredentials?: string;
		enableBasicAuth?: boolean;

		/**
		 * BuildSpec file for Amplify app build.
		 * Max length: 25000
		 * Min length: 1
		 */
		buildSpec?: string;
		enablePullRequestPreview?: boolean;
		pullRequestEnvironmentName?: string;
	}

	export enum AutoBranchCreationConfigStage { PRODUCTION = 0, BETA = 1, DEVELOPMENT = 2, EXPERIMENTAL = 3, PULL_REQUEST = 4 }


	/** Amplify App represents different branches of a repository for building, deploying, and hosting.  */
	export interface App {
		appId: string;
		appArn: string;
		name: string;
		tags?: TagMap;
		description: string;
		repository: string;
		platform: AppPlatform;
		createTime: Date;
		updateTime: Date;
		iamServiceRoleArn?: string;
		environmentVariables: EnvironmentVariables;
		defaultDomain: string;
		enableBranchAutoBuild: boolean;
		enableBasicAuth: boolean;
		basicAuthCredentials?: string;
		customRules?: Array<CustomRule>;

		/**Structure with Production Branch information. */
		productionBranch?: ProductionBranch;

		/**
		 * BuildSpec file for Amplify app build.
		 * Max length: 25000
		 * Min length: 1
		 */
		buildSpec?: string;
		enableAutoBranchCreation?: boolean;
		autoBranchCreationPatterns?: Array<AutoBranchCreationPattern>;

		/**Structure with auto branch creation config. */
		autoBranchCreationConfig?: AutoBranchCreationConfig;
	}

	export enum AppPlatform { WEB = 0 }


	/** Structure for artifact.  */
	export interface Artifact {
		artifactFileName: string;
		artifactId: string;
	}


	/** Backend environment for an Amplify App.  */
	export interface BackendEnvironment {
		backendEnvironmentArn: string;
		environmentName: string;
		stackName?: string;
		deploymentArtifacts?: string;
		createTime: Date;
		updateTime: Date;
	}


	/** Branch for an Amplify App, which maps to a 3rd party repository branch.  */
	export interface Branch {
		branchArn: string;
		branchName: string;
		description: string;
		tags?: TagMap;
		stage: BranchStage;
		displayName: string;
		enableNotification: boolean;
		createTime: Date;
		updateTime: Date;
		environmentVariables: EnvironmentVariables;
		enableAutoBuild: boolean;
		customDomains: Array<CustomDomain>;
		framework: string;
		activeJobId: string;
		totalNumberOfJobs: string;
		enableBasicAuth: boolean;
		thumbnailUrl?: string;
		basicAuthCredentials?: string;

		/**
		 * BuildSpec file for Amplify app build.
		 * Max length: 25000
		 * Min length: 1
		 */
		buildSpec?: string;

		/**The content TTL for the website in seconds. */
		ttl: string;
		associatedResources?: Array<AssociatedResource>;
		enablePullRequestPreview: boolean;
		pullRequestEnvironmentName?: string;
		destinationBranch?: string;
		sourceBranch?: string;
		backendEnvironmentArn?: string;
	}

	export enum BranchStage { PRODUCTION = 0, BETA = 1, DEVELOPMENT = 2, EXPERIMENTAL = 3, PULL_REQUEST = 4 }


	/** Request structure used to create Apps in Amplify.  */
	export interface CreateAppRequest {
		name: string;
		description?: string;
		repository?: string;
		platform?: CreateAppRequestPlatform;
		iamServiceRoleArn?: string;
		oauthToken?: string;
		accessToken?: string;
		environmentVariables?: EnvironmentVariables;
		enableBranchAutoBuild?: boolean;
		enableBasicAuth?: boolean;
		basicAuthCredentials?: string;
		customRules?: Array<CustomRule>;
		tags?: TagMap;

		/**
		 * BuildSpec file for Amplify app build.
		 * Max length: 25000
		 * Min length: 1
		 */
		buildSpec?: string;
		enableAutoBranchCreation?: boolean;
		autoBranchCreationPatterns?: Array<AutoBranchCreationPattern>;

		/**Structure with auto branch creation config. */
		autoBranchCreationConfig?: AutoBranchCreationConfig;
	}

	export enum CreateAppRequestPlatform { WEB = 0 }


	/** Request structure for a backend environment create request.  */
	export interface CreateBackendEnvironmentRequest {
		environmentName: string;
		stackName?: string;
		deploymentArtifacts?: string;
	}


	/** Request structure for a branch create request.  */
	export interface CreateBranchRequest {
		branchName: string;
		description?: string;
		stage?: CreateBranchRequestStage;
		framework?: string;
		enableNotification?: boolean;
		enableAutoBuild?: boolean;
		environmentVariables?: EnvironmentVariables;
		basicAuthCredentials?: string;
		enableBasicAuth?: boolean;
		tags?: TagMap;

		/**
		 * BuildSpec file for Amplify app build.
		 * Max length: 25000
		 * Min length: 1
		 */
		buildSpec?: string;

		/**The content TTL for the website in seconds. */
		ttl?: string;
		displayName?: string;
		enablePullRequestPreview?: boolean;
		pullRequestEnvironmentName?: string;
		backendEnvironmentArn?: string;
	}

	export enum CreateBranchRequestStage { PRODUCTION = 0, BETA = 1, DEVELOPMENT = 2, EXPERIMENTAL = 3, PULL_REQUEST = 4 }


	/** Request structure for create a new deployment.  */
	export interface CreateDeploymentRequest {
		fileMap?: FileMap;
	}


	/** Request structure for create Domain Association request.  */
	export interface CreateDomainAssociationRequest {
		domainName: string;
		enableAutoSubDomain?: boolean;
		subDomainSettings: Array<SubDomainSetting>;
	}


	/** Structure for Domain Association, which associates a custom domain with an Amplify App.  */
	export interface DomainAssociation {
		domainAssociationArn: string;
		domainName: string;
		enableAutoSubDomain: boolean;
		domainStatus: DomainAssociationDomainStatus;
		statusReason: string;
		certificateVerificationDNSRecord?: string;
		subDomains: Array<SubDomain>;
	}

	export enum DomainAssociationDomainStatus { PENDING_VERIFICATION = 0, IN_PROGRESS = 1, AVAILABLE = 2, PENDING_DEPLOYMENT = 3, FAILED = 4, CREATING = 5, REQUESTING_CERTIFICATE = 6, UPDATING = 7 }


	/** Request structure for create webhook request.  */
	export interface CreateWebhookRequest {
		branchName: string;
		description?: string;
	}


	/** Structure for webhook, which associates a webhook with an Amplify App.  */
	export interface Webhook {
		webhookArn: string;
		webhookId: string;
		webhookUrl: string;
		branchName: string;
		description: string;
		createTime: Date;
		updateTime: Date;
	}


	/** Structure for the summary of a Job.  */
	export interface JobSummary {
		jobArn: string;
		jobId: string;
		commitId: string;
		commitMessage: string;
		commitTime: Date;
		startTime: Date;
		status: JobSummaryStatus;
		endTime?: Date;
		jobType: JobSummaryJobType;
	}

	export enum JobSummaryStatus { PENDING = 0, PROVISIONING = 1, RUNNING = 2, FAILED = 3, SUCCEED = 4, CANCELLING = 5, CANCELLED = 6 }

	export enum JobSummaryJobType { RELEASE = 0, RETRY = 1, MANUAL = 2, WEB_HOOK = 3 }

	export enum DomainStatus { PENDING_VERIFICATION = 0, IN_PROGRESS = 1, AVAILABLE = 2, PENDING_DEPLOYMENT = 3, FAILED = 4, CREATING = 5, REQUESTING_CERTIFICATE = 6, UPDATING = 7 }


	/** Request structure for the generate access logs request.  */
	export interface GenerateAccessLogsRequest {
		startTime?: Date;
		endTime?: Date;
		domainName: string;
	}


	/** Structure for an execution job for an Amplify App.  */
	export interface Job {

		/**Structure for the summary of a Job. */
		summary: JobSummary;
		steps: Array<Step>;
	}

	export enum JobStatus { PENDING = 0, PROVISIONING = 1, RUNNING = 2, FAILED = 3, SUCCEED = 4, CANCELLING = 5, CANCELLED = 6 }

	export enum JobType { RELEASE = 0, RETRY = 1, MANUAL = 2, WEB_HOOK = 3 }


	/** Request structure for list backend environments request.  */
	export interface ListBackendEnvironmentsRequest {
		environmentName?: string;
	}


	/** Request structure for start a deployment.  */
	export interface StartDeploymentRequest {
		jobId?: string;
		sourceUrl?: string;
	}


	/** Request structure for Start job request.  */
	export interface StartJobRequest {
		jobId?: string;
		jobType: StartJobRequestJobType;
		jobReason?: string;
		commitId?: string;
		commitMessage?: string;
		commitTime?: Date;
	}

	export enum StartJobRequestJobType { RELEASE = 0, RETRY = 1, MANUAL = 2, WEB_HOOK = 3 }


	/** Structure for an execution step for an execution job, for an Amplify App.  */
	export interface Step {
		stepName: string;
		startTime: Date;
		status: StepStatus;
		endTime: Date;
		logUrl?: string;
		artifactsUrl?: string;
		testArtifactsUrl?: string;
		testConfigUrl?: string;
		screenshots?: Screenshots;
		statusReason?: string;
		context?: string;
	}

	export enum StepStatus { PENDING = 0, PROVISIONING = 1, RUNNING = 2, FAILED = 3, SUCCEED = 4, CANCELLING = 5, CANCELLED = 6 }


	/** Subdomain for the Domain Association.  */
	export interface SubDomain {

		/**Setting for the Subdomain. */
		subDomainSetting: SubDomainSetting;
		verified: boolean;
		dnsRecord: string;
	}


	/** Request structure used to tag resource.  */
	export interface TagResourceRequest {
		tags: TagMap;
	}


	/** Request structure for update App request.  */
	export interface UpdateAppRequest {
		name?: string;
		description?: string;
		platform?: UpdateAppRequestPlatform;
		iamServiceRoleArn?: string;
		environmentVariables?: EnvironmentVariables;
		enableBranchAutoBuild?: boolean;
		enableBasicAuth?: boolean;
		basicAuthCredentials?: string;
		customRules?: Array<CustomRule>;

		/**
		 * BuildSpec file for Amplify app build.
		 * Max length: 25000
		 * Min length: 1
		 */
		buildSpec?: string;
		enableAutoBranchCreation?: boolean;
		autoBranchCreationPatterns?: Array<AutoBranchCreationPattern>;

		/**Structure with auto branch creation config. */
		autoBranchCreationConfig?: AutoBranchCreationConfig;
		repository?: string;
		oauthToken?: string;
		accessToken?: string;
	}

	export enum UpdateAppRequestPlatform { WEB = 0 }


	/** Request structure for update branch request.  */
	export interface UpdateBranchRequest {
		description?: string;
		framework?: string;
		stage?: UpdateBranchRequestStage;
		enableNotification?: boolean;
		enableAutoBuild?: boolean;
		environmentVariables?: EnvironmentVariables;
		basicAuthCredentials?: string;
		enableBasicAuth?: boolean;

		/**
		 * BuildSpec file for Amplify app build.
		 * Max length: 25000
		 * Min length: 1
		 */
		buildSpec?: string;

		/**The content TTL for the website in seconds. */
		ttl?: string;
		displayName?: string;
		enablePullRequestPreview?: boolean;
		pullRequestEnvironmentName?: string;
		backendEnvironmentArn?: string;
	}

	export enum UpdateBranchRequestStage { PRODUCTION = 0, BETA = 1, DEVELOPMENT = 2, EXPERIMENTAL = 3, PULL_REQUEST = 4 }


	/** Request structure for update Domain Association request.  */
	export interface UpdateDomainAssociationRequest {
		enableAutoSubDomain?: boolean;
		subDomainSettings: Array<SubDomainSetting>;
	}


	/** Request structure for update webhook request.  */
	export interface UpdateWebhookRequest {
		branchName?: string;
		description?: string;
	}

	export class DemoClient {
		constructor(private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/') {
		}

		/**
		 * Creates a new Amplify App.
		 * Post apps
		 * @return {CreateAppResult} Success
		 */
		CreateApp(requestBody: CreateAppBody, headersHandler?: () => {[header: string]: string}): Promise<CreateAppResult> {
			return Axios.post<CreateAppResult>(this.baseUri + 'apps', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Lists existing Amplify Apps.
		 * Get apps
		 * @param {string} nextToken  Pagination token. If non-null pagination token is returned in a result, then pass its value in another request to fetch more entries. 
		 * @param {number} maxResults  Maximum number of records to list in a single response. 
		 * @return {ListAppsResult} Success
		 */
		ListApps(nextToken: string, maxResults: number, headersHandler?: () => {[header: string]: string}): Promise<ListAppsResult> {
			return Axios.get<ListAppsResult>(this.baseUri + 'apps?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Creates a new backend environment for an Amplify App.
		 * Post apps/{appId}/backendenvironments
		 * @param {string} appId  Unique Id for an Amplify App. 
		 * @return {CreateBackendEnvironmentResult} Success
		 */
		CreateBackendEnvironment(appId: string, requestBody: CreateBackendEnvironmentBody, headersHandler?: () => {[header: string]: string}): Promise<CreateBackendEnvironmentResult> {
			return Axios.post<CreateBackendEnvironmentResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/backendenvironments', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Lists backend environments for an Amplify App.
		 * Get apps/{appId}/backendenvironments
		 * @param {string} appId  Unique Id for an amplify App. 
		 * @param {string} nextToken  Pagination token. Set to null to start listing backen environments from start. If a non-null pagination token is returned in a result, then pass its value in here to list more backend environments. 
		 * @param {number} maxResults  Maximum number of records to list in a single response. 
		 * @return {ListBackendEnvironmentsResult} Success
		 */
		ListBackendEnvironments(appId: string, nextToken: string, maxResults: number, headersHandler?: () => {[header: string]: string}): Promise<ListBackendEnvironmentsResult> {
			return Axios.get<ListBackendEnvironmentsResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/backendenvironments&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Creates a new Branch for an Amplify App.
		 * Post apps/{appId}/branches
		 * @param {string} appId  Unique Id for an Amplify App. 
		 * @return {CreateBranchResult} Success
		 */
		CreateBranch(appId: string, requestBody: CreateBranchBody, headersHandler?: () => {[header: string]: string}): Promise<CreateBranchResult> {
			return Axios.post<CreateBranchResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/branches', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Lists branches for an Amplify App.
		 * Get apps/{appId}/branches
		 * @param {string} appId  Unique Id for an Amplify App. 
		 * @param {string} nextToken  Pagination token. Set to null to start listing branches from start. If a non-null pagination token is returned in a result, then pass its value in here to list more branches. 
		 * @param {number} maxResults  Maximum number of records to list in a single response. 
		 * @return {ListBranchesResult} Success
		 */
		ListBranches(appId: string, nextToken: string, maxResults: number, headersHandler?: () => {[header: string]: string}): Promise<ListBranchesResult> {
			return Axios.get<ListBranchesResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/branches&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Create a deployment for manual deploy apps. (Apps are not connected to repository)
		 * Post apps/{appId}/branches/{branchName}/deployments
		 * @param {string} appId  Unique Id for an Amplify App. 
		 * @param {string} branchName  Name for the branch, for the Job. 
		 * @return {CreateDeploymentResult} Success
		 */
		CreateDeployment(appId: string, branchName: string, requestBody: CreateDeploymentBody, headersHandler?: () => {[header: string]: string}): Promise<CreateDeploymentResult> {
			return Axios.post<CreateDeploymentResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/branches/' + (branchName == null ? '' : encodeURIComponent(branchName)) + '/deployments', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Create a new DomainAssociation on an App
		 * Post apps/{appId}/domains
		 * @param {string} appId  Unique Id for an Amplify App. 
		 * @return {CreateDomainAssociationResult} Success
		 */
		CreateDomainAssociation(appId: string, requestBody: CreateDomainAssociationBody, headersHandler?: () => {[header: string]: string}): Promise<CreateDomainAssociationResult> {
			return Axios.post<CreateDomainAssociationResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/domains', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * List domains with an app
		 * Get apps/{appId}/domains
		 * @param {string} appId  Unique Id for an Amplify App. 
		 * @param {string} nextToken  Pagination token. Set to null to start listing Apps from start. If non-null pagination token is returned in a result, then pass its value in here to list more projects. 
		 * @param {number} maxResults  Maximum number of records to list in a single response. 
		 * @return {ListDomainAssociationsResult} Success
		 */
		ListDomainAssociations(appId: string, nextToken: string, maxResults: number, headersHandler?: () => {[header: string]: string}): Promise<ListDomainAssociationsResult> {
			return Axios.get<ListDomainAssociationsResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/domains&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Create a new webhook on an App.
		 * Post apps/{appId}/webhooks
		 * @param {string} appId  Unique Id for an Amplify App. 
		 * @return {CreateWebhookResult} Success
		 */
		CreateWebhook(appId: string, requestBody: CreateWebhookBody, headersHandler?: () => {[header: string]: string}): Promise<CreateWebhookResult> {
			return Axios.post<CreateWebhookResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/webhooks', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * List webhooks with an app.
		 * Get apps/{appId}/webhooks
		 * @param {string} appId  Unique Id for an Amplify App. 
		 * @param {string} nextToken  Pagination token. Set to null to start listing webhooks from start. If non-null pagination token is returned in a result, then pass its value in here to list more webhooks. 
		 * @param {number} maxResults  Maximum number of records to list in a single response. 
		 * @return {ListWebhooksResult} Success
		 */
		ListWebhooks(appId: string, nextToken: string, maxResults: number, headersHandler?: () => {[header: string]: string}): Promise<ListWebhooksResult> {
			return Axios.get<ListWebhooksResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/webhooks&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Delete an existing Amplify App by appId.
		 * Delete apps/{appId}
		 * @param {string} appId  Unique Id for an Amplify App. 
		 * @return {DeleteAppResult} Success
		 */
		DeleteApp(appId: string, headersHandler?: () => {[header: string]: string}): Promise<DeleteAppResult> {
			return Axios.delete<DeleteAppResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Retrieves an existing Amplify App by appId.
		 * Get apps/{appId}
		 * @param {string} appId  Unique Id for an Amplify App. 
		 * @return {GetAppResult} Success
		 */
		GetApp(appId: string, headersHandler?: () => {[header: string]: string}): Promise<GetAppResult> {
			return Axios.get<GetAppResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Updates an existing Amplify App.
		 * Post apps/{appId}
		 * @param {string} appId  Unique Id for an Amplify App. 
		 * @return {UpdateAppResult} Success
		 */
		UpdateApp(appId: string, requestBody: UpdateAppBody, headersHandler?: () => {[header: string]: string}): Promise<UpdateAppResult> {
			return Axios.post<UpdateAppResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Delete backend environment for an Amplify App.
		 * Delete apps/{appId}/backendenvironments/{environmentName}
		 * @param {string} appId  Unique Id of an Amplify App. 
		 * @param {string} environmentName  Name of a backend environment of an Amplify App. 
		 * @return {DeleteBackendEnvironmentResult} Success
		 */
		DeleteBackendEnvironment(appId: string, environmentName: string, headersHandler?: () => {[header: string]: string}): Promise<DeleteBackendEnvironmentResult> {
			return Axios.delete<DeleteBackendEnvironmentResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/backendenvironments/' + (environmentName == null ? '' : encodeURIComponent(environmentName)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Retrieves a backend environment for an Amplify App.
		 * Get apps/{appId}/backendenvironments/{environmentName}
		 * @param {string} appId  Unique Id for an Amplify App. 
		 * @param {string} environmentName  Name for the backend environment. 
		 * @return {GetBackendEnvironmentResult} Success
		 */
		GetBackendEnvironment(appId: string, environmentName: string, headersHandler?: () => {[header: string]: string}): Promise<GetBackendEnvironmentResult> {
			return Axios.get<GetBackendEnvironmentResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/backendenvironments/' + (environmentName == null ? '' : encodeURIComponent(environmentName)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Deletes a branch for an Amplify App.
		 * Delete apps/{appId}/branches/{branchName}
		 * @param {string} appId  Unique Id for an Amplify App. 
		 * @param {string} branchName  Name for the branch. 
		 * @return {DeleteBranchResult} Success
		 */
		DeleteBranch(appId: string, branchName: string, headersHandler?: () => {[header: string]: string}): Promise<DeleteBranchResult> {
			return Axios.delete<DeleteBranchResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/branches/' + (branchName == null ? '' : encodeURIComponent(branchName)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Retrieves a branch for an Amplify App.
		 * Get apps/{appId}/branches/{branchName}
		 * @param {string} appId  Unique Id for an Amplify App. 
		 * @param {string} branchName  Name for the branch. 
		 * @return {GetBranchResult} Success
		 */
		GetBranch(appId: string, branchName: string, headersHandler?: () => {[header: string]: string}): Promise<GetBranchResult> {
			return Axios.get<GetBranchResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/branches/' + (branchName == null ? '' : encodeURIComponent(branchName)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Updates a branch for an Amplify App.
		 * Post apps/{appId}/branches/{branchName}
		 * @param {string} appId  Unique Id for an Amplify App. 
		 * @param {string} branchName  Name for the branch. 
		 * @return {UpdateBranchResult} Success
		 */
		UpdateBranch(appId: string, branchName: string, requestBody: UpdateBranchBody, headersHandler?: () => {[header: string]: string}): Promise<UpdateBranchResult> {
			return Axios.post<UpdateBranchResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/branches/' + (branchName == null ? '' : encodeURIComponent(branchName)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Deletes a DomainAssociation.
		 * Delete apps/{appId}/domains/{domainName}
		 * @param {string} appId  Unique Id for an Amplify App. 
		 * @param {string} domainName  Name of the domain. 
		 * @return {DeleteDomainAssociationResult} Success
		 */
		DeleteDomainAssociation(appId: string, domainName: string, headersHandler?: () => {[header: string]: string}): Promise<DeleteDomainAssociationResult> {
			return Axios.delete<DeleteDomainAssociationResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/domains/' + (domainName == null ? '' : encodeURIComponent(domainName)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Retrieves domain info that corresponds to an appId and domainName.
		 * Get apps/{appId}/domains/{domainName}
		 * @param {string} appId  Unique Id for an Amplify App. 
		 * @param {string} domainName  Name of the domain. 
		 * @return {GetDomainAssociationResult} Success
		 */
		GetDomainAssociation(appId: string, domainName: string, headersHandler?: () => {[header: string]: string}): Promise<GetDomainAssociationResult> {
			return Axios.get<GetDomainAssociationResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/domains/' + (domainName == null ? '' : encodeURIComponent(domainName)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Create a new DomainAssociation on an App
		 * Post apps/{appId}/domains/{domainName}
		 * @param {string} appId  Unique Id for an Amplify App. 
		 * @param {string} domainName  Name of the domain. 
		 * @return {UpdateDomainAssociationResult} Success
		 */
		UpdateDomainAssociation(appId: string, domainName: string, requestBody: UpdateDomainAssociationBody, headersHandler?: () => {[header: string]: string}): Promise<UpdateDomainAssociationResult> {
			return Axios.post<UpdateDomainAssociationResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/domains/' + (domainName == null ? '' : encodeURIComponent(domainName)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Delete a job, for an Amplify branch, part of Amplify App.
		 * Delete apps/{appId}/branches/{branchName}/jobs/{jobId}
		 * @param {string} appId  Unique Id for an Amplify App. 
		 * @param {string} branchName  Name for the branch, for the Job. 
		 * @param {string} jobId  Unique Id for the Job. 
		 * @return {DeleteJobResult} Success
		 */
		DeleteJob(appId: string, branchName: string, jobId: string, headersHandler?: () => {[header: string]: string}): Promise<DeleteJobResult> {
			return Axios.delete<DeleteJobResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/branches/' + (branchName == null ? '' : encodeURIComponent(branchName)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Get a job for a branch, part of an Amplify App.
		 * Get apps/{appId}/branches/{branchName}/jobs/{jobId}
		 * @param {string} appId  Unique Id for an Amplify App. 
		 * @param {string} branchName  Name for the branch, for the Job. 
		 * @param {string} jobId  Unique Id for the Job. 
		 * @return {GetJobResult} Success
		 */
		GetJob(appId: string, branchName: string, jobId: string, headersHandler?: () => {[header: string]: string}): Promise<GetJobResult> {
			return Axios.get<GetJobResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/branches/' + (branchName == null ? '' : encodeURIComponent(branchName)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Deletes a webhook.
		 * Delete webhooks/{webhookId}
		 * @param {string} webhookId  Unique Id for a webhook. 
		 * @return {DeleteWebhookResult} Success
		 */
		DeleteWebhook(webhookId: string, headersHandler?: () => {[header: string]: string}): Promise<DeleteWebhookResult> {
			return Axios.delete<DeleteWebhookResult>(this.baseUri + 'webhooks/' + (webhookId == null ? '' : encodeURIComponent(webhookId)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Retrieves webhook info that corresponds to a webhookId.
		 * Get webhooks/{webhookId}
		 * @param {string} webhookId  Unique Id for a webhook. 
		 * @return {GetWebhookResult} Success
		 */
		GetWebhook(webhookId: string, headersHandler?: () => {[header: string]: string}): Promise<GetWebhookResult> {
			return Axios.get<GetWebhookResult>(this.baseUri + 'webhooks/' + (webhookId == null ? '' : encodeURIComponent(webhookId)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Update a webhook.
		 * Post webhooks/{webhookId}
		 * @param {string} webhookId  Unique Id for a webhook. 
		 * @return {UpdateWebhookResult} Success
		 */
		UpdateWebhook(webhookId: string, requestBody: UpdateWebhookBody, headersHandler?: () => {[header: string]: string}): Promise<UpdateWebhookResult> {
			return Axios.post<UpdateWebhookResult>(this.baseUri + 'webhooks/' + (webhookId == null ? '' : encodeURIComponent(webhookId)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Retrieve website access logs for a specific time range via a pre-signed URL.
		 * Post apps/{appId}/accesslogs
		 * @param {string} appId  Unique Id for an Amplify App. 
		 * @return {GenerateAccessLogsResult} Success
		 */
		GenerateAccessLogs(appId: string, requestBody: GenerateAccessLogsBody, headersHandler?: () => {[header: string]: string}): Promise<GenerateAccessLogsResult> {
			return Axios.post<GenerateAccessLogsResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/accesslogs', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Retrieves artifact info that corresponds to a artifactId.
		 * Get artifacts/{artifactId}
		 * @param {string} artifactId  Unique Id for a artifact. 
		 * @return {GetArtifactUrlResult} Success
		 */
		GetArtifactUrl(artifactId: string, headersHandler?: () => {[header: string]: string}): Promise<GetArtifactUrlResult> {
			return Axios.get<GetArtifactUrlResult>(this.baseUri + 'artifacts/' + (artifactId == null ? '' : encodeURIComponent(artifactId)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * List artifacts with an app, a branch, a job and an artifact type.
		 * Get apps/{appId}/branches/{branchName}/jobs/{jobId}/artifacts
		 * @param {string} appId  Unique Id for an Amplify App. 
		 * @param {string} branchName  Name for a branch, part of an Amplify App. 
		 * @param {string} jobId  Unique Id for an Job. 
		 * @param {string} nextToken  Pagination token. Set to null to start listing artifacts from start. If non-null pagination token is returned in a result, then pass its value in here to list more artifacts. 
		 * @param {number} maxResults  Maximum number of records to list in a single response. 
		 * @return {ListArtifactsResult} Success
		 */
		ListArtifacts(appId: string, branchName: string, jobId: string, nextToken: string, maxResults: number, headersHandler?: () => {[header: string]: string}): Promise<ListArtifactsResult> {
			return Axios.get<ListArtifactsResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/branches/' + (branchName == null ? '' : encodeURIComponent(branchName)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/artifacts&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * List Jobs for a branch, part of an Amplify App.
		 * Get apps/{appId}/branches/{branchName}/jobs
		 * @param {string} appId  Unique Id for an Amplify App. 
		 * @param {string} branchName  Name for a branch. 
		 * @param {string} nextToken  Pagination token. Set to null to start listing steps from start. If a non-null pagination token is returned in a result, then pass its value in here to list more steps. 
		 * @param {number} maxResults  Maximum number of records to list in a single response. 
		 * @return {ListJobsResult} Success
		 */
		ListJobs(appId: string, branchName: string, nextToken: string, maxResults: number, headersHandler?: () => {[header: string]: string}): Promise<ListJobsResult> {
			return Axios.get<ListJobsResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/branches/' + (branchName == null ? '' : encodeURIComponent(branchName)) + '/jobs&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Starts a new job for a branch, part of an Amplify App.
		 * Post apps/{appId}/branches/{branchName}/jobs
		 * @param {string} appId  Unique Id for an Amplify App. 
		 * @param {string} branchName  Name for the branch, for the Job. 
		 * @return {StartJobResult} Success
		 */
		StartJob(appId: string, branchName: string, requestBody: StartJobBody, headersHandler?: () => {[header: string]: string}): Promise<StartJobResult> {
			return Axios.post<StartJobResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/branches/' + (branchName == null ? '' : encodeURIComponent(branchName)) + '/jobs', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * List tags for resource.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn  Resource arn used to list tags. 
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string, headersHandler?: () => {[header: string]: string}): Promise<ListTagsForResourceResponse> {
			return Axios.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Tag resource with tag key and value.
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn  Resource arn used to tag resource. 
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourceBody, headersHandler?: () => {[header: string]: string}): Promise<TagResourceResponse> {
			return Axios.post<TagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Start a deployment for manual deploy apps. (Apps are not connected to repository)
		 * Post apps/{appId}/branches/{branchName}/deployments/start
		 * @param {string} appId  Unique Id for an Amplify App. 
		 * @param {string} branchName  Name for the branch, for the Job. 
		 * @return {StartDeploymentResult} Success
		 */
		StartDeployment(appId: string, branchName: string, requestBody: StartDeploymentBody, headersHandler?: () => {[header: string]: string}): Promise<StartDeploymentResult> {
			return Axios.post<StartDeploymentResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/branches/' + (branchName == null ? '' : encodeURIComponent(branchName)) + '/deployments/start', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Stop a job that is in progress, for an Amplify branch, part of Amplify App.
		 * Delete apps/{appId}/branches/{branchName}/jobs/{jobId}/stop
		 * @param {string} appId  Unique Id for an Amplify App. 
		 * @param {string} branchName  Name for the branch, for the Job. 
		 * @param {string} jobId  Unique Id for the Job. 
		 * @return {StopJobResult} Success
		 */
		StopJob(appId: string, branchName: string, jobId: string, headersHandler?: () => {[header: string]: string}): Promise<StopJobResult> {
			return Axios.delete<StopJobResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/branches/' + (branchName == null ? '' : encodeURIComponent(branchName)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/stop', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Untag resource with resourceArn.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn  Resource arn used to untag resource. 
		 * @param {Array<TagKey>} tagKeys  Tag keys used to untag resource. 
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<TagKey>, headersHandler?: () => {[header: string]: string}): Promise<UntagResourceResponse> {
			return Axios.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${z}`).join('&'), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}
	}

	export interface CreateAppBody {

		/**
		 * Name for the Amplify App
		 * Max length: 255
		 * Min length: 1
		 */
		name: string;

		/**
		 * Description for an Amplify App
		 * Max length: 1000
		 */
		description?: string;

		/**
		 * Repository for an Amplify App
		 * Max length: 1000
		 */
		repository?: string;

		/**Platform / framework for an Amplify App */
		platform?: CreateAppBodyPlatform;

		/**
		 * AWS IAM service role for an Amplify App
		 * Max length: 1000
		 * Min length: 1
		 */
		iamServiceRoleArn?: string;

		/**
		 * OAuth token for 3rd party source control system for an Amplify App, used to create webhook and read-only deploy key. OAuth token is not stored.
		 * Max length: 100
		 */
		oauthToken?: string;

		/**
		 * Personal Access token for 3rd party source control system for an Amplify App, used to create webhook and read-only deploy key. Token is not stored.
		 * Max length: 255
		 * Min length: 1
		 */
		accessToken?: string;

		/**Environment variables map for an Amplify App. */
		environmentVariables?: string;

		/**Enable the auto building of branches for an Amplify App. */
		enableBranchAutoBuild?: boolean;

		/**Enable Basic Authorization for an Amplify App, this will apply to all branches part of this App. */
		enableBasicAuth?: boolean;

		/**
		 * Credentials for Basic Authorization for an Amplify App.
		 * Max length: 2000
		 */
		basicAuthCredentials?: string;

		/**Custom rewrite / redirect rules for an Amplify App. */
		customRules?: Array<CustomRule>;

		/**Tag for an Amplify App */
		tags?: string;

		/**
		 * BuildSpec file for Amplify app build.
		 * Max length: 25000
		 * Min length: 1
		 */
		buildSpec?: string;

		/**Enables automated branch creation for the Amplify App. */
		enableAutoBranchCreation?: boolean;

		/**Automated branch creation glob patterns for the Amplify App. */
		autoBranchCreationPatterns?: Array<AutoBranchCreationPattern>;

		/**Structure with auto branch creation config. */
		autoBranchCreationConfig?: string;
	}

	export enum CreateAppBodyPlatform { WEB = 0 }

	export interface CreateBackendEnvironmentBody {

		/**
		 * Name for the backend environment.
		 * Max length: 255
		 * Min length: 1
		 */
		environmentName: string;

		/**
		 * CloudFormation stack name of backend environment.
		 * Max length: 255
		 * Min length: 1
		 */
		stackName?: string;

		/**
		 * Name of deployment artifacts.
		 * Max length: 1000
		 * Min length: 1
		 */
		deploymentArtifacts?: string;
	}

	export interface CreateBranchBody {

		/**
		 * Name for the branch.
		 * Max length: 255
		 * Min length: 1
		 */
		branchName: string;

		/**
		 * Description for the branch.
		 * Max length: 1000
		 */
		description?: string;

		/**Stage for the branch. */
		stage?: CreateBranchBodyStage;

		/**
		 * Framework for the branch.
		 * Max length: 255
		 */
		framework?: string;

		/**Enables notifications for the branch. */
		enableNotification?: boolean;

		/**Enables auto building for the branch. */
		enableAutoBuild?: boolean;

		/**Environment Variables for the branch. */
		environmentVariables?: string;

		/**
		 * Basic Authorization credentials for the branch.
		 * Max length: 2000
		 */
		basicAuthCredentials?: string;

		/**Enables Basic Auth for the branch. */
		enableBasicAuth?: boolean;

		/**Tag for the branch. */
		tags?: string;

		/**
		 * BuildSpec file for Amplify app build.
		 * Max length: 25000
		 * Min length: 1
		 */
		buildSpec?: string;

		/**The content TTL for the website in seconds. */
		ttl?: string;

		/**
		 * Display name for a branch, will use as the default domain prefix.
		 * Max length: 255
		 */
		displayName?: string;

		/**Enables Pull Request Preview for this branch. */
		enablePullRequestPreview?: boolean;

		/**
		 * The Amplify Environment name for the pull request.
		 * Max length: 20
		 */
		pullRequestEnvironmentName?: string;

		/**
		 * ARN for a Backend Environment, part of an Amplify App.
		 * Max length: 1000
		 * Min length: 1
		 */
		backendEnvironmentArn?: string;
	}

	export enum CreateBranchBodyStage { PRODUCTION = 0, BETA = 1, DEVELOPMENT = 2, EXPERIMENTAL = 3, PULL_REQUEST = 4 }

	export interface CreateDeploymentBody {

		/**Optional file map that contains file name as the key and file content md5 hash as the value. If this argument is provided, the service will generate different upload url per file. Otherwise, the service will only generate a single upload url for the zipped files. */
		fileMap?: string;
	}

	export interface CreateDomainAssociationBody {

		/**
		 * Domain name for the Domain Association.
		 * Max length: 255
		 */
		domainName: string;

		/**Enables automated creation of Subdomains for branches. (Currently not supported) */
		enableAutoSubDomain?: boolean;

		/**
		 * Setting structure for the Subdomain.
		 * Maximum items: 255
		 */
		subDomainSettings: Array<SubDomainSetting>;
	}

	export interface CreateWebhookBody {

		/**
		 * Name for a branch, part of an Amplify App.
		 * Max length: 255
		 * Min length: 1
		 */
		branchName: string;

		/**
		 * Description for a webhook.
		 * Max length: 1000
		 */
		description?: string;
	}

	export interface UpdateAppBody {

		/**
		 * Name for an Amplify App.
		 * Max length: 255
		 * Min length: 1
		 */
		name?: string;

		/**
		 * Description for an Amplify App.
		 * Max length: 1000
		 */
		description?: string;

		/**Platform for an Amplify App. */
		platform?: UpdateAppBodyPlatform;

		/**
		 * IAM service role for an Amplify App.
		 * Max length: 1000
		 * Min length: 1
		 */
		iamServiceRoleArn?: string;

		/**Environment Variables for an Amplify App. */
		environmentVariables?: string;

		/**Enables branch auto-building for an Amplify App. */
		enableBranchAutoBuild?: boolean;

		/**Enables Basic Authorization for an Amplify App. */
		enableBasicAuth?: boolean;

		/**
		 * Basic Authorization credentials for an Amplify App.
		 * Max length: 2000
		 */
		basicAuthCredentials?: string;

		/**Custom redirect / rewrite rules for an Amplify App. */
		customRules?: Array<CustomRule>;

		/**
		 * BuildSpec file for Amplify app build.
		 * Max length: 25000
		 * Min length: 1
		 */
		buildSpec?: string;

		/**Enables automated branch creation for the Amplify App. */
		enableAutoBranchCreation?: boolean;

		/**Automated branch creation glob patterns for the Amplify App. */
		autoBranchCreationPatterns?: Array<AutoBranchCreationPattern>;

		/**Structure with auto branch creation config. */
		autoBranchCreationConfig?: string;

		/**
		 * Repository for an Amplify App
		 * Max length: 1000
		 */
		repository?: string;

		/**
		 * OAuth token for 3rd party source control system for an Amplify App, used to create webhook and read-only deploy key. OAuth token is not stored.
		 * Max length: 100
		 */
		oauthToken?: string;

		/**
		 * Personal Access token for 3rd party source control system for an Amplify App, used to create webhook and read-only deploy key. Token is not stored.
		 * Max length: 255
		 * Min length: 1
		 */
		accessToken?: string;
	}

	export enum UpdateAppBodyPlatform { WEB = 0 }

	export interface UpdateBranchBody {

		/**
		 * Description for the branch.
		 * Max length: 1000
		 */
		description?: string;

		/**
		 * Framework for the branch.
		 * Max length: 255
		 */
		framework?: string;

		/**Stage for the branch. */
		stage?: UpdateBranchBodyStage;

		/**Enables notifications for the branch. */
		enableNotification?: boolean;

		/**Enables auto building for the branch. */
		enableAutoBuild?: boolean;

		/**Environment Variables for the branch. */
		environmentVariables?: string;

		/**
		 * Basic Authorization credentials for the branch.
		 * Max length: 2000
		 */
		basicAuthCredentials?: string;

		/**Enables Basic Auth for the branch. */
		enableBasicAuth?: boolean;

		/**
		 * BuildSpec file for Amplify app build.
		 * Max length: 25000
		 * Min length: 1
		 */
		buildSpec?: string;

		/**The content TTL for the website in seconds. */
		ttl?: string;

		/**
		 * Display name for a branch, will use as the default domain prefix.
		 * Max length: 255
		 */
		displayName?: string;

		/**Enables Pull Request Preview for this branch. */
		enablePullRequestPreview?: boolean;

		/**
		 * The Amplify Environment name for the pull request.
		 * Max length: 20
		 */
		pullRequestEnvironmentName?: string;

		/**
		 * ARN for a Backend Environment, part of an Amplify App.
		 * Max length: 1000
		 * Min length: 1
		 */
		backendEnvironmentArn?: string;
	}

	export enum UpdateBranchBodyStage { PRODUCTION = 0, BETA = 1, DEVELOPMENT = 2, EXPERIMENTAL = 3, PULL_REQUEST = 4 }

	export interface UpdateDomainAssociationBody {

		/**Enables automated creation of Subdomains for branches. (Currently not supported) */
		enableAutoSubDomain?: boolean;

		/**
		 * Setting structure for the Subdomain.
		 * Maximum items: 255
		 */
		subDomainSettings: Array<SubDomainSetting>;
	}

	export interface UpdateWebhookBody {

		/**
		 * Name for a branch, part of an Amplify App.
		 * Max length: 255
		 * Min length: 1
		 */
		branchName?: string;

		/**
		 * Description for a webhook.
		 * Max length: 1000
		 */
		description?: string;
	}

	export interface GenerateAccessLogsBody {

		/**The time at which the logs should start, inclusive. */
		startTime?: Date;

		/**The time at which the logs should end, inclusive. */
		endTime?: Date;

		/**
		 * Name of the domain.
		 * Max length: 255
		 */
		domainName: string;
	}

	export interface StartJobBody {

		/**
		 * Unique Id for an existing job. Required for "RETRY" JobType.
		 * Max length: 255
		 */
		jobId?: string;

		/**
		 * Type for the Job. Available JobTypes are: \n "RELEASE": Start a new job with the latest change from the specified branch. Only available for apps that have connected to a repository. "RETRY": Retry an existing job. JobId is required for this type of job.
		 * Max length: 10
		 */
		jobType: StartJobBodyJobType;

		/**
		 * Descriptive reason for starting this job.
		 * Max length: 255
		 */
		jobReason?: string;

		/**
		 * Commit Id from 3rd party repository provider for the Job.
		 * Max length: 255
		 */
		commitId?: string;

		/**
		 * Commit message from 3rd party repository provider for the Job.
		 * Max length: 10000
		 */
		commitMessage?: string;

		/**Commit date / time for the Job. */
		commitTime?: Date;
	}

	export enum StartJobBodyJobType { RELEASE = 0, RETRY = 1, MANUAL = 2, WEB_HOOK = 3 }

	export interface TagResourceBody {

		/**Tags used to tag resource. */
		tags: string;
	}

	export interface StartDeploymentBody {

		/**
		 * The job id for this deployment, generated by create deployment request.
		 * Max length: 255
		 */
		jobId?: string;

		/**
		 * The sourceUrl for this deployment, used when calling start deployment without create deployment. SourceUrl can be any HTTP GET url that is public accessible and downloads a single zip.
		 * Max length: 1000
		 */
		sourceUrl?: string;
	}

}

