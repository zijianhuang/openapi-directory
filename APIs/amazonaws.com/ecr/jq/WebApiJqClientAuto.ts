///<reference path="HttpClient.ts" />
namespace My_Demo_Client {
	export interface BatchCheckLayerAvailabilityResponse {
		layers?: Array<Layer>;
		failures?: Array<LayerFailure>;
	}

	export interface BatchCheckLayerAvailabilityRequest {
		registryId?: string;
		repositoryName: string;
		layerDigests: Array<BatchedOperationLayerDigest>;
	}

	export interface BatchDeleteImageResponse {
		imageIds?: Array<ImageIdentifier>;
		failures?: Array<ImageFailure>;
	}


	/**Deletes specified images within a specified repository. Images are specified with either the <code>imageTag</code> or <code>imageDigest</code>. */
	export interface BatchDeleteImageRequest {
		registryId?: string;
		repositoryName: string;
		imageIds: Array<ImageIdentifier>;
	}

	export interface BatchGetImageResponse {
		images?: Array<Image>;
		failures?: Array<ImageFailure>;
	}

	export interface BatchGetImageRequest {
		registryId?: string;
		repositoryName: string;
		imageIds: Array<ImageIdentifier>;
		acceptedMediaTypes?: Array<MediaType>;
	}

	export interface CompleteLayerUploadResponse {
		registryId?: string;
		repositoryName?: string;
		uploadId?: string;
		layerDigest?: string;
	}

	export interface CompleteLayerUploadRequest {
		registryId?: string;
		repositoryName: string;
		uploadId: string;
		layerDigests: Array<LayerDigest>;
	}

	export interface CreateRepositoryResponse {

		/**An object representing a repository. */
		repository?: Repository;
	}

	export interface CreateRepositoryRequest {
		repositoryName: string;
		tags?: Array<Tag>;
		imageTagMutability?: CreateRepositoryRequestImageTagMutability;

		/**The image scanning configuration for a repository. */
		imageScanningConfiguration?: ImageScanningConfiguration;
	}

	export enum CreateRepositoryRequestImageTagMutability { MUTABLE = 0, IMMUTABLE = 1 }

	export interface DeleteLifecyclePolicyResponse {
		registryId?: string;
		repositoryName?: string;
		lifecyclePolicyText?: string;
		lastEvaluatedAt?: Date;
	}

	export interface DeleteLifecyclePolicyRequest {
		registryId?: string;
		repositoryName: string;
	}

	export interface DeleteRepositoryResponse {

		/**An object representing a repository. */
		repository?: Repository;
	}

	export interface DeleteRepositoryRequest {
		registryId?: string;
		repositoryName: string;
		force?: boolean;
	}

	export interface DeleteRepositoryPolicyResponse {
		registryId?: string;
		repositoryName?: string;
		policyText?: string;
	}

	export interface DeleteRepositoryPolicyRequest {
		registryId?: string;
		repositoryName: string;
	}

	export interface DescribeImageScanFindingsResponse {
		registryId?: string;
		repositoryName?: string;

		/**An object with identifying information for an Amazon ECR image. */
		imageId?: ImageIdentifier;

		/**The current status of an image scan. */
		imageScanStatus?: ImageScanStatus;

		/**The details of an image scan. */
		imageScanFindings?: ImageScanFindings;
		nextToken?: string;
	}

	export interface DescribeImageScanFindingsRequest {
		registryId?: string;
		repositoryName: string;

		/**An object with identifying information for an Amazon ECR image. */
		imageId: ImageIdentifier;
		nextToken?: string;
		maxResults?: number;
	}

	export interface DescribeImagesResponse {
		imageDetails?: Array<ImageDetail>;
		nextToken?: string;
	}

	export interface DescribeImagesRequest {
		registryId?: string;
		repositoryName: string;
		imageIds?: Array<ImageIdentifier>;
		nextToken?: string;
		maxResults?: number;

		/**An object representing a filter on a <a>DescribeImages</a> operation. */
		filter?: DescribeImagesFilter;
	}

	export interface DescribeRepositoriesResponse {
		repositories?: Array<Repository>;
		nextToken?: string;
	}

	export interface DescribeRepositoriesRequest {
		registryId?: string;
		repositoryNames?: Array<RepositoryName>;
		nextToken?: string;
		maxResults?: number;
	}

	export interface GetAuthorizationTokenResponse {
		authorizationData?: Array<AuthorizationData>;
	}

	export interface GetAuthorizationTokenRequest {
		registryIds?: Array<RegistryId>;
	}

	export interface GetDownloadUrlForLayerResponse {
		downloadUrl?: string;
		layerDigest?: string;
	}

	export interface GetDownloadUrlForLayerRequest {
		registryId?: string;
		repositoryName: string;
		layerDigest: string;
	}

	export interface GetLifecyclePolicyResponse {
		registryId?: string;
		repositoryName?: string;
		lifecyclePolicyText?: string;
		lastEvaluatedAt?: Date;
	}

	export interface GetLifecyclePolicyRequest {
		registryId?: string;
		repositoryName: string;
	}

	export interface GetLifecyclePolicyPreviewResponse {
		registryId?: string;
		repositoryName?: string;
		lifecyclePolicyText?: string;
		status?: GetLifecyclePolicyPreviewResponseStatus;
		nextToken?: string;
		previewResults?: Array<LifecyclePolicyPreviewResult>;

		/**The summary of the lifecycle policy preview request. */
		summary?: LifecyclePolicyPreviewSummary;
	}

	export enum GetLifecyclePolicyPreviewResponseStatus { IN_PROGRESS = 0, COMPLETE = 1, EXPIRED = 2, FAILED = 3 }

	export interface GetLifecyclePolicyPreviewRequest {
		registryId?: string;
		repositoryName: string;
		imageIds?: Array<ImageIdentifier>;
		nextToken?: string;
		maxResults?: number;

		/**The filter for the lifecycle policy preview. */
		filter?: LifecyclePolicyPreviewFilter;
	}

	export interface GetRepositoryPolicyResponse {
		registryId?: string;
		repositoryName?: string;
		policyText?: string;
	}

	export interface GetRepositoryPolicyRequest {
		registryId?: string;
		repositoryName: string;
	}

	export interface InitiateLayerUploadResponse {
		uploadId?: string;
		partSize?: number;
	}

	export interface InitiateLayerUploadRequest {
		registryId?: string;
		repositoryName: string;
	}

	export interface ListImagesResponse {
		imageIds?: Array<ImageIdentifier>;
		nextToken?: string;
	}

	export interface ListImagesRequest {
		registryId?: string;
		repositoryName: string;
		nextToken?: string;
		maxResults?: number;

		/**An object representing a filter on a <a>ListImages</a> operation. */
		filter?: ListImagesFilter;
	}

	export interface ListTagsForResourceResponse {
		tags?: Array<Tag>;
	}

	export interface ListTagsForResourceRequest {
		resourceArn: string;
	}

	export interface PutImageResponse {

		/**An object representing an Amazon ECR image. */
		image?: Image;
	}

	export interface PutImageRequest {
		registryId?: string;
		repositoryName: string;
		imageManifest: string;
		imageManifestMediaType?: string;
		imageTag?: string;
	}

	export interface PutImageScanningConfigurationResponse {
		registryId?: string;
		repositoryName?: string;

		/**The image scanning configuration for a repository. */
		imageScanningConfiguration?: ImageScanningConfiguration;
	}

	export interface PutImageScanningConfigurationRequest {
		registryId?: string;
		repositoryName: string;

		/**The image scanning configuration for a repository. */
		imageScanningConfiguration: ImageScanningConfiguration;
	}

	export interface PutImageTagMutabilityResponse {
		registryId?: string;
		repositoryName?: string;
		imageTagMutability?: PutImageTagMutabilityResponseImageTagMutability;
	}

	export enum PutImageTagMutabilityResponseImageTagMutability { MUTABLE = 0, IMMUTABLE = 1 }

	export interface PutImageTagMutabilityRequest {
		registryId?: string;
		repositoryName: string;
		imageTagMutability: PutImageTagMutabilityRequestImageTagMutability;
	}

	export enum PutImageTagMutabilityRequestImageTagMutability { MUTABLE = 0, IMMUTABLE = 1 }

	export interface PutLifecyclePolicyResponse {
		registryId?: string;
		repositoryName?: string;
		lifecyclePolicyText?: string;
	}

	export interface PutLifecyclePolicyRequest {
		registryId?: string;
		repositoryName: string;
		lifecyclePolicyText: string;
	}

	export interface SetRepositoryPolicyResponse {
		registryId?: string;
		repositoryName?: string;
		policyText?: string;
	}

	export interface SetRepositoryPolicyRequest {
		registryId?: string;
		repositoryName: string;
		policyText: string;
		force?: boolean;
	}

	export interface StartImageScanResponse {
		registryId?: string;
		repositoryName?: string;

		/**An object with identifying information for an Amazon ECR image. */
		imageId?: ImageIdentifier;

		/**The current status of an image scan. */
		imageScanStatus?: ImageScanStatus;
	}

	export interface StartImageScanRequest {
		registryId?: string;
		repositoryName: string;

		/**An object with identifying information for an Amazon ECR image. */
		imageId: ImageIdentifier;
	}

	export interface StartLifecyclePolicyPreviewResponse {
		registryId?: string;
		repositoryName?: string;
		lifecyclePolicyText?: string;
		status?: StartLifecyclePolicyPreviewResponseStatus;
	}

	export enum StartLifecyclePolicyPreviewResponseStatus { IN_PROGRESS = 0, COMPLETE = 1, EXPIRED = 2, FAILED = 3 }

	export interface StartLifecyclePolicyPreviewRequest {
		registryId?: string;
		repositoryName: string;
		lifecyclePolicyText?: string;
	}

	export interface TagResourceRequest {
		resourceArn: string;
		tags: Array<Tag>;
	}

	export interface UntagResourceRequest {
		resourceArn: string;
		tagKeys: Array<TagKey>;
	}

	export interface UploadLayerPartResponse {
		registryId?: string;
		repositoryName?: string;
		uploadId?: string;
		lastByteReceived?: number;
	}

	export interface UploadLayerPartRequest {
		registryId?: string;
		repositoryName: string;
		uploadId: string;
		partFirstByte: number;
		partLastByte: number;
		layerPartBlob: string;
	}


	/**This data type is used in the <a>ImageScanFinding</a> data type. */
	export interface Attribute {
		key: string;
		value?: string;
	}


	/**An object representing authorization data for an Amazon ECR registry. */
	export interface AuthorizationData {
		authorizationToken?: string;
		expiresAt?: Date;
		proxyEndpoint?: string;
	}

	export enum ImageTagMutability { MUTABLE = 0, IMMUTABLE = 1 }


	/**The image scanning configuration for a repository. */
	export interface ImageScanningConfiguration {
		scanOnPush?: boolean;
	}


	/**An object representing a repository. */
	export interface Repository {
		repositoryArn?: string;
		registryId?: string;
		repositoryName?: string;
		repositoryUri?: string;
		createdAt?: Date;
		imageTagMutability?: RepositoryImageTagMutability;

		/**The image scanning configuration for a repository. */
		imageScanningConfiguration?: ImageScanningConfiguration;
	}

	export enum RepositoryImageTagMutability { MUTABLE = 0, IMMUTABLE = 1 }


	/**An object with identifying information for an Amazon ECR image. */
	export interface ImageIdentifier {
		imageDigest?: string;
		imageTag?: string;
	}


	/**The current status of an image scan. */
	export interface ImageScanStatus {
		status?: ImageScanStatusStatus;
		description?: string;
	}

	export enum ImageScanStatusStatus { IN_PROGRESS = 0, COMPLETE = 1, FAILED = 2 }


	/**The details of an image scan. */
	export interface ImageScanFindings {
		imageScanCompletedAt?: Date;
		vulnerabilitySourceUpdatedAt?: Date;
		findings?: Array<ImageScanFinding>;
		findingSeverityCounts?: FindingSeverityCounts;
	}

	export enum TagStatus { TAGGED = 0, UNTAGGED = 1, ANY = 2 }


	/**An object representing a filter on a <a>DescribeImages</a> operation. */
	export interface DescribeImagesFilter {
		tagStatus?: DescribeImagesFilterTagStatus;
	}

	export enum DescribeImagesFilterTagStatus { TAGGED = 0, UNTAGGED = 1, ANY = 2 }

	export enum FindingSeverity { INFORMATIONAL = 0, LOW = 1, MEDIUM = 2, HIGH = 3, CRITICAL = 4, UNDEFINED = 5 }


	/**The filter for the lifecycle policy preview. */
	export interface LifecyclePolicyPreviewFilter {
		tagStatus?: LifecyclePolicyPreviewFilterTagStatus;
	}

	export enum LifecyclePolicyPreviewFilterTagStatus { TAGGED = 0, UNTAGGED = 1, ANY = 2 }

	export enum LifecyclePolicyPreviewStatus { IN_PROGRESS = 0, COMPLETE = 1, EXPIRED = 2, FAILED = 3 }


	/**The summary of the lifecycle policy preview request. */
	export interface LifecyclePolicyPreviewSummary {
		expiringImageTotalCount?: number;
	}


	/**An object representing an Amazon ECR image. */
	export interface Image {
		registryId?: string;
		repositoryName?: string;

		/**An object with identifying information for an Amazon ECR image. */
		imageId?: ImageIdentifier;
		imageManifest?: string;
		imageManifestMediaType?: string;
	}

	export enum ImageActionType { EXPIRE = 0 }


	/**A summary of the last completed image scan. */
	export interface ImageScanFindingsSummary {
		imageScanCompletedAt?: Date;
		vulnerabilitySourceUpdatedAt?: Date;
		findingSeverityCounts?: FindingSeverityCounts;
	}


	/**An object that describes an image returned by a <a>DescribeImages</a> operation. */
	export interface ImageDetail {
		registryId?: string;
		repositoryName?: string;
		imageDigest?: string;
		imageTags?: Array<ImageTag>;
		imageSizeInBytes?: number;
		imagePushedAt?: Date;

		/**The current status of an image scan. */
		imageScanStatus?: ImageScanStatus;

		/**A summary of the last completed image scan. */
		imageScanFindingsSummary?: ImageScanFindingsSummary;
	}

	export enum ImageFailureCode { InvalidImageDigest = 0, InvalidImageTag = 1, ImageTagDoesNotMatchDigest = 2, ImageNotFound = 3, MissingDigestAndTag = 4, ImageReferencedByManifestList = 5 }


	/**An object representing an Amazon ECR image failure. */
	export interface ImageFailure {

		/**An object with identifying information for an Amazon ECR image. */
		imageId?: ImageIdentifier;
		failureCode?: ImageFailureFailureCode;
		failureReason?: string;
	}

	export enum ImageFailureFailureCode { InvalidImageDigest = 0, InvalidImageTag = 1, ImageTagDoesNotMatchDigest = 2, ImageNotFound = 3, MissingDigestAndTag = 4, ImageReferencedByManifestList = 5 }


	/**Contains information about an image scan finding. */
	export interface ImageScanFinding {
		name?: string;
		description?: string;
		uri?: string;
		severity?: ImageScanFindingSeverity;
		attributes?: Array<Attribute>;
	}

	export enum ImageScanFindingSeverity { INFORMATIONAL = 0, LOW = 1, MEDIUM = 2, HIGH = 3, CRITICAL = 4, UNDEFINED = 5 }

	export enum ScanStatus { IN_PROGRESS = 0, COMPLETE = 1, FAILED = 2 }

	export enum LayerAvailability { AVAILABLE = 0, UNAVAILABLE = 1 }


	/**An object representing an Amazon ECR image layer. */
	export interface Layer {
		layerDigest?: string;
		layerAvailability?: LayerLayerAvailability;
		layerSize?: number;
		mediaType?: string;
	}

	export enum LayerLayerAvailability { AVAILABLE = 0, UNAVAILABLE = 1 }

	export enum LayerFailureCode { InvalidLayerDigest = 0, MissingLayerDigest = 1 }


	/**An object representing an Amazon ECR image layer failure. */
	export interface LayerFailure {
		layerDigest?: string;
		failureCode?: LayerFailureFailureCode;
		failureReason?: string;
	}

	export enum LayerFailureFailureCode { InvalidLayerDigest = 0, MissingLayerDigest = 1 }


	/**The type of action to be taken. */
	export interface LifecyclePolicyRuleAction {
		type?: LifecyclePolicyRuleActionType;
	}

	export enum LifecyclePolicyRuleActionType { EXPIRE = 0 }


	/**The result of the lifecycle policy preview. */
	export interface LifecyclePolicyPreviewResult {
		imageTags?: Array<ImageTag>;
		imageDigest?: string;
		imagePushedAt?: Date;

		/**The type of action to be taken. */
		action?: LifecyclePolicyRuleAction;
		appliedRulePriority?: number;
	}


	/**An object representing a filter on a <a>ListImages</a> operation. */
	export interface ListImagesFilter {
		tagStatus?: ListImagesFilterTagStatus;
	}

	export enum ListImagesFilterTagStatus { TAGGED = 0, UNTAGGED = 1, ANY = 2 }


	/**The metadata that you apply to a resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters. */
	export interface Tag {
		Key?: string;
		Value?: string;
	}

	export class DemoClient {
		constructor(private baseUri: string = HttpClient.locationOrigin, private httpClient: HttpClientBase = new HttpClient(), private error?: (xhr: JQueryXHR, ajaxOptions: string, thrown: string) => any, private statusCode?: { [key: string]: any; }) {
		}

		/**
		 * <p>Checks the availability of one or more image layers in a repository.</p> <p>When an image is pushed to a repository, each image layer is checked to verify if it has been uploaded before. If it has been uploaded, then the image layer is skipped.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
		 * Post /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchCheckLayerAvailability
		 * @return {BatchCheckLayerAvailabilityResponse} Success
		 */
		BatchCheckLayerAvailability(callback: (data : BatchCheckLayerAvailabilityResponse) => any, requestBody: BatchCheckLayerAvailabilityRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchCheckLayerAvailability', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Deletes a list of specified images within a repository. Images are specified with either an <code>imageTag</code> or <code>imageDigest</code>.</p> <p>You can remove a tag from an image by specifying the image's tag in your request. When you remove the last tag from an image, the image is deleted from your repository.</p> <p>You can completely delete an image (and all of its tags) by specifying the image's digest in your request.</p>
		 * Post /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchDeleteImage
		 * @return {BatchDeleteImageResponse} Success
		 */
		BatchDeleteImage(callback: (data : BatchDeleteImageResponse) => any, requestBody: BatchDeleteImageRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchDeleteImage', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Gets detailed information for an image. Images are specified with either an <code>imageTag</code> or <code>imageDigest</code>.</p> <p>When an image is pulled, the BatchGetImage API is called once to retrieve the image manifest.</p>
		 * Post /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchGetImage
		 * @return {BatchGetImageResponse} Success
		 */
		BatchGetImage(callback: (data : BatchGetImageResponse) => any, requestBody: BatchGetImageRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchGetImage', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Informs Amazon ECR that the image layer upload has completed for a specified registry, repository name, and upload ID. You can optionally provide a <code>sha256</code> digest of the image layer for data validation purposes.</p> <p>When an image is pushed, the CompleteLayerUpload API is called once per each new image layer to verify that the upload has completed.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
		 * Post /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CompleteLayerUpload
		 * @return {CompleteLayerUploadResponse} Success
		 */
		CompleteLayerUpload(callback: (data : CompleteLayerUploadResponse) => any, requestBody: CompleteLayerUploadRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CompleteLayerUpload', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Creates a repository. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/Repositories.html">Amazon ECR Repositories</a> in the <i>Amazon Elastic Container Registry User Guide</i>.
		 * Post /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CreateRepository
		 * @return {CreateRepositoryResponse} Success
		 */
		CreateRepository(callback: (data : CreateRepositoryResponse) => any, requestBody: CreateRepositoryRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CreateRepository', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Deletes the lifecycle policy associated with the specified repository.
		 * Post /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteLifecyclePolicy
		 * @return {DeleteLifecyclePolicyResponse} Success
		 */
		DeleteLifecyclePolicy(callback: (data : DeleteLifecyclePolicyResponse) => any, requestBody: DeleteLifecyclePolicyRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteLifecyclePolicy', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Deletes a repository. If the repository contains images, you must either delete all images in the repository or use the <code>force</code> option to delete the repository.
		 * Post /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRepository
		 * @return {DeleteRepositoryResponse} Success
		 */
		DeleteRepository(callback: (data : DeleteRepositoryResponse) => any, requestBody: DeleteRepositoryRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRepository', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Deletes the repository policy associated with the specified repository.
		 * Post /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRepositoryPolicy
		 * @return {DeleteRepositoryPolicyResponse} Success
		 */
		DeleteRepositoryPolicy(callback: (data : DeleteRepositoryPolicyResponse) => any, requestBody: DeleteRepositoryPolicyRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRepositoryPolicy', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Returns the scan findings for the specified image.
		 * Post /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImageScanFindings
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeImageScanFindingsResponse} Success
		 */
		DescribeImageScanFindings(maxResults: string, nextToken: string, callback: (data : DescribeImageScanFindingsResponse) => any, requestBody: DescribeImageScanFindingsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImageScanFindings?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Returns metadata about the images in a repository.</p> <note> <p>Beginning with Docker version 1.9, the Docker client compresses image layers before pushing them to a V2 Docker registry. The output of the <code>docker images</code> command shows the uncompressed image size, so it may return a larger image size than the image sizes returned by <a>DescribeImages</a>.</p> </note>
		 * Post /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImages
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeImagesResponse} Success
		 */
		DescribeImages(maxResults: string, nextToken: string, callback: (data : DescribeImagesResponse) => any, requestBody: DescribeImagesRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImages?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Describes image repositories in a registry.
		 * Post /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeRepositories
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeRepositoriesResponse} Success
		 */
		DescribeRepositories(maxResults: string, nextToken: string, callback: (data : DescribeRepositoriesResponse) => any, requestBody: DescribeRepositoriesRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeRepositories?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Retrieves an authorization token. An authorization token represents your IAM authentication credentials and can be used to access any Amazon ECR registry that your IAM principal has access to. The authorization token is valid for 12 hours.</p> <p>The <code>authorizationToken</code> returned is a base64 encoded string that can be decoded and used in a <code>docker login</code> command to authenticate to a registry. The AWS CLI offers an <code>get-login-password</code> command that simplifies the login process. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/Registries.html#registry_auth">Registry Authentication</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>
		 * Post /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetAuthorizationToken
		 * @return {GetAuthorizationTokenResponse} Success
		 */
		GetAuthorizationToken(callback: (data : GetAuthorizationTokenResponse) => any, requestBody: GetAuthorizationTokenRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetAuthorizationToken', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Retrieves the pre-signed Amazon S3 download URL corresponding to an image layer. You can only get URLs for image layers that are referenced in an image.</p> <p>When an image is pulled, the GetDownloadUrlForLayer API is called once per image layer that is not already cached.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
		 * Post /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetDownloadUrlForLayer
		 * @return {GetDownloadUrlForLayerResponse} Success
		 */
		GetDownloadUrlForLayer(callback: (data : GetDownloadUrlForLayerResponse) => any, requestBody: GetDownloadUrlForLayerRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetDownloadUrlForLayer', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Retrieves the lifecycle policy for the specified repository.
		 * Post /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicy
		 * @return {GetLifecyclePolicyResponse} Success
		 */
		GetLifecyclePolicy(callback: (data : GetLifecyclePolicyResponse) => any, requestBody: GetLifecyclePolicyRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicy', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Retrieves the results of the lifecycle policy preview request for the specified repository.
		 * Post /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicyPreview
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetLifecyclePolicyPreviewResponse} Success
		 */
		GetLifecyclePolicyPreview(maxResults: string, nextToken: string, callback: (data : GetLifecyclePolicyPreviewResponse) => any, requestBody: GetLifecyclePolicyPreviewRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicyPreview?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Retrieves the repository policy for the specified repository.
		 * Post /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetRepositoryPolicy
		 * @return {GetRepositoryPolicyResponse} Success
		 */
		GetRepositoryPolicy(callback: (data : GetRepositoryPolicyResponse) => any, requestBody: GetRepositoryPolicyRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetRepositoryPolicy', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Notifies Amazon ECR that you intend to upload an image layer.</p> <p>When an image is pushed, the InitiateLayerUpload API is called once per image layer that has not already been uploaded. Whether or not an image layer has been uploaded is determined by the BatchCheckLayerAvailability API action.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
		 * Post /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.InitiateLayerUpload
		 * @return {InitiateLayerUploadResponse} Success
		 */
		InitiateLayerUpload(callback: (data : InitiateLayerUploadResponse) => any, requestBody: InitiateLayerUploadRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.InitiateLayerUpload', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Lists all the image IDs for the specified repository.</p> <p>You can filter images based on whether or not they are tagged by using the <code>tagStatus</code> filter and specifying either <code>TAGGED</code>, <code>UNTAGGED</code> or <code>ANY</code>. For example, you can filter your results to return only <code>UNTAGGED</code> images and then pipe that result to a <a>BatchDeleteImage</a> operation to delete them. Or, you can filter your results to return only <code>TAGGED</code> images to list all of the tags in your repository.</p>
		 * Post /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.ListImages
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListImagesResponse} Success
		 */
		ListImages(maxResults: string, nextToken: string, callback: (data : ListImagesResponse) => any, requestBody: ListImagesRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.ListImages?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * List the tags for an Amazon ECR resource.
		 * Post /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(callback: (data : ListTagsForResourceResponse) => any, requestBody: ListTagsForResourceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.ListTagsForResource', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Creates or updates the image manifest and tags associated with an image.</p> <p>When an image is pushed and all new image layers have been uploaded, the PutImage API is called once to create or update the image manifest and the tags associated with the image.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
		 * Post /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImage
		 * @return {PutImageResponse} Success
		 */
		PutImage(callback: (data : PutImageResponse) => any, requestBody: PutImageRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImage', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Updates the image scanning configuration for the specified repository.
		 * Post /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImageScanningConfiguration
		 * @return {PutImageScanningConfigurationResponse} Success
		 */
		PutImageScanningConfiguration(callback: (data : PutImageScanningConfigurationResponse) => any, requestBody: PutImageScanningConfigurationRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImageScanningConfiguration', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Updates the image tag mutability settings for the specified repository. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-tag-mutability.html">Image Tag Mutability</a> in the <i>Amazon Elastic Container Registry User Guide</i>.
		 * Post /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImageTagMutability
		 * @return {PutImageTagMutabilityResponse} Success
		 */
		PutImageTagMutability(callback: (data : PutImageTagMutabilityResponse) => any, requestBody: PutImageTagMutabilityRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImageTagMutability', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Creates or updates the lifecycle policy for the specified repository. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/LifecyclePolicies.html">Lifecycle Policy Template</a>.
		 * Post /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutLifecyclePolicy
		 * @return {PutLifecyclePolicyResponse} Success
		 */
		PutLifecyclePolicy(callback: (data : PutLifecyclePolicyResponse) => any, requestBody: PutLifecyclePolicyRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutLifecyclePolicy', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Applies a repository policy to the specified repository to control access permissions. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policies.html">Amazon ECR Repository Policies</a> in the <i>Amazon Elastic Container Registry User Guide</i>.
		 * Post /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.SetRepositoryPolicy
		 * @return {SetRepositoryPolicyResponse} Success
		 */
		SetRepositoryPolicy(callback: (data : SetRepositoryPolicyResponse) => any, requestBody: SetRepositoryPolicyRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.SetRepositoryPolicy', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Starts an image vulnerability scan. An image scan can only be started once per day on an individual image. This limit includes if an image was scanned on initial push. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-scanning.html">Image Scanning</a> in the <i>Amazon Elastic Container Registry User Guide</i>.
		 * Post /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.StartImageScan
		 * @return {StartImageScanResponse} Success
		 */
		StartImageScan(callback: (data : StartImageScanResponse) => any, requestBody: StartImageScanRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.StartImageScan', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Starts a preview of a lifecycle policy for the specified repository. This allows you to see the results before associating the lifecycle policy with the repository.
		 * Post /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.StartLifecyclePolicyPreview
		 * @return {StartLifecyclePolicyPreviewResponse} Success
		 */
		StartLifecyclePolicyPreview(callback: (data : StartLifecyclePolicyPreviewResponse) => any, requestBody: StartLifecyclePolicyPreviewRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.StartLifecyclePolicyPreview', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Adds specified tags to a resource with the specified ARN. Existing tags on a resource are not changed if they are not specified in the request parameters.
		 * Post /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(callback: (data : TagResourceResponse) => any, requestBody: TagResourceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.TagResource', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Deletes specified tags from a resource.
		 * Post /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(callback: (data : UntagResourceResponse) => any, requestBody: UntagResourceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.UntagResource', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Uploads an image layer part to Amazon ECR.</p> <p>When an image is pushed, each new image layer is uploaded in parts. The maximum size of each image layer part can be 20971520 bytes (or about 20MB). The UploadLayerPart API is called once per each new image layer part.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
		 * Post /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.UploadLayerPart
		 * @return {UploadLayerPartResponse} Success
		 */
		UploadLayerPart(callback: (data : UploadLayerPartResponse) => any, requestBody: UploadLayerPartRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.UploadLayerPart', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}
	}

}

