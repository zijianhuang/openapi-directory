export namespace My_Demo_Client {
	export interface AddInstanceFleetOutput {
		ClusterId?: string;
		InstanceFleetId?: string;
		ClusterArn?: string;
	}

	export interface AddInstanceFleetInput {
		ClusterId: string;

		/**<p>The configuration that defines an instance fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note> */
		InstanceFleet: InstanceFleetConfig;
	}


	/**Output from an AddInstanceGroups call. */
	export interface AddInstanceGroupsOutput {
		JobFlowId?: string;
		InstanceGroupIds?: Array<XmlStringMaxLen256>;
		ClusterArn?: string;
	}


	/**Input to an AddInstanceGroups call. */
	export interface AddInstanceGroupsInput {
		InstanceGroups: Array<InstanceGroupConfig>;
		JobFlowId: string;
	}


	/** The output for the <a>AddJobFlowSteps</a> operation.  */
	export interface AddJobFlowStepsOutput {
		StepIds?: Array<XmlStringMaxLen256>;
	}


	/** The input argument to the <a>AddJobFlowSteps</a> operation.  */
	export interface AddJobFlowStepsInput {
		JobFlowId: string;
		Steps: Array<StepConfig>;
	}


	/**This input identifies a cluster and a list of tags to attach. */
	export interface AddTagsInput {
		ResourceId: string;
		Tags: Array<Tag>;
	}


	/** The output for the <a>CancelSteps</a> operation.  */
	export interface CancelStepsOutput {
		CancelStepsInfoList?: Array<CancelStepsInfo>;
	}


	/**The input argument to the <a>CancelSteps</a> operation. */
	export interface CancelStepsInput {
		ClusterId: string;
		StepIds: Array<XmlStringMaxLen256>;
		StepCancellationOption?: CancelStepsInputStepCancellationOption;
	}

	export enum CancelStepsInputStepCancellationOption { SEND_INTERRUPT = 0, TERMINATE_PROCESS = 1 }

	export interface CreateSecurityConfigurationOutput {
		Name: string;
		CreationDateTime: Date;
	}

	export interface CreateSecurityConfigurationInput {
		Name: string;
		SecurityConfiguration: string;
	}

	export interface DeleteSecurityConfigurationInput {
		Name: string;
	}


	/**This output contains the description of the cluster. */
	export interface DescribeClusterOutput {

		/**The detailed description of the cluster. */
		Cluster?: Cluster;
	}


	/**This input determines which cluster to describe. */
	export interface DescribeClusterInput {
		ClusterId: string;
	}


	/** The output for the <a>DescribeJobFlows</a> operation.  */
	export interface DescribeJobFlowsOutput {
		JobFlows?: Array<JobFlowDetail>;
	}


	/** The input for the <a>DescribeJobFlows</a> operation.  */
	export interface DescribeJobFlowsInput {
		CreatedAfter?: Date;
		CreatedBefore?: Date;
		JobFlowIds?: Array<XmlString>;
		JobFlowStates?: Array<JobFlowExecutionState>;
	}

	export interface DescribeSecurityConfigurationOutput {
		Name?: string;
		SecurityConfiguration?: string;
		CreationDateTime?: Date;
	}

	export interface DescribeSecurityConfigurationInput {
		Name: string;
	}


	/**This output contains the description of the cluster step. */
	export interface DescribeStepOutput {

		/**This represents a step in a cluster. */
		Step?: Step;
	}


	/**This input determines which step to describe. */
	export interface DescribeStepInput {
		ClusterId: string;
		StepId: string;
	}

	export interface GetBlockPublicAccessConfigurationOutput {

		/**A configuration for Amazon EMR block public access. When <code>BlockPublicSecurityGroupRules</code> is set to <code>true</code>, Amazon EMR prevents cluster creation if one of the cluster's security groups has a rule that allows inbound traffic from 0.0.0.0/0 or ::/0 on a port, unless the port is specified as an exception using <code>PermittedPublicSecurityGroupRuleRanges</code>. */
		BlockPublicAccessConfiguration: BlockPublicAccessConfiguration;

		/**Properties that describe the AWS principal that created the <code>BlockPublicAccessConfiguration</code> using the <code>PutBlockPublicAccessConfiguration</code> action as well as the date and time that the configuration was created. Each time a configuration for block public access is updated, Amazon EMR updates this metadata. */
		BlockPublicAccessConfigurationMetadata: BlockPublicAccessConfigurationMetadata;
	}

	export interface GetManagedScalingPolicyOutput {

		/**Managed scaling policy for an Amazon EMR cluster. The policy specifies the limits for resources that can be added or terminated from a cluster. The policy only applies to the core and task nodes. The master node cannot be scaled after initial configuration. */
		ManagedScalingPolicy?: ManagedScalingPolicy;
	}

	export interface GetManagedScalingPolicyInput {
		ClusterId: string;
	}


	/**This output contains the bootstrap actions detail. */
	export interface ListBootstrapActionsOutput {
		BootstrapActions?: Array<Command>;
		Marker?: string;
	}


	/**This input determines which bootstrap actions to retrieve. */
	export interface ListBootstrapActionsInput {
		ClusterId: string;
		Marker?: string;
	}


	/**This contains a ClusterSummaryList with the cluster details; for example, the cluster IDs, names, and status. */
	export interface ListClustersOutput {
		Clusters?: Array<ClusterSummary>;
		Marker?: string;
	}


	/**This input determines how the ListClusters action filters the list of clusters that it returns. */
	export interface ListClustersInput {
		CreatedAfter?: Date;
		CreatedBefore?: Date;
		ClusterStates?: Array<ClusterState>;
		Marker?: string;
	}

	export interface ListInstanceFleetsOutput {
		InstanceFleets?: Array<InstanceFleet>;
		Marker?: string;
	}

	export interface ListInstanceFleetsInput {
		ClusterId: string;
		Marker?: string;
	}


	/**This input determines which instance groups to retrieve. */
	export interface ListInstanceGroupsOutput {
		InstanceGroups?: Array<InstanceGroup>;
		Marker?: string;
	}


	/**This input determines which instance groups to retrieve. */
	export interface ListInstanceGroupsInput {
		ClusterId: string;
		Marker?: string;
	}


	/**This output contains the list of instances. */
	export interface ListInstancesOutput {
		Instances?: Array<Instance>;
		Marker?: string;
	}


	/**This input determines which instances to list. */
	export interface ListInstancesInput {
		ClusterId: string;
		InstanceGroupId?: string;
		InstanceGroupTypes?: Array<InstanceGroupType>;
		InstanceFleetId?: string;
		InstanceFleetType?: ListInstancesInputInstanceFleetType;
		InstanceStates?: Array<InstanceState>;
		Marker?: string;
	}

	export enum ListInstancesInputInstanceFleetType { MASTER = 0, CORE = 1, TASK = 2 }

	export interface ListSecurityConfigurationsOutput {
		SecurityConfigurations?: Array<SecurityConfigurationSummary>;
		Marker?: string;
	}

	export interface ListSecurityConfigurationsInput {
		Marker?: string;
	}


	/**This output contains the list of steps returned in reverse order. This means that the last step is the first element in the list. */
	export interface ListStepsOutput {
		Steps?: Array<StepSummary>;
		Marker?: string;
	}


	/**This input determines which steps to list. */
	export interface ListStepsInput {
		ClusterId: string;
		StepStates?: Array<StepState>;
		StepIds?: Array<XmlString>;
		Marker?: string;
	}

	export interface ModifyClusterOutput {
		StepConcurrencyLevel?: number;
	}

	export interface ModifyClusterInput {
		ClusterId: string;
		StepConcurrencyLevel?: number;
	}

	export interface ModifyInstanceFleetInput {
		ClusterId: string;

		/**<p>Configuration parameters for an instance fleet modification request.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note> */
		InstanceFleet: InstanceFleetModifyConfig;
	}


	/**Change the size of some instance groups. */
	export interface ModifyInstanceGroupsInput {
		ClusterId?: string;
		InstanceGroups?: Array<InstanceGroupModifyConfig>;
	}

	export interface PutAutoScalingPolicyOutput {
		ClusterId?: string;
		InstanceGroupId?: string;

		/**An automatic scaling policy for a core instance group or task instance group in an Amazon EMR cluster. The automatic scaling policy defines how an instance group dynamically adds and terminates EC2 instances in response to the value of a CloudWatch metric. See <a>PutAutoScalingPolicy</a>. */
		AutoScalingPolicy?: AutoScalingPolicyDescription;
		ClusterArn?: string;
	}

	export interface PutAutoScalingPolicyInput {
		ClusterId: string;
		InstanceGroupId: string;

		/**An automatic scaling policy for a core instance group or task instance group in an Amazon EMR cluster. An automatic scaling policy defines how an instance group dynamically adds and terminates EC2 instances in response to the value of a CloudWatch metric. See <a>PutAutoScalingPolicy</a>. */
		AutoScalingPolicy: AutoScalingPolicy;
	}

	export interface PutBlockPublicAccessConfigurationInput {

		/**A configuration for Amazon EMR block public access. When <code>BlockPublicSecurityGroupRules</code> is set to <code>true</code>, Amazon EMR prevents cluster creation if one of the cluster's security groups has a rule that allows inbound traffic from 0.0.0.0/0 or ::/0 on a port, unless the port is specified as an exception using <code>PermittedPublicSecurityGroupRuleRanges</code>. */
		BlockPublicAccessConfiguration: BlockPublicAccessConfiguration;
	}

	export interface PutManagedScalingPolicyInput {
		ClusterId: string;

		/**Managed scaling policy for an Amazon EMR cluster. The policy specifies the limits for resources that can be added or terminated from a cluster. The policy only applies to the core and task nodes. The master node cannot be scaled after initial configuration. */
		ManagedScalingPolicy: ManagedScalingPolicy;
	}

	export interface RemoveAutoScalingPolicyInput {
		ClusterId: string;
		InstanceGroupId: string;
	}

	export interface RemoveManagedScalingPolicyInput {
		ClusterId: string;
	}


	/**This input identifies a cluster and a list of tags to remove. */
	export interface RemoveTagsInput {
		ResourceId: string;
		TagKeys: Array<String>;
	}


	/** The result of the <a>RunJobFlow</a> operation.  */
	export interface RunJobFlowOutput {
		JobFlowId?: string;
		ClusterArn?: string;
	}


	/** Input to the <a>RunJobFlow</a> operation.  */
	export interface RunJobFlowInput {
		Name: string;
		LogUri?: string;
		LogEncryptionKmsKeyId?: string;
		AdditionalInfo?: string;
		AmiVersion?: string;
		ReleaseLabel?: string;

		/**A description of the Amazon EC2 instance on which the cluster (job flow) runs. A valid JobFlowInstancesConfig must contain either InstanceGroups or InstanceFleets, which is the recommended configuration. They cannot be used together. You may also have MasterInstanceType, SlaveInstanceType, and InstanceCount (all three must be present), but we don't recommend this configuration. */
		Instances: JobFlowInstancesConfig;
		Steps?: Array<StepConfig>;
		BootstrapActions?: Array<BootstrapActionConfig>;
		SupportedProducts?: Array<XmlStringMaxLen256>;
		NewSupportedProducts?: Array<SupportedProductConfig>;
		Applications?: Array<Application>;
		Configurations?: Array<Configuration>;
		VisibleToAllUsers?: boolean;
		JobFlowRole?: string;
		ServiceRole?: string;
		Tags?: Array<Tag>;
		SecurityConfiguration?: string;
		AutoScalingRole?: string;
		ScaleDownBehavior?: RunJobFlowInputScaleDownBehavior;
		CustomAmiId?: string;
		EbsRootVolumeSize?: number;
		RepoUpgradeOnBoot?: RunJobFlowInputRepoUpgradeOnBoot;

		/**Attributes for Kerberos configuration when Kerberos authentication is enabled using a security configuration. For more information see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-kerberos.html">Use Kerberos Authentication</a> in the <i>EMR Management Guide</i>. */
		KerberosAttributes?: KerberosAttributes;
		StepConcurrencyLevel?: number;

		/**Managed scaling policy for an Amazon EMR cluster. The policy specifies the limits for resources that can be added or terminated from a cluster. The policy only applies to the core and task nodes. The master node cannot be scaled after initial configuration. */
		ManagedScalingPolicy?: ManagedScalingPolicy;
	}

	export enum RunJobFlowInputScaleDownBehavior { TERMINATE_AT_INSTANCE_HOUR = 0, TERMINATE_AT_TASK_COMPLETION = 1 }

	export enum RunJobFlowInputRepoUpgradeOnBoot { SECURITY = 0, NONE = 1 }


	/** The input argument to the <a>TerminationProtection</a> operation.  */
	export interface SetTerminationProtectionInput {
		JobFlowIds: Array<XmlString>;
		TerminationProtected: boolean;
	}


	/**The input to the SetVisibleToAllUsers action. */
	export interface SetVisibleToAllUsersInput {
		JobFlowIds: Array<XmlString>;
		VisibleToAllUsers: boolean;
	}


	/** Input to the <a>TerminateJobFlows</a> operation.  */
	export interface TerminateJobFlowsInput {
		JobFlowIds: Array<XmlString>;
	}

	export enum ActionOnFailure { TERMINATE_JOB_FLOW = 0, TERMINATE_CLUSTER = 1, CANCEL_AND_WAIT = 2, CONTINUE = 3 }


	/**<p>The configuration that defines an instance fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note> */
	export interface InstanceFleetConfig {
		Name?: string;
		InstanceFleetType: InstanceFleetConfigInstanceFleetType;
		TargetOnDemandCapacity?: number;
		TargetSpotCapacity?: number;
		InstanceTypeConfigs?: Array<InstanceTypeConfig>;

		/**<p>The launch specification for Spot instances in the fleet, which determines the defined duration and provisioning timeout behavior.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note> */
		LaunchSpecifications?: InstanceFleetProvisioningSpecifications;
	}

	export enum InstanceFleetConfigInstanceFleetType { MASTER = 0, CORE = 1, TASK = 2 }

	export enum AdjustmentType { CHANGE_IN_CAPACITY = 0, PERCENT_CHANGE_IN_CAPACITY = 1, EXACT_CAPACITY = 2 }


	/**<p>With Amazon EMR release version 4.0 and later, the only accepted parameter is the application name. To pass arguments to applications, you use configuration classifications specified using configuration JSON objects. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-configure-apps.html">Configuring Applications</a>.</p> <p>With earlier Amazon EMR releases, the application is any Amazon or third-party software that you can add to the cluster. This structure contains a list of strings that indicates the software to use with the cluster and accepts a user argument list. Amazon EMR accepts and forwards the argument list to the corresponding installation script as bootstrap action argument.</p> */
	export interface Application {
		Name?: string;
		Version?: string;
		Args?: Array<String>;
		AdditionalInfo?: StringMap;
	}


	/**The upper and lower EC2 instance limits for an automatic scaling policy. Automatic scaling activities triggered by automatic scaling rules will not cause an instance group to grow above or below these limits. */
	export interface ScalingConstraints {
		MinCapacity: number;
		MaxCapacity: number;
	}


	/**An automatic scaling policy for a core instance group or task instance group in an Amazon EMR cluster. An automatic scaling policy defines how an instance group dynamically adds and terminates EC2 instances in response to the value of a CloudWatch metric. See <a>PutAutoScalingPolicy</a>. */
	export interface AutoScalingPolicy {

		/**The upper and lower EC2 instance limits for an automatic scaling policy. Automatic scaling activities triggered by automatic scaling rules will not cause an instance group to grow above or below these limits. */
		Constraints: ScalingConstraints;
		Rules: Array<ScalingRule>;
	}


	/**The status of an automatic scaling policy.  */
	export interface AutoScalingPolicyStatus {
		State?: AutoScalingPolicyStatusState;

		/**The reason for an <a>AutoScalingPolicyStatus</a> change. */
		StateChangeReason?: AutoScalingPolicyStateChangeReason;
	}

	export enum AutoScalingPolicyStatusState { PENDING = 0, ATTACHING = 1, ATTACHED = 2, DETACHING = 3, DETACHED = 4, FAILED = 5 }


	/**An automatic scaling policy for a core instance group or task instance group in an Amazon EMR cluster. The automatic scaling policy defines how an instance group dynamically adds and terminates EC2 instances in response to the value of a CloudWatch metric. See <a>PutAutoScalingPolicy</a>. */
	export interface AutoScalingPolicyDescription {

		/**The status of an automatic scaling policy. */
		Status?: AutoScalingPolicyStatus;

		/**The upper and lower EC2 instance limits for an automatic scaling policy. Automatic scaling activities triggered by automatic scaling rules will not cause an instance group to grow above or below these limits. */
		Constraints?: ScalingConstraints;
		Rules?: Array<ScalingRule>;
	}

	export enum AutoScalingPolicyState { PENDING = 0, ATTACHING = 1, ATTACHED = 2, DETACHING = 3, DETACHED = 4, FAILED = 5 }

	export enum AutoScalingPolicyStateChangeReasonCode { USER_REQUEST = 0, PROVISION_FAILURE = 1, CLEANUP_FAILURE = 2 }


	/**The reason for an <a>AutoScalingPolicyStatus</a> change. */
	export interface AutoScalingPolicyStateChangeReason {
		Code?: AutoScalingPolicyStateChangeReasonCode;
		Message?: string;
	}

	export enum AutoScalingPolicyStateChangeReasonCode { USER_REQUEST = 0, PROVISION_FAILURE = 1, CLEANUP_FAILURE = 2 }


	/**A configuration for Amazon EMR block public access. When <code>BlockPublicSecurityGroupRules</code> is set to <code>true</code>, Amazon EMR prevents cluster creation if one of the cluster's security groups has a rule that allows inbound traffic from 0.0.0.0/0 or ::/0 on a port, unless the port is specified as an exception using <code>PermittedPublicSecurityGroupRuleRanges</code>. */
	export interface BlockPublicAccessConfiguration {
		BlockPublicSecurityGroupRules: boolean;
		PermittedPublicSecurityGroupRuleRanges?: Array<PortRange>;
	}


	/**Properties that describe the AWS principal that created the <code>BlockPublicAccessConfiguration</code> using the <code>PutBlockPublicAccessConfiguration</code> action as well as the date and time that the configuration was created. Each time a configuration for block public access is updated, Amazon EMR updates this metadata. */
	export interface BlockPublicAccessConfigurationMetadata {
		CreationDateTime: Date;
		CreatedByArn: string;
	}


	/**Configuration of the script to run during a bootstrap action. */
	export interface ScriptBootstrapActionConfig {
		Path: string;
		Args?: Array<XmlString>;
	}


	/**Configuration of a bootstrap action. */
	export interface BootstrapActionConfig {
		Name: string;

		/**Configuration of the script to run during a bootstrap action. */
		ScriptBootstrapAction: ScriptBootstrapActionConfig;
	}


	/**Reports the configuration of a bootstrap action in a cluster (job flow). */
	export interface BootstrapActionDetail {

		/**Configuration of a bootstrap action. */
		BootstrapActionConfig?: BootstrapActionConfig;
	}

	export enum CancelStepsRequestStatus { SUBMITTED = 0, FAILED = 1 }


	/**Specification of the status of a CancelSteps request. Available only in Amazon EMR version 4.8.0 and later, excluding version 5.0.0. */
	export interface CancelStepsInfo {
		StepId?: string;
		Status?: CancelStepsInfoStatus;
		Reason?: string;
	}

	export enum CancelStepsInfoStatus { SUBMITTED = 0, FAILED = 1 }

	export enum StepCancellationOption { SEND_INTERRUPT = 0, TERMINATE_PROCESS = 1 }

	export enum ComparisonOperator { GREATER_THAN_OR_EQUAL = 0, GREATER_THAN = 1, LESS_THAN = 2, LESS_THAN_OR_EQUAL = 3 }

	export enum Statistic { SAMPLE_COUNT = 0, AVERAGE = 1, SUM = 2, MINIMUM = 3, MAXIMUM = 4 }

	export enum Unit { NONE = 0, SECONDS = 1, MICRO_SECONDS = 2, MILLI_SECONDS = 3, BYTES = 4, KILO_BYTES = 5, MEGA_BYTES = 6, GIGA_BYTES = 7, TERA_BYTES = 8, BITS = 9, KILO_BITS = 10, MEGA_BITS = 11, GIGA_BITS = 12, TERA_BITS = 13, PERCENT = 14, COUNT = 15, BYTES_PER_SECOND = 16, KILO_BYTES_PER_SECOND = 17, MEGA_BYTES_PER_SECOND = 18, GIGA_BYTES_PER_SECOND = 19, TERA_BYTES_PER_SECOND = 20, BITS_PER_SECOND = 21, KILO_BITS_PER_SECOND = 22, MEGA_BITS_PER_SECOND = 23, GIGA_BITS_PER_SECOND = 24, TERA_BITS_PER_SECOND = 25, COUNT_PER_SECOND = 26 }


	/**The definition of a CloudWatch metric alarm, which determines when an automatic scaling activity is triggered. When the defined alarm conditions are satisfied, scaling activity begins. */
	export interface CloudWatchAlarmDefinition {
		ComparisonOperator: CloudWatchAlarmDefinitionComparisonOperator;
		EvaluationPeriods?: number;
		MetricName: string;
		Namespace?: string;
		Period: number;
		Statistic?: CloudWatchAlarmDefinitionStatistic;
		Threshold: number;
		Unit?: CloudWatchAlarmDefinitionUnit;
		Dimensions?: Array<MetricDimension>;
	}

	export enum CloudWatchAlarmDefinitionComparisonOperator { GREATER_THAN_OR_EQUAL = 0, GREATER_THAN = 1, LESS_THAN = 2, LESS_THAN_OR_EQUAL = 3 }

	export enum CloudWatchAlarmDefinitionStatistic { SAMPLE_COUNT = 0, AVERAGE = 1, SUM = 2, MINIMUM = 3, MAXIMUM = 4 }

	export enum CloudWatchAlarmDefinitionUnit { NONE = 0, SECONDS = 1, MICRO_SECONDS = 2, MILLI_SECONDS = 3, BYTES = 4, KILO_BYTES = 5, MEGA_BYTES = 6, GIGA_BYTES = 7, TERA_BYTES = 8, BITS = 9, KILO_BITS = 10, MEGA_BITS = 11, GIGA_BITS = 12, TERA_BITS = 13, PERCENT = 14, COUNT = 15, BYTES_PER_SECOND = 16, KILO_BYTES_PER_SECOND = 17, MEGA_BYTES_PER_SECOND = 18, GIGA_BYTES_PER_SECOND = 19, TERA_BYTES_PER_SECOND = 20, BITS_PER_SECOND = 21, KILO_BITS_PER_SECOND = 22, MEGA_BITS_PER_SECOND = 23, GIGA_BITS_PER_SECOND = 24, TERA_BITS_PER_SECOND = 25, COUNT_PER_SECOND = 26 }


	/**The detailed status of the cluster. */
	export interface ClusterStatus {
		State?: ClusterStatusState;

		/**The reason that the cluster changed to its current state. */
		StateChangeReason?: ClusterStateChangeReason;

		/**Represents the timeline of the cluster's lifecycle. */
		Timeline?: ClusterTimeline;
	}

	export enum ClusterStatusState { STARTING = 0, BOOTSTRAPPING = 1, RUNNING = 2, WAITING = 3, TERMINATING = 4, TERMINATED = 5, TERMINATED_WITH_ERRORS = 6 }


	/**Provides information about the EC2 instances in a cluster grouped by category. For example, key name, subnet ID, IAM instance profile, and so on. */
	export interface Ec2InstanceAttributes {
		Ec2KeyName?: string;
		Ec2SubnetId?: string;
		RequestedEc2SubnetIds?: Array<XmlStringMaxLen256>;
		Ec2AvailabilityZone?: string;
		RequestedEc2AvailabilityZones?: Array<XmlStringMaxLen256>;
		IamInstanceProfile?: string;
		EmrManagedMasterSecurityGroup?: string;
		EmrManagedSlaveSecurityGroup?: string;
		ServiceAccessSecurityGroup?: string;
		AdditionalMasterSecurityGroups?: Array<String>;
		AdditionalSlaveSecurityGroups?: Array<String>;
	}

	export enum InstanceCollectionType { INSTANCE_FLEET = 0, INSTANCE_GROUP = 1 }

	export enum ScaleDownBehavior { TERMINATE_AT_INSTANCE_HOUR = 0, TERMINATE_AT_TASK_COMPLETION = 1 }

	export enum RepoUpgradeOnBoot { SECURITY = 0, NONE = 1 }


	/**Attributes for Kerberos configuration when Kerberos authentication is enabled using a security configuration. For more information see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-kerberos.html">Use Kerberos Authentication</a> in the <i>EMR Management Guide</i>. */
	export interface KerberosAttributes {
		Realm: string;
		KdcAdminPassword: string;
		CrossRealmTrustPrincipalPassword?: string;
		ADDomainJoinUser?: string;
		ADDomainJoinPassword?: string;
	}


	/**The detailed description of the cluster. */
	export interface Cluster {
		Id?: string;
		Name?: string;

		/**The detailed status of the cluster. */
		Status?: ClusterStatus;

		/**Provides information about the EC2 instances in a cluster grouped by category. For example, key name, subnet ID, IAM instance profile, and so on. */
		Ec2InstanceAttributes?: Ec2InstanceAttributes;
		InstanceCollectionType?: ClusterInstanceCollectionType;
		LogUri?: string;
		LogEncryptionKmsKeyId?: string;
		RequestedAmiVersion?: string;
		RunningAmiVersion?: string;
		ReleaseLabel?: string;
		AutoTerminate?: boolean;
		TerminationProtected?: boolean;
		VisibleToAllUsers?: boolean;
		Applications?: Array<Application>;
		Tags?: Array<Tag>;
		ServiceRole?: string;
		NormalizedInstanceHours?: number;
		MasterPublicDnsName?: string;
		Configurations?: Array<Configuration>;
		SecurityConfiguration?: string;
		AutoScalingRole?: string;
		ScaleDownBehavior?: ClusterScaleDownBehavior;
		CustomAmiId?: string;
		EbsRootVolumeSize?: number;
		RepoUpgradeOnBoot?: ClusterRepoUpgradeOnBoot;

		/**Attributes for Kerberos configuration when Kerberos authentication is enabled using a security configuration. For more information see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-kerberos.html">Use Kerberos Authentication</a> in the <i>EMR Management Guide</i>. */
		KerberosAttributes?: KerberosAttributes;
		ClusterArn?: string;
		OutpostArn?: string;
		StepConcurrencyLevel?: number;
	}

	export enum ClusterInstanceCollectionType { INSTANCE_FLEET = 0, INSTANCE_GROUP = 1 }

	export enum ClusterScaleDownBehavior { TERMINATE_AT_INSTANCE_HOUR = 0, TERMINATE_AT_TASK_COMPLETION = 1 }

	export enum ClusterRepoUpgradeOnBoot { SECURITY = 0, NONE = 1 }

	export enum ClusterState { STARTING = 0, BOOTSTRAPPING = 1, RUNNING = 2, WAITING = 3, TERMINATING = 4, TERMINATED = 5, TERMINATED_WITH_ERRORS = 6 }

	export enum ClusterStateChangeReasonCode { INTERNAL_ERROR = 0, VALIDATION_ERROR = 1, INSTANCE_FAILURE = 2, INSTANCE_FLEET_TIMEOUT = 3, BOOTSTRAP_FAILURE = 4, USER_REQUEST = 5, STEP_FAILURE = 6, ALL_STEPS_COMPLETED = 7 }


	/**The reason that the cluster changed to its current state. */
	export interface ClusterStateChangeReason {
		Code?: ClusterStateChangeReasonCode;
		Message?: string;
	}

	export enum ClusterStateChangeReasonCode { INTERNAL_ERROR = 0, VALIDATION_ERROR = 1, INSTANCE_FAILURE = 2, INSTANCE_FLEET_TIMEOUT = 3, BOOTSTRAP_FAILURE = 4, USER_REQUEST = 5, STEP_FAILURE = 6, ALL_STEPS_COMPLETED = 7 }


	/**Represents the timeline of the cluster's lifecycle. */
	export interface ClusterTimeline {
		CreationDateTime?: Date;
		ReadyDateTime?: Date;
		EndDateTime?: Date;
	}


	/**The summary description of the cluster. */
	export interface ClusterSummary {
		Id?: string;
		Name?: string;

		/**The detailed status of the cluster. */
		Status?: ClusterStatus;
		NormalizedInstanceHours?: number;
		ClusterArn?: string;
		OutpostArn?: string;
	}


	/**An entity describing an executable that runs on a cluster. */
	export interface Command {
		Name?: string;
		ScriptPath?: string;
		Args?: Array<String>;
	}

	export enum ComputeLimitsUnitType { InstanceFleetUnits = 0, Instances = 1, VCPU = 2 }


	/** The EC2 unit limits for a managed scaling policy. The managed scaling activity of a cluster can not be above or below these limits. The limit only applies to the core and task nodes. The master node cannot be scaled after initial configuration.  */
	export interface ComputeLimits {
		UnitType: ComputeLimitsUnitType;
		MinimumCapacityUnits: number;
		MaximumCapacityUnits: number;
		MaximumOnDemandCapacityUnits?: number;
	}

	export enum ComputeLimitsUnitType { InstanceFleetUnits = 0, Instances = 1, VCPU = 2 }


	/**<note> <p>Amazon EMR releases 4.x or later.</p> </note> <p>An optional configuration specification to be used when provisioning cluster instances, which can include configurations for applications and software bundled with Amazon EMR. A configuration consists of a classification, properties, and optional nested configurations. A classification refers to an application-specific configuration file. Properties are the settings you want to change in that file. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-configure-apps.html">Configuring Applications</a>.</p> */
	export interface Configuration {
		Classification?: string;
		Configurations?: Array<Configuration>;
		Properties?: StringMap;
	}


	/**This represents a step in a cluster. */
	export interface Step {
		Id?: string;
		Name?: string;

		/**A cluster step consisting of a JAR file whose main function will be executed. The main function submits a job for Hadoop to execute and waits for the job to finish or fail. */
		Config?: HadoopStepConfig;
		ActionOnFailure?: StepActionOnFailure;

		/**The execution status details of the cluster step. */
		Status?: StepStatus;
	}

	export enum StepActionOnFailure { TERMINATE_JOB_FLOW = 0, TERMINATE_CLUSTER = 1, CANCEL_AND_WAIT = 2, CONTINUE = 3 }


	/**EBS volume specifications such as volume type, IOPS, and size (GiB) that will be requested for the EBS volume attached to an EC2 instance in the cluster. */
	export interface VolumeSpecification {
		VolumeType: string;
		Iops?: number;
		SizeInGB: number;
	}


	/**Configuration of requested EBS block device associated with the instance group. */
	export interface EbsBlockDevice {

		/**EBS volume specifications such as volume type, IOPS, and size (GiB) that will be requested for the EBS volume attached to an EC2 instance in the cluster. */
		VolumeSpecification?: VolumeSpecification;
		Device?: string;
	}


	/**Configuration of requested EBS block device associated with the instance group with count of volumes that will be associated to every instance. */
	export interface EbsBlockDeviceConfig {

		/**EBS volume specifications such as volume type, IOPS, and size (GiB) that will be requested for the EBS volume attached to an EC2 instance in the cluster. */
		VolumeSpecification: VolumeSpecification;
		VolumesPerInstance?: number;
	}


	/**The Amazon EBS configuration of a cluster instance. */
	export interface EbsConfiguration {
		EbsBlockDeviceConfigs?: Array<EbsBlockDeviceConfig>;
		EbsOptimized?: boolean;
	}


	/**EBS block device that's attached to an EC2 instance. */
	export interface EbsVolume {
		Device?: string;
		VolumeId?: string;
	}


	/**The details of the step failure. The service attempts to detect the root cause for many common failures. */
	export interface FailureDetails {
		Reason?: string;
		Message?: string;
		LogFile?: string;
	}


	/** Managed scaling policy for an Amazon EMR cluster. The policy specifies the limits for resources that can be added or terminated from a cluster. The policy only applies to the core and task nodes. The master node cannot be scaled after initial configuration.  */
	export interface ManagedScalingPolicy {

		/**The EC2 unit limits for a managed scaling policy. The managed scaling activity of a cluster can not be above or below these limits. The limit only applies to the core and task nodes. The master node cannot be scaled after initial configuration. */
		ComputeLimits?: ComputeLimits;
	}


	/**A job flow step consisting of a JAR file whose main function will be executed. The main function submits a job for Hadoop to execute and waits for the job to finish or fail. */
	export interface HadoopJarStepConfig {
		Properties?: Array<KeyValue>;
		Jar: string;
		MainClass?: string;
		Args?: Array<XmlString>;
	}


	/**A cluster step consisting of a JAR file whose main function will be executed. The main function submits a job for Hadoop to execute and waits for the job to finish or fail. */
	export interface HadoopStepConfig {
		Jar?: string;
		Properties?: StringMap;
		MainClass?: string;
		Args?: Array<String>;
	}


	/**The instance status details. */
	export interface InstanceStatus {
		State?: InstanceStatusState;

		/**The details of the status change reason for the instance. */
		StateChangeReason?: InstanceStateChangeReason;

		/**The timeline of the instance lifecycle. */
		Timeline?: InstanceTimeline;
	}

	export enum InstanceStatusState { AWAITING_FULFILLMENT = 0, PROVISIONING = 1, BOOTSTRAPPING = 2, RUNNING = 3, TERMINATED = 4 }

	export enum MarketType { ON_DEMAND = 0, SPOT = 1 }


	/**Represents an EC2 instance provisioned as part of cluster. */
	export interface Instance {
		Id?: string;
		Ec2InstanceId?: string;
		PublicDnsName?: string;
		PublicIpAddress?: string;
		PrivateDnsName?: string;
		PrivateIpAddress?: string;

		/**The instance status details. */
		Status?: InstanceStatus;
		InstanceGroupId?: string;
		InstanceFleetId?: string;
		Market?: InstanceMarket;
		InstanceType?: string;
		EbsVolumes?: Array<EbsVolume>;
	}

	export enum InstanceMarket { ON_DEMAND = 0, SPOT = 1 }


	/**<p>The status of the instance fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note> */
	export interface InstanceFleetStatus {
		State?: InstanceFleetStatusState;

		/**<p>Provides status change reason details for the instance fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note> */
		StateChangeReason?: InstanceFleetStateChangeReason;

		/**<p>Provides historical timestamps for the instance fleet, including the time of creation, the time it became ready to run jobs, and the time of termination.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note> */
		Timeline?: InstanceFleetTimeline;
	}

	export enum InstanceFleetStatusState { PROVISIONING = 0, BOOTSTRAPPING = 1, RUNNING = 2, RESIZING = 3, SUSPENDED = 4, TERMINATING = 5, TERMINATED = 6 }

	export enum InstanceFleetType { MASTER = 0, CORE = 1, TASK = 2 }


	/**<p>The launch specification for Spot instances in the fleet, which determines the defined duration and provisioning timeout behavior.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note> */
	export interface InstanceFleetProvisioningSpecifications {

		/**<p>The launch specification for Spot instances in the instance fleet, which determines the defined duration and provisioning timeout behavior.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note> */
		SpotSpecification: SpotProvisioningSpecification;
	}


	/**<p>Describes an instance fleet, which is a group of EC2 instances that host a particular node type (master, core, or task) in an Amazon EMR cluster. Instance fleets can consist of a mix of instance types and On-Demand and Spot instances, which are provisioned to meet a defined target capacity. </p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note> */
	export interface InstanceFleet {
		Id?: string;
		Name?: string;

		/**<p>The status of the instance fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note> */
		Status?: InstanceFleetStatus;
		InstanceFleetType?: InstanceFleetInstanceFleetType;
		TargetOnDemandCapacity?: number;
		TargetSpotCapacity?: number;
		ProvisionedOnDemandCapacity?: number;
		ProvisionedSpotCapacity?: number;
		InstanceTypeSpecifications?: Array<InstanceTypeSpecification>;

		/**<p>The launch specification for Spot instances in the fleet, which determines the defined duration and provisioning timeout behavior.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note> */
		LaunchSpecifications?: InstanceFleetProvisioningSpecifications;
	}

	export enum InstanceFleetInstanceFleetType { MASTER = 0, CORE = 1, TASK = 2 }


	/**<p>Configuration parameters for an instance fleet modification request.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note> */
	export interface InstanceFleetModifyConfig {
		InstanceFleetId: string;
		TargetOnDemandCapacity?: number;
		TargetSpotCapacity?: number;
	}


	/**<p>The launch specification for Spot instances in the instance fleet, which determines the defined duration and provisioning timeout behavior.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note> */
	export interface SpotProvisioningSpecification {
		TimeoutDurationMinutes: number;
		TimeoutAction: SpotProvisioningSpecificationTimeoutAction;
		BlockDurationMinutes?: number;
	}

	export enum SpotProvisioningSpecificationTimeoutAction { SWITCH_TO_ON_DEMAND = 0, TERMINATE_CLUSTER = 1 }

	export enum InstanceFleetState { PROVISIONING = 0, BOOTSTRAPPING = 1, RUNNING = 2, RESIZING = 3, SUSPENDED = 4, TERMINATING = 5, TERMINATED = 6 }

	export enum InstanceFleetStateChangeReasonCode { INTERNAL_ERROR = 0, VALIDATION_ERROR = 1, INSTANCE_FAILURE = 2, CLUSTER_TERMINATED = 3 }


	/**<p>Provides status change reason details for the instance fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note> */
	export interface InstanceFleetStateChangeReason {
		Code?: InstanceFleetStateChangeReasonCode;
		Message?: string;
	}

	export enum InstanceFleetStateChangeReasonCode { INTERNAL_ERROR = 0, VALIDATION_ERROR = 1, INSTANCE_FAILURE = 2, CLUSTER_TERMINATED = 3 }


	/**<p>Provides historical timestamps for the instance fleet, including the time of creation, the time it became ready to run jobs, and the time of termination.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note> */
	export interface InstanceFleetTimeline {
		CreationDateTime?: Date;
		ReadyDateTime?: Date;
		EndDateTime?: Date;
	}

	export enum InstanceGroupType { MASTER = 0, CORE = 1, TASK = 2 }


	/**The details of the instance group status. */
	export interface InstanceGroupStatus {
		State?: InstanceGroupStatusState;

		/**The status change reason details for the instance group. */
		StateChangeReason?: InstanceGroupStateChangeReason;

		/**The timeline of the instance group lifecycle. */
		Timeline?: InstanceGroupTimeline;
	}

	export enum InstanceGroupStatusState { PROVISIONING = 0, BOOTSTRAPPING = 1, RUNNING = 2, RECONFIGURING = 3, RESIZING = 4, SUSPENDED = 5, TERMINATING = 6, TERMINATED = 7, ARRESTED = 8, SHUTTING_DOWN = 9, ENDED = 10 }


	/**Policy for customizing shrink operations. Allows configuration of decommissioning timeout and targeted instance shrinking. */
	export interface ShrinkPolicy {
		DecommissionTimeout?: number;

		/**Custom policy for requesting termination protection or termination of specific instances when shrinking an instance group. */
		InstanceResizePolicy?: InstanceResizePolicy;
	}


	/**This entity represents an instance group, which is a group of instances that have common purpose. For example, CORE instance group is used for HDFS. */
	export interface InstanceGroup {
		Id?: string;
		Name?: string;
		Market?: InstanceGroupMarket;
		InstanceGroupType?: InstanceGroupInstanceGroupType;
		BidPrice?: string;
		InstanceType?: string;
		RequestedInstanceCount?: number;
		RunningInstanceCount?: number;

		/**The details of the instance group status. */
		Status?: InstanceGroupStatus;
		Configurations?: Array<Configuration>;
		ConfigurationsVersion?: number;
		LastSuccessfullyAppliedConfigurations?: Array<Configuration>;
		LastSuccessfullyAppliedConfigurationsVersion?: number;
		EbsBlockDevices?: Array<EbsBlockDevice>;
		EbsOptimized?: boolean;

		/**Policy for customizing shrink operations. Allows configuration of decommissioning timeout and targeted instance shrinking. */
		ShrinkPolicy?: ShrinkPolicy;

		/**An automatic scaling policy for a core instance group or task instance group in an Amazon EMR cluster. The automatic scaling policy defines how an instance group dynamically adds and terminates EC2 instances in response to the value of a CloudWatch metric. See <a>PutAutoScalingPolicy</a>. */
		AutoScalingPolicy?: AutoScalingPolicyDescription;
	}

	export enum InstanceGroupMarket { ON_DEMAND = 0, SPOT = 1 }

	export enum InstanceGroupInstanceGroupType { MASTER = 0, CORE = 1, TASK = 2 }

	export enum InstanceRoleType { MASTER = 0, CORE = 1, TASK = 2 }


	/**Configuration defining a new instance group. */
	export interface InstanceGroupConfig {
		Name?: string;
		Market?: InstanceGroupConfigMarket;
		InstanceRole: InstanceGroupConfigInstanceRole;
		BidPrice?: string;
		InstanceType: string;
		InstanceCount: number;
		Configurations?: Array<Configuration>;

		/**The Amazon EBS configuration of a cluster instance. */
		EbsConfiguration?: EbsConfiguration;

		/**An automatic scaling policy for a core instance group or task instance group in an Amazon EMR cluster. An automatic scaling policy defines how an instance group dynamically adds and terminates EC2 instances in response to the value of a CloudWatch metric. See <a>PutAutoScalingPolicy</a>. */
		AutoScalingPolicy?: AutoScalingPolicy;
	}

	export enum InstanceGroupConfigMarket { ON_DEMAND = 0, SPOT = 1 }

	export enum InstanceGroupConfigInstanceRole { MASTER = 0, CORE = 1, TASK = 2 }

	export enum InstanceGroupState { PROVISIONING = 0, BOOTSTRAPPING = 1, RUNNING = 2, RECONFIGURING = 3, RESIZING = 4, SUSPENDED = 5, TERMINATING = 6, TERMINATED = 7, ARRESTED = 8, SHUTTING_DOWN = 9, ENDED = 10 }


	/**Detailed information about an instance group. */
	export interface InstanceGroupDetail {
		InstanceGroupId?: string;
		Name?: string;
		Market: InstanceGroupDetailMarket;
		InstanceRole: InstanceGroupDetailInstanceRole;
		BidPrice?: string;
		InstanceType: string;
		InstanceRequestCount: number;
		InstanceRunningCount: number;
		State: InstanceGroupDetailState;
		LastStateChangeReason?: string;
		CreationDateTime: Date;
		StartDateTime?: Date;
		ReadyDateTime?: Date;
		EndDateTime?: Date;
	}

	export enum InstanceGroupDetailMarket { ON_DEMAND = 0, SPOT = 1 }

	export enum InstanceGroupDetailInstanceRole { MASTER = 0, CORE = 1, TASK = 2 }

	export enum InstanceGroupDetailState { PROVISIONING = 0, BOOTSTRAPPING = 1, RUNNING = 2, RECONFIGURING = 3, RESIZING = 4, SUSPENDED = 5, TERMINATING = 6, TERMINATED = 7, ARRESTED = 8, SHUTTING_DOWN = 9, ENDED = 10 }


	/**Modify the size or configurations of an instance group. */
	export interface InstanceGroupModifyConfig {
		InstanceGroupId: string;
		InstanceCount?: number;
		EC2InstanceIdsToTerminate?: Array<InstanceId>;

		/**Policy for customizing shrink operations. Allows configuration of decommissioning timeout and targeted instance shrinking. */
		ShrinkPolicy?: ShrinkPolicy;
		Configurations?: Array<Configuration>;
	}

	export enum InstanceGroupStateChangeReasonCode { INTERNAL_ERROR = 0, VALIDATION_ERROR = 1, INSTANCE_FAILURE = 2, CLUSTER_TERMINATED = 3 }


	/**The status change reason details for the instance group. */
	export interface InstanceGroupStateChangeReason {
		Code?: InstanceGroupStateChangeReasonCode;
		Message?: string;
	}

	export enum InstanceGroupStateChangeReasonCode { INTERNAL_ERROR = 0, VALIDATION_ERROR = 1, INSTANCE_FAILURE = 2, CLUSTER_TERMINATED = 3 }


	/**The timeline of the instance group lifecycle. */
	export interface InstanceGroupTimeline {
		CreationDateTime?: Date;
		ReadyDateTime?: Date;
		EndDateTime?: Date;
	}


	/**Custom policy for requesting termination protection or termination of specific instances when shrinking an instance group. */
	export interface InstanceResizePolicy {
		InstancesToTerminate?: Array<InstanceId>;
		InstancesToProtect?: Array<InstanceId>;
		InstanceTerminationTimeout?: number;
	}

	export enum InstanceState { AWAITING_FULFILLMENT = 0, PROVISIONING = 1, BOOTSTRAPPING = 2, RUNNING = 3, TERMINATED = 4 }

	export enum InstanceStateChangeReasonCode { INTERNAL_ERROR = 0, VALIDATION_ERROR = 1, INSTANCE_FAILURE = 2, BOOTSTRAP_FAILURE = 3, CLUSTER_TERMINATED = 4 }


	/**The details of the status change reason for the instance. */
	export interface InstanceStateChangeReason {
		Code?: InstanceStateChangeReasonCode;
		Message?: string;
	}

	export enum InstanceStateChangeReasonCode { INTERNAL_ERROR = 0, VALIDATION_ERROR = 1, INSTANCE_FAILURE = 2, BOOTSTRAP_FAILURE = 3, CLUSTER_TERMINATED = 4 }


	/**The timeline of the instance lifecycle. */
	export interface InstanceTimeline {
		CreationDateTime?: Date;
		ReadyDateTime?: Date;
		EndDateTime?: Date;
	}


	/**<p>An instance type configuration for each instance type in an instance fleet, which determines the EC2 instances Amazon EMR attempts to provision to fulfill On-Demand and Spot target capacities. There can be a maximum of 5 instance type configurations in a fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note> */
	export interface InstanceTypeConfig {
		InstanceType: string;
		WeightedCapacity?: number;
		BidPrice?: string;
		BidPriceAsPercentageOfOnDemandPrice?: number;

		/**The Amazon EBS configuration of a cluster instance. */
		EbsConfiguration?: EbsConfiguration;
		Configurations?: Array<Configuration>;
	}


	/**<p>The configuration specification for each instance type in an instance fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note> */
	export interface InstanceTypeSpecification {
		InstanceType?: string;
		WeightedCapacity?: number;
		BidPrice?: string;
		BidPriceAsPercentageOfOnDemandPrice?: number;
		Configurations?: Array<Configuration>;
		EbsBlockDevices?: Array<EbsBlockDevice>;
		EbsOptimized?: boolean;
	}


	/**Describes the status of the cluster (job flow). */
	export interface JobFlowExecutionStatusDetail {

		/**The type of instance. */
		State: JobFlowExecutionStatusDetailState;
		CreationDateTime: Date;
		StartDateTime?: Date;
		ReadyDateTime?: Date;
		EndDateTime?: Date;
		LastStateChangeReason?: string;
	}

	export enum JobFlowExecutionStatusDetailState { STARTING = 0, BOOTSTRAPPING = 1, RUNNING = 2, WAITING = 3, SHUTTING_DOWN = 4, TERMINATED = 5, COMPLETED = 6, FAILED = 7 }


	/**Specify the type of Amazon EC2 instances that the cluster (job flow) runs on. */
	export interface JobFlowInstancesDetail {
		MasterInstanceType: string;
		MasterPublicDnsName?: string;
		MasterInstanceId?: string;
		SlaveInstanceType: string;
		InstanceCount: number;
		InstanceGroups?: Array<InstanceGroupDetail>;
		NormalizedInstanceHours?: number;
		Ec2KeyName?: string;
		Ec2SubnetId?: string;

		/**The Amazon EC2 Availability Zone configuration of the cluster (job flow). */
		Placement?: PlacementType;
		KeepJobFlowAliveWhenNoSteps?: boolean;
		TerminationProtected?: boolean;
		HadoopVersion?: string;
	}


	/**A description of a cluster (job flow). */
	export interface JobFlowDetail {
		JobFlowId: string;
		Name: string;
		LogUri?: string;
		LogEncryptionKmsKeyId?: string;
		AmiVersion?: string;

		/**Describes the status of the cluster (job flow). */
		ExecutionStatusDetail: JobFlowExecutionStatusDetail;

		/**Specify the type of Amazon EC2 instances that the cluster (job flow) runs on. */
		Instances: JobFlowInstancesDetail;
		Steps?: Array<StepDetail>;
		BootstrapActions?: Array<BootstrapActionDetail>;
		SupportedProducts?: Array<XmlStringMaxLen256>;
		VisibleToAllUsers?: boolean;
		JobFlowRole?: string;
		ServiceRole?: string;
		AutoScalingRole?: string;
		ScaleDownBehavior?: JobFlowDetailScaleDownBehavior;
	}

	export enum JobFlowDetailScaleDownBehavior { TERMINATE_AT_INSTANCE_HOUR = 0, TERMINATE_AT_TASK_COMPLETION = 1 }


	/**The type of instance. */
	export enum JobFlowExecutionState { STARTING = 0, BOOTSTRAPPING = 1, RUNNING = 2, WAITING = 3, SHUTTING_DOWN = 4, TERMINATED = 5, COMPLETED = 6, FAILED = 7 }


	/**The Amazon EC2 Availability Zone configuration of the cluster (job flow). */
	export interface PlacementType {
		AvailabilityZone?: string;
		AvailabilityZones?: Array<XmlStringMaxLen256>;
	}


	/**A description of the Amazon EC2 instance on which the cluster (job flow) runs. A valid JobFlowInstancesConfig must contain either InstanceGroups or InstanceFleets, which is the recommended configuration. They cannot be used together. You may also have MasterInstanceType, SlaveInstanceType, and InstanceCount (all three must be present), but we don't recommend this configuration. */
	export interface JobFlowInstancesConfig {
		MasterInstanceType?: string;
		SlaveInstanceType?: string;
		InstanceCount?: number;
		InstanceGroups?: Array<InstanceGroupConfig>;
		InstanceFleets?: Array<InstanceFleetConfig>;
		Ec2KeyName?: string;

		/**The Amazon EC2 Availability Zone configuration of the cluster (job flow). */
		Placement?: PlacementType;
		KeepJobFlowAliveWhenNoSteps?: boolean;
		TerminationProtected?: boolean;
		HadoopVersion?: string;
		Ec2SubnetId?: string;
		Ec2SubnetIds?: Array<XmlStringMaxLen256>;
		EmrManagedMasterSecurityGroup?: string;
		EmrManagedSlaveSecurityGroup?: string;
		ServiceAccessSecurityGroup?: string;
		AdditionalMasterSecurityGroups?: Array<XmlStringMaxLen256>;
		AdditionalSlaveSecurityGroups?: Array<XmlStringMaxLen256>;
	}


	/**A key value pair. */
	export interface KeyValue {
		Key?: string;
		Value?: string;
	}


	/**A CloudWatch dimension, which is specified using a <code>Key</code> (known as a <code>Name</code> in CloudWatch), <code>Value</code> pair. By default, Amazon EMR uses one dimension whose <code>Key</code> is <code>JobFlowID</code> and <code>Value</code> is a variable representing the cluster ID, which is <code>${emr.clusterId}</code>. This enables the rule to bootstrap when the cluster ID becomes available. */
	export interface MetricDimension {
		Key?: string;
		Value?: string;
	}


	/**The list of supported product configurations which allow user-supplied arguments. EMR accepts these arguments and forwards them to the corresponding installation script as bootstrap action arguments. */
	export interface SupportedProductConfig {
		Name?: string;
		Args?: Array<XmlString>;
	}


	/**A list of port ranges that are permitted to allow inbound traffic from all public IP addresses. To specify a single port, use the same value for <code>MinRange</code> and <code>MaxRange</code>. */
	export interface PortRange {
		MinRange: number;
		MaxRange?: number;
	}


	/**An automatic scaling configuration, which describes how the policy adds or removes instances, the cooldown period, and the number of EC2 instances that will be added each time the CloudWatch metric alarm condition is satisfied. */
	export interface SimpleScalingPolicyConfiguration {
		AdjustmentType?: SimpleScalingPolicyConfigurationAdjustmentType;
		ScalingAdjustment: number;
		CoolDown?: number;
	}

	export enum SimpleScalingPolicyConfigurationAdjustmentType { CHANGE_IN_CAPACITY = 0, PERCENT_CHANGE_IN_CAPACITY = 1, EXACT_CAPACITY = 2 }


	/**The type of adjustment the automatic scaling activity makes when triggered, and the periodicity of the adjustment. */
	export interface ScalingAction {
		Market?: ScalingActionMarket;

		/**An automatic scaling configuration, which describes how the policy adds or removes instances, the cooldown period, and the number of EC2 instances that will be added each time the CloudWatch metric alarm condition is satisfied. */
		SimpleScalingPolicyConfiguration: SimpleScalingPolicyConfiguration;
	}

	export enum ScalingActionMarket { ON_DEMAND = 0, SPOT = 1 }


	/**The conditions that trigger an automatic scaling activity. */
	export interface ScalingTrigger {

		/**The definition of a CloudWatch metric alarm, which determines when an automatic scaling activity is triggered. When the defined alarm conditions are satisfied, scaling activity begins. */
		CloudWatchAlarmDefinition: CloudWatchAlarmDefinition;
	}


	/**A scale-in or scale-out rule that defines scaling activity, including the CloudWatch metric alarm that triggers activity, how EC2 instances are added or removed, and the periodicity of adjustments. The automatic scaling policy for an instance group can comprise one or more automatic scaling rules. */
	export interface ScalingRule {
		Name: string;
		Description?: string;

		/**The type of adjustment the automatic scaling activity makes when triggered, and the periodicity of the adjustment. */
		Action: ScalingAction;

		/**The conditions that trigger an automatic scaling activity. */
		Trigger: ScalingTrigger;
	}


	/**The creation date and time, and name, of a security configuration. */
	export interface SecurityConfigurationSummary {
		Name?: string;
		CreationDateTime?: Date;
	}

	export enum SpotProvisioningTimeoutAction { SWITCH_TO_ON_DEMAND = 0, TERMINATE_CLUSTER = 1 }


	/**The execution status details of the cluster step. */
	export interface StepStatus {
		State?: StepStatusState;

		/**The details of the step state change reason. */
		StateChangeReason?: StepStateChangeReason;

		/**The details of the step failure. The service attempts to detect the root cause for many common failures. */
		FailureDetails?: FailureDetails;

		/**The timeline of the cluster step lifecycle. */
		Timeline?: StepTimeline;
	}

	export enum StepStatusState { PENDING = 0, CANCEL_PENDING = 1, RUNNING = 2, COMPLETED = 3, CANCELLED = 4, FAILED = 5, INTERRUPTED = 6 }


	/**Specification of a cluster (job flow) step. */
	export interface StepConfig {
		Name: string;
		ActionOnFailure?: StepConfigActionOnFailure;

		/**A job flow step consisting of a JAR file whose main function will be executed. The main function submits a job for Hadoop to execute and waits for the job to finish or fail. */
		HadoopJarStep: HadoopJarStepConfig;
	}

	export enum StepConfigActionOnFailure { TERMINATE_JOB_FLOW = 0, TERMINATE_CLUSTER = 1, CANCEL_AND_WAIT = 2, CONTINUE = 3 }


	/**The execution state of a step. */
	export interface StepExecutionStatusDetail {
		State: StepExecutionStatusDetailState;
		CreationDateTime: Date;
		StartDateTime?: Date;
		EndDateTime?: Date;
		LastStateChangeReason?: string;
	}

	export enum StepExecutionStatusDetailState { PENDING = 0, RUNNING = 1, CONTINUE = 2, COMPLETED = 3, CANCELLED = 4, FAILED = 5, INTERRUPTED = 6 }


	/**Combines the execution state and configuration of a step. */
	export interface StepDetail {

		/**Specification of a cluster (job flow) step. */
		StepConfig: StepConfig;

		/**The execution state of a step. */
		ExecutionStatusDetail: StepExecutionStatusDetail;
	}

	export enum StepExecutionState { PENDING = 0, RUNNING = 1, CONTINUE = 2, COMPLETED = 3, CANCELLED = 4, FAILED = 5, INTERRUPTED = 6 }

	export enum StepState { PENDING = 0, CANCEL_PENDING = 1, RUNNING = 2, COMPLETED = 3, CANCELLED = 4, FAILED = 5, INTERRUPTED = 6 }

	export enum StepStateChangeReasonCode { NONE = 0 }


	/**The details of the step state change reason. */
	export interface StepStateChangeReason {
		Code?: StepStateChangeReasonCode;
		Message?: string;
	}

	export enum StepStateChangeReasonCode { NONE = 0 }


	/**The timeline of the cluster step lifecycle. */
	export interface StepTimeline {
		CreationDateTime?: Date;
		StartDateTime?: Date;
		EndDateTime?: Date;
	}


	/**The summary of the cluster step. */
	export interface StepSummary {
		Id?: string;
		Name?: string;

		/**A cluster step consisting of a JAR file whose main function will be executed. The main function submits a job for Hadoop to execute and waits for the job to finish or fail. */
		Config?: HadoopStepConfig;
		ActionOnFailure?: StepSummaryActionOnFailure;

		/**The execution status details of the cluster step. */
		Status?: StepStatus;
	}

	export enum StepSummaryActionOnFailure { TERMINATE_JOB_FLOW = 0, TERMINATE_CLUSTER = 1, CANCEL_AND_WAIT = 2, CONTINUE = 3 }


	/**A key/value pair containing user-defined metadata that you can associate with an Amazon EMR resource. Tags make it easier to associate clusters in various ways, such as grouping clusters to track your Amazon EMR resource allocation costs. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-tags.html">Tag Clusters</a>.  */
	export interface Tag {
		Key?: string;
		Value?: string;
	}

	export class DemoClient {
		constructor(private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/') {
		}

		/**
		 * <p>Adds an instance fleet to a running cluster.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x.</p> </note>
		 * Post /#X-Amz-Target=ElasticMapReduce.AddInstanceFleet
		 * @return {AddInstanceFleetOutput} Success
		 */
		AddInstanceFleet(requestBody: AddInstanceFleetInput, headersHandler?: () => {[header: string]: string}): Promise<AddInstanceFleetOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=ElasticMapReduce.AddInstanceFleet', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Adds one or more instance groups to a running cluster.
		 * Post /#X-Amz-Target=ElasticMapReduce.AddInstanceGroups
		 * @return {AddInstanceGroupsOutput} Success
		 */
		AddInstanceGroups(requestBody: AddInstanceGroupsInput, headersHandler?: () => {[header: string]: string}): Promise<AddInstanceGroupsOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=ElasticMapReduce.AddInstanceGroups', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>AddJobFlowSteps adds new steps to a running cluster. A maximum of 256 steps are allowed in each job flow.</p> <p>If your cluster is long-running (such as a Hive data warehouse) or complex, you may require more than 256 steps to process your data. You can bypass the 256-step limitation in various ways, including using SSH to connect to the master node and submitting queries directly to the software running on the master node, such as Hive and Hadoop. For more information on how to do this, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/AddMoreThan256Steps.html">Add More than 256 Steps to a Cluster</a> in the <i>Amazon EMR Management Guide</i>.</p> <p>A step specifies the location of a JAR file stored either on the master node of the cluster or in Amazon S3. Each step is performed by the main function of the main class of the JAR file. The main class can be specified either in the manifest of the JAR or by using the MainFunction parameter of the step.</p> <p>Amazon EMR executes each step in the order listed. For a step to be considered complete, the main function must exit with a zero exit code and all Hadoop jobs started while the step was running must have completed and run successfully.</p> <p>You can only add steps to a cluster that is in one of the following states: STARTING, BOOTSTRAPPING, RUNNING, or WAITING.</p>
		 * Post /#X-Amz-Target=ElasticMapReduce.AddJobFlowSteps
		 * @return {AddJobFlowStepsOutput} Success
		 */
		AddJobFlowSteps(requestBody: AddJobFlowStepsInput, headersHandler?: () => {[header: string]: string}): Promise<AddJobFlowStepsOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=ElasticMapReduce.AddJobFlowSteps', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Adds tags to an Amazon EMR resource. Tags make it easier to associate clusters in various ways, such as grouping clusters to track your Amazon EMR resource allocation costs. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-tags.html">Tag Clusters</a>.
		 * Post /#X-Amz-Target=ElasticMapReduce.AddTags
		 * @return {AddTagsOutput} Success
		 */
		AddTags(requestBody: AddTagsInput, headersHandler?: () => {[header: string]: string}): Promise<AddTagsOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=ElasticMapReduce.AddTags', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Cancels a pending step or steps in a running cluster. Available only in Amazon EMR versions 4.8.0 and later, excluding version 5.0.0. A maximum of 256 steps are allowed in each CancelSteps request. CancelSteps is idempotent but asynchronous; it does not guarantee a step will be canceled, even if the request is successfully submitted. You can only cancel steps that are in a <code>PENDING</code> state.
		 * Post /#X-Amz-Target=ElasticMapReduce.CancelSteps
		 * @return {CancelStepsOutput} Success
		 */
		CancelSteps(requestBody: CancelStepsInput, headersHandler?: () => {[header: string]: string}): Promise<CancelStepsOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=ElasticMapReduce.CancelSteps', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Creates a security configuration, which is stored in the service and can be specified when a cluster is created.
		 * Post /#X-Amz-Target=ElasticMapReduce.CreateSecurityConfiguration
		 * @return {CreateSecurityConfigurationOutput} Success
		 */
		CreateSecurityConfiguration(requestBody: CreateSecurityConfigurationInput, headersHandler?: () => {[header: string]: string}): Promise<CreateSecurityConfigurationOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=ElasticMapReduce.CreateSecurityConfiguration', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Deletes a security configuration.
		 * Post /#X-Amz-Target=ElasticMapReduce.DeleteSecurityConfiguration
		 * @return {DeleteSecurityConfigurationOutput} Success
		 */
		DeleteSecurityConfiguration(requestBody: DeleteSecurityConfigurationInput, headersHandler?: () => {[header: string]: string}): Promise<DeleteSecurityConfigurationOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=ElasticMapReduce.DeleteSecurityConfiguration', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Provides cluster-level details including status, hardware and software configuration, VPC settings, and so on.
		 * Post /#X-Amz-Target=ElasticMapReduce.DescribeCluster
		 * @return {DescribeClusterOutput} Success
		 */
		DescribeCluster(requestBody: DescribeClusterInput, headersHandler?: () => {[header: string]: string}): Promise<DescribeClusterOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=ElasticMapReduce.DescribeCluster', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>This API is deprecated and will eventually be removed. We recommend you use <a>ListClusters</a>, <a>DescribeCluster</a>, <a>ListSteps</a>, <a>ListInstanceGroups</a> and <a>ListBootstrapActions</a> instead.</p> <p>DescribeJobFlows returns a list of job flows that match all of the supplied parameters. The parameters can include a list of job flow IDs, job flow states, and restrictions on job flow creation date and time.</p> <p>Regardless of supplied parameters, only job flows created within the last two months are returned.</p> <p>If no parameters are supplied, then job flows matching either of the following criteria are returned:</p> <ul> <li> <p>Job flows created and completed in the last two weeks</p> </li> <li> <p> Job flows created within the last two months that are in one of the following states: <code>RUNNING</code>, <code>WAITING</code>, <code>SHUTTING_DOWN</code>, <code>STARTING</code> </p> </li> </ul> <p>Amazon EMR can return a maximum of 512 job flow descriptions.</p>
		 * Post /#X-Amz-Target=ElasticMapReduce.DescribeJobFlows
		 * @return {DescribeJobFlowsOutput} Success
		 */
		DescribeJobFlows(requestBody: DescribeJobFlowsInput, headersHandler?: () => {[header: string]: string}): Promise<DescribeJobFlowsOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=ElasticMapReduce.DescribeJobFlows', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Provides the details of a security configuration by returning the configuration JSON.
		 * Post /#X-Amz-Target=ElasticMapReduce.DescribeSecurityConfiguration
		 * @return {DescribeSecurityConfigurationOutput} Success
		 */
		DescribeSecurityConfiguration(requestBody: DescribeSecurityConfigurationInput, headersHandler?: () => {[header: string]: string}): Promise<DescribeSecurityConfigurationOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=ElasticMapReduce.DescribeSecurityConfiguration', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Provides more detail about the cluster step.
		 * Post /#X-Amz-Target=ElasticMapReduce.DescribeStep
		 * @return {DescribeStepOutput} Success
		 */
		DescribeStep(requestBody: DescribeStepInput, headersHandler?: () => {[header: string]: string}): Promise<DescribeStepOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=ElasticMapReduce.DescribeStep', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns the Amazon EMR block public access configuration for your AWS account in the current Region. For more information see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/configure-block-public-access.html">Configure Block Public Access for Amazon EMR</a> in the <i>Amazon EMR Management Guide</i>.
		 * Post /#X-Amz-Target=ElasticMapReduce.GetBlockPublicAccessConfiguration
		 * @return {GetBlockPublicAccessConfigurationOutput} Success
		 */
		GetBlockPublicAccessConfiguration(requestBody: GetBlockPublicAccessConfigurationInput, headersHandler?: () => {[header: string]: string}): Promise<GetBlockPublicAccessConfigurationOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=ElasticMapReduce.GetBlockPublicAccessConfiguration', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Fetches the attached managed scaling policy for an Amazon EMR cluster.
		 * Post /#X-Amz-Target=ElasticMapReduce.GetManagedScalingPolicy
		 * @return {GetManagedScalingPolicyOutput} Success
		 */
		GetManagedScalingPolicy(requestBody: GetManagedScalingPolicyInput, headersHandler?: () => {[header: string]: string}): Promise<GetManagedScalingPolicyOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=ElasticMapReduce.GetManagedScalingPolicy', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Provides information about the bootstrap actions associated with a cluster.
		 * Post /#X-Amz-Target=ElasticMapReduce.ListBootstrapActions
		 * @param {string} Marker Pagination token
		 * @return {ListBootstrapActionsOutput} Success
		 */
		ListBootstrapActions(Marker: string, requestBody: ListBootstrapActionsInput, headersHandler?: () => {[header: string]: string}): Promise<ListBootstrapActionsOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=ElasticMapReduce.ListBootstrapActions?Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Provides the status of all clusters visible to this AWS account. Allows you to filter the list of clusters based on certain criteria; for example, filtering by cluster creation date and time or by status. This call returns a maximum of 50 clusters per call, but returns a marker to track the paging of the cluster list across multiple ListClusters calls.
		 * Post /#X-Amz-Target=ElasticMapReduce.ListClusters
		 * @param {string} Marker Pagination token
		 * @return {ListClustersOutput} Success
		 */
		ListClusters(Marker: string, requestBody: ListClustersInput, headersHandler?: () => {[header: string]: string}): Promise<ListClustersOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=ElasticMapReduce.ListClusters?Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Lists all available details about the instance fleets in a cluster.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
		 * Post /#X-Amz-Target=ElasticMapReduce.ListInstanceFleets
		 * @param {string} Marker Pagination token
		 * @return {ListInstanceFleetsOutput} Success
		 */
		ListInstanceFleets(Marker: string, requestBody: ListInstanceFleetsInput, headersHandler?: () => {[header: string]: string}): Promise<ListInstanceFleetsOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=ElasticMapReduce.ListInstanceFleets?Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Provides all available details about the instance groups in a cluster.
		 * Post /#X-Amz-Target=ElasticMapReduce.ListInstanceGroups
		 * @param {string} Marker Pagination token
		 * @return {ListInstanceGroupsOutput} Success
		 */
		ListInstanceGroups(Marker: string, requestBody: ListInstanceGroupsInput, headersHandler?: () => {[header: string]: string}): Promise<ListInstanceGroupsOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=ElasticMapReduce.ListInstanceGroups?Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Provides information for all active EC2 instances and EC2 instances terminated in the last 30 days, up to a maximum of 2,000. EC2 instances in any of the following states are considered active: AWAITING_FULFILLMENT, PROVISIONING, BOOTSTRAPPING, RUNNING.
		 * Post /#X-Amz-Target=ElasticMapReduce.ListInstances
		 * @param {string} Marker Pagination token
		 * @return {ListInstancesOutput} Success
		 */
		ListInstances(Marker: string, requestBody: ListInstancesInput, headersHandler?: () => {[header: string]: string}): Promise<ListInstancesOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=ElasticMapReduce.ListInstances?Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Lists all the security configurations visible to this account, providing their creation dates and times, and their names. This call returns a maximum of 50 clusters per call, but returns a marker to track the paging of the cluster list across multiple ListSecurityConfigurations calls.
		 * Post /#X-Amz-Target=ElasticMapReduce.ListSecurityConfigurations
		 * @param {string} Marker Pagination token
		 * @return {ListSecurityConfigurationsOutput} Success
		 */
		ListSecurityConfigurations(Marker: string, requestBody: ListSecurityConfigurationsInput, headersHandler?: () => {[header: string]: string}): Promise<ListSecurityConfigurationsOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=ElasticMapReduce.ListSecurityConfigurations?Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Provides a list of steps for the cluster in reverse order unless you specify <code>stepIds</code> with the request of filter by <code>StepStates</code>. You can specify a maximum of ten <code>stepIDs</code>.
		 * Post /#X-Amz-Target=ElasticMapReduce.ListSteps
		 * @param {string} Marker Pagination token
		 * @return {ListStepsOutput} Success
		 */
		ListSteps(Marker: string, requestBody: ListStepsInput, headersHandler?: () => {[header: string]: string}): Promise<ListStepsOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=ElasticMapReduce.ListSteps?Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Modifies the number of steps that can be executed concurrently for the cluster specified using ClusterID.
		 * Post /#X-Amz-Target=ElasticMapReduce.ModifyCluster
		 * @return {ModifyClusterOutput} Success
		 */
		ModifyCluster(requestBody: ModifyClusterInput, headersHandler?: () => {[header: string]: string}): Promise<ModifyClusterOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=ElasticMapReduce.ModifyCluster', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Modifies the target On-Demand and target Spot capacities for the instance fleet with the specified InstanceFleetID within the cluster specified using ClusterID. The call either succeeds or fails atomically.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
		 * Post /#X-Amz-Target=ElasticMapReduce.ModifyInstanceFleet
		 * @return {void} Success
		 */
		ModifyInstanceFleet(requestBody: ModifyInstanceFleetInput, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#X-Amz-Target=ElasticMapReduce.ModifyInstanceFleet', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * ModifyInstanceGroups modifies the number of nodes and configuration settings of an instance group. The input parameters include the new target instance count for the group and the instance group ID. The call will either succeed or fail atomically.
		 * Post /#X-Amz-Target=ElasticMapReduce.ModifyInstanceGroups
		 * @return {void} Success
		 */
		ModifyInstanceGroups(requestBody: ModifyInstanceGroupsInput, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#X-Amz-Target=ElasticMapReduce.ModifyInstanceGroups', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Creates or updates an automatic scaling policy for a core instance group or task instance group in an Amazon EMR cluster. The automatic scaling policy defines how an instance group dynamically adds and terminates EC2 instances in response to the value of a CloudWatch metric.
		 * Post /#X-Amz-Target=ElasticMapReduce.PutAutoScalingPolicy
		 * @return {PutAutoScalingPolicyOutput} Success
		 */
		PutAutoScalingPolicy(requestBody: PutAutoScalingPolicyInput, headersHandler?: () => {[header: string]: string}): Promise<PutAutoScalingPolicyOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=ElasticMapReduce.PutAutoScalingPolicy', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Creates or updates an Amazon EMR block public access configuration for your AWS account in the current Region. For more information see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/configure-block-public-access.html">Configure Block Public Access for Amazon EMR</a> in the <i>Amazon EMR Management Guide</i>.
		 * Post /#X-Amz-Target=ElasticMapReduce.PutBlockPublicAccessConfiguration
		 * @return {PutBlockPublicAccessConfigurationOutput} Success
		 */
		PutBlockPublicAccessConfiguration(requestBody: PutBlockPublicAccessConfigurationInput, headersHandler?: () => {[header: string]: string}): Promise<PutBlockPublicAccessConfigurationOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=ElasticMapReduce.PutBlockPublicAccessConfiguration', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Creates or updates a managed scaling policy for an Amazon EMR cluster. The managed scaling policy defines the limits for resources, such as EC2 instances that can be added or terminated from a cluster. The policy only applies to the core and task nodes. The master node cannot be scaled after initial configuration.
		 * Post /#X-Amz-Target=ElasticMapReduce.PutManagedScalingPolicy
		 * @return {PutManagedScalingPolicyOutput} Success
		 */
		PutManagedScalingPolicy(requestBody: PutManagedScalingPolicyInput, headersHandler?: () => {[header: string]: string}): Promise<PutManagedScalingPolicyOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=ElasticMapReduce.PutManagedScalingPolicy', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Removes an automatic scaling policy from a specified instance group within an EMR cluster.
		 * Post /#X-Amz-Target=ElasticMapReduce.RemoveAutoScalingPolicy
		 * @return {RemoveAutoScalingPolicyOutput} Success
		 */
		RemoveAutoScalingPolicy(requestBody: RemoveAutoScalingPolicyInput, headersHandler?: () => {[header: string]: string}): Promise<RemoveAutoScalingPolicyOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=ElasticMapReduce.RemoveAutoScalingPolicy', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Removes a managed scaling policy from a specified EMR cluster.
		 * Post /#X-Amz-Target=ElasticMapReduce.RemoveManagedScalingPolicy
		 * @return {RemoveManagedScalingPolicyOutput} Success
		 */
		RemoveManagedScalingPolicy(requestBody: RemoveManagedScalingPolicyInput, headersHandler?: () => {[header: string]: string}): Promise<RemoveManagedScalingPolicyOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=ElasticMapReduce.RemoveManagedScalingPolicy', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Removes tags from an Amazon EMR resource. Tags make it easier to associate clusters in various ways, such as grouping clusters to track your Amazon EMR resource allocation costs. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-tags.html">Tag Clusters</a>. </p> <p>The following example removes the stack tag with value Prod from a cluster:</p>
		 * Post /#X-Amz-Target=ElasticMapReduce.RemoveTags
		 * @return {RemoveTagsOutput} Success
		 */
		RemoveTags(requestBody: RemoveTagsInput, headersHandler?: () => {[header: string]: string}): Promise<RemoveTagsOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=ElasticMapReduce.RemoveTags', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>RunJobFlow creates and starts running a new cluster (job flow). The cluster runs the steps specified. After the steps complete, the cluster stops and the HDFS partition is lost. To prevent loss of data, configure the last step of the job flow to store results in Amazon S3. If the <a>JobFlowInstancesConfig</a> <code>KeepJobFlowAliveWhenNoSteps</code> parameter is set to <code>TRUE</code>, the cluster transitions to the WAITING state rather than shutting down after the steps have completed. </p> <p>For additional protection, you can set the <a>JobFlowInstancesConfig</a> <code>TerminationProtected</code> parameter to <code>TRUE</code> to lock the cluster and prevent it from being terminated by API call, user intervention, or in the event of a job flow error.</p> <p>A maximum of 256 steps are allowed in each job flow.</p> <p>If your cluster is long-running (such as a Hive data warehouse) or complex, you may require more than 256 steps to process your data. You can bypass the 256-step limitation in various ways, including using the SSH shell to connect to the master node and submitting queries directly to the software running on the master node, such as Hive and Hadoop. For more information on how to do this, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/AddMoreThan256Steps.html">Add More than 256 Steps to a Cluster</a> in the <i>Amazon EMR Management Guide</i>.</p> <p>For long running clusters, we recommend that you periodically store your results.</p> <note> <p>The instance fleets configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions. The RunJobFlow request can contain InstanceFleets parameters or InstanceGroups parameters, but not both.</p> </note>
		 * Post /#X-Amz-Target=ElasticMapReduce.RunJobFlow
		 * @return {RunJobFlowOutput} Success
		 */
		RunJobFlow(requestBody: RunJobFlowInput, headersHandler?: () => {[header: string]: string}): Promise<RunJobFlowOutput> {
			return fetch(this.baseUri + '/#X-Amz-Target=ElasticMapReduce.RunJobFlow', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>SetTerminationProtection locks a cluster (job flow) so the EC2 instances in the cluster cannot be terminated by user intervention, an API call, or in the event of a job-flow error. The cluster still terminates upon successful completion of the job flow. Calling <code>SetTerminationProtection</code> on a cluster is similar to calling the Amazon EC2 <code>DisableAPITermination</code> API on all EC2 instances in a cluster.</p> <p> <code>SetTerminationProtection</code> is used to prevent accidental termination of a cluster and to ensure that in the event of an error, the instances persist so that you can recover any data stored in their ephemeral instance storage.</p> <p> To terminate a cluster that has been locked by setting <code>SetTerminationProtection</code> to <code>true</code>, you must first unlock the job flow by a subsequent call to <code>SetTerminationProtection</code> in which you set the value to <code>false</code>. </p> <p> For more information, see<a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/UsingEMR_TerminationProtection.html">Managing Cluster Termination</a> in the <i>Amazon EMR Management Guide</i>. </p>
		 * Post /#X-Amz-Target=ElasticMapReduce.SetTerminationProtection
		 * @return {void} Success
		 */
		SetTerminationProtection(requestBody: SetTerminationProtectionInput, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#X-Amz-Target=ElasticMapReduce.SetTerminationProtection', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Sets the <a>Cluster$VisibleToAllUsers</a> value, which determines whether the cluster is visible to all IAM users of the AWS account associated with the cluster. Only the IAM user who created the cluster or the AWS account root user can call this action. The default value, <code>true</code>, indicates that all IAM users in the AWS account can perform cluster actions if they have the proper IAM policy permissions. If set to <code>false</code>, only the IAM user that created the cluster can perform actions. This action works on running clusters. You can override the default <code>true</code> setting when you create a cluster by using the <code>VisibleToAllUsers</code> parameter with <code>RunJobFlow</code>.
		 * Post /#X-Amz-Target=ElasticMapReduce.SetVisibleToAllUsers
		 * @return {void} Success
		 */
		SetVisibleToAllUsers(requestBody: SetVisibleToAllUsersInput, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#X-Amz-Target=ElasticMapReduce.SetVisibleToAllUsers', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * <p>TerminateJobFlows shuts a list of clusters (job flows) down. When a job flow is shut down, any step not yet completed is canceled and the EC2 instances on which the cluster is running are stopped. Any log files not already saved are uploaded to Amazon S3 if a LogUri was specified when the cluster was created.</p> <p>The maximum number of clusters allowed is 10. The call to <code>TerminateJobFlows</code> is asynchronous. Depending on the configuration of the cluster, it may take up to 1-5 minutes for the cluster to completely terminate and release allocated resources, such as Amazon EC2 instances.</p>
		 * Post /#X-Amz-Target=ElasticMapReduce.TerminateJobFlows
		 * @return {void} Success
		 */
		TerminateJobFlows(requestBody: TerminateJobFlowsInput, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#X-Amz-Target=ElasticMapReduce.TerminateJobFlows', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}
	}

}

