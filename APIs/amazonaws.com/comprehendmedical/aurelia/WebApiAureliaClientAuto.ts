import {HttpClient} from 'aurelia-fetch-client';
import {autoinject} from 'aurelia-framework';
export namespace My_Demo_Client {
	export interface DescribeEntitiesDetectionV2JobResponse {

		/**Provides information about a detection job. */
		ComprehendMedicalAsyncJobProperties?: ComprehendMedicalAsyncJobProperties;
	}

	export interface DescribeEntitiesDetectionV2JobRequest {
		JobId: string;
	}

	export interface DescribeICD10CMInferenceJobResponse {

		/**Provides information about a detection job. */
		ComprehendMedicalAsyncJobProperties?: ComprehendMedicalAsyncJobProperties;
	}

	export interface DescribeICD10CMInferenceJobRequest {
		JobId: string;
	}

	export interface DescribePHIDetectionJobResponse {

		/**Provides information about a detection job. */
		ComprehendMedicalAsyncJobProperties?: ComprehendMedicalAsyncJobProperties;
	}

	export interface DescribePHIDetectionJobRequest {
		JobId: string;
	}

	export interface DescribeRxNormInferenceJobResponse {

		/**Provides information about a detection job. */
		ComprehendMedicalAsyncJobProperties?: ComprehendMedicalAsyncJobProperties;
	}

	export interface DescribeRxNormInferenceJobRequest {
		JobId: string;
	}

	export interface DetectEntitiesResponse {
		Entities: Array<Entity>;
		UnmappedAttributes?: Array<UnmappedAttribute>;
		PaginationToken?: string;
		ModelVersion: string;
	}

	export interface DetectEntitiesRequest {
		Text: string;
	}

	export interface DetectEntitiesV2Response {
		Entities: Array<Entity>;
		UnmappedAttributes?: Array<UnmappedAttribute>;
		PaginationToken?: string;
		ModelVersion: string;
	}

	export interface DetectEntitiesV2Request {
		Text: string;
	}

	export interface DetectPHIResponse {
		Entities: Array<Entity>;
		PaginationToken?: string;
		ModelVersion: string;
	}

	export interface DetectPHIRequest {
		Text: string;
	}

	export interface InferICD10CMResponse {
		Entities: Array<ICD10CMEntity>;
		PaginationToken?: string;
		ModelVersion?: string;
	}

	export interface InferICD10CMRequest {
		Text: string;
	}

	export interface InferRxNormResponse {
		Entities: Array<RxNormEntity>;
		PaginationToken?: string;
		ModelVersion?: string;
	}

	export interface InferRxNormRequest {
		Text: string;
	}

	export interface ListEntitiesDetectionV2JobsResponse {
		ComprehendMedicalAsyncJobPropertiesList?: Array<ComprehendMedicalAsyncJobProperties>;
		NextToken?: string;
	}

	export interface ListEntitiesDetectionV2JobsRequest {

		/**Provides information for filtering a list of detection jobs. */
		Filter?: ComprehendMedicalAsyncJobFilter;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListICD10CMInferenceJobsResponse {
		ComprehendMedicalAsyncJobPropertiesList?: Array<ComprehendMedicalAsyncJobProperties>;
		NextToken?: string;
	}

	export interface ListICD10CMInferenceJobsRequest {

		/**Provides information for filtering a list of detection jobs. */
		Filter?: ComprehendMedicalAsyncJobFilter;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListPHIDetectionJobsResponse {
		ComprehendMedicalAsyncJobPropertiesList?: Array<ComprehendMedicalAsyncJobProperties>;
		NextToken?: string;
	}

	export interface ListPHIDetectionJobsRequest {

		/**Provides information for filtering a list of detection jobs. */
		Filter?: ComprehendMedicalAsyncJobFilter;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListRxNormInferenceJobsResponse {
		ComprehendMedicalAsyncJobPropertiesList?: Array<ComprehendMedicalAsyncJobProperties>;
		NextToken?: string;
	}

	export interface ListRxNormInferenceJobsRequest {

		/**Provides information for filtering a list of detection jobs. */
		Filter?: ComprehendMedicalAsyncJobFilter;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface StartEntitiesDetectionV2JobResponse {
		JobId?: string;
	}

	export interface StartEntitiesDetectionV2JobRequest {

		/**The input properties for an entities detection job. This includes the name of the S3 bucket and the path to the files to be analyzed. See <a>batch-manifest</a> for more information. */
		InputDataConfig: InputDataConfig;

		/**The output properties for a detection job. */
		OutputDataConfig: OutputDataConfig;
		DataAccessRoleArn: string;
		JobName?: string;
		ClientRequestToken?: string;
		KMSKey?: string;
		LanguageCode: StartEntitiesDetectionV2JobRequestLanguageCode;
	}

	export enum StartEntitiesDetectionV2JobRequestLanguageCode { en = 0 }

	export interface StartICD10CMInferenceJobResponse {
		JobId?: string;
	}

	export interface StartICD10CMInferenceJobRequest {

		/**The input properties for an entities detection job. This includes the name of the S3 bucket and the path to the files to be analyzed. See <a>batch-manifest</a> for more information. */
		InputDataConfig: InputDataConfig;

		/**The output properties for a detection job. */
		OutputDataConfig: OutputDataConfig;
		DataAccessRoleArn: string;
		JobName?: string;
		ClientRequestToken?: string;
		KMSKey?: string;
		LanguageCode: StartICD10CMInferenceJobRequestLanguageCode;
	}

	export enum StartICD10CMInferenceJobRequestLanguageCode { en = 0 }

	export interface StartPHIDetectionJobResponse {
		JobId?: string;
	}

	export interface StartPHIDetectionJobRequest {

		/**The input properties for an entities detection job. This includes the name of the S3 bucket and the path to the files to be analyzed. See <a>batch-manifest</a> for more information. */
		InputDataConfig: InputDataConfig;

		/**The output properties for a detection job. */
		OutputDataConfig: OutputDataConfig;
		DataAccessRoleArn: string;
		JobName?: string;
		ClientRequestToken?: string;
		KMSKey?: string;
		LanguageCode: StartPHIDetectionJobRequestLanguageCode;
	}

	export enum StartPHIDetectionJobRequestLanguageCode { en = 0 }

	export interface StartRxNormInferenceJobResponse {
		JobId?: string;
	}

	export interface StartRxNormInferenceJobRequest {

		/**The input properties for an entities detection job. This includes the name of the S3 bucket and the path to the files to be analyzed. See <a>batch-manifest</a> for more information. */
		InputDataConfig: InputDataConfig;

		/**The output properties for a detection job. */
		OutputDataConfig: OutputDataConfig;
		DataAccessRoleArn: string;
		JobName?: string;
		ClientRequestToken?: string;
		KMSKey?: string;
		LanguageCode: StartRxNormInferenceJobRequestLanguageCode;
	}

	export enum StartRxNormInferenceJobRequestLanguageCode { en = 0 }

	export interface StopEntitiesDetectionV2JobResponse {
		JobId?: string;
	}

	export interface StopEntitiesDetectionV2JobRequest {
		JobId: string;
	}

	export interface StopICD10CMInferenceJobResponse {
		JobId?: string;
	}

	export interface StopICD10CMInferenceJobRequest {
		JobId: string;
	}

	export interface StopPHIDetectionJobResponse {
		JobId?: string;
	}

	export interface StopPHIDetectionJobRequest {
		JobId: string;
	}

	export interface StopRxNormInferenceJobResponse {
		JobId?: string;
	}

	export interface StopRxNormInferenceJobRequest {
		JobId: string;
	}

	export enum EntitySubType { NAME = 0, DOSAGE = 1, ROUTE_OR_MODE = 2, FORM = 3, FREQUENCY = 4, DURATION = 5, GENERIC_NAME = 6, BRAND_NAME = 7, STRENGTH = 8, RATE = 9, ACUITY = 10, TEST_NAME = 11, TEST_VALUE = 12, TEST_UNITS = 13, PROCEDURE_NAME = 14, TREATMENT_NAME = 15, DATE = 16, AGE = 17, CONTACT_POINT = 18, EMAIL = 19, IDENTIFIER = 20, URL = 21, ADDRESS = 22, PROFESSION = 23, SYSTEM_ORGAN_SITE = 24, DIRECTION = 25, QUALITY = 26, QUANTITY = 27, TIME_EXPRESSION = 28, TIME_TO_MEDICATION_NAME = 29, TIME_TO_DX_NAME = 30, TIME_TO_TEST_NAME = 31, TIME_TO_PROCEDURE_NAME = 32, TIME_TO_TREATMENT_NAME = 33 }

	export enum RelationshipType { EVERY = 0, WITH_DOSAGE = 1, ADMINISTERED_VIA = 2, FOR = 3, NEGATIVE = 4, OVERLAP = 5, DOSAGE = 6, ROUTE_OR_MODE = 7, FORM = 8, FREQUENCY = 9, DURATION = 10, STRENGTH = 11, RATE = 12, ACUITY = 13, TEST_VALUE = 14, TEST_UNITS = 15, DIRECTION = 16 }

	export enum EntityType { MEDICATION = 0, MEDICAL_CONDITION = 1, PROTECTED_HEALTH_INFORMATION = 2, TEST_TREATMENT_PROCEDURE = 3, ANATOMY = 4, TIME_EXPRESSION = 5 }


	/** An extracted segment of the text that is an attribute of an entity, or otherwise related to an entity, such as the dosage of a medication taken. It contains information about the attribute such as id, begin and end offset within the input text, and the segment of the input text.  */
	export interface Attribute {
		Type?: AttributeType;
		Score?: number;
		RelationshipScore?: number;
		RelationshipType?: AttributeRelationshipType;
		Id?: number;
		BeginOffset?: number;
		EndOffset?: number;
		Text?: string;
		Category?: AttributeCategory;
		Traits?: Array<Trait>;
	}

	export enum AttributeType { NAME = 0, DOSAGE = 1, ROUTE_OR_MODE = 2, FORM = 3, FREQUENCY = 4, DURATION = 5, GENERIC_NAME = 6, BRAND_NAME = 7, STRENGTH = 8, RATE = 9, ACUITY = 10, TEST_NAME = 11, TEST_VALUE = 12, TEST_UNITS = 13, PROCEDURE_NAME = 14, TREATMENT_NAME = 15, DATE = 16, AGE = 17, CONTACT_POINT = 18, EMAIL = 19, IDENTIFIER = 20, URL = 21, ADDRESS = 22, PROFESSION = 23, SYSTEM_ORGAN_SITE = 24, DIRECTION = 25, QUALITY = 26, QUANTITY = 27, TIME_EXPRESSION = 28, TIME_TO_MEDICATION_NAME = 29, TIME_TO_DX_NAME = 30, TIME_TO_TEST_NAME = 31, TIME_TO_PROCEDURE_NAME = 32, TIME_TO_TREATMENT_NAME = 33 }

	export enum AttributeRelationshipType { EVERY = 0, WITH_DOSAGE = 1, ADMINISTERED_VIA = 2, FOR = 3, NEGATIVE = 4, OVERLAP = 5, DOSAGE = 6, ROUTE_OR_MODE = 7, FORM = 8, FREQUENCY = 9, DURATION = 10, STRENGTH = 11, RATE = 12, ACUITY = 13, TEST_VALUE = 14, TEST_UNITS = 15, DIRECTION = 16 }

	export enum AttributeCategory { MEDICATION = 0, MEDICAL_CONDITION = 1, PROTECTED_HEALTH_INFORMATION = 2, TEST_TREATMENT_PROCEDURE = 3, ANATOMY = 4, TIME_EXPRESSION = 5 }

	export enum AttributeName { SIGN = 0, SYMPTOM = 1, DIAGNOSIS = 2, NEGATION = 3 }

	export enum JobStatus { SUBMITTED = 0, IN_PROGRESS = 1, COMPLETED = 2, PARTIAL_SUCCESS = 3, FAILED = 4, STOP_REQUESTED = 5, STOPPED = 6 }


	/**Provides information for filtering a list of detection jobs. */
	export interface ComprehendMedicalAsyncJobFilter {
		JobName?: string;
		JobStatus?: ComprehendMedicalAsyncJobFilterJobStatus;
		SubmitTimeBefore?: Date;
		SubmitTimeAfter?: Date;
	}

	export enum ComprehendMedicalAsyncJobFilterJobStatus { SUBMITTED = 0, IN_PROGRESS = 1, COMPLETED = 2, PARTIAL_SUCCESS = 3, FAILED = 4, STOP_REQUESTED = 5, STOPPED = 6 }


	/**The input properties for an entities detection job. This includes the name of the S3 bucket and the path to the files to be analyzed. See <a>batch-manifest</a> for more information.  */
	export interface InputDataConfig {
		S3Bucket: string;
		S3Key?: string;
	}


	/**The output properties for a detection job. */
	export interface OutputDataConfig {
		S3Bucket: string;
		S3Key?: string;
	}

	export enum LanguageCode { en = 0 }


	/**Provides information about a detection job. */
	export interface ComprehendMedicalAsyncJobProperties {
		JobId?: string;
		JobName?: string;
		JobStatus?: ComprehendMedicalAsyncJobPropertiesJobStatus;
		Message?: string;
		SubmitTime?: Date;
		EndTime?: Date;
		ExpirationTime?: Date;

		/**The input properties for an entities detection job. This includes the name of the S3 bucket and the path to the files to be analyzed. See <a>batch-manifest</a> for more information. */
		InputDataConfig?: InputDataConfig;

		/**The output properties for a detection job. */
		OutputDataConfig?: OutputDataConfig;
		LanguageCode?: ComprehendMedicalAsyncJobPropertiesLanguageCode;
		DataAccessRoleArn?: string;
		ManifestFilePath?: string;
		KMSKey?: string;
		ModelVersion?: string;
	}

	export enum ComprehendMedicalAsyncJobPropertiesJobStatus { SUBMITTED = 0, IN_PROGRESS = 1, COMPLETED = 2, PARTIAL_SUCCESS = 3, FAILED = 4, STOP_REQUESTED = 5, STOPPED = 6 }

	export enum ComprehendMedicalAsyncJobPropertiesLanguageCode { en = 0 }


	/** Provides information about an extracted medical entity. */
	export interface Entity {
		Id?: number;
		BeginOffset?: number;
		EndOffset?: number;
		Score?: number;
		Text?: string;
		Category?: EntityCategory;
		Type?: EntityType;
		Traits?: Array<Trait>;
		Attributes?: Array<Attribute>;
	}

	export enum EntityCategory { MEDICATION = 0, MEDICAL_CONDITION = 1, PROTECTED_HEALTH_INFORMATION = 2, TEST_TREATMENT_PROCEDURE = 3, ANATOMY = 4, TIME_EXPRESSION = 5 }

	export enum EntityType { NAME = 0, DOSAGE = 1, ROUTE_OR_MODE = 2, FORM = 3, FREQUENCY = 4, DURATION = 5, GENERIC_NAME = 6, BRAND_NAME = 7, STRENGTH = 8, RATE = 9, ACUITY = 10, TEST_NAME = 11, TEST_VALUE = 12, TEST_UNITS = 13, PROCEDURE_NAME = 14, TREATMENT_NAME = 15, DATE = 16, AGE = 17, CONTACT_POINT = 18, EMAIL = 19, IDENTIFIER = 20, URL = 21, ADDRESS = 22, PROFESSION = 23, SYSTEM_ORGAN_SITE = 24, DIRECTION = 25, QUALITY = 26, QUANTITY = 27, TIME_EXPRESSION = 28, TIME_TO_MEDICATION_NAME = 29, TIME_TO_DX_NAME = 30, TIME_TO_TEST_NAME = 31, TIME_TO_PROCEDURE_NAME = 32, TIME_TO_TREATMENT_NAME = 33 }

	export enum ICD10CMAttributeType { ACUITY = 0, DIRECTION = 1, SYSTEM_ORGAN_SITE = 2, QUALITY = 3, QUANTITY = 4 }


	/**The detected attributes that relate to an entity. This includes an extracted segment of the text that is an attribute of an entity, or otherwise related to an entity. InferICD10CM detects the following attributes: <code>Direction</code>, <code>System, Organ or Site</code>, and <code>Acuity</code>. */
	export interface ICD10CMAttribute {
		Type?: ICD10CMAttributeType;
		Score?: number;
		RelationshipScore?: number;
		Id?: number;
		BeginOffset?: number;
		EndOffset?: number;
		Text?: string;
		Traits?: Array<ICD10CMTrait>;
	}

	export enum ICD10CMAttributeType { ACUITY = 0, DIRECTION = 1, SYSTEM_ORGAN_SITE = 2, QUALITY = 3, QUANTITY = 4 }


	/** The ICD-10-CM concepts that the entity could refer to, along with a score indicating the likelihood of the match. */
	export interface ICD10CMConcept {
		Description?: string;
		Code?: string;
		Score?: number;
	}

	export enum ICD10CMEntityCategory { MEDICAL_CONDITION = 0 }

	export enum ICD10CMEntityType { DX_NAME = 0 }


	/**The collection of medical entities extracted from the input text and their associated information. For each entity, the response provides the entity text, the entity category, where the entity text begins and ends, and the level of confidence that Amazon Comprehend Medical has in the detection and analysis. Attributes and traits of the entity are also returned.  */
	export interface ICD10CMEntity {
		Id?: number;
		Text?: string;
		Category?: ICD10CMEntityCategory;
		Type?: ICD10CMEntityType;
		Score?: number;
		BeginOffset?: number;
		EndOffset?: number;
		Attributes?: Array<ICD10CMAttribute>;
		Traits?: Array<ICD10CMTrait>;
		ICD10CMConcepts?: Array<ICD10CMConcept>;
	}

	export enum ICD10CMEntityCategory { MEDICAL_CONDITION = 0 }

	export enum ICD10CMEntityType { DX_NAME = 0 }

	export enum ICD10CMTraitName { NEGATION = 0, DIAGNOSIS = 1, SIGN = 2, SYMPTOM = 3 }


	/**Contextual information for the entity. The traits recognized by InferICD10CM are <code>DIAGNOSIS</code>, <code>SIGN</code>, <code>SYMPTOM</code>, and <code>NEGATION</code>. */
	export interface ICD10CMTrait {
		Name?: ICD10CMTraitName;
		Score?: number;
	}

	export enum ICD10CMTraitName { NEGATION = 0, DIAGNOSIS = 1, SIGN = 2, SYMPTOM = 3 }

	export enum RxNormAttributeType { DOSAGE = 0, DURATION = 1, FORM = 2, FREQUENCY = 3, RATE = 4, ROUTE_OR_MODE = 5, STRENGTH = 6 }


	/**The extracted attributes that relate to this entity. The attributes recognized by InferRxNorm are <code>DOSAGE</code>, <code>DURATION</code>, <code>FORM</code>, <code>FREQUENCY</code>, <code>RATE</code>, <code>ROUTE_OR_MODE</code>. */
	export interface RxNormAttribute {
		Type?: RxNormAttributeType;
		Score?: number;
		RelationshipScore?: number;
		Id?: number;
		BeginOffset?: number;
		EndOffset?: number;
		Text?: string;
		Traits?: Array<RxNormTrait>;
	}

	export enum RxNormAttributeType { DOSAGE = 0, DURATION = 1, FORM = 2, FREQUENCY = 3, RATE = 4, ROUTE_OR_MODE = 5, STRENGTH = 6 }


	/**The RxNorm concept that the entity could refer to, along with a score indicating the likelihood of the match. */
	export interface RxNormConcept {
		Description?: string;
		Code?: string;
		Score?: number;
	}

	export enum RxNormEntityCategory { MEDICATION = 0 }

	export enum RxNormEntityType { BRAND_NAME = 0, GENERIC_NAME = 1 }


	/**The collection of medical entities extracted from the input text and their associated information. For each entity, the response provides the entity text, the entity category, where the entity text begins and ends, and the level of confidence that Amazon Comprehend Medical has in the detection and analysis. Attributes and traits of the entity are also returned.  */
	export interface RxNormEntity {
		Id?: number;
		Text?: string;
		Category?: RxNormEntityCategory;
		Type?: RxNormEntityType;
		Score?: number;
		BeginOffset?: number;
		EndOffset?: number;
		Attributes?: Array<RxNormAttribute>;
		Traits?: Array<RxNormTrait>;
		RxNormConcepts?: Array<RxNormConcept>;
	}

	export enum RxNormEntityCategory { MEDICATION = 0 }

	export enum RxNormEntityType { BRAND_NAME = 0, GENERIC_NAME = 1 }

	export enum RxNormTraitName { NEGATION = 0 }


	/**The contextual information for the entity. InferRxNorm recognizes the trait <code>NEGATION</code>, which is any indication that the patient is not taking a medication.  */
	export interface RxNormTrait {
		Name?: RxNormTraitName;
		Score?: number;
	}

	export enum RxNormTraitName { NEGATION = 0 }


	/** Provides contextual information about the extracted entity.  */
	export interface Trait {
		Name?: TraitName;
		Score?: number;
	}

	export enum TraitName { SIGN = 0, SYMPTOM = 1, DIAGNOSIS = 2, NEGATION = 3 }


	/** An attribute that we extracted, but were unable to relate to an entity.  */
	export interface UnmappedAttribute {
		Type?: UnmappedAttributeType;

		/**An extracted segment of the text that is an attribute of an entity, or otherwise related to an entity, such as the dosage of a medication taken. It contains information about the attribute such as id, begin and end offset within the input text, and the segment of the input text. */
		Attribute?: Attribute;
	}

	export enum UnmappedAttributeType { MEDICATION = 0, MEDICAL_CONDITION = 1, PROTECTED_HEALTH_INFORMATION = 2, TEST_TREATMENT_PROCEDURE = 3, ANATOMY = 4, TIME_EXPRESSION = 5 }

	@autoinject()
	export class DemoClient {
		constructor(private http: HttpClient) {
		}

		/**
		 * Gets the properties associated with a medical entities detection job. Use this operation to get the status of a detection job.
		 * Post /#X-Amz-Target=ComprehendMedical_20181030.DescribeEntitiesDetectionV2Job
		 * @return {DescribeEntitiesDetectionV2JobResponse} Success
		 */
		DescribeEntitiesDetectionV2Job(requestBody: DescribeEntitiesDetectionV2JobRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeEntitiesDetectionV2JobResponse> {
			return this.http.post('/#X-Amz-Target=ComprehendMedical_20181030.DescribeEntitiesDetectionV2Job', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Gets the properties associated with an InferICD10CM job. Use this operation to get the status of an inference job.
		 * Post /#X-Amz-Target=ComprehendMedical_20181030.DescribeICD10CMInferenceJob
		 * @return {DescribeICD10CMInferenceJobResponse} Success
		 */
		DescribeICD10CMInferenceJob(requestBody: DescribeICD10CMInferenceJobRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeICD10CMInferenceJobResponse> {
			return this.http.post('/#X-Amz-Target=ComprehendMedical_20181030.DescribeICD10CMInferenceJob', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Gets the properties associated with a protected health information (PHI) detection job. Use this operation to get the status of a detection job.
		 * Post /#X-Amz-Target=ComprehendMedical_20181030.DescribePHIDetectionJob
		 * @return {DescribePHIDetectionJobResponse} Success
		 */
		DescribePHIDetectionJob(requestBody: DescribePHIDetectionJobRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribePHIDetectionJobResponse> {
			return this.http.post('/#X-Amz-Target=ComprehendMedical_20181030.DescribePHIDetectionJob', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Gets the properties associated with an InferRxNorm job. Use this operation to get the status of an inference job.
		 * Post /#X-Amz-Target=ComprehendMedical_20181030.DescribeRxNormInferenceJob
		 * @return {DescribeRxNormInferenceJobResponse} Success
		 */
		DescribeRxNormInferenceJob(requestBody: DescribeRxNormInferenceJobRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeRxNormInferenceJobResponse> {
			return this.http.post('/#X-Amz-Target=ComprehendMedical_20181030.DescribeRxNormInferenceJob', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * <p>The <code>DetectEntities</code> operation is deprecated. You should use the <a>DetectEntitiesV2</a> operation instead.</p> <p> Inspects the clinical text for a variety of medical entities and returns specific information about them such as entity category, location, and confidence score on that information .</p>
		 * Post /#X-Amz-Target=ComprehendMedical_20181030.DetectEntities
		 * @return {DetectEntitiesResponse} Success
		 */
		DetectEntities(requestBody: DetectEntitiesRequest, headersHandler?: () => {[header: string]: string}): Promise<DetectEntitiesResponse> {
			return this.http.post('/#X-Amz-Target=ComprehendMedical_20181030.DetectEntities', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * <p>Inspects the clinical text for a variety of medical entities and returns specific information about them such as entity category, location, and confidence score on that information. Amazon Comprehend Medical only detects medical entities in English language texts.</p> <p>The <code>DetectEntitiesV2</code> operation replaces the <a>DetectEntities</a> operation. This new action uses a different model for determining the entities in your medical text and changes the way that some entities are returned in the output. You should use the <code>DetectEntitiesV2</code> operation in all new applications.</p> <p>The <code>DetectEntitiesV2</code> operation returns the <code>Acuity</code> and <code>Direction</code> entities as attributes instead of types. </p>
		 * Post /#X-Amz-Target=ComprehendMedical_20181030.DetectEntitiesV2
		 * @return {DetectEntitiesV2Response} Success
		 */
		DetectEntitiesV2(requestBody: DetectEntitiesV2Request, headersHandler?: () => {[header: string]: string}): Promise<DetectEntitiesV2Response> {
			return this.http.post('/#X-Amz-Target=ComprehendMedical_20181030.DetectEntitiesV2', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Inspects the clinical text for protected health information (PHI) entities and returns the entity category, location, and confidence score for each entity. Amazon Comprehend Medical only detects entities in English language texts.
		 * Post /#X-Amz-Target=ComprehendMedical_20181030.DetectPHI
		 * @return {DetectPHIResponse} Success
		 */
		DetectPHI(requestBody: DetectPHIRequest, headersHandler?: () => {[header: string]: string}): Promise<DetectPHIResponse> {
			return this.http.post('/#X-Amz-Target=ComprehendMedical_20181030.DetectPHI', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * InferICD10CM detects medical conditions as entities listed in a patient record and links those entities to normalized concept identifiers in the ICD-10-CM knowledge base from the Centers for Disease Control. Amazon Comprehend Medical only detects medical entities in English language texts.
		 * Post /#X-Amz-Target=ComprehendMedical_20181030.InferICD10CM
		 * @return {InferICD10CMResponse} Success
		 */
		InferICD10CM(requestBody: InferICD10CMRequest, headersHandler?: () => {[header: string]: string}): Promise<InferICD10CMResponse> {
			return this.http.post('/#X-Amz-Target=ComprehendMedical_20181030.InferICD10CM', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * InferRxNorm detects medications as entities listed in a patient record and links to the normalized concept identifiers in the RxNorm database from the National Library of Medicine. Amazon Comprehend Medical only detects medical entities in English language texts.
		 * Post /#X-Amz-Target=ComprehendMedical_20181030.InferRxNorm
		 * @return {InferRxNormResponse} Success
		 */
		InferRxNorm(requestBody: InferRxNormRequest, headersHandler?: () => {[header: string]: string}): Promise<InferRxNormResponse> {
			return this.http.post('/#X-Amz-Target=ComprehendMedical_20181030.InferRxNorm', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Gets a list of medical entity detection jobs that you have submitted.
		 * Post /#X-Amz-Target=ComprehendMedical_20181030.ListEntitiesDetectionV2Jobs
		 * @return {ListEntitiesDetectionV2JobsResponse} Success
		 */
		ListEntitiesDetectionV2Jobs(requestBody: ListEntitiesDetectionV2JobsRequest, headersHandler?: () => {[header: string]: string}): Promise<ListEntitiesDetectionV2JobsResponse> {
			return this.http.post('/#X-Amz-Target=ComprehendMedical_20181030.ListEntitiesDetectionV2Jobs', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Gets a list of InferICD10CM jobs that you have submitted.
		 * Post /#X-Amz-Target=ComprehendMedical_20181030.ListICD10CMInferenceJobs
		 * @return {ListICD10CMInferenceJobsResponse} Success
		 */
		ListICD10CMInferenceJobs(requestBody: ListICD10CMInferenceJobsRequest, headersHandler?: () => {[header: string]: string}): Promise<ListICD10CMInferenceJobsResponse> {
			return this.http.post('/#X-Amz-Target=ComprehendMedical_20181030.ListICD10CMInferenceJobs', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Gets a list of protected health information (PHI) detection jobs that you have submitted.
		 * Post /#X-Amz-Target=ComprehendMedical_20181030.ListPHIDetectionJobs
		 * @return {ListPHIDetectionJobsResponse} Success
		 */
		ListPHIDetectionJobs(requestBody: ListPHIDetectionJobsRequest, headersHandler?: () => {[header: string]: string}): Promise<ListPHIDetectionJobsResponse> {
			return this.http.post('/#X-Amz-Target=ComprehendMedical_20181030.ListPHIDetectionJobs', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Gets a list of InferRxNorm jobs that you have submitted.
		 * Post /#X-Amz-Target=ComprehendMedical_20181030.ListRxNormInferenceJobs
		 * @return {ListRxNormInferenceJobsResponse} Success
		 */
		ListRxNormInferenceJobs(requestBody: ListRxNormInferenceJobsRequest, headersHandler?: () => {[header: string]: string}): Promise<ListRxNormInferenceJobsResponse> {
			return this.http.post('/#X-Amz-Target=ComprehendMedical_20181030.ListRxNormInferenceJobs', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Starts an asynchronous medical entity detection job for a collection of documents. Use the <code>DescribeEntitiesDetectionV2Job</code> operation to track the status of a job.
		 * Post /#X-Amz-Target=ComprehendMedical_20181030.StartEntitiesDetectionV2Job
		 * @return {StartEntitiesDetectionV2JobResponse} Success
		 */
		StartEntitiesDetectionV2Job(requestBody: StartEntitiesDetectionV2JobRequest, headersHandler?: () => {[header: string]: string}): Promise<StartEntitiesDetectionV2JobResponse> {
			return this.http.post('/#X-Amz-Target=ComprehendMedical_20181030.StartEntitiesDetectionV2Job', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Starts an asynchronous job to detect medical conditions and link them to the ICD-10-CM ontology. Use the <code>DescribeICD10CMInferenceJob</code> operation to track the status of a job.
		 * Post /#X-Amz-Target=ComprehendMedical_20181030.StartICD10CMInferenceJob
		 * @return {StartICD10CMInferenceJobResponse} Success
		 */
		StartICD10CMInferenceJob(requestBody: StartICD10CMInferenceJobRequest, headersHandler?: () => {[header: string]: string}): Promise<StartICD10CMInferenceJobResponse> {
			return this.http.post('/#X-Amz-Target=ComprehendMedical_20181030.StartICD10CMInferenceJob', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Starts an asynchronous job to detect protected health information (PHI). Use the <code>DescribePHIDetectionJob</code> operation to track the status of a job.
		 * Post /#X-Amz-Target=ComprehendMedical_20181030.StartPHIDetectionJob
		 * @return {StartPHIDetectionJobResponse} Success
		 */
		StartPHIDetectionJob(requestBody: StartPHIDetectionJobRequest, headersHandler?: () => {[header: string]: string}): Promise<StartPHIDetectionJobResponse> {
			return this.http.post('/#X-Amz-Target=ComprehendMedical_20181030.StartPHIDetectionJob', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Starts an asynchronous job to detect medication entities and link them to the RxNorm ontology. Use the <code>DescribeRxNormInferenceJob</code> operation to track the status of a job.
		 * Post /#X-Amz-Target=ComprehendMedical_20181030.StartRxNormInferenceJob
		 * @return {StartRxNormInferenceJobResponse} Success
		 */
		StartRxNormInferenceJob(requestBody: StartRxNormInferenceJobRequest, headersHandler?: () => {[header: string]: string}): Promise<StartRxNormInferenceJobResponse> {
			return this.http.post('/#X-Amz-Target=ComprehendMedical_20181030.StartRxNormInferenceJob', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Stops a medical entities detection job in progress.
		 * Post /#X-Amz-Target=ComprehendMedical_20181030.StopEntitiesDetectionV2Job
		 * @return {StopEntitiesDetectionV2JobResponse} Success
		 */
		StopEntitiesDetectionV2Job(requestBody: StopEntitiesDetectionV2JobRequest, headersHandler?: () => {[header: string]: string}): Promise<StopEntitiesDetectionV2JobResponse> {
			return this.http.post('/#X-Amz-Target=ComprehendMedical_20181030.StopEntitiesDetectionV2Job', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Stops an InferICD10CM inference job in progress.
		 * Post /#X-Amz-Target=ComprehendMedical_20181030.StopICD10CMInferenceJob
		 * @return {StopICD10CMInferenceJobResponse} Success
		 */
		StopICD10CMInferenceJob(requestBody: StopICD10CMInferenceJobRequest, headersHandler?: () => {[header: string]: string}): Promise<StopICD10CMInferenceJobResponse> {
			return this.http.post('/#X-Amz-Target=ComprehendMedical_20181030.StopICD10CMInferenceJob', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Stops a protected health information (PHI) detection job in progress.
		 * Post /#X-Amz-Target=ComprehendMedical_20181030.StopPHIDetectionJob
		 * @return {StopPHIDetectionJobResponse} Success
		 */
		StopPHIDetectionJob(requestBody: StopPHIDetectionJobRequest, headersHandler?: () => {[header: string]: string}): Promise<StopPHIDetectionJobResponse> {
			return this.http.post('/#X-Amz-Target=ComprehendMedical_20181030.StopPHIDetectionJob', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Stops an InferRxNorm inference job in progress.
		 * Post /#X-Amz-Target=ComprehendMedical_20181030.StopRxNormInferenceJob
		 * @return {StopRxNormInferenceJobResponse} Success
		 */
		StopRxNormInferenceJob(requestBody: StopRxNormInferenceJobRequest, headersHandler?: () => {[header: string]: string}): Promise<StopRxNormInferenceJobResponse> {
			return this.http.post('/#X-Amz-Target=ComprehendMedical_20181030.StopRxNormInferenceJob', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}
	}

}

