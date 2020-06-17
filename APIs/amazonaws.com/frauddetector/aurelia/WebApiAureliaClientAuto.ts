import {HttpClient} from 'aurelia-fetch-client';
import {autoinject} from 'aurelia-framework';
export namespace My_Demo_Client {
	export interface BatchCreateVariableResult {
		errors?: Array<BatchCreateVariableError>;
	}

	export interface BatchCreateVariableRequest {
		variableEntries: Array<VariableEntry>;
	}

	export interface BatchGetVariableResult {
		variables?: Array<Variable>;
		errors?: Array<BatchGetVariableError>;
	}

	export interface BatchGetVariableRequest {
		names: Array<string>;
	}

	export interface CreateDetectorVersionResult {
		detectorId?: string;
		detectorVersionId?: string;
		status?: CreateDetectorVersionResultStatus;
	}

	export enum CreateDetectorVersionResultStatus { DRAFT = 0, ACTIVE = 1, INACTIVE = 2 }

	export interface CreateDetectorVersionRequest {
		detectorId: string;
		description?: string;
		externalModelEndpoints?: Array<string>;
		rules: Array<Rule>;
		modelVersions?: Array<ModelVersion>;
		ruleExecutionMode?: CreateDetectorVersionRequestRuleExecutionMode;
	}

	export enum CreateDetectorVersionRequestRuleExecutionMode { ALL_MATCHED = 0, FIRST_MATCHED = 1 }

	export interface CreateModelVersionResult {
		modelId?: string;
		modelType?: CreateModelVersionResultModelType;
		modelVersionNumber?: string;
		status?: string;
	}

	export enum CreateModelVersionResultModelType { ONLINE_FRAUD_INSIGHTS = 0 }

	export interface CreateModelVersionRequest {
		modelId: string;
		modelType: CreateModelVersionRequestModelType;
		description?: string;
	}

	export enum CreateModelVersionRequestModelType { ONLINE_FRAUD_INSIGHTS = 0 }

	export interface CreateRuleResult {

		/**A rule. */
		rule?: Rule;
	}

	export interface CreateRuleRequest {
		ruleId: string;
		detectorId: string;
		description?: string;
		expression: string;
		language: CreateRuleRequestLanguage;
		outcomes: Array<string>;
	}

	export enum CreateRuleRequestLanguage { DETECTORPL = 0 }

	export interface CreateVariableRequest {
		name: string;
		dataType: CreateVariableRequestDataType;
		dataSource: CreateVariableRequestDataSource;
		defaultValue: string;
		description?: string;
		variableType?: string;
	}

	export enum CreateVariableRequestDataType { STRING = 0, INTEGER = 1, FLOAT = 2, BOOLEAN = 3 }

	export enum CreateVariableRequestDataSource { EVENT = 0, MODEL_SCORE = 1, EXTERNAL_MODEL_SCORE = 2 }

	export interface DeleteDetectorRequest {
		detectorId: string;
	}

	export interface DeleteDetectorVersionRequest {
		detectorId: string;
		detectorVersionId: string;
	}

	export interface DeleteEventRequest {
		eventId: string;
	}

	export interface DeleteRuleVersionRequest {
		detectorId: string;
		ruleId: string;
		ruleVersion: string;
	}

	export interface DescribeDetectorResult {
		detectorId?: string;
		detectorVersionSummaries?: Array<DetectorVersionSummary>;
		nextToken?: string;
	}

	export interface DescribeDetectorRequest {
		detectorId: string;
		nextToken?: string;
		maxResults?: number;
	}

	export interface DescribeModelVersionsResult {
		modelVersionDetails?: Array<ModelVersionDetail>;
		nextToken?: string;
	}

	export interface DescribeModelVersionsRequest {
		modelId?: string;
		modelVersionNumber?: string;
		modelType?: DescribeModelVersionsRequestModelType;
		nextToken?: string;
		maxResults?: number;
	}

	export enum DescribeModelVersionsRequestModelType { ONLINE_FRAUD_INSIGHTS = 0 }

	export interface GetDetectorVersionResult {
		detectorId?: string;
		detectorVersionId?: string;
		description?: string;
		externalModelEndpoints?: Array<string>;
		modelVersions?: Array<ModelVersion>;
		rules?: Array<Rule>;
		status?: GetDetectorVersionResultStatus;
		lastUpdatedTime?: string;
		createdTime?: string;
		ruleExecutionMode?: GetDetectorVersionResultRuleExecutionMode;
	}

	export enum GetDetectorVersionResultStatus { DRAFT = 0, ACTIVE = 1, INACTIVE = 2 }

	export enum GetDetectorVersionResultRuleExecutionMode { ALL_MATCHED = 0, FIRST_MATCHED = 1 }

	export interface GetDetectorVersionRequest {
		detectorId: string;
		detectorVersionId: string;
	}

	export interface GetDetectorsResult {
		detectors?: Array<Detector>;
		nextToken?: string;
	}

	export interface GetDetectorsRequest {
		detectorId?: string;
		nextToken?: string;
		maxResults?: number;
	}

	export interface GetExternalModelsResult {
		externalModels?: Array<ExternalModel>;
		nextToken?: string;
	}

	export interface GetExternalModelsRequest {
		modelEndpoint?: string;
		nextToken?: string;
		maxResults?: number;
	}

	export interface GetModelVersionResult {
		modelId?: string;
		modelType?: GetModelVersionResultModelType;
		modelVersionNumber?: string;
		description?: string;
		status?: string;
	}

	export enum GetModelVersionResultModelType { ONLINE_FRAUD_INSIGHTS = 0 }

	export interface GetModelVersionRequest {
		modelId: string;
		modelType: GetModelVersionRequestModelType;
		modelVersionNumber: string;
	}

	export enum GetModelVersionRequestModelType { ONLINE_FRAUD_INSIGHTS = 0 }

	export interface GetModelsResult {
		nextToken?: string;
		models?: Array<Model>;
	}

	export interface GetModelsRequest {
		modelType?: GetModelsRequestModelType;
		modelId?: string;
		nextToken?: string;
		maxResults?: number;
	}

	export enum GetModelsRequestModelType { ONLINE_FRAUD_INSIGHTS = 0 }

	export interface GetOutcomesResult {
		outcomes?: Array<Outcome>;
		nextToken?: string;
	}

	export interface GetOutcomesRequest {
		name?: string;
		nextToken?: string;
		maxResults?: number;
	}

	export interface GetPredictionResult {
		outcomes?: Array<string>;
		modelScores?: Array<ModelScores>;
		ruleResults?: Array<RuleResult>;
	}

	export interface GetPredictionRequest {
		detectorId: string;
		detectorVersionId?: string;
		eventId: string;
		eventAttributes?: EventAttributeMap;
		externalModelEndpointDataBlobs?: ExternalModelEndpointDataBlobMap;
	}

	export interface GetRulesResult {
		ruleDetails?: Array<RuleDetail>;
		nextToken?: string;
	}

	export interface GetRulesRequest {
		ruleId?: string;
		detectorId: string;
		ruleVersion?: string;
		nextToken?: string;
		maxResults?: number;
	}

	export interface GetVariablesResult {
		variables?: Array<Variable>;
		nextToken?: string;
	}

	export interface GetVariablesRequest {
		name?: string;
		nextToken?: string;
		maxResults?: number;
	}

	export interface PutDetectorRequest {
		detectorId: string;
		description?: string;
	}

	export interface PutExternalModelRequest {
		modelEndpoint: string;
		modelSource: PutExternalModelRequestModelSource;

		/**The role used to invoke external model endpoints. */
		role: Role;

		/**The model input configuration. */
		inputConfiguration: ModelInputConfiguration;

		/**Provides the model output configuration. */
		outputConfiguration: ModelOutputConfiguration;
		modelEndpointStatus: PutExternalModelRequestModelEndpointStatus;
	}

	export enum PutExternalModelRequestModelSource { SAGEMAKER = 0 }

	export enum PutExternalModelRequestModelEndpointStatus { ASSOCIATED = 0, DISSOCIATED = 1 }

	export interface PutModelRequest {
		modelId: string;
		modelType: PutModelRequestModelType;
		description?: string;

		/**The training data source. */
		trainingDataSource: TrainingDataSource;
		modelVariables: Array<ModelVariable>;

		/**The label schema. */
		labelSchema: LabelSchema;
	}

	export enum PutModelRequestModelType { ONLINE_FRAUD_INSIGHTS = 0 }

	export interface PutOutcomeRequest {
		name: string;
		description?: string;
	}

	export interface UpdateDetectorVersionRequest {
		detectorId: string;
		detectorVersionId: string;
		externalModelEndpoints: Array<string>;
		rules: Array<Rule>;
		description?: string;
		modelVersions?: Array<ModelVersion>;
		ruleExecutionMode?: UpdateDetectorVersionRequestRuleExecutionMode;
	}

	export enum UpdateDetectorVersionRequestRuleExecutionMode { ALL_MATCHED = 0, FIRST_MATCHED = 1 }

	export interface UpdateDetectorVersionMetadataRequest {
		detectorId: string;
		detectorVersionId: string;
		description: string;
	}

	export interface UpdateDetectorVersionStatusRequest {
		detectorId: string;
		detectorVersionId: string;
		status: UpdateDetectorVersionStatusRequestStatus;
	}

	export enum UpdateDetectorVersionStatusRequestStatus { DRAFT = 0, ACTIVE = 1, INACTIVE = 2 }

	export interface UpdateModelVersionRequest {
		modelId: string;
		modelType: UpdateModelVersionRequestModelType;
		modelVersionNumber: string;
		description: string;
		status: UpdateModelVersionRequestStatus;
	}

	export enum UpdateModelVersionRequestModelType { ONLINE_FRAUD_INSIGHTS = 0 }

	export enum UpdateModelVersionRequestStatus { TRAINING_IN_PROGRESS = 0, TRAINING_COMPLETE = 1, ACTIVATE_REQUESTED = 2, ACTIVATE_IN_PROGRESS = 3, ACTIVE = 4, INACTIVATE_IN_PROGRESS = 5, INACTIVE = 6, ERROR = 7 }

	export interface UpdateRuleMetadataRequest {

		/**A rule. */
		rule: Rule;
		description: string;
	}

	export interface UpdateRuleVersionResult {

		/**A rule. */
		rule?: Rule;
	}

	export interface UpdateRuleVersionRequest {

		/**A rule. */
		rule: Rule;
		description?: string;
		expression: string;
		language: UpdateRuleVersionRequestLanguage;
		outcomes: Array<string>;
	}

	export enum UpdateRuleVersionRequestLanguage { DETECTORPL = 0 }

	export interface UpdateVariableRequest {
		name: string;
		defaultValue?: string;
		description?: string;
		variableType?: string;
	}


	/**Provides the error of the batch create variable API. */
	export interface BatchCreateVariableError {
		name?: string;
		code?: number;
		message?: string;
	}


	/**Provides the error of the batch get variable API. */
	export interface BatchGetVariableError {
		name?: string;
		code?: number;
		message?: string;
	}

	export enum RuleExecutionMode { ALL_MATCHED = 0, FIRST_MATCHED = 1 }

	export enum DetectorVersionStatus { DRAFT = 0, ACTIVE = 1, INACTIVE = 2 }

	export enum ModelTypeEnum { ONLINE_FRAUD_INSIGHTS = 0 }

	export enum Language { DETECTORPL = 0 }


	/**A rule. */
	export interface Rule {
		detectorId: string;
		ruleId: string;
		ruleVersion: string;
	}

	export enum DataType { STRING = 0, INTEGER = 1, FLOAT = 2, BOOLEAN = 3 }

	export enum DataSource { EVENT = 0, MODEL_SCORE = 1, EXTERNAL_MODEL_SCORE = 2 }


	/**The detector. */
	export interface Detector {
		detectorId?: string;
		description?: string;
		lastUpdatedTime?: string;
		createdTime?: string;
	}


	/**The summary of the detector version. */
	export interface DetectorVersionSummary {
		detectorVersionId?: string;
		status?: DetectorVersionSummaryStatus;
		description?: string;
		lastUpdatedTime?: string;
	}

	export enum DetectorVersionSummaryStatus { DRAFT = 0, ACTIVE = 1, INACTIVE = 2 }

	export enum ModelSource { SAGEMAKER = 0 }


	/**The role used to invoke external model endpoints. */
	export interface Role {
		arn: string;
		name: string;
	}


	/**The model input configuration. */
	export interface ModelInputConfiguration {
		format?: ModelInputConfigurationFormat;
		isOpaque: boolean;
		jsonInputTemplate?: string;
		csvInputTemplate?: string;
	}

	export enum ModelInputConfigurationFormat { TEXT_CSV = 0, APPLICATION_JSON = 1 }


	/**Provides the model output configuration. */
	export interface ModelOutputConfiguration {
		format: ModelOutputConfigurationFormat;
		jsonKeyToVariableMap?: JsonKeyToVariableMap;
		csvIndexToVariableMap?: CsvIndexToVariableMap;
	}

	export enum ModelOutputConfigurationFormat { TEXT_CSV = 0, APPLICATION_JSONLINES = 1 }

	export enum ModelEndpointStatus { ASSOCIATED = 0, DISSOCIATED = 1 }


	/**The Amazon SageMaker model. */
	export interface ExternalModel {
		modelEndpoint?: string;
		modelSource?: ExternalModelModelSource;

		/**The role used to invoke external model endpoints. */
		role?: Role;

		/**The model input configuration. */
		inputConfiguration?: ModelInputConfiguration;

		/**Provides the model output configuration. */
		outputConfiguration?: ModelOutputConfiguration;
		modelEndpointStatus?: ExternalModelModelEndpointStatus;
		lastUpdatedTime?: string;
		createdTime?: string;
	}

	export enum ExternalModelModelSource { SAGEMAKER = 0 }

	export enum ExternalModelModelEndpointStatus { ASSOCIATED = 0, DISSOCIATED = 1 }


	/**A pre-formed Amazon SageMaker model input you can include if your detector version includes an imported Amazon SageMaker model endpoint with pass-through input configuration. */
	export interface ModelEndpointDataBlob {
		byteBuffer?: string;
		contentType?: string;
	}


	/**The label schema. */
	export interface LabelSchema {
		labelKey: string;
		labelMapper: LabelMapper;
	}


	/**The fraud prediction scores. */
	export interface ModelScores {

		/**The model version. */
		modelVersion?: ModelVersion;
		scores?: ModelPredictionMap;
	}


	/**The model version. */
	export interface ModelVersion {
		modelId: string;
		modelType: ModelVersionModelType;
		modelVersionNumber: string;
	}

	export enum ModelVersionModelType { ONLINE_FRAUD_INSIGHTS = 0 }


	/**The rule results. */
	export interface RuleResult {
		ruleId?: string;
		outcomes?: Array<string>;
	}


	/**The training data source. */
	export interface TrainingDataSource {
		dataLocation: string;
		dataAccessRoleArn: string;
	}


	/**The model. */
	export interface Model {
		modelId?: string;
		modelType?: ModelModelType;
		description?: string;

		/**The training data source. */
		trainingDataSource?: TrainingDataSource;
		modelVariables?: Array<ModelVariable>;

		/**The label schema. */
		labelSchema?: LabelSchema;
		lastUpdatedTime?: string;
		createdTime?: string;
	}

	export enum ModelModelType { ONLINE_FRAUD_INSIGHTS = 0 }

	export enum ModelInputDataFormat { TEXT_CSV = 0, APPLICATION_JSON = 1 }

	export enum ModelOutputDataFormat { TEXT_CSV = 0, APPLICATION_JSONLINES = 1 }


	/**The model variable.&gt; */
	export interface ModelVariable {
		name: string;
		index?: number;
	}


	/**Provides the model version details.  */
	export interface ModelVersionDetail {
		modelId?: string;
		modelType?: ModelVersionDetailModelType;
		modelVersionNumber?: string;
		description?: string;
		status?: string;

		/**The training data source. */
		trainingDataSource?: TrainingDataSource;
		modelVariables?: Array<ModelVariable>;

		/**The label schema. */
		labelSchema?: LabelSchema;
		validationMetrics?: MetricsMap;
		trainingMetrics?: MetricsMap;
		lastUpdatedTime?: string;
		createdTime?: string;
	}

	export enum ModelVersionDetailModelType { ONLINE_FRAUD_INSIGHTS = 0 }

	export enum ModelVersionStatus { TRAINING_IN_PROGRESS = 0, TRAINING_COMPLETE = 1, ACTIVATE_REQUESTED = 2, ACTIVATE_IN_PROGRESS = 3, ACTIVE = 4, INACTIVATE_IN_PROGRESS = 5, INACTIVE = 6, ERROR = 7 }


	/**The outcome. */
	export interface Outcome {
		name?: string;
		description?: string;
		lastUpdatedTime?: string;
		createdTime?: string;
	}


	/**The details of the rule. */
	export interface RuleDetail {
		ruleId?: string;
		description?: string;
		detectorId?: string;
		ruleVersion?: string;
		expression?: string;
		language?: RuleDetailLanguage;
		outcomes?: Array<string>;
		lastUpdatedTime?: string;
		createdTime?: string;
	}

	export enum RuleDetailLanguage { DETECTORPL = 0 }


	/**The variable. */
	export interface Variable {
		name?: string;
		dataType?: VariableDataType;
		dataSource?: VariableDataSource;
		defaultValue?: string;
		description?: string;
		variableType?: string;
		lastUpdatedTime?: string;
		createdTime?: string;
	}

	export enum VariableDataType { STRING = 0, INTEGER = 1, FLOAT = 2, BOOLEAN = 3 }

	export enum VariableDataSource { EVENT = 0, MODEL_SCORE = 1, EXTERNAL_MODEL_SCORE = 2 }


	/**The variable entry in a list. */
	export interface VariableEntry {
		name?: string;
		dataType?: string;
		dataSource?: string;
		defaultValue?: string;
		description?: string;
		variableType?: string;
	}

	@autoinject()
	export class DemoClient {
		constructor(private http: HttpClient) {
		}

		/**
		 * Creates a batch of variables.
		 * Post /#X-Amz-Target=AWSHawksNestServiceFacade.BatchCreateVariable
		 * @return {BatchCreateVariableResult} Success
		 */
		BatchCreateVariable(requestBody: BatchCreateVariableRequest, headersHandler?: () => {[header: string]: string}): Promise<BatchCreateVariableResult> {
			return this.http.post('/#X-Amz-Target=AWSHawksNestServiceFacade.BatchCreateVariable', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Gets a batch of variables.
		 * Post /#X-Amz-Target=AWSHawksNestServiceFacade.BatchGetVariable
		 * @return {BatchGetVariableResult} Success
		 */
		BatchGetVariable(requestBody: BatchGetVariableRequest, headersHandler?: () => {[header: string]: string}): Promise<BatchGetVariableResult> {
			return this.http.post('/#X-Amz-Target=AWSHawksNestServiceFacade.BatchGetVariable', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Creates a detector version. The detector version starts in a <code>DRAFT</code> status.
		 * Post /#X-Amz-Target=AWSHawksNestServiceFacade.CreateDetectorVersion
		 * @return {CreateDetectorVersionResult} Success
		 */
		CreateDetectorVersion(requestBody: CreateDetectorVersionRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateDetectorVersionResult> {
			return this.http.post('/#X-Amz-Target=AWSHawksNestServiceFacade.CreateDetectorVersion', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Creates a version of the model using the specified model type.
		 * Post /#X-Amz-Target=AWSHawksNestServiceFacade.CreateModelVersion
		 * @return {CreateModelVersionResult} Success
		 */
		CreateModelVersion(requestBody: CreateModelVersionRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateModelVersionResult> {
			return this.http.post('/#X-Amz-Target=AWSHawksNestServiceFacade.CreateModelVersion', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Creates a rule for use with the specified detector.
		 * Post /#X-Amz-Target=AWSHawksNestServiceFacade.CreateRule
		 * @return {CreateRuleResult} Success
		 */
		CreateRule(requestBody: CreateRuleRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateRuleResult> {
			return this.http.post('/#X-Amz-Target=AWSHawksNestServiceFacade.CreateRule', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Creates a variable.
		 * Post /#X-Amz-Target=AWSHawksNestServiceFacade.CreateVariable
		 * @return {CreateVariableResult} Success
		 */
		CreateVariable(requestBody: CreateVariableRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateVariableResult> {
			return this.http.post('/#X-Amz-Target=AWSHawksNestServiceFacade.CreateVariable', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Deletes the detector. Before deleting a detector, you must first delete all detector versions and rule versions associated with the detector.
		 * Post /#X-Amz-Target=AWSHawksNestServiceFacade.DeleteDetector
		 * @return {DeleteDetectorResult} Success
		 */
		DeleteDetector(requestBody: DeleteDetectorRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteDetectorResult> {
			return this.http.post('/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteDetector', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Deletes the detector version. You cannot delete detector versions that are in <code>ACTIVE</code> status.
		 * Post /#X-Amz-Target=AWSHawksNestServiceFacade.DeleteDetectorVersion
		 * @return {DeleteDetectorVersionResult} Success
		 */
		DeleteDetectorVersion(requestBody: DeleteDetectorVersionRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteDetectorVersionResult> {
			return this.http.post('/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteDetectorVersion', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Deletes the specified event.
		 * Post /#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEvent
		 * @return {DeleteEventResult} Success
		 */
		DeleteEvent(requestBody: DeleteEventRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteEventResult> {
			return this.http.post('/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEvent', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Deletes the rule version. You cannot delete a rule version if it is used by an <code>ACTIVE</code> or <code>INACTIVE</code> detector version.
		 * Post /#X-Amz-Target=AWSHawksNestServiceFacade.DeleteRuleVersion
		 * @return {DeleteRuleVersionResult} Success
		 */
		DeleteRuleVersion(requestBody: DeleteRuleVersionRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteRuleVersionResult> {
			return this.http.post('/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteRuleVersion', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Gets all versions for a specified detector.
		 * Post /#X-Amz-Target=AWSHawksNestServiceFacade.DescribeDetector
		 * @return {DescribeDetectorResult} Success
		 */
		DescribeDetector(requestBody: DescribeDetectorRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeDetectorResult> {
			return this.http.post('/#X-Amz-Target=AWSHawksNestServiceFacade.DescribeDetector', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Gets all of the model versions for the specified model type or for the specified model type and model ID. You can also get details for a single, specified model version.
		 * Post /#X-Amz-Target=AWSHawksNestServiceFacade.DescribeModelVersions
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeModelVersionsResult} Success
		 */
		DescribeModelVersions(maxResults: string, nextToken: string, requestBody: DescribeModelVersionsRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeModelVersionsResult> {
			return this.http.post('/#X-Amz-Target=AWSHawksNestServiceFacade.DescribeModelVersions?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Gets a particular detector version.
		 * Post /#X-Amz-Target=AWSHawksNestServiceFacade.GetDetectorVersion
		 * @return {GetDetectorVersionResult} Success
		 */
		GetDetectorVersion(requestBody: GetDetectorVersionRequest, headersHandler?: () => {[header: string]: string}): Promise<GetDetectorVersionResult> {
			return this.http.post('/#X-Amz-Target=AWSHawksNestServiceFacade.GetDetectorVersion', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Gets all of detectors. This is a paginated API. If you provide a null <code>maxSizePerPage</code>, this actions retrieves a maximum of 10 records per page. If you provide a <code>maxSizePerPage</code>, the value must be between 5 and 10. To get the next page results, provide the pagination token from the <code>GetEventTypesResponse</code> as part of your request. A null pagination token fetches the records from the beginning.
		 * Post /#X-Amz-Target=AWSHawksNestServiceFacade.GetDetectors
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetDetectorsResult} Success
		 */
		GetDetectors(maxResults: string, nextToken: string, requestBody: GetDetectorsRequest, headersHandler?: () => {[header: string]: string}): Promise<GetDetectorsResult> {
			return this.http.post('/#X-Amz-Target=AWSHawksNestServiceFacade.GetDetectors?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Gets the details for one or more Amazon SageMaker models that have been imported into the service. This is a paginated API. If you provide a null <code>maxSizePerPage</code>, this actions retrieves a maximum of 10 records per page. If you provide a <code>maxSizePerPage</code>, the value must be between 5 and 10. To get the next page results, provide the pagination token from the <code>GetExternalModelsResult</code> as part of your request. A null pagination token fetches the records from the beginning.
		 * Post /#X-Amz-Target=AWSHawksNestServiceFacade.GetExternalModels
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetExternalModelsResult} Success
		 */
		GetExternalModels(maxResults: string, nextToken: string, requestBody: GetExternalModelsRequest, headersHandler?: () => {[header: string]: string}): Promise<GetExternalModelsResult> {
			return this.http.post('/#X-Amz-Target=AWSHawksNestServiceFacade.GetExternalModels?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Gets a model version.
		 * Post /#X-Amz-Target=AWSHawksNestServiceFacade.GetModelVersion
		 * @return {GetModelVersionResult} Success
		 */
		GetModelVersion(requestBody: GetModelVersionRequest, headersHandler?: () => {[header: string]: string}): Promise<GetModelVersionResult> {
			return this.http.post('/#X-Amz-Target=AWSHawksNestServiceFacade.GetModelVersion', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Gets all of the models for the AWS account, or the specified model type, or gets a single model for the specified model type, model ID combination.
		 * Post /#X-Amz-Target=AWSHawksNestServiceFacade.GetModels
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetModelsResult} Success
		 */
		GetModels(maxResults: string, nextToken: string, requestBody: GetModelsRequest, headersHandler?: () => {[header: string]: string}): Promise<GetModelsResult> {
			return this.http.post('/#X-Amz-Target=AWSHawksNestServiceFacade.GetModels?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Gets one or more outcomes. This is a paginated API. If you provide a null <code>maxSizePerPage</code>, this actions retrieves a maximum of 10 records per page. If you provide a <code>maxSizePerPage</code>, the value must be between 50 and 100. To get the next page results, provide the pagination token from the <code>GetOutcomesResult</code> as part of your request. A null pagination token fetches the records from the beginning.
		 * Post /#X-Amz-Target=AWSHawksNestServiceFacade.GetOutcomes
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetOutcomesResult} Success
		 */
		GetOutcomes(maxResults: string, nextToken: string, requestBody: GetOutcomesRequest, headersHandler?: () => {[header: string]: string}): Promise<GetOutcomesResult> {
			return this.http.post('/#X-Amz-Target=AWSHawksNestServiceFacade.GetOutcomes?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Evaluates an event against a detector version. If a version ID is not provided, the detector’s (<code>ACTIVE</code>) version is used.
		 * Post /#X-Amz-Target=AWSHawksNestServiceFacade.GetPrediction
		 * @return {GetPredictionResult} Success
		 */
		GetPrediction(requestBody: GetPredictionRequest, headersHandler?: () => {[header: string]: string}): Promise<GetPredictionResult> {
			return this.http.post('/#X-Amz-Target=AWSHawksNestServiceFacade.GetPrediction', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Gets all rules available for the specified detector.
		 * Post /#X-Amz-Target=AWSHawksNestServiceFacade.GetRules
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetRulesResult} Success
		 */
		GetRules(maxResults: string, nextToken: string, requestBody: GetRulesRequest, headersHandler?: () => {[header: string]: string}): Promise<GetRulesResult> {
			return this.http.post('/#X-Amz-Target=AWSHawksNestServiceFacade.GetRules?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Gets all of the variables or the specific variable. This is a paginated API. Providing null <code>maxSizePerPage</code> results in retrieving maximum of 100 records per page. If you provide <code>maxSizePerPage</code> the value must be between 50 and 100. To get the next page result, a provide a pagination token from <code>GetVariablesResult</code> as part of your request. Null pagination token fetches the records from the beginning.
		 * Post /#X-Amz-Target=AWSHawksNestServiceFacade.GetVariables
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetVariablesResult} Success
		 */
		GetVariables(maxResults: string, nextToken: string, requestBody: GetVariablesRequest, headersHandler?: () => {[header: string]: string}): Promise<GetVariablesResult> {
			return this.http.post('/#X-Amz-Target=AWSHawksNestServiceFacade.GetVariables?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Creates or updates a detector.
		 * Post /#X-Amz-Target=AWSHawksNestServiceFacade.PutDetector
		 * @return {PutDetectorResult} Success
		 */
		PutDetector(requestBody: PutDetectorRequest, headersHandler?: () => {[header: string]: string}): Promise<PutDetectorResult> {
			return this.http.post('/#X-Amz-Target=AWSHawksNestServiceFacade.PutDetector', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Creates or updates an Amazon SageMaker model endpoint. You can also use this action to update the configuration of the model endpoint, including the IAM role and/or the mapped variables.
		 * Post /#X-Amz-Target=AWSHawksNestServiceFacade.PutExternalModel
		 * @return {PutExternalModelResult} Success
		 */
		PutExternalModel(requestBody: PutExternalModelRequest, headersHandler?: () => {[header: string]: string}): Promise<PutExternalModelResult> {
			return this.http.post('/#X-Amz-Target=AWSHawksNestServiceFacade.PutExternalModel', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Creates or updates a model.
		 * Post /#X-Amz-Target=AWSHawksNestServiceFacade.PutModel
		 * @return {PutModelResult} Success
		 */
		PutModel(requestBody: PutModelRequest, headersHandler?: () => {[header: string]: string}): Promise<PutModelResult> {
			return this.http.post('/#X-Amz-Target=AWSHawksNestServiceFacade.PutModel', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Creates or updates an outcome.
		 * Post /#X-Amz-Target=AWSHawksNestServiceFacade.PutOutcome
		 * @return {PutOutcomeResult} Success
		 */
		PutOutcome(requestBody: PutOutcomeRequest, headersHandler?: () => {[header: string]: string}): Promise<PutOutcomeResult> {
			return this.http.post('/#X-Amz-Target=AWSHawksNestServiceFacade.PutOutcome', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Updates a detector version. The detector version attributes that you can update include models, external model endpoints, rules, and description. You can only update a <code>DRAFT</code> detector version.
		 * Post /#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersion
		 * @return {UpdateDetectorVersionResult} Success
		 */
		UpdateDetectorVersion(requestBody: UpdateDetectorVersionRequest, headersHandler?: () => {[header: string]: string}): Promise<UpdateDetectorVersionResult> {
			return this.http.post('/#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersion', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Updates the detector version's description. You can update the metadata for any detector version (<code>DRAFT, ACTIVE,</code> or <code>INACTIVE</code>).
		 * Post /#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersionMetadata
		 * @return {UpdateDetectorVersionMetadataResult} Success
		 */
		UpdateDetectorVersionMetadata(requestBody: UpdateDetectorVersionMetadataRequest, headersHandler?: () => {[header: string]: string}): Promise<UpdateDetectorVersionMetadataResult> {
			return this.http.post('/#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersionMetadata', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Updates the detector version’s status. You can perform the following promotions or demotions using <code>UpdateDetectorVersionStatus</code>: <code>DRAFT</code> to <code>ACTIVE</code>, <code>ACTIVE</code> to <code>INACTIVE</code>, and <code>INACTIVE</code> to <code>ACTIVE</code>.
		 * Post /#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersionStatus
		 * @return {UpdateDetectorVersionStatusResult} Success
		 */
		UpdateDetectorVersionStatus(requestBody: UpdateDetectorVersionStatusRequest, headersHandler?: () => {[header: string]: string}): Promise<UpdateDetectorVersionStatusResult> {
			return this.http.post('/#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersionStatus', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * <p>Updates a model version. You can update the description and status attributes using this action. You can perform the following status updates: </p> <ol> <li> <p>Change the <code>TRAINING_COMPLETE</code> status to <code>ACTIVE</code> </p> </li> <li> <p>Change <code>ACTIVE</code> back to <code>TRAINING_COMPLETE</code> </p> </li> </ol>
		 * Post /#X-Amz-Target=AWSHawksNestServiceFacade.UpdateModelVersion
		 * @return {UpdateModelVersionResult} Success
		 */
		UpdateModelVersion(requestBody: UpdateModelVersionRequest, headersHandler?: () => {[header: string]: string}): Promise<UpdateModelVersionResult> {
			return this.http.post('/#X-Amz-Target=AWSHawksNestServiceFacade.UpdateModelVersion', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Updates a rule's metadata.
		 * Post /#X-Amz-Target=AWSHawksNestServiceFacade.UpdateRuleMetadata
		 * @return {UpdateRuleMetadataResult} Success
		 */
		UpdateRuleMetadata(requestBody: UpdateRuleMetadataRequest, headersHandler?: () => {[header: string]: string}): Promise<UpdateRuleMetadataResult> {
			return this.http.post('/#X-Amz-Target=AWSHawksNestServiceFacade.UpdateRuleMetadata', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Updates a rule version resulting in a new rule version.
		 * Post /#X-Amz-Target=AWSHawksNestServiceFacade.UpdateRuleVersion
		 * @return {UpdateRuleVersionResult} Success
		 */
		UpdateRuleVersion(requestBody: UpdateRuleVersionRequest, headersHandler?: () => {[header: string]: string}): Promise<UpdateRuleVersionResult> {
			return this.http.post('/#X-Amz-Target=AWSHawksNestServiceFacade.UpdateRuleVersion', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Updates a variable.
		 * Post /#X-Amz-Target=AWSHawksNestServiceFacade.UpdateVariable
		 * @return {UpdateVariableResult} Success
		 */
		UpdateVariable(requestBody: UpdateVariableRequest, headersHandler?: () => {[header: string]: string}): Promise<UpdateVariableResult> {
			return this.http.post('/#X-Amz-Target=AWSHawksNestServiceFacade.UpdateVariable', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}
	}

}

