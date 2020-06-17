///<reference path="HttpClient.ts" />
namespace My_Demo_Client {
	export interface CancelImageCreationResponse {
		requestId?: string;
		clientToken?: string;
		imageBuildVersionArn?: string;
	}

	export interface CreateComponentResponse {
		requestId?: string;
		clientToken?: string;
		componentBuildVersionArn?: string;
	}

	export interface CreateDistributionConfigurationResponse {
		requestId?: string;
		clientToken?: string;
		distributionConfigurationArn?: string;
	}


	/** Defines the settings for a specific Region.  */
	export interface Distribution {
		region: string;

		/**Define and configure the output AMIs of the pipeline. */
		amiDistributionConfiguration?: AmiDistributionConfiguration;
		licenseConfigurationArns?: Array<Arn>;
	}

	export interface CreateImageResponse {
		requestId?: string;
		clientToken?: string;
		imageBuildVersionArn?: string;
	}

	export interface CreateImagePipelineResponse {
		requestId?: string;
		clientToken?: string;
		imagePipelineArn?: string;
	}

	export enum PipelineExecutionStartCondition { EXPRESSION_MATCH_ONLY = 0, EXPRESSION_MATCH_AND_DEPENDENCY_UPDATES_AVAILABLE = 1 }

	export interface CreateImageRecipeResponse {
		requestId?: string;
		clientToken?: string;
		imageRecipeArn?: string;
	}


	/** Configuration details of the component.  */
	export interface ComponentConfiguration {
		componentArn: string;
	}


	/**Defines block device mappings for the instance used to configure your image. */
	export interface InstanceBlockDeviceMapping {
		deviceName?: string;

		/**Amazon EBS-specific block device mapping specifications. */
		ebs?: EbsInstanceBlockDeviceSpecification;
		virtualName?: string;
		noDevice?: string;
	}

	export interface CreateInfrastructureConfigurationResponse {
		requestId?: string;
		clientToken?: string;
		infrastructureConfigurationArn?: string;
	}


	/**Amazon S3 logging configuration. */
	export interface S3Logs {
		s3BucketName?: string;
		s3KeyPrefix?: string;
	}

	export interface DeleteComponentResponse {
		requestId?: string;
		componentBuildVersionArn?: string;
	}

	export interface DeleteDistributionConfigurationResponse {
		requestId?: string;
		distributionConfigurationArn?: string;
	}

	export interface DeleteImageResponse {
		requestId?: string;
		imageBuildVersionArn?: string;
	}

	export interface DeleteImagePipelineResponse {
		requestId?: string;
		imagePipelineArn?: string;
	}

	export interface DeleteImageRecipeResponse {
		requestId?: string;
		imageRecipeArn?: string;
	}

	export interface DeleteInfrastructureConfigurationResponse {
		requestId?: string;
		infrastructureConfigurationArn?: string;
	}

	export interface GetComponentResponse {
		requestId?: string;

		/**A detailed view of a component. */
		component?: Component;
	}

	export interface GetComponentPolicyResponse {
		requestId?: string;
		policy?: string;
	}

	export interface GetDistributionConfigurationResponse {
		requestId?: string;

		/**A distribution configuration. */
		distributionConfiguration?: DistributionConfiguration;
	}

	export interface GetImageResponse {
		requestId?: string;

		/**An image build version. */
		image?: Image;
	}

	export interface GetImagePipelineResponse {
		requestId?: string;

		/**Details of an image pipeline. */
		imagePipeline?: ImagePipeline;
	}

	export interface GetImagePolicyResponse {
		requestId?: string;
		policy?: string;
	}

	export interface GetImageRecipeResponse {
		requestId?: string;

		/**An image recipe. */
		imageRecipe?: ImageRecipe;
	}

	export interface GetImageRecipePolicyResponse {
		requestId?: string;
		policy?: string;
	}


	/**GetInfrastructureConfiguration response object.  */
	export interface GetInfrastructureConfigurationResponse {
		requestId?: string;

		/**Details of the infrastructure configuration. */
		infrastructureConfiguration?: InfrastructureConfiguration;
	}

	export interface ImportComponentResponse {
		requestId?: string;
		clientToken?: string;
		componentBuildVersionArn?: string;
	}

	export interface ListComponentBuildVersionsResponse {
		requestId?: string;
		componentSummaryList?: Array<ComponentSummary>;
		nextToken?: string;
	}

	export interface ListComponentsResponse {
		requestId?: string;
		componentVersionList?: Array<ComponentVersion>;
		nextToken?: string;
	}


	/**A filter name and value pair that is used to return a more specific list of results from a list operation. Filters can be used to match a set of resources by specific criteria, such as tags, attributes, or IDs.  */
	export interface Filter {
		name?: string;
		values?: Array<FilterValue>;
	}

	export interface ListDistributionConfigurationsResponse {
		requestId?: string;
		distributionConfigurationSummaryList?: Array<DistributionConfigurationSummary>;
		nextToken?: string;
	}

	export interface ListImageBuildVersionsResponse {
		requestId?: string;
		imageSummaryList?: Array<ImageSummary>;
		nextToken?: string;
	}

	export interface ListImagePipelineImagesResponse {
		requestId?: string;
		imageSummaryList?: Array<ImageSummary>;
		nextToken?: string;
	}

	export interface ListImagePipelinesResponse {
		requestId?: string;
		imagePipelineList?: Array<ImagePipeline>;
		nextToken?: string;
	}

	export interface ListImageRecipesResponse {
		requestId?: string;
		imageRecipeSummaryList?: Array<ImageRecipeSummary>;
		nextToken?: string;
	}

	export interface ListImagesResponse {
		requestId?: string;
		imageVersionList?: Array<ImageVersion>;
		nextToken?: string;
	}

	export interface ListInfrastructureConfigurationsResponse {
		requestId?: string;
		infrastructureConfigurationSummaryList?: Array<InfrastructureConfigurationSummary>;
		nextToken?: string;
	}

	export interface ListTagsForResourceResponse {
		tags?: TagMap;
	}

	export interface PutComponentPolicyResponse {
		requestId?: string;
		componentArn?: string;
	}

	export interface PutImagePolicyResponse {
		requestId?: string;
		imageArn?: string;
	}

	export interface PutImageRecipePolicyResponse {
		requestId?: string;
		imageRecipeArn?: string;
	}

	export interface StartImagePipelineExecutionResponse {
		requestId?: string;
		clientToken?: string;
		imageBuildVersionArn?: string;
	}

	export interface UpdateDistributionConfigurationResponse {
		requestId?: string;
		clientToken?: string;
		distributionConfigurationArn?: string;
	}

	export interface UpdateImagePipelineResponse {
		requestId?: string;
		clientToken?: string;
		imagePipelineArn?: string;
	}

	export interface UpdateInfrastructureConfigurationResponse {
		requestId?: string;
		clientToken?: string;
		infrastructureConfigurationArn?: string;
	}


	/** Image state shows the image status and the reason for that status.  */
	export interface ImageState {
		status?: ImageStateStatus;
		reason?: string;
	}

	export enum ImageStateStatus { PENDING = 0, CREATING = 1, BUILDING = 2, TESTING = 3, DISTRIBUTING = 4, INTEGRATING = 5, AVAILABLE = 6, CANCELLED = 7, FAILED = 8, DEPRECATED = 9, DELETED = 10 }


	/** Details of an EC2 AMI.  */
	export interface Ami {
		region?: string;
		image?: string;
		name?: string;
		description?: string;

		/**Image state shows the image status and the reason for that status. */
		state?: ImageState;
	}


	/**Describes the configuration for a launch permission. The launch permission modification request is sent to the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyImageAttribute.html">EC2 ModifyImageAttribute</a> API on behalf of the user for each Region they have selected to distribute the AMI. */
	export interface LaunchPermissionConfiguration {
		userIds?: Array<NonEmptyString>;
		userGroups?: Array<NonEmptyString>;
	}


	/** Define and configure the output AMIs of the pipeline.  */
	export interface AmiDistributionConfiguration {
		name?: string;
		description?: string;
		amiTags?: TagMap;

		/**Describes the configuration for a launch permission. The launch permission modification request is sent to the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyImageAttribute.html">EC2 ModifyImageAttribute</a> API on behalf of the user for each Region they have selected to distribute the AMI. */
		launchPermission?: LaunchPermissionConfiguration;
	}

	export interface CancelImageCreationRequest {
		imageBuildVersionArn: string;
		clientToken: string;
	}

	export enum ComponentType { BUILD = 0, TEST = 1 }

	export enum Platform { Windows = 0, Linux = 1 }


	/**A detailed view of a component. */
	export interface Component {
		arn?: string;
		name?: string;
		version?: string;
		description?: string;
		changeDescription?: string;
		type?: ComponentType;
		platform?: ComponentPlatform;
		supportedOsVersions?: Array<OsVersion>;
		owner?: string;
		data?: string;
		kmsKeyId?: string;
		encrypted?: boolean;
		dateCreated?: string;
		tags?: TagMap;
	}

	export enum ComponentType { BUILD = 0, TEST = 1 }

	export enum ComponentPlatform { Windows = 0, Linux = 1 }

	export enum ComponentFormat { SHELL = 0 }


	/**A high-level summary of a component. */
	export interface ComponentSummary {
		arn?: string;
		name?: string;
		version?: string;
		platform?: ComponentSummaryPlatform;
		supportedOsVersions?: Array<OsVersion>;
		type?: ComponentSummaryType;
		owner?: string;
		description?: string;
		changeDescription?: string;
		dateCreated?: string;
		tags?: TagMap;
	}

	export enum ComponentSummaryPlatform { Windows = 0, Linux = 1 }

	export enum ComponentSummaryType { BUILD = 0, TEST = 1 }


	/**A high-level overview of a component semantic version. */
	export interface ComponentVersion {
		arn?: string;
		name?: string;
		version?: string;
		description?: string;
		platform?: ComponentVersionPlatform;
		supportedOsVersions?: Array<OsVersion>;
		type?: ComponentVersionType;
		owner?: string;
		dateCreated?: string;
	}

	export enum ComponentVersionPlatform { Windows = 0, Linux = 1 }

	export enum ComponentVersionType { BUILD = 0, TEST = 1 }

	export interface CreateComponentRequest {
		name: string;
		semanticVersion: string;
		description?: string;
		changeDescription?: string;
		platform: CreateComponentRequestPlatform;
		supportedOsVersions?: Array<OsVersion>;
		data?: string;
		uri?: string;
		kmsKeyId?: string;
		tags?: TagMap;
		clientToken: string;
	}

	export enum CreateComponentRequestPlatform { Windows = 0, Linux = 1 }

	export interface CreateDistributionConfigurationRequest {
		name: string;
		description?: string;
		distributions: Array<Distribution>;
		tags?: TagMap;
		clientToken: string;
	}


	/**Image tests configuration. */
	export interface ImageTestsConfiguration {
		imageTestsEnabled?: boolean;
		timeoutMinutes?: number;
	}


	/**A schedule configures how often and when a pipeline will automatically create a new image.  */
	export interface Schedule {
		scheduleExpression?: string;
		pipelineExecutionStartCondition?: SchedulePipelineExecutionStartCondition;
	}

	export enum SchedulePipelineExecutionStartCondition { EXPRESSION_MATCH_ONLY = 0, EXPRESSION_MATCH_AND_DEPENDENCY_UPDATES_AVAILABLE = 1 }

	export enum PipelineStatus { DISABLED = 0, ENABLED = 1 }

	export interface CreateImagePipelineRequest {
		name: string;
		description?: string;
		imageRecipeArn: string;
		infrastructureConfigurationArn: string;
		distributionConfigurationArn?: string;

		/**Image tests configuration. */
		imageTestsConfiguration?: ImageTestsConfiguration;
		enhancedImageMetadataEnabled?: boolean;

		/**A schedule configures how often and when a pipeline will automatically create a new image. */
		schedule?: Schedule;
		status?: CreateImagePipelineRequestStatus;
		tags?: TagMap;
		clientToken: string;
	}

	export enum CreateImagePipelineRequestStatus { DISABLED = 0, ENABLED = 1 }

	export interface CreateImageRecipeRequest {
		name: string;
		description?: string;
		semanticVersion: string;
		components: Array<ComponentConfiguration>;
		parentImage: string;
		blockDeviceMappings?: Array<InstanceBlockDeviceMapping>;
		tags?: TagMap;
		clientToken: string;
	}

	export interface CreateImageRequest {
		imageRecipeArn: string;
		distributionConfigurationArn?: string;
		infrastructureConfigurationArn: string;

		/**Image tests configuration. */
		imageTestsConfiguration?: ImageTestsConfiguration;
		enhancedImageMetadataEnabled?: boolean;
		tags?: TagMap;
		clientToken: string;
	}


	/**Logging configuration defines where Image Builder uploads your logs. */
	export interface Logging {

		/**Amazon S3 logging configuration. */
		s3Logs?: S3Logs;
	}

	export interface CreateInfrastructureConfigurationRequest {
		name: string;
		description?: string;
		instanceTypes?: Array<InstanceType>;
		instanceProfileName: string;
		securityGroupIds?: Array<NonEmptyString>;
		subnetId?: string;

		/**Logging configuration defines where Image Builder uploads your logs. */
		logging?: Logging;
		keyPair?: string;
		terminateInstanceOnFailure?: boolean;
		snsTopicArn?: string;
		tags?: TagMap;
		clientToken: string;
	}


	/**A distribution configuration. */
	export interface DistributionConfiguration {
		arn?: string;
		name?: string;
		description?: string;
		distributions?: Array<Distribution>;
		timeoutMinutes: number;
		dateCreated?: string;
		dateUpdated?: string;
		tags?: TagMap;
	}


	/**A high-level overview of a distribution configuration. */
	export interface DistributionConfigurationSummary {
		arn?: string;
		name?: string;
		description?: string;
		dateCreated?: string;
		dateUpdated?: string;
		tags?: TagMap;
	}

	export enum EbsVolumeType { standard = 0, io1 = 1, gp2 = 2, sc1 = 3, st1 = 4 }


	/**Amazon EBS-specific block device mapping specifications. */
	export interface EbsInstanceBlockDeviceSpecification {
		encrypted?: boolean;
		deleteOnTermination?: boolean;
		iops?: number;
		kmsKeyId?: string;
		snapshotId?: string;
		volumeSize?: number;
		volumeType?: EbsInstanceBlockDeviceSpecificationVolumeType;
	}

	export enum EbsInstanceBlockDeviceSpecificationVolumeType { standard = 0, io1 = 1, gp2 = 2, sc1 = 3, st1 = 4 }


	/**Details of an image pipeline. */
	export interface ImagePipeline {
		arn?: string;
		name?: string;
		description?: string;
		platform?: ImagePipelinePlatform;
		enhancedImageMetadataEnabled?: boolean;
		imageRecipeArn?: string;
		infrastructureConfigurationArn?: string;
		distributionConfigurationArn?: string;

		/**Image tests configuration. */
		imageTestsConfiguration?: ImageTestsConfiguration;

		/**A schedule configures how often and when a pipeline will automatically create a new image. */
		schedule?: Schedule;
		status?: ImagePipelineStatus;
		dateCreated?: string;
		dateUpdated?: string;
		dateLastRun?: string;
		dateNextRun?: string;
		tags?: TagMap;
	}

	export enum ImagePipelinePlatform { Windows = 0, Linux = 1 }

	export enum ImagePipelineStatus { DISABLED = 0, ENABLED = 1 }


	/**An image recipe. */
	export interface ImageRecipe {
		arn?: string;
		name?: string;
		description?: string;
		platform?: ImageRecipePlatform;
		owner?: string;
		version?: string;
		components?: Array<ComponentConfiguration>;
		parentImage?: string;
		blockDeviceMappings?: Array<InstanceBlockDeviceMapping>;
		dateCreated?: string;
		tags?: TagMap;
	}

	export enum ImageRecipePlatform { Windows = 0, Linux = 1 }


	/**An image build version. */
	export interface Image {
		arn?: string;
		name?: string;
		version?: string;
		platform?: ImagePlatform;
		enhancedImageMetadataEnabled?: boolean;
		osVersion?: string;

		/**Image state shows the image status and the reason for that status. */
		state?: ImageState;

		/**An image recipe. */
		imageRecipe?: ImageRecipe;
		sourcePipelineName?: string;
		sourcePipelineArn?: string;

		/**Details of the infrastructure configuration. */
		infrastructureConfiguration?: InfrastructureConfiguration;

		/**A distribution configuration. */
		distributionConfiguration?: DistributionConfiguration;

		/**Image tests configuration. */
		imageTestsConfiguration?: ImageTestsConfiguration;
		dateCreated?: string;

		/**The resources produced by this image. */
		outputResources?: OutputResources;
		tags?: TagMap;
	}

	export enum ImagePlatform { Windows = 0, Linux = 1 }


	/**Details of the infrastructure configuration. */
	export interface InfrastructureConfiguration {
		arn?: string;
		name?: string;
		description?: string;
		instanceTypes?: Array<InstanceType>;
		instanceProfileName?: string;
		securityGroupIds?: Array<NonEmptyString>;
		subnetId?: string;

		/**Logging configuration defines where Image Builder uploads your logs. */
		logging?: Logging;
		keyPair?: string;
		terminateInstanceOnFailure?: boolean;
		snsTopicArn?: string;
		dateCreated?: string;
		dateUpdated?: string;
		tags?: TagMap;
	}


	/**The resources produced by this image.  */
	export interface OutputResources {
		amis?: Array<Ami>;
	}


	/**A summary of an image recipe. */
	export interface ImageRecipeSummary {
		arn?: string;
		name?: string;
		platform?: ImageRecipeSummaryPlatform;
		owner?: string;
		parentImage?: string;
		dateCreated?: string;
		tags?: TagMap;
	}

	export enum ImageRecipeSummaryPlatform { Windows = 0, Linux = 1 }

	export enum ImageStatus { PENDING = 0, CREATING = 1, BUILDING = 2, TESTING = 3, DISTRIBUTING = 4, INTEGRATING = 5, AVAILABLE = 6, CANCELLED = 7, FAILED = 8, DEPRECATED = 9, DELETED = 10 }


	/**An image summary. */
	export interface ImageSummary {
		arn?: string;
		name?: string;
		version?: string;
		platform?: ImageSummaryPlatform;
		osVersion?: string;

		/**Image state shows the image status and the reason for that status. */
		state?: ImageState;
		owner?: string;
		dateCreated?: string;

		/**The resources produced by this image. */
		outputResources?: OutputResources;
		tags?: TagMap;
	}

	export enum ImageSummaryPlatform { Windows = 0, Linux = 1 }


	/**An image semantic version. */
	export interface ImageVersion {
		arn?: string;
		name?: string;
		version?: string;
		platform?: ImageVersionPlatform;
		osVersion?: string;
		owner?: string;
		dateCreated?: string;
	}

	export enum ImageVersionPlatform { Windows = 0, Linux = 1 }

	export interface ImportComponentRequest {
		name: string;
		semanticVersion: string;
		description?: string;
		changeDescription?: string;
		type: ImportComponentRequestType;
		format: ImportComponentRequestFormat;
		platform: ImportComponentRequestPlatform;
		data?: string;
		uri?: string;
		kmsKeyId?: string;
		tags?: TagMap;
		clientToken: string;
	}

	export enum ImportComponentRequestType { BUILD = 0, TEST = 1 }

	export enum ImportComponentRequestFormat { SHELL = 0 }

	export enum ImportComponentRequestPlatform { Windows = 0, Linux = 1 }


	/**The infrastructure used when building EC2 AMIs. */
	export interface InfrastructureConfigurationSummary {
		arn?: string;
		name?: string;
		description?: string;
		dateCreated?: string;
		dateUpdated?: string;
		tags?: TagMap;
	}

	export interface ListComponentBuildVersionsRequest {
		componentVersionArn: string;
		maxResults?: number;
		nextToken?: string;
	}

	export enum Ownership { Self = 0, Shared = 1, Amazon = 2 }

	export interface ListComponentsRequest {
		owner?: ListComponentsRequestOwner;
		filters?: Array<Filter>;
		maxResults?: number;
		nextToken?: string;
	}

	export enum ListComponentsRequestOwner { Self = 0, Shared = 1, Amazon = 2 }

	export interface ListDistributionConfigurationsRequest {
		filters?: Array<Filter>;
		maxResults?: number;
		nextToken?: string;
	}

	export interface ListImageBuildVersionsRequest {
		imageVersionArn: string;
		filters?: Array<Filter>;
		maxResults?: number;
		nextToken?: string;
	}

	export interface ListImagePipelineImagesRequest {
		imagePipelineArn: string;
		filters?: Array<Filter>;
		maxResults?: number;
		nextToken?: string;
	}

	export interface ListImagePipelinesRequest {
		filters?: Array<Filter>;
		maxResults?: number;
		nextToken?: string;
	}

	export interface ListImageRecipesRequest {
		owner?: ListImageRecipesRequestOwner;
		filters?: Array<Filter>;
		maxResults?: number;
		nextToken?: string;
	}

	export enum ListImageRecipesRequestOwner { Self = 0, Shared = 1, Amazon = 2 }

	export interface ListImagesRequest {
		owner?: ListImagesRequestOwner;
		filters?: Array<Filter>;
		maxResults?: number;
		nextToken?: string;
	}

	export enum ListImagesRequestOwner { Self = 0, Shared = 1, Amazon = 2 }

	export interface ListInfrastructureConfigurationsRequest {
		filters?: Array<Filter>;
		maxResults?: number;
		nextToken?: string;
	}

	export interface PutComponentPolicyRequest {
		componentArn: string;
		policy: string;
	}

	export interface PutImagePolicyRequest {
		imageArn: string;
		policy: string;
	}

	export interface PutImageRecipePolicyRequest {
		imageRecipeArn: string;
		policy: string;
	}

	export interface StartImagePipelineExecutionRequest {
		imagePipelineArn: string;
		clientToken: string;
	}

	export interface TagResourceRequest {
		tags: TagMap;
	}

	export interface UpdateDistributionConfigurationRequest {
		distributionConfigurationArn: string;
		description?: string;
		distributions: Array<Distribution>;
		clientToken: string;
	}

	export interface UpdateImagePipelineRequest {
		imagePipelineArn: string;
		description?: string;
		imageRecipeArn: string;
		infrastructureConfigurationArn: string;
		distributionConfigurationArn?: string;

		/**Image tests configuration. */
		imageTestsConfiguration?: ImageTestsConfiguration;
		enhancedImageMetadataEnabled?: boolean;

		/**A schedule configures how often and when a pipeline will automatically create a new image. */
		schedule?: Schedule;
		status?: UpdateImagePipelineRequestStatus;
		clientToken: string;
	}

	export enum UpdateImagePipelineRequestStatus { DISABLED = 0, ENABLED = 1 }

	export interface UpdateInfrastructureConfigurationRequest {
		infrastructureConfigurationArn: string;
		description?: string;
		instanceTypes?: Array<InstanceType>;
		instanceProfileName: string;
		securityGroupIds?: Array<NonEmptyString>;
		subnetId?: string;

		/**Logging configuration defines where Image Builder uploads your logs. */
		logging?: Logging;
		keyPair?: string;
		terminateInstanceOnFailure?: boolean;
		snsTopicArn?: string;
		clientToken: string;
	}

	export class DemoClient {
		constructor(private baseUri: string = HttpClient.locationOrigin, private httpClient: HttpClientBase = new HttpClient(), private error?: (xhr: JQueryXHR, ajaxOptions: string, thrown: string) => any, private statusCode?: { [key: string]: any; }) {
		}

		/**
		 * CancelImageCreation cancels the creation of Image. This operation can only be used on images in a non-terminal state.
		 * Put /CancelImageCreation
		 * @return {CancelImageCreationResponse} Success
		 */
		CancelImageCreation(callback: (data : CancelImageCreationResponse) => any, requestBody: CancelImageCreationBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.put(this.baseUri + '/CancelImageCreation', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Creates a new component that can be used to build, validate, test, and assess your image.
		 * Put /CreateComponent
		 * @return {CreateComponentResponse} Success
		 */
		CreateComponent(callback: (data : CreateComponentResponse) => any, requestBody: CreateComponentBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.put(this.baseUri + '/CreateComponent', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Creates a new distribution configuration. Distribution configurations define and configure the outputs of your pipeline.
		 * Put /CreateDistributionConfiguration
		 * @return {CreateDistributionConfigurationResponse} Success
		 */
		CreateDistributionConfiguration(callback: (data : CreateDistributionConfigurationResponse) => any, requestBody: CreateDistributionConfigurationBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.put(this.baseUri + '/CreateDistributionConfiguration', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Creates a new image. This request will create a new image along with all of the configured output resources defined in the distribution configuration.
		 * Put /CreateImage
		 * @return {CreateImageResponse} Success
		 */
		CreateImage(callback: (data : CreateImageResponse) => any, requestBody: CreateImageBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.put(this.baseUri + '/CreateImage', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Creates a new image pipeline. Image pipelines enable you to automate the creation and distribution of images.
		 * Put /CreateImagePipeline
		 * @return {CreateImagePipelineResponse} Success
		 */
		CreateImagePipeline(callback: (data : CreateImagePipelineResponse) => any, requestBody: CreateImagePipelineBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.put(this.baseUri + '/CreateImagePipeline', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Creates a new image recipe. Image recipes define how images are configured, tested, and assessed.
		 * Put /CreateImageRecipe
		 * @return {CreateImageRecipeResponse} Success
		 */
		CreateImageRecipe(callback: (data : CreateImageRecipeResponse) => any, requestBody: CreateImageRecipeBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.put(this.baseUri + '/CreateImageRecipe', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Creates a new infrastructure configuration. An infrastructure configuration defines the environment in which your image will be built and tested.
		 * Put /CreateInfrastructureConfiguration
		 * @return {CreateInfrastructureConfigurationResponse} Success
		 */
		CreateInfrastructureConfiguration(callback: (data : CreateInfrastructureConfigurationResponse) => any, requestBody: CreateInfrastructureConfigurationBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.put(this.baseUri + '/CreateInfrastructureConfiguration', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Deletes a component build version.
		 * Delete /DeleteComponent#componentBuildVersionArn
		 * @param {string} componentBuildVersionArn The Amazon Resource Name (ARN) of the component build version to delete. 
		 * @return {DeleteComponentResponse} Success
		 */
		DeleteComponent(componentBuildVersionArn: string, callback: (data : DeleteComponentResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + '/DeleteComponent#componentBuildVersionArn?componentBuildVersionArn=' + (componentBuildVersionArn == null ? '' : encodeURIComponent(componentBuildVersionArn)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Deletes a distribution configuration.
		 * Delete /DeleteDistributionConfiguration#distributionConfigurationArn
		 * @param {string} distributionConfigurationArn The Amazon Resource Name (ARN) of the distribution configuration to delete. 
		 * @return {DeleteDistributionConfigurationResponse} Success
		 */
		DeleteDistributionConfiguration(distributionConfigurationArn: string, callback: (data : DeleteDistributionConfigurationResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + '/DeleteDistributionConfiguration#distributionConfigurationArn?distributionConfigurationArn=' + (distributionConfigurationArn == null ? '' : encodeURIComponent(distributionConfigurationArn)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Deletes an image.
		 * Delete /DeleteImage#imageBuildVersionArn
		 * @param {string} imageBuildVersionArn The Amazon Resource Name (ARN) of the image to delete. 
		 * @return {DeleteImageResponse} Success
		 */
		DeleteImage(imageBuildVersionArn: string, callback: (data : DeleteImageResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + '/DeleteImage#imageBuildVersionArn?imageBuildVersionArn=' + (imageBuildVersionArn == null ? '' : encodeURIComponent(imageBuildVersionArn)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Deletes an image pipeline.
		 * Delete /DeleteImagePipeline#imagePipelineArn
		 * @param {string} imagePipelineArn The Amazon Resource Name (ARN) of the image pipeline to delete. 
		 * @return {DeleteImagePipelineResponse} Success
		 */
		DeleteImagePipeline(imagePipelineArn: string, callback: (data : DeleteImagePipelineResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + '/DeleteImagePipeline#imagePipelineArn?imagePipelineArn=' + (imagePipelineArn == null ? '' : encodeURIComponent(imagePipelineArn)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Deletes an image recipe.
		 * Delete /DeleteImageRecipe#imageRecipeArn
		 * @param {string} imageRecipeArn The Amazon Resource Name (ARN) of the image recipe to delete. 
		 * @return {DeleteImageRecipeResponse} Success
		 */
		DeleteImageRecipe(imageRecipeArn: string, callback: (data : DeleteImageRecipeResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + '/DeleteImageRecipe#imageRecipeArn?imageRecipeArn=' + (imageRecipeArn == null ? '' : encodeURIComponent(imageRecipeArn)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Deletes an infrastructure configuration.
		 * Delete /DeleteInfrastructureConfiguration#infrastructureConfigurationArn
		 * @param {string} infrastructureConfigurationArn The Amazon Resource Name (ARN) of the infrastructure configuration to delete. 
		 * @return {DeleteInfrastructureConfigurationResponse} Success
		 */
		DeleteInfrastructureConfiguration(infrastructureConfigurationArn: string, callback: (data : DeleteInfrastructureConfigurationResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + '/DeleteInfrastructureConfiguration#infrastructureConfigurationArn?infrastructureConfigurationArn=' + (infrastructureConfigurationArn == null ? '' : encodeURIComponent(infrastructureConfigurationArn)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Gets a component object.
		 * Get /GetComponent#componentBuildVersionArn
		 * @param {string} componentBuildVersionArn The Amazon Resource Name (ARN) of the component that you want to retrieve. Regex requires "/\d+$" suffix.
		 * @return {GetComponentResponse} Success
		 */
		GetComponent(componentBuildVersionArn: string, callback: (data : GetComponentResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/GetComponent#componentBuildVersionArn?componentBuildVersionArn=' + (componentBuildVersionArn == null ? '' : encodeURIComponent(componentBuildVersionArn)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Gets a component policy.
		 * Get /GetComponentPolicy#componentArn
		 * @param {string} componentArn The Amazon Resource Name (ARN) of the component whose policy you want to retrieve. 
		 * @return {GetComponentPolicyResponse} Success
		 */
		GetComponentPolicy(componentArn: string, callback: (data : GetComponentPolicyResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/GetComponentPolicy#componentArn?componentArn=' + (componentArn == null ? '' : encodeURIComponent(componentArn)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Gets a distribution configuration.
		 * Get /GetDistributionConfiguration#distributionConfigurationArn
		 * @param {string} distributionConfigurationArn The Amazon Resource Name (ARN) of the distribution configuration that you want to retrieve. 
		 * @return {GetDistributionConfigurationResponse} Success
		 */
		GetDistributionConfiguration(distributionConfigurationArn: string, callback: (data : GetDistributionConfigurationResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/GetDistributionConfiguration#distributionConfigurationArn?distributionConfigurationArn=' + (distributionConfigurationArn == null ? '' : encodeURIComponent(distributionConfigurationArn)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Gets an image.
		 * Get /GetImage#imageBuildVersionArn
		 * @param {string} imageBuildVersionArn The Amazon Resource Name (ARN) of the image that you want to retrieve. 
		 * @return {GetImageResponse} Success
		 */
		GetImage(imageBuildVersionArn: string, callback: (data : GetImageResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/GetImage#imageBuildVersionArn?imageBuildVersionArn=' + (imageBuildVersionArn == null ? '' : encodeURIComponent(imageBuildVersionArn)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Gets an image pipeline.
		 * Get /GetImagePipeline#imagePipelineArn
		 * @param {string} imagePipelineArn The Amazon Resource Name (ARN) of the image pipeline that you want to retrieve. 
		 * @return {GetImagePipelineResponse} Success
		 */
		GetImagePipeline(imagePipelineArn: string, callback: (data : GetImagePipelineResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/GetImagePipeline#imagePipelineArn?imagePipelineArn=' + (imagePipelineArn == null ? '' : encodeURIComponent(imagePipelineArn)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Gets an image policy.
		 * Get /GetImagePolicy#imageArn
		 * @param {string} imageArn The Amazon Resource Name (ARN) of the image whose policy you want to retrieve. 
		 * @return {GetImagePolicyResponse} Success
		 */
		GetImagePolicy(imageArn: string, callback: (data : GetImagePolicyResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/GetImagePolicy#imageArn?imageArn=' + (imageArn == null ? '' : encodeURIComponent(imageArn)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Gets an image recipe.
		 * Get /GetImageRecipe#imageRecipeArn
		 * @param {string} imageRecipeArn The Amazon Resource Name (ARN) of the image recipe that you want to retrieve. 
		 * @return {GetImageRecipeResponse} Success
		 */
		GetImageRecipe(imageRecipeArn: string, callback: (data : GetImageRecipeResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/GetImageRecipe#imageRecipeArn?imageRecipeArn=' + (imageRecipeArn == null ? '' : encodeURIComponent(imageRecipeArn)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Gets an image recipe policy.
		 * Get /GetImageRecipePolicy#imageRecipeArn
		 * @param {string} imageRecipeArn The Amazon Resource Name (ARN) of the image recipe whose policy you want to retrieve. 
		 * @return {GetImageRecipePolicyResponse} Success
		 */
		GetImageRecipePolicy(imageRecipeArn: string, callback: (data : GetImageRecipePolicyResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/GetImageRecipePolicy#imageRecipeArn?imageRecipeArn=' + (imageRecipeArn == null ? '' : encodeURIComponent(imageRecipeArn)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Gets an infrastructure configuration.
		 * Get /GetInfrastructureConfiguration#infrastructureConfigurationArn
		 * @param {string} infrastructureConfigurationArn The Amazon Resource Name (ARN) of the infrastructure configuration that you want to retrieve. 
		 * @return {GetInfrastructureConfigurationResponse} Success
		 */
		GetInfrastructureConfiguration(infrastructureConfigurationArn: string, callback: (data : GetInfrastructureConfigurationResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/GetInfrastructureConfiguration#infrastructureConfigurationArn?infrastructureConfigurationArn=' + (infrastructureConfigurationArn == null ? '' : encodeURIComponent(infrastructureConfigurationArn)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Imports a component and transforms its data into a component document.
		 * Put /ImportComponent
		 * @return {ImportComponentResponse} Success
		 */
		ImportComponent(callback: (data : ImportComponentResponse) => any, requestBody: ImportComponentBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.put(this.baseUri + '/ImportComponent', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Returns the list of component build versions for the specified semantic version.
		 * Post /ListComponentBuildVersions
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListComponentBuildVersionsResponse} Success
		 */
		ListComponentBuildVersions(maxResults: string, nextToken: string, callback: (data : ListComponentBuildVersionsResponse) => any, requestBody: ListComponentBuildVersionsBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/ListComponentBuildVersions?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Returns the list of component build versions for the specified semantic version.
		 * Post /ListComponents
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListComponentsResponse} Success
		 */
		ListComponents(maxResults: string, nextToken: string, callback: (data : ListComponentsResponse) => any, requestBody: ListComponentsBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/ListComponents?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Returns a list of distribution configurations.
		 * Post /ListDistributionConfigurations
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListDistributionConfigurationsResponse} Success
		 */
		ListDistributionConfigurations(maxResults: string, nextToken: string, callback: (data : ListDistributionConfigurationsResponse) => any, requestBody: ListDistributionConfigurationsBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/ListDistributionConfigurations?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Returns a list of distribution configurations.
		 * Post /ListImageBuildVersions
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListImageBuildVersionsResponse} Success
		 */
		ListImageBuildVersions(maxResults: string, nextToken: string, callback: (data : ListImageBuildVersionsResponse) => any, requestBody: ListImageBuildVersionsBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/ListImageBuildVersions?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Returns a list of images created by the specified pipeline.
		 * Post /ListImagePipelineImages
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListImagePipelineImagesResponse} Success
		 */
		ListImagePipelineImages(maxResults: string, nextToken: string, callback: (data : ListImagePipelineImagesResponse) => any, requestBody: ListImagePipelineImagesBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/ListImagePipelineImages?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Returns a list of image pipelines.
		 * Post /ListImagePipelines
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListImagePipelinesResponse} Success
		 */
		ListImagePipelines(maxResults: string, nextToken: string, callback: (data : ListImagePipelinesResponse) => any, requestBody: ListImagePipelinesBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/ListImagePipelines?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Returns a list of image recipes.
		 * Post /ListImageRecipes
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListImageRecipesResponse} Success
		 */
		ListImageRecipes(maxResults: string, nextToken: string, callback: (data : ListImageRecipesResponse) => any, requestBody: ListImageRecipesBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/ListImageRecipes?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Returns the list of image build versions for the specified semantic version.
		 * Post /ListImages
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListImagesResponse} Success
		 */
		ListImages(maxResults: string, nextToken: string, callback: (data : ListImagesResponse) => any, requestBody: ListImagesBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/ListImages?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Returns a list of infrastructure configurations.
		 * Post /ListInfrastructureConfigurations
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListInfrastructureConfigurationsResponse} Success
		 */
		ListInfrastructureConfigurations(maxResults: string, nextToken: string, callback: (data : ListInfrastructureConfigurationsResponse) => any, requestBody: ListInfrastructureConfigurationsBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/ListInfrastructureConfigurations?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Returns the list of tags for the specified resource.
		 * Get /tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource whose tags you want to retrieve. 
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string, callback: (data : ListTagsForResourceResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Adds a tag to a resource.
		 * Post /tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource that you want to tag. 
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, callback: (data : TagResourceResponse) => any, requestBody: TagResourceBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Applies a policy to a component. We recommend that you call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a> to share resources. If you call the Image Builder API <code>PutComponentPolicy</code>, you must also call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> in order for the resource to be visible to all principals with whom the resource is shared.
		 * Put /PutComponentPolicy
		 * @return {PutComponentPolicyResponse} Success
		 */
		PutComponentPolicy(callback: (data : PutComponentPolicyResponse) => any, requestBody: PutComponentPolicyBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.put(this.baseUri + '/PutComponentPolicy', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Applies a policy to an image. We recommend that you call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a> to share resources. If you call the Image Builder API <code>PutImagePolicy</code>, you must also call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> in order for the resource to be visible to all principals with whom the resource is shared.
		 * Put /PutImagePolicy
		 * @return {PutImagePolicyResponse} Success
		 */
		PutImagePolicy(callback: (data : PutImagePolicyResponse) => any, requestBody: PutImagePolicyBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.put(this.baseUri + '/PutImagePolicy', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Applies a policy to an image recipe. We recommend that you call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a> to share resources. If you call the Image Builder API <code>PutImageRecipePolicy</code>, you must also call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> in order for the resource to be visible to all principals with whom the resource is shared.
		 * Put /PutImageRecipePolicy
		 * @return {PutImageRecipePolicyResponse} Success
		 */
		PutImageRecipePolicy(callback: (data : PutImageRecipePolicyResponse) => any, requestBody: PutImageRecipePolicyBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.put(this.baseUri + '/PutImageRecipePolicy', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Manually triggers a pipeline to create an image.
		 * Put /StartImagePipelineExecution
		 * @return {StartImagePipelineExecutionResponse} Success
		 */
		StartImagePipelineExecution(callback: (data : StartImagePipelineExecutionResponse) => any, requestBody: StartImagePipelineExecutionBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.put(this.baseUri + '/StartImagePipelineExecution', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Removes a tag from a resource.
		 * Delete /tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource that you want to untag. 
		 * @param {Array<TagKey>} tagKeys The tag keys to remove from the resource. 
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<TagKey>, callback: (data : UntagResourceResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + '/tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${z}`).join('&'), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Updates a new distribution configuration. Distribution configurations define and configure the outputs of your pipeline.
		 * Put /UpdateDistributionConfiguration
		 * @return {UpdateDistributionConfigurationResponse} Success
		 */
		UpdateDistributionConfiguration(callback: (data : UpdateDistributionConfigurationResponse) => any, requestBody: UpdateDistributionConfigurationBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.put(this.baseUri + '/UpdateDistributionConfiguration', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Updates a new image pipeline. Image pipelines enable you to automate the creation and distribution of images.
		 * Put /UpdateImagePipeline
		 * @return {UpdateImagePipelineResponse} Success
		 */
		UpdateImagePipeline(callback: (data : UpdateImagePipelineResponse) => any, requestBody: UpdateImagePipelineBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.put(this.baseUri + '/UpdateImagePipeline', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Updates a new infrastructure configuration. An infrastructure configuration defines the environment in which your image will be built and tested.
		 * Put /UpdateInfrastructureConfiguration
		 * @return {UpdateInfrastructureConfigurationResponse} Success
		 */
		UpdateInfrastructureConfiguration(callback: (data : UpdateInfrastructureConfigurationResponse) => any, requestBody: UpdateInfrastructureConfigurationBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.put(this.baseUri + '/UpdateInfrastructureConfiguration', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}
	}

	export interface CancelImageCreationBody {

		/**
		 * The Amazon Resource Name (ARN) of the image whose creation you want to cancel.
		 * Pattern: ^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):image/[a-z0-9-_]+/\d+\.\d+\.\d+/\d+$
		 */
		imageBuildVersionArn: string;

		/**
		 * The idempotency token used to make this request idempotent.
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: string;
	}

	export interface CreateComponentBody {

		/**
		 * The name of the component.
		 * Pattern: ^[-_A-Za-z-0-9][-_A-Za-z0-9 ]{1,126}[-_A-Za-z-0-9]$
		 */
		name: string;

		/**
		 * The semantic version of the component. This version follows the semantic version syntax. For example, major.minor.patch. This could be versioned like software (2.0.1) or like a date (2019.12.01).
		 * Pattern: ^[0-9]+\.[0-9]+\.[0-9]+$
		 */
		semanticVersion: string;

		/**
		 * The description of the component. Describes the contents of the component.
		 * Max length: 1024
		 * Min length: 1
		 */
		description?: string;

		/**
		 * The change description of the component. Describes what change has been made in this version, or what makes this version different from other versions of this component.
		 * Max length: 1024
		 * Min length: 1
		 */
		changeDescription?: string;

		/**The platform of the component. */
		platform: CreateComponentBodyPlatform;

		/**
		 * The operating system (OS) version supported by the component. If the OS information is available, a prefix match is performed against the parent image OS version during image recipe creation.
		 * Minimum items: 1
		 * Maximum items: 25
		 */
		supportedOsVersions?: Array<OsVersion>;

		/**
		 * The data of the component. Used to specify the data inline. Either <code>data</code> or <code>uri</code> can be used to specify the data within the component.
		 * Max length: 16000
		 * Min length: 1
		 */
		data?: string;

		/**The uri of the component. Must be an S3 URL and the requester must have permission to access the S3 bucket. If you use S3, you can specify component content up to your service quota. Either <code>data</code> or <code>uri</code> can be used to specify the data within the component. */
		uri?: string;

		/**
		 * The ID of the KMS key that should be used to encrypt this component.
		 * Max length: 1024
		 * Min length: 1
		 */
		kmsKeyId?: string;

		/**The tags of the component. */
		tags?: string;

		/**
		 * The idempotency token of the component.
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: string;
	}

	export enum CreateComponentBodyPlatform { Windows = 0, Linux = 1 }

	export interface CreateDistributionConfigurationBody {

		/**
		 * The name of the distribution configuration.
		 * Pattern: ^[-_A-Za-z-0-9][-_A-Za-z0-9 ]{1,126}[-_A-Za-z-0-9]$
		 */
		name: string;

		/**
		 * The description of the distribution configuration.
		 * Max length: 1024
		 * Min length: 1
		 */
		description?: string;

		/**The distributions of the distribution configuration. */
		distributions: Array<Distribution>;

		/**The tags of the distribution configuration. */
		tags?: string;

		/**
		 * The idempotency token of the distribution configuration.
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: string;
	}

	export interface CreateImageBody {

		/**
		 * The Amazon Resource Name (ARN) of the image recipe that defines how images are configured, tested, and assessed.
		 * Pattern: ^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):image-recipe/[a-z0-9-_]+/\d+\.\d+\.\d+$
		 */
		imageRecipeArn: string;

		/**
		 * The Amazon Resource Name (ARN) of the distribution configuration that defines and configures the outputs of your pipeline.
		 * Pattern: ^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):distribution-configuration/[a-z0-9-_]+$
		 */
		distributionConfigurationArn?: string;

		/**
		 * The Amazon Resource Name (ARN) of the infrastructure configuration that defines the environment in which your image will be built and tested.
		 * Pattern: ^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):infrastructure-configuration/[a-z0-9-_]+$
		 */
		infrastructureConfigurationArn: string;

		/**Image tests configuration. */
		imageTestsConfiguration?: string;

		/**Collects additional information about the image being created, including the operating system (OS) version and package list. This information is used to enhance the overall experience of using EC2 Image Builder. Enabled by default. */
		enhancedImageMetadataEnabled?: boolean;

		/**The tags of the image. */
		tags?: string;

		/**
		 * The idempotency token used to make this request idempotent.
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: string;
	}

	export interface CreateImagePipelineBody {

		/**
		 * The name of the image pipeline.
		 * Pattern: ^[-_A-Za-z-0-9][-_A-Za-z0-9 ]{1,126}[-_A-Za-z-0-9]$
		 */
		name: string;

		/**
		 * The description of the image pipeline.
		 * Max length: 1024
		 * Min length: 1
		 */
		description?: string;

		/**
		 * The Amazon Resource Name (ARN) of the image recipe that will be used to configure images created by this image pipeline.
		 * Pattern: ^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):image-recipe/[a-z0-9-_]+/\d+\.\d+\.\d+$
		 */
		imageRecipeArn: string;

		/**
		 * The Amazon Resource Name (ARN) of the infrastructure configuration that will be used to build images created by this image pipeline.
		 * Pattern: ^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):infrastructure-configuration/[a-z0-9-_]+$
		 */
		infrastructureConfigurationArn: string;

		/**
		 * The Amazon Resource Name (ARN) of the distribution configuration that will be used to configure and distribute images created by this image pipeline.
		 * Pattern: ^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):distribution-configuration/[a-z0-9-_]+$
		 */
		distributionConfigurationArn?: string;

		/**Image tests configuration. */
		imageTestsConfiguration?: string;

		/**Collects additional information about the image being created, including the operating system (OS) version and package list. This information is used to enhance the overall experience of using EC2 Image Builder. Enabled by default. */
		enhancedImageMetadataEnabled?: boolean;

		/**A schedule configures how often and when a pipeline will automatically create a new image. */
		schedule?: string;

		/**The status of the image pipeline. */
		status?: CreateImagePipelineBodyStatus;

		/**The tags of the image pipeline. */
		tags?: string;

		/**
		 * The idempotency token used to make this request idempotent.
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: string;
	}

	export enum CreateImagePipelineBodyStatus { DISABLED = 0, ENABLED = 1 }

	export interface CreateImageRecipeBody {

		/**
		 * The name of the image recipe.
		 * Pattern: ^[-_A-Za-z-0-9][-_A-Za-z0-9 ]{1,126}[-_A-Za-z-0-9]$
		 */
		name: string;

		/**
		 * The description of the image recipe.
		 * Max length: 1024
		 * Min length: 1
		 */
		description?: string;

		/**
		 * The semantic version of the image recipe.
		 * Pattern: ^[0-9]+\.[0-9]+\.[0-9]+$
		 */
		semanticVersion: string;

		/**
		 * The components of the image recipe.
		 * Minimum items: 1
		 */
		components: Array<ComponentConfiguration>;

		/**
		 * The parent image of the image recipe. The value of the string can be the ARN of the parent image or an AMI ID. The format for the ARN follows this example: <code>arn:aws:imagebuilder:us-west-2:aws:image/windows-server-2016-english-full-base-x86/2019.x.x</code>. The ARN ends with <code>/20xx.x.x</code>, which communicates to EC2 Image Builder that you want to use the latest AMI created in 20xx (year). You can provide the specific version that you want to use, or you can use a wildcard in all of the fields. If you enter an AMI ID for the string value, you must have access to the AMI, and the AMI must be in the same Region in which you are using Image Builder.
		 * Max length: 1024
		 * Min length: 1
		 */
		parentImage: string;

		/**The block device mappings of the image recipe. */
		blockDeviceMappings?: Array<InstanceBlockDeviceMapping>;

		/**The tags of the image recipe. */
		tags?: string;

		/**
		 * The idempotency token used to make this request idempotent.
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: string;
	}

	export interface CreateInfrastructureConfigurationBody {

		/**
		 * The name of the infrastructure configuration.
		 * Pattern: ^[-_A-Za-z-0-9][-_A-Za-z0-9 ]{1,126}[-_A-Za-z-0-9]$
		 */
		name: string;

		/**
		 * The description of the infrastructure configuration.
		 * Max length: 1024
		 * Min length: 1
		 */
		description?: string;

		/**The instance types of the infrastructure configuration. You can specify one or more instance types to use for this build. The service will pick one of these instance types based on availability. */
		instanceTypes?: Array<InstanceType>;

		/**
		 * The instance profile to associate with the instance used to customize your EC2 AMI.
		 * Max length: 1024
		 * Min length: 1
		 */
		instanceProfileName: string;

		/**The security group IDs to associate with the instance used to customize your EC2 AMI. */
		securityGroupIds?: Array<NonEmptyString>;

		/**
		 * The subnet ID in which to place the instance used to customize your EC2 AMI.
		 * Max length: 1024
		 * Min length: 1
		 */
		subnetId?: string;

		/**Logging configuration defines where Image Builder uploads your logs. */
		logging?: string;

		/**
		 * The key pair of the infrastructure configuration. This can be used to log on to and debug the instance used to create your image.
		 * Max length: 1024
		 * Min length: 1
		 */
		keyPair?: string;

		/**The terminate instance on failure setting of the infrastructure configuration. Set to false if you want Image Builder to retain the instance used to configure your AMI if the build or test phase of your workflow fails. */
		terminateInstanceOnFailure?: boolean;

		/**
		 * The SNS topic on which to send image build events.
		 * Pattern: ^arn:aws[^:]*:sns:[^:]+:\d{12}:[a-zA-Z0-9-_]{1,256}$
		 */
		snsTopicArn?: string;

		/**The tags of the infrastructure configuration. */
		tags?: string;

		/**
		 * The idempotency token used to make this request idempotent.
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: string;
	}

	export interface ImportComponentBody {

		/**
		 * The name of the component.
		 * Pattern: ^[-_A-Za-z-0-9][-_A-Za-z0-9 ]{1,126}[-_A-Za-z-0-9]$
		 */
		name: string;

		/**
		 * The semantic version of the component. This version follows the semantic version syntax. For example, major.minor.patch. This could be versioned like software (2.0.1) or like a date (2019.12.01).
		 * Pattern: ^[0-9]+\.[0-9]+\.[0-9]+$
		 */
		semanticVersion: string;

		/**
		 * The description of the component. Describes the contents of the component.
		 * Max length: 1024
		 * Min length: 1
		 */
		description?: string;

		/**
		 * The change description of the component. Describes what change has been made in this version, or what makes this version different from other versions of this component.
		 * Max length: 1024
		 * Min length: 1
		 */
		changeDescription?: string;

		/**The type of the component denotes whether the component is used to build the image or only to test it. */
		type: ImportComponentBodyType;

		/**The format of the resource that you want to import as a component. */
		format: ImportComponentBodyFormat;

		/**The platform of the component. */
		platform: ImportComponentBodyPlatform;

		/**
		 * The data of the component. Used to specify the data inline. Either <code>data</code> or <code>uri</code> can be used to specify the data within the component.
		 * Max length: 1024
		 * Min length: 1
		 */
		data?: string;

		/**The uri of the component. Must be an S3 URL and the requester must have permission to access the S3 bucket. If you use S3, you can specify component content up to your service quota. Either <code>data</code> or <code>uri</code> can be used to specify the data within the component. */
		uri?: string;

		/**
		 * The ID of the KMS key that should be used to encrypt this component.
		 * Max length: 1024
		 * Min length: 1
		 */
		kmsKeyId?: string;

		/**The tags of the component. */
		tags?: string;

		/**
		 * The idempotency token of the component.
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: string;
	}

	export enum ImportComponentBodyType { BUILD = 0, TEST = 1 }

	export enum ImportComponentBodyFormat { SHELL = 0 }

	export enum ImportComponentBodyPlatform { Windows = 0, Linux = 1 }

	export interface ListComponentBuildVersionsBody {

		/**
		 * The component version Amazon Resource Name (ARN) whose versions you want to list.
		 * Pattern: ^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):component/[a-z0-9-_]+/\d+\.\d+\.\d+$
		 */
		componentVersionArn: string;

		/**
		 * The maximum items to return in a request.
		 * Minimum: 1
		 * Maximum: 25
		 */
		maxResults?: number;

		/**
		 * A token to specify where to start paginating. This is the NextToken from a previously truncated response.
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken?: string;
	}

	export interface ListComponentsBody {

		/**The owner defines which components you want to list. By default, this request will only show components owned by your account. You can use this field to specify if you want to view components owned by yourself, by Amazon, or those components that have been shared with you by other customers. */
		owner?: ListComponentsBodyOwner;

		/**
		 * The filters.
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		filters?: Array<Filter>;

		/**
		 * The maximum items to return in a request.
		 * Minimum: 1
		 * Maximum: 25
		 */
		maxResults?: number;

		/**
		 * A token to specify where to start paginating. This is the NextToken from a previously truncated response.
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken?: string;
	}

	export enum ListComponentsBodyOwner { Self = 0, Shared = 1, Amazon = 2 }

	export interface ListDistributionConfigurationsBody {

		/**
		 * The filters.
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		filters?: Array<Filter>;

		/**
		 * The maximum items to return in a request.
		 * Minimum: 1
		 * Maximum: 25
		 */
		maxResults?: number;

		/**
		 * A token to specify where to start paginating. This is the NextToken from a previously truncated response.
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken?: string;
	}

	export interface ListImageBuildVersionsBody {

		/**
		 * The Amazon Resource Name (ARN) of the image whose build versions you want to retrieve.
		 * Pattern: ^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):image/[a-z0-9-_]+/\d+\.\d+\.\d+$
		 */
		imageVersionArn: string;

		/**
		 * The filters.
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		filters?: Array<Filter>;

		/**
		 * The maximum items to return in a request.
		 * Minimum: 1
		 * Maximum: 25
		 */
		maxResults?: number;

		/**
		 * A token to specify where to start paginating. This is the NextToken from a previously truncated response.
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken?: string;
	}

	export interface ListImagePipelineImagesBody {

		/**
		 * The Amazon Resource Name (ARN) of the image pipeline whose images you want to view.
		 * Pattern: ^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):image-pipeline/[a-z0-9-_]+$
		 */
		imagePipelineArn: string;

		/**
		 * The filters.
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		filters?: Array<Filter>;

		/**
		 * The maximum items to return in a request.
		 * Minimum: 1
		 * Maximum: 25
		 */
		maxResults?: number;

		/**
		 * A token to specify where to start paginating. This is the NextToken from a previously truncated response.
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken?: string;
	}

	export interface ListImagePipelinesBody {

		/**
		 * The filters.
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		filters?: Array<Filter>;

		/**
		 * The maximum items to return in a request.
		 * Minimum: 1
		 * Maximum: 25
		 */
		maxResults?: number;

		/**
		 * A token to specify where to start paginating. This is the NextToken from a previously truncated response.
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken?: string;
	}

	export interface ListImageRecipesBody {

		/**The owner defines which image recipes you want to list. By default, this request will only show image recipes owned by your account. You can use this field to specify if you want to view image recipes owned by yourself, by Amazon, or those image recipes that have been shared with you by other customers. */
		owner?: ListImageRecipesBodyOwner;

		/**
		 * The filters.
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		filters?: Array<Filter>;

		/**
		 * The maximum items to return in a request.
		 * Minimum: 1
		 * Maximum: 25
		 */
		maxResults?: number;

		/**
		 * A token to specify where to start paginating. This is the NextToken from a previously truncated response.
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken?: string;
	}

	export enum ListImageRecipesBodyOwner { Self = 0, Shared = 1, Amazon = 2 }

	export interface ListImagesBody {

		/**The owner defines which images you want to list. By default, this request will only show images owned by your account. You can use this field to specify if you want to view images owned by yourself, by Amazon, or those images that have been shared with you by other customers. */
		owner?: ListImagesBodyOwner;

		/**
		 * The filters.
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		filters?: Array<Filter>;

		/**
		 * The maximum items to return in a request.
		 * Minimum: 1
		 * Maximum: 25
		 */
		maxResults?: number;

		/**
		 * A token to specify where to start paginating. This is the NextToken from a previously truncated response.
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken?: string;
	}

	export enum ListImagesBodyOwner { Self = 0, Shared = 1, Amazon = 2 }

	export interface ListInfrastructureConfigurationsBody {

		/**
		 * The filters.
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		filters?: Array<Filter>;

		/**
		 * The maximum items to return in a request.
		 * Minimum: 1
		 * Maximum: 25
		 */
		maxResults?: number;

		/**
		 * A token to specify where to start paginating. This is the NextToken from a previously truncated response.
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken?: string;
	}

	export interface TagResourceBody {

		/**The tags to apply to the resource. */
		tags: string;
	}

	export interface PutComponentPolicyBody {

		/**
		 * The Amazon Resource Name (ARN) of the component that this policy should be applied to.
		 * Pattern: ^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):component/[a-z0-9-_]+/\d+\.\d+\.\d+/\d+$
		 */
		componentArn: string;

		/**
		 * The policy to apply.
		 * Max length: 30000
		 * Min length: 1
		 */
		policy: string;
	}

	export interface PutImagePolicyBody {

		/**
		 * The Amazon Resource Name (ARN) of the image that this policy should be applied to.
		 * Pattern: ^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):image/[a-z0-9-_]+/\d+\.\d+\.\d+/\d+$
		 */
		imageArn: string;

		/**
		 * The policy to apply.
		 * Max length: 30000
		 * Min length: 1
		 */
		policy: string;
	}

	export interface PutImageRecipePolicyBody {

		/**
		 * The Amazon Resource Name (ARN) of the image recipe that this policy should be applied to.
		 * Pattern: ^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):image-recipe/[a-z0-9-_]+/\d+\.\d+\.\d+$
		 */
		imageRecipeArn: string;

		/**
		 * The policy to apply.
		 * Max length: 30000
		 * Min length: 1
		 */
		policy: string;
	}

	export interface StartImagePipelineExecutionBody {

		/**
		 * The Amazon Resource Name (ARN) of the image pipeline that you want to manually invoke.
		 * Pattern: ^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):image-pipeline/[a-z0-9-_]+$
		 */
		imagePipelineArn: string;

		/**
		 * The idempotency token used to make this request idempotent.
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: string;
	}

	export interface UpdateDistributionConfigurationBody {

		/**
		 * The Amazon Resource Name (ARN) of the distribution configuration that you want to update.
		 * Pattern: ^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):distribution-configuration/[a-z0-9-_]+$
		 */
		distributionConfigurationArn: string;

		/**
		 * The description of the distribution configuration.
		 * Max length: 1024
		 * Min length: 1
		 */
		description?: string;

		/**The distributions of the distribution configuration. */
		distributions: Array<Distribution>;

		/**
		 * The idempotency token of the distribution configuration.
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: string;
	}

	export interface UpdateImagePipelineBody {

		/**
		 * The Amazon Resource Name (ARN) of the image pipeline that you want to update.
		 * Pattern: ^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):image-pipeline/[a-z0-9-_]+$
		 */
		imagePipelineArn: string;

		/**
		 * The description of the image pipeline.
		 * Max length: 1024
		 * Min length: 1
		 */
		description?: string;

		/**
		 * The Amazon Resource Name (ARN) of the image recipe that will be used to configure images updated by this image pipeline.
		 * Pattern: ^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):image-recipe/[a-z0-9-_]+/\d+\.\d+\.\d+$
		 */
		imageRecipeArn: string;

		/**
		 * The Amazon Resource Name (ARN) of the infrastructure configuration that will be used to build images updated by this image pipeline.
		 * Pattern: ^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):infrastructure-configuration/[a-z0-9-_]+$
		 */
		infrastructureConfigurationArn: string;

		/**
		 * The Amazon Resource Name (ARN) of the distribution configuration that will be used to configure and distribute images updated by this image pipeline.
		 * Pattern: ^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):distribution-configuration/[a-z0-9-_]+$
		 */
		distributionConfigurationArn?: string;

		/**Image tests configuration. */
		imageTestsConfiguration?: string;

		/**Collects additional information about the image being created, including the operating system (OS) version and package list. This information is used to enhance the overall experience of using EC2 Image Builder. Enabled by default. */
		enhancedImageMetadataEnabled?: boolean;

		/**A schedule configures how often and when a pipeline will automatically create a new image. */
		schedule?: string;

		/**The status of the image pipeline. */
		status?: UpdateImagePipelineBodyStatus;

		/**
		 * The idempotency token used to make this request idempotent.
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: string;
	}

	export enum UpdateImagePipelineBodyStatus { DISABLED = 0, ENABLED = 1 }

	export interface UpdateInfrastructureConfigurationBody {

		/**
		 * The Amazon Resource Name (ARN) of the infrastructure configuration that you want to update.
		 * Pattern: ^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):infrastructure-configuration/[a-z0-9-_]+$
		 */
		infrastructureConfigurationArn: string;

		/**
		 * The description of the infrastructure configuration.
		 * Max length: 1024
		 * Min length: 1
		 */
		description?: string;

		/**The instance types of the infrastructure configuration. You can specify one or more instance types to use for this build. The service will pick one of these instance types based on availability. */
		instanceTypes?: Array<InstanceType>;

		/**
		 * The instance profile to associate with the instance used to customize your EC2 AMI.
		 * Max length: 1024
		 * Min length: 1
		 */
		instanceProfileName: string;

		/**The security group IDs to associate with the instance used to customize your EC2 AMI. */
		securityGroupIds?: Array<NonEmptyString>;

		/**
		 * The subnet ID to place the instance used to customize your EC2 AMI in.
		 * Max length: 1024
		 * Min length: 1
		 */
		subnetId?: string;

		/**Logging configuration defines where Image Builder uploads your logs. */
		logging?: string;

		/**
		 * The key pair of the infrastructure configuration. This can be used to log on to and debug the instance used to create your image.
		 * Max length: 1024
		 * Min length: 1
		 */
		keyPair?: string;

		/**The terminate instance on failure setting of the infrastructure configuration. Set to false if you want Image Builder to retain the instance used to configure your AMI if the build or test phase of your workflow fails. */
		terminateInstanceOnFailure?: boolean;

		/**
		 * The SNS topic on which to send image build events.
		 * Pattern: ^arn:aws[^:]*:sns:[^:]+:\d{12}:[a-zA-Z0-9-_]{1,256}$
		 */
		snsTopicArn?: string;

		/**
		 * The idempotency token used to make this request idempotent.
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: string;
	}

}

