///<reference path="HttpClient.ts" />
namespace My_Demo_Client {

	/**The CreateJobResponse structure. */
	export interface CreateJobResponse {

		/**A section of the response body that provides information about the job that is created. */
		Job?: Job;
	}


	/**The encryption settings, if any, that are used for decrypting your input files or encrypting your output files. If your input file is encrypted, you must specify the mode that Elastic Transcoder uses to decrypt your file, otherwise you must specify the mode you want Elastic Transcoder to use to encrypt your output files. */
	export interface Encryption {
		Mode?: string;
		Key?: string;
		KeyMd5?: string;
		InitializationVector?: string;
	}


	/**Settings that determine when a clip begins and how long it lasts. */
	export interface TimeSpan {
		StartTime?: string;
		Duration?: string;
	}


	/**The captions to be created, if any. */
	export interface InputCaptions {
		MergePolicy?: string;
		CaptionSources?: Array<CaptionSource>;
	}


	/**The detected properties of the input file. Elastic Transcoder identifies these values from the input file. */
	export interface DetectedProperties {
		Width?: number;
		Height?: number;
		FrameRate?: string;
		FileSize?: number;
		DurationMillis?: number;
	}


	/**Information about the file that you're transcoding. */
	export interface JobInput {
		Key?: string;
		FrameRate?: string;
		Resolution?: string;
		AspectRatio?: string;
		Interlaced?: string;
		Container?: string;

		/**The encryption settings, if any, that are used for decrypting your input files or encrypting your output files. If your input file is encrypted, you must specify the mode that Elastic Transcoder uses to decrypt your file, otherwise you must specify the mode you want Elastic Transcoder to use to encrypt your output files. */
		Encryption?: Encryption;

		/**Settings that determine when a clip begins and how long it lasts. */
		TimeSpan?: TimeSpan;

		/**The captions to be created, if any. */
		InputCaptions?: InputCaptions;

		/**The detected properties of the input file. Elastic Transcoder identifies these values from the input file. */
		DetectedProperties?: DetectedProperties;
	}


	/**The .jpg or .png file associated with an audio file. */
	export interface JobAlbumArt {
		MergePolicy?: string;
		Artwork?: Array<Artwork>;
	}


	/**The captions to be created, if any. */
	export interface Captions {
		MergePolicy?: string;
		CaptionSources?: Array<CaptionSource>;
		CaptionFormats?: Array<CaptionFormat>;
	}


	/**The <code>CreateJobOutput</code> structure. */
	export interface CreateJobOutput {
		Key?: string;
		ThumbnailPattern?: string;

		/**The encryption settings, if any, that are used for decrypting your input files or encrypting your output files. If your input file is encrypted, you must specify the mode that Elastic Transcoder uses to decrypt your file, otherwise you must specify the mode you want Elastic Transcoder to use to encrypt your output files. */
		ThumbnailEncryption?: Encryption;
		Rotate?: string;
		PresetId?: string;
		SegmentDuration?: string;
		Watermarks?: Array<JobWatermark>;

		/**The .jpg or .png file associated with an audio file. */
		AlbumArt?: JobAlbumArt;
		Composition?: Array<Clip>;

		/**The captions to be created, if any. */
		Captions?: Captions;

		/**The encryption settings, if any, that are used for decrypting your input files or encrypting your output files. If your input file is encrypted, you must specify the mode that Elastic Transcoder uses to decrypt your file, otherwise you must specify the mode you want Elastic Transcoder to use to encrypt your output files. */
		Encryption?: Encryption;
	}


	/**Information about the master playlist. */
	export interface CreateJobPlaylist {
		Name?: string;
		Format?: string;
		OutputKeys?: Array<Key>;

		/**The HLS content protection settings, if any, that you want Elastic Transcoder to apply to your output files. */
		HlsContentProtection?: HlsContentProtection;

		/**<p>The PlayReady DRM settings, if any, that you want Elastic Transcoder to apply to the output files associated with this playlist.</p> <p>PlayReady DRM encrypts your media files using <code>aes-ctr</code> encryption.</p> <p>If you use DRM for an <code>HLSv3</code> playlist, your outputs must have a master playlist.</p> */
		PlayReadyDrm?: PlayReadyDrm;
	}


	/**When you create a pipeline, Elastic Transcoder returns the values that you specified in the request. */
	export interface CreatePipelineResponse {

		/**The pipeline (queue) that is used to manage jobs. */
		Pipeline?: Pipeline;
		Warnings?: Array<Warning>;
	}


	/**The <code>CreatePresetResponse</code> structure. */
	export interface CreatePresetResponse {

		/**Presets are templates that contain most of the settings for transcoding media files from one format to another. Elastic Transcoder includes some default presets for common formats, for example, several iPod and iPhone versions. You can also create your own presets for formats that aren't included among the default presets. You specify which preset you want to use when you create a job. */
		Preset?: Preset;
		Warning?: string;
	}


	/**Options associated with your audio codec. */
	export interface AudioCodecOptions {
		Profile?: string;
		BitDepth?: string;
		BitOrder?: string;
		Signed?: string;
	}


	/**The <code>ListJobsByPipelineResponse</code> structure. */
	export interface ListJobsByPipelineResponse {
		Jobs?: Array<Job>;
		NextPageToken?: string;
	}


	/** The <code>ListJobsByStatusResponse</code> structure.  */
	export interface ListJobsByStatusResponse {
		Jobs?: Array<Job>;
		NextPageToken?: string;
	}


	/**A list of the pipelines associated with the current AWS account. */
	export interface ListPipelinesResponse {
		Pipelines?: Array<Pipeline>;
		NextPageToken?: string;
	}


	/**The <code>ListPresetsResponse</code> structure. */
	export interface ListPresetsResponse {
		Presets?: Array<Preset>;
		NextPageToken?: string;
	}


	/**The <code>ReadJobResponse</code> structure. */
	export interface ReadJobResponse {

		/**A section of the response body that provides information about the job that is created. */
		Job?: Job;
	}


	/**The <code>ReadPipelineResponse</code> structure. */
	export interface ReadPipelineResponse {

		/**The pipeline (queue) that is used to manage jobs. */
		Pipeline?: Pipeline;
		Warnings?: Array<Warning>;
	}


	/**The <code>ReadPresetResponse</code> structure. */
	export interface ReadPresetResponse {

		/**Presets are templates that contain most of the settings for transcoding media files from one format to another. Elastic Transcoder includes some default presets for common formats, for example, several iPod and iPhone versions. You can also create your own presets for formats that aren't included among the default presets. You specify which preset you want to use when you create a job. */
		Preset?: Preset;
	}


	/**The <code>TestRoleResponse</code> structure. */
	export interface TestRoleResponse {
		Success?: string;
		Messages?: Array<String>;
	}


	/**When you update a pipeline, Elastic Transcoder returns the values that you specified in the request. */
	export interface UpdatePipelineResponse {

		/**The pipeline (queue) that is used to manage jobs. */
		Pipeline?: Pipeline;
		Warnings?: Array<Warning>;
	}


	/**The <code>UpdatePipelineNotificationsResponse</code> structure. */
	export interface UpdatePipelineNotificationsResponse {

		/**The pipeline (queue) that is used to manage jobs. */
		Pipeline?: Pipeline;
	}


	/**When you update status for a pipeline, Elastic Transcoder returns the values that you specified in the request. */
	export interface UpdatePipelineStatusResponse {

		/**The pipeline (queue) that is used to manage jobs. */
		Pipeline?: Pipeline;
	}


	/**<p>The file to be used as album art. There can be multiple artworks associated with an audio file, to a maximum of 20.</p> <p>To remove artwork or leave the artwork empty, you can either set <code>Artwork</code> to null, or set the <code>Merge Policy</code> to "Replace" and use an empty <code>Artwork</code> array.</p> <p>To pass through existing artwork unchanged, set the <code>Merge Policy</code> to "Prepend", "Append", or "Fallback", and use an empty <code>Artwork</code> array.</p> */
	export interface Artwork {
		InputKey?: string;
		MaxWidth?: string;
		MaxHeight?: string;
		SizingPolicy?: string;
		PaddingPolicy?: string;
		AlbumArtFormat?: string;

		/**The encryption settings, if any, that are used for decrypting your input files or encrypting your output files. If your input file is encrypted, you must specify the mode that Elastic Transcoder uses to decrypt your file, otherwise you must specify the mode you want Elastic Transcoder to use to encrypt your output files. */
		Encryption?: Encryption;
	}


	/**Parameters required for transcoding audio. */
	export interface AudioParameters {
		Codec?: string;
		SampleRate?: string;
		BitRate?: string;
		Channels?: string;
		AudioPackingMode?: string;

		/**Options associated with your audio codec. */
		CodecOptions?: AudioCodecOptions;
	}


	/**The file format of the output captions. If you leave this value blank, Elastic Transcoder returns an error. */
	export interface CaptionFormat {
		Format?: string;
		Pattern?: string;

		/**The encryption settings, if any, that are used for decrypting your input files or encrypting your output files. If your input file is encrypted, you must specify the mode that Elastic Transcoder uses to decrypt your file, otherwise you must specify the mode you want Elastic Transcoder to use to encrypt your output files. */
		Encryption?: Encryption;
	}


	/**A source file for the input sidecar captions used during the transcoding process. */
	export interface CaptionSource {
		Key?: string;
		Language?: string;
		TimeOffset?: string;
		Label?: string;

		/**The encryption settings, if any, that are used for decrypting your input files or encrypting your output files. If your input file is encrypted, you must specify the mode that Elastic Transcoder uses to decrypt your file, otherwise you must specify the mode you want Elastic Transcoder to use to encrypt your output files. */
		Encryption?: Encryption;
	}


	/**Settings for one clip in a composition. All jobs in a playlist must have the same clip settings. */
	export interface Clip {

		/**Settings that determine when a clip begins and how long it lasts. */
		TimeSpan?: TimeSpan;
	}


	/**The HLS content protection settings, if any, that you want Elastic Transcoder to apply to your output files. */
	export interface HlsContentProtection {
		Method?: string;
		Key?: string;
		KeyMd5?: string;
		InitializationVector?: string;
		LicenseAcquisitionUrl?: string;
		KeyStoragePolicy?: string;
	}


	/**<p>The PlayReady DRM settings, if any, that you want Elastic Transcoder to apply to the output files associated with this playlist.</p> <p>PlayReady DRM encrypts your media files using <code>aes-ctr</code> encryption.</p> <p>If you use DRM for an <code>HLSv3</code> playlist, your outputs must have a master playlist.</p> */
	export interface PlayReadyDrm {
		Format?: string;
		Key?: string;
		KeyMd5?: string;
		KeyId?: string;
		InitializationVector?: string;
		LicenseAcquisitionUrl?: string;
	}


	/**The <code>CreateJobRequest</code> structure. */
	export interface CreateJobRequest {
		PipelineId: string;

		/**Information about the file that you're transcoding. */
		Input?: JobInput;
		Inputs?: Array<JobInput>;

		/**The <code>CreateJobOutput</code> structure. */
		Output?: CreateJobOutput;
		Outputs?: Array<CreateJobOutput>;
		OutputKeyPrefix?: string;
		Playlists?: Array<CreateJobPlaylist>;
		UserMetadata?: UserMetadata;
	}


	/**A section of the response body that provides information about the job that is created. */
	export interface Job {
		Id?: string;
		Arn?: string;
		PipelineId?: string;

		/**Information about the file that you're transcoding. */
		Input?: JobInput;
		Inputs?: Array<JobInput>;

		/**<important> <p>Outputs recommended instead.</p> </important> <p>If you specified one output for a job, information about that output. If you specified multiple outputs for a job, the <code>Output</code> object lists information about the first output. This duplicates the information that is listed for the first output in the <code>Outputs</code> object.</p> */
		Output?: JobOutput;
		Outputs?: Array<JobOutput>;
		OutputKeyPrefix?: string;
		Playlists?: Array<Playlist>;
		Status?: string;
		UserMetadata?: UserMetadata;

		/**Details about the timing of a job. */
		Timing?: Timing;
	}


	/**<p>The Amazon Simple Notification Service (Amazon SNS) topic or topics to notify in order to report job status.</p> <important> <p>To receive notifications, you must also subscribe to the new topic in the Amazon SNS console.</p> </important> */
	export interface Notifications {
		Progressing?: string;
		Completed?: string;
		Warning?: string;
		Error?: string;
	}


	/**The <code>PipelineOutputConfig</code> structure. */
	export interface PipelineOutputConfig {
		Bucket?: string;
		StorageClass?: string;
		Permissions?: Array<Permission>;
	}


	/**The <code>CreatePipelineRequest</code> structure. */
	export interface CreatePipelineRequest {
		Name: string;
		InputBucket: string;
		OutputBucket?: string;
		Role: string;
		AwsKmsKeyArn?: string;

		/**<p>The Amazon Simple Notification Service (Amazon SNS) topic or topics to notify in order to report job status.</p> <important> <p>To receive notifications, you must also subscribe to the new topic in the Amazon SNS console.</p> </important> */
		Notifications?: Notifications;

		/**The <code>PipelineOutputConfig</code> structure. */
		ContentConfig?: PipelineOutputConfig;

		/**The <code>PipelineOutputConfig</code> structure. */
		ThumbnailConfig?: PipelineOutputConfig;
	}


	/**The pipeline (queue) that is used to manage jobs. */
	export interface Pipeline {
		Id?: string;
		Arn?: string;
		Name?: string;
		Status?: string;
		InputBucket?: string;
		OutputBucket?: string;
		Role?: string;
		AwsKmsKeyArn?: string;

		/**<p>The Amazon Simple Notification Service (Amazon SNS) topic or topics to notify in order to report job status.</p> <important> <p>To receive notifications, you must also subscribe to the new topic in the Amazon SNS console.</p> </important> */
		Notifications?: Notifications;

		/**The <code>PipelineOutputConfig</code> structure. */
		ContentConfig?: PipelineOutputConfig;

		/**The <code>PipelineOutputConfig</code> structure. */
		ThumbnailConfig?: PipelineOutputConfig;
	}


	/**The <code>VideoParameters</code> structure. */
	export interface VideoParameters {
		Codec?: string;
		CodecOptions?: CodecOptions;
		KeyframesMaxDist?: string;
		FixedGOP?: string;
		BitRate?: string;
		FrameRate?: string;
		MaxFrameRate?: string;
		Resolution?: string;
		AspectRatio?: string;
		MaxWidth?: string;
		MaxHeight?: string;
		DisplayAspectRatio?: string;
		SizingPolicy?: string;
		PaddingPolicy?: string;
		Watermarks?: Array<PresetWatermark>;
	}


	/**Thumbnails for videos. */
	export interface Thumbnails {
		Format?: string;
		Interval?: string;
		Resolution?: string;
		AspectRatio?: string;
		MaxWidth?: string;
		MaxHeight?: string;
		SizingPolicy?: string;
		PaddingPolicy?: string;
	}


	/**The <code>CreatePresetRequest</code> structure. */
	export interface CreatePresetRequest {
		Name: string;
		Description?: string;
		Container: string;

		/**The <code>VideoParameters</code> structure. */
		Video?: VideoParameters;

		/**Parameters required for transcoding audio. */
		Audio?: AudioParameters;

		/**Thumbnails for videos. */
		Thumbnails?: Thumbnails;
	}


	/**Presets are templates that contain most of the settings for transcoding media files from one format to another. Elastic Transcoder includes some default presets for common formats, for example, several iPod and iPhone versions. You can also create your own presets for formats that aren't included among the default presets. You specify which preset you want to use when you create a job. */
	export interface Preset {
		Id?: string;
		Arn?: string;
		Name?: string;
		Description?: string;
		Container?: string;

		/**Parameters required for transcoding audio. */
		Audio?: AudioParameters;

		/**The <code>VideoParameters</code> structure. */
		Video?: VideoParameters;

		/**Thumbnails for videos. */
		Thumbnails?: Thumbnails;
		Type?: string;
	}


	/**<important> <p>Outputs recommended instead.</p> </important> <p>If you specified one output for a job, information about that output. If you specified multiple outputs for a job, the <code>Output</code> object lists information about the first output. This duplicates the information that is listed for the first output in the <code>Outputs</code> object.</p> */
	export interface JobOutput {
		Id?: string;
		Key?: string;
		ThumbnailPattern?: string;

		/**The encryption settings, if any, that are used for decrypting your input files or encrypting your output files. If your input file is encrypted, you must specify the mode that Elastic Transcoder uses to decrypt your file, otherwise you must specify the mode you want Elastic Transcoder to use to encrypt your output files. */
		ThumbnailEncryption?: Encryption;
		Rotate?: string;
		PresetId?: string;
		SegmentDuration?: string;
		Status?: string;
		StatusDetail?: string;
		Duration?: number;
		Width?: number;
		Height?: number;
		FrameRate?: string;
		FileSize?: number;
		DurationMillis?: number;
		Watermarks?: Array<JobWatermark>;

		/**The .jpg or .png file associated with an audio file. */
		AlbumArt?: JobAlbumArt;
		Composition?: Array<Clip>;

		/**The captions to be created, if any. */
		Captions?: Captions;

		/**The encryption settings, if any, that are used for decrypting your input files or encrypting your output files. If your input file is encrypted, you must specify the mode that Elastic Transcoder uses to decrypt your file, otherwise you must specify the mode you want Elastic Transcoder to use to encrypt your output files. */
		Encryption?: Encryption;
		AppliedColorSpaceConversion?: string;
	}


	/**Details about the timing of a job. */
	export interface Timing {
		SubmitTimeMillis?: number;
		StartTimeMillis?: number;
		FinishTimeMillis?: number;
	}


	/**Watermarks can be in .png or .jpg format. If you want to display a watermark that is not rectangular, use the .png format, which supports transparency. */
	export interface JobWatermark {
		PresetWatermarkId?: string;
		InputKey?: string;

		/**The encryption settings, if any, that are used for decrypting your input files or encrypting your output files. If your input file is encrypted, you must specify the mode that Elastic Transcoder uses to decrypt your file, otherwise you must specify the mode you want Elastic Transcoder to use to encrypt your output files. */
		Encryption?: Encryption;
	}


	/**The <code>Permission</code> structure. */
	export interface Permission {
		GranteeType?: string;
		Grantee?: string;
		Access?: Array<AccessControl>;
	}


	/** Use Only for Fragmented MP4 or MPEG-TS Outputs. If you specify a preset for which the value of Container is <code>fmp4</code> (Fragmented MP4) or <code>ts</code> (MPEG-TS), Playlists contains information about the master playlists that you want Elastic Transcoder to create. We recommend that you create only one master playlist per output format. The maximum number of master playlists in a job is 30.  */
	export interface Playlist {
		Name?: string;
		Format?: string;
		OutputKeys?: Array<Key>;

		/**The HLS content protection settings, if any, that you want Elastic Transcoder to apply to your output files. */
		HlsContentProtection?: HlsContentProtection;

		/**<p>The PlayReady DRM settings, if any, that you want Elastic Transcoder to apply to the output files associated with this playlist.</p> <p>PlayReady DRM encrypts your media files using <code>aes-ctr</code> encryption.</p> <p>If you use DRM for an <code>HLSv3</code> playlist, your outputs must have a master playlist.</p> */
		PlayReadyDrm?: PlayReadyDrm;
		Status?: string;
		StatusDetail?: string;
	}


	/**<p>Settings for the size, location, and opacity of graphics that you want Elastic Transcoder to overlay over videos that are transcoded using this preset. You can specify settings for up to four watermarks. Watermarks appear in the specified size and location, and with the specified opacity for the duration of the transcoded video.</p> <p>Watermarks can be in .png or .jpg format. If you want to display a watermark that is not rectangular, use the .png format, which supports transparency.</p> <p>When you create a job that uses this preset, you specify the .png or .jpg graphics that you want Elastic Transcoder to include in the transcoded videos. You can specify fewer graphics in the job than you specify watermark settings in the preset, which allows you to use the same preset for up to four watermarks that have different dimensions.</p> */
	export interface PresetWatermark {
		Id?: string;
		MaxWidth?: string;
		MaxHeight?: string;
		SizingPolicy?: string;
		HorizontalAlign?: string;
		HorizontalOffset?: string;
		VerticalAlign?: string;
		VerticalOffset?: string;
		Opacity?: string;
		Target?: string;
	}


	/** The <code>TestRoleRequest</code> structure.  */
	export interface TestRoleRequest {
		Role: string;
		InputBucket: string;
		OutputBucket: string;
		Topics: Array<SnsTopic>;
	}


	/**The <code>UpdatePipelineNotificationsRequest</code> structure. */
	export interface UpdatePipelineNotificationsRequest {

		/**<p>The Amazon Simple Notification Service (Amazon SNS) topic or topics to notify in order to report job status.</p> <important> <p>To receive notifications, you must also subscribe to the new topic in the Amazon SNS console.</p> </important> */
		Notifications: Notifications;
	}


	/**The <code>UpdatePipelineRequest</code> structure. */
	export interface UpdatePipelineRequest {
		Name?: string;
		InputBucket?: string;
		Role?: string;
		AwsKmsKeyArn?: string;

		/**<p>The Amazon Simple Notification Service (Amazon SNS) topic or topics to notify in order to report job status.</p> <important> <p>To receive notifications, you must also subscribe to the new topic in the Amazon SNS console.</p> </important> */
		Notifications?: Notifications;

		/**The <code>PipelineOutputConfig</code> structure. */
		ContentConfig?: PipelineOutputConfig;

		/**The <code>PipelineOutputConfig</code> structure. */
		ThumbnailConfig?: PipelineOutputConfig;
	}


	/**The <code>UpdatePipelineStatusRequest</code> structure. */
	export interface UpdatePipelineStatusRequest {
		Status: string;
	}


	/**<p>Elastic Transcoder returns a warning if the resources used by your pipeline are not in the same region as the pipeline.</p> <p>Using resources in the same region, such as your Amazon S3 buckets, Amazon SNS notification topics, and AWS KMS key, reduces processing time and prevents cross-regional charges.</p> */
	export interface Warning {
		Code?: string;
		Message?: string;
	}

	export class DemoClient {
		constructor(private baseUri: string = HttpClient.locationOrigin, private httpClient: HttpClientBase = new HttpClient(), private error?: (xhr: JQueryXHR, ajaxOptions: string, thrown: string) => any, private statusCode?: { [key: string]: any; }) {
		}

		/**
		 * <p>The CancelJob operation cancels an unfinished job.</p> <note> <p>You can only cancel a job that has a status of <code>Submitted</code>. To prevent a pipeline from starting to process a job while you're getting the job identifier, use <a>UpdatePipelineStatus</a> to temporarily pause the pipeline.</p> </note>
		 * Delete /2012-09-25/jobs/{Id}
		 * @param {string} Id <p>The identifier of the job that you want to cancel.</p> <p>To get a list of the jobs (including their <code>jobId</code>) that have a status of <code>Submitted</code>, use the <a>ListJobsByStatus</a> API action.</p>
		 * @return {void} 
		 */
		CancelJob(Id: string, callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + '/2012-09-25/jobs/' + (Id == null ? '' : encodeURIComponent(Id)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * The ReadJob operation returns detailed information about a job.
		 * Get /2012-09-25/jobs/{Id}
		 * @param {string} Id The identifier of the job for which you want to get detailed information.
		 * @return {ReadJobResponse} Success
		 */
		ReadJob(Id: string, callback: (data : ReadJobResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/2012-09-25/jobs/' + (Id == null ? '' : encodeURIComponent(Id)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * <p>When you create a job, Elastic Transcoder returns JSON data that includes the values that you specified plus information about the job that is created.</p> <p>If you have specified more than one output for your jobs (for example, one output for the Kindle Fire and another output for the Apple iPhone 4s), you currently must use the Elastic Transcoder API to list the jobs (as opposed to the AWS Console).</p>
		 * Post /2012-09-25/jobs
		 * @return {void} 
		 */
		CreateJob(callback: (data : void) => any, requestBody: CreateJobBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/2012-09-25/jobs', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * The CreatePipeline operation creates a pipeline with settings that you specify.
		 * Post /2012-09-25/pipelines
		 * @return {void} 
		 */
		CreatePipeline(callback: (data : void) => any, requestBody: CreatePipelineBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/2012-09-25/pipelines', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * The ListPipelines operation gets a list of the pipelines associated with the current AWS account.
		 * Get /2012-09-25/pipelines
		 * @param {string} Ascending To list pipelines in chronological order by the date and time that they were created, enter <code>true</code>. To list pipelines in reverse chronological order, enter <code>false</code>.
		 * @param {string} PageToken When Elastic Transcoder returns more than one page of results, use <code>pageToken</code> in subsequent <code>GET</code> requests to get each successive page of results. 
		 * @return {ListPipelinesResponse} Success
		 */
		ListPipelines(Ascending: string, PageToken: string, callback: (data : ListPipelinesResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/2012-09-25/pipelines?Ascending=' + (Ascending == null ? '' : encodeURIComponent(Ascending)) + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * <p>The CreatePreset operation creates a preset with settings that you specify.</p> <important> <p>Elastic Transcoder checks the CreatePreset settings to ensure that they meet Elastic Transcoder requirements and to determine whether they comply with H.264 standards. If your settings are not valid for Elastic Transcoder, Elastic Transcoder returns an HTTP 400 response (<code>ValidationException</code>) and does not create the preset. If the settings are valid for Elastic Transcoder but aren't strictly compliant with the H.264 standard, Elastic Transcoder creates the preset and returns a warning message in the response. This helps you determine whether your settings comply with the H.264 standard while giving you greater flexibility with respect to the video that Elastic Transcoder produces.</p> </important> <p>Elastic Transcoder uses the H.264 video-compression format. For more information, see the International Telecommunication Union publication <i>Recommendation ITU-T H.264: Advanced video coding for generic audiovisual services</i>.</p>
		 * Post /2012-09-25/presets
		 * @return {void} 
		 */
		CreatePreset(callback: (data : void) => any, requestBody: CreatePresetBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/2012-09-25/presets', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * The ListPresets operation gets a list of the default presets included with Elastic Transcoder and the presets that you've added in an AWS region.
		 * Get /2012-09-25/presets
		 * @param {string} Ascending To list presets in chronological order by the date and time that they were created, enter <code>true</code>. To list presets in reverse chronological order, enter <code>false</code>.
		 * @param {string} PageToken When Elastic Transcoder returns more than one page of results, use <code>pageToken</code> in subsequent <code>GET</code> requests to get each successive page of results. 
		 * @return {ListPresetsResponse} Success
		 */
		ListPresets(Ascending: string, PageToken: string, callback: (data : ListPresetsResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/2012-09-25/presets?Ascending=' + (Ascending == null ? '' : encodeURIComponent(Ascending)) + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * <p>The DeletePipeline operation removes a pipeline.</p> <p> You can only delete a pipeline that has never been used or that is not currently in use (doesn't contain any active jobs). If the pipeline is currently in use, <code>DeletePipeline</code> returns an error. </p>
		 * Delete /2012-09-25/pipelines/{Id}
		 * @param {string} Id The identifier of the pipeline that you want to delete.
		 * @return {void} 
		 */
		DeletePipeline(Id: string, callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + '/2012-09-25/pipelines/' + (Id == null ? '' : encodeURIComponent(Id)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * The ReadPipeline operation gets detailed information about a pipeline.
		 * Get /2012-09-25/pipelines/{Id}
		 * @param {string} Id The identifier of the pipeline to read.
		 * @return {ReadPipelineResponse} Success
		 */
		ReadPipeline(Id: string, callback: (data : ReadPipelineResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/2012-09-25/pipelines/' + (Id == null ? '' : encodeURIComponent(Id)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * <p> Use the <code>UpdatePipeline</code> operation to update settings for a pipeline.</p> <important> <p>When you change pipeline settings, your changes take effect immediately. Jobs that you have already submitted and that Elastic Transcoder has not started to process are affected in addition to jobs that you submit after you change settings. </p> </important>
		 * Put /2012-09-25/pipelines/{Id}
		 * @param {string} Id The ID of the pipeline that you want to update.
		 * @return {UpdatePipelineResponse} Success
		 */
		UpdatePipeline(Id: string, callback: (data : UpdatePipelineResponse) => any, requestBody: UpdatePipelineBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.put(this.baseUri + '/2012-09-25/pipelines/' + (Id == null ? '' : encodeURIComponent(Id)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>The DeletePreset operation removes a preset that you've added in an AWS region.</p> <note> <p>You can't delete the default presets that are included with Elastic Transcoder.</p> </note>
		 * Delete /2012-09-25/presets/{Id}
		 * @param {string} Id The identifier of the preset for which you want to get detailed information.
		 * @return {void} 
		 */
		DeletePreset(Id: string, callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + '/2012-09-25/presets/' + (Id == null ? '' : encodeURIComponent(Id)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * The ReadPreset operation gets detailed information about a preset.
		 * Get /2012-09-25/presets/{Id}
		 * @param {string} Id The identifier of the preset for which you want to get detailed information.
		 * @return {ReadPresetResponse} Success
		 */
		ReadPreset(Id: string, callback: (data : ReadPresetResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/2012-09-25/presets/' + (Id == null ? '' : encodeURIComponent(Id)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * <p>The ListJobsByPipeline operation gets a list of the jobs currently in a pipeline.</p> <p>Elastic Transcoder returns all of the jobs currently in the specified pipeline. The response body contains one element for each job that satisfies the search criteria.</p>
		 * Get /2012-09-25/jobsByPipeline/{PipelineId}
		 * @param {string} PipelineId The ID of the pipeline for which you want to get job information.
		 * @param {string} Ascending  To list jobs in chronological order by the date and time that they were submitted, enter <code>true</code>. To list jobs in reverse chronological order, enter <code>false</code>. 
		 * @param {string} PageToken  When Elastic Transcoder returns more than one page of results, use <code>pageToken</code> in subsequent <code>GET</code> requests to get each successive page of results. 
		 * @return {ListJobsByPipelineResponse} Success
		 */
		ListJobsByPipeline(PipelineId: string, Ascending: string, PageToken: string, callback: (data : ListJobsByPipelineResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/2012-09-25/jobsByPipeline/' + (PipelineId == null ? '' : encodeURIComponent(PipelineId)) + '&Ascending=' + (Ascending == null ? '' : encodeURIComponent(Ascending)) + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * The ListJobsByStatus operation gets a list of jobs that have a specified status. The response body contains one element for each job that satisfies the search criteria.
		 * Get /2012-09-25/jobsByStatus/{Status}
		 * @param {string} Status To get information about all of the jobs associated with the current AWS account that have a given status, specify the following status: <code>Submitted</code>, <code>Progressing</code>, <code>Complete</code>, <code>Canceled</code>, or <code>Error</code>.
		 * @param {string} Ascending  To list jobs in chronological order by the date and time that they were submitted, enter <code>true</code>. To list jobs in reverse chronological order, enter <code>false</code>. 
		 * @param {string} PageToken  When Elastic Transcoder returns more than one page of results, use <code>pageToken</code> in subsequent <code>GET</code> requests to get each successive page of results. 
		 * @return {ListJobsByStatusResponse} Success
		 */
		ListJobsByStatus(Status: string, Ascending: string, PageToken: string, callback: (data : ListJobsByStatusResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/2012-09-25/jobsByStatus/' + (Status == null ? '' : encodeURIComponent(Status)) + '&Ascending=' + (Ascending == null ? '' : encodeURIComponent(Ascending)) + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * <p>The TestRole operation tests the IAM role used to create the pipeline.</p> <p>The <code>TestRole</code> action lets you determine whether the IAM role you are using has sufficient permissions to let Elastic Transcoder perform tasks associated with the transcoding process. The action attempts to assume the specified IAM role, checks read access to the input and output buckets, and tries to send a test notification to Amazon SNS topics that you specify.</p>
		 * Post /2012-09-25/roleTests
		 * @return {TestRoleResponse} Success
		 */
		TestRole(callback: (data : TestRoleResponse) => any, requestBody: TestRoleBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/2012-09-25/roleTests', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>With the UpdatePipelineNotifications operation, you can update Amazon Simple Notification Service (Amazon SNS) notifications for a pipeline.</p> <p>When you update notifications for a pipeline, Elastic Transcoder returns the values that you specified in the request.</p>
		 * Post /2012-09-25/pipelines/{Id}/notifications
		 * @param {string} Id The identifier of the pipeline for which you want to change notification settings.
		 * @return {UpdatePipelineNotificationsResponse} Success
		 */
		UpdatePipelineNotifications(Id: string, callback: (data : UpdatePipelineNotificationsResponse) => any, requestBody: UpdatePipelineNotificationsBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/2012-09-25/pipelines/' + (Id == null ? '' : encodeURIComponent(Id)) + '/notifications', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>The UpdatePipelineStatus operation pauses or reactivates a pipeline, so that the pipeline stops or restarts the processing of jobs.</p> <p>Changing the pipeline status is useful if you want to cancel one or more jobs. You can't cancel jobs after Elastic Transcoder has started processing them; if you pause the pipeline to which you submitted the jobs, you have more time to get the job IDs for the jobs that you want to cancel, and to send a <a>CancelJob</a> request. </p>
		 * Post /2012-09-25/pipelines/{Id}/status
		 * @param {string} Id The identifier of the pipeline to update.
		 * @return {UpdatePipelineStatusResponse} Success
		 */
		UpdatePipelineStatus(Id: string, callback: (data : UpdatePipelineStatusResponse) => any, requestBody: UpdatePipelineStatusBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/2012-09-25/pipelines/' + (Id == null ? '' : encodeURIComponent(Id)) + '/status', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}
	}

	export interface CreateJobBody {

		/**
		 * The <code>Id</code> of the pipeline that you want Elastic Transcoder to use for transcoding. The pipeline determines several settings, including the Amazon S3 bucket from which Elastic Transcoder gets the files to transcode and the bucket into which Elastic Transcoder puts the transcoded files.
		 * Pattern: ^\d{13}-\w{6}$
		 */
		PipelineId: string;

		/**Information about the file that you're transcoding. */
		Input?: string;

		/**
		 * A section of the request body that provides information about the files that are being transcoded.
		 * Maximum items: 200
		 */
		Inputs?: Array<JobInput>;

		/**The <code>CreateJobOutput</code> structure. */
		Output?: string;

		/**
		 * A section of the request body that provides information about the transcoded (target) files. We recommend that you use the <code>Outputs</code> syntax instead of the <code>Output</code> syntax.
		 * Maximum items: 30
		 */
		Outputs?: Array<CreateJobOutput>;

		/**
		 * The value, if any, that you want Elastic Transcoder to prepend to the names of all files that this job creates, including output files, thumbnails, and playlists.
		 * Max length: 255
		 * Min length: 1
		 */
		OutputKeyPrefix?: string;

		/**
		 * <p>If you specify a preset in <code>PresetId</code> for which the value of <code>Container</code> is fmp4 (Fragmented MP4) or ts (MPEG-TS), Playlists contains information about the master playlists that you want Elastic Transcoder to create.</p> <p>The maximum number of master playlists in a job is 30.</p>
		 * Maximum items: 30
		 */
		Playlists?: Array<CreateJobPlaylist>;

		/**User-defined metadata that you want to associate with an Elastic Transcoder job. You specify metadata in <code>key/value</code> pairs, and you can add up to 10 <code>key/value</code> pairs per job. Elastic Transcoder does not guarantee that <code>key/value</code> pairs are returned in the same order in which you specify them. */
		UserMetadata?: string;
	}

	export interface CreatePipelineBody {

		/**
		 * <p>The name of the pipeline. We recommend that the name be unique within the AWS account, but uniqueness is not enforced.</p> <p>Constraints: Maximum 40 characters.</p>
		 * Max length: 40
		 * Min length: 1
		 */
		Name: string;

		/**
		 * The Amazon S3 bucket in which you saved the media files that you want to transcode.
		 * Pattern: ^(\w|\.|-){1,255}$
		 */
		InputBucket: string;

		/**
		 * <p>The Amazon S3 bucket in which you want Elastic Transcoder to save the transcoded files. (Use this, or use ContentConfig:Bucket plus ThumbnailConfig:Bucket.)</p> <p>Specify this value when all of the following are true:</p> <ul> <li> <p>You want to save transcoded files, thumbnails (if any), and playlists (if any) together in one bucket.</p> </li> <li> <p>You do not want to specify the users or groups who have access to the transcoded files, thumbnails, and playlists.</p> </li> <li> <p>You do not want to specify the permissions that Elastic Transcoder grants to the files. </p> <important> <p>When Elastic Transcoder saves files in <code>OutputBucket</code>, it grants full control over the files only to the AWS account that owns the role that is specified by <code>Role</code>.</p> </important> </li> <li> <p>You want to associate the transcoded files and thumbnails with the Amazon S3 Standard storage class.</p> </li> </ul> <p>If you want to save transcoded files and playlists in one bucket and thumbnails in another bucket, specify which users can access the transcoded files or the permissions the users have, or change the Amazon S3 storage class, omit <code>OutputBucket</code> and specify values for <code>ContentConfig</code> and <code>ThumbnailConfig</code> instead.</p>
		 * Pattern: ^(\w|\.|-){1,255}$
		 */
		OutputBucket?: string;

		/**
		 * The IAM Amazon Resource Name (ARN) for the role that you want Elastic Transcoder to use to create the pipeline.
		 * Pattern: ^arn:aws:iam::\w{12}:role/.+$
		 */
		Role: string;

		/**
		 * <p>The AWS Key Management Service (AWS KMS) key that you want to use with this pipeline.</p> <p>If you use either <code>s3</code> or <code>s3-aws-kms</code> as your <code>Encryption:Mode</code>, you don't need to provide a key with your job because a default key, known as an AWS-KMS key, is created for you automatically. You need to provide an AWS-KMS key only if you want to use a non-default AWS-KMS key, or if you are using an <code>Encryption:Mode</code> of <code>aes-cbc-pkcs7</code>, <code>aes-ctr</code>, or <code>aes-gcm</code>.</p>
		 * Max length: 255
		 * Min length: 0
		 */
		AwsKmsKeyArn?: string;

		/**<p>The Amazon Simple Notification Service (Amazon SNS) topic or topics to notify in order to report job status.</p> <important> <p>To receive notifications, you must also subscribe to the new topic in the Amazon SNS console.</p> </important> */
		Notifications?: string;

		/**The <code>PipelineOutputConfig</code> structure. */
		ContentConfig?: string;

		/**The <code>PipelineOutputConfig</code> structure. */
		ThumbnailConfig?: string;
	}

	export interface CreatePresetBody {

		/**
		 * The name of the preset. We recommend that the name be unique within the AWS account, but uniqueness is not enforced.
		 * Max length: 40
		 * Min length: 1
		 */
		Name: string;

		/**
		 * A description of the preset.
		 * Max length: 255
		 * Min length: 0
		 */
		Description?: string;

		/**
		 * The container type for the output file. Valid values include <code>flac</code>, <code>flv</code>, <code>fmp4</code>, <code>gif</code>, <code>mp3</code>, <code>mp4</code>, <code>mpg</code>, <code>mxf</code>, <code>oga</code>, <code>ogg</code>, <code>ts</code>, and <code>webm</code>.
		 * Pattern: (^mp4$)|(^ts$)|(^webm$)|(^mp3$)|(^flac$)|(^oga$)|(^ogg$)|(^fmp4$)|(^mpg$)|(^flv$)|(^gif$)|(^mxf$)|(^wav$)|(^mp2$)
		 */
		Container: string;

		/**The <code>VideoParameters</code> structure. */
		Video?: string;

		/**Parameters required for transcoding audio. */
		Audio?: string;

		/**Thumbnails for videos. */
		Thumbnails?: string;
	}

	export interface UpdatePipelineBody {

		/**
		 * <p>The name of the pipeline. We recommend that the name be unique within the AWS account, but uniqueness is not enforced.</p> <p>Constraints: Maximum 40 characters</p>
		 * Max length: 40
		 * Min length: 1
		 */
		Name?: string;

		/**
		 * The Amazon S3 bucket in which you saved the media files that you want to transcode and the graphics that you want to use as watermarks.
		 * Pattern: ^(\w|\.|-){1,255}$
		 */
		InputBucket?: string;

		/**
		 * The IAM Amazon Resource Name (ARN) for the role that you want Elastic Transcoder to use to transcode jobs for this pipeline.
		 * Pattern: ^arn:aws:iam::\w{12}:role/.+$
		 */
		Role?: string;

		/**
		 * <p>The AWS Key Management Service (AWS KMS) key that you want to use with this pipeline.</p> <p>If you use either <code>s3</code> or <code>s3-aws-kms</code> as your <code>Encryption:Mode</code>, you don't need to provide a key with your job because a default key, known as an AWS-KMS key, is created for you automatically. You need to provide an AWS-KMS key only if you want to use a non-default AWS-KMS key, or if you are using an <code>Encryption:Mode</code> of <code>aes-cbc-pkcs7</code>, <code>aes-ctr</code>, or <code>aes-gcm</code>.</p>
		 * Max length: 255
		 * Min length: 0
		 */
		AwsKmsKeyArn?: string;

		/**<p>The Amazon Simple Notification Service (Amazon SNS) topic or topics to notify in order to report job status.</p> <important> <p>To receive notifications, you must also subscribe to the new topic in the Amazon SNS console.</p> </important> */
		Notifications?: string;

		/**The <code>PipelineOutputConfig</code> structure. */
		ContentConfig?: string;

		/**The <code>PipelineOutputConfig</code> structure. */
		ThumbnailConfig?: string;
	}

	export interface TestRoleBody {

		/**
		 * The IAM Amazon Resource Name (ARN) for the role that you want Elastic Transcoder to test.
		 * Pattern: ^arn:aws:iam::\w{12}:role/.+$
		 */
		Role: string;

		/**
		 * The Amazon S3 bucket that contains media files to be transcoded. The action attempts to read from this bucket.
		 * Pattern: ^(\w|\.|-){1,255}$
		 */
		InputBucket: string;

		/**
		 * The Amazon S3 bucket that Elastic Transcoder writes transcoded media files to. The action attempts to read from this bucket.
		 * Pattern: ^(\w|\.|-){1,255}$
		 */
		OutputBucket: string;

		/**
		 * The ARNs of one or more Amazon Simple Notification Service (Amazon SNS) topics that you want the action to send a test notification to.
		 * Maximum items: 30
		 */
		Topics: Array<SnsTopic>;
	}

	export interface UpdatePipelineNotificationsBody {

		/**<p>The Amazon Simple Notification Service (Amazon SNS) topic or topics to notify in order to report job status.</p> <important> <p>To receive notifications, you must also subscribe to the new topic in the Amazon SNS console.</p> </important> */
		Notifications: string;
	}

	export interface UpdatePipelineStatusBody {

		/**
		 * <p>The desired status of the pipeline:</p> <ul> <li> <p> <code>Active</code>: The pipeline is processing jobs.</p> </li> <li> <p> <code>Paused</code>: The pipeline is not currently processing jobs.</p> </li> </ul>
		 * Pattern: (^Active$)|(^Paused$)
		 */
		Status: string;
	}

}

