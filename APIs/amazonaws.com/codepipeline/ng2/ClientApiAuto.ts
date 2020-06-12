import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace My_Demo_Client {

	/**Represents the output of an AcknowledgeJob action. */
	export interface AcknowledgeJobOutput {
		status?: AcknowledgeJobOutputStatus;
	}

	export enum AcknowledgeJobOutputStatus { Created = 0, Queued = 1, Dispatched = 2, InProgress = 3, TimedOut = 4, Succeeded = 5, Failed = 6 }


	/**Represents the input of an AcknowledgeJob action. */
	export interface AcknowledgeJobInput {
		jobId: string;
		nonce: string;
	}


	/**Represents the output of an AcknowledgeThirdPartyJob action. */
	export interface AcknowledgeThirdPartyJobOutput {
		status?: AcknowledgeThirdPartyJobOutputStatus;
	}

	export enum AcknowledgeThirdPartyJobOutputStatus { Created = 0, Queued = 1, Dispatched = 2, InProgress = 3, TimedOut = 4, Succeeded = 5, Failed = 6 }


	/**Represents the input of an AcknowledgeThirdPartyJob action. */
	export interface AcknowledgeThirdPartyJobInput {
		jobId: string;
		nonce: string;
		clientToken: string;
	}


	/**Represents the output of a <code>CreateCustomActionType</code> operation. */
	export interface CreateCustomActionTypeOutput {

		/**Returns information about the details of an action type. */
		actionType: ActionType;
		tags?: Array<Tag>;
	}


	/**Represents the input of a CreateCustomActionType operation. */
	export interface CreateCustomActionTypeInput {
		category: CreateCustomActionTypeInputCategory;
		provider: string;
		version: string;

		/**Returns information about the settings for an action type. */
		settings?: ActionTypeSettings;
		configurationProperties?: Array<ActionConfigurationProperty>;

		/**Returns information about the details of an artifact. */
		inputArtifactDetails: ArtifactDetails;

		/**Returns information about the details of an artifact. */
		outputArtifactDetails: ArtifactDetails;
		tags?: Array<Tag>;
	}

	export enum CreateCustomActionTypeInputCategory { Source = 0, Build = 1, Deploy = 2, Test = 3, Invoke = 4, Approval = 5 }


	/**Represents the output of a <code>CreatePipeline</code> action. */
	export interface CreatePipelineOutput {

		/**Represents the structure of actions and stages to be performed in the pipeline. */
		pipeline?: PipelineDeclaration;
		tags?: Array<Tag>;
	}


	/**Represents the input of a <code>CreatePipeline</code> action. */
	export interface CreatePipelineInput {

		/**Represents the structure of actions and stages to be performed in the pipeline. */
		pipeline: PipelineDeclaration;
		tags?: Array<Tag>;
	}


	/**Represents the input of a <code>DeleteCustomActionType</code> operation. The custom action will be marked as deleted. */
	export interface DeleteCustomActionTypeInput {
		category: DeleteCustomActionTypeInputCategory;
		provider: string;
		version: string;
	}

	export enum DeleteCustomActionTypeInputCategory { Source = 0, Build = 1, Deploy = 2, Test = 3, Invoke = 4, Approval = 5 }


	/**Represents the input of a <code>DeletePipeline</code> action. */
	export interface DeletePipelineInput {
		name: string;
	}

	export interface DeleteWebhookInput {
		name: string;
	}

	export interface DeregisterWebhookWithThirdPartyInput {
		webhookName?: string;
	}


	/**Represents the input of a <code>DisableStageTransition</code> action. */
	export interface DisableStageTransitionInput {
		pipelineName: string;
		stageName: string;
		transitionType: DisableStageTransitionInputTransitionType;
		reason: string;
	}

	export enum DisableStageTransitionInputTransitionType { Inbound = 0, Outbound = 1 }


	/**Represents the input of an <code>EnableStageTransition</code> action. */
	export interface EnableStageTransitionInput {
		pipelineName: string;
		stageName: string;
		transitionType: EnableStageTransitionInputTransitionType;
	}

	export enum EnableStageTransitionInputTransitionType { Inbound = 0, Outbound = 1 }


	/**Represents the output of a <code>GetJobDetails</code> action. */
	export interface GetJobDetailsOutput {

		/**Represents information about the details of a job. */
		jobDetails?: JobDetails;
	}


	/**Represents the input of a <code>GetJobDetails</code> action. */
	export interface GetJobDetailsInput {
		jobId: string;
	}


	/**Represents the output of a <code>GetPipeline</code> action. */
	export interface GetPipelineOutput {

		/**Represents the structure of actions and stages to be performed in the pipeline. */
		pipeline?: PipelineDeclaration;

		/**Information about a pipeline. */
		metadata?: PipelineMetadata;
	}


	/**Represents the input of a <code>GetPipeline</code> action. */
	export interface GetPipelineInput {
		name: string;
		version?: number;
	}


	/**Represents the output of a <code>GetPipelineExecution</code> action. */
	export interface GetPipelineExecutionOutput {

		/**Represents information about an execution of a pipeline. */
		pipelineExecution?: PipelineExecution;
	}


	/**Represents the input of a <code>GetPipelineExecution</code> action. */
	export interface GetPipelineExecutionInput {
		pipelineName: string;
		pipelineExecutionId: string;
	}


	/**Represents the output of a <code>GetPipelineState</code> action. */
	export interface GetPipelineStateOutput {
		pipelineName?: string;
		pipelineVersion?: number;
		stageStates?: Array<StageState>;
		created?: Date;
		updated?: Date;
	}


	/**Represents the input of a <code>GetPipelineState</code> action. */
	export interface GetPipelineStateInput {
		name: string;
	}


	/**Represents the output of a <code>GetThirdPartyJobDetails</code> action. */
	export interface GetThirdPartyJobDetailsOutput {

		/**The details of a job sent in response to a <code>GetThirdPartyJobDetails</code> request. */
		jobDetails?: ThirdPartyJobDetails;
	}


	/**Represents the input of a <code>GetThirdPartyJobDetails</code> action. */
	export interface GetThirdPartyJobDetailsInput {
		jobId: string;
		clientToken: string;
	}

	export interface ListActionExecutionsOutput {
		actionExecutionDetails?: Array<ActionExecutionDetail>;
		nextToken?: string;
	}

	export interface ListActionExecutionsInput {
		pipelineName: string;

		/**Filter values for the action execution. */
		filter?: ActionExecutionFilter;
		maxResults?: number;
		nextToken?: string;
	}


	/**Represents the output of a <code>ListActionTypes</code> action. */
	export interface ListActionTypesOutput {
		actionTypes: Array<ActionType>;
		nextToken?: string;
	}


	/**Represents the input of a <code>ListActionTypes</code> action. */
	export interface ListActionTypesInput {
		actionOwnerFilter?: ListActionTypesInputActionOwnerFilter;
		nextToken?: string;
	}

	export enum ListActionTypesInputActionOwnerFilter { AWS = 0, ThirdParty = 1, Custom = 2 }


	/**Represents the output of a <code>ListPipelineExecutions</code> action. */
	export interface ListPipelineExecutionsOutput {
		pipelineExecutionSummaries?: Array<PipelineExecutionSummary>;
		nextToken?: string;
	}


	/**Represents the input of a <code>ListPipelineExecutions</code> action. */
	export interface ListPipelineExecutionsInput {
		pipelineName: string;
		maxResults?: number;
		nextToken?: string;
	}


	/**Represents the output of a <code>ListPipelines</code> action. */
	export interface ListPipelinesOutput {
		pipelines?: Array<PipelineSummary>;
		nextToken?: string;
	}


	/**Represents the input of a <code>ListPipelines</code> action. */
	export interface ListPipelinesInput {
		nextToken?: string;
	}

	export interface ListTagsForResourceOutput {
		tags?: Array<Tag>;
		nextToken?: string;
	}

	export interface ListTagsForResourceInput {
		resourceArn: string;
		nextToken?: string;
		maxResults?: number;
	}

	export interface ListWebhooksOutput {
		webhooks?: Array<ListWebhookItem>;
		NextToken?: string;
	}

	export interface ListWebhooksInput {
		NextToken?: string;
		MaxResults?: number;
	}


	/**Represents the output of a <code>PollForJobs</code> action. */
	export interface PollForJobsOutput {
		jobs?: Array<Job>;
	}


	/**Represents the input of a <code>PollForJobs</code> action. */
	export interface PollForJobsInput {

		/**Represents information about an action type. */
		actionTypeId: ActionTypeId;
		maxBatchSize?: number;
		queryParam?: QueryParamMap;
	}


	/**Represents the output of a <code>PollForThirdPartyJobs</code> action. */
	export interface PollForThirdPartyJobsOutput {
		jobs?: Array<ThirdPartyJob>;
	}


	/**Represents the input of a <code>PollForThirdPartyJobs</code> action. */
	export interface PollForThirdPartyJobsInput {

		/**Represents information about an action type. */
		actionTypeId: ActionTypeId;
		maxBatchSize?: number;
	}


	/**Represents the output of a <code>PutActionRevision</code> action. */
	export interface PutActionRevisionOutput {
		newRevision?: boolean;
		pipelineExecutionId?: string;
	}


	/**Represents the input of a <code>PutActionRevision</code> action. */
	export interface PutActionRevisionInput {
		pipelineName: string;
		stageName: string;
		actionName: string;

		/**Represents information about the version (or revision) of an action. */
		actionRevision: ActionRevision;
	}


	/**Represents the output of a <code>PutApprovalResult</code> action. */
	export interface PutApprovalResultOutput {
		approvedAt?: Date;
	}


	/**Represents the input of a <code>PutApprovalResult</code> action. */
	export interface PutApprovalResultInput {
		pipelineName: string;
		stageName: string;
		actionName: string;

		/**Represents information about the result of an approval request. */
		result: ApprovalResult;
		token: string;
	}


	/**Represents the input of a <code>PutJobFailureResult</code> action. */
	export interface PutJobFailureResultInput {
		jobId: string;

		/**Represents information about failure details. */
		failureDetails: FailureDetails;
	}


	/**Represents the input of a <code>PutJobSuccessResult</code> action. */
	export interface PutJobSuccessResultInput {
		jobId: string;

		/**Represents information about a current revision. */
		currentRevision?: CurrentRevision;
		continuationToken?: string;

		/**The details of the actions taken and results produced on an artifact as it passes through stages in the pipeline. */
		executionDetails?: ExecutionDetails;
		outputVariables?: OutputVariablesMap;
	}


	/**Represents the input of a <code>PutThirdPartyJobFailureResult</code> action. */
	export interface PutThirdPartyJobFailureResultInput {
		jobId: string;
		clientToken: string;

		/**Represents information about failure details. */
		failureDetails: FailureDetails;
	}


	/**Represents the input of a <code>PutThirdPartyJobSuccessResult</code> action. */
	export interface PutThirdPartyJobSuccessResultInput {
		jobId: string;
		clientToken: string;

		/**Represents information about a current revision. */
		currentRevision?: CurrentRevision;
		continuationToken?: string;

		/**The details of the actions taken and results produced on an artifact as it passes through stages in the pipeline. */
		executionDetails?: ExecutionDetails;
	}

	export interface PutWebhookOutput {

		/**The detail returned for each webhook after listing webhooks, such as the webhook URL, the webhook name, and the webhook ARN. */
		webhook?: ListWebhookItem;
	}

	export interface PutWebhookInput {

		/**Represents information about a webhook and its definition. */
		webhook: WebhookDefinition;
		tags?: Array<Tag>;
	}

	export interface RegisterWebhookWithThirdPartyInput {
		webhookName?: string;
	}


	/**Represents the output of a <code>RetryStageExecution</code> action. */
	export interface RetryStageExecutionOutput {
		pipelineExecutionId?: string;
	}


	/**Represents the input of a <code>RetryStageExecution</code> action. */
	export interface RetryStageExecutionInput {
		pipelineName: string;
		stageName: string;
		pipelineExecutionId: string;
		retryMode: RetryStageExecutionInputRetryMode;
	}

	export enum RetryStageExecutionInputRetryMode { FAILED_ACTIONS = 0 }


	/**Represents the output of a <code>StartPipelineExecution</code> action. */
	export interface StartPipelineExecutionOutput {
		pipelineExecutionId?: string;
	}


	/**Represents the input of a <code>StartPipelineExecution</code> action. */
	export interface StartPipelineExecutionInput {
		name: string;
		clientRequestToken?: string;
	}

	export interface StopPipelineExecutionOutput {
		pipelineExecutionId?: string;
	}

	export interface StopPipelineExecutionInput {
		pipelineName: string;
		pipelineExecutionId: string;
		abandon?: boolean;
		reason?: string;
	}

	export interface TagResourceInput {
		resourceArn: string;
		tags: Array<Tag>;
	}

	export interface UntagResourceInput {
		resourceArn: string;
		tagKeys: Array<TagKey>;
	}


	/**Represents the output of an <code>UpdatePipeline</code> action. */
	export interface UpdatePipelineOutput {

		/**Represents the structure of actions and stages to be performed in the pipeline. */
		pipeline?: PipelineDeclaration;
	}


	/**Represents the input of an <code>UpdatePipeline</code> action. */
	export interface UpdatePipelineInput {

		/**Represents the structure of actions and stages to be performed in the pipeline. */
		pipeline: PipelineDeclaration;
	}


	/**Represents an AWS session credentials object. These credentials are temporary credentials that are issued by AWS Secure Token Service (STS). They can be used to access input and output artifacts in the S3 bucket used to store artifact for the pipeline in AWS CodePipeline. */
	export interface AWSSessionCredentials {
		accessKeyId: string;
		secretAccessKey: string;
		sessionToken: string;
	}

	export enum JobStatus { Created = 0, Queued = 1, Dispatched = 2, InProgress = 3, TimedOut = 4, Succeeded = 5, Failed = 6 }

	export enum ActionCategory { Source = 0, Build = 1, Deploy = 2, Test = 3, Invoke = 4, Approval = 5 }


	/**Represents information about an action configuration. */
	export interface ActionConfiguration {
		configuration?: ActionConfigurationMap;
	}

	export enum ActionConfigurationPropertyType { String = 0, Number = 1, Boolean = 2 }


	/**Represents information about an action configuration property. */
	export interface ActionConfigurationProperty {
		name: string;
		required: boolean;
		key: boolean;
		secret: boolean;
		queryable?: boolean;
		description?: string;
		type?: ActionConfigurationPropertyType;
	}

	export enum ActionConfigurationPropertyType { String = 0, Number = 1, Boolean = 2 }


	/**Represents the context of an action in the stage of a pipeline to a job worker. */
	export interface ActionContext {
		name?: string;
		actionExecutionId?: string;
	}


	/**Represents information about an action type. */
	export interface ActionTypeId {
		category: ActionTypeIdCategory;
		owner: ActionTypeIdOwner;
		provider: string;
		version: string;
	}

	export enum ActionTypeIdCategory { Source = 0, Build = 1, Deploy = 2, Test = 3, Invoke = 4, Approval = 5 }

	export enum ActionTypeIdOwner { AWS = 0, ThirdParty = 1, Custom = 2 }


	/**Represents information about an action declaration. */
	export interface ActionDeclaration {
		name: string;

		/**Represents information about an action type. */
		actionTypeId: ActionTypeId;
		runOrder?: number;
		configuration?: ActionConfigurationMap;
		outputArtifacts?: Array<OutputArtifact>;
		inputArtifacts?: Array<InputArtifact>;
		roleArn?: string;
		region?: string;
		namespace?: string;
	}

	export enum ActionExecutionStatus { InProgress = 0, Abandoned = 1, Succeeded = 2, Failed = 3 }


	/**Represents information about an error in AWS CodePipeline. */
	export interface ErrorDetails {
		code?: string;
		message?: string;
	}


	/**Represents information about the run of an action. */
	export interface ActionExecution {
		status?: ActionExecutionStatus;
		summary?: string;
		lastStatusChange?: Date;
		token?: string;
		lastUpdatedBy?: string;
		externalExecutionId?: string;
		externalExecutionUrl?: string;
		percentComplete?: number;

		/**Represents information about an error in AWS CodePipeline. */
		errorDetails?: ErrorDetails;
	}

	export enum ActionExecutionStatus { InProgress = 0, Abandoned = 1, Succeeded = 2, Failed = 3 }


	/**Input information used for an action execution. */
	export interface ActionExecutionInput {

		/**Represents information about an action type. */
		actionTypeId?: ActionTypeId;
		configuration?: ActionConfigurationMap;
		resolvedConfiguration?: ResolvedActionConfigurationMap;
		roleArn?: string;
		region?: string;
		inputArtifacts?: Array<ArtifactDetail>;
		namespace?: string;
	}


	/**Output details listed for an action execution, such as the action execution result. */
	export interface ActionExecutionOutput {
		outputArtifacts?: Array<ArtifactDetail>;

		/**Execution result information, such as the external execution ID. */
		executionResult?: ActionExecutionResult;
		outputVariables?: OutputVariablesMap;
	}


	/**Returns information about an execution of an action, including the action execution ID, and the name, version, and timing of the action.  */
	export interface ActionExecutionDetail {
		pipelineExecutionId?: string;
		actionExecutionId?: string;
		pipelineVersion?: number;
		stageName?: string;
		actionName?: string;
		startTime?: Date;
		lastUpdateTime?: Date;
		status?: ActionExecutionDetailStatus;

		/**Input information used for an action execution. */
		input?: ActionExecutionInput;

		/**Output details listed for an action execution, such as the action execution result. */
		output?: ActionExecutionOutput;
	}

	export enum ActionExecutionDetailStatus { InProgress = 0, Abandoned = 1, Succeeded = 2, Failed = 3 }


	/**Filter values for the action execution. */
	export interface ActionExecutionFilter {
		pipelineExecutionId?: string;
	}


	/**Execution result information, such as the external execution ID. */
	export interface ActionExecutionResult {
		externalExecutionId?: string;
		externalExecutionSummary?: string;
		externalExecutionUrl?: string;
	}

	export enum ActionOwner { AWS = 0, ThirdParty = 1, Custom = 2 }


	/**Represents information about the version (or revision) of an action. */
	export interface ActionRevision {
		revisionId: string;
		revisionChangeId: string;
		created: Date;
	}


	/**Represents information about the state of an action. */
	export interface ActionState {
		actionName?: string;

		/**Represents information about the version (or revision) of an action. */
		currentRevision?: ActionRevision;

		/**Represents information about the run of an action. */
		latestExecution?: ActionExecution;
		entityUrl?: string;
		revisionUrl?: string;
	}


	/**Returns information about the settings for an action type. */
	export interface ActionTypeSettings {
		thirdPartyConfigurationUrl?: string;
		entityUrlTemplate?: string;
		executionUrlTemplate?: string;
		revisionUrlTemplate?: string;
	}


	/**Returns information about the details of an artifact. */
	export interface ArtifactDetails {
		minimumCount: number;
		maximumCount: number;
	}


	/**Returns information about the details of an action type. */
	export interface ActionType {

		/**Represents information about an action type. */
		id: ActionTypeId;

		/**Returns information about the settings for an action type. */
		settings?: ActionTypeSettings;
		actionConfigurationProperties?: Array<ActionConfigurationProperty>;

		/**Returns information about the details of an artifact. */
		inputArtifactDetails: ArtifactDetails;

		/**Returns information about the details of an artifact. */
		outputArtifactDetails: ArtifactDetails;
	}

	export enum ApprovalStatus { Approved = 0, Rejected = 1 }


	/**Represents information about the result of an approval request. */
	export interface ApprovalResult {
		summary: string;
		status: ApprovalResultStatus;
	}

	export enum ApprovalResultStatus { Approved = 0, Rejected = 1 }


	/**Represents information about the location of an artifact. */
	export interface ArtifactLocation {
		type?: ArtifactLocationType;

		/**The location of the S3 bucket that contains a revision. */
		s3Location?: S3ArtifactLocation;
	}

	export enum ArtifactLocationType { S3 = 0 }


	/**Represents information about an artifact that is worked on by actions in the pipeline. */
	export interface Artifact {
		name?: string;
		revision?: string;

		/**Represents information about the location of an artifact. */
		location?: ArtifactLocation;
	}


	/**The Amazon S3 artifact location for an action's artifacts. */
	export interface S3Location {
		bucket?: string;
		key?: string;
	}


	/**Artifact details for the action execution, such as the artifact location. */
	export interface ArtifactDetail {
		name?: string;

		/**The Amazon S3 artifact location for an action's artifacts. */
		s3location?: S3Location;
	}

	export enum ArtifactLocationType { S3 = 0 }


	/**The location of the S3 bucket that contains a revision. */
	export interface S3ArtifactLocation {
		bucketName: string;
		objectKey: string;
	}


	/**Represents revision details of an artifact.  */
	export interface ArtifactRevision {
		name?: string;
		revisionId?: string;
		revisionChangeIdentifier?: string;
		revisionSummary?: string;
		created?: Date;
		revisionUrl?: string;
	}

	export enum ArtifactStoreType { S3 = 0 }


	/**Represents information about the key used to encrypt data in the artifact store, such as an AWS Key Management Service (AWS KMS) key. */
	export interface EncryptionKey {
		id: string;
		type: EncryptionKeyType;
	}

	export enum EncryptionKeyType { KMS = 0 }


	/**<p>The S3 bucket where artifacts for the pipeline are stored.</p> <note> <p>You must include either <code>artifactStore</code> or <code>artifactStores</code> in your pipeline, but you cannot use both. If you create a cross-region action in your pipeline, you must use <code>artifactStores</code>.</p> </note> */
	export interface ArtifactStore {
		type: ArtifactStoreType;
		location: string;

		/**Represents information about the key used to encrypt data in the artifact store, such as an AWS Key Management Service (AWS KMS) key. */
		encryptionKey?: EncryptionKey;
	}

	export enum ArtifactStoreType { S3 = 0 }

	export enum BlockerType { Schedule = 0 }


	/**Reserved for future use. */
	export interface BlockerDeclaration {
		name: string;
		type: BlockerDeclarationType;
	}

	export enum BlockerDeclarationType { Schedule = 0 }


	/**Represents the structure of actions and stages to be performed in the pipeline. */
	export interface PipelineDeclaration {
		name: string;
		roleArn: string;

		/**<p>The S3 bucket where artifacts for the pipeline are stored.</p> <note> <p>You must include either <code>artifactStore</code> or <code>artifactStores</code> in your pipeline, but you cannot use both. If you create a cross-region action in your pipeline, you must use <code>artifactStores</code>.</p> </note> */
		artifactStore?: ArtifactStore;
		artifactStores?: ArtifactStoreMap;
		stages: Array<StageDeclaration>;
		version?: number;
	}


	/**Represents information about a current revision. */
	export interface CurrentRevision {
		revision: string;
		changeIdentifier: string;
		created?: Date;
		revisionSummary?: string;
	}

	export enum StageTransitionType { Inbound = 0, Outbound = 1 }

	export enum EncryptionKeyType { KMS = 0 }


	/**The details of the actions taken and results produced on an artifact as it passes through stages in the pipeline. */
	export interface ExecutionDetails {
		summary?: string;
		externalExecutionId?: string;
		percentComplete?: number;
	}

	export enum TriggerType { CreatePipeline = 0, StartPipelineExecution = 1, PollForSourceChanges = 2, Webhook = 3, CloudWatchEvent = 4, PutActionRevision = 5 }


	/**The interaction or event that started a pipeline execution. */
	export interface ExecutionTrigger {
		triggerType?: ExecutionTriggerTriggerType;
		triggerDetail?: string;
	}

	export enum ExecutionTriggerTriggerType { CreatePipeline = 0, StartPipelineExecution = 1, PollForSourceChanges = 2, Webhook = 3, CloudWatchEvent = 4, PutActionRevision = 5 }

	export enum FailureType { JobFailed = 0, ConfigurationError = 1, PermissionError = 2, RevisionOutOfSync = 3, RevisionUnavailable = 4, SystemUnavailable = 5 }


	/**Represents information about failure details. */
	export interface FailureDetails {
		type: FailureDetailsType;
		message: string;
		externalExecutionId?: string;
	}

	export enum FailureDetailsType { JobFailed = 0, ConfigurationError = 1, PermissionError = 2, RevisionOutOfSync = 3, RevisionUnavailable = 4, SystemUnavailable = 5 }


	/**Represents information about the details of a job. */
	export interface JobDetails {
		id?: string;

		/**Represents other information about a job required for a job worker to complete the job. */
		data?: JobData;
		accountId?: string;
	}


	/**Represents information about an execution of a pipeline. */
	export interface PipelineExecution {
		pipelineName?: string;
		pipelineVersion?: number;
		pipelineExecutionId?: string;
		status?: PipelineExecutionStatus;
		artifactRevisions?: Array<ArtifactRevision>;
	}

	export enum PipelineExecutionStatus { InProgress = 0, Stopped = 1, Stopping = 2, Succeeded = 3, Superseded = 4, Failed = 5 }


	/**Information about a pipeline. */
	export interface PipelineMetadata {
		pipelineArn?: string;
		created?: Date;
		updated?: Date;
	}


	/**The details of a job sent in response to a <code>GetThirdPartyJobDetails</code> request. */
	export interface ThirdPartyJobDetails {
		id?: string;

		/**Represents information about the job data for a partner action. */
		data?: ThirdPartyJobData;
		nonce?: string;
	}


	/**Represents information about an artifact to be worked on, such as a test or build artifact. */
	export interface InputArtifact {
		name: string;
	}


	/**Represents other information about a job required for a job worker to complete the job. */
	export interface JobData {

		/**Represents information about an action type. */
		actionTypeId?: ActionTypeId;

		/**Represents information about an action configuration. */
		actionConfiguration?: ActionConfiguration;

		/**<p>Represents information about a pipeline to a job worker.</p> <note> <p>PipelineContext contains <code>pipelineArn</code> and <code>pipelineExecutionId</code> for custom action jobs. The <code>pipelineArn</code> and <code>pipelineExecutionId</code> fields are not populated for ThirdParty action jobs.</p> </note> */
		pipelineContext?: PipelineContext;
		inputArtifacts?: Array<Artifact>;
		outputArtifacts?: Array<Artifact>;

		/**Represents an AWS session credentials object. These credentials are temporary credentials that are issued by AWS Secure Token Service (STS). They can be used to access input and output artifacts in the S3 bucket used to store artifact for the pipeline in AWS CodePipeline. */
		artifactCredentials?: AWSSessionCredentials;
		continuationToken?: string;

		/**Represents information about the key used to encrypt data in the artifact store, such as an AWS Key Management Service (AWS KMS) key. */
		encryptionKey?: EncryptionKey;
	}


	/**Represents information about a job. */
	export interface Job {
		id?: string;

		/**Represents other information about a job required for a job worker to complete the job. */
		data?: JobData;
		nonce?: string;
		accountId?: string;
	}


	/**<p>Represents information about a pipeline to a job worker.</p> <note> <p>PipelineContext contains <code>pipelineArn</code> and <code>pipelineExecutionId</code> for custom action jobs. The <code>pipelineArn</code> and <code>pipelineExecutionId</code> fields are not populated for ThirdParty action jobs.</p> </note> */
	export interface PipelineContext {
		pipelineName?: string;

		/**Represents information about a stage to a job worker. */
		stage?: StageContext;

		/**Represents the context of an action in the stage of a pipeline to a job worker. */
		action?: ActionContext;
		pipelineArn?: string;
		pipelineExecutionId?: string;
	}


	/**Represents information about a webhook and its definition. */
	export interface WebhookDefinition {
		name: string;
		targetPipeline: string;
		targetAction: string;
		filters: Array<WebhookFilterRule>;
		authentication: WebhookDefinitionAuthentication;

		/**The authentication applied to incoming webhook trigger requests. */
		authenticationConfiguration: WebhookAuthConfiguration;
	}

	export enum WebhookDefinitionAuthentication { GITHUB_HMAC = 0, IP = 1, UNAUTHENTICATED = 2 }


	/**The detail returned for each webhook after listing webhooks, such as the webhook URL, the webhook name, and the webhook ARN. */
	export interface ListWebhookItem {

		/**Represents information about a webhook and its definition. */
		definition: WebhookDefinition;
		url: string;
		errorMessage?: string;
		errorCode?: string;
		lastTriggered?: Date;
		arn?: string;
		tags?: Array<Tag>;
	}


	/**Represents information about the output of an action. */
	export interface OutputArtifact {
		name: string;
	}


	/**Represents information about a stage to a job worker. */
	export interface StageContext {
		name?: string;
	}

	export enum PipelineExecutionStatus { InProgress = 0, Stopped = 1, Stopping = 2, Succeeded = 3, Superseded = 4, Failed = 5 }


	/**The interaction that stopped a pipeline execution. */
	export interface StopExecutionTrigger {
		reason?: string;
	}


	/**Summary information about a pipeline execution. */
	export interface PipelineExecutionSummary {
		pipelineExecutionId?: string;
		status?: PipelineExecutionSummaryStatus;
		startTime?: Date;
		lastUpdateTime?: Date;
		sourceRevisions?: Array<SourceRevision>;

		/**The interaction or event that started a pipeline execution. */
		trigger?: ExecutionTrigger;

		/**The interaction that stopped a pipeline execution. */
		stopTrigger?: StopExecutionTrigger;
	}

	export enum PipelineExecutionSummaryStatus { InProgress = 0, Stopped = 1, Stopping = 2, Succeeded = 3, Superseded = 4, Failed = 5 }


	/**Returns a summary of a pipeline. */
	export interface PipelineSummary {
		name?: string;
		version?: number;
		created?: Date;
		updated?: Date;
	}


	/**Represents information about a stage and its definition. */
	export interface StageDeclaration {
		name: string;
		blockers?: Array<BlockerDeclaration>;
		actions: Array<ActionDeclaration>;
	}

	export enum StageRetryMode { FAILED_ACTIONS = 0 }


	/**Information about the version (or revision) of a source artifact that initiated a pipeline execution. */
	export interface SourceRevision {
		actionName: string;
		revisionId?: string;
		revisionSummary?: string;
		revisionUrl?: string;
	}

	export enum StageExecutionStatus { InProgress = 0, Failed = 1, Stopped = 2, Stopping = 3, Succeeded = 4 }


	/**Represents information about the run of a stage. */
	export interface StageExecution {
		pipelineExecutionId: string;
		status: StageExecutionStatus;
	}

	export enum StageExecutionStatus { InProgress = 0, Failed = 1, Stopped = 2, Stopping = 3, Succeeded = 4 }


	/**Represents information about the state of transitions between one stage and another stage. */
	export interface TransitionState {
		enabled?: boolean;
		lastChangedBy?: string;
		lastChangedAt?: Date;
		disabledReason?: string;
	}


	/**Represents information about the state of the stage. */
	export interface StageState {
		stageName?: string;

		/**Represents information about the state of transitions between one stage and another stage. */
		inboundTransitionState?: TransitionState;
		actionStates?: Array<ActionState>;

		/**Represents information about the run of a stage. */
		latestExecution?: StageExecution;
	}


	/**A tag is a key-value pair that is used to manage the resource. */
	export interface Tag {
		key: string;
		value: string;
	}


	/**A response to a <code>PollForThirdPartyJobs</code> request returned by AWS CodePipeline when there is a job to be worked on by a partner action. */
	export interface ThirdPartyJob {
		clientId?: string;
		jobId?: string;
	}


	/**Represents information about the job data for a partner action. */
	export interface ThirdPartyJobData {

		/**Represents information about an action type. */
		actionTypeId?: ActionTypeId;

		/**Represents information about an action configuration. */
		actionConfiguration?: ActionConfiguration;

		/**<p>Represents information about a pipeline to a job worker.</p> <note> <p>PipelineContext contains <code>pipelineArn</code> and <code>pipelineExecutionId</code> for custom action jobs. The <code>pipelineArn</code> and <code>pipelineExecutionId</code> fields are not populated for ThirdParty action jobs.</p> </note> */
		pipelineContext?: PipelineContext;
		inputArtifacts?: Array<Artifact>;
		outputArtifacts?: Array<Artifact>;

		/**Represents an AWS session credentials object. These credentials are temporary credentials that are issued by AWS Secure Token Service (STS). They can be used to access input and output artifacts in the S3 bucket used to store artifact for the pipeline in AWS CodePipeline. */
		artifactCredentials?: AWSSessionCredentials;
		continuationToken?: string;

		/**Represents information about the key used to encrypt data in the artifact store, such as an AWS Key Management Service (AWS KMS) key. */
		encryptionKey?: EncryptionKey;
	}


	/**The authentication applied to incoming webhook trigger requests. */
	export interface WebhookAuthConfiguration {
		AllowedIPRange?: string;
		SecretToken?: string;
	}

	export enum WebhookAuthenticationType { GITHUB_HMAC = 0, IP = 1, UNAUTHENTICATED = 2 }


	/**The event criteria that specify when a webhook notification is sent to your URL. */
	export interface WebhookFilterRule {
		jsonPath: string;
		matchEquals?: string;
	}

	@Injectable()
	export class DemoClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns information about a specified job and whether that job has been received by the job worker. Used for custom actions only.
		 * Post /#X-Amz-Target=CodePipeline_20150709.AcknowledgeJob
		 * @return {AcknowledgeJobOutput} Success
		 */
		AcknowledgeJob(requestBody: AcknowledgeJobInput, headersHandler?: () => HttpHeaders): Observable<AcknowledgeJobOutput> {
			return this.http.post<AcknowledgeJobOutput>(this.baseUri + '/#X-Amz-Target=CodePipeline_20150709.AcknowledgeJob', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Confirms a job worker has received the specified job. Used for partner actions only.
		 * Post /#X-Amz-Target=CodePipeline_20150709.AcknowledgeThirdPartyJob
		 * @return {AcknowledgeThirdPartyJobOutput} Success
		 */
		AcknowledgeThirdPartyJob(requestBody: AcknowledgeThirdPartyJobInput, headersHandler?: () => HttpHeaders): Observable<AcknowledgeThirdPartyJobOutput> {
			return this.http.post<AcknowledgeThirdPartyJobOutput>(this.baseUri + '/#X-Amz-Target=CodePipeline_20150709.AcknowledgeThirdPartyJob', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Creates a new custom action that can be used in all pipelines associated with the AWS account. Only used for custom actions.
		 * Post /#X-Amz-Target=CodePipeline_20150709.CreateCustomActionType
		 * @return {CreateCustomActionTypeOutput} Success
		 */
		CreateCustomActionType(requestBody: CreateCustomActionTypeInput, headersHandler?: () => HttpHeaders): Observable<CreateCustomActionTypeOutput> {
			return this.http.post<CreateCustomActionTypeOutput>(this.baseUri + '/#X-Amz-Target=CodePipeline_20150709.CreateCustomActionType', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Creates a pipeline.</p> <note> <p>In the pipeline structure, you must include either <code>artifactStore</code> or <code>artifactStores</code> in your pipeline, but you cannot use both. If you create a cross-region action in your pipeline, you must use <code>artifactStores</code>.</p> </note>
		 * Post /#X-Amz-Target=CodePipeline_20150709.CreatePipeline
		 * @return {CreatePipelineOutput} Success
		 */
		CreatePipeline(requestBody: CreatePipelineInput, headersHandler?: () => HttpHeaders): Observable<CreatePipelineOutput> {
			return this.http.post<CreatePipelineOutput>(this.baseUri + '/#X-Amz-Target=CodePipeline_20150709.CreatePipeline', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Marks a custom action as deleted. <code>PollForJobs</code> for the custom action fails after the action is marked for deletion. Used for custom actions only.</p> <important> <p>To re-create a custom action after it has been deleted you must use a string in the version field that has never been used before. This string can be an incremented version number, for example. To restore a deleted custom action, use a JSON file that is identical to the deleted action, including the original string in the version field.</p> </important>
		 * Post /#X-Amz-Target=CodePipeline_20150709.DeleteCustomActionType
		 * @return {void} Success
		 */
		DeleteCustomActionType(requestBody: DeleteCustomActionTypeInput, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '/#X-Amz-Target=CodePipeline_20150709.DeleteCustomActionType', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the specified pipeline.
		 * Post /#X-Amz-Target=CodePipeline_20150709.DeletePipeline
		 * @return {void} Success
		 */
		DeletePipeline(requestBody: DeletePipelineInput, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '/#X-Amz-Target=CodePipeline_20150709.DeletePipeline', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a previously created webhook by name. Deleting the webhook stops AWS CodePipeline from starting a pipeline every time an external event occurs. The API returns successfully when trying to delete a webhook that is already deleted. If a deleted webhook is re-created by calling PutWebhook with the same name, it will have a different URL.
		 * Post /#X-Amz-Target=CodePipeline_20150709.DeleteWebhook
		 * @return {DeleteWebhookOutput} Success
		 */
		DeleteWebhook(requestBody: DeleteWebhookInput, headersHandler?: () => HttpHeaders): Observable<DeleteWebhookOutput> {
			return this.http.post<DeleteWebhookOutput>(this.baseUri + '/#X-Amz-Target=CodePipeline_20150709.DeleteWebhook', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Removes the connection between the webhook that was created by CodePipeline and the external tool with events to be detected. Currently supported only for webhooks that target an action type of GitHub.
		 * Post /#X-Amz-Target=CodePipeline_20150709.DeregisterWebhookWithThirdParty
		 * @return {DeregisterWebhookWithThirdPartyOutput} Success
		 */
		DeregisterWebhookWithThirdParty(requestBody: DeregisterWebhookWithThirdPartyInput, headersHandler?: () => HttpHeaders): Observable<DeregisterWebhookWithThirdPartyOutput> {
			return this.http.post<DeregisterWebhookWithThirdPartyOutput>(this.baseUri + '/#X-Amz-Target=CodePipeline_20150709.DeregisterWebhookWithThirdParty', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Prevents artifacts in a pipeline from transitioning to the next stage in the pipeline.
		 * Post /#X-Amz-Target=CodePipeline_20150709.DisableStageTransition
		 * @return {void} Success
		 */
		DisableStageTransition(requestBody: DisableStageTransitionInput, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '/#X-Amz-Target=CodePipeline_20150709.DisableStageTransition', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Enables artifacts in a pipeline to transition to a stage in a pipeline.
		 * Post /#X-Amz-Target=CodePipeline_20150709.EnableStageTransition
		 * @return {void} Success
		 */
		EnableStageTransition(requestBody: EnableStageTransitionInput, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '/#X-Amz-Target=CodePipeline_20150709.EnableStageTransition', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns information about a job. Used for custom actions only.</p> <important> <p>When this API is called, AWS CodePipeline returns temporary credentials for the S3 bucket used to store artifacts for the pipeline, if the action requires access to that S3 bucket for input or output artifacts. This API also returns any secret values defined for the action.</p> </important>
		 * Post /#X-Amz-Target=CodePipeline_20150709.GetJobDetails
		 * @return {GetJobDetailsOutput} Success
		 */
		GetJobDetails(requestBody: GetJobDetailsInput, headersHandler?: () => HttpHeaders): Observable<GetJobDetailsOutput> {
			return this.http.post<GetJobDetailsOutput>(this.baseUri + '/#X-Amz-Target=CodePipeline_20150709.GetJobDetails', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Returns the metadata, structure, stages, and actions of a pipeline. Can be used to return the entire structure of a pipeline in JSON format, which can then be modified and used to update the pipeline structure with <a>UpdatePipeline</a>.
		 * Post /#X-Amz-Target=CodePipeline_20150709.GetPipeline
		 * @return {GetPipelineOutput} Success
		 */
		GetPipeline(requestBody: GetPipelineInput, headersHandler?: () => HttpHeaders): Observable<GetPipelineOutput> {
			return this.http.post<GetPipelineOutput>(this.baseUri + '/#X-Amz-Target=CodePipeline_20150709.GetPipeline', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Returns information about an execution of a pipeline, including details about artifacts, the pipeline execution ID, and the name, version, and status of the pipeline.
		 * Post /#X-Amz-Target=CodePipeline_20150709.GetPipelineExecution
		 * @return {GetPipelineExecutionOutput} Success
		 */
		GetPipelineExecution(requestBody: GetPipelineExecutionInput, headersHandler?: () => HttpHeaders): Observable<GetPipelineExecutionOutput> {
			return this.http.post<GetPipelineExecutionOutput>(this.baseUri + '/#X-Amz-Target=CodePipeline_20150709.GetPipelineExecution', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Returns information about the state of a pipeline, including the stages and actions.</p> <note> <p>Values returned in the <code>revisionId</code> and <code>revisionUrl</code> fields indicate the source revision information, such as the commit ID, for the current state.</p> </note>
		 * Post /#X-Amz-Target=CodePipeline_20150709.GetPipelineState
		 * @return {GetPipelineStateOutput} Success
		 */
		GetPipelineState(requestBody: GetPipelineStateInput, headersHandler?: () => HttpHeaders): Observable<GetPipelineStateOutput> {
			return this.http.post<GetPipelineStateOutput>(this.baseUri + '/#X-Amz-Target=CodePipeline_20150709.GetPipelineState', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Requests the details of a job for a third party action. Used for partner actions only.</p> <important> <p>When this API is called, AWS CodePipeline returns temporary credentials for the S3 bucket used to store artifacts for the pipeline, if the action requires access to that S3 bucket for input or output artifacts. This API also returns any secret values defined for the action.</p> </important>
		 * Post /#X-Amz-Target=CodePipeline_20150709.GetThirdPartyJobDetails
		 * @return {GetThirdPartyJobDetailsOutput} Success
		 */
		GetThirdPartyJobDetails(requestBody: GetThirdPartyJobDetailsInput, headersHandler?: () => HttpHeaders): Observable<GetThirdPartyJobDetailsOutput> {
			return this.http.post<GetThirdPartyJobDetailsOutput>(this.baseUri + '/#X-Amz-Target=CodePipeline_20150709.GetThirdPartyJobDetails', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lists the action executions that have occurred in a pipeline.
		 * Post /#X-Amz-Target=CodePipeline_20150709.ListActionExecutions
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListActionExecutionsOutput} Success
		 */
		ListActionExecutions(maxResults: string, nextToken: string, requestBody: ListActionExecutionsInput, headersHandler?: () => HttpHeaders): Observable<ListActionExecutionsOutput> {
			return this.http.post<ListActionExecutionsOutput>(this.baseUri + '/#X-Amz-Target=CodePipeline_20150709.ListActionExecutions?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Gets a summary of all AWS CodePipeline action types associated with your account.
		 * Post /#X-Amz-Target=CodePipeline_20150709.ListActionTypes
		 * @param {string} nextToken Pagination token
		 * @return {ListActionTypesOutput} Success
		 */
		ListActionTypes(nextToken: string, requestBody: ListActionTypesInput, headersHandler?: () => HttpHeaders): Observable<ListActionTypesOutput> {
			return this.http.post<ListActionTypesOutput>(this.baseUri + '/#X-Amz-Target=CodePipeline_20150709.ListActionTypes?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Gets a summary of the most recent executions for a pipeline.
		 * Post /#X-Amz-Target=CodePipeline_20150709.ListPipelineExecutions
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListPipelineExecutionsOutput} Success
		 */
		ListPipelineExecutions(maxResults: string, nextToken: string, requestBody: ListPipelineExecutionsInput, headersHandler?: () => HttpHeaders): Observable<ListPipelineExecutionsOutput> {
			return this.http.post<ListPipelineExecutionsOutput>(this.baseUri + '/#X-Amz-Target=CodePipeline_20150709.ListPipelineExecutions?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Gets a summary of all of the pipelines associated with your account.
		 * Post /#X-Amz-Target=CodePipeline_20150709.ListPipelines
		 * @param {string} nextToken Pagination token
		 * @return {ListPipelinesOutput} Success
		 */
		ListPipelines(nextToken: string, requestBody: ListPipelinesInput, headersHandler?: () => HttpHeaders): Observable<ListPipelinesOutput> {
			return this.http.post<ListPipelinesOutput>(this.baseUri + '/#X-Amz-Target=CodePipeline_20150709.ListPipelines?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Gets the set of key-value pairs (metadata) that are used to manage the resource.
		 * Post /#X-Amz-Target=CodePipeline_20150709.ListTagsForResource
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListTagsForResourceOutput} Success
		 */
		ListTagsForResource(maxResults: string, nextToken: string, requestBody: ListTagsForResourceInput, headersHandler?: () => HttpHeaders): Observable<ListTagsForResourceOutput> {
			return this.http.post<ListTagsForResourceOutput>(this.baseUri + '/#X-Amz-Target=CodePipeline_20150709.ListTagsForResource?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Gets a listing of all the webhooks in this AWS Region for this account. The output lists all webhooks and includes the webhook URL and ARN and the configuration for each webhook.
		 * Post /#X-Amz-Target=CodePipeline_20150709.ListWebhooks
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListWebhooksOutput} Success
		 */
		ListWebhooks(MaxResults: string, NextToken: string, requestBody: ListWebhooksInput, headersHandler?: () => HttpHeaders): Observable<ListWebhooksOutput> {
			return this.http.post<ListWebhooksOutput>(this.baseUri + '/#X-Amz-Target=CodePipeline_20150709.ListWebhooks?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Returns information about any jobs for AWS CodePipeline to act on. <code>PollForJobs</code> is valid only for action types with "Custom" in the owner field. If the action type contains "AWS" or "ThirdParty" in the owner field, the <code>PollForJobs</code> action returns an error.</p> <important> <p>When this API is called, AWS CodePipeline returns temporary credentials for the S3 bucket used to store artifacts for the pipeline, if the action requires access to that S3 bucket for input or output artifacts. This API also returns any secret values defined for the action.</p> </important>
		 * Post /#X-Amz-Target=CodePipeline_20150709.PollForJobs
		 * @return {PollForJobsOutput} Success
		 */
		PollForJobs(requestBody: PollForJobsInput, headersHandler?: () => HttpHeaders): Observable<PollForJobsOutput> {
			return this.http.post<PollForJobsOutput>(this.baseUri + '/#X-Amz-Target=CodePipeline_20150709.PollForJobs', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Determines whether there are any third party jobs for a job worker to act on. Used for partner actions only.</p> <important> <p>When this API is called, AWS CodePipeline returns temporary credentials for the S3 bucket used to store artifacts for the pipeline, if the action requires access to that S3 bucket for input or output artifacts.</p> </important>
		 * Post /#X-Amz-Target=CodePipeline_20150709.PollForThirdPartyJobs
		 * @return {PollForThirdPartyJobsOutput} Success
		 */
		PollForThirdPartyJobs(requestBody: PollForThirdPartyJobsInput, headersHandler?: () => HttpHeaders): Observable<PollForThirdPartyJobsOutput> {
			return this.http.post<PollForThirdPartyJobsOutput>(this.baseUri + '/#X-Amz-Target=CodePipeline_20150709.PollForThirdPartyJobs', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Provides information to AWS CodePipeline about new revisions to a source.
		 * Post /#X-Amz-Target=CodePipeline_20150709.PutActionRevision
		 * @return {PutActionRevisionOutput} Success
		 */
		PutActionRevision(requestBody: PutActionRevisionInput, headersHandler?: () => HttpHeaders): Observable<PutActionRevisionOutput> {
			return this.http.post<PutActionRevisionOutput>(this.baseUri + '/#X-Amz-Target=CodePipeline_20150709.PutActionRevision', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Provides the response to a manual approval request to AWS CodePipeline. Valid responses include Approved and Rejected.
		 * Post /#X-Amz-Target=CodePipeline_20150709.PutApprovalResult
		 * @return {PutApprovalResultOutput} Success
		 */
		PutApprovalResult(requestBody: PutApprovalResultInput, headersHandler?: () => HttpHeaders): Observable<PutApprovalResultOutput> {
			return this.http.post<PutApprovalResultOutput>(this.baseUri + '/#X-Amz-Target=CodePipeline_20150709.PutApprovalResult', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Represents the failure of a job as returned to the pipeline by a job worker. Used for custom actions only.
		 * Post /#X-Amz-Target=CodePipeline_20150709.PutJobFailureResult
		 * @return {void} Success
		 */
		PutJobFailureResult(requestBody: PutJobFailureResultInput, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '/#X-Amz-Target=CodePipeline_20150709.PutJobFailureResult', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Represents the success of a job as returned to the pipeline by a job worker. Used for custom actions only.
		 * Post /#X-Amz-Target=CodePipeline_20150709.PutJobSuccessResult
		 * @return {void} Success
		 */
		PutJobSuccessResult(requestBody: PutJobSuccessResultInput, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '/#X-Amz-Target=CodePipeline_20150709.PutJobSuccessResult', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Represents the failure of a third party job as returned to the pipeline by a job worker. Used for partner actions only.
		 * Post /#X-Amz-Target=CodePipeline_20150709.PutThirdPartyJobFailureResult
		 * @return {void} Success
		 */
		PutThirdPartyJobFailureResult(requestBody: PutThirdPartyJobFailureResultInput, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '/#X-Amz-Target=CodePipeline_20150709.PutThirdPartyJobFailureResult', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Represents the success of a third party job as returned to the pipeline by a job worker. Used for partner actions only.
		 * Post /#X-Amz-Target=CodePipeline_20150709.PutThirdPartyJobSuccessResult
		 * @return {void} Success
		 */
		PutThirdPartyJobSuccessResult(requestBody: PutThirdPartyJobSuccessResultInput, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '/#X-Amz-Target=CodePipeline_20150709.PutThirdPartyJobSuccessResult', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Defines a webhook and returns a unique webhook URL generated by CodePipeline. This URL can be supplied to third party source hosting providers to call every time there's a code change. When CodePipeline receives a POST request on this URL, the pipeline defined in the webhook is started as long as the POST request satisfied the authentication and filtering requirements supplied when defining the webhook. RegisterWebhookWithThirdParty and DeregisterWebhookWithThirdParty APIs can be used to automatically configure supported third parties to call the generated webhook URL.
		 * Post /#X-Amz-Target=CodePipeline_20150709.PutWebhook
		 * @return {PutWebhookOutput} Success
		 */
		PutWebhook(requestBody: PutWebhookInput, headersHandler?: () => HttpHeaders): Observable<PutWebhookOutput> {
			return this.http.post<PutWebhookOutput>(this.baseUri + '/#X-Amz-Target=CodePipeline_20150709.PutWebhook', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Configures a connection between the webhook that was created and the external tool with events to be detected.
		 * Post /#X-Amz-Target=CodePipeline_20150709.RegisterWebhookWithThirdParty
		 * @return {RegisterWebhookWithThirdPartyOutput} Success
		 */
		RegisterWebhookWithThirdParty(requestBody: RegisterWebhookWithThirdPartyInput, headersHandler?: () => HttpHeaders): Observable<RegisterWebhookWithThirdPartyOutput> {
			return this.http.post<RegisterWebhookWithThirdPartyOutput>(this.baseUri + '/#X-Amz-Target=CodePipeline_20150709.RegisterWebhookWithThirdParty', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Resumes the pipeline execution by retrying the last failed actions in a stage. You can retry a stage immediately if any of the actions in the stage fail. When you retry, all actions that are still in progress continue working, and failed actions are triggered again.
		 * Post /#X-Amz-Target=CodePipeline_20150709.RetryStageExecution
		 * @return {RetryStageExecutionOutput} Success
		 */
		RetryStageExecution(requestBody: RetryStageExecutionInput, headersHandler?: () => HttpHeaders): Observable<RetryStageExecutionOutput> {
			return this.http.post<RetryStageExecutionOutput>(this.baseUri + '/#X-Amz-Target=CodePipeline_20150709.RetryStageExecution', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Starts the specified pipeline. Specifically, it begins processing the latest commit to the source location specified as part of the pipeline.
		 * Post /#X-Amz-Target=CodePipeline_20150709.StartPipelineExecution
		 * @return {StartPipelineExecutionOutput} Success
		 */
		StartPipelineExecution(requestBody: StartPipelineExecutionInput, headersHandler?: () => HttpHeaders): Observable<StartPipelineExecutionOutput> {
			return this.http.post<StartPipelineExecutionOutput>(this.baseUri + '/#X-Amz-Target=CodePipeline_20150709.StartPipelineExecution', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Stops the specified pipeline execution. You choose to either stop the pipeline execution by completing in-progress actions without starting subsequent actions, or by abandoning in-progress actions. While completing or abandoning in-progress actions, the pipeline execution is in a <code>Stopping</code> state. After all in-progress actions are completed or abandoned, the pipeline execution is in a <code>Stopped</code> state.
		 * Post /#X-Amz-Target=CodePipeline_20150709.StopPipelineExecution
		 * @return {StopPipelineExecutionOutput} Success
		 */
		StopPipelineExecution(requestBody: StopPipelineExecutionInput, headersHandler?: () => HttpHeaders): Observable<StopPipelineExecutionOutput> {
			return this.http.post<StopPipelineExecutionOutput>(this.baseUri + '/#X-Amz-Target=CodePipeline_20150709.StopPipelineExecution', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Adds to or modifies the tags of the given resource. Tags are metadata that can be used to manage a resource.
		 * Post /#X-Amz-Target=CodePipeline_20150709.TagResource
		 * @return {TagResourceOutput} Success
		 */
		TagResource(requestBody: TagResourceInput, headersHandler?: () => HttpHeaders): Observable<TagResourceOutput> {
			return this.http.post<TagResourceOutput>(this.baseUri + '/#X-Amz-Target=CodePipeline_20150709.TagResource', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Removes tags from an AWS resource.
		 * Post /#X-Amz-Target=CodePipeline_20150709.UntagResource
		 * @return {UntagResourceOutput} Success
		 */
		UntagResource(requestBody: UntagResourceInput, headersHandler?: () => HttpHeaders): Observable<UntagResourceOutput> {
			return this.http.post<UntagResourceOutput>(this.baseUri + '/#X-Amz-Target=CodePipeline_20150709.UntagResource', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Updates a specified pipeline with edits or changes to its structure. Use a JSON file with the pipeline structure and <code>UpdatePipeline</code> to provide the full structure of the pipeline. Updating the pipeline increases the version number of the pipeline by 1.
		 * Post /#X-Amz-Target=CodePipeline_20150709.UpdatePipeline
		 * @return {UpdatePipelineOutput} Success
		 */
		UpdatePipeline(requestBody: UpdatePipelineInput, headersHandler?: () => HttpHeaders): Observable<UpdatePipelineOutput> {
			return this.http.post<UpdatePipelineOutput>(this.baseUri + '/#X-Amz-Target=CodePipeline_20150709.UpdatePipeline', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}
	}

}

