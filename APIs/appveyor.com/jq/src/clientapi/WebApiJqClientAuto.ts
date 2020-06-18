///<reference path="HttpClient.ts" />
namespace My_Demo_Client {
	export enum AccessRightName { Delete = 0, Deploy = 1, RunBuild = 2, Update = 3, View = 4 }

	export interface AceAccessRight {
		allowed?: boolean;
		name: AceAccessRightName;
	}

	export enum AceAccessRightName { Delete = 0, Deploy = 1, RunBuild = 2, Update = 3, View = 4 }

	export interface AceAccessRightDefinition {
		description?: string;
		name: AceAccessRightDefinitionName;
	}

	export enum AceAccessRightDefinitionName { Delete = 0, Deploy = 1, RunBuild = 2, Update = 3, View = 4 }

	export interface Artifact {
		name?: string;

		/**
		 * Path glob of artifact files.
		 * Note that updateProject does not require path, but omitting path
		 * results in post-build error "Collecting artifacts... Value cannot
		 * be null.  Parameter name: input"
		 */
		path: string;

		/**
		 * Possible values from `Push-AppveyorArtifact` cmdlet `-Type` parameter.
		 * The web UI only allows selection of `Auto`, `WebDeployPackage`, and
		 * unspecified (which it sends as the empty string but functions like
		 * omitting the property) for `updateProject`.
		 * Any string can be sent and will be saved/returned, but only these
		 * values have a function (as far as I am aware).
		 */
		type?: ArtifactType;
	}

	export enum ArtifactType { Auto = 0, AzureCloudService = 1, AzureCloudServiceConfig = 2, ElasticBeanstalkPackage = 3, File = 4, NuGetPackage = 5, OctopusPackage = 6, SsdtPackage = 7, WebDeployPackage = 8, Zip = 9 }

	export interface ArtifactModel {
		created?: Date;
		fileName?: string;
		name?: string;
		size?: number;

		/**
		 * Possible values from `Push-AppveyorArtifact` cmdlet `-Type` parameter.
		 * The web UI only allows selection of `Auto`, `WebDeployPackage`, and
		 * unspecified (which it sends as the empty string but functions like
		 * omitting the property) for `updateProject`.
		 * Any string can be sent and will be saved/returned, but only these
		 * values have a function (as far as I am aware).
		 */
		type?: ArtifactModelType;

		/**
		 * This property has not been observed in JSON responses, but is
		 * present and nil in XML responses.
		 */
		url?: string;
	}

	export enum ArtifactModelType { Auto = 0, AzureCloudService = 1, AzureCloudServiceConfig = 2, ElasticBeanstalkPackage = 3, File = 4, NuGetPackage = 5, OctopusPackage = 6, SsdtPackage = 7, WebDeployPackage = 8, Zip = 9 }


	/**
	 * Possible values from `Push-AppveyorArtifact` cmdlet `-Type` parameter.
	 * The web UI only allows selection of `Auto`, `WebDeployPackage`, and
	 * unspecified (which it sends as the empty string but functions like
	 * omitting the property) for `updateProject`.
	 * Any string can be sent and will be saved/returned, but only these
	 * values have a function (as far as I am aware).
	 */
	export enum ArtifactType { Auto = 0, AzureCloudService = 1, AzureCloudServiceConfig = 2, ElasticBeanstalkPackage = 3, File = 4, NuGetPackage = 5, OctopusPackage = 6, SsdtPackage = 7, WebDeployPackage = 8, Zip = 9 }

	export interface Build extends BuildLookupModel {
		created?: Date;
		updated?: Date;
	}

	export enum BuildCloudName { azure-westus = 0, gce = 1, pro-ubuntu = 2, pro-ubuntu18 = 3, pro-vs2013 = 4, pro-win2016 = 5, pro-vs2017 = 6, ubuntu = 7 }

	export interface BuildJob extends Job {
		allowFailure?: boolean;
		artifactsCount?: number;
		compilationErrorsCount?: number;
		compilationMessagesCount?: number;
		compilationWarningsCount?: number;
		failedTestsCount?: number;
		messagesCount?: number;
		osType?: BuildJobOsType;
		passedTestsCount?: number;
		testsCount?: number;
	}

	export enum BuildJobOsType { Ubuntu = 0, Windows = 1 }

	export interface BuildLookupModel {
		branch?: string;
		buildId?: number;
		message?: string;
		version?: string;
	}

	export interface BuildMessage {
		category?: BuildMessageCategory;
		created?: Date;
		message?: string;
	}

	export enum BuildMessageCategory { information = 0, warning = 1 }

	export enum BuildMessageCategory { information = 0, warning = 1 }

	export enum BuildMode { msbuild = 0, none = 1, script = 2 }

	export enum BuildNotificationFrequency { all = 0, myCommits = 1, none = 2 }

	export interface BuildStartRequest {
		accountName: string;
		branch?: string;
		commitId?: string;
		environmentVariables?: string;
		projectSlug: string;

		/**
		 * Can not be used with `branch` or `commitId`
		 * Minimum: 1
		 */
		pullRequestId?: number;
	}

	export interface BuildWorkerImage {
		buildCloudName?: BuildWorkerImageBuildCloudName;
		buildWorkerImageId: number;

		/**
		 * Defines the available build worker image templates used to provision a virtual machine for a build.  Images are updated regularly.  "Previous" selects the previous version of an image, for use as a temporary workaround for regressions.
		 * `Ubuntu` is the same as `Ubuntu1604`. `Previous Ubuntu` is the same as `Previous Ubuntu1604`.
		 * See https://www.appveyor.com/docs/build-environment/#build-worker-images for details.
		 */
		name: BuildWorkerImageName;
		osType?: BuildWorkerImageOsType;
	}

	export enum BuildWorkerImageBuildCloudName { azure-westus = 0, gce = 1, pro-ubuntu = 2, pro-ubuntu18 = 3, pro-vs2013 = 4, pro-win2016 = 5, pro-vs2017 = 6, ubuntu = 7 }

	export enum BuildWorkerImageName { Previous Ubuntu = 0, Previous Ubuntu1604 = 1, Previous Ubuntu1804 = 2, Previous Visual Studio 2013 = 3, Previous Visual Studio 2015 = 4, Previous Visual Studio 2017 = 5, Ubuntu = 6, Ubuntu1604 = 7, Ubuntu1804 = 8, Visual Studio 2013 = 9, Visual Studio 2015 = 10, Visual Studio 2015 2 = 11, Visual Studio 2017 = 12, Visual Studio 2017 Preview = 13, Visual Studio 2019 Preview = 14, WMF 5 = 15, Windows Server 2019 = 16 }

	export enum BuildWorkerImageOsType { Ubuntu = 0, Windows = 1 }


	/**
	 * Defines the available build worker image templates used to provision a virtual machine for a build.  Images are updated regularly.  "Previous" selects the previous version of an image, for use as a temporary workaround for regressions.
	 * `Ubuntu` is the same as `Ubuntu1604`. `Previous Ubuntu` is the same as `Previous Ubuntu1604`.
	 * See https://www.appveyor.com/docs/build-environment/#build-worker-images for details.
	 */
	export enum BuildWorkerImageName { Previous Ubuntu = 0, Previous Ubuntu1604 = 1, Previous Ubuntu1804 = 2, Previous Visual Studio 2013 = 3, Previous Visual Studio 2015 = 4, Previous Visual Studio 2017 = 5, Ubuntu = 6, Ubuntu1604 = 7, Ubuntu1804 = 8, Visual Studio 2013 = 9, Visual Studio 2015 = 10, Visual Studio 2015 2 = 11, Visual Studio 2017 = 12, Visual Studio 2017 Preview = 13, Visual Studio 2019 Preview = 14, WMF 5 = 15, Windows Server 2019 = 16 }


	/**
	 * Technically `roleId` has default value 0 and is not required, but
	 * since role 0 never exists it would always cause a 404 response.
	 */
	export interface CollaboratorAddition {
		email: string;
		roleId: number;
	}


	/**
	 * Technically `userId` and `roleId` have default value 0 and are not
	 * required, but since user 0 and role 0 never exist it would always cause
	 * a 404 response.
	 */
	export interface CollaboratorUpdate {
		roleId: number;
		userId: number;
	}

	export enum DeployMode { providers = 0, none = 1, script = 2 }

	export interface Deployment extends DeploymentLookupModel {
		created?: Date;
		updated?: Date;
	}

	export interface DeploymentCancellation {
		deploymentId: number;
	}

	export interface DeploymentEnvironment extends DeploymentEnvironmentLookupModel {
		created?: Date;
		updated?: Date;
	}

	export interface DeploymentEnvironmentAddition {
		name: string;
		provider: DeploymentEnvironmentAdditionProvider;
		settings: DeploymentEnvironmentSettings;
	}

	export enum DeploymentEnvironmentAdditionProvider { Agent = 0, AzureBlob = 1, AzureCS = 2, AzureWebJob = 3, BinTray = 4, FTP = 5, GitHub = 6, NuGet = 7, S3 = 8, SqlDatabase = 9, WebDeploy = 10, Webhook = 11 }

	export interface DeploymentEnvironmentDeploymentsResults {
		deployments: Array<EnvironmentDeploymentModel>;
		environment: DeploymentEnvironment;
	}

	export interface DeploymentEnvironmentLookupModel {
		deploymentEnvironmentId?: number;
		name?: string;
		provider?: DeploymentEnvironmentLookupModelProvider;
	}

	export enum DeploymentEnvironmentLookupModelProvider { Agent = 0, AzureBlob = 1, AzureCS = 2, AzureWebJob = 3, BinTray = 4, FTP = 5, GitHub = 6, NuGet = 7, S3 = 8, SqlDatabase = 9, WebDeploy = 10, Webhook = 11 }

	export interface DeploymentEnvironmentProject {
		isSelected: boolean;
		name: string;
		projectId: number;
	}

	export interface DeploymentEnvironmentSettings {
		environmentVariables?: Array<StoredNameValue>;
		notifications?: Array<NotificationProviderSettings>;
		providerSettings?: Array<StoredNameValue>;
	}

	export interface DeploymentEnvironmentSettingsResults {
		environment?: DeploymentEnvironmentWithSettings;
	}

	export interface DeploymentEnvironmentWithSettings extends DeploymentEnvironment {
		environmentAccessKey?: string;

		/**
		 * Projects available for selection in UI.
		 * Only present in response from getEnvironmentSettings.
		 */
		projects?: Array<DeploymentEnvironmentProject>;

		/**Project IDs of selected projects */
		selectedProjects?: Array<number>;
		settings?: DeploymentEnvironmentSettings;
	}

	export interface DeploymentJob extends Job {
		messagesCount?: number;
	}

	export interface DeploymentLookupModel {
		build?: BuildLookupModel;
		deploymentId?: number;
		finished?: Date;
		started?: Date;
		status?: DeploymentLookupModelStatus;
	}

	export enum DeploymentLookupModelStatus { cancelled = 0, cancelling = 1, failed = 2, queued = 3, running = 4, starting = 5, success = 6 }

	export enum DeploymentNotificationFrequency { all = 0, none = 1 }

	export interface DeploymentProvider {
		onBranch?: Array<StringValueObject>;
		onEnvironmentVariables?: Array<StoredNameValue>;
		provider: DeploymentProviderProvider;
		providerSettings?: Array<StoredNameValue>;
	}

	export enum DeploymentProviderProvider { Agent = 0, AzureBlob = 1, AzureCS = 2, AzureWebJob = 3, BinTray = 4, FTP = 5, GitHub = 6, NuGet = 7, S3 = 8, SqlDatabase = 9, WebDeploy = 10, Webhook = 11 }

	export enum DeploymentProviderType { Agent = 0, AzureBlob = 1, AzureCS = 2, AzureWebJob = 3, BinTray = 4, FTP = 5, GitHub = 6, NuGet = 7, S3 = 8, SqlDatabase = 9, WebDeploy = 10, Webhook = 11 }

	export interface DeploymentStartRequest {
		accountName: string;

		/**Optional job id with artifacts if build contains multiple jobs. */
		buildJobId?: string;

		/**
		 * Build to deploy
		 * Min length: 1
		 */
		buildVersion: string;
		environmentName: string;
		environmentVariables?: string;
		projectSlug: string;
	}

	export interface EncryptRequest {
		plainValue?: string;
	}

	export interface EnvironmentDeploymentModel extends DeploymentLookupModel {
		project?: ProjectLookupModel;
	}


	/**
	 * Schema of object returned in 4XX and 5XX responses.
	 * Note:  The name is unfortunate, since it conflicts with `java.lang.Error`
	 * and other generic error classes.  It is the name used in XML responses,
	 * so it is used for consistency and possible future XML deserialization
	 * support.
	 */
	export interface Error {
		message: string;

		/**
		 * When present, this property is a map of property names in the format
		 * `request.<capitalized name>` to an `Array` of validation error
		 * message strings for the property.
		 */
		modelState?: string;
	}

	export enum GroupName { Account = 0, BuildEnvironment = 1, Deny = 2, Environments = 3, Projects = 4, Roles = 5, User = 6, Users = 7 }

	export interface GroupPermissions {
		name: GroupPermissionsName;
		permissions: Array<PermissionState>;
	}

	export enum GroupPermissionsName { Account = 0, BuildEnvironment = 1, Deny = 2, Environments = 3, Projects = 4, Roles = 5, User = 6, Users = 7 }

	export interface HostEntry {
		host: string;
		ip: string;
	}

	export enum HttpMethodRestricted { GET = 0, POST = 1 }

	export interface Job extends Timestamped {
		finished?: Date;
		jobId?: string;
		name?: string;
		started?: Date;
		status?: JobStatus;
	}

	export enum JobStatus { cancelled = 0, cancelling = 1, failed = 2, queued = 3, running = 4, starting = 5, success = 6 }

	export enum MSBuildVerbosity { quiet = 0, minimal = 1, normal = 2, detailed = 3 }

	export interface NotificationProviderSettings {
		provider: NotificationProviderSettingsProvider;

		/**
		 * This type is the union of the settings types for each of the various
		 * notification types supported by the API.  The properties correspond to
		 * the following notification types:
		 * #### All Types
		 * - onBuildSuccess
		 * - onBuildFailure
		 * - onBuildStatusChanged
		 * #### Campfire
		 * - account
		 * - authToken
		 * - room
		 * - template
		 * #### Email
		 * - subjectTemplate
		 * - bodyTemplate
		 * - recipients
		 * - recipientsValue
		 * #### GitHubPullRequest
		 * - authToken
		 * - template
		 * #### HipChat
		 * - authToken
		 * - from
		 * - room
		 * - template
		 * - serverUrl
		 * #### Slack
		 * - incomingWebhookUrl
		 * - authToken
		 * - channel
		 * - template
		 * #### Webhook
		 * - method
		 * - url
		 * - headers
		 * - headersValue
		 * - addCustomRequestBody
		 * - customRequestBodyContentType
		 * - customRequestBody
		 * #### VSOTeamRoom
		 * - vsoAccount
		 * - username
		 * - password
		 * - room
		 * - template
		 */
		settings: NotificationSettings;
	}

	export enum NotificationProviderSettingsProvider { Campfire = 0, Email = 1, GitHubPullRequest = 2, HipChat = 3, Slack = 4, Webhook = 5, VSOTeamRoom = 6 }

	export enum NotificationProviderType { Campfire = 0, Email = 1, GitHubPullRequest = 2, HipChat = 3, Slack = 4, Webhook = 5, VSOTeamRoom = 6 }


	/**
	 * This type is the union of the settings types for each of the various
	 * notification types supported by the API.  The properties correspond to
	 * the following notification types:
	 * #### All Types
	 * - onBuildSuccess
	 * - onBuildFailure
	 * - onBuildStatusChanged
	 * #### Campfire
	 * - account
	 * - authToken
	 * - room
	 * - template
	 * #### Email
	 * - subjectTemplate
	 * - bodyTemplate
	 * - recipients
	 * - recipientsValue
	 * #### GitHubPullRequest
	 * - authToken
	 * - template
	 * #### HipChat
	 * - authToken
	 * - from
	 * - room
	 * - template
	 * - serverUrl
	 * #### Slack
	 * - incomingWebhookUrl
	 * - authToken
	 * - channel
	 * - template
	 * #### Webhook
	 * - method
	 * - url
	 * - headers
	 * - headersValue
	 * - addCustomRequestBody
	 * - customRequestBodyContentType
	 * - customRequestBody
	 * #### VSOTeamRoom
	 * - vsoAccount
	 * - username
	 * - password
	 * - room
	 * - template
	 */
	export interface NotificationSettings {
		$type?: NotificationSettings$type;
		account?: string;
		addCustomRequestBody?: boolean;
		authToken?: StoredValue;
		bodyTemplate?: string;
		channel?: string;
		customRequestBody?: string;
		customRequestBodyContentType?: string;
		from?: string;
		headers?: Array<StoredNameValue>;
		headersValue?: string;
		incomingWebhookUrl?: string;
		method?: NotificationSettingsMethod;
		onBuildFailure?: boolean;
		onBuildStatusChanged?: boolean;
		onBuildSuccess?: boolean;
		password?: StoredValue;
		recipients?: Array<StringValueObject>;
		recipientsValue?: string;
		room?: string;
		serverUrl?: string;
		subjectTemplate?: string;
		template?: string;
		url?: string;
		username?: string;
		vsoAccount?: string;
	}

	export enum NotificationSettings$type { Appveyor.Models.CampfireNotificationSettings, Appveyor.Models = 0, Appveyor.Models.EmailNotificationSettings, Appveyor.Models = 1, Appveyor.Models.GitHubPullRequestNotificationSettings, Appveyor.Models = 2, Appveyor.Models.HipChatNotificationSettings, Appveyor.Models = 3, Appveyor.Models.SlackNotificationSettings, Appveyor.Models = 4, Appveyor.Models.WebhookNotificationSettings, Appveyor.Models = 5, Appveyor.Models.VSOTeamRoomNotificationSettings, Appveyor.Models = 6 }

	export enum NotificationSettingsMethod { GET = 0, POST = 1 }

	export enum NotificationSettingsType { Appveyor.Models.CampfireNotificationSettings, Appveyor.Models = 0, Appveyor.Models.EmailNotificationSettings, Appveyor.Models = 1, Appveyor.Models.GitHubPullRequestNotificationSettings, Appveyor.Models = 2, Appveyor.Models.HipChatNotificationSettings, Appveyor.Models = 3, Appveyor.Models.SlackNotificationSettings, Appveyor.Models = 4, Appveyor.Models.WebhookNotificationSettings, Appveyor.Models = 5, Appveyor.Models.VSOTeamRoomNotificationSettings, Appveyor.Models = 6 }

	export interface NuGetFeed extends Timestamped {
		accountId?: number;
		id?: string;
		isPrivateProject?: boolean;
		name?: string;
		nuGetFeedId?: number;
		projectId?: number;
		publishingEnabled?: boolean;
	}

	export enum OSServiceName { iis = 0, mongodb = 1, msmq = 2, mssql2008r2sp2 = 3, mssql2008r2sp2rs = 4, mssql2012sp1 = 5, mssql2012sp1rs = 6, mssql2014 = 7, mssql2014rs = 8, mssql2016 = 9, mysql = 10, postgresql = 11 }

	export enum OSType { Ubuntu = 0, Windows = 1 }


	/**
	 * Available permission names.  The names correspond to the following groups:
	 * #### AccountPermission
	 * - ManageApplicationAuthorizations
	 * - UpdateAccountDetails
	 * - UpdateBillingDetails
	 * #### BuildEnvironmentPermission
	 * - ConfigureBuildEnvironment
	 * #### DenyPermission
	 * - DenyAllProjectsEnvironments
	 * #### EnvironmentsPermission
	 * - DeployToEnvironment
	 * - ManageEnvironments
	 * - UpdateEnvironmentSettings
	 * #### ProjectsPermission
	 * - ManageProjects
	 * - RunProjectBuild
	 * - UpdateProjectSettings
	 * #### RolesPermission
	 * - AddRole
	 * - DeleteRole
	 * - UpdateRoleDetails
	 * #### UserPermission
	 * - ConfigureApiKeys
	 * #### UsersPermission
	 * - AddUser
	 * - DeleteUser
	 * - UpdateUserDetails
	 */
	export enum PermissionName { ManageApplicationAuthorizations = 0, UpdateAccountDetails = 1, UpdateBillingDetails = 2, ConfigureBuildEnvironment = 3, DenyAllProjectsEnvironments = 4, DeployToEnvironment = 5, ManageEnvironments = 6, UpdateEnvironmentSettings = 7, ManageProjects = 8, RunProjectBuild = 9, UpdateProjectSettings = 10, AddRole = 11, DeleteRole = 12, UpdateRoleDetails = 13, ConfigureApiKeys = 14, AddUser = 15, DeleteUser = 16, UpdateUserDetails = 17 }

	export interface PermissionState {

		/**
		 * State of the named permission.  `true` to allow, `false` to deny,
		 * missing to inherit.
		 */
		allowed?: boolean;
		description?: string;

		/**
		 * Available permission names.  The names correspond to the following groups:
		 * #### AccountPermission
		 * - ManageApplicationAuthorizations
		 * - UpdateAccountDetails
		 * - UpdateBillingDetails
		 * #### BuildEnvironmentPermission
		 * - ConfigureBuildEnvironment
		 * #### DenyPermission
		 * - DenyAllProjectsEnvironments
		 * #### EnvironmentsPermission
		 * - DeployToEnvironment
		 * - ManageEnvironments
		 * - UpdateEnvironmentSettings
		 * #### ProjectsPermission
		 * - ManageProjects
		 * - RunProjectBuild
		 * - UpdateProjectSettings
		 * #### RolesPermission
		 * - AddRole
		 * - DeleteRole
		 * - UpdateRoleDetails
		 * #### UserPermission
		 * - ConfigureApiKeys
		 * #### UsersPermission
		 * - AddUser
		 * - DeleteUser
		 * - UpdateUserDetails
		 */
		name: PermissionStateName;
	}

	export enum PermissionStateName { ManageApplicationAuthorizations = 0, UpdateAccountDetails = 1, UpdateBillingDetails = 2, ConfigureBuildEnvironment = 3, DenyAllProjectsEnvironments = 4, DeployToEnvironment = 5, ManageEnvironments = 6, UpdateEnvironmentSettings = 7, ManageProjects = 8, RunProjectBuild = 9, UpdateProjectSettings = 10, AddRole = 11, DeleteRole = 12, UpdateRoleDetails = 13, ConfigureApiKeys = 14, AddUser = 15, DeleteUser = 16, UpdateUserDetails = 17 }

	export enum PlatformName { ARM = 0, Any CPU = 1, x64 = 2, x86 = 3 }

	export interface Project extends ProjectLookupModel {
		created?: Date;
		updated?: Date;
	}


	/**`repositoryAuthentication` is only used for git, mercurial, subversion `repositoryProvider`. */
	export interface ProjectAddition {
		repositoryAuthentication?: ProjectAdditionRepositoryAuthentication;

		/**
		 * URL when repositoryProvider is git, mercurial, subversion username/project when repositoryProvider is gitHub
		 * Min length: 1
		 */
		repositoryName: string;

		/**Required if repositoryAuthentication is credentials */
		repositoryPassword?: string;
		repositoryProvider: ProjectAdditionRepositoryProvider;

		/**Required if repositoryAuthentication is credentials */
		repositoryUsername?: string;
	}

	export enum ProjectAdditionRepositoryAuthentication { credentials = 0, ssh = 1 }

	export enum ProjectAdditionRepositoryProvider { bitBucket = 0, git = 1, gitHub = 2, gitLab = 3, kiln = 4, mercurial = 5, stash = 6, subversion = 7, vso = 8 }

	export enum ProjectBranchesMode { exclude = 0, include = 1 }

	export interface ProjectBuildNumberUpdate {
		nextBuildNumber: number;
	}

	export interface ProjectBuildResults {
		build?: Build;
		project?: Project;
	}

	export interface ProjectConfiguration {
		afterBuildScripts?: Array<Script>;
		afterDeployScripts?: Array<Script>;
		afterTestScripts?: Array<Script>;
		artifacts?: Array<Artifact>;
		assemblyFileVersionFormat?: string;
		assemblyInfoFile?: string;
		assemblyInformationalVersionFormat?: string;
		assemblyVersionFormat?: string;
		beforeBuildScripts?: Array<Script>;
		beforeDeployScripts?: Array<Script>;
		beforePackageScripts?: Array<Script>;
		beforeTestScripts?: Array<Script>;
		branchesMode?: ProjectConfigurationBranchesMode;
		buildCloud?: Array<StringValueObject>;
		buildMode?: ProjectConfigurationBuildMode;

		/**Only set/used when `buildMode` is `script`. */
		buildScripts?: Array<Script>;
		cacheEntries?: Array<StringValueObject>;
		cloneDepth?: number;
		cloneFolder?: string;
		cloneScripts?: Array<Script>;
		configuration?: Array<StringValueObject>;
		configureNuGetAccountSource?: boolean;
		configureNuGetProjectSource?: boolean;
		deployMode?: ProjectConfigurationDeployMode;
		deployScripts?: Array<Script>;
		deployments?: Array<DeploymentProvider>;
		disableNuGetPublishForOctopusPackages?: boolean;
		disableNuGetPublishOnPullRequests?: boolean;
		doNotIncrementBuildNumberOnPullRequests?: boolean;
		dotnetCsprojAssemblyVersionFormat?: string;
		dotnetCsprojFile?: string;
		dotnetCsprojFileVersionFormat?: string;
		dotnetCsprojInformationalVersionFormat?: string;
		dotnetCsprojPackageVersionFormat?: string;
		dotnetCsprojVersionFormat?: string;
		environmentVariables?: Array<StoredNameValue>;
		environmentVariablesMatrix?: Array<StoredNameValueMatrix>;
		excludeBranches?: Array<StringValueObject>;
		forceHttpsClone?: boolean;
		hostsEntries?: Array<HostEntry>;
		hotFixScripts?: Array<Script>;
		includeBranches?: Array<StringValueObject>;
		includeNuGetReferences?: boolean;
		initScripts?: Array<Script>;
		installScripts?: Array<Script>;

		/**Although the names and values are not enforced, the combinations which are meaningful are documented at https://www.appveyor.com/docs/build-configuration/#allow-failing-jobs */
		matrixAllowFailures?: Array<StoredNameValueMatrix>;
		matrixExcept?: Array<StoredNameValueMatrix>;
		matrixExclude?: Array<StoredNameValueMatrix>;
		matrixFastFinish?: boolean;
		matrixOnly?: Array<StoredNameValueMatrix>;
		maxJobs?: number;
		msBuildInParallel?: boolean;
		msBuildProjectFileName?: string;
		msBuildVerbosity?: ProjectConfigurationMsBuildVerbosity;
		notifications?: Array<NotificationProviderSettings>;
		onBuildErrorScripts?: Array<Script>;
		onBuildFinishScripts?: Array<Script>;
		onBuildSuccessScripts?: Array<Script>;
		onlyCommitsFiles?: Array<StringValueObject>;
		ProjectConfigurationOperatingSystem?: Array<ProjectConfigurationOperatingSystem>;
		packageAspNetCoreProjects?: boolean;
		packageAzureCloudServiceProjects?: boolean;
		packageDotnetConsoleProjects?: boolean;
		packageNuGetProjects?: boolean;
		packageNuGetSymbols?: boolean;
		packageWebApplicationProjects?: boolean;
		packageWebApplicationProjectsBeanstalk?: boolean;
		packageWebApplicationProjectsOctopus?: boolean;
		packageWebApplicationProjectsXCopy?: boolean;
		patchAssemblyInfo?: boolean;
		patchDotnetCsproj?: boolean;
		ProjectConfigurationPlatform?: Array<ProjectConfigurationPlatform>;
		ProjectConfigurationServices?: Array<ProjectConfigurationServices>;
		shallowClone?: boolean;
		skipBranchWithPullRequests?: boolean;
		skipCommitsFiles?: Array<StringValueObject>;
		skipNonTags?: boolean;
		skipTags?: boolean;
		stacks?: Array<UnknownType>;
		testAssemblies?: Array<StringValueObject>;
		testCategories?: Array<StringValueObject>;
		ProjectConfigurationTestCategoriesMatrix?: Array<ProjectConfigurationTestCategoriesMatrix>;
		testCategoriesMode?: ProjectConfigurationTestCategoriesMode;
		testMode?: ProjectConfigurationTestMode;

		/**Only set/used when `testMode` is `script`. */
		testScripts?: Array<Script>;
		xamarinRegisterAndroidProduct?: boolean;
		xamarinRegisterIosProduct?: boolean;
	}

	export enum ProjectConfigurationBranchesMode { exclude = 0, include = 1 }

	export enum ProjectConfigurationBuildMode { msbuild = 0, none = 1, script = 2 }

	export enum ProjectConfigurationDeployMode { providers = 0, none = 1, script = 2 }

	export enum ProjectConfigurationMsBuildVerbosity { quiet = 0, minimal = 1, normal = 2, detailed = 3 }

	export interface ProjectConfigurationOperatingSystem {

		/**
		 * Defines the available build worker image templates used to provision a virtual machine for a build.  Images are updated regularly.  "Previous" selects the previous version of an image, for use as a temporary workaround for regressions.
		 * `Ubuntu` is the same as `Ubuntu1604`. `Previous Ubuntu` is the same as `Previous Ubuntu1604`.
		 * See https://www.appveyor.com/docs/build-environment/#build-worker-images for details.
		 */
		value: ProjectConfigurationOperatingSystemValue;
	}

	export enum ProjectConfigurationOperatingSystemValue { Previous Ubuntu = 0, Previous Ubuntu1604 = 1, Previous Ubuntu1804 = 2, Previous Visual Studio 2013 = 3, Previous Visual Studio 2015 = 4, Previous Visual Studio 2017 = 5, Ubuntu = 6, Ubuntu1604 = 7, Ubuntu1804 = 8, Visual Studio 2013 = 9, Visual Studio 2015 = 10, Visual Studio 2015 2 = 11, Visual Studio 2017 = 12, Visual Studio 2017 Preview = 13, Visual Studio 2019 Preview = 14, WMF 5 = 15, Windows Server 2019 = 16 }

	export interface ProjectConfigurationPlatform {
		value: ProjectConfigurationPlatformValue;
	}

	export enum ProjectConfigurationPlatformValue { ARM = 0, Any CPU = 1, x64 = 2, x86 = 3 }

	export interface ProjectConfigurationServices {
		value: ProjectConfigurationServicesValue;
	}

	export enum ProjectConfigurationServicesValue { iis = 0, mongodb = 1, msmq = 2, mssql2008r2sp2 = 3, mssql2008r2sp2rs = 4, mssql2012sp1 = 5, mssql2012sp1rs = 6, mssql2014 = 7, mssql2014rs = 8, mssql2016 = 9, mysql = 10, postgresql = 11 }

	export interface ProjectConfigurationTestCategoriesMatrix {
		categories?: Array<StringValueObject>;
	}

	export enum ProjectConfigurationTestCategoriesMode { exclude = 0, include = 1 }

	export enum ProjectConfigurationTestMode { auto = 0, none = 1, script = 2 }

	export interface ProjectDeployment {
		deployment: Deployment;
		project: Project;
	}

	export interface ProjectDeploymentModel extends DeploymentLookupModel {
		environment?: DeploymentEnvironmentLookupModel;
	}

	export interface ProjectDeploymentsResults {
		deployments?: Array<ProjectDeploymentModel>;
		project?: Project;
	}

	export interface ProjectHistory {
		builds?: Array<Build>;
		project?: Project;
	}

	export interface ProjectLookupModel {
		accountName?: string;
		name?: string;
		projectId: number;
		slug?: string;
	}

	export interface ProjectSettingsResults {
		buildClouds?: Array<StringValueObject>;
		defaultImageName?: string;
		images?: Array<BuildWorkerImage>;
		project?: Project;
		settings?: ProjectWithConfiguration;
	}

	export interface ProjectWithConfiguration {
	}

	export interface ReRunBuildRequest {
		buildId: number;

		/**Set `reRunIncomplete` set to `false` (default value) for full build re-run. Set it set to `true` to rerun only failed or cancelled jobs in multijob build. */
		reRunIncomplete?: boolean;
	}

	export enum RepositoryAuthenticationType { credentials = 0, ssh = 1 }

	export enum RepositoryProvider { bitBucket = 0, git = 1, gitHub = 2, gitLab = 3, kiln = 4, mercurial = 5, stash = 6, subversion = 7, vso = 8 }

	export enum RepositoryScm { git = 0, mercurial = 1, subversion = 2 }


	/**
	 * Technically `roleId` has default value 0 and is not required, but
	 * since role 0 never exists it would always cause a 404 response.
	 */
	export interface Role extends Timestamped {
		isSystem?: boolean;
		name: string;
		roleId: number;
	}

	export interface RoleAce {
		accessRights?: Array<AceAccessRight>;
		isAdmin?: boolean;
		name?: string;
		roleId?: number;
	}

	export interface RoleAddition {
		name: string;
	}

	export interface RoleWithGroups extends Role {
		groups?: Array<GroupPermissions>;
	}

	export interface Script {
		language?: ScriptLanguage;
		script: string;
	}

	export enum ScriptLanguage { cmd = 0, ps = 1, pwsh = 2, sh = 3 }

	export enum ScriptLanguage { cmd = 0, ps = 1, pwsh = 2, sh = 3 }

	export interface SecurityDescriptor {
		accessRightDefinitions?: Array<AceAccessRightDefinition>;
		roleAces?: Array<RoleAce>;
	}

	export enum Status { cancelled = 0, cancelling = 1, failed = 2, queued = 3, running = 4, starting = 5, success = 6 }

	export interface StoredNameValue {
		name: string;
		value: StoredValue;
	}

	export interface StoredNameValueMatrix {
		variables?: StoredNameValue;
	}

	export interface StoredValue {
		isEncrypted?: boolean;

		/**
		 * Encrypted values can be created using the encryptValue operation.
		 * Empty environment variables are represented by missing (null) value
		 * rather than an empty string.
		 */
		value?: string;
	}

	export interface StringValueObject {
		value?: string;
	}

	export enum TestMode { auto = 0, none = 1, script = 2 }

	export interface Timestamped {
		created?: Date;
		updated?: Date;
	}


	/**
	 * A schema for values which have an undocumented/unknown type.
	 * Although the type of such values could be left unspecified according to
	 * JSON Schema (and by extension OpenAPI 2.0), such unspecified types cause
	 * tool failures (e.g. swagger-codegen).  So this type can be used as a
	 * placeholder to prevent errors and document the behavior.
	 */
	export enum UnknownType { unknown = 0 }

	export interface UserAccount extends Timestamped {
		accountId?: number;
		accountName?: string;
		email: string;
		fullName: string;
		isCollaborator?: boolean;
		isOwner?: boolean;
		pageSize?: number;
		password?: string;
		roleId?: number;
		roleName?: string;
		twoFactorAuthEnabled?: boolean;
		userId?: number;
	}


	/**The roles property contains all roles, not only the role for which the user is a member. */
	export interface UserAccountRolesResults {
		roles?: Array<Role>;
		user?: UserAccount;
	}

	export interface UserAccountSettings {
		failedBuildNotification: UserAccountSettingsFailedBuildNotification;
		failedDeploymentNotification: UserAccountSettingsFailedDeploymentNotification;

		/**
		 * Note that this value is `true` on user creation, but behaves as
		 * `false` when not specified on update.
		 */
		notifyWhenBuildStatusChangedOnly?: boolean;

		/**
		 * Note that this value is `true` on user creation, but behaves as
		 * `false` when not specified on update.
		 */
		notifyWhenDeploymentStatusChangedOnly?: boolean;
		successfulBuildNotification: UserAccountSettingsSuccessfulBuildNotification;
		successfulDeploymentNotification: UserAccountSettingsSuccessfulDeploymentNotification;
	}

	export enum UserAccountSettingsFailedBuildNotification { all = 0, myCommits = 1, none = 2 }

	export enum UserAccountSettingsFailedDeploymentNotification { all = 0, none = 1 }

	export enum UserAccountSettingsSuccessfulBuildNotification { all = 0, myCommits = 1, none = 2 }

	export enum UserAccountSettingsSuccessfulDeploymentNotification { all = 0, none = 1 }

	export interface UserAddition {
		confirmPassword?: string;
		email: string;
		fullName: string;
		generatePassword?: boolean;
		password?: string;

		/**
		 * Technically `roleId` has default value 0 and is not required, but
		 * since role 0 never exists it would always cause a 404 response.
		 * Minimum: 0
		 */
		roleId: number;
	}

	export class DemoClient {
		constructor(private baseUri: string = HttpClient.locationOrigin, private httpClient: HttpClientBase = new HttpClient(), private error?: (xhr: JQueryXHR, ajaxOptions: string, thrown: string) => any, private statusCode?: { [key: string]: any; }) {
		}

		/**
		 * Encrypt a value for use in StoredValue.
		 * Post account/encrypt
		 * @return {string} Success
		 */
		EncryptValue(callback: (data : string) => any, requestBody: EncryptRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'account/encrypt', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Get build artifacts
		 * Get buildjobs/{jobId}/artifacts
		 * @return {Array<ArtifactModel>} Success
		 */
		GetBuildArtifacts(callback: (data : Array<ArtifactModel>) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'buildjobs/{jobId}/artifacts', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Download build artifact
		 * Get buildjobs/{jobId}/artifacts/{artifactFileName}
		 * @return {void} Success
		 */
		GetBuildArtifact(callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'buildjobs/{jobId}/artifacts/{artifactFileName}', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Download build log
		 * Get buildjobs/{jobId}/log
		 * @return {void} Success
		 */
		GetBuildLog(callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'buildjobs/{jobId}/log', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Start build of branch most recent commit
		 * Post builds
		 * @return {Build} Success
		 */
		StartBuild(callback: (data : Build) => any, requestBody: BuildStartRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'builds', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Re-run build
		 * If `reRunIncomplete` is `true` and all jobs in the referenced build completed successfully, a 500 Internal Server Error is returned with the message "No failed or cancelled jobs in build with ID {buildId}".
		 * Put builds
		 * @return {Build} Success
		 */
		ReRunBuild(callback: (data : Build) => any, requestBody: ReRunBuildRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.put(this.baseUri + 'builds', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Cancel build
		 * Delete builds/{accountName}/{projectSlug}/{buildVersion}
		 * @return {void} 
		 */
		CancelBuild(callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + 'builds/{accountName}/{projectSlug}/{buildVersion}', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Get collaborators
		 * Get collaborators
		 * @return {Array<UserAccount>} Success
		 */
		GetCollaborators(callback: (data : Array<UserAccount>) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'collaborators', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Add collaborator
		 * Post collaborators
		 * @return {void} 
		 */
		AddCollaborator(callback: (data : void) => any, requestBody: CollaboratorAddition, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'collaborators', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Update collaborator
		 * Put collaborators
		 * @return {void} 
		 */
		UpdateCollaborator(callback: (data : void) => any, requestBody: CollaboratorUpdate, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.put(this.baseUri + 'collaborators', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Delete collaborator
		 * Delete collaborators/{userId}
		 * @return {void} 
		 */
		DeleteCollaborator(callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + 'collaborators/{userId}', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Get collaborator
		 * Get collaborators/{userId}
		 * @return {UserAccountRolesResults} Success
		 */
		GetCollaborator(callback: (data : UserAccountRolesResults) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'collaborators/{userId}', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Start deployment
		 * Post deployments
		 * @return {Deployment} Success
		 */
		StartDeployment(callback: (data : Deployment) => any, requestBody: DeploymentStartRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'deployments', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Cancel deployment
		 * Delete deployments/stop
		 * @return {void} 
		 */
		CancelDeployment(callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + 'deployments/stop', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Get deployment
		 * Get deployments/{deploymentId}
		 * @return {ProjectDeployment} Success
		 */
		GetDeployment(callback: (data : ProjectDeployment) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'deployments/{deploymentId}', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Get environments
		 * Get environments
		 * @return {Array<DeploymentEnvironmentLookupModel>} Success
		 */
		GetEnvironments(callback: (data : Array<DeploymentEnvironmentLookupModel>) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'environments', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Add environment
		 * Post environments
		 * @return {DeploymentEnvironmentWithSettings} Success
		 */
		AddEnvironment(callback: (data : DeploymentEnvironmentWithSettings) => any, requestBody: DeploymentEnvironmentAddition, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'environments', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Update environment
		 * Put environments
		 * @return {DeploymentEnvironmentWithSettings} Success
		 */
		UpdateEnvironment(callback: (data : DeploymentEnvironmentWithSettings) => any, requestBody: DeploymentEnvironmentWithSettings, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.put(this.baseUri + 'environments', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Delete environment
		 * Delete environments/{deploymentEnvironmentId}
		 * @return {void} 
		 */
		DeleteEnvironment(callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + 'environments/{deploymentEnvironmentId}', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Get environment deployments
		 * Get environments/{deploymentEnvironmentId}/deployments
		 * @return {DeploymentEnvironmentDeploymentsResults} Success
		 */
		GetEnvironmentDeployments(callback: (data : DeploymentEnvironmentDeploymentsResults) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'environments/{deploymentEnvironmentId}/deployments', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Get environment settings
		 * Get environments/{deploymentEnvironmentId}/settings
		 * @return {DeploymentEnvironmentSettingsResults} Success
		 */
		GetEnvironmentSettings(callback: (data : DeploymentEnvironmentSettingsResults) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'environments/{deploymentEnvironmentId}/settings', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Get projects
		 * Get projects
		 * @return {Array<Project>} Success
		 */
		GetProjects(callback: (data : Array<Project>) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'projects', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Add project
		 * Post projects
		 * @return {Project} Success
		 */
		AddProject(callback: (data : Project) => any, requestBody: ProjectAddition, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'projects', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Update project
		 * Put projects
		 * @return {void} 
		 */
		UpdateProject(callback: (data : void) => any, requestBody: ProjectWithConfiguration, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.put(this.baseUri + 'projects', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Get status badge image for a project with a public repository
		 * Get projects/status/{badgeRepoProvider}/{repoAccountName}/{repoSlug}
		 * @param {string} branch Repository Branch
		 * @param {boolean} svg Return an SVG image instead of PNG?  Exclusive with `retina`.
		 * @param {boolean} retina Return a larger image suitable for retina displays?  Exclusive with `svg`.
		 * @param {string} passingText Text to show in badge when build is passing.
		 * @param {string} failingText Text to show in badge when build is failing.
		 * @param {string} pendingText Text to show in badge when build is pending.
		 * @return {void} Success
		 */
		GetPublicProjectStatusBadge(branch: string, svg: boolean, retina: boolean, passingText: string, failingText: string, pendingText: string, callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'projects/status/{badgeRepoProvider}/{repoAccountName}/{repoSlug}?branch=' + (branch == null ? '' : encodeURIComponent(branch)) + '&svg=' + svg + '&retina=' + retina + '&passingText=' + (passingText == null ? '' : encodeURIComponent(passingText)) + '&failingText=' + (failingText == null ? '' : encodeURIComponent(failingText)) + '&pendingText=' + (pendingText == null ? '' : encodeURIComponent(pendingText)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Get project status badge image
		 * Get projects/status/{statusBadgeId}
		 * @param {boolean} svg Return an SVG image instead of PNG?  Exclusive with `retina`.
		 * @param {boolean} retina Return a larger image suitable for retina displays?  Exclusive with `svg`.
		 * @param {string} passingText Text to show in badge when build is passing.
		 * @param {string} failingText Text to show in badge when build is failing.
		 * @param {string} pendingText Text to show in badge when build is pending.
		 * @return {void} Success
		 */
		GetProjectStatusBadge(svg: boolean, retina: boolean, passingText: string, failingText: string, pendingText: string, callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'projects/status/{statusBadgeId}?svg=' + svg + '&retina=' + retina + '&passingText=' + (passingText == null ? '' : encodeURIComponent(passingText)) + '&failingText=' + (failingText == null ? '' : encodeURIComponent(failingText)) + '&pendingText=' + (pendingText == null ? '' : encodeURIComponent(pendingText)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Get project branch status badge image
		 * Get projects/status/{statusBadgeId}/branch/{buildBranch}
		 * @param {boolean} svg Return an SVG image instead of PNG?  Exclusive with `retina`.
		 * @param {boolean} retina Return a larger image suitable for retina displays?  Exclusive with `svg`.
		 * @param {string} passingText Text to show in badge when build is passing.
		 * @param {string} failingText Text to show in badge when build is failing.
		 * @param {string} pendingText Text to show in badge when build is pending.
		 * @return {void} Success
		 */
		GetProjectBranchStatusBadge(svg: boolean, retina: boolean, passingText: string, failingText: string, pendingText: string, callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'projects/status/{statusBadgeId}/branch/{buildBranch}?svg=' + svg + '&retina=' + retina + '&passingText=' + (passingText == null ? '' : encodeURIComponent(passingText)) + '&failingText=' + (failingText == null ? '' : encodeURIComponent(failingText)) + '&pendingText=' + (pendingText == null ? '' : encodeURIComponent(pendingText)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Delete project
		 * Delete projects/{accountName}/{projectSlug}
		 * @return {void} 
		 */
		DeleteProject(callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + 'projects/{accountName}/{projectSlug}', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Get project last build
		 * Get projects/{accountName}/{projectSlug}
		 * @return {ProjectBuildResults} Success
		 */
		GetProjectLastBuild(callback: (data : ProjectBuildResults) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'projects/{accountName}/{projectSlug}', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Get last successful build artifact
		 * The `job` parameter is mandatory if the build contains multiple jobs.
		 * Get projects/{accountName}/{projectSlug}/artifacts/{artifactFileName}
		 * @return {void} Success
		 */
		GetProjectArtifact(callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'projects/{accountName}/{projectSlug}/artifacts/{artifactFileName}', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Get project last branch build
		 * Get projects/{accountName}/{projectSlug}/branch/{buildBranch}
		 * @return {ProjectBuildResults} Success
		 */
		GetProjectLastBuildBranch(callback: (data : ProjectBuildResults) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'projects/{accountName}/{projectSlug}/branch/{buildBranch}', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Get project build by version
		 * Get projects/{accountName}/{projectSlug}/build/{buildVersion}
		 * @return {ProjectBuildResults} Success
		 */
		GetProjectBuildByVersion(callback: (data : ProjectBuildResults) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'projects/{accountName}/{projectSlug}/build/{buildVersion}', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Delete project build cache
		 * Delete projects/{accountName}/{projectSlug}/buildcache
		 * @return {void} 
		 */
		DeleteProjectBuildCache(callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + 'projects/{accountName}/{projectSlug}/buildcache', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Get project deployments
		 * Get projects/{accountName}/{projectSlug}/deployments
		 * @return {ProjectDeploymentsResults} Success
		 */
		GetProjectDeployments(callback: (data : ProjectDeploymentsResults) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'projects/{accountName}/{projectSlug}/deployments', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Get project history
		 * Get projects/{accountName}/{projectSlug}/history
		 * @param {number} recordsNumber Number of results to include in the response. getProjectDeployments is documented to have a maximum of 20. It currently returns 500 Internal Server Error for recordsNumber <= 5. In the past it has returned 500 Internal Server Error for many different values which did not match the value used by the ci.appveyor.com web interface at the time.  As of 2018-09-08, the value used by the web interface is 10.
		 * @param {number} startBuildId Maximum `buildId` to include in the results (exclusive).
		 * @param {string} branch Repository Branch
		 * @return {ProjectHistory} Success
		 */
		GetProjectHistory(recordsNumber: number, startBuildId: number, branch: string, callback: (data : ProjectHistory) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'projects/{accountName}/{projectSlug}/history?recordsNumber=' + recordsNumber + '&startBuildId=' + startBuildId + '&branch=' + (branch == null ? '' : encodeURIComponent(branch)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Get project settings
		 * Get projects/{accountName}/{projectSlug}/settings
		 * @return {ProjectSettingsResults} Success
		 */
		GetProjectSettings(callback: (data : ProjectSettingsResults) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'projects/{accountName}/{projectSlug}/settings', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Update project build number
		 * Put projects/{accountName}/{projectSlug}/settings/build-number
		 * @return {void} 
		 */
		UpdateProjectBuildNumber(callback: (data : void) => any, requestBody: ProjectBuildNumberUpdate, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.put(this.baseUri + 'projects/{accountName}/{projectSlug}/settings/build-number', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Get project environment variables
		 * Get projects/{accountName}/{projectSlug}/settings/environment-variables
		 * @return {Array<StoredNameValue>} Success
		 */
		GetProjectEnvironmentVariables(callback: (data : Array<StoredNameValue>) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'projects/{accountName}/{projectSlug}/settings/environment-variables', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Update project environment variables
		 * Put projects/{accountName}/{projectSlug}/settings/environment-variables
		 * @return {void} 
		 */
		UpdateProjectEnvironmentVariables(callback: (data : void) => any, requestBody: Array<StoredNameValue>, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.put(this.baseUri + 'projects/{accountName}/{projectSlug}/settings/environment-variables', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Get project settings in YAML
		 * Get projects/{accountName}/{projectSlug}/settings/yaml
		 * @return {string} Success
		 * The schema type of this response could be specified as `file` to
		 * denote opaque binary data.  The generated Java code for `file`
		 * saves the response as a temporary file, making it a little more
		 * difficult to use and less efficient for common cases.  If `string`
		 * causes problems for other generators, can switch to `file` type.
		 */
		GetProjectSettingsYaml(callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'projects/{accountName}/{projectSlug}/settings/yaml', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Get roles
		 * Get roles
		 * @return {Array<Role>} Success
		 */
		GetRoles(callback: (data : Array<Role>) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'roles', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Add role
		 * Post roles
		 * @return {RoleWithGroups} Success
		 */
		AddRole(callback: (data : RoleWithGroups) => any, requestBody: RoleAddition, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'roles', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Update role
		 * Put roles
		 * @return {RoleWithGroups} Success
		 */
		UpdateRole(callback: (data : RoleWithGroups) => any, requestBody: RoleWithGroups, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.put(this.baseUri + 'roles', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Delete role
		 * Delete roles/{roleId}
		 * @return {void} 
		 */
		DeleteRole(callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + 'roles/{roleId}', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Get role
		 * Get roles/{roleId}
		 * @return {RoleWithGroups} Success
		 */
		GetRole(callback: (data : RoleWithGroups) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'roles/{roleId}', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Get users
		 * Get users
		 * @return {Array<UserAccount>} Success
		 */
		GetUsers(callback: (data : Array<UserAccount>) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'users', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Add user
		 * Post users
		 * @return {void} 
		 */
		AddUser(callback: (data : void) => any, requestBody: UserAddition, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'users', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Update user
		 * Put users
		 * @return {void} 
		 */
		UpdateUser(callback: (data : void) => any, requestBody: UserAccount, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.put(this.baseUri + 'users', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Delete user
		 * Delete users/{userId}
		 * @return {void} 
		 */
		DeleteUser(callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + 'users/{userId}', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Get user
		 * Get users/{userId}
		 * @return {UserAccountRolesResults} Success
		 */
		GetUser(callback: (data : UserAccountRolesResults) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'users/{userId}', callback, this.error, this.statusCode, headersHandler);
		}
	}

}

