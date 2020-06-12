export namespace My_Demo_Client {

	/**Represents the input of, and adds tags to, an on-premises instance operation. */
	export interface AddTagsToOnPremisesInstancesInput {
		tags: Array<Tag>;
		instanceNames: Array<InstanceName>;
	}


	/**Represents the output of a <code>BatchGetApplicationRevisions</code> operation. */
	export interface BatchGetApplicationRevisionsOutput {
		applicationName?: string;
		errorMessage?: string;
		revisions?: Array<RevisionInfo>;
	}


	/**Represents the input of a <code>BatchGetApplicationRevisions</code> operation. */
	export interface BatchGetApplicationRevisionsInput {
		applicationName: string;
		revisions: Array<RevisionLocation>;
	}


	/**Represents the output of a <code>BatchGetApplications</code> operation. */
	export interface BatchGetApplicationsOutput {
		applicationsInfo?: Array<ApplicationInfo>;
	}


	/**Represents the input of a <code>BatchGetApplications</code> operation. */
	export interface BatchGetApplicationsInput {
		applicationNames: Array<ApplicationName>;
	}


	/**Represents the output of a <code>BatchGetDeploymentGroups</code> operation. */
	export interface BatchGetDeploymentGroupsOutput {
		deploymentGroupsInfo?: Array<DeploymentGroupInfo>;
		errorMessage?: string;
	}


	/**Represents the input of a <code>BatchGetDeploymentGroups</code> operation. */
	export interface BatchGetDeploymentGroupsInput {
		applicationName: string;
		deploymentGroupNames: Array<DeploymentGroupName>;
	}


	/**Represents the output of a <code>BatchGetDeploymentInstances</code> operation. */
	export interface BatchGetDeploymentInstancesOutput {
		instancesSummary?: Array<InstanceSummary>;
		errorMessage?: string;
	}


	/** Represents the input of a <code>BatchGetDeploymentInstances</code> operation.  */
	export interface BatchGetDeploymentInstancesInput {
		deploymentId: string;
		instanceIds: Array<InstanceId>;
	}

	export interface BatchGetDeploymentTargetsOutput {
		deploymentTargets?: Array<DeploymentTarget>;
	}

	export interface BatchGetDeploymentTargetsInput {
		deploymentId?: string;
		targetIds?: Array<TargetId>;
	}


	/** Represents the output of a <code>BatchGetDeployments</code> operation.  */
	export interface BatchGetDeploymentsOutput {
		deploymentsInfo?: Array<DeploymentInfo>;
	}


	/** Represents the input of a <code>BatchGetDeployments</code> operation.  */
	export interface BatchGetDeploymentsInput {
		deploymentIds: Array<DeploymentId>;
	}


	/**Represents the output of a <code>BatchGetOnPremisesInstances</code> operation. */
	export interface BatchGetOnPremisesInstancesOutput {
		instanceInfos?: Array<InstanceInfo>;
	}


	/**Represents the input of a <code>BatchGetOnPremisesInstances</code> operation. */
	export interface BatchGetOnPremisesInstancesInput {
		instanceNames: Array<InstanceName>;
	}

	export interface ContinueDeploymentInput {
		deploymentId?: string;
		deploymentWaitType?: ContinueDeploymentInputDeploymentWaitType;
	}

	export enum ContinueDeploymentInputDeploymentWaitType { READY_WAIT = 0, TERMINATION_WAIT = 1 }


	/**Represents the output of a <code>CreateApplication</code> operation. */
	export interface CreateApplicationOutput {
		applicationId?: string;
	}


	/**Represents the input of a <code>CreateApplication</code> operation. */
	export interface CreateApplicationInput {
		applicationName: string;
		computePlatform?: CreateApplicationInputComputePlatform;
		tags?: Array<Tag>;
	}

	export enum CreateApplicationInputComputePlatform { Server = 0, Lambda = 1, ECS = 2 }


	/** Represents the output of a <code>CreateDeployment</code> operation.  */
	export interface CreateDeploymentOutput {
		deploymentId?: string;
	}


	/**Represents the input of a <code>CreateDeployment</code> operation. */
	export interface CreateDeploymentInput {
		applicationName: string;
		deploymentGroupName?: string;

		/**Information about the location of an application revision. */
		revision?: RevisionLocation;
		deploymentConfigName?: string;
		description?: string;
		ignoreApplicationStopFailures?: boolean;

		/**Information about the instances to be used in the replacement environment in a blue/green deployment. */
		targetInstances?: TargetInstances;

		/**Information about a configuration for automatically rolling back to a previous version of an application revision when a deployment is not completed successfully. */
		autoRollbackConfiguration?: AutoRollbackConfiguration;
		updateOutdatedInstancesOnly?: boolean;
		fileExistsBehavior?: CreateDeploymentInputFileExistsBehavior;
	}

	export enum CreateDeploymentInputFileExistsBehavior { DISALLOW = 0, OVERWRITE = 1, RETAIN = 2 }


	/**Represents the output of a <code>CreateDeploymentConfig</code> operation. */
	export interface CreateDeploymentConfigOutput {
		deploymentConfigId?: string;
	}


	/**Represents the input of a <code>CreateDeploymentConfig</code> operation. */
	export interface CreateDeploymentConfigInput {
		deploymentConfigName: string;

		/**Information about minimum healthy instance. */
		minimumHealthyHosts?: MinimumHealthyHosts;

		/**The configuration that specifies how traffic is shifted from one version of a Lambda function to another version during an AWS Lambda deployment, or from one Amazon ECS task set to another during an Amazon ECS deployment. */
		trafficRoutingConfig?: TrafficRoutingConfig;
		computePlatform?: CreateDeploymentConfigInputComputePlatform;
	}

	export enum CreateDeploymentConfigInputComputePlatform { Server = 0, Lambda = 1, ECS = 2 }


	/**Represents the output of a <code>CreateDeploymentGroup</code> operation. */
	export interface CreateDeploymentGroupOutput {
		deploymentGroupId?: string;
	}


	/**Represents the input of a <code>CreateDeploymentGroup</code> operation. */
	export interface CreateDeploymentGroupInput {
		applicationName: string;
		deploymentGroupName: string;
		deploymentConfigName?: string;
		ec2TagFilters?: Array<EC2TagFilter>;
		onPremisesInstanceTagFilters?: Array<TagFilter>;
		autoScalingGroups?: Array<AutoScalingGroupName>;
		serviceRoleArn: string;
		triggerConfigurations?: Array<TriggerConfig>;

		/**Information about alarms associated with the deployment group. */
		alarmConfiguration?: AlarmConfiguration;

		/**Information about a configuration for automatically rolling back to a previous version of an application revision when a deployment is not completed successfully. */
		autoRollbackConfiguration?: AutoRollbackConfiguration;

		/**Information about the type of deployment, either in-place or blue/green, you want to run and whether to route deployment traffic behind a load balancer. */
		deploymentStyle?: DeploymentStyle;

		/**Information about blue/green deployment options for a deployment group. */
		blueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration;

		/**Information about the Elastic Load Balancing load balancer or target group used in a deployment. */
		loadBalancerInfo?: LoadBalancerInfo;

		/**Information about groups of EC2 instance tags. */
		ec2TagSet?: EC2TagSet;
		ecsServices?: Array<ECSService>;

		/**Information about groups of on-premises instance tags. */
		onPremisesTagSet?: OnPremisesTagSet;
		tags?: Array<Tag>;
	}


	/**Represents the input of a <code>DeleteApplication</code> operation. */
	export interface DeleteApplicationInput {
		applicationName: string;
	}


	/**Represents the input of a <code>DeleteDeploymentConfig</code> operation. */
	export interface DeleteDeploymentConfigInput {
		deploymentConfigName: string;
	}


	/**Represents the output of a <code>DeleteDeploymentGroup</code> operation. */
	export interface DeleteDeploymentGroupOutput {
		hooksNotCleanedUp?: Array<AutoScalingGroup>;
	}


	/**Represents the input of a <code>DeleteDeploymentGroup</code> operation. */
	export interface DeleteDeploymentGroupInput {
		applicationName: string;
		deploymentGroupName: string;
	}


	/**Represents the output of a <code>DeleteGitHubAccountToken</code> operation. */
	export interface DeleteGitHubAccountTokenOutput {
		tokenName?: string;
	}


	/**Represents the input of a <code>DeleteGitHubAccount</code> operation. */
	export interface DeleteGitHubAccountTokenInput {
		tokenName?: string;
	}

	export interface DeleteResourcesByExternalIdInput {
		externalId?: string;
	}


	/**Represents the input of a <code>DeregisterOnPremisesInstance</code> operation. */
	export interface DeregisterOnPremisesInstanceInput {
		instanceName: string;
	}


	/**Represents the output of a <code>GetApplication</code> operation. */
	export interface GetApplicationOutput {

		/**Information about an application. */
		application?: ApplicationInfo;
	}


	/**Represents the input of a <code>GetApplication</code> operation. */
	export interface GetApplicationInput {
		applicationName: string;
	}


	/**Represents the output of a <code>GetApplicationRevision</code> operation. */
	export interface GetApplicationRevisionOutput {
		applicationName?: string;

		/**Information about the location of an application revision. */
		revision?: RevisionLocation;

		/**Information about an application revision. */
		revisionInfo?: GenericRevisionInfo;
	}


	/**Represents the input of a <code>GetApplicationRevision</code> operation. */
	export interface GetApplicationRevisionInput {
		applicationName: string;

		/**Information about the location of an application revision. */
		revision: RevisionLocation;
	}


	/**Represents the output of a <code>GetDeployment</code> operation. */
	export interface GetDeploymentOutput {

		/**Information about a deployment. */
		deploymentInfo?: DeploymentInfo;
	}


	/**Represents the input of a <code>GetDeployment</code> operation. */
	export interface GetDeploymentInput {
		deploymentId: string;
	}


	/**Represents the output of a <code>GetDeploymentConfig</code> operation. */
	export interface GetDeploymentConfigOutput {

		/**Information about a deployment configuration. */
		deploymentConfigInfo?: DeploymentConfigInfo;
	}


	/**Represents the input of a <code>GetDeploymentConfig</code> operation. */
	export interface GetDeploymentConfigInput {
		deploymentConfigName: string;
	}


	/**Represents the output of a <code>GetDeploymentGroup</code> operation. */
	export interface GetDeploymentGroupOutput {

		/**Information about a deployment group. */
		deploymentGroupInfo?: DeploymentGroupInfo;
	}


	/**Represents the input of a <code>GetDeploymentGroup</code> operation. */
	export interface GetDeploymentGroupInput {
		applicationName: string;
		deploymentGroupName: string;
	}


	/** Represents the output of a <code>GetDeploymentInstance</code> operation.  */
	export interface GetDeploymentInstanceOutput {

		/**Information about an instance in a deployment.InstanceSummary is deprecated, use DeploymentTarget instead. */
		instanceSummary?: InstanceSummary;
	}


	/** Represents the input of a <code>GetDeploymentInstance</code> operation.  */
	export interface GetDeploymentInstanceInput {
		deploymentId: string;
		instanceId: string;
	}

	export interface GetDeploymentTargetOutput {

		/**Information about the deployment target. */
		deploymentTarget?: DeploymentTarget;
	}

	export interface GetDeploymentTargetInput {
		deploymentId?: string;
		targetId?: string;
	}


	/** Represents the output of a <code>GetOnPremisesInstance</code> operation.  */
	export interface GetOnPremisesInstanceOutput {

		/**Information about an on-premises instance. */
		instanceInfo?: InstanceInfo;
	}


	/** Represents the input of a <code>GetOnPremisesInstance</code> operation.  */
	export interface GetOnPremisesInstanceInput {
		instanceName: string;
	}


	/**Represents the output of a <code>ListApplicationRevisions</code> operation. */
	export interface ListApplicationRevisionsOutput {
		revisions?: Array<RevisionLocation>;
		nextToken?: string;
	}


	/** Represents the input of a <code>ListApplicationRevisions</code> operation.  */
	export interface ListApplicationRevisionsInput {
		applicationName: string;
		sortBy?: ListApplicationRevisionsInputSortBy;
		sortOrder?: ListApplicationRevisionsInputSortOrder;
		s3Bucket?: string;
		s3KeyPrefix?: string;
		deployed?: ListApplicationRevisionsInputDeployed;
		nextToken?: string;
	}

	export enum ListApplicationRevisionsInputSortBy { registerTime = 0, firstUsedTime = 1, lastUsedTime = 2 }

	export enum ListApplicationRevisionsInputSortOrder { ascending = 0, descending = 1 }

	export enum ListApplicationRevisionsInputDeployed { include = 0, exclude = 1, ignore = 2 }


	/**Represents the output of a ListApplications operation. */
	export interface ListApplicationsOutput {
		applications?: Array<ApplicationName>;
		nextToken?: string;
	}


	/**Represents the input of a <code>ListApplications</code> operation. */
	export interface ListApplicationsInput {
		nextToken?: string;
	}


	/**Represents the output of a <code>ListDeploymentConfigs</code> operation. */
	export interface ListDeploymentConfigsOutput {
		deploymentConfigsList?: Array<DeploymentConfigName>;
		nextToken?: string;
	}


	/**Represents the input of a <code>ListDeploymentConfigs</code> operation. */
	export interface ListDeploymentConfigsInput {
		nextToken?: string;
	}


	/**Represents the output of a <code>ListDeploymentGroups</code> operation. */
	export interface ListDeploymentGroupsOutput {
		applicationName?: string;
		deploymentGroups?: Array<DeploymentGroupName>;
		nextToken?: string;
	}


	/**Represents the input of a <code>ListDeploymentGroups</code> operation. */
	export interface ListDeploymentGroupsInput {
		applicationName: string;
		nextToken?: string;
	}


	/**Represents the output of a <code>ListDeploymentInstances</code> operation. */
	export interface ListDeploymentInstancesOutput {
		instancesList?: Array<InstanceId>;
		nextToken?: string;
	}


	/** Represents the input of a <code>ListDeploymentInstances</code> operation.  */
	export interface ListDeploymentInstancesInput {
		deploymentId: string;
		nextToken?: string;
		instanceStatusFilter?: Array<InstanceStatus>;
		instanceTypeFilter?: Array<InstanceType>;
	}

	export interface ListDeploymentTargetsOutput {
		targetIds?: Array<TargetId>;
		nextToken?: string;
	}

	export interface ListDeploymentTargetsInput {
		deploymentId?: string;
		nextToken?: string;
		targetFilters?: TargetFilters;
	}


	/**Represents the output of a <code>ListDeployments</code> operation. */
	export interface ListDeploymentsOutput {
		deployments?: Array<DeploymentId>;
		nextToken?: string;
	}


	/**Represents the input of a <code>ListDeployments</code> operation. */
	export interface ListDeploymentsInput {
		applicationName?: string;
		deploymentGroupName?: string;
		externalId?: string;
		includeOnlyStatuses?: Array<DeploymentStatus>;

		/**Information about a time range. */
		createTimeRange?: TimeRange;
		nextToken?: string;
	}


	/**Represents the output of a <code>ListGitHubAccountTokenNames</code> operation. */
	export interface ListGitHubAccountTokenNamesOutput {
		tokenNameList?: Array<GitHubAccountTokenName>;
		nextToken?: string;
	}


	/**Represents the input of a <code>ListGitHubAccountTokenNames</code> operation. */
	export interface ListGitHubAccountTokenNamesInput {
		nextToken?: string;
	}


	/**Represents the output of the list on-premises instances operation. */
	export interface ListOnPremisesInstancesOutput {
		instanceNames?: Array<InstanceName>;
		nextToken?: string;
	}


	/**Represents the input of a <code>ListOnPremisesInstances</code> operation. */
	export interface ListOnPremisesInstancesInput {
		registrationStatus?: ListOnPremisesInstancesInputRegistrationStatus;
		tagFilters?: Array<TagFilter>;
		nextToken?: string;
	}

	export enum ListOnPremisesInstancesInputRegistrationStatus { Registered = 0, Deregistered = 1 }

	export interface ListTagsForResourceOutput {
		Tags?: Array<Tag>;
		NextToken?: string;
	}

	export interface ListTagsForResourceInput {
		ResourceArn: string;
		NextToken?: string;
	}

	export interface PutLifecycleEventHookExecutionStatusOutput {
		lifecycleEventHookExecutionId?: string;
	}

	export interface PutLifecycleEventHookExecutionStatusInput {
		deploymentId?: string;
		lifecycleEventHookExecutionId?: string;
		status?: PutLifecycleEventHookExecutionStatusInputStatus;
	}

	export enum PutLifecycleEventHookExecutionStatusInputStatus { Pending = 0, InProgress = 1, Succeeded = 2, Failed = 3, Skipped = 4, Unknown = 5 }


	/**Represents the input of a RegisterApplicationRevision operation. */
	export interface RegisterApplicationRevisionInput {
		applicationName: string;
		description?: string;

		/**Information about the location of an application revision. */
		revision: RevisionLocation;
	}


	/**Represents the input of the register on-premises instance operation. */
	export interface RegisterOnPremisesInstanceInput {
		instanceName: string;
		iamSessionArn?: string;
		iamUserArn?: string;
	}


	/**Represents the input of a <code>RemoveTagsFromOnPremisesInstances</code> operation. */
	export interface RemoveTagsFromOnPremisesInstancesInput {
		tags: Array<Tag>;
		instanceNames: Array<InstanceName>;
	}

	export interface SkipWaitTimeForInstanceTerminationInput {
		deploymentId?: string;
	}


	/** Represents the output of a <code>StopDeployment</code> operation.  */
	export interface StopDeploymentOutput {
		status?: StopDeploymentOutputStatus;
		statusMessage?: string;
	}

	export enum StopDeploymentOutputStatus { Pending = 0, Succeeded = 1 }


	/** Represents the input of a <code>StopDeployment</code> operation.  */
	export interface StopDeploymentInput {
		deploymentId: string;
		autoRollbackEnabled?: boolean;
	}

	export interface TagResourceInput {
		ResourceArn: string;
		Tags: Array<Tag>;
	}

	export interface UntagResourceInput {
		ResourceArn: string;
		TagKeys: Array<Key>;
	}


	/**Represents the input of an <code>UpdateApplication</code> operation. */
	export interface UpdateApplicationInput {
		applicationName?: string;
		newApplicationName?: string;
	}


	/**Represents the output of an <code>UpdateDeploymentGroup</code> operation. */
	export interface UpdateDeploymentGroupOutput {
		hooksNotCleanedUp?: Array<AutoScalingGroup>;
	}


	/**Represents the input of an <code>UpdateDeploymentGroup</code> operation. */
	export interface UpdateDeploymentGroupInput {
		applicationName: string;
		currentDeploymentGroupName: string;
		newDeploymentGroupName?: string;
		deploymentConfigName?: string;
		ec2TagFilters?: Array<EC2TagFilter>;
		onPremisesInstanceTagFilters?: Array<TagFilter>;
		autoScalingGroups?: Array<AutoScalingGroupName>;
		serviceRoleArn?: string;
		triggerConfigurations?: Array<TriggerConfig>;

		/**Information about alarms associated with the deployment group. */
		alarmConfiguration?: AlarmConfiguration;

		/**Information about a configuration for automatically rolling back to a previous version of an application revision when a deployment is not completed successfully. */
		autoRollbackConfiguration?: AutoRollbackConfiguration;

		/**Information about the type of deployment, either in-place or blue/green, you want to run and whether to route deployment traffic behind a load balancer. */
		deploymentStyle?: DeploymentStyle;

		/**Information about blue/green deployment options for a deployment group. */
		blueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration;

		/**Information about the Elastic Load Balancing load balancer or target group used in a deployment. */
		loadBalancerInfo?: LoadBalancerInfo;

		/**Information about groups of EC2 instance tags. */
		ec2TagSet?: EC2TagSet;
		ecsServices?: Array<ECSService>;

		/**Information about groups of on-premises instance tags. */
		onPremisesTagSet?: OnPremisesTagSet;
	}


	/**Information about an alarm. */
	export interface Alarm {
		name?: string;
	}


	/**Information about alarms associated with the deployment group. */
	export interface AlarmConfiguration {
		enabled?: boolean;
		ignorePollAlarmFailure?: boolean;
		alarms?: Array<Alarm>;
	}


	/** A revision for an AWS Lambda or Amazon ECS deployment that is a YAML-formatted or JSON-formatted string. For AWS Lambda and Amazon ECS deployments, the revision is the same as the AppSpec file. This method replaces the deprecated <code>RawString</code> data type.  */
	export interface AppSpecContent {
		content?: string;
		sha256?: string;
	}

	export enum ComputePlatform { Server = 0, Lambda = 1, ECS = 2 }


	/**Information about an application. */
	export interface ApplicationInfo {
		applicationId?: string;
		applicationName?: string;
		createTime?: Date;
		linkedToGitHub?: boolean;
		gitHubAccountName?: string;
		computePlatform?: ApplicationInfoComputePlatform;
	}

	export enum ApplicationInfoComputePlatform { Server = 0, Lambda = 1, ECS = 2 }

	export enum ApplicationRevisionSortBy { registerTime = 0, firstUsedTime = 1, lastUsedTime = 2 }


	/**Information about a configuration for automatically rolling back to a previous version of an application revision when a deployment is not completed successfully. */
	export interface AutoRollbackConfiguration {
		enabled?: boolean;
		events?: Array<AutoRollbackEvent>;
	}

	export enum AutoRollbackEvent { DEPLOYMENT_FAILURE = 0, DEPLOYMENT_STOP_ON_ALARM = 1, DEPLOYMENT_STOP_ON_REQUEST = 2 }


	/**Information about an Auto Scaling group. */
	export interface AutoScalingGroup {
		name?: string;
		hook?: string;
	}


	/**Information about whether instances in the original environment are terminated when a blue/green deployment is successful. <code>BlueInstanceTerminationOption</code> does not apply to Lambda deployments.  */
	export interface BlueInstanceTerminationOption {
		action?: BlueInstanceTerminationOptionAction;
		terminationWaitTimeInMinutes?: number;
	}

	export enum BlueInstanceTerminationOptionAction { TERMINATE = 0, KEEP_ALIVE = 1 }


	/**Information about how traffic is rerouted to instances in a replacement environment in a blue/green deployment. */
	export interface DeploymentReadyOption {
		actionOnTimeout?: DeploymentReadyOptionActionOnTimeout;
		waitTimeInMinutes?: number;
	}

	export enum DeploymentReadyOptionActionOnTimeout { CONTINUE_DEPLOYMENT = 0, STOP_DEPLOYMENT = 1 }


	/**Information about the instances that belong to the replacement environment in a blue/green deployment. */
	export interface GreenFleetProvisioningOption {
		action?: GreenFleetProvisioningOptionAction;
	}

	export enum GreenFleetProvisioningOptionAction { DISCOVER_EXISTING = 0, COPY_AUTO_SCALING_GROUP = 1 }


	/**Information about blue/green deployment options for a deployment group. */
	export interface BlueGreenDeploymentConfiguration {

		/**Information about whether instances in the original environment are terminated when a blue/green deployment is successful. <code>BlueInstanceTerminationOption</code> does not apply to Lambda deployments. */
		terminateBlueInstancesOnDeploymentSuccess?: BlueInstanceTerminationOption;

		/**Information about how traffic is rerouted to instances in a replacement environment in a blue/green deployment. */
		deploymentReadyOption?: DeploymentReadyOption;

		/**Information about the instances that belong to the replacement environment in a blue/green deployment. */
		greenFleetProvisioningOption?: GreenFleetProvisioningOption;
	}

	export enum InstanceAction { TERMINATE = 0, KEEP_ALIVE = 1 }

	export enum BundleType { tar = 0, tgz = 1, zip = 2, YAML = 3, JSON = 4 }

	export enum TargetStatus { Pending = 0, InProgress = 1, Succeeded = 2, Failed = 3, Skipped = 4, Unknown = 5, Ready = 6 }


	/** Information about the target to be updated by an AWS CloudFormation blue/green deployment. This target type is used for all deployments initiated by a CloudFormation stack update. */
	export interface CloudFormationTarget {
		deploymentId?: string;
		targetId?: string;
		lastUpdatedAt?: Date;
		lifecycleEvents?: Array<LifecycleEvent>;
		status?: CloudFormationTargetStatus;
		resourceType?: string;
		targetVersionWeight?: number;
	}

	export enum CloudFormationTargetStatus { Pending = 0, InProgress = 1, Succeeded = 2, Failed = 3, Skipped = 4, Unknown = 5, Ready = 6 }

	export enum DeploymentWaitType { READY_WAIT = 0, TERMINATION_WAIT = 1 }


	/**Information about minimum healthy instance. */
	export interface MinimumHealthyHosts {
		value?: number;
		type?: MinimumHealthyHostsType;
	}

	export enum MinimumHealthyHostsType { HOST_COUNT = 0, FLEET_PERCENT = 1 }


	/**The configuration that specifies how traffic is shifted from one version of a Lambda function to another version during an AWS Lambda deployment, or from one Amazon ECS task set to another during an Amazon ECS deployment. */
	export interface TrafficRoutingConfig {
		type?: TrafficRoutingConfigType;

		/**A configuration that shifts traffic from one version of a Lambda function or ECS task set to another in two increments. The original and target Lambda function versions or ECS task sets are specified in the deployment's AppSpec file. */
		timeBasedCanary?: TimeBasedCanary;

		/**A configuration that shifts traffic from one version of a Lambda function or ECS task set to another in equal increments, with an equal number of minutes between each increment. The original and target Lambda function versions or ECS task sets are specified in the deployment's AppSpec file. */
		timeBasedLinear?: TimeBasedLinear;
	}

	export enum TrafficRoutingConfigType { TimeBasedCanary = 0, TimeBasedLinear = 1, AllAtOnce = 2 }


	/**Information about the type of deployment, either in-place or blue/green, you want to run and whether to route deployment traffic behind a load balancer. */
	export interface DeploymentStyle {
		deploymentType?: DeploymentStyleDeploymentType;
		deploymentOption?: DeploymentStyleDeploymentOption;
	}

	export enum DeploymentStyleDeploymentType { IN_PLACE = 0, BLUE_GREEN = 1 }

	export enum DeploymentStyleDeploymentOption { WITH_TRAFFIC_CONTROL = 0, WITHOUT_TRAFFIC_CONTROL = 1 }


	/**Information about the Elastic Load Balancing load balancer or target group used in a deployment. */
	export interface LoadBalancerInfo {
		elbInfoList?: Array<ELBInfo>;
		targetGroupInfoList?: Array<TargetGroupInfo>;
		targetGroupPairInfoList?: Array<TargetGroupPairInfo>;
	}


	/**Information about groups of EC2 instance tags. */
	export interface EC2TagSet {
		ec2TagSetList?: Array<EC2TagFilterList>;
	}


	/**Information about groups of on-premises instance tags. */
	export interface OnPremisesTagSet {
		onPremisesTagSetList?: Array<TagFilterList>;
	}


	/**Information about the location of an application revision. */
	export interface RevisionLocation {
		revisionType?: RevisionLocationRevisionType;

		/**Information about the location of application artifacts stored in Amazon S3. */
		s3Location?: S3Location;

		/**Information about the location of application artifacts stored in GitHub. */
		gitHubLocation?: GitHubLocation;

		/**A revision for an AWS Lambda deployment that is a YAML-formatted or JSON-formatted string. For AWS Lambda deployments, the revision is the same as the AppSpec file.RawString and String revision type are deprecated, use AppSpecContent type instead. */
		string?: RawString;

		/**A revision for an AWS Lambda or Amazon ECS deployment that is a YAML-formatted or JSON-formatted string. For AWS Lambda and Amazon ECS deployments, the revision is the same as the AppSpec file. This method replaces the deprecated <code>RawString</code> data type. */
		appSpecContent?: AppSpecContent;
	}

	export enum RevisionLocationRevisionType { S3 = 0, GitHub = 1, String = 2, AppSpecContent = 3 }


	/**Information about the instances to be used in the replacement environment in a blue/green deployment. */
	export interface TargetInstances {
		tagFilters?: Array<EC2TagFilter>;
		autoScalingGroups?: Array<AutoScalingGroupName>;

		/**Information about groups of EC2 instance tags. */
		ec2TagSet?: EC2TagSet;
	}

	export enum FileExistsBehavior { DISALLOW = 0, OVERWRITE = 1, RETAIN = 2 }


	/**Information about a deployment configuration. */
	export interface DeploymentConfigInfo {
		deploymentConfigId?: string;
		deploymentConfigName?: string;

		/**Information about minimum healthy instance. */
		minimumHealthyHosts?: MinimumHealthyHosts;
		createTime?: Date;
		computePlatform?: DeploymentConfigInfoComputePlatform;

		/**The configuration that specifies how traffic is shifted from one version of a Lambda function to another version during an AWS Lambda deployment, or from one Amazon ECS task set to another during an Amazon ECS deployment. */
		trafficRoutingConfig?: TrafficRoutingConfig;
	}

	export enum DeploymentConfigInfoComputePlatform { Server = 0, Lambda = 1, ECS = 2 }

	export enum DeploymentCreator { user = 0, autoscaling = 1, codeDeployRollback = 2, CodeDeploy = 3, CloudFormation = 4, CloudFormationRollback = 5 }


	/**Information about the most recent attempted or successful deployment to a deployment group. */
	export interface LastDeploymentInfo {
		deploymentId?: string;
		status?: LastDeploymentInfoStatus;
		endTime?: Date;
		createTime?: Date;
	}

	export enum LastDeploymentInfoStatus { Created = 0, Queued = 1, InProgress = 2, Baking = 3, Succeeded = 4, Failed = 5, Stopped = 6, Ready = 7 }


	/**Information about a deployment group. */
	export interface DeploymentGroupInfo {
		applicationName?: string;
		deploymentGroupId?: string;
		deploymentGroupName?: string;
		deploymentConfigName?: string;
		ec2TagFilters?: Array<EC2TagFilter>;
		onPremisesInstanceTagFilters?: Array<TagFilter>;
		autoScalingGroups?: Array<AutoScalingGroup>;
		serviceRoleArn?: string;

		/**Information about the location of an application revision. */
		targetRevision?: RevisionLocation;
		triggerConfigurations?: Array<TriggerConfig>;

		/**Information about alarms associated with the deployment group. */
		alarmConfiguration?: AlarmConfiguration;

		/**Information about a configuration for automatically rolling back to a previous version of an application revision when a deployment is not completed successfully. */
		autoRollbackConfiguration?: AutoRollbackConfiguration;

		/**Information about the type of deployment, either in-place or blue/green, you want to run and whether to route deployment traffic behind a load balancer. */
		deploymentStyle?: DeploymentStyle;

		/**Information about blue/green deployment options for a deployment group. */
		blueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration;

		/**Information about the Elastic Load Balancing load balancer or target group used in a deployment. */
		loadBalancerInfo?: LoadBalancerInfo;

		/**Information about the most recent attempted or successful deployment to a deployment group. */
		lastSuccessfulDeployment?: LastDeploymentInfo;

		/**Information about the most recent attempted or successful deployment to a deployment group. */
		lastAttemptedDeployment?: LastDeploymentInfo;

		/**Information about groups of EC2 instance tags. */
		ec2TagSet?: EC2TagSet;

		/**Information about groups of on-premises instance tags. */
		onPremisesTagSet?: OnPremisesTagSet;
		computePlatform?: DeploymentGroupInfoComputePlatform;
		ecsServices?: Array<ECSService>;
	}

	export enum DeploymentGroupInfoComputePlatform { Server = 0, Lambda = 1, ECS = 2 }

	export enum DeploymentStatus { Created = 0, Queued = 1, InProgress = 2, Baking = 3, Succeeded = 4, Failed = 5, Stopped = 6, Ready = 7 }


	/**Information about a deployment error. */
	export interface ErrorInformation {
		code?: ErrorInformationCode;
		message?: string;
	}

	export enum ErrorInformationCode { AGENT_ISSUE = 0, ALARM_ACTIVE = 1, APPLICATION_MISSING = 2, AUTOSCALING_VALIDATION_ERROR = 3, AUTO_SCALING_CONFIGURATION = 4, AUTO_SCALING_IAM_ROLE_PERMISSIONS = 5, CODEDEPLOY_RESOURCE_CANNOT_BE_FOUND = 6, CUSTOMER_APPLICATION_UNHEALTHY = 7, DEPLOYMENT_GROUP_MISSING = 8, ECS_UPDATE_ERROR = 9, ELASTIC_LOAD_BALANCING_INVALID = 10, ELB_INVALID_INSTANCE = 11, HEALTH_CONSTRAINTS = 12, HEALTH_CONSTRAINTS_INVALID = 13, HOOK_EXECUTION_FAILURE = 14, IAM_ROLE_MISSING = 15, IAM_ROLE_PERMISSIONS = 16, INTERNAL_ERROR = 17, INVALID_ECS_SERVICE = 18, INVALID_LAMBDA_CONFIGURATION = 19, INVALID_LAMBDA_FUNCTION = 20, INVALID_REVISION = 21, MANUAL_STOP = 22, MISSING_BLUE_GREEN_DEPLOYMENT_CONFIGURATION = 23, MISSING_ELB_INFORMATION = 24, MISSING_GITHUB_TOKEN = 25, NO_EC2_SUBSCRIPTION = 26, NO_INSTANCES = 27, OVER_MAX_INSTANCES = 28, RESOURCE_LIMIT_EXCEEDED = 29, REVISION_MISSING = 30, THROTTLED = 31, TIMEOUT = 32, CLOUDFORMATION_STACK_FAILURE = 33 }


	/**Information about the deployment status of the instances in the deployment. */
	export interface DeploymentOverview {
		Pending?: number;
		InProgress?: number;
		Succeeded?: number;
		Failed?: number;
		Skipped?: number;
		Ready?: number;
	}


	/**Information about a deployment rollback. */
	export interface RollbackInfo {
		rollbackDeploymentId?: string;
		rollbackTriggeringDeploymentId?: string;
		rollbackMessage?: string;
	}


	/**Information about a deployment. */
	export interface DeploymentInfo {
		applicationName?: string;
		deploymentGroupName?: string;
		deploymentConfigName?: string;
		deploymentId?: string;

		/**Information about the location of an application revision. */
		previousRevision?: RevisionLocation;

		/**Information about the location of an application revision. */
		revision?: RevisionLocation;
		status?: DeploymentInfoStatus;

		/**Information about a deployment error. */
		errorInformation?: ErrorInformation;
		createTime?: Date;
		startTime?: Date;
		completeTime?: Date;

		/**Information about the deployment status of the instances in the deployment. */
		deploymentOverview?: DeploymentOverview;
		description?: string;
		creator?: DeploymentInfoCreator;
		ignoreApplicationStopFailures?: boolean;

		/**Information about a configuration for automatically rolling back to a previous version of an application revision when a deployment is not completed successfully. */
		autoRollbackConfiguration?: AutoRollbackConfiguration;
		updateOutdatedInstancesOnly?: boolean;

		/**Information about a deployment rollback. */
		rollbackInfo?: RollbackInfo;

		/**Information about the type of deployment, either in-place or blue/green, you want to run and whether to route deployment traffic behind a load balancer. */
		deploymentStyle?: DeploymentStyle;

		/**Information about the instances to be used in the replacement environment in a blue/green deployment. */
		targetInstances?: TargetInstances;
		instanceTerminationWaitTimeStarted?: boolean;

		/**Information about blue/green deployment options for a deployment group. */
		blueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration;

		/**Information about the Elastic Load Balancing load balancer or target group used in a deployment. */
		loadBalancerInfo?: LoadBalancerInfo;

		/**AdditionalDeploymentStatusInfo is deprecated, use DeploymentStatusMessageList instead. */
		additionalDeploymentStatusInfo?: string;
		fileExistsBehavior?: DeploymentInfoFileExistsBehavior;
		deploymentStatusMessages?: Array<ErrorMessage>;
		computePlatform?: DeploymentInfoComputePlatform;
		externalId?: string;
	}

	export enum DeploymentInfoStatus { Created = 0, Queued = 1, InProgress = 2, Baking = 3, Succeeded = 4, Failed = 5, Stopped = 6, Ready = 7 }

	export enum DeploymentInfoCreator { user = 0, autoscaling = 1, codeDeployRollback = 2, CodeDeploy = 3, CloudFormation = 4, CloudFormationRollback = 5 }

	export enum DeploymentInfoFileExistsBehavior { DISALLOW = 0, OVERWRITE = 1, RETAIN = 2 }

	export enum DeploymentInfoComputePlatform { Server = 0, Lambda = 1, ECS = 2 }

	export enum DeploymentOption { WITH_TRAFFIC_CONTROL = 0, WITHOUT_TRAFFIC_CONTROL = 1 }

	export enum DeploymentReadyAction { CONTINUE_DEPLOYMENT = 0, STOP_DEPLOYMENT = 1 }

	export enum DeploymentType { IN_PLACE = 0, BLUE_GREEN = 1 }

	export enum DeploymentTargetType { InstanceTarget = 0, LambdaTarget = 1, ECSTarget = 2, CloudFormationTarget = 3 }


	/** A target Amazon EC2 or on-premises instance during a deployment that uses the EC2/On-premises compute platform.  */
	export interface InstanceTarget {
		deploymentId?: string;
		targetId?: string;
		targetArn?: string;
		status?: InstanceTargetStatus;
		lastUpdatedAt?: Date;
		lifecycleEvents?: Array<LifecycleEvent>;
		instanceLabel?: InstanceTargetInstanceLabel;
	}

	export enum InstanceTargetStatus { Pending = 0, InProgress = 1, Succeeded = 2, Failed = 3, Skipped = 4, Unknown = 5, Ready = 6 }

	export enum InstanceTargetInstanceLabel { Blue = 0, Green = 1 }


	/** Information about the target AWS Lambda function during an AWS Lambda deployment.  */
	export interface LambdaTarget {
		deploymentId?: string;
		targetId?: string;
		targetArn?: string;
		status?: LambdaTargetStatus;
		lastUpdatedAt?: Date;
		lifecycleEvents?: Array<LifecycleEvent>;

		/**Information about a Lambda function specified in a deployment. */
		lambdaFunctionInfo?: LambdaFunctionInfo;
	}

	export enum LambdaTargetStatus { Pending = 0, InProgress = 1, Succeeded = 2, Failed = 3, Skipped = 4, Unknown = 5, Ready = 6 }


	/** Information about the target of an Amazon ECS deployment.  */
	export interface ECSTarget {
		deploymentId?: string;
		targetId?: string;
		targetArn?: string;
		lastUpdatedAt?: Date;
		lifecycleEvents?: Array<LifecycleEvent>;
		status?: ECSTargetStatus;
		taskSetsInfo?: Array<ECSTaskSet>;
	}

	export enum ECSTargetStatus { Pending = 0, InProgress = 1, Succeeded = 2, Failed = 3, Skipped = 4, Unknown = 5, Ready = 6 }


	/** Information about the deployment target.  */
	export interface DeploymentTarget {
		deploymentTargetType?: DeploymentTargetDeploymentTargetType;

		/**A target Amazon EC2 or on-premises instance during a deployment that uses the EC2/On-premises compute platform. */
		instanceTarget?: InstanceTarget;

		/**Information about the target AWS Lambda function during an AWS Lambda deployment. */
		lambdaTarget?: LambdaTarget;

		/**Information about the target of an Amazon ECS deployment. */
		ecsTarget?: ECSTarget;

		/**Information about the target to be updated by an AWS CloudFormation blue/green deployment. This target type is used for all deployments initiated by a CloudFormation stack update. */
		cloudFormationTarget?: CloudFormationTarget;
	}

	export enum DeploymentTargetDeploymentTargetType { InstanceTarget = 0, LambdaTarget = 1, ECSTarget = 2, CloudFormationTarget = 3 }

	export enum LifecycleErrorCode { Success = 0, ScriptMissing = 1, ScriptNotExecutable = 2, ScriptTimedOut = 3, ScriptFailed = 4, UnknownError = 5 }


	/**Diagnostic information about executable scripts that are part of a deployment. */
	export interface Diagnostics {
		errorCode?: DiagnosticsErrorCode;
		scriptName?: string;
		message?: string;
		logTail?: string;
	}

	export enum DiagnosticsErrorCode { Success = 0, ScriptMissing = 1, ScriptNotExecutable = 2, ScriptTimedOut = 3, ScriptFailed = 4, UnknownError = 5 }

	export enum EC2TagFilterType { KEY_ONLY = 0, VALUE_ONLY = 1, KEY_AND_VALUE = 2 }


	/**Information about an EC2 tag filter. */
	export interface EC2TagFilter {
		Key?: string;
		Value?: string;
		Type?: EC2TagFilterType;
	}

	export enum EC2TagFilterType { KEY_ONLY = 0, VALUE_ONLY = 1, KEY_AND_VALUE = 2 }


	/** Contains the service and cluster names used to identify an Amazon ECS deployment's target.  */
	export interface ECSService {
		serviceName?: string;
		clusterName?: string;
	}


	/**Information about a target group in Elastic Load Balancing to use in a deployment. Instances are registered as targets in a target group, and traffic is routed to the target group. */
	export interface TargetGroupInfo {
		name?: string;
	}

	export enum TargetLabel { Blue = 0, Green = 1 }


	/** Information about a set of Amazon ECS tasks in an AWS CodeDeploy deployment. An Amazon ECS task set includes details such as the desired number of tasks, how many tasks are running, and whether the task set serves production traffic. An AWS CodeDeploy application that uses the Amazon ECS compute platform deploys a containerized application in an Amazon ECS service as a task set.  */
	export interface ECSTaskSet {
		identifer?: string;
		desiredCount?: number;
		pendingCount?: number;
		runningCount?: number;
		status?: string;
		trafficWeight?: number;

		/**Information about a target group in Elastic Load Balancing to use in a deployment. Instances are registered as targets in a target group, and traffic is routed to the target group. */
		targetGroup?: TargetGroupInfo;
		taskSetLabel?: ECSTaskSetTaskSetLabel;
	}

	export enum ECSTaskSetTaskSetLabel { Blue = 0, Green = 1 }


	/**Information about a load balancer in Elastic Load Balancing to use in a deployment. Instances are registered directly with a load balancer, and traffic is routed to the load balancer. */
	export interface ELBInfo {
		name?: string;
	}

	export enum ErrorCode { AGENT_ISSUE = 0, ALARM_ACTIVE = 1, APPLICATION_MISSING = 2, AUTOSCALING_VALIDATION_ERROR = 3, AUTO_SCALING_CONFIGURATION = 4, AUTO_SCALING_IAM_ROLE_PERMISSIONS = 5, CODEDEPLOY_RESOURCE_CANNOT_BE_FOUND = 6, CUSTOMER_APPLICATION_UNHEALTHY = 7, DEPLOYMENT_GROUP_MISSING = 8, ECS_UPDATE_ERROR = 9, ELASTIC_LOAD_BALANCING_INVALID = 10, ELB_INVALID_INSTANCE = 11, HEALTH_CONSTRAINTS = 12, HEALTH_CONSTRAINTS_INVALID = 13, HOOK_EXECUTION_FAILURE = 14, IAM_ROLE_MISSING = 15, IAM_ROLE_PERMISSIONS = 16, INTERNAL_ERROR = 17, INVALID_ECS_SERVICE = 18, INVALID_LAMBDA_CONFIGURATION = 19, INVALID_LAMBDA_FUNCTION = 20, INVALID_REVISION = 21, MANUAL_STOP = 22, MISSING_BLUE_GREEN_DEPLOYMENT_CONFIGURATION = 23, MISSING_ELB_INFORMATION = 24, MISSING_GITHUB_TOKEN = 25, NO_EC2_SUBSCRIPTION = 26, NO_INSTANCES = 27, OVER_MAX_INSTANCES = 28, RESOURCE_LIMIT_EXCEEDED = 29, REVISION_MISSING = 30, THROTTLED = 31, TIMEOUT = 32, CLOUDFORMATION_STACK_FAILURE = 33 }


	/**Information about an application revision. */
	export interface GenericRevisionInfo {
		description?: string;
		deploymentGroups?: Array<DeploymentGroupName>;
		firstUsedTime?: Date;
		lastUsedTime?: Date;
		registerTime?: Date;
	}


	/**Information about an instance in a deployment.InstanceSummary is deprecated, use DeploymentTarget instead. */
	export interface InstanceSummary {
		deploymentId?: string;
		instanceId?: string;

		/**InstanceStatus is deprecated, use TargetStatus instead. */
		status?: InstanceSummaryStatus;
		lastUpdatedAt?: Date;
		lifecycleEvents?: Array<LifecycleEvent>;
		instanceType?: InstanceSummaryInstanceType;
	}

	export enum InstanceSummaryStatus { Pending = 0, InProgress = 1, Succeeded = 2, Failed = 3, Skipped = 4, Unknown = 5, Ready = 6 }

	export enum InstanceSummaryInstanceType { Blue = 0, Green = 1 }


	/**Information about an on-premises instance. */
	export interface InstanceInfo {
		instanceName?: string;
		iamSessionArn?: string;
		iamUserArn?: string;
		instanceArn?: string;
		registerTime?: Date;
		deregisterTime?: Date;
		tags?: Array<Tag>;
	}


	/**Information about the location of application artifacts stored in GitHub. */
	export interface GitHubLocation {
		repository?: string;
		commitId?: string;
	}

	export enum GreenFleetProvisioningAction { DISCOVER_EXISTING = 0, COPY_AUTO_SCALING_GROUP = 1 }


	/**InstanceStatus is deprecated, use TargetStatus instead. */
	export enum InstanceStatus { Pending = 0, InProgress = 1, Succeeded = 2, Failed = 3, Skipped = 4, Unknown = 5, Ready = 6 }

	export enum InstanceType { Blue = 0, Green = 1 }


	/** Information about a Lambda function specified in a deployment.  */
	export interface LambdaFunctionInfo {
		functionName?: string;
		functionAlias?: string;
		currentVersion?: string;
		targetVersion?: string;
		targetVersionWeight?: number;
	}

	export enum LifecycleEventStatus { Pending = 0, InProgress = 1, Succeeded = 2, Failed = 3, Skipped = 4, Unknown = 5 }


	/**Information about a deployment lifecycle event. */
	export interface LifecycleEvent {
		lifecycleEventName?: string;

		/**Diagnostic information about executable scripts that are part of a deployment. */
		diagnostics?: Diagnostics;
		startTime?: Date;
		endTime?: Date;
		status?: LifecycleEventStatus;
	}

	export enum LifecycleEventStatus { Pending = 0, InProgress = 1, Succeeded = 2, Failed = 3, Skipped = 4, Unknown = 5 }

	export enum SortOrder { ascending = 0, descending = 1 }

	export enum ListStateFilterAction { include = 0, exclude = 1, ignore = 2 }


	/**Information about a time range. */
	export interface TimeRange {
		start?: Date;
		end?: Date;
	}

	export enum RegistrationStatus { Registered = 0, Deregistered = 1 }

	export enum MinimumHealthyHostsType { HOST_COUNT = 0, FLEET_PERCENT = 1 }


	/**A revision for an AWS Lambda deployment that is a YAML-formatted or JSON-formatted string. For AWS Lambda deployments, the revision is the same as the AppSpec file.RawString and String revision type are deprecated, use AppSpecContent type instead. */
	export interface RawString {
		content?: string;
		sha256?: string;
	}


	/**Information about an application revision. */
	export interface RevisionInfo {

		/**Information about the location of an application revision. */
		revisionLocation?: RevisionLocation;

		/**Information about an application revision. */
		genericRevisionInfo?: GenericRevisionInfo;
	}

	export enum RevisionLocationType { S3 = 0, GitHub = 1, String = 2, AppSpecContent = 3 }


	/**Information about the location of application artifacts stored in Amazon S3. */
	export interface S3Location {
		bucket?: string;
		key?: string;
		bundleType?: S3LocationBundleType;
		version?: string;
		eTag?: string;
	}

	export enum S3LocationBundleType { tar = 0, tgz = 1, zip = 2, YAML = 3, JSON = 4 }

	export enum StopStatus { Pending = 0, Succeeded = 1 }


	/**Information about a tag. */
	export interface Tag {
		Key?: string;
		Value?: string;
	}

	export enum TagFilterType { KEY_ONLY = 0, VALUE_ONLY = 1, KEY_AND_VALUE = 2 }


	/**Information about an on-premises instance tag filter. */
	export interface TagFilter {
		Key?: string;
		Value?: string;
		Type?: TagFilterType;
	}

	export enum TagFilterType { KEY_ONLY = 0, VALUE_ONLY = 1, KEY_AND_VALUE = 2 }

	export enum TargetFilterName { TargetStatus = 0, ServerInstanceLabel = 1 }


	/** Information about a listener. The listener contains the path used to route traffic that is received from the load balancer to a target group.  */
	export interface TrafficRoute {
		listenerArns?: Array<ListenerArn>;
	}


	/** Information about two target groups and how traffic is routed during an Amazon ECS deployment. An optional test traffic route can be specified.  */
	export interface TargetGroupPairInfo {
		targetGroups?: Array<TargetGroupInfo>;

		/**Information about a listener. The listener contains the path used to route traffic that is received from the load balancer to a target group. */
		prodTrafficRoute?: TrafficRoute;

		/**Information about a listener. The listener contains the path used to route traffic that is received from the load balancer to a target group. */
		testTrafficRoute?: TrafficRoute;
	}


	/**A configuration that shifts traffic from one version of a Lambda function or ECS task set to another in two increments. The original and target Lambda function versions or ECS task sets are specified in the deployment's AppSpec file. */
	export interface TimeBasedCanary {
		canaryPercentage?: number;
		canaryInterval?: number;
	}


	/**A configuration that shifts traffic from one version of a Lambda function or ECS task set to another in equal increments, with an equal number of minutes between each increment. The original and target Lambda function versions or ECS task sets are specified in the deployment's AppSpec file. */
	export interface TimeBasedLinear {
		linearPercentage?: number;
		linearInterval?: number;
	}

	export enum TrafficRoutingType { TimeBasedCanary = 0, TimeBasedLinear = 1, AllAtOnce = 2 }


	/**Information about notification triggers for the deployment group. */
	export interface TriggerConfig {
		triggerName?: string;
		triggerTargetArn?: string;
		triggerEvents?: Array<TriggerEventType>;
	}

	export enum TriggerEventType { DeploymentStart = 0, DeploymentSuccess = 1, DeploymentFailure = 2, DeploymentStop = 3, DeploymentRollback = 4, DeploymentReady = 5, InstanceStart = 6, InstanceSuccess = 7, InstanceFailure = 8, InstanceReady = 9 }

	export class DemoClient {
		constructor(private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/') {
		}

		/**
		 * Adds tags to on-premises instances.
		 * Post /#X-Amz-Target=CodeDeploy_20141006.AddTagsToOnPremisesInstances
		 * @return {void} Success
		 */
		AddTagsToOnPremisesInstances(requestBody: AddTagsToOnPremisesInstancesInput, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#X-Amz-Target=CodeDeploy_20141006.AddTagsToOnPremisesInstances', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Gets information about one or more application revisions. The maximum number of application revisions that can be returned is 25.
		 * Post /#X-Amz-Target=CodeDeploy_20141006.BatchGetApplicationRevisions
		 * @return {BatchGetApplicationRevisionsOutput} Success
		 */
		BatchGetApplicationRevisions(requestBody: BatchGetApplicationRevisionsInput, headersHandler?: () => {[header: string]: string}): Promise<BatchGetApplicationRevisionsOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=CodeDeploy_20141006.BatchGetApplicationRevisions', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Gets information about one or more applications. The maximum number of applications that can be returned is 100.
		 * Post /#X-Amz-Target=CodeDeploy_20141006.BatchGetApplications
		 * @return {BatchGetApplicationsOutput} Success
		 */
		BatchGetApplications(requestBody: BatchGetApplicationsInput, headersHandler?: () => {[header: string]: string}): Promise<BatchGetApplicationsOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=CodeDeploy_20141006.BatchGetApplications', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Gets information about one or more deployment groups.
		 * Post /#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentGroups
		 * @return {BatchGetDeploymentGroupsOutput} Success
		 */
		BatchGetDeploymentGroups(requestBody: BatchGetDeploymentGroupsInput, headersHandler?: () => {[header: string]: string}): Promise<BatchGetDeploymentGroupsOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentGroups', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <note> <p> This method works, but is deprecated. Use <code>BatchGetDeploymentTargets</code> instead. </p> </note> <p> Returns an array of one or more instances associated with a deployment. This method works with EC2/On-premises and AWS Lambda compute platforms. The newer <code>BatchGetDeploymentTargets</code> works with all compute platforms. The maximum number of instances that can be returned is 25.</p>
		 * Post /#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentInstances
		 * @return {BatchGetDeploymentInstancesOutput} Success
		 */
		BatchGetDeploymentInstances(requestBody: BatchGetDeploymentInstancesInput, headersHandler?: () => {[header: string]: string}): Promise<BatchGetDeploymentInstancesOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentInstances', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p> Returns an array of one or more targets associated with a deployment. This method works with all compute types and should be used instead of the deprecated <code>BatchGetDeploymentInstances</code>. The maximum number of targets that can be returned is 25.</p> <p> The type of targets returned depends on the deployment's compute platform or deployment method: </p> <ul> <li> <p> <b>EC2/On-premises</b>: Information about EC2 instance targets. </p> </li> <li> <p> <b>AWS Lambda</b>: Information about Lambda functions targets. </p> </li> <li> <p> <b>Amazon ECS</b>: Information about Amazon ECS service targets. </p> </li> <li> <p> <b>CloudFormation</b>: Information about targets of blue/green deployments initiated by a CloudFormation stack update.</p> </li> </ul>
		 * Post /#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentTargets
		 * @return {BatchGetDeploymentTargetsOutput} Success
		 */
		BatchGetDeploymentTargets(requestBody: BatchGetDeploymentTargetsInput, headersHandler?: () => {[header: string]: string}): Promise<BatchGetDeploymentTargetsOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentTargets', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Gets information about one or more deployments. The maximum number of deployments that can be returned is 25.
		 * Post /#X-Amz-Target=CodeDeploy_20141006.BatchGetDeployments
		 * @return {BatchGetDeploymentsOutput} Success
		 */
		BatchGetDeployments(requestBody: BatchGetDeploymentsInput, headersHandler?: () => {[header: string]: string}): Promise<BatchGetDeploymentsOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=CodeDeploy_20141006.BatchGetDeployments', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Gets information about one or more on-premises instances. The maximum number of on-premises instances that can be returned is 25.
		 * Post /#X-Amz-Target=CodeDeploy_20141006.BatchGetOnPremisesInstances
		 * @return {BatchGetOnPremisesInstancesOutput} Success
		 */
		BatchGetOnPremisesInstances(requestBody: BatchGetOnPremisesInstancesInput, headersHandler?: () => {[header: string]: string}): Promise<BatchGetOnPremisesInstancesOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=CodeDeploy_20141006.BatchGetOnPremisesInstances', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * For a blue/green deployment, starts the process of rerouting traffic from instances in the original environment to instances in the replacement environment without waiting for a specified wait time to elapse. (Traffic rerouting, which is achieved by registering instances in the replacement environment with the load balancer, can start as soon as all instances have a status of Ready.)
		 * Post /#X-Amz-Target=CodeDeploy_20141006.ContinueDeployment
		 * @return {void} Success
		 */
		ContinueDeployment(requestBody: ContinueDeploymentInput, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#X-Amz-Target=CodeDeploy_20141006.ContinueDeployment', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Creates an application.
		 * Post /#X-Amz-Target=CodeDeploy_20141006.CreateApplication
		 * @return {CreateApplicationOutput} Success
		 */
		CreateApplication(requestBody: CreateApplicationInput, headersHandler?: () => {[header: string]: string}): Promise<CreateApplicationOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=CodeDeploy_20141006.CreateApplication', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Deploys an application revision through the specified deployment group.
		 * Post /#X-Amz-Target=CodeDeploy_20141006.CreateDeployment
		 * @return {CreateDeploymentOutput} Success
		 */
		CreateDeployment(requestBody: CreateDeploymentInput, headersHandler?: () => {[header: string]: string}): Promise<CreateDeploymentOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=CodeDeploy_20141006.CreateDeployment', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Creates a deployment configuration.
		 * Post /#X-Amz-Target=CodeDeploy_20141006.CreateDeploymentConfig
		 * @return {CreateDeploymentConfigOutput} Success
		 */
		CreateDeploymentConfig(requestBody: CreateDeploymentConfigInput, headersHandler?: () => {[header: string]: string}): Promise<CreateDeploymentConfigOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=CodeDeploy_20141006.CreateDeploymentConfig', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Creates a deployment group to which application revisions are deployed.
		 * Post /#X-Amz-Target=CodeDeploy_20141006.CreateDeploymentGroup
		 * @return {CreateDeploymentGroupOutput} Success
		 */
		CreateDeploymentGroup(requestBody: CreateDeploymentGroupInput, headersHandler?: () => {[header: string]: string}): Promise<CreateDeploymentGroupOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=CodeDeploy_20141006.CreateDeploymentGroup', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Deletes an application.
		 * Post /#X-Amz-Target=CodeDeploy_20141006.DeleteApplication
		 * @return {void} Success
		 */
		DeleteApplication(requestBody: DeleteApplicationInput, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#X-Amz-Target=CodeDeploy_20141006.DeleteApplication', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * <p>Deletes a deployment configuration.</p> <note> <p>A deployment configuration cannot be deleted if it is currently in use. Predefined configurations cannot be deleted.</p> </note>
		 * Post /#X-Amz-Target=CodeDeploy_20141006.DeleteDeploymentConfig
		 * @return {void} Success
		 */
		DeleteDeploymentConfig(requestBody: DeleteDeploymentConfigInput, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#X-Amz-Target=CodeDeploy_20141006.DeleteDeploymentConfig', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Deletes a deployment group.
		 * Post /#X-Amz-Target=CodeDeploy_20141006.DeleteDeploymentGroup
		 * @return {DeleteDeploymentGroupOutput} Success
		 */
		DeleteDeploymentGroup(requestBody: DeleteDeploymentGroupInput, headersHandler?: () => {[header: string]: string}): Promise<DeleteDeploymentGroupOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=CodeDeploy_20141006.DeleteDeploymentGroup', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Deletes a GitHub account connection.
		 * Post /#X-Amz-Target=CodeDeploy_20141006.DeleteGitHubAccountToken
		 * @return {DeleteGitHubAccountTokenOutput} Success
		 */
		DeleteGitHubAccountToken(requestBody: DeleteGitHubAccountTokenInput, headersHandler?: () => {[header: string]: string}): Promise<DeleteGitHubAccountTokenOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=CodeDeploy_20141006.DeleteGitHubAccountToken', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Deletes resources linked to an external ID.
		 * Post /#X-Amz-Target=CodeDeploy_20141006.DeleteResourcesByExternalId
		 * @return {DeleteResourcesByExternalIdOutput} Success
		 */
		DeleteResourcesByExternalId(requestBody: DeleteResourcesByExternalIdInput, headersHandler?: () => {[header: string]: string}): Promise<DeleteResourcesByExternalIdOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=CodeDeploy_20141006.DeleteResourcesByExternalId', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Deregisters an on-premises instance.
		 * Post /#X-Amz-Target=CodeDeploy_20141006.DeregisterOnPremisesInstance
		 * @return {void} Success
		 */
		DeregisterOnPremisesInstance(requestBody: DeregisterOnPremisesInstanceInput, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#X-Amz-Target=CodeDeploy_20141006.DeregisterOnPremisesInstance', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Gets information about an application.
		 * Post /#X-Amz-Target=CodeDeploy_20141006.GetApplication
		 * @return {GetApplicationOutput} Success
		 */
		GetApplication(requestBody: GetApplicationInput, headersHandler?: () => {[header: string]: string}): Promise<GetApplicationOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=CodeDeploy_20141006.GetApplication', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Gets information about an application revision.
		 * Post /#X-Amz-Target=CodeDeploy_20141006.GetApplicationRevision
		 * @return {GetApplicationRevisionOutput} Success
		 */
		GetApplicationRevision(requestBody: GetApplicationRevisionInput, headersHandler?: () => {[header: string]: string}): Promise<GetApplicationRevisionOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=CodeDeploy_20141006.GetApplicationRevision', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Gets information about a deployment.</p> <note> <p> The <code>content</code> property of the <code>appSpecContent</code> object in the returned revision is always null. Use <code>GetApplicationRevision</code> and the <code>sha256</code> property of the returned <code>appSpecContent</code> object to get the content of the deployment’s AppSpec file. </p> </note>
		 * Post /#X-Amz-Target=CodeDeploy_20141006.GetDeployment
		 * @return {GetDeploymentOutput} Success
		 */
		GetDeployment(requestBody: GetDeploymentInput, headersHandler?: () => {[header: string]: string}): Promise<GetDeploymentOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=CodeDeploy_20141006.GetDeployment', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Gets information about a deployment configuration.
		 * Post /#X-Amz-Target=CodeDeploy_20141006.GetDeploymentConfig
		 * @return {GetDeploymentConfigOutput} Success
		 */
		GetDeploymentConfig(requestBody: GetDeploymentConfigInput, headersHandler?: () => {[header: string]: string}): Promise<GetDeploymentConfigOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=CodeDeploy_20141006.GetDeploymentConfig', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Gets information about a deployment group.
		 * Post /#X-Amz-Target=CodeDeploy_20141006.GetDeploymentGroup
		 * @return {GetDeploymentGroupOutput} Success
		 */
		GetDeploymentGroup(requestBody: GetDeploymentGroupInput, headersHandler?: () => {[header: string]: string}): Promise<GetDeploymentGroupOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=CodeDeploy_20141006.GetDeploymentGroup', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Gets information about an instance as part of a deployment.
		 * Post /#X-Amz-Target=CodeDeploy_20141006.GetDeploymentInstance
		 * @return {GetDeploymentInstanceOutput} Success
		 */
		GetDeploymentInstance(requestBody: GetDeploymentInstanceInput, headersHandler?: () => {[header: string]: string}): Promise<GetDeploymentInstanceOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=CodeDeploy_20141006.GetDeploymentInstance', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns information about a deployment target.
		 * Post /#X-Amz-Target=CodeDeploy_20141006.GetDeploymentTarget
		 * @return {GetDeploymentTargetOutput} Success
		 */
		GetDeploymentTarget(requestBody: GetDeploymentTargetInput, headersHandler?: () => {[header: string]: string}): Promise<GetDeploymentTargetOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=CodeDeploy_20141006.GetDeploymentTarget', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Gets information about an on-premises instance.
		 * Post /#X-Amz-Target=CodeDeploy_20141006.GetOnPremisesInstance
		 * @return {GetOnPremisesInstanceOutput} Success
		 */
		GetOnPremisesInstance(requestBody: GetOnPremisesInstanceInput, headersHandler?: () => {[header: string]: string}): Promise<GetOnPremisesInstanceOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=CodeDeploy_20141006.GetOnPremisesInstance', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Lists information about revisions for an application.
		 * Post /#X-Amz-Target=CodeDeploy_20141006.ListApplicationRevisions
		 * @param {string} nextToken Pagination token
		 * @return {ListApplicationRevisionsOutput} Success
		 */
		ListApplicationRevisions(nextToken: string, requestBody: ListApplicationRevisionsInput, headersHandler?: () => {[header: string]: string}): Promise<ListApplicationRevisionsOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=CodeDeploy_20141006.ListApplicationRevisions?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Lists the applications registered with the IAM user or AWS account.
		 * Post /#X-Amz-Target=CodeDeploy_20141006.ListApplications
		 * @param {string} nextToken Pagination token
		 * @return {ListApplicationsOutput} Success
		 */
		ListApplications(nextToken: string, requestBody: ListApplicationsInput, headersHandler?: () => {[header: string]: string}): Promise<ListApplicationsOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=CodeDeploy_20141006.ListApplications?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Lists the deployment configurations with the IAM user or AWS account.
		 * Post /#X-Amz-Target=CodeDeploy_20141006.ListDeploymentConfigs
		 * @param {string} nextToken Pagination token
		 * @return {ListDeploymentConfigsOutput} Success
		 */
		ListDeploymentConfigs(nextToken: string, requestBody: ListDeploymentConfigsInput, headersHandler?: () => {[header: string]: string}): Promise<ListDeploymentConfigsOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=CodeDeploy_20141006.ListDeploymentConfigs?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Lists the deployment groups for an application registered with the IAM user or AWS account.
		 * Post /#X-Amz-Target=CodeDeploy_20141006.ListDeploymentGroups
		 * @param {string} nextToken Pagination token
		 * @return {ListDeploymentGroupsOutput} Success
		 */
		ListDeploymentGroups(nextToken: string, requestBody: ListDeploymentGroupsInput, headersHandler?: () => {[header: string]: string}): Promise<ListDeploymentGroupsOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=CodeDeploy_20141006.ListDeploymentGroups?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <note> <p> The newer <code>BatchGetDeploymentTargets</code> should be used instead because it works with all compute types. <code>ListDeploymentInstances</code> throws an exception if it is used with a compute platform other than EC2/On-premises or AWS Lambda. </p> </note> <p> Lists the instance for a deployment associated with the IAM user or AWS account. </p>
		 * Post /#X-Amz-Target=CodeDeploy_20141006.ListDeploymentInstances
		 * @param {string} nextToken Pagination token
		 * @return {ListDeploymentInstancesOutput} Success
		 */
		ListDeploymentInstances(nextToken: string, requestBody: ListDeploymentInstancesInput, headersHandler?: () => {[header: string]: string}): Promise<ListDeploymentInstancesOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=CodeDeploy_20141006.ListDeploymentInstances?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns an array of target IDs that are associated a deployment.
		 * Post /#X-Amz-Target=CodeDeploy_20141006.ListDeploymentTargets
		 * @return {ListDeploymentTargetsOutput} Success
		 */
		ListDeploymentTargets(requestBody: ListDeploymentTargetsInput, headersHandler?: () => {[header: string]: string}): Promise<ListDeploymentTargetsOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=CodeDeploy_20141006.ListDeploymentTargets', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Lists the deployments in a deployment group for an application registered with the IAM user or AWS account.
		 * Post /#X-Amz-Target=CodeDeploy_20141006.ListDeployments
		 * @param {string} nextToken Pagination token
		 * @return {ListDeploymentsOutput} Success
		 */
		ListDeployments(nextToken: string, requestBody: ListDeploymentsInput, headersHandler?: () => {[header: string]: string}): Promise<ListDeploymentsOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=CodeDeploy_20141006.ListDeployments?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Lists the names of stored connections to GitHub accounts.
		 * Post /#X-Amz-Target=CodeDeploy_20141006.ListGitHubAccountTokenNames
		 * @return {ListGitHubAccountTokenNamesOutput} Success
		 */
		ListGitHubAccountTokenNames(requestBody: ListGitHubAccountTokenNamesInput, headersHandler?: () => {[header: string]: string}): Promise<ListGitHubAccountTokenNamesOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=CodeDeploy_20141006.ListGitHubAccountTokenNames', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Gets a list of names for one or more on-premises instances.</p> <p>Unless otherwise specified, both registered and deregistered on-premises instance names are listed. To list only registered or deregistered on-premises instance names, use the registration status parameter.</p>
		 * Post /#X-Amz-Target=CodeDeploy_20141006.ListOnPremisesInstances
		 * @return {ListOnPremisesInstancesOutput} Success
		 */
		ListOnPremisesInstances(requestBody: ListOnPremisesInstancesInput, headersHandler?: () => {[header: string]: string}): Promise<ListOnPremisesInstancesOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=CodeDeploy_20141006.ListOnPremisesInstances', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns a list of tags for the resource identified by a specified Amazon Resource Name (ARN). Tags are used to organize and categorize your CodeDeploy resources.
		 * Post /#X-Amz-Target=CodeDeploy_20141006.ListTagsForResource
		 * @return {ListTagsForResourceOutput} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceInput, headersHandler?: () => {[header: string]: string}): Promise<ListTagsForResourceOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=CodeDeploy_20141006.ListTagsForResource', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Sets the result of a Lambda validation function. The function validates lifecycle hooks during a deployment that uses the AWS Lambda or Amazon ECS compute platform. For AWS Lambda deployments, the available lifecycle hooks are <code>BeforeAllowTraffic</code> and <code>AfterAllowTraffic</code>. For Amazon ECS deployments, the available lifecycle hooks are <code>BeforeInstall</code>, <code>AfterInstall</code>, <code>AfterAllowTestTraffic</code>, <code>BeforeAllowTraffic</code>, and <code>AfterAllowTraffic</code>. Lambda validation functions return <code>Succeeded</code> or <code>Failed</code>. For more information, see <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html#appspec-hooks-lambda">AppSpec 'hooks' Section for an AWS Lambda Deployment </a> and <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html#appspec-hooks-ecs">AppSpec 'hooks' Section for an Amazon ECS Deployment</a>.
		 * Post /#X-Amz-Target=CodeDeploy_20141006.PutLifecycleEventHookExecutionStatus
		 * @return {PutLifecycleEventHookExecutionStatusOutput} Success
		 */
		PutLifecycleEventHookExecutionStatus(requestBody: PutLifecycleEventHookExecutionStatusInput, headersHandler?: () => {[header: string]: string}): Promise<PutLifecycleEventHookExecutionStatusOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=CodeDeploy_20141006.PutLifecycleEventHookExecutionStatus', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Registers with AWS CodeDeploy a revision for the specified application.
		 * Post /#X-Amz-Target=CodeDeploy_20141006.RegisterApplicationRevision
		 * @return {void} Success
		 */
		RegisterApplicationRevision(requestBody: RegisterApplicationRevisionInput, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#X-Amz-Target=CodeDeploy_20141006.RegisterApplicationRevision', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * <p>Registers an on-premises instance.</p> <note> <p>Only one IAM ARN (an IAM session ARN or IAM user ARN) is supported in the request. You cannot use both.</p> </note>
		 * Post /#X-Amz-Target=CodeDeploy_20141006.RegisterOnPremisesInstance
		 * @return {void} Success
		 */
		RegisterOnPremisesInstance(requestBody: RegisterOnPremisesInstanceInput, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#X-Amz-Target=CodeDeploy_20141006.RegisterOnPremisesInstance', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Removes one or more tags from one or more on-premises instances.
		 * Post /#X-Amz-Target=CodeDeploy_20141006.RemoveTagsFromOnPremisesInstances
		 * @return {void} Success
		 */
		RemoveTagsFromOnPremisesInstances(requestBody: RemoveTagsFromOnPremisesInstancesInput, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#X-Amz-Target=CodeDeploy_20141006.RemoveTagsFromOnPremisesInstances', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * In a blue/green deployment, overrides any specified wait time and starts terminating instances immediately after the traffic routing is complete.
		 * Post /#X-Amz-Target=CodeDeploy_20141006.SkipWaitTimeForInstanceTermination
		 * @return {void} Success
		 */
		SkipWaitTimeForInstanceTermination(requestBody: SkipWaitTimeForInstanceTerminationInput, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#X-Amz-Target=CodeDeploy_20141006.SkipWaitTimeForInstanceTermination', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Attempts to stop an ongoing deployment.
		 * Post /#X-Amz-Target=CodeDeploy_20141006.StopDeployment
		 * @return {StopDeploymentOutput} Success
		 */
		StopDeployment(requestBody: StopDeploymentInput, headersHandler?: () => {[header: string]: string}): Promise<StopDeploymentOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=CodeDeploy_20141006.StopDeployment', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Associates the list of tags in the input <code>Tags</code> parameter with the resource identified by the <code>ResourceArn</code> input parameter.
		 * Post /#X-Amz-Target=CodeDeploy_20141006.TagResource
		 * @return {TagResourceOutput} Success
		 */
		TagResource(requestBody: TagResourceInput, headersHandler?: () => {[header: string]: string}): Promise<TagResourceOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=CodeDeploy_20141006.TagResource', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Disassociates a resource from a list of tags. The resource is identified by the <code>ResourceArn</code> input parameter. The tags are identified by the list of keys in the <code>TagKeys</code> input parameter.
		 * Post /#X-Amz-Target=CodeDeploy_20141006.UntagResource
		 * @return {UntagResourceOutput} Success
		 */
		UntagResource(requestBody: UntagResourceInput, headersHandler?: () => {[header: string]: string}): Promise<UntagResourceOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=CodeDeploy_20141006.UntagResource', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Changes the name of an application.
		 * Post /#X-Amz-Target=CodeDeploy_20141006.UpdateApplication
		 * @return {void} Success
		 */
		UpdateApplication(requestBody: UpdateApplicationInput, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#X-Amz-Target=CodeDeploy_20141006.UpdateApplication', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Changes information about a deployment group.
		 * Post /#X-Amz-Target=CodeDeploy_20141006.UpdateDeploymentGroup
		 * @return {UpdateDeploymentGroupOutput} Success
		 */
		UpdateDeploymentGroup(requestBody: UpdateDeploymentGroupInput, headersHandler?: () => {[header: string]: string}): Promise<UpdateDeploymentGroupOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=CodeDeploy_20141006.UpdateDeploymentGroup', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}
	}

}

