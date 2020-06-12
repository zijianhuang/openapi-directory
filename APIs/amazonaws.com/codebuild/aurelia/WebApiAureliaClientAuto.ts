import {HttpClient} from 'aurelia-fetch-client';
import {autoinject} from 'aurelia-framework';
export namespace My_Demo_Client {
	export interface BatchDeleteBuildsOutput {
		buildsDeleted?: Array<NonEmptyString>;
		buildsNotDeleted?: Array<BuildNotDeleted>;
	}

	export interface BatchDeleteBuildsInput {
		ids: Array<NonEmptyString>;
	}

	export interface BatchGetBuildsOutput {
		builds?: Array<Build>;
		buildsNotFound?: Array<NonEmptyString>;
	}

	export interface BatchGetBuildsInput {
		ids: Array<NonEmptyString>;
	}

	export interface BatchGetProjectsOutput {
		projects?: Array<Project>;
		projectsNotFound?: Array<NonEmptyString>;
	}

	export interface BatchGetProjectsInput {
		names: Array<NonEmptyString>;
	}

	export interface BatchGetReportGroupsOutput {
		reportGroups?: Array<ReportGroup>;
		reportGroupsNotFound?: Array<NonEmptyString>;
	}

	export interface BatchGetReportGroupsInput {
		reportGroupArns: Array<NonEmptyString>;
	}

	export interface BatchGetReportsOutput {
		reports?: Array<Report>;
		reportsNotFound?: Array<NonEmptyString>;
	}

	export interface BatchGetReportsInput {
		reportArns: Array<NonEmptyString>;
	}

	export interface CreateProjectOutput {

		/**Information about a build project. */
		project?: Project;
	}

	export interface CreateProjectInput {
		name: string;
		description?: string;

		/**Information about the build input source code for the build project. */
		source: ProjectSource;
		secondarySources?: Array<ProjectSource>;
		sourceVersion?: string;
		secondarySourceVersions?: Array<ProjectSourceVersion>;

		/**Information about the build output artifacts for the build project. */
		artifacts: ProjectArtifacts;
		secondaryArtifacts?: Array<ProjectArtifacts>;

		/**Information about the cache for the build project. */
		cache?: ProjectCache;

		/**Information about the build environment of the build project. */
		environment: ProjectEnvironment;
		serviceRole: string;
		timeoutInMinutes?: number;
		queuedTimeoutInMinutes?: number;
		encryptionKey?: string;
		tags?: Array<Tag>;

		/**Information about the VPC configuration that AWS CodeBuild accesses. */
		vpcConfig?: VpcConfig;
		badgeEnabled?: boolean;

		/**Information about logs for a build project. These can be logs in Amazon CloudWatch Logs, built in a specified S3 bucket, or both. */
		logsConfig?: LogsConfig;
		fileSystemLocations?: Array<ProjectFileSystemLocation>;
	}

	export interface CreateReportGroupOutput {

		/**A series of reports. Each report contains information about the results from running a series of test cases. You specify the test cases for a report group in the buildspec for a build project using one or more paths to the test case files. */
		reportGroup?: ReportGroup;
	}

	export interface CreateReportGroupInput {
		name: string;
		type: CreateReportGroupInputType;

		/**Information about the location where the run of a report is exported. */
		exportConfig: ReportExportConfig;
		tags?: Array<Tag>;
	}

	export enum CreateReportGroupInputType { TEST = 0 }

	export interface CreateWebhookOutput {

		/**Information about a webhook that connects repository events to a build project in AWS CodeBuild. */
		webhook?: Webhook;
	}

	export interface CreateWebhookInput {
		projectName: string;
		branchFilter?: string;
		filterGroups?: Array<FilterGroup>;
	}

	export interface DeleteProjectInput {
		name: string;
	}

	export interface DeleteReportInput {
		arn: string;
	}

	export interface DeleteReportGroupInput {
		arn: string;
	}

	export interface DeleteResourcePolicyInput {
		resourceArn: string;
	}

	export interface DeleteSourceCredentialsOutput {
		arn?: string;
	}

	export interface DeleteSourceCredentialsInput {
		arn: string;
	}

	export interface DeleteWebhookInput {
		projectName: string;
	}

	export interface DescribeTestCasesOutput {
		nextToken?: string;
		testCases?: Array<TestCase>;
	}

	export interface DescribeTestCasesInput {
		reportArn: string;
		nextToken?: string;
		maxResults?: number;

		/**A filter used to return specific types of test cases. */
		filter?: TestCaseFilter;
	}

	export interface GetResourcePolicyOutput {
		policy?: string;
	}

	export interface GetResourcePolicyInput {
		resourceArn: string;
	}

	export interface ImportSourceCredentialsOutput {
		arn?: string;
	}

	export interface ImportSourceCredentialsInput {
		username?: string;
		token: string;
		serverType: ImportSourceCredentialsInputServerType;
		authType: ImportSourceCredentialsInputAuthType;
		shouldOverwrite?: boolean;
	}

	export enum ImportSourceCredentialsInputServerType { GITHUB = 0, BITBUCKET = 1, GITHUB_ENTERPRISE = 2 }

	export enum ImportSourceCredentialsInputAuthType { OAUTH = 0, BASIC_AUTH = 1, PERSONAL_ACCESS_TOKEN = 2 }

	export interface InvalidateProjectCacheInput {
		projectName: string;
	}

	export interface ListBuildsOutput {
		ids?: Array<NonEmptyString>;
		nextToken?: string;
	}

	export interface ListBuildsInput {
		sortOrder?: ListBuildsInputSortOrder;
		nextToken?: string;
	}

	export enum ListBuildsInputSortOrder { ASCENDING = 0, DESCENDING = 1 }

	export interface ListBuildsForProjectOutput {
		ids?: Array<NonEmptyString>;
		nextToken?: string;
	}

	export interface ListBuildsForProjectInput {
		projectName: string;
		sortOrder?: ListBuildsForProjectInputSortOrder;
		nextToken?: string;
	}

	export enum ListBuildsForProjectInputSortOrder { ASCENDING = 0, DESCENDING = 1 }

	export interface ListCuratedEnvironmentImagesOutput {
		platforms?: Array<EnvironmentPlatform>;
	}

	export interface ListProjectsOutput {
		nextToken?: string;
		projects?: Array<NonEmptyString>;
	}

	export interface ListProjectsInput {
		sortBy?: ListProjectsInputSortBy;
		sortOrder?: ListProjectsInputSortOrder;
		nextToken?: string;
	}

	export enum ListProjectsInputSortBy { NAME = 0, CREATED_TIME = 1, LAST_MODIFIED_TIME = 2 }

	export enum ListProjectsInputSortOrder { ASCENDING = 0, DESCENDING = 1 }

	export interface ListReportGroupsOutput {
		nextToken?: string;
		reportGroups?: Array<NonEmptyString>;
	}

	export interface ListReportGroupsInput {
		sortOrder?: ListReportGroupsInputSortOrder;
		sortBy?: ListReportGroupsInputSortBy;
		nextToken?: string;
		maxResults?: number;
	}

	export enum ListReportGroupsInputSortOrder { ASCENDING = 0, DESCENDING = 1 }

	export enum ListReportGroupsInputSortBy { NAME = 0, CREATED_TIME = 1, LAST_MODIFIED_TIME = 2 }

	export interface ListReportsOutput {
		nextToken?: string;
		reports?: Array<NonEmptyString>;
	}

	export interface ListReportsInput {
		sortOrder?: ListReportsInputSortOrder;
		nextToken?: string;
		maxResults?: number;

		/**A filter used to return reports with the status specified by the input <code>status</code> parameter. */
		filter?: ReportFilter;
	}

	export enum ListReportsInputSortOrder { ASCENDING = 0, DESCENDING = 1 }

	export interface ListReportsForReportGroupOutput {
		nextToken?: string;
		reports?: Array<NonEmptyString>;
	}

	export interface ListReportsForReportGroupInput {
		reportGroupArn: string;
		nextToken?: string;
		sortOrder?: ListReportsForReportGroupInputSortOrder;
		maxResults?: number;

		/**A filter used to return reports with the status specified by the input <code>status</code> parameter. */
		filter?: ReportFilter;
	}

	export enum ListReportsForReportGroupInputSortOrder { ASCENDING = 0, DESCENDING = 1 }

	export interface ListSharedProjectsOutput {
		nextToken?: string;
		projects?: Array<NonEmptyString>;
	}

	export interface ListSharedProjectsInput {
		sortBy?: ListSharedProjectsInputSortBy;
		sortOrder?: ListSharedProjectsInputSortOrder;
		maxResults?: number;
		nextToken?: string;
	}

	export enum ListSharedProjectsInputSortBy { ARN = 0, MODIFIED_TIME = 1 }

	export enum ListSharedProjectsInputSortOrder { ASCENDING = 0, DESCENDING = 1 }

	export interface ListSharedReportGroupsOutput {
		nextToken?: string;
		reportGroups?: Array<NonEmptyString>;
	}

	export interface ListSharedReportGroupsInput {
		sortOrder?: ListSharedReportGroupsInputSortOrder;
		sortBy?: ListSharedReportGroupsInputSortBy;
		nextToken?: string;
		maxResults?: number;
	}

	export enum ListSharedReportGroupsInputSortOrder { ASCENDING = 0, DESCENDING = 1 }

	export enum ListSharedReportGroupsInputSortBy { ARN = 0, MODIFIED_TIME = 1 }

	export interface ListSourceCredentialsOutput {
		sourceCredentialsInfos?: Array<SourceCredentialsInfo>;
	}

	export interface PutResourcePolicyOutput {
		resourceArn?: string;
	}

	export interface PutResourcePolicyInput {
		policy: string;
		resourceArn: string;
	}

	export interface StartBuildOutput {

		/**Information about a build. */
		build?: Build;
	}

	export interface StartBuildInput {
		projectName: string;
		secondarySourcesOverride?: Array<ProjectSource>;
		secondarySourcesVersionOverride?: Array<ProjectSourceVersion>;
		sourceVersion?: string;

		/**Information about the build output artifacts for the build project. */
		artifactsOverride?: ProjectArtifacts;
		secondaryArtifactsOverride?: Array<ProjectArtifacts>;
		environmentVariablesOverride?: Array<EnvironmentVariable>;
		sourceTypeOverride?: StartBuildInputSourceTypeOverride;
		sourceLocationOverride?: string;

		/**<p>Information about the authorization settings for AWS CodeBuild to access the source code to be built.</p> <p>This information is for the AWS CodeBuild console's use only. Your code should not get or set this information directly.</p> */
		sourceAuthOverride?: SourceAuth;
		gitCloneDepthOverride?: number;

		/**Information about the Git submodules configuration for an AWS CodeBuild build project. */
		gitSubmodulesConfigOverride?: GitSubmodulesConfig;
		buildspecOverride?: string;
		insecureSslOverride?: boolean;
		reportBuildStatusOverride?: boolean;
		environmentTypeOverride?: StartBuildInputEnvironmentTypeOverride;
		imageOverride?: string;
		computeTypeOverride?: StartBuildInputComputeTypeOverride;
		certificateOverride?: string;

		/**Information about the cache for the build project. */
		cacheOverride?: ProjectCache;
		serviceRoleOverride?: string;
		privilegedModeOverride?: boolean;
		timeoutInMinutesOverride?: number;
		queuedTimeoutInMinutesOverride?: number;
		encryptionKeyOverride?: string;

		/**Information about logs for a build project. These can be logs in Amazon CloudWatch Logs, built in a specified S3 bucket, or both. */
		logsConfigOverride?: LogsConfig;

		/**<p> Information about credentials that provide access to a private Docker registry. When this is set: </p> <ul> <li> <p> <code>imagePullCredentialsType</code> must be set to <code>SERVICE_ROLE</code>. </p> </li> <li> <p> images cannot be curated or an Amazon ECR image.</p> </li> </ul> <p> For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/sample-private-registry.html">Private Registry with AWS Secrets Manager Sample for AWS CodeBuild</a>. </p> */
		registryCredentialOverride?: RegistryCredential;
		imagePullCredentialsTypeOverride?: StartBuildInputImagePullCredentialsTypeOverride;
	}

	export enum StartBuildInputSourceTypeOverride { CODECOMMIT = 0, CODEPIPELINE = 1, GITHUB = 2, S3 = 3, BITBUCKET = 4, GITHUB_ENTERPRISE = 5, NO_SOURCE = 6 }

	export enum StartBuildInputEnvironmentTypeOverride { WINDOWS_CONTAINER = 0, LINUX_CONTAINER = 1, LINUX_GPU_CONTAINER = 2, ARM_CONTAINER = 3 }

	export enum StartBuildInputComputeTypeOverride { BUILD_GENERAL1_SMALL = 0, BUILD_GENERAL1_MEDIUM = 1, BUILD_GENERAL1_LARGE = 2, BUILD_GENERAL1_2XLARGE = 3 }

	export enum StartBuildInputImagePullCredentialsTypeOverride { CODEBUILD = 0, SERVICE_ROLE = 1 }

	export interface StopBuildOutput {

		/**Information about a build. */
		build?: Build;
	}

	export interface StopBuildInput {
		id: string;
	}

	export interface UpdateProjectOutput {

		/**Information about a build project. */
		project?: Project;
	}

	export interface UpdateProjectInput {
		name: string;
		description?: string;

		/**Information about the build input source code for the build project. */
		source?: ProjectSource;
		secondarySources?: Array<ProjectSource>;
		sourceVersion?: string;
		secondarySourceVersions?: Array<ProjectSourceVersion>;

		/**Information about the build output artifacts for the build project. */
		artifacts?: ProjectArtifacts;
		secondaryArtifacts?: Array<ProjectArtifacts>;

		/**Information about the cache for the build project. */
		cache?: ProjectCache;

		/**Information about the build environment of the build project. */
		environment?: ProjectEnvironment;
		serviceRole?: string;
		timeoutInMinutes?: number;
		queuedTimeoutInMinutes?: number;
		encryptionKey?: string;
		tags?: Array<Tag>;

		/**Information about the VPC configuration that AWS CodeBuild accesses. */
		vpcConfig?: VpcConfig;
		badgeEnabled?: boolean;

		/**Information about logs for a build project. These can be logs in Amazon CloudWatch Logs, built in a specified S3 bucket, or both. */
		logsConfig?: LogsConfig;
		fileSystemLocations?: Array<ProjectFileSystemLocation>;
	}

	export interface UpdateReportGroupOutput {

		/**A series of reports. Each report contains information about the results from running a series of test cases. You specify the test cases for a report group in the buildspec for a build project using one or more paths to the test case files. */
		reportGroup?: ReportGroup;
	}

	export interface UpdateReportGroupInput {
		arn: string;

		/**Information about the location where the run of a report is exported. */
		exportConfig?: ReportExportConfig;
		tags?: Array<Tag>;
	}

	export interface UpdateWebhookOutput {

		/**Information about a webhook that connects repository events to a build project in AWS CodeBuild. */
		webhook?: Webhook;
	}

	export interface UpdateWebhookInput {
		projectName: string;
		branchFilter?: string;
		rotateSecret?: boolean;
		filterGroups?: Array<FilterGroup>;
	}

	export enum ArtifactNamespace { NONE = 0, BUILD_ID = 1 }

	export enum ArtifactPackaging { NONE = 0, ZIP = 1 }

	export enum ArtifactsType { CODEPIPELINE = 0, S3 = 1, NO_ARTIFACTS = 2 }

	export enum AuthType { OAUTH = 0, BASIC_AUTH = 1, PERSONAL_ACCESS_TOKEN = 2 }

	export enum StatusType { SUCCEEDED = 0, FAILED = 1, FAULT = 2, TIMED_OUT = 3, IN_PROGRESS = 4, STOPPED = 5 }


	/**Information about the build input source code for the build project. */
	export interface ProjectSource {
		type: ProjectSourceType;
		location?: string;
		gitCloneDepth?: number;

		/**Information about the Git submodules configuration for an AWS CodeBuild build project. */
		gitSubmodulesConfig?: GitSubmodulesConfig;
		buildspec?: string;

		/**<p>Information about the authorization settings for AWS CodeBuild to access the source code to be built.</p> <p>This information is for the AWS CodeBuild console's use only. Your code should not get or set this information directly.</p> */
		auth?: SourceAuth;
		reportBuildStatus?: boolean;
		insecureSsl?: boolean;
		sourceIdentifier?: string;
	}

	export enum ProjectSourceType { CODECOMMIT = 0, CODEPIPELINE = 1, GITHUB = 2, S3 = 3, BITBUCKET = 4, GITHUB_ENTERPRISE = 5, NO_SOURCE = 6 }


	/**Information about build output artifacts. */
	export interface BuildArtifacts {
		location?: string;
		sha256sum?: string;
		md5sum?: string;
		overrideArtifactName?: boolean;
		encryptionDisabled?: boolean;
		artifactIdentifier?: string;
	}


	/**Information about the cache for the build project. */
	export interface ProjectCache {
		type: ProjectCacheType;
		location?: string;
		modes?: Array<CacheMode>;
	}

	export enum ProjectCacheType { NO_CACHE = 0, S3 = 1, LOCAL = 2 }


	/**Information about the build environment of the build project. */
	export interface ProjectEnvironment {
		type: ProjectEnvironmentType;
		image: string;
		computeType: ProjectEnvironmentComputeType;
		environmentVariables?: Array<EnvironmentVariable>;
		privilegedMode?: boolean;
		certificate?: string;

		/**<p> Information about credentials that provide access to a private Docker registry. When this is set: </p> <ul> <li> <p> <code>imagePullCredentialsType</code> must be set to <code>SERVICE_ROLE</code>. </p> </li> <li> <p> images cannot be curated or an Amazon ECR image.</p> </li> </ul> <p> For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/sample-private-registry.html">Private Registry with AWS Secrets Manager Sample for AWS CodeBuild</a>. </p> */
		registryCredential?: RegistryCredential;
		imagePullCredentialsType?: ProjectEnvironmentImagePullCredentialsType;
	}

	export enum ProjectEnvironmentType { WINDOWS_CONTAINER = 0, LINUX_CONTAINER = 1, LINUX_GPU_CONTAINER = 2, ARM_CONTAINER = 3 }

	export enum ProjectEnvironmentComputeType { BUILD_GENERAL1_SMALL = 0, BUILD_GENERAL1_MEDIUM = 1, BUILD_GENERAL1_LARGE = 2, BUILD_GENERAL1_2XLARGE = 3 }

	export enum ProjectEnvironmentImagePullCredentialsType { CODEBUILD = 0, SERVICE_ROLE = 1 }


	/**Information about build logs in Amazon CloudWatch Logs. */
	export interface LogsLocation {
		groupName?: string;
		streamName?: string;
		deepLink?: string;
		s3DeepLink?: string;
		cloudWatchLogsArn?: string;
		s3LogsArn?: string;

		/**Information about Amazon CloudWatch Logs for a build project. */
		cloudWatchLogs?: CloudWatchLogsConfig;

		/**Information about S3 logs for a build project. */
		s3Logs?: S3LogsConfig;
	}


	/**Information about the VPC configuration that AWS CodeBuild accesses. */
	export interface VpcConfig {
		vpcId?: string;
		subnets?: Array<NonEmptyString>;
		securityGroupIds?: Array<NonEmptyString>;
	}


	/**Describes a network interface. */
	export interface NetworkInterface {
		subnetId?: string;
		networkInterfaceId?: string;
	}


	/**Information about a build. */
	export interface Build {
		id?: string;
		arn?: string;
		buildNumber?: number;
		startTime?: Date;
		endTime?: Date;
		currentPhase?: string;
		buildStatus?: BuildBuildStatus;
		sourceVersion?: string;
		resolvedSourceVersion?: string;
		projectName?: string;
		phases?: Array<BuildPhase>;

		/**Information about the build input source code for the build project. */
		source?: ProjectSource;
		secondarySources?: Array<ProjectSource>;
		secondarySourceVersions?: Array<ProjectSourceVersion>;

		/**Information about build output artifacts. */
		artifacts?: BuildArtifacts;
		secondaryArtifacts?: Array<BuildArtifacts>;

		/**Information about the cache for the build project. */
		cache?: ProjectCache;

		/**Information about the build environment of the build project. */
		environment?: ProjectEnvironment;
		serviceRole?: string;

		/**Information about build logs in Amazon CloudWatch Logs. */
		logs?: LogsLocation;
		timeoutInMinutes?: number;
		queuedTimeoutInMinutes?: number;
		buildComplete?: boolean;
		initiator?: string;

		/**Information about the VPC configuration that AWS CodeBuild accesses. */
		vpcConfig?: VpcConfig;

		/**Describes a network interface. */
		networkInterface?: NetworkInterface;
		encryptionKey?: string;
		exportedEnvironmentVariables?: Array<ExportedEnvironmentVariable>;
		reportArns?: Array<String>;
		fileSystemLocations?: Array<ProjectFileSystemLocation>;
	}

	export enum BuildBuildStatus { SUCCEEDED = 0, FAILED = 1, FAULT = 2, TIMED_OUT = 3, IN_PROGRESS = 4, STOPPED = 5 }


	/**Information about a build that could not be successfully deleted. */
	export interface BuildNotDeleted {
		id?: string;
		statusCode?: string;
	}

	export enum BuildPhaseType { SUBMITTED = 0, QUEUED = 1, PROVISIONING = 2, DOWNLOAD_SOURCE = 3, INSTALL = 4, PRE_BUILD = 5, BUILD = 6, POST_BUILD = 7, UPLOAD_ARTIFACTS = 8, FINALIZING = 9, COMPLETED = 10 }


	/**Information about a stage for a build. */
	export interface BuildPhase {
		phaseType?: BuildPhasePhaseType;
		phaseStatus?: BuildPhasePhaseStatus;
		startTime?: Date;
		endTime?: Date;
		durationInSeconds?: number;
		contexts?: Array<PhaseContext>;
	}

	export enum BuildPhasePhaseType { SUBMITTED = 0, QUEUED = 1, PROVISIONING = 2, DOWNLOAD_SOURCE = 3, INSTALL = 4, PRE_BUILD = 5, BUILD = 6, POST_BUILD = 7, UPLOAD_ARTIFACTS = 8, FINALIZING = 9, COMPLETED = 10 }

	export enum BuildPhasePhaseStatus { SUCCEEDED = 0, FAILED = 1, FAULT = 2, TIMED_OUT = 3, IN_PROGRESS = 4, STOPPED = 5 }

	export enum CacheMode { LOCAL_DOCKER_LAYER_CACHE = 0, LOCAL_SOURCE_CACHE = 1, LOCAL_CUSTOM_CACHE = 2 }

	export enum CacheType { NO_CACHE = 0, S3 = 1, LOCAL = 2 }

	export enum LogsConfigStatusType { ENABLED = 0, DISABLED = 1 }


	/** Information about Amazon CloudWatch Logs for a build project.  */
	export interface CloudWatchLogsConfig {
		status: CloudWatchLogsConfigStatus;
		groupName?: string;
		streamName?: string;
	}

	export enum CloudWatchLogsConfigStatus { ENABLED = 0, DISABLED = 1 }

	export enum ComputeType { BUILD_GENERAL1_SMALL = 0, BUILD_GENERAL1_MEDIUM = 1, BUILD_GENERAL1_LARGE = 2, BUILD_GENERAL1_2XLARGE = 3 }


	/**Information about the build output artifacts for the build project. */
	export interface ProjectArtifacts {
		type: ProjectArtifactsType;
		location?: string;
		path?: string;
		namespaceType?: ProjectArtifactsNamespaceType;
		name?: string;
		packaging?: ProjectArtifactsPackaging;
		overrideArtifactName?: boolean;
		encryptionDisabled?: boolean;
		artifactIdentifier?: string;
	}

	export enum ProjectArtifactsType { CODEPIPELINE = 0, S3 = 1, NO_ARTIFACTS = 2 }

	export enum ProjectArtifactsNamespaceType { NONE = 0, BUILD_ID = 1 }

	export enum ProjectArtifactsPackaging { NONE = 0, ZIP = 1 }


	/** Information about logs for a build project. These can be logs in Amazon CloudWatch Logs, built in a specified S3 bucket, or both.  */
	export interface LogsConfig {

		/**Information about Amazon CloudWatch Logs for a build project. */
		cloudWatchLogs?: CloudWatchLogsConfig;

		/**Information about S3 logs for a build project. */
		s3Logs?: S3LogsConfig;
	}


	/**Information about a build project. */
	export interface Project {
		name?: string;
		arn?: string;
		description?: string;

		/**Information about the build input source code for the build project. */
		source?: ProjectSource;
		secondarySources?: Array<ProjectSource>;
		sourceVersion?: string;
		secondarySourceVersions?: Array<ProjectSourceVersion>;

		/**Information about the build output artifacts for the build project. */
		artifacts?: ProjectArtifacts;
		secondaryArtifacts?: Array<ProjectArtifacts>;

		/**Information about the cache for the build project. */
		cache?: ProjectCache;

		/**Information about the build environment of the build project. */
		environment?: ProjectEnvironment;
		serviceRole?: string;
		timeoutInMinutes?: number;
		queuedTimeoutInMinutes?: number;
		encryptionKey?: string;
		tags?: Array<Tag>;
		created?: Date;
		lastModified?: Date;

		/**Information about a webhook that connects repository events to a build project in AWS CodeBuild. */
		webhook?: Webhook;

		/**Information about the VPC configuration that AWS CodeBuild accesses. */
		vpcConfig?: VpcConfig;

		/**Information about the build badge for the build project. */
		badge?: ProjectBadge;

		/**Information about logs for a build project. These can be logs in Amazon CloudWatch Logs, built in a specified S3 bucket, or both. */
		logsConfig?: LogsConfig;
		fileSystemLocations?: Array<ProjectFileSystemLocation>;
	}

	export enum ReportType { TEST = 0 }


	/** Information about the location where the run of a report is exported.  */
	export interface ReportExportConfig {
		exportConfigType?: ReportExportConfigExportConfigType;

		/**Information about the S3 bucket where the raw data of a report are exported. */
		s3Destination?: S3ReportExportConfig;
	}

	export enum ReportExportConfigExportConfigType { S3 = 0, NO_EXPORT = 1 }


	/** A series of reports. Each report contains information about the results from running a series of test cases. You specify the test cases for a report group in the buildspec for a build project using one or more paths to the test case files.  */
	export interface ReportGroup {
		arn?: string;
		name?: string;
		type?: ReportGroupType;

		/**Information about the location where the run of a report is exported. */
		exportConfig?: ReportExportConfig;
		created?: Date;
		lastModified?: Date;
		tags?: Array<Tag>;
	}

	export enum ReportGroupType { TEST = 0 }


	/**Information about a webhook that connects repository events to a build project in AWS CodeBuild. */
	export interface Webhook {
		url?: string;
		payloadUrl?: string;
		secret?: string;
		branchFilter?: string;
		filterGroups?: Array<FilterGroup>;
		lastModifiedSecret?: Date;
	}

	export enum CredentialProviderType { SECRETS_MANAGER = 0 }


	/** A filter used to return specific types of test cases.  */
	export interface TestCaseFilter {
		status?: string;
	}


	/**Information about a Docker image that is managed by AWS CodeBuild. */
	export interface EnvironmentImage {
		name?: string;
		description?: string;
		versions?: Array<String>;
	}

	export enum LanguageType { JAVA = 0, PYTHON = 1, NODE_JS = 2, RUBY = 3, GOLANG = 4, DOCKER = 5, ANDROID = 6, DOTNET = 7, BASE = 8, PHP = 9 }


	/**A set of Docker images that are related by programming language and are managed by AWS CodeBuild. */
	export interface EnvironmentLanguage {
		language?: EnvironmentLanguageLanguage;
		images?: Array<EnvironmentImage>;
	}

	export enum EnvironmentLanguageLanguage { JAVA = 0, PYTHON = 1, NODE_JS = 2, RUBY = 3, GOLANG = 4, DOCKER = 5, ANDROID = 6, DOTNET = 7, BASE = 8, PHP = 9 }

	export enum PlatformType { DEBIAN = 0, AMAZON_LINUX = 1, UBUNTU = 2, WINDOWS_SERVER = 3 }


	/**A set of Docker images that are related by platform and are managed by AWS CodeBuild. */
	export interface EnvironmentPlatform {
		platform?: EnvironmentPlatformPlatform;
		languages?: Array<EnvironmentLanguage>;
	}

	export enum EnvironmentPlatformPlatform { DEBIAN = 0, AMAZON_LINUX = 1, UBUNTU = 2, WINDOWS_SERVER = 3 }

	export enum EnvironmentType { WINDOWS_CONTAINER = 0, LINUX_CONTAINER = 1, LINUX_GPU_CONTAINER = 2, ARM_CONTAINER = 3 }

	export enum EnvironmentVariableType { PLAINTEXT = 0, PARAMETER_STORE = 1, SECRETS_MANAGER = 2 }


	/**Information about an environment variable for a build project or a build. */
	export interface EnvironmentVariable {
		name: string;
		value: string;
		type?: EnvironmentVariableType;
	}

	export enum EnvironmentVariableType { PLAINTEXT = 0, PARAMETER_STORE = 1, SECRETS_MANAGER = 2 }


	/** Information about an exported environment variable.  */
	export interface ExportedEnvironmentVariable {
		name?: string;
		value?: string;
	}

	export enum FileSystemType { EFS = 0 }


	/** A filter used to determine which webhooks trigger a build.  */
	export interface WebhookFilter {
		type: WebhookFilterType;
		pattern: string;
		excludeMatchedPattern?: boolean;
	}

	export enum WebhookFilterType { EVENT = 0, BASE_REF = 1, HEAD_REF = 2, ACTOR_ACCOUNT_ID = 3, FILE_PATH = 4, COMMIT_MESSAGE = 5 }


	/** Information about the Git submodules configuration for an AWS CodeBuild build project.  */
	export interface GitSubmodulesConfig {
		fetchSubmodules: boolean;
	}

	export enum ImagePullCredentialsType { CODEBUILD = 0, SERVICE_ROLE = 1 }

	export enum ServerType { GITHUB = 0, BITBUCKET = 1, GITHUB_ENTERPRISE = 2 }

	export enum SortOrderType { ASCENDING = 0, DESCENDING = 1 }

	export enum ProjectSortByType { NAME = 0, CREATED_TIME = 1, LAST_MODIFIED_TIME = 2 }

	export enum ReportGroupSortByType { NAME = 0, CREATED_TIME = 1, LAST_MODIFIED_TIME = 2 }


	/** A filter used to return reports with the status specified by the input <code>status</code> parameter.  */
	export interface ReportFilter {
		status?: ReportFilterStatus;
	}

	export enum ReportFilterStatus { GENERATING = 0, SUCCEEDED = 1, FAILED = 2, INCOMPLETE = 3, DELETING = 4 }

	export enum SharedResourceSortByType { ARN = 0, MODIFIED_TIME = 1 }


	/** Information about S3 logs for a build project.  */
	export interface S3LogsConfig {
		status: S3LogsConfigStatus;
		location?: string;
		encryptionDisabled?: boolean;
	}

	export enum S3LogsConfigStatus { ENABLED = 0, DISABLED = 1 }


	/**Additional information about a build phase that has an error. You can use this information for troubleshooting. */
	export interface PhaseContext {
		statusCode?: string;
		message?: string;
	}


	/**Information about the build badge for the build project. */
	export interface ProjectBadge {
		badgeEnabled?: boolean;
		badgeRequestUrl?: string;
	}


	/**<p> Information about credentials that provide access to a private Docker registry. When this is set: </p> <ul> <li> <p> <code>imagePullCredentialsType</code> must be set to <code>SERVICE_ROLE</code>. </p> </li> <li> <p> images cannot be curated or an Amazon ECR image.</p> </li> </ul> <p> For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/sample-private-registry.html">Private Registry with AWS Secrets Manager Sample for AWS CodeBuild</a>. </p> */
	export interface RegistryCredential {
		credential: string;
		credentialProvider: RegistryCredentialCredentialProvider;
	}

	export enum RegistryCredentialCredentialProvider { SECRETS_MANAGER = 0 }


	/** Information about a file system created by Amazon Elastic File System (EFS). For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/whatisefs.html">What Is Amazon Elastic File System?</a>  */
	export interface ProjectFileSystemLocation {
		type?: ProjectFileSystemLocationType;
		location?: string;
		mountPoint?: string;
		identifier?: string;
		mountOptions?: string;
	}

	export enum ProjectFileSystemLocationType { EFS = 0 }


	/** A source identifier and its corresponding version.  */
	export interface ProjectSourceVersion {
		sourceIdentifier: string;
		sourceVersion: string;
	}

	export enum SourceType { CODECOMMIT = 0, CODEPIPELINE = 1, GITHUB = 2, S3 = 3, BITBUCKET = 4, GITHUB_ENTERPRISE = 5, NO_SOURCE = 6 }


	/**<p>Information about the authorization settings for AWS CodeBuild to access the source code to be built.</p> <p>This information is for the AWS CodeBuild console's use only. Your code should not get or set this information directly.</p> */
	export interface SourceAuth {
		type: SourceAuthType;
		resource?: string;
	}

	export enum SourceAuthType { OAUTH = 0 }

	export enum ReportStatusType { GENERATING = 0, SUCCEEDED = 1, FAILED = 2, INCOMPLETE = 3, DELETING = 4 }


	/** Information about a test report.  */
	export interface TestReportSummary {
		total: number;
		statusCounts: ReportStatusCounts;
		durationInNanoSeconds: number;
	}


	/** Information about the results from running a series of test cases during the run of a build project. The test cases are specified in the buildspec for the build project using one or more paths to the test case files. You can specify any type of tests you want, such as unit tests, integration tests, and functional tests.  */
	export interface Report {
		arn?: string;
		type?: ReportType;
		name?: string;
		reportGroupArn?: string;
		executionId?: string;
		status?: ReportStatus;
		created?: Date;
		expired?: Date;

		/**Information about the location where the run of a report is exported. */
		exportConfig?: ReportExportConfig;
		truncated?: boolean;

		/**Information about a test report. */
		testSummary?: TestReportSummary;
	}

	export enum ReportType { TEST = 0 }

	export enum ReportStatus { GENERATING = 0, SUCCEEDED = 1, FAILED = 2, INCOMPLETE = 3, DELETING = 4 }

	export enum ReportExportConfigType { S3 = 0, NO_EXPORT = 1 }


	/** Information about the S3 bucket where the raw data of a report are exported.  */
	export interface S3ReportExportConfig {
		bucket?: string;
		path?: string;
		packaging?: S3ReportExportConfigPackaging;
		encryptionKey?: string;
		encryptionDisabled?: boolean;
	}

	export enum S3ReportExportConfigPackaging { ZIP = 0, NONE = 1 }

	export enum ReportPackagingType { ZIP = 0, NONE = 1 }

	export enum SourceAuthType { OAUTH = 0 }


	/** Information about the credentials for a GitHub, GitHub Enterprise, or Bitbucket repository.  */
	export interface SourceCredentialsInfo {
		arn?: string;
		serverType?: SourceCredentialsInfoServerType;
		authType?: SourceCredentialsInfoAuthType;
	}

	export enum SourceCredentialsInfoServerType { GITHUB = 0, BITBUCKET = 1, GITHUB_ENTERPRISE = 2 }

	export enum SourceCredentialsInfoAuthType { OAUTH = 0, BASIC_AUTH = 1, PERSONAL_ACCESS_TOKEN = 2 }


	/**<p>A tag, consisting of a key and a value.</p> <p>This tag is available for use by AWS services that support tags in AWS CodeBuild.</p> */
	export interface Tag {
		key?: string;
		value?: string;
	}


	/** Information about a test case created using a framework such as NUnit or Cucumber. A test case might be a unit test or a configuration test.  */
	export interface TestCase {
		reportArn?: string;
		testRawDataPath?: string;
		prefix?: string;
		name?: string;
		status?: string;
		durationInNanoSeconds?: number;
		message?: string;
		expired?: Date;
	}

	export enum WebhookFilterType { EVENT = 0, BASE_REF = 1, HEAD_REF = 2, ACTOR_ACCOUNT_ID = 3, FILE_PATH = 4, COMMIT_MESSAGE = 5 }

	@autoinject()
	export class DemoClient {
		constructor(private http: HttpClient) {
		}

		/**
		 * Deletes one or more builds.
		 * Post /#X-Amz-Target=CodeBuild_20161006.BatchDeleteBuilds
		 * @return {BatchDeleteBuildsOutput} Success
		 */
		BatchDeleteBuilds(requestBody: BatchDeleteBuildsInput, headersHandler?: () => {[header: string]: string}): Promise<BatchDeleteBuildsOutput> {
			return this.http.post('/#X-Amz-Target=CodeBuild_20161006.BatchDeleteBuilds', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Gets information about one or more builds.
		 * Post /#X-Amz-Target=CodeBuild_20161006.BatchGetBuilds
		 * @return {BatchGetBuildsOutput} Success
		 */
		BatchGetBuilds(requestBody: BatchGetBuildsInput, headersHandler?: () => {[header: string]: string}): Promise<BatchGetBuildsOutput> {
			return this.http.post('/#X-Amz-Target=CodeBuild_20161006.BatchGetBuilds', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Gets information about one or more build projects.
		 * Post /#X-Amz-Target=CodeBuild_20161006.BatchGetProjects
		 * @return {BatchGetProjectsOutput} Success
		 */
		BatchGetProjects(requestBody: BatchGetProjectsInput, headersHandler?: () => {[header: string]: string}): Promise<BatchGetProjectsOutput> {
			return this.http.post('/#X-Amz-Target=CodeBuild_20161006.BatchGetProjects', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Returns an array of report groups.
		 * Post /#X-Amz-Target=CodeBuild_20161006.BatchGetReportGroups
		 * @return {BatchGetReportGroupsOutput} Success
		 */
		BatchGetReportGroups(requestBody: BatchGetReportGroupsInput, headersHandler?: () => {[header: string]: string}): Promise<BatchGetReportGroupsOutput> {
			return this.http.post('/#X-Amz-Target=CodeBuild_20161006.BatchGetReportGroups', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Returns an array of reports.
		 * Post /#X-Amz-Target=CodeBuild_20161006.BatchGetReports
		 * @return {BatchGetReportsOutput} Success
		 */
		BatchGetReports(requestBody: BatchGetReportsInput, headersHandler?: () => {[header: string]: string}): Promise<BatchGetReportsOutput> {
			return this.http.post('/#X-Amz-Target=CodeBuild_20161006.BatchGetReports', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Creates a build project.
		 * Post /#X-Amz-Target=CodeBuild_20161006.CreateProject
		 * @return {CreateProjectOutput} Success
		 */
		CreateProject(requestBody: CreateProjectInput, headersHandler?: () => {[header: string]: string}): Promise<CreateProjectOutput> {
			return this.http.post('/#X-Amz-Target=CodeBuild_20161006.CreateProject', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Creates a report group. A report group contains a collection of reports.
		 * Post /#X-Amz-Target=CodeBuild_20161006.CreateReportGroup
		 * @return {CreateReportGroupOutput} Success
		 */
		CreateReportGroup(requestBody: CreateReportGroupInput, headersHandler?: () => {[header: string]: string}): Promise<CreateReportGroupOutput> {
			return this.http.post('/#X-Amz-Target=CodeBuild_20161006.CreateReportGroup', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * <p>For an existing AWS CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, enables AWS CodeBuild to start rebuilding the source code every time a code change is pushed to the repository.</p> <important> <p>If you enable webhooks for an AWS CodeBuild project, and the project is used as a build step in AWS CodePipeline, then two identical builds are created for each commit. One build is triggered through webhooks, and one through AWS CodePipeline. Because billing is on a per-build basis, you are billed for both builds. Therefore, if you are using AWS CodePipeline, we recommend that you disable webhooks in AWS CodeBuild. In the AWS CodeBuild console, clear the Webhook box. For more information, see step 5 in <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/change-project.html#change-project-console">Change a Build Project's Settings</a>.</p> </important>
		 * Post /#X-Amz-Target=CodeBuild_20161006.CreateWebhook
		 * @return {CreateWebhookOutput} Success
		 */
		CreateWebhook(requestBody: CreateWebhookInput, headersHandler?: () => {[header: string]: string}): Promise<CreateWebhookOutput> {
			return this.http.post('/#X-Amz-Target=CodeBuild_20161006.CreateWebhook', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Deletes a build project. When you delete a project, its builds are not deleted.
		 * Post /#X-Amz-Target=CodeBuild_20161006.DeleteProject
		 * @return {DeleteProjectOutput} Success
		 */
		DeleteProject(requestBody: DeleteProjectInput, headersHandler?: () => {[header: string]: string}): Promise<DeleteProjectOutput> {
			return this.http.post('/#X-Amz-Target=CodeBuild_20161006.DeleteProject', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Deletes a report.
		 * Post /#X-Amz-Target=CodeBuild_20161006.DeleteReport
		 * @return {DeleteReportOutput} Success
		 */
		DeleteReport(requestBody: DeleteReportInput, headersHandler?: () => {[header: string]: string}): Promise<DeleteReportOutput> {
			return this.http.post('/#X-Amz-Target=CodeBuild_20161006.DeleteReport', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * <code>DeleteReportGroup</code>: Deletes a report group. Before you delete a report group, you must delete its reports. Use <a href="https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListReportsForReportGroup.html">ListReportsForReportGroup</a> to get the reports in a report group. Use <a href="https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DeleteReport.html">DeleteReport</a> to delete the reports. If you call <code>DeleteReportGroup</code> for a report group that contains one or more reports, an exception is thrown.
		 * Post /#X-Amz-Target=CodeBuild_20161006.DeleteReportGroup
		 * @return {DeleteReportGroupOutput} Success
		 */
		DeleteReportGroup(requestBody: DeleteReportGroupInput, headersHandler?: () => {[header: string]: string}): Promise<DeleteReportGroupOutput> {
			return this.http.post('/#X-Amz-Target=CodeBuild_20161006.DeleteReportGroup', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Deletes a resource policy that is identified by its resource ARN.
		 * Post /#X-Amz-Target=CodeBuild_20161006.DeleteResourcePolicy
		 * @return {DeleteResourcePolicyOutput} Success
		 */
		DeleteResourcePolicy(requestBody: DeleteResourcePolicyInput, headersHandler?: () => {[header: string]: string}): Promise<DeleteResourcePolicyOutput> {
			return this.http.post('/#X-Amz-Target=CodeBuild_20161006.DeleteResourcePolicy', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Deletes a set of GitHub, GitHub Enterprise, or Bitbucket source credentials.
		 * Post /#X-Amz-Target=CodeBuild_20161006.DeleteSourceCredentials
		 * @return {DeleteSourceCredentialsOutput} Success
		 */
		DeleteSourceCredentials(requestBody: DeleteSourceCredentialsInput, headersHandler?: () => {[header: string]: string}): Promise<DeleteSourceCredentialsOutput> {
			return this.http.post('/#X-Amz-Target=CodeBuild_20161006.DeleteSourceCredentials', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * For an existing AWS CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, stops AWS CodeBuild from rebuilding the source code every time a code change is pushed to the repository.
		 * Post /#X-Amz-Target=CodeBuild_20161006.DeleteWebhook
		 * @return {DeleteWebhookOutput} Success
		 */
		DeleteWebhook(requestBody: DeleteWebhookInput, headersHandler?: () => {[header: string]: string}): Promise<DeleteWebhookOutput> {
			return this.http.post('/#X-Amz-Target=CodeBuild_20161006.DeleteWebhook', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Returns a list of details about test cases for a report.
		 * Post /#X-Amz-Target=CodeBuild_20161006.DescribeTestCases
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeTestCasesOutput} Success
		 */
		DescribeTestCases(maxResults: string, nextToken: string, requestBody: DescribeTestCasesInput, headersHandler?: () => {[header: string]: string}): Promise<DescribeTestCasesOutput> {
			return this.http.post('/#X-Amz-Target=CodeBuild_20161006.DescribeTestCases?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Gets a resource policy that is identified by its resource ARN.
		 * Post /#X-Amz-Target=CodeBuild_20161006.GetResourcePolicy
		 * @return {GetResourcePolicyOutput} Success
		 */
		GetResourcePolicy(requestBody: GetResourcePolicyInput, headersHandler?: () => {[header: string]: string}): Promise<GetResourcePolicyOutput> {
			return this.http.post('/#X-Amz-Target=CodeBuild_20161006.GetResourcePolicy', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Imports the source repository credentials for an AWS CodeBuild project that has its source code stored in a GitHub, GitHub Enterprise, or Bitbucket repository.
		 * Post /#X-Amz-Target=CodeBuild_20161006.ImportSourceCredentials
		 * @return {ImportSourceCredentialsOutput} Success
		 */
		ImportSourceCredentials(requestBody: ImportSourceCredentialsInput, headersHandler?: () => {[header: string]: string}): Promise<ImportSourceCredentialsOutput> {
			return this.http.post('/#X-Amz-Target=CodeBuild_20161006.ImportSourceCredentials', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Resets the cache for a project.
		 * Post /#X-Amz-Target=CodeBuild_20161006.InvalidateProjectCache
		 * @return {InvalidateProjectCacheOutput} Success
		 */
		InvalidateProjectCache(requestBody: InvalidateProjectCacheInput, headersHandler?: () => {[header: string]: string}): Promise<InvalidateProjectCacheOutput> {
			return this.http.post('/#X-Amz-Target=CodeBuild_20161006.InvalidateProjectCache', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Gets a list of build IDs, with each build ID representing a single build.
		 * Post /#X-Amz-Target=CodeBuild_20161006.ListBuilds
		 * @param {string} nextToken Pagination token
		 * @return {ListBuildsOutput} Success
		 */
		ListBuilds(nextToken: string, requestBody: ListBuildsInput, headersHandler?: () => {[header: string]: string}): Promise<ListBuildsOutput> {
			return this.http.post('/#X-Amz-Target=CodeBuild_20161006.ListBuilds?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Gets a list of build IDs for the specified build project, with each build ID representing a single build.
		 * Post /#X-Amz-Target=CodeBuild_20161006.ListBuildsForProject
		 * @param {string} nextToken Pagination token
		 * @return {ListBuildsForProjectOutput} Success
		 */
		ListBuildsForProject(nextToken: string, requestBody: ListBuildsForProjectInput, headersHandler?: () => {[header: string]: string}): Promise<ListBuildsForProjectOutput> {
			return this.http.post('/#X-Amz-Target=CodeBuild_20161006.ListBuildsForProject?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Gets information about Docker images that are managed by AWS CodeBuild.
		 * Post /#X-Amz-Target=CodeBuild_20161006.ListCuratedEnvironmentImages
		 * @return {ListCuratedEnvironmentImagesOutput} Success
		 */
		ListCuratedEnvironmentImages(requestBody: ListCuratedEnvironmentImagesInput, headersHandler?: () => {[header: string]: string}): Promise<ListCuratedEnvironmentImagesOutput> {
			return this.http.post('/#X-Amz-Target=CodeBuild_20161006.ListCuratedEnvironmentImages', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Gets a list of build project names, with each build project name representing a single build project.
		 * Post /#X-Amz-Target=CodeBuild_20161006.ListProjects
		 * @param {string} nextToken Pagination token
		 * @return {ListProjectsOutput} Success
		 */
		ListProjects(nextToken: string, requestBody: ListProjectsInput, headersHandler?: () => {[header: string]: string}): Promise<ListProjectsOutput> {
			return this.http.post('/#X-Amz-Target=CodeBuild_20161006.ListProjects?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Gets a list ARNs for the report groups in the current AWS account.
		 * Post /#X-Amz-Target=CodeBuild_20161006.ListReportGroups
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListReportGroupsOutput} Success
		 */
		ListReportGroups(maxResults: string, nextToken: string, requestBody: ListReportGroupsInput, headersHandler?: () => {[header: string]: string}): Promise<ListReportGroupsOutput> {
			return this.http.post('/#X-Amz-Target=CodeBuild_20161006.ListReportGroups?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Returns a list of ARNs for the reports in the current AWS account.
		 * Post /#X-Amz-Target=CodeBuild_20161006.ListReports
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListReportsOutput} Success
		 */
		ListReports(maxResults: string, nextToken: string, requestBody: ListReportsInput, headersHandler?: () => {[header: string]: string}): Promise<ListReportsOutput> {
			return this.http.post('/#X-Amz-Target=CodeBuild_20161006.ListReports?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Returns a list of ARNs for the reports that belong to a <code>ReportGroup</code>.
		 * Post /#X-Amz-Target=CodeBuild_20161006.ListReportsForReportGroup
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListReportsForReportGroupOutput} Success
		 */
		ListReportsForReportGroup(maxResults: string, nextToken: string, requestBody: ListReportsForReportGroupInput, headersHandler?: () => {[header: string]: string}): Promise<ListReportsForReportGroupOutput> {
			return this.http.post('/#X-Amz-Target=CodeBuild_20161006.ListReportsForReportGroup?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Gets a list of projects that are shared with other AWS accounts or users.
		 * Post /#X-Amz-Target=CodeBuild_20161006.ListSharedProjects
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListSharedProjectsOutput} Success
		 */
		ListSharedProjects(maxResults: string, nextToken: string, requestBody: ListSharedProjectsInput, headersHandler?: () => {[header: string]: string}): Promise<ListSharedProjectsOutput> {
			return this.http.post('/#X-Amz-Target=CodeBuild_20161006.ListSharedProjects?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Gets a list of report groups that are shared with other AWS accounts or users.
		 * Post /#X-Amz-Target=CodeBuild_20161006.ListSharedReportGroups
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListSharedReportGroupsOutput} Success
		 */
		ListSharedReportGroups(maxResults: string, nextToken: string, requestBody: ListSharedReportGroupsInput, headersHandler?: () => {[header: string]: string}): Promise<ListSharedReportGroupsOutput> {
			return this.http.post('/#X-Amz-Target=CodeBuild_20161006.ListSharedReportGroups?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Returns a list of <code>SourceCredentialsInfo</code> objects.
		 * Post /#X-Amz-Target=CodeBuild_20161006.ListSourceCredentials
		 * @return {ListSourceCredentialsOutput} Success
		 */
		ListSourceCredentials(requestBody: ListSourceCredentialsInput, headersHandler?: () => {[header: string]: string}): Promise<ListSourceCredentialsOutput> {
			return this.http.post('/#X-Amz-Target=CodeBuild_20161006.ListSourceCredentials', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Stores a resource policy for the ARN of a <code>Project</code> or <code>ReportGroup</code> object.
		 * Post /#X-Amz-Target=CodeBuild_20161006.PutResourcePolicy
		 * @return {PutResourcePolicyOutput} Success
		 */
		PutResourcePolicy(requestBody: PutResourcePolicyInput, headersHandler?: () => {[header: string]: string}): Promise<PutResourcePolicyOutput> {
			return this.http.post('/#X-Amz-Target=CodeBuild_20161006.PutResourcePolicy', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Starts running a build.
		 * Post /#X-Amz-Target=CodeBuild_20161006.StartBuild
		 * @return {StartBuildOutput} Success
		 */
		StartBuild(requestBody: StartBuildInput, headersHandler?: () => {[header: string]: string}): Promise<StartBuildOutput> {
			return this.http.post('/#X-Amz-Target=CodeBuild_20161006.StartBuild', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Attempts to stop running a build.
		 * Post /#X-Amz-Target=CodeBuild_20161006.StopBuild
		 * @return {StopBuildOutput} Success
		 */
		StopBuild(requestBody: StopBuildInput, headersHandler?: () => {[header: string]: string}): Promise<StopBuildOutput> {
			return this.http.post('/#X-Amz-Target=CodeBuild_20161006.StopBuild', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Changes the settings of a build project.
		 * Post /#X-Amz-Target=CodeBuild_20161006.UpdateProject
		 * @return {UpdateProjectOutput} Success
		 */
		UpdateProject(requestBody: UpdateProjectInput, headersHandler?: () => {[header: string]: string}): Promise<UpdateProjectOutput> {
			return this.http.post('/#X-Amz-Target=CodeBuild_20161006.UpdateProject', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Updates a report group.
		 * Post /#X-Amz-Target=CodeBuild_20161006.UpdateReportGroup
		 * @return {UpdateReportGroupOutput} Success
		 */
		UpdateReportGroup(requestBody: UpdateReportGroupInput, headersHandler?: () => {[header: string]: string}): Promise<UpdateReportGroupOutput> {
			return this.http.post('/#X-Amz-Target=CodeBuild_20161006.UpdateReportGroup', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * <p> Updates the webhook associated with an AWS CodeBuild build project. </p> <note> <p> If you use Bitbucket for your repository, <code>rotateSecret</code> is ignored. </p> </note>
		 * Post /#X-Amz-Target=CodeBuild_20161006.UpdateWebhook
		 * @return {UpdateWebhookOutput} Success
		 */
		UpdateWebhook(requestBody: UpdateWebhookInput, headersHandler?: () => {[header: string]: string}): Promise<UpdateWebhookOutput> {
			return this.http.post('/#X-Amz-Target=CodeBuild_20161006.UpdateWebhook', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}
	}

}

