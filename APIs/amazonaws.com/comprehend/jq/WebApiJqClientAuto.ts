///<reference path="HttpClient.ts" />
namespace My_Demo_Client {
	export interface BatchDetectDominantLanguageResponse {
		ResultList: Array<BatchDetectDominantLanguageItemResult>;
		ErrorList: Array<BatchItemError>;
	}

	export interface BatchDetectDominantLanguageRequest {
		TextList: Array<String>;
	}

	export interface BatchDetectEntitiesResponse {
		ResultList: Array<BatchDetectEntitiesItemResult>;
		ErrorList: Array<BatchItemError>;
	}

	export interface BatchDetectEntitiesRequest {
		TextList: Array<String>;
		LanguageCode: BatchDetectEntitiesRequestLanguageCode;
	}

	export enum BatchDetectEntitiesRequestLanguageCode { en = 0, es = 1, fr = 2, de = 3, it = 4, pt = 5, ar = 6, hi = 7, ja = 8, ko = 9, zh = 10, zh-TW = 11 }

	export interface BatchDetectKeyPhrasesResponse {
		ResultList: Array<BatchDetectKeyPhrasesItemResult>;
		ErrorList: Array<BatchItemError>;
	}

	export interface BatchDetectKeyPhrasesRequest {
		TextList: Array<String>;
		LanguageCode: BatchDetectKeyPhrasesRequestLanguageCode;
	}

	export enum BatchDetectKeyPhrasesRequestLanguageCode { en = 0, es = 1, fr = 2, de = 3, it = 4, pt = 5, ar = 6, hi = 7, ja = 8, ko = 9, zh = 10, zh-TW = 11 }

	export interface BatchDetectSentimentResponse {
		ResultList: Array<BatchDetectSentimentItemResult>;
		ErrorList: Array<BatchItemError>;
	}

	export interface BatchDetectSentimentRequest {
		TextList: Array<String>;
		LanguageCode: BatchDetectSentimentRequestLanguageCode;
	}

	export enum BatchDetectSentimentRequestLanguageCode { en = 0, es = 1, fr = 2, de = 3, it = 4, pt = 5, ar = 6, hi = 7, ja = 8, ko = 9, zh = 10, zh-TW = 11 }

	export interface BatchDetectSyntaxResponse {
		ResultList: Array<BatchDetectSyntaxItemResult>;
		ErrorList: Array<BatchItemError>;
	}

	export interface BatchDetectSyntaxRequest {
		TextList: Array<String>;
		LanguageCode: BatchDetectSyntaxRequestLanguageCode;
	}

	export enum BatchDetectSyntaxRequestLanguageCode { en = 0, es = 1, fr = 2, de = 3, it = 4, pt = 5 }

	export interface ClassifyDocumentResponse {
		Classes?: Array<DocumentClass>;
		Labels?: Array<DocumentLabel>;
	}

	export interface ClassifyDocumentRequest {
		Text: string;
		EndpointArn: string;
	}

	export interface CreateDocumentClassifierResponse {
		DocumentClassifierArn?: string;
	}

	export interface CreateDocumentClassifierRequest {
		DocumentClassifierName: string;
		DataAccessRoleArn: string;
		Tags?: Array<Tag>;

		/**<p>The input properties for training a document classifier. </p> <p>For more information on how the input file is formatted, see <a>how-document-classification-training-data</a>. </p> */
		InputDataConfig: DocumentClassifierInputDataConfig;

		/**Provides output results configuration parameters for custom classifier jobs. */
		OutputDataConfig?: DocumentClassifierOutputDataConfig;
		ClientRequestToken?: string;
		LanguageCode: CreateDocumentClassifierRequestLanguageCode;
		VolumeKmsKeyId?: string;

		/**Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. */
		VpcConfig?: VpcConfig;
		Mode?: CreateDocumentClassifierRequestMode;
	}

	export enum CreateDocumentClassifierRequestLanguageCode { en = 0, es = 1, fr = 2, de = 3, it = 4, pt = 5, ar = 6, hi = 7, ja = 8, ko = 9, zh = 10, zh-TW = 11 }

	export enum CreateDocumentClassifierRequestMode { MULTI_CLASS = 0, MULTI_LABEL = 1 }

	export interface CreateEndpointResponse {
		EndpointArn?: string;
	}

	export interface CreateEndpointRequest {
		EndpointName: string;
		ModelArn: string;
		DesiredInferenceUnits: number;
		ClientRequestToken?: string;
		Tags?: Array<Tag>;
	}

	export interface CreateEntityRecognizerResponse {
		EntityRecognizerArn?: string;
	}

	export interface CreateEntityRecognizerRequest {
		RecognizerName: string;
		DataAccessRoleArn: string;
		Tags?: Array<Tag>;

		/**Specifies the format and location of the input data. */
		InputDataConfig: EntityRecognizerInputDataConfig;
		ClientRequestToken?: string;
		LanguageCode: CreateEntityRecognizerRequestLanguageCode;
		VolumeKmsKeyId?: string;

		/**Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. */
		VpcConfig?: VpcConfig;
	}

	export enum CreateEntityRecognizerRequestLanguageCode { en = 0, es = 1, fr = 2, de = 3, it = 4, pt = 5, ar = 6, hi = 7, ja = 8, ko = 9, zh = 10, zh-TW = 11 }

	export interface DeleteDocumentClassifierRequest {
		DocumentClassifierArn: string;
	}

	export interface DeleteEndpointRequest {
		EndpointArn: string;
	}

	export interface DeleteEntityRecognizerRequest {
		EntityRecognizerArn: string;
	}

	export interface DescribeDocumentClassificationJobResponse {

		/**Provides information about a document classification job. */
		DocumentClassificationJobProperties?: DocumentClassificationJobProperties;
	}

	export interface DescribeDocumentClassificationJobRequest {
		JobId: string;
	}

	export interface DescribeDocumentClassifierResponse {

		/**Provides information about a document classifier. */
		DocumentClassifierProperties?: DocumentClassifierProperties;
	}

	export interface DescribeDocumentClassifierRequest {
		DocumentClassifierArn: string;
	}

	export interface DescribeDominantLanguageDetectionJobResponse {

		/**Provides information about a dominant language detection job. */
		DominantLanguageDetectionJobProperties?: DominantLanguageDetectionJobProperties;
	}

	export interface DescribeDominantLanguageDetectionJobRequest {
		JobId: string;
	}

	export interface DescribeEndpointResponse {

		/**Specifies information about the specified endpoint. */
		EndpointProperties?: EndpointProperties;
	}

	export interface DescribeEndpointRequest {
		EndpointArn: string;
	}

	export interface DescribeEntitiesDetectionJobResponse {

		/**Provides information about an entities detection job. */
		EntitiesDetectionJobProperties?: EntitiesDetectionJobProperties;
	}

	export interface DescribeEntitiesDetectionJobRequest {
		JobId: string;
	}

	export interface DescribeEntityRecognizerResponse {

		/**Describes information about an entity recognizer. */
		EntityRecognizerProperties?: EntityRecognizerProperties;
	}

	export interface DescribeEntityRecognizerRequest {
		EntityRecognizerArn: string;
	}

	export interface DescribeKeyPhrasesDetectionJobResponse {

		/**Provides information about a key phrases detection job. */
		KeyPhrasesDetectionJobProperties?: KeyPhrasesDetectionJobProperties;
	}

	export interface DescribeKeyPhrasesDetectionJobRequest {
		JobId: string;
	}

	export interface DescribeSentimentDetectionJobResponse {

		/**Provides information about a sentiment detection job. */
		SentimentDetectionJobProperties?: SentimentDetectionJobProperties;
	}

	export interface DescribeSentimentDetectionJobRequest {
		JobId: string;
	}

	export interface DescribeTopicsDetectionJobResponse {

		/**Provides information about a topic detection job. */
		TopicsDetectionJobProperties?: TopicsDetectionJobProperties;
	}

	export interface DescribeTopicsDetectionJobRequest {
		JobId: string;
	}

	export interface DetectDominantLanguageResponse {
		Languages?: Array<DominantLanguage>;
	}

	export interface DetectDominantLanguageRequest {
		Text: string;
	}

	export interface DetectEntitiesResponse {
		Entities?: Array<Entity>;
	}

	export interface DetectEntitiesRequest {
		Text: string;
		LanguageCode: DetectEntitiesRequestLanguageCode;
	}

	export enum DetectEntitiesRequestLanguageCode { en = 0, es = 1, fr = 2, de = 3, it = 4, pt = 5, ar = 6, hi = 7, ja = 8, ko = 9, zh = 10, zh-TW = 11 }

	export interface DetectKeyPhrasesResponse {
		KeyPhrases?: Array<KeyPhrase>;
	}

	export interface DetectKeyPhrasesRequest {
		Text: string;
		LanguageCode: DetectKeyPhrasesRequestLanguageCode;
	}

	export enum DetectKeyPhrasesRequestLanguageCode { en = 0, es = 1, fr = 2, de = 3, it = 4, pt = 5, ar = 6, hi = 7, ja = 8, ko = 9, zh = 10, zh-TW = 11 }

	export interface DetectSentimentResponse {
		Sentiment?: DetectSentimentResponseSentiment;

		/**Describes the level of confidence that Amazon Comprehend has in the accuracy of its detection of sentiments. */
		SentimentScore?: SentimentScore;
	}

	export enum DetectSentimentResponseSentiment { POSITIVE = 0, NEGATIVE = 1, NEUTRAL = 2, MIXED = 3 }

	export interface DetectSentimentRequest {
		Text: string;
		LanguageCode: DetectSentimentRequestLanguageCode;
	}

	export enum DetectSentimentRequestLanguageCode { en = 0, es = 1, fr = 2, de = 3, it = 4, pt = 5, ar = 6, hi = 7, ja = 8, ko = 9, zh = 10, zh-TW = 11 }

	export interface DetectSyntaxResponse {
		SyntaxTokens?: Array<SyntaxToken>;
	}

	export interface DetectSyntaxRequest {
		Text: string;
		LanguageCode: DetectSyntaxRequestLanguageCode;
	}

	export enum DetectSyntaxRequestLanguageCode { en = 0, es = 1, fr = 2, de = 3, it = 4, pt = 5 }

	export interface ListDocumentClassificationJobsResponse {
		DocumentClassificationJobPropertiesList?: Array<DocumentClassificationJobProperties>;
		NextToken?: string;
	}

	export interface ListDocumentClassificationJobsRequest {

		/**Provides information for filtering a list of document classification jobs. For more information, see the operation. You can provide only one filter parameter in each request. */
		Filter?: DocumentClassificationJobFilter;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListDocumentClassifiersResponse {
		DocumentClassifierPropertiesList?: Array<DocumentClassifierProperties>;
		NextToken?: string;
	}

	export interface ListDocumentClassifiersRequest {

		/**Provides information for filtering a list of document classifiers. You can only specify one filtering parameter in a request. For more information, see the operation. */
		Filter?: DocumentClassifierFilter;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListDominantLanguageDetectionJobsResponse {
		DominantLanguageDetectionJobPropertiesList?: Array<DominantLanguageDetectionJobProperties>;
		NextToken?: string;
	}

	export interface ListDominantLanguageDetectionJobsRequest {

		/**Provides information for filtering a list of dominant language detection jobs. For more information, see the operation. */
		Filter?: DominantLanguageDetectionJobFilter;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListEndpointsResponse {
		EndpointPropertiesList?: Array<EndpointProperties>;
		NextToken?: string;
	}

	export interface ListEndpointsRequest {

		/**The filter used to determine which endpoints are are returned. You can filter jobs on their name, model, status, or the date and time that they were created. You can only set one filter at a time. */
		Filter?: EndpointFilter;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListEntitiesDetectionJobsResponse {
		EntitiesDetectionJobPropertiesList?: Array<EntitiesDetectionJobProperties>;
		NextToken?: string;
	}

	export interface ListEntitiesDetectionJobsRequest {

		/**Provides information for filtering a list of dominant language detection jobs. For more information, see the operation. */
		Filter?: EntitiesDetectionJobFilter;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListEntityRecognizersResponse {
		EntityRecognizerPropertiesList?: Array<EntityRecognizerProperties>;
		NextToken?: string;
	}

	export interface ListEntityRecognizersRequest {

		/**Provides information for filtering a list of entity recognizers. You can only specify one filtering parameter in a request. For more information, see the operation./&gt; */
		Filter?: EntityRecognizerFilter;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListKeyPhrasesDetectionJobsResponse {
		KeyPhrasesDetectionJobPropertiesList?: Array<KeyPhrasesDetectionJobProperties>;
		NextToken?: string;
	}

	export interface ListKeyPhrasesDetectionJobsRequest {

		/**Provides information for filtering a list of dominant language detection jobs. For more information, see the operation. */
		Filter?: KeyPhrasesDetectionJobFilter;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListSentimentDetectionJobsResponse {
		SentimentDetectionJobPropertiesList?: Array<SentimentDetectionJobProperties>;
		NextToken?: string;
	}

	export interface ListSentimentDetectionJobsRequest {

		/**Provides information for filtering a list of dominant language detection jobs. For more information, see the operation. */
		Filter?: SentimentDetectionJobFilter;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListTagsForResourceResponse {
		ResourceArn?: string;
		Tags?: Array<Tag>;
	}

	export interface ListTagsForResourceRequest {
		ResourceArn: string;
	}

	export interface ListTopicsDetectionJobsResponse {
		TopicsDetectionJobPropertiesList?: Array<TopicsDetectionJobProperties>;
		NextToken?: string;
	}

	export interface ListTopicsDetectionJobsRequest {

		/**Provides information for filtering topic detection jobs. For more information, see . */
		Filter?: TopicsDetectionJobFilter;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface StartDocumentClassificationJobResponse {
		JobId?: string;
		JobStatus?: StartDocumentClassificationJobResponseJobStatus;
	}

	export enum StartDocumentClassificationJobResponseJobStatus { SUBMITTED = 0, IN_PROGRESS = 1, COMPLETED = 2, FAILED = 3, STOP_REQUESTED = 4, STOPPED = 5 }

	export interface StartDocumentClassificationJobRequest {
		JobName?: string;
		DocumentClassifierArn: string;

		/**The input properties for a topic detection job. */
		InputDataConfig: InputDataConfig;

		/**<p>Provides configuration parameters for the output of topic detection jobs.</p> <p/> */
		OutputDataConfig: OutputDataConfig;
		DataAccessRoleArn: string;
		ClientRequestToken?: string;
		VolumeKmsKeyId?: string;

		/**Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. */
		VpcConfig?: VpcConfig;
	}

	export interface StartDominantLanguageDetectionJobResponse {
		JobId?: string;
		JobStatus?: StartDominantLanguageDetectionJobResponseJobStatus;
	}

	export enum StartDominantLanguageDetectionJobResponseJobStatus { SUBMITTED = 0, IN_PROGRESS = 1, COMPLETED = 2, FAILED = 3, STOP_REQUESTED = 4, STOPPED = 5 }

	export interface StartDominantLanguageDetectionJobRequest {

		/**The input properties for a topic detection job. */
		InputDataConfig: InputDataConfig;

		/**<p>Provides configuration parameters for the output of topic detection jobs.</p> <p/> */
		OutputDataConfig: OutputDataConfig;
		DataAccessRoleArn: string;
		JobName?: string;
		ClientRequestToken?: string;
		VolumeKmsKeyId?: string;

		/**Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. */
		VpcConfig?: VpcConfig;
	}

	export interface StartEntitiesDetectionJobResponse {
		JobId?: string;
		JobStatus?: StartEntitiesDetectionJobResponseJobStatus;
	}

	export enum StartEntitiesDetectionJobResponseJobStatus { SUBMITTED = 0, IN_PROGRESS = 1, COMPLETED = 2, FAILED = 3, STOP_REQUESTED = 4, STOPPED = 5 }

	export interface StartEntitiesDetectionJobRequest {

		/**The input properties for a topic detection job. */
		InputDataConfig: InputDataConfig;

		/**<p>Provides configuration parameters for the output of topic detection jobs.</p> <p/> */
		OutputDataConfig: OutputDataConfig;
		DataAccessRoleArn: string;
		JobName?: string;
		EntityRecognizerArn?: string;
		LanguageCode: StartEntitiesDetectionJobRequestLanguageCode;
		ClientRequestToken?: string;
		VolumeKmsKeyId?: string;

		/**Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. */
		VpcConfig?: VpcConfig;
	}

	export enum StartEntitiesDetectionJobRequestLanguageCode { en = 0, es = 1, fr = 2, de = 3, it = 4, pt = 5, ar = 6, hi = 7, ja = 8, ko = 9, zh = 10, zh-TW = 11 }

	export interface StartKeyPhrasesDetectionJobResponse {
		JobId?: string;
		JobStatus?: StartKeyPhrasesDetectionJobResponseJobStatus;
	}

	export enum StartKeyPhrasesDetectionJobResponseJobStatus { SUBMITTED = 0, IN_PROGRESS = 1, COMPLETED = 2, FAILED = 3, STOP_REQUESTED = 4, STOPPED = 5 }

	export interface StartKeyPhrasesDetectionJobRequest {

		/**The input properties for a topic detection job. */
		InputDataConfig: InputDataConfig;

		/**<p>Provides configuration parameters for the output of topic detection jobs.</p> <p/> */
		OutputDataConfig: OutputDataConfig;
		DataAccessRoleArn: string;
		JobName?: string;
		LanguageCode: StartKeyPhrasesDetectionJobRequestLanguageCode;
		ClientRequestToken?: string;
		VolumeKmsKeyId?: string;

		/**Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. */
		VpcConfig?: VpcConfig;
	}

	export enum StartKeyPhrasesDetectionJobRequestLanguageCode { en = 0, es = 1, fr = 2, de = 3, it = 4, pt = 5, ar = 6, hi = 7, ja = 8, ko = 9, zh = 10, zh-TW = 11 }

	export interface StartSentimentDetectionJobResponse {
		JobId?: string;
		JobStatus?: StartSentimentDetectionJobResponseJobStatus;
	}

	export enum StartSentimentDetectionJobResponseJobStatus { SUBMITTED = 0, IN_PROGRESS = 1, COMPLETED = 2, FAILED = 3, STOP_REQUESTED = 4, STOPPED = 5 }

	export interface StartSentimentDetectionJobRequest {

		/**The input properties for a topic detection job. */
		InputDataConfig: InputDataConfig;

		/**<p>Provides configuration parameters for the output of topic detection jobs.</p> <p/> */
		OutputDataConfig: OutputDataConfig;
		DataAccessRoleArn: string;
		JobName?: string;
		LanguageCode: StartSentimentDetectionJobRequestLanguageCode;
		ClientRequestToken?: string;
		VolumeKmsKeyId?: string;

		/**Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. */
		VpcConfig?: VpcConfig;
	}

	export enum StartSentimentDetectionJobRequestLanguageCode { en = 0, es = 1, fr = 2, de = 3, it = 4, pt = 5, ar = 6, hi = 7, ja = 8, ko = 9, zh = 10, zh-TW = 11 }

	export interface StartTopicsDetectionJobResponse {
		JobId?: string;
		JobStatus?: StartTopicsDetectionJobResponseJobStatus;
	}

	export enum StartTopicsDetectionJobResponseJobStatus { SUBMITTED = 0, IN_PROGRESS = 1, COMPLETED = 2, FAILED = 3, STOP_REQUESTED = 4, STOPPED = 5 }

	export interface StartTopicsDetectionJobRequest {

		/**The input properties for a topic detection job. */
		InputDataConfig: InputDataConfig;

		/**<p>Provides configuration parameters for the output of topic detection jobs.</p> <p/> */
		OutputDataConfig: OutputDataConfig;
		DataAccessRoleArn: string;
		JobName?: string;
		NumberOfTopics?: number;
		ClientRequestToken?: string;
		VolumeKmsKeyId?: string;

		/**Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. */
		VpcConfig?: VpcConfig;
	}

	export interface StopDominantLanguageDetectionJobResponse {
		JobId?: string;
		JobStatus?: StopDominantLanguageDetectionJobResponseJobStatus;
	}

	export enum StopDominantLanguageDetectionJobResponseJobStatus { SUBMITTED = 0, IN_PROGRESS = 1, COMPLETED = 2, FAILED = 3, STOP_REQUESTED = 4, STOPPED = 5 }

	export interface StopDominantLanguageDetectionJobRequest {
		JobId: string;
	}

	export interface StopEntitiesDetectionJobResponse {
		JobId?: string;
		JobStatus?: StopEntitiesDetectionJobResponseJobStatus;
	}

	export enum StopEntitiesDetectionJobResponseJobStatus { SUBMITTED = 0, IN_PROGRESS = 1, COMPLETED = 2, FAILED = 3, STOP_REQUESTED = 4, STOPPED = 5 }

	export interface StopEntitiesDetectionJobRequest {
		JobId: string;
	}

	export interface StopKeyPhrasesDetectionJobResponse {
		JobId?: string;
		JobStatus?: StopKeyPhrasesDetectionJobResponseJobStatus;
	}

	export enum StopKeyPhrasesDetectionJobResponseJobStatus { SUBMITTED = 0, IN_PROGRESS = 1, COMPLETED = 2, FAILED = 3, STOP_REQUESTED = 4, STOPPED = 5 }

	export interface StopKeyPhrasesDetectionJobRequest {
		JobId: string;
	}

	export interface StopSentimentDetectionJobResponse {
		JobId?: string;
		JobStatus?: StopSentimentDetectionJobResponseJobStatus;
	}

	export enum StopSentimentDetectionJobResponseJobStatus { SUBMITTED = 0, IN_PROGRESS = 1, COMPLETED = 2, FAILED = 3, STOP_REQUESTED = 4, STOPPED = 5 }

	export interface StopSentimentDetectionJobRequest {
		JobId: string;
	}

	export interface StopTrainingDocumentClassifierRequest {
		DocumentClassifierArn: string;
	}

	export interface StopTrainingEntityRecognizerRequest {
		EntityRecognizerArn: string;
	}

	export interface TagResourceRequest {
		ResourceArn: string;
		Tags: Array<Tag>;
	}

	export interface UntagResourceRequest {
		ResourceArn: string;
		TagKeys: Array<TagKey>;
	}

	export interface UpdateEndpointRequest {
		EndpointArn: string;
		DesiredInferenceUnits: number;
	}


	/**The result of calling the operation. The operation returns one object for each document that is successfully processed by the operation. */
	export interface BatchDetectDominantLanguageItemResult {
		Index?: number;
		Languages?: Array<DominantLanguage>;
	}


	/**The result of calling the operation. The operation returns one object for each document that is successfully processed by the operation. */
	export interface BatchDetectEntitiesItemResult {
		Index?: number;
		Entities?: Array<Entity>;
	}

	export enum LanguageCode { en = 0, es = 1, fr = 2, de = 3, it = 4, pt = 5, ar = 6, hi = 7, ja = 8, ko = 9, zh = 10, zh-TW = 11 }


	/**The result of calling the operation. The operation returns one object for each document that is successfully processed by the operation. */
	export interface BatchDetectKeyPhrasesItemResult {
		Index?: number;
		KeyPhrases?: Array<KeyPhrase>;
	}

	export enum SentimentType { POSITIVE = 0, NEGATIVE = 1, NEUTRAL = 2, MIXED = 3 }


	/**Describes the level of confidence that Amazon Comprehend has in the accuracy of its detection of sentiments. */
	export interface SentimentScore {
		Positive?: number;
		Negative?: number;
		Neutral?: number;
		Mixed?: number;
	}


	/**The result of calling the operation. The operation returns one object for each document that is successfully processed by the operation. */
	export interface BatchDetectSentimentItemResult {
		Index?: number;
		Sentiment?: BatchDetectSentimentItemResultSentiment;

		/**Describes the level of confidence that Amazon Comprehend has in the accuracy of its detection of sentiments. */
		SentimentScore?: SentimentScore;
	}

	export enum BatchDetectSentimentItemResultSentiment { POSITIVE = 0, NEGATIVE = 1, NEUTRAL = 2, MIXED = 3 }


	/**The result of calling the operation. The operation returns one object that is successfully processed by the operation. */
	export interface BatchDetectSyntaxItemResult {
		Index?: number;
		SyntaxTokens?: Array<SyntaxToken>;
	}

	export enum SyntaxLanguageCode { en = 0, es = 1, fr = 2, de = 3, it = 4, pt = 5 }


	/**Describes an error that occurred while processing a document in a batch. The operation returns on <code>BatchItemError</code> object for each document that contained an error. */
	export interface BatchItemError {
		Index?: number;
		ErrorCode?: string;
		ErrorMessage?: string;
	}


	/**Describes the result metrics for the test data associated with an documentation classifier. */
	export interface ClassifierEvaluationMetrics {
		Accuracy?: number;
		Precision?: number;
		Recall?: number;
		F1Score?: number;
		MicroPrecision?: number;
		MicroRecall?: number;
		MicroF1Score?: number;
		HammingLoss?: number;
	}


	/**Provides information about a document classifier. */
	export interface ClassifierMetadata {
		NumberOfLabels?: number;
		NumberOfTrainedDocuments?: number;
		NumberOfTestDocuments?: number;

		/**Describes the result metrics for the test data associated with an documentation classifier. */
		EvaluationMetrics?: ClassifierEvaluationMetrics;
	}


	/**<p>The input properties for training a document classifier. </p> <p>For more information on how the input file is formatted, see <a>how-document-classification-training-data</a>. </p> */
	export interface DocumentClassifierInputDataConfig {
		S3Uri: string;
		LabelDelimiter?: string;
	}


	/**Provides output results configuration parameters for custom classifier jobs.  */
	export interface DocumentClassifierOutputDataConfig {
		S3Uri?: string;
		KmsKeyId?: string;
	}


	/** Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>.  */
	export interface VpcConfig {
		SecurityGroupIds: Array<SecurityGroupId>;
		Subnets: Array<SubnetId>;
	}

	export enum DocumentClassifierMode { MULTI_CLASS = 0, MULTI_LABEL = 1 }


	/**Specifies the format and location of the input data. */
	export interface EntityRecognizerInputDataConfig {
		EntityTypes: Array<EntityTypesListItem>;

		/**Describes the training documents submitted with an entity recognizer. */
		Documents: EntityRecognizerDocuments;

		/**Describes the annotations associated with a entity recognizer. */
		Annotations?: EntityRecognizerAnnotations;

		/**Describes the entity recognizer submitted with an entity recognizer. */
		EntityList?: EntityRecognizerEntityList;
	}


	/**Provides information about a document classification job. */
	export interface DocumentClassificationJobProperties {
		JobId?: string;
		JobName?: string;
		JobStatus?: DocumentClassificationJobPropertiesJobStatus;
		Message?: string;
		SubmitTime?: Date;
		EndTime?: Date;
		DocumentClassifierArn?: string;

		/**The input properties for a topic detection job. */
		InputDataConfig?: InputDataConfig;

		/**<p>Provides configuration parameters for the output of topic detection jobs.</p> <p/> */
		OutputDataConfig?: OutputDataConfig;
		DataAccessRoleArn?: string;
		VolumeKmsKeyId?: string;

		/**Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. */
		VpcConfig?: VpcConfig;
	}

	export enum DocumentClassificationJobPropertiesJobStatus { SUBMITTED = 0, IN_PROGRESS = 1, COMPLETED = 2, FAILED = 3, STOP_REQUESTED = 4, STOPPED = 5 }


	/**Provides information about a document classifier. */
	export interface DocumentClassifierProperties {
		DocumentClassifierArn?: string;
		LanguageCode?: DocumentClassifierPropertiesLanguageCode;
		Status?: DocumentClassifierPropertiesStatus;
		Message?: string;
		SubmitTime?: Date;
		EndTime?: Date;
		TrainingStartTime?: Date;
		TrainingEndTime?: Date;

		/**<p>The input properties for training a document classifier. </p> <p>For more information on how the input file is formatted, see <a>how-document-classification-training-data</a>. </p> */
		InputDataConfig?: DocumentClassifierInputDataConfig;

		/**Provides output results configuration parameters for custom classifier jobs. */
		OutputDataConfig?: DocumentClassifierOutputDataConfig;

		/**Provides information about a document classifier. */
		ClassifierMetadata?: ClassifierMetadata;
		DataAccessRoleArn?: string;
		VolumeKmsKeyId?: string;

		/**Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. */
		VpcConfig?: VpcConfig;
		Mode?: DocumentClassifierPropertiesMode;
	}

	export enum DocumentClassifierPropertiesLanguageCode { en = 0, es = 1, fr = 2, de = 3, it = 4, pt = 5, ar = 6, hi = 7, ja = 8, ko = 9, zh = 10, zh-TW = 11 }

	export enum DocumentClassifierPropertiesStatus { SUBMITTED = 0, TRAINING = 1, DELETING = 2, STOP_REQUESTED = 3, STOPPED = 4, IN_ERROR = 5, TRAINED = 6 }

	export enum DocumentClassifierPropertiesMode { MULTI_CLASS = 0, MULTI_LABEL = 1 }


	/**Provides information about a dominant language detection job. */
	export interface DominantLanguageDetectionJobProperties {
		JobId?: string;
		JobName?: string;
		JobStatus?: DominantLanguageDetectionJobPropertiesJobStatus;
		Message?: string;
		SubmitTime?: Date;
		EndTime?: Date;

		/**The input properties for a topic detection job. */
		InputDataConfig?: InputDataConfig;

		/**<p>Provides configuration parameters for the output of topic detection jobs.</p> <p/> */
		OutputDataConfig?: OutputDataConfig;
		DataAccessRoleArn?: string;
		VolumeKmsKeyId?: string;

		/**Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. */
		VpcConfig?: VpcConfig;
	}

	export enum DominantLanguageDetectionJobPropertiesJobStatus { SUBMITTED = 0, IN_PROGRESS = 1, COMPLETED = 2, FAILED = 3, STOP_REQUESTED = 4, STOPPED = 5 }


	/**Specifies information about the specified endpoint. */
	export interface EndpointProperties {
		EndpointArn?: string;
		Status?: EndpointPropertiesStatus;
		Message?: string;
		ModelArn?: string;
		DesiredInferenceUnits?: number;
		CurrentInferenceUnits?: number;
		CreationTime?: Date;
		LastModifiedTime?: Date;
	}

	export enum EndpointPropertiesStatus { CREATING = 0, DELETING = 1, FAILED = 2, IN_SERVICE = 3, UPDATING = 4 }


	/**Provides information about an entities detection job. */
	export interface EntitiesDetectionJobProperties {
		JobId?: string;
		JobName?: string;
		JobStatus?: EntitiesDetectionJobPropertiesJobStatus;
		Message?: string;
		SubmitTime?: Date;
		EndTime?: Date;
		EntityRecognizerArn?: string;

		/**The input properties for a topic detection job. */
		InputDataConfig?: InputDataConfig;

		/**<p>Provides configuration parameters for the output of topic detection jobs.</p> <p/> */
		OutputDataConfig?: OutputDataConfig;
		LanguageCode?: EntitiesDetectionJobPropertiesLanguageCode;
		DataAccessRoleArn?: string;
		VolumeKmsKeyId?: string;

		/**Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. */
		VpcConfig?: VpcConfig;
	}

	export enum EntitiesDetectionJobPropertiesJobStatus { SUBMITTED = 0, IN_PROGRESS = 1, COMPLETED = 2, FAILED = 3, STOP_REQUESTED = 4, STOPPED = 5 }

	export enum EntitiesDetectionJobPropertiesLanguageCode { en = 0, es = 1, fr = 2, de = 3, it = 4, pt = 5, ar = 6, hi = 7, ja = 8, ko = 9, zh = 10, zh-TW = 11 }


	/**Describes information about an entity recognizer. */
	export interface EntityRecognizerProperties {
		EntityRecognizerArn?: string;
		LanguageCode?: EntityRecognizerPropertiesLanguageCode;
		Status?: EntityRecognizerPropertiesStatus;
		Message?: string;
		SubmitTime?: Date;
		EndTime?: Date;
		TrainingStartTime?: Date;
		TrainingEndTime?: Date;

		/**Specifies the format and location of the input data. */
		InputDataConfig?: EntityRecognizerInputDataConfig;

		/**Detailed information about an entity recognizer. */
		RecognizerMetadata?: EntityRecognizerMetadata;
		DataAccessRoleArn?: string;
		VolumeKmsKeyId?: string;

		/**Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. */
		VpcConfig?: VpcConfig;
	}

	export enum EntityRecognizerPropertiesLanguageCode { en = 0, es = 1, fr = 2, de = 3, it = 4, pt = 5, ar = 6, hi = 7, ja = 8, ko = 9, zh = 10, zh-TW = 11 }

	export enum EntityRecognizerPropertiesStatus { SUBMITTED = 0, TRAINING = 1, DELETING = 2, STOP_REQUESTED = 3, STOPPED = 4, IN_ERROR = 5, TRAINED = 6 }


	/**Provides information about a key phrases detection job. */
	export interface KeyPhrasesDetectionJobProperties {
		JobId?: string;
		JobName?: string;
		JobStatus?: KeyPhrasesDetectionJobPropertiesJobStatus;
		Message?: string;
		SubmitTime?: Date;
		EndTime?: Date;

		/**The input properties for a topic detection job. */
		InputDataConfig?: InputDataConfig;

		/**<p>Provides configuration parameters for the output of topic detection jobs.</p> <p/> */
		OutputDataConfig?: OutputDataConfig;
		LanguageCode?: KeyPhrasesDetectionJobPropertiesLanguageCode;
		DataAccessRoleArn?: string;
		VolumeKmsKeyId?: string;

		/**Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. */
		VpcConfig?: VpcConfig;
	}

	export enum KeyPhrasesDetectionJobPropertiesJobStatus { SUBMITTED = 0, IN_PROGRESS = 1, COMPLETED = 2, FAILED = 3, STOP_REQUESTED = 4, STOPPED = 5 }

	export enum KeyPhrasesDetectionJobPropertiesLanguageCode { en = 0, es = 1, fr = 2, de = 3, it = 4, pt = 5, ar = 6, hi = 7, ja = 8, ko = 9, zh = 10, zh-TW = 11 }


	/**Provides information about a sentiment detection job. */
	export interface SentimentDetectionJobProperties {
		JobId?: string;
		JobName?: string;
		JobStatus?: SentimentDetectionJobPropertiesJobStatus;
		Message?: string;
		SubmitTime?: Date;
		EndTime?: Date;

		/**The input properties for a topic detection job. */
		InputDataConfig?: InputDataConfig;

		/**<p>Provides configuration parameters for the output of topic detection jobs.</p> <p/> */
		OutputDataConfig?: OutputDataConfig;
		LanguageCode?: SentimentDetectionJobPropertiesLanguageCode;
		DataAccessRoleArn?: string;
		VolumeKmsKeyId?: string;

		/**Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. */
		VpcConfig?: VpcConfig;
	}

	export enum SentimentDetectionJobPropertiesJobStatus { SUBMITTED = 0, IN_PROGRESS = 1, COMPLETED = 2, FAILED = 3, STOP_REQUESTED = 4, STOPPED = 5 }

	export enum SentimentDetectionJobPropertiesLanguageCode { en = 0, es = 1, fr = 2, de = 3, it = 4, pt = 5, ar = 6, hi = 7, ja = 8, ko = 9, zh = 10, zh-TW = 11 }


	/**Provides information about a topic detection job. */
	export interface TopicsDetectionJobProperties {
		JobId?: string;
		JobName?: string;
		JobStatus?: TopicsDetectionJobPropertiesJobStatus;
		Message?: string;
		SubmitTime?: Date;
		EndTime?: Date;

		/**The input properties for a topic detection job. */
		InputDataConfig?: InputDataConfig;

		/**<p>Provides configuration parameters for the output of topic detection jobs.</p> <p/> */
		OutputDataConfig?: OutputDataConfig;
		NumberOfTopics?: number;
		DataAccessRoleArn?: string;
		VolumeKmsKeyId?: string;

		/**Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. */
		VpcConfig?: VpcConfig;
	}

	export enum TopicsDetectionJobPropertiesJobStatus { SUBMITTED = 0, IN_PROGRESS = 1, COMPLETED = 2, FAILED = 3, STOP_REQUESTED = 4, STOPPED = 5 }


	/**Specifies the class that categorizes the document being analyzed */
	export interface DocumentClass {
		Name?: string;
		Score?: number;
	}

	export enum JobStatus { SUBMITTED = 0, IN_PROGRESS = 1, COMPLETED = 2, FAILED = 3, STOP_REQUESTED = 4, STOPPED = 5 }


	/**Provides information for filtering a list of document classification jobs. For more information, see the operation. You can provide only one filter parameter in each request. */
	export interface DocumentClassificationJobFilter {
		JobName?: string;
		JobStatus?: DocumentClassificationJobFilterJobStatus;
		SubmitTimeBefore?: Date;
		SubmitTimeAfter?: Date;
	}

	export enum DocumentClassificationJobFilterJobStatus { SUBMITTED = 0, IN_PROGRESS = 1, COMPLETED = 2, FAILED = 3, STOP_REQUESTED = 4, STOPPED = 5 }


	/**The input properties for a topic detection job. */
	export interface InputDataConfig {
		S3Uri: string;
		InputFormat?: InputDataConfigInputFormat;
	}

	export enum InputDataConfigInputFormat { ONE_DOC_PER_FILE = 0, ONE_DOC_PER_LINE = 1 }


	/**<p>Provides configuration parameters for the output of topic detection jobs.</p> <p/> */
	export interface OutputDataConfig {
		S3Uri: string;
		KmsKeyId?: string;
	}

	export enum ModelStatus { SUBMITTED = 0, TRAINING = 1, DELETING = 2, STOP_REQUESTED = 3, STOPPED = 4, IN_ERROR = 5, TRAINED = 6 }


	/**Provides information for filtering a list of document classifiers. You can only specify one filtering parameter in a request. For more information, see the operation. */
	export interface DocumentClassifierFilter {
		Status?: DocumentClassifierFilterStatus;
		SubmitTimeBefore?: Date;
		SubmitTimeAfter?: Date;
	}

	export enum DocumentClassifierFilterStatus { SUBMITTED = 0, TRAINING = 1, DELETING = 2, STOP_REQUESTED = 3, STOPPED = 4, IN_ERROR = 5, TRAINED = 6 }


	/**Specifies one of the label or labels that categorize the document being analyzed. */
	export interface DocumentLabel {
		Name?: string;
		Score?: number;
	}


	/**Returns the code for the dominant language in the input text and the level of confidence that Amazon Comprehend has in the accuracy of the detection. */
	export interface DominantLanguage {
		LanguageCode?: string;
		Score?: number;
	}


	/**Provides information for filtering a list of dominant language detection jobs. For more information, see the operation. */
	export interface DominantLanguageDetectionJobFilter {
		JobName?: string;
		JobStatus?: DominantLanguageDetectionJobFilterJobStatus;
		SubmitTimeBefore?: Date;
		SubmitTimeAfter?: Date;
	}

	export enum DominantLanguageDetectionJobFilterJobStatus { SUBMITTED = 0, IN_PROGRESS = 1, COMPLETED = 2, FAILED = 3, STOP_REQUESTED = 4, STOPPED = 5 }

	export enum EndpointStatus { CREATING = 0, DELETING = 1, FAILED = 2, IN_SERVICE = 3, UPDATING = 4 }


	/**The filter used to determine which endpoints are are returned. You can filter jobs on their name, model, status, or the date and time that they were created. You can only set one filter at a time.  */
	export interface EndpointFilter {
		ModelArn?: string;
		Status?: EndpointFilterStatus;
		CreationTimeBefore?: Date;
		CreationTimeAfter?: Date;
	}

	export enum EndpointFilterStatus { CREATING = 0, DELETING = 1, FAILED = 2, IN_SERVICE = 3, UPDATING = 4 }


	/**Provides information for filtering a list of dominant language detection jobs. For more information, see the operation. */
	export interface EntitiesDetectionJobFilter {
		JobName?: string;
		JobStatus?: EntitiesDetectionJobFilterJobStatus;
		SubmitTimeBefore?: Date;
		SubmitTimeAfter?: Date;
	}

	export enum EntitiesDetectionJobFilterJobStatus { SUBMITTED = 0, IN_PROGRESS = 1, COMPLETED = 2, FAILED = 3, STOP_REQUESTED = 4, STOPPED = 5 }

	export enum EntityType { PERSON = 0, LOCATION = 1, ORGANIZATION = 2, COMMERCIAL_ITEM = 3, EVENT = 4, DATE = 5, QUANTITY = 6, TITLE = 7, OTHER = 8 }


	/**<p>Provides information about an entity. </p> <p> </p> */
	export interface Entity {
		Score?: number;
		Type?: EntityType;
		Text?: string;
		BeginOffset?: number;
		EndOffset?: number;
	}

	export enum EntityType { PERSON = 0, LOCATION = 1, ORGANIZATION = 2, COMMERCIAL_ITEM = 3, EVENT = 4, DATE = 5, QUANTITY = 6, TITLE = 7, OTHER = 8 }


	/**Describes the annotations associated with a entity recognizer. */
	export interface EntityRecognizerAnnotations {
		S3Uri: string;
	}


	/**Describes the training documents submitted with an entity recognizer. */
	export interface EntityRecognizerDocuments {
		S3Uri: string;
	}


	/**Describes the entity recognizer submitted with an entity recognizer. */
	export interface EntityRecognizerEntityList {
		S3Uri: string;
	}


	/**Detailed information about the accuracy of an entity recognizer.  */
	export interface EntityRecognizerEvaluationMetrics {
		Precision?: number;
		Recall?: number;
		F1Score?: number;
	}


	/**Provides information for filtering a list of entity recognizers. You can only specify one filtering parameter in a request. For more information, see the operation./&gt; */
	export interface EntityRecognizerFilter {
		Status?: EntityRecognizerFilterStatus;
		SubmitTimeBefore?: Date;
		SubmitTimeAfter?: Date;
	}

	export enum EntityRecognizerFilterStatus { SUBMITTED = 0, TRAINING = 1, DELETING = 2, STOP_REQUESTED = 3, STOPPED = 4, IN_ERROR = 5, TRAINED = 6 }


	/**Detailed information about an entity recognizer. */
	export interface EntityRecognizerMetadata {
		NumberOfTrainedDocuments?: number;
		NumberOfTestDocuments?: number;

		/**Detailed information about the accuracy of an entity recognizer. */
		EvaluationMetrics?: EntityRecognizerEvaluationMetrics;
		EntityTypes?: Array<EntityRecognizerMetadataEntityTypesListItem>;
	}


	/**Individual item from the list of entity types in the metadata of an entity recognizer. */
	export interface EntityRecognizerMetadataEntityTypesListItem {
		Type?: string;

		/**Detailed information about the accuracy of an entity recognizer for a specific entity type. */
		EvaluationMetrics?: EntityTypesEvaluationMetrics;
		NumberOfTrainMentions?: number;
	}


	/**Detailed information about the accuracy of an entity recognizer for a specific entity type.  */
	export interface EntityTypesEvaluationMetrics {
		Precision?: number;
		Recall?: number;
		F1Score?: number;
	}


	/**Information about an individual item on a list of entity types. */
	export interface EntityTypesListItem {
		Type: string;
	}

	export enum InputFormat { ONE_DOC_PER_FILE = 0, ONE_DOC_PER_LINE = 1 }


	/**Describes a key noun phrase. */
	export interface KeyPhrase {
		Score?: number;
		Text?: string;
		BeginOffset?: number;
		EndOffset?: number;
	}


	/**Provides information for filtering a list of dominant language detection jobs. For more information, see the operation. */
	export interface KeyPhrasesDetectionJobFilter {
		JobName?: string;
		JobStatus?: KeyPhrasesDetectionJobFilterJobStatus;
		SubmitTimeBefore?: Date;
		SubmitTimeAfter?: Date;
	}

	export enum KeyPhrasesDetectionJobFilterJobStatus { SUBMITTED = 0, IN_PROGRESS = 1, COMPLETED = 2, FAILED = 3, STOP_REQUESTED = 4, STOPPED = 5 }


	/**Represents a work in the input text that was recognized and assigned a part of speech. There is one syntax token record for each word in the source text. */
	export interface SyntaxToken {
		TokenId?: number;
		Text?: string;
		BeginOffset?: number;
		EndOffset?: number;

		/**Identifies the part of speech represented by the token and gives the confidence that Amazon Comprehend has that the part of speech was correctly identified. For more information about the parts of speech that Amazon Comprehend can identify, see <a>how-syntax</a>. */
		PartOfSpeech?: PartOfSpeechTag;
	}


	/**Provides information for filtering a list of dominant language detection jobs. For more information, see the operation. */
	export interface SentimentDetectionJobFilter {
		JobName?: string;
		JobStatus?: SentimentDetectionJobFilterJobStatus;
		SubmitTimeBefore?: Date;
		SubmitTimeAfter?: Date;
	}

	export enum SentimentDetectionJobFilterJobStatus { SUBMITTED = 0, IN_PROGRESS = 1, COMPLETED = 2, FAILED = 3, STOP_REQUESTED = 4, STOPPED = 5 }


	/**Provides information for filtering topic detection jobs. For more information, see . */
	export interface TopicsDetectionJobFilter {
		JobName?: string;
		JobStatus?: TopicsDetectionJobFilterJobStatus;
		SubmitTimeBefore?: Date;
		SubmitTimeAfter?: Date;
	}

	export enum TopicsDetectionJobFilterJobStatus { SUBMITTED = 0, IN_PROGRESS = 1, COMPLETED = 2, FAILED = 3, STOP_REQUESTED = 4, STOPPED = 5 }

	export enum PartOfSpeechTagType { ADJ = 0, ADP = 1, ADV = 2, AUX = 3, CONJ = 4, CCONJ = 5, DET = 6, INTJ = 7, NOUN = 8, NUM = 9, O = 10, PART = 11, PRON = 12, PROPN = 13, PUNCT = 14, SCONJ = 15, SYM = 16, VERB = 17 }


	/**Identifies the part of speech represented by the token and gives the confidence that Amazon Comprehend has that the part of speech was correctly identified. For more information about the parts of speech that Amazon Comprehend can identify, see <a>how-syntax</a>. */
	export interface PartOfSpeechTag {
		Tag?: PartOfSpeechTagTag;
		Score?: number;
	}

	export enum PartOfSpeechTagTag { ADJ = 0, ADP = 1, ADV = 2, AUX = 3, CONJ = 4, CCONJ = 5, DET = 6, INTJ = 7, NOUN = 8, NUM = 9, O = 10, PART = 11, PRON = 12, PROPN = 13, PUNCT = 14, SCONJ = 15, SYM = 16, VERB = 17 }


	/**A key-value pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with the key-value pair ‘Department’:’Sales’ might be added to a resource to indicate its use by a particular department.  */
	export interface Tag {
		Key: string;
		Value?: string;
	}

	export class DemoClient {
		constructor(private baseUri: string = HttpClient.locationOrigin, private httpClient: HttpClientBase = new HttpClient(), private error?: (xhr: JQueryXHR, ajaxOptions: string, thrown: string) => any, private statusCode?: { [key: string]: any; }) {
		}

		/**
		 * Determines the dominant language of the input text for a batch of documents. For a list of languages that Amazon Comprehend can detect, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-languages.html">Amazon Comprehend Supported Languages</a>.
		 * Post /#X-Amz-Target=Comprehend_20171127.BatchDetectDominantLanguage
		 * @return {BatchDetectDominantLanguageResponse} Success
		 */
		BatchDetectDominantLanguage(callback: (data : BatchDetectDominantLanguageResponse) => any, requestBody: BatchDetectDominantLanguageRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=Comprehend_20171127.BatchDetectDominantLanguage', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Inspects the text of a batch of documents for named entities and returns information about them. For more information about named entities, see <a>how-entities</a>
		 * Post /#X-Amz-Target=Comprehend_20171127.BatchDetectEntities
		 * @return {BatchDetectEntitiesResponse} Success
		 */
		BatchDetectEntities(callback: (data : BatchDetectEntitiesResponse) => any, requestBody: BatchDetectEntitiesRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=Comprehend_20171127.BatchDetectEntities', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Detects the key noun phrases found in a batch of documents.
		 * Post /#X-Amz-Target=Comprehend_20171127.BatchDetectKeyPhrases
		 * @return {BatchDetectKeyPhrasesResponse} Success
		 */
		BatchDetectKeyPhrases(callback: (data : BatchDetectKeyPhrasesResponse) => any, requestBody: BatchDetectKeyPhrasesRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=Comprehend_20171127.BatchDetectKeyPhrases', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Inspects a batch of documents and returns an inference of the prevailing sentiment, <code>POSITIVE</code>, <code>NEUTRAL</code>, <code>MIXED</code>, or <code>NEGATIVE</code>, in each one.
		 * Post /#X-Amz-Target=Comprehend_20171127.BatchDetectSentiment
		 * @return {BatchDetectSentimentResponse} Success
		 */
		BatchDetectSentiment(callback: (data : BatchDetectSentimentResponse) => any, requestBody: BatchDetectSentimentRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=Comprehend_20171127.BatchDetectSentiment', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Inspects the text of a batch of documents for the syntax and part of speech of the words in the document and returns information about them. For more information, see <a>how-syntax</a>.
		 * Post /#X-Amz-Target=Comprehend_20171127.BatchDetectSyntax
		 * @return {BatchDetectSyntaxResponse} Success
		 */
		BatchDetectSyntax(callback: (data : BatchDetectSyntaxResponse) => any, requestBody: BatchDetectSyntaxRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=Comprehend_20171127.BatchDetectSyntax', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Creates a new document classification request to analyze a single document in real-time, using a previously created and trained custom model and an endpoint.
		 * Post /#X-Amz-Target=Comprehend_20171127.ClassifyDocument
		 * @return {ClassifyDocumentResponse} Success
		 */
		ClassifyDocument(callback: (data : ClassifyDocumentResponse) => any, requestBody: ClassifyDocumentRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=Comprehend_20171127.ClassifyDocument', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Creates a new document classifier that you can use to categorize documents. To create a classifier you provide a set of training documents that labeled with the categories that you want to use. After the classifier is trained you can use it to categorize a set of labeled documents into the categories. For more information, see <a>how-document-classification</a>.
		 * Post /#X-Amz-Target=Comprehend_20171127.CreateDocumentClassifier
		 * @return {CreateDocumentClassifierResponse} Success
		 */
		CreateDocumentClassifier(callback: (data : CreateDocumentClassifierResponse) => any, requestBody: CreateDocumentClassifierRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=Comprehend_20171127.CreateDocumentClassifier', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Creates a model-specific endpoint for synchronous inference for a previously trained custom model
		 * Post /#X-Amz-Target=Comprehend_20171127.CreateEndpoint
		 * @return {CreateEndpointResponse} Success
		 */
		CreateEndpoint(callback: (data : CreateEndpointResponse) => any, requestBody: CreateEndpointRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=Comprehend_20171127.CreateEndpoint', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Creates an entity recognizer using submitted files. After your <code>CreateEntityRecognizer</code> request is submitted, you can check job status using the API.
		 * Post /#X-Amz-Target=Comprehend_20171127.CreateEntityRecognizer
		 * @return {CreateEntityRecognizerResponse} Success
		 */
		CreateEntityRecognizer(callback: (data : CreateEntityRecognizerResponse) => any, requestBody: CreateEntityRecognizerRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=Comprehend_20171127.CreateEntityRecognizer', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Deletes a previously created document classifier</p> <p>Only those classifiers that are in terminated states (IN_ERROR, TRAINED) will be deleted. If an active inference job is using the model, a <code>ResourceInUseException</code> will be returned.</p> <p>This is an asynchronous action that puts the classifier into a DELETING state, and it is then removed by a background job. Once removed, the classifier disappears from your account and is no longer available for use. </p>
		 * Post /#X-Amz-Target=Comprehend_20171127.DeleteDocumentClassifier
		 * @return {DeleteDocumentClassifierResponse} Success
		 */
		DeleteDocumentClassifier(callback: (data : DeleteDocumentClassifierResponse) => any, requestBody: DeleteDocumentClassifierRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=Comprehend_20171127.DeleteDocumentClassifier', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Deletes a model-specific endpoint for a previously-trained custom model. All endpoints must be deleted in order for the model to be deleted.
		 * Post /#X-Amz-Target=Comprehend_20171127.DeleteEndpoint
		 * @return {DeleteEndpointResponse} Success
		 */
		DeleteEndpoint(callback: (data : DeleteEndpointResponse) => any, requestBody: DeleteEndpointRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=Comprehend_20171127.DeleteEndpoint', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Deletes an entity recognizer.</p> <p>Only those recognizers that are in terminated states (IN_ERROR, TRAINED) will be deleted. If an active inference job is using the model, a <code>ResourceInUseException</code> will be returned.</p> <p>This is an asynchronous action that puts the recognizer into a DELETING state, and it is then removed by a background job. Once removed, the recognizer disappears from your account and is no longer available for use. </p>
		 * Post /#X-Amz-Target=Comprehend_20171127.DeleteEntityRecognizer
		 * @return {DeleteEntityRecognizerResponse} Success
		 */
		DeleteEntityRecognizer(callback: (data : DeleteEntityRecognizerResponse) => any, requestBody: DeleteEntityRecognizerRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=Comprehend_20171127.DeleteEntityRecognizer', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Gets the properties associated with a document classification job. Use this operation to get the status of a classification job.
		 * Post /#X-Amz-Target=Comprehend_20171127.DescribeDocumentClassificationJob
		 * @return {DescribeDocumentClassificationJobResponse} Success
		 */
		DescribeDocumentClassificationJob(callback: (data : DescribeDocumentClassificationJobResponse) => any, requestBody: DescribeDocumentClassificationJobRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=Comprehend_20171127.DescribeDocumentClassificationJob', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Gets the properties associated with a document classifier.
		 * Post /#X-Amz-Target=Comprehend_20171127.DescribeDocumentClassifier
		 * @return {DescribeDocumentClassifierResponse} Success
		 */
		DescribeDocumentClassifier(callback: (data : DescribeDocumentClassifierResponse) => any, requestBody: DescribeDocumentClassifierRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=Comprehend_20171127.DescribeDocumentClassifier', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Gets the properties associated with a dominant language detection job. Use this operation to get the status of a detection job.
		 * Post /#X-Amz-Target=Comprehend_20171127.DescribeDominantLanguageDetectionJob
		 * @return {DescribeDominantLanguageDetectionJobResponse} Success
		 */
		DescribeDominantLanguageDetectionJob(callback: (data : DescribeDominantLanguageDetectionJobResponse) => any, requestBody: DescribeDominantLanguageDetectionJobRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=Comprehend_20171127.DescribeDominantLanguageDetectionJob', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Gets the properties associated with a specific endpoint. Use this operation to get the status of an endpoint.
		 * Post /#X-Amz-Target=Comprehend_20171127.DescribeEndpoint
		 * @return {DescribeEndpointResponse} Success
		 */
		DescribeEndpoint(callback: (data : DescribeEndpointResponse) => any, requestBody: DescribeEndpointRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=Comprehend_20171127.DescribeEndpoint', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Gets the properties associated with an entities detection job. Use this operation to get the status of a detection job.
		 * Post /#X-Amz-Target=Comprehend_20171127.DescribeEntitiesDetectionJob
		 * @return {DescribeEntitiesDetectionJobResponse} Success
		 */
		DescribeEntitiesDetectionJob(callback: (data : DescribeEntitiesDetectionJobResponse) => any, requestBody: DescribeEntitiesDetectionJobRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=Comprehend_20171127.DescribeEntitiesDetectionJob', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Provides details about an entity recognizer including status, S3 buckets containing training data, recognizer metadata, metrics, and so on.
		 * Post /#X-Amz-Target=Comprehend_20171127.DescribeEntityRecognizer
		 * @return {DescribeEntityRecognizerResponse} Success
		 */
		DescribeEntityRecognizer(callback: (data : DescribeEntityRecognizerResponse) => any, requestBody: DescribeEntityRecognizerRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=Comprehend_20171127.DescribeEntityRecognizer', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Gets the properties associated with a key phrases detection job. Use this operation to get the status of a detection job.
		 * Post /#X-Amz-Target=Comprehend_20171127.DescribeKeyPhrasesDetectionJob
		 * @return {DescribeKeyPhrasesDetectionJobResponse} Success
		 */
		DescribeKeyPhrasesDetectionJob(callback: (data : DescribeKeyPhrasesDetectionJobResponse) => any, requestBody: DescribeKeyPhrasesDetectionJobRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=Comprehend_20171127.DescribeKeyPhrasesDetectionJob', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Gets the properties associated with a sentiment detection job. Use this operation to get the status of a detection job.
		 * Post /#X-Amz-Target=Comprehend_20171127.DescribeSentimentDetectionJob
		 * @return {DescribeSentimentDetectionJobResponse} Success
		 */
		DescribeSentimentDetectionJob(callback: (data : DescribeSentimentDetectionJobResponse) => any, requestBody: DescribeSentimentDetectionJobRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=Comprehend_20171127.DescribeSentimentDetectionJob', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Gets the properties associated with a topic detection job. Use this operation to get the status of a detection job.
		 * Post /#X-Amz-Target=Comprehend_20171127.DescribeTopicsDetectionJob
		 * @return {DescribeTopicsDetectionJobResponse} Success
		 */
		DescribeTopicsDetectionJob(callback: (data : DescribeTopicsDetectionJobResponse) => any, requestBody: DescribeTopicsDetectionJobRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=Comprehend_20171127.DescribeTopicsDetectionJob', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Determines the dominant language of the input text. For a list of languages that Amazon Comprehend can detect, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-languages.html">Amazon Comprehend Supported Languages</a>.
		 * Post /#X-Amz-Target=Comprehend_20171127.DetectDominantLanguage
		 * @return {DetectDominantLanguageResponse} Success
		 */
		DetectDominantLanguage(callback: (data : DetectDominantLanguageResponse) => any, requestBody: DetectDominantLanguageRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=Comprehend_20171127.DetectDominantLanguage', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Inspects text for named entities, and returns information about them. For more information, about named entities, see <a>how-entities</a>.
		 * Post /#X-Amz-Target=Comprehend_20171127.DetectEntities
		 * @return {DetectEntitiesResponse} Success
		 */
		DetectEntities(callback: (data : DetectEntitiesResponse) => any, requestBody: DetectEntitiesRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=Comprehend_20171127.DetectEntities', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Detects the key noun phrases found in the text.
		 * Post /#X-Amz-Target=Comprehend_20171127.DetectKeyPhrases
		 * @return {DetectKeyPhrasesResponse} Success
		 */
		DetectKeyPhrases(callback: (data : DetectKeyPhrasesResponse) => any, requestBody: DetectKeyPhrasesRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=Comprehend_20171127.DetectKeyPhrases', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Inspects text and returns an inference of the prevailing sentiment (<code>POSITIVE</code>, <code>NEUTRAL</code>, <code>MIXED</code>, or <code>NEGATIVE</code>).
		 * Post /#X-Amz-Target=Comprehend_20171127.DetectSentiment
		 * @return {DetectSentimentResponse} Success
		 */
		DetectSentiment(callback: (data : DetectSentimentResponse) => any, requestBody: DetectSentimentRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=Comprehend_20171127.DetectSentiment', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Inspects text for syntax and the part of speech of words in the document. For more information, <a>how-syntax</a>.
		 * Post /#X-Amz-Target=Comprehend_20171127.DetectSyntax
		 * @return {DetectSyntaxResponse} Success
		 */
		DetectSyntax(callback: (data : DetectSyntaxResponse) => any, requestBody: DetectSyntaxRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=Comprehend_20171127.DetectSyntax', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Gets a list of the documentation classification jobs that you have submitted.
		 * Post /#X-Amz-Target=Comprehend_20171127.ListDocumentClassificationJobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDocumentClassificationJobsResponse} Success
		 */
		ListDocumentClassificationJobs(MaxResults: string, NextToken: string, callback: (data : ListDocumentClassificationJobsResponse) => any, requestBody: ListDocumentClassificationJobsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=Comprehend_20171127.ListDocumentClassificationJobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Gets a list of the document classifiers that you have created.
		 * Post /#X-Amz-Target=Comprehend_20171127.ListDocumentClassifiers
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDocumentClassifiersResponse} Success
		 */
		ListDocumentClassifiers(MaxResults: string, NextToken: string, callback: (data : ListDocumentClassifiersResponse) => any, requestBody: ListDocumentClassifiersRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=Comprehend_20171127.ListDocumentClassifiers?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Gets a list of the dominant language detection jobs that you have submitted.
		 * Post /#X-Amz-Target=Comprehend_20171127.ListDominantLanguageDetectionJobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDominantLanguageDetectionJobsResponse} Success
		 */
		ListDominantLanguageDetectionJobs(MaxResults: string, NextToken: string, callback: (data : ListDominantLanguageDetectionJobsResponse) => any, requestBody: ListDominantLanguageDetectionJobsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=Comprehend_20171127.ListDominantLanguageDetectionJobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Gets a list of all existing endpoints that you've created.
		 * Post /#X-Amz-Target=Comprehend_20171127.ListEndpoints
		 * @return {ListEndpointsResponse} Success
		 */
		ListEndpoints(callback: (data : ListEndpointsResponse) => any, requestBody: ListEndpointsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=Comprehend_20171127.ListEndpoints', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Gets a list of the entity detection jobs that you have submitted.
		 * Post /#X-Amz-Target=Comprehend_20171127.ListEntitiesDetectionJobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListEntitiesDetectionJobsResponse} Success
		 */
		ListEntitiesDetectionJobs(MaxResults: string, NextToken: string, callback: (data : ListEntitiesDetectionJobsResponse) => any, requestBody: ListEntitiesDetectionJobsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=Comprehend_20171127.ListEntitiesDetectionJobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Gets a list of the properties of all entity recognizers that you created, including recognizers currently in training. Allows you to filter the list of recognizers based on criteria such as status and submission time. This call returns up to 500 entity recognizers in the list, with a default number of 100 recognizers in the list.</p> <p>The results of this list are not in any particular order. Please get the list and sort locally if needed.</p>
		 * Post /#X-Amz-Target=Comprehend_20171127.ListEntityRecognizers
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListEntityRecognizersResponse} Success
		 */
		ListEntityRecognizers(MaxResults: string, NextToken: string, callback: (data : ListEntityRecognizersResponse) => any, requestBody: ListEntityRecognizersRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=Comprehend_20171127.ListEntityRecognizers?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Get a list of key phrase detection jobs that you have submitted.
		 * Post /#X-Amz-Target=Comprehend_20171127.ListKeyPhrasesDetectionJobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListKeyPhrasesDetectionJobsResponse} Success
		 */
		ListKeyPhrasesDetectionJobs(MaxResults: string, NextToken: string, callback: (data : ListKeyPhrasesDetectionJobsResponse) => any, requestBody: ListKeyPhrasesDetectionJobsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=Comprehend_20171127.ListKeyPhrasesDetectionJobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Gets a list of sentiment detection jobs that you have submitted.
		 * Post /#X-Amz-Target=Comprehend_20171127.ListSentimentDetectionJobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListSentimentDetectionJobsResponse} Success
		 */
		ListSentimentDetectionJobs(MaxResults: string, NextToken: string, callback: (data : ListSentimentDetectionJobsResponse) => any, requestBody: ListSentimentDetectionJobsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=Comprehend_20171127.ListSentimentDetectionJobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Lists all tags associated with a given Amazon Comprehend resource.
		 * Post /#X-Amz-Target=Comprehend_20171127.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(callback: (data : ListTagsForResourceResponse) => any, requestBody: ListTagsForResourceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=Comprehend_20171127.ListTagsForResource', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Gets a list of the topic detection jobs that you have submitted.
		 * Post /#X-Amz-Target=Comprehend_20171127.ListTopicsDetectionJobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTopicsDetectionJobsResponse} Success
		 */
		ListTopicsDetectionJobs(MaxResults: string, NextToken: string, callback: (data : ListTopicsDetectionJobsResponse) => any, requestBody: ListTopicsDetectionJobsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=Comprehend_20171127.ListTopicsDetectionJobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Starts an asynchronous document classification job. Use the operation to track the progress of the job.
		 * Post /#X-Amz-Target=Comprehend_20171127.StartDocumentClassificationJob
		 * @return {StartDocumentClassificationJobResponse} Success
		 */
		StartDocumentClassificationJob(callback: (data : StartDocumentClassificationJobResponse) => any, requestBody: StartDocumentClassificationJobRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=Comprehend_20171127.StartDocumentClassificationJob', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Starts an asynchronous dominant language detection job for a collection of documents. Use the operation to track the status of a job.
		 * Post /#X-Amz-Target=Comprehend_20171127.StartDominantLanguageDetectionJob
		 * @return {StartDominantLanguageDetectionJobResponse} Success
		 */
		StartDominantLanguageDetectionJob(callback: (data : StartDominantLanguageDetectionJobResponse) => any, requestBody: StartDominantLanguageDetectionJobRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=Comprehend_20171127.StartDominantLanguageDetectionJob', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Starts an asynchronous entity detection job for a collection of documents. Use the operation to track the status of a job.</p> <p>This API can be used for either standard entity detection or custom entity recognition. In order to be used for custom entity recognition, the optional <code>EntityRecognizerArn</code> must be used in order to provide access to the recognizer being used to detect the custom entity.</p>
		 * Post /#X-Amz-Target=Comprehend_20171127.StartEntitiesDetectionJob
		 * @return {StartEntitiesDetectionJobResponse} Success
		 */
		StartEntitiesDetectionJob(callback: (data : StartEntitiesDetectionJobResponse) => any, requestBody: StartEntitiesDetectionJobRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=Comprehend_20171127.StartEntitiesDetectionJob', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Starts an asynchronous key phrase detection job for a collection of documents. Use the operation to track the status of a job.
		 * Post /#X-Amz-Target=Comprehend_20171127.StartKeyPhrasesDetectionJob
		 * @return {StartKeyPhrasesDetectionJobResponse} Success
		 */
		StartKeyPhrasesDetectionJob(callback: (data : StartKeyPhrasesDetectionJobResponse) => any, requestBody: StartKeyPhrasesDetectionJobRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=Comprehend_20171127.StartKeyPhrasesDetectionJob', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Starts an asynchronous sentiment detection job for a collection of documents. use the operation to track the status of a job.
		 * Post /#X-Amz-Target=Comprehend_20171127.StartSentimentDetectionJob
		 * @return {StartSentimentDetectionJobResponse} Success
		 */
		StartSentimentDetectionJob(callback: (data : StartSentimentDetectionJobResponse) => any, requestBody: StartSentimentDetectionJobRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=Comprehend_20171127.StartSentimentDetectionJob', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Starts an asynchronous topic detection job. Use the <code>DescribeTopicDetectionJob</code> operation to track the status of a job.
		 * Post /#X-Amz-Target=Comprehend_20171127.StartTopicsDetectionJob
		 * @return {StartTopicsDetectionJobResponse} Success
		 */
		StartTopicsDetectionJob(callback: (data : StartTopicsDetectionJobResponse) => any, requestBody: StartTopicsDetectionJobRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=Comprehend_20171127.StartTopicsDetectionJob', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Stops a dominant language detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code> the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>
		 * Post /#X-Amz-Target=Comprehend_20171127.StopDominantLanguageDetectionJob
		 * @return {StopDominantLanguageDetectionJobResponse} Success
		 */
		StopDominantLanguageDetectionJob(callback: (data : StopDominantLanguageDetectionJobResponse) => any, requestBody: StopDominantLanguageDetectionJobRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=Comprehend_20171127.StopDominantLanguageDetectionJob', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Stops an entities detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code> the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>
		 * Post /#X-Amz-Target=Comprehend_20171127.StopEntitiesDetectionJob
		 * @return {StopEntitiesDetectionJobResponse} Success
		 */
		StopEntitiesDetectionJob(callback: (data : StopEntitiesDetectionJobResponse) => any, requestBody: StopEntitiesDetectionJobRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=Comprehend_20171127.StopEntitiesDetectionJob', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Stops a key phrases detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code> the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>
		 * Post /#X-Amz-Target=Comprehend_20171127.StopKeyPhrasesDetectionJob
		 * @return {StopKeyPhrasesDetectionJobResponse} Success
		 */
		StopKeyPhrasesDetectionJob(callback: (data : StopKeyPhrasesDetectionJobResponse) => any, requestBody: StopKeyPhrasesDetectionJobRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=Comprehend_20171127.StopKeyPhrasesDetectionJob', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Stops a sentiment detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code> the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is be stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>
		 * Post /#X-Amz-Target=Comprehend_20171127.StopSentimentDetectionJob
		 * @return {StopSentimentDetectionJobResponse} Success
		 */
		StopSentimentDetectionJob(callback: (data : StopSentimentDetectionJobResponse) => any, requestBody: StopSentimentDetectionJobRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=Comprehend_20171127.StopSentimentDetectionJob', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Stops a document classifier training job while in progress.</p> <p>If the training job state is <code>TRAINING</code>, the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the training job completes before it can be stopped, it is put into the <code>TRAINED</code>; otherwise the training job is stopped and put into the <code>STOPPED</code> state and the service sends back an HTTP 200 response with an empty HTTP body. </p>
		 * Post /#X-Amz-Target=Comprehend_20171127.StopTrainingDocumentClassifier
		 * @return {StopTrainingDocumentClassifierResponse} Success
		 */
		StopTrainingDocumentClassifier(callback: (data : StopTrainingDocumentClassifierResponse) => any, requestBody: StopTrainingDocumentClassifierRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=Comprehend_20171127.StopTrainingDocumentClassifier', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Stops an entity recognizer training job while in progress.</p> <p>If the training job state is <code>TRAINING</code>, the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the training job completes before it can be stopped, it is put into the <code>TRAINED</code>; otherwise the training job is stopped and putted into the <code>STOPPED</code> state and the service sends back an HTTP 200 response with an empty HTTP body.</p>
		 * Post /#X-Amz-Target=Comprehend_20171127.StopTrainingEntityRecognizer
		 * @return {StopTrainingEntityRecognizerResponse} Success
		 */
		StopTrainingEntityRecognizer(callback: (data : StopTrainingEntityRecognizerResponse) => any, requestBody: StopTrainingEntityRecognizerRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=Comprehend_20171127.StopTrainingEntityRecognizer', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Associates a specific tag with an Amazon Comprehend resource. A tag is a key-value pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department.
		 * Post /#X-Amz-Target=Comprehend_20171127.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(callback: (data : TagResourceResponse) => any, requestBody: TagResourceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=Comprehend_20171127.TagResource', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Removes a specific tag associated with an Amazon Comprehend resource.
		 * Post /#X-Amz-Target=Comprehend_20171127.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(callback: (data : UntagResourceResponse) => any, requestBody: UntagResourceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=Comprehend_20171127.UntagResource', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Updates information about the specified endpoint.
		 * Post /#X-Amz-Target=Comprehend_20171127.UpdateEndpoint
		 * @return {UpdateEndpointResponse} Success
		 */
		UpdateEndpoint(callback: (data : UpdateEndpointResponse) => any, requestBody: UpdateEndpointRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=Comprehend_20171127.UpdateEndpoint', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}
	}

}

