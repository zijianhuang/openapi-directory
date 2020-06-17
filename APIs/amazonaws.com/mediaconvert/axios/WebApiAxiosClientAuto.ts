import Axios from 'axios';
import { AxiosResponse } from 'axios';
export namespace My_Demo_Client {
	export interface CreateJobResponse {

		/**Each job converts an input file into an output file or files. For more information, see the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html */
		Job?: Job;
	}


	/**Specify whether the service runs your job with accelerated transcoding. Choose DISABLED if you don't want accelerated transcoding. Choose ENABLED if you want your job to run with accelerated transcoding and to fail if your input files or your job settings aren't compatible with accelerated transcoding. Choose PREFERRED if you want your job to run with accelerated transcoding if the job is compatible with the feature and to run at standard speed if it's not. */
	export enum AccelerationMode { DISABLED = 0, ENABLED = 1, PREFERRED = 2 }


	/**Optional. Configuration for a destination queue to which the job can hop once a customer-defined minimum wait time has passed. */
	export interface HopDestination {
		Priority?: number;
		Queue?: string;
		WaitMinutes?: number;
	}


	/**Settings for Avail Blanking */
	export interface AvailBlanking {
		AvailBlankingImage?: string;
	}


	/**Settings for Event Signaling And Messaging (ESAM). If you don't do ad insertion, you can ignore these settings. */
	export interface EsamSettings {

		/**ESAM ManifestConfirmConditionNotification defined by OC-SP-ESAM-API-I03-131025. */
		ManifestConfirmConditionNotification?: EsamManifestConfirmConditionNotification;
		ResponseSignalPreroll?: number;

		/**ESAM SignalProcessingNotification data defined by OC-SP-ESAM-API-I03-131025. */
		SignalProcessingNotification?: EsamSignalProcessingNotification;
	}


	/**Overlay motion graphics on top of your video at the time that you specify. */
	export interface MotionImageInserter {

		/**For motion overlays that don't have a built-in frame rate, specify the frame rate of the overlay in frames per second, as a fraction. For example, specify 24 fps as 24/1. The overlay frame rate doesn't need to match the frame rate of the underlying video. */
		Framerate?: MotionImageInsertionFramerate;
		Input?: string;

		/**Choose the type of motion graphic asset that you are providing for your overlay. You can choose either a .mov file or a series of .png files. */
		InsertionMode?: MotionImageInserterInsertionMode;

		/**Specify the offset between the upper-left corner of the video frame and the top left corner of the overlay. */
		Offset?: MotionImageInsertionOffset;

		/**Specify whether your motion graphic overlay repeats on a loop or plays only once. */
		Playback?: MotionImageInserterPlayback;
		StartTime?: string;
	}

	export enum MotionImageInserterInsertionMode { MOV = 0, PNG = 1 }

	export enum MotionImageInserterPlayback { ONCE = 0, REPEAT = 1 }


	/**Settings for your Nielsen configuration. If you don't do Nielsen measurement and analytics, ignore these settings. When you enable Nielsen configuration (nielsenConfiguration), MediaConvert enables PCM to ID3 tagging for all outputs in the job. To enable Nielsen configuration programmatically, include an instance of nielsenConfiguration in your JSON job specification. Even if you don't include any children of nielsenConfiguration, you still enable the setting. */
	export interface NielsenConfiguration {
		BreakoutCode?: number;
		DistributorId?: string;
	}


	/**These settings control how the service handles timecodes throughout the job. These settings don't affect input clipping. */
	export interface TimecodeConfig {
		Anchor?: string;

		/**Use Source (TimecodeSource) to set how timecodes are handled within this job. To make sure that your video, audio, captions, and markers are synchronized and that time-based features, such as image inserter, work correctly, choose the Timecode source option that matches your assets. All timecodes are in a 24-hour format with frame number (HH:MM:SS:FF). * Embedded (EMBEDDED) - Use the timecode that is in the input video. If no embedded timecode is in the source, the service will use Start at 0 (ZEROBASED) instead. * Start at 0 (ZEROBASED) - Set the timecode of the initial frame to 00:00:00:00. * Specified Start (SPECIFIEDSTART) - Set the timecode of the initial frame to a value other than zero. You use Start timecode (Start) to provide this value. */
		Source?: TimecodeConfigSource;
		Start?: string;
		TimestampOffset?: string;
	}

	export enum TimecodeConfigSource { EMBEDDED = 0, ZEROBASED = 1, SPECIFIEDSTART = 2 }


	/**Enable Timed metadata insertion (TimedMetadataInsertion) to include ID3 tags in your job. To include timed metadata, you must enable it here, enable it in each output container, and specify tags and timecodes in ID3 insertion (Id3Insertion) objects. */
	export interface TimedMetadataInsertion {
		Id3Insertions?: Array<Id3Insertion>;
	}

	export interface CreateJobTemplateResponse {

		/**A job template is a pre-made set of encoding instructions that you can use to quickly create a job. */
		JobTemplate?: JobTemplate;
	}

	export interface CreatePresetResponse {

		/**A preset is a collection of preconfigured media conversion settings that you want MediaConvert to apply to the output during the conversion process. */
		Preset?: Preset;
	}


	/**Container specific settings. */
	export interface ContainerSettings {

		/**Settings for MP4 segments in CMAF */
		CmfcSettings?: CmfcSettings;

		/**Container for this output. Some containers require a container settings object. If not specified, the default object will be created. */
		Container?: ContainerSettingsContainer;

		/**Settings for F4v container */
		F4vSettings?: F4vSettings;

		/**MPEG-2 TS container settings. These apply to outputs in a File output group when the output's container (ContainerType) is MPEG-2 Transport Stream (M2TS). In these assets, data is organized by the program map table (PMT). Each transport stream program contains subsets of data, including audio, video, and metadata. Each of these subsets of data has a numerical label called a packet identifier (PID). Each transport stream program corresponds to one MediaConvert output. The PMT lists the types of data in a program along with their PID. Downstream systems and players use the program map table to look up the PID for each type of data it accesses and then uses the PIDs to locate specific data within the asset. */
		M2tsSettings?: M2tsSettings;

		/**Settings for TS segments in HLS */
		M3u8Settings?: M3u8Settings;

		/**Settings for MOV Container. */
		MovSettings?: MovSettings;

		/**Settings for MP4 container. You can create audio-only AAC outputs with this container. */
		Mp4Settings?: Mp4Settings;

		/**Settings for MP4 segments in DASH */
		MpdSettings?: MpdSettings;

		/**MXF settings */
		MxfSettings?: MxfSettings;
	}

	export enum ContainerSettingsContainer { F4V = 0, ISMV = 1, M2TS = 2, M3U8 = 3, CMFC = 4, MOV = 5, MP4 = 6, MPD = 7, MXF = 8, WEBM = 9, RAW = 10 }


	/**Settings for video outputs */
	export interface VideoDescription {

		/**This setting only applies to H.264, H.265, and MPEG2 outputs. Use Insert AFD signaling (AfdSignaling) to specify whether the service includes AFD values in the output video data and what those values are. * Choose None to remove all AFD values from this output. * Choose Fixed to ignore input AFD values and instead encode the value specified in the job. * Choose Auto to calculate output AFD values based on the input AFD scaler data. */
		AfdSignaling?: VideoDescriptionAfdSignaling;

		/**The anti-alias filter is automatically applied to all outputs. The service no longer accepts the value DISABLED for AntiAlias. If you specify that in your job, the service will ignore the setting. */
		AntiAlias?: VideoDescriptionAntiAlias;

		/**Video codec settings, (CodecSettings) under (VideoDescription), contains the group of settings related to video encoding. The settings in this group vary depending on the value that you choose for Video codec (Codec). For each codec enum that you choose, define the corresponding settings object. The following lists the codec enum, settings object pairs. * FRAME_CAPTURE, FrameCaptureSettings * AV1, Av1Settings * H_264, H264Settings * H_265, H265Settings * MPEG2, Mpeg2Settings * PRORES, ProresSettings * VP8, Vp8Settings * VP9, Vp9Settings */
		CodecSettings?: VideoCodecSettings;

		/**Choose Insert (INSERT) for this setting to include color metadata in this output. Choose Ignore (IGNORE) to exclude color metadata from this output. If you don't specify a value, the service sets this to Insert by default. */
		ColorMetadata?: VideoDescriptionColorMetadata;

		/**Use Rectangle to identify a specific area of the video frame. */
		Crop?: Rectangle;

		/**Applies only to 29.97 fps outputs. When this feature is enabled, the service will use drop-frame timecode on outputs. If it is not possible to use drop-frame timecode, the system will fall back to non-drop-frame. This setting is enabled by default when Timecode insertion (TimecodeInsertion) is enabled. */
		DropFrameTimecode?: VideoDescriptionDropFrameTimecode;
		FixedAfd?: number;
		Height?: number;

		/**Use Rectangle to identify a specific area of the video frame. */
		Position?: Rectangle;

		/**Use Respond to AFD (RespondToAfd) to specify how the service changes the video itself in response to AFD values in the input. * Choose Respond to clip the input video frame according to the AFD value, input display aspect ratio, and output display aspect ratio. * Choose Passthrough to include the input AFD values. Do not choose this when AfdSignaling is set to (NONE). A preferred implementation of this workflow is to set RespondToAfd to (NONE) and set AfdSignaling to (AUTO). * Choose None to remove all input AFD values from this output. */
		RespondToAfd?: VideoDescriptionRespondToAfd;

		/**Specify how the service handles outputs that have a different aspect ratio from the input aspect ratio. Choose Stretch to output (STRETCH_TO_OUTPUT) to have the service stretch your video image to fit. Keep the setting Default (DEFAULT) to have the service letterbox your video instead. This setting overrides any value that you specify for the setting Selection placement (position) in this output. */
		ScalingBehavior?: VideoDescriptionScalingBehavior;
		Sharpness?: number;

		/**Applies only to H.264, H.265, MPEG2, and ProRes outputs. Only enable Timecode insertion when the input frame rate is identical to the output frame rate. To include timecodes in this output, set Timecode insertion (VideoTimecodeInsertion) to PIC_TIMING_SEI. To leave them out, set it to DISABLED. Default is DISABLED. When the service inserts timecodes in an output, by default, it uses any embedded timecodes from the input. If none are present, the service will set the timecode for the first output frame to zero. To change this default behavior, adjust the settings under Timecode configuration (TimecodeConfig). In the console, these settings are located under Job > Job settings > Timecode configuration. Note - Timecode source under input settings (InputTimecodeSource) does not affect the timecodes that are inserted in the output. Source under Job settings > Timecode configuration (TimecodeSource) does. */
		TimecodeInsertion?: VideoDescriptionTimecodeInsertion;

		/**Find additional transcoding features under Preprocessors (VideoPreprocessors). Enable the features at each output individually. These features are disabled by default. */
		VideoPreprocessors?: VideoPreprocessor;
		Width?: number;
	}

	export enum VideoDescriptionAfdSignaling { NONE = 0, AUTO = 1, FIXED = 2 }

	export enum VideoDescriptionAntiAlias { DISABLED = 0, ENABLED = 1 }

	export enum VideoDescriptionColorMetadata { IGNORE = 0, INSERT = 1 }

	export enum VideoDescriptionDropFrameTimecode { DISABLED = 0, ENABLED = 1 }

	export enum VideoDescriptionRespondToAfd { NONE = 0, RESPOND = 1, PASSTHROUGH = 2 }

	export enum VideoDescriptionScalingBehavior { DEFAULT = 0, STRETCH_TO_OUTPUT = 1 }

	export enum VideoDescriptionTimecodeInsertion { DISABLED = 0, PIC_TIMING_SEI = 1 }

	export interface CreateQueueResponse {

		/**You can use queues to manage the resources that are available to your AWS account for running multiple transcoding jobs at the same time. If you don't specify a queue, the service sends all jobs through the default queue. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-queues.html. */
		Queue?: Queue;
	}


	/**The length of the term of your reserved queue pricing plan commitment. */
	export enum Commitment { ONE_YEAR = 0 }


	/**Specifies whether the term of your reserved queue pricing plan is automatically extended (AUTO_RENEW) or expires (EXPIRE) at the end of the term. */
	export enum RenewalType { AUTO_RENEW = 0, EXPIRE = 1 }

	export interface DescribeEndpointsResponse {
		Endpoints?: Array<Endpoint>;
		NextToken?: string;
	}

	export interface GetJobResponse {

		/**Each job converts an input file into an output file or files. For more information, see the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html */
		Job?: Job;
	}

	export interface GetJobTemplateResponse {

		/**A job template is a pre-made set of encoding instructions that you can use to quickly create a job. */
		JobTemplate?: JobTemplate;
	}

	export interface GetPresetResponse {

		/**A preset is a collection of preconfigured media conversion settings that you want MediaConvert to apply to the output during the conversion process. */
		Preset?: Preset;
	}

	export interface GetQueueResponse {

		/**You can use queues to manage the resources that are available to your AWS account for running multiple transcoding jobs at the same time. If you don't specify a queue, the service sends all jobs through the default queue. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-queues.html. */
		Queue?: Queue;
	}

	export interface ListJobTemplatesResponse {
		JobTemplates?: Array<JobTemplate>;
		NextToken?: string;
	}

	export interface ListJobsResponse {
		Jobs?: Array<Job>;
		NextToken?: string;
	}

	export interface ListPresetsResponse {
		NextToken?: string;
		Presets?: Array<Preset>;
	}

	export interface ListQueuesResponse {
		NextToken?: string;
		Queues?: Array<Queue>;
	}

	export interface ListTagsForResourceResponse {

		/**The Amazon Resource Name (ARN) and tags for an AWS Elemental MediaConvert resource. */
		ResourceTags?: ResourceTags;
	}

	export interface UpdateJobTemplateResponse {

		/**A job template is a pre-made set of encoding instructions that you can use to quickly create a job. */
		JobTemplate?: JobTemplate;
	}

	export interface UpdatePresetResponse {

		/**A preset is a collection of preconfigured media conversion settings that you want MediaConvert to apply to the output during the conversion process. */
		Preset?: Preset;
	}

	export interface UpdateQueueResponse {

		/**You can use queues to manage the resources that are available to your AWS account for running multiple transcoding jobs at the same time. If you don't specify a queue, the service sends all jobs through the default queue. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-queues.html. */
		Queue?: Queue;
	}


	/**Choose BROADCASTER_MIXED_AD when the input contains pre-mixed main audio + audio description (AD) as a stereo pair. The value for AudioType will be set to 3, which signals to downstream systems that this stream contains "broadcaster mixed AD". Note that the input received by the encoder must contain pre-mixed audio; the encoder does not perform the mixing. When you choose BROADCASTER_MIXED_AD, the encoder ignores any values you provide in AudioType and  FollowInputAudioType. Choose NORMAL when the input does not contain pre-mixed audio + audio description (AD). In this case, the encoder will use any values you provide for AudioType and FollowInputAudioType. */
	export enum AacAudioDescriptionBroadcasterMix { BROADCASTER_MIXED_AD = 0, NORMAL = 1 }


	/**AAC Profile. */
	export enum AacCodecProfile { LC = 0, HEV1 = 1, HEV2 = 2 }


	/**Mono (Audio Description), Mono, Stereo, or 5.1 channel layout. Valid values depend on rate control mode and profile. "1.0 - Audio Description (Receiver Mix)" setting receives a stereo description plus control track and emits a mono AAC encode of the description track, with control data emitted in the PES header as per ETSI TS 101 154 Annex E. */
	export enum AacCodingMode { AD_RECEIVER_MIX = 0, CODING_MODE_1_0 = 1, CODING_MODE_1_1 = 2, CODING_MODE_2_0 = 3, CODING_MODE_5_1 = 4 }


	/**Rate Control Mode. */
	export enum AacRateControlMode { CBR = 0, VBR = 1 }


	/**Enables LATM/LOAS AAC output. Note that if you use LATM/LOAS AAC in an output, you must choose "No container" for the output container. */
	export enum AacRawFormat { LATM_LOAS = 0, NONE = 1 }


	/**Use MPEG-2 AAC instead of MPEG-4 AAC audio for raw or MPEG-2 Transport Stream containers. */
	export enum AacSpecification { MPEG2 = 0, MPEG4 = 1 }


	/**VBR Quality Level - Only used if rate_control_mode is VBR. */
	export enum AacVbrQuality { LOW = 0, MEDIUM_LOW = 1, MEDIUM_HIGH = 2, HIGH = 3 }


	/**Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value AAC. The service accepts one of two mutually exclusive groups of AAC settings--VBR and CBR. To select one of these modes, set the value of Bitrate control mode (rateControlMode) to "VBR" or "CBR".  In VBR mode, you control the audio quality with the setting VBR quality (vbrQuality). In CBR mode, you use the setting Bitrate (bitrate). Defaults and valid values depend on the rate control mode. */
	export interface AacSettings {

		/**Choose BROADCASTER_MIXED_AD when the input contains pre-mixed main audio + audio description (AD) as a stereo pair. The value for AudioType will be set to 3, which signals to downstream systems that this stream contains "broadcaster mixed AD". Note that the input received by the encoder must contain pre-mixed audio; the encoder does not perform the mixing. When you choose BROADCASTER_MIXED_AD, the encoder ignores any values you provide in AudioType and  FollowInputAudioType. Choose NORMAL when the input does not contain pre-mixed audio + audio description (AD). In this case, the encoder will use any values you provide for AudioType and FollowInputAudioType. */
		AudioDescriptionBroadcasterMix?: AacSettingsAudioDescriptionBroadcasterMix;
		Bitrate?: number;

		/**AAC Profile. */
		CodecProfile?: AacSettingsCodecProfile;

		/**Mono (Audio Description), Mono, Stereo, or 5.1 channel layout. Valid values depend on rate control mode and profile. "1.0 - Audio Description (Receiver Mix)" setting receives a stereo description plus control track and emits a mono AAC encode of the description track, with control data emitted in the PES header as per ETSI TS 101 154 Annex E. */
		CodingMode?: AacSettingsCodingMode;

		/**Rate Control Mode. */
		RateControlMode?: AacSettingsRateControlMode;

		/**Enables LATM/LOAS AAC output. Note that if you use LATM/LOAS AAC in an output, you must choose "No container" for the output container. */
		RawFormat?: AacSettingsRawFormat;
		SampleRate?: number;

		/**Use MPEG-2 AAC instead of MPEG-4 AAC audio for raw or MPEG-2 Transport Stream containers. */
		Specification?: AacSettingsSpecification;

		/**VBR Quality Level - Only used if rate_control_mode is VBR. */
		VbrQuality?: AacSettingsVbrQuality;
	}

	export enum AacSettingsAudioDescriptionBroadcasterMix { BROADCASTER_MIXED_AD = 0, NORMAL = 1 }

	export enum AacSettingsCodecProfile { LC = 0, HEV1 = 1, HEV2 = 2 }

	export enum AacSettingsCodingMode { AD_RECEIVER_MIX = 0, CODING_MODE_1_0 = 1, CODING_MODE_1_1 = 2, CODING_MODE_2_0 = 3, CODING_MODE_5_1 = 4 }

	export enum AacSettingsRateControlMode { CBR = 0, VBR = 1 }

	export enum AacSettingsRawFormat { LATM_LOAS = 0, NONE = 1 }

	export enum AacSettingsSpecification { MPEG2 = 0, MPEG4 = 1 }

	export enum AacSettingsVbrQuality { LOW = 0, MEDIUM_LOW = 1, MEDIUM_HIGH = 2, HIGH = 3 }


	/**Specify the bitstream mode for the AC-3 stream that the encoder emits. For more information about the AC3 bitstream mode, see ATSC A/52-2012 (Annex E). */
	export enum Ac3BitstreamMode { COMPLETE_MAIN = 0, COMMENTARY = 1, DIALOGUE = 2, EMERGENCY = 3, HEARING_IMPAIRED = 4, MUSIC_AND_EFFECTS = 5, VISUALLY_IMPAIRED = 6, VOICE_OVER = 7 }


	/**Dolby Digital coding mode. Determines number of channels. */
	export enum Ac3CodingMode { CODING_MODE_1_0 = 0, CODING_MODE_1_1 = 1, CODING_MODE_2_0 = 2, CODING_MODE_3_2_LFE = 3 }


	/**If set to FILM_STANDARD, adds dynamic range compression signaling to the output bitstream as defined in the Dolby Digital specification. */
	export enum Ac3DynamicRangeCompressionProfile { FILM_STANDARD = 0, NONE = 1 }


	/**Applies a 120Hz lowpass filter to the LFE channel prior to encoding. Only valid with 3_2_LFE coding mode. */
	export enum Ac3LfeFilter { ENABLED = 0, DISABLED = 1 }


	/**When set to FOLLOW_INPUT, encoder metadata will be sourced from the DD, DD+, or DolbyE decoder that supplied this audio data. If audio was not supplied from one of these streams, then the static metadata settings will be used. */
	export enum Ac3MetadataControl { FOLLOW_INPUT = 0, USE_CONFIGURED = 1 }


	/**Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value AC3. */
	export interface Ac3Settings {
		Bitrate?: number;

		/**Specify the bitstream mode for the AC-3 stream that the encoder emits. For more information about the AC3 bitstream mode, see ATSC A/52-2012 (Annex E). */
		BitstreamMode?: Ac3SettingsBitstreamMode;

		/**Dolby Digital coding mode. Determines number of channels. */
		CodingMode?: Ac3SettingsCodingMode;
		Dialnorm?: number;

		/**If set to FILM_STANDARD, adds dynamic range compression signaling to the output bitstream as defined in the Dolby Digital specification. */
		DynamicRangeCompressionProfile?: Ac3SettingsDynamicRangeCompressionProfile;

		/**Applies a 120Hz lowpass filter to the LFE channel prior to encoding. Only valid with 3_2_LFE coding mode. */
		LfeFilter?: Ac3SettingsLfeFilter;

		/**When set to FOLLOW_INPUT, encoder metadata will be sourced from the DD, DD+, or DolbyE decoder that supplied this audio data. If audio was not supplied from one of these streams, then the static metadata settings will be used. */
		MetadataControl?: Ac3SettingsMetadataControl;
		SampleRate?: number;
	}

	export enum Ac3SettingsBitstreamMode { COMPLETE_MAIN = 0, COMMENTARY = 1, DIALOGUE = 2, EMERGENCY = 3, HEARING_IMPAIRED = 4, MUSIC_AND_EFFECTS = 5, VISUALLY_IMPAIRED = 6, VOICE_OVER = 7 }

	export enum Ac3SettingsCodingMode { CODING_MODE_1_0 = 0, CODING_MODE_1_1 = 1, CODING_MODE_2_0 = 2, CODING_MODE_3_2_LFE = 3 }

	export enum Ac3SettingsDynamicRangeCompressionProfile { FILM_STANDARD = 0, NONE = 1 }

	export enum Ac3SettingsLfeFilter { ENABLED = 0, DISABLED = 1 }

	export enum Ac3SettingsMetadataControl { FOLLOW_INPUT = 0, USE_CONFIGURED = 1 }


	/**Accelerated transcoding can significantly speed up jobs with long, visually complex content. */
	export interface AccelerationSettings {

		/**Specify whether the service runs your job with accelerated transcoding. Choose DISABLED if you don't want accelerated transcoding. Choose ENABLED if you want your job to run with accelerated transcoding and to fail if your input files or your job settings aren't compatible with accelerated transcoding. Choose PREFERRED if you want your job to run with accelerated transcoding if the job is compatible with the feature and to run at standard speed if it's not. */
		Mode: AccelerationSettingsMode;
	}

	export enum AccelerationSettingsMode { DISABLED = 0, ENABLED = 1, PREFERRED = 2 }


	/**Describes whether the current job is running with accelerated transcoding. For jobs that have Acceleration (AccelerationMode) set to DISABLED, AccelerationStatus is always NOT_APPLICABLE. For jobs that have Acceleration (AccelerationMode) set to ENABLED or PREFERRED, AccelerationStatus is one of the other states. AccelerationStatus is IN_PROGRESS initially, while the service determines whether the input files and job settings are compatible with accelerated transcoding. If they are, AcclerationStatus is ACCELERATED. If your input files and job settings aren't compatible with accelerated transcoding, the service either fails your job or runs it without accelerated transcoding, depending on how you set Acceleration (AccelerationMode). When the service runs your job without accelerated transcoding, AccelerationStatus is NOT_ACCELERATED. */
	export enum AccelerationStatus { NOT_APPLICABLE = 0, IN_PROGRESS = 1, ACCELERATED = 2, NOT_ACCELERATED = 3 }


	/**This setting only applies to H.264, H.265, and MPEG2 outputs. Use Insert AFD signaling (AfdSignaling) to specify whether the service includes AFD values in the output video data and what those values are. * Choose None to remove all AFD values from this output. * Choose Fixed to ignore input AFD values and instead encode the value specified in the job. * Choose Auto to calculate output AFD values based on the input AFD scaler data. */
	export enum AfdSignaling { NONE = 0, AUTO = 1, FIXED = 2 }


	/**Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value AIFF. */
	export interface AiffSettings {
		BitDepth?: number;
		Channels?: number;
		SampleRate?: number;
	}


	/**Ignore this setting unless this input is a QuickTime animation with an alpha channel. Use this setting to create separate Key and Fill outputs. In each output, specify which part of the input MediaConvert uses. Leave this setting at the default value DISCARD to delete the alpha channel and preserve the video. Set it to REMAP_TO_LUMA to delete the video and map the alpha channel to the luma channel of your outputs. */
	export enum AlphaBehavior { DISCARD = 0, REMAP_TO_LUMA = 1 }


	/**Specify whether this set of input captions appears in your outputs in both 608 and 708 format. If you choose Upconvert (UPCONVERT), MediaConvert includes the captions data in two ways: it passes the 608 data through using the 608 compatibility bytes fields of the 708 wrapper, and it also translates the 608 data into 708. */
	export enum AncillaryConvert608To708 { UPCONVERT = 0, DISABLED = 1 }


	/**By default, the service terminates any unterminated captions at the end of each input. If you want the caption to continue onto your next input, disable this setting. */
	export enum AncillaryTerminateCaptions { END_OF_INPUT = 0, DISABLED = 1 }


	/**Settings for ancillary captions source. */
	export interface AncillarySourceSettings {

		/**Specify whether this set of input captions appears in your outputs in both 608 and 708 format. If you choose Upconvert (UPCONVERT), MediaConvert includes the captions data in two ways: it passes the 608 data through using the 608 compatibility bytes fields of the 708 wrapper, and it also translates the 608 data into 708. */
		Convert608To708?: AncillarySourceSettingsConvert608To708;
		SourceAncillaryChannelNumber?: number;

		/**By default, the service terminates any unterminated captions at the end of each input. If you want the caption to continue onto your next input, disable this setting. */
		TerminateCaptions?: AncillarySourceSettingsTerminateCaptions;
	}

	export enum AncillarySourceSettingsConvert608To708 { UPCONVERT = 0, DISABLED = 1 }

	export enum AncillarySourceSettingsTerminateCaptions { END_OF_INPUT = 0, DISABLED = 1 }


	/**The anti-alias filter is automatically applied to all outputs. The service no longer accepts the value DISABLED for AntiAlias. If you specify that in your job, the service will ignore the setting. */
	export enum AntiAlias { DISABLED = 0, ENABLED = 1 }

	export interface AssociateCertificateRequest {
		Arn: string;
	}


	/**Type of Audio codec. */
	export enum AudioCodec { AAC = 0, MP2 = 1, MP3 = 2, WAV = 3, AIFF = 4, AC3 = 5, EAC3 = 6, EAC3_ATMOS = 7, VORBIS = 8, OPUS = 9, PASSTHROUGH = 10 }


	/**Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value EAC3_ATMOS. */
	export interface Eac3AtmosSettings {
		Bitrate?: number;

		/**Specify the bitstream mode for the E-AC-3 stream that the encoder emits. For more information about the EAC3 bitstream mode, see ATSC A/52-2012 (Annex E). */
		BitstreamMode?: Eac3AtmosSettingsBitstreamMode;

		/**The coding mode for Dolby Digital Plus JOC (Atmos) is always 9.1.6 (CODING_MODE_9_1_6). */
		CodingMode?: Eac3AtmosSettingsCodingMode;

		/**Enable Dolby Dialogue Intelligence to adjust loudness based on dialogue analysis. */
		DialogueIntelligence?: Eac3AtmosSettingsDialogueIntelligence;

		/**Specify the absolute peak level for a signal with dynamic range compression. */
		DynamicRangeCompressionLine?: Eac3AtmosSettingsDynamicRangeCompressionLine;

		/**Specify how the service limits the audio dynamic range when compressing the audio. */
		DynamicRangeCompressionRf?: Eac3AtmosSettingsDynamicRangeCompressionRf;
		LoRoCenterMixLevel?: number;
		LoRoSurroundMixLevel?: number;
		LtRtCenterMixLevel?: number;
		LtRtSurroundMixLevel?: number;

		/**Choose how the service meters the loudness of your audio. */
		MeteringMode?: Eac3AtmosSettingsMeteringMode;
		SampleRate?: number;
		SpeechThreshold?: number;

		/**Choose how the service does stereo downmixing. */
		StereoDownmix?: Eac3AtmosSettingsStereoDownmix;

		/**Specify whether your input audio has an additional center rear surround channel matrix encoded into your left and right surround channels. */
		SurroundExMode?: Eac3AtmosSettingsSurroundExMode;
	}

	export enum Eac3AtmosSettingsBitstreamMode { COMPLETE_MAIN = 0 }

	export enum Eac3AtmosSettingsCodingMode { CODING_MODE_9_1_6 = 0 }

	export enum Eac3AtmosSettingsDialogueIntelligence { ENABLED = 0, DISABLED = 1 }

	export enum Eac3AtmosSettingsDynamicRangeCompressionLine { NONE = 0, FILM_STANDARD = 1, FILM_LIGHT = 2, MUSIC_STANDARD = 3, MUSIC_LIGHT = 4, SPEECH = 5 }

	export enum Eac3AtmosSettingsDynamicRangeCompressionRf { NONE = 0, FILM_STANDARD = 1, FILM_LIGHT = 2, MUSIC_STANDARD = 3, MUSIC_LIGHT = 4, SPEECH = 5 }

	export enum Eac3AtmosSettingsMeteringMode { LEQ_A = 0, ITU_BS_1770_1 = 1, ITU_BS_1770_2 = 2, ITU_BS_1770_3 = 3, ITU_BS_1770_4 = 4 }

	export enum Eac3AtmosSettingsStereoDownmix { NOT_INDICATED = 0, STEREO = 1, SURROUND = 2, DPL2 = 3 }

	export enum Eac3AtmosSettingsSurroundExMode { NOT_INDICATED = 0, ENABLED = 1, DISABLED = 2 }


	/**Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value EAC3. */
	export interface Eac3Settings {

		/**If set to ATTENUATE_3_DB, applies a 3 dB attenuation to the surround channels. Only used for 3/2 coding mode. */
		AttenuationControl?: Eac3SettingsAttenuationControl;
		Bitrate?: number;

		/**Specify the bitstream mode for the E-AC-3 stream that the encoder emits. For more information about the EAC3 bitstream mode, see ATSC A/52-2012 (Annex E). */
		BitstreamMode?: Eac3SettingsBitstreamMode;

		/**Dolby Digital Plus coding mode. Determines number of channels. */
		CodingMode?: Eac3SettingsCodingMode;

		/**Activates a DC highpass filter for all input channels. */
		DcFilter?: Eac3SettingsDcFilter;
		Dialnorm?: number;

		/**Specify the absolute peak level for a signal with dynamic range compression. */
		DynamicRangeCompressionLine?: Eac3SettingsDynamicRangeCompressionLine;

		/**Specify how the service limits the audio dynamic range when compressing the audio. */
		DynamicRangeCompressionRf?: Eac3SettingsDynamicRangeCompressionRf;

		/**When encoding 3/2 audio, controls whether the LFE channel is enabled */
		LfeControl?: Eac3SettingsLfeControl;

		/**Applies a 120Hz lowpass filter to the LFE channel prior to encoding. Only valid with 3_2_LFE coding mode. */
		LfeFilter?: Eac3SettingsLfeFilter;
		LoRoCenterMixLevel?: number;
		LoRoSurroundMixLevel?: number;
		LtRtCenterMixLevel?: number;
		LtRtSurroundMixLevel?: number;

		/**When set to FOLLOW_INPUT, encoder metadata will be sourced from the DD, DD+, or DolbyE decoder that supplied this audio data. If audio was not supplied from one of these streams, then the static metadata settings will be used. */
		MetadataControl?: Eac3SettingsMetadataControl;

		/**When set to WHEN_POSSIBLE, input DD+ audio will be passed through if it is present on the input. this detection is dynamic over the life of the transcode. Inputs that alternate between DD+ and non-DD+ content will have a consistent DD+ output as the system alternates between passthrough and encoding. */
		PassthroughControl?: Eac3SettingsPassthroughControl;

		/**Controls the amount of phase-shift applied to the surround channels. Only used for 3/2 coding mode. */
		PhaseControl?: Eac3SettingsPhaseControl;
		SampleRate?: number;

		/**Choose how the service does stereo downmixing. This setting only applies if you keep the default value of 3/2 - L, R, C, Ls, Rs (CODING_MODE_3_2) for the setting Coding mode (Eac3CodingMode). If you choose a different value for Coding mode, the service ignores Stereo downmix (Eac3StereoDownmix). */
		StereoDownmix?: Eac3SettingsStereoDownmix;

		/**When encoding 3/2 audio, sets whether an extra center back surround channel is matrix encoded into the left and right surround channels. */
		SurroundExMode?: Eac3SettingsSurroundExMode;

		/**When encoding 2/0 audio, sets whether Dolby Surround is matrix encoded into the two channels. */
		SurroundMode?: Eac3SettingsSurroundMode;
	}

	export enum Eac3SettingsAttenuationControl { ATTENUATE_3_DB = 0, NONE = 1 }

	export enum Eac3SettingsBitstreamMode { COMPLETE_MAIN = 0, COMMENTARY = 1, EMERGENCY = 2, HEARING_IMPAIRED = 3, VISUALLY_IMPAIRED = 4 }

	export enum Eac3SettingsCodingMode { CODING_MODE_1_0 = 0, CODING_MODE_2_0 = 1, CODING_MODE_3_2 = 2 }

	export enum Eac3SettingsDcFilter { ENABLED = 0, DISABLED = 1 }

	export enum Eac3SettingsDynamicRangeCompressionLine { NONE = 0, FILM_STANDARD = 1, FILM_LIGHT = 2, MUSIC_STANDARD = 3, MUSIC_LIGHT = 4, SPEECH = 5 }

	export enum Eac3SettingsDynamicRangeCompressionRf { NONE = 0, FILM_STANDARD = 1, FILM_LIGHT = 2, MUSIC_STANDARD = 3, MUSIC_LIGHT = 4, SPEECH = 5 }

	export enum Eac3SettingsLfeControl { LFE = 0, NO_LFE = 1 }

	export enum Eac3SettingsLfeFilter { ENABLED = 0, DISABLED = 1 }

	export enum Eac3SettingsMetadataControl { FOLLOW_INPUT = 0, USE_CONFIGURED = 1 }

	export enum Eac3SettingsPassthroughControl { WHEN_POSSIBLE = 0, NO_PASSTHROUGH = 1 }

	export enum Eac3SettingsPhaseControl { SHIFT_90_DEGREES = 0, NO_SHIFT = 1 }

	export enum Eac3SettingsStereoDownmix { NOT_INDICATED = 0, LO_RO = 1, LT_RT = 2, DPL2 = 3 }

	export enum Eac3SettingsSurroundExMode { NOT_INDICATED = 0, ENABLED = 1, DISABLED = 2 }

	export enum Eac3SettingsSurroundMode { NOT_INDICATED = 0, ENABLED = 1, DISABLED = 2 }


	/**Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value MP2. */
	export interface Mp2Settings {
		Bitrate?: number;
		Channels?: number;
		SampleRate?: number;
	}


	/**Required when you set Codec, under AudioDescriptions>CodecSettings, to the value MP3. */
	export interface Mp3Settings {
		Bitrate?: number;
		Channels?: number;

		/**Specify whether the service encodes this MP3 audio output with a constant bitrate (CBR) or a variable bitrate (VBR). */
		RateControlMode?: Mp3SettingsRateControlMode;
		SampleRate?: number;
		VbrQuality?: number;
	}

	export enum Mp3SettingsRateControlMode { CBR = 0, VBR = 1 }


	/**Required when you set Codec, under AudioDescriptions>CodecSettings, to the value OPUS. */
	export interface OpusSettings {
		Bitrate?: number;
		Channels?: number;
		SampleRate?: number;
	}


	/**Required when you set Codec, under AudioDescriptions>CodecSettings, to the value Vorbis. */
	export interface VorbisSettings {
		Channels?: number;
		SampleRate?: number;
		VbrQuality?: number;
	}


	/**Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value WAV. */
	export interface WavSettings {
		BitDepth?: number;
		Channels?: number;

		/**The service defaults to using RIFF for WAV outputs. If your output audio is likely to exceed 4 GB in file size, or if you otherwise need the extended support of the RF64 format, set your output WAV file format to RF64. */
		Format?: WavSettingsFormat;
		SampleRate?: number;
	}

	export enum WavSettingsFormat { RIFF = 0, RF64 = 1 }


	/**Audio codec settings (CodecSettings) under (AudioDescriptions) contains the group of settings related to audio encoding. The settings in this group vary depending on the value that you choose for Audio codec (Codec). For each codec enum that you choose, define the corresponding settings object. The following lists the codec enum, settings object pairs. * AAC, AacSettings * MP2, Mp2Settings * MP3, Mp3Settings * WAV, WavSettings * AIFF, AiffSettings * AC3, Ac3Settings * EAC3, Eac3Settings * EAC3_ATMOS, Eac3AtmosSettings * VORBIS, VorbisSettings * OPUS, OpusSettings */
	export interface AudioCodecSettings {

		/**Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value AAC. The service accepts one of two mutually exclusive groups of AAC settings--VBR and CBR. To select one of these modes, set the value of Bitrate control mode (rateControlMode) to "VBR" or "CBR".  In VBR mode, you control the audio quality with the setting VBR quality (vbrQuality). In CBR mode, you use the setting Bitrate (bitrate). Defaults and valid values depend on the rate control mode. */
		AacSettings?: AacSettings;

		/**Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value AC3. */
		Ac3Settings?: Ac3Settings;

		/**Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value AIFF. */
		AiffSettings?: AiffSettings;

		/**Type of Audio codec. */
		Codec?: AudioCodecSettingsCodec;

		/**Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value EAC3_ATMOS. */
		Eac3AtmosSettings?: Eac3AtmosSettings;

		/**Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value EAC3. */
		Eac3Settings?: Eac3Settings;

		/**Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value MP2. */
		Mp2Settings?: Mp2Settings;

		/**Required when you set Codec, under AudioDescriptions>CodecSettings, to the value MP3. */
		Mp3Settings?: Mp3Settings;

		/**Required when you set Codec, under AudioDescriptions>CodecSettings, to the value OPUS. */
		OpusSettings?: OpusSettings;

		/**Required when you set Codec, under AudioDescriptions>CodecSettings, to the value Vorbis. */
		VorbisSettings?: VorbisSettings;

		/**Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value WAV. */
		WavSettings?: WavSettings;
	}

	export enum AudioCodecSettingsCodec { AAC = 0, MP2 = 1, MP3 = 2, WAV = 3, AIFF = 4, AC3 = 5, EAC3 = 6, EAC3_ATMOS = 7, VORBIS = 8, OPUS = 9, PASSTHROUGH = 10 }


	/**Enable this setting on one audio selector to set it as the default for the job. The service uses this default for outputs where it can't find the specified input audio. If you don't set a default, those outputs have no audio. */
	export enum AudioDefaultSelection { DEFAULT = 0, NOT_DEFAULT = 1 }


	/**Advanced audio normalization settings. Ignore these settings unless you need to comply with a loudness standard. */
	export interface AudioNormalizationSettings {

		/**Choose one of the following audio normalization algorithms: ITU-R BS.1770-1: Ungated loudness. A measurement of ungated average loudness for an entire piece of content, suitable for measurement of short-form content under ATSC recommendation A/85. Supports up to 5.1 audio channels. ITU-R BS.1770-2: Gated loudness. A measurement of gated average loudness compliant with the requirements of EBU-R128. Supports up to 5.1 audio channels. ITU-R BS.1770-3: Modified peak. The same loudness measurement algorithm as 1770-2, with an updated true peak measurement. ITU-R BS.1770-4: Higher channel count. Allows for more audio channels than the other algorithms, including configurations such as 7.1. */
		Algorithm?: AudioNormalizationSettingsAlgorithm;

		/**When enabled the output audio is corrected using the chosen algorithm. If disabled, the audio will be measured but not adjusted. */
		AlgorithmControl?: AudioNormalizationSettingsAlgorithmControl;
		CorrectionGateLevel?: number;

		/**If set to LOG, log each output's audio track loudness to a CSV file. */
		LoudnessLogging?: AudioNormalizationSettingsLoudnessLogging;

		/**If set to TRUE_PEAK, calculate and log the TruePeak for each output's audio track loudness. */
		PeakCalculation?: AudioNormalizationSettingsPeakCalculation;
		TargetLkfs?: number;
	}

	export enum AudioNormalizationSettingsAlgorithm { ITU_BS_1770_1 = 0, ITU_BS_1770_2 = 1, ITU_BS_1770_3 = 2, ITU_BS_1770_4 = 3 }

	export enum AudioNormalizationSettingsAlgorithmControl { CORRECT_AUDIO = 0, MEASURE_ONLY = 1 }

	export enum AudioNormalizationSettingsLoudnessLogging { LOG = 0, DONT_LOG = 1 }

	export enum AudioNormalizationSettingsPeakCalculation { TRUE_PEAK = 0, NONE = 1 }


	/**When set to FOLLOW_INPUT, if the input contains an ISO 639 audio_type, then that value is passed through to the output. If the input contains no ISO 639 audio_type, the value in Audio Type is included in the output. Otherwise the value in Audio Type is included in the output. Note that this field and audioType are both ignored if audioDescriptionBroadcasterMix is set to BROADCASTER_MIXED_AD. */
	export enum AudioTypeControl { FOLLOW_INPUT = 0, USE_CONFIGURED = 1 }


	/**Specify the language, using the ISO 639-2 three-letter code listed at https://www.loc.gov/standards/iso639-2/php/code_list.php. */
	export enum LanguageCode { ENG = 0, SPA = 1, FRA = 2, DEU = 3, GER = 4, ZHO = 5, ARA = 6, HIN = 7, JPN = 8, RUS = 9, POR = 10, ITA = 11, URD = 12, VIE = 13, KOR = 14, PAN = 15, ABK = 16, AAR = 17, AFR = 18, AKA = 19, SQI = 20, AMH = 21, ARG = 22, HYE = 23, ASM = 24, AVA = 25, AVE = 26, AYM = 27, AZE = 28, BAM = 29, BAK = 30, EUS = 31, BEL = 32, BEN = 33, BIH = 34, BIS = 35, BOS = 36, BRE = 37, BUL = 38, MYA = 39, CAT = 40, KHM = 41, CHA = 42, CHE = 43, NYA = 44, CHU = 45, CHV = 46, COR = 47, COS = 48, CRE = 49, HRV = 50, CES = 51, DAN = 52, DIV = 53, NLD = 54, DZO = 55, ENM = 56, EPO = 57, EST = 58, EWE = 59, FAO = 60, FIJ = 61, FIN = 62, FRM = 63, FUL = 64, GLA = 65, GLG = 66, LUG = 67, KAT = 68, ELL = 69, GRN = 70, GUJ = 71, HAT = 72, HAU = 73, HEB = 74, HER = 75, HMO = 76, HUN = 77, ISL = 78, IDO = 79, IBO = 80, IND = 81, INA = 82, ILE = 83, IKU = 84, IPK = 85, GLE = 86, JAV = 87, KAL = 88, KAN = 89, KAU = 90, KAS = 91, KAZ = 92, KIK = 93, KIN = 94, KIR = 95, KOM = 96, KON = 97, KUA = 98, KUR = 99, LAO = 100, LAT = 101, LAV = 102, LIM = 103, LIN = 104, LIT = 105, LUB = 106, LTZ = 107, MKD = 108, MLG = 109, MSA = 110, MAL = 111, MLT = 112, GLV = 113, MRI = 114, MAR = 115, MAH = 116, MON = 117, NAU = 118, NAV = 119, NDE = 120, NBL = 121, NDO = 122, NEP = 123, SME = 124, NOR = 125, NOB = 126, NNO = 127, OCI = 128, OJI = 129, ORI = 130, ORM = 131, OSS = 132, PLI = 133, FAS = 134, POL = 135, PUS = 136, QUE = 137, QAA = 138, RON = 139, ROH = 140, RUN = 141, SMO = 142, SAG = 143, SAN = 144, SRD = 145, SRB = 146, SNA = 147, III = 148, SND = 149, SIN = 150, SLK = 151, SLV = 152, SOM = 153, SOT = 154, SUN = 155, SWA = 156, SSW = 157, SWE = 158, TGL = 159, TAH = 160, TGK = 161, TAM = 162, TAT = 163, TEL = 164, THA = 165, BOD = 166, TIR = 167, TON = 168, TSO = 169, TSN = 170, TUR = 171, TUK = 172, TWI = 173, UIG = 174, UKR = 175, UZB = 176, VEN = 177, VOL = 178, WLN = 179, CYM = 180, FRY = 181, WOL = 182, XHO = 183, YID = 184, YOR = 185, ZHA = 186, ZUL = 187, ORJ = 188, QPC = 189, TNG = 190 }


	/**Specify which source for language code takes precedence for this audio track. When you choose Follow input (FOLLOW_INPUT), the service uses the language code from the input track if it's present. If there's no languge code on the input track, the service uses the code that you specify in the setting Language code (languageCode or customLanguageCode). When you choose Use configured (USE_CONFIGURED), the service uses the language code that you specify. */
	export enum AudioLanguageCodeControl { FOLLOW_INPUT = 0, USE_CONFIGURED = 1 }


	/**Use Manual audio remixing (RemixSettings) to adjust audio levels for each audio channel in each output of your job. With audio remixing, you can output more or fewer audio channels than your input audio source provides. */
	export interface RemixSettings {

		/**Channel mapping (ChannelMapping) contains the group of fields that hold the remixing value for each channel. Units are in dB. Acceptable values are within the range from -60 (mute) through 6. A setting of 0 passes the input channel unchanged to the output channel (no attenuation or amplification). */
		ChannelMapping?: ChannelMapping;
		ChannelsIn?: number;
		ChannelsOut?: number;
	}


	/**Description of audio output */
	export interface AudioDescription {

		/**Advanced audio normalization settings. Ignore these settings unless you need to comply with a loudness standard. */
		AudioNormalizationSettings?: AudioNormalizationSettings;
		AudioSourceName?: string;
		AudioType?: number;

		/**When set to FOLLOW_INPUT, if the input contains an ISO 639 audio_type, then that value is passed through to the output. If the input contains no ISO 639 audio_type, the value in Audio Type is included in the output. Otherwise the value in Audio Type is included in the output. Note that this field and audioType are both ignored if audioDescriptionBroadcasterMix is set to BROADCASTER_MIXED_AD. */
		AudioTypeControl?: AudioDescriptionAudioTypeControl;

		/**Audio codec settings (CodecSettings) under (AudioDescriptions) contains the group of settings related to audio encoding. The settings in this group vary depending on the value that you choose for Audio codec (Codec). For each codec enum that you choose, define the corresponding settings object. The following lists the codec enum, settings object pairs. * AAC, AacSettings * MP2, Mp2Settings * MP3, Mp3Settings * WAV, WavSettings * AIFF, AiffSettings * AC3, Ac3Settings * EAC3, Eac3Settings * EAC3_ATMOS, Eac3AtmosSettings * VORBIS, VorbisSettings * OPUS, OpusSettings */
		CodecSettings?: AudioCodecSettings;
		CustomLanguageCode?: string;

		/**Specify the language, using the ISO 639-2 three-letter code listed at https://www.loc.gov/standards/iso639-2/php/code_list.php. */
		LanguageCode?: AudioDescriptionLanguageCode;

		/**Specify which source for language code takes precedence for this audio track. When you choose Follow input (FOLLOW_INPUT), the service uses the language code from the input track if it's present. If there's no languge code on the input track, the service uses the code that you specify in the setting Language code (languageCode or customLanguageCode). When you choose Use configured (USE_CONFIGURED), the service uses the language code that you specify. */
		LanguageCodeControl?: AudioDescriptionLanguageCodeControl;

		/**Use Manual audio remixing (RemixSettings) to adjust audio levels for each audio channel in each output of your job. With audio remixing, you can output more or fewer audio channels than your input audio source provides. */
		RemixSettings?: RemixSettings;
		StreamName?: string;
	}

	export enum AudioDescriptionAudioTypeControl { FOLLOW_INPUT = 0, USE_CONFIGURED = 1 }

	export enum AudioDescriptionLanguageCode { ENG = 0, SPA = 1, FRA = 2, DEU = 3, GER = 4, ZHO = 5, ARA = 6, HIN = 7, JPN = 8, RUS = 9, POR = 10, ITA = 11, URD = 12, VIE = 13, KOR = 14, PAN = 15, ABK = 16, AAR = 17, AFR = 18, AKA = 19, SQI = 20, AMH = 21, ARG = 22, HYE = 23, ASM = 24, AVA = 25, AVE = 26, AYM = 27, AZE = 28, BAM = 29, BAK = 30, EUS = 31, BEL = 32, BEN = 33, BIH = 34, BIS = 35, BOS = 36, BRE = 37, BUL = 38, MYA = 39, CAT = 40, KHM = 41, CHA = 42, CHE = 43, NYA = 44, CHU = 45, CHV = 46, COR = 47, COS = 48, CRE = 49, HRV = 50, CES = 51, DAN = 52, DIV = 53, NLD = 54, DZO = 55, ENM = 56, EPO = 57, EST = 58, EWE = 59, FAO = 60, FIJ = 61, FIN = 62, FRM = 63, FUL = 64, GLA = 65, GLG = 66, LUG = 67, KAT = 68, ELL = 69, GRN = 70, GUJ = 71, HAT = 72, HAU = 73, HEB = 74, HER = 75, HMO = 76, HUN = 77, ISL = 78, IDO = 79, IBO = 80, IND = 81, INA = 82, ILE = 83, IKU = 84, IPK = 85, GLE = 86, JAV = 87, KAL = 88, KAN = 89, KAU = 90, KAS = 91, KAZ = 92, KIK = 93, KIN = 94, KIR = 95, KOM = 96, KON = 97, KUA = 98, KUR = 99, LAO = 100, LAT = 101, LAV = 102, LIM = 103, LIN = 104, LIT = 105, LUB = 106, LTZ = 107, MKD = 108, MLG = 109, MSA = 110, MAL = 111, MLT = 112, GLV = 113, MRI = 114, MAR = 115, MAH = 116, MON = 117, NAU = 118, NAV = 119, NDE = 120, NBL = 121, NDO = 122, NEP = 123, SME = 124, NOR = 125, NOB = 126, NNO = 127, OCI = 128, OJI = 129, ORI = 130, ORM = 131, OSS = 132, PLI = 133, FAS = 134, POL = 135, PUS = 136, QUE = 137, QAA = 138, RON = 139, ROH = 140, RUN = 141, SMO = 142, SAG = 143, SAN = 144, SRD = 145, SRB = 146, SNA = 147, III = 148, SND = 149, SIN = 150, SLK = 151, SLV = 152, SOM = 153, SOT = 154, SUN = 155, SWA = 156, SSW = 157, SWE = 158, TGL = 159, TAH = 160, TGK = 161, TAM = 162, TAT = 163, TEL = 164, THA = 165, BOD = 166, TIR = 167, TON = 168, TSO = 169, TSN = 170, TUR = 171, TUK = 172, TWI = 173, UIG = 174, UKR = 175, UZB = 176, VEN = 177, VOL = 178, WLN = 179, CYM = 180, FRY = 181, WOL = 182, XHO = 183, YID = 184, YOR = 185, ZHA = 186, ZUL = 187, ORJ = 188, QPC = 189, TNG = 190 }

	export enum AudioDescriptionLanguageCodeControl { FOLLOW_INPUT = 0, USE_CONFIGURED = 1 }


	/**Choose one of the following audio normalization algorithms: ITU-R BS.1770-1: Ungated loudness. A measurement of ungated average loudness for an entire piece of content, suitable for measurement of short-form content under ATSC recommendation A/85. Supports up to 5.1 audio channels. ITU-R BS.1770-2: Gated loudness. A measurement of gated average loudness compliant with the requirements of EBU-R128. Supports up to 5.1 audio channels. ITU-R BS.1770-3: Modified peak. The same loudness measurement algorithm as 1770-2, with an updated true peak measurement. ITU-R BS.1770-4: Higher channel count. Allows for more audio channels than the other algorithms, including configurations such as 7.1. */
	export enum AudioNormalizationAlgorithm { ITU_BS_1770_1 = 0, ITU_BS_1770_2 = 1, ITU_BS_1770_3 = 2, ITU_BS_1770_4 = 3 }


	/**When enabled the output audio is corrected using the chosen algorithm. If disabled, the audio will be measured but not adjusted. */
	export enum AudioNormalizationAlgorithmControl { CORRECT_AUDIO = 0, MEASURE_ONLY = 1 }


	/**If set to LOG, log each output's audio track loudness to a CSV file. */
	export enum AudioNormalizationLoudnessLogging { LOG = 0, DONT_LOG = 1 }


	/**If set to TRUE_PEAK, calculate and log the TruePeak for each output's audio track loudness. */
	export enum AudioNormalizationPeakCalculation { TRUE_PEAK = 0, NONE = 1 }


	/**Specifies the type of the audio selector. */
	export enum AudioSelectorType { PID = 0, TRACK = 1, LANGUAGE_CODE = 2 }


	/**Selector for Audio */
	export interface AudioSelector {
		CustomLanguageCode?: string;

		/**Enable this setting on one audio selector to set it as the default for the job. The service uses this default for outputs where it can't find the specified input audio. If you don't set a default, those outputs have no audio. */
		DefaultSelection?: AudioSelectorDefaultSelection;
		ExternalAudioFileInput?: string;

		/**Specify the language, using the ISO 639-2 three-letter code listed at https://www.loc.gov/standards/iso639-2/php/code_list.php. */
		LanguageCode?: AudioSelectorLanguageCode;
		Offset?: number;
		Pids?: Array<__integerMin1Max2147483647>;
		ProgramSelection?: number;

		/**Use Manual audio remixing (RemixSettings) to adjust audio levels for each audio channel in each output of your job. With audio remixing, you can output more or fewer audio channels than your input audio source provides. */
		RemixSettings?: RemixSettings;

		/**Specifies the type of the audio selector. */
		SelectorType?: AudioSelectorSelectorType;
		Tracks?: Array<__integerMin1Max2147483647>;
	}

	export enum AudioSelectorDefaultSelection { DEFAULT = 0, NOT_DEFAULT = 1 }

	export enum AudioSelectorLanguageCode { ENG = 0, SPA = 1, FRA = 2, DEU = 3, GER = 4, ZHO = 5, ARA = 6, HIN = 7, JPN = 8, RUS = 9, POR = 10, ITA = 11, URD = 12, VIE = 13, KOR = 14, PAN = 15, ABK = 16, AAR = 17, AFR = 18, AKA = 19, SQI = 20, AMH = 21, ARG = 22, HYE = 23, ASM = 24, AVA = 25, AVE = 26, AYM = 27, AZE = 28, BAM = 29, BAK = 30, EUS = 31, BEL = 32, BEN = 33, BIH = 34, BIS = 35, BOS = 36, BRE = 37, BUL = 38, MYA = 39, CAT = 40, KHM = 41, CHA = 42, CHE = 43, NYA = 44, CHU = 45, CHV = 46, COR = 47, COS = 48, CRE = 49, HRV = 50, CES = 51, DAN = 52, DIV = 53, NLD = 54, DZO = 55, ENM = 56, EPO = 57, EST = 58, EWE = 59, FAO = 60, FIJ = 61, FIN = 62, FRM = 63, FUL = 64, GLA = 65, GLG = 66, LUG = 67, KAT = 68, ELL = 69, GRN = 70, GUJ = 71, HAT = 72, HAU = 73, HEB = 74, HER = 75, HMO = 76, HUN = 77, ISL = 78, IDO = 79, IBO = 80, IND = 81, INA = 82, ILE = 83, IKU = 84, IPK = 85, GLE = 86, JAV = 87, KAL = 88, KAN = 89, KAU = 90, KAS = 91, KAZ = 92, KIK = 93, KIN = 94, KIR = 95, KOM = 96, KON = 97, KUA = 98, KUR = 99, LAO = 100, LAT = 101, LAV = 102, LIM = 103, LIN = 104, LIT = 105, LUB = 106, LTZ = 107, MKD = 108, MLG = 109, MSA = 110, MAL = 111, MLT = 112, GLV = 113, MRI = 114, MAR = 115, MAH = 116, MON = 117, NAU = 118, NAV = 119, NDE = 120, NBL = 121, NDO = 122, NEP = 123, SME = 124, NOR = 125, NOB = 126, NNO = 127, OCI = 128, OJI = 129, ORI = 130, ORM = 131, OSS = 132, PLI = 133, FAS = 134, POL = 135, PUS = 136, QUE = 137, QAA = 138, RON = 139, ROH = 140, RUN = 141, SMO = 142, SAG = 143, SAN = 144, SRD = 145, SRB = 146, SNA = 147, III = 148, SND = 149, SIN = 150, SLK = 151, SLV = 152, SOM = 153, SOT = 154, SUN = 155, SWA = 156, SSW = 157, SWE = 158, TGL = 159, TAH = 160, TGK = 161, TAM = 162, TAT = 163, TEL = 164, THA = 165, BOD = 166, TIR = 167, TON = 168, TSO = 169, TSN = 170, TUR = 171, TUK = 172, TWI = 173, UIG = 174, UKR = 175, UZB = 176, VEN = 177, VOL = 178, WLN = 179, CYM = 180, FRY = 181, WOL = 182, XHO = 183, YID = 184, YOR = 185, ZHA = 186, ZUL = 187, ORJ = 188, QPC = 189, TNG = 190 }

	export enum AudioSelectorSelectorType { PID = 0, TRACK = 1, LANGUAGE_CODE = 2 }


	/**Group of Audio Selectors */
	export interface AudioSelectorGroup {
		AudioSelectorNames?: Array<__stringMin1>;
	}


	/**Adaptive quantization. Allows intra-frame quantizers to vary to improve visual quality. */
	export enum Av1AdaptiveQuantization { OFF = 0, LOW = 1, MEDIUM = 2, HIGH = 3, HIGHER = 4, MAX = 5 }


	/**If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator. */
	export enum Av1FramerateControl { INITIALIZE_FROM_SOURCE = 0, SPECIFIED = 1 }


	/**When set to INTERPOLATE, produces smoother motion during frame rate conversion. */
	export enum Av1FramerateConversionAlgorithm { DUPLICATE_DROP = 0, INTERPOLATE = 1 }


	/**Settings for quality-defined variable bitrate encoding with the AV1 codec. Required when you set Rate control mode to QVBR. Not valid when you set Rate control mode to a value other than QVBR, or when you don't define Rate control mode. */
	export interface Av1QvbrSettings {
		QvbrQualityLevel?: number;
		QvbrQualityLevelFineTune?: number;
	}


	/**'With AV1 outputs, for rate control mode, MediaConvert supports only quality-defined variable bitrate (QVBR). You can''t use CBR or VBR.' */
	export enum Av1RateControlMode { QVBR = 0 }


	/**Adjust quantization within each frame based on spatial variation of content complexity. */
	export enum Av1SpatialAdaptiveQuantization { DISABLED = 0, ENABLED = 1 }


	/**Required when you set Codec, under VideoDescription>CodecSettings to the value AV1. */
	export interface Av1Settings {

		/**Adaptive quantization. Allows intra-frame quantizers to vary to improve visual quality. */
		AdaptiveQuantization?: Av1SettingsAdaptiveQuantization;

		/**If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator. */
		FramerateControl?: Av1SettingsFramerateControl;

		/**When set to INTERPOLATE, produces smoother motion during frame rate conversion. */
		FramerateConversionAlgorithm?: Av1SettingsFramerateConversionAlgorithm;
		FramerateDenominator?: number;
		FramerateNumerator?: number;
		GopSize?: number;
		MaxBitrate?: number;
		NumberBFramesBetweenReferenceFrames?: number;

		/**Settings for quality-defined variable bitrate encoding with the AV1 codec. Required when you set Rate control mode to QVBR. Not valid when you set Rate control mode to a value other than QVBR, or when you don't define Rate control mode. */
		QvbrSettings?: Av1QvbrSettings;

		/**'With AV1 outputs, for rate control mode, MediaConvert supports only quality-defined variable bitrate (QVBR). You can''t use CBR or VBR.' */
		RateControlMode?: Av1SettingsRateControlMode;
		Slices?: number;

		/**Adjust quantization within each frame based on spatial variation of content complexity. */
		SpatialAdaptiveQuantization?: Av1SettingsSpatialAdaptiveQuantization;
	}

	export enum Av1SettingsAdaptiveQuantization { OFF = 0, LOW = 1, MEDIUM = 2, HIGH = 3, HIGHER = 4, MAX = 5 }

	export enum Av1SettingsFramerateControl { INITIALIZE_FROM_SOURCE = 0, SPECIFIED = 1 }

	export enum Av1SettingsFramerateConversionAlgorithm { DUPLICATE_DROP = 0, INTERPOLATE = 1 }

	export enum Av1SettingsRateControlMode { QVBR = 0 }

	export enum Av1SettingsSpatialAdaptiveQuantization { DISABLED = 0, ENABLED = 1 }


	/**The tag type that AWS Billing and Cost Management will use to sort your AWS Elemental MediaConvert costs on any billing report that you set up. */
	export enum BillingTagsSource { QUEUE = 0, PRESET = 1, JOB_TEMPLATE = 2, JOB = 3 }


	/**If no explicit x_position or y_position is provided, setting alignment to centered will place the captions at the bottom center of the output. Similarly, setting a left alignment will align captions to the bottom left of the output. If x and y positions are given in conjunction with the alignment parameter, the font will be justified (either left or centered) relative to those coordinates. This option is not valid for source captions that are STL, 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match. */
	export enum BurninSubtitleAlignment { CENTERED = 0, LEFT = 1 }


	/**
	 * Specifies the color of the rectangle behind the captions.
	 * All burn-in and DVB-Sub font settings must match.
	 */
	export enum BurninSubtitleBackgroundColor { NONE = 0, BLACK = 1, WHITE = 2 }


	/**Specifies the color of the burned-in captions. This option is not valid for source captions that are STL, 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match. */
	export enum BurninSubtitleFontColor { WHITE = 0, BLACK = 1, YELLOW = 2, RED = 3, GREEN = 4, BLUE = 5 }


	/**Provide the font script, using an ISO 15924 script code, if the LanguageCode is not sufficient for determining the script type. Where LanguageCode or CustomLanguageCode is sufficient, use "AUTOMATIC" or leave unset. */
	export enum FontScript { AUTOMATIC = 0, HANS = 1, HANT = 2 }


	/**Specifies font outline color. This option is not valid for source captions that are either 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match. */
	export enum BurninSubtitleOutlineColor { BLACK = 0, WHITE = 1, YELLOW = 2, RED = 3, GREEN = 4, BLUE = 5 }


	/**
	 * Specifies the color of the shadow cast by the captions.
	 * All burn-in and DVB-Sub font settings must match.
	 */
	export enum BurninSubtitleShadowColor { NONE = 0, BLACK = 1, WHITE = 2 }


	/**Only applies to jobs with input captions in Teletext or STL formats. Specify whether the spacing between letters in your captions is set by the captions grid or varies depending on letter width. Choose fixed grid to conform to the spacing specified in the captions file more accurately. Choose proportional to make the text easier to read if the captions are closed caption. */
	export enum BurninSubtitleTeletextSpacing { FIXED_GRID = 0, PROPORTIONAL = 1 }


	/**Burn-In Destination Settings. */
	export interface BurninDestinationSettings {

		/**If no explicit x_position or y_position is provided, setting alignment to centered will place the captions at the bottom center of the output. Similarly, setting a left alignment will align captions to the bottom left of the output. If x and y positions are given in conjunction with the alignment parameter, the font will be justified (either left or centered) relative to those coordinates. This option is not valid for source captions that are STL, 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match. */
		Alignment?: BurninDestinationSettingsAlignment;

		/**
		 * Specifies the color of the rectangle behind the captions.
		 * All burn-in and DVB-Sub font settings must match.
		 */
		BackgroundColor?: BurninDestinationSettingsBackgroundColor;
		BackgroundOpacity?: number;

		/**Specifies the color of the burned-in captions. This option is not valid for source captions that are STL, 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match. */
		FontColor?: BurninDestinationSettingsFontColor;
		FontOpacity?: number;
		FontResolution?: number;

		/**Provide the font script, using an ISO 15924 script code, if the LanguageCode is not sufficient for determining the script type. Where LanguageCode or CustomLanguageCode is sufficient, use "AUTOMATIC" or leave unset. */
		FontScript?: BurninDestinationSettingsFontScript;
		FontSize?: number;

		/**Specifies font outline color. This option is not valid for source captions that are either 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match. */
		OutlineColor?: BurninDestinationSettingsOutlineColor;
		OutlineSize?: number;

		/**
		 * Specifies the color of the shadow cast by the captions.
		 * All burn-in and DVB-Sub font settings must match.
		 */
		ShadowColor?: BurninDestinationSettingsShadowColor;
		ShadowOpacity?: number;
		ShadowXOffset?: number;
		ShadowYOffset?: number;

		/**Only applies to jobs with input captions in Teletext or STL formats. Specify whether the spacing between letters in your captions is set by the captions grid or varies depending on letter width. Choose fixed grid to conform to the spacing specified in the captions file more accurately. Choose proportional to make the text easier to read if the captions are closed caption. */
		TeletextSpacing?: BurninDestinationSettingsTeletextSpacing;
		XPosition?: number;
		YPosition?: number;
	}

	export enum BurninDestinationSettingsAlignment { CENTERED = 0, LEFT = 1 }

	export enum BurninDestinationSettingsBackgroundColor { NONE = 0, BLACK = 1, WHITE = 2 }

	export enum BurninDestinationSettingsFontColor { WHITE = 0, BLACK = 1, YELLOW = 2, RED = 3, GREEN = 4, BLUE = 5 }

	export enum BurninDestinationSettingsFontScript { AUTOMATIC = 0, HANS = 1, HANT = 2 }

	export enum BurninDestinationSettingsOutlineColor { BLACK = 0, WHITE = 1, YELLOW = 2, RED = 3, GREEN = 4, BLUE = 5 }

	export enum BurninDestinationSettingsShadowColor { NONE = 0, BLACK = 1, WHITE = 2 }

	export enum BurninDestinationSettingsTeletextSpacing { FIXED_GRID = 0, PROPORTIONAL = 1 }


	/**Specific settings required by destination type. Note that burnin_destination_settings are not available if the source of the caption data is Embedded or Teletext. */
	export interface CaptionDestinationSettings {

		/**Burn-In Destination Settings. */
		BurninDestinationSettings?: BurninDestinationSettings;

		/**Specify the format for this set of captions on this output. The default format is embedded without SCTE-20. Other options are embedded with SCTE-20, burn-in, DVB-sub, IMSC, SCC, SRT, teletext, TTML, and web-VTT. If you are using SCTE-20, choose SCTE-20 plus embedded (SCTE20_PLUS_EMBEDDED) to create an output that complies with the SCTE-43 spec. To create a non-compliant output where the embedded captions come first, choose Embedded plus SCTE-20 (EMBEDDED_PLUS_SCTE20). */
		DestinationType?: CaptionDestinationSettingsDestinationType;

		/**DVB-Sub Destination Settings */
		DvbSubDestinationSettings?: DvbSubDestinationSettings;

		/**Settings specific to embedded/ancillary caption outputs, including 608/708 Channel destination number. */
		EmbeddedDestinationSettings?: EmbeddedDestinationSettings;

		/**Settings specific to IMSC caption outputs. */
		ImscDestinationSettings?: ImscDestinationSettings;

		/**Settings for SCC caption output. */
		SccDestinationSettings?: SccDestinationSettings;

		/**Settings for Teletext caption output */
		TeletextDestinationSettings?: TeletextDestinationSettings;

		/**Settings specific to TTML caption outputs, including Pass style information (TtmlStylePassthrough). */
		TtmlDestinationSettings?: TtmlDestinationSettings;
	}

	export enum CaptionDestinationSettingsDestinationType { BURN_IN = 0, DVB_SUB = 1, EMBEDDED = 2, EMBEDDED_PLUS_SCTE20 = 3, IMSC = 4, SCTE20_PLUS_EMBEDDED = 5, SCC = 6, SRT = 7, SMI = 8, TELETEXT = 9, TTML = 10, WEBVTT = 11 }


	/**Description of Caption output */
	export interface CaptionDescription {
		CaptionSelectorName?: string;
		CustomLanguageCode?: string;

		/**Specific settings required by destination type. Note that burnin_destination_settings are not available if the source of the caption data is Embedded or Teletext. */
		DestinationSettings?: CaptionDestinationSettings;

		/**Specify the language, using the ISO 639-2 three-letter code listed at https://www.loc.gov/standards/iso639-2/php/code_list.php. */
		LanguageCode?: CaptionDescriptionLanguageCode;
		LanguageDescription?: string;
	}

	export enum CaptionDescriptionLanguageCode { ENG = 0, SPA = 1, FRA = 2, DEU = 3, GER = 4, ZHO = 5, ARA = 6, HIN = 7, JPN = 8, RUS = 9, POR = 10, ITA = 11, URD = 12, VIE = 13, KOR = 14, PAN = 15, ABK = 16, AAR = 17, AFR = 18, AKA = 19, SQI = 20, AMH = 21, ARG = 22, HYE = 23, ASM = 24, AVA = 25, AVE = 26, AYM = 27, AZE = 28, BAM = 29, BAK = 30, EUS = 31, BEL = 32, BEN = 33, BIH = 34, BIS = 35, BOS = 36, BRE = 37, BUL = 38, MYA = 39, CAT = 40, KHM = 41, CHA = 42, CHE = 43, NYA = 44, CHU = 45, CHV = 46, COR = 47, COS = 48, CRE = 49, HRV = 50, CES = 51, DAN = 52, DIV = 53, NLD = 54, DZO = 55, ENM = 56, EPO = 57, EST = 58, EWE = 59, FAO = 60, FIJ = 61, FIN = 62, FRM = 63, FUL = 64, GLA = 65, GLG = 66, LUG = 67, KAT = 68, ELL = 69, GRN = 70, GUJ = 71, HAT = 72, HAU = 73, HEB = 74, HER = 75, HMO = 76, HUN = 77, ISL = 78, IDO = 79, IBO = 80, IND = 81, INA = 82, ILE = 83, IKU = 84, IPK = 85, GLE = 86, JAV = 87, KAL = 88, KAN = 89, KAU = 90, KAS = 91, KAZ = 92, KIK = 93, KIN = 94, KIR = 95, KOM = 96, KON = 97, KUA = 98, KUR = 99, LAO = 100, LAT = 101, LAV = 102, LIM = 103, LIN = 104, LIT = 105, LUB = 106, LTZ = 107, MKD = 108, MLG = 109, MSA = 110, MAL = 111, MLT = 112, GLV = 113, MRI = 114, MAR = 115, MAH = 116, MON = 117, NAU = 118, NAV = 119, NDE = 120, NBL = 121, NDO = 122, NEP = 123, SME = 124, NOR = 125, NOB = 126, NNO = 127, OCI = 128, OJI = 129, ORI = 130, ORM = 131, OSS = 132, PLI = 133, FAS = 134, POL = 135, PUS = 136, QUE = 137, QAA = 138, RON = 139, ROH = 140, RUN = 141, SMO = 142, SAG = 143, SAN = 144, SRD = 145, SRB = 146, SNA = 147, III = 148, SND = 149, SIN = 150, SLK = 151, SLV = 152, SOM = 153, SOT = 154, SUN = 155, SWA = 156, SSW = 157, SWE = 158, TGL = 159, TAH = 160, TGK = 161, TAM = 162, TAT = 163, TEL = 164, THA = 165, BOD = 166, TIR = 167, TON = 168, TSO = 169, TSN = 170, TUR = 171, TUK = 172, TWI = 173, UIG = 174, UKR = 175, UZB = 176, VEN = 177, VOL = 178, WLN = 179, CYM = 180, FRY = 181, WOL = 182, XHO = 183, YID = 184, YOR = 185, ZHA = 186, ZUL = 187, ORJ = 188, QPC = 189, TNG = 190 }


	/**Caption Description for preset */
	export interface CaptionDescriptionPreset {
		CustomLanguageCode?: string;

		/**Specific settings required by destination type. Note that burnin_destination_settings are not available if the source of the caption data is Embedded or Teletext. */
		DestinationSettings?: CaptionDestinationSettings;

		/**Specify the language, using the ISO 639-2 three-letter code listed at https://www.loc.gov/standards/iso639-2/php/code_list.php. */
		LanguageCode?: CaptionDescriptionPresetLanguageCode;
		LanguageDescription?: string;
	}

	export enum CaptionDescriptionPresetLanguageCode { ENG = 0, SPA = 1, FRA = 2, DEU = 3, GER = 4, ZHO = 5, ARA = 6, HIN = 7, JPN = 8, RUS = 9, POR = 10, ITA = 11, URD = 12, VIE = 13, KOR = 14, PAN = 15, ABK = 16, AAR = 17, AFR = 18, AKA = 19, SQI = 20, AMH = 21, ARG = 22, HYE = 23, ASM = 24, AVA = 25, AVE = 26, AYM = 27, AZE = 28, BAM = 29, BAK = 30, EUS = 31, BEL = 32, BEN = 33, BIH = 34, BIS = 35, BOS = 36, BRE = 37, BUL = 38, MYA = 39, CAT = 40, KHM = 41, CHA = 42, CHE = 43, NYA = 44, CHU = 45, CHV = 46, COR = 47, COS = 48, CRE = 49, HRV = 50, CES = 51, DAN = 52, DIV = 53, NLD = 54, DZO = 55, ENM = 56, EPO = 57, EST = 58, EWE = 59, FAO = 60, FIJ = 61, FIN = 62, FRM = 63, FUL = 64, GLA = 65, GLG = 66, LUG = 67, KAT = 68, ELL = 69, GRN = 70, GUJ = 71, HAT = 72, HAU = 73, HEB = 74, HER = 75, HMO = 76, HUN = 77, ISL = 78, IDO = 79, IBO = 80, IND = 81, INA = 82, ILE = 83, IKU = 84, IPK = 85, GLE = 86, JAV = 87, KAL = 88, KAN = 89, KAU = 90, KAS = 91, KAZ = 92, KIK = 93, KIN = 94, KIR = 95, KOM = 96, KON = 97, KUA = 98, KUR = 99, LAO = 100, LAT = 101, LAV = 102, LIM = 103, LIN = 104, LIT = 105, LUB = 106, LTZ = 107, MKD = 108, MLG = 109, MSA = 110, MAL = 111, MLT = 112, GLV = 113, MRI = 114, MAR = 115, MAH = 116, MON = 117, NAU = 118, NAV = 119, NDE = 120, NBL = 121, NDO = 122, NEP = 123, SME = 124, NOR = 125, NOB = 126, NNO = 127, OCI = 128, OJI = 129, ORI = 130, ORM = 131, OSS = 132, PLI = 133, FAS = 134, POL = 135, PUS = 136, QUE = 137, QAA = 138, RON = 139, ROH = 140, RUN = 141, SMO = 142, SAG = 143, SAN = 144, SRD = 145, SRB = 146, SNA = 147, III = 148, SND = 149, SIN = 150, SLK = 151, SLV = 152, SOM = 153, SOT = 154, SUN = 155, SWA = 156, SSW = 157, SWE = 158, TGL = 159, TAH = 160, TGK = 161, TAM = 162, TAT = 163, TEL = 164, THA = 165, BOD = 166, TIR = 167, TON = 168, TSO = 169, TSN = 170, TUR = 171, TUK = 172, TWI = 173, UIG = 174, UKR = 175, UZB = 176, VEN = 177, VOL = 178, WLN = 179, CYM = 180, FRY = 181, WOL = 182, XHO = 183, YID = 184, YOR = 185, ZHA = 186, ZUL = 187, ORJ = 188, QPC = 189, TNG = 190 }


	/**Specify the format for this set of captions on this output. The default format is embedded without SCTE-20. Other options are embedded with SCTE-20, burn-in, DVB-sub, IMSC, SCC, SRT, teletext, TTML, and web-VTT. If you are using SCTE-20, choose SCTE-20 plus embedded (SCTE20_PLUS_EMBEDDED) to create an output that complies with the SCTE-43 spec. To create a non-compliant output where the embedded captions come first, choose Embedded plus SCTE-20 (EMBEDDED_PLUS_SCTE20). */
	export enum CaptionDestinationType { BURN_IN = 0, DVB_SUB = 1, EMBEDDED = 2, EMBEDDED_PLUS_SCTE20 = 3, IMSC = 4, SCTE20_PLUS_EMBEDDED = 5, SCC = 6, SRT = 7, SMI = 8, TELETEXT = 9, TTML = 10, WEBVTT = 11 }


	/**DVB-Sub Destination Settings */
	export interface DvbSubDestinationSettings {

		/**If no explicit x_position or y_position is provided, setting alignment to centered will place the captions at the bottom center of the output. Similarly, setting a left alignment will align captions to the bottom left of the output. If x and y positions are given in conjunction with the alignment parameter, the font will be justified (either left or centered) relative to those coordinates. This option is not valid for source captions that are STL, 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match. */
		Alignment?: DvbSubDestinationSettingsAlignment;

		/**
		 * Specifies the color of the rectangle behind the captions.
		 * All burn-in and DVB-Sub font settings must match.
		 */
		BackgroundColor?: DvbSubDestinationSettingsBackgroundColor;
		BackgroundOpacity?: number;

		/**Specifies the color of the burned-in captions. This option is not valid for source captions that are STL, 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match. */
		FontColor?: DvbSubDestinationSettingsFontColor;
		FontOpacity?: number;
		FontResolution?: number;

		/**Provide the font script, using an ISO 15924 script code, if the LanguageCode is not sufficient for determining the script type. Where LanguageCode or CustomLanguageCode is sufficient, use "AUTOMATIC" or leave unset. */
		FontScript?: DvbSubDestinationSettingsFontScript;
		FontSize?: number;

		/**Specifies font outline color. This option is not valid for source captions that are either 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match. */
		OutlineColor?: DvbSubDestinationSettingsOutlineColor;
		OutlineSize?: number;

		/**
		 * Specifies the color of the shadow cast by the captions.
		 * All burn-in and DVB-Sub font settings must match.
		 */
		ShadowColor?: DvbSubDestinationSettingsShadowColor;
		ShadowOpacity?: number;
		ShadowXOffset?: number;
		ShadowYOffset?: number;

		/**Specify whether your DVB subtitles are standard or for hearing impaired. Choose hearing impaired if your subtitles include audio descriptions and dialogue. Choose standard if your subtitles include only dialogue. */
		SubtitlingType?: DvbSubDestinationSettingsSubtitlingType;

		/**Only applies to jobs with input captions in Teletext or STL formats. Specify whether the spacing between letters in your captions is set by the captions grid or varies depending on letter width. Choose fixed grid to conform to the spacing specified in the captions file more accurately. Choose proportional to make the text easier to read if the captions are closed caption. */
		TeletextSpacing?: DvbSubDestinationSettingsTeletextSpacing;
		XPosition?: number;
		YPosition?: number;
	}

	export enum DvbSubDestinationSettingsAlignment { CENTERED = 0, LEFT = 1 }

	export enum DvbSubDestinationSettingsBackgroundColor { NONE = 0, BLACK = 1, WHITE = 2 }

	export enum DvbSubDestinationSettingsFontColor { WHITE = 0, BLACK = 1, YELLOW = 2, RED = 3, GREEN = 4, BLUE = 5 }

	export enum DvbSubDestinationSettingsFontScript { AUTOMATIC = 0, HANS = 1, HANT = 2 }

	export enum DvbSubDestinationSettingsOutlineColor { BLACK = 0, WHITE = 1, YELLOW = 2, RED = 3, GREEN = 4, BLUE = 5 }

	export enum DvbSubDestinationSettingsShadowColor { NONE = 0, BLACK = 1, WHITE = 2 }

	export enum DvbSubDestinationSettingsSubtitlingType { HEARING_IMPAIRED = 0, STANDARD = 1 }

	export enum DvbSubDestinationSettingsTeletextSpacing { FIXED_GRID = 0, PROPORTIONAL = 1 }


	/**Settings specific to embedded/ancillary caption outputs, including 608/708 Channel destination number. */
	export interface EmbeddedDestinationSettings {
		Destination608ChannelNumber?: number;
		Destination708ServiceNumber?: number;
	}


	/**Settings specific to IMSC caption outputs. */
	export interface ImscDestinationSettings {

		/**Keep this setting enabled to have MediaConvert use the font style and position information from the captions source in the output. This option is available only when your input captions are IMSC, SMPTE-TT, or TTML. Disable this setting for simplified output captions. */
		StylePassthrough?: ImscDestinationSettingsStylePassthrough;
	}

	export enum ImscDestinationSettingsStylePassthrough { ENABLED = 0, DISABLED = 1 }


	/**Settings for SCC caption output. */
	export interface SccDestinationSettings {

		/**Set Framerate (SccDestinationFramerate) to make sure that the captions and the video are synchronized in the output. Specify a frame rate that matches the frame rate of the associated video. If the video frame rate is 29.97, choose 29.97 dropframe (FRAMERATE_29_97_DROPFRAME) only if the video has video_insertion=true and drop_frame_timecode=true; otherwise, choose 29.97 non-dropframe (FRAMERATE_29_97_NON_DROPFRAME). */
		Framerate?: SccDestinationSettingsFramerate;
	}

	export enum SccDestinationSettingsFramerate { FRAMERATE_23_97 = 0, FRAMERATE_24 = 1, FRAMERATE_25 = 2, FRAMERATE_29_97_DROPFRAME = 3, FRAMERATE_29_97_NON_DROPFRAME = 4 }


	/**Settings for Teletext caption output */
	export interface TeletextDestinationSettings {
		PageNumber?: string;
		PageTypes?: Array<TeletextPageType>;
	}


	/**Settings specific to TTML caption outputs, including Pass style information (TtmlStylePassthrough). */
	export interface TtmlDestinationSettings {

		/**Pass through style and position information from a TTML-like input source (TTML, SMPTE-TT) to the TTML output. */
		StylePassthrough?: TtmlDestinationSettingsStylePassthrough;
	}

	export enum TtmlDestinationSettingsStylePassthrough { ENABLED = 0, DISABLED = 1 }


	/**If your input captions are SCC, TTML, STL, SMI, SRT, or IMSC in an xml file, specify the URI of the input captions source file. If your input captions are IMSC in an IMF package, use TrackSourceSettings instead of FileSoureSettings. */
	export interface CaptionSourceSettings {

		/**Settings for ancillary captions source. */
		AncillarySourceSettings?: AncillarySourceSettings;

		/**DVB Sub Source Settings */
		DvbSubSourceSettings?: DvbSubSourceSettings;

		/**Settings for embedded captions Source */
		EmbeddedSourceSettings?: EmbeddedSourceSettings;

		/**If your input captions are SCC, SMI, SRT, STL, TTML, or IMSC 1.1 in an xml file, specify the URI of the input caption source file. If your caption source is IMSC in an IMF package, use TrackSourceSettings instead of FileSoureSettings. */
		FileSourceSettings?: FileSourceSettings;

		/**Use Source (SourceType) to identify the format of your input captions.  The service cannot auto-detect caption format. */
		SourceType?: CaptionSourceSettingsSourceType;

		/**Settings specific to Teletext caption sources, including Page number. */
		TeletextSourceSettings?: TeletextSourceSettings;

		/**Settings specific to caption sources that are specified by track number. Currently, this is only IMSC captions in an IMF package. If your caption source is IMSC 1.1 in a separate xml file, use FileSourceSettings instead of TrackSourceSettings. */
		TrackSourceSettings?: TrackSourceSettings;
	}

	export enum CaptionSourceSettingsSourceType { ANCILLARY = 0, DVB_SUB = 1, EMBEDDED = 2, SCTE20 = 3, SCC = 4, TTML = 5, STL = 6, SRT = 7, SMI = 8, TELETEXT = 9, NULL_SOURCE = 10, IMSC = 11 }


	/**Set up captions in your outputs by first selecting them from your input here. */
	export interface CaptionSelector {
		CustomLanguageCode?: string;

		/**Specify the language, using the ISO 639-2 three-letter code listed at https://www.loc.gov/standards/iso639-2/php/code_list.php. */
		LanguageCode?: CaptionSelectorLanguageCode;

		/**If your input captions are SCC, TTML, STL, SMI, SRT, or IMSC in an xml file, specify the URI of the input captions source file. If your input captions are IMSC in an IMF package, use TrackSourceSettings instead of FileSoureSettings. */
		SourceSettings?: CaptionSourceSettings;
	}

	export enum CaptionSelectorLanguageCode { ENG = 0, SPA = 1, FRA = 2, DEU = 3, GER = 4, ZHO = 5, ARA = 6, HIN = 7, JPN = 8, RUS = 9, POR = 10, ITA = 11, URD = 12, VIE = 13, KOR = 14, PAN = 15, ABK = 16, AAR = 17, AFR = 18, AKA = 19, SQI = 20, AMH = 21, ARG = 22, HYE = 23, ASM = 24, AVA = 25, AVE = 26, AYM = 27, AZE = 28, BAM = 29, BAK = 30, EUS = 31, BEL = 32, BEN = 33, BIH = 34, BIS = 35, BOS = 36, BRE = 37, BUL = 38, MYA = 39, CAT = 40, KHM = 41, CHA = 42, CHE = 43, NYA = 44, CHU = 45, CHV = 46, COR = 47, COS = 48, CRE = 49, HRV = 50, CES = 51, DAN = 52, DIV = 53, NLD = 54, DZO = 55, ENM = 56, EPO = 57, EST = 58, EWE = 59, FAO = 60, FIJ = 61, FIN = 62, FRM = 63, FUL = 64, GLA = 65, GLG = 66, LUG = 67, KAT = 68, ELL = 69, GRN = 70, GUJ = 71, HAT = 72, HAU = 73, HEB = 74, HER = 75, HMO = 76, HUN = 77, ISL = 78, IDO = 79, IBO = 80, IND = 81, INA = 82, ILE = 83, IKU = 84, IPK = 85, GLE = 86, JAV = 87, KAL = 88, KAN = 89, KAU = 90, KAS = 91, KAZ = 92, KIK = 93, KIN = 94, KIR = 95, KOM = 96, KON = 97, KUA = 98, KUR = 99, LAO = 100, LAT = 101, LAV = 102, LIM = 103, LIN = 104, LIT = 105, LUB = 106, LTZ = 107, MKD = 108, MLG = 109, MSA = 110, MAL = 111, MLT = 112, GLV = 113, MRI = 114, MAR = 115, MAH = 116, MON = 117, NAU = 118, NAV = 119, NDE = 120, NBL = 121, NDO = 122, NEP = 123, SME = 124, NOR = 125, NOB = 126, NNO = 127, OCI = 128, OJI = 129, ORI = 130, ORM = 131, OSS = 132, PLI = 133, FAS = 134, POL = 135, PUS = 136, QUE = 137, QAA = 138, RON = 139, ROH = 140, RUN = 141, SMO = 142, SAG = 143, SAN = 144, SRD = 145, SRB = 146, SNA = 147, III = 148, SND = 149, SIN = 150, SLK = 151, SLV = 152, SOM = 153, SOT = 154, SUN = 155, SWA = 156, SSW = 157, SWE = 158, TGL = 159, TAH = 160, TGK = 161, TAM = 162, TAT = 163, TEL = 164, THA = 165, BOD = 166, TIR = 167, TON = 168, TSO = 169, TSN = 170, TUR = 171, TUK = 172, TWI = 173, UIG = 174, UKR = 175, UZB = 176, VEN = 177, VOL = 178, WLN = 179, CYM = 180, FRY = 181, WOL = 182, XHO = 183, YID = 184, YOR = 185, ZHA = 186, ZUL = 187, ORJ = 188, QPC = 189, TNG = 190 }


	/**Ignore this setting unless your input captions format is SCC. To have the service compensate for differing frame rates between your input captions and input video, specify the frame rate of the captions file. Specify this value as a fraction, using the settings Framerate numerator (framerateNumerator) and Framerate denominator (framerateDenominator). For example, you might specify 24 / 1 for 24 fps, 25 / 1 for 25 fps, 24000 / 1001 for 23.976 fps, or 30000 / 1001 for 29.97 fps. */
	export interface CaptionSourceFramerate {
		FramerateDenominator?: number;
		FramerateNumerator?: number;
	}


	/**DVB Sub Source Settings */
	export interface DvbSubSourceSettings {
		Pid?: number;
	}


	/**Settings for embedded captions Source */
	export interface EmbeddedSourceSettings {

		/**Specify whether this set of input captions appears in your outputs in both 608 and 708 format. If you choose Upconvert (UPCONVERT), MediaConvert includes the captions data in two ways: it passes the 608 data through using the 608 compatibility bytes fields of the 708 wrapper, and it also translates the 608 data into 708. */
		Convert608To708?: EmbeddedSourceSettingsConvert608To708;
		Source608ChannelNumber?: number;
		Source608TrackNumber?: number;

		/**By default, the service terminates any unterminated captions at the end of each input. If you want the caption to continue onto your next input, disable this setting. */
		TerminateCaptions?: EmbeddedSourceSettingsTerminateCaptions;
	}

	export enum EmbeddedSourceSettingsConvert608To708 { UPCONVERT = 0, DISABLED = 1 }

	export enum EmbeddedSourceSettingsTerminateCaptions { END_OF_INPUT = 0, DISABLED = 1 }


	/**If your input captions are SCC, SMI, SRT, STL, TTML, or IMSC 1.1 in an xml file, specify the URI of the input caption source file. If your caption source is IMSC in an IMF package, use TrackSourceSettings instead of FileSoureSettings. */
	export interface FileSourceSettings {

		/**Specify whether this set of input captions appears in your outputs in both 608 and 708 format. If you choose Upconvert (UPCONVERT), MediaConvert includes the captions data in two ways: it passes the 608 data through using the 608 compatibility bytes fields of the 708 wrapper, and it also translates the 608 data into 708. */
		Convert608To708?: FileSourceSettingsConvert608To708;

		/**Ignore this setting unless your input captions format is SCC. To have the service compensate for differing frame rates between your input captions and input video, specify the frame rate of the captions file. Specify this value as a fraction, using the settings Framerate numerator (framerateNumerator) and Framerate denominator (framerateDenominator). For example, you might specify 24 / 1 for 24 fps, 25 / 1 for 25 fps, 24000 / 1001 for 23.976 fps, or 30000 / 1001 for 29.97 fps. */
		Framerate?: CaptionSourceFramerate;
		SourceFile?: string;
		TimeDelta?: number;
	}

	export enum FileSourceSettingsConvert608To708 { UPCONVERT = 0, DISABLED = 1 }


	/**Use Source (SourceType) to identify the format of your input captions.  The service cannot auto-detect caption format. */
	export enum CaptionSourceType { ANCILLARY = 0, DVB_SUB = 1, EMBEDDED = 2, SCTE20 = 3, SCC = 4, TTML = 5, STL = 6, SRT = 7, SMI = 8, TELETEXT = 9, NULL_SOURCE = 10, IMSC = 11 }


	/**Settings specific to Teletext caption sources, including Page number. */
	export interface TeletextSourceSettings {
		PageNumber?: string;
	}


	/**Settings specific to caption sources that are specified by track number. Currently, this is only IMSC captions in an IMF package. If your caption source is IMSC 1.1 in a separate xml file, use FileSourceSettings instead of TrackSourceSettings. */
	export interface TrackSourceSettings {
		TrackNumber?: number;
	}


	/**Channel mapping (ChannelMapping) contains the group of fields that hold the remixing value for each channel. Units are in dB. Acceptable values are within the range from -60 (mute) through 6. A setting of 0 passes the input channel unchanged to the output channel (no attenuation or amplification). */
	export interface ChannelMapping {
		OutputChannels?: Array<OutputChannelMapping>;
	}


	/**Specify the details for each pair of HLS and DASH additional manifests that you want the service to generate for this CMAF output group. Each pair of manifests can reference a different subset of outputs in the group. */
	export interface CmafAdditionalManifest {
		ManifestNameModifier?: string;
		SelectedOutputs?: Array<__stringMin1>;
	}


	/**When set to ENABLED, sets #EXT-X-ALLOW-CACHE:no tag, which prevents client from saving media segments for later replay. */
	export enum CmafClientCache { DISABLED = 0, ENABLED = 1 }


	/**Specification to use (RFC-6381 or the default RFC-4281) during m3u8 playlist generation. */
	export enum CmafCodecSpecification { RFC_6381 = 0, RFC_4281 = 1 }


	/**Specify the encryption scheme that you want the service to use when encrypting your CMAF segments. Choose AES-CBC subsample (SAMPLE-AES) or AES_CTR (AES-CTR). */
	export enum CmafEncryptionType { SAMPLE_AES = 0, AES_CTR = 1 }


	/**When you use DRM with CMAF outputs, choose whether the service writes the 128-bit encryption initialization vector in the HLS and DASH manifests. */
	export enum CmafInitializationVectorInManifest { INCLUDE = 0, EXCLUDE = 1 }


	/**If your output group type is CMAF, use these settings when doing DRM encryption with a SPEKE-compliant key provider. If your output group type is HLS, DASH, or Microsoft Smooth, use the SpekeKeyProvider settings instead. */
	export interface SpekeKeyProviderCmaf {
		CertificateArn?: string;
		DashSignaledSystemIds?: Array<__stringMin36Max36Pattern09aFAF809aFAF409aFAF409aFAF409aFAF12>;
		HlsSignaledSystemIds?: Array<__stringMin36Max36Pattern09aFAF809aFAF409aFAF409aFAF409aFAF12>;
		ResourceId?: string;
		Url?: string;
	}


	/**Use these settings to set up encryption with a static key provider. */
	export interface StaticKeyProvider {
		KeyFormat?: string;
		KeyFormatVersions?: string;
		StaticKeyValue?: string;
		Url?: string;
	}


	/**Specify whether your DRM encryption key is static or from a key provider that follows the SPEKE standard. For more information about SPEKE, see https://docs.aws.amazon.com/speke/latest/documentation/what-is-speke.html. */
	export enum CmafKeyProviderType { SPEKE = 0, STATIC_KEY = 1 }


	/**Settings for CMAF encryption */
	export interface CmafEncryptionSettings {
		ConstantInitializationVector?: string;

		/**Specify the encryption scheme that you want the service to use when encrypting your CMAF segments. Choose AES-CBC subsample (SAMPLE-AES) or AES_CTR (AES-CTR). */
		EncryptionMethod?: CmafEncryptionSettingsEncryptionMethod;

		/**When you use DRM with CMAF outputs, choose whether the service writes the 128-bit encryption initialization vector in the HLS and DASH manifests. */
		InitializationVectorInManifest?: CmafEncryptionSettingsInitializationVectorInManifest;

		/**If your output group type is CMAF, use these settings when doing DRM encryption with a SPEKE-compliant key provider. If your output group type is HLS, DASH, or Microsoft Smooth, use the SpekeKeyProvider settings instead. */
		SpekeKeyProvider?: SpekeKeyProviderCmaf;

		/**Use these settings to set up encryption with a static key provider. */
		StaticKeyProvider?: StaticKeyProvider;

		/**Specify whether your DRM encryption key is static or from a key provider that follows the SPEKE standard. For more information about SPEKE, see https://docs.aws.amazon.com/speke/latest/documentation/what-is-speke.html. */
		Type?: CmafEncryptionSettingsType;
	}

	export enum CmafEncryptionSettingsEncryptionMethod { SAMPLE_AES = 0, AES_CTR = 1 }

	export enum CmafEncryptionSettingsInitializationVectorInManifest { INCLUDE = 0, EXCLUDE = 1 }

	export enum CmafEncryptionSettingsType { SPEKE = 0, STATIC_KEY = 1 }


	/**Settings associated with the destination. Will vary based on the type of destination */
	export interface DestinationSettings {

		/**Settings associated with S3 destination */
		S3Settings?: S3DestinationSettings;
	}


	/**When set to GZIP, compresses HLS playlist. */
	export enum CmafManifestCompression { GZIP = 0, NONE = 1 }


	/**Indicates whether the output manifest should use floating point values for segment duration. */
	export enum CmafManifestDurationFormat { FLOATING_POINT = 0, INTEGER = 1 }


	/**Specify whether your DASH profile is on-demand or main. When you choose Main profile (MAIN_PROFILE), the service signals  urn:mpeg:dash:profile:isoff-main:2011 in your .mpd DASH manifest. When you choose On-demand (ON_DEMAND_PROFILE), the service signals urn:mpeg:dash:profile:isoff-on-demand:2011 in your .mpd. When you choose On-demand, you must also set the output group setting Segment control (SegmentControl) to Single file (SINGLE_FILE). */
	export enum CmafMpdProfile { MAIN_PROFILE = 0, ON_DEMAND_PROFILE = 1 }


	/**When set to SINGLE_FILE, a single output file is generated, which is internally segmented using the Fragment Length and Segment Length. When set to SEGMENTED_FILES, separate segment files will be created. */
	export enum CmafSegmentControl { SINGLE_FILE = 0, SEGMENTED_FILES = 1 }


	/**Include or exclude RESOLUTION attribute for video in EXT-X-STREAM-INF tag of variant manifest. */
	export enum CmafStreamInfResolution { INCLUDE = 0, EXCLUDE = 1 }


	/**When set to ENABLED, a DASH MPD manifest will be generated for this output. */
	export enum CmafWriteDASHManifest { DISABLED = 0, ENABLED = 1 }


	/**When set to ENABLED, an Apple HLS manifest will be generated for this output. */
	export enum CmafWriteHLSManifest { DISABLED = 0, ENABLED = 1 }


	/**When you enable Precise segment duration in DASH manifests (writeSegmentTimelineInRepresentation), your DASH manifest shows precise segment durations. The segment duration information appears inside the SegmentTimeline element, inside SegmentTemplate at the Representation level. When this feature isn't enabled, the segment durations in your DASH manifest are approximate. The segment duration information appears in the duration attribute of the SegmentTemplate element. */
	export enum CmafWriteSegmentTimelineInRepresentation { ENABLED = 0, DISABLED = 1 }


	/**Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to CMAF_GROUP_SETTINGS. Each output in a CMAF Output Group may only contain a single video, audio, or caption output. */
	export interface CmafGroupSettings {
		AdditionalManifests?: Array<CmafAdditionalManifest>;
		BaseUrl?: string;

		/**When set to ENABLED, sets #EXT-X-ALLOW-CACHE:no tag, which prevents client from saving media segments for later replay. */
		ClientCache?: CmafGroupSettingsClientCache;

		/**Specification to use (RFC-6381 or the default RFC-4281) during m3u8 playlist generation. */
		CodecSpecification?: CmafGroupSettingsCodecSpecification;
		Destination?: string;

		/**Settings associated with the destination. Will vary based on the type of destination */
		DestinationSettings?: DestinationSettings;

		/**Settings for CMAF encryption */
		Encryption?: CmafEncryptionSettings;
		FragmentLength?: number;

		/**When set to GZIP, compresses HLS playlist. */
		ManifestCompression?: CmafGroupSettingsManifestCompression;

		/**Indicates whether the output manifest should use floating point values for segment duration. */
		ManifestDurationFormat?: CmafGroupSettingsManifestDurationFormat;
		MinBufferTime?: number;
		MinFinalSegmentLength?: number;

		/**Specify whether your DASH profile is on-demand or main. When you choose Main profile (MAIN_PROFILE), the service signals  urn:mpeg:dash:profile:isoff-main:2011 in your .mpd DASH manifest. When you choose On-demand (ON_DEMAND_PROFILE), the service signals urn:mpeg:dash:profile:isoff-on-demand:2011 in your .mpd. When you choose On-demand, you must also set the output group setting Segment control (SegmentControl) to Single file (SINGLE_FILE). */
		MpdProfile?: CmafGroupSettingsMpdProfile;

		/**When set to SINGLE_FILE, a single output file is generated, which is internally segmented using the Fragment Length and Segment Length. When set to SEGMENTED_FILES, separate segment files will be created. */
		SegmentControl?: CmafGroupSettingsSegmentControl;
		SegmentLength?: number;

		/**Include or exclude RESOLUTION attribute for video in EXT-X-STREAM-INF tag of variant manifest. */
		StreamInfResolution?: CmafGroupSettingsStreamInfResolution;

		/**When set to ENABLED, a DASH MPD manifest will be generated for this output. */
		WriteDashManifest?: CmafGroupSettingsWriteDashManifest;

		/**When set to ENABLED, an Apple HLS manifest will be generated for this output. */
		WriteHlsManifest?: CmafGroupSettingsWriteHlsManifest;

		/**When you enable Precise segment duration in DASH manifests (writeSegmentTimelineInRepresentation), your DASH manifest shows precise segment durations. The segment duration information appears inside the SegmentTimeline element, inside SegmentTemplate at the Representation level. When this feature isn't enabled, the segment durations in your DASH manifest are approximate. The segment duration information appears in the duration attribute of the SegmentTemplate element. */
		WriteSegmentTimelineInRepresentation?: CmafGroupSettingsWriteSegmentTimelineInRepresentation;
	}

	export enum CmafGroupSettingsClientCache { DISABLED = 0, ENABLED = 1 }

	export enum CmafGroupSettingsCodecSpecification { RFC_6381 = 0, RFC_4281 = 1 }

	export enum CmafGroupSettingsManifestCompression { GZIP = 0, NONE = 1 }

	export enum CmafGroupSettingsManifestDurationFormat { FLOATING_POINT = 0, INTEGER = 1 }

	export enum CmafGroupSettingsMpdProfile { MAIN_PROFILE = 0, ON_DEMAND_PROFILE = 1 }

	export enum CmafGroupSettingsSegmentControl { SINGLE_FILE = 0, SEGMENTED_FILES = 1 }

	export enum CmafGroupSettingsStreamInfResolution { INCLUDE = 0, EXCLUDE = 1 }

	export enum CmafGroupSettingsWriteDashManifest { DISABLED = 0, ENABLED = 1 }

	export enum CmafGroupSettingsWriteHlsManifest { DISABLED = 0, ENABLED = 1 }

	export enum CmafGroupSettingsWriteSegmentTimelineInRepresentation { ENABLED = 0, DISABLED = 1 }


	/**Use this setting only when you specify SCTE-35 markers from ESAM. Choose INSERT to put SCTE-35 markers in this output at the insertion points that you specify in an ESAM XML document. Provide the document in the setting SCC XML (sccXml). */
	export enum CmfcScte35Esam { INSERT = 0, NONE = 1 }


	/**Ignore this setting unless you have SCTE-35 markers in your input video file. Choose Passthrough (PASSTHROUGH) if you want SCTE-35 markers that appear in your input to also appear in this output. Choose None (NONE) if you don't want those SCTE-35 markers in this output. */
	export enum CmfcScte35Source { PASSTHROUGH = 0, NONE = 1 }


	/**Settings for MP4 segments in CMAF */
	export interface CmfcSettings {

		/**Use this setting only when you specify SCTE-35 markers from ESAM. Choose INSERT to put SCTE-35 markers in this output at the insertion points that you specify in an ESAM XML document. Provide the document in the setting SCC XML (sccXml). */
		Scte35Esam?: CmfcSettingsScte35Esam;

		/**Ignore this setting unless you have SCTE-35 markers in your input video file. Choose Passthrough (PASSTHROUGH) if you want SCTE-35 markers that appear in your input to also appear in this output. Choose None (NONE) if you don't want those SCTE-35 markers in this output. */
		Scte35Source?: CmfcSettingsScte35Source;
	}

	export enum CmfcSettingsScte35Esam { INSERT = 0, NONE = 1 }

	export enum CmfcSettingsScte35Source { PASSTHROUGH = 0, NONE = 1 }


	/**Specify the color space you want for this output. The service supports conversion between HDR formats, between SDR formats, from SDR to HDR, and from HDR to SDR. SDR to HDR conversion doesn't upgrade the dynamic range. The converted video has an HDR format, but visually appears the same as an unconverted output. HDR to SDR conversion uses Elemental tone mapping technology to approximate the outcome of manually regrading from HDR to SDR. */
	export enum ColorSpaceConversion { NONE = 0, FORCE_601 = 1, FORCE_709 = 2, FORCE_HDR10 = 3, FORCE_HLG_2020 = 4 }


	/**Use these settings to specify static color calibration metadata, as defined by SMPTE ST 2086. These values don't affect the pixel values that are encoded in the video stream. They are intended to help the downstream video player display content in a way that reflects the intentions of the the content creator. */
	export interface Hdr10Metadata {
		BluePrimaryX?: number;
		BluePrimaryY?: number;
		GreenPrimaryX?: number;
		GreenPrimaryY?: number;
		MaxContentLightLevel?: number;
		MaxFrameAverageLightLevel?: number;
		MaxLuminance?: number;
		MinLuminance?: number;
		RedPrimaryX?: number;
		RedPrimaryY?: number;
		WhitePointX?: number;
		WhitePointY?: number;
	}


	/**Settings for color correction. */
	export interface ColorCorrector {
		Brightness?: number;

		/**Specify the color space you want for this output. The service supports conversion between HDR formats, between SDR formats, from SDR to HDR, and from HDR to SDR. SDR to HDR conversion doesn't upgrade the dynamic range. The converted video has an HDR format, but visually appears the same as an unconverted output. HDR to SDR conversion uses Elemental tone mapping technology to approximate the outcome of manually regrading from HDR to SDR. */
		ColorSpaceConversion?: ColorCorrectorColorSpaceConversion;
		Contrast?: number;

		/**Use these settings to specify static color calibration metadata, as defined by SMPTE ST 2086. These values don't affect the pixel values that are encoded in the video stream. They are intended to help the downstream video player display content in a way that reflects the intentions of the the content creator. */
		Hdr10Metadata?: Hdr10Metadata;
		Hue?: number;
		Saturation?: number;
	}

	export enum ColorCorrectorColorSpaceConversion { NONE = 0, FORCE_601 = 1, FORCE_709 = 2, FORCE_HDR10 = 3, FORCE_HLG_2020 = 4 }


	/**Choose Insert (INSERT) for this setting to include color metadata in this output. Choose Ignore (IGNORE) to exclude color metadata from this output. If you don't specify a value, the service sets this to Insert by default. */
	export enum ColorMetadata { IGNORE = 0, INSERT = 1 }


	/**If your input video has accurate color space metadata, or if you don't know about color space, leave this set to the default value Follow (FOLLOW). The service will automatically detect your input color space. If your input video has metadata indicating the wrong color space, specify the accurate color space here. If your input video is HDR 10 and the SMPTE ST 2086 Mastering Display Color Volume static metadata isn't present in your video stream, or if that metadata is present but not accurate, choose Force HDR 10 (FORCE_HDR10) here and specify correct values in the input HDR 10 metadata (Hdr10Metadata) settings. For more information about MediaConvert HDR jobs, see https://docs.aws.amazon.com/console/mediaconvert/hdr. */
	export enum ColorSpace { FOLLOW = 0, REC_601 = 1, REC_709 = 2, HDR10 = 3, HLG_2020 = 4 }


	/**There are two sources for color metadata, the input file and the job input settings Color space (ColorSpace) and HDR master display information settings(Hdr10Metadata). The Color space usage setting determines which takes precedence. Choose Force (FORCE) to use color metadata from the input job settings. If you don't specify values for those settings, the service defaults to using metadata from your input. FALLBACK - Choose Fallback (FALLBACK) to use color metadata from the source when it is present. If there's no color metadata in your input file, the service defaults to using values you specify in the input settings. */
	export enum ColorSpaceUsage { FORCE = 0, FALLBACK = 1 }


	/**Container for this output. Some containers require a container settings object. If not specified, the default object will be created. */
	export enum ContainerType { F4V = 0, ISMV = 1, M2TS = 2, M3U8 = 3, CMFC = 4, MOV = 5, MP4 = 6, MPD = 7, MXF = 8, WEBM = 9, RAW = 10 }


	/**Settings for F4v container */
	export interface F4vSettings {

		/**If set to PROGRESSIVE_DOWNLOAD, the MOOV atom is relocated to the beginning of the archive as required for progressive downloading. Otherwise it is placed normally at the end. */
		MoovPlacement?: F4vSettingsMoovPlacement;
	}

	export enum F4vSettingsMoovPlacement { PROGRESSIVE_DOWNLOAD = 0, NORMAL = 1 }


	/**MPEG-2 TS container settings. These apply to outputs in a File output group when the output's container (ContainerType) is MPEG-2 Transport Stream (M2TS). In these assets, data is organized by the program map table (PMT). Each transport stream program contains subsets of data, including audio, video, and metadata. Each of these subsets of data has a numerical label called a packet identifier (PID). Each transport stream program corresponds to one MediaConvert output. The PMT lists the types of data in a program along with their PID. Downstream systems and players use the program map table to look up the PID for each type of data it accesses and then uses the PIDs to locate specific data within the asset. */
	export interface M2tsSettings {

		/**Selects between the DVB and ATSC buffer models for Dolby Digital audio. */
		AudioBufferModel?: M2tsSettingsAudioBufferModel;
		AudioFramesPerPes?: number;
		AudioPids?: Array<__integerMin32Max8182>;
		Bitrate?: number;

		/**Controls what buffer model to use for accurate interleaving. If set to MULTIPLEX, use multiplex  buffer model. If set to NONE, this can lead to lower latency, but low-memory devices may not be able to play back the stream without interruptions. */
		BufferModel?: M2tsSettingsBufferModel;

		/**Inserts DVB Network Information Table (NIT) at the specified table repetition interval. */
		DvbNitSettings?: DvbNitSettings;

		/**Inserts DVB Service Description Table (NIT) at the specified table repetition interval. */
		DvbSdtSettings?: DvbSdtSettings;
		DvbSubPids?: Array<__integerMin32Max8182>;

		/**Inserts DVB Time and Date Table (TDT) at the specified table repetition interval. */
		DvbTdtSettings?: DvbTdtSettings;
		DvbTeletextPid?: number;

		/**When set to VIDEO_AND_FIXED_INTERVALS, audio EBP markers will be added to partitions 3 and 4. The interval between these additional markers will be fixed, and will be slightly shorter than the video EBP marker interval. When set to VIDEO_INTERVAL, these additional markers will not be inserted. Only applicable when EBP segmentation markers are is selected (segmentationMarkers is EBP or EBP_LEGACY). */
		EbpAudioInterval?: M2tsSettingsEbpAudioInterval;

		/**Selects which PIDs to place EBP markers on. They can either be placed only on the video PID, or on both the video PID and all audio PIDs. Only applicable when EBP segmentation markers are is selected (segmentationMarkers is EBP or EBP_LEGACY). */
		EbpPlacement?: M2tsSettingsEbpPlacement;

		/**Controls whether to include the ES Rate field in the PES header. */
		EsRateInPes?: M2tsSettingsEsRateInPes;

		/**Keep the default value (DEFAULT) unless you know that your audio EBP markers are incorrectly appearing before your video EBP markers. To correct this problem, set this value to Force (FORCE). */
		ForceTsVideoEbpOrder?: M2tsSettingsForceTsVideoEbpOrder;
		FragmentTime?: number;
		MaxPcrInterval?: number;
		MinEbpInterval?: number;

		/**If INSERT, Nielsen inaudible tones for media tracking will be detected in the input audio and an equivalent ID3 tag will be inserted in the output. */
		NielsenId3?: M2tsSettingsNielsenId3;
		NullPacketBitrate?: number;
		PatInterval?: number;

		/**When set to PCR_EVERY_PES_PACKET, a Program Clock Reference value is inserted for every Packetized Elementary Stream (PES) header. This is effective only when the PCR PID is the same as the video or audio elementary stream. */
		PcrControl?: M2tsSettingsPcrControl;
		PcrPid?: number;
		PmtInterval?: number;
		PmtPid?: number;
		PrivateMetadataPid?: number;
		ProgramNumber?: number;

		/**When set to CBR, inserts null packets into transport stream to fill specified bitrate. When set to VBR, the bitrate setting acts as the maximum bitrate, but the output will not be padded up to that bitrate. */
		RateMode?: M2tsSettingsRateMode;

		/**Settings for SCTE-35 signals from ESAM. Include this in your job settings to put SCTE-35 markers in your HLS and transport stream outputs at the insertion points that you specify in an ESAM XML document. Provide the document in the setting SCC XML (sccXml). */
		Scte35Esam?: M2tsScte35Esam;
		Scte35Pid?: number;

		/**For SCTE-35 markers from your input-- Choose Passthrough (PASSTHROUGH) if you want SCTE-35 markers that appear in your input to also appear in this output. Choose None (NONE) if you don't want SCTE-35 markers in this output. For SCTE-35 markers from an ESAM XML document-- Choose None (NONE). Also provide the ESAM XML as a string in the setting Signal processing notification XML (sccXml). Also enable ESAM SCTE-35 (include the property scte35Esam). */
		Scte35Source?: M2tsSettingsScte35Source;

		/**Inserts segmentation markers at each segmentation_time period. rai_segstart sets the Random Access Indicator bit in the adaptation field. rai_adapt sets the RAI bit and adds the current timecode in the private data bytes. psi_segstart inserts PAT and PMT tables at the start of segments. ebp adds Encoder Boundary Point information to the adaptation field as per OpenCable specification OC-SP-EBP-I01-130118. ebp_legacy adds Encoder Boundary Point information to the adaptation field using a legacy proprietary format. */
		SegmentationMarkers?: M2tsSettingsSegmentationMarkers;

		/**The segmentation style parameter controls how segmentation markers are inserted into the transport stream. With avails, it is possible that segments may be truncated, which can influence where future segmentation markers are inserted. When a segmentation style of "reset_cadence" is selected and a segment is truncated due to an avail, we will reset the segmentation cadence. This means the subsequent segment will have a duration of of $segmentation_time seconds. When a segmentation style of "maintain_cadence" is selected and a segment is truncated due to an avail, we will not reset the segmentation cadence. This means the subsequent segment will likely be truncated as well. However, all segments after that will have a duration of $segmentation_time seconds. Note that EBP lookahead is a slight exception to this rule. */
		SegmentationStyle?: M2tsSettingsSegmentationStyle;
		SegmentationTime?: number;
		TimedMetadataPid?: number;
		TransportStreamId?: number;
		VideoPid?: number;
	}

	export enum M2tsSettingsAudioBufferModel { DVB = 0, ATSC = 1 }

	export enum M2tsSettingsBufferModel { MULTIPLEX = 0, NONE = 1 }

	export enum M2tsSettingsEbpAudioInterval { VIDEO_AND_FIXED_INTERVALS = 0, VIDEO_INTERVAL = 1 }

	export enum M2tsSettingsEbpPlacement { VIDEO_AND_AUDIO_PIDS = 0, VIDEO_PID = 1 }

	export enum M2tsSettingsEsRateInPes { INCLUDE = 0, EXCLUDE = 1 }

	export enum M2tsSettingsForceTsVideoEbpOrder { FORCE = 0, DEFAULT = 1 }

	export enum M2tsSettingsNielsenId3 { INSERT = 0, NONE = 1 }

	export enum M2tsSettingsPcrControl { PCR_EVERY_PES_PACKET = 0, CONFIGURED_PCR_PERIOD = 1 }

	export enum M2tsSettingsRateMode { VBR = 0, CBR = 1 }

	export enum M2tsSettingsScte35Source { PASSTHROUGH = 0, NONE = 1 }

	export enum M2tsSettingsSegmentationMarkers { NONE = 0, RAI_SEGSTART = 1, RAI_ADAPT = 2, PSI_SEGSTART = 3, EBP = 4, EBP_LEGACY = 5 }

	export enum M2tsSettingsSegmentationStyle { MAINTAIN_CADENCE = 0, RESET_CADENCE = 1 }


	/**Settings for TS segments in HLS */
	export interface M3u8Settings {
		AudioFramesPerPes?: number;
		AudioPids?: Array<__integerMin32Max8182>;

		/**If INSERT, Nielsen inaudible tones for media tracking will be detected in the input audio and an equivalent ID3 tag will be inserted in the output. */
		NielsenId3?: M3u8SettingsNielsenId3;
		PatInterval?: number;

		/**When set to PCR_EVERY_PES_PACKET a Program Clock Reference value is inserted for every Packetized Elementary Stream (PES) header. This parameter is effective only when the PCR PID is the same as the video or audio elementary stream. */
		PcrControl?: M3u8SettingsPcrControl;
		PcrPid?: number;
		PmtInterval?: number;
		PmtPid?: number;
		PrivateMetadataPid?: number;
		ProgramNumber?: number;
		Scte35Pid?: number;

		/**For SCTE-35 markers from your input-- Choose Passthrough (PASSTHROUGH) if you want SCTE-35 markers that appear in your input to also appear in this output. Choose None (NONE) if you don't want SCTE-35 markers in this output. For SCTE-35 markers from an ESAM XML document-- Choose None (NONE) if you don't want manifest conditioning. Choose Passthrough (PASSTHROUGH) and choose Ad markers (adMarkers) if you do want manifest conditioning. In both cases, also provide the ESAM XML as a string in the setting Signal processing notification XML (sccXml). */
		Scte35Source?: M3u8SettingsScte35Source;

		/**Applies only to HLS outputs. Use this setting to specify whether the service inserts the ID3 timed metadata from the input in this output. */
		TimedMetadata?: M3u8SettingsTimedMetadata;
		TimedMetadataPid?: number;
		TransportStreamId?: number;
		VideoPid?: number;
	}

	export enum M3u8SettingsNielsenId3 { INSERT = 0, NONE = 1 }

	export enum M3u8SettingsPcrControl { PCR_EVERY_PES_PACKET = 0, CONFIGURED_PCR_PERIOD = 1 }

	export enum M3u8SettingsScte35Source { PASSTHROUGH = 0, NONE = 1 }

	export enum M3u8SettingsTimedMetadata { PASSTHROUGH = 0, NONE = 1 }


	/**Settings for MOV Container. */
	export interface MovSettings {

		/**When enabled, include 'clap' atom if appropriate for the video output settings. */
		ClapAtom?: MovSettingsClapAtom;

		/**When enabled, file composition times will start at zero, composition times in the 'ctts' (composition time to sample) box for B-frames will be negative, and a 'cslg' (composition shift least greatest) box will be included per 14496-1 amendment 1. This improves compatibility with Apple players and tools. */
		CslgAtom?: MovSettingsCslgAtom;

		/**When set to XDCAM, writes MPEG2 video streams into the QuickTime file using XDCAM fourcc codes. This increases compatibility with Apple editors and players, but may decrease compatibility with other players. Only applicable when the video codec is MPEG2. */
		Mpeg2FourCCControl?: MovSettingsMpeg2FourCCControl;

		/**If set to OMNEON, inserts Omneon-compatible padding */
		PaddingControl?: MovSettingsPaddingControl;

		/**Always keep the default value (SELF_CONTAINED) for this setting. */
		Reference?: MovSettingsReference;
	}

	export enum MovSettingsClapAtom { INCLUDE = 0, EXCLUDE = 1 }

	export enum MovSettingsCslgAtom { INCLUDE = 0, EXCLUDE = 1 }

	export enum MovSettingsMpeg2FourCCControl { XDCAM = 0, MPEG = 1 }

	export enum MovSettingsPaddingControl { OMNEON = 0, NONE = 1 }

	export enum MovSettingsReference { SELF_CONTAINED = 0, EXTERNAL = 1 }


	/**Settings for MP4 container. You can create audio-only AAC outputs with this container. */
	export interface Mp4Settings {

		/**When enabled, file composition times will start at zero, composition times in the 'ctts' (composition time to sample) box for B-frames will be negative, and a 'cslg' (composition shift least greatest) box will be included per 14496-1 amendment 1. This improves compatibility with Apple players and tools. */
		CslgAtom?: Mp4SettingsCslgAtom;
		CttsVersion?: number;

		/**Inserts a free-space box immediately after the moov box. */
		FreeSpaceBox?: Mp4SettingsFreeSpaceBox;

		/**If set to PROGRESSIVE_DOWNLOAD, the MOOV atom is relocated to the beginning of the archive as required for progressive downloading. Otherwise it is placed normally at the end. */
		MoovPlacement?: Mp4SettingsMoovPlacement;
		Mp4MajorBrand?: string;
	}

	export enum Mp4SettingsCslgAtom { INCLUDE = 0, EXCLUDE = 1 }

	export enum Mp4SettingsFreeSpaceBox { INCLUDE = 0, EXCLUDE = 1 }

	export enum Mp4SettingsMoovPlacement { PROGRESSIVE_DOWNLOAD = 0, NORMAL = 1 }


	/**Settings for MP4 segments in DASH */
	export interface MpdSettings {

		/**Use this setting only in DASH output groups that include sidecar TTML or IMSC captions.  You specify sidecar captions in a separate output from your audio and video. Choose Raw (RAW) for captions in a single XML file in a raw container. Choose Fragmented MPEG-4 (FRAGMENTED_MP4) for captions in XML format contained within fragmented MP4 files. This set of fragmented MP4 files is separate from your video and audio fragmented MP4 files. */
		CaptionContainerType?: MpdSettingsCaptionContainerType;

		/**Use this setting only when you specify SCTE-35 markers from ESAM. Choose INSERT to put SCTE-35 markers in this output at the insertion points that you specify in an ESAM XML document. Provide the document in the setting SCC XML (sccXml). */
		Scte35Esam?: MpdSettingsScte35Esam;

		/**Ignore this setting unless you have SCTE-35 markers in your input video file. Choose Passthrough (PASSTHROUGH) if you want SCTE-35 markers that appear in your input to also appear in this output. Choose None (NONE) if you don't want those SCTE-35 markers in this output. */
		Scte35Source?: MpdSettingsScte35Source;
	}

	export enum MpdSettingsCaptionContainerType { RAW = 0, FRAGMENTED_MP4 = 1 }

	export enum MpdSettingsScte35Esam { INSERT = 0, NONE = 1 }

	export enum MpdSettingsScte35Source { PASSTHROUGH = 0, NONE = 1 }


	/**MXF settings */
	export interface MxfSettings {

		/**Optional. When you have AFD signaling set up in your output video stream, use this setting to choose whether to also include it in the MXF wrapper. Choose Don't copy (NO_COPY) to exclude AFD signaling from the MXF wrapper. Choose Copy from video stream (COPY_FROM_VIDEO) to copy the AFD values from the video stream for this output to the MXF wrapper. Regardless of which option you choose, the AFD values remain in the video stream. Related settings: To set up your output to include or exclude AFD values, see AfdSignaling, under VideoDescription. On the console, find AFD signaling under the output's video encoding settings. */
		AfdSignaling?: MxfSettingsAfdSignaling;
	}

	export enum MxfSettingsAfdSignaling { NO_COPY = 0, COPY_FROM_VIDEO = 1 }


	/**JobSettings contains all the transcode settings for a job. */
	export interface JobSettings {
		AdAvailOffset?: number;

		/**Settings for Avail Blanking */
		AvailBlanking?: AvailBlanking;

		/**Settings for Event Signaling And Messaging (ESAM). If you don't do ad insertion, you can ignore these settings. */
		Esam?: EsamSettings;
		Inputs?: Array<Input>;

		/**Overlay motion graphics on top of your video at the time that you specify. */
		MotionImageInserter?: MotionImageInserter;

		/**Settings for your Nielsen configuration. If you don't do Nielsen measurement and analytics, ignore these settings. When you enable Nielsen configuration (nielsenConfiguration), MediaConvert enables PCM to ID3 tagging for all outputs in the job. To enable Nielsen configuration programmatically, include an instance of nielsenConfiguration in your JSON job specification. Even if you don't include any children of nielsenConfiguration, you still enable the setting. */
		NielsenConfiguration?: NielsenConfiguration;
		OutputGroups?: Array<OutputGroup>;

		/**These settings control how the service handles timecodes throughout the job. These settings don't affect input clipping. */
		TimecodeConfig?: TimecodeConfig;

		/**Enable Timed metadata insertion (TimedMetadataInsertion) to include ID3 tags in your job. To include timed metadata, you must enable it here, enable it in each output container, and specify tags and timecodes in ID3 insertion (Id3Insertion) objects. */
		TimedMetadataInsertion?: TimedMetadataInsertion;
	}


	/**Enable this setting when you run a test job to estimate how many reserved transcoding slots (RTS) you need. When this is enabled, MediaConvert runs your job from an on-demand queue with similar performance to what you will see with one RTS in a reserved queue. This setting is disabled by default. */
	export enum SimulateReservedQueue { DISABLED = 0, ENABLED = 1 }


	/**Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error. */
	export enum StatusUpdateInterval { SECONDS_10 = 0, SECONDS_12 = 1, SECONDS_15 = 2, SECONDS_20 = 3, SECONDS_30 = 4, SECONDS_60 = 5, SECONDS_120 = 6, SECONDS_180 = 7, SECONDS_240 = 8, SECONDS_300 = 9, SECONDS_360 = 10, SECONDS_420 = 11, SECONDS_480 = 12, SECONDS_540 = 13, SECONDS_600 = 14 }

	export interface CreateJobRequest {

		/**Accelerated transcoding can significantly speed up jobs with long, visually complex content. */
		AccelerationSettings?: AccelerationSettings;

		/**The tag type that AWS Billing and Cost Management will use to sort your AWS Elemental MediaConvert costs on any billing report that you set up. */
		BillingTagsSource?: CreateJobRequestBillingTagsSource;
		ClientRequestToken?: string;
		HopDestinations?: Array<HopDestination>;
		JobTemplate?: string;
		Priority?: number;
		Queue?: string;
		Role: string;

		/**JobSettings contains all the transcode settings for a job. */
		Settings: JobSettings;

		/**Enable this setting when you run a test job to estimate how many reserved transcoding slots (RTS) you need. When this is enabled, MediaConvert runs your job from an on-demand queue with similar performance to what you will see with one RTS in a reserved queue. This setting is disabled by default. */
		SimulateReservedQueue?: CreateJobRequestSimulateReservedQueue;

		/**Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error. */
		StatusUpdateInterval?: CreateJobRequestStatusUpdateInterval;
		Tags?: __mapOf__string;
		UserMetadata?: __mapOf__string;
	}

	export enum CreateJobRequestBillingTagsSource { QUEUE = 0, PRESET = 1, JOB_TEMPLATE = 2, JOB = 3 }

	export enum CreateJobRequestSimulateReservedQueue { DISABLED = 0, ENABLED = 1 }

	export enum CreateJobRequestStatusUpdateInterval { SECONDS_10 = 0, SECONDS_12 = 1, SECONDS_15 = 2, SECONDS_20 = 3, SECONDS_30 = 4, SECONDS_60 = 5, SECONDS_120 = 6, SECONDS_180 = 7, SECONDS_240 = 8, SECONDS_300 = 9, SECONDS_360 = 10, SECONDS_420 = 11, SECONDS_480 = 12, SECONDS_540 = 13, SECONDS_600 = 14 }


	/**Each job converts an input file into an output file or files. For more information, see the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html */
	export interface Job {

		/**Accelerated transcoding can significantly speed up jobs with long, visually complex content. */
		AccelerationSettings?: AccelerationSettings;

		/**Describes whether the current job is running with accelerated transcoding. For jobs that have Acceleration (AccelerationMode) set to DISABLED, AccelerationStatus is always NOT_APPLICABLE. For jobs that have Acceleration (AccelerationMode) set to ENABLED or PREFERRED, AccelerationStatus is one of the other states. AccelerationStatus is IN_PROGRESS initially, while the service determines whether the input files and job settings are compatible with accelerated transcoding. If they are, AcclerationStatus is ACCELERATED. If your input files and job settings aren't compatible with accelerated transcoding, the service either fails your job or runs it without accelerated transcoding, depending on how you set Acceleration (AccelerationMode). When the service runs your job without accelerated transcoding, AccelerationStatus is NOT_ACCELERATED. */
		AccelerationStatus?: JobAccelerationStatus;
		Arn?: string;

		/**The tag type that AWS Billing and Cost Management will use to sort your AWS Elemental MediaConvert costs on any billing report that you set up. */
		BillingTagsSource?: JobBillingTagsSource;
		CreatedAt?: Date;

		/**A job's phase can be PROBING, TRANSCODING OR UPLOADING */
		CurrentPhase?: JobCurrentPhase;
		ErrorCode?: number;
		ErrorMessage?: string;
		HopDestinations?: Array<HopDestination>;
		Id?: string;
		JobPercentComplete?: number;
		JobTemplate?: string;

		/**Provides messages from the service about jobs that you have already successfully submitted. */
		Messages?: JobMessages;
		OutputGroupDetails?: Array<OutputGroupDetail>;
		Priority?: number;
		Queue?: string;
		QueueTransitions?: Array<QueueTransition>;
		RetryCount?: number;
		Role: string;

		/**JobSettings contains all the transcode settings for a job. */
		Settings: JobSettings;

		/**Enable this setting when you run a test job to estimate how many reserved transcoding slots (RTS) you need. When this is enabled, MediaConvert runs your job from an on-demand queue with similar performance to what you will see with one RTS in a reserved queue. This setting is disabled by default. */
		SimulateReservedQueue?: JobSimulateReservedQueue;

		/**A job's status can be SUBMITTED, PROGRESSING, COMPLETE, CANCELED, or ERROR. */
		Status?: JobStatus;

		/**Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error. */
		StatusUpdateInterval?: JobStatusUpdateInterval;

		/**Information about when jobs are submitted, started, and finished is specified in Unix epoch format in seconds. */
		Timing?: Timing;
		UserMetadata?: __mapOf__string;
	}

	export enum JobAccelerationStatus { NOT_APPLICABLE = 0, IN_PROGRESS = 1, ACCELERATED = 2, NOT_ACCELERATED = 3 }

	export enum JobBillingTagsSource { QUEUE = 0, PRESET = 1, JOB_TEMPLATE = 2, JOB = 3 }

	export enum JobCurrentPhase { PROBING = 0, TRANSCODING = 1, UPLOADING = 2 }

	export enum JobSimulateReservedQueue { DISABLED = 0, ENABLED = 1 }

	export enum JobStatus { SUBMITTED = 0, PROGRESSING = 1, COMPLETE = 2, CANCELED = 3, ERROR = 4 }

	export enum JobStatusUpdateInterval { SECONDS_10 = 0, SECONDS_12 = 1, SECONDS_15 = 2, SECONDS_20 = 3, SECONDS_30 = 4, SECONDS_60 = 5, SECONDS_120 = 6, SECONDS_180 = 7, SECONDS_240 = 8, SECONDS_300 = 9, SECONDS_360 = 10, SECONDS_420 = 11, SECONDS_480 = 12, SECONDS_540 = 13, SECONDS_600 = 14 }


	/**JobTemplateSettings contains all the transcode settings saved in the template that will be applied to jobs created from it. */
	export interface JobTemplateSettings {
		AdAvailOffset?: number;

		/**Settings for Avail Blanking */
		AvailBlanking?: AvailBlanking;

		/**Settings for Event Signaling And Messaging (ESAM). If you don't do ad insertion, you can ignore these settings. */
		Esam?: EsamSettings;
		Inputs?: Array<InputTemplate>;

		/**Overlay motion graphics on top of your video at the time that you specify. */
		MotionImageInserter?: MotionImageInserter;

		/**Settings for your Nielsen configuration. If you don't do Nielsen measurement and analytics, ignore these settings. When you enable Nielsen configuration (nielsenConfiguration), MediaConvert enables PCM to ID3 tagging for all outputs in the job. To enable Nielsen configuration programmatically, include an instance of nielsenConfiguration in your JSON job specification. Even if you don't include any children of nielsenConfiguration, you still enable the setting. */
		NielsenConfiguration?: NielsenConfiguration;
		OutputGroups?: Array<OutputGroup>;

		/**These settings control how the service handles timecodes throughout the job. These settings don't affect input clipping. */
		TimecodeConfig?: TimecodeConfig;

		/**Enable Timed metadata insertion (TimedMetadataInsertion) to include ID3 tags in your job. To include timed metadata, you must enable it here, enable it in each output container, and specify tags and timecodes in ID3 insertion (Id3Insertion) objects. */
		TimedMetadataInsertion?: TimedMetadataInsertion;
	}

	export interface CreateJobTemplateRequest {

		/**Accelerated transcoding can significantly speed up jobs with long, visually complex content. */
		AccelerationSettings?: AccelerationSettings;
		Category?: string;
		Description?: string;
		HopDestinations?: Array<HopDestination>;
		Name: string;
		Priority?: number;
		Queue?: string;

		/**JobTemplateSettings contains all the transcode settings saved in the template that will be applied to jobs created from it. */
		Settings: JobTemplateSettings;

		/**Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error. */
		StatusUpdateInterval?: CreateJobTemplateRequestStatusUpdateInterval;
		Tags?: __mapOf__string;
	}

	export enum CreateJobTemplateRequestStatusUpdateInterval { SECONDS_10 = 0, SECONDS_12 = 1, SECONDS_15 = 2, SECONDS_20 = 3, SECONDS_30 = 4, SECONDS_60 = 5, SECONDS_120 = 6, SECONDS_180 = 7, SECONDS_240 = 8, SECONDS_300 = 9, SECONDS_360 = 10, SECONDS_420 = 11, SECONDS_480 = 12, SECONDS_540 = 13, SECONDS_600 = 14 }


	/**A job template is a pre-made set of encoding instructions that you can use to quickly create a job. */
	export interface JobTemplate {

		/**Accelerated transcoding can significantly speed up jobs with long, visually complex content. */
		AccelerationSettings?: AccelerationSettings;
		Arn?: string;
		Category?: string;
		CreatedAt?: Date;
		Description?: string;
		HopDestinations?: Array<HopDestination>;
		LastUpdated?: Date;
		Name: string;
		Priority?: number;
		Queue?: string;

		/**JobTemplateSettings contains all the transcode settings saved in the template that will be applied to jobs created from it. */
		Settings: JobTemplateSettings;

		/**Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error. */
		StatusUpdateInterval?: JobTemplateStatusUpdateInterval;
		Type?: JobTemplateType;
	}

	export enum JobTemplateStatusUpdateInterval { SECONDS_10 = 0, SECONDS_12 = 1, SECONDS_15 = 2, SECONDS_20 = 3, SECONDS_30 = 4, SECONDS_60 = 5, SECONDS_120 = 6, SECONDS_180 = 7, SECONDS_240 = 8, SECONDS_300 = 9, SECONDS_360 = 10, SECONDS_420 = 11, SECONDS_480 = 12, SECONDS_540 = 13, SECONDS_600 = 14 }

	export enum JobTemplateType { SYSTEM = 0, CUSTOM = 1 }


	/**Settings for preset */
	export interface PresetSettings {
		AudioDescriptions?: Array<AudioDescription>;
		CaptionDescriptions?: Array<CaptionDescriptionPreset>;

		/**Container specific settings. */
		ContainerSettings?: ContainerSettings;

		/**Settings for video outputs */
		VideoDescription?: VideoDescription;
	}

	export interface CreatePresetRequest {
		Category?: string;
		Description?: string;
		Name: string;

		/**Settings for preset */
		Settings: PresetSettings;
		Tags?: __mapOf__string;
	}


	/**A preset is a collection of preconfigured media conversion settings that you want MediaConvert to apply to the output during the conversion process. */
	export interface Preset {
		Arn?: string;
		Category?: string;
		CreatedAt?: Date;
		Description?: string;
		LastUpdated?: Date;
		Name: string;

		/**Settings for preset */
		Settings: PresetSettings;
		Type?: PresetType;
	}

	export enum PresetType { SYSTEM = 0, CUSTOM = 1 }


	/**Specifies whether the pricing plan for the queue is on-demand or reserved. For on-demand, you pay per minute, billed in increments of .01 minute. For reserved, you pay for the transcoding capacity of the entire queue, regardless of how much or how little you use it. Reserved pricing requires a 12-month commitment. */
	export enum PricingPlan { ON_DEMAND = 0, RESERVED = 1 }


	/**Details about the pricing plan for your reserved queue. Required for reserved queues and not applicable to on-demand queues. */
	export interface ReservationPlanSettings {

		/**The length of the term of your reserved queue pricing plan commitment. */
		Commitment: ReservationPlanSettingsCommitment;

		/**Specifies whether the term of your reserved queue pricing plan is automatically extended (AUTO_RENEW) or expires (EXPIRE) at the end of the term. */
		RenewalType: ReservationPlanSettingsRenewalType;
		ReservedSlots: number;
	}

	export enum ReservationPlanSettingsCommitment { ONE_YEAR = 0 }

	export enum ReservationPlanSettingsRenewalType { AUTO_RENEW = 0, EXPIRE = 1 }


	/**Queues can be ACTIVE or PAUSED. If you pause a queue, jobs in that queue won't begin. Jobs that are running when you pause a queue continue to run until they finish or result in an error. */
	export enum QueueStatus { ACTIVE = 0, PAUSED = 1 }

	export interface CreateQueueRequest {
		Description?: string;
		Name: string;

		/**Specifies whether the pricing plan for the queue is on-demand or reserved. For on-demand, you pay per minute, billed in increments of .01 minute. For reserved, you pay for the transcoding capacity of the entire queue, regardless of how much or how little you use it. Reserved pricing requires a 12-month commitment. */
		PricingPlan?: CreateQueueRequestPricingPlan;

		/**Details about the pricing plan for your reserved queue. Required for reserved queues and not applicable to on-demand queues. */
		ReservationPlanSettings?: ReservationPlanSettings;

		/**Queues can be ACTIVE or PAUSED. If you pause a queue, jobs in that queue won't begin. Jobs that are running when you pause a queue continue to run until they finish or result in an error. */
		Status?: CreateQueueRequestStatus;
		Tags?: __mapOf__string;
	}

	export enum CreateQueueRequestPricingPlan { ON_DEMAND = 0, RESERVED = 1 }

	export enum CreateQueueRequestStatus { ACTIVE = 0, PAUSED = 1 }


	/**You can use queues to manage the resources that are available to your AWS account for running multiple transcoding jobs at the same time. If you don't specify a queue, the service sends all jobs through the default queue. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-queues.html. */
	export interface Queue {
		Arn?: string;
		CreatedAt?: Date;
		Description?: string;
		LastUpdated?: Date;
		Name: string;

		/**Specifies whether the pricing plan for the queue is on-demand or reserved. For on-demand, you pay per minute, billed in increments of .01 minute. For reserved, you pay for the transcoding capacity of the entire queue, regardless of how much or how little you use it. Reserved pricing requires a 12-month commitment. */
		PricingPlan?: QueuePricingPlan;
		ProgressingJobsCount?: number;

		/**Details about the pricing plan for your reserved queue. Required for reserved queues and not applicable to on-demand queues. */
		ReservationPlan?: ReservationPlan;

		/**Queues can be ACTIVE or PAUSED. If you pause a queue, jobs in that queue won't begin. Jobs that are running when you pause a queue continue to run until they finish or result in an error. */
		Status?: QueueStatus;
		SubmittedJobsCount?: number;
		Type?: QueueType;
	}

	export enum QueuePricingPlan { ON_DEMAND = 0, RESERVED = 1 }

	export enum QueueStatus { ACTIVE = 0, PAUSED = 1 }

	export enum QueueType { SYSTEM = 0, CUSTOM = 1 }


	/**Specify the details for each additional DASH manifest that you want the service to generate for this output group. Each manifest can reference a different subset of outputs in the group. */
	export interface DashAdditionalManifest {
		ManifestNameModifier?: string;
		SelectedOutputs?: Array<__stringMin1>;
	}


	/**This setting can improve the compatibility of your output with video players on obsolete devices. It applies only to DASH H.264 outputs with DRM encryption. Choose Unencrypted SEI (UNENCRYPTED_SEI) only to correct problems with playback on older devices. Otherwise, keep the default setting CENC v1 (CENC_V1). If you choose Unencrypted SEI, for that output, the service will exclude the access unit delimiter and will leave the SEI NAL units unencrypted. */
	export enum DashIsoPlaybackDeviceCompatibility { CENC_V1 = 0, UNENCRYPTED_SEI = 1 }


	/**If your output group type is HLS, DASH, or Microsoft Smooth, use these settings when doing DRM encryption with a SPEKE-compliant key provider.  If your output group type is CMAF, use the SpekeKeyProviderCmaf settings instead. */
	export interface SpekeKeyProvider {
		CertificateArn?: string;
		ResourceId?: string;
		SystemIds?: Array<__stringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12>;
		Url?: string;
	}


	/**Specifies DRM settings for DASH outputs. */
	export interface DashIsoEncryptionSettings {

		/**This setting can improve the compatibility of your output with video players on obsolete devices. It applies only to DASH H.264 outputs with DRM encryption. Choose Unencrypted SEI (UNENCRYPTED_SEI) only to correct problems with playback on older devices. Otherwise, keep the default setting CENC v1 (CENC_V1). If you choose Unencrypted SEI, for that output, the service will exclude the access unit delimiter and will leave the SEI NAL units unencrypted. */
		PlaybackDeviceCompatibility?: DashIsoEncryptionSettingsPlaybackDeviceCompatibility;

		/**If your output group type is HLS, DASH, or Microsoft Smooth, use these settings when doing DRM encryption with a SPEKE-compliant key provider.  If your output group type is CMAF, use the SpekeKeyProviderCmaf settings instead. */
		SpekeKeyProvider?: SpekeKeyProvider;
	}

	export enum DashIsoEncryptionSettingsPlaybackDeviceCompatibility { CENC_V1 = 0, UNENCRYPTED_SEI = 1 }


	/**Supports HbbTV specification as indicated */
	export enum DashIsoHbbtvCompliance { HBBTV_1_5 = 0, NONE = 1 }


	/**Specify whether your DASH profile is on-demand or main. When you choose Main profile (MAIN_PROFILE), the service signals  urn:mpeg:dash:profile:isoff-main:2011 in your .mpd DASH manifest. When you choose On-demand (ON_DEMAND_PROFILE), the service signals urn:mpeg:dash:profile:isoff-on-demand:2011 in your .mpd. When you choose On-demand, you must also set the output group setting Segment control (SegmentControl) to Single file (SINGLE_FILE). */
	export enum DashIsoMpdProfile { MAIN_PROFILE = 0, ON_DEMAND_PROFILE = 1 }


	/**When set to SINGLE_FILE, a single output file is generated, which is internally segmented using the Fragment Length and Segment Length. When set to SEGMENTED_FILES, separate segment files will be created. */
	export enum DashIsoSegmentControl { SINGLE_FILE = 0, SEGMENTED_FILES = 1 }


	/**When you enable Precise segment duration in manifests (writeSegmentTimelineInRepresentation), your DASH manifest shows precise segment durations. The segment duration information appears inside the SegmentTimeline element, inside SegmentTemplate at the Representation level. When this feature isn't enabled, the segment durations in your DASH manifest are approximate. The segment duration information appears in the duration attribute of the SegmentTemplate element. */
	export enum DashIsoWriteSegmentTimelineInRepresentation { ENABLED = 0, DISABLED = 1 }


	/**Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to DASH_ISO_GROUP_SETTINGS. */
	export interface DashIsoGroupSettings {
		AdditionalManifests?: Array<DashAdditionalManifest>;
		BaseUrl?: string;
		Destination?: string;

		/**Settings associated with the destination. Will vary based on the type of destination */
		DestinationSettings?: DestinationSettings;

		/**Specifies DRM settings for DASH outputs. */
		Encryption?: DashIsoEncryptionSettings;
		FragmentLength?: number;

		/**Supports HbbTV specification as indicated */
		HbbtvCompliance?: DashIsoGroupSettingsHbbtvCompliance;
		MinBufferTime?: number;

		/**Specify whether your DASH profile is on-demand or main. When you choose Main profile (MAIN_PROFILE), the service signals  urn:mpeg:dash:profile:isoff-main:2011 in your .mpd DASH manifest. When you choose On-demand (ON_DEMAND_PROFILE), the service signals urn:mpeg:dash:profile:isoff-on-demand:2011 in your .mpd. When you choose On-demand, you must also set the output group setting Segment control (SegmentControl) to Single file (SINGLE_FILE). */
		MpdProfile?: DashIsoGroupSettingsMpdProfile;

		/**When set to SINGLE_FILE, a single output file is generated, which is internally segmented using the Fragment Length and Segment Length. When set to SEGMENTED_FILES, separate segment files will be created. */
		SegmentControl?: DashIsoGroupSettingsSegmentControl;
		SegmentLength?: number;

		/**When you enable Precise segment duration in manifests (writeSegmentTimelineInRepresentation), your DASH manifest shows precise segment durations. The segment duration information appears inside the SegmentTimeline element, inside SegmentTemplate at the Representation level. When this feature isn't enabled, the segment durations in your DASH manifest are approximate. The segment duration information appears in the duration attribute of the SegmentTemplate element. */
		WriteSegmentTimelineInRepresentation?: DashIsoGroupSettingsWriteSegmentTimelineInRepresentation;
	}

	export enum DashIsoGroupSettingsHbbtvCompliance { HBBTV_1_5 = 0, NONE = 1 }

	export enum DashIsoGroupSettingsMpdProfile { MAIN_PROFILE = 0, ON_DEMAND_PROFILE = 1 }

	export enum DashIsoGroupSettingsSegmentControl { SINGLE_FILE = 0, SEGMENTED_FILES = 1 }

	export enum DashIsoGroupSettingsWriteSegmentTimelineInRepresentation { ENABLED = 0, DISABLED = 1 }


	/**Specify the encryption mode that you used to encrypt your input files. */
	export enum DecryptionMode { AES_CTR = 0, AES_CBC = 1, AES_GCM = 2 }


	/**Only applies when you set Deinterlacer (DeinterlaceMode) to Deinterlace (DEINTERLACE) or Adaptive (ADAPTIVE). Motion adaptive interpolate (INTERPOLATE) produces sharper pictures, while blend (BLEND) produces smoother motion. Use (INTERPOLATE_TICKER) OR (BLEND_TICKER) if your source file includes a ticker, such as a scrolling headline at the bottom of the frame. */
	export enum DeinterlaceAlgorithm { INTERPOLATE = 0, INTERPOLATE_TICKER = 1, BLEND = 2, BLEND_TICKER = 3 }


	/**- When set to NORMAL (default), the deinterlacer does not convert frames that are tagged  in metadata as progressive. It will only convert those that are tagged as some other type. - When set to FORCE_ALL_FRAMES, the deinterlacer converts every frame to progressive - even those that are already tagged as progressive. Turn Force mode on only if there is  a good chance that the metadata has tagged frames as progressive when they are not  progressive. Do not turn on otherwise; processing frames that are already progressive  into progressive will probably result in lower quality video. */
	export enum DeinterlacerControl { FORCE_ALL_FRAMES = 0, NORMAL = 1 }


	/**Use Deinterlacer (DeinterlaceMode) to choose how the service will do deinterlacing. Default is Deinterlace. - Deinterlace converts interlaced to progressive. - Inverse telecine converts Hard Telecine 29.97i to progressive 23.976p. - Adaptive auto-detects and converts to progressive. */
	export enum DeinterlacerMode { DEINTERLACE = 0, INVERSE_TELECINE = 1, ADAPTIVE = 2 }


	/**Settings for deinterlacer */
	export interface Deinterlacer {

		/**Only applies when you set Deinterlacer (DeinterlaceMode) to Deinterlace (DEINTERLACE) or Adaptive (ADAPTIVE). Motion adaptive interpolate (INTERPOLATE) produces sharper pictures, while blend (BLEND) produces smoother motion. Use (INTERPOLATE_TICKER) OR (BLEND_TICKER) if your source file includes a ticker, such as a scrolling headline at the bottom of the frame. */
		Algorithm?: DeinterlacerAlgorithm;

		/**- When set to NORMAL (default), the deinterlacer does not convert frames that are tagged  in metadata as progressive. It will only convert those that are tagged as some other type. - When set to FORCE_ALL_FRAMES, the deinterlacer converts every frame to progressive - even those that are already tagged as progressive. Turn Force mode on only if there is  a good chance that the metadata has tagged frames as progressive when they are not  progressive. Do not turn on otherwise; processing frames that are already progressive  into progressive will probably result in lower quality video. */
		Control?: DeinterlacerControl;

		/**Use Deinterlacer (DeinterlaceMode) to choose how the service will do deinterlacing. Default is Deinterlace. - Deinterlace converts interlaced to progressive. - Inverse telecine converts Hard Telecine 29.97i to progressive 23.976p. - Adaptive auto-detects and converts to progressive. */
		Mode?: DeinterlacerMode;
	}

	export enum DeinterlacerAlgorithm { INTERPOLATE = 0, INTERPOLATE_TICKER = 1, BLEND = 2, BLEND_TICKER = 3 }

	export enum DeinterlacerControl { FORCE_ALL_FRAMES = 0, NORMAL = 1 }

	export enum DeinterlacerMode { DEINTERLACE = 0, INVERSE_TELECINE = 1, ADAPTIVE = 2 }


	/**Optional field, defaults to DEFAULT. Specify DEFAULT for this operation to return your endpoints if any exist, or to create an endpoint for you and return it if one doesn't already exist. Specify GET_ONLY to return your endpoints if any exist, or an empty list if none exist. */
	export enum DescribeEndpointsMode { DEFAULT = 0, GET_ONLY = 1 }


	/**DescribeEndpointsRequest */
	export interface DescribeEndpointsRequest {
		MaxResults?: number;

		/**Optional field, defaults to DEFAULT. Specify DEFAULT for this operation to return your endpoints if any exist, or to create an endpoint for you and return it if one doesn't already exist. Specify GET_ONLY to return your endpoints if any exist, or an empty list if none exist. */
		Mode?: DescribeEndpointsRequestMode;
		NextToken?: string;
	}

	export enum DescribeEndpointsRequestMode { DEFAULT = 0, GET_ONLY = 1 }


	/**Settings associated with S3 destination */
	export interface S3DestinationSettings {

		/**Optional. Have MediaConvert automatically apply Amazon S3 access control for the outputs in this output group. When you don't use this setting, S3 automatically applies the default access control list PRIVATE. */
		AccessControl?: S3DestinationAccessControl;

		/**Settings for how your job outputs are encrypted as they are uploaded to Amazon S3. */
		Encryption?: S3EncryptionSettings;
	}


	/**Use these settings when you set DolbyVisionLevel6Mode to SPECIFY to override the MaxCLL and MaxFALL values in your input with new values. */
	export interface DolbyVisionLevel6Metadata {
		MaxCll?: number;
		MaxFall?: number;
	}


	/**Use Dolby Vision Mode to choose how the service will handle Dolby Vision MaxCLL and MaxFALL properies. */
	export enum DolbyVisionLevel6Mode { PASSTHROUGH = 0, RECALCULATE = 1, SPECIFY = 2 }


	/**In the current MediaConvert implementation, the Dolby Vision profile is always 5 (PROFILE_5). Therefore, all of your inputs must contain Dolby Vision frame interleaved data. */
	export enum DolbyVisionProfile { PROFILE_5 = 0 }


	/**Settings for Dolby Vision */
	export interface DolbyVision {

		/**Use these settings when you set DolbyVisionLevel6Mode to SPECIFY to override the MaxCLL and MaxFALL values in your input with new values. */
		L6Metadata?: DolbyVisionLevel6Metadata;

		/**Use Dolby Vision Mode to choose how the service will handle Dolby Vision MaxCLL and MaxFALL properies. */
		L6Mode?: DolbyVisionL6Mode;

		/**In the current MediaConvert implementation, the Dolby Vision profile is always 5 (PROFILE_5). Therefore, all of your inputs must contain Dolby Vision frame interleaved data. */
		Profile?: DolbyVisionProfile;
	}

	export enum DolbyVisionL6Mode { PASSTHROUGH = 0, RECALCULATE = 1, SPECIFY = 2 }

	export enum DolbyVisionProfile { PROFILE_5 = 0 }


	/**Applies only to 29.97 fps outputs. When this feature is enabled, the service will use drop-frame timecode on outputs. If it is not possible to use drop-frame timecode, the system will fall back to non-drop-frame. This setting is enabled by default when Timecode insertion (TimecodeInsertion) is enabled. */
	export enum DropFrameTimecode { DISABLED = 0, ENABLED = 1 }


	/**Inserts DVB Network Information Table (NIT) at the specified table repetition interval. */
	export interface DvbNitSettings {
		NetworkId?: number;
		NetworkName?: string;
		NitInterval?: number;
	}


	/**Selects method of inserting SDT information into output stream.  "Follow input SDT" copies SDT information from input stream to  output stream. "Follow input SDT if present" copies SDT information from  input stream to output stream if SDT information is present in the input, otherwise it will fall back on the user-defined values. Enter "SDT  Manually" means user will enter the SDT information. "No SDT" means output  stream will not contain SDT information. */
	export enum OutputSdt { SDT_FOLLOW = 0, SDT_FOLLOW_IF_PRESENT = 1, SDT_MANUAL = 2, SDT_NONE = 3 }


	/**Inserts DVB Service Description Table (NIT) at the specified table repetition interval. */
	export interface DvbSdtSettings {

		/**Selects method of inserting SDT information into output stream.  "Follow input SDT" copies SDT information from input stream to  output stream. "Follow input SDT if present" copies SDT information from  input stream to output stream if SDT information is present in the input, otherwise it will fall back on the user-defined values. Enter "SDT  Manually" means user will enter the SDT information. "No SDT" means output  stream will not contain SDT information. */
		OutputSdt?: DvbSdtSettingsOutputSdt;
		SdtInterval?: number;
		ServiceName?: string;
		ServiceProviderName?: string;
	}

	export enum DvbSdtSettingsOutputSdt { SDT_FOLLOW = 0, SDT_FOLLOW_IF_PRESENT = 1, SDT_MANUAL = 2, SDT_NONE = 3 }


	/**If no explicit x_position or y_position is provided, setting alignment to centered will place the captions at the bottom center of the output. Similarly, setting a left alignment will align captions to the bottom left of the output. If x and y positions are given in conjunction with the alignment parameter, the font will be justified (either left or centered) relative to those coordinates. This option is not valid for source captions that are STL, 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match. */
	export enum DvbSubtitleAlignment { CENTERED = 0, LEFT = 1 }


	/**
	 * Specifies the color of the rectangle behind the captions.
	 * All burn-in and DVB-Sub font settings must match.
	 */
	export enum DvbSubtitleBackgroundColor { NONE = 0, BLACK = 1, WHITE = 2 }


	/**Specifies the color of the burned-in captions. This option is not valid for source captions that are STL, 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match. */
	export enum DvbSubtitleFontColor { WHITE = 0, BLACK = 1, YELLOW = 2, RED = 3, GREEN = 4, BLUE = 5 }


	/**Specifies font outline color. This option is not valid for source captions that are either 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match. */
	export enum DvbSubtitleOutlineColor { BLACK = 0, WHITE = 1, YELLOW = 2, RED = 3, GREEN = 4, BLUE = 5 }


	/**
	 * Specifies the color of the shadow cast by the captions.
	 * All burn-in and DVB-Sub font settings must match.
	 */
	export enum DvbSubtitleShadowColor { NONE = 0, BLACK = 1, WHITE = 2 }


	/**Specify whether your DVB subtitles are standard or for hearing impaired. Choose hearing impaired if your subtitles include audio descriptions and dialogue. Choose standard if your subtitles include only dialogue. */
	export enum DvbSubtitlingType { HEARING_IMPAIRED = 0, STANDARD = 1 }


	/**Only applies to jobs with input captions in Teletext or STL formats. Specify whether the spacing between letters in your captions is set by the captions grid or varies depending on letter width. Choose fixed grid to conform to the spacing specified in the captions file more accurately. Choose proportional to make the text easier to read if the captions are closed caption. */
	export enum DvbSubtitleTeletextSpacing { FIXED_GRID = 0, PROPORTIONAL = 1 }


	/**Inserts DVB Time and Date Table (TDT) at the specified table repetition interval. */
	export interface DvbTdtSettings {
		TdtInterval?: number;
	}


	/**Specify the bitstream mode for the E-AC-3 stream that the encoder emits. For more information about the EAC3 bitstream mode, see ATSC A/52-2012 (Annex E). */
	export enum Eac3AtmosBitstreamMode { COMPLETE_MAIN = 0 }


	/**The coding mode for Dolby Digital Plus JOC (Atmos) is always 9.1.6 (CODING_MODE_9_1_6). */
	export enum Eac3AtmosCodingMode { CODING_MODE_9_1_6 = 0 }


	/**Enable Dolby Dialogue Intelligence to adjust loudness based on dialogue analysis. */
	export enum Eac3AtmosDialogueIntelligence { ENABLED = 0, DISABLED = 1 }


	/**Specify the absolute peak level for a signal with dynamic range compression. */
	export enum Eac3AtmosDynamicRangeCompressionLine { NONE = 0, FILM_STANDARD = 1, FILM_LIGHT = 2, MUSIC_STANDARD = 3, MUSIC_LIGHT = 4, SPEECH = 5 }


	/**Specify how the service limits the audio dynamic range when compressing the audio. */
	export enum Eac3AtmosDynamicRangeCompressionRf { NONE = 0, FILM_STANDARD = 1, FILM_LIGHT = 2, MUSIC_STANDARD = 3, MUSIC_LIGHT = 4, SPEECH = 5 }


	/**Choose how the service meters the loudness of your audio. */
	export enum Eac3AtmosMeteringMode { LEQ_A = 0, ITU_BS_1770_1 = 1, ITU_BS_1770_2 = 2, ITU_BS_1770_3 = 3, ITU_BS_1770_4 = 4 }


	/**Choose how the service does stereo downmixing. */
	export enum Eac3AtmosStereoDownmix { NOT_INDICATED = 0, STEREO = 1, SURROUND = 2, DPL2 = 3 }


	/**Specify whether your input audio has an additional center rear surround channel matrix encoded into your left and right surround channels. */
	export enum Eac3AtmosSurroundExMode { NOT_INDICATED = 0, ENABLED = 1, DISABLED = 2 }


	/**If set to ATTENUATE_3_DB, applies a 3 dB attenuation to the surround channels. Only used for 3/2 coding mode. */
	export enum Eac3AttenuationControl { ATTENUATE_3_DB = 0, NONE = 1 }


	/**Specify the bitstream mode for the E-AC-3 stream that the encoder emits. For more information about the EAC3 bitstream mode, see ATSC A/52-2012 (Annex E). */
	export enum Eac3BitstreamMode { COMPLETE_MAIN = 0, COMMENTARY = 1, EMERGENCY = 2, HEARING_IMPAIRED = 3, VISUALLY_IMPAIRED = 4 }


	/**Dolby Digital Plus coding mode. Determines number of channels. */
	export enum Eac3CodingMode { CODING_MODE_1_0 = 0, CODING_MODE_2_0 = 1, CODING_MODE_3_2 = 2 }


	/**Activates a DC highpass filter for all input channels. */
	export enum Eac3DcFilter { ENABLED = 0, DISABLED = 1 }


	/**Specify the absolute peak level for a signal with dynamic range compression. */
	export enum Eac3DynamicRangeCompressionLine { NONE = 0, FILM_STANDARD = 1, FILM_LIGHT = 2, MUSIC_STANDARD = 3, MUSIC_LIGHT = 4, SPEECH = 5 }


	/**Specify how the service limits the audio dynamic range when compressing the audio. */
	export enum Eac3DynamicRangeCompressionRf { NONE = 0, FILM_STANDARD = 1, FILM_LIGHT = 2, MUSIC_STANDARD = 3, MUSIC_LIGHT = 4, SPEECH = 5 }


	/**When encoding 3/2 audio, controls whether the LFE channel is enabled */
	export enum Eac3LfeControl { LFE = 0, NO_LFE = 1 }


	/**Applies a 120Hz lowpass filter to the LFE channel prior to encoding. Only valid with 3_2_LFE coding mode. */
	export enum Eac3LfeFilter { ENABLED = 0, DISABLED = 1 }


	/**When set to FOLLOW_INPUT, encoder metadata will be sourced from the DD, DD+, or DolbyE decoder that supplied this audio data. If audio was not supplied from one of these streams, then the static metadata settings will be used. */
	export enum Eac3MetadataControl { FOLLOW_INPUT = 0, USE_CONFIGURED = 1 }


	/**When set to WHEN_POSSIBLE, input DD+ audio will be passed through if it is present on the input. this detection is dynamic over the life of the transcode. Inputs that alternate between DD+ and non-DD+ content will have a consistent DD+ output as the system alternates between passthrough and encoding. */
	export enum Eac3PassthroughControl { WHEN_POSSIBLE = 0, NO_PASSTHROUGH = 1 }


	/**Controls the amount of phase-shift applied to the surround channels. Only used for 3/2 coding mode. */
	export enum Eac3PhaseControl { SHIFT_90_DEGREES = 0, NO_SHIFT = 1 }


	/**Choose how the service does stereo downmixing. This setting only applies if you keep the default value of 3/2 - L, R, C, Ls, Rs (CODING_MODE_3_2) for the setting Coding mode (Eac3CodingMode). If you choose a different value for Coding mode, the service ignores Stereo downmix (Eac3StereoDownmix). */
	export enum Eac3StereoDownmix { NOT_INDICATED = 0, LO_RO = 1, LT_RT = 2, DPL2 = 3 }


	/**When encoding 3/2 audio, sets whether an extra center back surround channel is matrix encoded into the left and right surround channels. */
	export enum Eac3SurroundExMode { NOT_INDICATED = 0, ENABLED = 1, DISABLED = 2 }


	/**When encoding 2/0 audio, sets whether Dolby Surround is matrix encoded into the two channels. */
	export enum Eac3SurroundMode { NOT_INDICATED = 0, ENABLED = 1, DISABLED = 2 }


	/**Specify whether this set of input captions appears in your outputs in both 608 and 708 format. If you choose Upconvert (UPCONVERT), MediaConvert includes the captions data in two ways: it passes the 608 data through using the 608 compatibility bytes fields of the 708 wrapper, and it also translates the 608 data into 708. */
	export enum EmbeddedConvert608To708 { UPCONVERT = 0, DISABLED = 1 }


	/**By default, the service terminates any unterminated captions at the end of each input. If you want the caption to continue onto your next input, disable this setting. */
	export enum EmbeddedTerminateCaptions { END_OF_INPUT = 0, DISABLED = 1 }


	/**Describes an account-specific API endpoint. */
	export interface Endpoint {
		Url?: string;
	}


	/**ESAM ManifestConfirmConditionNotification defined by OC-SP-ESAM-API-I03-131025. */
	export interface EsamManifestConfirmConditionNotification {
		MccXml?: string;
	}


	/**ESAM SignalProcessingNotification data defined by OC-SP-ESAM-API-I03-131025. */
	export interface EsamSignalProcessingNotification {
		SccXml?: string;
	}


	/**If set to PROGRESSIVE_DOWNLOAD, the MOOV atom is relocated to the beginning of the archive as required for progressive downloading. Otherwise it is placed normally at the end. */
	export enum F4vMoovPlacement { PROGRESSIVE_DOWNLOAD = 0, NORMAL = 1 }


	/**Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to FILE_GROUP_SETTINGS. */
	export interface FileGroupSettings {
		Destination?: string;

		/**Settings associated with the destination. Will vary based on the type of destination */
		DestinationSettings?: DestinationSettings;
	}


	/**Specify whether this set of input captions appears in your outputs in both 608 and 708 format. If you choose Upconvert (UPCONVERT), MediaConvert includes the captions data in two ways: it passes the 608 data through using the 608 compatibility bytes fields of the 708 wrapper, and it also translates the 608 data into 708. */
	export enum FileSourceConvert608To708 { UPCONVERT = 0, DISABLED = 1 }


	/**Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value FRAME_CAPTURE. */
	export interface FrameCaptureSettings {
		FramerateDenominator?: number;
		FramerateNumerator?: number;
		MaxCaptures?: number;
		Quality?: number;
	}


	/**Adaptive quantization. Allows intra-frame quantizers to vary to improve visual quality. */
	export enum H264AdaptiveQuantization { OFF = 0, LOW = 1, MEDIUM = 2, HIGH = 3, HIGHER = 4, MAX = 5 }


	/**Specify an H.264 level that is consistent with your output video settings. If you aren't sure what level to specify, choose Auto (AUTO). */
	export enum H264CodecLevel { AUTO = 0, LEVEL_1 = 1, LEVEL_1_1 = 2, LEVEL_1_2 = 3, LEVEL_1_3 = 4, LEVEL_2 = 5, LEVEL_2_1 = 6, LEVEL_2_2 = 7, LEVEL_3 = 8, LEVEL_3_1 = 9, LEVEL_3_2 = 10, LEVEL_4 = 11, LEVEL_4_1 = 12, LEVEL_4_2 = 13, LEVEL_5 = 14, LEVEL_5_1 = 15, LEVEL_5_2 = 16 }


	/**H.264 Profile. High 4:2:2 and 10-bit profiles are only available with the AVC-I License. */
	export enum H264CodecProfile { BASELINE = 0, HIGH = 1, HIGH_10BIT = 2, HIGH_422 = 3, HIGH_422_10BIT = 4, MAIN = 5 }


	/**Choose Adaptive to improve subjective video quality for high-motion content. This will cause the service to use fewer B-frames (which infer information based on other frames) for high-motion portions of the video and more B-frames for low-motion portions. The maximum number of B-frames is limited by the value you provide for the setting B frames between reference frames (numberBFramesBetweenReferenceFrames). */
	export enum H264DynamicSubGop { ADAPTIVE = 0, STATIC = 1 }


	/**Entropy encoding mode. Use CABAC (must be in Main or High profile) or CAVLC. */
	export enum H264EntropyEncoding { CABAC = 0, CAVLC = 1 }


	/**Choosing FORCE_FIELD disables PAFF encoding for interlaced outputs. */
	export enum H264FieldEncoding { PAFF = 0, FORCE_FIELD = 1 }


	/**Adjust quantization within each frame to reduce flicker or 'pop' on I-frames. */
	export enum H264FlickerAdaptiveQuantization { DISABLED = 0, ENABLED = 1 }


	/**If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator. */
	export enum H264FramerateControl { INITIALIZE_FROM_SOURCE = 0, SPECIFIED = 1 }


	/**Optional. Specify how the transcoder performs framerate conversion. The default behavior is to use duplicate drop conversion. */
	export enum H264FramerateConversionAlgorithm { DUPLICATE_DROP = 0, INTERPOLATE = 1 }


	/**If enable, use reference B frames for GOP structures that have B frames > 1. */
	export enum H264GopBReference { DISABLED = 0, ENABLED = 1 }


	/**Indicates if the GOP Size in H264 is specified in frames or seconds. If seconds the system will convert the GOP Size into a frame count at run time. */
	export enum H264GopSizeUnits { FRAMES = 0, SECONDS = 1 }


	/**
	 * Use Interlace mode (InterlaceMode) to choose the scan line type for the output. * Top Field First (TOP_FIELD) and Bottom Field First (BOTTOM_FIELD) produce interlaced output with the entire output having the same field polarity (top or bottom first). * Follow, Default Top (FOLLOW_TOP_FIELD) and Follow, Default Bottom (FOLLOW_BOTTOM_FIELD) use the same field polarity as the source. Therefore, behavior depends on the input scan type, as follows.
	 *   - If the source is interlaced, the output will be interlaced with the same polarity as the source (it will follow the source). The output could therefore be a mix of "top field first" and "bottom field first".
	 *   - If the source is progressive, the output will be interlaced with "top field first" or "bottom field first" polarity, depending on which of the Follow options you chose.
	 */
	export enum H264InterlaceMode { PROGRESSIVE = 0, TOP_FIELD = 1, BOTTOM_FIELD = 2, FOLLOW_TOP_FIELD = 3, FOLLOW_BOTTOM_FIELD = 4 }


	/**Optional. Specify how the service determines the pixel aspect ratio (PAR) for this output. The default behavior, Follow source (INITIALIZE_FROM_SOURCE), uses the PAR from your input video for your output. To use a different PAR, choose (SPECIFIED). In the console, SPECIFIED corresponds to any value other than Follow source. When you choose SPECIFIED for this setting, you must also specify values for the parNumerator and parDenominator settings. */
	export enum H264ParControl { INITIALIZE_FROM_SOURCE = 0, SPECIFIED = 1 }


	/**Optional. Use Quality tuning level (qualityTuningLevel) to choose how you want to trade off encoding speed for output video quality. The default behavior is faster, lower quality, single-pass encoding. */
	export enum H264QualityTuningLevel { SINGLE_PASS = 0, SINGLE_PASS_HQ = 1, MULTI_PASS_HQ = 2 }


	/**Settings for quality-defined variable bitrate encoding with the H.264 codec. Required when you set Rate control mode to QVBR. Not valid when you set Rate control mode to a value other than QVBR, or when you don't define Rate control mode. */
	export interface H264QvbrSettings {
		MaxAverageBitrate?: number;
		QvbrQualityLevel?: number;
		QvbrQualityLevelFineTune?: number;
	}


	/**Use this setting to specify whether this output has a variable bitrate (VBR), constant bitrate (CBR) or quality-defined variable bitrate (QVBR). */
	export enum H264RateControlMode { VBR = 0, CBR = 1, QVBR = 2 }


	/**Places a PPS header on each encoded picture, even if repeated. */
	export enum H264RepeatPps { DISABLED = 0, ENABLED = 1 }


	/**Enable this setting to insert I-frames at scene changes that the service automatically detects. This improves video quality and is enabled by default. If this output uses QVBR, choose Transition detection (TRANSITION_DETECTION) for further video quality improvement. For more information about QVBR, see https://docs.aws.amazon.com/console/mediaconvert/cbr-vbr-qvbr. */
	export enum H264SceneChangeDetect { DISABLED = 0, ENABLED = 1, TRANSITION_DETECTION = 2 }


	/**Enables Slow PAL rate conversion. 23.976fps and 24fps input is relabeled as 25fps, and audio is sped up correspondingly. */
	export enum H264SlowPal { DISABLED = 0, ENABLED = 1 }


	/**Adjust quantization within each frame based on spatial variation of content complexity. */
	export enum H264SpatialAdaptiveQuantization { DISABLED = 0, ENABLED = 1 }


	/**Produces a bitstream compliant with SMPTE RP-2027. */
	export enum H264Syntax { DEFAULT = 0, RP2027 = 1 }


	/**This field applies only if the Streams > Advanced > Framerate (framerate) field  is set to 29.970. This field works with the Streams > Advanced > Preprocessors > Deinterlacer  field (deinterlace_mode) and the Streams > Advanced > Interlaced Mode field (interlace_mode)  to identify the scan type for the output: Progressive, Interlaced, Hard Telecine or Soft Telecine. - Hard: produces 29.97i output from 23.976 input. - Soft: produces 23.976; the player converts this output to 29.97i. */
	export enum H264Telecine { NONE = 0, SOFT = 1, HARD = 2 }


	/**Adjust quantization within each frame based on temporal variation of content complexity. */
	export enum H264TemporalAdaptiveQuantization { DISABLED = 0, ENABLED = 1 }


	/**Inserts timecode for each frame as 4 bytes of an unregistered SEI message. */
	export enum H264UnregisteredSeiTimecode { DISABLED = 0, ENABLED = 1 }


	/**Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value H_264. */
	export interface H264Settings {

		/**Adaptive quantization. Allows intra-frame quantizers to vary to improve visual quality. */
		AdaptiveQuantization?: H264SettingsAdaptiveQuantization;
		Bitrate?: number;

		/**Specify an H.264 level that is consistent with your output video settings. If you aren't sure what level to specify, choose Auto (AUTO). */
		CodecLevel?: H264SettingsCodecLevel;

		/**H.264 Profile. High 4:2:2 and 10-bit profiles are only available with the AVC-I License. */
		CodecProfile?: H264SettingsCodecProfile;

		/**Choose Adaptive to improve subjective video quality for high-motion content. This will cause the service to use fewer B-frames (which infer information based on other frames) for high-motion portions of the video and more B-frames for low-motion portions. The maximum number of B-frames is limited by the value you provide for the setting B frames between reference frames (numberBFramesBetweenReferenceFrames). */
		DynamicSubGop?: H264SettingsDynamicSubGop;

		/**Entropy encoding mode. Use CABAC (must be in Main or High profile) or CAVLC. */
		EntropyEncoding?: H264SettingsEntropyEncoding;

		/**Choosing FORCE_FIELD disables PAFF encoding for interlaced outputs. */
		FieldEncoding?: H264SettingsFieldEncoding;

		/**Adjust quantization within each frame to reduce flicker or 'pop' on I-frames. */
		FlickerAdaptiveQuantization?: H264SettingsFlickerAdaptiveQuantization;

		/**If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator. */
		FramerateControl?: H264SettingsFramerateControl;

		/**Optional. Specify how the transcoder performs framerate conversion. The default behavior is to use duplicate drop conversion. */
		FramerateConversionAlgorithm?: H264SettingsFramerateConversionAlgorithm;
		FramerateDenominator?: number;
		FramerateNumerator?: number;

		/**If enable, use reference B frames for GOP structures that have B frames > 1. */
		GopBReference?: H264SettingsGopBReference;
		GopClosedCadence?: number;
		GopSize?: number;

		/**Indicates if the GOP Size in H264 is specified in frames or seconds. If seconds the system will convert the GOP Size into a frame count at run time. */
		GopSizeUnits?: H264SettingsGopSizeUnits;
		HrdBufferInitialFillPercentage?: number;
		HrdBufferSize?: number;

		/**
		 * Use Interlace mode (InterlaceMode) to choose the scan line type for the output. * Top Field First (TOP_FIELD) and Bottom Field First (BOTTOM_FIELD) produce interlaced output with the entire output having the same field polarity (top or bottom first). * Follow, Default Top (FOLLOW_TOP_FIELD) and Follow, Default Bottom (FOLLOW_BOTTOM_FIELD) use the same field polarity as the source. Therefore, behavior depends on the input scan type, as follows.
		 * - If the source is interlaced, the output will be interlaced with the same polarity as the source (it will follow the source). The output could therefore be a mix of "top field first" and "bottom field first".
		 * - If the source is progressive, the output will be interlaced with "top field first" or "bottom field first" polarity, depending on which of the Follow options you chose.
		 */
		InterlaceMode?: H264SettingsInterlaceMode;
		MaxBitrate?: number;
		MinIInterval?: number;
		NumberBFramesBetweenReferenceFrames?: number;
		NumberReferenceFrames?: number;

		/**Optional. Specify how the service determines the pixel aspect ratio (PAR) for this output. The default behavior, Follow source (INITIALIZE_FROM_SOURCE), uses the PAR from your input video for your output. To use a different PAR, choose (SPECIFIED). In the console, SPECIFIED corresponds to any value other than Follow source. When you choose SPECIFIED for this setting, you must also specify values for the parNumerator and parDenominator settings. */
		ParControl?: H264SettingsParControl;
		ParDenominator?: number;
		ParNumerator?: number;

		/**Optional. Use Quality tuning level (qualityTuningLevel) to choose how you want to trade off encoding speed for output video quality. The default behavior is faster, lower quality, single-pass encoding. */
		QualityTuningLevel?: H264SettingsQualityTuningLevel;

		/**Settings for quality-defined variable bitrate encoding with the H.264 codec. Required when you set Rate control mode to QVBR. Not valid when you set Rate control mode to a value other than QVBR, or when you don't define Rate control mode. */
		QvbrSettings?: H264QvbrSettings;

		/**Use this setting to specify whether this output has a variable bitrate (VBR), constant bitrate (CBR) or quality-defined variable bitrate (QVBR). */
		RateControlMode?: H264SettingsRateControlMode;

		/**Places a PPS header on each encoded picture, even if repeated. */
		RepeatPps?: H264SettingsRepeatPps;

		/**Enable this setting to insert I-frames at scene changes that the service automatically detects. This improves video quality and is enabled by default. If this output uses QVBR, choose Transition detection (TRANSITION_DETECTION) for further video quality improvement. For more information about QVBR, see https://docs.aws.amazon.com/console/mediaconvert/cbr-vbr-qvbr. */
		SceneChangeDetect?: H264SettingsSceneChangeDetect;
		Slices?: number;

		/**Enables Slow PAL rate conversion. 23.976fps and 24fps input is relabeled as 25fps, and audio is sped up correspondingly. */
		SlowPal?: H264SettingsSlowPal;
		Softness?: number;

		/**Adjust quantization within each frame based on spatial variation of content complexity. */
		SpatialAdaptiveQuantization?: H264SettingsSpatialAdaptiveQuantization;

		/**Produces a bitstream compliant with SMPTE RP-2027. */
		Syntax?: H264SettingsSyntax;

		/**This field applies only if the Streams > Advanced > Framerate (framerate) field  is set to 29.970. This field works with the Streams > Advanced > Preprocessors > Deinterlacer  field (deinterlace_mode) and the Streams > Advanced > Interlaced Mode field (interlace_mode)  to identify the scan type for the output: Progressive, Interlaced, Hard Telecine or Soft Telecine. - Hard: produces 29.97i output from 23.976 input. - Soft: produces 23.976; the player converts this output to 29.97i. */
		Telecine?: H264SettingsTelecine;

		/**Adjust quantization within each frame based on temporal variation of content complexity. */
		TemporalAdaptiveQuantization?: H264SettingsTemporalAdaptiveQuantization;

		/**Inserts timecode for each frame as 4 bytes of an unregistered SEI message. */
		UnregisteredSeiTimecode?: H264SettingsUnregisteredSeiTimecode;
	}

	export enum H264SettingsAdaptiveQuantization { OFF = 0, LOW = 1, MEDIUM = 2, HIGH = 3, HIGHER = 4, MAX = 5 }

	export enum H264SettingsCodecLevel { AUTO = 0, LEVEL_1 = 1, LEVEL_1_1 = 2, LEVEL_1_2 = 3, LEVEL_1_3 = 4, LEVEL_2 = 5, LEVEL_2_1 = 6, LEVEL_2_2 = 7, LEVEL_3 = 8, LEVEL_3_1 = 9, LEVEL_3_2 = 10, LEVEL_4 = 11, LEVEL_4_1 = 12, LEVEL_4_2 = 13, LEVEL_5 = 14, LEVEL_5_1 = 15, LEVEL_5_2 = 16 }

	export enum H264SettingsCodecProfile { BASELINE = 0, HIGH = 1, HIGH_10BIT = 2, HIGH_422 = 3, HIGH_422_10BIT = 4, MAIN = 5 }

	export enum H264SettingsDynamicSubGop { ADAPTIVE = 0, STATIC = 1 }

	export enum H264SettingsEntropyEncoding { CABAC = 0, CAVLC = 1 }

	export enum H264SettingsFieldEncoding { PAFF = 0, FORCE_FIELD = 1 }

	export enum H264SettingsFlickerAdaptiveQuantization { DISABLED = 0, ENABLED = 1 }

	export enum H264SettingsFramerateControl { INITIALIZE_FROM_SOURCE = 0, SPECIFIED = 1 }

	export enum H264SettingsFramerateConversionAlgorithm { DUPLICATE_DROP = 0, INTERPOLATE = 1 }

	export enum H264SettingsGopBReference { DISABLED = 0, ENABLED = 1 }

	export enum H264SettingsGopSizeUnits { FRAMES = 0, SECONDS = 1 }

	export enum H264SettingsInterlaceMode { PROGRESSIVE = 0, TOP_FIELD = 1, BOTTOM_FIELD = 2, FOLLOW_TOP_FIELD = 3, FOLLOW_BOTTOM_FIELD = 4 }

	export enum H264SettingsParControl { INITIALIZE_FROM_SOURCE = 0, SPECIFIED = 1 }

	export enum H264SettingsQualityTuningLevel { SINGLE_PASS = 0, SINGLE_PASS_HQ = 1, MULTI_PASS_HQ = 2 }

	export enum H264SettingsRateControlMode { VBR = 0, CBR = 1, QVBR = 2 }

	export enum H264SettingsRepeatPps { DISABLED = 0, ENABLED = 1 }

	export enum H264SettingsSceneChangeDetect { DISABLED = 0, ENABLED = 1, TRANSITION_DETECTION = 2 }

	export enum H264SettingsSlowPal { DISABLED = 0, ENABLED = 1 }

	export enum H264SettingsSpatialAdaptiveQuantization { DISABLED = 0, ENABLED = 1 }

	export enum H264SettingsSyntax { DEFAULT = 0, RP2027 = 1 }

	export enum H264SettingsTelecine { NONE = 0, SOFT = 1, HARD = 2 }

	export enum H264SettingsTemporalAdaptiveQuantization { DISABLED = 0, ENABLED = 1 }

	export enum H264SettingsUnregisteredSeiTimecode { DISABLED = 0, ENABLED = 1 }


	/**Adaptive quantization. Allows intra-frame quantizers to vary to improve visual quality. */
	export enum H265AdaptiveQuantization { OFF = 0, LOW = 1, MEDIUM = 2, HIGH = 3, HIGHER = 4, MAX = 5 }


	/**Enables Alternate Transfer Function SEI message for outputs using Hybrid Log Gamma (HLG) Electro-Optical Transfer Function (EOTF). */
	export enum H265AlternateTransferFunctionSei { DISABLED = 0, ENABLED = 1 }


	/**H.265 Level. */
	export enum H265CodecLevel { AUTO = 0, LEVEL_1 = 1, LEVEL_2 = 2, LEVEL_2_1 = 3, LEVEL_3 = 4, LEVEL_3_1 = 5, LEVEL_4 = 6, LEVEL_4_1 = 7, LEVEL_5 = 8, LEVEL_5_1 = 9, LEVEL_5_2 = 10, LEVEL_6 = 11, LEVEL_6_1 = 12, LEVEL_6_2 = 13 }


	/**Represents the Profile and Tier, per the HEVC (H.265) specification. Selections are grouped as [Profile] / [Tier], so "Main/High" represents Main Profile with High Tier. 4:2:2 profiles are only available with the HEVC 4:2:2 License. */
	export enum H265CodecProfile { MAIN_MAIN = 0, MAIN_HIGH = 1, MAIN10_MAIN = 2, MAIN10_HIGH = 3, MAIN_422_8BIT_MAIN = 4, MAIN_422_8BIT_HIGH = 5, MAIN_422_10BIT_MAIN = 6, MAIN_422_10BIT_HIGH = 7 }


	/**Choose Adaptive to improve subjective video quality for high-motion content. This will cause the service to use fewer B-frames (which infer information based on other frames) for high-motion portions of the video and more B-frames for low-motion portions. The maximum number of B-frames is limited by the value you provide for the setting B frames between reference frames (numberBFramesBetweenReferenceFrames). */
	export enum H265DynamicSubGop { ADAPTIVE = 0, STATIC = 1 }


	/**Adjust quantization within each frame to reduce flicker or 'pop' on I-frames. */
	export enum H265FlickerAdaptiveQuantization { DISABLED = 0, ENABLED = 1 }


	/**If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator. */
	export enum H265FramerateControl { INITIALIZE_FROM_SOURCE = 0, SPECIFIED = 1 }


	/**When set to INTERPOLATE, produces smoother motion during frame rate conversion. */
	export enum H265FramerateConversionAlgorithm { DUPLICATE_DROP = 0, INTERPOLATE = 1 }


	/**If enable, use reference B frames for GOP structures that have B frames > 1. */
	export enum H265GopBReference { DISABLED = 0, ENABLED = 1 }


	/**Indicates if the GOP Size in H265 is specified in frames or seconds. If seconds the system will convert the GOP Size into a frame count at run time. */
	export enum H265GopSizeUnits { FRAMES = 0, SECONDS = 1 }


	/**Choose the scan line type for the output. Choose Progressive (PROGRESSIVE) to create a progressive output, regardless of the scan type of your input. Choose Top Field First (TOP_FIELD) or Bottom Field First (BOTTOM_FIELD) to create an output that's interlaced with the same field polarity throughout. Choose Follow, Default Top (FOLLOW_TOP_FIELD) or Follow, Default Bottom (FOLLOW_BOTTOM_FIELD) to create an interlaced output with the same field polarity as the source. If the source is interlaced, the output will be interlaced with the same polarity as the source (it will follow the source). The output could therefore be a mix of "top field first" and "bottom field first". If the source is progressive, your output will be interlaced with "top field first" or "bottom field first" polarity, depending on which of the Follow options you chose. If you don't choose a value, the service will default to Progressive (PROGRESSIVE). */
	export enum H265InterlaceMode { PROGRESSIVE = 0, TOP_FIELD = 1, BOTTOM_FIELD = 2, FOLLOW_TOP_FIELD = 3, FOLLOW_BOTTOM_FIELD = 4 }


	/**Optional. Specify how the service determines the pixel aspect ratio (PAR) for this output. The default behavior, Follow source (INITIALIZE_FROM_SOURCE), uses the PAR from your input video for your output. To use a different PAR, choose (SPECIFIED). In the console, SPECIFIED corresponds to any value other than Follow source. When you choose SPECIFIED for this setting, you must also specify values for the parNumerator and parDenominator settings. */
	export enum H265ParControl { INITIALIZE_FROM_SOURCE = 0, SPECIFIED = 1 }


	/**Optional. Use Quality tuning level (qualityTuningLevel) to choose how you want to trade off encoding speed for output video quality. The default behavior is faster, lower quality, single-pass encoding. */
	export enum H265QualityTuningLevel { SINGLE_PASS = 0, SINGLE_PASS_HQ = 1, MULTI_PASS_HQ = 2 }


	/**Settings for quality-defined variable bitrate encoding with the H.265 codec. Required when you set Rate control mode to QVBR. Not valid when you set Rate control mode to a value other than QVBR, or when you don't define Rate control mode. */
	export interface H265QvbrSettings {
		MaxAverageBitrate?: number;
		QvbrQualityLevel?: number;
		QvbrQualityLevelFineTune?: number;
	}


	/**Use this setting to specify whether this output has a variable bitrate (VBR), constant bitrate (CBR) or quality-defined variable bitrate (QVBR). */
	export enum H265RateControlMode { VBR = 0, CBR = 1, QVBR = 2 }


	/**Specify Sample Adaptive Offset (SAO) filter strength.  Adaptive mode dynamically selects best strength based on content */
	export enum H265SampleAdaptiveOffsetFilterMode { DEFAULT = 0, ADAPTIVE = 1, OFF = 2 }


	/**Enable this setting to insert I-frames at scene changes that the service automatically detects. This improves video quality and is enabled by default. If this output uses QVBR, choose Transition detection (TRANSITION_DETECTION) for further video quality improvement. For more information about QVBR, see https://docs.aws.amazon.com/console/mediaconvert/cbr-vbr-qvbr. */
	export enum H265SceneChangeDetect { DISABLED = 0, ENABLED = 1, TRANSITION_DETECTION = 2 }


	/**Enables Slow PAL rate conversion. 23.976fps and 24fps input is relabeled as 25fps, and audio is sped up correspondingly. */
	export enum H265SlowPal { DISABLED = 0, ENABLED = 1 }


	/**Adjust quantization within each frame based on spatial variation of content complexity. */
	export enum H265SpatialAdaptiveQuantization { DISABLED = 0, ENABLED = 1 }


	/**This field applies only if the Streams > Advanced > Framerate (framerate) field  is set to 29.970. This field works with the Streams > Advanced > Preprocessors > Deinterlacer  field (deinterlace_mode) and the Streams > Advanced > Interlaced Mode field (interlace_mode)  to identify the scan type for the output: Progressive, Interlaced, Hard Telecine or Soft Telecine. - Hard: produces 29.97i output from 23.976 input. - Soft: produces 23.976; the player converts this output to 29.97i. */
	export enum H265Telecine { NONE = 0, SOFT = 1, HARD = 2 }


	/**Adjust quantization within each frame based on temporal variation of content complexity. */
	export enum H265TemporalAdaptiveQuantization { DISABLED = 0, ENABLED = 1 }


	/**Enables temporal layer identifiers in the encoded bitstream. Up to 3 layers are supported depending on GOP structure: I- and P-frames form one layer, reference B-frames can form a second layer and non-reference b-frames can form a third layer. Decoders can optionally decode only the lower temporal layers to generate a lower frame rate output. For example, given a bitstream with temporal IDs and with b-frames = 1 (i.e. IbPbPb display order), a decoder could decode all the frames for full frame rate output or only the I and P frames (lowest temporal layer) for a half frame rate output. */
	export enum H265TemporalIds { DISABLED = 0, ENABLED = 1 }


	/**Enable use of tiles, allowing horizontal as well as vertical subdivision of the encoded pictures. */
	export enum H265Tiles { DISABLED = 0, ENABLED = 1 }


	/**Inserts timecode for each frame as 4 bytes of an unregistered SEI message. */
	export enum H265UnregisteredSeiTimecode { DISABLED = 0, ENABLED = 1 }


	/**If the location of parameter set NAL units doesn't matter in your workflow, ignore this setting. Use this setting only with CMAF or DASH outputs, or with standalone file outputs in an MPEG-4 container (MP4 outputs). Choose HVC1 to mark your output as HVC1. This makes your output compliant with the following specification: ISO IECJTC1 SC29 N13798 Text ISO/IEC FDIS 14496-15 3rd Edition. For these outputs, the service stores parameter set NAL units in the sample headers but not in the samples directly. For MP4 outputs, when you choose HVC1, your output video might not work properly with some downstream systems and video players. The service defaults to marking your output as HEV1. For these outputs, the service writes parameter set NAL units directly into the samples. */
	export enum H265WriteMp4PackagingType { HVC1 = 0, HEV1 = 1 }


	/**Settings for H265 codec */
	export interface H265Settings {

		/**Adaptive quantization. Allows intra-frame quantizers to vary to improve visual quality. */
		AdaptiveQuantization?: H265SettingsAdaptiveQuantization;

		/**Enables Alternate Transfer Function SEI message for outputs using Hybrid Log Gamma (HLG) Electro-Optical Transfer Function (EOTF). */
		AlternateTransferFunctionSei?: H265SettingsAlternateTransferFunctionSei;
		Bitrate?: number;

		/**H.265 Level. */
		CodecLevel?: H265SettingsCodecLevel;

		/**Represents the Profile and Tier, per the HEVC (H.265) specification. Selections are grouped as [Profile] / [Tier], so "Main/High" represents Main Profile with High Tier. 4:2:2 profiles are only available with the HEVC 4:2:2 License. */
		CodecProfile?: H265SettingsCodecProfile;

		/**Choose Adaptive to improve subjective video quality for high-motion content. This will cause the service to use fewer B-frames (which infer information based on other frames) for high-motion portions of the video and more B-frames for low-motion portions. The maximum number of B-frames is limited by the value you provide for the setting B frames between reference frames (numberBFramesBetweenReferenceFrames). */
		DynamicSubGop?: H265SettingsDynamicSubGop;

		/**Adjust quantization within each frame to reduce flicker or 'pop' on I-frames. */
		FlickerAdaptiveQuantization?: H265SettingsFlickerAdaptiveQuantization;

		/**If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator. */
		FramerateControl?: H265SettingsFramerateControl;

		/**When set to INTERPOLATE, produces smoother motion during frame rate conversion. */
		FramerateConversionAlgorithm?: H265SettingsFramerateConversionAlgorithm;
		FramerateDenominator?: number;
		FramerateNumerator?: number;

		/**If enable, use reference B frames for GOP structures that have B frames > 1. */
		GopBReference?: H265SettingsGopBReference;
		GopClosedCadence?: number;
		GopSize?: number;

		/**Indicates if the GOP Size in H265 is specified in frames or seconds. If seconds the system will convert the GOP Size into a frame count at run time. */
		GopSizeUnits?: H265SettingsGopSizeUnits;
		HrdBufferInitialFillPercentage?: number;
		HrdBufferSize?: number;

		/**Choose the scan line type for the output. Choose Progressive (PROGRESSIVE) to create a progressive output, regardless of the scan type of your input. Choose Top Field First (TOP_FIELD) or Bottom Field First (BOTTOM_FIELD) to create an output that's interlaced with the same field polarity throughout. Choose Follow, Default Top (FOLLOW_TOP_FIELD) or Follow, Default Bottom (FOLLOW_BOTTOM_FIELD) to create an interlaced output with the same field polarity as the source. If the source is interlaced, the output will be interlaced with the same polarity as the source (it will follow the source). The output could therefore be a mix of "top field first" and "bottom field first". If the source is progressive, your output will be interlaced with "top field first" or "bottom field first" polarity, depending on which of the Follow options you chose. If you don't choose a value, the service will default to Progressive (PROGRESSIVE). */
		InterlaceMode?: H265SettingsInterlaceMode;
		MaxBitrate?: number;
		MinIInterval?: number;
		NumberBFramesBetweenReferenceFrames?: number;
		NumberReferenceFrames?: number;

		/**Optional. Specify how the service determines the pixel aspect ratio (PAR) for this output. The default behavior, Follow source (INITIALIZE_FROM_SOURCE), uses the PAR from your input video for your output. To use a different PAR, choose (SPECIFIED). In the console, SPECIFIED corresponds to any value other than Follow source. When you choose SPECIFIED for this setting, you must also specify values for the parNumerator and parDenominator settings. */
		ParControl?: H265SettingsParControl;
		ParDenominator?: number;
		ParNumerator?: number;

		/**Optional. Use Quality tuning level (qualityTuningLevel) to choose how you want to trade off encoding speed for output video quality. The default behavior is faster, lower quality, single-pass encoding. */
		QualityTuningLevel?: H265SettingsQualityTuningLevel;

		/**Settings for quality-defined variable bitrate encoding with the H.265 codec. Required when you set Rate control mode to QVBR. Not valid when you set Rate control mode to a value other than QVBR, or when you don't define Rate control mode. */
		QvbrSettings?: H265QvbrSettings;

		/**Use this setting to specify whether this output has a variable bitrate (VBR), constant bitrate (CBR) or quality-defined variable bitrate (QVBR). */
		RateControlMode?: H265SettingsRateControlMode;

		/**Specify Sample Adaptive Offset (SAO) filter strength.  Adaptive mode dynamically selects best strength based on content */
		SampleAdaptiveOffsetFilterMode?: H265SettingsSampleAdaptiveOffsetFilterMode;

		/**Enable this setting to insert I-frames at scene changes that the service automatically detects. This improves video quality and is enabled by default. If this output uses QVBR, choose Transition detection (TRANSITION_DETECTION) for further video quality improvement. For more information about QVBR, see https://docs.aws.amazon.com/console/mediaconvert/cbr-vbr-qvbr. */
		SceneChangeDetect?: H265SettingsSceneChangeDetect;
		Slices?: number;

		/**Enables Slow PAL rate conversion. 23.976fps and 24fps input is relabeled as 25fps, and audio is sped up correspondingly. */
		SlowPal?: H265SettingsSlowPal;

		/**Adjust quantization within each frame based on spatial variation of content complexity. */
		SpatialAdaptiveQuantization?: H265SettingsSpatialAdaptiveQuantization;

		/**This field applies only if the Streams > Advanced > Framerate (framerate) field  is set to 29.970. This field works with the Streams > Advanced > Preprocessors > Deinterlacer  field (deinterlace_mode) and the Streams > Advanced > Interlaced Mode field (interlace_mode)  to identify the scan type for the output: Progressive, Interlaced, Hard Telecine or Soft Telecine. - Hard: produces 29.97i output from 23.976 input. - Soft: produces 23.976; the player converts this output to 29.97i. */
		Telecine?: H265SettingsTelecine;

		/**Adjust quantization within each frame based on temporal variation of content complexity. */
		TemporalAdaptiveQuantization?: H265SettingsTemporalAdaptiveQuantization;

		/**Enables temporal layer identifiers in the encoded bitstream. Up to 3 layers are supported depending on GOP structure: I- and P-frames form one layer, reference B-frames can form a second layer and non-reference b-frames can form a third layer. Decoders can optionally decode only the lower temporal layers to generate a lower frame rate output. For example, given a bitstream with temporal IDs and with b-frames = 1 (i.e. IbPbPb display order), a decoder could decode all the frames for full frame rate output or only the I and P frames (lowest temporal layer) for a half frame rate output. */
		TemporalIds?: H265SettingsTemporalIds;

		/**Enable use of tiles, allowing horizontal as well as vertical subdivision of the encoded pictures. */
		Tiles?: H265SettingsTiles;

		/**Inserts timecode for each frame as 4 bytes of an unregistered SEI message. */
		UnregisteredSeiTimecode?: H265SettingsUnregisteredSeiTimecode;

		/**If the location of parameter set NAL units doesn't matter in your workflow, ignore this setting. Use this setting only with CMAF or DASH outputs, or with standalone file outputs in an MPEG-4 container (MP4 outputs). Choose HVC1 to mark your output as HVC1. This makes your output compliant with the following specification: ISO IECJTC1 SC29 N13798 Text ISO/IEC FDIS 14496-15 3rd Edition. For these outputs, the service stores parameter set NAL units in the sample headers but not in the samples directly. For MP4 outputs, when you choose HVC1, your output video might not work properly with some downstream systems and video players. The service defaults to marking your output as HEV1. For these outputs, the service writes parameter set NAL units directly into the samples. */
		WriteMp4PackagingType?: H265SettingsWriteMp4PackagingType;
	}

	export enum H265SettingsAdaptiveQuantization { OFF = 0, LOW = 1, MEDIUM = 2, HIGH = 3, HIGHER = 4, MAX = 5 }

	export enum H265SettingsAlternateTransferFunctionSei { DISABLED = 0, ENABLED = 1 }

	export enum H265SettingsCodecLevel { AUTO = 0, LEVEL_1 = 1, LEVEL_2 = 2, LEVEL_2_1 = 3, LEVEL_3 = 4, LEVEL_3_1 = 5, LEVEL_4 = 6, LEVEL_4_1 = 7, LEVEL_5 = 8, LEVEL_5_1 = 9, LEVEL_5_2 = 10, LEVEL_6 = 11, LEVEL_6_1 = 12, LEVEL_6_2 = 13 }

	export enum H265SettingsCodecProfile { MAIN_MAIN = 0, MAIN_HIGH = 1, MAIN10_MAIN = 2, MAIN10_HIGH = 3, MAIN_422_8BIT_MAIN = 4, MAIN_422_8BIT_HIGH = 5, MAIN_422_10BIT_MAIN = 6, MAIN_422_10BIT_HIGH = 7 }

	export enum H265SettingsDynamicSubGop { ADAPTIVE = 0, STATIC = 1 }

	export enum H265SettingsFlickerAdaptiveQuantization { DISABLED = 0, ENABLED = 1 }

	export enum H265SettingsFramerateControl { INITIALIZE_FROM_SOURCE = 0, SPECIFIED = 1 }

	export enum H265SettingsFramerateConversionAlgorithm { DUPLICATE_DROP = 0, INTERPOLATE = 1 }

	export enum H265SettingsGopBReference { DISABLED = 0, ENABLED = 1 }

	export enum H265SettingsGopSizeUnits { FRAMES = 0, SECONDS = 1 }

	export enum H265SettingsInterlaceMode { PROGRESSIVE = 0, TOP_FIELD = 1, BOTTOM_FIELD = 2, FOLLOW_TOP_FIELD = 3, FOLLOW_BOTTOM_FIELD = 4 }

	export enum H265SettingsParControl { INITIALIZE_FROM_SOURCE = 0, SPECIFIED = 1 }

	export enum H265SettingsQualityTuningLevel { SINGLE_PASS = 0, SINGLE_PASS_HQ = 1, MULTI_PASS_HQ = 2 }

	export enum H265SettingsRateControlMode { VBR = 0, CBR = 1, QVBR = 2 }

	export enum H265SettingsSampleAdaptiveOffsetFilterMode { DEFAULT = 0, ADAPTIVE = 1, OFF = 2 }

	export enum H265SettingsSceneChangeDetect { DISABLED = 0, ENABLED = 1, TRANSITION_DETECTION = 2 }

	export enum H265SettingsSlowPal { DISABLED = 0, ENABLED = 1 }

	export enum H265SettingsSpatialAdaptiveQuantization { DISABLED = 0, ENABLED = 1 }

	export enum H265SettingsTelecine { NONE = 0, SOFT = 1, HARD = 2 }

	export enum H265SettingsTemporalAdaptiveQuantization { DISABLED = 0, ENABLED = 1 }

	export enum H265SettingsTemporalIds { DISABLED = 0, ENABLED = 1 }

	export enum H265SettingsTiles { DISABLED = 0, ENABLED = 1 }

	export enum H265SettingsUnregisteredSeiTimecode { DISABLED = 0, ENABLED = 1 }

	export enum H265SettingsWriteMp4PackagingType { HVC1 = 0, HEV1 = 1 }

	export enum HlsAdMarkers { ELEMENTAL = 0, ELEMENTAL_SCTE35 = 1 }


	/**Specify the details for each additional HLS manifest that you want the service to generate for this output group. Each manifest can reference a different subset of outputs in the group. */
	export interface HlsAdditionalManifest {
		ManifestNameModifier?: string;
		SelectedOutputs?: Array<__stringMin1>;
	}


	/**Use this setting only in audio-only outputs. Choose MPEG-2 Transport Stream (M2TS) to create a file in an MPEG2-TS container. Keep the default value Automatic (AUTOMATIC) to create a raw audio-only file with no container. Regardless of the value that you specify here, if this output has video, the service will place outputs into an MPEG2-TS container. */
	export enum HlsAudioOnlyContainer { AUTOMATIC = 0, M2TS = 1 }


	/**Four types of audio-only tracks are supported: Audio-Only Variant Stream The client can play back this audio-only stream instead of video in low-bandwidth scenarios. Represented as an EXT-X-STREAM-INF in the HLS manifest. Alternate Audio, Auto Select, Default Alternate rendition that the client should try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=YES, AUTOSELECT=YES Alternate Audio, Auto Select, Not Default Alternate rendition that the client may try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=NO, AUTOSELECT=YES Alternate Audio, not Auto Select Alternate rendition that the client will not try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=NO, AUTOSELECT=NO */
	export enum HlsAudioTrackType { ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT = 0, ALTERNATE_AUDIO_AUTO_SELECT = 1, ALTERNATE_AUDIO_NOT_AUTO_SELECT = 2, AUDIO_ONLY_VARIANT_STREAM = 3 }


	/**Caption Language Mapping */
	export interface HlsCaptionLanguageMapping {
		CaptionChannel?: number;
		CustomLanguageCode?: string;

		/**Specify the language, using the ISO 639-2 three-letter code listed at https://www.loc.gov/standards/iso639-2/php/code_list.php. */
		LanguageCode?: HlsCaptionLanguageMappingLanguageCode;
		LanguageDescription?: string;
	}

	export enum HlsCaptionLanguageMappingLanguageCode { ENG = 0, SPA = 1, FRA = 2, DEU = 3, GER = 4, ZHO = 5, ARA = 6, HIN = 7, JPN = 8, RUS = 9, POR = 10, ITA = 11, URD = 12, VIE = 13, KOR = 14, PAN = 15, ABK = 16, AAR = 17, AFR = 18, AKA = 19, SQI = 20, AMH = 21, ARG = 22, HYE = 23, ASM = 24, AVA = 25, AVE = 26, AYM = 27, AZE = 28, BAM = 29, BAK = 30, EUS = 31, BEL = 32, BEN = 33, BIH = 34, BIS = 35, BOS = 36, BRE = 37, BUL = 38, MYA = 39, CAT = 40, KHM = 41, CHA = 42, CHE = 43, NYA = 44, CHU = 45, CHV = 46, COR = 47, COS = 48, CRE = 49, HRV = 50, CES = 51, DAN = 52, DIV = 53, NLD = 54, DZO = 55, ENM = 56, EPO = 57, EST = 58, EWE = 59, FAO = 60, FIJ = 61, FIN = 62, FRM = 63, FUL = 64, GLA = 65, GLG = 66, LUG = 67, KAT = 68, ELL = 69, GRN = 70, GUJ = 71, HAT = 72, HAU = 73, HEB = 74, HER = 75, HMO = 76, HUN = 77, ISL = 78, IDO = 79, IBO = 80, IND = 81, INA = 82, ILE = 83, IKU = 84, IPK = 85, GLE = 86, JAV = 87, KAL = 88, KAN = 89, KAU = 90, KAS = 91, KAZ = 92, KIK = 93, KIN = 94, KIR = 95, KOM = 96, KON = 97, KUA = 98, KUR = 99, LAO = 100, LAT = 101, LAV = 102, LIM = 103, LIN = 104, LIT = 105, LUB = 106, LTZ = 107, MKD = 108, MLG = 109, MSA = 110, MAL = 111, MLT = 112, GLV = 113, MRI = 114, MAR = 115, MAH = 116, MON = 117, NAU = 118, NAV = 119, NDE = 120, NBL = 121, NDO = 122, NEP = 123, SME = 124, NOR = 125, NOB = 126, NNO = 127, OCI = 128, OJI = 129, ORI = 130, ORM = 131, OSS = 132, PLI = 133, FAS = 134, POL = 135, PUS = 136, QUE = 137, QAA = 138, RON = 139, ROH = 140, RUN = 141, SMO = 142, SAG = 143, SAN = 144, SRD = 145, SRB = 146, SNA = 147, III = 148, SND = 149, SIN = 150, SLK = 151, SLV = 152, SOM = 153, SOT = 154, SUN = 155, SWA = 156, SSW = 157, SWE = 158, TGL = 159, TAH = 160, TGK = 161, TAM = 162, TAT = 163, TEL = 164, THA = 165, BOD = 166, TIR = 167, TON = 168, TSO = 169, TSN = 170, TUR = 171, TUK = 172, TWI = 173, UIG = 174, UKR = 175, UZB = 176, VEN = 177, VOL = 178, WLN = 179, CYM = 180, FRY = 181, WOL = 182, XHO = 183, YID = 184, YOR = 185, ZHA = 186, ZUL = 187, ORJ = 188, QPC = 189, TNG = 190 }


	/**Applies only to 608 Embedded output captions. Insert: Include CLOSED-CAPTIONS lines in the manifest. Specify at least one language in the CC1 Language Code field. One CLOSED-CAPTION line is added for each Language Code you specify. Make sure to specify the languages in the order in which they appear in the original source (if the source is embedded format) or the order of the caption selectors (if the source is other than embedded). Otherwise, languages in the manifest will not match up properly with the output captions. None: Include CLOSED-CAPTIONS=NONE line in the manifest. Omit: Omit any CLOSED-CAPTIONS line from the manifest. */
	export enum HlsCaptionLanguageSetting { INSERT = 0, OMIT = 1, NONE = 2 }


	/**When set to ENABLED, sets #EXT-X-ALLOW-CACHE:no tag, which prevents client from saving media segments for later replay. */
	export enum HlsClientCache { DISABLED = 0, ENABLED = 1 }


	/**Specification to use (RFC-6381 or the default RFC-4281) during m3u8 playlist generation. */
	export enum HlsCodecSpecification { RFC_6381 = 0, RFC_4281 = 1 }


	/**Indicates whether segments should be placed in subdirectories. */
	export enum HlsDirectoryStructure { SINGLE_DIRECTORY = 0, SUBDIRECTORY_PER_STREAM = 1 }


	/**Encrypts the segments with the given encryption scheme. Leave blank to disable. Selecting 'Disabled' in the web interface also disables encryption. */
	export enum HlsEncryptionType { AES128 = 0, SAMPLE_AES = 1 }


	/**The Initialization Vector is a 128-bit number used in conjunction with the key for encrypting blocks. If set to INCLUDE, Initialization Vector is listed in the manifest. Otherwise Initialization Vector is not in the manifest. */
	export enum HlsInitializationVectorInManifest { INCLUDE = 0, EXCLUDE = 1 }


	/**Enable this setting to insert the EXT-X-SESSION-KEY element into the master playlist. This allows for offline Apple HLS FairPlay content protection. */
	export enum HlsOfflineEncrypted { ENABLED = 0, DISABLED = 1 }


	/**Specify whether your DRM encryption key is static or from a key provider that follows the SPEKE standard. For more information about SPEKE, see https://docs.aws.amazon.com/speke/latest/documentation/what-is-speke.html. */
	export enum HlsKeyProviderType { SPEKE = 0, STATIC_KEY = 1 }


	/**Settings for HLS encryption */
	export interface HlsEncryptionSettings {
		ConstantInitializationVector?: string;

		/**Encrypts the segments with the given encryption scheme. Leave blank to disable. Selecting 'Disabled' in the web interface also disables encryption. */
		EncryptionMethod?: HlsEncryptionSettingsEncryptionMethod;

		/**The Initialization Vector is a 128-bit number used in conjunction with the key for encrypting blocks. If set to INCLUDE, Initialization Vector is listed in the manifest. Otherwise Initialization Vector is not in the manifest. */
		InitializationVectorInManifest?: HlsEncryptionSettingsInitializationVectorInManifest;

		/**Enable this setting to insert the EXT-X-SESSION-KEY element into the master playlist. This allows for offline Apple HLS FairPlay content protection. */
		OfflineEncrypted?: HlsEncryptionSettingsOfflineEncrypted;

		/**If your output group type is HLS, DASH, or Microsoft Smooth, use these settings when doing DRM encryption with a SPEKE-compliant key provider.  If your output group type is CMAF, use the SpekeKeyProviderCmaf settings instead. */
		SpekeKeyProvider?: SpekeKeyProvider;

		/**Use these settings to set up encryption with a static key provider. */
		StaticKeyProvider?: StaticKeyProvider;

		/**Specify whether your DRM encryption key is static or from a key provider that follows the SPEKE standard. For more information about SPEKE, see https://docs.aws.amazon.com/speke/latest/documentation/what-is-speke.html. */
		Type?: HlsEncryptionSettingsType;
	}

	export enum HlsEncryptionSettingsEncryptionMethod { AES128 = 0, SAMPLE_AES = 1 }

	export enum HlsEncryptionSettingsInitializationVectorInManifest { INCLUDE = 0, EXCLUDE = 1 }

	export enum HlsEncryptionSettingsOfflineEncrypted { ENABLED = 0, DISABLED = 1 }

	export enum HlsEncryptionSettingsType { SPEKE = 0, STATIC_KEY = 1 }


	/**When set to GZIP, compresses HLS playlist. */
	export enum HlsManifestCompression { GZIP = 0, NONE = 1 }


	/**Indicates whether the output manifest should use floating point values for segment duration. */
	export enum HlsManifestDurationFormat { FLOATING_POINT = 0, INTEGER = 1 }


	/**Indicates whether the .m3u8 manifest file should be generated for this HLS output group. */
	export enum HlsOutputSelection { MANIFESTS_AND_SEGMENTS = 0, SEGMENTS_ONLY = 1 }


	/**Includes or excludes EXT-X-PROGRAM-DATE-TIME tag in .m3u8 manifest files. The value is calculated as follows: either the program date and time are initialized using the input timecode source, or the time is initialized using the input timecode source and the date is initialized using the timestamp_offset. */
	export enum HlsProgramDateTime { INCLUDE = 0, EXCLUDE = 1 }


	/**When set to SINGLE_FILE, emits program as a single media resource (.ts) file, uses #EXT-X-BYTERANGE tags to index segment for playback. */
	export enum HlsSegmentControl { SINGLE_FILE = 0, SEGMENTED_FILES = 1 }


	/**Include or exclude RESOLUTION attribute for video in EXT-X-STREAM-INF tag of variant manifest. */
	export enum HlsStreamInfResolution { INCLUDE = 0, EXCLUDE = 1 }


	/**Indicates ID3 frame that has the timecode. */
	export enum HlsTimedMetadataId3Frame { NONE = 0, PRIV = 1, TDRL = 2 }


	/**Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to HLS_GROUP_SETTINGS. */
	export interface HlsGroupSettings {
		AdMarkers?: Array<HlsAdMarkers>;
		AdditionalManifests?: Array<HlsAdditionalManifest>;
		BaseUrl?: string;
		CaptionLanguageMappings?: Array<HlsCaptionLanguageMapping>;

		/**Applies only to 608 Embedded output captions. Insert: Include CLOSED-CAPTIONS lines in the manifest. Specify at least one language in the CC1 Language Code field. One CLOSED-CAPTION line is added for each Language Code you specify. Make sure to specify the languages in the order in which they appear in the original source (if the source is embedded format) or the order of the caption selectors (if the source is other than embedded). Otherwise, languages in the manifest will not match up properly with the output captions. None: Include CLOSED-CAPTIONS=NONE line in the manifest. Omit: Omit any CLOSED-CAPTIONS line from the manifest. */
		CaptionLanguageSetting?: HlsGroupSettingsCaptionLanguageSetting;

		/**When set to ENABLED, sets #EXT-X-ALLOW-CACHE:no tag, which prevents client from saving media segments for later replay. */
		ClientCache?: HlsGroupSettingsClientCache;

		/**Specification to use (RFC-6381 or the default RFC-4281) during m3u8 playlist generation. */
		CodecSpecification?: HlsGroupSettingsCodecSpecification;
		Destination?: string;

		/**Settings associated with the destination. Will vary based on the type of destination */
		DestinationSettings?: DestinationSettings;

		/**Indicates whether segments should be placed in subdirectories. */
		DirectoryStructure?: HlsGroupSettingsDirectoryStructure;

		/**Settings for HLS encryption */
		Encryption?: HlsEncryptionSettings;

		/**When set to GZIP, compresses HLS playlist. */
		ManifestCompression?: HlsGroupSettingsManifestCompression;

		/**Indicates whether the output manifest should use floating point values for segment duration. */
		ManifestDurationFormat?: HlsGroupSettingsManifestDurationFormat;
		MinFinalSegmentLength?: number;
		MinSegmentLength?: number;

		/**Indicates whether the .m3u8 manifest file should be generated for this HLS output group. */
		OutputSelection?: HlsGroupSettingsOutputSelection;

		/**Includes or excludes EXT-X-PROGRAM-DATE-TIME tag in .m3u8 manifest files. The value is calculated as follows: either the program date and time are initialized using the input timecode source, or the time is initialized using the input timecode source and the date is initialized using the timestamp_offset. */
		ProgramDateTime?: HlsGroupSettingsProgramDateTime;
		ProgramDateTimePeriod?: number;

		/**When set to SINGLE_FILE, emits program as a single media resource (.ts) file, uses #EXT-X-BYTERANGE tags to index segment for playback. */
		SegmentControl?: HlsGroupSettingsSegmentControl;
		SegmentLength?: number;
		SegmentsPerSubdirectory?: number;

		/**Include or exclude RESOLUTION attribute for video in EXT-X-STREAM-INF tag of variant manifest. */
		StreamInfResolution?: HlsGroupSettingsStreamInfResolution;

		/**Indicates ID3 frame that has the timecode. */
		TimedMetadataId3Frame?: HlsGroupSettingsTimedMetadataId3Frame;
		TimedMetadataId3Period?: number;
		TimestampDeltaMilliseconds?: number;
	}

	export enum HlsGroupSettingsCaptionLanguageSetting { INSERT = 0, OMIT = 1, NONE = 2 }

	export enum HlsGroupSettingsClientCache { DISABLED = 0, ENABLED = 1 }

	export enum HlsGroupSettingsCodecSpecification { RFC_6381 = 0, RFC_4281 = 1 }

	export enum HlsGroupSettingsDirectoryStructure { SINGLE_DIRECTORY = 0, SUBDIRECTORY_PER_STREAM = 1 }

	export enum HlsGroupSettingsManifestCompression { GZIP = 0, NONE = 1 }

	export enum HlsGroupSettingsManifestDurationFormat { FLOATING_POINT = 0, INTEGER = 1 }

	export enum HlsGroupSettingsOutputSelection { MANIFESTS_AND_SEGMENTS = 0, SEGMENTS_ONLY = 1 }

	export enum HlsGroupSettingsProgramDateTime { INCLUDE = 0, EXCLUDE = 1 }

	export enum HlsGroupSettingsSegmentControl { SINGLE_FILE = 0, SEGMENTED_FILES = 1 }

	export enum HlsGroupSettingsStreamInfResolution { INCLUDE = 0, EXCLUDE = 1 }

	export enum HlsGroupSettingsTimedMetadataId3Frame { NONE = 0, PRIV = 1, TDRL = 2 }


	/**When set to INCLUDE, writes I-Frame Only Manifest in addition to the HLS manifest */
	export enum HlsIFrameOnlyManifest { INCLUDE = 0, EXCLUDE = 1 }


	/**Settings for HLS output groups */
	export interface HlsSettings {
		AudioGroupId?: string;

		/**Use this setting only in audio-only outputs. Choose MPEG-2 Transport Stream (M2TS) to create a file in an MPEG2-TS container. Keep the default value Automatic (AUTOMATIC) to create a raw audio-only file with no container. Regardless of the value that you specify here, if this output has video, the service will place outputs into an MPEG2-TS container. */
		AudioOnlyContainer?: HlsSettingsAudioOnlyContainer;
		AudioRenditionSets?: string;

		/**Four types of audio-only tracks are supported: Audio-Only Variant Stream The client can play back this audio-only stream instead of video in low-bandwidth scenarios. Represented as an EXT-X-STREAM-INF in the HLS manifest. Alternate Audio, Auto Select, Default Alternate rendition that the client should try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=YES, AUTOSELECT=YES Alternate Audio, Auto Select, Not Default Alternate rendition that the client may try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=NO, AUTOSELECT=YES Alternate Audio, not Auto Select Alternate rendition that the client will not try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=NO, AUTOSELECT=NO */
		AudioTrackType?: HlsSettingsAudioTrackType;

		/**When set to INCLUDE, writes I-Frame Only Manifest in addition to the HLS manifest */
		IFrameOnlyManifest?: HlsSettingsIFrameOnlyManifest;
		SegmentModifier?: string;
	}

	export enum HlsSettingsAudioOnlyContainer { AUTOMATIC = 0, M2TS = 1 }

	export enum HlsSettingsAudioTrackType { ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT = 0, ALTERNATE_AUDIO_AUTO_SELECT = 1, ALTERNATE_AUDIO_NOT_AUTO_SELECT = 2, AUDIO_ONLY_VARIANT_STREAM = 3 }

	export enum HlsSettingsIFrameOnlyManifest { INCLUDE = 0, EXCLUDE = 1 }


	/**To insert ID3 tags in your output, specify two values. Use ID3 tag (Id3) to specify the base 64 encoded string and use Timecode (TimeCode) to specify the time when the tag should be inserted. To insert multiple ID3 tags in your output, create multiple instances of ID3 insertion (Id3Insertion). */
	export interface Id3Insertion {
		Id3?: string;
		Timecode?: string;
	}


	/**Enable the image inserter feature to include a graphic overlay on your video. Enable or disable this feature for each input or output individually. This setting is disabled by default. */
	export interface ImageInserter {
		InsertableImages?: Array<InsertableImage>;
	}


	/**Keep this setting enabled to have MediaConvert use the font style and position information from the captions source in the output. This option is available only when your input captions are IMSC, SMPTE-TT, or TTML. Disable this setting for simplified output captions. */
	export enum ImscStylePassthrough { ENABLED = 0, DISABLED = 1 }


	/**Use Rectangle to identify a specific area of the video frame. */
	export interface Rectangle {
		Height?: number;
		Width?: number;
		X?: number;
		Y?: number;
	}


	/**Enable Deblock (InputDeblockFilter) to produce smoother motion in the output. Default is disabled. Only manually controllable for MPEG2 and uncompressed video inputs. */
	export enum InputDeblockFilter { ENABLED = 0, DISABLED = 1 }


	/**Settings for decrypting any input files that you encrypt before you upload them to Amazon S3. MediaConvert can decrypt files only when you use AWS Key Management Service (KMS) to encrypt the data key that you use to encrypt your content. */
	export interface InputDecryptionSettings {

		/**Specify the encryption mode that you used to encrypt your input files. */
		DecryptionMode?: InputDecryptionSettingsDecryptionMode;
		EncryptedDecryptionKey?: string;
		InitializationVector?: string;
		KmsKeyRegion?: string;
	}

	export enum InputDecryptionSettingsDecryptionMode { AES_CTR = 0, AES_CBC = 1, AES_GCM = 2 }


	/**Enable Denoise (InputDenoiseFilter) to filter noise from the input.  Default is disabled. Only applicable to MPEG2, H.264, H.265, and uncompressed video inputs. */
	export enum InputDenoiseFilter { ENABLED = 0, DISABLED = 1 }


	/**Use Filter enable (InputFilterEnable) to specify how the transcoding service applies the denoise and deblock filters. You must also enable the filters separately, with Denoise (InputDenoiseFilter) and Deblock (InputDeblockFilter). * Auto - The transcoding service determines whether to apply filtering, depending on input type and quality. * Disable - The input is not filtered. This is true even if you use the API to enable them in (InputDeblockFilter) and (InputDeblockFilter). * Force - The in put is filtered regardless of input type. */
	export enum InputFilterEnable { AUTO = 0, DISABLE = 1, FORCE = 2 }


	/**Set PSI control (InputPsiControl) for transport stream inputs to specify which data the demux process to scans. * Ignore PSI - Scan all PIDs for audio and video. * Use PSI - Scan only PSI data. */
	export enum InputPsiControl { IGNORE_PSI = 0, USE_PSI = 1 }


	/**Use this Timecode source setting, located under the input settings (InputTimecodeSource), to specify how the service counts input video frames. This input frame count affects only the behavior of features that apply to a single input at a time, such as input clipping and synchronizing some captions formats. Choose Embedded (EMBEDDED) to use the timecodes in your input video. Choose Start at zero (ZEROBASED) to start the first frame at zero. Choose Specified start (SPECIFIEDSTART) to start the first frame at the timecode that you specify in the setting Start timecode (timecodeStart). If you don't specify a value for Timecode source, the service will use Embedded by default. For more information about timecodes, see https://docs.aws.amazon.com/console/mediaconvert/timecode. */
	export enum InputTimecodeSource { EMBEDDED = 0, ZEROBASED = 1, SPECIFIEDSTART = 2 }


	/**Selector for video. */
	export interface VideoSelector {

		/**Ignore this setting unless this input is a QuickTime animation with an alpha channel. Use this setting to create separate Key and Fill outputs. In each output, specify which part of the input MediaConvert uses. Leave this setting at the default value DISCARD to delete the alpha channel and preserve the video. Set it to REMAP_TO_LUMA to delete the video and map the alpha channel to the luma channel of your outputs. */
		AlphaBehavior?: VideoSelectorAlphaBehavior;

		/**If your input video has accurate color space metadata, or if you don't know about color space, leave this set to the default value Follow (FOLLOW). The service will automatically detect your input color space. If your input video has metadata indicating the wrong color space, specify the accurate color space here. If your input video is HDR 10 and the SMPTE ST 2086 Mastering Display Color Volume static metadata isn't present in your video stream, or if that metadata is present but not accurate, choose Force HDR 10 (FORCE_HDR10) here and specify correct values in the input HDR 10 metadata (Hdr10Metadata) settings. For more information about MediaConvert HDR jobs, see https://docs.aws.amazon.com/console/mediaconvert/hdr. */
		ColorSpace?: VideoSelectorColorSpace;

		/**There are two sources for color metadata, the input file and the job input settings Color space (ColorSpace) and HDR master display information settings(Hdr10Metadata). The Color space usage setting determines which takes precedence. Choose Force (FORCE) to use color metadata from the input job settings. If you don't specify values for those settings, the service defaults to using metadata from your input. FALLBACK - Choose Fallback (FALLBACK) to use color metadata from the source when it is present. If there's no color metadata in your input file, the service defaults to using values you specify in the input settings. */
		ColorSpaceUsage?: VideoSelectorColorSpaceUsage;

		/**Use these settings to specify static color calibration metadata, as defined by SMPTE ST 2086. These values don't affect the pixel values that are encoded in the video stream. They are intended to help the downstream video player display content in a way that reflects the intentions of the the content creator. */
		Hdr10Metadata?: Hdr10Metadata;
		Pid?: number;
		ProgramNumber?: number;

		/**Use Rotate (InputRotate) to specify how the service rotates your video. You can choose automatic rotation or specify a rotation. You can specify a clockwise rotation of 0, 90, 180, or 270 degrees. If your input video container is .mov or .mp4 and your input has rotation metadata, you can choose Automatic to have the service rotate your video according to the rotation specified in the metadata. The rotation must be within one degree of 90, 180, or 270 degrees. If the rotation metadata specifies any other rotation, the service will default to no rotation. By default, the service does no rotation, even if your input video has rotation metadata. The service doesn't pass through rotation metadata. */
		Rotate?: VideoSelectorRotate;
	}

	export enum VideoSelectorAlphaBehavior { DISCARD = 0, REMAP_TO_LUMA = 1 }

	export enum VideoSelectorColorSpace { FOLLOW = 0, REC_601 = 1, REC_709 = 2, HDR10 = 3, HLG_2020 = 4 }

	export enum VideoSelectorColorSpaceUsage { FORCE = 0, FALLBACK = 1 }

	export enum VideoSelectorRotate { DEGREE_0 = 0, DEGREES_90 = 1, DEGREES_180 = 2, DEGREES_270 = 3, AUTO = 4 }


	/**Specifies media input */
	export interface Input {
		AudioSelectorGroups?: __mapOfAudioSelectorGroup;
		AudioSelectors?: __mapOfAudioSelector;
		CaptionSelectors?: __mapOfCaptionSelector;

		/**Use Rectangle to identify a specific area of the video frame. */
		Crop?: Rectangle;

		/**Enable Deblock (InputDeblockFilter) to produce smoother motion in the output. Default is disabled. Only manually controllable for MPEG2 and uncompressed video inputs. */
		DeblockFilter?: InputDeblockFilter;

		/**Settings for decrypting any input files that you encrypt before you upload them to Amazon S3. MediaConvert can decrypt files only when you use AWS Key Management Service (KMS) to encrypt the data key that you use to encrypt your content. */
		DecryptionSettings?: InputDecryptionSettings;

		/**Enable Denoise (InputDenoiseFilter) to filter noise from the input.  Default is disabled. Only applicable to MPEG2, H.264, H.265, and uncompressed video inputs. */
		DenoiseFilter?: InputDenoiseFilter;
		FileInput?: string;

		/**Use Filter enable (InputFilterEnable) to specify how the transcoding service applies the denoise and deblock filters. You must also enable the filters separately, with Denoise (InputDenoiseFilter) and Deblock (InputDeblockFilter). * Auto - The transcoding service determines whether to apply filtering, depending on input type and quality. * Disable - The input is not filtered. This is true even if you use the API to enable them in (InputDeblockFilter) and (InputDeblockFilter). * Force - The in put is filtered regardless of input type. */
		FilterEnable?: InputFilterEnable;
		FilterStrength?: number;

		/**Enable the image inserter feature to include a graphic overlay on your video. Enable or disable this feature for each input or output individually. This setting is disabled by default. */
		ImageInserter?: ImageInserter;
		InputClippings?: Array<InputClipping>;

		/**Use Rectangle to identify a specific area of the video frame. */
		Position?: Rectangle;
		ProgramNumber?: number;

		/**Set PSI control (InputPsiControl) for transport stream inputs to specify which data the demux process to scans. * Ignore PSI - Scan all PIDs for audio and video. * Use PSI - Scan only PSI data. */
		PsiControl?: InputPsiControl;
		SupplementalImps?: Array<__stringPatternS3ASSETMAPXml>;

		/**Use this Timecode source setting, located under the input settings (InputTimecodeSource), to specify how the service counts input video frames. This input frame count affects only the behavior of features that apply to a single input at a time, such as input clipping and synchronizing some captions formats. Choose Embedded (EMBEDDED) to use the timecodes in your input video. Choose Start at zero (ZEROBASED) to start the first frame at zero. Choose Specified start (SPECIFIEDSTART) to start the first frame at the timecode that you specify in the setting Start timecode (timecodeStart). If you don't specify a value for Timecode source, the service will use Embedded by default. For more information about timecodes, see https://docs.aws.amazon.com/console/mediaconvert/timecode. */
		TimecodeSource?: InputTimecodeSource;
		TimecodeStart?: string;

		/**Selector for video. */
		VideoSelector?: VideoSelector;
	}

	export enum InputDeblockFilter { ENABLED = 0, DISABLED = 1 }

	export enum InputDenoiseFilter { ENABLED = 0, DISABLED = 1 }

	export enum InputFilterEnable { AUTO = 0, DISABLE = 1, FORCE = 2 }

	export enum InputPsiControl { IGNORE_PSI = 0, USE_PSI = 1 }

	export enum InputTimecodeSource { EMBEDDED = 0, ZEROBASED = 1, SPECIFIEDSTART = 2 }


	/**To transcode only portions of your input (clips), include one Input clipping (one instance of InputClipping in the JSON job file) for each input clip. All input clips you specify will be included in every output of the job. */
	export interface InputClipping {
		EndTimecode?: string;
		StartTimecode?: string;
	}


	/**Use Rotate (InputRotate) to specify how the service rotates your video. You can choose automatic rotation or specify a rotation. You can specify a clockwise rotation of 0, 90, 180, or 270 degrees. If your input video container is .mov or .mp4 and your input has rotation metadata, you can choose Automatic to have the service rotate your video according to the rotation specified in the metadata. The rotation must be within one degree of 90, 180, or 270 degrees. If the rotation metadata specifies any other rotation, the service will default to no rotation. By default, the service does no rotation, even if your input video has rotation metadata. The service doesn't pass through rotation metadata. */
	export enum InputRotate { DEGREE_0 = 0, DEGREES_90 = 1, DEGREES_180 = 2, DEGREES_270 = 3, AUTO = 4 }


	/**Specified video input in a template. */
	export interface InputTemplate {
		AudioSelectorGroups?: __mapOfAudioSelectorGroup;
		AudioSelectors?: __mapOfAudioSelector;
		CaptionSelectors?: __mapOfCaptionSelector;

		/**Use Rectangle to identify a specific area of the video frame. */
		Crop?: Rectangle;

		/**Enable Deblock (InputDeblockFilter) to produce smoother motion in the output. Default is disabled. Only manually controllable for MPEG2 and uncompressed video inputs. */
		DeblockFilter?: InputTemplateDeblockFilter;

		/**Enable Denoise (InputDenoiseFilter) to filter noise from the input.  Default is disabled. Only applicable to MPEG2, H.264, H.265, and uncompressed video inputs. */
		DenoiseFilter?: InputTemplateDenoiseFilter;

		/**Use Filter enable (InputFilterEnable) to specify how the transcoding service applies the denoise and deblock filters. You must also enable the filters separately, with Denoise (InputDenoiseFilter) and Deblock (InputDeblockFilter). * Auto - The transcoding service determines whether to apply filtering, depending on input type and quality. * Disable - The input is not filtered. This is true even if you use the API to enable them in (InputDeblockFilter) and (InputDeblockFilter). * Force - The in put is filtered regardless of input type. */
		FilterEnable?: InputTemplateFilterEnable;
		FilterStrength?: number;

		/**Enable the image inserter feature to include a graphic overlay on your video. Enable or disable this feature for each input or output individually. This setting is disabled by default. */
		ImageInserter?: ImageInserter;
		InputClippings?: Array<InputClipping>;

		/**Use Rectangle to identify a specific area of the video frame. */
		Position?: Rectangle;
		ProgramNumber?: number;

		/**Set PSI control (InputPsiControl) for transport stream inputs to specify which data the demux process to scans. * Ignore PSI - Scan all PIDs for audio and video. * Use PSI - Scan only PSI data. */
		PsiControl?: InputTemplatePsiControl;

		/**Use this Timecode source setting, located under the input settings (InputTimecodeSource), to specify how the service counts input video frames. This input frame count affects only the behavior of features that apply to a single input at a time, such as input clipping and synchronizing some captions formats. Choose Embedded (EMBEDDED) to use the timecodes in your input video. Choose Start at zero (ZEROBASED) to start the first frame at zero. Choose Specified start (SPECIFIEDSTART) to start the first frame at the timecode that you specify in the setting Start timecode (timecodeStart). If you don't specify a value for Timecode source, the service will use Embedded by default. For more information about timecodes, see https://docs.aws.amazon.com/console/mediaconvert/timecode. */
		TimecodeSource?: InputTemplateTimecodeSource;
		TimecodeStart?: string;

		/**Selector for video. */
		VideoSelector?: VideoSelector;
	}

	export enum InputTemplateDeblockFilter { ENABLED = 0, DISABLED = 1 }

	export enum InputTemplateDenoiseFilter { ENABLED = 0, DISABLED = 1 }

	export enum InputTemplateFilterEnable { AUTO = 0, DISABLE = 1, FORCE = 2 }

	export enum InputTemplatePsiControl { IGNORE_PSI = 0, USE_PSI = 1 }

	export enum InputTemplateTimecodeSource { EMBEDDED = 0, ZEROBASED = 1, SPECIFIEDSTART = 2 }


	/**Settings that specify how your still graphic overlay appears. */
	export interface InsertableImage {
		Duration?: number;
		FadeIn?: number;
		FadeOut?: number;
		Height?: number;
		ImageInserterInput?: string;
		ImageX?: number;
		ImageY?: number;
		Layer?: number;
		Opacity?: number;
		StartTime?: string;
		Width?: number;
	}


	/**A job's phase can be PROBING, TRANSCODING OR UPLOADING */
	export enum JobPhase { PROBING = 0, TRANSCODING = 1, UPLOADING = 2 }


	/**Provides messages from the service about jobs that you have already successfully submitted. */
	export interface JobMessages {
		Info?: Array<__string>;
		Warning?: Array<__string>;
	}


	/**A job's status can be SUBMITTED, PROGRESSING, COMPLETE, CANCELED, or ERROR. */
	export enum JobStatus { SUBMITTED = 0, PROGRESSING = 1, COMPLETE = 2, CANCELED = 3, ERROR = 4 }


	/**Information about when jobs are submitted, started, and finished is specified in Unix epoch format in seconds. */
	export interface Timing {
		FinishTime?: Date;
		StartTime?: Date;
		SubmitTime?: Date;
	}

	export enum Type { SYSTEM = 0, CUSTOM = 1 }


	/**Optional. When you request a list of job templates, you can choose to list them alphabetically by NAME or chronologically by CREATION_DATE. If you don't specify, the service will list them by name. */
	export enum JobTemplateListBy { NAME = 0, CREATION_DATE = 1, SYSTEM = 2 }


	/**Optional. When you request lists of resources, you can specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource. */
	export enum Order { ASCENDING = 0, DESCENDING = 1 }


	/**Optional. When you request a list of presets, you can choose to list them alphabetically by NAME or chronologically by CREATION_DATE. If you don't specify, the service will list them by name. */
	export enum PresetListBy { NAME = 0, CREATION_DATE = 1, SYSTEM = 2 }


	/**Optional. When you request a list of queues, you can choose to list them alphabetically by NAME or chronologically by CREATION_DATE. If you don't specify, the service will list them by creation date. */
	export enum QueueListBy { NAME = 0, CREATION_DATE = 1 }


	/**The Amazon Resource Name (ARN) and tags for an AWS Elemental MediaConvert resource. */
	export interface ResourceTags {
		Arn?: string;
		Tags?: __mapOf__string;
	}


	/**Selects between the DVB and ATSC buffer models for Dolby Digital audio. */
	export enum M2tsAudioBufferModel { DVB = 0, ATSC = 1 }


	/**Controls what buffer model to use for accurate interleaving. If set to MULTIPLEX, use multiplex  buffer model. If set to NONE, this can lead to lower latency, but low-memory devices may not be able to play back the stream without interruptions. */
	export enum M2tsBufferModel { MULTIPLEX = 0, NONE = 1 }


	/**When set to VIDEO_AND_FIXED_INTERVALS, audio EBP markers will be added to partitions 3 and 4. The interval between these additional markers will be fixed, and will be slightly shorter than the video EBP marker interval. When set to VIDEO_INTERVAL, these additional markers will not be inserted. Only applicable when EBP segmentation markers are is selected (segmentationMarkers is EBP or EBP_LEGACY). */
	export enum M2tsEbpAudioInterval { VIDEO_AND_FIXED_INTERVALS = 0, VIDEO_INTERVAL = 1 }


	/**Selects which PIDs to place EBP markers on. They can either be placed only on the video PID, or on both the video PID and all audio PIDs. Only applicable when EBP segmentation markers are is selected (segmentationMarkers is EBP or EBP_LEGACY). */
	export enum M2tsEbpPlacement { VIDEO_AND_AUDIO_PIDS = 0, VIDEO_PID = 1 }


	/**Controls whether to include the ES Rate field in the PES header. */
	export enum M2tsEsRateInPes { INCLUDE = 0, EXCLUDE = 1 }


	/**Keep the default value (DEFAULT) unless you know that your audio EBP markers are incorrectly appearing before your video EBP markers. To correct this problem, set this value to Force (FORCE). */
	export enum M2tsForceTsVideoEbpOrder { FORCE = 0, DEFAULT = 1 }


	/**If INSERT, Nielsen inaudible tones for media tracking will be detected in the input audio and an equivalent ID3 tag will be inserted in the output. */
	export enum M2tsNielsenId3 { INSERT = 0, NONE = 1 }


	/**When set to PCR_EVERY_PES_PACKET, a Program Clock Reference value is inserted for every Packetized Elementary Stream (PES) header. This is effective only when the PCR PID is the same as the video or audio elementary stream. */
	export enum M2tsPcrControl { PCR_EVERY_PES_PACKET = 0, CONFIGURED_PCR_PERIOD = 1 }


	/**When set to CBR, inserts null packets into transport stream to fill specified bitrate. When set to VBR, the bitrate setting acts as the maximum bitrate, but the output will not be padded up to that bitrate. */
	export enum M2tsRateMode { VBR = 0, CBR = 1 }


	/**Settings for SCTE-35 signals from ESAM. Include this in your job settings to put SCTE-35 markers in your HLS and transport stream outputs at the insertion points that you specify in an ESAM XML document. Provide the document in the setting SCC XML (sccXml). */
	export interface M2tsScte35Esam {
		Scte35EsamPid?: number;
	}


	/**For SCTE-35 markers from your input-- Choose Passthrough (PASSTHROUGH) if you want SCTE-35 markers that appear in your input to also appear in this output. Choose None (NONE) if you don't want SCTE-35 markers in this output. For SCTE-35 markers from an ESAM XML document-- Choose None (NONE). Also provide the ESAM XML as a string in the setting Signal processing notification XML (sccXml). Also enable ESAM SCTE-35 (include the property scte35Esam). */
	export enum M2tsScte35Source { PASSTHROUGH = 0, NONE = 1 }


	/**Inserts segmentation markers at each segmentation_time period. rai_segstart sets the Random Access Indicator bit in the adaptation field. rai_adapt sets the RAI bit and adds the current timecode in the private data bytes. psi_segstart inserts PAT and PMT tables at the start of segments. ebp adds Encoder Boundary Point information to the adaptation field as per OpenCable specification OC-SP-EBP-I01-130118. ebp_legacy adds Encoder Boundary Point information to the adaptation field using a legacy proprietary format. */
	export enum M2tsSegmentationMarkers { NONE = 0, RAI_SEGSTART = 1, RAI_ADAPT = 2, PSI_SEGSTART = 3, EBP = 4, EBP_LEGACY = 5 }


	/**The segmentation style parameter controls how segmentation markers are inserted into the transport stream. With avails, it is possible that segments may be truncated, which can influence where future segmentation markers are inserted. When a segmentation style of "reset_cadence" is selected and a segment is truncated due to an avail, we will reset the segmentation cadence. This means the subsequent segment will have a duration of of $segmentation_time seconds. When a segmentation style of "maintain_cadence" is selected and a segment is truncated due to an avail, we will not reset the segmentation cadence. This means the subsequent segment will likely be truncated as well. However, all segments after that will have a duration of $segmentation_time seconds. Note that EBP lookahead is a slight exception to this rule. */
	export enum M2tsSegmentationStyle { MAINTAIN_CADENCE = 0, RESET_CADENCE = 1 }


	/**If INSERT, Nielsen inaudible tones for media tracking will be detected in the input audio and an equivalent ID3 tag will be inserted in the output. */
	export enum M3u8NielsenId3 { INSERT = 0, NONE = 1 }


	/**When set to PCR_EVERY_PES_PACKET a Program Clock Reference value is inserted for every Packetized Elementary Stream (PES) header. This parameter is effective only when the PCR PID is the same as the video or audio elementary stream. */
	export enum M3u8PcrControl { PCR_EVERY_PES_PACKET = 0, CONFIGURED_PCR_PERIOD = 1 }


	/**For SCTE-35 markers from your input-- Choose Passthrough (PASSTHROUGH) if you want SCTE-35 markers that appear in your input to also appear in this output. Choose None (NONE) if you don't want SCTE-35 markers in this output. For SCTE-35 markers from an ESAM XML document-- Choose None (NONE) if you don't want manifest conditioning. Choose Passthrough (PASSTHROUGH) and choose Ad markers (adMarkers) if you do want manifest conditioning. In both cases, also provide the ESAM XML as a string in the setting Signal processing notification XML (sccXml). */
	export enum M3u8Scte35Source { PASSTHROUGH = 0, NONE = 1 }


	/**Applies only to HLS outputs. Use this setting to specify whether the service inserts the ID3 timed metadata from the input in this output. */
	export enum TimedMetadata { PASSTHROUGH = 0, NONE = 1 }


	/**For motion overlays that don't have a built-in frame rate, specify the frame rate of the overlay in frames per second, as a fraction. For example, specify 24 fps as 24/1. The overlay frame rate doesn't need to match the frame rate of the underlying video. */
	export interface MotionImageInsertionFramerate {
		FramerateDenominator?: number;
		FramerateNumerator?: number;
	}


	/**Choose the type of motion graphic asset that you are providing for your overlay. You can choose either a .mov file or a series of .png files. */
	export enum MotionImageInsertionMode { MOV = 0, PNG = 1 }


	/**Specify the offset between the upper-left corner of the video frame and the top left corner of the overlay. */
	export interface MotionImageInsertionOffset {
		ImageX?: number;
		ImageY?: number;
	}


	/**Specify whether your motion graphic overlay repeats on a loop or plays only once. */
	export enum MotionImagePlayback { ONCE = 0, REPEAT = 1 }


	/**When enabled, include 'clap' atom if appropriate for the video output settings. */
	export enum MovClapAtom { INCLUDE = 0, EXCLUDE = 1 }


	/**When enabled, file composition times will start at zero, composition times in the 'ctts' (composition time to sample) box for B-frames will be negative, and a 'cslg' (composition shift least greatest) box will be included per 14496-1 amendment 1. This improves compatibility with Apple players and tools. */
	export enum MovCslgAtom { INCLUDE = 0, EXCLUDE = 1 }


	/**When set to XDCAM, writes MPEG2 video streams into the QuickTime file using XDCAM fourcc codes. This increases compatibility with Apple editors and players, but may decrease compatibility with other players. Only applicable when the video codec is MPEG2. */
	export enum MovMpeg2FourCCControl { XDCAM = 0, MPEG = 1 }


	/**If set to OMNEON, inserts Omneon-compatible padding */
	export enum MovPaddingControl { OMNEON = 0, NONE = 1 }


	/**Always keep the default value (SELF_CONTAINED) for this setting. */
	export enum MovReference { SELF_CONTAINED = 0, EXTERNAL = 1 }


	/**Specify whether the service encodes this MP3 audio output with a constant bitrate (CBR) or a variable bitrate (VBR). */
	export enum Mp3RateControlMode { CBR = 0, VBR = 1 }


	/**When enabled, file composition times will start at zero, composition times in the 'ctts' (composition time to sample) box for B-frames will be negative, and a 'cslg' (composition shift least greatest) box will be included per 14496-1 amendment 1. This improves compatibility with Apple players and tools. */
	export enum Mp4CslgAtom { INCLUDE = 0, EXCLUDE = 1 }


	/**Inserts a free-space box immediately after the moov box. */
	export enum Mp4FreeSpaceBox { INCLUDE = 0, EXCLUDE = 1 }


	/**If set to PROGRESSIVE_DOWNLOAD, the MOOV atom is relocated to the beginning of the archive as required for progressive downloading. Otherwise it is placed normally at the end. */
	export enum Mp4MoovPlacement { PROGRESSIVE_DOWNLOAD = 0, NORMAL = 1 }


	/**Use this setting only in DASH output groups that include sidecar TTML or IMSC captions.  You specify sidecar captions in a separate output from your audio and video. Choose Raw (RAW) for captions in a single XML file in a raw container. Choose Fragmented MPEG-4 (FRAGMENTED_MP4) for captions in XML format contained within fragmented MP4 files. This set of fragmented MP4 files is separate from your video and audio fragmented MP4 files. */
	export enum MpdCaptionContainerType { RAW = 0, FRAGMENTED_MP4 = 1 }


	/**Use this setting only when you specify SCTE-35 markers from ESAM. Choose INSERT to put SCTE-35 markers in this output at the insertion points that you specify in an ESAM XML document. Provide the document in the setting SCC XML (sccXml). */
	export enum MpdScte35Esam { INSERT = 0, NONE = 1 }


	/**Ignore this setting unless you have SCTE-35 markers in your input video file. Choose Passthrough (PASSTHROUGH) if you want SCTE-35 markers that appear in your input to also appear in this output. Choose None (NONE) if you don't want those SCTE-35 markers in this output. */
	export enum MpdScte35Source { PASSTHROUGH = 0, NONE = 1 }


	/**Adaptive quantization. Allows intra-frame quantizers to vary to improve visual quality. */
	export enum Mpeg2AdaptiveQuantization { OFF = 0, LOW = 1, MEDIUM = 2, HIGH = 3 }


	/**Use Level (Mpeg2CodecLevel) to set the MPEG-2 level for the video output. */
	export enum Mpeg2CodecLevel { AUTO = 0, LOW = 1, MAIN = 2, HIGH1440 = 3, HIGH = 4 }


	/**Use Profile (Mpeg2CodecProfile) to set the MPEG-2 profile for the video output. */
	export enum Mpeg2CodecProfile { MAIN = 0, PROFILE_422 = 1 }


	/**Choose Adaptive to improve subjective video quality for high-motion content. This will cause the service to use fewer B-frames (which infer information based on other frames) for high-motion portions of the video and more B-frames for low-motion portions. The maximum number of B-frames is limited by the value you provide for the setting B frames between reference frames (numberBFramesBetweenReferenceFrames). */
	export enum Mpeg2DynamicSubGop { ADAPTIVE = 0, STATIC = 1 }


	/**If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator. */
	export enum Mpeg2FramerateControl { INITIALIZE_FROM_SOURCE = 0, SPECIFIED = 1 }


	/**Optional. Specify how the transcoder performs framerate conversion. The default behavior is to use duplicate drop conversion. */
	export enum Mpeg2FramerateConversionAlgorithm { DUPLICATE_DROP = 0, INTERPOLATE = 1 }


	/**Indicates if the GOP Size in MPEG2 is specified in frames or seconds. If seconds the system will convert the GOP Size into a frame count at run time. */
	export enum Mpeg2GopSizeUnits { FRAMES = 0, SECONDS = 1 }


	/**
	 * Use Interlace mode (InterlaceMode) to choose the scan line type for the output. * Top Field First (TOP_FIELD) and Bottom Field First (BOTTOM_FIELD) produce interlaced output with the entire output having the same field polarity (top or bottom first). * Follow, Default Top (FOLLOW_TOP_FIELD) and Follow, Default Bottom (FOLLOW_BOTTOM_FIELD) use the same field polarity as the source. Therefore, behavior depends on the input scan type.
	 *   - If the source is interlaced, the output will be interlaced with the same polarity as the source (it will follow the source). The output could therefore be a mix of "top field first" and "bottom field first".
	 *   - If the source is progressive, the output will be interlaced with "top field first" or "bottom field first" polarity, depending on which of the Follow options you chose.
	 */
	export enum Mpeg2InterlaceMode { PROGRESSIVE = 0, TOP_FIELD = 1, BOTTOM_FIELD = 2, FOLLOW_TOP_FIELD = 3, FOLLOW_BOTTOM_FIELD = 4 }


	/**Use Intra DC precision (Mpeg2IntraDcPrecision) to set quantization precision for intra-block DC coefficients. If you choose the value auto, the service will automatically select the precision based on the per-frame compression ratio. */
	export enum Mpeg2IntraDcPrecision { AUTO = 0, INTRA_DC_PRECISION_8 = 1, INTRA_DC_PRECISION_9 = 2, INTRA_DC_PRECISION_10 = 3, INTRA_DC_PRECISION_11 = 4 }


	/**Optional. Specify how the service determines the pixel aspect ratio (PAR) for this output. The default behavior, Follow source (INITIALIZE_FROM_SOURCE), uses the PAR from your input video for your output. To use a different PAR, choose (SPECIFIED). In the console, SPECIFIED corresponds to any value other than Follow source. When you choose SPECIFIED for this setting, you must also specify values for the parNumerator and parDenominator settings. */
	export enum Mpeg2ParControl { INITIALIZE_FROM_SOURCE = 0, SPECIFIED = 1 }


	/**Optional. Use Quality tuning level (qualityTuningLevel) to choose how you want to trade off encoding speed for output video quality. The default behavior is faster, lower quality, single-pass encoding. */
	export enum Mpeg2QualityTuningLevel { SINGLE_PASS = 0, MULTI_PASS = 1 }


	/**Use Rate control mode (Mpeg2RateControlMode) to specifiy whether the bitrate is variable (vbr) or constant (cbr). */
	export enum Mpeg2RateControlMode { VBR = 0, CBR = 1 }


	/**Enable this setting to insert I-frames at scene changes that the service automatically detects. This improves video quality and is enabled by default. */
	export enum Mpeg2SceneChangeDetect { DISABLED = 0, ENABLED = 1 }


	/**Enables Slow PAL rate conversion. 23.976fps and 24fps input is relabeled as 25fps, and audio is sped up correspondingly. */
	export enum Mpeg2SlowPal { DISABLED = 0, ENABLED = 1 }


	/**Adjust quantization within each frame based on spatial variation of content complexity. */
	export enum Mpeg2SpatialAdaptiveQuantization { DISABLED = 0, ENABLED = 1 }


	/**Produces a Type D-10 compatible bitstream (SMPTE 356M-2001). */
	export enum Mpeg2Syntax { DEFAULT = 0, D_10 = 1 }


	/**Only use Telecine (Mpeg2Telecine) when you set Framerate (Framerate) to 29.970. Set Telecine (Mpeg2Telecine) to Hard (hard) to produce a 29.97i output from a 23.976 input. Set it to Soft (soft) to produce 23.976 output and leave converstion to the player. */
	export enum Mpeg2Telecine { NONE = 0, SOFT = 1, HARD = 2 }


	/**Adjust quantization within each frame based on temporal variation of content complexity. */
	export enum Mpeg2TemporalAdaptiveQuantization { DISABLED = 0, ENABLED = 1 }


	/**Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value MPEG2. */
	export interface Mpeg2Settings {

		/**Adaptive quantization. Allows intra-frame quantizers to vary to improve visual quality. */
		AdaptiveQuantization?: Mpeg2SettingsAdaptiveQuantization;
		Bitrate?: number;

		/**Use Level (Mpeg2CodecLevel) to set the MPEG-2 level for the video output. */
		CodecLevel?: Mpeg2SettingsCodecLevel;

		/**Use Profile (Mpeg2CodecProfile) to set the MPEG-2 profile for the video output. */
		CodecProfile?: Mpeg2SettingsCodecProfile;

		/**Choose Adaptive to improve subjective video quality for high-motion content. This will cause the service to use fewer B-frames (which infer information based on other frames) for high-motion portions of the video and more B-frames for low-motion portions. The maximum number of B-frames is limited by the value you provide for the setting B frames between reference frames (numberBFramesBetweenReferenceFrames). */
		DynamicSubGop?: Mpeg2SettingsDynamicSubGop;

		/**If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator. */
		FramerateControl?: Mpeg2SettingsFramerateControl;

		/**Optional. Specify how the transcoder performs framerate conversion. The default behavior is to use duplicate drop conversion. */
		FramerateConversionAlgorithm?: Mpeg2SettingsFramerateConversionAlgorithm;
		FramerateDenominator?: number;
		FramerateNumerator?: number;
		GopClosedCadence?: number;
		GopSize?: number;

		/**Indicates if the GOP Size in MPEG2 is specified in frames or seconds. If seconds the system will convert the GOP Size into a frame count at run time. */
		GopSizeUnits?: Mpeg2SettingsGopSizeUnits;
		HrdBufferInitialFillPercentage?: number;
		HrdBufferSize?: number;

		/**
		 * Use Interlace mode (InterlaceMode) to choose the scan line type for the output. * Top Field First (TOP_FIELD) and Bottom Field First (BOTTOM_FIELD) produce interlaced output with the entire output having the same field polarity (top or bottom first). * Follow, Default Top (FOLLOW_TOP_FIELD) and Follow, Default Bottom (FOLLOW_BOTTOM_FIELD) use the same field polarity as the source. Therefore, behavior depends on the input scan type.
		 * - If the source is interlaced, the output will be interlaced with the same polarity as the source (it will follow the source). The output could therefore be a mix of "top field first" and "bottom field first".
		 * - If the source is progressive, the output will be interlaced with "top field first" or "bottom field first" polarity, depending on which of the Follow options you chose.
		 */
		InterlaceMode?: Mpeg2SettingsInterlaceMode;

		/**Use Intra DC precision (Mpeg2IntraDcPrecision) to set quantization precision for intra-block DC coefficients. If you choose the value auto, the service will automatically select the precision based on the per-frame compression ratio. */
		IntraDcPrecision?: Mpeg2SettingsIntraDcPrecision;
		MaxBitrate?: number;
		MinIInterval?: number;
		NumberBFramesBetweenReferenceFrames?: number;

		/**Optional. Specify how the service determines the pixel aspect ratio (PAR) for this output. The default behavior, Follow source (INITIALIZE_FROM_SOURCE), uses the PAR from your input video for your output. To use a different PAR, choose (SPECIFIED). In the console, SPECIFIED corresponds to any value other than Follow source. When you choose SPECIFIED for this setting, you must also specify values for the parNumerator and parDenominator settings. */
		ParControl?: Mpeg2SettingsParControl;
		ParDenominator?: number;
		ParNumerator?: number;

		/**Optional. Use Quality tuning level (qualityTuningLevel) to choose how you want to trade off encoding speed for output video quality. The default behavior is faster, lower quality, single-pass encoding. */
		QualityTuningLevel?: Mpeg2SettingsQualityTuningLevel;

		/**Use Rate control mode (Mpeg2RateControlMode) to specifiy whether the bitrate is variable (vbr) or constant (cbr). */
		RateControlMode?: Mpeg2SettingsRateControlMode;

		/**Enable this setting to insert I-frames at scene changes that the service automatically detects. This improves video quality and is enabled by default. */
		SceneChangeDetect?: Mpeg2SettingsSceneChangeDetect;

		/**Enables Slow PAL rate conversion. 23.976fps and 24fps input is relabeled as 25fps, and audio is sped up correspondingly. */
		SlowPal?: Mpeg2SettingsSlowPal;
		Softness?: number;

		/**Adjust quantization within each frame based on spatial variation of content complexity. */
		SpatialAdaptiveQuantization?: Mpeg2SettingsSpatialAdaptiveQuantization;

		/**Produces a Type D-10 compatible bitstream (SMPTE 356M-2001). */
		Syntax?: Mpeg2SettingsSyntax;

		/**Only use Telecine (Mpeg2Telecine) when you set Framerate (Framerate) to 29.970. Set Telecine (Mpeg2Telecine) to Hard (hard) to produce a 29.97i output from a 23.976 input. Set it to Soft (soft) to produce 23.976 output and leave converstion to the player. */
		Telecine?: Mpeg2SettingsTelecine;

		/**Adjust quantization within each frame based on temporal variation of content complexity. */
		TemporalAdaptiveQuantization?: Mpeg2SettingsTemporalAdaptiveQuantization;
	}

	export enum Mpeg2SettingsAdaptiveQuantization { OFF = 0, LOW = 1, MEDIUM = 2, HIGH = 3 }

	export enum Mpeg2SettingsCodecLevel { AUTO = 0, LOW = 1, MAIN = 2, HIGH1440 = 3, HIGH = 4 }

	export enum Mpeg2SettingsCodecProfile { MAIN = 0, PROFILE_422 = 1 }

	export enum Mpeg2SettingsDynamicSubGop { ADAPTIVE = 0, STATIC = 1 }

	export enum Mpeg2SettingsFramerateControl { INITIALIZE_FROM_SOURCE = 0, SPECIFIED = 1 }

	export enum Mpeg2SettingsFramerateConversionAlgorithm { DUPLICATE_DROP = 0, INTERPOLATE = 1 }

	export enum Mpeg2SettingsGopSizeUnits { FRAMES = 0, SECONDS = 1 }

	export enum Mpeg2SettingsInterlaceMode { PROGRESSIVE = 0, TOP_FIELD = 1, BOTTOM_FIELD = 2, FOLLOW_TOP_FIELD = 3, FOLLOW_BOTTOM_FIELD = 4 }

	export enum Mpeg2SettingsIntraDcPrecision { AUTO = 0, INTRA_DC_PRECISION_8 = 1, INTRA_DC_PRECISION_9 = 2, INTRA_DC_PRECISION_10 = 3, INTRA_DC_PRECISION_11 = 4 }

	export enum Mpeg2SettingsParControl { INITIALIZE_FROM_SOURCE = 0, SPECIFIED = 1 }

	export enum Mpeg2SettingsQualityTuningLevel { SINGLE_PASS = 0, MULTI_PASS = 1 }

	export enum Mpeg2SettingsRateControlMode { VBR = 0, CBR = 1 }

	export enum Mpeg2SettingsSceneChangeDetect { DISABLED = 0, ENABLED = 1 }

	export enum Mpeg2SettingsSlowPal { DISABLED = 0, ENABLED = 1 }

	export enum Mpeg2SettingsSpatialAdaptiveQuantization { DISABLED = 0, ENABLED = 1 }

	export enum Mpeg2SettingsSyntax { DEFAULT = 0, D_10 = 1 }

	export enum Mpeg2SettingsTelecine { NONE = 0, SOFT = 1, HARD = 2 }

	export enum Mpeg2SettingsTemporalAdaptiveQuantization { DISABLED = 0, ENABLED = 1 }


	/**Specify the details for each additional Microsoft Smooth Streaming manifest that you want the service to generate for this output group. Each manifest can reference a different subset of outputs in the group. */
	export interface MsSmoothAdditionalManifest {
		ManifestNameModifier?: string;
		SelectedOutputs?: Array<__stringMin1>;
	}


	/**COMBINE_DUPLICATE_STREAMS combines identical audio encoding settings across a Microsoft Smooth output group into a single audio stream. */
	export enum MsSmoothAudioDeduplication { COMBINE_DUPLICATE_STREAMS = 0, NONE = 1 }


	/**If you are using DRM, set DRM System (MsSmoothEncryptionSettings) to specify the value SpekeKeyProvider. */
	export interface MsSmoothEncryptionSettings {

		/**If your output group type is HLS, DASH, or Microsoft Smooth, use these settings when doing DRM encryption with a SPEKE-compliant key provider.  If your output group type is CMAF, use the SpekeKeyProviderCmaf settings instead. */
		SpekeKeyProvider?: SpekeKeyProvider;
	}


	/**Use Manifest encoding (MsSmoothManifestEncoding) to specify the encoding format for the server and client manifest. Valid options are utf8 and utf16. */
	export enum MsSmoothManifestEncoding { UTF8 = 0, UTF16 = 1 }


	/**Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to MS_SMOOTH_GROUP_SETTINGS. */
	export interface MsSmoothGroupSettings {
		AdditionalManifests?: Array<MsSmoothAdditionalManifest>;

		/**COMBINE_DUPLICATE_STREAMS combines identical audio encoding settings across a Microsoft Smooth output group into a single audio stream. */
		AudioDeduplication?: MsSmoothGroupSettingsAudioDeduplication;
		Destination?: string;

		/**Settings associated with the destination. Will vary based on the type of destination */
		DestinationSettings?: DestinationSettings;

		/**If you are using DRM, set DRM System (MsSmoothEncryptionSettings) to specify the value SpekeKeyProvider. */
		Encryption?: MsSmoothEncryptionSettings;
		FragmentLength?: number;

		/**Use Manifest encoding (MsSmoothManifestEncoding) to specify the encoding format for the server and client manifest. Valid options are utf8 and utf16. */
		ManifestEncoding?: MsSmoothGroupSettingsManifestEncoding;
	}

	export enum MsSmoothGroupSettingsAudioDeduplication { COMBINE_DUPLICATE_STREAMS = 0, NONE = 1 }

	export enum MsSmoothGroupSettingsManifestEncoding { UTF8 = 0, UTF16 = 1 }


	/**Optional. When you have AFD signaling set up in your output video stream, use this setting to choose whether to also include it in the MXF wrapper. Choose Don't copy (NO_COPY) to exclude AFD signaling from the MXF wrapper. Choose Copy from video stream (COPY_FROM_VIDEO) to copy the AFD values from the video stream for this output to the MXF wrapper. Regardless of which option you choose, the AFD values remain in the video stream. Related settings: To set up your output to include or exclude AFD values, see AfdSignaling, under VideoDescription. On the console, find AFD signaling under the output's video encoding settings. */
	export enum MxfAfdSignaling { NO_COPY = 0, COPY_FROM_VIDEO = 1 }


	/**Optional. When you set Noise reducer (noiseReducer) to Temporal (TEMPORAL), you can optionally use this setting to apply additional sharpening. The default behavior, Auto (AUTO) allows the transcoder to determine whether to apply filtering, depending on input type and quality. */
	export enum NoiseFilterPostTemporalSharpening { DISABLED = 0, ENABLED = 1, AUTO = 2 }


	/**Use Noise reducer filter (NoiseReducerFilter) to select one of the following spatial image filtering functions. To use this setting, you must also enable Noise reducer (NoiseReducer). * Bilateral preserves edges while reducing noise. * Mean (softest), Gaussian, Lanczos, and Sharpen (sharpest) do convolution filtering. * Conserve does min/max noise reduction. * Spatial does frequency-domain filtering based on JND principles. * Temporal optimizes video quality for complex motion. */
	export enum NoiseReducerFilter { BILATERAL = 0, MEAN = 1, GAUSSIAN = 2, LANCZOS = 3, SHARPEN = 4, CONSERVE = 5, SPATIAL = 6, TEMPORAL = 7 }


	/**Settings for a noise reducer filter */
	export interface NoiseReducerFilterSettings {
		Strength?: number;
	}


	/**Noise reducer filter settings for spatial filter. */
	export interface NoiseReducerSpatialFilterSettings {
		PostFilterSharpenStrength?: number;
		Speed?: number;
		Strength?: number;
	}


	/**Noise reducer filter settings for temporal filter. */
	export interface NoiseReducerTemporalFilterSettings {
		AggressiveMode?: number;

		/**Optional. When you set Noise reducer (noiseReducer) to Temporal (TEMPORAL), you can optionally use this setting to apply additional sharpening. The default behavior, Auto (AUTO) allows the transcoder to determine whether to apply filtering, depending on input type and quality. */
		PostTemporalSharpening?: NoiseReducerTemporalFilterSettingsPostTemporalSharpening;
		Speed?: number;
		Strength?: number;
	}

	export enum NoiseReducerTemporalFilterSettingsPostTemporalSharpening { DISABLED = 0, ENABLED = 1, AUTO = 2 }


	/**Enable the Noise reducer (NoiseReducer) feature to remove noise from your video output if necessary. Enable or disable this feature for each output individually. This setting is disabled by default. When you enable Noise reducer (NoiseReducer), you must also select a value for Noise reducer filter (NoiseReducerFilter). */
	export interface NoiseReducer {

		/**Use Noise reducer filter (NoiseReducerFilter) to select one of the following spatial image filtering functions. To use this setting, you must also enable Noise reducer (NoiseReducer). * Bilateral preserves edges while reducing noise. * Mean (softest), Gaussian, Lanczos, and Sharpen (sharpest) do convolution filtering. * Conserve does min/max noise reduction. * Spatial does frequency-domain filtering based on JND principles. * Temporal optimizes video quality for complex motion. */
		Filter?: NoiseReducerFilter;

		/**Settings for a noise reducer filter */
		FilterSettings?: NoiseReducerFilterSettings;

		/**Noise reducer filter settings for spatial filter. */
		SpatialFilterSettings?: NoiseReducerSpatialFilterSettings;

		/**Noise reducer filter settings for temporal filter. */
		TemporalFilterSettings?: NoiseReducerTemporalFilterSettings;
	}

	export enum NoiseReducerFilter { BILATERAL = 0, MEAN = 1, GAUSSIAN = 2, LANCZOS = 3, SHARPEN = 4, CONSERVE = 5, SPATIAL = 6, TEMPORAL = 7 }


	/**Specific settings for this type of output. */
	export interface OutputSettings {

		/**Settings for HLS output groups */
		HlsSettings?: HlsSettings;
	}


	/**An output object describes the settings for a single output file or stream in an output group. */
	export interface Output {
		AudioDescriptions?: Array<AudioDescription>;
		CaptionDescriptions?: Array<CaptionDescription>;

		/**Container specific settings. */
		ContainerSettings?: ContainerSettings;
		Extension?: string;
		NameModifier?: string;

		/**Specific settings for this type of output. */
		OutputSettings?: OutputSettings;
		Preset?: string;

		/**Settings for video outputs */
		VideoDescription?: VideoDescription;
	}


	/**OutputChannel mapping settings. */
	export interface OutputChannelMapping {
		InputChannels?: Array<__integerMinNegative60Max6>;
	}


	/**Contains details about the output's video stream */
	export interface VideoDetail {
		HeightInPx?: number;
		WidthInPx?: number;
	}


	/**Details regarding output */
	export interface OutputDetail {
		DurationInMs?: number;

		/**Contains details about the output's video stream */
		VideoDetails?: VideoDetail;
	}


	/**Output Group settings, including type */
	export interface OutputGroupSettings {

		/**Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to CMAF_GROUP_SETTINGS. Each output in a CMAF Output Group may only contain a single video, audio, or caption output. */
		CmafGroupSettings?: CmafGroupSettings;

		/**Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to DASH_ISO_GROUP_SETTINGS. */
		DashIsoGroupSettings?: DashIsoGroupSettings;

		/**Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to FILE_GROUP_SETTINGS. */
		FileGroupSettings?: FileGroupSettings;

		/**Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to HLS_GROUP_SETTINGS. */
		HlsGroupSettings?: HlsGroupSettings;

		/**Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to MS_SMOOTH_GROUP_SETTINGS. */
		MsSmoothGroupSettings?: MsSmoothGroupSettings;

		/**Type of output group (File group, Apple HLS, DASH ISO, Microsoft Smooth Streaming, CMAF) */
		Type?: OutputGroupSettingsType;
	}

	export enum OutputGroupSettingsType { HLS_GROUP_SETTINGS = 0, DASH_ISO_GROUP_SETTINGS = 1, FILE_GROUP_SETTINGS = 2, MS_SMOOTH_GROUP_SETTINGS = 3, CMAF_GROUP_SETTINGS = 4 }


	/**Group of outputs */
	export interface OutputGroup {
		CustomName?: string;
		Name?: string;

		/**Output Group settings, including type */
		OutputGroupSettings?: OutputGroupSettings;
		Outputs?: Array<Output>;
	}


	/**Contains details about the output groups specified in the job settings. */
	export interface OutputGroupDetail {
		OutputDetails?: Array<OutputDetail>;
	}


	/**Type of output group (File group, Apple HLS, DASH ISO, Microsoft Smooth Streaming, CMAF) */
	export enum OutputGroupType { HLS_GROUP_SETTINGS = 0, DASH_ISO_GROUP_SETTINGS = 1, FILE_GROUP_SETTINGS = 2, MS_SMOOTH_GROUP_SETTINGS = 3, CMAF_GROUP_SETTINGS = 4 }


	/**Use Profile (ProResCodecProfile) to specifiy the type of Apple ProRes codec to use for this output. */
	export enum ProresCodecProfile { APPLE_PRORES_422 = 0, APPLE_PRORES_422_HQ = 1, APPLE_PRORES_422_LT = 2, APPLE_PRORES_422_PROXY = 3 }


	/**If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator. */
	export enum ProresFramerateControl { INITIALIZE_FROM_SOURCE = 0, SPECIFIED = 1 }


	/**Optional. Specify how the transcoder performs framerate conversion. The default behavior is to use duplicate drop conversion. */
	export enum ProresFramerateConversionAlgorithm { DUPLICATE_DROP = 0, INTERPOLATE = 1 }


	/**
	 * Use Interlace mode (InterlaceMode) to choose the scan line type for the output. * Top Field First (TOP_FIELD) and Bottom Field First (BOTTOM_FIELD) produce interlaced output with the entire output having the same field polarity (top or bottom first). * Follow, Default Top (FOLLOW_TOP_FIELD) and Follow, Default Bottom (FOLLOW_BOTTOM_FIELD) use the same field polarity as the source. Therefore, behavior depends on the input scan type.
	 *   - If the source is interlaced, the output will be interlaced with the same polarity as the source (it will follow the source). The output could therefore be a mix of "top field first" and "bottom field first".
	 *   - If the source is progressive, the output will be interlaced with "top field first" or "bottom field first" polarity, depending on which of the Follow options you chose.
	 */
	export enum ProresInterlaceMode { PROGRESSIVE = 0, TOP_FIELD = 1, BOTTOM_FIELD = 2, FOLLOW_TOP_FIELD = 3, FOLLOW_BOTTOM_FIELD = 4 }


	/**Optional. Specify how the service determines the pixel aspect ratio (PAR) for this output. The default behavior, Follow source (INITIALIZE_FROM_SOURCE), uses the PAR from your input video for your output. To use a different PAR, choose (SPECIFIED). In the console, SPECIFIED corresponds to any value other than Follow source. When you choose SPECIFIED for this setting, you must also specify values for the parNumerator and parDenominator settings. */
	export enum ProresParControl { INITIALIZE_FROM_SOURCE = 0, SPECIFIED = 1 }


	/**Enables Slow PAL rate conversion. 23.976fps and 24fps input is relabeled as 25fps, and audio is sped up correspondingly. */
	export enum ProresSlowPal { DISABLED = 0, ENABLED = 1 }


	/**Only use Telecine (ProresTelecine) when you set Framerate (Framerate) to 29.970. Set Telecine (ProresTelecine) to Hard (hard) to produce a 29.97i output from a 23.976 input. Set it to Soft (soft) to produce 23.976 output and leave converstion to the player. */
	export enum ProresTelecine { NONE = 0, HARD = 1 }


	/**Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value PRORES. */
	export interface ProresSettings {

		/**Use Profile (ProResCodecProfile) to specifiy the type of Apple ProRes codec to use for this output. */
		CodecProfile?: ProresSettingsCodecProfile;

		/**If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator. */
		FramerateControl?: ProresSettingsFramerateControl;

		/**Optional. Specify how the transcoder performs framerate conversion. The default behavior is to use duplicate drop conversion. */
		FramerateConversionAlgorithm?: ProresSettingsFramerateConversionAlgorithm;
		FramerateDenominator?: number;
		FramerateNumerator?: number;

		/**
		 * Use Interlace mode (InterlaceMode) to choose the scan line type for the output. * Top Field First (TOP_FIELD) and Bottom Field First (BOTTOM_FIELD) produce interlaced output with the entire output having the same field polarity (top or bottom first). * Follow, Default Top (FOLLOW_TOP_FIELD) and Follow, Default Bottom (FOLLOW_BOTTOM_FIELD) use the same field polarity as the source. Therefore, behavior depends on the input scan type.
		 * - If the source is interlaced, the output will be interlaced with the same polarity as the source (it will follow the source). The output could therefore be a mix of "top field first" and "bottom field first".
		 * - If the source is progressive, the output will be interlaced with "top field first" or "bottom field first" polarity, depending on which of the Follow options you chose.
		 */
		InterlaceMode?: ProresSettingsInterlaceMode;

		/**Optional. Specify how the service determines the pixel aspect ratio (PAR) for this output. The default behavior, Follow source (INITIALIZE_FROM_SOURCE), uses the PAR from your input video for your output. To use a different PAR, choose (SPECIFIED). In the console, SPECIFIED corresponds to any value other than Follow source. When you choose SPECIFIED for this setting, you must also specify values for the parNumerator and parDenominator settings. */
		ParControl?: ProresSettingsParControl;
		ParDenominator?: number;
		ParNumerator?: number;

		/**Enables Slow PAL rate conversion. 23.976fps and 24fps input is relabeled as 25fps, and audio is sped up correspondingly. */
		SlowPal?: ProresSettingsSlowPal;

		/**Only use Telecine (ProresTelecine) when you set Framerate (Framerate) to 29.970. Set Telecine (ProresTelecine) to Hard (hard) to produce a 29.97i output from a 23.976 input. Set it to Soft (soft) to produce 23.976 output and leave converstion to the player. */
		Telecine?: ProresSettingsTelecine;
	}

	export enum ProresSettingsCodecProfile { APPLE_PRORES_422 = 0, APPLE_PRORES_422_HQ = 1, APPLE_PRORES_422_LT = 2, APPLE_PRORES_422_PROXY = 3 }

	export enum ProresSettingsFramerateControl { INITIALIZE_FROM_SOURCE = 0, SPECIFIED = 1 }

	export enum ProresSettingsFramerateConversionAlgorithm { DUPLICATE_DROP = 0, INTERPOLATE = 1 }

	export enum ProresSettingsInterlaceMode { PROGRESSIVE = 0, TOP_FIELD = 1, BOTTOM_FIELD = 2, FOLLOW_TOP_FIELD = 3, FOLLOW_BOTTOM_FIELD = 4 }

	export enum ProresSettingsParControl { INITIALIZE_FROM_SOURCE = 0, SPECIFIED = 1 }

	export enum ProresSettingsSlowPal { DISABLED = 0, ENABLED = 1 }

	export enum ProresSettingsTelecine { NONE = 0, HARD = 1 }


	/**Details about the pricing plan for your reserved queue. Required for reserved queues and not applicable to on-demand queues. */
	export interface ReservationPlan {

		/**The length of the term of your reserved queue pricing plan commitment. */
		Commitment?: ReservationPlanCommitment;
		ExpiresAt?: Date;
		PurchasedAt?: Date;

		/**Specifies whether the term of your reserved queue pricing plan is automatically extended (AUTO_RENEW) or expires (EXPIRE) at the end of the term. */
		RenewalType?: ReservationPlanRenewalType;
		ReservedSlots?: number;

		/**Specifies whether the pricing plan for your reserved queue is ACTIVE or EXPIRED. */
		Status?: ReservationPlanStatus;
	}

	export enum ReservationPlanCommitment { ONE_YEAR = 0 }

	export enum ReservationPlanRenewalType { AUTO_RENEW = 0, EXPIRE = 1 }

	export enum ReservationPlanStatus { ACTIVE = 0, EXPIRED = 1 }


	/**Description of the source and destination queues between which the job has moved, along with the timestamp of the move */
	export interface QueueTransition {
		DestinationQueue?: string;
		SourceQueue?: string;
		Timestamp?: Date;
	}


	/**Specifies whether the pricing plan for your reserved queue is ACTIVE or EXPIRED. */
	export enum ReservationPlanStatus { ACTIVE = 0, EXPIRED = 1 }


	/**Use Respond to AFD (RespondToAfd) to specify how the service changes the video itself in response to AFD values in the input. * Choose Respond to clip the input video frame according to the AFD value, input display aspect ratio, and output display aspect ratio. * Choose Passthrough to include the input AFD values. Do not choose this when AfdSignaling is set to (NONE). A preferred implementation of this workflow is to set RespondToAfd to (NONE) and set AfdSignaling to (AUTO). * Choose None to remove all input AFD values from this output. */
	export enum RespondToAfd { NONE = 0, RESPOND = 1, PASSTHROUGH = 2 }


	/**Choose an Amazon S3 canned ACL for MediaConvert to apply to this output. */
	export enum S3ObjectCannedAcl { PUBLIC_READ = 0, AUTHENTICATED_READ = 1, BUCKET_OWNER_READ = 2, BUCKET_OWNER_FULL_CONTROL = 3 }


	/**Optional. Have MediaConvert automatically apply Amazon S3 access control for the outputs in this output group. When you don't use this setting, S3 automatically applies the default access control list PRIVATE. */
	export interface S3DestinationAccessControl {

		/**Choose an Amazon S3 canned ACL for MediaConvert to apply to this output. */
		CannedAcl?: S3DestinationAccessControlCannedAcl;
	}

	export enum S3DestinationAccessControlCannedAcl { PUBLIC_READ = 0, AUTHENTICATED_READ = 1, BUCKET_OWNER_READ = 2, BUCKET_OWNER_FULL_CONTROL = 3 }


	/**Settings for how your job outputs are encrypted as they are uploaded to Amazon S3. */
	export interface S3EncryptionSettings {

		/**Specify how you want your data keys managed. AWS uses data keys to encrypt your content. AWS also encrypts the data keys themselves, using a customer master key (CMK), and then stores the encrypted data keys alongside your encrypted content. Use this setting to specify which AWS service manages the CMK. For simplest set up, choose Amazon S3 (SERVER_SIDE_ENCRYPTION_S3). If you want your master key to be managed by AWS Key Management Service (KMS), choose AWS KMS (SERVER_SIDE_ENCRYPTION_KMS). By default, when you choose AWS KMS, KMS uses the AWS managed customer master key (CMK) associated with Amazon S3 to encrypt your data keys. You can optionally choose to specify a different, customer managed CMK. Do so by specifying the Amazon Resource Name (ARN) of the key for the setting  KMS ARN (kmsKeyArn). */
		EncryptionType?: S3EncryptionSettingsEncryptionType;
		KmsKeyArn?: string;
	}

	export enum S3EncryptionSettingsEncryptionType { SERVER_SIDE_ENCRYPTION_S3 = 0, SERVER_SIDE_ENCRYPTION_KMS = 1 }


	/**Specify how you want your data keys managed. AWS uses data keys to encrypt your content. AWS also encrypts the data keys themselves, using a customer master key (CMK), and then stores the encrypted data keys alongside your encrypted content. Use this setting to specify which AWS service manages the CMK. For simplest set up, choose Amazon S3 (SERVER_SIDE_ENCRYPTION_S3). If you want your master key to be managed by AWS Key Management Service (KMS), choose AWS KMS (SERVER_SIDE_ENCRYPTION_KMS). By default, when you choose AWS KMS, KMS uses the AWS managed customer master key (CMK) associated with Amazon S3 to encrypt your data keys. You can optionally choose to specify a different, customer managed CMK. Do so by specifying the Amazon Resource Name (ARN) of the key for the setting  KMS ARN (kmsKeyArn). */
	export enum S3ServerSideEncryptionType { SERVER_SIDE_ENCRYPTION_S3 = 0, SERVER_SIDE_ENCRYPTION_KMS = 1 }


	/**Specify how the service handles outputs that have a different aspect ratio from the input aspect ratio. Choose Stretch to output (STRETCH_TO_OUTPUT) to have the service stretch your video image to fit. Keep the setting Default (DEFAULT) to have the service letterbox your video instead. This setting overrides any value that you specify for the setting Selection placement (position) in this output. */
	export enum ScalingBehavior { DEFAULT = 0, STRETCH_TO_OUTPUT = 1 }


	/**Set Framerate (SccDestinationFramerate) to make sure that the captions and the video are synchronized in the output. Specify a frame rate that matches the frame rate of the associated video. If the video frame rate is 29.97, choose 29.97 dropframe (FRAMERATE_29_97_DROPFRAME) only if the video has video_insertion=true and drop_frame_timecode=true; otherwise, choose 29.97 non-dropframe (FRAMERATE_29_97_NON_DROPFRAME). */
	export enum SccDestinationFramerate { FRAMERATE_23_97 = 0, FRAMERATE_24 = 1, FRAMERATE_25 = 2, FRAMERATE_29_97_DROPFRAME = 3, FRAMERATE_29_97_NON_DROPFRAME = 4 }

	export interface TagResourceRequest {
		Arn: string;
		Tags: __mapOf__string;
	}


	/**A page type as defined in the standard ETSI EN 300 468, Table 94 */
	export enum TeletextPageType { PAGE_TYPE_INITIAL = 0, PAGE_TYPE_SUBTITLE = 1, PAGE_TYPE_ADDL_INFO = 2, PAGE_TYPE_PROGRAM_SCHEDULE = 3, PAGE_TYPE_HEARING_IMPAIRED_SUBTITLE = 4 }


	/**Use Position (Position) under under Timecode burn-in (TimecodeBurnIn) to specify the location the burned-in timecode on output video. */
	export enum TimecodeBurninPosition { TOP_CENTER = 0, TOP_LEFT = 1, TOP_RIGHT = 2, MIDDLE_LEFT = 3, MIDDLE_CENTER = 4, MIDDLE_RIGHT = 5, BOTTOM_LEFT = 6, BOTTOM_CENTER = 7, BOTTOM_RIGHT = 8 }


	/**Timecode burn-in (TimecodeBurnIn)--Burns the output timecode and specified prefix into the output. */
	export interface TimecodeBurnin {
		FontSize?: number;

		/**Use Position (Position) under under Timecode burn-in (TimecodeBurnIn) to specify the location the burned-in timecode on output video. */
		Position?: TimecodeBurninPosition;
		Prefix?: string;
	}

	export enum TimecodeBurninPosition { TOP_CENTER = 0, TOP_LEFT = 1, TOP_RIGHT = 2, MIDDLE_LEFT = 3, MIDDLE_CENTER = 4, MIDDLE_RIGHT = 5, BOTTOM_LEFT = 6, BOTTOM_CENTER = 7, BOTTOM_RIGHT = 8 }


	/**Use Source (TimecodeSource) to set how timecodes are handled within this job. To make sure that your video, audio, captions, and markers are synchronized and that time-based features, such as image inserter, work correctly, choose the Timecode source option that matches your assets. All timecodes are in a 24-hour format with frame number (HH:MM:SS:FF). * Embedded (EMBEDDED) - Use the timecode that is in the input video. If no embedded timecode is in the source, the service will use Start at 0 (ZEROBASED) instead. * Start at 0 (ZEROBASED) - Set the timecode of the initial frame to 00:00:00:00. * Specified Start (SPECIFIEDSTART) - Set the timecode of the initial frame to a value other than zero. You use Start timecode (Start) to provide this value. */
	export enum TimecodeSource { EMBEDDED = 0, ZEROBASED = 1, SPECIFIEDSTART = 2 }


	/**Pass through style and position information from a TTML-like input source (TTML, SMPTE-TT) to the TTML output. */
	export enum TtmlStylePassthrough { ENABLED = 0, DISABLED = 1 }

	export interface UntagResourceRequest {
		TagKeys?: Array<__string>;
	}

	export interface UpdateJobTemplateRequest {

		/**Accelerated transcoding can significantly speed up jobs with long, visually complex content. */
		AccelerationSettings?: AccelerationSettings;
		Category?: string;
		Description?: string;
		HopDestinations?: Array<HopDestination>;
		Priority?: number;
		Queue?: string;

		/**JobTemplateSettings contains all the transcode settings saved in the template that will be applied to jobs created from it. */
		Settings?: JobTemplateSettings;

		/**Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error. */
		StatusUpdateInterval?: UpdateJobTemplateRequestStatusUpdateInterval;
	}

	export enum UpdateJobTemplateRequestStatusUpdateInterval { SECONDS_10 = 0, SECONDS_12 = 1, SECONDS_15 = 2, SECONDS_20 = 3, SECONDS_30 = 4, SECONDS_60 = 5, SECONDS_120 = 6, SECONDS_180 = 7, SECONDS_240 = 8, SECONDS_300 = 9, SECONDS_360 = 10, SECONDS_420 = 11, SECONDS_480 = 12, SECONDS_540 = 13, SECONDS_600 = 14 }

	export interface UpdatePresetRequest {
		Category?: string;
		Description?: string;

		/**Settings for preset */
		Settings?: PresetSettings;
	}

	export interface UpdateQueueRequest {
		Description?: string;

		/**Details about the pricing plan for your reserved queue. Required for reserved queues and not applicable to on-demand queues. */
		ReservationPlanSettings?: ReservationPlanSettings;

		/**Queues can be ACTIVE or PAUSED. If you pause a queue, jobs in that queue won't begin. Jobs that are running when you pause a queue continue to run until they finish or result in an error. */
		Status?: UpdateQueueRequestStatus;
	}

	export enum UpdateQueueRequestStatus { ACTIVE = 0, PAUSED = 1 }


	/**Type of video codec */
	export enum VideoCodec { FRAME_CAPTURE = 0, AV1 = 1, H_264 = 2, H_265 = 3, MPEG2 = 4, PRORES = 5, VP8 = 6, VP9 = 7 }


	/**Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value VP8. */
	export interface Vp8Settings {
		Bitrate?: number;

		/**If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator. */
		FramerateControl?: Vp8SettingsFramerateControl;

		/**Optional. Specify how the transcoder performs framerate conversion. The default behavior is to use Drop duplicate (DUPLICATE_DROP) conversion. When you choose Interpolate (INTERPOLATE) instead, the conversion produces smoother motion. */
		FramerateConversionAlgorithm?: Vp8SettingsFramerateConversionAlgorithm;
		FramerateDenominator?: number;
		FramerateNumerator?: number;
		GopSize?: number;
		HrdBufferSize?: number;
		MaxBitrate?: number;

		/**Optional. Specify how the service determines the pixel aspect ratio (PAR) for this output. The default behavior, Follow source (INITIALIZE_FROM_SOURCE), uses the PAR from your input video for your output.  To specify a different PAR in the console, choose any value other than Follow source. To specify a different PAR by editing the JSON job specification, choose SPECIFIED. When you choose SPECIFIED for this setting, you must also specify values for the parNumerator and parDenominator settings. */
		ParControl?: Vp8SettingsParControl;
		ParDenominator?: number;
		ParNumerator?: number;

		/**Optional. Use Quality tuning level (qualityTuningLevel) to choose how you want to trade off encoding speed for output video quality. The default behavior is faster, lower quality, multi-pass encoding. */
		QualityTuningLevel?: Vp8SettingsQualityTuningLevel;

		/**With the VP8 codec, you can use only the variable bitrate (VBR) rate control mode. */
		RateControlMode?: Vp8SettingsRateControlMode;
	}

	export enum Vp8SettingsFramerateControl { INITIALIZE_FROM_SOURCE = 0, SPECIFIED = 1 }

	export enum Vp8SettingsFramerateConversionAlgorithm { DUPLICATE_DROP = 0, INTERPOLATE = 1 }

	export enum Vp8SettingsParControl { INITIALIZE_FROM_SOURCE = 0, SPECIFIED = 1 }

	export enum Vp8SettingsQualityTuningLevel { MULTI_PASS = 0, MULTI_PASS_HQ = 1 }

	export enum Vp8SettingsRateControlMode { VBR = 0 }


	/**Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value VP9. */
	export interface Vp9Settings {
		Bitrate?: number;

		/**If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator. */
		FramerateControl?: Vp9SettingsFramerateControl;

		/**Optional. Specify how the transcoder performs framerate conversion. The default behavior is to use Drop duplicate (DUPLICATE_DROP) conversion. When you choose Interpolate (INTERPOLATE) instead, the conversion produces smoother motion. */
		FramerateConversionAlgorithm?: Vp9SettingsFramerateConversionAlgorithm;
		FramerateDenominator?: number;
		FramerateNumerator?: number;
		GopSize?: number;
		HrdBufferSize?: number;
		MaxBitrate?: number;

		/**Optional. Specify how the service determines the pixel aspect ratio (PAR) for this output. The default behavior, Follow source (INITIALIZE_FROM_SOURCE), uses the PAR from your input video for your output.  To specify a different PAR in the console, choose any value other than Follow source. To specify a different PAR by editing the JSON job specification, choose SPECIFIED. When you choose SPECIFIED for this setting, you must also specify values for the parNumerator and parDenominator settings. */
		ParControl?: Vp9SettingsParControl;
		ParDenominator?: number;
		ParNumerator?: number;

		/**Optional. Use Quality tuning level (qualityTuningLevel) to choose how you want to trade off encoding speed for output video quality. The default behavior is faster, lower quality, multi-pass encoding. */
		QualityTuningLevel?: Vp9SettingsQualityTuningLevel;

		/**With the VP9 codec, you can use only the variable bitrate (VBR) rate control mode. */
		RateControlMode?: Vp9SettingsRateControlMode;
	}

	export enum Vp9SettingsFramerateControl { INITIALIZE_FROM_SOURCE = 0, SPECIFIED = 1 }

	export enum Vp9SettingsFramerateConversionAlgorithm { DUPLICATE_DROP = 0, INTERPOLATE = 1 }

	export enum Vp9SettingsParControl { INITIALIZE_FROM_SOURCE = 0, SPECIFIED = 1 }

	export enum Vp9SettingsQualityTuningLevel { MULTI_PASS = 0, MULTI_PASS_HQ = 1 }

	export enum Vp9SettingsRateControlMode { VBR = 0 }


	/**Video codec settings, (CodecSettings) under (VideoDescription), contains the group of settings related to video encoding. The settings in this group vary depending on the value that you choose for Video codec (Codec). For each codec enum that you choose, define the corresponding settings object. The following lists the codec enum, settings object pairs. * FRAME_CAPTURE, FrameCaptureSettings * AV1, Av1Settings * H_264, H264Settings * H_265, H265Settings * MPEG2, Mpeg2Settings * PRORES, ProresSettings * VP8, Vp8Settings * VP9, Vp9Settings */
	export interface VideoCodecSettings {

		/**Required when you set Codec, under VideoDescription>CodecSettings to the value AV1. */
		Av1Settings?: Av1Settings;

		/**Type of video codec */
		Codec?: VideoCodecSettingsCodec;

		/**Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value FRAME_CAPTURE. */
		FrameCaptureSettings?: FrameCaptureSettings;

		/**Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value H_264. */
		H264Settings?: H264Settings;

		/**Settings for H265 codec */
		H265Settings?: H265Settings;

		/**Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value MPEG2. */
		Mpeg2Settings?: Mpeg2Settings;

		/**Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value PRORES. */
		ProresSettings?: ProresSettings;

		/**Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value VP8. */
		Vp8Settings?: Vp8Settings;

		/**Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value VP9. */
		Vp9Settings?: Vp9Settings;
	}

	export enum VideoCodecSettingsCodec { FRAME_CAPTURE = 0, AV1 = 1, H_264 = 2, H_265 = 3, MPEG2 = 4, PRORES = 5, VP8 = 6, VP9 = 7 }


	/**Applies only to H.264, H.265, MPEG2, and ProRes outputs. Only enable Timecode insertion when the input frame rate is identical to the output frame rate. To include timecodes in this output, set Timecode insertion (VideoTimecodeInsertion) to PIC_TIMING_SEI. To leave them out, set it to DISABLED. Default is DISABLED. When the service inserts timecodes in an output, by default, it uses any embedded timecodes from the input. If none are present, the service will set the timecode for the first output frame to zero. To change this default behavior, adjust the settings under Timecode configuration (TimecodeConfig). In the console, these settings are located under Job > Job settings > Timecode configuration. Note - Timecode source under input settings (InputTimecodeSource) does not affect the timecodes that are inserted in the output. Source under Job settings > Timecode configuration (TimecodeSource) does. */
	export enum VideoTimecodeInsertion { DISABLED = 0, PIC_TIMING_SEI = 1 }


	/**Find additional transcoding features under Preprocessors (VideoPreprocessors). Enable the features at each output individually. These features are disabled by default. */
	export interface VideoPreprocessor {

		/**Settings for color correction. */
		ColorCorrector?: ColorCorrector;

		/**Settings for deinterlacer */
		Deinterlacer?: Deinterlacer;

		/**Settings for Dolby Vision */
		DolbyVision?: DolbyVision;

		/**Enable the image inserter feature to include a graphic overlay on your video. Enable or disable this feature for each input or output individually. This setting is disabled by default. */
		ImageInserter?: ImageInserter;

		/**Enable the Noise reducer (NoiseReducer) feature to remove noise from your video output if necessary. Enable or disable this feature for each output individually. This setting is disabled by default. When you enable Noise reducer (NoiseReducer), you must also select a value for Noise reducer filter (NoiseReducerFilter). */
		NoiseReducer?: NoiseReducer;

		/**Timecode burn-in (TimecodeBurnIn)--Burns the output timecode and specified prefix into the output. */
		TimecodeBurnin?: TimecodeBurnin;
	}


	/**If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator. */
	export enum Vp8FramerateControl { INITIALIZE_FROM_SOURCE = 0, SPECIFIED = 1 }


	/**Optional. Specify how the transcoder performs framerate conversion. The default behavior is to use Drop duplicate (DUPLICATE_DROP) conversion. When you choose Interpolate (INTERPOLATE) instead, the conversion produces smoother motion. */
	export enum Vp8FramerateConversionAlgorithm { DUPLICATE_DROP = 0, INTERPOLATE = 1 }


	/**Optional. Specify how the service determines the pixel aspect ratio (PAR) for this output. The default behavior, Follow source (INITIALIZE_FROM_SOURCE), uses the PAR from your input video for your output.  To specify a different PAR in the console, choose any value other than Follow source. To specify a different PAR by editing the JSON job specification, choose SPECIFIED. When you choose SPECIFIED for this setting, you must also specify values for the parNumerator and parDenominator settings. */
	export enum Vp8ParControl { INITIALIZE_FROM_SOURCE = 0, SPECIFIED = 1 }


	/**Optional. Use Quality tuning level (qualityTuningLevel) to choose how you want to trade off encoding speed for output video quality. The default behavior is faster, lower quality, multi-pass encoding. */
	export enum Vp8QualityTuningLevel { MULTI_PASS = 0, MULTI_PASS_HQ = 1 }


	/**With the VP8 codec, you can use only the variable bitrate (VBR) rate control mode. */
	export enum Vp8RateControlMode { VBR = 0 }


	/**If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator. */
	export enum Vp9FramerateControl { INITIALIZE_FROM_SOURCE = 0, SPECIFIED = 1 }


	/**Optional. Specify how the transcoder performs framerate conversion. The default behavior is to use Drop duplicate (DUPLICATE_DROP) conversion. When you choose Interpolate (INTERPOLATE) instead, the conversion produces smoother motion. */
	export enum Vp9FramerateConversionAlgorithm { DUPLICATE_DROP = 0, INTERPOLATE = 1 }


	/**Optional. Specify how the service determines the pixel aspect ratio (PAR) for this output. The default behavior, Follow source (INITIALIZE_FROM_SOURCE), uses the PAR from your input video for your output.  To specify a different PAR in the console, choose any value other than Follow source. To specify a different PAR by editing the JSON job specification, choose SPECIFIED. When you choose SPECIFIED for this setting, you must also specify values for the parNumerator and parDenominator settings. */
	export enum Vp9ParControl { INITIALIZE_FROM_SOURCE = 0, SPECIFIED = 1 }


	/**Optional. Use Quality tuning level (qualityTuningLevel) to choose how you want to trade off encoding speed for output video quality. The default behavior is faster, lower quality, multi-pass encoding. */
	export enum Vp9QualityTuningLevel { MULTI_PASS = 0, MULTI_PASS_HQ = 1 }


	/**With the VP9 codec, you can use only the variable bitrate (VBR) rate control mode. */
	export enum Vp9RateControlMode { VBR = 0 }


	/**The service defaults to using RIFF for WAV outputs. If your output audio is likely to exceed 4 GB in file size, or if you otherwise need the extended support of the RF64 format, set your output WAV file format to RF64. */
	export enum WavFormat { RIFF = 0, RF64 = 1 }

	export class DemoClient {
		constructor(private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/') {
		}

		/**
		 * Associates an AWS Certificate Manager (ACM) Amazon Resource Name (ARN) with AWS Elemental MediaConvert.
		 * Post /2017-08-29/certificates
		 * @return {void} 
		 */
		AssociateCertificate(requestBody: AssociateCertificateBody, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.post(this.baseUri + '/2017-08-29/certificates', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Permanently cancel a job. Once you have canceled a job, you can't start it again.
		 * Delete /2017-08-29/jobs/{id}
		 * @param {string} id The Job ID of the job to be cancelled.
		 * @return {void} 
		 */
		CancelJob(id: string, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.delete(this.baseUri + '/2017-08-29/jobs/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Retrieve the JSON for a specific completed transcoding job.
		 * Get /2017-08-29/jobs/{id}
		 * @param {string} id the job ID of the job.
		 * @return {GetJobResponse} Success
		 */
		GetJob(id: string, headersHandler?: () => {[header: string]: string}): Promise<GetJobResponse> {
			return Axios.get<GetJobResponse>(this.baseUri + '/2017-08-29/jobs/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Create a new transcoding job. For information about jobs and job settings, see the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
		 * Post /2017-08-29/jobs
		 * @return {void} 
		 */
		CreateJob(requestBody: CreateJobBody, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.post(this.baseUri + '/2017-08-29/jobs', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Retrieve a JSON array of up to twenty of your most recently created jobs. This array includes in-process, completed, and errored jobs. This will return the jobs themselves, not just a list of the jobs. To retrieve the twenty next most recent jobs, use the nextToken string returned with the array.
		 * Get /2017-08-29/jobs
		 * @param {number} maxResults Optional. Number of jobs, up to twenty, that will be returned at one time.
		 * @param {string} nextToken Optional. Use this string, provided with the response to a previous request, to request the next batch of jobs.
		 * @param {Order} order Optional. When you request lists of resources, you can specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource.
		 * @param {string} queue Optional. Provide a queue name to get back only jobs from that queue.
		 * @param {JobStatus} status Optional. A job's status can be SUBMITTED, PROGRESSING, COMPLETE, CANCELED, or ERROR.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListJobsResponse} Success
		 */
		ListJobs(maxResults: number, nextToken: string, order: Order, queue: string, status: JobStatus, MaxResults: string, NextToken: string, headersHandler?: () => {[header: string]: string}): Promise<ListJobsResponse> {
			return Axios.get<ListJobsResponse>(this.baseUri + '/2017-08-29/jobs?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&order=' + order + '&queue=' + (queue == null ? '' : encodeURIComponent(queue)) + '&status=' + status + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Create a new job template. For information about job templates see the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
		 * Post /2017-08-29/jobTemplates
		 * @return {void} 
		 */
		CreateJobTemplate(requestBody: CreateJobTemplateBody, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.post(this.baseUri + '/2017-08-29/jobTemplates', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Retrieve a JSON array of up to twenty of your job templates. This will return the templates themselves, not just a list of them. To retrieve the next twenty templates, use the nextToken string returned with the array
		 * Get /2017-08-29/jobTemplates
		 * @param {string} category Optionally, specify a job template category to limit responses to only job templates from that category.
		 * @param {JobTemplateListBy} listBy Optional. When you request a list of job templates, you can choose to list them alphabetically by NAME or chronologically by CREATION_DATE. If you don't specify, the service will list them by name.
		 * @param {number} maxResults Optional. Number of job templates, up to twenty, that will be returned at one time.
		 * @param {string} nextToken Use this string, provided with the response to a previous request, to request the next batch of job templates.
		 * @param {Order} order Optional. When you request lists of resources, you can specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListJobTemplatesResponse} Success
		 */
		ListJobTemplates(category: string, listBy: JobTemplateListBy, maxResults: number, nextToken: string, order: Order, MaxResults: string, NextToken: string, headersHandler?: () => {[header: string]: string}): Promise<ListJobTemplatesResponse> {
			return Axios.get<ListJobTemplatesResponse>(this.baseUri + '/2017-08-29/jobTemplates?category=' + (category == null ? '' : encodeURIComponent(category)) + '&listBy=' + listBy + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&order=' + order + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Create a new preset. For information about job templates see the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
		 * Post /2017-08-29/presets
		 * @return {void} 
		 */
		CreatePreset(requestBody: CreatePresetBody, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.post(this.baseUri + '/2017-08-29/presets', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Retrieve a JSON array of up to twenty of your presets. This will return the presets themselves, not just a list of them. To retrieve the next twenty presets, use the nextToken string returned with the array.
		 * Get /2017-08-29/presets
		 * @param {string} category Optionally, specify a preset category to limit responses to only presets from that category.
		 * @param {JobTemplateListBy} listBy Optional. When you request a list of presets, you can choose to list them alphabetically by NAME or chronologically by CREATION_DATE. If you don't specify, the service will list them by name.
		 * @param {number} maxResults Optional. Number of presets, up to twenty, that will be returned at one time
		 * @param {string} nextToken Use this string, provided with the response to a previous request, to request the next batch of presets.
		 * @param {Order} order Optional. When you request lists of resources, you can specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListPresetsResponse} Success
		 */
		ListPresets(category: string, listBy: JobTemplateListBy, maxResults: number, nextToken: string, order: Order, MaxResults: string, NextToken: string, headersHandler?: () => {[header: string]: string}): Promise<ListPresetsResponse> {
			return Axios.get<ListPresetsResponse>(this.baseUri + '/2017-08-29/presets?category=' + (category == null ? '' : encodeURIComponent(category)) + '&listBy=' + listBy + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&order=' + order + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Create a new transcoding queue. For information about queues, see Working With Queues in the User Guide at https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-queues.html
		 * Post /2017-08-29/queues
		 * @return {void} 
		 */
		CreateQueue(requestBody: CreateQueueBody, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.post(this.baseUri + '/2017-08-29/queues', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Retrieve a JSON array of up to twenty of your queues. This will return the queues themselves, not just a list of them. To retrieve the next twenty queues, use the nextToken string returned with the array.
		 * Get /2017-08-29/queues
		 * @param {QueueListBy} listBy Optional. When you request a list of queues, you can choose to list them alphabetically by NAME or chronologically by CREATION_DATE. If you don't specify, the service will list them by creation date.
		 * @param {number} maxResults Optional. Number of queues, up to twenty, that will be returned at one time.
		 * @param {string} nextToken Use this string, provided with the response to a previous request, to request the next batch of queues.
		 * @param {Order} order Optional. When you request lists of resources, you can specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListQueuesResponse} Success
		 */
		ListQueues(listBy: QueueListBy, maxResults: number, nextToken: string, order: Order, MaxResults: string, NextToken: string, headersHandler?: () => {[header: string]: string}): Promise<ListQueuesResponse> {
			return Axios.get<ListQueuesResponse>(this.baseUri + '/2017-08-29/queues?listBy=' + listBy + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&order=' + order + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Permanently delete a job template you have created.
		 * Delete /2017-08-29/jobTemplates/{name}
		 * @param {string} name The name of the job template to be deleted.
		 * @return {void} 
		 */
		DeleteJobTemplate(name: string, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.delete(this.baseUri + '/2017-08-29/jobTemplates/' + (name == null ? '' : encodeURIComponent(name)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Retrieve the JSON for a specific job template.
		 * Get /2017-08-29/jobTemplates/{name}
		 * @param {string} name The name of the job template.
		 * @return {GetJobTemplateResponse} Success
		 */
		GetJobTemplate(name: string, headersHandler?: () => {[header: string]: string}): Promise<GetJobTemplateResponse> {
			return Axios.get<GetJobTemplateResponse>(this.baseUri + '/2017-08-29/jobTemplates/' + (name == null ? '' : encodeURIComponent(name)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Modify one of your existing job templates.
		 * Put /2017-08-29/jobTemplates/{name}
		 * @param {string} name The name of the job template you are modifying
		 * @return {UpdateJobTemplateResponse} Success
		 */
		UpdateJobTemplate(name: string, requestBody: UpdateJobTemplateBody, headersHandler?: () => {[header: string]: string}): Promise<UpdateJobTemplateResponse> {
			return Axios.put<UpdateJobTemplateResponse>(this.baseUri + '/2017-08-29/jobTemplates/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Permanently delete a preset you have created.
		 * Delete /2017-08-29/presets/{name}
		 * @param {string} name The name of the preset to be deleted.
		 * @return {void} 
		 */
		DeletePreset(name: string, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.delete(this.baseUri + '/2017-08-29/presets/' + (name == null ? '' : encodeURIComponent(name)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Retrieve the JSON for a specific preset.
		 * Get /2017-08-29/presets/{name}
		 * @param {string} name The name of the preset.
		 * @return {GetPresetResponse} Success
		 */
		GetPreset(name: string, headersHandler?: () => {[header: string]: string}): Promise<GetPresetResponse> {
			return Axios.get<GetPresetResponse>(this.baseUri + '/2017-08-29/presets/' + (name == null ? '' : encodeURIComponent(name)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Modify one of your existing presets.
		 * Put /2017-08-29/presets/{name}
		 * @param {string} name The name of the preset you are modifying.
		 * @return {UpdatePresetResponse} Success
		 */
		UpdatePreset(name: string, requestBody: UpdatePresetBody, headersHandler?: () => {[header: string]: string}): Promise<UpdatePresetResponse> {
			return Axios.put<UpdatePresetResponse>(this.baseUri + '/2017-08-29/presets/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Permanently delete a queue you have created.
		 * Delete /2017-08-29/queues/{name}
		 * @param {string} name The name of the queue that you want to delete.
		 * @return {void} 
		 */
		DeleteQueue(name: string, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.delete(this.baseUri + '/2017-08-29/queues/' + (name == null ? '' : encodeURIComponent(name)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Retrieve the JSON for a specific queue.
		 * Get /2017-08-29/queues/{name}
		 * @param {string} name The name of the queue that you want information about.
		 * @return {GetQueueResponse} Success
		 */
		GetQueue(name: string, headersHandler?: () => {[header: string]: string}): Promise<GetQueueResponse> {
			return Axios.get<GetQueueResponse>(this.baseUri + '/2017-08-29/queues/' + (name == null ? '' : encodeURIComponent(name)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Modify one of your existing queues.
		 * Put /2017-08-29/queues/{name}
		 * @param {string} name The name of the queue that you are modifying.
		 * @return {UpdateQueueResponse} Success
		 */
		UpdateQueue(name: string, requestBody: UpdateQueueBody, headersHandler?: () => {[header: string]: string}): Promise<UpdateQueueResponse> {
			return Axios.put<UpdateQueueResponse>(this.baseUri + '/2017-08-29/queues/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Send an request with an empty body to the regional API endpoint to get your account API endpoint.
		 * Post /2017-08-29/endpoints
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeEndpointsResponse} Success
		 */
		DescribeEndpoints(MaxResults: string, NextToken: string, requestBody: DescribeEndpointsBody, headersHandler?: () => {[header: string]: string}): Promise<DescribeEndpointsResponse> {
			return Axios.post<DescribeEndpointsResponse>(this.baseUri + '/2017-08-29/endpoints?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Removes an association between the Amazon Resource Name (ARN) of an AWS Certificate Manager (ACM) certificate and an AWS Elemental MediaConvert resource.
		 * Delete /2017-08-29/certificates/{arn}
		 * @param {string} arn The ARN of the ACM certificate that you want to disassociate from your MediaConvert resource.
		 * @return {void} 
		 */
		DisassociateCertificate(arn: string, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.delete(this.baseUri + '/2017-08-29/certificates/' + (arn == null ? '' : encodeURIComponent(arn)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Retrieve the tags for a MediaConvert resource.
		 * Get /2017-08-29/tags/{arn}
		 * @param {string} arn The Amazon Resource Name (ARN) of the resource that you want to list tags for. To get the ARN, send a GET request with the resource name.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(arn: string, headersHandler?: () => {[header: string]: string}): Promise<ListTagsForResourceResponse> {
			return Axios.get<ListTagsForResourceResponse>(this.baseUri + '/2017-08-29/tags/' + (arn == null ? '' : encodeURIComponent(arn)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Remove tags from a MediaConvert queue, preset, or job template. For information about tagging, see the User Guide at https://docs.aws.amazon.com/mediaconvert/latest/ug/tagging-resources.html
		 * Put /2017-08-29/tags/{arn}
		 * @param {string} arn The Amazon Resource Name (ARN) of the resource that you want to remove tags from. To get the ARN, send a GET request with the resource name.
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(arn: string, requestBody: UntagResourceBody, headersHandler?: () => {[header: string]: string}): Promise<UntagResourceResponse> {
			return Axios.put<UntagResourceResponse>(this.baseUri + '/2017-08-29/tags/' + (arn == null ? '' : encodeURIComponent(arn)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Add tags to a MediaConvert queue, preset, or job template. For information about tagging, see the User Guide at https://docs.aws.amazon.com/mediaconvert/latest/ug/tagging-resources.html
		 * Post /2017-08-29/tags
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceBody, headersHandler?: () => {[header: string]: string}): Promise<TagResourceResponse> {
			return Axios.post<TagResourceResponse>(this.baseUri + '/2017-08-29/tags', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}
	}

	export interface AssociateCertificateBody {

		/**The ARN of the ACM certificate that you want to associate with your MediaConvert resource. */
		arn: string;
	}

	export interface CreateJobBody {

		/**Accelerated transcoding can significantly speed up jobs with long, visually complex content. */
		accelerationSettings?: string;

		/**The tag type that AWS Billing and Cost Management will use to sort your AWS Elemental MediaConvert costs on any billing report that you set up. */
		billingTagsSource?: CreateJobBodyBillingTagsSource;

		/**Optional. Idempotency token for CreateJob operation. */
		clientRequestToken?: string;

		/**Optional. Use queue hopping to avoid overly long waits in the backlog of the queue that you submit your job to. Specify an alternate queue and the maximum time that your job will wait in the initial queue before hopping. For more information about this feature, see the AWS Elemental MediaConvert User Guide. */
		hopDestinations?: Array<HopDestination>;

		/**Optional. When you create a job, you can either specify a job template or specify the transcoding settings individually. */
		jobTemplate?: string;

		/**
		 * Optional. Specify the relative priority for this job. In any given queue, the service begins processing the job with the highest value first. When more than one job has the same priority, the service begins processing the job that you submitted first. If you don't specify a priority, the service uses the default value 0.
		 * Minimum: -50
		 * Maximum: 50
		 */
		priority?: number;

		/**Optional. When you create a job, you can specify a queue to send it to. If you don't specify, the job will go to the default queue. For more about queues, see the User Guide topic at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html. */
		queue?: string;

		/**Required. The IAM role you use for creating this job. For details about permissions, see the User Guide topic at the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/iam-role.html. */
		role: string;

		/**JobSettings contains all the transcode settings for a job. */
		settings: string;

		/**Enable this setting when you run a test job to estimate how many reserved transcoding slots (RTS) you need. When this is enabled, MediaConvert runs your job from an on-demand queue with similar performance to what you will see with one RTS in a reserved queue. This setting is disabled by default. */
		simulateReservedQueue?: CreateJobBodySimulateReservedQueue;

		/**Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error. */
		statusUpdateInterval?: CreateJobBodyStatusUpdateInterval;

		/**Optional. The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key. */
		tags?: string;

		/**Optional. User-defined metadata that you want to associate with an MediaConvert job. You specify metadata in key/value pairs. */
		userMetadata?: string;
	}

	export enum CreateJobBodyBillingTagsSource { QUEUE = 0, PRESET = 1, JOB_TEMPLATE = 2, JOB = 3 }

	export enum CreateJobBodySimulateReservedQueue { DISABLED = 0, ENABLED = 1 }

	export enum CreateJobBodyStatusUpdateInterval { SECONDS_10 = 0, SECONDS_12 = 1, SECONDS_15 = 2, SECONDS_20 = 3, SECONDS_30 = 4, SECONDS_60 = 5, SECONDS_120 = 6, SECONDS_180 = 7, SECONDS_240 = 8, SECONDS_300 = 9, SECONDS_360 = 10, SECONDS_420 = 11, SECONDS_480 = 12, SECONDS_540 = 13, SECONDS_600 = 14 }

	export interface CreateJobTemplateBody {

		/**Accelerated transcoding can significantly speed up jobs with long, visually complex content. */
		accelerationSettings?: string;

		/**Optional. A category for the job template you are creating */
		category?: string;

		/**Optional. A description of the job template you are creating. */
		description?: string;

		/**Optional. Use queue hopping to avoid overly long waits in the backlog of the queue that you submit your job to. Specify an alternate queue and the maximum time that your job will wait in the initial queue before hopping. For more information about this feature, see the AWS Elemental MediaConvert User Guide. */
		hopDestinations?: Array<HopDestination>;

		/**The name of the job template you are creating. */
		name: string;

		/**
		 * Specify the relative priority for this job. In any given queue, the service begins processing the job with the highest value first. When more than one job has the same priority, the service begins processing the job that you submitted first. If you don't specify a priority, the service uses the default value 0.
		 * Minimum: -50
		 * Maximum: 50
		 */
		priority?: number;

		/**Optional. The queue that jobs created from this template are assigned to. If you don't specify this, jobs will go to the default queue. */
		queue?: string;

		/**JobTemplateSettings contains all the transcode settings saved in the template that will be applied to jobs created from it. */
		settings: string;

		/**Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error. */
		statusUpdateInterval?: CreateJobTemplateBodyStatusUpdateInterval;

		/**The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key. */
		tags?: string;
	}

	export enum CreateJobTemplateBodyStatusUpdateInterval { SECONDS_10 = 0, SECONDS_12 = 1, SECONDS_15 = 2, SECONDS_20 = 3, SECONDS_30 = 4, SECONDS_60 = 5, SECONDS_120 = 6, SECONDS_180 = 7, SECONDS_240 = 8, SECONDS_300 = 9, SECONDS_360 = 10, SECONDS_420 = 11, SECONDS_480 = 12, SECONDS_540 = 13, SECONDS_600 = 14 }

	export interface CreatePresetBody {

		/**Optional. A category for the preset you are creating. */
		category?: string;

		/**Optional. A description of the preset you are creating. */
		description?: string;

		/**The name of the preset you are creating. */
		name: string;

		/**Settings for preset */
		settings: string;

		/**The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key. */
		tags?: string;
	}

	export interface CreateQueueBody {

		/**Optional. A description of the queue that you are creating. */
		description?: string;

		/**The name of the queue that you are creating. */
		name: string;

		/**Specifies whether the pricing plan for the queue is on-demand or reserved. For on-demand, you pay per minute, billed in increments of .01 minute. For reserved, you pay for the transcoding capacity of the entire queue, regardless of how much or how little you use it. Reserved pricing requires a 12-month commitment. */
		pricingPlan?: CreateQueueBodyPricingPlan;

		/**Details about the pricing plan for your reserved queue. Required for reserved queues and not applicable to on-demand queues. */
		reservationPlanSettings?: string;

		/**Queues can be ACTIVE or PAUSED. If you pause a queue, jobs in that queue won't begin. Jobs that are running when you pause a queue continue to run until they finish or result in an error. */
		status?: CreateQueueBodyStatus;

		/**The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key. */
		tags?: string;
	}

	export enum CreateQueueBodyPricingPlan { ON_DEMAND = 0, RESERVED = 1 }

	export enum CreateQueueBodyStatus { ACTIVE = 0, PAUSED = 1 }

	export interface UpdateJobTemplateBody {

		/**Accelerated transcoding can significantly speed up jobs with long, visually complex content. */
		accelerationSettings?: string;

		/**The new category for the job template, if you are changing it. */
		category?: string;

		/**The new description for the job template, if you are changing it. */
		description?: string;

		/**Optional list of hop destinations. */
		hopDestinations?: Array<HopDestination>;

		/**
		 * Specify the relative priority for this job. In any given queue, the service begins processing the job with the highest value first. When more than one job has the same priority, the service begins processing the job that you submitted first. If you don't specify a priority, the service uses the default value 0.
		 * Minimum: -50
		 * Maximum: 50
		 */
		priority?: number;

		/**The new queue for the job template, if you are changing it. */
		queue?: string;

		/**JobTemplateSettings contains all the transcode settings saved in the template that will be applied to jobs created from it. */
		settings?: string;

		/**Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error. */
		statusUpdateInterval?: UpdateJobTemplateBodyStatusUpdateInterval;
	}

	export enum UpdateJobTemplateBodyStatusUpdateInterval { SECONDS_10 = 0, SECONDS_12 = 1, SECONDS_15 = 2, SECONDS_20 = 3, SECONDS_30 = 4, SECONDS_60 = 5, SECONDS_120 = 6, SECONDS_180 = 7, SECONDS_240 = 8, SECONDS_300 = 9, SECONDS_360 = 10, SECONDS_420 = 11, SECONDS_480 = 12, SECONDS_540 = 13, SECONDS_600 = 14 }

	export interface UpdatePresetBody {

		/**The new category for the preset, if you are changing it. */
		category?: string;

		/**The new description for the preset, if you are changing it. */
		description?: string;

		/**Settings for preset */
		settings?: string;
	}

	export interface UpdateQueueBody {

		/**The new description for the queue, if you are changing it. */
		description?: string;

		/**Details about the pricing plan for your reserved queue. Required for reserved queues and not applicable to on-demand queues. */
		reservationPlanSettings?: string;

		/**Queues can be ACTIVE or PAUSED. If you pause a queue, jobs in that queue won't begin. Jobs that are running when you pause a queue continue to run until they finish or result in an error. */
		status?: UpdateQueueBodyStatus;
	}

	export enum UpdateQueueBodyStatus { ACTIVE = 0, PAUSED = 1 }

	export interface DescribeEndpointsBody {

		/**Optional. Max number of endpoints, up to twenty, that will be returned at one time. */
		maxResults?: number;

		/**Optional field, defaults to DEFAULT. Specify DEFAULT for this operation to return your endpoints if any exist, or to create an endpoint for you and return it if one doesn't already exist. Specify GET_ONLY to return your endpoints if any exist, or an empty list if none exist. */
		mode?: DescribeEndpointsBodyMode;

		/**Use this string, provided with the response to a previous request, to request the next batch of endpoints. */
		nextToken?: string;
	}

	export enum DescribeEndpointsBodyMode { DEFAULT = 0, GET_ONLY = 1 }

	export interface UntagResourceBody {

		/**The keys of the tags that you want to remove from the resource. */
		tagKeys?: Array<__string>;
	}

	export interface TagResourceBody {

		/**The Amazon Resource Name (ARN) of the resource that you want to tag. To get the ARN, send a GET request with the resource name. */
		arn: string;

		/**The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key. */
		tags: string;
	}

}

