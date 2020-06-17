import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace My_Demo_Client {
	export interface CompareFacesResponse {

		/**Type that describes the face Amazon Rekognition chose to compare with the faces in the target. This contains a bounding box for the selected face and confidence level that the bounding box contains a face. Note that Amazon Rekognition selects the largest face in the source image for this comparison. */
		SourceImageFace?: ComparedSourceImageFace;
		FaceMatches?: Array<CompareFacesMatch>;
		UnmatchedFaces?: Array<ComparedFace>;
		SourceImageOrientationCorrection?: CompareFacesResponseSourceImageOrientationCorrection;
		TargetImageOrientationCorrection?: CompareFacesResponseTargetImageOrientationCorrection;
	}

	export enum CompareFacesResponseSourceImageOrientationCorrection { ROTATE_0 = 0, ROTATE_90 = 1, ROTATE_180 = 2, ROTATE_270 = 3 }

	export enum CompareFacesResponseTargetImageOrientationCorrection { ROTATE_0 = 0, ROTATE_90 = 1, ROTATE_180 = 2, ROTATE_270 = 3 }

	export interface CompareFacesRequest {

		/**<p>Provides the input image either as bytes or an S3 object.</p> <p>You pass image bytes to an Amazon Rekognition API operation by using the <code>Bytes</code> property. For example, you would use the <code>Bytes</code> property to pass an image loaded from a local file system. Image bytes passed by using the <code>Bytes</code> property must be base64-encoded. Your code may not need to encode image bytes if you are using an AWS SDK to call Amazon Rekognition API operations. </p> <p>For more information, see Analyzing an Image Loaded from a Local File System in the Amazon Rekognition Developer Guide.</p> <p> You pass images stored in an S3 bucket to an Amazon Rekognition API operation by using the <code>S3Object</code> property. Images stored in an S3 bucket do not need to be base64-encoded.</p> <p>The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.</p> <p>If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes using the Bytes property is not supported. You must first upload the image to an Amazon S3 bucket and then call the operation using the S3Object property.</p> <p>For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see Resource Based Policies in the Amazon Rekognition Developer Guide. </p> */
		SourceImage: Image;

		/**<p>Provides the input image either as bytes or an S3 object.</p> <p>You pass image bytes to an Amazon Rekognition API operation by using the <code>Bytes</code> property. For example, you would use the <code>Bytes</code> property to pass an image loaded from a local file system. Image bytes passed by using the <code>Bytes</code> property must be base64-encoded. Your code may not need to encode image bytes if you are using an AWS SDK to call Amazon Rekognition API operations. </p> <p>For more information, see Analyzing an Image Loaded from a Local File System in the Amazon Rekognition Developer Guide.</p> <p> You pass images stored in an S3 bucket to an Amazon Rekognition API operation by using the <code>S3Object</code> property. Images stored in an S3 bucket do not need to be base64-encoded.</p> <p>The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.</p> <p>If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes using the Bytes property is not supported. You must first upload the image to an Amazon S3 bucket and then call the operation using the S3Object property.</p> <p>For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see Resource Based Policies in the Amazon Rekognition Developer Guide. </p> */
		TargetImage: Image;
		SimilarityThreshold?: number;
		QualityFilter?: CompareFacesRequestQualityFilter;
	}

	export enum CompareFacesRequestQualityFilter { NONE = 0, AUTO = 1, LOW = 2, MEDIUM = 3, HIGH = 4 }

	export interface CreateCollectionResponse {
		StatusCode?: number;
		CollectionArn?: string;
		FaceModelVersion?: string;
	}

	export interface CreateCollectionRequest {
		CollectionId: string;
	}

	export interface CreateProjectResponse {
		ProjectArn?: string;
	}

	export interface CreateProjectRequest {
		ProjectName: string;
	}

	export interface CreateProjectVersionResponse {
		ProjectVersionArn?: string;
	}

	export interface CreateProjectVersionRequest {
		ProjectArn: string;
		VersionName: string;

		/**The S3 bucket and folder location where training output is placed. */
		OutputConfig: OutputConfig;

		/**The dataset used for training. */
		TrainingData: TrainingData;

		/**The dataset used for testing. Optionally, if <code>AutoCreate</code> is set, Amazon Rekognition Custom Labels creates a testing dataset using an 80/20 split of the training dataset. */
		TestingData: TestingData;
	}

	export interface CreateStreamProcessorResponse {
		StreamProcessorArn?: string;
	}

	export interface CreateStreamProcessorRequest {

		/**Information about the source streaming video. */
		Input: StreamProcessorInput;

		/**Information about the Amazon Kinesis Data Streams stream to which a Amazon Rekognition Video stream processor streams the results of a video analysis. For more information, see CreateStreamProcessor in the Amazon Rekognition Developer Guide. */
		Output: StreamProcessorOutput;
		Name: string;

		/**Input parameters used to recognize faces in a streaming video analyzed by a Amazon Rekognition stream processor. */
		Settings: StreamProcessorSettings;
		RoleArn: string;
	}

	export interface DeleteCollectionResponse {
		StatusCode?: number;
	}

	export interface DeleteCollectionRequest {
		CollectionId: string;
	}

	export interface DeleteFacesResponse {
		DeletedFaces?: Array<FaceId>;
	}

	export interface DeleteFacesRequest {
		CollectionId: string;
		FaceIds: Array<FaceId>;
	}

	export interface DeleteProjectResponse {
		Status?: DeleteProjectResponseStatus;
	}

	export enum DeleteProjectResponseStatus { CREATING = 0, CREATED = 1, DELETING = 2 }

	export interface DeleteProjectRequest {
		ProjectArn: string;
	}

	export interface DeleteProjectVersionResponse {
		Status?: DeleteProjectVersionResponseStatus;
	}

	export enum DeleteProjectVersionResponseStatus { TRAINING_IN_PROGRESS = 0, TRAINING_COMPLETED = 1, TRAINING_FAILED = 2, STARTING = 3, RUNNING = 4, FAILED = 5, STOPPING = 6, STOPPED = 7, DELETING = 8 }

	export interface DeleteProjectVersionRequest {
		ProjectVersionArn: string;
	}

	export interface DeleteStreamProcessorRequest {
		Name: string;
	}

	export interface DescribeCollectionResponse {
		FaceCount?: number;
		FaceModelVersion?: string;
		CollectionARN?: string;
		CreationTimestamp?: Date;
	}

	export interface DescribeCollectionRequest {
		CollectionId: string;
	}

	export interface DescribeProjectVersionsResponse {
		ProjectVersionDescriptions?: Array<ProjectVersionDescription>;
		NextToken?: string;
	}

	export interface DescribeProjectVersionsRequest {
		ProjectArn: string;
		VersionNames?: Array<VersionName>;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface DescribeProjectsResponse {
		ProjectDescriptions?: Array<ProjectDescription>;
		NextToken?: string;
	}

	export interface DescribeProjectsRequest {
		NextToken?: string;
		MaxResults?: number;
	}

	export interface DescribeStreamProcessorResponse {
		Name?: string;
		StreamProcessorArn?: string;
		Status?: DescribeStreamProcessorResponseStatus;
		StatusMessage?: string;
		CreationTimestamp?: Date;
		LastUpdateTimestamp?: Date;

		/**Information about the source streaming video. */
		Input?: StreamProcessorInput;

		/**Information about the Amazon Kinesis Data Streams stream to which a Amazon Rekognition Video stream processor streams the results of a video analysis. For more information, see CreateStreamProcessor in the Amazon Rekognition Developer Guide. */
		Output?: StreamProcessorOutput;
		RoleArn?: string;

		/**Input parameters used to recognize faces in a streaming video analyzed by a Amazon Rekognition stream processor. */
		Settings?: StreamProcessorSettings;
	}

	export enum DescribeStreamProcessorResponseStatus { STOPPED = 0, STARTING = 1, RUNNING = 2, FAILED = 3, STOPPING = 4 }

	export interface DescribeStreamProcessorRequest {
		Name: string;
	}

	export interface DetectCustomLabelsResponse {
		CustomLabels?: Array<CustomLabel>;
	}

	export interface DetectCustomLabelsRequest {
		ProjectVersionArn: string;

		/**<p>Provides the input image either as bytes or an S3 object.</p> <p>You pass image bytes to an Amazon Rekognition API operation by using the <code>Bytes</code> property. For example, you would use the <code>Bytes</code> property to pass an image loaded from a local file system. Image bytes passed by using the <code>Bytes</code> property must be base64-encoded. Your code may not need to encode image bytes if you are using an AWS SDK to call Amazon Rekognition API operations. </p> <p>For more information, see Analyzing an Image Loaded from a Local File System in the Amazon Rekognition Developer Guide.</p> <p> You pass images stored in an S3 bucket to an Amazon Rekognition API operation by using the <code>S3Object</code> property. Images stored in an S3 bucket do not need to be base64-encoded.</p> <p>The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.</p> <p>If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes using the Bytes property is not supported. You must first upload the image to an Amazon S3 bucket and then call the operation using the S3Object property.</p> <p>For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see Resource Based Policies in the Amazon Rekognition Developer Guide. </p> */
		Image: Image;
		MaxResults?: number;
		MinConfidence?: number;
	}

	export interface DetectFacesResponse {
		FaceDetails?: Array<FaceDetail>;
		OrientationCorrection?: DetectFacesResponseOrientationCorrection;
	}

	export enum DetectFacesResponseOrientationCorrection { ROTATE_0 = 0, ROTATE_90 = 1, ROTATE_180 = 2, ROTATE_270 = 3 }

	export interface DetectFacesRequest {

		/**<p>Provides the input image either as bytes or an S3 object.</p> <p>You pass image bytes to an Amazon Rekognition API operation by using the <code>Bytes</code> property. For example, you would use the <code>Bytes</code> property to pass an image loaded from a local file system. Image bytes passed by using the <code>Bytes</code> property must be base64-encoded. Your code may not need to encode image bytes if you are using an AWS SDK to call Amazon Rekognition API operations. </p> <p>For more information, see Analyzing an Image Loaded from a Local File System in the Amazon Rekognition Developer Guide.</p> <p> You pass images stored in an S3 bucket to an Amazon Rekognition API operation by using the <code>S3Object</code> property. Images stored in an S3 bucket do not need to be base64-encoded.</p> <p>The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.</p> <p>If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes using the Bytes property is not supported. You must first upload the image to an Amazon S3 bucket and then call the operation using the S3Object property.</p> <p>For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see Resource Based Policies in the Amazon Rekognition Developer Guide. </p> */
		Image: Image;
		Attributes?: Array<Attribute>;
	}

	export interface DetectLabelsResponse {
		Labels?: Array<Label>;
		OrientationCorrection?: DetectLabelsResponseOrientationCorrection;
		LabelModelVersion?: string;
	}

	export enum DetectLabelsResponseOrientationCorrection { ROTATE_0 = 0, ROTATE_90 = 1, ROTATE_180 = 2, ROTATE_270 = 3 }

	export interface DetectLabelsRequest {

		/**<p>Provides the input image either as bytes or an S3 object.</p> <p>You pass image bytes to an Amazon Rekognition API operation by using the <code>Bytes</code> property. For example, you would use the <code>Bytes</code> property to pass an image loaded from a local file system. Image bytes passed by using the <code>Bytes</code> property must be base64-encoded. Your code may not need to encode image bytes if you are using an AWS SDK to call Amazon Rekognition API operations. </p> <p>For more information, see Analyzing an Image Loaded from a Local File System in the Amazon Rekognition Developer Guide.</p> <p> You pass images stored in an S3 bucket to an Amazon Rekognition API operation by using the <code>S3Object</code> property. Images stored in an S3 bucket do not need to be base64-encoded.</p> <p>The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.</p> <p>If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes using the Bytes property is not supported. You must first upload the image to an Amazon S3 bucket and then call the operation using the S3Object property.</p> <p>For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see Resource Based Policies in the Amazon Rekognition Developer Guide. </p> */
		Image: Image;
		MaxLabels?: number;
		MinConfidence?: number;
	}

	export interface DetectModerationLabelsResponse {
		ModerationLabels?: Array<ModerationLabel>;
		ModerationModelVersion?: string;

		/**Shows the results of the human in the loop evaluation. If there is no HumanLoopArn, the input did not trigger human review. */
		HumanLoopActivationOutput?: HumanLoopActivationOutput;
	}

	export interface DetectModerationLabelsRequest {

		/**<p>Provides the input image either as bytes or an S3 object.</p> <p>You pass image bytes to an Amazon Rekognition API operation by using the <code>Bytes</code> property. For example, you would use the <code>Bytes</code> property to pass an image loaded from a local file system. Image bytes passed by using the <code>Bytes</code> property must be base64-encoded. Your code may not need to encode image bytes if you are using an AWS SDK to call Amazon Rekognition API operations. </p> <p>For more information, see Analyzing an Image Loaded from a Local File System in the Amazon Rekognition Developer Guide.</p> <p> You pass images stored in an S3 bucket to an Amazon Rekognition API operation by using the <code>S3Object</code> property. Images stored in an S3 bucket do not need to be base64-encoded.</p> <p>The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.</p> <p>If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes using the Bytes property is not supported. You must first upload the image to an Amazon S3 bucket and then call the operation using the S3Object property.</p> <p>For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see Resource Based Policies in the Amazon Rekognition Developer Guide. </p> */
		Image: Image;
		MinConfidence?: number;

		/**Sets up the flow definition the image will be sent to if one of the conditions is met. You can also set certain attributes of the image before review. */
		HumanLoopConfig?: HumanLoopConfig;
	}

	export interface DetectTextResponse {
		TextDetections?: Array<TextDetection>;
		TextModelVersion?: string;
	}

	export interface DetectTextRequest {

		/**<p>Provides the input image either as bytes or an S3 object.</p> <p>You pass image bytes to an Amazon Rekognition API operation by using the <code>Bytes</code> property. For example, you would use the <code>Bytes</code> property to pass an image loaded from a local file system. Image bytes passed by using the <code>Bytes</code> property must be base64-encoded. Your code may not need to encode image bytes if you are using an AWS SDK to call Amazon Rekognition API operations. </p> <p>For more information, see Analyzing an Image Loaded from a Local File System in the Amazon Rekognition Developer Guide.</p> <p> You pass images stored in an S3 bucket to an Amazon Rekognition API operation by using the <code>S3Object</code> property. Images stored in an S3 bucket do not need to be base64-encoded.</p> <p>The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.</p> <p>If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes using the Bytes property is not supported. You must first upload the image to an Amazon S3 bucket and then call the operation using the S3Object property.</p> <p>For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see Resource Based Policies in the Amazon Rekognition Developer Guide. </p> */
		Image: Image;

		/**A set of optional parameters that you can use to set the criteria that the text must meet to be included in your response. <code>WordFilter</code> looks at a word’s height, width, and minimum confidence. <code>RegionOfInterest</code> lets you set a specific region of the image to look for text in. */
		Filters?: DetectTextFilters;
	}

	export interface GetCelebrityInfoResponse {
		Urls?: Array<Url>;
		Name?: string;
	}

	export interface GetCelebrityInfoRequest {
		Id: string;
	}

	export interface GetCelebrityRecognitionResponse {
		JobStatus?: GetCelebrityRecognitionResponseJobStatus;
		StatusMessage?: string;

		/**Information about a video that Amazon Rekognition analyzed. <code>Videometadata</code> is returned in every page of paginated responses from a Amazon Rekognition video operation. */
		VideoMetadata?: VideoMetadata;
		NextToken?: string;
		Celebrities?: Array<CelebrityRecognition>;
	}

	export enum GetCelebrityRecognitionResponseJobStatus { IN_PROGRESS = 0, SUCCEEDED = 1, FAILED = 2 }

	export interface GetCelebrityRecognitionRequest {
		JobId: string;
		MaxResults?: number;
		NextToken?: string;
		SortBy?: GetCelebrityRecognitionRequestSortBy;
	}

	export enum GetCelebrityRecognitionRequestSortBy { ID = 0, TIMESTAMP = 1 }

	export interface GetContentModerationResponse {
		JobStatus?: GetContentModerationResponseJobStatus;
		StatusMessage?: string;

		/**Information about a video that Amazon Rekognition analyzed. <code>Videometadata</code> is returned in every page of paginated responses from a Amazon Rekognition video operation. */
		VideoMetadata?: VideoMetadata;
		ModerationLabels?: Array<ContentModerationDetection>;
		NextToken?: string;
		ModerationModelVersion?: string;
	}

	export enum GetContentModerationResponseJobStatus { IN_PROGRESS = 0, SUCCEEDED = 1, FAILED = 2 }

	export interface GetContentModerationRequest {
		JobId: string;
		MaxResults?: number;
		NextToken?: string;
		SortBy?: GetContentModerationRequestSortBy;
	}

	export enum GetContentModerationRequestSortBy { NAME = 0, TIMESTAMP = 1 }

	export interface GetFaceDetectionResponse {
		JobStatus?: GetFaceDetectionResponseJobStatus;
		StatusMessage?: string;

		/**Information about a video that Amazon Rekognition analyzed. <code>Videometadata</code> is returned in every page of paginated responses from a Amazon Rekognition video operation. */
		VideoMetadata?: VideoMetadata;
		NextToken?: string;
		Faces?: Array<FaceDetection>;
	}

	export enum GetFaceDetectionResponseJobStatus { IN_PROGRESS = 0, SUCCEEDED = 1, FAILED = 2 }

	export interface GetFaceDetectionRequest {
		JobId: string;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface GetFaceSearchResponse {
		JobStatus?: GetFaceSearchResponseJobStatus;
		StatusMessage?: string;
		NextToken?: string;

		/**Information about a video that Amazon Rekognition analyzed. <code>Videometadata</code> is returned in every page of paginated responses from a Amazon Rekognition video operation. */
		VideoMetadata?: VideoMetadata;
		Persons?: Array<PersonMatch>;
	}

	export enum GetFaceSearchResponseJobStatus { IN_PROGRESS = 0, SUCCEEDED = 1, FAILED = 2 }

	export interface GetFaceSearchRequest {
		JobId: string;
		MaxResults?: number;
		NextToken?: string;
		SortBy?: GetFaceSearchRequestSortBy;
	}

	export enum GetFaceSearchRequestSortBy { INDEX = 0, TIMESTAMP = 1 }

	export interface GetLabelDetectionResponse {
		JobStatus?: GetLabelDetectionResponseJobStatus;
		StatusMessage?: string;

		/**Information about a video that Amazon Rekognition analyzed. <code>Videometadata</code> is returned in every page of paginated responses from a Amazon Rekognition video operation. */
		VideoMetadata?: VideoMetadata;
		NextToken?: string;
		Labels?: Array<LabelDetection>;
		LabelModelVersion?: string;
	}

	export enum GetLabelDetectionResponseJobStatus { IN_PROGRESS = 0, SUCCEEDED = 1, FAILED = 2 }

	export interface GetLabelDetectionRequest {
		JobId: string;
		MaxResults?: number;
		NextToken?: string;
		SortBy?: GetLabelDetectionRequestSortBy;
	}

	export enum GetLabelDetectionRequestSortBy { NAME = 0, TIMESTAMP = 1 }

	export interface GetPersonTrackingResponse {
		JobStatus?: GetPersonTrackingResponseJobStatus;
		StatusMessage?: string;

		/**Information about a video that Amazon Rekognition analyzed. <code>Videometadata</code> is returned in every page of paginated responses from a Amazon Rekognition video operation. */
		VideoMetadata?: VideoMetadata;
		NextToken?: string;
		Persons?: Array<PersonDetection>;
	}

	export enum GetPersonTrackingResponseJobStatus { IN_PROGRESS = 0, SUCCEEDED = 1, FAILED = 2 }

	export interface GetPersonTrackingRequest {
		JobId: string;
		MaxResults?: number;
		NextToken?: string;
		SortBy?: GetPersonTrackingRequestSortBy;
	}

	export enum GetPersonTrackingRequestSortBy { INDEX = 0, TIMESTAMP = 1 }

	export interface GetTextDetectionResponse {
		JobStatus?: GetTextDetectionResponseJobStatus;
		StatusMessage?: string;

		/**Information about a video that Amazon Rekognition analyzed. <code>Videometadata</code> is returned in every page of paginated responses from a Amazon Rekognition video operation. */
		VideoMetadata?: VideoMetadata;
		TextDetections?: Array<TextDetectionResult>;
		NextToken?: string;
		TextModelVersion?: string;
	}

	export enum GetTextDetectionResponseJobStatus { IN_PROGRESS = 0, SUCCEEDED = 1, FAILED = 2 }

	export interface GetTextDetectionRequest {
		JobId: string;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface IndexFacesResponse {
		FaceRecords?: Array<FaceRecord>;
		OrientationCorrection?: IndexFacesResponseOrientationCorrection;
		FaceModelVersion?: string;
		UnindexedFaces?: Array<UnindexedFace>;
	}

	export enum IndexFacesResponseOrientationCorrection { ROTATE_0 = 0, ROTATE_90 = 1, ROTATE_180 = 2, ROTATE_270 = 3 }

	export interface IndexFacesRequest {
		CollectionId: string;

		/**<p>Provides the input image either as bytes or an S3 object.</p> <p>You pass image bytes to an Amazon Rekognition API operation by using the <code>Bytes</code> property. For example, you would use the <code>Bytes</code> property to pass an image loaded from a local file system. Image bytes passed by using the <code>Bytes</code> property must be base64-encoded. Your code may not need to encode image bytes if you are using an AWS SDK to call Amazon Rekognition API operations. </p> <p>For more information, see Analyzing an Image Loaded from a Local File System in the Amazon Rekognition Developer Guide.</p> <p> You pass images stored in an S3 bucket to an Amazon Rekognition API operation by using the <code>S3Object</code> property. Images stored in an S3 bucket do not need to be base64-encoded.</p> <p>The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.</p> <p>If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes using the Bytes property is not supported. You must first upload the image to an Amazon S3 bucket and then call the operation using the S3Object property.</p> <p>For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see Resource Based Policies in the Amazon Rekognition Developer Guide. </p> */
		Image: Image;
		ExternalImageId?: string;
		DetectionAttributes?: Array<Attribute>;
		MaxFaces?: number;
		QualityFilter?: IndexFacesRequestQualityFilter;
	}

	export enum IndexFacesRequestQualityFilter { NONE = 0, AUTO = 1, LOW = 2, MEDIUM = 3, HIGH = 4 }

	export interface ListCollectionsResponse {
		CollectionIds?: Array<CollectionId>;
		NextToken?: string;
		FaceModelVersions?: Array<String>;
	}

	export interface ListCollectionsRequest {
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListFacesResponse {
		Faces?: Array<Face>;
		NextToken?: string;
		FaceModelVersion?: string;
	}

	export interface ListFacesRequest {
		CollectionId: string;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListStreamProcessorsResponse {
		NextToken?: string;
		StreamProcessors?: Array<StreamProcessor>;
	}

	export interface ListStreamProcessorsRequest {
		NextToken?: string;
		MaxResults?: number;
	}

	export interface RecognizeCelebritiesResponse {
		CelebrityFaces?: Array<Celebrity>;
		UnrecognizedFaces?: Array<ComparedFace>;
		OrientationCorrection?: RecognizeCelebritiesResponseOrientationCorrection;
	}

	export enum RecognizeCelebritiesResponseOrientationCorrection { ROTATE_0 = 0, ROTATE_90 = 1, ROTATE_180 = 2, ROTATE_270 = 3 }

	export interface RecognizeCelebritiesRequest {

		/**<p>Provides the input image either as bytes or an S3 object.</p> <p>You pass image bytes to an Amazon Rekognition API operation by using the <code>Bytes</code> property. For example, you would use the <code>Bytes</code> property to pass an image loaded from a local file system. Image bytes passed by using the <code>Bytes</code> property must be base64-encoded. Your code may not need to encode image bytes if you are using an AWS SDK to call Amazon Rekognition API operations. </p> <p>For more information, see Analyzing an Image Loaded from a Local File System in the Amazon Rekognition Developer Guide.</p> <p> You pass images stored in an S3 bucket to an Amazon Rekognition API operation by using the <code>S3Object</code> property. Images stored in an S3 bucket do not need to be base64-encoded.</p> <p>The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.</p> <p>If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes using the Bytes property is not supported. You must first upload the image to an Amazon S3 bucket and then call the operation using the S3Object property.</p> <p>For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see Resource Based Policies in the Amazon Rekognition Developer Guide. </p> */
		Image: Image;
	}

	export interface SearchFacesResponse {
		SearchedFaceId?: string;
		FaceMatches?: Array<FaceMatch>;
		FaceModelVersion?: string;
	}

	export interface SearchFacesRequest {
		CollectionId: string;
		FaceId: string;
		MaxFaces?: number;
		FaceMatchThreshold?: number;
	}

	export interface SearchFacesByImageResponse {

		/**<p>Identifies the bounding box around the label, face, or text. The <code>left</code> (x-coordinate) and <code>top</code> (y-coordinate) are coordinates representing the top and left sides of the bounding box. Note that the upper-left corner of the image is the origin (0,0). </p> <p>The <code>top</code> and <code>left</code> values returned are ratios of the overall image size. For example, if the input image is 700x200 pixels, and the top-left coordinate of the bounding box is 350x50 pixels, the API returns a <code>left</code> value of 0.5 (350/700) and a <code>top</code> value of 0.25 (50/200).</p> <p>The <code>width</code> and <code>height</code> values represent the dimensions of the bounding box as a ratio of the overall image dimension. For example, if the input image is 700x200 pixels, and the bounding box width is 70 pixels, the width returned is 0.1. </p> <note> <p> The bounding box coordinates can have negative values. For example, if Amazon Rekognition is able to detect a face that is at the image edge and is only partially visible, the service can return coordinates that are outside the image bounds and, depending on the image edge, you might get negative values or values greater than 1 for the <code>left</code> or <code>top</code> values. </p> </note> */
		SearchedFaceBoundingBox?: BoundingBox;
		SearchedFaceConfidence?: number;
		FaceMatches?: Array<FaceMatch>;
		FaceModelVersion?: string;
	}

	export interface SearchFacesByImageRequest {
		CollectionId: string;

		/**<p>Provides the input image either as bytes or an S3 object.</p> <p>You pass image bytes to an Amazon Rekognition API operation by using the <code>Bytes</code> property. For example, you would use the <code>Bytes</code> property to pass an image loaded from a local file system. Image bytes passed by using the <code>Bytes</code> property must be base64-encoded. Your code may not need to encode image bytes if you are using an AWS SDK to call Amazon Rekognition API operations. </p> <p>For more information, see Analyzing an Image Loaded from a Local File System in the Amazon Rekognition Developer Guide.</p> <p> You pass images stored in an S3 bucket to an Amazon Rekognition API operation by using the <code>S3Object</code> property. Images stored in an S3 bucket do not need to be base64-encoded.</p> <p>The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.</p> <p>If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes using the Bytes property is not supported. You must first upload the image to an Amazon S3 bucket and then call the operation using the S3Object property.</p> <p>For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see Resource Based Policies in the Amazon Rekognition Developer Guide. </p> */
		Image: Image;
		MaxFaces?: number;
		FaceMatchThreshold?: number;
		QualityFilter?: SearchFacesByImageRequestQualityFilter;
	}

	export enum SearchFacesByImageRequestQualityFilter { NONE = 0, AUTO = 1, LOW = 2, MEDIUM = 3, HIGH = 4 }

	export interface StartCelebrityRecognitionResponse {
		JobId?: string;
	}

	export interface StartCelebrityRecognitionRequest {

		/**Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as <a>StartLabelDetection</a> use <code>Video</code> to specify a video for analysis. The supported file formats are .mp4, .mov and .avi. */
		Video: Video;
		ClientRequestToken?: string;

		/**The Amazon Simple Notification Service topic to which Amazon Rekognition publishes the completion status of a video analysis operation. For more information, see <a>api-video</a>. */
		NotificationChannel?: NotificationChannel;
		JobTag?: string;
	}

	export interface StartContentModerationResponse {
		JobId?: string;
	}

	export interface StartContentModerationRequest {

		/**Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as <a>StartLabelDetection</a> use <code>Video</code> to specify a video for analysis. The supported file formats are .mp4, .mov and .avi. */
		Video: Video;
		MinConfidence?: number;
		ClientRequestToken?: string;

		/**The Amazon Simple Notification Service topic to which Amazon Rekognition publishes the completion status of a video analysis operation. For more information, see <a>api-video</a>. */
		NotificationChannel?: NotificationChannel;
		JobTag?: string;
	}

	export interface StartFaceDetectionResponse {
		JobId?: string;
	}

	export interface StartFaceDetectionRequest {

		/**Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as <a>StartLabelDetection</a> use <code>Video</code> to specify a video for analysis. The supported file formats are .mp4, .mov and .avi. */
		Video: Video;
		ClientRequestToken?: string;

		/**The Amazon Simple Notification Service topic to which Amazon Rekognition publishes the completion status of a video analysis operation. For more information, see <a>api-video</a>. */
		NotificationChannel?: NotificationChannel;
		FaceAttributes?: StartFaceDetectionRequestFaceAttributes;
		JobTag?: string;
	}

	export enum StartFaceDetectionRequestFaceAttributes { DEFAULT = 0, ALL = 1 }

	export interface StartFaceSearchResponse {
		JobId?: string;
	}

	export interface StartFaceSearchRequest {

		/**Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as <a>StartLabelDetection</a> use <code>Video</code> to specify a video for analysis. The supported file formats are .mp4, .mov and .avi. */
		Video: Video;
		ClientRequestToken?: string;
		FaceMatchThreshold?: number;
		CollectionId: string;

		/**The Amazon Simple Notification Service topic to which Amazon Rekognition publishes the completion status of a video analysis operation. For more information, see <a>api-video</a>. */
		NotificationChannel?: NotificationChannel;
		JobTag?: string;
	}

	export interface StartLabelDetectionResponse {
		JobId?: string;
	}

	export interface StartLabelDetectionRequest {

		/**Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as <a>StartLabelDetection</a> use <code>Video</code> to specify a video for analysis. The supported file formats are .mp4, .mov and .avi. */
		Video: Video;
		ClientRequestToken?: string;
		MinConfidence?: number;

		/**The Amazon Simple Notification Service topic to which Amazon Rekognition publishes the completion status of a video analysis operation. For more information, see <a>api-video</a>. */
		NotificationChannel?: NotificationChannel;
		JobTag?: string;
	}

	export interface StartPersonTrackingResponse {
		JobId?: string;
	}

	export interface StartPersonTrackingRequest {

		/**Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as <a>StartLabelDetection</a> use <code>Video</code> to specify a video for analysis. The supported file formats are .mp4, .mov and .avi. */
		Video: Video;
		ClientRequestToken?: string;

		/**The Amazon Simple Notification Service topic to which Amazon Rekognition publishes the completion status of a video analysis operation. For more information, see <a>api-video</a>. */
		NotificationChannel?: NotificationChannel;
		JobTag?: string;
	}

	export interface StartProjectVersionResponse {
		Status?: StartProjectVersionResponseStatus;
	}

	export enum StartProjectVersionResponseStatus { TRAINING_IN_PROGRESS = 0, TRAINING_COMPLETED = 1, TRAINING_FAILED = 2, STARTING = 3, RUNNING = 4, FAILED = 5, STOPPING = 6, STOPPED = 7, DELETING = 8 }

	export interface StartProjectVersionRequest {
		ProjectVersionArn: string;
		MinInferenceUnits: number;
	}

	export interface StartStreamProcessorRequest {
		Name: string;
	}

	export interface StartTextDetectionResponse {
		JobId?: string;
	}

	export interface StartTextDetectionRequest {

		/**Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as <a>StartLabelDetection</a> use <code>Video</code> to specify a video for analysis. The supported file formats are .mp4, .mov and .avi. */
		Video: Video;
		ClientRequestToken?: string;

		/**The Amazon Simple Notification Service topic to which Amazon Rekognition publishes the completion status of a video analysis operation. For more information, see <a>api-video</a>. */
		NotificationChannel?: NotificationChannel;
		JobTag?: string;

		/**Set of optional parameters that let you set the criteria text must meet to be included in your response. <code>WordFilter</code> looks at a word's height, width and minimum confidence. <code>RegionOfInterest</code> lets you set a specific region of the screen to look for text in. */
		Filters?: StartTextDetectionFilters;
	}

	export interface StopProjectVersionResponse {
		Status?: StopProjectVersionResponseStatus;
	}

	export enum StopProjectVersionResponseStatus { TRAINING_IN_PROGRESS = 0, TRAINING_COMPLETED = 1, TRAINING_FAILED = 2, STARTING = 3, RUNNING = 4, FAILED = 5, STOPPING = 6, STOPPED = 7, DELETING = 8 }

	export interface StopProjectVersionRequest {
		ProjectVersionArn: string;
	}

	export interface StopStreamProcessorRequest {
		Name: string;
	}


	/**<p>Structure containing the estimated age range, in years, for a face.</p> <p>Amazon Rekognition estimates an age range for faces detected in the input image. Estimated age ranges can overlap. A face of a 5-year-old might have an estimated range of 4-6, while the face of a 6-year-old might have an estimated range of 4-8.</p> */
	export interface AgeRange {
		Low?: number;
		High?: number;
	}


	/**The S3 bucket that contains the Ground Truth manifest file. */
	export interface GroundTruthManifest {

		/**<p>Provides the S3 bucket name and object name.</p> <p>The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.</p> <p>For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see Resource-Based Policies in the Amazon Rekognition Developer Guide. </p> */
		S3Object?: S3Object;
	}


	/**Assets are the images that you use to train and evaluate a model version. Assets are referenced by Sagemaker GroundTruth manifest files.  */
	export interface Asset {

		/**The S3 bucket that contains the Ground Truth manifest file. */
		GroundTruthManifest?: GroundTruthManifest;
	}

	export enum Attribute { DEFAULT = 0, ALL = 1 }


	/**Indicates whether or not the face has a beard, and the confidence level in the determination. */
	export interface Beard {
		Value?: boolean;
		Confidence?: number;
	}


	/**<p>Identifies the bounding box around the label, face, or text. The <code>left</code> (x-coordinate) and <code>top</code> (y-coordinate) are coordinates representing the top and left sides of the bounding box. Note that the upper-left corner of the image is the origin (0,0). </p> <p>The <code>top</code> and <code>left</code> values returned are ratios of the overall image size. For example, if the input image is 700x200 pixels, and the top-left coordinate of the bounding box is 350x50 pixels, the API returns a <code>left</code> value of 0.5 (350/700) and a <code>top</code> value of 0.25 (50/200).</p> <p>The <code>width</code> and <code>height</code> values represent the dimensions of the bounding box as a ratio of the overall image dimension. For example, if the input image is 700x200 pixels, and the bounding box width is 70 pixels, the width returned is 0.1. </p> <note> <p> The bounding box coordinates can have negative values. For example, if Amazon Rekognition is able to detect a face that is at the image edge and is only partially visible, the service can return coordinates that are outside the image bounds and, depending on the image edge, you might get negative values or values greater than 1 for the <code>left</code> or <code>top</code> values. </p> </note> */
	export interface BoundingBox {
		Width?: number;
		Height?: number;
		Left?: number;
		Top?: number;
	}


	/**Provides face metadata for target image faces that are analyzed by <code>CompareFaces</code> and <code>RecognizeCelebrities</code>. */
	export interface ComparedFace {

		/**<p>Identifies the bounding box around the label, face, or text. The <code>left</code> (x-coordinate) and <code>top</code> (y-coordinate) are coordinates representing the top and left sides of the bounding box. Note that the upper-left corner of the image is the origin (0,0). </p> <p>The <code>top</code> and <code>left</code> values returned are ratios of the overall image size. For example, if the input image is 700x200 pixels, and the top-left coordinate of the bounding box is 350x50 pixels, the API returns a <code>left</code> value of 0.5 (350/700) and a <code>top</code> value of 0.25 (50/200).</p> <p>The <code>width</code> and <code>height</code> values represent the dimensions of the bounding box as a ratio of the overall image dimension. For example, if the input image is 700x200 pixels, and the bounding box width is 70 pixels, the width returned is 0.1. </p> <note> <p> The bounding box coordinates can have negative values. For example, if Amazon Rekognition is able to detect a face that is at the image edge and is only partially visible, the service can return coordinates that are outside the image bounds and, depending on the image edge, you might get negative values or values greater than 1 for the <code>left</code> or <code>top</code> values. </p> </note> */
		BoundingBox?: BoundingBox;
		Confidence?: number;
		Landmarks?: Array<Landmark>;

		/**Indicates the pose of the face as determined by its pitch, roll, and yaw. */
		Pose?: Pose;

		/**Identifies face image brightness and sharpness. */
		Quality?: ImageQuality;
	}


	/**Provides information about a celebrity recognized by the <a>RecognizeCelebrities</a> operation. */
	export interface Celebrity {
		Urls?: Array<Url>;
		Name?: string;
		Id?: string;

		/**Provides face metadata for target image faces that are analyzed by <code>CompareFaces</code> and <code>RecognizeCelebrities</code>. */
		Face?: ComparedFace;
		MatchConfidence?: number;
	}


	/**<p>Structure containing attributes of the face that the algorithm detected.</p> <p>A <code>FaceDetail</code> object contains either the default facial attributes or all facial attributes. The default attributes are <code>BoundingBox</code>, <code>Confidence</code>, <code>Landmarks</code>, <code>Pose</code>, and <code>Quality</code>.</p> <p> <a>GetFaceDetection</a> is the only Amazon Rekognition Video stored video operation that can return a <code>FaceDetail</code> object with all attributes. To specify which attributes to return, use the <code>FaceAttributes</code> input parameter for <a>StartFaceDetection</a>. The following Amazon Rekognition Video operations return only the default attributes. The corresponding Start operations don't have a <code>FaceAttributes</code> input parameter.</p> <ul> <li> <p>GetCelebrityRecognition</p> </li> <li> <p>GetPersonTracking</p> </li> <li> <p>GetFaceSearch</p> </li> </ul> <p>The Amazon Rekognition Image <a>DetectFaces</a> and <a>IndexFaces</a> operations can return all facial attributes. To specify which attributes to return, use the <code>Attributes</code> input parameter for <code>DetectFaces</code>. For <code>IndexFaces</code>, use the <code>DetectAttributes</code> input parameter.</p> */
	export interface FaceDetail {

		/**<p>Identifies the bounding box around the label, face, or text. The <code>left</code> (x-coordinate) and <code>top</code> (y-coordinate) are coordinates representing the top and left sides of the bounding box. Note that the upper-left corner of the image is the origin (0,0). </p> <p>The <code>top</code> and <code>left</code> values returned are ratios of the overall image size. For example, if the input image is 700x200 pixels, and the top-left coordinate of the bounding box is 350x50 pixels, the API returns a <code>left</code> value of 0.5 (350/700) and a <code>top</code> value of 0.25 (50/200).</p> <p>The <code>width</code> and <code>height</code> values represent the dimensions of the bounding box as a ratio of the overall image dimension. For example, if the input image is 700x200 pixels, and the bounding box width is 70 pixels, the width returned is 0.1. </p> <note> <p> The bounding box coordinates can have negative values. For example, if Amazon Rekognition is able to detect a face that is at the image edge and is only partially visible, the service can return coordinates that are outside the image bounds and, depending on the image edge, you might get negative values or values greater than 1 for the <code>left</code> or <code>top</code> values. </p> </note> */
		BoundingBox?: BoundingBox;

		/**<p>Structure containing the estimated age range, in years, for a face.</p> <p>Amazon Rekognition estimates an age range for faces detected in the input image. Estimated age ranges can overlap. A face of a 5-year-old might have an estimated range of 4-6, while the face of a 6-year-old might have an estimated range of 4-8.</p> */
		AgeRange?: AgeRange;

		/**Indicates whether or not the face is smiling, and the confidence level in the determination. */
		Smile?: Smile;

		/**Indicates whether or not the face is wearing eye glasses, and the confidence level in the determination. */
		Eyeglasses?: Eyeglasses;

		/**Indicates whether or not the face is wearing sunglasses, and the confidence level in the determination. */
		Sunglasses?: Sunglasses;

		/**<p>The predicted gender of a detected face. </p> <p>Amazon Rekognition makes gender binary (male/female) predictions based on the physical appearance of a face in a particular image. This kind of prediction is not designed to categorize a person’s gender identity, and you shouldn't use Amazon Rekognition to make such a determination. For example, a male actor wearing a long-haired wig and earrings for a role might be predicted as female.</p> <p>Using Amazon Rekognition to make gender binary predictions is best suited for use cases where aggregate gender distribution statistics need to be analyzed without identifying specific users. For example, the percentage of female users compared to male users on a social media platform. </p> <p>We don't recommend using gender binary predictions to make decisions that impact&#x2028; an individual's rights, privacy, or access to services.</p> */
		Gender?: Gender;

		/**Indicates whether or not the face has a beard, and the confidence level in the determination. */
		Beard?: Beard;

		/**Indicates whether or not the face has a mustache, and the confidence level in the determination. */
		Mustache?: Mustache;

		/**Indicates whether or not the eyes on the face are open, and the confidence level in the determination. */
		EyesOpen?: EyeOpen;

		/**Indicates whether or not the mouth on the face is open, and the confidence level in the determination. */
		MouthOpen?: MouthOpen;
		Emotions?: Array<Emotion>;
		Landmarks?: Array<Landmark>;

		/**Indicates the pose of the face as determined by its pitch, roll, and yaw. */
		Pose?: Pose;

		/**Identifies face image brightness and sharpness. */
		Quality?: ImageQuality;
		Confidence?: number;
	}


	/**Information about a recognized celebrity. */
	export interface CelebrityDetail {
		Urls?: Array<Url>;
		Name?: string;
		Id?: string;
		Confidence?: number;

		/**<p>Identifies the bounding box around the label, face, or text. The <code>left</code> (x-coordinate) and <code>top</code> (y-coordinate) are coordinates representing the top and left sides of the bounding box. Note that the upper-left corner of the image is the origin (0,0). </p> <p>The <code>top</code> and <code>left</code> values returned are ratios of the overall image size. For example, if the input image is 700x200 pixels, and the top-left coordinate of the bounding box is 350x50 pixels, the API returns a <code>left</code> value of 0.5 (350/700) and a <code>top</code> value of 0.25 (50/200).</p> <p>The <code>width</code> and <code>height</code> values represent the dimensions of the bounding box as a ratio of the overall image dimension. For example, if the input image is 700x200 pixels, and the bounding box width is 70 pixels, the width returned is 0.1. </p> <note> <p> The bounding box coordinates can have negative values. For example, if Amazon Rekognition is able to detect a face that is at the image edge and is only partially visible, the service can return coordinates that are outside the image bounds and, depending on the image edge, you might get negative values or values greater than 1 for the <code>left</code> or <code>top</code> values. </p> </note> */
		BoundingBox?: BoundingBox;

		/**<p>Structure containing attributes of the face that the algorithm detected.</p> <p>A <code>FaceDetail</code> object contains either the default facial attributes or all facial attributes. The default attributes are <code>BoundingBox</code>, <code>Confidence</code>, <code>Landmarks</code>, <code>Pose</code>, and <code>Quality</code>.</p> <p> <a>GetFaceDetection</a> is the only Amazon Rekognition Video stored video operation that can return a <code>FaceDetail</code> object with all attributes. To specify which attributes to return, use the <code>FaceAttributes</code> input parameter for <a>StartFaceDetection</a>. The following Amazon Rekognition Video operations return only the default attributes. The corresponding Start operations don't have a <code>FaceAttributes</code> input parameter.</p> <ul> <li> <p>GetCelebrityRecognition</p> </li> <li> <p>GetPersonTracking</p> </li> <li> <p>GetFaceSearch</p> </li> </ul> <p>The Amazon Rekognition Image <a>DetectFaces</a> and <a>IndexFaces</a> operations can return all facial attributes. To specify which attributes to return, use the <code>Attributes</code> input parameter for <code>DetectFaces</code>. For <code>IndexFaces</code>, use the <code>DetectAttributes</code> input parameter.</p> */
		Face?: FaceDetail;
	}


	/**Information about a detected celebrity and the time the celebrity was detected in a stored video. For more information, see GetCelebrityRecognition in the Amazon Rekognition Developer Guide. */
	export interface CelebrityRecognition {
		Timestamp?: number;

		/**Information about a recognized celebrity. */
		Celebrity?: CelebrityDetail;
	}

	export enum CelebrityRecognitionSortBy { ID = 0, TIMESTAMP = 1 }


	/**Provides information about a face in a target image that matches the source image face analyzed by <code>CompareFaces</code>. The <code>Face</code> property contains the bounding box of the face in the target image. The <code>Similarity</code> property is the confidence that the source image face matches the face in the bounding box. */
	export interface CompareFacesMatch {
		Similarity?: number;

		/**Provides face metadata for target image faces that are analyzed by <code>CompareFaces</code> and <code>RecognizeCelebrities</code>. */
		Face?: ComparedFace;
	}


	/**<p>Provides the input image either as bytes or an S3 object.</p> <p>You pass image bytes to an Amazon Rekognition API operation by using the <code>Bytes</code> property. For example, you would use the <code>Bytes</code> property to pass an image loaded from a local file system. Image bytes passed by using the <code>Bytes</code> property must be base64-encoded. Your code may not need to encode image bytes if you are using an AWS SDK to call Amazon Rekognition API operations. </p> <p>For more information, see Analyzing an Image Loaded from a Local File System in the Amazon Rekognition Developer Guide.</p> <p> You pass images stored in an S3 bucket to an Amazon Rekognition API operation by using the <code>S3Object</code> property. Images stored in an S3 bucket do not need to be base64-encoded.</p> <p>The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.</p> <p>If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes using the Bytes property is not supported. You must first upload the image to an Amazon S3 bucket and then call the operation using the S3Object property.</p> <p>For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see Resource Based Policies in the Amazon Rekognition Developer Guide. </p> */
	export interface Image {
		Bytes?: string;

		/**<p>Provides the S3 bucket name and object name.</p> <p>The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.</p> <p>For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see Resource-Based Policies in the Amazon Rekognition Developer Guide. </p> */
		S3Object?: S3Object;
	}

	export enum QualityFilter { NONE = 0, AUTO = 1, LOW = 2, MEDIUM = 3, HIGH = 4 }


	/**Type that describes the face Amazon Rekognition chose to compare with the faces in the target. This contains a bounding box for the selected face and confidence level that the bounding box contains a face. Note that Amazon Rekognition selects the largest face in the source image for this comparison.  */
	export interface ComparedSourceImageFace {

		/**<p>Identifies the bounding box around the label, face, or text. The <code>left</code> (x-coordinate) and <code>top</code> (y-coordinate) are coordinates representing the top and left sides of the bounding box. Note that the upper-left corner of the image is the origin (0,0). </p> <p>The <code>top</code> and <code>left</code> values returned are ratios of the overall image size. For example, if the input image is 700x200 pixels, and the top-left coordinate of the bounding box is 350x50 pixels, the API returns a <code>left</code> value of 0.5 (350/700) and a <code>top</code> value of 0.25 (50/200).</p> <p>The <code>width</code> and <code>height</code> values represent the dimensions of the bounding box as a ratio of the overall image dimension. For example, if the input image is 700x200 pixels, and the bounding box width is 70 pixels, the width returned is 0.1. </p> <note> <p> The bounding box coordinates can have negative values. For example, if Amazon Rekognition is able to detect a face that is at the image edge and is only partially visible, the service can return coordinates that are outside the image bounds and, depending on the image edge, you might get negative values or values greater than 1 for the <code>left</code> or <code>top</code> values. </p> </note> */
		BoundingBox?: BoundingBox;
		Confidence?: number;
	}

	export enum OrientationCorrection { ROTATE_0 = 0, ROTATE_90 = 1, ROTATE_180 = 2, ROTATE_270 = 3 }


	/**Indicates the pose of the face as determined by its pitch, roll, and yaw. */
	export interface Pose {
		Roll?: number;
		Yaw?: number;
		Pitch?: number;
	}


	/**Identifies face image brightness and sharpness.  */
	export interface ImageQuality {
		Brightness?: number;
		Sharpness?: number;
	}

	export enum ContentClassifier { FreeOfPersonallyIdentifiableInformation = 0, FreeOfAdultContent = 1 }


	/**Provides information about a single type of unsafe content found in an image or video. Each type of moderated content has a label within a hierarchical taxonomy. For more information, see Detecting Unsafe Content in the Amazon Rekognition Developer Guide. */
	export interface ModerationLabel {
		Confidence?: number;
		Name?: string;
		ParentName?: string;
	}


	/**Information about an unsafe content label detection in a stored video. */
	export interface ContentModerationDetection {
		Timestamp?: number;

		/**Provides information about a single type of unsafe content found in an image or video. Each type of moderated content has a label within a hierarchical taxonomy. For more information, see Detecting Unsafe Content in the Amazon Rekognition Developer Guide. */
		ModerationLabel?: ModerationLabel;
	}

	export enum ContentModerationSortBy { NAME = 0, TIMESTAMP = 1 }


	/**The S3 bucket and folder location where training output is placed. */
	export interface OutputConfig {
		S3Bucket?: string;
		S3KeyPrefix?: string;
	}


	/**The dataset used for training. */
	export interface TrainingData {
		Assets?: Array<Asset>;
	}


	/**The dataset used for testing. Optionally, if <code>AutoCreate</code> is set, Amazon Rekognition Custom Labels creates a testing dataset using an 80/20 split of the training dataset. */
	export interface TestingData {
		Assets?: Array<Asset>;
		AutoCreate?: boolean;
	}


	/**Information about the source streaming video.  */
	export interface StreamProcessorInput {

		/**Kinesis video stream stream that provides the source streaming video for a Amazon Rekognition Video stream processor. For more information, see CreateStreamProcessor in the Amazon Rekognition Developer Guide. */
		KinesisVideoStream?: KinesisVideoStream;
	}


	/**Information about the Amazon Kinesis Data Streams stream to which a Amazon Rekognition Video stream processor streams the results of a video analysis. For more information, see CreateStreamProcessor in the Amazon Rekognition Developer Guide. */
	export interface StreamProcessorOutput {

		/**The Kinesis data stream Amazon Rekognition to which the analysis results of a Amazon Rekognition stream processor are streamed. For more information, see CreateStreamProcessor in the Amazon Rekognition Developer Guide. */
		KinesisDataStream?: KinesisDataStream;
	}


	/**Input parameters used to recognize faces in a streaming video analyzed by a Amazon Rekognition stream processor. */
	export interface StreamProcessorSettings {

		/**Input face recognition parameters for an Amazon Rekognition stream processor. <code>FaceRecognitionSettings</code> is a request parameter for <a>CreateStreamProcessor</a>. */
		FaceSearch?: FaceSearchSettings;
	}


	/**Information about where an object (<a>DetectCustomLabels</a>) or text (<a>DetectText</a>) is located on an image. */
	export interface Geometry {

		/**<p>Identifies the bounding box around the label, face, or text. The <code>left</code> (x-coordinate) and <code>top</code> (y-coordinate) are coordinates representing the top and left sides of the bounding box. Note that the upper-left corner of the image is the origin (0,0). </p> <p>The <code>top</code> and <code>left</code> values returned are ratios of the overall image size. For example, if the input image is 700x200 pixels, and the top-left coordinate of the bounding box is 350x50 pixels, the API returns a <code>left</code> value of 0.5 (350/700) and a <code>top</code> value of 0.25 (50/200).</p> <p>The <code>width</code> and <code>height</code> values represent the dimensions of the bounding box as a ratio of the overall image dimension. For example, if the input image is 700x200 pixels, and the bounding box width is 70 pixels, the width returned is 0.1. </p> <note> <p> The bounding box coordinates can have negative values. For example, if Amazon Rekognition is able to detect a face that is at the image edge and is only partially visible, the service can return coordinates that are outside the image bounds and, depending on the image edge, you might get negative values or values greater than 1 for the <code>left</code> or <code>top</code> values. </p> </note> */
		BoundingBox?: BoundingBox;
		Polygon?: Array<Point>;
	}


	/**A custom label detected in an image by a call to <a>DetectCustomLabels</a>. */
	export interface CustomLabel {
		Name?: string;
		Confidence?: number;

		/**Information about where an object (<a>DetectCustomLabels</a>) or text (<a>DetectText</a>) is located on an image. */
		Geometry?: Geometry;
	}

	export enum ProjectStatus { CREATING = 0, CREATED = 1, DELETING = 2 }

	export enum ProjectVersionStatus { TRAINING_IN_PROGRESS = 0, TRAINING_COMPLETED = 1, TRAINING_FAILED = 2, STARTING = 3, RUNNING = 4, FAILED = 5, STOPPING = 6, STOPPED = 7, DELETING = 8 }

	export enum StreamProcessorStatus { STOPPED = 0, STARTING = 1, RUNNING = 2, FAILED = 3, STOPPING = 4 }


	/**Sets up the flow definition the image will be sent to if one of the conditions is met. You can also set certain attributes of the image before review. */
	export interface HumanLoopConfig {
		HumanLoopName: string;
		FlowDefinitionArn: string;

		/**Allows you to set attributes of the image. Currently, you can declare an image as free of personally identifiable information. */
		DataAttributes?: HumanLoopDataAttributes;
	}


	/**Shows the results of the human in the loop evaluation. If there is no HumanLoopArn, the input did not trigger human review. */
	export interface HumanLoopActivationOutput {
		HumanLoopArn?: string;
		HumanLoopActivationReasons?: Array<HumanLoopActivationReason>;
		HumanLoopActivationConditionsEvaluationResults?: string;
	}


	/**A set of parameters that allow you to filter out certain results from your returned results. */
	export interface DetectionFilter {
		MinConfidence?: number;
		MinBoundingBoxHeight?: number;
		MinBoundingBoxWidth?: number;
	}


	/**A set of optional parameters that you can use to set the criteria that the text must meet to be included in your response. <code>WordFilter</code> looks at a word’s height, width, and minimum confidence. <code>RegionOfInterest</code> lets you set a specific region of the image to look for text in.  */
	export interface DetectTextFilters {

		/**A set of parameters that allow you to filter out certain results from your returned results. */
		WordFilter?: DetectionFilter;
		RegionsOfInterest?: Array<RegionOfInterest>;
	}

	export enum EmotionName { HAPPY = 0, SAD = 1, ANGRY = 2, CONFUSED = 3, DISGUSTED = 4, SURPRISED = 5, CALM = 6, UNKNOWN = 7, FEAR = 8 }


	/**The emotions that appear to be expressed on the face, and the confidence level in the determination. The API is only making a determination of the physical appearance of a person's face. It is not a determination of the person’s internal emotional state and should not be used in such a way. For example, a person pretending to have a sad face might not be sad emotionally. */
	export interface Emotion {
		Type?: EmotionType;
		Confidence?: number;
	}

	export enum EmotionType { HAPPY = 0, SAD = 1, ANGRY = 2, CONFUSED = 3, DISGUSTED = 4, SURPRISED = 5, CALM = 6, UNKNOWN = 7, FEAR = 8 }


	/**<p>The S3 bucket that contains the training summary. The training summary includes aggregated evaluation metrics for the entire testing dataset and metrics for each individual label. </p> <p>You get the training summary S3 bucket location by calling <a>DescribeProjectVersions</a>. </p> */
	export interface Summary {

		/**<p>Provides the S3 bucket name and object name.</p> <p>The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.</p> <p>For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see Resource-Based Policies in the Amazon Rekognition Developer Guide. </p> */
		S3Object?: S3Object;
	}


	/**The evaluation results for the training of a model. */
	export interface EvaluationResult {
		F1Score?: number;

		/**<p>The S3 bucket that contains the training summary. The training summary includes aggregated evaluation metrics for the entire testing dataset and metrics for each individual label. </p> <p>You get the training summary S3 bucket location by calling <a>DescribeProjectVersions</a>. </p> */
		Summary?: Summary;
	}


	/**Indicates whether or not the eyes on the face are open, and the confidence level in the determination. */
	export interface EyeOpen {
		Value?: boolean;
		Confidence?: number;
	}


	/**Indicates whether or not the face is wearing eye glasses, and the confidence level in the determination. */
	export interface Eyeglasses {
		Value?: boolean;
		Confidence?: number;
	}


	/**Describes the face properties such as the bounding box, face ID, image ID of the input image, and external image ID that you assigned.  */
	export interface Face {
		FaceId?: string;

		/**<p>Identifies the bounding box around the label, face, or text. The <code>left</code> (x-coordinate) and <code>top</code> (y-coordinate) are coordinates representing the top and left sides of the bounding box. Note that the upper-left corner of the image is the origin (0,0). </p> <p>The <code>top</code> and <code>left</code> values returned are ratios of the overall image size. For example, if the input image is 700x200 pixels, and the top-left coordinate of the bounding box is 350x50 pixels, the API returns a <code>left</code> value of 0.5 (350/700) and a <code>top</code> value of 0.25 (50/200).</p> <p>The <code>width</code> and <code>height</code> values represent the dimensions of the bounding box as a ratio of the overall image dimension. For example, if the input image is 700x200 pixels, and the bounding box width is 70 pixels, the width returned is 0.1. </p> <note> <p> The bounding box coordinates can have negative values. For example, if Amazon Rekognition is able to detect a face that is at the image edge and is only partially visible, the service can return coordinates that are outside the image bounds and, depending on the image edge, you might get negative values or values greater than 1 for the <code>left</code> or <code>top</code> values. </p> </note> */
		BoundingBox?: BoundingBox;
		ImageId?: string;
		ExternalImageId?: string;
		Confidence?: number;
	}

	export enum FaceAttributes { DEFAULT = 0, ALL = 1 }


	/**Indicates whether or not the face is smiling, and the confidence level in the determination. */
	export interface Smile {
		Value?: boolean;
		Confidence?: number;
	}


	/**Indicates whether or not the face is wearing sunglasses, and the confidence level in the determination. */
	export interface Sunglasses {
		Value?: boolean;
		Confidence?: number;
	}


	/**<p>The predicted gender of a detected face. </p> <p>Amazon Rekognition makes gender binary (male/female) predictions based on the physical appearance of a face in a particular image. This kind of prediction is not designed to categorize a person’s gender identity, and you shouldn't use Amazon Rekognition to make such a determination. For example, a male actor wearing a long-haired wig and earrings for a role might be predicted as female.</p> <p>Using Amazon Rekognition to make gender binary predictions is best suited for use cases where aggregate gender distribution statistics need to be analyzed without identifying specific users. For example, the percentage of female users compared to male users on a social media platform. </p> <p>We don't recommend using gender binary predictions to make decisions that impact&#x2028; an individual's rights, privacy, or access to services.</p> */
	export interface Gender {
		Value?: GenderValue;
		Confidence?: number;
	}

	export enum GenderValue { Male = 0, Female = 1 }


	/**Indicates whether or not the face has a mustache, and the confidence level in the determination. */
	export interface Mustache {
		Value?: boolean;
		Confidence?: number;
	}


	/**Indicates whether or not the mouth on the face is open, and the confidence level in the determination. */
	export interface MouthOpen {
		Value?: boolean;
		Confidence?: number;
	}


	/**Information about a face detected in a video analysis request and the time the face was detected in the video.  */
	export interface FaceDetection {
		Timestamp?: number;

		/**<p>Structure containing attributes of the face that the algorithm detected.</p> <p>A <code>FaceDetail</code> object contains either the default facial attributes or all facial attributes. The default attributes are <code>BoundingBox</code>, <code>Confidence</code>, <code>Landmarks</code>, <code>Pose</code>, and <code>Quality</code>.</p> <p> <a>GetFaceDetection</a> is the only Amazon Rekognition Video stored video operation that can return a <code>FaceDetail</code> object with all attributes. To specify which attributes to return, use the <code>FaceAttributes</code> input parameter for <a>StartFaceDetection</a>. The following Amazon Rekognition Video operations return only the default attributes. The corresponding Start operations don't have a <code>FaceAttributes</code> input parameter.</p> <ul> <li> <p>GetCelebrityRecognition</p> </li> <li> <p>GetPersonTracking</p> </li> <li> <p>GetFaceSearch</p> </li> </ul> <p>The Amazon Rekognition Image <a>DetectFaces</a> and <a>IndexFaces</a> operations can return all facial attributes. To specify which attributes to return, use the <code>Attributes</code> input parameter for <code>DetectFaces</code>. For <code>IndexFaces</code>, use the <code>DetectAttributes</code> input parameter.</p> */
		Face?: FaceDetail;
	}


	/**Provides face metadata. In addition, it also provides the confidence in the match of this face with the input face. */
	export interface FaceMatch {
		Similarity?: number;

		/**Describes the face properties such as the bounding box, face ID, image ID of the input image, and external image ID that you assigned. */
		Face?: Face;
	}


	/**Object containing both the face metadata (stored in the backend database), and facial attributes that are detected but aren't stored in the database. */
	export interface FaceRecord {

		/**Describes the face properties such as the bounding box, face ID, image ID of the input image, and external image ID that you assigned. */
		Face?: Face;

		/**<p>Structure containing attributes of the face that the algorithm detected.</p> <p>A <code>FaceDetail</code> object contains either the default facial attributes or all facial attributes. The default attributes are <code>BoundingBox</code>, <code>Confidence</code>, <code>Landmarks</code>, <code>Pose</code>, and <code>Quality</code>.</p> <p> <a>GetFaceDetection</a> is the only Amazon Rekognition Video stored video operation that can return a <code>FaceDetail</code> object with all attributes. To specify which attributes to return, use the <code>FaceAttributes</code> input parameter for <a>StartFaceDetection</a>. The following Amazon Rekognition Video operations return only the default attributes. The corresponding Start operations don't have a <code>FaceAttributes</code> input parameter.</p> <ul> <li> <p>GetCelebrityRecognition</p> </li> <li> <p>GetPersonTracking</p> </li> <li> <p>GetFaceSearch</p> </li> </ul> <p>The Amazon Rekognition Image <a>DetectFaces</a> and <a>IndexFaces</a> operations can return all facial attributes. To specify which attributes to return, use the <code>Attributes</code> input parameter for <code>DetectFaces</code>. For <code>IndexFaces</code>, use the <code>DetectAttributes</code> input parameter.</p> */
		FaceDetail?: FaceDetail;
	}


	/**Input face recognition parameters for an Amazon Rekognition stream processor. <code>FaceRecognitionSettings</code> is a request parameter for <a>CreateStreamProcessor</a>. */
	export interface FaceSearchSettings {
		CollectionId?: string;
		FaceMatchThreshold?: number;
	}

	export enum FaceSearchSortBy { INDEX = 0, TIMESTAMP = 1 }

	export enum GenderType { Male = 0, Female = 1 }

	export enum VideoJobStatus { IN_PROGRESS = 0, SUCCEEDED = 1, FAILED = 2 }


	/**Information about a video that Amazon Rekognition analyzed. <code>Videometadata</code> is returned in every page of paginated responses from a Amazon Rekognition video operation. */
	export interface VideoMetadata {
		Codec?: string;
		DurationMillis?: number;
		Format?: string;
		FrameRate?: number;
		FrameHeight?: number;
		FrameWidth?: number;
	}

	export enum LabelDetectionSortBy { NAME = 0, TIMESTAMP = 1 }

	export enum PersonTrackingSortBy { INDEX = 0, TIMESTAMP = 1 }


	/**<p>Provides the S3 bucket name and object name.</p> <p>The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.</p> <p>For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see Resource-Based Policies in the Amazon Rekognition Developer Guide. </p> */
	export interface S3Object {
		Bucket?: string;
		Name?: string;
		Version?: string;
	}


	/**Allows you to set attributes of the image. Currently, you can declare an image as free of personally identifiable information. */
	export interface HumanLoopDataAttributes {
		ContentClassifiers?: Array<ContentClassifier>;
	}


	/**An instance of a label returned by Amazon Rekognition Image (<a>DetectLabels</a>) or by Amazon Rekognition Video (<a>GetLabelDetection</a>). */
	export interface Instance {

		/**<p>Identifies the bounding box around the label, face, or text. The <code>left</code> (x-coordinate) and <code>top</code> (y-coordinate) are coordinates representing the top and left sides of the bounding box. Note that the upper-left corner of the image is the origin (0,0). </p> <p>The <code>top</code> and <code>left</code> values returned are ratios of the overall image size. For example, if the input image is 700x200 pixels, and the top-left coordinate of the bounding box is 350x50 pixels, the API returns a <code>left</code> value of 0.5 (350/700) and a <code>top</code> value of 0.25 (50/200).</p> <p>The <code>width</code> and <code>height</code> values represent the dimensions of the bounding box as a ratio of the overall image dimension. For example, if the input image is 700x200 pixels, and the bounding box width is 70 pixels, the width returned is 0.1. </p> <note> <p> The bounding box coordinates can have negative values. For example, if Amazon Rekognition is able to detect a face that is at the image edge and is only partially visible, the service can return coordinates that are outside the image bounds and, depending on the image edge, you might get negative values or values greater than 1 for the <code>left</code> or <code>top</code> values. </p> </note> */
		BoundingBox?: BoundingBox;
		Confidence?: number;
	}


	/**The Kinesis data stream Amazon Rekognition to which the analysis results of a Amazon Rekognition stream processor are streamed. For more information, see CreateStreamProcessor in the Amazon Rekognition Developer Guide. */
	export interface KinesisDataStream {
		Arn?: string;
	}


	/**Kinesis video stream stream that provides the source streaming video for a Amazon Rekognition Video stream processor. For more information, see CreateStreamProcessor in the Amazon Rekognition Developer Guide. */
	export interface KinesisVideoStream {
		Arn?: string;
	}


	/**<p>Structure containing details about the detected label, including the name, detected instances, parent labels, and level of confidence.</p> <p> </p> */
	export interface Label {
		Name?: string;
		Confidence?: number;
		Instances?: Array<Instance>;
		Parents?: Array<Parent>;
	}


	/**Information about a label detected in a video analysis request and the time the label was detected in the video.  */
	export interface LabelDetection {
		Timestamp?: number;

		/**<p>Structure containing details about the detected label, including the name, detected instances, parent labels, and level of confidence.</p> <p> </p> */
		Label?: Label;
	}

	export enum LandmarkType { eyeLeft = 0, eyeRight = 1, nose = 2, mouthLeft = 3, mouthRight = 4, leftEyeBrowLeft = 5, leftEyeBrowRight = 6, leftEyeBrowUp = 7, rightEyeBrowLeft = 8, rightEyeBrowRight = 9, rightEyeBrowUp = 10, leftEyeLeft = 11, leftEyeRight = 12, leftEyeUp = 13, leftEyeDown = 14, rightEyeLeft = 15, rightEyeRight = 16, rightEyeUp = 17, rightEyeDown = 18, noseLeft = 19, noseRight = 20, mouthUp = 21, mouthDown = 22, leftPupil = 23, rightPupil = 24, upperJawlineLeft = 25, midJawlineLeft = 26, chinBottom = 27, midJawlineRight = 28, upperJawlineRight = 29 }


	/**Indicates the location of the landmark on the face. */
	export interface Landmark {
		Type?: LandmarkType;
		X?: number;
		Y?: number;
	}

	export enum LandmarkType { eyeLeft = 0, eyeRight = 1, nose = 2, mouthLeft = 3, mouthRight = 4, leftEyeBrowLeft = 5, leftEyeBrowRight = 6, leftEyeBrowUp = 7, rightEyeBrowLeft = 8, rightEyeBrowRight = 9, rightEyeBrowUp = 10, leftEyeLeft = 11, leftEyeRight = 12, leftEyeUp = 13, leftEyeDown = 14, rightEyeLeft = 15, rightEyeRight = 16, rightEyeUp = 17, rightEyeDown = 18, noseLeft = 19, noseRight = 20, mouthUp = 21, mouthDown = 22, leftPupil = 23, rightPupil = 24, upperJawlineLeft = 25, midJawlineLeft = 26, chinBottom = 27, midJawlineRight = 28, upperJawlineRight = 29 }


	/**The Amazon Simple Notification Service topic to which Amazon Rekognition publishes the completion status of a video analysis operation. For more information, see <a>api-video</a>. */
	export interface NotificationChannel {
		SNSTopicArn: string;
		RoleArn: string;
	}


	/**A parent label for a label. A label can have 0, 1, or more parents.  */
	export interface Parent {
		Name?: string;
	}


	/**Details about a person detected in a video analysis request. */
	export interface PersonDetail {
		Index?: number;

		/**<p>Identifies the bounding box around the label, face, or text. The <code>left</code> (x-coordinate) and <code>top</code> (y-coordinate) are coordinates representing the top and left sides of the bounding box. Note that the upper-left corner of the image is the origin (0,0). </p> <p>The <code>top</code> and <code>left</code> values returned are ratios of the overall image size. For example, if the input image is 700x200 pixels, and the top-left coordinate of the bounding box is 350x50 pixels, the API returns a <code>left</code> value of 0.5 (350/700) and a <code>top</code> value of 0.25 (50/200).</p> <p>The <code>width</code> and <code>height</code> values represent the dimensions of the bounding box as a ratio of the overall image dimension. For example, if the input image is 700x200 pixels, and the bounding box width is 70 pixels, the width returned is 0.1. </p> <note> <p> The bounding box coordinates can have negative values. For example, if Amazon Rekognition is able to detect a face that is at the image edge and is only partially visible, the service can return coordinates that are outside the image bounds and, depending on the image edge, you might get negative values or values greater than 1 for the <code>left</code> or <code>top</code> values. </p> </note> */
		BoundingBox?: BoundingBox;

		/**<p>Structure containing attributes of the face that the algorithm detected.</p> <p>A <code>FaceDetail</code> object contains either the default facial attributes or all facial attributes. The default attributes are <code>BoundingBox</code>, <code>Confidence</code>, <code>Landmarks</code>, <code>Pose</code>, and <code>Quality</code>.</p> <p> <a>GetFaceDetection</a> is the only Amazon Rekognition Video stored video operation that can return a <code>FaceDetail</code> object with all attributes. To specify which attributes to return, use the <code>FaceAttributes</code> input parameter for <a>StartFaceDetection</a>. The following Amazon Rekognition Video operations return only the default attributes. The corresponding Start operations don't have a <code>FaceAttributes</code> input parameter.</p> <ul> <li> <p>GetCelebrityRecognition</p> </li> <li> <p>GetPersonTracking</p> </li> <li> <p>GetFaceSearch</p> </li> </ul> <p>The Amazon Rekognition Image <a>DetectFaces</a> and <a>IndexFaces</a> operations can return all facial attributes. To specify which attributes to return, use the <code>Attributes</code> input parameter for <code>DetectFaces</code>. For <code>IndexFaces</code>, use the <code>DetectAttributes</code> input parameter.</p> */
		Face?: FaceDetail;
	}


	/**<p>Details and path tracking information for a single time a person's path is tracked in a video. Amazon Rekognition operations that track people's paths return an array of <code>PersonDetection</code> objects with elements for each time a person's path is tracked in a video. </p> <p>For more information, see GetPersonTracking in the Amazon Rekognition Developer Guide. </p> */
	export interface PersonDetection {
		Timestamp?: number;

		/**Details about a person detected in a video analysis request. */
		Person?: PersonDetail;
	}


	/**Information about a person whose face matches a face(s) in an Amazon Rekognition collection. Includes information about the faces in the Amazon Rekognition collection (<a>FaceMatch</a>), information about the person (<a>PersonDetail</a>), and the time stamp for when the person was detected in a video. An array of <code>PersonMatch</code> objects is returned by <a>GetFaceSearch</a>.  */
	export interface PersonMatch {
		Timestamp?: number;

		/**Details about a person detected in a video analysis request. */
		Person?: PersonDetail;
		FaceMatches?: Array<FaceMatch>;
	}


	/**<p>The X and Y coordinates of a point on an image. The X and Y values returned are ratios of the overall image size. For example, if the input image is 700x200 and the operation returns X=0.5 and Y=0.25, then the point is at the (350,50) pixel coordinate on the image.</p> <p>An array of <code>Point</code> objects, <code>Polygon</code>, is returned by <a>DetectText</a> and by <a>DetectCustomLabels</a>. <code>Polygon</code> represents a fine-grained polygon around a detected item. For more information, see Geometry in the Amazon Rekognition Developer Guide. </p> */
	export interface Point {
		X?: number;
		Y?: number;
	}


	/**A description of a Amazon Rekognition Custom Labels project. */
	export interface ProjectDescription {
		ProjectArn?: string;
		CreationTimestamp?: Date;
		Status?: ProjectDescriptionStatus;
	}

	export enum ProjectDescriptionStatus { CREATING = 0, CREATED = 1, DELETING = 2 }


	/**A Sagemaker Groundtruth format manifest file that represents the dataset used for training. */
	export interface TrainingDataResult {

		/**The dataset used for training. */
		Input?: TrainingData;

		/**The dataset used for training. */
		Output?: TrainingData;
	}


	/**A Sagemaker Groundtruth format manifest file representing the dataset used for testing. */
	export interface TestingDataResult {

		/**The dataset used for testing. Optionally, if <code>AutoCreate</code> is set, Amazon Rekognition Custom Labels creates a testing dataset using an 80/20 split of the training dataset. */
		Input?: TestingData;

		/**The dataset used for testing. Optionally, if <code>AutoCreate</code> is set, Amazon Rekognition Custom Labels creates a testing dataset using an 80/20 split of the training dataset. */
		Output?: TestingData;
	}


	/**The description of a version of a model. */
	export interface ProjectVersionDescription {
		ProjectVersionArn?: string;
		CreationTimestamp?: Date;
		MinInferenceUnits?: number;
		Status?: ProjectVersionDescriptionStatus;
		StatusMessage?: string;
		BillableTrainingTimeInSeconds?: number;
		TrainingEndTimestamp?: Date;

		/**The S3 bucket and folder location where training output is placed. */
		OutputConfig?: OutputConfig;

		/**A Sagemaker Groundtruth format manifest file that represents the dataset used for training. */
		TrainingDataResult?: TrainingDataResult;

		/**A Sagemaker Groundtruth format manifest file representing the dataset used for testing. */
		TestingDataResult?: TestingDataResult;

		/**The evaluation results for the training of a model. */
		EvaluationResult?: EvaluationResult;
	}

	export enum ProjectVersionDescriptionStatus { TRAINING_IN_PROGRESS = 0, TRAINING_COMPLETED = 1, TRAINING_FAILED = 2, STARTING = 3, RUNNING = 4, FAILED = 5, STOPPING = 6, STOPPED = 7, DELETING = 8 }

	export enum Reason { EXCEEDS_MAX_FACES = 0, EXTREME_POSE = 1, LOW_BRIGHTNESS = 2, LOW_SHARPNESS = 3, LOW_CONFIDENCE = 4, SMALL_BOUNDING_BOX = 5, LOW_FACE_QUALITY = 6 }


	/**<p>Specifies a location within the frame that Rekognition checks for text. Uses a <code>BoundingBox</code> object to set a region of the screen.</p> <p>A word is included in the region if the word is more than half in that region. If there is more than one region, the word will be compared with all regions of the screen. Any word more than half in a region is kept in the results.</p> */
	export interface RegionOfInterest {

		/**<p>Identifies the bounding box around the label, face, or text. The <code>left</code> (x-coordinate) and <code>top</code> (y-coordinate) are coordinates representing the top and left sides of the bounding box. Note that the upper-left corner of the image is the origin (0,0). </p> <p>The <code>top</code> and <code>left</code> values returned are ratios of the overall image size. For example, if the input image is 700x200 pixels, and the top-left coordinate of the bounding box is 350x50 pixels, the API returns a <code>left</code> value of 0.5 (350/700) and a <code>top</code> value of 0.25 (50/200).</p> <p>The <code>width</code> and <code>height</code> values represent the dimensions of the bounding box as a ratio of the overall image dimension. For example, if the input image is 700x200 pixels, and the bounding box width is 70 pixels, the width returned is 0.1. </p> <note> <p> The bounding box coordinates can have negative values. For example, if Amazon Rekognition is able to detect a face that is at the image edge and is only partially visible, the service can return coordinates that are outside the image bounds and, depending on the image edge, you might get negative values or values greater than 1 for the <code>left</code> or <code>top</code> values. </p> </note> */
		BoundingBox?: BoundingBox;
	}


	/**Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as <a>StartLabelDetection</a> use <code>Video</code> to specify a video for analysis. The supported file formats are .mp4, .mov and .avi. */
	export interface Video {

		/**<p>Provides the S3 bucket name and object name.</p> <p>The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.</p> <p>For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see Resource-Based Policies in the Amazon Rekognition Developer Guide. </p> */
		S3Object?: S3Object;
	}


	/**Set of optional parameters that let you set the criteria text must meet to be included in your response. <code>WordFilter</code> looks at a word's height, width and minimum confidence. <code>RegionOfInterest</code> lets you set a specific region of the screen to look for text in. */
	export interface StartTextDetectionFilters {

		/**A set of parameters that allow you to filter out certain results from your returned results. */
		WordFilter?: DetectionFilter;
		RegionsOfInterest?: Array<RegionOfInterest>;
	}


	/**An object that recognizes faces in a streaming video. An Amazon Rekognition stream processor is created by a call to <a>CreateStreamProcessor</a>. The request parameters for <code>CreateStreamProcessor</code> describe the Kinesis video stream source for the streaming video, face recognition parameters, and where to stream the analysis resullts.  */
	export interface StreamProcessor {
		Name?: string;
		Status?: StreamProcessorStatus;
	}

	export enum StreamProcessorStatus { STOPPED = 0, STARTING = 1, RUNNING = 2, FAILED = 3, STOPPING = 4 }

	export enum TextTypes { LINE = 0, WORD = 1 }


	/**<p>Information about a word or line of text detected by <a>DetectText</a>.</p> <p>The <code>DetectedText</code> field contains the text that Amazon Rekognition detected in the image. </p> <p>Every word and line has an identifier (<code>Id</code>). Each word belongs to a line and has a parent identifier (<code>ParentId</code>) that identifies the line of text in which the word appears. The word <code>Id</code> is also an index for the word within a line of words. </p> <p>For more information, see Detecting Text in the Amazon Rekognition Developer Guide.</p> */
	export interface TextDetection {
		DetectedText?: string;
		Type?: TextDetectionType;
		Id?: number;
		ParentId?: number;
		Confidence?: number;

		/**Information about where an object (<a>DetectCustomLabels</a>) or text (<a>DetectText</a>) is located on an image. */
		Geometry?: Geometry;
	}

	export enum TextDetectionType { LINE = 0, WORD = 1 }


	/**Information about text detected in a video. Incudes the detected text, the time in milliseconds from the start of the video that the text was detected, and where it was detected on the screen. */
	export interface TextDetectionResult {
		Timestamp?: number;

		/**<p>Information about a word or line of text detected by <a>DetectText</a>.</p> <p>The <code>DetectedText</code> field contains the text that Amazon Rekognition detected in the image. </p> <p>Every word and line has an identifier (<code>Id</code>). Each word belongs to a line and has a parent identifier (<code>ParentId</code>) that identifies the line of text in which the word appears. The word <code>Id</code> is also an index for the word within a line of words. </p> <p>For more information, see Detecting Text in the Amazon Rekognition Developer Guide.</p> */
		TextDetection?: TextDetection;
	}


	/**A face that <a>IndexFaces</a> detected, but didn't index. Use the <code>Reasons</code> response attribute to determine why a face wasn't indexed. */
	export interface UnindexedFace {
		Reasons?: Array<Reason>;

		/**<p>Structure containing attributes of the face that the algorithm detected.</p> <p>A <code>FaceDetail</code> object contains either the default facial attributes or all facial attributes. The default attributes are <code>BoundingBox</code>, <code>Confidence</code>, <code>Landmarks</code>, <code>Pose</code>, and <code>Quality</code>.</p> <p> <a>GetFaceDetection</a> is the only Amazon Rekognition Video stored video operation that can return a <code>FaceDetail</code> object with all attributes. To specify which attributes to return, use the <code>FaceAttributes</code> input parameter for <a>StartFaceDetection</a>. The following Amazon Rekognition Video operations return only the default attributes. The corresponding Start operations don't have a <code>FaceAttributes</code> input parameter.</p> <ul> <li> <p>GetCelebrityRecognition</p> </li> <li> <p>GetPersonTracking</p> </li> <li> <p>GetFaceSearch</p> </li> </ul> <p>The Amazon Rekognition Image <a>DetectFaces</a> and <a>IndexFaces</a> operations can return all facial attributes. To specify which attributes to return, use the <code>Attributes</code> input parameter for <code>DetectFaces</code>. For <code>IndexFaces</code>, use the <code>DetectAttributes</code> input parameter.</p> */
		FaceDetail?: FaceDetail;
	}

	@Injectable()
	export class DemoClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Compares a face in the <i>source</i> input image with each of the 100 largest faces detected in the <i>target</i> input image. </p> <note> <p> If the source image contains multiple faces, the service detects the largest face and compares it with each face detected in the target image. </p> </note> <p>You pass the input and target images either as base64-encoded image bytes or as references to images in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes isn't supported. The image must be formatted as a PNG or JPEG file. </p> <p>In response, the operation returns an array of face matches ordered by similarity score in descending order. For each face match, the response provides a bounding box of the face, facial landmarks, pose details (pitch, role, and yaw), quality (brightness and sharpness), and confidence value (indicating the level of confidence that the bounding box contains a face). The response also provides a similarity score, which indicates how closely the faces match. </p> <note> <p>By default, only faces with a similarity score of greater than or equal to 80% are returned in the response. You can change this value by specifying the <code>SimilarityThreshold</code> parameter.</p> </note> <p> <code>CompareFaces</code> also returns an array of faces that don't match the source image. For each face, it returns a bounding box, confidence value, landmarks, pose details, and quality. The response also returns information about the face in the source image, including the bounding box of the face and confidence value.</p> <p>The <code>QualityFilter</code> input parameter allows you to filter out detected faces that don’t meet a required quality bar. The quality bar is based on a variety of common use cases. Use <code>QualityFilter</code> to set the quality bar by specifying <code>LOW</code>, <code>MEDIUM</code>, or <code>HIGH</code>. If you do not want to filter detected faces, specify <code>NONE</code>. The default value is <code>NONE</code>. </p> <note> <p>To use quality filtering, you need a collection associated with version 3 of the face model or higher. To get the version of the face model associated with a collection, call <a>DescribeCollection</a>. </p> </note> <p>If the image doesn't contain Exif metadata, <code>CompareFaces</code> returns orientation information for the source and target images. Use these values to display the images with the correct image orientation.</p> <p>If no faces are detected in the source or target images, <code>CompareFaces</code> returns an <code>InvalidParameterException</code> error. </p> <note> <p> This is a stateless API operation. That is, data returned by this operation doesn't persist.</p> </note> <p>For an example, see Comparing Faces in Images in the Amazon Rekognition Developer Guide.</p> <p>This operation requires permissions to perform the <code>rekognition:CompareFaces</code> action.</p>
		 * Post /#X-Amz-Target=RekognitionService.CompareFaces
		 * @return {CompareFacesResponse} Success
		 */
		CompareFaces(requestBody: CompareFacesRequest, headersHandler?: () => HttpHeaders): Observable<CompareFacesResponse> {
			return this.http.post<CompareFacesResponse>(this.baseUri + '/#X-Amz-Target=RekognitionService.CompareFaces', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Creates a collection in an AWS Region. You can add faces to the collection using the <a>IndexFaces</a> operation. </p> <p>For example, you might create collections, one for each of your application users. A user can then index faces using the <code>IndexFaces</code> operation and persist results in a specific collection. Then, a user can search the collection for faces in the user-specific container. </p> <p>When you create a collection, it is associated with the latest version of the face model version.</p> <note> <p>Collection names are case-sensitive.</p> </note> <p>This operation requires permissions to perform the <code>rekognition:CreateCollection</code> action.</p>
		 * Post /#X-Amz-Target=RekognitionService.CreateCollection
		 * @return {CreateCollectionResponse} Success
		 */
		CreateCollection(requestBody: CreateCollectionRequest, headersHandler?: () => HttpHeaders): Observable<CreateCollectionResponse> {
			return this.http.post<CreateCollectionResponse>(this.baseUri + '/#X-Amz-Target=RekognitionService.CreateCollection', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Creates a new Amazon Rekognition Custom Labels project. A project is a logical grouping of resources (images, Labels, models) and operations (training, evaluation and detection). </p> <p>This operation requires permissions to perform the <code>rekognition:CreateProject</code> action.</p>
		 * Post /#X-Amz-Target=RekognitionService.CreateProject
		 * @return {CreateProjectResponse} Success
		 */
		CreateProject(requestBody: CreateProjectRequest, headersHandler?: () => HttpHeaders): Observable<CreateProjectResponse> {
			return this.http.post<CreateProjectResponse>(this.baseUri + '/#X-Amz-Target=RekognitionService.CreateProject', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Creates a new version of a model and begins training. Models are managed as part of an Amazon Rekognition Custom Labels project. You can specify one training dataset and one testing dataset. The response from <code>CreateProjectVersion</code> is an Amazon Resource Name (ARN) for the version of the model. </p> <p>Training takes a while to complete. You can get the current status by calling <a>DescribeProjectVersions</a>.</p> <p>Once training has successfully completed, call <a>DescribeProjectVersions</a> to get the training results and evaluate the model. </p> <p>After evaluating the model, you start the model by calling <a>StartProjectVersion</a>.</p> <p>This operation requires permissions to perform the <code>rekognition:CreateProjectVersion</code> action.</p>
		 * Post /#X-Amz-Target=RekognitionService.CreateProjectVersion
		 * @return {CreateProjectVersionResponse} Success
		 */
		CreateProjectVersion(requestBody: CreateProjectVersionRequest, headersHandler?: () => HttpHeaders): Observable<CreateProjectVersionResponse> {
			return this.http.post<CreateProjectVersionResponse>(this.baseUri + '/#X-Amz-Target=RekognitionService.CreateProjectVersion', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Creates an Amazon Rekognition stream processor that you can use to detect and recognize faces in a streaming video.</p> <p>Amazon Rekognition Video is a consumer of live video from Amazon Kinesis Video Streams. Amazon Rekognition Video sends analysis results to Amazon Kinesis Data Streams.</p> <p>You provide as input a Kinesis video stream (<code>Input</code>) and a Kinesis data stream (<code>Output</code>) stream. You also specify the face recognition criteria in <code>Settings</code>. For example, the collection containing faces that you want to recognize. Use <code>Name</code> to assign an identifier for the stream processor. You use <code>Name</code> to manage the stream processor. For example, you can start processing the source video by calling <a>StartStreamProcessor</a> with the <code>Name</code> field. </p> <p>After you have finished analyzing a streaming video, use <a>StopStreamProcessor</a> to stop processing. You can delete the stream processor by calling <a>DeleteStreamProcessor</a>.</p>
		 * Post /#X-Amz-Target=RekognitionService.CreateStreamProcessor
		 * @return {CreateStreamProcessorResponse} Success
		 */
		CreateStreamProcessor(requestBody: CreateStreamProcessorRequest, headersHandler?: () => HttpHeaders): Observable<CreateStreamProcessorResponse> {
			return this.http.post<CreateStreamProcessorResponse>(this.baseUri + '/#X-Amz-Target=RekognitionService.CreateStreamProcessor', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Deletes the specified collection. Note that this operation removes all faces in the collection. For an example, see <a>delete-collection-procedure</a>.</p> <p>This operation requires permissions to perform the <code>rekognition:DeleteCollection</code> action.</p>
		 * Post /#X-Amz-Target=RekognitionService.DeleteCollection
		 * @return {DeleteCollectionResponse} Success
		 */
		DeleteCollection(requestBody: DeleteCollectionRequest, headersHandler?: () => HttpHeaders): Observable<DeleteCollectionResponse> {
			return this.http.post<DeleteCollectionResponse>(this.baseUri + '/#X-Amz-Target=RekognitionService.DeleteCollection', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Deletes faces from a collection. You specify a collection ID and an array of face IDs to remove from the collection.</p> <p>This operation requires permissions to perform the <code>rekognition:DeleteFaces</code> action.</p>
		 * Post /#X-Amz-Target=RekognitionService.DeleteFaces
		 * @return {DeleteFacesResponse} Success
		 */
		DeleteFaces(requestBody: DeleteFacesRequest, headersHandler?: () => HttpHeaders): Observable<DeleteFacesResponse> {
			return this.http.post<DeleteFacesResponse>(this.baseUri + '/#X-Amz-Target=RekognitionService.DeleteFaces', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Deletes an Amazon Rekognition Custom Labels project. To delete a project you must first delete all versions of the model associated with the project. To delete a version of a model, see <a>DeleteProjectVersion</a>.</p> <p>This operation requires permissions to perform the <code>rekognition:DeleteProject</code> action. </p>
		 * Post /#X-Amz-Target=RekognitionService.DeleteProject
		 * @return {DeleteProjectResponse} Success
		 */
		DeleteProject(requestBody: DeleteProjectRequest, headersHandler?: () => HttpHeaders): Observable<DeleteProjectResponse> {
			return this.http.post<DeleteProjectResponse>(this.baseUri + '/#X-Amz-Target=RekognitionService.DeleteProject', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Deletes a version of a model. </p> <p>You must first stop the model before you can delete it. To check if a model is running, use the <code>Status</code> field returned from <a>DescribeProjectVersions</a>. To stop a running model call <a>StopProjectVersion</a>. </p> <p>This operation requires permissions to perform the <code>rekognition:DeleteProjectVersion</code> action. </p>
		 * Post /#X-Amz-Target=RekognitionService.DeleteProjectVersion
		 * @return {DeleteProjectVersionResponse} Success
		 */
		DeleteProjectVersion(requestBody: DeleteProjectVersionRequest, headersHandler?: () => HttpHeaders): Observable<DeleteProjectVersionResponse> {
			return this.http.post<DeleteProjectVersionResponse>(this.baseUri + '/#X-Amz-Target=RekognitionService.DeleteProjectVersion', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Deletes the stream processor identified by <code>Name</code>. You assign the value for <code>Name</code> when you create the stream processor with <a>CreateStreamProcessor</a>. You might not be able to use the same name for a stream processor for a few seconds after calling <code>DeleteStreamProcessor</code>.
		 * Post /#X-Amz-Target=RekognitionService.DeleteStreamProcessor
		 * @return {DeleteStreamProcessorResponse} Success
		 */
		DeleteStreamProcessor(requestBody: DeleteStreamProcessorRequest, headersHandler?: () => HttpHeaders): Observable<DeleteStreamProcessorResponse> {
			return this.http.post<DeleteStreamProcessorResponse>(this.baseUri + '/#X-Amz-Target=RekognitionService.DeleteStreamProcessor', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Describes the specified collection. You can use <code>DescribeCollection</code> to get information, such as the number of faces indexed into a collection and the version of the model used by the collection for face detection.</p> <p>For more information, see Describing a Collection in the Amazon Rekognition Developer Guide.</p>
		 * Post /#X-Amz-Target=RekognitionService.DescribeCollection
		 * @return {DescribeCollectionResponse} Success
		 */
		DescribeCollection(requestBody: DescribeCollectionRequest, headersHandler?: () => HttpHeaders): Observable<DescribeCollectionResponse> {
			return this.http.post<DescribeCollectionResponse>(this.baseUri + '/#X-Amz-Target=RekognitionService.DescribeCollection', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Lists and describes the models in an Amazon Rekognition Custom Labels project. You can specify up to 10 model versions in <code>ProjectVersionArns</code>. If you don't specify a value, descriptions for all models are returned.</p> <p>This operation requires permissions to perform the <code>rekognition:DescribeProjectVersions</code> action.</p>
		 * Post /#X-Amz-Target=RekognitionService.DescribeProjectVersions
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeProjectVersionsResponse} Success
		 */
		DescribeProjectVersions(MaxResults: string, NextToken: string, requestBody: DescribeProjectVersionsRequest, headersHandler?: () => HttpHeaders): Observable<DescribeProjectVersionsResponse> {
			return this.http.post<DescribeProjectVersionsResponse>(this.baseUri + '/#X-Amz-Target=RekognitionService.DescribeProjectVersions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Lists and gets information about your Amazon Rekognition Custom Labels projects.</p> <p>This operation requires permissions to perform the <code>rekognition:DescribeProjects</code> action.</p>
		 * Post /#X-Amz-Target=RekognitionService.DescribeProjects
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeProjectsResponse} Success
		 */
		DescribeProjects(MaxResults: string, NextToken: string, requestBody: DescribeProjectsRequest, headersHandler?: () => HttpHeaders): Observable<DescribeProjectsResponse> {
			return this.http.post<DescribeProjectsResponse>(this.baseUri + '/#X-Amz-Target=RekognitionService.DescribeProjects?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Provides information about a stream processor created by <a>CreateStreamProcessor</a>. You can get information about the input and output streams, the input parameters for the face recognition being performed, and the current status of the stream processor.
		 * Post /#X-Amz-Target=RekognitionService.DescribeStreamProcessor
		 * @return {DescribeStreamProcessorResponse} Success
		 */
		DescribeStreamProcessor(requestBody: DescribeStreamProcessorRequest, headersHandler?: () => HttpHeaders): Observable<DescribeStreamProcessorResponse> {
			return this.http.post<DescribeStreamProcessorResponse>(this.baseUri + '/#X-Amz-Target=RekognitionService.DescribeStreamProcessor', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Detects custom labels in a supplied image by using an Amazon Rekognition Custom Labels model. </p> <p>You specify which version of a model version to use by using the <code>ProjectVersionArn</code> input parameter. </p> <p>You pass the input image as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes is not supported. The image must be either a PNG or JPEG formatted file. </p> <p> For each object that the model version detects on an image, the API returns a (<code>CustomLabel</code>) object in an array (<code>CustomLabels</code>). Each <code>CustomLabel</code> object provides the label name (<code>Name</code>), the level of confidence that the image contains the object (<code>Confidence</code>), and object location information, if it exists, for the label on the image (<code>Geometry</code>). </p> <p>During training model calculates a threshold value that determines if a prediction for a label is true. By default, <code>DetectCustomLabels</code> doesn't return labels whose confidence value is below the model's calculated threshold value. To filter labels that are returned, specify a value for <code>MinConfidence</code> that is higher than the model's calculated threshold. You can get the model's calculated threshold from the model's training results shown in the Amazon Rekognition Custom Labels console. To get all labels, regardless of confidence, specify a <code>MinConfidence</code> value of 0. </p> <p>You can also add the <code>MaxResults</code> parameter to limit the number of labels returned. </p> <p>This is a stateless API operation. That is, the operation does not persist any data.</p> <p>This operation requires permissions to perform the <code>rekognition:DetectCustomLabels</code> action. </p>
		 * Post /#X-Amz-Target=RekognitionService.DetectCustomLabels
		 * @return {DetectCustomLabelsResponse} Success
		 */
		DetectCustomLabels(requestBody: DetectCustomLabelsRequest, headersHandler?: () => HttpHeaders): Observable<DetectCustomLabelsResponse> {
			return this.http.post<DetectCustomLabelsResponse>(this.baseUri + '/#X-Amz-Target=RekognitionService.DetectCustomLabels', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Detects faces within an image that is provided as input.</p> <p> <code>DetectFaces</code> detects the 100 largest faces in the image. For each face detected, the operation returns face details. These details include a bounding box of the face, a confidence value (that the bounding box contains a face), and a fixed set of attributes such as facial landmarks (for example, coordinates of eye and mouth), presence of beard, sunglasses, and so on. </p> <p>The face-detection algorithm is most effective on frontal faces. For non-frontal or obscured faces, the algorithm might not detect the faces or might detect faces with lower confidence. </p> <p>You pass the input image either as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes is not supported. The image must be either a PNG or JPEG formatted file. </p> <note> <p>This is a stateless API operation. That is, the operation does not persist any data.</p> </note> <p>This operation requires permissions to perform the <code>rekognition:DetectFaces</code> action. </p>
		 * Post /#X-Amz-Target=RekognitionService.DetectFaces
		 * @return {DetectFacesResponse} Success
		 */
		DetectFaces(requestBody: DetectFacesRequest, headersHandler?: () => HttpHeaders): Observable<DetectFacesResponse> {
			return this.http.post<DetectFacesResponse>(this.baseUri + '/#X-Amz-Target=RekognitionService.DetectFaces', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Detects instances of real-world entities within an image (JPEG or PNG) provided as input. This includes objects like flower, tree, and table; events like wedding, graduation, and birthday party; and concepts like landscape, evening, and nature. </p> <p>For an example, see Analyzing Images Stored in an Amazon S3 Bucket in the Amazon Rekognition Developer Guide.</p> <note> <p> <code>DetectLabels</code> does not support the detection of activities. However, activity detection is supported for label detection in videos. For more information, see StartLabelDetection in the Amazon Rekognition Developer Guide.</p> </note> <p>You pass the input image as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes is not supported. The image must be either a PNG or JPEG formatted file. </p> <p> For each object, scene, and concept the API returns one or more labels. Each label provides the object name, and the level of confidence that the image contains the object. For example, suppose the input image has a lighthouse, the sea, and a rock. The response includes all three labels, one for each object. </p> <p> <code>{Name: lighthouse, Confidence: 98.4629}</code> </p> <p> <code>{Name: rock,Confidence: 79.2097}</code> </p> <p> <code> {Name: sea,Confidence: 75.061}</code> </p> <p>In the preceding example, the operation returns one label for each of the three objects. The operation can also return multiple labels for the same object in the image. For example, if the input image shows a flower (for example, a tulip), the operation might return the following three labels. </p> <p> <code>{Name: flower,Confidence: 99.0562}</code> </p> <p> <code>{Name: plant,Confidence: 99.0562}</code> </p> <p> <code>{Name: tulip,Confidence: 99.0562}</code> </p> <p>In this example, the detection algorithm more precisely identifies the flower as a tulip.</p> <p>In response, the API returns an array of labels. In addition, the response also includes the orientation correction. Optionally, you can specify <code>MinConfidence</code> to control the confidence threshold for the labels returned. The default is 55%. You can also add the <code>MaxLabels</code> parameter to limit the number of labels returned. </p> <note> <p>If the object detected is a person, the operation doesn't provide the same facial details that the <a>DetectFaces</a> operation provides.</p> </note> <p> <code>DetectLabels</code> returns bounding boxes for instances of common object labels in an array of <a>Instance</a> objects. An <code>Instance</code> object contains a <a>BoundingBox</a> object, for the location of the label on the image. It also includes the confidence by which the bounding box was detected.</p> <p> <code>DetectLabels</code> also returns a hierarchical taxonomy of detected labels. For example, a detected car might be assigned the label <i>car</i>. The label <i>car</i> has two parent labels: <i>Vehicle</i> (its parent) and <i>Transportation</i> (its grandparent). The response returns the entire list of ancestors for a label. Each ancestor is a unique label in the response. In the previous example, <i>Car</i>, <i>Vehicle</i>, and <i>Transportation</i> are returned as unique labels in the response. </p> <p>This is a stateless API operation. That is, the operation does not persist any data.</p> <p>This operation requires permissions to perform the <code>rekognition:DetectLabels</code> action. </p>
		 * Post /#X-Amz-Target=RekognitionService.DetectLabels
		 * @return {DetectLabelsResponse} Success
		 */
		DetectLabels(requestBody: DetectLabelsRequest, headersHandler?: () => HttpHeaders): Observable<DetectLabelsResponse> {
			return this.http.post<DetectLabelsResponse>(this.baseUri + '/#X-Amz-Target=RekognitionService.DetectLabels', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Detects unsafe content in a specified JPEG or PNG format image. Use <code>DetectModerationLabels</code> to moderate images depending on your requirements. For example, you might want to filter images that contain nudity, but not images containing suggestive content.</p> <p>To filter images, use the labels returned by <code>DetectModerationLabels</code> to determine which types of content are appropriate.</p> <p>For information about moderation labels, see Detecting Unsafe Content in the Amazon Rekognition Developer Guide.</p> <p>You pass the input image either as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes is not supported. The image must be either a PNG or JPEG formatted file. </p>
		 * Post /#X-Amz-Target=RekognitionService.DetectModerationLabels
		 * @return {DetectModerationLabelsResponse} Success
		 */
		DetectModerationLabels(requestBody: DetectModerationLabelsRequest, headersHandler?: () => HttpHeaders): Observable<DetectModerationLabelsResponse> {
			return this.http.post<DetectModerationLabelsResponse>(this.baseUri + '/#X-Amz-Target=RekognitionService.DetectModerationLabels', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Detects text in the input image and converts it into machine-readable text.</p> <p>Pass the input image as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, you must pass it as a reference to an image in an Amazon S3 bucket. For the AWS CLI, passing image bytes is not supported. The image must be either a .png or .jpeg formatted file. </p> <p>The <code>DetectText</code> operation returns text in an array of <a>TextDetection</a> elements, <code>TextDetections</code>. Each <code>TextDetection</code> element provides information about a single word or line of text that was detected in the image. </p> <p>A word is one or more ISO basic latin script characters that are not separated by spaces. <code>DetectText</code> can detect up to 50 words in an image.</p> <p>A line is a string of equally spaced words. A line isn't necessarily a complete sentence. For example, a driver's license number is detected as a line. A line ends when there is no aligned text after it. Also, a line ends when there is a large gap between words, relative to the length of the words. This means, depending on the gap between words, Amazon Rekognition may detect multiple lines in text aligned in the same direction. Periods don't represent the end of a line. If a sentence spans multiple lines, the <code>DetectText</code> operation returns multiple lines.</p> <p>To determine whether a <code>TextDetection</code> element is a line of text or a word, use the <code>TextDetection</code> object <code>Type</code> field. </p> <p>To be detected, text must be within +/- 90 degrees orientation of the horizontal axis.</p> <p>For more information, see DetectText in the Amazon Rekognition Developer Guide.</p>
		 * Post /#X-Amz-Target=RekognitionService.DetectText
		 * @return {DetectTextResponse} Success
		 */
		DetectText(requestBody: DetectTextRequest, headersHandler?: () => HttpHeaders): Observable<DetectTextResponse> {
			return this.http.post<DetectTextResponse>(this.baseUri + '/#X-Amz-Target=RekognitionService.DetectText', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Gets the name and additional information about a celebrity based on his or her Amazon Rekognition ID. The additional information is returned as an array of URLs. If there is no additional information about the celebrity, this list is empty.</p> <p>For more information, see Recognizing Celebrities in an Image in the Amazon Rekognition Developer Guide.</p> <p>This operation requires permissions to perform the <code>rekognition:GetCelebrityInfo</code> action. </p>
		 * Post /#X-Amz-Target=RekognitionService.GetCelebrityInfo
		 * @return {GetCelebrityInfoResponse} Success
		 */
		GetCelebrityInfo(requestBody: GetCelebrityInfoRequest, headersHandler?: () => HttpHeaders): Observable<GetCelebrityInfoResponse> {
			return this.http.post<GetCelebrityInfoResponse>(this.baseUri + '/#X-Amz-Target=RekognitionService.GetCelebrityInfo', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Gets the celebrity recognition results for a Amazon Rekognition Video analysis started by <a>StartCelebrityRecognition</a>.</p> <p>Celebrity recognition in a video is an asynchronous operation. Analysis is started by a call to <a>StartCelebrityRecognition</a> which returns a job identifier (<code>JobId</code>). When the celebrity recognition operation finishes, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic registered in the initial call to <code>StartCelebrityRecognition</code>. To get the results of the celebrity recognition analysis, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <code>GetCelebrityDetection</code> and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartCelebrityDetection</code>. </p> <p>For more information, see Working With Stored Videos in the Amazon Rekognition Developer Guide.</p> <p> <code>GetCelebrityRecognition</code> returns detected celebrities and the time(s) they are detected in an array (<code>Celebrities</code>) of <a>CelebrityRecognition</a> objects. Each <code>CelebrityRecognition</code> contains information about the celebrity in a <a>CelebrityDetail</a> object and the time, <code>Timestamp</code>, the celebrity was detected. </p> <note> <p> <code>GetCelebrityRecognition</code> only returns the default facial attributes (<code>BoundingBox</code>, <code>Confidence</code>, <code>Landmarks</code>, <code>Pose</code>, and <code>Quality</code>). The other facial attributes listed in the <code>Face</code> object of the following response syntax are not returned. For more information, see FaceDetail in the Amazon Rekognition Developer Guide. </p> </note> <p>By default, the <code>Celebrities</code> array is sorted by time (milliseconds from the start of the video). You can also sort the array by celebrity by specifying the value <code>ID</code> in the <code>SortBy</code> input parameter.</p> <p>The <code>CelebrityDetail</code> object includes the celebrity identifer and additional information urls. If you don't store the additional information urls, you can get them later by calling <a>GetCelebrityInfo</a> with the celebrity identifer.</p> <p>No information is returned for faces not recognized as celebrities.</p> <p>Use MaxResults parameter to limit the number of labels returned. If there are more results than specified in <code>MaxResults</code>, the value of <code>NextToken</code> in the operation response contains a pagination token for getting the next set of results. To get the next page of results, call <code>GetCelebrityDetection</code> and populate the <code>NextToken</code> request parameter with the token value returned from the previous call to <code>GetCelebrityRecognition</code>.</p>
		 * Post /#X-Amz-Target=RekognitionService.GetCelebrityRecognition
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetCelebrityRecognitionResponse} Success
		 */
		GetCelebrityRecognition(MaxResults: string, NextToken: string, requestBody: GetCelebrityRecognitionRequest, headersHandler?: () => HttpHeaders): Observable<GetCelebrityRecognitionResponse> {
			return this.http.post<GetCelebrityRecognitionResponse>(this.baseUri + '/#X-Amz-Target=RekognitionService.GetCelebrityRecognition?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Gets the unsafe content analysis results for a Amazon Rekognition Video analysis started by <a>StartContentModeration</a>.</p> <p>Unsafe content analysis of a video is an asynchronous operation. You start analysis by calling <a>StartContentModeration</a> which returns a job identifier (<code>JobId</code>). When analysis finishes, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic registered in the initial call to <code>StartContentModeration</code>. To get the results of the unsafe content analysis, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <code>GetContentModeration</code> and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartContentModeration</code>. </p> <p>For more information, see Working with Stored Videos in the Amazon Rekognition Devlopers Guide.</p> <p> <code>GetContentModeration</code> returns detected unsafe content labels, and the time they are detected, in an array, <code>ModerationLabels</code>, of <a>ContentModerationDetection</a> objects. </p> <p>By default, the moderated labels are returned sorted by time, in milliseconds from the start of the video. You can also sort them by moderated label by specifying <code>NAME</code> for the <code>SortBy</code> input parameter. </p> <p>Since video analysis can return a large number of results, use the <code>MaxResults</code> parameter to limit the number of labels returned in a single call to <code>GetContentModeration</code>. If there are more results than specified in <code>MaxResults</code>, the value of <code>NextToken</code> in the operation response contains a pagination token for getting the next set of results. To get the next page of results, call <code>GetContentModeration</code> and populate the <code>NextToken</code> request parameter with the value of <code>NextToken</code> returned from the previous call to <code>GetContentModeration</code>.</p> <p>For more information, see Detecting Unsafe Content in the Amazon Rekognition Developer Guide.</p>
		 * Post /#X-Amz-Target=RekognitionService.GetContentModeration
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetContentModerationResponse} Success
		 */
		GetContentModeration(MaxResults: string, NextToken: string, requestBody: GetContentModerationRequest, headersHandler?: () => HttpHeaders): Observable<GetContentModerationResponse> {
			return this.http.post<GetContentModerationResponse>(this.baseUri + '/#X-Amz-Target=RekognitionService.GetContentModeration?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Gets face detection results for a Amazon Rekognition Video analysis started by <a>StartFaceDetection</a>.</p> <p>Face detection with Amazon Rekognition Video is an asynchronous operation. You start face detection by calling <a>StartFaceDetection</a> which returns a job identifier (<code>JobId</code>). When the face detection operation finishes, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic registered in the initial call to <code>StartFaceDetection</code>. To get the results of the face detection operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <a>GetFaceDetection</a> and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartFaceDetection</code>.</p> <p> <code>GetFaceDetection</code> returns an array of detected faces (<code>Faces</code>) sorted by the time the faces were detected. </p> <p>Use MaxResults parameter to limit the number of labels returned. If there are more results than specified in <code>MaxResults</code>, the value of <code>NextToken</code> in the operation response contains a pagination token for getting the next set of results. To get the next page of results, call <code>GetFaceDetection</code> and populate the <code>NextToken</code> request parameter with the token value returned from the previous call to <code>GetFaceDetection</code>.</p>
		 * Post /#X-Amz-Target=RekognitionService.GetFaceDetection
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetFaceDetectionResponse} Success
		 */
		GetFaceDetection(MaxResults: string, NextToken: string, requestBody: GetFaceDetectionRequest, headersHandler?: () => HttpHeaders): Observable<GetFaceDetectionResponse> {
			return this.http.post<GetFaceDetectionResponse>(this.baseUri + '/#X-Amz-Target=RekognitionService.GetFaceDetection?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Gets the face search results for Amazon Rekognition Video face search started by <a>StartFaceSearch</a>. The search returns faces in a collection that match the faces of persons detected in a video. It also includes the time(s) that faces are matched in the video.</p> <p>Face search in a video is an asynchronous operation. You start face search by calling to <a>StartFaceSearch</a> which returns a job identifier (<code>JobId</code>). When the search operation finishes, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic registered in the initial call to <code>StartFaceSearch</code>. To get the search results, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <code>GetFaceSearch</code> and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartFaceSearch</code>.</p> <p>For more information, see Searching Faces in a Collection in the Amazon Rekognition Developer Guide.</p> <p>The search results are retured in an array, <code>Persons</code>, of <a>PersonMatch</a> objects. Each<code>PersonMatch</code> element contains details about the matching faces in the input collection, person information (facial attributes, bounding boxes, and person identifer) for the matched person, and the time the person was matched in the video.</p> <note> <p> <code>GetFaceSearch</code> only returns the default facial attributes (<code>BoundingBox</code>, <code>Confidence</code>, <code>Landmarks</code>, <code>Pose</code>, and <code>Quality</code>). The other facial attributes listed in the <code>Face</code> object of the following response syntax are not returned. For more information, see FaceDetail in the Amazon Rekognition Developer Guide. </p> </note> <p>By default, the <code>Persons</code> array is sorted by the time, in milliseconds from the start of the video, persons are matched. You can also sort by persons by specifying <code>INDEX</code> for the <code>SORTBY</code> input parameter.</p>
		 * Post /#X-Amz-Target=RekognitionService.GetFaceSearch
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetFaceSearchResponse} Success
		 */
		GetFaceSearch(MaxResults: string, NextToken: string, requestBody: GetFaceSearchRequest, headersHandler?: () => HttpHeaders): Observable<GetFaceSearchResponse> {
			return this.http.post<GetFaceSearchResponse>(this.baseUri + '/#X-Amz-Target=RekognitionService.GetFaceSearch?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Gets the label detection results of a Amazon Rekognition Video analysis started by <a>StartLabelDetection</a>. </p> <p>The label detection operation is started by a call to <a>StartLabelDetection</a> which returns a job identifier (<code>JobId</code>). When the label detection operation finishes, Amazon Rekognition publishes a completion status to the Amazon Simple Notification Service topic registered in the initial call to <code>StartlabelDetection</code>. To get the results of the label detection operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <a>GetLabelDetection</a> and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartLabelDetection</code>.</p> <p> <code>GetLabelDetection</code> returns an array of detected labels (<code>Labels</code>) sorted by the time the labels were detected. You can also sort by the label name by specifying <code>NAME</code> for the <code>SortBy</code> input parameter.</p> <p>The labels returned include the label name, the percentage confidence in the accuracy of the detected label, and the time the label was detected in the video.</p> <p>The returned labels also include bounding box information for common objects, a hierarchical taxonomy of detected labels, and the version of the label model used for detection.</p> <p>Use MaxResults parameter to limit the number of labels returned. If there are more results than specified in <code>MaxResults</code>, the value of <code>NextToken</code> in the operation response contains a pagination token for getting the next set of results. To get the next page of results, call <code>GetlabelDetection</code> and populate the <code>NextToken</code> request parameter with the token value returned from the previous call to <code>GetLabelDetection</code>.</p>
		 * Post /#X-Amz-Target=RekognitionService.GetLabelDetection
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetLabelDetectionResponse} Success
		 */
		GetLabelDetection(MaxResults: string, NextToken: string, requestBody: GetLabelDetectionRequest, headersHandler?: () => HttpHeaders): Observable<GetLabelDetectionResponse> {
			return this.http.post<GetLabelDetectionResponse>(this.baseUri + '/#X-Amz-Target=RekognitionService.GetLabelDetection?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Gets the path tracking results of a Amazon Rekognition Video analysis started by <a>StartPersonTracking</a>.</p> <p>The person path tracking operation is started by a call to <code>StartPersonTracking</code> which returns a job identifier (<code>JobId</code>). When the operation finishes, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic registered in the initial call to <code>StartPersonTracking</code>.</p> <p>To get the results of the person path tracking operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <a>GetPersonTracking</a> and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartPersonTracking</code>.</p> <p> <code>GetPersonTracking</code> returns an array, <code>Persons</code>, of tracked persons and the time(s) their paths were tracked in the video. </p> <note> <p> <code>GetPersonTracking</code> only returns the default facial attributes (<code>BoundingBox</code>, <code>Confidence</code>, <code>Landmarks</code>, <code>Pose</code>, and <code>Quality</code>). The other facial attributes listed in the <code>Face</code> object of the following response syntax are not returned. </p> <p>For more information, see FaceDetail in the Amazon Rekognition Developer Guide.</p> </note> <p>By default, the array is sorted by the time(s) a person's path is tracked in the video. You can sort by tracked persons by specifying <code>INDEX</code> for the <code>SortBy</code> input parameter.</p> <p>Use the <code>MaxResults</code> parameter to limit the number of items returned. If there are more results than specified in <code>MaxResults</code>, the value of <code>NextToken</code> in the operation response contains a pagination token for getting the next set of results. To get the next page of results, call <code>GetPersonTracking</code> and populate the <code>NextToken</code> request parameter with the token value returned from the previous call to <code>GetPersonTracking</code>.</p>
		 * Post /#X-Amz-Target=RekognitionService.GetPersonTracking
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetPersonTrackingResponse} Success
		 */
		GetPersonTracking(MaxResults: string, NextToken: string, requestBody: GetPersonTrackingRequest, headersHandler?: () => HttpHeaders): Observable<GetPersonTrackingResponse> {
			return this.http.post<GetPersonTrackingResponse>(this.baseUri + '/#X-Amz-Target=RekognitionService.GetPersonTracking?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Gets the text detection results of a Amazon Rekognition Video analysis started by <a>StartTextDetection</a>.</p> <p>Text detection with Amazon Rekognition Video is an asynchronous operation. You start text detection by calling <a>StartTextDetection</a> which returns a job identifier (<code>JobId</code>) When the text detection operation finishes, Amazon Rekognition publishes a completion status to the Amazon Simple Notification Service topic registered in the initial call to <code>StartTextDetection</code>. To get the results of the text detection operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. if so, call <code>GetTextDetection</code> and pass the job identifier (<code>JobId</code>) from the initial call of <code>StartLabelDetection</code>.</p> <p> <code>GetTextDetection</code> returns an array of detected text (<code>TextDetections</code>) sorted by the time the text was detected, up to 50 words per frame of video.</p> <p>Each element of the array includes the detected text, the precentage confidence in the acuracy of the detected text, the time the text was detected, bounding box information for where the text was located, and unique identifiers for words and their lines.</p> <p>Use MaxResults parameter to limit the number of text detections returned. If there are more results than specified in <code>MaxResults</code>, the value of <code>NextToken</code> in the operation response contains a pagination token for getting the next set of results. To get the next page of results, call <code>GetTextDetection</code> and populate the <code>NextToken</code> request parameter with the token value returned from the previous call to <code>GetTextDetection</code>.</p>
		 * Post /#X-Amz-Target=RekognitionService.GetTextDetection
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetTextDetectionResponse} Success
		 */
		GetTextDetection(MaxResults: string, NextToken: string, requestBody: GetTextDetectionRequest, headersHandler?: () => HttpHeaders): Observable<GetTextDetectionResponse> {
			return this.http.post<GetTextDetectionResponse>(this.baseUri + '/#X-Amz-Target=RekognitionService.GetTextDetection?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Detects faces in the input image and adds them to the specified collection. </p> <p>Amazon Rekognition doesn't save the actual faces that are detected. Instead, the underlying detection algorithm first detects the faces in the input image. For each face, the algorithm extracts facial features into a feature vector, and stores it in the backend database. Amazon Rekognition uses feature vectors when it performs face match and search operations using the <a>SearchFaces</a> and <a>SearchFacesByImage</a> operations.</p> <p>For more information, see Adding Faces to a Collection in the Amazon Rekognition Developer Guide.</p> <p>To get the number of faces in a collection, call <a>DescribeCollection</a>. </p> <p>If you're using version 1.0 of the face detection model, <code>IndexFaces</code> indexes the 15 largest faces in the input image. Later versions of the face detection model index the 100 largest faces in the input image. </p> <p>If you're using version 4 or later of the face model, image orientation information is not returned in the <code>OrientationCorrection</code> field. </p> <p>To determine which version of the model you're using, call <a>DescribeCollection</a> and supply the collection ID. You can also get the model version from the value of <code>FaceModelVersion</code> in the response from <code>IndexFaces</code> </p> <p>For more information, see Model Versioning in the Amazon Rekognition Developer Guide.</p> <p>If you provide the optional <code>ExternalImageID</code> for the input image you provided, Amazon Rekognition associates this ID with all faces that it detects. When you call the <a>ListFaces</a> operation, the response returns the external ID. You can use this external image ID to create a client-side index to associate the faces with each image. You can then use the index to find all faces in an image.</p> <p>You can specify the maximum number of faces to index with the <code>MaxFaces</code> input parameter. This is useful when you want to index the largest faces in an image and don't want to index smaller faces, such as those belonging to people standing in the background.</p> <p>The <code>QualityFilter</code> input parameter allows you to filter out detected faces that don’t meet a required quality bar. The quality bar is based on a variety of common use cases. By default, <code>IndexFaces</code> chooses the quality bar that's used to filter faces. You can also explicitly choose the quality bar. Use <code>QualityFilter</code>, to set the quality bar by specifying <code>LOW</code>, <code>MEDIUM</code>, or <code>HIGH</code>. If you do not want to filter detected faces, specify <code>NONE</code>. </p> <note> <p>To use quality filtering, you need a collection associated with version 3 of the face model or higher. To get the version of the face model associated with a collection, call <a>DescribeCollection</a>. </p> </note> <p>Information about faces detected in an image, but not indexed, is returned in an array of <a>UnindexedFace</a> objects, <code>UnindexedFaces</code>. Faces aren't indexed for reasons such as:</p> <ul> <li> <p>The number of faces detected exceeds the value of the <code>MaxFaces</code> request parameter.</p> </li> <li> <p>The face is too small compared to the image dimensions.</p> </li> <li> <p>The face is too blurry.</p> </li> <li> <p>The image is too dark.</p> </li> <li> <p>The face has an extreme pose.</p> </li> <li> <p>The face doesn’t have enough detail to be suitable for face search.</p> </li> </ul> <p>In response, the <code>IndexFaces</code> operation returns an array of metadata for all detected faces, <code>FaceRecords</code>. This includes: </p> <ul> <li> <p>The bounding box, <code>BoundingBox</code>, of the detected face. </p> </li> <li> <p>A confidence value, <code>Confidence</code>, which indicates the confidence that the bounding box contains a face.</p> </li> <li> <p>A face ID, <code>FaceId</code>, assigned by the service for each face that's detected and stored.</p> </li> <li> <p>An image ID, <code>ImageId</code>, assigned by the service for the input image.</p> </li> </ul> <p>If you request all facial attributes (by using the <code>detectionAttributes</code> parameter), Amazon Rekognition returns detailed facial attributes, such as facial landmarks (for example, location of eye and mouth) and other facial attributes. If you provide the same image, specify the same collection, and use the same external ID in the <code>IndexFaces</code> operation, Amazon Rekognition doesn't save duplicate face metadata.</p> <p/> <p>The input image is passed either as base64-encoded image bytes, or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes isn't supported. The image must be formatted as a PNG or JPEG file. </p> <p>This operation requires permissions to perform the <code>rekognition:IndexFaces</code> action.</p>
		 * Post /#X-Amz-Target=RekognitionService.IndexFaces
		 * @return {IndexFacesResponse} Success
		 */
		IndexFaces(requestBody: IndexFacesRequest, headersHandler?: () => HttpHeaders): Observable<IndexFacesResponse> {
			return this.http.post<IndexFacesResponse>(this.baseUri + '/#X-Amz-Target=RekognitionService.IndexFaces', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Returns list of collection IDs in your account. If the result is truncated, the response also provides a <code>NextToken</code> that you can use in the subsequent request to fetch the next set of collection IDs.</p> <p>For an example, see Listing Collections in the Amazon Rekognition Developer Guide.</p> <p>This operation requires permissions to perform the <code>rekognition:ListCollections</code> action.</p>
		 * Post /#X-Amz-Target=RekognitionService.ListCollections
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListCollectionsResponse} Success
		 */
		ListCollections(MaxResults: string, NextToken: string, requestBody: ListCollectionsRequest, headersHandler?: () => HttpHeaders): Observable<ListCollectionsResponse> {
			return this.http.post<ListCollectionsResponse>(this.baseUri + '/#X-Amz-Target=RekognitionService.ListCollections?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Returns metadata for faces in the specified collection. This metadata includes information such as the bounding box coordinates, the confidence (that the bounding box contains a face), and face ID. For an example, see Listing Faces in a Collection in the Amazon Rekognition Developer Guide.</p> <p>This operation requires permissions to perform the <code>rekognition:ListFaces</code> action.</p>
		 * Post /#X-Amz-Target=RekognitionService.ListFaces
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListFacesResponse} Success
		 */
		ListFaces(MaxResults: string, NextToken: string, requestBody: ListFacesRequest, headersHandler?: () => HttpHeaders): Observable<ListFacesResponse> {
			return this.http.post<ListFacesResponse>(this.baseUri + '/#X-Amz-Target=RekognitionService.ListFaces?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Gets a list of stream processors that you have created with <a>CreateStreamProcessor</a>.
		 * Post /#X-Amz-Target=RekognitionService.ListStreamProcessors
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListStreamProcessorsResponse} Success
		 */
		ListStreamProcessors(MaxResults: string, NextToken: string, requestBody: ListStreamProcessorsRequest, headersHandler?: () => HttpHeaders): Observable<ListStreamProcessorsResponse> {
			return this.http.post<ListStreamProcessorsResponse>(this.baseUri + '/#X-Amz-Target=RekognitionService.ListStreamProcessors?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Returns an array of celebrities recognized in the input image. For more information, see Recognizing Celebrities in the Amazon Rekognition Developer Guide. </p> <p> <code>RecognizeCelebrities</code> returns the 100 largest faces in the image. It lists recognized celebrities in the <code>CelebrityFaces</code> array and unrecognized faces in the <code>UnrecognizedFaces</code> array. <code>RecognizeCelebrities</code> doesn't return celebrities whose faces aren't among the largest 100 faces in the image.</p> <p>For each celebrity recognized, <code>RecognizeCelebrities</code> returns a <code>Celebrity</code> object. The <code>Celebrity</code> object contains the celebrity name, ID, URL links to additional information, match confidence, and a <code>ComparedFace</code> object that you can use to locate the celebrity's face on the image.</p> <p>Amazon Rekognition doesn't retain information about which images a celebrity has been recognized in. Your application must store this information and use the <code>Celebrity</code> ID property as a unique identifier for the celebrity. If you don't store the celebrity name or additional information URLs returned by <code>RecognizeCelebrities</code>, you will need the ID to identify the celebrity in a call to the <a>GetCelebrityInfo</a> operation.</p> <p>You pass the input image either as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes is not supported. The image must be either a PNG or JPEG formatted file. </p> <p>For an example, see Recognizing Celebrities in an Image in the Amazon Rekognition Developer Guide.</p> <p>This operation requires permissions to perform the <code>rekognition:RecognizeCelebrities</code> operation.</p>
		 * Post /#X-Amz-Target=RekognitionService.RecognizeCelebrities
		 * @return {RecognizeCelebritiesResponse} Success
		 */
		RecognizeCelebrities(requestBody: RecognizeCelebritiesRequest, headersHandler?: () => HttpHeaders): Observable<RecognizeCelebritiesResponse> {
			return this.http.post<RecognizeCelebritiesResponse>(this.baseUri + '/#X-Amz-Target=RekognitionService.RecognizeCelebrities', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>For a given input face ID, searches for matching faces in the collection the face belongs to. You get a face ID when you add a face to the collection using the <a>IndexFaces</a> operation. The operation compares the features of the input face with faces in the specified collection. </p> <note> <p>You can also search faces without indexing faces by using the <code>SearchFacesByImage</code> operation.</p> </note> <p> The operation response returns an array of faces that match, ordered by similarity score with the highest similarity first. More specifically, it is an array of metadata for each face match that is found. Along with the metadata, the response also includes a <code>confidence</code> value for each face match, indicating the confidence that the specific face matches the input face. </p> <p>For an example, see Searching for a Face Using Its Face ID in the Amazon Rekognition Developer Guide.</p> <p>This operation requires permissions to perform the <code>rekognition:SearchFaces</code> action.</p>
		 * Post /#X-Amz-Target=RekognitionService.SearchFaces
		 * @return {SearchFacesResponse} Success
		 */
		SearchFaces(requestBody: SearchFacesRequest, headersHandler?: () => HttpHeaders): Observable<SearchFacesResponse> {
			return this.http.post<SearchFacesResponse>(this.baseUri + '/#X-Amz-Target=RekognitionService.SearchFaces', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>For a given input image, first detects the largest face in the image, and then searches the specified collection for matching faces. The operation compares the features of the input face with faces in the specified collection. </p> <note> <p>To search for all faces in an input image, you might first call the <a>IndexFaces</a> operation, and then use the face IDs returned in subsequent calls to the <a>SearchFaces</a> operation. </p> <p> You can also call the <code>DetectFaces</code> operation and use the bounding boxes in the response to make face crops, which then you can pass in to the <code>SearchFacesByImage</code> operation. </p> </note> <p>You pass the input image either as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes is not supported. The image must be either a PNG or JPEG formatted file. </p> <p> The response returns an array of faces that match, ordered by similarity score with the highest similarity first. More specifically, it is an array of metadata for each face match found. Along with the metadata, the response also includes a <code>similarity</code> indicating how similar the face is to the input face. In the response, the operation also returns the bounding box (and a confidence level that the bounding box contains a face) of the face that Amazon Rekognition used for the input image. </p> <p>For an example, Searching for a Face Using an Image in the Amazon Rekognition Developer Guide.</p> <p>The <code>QualityFilter</code> input parameter allows you to filter out detected faces that don’t meet a required quality bar. The quality bar is based on a variety of common use cases. Use <code>QualityFilter</code> to set the quality bar for filtering by specifying <code>LOW</code>, <code>MEDIUM</code>, or <code>HIGH</code>. If you do not want to filter detected faces, specify <code>NONE</code>. The default value is <code>NONE</code>.</p> <note> <p>To use quality filtering, you need a collection associated with version 3 of the face model or higher. To get the version of the face model associated with a collection, call <a>DescribeCollection</a>. </p> </note> <p>This operation requires permissions to perform the <code>rekognition:SearchFacesByImage</code> action.</p>
		 * Post /#X-Amz-Target=RekognitionService.SearchFacesByImage
		 * @return {SearchFacesByImageResponse} Success
		 */
		SearchFacesByImage(requestBody: SearchFacesByImageRequest, headersHandler?: () => HttpHeaders): Observable<SearchFacesByImageResponse> {
			return this.http.post<SearchFacesByImageResponse>(this.baseUri + '/#X-Amz-Target=RekognitionService.SearchFacesByImage', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Starts asynchronous recognition of celebrities in a stored video.</p> <p>Amazon Rekognition Video can detect celebrities in a video must be stored in an Amazon S3 bucket. Use <a>Video</a> to specify the bucket name and the filename of the video. <code>StartCelebrityRecognition</code> returns a job identifier (<code>JobId</code>) which you use to get the results of the analysis. When celebrity recognition analysis is finished, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic that you specify in <code>NotificationChannel</code>. To get the results of the celebrity recognition analysis, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <a>GetCelebrityRecognition</a> and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartCelebrityRecognition</code>. </p> <p>For more information, see Recognizing Celebrities in the Amazon Rekognition Developer Guide.</p>
		 * Post /#X-Amz-Target=RekognitionService.StartCelebrityRecognition
		 * @return {StartCelebrityRecognitionResponse} Success
		 */
		StartCelebrityRecognition(requestBody: StartCelebrityRecognitionRequest, headersHandler?: () => HttpHeaders): Observable<StartCelebrityRecognitionResponse> {
			return this.http.post<StartCelebrityRecognitionResponse>(this.baseUri + '/#X-Amz-Target=RekognitionService.StartCelebrityRecognition', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p> Starts asynchronous detection of unsafe content in a stored video.</p> <p>Amazon Rekognition Video can moderate content in a video stored in an Amazon S3 bucket. Use <a>Video</a> to specify the bucket name and the filename of the video. <code>StartContentModeration</code> returns a job identifier (<code>JobId</code>) which you use to get the results of the analysis. When unsafe content analysis is finished, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic that you specify in <code>NotificationChannel</code>.</p> <p>To get the results of the unsafe content analysis, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <a>GetContentModeration</a> and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartContentModeration</code>. </p> <p>For more information, see Detecting Unsafe Content in the Amazon Rekognition Developer Guide.</p>
		 * Post /#X-Amz-Target=RekognitionService.StartContentModeration
		 * @return {StartContentModerationResponse} Success
		 */
		StartContentModeration(requestBody: StartContentModerationRequest, headersHandler?: () => HttpHeaders): Observable<StartContentModerationResponse> {
			return this.http.post<StartContentModerationResponse>(this.baseUri + '/#X-Amz-Target=RekognitionService.StartContentModeration', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Starts asynchronous detection of faces in a stored video.</p> <p>Amazon Rekognition Video can detect faces in a video stored in an Amazon S3 bucket. Use <a>Video</a> to specify the bucket name and the filename of the video. <code>StartFaceDetection</code> returns a job identifier (<code>JobId</code>) that you use to get the results of the operation. When face detection is finished, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic that you specify in <code>NotificationChannel</code>. To get the results of the face detection operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <a>GetFaceDetection</a> and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartFaceDetection</code>.</p> <p>For more information, see Detecting Faces in a Stored Video in the Amazon Rekognition Developer Guide.</p>
		 * Post /#X-Amz-Target=RekognitionService.StartFaceDetection
		 * @return {StartFaceDetectionResponse} Success
		 */
		StartFaceDetection(requestBody: StartFaceDetectionRequest, headersHandler?: () => HttpHeaders): Observable<StartFaceDetectionResponse> {
			return this.http.post<StartFaceDetectionResponse>(this.baseUri + '/#X-Amz-Target=RekognitionService.StartFaceDetection', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Starts the asynchronous search for faces in a collection that match the faces of persons detected in a stored video.</p> <p>The video must be stored in an Amazon S3 bucket. Use <a>Video</a> to specify the bucket name and the filename of the video. <code>StartFaceSearch</code> returns a job identifier (<code>JobId</code>) which you use to get the search results once the search has completed. When searching is finished, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic that you specify in <code>NotificationChannel</code>. To get the search results, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <a>GetFaceSearch</a> and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartFaceSearch</code>. For more information, see <a>procedure-person-search-videos</a>.</p>
		 * Post /#X-Amz-Target=RekognitionService.StartFaceSearch
		 * @return {StartFaceSearchResponse} Success
		 */
		StartFaceSearch(requestBody: StartFaceSearchRequest, headersHandler?: () => HttpHeaders): Observable<StartFaceSearchResponse> {
			return this.http.post<StartFaceSearchResponse>(this.baseUri + '/#X-Amz-Target=RekognitionService.StartFaceSearch', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Starts asynchronous detection of labels in a stored video.</p> <p>Amazon Rekognition Video can detect labels in a video. Labels are instances of real-world entities. This includes objects like flower, tree, and table; events like wedding, graduation, and birthday party; concepts like landscape, evening, and nature; and activities like a person getting out of a car or a person skiing.</p> <p>The video must be stored in an Amazon S3 bucket. Use <a>Video</a> to specify the bucket name and the filename of the video. <code>StartLabelDetection</code> returns a job identifier (<code>JobId</code>) which you use to get the results of the operation. When label detection is finished, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic that you specify in <code>NotificationChannel</code>.</p> <p>To get the results of the label detection operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <a>GetLabelDetection</a> and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartLabelDetection</code>.</p> <p/>
		 * Post /#X-Amz-Target=RekognitionService.StartLabelDetection
		 * @return {StartLabelDetectionResponse} Success
		 */
		StartLabelDetection(requestBody: StartLabelDetectionRequest, headersHandler?: () => HttpHeaders): Observable<StartLabelDetectionResponse> {
			return this.http.post<StartLabelDetectionResponse>(this.baseUri + '/#X-Amz-Target=RekognitionService.StartLabelDetection', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Starts the asynchronous tracking of a person's path in a stored video.</p> <p>Amazon Rekognition Video can track the path of people in a video stored in an Amazon S3 bucket. Use <a>Video</a> to specify the bucket name and the filename of the video. <code>StartPersonTracking</code> returns a job identifier (<code>JobId</code>) which you use to get the results of the operation. When label detection is finished, Amazon Rekognition publishes a completion status to the Amazon Simple Notification Service topic that you specify in <code>NotificationChannel</code>. </p> <p>To get the results of the person detection operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <a>GetPersonTracking</a> and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartPersonTracking</code>.</p>
		 * Post /#X-Amz-Target=RekognitionService.StartPersonTracking
		 * @return {StartPersonTrackingResponse} Success
		 */
		StartPersonTracking(requestBody: StartPersonTrackingRequest, headersHandler?: () => HttpHeaders): Observable<StartPersonTrackingResponse> {
			return this.http.post<StartPersonTrackingResponse>(this.baseUri + '/#X-Amz-Target=RekognitionService.StartPersonTracking', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Starts the running of the version of a model. Starting a model takes a while to complete. To check the current state of the model, use <a>DescribeProjectVersions</a>.</p> <p>Once the model is running, you can detect custom labels in new images by calling <a>DetectCustomLabels</a>.</p> <note> <p>You are charged for the amount of time that the model is running. To stop a running model, call <a>StopProjectVersion</a>.</p> </note> <p>This operation requires permissions to perform the <code>rekognition:StartProjectVersion</code> action.</p>
		 * Post /#X-Amz-Target=RekognitionService.StartProjectVersion
		 * @return {StartProjectVersionResponse} Success
		 */
		StartProjectVersion(requestBody: StartProjectVersionRequest, headersHandler?: () => HttpHeaders): Observable<StartProjectVersionResponse> {
			return this.http.post<StartProjectVersionResponse>(this.baseUri + '/#X-Amz-Target=RekognitionService.StartProjectVersion', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Starts processing a stream processor. You create a stream processor by calling <a>CreateStreamProcessor</a>. To tell <code>StartStreamProcessor</code> which stream processor to start, use the value of the <code>Name</code> field specified in the call to <code>CreateStreamProcessor</code>.
		 * Post /#X-Amz-Target=RekognitionService.StartStreamProcessor
		 * @return {StartStreamProcessorResponse} Success
		 */
		StartStreamProcessor(requestBody: StartStreamProcessorRequest, headersHandler?: () => HttpHeaders): Observable<StartStreamProcessorResponse> {
			return this.http.post<StartStreamProcessorResponse>(this.baseUri + '/#X-Amz-Target=RekognitionService.StartStreamProcessor', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Starts asynchronous detection of text in a stored video.</p> <p>Amazon Rekognition Video can detect text in a video stored in an Amazon S3 bucket. Use <a>Video</a> to specify the bucket name and the filename of the video. <code>StartTextDetection</code> returns a job identifier (<code>JobId</code>) which you use to get the results of the operation. When text detection is finished, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic that you specify in <code>NotificationChannel</code>.</p> <p>To get the results of the text detection operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. if so, call <a>GetTextDetection</a> and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartTextDetection</code>. </p>
		 * Post /#X-Amz-Target=RekognitionService.StartTextDetection
		 * @return {StartTextDetectionResponse} Success
		 */
		StartTextDetection(requestBody: StartTextDetectionRequest, headersHandler?: () => HttpHeaders): Observable<StartTextDetectionResponse> {
			return this.http.post<StartTextDetectionResponse>(this.baseUri + '/#X-Amz-Target=RekognitionService.StartTextDetection', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Stops a running model. The operation might take a while to complete. To check the current status, call <a>DescribeProjectVersions</a>.
		 * Post /#X-Amz-Target=RekognitionService.StopProjectVersion
		 * @return {StopProjectVersionResponse} Success
		 */
		StopProjectVersion(requestBody: StopProjectVersionRequest, headersHandler?: () => HttpHeaders): Observable<StopProjectVersionResponse> {
			return this.http.post<StopProjectVersionResponse>(this.baseUri + '/#X-Amz-Target=RekognitionService.StopProjectVersion', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Stops a running stream processor that was created by <a>CreateStreamProcessor</a>.
		 * Post /#X-Amz-Target=RekognitionService.StopStreamProcessor
		 * @return {StopStreamProcessorResponse} Success
		 */
		StopStreamProcessor(requestBody: StopStreamProcessorRequest, headersHandler?: () => HttpHeaders): Observable<StopStreamProcessorResponse> {
			return this.http.post<StopStreamProcessorResponse>(this.baseUri + '/#X-Amz-Target=RekognitionService.StopStreamProcessor', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}
	}

}

