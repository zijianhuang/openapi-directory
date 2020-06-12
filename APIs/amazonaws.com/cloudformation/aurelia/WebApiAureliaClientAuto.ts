import {HttpClient} from 'aurelia-fetch-client';
import {autoinject} from 'aurelia-framework';
export namespace My_Demo_Client {

	/**The output for the <a>CreateChangeSet</a> action. */
	export interface CreateChangeSetOutput {
		Id?: string;
		StackId?: string;
	}


	/**The Parameter data type. */
	export interface Parameter {
		ParameterKey?: string;
		ParameterValue?: string;
		UsePreviousValue?: boolean;
		ResolvedValue?: string;
	}

	export enum Capability { CAPABILITY_IAM = 0, CAPABILITY_NAMED_IAM = 1, CAPABILITY_AUTO_EXPAND = 2 }


	/**The Tag type enables you to specify a key-value pair that can be used to store information about an AWS CloudFormation stack. */
	export interface Tag {
		Key: string;
		Value: string;
	}


	/**Describes the target resource of an import operation. */
	export interface ResourceToImport {
		ResourceType: string;
		LogicalResourceId: string;
		ResourceIdentifier: ResourceIdentifierProperties;
	}


	/**The output for a <a>CreateStack</a> action. */
	export interface CreateStackOutput {
		StackId?: string;
	}

	export interface CreateStackInstancesOutput {
		OperationId?: string;
	}

	export interface CreateStackSetOutput {
		StackSetId?: string;
	}

	export interface DeleteStackInstancesOutput {
		OperationId?: string;
	}


	/**The output for the <a>DescribeAccountLimits</a> action. */
	export interface DescribeAccountLimitsOutput {
		AccountLimits?: Array<AccountLimit>;
		NextToken?: string;
	}


	/**The output for the <a>DescribeChangeSet</a> action. */
	export interface DescribeChangeSetOutput {
		ChangeSetName?: string;
		ChangeSetId?: string;
		StackId?: string;
		StackName?: string;
		Description?: string;
		Parameters?: Array<Parameter>;
		CreationTime?: Date;
		ExecutionStatus?: DescribeChangeSetOutputExecutionStatus;
		Status?: DescribeChangeSetOutputStatus;
		StatusReason?: string;
		NotificationARNs?: Array<NotificationARN>;

		/**<p>Structure containing the rollback triggers for AWS CloudFormation to monitor during stack creation and updating operations, and for the specified monitoring period afterwards.</p> <p>Rollback triggers enable you to have AWS CloudFormation monitor the state of your application during stack creation and updating, and to roll back that operation if the application breaches the threshold of any of the alarms you've specified. For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-rollback-triggers.html">Monitor and Roll Back Stack Operations</a>.</p> */
		RollbackConfiguration?: RollbackConfiguration;
		Capabilities?: Array<Capability>;
		Tags?: Array<Tag>;
		Changes?: Array<Change>;
		NextToken?: string;
	}

	export enum DescribeChangeSetOutputExecutionStatus { UNAVAILABLE = 0, AVAILABLE = 1, EXECUTE_IN_PROGRESS = 2, EXECUTE_COMPLETE = 3, EXECUTE_FAILED = 4, OBSOLETE = 5 }

	export enum DescribeChangeSetOutputStatus { CREATE_PENDING = 0, CREATE_IN_PROGRESS = 1, CREATE_COMPLETE = 2, DELETE_COMPLETE = 3, FAILED = 4 }

	export interface DescribeStackDriftDetectionStatusOutput {
		StackId: string;
		StackDriftDetectionId: string;
		StackDriftStatus?: DescribeStackDriftDetectionStatusOutputStackDriftStatus;
		DetectionStatus: DescribeStackDriftDetectionStatusOutputDetectionStatus;
		DetectionStatusReason?: string;
		DriftedStackResourceCount?: number;
		Timestamp: Date;
	}

	export enum DescribeStackDriftDetectionStatusOutputStackDriftStatus { DRIFTED = 0, IN_SYNC = 1, UNKNOWN = 2, NOT_CHECKED = 3 }

	export enum DescribeStackDriftDetectionStatusOutputDetectionStatus { DETECTION_IN_PROGRESS = 0, DETECTION_FAILED = 1, DETECTION_COMPLETE = 2 }


	/**The output for a <a>DescribeStackEvents</a> action. */
	export interface DescribeStackEventsOutput {
		StackEvents?: Array<StackEvent>;
		NextToken?: string;
	}

	export interface DescribeStackInstanceOutput {

		/**An AWS CloudFormation stack, in a specific account and Region, that's part of a stack set operation. A stack instance is a reference to an attempted or actual stack in a given account within a given Region. A stack instance can exist without a stack—for example, if the stack couldn't be created for some reason. A stack instance is associated with only one stack set. Each stack instance contains the ID of its associated stack set, as well as the ID of the actual stack and the stack status. */
		StackInstance?: StackInstance;
	}


	/**The output for a <a>DescribeStackResource</a> action. */
	export interface DescribeStackResourceOutput {

		/**Contains detailed information about the specified stack resource. */
		StackResourceDetail?: StackResourceDetail;
	}

	export interface DescribeStackResourceDriftsOutput {
		StackResourceDrifts: Array<StackResourceDrift>;
		NextToken?: string;
	}

	export enum StackResourceDriftStatus { IN_SYNC = 0, MODIFIED = 1, DELETED = 2, NOT_CHECKED = 3 }


	/**The output for a <a>DescribeStackResources</a> action. */
	export interface DescribeStackResourcesOutput {
		StackResources?: Array<StackResource>;
	}

	export interface DescribeStackSetOutput {

		/**A structure that contains information about a stack set. A stack set enables you to provision stacks into AWS accounts and across Regions by using a single CloudFormation template. In the stack set, you specify the template to use, as well as any parameters and capabilities that the template requires. */
		StackSet?: StackSet;
	}

	export interface DescribeStackSetOperationOutput {

		/**The structure that contains information about a stack set operation. */
		StackSetOperation?: StackSetOperation;
	}


	/**The output for a <a>DescribeStacks</a> action. */
	export interface DescribeStacksOutput {
		Stacks?: Array<Stack>;
		NextToken?: string;
	}

	export interface DescribeTypeOutput {
		Arn?: string;
		Type?: DescribeTypeOutputType;
		TypeName?: string;
		DefaultVersionId?: string;
		IsDefaultVersion?: boolean;
		Description?: string;
		Schema?: string;
		ProvisioningType?: DescribeTypeOutputProvisioningType;
		DeprecatedStatus?: DescribeTypeOutputDeprecatedStatus;

		/**Contains logging configuration information for a type. */
		LoggingConfig?: LoggingConfig;
		ExecutionRoleArn?: string;
		Visibility?: DescribeTypeOutputVisibility;
		SourceUrl?: string;
		DocumentationUrl?: string;
		LastUpdated?: Date;
		TimeCreated?: Date;
	}

	export enum DescribeTypeOutputType { RESOURCE = 0 }

	export enum DescribeTypeOutputProvisioningType { NON_PROVISIONABLE = 0, IMMUTABLE = 1, FULLY_MUTABLE = 2 }

	export enum DescribeTypeOutputDeprecatedStatus { LIVE = 0, DEPRECATED = 1 }

	export enum DescribeTypeOutputVisibility { PUBLIC = 0, PRIVATE = 1 }

	export interface DescribeTypeRegistrationOutput {
		ProgressStatus?: DescribeTypeRegistrationOutputProgressStatus;
		Description?: string;
		TypeArn?: string;
		TypeVersionArn?: string;
	}

	export enum DescribeTypeRegistrationOutputProgressStatus { COMPLETE = 0, IN_PROGRESS = 1, FAILED = 2 }

	export interface DetectStackDriftOutput {
		StackDriftDetectionId: string;
	}

	export interface DetectStackResourceDriftOutput {

		/**<p>Contains the drift information for a resource that has been checked for drift. This includes actual and expected property values for resources in which AWS CloudFormation has detected drift. Only resource properties explicitly defined in the stack template are checked for drift. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to Stacks and Resources</a>.</p> <p>Resources that do not currently support drift detection cannot be checked. For a list of resources that support drift detection, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p> <p>Use <a>DetectStackResourceDrift</a> to detect drift on individual resources, or <a>DetectStackDrift</a> to detect drift on all resources in a given stack that support drift detection.</p> */
		StackResourceDrift: StackResourceDrift;
	}

	export interface DetectStackSetDriftOutput {
		OperationId?: string;
	}


	/**The output for a <a>EstimateTemplateCost</a> action. */
	export interface EstimateTemplateCostOutput {
		Url?: string;
	}


	/**The output for the <a>GetStackPolicy</a> action. */
	export interface GetStackPolicyOutput {
		StackPolicyBody?: string;
	}


	/**The output for <a>GetTemplate</a> action. */
	export interface GetTemplateOutput {
		TemplateBody?: string;
		StagesAvailable?: Array<TemplateStage>;
	}


	/**The output for the <a>GetTemplateSummary</a> action. */
	export interface GetTemplateSummaryOutput {
		Parameters?: Array<ParameterDeclaration>;
		Description?: string;
		Capabilities?: Array<Capability>;
		CapabilitiesReason?: string;
		ResourceTypes?: Array<ResourceType>;
		Version?: string;
		Metadata?: string;
		DeclaredTransforms?: Array<TransformName>;
		ResourceIdentifierSummaries?: Array<ResourceIdentifierSummary>;
	}


	/**The output for the <a>ListChangeSets</a> action. */
	export interface ListChangeSetsOutput {
		Summaries?: Array<ChangeSetSummary>;
		NextToken?: string;
	}

	export interface ListExportsOutput {
		Exports?: Array<Export>;
		NextToken?: string;
	}

	export interface ListImportsOutput {
		Imports?: Array<StackName>;
		NextToken?: string;
	}

	export interface ListStackInstancesOutput {
		Summaries?: Array<StackInstanceSummary>;
		NextToken?: string;
	}


	/**The output for a <a>ListStackResources</a> action. */
	export interface ListStackResourcesOutput {
		StackResourceSummaries?: Array<StackResourceSummary>;
		NextToken?: string;
	}

	export interface ListStackSetOperationResultsOutput {
		Summaries?: Array<StackSetOperationResultSummary>;
		NextToken?: string;
	}

	export interface ListStackSetOperationsOutput {
		Summaries?: Array<StackSetOperationSummary>;
		NextToken?: string;
	}

	export interface ListStackSetsOutput {
		Summaries?: Array<StackSetSummary>;
		NextToken?: string;
	}


	/**The output for <a>ListStacks</a> action. */
	export interface ListStacksOutput {
		StackSummaries?: Array<StackSummary>;
		NextToken?: string;
	}

	export enum StackStatus { CREATE_IN_PROGRESS = 0, CREATE_FAILED = 1, CREATE_COMPLETE = 2, ROLLBACK_IN_PROGRESS = 3, ROLLBACK_FAILED = 4, ROLLBACK_COMPLETE = 5, DELETE_IN_PROGRESS = 6, DELETE_FAILED = 7, DELETE_COMPLETE = 8, UPDATE_IN_PROGRESS = 9, UPDATE_COMPLETE_CLEANUP_IN_PROGRESS = 10, UPDATE_COMPLETE = 11, UPDATE_ROLLBACK_IN_PROGRESS = 12, UPDATE_ROLLBACK_FAILED = 13, UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS = 14, UPDATE_ROLLBACK_COMPLETE = 15, REVIEW_IN_PROGRESS = 16, IMPORT_IN_PROGRESS = 17, IMPORT_COMPLETE = 18, IMPORT_ROLLBACK_IN_PROGRESS = 19, IMPORT_ROLLBACK_FAILED = 20, IMPORT_ROLLBACK_COMPLETE = 21 }

	export interface ListTypeRegistrationsOutput {
		RegistrationTokenList?: Array<RegistrationToken>;
		NextToken?: string;
	}

	export interface ListTypeVersionsOutput {
		TypeVersionSummaries?: Array<TypeVersionSummary>;
		NextToken?: string;
	}

	export interface ListTypesOutput {
		TypeSummaries?: Array<TypeSummary>;
		NextToken?: string;
	}

	export interface RegisterTypeOutput {
		RegistrationToken?: string;
	}


	/**The output for an <a>UpdateStack</a> action. */
	export interface UpdateStackOutput {
		StackId?: string;
	}

	export interface UpdateStackInstancesOutput {
		OperationId?: string;
	}

	export interface UpdateStackSetOutput {
		OperationId?: string;
	}

	export interface UpdateTerminationProtectionOutput {
		StackId?: string;
	}


	/**The output for <a>ValidateTemplate</a> action. */
	export interface ValidateTemplateOutput {
		Parameters?: Array<TemplateParameter>;
		Description?: string;
		Capabilities?: Array<Capability>;
		CapabilitiesReason?: string;
		DeclaredTransforms?: Array<TransformName>;
	}

	export enum AccountGateStatus { SUCCEEDED = 0, FAILED = 1, SKIPPED = 2 }


	/**<p>Structure that contains the results of the account gate function which AWS CloudFormation invokes, if present, before proceeding with a stack set operation in an account and Region.</p> <p>For each account and Region, AWS CloudFormation lets you specify a Lamdba function that encapsulates any requirements that must be met before CloudFormation can proceed with a stack set operation in that account and Region. CloudFormation invokes the function each time a stack set operation is requested for that account and Region; if the function returns <code>FAILED</code>, CloudFormation cancels the operation in that account and Region, and sets the stack set operation result status for that account and Region to <code>FAILED</code>. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-account-gating.html">Configuring a target account gate</a>.</p> */
	export interface AccountGateResult {
		Status?: AccountGateResultStatus;
		StatusReason?: string;
	}

	export enum AccountGateResultStatus { SUCCEEDED = 0, FAILED = 1, SKIPPED = 2 }


	/**<p>The AccountLimit data type. </p> <p>CloudFormation has the following limits per account:</p> <ul> <li> <p>Number of concurrent resources</p> </li> <li> <p>Number of stacks</p> </li> <li> <p>Number of stack outputs</p> </li> </ul> <p>For more information about these account limits, and other CloudFormation limits, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cloudformation-limits.html">AWS CloudFormation Limits</a> in the <i>AWS CloudFormation User Guide</i>.</p> */
	export interface AccountLimit {
		Name?: string;
		Value?: number;
	}


	/**[<code>Service-managed</code> permissions] Describes whether StackSets automatically deploys to AWS Organizations accounts that are added to a target organization or organizational unit (OU). */
	export interface AutoDeployment {
		Enabled?: boolean;
		RetainStacksOnAccountRemoval?: boolean;
	}


	/**The input for the <a>CancelUpdateStack</a> action. */
	export interface CancelUpdateStackInput {
		StackName: string;
		ClientRequestToken?: string;
	}

	export enum ChangeType { Resource = 0 }


	/**The <code>ResourceChange</code> structure describes the resource and the action that AWS CloudFormation will perform on it if you execute this change set. */
	export interface ResourceChange {
		Action?: ResourceChangeAction;
		LogicalResourceId?: string;
		PhysicalResourceId?: string;
		ResourceType?: string;
		Replacement?: ResourceChangeReplacement;
		Scope?: Array<ResourceAttribute>;
		Details?: Array<ResourceChangeDetail>;
	}

	export enum ResourceChangeAction { Add = 0, Modify = 1, Remove = 2, Import = 3 }

	export enum ResourceChangeReplacement { True = 0, False = 1, Conditional = 2 }


	/**The <code>Change</code> structure describes the changes AWS CloudFormation will perform if you execute the change set. */
	export interface Change {
		Type?: ChangeType;

		/**The <code>ResourceChange</code> structure describes the resource and the action that AWS CloudFormation will perform on it if you execute this change set. */
		ResourceChange?: ResourceChange;
	}

	export enum ChangeType { Resource = 0 }

	export enum ChangeAction { Add = 0, Modify = 1, Remove = 2, Import = 3 }

	export enum ChangeSetStatus { CREATE_PENDING = 0, CREATE_IN_PROGRESS = 1, CREATE_COMPLETE = 2, DELETE_COMPLETE = 3, FAILED = 4 }


	/**The <code>ChangeSetSummary</code> structure describes a change set, its status, and the stack with which it's associated. */
	export interface ChangeSetSummary {
		StackId?: string;
		StackName?: string;
		ChangeSetId?: string;
		ChangeSetName?: string;
		ExecutionStatus?: ChangeSetSummaryExecutionStatus;
		Status?: ChangeSetSummaryStatus;
		StatusReason?: string;
		CreationTime?: Date;
		Description?: string;
	}

	export enum ChangeSetSummaryExecutionStatus { UNAVAILABLE = 0, AVAILABLE = 1, EXECUTE_IN_PROGRESS = 2, EXECUTE_COMPLETE = 3, EXECUTE_FAILED = 4, OBSOLETE = 5 }

	export enum ChangeSetSummaryStatus { CREATE_PENDING = 0, CREATE_IN_PROGRESS = 1, CREATE_COMPLETE = 2, DELETE_COMPLETE = 3, FAILED = 4 }

	export enum ExecutionStatus { UNAVAILABLE = 0, AVAILABLE = 1, EXECUTE_IN_PROGRESS = 2, EXECUTE_COMPLETE = 3, EXECUTE_FAILED = 4, OBSOLETE = 5 }

	export enum ChangeSetType { CREATE = 0, UPDATE = 1, IMPORT = 2 }

	export enum ChangeSource { ResourceReference = 0, ParameterReference = 1, ResourceAttribute = 2, DirectModification = 3, Automatic = 4 }


	/**The input for the <a>ContinueUpdateRollback</a> action. */
	export interface ContinueUpdateRollbackInput {
		StackName: string;
		RoleARN?: string;
		ResourcesToSkip?: Array<ResourceToSkip>;
		ClientRequestToken?: string;
	}


	/**<p>Structure containing the rollback triggers for AWS CloudFormation to monitor during stack creation and updating operations, and for the specified monitoring period afterwards.</p> <p>Rollback triggers enable you to have AWS CloudFormation monitor the state of your application during stack creation and updating, and to roll back that operation if the application breaches the threshold of any of the alarms you've specified. For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-rollback-triggers.html">Monitor and Roll Back Stack Operations</a>.</p> */
	export interface RollbackConfiguration {
		RollbackTriggers?: Array<RollbackTrigger>;
		MonitoringTimeInMinutes?: number;
	}


	/**The input for the <a>CreateChangeSet</a> action. */
	export interface CreateChangeSetInput {
		StackName: string;
		TemplateBody?: string;
		TemplateURL?: string;
		UsePreviousTemplate?: boolean;
		Parameters?: Array<Parameter>;
		Capabilities?: Array<Capability>;
		ResourceTypes?: Array<ResourceType>;
		RoleARN?: string;

		/**<p>Structure containing the rollback triggers for AWS CloudFormation to monitor during stack creation and updating operations, and for the specified monitoring period afterwards.</p> <p>Rollback triggers enable you to have AWS CloudFormation monitor the state of your application during stack creation and updating, and to roll back that operation if the application breaches the threshold of any of the alarms you've specified. For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-rollback-triggers.html">Monitor and Roll Back Stack Operations</a>.</p> */
		RollbackConfiguration?: RollbackConfiguration;
		NotificationARNs?: Array<NotificationARN>;
		Tags?: Array<Tag>;
		ChangeSetName: string;
		ClientToken?: string;
		Description?: string;
		ChangeSetType?: CreateChangeSetInputChangeSetType;
		ResourcesToImport?: Array<ResourceToImport>;
	}

	export enum CreateChangeSetInputChangeSetType { CREATE = 0, UPDATE = 1, IMPORT = 2 }

	export enum OnFailure { DO_NOTHING = 0, ROLLBACK = 1, DELETE = 2 }


	/**The input for <a>CreateStack</a> action. */
	export interface CreateStackInput {
		StackName: string;
		TemplateBody?: string;
		TemplateURL?: string;
		Parameters?: Array<Parameter>;
		DisableRollback?: boolean;

		/**<p>Structure containing the rollback triggers for AWS CloudFormation to monitor during stack creation and updating operations, and for the specified monitoring period afterwards.</p> <p>Rollback triggers enable you to have AWS CloudFormation monitor the state of your application during stack creation and updating, and to roll back that operation if the application breaches the threshold of any of the alarms you've specified. For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-rollback-triggers.html">Monitor and Roll Back Stack Operations</a>.</p> */
		RollbackConfiguration?: RollbackConfiguration;
		TimeoutInMinutes?: number;
		NotificationARNs?: Array<NotificationARN>;
		Capabilities?: Array<Capability>;
		ResourceTypes?: Array<ResourceType>;
		RoleARN?: string;
		OnFailure?: CreateStackInputOnFailure;
		StackPolicyBody?: string;
		StackPolicyURL?: string;
		Tags?: Array<Tag>;
		ClientRequestToken?: string;
		EnableTerminationProtection?: boolean;
	}

	export enum CreateStackInputOnFailure { DO_NOTHING = 0, ROLLBACK = 1, DELETE = 2 }


	/**<p>[<code>Service-managed</code> permissions] The AWS Organizations accounts to which StackSets deploys. StackSets does not deploy stack instances to the organization master account, even if the master account is in your organization or in an OU in your organization.</p> <p>For update operations, you can specify either <code>Accounts</code> or <code>OrganizationalUnitIds</code>. For create and delete operations, specify <code>OrganizationalUnitIds</code>.</p> */
	export interface DeploymentTargets {
		Accounts?: Array<Account>;
		OrganizationalUnitIds?: Array<OrganizationalUnitId>;
	}


	/**<p>The user-specified preferences for how AWS CloudFormation performs a stack set operation. </p> <p>For more information on maximum concurrent accounts and failure tolerance, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation options</a>.</p> */
	export interface StackSetOperationPreferences {
		RegionOrder?: Array<Region>;
		FailureToleranceCount?: number;
		FailureTolerancePercentage?: number;
		MaxConcurrentCount?: number;
		MaxConcurrentPercentage?: number;
	}

	export interface CreateStackInstancesInput {
		StackSetName: string;
		Accounts?: Array<Account>;

		/**<p>[<code>Service-managed</code> permissions] The AWS Organizations accounts to which StackSets deploys. StackSets does not deploy stack instances to the organization master account, even if the master account is in your organization or in an OU in your organization.</p> <p>For update operations, you can specify either <code>Accounts</code> or <code>OrganizationalUnitIds</code>. For create and delete operations, specify <code>OrganizationalUnitIds</code>.</p> */
		DeploymentTargets?: DeploymentTargets;
		Regions: Array<Region>;
		ParameterOverrides?: Array<Parameter>;

		/**<p>The user-specified preferences for how AWS CloudFormation performs a stack set operation. </p> <p>For more information on maximum concurrent accounts and failure tolerance, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation options</a>.</p> */
		OperationPreferences?: StackSetOperationPreferences;
		OperationId?: string;
	}

	export enum PermissionModels { SERVICE_MANAGED = 0, SELF_MANAGED = 1 }

	export interface CreateStackSetInput {
		StackSetName: string;
		Description?: string;
		TemplateBody?: string;
		TemplateURL?: string;
		Parameters?: Array<Parameter>;
		Capabilities?: Array<Capability>;
		Tags?: Array<Tag>;
		AdministrationRoleARN?: string;
		ExecutionRoleName?: string;
		PermissionModel?: CreateStackSetInputPermissionModel;

		/**[<code>Service-managed</code> permissions] Describes whether StackSets automatically deploys to AWS Organizations accounts that are added to a target organization or organizational unit (OU). */
		AutoDeployment?: AutoDeployment;
		ClientRequestToken?: string;
	}

	export enum CreateStackSetInputPermissionModel { SERVICE_MANAGED = 0, SELF_MANAGED = 1 }


	/**The input for the <a>DeleteChangeSet</a> action. */
	export interface DeleteChangeSetInput {
		ChangeSetName: string;
		StackName?: string;
	}


	/**The input for <a>DeleteStack</a> action. */
	export interface DeleteStackInput {
		StackName: string;
		RetainResources?: Array<LogicalResourceId>;
		RoleARN?: string;
		ClientRequestToken?: string;
	}

	export interface DeleteStackInstancesInput {
		StackSetName: string;
		Accounts?: Array<Account>;

		/**<p>[<code>Service-managed</code> permissions] The AWS Organizations accounts to which StackSets deploys. StackSets does not deploy stack instances to the organization master account, even if the master account is in your organization or in an OU in your organization.</p> <p>For update operations, you can specify either <code>Accounts</code> or <code>OrganizationalUnitIds</code>. For create and delete operations, specify <code>OrganizationalUnitIds</code>.</p> */
		DeploymentTargets?: DeploymentTargets;
		Regions: Array<Region>;

		/**<p>The user-specified preferences for how AWS CloudFormation performs a stack set operation. </p> <p>For more information on maximum concurrent accounts and failure tolerance, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation options</a>.</p> */
		OperationPreferences?: StackSetOperationPreferences;
		RetainStacks: boolean;
		OperationId?: string;
	}

	export interface DeleteStackSetInput {
		StackSetName: string;
	}

	export enum DeprecatedStatus { LIVE = 0, DEPRECATED = 1 }

	export enum RegistryType { RESOURCE = 0 }

	export interface DeregisterTypeInput {
		Arn?: string;
		Type?: DeregisterTypeInputType;
		TypeName?: string;
		VersionId?: string;
	}

	export enum DeregisterTypeInputType { RESOURCE = 0 }


	/**The input for the <a>DescribeAccountLimits</a> action. */
	export interface DescribeAccountLimitsInput {
		NextToken?: string;
	}


	/**The input for the <a>DescribeChangeSet</a> action. */
	export interface DescribeChangeSetInput {
		ChangeSetName: string;
		StackName?: string;
		NextToken?: string;
	}

	export interface DescribeStackDriftDetectionStatusInput {
		StackDriftDetectionId: string;
	}

	export enum StackDriftStatus { DRIFTED = 0, IN_SYNC = 1, UNKNOWN = 2, NOT_CHECKED = 3 }

	export enum StackDriftDetectionStatus { DETECTION_IN_PROGRESS = 0, DETECTION_FAILED = 1, DETECTION_COMPLETE = 2 }


	/**The input for <a>DescribeStackEvents</a> action. */
	export interface DescribeStackEventsInput {
		StackName?: string;
		NextToken?: string;
	}

	export interface DescribeStackInstanceInput {
		StackSetName: string;
		StackInstanceAccount: string;
		StackInstanceRegion: string;
	}


	/**An AWS CloudFormation stack, in a specific account and Region, that's part of a stack set operation. A stack instance is a reference to an attempted or actual stack in a given account within a given Region. A stack instance can exist without a stack—for example, if the stack couldn't be created for some reason. A stack instance is associated with only one stack set. Each stack instance contains the ID of its associated stack set, as well as the ID of the actual stack and the stack status. */
	export interface StackInstance {
		StackSetId?: string;
		Region?: string;
		Account?: string;
		StackId?: string;
		ParameterOverrides?: Array<Parameter>;
		Status?: StackInstanceStatus;
		StatusReason?: string;
		OrganizationalUnitId?: string;
		DriftStatus?: StackInstanceDriftStatus;
		LastDriftCheckTimestamp?: Date;
	}

	export enum StackInstanceStatus { CURRENT = 0, OUTDATED = 1, INOPERABLE = 2 }

	export enum StackInstanceDriftStatus { DRIFTED = 0, IN_SYNC = 1, UNKNOWN = 2, NOT_CHECKED = 3 }

	export interface DescribeStackResourceDriftsInput {
		StackName: string;
		StackResourceDriftStatusFilters?: Array<StackResourceDriftStatus>;
		NextToken?: string;
		MaxResults?: number;
	}


	/**The input for <a>DescribeStackResource</a> action. */
	export interface DescribeStackResourceInput {
		StackName: string;
		LogicalResourceId: string;
	}


	/**Contains detailed information about the specified stack resource. */
	export interface StackResourceDetail {
		StackName?: string;
		StackId?: string;
		LogicalResourceId: string;
		PhysicalResourceId?: string;
		ResourceType: string;
		LastUpdatedTimestamp: Date;
		ResourceStatus: StackResourceDetailResourceStatus;
		ResourceStatusReason?: string;
		Description?: string;
		Metadata?: string;

		/**Contains information about whether the resource's actual configuration differs, or has <i>drifted</i>, from its expected configuration. */
		DriftInformation?: StackResourceDriftInformation;
	}

	export enum StackResourceDetailResourceStatus { CREATE_IN_PROGRESS = 0, CREATE_FAILED = 1, CREATE_COMPLETE = 2, DELETE_IN_PROGRESS = 3, DELETE_FAILED = 4, DELETE_COMPLETE = 5, DELETE_SKIPPED = 6, UPDATE_IN_PROGRESS = 7, UPDATE_FAILED = 8, UPDATE_COMPLETE = 9, IMPORT_FAILED = 10, IMPORT_COMPLETE = 11, IMPORT_IN_PROGRESS = 12, IMPORT_ROLLBACK_IN_PROGRESS = 13, IMPORT_ROLLBACK_FAILED = 14, IMPORT_ROLLBACK_COMPLETE = 15 }


	/**The input for <a>DescribeStackResources</a> action. */
	export interface DescribeStackResourcesInput {
		StackName?: string;
		LogicalResourceId?: string;
		PhysicalResourceId?: string;
	}

	export interface DescribeStackSetInput {
		StackSetName: string;
	}

	export interface DescribeStackSetOperationInput {
		StackSetName: string;
		OperationId: string;
	}


	/**The structure that contains information about a stack set operation.  */
	export interface StackSetOperation {
		OperationId?: string;
		StackSetId?: string;
		Action?: StackSetOperationAction;
		Status?: StackSetOperationStatus;

		/**<p>The user-specified preferences for how AWS CloudFormation performs a stack set operation. </p> <p>For more information on maximum concurrent accounts and failure tolerance, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation options</a>.</p> */
		OperationPreferences?: StackSetOperationPreferences;
		RetainStacks?: boolean;
		AdministrationRoleARN?: string;
		ExecutionRoleName?: string;
		CreationTimestamp?: Date;
		EndTimestamp?: Date;

		/**<p>[<code>Service-managed</code> permissions] The AWS Organizations accounts to which StackSets deploys. StackSets does not deploy stack instances to the organization master account, even if the master account is in your organization or in an OU in your organization.</p> <p>For update operations, you can specify either <code>Accounts</code> or <code>OrganizationalUnitIds</code>. For create and delete operations, specify <code>OrganizationalUnitIds</code>.</p> */
		DeploymentTargets?: DeploymentTargets;

		/**<p>Detailed information about the drift status of the stack set.</p> <p>For stack sets, contains information about the last <i>completed</i> drift operation performed on the stack set. Information about drift operations in-progress is not included. </p> <p>For stack set operations, includes information about drift operations currently being performed on the stack set.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-drift.html">Detecting Unmanaged Changes in Stack Sets</a> in the <i>AWS CloudFormation User Guide</i>.</p> */
		StackSetDriftDetectionDetails?: StackSetDriftDetectionDetails;
	}

	export enum StackSetOperationAction { CREATE = 0, UPDATE = 1, DELETE = 2, DETECT_DRIFT = 3 }

	export enum StackSetOperationStatus { RUNNING = 0, SUCCEEDED = 1, FAILED = 2, STOPPING = 3, STOPPED = 4, QUEUED = 5 }


	/**A structure that contains information about a stack set. A stack set enables you to provision stacks into AWS accounts and across Regions by using a single CloudFormation template. In the stack set, you specify the template to use, as well as any parameters and capabilities that the template requires.  */
	export interface StackSet {
		StackSetName?: string;
		StackSetId?: string;
		Description?: string;
		Status?: StackSetStatus;
		TemplateBody?: string;
		Parameters?: Array<Parameter>;
		Capabilities?: Array<Capability>;
		Tags?: Array<Tag>;
		StackSetARN?: string;
		AdministrationRoleARN?: string;
		ExecutionRoleName?: string;

		/**<p>Detailed information about the drift status of the stack set.</p> <p>For stack sets, contains information about the last <i>completed</i> drift operation performed on the stack set. Information about drift operations in-progress is not included. </p> <p>For stack set operations, includes information about drift operations currently being performed on the stack set.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-drift.html">Detecting Unmanaged Changes in Stack Sets</a> in the <i>AWS CloudFormation User Guide</i>.</p> */
		StackSetDriftDetectionDetails?: StackSetDriftDetectionDetails;

		/**[<code>Service-managed</code> permissions] Describes whether StackSets automatically deploys to AWS Organizations accounts that are added to a target organization or organizational unit (OU). */
		AutoDeployment?: AutoDeployment;
		PermissionModel?: StackSetPermissionModel;
		OrganizationalUnitIds?: Array<OrganizationalUnitId>;
	}

	export enum StackSetStatus { ACTIVE = 0, DELETED = 1 }

	export enum StackSetPermissionModel { SERVICE_MANAGED = 0, SELF_MANAGED = 1 }


	/**The input for <a>DescribeStacks</a> action. */
	export interface DescribeStacksInput {
		StackName?: string;
		NextToken?: string;
	}

	export interface DescribeTypeInput {
		Type?: DescribeTypeInputType;
		TypeName?: string;
		Arn?: string;
		VersionId?: string;
	}

	export enum DescribeTypeInputType { RESOURCE = 0 }

	export enum ProvisioningType { NON_PROVISIONABLE = 0, IMMUTABLE = 1, FULLY_MUTABLE = 2 }


	/**Contains logging configuration information for a type. */
	export interface LoggingConfig {
		LogRoleArn: string;
		LogGroupName: string;
	}

	export enum Visibility { PUBLIC = 0, PRIVATE = 1 }

	export interface DescribeTypeRegistrationInput {
		RegistrationToken: string;
	}

	export enum RegistrationStatus { COMPLETE = 0, IN_PROGRESS = 1, FAILED = 2 }

	export interface DetectStackDriftInput {
		StackName: string;
		LogicalResourceIds?: Array<LogicalResourceId>;
	}

	export interface DetectStackResourceDriftInput {
		StackName: string;
		LogicalResourceId: string;
	}


	/**<p>Contains the drift information for a resource that has been checked for drift. This includes actual and expected property values for resources in which AWS CloudFormation has detected drift. Only resource properties explicitly defined in the stack template are checked for drift. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to Stacks and Resources</a>.</p> <p>Resources that do not currently support drift detection cannot be checked. For a list of resources that support drift detection, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p> <p>Use <a>DetectStackResourceDrift</a> to detect drift on individual resources, or <a>DetectStackDrift</a> to detect drift on all resources in a given stack that support drift detection.</p> */
	export interface StackResourceDrift {
		StackId: string;
		LogicalResourceId: string;
		PhysicalResourceId?: string;
		PhysicalResourceIdContext?: Array<PhysicalResourceIdContextKeyValuePair>;
		ResourceType: string;
		ExpectedProperties?: string;
		ActualProperties?: string;
		PropertyDifferences?: Array<PropertyDifference>;
		StackResourceDriftStatus: StackResourceDriftStackResourceDriftStatus;
		Timestamp: Date;
	}

	export enum StackResourceDriftStackResourceDriftStatus { IN_SYNC = 0, MODIFIED = 1, DELETED = 2, NOT_CHECKED = 3 }

	export interface DetectStackSetDriftInput {
		StackSetName: string;

		/**<p>The user-specified preferences for how AWS CloudFormation performs a stack set operation. </p> <p>For more information on maximum concurrent accounts and failure tolerance, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation options</a>.</p> */
		OperationPreferences?: StackSetOperationPreferences;
		OperationId?: string;
	}

	export enum DifferenceType { ADD = 0, REMOVE = 1, NOT_EQUAL = 2 }


	/**The input for an <a>EstimateTemplateCost</a> action. */
	export interface EstimateTemplateCostInput {
		TemplateBody?: string;
		TemplateURL?: string;
		Parameters?: Array<Parameter>;
	}

	export enum EvaluationType { Static = 0, Dynamic = 1 }


	/**The input for the <a>ExecuteChangeSet</a> action. */
	export interface ExecuteChangeSetInput {
		ChangeSetName: string;
		StackName?: string;
		ClientRequestToken?: string;
	}


	/**The <code>Export</code> structure describes the exported output values for a stack. */
	export interface Export {
		ExportingStackId?: string;
		Name?: string;
		Value?: string;
	}


	/**The input for the <a>GetStackPolicy</a> action. */
	export interface GetStackPolicyInput {
		StackName: string;
	}

	export enum TemplateStage { Original = 0, Processed = 1 }


	/**The input for a <a>GetTemplate</a> action. */
	export interface GetTemplateInput {
		StackName?: string;
		ChangeSetName?: string;
		TemplateStage?: GetTemplateInputTemplateStage;
	}

	export enum GetTemplateInputTemplateStage { Original = 0, Processed = 1 }


	/**The input for the <a>GetTemplateSummary</a> action. */
	export interface GetTemplateSummaryInput {
		TemplateBody?: string;
		TemplateURL?: string;
		StackName?: string;
		StackSetName?: string;
	}

	export enum HandlerErrorCode { NotUpdatable = 0, InvalidRequest = 1, AccessDenied = 2, InvalidCredentials = 3, AlreadyExists = 4, NotFound = 5, ResourceConflict = 6, Throttling = 7, ServiceLimitExceeded = 8, NotStabilized = 9, GeneralServiceException = 10, ServiceInternalError = 11, NetworkFailure = 12, InternalFailure = 13 }


	/**The input for the <a>ListChangeSets</a> action. */
	export interface ListChangeSetsInput {
		StackName: string;
		NextToken?: string;
	}

	export interface ListExportsInput {
		NextToken?: string;
	}

	export interface ListImportsInput {
		ExportName: string;
		NextToken?: string;
	}

	export interface ListStackInstancesInput {
		StackSetName: string;
		NextToken?: string;
		MaxResults?: number;
		StackInstanceAccount?: string;
		StackInstanceRegion?: string;
	}


	/**The input for the <a>ListStackResource</a> action. */
	export interface ListStackResourcesInput {
		StackName: string;
		NextToken?: string;
	}

	export interface ListStackSetOperationResultsInput {
		StackSetName: string;
		OperationId: string;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListStackSetOperationsInput {
		StackSetName: string;
		NextToken?: string;
		MaxResults?: number;
	}

	export enum StackSetStatus { ACTIVE = 0, DELETED = 1 }

	export interface ListStackSetsInput {
		NextToken?: string;
		MaxResults?: number;
		Status?: ListStackSetsInputStatus;
	}

	export enum ListStackSetsInputStatus { ACTIVE = 0, DELETED = 1 }


	/**The input for <a>ListStacks</a> action. */
	export interface ListStacksInput {
		NextToken?: string;
		StackStatusFilter?: Array<StackStatus>;
	}

	export interface ListTypeRegistrationsInput {
		Type?: ListTypeRegistrationsInputType;
		TypeName?: string;
		TypeArn?: string;
		RegistrationStatusFilter?: ListTypeRegistrationsInputRegistrationStatusFilter;
		MaxResults?: number;
		NextToken?: string;
	}

	export enum ListTypeRegistrationsInputType { RESOURCE = 0 }

	export enum ListTypeRegistrationsInputRegistrationStatusFilter { COMPLETE = 0, IN_PROGRESS = 1, FAILED = 2 }

	export interface ListTypeVersionsInput {
		Type?: ListTypeVersionsInputType;
		TypeName?: string;
		Arn?: string;
		MaxResults?: number;
		NextToken?: string;
		DeprecatedStatus?: ListTypeVersionsInputDeprecatedStatus;
	}

	export enum ListTypeVersionsInputType { RESOURCE = 0 }

	export enum ListTypeVersionsInputDeprecatedStatus { LIVE = 0, DEPRECATED = 1 }

	export interface ListTypesInput {
		Visibility?: ListTypesInputVisibility;
		ProvisioningType?: ListTypesInputProvisioningType;
		DeprecatedStatus?: ListTypesInputDeprecatedStatus;
		MaxResults?: number;
		NextToken?: string;
	}

	export enum ListTypesInputVisibility { PUBLIC = 0, PRIVATE = 1 }

	export enum ListTypesInputProvisioningType { NON_PROVISIONABLE = 0, IMMUTABLE = 1, FULLY_MUTABLE = 2 }

	export enum ListTypesInputDeprecatedStatus { LIVE = 0, DEPRECATED = 1 }

	export enum OperationStatus { PENDING = 0, IN_PROGRESS = 1, SUCCESS = 2, FAILED = 3 }


	/**The Output data type. */
	export interface Output {
		OutputKey?: string;
		OutputValue?: string;
		Description?: string;
		ExportName?: string;
	}


	/**A set of criteria that AWS CloudFormation uses to validate parameter values. Although other constraints might be defined in the stack template, AWS CloudFormation returns only the <code>AllowedValues</code> property. */
	export interface ParameterConstraints {
		AllowedValues?: Array<AllowedValue>;
	}


	/**The ParameterDeclaration data type. */
	export interface ParameterDeclaration {
		ParameterKey?: string;
		DefaultValue?: string;
		ParameterType?: string;
		NoEcho?: boolean;
		Description?: string;

		/**A set of criteria that AWS CloudFormation uses to validate parameter values. Although other constraints might be defined in the stack template, AWS CloudFormation returns only the <code>AllowedValues</code> property. */
		ParameterConstraints?: ParameterConstraints;
	}


	/**Context information that enables AWS CloudFormation to uniquely identify a resource. AWS CloudFormation uses context key-value pairs in cases where a resource's logical and physical IDs are not enough to uniquely identify that resource. Each context key-value pair specifies a resource that contains the targeted resource. */
	export interface PhysicalResourceIdContextKeyValuePair {
		Key: string;
		Value: string;
	}


	/**Information about a resource property whose actual value differs from its expected value, as defined in the stack template and any values specified as template parameters. These will be present only for resources whose <code>StackResourceDriftStatus</code> is <code>MODIFIED</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to Stacks and Resources</a>. */
	export interface PropertyDifference {
		PropertyPath: string;
		ExpectedValue: string;
		ActualValue: string;
		DifferenceType: PropertyDifferenceDifferenceType;
	}

	export enum PropertyDifferenceDifferenceType { ADD = 0, REMOVE = 1, NOT_EQUAL = 2 }

	export interface RecordHandlerProgressInput {
		BearerToken: string;
		OperationStatus: RecordHandlerProgressInputOperationStatus;
		CurrentOperationStatus?: RecordHandlerProgressInputCurrentOperationStatus;
		StatusMessage?: string;
		ErrorCode?: RecordHandlerProgressInputErrorCode;
		ResourceModel?: string;
		ClientRequestToken?: string;
	}

	export enum RecordHandlerProgressInputOperationStatus { PENDING = 0, IN_PROGRESS = 1, SUCCESS = 2, FAILED = 3 }

	export enum RecordHandlerProgressInputCurrentOperationStatus { PENDING = 0, IN_PROGRESS = 1, SUCCESS = 2, FAILED = 3 }

	export enum RecordHandlerProgressInputErrorCode { NotUpdatable = 0, InvalidRequest = 1, AccessDenied = 2, InvalidCredentials = 3, AlreadyExists = 4, NotFound = 5, ResourceConflict = 6, Throttling = 7, ServiceLimitExceeded = 8, NotStabilized = 9, GeneralServiceException = 10, ServiceInternalError = 11, NetworkFailure = 12, InternalFailure = 13 }

	export interface RegisterTypeInput {
		Type?: RegisterTypeInputType;
		TypeName: string;
		SchemaHandlerPackage: string;

		/**Contains logging configuration information for a type. */
		LoggingConfig?: LoggingConfig;
		ExecutionRoleArn?: string;
		ClientRequestToken?: string;
	}

	export enum RegisterTypeInputType { RESOURCE = 0 }

	export enum Replacement { True = 0, False = 1, Conditional = 2 }

	export enum RequiresRecreation { Never = 0, Conditionally = 1, Always = 2 }

	export enum ResourceAttribute { Properties = 0, Metadata = 1, CreationPolicy = 2, UpdatePolicy = 3, DeletionPolicy = 4, Tags = 5 }


	/**The field that AWS CloudFormation will change, such as the name of a resource's property, and whether the resource will be recreated. */
	export interface ResourceTargetDefinition {
		Attribute?: ResourceTargetDefinitionAttribute;
		Name?: string;
		RequiresRecreation?: ResourceTargetDefinitionRequiresRecreation;
	}

	export enum ResourceTargetDefinitionAttribute { Properties = 0, Metadata = 1, CreationPolicy = 2, UpdatePolicy = 3, DeletionPolicy = 4, Tags = 5 }

	export enum ResourceTargetDefinitionRequiresRecreation { Never = 0, Conditionally = 1, Always = 2 }


	/**For a resource with <code>Modify</code> as the action, the <code>ResourceChange</code> structure describes the changes AWS CloudFormation will make to that resource. */
	export interface ResourceChangeDetail {

		/**The field that AWS CloudFormation will change, such as the name of a resource's property, and whether the resource will be recreated. */
		Target?: ResourceTargetDefinition;
		Evaluation?: ResourceChangeDetailEvaluation;
		ChangeSource?: ResourceChangeDetailChangeSource;
		CausingEntity?: string;
	}

	export enum ResourceChangeDetailEvaluation { Static = 0, Dynamic = 1 }

	export enum ResourceChangeDetailChangeSource { ResourceReference = 0, ParameterReference = 1, ResourceAttribute = 2, DirectModification = 3, Automatic = 4 }


	/**Describes the target resources of a specific type in your import template (for example, all <code>AWS::S3::Bucket</code> resources) and the properties you can provide during the import to identify resources of that type. */
	export interface ResourceIdentifierSummary {
		ResourceType?: string;
		LogicalResourceIds?: Array<LogicalResourceId>;
		ResourceIdentifiers?: Array<ResourceIdentifierPropertyKey>;
	}

	export enum ResourceSignalStatus { SUCCESS = 0, FAILURE = 1 }

	export enum ResourceStatus { CREATE_IN_PROGRESS = 0, CREATE_FAILED = 1, CREATE_COMPLETE = 2, DELETE_IN_PROGRESS = 3, DELETE_FAILED = 4, DELETE_COMPLETE = 5, DELETE_SKIPPED = 6, UPDATE_IN_PROGRESS = 7, UPDATE_FAILED = 8, UPDATE_COMPLETE = 9, IMPORT_FAILED = 10, IMPORT_COMPLETE = 11, IMPORT_IN_PROGRESS = 12, IMPORT_ROLLBACK_IN_PROGRESS = 13, IMPORT_ROLLBACK_FAILED = 14, IMPORT_ROLLBACK_COMPLETE = 15 }


	/**A rollback trigger AWS CloudFormation monitors during creation and updating of stacks. If any of the alarms you specify goes to ALARM state during the stack operation or within the specified monitoring period afterwards, CloudFormation rolls back the entire stack operation.  */
	export interface RollbackTrigger {
		Arn: string;
		Type: string;
	}


	/**The input for the <a>SetStackPolicy</a> action. */
	export interface SetStackPolicyInput {
		StackName: string;
		StackPolicyBody?: string;
		StackPolicyURL?: string;
	}

	export interface SetTypeDefaultVersionInput {
		Arn?: string;
		Type?: SetTypeDefaultVersionInputType;
		TypeName?: string;
		VersionId?: string;
	}

	export enum SetTypeDefaultVersionInputType { RESOURCE = 0 }


	/**The input for the <a>SignalResource</a> action. */
	export interface SignalResourceInput {
		StackName: string;
		LogicalResourceId: string;
		UniqueId: string;
		Status: SignalResourceInputStatus;
	}

	export enum SignalResourceInputStatus { SUCCESS = 0, FAILURE = 1 }


	/**Contains information about whether the stack's actual configuration differs, or has <i>drifted</i>, from its expected configuration, as defined in the stack template and any values specified as template parameters. A stack is considered to have drifted if one or more of its resources have drifted. */
	export interface StackDriftInformation {
		StackDriftStatus: StackDriftInformationStackDriftStatus;
		LastCheckTimestamp?: Date;
	}

	export enum StackDriftInformationStackDriftStatus { DRIFTED = 0, IN_SYNC = 1, UNKNOWN = 2, NOT_CHECKED = 3 }


	/**The Stack data type. */
	export interface Stack {
		StackId?: string;
		StackName: string;
		ChangeSetId?: string;
		Description?: string;
		Parameters?: Array<Parameter>;
		CreationTime: Date;
		DeletionTime?: Date;
		LastUpdatedTime?: Date;

		/**<p>Structure containing the rollback triggers for AWS CloudFormation to monitor during stack creation and updating operations, and for the specified monitoring period afterwards.</p> <p>Rollback triggers enable you to have AWS CloudFormation monitor the state of your application during stack creation and updating, and to roll back that operation if the application breaches the threshold of any of the alarms you've specified. For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-rollback-triggers.html">Monitor and Roll Back Stack Operations</a>.</p> */
		RollbackConfiguration?: RollbackConfiguration;
		StackStatus: StackStackStatus;
		StackStatusReason?: string;
		DisableRollback?: boolean;
		NotificationARNs?: Array<NotificationARN>;
		TimeoutInMinutes?: number;
		Capabilities?: Array<Capability>;
		Outputs?: Array<Output>;
		RoleARN?: string;
		Tags?: Array<Tag>;
		EnableTerminationProtection?: boolean;
		ParentId?: string;
		RootId?: string;

		/**Contains information about whether the stack's actual configuration differs, or has <i>drifted</i>, from its expected configuration, as defined in the stack template and any values specified as template parameters. A stack is considered to have drifted if one or more of its resources have drifted. */
		DriftInformation?: StackDriftInformation;
	}

	export enum StackStackStatus { CREATE_IN_PROGRESS = 0, CREATE_FAILED = 1, CREATE_COMPLETE = 2, ROLLBACK_IN_PROGRESS = 3, ROLLBACK_FAILED = 4, ROLLBACK_COMPLETE = 5, DELETE_IN_PROGRESS = 6, DELETE_FAILED = 7, DELETE_COMPLETE = 8, UPDATE_IN_PROGRESS = 9, UPDATE_COMPLETE_CLEANUP_IN_PROGRESS = 10, UPDATE_COMPLETE = 11, UPDATE_ROLLBACK_IN_PROGRESS = 12, UPDATE_ROLLBACK_FAILED = 13, UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS = 14, UPDATE_ROLLBACK_COMPLETE = 15, REVIEW_IN_PROGRESS = 16, IMPORT_IN_PROGRESS = 17, IMPORT_COMPLETE = 18, IMPORT_ROLLBACK_IN_PROGRESS = 19, IMPORT_ROLLBACK_FAILED = 20, IMPORT_ROLLBACK_COMPLETE = 21 }


	/**Contains information about whether the stack's actual configuration differs, or has <i>drifted</i>, from its expected configuration, as defined in the stack template and any values specified as template parameters. A stack is considered to have drifted if one or more of its resources have drifted. */
	export interface StackDriftInformationSummary {
		StackDriftStatus: StackDriftInformationSummaryStackDriftStatus;
		LastCheckTimestamp?: Date;
	}

	export enum StackDriftInformationSummaryStackDriftStatus { DRIFTED = 0, IN_SYNC = 1, UNKNOWN = 2, NOT_CHECKED = 3 }


	/**The StackEvent data type. */
	export interface StackEvent {
		StackId: string;
		EventId: string;
		StackName: string;
		LogicalResourceId?: string;
		PhysicalResourceId?: string;
		ResourceType?: string;
		Timestamp: Date;
		ResourceStatus?: StackEventResourceStatus;
		ResourceStatusReason?: string;
		ResourceProperties?: string;
		ClientRequestToken?: string;
	}

	export enum StackEventResourceStatus { CREATE_IN_PROGRESS = 0, CREATE_FAILED = 1, CREATE_COMPLETE = 2, DELETE_IN_PROGRESS = 3, DELETE_FAILED = 4, DELETE_COMPLETE = 5, DELETE_SKIPPED = 6, UPDATE_IN_PROGRESS = 7, UPDATE_FAILED = 8, UPDATE_COMPLETE = 9, IMPORT_FAILED = 10, IMPORT_COMPLETE = 11, IMPORT_IN_PROGRESS = 12, IMPORT_ROLLBACK_IN_PROGRESS = 13, IMPORT_ROLLBACK_FAILED = 14, IMPORT_ROLLBACK_COMPLETE = 15 }

	export enum StackInstanceStatus { CURRENT = 0, OUTDATED = 1, INOPERABLE = 2 }


	/**The structure that contains summary information about a stack instance. */
	export interface StackInstanceSummary {
		StackSetId?: string;
		Region?: string;
		Account?: string;
		StackId?: string;
		Status?: StackInstanceSummaryStatus;
		StatusReason?: string;
		OrganizationalUnitId?: string;
		DriftStatus?: StackInstanceSummaryDriftStatus;
		LastDriftCheckTimestamp?: Date;
	}

	export enum StackInstanceSummaryStatus { CURRENT = 0, OUTDATED = 1, INOPERABLE = 2 }

	export enum StackInstanceSummaryDriftStatus { DRIFTED = 0, IN_SYNC = 1, UNKNOWN = 2, NOT_CHECKED = 3 }


	/**Contains information about whether the resource's actual configuration differs, or has <i>drifted</i>, from its expected configuration. */
	export interface StackResourceDriftInformation {
		StackResourceDriftStatus: StackResourceDriftInformationStackResourceDriftStatus;
		LastCheckTimestamp?: Date;
	}

	export enum StackResourceDriftInformationStackResourceDriftStatus { IN_SYNC = 0, MODIFIED = 1, DELETED = 2, NOT_CHECKED = 3 }


	/**The StackResource data type. */
	export interface StackResource {
		StackName?: string;
		StackId?: string;
		LogicalResourceId: string;
		PhysicalResourceId?: string;
		ResourceType: string;
		Timestamp: Date;
		ResourceStatus: StackResourceResourceStatus;
		ResourceStatusReason?: string;
		Description?: string;

		/**Contains information about whether the resource's actual configuration differs, or has <i>drifted</i>, from its expected configuration. */
		DriftInformation?: StackResourceDriftInformation;
	}

	export enum StackResourceResourceStatus { CREATE_IN_PROGRESS = 0, CREATE_FAILED = 1, CREATE_COMPLETE = 2, DELETE_IN_PROGRESS = 3, DELETE_FAILED = 4, DELETE_COMPLETE = 5, DELETE_SKIPPED = 6, UPDATE_IN_PROGRESS = 7, UPDATE_FAILED = 8, UPDATE_COMPLETE = 9, IMPORT_FAILED = 10, IMPORT_COMPLETE = 11, IMPORT_IN_PROGRESS = 12, IMPORT_ROLLBACK_IN_PROGRESS = 13, IMPORT_ROLLBACK_FAILED = 14, IMPORT_ROLLBACK_COMPLETE = 15 }


	/**Summarizes information about whether the resource's actual configuration differs, or has <i>drifted</i>, from its expected configuration. */
	export interface StackResourceDriftInformationSummary {
		StackResourceDriftStatus: StackResourceDriftInformationSummaryStackResourceDriftStatus;
		LastCheckTimestamp?: Date;
	}

	export enum StackResourceDriftInformationSummaryStackResourceDriftStatus { IN_SYNC = 0, MODIFIED = 1, DELETED = 2, NOT_CHECKED = 3 }


	/**Contains high-level information about the specified stack resource. */
	export interface StackResourceSummary {
		LogicalResourceId: string;
		PhysicalResourceId?: string;
		ResourceType: string;
		LastUpdatedTimestamp: Date;
		ResourceStatus: StackResourceSummaryResourceStatus;
		ResourceStatusReason?: string;

		/**Summarizes information about whether the resource's actual configuration differs, or has <i>drifted</i>, from its expected configuration. */
		DriftInformation?: StackResourceDriftInformationSummary;
	}

	export enum StackResourceSummaryResourceStatus { CREATE_IN_PROGRESS = 0, CREATE_FAILED = 1, CREATE_COMPLETE = 2, DELETE_IN_PROGRESS = 3, DELETE_FAILED = 4, DELETE_COMPLETE = 5, DELETE_SKIPPED = 6, UPDATE_IN_PROGRESS = 7, UPDATE_FAILED = 8, UPDATE_COMPLETE = 9, IMPORT_FAILED = 10, IMPORT_COMPLETE = 11, IMPORT_IN_PROGRESS = 12, IMPORT_ROLLBACK_IN_PROGRESS = 13, IMPORT_ROLLBACK_FAILED = 14, IMPORT_ROLLBACK_COMPLETE = 15 }


	/**<p>Detailed information about the drift status of the stack set.</p> <p>For stack sets, contains information about the last <i>completed</i> drift operation performed on the stack set. Information about drift operations in-progress is not included. </p> <p>For stack set operations, includes information about drift operations currently being performed on the stack set.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-drift.html">Detecting Unmanaged Changes in Stack Sets</a> in the <i>AWS CloudFormation User Guide</i>.</p> */
	export interface StackSetDriftDetectionDetails {
		DriftStatus?: StackSetDriftDetectionDetailsDriftStatus;
		DriftDetectionStatus?: StackSetDriftDetectionDetailsDriftDetectionStatus;
		LastDriftCheckTimestamp?: Date;
		TotalStackInstancesCount?: number;
		DriftedStackInstancesCount?: number;
		InSyncStackInstancesCount?: number;
		InProgressStackInstancesCount?: number;
		FailedStackInstancesCount?: number;
	}

	export enum StackSetDriftDetectionDetailsDriftStatus { DRIFTED = 0, IN_SYNC = 1, NOT_CHECKED = 2 }

	export enum StackSetDriftDetectionDetailsDriftDetectionStatus { COMPLETED = 0, FAILED = 1, PARTIAL_SUCCESS = 2, IN_PROGRESS = 3, STOPPED = 4 }

	export enum StackSetDriftStatus { DRIFTED = 0, IN_SYNC = 1, NOT_CHECKED = 2 }

	export enum StackSetDriftDetectionStatus { COMPLETED = 0, FAILED = 1, PARTIAL_SUCCESS = 2, IN_PROGRESS = 3, STOPPED = 4 }

	export enum StackSetOperationAction { CREATE = 0, UPDATE = 1, DELETE = 2, DETECT_DRIFT = 3 }

	export enum StackSetOperationStatus { RUNNING = 0, SUCCEEDED = 1, FAILED = 2, STOPPING = 3, STOPPED = 4, QUEUED = 5 }

	export enum StackSetOperationResultStatus { PENDING = 0, RUNNING = 1, SUCCEEDED = 2, FAILED = 3, CANCELLED = 4 }


	/**The structure that contains information about a specified operation's results for a given account in a given Region. */
	export interface StackSetOperationResultSummary {
		Account?: string;
		Region?: string;
		Status?: StackSetOperationResultSummaryStatus;
		StatusReason?: string;

		/**<p>Structure that contains the results of the account gate function which AWS CloudFormation invokes, if present, before proceeding with a stack set operation in an account and Region.</p> <p>For each account and Region, AWS CloudFormation lets you specify a Lamdba function that encapsulates any requirements that must be met before CloudFormation can proceed with a stack set operation in that account and Region. CloudFormation invokes the function each time a stack set operation is requested for that account and Region; if the function returns <code>FAILED</code>, CloudFormation cancels the operation in that account and Region, and sets the stack set operation result status for that account and Region to <code>FAILED</code>. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-account-gating.html">Configuring a target account gate</a>.</p> */
		AccountGateResult?: AccountGateResult;
		OrganizationalUnitId?: string;
	}

	export enum StackSetOperationResultSummaryStatus { PENDING = 0, RUNNING = 1, SUCCEEDED = 2, FAILED = 3, CANCELLED = 4 }


	/**The structures that contain summary information about the specified operation. */
	export interface StackSetOperationSummary {
		OperationId?: string;
		Action?: StackSetOperationSummaryAction;
		Status?: StackSetOperationSummaryStatus;
		CreationTimestamp?: Date;
		EndTimestamp?: Date;
	}

	export enum StackSetOperationSummaryAction { CREATE = 0, UPDATE = 1, DELETE = 2, DETECT_DRIFT = 3 }

	export enum StackSetOperationSummaryStatus { RUNNING = 0, SUCCEEDED = 1, FAILED = 2, STOPPING = 3, STOPPED = 4, QUEUED = 5 }


	/**The structures that contain summary information about the specified stack set. */
	export interface StackSetSummary {
		StackSetName?: string;
		StackSetId?: string;
		Description?: string;
		Status?: StackSetSummaryStatus;

		/**[<code>Service-managed</code> permissions] Describes whether StackSets automatically deploys to AWS Organizations accounts that are added to a target organization or organizational unit (OU). */
		AutoDeployment?: AutoDeployment;
		PermissionModel?: StackSetSummaryPermissionModel;
		DriftStatus?: StackSetSummaryDriftStatus;
		LastDriftCheckTimestamp?: Date;
	}

	export enum StackSetSummaryStatus { ACTIVE = 0, DELETED = 1 }

	export enum StackSetSummaryPermissionModel { SERVICE_MANAGED = 0, SELF_MANAGED = 1 }

	export enum StackSetSummaryDriftStatus { DRIFTED = 0, IN_SYNC = 1, UNKNOWN = 2, NOT_CHECKED = 3 }


	/**The StackSummary Data Type */
	export interface StackSummary {
		StackId?: string;
		StackName: string;
		TemplateDescription?: string;
		CreationTime: Date;
		LastUpdatedTime?: Date;
		DeletionTime?: Date;
		StackStatus: StackSummaryStackStatus;
		StackStatusReason?: string;
		ParentId?: string;
		RootId?: string;

		/**Contains information about whether the stack's actual configuration differs, or has <i>drifted</i>, from its expected configuration, as defined in the stack template and any values specified as template parameters. A stack is considered to have drifted if one or more of its resources have drifted. */
		DriftInformation?: StackDriftInformationSummary;
	}

	export enum StackSummaryStackStatus { CREATE_IN_PROGRESS = 0, CREATE_FAILED = 1, CREATE_COMPLETE = 2, ROLLBACK_IN_PROGRESS = 3, ROLLBACK_FAILED = 4, ROLLBACK_COMPLETE = 5, DELETE_IN_PROGRESS = 6, DELETE_FAILED = 7, DELETE_COMPLETE = 8, UPDATE_IN_PROGRESS = 9, UPDATE_COMPLETE_CLEANUP_IN_PROGRESS = 10, UPDATE_COMPLETE = 11, UPDATE_ROLLBACK_IN_PROGRESS = 12, UPDATE_ROLLBACK_FAILED = 13, UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS = 14, UPDATE_ROLLBACK_COMPLETE = 15, REVIEW_IN_PROGRESS = 16, IMPORT_IN_PROGRESS = 17, IMPORT_COMPLETE = 18, IMPORT_ROLLBACK_IN_PROGRESS = 19, IMPORT_ROLLBACK_FAILED = 20, IMPORT_ROLLBACK_COMPLETE = 21 }

	export interface StopStackSetOperationInput {
		StackSetName: string;
		OperationId: string;
	}


	/**The TemplateParameter data type. */
	export interface TemplateParameter {
		ParameterKey?: string;
		DefaultValue?: string;
		NoEcho?: boolean;
		Description?: string;
	}


	/**Contains summary information about the specified CloudFormation type. */
	export interface TypeSummary {
		Type?: TypeSummaryType;
		TypeName?: string;
		DefaultVersionId?: string;
		TypeArn?: string;
		LastUpdated?: Date;
		Description?: string;
	}

	export enum TypeSummaryType { RESOURCE = 0 }


	/**Contains summary information about a specific version of a CloudFormation type. */
	export interface TypeVersionSummary {
		Type?: TypeVersionSummaryType;
		TypeName?: string;
		VersionId?: string;
		IsDefaultVersion?: boolean;
		Arn?: string;
		TimeCreated?: Date;
		Description?: string;
	}

	export enum TypeVersionSummaryType { RESOURCE = 0 }


	/**The input for an <a>UpdateStack</a> action. */
	export interface UpdateStackInput {
		StackName: string;
		TemplateBody?: string;
		TemplateURL?: string;
		UsePreviousTemplate?: boolean;
		StackPolicyDuringUpdateBody?: string;
		StackPolicyDuringUpdateURL?: string;
		Parameters?: Array<Parameter>;
		Capabilities?: Array<Capability>;
		ResourceTypes?: Array<ResourceType>;
		RoleARN?: string;

		/**<p>Structure containing the rollback triggers for AWS CloudFormation to monitor during stack creation and updating operations, and for the specified monitoring period afterwards.</p> <p>Rollback triggers enable you to have AWS CloudFormation monitor the state of your application during stack creation and updating, and to roll back that operation if the application breaches the threshold of any of the alarms you've specified. For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-rollback-triggers.html">Monitor and Roll Back Stack Operations</a>.</p> */
		RollbackConfiguration?: RollbackConfiguration;
		StackPolicyBody?: string;
		StackPolicyURL?: string;
		NotificationARNs?: Array<NotificationARN>;
		Tags?: Array<Tag>;
		ClientRequestToken?: string;
	}

	export interface UpdateStackInstancesInput {
		StackSetName: string;
		Accounts?: Array<Account>;

		/**<p>[<code>Service-managed</code> permissions] The AWS Organizations accounts to which StackSets deploys. StackSets does not deploy stack instances to the organization master account, even if the master account is in your organization or in an OU in your organization.</p> <p>For update operations, you can specify either <code>Accounts</code> or <code>OrganizationalUnitIds</code>. For create and delete operations, specify <code>OrganizationalUnitIds</code>.</p> */
		DeploymentTargets?: DeploymentTargets;
		Regions: Array<Region>;
		ParameterOverrides?: Array<Parameter>;

		/**<p>The user-specified preferences for how AWS CloudFormation performs a stack set operation. </p> <p>For more information on maximum concurrent accounts and failure tolerance, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation options</a>.</p> */
		OperationPreferences?: StackSetOperationPreferences;
		OperationId?: string;
	}

	export interface UpdateStackSetInput {
		StackSetName: string;
		Description?: string;
		TemplateBody?: string;
		TemplateURL?: string;
		UsePreviousTemplate?: boolean;
		Parameters?: Array<Parameter>;
		Capabilities?: Array<Capability>;
		Tags?: Array<Tag>;

		/**<p>The user-specified preferences for how AWS CloudFormation performs a stack set operation. </p> <p>For more information on maximum concurrent accounts and failure tolerance, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation options</a>.</p> */
		OperationPreferences?: StackSetOperationPreferences;
		AdministrationRoleARN?: string;
		ExecutionRoleName?: string;

		/**<p>[<code>Service-managed</code> permissions] The AWS Organizations accounts to which StackSets deploys. StackSets does not deploy stack instances to the organization master account, even if the master account is in your organization or in an OU in your organization.</p> <p>For update operations, you can specify either <code>Accounts</code> or <code>OrganizationalUnitIds</code>. For create and delete operations, specify <code>OrganizationalUnitIds</code>.</p> */
		DeploymentTargets?: DeploymentTargets;
		PermissionModel?: UpdateStackSetInputPermissionModel;

		/**[<code>Service-managed</code> permissions] Describes whether StackSets automatically deploys to AWS Organizations accounts that are added to a target organization or organizational unit (OU). */
		AutoDeployment?: AutoDeployment;
		OperationId?: string;
		Accounts?: Array<Account>;
		Regions?: Array<Region>;
	}

	export enum UpdateStackSetInputPermissionModel { SERVICE_MANAGED = 0, SELF_MANAGED = 1 }

	export interface UpdateTerminationProtectionInput {
		EnableTerminationProtection: boolean;
		StackName: string;
	}


	/**The input for <a>ValidateTemplate</a> action. */
	export interface ValidateTemplateInput {
		TemplateBody?: string;
		TemplateURL?: string;
	}

	@autoinject()
	export class DemoClient {
		constructor(private http: HttpClient) {
		}

		/**
		 * <p>Cancels an update on the specified stack. If the call completes successfully, the stack rolls back the update and reverts to the previous stack configuration.</p> <note> <p>You can cancel only stacks that are in the UPDATE_IN_PROGRESS state.</p> </note>
		 * Get /#Action=CancelUpdateStack
		 * @param {string} StackName The name or the unique stack ID that is associated with the stack.
		 * @param {string} ClientRequestToken A unique identifier for this <code>CancelUpdateStack</code> request. Specify this token if you plan to retry requests so that AWS CloudFormation knows that you're not attempting to cancel an update on a stack with the same name. You might retry <code>CancelUpdateStack</code> requests to ensure that AWS CloudFormation successfully received them.
		 * @return {void} Success
		 */
		GET_CancelUpdateStack(StackName: string, ClientRequestToken: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.get('/#Action=CancelUpdateStack?StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&ClientRequestToken=' + (ClientRequestToken == null ? '' : encodeURIComponent(ClientRequestToken)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>For a specified stack that is in the <code>UPDATE_ROLLBACK_FAILED</code> state, continues rolling it back to the <code>UPDATE_ROLLBACK_COMPLETE</code> state. Depending on the cause of the failure, you can manually <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/troubleshooting.html#troubleshooting-errors-update-rollback-failed"> fix the error</a> and continue the rollback. By continuing the rollback, you can return your stack to a working state (the <code>UPDATE_ROLLBACK_COMPLETE</code> state), and then try to update the stack again.</p> <p>A stack goes into the <code>UPDATE_ROLLBACK_FAILED</code> state when AWS CloudFormation cannot roll back all changes after a failed stack update. For example, you might have a stack that is rolling back to an old database instance that was deleted outside of AWS CloudFormation. Because AWS CloudFormation doesn't know the database was deleted, it assumes that the database instance still exists and attempts to roll back to it, causing the update rollback to fail.</p>
		 * Get /#Action=ContinueUpdateRollback
		 * @param {string} StackName <p>The name or the unique ID of the stack that you want to continue rolling back.</p> <note> <p>Don't specify the name of a nested stack (a stack that was created by using the <code>AWS::CloudFormation::Stack</code> resource). Instead, use this operation on the parent stack (the stack that contains the <code>AWS::CloudFormation::Stack</code> resource).</p> </note>
		 * @param {string} RoleARN <p>The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role that AWS CloudFormation assumes to roll back the stack. AWS CloudFormation uses the role's credentials to make calls on your behalf. AWS CloudFormation always uses this role for all future operations on the stack. As long as users have permission to operate on the stack, AWS CloudFormation uses this role even if the users don't have permission to pass it. Ensure that the role grants least privilege.</p> <p>If you don't specify a value, AWS CloudFormation uses the role that was previously associated with the stack. If no role is available, AWS CloudFormation uses a temporary session that is generated from your user credentials.</p>
		 * @param {Array<ResourceToSkip>} ResourcesToSkip <p>A list of the logical IDs of the resources that AWS CloudFormation skips during the continue update rollback operation. You can specify only resources that are in the <code>UPDATE_FAILED</code> state because a rollback failed. You can't specify resources that are in the <code>UPDATE_FAILED</code> state for other reasons, for example, because an update was cancelled. To check why a resource update failed, use the <a>DescribeStackResources</a> action, and view the resource status reason. </p> <important> <p>Specify this property to skip rolling back resources that AWS CloudFormation can't successfully roll back. We recommend that you <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/troubleshooting.html#troubleshooting-errors-update-rollback-failed"> troubleshoot</a> resources before skipping them. AWS CloudFormation sets the status of the specified resources to <code>UPDATE_COMPLETE</code> and continues to roll back the stack. After the rollback is complete, the state of the skipped resources will be inconsistent with the state of the resources in the stack template. Before performing another stack update, you must update the stack or resources to be consistent with each other. If you don't, subsequent stack updates might fail, and the stack will become unrecoverable. </p> </important> <p>Specify the minimum number of resources required to successfully roll back your stack. For example, a failed resource update might cause dependent resources to fail. In this case, it might not be necessary to skip the dependent resources. </p> <p>To skip resources that are part of nested stacks, use the following format: <code>NestedStackName.ResourceLogicalID</code>. If you want to specify the logical ID of a stack resource (<code>Type: AWS::CloudFormation::Stack</code>) in the <code>ResourcesToSkip</code> list, then its corresponding embedded stack must be in one of the following states: <code>DELETE_IN_PROGRESS</code>, <code>DELETE_COMPLETE</code>, or <code>DELETE_FAILED</code>. </p> <note> <p>Don't confuse a child stack's name with its corresponding logical ID defined in the parent stack. For an example of a continue update rollback operation with nested stacks, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-continueupdaterollback.html#nested-stacks">Using ResourcesToSkip to recover a nested stacks hierarchy</a>. </p> </note>
		 * @param {string} ClientRequestToken A unique identifier for this <code>ContinueUpdateRollback</code> request. Specify this token if you plan to retry requests so that AWS CloudFormation knows that you're not attempting to continue the rollback to a stack with the same name. You might retry <code>ContinueUpdateRollback</code> requests to ensure that AWS CloudFormation successfully received them.
		 * @return {void} Success
		 */
		GET_ContinueUpdateRollback(StackName: string, RoleARN: string, ResourcesToSkip: Array<ResourceToSkip>, ClientRequestToken: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.get('/#Action=ContinueUpdateRollback?StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&RoleARN=' + (RoleARN == null ? '' : encodeURIComponent(RoleARN)) + '&' + ResourcesToSkip.map(z => `ResourcesToSkip=${z}`).join('&') + '&ClientRequestToken=' + (ClientRequestToken == null ? '' : encodeURIComponent(ClientRequestToken)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Creates a list of changes that will be applied to a stack so that you can review the changes before executing them. You can create a change set for a stack that doesn't exist or an existing stack. If you create a change set for a stack that doesn't exist, the change set shows all of the resources that AWS CloudFormation will create. If you create a change set for an existing stack, AWS CloudFormation compares the stack's information with the information that you submit in the change set and lists the differences. Use change sets to understand which resources AWS CloudFormation will create or change, and how it will change resources in an existing stack, before you create or update a stack.</p> <p>To create a change set for a stack that doesn't exist, for the <code>ChangeSetType</code> parameter, specify <code>CREATE</code>. To create a change set for an existing stack, specify <code>UPDATE</code> for the <code>ChangeSetType</code> parameter. To create a change set for an import operation, specify <code>IMPORT</code> for the <code>ChangeSetType</code> parameter. After the <code>CreateChangeSet</code> call successfully completes, AWS CloudFormation starts creating the change set. To check the status of the change set or to review it, use the <a>DescribeChangeSet</a> action.</p> <p>When you are satisfied with the changes the change set will make, execute the change set by using the <a>ExecuteChangeSet</a> action. AWS CloudFormation doesn't make changes until you execute the change set.</p>
		 * Get /#Action=CreateChangeSet
		 * @param {string} StackName The name or the unique ID of the stack for which you are creating a change set. AWS CloudFormation generates the change set by comparing this stack's information with the information that you submit, such as a modified template or different parameter input values.
		 * @param {string} TemplateBody <p>A structure that contains the body of the revised template, with a minimum length of 1 byte and a maximum length of 51,200 bytes. AWS CloudFormation generates the change set by comparing this template with the template of the stack that you specified.</p> <p>Conditional: You must specify only <code>TemplateBody</code> or <code>TemplateURL</code>.</p>
		 * @param {string} TemplateURL <p>The location of the file that contains the revised template. The URL must point to a template (max size: 460,800 bytes) that is located in an S3 bucket. AWS CloudFormation generates the change set by comparing this template with the stack that you specified.</p> <p>Conditional: You must specify only <code>TemplateBody</code> or <code>TemplateURL</code>.</p>
		 * @param {boolean} UsePreviousTemplate Whether to reuse the template that is associated with the stack to create the change set.
		 * @param {Array<Parameter>} Parameters A list of <code>Parameter</code> structures that specify input parameters for the change set. For more information, see the <a>Parameter</a> data type.
		 * @param {Array<Capability>} Capabilities <p>In some cases, you must explicitly acknowledge that your stack template contains certain capabilities in order for AWS CloudFormation to create the stack.</p> <ul> <li> <p> <code>CAPABILITY_IAM</code> and <code>CAPABILITY_NAMED_IAM</code> </p> <p>Some stack templates might include resources that can affect permissions in your AWS account; for example, by creating new AWS Identity and Access Management (IAM) users. For those stacks, you must explicitly acknowledge this by specifying one of these capabilities.</p> <p>The following IAM resources require you to specify either the <code>CAPABILITY_IAM</code> or <code>CAPABILITY_NAMED_IAM</code> capability.</p> <ul> <li> <p>If you have IAM resources, you can specify either capability. </p> </li> <li> <p>If you have IAM resources with custom names, you <i>must</i> specify <code>CAPABILITY_NAMED_IAM</code>. </p> </li> <li> <p>If you don't specify either of these capabilities, AWS CloudFormation returns an <code>InsufficientCapabilities</code> error.</p> </li> </ul> <p>If your stack template contains these resources, we recommend that you review all permissions associated with them and edit their permissions if necessary.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-accesskey.html"> AWS::IAM::AccessKey</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-group.html"> AWS::IAM::Group</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html"> AWS::IAM::InstanceProfile</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-policy.html"> AWS::IAM::Policy</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html"> AWS::IAM::Role</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-user.html"> AWS::IAM::User</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-addusertogroup.html"> AWS::IAM::UserToGroupAddition</a> </p> </li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#capabilities">Acknowledging IAM Resources in AWS CloudFormation Templates</a>.</p> </li> <li> <p> <code>CAPABILITY_AUTO_EXPAND</code> </p> <p>Some template contain macros. Macros perform custom processing on templates; this can include simple actions like find-and-replace operations, all the way to extensive transformations of entire templates. Because of this, users typically create a change set from the processed template, so that they can review the changes resulting from the macros before actually creating the stack. If your stack template contains one or more macros, and you choose to create a stack directly from the processed template, without first reviewing the resulting changes in a change set, you must acknowledge this capability. This includes the <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/create-reusable-transform-function-snippets-and-add-to-your-template-with-aws-include-transform.html">AWS::Include</a> and <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-aws-serverless.html">AWS::Serverless</a> transforms, which are macros hosted by AWS CloudFormation.</p> <note> <p>This capacity does not apply to creating change sets, and specifying it when creating change sets has no effect.</p> <p>Also, change sets do not currently support nested stacks. If you want to create a stack from a stack template that contains macros <i>and</i> nested stacks, you must create or update the stack directly from the template using the <a>CreateStack</a> or <a>UpdateStack</a> action, and specifying this capability.</p> </note> <p>For more information on macros, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-macros.html">Using AWS CloudFormation Macros to Perform Custom Processing on Templates</a>.</p> </li> </ul>
		 * @param {Array<ResourceType>} ResourceTypes <p>The template resource types that you have permissions to work with if you execute this change set, such as <code>AWS::EC2::Instance</code>, <code>AWS::EC2::*</code>, or <code>Custom::MyCustomInstance</code>.</p> <p>If the list of resource types doesn't include a resource type that you're updating, the stack update fails. By default, AWS CloudFormation grants permissions to all resource types. AWS Identity and Access Management (IAM) uses this parameter for condition keys in IAM policies for AWS CloudFormation. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html">Controlling Access with AWS Identity and Access Management</a> in the AWS CloudFormation User Guide.</p>
		 * @param {string} RoleARN <p>The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role that AWS CloudFormation assumes when executing the change set. AWS CloudFormation uses the role's credentials to make calls on your behalf. AWS CloudFormation uses this role for all future operations on the stack. As long as users have permission to operate on the stack, AWS CloudFormation uses this role even if the users don't have permission to pass it. Ensure that the role grants least privilege.</p> <p>If you don't specify a value, AWS CloudFormation uses the role that was previously associated with the stack. If no role is available, AWS CloudFormation uses a temporary session that is generated from your user credentials.</p>
		 * @param {string} RollbackConfiguration The rollback triggers for AWS CloudFormation to monitor during stack creation and updating operations, and for the specified monitoring period afterwards.
		 * @param {Array<NotificationARN>} NotificationARNs The Amazon Resource Names (ARNs) of Amazon Simple Notification Service (Amazon SNS) topics that AWS CloudFormation associates with the stack. To remove all associated notification topics, specify an empty list.
		 * @param {Array<Tag>} Tags Key-value pairs to associate with this stack. AWS CloudFormation also propagates these tags to resources in the stack. You can specify a maximum of 50 tags.
		 * @param {string} ChangeSetName <p>The name of the change set. The name must be unique among all change sets that are associated with the specified stack.</p> <p>A change set name can contain only alphanumeric, case sensitive characters and hyphens. It must start with an alphabetic character and cannot exceed 128 characters.</p>
		 * @param {string} ClientToken A unique identifier for this <code>CreateChangeSet</code> request. Specify this token if you plan to retry requests so that AWS CloudFormation knows that you're not attempting to create another change set with the same name. You might retry <code>CreateChangeSet</code> requests to ensure that AWS CloudFormation successfully received them.
		 * @param {string} Description A description to help you identify this change set.
		 * @param {ChangeSetType} ChangeSetType <p>The type of change set operation. To create a change set for a new stack, specify <code>CREATE</code>. To create a change set for an existing stack, specify <code>UPDATE</code>. To create a change set for an import operation, specify <code>IMPORT</code>.</p> <p>If you create a change set for a new stack, AWS Cloudformation creates a stack with a unique stack ID, but no template or resources. The stack will be in the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-describing-stacks.html#d0e11995"> <code>REVIEW_IN_PROGRESS</code> </a> state until you execute the change set.</p> <p>By default, AWS CloudFormation specifies <code>UPDATE</code>. You can't use the <code>UPDATE</code> type to create a change set for a new stack or the <code>CREATE</code> type to create a change set for an existing stack.</p>
		 * @param {Array<ResourceToImport>} ResourcesToImport The resources to import into your stack.
		 * @return {void} Success
		 */
		GET_CreateChangeSet(StackName: string, TemplateBody: string, TemplateURL: string, UsePreviousTemplate: boolean, Parameters: Array<Parameter>, Capabilities: Array<Capability>, ResourceTypes: Array<ResourceType>, RoleARN: string, RollbackConfiguration: string, NotificationARNs: Array<NotificationARN>, Tags: Array<Tag>, ChangeSetName: string, ClientToken: string, Description: string, ChangeSetType: ChangeSetType, ResourcesToImport: Array<ResourceToImport>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.get('/#Action=CreateChangeSet?StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&TemplateBody=' + (TemplateBody == null ? '' : encodeURIComponent(TemplateBody)) + '&TemplateURL=' + (TemplateURL == null ? '' : encodeURIComponent(TemplateURL)) + '&UsePreviousTemplate=' + UsePreviousTemplate + '&' + Parameters.map(z => `Parameters=${z}`).join('&') + '&' + Capabilities.map(z => `Capabilities=${z}`).join('&') + '&' + ResourceTypes.map(z => `ResourceTypes=${z}`).join('&') + '&RoleARN=' + (RoleARN == null ? '' : encodeURIComponent(RoleARN)) + '&RollbackConfiguration=' + (RollbackConfiguration == null ? '' : encodeURIComponent(RollbackConfiguration)) + '&' + NotificationARNs.map(z => `NotificationARNs=${z}`).join('&') + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&ChangeSetName=' + (ChangeSetName == null ? '' : encodeURIComponent(ChangeSetName)) + '&ClientToken=' + (ClientToken == null ? '' : encodeURIComponent(ClientToken)) + '&Description=' + (Description == null ? '' : encodeURIComponent(Description)) + '&ChangeSetType=' + ChangeSetType + '&' + ResourcesToImport.map(z => `ResourcesToImport=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Creates a stack as specified in the template. After the call completes successfully, the stack creation starts. You can check the status of the stack via the <a>DescribeStacks</a> API.
		 * Get /#Action=CreateStack
		 * @param {string} StackName <p>The name that is associated with the stack. The name must be unique in the Region in which you are creating the stack.</p> <note> <p>A stack name can contain only alphanumeric characters (case sensitive) and hyphens. It must start with an alphabetic character and cannot be longer than 128 characters.</p> </note>
		 * @param {string} TemplateBody <p>Structure containing the template body with a minimum length of 1 byte and a maximum length of 51,200 bytes. For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a> in the AWS CloudFormation User Guide.</p> <p>Conditional: You must specify either the <code>TemplateBody</code> or the <code>TemplateURL</code> parameter, but not both.</p>
		 * @param {string} TemplateURL <p>Location of file containing the template body. The URL must point to a template (max size: 460,800 bytes) that is located in an Amazon S3 bucket. For more information, go to the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a> in the AWS CloudFormation User Guide.</p> <p>Conditional: You must specify either the <code>TemplateBody</code> or the <code>TemplateURL</code> parameter, but not both.</p>
		 * @param {Array<Parameter>} Parameters A list of <code>Parameter</code> structures that specify input parameters for the stack. For more information, see the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_Parameter.html">Parameter</a> data type.
		 * @param {boolean} DisableRollback <p>Set to <code>true</code> to disable rollback of the stack if stack creation failed. You can specify either <code>DisableRollback</code> or <code>OnFailure</code>, but not both.</p> <p>Default: <code>false</code> </p>
		 * @param {string} RollbackConfiguration The rollback triggers for AWS CloudFormation to monitor during stack creation and updating operations, and for the specified monitoring period afterwards.
		 * @param {number} TimeoutInMinutes The amount of time that can pass before the stack status becomes CREATE_FAILED; if <code>DisableRollback</code> is not set or is set to <code>false</code>, the stack will be rolled back.
		 * @param {Array<NotificationARN>} NotificationARNs The Simple Notification Service (SNS) topic ARNs to publish stack related events. You can find your SNS topic ARNs using the SNS console or your Command Line Interface (CLI).
		 * @param {Array<Capability>} Capabilities <p>In some cases, you must explicitly acknowledge that your stack template contains certain capabilities in order for AWS CloudFormation to create the stack.</p> <ul> <li> <p> <code>CAPABILITY_IAM</code> and <code>CAPABILITY_NAMED_IAM</code> </p> <p>Some stack templates might include resources that can affect permissions in your AWS account; for example, by creating new AWS Identity and Access Management (IAM) users. For those stacks, you must explicitly acknowledge this by specifying one of these capabilities.</p> <p>The following IAM resources require you to specify either the <code>CAPABILITY_IAM</code> or <code>CAPABILITY_NAMED_IAM</code> capability.</p> <ul> <li> <p>If you have IAM resources, you can specify either capability. </p> </li> <li> <p>If you have IAM resources with custom names, you <i>must</i> specify <code>CAPABILITY_NAMED_IAM</code>. </p> </li> <li> <p>If you don't specify either of these capabilities, AWS CloudFormation returns an <code>InsufficientCapabilities</code> error.</p> </li> </ul> <p>If your stack template contains these resources, we recommend that you review all permissions associated with them and edit their permissions if necessary.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-accesskey.html"> AWS::IAM::AccessKey</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-group.html"> AWS::IAM::Group</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html"> AWS::IAM::InstanceProfile</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-policy.html"> AWS::IAM::Policy</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html"> AWS::IAM::Role</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-user.html"> AWS::IAM::User</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-addusertogroup.html"> AWS::IAM::UserToGroupAddition</a> </p> </li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#capabilities">Acknowledging IAM Resources in AWS CloudFormation Templates</a>.</p> </li> <li> <p> <code>CAPABILITY_AUTO_EXPAND</code> </p> <p>Some template contain macros. Macros perform custom processing on templates; this can include simple actions like find-and-replace operations, all the way to extensive transformations of entire templates. Because of this, users typically create a change set from the processed template, so that they can review the changes resulting from the macros before actually creating the stack. If your stack template contains one or more macros, and you choose to create a stack directly from the processed template, without first reviewing the resulting changes in a change set, you must acknowledge this capability. This includes the <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/create-reusable-transform-function-snippets-and-add-to-your-template-with-aws-include-transform.html">AWS::Include</a> and <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-aws-serverless.html">AWS::Serverless</a> transforms, which are macros hosted by AWS CloudFormation.</p> <p>Change sets do not currently support nested stacks. If you want to create a stack from a stack template that contains macros <i>and</i> nested stacks, you must create the stack directly from the template using this capability.</p> <important> <p>You should only create stacks directly from a stack template that contains macros if you know what processing the macro performs.</p> <p>Each macro relies on an underlying Lambda service function for processing stack templates. Be aware that the Lambda function owner can update the function operation without AWS CloudFormation being notified.</p> </important> <p>For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-macros.html">Using AWS CloudFormation Macros to Perform Custom Processing on Templates</a>.</p> </li> </ul>
		 * @param {Array<ResourceType>} ResourceTypes <p>The template resource types that you have permissions to work with for this create stack action, such as <code>AWS::EC2::Instance</code>, <code>AWS::EC2::*</code>, or <code>Custom::MyCustomInstance</code>. Use the following syntax to describe template resource types: <code>AWS::*</code> (for all AWS resource), <code>Custom::*</code> (for all custom resources), <code>Custom::<i>logical_ID</i> </code> (for a specific custom resource), <code>AWS::<i>service_name</i>::*</code> (for all resources of a particular AWS service), and <code>AWS::<i>service_name</i>::<i>resource_logical_ID</i> </code> (for a specific AWS resource).</p> <p>If the list of resource types doesn't include a resource that you're creating, the stack creation fails. By default, AWS CloudFormation grants permissions to all resource types. AWS Identity and Access Management (IAM) uses this parameter for AWS CloudFormation-specific condition keys in IAM policies. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html">Controlling Access with AWS Identity and Access Management</a>.</p>
		 * @param {string} RoleARN <p>The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role that AWS CloudFormation assumes to create the stack. AWS CloudFormation uses the role's credentials to make calls on your behalf. AWS CloudFormation always uses this role for all future operations on the stack. As long as users have permission to operate on the stack, AWS CloudFormation uses this role even if the users don't have permission to pass it. Ensure that the role grants least privilege.</p> <p>If you don't specify a value, AWS CloudFormation uses the role that was previously associated with the stack. If no role is available, AWS CloudFormation uses a temporary session that is generated from your user credentials.</p>
		 * @param {OnFailure} OnFailure <p>Determines what action will be taken if stack creation fails. This must be one of: DO_NOTHING, ROLLBACK, or DELETE. You can specify either <code>OnFailure</code> or <code>DisableRollback</code>, but not both.</p> <p>Default: <code>ROLLBACK</code> </p>
		 * @param {string} StackPolicyBody Structure containing the stack policy body. For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/protect-stack-resources.html"> Prevent Updates to Stack Resources</a> in the <i>AWS CloudFormation User Guide</i>. You can specify either the <code>StackPolicyBody</code> or the <code>StackPolicyURL</code> parameter, but not both.
		 * @param {string} StackPolicyURL Location of a file containing the stack policy. The URL must point to a policy (maximum size: 16 KB) located in an S3 bucket in the same Region as the stack. You can specify either the <code>StackPolicyBody</code> or the <code>StackPolicyURL</code> parameter, but not both.
		 * @param {Array<Tag>} Tags Key-value pairs to associate with this stack. AWS CloudFormation also propagates these tags to the resources created in the stack. A maximum number of 50 tags can be specified.
		 * @param {string} ClientRequestToken <p>A unique identifier for this <code>CreateStack</code> request. Specify this token if you plan to retry requests so that AWS CloudFormation knows that you're not attempting to create a stack with the same name. You might retry <code>CreateStack</code> requests to ensure that AWS CloudFormation successfully received them.</p> <p>All events triggered by a given stack operation are assigned the same client request token, which you can use to track operations. For example, if you execute a <code>CreateStack</code> operation with the token <code>token1</code>, then all the <code>StackEvents</code> generated by that operation will have <code>ClientRequestToken</code> set as <code>token1</code>.</p> <p>In the console, stack operations display the client request token on the Events tab. Stack operations that are initiated from the console use the token format <i>Console-StackOperation-ID</i>, which helps you easily identify the stack operation . For example, if you create a stack using the console, each stack event would be assigned the same token in the following format: <code>Console-CreateStack-7f59c3cf-00d2-40c7-b2ff-e75db0987002</code>. </p>
		 * @param {boolean} EnableTerminationProtection <p>Whether to enable termination protection on the specified stack. If a user attempts to delete a stack with termination protection enabled, the operation fails and the stack remains unchanged. For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-protect-stacks.html">Protecting a Stack From Being Deleted</a> in the <i>AWS CloudFormation User Guide</i>. Termination protection is disabled on stacks by default. </p> <p> For <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html">nested stacks</a>, termination protection is set on the root stack and cannot be changed directly on the nested stack.</p>
		 * @return {void} Success
		 */
		GET_CreateStack(StackName: string, TemplateBody: string, TemplateURL: string, Parameters: Array<Parameter>, DisableRollback: boolean, RollbackConfiguration: string, TimeoutInMinutes: number, NotificationARNs: Array<NotificationARN>, Capabilities: Array<Capability>, ResourceTypes: Array<ResourceType>, RoleARN: string, OnFailure: OnFailure, StackPolicyBody: string, StackPolicyURL: string, Tags: Array<Tag>, ClientRequestToken: string, EnableTerminationProtection: boolean, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.get('/#Action=CreateStack?StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&TemplateBody=' + (TemplateBody == null ? '' : encodeURIComponent(TemplateBody)) + '&TemplateURL=' + (TemplateURL == null ? '' : encodeURIComponent(TemplateURL)) + '&' + Parameters.map(z => `Parameters=${z}`).join('&') + '&DisableRollback=' + DisableRollback + '&RollbackConfiguration=' + (RollbackConfiguration == null ? '' : encodeURIComponent(RollbackConfiguration)) + '&TimeoutInMinutes=' + TimeoutInMinutes + '&' + NotificationARNs.map(z => `NotificationARNs=${z}`).join('&') + '&' + Capabilities.map(z => `Capabilities=${z}`).join('&') + '&' + ResourceTypes.map(z => `ResourceTypes=${z}`).join('&') + '&RoleARN=' + (RoleARN == null ? '' : encodeURIComponent(RoleARN)) + '&OnFailure=' + OnFailure + '&StackPolicyBody=' + (StackPolicyBody == null ? '' : encodeURIComponent(StackPolicyBody)) + '&StackPolicyURL=' + (StackPolicyURL == null ? '' : encodeURIComponent(StackPolicyURL)) + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&ClientRequestToken=' + (ClientRequestToken == null ? '' : encodeURIComponent(ClientRequestToken)) + '&EnableTerminationProtection=' + EnableTerminationProtection + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Creates stack instances for the specified accounts, within the specified Regions. A stack instance refers to a stack in a specific account and Region. You must specify at least one value for either <code>Accounts</code> or <code>DeploymentTargets</code>, and you must specify at least one value for <code>Regions</code>.
		 * Get /#Action=CreateStackInstances
		 * @param {string} StackSetName The name or unique ID of the stack set that you want to create stack instances from.
		 * @param {Array<Account>} Accounts <p>[<code>Self-managed</code> permissions] The names of one or more AWS accounts that you want to create stack instances in the specified Region(s) for.</p> <p>You can specify <code>Accounts</code> or <code>DeploymentTargets</code>, but not both.</p>
		 * @param {string} DeploymentTargets <p>[<code>Service-managed</code> permissions] The AWS Organizations accounts for which to create stack instances in the specified Regions.</p> <p>You can specify <code>Accounts</code> or <code>DeploymentTargets</code>, but not both.</p>
		 * @param {Array<Region>} Regions The names of one or more Regions where you want to create stack instances using the specified AWS account(s). 
		 * @param {Array<Parameter>} ParameterOverrides <p>A list of stack set parameters whose values you want to override in the selected stack instances.</p> <p>Any overridden parameter values will be applied to all stack instances in the specified accounts and Regions. When specifying parameters and their values, be aware of how AWS CloudFormation sets parameter values during stack instance operations:</p> <ul> <li> <p>To override the current value for a parameter, include the parameter and specify its value.</p> </li> <li> <p>To leave a parameter set to its present value, you can do one of the following:</p> <ul> <li> <p>Do not include the parameter in the list.</p> </li> <li> <p>Include the parameter and specify <code>UsePreviousValue</code> as <code>true</code>. (You cannot specify both a value and set <code>UsePreviousValue</code> to <code>true</code>.)</p> </li> </ul> </li> <li> <p>To set all overridden parameter back to the values specified in the stack set, specify a parameter list but do not include any parameters.</p> </li> <li> <p>To leave all parameters set to their present values, do not specify this property at all.</p> </li> </ul> <p>During stack set updates, any parameter values overridden for a stack instance are not updated, but retain their overridden value.</p> <p>You can only override the parameter <i>values</i> that are specified in the stack set; to add or delete a parameter itself, use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackSet.html">UpdateStackSet</a> to update the stack set template.</p>
		 * @param {string} OperationPreferences Preferences for how AWS CloudFormation performs this stack set operation.
		 * @param {string} OperationId <p>The unique identifier for this stack set operation. </p> <p>The operation ID also functions as an idempotency token, to ensure that AWS CloudFormation performs the stack set operation only once, even if you retry the request multiple times. You might retry stack set operation requests to ensure that AWS CloudFormation successfully received them.</p> <p>If you don't specify an operation ID, the SDK generates one automatically. </p> <p>Repeating this stack set operation with a new operation ID retries all stack instances whose status is <code>OUTDATED</code>. </p>
		 * @return {void} Success
		 */
		GET_CreateStackInstances(StackSetName: string, Accounts: Array<Account>, DeploymentTargets: string, Regions: Array<Region>, ParameterOverrides: Array<Parameter>, OperationPreferences: string, OperationId: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.get('/#Action=CreateStackInstances?StackSetName=' + (StackSetName == null ? '' : encodeURIComponent(StackSetName)) + '&' + Accounts.map(z => `Accounts=${z}`).join('&') + '&DeploymentTargets=' + (DeploymentTargets == null ? '' : encodeURIComponent(DeploymentTargets)) + '&' + Regions.map(z => `Regions=${z}`).join('&') + '&' + ParameterOverrides.map(z => `ParameterOverrides=${z}`).join('&') + '&OperationPreferences=' + (OperationPreferences == null ? '' : encodeURIComponent(OperationPreferences)) + '&OperationId=' + (OperationId == null ? '' : encodeURIComponent(OperationId)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Creates a stack set.
		 * Get /#Action=CreateStackSet
		 * @param {string} StackSetName <p>The name to associate with the stack set. The name must be unique in the Region where you create your stack set.</p> <note> <p>A stack name can contain only alphanumeric characters (case-sensitive) and hyphens. It must start with an alphabetic character and can't be longer than 128 characters.</p> </note>
		 * @param {string} Description A description of the stack set. You can use the description to identify the stack set's purpose or other important information.
		 * @param {string} TemplateBody <p>The structure that contains the template body, with a minimum length of 1 byte and a maximum length of 51,200 bytes. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a> in the AWS CloudFormation User Guide.</p> <p>Conditional: You must specify either the TemplateBody or the TemplateURL parameter, but not both.</p>
		 * @param {string} TemplateURL <p>The location of the file that contains the template body. The URL must point to a template (maximum size: 460,800 bytes) that's located in an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a> in the AWS CloudFormation User Guide.</p> <p>Conditional: You must specify either the TemplateBody or the TemplateURL parameter, but not both.</p>
		 * @param {Array<Parameter>} Parameters The input parameters for the stack set template. 
		 * @param {Array<Capability>} Capabilities <p>In some cases, you must explicitly acknowledge that your stack set template contains certain capabilities in order for AWS CloudFormation to create the stack set and related stack instances.</p> <ul> <li> <p> <code>CAPABILITY_IAM</code> and <code>CAPABILITY_NAMED_IAM</code> </p> <p>Some stack templates might include resources that can affect permissions in your AWS account; for example, by creating new AWS Identity and Access Management (IAM) users. For those stack sets, you must explicitly acknowledge this by specifying one of these capabilities.</p> <p>The following IAM resources require you to specify either the <code>CAPABILITY_IAM</code> or <code>CAPABILITY_NAMED_IAM</code> capability.</p> <ul> <li> <p>If you have IAM resources, you can specify either capability. </p> </li> <li> <p>If you have IAM resources with custom names, you <i>must</i> specify <code>CAPABILITY_NAMED_IAM</code>. </p> </li> <li> <p>If you don't specify either of these capabilities, AWS CloudFormation returns an <code>InsufficientCapabilities</code> error.</p> </li> </ul> <p>If your stack template contains these resources, we recommend that you review all permissions associated with them and edit their permissions if necessary.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-accesskey.html"> AWS::IAM::AccessKey</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-group.html"> AWS::IAM::Group</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html"> AWS::IAM::InstanceProfile</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-policy.html"> AWS::IAM::Policy</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html"> AWS::IAM::Role</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-user.html"> AWS::IAM::User</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-addusertogroup.html"> AWS::IAM::UserToGroupAddition</a> </p> </li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#capabilities">Acknowledging IAM Resources in AWS CloudFormation Templates</a>.</p> </li> <li> <p> <code>CAPABILITY_AUTO_EXPAND</code> </p> <p>Some templates contain macros. If your stack template contains one or more macros, and you choose to create a stack directly from the processed template, without first reviewing the resulting changes in a change set, you must acknowledge this capability. For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-macros.html">Using AWS CloudFormation Macros to Perform Custom Processing on Templates</a>.</p> <note> <p>Stack sets do not currently support macros in stack templates. (This includes the <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/create-reusable-transform-function-snippets-and-add-to-your-template-with-aws-include-transform.html">AWS::Include</a> and <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-aws-serverless.html">AWS::Serverless</a> transforms, which are macros hosted by AWS CloudFormation.) Even if you specify this capability, if you include a macro in your template the stack set operation will fail.</p> </note> </li> </ul>
		 * @param {Array<Tag>} Tags <p>The key-value pairs to associate with this stack set and the stacks created from it. AWS CloudFormation also propagates these tags to supported resources that are created in the stacks. A maximum number of 50 tags can be specified.</p> <p>If you specify tags as part of a <code>CreateStackSet</code> action, AWS CloudFormation checks to see if you have the required IAM permission to tag resources. If you don't, the entire <code>CreateStackSet</code> action fails with an <code>access denied</code> error, and the stack set is not created.</p>
		 * @param {string} AdministrationRoleARN <p>The Amazon Resource Number (ARN) of the IAM role to use to create this stack set. </p> <p>Specify an IAM role only if you are using customized administrator roles to control which users or groups can manage specific stack sets within the same administrator account. For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs.html">Prerequisites: Granting Permissions for Stack Set Operations</a> in the <i>AWS CloudFormation User Guide</i>.</p>
		 * @param {string} ExecutionRoleName <p>The name of the IAM execution role to use to create the stack set. If you do not specify an execution role, AWS CloudFormation uses the <code>AWSCloudFormationStackSetExecutionRole</code> role for the stack set operation.</p> <p>Specify an IAM role only if you are using customized execution roles to control which stack resources users and groups can include in their stack sets. </p>
		 * @param {PermissionModels} PermissionModel <p>Describes how the IAM roles required for stack set operations are created. By default, <code>SELF-MANAGED</code> is specified.</p> <ul> <li> <p>With <code>self-managed</code> permissions, you must create the administrator and execution roles required to deploy to target accounts. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs-self-managed.html">Grant Self-Managed Stack Set Permissions</a>.</p> </li> <li> <p>With <code>service-managed</code> permissions, StackSets automatically creates the IAM roles required to deploy to accounts managed by AWS Organizations. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs-service-managed.html">Grant Service-Managed Stack Set Permissions</a>.</p> </li> </ul>
		 * @param {string} AutoDeployment Describes whether StackSets automatically deploys to AWS Organizations accounts that are added to the target organization or organizational unit (OU). Specify only if <code>PermissionModel</code> is <code>SERVICE_MANAGED</code>.
		 * @param {string} ClientRequestToken <p>A unique identifier for this <code>CreateStackSet</code> request. Specify this token if you plan to retry requests so that AWS CloudFormation knows that you're not attempting to create another stack set with the same name. You might retry <code>CreateStackSet</code> requests to ensure that AWS CloudFormation successfully received them.</p> <p>If you don't specify an operation ID, the SDK generates one automatically. </p>
		 * @return {void} Success
		 */
		GET_CreateStackSet(StackSetName: string, Description: string, TemplateBody: string, TemplateURL: string, Parameters: Array<Parameter>, Capabilities: Array<Capability>, Tags: Array<Tag>, AdministrationRoleARN: string, ExecutionRoleName: string, PermissionModel: PermissionModels, AutoDeployment: string, ClientRequestToken: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.get('/#Action=CreateStackSet?StackSetName=' + (StackSetName == null ? '' : encodeURIComponent(StackSetName)) + '&Description=' + (Description == null ? '' : encodeURIComponent(Description)) + '&TemplateBody=' + (TemplateBody == null ? '' : encodeURIComponent(TemplateBody)) + '&TemplateURL=' + (TemplateURL == null ? '' : encodeURIComponent(TemplateURL)) + '&' + Parameters.map(z => `Parameters=${z}`).join('&') + '&' + Capabilities.map(z => `Capabilities=${z}`).join('&') + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&AdministrationRoleARN=' + (AdministrationRoleARN == null ? '' : encodeURIComponent(AdministrationRoleARN)) + '&ExecutionRoleName=' + (ExecutionRoleName == null ? '' : encodeURIComponent(ExecutionRoleName)) + '&PermissionModel=' + PermissionModel + '&AutoDeployment=' + (AutoDeployment == null ? '' : encodeURIComponent(AutoDeployment)) + '&ClientRequestToken=' + (ClientRequestToken == null ? '' : encodeURIComponent(ClientRequestToken)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Deletes the specified change set. Deleting change sets ensures that no one executes the wrong change set.</p> <p>If the call successfully completes, AWS CloudFormation successfully deleted the change set.</p>
		 * Get /#Action=DeleteChangeSet
		 * @param {string} ChangeSetName The name or Amazon Resource Name (ARN) of the change set that you want to delete.
		 * @param {string} StackName If you specified the name of a change set to delete, specify the stack name or ID (ARN) that is associated with it.
		 * @return {void} Success
		 */
		GET_DeleteChangeSet(ChangeSetName: string, StackName: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.get('/#Action=DeleteChangeSet?ChangeSetName=' + (ChangeSetName == null ? '' : encodeURIComponent(ChangeSetName)) + '&StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes a specified stack. Once the call completes successfully, stack deletion starts. Deleted stacks do not show up in the <a>DescribeStacks</a> API if the deletion has been completed successfully.
		 * Get /#Action=DeleteStack
		 * @param {string} StackName The name or the unique stack ID that is associated with the stack.
		 * @param {Array<LogicalResourceId>} RetainResources <p>For stacks in the <code>DELETE_FAILED</code> state, a list of resource logical IDs that are associated with the resources you want to retain. During deletion, AWS CloudFormation deletes the stack but does not delete the retained resources.</p> <p>Retaining resources is useful when you cannot delete a resource, such as a non-empty S3 bucket, but you want to delete the stack.</p>
		 * @param {string} RoleARN <p>The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role that AWS CloudFormation assumes to delete the stack. AWS CloudFormation uses the role's credentials to make calls on your behalf.</p> <p>If you don't specify a value, AWS CloudFormation uses the role that was previously associated with the stack. If no role is available, AWS CloudFormation uses a temporary session that is generated from your user credentials.</p>
		 * @param {string} ClientRequestToken <p>A unique identifier for this <code>DeleteStack</code> request. Specify this token if you plan to retry requests so that AWS CloudFormation knows that you're not attempting to delete a stack with the same name. You might retry <code>DeleteStack</code> requests to ensure that AWS CloudFormation successfully received them.</p> <p>All events triggered by a given stack operation are assigned the same client request token, which you can use to track operations. For example, if you execute a <code>CreateStack</code> operation with the token <code>token1</code>, then all the <code>StackEvents</code> generated by that operation will have <code>ClientRequestToken</code> set as <code>token1</code>.</p> <p>In the console, stack operations display the client request token on the Events tab. Stack operations that are initiated from the console use the token format <i>Console-StackOperation-ID</i>, which helps you easily identify the stack operation . For example, if you create a stack using the console, each stack event would be assigned the same token in the following format: <code>Console-CreateStack-7f59c3cf-00d2-40c7-b2ff-e75db0987002</code>. </p>
		 * @return {void} Success
		 */
		GET_DeleteStack(StackName: string, RetainResources: Array<LogicalResourceId>, RoleARN: string, ClientRequestToken: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.get('/#Action=DeleteStack?StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&' + RetainResources.map(z => `RetainResources=${z}`).join('&') + '&RoleARN=' + (RoleARN == null ? '' : encodeURIComponent(RoleARN)) + '&ClientRequestToken=' + (ClientRequestToken == null ? '' : encodeURIComponent(ClientRequestToken)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes stack instances for the specified accounts, in the specified Regions.
		 * Get /#Action=DeleteStackInstances
		 * @param {string} StackSetName The name or unique ID of the stack set that you want to delete stack instances for.
		 * @param {Array<Account>} Accounts <p>[<code>Self-managed</code> permissions] The names of the AWS accounts that you want to delete stack instances for.</p> <p>You can specify <code>Accounts</code> or <code>DeploymentTargets</code>, but not both.</p>
		 * @param {string} DeploymentTargets <p>[<code>Service-managed</code> permissions] The AWS Organizations accounts from which to delete stack instances.</p> <p>You can specify <code>Accounts</code> or <code>DeploymentTargets</code>, but not both.</p>
		 * @param {Array<Region>} Regions The Regions where you want to delete stack set instances. 
		 * @param {string} OperationPreferences Preferences for how AWS CloudFormation performs this stack set operation.
		 * @param {boolean} RetainStacks <p>Removes the stack instances from the specified stack set, but doesn't delete the stacks. You can't reassociate a retained stack or add an existing, saved stack to a new stack set.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation options</a>.</p>
		 * @param {string} OperationId <p>The unique identifier for this stack set operation. </p> <p>If you don't specify an operation ID, the SDK generates one automatically. </p> <p>The operation ID also functions as an idempotency token, to ensure that AWS CloudFormation performs the stack set operation only once, even if you retry the request multiple times. You can retry stack set operation requests to ensure that AWS CloudFormation successfully received them.</p> <p>Repeating this stack set operation with a new operation ID retries all stack instances whose status is <code>OUTDATED</code>. </p>
		 * @return {void} Success
		 */
		GET_DeleteStackInstances(StackSetName: string, Accounts: Array<Account>, DeploymentTargets: string, Regions: Array<Region>, OperationPreferences: string, RetainStacks: boolean, OperationId: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.get('/#Action=DeleteStackInstances?StackSetName=' + (StackSetName == null ? '' : encodeURIComponent(StackSetName)) + '&' + Accounts.map(z => `Accounts=${z}`).join('&') + '&DeploymentTargets=' + (DeploymentTargets == null ? '' : encodeURIComponent(DeploymentTargets)) + '&' + Regions.map(z => `Regions=${z}`).join('&') + '&OperationPreferences=' + (OperationPreferences == null ? '' : encodeURIComponent(OperationPreferences)) + '&RetainStacks=' + RetainStacks + '&OperationId=' + (OperationId == null ? '' : encodeURIComponent(OperationId)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes a stack set. Before you can delete a stack set, all of its member stack instances must be deleted. For more information about how to do this, see <a>DeleteStackInstances</a>.
		 * Get /#Action=DeleteStackSet
		 * @param {string} StackSetName The name or unique ID of the stack set that you're deleting. You can obtain this value by running <a>ListStackSets</a>.
		 * @return {void} Success
		 */
		GET_DeleteStackSet(StackSetName: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.get('/#Action=DeleteStackSet?StackSetName=' + (StackSetName == null ? '' : encodeURIComponent(StackSetName)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Removes a type or type version from active use in the CloudFormation registry. If a type or type version is deregistered, it cannot be used in CloudFormation operations.</p> <p>To deregister a type, you must individually deregister all registered versions of that type. If a type has only a single registered version, deregistering that version results in the type itself being deregistered. </p> <p>You cannot deregister the default version of a type, unless it is the only registered version of that type, in which case the type itself is deregistered as well. </p>
		 * Get /#Action=DeregisterType
		 * @param {string} Arn <p>The Amazon Resource Name (ARN) of the type.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
		 * @param {DescribeTypeOutputType} Type <p>The kind of type.</p> <p>Currently the only valid value is <code>RESOURCE</code>.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
		 * @param {string} TypeName <p>The name of the type.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
		 * @param {string} VersionId The ID of a specific version of the type. The version ID is the value at the end of the Amazon Resource Name (ARN) assigned to the type version when it is registered.
		 * @return {void} Success
		 */
		GET_DeregisterType(Arn: string, Type: DescribeTypeOutputType, TypeName: string, VersionId: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.get('/#Action=DeregisterType?Arn=' + (Arn == null ? '' : encodeURIComponent(Arn)) + '&Type=' + Type + '&TypeName=' + (TypeName == null ? '' : encodeURIComponent(TypeName)) + '&VersionId=' + (VersionId == null ? '' : encodeURIComponent(VersionId)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieves your account's AWS CloudFormation limits, such as the maximum number of stacks that you can create in your account. For more information about account limits, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cloudformation-limits.html">AWS CloudFormation Limits</a> in the <i>AWS CloudFormation User Guide</i>.
		 * Get /#Action=DescribeAccountLimits
		 * @param {string} NextToken A string that identifies the next page of limits that you want to retrieve.
		 * @return {void} Success
		 */
		GET_DescribeAccountLimits(NextToken: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.get('/#Action=DescribeAccountLimits?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the inputs for the change set and a list of changes that AWS CloudFormation will make if you execute the change set. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-changesets.html">Updating Stacks Using Change Sets</a> in the AWS CloudFormation User Guide.
		 * Get /#Action=DescribeChangeSet
		 * @param {string} ChangeSetName The name or Amazon Resource Name (ARN) of the change set that you want to describe.
		 * @param {string} StackName If you specified the name of a change set, specify the stack name or ID (ARN) of the change set you want to describe.
		 * @param {string} NextToken A string (provided by the <a>DescribeChangeSet</a> response output) that identifies the next page of information that you want to retrieve.
		 * @return {void} Success
		 */
		GET_DescribeChangeSet(ChangeSetName: string, StackName: string, NextToken: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.get('/#Action=DescribeChangeSet?ChangeSetName=' + (ChangeSetName == null ? '' : encodeURIComponent(ChangeSetName)) + '&StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Returns information about a stack drift detection operation. A stack drift detection operation detects whether a stack's actual configuration differs, or has <i>drifted</i>, from it's expected configuration, as defined in the stack template and any values specified as template parameters. A stack is considered to have drifted if one or more of its resources have drifted. For more information on stack and resource drift, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to Stacks and Resources</a>.</p> <p>Use <a>DetectStackDrift</a> to initiate a stack drift detection operation. <code>DetectStackDrift</code> returns a <code>StackDriftDetectionId</code> you can use to monitor the progress of the operation using <code>DescribeStackDriftDetectionStatus</code>. Once the drift detection operation has completed, use <a>DescribeStackResourceDrifts</a> to return drift information about the stack and its resources.</p>
		 * Get /#Action=DescribeStackDriftDetectionStatus
		 * @param {string} StackDriftDetectionId <p>The ID of the drift detection results of this operation. </p> <p>AWS CloudFormation generates new results, with a new drift detection ID, each time this operation is run. However, the number of drift results AWS CloudFormation retains for any given stack, and for how long, may vary. </p>
		 * @return {void} Success
		 */
		GET_DescribeStackDriftDetectionStatus(StackDriftDetectionId: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.get('/#Action=DescribeStackDriftDetectionStatus?StackDriftDetectionId=' + (StackDriftDetectionId == null ? '' : encodeURIComponent(StackDriftDetectionId)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Returns all stack related events for a specified stack in reverse chronological order. For more information about a stack's event history, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/concept-stack.html">Stacks</a> in the AWS CloudFormation User Guide.</p> <note> <p>You can list events for stacks that have failed to create or have been deleted by specifying the unique stack identifier (stack ID).</p> </note>
		 * Get /#Action=DescribeStackEvents
		 * @param {string} StackName <p>The name or the unique stack ID that is associated with the stack, which are not always interchangeable:</p> <ul> <li> <p>Running stacks: You can specify either the stack's name or its unique stack ID.</p> </li> <li> <p>Deleted stacks: You must specify the unique stack ID.</p> </li> </ul> <p>Default: There is no default value.</p>
		 * @param {string} NextToken A string that identifies the next page of events that you want to retrieve.
		 * @return {void} Success
		 */
		GET_DescribeStackEvents(StackName: string, NextToken: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.get('/#Action=DescribeStackEvents?StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Returns the stack instance that's associated with the specified stack set, AWS account, and Region.</p> <p>For a list of stack instances that are associated with a specific stack set, use <a>ListStackInstances</a>.</p>
		 * Get /#Action=DescribeStackInstance
		 * @param {string} StackSetName The name or the unique stack ID of the stack set that you want to get stack instance information for.
		 * @param {string} StackInstanceAccount The ID of an AWS account that's associated with this stack instance.
		 * @param {string} StackInstanceRegion The name of a Region that's associated with this stack instance.
		 * @return {void} Success
		 */
		GET_DescribeStackInstance(StackSetName: string, StackInstanceAccount: string, StackInstanceRegion: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.get('/#Action=DescribeStackInstance?StackSetName=' + (StackSetName == null ? '' : encodeURIComponent(StackSetName)) + '&StackInstanceAccount=' + (StackInstanceAccount == null ? '' : encodeURIComponent(StackInstanceAccount)) + '&StackInstanceRegion=' + (StackInstanceRegion == null ? '' : encodeURIComponent(StackInstanceRegion)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Returns a description of the specified resource in the specified stack.</p> <p>For deleted stacks, DescribeStackResource returns resource information for up to 90 days after the stack has been deleted.</p>
		 * Get /#Action=DescribeStackResource
		 * @param {string} StackName <p>The name or the unique stack ID that is associated with the stack, which are not always interchangeable:</p> <ul> <li> <p>Running stacks: You can specify either the stack's name or its unique stack ID.</p> </li> <li> <p>Deleted stacks: You must specify the unique stack ID.</p> </li> </ul> <p>Default: There is no default value.</p>
		 * @param {string} LogicalResourceId <p>The logical name of the resource as specified in the template.</p> <p>Default: There is no default value.</p>
		 * @return {void} Success
		 */
		GET_DescribeStackResource(StackName: string, LogicalResourceId: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.get('/#Action=DescribeStackResource?StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&LogicalResourceId=' + (LogicalResourceId == null ? '' : encodeURIComponent(LogicalResourceId)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Returns drift information for the resources that have been checked for drift in the specified stack. This includes actual and expected configuration values for resources where AWS CloudFormation detects configuration drift.</p> <p>For a given stack, there will be one <code>StackResourceDrift</code> for each stack resource that has been checked for drift. Resources that have not yet been checked for drift are not included. Resources that do not currently support drift detection are not checked, and so not included. For a list of resources that support drift detection, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p> <p>Use <a>DetectStackResourceDrift</a> to detect drift on individual resources, or <a>DetectStackDrift</a> to detect drift on all supported resources for a given stack.</p>
		 * Get /#Action=DescribeStackResourceDrifts
		 * @param {string} StackName The name of the stack for which you want drift information.
		 * @param {Array<StackResourceDriftStatus>} StackResourceDriftStatusFilters <p>The resource drift status values to use as filters for the resource drift results returned.</p> <ul> <li> <p> <code>DELETED</code>: The resource differs from its expected template configuration in that the resource has been deleted.</p> </li> <li> <p> <code>MODIFIED</code>: One or more resource properties differ from their expected template values.</p> </li> <li> <p> <code>IN_SYNC</code>: The resources's actual configuration matches its expected template configuration.</p> </li> <li> <p> <code>NOT_CHECKED</code>: AWS CloudFormation does not currently return this value.</p> </li> </ul>
		 * @param {string} NextToken A string that identifies the next page of stack resource drift results.
		 * @param {number} MaxResults The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a <code>NextToken</code> value that you can assign to the <code>NextToken</code> request parameter to get the next set of results.
		 * @return {void} Success
		 */
		GET_DescribeStackResourceDrifts(StackName: string, StackResourceDriftStatusFilters: Array<StackResourceDriftStatus>, NextToken: string, MaxResults: number, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.get('/#Action=DescribeStackResourceDrifts?StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&' + StackResourceDriftStatusFilters.map(z => `StackResourceDriftStatusFilters=${z}`).join('&') + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Returns AWS resource descriptions for running and deleted stacks. If <code>StackName</code> is specified, all the associated resources that are part of the stack are returned. If <code>PhysicalResourceId</code> is specified, the associated resources of the stack that the resource belongs to are returned.</p> <note> <p>Only the first 100 resources will be returned. If your stack has more resources than this, you should use <code>ListStackResources</code> instead.</p> </note> <p>For deleted stacks, <code>DescribeStackResources</code> returns resource information for up to 90 days after the stack has been deleted.</p> <p>You must specify either <code>StackName</code> or <code>PhysicalResourceId</code>, but not both. In addition, you can specify <code>LogicalResourceId</code> to filter the returned result. For more information about resources, the <code>LogicalResourceId</code> and <code>PhysicalResourceId</code>, go to the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/">AWS CloudFormation User Guide</a>.</p> <note> <p>A <code>ValidationError</code> is returned if you specify both <code>StackName</code> and <code>PhysicalResourceId</code> in the same request.</p> </note>
		 * Get /#Action=DescribeStackResources
		 * @param {string} StackName <p>The name or the unique stack ID that is associated with the stack, which are not always interchangeable:</p> <ul> <li> <p>Running stacks: You can specify either the stack's name or its unique stack ID.</p> </li> <li> <p>Deleted stacks: You must specify the unique stack ID.</p> </li> </ul> <p>Default: There is no default value.</p> <p>Required: Conditional. If you do not specify <code>StackName</code>, you must specify <code>PhysicalResourceId</code>.</p>
		 * @param {string} LogicalResourceId <p>The logical name of the resource as specified in the template.</p> <p>Default: There is no default value.</p>
		 * @param {string} PhysicalResourceId <p>The name or unique identifier that corresponds to a physical instance ID of a resource supported by AWS CloudFormation.</p> <p>For example, for an Amazon Elastic Compute Cloud (EC2) instance, <code>PhysicalResourceId</code> corresponds to the <code>InstanceId</code>. You can pass the EC2 <code>InstanceId</code> to <code>DescribeStackResources</code> to find which stack the instance belongs to and what other resources are part of the stack.</p> <p>Required: Conditional. If you do not specify <code>PhysicalResourceId</code>, you must specify <code>StackName</code>.</p> <p>Default: There is no default value.</p>
		 * @return {void} Success
		 */
		GET_DescribeStackResources(StackName: string, LogicalResourceId: string, PhysicalResourceId: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.get('/#Action=DescribeStackResources?StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&LogicalResourceId=' + (LogicalResourceId == null ? '' : encodeURIComponent(LogicalResourceId)) + '&PhysicalResourceId=' + (PhysicalResourceId == null ? '' : encodeURIComponent(PhysicalResourceId)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the description of the specified stack set.
		 * Get /#Action=DescribeStackSet
		 * @param {string} StackSetName The name or unique ID of the stack set whose description you want.
		 * @return {void} Success
		 */
		GET_DescribeStackSet(StackSetName: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.get('/#Action=DescribeStackSet?StackSetName=' + (StackSetName == null ? '' : encodeURIComponent(StackSetName)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the description of the specified stack set operation.
		 * Get /#Action=DescribeStackSetOperation
		 * @param {string} StackSetName The name or the unique stack ID of the stack set for the stack operation.
		 * @param {string} OperationId The unique ID of the stack set operation. 
		 * @return {void} Success
		 */
		GET_DescribeStackSetOperation(StackSetName: string, OperationId: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.get('/#Action=DescribeStackSetOperation?StackSetName=' + (StackSetName == null ? '' : encodeURIComponent(StackSetName)) + '&OperationId=' + (OperationId == null ? '' : encodeURIComponent(OperationId)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Returns the description for the specified stack; if no stack name was specified, then it returns the description for all the stacks created.</p> <note> <p>If the stack does not exist, an <code>AmazonCloudFormationException</code> is returned.</p> </note>
		 * Get /#Action=DescribeStacks
		 * @param {string} StackName <p>The name or the unique stack ID that is associated with the stack, which are not always interchangeable:</p> <ul> <li> <p>Running stacks: You can specify either the stack's name or its unique stack ID.</p> </li> <li> <p>Deleted stacks: You must specify the unique stack ID.</p> </li> </ul> <p>Default: There is no default value.</p>
		 * @param {string} NextToken A string that identifies the next page of stacks that you want to retrieve.
		 * @return {void} Success
		 */
		GET_DescribeStacks(StackName: string, NextToken: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.get('/#Action=DescribeStacks?StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Returns detailed information about a type that has been registered.</p> <p>If you specify a <code>VersionId</code>, <code>DescribeType</code> returns information about that specific type version. Otherwise, it returns information about the default type version.</p>
		 * Get /#Action=DescribeType
		 * @param {DescribeTypeOutputType} Type <p>The kind of type. </p> <p>Currently the only valid value is <code>RESOURCE</code>.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
		 * @param {string} TypeName <p>The name of the type.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
		 * @param {string} Arn <p>The Amazon Resource Name (ARN) of the type.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
		 * @param {string} VersionId <p>The ID of a specific version of the type. The version ID is the value at the end of the Amazon Resource Name (ARN) assigned to the type version when it is registered.</p> <p>If you specify a <code>VersionId</code>, <code>DescribeType</code> returns information about that specific type version. Otherwise, it returns information about the default type version.</p>
		 * @return {void} Success
		 */
		GET_DescribeType(Type: DescribeTypeOutputType, TypeName: string, Arn: string, VersionId: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.get('/#Action=DescribeType?Type=' + Type + '&TypeName=' + (TypeName == null ? '' : encodeURIComponent(TypeName)) + '&Arn=' + (Arn == null ? '' : encodeURIComponent(Arn)) + '&VersionId=' + (VersionId == null ? '' : encodeURIComponent(VersionId)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Returns information about a type's registration, including its current status and type and version identifiers.</p> <p>When you initiate a registration request using <code> <a>RegisterType</a> </code>, you can then use <code> <a>DescribeTypeRegistration</a> </code> to monitor the progress of that registration request.</p> <p>Once the registration request has completed, use <code> <a>DescribeType</a> </code> to return detailed informaiton about a type.</p>
		 * Get /#Action=DescribeTypeRegistration
		 * @param {string} RegistrationToken <p>The identifier for this registration request.</p> <p>This registration token is generated by CloudFormation when you initiate a registration request using <code> <a>RegisterType</a> </code>.</p>
		 * @return {void} Success
		 */
		GET_DescribeTypeRegistration(RegistrationToken: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.get('/#Action=DescribeTypeRegistration?RegistrationToken=' + (RegistrationToken == null ? '' : encodeURIComponent(RegistrationToken)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Detects whether a stack's actual configuration differs, or has <i>drifted</i>, from it's expected configuration, as defined in the stack template and any values specified as template parameters. For each resource in the stack that supports drift detection, AWS CloudFormation compares the actual configuration of the resource with its expected template configuration. Only resource properties explicitly defined in the stack template are checked for drift. A stack is considered to have drifted if one or more of its resources differ from their expected template configurations. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to Stacks and Resources</a>.</p> <p>Use <code>DetectStackDrift</code> to detect drift on all supported resources for a given stack, or <a>DetectStackResourceDrift</a> to detect drift on individual resources.</p> <p>For a list of stack resources that currently support drift detection, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p> <p> <code>DetectStackDrift</code> can take up to several minutes, depending on the number of resources contained within the stack. Use <a>DescribeStackDriftDetectionStatus</a> to monitor the progress of a detect stack drift operation. Once the drift detection operation has completed, use <a>DescribeStackResourceDrifts</a> to return drift information about the stack and its resources.</p> <p>When detecting drift on a stack, AWS CloudFormation does not detect drift on any nested stacks belonging to that stack. Perform <code>DetectStackDrift</code> directly on the nested stack itself.</p>
		 * Get /#Action=DetectStackDrift
		 * @param {string} StackName The name of the stack for which you want to detect drift. 
		 * @param {Array<LogicalResourceId>} LogicalResourceIds The logical names of any resources you want to use as filters.
		 * @return {void} Success
		 */
		GET_DetectStackDrift(StackName: string, LogicalResourceIds: Array<LogicalResourceId>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.get('/#Action=DetectStackDrift?StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&' + LogicalResourceIds.map(z => `LogicalResourceIds=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Returns information about whether a resource's actual configuration differs, or has <i>drifted</i>, from it's expected configuration, as defined in the stack template and any values specified as template parameters. This information includes actual and expected property values for resources in which AWS CloudFormation detects drift. Only resource properties explicitly defined in the stack template are checked for drift. For more information about stack and resource drift, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to Stacks and Resources</a>.</p> <p>Use <code>DetectStackResourceDrift</code> to detect drift on individual resources, or <a>DetectStackDrift</a> to detect drift on all resources in a given stack that support drift detection.</p> <p>Resources that do not currently support drift detection cannot be checked. For a list of resources that support drift detection, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p>
		 * Get /#Action=DetectStackResourceDrift
		 * @param {string} StackName The name of the stack to which the resource belongs.
		 * @param {string} LogicalResourceId The logical name of the resource for which to return drift information.
		 * @return {void} Success
		 */
		GET_DetectStackResourceDrift(StackName: string, LogicalResourceId: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.get('/#Action=DetectStackResourceDrift?StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&LogicalResourceId=' + (LogicalResourceId == null ? '' : encodeURIComponent(LogicalResourceId)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Detect drift on a stack set. When CloudFormation performs drift detection on a stack set, it performs drift detection on the stack associated with each stack instance in the stack set. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-drift.html">How CloudFormation Performs Drift Detection on a Stack Set</a>.</p> <p> <code>DetectStackSetDrift</code> returns the <code>OperationId</code> of the stack set drift detection operation. Use this operation id with <code> <a>DescribeStackSetOperation</a> </code> to monitor the progress of the drift detection operation. The drift detection operation may take some time, depending on the number of stack instances included in the stack set, as well as the number of resources included in each stack.</p> <p>Once the operation has completed, use the following actions to return drift information:</p> <ul> <li> <p>Use <code> <a>DescribeStackSet</a> </code> to return detailed informaiton about the stack set, including detailed information about the last <i>completed</i> drift operation performed on the stack set. (Information about drift operations that are in progress is not included.)</p> </li> <li> <p>Use <code> <a>ListStackInstances</a> </code> to return a list of stack instances belonging to the stack set, including the drift status and last drift time checked of each instance.</p> </li> <li> <p>Use <code> <a>DescribeStackInstance</a> </code> to return detailed information about a specific stack instance, including its drift status and last drift time checked.</p> </li> </ul> <p>For more information on performing a drift detection operation on a stack set, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-drift.html">Detecting Unmanaged Changes in Stack Sets</a>. </p> <p>You can only run a single drift detection operation on a given stack set at one time. </p> <p>To stop a drift detection stack set operation, use <code> <a>StopStackSetOperation</a> </code>.</p>
		 * Get /#Action=DetectStackSetDrift
		 * @param {string} StackSetName The name of the stack set on which to perform the drift detection operation.
		 * @param {string} OperationId  <i>The ID of the stack set operation.</i> 
		 * @return {void} Success
		 */
		GET_DetectStackSetDrift(StackSetName: string, OperationPreferences: string, OperationId: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.get('/#Action=DetectStackSetDrift?StackSetName=' + (StackSetName == null ? '' : encodeURIComponent(StackSetName)) + '&OperationPreferences=' + (OperationPreferences == null ? '' : encodeURIComponent(OperationPreferences)) + '&OperationId=' + (OperationId == null ? '' : encodeURIComponent(OperationId)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the estimated monthly cost of a template. The return value is an AWS Simple Monthly Calculator URL with a query string that describes the resources required to run the template.
		 * Get /#Action=EstimateTemplateCost
		 * @param {string} TemplateBody <p>Structure containing the template body with a minimum length of 1 byte and a maximum length of 51,200 bytes. (For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a> in the AWS CloudFormation User Guide.)</p> <p>Conditional: You must pass <code>TemplateBody</code> or <code>TemplateURL</code>. If both are passed, only <code>TemplateBody</code> is used.</p>
		 * @param {string} TemplateURL <p>Location of file containing the template body. The URL must point to a template that is located in an Amazon S3 bucket. For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a> in the AWS CloudFormation User Guide.</p> <p>Conditional: You must pass <code>TemplateURL</code> or <code>TemplateBody</code>. If both are passed, only <code>TemplateBody</code> is used.</p>
		 * @param {Array<Parameter>} Parameters A list of <code>Parameter</code> structures that specify input parameters.
		 * @return {void} Success
		 */
		GET_EstimateTemplateCost(TemplateBody: string, TemplateURL: string, Parameters: Array<Parameter>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.get('/#Action=EstimateTemplateCost?TemplateBody=' + (TemplateBody == null ? '' : encodeURIComponent(TemplateBody)) + '&TemplateURL=' + (TemplateURL == null ? '' : encodeURIComponent(TemplateURL)) + '&' + Parameters.map(z => `Parameters=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Updates a stack using the input information that was provided when the specified change set was created. After the call successfully completes, AWS CloudFormation starts updating the stack. Use the <a>DescribeStacks</a> action to view the status of the update.</p> <p>When you execute a change set, AWS CloudFormation deletes all other change sets associated with the stack because they aren't valid for the updated stack.</p> <p>If a stack policy is associated with the stack, AWS CloudFormation enforces the policy during the update. You can't specify a temporary stack policy that overrides the current policy.</p>
		 * Get /#Action=ExecuteChangeSet
		 * @param {string} ChangeSetName The name or ARN of the change set that you want use to update the specified stack.
		 * @param {string} StackName If you specified the name of a change set, specify the stack name or ID (ARN) that is associated with the change set you want to execute.
		 * @param {string} ClientRequestToken A unique identifier for this <code>ExecuteChangeSet</code> request. Specify this token if you plan to retry requests so that AWS CloudFormation knows that you're not attempting to execute a change set to update a stack with the same name. You might retry <code>ExecuteChangeSet</code> requests to ensure that AWS CloudFormation successfully received them.
		 * @return {void} Success
		 */
		GET_ExecuteChangeSet(ChangeSetName: string, StackName: string, ClientRequestToken: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.get('/#Action=ExecuteChangeSet?ChangeSetName=' + (ChangeSetName == null ? '' : encodeURIComponent(ChangeSetName)) + '&StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&ClientRequestToken=' + (ClientRequestToken == null ? '' : encodeURIComponent(ClientRequestToken)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the stack policy for a specified stack. If a stack doesn't have a policy, a null value is returned.
		 * Get /#Action=GetStackPolicy
		 * @param {string} StackName The name or unique stack ID that is associated with the stack whose policy you want to get.
		 * @return {void} Success
		 */
		GET_GetStackPolicy(StackName: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.get('/#Action=GetStackPolicy?StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Returns the template body for a specified stack. You can get the template for running or deleted stacks.</p> <p>For deleted stacks, GetTemplate returns the template for up to 90 days after the stack has been deleted.</p> <note> <p> If the template does not exist, a <code>ValidationError</code> is returned. </p> </note>
		 * Get /#Action=GetTemplate
		 * @param {string} StackName <p>The name or the unique stack ID that is associated with the stack, which are not always interchangeable:</p> <ul> <li> <p>Running stacks: You can specify either the stack's name or its unique stack ID.</p> </li> <li> <p>Deleted stacks: You must specify the unique stack ID.</p> </li> </ul> <p>Default: There is no default value.</p>
		 * @param {string} ChangeSetName The name or Amazon Resource Name (ARN) of a change set for which AWS CloudFormation returns the associated template. If you specify a name, you must also specify the <code>StackName</code>.
		 * @param {TemplateStage} TemplateStage <p>For templates that include transforms, the stage of the template that AWS CloudFormation returns. To get the user-submitted template, specify <code>Original</code>. To get the template after AWS CloudFormation has processed all transforms, specify <code>Processed</code>. </p> <p>If the template doesn't include transforms, <code>Original</code> and <code>Processed</code> return the same template. By default, AWS CloudFormation specifies <code>Original</code>. </p>
		 * @return {void} Success
		 */
		GET_GetTemplate(StackName: string, ChangeSetName: string, TemplateStage: TemplateStage, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.get('/#Action=GetTemplate?StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&ChangeSetName=' + (ChangeSetName == null ? '' : encodeURIComponent(ChangeSetName)) + '&TemplateStage=' + TemplateStage + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Returns information about a new or existing template. The <code>GetTemplateSummary</code> action is useful for viewing parameter information, such as default parameter values and parameter types, before you create or update a stack or stack set.</p> <p>You can use the <code>GetTemplateSummary</code> action when you submit a template, or you can get template information for a stack set, or a running or deleted stack.</p> <p>For deleted stacks, <code>GetTemplateSummary</code> returns the template information for up to 90 days after the stack has been deleted. If the template does not exist, a <code>ValidationError</code> is returned.</p>
		 * Get /#Action=GetTemplateSummary
		 * @param {string} TemplateBody <p>Structure containing the template body with a minimum length of 1 byte and a maximum length of 51,200 bytes. For more information about templates, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a> in the AWS CloudFormation User Guide.</p> <p>Conditional: You must specify only one of the following parameters: <code>StackName</code>, <code>StackSetName</code>, <code>TemplateBody</code>, or <code>TemplateURL</code>.</p>
		 * @param {string} TemplateURL <p>Location of file containing the template body. The URL must point to a template (max size: 460,800 bytes) that is located in an Amazon S3 bucket. For more information about templates, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a> in the AWS CloudFormation User Guide.</p> <p>Conditional: You must specify only one of the following parameters: <code>StackName</code>, <code>StackSetName</code>, <code>TemplateBody</code>, or <code>TemplateURL</code>.</p>
		 * @param {string} StackName <p>The name or the stack ID that is associated with the stack, which are not always interchangeable. For running stacks, you can specify either the stack's name or its unique stack ID. For deleted stack, you must specify the unique stack ID.</p> <p>Conditional: You must specify only one of the following parameters: <code>StackName</code>, <code>StackSetName</code>, <code>TemplateBody</code>, or <code>TemplateURL</code>.</p>
		 * @param {string} StackSetName <p>The name or unique ID of the stack set from which the stack was created.</p> <p>Conditional: You must specify only one of the following parameters: <code>StackName</code>, <code>StackSetName</code>, <code>TemplateBody</code>, or <code>TemplateURL</code>.</p>
		 * @return {void} Success
		 */
		GET_GetTemplateSummary(TemplateBody: string, TemplateURL: string, StackName: string, StackSetName: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.get('/#Action=GetTemplateSummary?TemplateBody=' + (TemplateBody == null ? '' : encodeURIComponent(TemplateBody)) + '&TemplateURL=' + (TemplateURL == null ? '' : encodeURIComponent(TemplateURL)) + '&StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&StackSetName=' + (StackSetName == null ? '' : encodeURIComponent(StackSetName)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the ID and status of each active change set for a stack. For example, AWS CloudFormation lists change sets that are in the <code>CREATE_IN_PROGRESS</code> or <code>CREATE_PENDING</code> state.
		 * Get /#Action=ListChangeSets
		 * @param {string} StackName The name or the Amazon Resource Name (ARN) of the stack for which you want to list change sets.
		 * @param {string} NextToken A string (provided by the <a>ListChangeSets</a> response output) that identifies the next page of change sets that you want to retrieve.
		 * @return {void} Success
		 */
		GET_ListChangeSets(StackName: string, NextToken: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.get('/#Action=ListChangeSets?StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Lists all exported output values in the account and Region in which you call this action. Use this action to see the exported output values that you can import into other stacks. To import values, use the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-importvalue.html"> <code>Fn::ImportValue</code> </a> function. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-exports.html"> AWS CloudFormation Export Stack Output Values</a>.</p>
		 * Get /#Action=ListExports
		 * @param {string} NextToken A string (provided by the <a>ListExports</a> response output) that identifies the next page of exported output values that you asked to retrieve.
		 * @return {void} Success
		 */
		GET_ListExports(NextToken: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.get('/#Action=ListExports?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Lists all stacks that are importing an exported output value. To modify or remove an exported output value, first use this action to see which stacks are using it. To see the exported output values in your account, see <a>ListExports</a>. </p> <p>For more information about importing an exported output value, see the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-importvalue.html"> <code>Fn::ImportValue</code> </a> function. </p>
		 * Get /#Action=ListImports
		 * @param {string} ExportName The name of the exported output value. AWS CloudFormation returns the stack names that are importing this value. 
		 * @param {string} NextToken A string (provided by the <a>ListImports</a> response output) that identifies the next page of stacks that are importing the specified exported output value. 
		 * @return {void} Success
		 */
		GET_ListImports(ExportName: string, NextToken: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.get('/#Action=ListImports?ExportName=' + (ExportName == null ? '' : encodeURIComponent(ExportName)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns summary information about stack instances that are associated with the specified stack set. You can filter for stack instances that are associated with a specific AWS account name or Region.
		 * Get /#Action=ListStackInstances
		 * @param {string} StackSetName The name or unique ID of the stack set that you want to list stack instances for.
		 * @param {string} NextToken If the previous request didn't return all of the remaining results, the response's <code>NextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListStackInstances</code> again and assign that token to the request object's <code>NextToken</code> parameter. If there are no remaining results, the previous response object's <code>NextToken</code> parameter is set to <code>null</code>.
		 * @param {number} MaxResults The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a <code>NextToken</code> value that you can assign to the <code>NextToken</code> request parameter to get the next set of results.
		 * @param {string} StackInstanceAccount The name of the AWS account that you want to list stack instances for.
		 * @param {string} StackInstanceRegion The name of the Region where you want to list stack instances. 
		 * @return {void} Success
		 */
		GET_ListStackInstances(StackSetName: string, NextToken: string, MaxResults: number, StackInstanceAccount: string, StackInstanceRegion: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.get('/#Action=ListStackInstances?StackSetName=' + (StackSetName == null ? '' : encodeURIComponent(StackSetName)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults + '&StackInstanceAccount=' + (StackInstanceAccount == null ? '' : encodeURIComponent(StackInstanceAccount)) + '&StackInstanceRegion=' + (StackInstanceRegion == null ? '' : encodeURIComponent(StackInstanceRegion)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Returns descriptions of all resources of the specified stack.</p> <p>For deleted stacks, ListStackResources returns resource information for up to 90 days after the stack has been deleted.</p>
		 * Get /#Action=ListStackResources
		 * @param {string} StackName <p>The name or the unique stack ID that is associated with the stack, which are not always interchangeable:</p> <ul> <li> <p>Running stacks: You can specify either the stack's name or its unique stack ID.</p> </li> <li> <p>Deleted stacks: You must specify the unique stack ID.</p> </li> </ul> <p>Default: There is no default value.</p>
		 * @param {string} NextToken A string that identifies the next page of stack resources that you want to retrieve.
		 * @return {void} Success
		 */
		GET_ListStackResources(StackName: string, NextToken: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.get('/#Action=ListStackResources?StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns summary information about the results of a stack set operation.
		 * Get /#Action=ListStackSetOperationResults
		 * @param {string} StackSetName The name or unique ID of the stack set that you want to get operation results for.
		 * @param {string} OperationId The ID of the stack set operation.
		 * @param {string} NextToken If the previous request didn't return all of the remaining results, the response object's <code>NextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListStackSetOperationResults</code> again and assign that token to the request object's <code>NextToken</code> parameter. If there are no remaining results, the previous response object's <code>NextToken</code> parameter is set to <code>null</code>.
		 * @param {number} MaxResults The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a <code>NextToken</code> value that you can assign to the <code>NextToken</code> request parameter to get the next set of results.
		 * @return {void} Success
		 */
		GET_ListStackSetOperationResults(StackSetName: string, OperationId: string, NextToken: string, MaxResults: number, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.get('/#Action=ListStackSetOperationResults?StackSetName=' + (StackSetName == null ? '' : encodeURIComponent(StackSetName)) + '&OperationId=' + (OperationId == null ? '' : encodeURIComponent(OperationId)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns summary information about operations performed on a stack set.
		 * Get /#Action=ListStackSetOperations
		 * @param {string} StackSetName The name or unique ID of the stack set that you want to get operation summaries for.
		 * @param {string} NextToken If the previous paginated request didn't return all of the remaining results, the response object's <code>NextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListStackSetOperations</code> again and assign that token to the request object's <code>NextToken</code> parameter. If there are no remaining results, the previous response object's <code>NextToken</code> parameter is set to <code>null</code>.
		 * @param {number} MaxResults The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a <code>NextToken</code> value that you can assign to the <code>NextToken</code> request parameter to get the next set of results.
		 * @return {void} Success
		 */
		GET_ListStackSetOperations(StackSetName: string, NextToken: string, MaxResults: number, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.get('/#Action=ListStackSetOperations?StackSetName=' + (StackSetName == null ? '' : encodeURIComponent(StackSetName)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns summary information about stack sets that are associated with the user.
		 * Get /#Action=ListStackSets
		 * @param {string} NextToken If the previous paginated request didn't return all of the remaining results, the response object's <code>NextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListStackSets</code> again and assign that token to the request object's <code>NextToken</code> parameter. If there are no remaining results, the previous response object's <code>NextToken</code> parameter is set to <code>null</code>.
		 * @param {number} MaxResults The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a <code>NextToken</code> value that you can assign to the <code>NextToken</code> request parameter to get the next set of results.
		 * @param {StackSetStatus} Status The status of the stack sets that you want to get summary information about.
		 * @return {void} Success
		 */
		GET_ListStackSets(NextToken: string, MaxResults: number, Status: StackSetStatus, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.get('/#Action=ListStackSets?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults + '&Status=' + Status + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the summary information for stacks whose status matches the specified StackStatusFilter. Summary information for stacks that have been deleted is kept for 90 days after the stack is deleted. If no StackStatusFilter is specified, summary information for all stacks is returned (including existing stacks and stacks that have been deleted).
		 * Get /#Action=ListStacks
		 * @param {string} NextToken A string that identifies the next page of stacks that you want to retrieve.
		 * @param {Array<StackStatus>} StackStatusFilter Stack status to use as a filter. Specify one or more stack status codes to list only stacks with the specified status codes. For a complete list of stack status codes, see the <code>StackStatus</code> parameter of the <a>Stack</a> data type.
		 * @return {void} Success
		 */
		GET_ListStacks(NextToken: string, StackStatusFilter: Array<StackStatus>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.get('/#Action=ListStacks?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&' + StackStatusFilter.map(z => `StackStatusFilter=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a list of registration tokens for the specified type(s).
		 * Get /#Action=ListTypeRegistrations
		 * @param {DescribeTypeOutputType} Type <p>The kind of type.</p> <p>Currently the only valid value is <code>RESOURCE</code>.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
		 * @param {string} TypeName <p>The name of the type.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
		 * @param {string} TypeArn <p>The Amazon Resource Name (ARN) of the type.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
		 * @param {DescribeTypeRegistrationOutputProgressStatus} RegistrationStatusFilter <p>The current status of the type registration request.</p> <p>The default is <code>IN_PROGRESS</code>.</p>
		 * @param {number} MaxResults The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a <code>NextToken</code> value that you can assign to the <code>NextToken</code> request parameter to get the next set of results.
		 * @param {string} NextToken If the previous paginated request didn't return all of the remaining results, the response object's <code>NextToken</code> parameter value is set to a token. To retrieve the next set of results, call this action again and assign that token to the request object's <code>NextToken</code> parameter. If there are no remaining results, the previous response object's <code>NextToken</code> parameter is set to <code>null</code>.
		 * @return {void} Success
		 */
		GET_ListTypeRegistrations(Type: DescribeTypeOutputType, TypeName: string, TypeArn: string, RegistrationStatusFilter: DescribeTypeRegistrationOutputProgressStatus, MaxResults: number, NextToken: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.get('/#Action=ListTypeRegistrations?Type=' + Type + '&TypeName=' + (TypeName == null ? '' : encodeURIComponent(TypeName)) + '&TypeArn=' + (TypeArn == null ? '' : encodeURIComponent(TypeArn)) + '&RegistrationStatusFilter=' + RegistrationStatusFilter + '&MaxResults=' + MaxResults + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns summary information about the versions of a type.
		 * Get /#Action=ListTypeVersions
		 * @param {DescribeTypeOutputType} Type <p>The kind of the type.</p> <p>Currently the only valid value is <code>RESOURCE</code>.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
		 * @param {string} TypeName <p>The name of the type for which you want version summary information.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
		 * @param {string} Arn <p>The Amazon Resource Name (ARN) of the type for which you want version summary information.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
		 * @param {number} MaxResults The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a <code>NextToken</code> value that you can assign to the <code>NextToken</code> request parameter to get the next set of results.
		 * @param {string} NextToken If the previous paginated request didn't return all of the remaining results, the response object's <code>NextToken</code> parameter value is set to a token. To retrieve the next set of results, call this action again and assign that token to the request object's <code>NextToken</code> parameter. If there are no remaining results, the previous response object's <code>NextToken</code> parameter is set to <code>null</code>.
		 * @param {DescribeTypeOutputDeprecatedStatus} DeprecatedStatus <p>The deprecation status of the type versions that you want to get summary information about.</p> <p>Valid values include:</p> <ul> <li> <p> <code>LIVE</code>: The type version is registered and can be used in CloudFormation operations, dependent on its provisioning behavior and visibility scope.</p> </li> <li> <p> <code>DEPRECATED</code>: The type version has been deregistered and can no longer be used in CloudFormation operations. </p> </li> </ul> <p>The default is <code>LIVE</code>.</p>
		 * @return {void} Success
		 */
		GET_ListTypeVersions(Type: DescribeTypeOutputType, TypeName: string, Arn: string, MaxResults: number, NextToken: string, DeprecatedStatus: DescribeTypeOutputDeprecatedStatus, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.get('/#Action=ListTypeVersions?Type=' + Type + '&TypeName=' + (TypeName == null ? '' : encodeURIComponent(TypeName)) + '&Arn=' + (Arn == null ? '' : encodeURIComponent(Arn)) + '&MaxResults=' + MaxResults + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&DeprecatedStatus=' + DeprecatedStatus + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns summary information about types that have been registered with CloudFormation.
		 * Get /#Action=ListTypes
		 * @param {DescribeTypeOutputVisibility} Visibility <p>The scope at which the type is visible and usable in CloudFormation operations.</p> <p>Valid values include:</p> <ul> <li> <p> <code>PRIVATE</code>: The type is only visible and usable within the account in which it is registered. Currently, AWS CloudFormation marks any types you create as <code>PRIVATE</code>.</p> </li> <li> <p> <code>PUBLIC</code>: The type is publically visible and usable within any Amazon account.</p> </li> </ul> <p>The default is <code>PRIVATE</code>.</p>
		 * @param {DescribeTypeOutputProvisioningType} ProvisioningType <p>The provisioning behavior of the type. AWS CloudFormation determines the provisioning type during registration, based on the types of handlers in the schema handler package submitted.</p> <p>Valid values include:</p> <ul> <li> <p> <code>FULLY_MUTABLE</code>: The type includes an update handler to process updates to the type during stack update operations.</p> </li> <li> <p> <code>IMMUTABLE</code>: The type does not include an update handler, so the type cannot be updated and must instead be replaced during stack update operations.</p> </li> <li> <p> <code>NON_PROVISIONABLE</code>: The type does not include create, read, and delete handlers, and therefore cannot actually be provisioned.</p> </li> </ul>
		 * @param {DescribeTypeOutputDeprecatedStatus} DeprecatedStatus <p>The deprecation status of the types that you want to get summary information about.</p> <p>Valid values include:</p> <ul> <li> <p> <code>LIVE</code>: The type is registered for use in CloudFormation operations.</p> </li> <li> <p> <code>DEPRECATED</code>: The type has been deregistered and can no longer be used in CloudFormation operations. </p> </li> </ul>
		 * @param {number} MaxResults The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a <code>NextToken</code> value that you can assign to the <code>NextToken</code> request parameter to get the next set of results.
		 * @param {string} NextToken If the previous paginated request didn't return all of the remaining results, the response object's <code>NextToken</code> parameter value is set to a token. To retrieve the next set of results, call this action again and assign that token to the request object's <code>NextToken</code> parameter. If there are no remaining results, the previous response object's <code>NextToken</code> parameter is set to <code>null</code>.
		 * @return {void} Success
		 */
		GET_ListTypes(Visibility: DescribeTypeOutputVisibility, ProvisioningType: DescribeTypeOutputProvisioningType, DeprecatedStatus: DescribeTypeOutputDeprecatedStatus, MaxResults: number, NextToken: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.get('/#Action=ListTypes?Visibility=' + Visibility + '&ProvisioningType=' + ProvisioningType + '&DeprecatedStatus=' + DeprecatedStatus + '&MaxResults=' + MaxResults + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Reports progress of a resource handler to CloudFormation.</p> <p>Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>. Do not use this API in your code.</p>
		 * Get /#Action=RecordHandlerProgress
		 * @param {string} BearerToken Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>.
		 * @param {OperationStatus} OperationStatus Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>.
		 * @param {OperationStatus} CurrentOperationStatus Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>.
		 * @param {string} StatusMessage Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>.
		 * @param {HandlerErrorCode} ErrorCode Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>.
		 * @param {string} ResourceModel Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>.
		 * @param {string} ClientRequestToken Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>.
		 * @return {void} Success
		 */
		GET_RecordHandlerProgress(BearerToken: string, OperationStatus: OperationStatus, CurrentOperationStatus: OperationStatus, StatusMessage: string, ErrorCode: HandlerErrorCode, ResourceModel: string, ClientRequestToken: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.get('/#Action=RecordHandlerProgress?BearerToken=' + (BearerToken == null ? '' : encodeURIComponent(BearerToken)) + '&OperationStatus=' + OperationStatus + '&CurrentOperationStatus=' + CurrentOperationStatus + '&StatusMessage=' + (StatusMessage == null ? '' : encodeURIComponent(StatusMessage)) + '&ErrorCode=' + ErrorCode + '&ResourceModel=' + (ResourceModel == null ? '' : encodeURIComponent(ResourceModel)) + '&ClientRequestToken=' + (ClientRequestToken == null ? '' : encodeURIComponent(ClientRequestToken)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Registers a type with the CloudFormation service. Registering a type makes it available for use in CloudFormation templates in your AWS account, and includes:</p> <ul> <li> <p>Validating the resource schema</p> </li> <li> <p>Determining which handlers have been specified for the resource</p> </li> <li> <p>Making the resource type available for use in your account</p> </li> </ul> <p>For more information on how to develop types and ready them for registeration, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-types.html">Creating Resource Providers</a> in the <i>CloudFormation CLI User Guide</i>.</p> <p>You can have a maximum of 50 resource type versions registered at a time. This maximum is per account and per region. Use <a href="AWSCloudFormation/latest/APIReference/API_DeregisterType.html">DeregisterType</a> to deregister specific resource type versions if necessary.</p> <p>Once you have initiated a registration request using <code> <a>RegisterType</a> </code>, you can use <code> <a>DescribeTypeRegistration</a> </code> to monitor the progress of the registration request.</p>
		 * Get /#Action=RegisterType
		 * @param {DescribeTypeOutputType} Type <p>The kind of type.</p> <p>Currently, the only valid value is <code>RESOURCE</code>.</p>
		 * @param {string} TypeName <p>The name of the type being registered.</p> <p>We recommend that type names adhere to the following pattern: <i>company_or_organization</i>::<i>service</i>::<i>type</i>.</p> <note> <p>The following organization namespaces are reserved and cannot be used in your resource type names:</p> <ul> <li> <p> <code>Alexa</code> </p> </li> <li> <p> <code>AMZN</code> </p> </li> <li> <p> <code>Amazon</code> </p> </li> <li> <p> <code>AWS</code> </p> </li> <li> <p> <code>Custom</code> </p> </li> <li> <p> <code>Dev</code> </p> </li> </ul> </note>
		 * @param {string} SchemaHandlerPackage <p>A url to the S3 bucket containing the schema handler package that contains the schema, event handlers, and associated files for the type you want to register.</p> <p>For information on generating a schema handler package for the type you want to register, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-cli-submit.html">submit</a> in the <i>CloudFormation CLI User Guide</i>.</p> <note> <p>As part of registering a resource provider type, CloudFormation must be able to access the S3 bucket which contains the schema handler package for that resource provider. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html#registry-register-permissions">IAM Permissions for Registering a Resource Provider</a> in the <i>AWS CloudFormation User Guide</i>.</p> </note>
		 * @param {string} LoggingConfig Specifies logging configuration information for a type.
		 * @param {string} ExecutionRoleArn The Amazon Resource Name (ARN) of the IAM execution role to use to register the type. If your resource type calls AWS APIs in any of its handlers, you must create an <i> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html">IAM execution role</a> </i> that includes the necessary permissions to call those AWS APIs, and provision that execution role in your account. CloudFormation then assumes that execution role to provide your resource type with the appropriate credentials.
		 * @param {string} ClientRequestToken A unique identifier that acts as an idempotency key for this registration request. Specifying a client request token prevents CloudFormation from generating more than one version of a type from the same registeration request, even if the request is submitted multiple times. 
		 * @return {void} Success
		 */
		GET_RegisterType(Type: DescribeTypeOutputType, TypeName: string, SchemaHandlerPackage: string, LoggingConfig: string, ExecutionRoleArn: string, ClientRequestToken: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.get('/#Action=RegisterType?Type=' + Type + '&TypeName=' + (TypeName == null ? '' : encodeURIComponent(TypeName)) + '&SchemaHandlerPackage=' + (SchemaHandlerPackage == null ? '' : encodeURIComponent(SchemaHandlerPackage)) + '&LoggingConfig=' + (LoggingConfig == null ? '' : encodeURIComponent(LoggingConfig)) + '&ExecutionRoleArn=' + (ExecutionRoleArn == null ? '' : encodeURIComponent(ExecutionRoleArn)) + '&ClientRequestToken=' + (ClientRequestToken == null ? '' : encodeURIComponent(ClientRequestToken)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Sets a stack policy for a specified stack.
		 * Get /#Action=SetStackPolicy
		 * @param {string} StackName The name or unique stack ID that you want to associate a policy with.
		 * @param {string} StackPolicyBody Structure containing the stack policy body. For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/protect-stack-resources.html"> Prevent Updates to Stack Resources</a> in the AWS CloudFormation User Guide. You can specify either the <code>StackPolicyBody</code> or the <code>StackPolicyURL</code> parameter, but not both.
		 * @param {string} StackPolicyURL Location of a file containing the stack policy. The URL must point to a policy (maximum size: 16 KB) located in an S3 bucket in the same Region as the stack. You can specify either the <code>StackPolicyBody</code> or the <code>StackPolicyURL</code> parameter, but not both.
		 * @return {void} Success
		 */
		GET_SetStackPolicy(StackName: string, StackPolicyBody: string, StackPolicyURL: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.get('/#Action=SetStackPolicy?StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&StackPolicyBody=' + (StackPolicyBody == null ? '' : encodeURIComponent(StackPolicyBody)) + '&StackPolicyURL=' + (StackPolicyURL == null ? '' : encodeURIComponent(StackPolicyURL)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Specify the default version of a type. The default version of a type will be used in CloudFormation operations.
		 * Get /#Action=SetTypeDefaultVersion
		 * @param {string} Arn <p>The Amazon Resource Name (ARN) of the type for which you want version summary information.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
		 * @param {DescribeTypeOutputType} Type <p>The kind of type.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
		 * @param {string} TypeName <p>The name of the type.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
		 * @param {string} VersionId The ID of a specific version of the type. The version ID is the value at the end of the Amazon Resource Name (ARN) assigned to the type version when it is registered.
		 * @return {void} Success
		 */
		GET_SetTypeDefaultVersion(Arn: string, Type: DescribeTypeOutputType, TypeName: string, VersionId: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.get('/#Action=SetTypeDefaultVersion?Arn=' + (Arn == null ? '' : encodeURIComponent(Arn)) + '&Type=' + Type + '&TypeName=' + (TypeName == null ? '' : encodeURIComponent(TypeName)) + '&VersionId=' + (VersionId == null ? '' : encodeURIComponent(VersionId)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Sends a signal to the specified resource with a success or failure status. You can use the SignalResource API in conjunction with a creation policy or update policy. AWS CloudFormation doesn't proceed with a stack creation or update until resources receive the required number of signals or the timeout period is exceeded. The SignalResource API is useful in cases where you want to send signals from anywhere other than an Amazon EC2 instance.
		 * Get /#Action=SignalResource
		 * @param {string} StackName The stack name or unique stack ID that includes the resource that you want to signal.
		 * @param {string} LogicalResourceId The logical ID of the resource that you want to signal. The logical ID is the name of the resource that given in the template.
		 * @param {string} UniqueId A unique ID of the signal. When you signal Amazon EC2 instances or Auto Scaling groups, specify the instance ID that you are signaling as the unique ID. If you send multiple signals to a single resource (such as signaling a wait condition), each signal requires a different unique ID.
		 * @param {ResourceSignalStatus} Status The status of the signal, which is either success or failure. A failure signal causes AWS CloudFormation to immediately fail the stack creation or update.
		 * @return {void} Success
		 */
		GET_SignalResource(StackName: string, LogicalResourceId: string, UniqueId: string, Status: ResourceSignalStatus, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.get('/#Action=SignalResource?StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&LogicalResourceId=' + (LogicalResourceId == null ? '' : encodeURIComponent(LogicalResourceId)) + '&UniqueId=' + (UniqueId == null ? '' : encodeURIComponent(UniqueId)) + '&Status=' + Status + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Stops an in-progress operation on a stack set and its associated stack instances.
		 * Get /#Action=StopStackSetOperation
		 * @param {string} StackSetName The name or unique ID of the stack set that you want to stop the operation for.
		 * @param {string} OperationId The ID of the stack operation. 
		 * @return {void} Success
		 */
		GET_StopStackSetOperation(StackSetName: string, OperationId: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.get('/#Action=StopStackSetOperation?StackSetName=' + (StackSetName == null ? '' : encodeURIComponent(StackSetName)) + '&OperationId=' + (OperationId == null ? '' : encodeURIComponent(OperationId)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Updates a stack as specified in the template. After the call completes successfully, the stack update starts. You can check the status of the stack via the <a>DescribeStacks</a> action.</p> <p>To get a copy of the template for an existing stack, you can use the <a>GetTemplate</a> action.</p> <p>For more information about creating an update template, updating a stack, and monitoring the progress of the update, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks.html">Updating a Stack</a>.</p>
		 * Get /#Action=UpdateStack
		 * @param {string} StackName The name or unique stack ID of the stack to update.
		 * @param {string} TemplateBody <p>Structure containing the template body with a minimum length of 1 byte and a maximum length of 51,200 bytes. (For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a> in the AWS CloudFormation User Guide.)</p> <p>Conditional: You must specify only one of the following parameters: <code>TemplateBody</code>, <code>TemplateURL</code>, or set the <code>UsePreviousTemplate</code> to <code>true</code>.</p>
		 * @param {string} TemplateURL <p>Location of file containing the template body. The URL must point to a template that is located in an Amazon S3 bucket. For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a> in the AWS CloudFormation User Guide.</p> <p>Conditional: You must specify only one of the following parameters: <code>TemplateBody</code>, <code>TemplateURL</code>, or set the <code>UsePreviousTemplate</code> to <code>true</code>.</p>
		 * @param {boolean} UsePreviousTemplate <p>Reuse the existing template that is associated with the stack that you are updating.</p> <p>Conditional: You must specify only one of the following parameters: <code>TemplateBody</code>, <code>TemplateURL</code>, or set the <code>UsePreviousTemplate</code> to <code>true</code>.</p>
		 * @param {string} StackPolicyDuringUpdateBody <p>Structure containing the temporary overriding stack policy body. You can specify either the <code>StackPolicyDuringUpdateBody</code> or the <code>StackPolicyDuringUpdateURL</code> parameter, but not both.</p> <p>If you want to update protected resources, specify a temporary overriding stack policy during this update. If you do not specify a stack policy, the current policy that is associated with the stack will be used.</p>
		 * @param {string} StackPolicyDuringUpdateURL <p>Location of a file containing the temporary overriding stack policy. The URL must point to a policy (max size: 16KB) located in an S3 bucket in the same Region as the stack. You can specify either the <code>StackPolicyDuringUpdateBody</code> or the <code>StackPolicyDuringUpdateURL</code> parameter, but not both.</p> <p>If you want to update protected resources, specify a temporary overriding stack policy during this update. If you do not specify a stack policy, the current policy that is associated with the stack will be used.</p>
		 * @param {Array<Parameter>} Parameters A list of <code>Parameter</code> structures that specify input parameters for the stack. For more information, see the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_Parameter.html">Parameter</a> data type.
		 * @param {Array<Capability>} Capabilities <p>In some cases, you must explicitly acknowledge that your stack template contains certain capabilities in order for AWS CloudFormation to update the stack.</p> <ul> <li> <p> <code>CAPABILITY_IAM</code> and <code>CAPABILITY_NAMED_IAM</code> </p> <p>Some stack templates might include resources that can affect permissions in your AWS account; for example, by creating new AWS Identity and Access Management (IAM) users. For those stacks, you must explicitly acknowledge this by specifying one of these capabilities.</p> <p>The following IAM resources require you to specify either the <code>CAPABILITY_IAM</code> or <code>CAPABILITY_NAMED_IAM</code> capability.</p> <ul> <li> <p>If you have IAM resources, you can specify either capability. </p> </li> <li> <p>If you have IAM resources with custom names, you <i>must</i> specify <code>CAPABILITY_NAMED_IAM</code>. </p> </li> <li> <p>If you don't specify either of these capabilities, AWS CloudFormation returns an <code>InsufficientCapabilities</code> error.</p> </li> </ul> <p>If your stack template contains these resources, we recommend that you review all permissions associated with them and edit their permissions if necessary.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-accesskey.html"> AWS::IAM::AccessKey</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-group.html"> AWS::IAM::Group</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html"> AWS::IAM::InstanceProfile</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-policy.html"> AWS::IAM::Policy</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html"> AWS::IAM::Role</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-user.html"> AWS::IAM::User</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-addusertogroup.html"> AWS::IAM::UserToGroupAddition</a> </p> </li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#capabilities">Acknowledging IAM Resources in AWS CloudFormation Templates</a>.</p> </li> <li> <p> <code>CAPABILITY_AUTO_EXPAND</code> </p> <p>Some template contain macros. Macros perform custom processing on templates; this can include simple actions like find-and-replace operations, all the way to extensive transformations of entire templates. Because of this, users typically create a change set from the processed template, so that they can review the changes resulting from the macros before actually updating the stack. If your stack template contains one or more macros, and you choose to update a stack directly from the processed template, without first reviewing the resulting changes in a change set, you must acknowledge this capability. This includes the <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/create-reusable-transform-function-snippets-and-add-to-your-template-with-aws-include-transform.html">AWS::Include</a> and <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-aws-serverless.html">AWS::Serverless</a> transforms, which are macros hosted by AWS CloudFormation.</p> <p>Change sets do not currently support nested stacks. If you want to update a stack from a stack template that contains macros <i>and</i> nested stacks, you must update the stack directly from the template using this capability.</p> <important> <p>You should only update stacks directly from a stack template that contains macros if you know what processing the macro performs.</p> <p>Each macro relies on an underlying Lambda service function for processing stack templates. Be aware that the Lambda function owner can update the function operation without AWS CloudFormation being notified.</p> </important> <p>For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-macros.html">Using AWS CloudFormation Macros to Perform Custom Processing on Templates</a>.</p> </li> </ul>
		 * @param {Array<ResourceType>} ResourceTypes <p>The template resource types that you have permissions to work with for this update stack action, such as <code>AWS::EC2::Instance</code>, <code>AWS::EC2::*</code>, or <code>Custom::MyCustomInstance</code>.</p> <p>If the list of resource types doesn't include a resource that you're updating, the stack update fails. By default, AWS CloudFormation grants permissions to all resource types. AWS Identity and Access Management (IAM) uses this parameter for AWS CloudFormation-specific condition keys in IAM policies. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html">Controlling Access with AWS Identity and Access Management</a>.</p>
		 * @param {string} RoleARN <p>The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role that AWS CloudFormation assumes to update the stack. AWS CloudFormation uses the role's credentials to make calls on your behalf. AWS CloudFormation always uses this role for all future operations on the stack. As long as users have permission to operate on the stack, AWS CloudFormation uses this role even if the users don't have permission to pass it. Ensure that the role grants least privilege.</p> <p>If you don't specify a value, AWS CloudFormation uses the role that was previously associated with the stack. If no role is available, AWS CloudFormation uses a temporary session that is generated from your user credentials.</p>
		 * @param {string} RollbackConfiguration The rollback triggers for AWS CloudFormation to monitor during stack creation and updating operations, and for the specified monitoring period afterwards.
		 * @param {string} StackPolicyBody <p>Structure containing a new stack policy body. You can specify either the <code>StackPolicyBody</code> or the <code>StackPolicyURL</code> parameter, but not both.</p> <p>You might update the stack policy, for example, in order to protect a new resource that you created during a stack update. If you do not specify a stack policy, the current policy that is associated with the stack is unchanged.</p>
		 * @param {string} StackPolicyURL <p>Location of a file containing the updated stack policy. The URL must point to a policy (max size: 16KB) located in an S3 bucket in the same Region as the stack. You can specify either the <code>StackPolicyBody</code> or the <code>StackPolicyURL</code> parameter, but not both.</p> <p>You might update the stack policy, for example, in order to protect a new resource that you created during a stack update. If you do not specify a stack policy, the current policy that is associated with the stack is unchanged.</p>
		 * @param {Array<NotificationARN>} NotificationARNs Amazon Simple Notification Service topic Amazon Resource Names (ARNs) that AWS CloudFormation associates with the stack. Specify an empty list to remove all notification topics.
		 * @param {Array<Tag>} Tags <p>Key-value pairs to associate with this stack. AWS CloudFormation also propagates these tags to supported resources in the stack. You can specify a maximum number of 50 tags.</p> <p>If you don't specify this parameter, AWS CloudFormation doesn't modify the stack's tags. If you specify an empty value, AWS CloudFormation removes all associated tags.</p>
		 * @param {string} ClientRequestToken <p>A unique identifier for this <code>UpdateStack</code> request. Specify this token if you plan to retry requests so that AWS CloudFormation knows that you're not attempting to update a stack with the same name. You might retry <code>UpdateStack</code> requests to ensure that AWS CloudFormation successfully received them.</p> <p>All events triggered by a given stack operation are assigned the same client request token, which you can use to track operations. For example, if you execute a <code>CreateStack</code> operation with the token <code>token1</code>, then all the <code>StackEvents</code> generated by that operation will have <code>ClientRequestToken</code> set as <code>token1</code>.</p> <p>In the console, stack operations display the client request token on the Events tab. Stack operations that are initiated from the console use the token format <i>Console-StackOperation-ID</i>, which helps you easily identify the stack operation . For example, if you create a stack using the console, each stack event would be assigned the same token in the following format: <code>Console-CreateStack-7f59c3cf-00d2-40c7-b2ff-e75db0987002</code>. </p>
		 * @return {void} Success
		 */
		GET_UpdateStack(StackName: string, TemplateBody: string, TemplateURL: string, UsePreviousTemplate: boolean, StackPolicyDuringUpdateBody: string, StackPolicyDuringUpdateURL: string, Parameters: Array<Parameter>, Capabilities: Array<Capability>, ResourceTypes: Array<ResourceType>, RoleARN: string, RollbackConfiguration: string, StackPolicyBody: string, StackPolicyURL: string, NotificationARNs: Array<NotificationARN>, Tags: Array<Tag>, ClientRequestToken: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.get('/#Action=UpdateStack?StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&TemplateBody=' + (TemplateBody == null ? '' : encodeURIComponent(TemplateBody)) + '&TemplateURL=' + (TemplateURL == null ? '' : encodeURIComponent(TemplateURL)) + '&UsePreviousTemplate=' + UsePreviousTemplate + '&StackPolicyDuringUpdateBody=' + (StackPolicyDuringUpdateBody == null ? '' : encodeURIComponent(StackPolicyDuringUpdateBody)) + '&StackPolicyDuringUpdateURL=' + (StackPolicyDuringUpdateURL == null ? '' : encodeURIComponent(StackPolicyDuringUpdateURL)) + '&' + Parameters.map(z => `Parameters=${z}`).join('&') + '&' + Capabilities.map(z => `Capabilities=${z}`).join('&') + '&' + ResourceTypes.map(z => `ResourceTypes=${z}`).join('&') + '&RoleARN=' + (RoleARN == null ? '' : encodeURIComponent(RoleARN)) + '&RollbackConfiguration=' + (RollbackConfiguration == null ? '' : encodeURIComponent(RollbackConfiguration)) + '&StackPolicyBody=' + (StackPolicyBody == null ? '' : encodeURIComponent(StackPolicyBody)) + '&StackPolicyURL=' + (StackPolicyURL == null ? '' : encodeURIComponent(StackPolicyURL)) + '&' + NotificationARNs.map(z => `NotificationARNs=${z}`).join('&') + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&ClientRequestToken=' + (ClientRequestToken == null ? '' : encodeURIComponent(ClientRequestToken)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Updates the parameter values for stack instances for the specified accounts, within the specified Regions. A stack instance refers to a stack in a specific account and Region. </p> <p>You can only update stack instances in Regions and accounts where they already exist; to create additional stack instances, use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateStackInstances.html">CreateStackInstances</a>. </p> <p>During stack set updates, any parameters overridden for a stack instance are not updated, but retain their overridden value.</p> <p>You can only update the parameter <i>values</i> that are specified in the stack set; to add or delete a parameter itself, use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackSet.html">UpdateStackSet</a> to update the stack set template. If you add a parameter to a template, before you can override the parameter value specified in the stack set you must first use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackSet.html">UpdateStackSet</a> to update all stack instances with the updated template and parameter value specified in the stack set. Once a stack instance has been updated with the new parameter, you can then override the parameter value using <code>UpdateStackInstances</code>.</p>
		 * Get /#Action=UpdateStackInstances
		 * @param {string} StackSetName The name or unique ID of the stack set associated with the stack instances.
		 * @param {Array<Account>} Accounts <p>[<code>Self-managed</code> permissions] The names of one or more AWS accounts for which you want to update parameter values for stack instances. The overridden parameter values will be applied to all stack instances in the specified accounts and Regions.</p> <p>You can specify <code>Accounts</code> or <code>DeploymentTargets</code>, but not both.</p>
		 * @param {string} DeploymentTargets <p>[<code>Service-managed</code> permissions] The AWS Organizations accounts for which you want to update parameter values for stack instances. If your update targets OUs, the overridden parameter values only apply to the accounts that are currently in the target OUs and their child OUs. Accounts added to the target OUs and their child OUs in the future won't use the overridden values.</p> <p>You can specify <code>Accounts</code> or <code>DeploymentTargets</code>, but not both.</p>
		 * @param {Array<Region>} Regions The names of one or more Regions in which you want to update parameter values for stack instances. The overridden parameter values will be applied to all stack instances in the specified accounts and Regions.
		 * @param {Array<Parameter>} ParameterOverrides <p> A list of input parameters whose values you want to update for the specified stack instances. </p> <p>Any overridden parameter values will be applied to all stack instances in the specified accounts and Regions. When specifying parameters and their values, be aware of how AWS CloudFormation sets parameter values during stack instance update operations:</p> <ul> <li> <p>To override the current value for a parameter, include the parameter and specify its value.</p> </li> <li> <p>To leave a parameter set to its present value, you can do one of the following:</p> <ul> <li> <p>Do not include the parameter in the list.</p> </li> <li> <p>Include the parameter and specify <code>UsePreviousValue</code> as <code>true</code>. (You cannot specify both a value and set <code>UsePreviousValue</code> to <code>true</code>.)</p> </li> </ul> </li> <li> <p>To set all overridden parameter back to the values specified in the stack set, specify a parameter list but do not include any parameters.</p> </li> <li> <p>To leave all parameters set to their present values, do not specify this property at all.</p> </li> </ul> <p>During stack set updates, any parameter values overridden for a stack instance are not updated, but retain their overridden value.</p> <p>You can only override the parameter <i>values</i> that are specified in the stack set; to add or delete a parameter itself, use <code>UpdateStackSet</code> to update the stack set template. If you add a parameter to a template, before you can override the parameter value specified in the stack set you must first use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackSet.html">UpdateStackSet</a> to update all stack instances with the updated template and parameter value specified in the stack set. Once a stack instance has been updated with the new parameter, you can then override the parameter value using <code>UpdateStackInstances</code>.</p>
		 * @param {string} OperationPreferences Preferences for how AWS CloudFormation performs this stack set operation.
		 * @param {string} OperationId <p>The unique identifier for this stack set operation. </p> <p>The operation ID also functions as an idempotency token, to ensure that AWS CloudFormation performs the stack set operation only once, even if you retry the request multiple times. You might retry stack set operation requests to ensure that AWS CloudFormation successfully received them.</p> <p>If you don't specify an operation ID, the SDK generates one automatically. </p>
		 * @return {void} Success
		 */
		GET_UpdateStackInstances(StackSetName: string, Accounts: Array<Account>, DeploymentTargets: string, Regions: Array<Region>, ParameterOverrides: Array<Parameter>, OperationPreferences: string, OperationId: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.get('/#Action=UpdateStackInstances?StackSetName=' + (StackSetName == null ? '' : encodeURIComponent(StackSetName)) + '&' + Accounts.map(z => `Accounts=${z}`).join('&') + '&DeploymentTargets=' + (DeploymentTargets == null ? '' : encodeURIComponent(DeploymentTargets)) + '&' + Regions.map(z => `Regions=${z}`).join('&') + '&' + ParameterOverrides.map(z => `ParameterOverrides=${z}`).join('&') + '&OperationPreferences=' + (OperationPreferences == null ? '' : encodeURIComponent(OperationPreferences)) + '&OperationId=' + (OperationId == null ? '' : encodeURIComponent(OperationId)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Updates the stack set, and associated stack instances in the specified accounts and Regions.</p> <p>Even if the stack set operation created by updating the stack set fails (completely or partially, below or above a specified failure tolerance), the stack set is updated with your changes. Subsequent <a>CreateStackInstances</a> calls on the specified stack set use the updated stack set.</p>
		 * Get /#Action=UpdateStackSet
		 * @param {string} StackSetName The name or unique ID of the stack set that you want to update.
		 * @param {string} Description A brief description of updates that you are making.
		 * @param {string} TemplateBody <p>The structure that contains the template body, with a minimum length of 1 byte and a maximum length of 51,200 bytes. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a> in the AWS CloudFormation User Guide.</p> <p>Conditional: You must specify only one of the following parameters: <code>TemplateBody</code> or <code>TemplateURL</code>—or set <code>UsePreviousTemplate</code> to true.</p>
		 * @param {string} TemplateURL <p>The location of the file that contains the template body. The URL must point to a template (maximum size: 460,800 bytes) that is located in an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a> in the AWS CloudFormation User Guide.</p> <p>Conditional: You must specify only one of the following parameters: <code>TemplateBody</code> or <code>TemplateURL</code>—or set <code>UsePreviousTemplate</code> to true. </p>
		 * @param {boolean} UsePreviousTemplate <p>Use the existing template that's associated with the stack set that you're updating.</p> <p>Conditional: You must specify only one of the following parameters: <code>TemplateBody</code> or <code>TemplateURL</code>—or set <code>UsePreviousTemplate</code> to true. </p>
		 * @param {Array<Parameter>} Parameters A list of input parameters for the stack set template. 
		 * @param {Array<Capability>} Capabilities <p>In some cases, you must explicitly acknowledge that your stack template contains certain capabilities in order for AWS CloudFormation to update the stack set and its associated stack instances.</p> <ul> <li> <p> <code>CAPABILITY_IAM</code> and <code>CAPABILITY_NAMED_IAM</code> </p> <p>Some stack templates might include resources that can affect permissions in your AWS account; for example, by creating new AWS Identity and Access Management (IAM) users. For those stacks sets, you must explicitly acknowledge this by specifying one of these capabilities.</p> <p>The following IAM resources require you to specify either the <code>CAPABILITY_IAM</code> or <code>CAPABILITY_NAMED_IAM</code> capability.</p> <ul> <li> <p>If you have IAM resources, you can specify either capability. </p> </li> <li> <p>If you have IAM resources with custom names, you <i>must</i> specify <code>CAPABILITY_NAMED_IAM</code>. </p> </li> <li> <p>If you don't specify either of these capabilities, AWS CloudFormation returns an <code>InsufficientCapabilities</code> error.</p> </li> </ul> <p>If your stack template contains these resources, we recommend that you review all permissions associated with them and edit their permissions if necessary.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-accesskey.html"> AWS::IAM::AccessKey</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-group.html"> AWS::IAM::Group</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html"> AWS::IAM::InstanceProfile</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-policy.html"> AWS::IAM::Policy</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html"> AWS::IAM::Role</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-user.html"> AWS::IAM::User</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-addusertogroup.html"> AWS::IAM::UserToGroupAddition</a> </p> </li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#capabilities">Acknowledging IAM Resources in AWS CloudFormation Templates</a>.</p> </li> <li> <p> <code>CAPABILITY_AUTO_EXPAND</code> </p> <p>Some templates contain macros. If your stack template contains one or more macros, and you choose to update a stack directly from the processed template, without first reviewing the resulting changes in a change set, you must acknowledge this capability. For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-macros.html">Using AWS CloudFormation Macros to Perform Custom Processing on Templates</a>.</p> <important> <p>Stack sets do not currently support macros in stack templates. (This includes the <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/create-reusable-transform-function-snippets-and-add-to-your-template-with-aws-include-transform.html">AWS::Include</a> and <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-aws-serverless.html">AWS::Serverless</a> transforms, which are macros hosted by AWS CloudFormation.) Even if you specify this capability, if you include a macro in your template the stack set operation will fail.</p> </important> </li> </ul>
		 * @param {Array<Tag>} Tags <p>The key-value pairs to associate with this stack set and the stacks created from it. AWS CloudFormation also propagates these tags to supported resources that are created in the stacks. You can specify a maximum number of 50 tags.</p> <p>If you specify tags for this parameter, those tags replace any list of tags that are currently associated with this stack set. This means:</p> <ul> <li> <p>If you don't specify this parameter, AWS CloudFormation doesn't modify the stack's tags. </p> </li> <li> <p>If you specify <i>any</i> tags using this parameter, you must specify <i>all</i> the tags that you want associated with this stack set, even tags you've specifed before (for example, when creating the stack set or during a previous update of the stack set.). Any tags that you don't include in the updated list of tags are removed from the stack set, and therefore from the stacks and resources as well. </p> </li> <li> <p>If you specify an empty value, AWS CloudFormation removes all currently associated tags.</p> </li> </ul> <p>If you specify new tags as part of an <code>UpdateStackSet</code> action, AWS CloudFormation checks to see if you have the required IAM permission to tag resources. If you omit tags that are currently associated with the stack set from the list of tags you specify, AWS CloudFormation assumes that you want to remove those tags from the stack set, and checks to see if you have permission to untag resources. If you don't have the necessary permission(s), the entire <code>UpdateStackSet</code> action fails with an <code>access denied</code> error, and the stack set is not updated.</p>
		 * @param {string} OperationPreferences Preferences for how AWS CloudFormation performs this stack set operation.
		 * @param {string} AdministrationRoleARN <p>The Amazon Resource Number (ARN) of the IAM role to use to update this stack set.</p> <p>Specify an IAM role only if you are using customized administrator roles to control which users or groups can manage specific stack sets within the same administrator account. For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs.html">Granting Permissions for Stack Set Operations</a> in the <i>AWS CloudFormation User Guide</i>.</p> <p>If you specified a customized administrator role when you created the stack set, you must specify a customized administrator role, even if it is the same customized administrator role used with this stack set previously.</p>
		 * @param {string} ExecutionRoleName <p>The name of the IAM execution role to use to update the stack set. If you do not specify an execution role, AWS CloudFormation uses the <code>AWSCloudFormationStackSetExecutionRole</code> role for the stack set operation.</p> <p>Specify an IAM role only if you are using customized execution roles to control which stack resources users and groups can include in their stack sets. </p> <p> If you specify a customized execution role, AWS CloudFormation uses that role to update the stack. If you do not specify a customized execution role, AWS CloudFormation performs the update using the role previously associated with the stack set, so long as you have permissions to perform operations on the stack set.</p>
		 * @param {string} DeploymentTargets <p>[<code>Service-managed</code> permissions] The AWS Organizations accounts in which to update associated stack instances.</p> <p>To update all the stack instances associated with this stack set, do not specify <code>DeploymentTargets</code> or <code>Regions</code>.</p> <p>If the stack set update includes changes to the template (that is, if <code>TemplateBody</code> or <code>TemplateURL</code> is specified), or the <code>Parameters</code>, AWS CloudFormation marks all stack instances with a status of <code>OUTDATED</code> prior to updating the stack instances in the specified accounts and Regions. If the stack set update does not include changes to the template or parameters, AWS CloudFormation updates the stack instances in the specified accounts and Regions, while leaving all other stack instances with their existing stack instance status.</p>
		 * @param {PermissionModels} PermissionModel <p>Describes how the IAM roles required for stack set operations are created. You cannot modify <code>PermissionModel</code> if there are stack instances associated with your stack set.</p> <ul> <li> <p>With <code>self-managed</code> permissions, you must create the administrator and execution roles required to deploy to target accounts. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs-self-managed.html">Grant Self-Managed Stack Set Permissions</a>.</p> </li> <li> <p>With <code>service-managed</code> permissions, StackSets automatically creates the IAM roles required to deploy to accounts managed by AWS Organizations. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs-service-managed.html">Grant Service-Managed Stack Set Permissions</a>.</p> </li> </ul>
		 * @param {string} AutoDeployment <p>[<code>Service-managed</code> permissions] Describes whether StackSets automatically deploys to AWS Organizations accounts that are added to a target organization or organizational unit (OU).</p> <p>If you specify <code>AutoDeployment</code>, do not specify <code>DeploymentTargets</code> or <code>Regions</code>.</p>
		 * @param {string} OperationId <p>The unique ID for this stack set operation. </p> <p>The operation ID also functions as an idempotency token, to ensure that AWS CloudFormation performs the stack set operation only once, even if you retry the request multiple times. You might retry stack set operation requests to ensure that AWS CloudFormation successfully received them.</p> <p>If you don't specify an operation ID, AWS CloudFormation generates one automatically.</p> <p>Repeating this stack set operation with a new operation ID retries all stack instances whose status is <code>OUTDATED</code>. </p>
		 * @param {Array<Account>} Accounts <p>[<code>Self-managed</code> permissions] The accounts in which to update associated stack instances. If you specify accounts, you must also specify the Regions in which to update stack set instances.</p> <p>To update <i>all</i> the stack instances associated with this stack set, do not specify the <code>Accounts</code> or <code>Regions</code> properties.</p> <p>If the stack set update includes changes to the template (that is, if the <code>TemplateBody</code> or <code>TemplateURL</code> properties are specified), or the <code>Parameters</code> property, AWS CloudFormation marks all stack instances with a status of <code>OUTDATED</code> prior to updating the stack instances in the specified accounts and Regions. If the stack set update does not include changes to the template or parameters, AWS CloudFormation updates the stack instances in the specified accounts and Regions, while leaving all other stack instances with their existing stack instance status. </p>
		 * @param {Array<Region>} Regions <p>The Regions in which to update associated stack instances. If you specify Regions, you must also specify accounts in which to update stack set instances.</p> <p>To update <i>all</i> the stack instances associated with this stack set, do not specify the <code>Accounts</code> or <code>Regions</code> properties.</p> <p>If the stack set update includes changes to the template (that is, if the <code>TemplateBody</code> or <code>TemplateURL</code> properties are specified), or the <code>Parameters</code> property, AWS CloudFormation marks all stack instances with a status of <code>OUTDATED</code> prior to updating the stack instances in the specified accounts and Regions. If the stack set update does not include changes to the template or parameters, AWS CloudFormation updates the stack instances in the specified accounts and Regions, while leaving all other stack instances with their existing stack instance status. </p>
		 * @return {void} Success
		 */
		GET_UpdateStackSet(StackSetName: string, Description: string, TemplateBody: string, TemplateURL: string, UsePreviousTemplate: boolean, Parameters: Array<Parameter>, Capabilities: Array<Capability>, Tags: Array<Tag>, OperationPreferences: string, AdministrationRoleARN: string, ExecutionRoleName: string, DeploymentTargets: string, PermissionModel: PermissionModels, AutoDeployment: string, OperationId: string, Accounts: Array<Account>, Regions: Array<Region>, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.get('/#Action=UpdateStackSet?StackSetName=' + (StackSetName == null ? '' : encodeURIComponent(StackSetName)) + '&Description=' + (Description == null ? '' : encodeURIComponent(Description)) + '&TemplateBody=' + (TemplateBody == null ? '' : encodeURIComponent(TemplateBody)) + '&TemplateURL=' + (TemplateURL == null ? '' : encodeURIComponent(TemplateURL)) + '&UsePreviousTemplate=' + UsePreviousTemplate + '&' + Parameters.map(z => `Parameters=${z}`).join('&') + '&' + Capabilities.map(z => `Capabilities=${z}`).join('&') + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&OperationPreferences=' + (OperationPreferences == null ? '' : encodeURIComponent(OperationPreferences)) + '&AdministrationRoleARN=' + (AdministrationRoleARN == null ? '' : encodeURIComponent(AdministrationRoleARN)) + '&ExecutionRoleName=' + (ExecutionRoleName == null ? '' : encodeURIComponent(ExecutionRoleName)) + '&DeploymentTargets=' + (DeploymentTargets == null ? '' : encodeURIComponent(DeploymentTargets)) + '&PermissionModel=' + PermissionModel + '&AutoDeployment=' + (AutoDeployment == null ? '' : encodeURIComponent(AutoDeployment)) + '&OperationId=' + (OperationId == null ? '' : encodeURIComponent(OperationId)) + '&' + Accounts.map(z => `Accounts=${z}`).join('&') + '&' + Regions.map(z => `Regions=${z}`).join('&') + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Updates termination protection for the specified stack. If a user attempts to delete a stack with termination protection enabled, the operation fails and the stack remains unchanged. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-protect-stacks.html">Protecting a Stack From Being Deleted</a> in the <i>AWS CloudFormation User Guide</i>.</p> <p> For <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html">nested stacks</a>, termination protection is set on the root stack and cannot be changed directly on the nested stack.</p>
		 * Get /#Action=UpdateTerminationProtection
		 * @param {boolean} EnableTerminationProtection Whether to enable termination protection on the specified stack.
		 * @param {string} StackName The name or unique ID of the stack for which you want to set termination protection.
		 * @return {void} Success
		 */
		GET_UpdateTerminationProtection(EnableTerminationProtection: boolean, StackName: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.get('/#Action=UpdateTerminationProtection?EnableTerminationProtection=' + EnableTerminationProtection + '&StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Validates a specified template. AWS CloudFormation first checks if the template is valid JSON. If it isn't, AWS CloudFormation checks if the template is valid YAML. If both these checks fail, AWS CloudFormation returns a template validation error.
		 * Get /#Action=ValidateTemplate
		 * @param {string} TemplateBody <p>Structure containing the template body with a minimum length of 1 byte and a maximum length of 51,200 bytes. For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a> in the AWS CloudFormation User Guide.</p> <p>Conditional: You must pass <code>TemplateURL</code> or <code>TemplateBody</code>. If both are passed, only <code>TemplateBody</code> is used.</p>
		 * @param {string} TemplateURL <p>Location of file containing the template body. The URL must point to a template (max size: 460,800 bytes) that is located in an Amazon S3 bucket. For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a> in the AWS CloudFormation User Guide.</p> <p>Conditional: You must pass <code>TemplateURL</code> or <code>TemplateBody</code>. If both are passed, only <code>TemplateBody</code> is used.</p>
		 * @return {void} Success
		 */
		GET_ValidateTemplate(TemplateBody: string, TemplateURL: string, Action: string, Version: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.get('/#Action=ValidateTemplate?TemplateBody=' + (TemplateBody == null ? '' : encodeURIComponent(TemplateBody)) + '&TemplateURL=' + (TemplateURL == null ? '' : encodeURIComponent(TemplateURL)) + '&Action=' + (Action == null ? '' : encodeURIComponent(Action)) + '&Version=' + (Version == null ? '' : encodeURIComponent(Version)), { headers: headersHandler ? headersHandler() : undefined });
		}
	}

}

