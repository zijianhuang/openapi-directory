import {HttpClient} from 'aurelia-fetch-client';
import {autoinject} from 'aurelia-framework';
export namespace My_Demo_Client {
	export interface BatchDescribeSimulationJobResponse {
		jobs?: Array<SimulationJob>;
		unprocessedJobs?: Array<Arn>;
	}

	export interface CreateDeploymentJobResponse {
		arn?: string;
		fleet?: string;
		status?: CreateDeploymentJobResponseStatus;
		deploymentApplicationConfigs?: Array<DeploymentApplicationConfig>;
		failureReason?: string;
		failureCode?: CreateDeploymentJobResponseFailureCode;
		createdAt?: Date;

		/**Information about a deployment configuration. */
		deploymentConfig?: DeploymentConfig;
		tags?: TagMap;
	}

	export enum CreateDeploymentJobResponseStatus { Pending = 0, Preparing = 1, InProgress = 2, Failed = 3, Succeeded = 4, Canceled = 5 }

	export enum CreateDeploymentJobResponseFailureCode { ResourceNotFound = 0, EnvironmentSetupError = 1, EtagMismatch = 2, FailureThresholdBreached = 3, RobotDeploymentAborted = 4, RobotDeploymentNoResponse = 5, RobotAgentConnectionTimeout = 6, GreengrassDeploymentFailed = 7, InvalidGreengrassGroup = 8, MissingRobotArchitecture = 9, MissingRobotApplicationArchitecture = 10, MissingRobotDeploymentResource = 11, GreengrassGroupVersionDoesNotExist = 12, LambdaDeleted = 13, ExtractingBundleFailure = 14, PreLaunchFileFailure = 15, PostLaunchFileFailure = 16, BadPermissionError = 17, DownloadConditionFailed = 18, InternalServerError = 19 }


	/**Information about an S3 object. */
	export interface S3Object {
		bucket: string;
		key: string;
		etag?: string;
	}


	/**Information about a deployment application configuration. */
	export interface DeploymentApplicationConfig {
		application: string;
		applicationVersion: string;

		/**Configuration information for a deployment launch. */
		launchConfig: DeploymentLaunchConfig;
	}

	export interface CreateFleetResponse {
		arn?: string;
		name?: string;
		createdAt?: Date;
		tags?: TagMap;
	}

	export interface CreateRobotResponse {
		arn?: string;
		name?: string;
		createdAt?: Date;
		greengrassGroupId?: string;
		architecture?: CreateRobotResponseArchitecture;
		tags?: TagMap;
	}

	export enum CreateRobotResponseArchitecture { X86_64 = 0, ARM64 = 1, ARMHF = 2 }

	export interface CreateRobotApplicationResponse {
		arn?: string;
		name?: string;
		version?: string;
		sources?: Array<Source>;

		/**Information about a robot software suite (ROS distribution). */
		robotSoftwareSuite?: RobotSoftwareSuite;
		lastUpdatedAt?: Date;
		revisionId?: string;
		tags?: TagMap;
	}


	/**Information about a source configuration. */
	export interface SourceConfig {
		s3Bucket?: string;
		s3Key?: string;
		architecture?: SourceConfigArchitecture;
	}

	export enum SourceConfigArchitecture { X86_64 = 0, ARM64 = 1, ARMHF = 2 }

	export enum RobotSoftwareSuiteType { ROS = 0, ROS2 = 1 }

	export enum RobotSoftwareSuiteVersionType { Kinetic = 0, Melodic = 1, Dashing = 2 }

	export interface CreateRobotApplicationVersionResponse {
		arn?: string;
		name?: string;
		version?: string;
		sources?: Array<Source>;

		/**Information about a robot software suite (ROS distribution). */
		robotSoftwareSuite?: RobotSoftwareSuite;
		lastUpdatedAt?: Date;
		revisionId?: string;
	}

	export interface CreateSimulationApplicationResponse {
		arn?: string;
		name?: string;
		version?: string;
		sources?: Array<Source>;

		/**Information about a simulation software suite. */
		simulationSoftwareSuite?: SimulationSoftwareSuite;

		/**Information about a robot software suite (ROS distribution). */
		robotSoftwareSuite?: RobotSoftwareSuite;

		/**Information about a rendering engine. */
		renderingEngine?: RenderingEngine;
		lastUpdatedAt?: Date;
		revisionId?: string;
		tags?: TagMap;
	}

	export enum SimulationSoftwareSuiteType { Gazebo = 0, RosbagPlay = 1 }

	export enum RenderingEngineType { OGRE = 0 }

	export interface CreateSimulationApplicationVersionResponse {
		arn?: string;
		name?: string;
		version?: string;
		sources?: Array<Source>;

		/**Information about a simulation software suite. */
		simulationSoftwareSuite?: SimulationSoftwareSuite;

		/**Information about a robot software suite (ROS distribution). */
		robotSoftwareSuite?: RobotSoftwareSuite;

		/**Information about a rendering engine. */
		renderingEngine?: RenderingEngine;
		lastUpdatedAt?: Date;
		revisionId?: string;
	}

	export interface CreateSimulationJobResponse {
		arn?: string;
		status?: CreateSimulationJobResponseStatus;
		lastStartedAt?: Date;
		lastUpdatedAt?: Date;
		failureBehavior?: CreateSimulationJobResponseFailureBehavior;
		failureCode?: CreateSimulationJobResponseFailureCode;
		clientRequestToken?: string;

		/**The output location. */
		outputLocation?: OutputLocation;

		/**The logging configuration. */
		loggingConfig?: LoggingConfig;
		maxJobDurationInSeconds?: number;
		simulationTimeMillis?: number;
		iamRole?: string;
		robotApplications?: Array<RobotApplicationConfig>;
		simulationApplications?: Array<SimulationApplicationConfig>;
		dataSources?: Array<DataSource>;
		tags?: TagMap;

		/**VPC configuration associated with your simulation job. */
		vpcConfig?: VPCConfigResponse;

		/**Compute information for the simulation job */
		compute?: ComputeResponse;
	}

	export enum CreateSimulationJobResponseStatus { Pending = 0, Preparing = 1, Running = 2, Restarting = 3, Completed = 4, Failed = 5, RunningFailed = 6, Terminating = 7, Terminated = 8, Canceled = 9 }

	export enum CreateSimulationJobResponseFailureBehavior { Fail = 0, Continue = 1 }

	export enum CreateSimulationJobResponseFailureCode { InternalServiceError = 0, RobotApplicationCrash = 1, SimulationApplicationCrash = 2, BadPermissionsRobotApplication = 3, BadPermissionsSimulationApplication = 4, BadPermissionsS3Object = 5, BadPermissionsS3Output = 6, BadPermissionsCloudwatchLogs = 7, SubnetIpLimitExceeded = 8, ENILimitExceeded = 9, BadPermissionsUserCredentials = 10, InvalidBundleRobotApplication = 11, InvalidBundleSimulationApplication = 12, InvalidS3Resource = 13, LimitExceeded = 14, MismatchedEtag = 15, RobotApplicationVersionMismatchedEtag = 16, SimulationApplicationVersionMismatchedEtag = 17, ResourceNotFound = 18, RequestThrottled = 19, BatchTimedOut = 20, BatchCanceled = 21, InvalidInput = 22, WrongRegionS3Bucket = 23, WrongRegionS3Output = 24, WrongRegionRobotApplication = 25, WrongRegionSimulationApplication = 26 }


	/**Application configuration information for a robot. */
	export interface RobotApplicationConfig {
		application: string;
		applicationVersion?: string;

		/**Information about a launch configuration. */
		launchConfig: LaunchConfig;
	}


	/**Information about a simulation application configuration. */
	export interface SimulationApplicationConfig {
		application: string;
		applicationVersion?: string;

		/**Information about a launch configuration. */
		launchConfig: LaunchConfig;
	}


	/**Information about a data source. */
	export interface DataSourceConfig {
		name: string;
		s3Bucket: string;
		s3Keys: Array<S3Key>;
	}

	export interface DeregisterRobotResponse {
		fleet?: string;
		robot?: string;
	}

	export interface DescribeDeploymentJobResponse {
		arn?: string;
		fleet?: string;
		status?: DescribeDeploymentJobResponseStatus;

		/**Information about a deployment configuration. */
		deploymentConfig?: DeploymentConfig;
		deploymentApplicationConfigs?: Array<DeploymentApplicationConfig>;
		failureReason?: string;
		failureCode?: DescribeDeploymentJobResponseFailureCode;
		createdAt?: Date;
		robotDeploymentSummary?: Array<RobotDeployment>;
		tags?: TagMap;
	}

	export enum DescribeDeploymentJobResponseStatus { Pending = 0, Preparing = 1, InProgress = 2, Failed = 3, Succeeded = 4, Canceled = 5 }

	export enum DescribeDeploymentJobResponseFailureCode { ResourceNotFound = 0, EnvironmentSetupError = 1, EtagMismatch = 2, FailureThresholdBreached = 3, RobotDeploymentAborted = 4, RobotDeploymentNoResponse = 5, RobotAgentConnectionTimeout = 6, GreengrassDeploymentFailed = 7, InvalidGreengrassGroup = 8, MissingRobotArchitecture = 9, MissingRobotApplicationArchitecture = 10, MissingRobotDeploymentResource = 11, GreengrassGroupVersionDoesNotExist = 12, LambdaDeleted = 13, ExtractingBundleFailure = 14, PreLaunchFileFailure = 15, PostLaunchFileFailure = 16, BadPermissionError = 17, DownloadConditionFailed = 18, InternalServerError = 19 }

	export interface DescribeFleetResponse {
		name?: string;
		arn?: string;
		robots?: Array<Robot>;
		createdAt?: Date;
		lastDeploymentStatus?: DescribeFleetResponseLastDeploymentStatus;
		lastDeploymentJob?: string;
		lastDeploymentTime?: Date;
		tags?: TagMap;
	}

	export enum DescribeFleetResponseLastDeploymentStatus { Pending = 0, Preparing = 1, InProgress = 2, Failed = 3, Succeeded = 4, Canceled = 5 }

	export interface DescribeRobotResponse {
		arn?: string;
		name?: string;
		fleetArn?: string;
		status?: DescribeRobotResponseStatus;
		greengrassGroupId?: string;
		createdAt?: Date;
		architecture?: DescribeRobotResponseArchitecture;
		lastDeploymentJob?: string;
		lastDeploymentTime?: Date;
		tags?: TagMap;
	}

	export enum DescribeRobotResponseStatus { Available = 0, Registered = 1, PendingNewDeployment = 2, Deploying = 3, Failed = 4, InSync = 5, NoResponse = 6 }

	export enum DescribeRobotResponseArchitecture { X86_64 = 0, ARM64 = 1, ARMHF = 2 }

	export interface DescribeRobotApplicationResponse {
		arn?: string;
		name?: string;
		version?: string;
		sources?: Array<Source>;

		/**Information about a robot software suite (ROS distribution). */
		robotSoftwareSuite?: RobotSoftwareSuite;
		revisionId?: string;
		lastUpdatedAt?: Date;
		tags?: TagMap;
	}

	export interface DescribeSimulationApplicationResponse {
		arn?: string;
		name?: string;
		version?: string;
		sources?: Array<Source>;

		/**Information about a simulation software suite. */
		simulationSoftwareSuite?: SimulationSoftwareSuite;

		/**Information about a robot software suite (ROS distribution). */
		robotSoftwareSuite?: RobotSoftwareSuite;

		/**Information about a rendering engine. */
		renderingEngine?: RenderingEngine;
		revisionId?: string;
		lastUpdatedAt?: Date;
		tags?: TagMap;
	}

	export interface DescribeSimulationJobResponse {
		arn?: string;
		name?: string;
		status?: DescribeSimulationJobResponseStatus;
		lastStartedAt?: Date;
		lastUpdatedAt?: Date;
		failureBehavior?: DescribeSimulationJobResponseFailureBehavior;
		failureCode?: DescribeSimulationJobResponseFailureCode;
		failureReason?: string;
		clientRequestToken?: string;

		/**The output location. */
		outputLocation?: OutputLocation;

		/**The logging configuration. */
		loggingConfig?: LoggingConfig;
		maxJobDurationInSeconds?: number;
		simulationTimeMillis?: number;
		iamRole?: string;
		robotApplications?: Array<RobotApplicationConfig>;
		simulationApplications?: Array<SimulationApplicationConfig>;
		dataSources?: Array<DataSource>;
		tags?: TagMap;

		/**VPC configuration associated with your simulation job. */
		vpcConfig?: VPCConfigResponse;

		/**Describes a network interface. */
		networkInterface?: NetworkInterface;

		/**Compute information for the simulation job */
		compute?: ComputeResponse;
	}

	export enum DescribeSimulationJobResponseStatus { Pending = 0, Preparing = 1, Running = 2, Restarting = 3, Completed = 4, Failed = 5, RunningFailed = 6, Terminating = 7, Terminated = 8, Canceled = 9 }

	export enum DescribeSimulationJobResponseFailureBehavior { Fail = 0, Continue = 1 }

	export enum DescribeSimulationJobResponseFailureCode { InternalServiceError = 0, RobotApplicationCrash = 1, SimulationApplicationCrash = 2, BadPermissionsRobotApplication = 3, BadPermissionsSimulationApplication = 4, BadPermissionsS3Object = 5, BadPermissionsS3Output = 6, BadPermissionsCloudwatchLogs = 7, SubnetIpLimitExceeded = 8, ENILimitExceeded = 9, BadPermissionsUserCredentials = 10, InvalidBundleRobotApplication = 11, InvalidBundleSimulationApplication = 12, InvalidS3Resource = 13, LimitExceeded = 14, MismatchedEtag = 15, RobotApplicationVersionMismatchedEtag = 16, SimulationApplicationVersionMismatchedEtag = 17, ResourceNotFound = 18, RequestThrottled = 19, BatchTimedOut = 20, BatchCanceled = 21, InvalidInput = 22, WrongRegionS3Bucket = 23, WrongRegionS3Output = 24, WrongRegionRobotApplication = 25, WrongRegionSimulationApplication = 26 }

	export interface DescribeSimulationJobBatchResponse {
		arn?: string;
		status?: DescribeSimulationJobBatchResponseStatus;
		lastUpdatedAt?: Date;
		createdAt?: Date;
		clientRequestToken?: string;

		/**Information about the batch policy. */
		batchPolicy?: BatchPolicy;
		failureCode?: DescribeSimulationJobBatchResponseFailureCode;
		failureReason?: string;
		failedRequests?: Array<FailedCreateSimulationJobRequest>;
		pendingRequests?: Array<SimulationJobRequest>;
		createdRequests?: Array<SimulationJobSummary>;
		tags?: TagMap;
	}

	export enum DescribeSimulationJobBatchResponseStatus { Pending = 0, InProgress = 1, Failed = 2, Completed = 3, Canceled = 4, Canceling = 5, Completing = 6, TimingOut = 7, TimedOut = 8 }

	export enum DescribeSimulationJobBatchResponseFailureCode { InternalServiceError = 0 }

	export interface ListDeploymentJobsResponse {
		deploymentJobs?: Array<DeploymentJob>;
		nextToken?: string;
	}


	/**Information about a filter. */
	export interface Filter {
		name?: string;
		values?: Array<Name>;
	}

	export interface ListFleetsResponse {
		fleetDetails?: Array<Fleet>;
		nextToken?: string;
	}

	export interface ListRobotApplicationsResponse {
		robotApplicationSummaries?: Array<RobotApplicationSummary>;
		nextToken?: string;
	}

	export interface ListRobotsResponse {
		robots?: Array<Robot>;
		nextToken?: string;
	}

	export interface ListSimulationApplicationsResponse {
		simulationApplicationSummaries?: Array<SimulationApplicationSummary>;
		nextToken?: string;
	}

	export interface ListSimulationJobBatchesResponse {
		simulationJobBatchSummaries?: Array<SimulationJobBatchSummary>;
		nextToken?: string;
	}

	export interface ListSimulationJobsResponse {
		simulationJobSummaries: Array<SimulationJobSummary>;
		nextToken?: string;
	}

	export interface ListTagsForResourceResponse {
		tags?: TagMap;
	}

	export interface RegisterRobotResponse {
		fleet?: string;
		robot?: string;
	}

	export interface StartSimulationJobBatchResponse {
		arn?: string;
		status?: StartSimulationJobBatchResponseStatus;
		createdAt?: Date;
		clientRequestToken?: string;

		/**Information about the batch policy. */
		batchPolicy?: BatchPolicy;
		failureCode?: StartSimulationJobBatchResponseFailureCode;
		failureReason?: string;
		failedRequests?: Array<FailedCreateSimulationJobRequest>;
		pendingRequests?: Array<SimulationJobRequest>;
		createdRequests?: Array<SimulationJobSummary>;
		tags?: TagMap;
	}

	export enum StartSimulationJobBatchResponseStatus { Pending = 0, InProgress = 1, Failed = 2, Completed = 3, Canceled = 4, Canceling = 5, Completing = 6, TimingOut = 7, TimedOut = 8 }

	export enum StartSimulationJobBatchResponseFailureCode { InternalServiceError = 0 }


	/**Information about a simulation job request. */
	export interface SimulationJobRequest {

		/**The output location. */
		outputLocation?: OutputLocation;

		/**The logging configuration. */
		loggingConfig?: LoggingConfig;
		maxJobDurationInSeconds: number;
		iamRole?: string;
		failureBehavior?: SimulationJobRequestFailureBehavior;
		useDefaultApplications?: boolean;
		robotApplications?: Array<RobotApplicationConfig>;
		simulationApplications?: Array<SimulationApplicationConfig>;
		dataSources?: Array<DataSourceConfig>;

		/**If your simulation job accesses resources in a VPC, you provide this parameter identifying the list of security group IDs and subnet IDs. These must belong to the same VPC. You must provide at least one security group and two subnet IDs. */
		vpcConfig?: VPCConfig;

		/**Compute information for the simulation job. */
		compute?: Compute;
		tags?: TagMap;
	}

	export enum SimulationJobRequestFailureBehavior { Fail = 0, Continue = 1 }

	export interface SyncDeploymentJobResponse {
		arn?: string;
		fleet?: string;
		status?: SyncDeploymentJobResponseStatus;

		/**Information about a deployment configuration. */
		deploymentConfig?: DeploymentConfig;
		deploymentApplicationConfigs?: Array<DeploymentApplicationConfig>;
		failureReason?: string;
		failureCode?: SyncDeploymentJobResponseFailureCode;
		createdAt?: Date;
	}

	export enum SyncDeploymentJobResponseStatus { Pending = 0, Preparing = 1, InProgress = 2, Failed = 3, Succeeded = 4, Canceled = 5 }

	export enum SyncDeploymentJobResponseFailureCode { ResourceNotFound = 0, EnvironmentSetupError = 1, EtagMismatch = 2, FailureThresholdBreached = 3, RobotDeploymentAborted = 4, RobotDeploymentNoResponse = 5, RobotAgentConnectionTimeout = 6, GreengrassDeploymentFailed = 7, InvalidGreengrassGroup = 8, MissingRobotArchitecture = 9, MissingRobotApplicationArchitecture = 10, MissingRobotDeploymentResource = 11, GreengrassGroupVersionDoesNotExist = 12, LambdaDeleted = 13, ExtractingBundleFailure = 14, PreLaunchFileFailure = 15, PostLaunchFileFailure = 16, BadPermissionError = 17, DownloadConditionFailed = 18, InternalServerError = 19 }

	export interface UpdateRobotApplicationResponse {
		arn?: string;
		name?: string;
		version?: string;
		sources?: Array<Source>;

		/**Information about a robot software suite (ROS distribution). */
		robotSoftwareSuite?: RobotSoftwareSuite;
		lastUpdatedAt?: Date;
		revisionId?: string;
	}

	export interface UpdateSimulationApplicationResponse {
		arn?: string;
		name?: string;
		version?: string;
		sources?: Array<Source>;

		/**Information about a simulation software suite. */
		simulationSoftwareSuite?: SimulationSoftwareSuite;

		/**Information about a robot software suite (ROS distribution). */
		robotSoftwareSuite?: RobotSoftwareSuite;

		/**Information about a rendering engine. */
		renderingEngine?: RenderingEngine;
		lastUpdatedAt?: Date;
		revisionId?: string;
	}

	export enum Architecture { X86_64 = 0, ARM64 = 1, ARMHF = 2 }

	export interface BatchDescribeSimulationJobRequest {
		jobs: Array<Arn>;
	}


	/**Information about the batch policy. */
	export interface BatchPolicy {
		timeoutInSeconds?: number;
		maxConcurrency?: number;
	}

	export interface CancelDeploymentJobRequest {
		job: string;
	}

	export interface CancelSimulationJobBatchRequest {
		batch: string;
	}

	export interface CancelSimulationJobRequest {
		job: string;
	}


	/**Compute information for the simulation job. */
	export interface Compute {
		simulationUnitLimit?: number;
	}


	/**Compute information for the simulation job */
	export interface ComputeResponse {
		simulationUnitLimit?: number;
	}


	/**Information about a deployment configuration. */
	export interface DeploymentConfig {
		concurrentDeploymentPercentage?: number;
		failureThresholdPercentage?: number;
		robotDeploymentTimeoutInSeconds?: number;

		/**Information about an S3 object. */
		downloadConditionFile?: S3Object;
	}

	export interface CreateDeploymentJobRequest {

		/**Information about a deployment configuration. */
		deploymentConfig?: DeploymentConfig;
		clientRequestToken: string;
		fleet: string;
		deploymentApplicationConfigs: Array<DeploymentApplicationConfig>;
		tags?: TagMap;
	}

	export enum DeploymentStatus { Pending = 0, Preparing = 1, InProgress = 2, Failed = 3, Succeeded = 4, Canceled = 5 }

	export enum DeploymentJobErrorCode { ResourceNotFound = 0, EnvironmentSetupError = 1, EtagMismatch = 2, FailureThresholdBreached = 3, RobotDeploymentAborted = 4, RobotDeploymentNoResponse = 5, RobotAgentConnectionTimeout = 6, GreengrassDeploymentFailed = 7, InvalidGreengrassGroup = 8, MissingRobotArchitecture = 9, MissingRobotApplicationArchitecture = 10, MissingRobotDeploymentResource = 11, GreengrassGroupVersionDoesNotExist = 12, LambdaDeleted = 13, ExtractingBundleFailure = 14, PreLaunchFileFailure = 15, PostLaunchFileFailure = 16, BadPermissionError = 17, DownloadConditionFailed = 18, InternalServerError = 19 }

	export interface CreateFleetRequest {
		name: string;
		tags?: TagMap;
	}


	/**Information about a robot software suite (ROS distribution). */
	export interface RobotSoftwareSuite {
		name?: RobotSoftwareSuiteName;
		version?: RobotSoftwareSuiteVersion;
	}

	export enum RobotSoftwareSuiteName { ROS = 0, ROS2 = 1 }

	export enum RobotSoftwareSuiteVersion { Kinetic = 0, Melodic = 1, Dashing = 2 }

	export interface CreateRobotApplicationRequest {
		name: string;
		sources: Array<SourceConfig>;

		/**Information about a robot software suite (ROS distribution). */
		robotSoftwareSuite: RobotSoftwareSuite;
		tags?: TagMap;
	}

	export interface CreateRobotApplicationVersionRequest {
		application: string;
		currentRevisionId?: string;
	}

	export interface CreateRobotRequest {
		name: string;
		architecture: CreateRobotRequestArchitecture;
		greengrassGroupId: string;
		tags?: TagMap;
	}

	export enum CreateRobotRequestArchitecture { X86_64 = 0, ARM64 = 1, ARMHF = 2 }


	/**Information about a simulation software suite. */
	export interface SimulationSoftwareSuite {
		name?: SimulationSoftwareSuiteName;
		version?: string;
	}

	export enum SimulationSoftwareSuiteName { Gazebo = 0, RosbagPlay = 1 }


	/**Information about a rendering engine. */
	export interface RenderingEngine {
		name?: RenderingEngineName;
		version?: string;
	}

	export enum RenderingEngineName { OGRE = 0 }

	export interface CreateSimulationApplicationRequest {
		name: string;
		sources: Array<SourceConfig>;

		/**Information about a simulation software suite. */
		simulationSoftwareSuite: SimulationSoftwareSuite;

		/**Information about a robot software suite (ROS distribution). */
		robotSoftwareSuite: RobotSoftwareSuite;

		/**Information about a rendering engine. */
		renderingEngine?: RenderingEngine;
		tags?: TagMap;
	}

	export interface CreateSimulationApplicationVersionRequest {
		application: string;
		currentRevisionId?: string;
	}


	/**The output location. */
	export interface OutputLocation {
		s3Bucket?: string;
		s3Prefix?: string;
	}


	/**The logging configuration. */
	export interface LoggingConfig {
		recordAllRosTopics: boolean;
	}

	export enum FailureBehavior { Fail = 0, Continue = 1 }


	/**If your simulation job accesses resources in a VPC, you provide this parameter identifying the list of security group IDs and subnet IDs. These must belong to the same VPC. You must provide at least one security group and two subnet IDs. */
	export interface VPCConfig {
		subnets: Array<NonEmptyString>;
		securityGroups?: Array<NonEmptyString>;
		assignPublicIp?: boolean;
	}

	export interface CreateSimulationJobRequest {
		clientRequestToken?: string;

		/**The output location. */
		outputLocation?: OutputLocation;

		/**The logging configuration. */
		loggingConfig?: LoggingConfig;
		maxJobDurationInSeconds: number;
		iamRole: string;
		failureBehavior?: CreateSimulationJobRequestFailureBehavior;
		robotApplications?: Array<RobotApplicationConfig>;
		simulationApplications?: Array<SimulationApplicationConfig>;
		dataSources?: Array<DataSourceConfig>;
		tags?: TagMap;

		/**If your simulation job accesses resources in a VPC, you provide this parameter identifying the list of security group IDs and subnet IDs. These must belong to the same VPC. You must provide at least one security group and two subnet IDs. */
		vpcConfig?: VPCConfig;

		/**Compute information for the simulation job. */
		compute?: Compute;
	}

	export enum CreateSimulationJobRequestFailureBehavior { Fail = 0, Continue = 1 }

	export enum SimulationJobStatus { Pending = 0, Preparing = 1, Running = 2, Restarting = 3, Completed = 4, Failed = 5, RunningFailed = 6, Terminating = 7, Terminated = 8, Canceled = 9 }

	export enum SimulationJobErrorCode { InternalServiceError = 0, RobotApplicationCrash = 1, SimulationApplicationCrash = 2, BadPermissionsRobotApplication = 3, BadPermissionsSimulationApplication = 4, BadPermissionsS3Object = 5, BadPermissionsS3Output = 6, BadPermissionsCloudwatchLogs = 7, SubnetIpLimitExceeded = 8, ENILimitExceeded = 9, BadPermissionsUserCredentials = 10, InvalidBundleRobotApplication = 11, InvalidBundleSimulationApplication = 12, InvalidS3Resource = 13, LimitExceeded = 14, MismatchedEtag = 15, RobotApplicationVersionMismatchedEtag = 16, SimulationApplicationVersionMismatchedEtag = 17, ResourceNotFound = 18, RequestThrottled = 19, BatchTimedOut = 20, BatchCanceled = 21, InvalidInput = 22, WrongRegionS3Bucket = 23, WrongRegionS3Output = 24, WrongRegionRobotApplication = 25, WrongRegionSimulationApplication = 26 }


	/**VPC configuration associated with your simulation job. */
	export interface VPCConfigResponse {
		subnets?: Array<NonEmptyString>;
		securityGroups?: Array<NonEmptyString>;
		vpcId?: string;
		assignPublicIp?: boolean;
	}


	/**Information about a data source. */
	export interface DataSource {
		name?: string;
		s3Bucket?: string;
		s3Keys?: Array<S3KeyOutput>;
	}

	export interface DeleteFleetRequest {
		fleet: string;
	}

	export interface DeleteRobotApplicationRequest {
		application: string;
		applicationVersion?: string;
	}

	export interface DeleteRobotRequest {
		robot: string;
	}

	export interface DeleteSimulationApplicationRequest {
		application: string;
		applicationVersion?: string;
	}


	/**Configuration information for a deployment launch. */
	export interface DeploymentLaunchConfig {
		packageName: string;
		preLaunchFile?: string;
		launchFile: string;
		postLaunchFile?: string;
		environmentVariables?: EnvironmentVariableMap;
	}


	/**Information about a deployment job. */
	export interface DeploymentJob {
		arn?: string;
		fleet?: string;
		status?: DeploymentJobStatus;
		deploymentApplicationConfigs?: Array<DeploymentApplicationConfig>;

		/**Information about a deployment configuration. */
		deploymentConfig?: DeploymentConfig;
		failureReason?: string;
		failureCode?: DeploymentJobFailureCode;
		createdAt?: Date;
	}

	export enum DeploymentJobStatus { Pending = 0, Preparing = 1, InProgress = 2, Failed = 3, Succeeded = 4, Canceled = 5 }

	export enum DeploymentJobFailureCode { ResourceNotFound = 0, EnvironmentSetupError = 1, EtagMismatch = 2, FailureThresholdBreached = 3, RobotDeploymentAborted = 4, RobotDeploymentNoResponse = 5, RobotAgentConnectionTimeout = 6, GreengrassDeploymentFailed = 7, InvalidGreengrassGroup = 8, MissingRobotArchitecture = 9, MissingRobotApplicationArchitecture = 10, MissingRobotDeploymentResource = 11, GreengrassGroupVersionDoesNotExist = 12, LambdaDeleted = 13, ExtractingBundleFailure = 14, PreLaunchFileFailure = 15, PostLaunchFileFailure = 16, BadPermissionError = 17, DownloadConditionFailed = 18, InternalServerError = 19 }

	export interface DeregisterRobotRequest {
		fleet: string;
		robot: string;
	}

	export interface DescribeDeploymentJobRequest {
		job: string;
	}

	export interface DescribeFleetRequest {
		fleet: string;
	}

	export interface DescribeRobotApplicationRequest {
		application: string;
		applicationVersion?: string;
	}

	export interface DescribeRobotRequest {
		robot: string;
	}

	export enum RobotStatus { Available = 0, Registered = 1, PendingNewDeployment = 2, Deploying = 3, Failed = 4, InSync = 5, NoResponse = 6 }

	export interface DescribeSimulationApplicationRequest {
		application: string;
		applicationVersion?: string;
	}

	export interface DescribeSimulationJobBatchRequest {
		batch: string;
	}

	export enum SimulationJobBatchStatus { Pending = 0, InProgress = 1, Failed = 2, Completed = 3, Canceled = 4, Canceling = 5, Completing = 6, TimingOut = 7, TimedOut = 8 }

	export enum SimulationJobBatchErrorCode { InternalServiceError = 0 }

	export interface DescribeSimulationJobRequest {
		job: string;
	}


	/**Describes a network interface. */
	export interface NetworkInterface {
		networkInterfaceId?: string;
		privateIpAddress?: string;
		publicIpAddress?: string;
	}


	/**Information about a failed create simulation job request. */
	export interface FailedCreateSimulationJobRequest {

		/**Information about a simulation job request. */
		request?: SimulationJobRequest;
		failureReason?: string;
		failureCode?: FailedCreateSimulationJobRequestFailureCode;
		failedAt?: Date;
	}

	export enum FailedCreateSimulationJobRequestFailureCode { InternalServiceError = 0, RobotApplicationCrash = 1, SimulationApplicationCrash = 2, BadPermissionsRobotApplication = 3, BadPermissionsSimulationApplication = 4, BadPermissionsS3Object = 5, BadPermissionsS3Output = 6, BadPermissionsCloudwatchLogs = 7, SubnetIpLimitExceeded = 8, ENILimitExceeded = 9, BadPermissionsUserCredentials = 10, InvalidBundleRobotApplication = 11, InvalidBundleSimulationApplication = 12, InvalidS3Resource = 13, LimitExceeded = 14, MismatchedEtag = 15, RobotApplicationVersionMismatchedEtag = 16, SimulationApplicationVersionMismatchedEtag = 17, ResourceNotFound = 18, RequestThrottled = 19, BatchTimedOut = 20, BatchCanceled = 21, InvalidInput = 22, WrongRegionS3Bucket = 23, WrongRegionS3Output = 24, WrongRegionRobotApplication = 25, WrongRegionSimulationApplication = 26 }


	/**Information about a fleet. */
	export interface Fleet {
		name?: string;
		arn?: string;
		createdAt?: Date;
		lastDeploymentStatus?: FleetLastDeploymentStatus;
		lastDeploymentJob?: string;
		lastDeploymentTime?: Date;
	}

	export enum FleetLastDeploymentStatus { Pending = 0, Preparing = 1, InProgress = 2, Failed = 3, Succeeded = 4, Canceled = 5 }


	/**Configuration information for port forwarding. */
	export interface PortForwardingConfig {
		portMappings?: Array<PortMapping>;
	}


	/**Information about a launch configuration. */
	export interface LaunchConfig {
		packageName: string;
		launchFile: string;
		environmentVariables?: EnvironmentVariableMap;

		/**Configuration information for port forwarding. */
		portForwardingConfig?: PortForwardingConfig;
		streamUI?: boolean;
	}

	export interface ListDeploymentJobsRequest {
		filters?: Array<Filter>;
		nextToken?: string;
		maxResults?: number;
	}

	export interface ListFleetsRequest {
		nextToken?: string;
		maxResults?: number;
		filters?: Array<Filter>;
	}

	export interface ListRobotApplicationsRequest {
		versionQualifier?: string;
		nextToken?: string;
		maxResults?: number;
		filters?: Array<Filter>;
	}

	export interface ListRobotsRequest {
		nextToken?: string;
		maxResults?: number;
		filters?: Array<Filter>;
	}

	export interface ListSimulationApplicationsRequest {
		versionQualifier?: string;
		nextToken?: string;
		maxResults?: number;
		filters?: Array<Filter>;
	}

	export interface ListSimulationJobBatchesRequest {
		nextToken?: string;
		maxResults?: number;
		filters?: Array<Filter>;
	}

	export interface ListSimulationJobsRequest {
		nextToken?: string;
		maxResults?: number;
		filters?: Array<Filter>;
	}


	/**An object representing a port mapping. */
	export interface PortMapping {
		jobPort: number;
		applicationPort: number;
		enableOnPublicIp?: boolean;
	}

	export enum RobotDeploymentStep { Validating = 0, DownloadingExtracting = 1, ExecutingDownloadCondition = 2, ExecutingPreLaunch = 3, Launching = 4, ExecutingPostLaunch = 5, Finished = 6 }


	/**Information about the progress of a deployment job. */
	export interface ProgressDetail {
		currentProgress?: ProgressDetailCurrentProgress;
		percentDone?: number;
		estimatedTimeRemainingSeconds?: number;
		targetResource?: string;
	}

	export enum ProgressDetailCurrentProgress { Validating = 0, DownloadingExtracting = 1, ExecutingDownloadCondition = 2, ExecutingPreLaunch = 3, Launching = 4, ExecutingPostLaunch = 5, Finished = 6 }

	export interface RegisterRobotRequest {
		fleet: string;
		robot: string;
	}

	export interface RestartSimulationJobRequest {
		job: string;
	}


	/**Information about a robot. */
	export interface Robot {
		arn?: string;
		name?: string;
		fleetArn?: string;
		status?: RobotStatus;
		greenGrassGroupId?: string;
		createdAt?: Date;
		architecture?: RobotArchitecture;
		lastDeploymentJob?: string;
		lastDeploymentTime?: Date;
	}

	export enum RobotStatus { Available = 0, Registered = 1, PendingNewDeployment = 2, Deploying = 3, Failed = 4, InSync = 5, NoResponse = 6 }

	export enum RobotArchitecture { X86_64 = 0, ARM64 = 1, ARMHF = 2 }


	/**Summary information for a robot application. */
	export interface RobotApplicationSummary {
		name?: string;
		arn?: string;
		version?: string;
		lastUpdatedAt?: Date;

		/**Information about a robot software suite (ROS distribution). */
		robotSoftwareSuite?: RobotSoftwareSuite;
	}


	/**Information about a robot deployment. */
	export interface RobotDeployment {
		arn?: string;
		deploymentStartTime?: Date;
		deploymentFinishTime?: Date;
		status?: RobotDeploymentStatus;

		/**Information about the progress of a deployment job. */
		progressDetail?: ProgressDetail;
		failureReason?: string;
		failureCode?: RobotDeploymentFailureCode;
	}

	export enum RobotDeploymentStatus { Available = 0, Registered = 1, PendingNewDeployment = 2, Deploying = 3, Failed = 4, InSync = 5, NoResponse = 6 }

	export enum RobotDeploymentFailureCode { ResourceNotFound = 0, EnvironmentSetupError = 1, EtagMismatch = 2, FailureThresholdBreached = 3, RobotDeploymentAborted = 4, RobotDeploymentNoResponse = 5, RobotAgentConnectionTimeout = 6, GreengrassDeploymentFailed = 7, InvalidGreengrassGroup = 8, MissingRobotArchitecture = 9, MissingRobotApplicationArchitecture = 10, MissingRobotDeploymentResource = 11, GreengrassGroupVersionDoesNotExist = 12, LambdaDeleted = 13, ExtractingBundleFailure = 14, PreLaunchFileFailure = 15, PostLaunchFileFailure = 16, BadPermissionError = 17, DownloadConditionFailed = 18, InternalServerError = 19 }


	/**Information about S3 keys. */
	export interface S3KeyOutput {
		s3Key?: string;
		etag?: string;
	}


	/**Summary information for a simulation application. */
	export interface SimulationApplicationSummary {
		name?: string;
		arn?: string;
		version?: string;
		lastUpdatedAt?: Date;

		/**Information about a robot software suite (ROS distribution). */
		robotSoftwareSuite?: RobotSoftwareSuite;

		/**Information about a simulation software suite. */
		simulationSoftwareSuite?: SimulationSoftwareSuite;
	}


	/**Information about a simulation job. */
	export interface SimulationJob {
		arn?: string;
		name?: string;
		status?: SimulationJobStatus;
		lastStartedAt?: Date;
		lastUpdatedAt?: Date;
		failureBehavior?: SimulationJobFailureBehavior;
		failureCode?: SimulationJobFailureCode;
		failureReason?: string;
		clientRequestToken?: string;

		/**The output location. */
		outputLocation?: OutputLocation;

		/**The logging configuration. */
		loggingConfig?: LoggingConfig;
		maxJobDurationInSeconds?: number;
		simulationTimeMillis?: number;
		iamRole?: string;
		robotApplications?: Array<RobotApplicationConfig>;
		simulationApplications?: Array<SimulationApplicationConfig>;
		dataSources?: Array<DataSource>;
		tags?: TagMap;

		/**VPC configuration associated with your simulation job. */
		vpcConfig?: VPCConfigResponse;

		/**Describes a network interface. */
		networkInterface?: NetworkInterface;

		/**Compute information for the simulation job */
		compute?: ComputeResponse;
	}

	export enum SimulationJobStatus { Pending = 0, Preparing = 1, Running = 2, Restarting = 3, Completed = 4, Failed = 5, RunningFailed = 6, Terminating = 7, Terminated = 8, Canceled = 9 }

	export enum SimulationJobFailureBehavior { Fail = 0, Continue = 1 }

	export enum SimulationJobFailureCode { InternalServiceError = 0, RobotApplicationCrash = 1, SimulationApplicationCrash = 2, BadPermissionsRobotApplication = 3, BadPermissionsSimulationApplication = 4, BadPermissionsS3Object = 5, BadPermissionsS3Output = 6, BadPermissionsCloudwatchLogs = 7, SubnetIpLimitExceeded = 8, ENILimitExceeded = 9, BadPermissionsUserCredentials = 10, InvalidBundleRobotApplication = 11, InvalidBundleSimulationApplication = 12, InvalidS3Resource = 13, LimitExceeded = 14, MismatchedEtag = 15, RobotApplicationVersionMismatchedEtag = 16, SimulationApplicationVersionMismatchedEtag = 17, ResourceNotFound = 18, RequestThrottled = 19, BatchTimedOut = 20, BatchCanceled = 21, InvalidInput = 22, WrongRegionS3Bucket = 23, WrongRegionS3Output = 24, WrongRegionRobotApplication = 25, WrongRegionSimulationApplication = 26 }


	/**Information about a simulation job batch. */
	export interface SimulationJobBatchSummary {
		arn?: string;
		lastUpdatedAt?: Date;
		createdAt?: Date;
		status?: SimulationJobBatchSummaryStatus;
		failedRequestCount?: number;
		pendingRequestCount?: number;
		createdRequestCount?: number;
	}

	export enum SimulationJobBatchSummaryStatus { Pending = 0, InProgress = 1, Failed = 2, Completed = 3, Canceled = 4, Canceling = 5, Completing = 6, TimingOut = 7, TimedOut = 8 }


	/**Summary information for a simulation job. */
	export interface SimulationJobSummary {
		arn?: string;
		lastUpdatedAt?: Date;
		name?: string;
		status?: SimulationJobSummaryStatus;
		simulationApplicationNames?: Array<Name>;
		robotApplicationNames?: Array<Name>;
		dataSourceNames?: Array<Name>;
	}

	export enum SimulationJobSummaryStatus { Pending = 0, Preparing = 1, Running = 2, Restarting = 3, Completed = 4, Failed = 5, RunningFailed = 6, Terminating = 7, Terminated = 8, Canceled = 9 }


	/**Information about a source. */
	export interface Source {
		s3Bucket?: string;
		s3Key?: string;
		etag?: string;
		architecture?: SourceArchitecture;
	}

	export enum SourceArchitecture { X86_64 = 0, ARM64 = 1, ARMHF = 2 }

	export interface StartSimulationJobBatchRequest {
		clientRequestToken?: string;

		/**Information about the batch policy. */
		batchPolicy?: BatchPolicy;
		createSimulationJobRequests: Array<SimulationJobRequest>;
		tags?: TagMap;
	}

	export interface SyncDeploymentJobRequest {
		clientRequestToken: string;
		fleet: string;
	}

	export interface TagResourceRequest {
		tags: TagMap;
	}

	export interface UpdateRobotApplicationRequest {
		application: string;
		sources: Array<SourceConfig>;

		/**Information about a robot software suite (ROS distribution). */
		robotSoftwareSuite: RobotSoftwareSuite;
		currentRevisionId?: string;
	}

	export interface UpdateSimulationApplicationRequest {
		application: string;
		sources: Array<SourceConfig>;

		/**Information about a simulation software suite. */
		simulationSoftwareSuite: SimulationSoftwareSuite;

		/**Information about a robot software suite (ROS distribution). */
		robotSoftwareSuite: RobotSoftwareSuite;

		/**Information about a rendering engine. */
		renderingEngine?: RenderingEngine;
		currentRevisionId?: string;
	}

	@autoinject()
	export class DemoClient {
		constructor(private http: HttpClient) {
		}

		/**
		 * Describes one or more simulation jobs.
		 * Post /batchDescribeSimulationJob
		 * @return {BatchDescribeSimulationJobResponse} Success
		 */
		BatchDescribeSimulationJob(requestBody: BatchDescribeSimulationJobBody, headersHandler?: () => {[header: string]: string}): Promise<BatchDescribeSimulationJobResponse> {
			return this.http.post('/batchDescribeSimulationJob', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Cancels the specified deployment job.
		 * Post /cancelDeploymentJob
		 * @return {CancelDeploymentJobResponse} Success
		 */
		CancelDeploymentJob(requestBody: CancelDeploymentJobBody, headersHandler?: () => {[header: string]: string}): Promise<CancelDeploymentJobResponse> {
			return this.http.post('/cancelDeploymentJob', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Cancels the specified simulation job.
		 * Post /cancelSimulationJob
		 * @return {CancelSimulationJobResponse} Success
		 */
		CancelSimulationJob(requestBody: CancelSimulationJobBody, headersHandler?: () => {[header: string]: string}): Promise<CancelSimulationJobResponse> {
			return this.http.post('/cancelSimulationJob', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Cancels a simulation job batch. When you cancel a simulation job batch, you are also cancelling all of the active simulation jobs created as part of the batch.
		 * Post /cancelSimulationJobBatch
		 * @return {CancelSimulationJobBatchResponse} Success
		 */
		CancelSimulationJobBatch(requestBody: CancelSimulationJobBatchBody, headersHandler?: () => {[header: string]: string}): Promise<CancelSimulationJobBatchResponse> {
			return this.http.post('/cancelSimulationJobBatch', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * <p>Deploys a specific version of a robot application to robots in a fleet.</p> <p>The robot application must have a numbered <code>applicationVersion</code> for consistency reasons. To create a new version, use <code>CreateRobotApplicationVersion</code> or see <a href="https://docs.aws.amazon.com/robomaker/latest/dg/create-robot-application-version.html">Creating a Robot Application Version</a>. </p> <note> <p>After 90 days, deployment jobs expire and will be deleted. They will no longer be accessible. </p> </note>
		 * Post /createDeploymentJob
		 * @return {CreateDeploymentJobResponse} Success
		 */
		CreateDeploymentJob(requestBody: CreateDeploymentJobBody, headersHandler?: () => {[header: string]: string}): Promise<CreateDeploymentJobResponse> {
			return this.http.post('/createDeploymentJob', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Creates a fleet, a logical group of robots running the same robot application.
		 * Post /createFleet
		 * @return {CreateFleetResponse} Success
		 */
		CreateFleet(requestBody: CreateFleetBody, headersHandler?: () => {[header: string]: string}): Promise<CreateFleetResponse> {
			return this.http.post('/createFleet', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Creates a robot.
		 * Post /createRobot
		 * @return {CreateRobotResponse} Success
		 */
		CreateRobot(requestBody: CreateRobotBody, headersHandler?: () => {[header: string]: string}): Promise<CreateRobotResponse> {
			return this.http.post('/createRobot', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Creates a robot application.
		 * Post /createRobotApplication
		 * @return {CreateRobotApplicationResponse} Success
		 */
		CreateRobotApplication(requestBody: CreateRobotApplicationBody, headersHandler?: () => {[header: string]: string}): Promise<CreateRobotApplicationResponse> {
			return this.http.post('/createRobotApplication', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Creates a version of a robot application.
		 * Post /createRobotApplicationVersion
		 * @return {CreateRobotApplicationVersionResponse} Success
		 */
		CreateRobotApplicationVersion(requestBody: CreateRobotApplicationVersionBody, headersHandler?: () => {[header: string]: string}): Promise<CreateRobotApplicationVersionResponse> {
			return this.http.post('/createRobotApplicationVersion', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Creates a simulation application.
		 * Post /createSimulationApplication
		 * @return {CreateSimulationApplicationResponse} Success
		 */
		CreateSimulationApplication(requestBody: CreateSimulationApplicationBody, headersHandler?: () => {[header: string]: string}): Promise<CreateSimulationApplicationResponse> {
			return this.http.post('/createSimulationApplication', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Creates a simulation application with a specific revision id.
		 * Post /createSimulationApplicationVersion
		 * @return {CreateSimulationApplicationVersionResponse} Success
		 */
		CreateSimulationApplicationVersion(requestBody: CreateSimulationApplicationVersionBody, headersHandler?: () => {[header: string]: string}): Promise<CreateSimulationApplicationVersionResponse> {
			return this.http.post('/createSimulationApplicationVersion', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * <p>Creates a simulation job.</p> <note> <p>After 90 days, simulation jobs expire and will be deleted. They will no longer be accessible. </p> </note>
		 * Post /createSimulationJob
		 * @return {CreateSimulationJobResponse} Success
		 */
		CreateSimulationJob(requestBody: CreateSimulationJobBody, headersHandler?: () => {[header: string]: string}): Promise<CreateSimulationJobResponse> {
			return this.http.post('/createSimulationJob', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Deletes a fleet.
		 * Post /deleteFleet
		 * @return {DeleteFleetResponse} Success
		 */
		DeleteFleet(requestBody: DeleteFleetBody, headersHandler?: () => {[header: string]: string}): Promise<DeleteFleetResponse> {
			return this.http.post('/deleteFleet', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Deletes a robot.
		 * Post /deleteRobot
		 * @return {DeleteRobotResponse} Success
		 */
		DeleteRobot(requestBody: DeleteRobotBody, headersHandler?: () => {[header: string]: string}): Promise<DeleteRobotResponse> {
			return this.http.post('/deleteRobot', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Deletes a robot application.
		 * Post /deleteRobotApplication
		 * @return {DeleteRobotApplicationResponse} Success
		 */
		DeleteRobotApplication(requestBody: DeleteRobotApplicationBody, headersHandler?: () => {[header: string]: string}): Promise<DeleteRobotApplicationResponse> {
			return this.http.post('/deleteRobotApplication', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Deletes a simulation application.
		 * Post /deleteSimulationApplication
		 * @return {DeleteSimulationApplicationResponse} Success
		 */
		DeleteSimulationApplication(requestBody: DeleteSimulationApplicationBody, headersHandler?: () => {[header: string]: string}): Promise<DeleteSimulationApplicationResponse> {
			return this.http.post('/deleteSimulationApplication', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Deregisters a robot.
		 * Post /deregisterRobot
		 * @return {DeregisterRobotResponse} Success
		 */
		DeregisterRobot(requestBody: DeregisterRobotBody, headersHandler?: () => {[header: string]: string}): Promise<DeregisterRobotResponse> {
			return this.http.post('/deregisterRobot', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Describes a deployment job.
		 * Post /describeDeploymentJob
		 * @return {DescribeDeploymentJobResponse} Success
		 */
		DescribeDeploymentJob(requestBody: DescribeDeploymentJobBody, headersHandler?: () => {[header: string]: string}): Promise<DescribeDeploymentJobResponse> {
			return this.http.post('/describeDeploymentJob', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Describes a fleet.
		 * Post /describeFleet
		 * @return {DescribeFleetResponse} Success
		 */
		DescribeFleet(requestBody: DescribeFleetBody, headersHandler?: () => {[header: string]: string}): Promise<DescribeFleetResponse> {
			return this.http.post('/describeFleet', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Describes a robot.
		 * Post /describeRobot
		 * @return {DescribeRobotResponse} Success
		 */
		DescribeRobot(requestBody: DescribeRobotBody, headersHandler?: () => {[header: string]: string}): Promise<DescribeRobotResponse> {
			return this.http.post('/describeRobot', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Describes a robot application.
		 * Post /describeRobotApplication
		 * @return {DescribeRobotApplicationResponse} Success
		 */
		DescribeRobotApplication(requestBody: DescribeRobotApplicationBody, headersHandler?: () => {[header: string]: string}): Promise<DescribeRobotApplicationResponse> {
			return this.http.post('/describeRobotApplication', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Describes a simulation application.
		 * Post /describeSimulationApplication
		 * @return {DescribeSimulationApplicationResponse} Success
		 */
		DescribeSimulationApplication(requestBody: DescribeSimulationApplicationBody, headersHandler?: () => {[header: string]: string}): Promise<DescribeSimulationApplicationResponse> {
			return this.http.post('/describeSimulationApplication', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Describes a simulation job.
		 * Post /describeSimulationJob
		 * @return {DescribeSimulationJobResponse} Success
		 */
		DescribeSimulationJob(requestBody: DescribeSimulationJobBody, headersHandler?: () => {[header: string]: string}): Promise<DescribeSimulationJobResponse> {
			return this.http.post('/describeSimulationJob', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Describes a simulation job batch.
		 * Post /describeSimulationJobBatch
		 * @return {DescribeSimulationJobBatchResponse} Success
		 */
		DescribeSimulationJobBatch(requestBody: DescribeSimulationJobBatchBody, headersHandler?: () => {[header: string]: string}): Promise<DescribeSimulationJobBatchResponse> {
			return this.http.post('/describeSimulationJobBatch', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Returns a list of deployment jobs for a fleet. You can optionally provide filters to retrieve specific deployment jobs.
		 * Post /listDeploymentJobs
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListDeploymentJobsResponse} Success
		 */
		ListDeploymentJobs(maxResults: string, nextToken: string, requestBody: ListDeploymentJobsBody, headersHandler?: () => {[header: string]: string}): Promise<ListDeploymentJobsResponse> {
			return this.http.post('/listDeploymentJobs?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Returns a list of fleets. You can optionally provide filters to retrieve specific fleets.
		 * Post /listFleets
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListFleetsResponse} Success
		 */
		ListFleets(maxResults: string, nextToken: string, requestBody: ListFleetsBody, headersHandler?: () => {[header: string]: string}): Promise<ListFleetsResponse> {
			return this.http.post('/listFleets?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Returns a list of robot application. You can optionally provide filters to retrieve specific robot applications.
		 * Post /listRobotApplications
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListRobotApplicationsResponse} Success
		 */
		ListRobotApplications(maxResults: string, nextToken: string, requestBody: ListRobotApplicationsBody, headersHandler?: () => {[header: string]: string}): Promise<ListRobotApplicationsResponse> {
			return this.http.post('/listRobotApplications?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Returns a list of robots. You can optionally provide filters to retrieve specific robots.
		 * Post /listRobots
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListRobotsResponse} Success
		 */
		ListRobots(maxResults: string, nextToken: string, requestBody: ListRobotsBody, headersHandler?: () => {[header: string]: string}): Promise<ListRobotsResponse> {
			return this.http.post('/listRobots?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Returns a list of simulation applications. You can optionally provide filters to retrieve specific simulation applications.
		 * Post /listSimulationApplications
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListSimulationApplicationsResponse} Success
		 */
		ListSimulationApplications(maxResults: string, nextToken: string, requestBody: ListSimulationApplicationsBody, headersHandler?: () => {[header: string]: string}): Promise<ListSimulationApplicationsResponse> {
			return this.http.post('/listSimulationApplications?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Returns a list simulation job batches. You can optionally provide filters to retrieve specific simulation batch jobs.
		 * Post /listSimulationJobBatches
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListSimulationJobBatchesResponse} Success
		 */
		ListSimulationJobBatches(maxResults: string, nextToken: string, requestBody: ListSimulationJobBatchesBody, headersHandler?: () => {[header: string]: string}): Promise<ListSimulationJobBatchesResponse> {
			return this.http.post('/listSimulationJobBatches?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Returns a list of simulation jobs. You can optionally provide filters to retrieve specific simulation jobs.
		 * Post /listSimulationJobs
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListSimulationJobsResponse} Success
		 */
		ListSimulationJobs(maxResults: string, nextToken: string, requestBody: ListSimulationJobsBody, headersHandler?: () => {[header: string]: string}): Promise<ListSimulationJobsResponse> {
			return this.http.post('/listSimulationJobs?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Lists all tags on a AWS RoboMaker resource.
		 * Get /tags/{resourceArn}
		 * @param {string} resourceArn The AWS RoboMaker Amazon Resource Name (ARN) with tags to be listed.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string, headersHandler?: () => {[header: string]: string}): Promise<ListTagsForResourceResponse> {
			return this.http.get('/tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * <p>Adds or edits tags for a AWS RoboMaker resource.</p> <p>Each tag consists of a tag key and a tag value. Tag keys and tag values are both required, but tag values can be empty strings. </p> <p>For information about the rules that apply to tag keys and tag values, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/allocation-tag-restrictions.html">User-Defined Tag Restrictions</a> in the <i>AWS Billing and Cost Management User Guide</i>. </p>
		 * Post /tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the AWS RoboMaker resource you are tagging.
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourceBody, headersHandler?: () => {[header: string]: string}): Promise<TagResourceResponse> {
			return this.http.post('/tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Registers a robot with a fleet.
		 * Post /registerRobot
		 * @return {RegisterRobotResponse} Success
		 */
		RegisterRobot(requestBody: RegisterRobotBody, headersHandler?: () => {[header: string]: string}): Promise<RegisterRobotResponse> {
			return this.http.post('/registerRobot', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Restarts a running simulation job.
		 * Post /restartSimulationJob
		 * @return {RestartSimulationJobResponse} Success
		 */
		RestartSimulationJob(requestBody: RestartSimulationJobBody, headersHandler?: () => {[header: string]: string}): Promise<RestartSimulationJobResponse> {
			return this.http.post('/restartSimulationJob', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Starts a new simulation job batch. The batch is defined using one or more <code>SimulationJobRequest</code> objects.
		 * Post /startSimulationJobBatch
		 * @return {StartSimulationJobBatchResponse} Success
		 */
		StartSimulationJobBatch(requestBody: StartSimulationJobBatchBody, headersHandler?: () => {[header: string]: string}): Promise<StartSimulationJobBatchResponse> {
			return this.http.post('/startSimulationJobBatch', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Syncrhonizes robots in a fleet to the latest deployment. This is helpful if robots were added after a deployment.
		 * Post /syncDeploymentJob
		 * @return {SyncDeploymentJobResponse} Success
		 */
		SyncDeploymentJob(requestBody: SyncDeploymentJobBody, headersHandler?: () => {[header: string]: string}): Promise<SyncDeploymentJobResponse> {
			return this.http.post('/syncDeploymentJob', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * <p>Removes the specified tags from the specified AWS RoboMaker resource.</p> <p>To remove a tag, specify the tag key. To change the tag value of an existing tag key, use <a href="https://docs.aws.amazon.com/robomaker/latest/dg/API_TagResource.html"> <code>TagResource</code> </a>. </p>
		 * Delete /tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the AWS RoboMaker resource you are removing tags.
		 * @param {Array<TagKey>} tagKeys A map that contains tag keys and tag values that will be unattached from the resource.
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<TagKey>, headersHandler?: () => {[header: string]: string}): Promise<UntagResourceResponse> {
			return this.http.delete('/tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${z}`).join('&'), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Updates a robot application.
		 * Post /updateRobotApplication
		 * @return {UpdateRobotApplicationResponse} Success
		 */
		UpdateRobotApplication(requestBody: UpdateRobotApplicationBody, headersHandler?: () => {[header: string]: string}): Promise<UpdateRobotApplicationResponse> {
			return this.http.post('/updateRobotApplication', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Updates a simulation application.
		 * Post /updateSimulationApplication
		 * @return {UpdateSimulationApplicationResponse} Success
		 */
		UpdateSimulationApplication(requestBody: UpdateSimulationApplicationBody, headersHandler?: () => {[header: string]: string}): Promise<UpdateSimulationApplicationResponse> {
			return this.http.post('/updateSimulationApplication', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}
	}

	export interface BatchDescribeSimulationJobBody {

		/**
		 * A list of Amazon Resource Names (ARNs) of simulation jobs to describe.
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		jobs: Array<Arn>;
	}

	export interface CancelDeploymentJobBody {

		/**
		 * The deployment job ARN to cancel.
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		job: string;
	}

	export interface CancelSimulationJobBody {

		/**
		 * The simulation job ARN to cancel.
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		job: string;
	}

	export interface CancelSimulationJobBatchBody {

		/**
		 * The id of the batch to cancel.
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		batch: string;
	}

	export interface CreateDeploymentJobBody {

		/**Information about a deployment configuration. */
		deploymentConfig?: string;

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-=]*
		 */
		clientRequestToken: string;

		/**
		 * The Amazon Resource Name (ARN) of the fleet to deploy.
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		fleet: string;

		/**
		 * The deployment application configuration.
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		deploymentApplicationConfigs: Array<DeploymentApplicationConfig>;

		/**A map that contains tag keys and tag values that are attached to the deployment job. */
		tags?: string;
	}

	export interface CreateFleetBody {

		/**
		 * The name of the fleet.
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-]*
		 */
		name: string;

		/**A map that contains tag keys and tag values that are attached to the fleet. */
		tags?: string;
	}

	export interface CreateRobotBody {

		/**
		 * The name for the robot.
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-]*
		 */
		name: string;

		/**The target architecture of the robot. */
		architecture: CreateRobotBodyArchitecture;

		/**
		 * The Greengrass group id.
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: .*
		 */
		greengrassGroupId: string;

		/**A map that contains tag keys and tag values that are attached to the robot. */
		tags?: string;
	}

	export enum CreateRobotBodyArchitecture { X86_64 = 0, ARM64 = 1, ARMHF = 2 }

	export interface CreateRobotApplicationBody {

		/**
		 * The name of the robot application.
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-]*
		 */
		name: string;

		/**The sources of the robot application. */
		sources: Array<SourceConfig>;

		/**Information about a robot software suite (ROS distribution). */
		robotSoftwareSuite: string;

		/**A map that contains tag keys and tag values that are attached to the robot application. */
		tags?: string;
	}

	export interface CreateRobotApplicationVersionBody {

		/**
		 * The application information for the robot application.
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		application: string;

		/**
		 * The current revision id for the robot application. If you provide a value and it matches the latest revision ID, a new version will be created.
		 * Max length: 40
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]*
		 */
		currentRevisionId?: string;
	}

	export interface CreateSimulationApplicationBody {

		/**
		 * The name of the simulation application.
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-]*
		 */
		name: string;

		/**The sources of the simulation application. */
		sources: Array<SourceConfig>;

		/**Information about a simulation software suite. */
		simulationSoftwareSuite: string;

		/**Information about a robot software suite (ROS distribution). */
		robotSoftwareSuite: string;

		/**Information about a rendering engine. */
		renderingEngine?: string;

		/**A map that contains tag keys and tag values that are attached to the simulation application. */
		tags?: string;
	}

	export interface CreateSimulationApplicationVersionBody {

		/**
		 * The application information for the simulation application.
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		application: string;

		/**
		 * The current revision id for the simulation application. If you provide a value and it matches the latest revision ID, a new version will be created.
		 * Max length: 40
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]*
		 */
		currentRevisionId?: string;
	}

	export interface CreateSimulationJobBody {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-=]*
		 */
		clientRequestToken?: string;

		/**The output location. */
		outputLocation?: string;

		/**The logging configuration. */
		loggingConfig?: string;

		/**The maximum simulation job duration in seconds (up to 14 days or 1,209,600 seconds. When <code>maxJobDurationInSeconds</code> is reached, the simulation job will status will transition to <code>Completed</code>. */
		maxJobDurationInSeconds: number;

		/**
		 * The IAM role name that allows the simulation instance to call the AWS APIs that are specified in its associated policies on your behalf. This is how credentials are passed in to your simulation job.
		 * Max length: 255
		 * Min length: 1
		 * Pattern: arn:aws:iam::\w+:role/.*
		 */
		iamRole: string;

		/**<p>The failure behavior the simulation job.</p> <dl> <dt>Continue</dt> <dd> <p>Restart the simulation job in the same host instance.</p> </dd> <dt>Fail</dt> <dd> <p>Stop the simulation job and terminate the instance.</p> </dd> </dl> */
		failureBehavior?: CreateSimulationJobBodyFailureBehavior;

		/**
		 * The robot application to use in the simulation job.
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		robotApplications?: Array<RobotApplicationConfig>;

		/**
		 * The simulation application to use in the simulation job.
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		simulationApplications?: Array<SimulationApplicationConfig>;

		/**
		 * <p>Specify data sources to mount read-only files from S3 into your simulation. These files are available under <code>/opt/robomaker/datasources/data_source_name</code>. </p> <note> <p>There is a limit of 100 files and a combined size of 25GB for all <code>DataSourceConfig</code> objects. </p> </note>
		 * Minimum items: 1
		 * Maximum items: 5
		 */
		dataSources?: Array<DataSourceConfig>;

		/**A map that contains tag keys and tag values that are attached to the simulation job. */
		tags?: string;

		/**If your simulation job accesses resources in a VPC, you provide this parameter identifying the list of security group IDs and subnet IDs. These must belong to the same VPC. You must provide at least one security group and two subnet IDs. */
		vpcConfig?: string;

		/**Compute information for the simulation job. */
		compute?: string;
	}

	export enum CreateSimulationJobBodyFailureBehavior { Fail = 0, Continue = 1 }

	export interface DeleteFleetBody {

		/**
		 * The Amazon Resource Name (ARN) of the fleet.
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		fleet: string;
	}

	export interface DeleteRobotBody {

		/**
		 * The Amazon Resource Name (ARN) of the robot.
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		robot: string;
	}

	export interface DeleteRobotApplicationBody {

		/**
		 * The Amazon Resource Name (ARN) of the the robot application.
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		application: string;

		/**
		 * The version of the robot application to delete.
		 * Max length: 255
		 * Min length: 1
		 * Pattern: (\$LATEST)|[0-9]*
		 */
		applicationVersion?: string;
	}

	export interface DeleteSimulationApplicationBody {

		/**
		 * The application information for the simulation application to delete.
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		application: string;

		/**
		 * The version of the simulation application to delete.
		 * Max length: 255
		 * Min length: 1
		 * Pattern: (\$LATEST)|[0-9]*
		 */
		applicationVersion?: string;
	}

	export interface DeregisterRobotBody {

		/**
		 * The Amazon Resource Name (ARN) of the fleet.
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		fleet: string;

		/**
		 * The Amazon Resource Name (ARN) of the robot.
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		robot: string;
	}

	export interface DescribeDeploymentJobBody {

		/**
		 * The Amazon Resource Name (ARN) of the deployment job.
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		job: string;
	}

	export interface DescribeFleetBody {

		/**
		 * The Amazon Resource Name (ARN) of the fleet.
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		fleet: string;
	}

	export interface DescribeRobotBody {

		/**
		 * The Amazon Resource Name (ARN) of the robot to be described.
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		robot: string;
	}

	export interface DescribeRobotApplicationBody {

		/**
		 * The Amazon Resource Name (ARN) of the robot application.
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		application: string;

		/**
		 * The version of the robot application to describe.
		 * Max length: 255
		 * Min length: 1
		 * Pattern: (\$LATEST)|[0-9]*
		 */
		applicationVersion?: string;
	}

	export interface DescribeSimulationApplicationBody {

		/**
		 * The application information for the simulation application.
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		application: string;

		/**
		 * The version of the simulation application to describe.
		 * Max length: 255
		 * Min length: 1
		 * Pattern: (\$LATEST)|[0-9]*
		 */
		applicationVersion?: string;
	}

	export interface DescribeSimulationJobBody {

		/**
		 * The Amazon Resource Name (ARN) of the simulation job to be described.
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		job: string;
	}

	export interface DescribeSimulationJobBatchBody {

		/**
		 * The id of the batch to describe.
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		batch: string;
	}

	export interface ListDeploymentJobsBody {

		/**
		 * <p>Optional filters to limit results.</p> <p>The filter names <code>status</code> and <code>fleetName</code> are supported. When filtering, you must use the complete value of the filtered item. You can use up to three filters, but they must be for the same named item. For example, if you are looking for items with the status <code>InProgress</code> or the status <code>Pending</code>.</p>
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		filters?: Array<Filter>;

		/**
		 * The <code>nextToken</code> value returned from a previous paginated <code>ListDeploymentJobs</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-\/+=]*
		 */
		nextToken?: string;

		/**When this parameter is used, <code>ListDeploymentJobs</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListDeploymentJobs</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 200. If this parameter is not used, then <code>ListDeploymentJobs</code> returns up to 200 results and a <code>nextToken</code> value if applicable. */
		maxResults?: number;
	}

	export interface ListFleetsBody {

		/**
		 * <p>The <code>nextToken</code> value returned from a previous paginated <code>ListFleets</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. </p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-\/+=]*
		 */
		nextToken?: string;

		/**When this parameter is used, <code>ListFleets</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListFleets</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 200. If this parameter is not used, then <code>ListFleets</code> returns up to 200 results and a <code>nextToken</code> value if applicable. */
		maxResults?: number;

		/**
		 * <p>Optional filters to limit results.</p> <p>The filter name <code>name</code> is supported. When filtering, you must use the complete value of the filtered item. You can use up to three filters.</p>
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		filters?: Array<Filter>;
	}

	export interface ListRobotApplicationsBody {

		/**
		 * The version qualifier of the robot application.
		 * Max length: 255
		 * Min length: 1
		 * Pattern: ALL
		 */
		versionQualifier?: string;

		/**
		 * The <code>nextToken</code> value returned from a previous paginated <code>ListRobotApplications</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-\/+=]*
		 */
		nextToken?: string;

		/**When this parameter is used, <code>ListRobotApplications</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListRobotApplications</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>ListRobotApplications</code> returns up to 100 results and a <code>nextToken</code> value if applicable. */
		maxResults?: number;

		/**
		 * <p>Optional filters to limit results.</p> <p>The filter name <code>name</code> is supported. When filtering, you must use the complete value of the filtered item. You can use up to three filters.</p>
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		filters?: Array<Filter>;
	}

	export interface ListRobotsBody {

		/**
		 * The <code>nextToken</code> value returned from a previous paginated <code>ListRobots</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-\/+=]*
		 */
		nextToken?: string;

		/**When this parameter is used, <code>ListRobots</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListRobots</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 200. If this parameter is not used, then <code>ListRobots</code> returns up to 200 results and a <code>nextToken</code> value if applicable. */
		maxResults?: number;

		/**
		 * <p>Optional filters to limit results.</p> <p>The filter names <code>status</code> and <code>fleetName</code> are supported. When filtering, you must use the complete value of the filtered item. You can use up to three filters, but they must be for the same named item. For example, if you are looking for items with the status <code>Registered</code> or the status <code>Available</code>.</p>
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		filters?: Array<Filter>;
	}

	export interface ListSimulationApplicationsBody {

		/**
		 * The version qualifier of the simulation application.
		 * Max length: 255
		 * Min length: 1
		 * Pattern: ALL
		 */
		versionQualifier?: string;

		/**
		 * The <code>nextToken</code> value returned from a previous paginated <code>ListSimulationApplications</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-\/+=]*
		 */
		nextToken?: string;

		/**When this parameter is used, <code>ListSimulationApplications</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListSimulationApplications</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>ListSimulationApplications</code> returns up to 100 results and a <code>nextToken</code> value if applicable. */
		maxResults?: number;

		/**
		 * <p>Optional list of filters to limit results.</p> <p>The filter name <code>name</code> is supported. When filtering, you must use the complete value of the filtered item. You can use up to three filters.</p>
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		filters?: Array<Filter>;
	}

	export interface ListSimulationJobBatchesBody {

		/**
		 * The <code>nextToken</code> value returned from a previous paginated <code>ListSimulationJobBatches</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-\/+=]*
		 */
		nextToken?: string;

		/**When this parameter is used, <code>ListSimulationJobBatches</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListSimulationJobBatches</code> request with the returned <code>nextToken</code> value. */
		maxResults?: number;

		/**
		 * Optional filters to limit results.
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		filters?: Array<Filter>;
	}

	export interface ListSimulationJobsBody {

		/**
		 * <p>The <code>nextToken</code> value returned from a previous paginated <code>ListSimulationJobs</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. </p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-\/+=]*
		 */
		nextToken?: string;

		/**When this parameter is used, <code>ListSimulationJobs</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListSimulationJobs</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 1000. If this parameter is not used, then <code>ListSimulationJobs</code> returns up to 1000 results and a <code>nextToken</code> value if applicable. */
		maxResults?: number;

		/**
		 * <p>Optional filters to limit results.</p> <p>The filter names <code>status</code> and <code>simulationApplicationName</code> and <code>robotApplicationName</code> are supported. When filtering, you must use the complete value of the filtered item. You can use up to three filters, but they must be for the same named item. For example, if you are looking for items with the status <code>Preparing</code> or the status <code>Running</code>.</p>
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		filters?: Array<Filter>;
	}

	export interface TagResourceBody {

		/**A map that contains tag keys and tag values that are attached to the resource. */
		tags: string;
	}

	export interface RegisterRobotBody {

		/**
		 * The Amazon Resource Name (ARN) of the fleet.
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		fleet: string;

		/**
		 * The Amazon Resource Name (ARN) of the robot.
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		robot: string;
	}

	export interface RestartSimulationJobBody {

		/**
		 * The Amazon Resource Name (ARN) of the simulation job.
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		job: string;
	}

	export interface StartSimulationJobBatchBody {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-=]*
		 */
		clientRequestToken?: string;

		/**Information about the batch policy. */
		batchPolicy?: string;

		/**
		 * A list of simulation job requests to create in the batch.
		 * Minimum items: 1
		 */
		createSimulationJobRequests: Array<SimulationJobRequest>;

		/**A map that contains tag keys and tag values that are attached to the deployment job batch. */
		tags?: string;
	}

	export interface SyncDeploymentJobBody {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-=]*
		 */
		clientRequestToken: string;

		/**
		 * The target fleet for the synchronization.
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		fleet: string;
	}

	export interface UpdateRobotApplicationBody {

		/**
		 * The application information for the robot application.
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		application: string;

		/**The sources of the robot application. */
		sources: Array<SourceConfig>;

		/**Information about a robot software suite (ROS distribution). */
		robotSoftwareSuite: string;

		/**
		 * The revision id for the robot application.
		 * Max length: 40
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]*
		 */
		currentRevisionId?: string;
	}

	export interface UpdateSimulationApplicationBody {

		/**
		 * The application information for the simulation application.
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		application: string;

		/**The sources of the simulation application. */
		sources: Array<SourceConfig>;

		/**Information about a simulation software suite. */
		simulationSoftwareSuite: string;

		/**Information about a robot software suite (ROS distribution). */
		robotSoftwareSuite: string;

		/**Information about a rendering engine. */
		renderingEngine?: string;

		/**
		 * The revision id for the robot application.
		 * Max length: 40
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]*
		 */
		currentRevisionId?: string;
	}

}

