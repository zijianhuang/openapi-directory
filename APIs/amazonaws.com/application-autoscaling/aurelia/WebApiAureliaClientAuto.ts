import {HttpClient} from 'aurelia-fetch-client';
import {autoinject} from 'aurelia-framework';
export namespace My_Demo_Client {
	export interface DeleteScalingPolicyRequest {
		PolicyName: string;
		ServiceNamespace: DeleteScalingPolicyRequestServiceNamespace;
		ResourceId: string;
		ScalableDimension: DeleteScalingPolicyRequestScalableDimension;
	}

	export enum DeleteScalingPolicyRequestServiceNamespace { ecs = 0, elasticmapreduce = 1, ec2 = 2, appstream = 3, dynamodb = 4, rds = 5, sagemaker = 6, custom-resource = 7, comprehend = 8, lambda = 9, cassandra = 10 }

	export enum DeleteScalingPolicyRequestScalableDimension { ecs:service:DesiredCount = 0, ec2:spot-fleet-request:TargetCapacity = 1, elasticmapreduce:instancegroup:InstanceCount = 2, appstream:fleet:DesiredCapacity = 3, dynamodb:table:ReadCapacityUnits = 4, dynamodb:table:WriteCapacityUnits = 5, dynamodb:index:ReadCapacityUnits = 6, dynamodb:index:WriteCapacityUnits = 7, rds:cluster:ReadReplicaCount = 8, sagemaker:variant:DesiredInstanceCount = 9, custom-resource:ResourceType:Property = 10, comprehend:document-classifier-endpoint:DesiredInferenceUnits = 11, lambda:function:ProvisionedConcurrency = 12, cassandra:table:ReadCapacityUnits = 13, cassandra:table:WriteCapacityUnits = 14 }

	export interface DeleteScheduledActionRequest {
		ServiceNamespace: DeleteScheduledActionRequestServiceNamespace;
		ScheduledActionName: string;
		ResourceId: string;
		ScalableDimension: DeleteScheduledActionRequestScalableDimension;
	}

	export enum DeleteScheduledActionRequestServiceNamespace { ecs = 0, elasticmapreduce = 1, ec2 = 2, appstream = 3, dynamodb = 4, rds = 5, sagemaker = 6, custom-resource = 7, comprehend = 8, lambda = 9, cassandra = 10 }

	export enum DeleteScheduledActionRequestScalableDimension { ecs:service:DesiredCount = 0, ec2:spot-fleet-request:TargetCapacity = 1, elasticmapreduce:instancegroup:InstanceCount = 2, appstream:fleet:DesiredCapacity = 3, dynamodb:table:ReadCapacityUnits = 4, dynamodb:table:WriteCapacityUnits = 5, dynamodb:index:ReadCapacityUnits = 6, dynamodb:index:WriteCapacityUnits = 7, rds:cluster:ReadReplicaCount = 8, sagemaker:variant:DesiredInstanceCount = 9, custom-resource:ResourceType:Property = 10, comprehend:document-classifier-endpoint:DesiredInferenceUnits = 11, lambda:function:ProvisionedConcurrency = 12, cassandra:table:ReadCapacityUnits = 13, cassandra:table:WriteCapacityUnits = 14 }

	export interface DeregisterScalableTargetRequest {
		ServiceNamespace: DeregisterScalableTargetRequestServiceNamespace;
		ResourceId: string;
		ScalableDimension: DeregisterScalableTargetRequestScalableDimension;
	}

	export enum DeregisterScalableTargetRequestServiceNamespace { ecs = 0, elasticmapreduce = 1, ec2 = 2, appstream = 3, dynamodb = 4, rds = 5, sagemaker = 6, custom-resource = 7, comprehend = 8, lambda = 9, cassandra = 10 }

	export enum DeregisterScalableTargetRequestScalableDimension { ecs:service:DesiredCount = 0, ec2:spot-fleet-request:TargetCapacity = 1, elasticmapreduce:instancegroup:InstanceCount = 2, appstream:fleet:DesiredCapacity = 3, dynamodb:table:ReadCapacityUnits = 4, dynamodb:table:WriteCapacityUnits = 5, dynamodb:index:ReadCapacityUnits = 6, dynamodb:index:WriteCapacityUnits = 7, rds:cluster:ReadReplicaCount = 8, sagemaker:variant:DesiredInstanceCount = 9, custom-resource:ResourceType:Property = 10, comprehend:document-classifier-endpoint:DesiredInferenceUnits = 11, lambda:function:ProvisionedConcurrency = 12, cassandra:table:ReadCapacityUnits = 13, cassandra:table:WriteCapacityUnits = 14 }

	export interface DescribeScalableTargetsResponse {
		ScalableTargets?: Array<ScalableTarget>;
		NextToken?: string;
	}

	export interface DescribeScalableTargetsRequest {
		ServiceNamespace: DescribeScalableTargetsRequestServiceNamespace;
		ResourceIds?: Array<ResourceIdMaxLen1600>;
		ScalableDimension?: DescribeScalableTargetsRequestScalableDimension;
		MaxResults?: number;
		NextToken?: string;
	}

	export enum DescribeScalableTargetsRequestServiceNamespace { ecs = 0, elasticmapreduce = 1, ec2 = 2, appstream = 3, dynamodb = 4, rds = 5, sagemaker = 6, custom-resource = 7, comprehend = 8, lambda = 9, cassandra = 10 }

	export enum DescribeScalableTargetsRequestScalableDimension { ecs:service:DesiredCount = 0, ec2:spot-fleet-request:TargetCapacity = 1, elasticmapreduce:instancegroup:InstanceCount = 2, appstream:fleet:DesiredCapacity = 3, dynamodb:table:ReadCapacityUnits = 4, dynamodb:table:WriteCapacityUnits = 5, dynamodb:index:ReadCapacityUnits = 6, dynamodb:index:WriteCapacityUnits = 7, rds:cluster:ReadReplicaCount = 8, sagemaker:variant:DesiredInstanceCount = 9, custom-resource:ResourceType:Property = 10, comprehend:document-classifier-endpoint:DesiredInferenceUnits = 11, lambda:function:ProvisionedConcurrency = 12, cassandra:table:ReadCapacityUnits = 13, cassandra:table:WriteCapacityUnits = 14 }

	export interface DescribeScalingActivitiesResponse {
		ScalingActivities?: Array<ScalingActivity>;
		NextToken?: string;
	}

	export interface DescribeScalingActivitiesRequest {
		ServiceNamespace: DescribeScalingActivitiesRequestServiceNamespace;
		ResourceId?: string;
		ScalableDimension?: DescribeScalingActivitiesRequestScalableDimension;
		MaxResults?: number;
		NextToken?: string;
	}

	export enum DescribeScalingActivitiesRequestServiceNamespace { ecs = 0, elasticmapreduce = 1, ec2 = 2, appstream = 3, dynamodb = 4, rds = 5, sagemaker = 6, custom-resource = 7, comprehend = 8, lambda = 9, cassandra = 10 }

	export enum DescribeScalingActivitiesRequestScalableDimension { ecs:service:DesiredCount = 0, ec2:spot-fleet-request:TargetCapacity = 1, elasticmapreduce:instancegroup:InstanceCount = 2, appstream:fleet:DesiredCapacity = 3, dynamodb:table:ReadCapacityUnits = 4, dynamodb:table:WriteCapacityUnits = 5, dynamodb:index:ReadCapacityUnits = 6, dynamodb:index:WriteCapacityUnits = 7, rds:cluster:ReadReplicaCount = 8, sagemaker:variant:DesiredInstanceCount = 9, custom-resource:ResourceType:Property = 10, comprehend:document-classifier-endpoint:DesiredInferenceUnits = 11, lambda:function:ProvisionedConcurrency = 12, cassandra:table:ReadCapacityUnits = 13, cassandra:table:WriteCapacityUnits = 14 }

	export interface DescribeScalingPoliciesResponse {
		ScalingPolicies?: Array<ScalingPolicy>;
		NextToken?: string;
	}

	export interface DescribeScalingPoliciesRequest {
		PolicyNames?: Array<ResourceIdMaxLen1600>;
		ServiceNamespace: DescribeScalingPoliciesRequestServiceNamespace;
		ResourceId?: string;
		ScalableDimension?: DescribeScalingPoliciesRequestScalableDimension;
		MaxResults?: number;
		NextToken?: string;
	}

	export enum DescribeScalingPoliciesRequestServiceNamespace { ecs = 0, elasticmapreduce = 1, ec2 = 2, appstream = 3, dynamodb = 4, rds = 5, sagemaker = 6, custom-resource = 7, comprehend = 8, lambda = 9, cassandra = 10 }

	export enum DescribeScalingPoliciesRequestScalableDimension { ecs:service:DesiredCount = 0, ec2:spot-fleet-request:TargetCapacity = 1, elasticmapreduce:instancegroup:InstanceCount = 2, appstream:fleet:DesiredCapacity = 3, dynamodb:table:ReadCapacityUnits = 4, dynamodb:table:WriteCapacityUnits = 5, dynamodb:index:ReadCapacityUnits = 6, dynamodb:index:WriteCapacityUnits = 7, rds:cluster:ReadReplicaCount = 8, sagemaker:variant:DesiredInstanceCount = 9, custom-resource:ResourceType:Property = 10, comprehend:document-classifier-endpoint:DesiredInferenceUnits = 11, lambda:function:ProvisionedConcurrency = 12, cassandra:table:ReadCapacityUnits = 13, cassandra:table:WriteCapacityUnits = 14 }

	export interface DescribeScheduledActionsResponse {
		ScheduledActions?: Array<ScheduledAction>;
		NextToken?: string;
	}

	export interface DescribeScheduledActionsRequest {
		ScheduledActionNames?: Array<ResourceIdMaxLen1600>;
		ServiceNamespace: DescribeScheduledActionsRequestServiceNamespace;
		ResourceId?: string;
		ScalableDimension?: DescribeScheduledActionsRequestScalableDimension;
		MaxResults?: number;
		NextToken?: string;
	}

	export enum DescribeScheduledActionsRequestServiceNamespace { ecs = 0, elasticmapreduce = 1, ec2 = 2, appstream = 3, dynamodb = 4, rds = 5, sagemaker = 6, custom-resource = 7, comprehend = 8, lambda = 9, cassandra = 10 }

	export enum DescribeScheduledActionsRequestScalableDimension { ecs:service:DesiredCount = 0, ec2:spot-fleet-request:TargetCapacity = 1, elasticmapreduce:instancegroup:InstanceCount = 2, appstream:fleet:DesiredCapacity = 3, dynamodb:table:ReadCapacityUnits = 4, dynamodb:table:WriteCapacityUnits = 5, dynamodb:index:ReadCapacityUnits = 6, dynamodb:index:WriteCapacityUnits = 7, rds:cluster:ReadReplicaCount = 8, sagemaker:variant:DesiredInstanceCount = 9, custom-resource:ResourceType:Property = 10, comprehend:document-classifier-endpoint:DesiredInferenceUnits = 11, lambda:function:ProvisionedConcurrency = 12, cassandra:table:ReadCapacityUnits = 13, cassandra:table:WriteCapacityUnits = 14 }

	export interface PutScalingPolicyResponse {
		PolicyARN: string;
		Alarms?: Array<Alarm>;
	}

	export interface PutScalingPolicyRequest {
		PolicyName: string;
		ServiceNamespace: PutScalingPolicyRequestServiceNamespace;
		ResourceId: string;
		ScalableDimension: PutScalingPolicyRequestScalableDimension;
		PolicyType?: PutScalingPolicyRequestPolicyType;

		/**Represents a step scaling policy configuration to use with Application Auto Scaling. */
		StepScalingPolicyConfiguration?: StepScalingPolicyConfiguration;

		/**Represents a target tracking scaling policy configuration to use with Application Auto Scaling. */
		TargetTrackingScalingPolicyConfiguration?: TargetTrackingScalingPolicyConfiguration;
	}

	export enum PutScalingPolicyRequestServiceNamespace { ecs = 0, elasticmapreduce = 1, ec2 = 2, appstream = 3, dynamodb = 4, rds = 5, sagemaker = 6, custom-resource = 7, comprehend = 8, lambda = 9, cassandra = 10 }

	export enum PutScalingPolicyRequestScalableDimension { ecs:service:DesiredCount = 0, ec2:spot-fleet-request:TargetCapacity = 1, elasticmapreduce:instancegroup:InstanceCount = 2, appstream:fleet:DesiredCapacity = 3, dynamodb:table:ReadCapacityUnits = 4, dynamodb:table:WriteCapacityUnits = 5, dynamodb:index:ReadCapacityUnits = 6, dynamodb:index:WriteCapacityUnits = 7, rds:cluster:ReadReplicaCount = 8, sagemaker:variant:DesiredInstanceCount = 9, custom-resource:ResourceType:Property = 10, comprehend:document-classifier-endpoint:DesiredInferenceUnits = 11, lambda:function:ProvisionedConcurrency = 12, cassandra:table:ReadCapacityUnits = 13, cassandra:table:WriteCapacityUnits = 14 }

	export enum PutScalingPolicyRequestPolicyType { StepScaling = 0, TargetTrackingScaling = 1 }

	export interface PutScheduledActionRequest {
		ServiceNamespace: PutScheduledActionRequestServiceNamespace;
		Schedule?: string;
		ScheduledActionName: string;
		ResourceId: string;
		ScalableDimension: PutScheduledActionRequestScalableDimension;
		StartTime?: Date;
		EndTime?: Date;

		/**Represents the minimum and maximum capacity for a scheduled action. */
		ScalableTargetAction?: ScalableTargetAction;
	}

	export enum PutScheduledActionRequestServiceNamespace { ecs = 0, elasticmapreduce = 1, ec2 = 2, appstream = 3, dynamodb = 4, rds = 5, sagemaker = 6, custom-resource = 7, comprehend = 8, lambda = 9, cassandra = 10 }

	export enum PutScheduledActionRequestScalableDimension { ecs:service:DesiredCount = 0, ec2:spot-fleet-request:TargetCapacity = 1, elasticmapreduce:instancegroup:InstanceCount = 2, appstream:fleet:DesiredCapacity = 3, dynamodb:table:ReadCapacityUnits = 4, dynamodb:table:WriteCapacityUnits = 5, dynamodb:index:ReadCapacityUnits = 6, dynamodb:index:WriteCapacityUnits = 7, rds:cluster:ReadReplicaCount = 8, sagemaker:variant:DesiredInstanceCount = 9, custom-resource:ResourceType:Property = 10, comprehend:document-classifier-endpoint:DesiredInferenceUnits = 11, lambda:function:ProvisionedConcurrency = 12, cassandra:table:ReadCapacityUnits = 13, cassandra:table:WriteCapacityUnits = 14 }

	export interface RegisterScalableTargetRequest {
		ServiceNamespace: RegisterScalableTargetRequestServiceNamespace;
		ResourceId: string;
		ScalableDimension: RegisterScalableTargetRequestScalableDimension;
		MinCapacity?: number;
		MaxCapacity?: number;
		RoleARN?: string;

		/**Specifies whether the scaling activities for a scalable target are in a suspended state. */
		SuspendedState?: SuspendedState;
	}

	export enum RegisterScalableTargetRequestServiceNamespace { ecs = 0, elasticmapreduce = 1, ec2 = 2, appstream = 3, dynamodb = 4, rds = 5, sagemaker = 6, custom-resource = 7, comprehend = 8, lambda = 9, cassandra = 10 }

	export enum RegisterScalableTargetRequestScalableDimension { ecs:service:DesiredCount = 0, ec2:spot-fleet-request:TargetCapacity = 1, elasticmapreduce:instancegroup:InstanceCount = 2, appstream:fleet:DesiredCapacity = 3, dynamodb:table:ReadCapacityUnits = 4, dynamodb:table:WriteCapacityUnits = 5, dynamodb:index:ReadCapacityUnits = 6, dynamodb:index:WriteCapacityUnits = 7, rds:cluster:ReadReplicaCount = 8, sagemaker:variant:DesiredInstanceCount = 9, custom-resource:ResourceType:Property = 10, comprehend:document-classifier-endpoint:DesiredInferenceUnits = 11, lambda:function:ProvisionedConcurrency = 12, cassandra:table:ReadCapacityUnits = 13, cassandra:table:WriteCapacityUnits = 14 }

	export enum AdjustmentType { ChangeInCapacity = 0, PercentChangeInCapacity = 1, ExactCapacity = 2 }


	/**Represents a CloudWatch alarm associated with a scaling policy. */
	export interface Alarm {
		AlarmName: string;
		AlarmARN: string;
	}

	export enum MetricStatistic { Average = 0, Minimum = 1, Maximum = 2, SampleCount = 3, Sum = 4 }


	/**<p>Represents a CloudWatch metric of your choosing for a target tracking scaling policy to use with Application Auto Scaling.</p> <p>For information about the available metrics for a service, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html">AWS Services That Publish CloudWatch Metrics</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>To create your customized metric specification:</p> <ul> <li> <p>Add values for each required parameter from CloudWatch. You can use an existing metric, or a new metric that you create. To use your own metric, you must first publish the metric to CloudWatch. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html">Publish Custom Metrics</a> in the <i>Amazon CloudWatch User Guide</i>.</p> </li> <li> <p>Choose a metric that changes proportionally with capacity. The value of the metric should increase or decrease in inverse proportion to the number of capacity units. That is, the value of the metric should decrease when capacity increases, and increase when capacity decreases. </p> </li> </ul> <p>For more information about CloudWatch, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html">Amazon CloudWatch Concepts</a>. </p> */
	export interface CustomizedMetricSpecification {
		MetricName: string;
		Namespace: string;
		Dimensions?: Array<MetricDimension>;
		Statistic: CustomizedMetricSpecificationStatistic;
		Unit?: string;
	}

	export enum CustomizedMetricSpecificationStatistic { Average = 0, Minimum = 1, Maximum = 2, SampleCount = 3, Sum = 4 }

	export enum ServiceNamespace { ecs = 0, elasticmapreduce = 1, ec2 = 2, appstream = 3, dynamodb = 4, rds = 5, sagemaker = 6, custom-resource = 7, comprehend = 8, lambda = 9, cassandra = 10 }

	export enum ScalableDimension { ecs:service:DesiredCount = 0, ec2:spot-fleet-request:TargetCapacity = 1, elasticmapreduce:instancegroup:InstanceCount = 2, appstream:fleet:DesiredCapacity = 3, dynamodb:table:ReadCapacityUnits = 4, dynamodb:table:WriteCapacityUnits = 5, dynamodb:index:ReadCapacityUnits = 6, dynamodb:index:WriteCapacityUnits = 7, rds:cluster:ReadReplicaCount = 8, sagemaker:variant:DesiredInstanceCount = 9, custom-resource:ResourceType:Property = 10, comprehend:document-classifier-endpoint:DesiredInferenceUnits = 11, lambda:function:ProvisionedConcurrency = 12, cassandra:table:ReadCapacityUnits = 13, cassandra:table:WriteCapacityUnits = 14 }

	export enum MetricAggregationType { Average = 0, Minimum = 1, Maximum = 2 }


	/**Describes the dimension names and values associated with a metric. */
	export interface MetricDimension {
		Name: string;
		Value: string;
	}

	export enum MetricType { DynamoDBReadCapacityUtilization = 0, DynamoDBWriteCapacityUtilization = 1, ALBRequestCountPerTarget = 2, RDSReaderAverageCPUUtilization = 3, RDSReaderAverageDatabaseConnections = 4, EC2SpotFleetRequestAverageCPUUtilization = 5, EC2SpotFleetRequestAverageNetworkIn = 6, EC2SpotFleetRequestAverageNetworkOut = 7, SageMakerVariantInvocationsPerInstance = 8, ECSServiceAverageCPUUtilization = 9, ECSServiceAverageMemoryUtilization = 10, AppStreamAverageCapacityUtilization = 11, ComprehendInferenceUtilization = 12, LambdaProvisionedConcurrencyUtilization = 13, CassandraReadCapacityUtilization = 14, CassandraWriteCapacityUtilization = 15 }

	export enum PolicyType { StepScaling = 0, TargetTrackingScaling = 1 }


	/**<p>Represents a predefined metric for a target tracking scaling policy to use with Application Auto Scaling.</p> <p>Only the AWS services that you're using send metrics to Amazon CloudWatch. To determine whether a desired metric already exists by looking up its namespace and dimension using the CloudWatch metrics dashboard in the console, follow the procedure in <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/monitoring-cloudwatch.html">Building Dashboards with CloudWatch</a> in the <i>Application Auto Scaling User Guide</i>.</p> */
	export interface PredefinedMetricSpecification {
		PredefinedMetricType: PredefinedMetricSpecificationPredefinedMetricType;
		ResourceLabel?: string;
	}

	export enum PredefinedMetricSpecificationPredefinedMetricType { DynamoDBReadCapacityUtilization = 0, DynamoDBWriteCapacityUtilization = 1, ALBRequestCountPerTarget = 2, RDSReaderAverageCPUUtilization = 3, RDSReaderAverageDatabaseConnections = 4, EC2SpotFleetRequestAverageCPUUtilization = 5, EC2SpotFleetRequestAverageNetworkIn = 6, EC2SpotFleetRequestAverageNetworkOut = 7, SageMakerVariantInvocationsPerInstance = 8, ECSServiceAverageCPUUtilization = 9, ECSServiceAverageMemoryUtilization = 10, AppStreamAverageCapacityUtilization = 11, ComprehendInferenceUtilization = 12, LambdaProvisionedConcurrencyUtilization = 13, CassandraReadCapacityUtilization = 14, CassandraWriteCapacityUtilization = 15 }


	/**Represents a step scaling policy configuration to use with Application Auto Scaling. */
	export interface StepScalingPolicyConfiguration {
		AdjustmentType?: StepScalingPolicyConfigurationAdjustmentType;
		StepAdjustments?: Array<StepAdjustment>;
		MinAdjustmentMagnitude?: number;
		Cooldown?: number;
		MetricAggregationType?: StepScalingPolicyConfigurationMetricAggregationType;
	}

	export enum StepScalingPolicyConfigurationAdjustmentType { ChangeInCapacity = 0, PercentChangeInCapacity = 1, ExactCapacity = 2 }

	export enum StepScalingPolicyConfigurationMetricAggregationType { Average = 0, Minimum = 1, Maximum = 2 }


	/**Represents a target tracking scaling policy configuration to use with Application Auto Scaling. */
	export interface TargetTrackingScalingPolicyConfiguration {
		TargetValue: number;

		/**<p>Represents a predefined metric for a target tracking scaling policy to use with Application Auto Scaling.</p> <p>Only the AWS services that you're using send metrics to Amazon CloudWatch. To determine whether a desired metric already exists by looking up its namespace and dimension using the CloudWatch metrics dashboard in the console, follow the procedure in <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/monitoring-cloudwatch.html">Building Dashboards with CloudWatch</a> in the <i>Application Auto Scaling User Guide</i>.</p> */
		PredefinedMetricSpecification?: PredefinedMetricSpecification;

		/**<p>Represents a CloudWatch metric of your choosing for a target tracking scaling policy to use with Application Auto Scaling.</p> <p>For information about the available metrics for a service, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html">AWS Services That Publish CloudWatch Metrics</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>To create your customized metric specification:</p> <ul> <li> <p>Add values for each required parameter from CloudWatch. You can use an existing metric, or a new metric that you create. To use your own metric, you must first publish the metric to CloudWatch. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html">Publish Custom Metrics</a> in the <i>Amazon CloudWatch User Guide</i>.</p> </li> <li> <p>Choose a metric that changes proportionally with capacity. The value of the metric should increase or decrease in inverse proportion to the number of capacity units. That is, the value of the metric should decrease when capacity increases, and increase when capacity decreases. </p> </li> </ul> <p>For more information about CloudWatch, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html">Amazon CloudWatch Concepts</a>. </p> */
		CustomizedMetricSpecification?: CustomizedMetricSpecification;
		ScaleOutCooldown?: number;
		ScaleInCooldown?: number;
		DisableScaleIn?: boolean;
	}


	/**Represents the minimum and maximum capacity for a scheduled action. */
	export interface ScalableTargetAction {
		MinCapacity?: number;
		MaxCapacity?: number;
	}


	/**Specifies whether the scaling activities for a scalable target are in a suspended state.  */
	export interface SuspendedState {
		DynamicScalingInSuspended?: boolean;
		DynamicScalingOutSuspended?: boolean;
		ScheduledScalingSuspended?: boolean;
	}


	/**Represents a scalable target. */
	export interface ScalableTarget {
		ServiceNamespace: ScalableTargetServiceNamespace;
		ResourceId: string;
		ScalableDimension: ScalableTargetScalableDimension;
		MinCapacity: number;
		MaxCapacity: number;
		RoleARN: string;
		CreationTime: Date;

		/**Specifies whether the scaling activities for a scalable target are in a suspended state. */
		SuspendedState?: SuspendedState;
	}

	export enum ScalableTargetServiceNamespace { ecs = 0, elasticmapreduce = 1, ec2 = 2, appstream = 3, dynamodb = 4, rds = 5, sagemaker = 6, custom-resource = 7, comprehend = 8, lambda = 9, cassandra = 10 }

	export enum ScalableTargetScalableDimension { ecs:service:DesiredCount = 0, ec2:spot-fleet-request:TargetCapacity = 1, elasticmapreduce:instancegroup:InstanceCount = 2, appstream:fleet:DesiredCapacity = 3, dynamodb:table:ReadCapacityUnits = 4, dynamodb:table:WriteCapacityUnits = 5, dynamodb:index:ReadCapacityUnits = 6, dynamodb:index:WriteCapacityUnits = 7, rds:cluster:ReadReplicaCount = 8, sagemaker:variant:DesiredInstanceCount = 9, custom-resource:ResourceType:Property = 10, comprehend:document-classifier-endpoint:DesiredInferenceUnits = 11, lambda:function:ProvisionedConcurrency = 12, cassandra:table:ReadCapacityUnits = 13, cassandra:table:WriteCapacityUnits = 14 }


	/**Represents a scaling activity. */
	export interface ScalingActivity {
		ActivityId: string;
		ServiceNamespace: ScalingActivityServiceNamespace;
		ResourceId: string;
		ScalableDimension: ScalingActivityScalableDimension;
		Description: string;
		Cause: string;
		StartTime: Date;
		EndTime?: Date;
		StatusCode: ScalingActivityStatusCode;
		StatusMessage?: string;
		Details?: string;
	}

	export enum ScalingActivityServiceNamespace { ecs = 0, elasticmapreduce = 1, ec2 = 2, appstream = 3, dynamodb = 4, rds = 5, sagemaker = 6, custom-resource = 7, comprehend = 8, lambda = 9, cassandra = 10 }

	export enum ScalingActivityScalableDimension { ecs:service:DesiredCount = 0, ec2:spot-fleet-request:TargetCapacity = 1, elasticmapreduce:instancegroup:InstanceCount = 2, appstream:fleet:DesiredCapacity = 3, dynamodb:table:ReadCapacityUnits = 4, dynamodb:table:WriteCapacityUnits = 5, dynamodb:index:ReadCapacityUnits = 6, dynamodb:index:WriteCapacityUnits = 7, rds:cluster:ReadReplicaCount = 8, sagemaker:variant:DesiredInstanceCount = 9, custom-resource:ResourceType:Property = 10, comprehend:document-classifier-endpoint:DesiredInferenceUnits = 11, lambda:function:ProvisionedConcurrency = 12, cassandra:table:ReadCapacityUnits = 13, cassandra:table:WriteCapacityUnits = 14 }

	export enum ScalingActivityStatusCode { Pending = 0, InProgress = 1, Successful = 2, Overridden = 3, Unfulfilled = 4, Failed = 5 }

	export enum ScalingActivityStatusCode { Pending = 0, InProgress = 1, Successful = 2, Overridden = 3, Unfulfilled = 4, Failed = 5 }


	/**Represents a scaling policy to use with Application Auto Scaling. */
	export interface ScalingPolicy {
		PolicyARN: string;
		PolicyName: string;
		ServiceNamespace: ScalingPolicyServiceNamespace;
		ResourceId: string;
		ScalableDimension: ScalingPolicyScalableDimension;
		PolicyType: ScalingPolicyPolicyType;

		/**Represents a step scaling policy configuration to use with Application Auto Scaling. */
		StepScalingPolicyConfiguration?: StepScalingPolicyConfiguration;

		/**Represents a target tracking scaling policy configuration to use with Application Auto Scaling. */
		TargetTrackingScalingPolicyConfiguration?: TargetTrackingScalingPolicyConfiguration;
		Alarms?: Array<Alarm>;
		CreationTime: Date;
	}

	export enum ScalingPolicyServiceNamespace { ecs = 0, elasticmapreduce = 1, ec2 = 2, appstream = 3, dynamodb = 4, rds = 5, sagemaker = 6, custom-resource = 7, comprehend = 8, lambda = 9, cassandra = 10 }

	export enum ScalingPolicyScalableDimension { ecs:service:DesiredCount = 0, ec2:spot-fleet-request:TargetCapacity = 1, elasticmapreduce:instancegroup:InstanceCount = 2, appstream:fleet:DesiredCapacity = 3, dynamodb:table:ReadCapacityUnits = 4, dynamodb:table:WriteCapacityUnits = 5, dynamodb:index:ReadCapacityUnits = 6, dynamodb:index:WriteCapacityUnits = 7, rds:cluster:ReadReplicaCount = 8, sagemaker:variant:DesiredInstanceCount = 9, custom-resource:ResourceType:Property = 10, comprehend:document-classifier-endpoint:DesiredInferenceUnits = 11, lambda:function:ProvisionedConcurrency = 12, cassandra:table:ReadCapacityUnits = 13, cassandra:table:WriteCapacityUnits = 14 }

	export enum ScalingPolicyPolicyType { StepScaling = 0, TargetTrackingScaling = 1 }


	/**Represents a scheduled action. */
	export interface ScheduledAction {
		ScheduledActionName: string;
		ScheduledActionARN: string;
		ServiceNamespace: ScheduledActionServiceNamespace;
		Schedule: string;
		ResourceId: string;
		ScalableDimension?: ScheduledActionScalableDimension;
		StartTime?: Date;
		EndTime?: Date;

		/**Represents the minimum and maximum capacity for a scheduled action. */
		ScalableTargetAction?: ScalableTargetAction;
		CreationTime: Date;
	}

	export enum ScheduledActionServiceNamespace { ecs = 0, elasticmapreduce = 1, ec2 = 2, appstream = 3, dynamodb = 4, rds = 5, sagemaker = 6, custom-resource = 7, comprehend = 8, lambda = 9, cassandra = 10 }

	export enum ScheduledActionScalableDimension { ecs:service:DesiredCount = 0, ec2:spot-fleet-request:TargetCapacity = 1, elasticmapreduce:instancegroup:InstanceCount = 2, appstream:fleet:DesiredCapacity = 3, dynamodb:table:ReadCapacityUnits = 4, dynamodb:table:WriteCapacityUnits = 5, dynamodb:index:ReadCapacityUnits = 6, dynamodb:index:WriteCapacityUnits = 7, rds:cluster:ReadReplicaCount = 8, sagemaker:variant:DesiredInstanceCount = 9, custom-resource:ResourceType:Property = 10, comprehend:document-classifier-endpoint:DesiredInferenceUnits = 11, lambda:function:ProvisionedConcurrency = 12, cassandra:table:ReadCapacityUnits = 13, cassandra:table:WriteCapacityUnits = 14 }


	/**<p>Represents a step adjustment for a <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_StepScalingPolicyConfiguration.html">StepScalingPolicyConfiguration</a>. Describes an adjustment based on the difference between the value of the aggregated CloudWatch metric and the breach threshold that you've defined for the alarm. </p> <p>For the following examples, suppose that you have an alarm with a breach threshold of 50:</p> <ul> <li> <p>To trigger the adjustment when the metric is greater than or equal to 50 and less than 60, specify a lower bound of 0 and an upper bound of 10.</p> </li> <li> <p>To trigger the adjustment when the metric is greater than 40 and less than or equal to 50, specify a lower bound of -10 and an upper bound of 0.</p> </li> </ul> <p>There are a few rules for the step adjustments for your step policy:</p> <ul> <li> <p>The ranges of your step adjustments can't overlap or have a gap.</p> </li> <li> <p>At most one step adjustment can have a null lower bound. If one step adjustment has a negative lower bound, then there must be a step adjustment with a null lower bound.</p> </li> <li> <p>At most one step adjustment can have a null upper bound. If one step adjustment has a positive upper bound, then there must be a step adjustment with a null upper bound.</p> </li> <li> <p>The upper and lower bound can't be null in the same step adjustment.</p> </li> </ul> */
	export interface StepAdjustment {
		MetricIntervalLowerBound?: number;
		MetricIntervalUpperBound?: number;
		ScalingAdjustment: number;
	}

	@autoinject()
	export class DemoClient {
		constructor(private http: HttpClient) {
		}

		/**
		 * <p>Deletes the specified scaling policy for an Application Auto Scaling scalable target.</p> <p>Deleting a step scaling policy deletes the underlying alarm action, but does not delete the CloudWatch alarm associated with the scaling policy, even if it no longer has an associated action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html#delete-step-scaling-policy">Delete a Step Scaling Policy</a> and <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html#delete-target-tracking-policy">Delete a Target Tracking Scaling Policy</a> in the <i>Application Auto Scaling User Guide</i>.</p>
		 * Post /#X-Amz-Target=AnyScaleFrontendService.DeleteScalingPolicy
		 * @return {DeleteScalingPolicyResponse} Success
		 */
		DeleteScalingPolicy(requestBody: DeleteScalingPolicyRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteScalingPolicyResponse> {
			return this.http.post('/#X-Amz-Target=AnyScaleFrontendService.DeleteScalingPolicy', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * <p>Deletes the specified scheduled action for an Application Auto Scaling scalable target.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-scheduled-scaling.html#delete-scheduled-action">Delete a Scheduled Action</a> in the <i>Application Auto Scaling User Guide</i>.</p>
		 * Post /#X-Amz-Target=AnyScaleFrontendService.DeleteScheduledAction
		 * @return {DeleteScheduledActionResponse} Success
		 */
		DeleteScheduledAction(requestBody: DeleteScheduledActionRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteScheduledActionResponse> {
			return this.http.post('/#X-Amz-Target=AnyScaleFrontendService.DeleteScheduledAction', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * <p>Deregisters an Application Auto Scaling scalable target when you have finished using it. To see which resources have been registered, use <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalableTargets.html">DescribeScalableTargets</a>. </p> <note> <p>Deregistering a scalable target deletes the scaling policies and the scheduled actions that are associated with it.</p> </note>
		 * Post /#X-Amz-Target=AnyScaleFrontendService.DeregisterScalableTarget
		 * @return {DeregisterScalableTargetResponse} Success
		 */
		DeregisterScalableTarget(requestBody: DeregisterScalableTargetRequest, headersHandler?: () => {[header: string]: string}): Promise<DeregisterScalableTargetResponse> {
			return this.http.post('/#X-Amz-Target=AnyScaleFrontendService.DeregisterScalableTarget', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * <p>Gets information about the scalable targets in the specified namespace.</p> <p>You can filter the results using <code>ResourceIds</code> and <code>ScalableDimension</code>.</p>
		 * Post /#X-Amz-Target=AnyScaleFrontendService.DescribeScalableTargets
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeScalableTargetsResponse} Success
		 */
		DescribeScalableTargets(MaxResults: string, NextToken: string, requestBody: DescribeScalableTargetsRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeScalableTargetsResponse> {
			return this.http.post('/#X-Amz-Target=AnyScaleFrontendService.DescribeScalableTargets?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * <p>Provides descriptive information about the scaling activities in the specified namespace from the previous six weeks.</p> <p>You can filter the results using <code>ResourceId</code> and <code>ScalableDimension</code>.</p>
		 * Post /#X-Amz-Target=AnyScaleFrontendService.DescribeScalingActivities
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeScalingActivitiesResponse} Success
		 */
		DescribeScalingActivities(MaxResults: string, NextToken: string, requestBody: DescribeScalingActivitiesRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeScalingActivitiesResponse> {
			return this.http.post('/#X-Amz-Target=AnyScaleFrontendService.DescribeScalingActivities?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * <p>Describes the Application Auto Scaling scaling policies for the specified service namespace.</p> <p>You can filter the results using <code>ResourceId</code>, <code>ScalableDimension</code>, and <code>PolicyNames</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html">Target Tracking Scaling Policies</a> and <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html">Step Scaling Policies</a> in the <i>Application Auto Scaling User Guide</i>.</p>
		 * Post /#X-Amz-Target=AnyScaleFrontendService.DescribeScalingPolicies
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeScalingPoliciesResponse} Success
		 */
		DescribeScalingPolicies(MaxResults: string, NextToken: string, requestBody: DescribeScalingPoliciesRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeScalingPoliciesResponse> {
			return this.http.post('/#X-Amz-Target=AnyScaleFrontendService.DescribeScalingPolicies?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * <p>Describes the Application Auto Scaling scheduled actions for the specified service namespace.</p> <p>You can filter the results using the <code>ResourceId</code>, <code>ScalableDimension</code>, and <code>ScheduledActionNames</code> parameters.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-scheduled-scaling.html">Scheduled Scaling</a> in the <i>Application Auto Scaling User Guide</i>.</p>
		 * Post /#X-Amz-Target=AnyScaleFrontendService.DescribeScheduledActions
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeScheduledActionsResponse} Success
		 */
		DescribeScheduledActions(MaxResults: string, NextToken: string, requestBody: DescribeScheduledActionsRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeScheduledActionsResponse> {
			return this.http.post('/#X-Amz-Target=AnyScaleFrontendService.DescribeScheduledActions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * <p>Creates or updates a scaling policy for an Application Auto Scaling scalable target.</p> <p>Each scalable target is identified by a service namespace, resource ID, and scalable dimension. A scaling policy applies to the scalable target identified by those three attributes. You cannot create a scaling policy until you have registered the resource as a scalable target.</p> <p>Multiple scaling policies can be in force at the same time for the same scalable target. You can have one or more target tracking scaling policies, one or more step scaling policies, or both. However, there is a chance that multiple policies could conflict, instructing the scalable target to scale out or in at the same time. Application Auto Scaling gives precedence to the policy that provides the largest capacity for both scale out and scale in. For example, if one policy increases capacity by 3, another policy increases capacity by 200 percent, and the current capacity is 10, Application Auto Scaling uses the policy with the highest calculated capacity (200% of 10 = 20) and scales out to 30. </p> <p>We recommend caution, however, when using target tracking scaling policies with step scaling policies because conflicts between these policies can cause undesirable behavior. For example, if the step scaling policy initiates a scale-in activity before the target tracking policy is ready to scale in, the scale-in activity will not be blocked. After the scale-in activity completes, the target tracking policy could instruct the scalable target to scale out again. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html">Target Tracking Scaling Policies</a> and <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html">Step Scaling Policies</a> in the <i>Application Auto Scaling User Guide</i>.</p> <note> <p>If a scalable target is deregistered, the scalable target is no longer available to execute scaling policies. Any scaling policies that were specified for the scalable target are deleted.</p> </note>
		 * Post /#X-Amz-Target=AnyScaleFrontendService.PutScalingPolicy
		 * @return {PutScalingPolicyResponse} Success
		 */
		PutScalingPolicy(requestBody: PutScalingPolicyRequest, headersHandler?: () => {[header: string]: string}): Promise<PutScalingPolicyResponse> {
			return this.http.post('/#X-Amz-Target=AnyScaleFrontendService.PutScalingPolicy', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * <p>Creates or updates a scheduled action for an Application Auto Scaling scalable target.</p> <p>Each scalable target is identified by a service namespace, resource ID, and scalable dimension. A scheduled action applies to the scalable target identified by those three attributes. You cannot create a scheduled action until you have registered the resource as a scalable target.</p> <p>When start and end times are specified with a recurring schedule using a cron expression or rates, they form the boundaries of when the recurring action starts and stops.</p> <p>To update a scheduled action, specify the parameters that you want to change. If you don't specify start and end times, the old values are deleted.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-scheduled-scaling.html">Scheduled Scaling</a> in the <i>Application Auto Scaling User Guide</i>.</p> <note> <p>If a scalable target is deregistered, the scalable target is no longer available to run scheduled actions. Any scheduled actions that were specified for the scalable target are deleted.</p> </note>
		 * Post /#X-Amz-Target=AnyScaleFrontendService.PutScheduledAction
		 * @return {PutScheduledActionResponse} Success
		 */
		PutScheduledAction(requestBody: PutScheduledActionRequest, headersHandler?: () => {[header: string]: string}): Promise<PutScheduledActionResponse> {
			return this.http.post('/#X-Amz-Target=AnyScaleFrontendService.PutScheduledAction', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * <p>Registers or updates a scalable target. </p> <p>A scalable target is a resource that Application Auto Scaling can scale out and scale in. Scalable targets are uniquely identified by the combination of resource ID, scalable dimension, and namespace. </p> <p>When you register a new scalable target, you must specify values for minimum and maximum capacity. Application Auto Scaling scaling policies will not scale capacity to values that are outside of this range.</p> <p>After you register a scalable target, you do not need to register it again to use other Application Auto Scaling operations. To see which resources have been registered, use <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalableTargets.html">DescribeScalableTargets</a>. You can also view the scaling policies for a service namespace by using <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalableTargets.html">DescribeScalableTargets</a>. If you no longer need a scalable target, you can deregister it by using <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DeregisterScalableTarget.html">DeregisterScalableTarget</a>.</p> <p>To update a scalable target, specify the parameters that you want to change. Include the parameters that identify the scalable target: resource ID, scalable dimension, and namespace. Any parameters that you don't specify are not changed by this update request. </p>
		 * Post /#X-Amz-Target=AnyScaleFrontendService.RegisterScalableTarget
		 * @return {RegisterScalableTargetResponse} Success
		 */
		RegisterScalableTarget(requestBody: RegisterScalableTargetRequest, headersHandler?: () => {[header: string]: string}): Promise<RegisterScalableTargetResponse> {
			return this.http.post('/#X-Amz-Target=AnyScaleFrontendService.RegisterScalableTarget', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}
	}

}

