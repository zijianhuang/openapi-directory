import Axios from 'axios';
import { AxiosResponse } from 'axios';
export namespace My_Demo_Client {

	/**Placeholder documentation for BatchUpdateScheduleResponse */
	export interface BatchUpdateScheduleResponse {

		/**List of actions that have been created in the schedule. */
		Creates?: BatchScheduleActionCreateResult;

		/**List of actions that have been deleted from the schedule. */
		Deletes?: BatchScheduleActionDeleteResult;
	}


	/**Placeholder documentation for CreateChannelResponse */
	export interface CreateChannelResponse {

		/**Placeholder documentation for Channel */
		Channel?: Channel;
	}


	/**Placeholder documentation for OutputDestination */
	export interface OutputDestination {

		/**Placeholder documentation for __string */
		Id?: string;

		/**Placeholder documentation for __listOfMediaPackageOutputDestinationSettings */
		MediaPackageSettings?: Array<MediaPackageOutputDestinationSettings>;

		/**Multiplex Program Input Destination Settings for outputting a Channel to a Multiplex */
		MultiplexSettings?: MultiplexProgramChannelDestinationSettings;

		/**Placeholder documentation for __listOfOutputDestinationSettings */
		Settings?: Array<OutputDestinationSettings>;
	}


	/**Avail Blanking */
	export interface AvailBlanking {

		/**Input Location */
		AvailBlankingImage?: InputLocation;

		/**Avail Blanking State */
		State?: AvailBlankingState;
	}

	export enum AvailBlankingState { DISABLED = 0, ENABLED = 1 }


	/**Avail Configuration */
	export interface AvailConfiguration {

		/**Avail Settings */
		AvailSettings?: AvailSettings;
	}


	/**Blackout Slate */
	export interface BlackoutSlate {

		/**Input Location */
		BlackoutSlateImage?: InputLocation;

		/**Blackout Slate Network End Blackout */
		NetworkEndBlackout?: BlackoutSlateNetworkEndBlackout;

		/**Input Location */
		NetworkEndBlackoutImage?: InputLocation;

		/**
		 * Placeholder documentation for __stringMin34Max34
		 * Max length: 34
		 * Min length: 34
		 */
		NetworkId?: string;

		/**Blackout Slate State */
		State?: BlackoutSlateState;
	}

	export enum BlackoutSlateNetworkEndBlackout { DISABLED = 0, ENABLED = 1 }

	export enum BlackoutSlateState { DISABLED = 0, ENABLED = 1 }


	/**Global Configuration */
	export interface GlobalConfiguration {

		/**
		 * Placeholder documentation for __integerMinNegative60Max60
		 * Minimum: -60
		 * Maximum: 60
		 */
		InitialAudioGain?: number;

		/**Global Configuration Input End Action */
		InputEndAction?: GlobalConfigurationInputEndAction;

		/**Input Loss Behavior */
		InputLossBehavior?: InputLossBehavior;

		/**Global Configuration Output Locking Mode */
		OutputLockingMode?: GlobalConfigurationOutputLockingMode;

		/**Global Configuration Output Timing Source */
		OutputTimingSource?: GlobalConfigurationOutputTimingSource;

		/**Global Configuration Low Framerate Inputs */
		SupportLowFramerateInputs?: GlobalConfigurationSupportLowFramerateInputs;
	}

	export enum GlobalConfigurationInputEndAction { NONE = 0, SWITCH_AND_LOOP_INPUTS = 1 }

	export enum GlobalConfigurationOutputLockingMode { EPOCH_LOCKING = 0, PIPELINE_LOCKING = 1 }

	export enum GlobalConfigurationOutputTimingSource { INPUT_CLOCK = 0, SYSTEM_CLOCK = 1 }

	export enum GlobalConfigurationSupportLowFramerateInputs { DISABLED = 0, ENABLED = 1 }


	/**Nielsen Configuration */
	export interface NielsenConfiguration {

		/**Placeholder documentation for __string */
		DistributorId?: string;

		/**State of Nielsen PCM to ID3 tagging */
		NielsenPcmToId3Tagging?: NielsenConfigurationNielsenPcmToId3Tagging;
	}

	export enum NielsenConfigurationNielsenPcmToId3Tagging { DISABLED = 0, ENABLED = 1 }


	/**Timecode Config */
	export interface TimecodeConfig {

		/**Timecode Config Source */
		Source: TimecodeConfigSource;

		/**
		 * Placeholder documentation for __integerMin1Max1000000
		 * Minimum: 1
		 * Maximum: 1000000
		 */
		SyncThreshold?: number;
	}

	export enum TimecodeConfigSource { EMBEDDED = 0, SYSTEMCLOCK = 1, ZEROBASED = 2 }


	/**Placeholder documentation for InputAttachment */
	export interface InputAttachment {

		/**The settings for Automatic Input Failover. */
		AutomaticInputFailoverSettings?: AutomaticInputFailoverSettings;

		/**Placeholder documentation for __string */
		InputAttachmentName?: string;

		/**Placeholder documentation for __string */
		InputId?: string;

		/**Live Event input parameters. There can be multiple inputs in a single Live Event. */
		InputSettings?: InputSettings;
	}


	/**codec in increasing order of complexity */
	export enum InputCodec { MPEG2 = 0, AVC = 1, HEVC = 2 }


	/**Maximum input bitrate in megabits per second. Bitrates up to 50 Mbps are supported currently. */
	export enum InputMaximumBitrate { MAX_10_MBPS = 0, MAX_20_MBPS = 1, MAX_50_MBPS = 2 }


	/**
	 * Input resolution based on lines of vertical resolution in the input; SD is less than 720 lines, HD is 720 to 1080 lines, UHD is greater than 1080 lines
	 */
	export enum InputResolution { SD = 0, HD = 1, UHD = 2 }


	/**Placeholder documentation for CreateInputResponse */
	export interface CreateInputResponse {

		/**Placeholder documentation for Input */
		Input?: Input;
	}


	/**Endpoint settings for a PUSH type input. */
	export interface InputDestinationRequest {

		/**Placeholder documentation for __string */
		StreamName?: string;
	}


	/**Settings for an input device. */
	export interface InputDeviceSettings {

		/**Placeholder documentation for __string */
		Id?: string;
	}


	/**The settings for a MediaConnect Flow. */
	export interface MediaConnectFlowRequest {

		/**Placeholder documentation for __string */
		FlowArn?: string;
	}


	/**Settings for for a PULL type input. */
	export interface InputSourceRequest {

		/**Placeholder documentation for __string */
		PasswordParam?: string;

		/**Placeholder documentation for __string */
		Url?: string;

		/**Placeholder documentation for __string */
		Username?: string;
	}


	/**Placeholder documentation for CreateInputSecurityGroupResponse */
	export interface CreateInputSecurityGroupResponse {

		/**An Input Security Group */
		SecurityGroup?: InputSecurityGroup;
	}


	/**An IPv4 CIDR to whitelist. */
	export interface InputWhitelistRuleCidr {

		/**Placeholder documentation for __string */
		Cidr?: string;
	}


	/**Placeholder documentation for CreateMultiplexResponse */
	export interface CreateMultiplexResponse {

		/**The multiplex object. */
		Multiplex?: Multiplex;
	}


	/**Placeholder documentation for CreateMultiplexProgramResponse */
	export interface CreateMultiplexProgramResponse {

		/**The multiplex program object. */
		MultiplexProgram?: MultiplexProgram;
	}


	/**
	 * Indicates which pipeline is preferred by the multiplex for program ingest.
	 * If set to \"PIPELINE_0\" or \"PIPELINE_1\" and an unhealthy ingest causes the multiplex to switch to the non-preferred pipeline,
	 * it will switch back once that ingest is healthy again. If set to \"CURRENTLY_ACTIVE\",
	 * it will not switch back to the other pipeline based on it recovering to a healthy state,
	 * it will only switch if the active pipeline becomes unhealthy.
	 */
	export enum PreferredChannelPipeline { CURRENTLY_ACTIVE = 0, PIPELINE_0 = 1, PIPELINE_1 = 2 }


	/**Transport stream service descriptor configuration for the Multiplex program. */
	export interface MultiplexProgramServiceDescriptor {

		/**
		 * Placeholder documentation for __stringMax256
		 * Max length: 256
		 */
		ProviderName: string;

		/**
		 * Placeholder documentation for __stringMax256
		 * Max length: 256
		 */
		ServiceName: string;
	}


	/**The video configuration for each program in a multiplex. */
	export interface MultiplexVideoSettings {

		/**
		 * Placeholder documentation for __integerMin100000Max100000000
		 * Minimum: 100000
		 * Maximum: 100000000
		 */
		ConstantBitrate?: number;

		/**Statmux rate control settings */
		StatmuxSettings?: MultiplexStatmuxVideoSettings;
	}


	/**Placeholder documentation for DeleteChannelResponse */
	export interface DeleteChannelResponse {

		/**Placeholder documentation for __string */
		Arn?: string;

		/**A standard channel has two encoding pipelines and a single pipeline channel only has one. */
		ChannelClass?: DeleteChannelResponseChannelClass;

		/**Placeholder documentation for __listOfOutputDestination */
		Destinations?: Array<OutputDestination>;

		/**Placeholder documentation for __listOfChannelEgressEndpoint */
		EgressEndpoints?: Array<ChannelEgressEndpoint>;

		/**Encoder Settings */
		EncoderSettings?: EncoderSettings;

		/**Placeholder documentation for __string */
		Id?: string;

		/**Placeholder documentation for __listOfInputAttachment */
		InputAttachments?: Array<InputAttachment>;

		/**Placeholder documentation for InputSpecification */
		InputSpecification?: InputSpecification;

		/**The log level the user wants for their channel. */
		LogLevel?: DeleteChannelResponseLogLevel;

		/**Placeholder documentation for __string */
		Name?: string;

		/**Placeholder documentation for __listOfPipelineDetail */
		PipelineDetails?: Array<PipelineDetail>;

		/**Placeholder documentation for __integer */
		PipelinesRunningCount?: number;

		/**Placeholder documentation for __string */
		RoleArn?: string;

		/**Placeholder documentation for ChannelState */
		State?: DeleteChannelResponseState;

		/**Placeholder documentation for Tags */
		Tags?: Tags;
	}

	export enum DeleteChannelResponseChannelClass { STANDARD = 0, SINGLE_PIPELINE = 1 }

	export enum DeleteChannelResponseLogLevel { ERROR = 0, WARNING = 1, INFO = 2, DEBUG = 3, DISABLED = 4 }

	export enum DeleteChannelResponseState { CREATING = 0, CREATE_FAILED = 1, IDLE = 2, STARTING = 3, RUNNING = 4, RECOVERING = 5, STOPPING = 6, DELETING = 7, DELETED = 8, UPDATING = 9, UPDATE_FAILED = 10 }


	/**Placeholder documentation for DeleteMultiplexResponse */
	export interface DeleteMultiplexResponse {

		/**Placeholder documentation for __string */
		Arn?: string;

		/**Placeholder documentation for __listOf__string */
		AvailabilityZones?: Array<__string>;

		/**Placeholder documentation for __listOfMultiplexOutputDestination */
		Destinations?: Array<MultiplexOutputDestination>;

		/**Placeholder documentation for __string */
		Id?: string;

		/**Contains configuration for a Multiplex event */
		MultiplexSettings?: MultiplexSettings;

		/**Placeholder documentation for __string */
		Name?: string;

		/**Placeholder documentation for __integer */
		PipelinesRunningCount?: number;

		/**Placeholder documentation for __integer */
		ProgramCount?: number;

		/**The current state of the multiplex. */
		State?: DeleteMultiplexResponseState;

		/**Placeholder documentation for Tags */
		Tags?: Tags;
	}

	export enum DeleteMultiplexResponseState { CREATING = 0, CREATE_FAILED = 1, IDLE = 2, STARTING = 3, RUNNING = 4, RECOVERING = 5, STOPPING = 6, DELETING = 7, DELETED = 8 }


	/**Placeholder documentation for DeleteMultiplexProgramResponse */
	export interface DeleteMultiplexProgramResponse {

		/**Placeholder documentation for __string */
		ChannelId?: string;

		/**Multiplex Program settings configuration. */
		MultiplexProgramSettings?: MultiplexProgramSettings;

		/**Packet identifiers map for a given Multiplex program. */
		PacketIdentifiersMap?: MultiplexProgramPacketIdentifiersMap;

		/**Placeholder documentation for __string */
		ProgramName?: string;
	}


	/**Placeholder documentation for DeleteReservationResponse */
	export interface DeleteReservationResponse {

		/**Placeholder documentation for __string */
		Arn?: string;

		/**Placeholder documentation for __integer */
		Count?: number;

		/**Placeholder documentation for __string */
		CurrencyCode?: string;

		/**Placeholder documentation for __integer */
		Duration?: number;

		/**Units for duration, e.g. 'MONTHS' */
		DurationUnits?: DeleteReservationResponseDurationUnits;

		/**Placeholder documentation for __string */
		End?: string;

		/**Placeholder documentation for __double */
		FixedPrice?: number;

		/**Placeholder documentation for __string */
		Name?: string;

		/**Placeholder documentation for __string */
		OfferingDescription?: string;

		/**Placeholder documentation for __string */
		OfferingId?: string;

		/**Offering type, e.g. 'NO_UPFRONT' */
		OfferingType?: DeleteReservationResponseOfferingType;

		/**Placeholder documentation for __string */
		Region?: string;

		/**Placeholder documentation for __string */
		ReservationId?: string;

		/**Resource configuration (codec, resolution, bitrate, ...) */
		ResourceSpecification?: ReservationResourceSpecification;

		/**Placeholder documentation for __string */
		Start?: string;

		/**Current reservation state */
		State?: DeleteReservationResponseState;

		/**Placeholder documentation for Tags */
		Tags?: Tags;

		/**Placeholder documentation for __double */
		UsagePrice?: number;
	}

	export enum DeleteReservationResponseDurationUnits { MONTHS = 0 }

	export enum DeleteReservationResponseOfferingType { NO_UPFRONT = 0 }

	export enum DeleteReservationResponseState { ACTIVE = 0, EXPIRED = 1, CANCELED = 2, DELETED = 3 }


	/**Placeholder documentation for DescribeChannelResponse */
	export interface DescribeChannelResponse {

		/**Placeholder documentation for __string */
		Arn?: string;

		/**A standard channel has two encoding pipelines and a single pipeline channel only has one. */
		ChannelClass?: DescribeChannelResponseChannelClass;

		/**Placeholder documentation for __listOfOutputDestination */
		Destinations?: Array<OutputDestination>;

		/**Placeholder documentation for __listOfChannelEgressEndpoint */
		EgressEndpoints?: Array<ChannelEgressEndpoint>;

		/**Encoder Settings */
		EncoderSettings?: EncoderSettings;

		/**Placeholder documentation for __string */
		Id?: string;

		/**Placeholder documentation for __listOfInputAttachment */
		InputAttachments?: Array<InputAttachment>;

		/**Placeholder documentation for InputSpecification */
		InputSpecification?: InputSpecification;

		/**The log level the user wants for their channel. */
		LogLevel?: DescribeChannelResponseLogLevel;

		/**Placeholder documentation for __string */
		Name?: string;

		/**Placeholder documentation for __listOfPipelineDetail */
		PipelineDetails?: Array<PipelineDetail>;

		/**Placeholder documentation for __integer */
		PipelinesRunningCount?: number;

		/**Placeholder documentation for __string */
		RoleArn?: string;

		/**Placeholder documentation for ChannelState */
		State?: DescribeChannelResponseState;

		/**Placeholder documentation for Tags */
		Tags?: Tags;
	}

	export enum DescribeChannelResponseChannelClass { STANDARD = 0, SINGLE_PIPELINE = 1 }

	export enum DescribeChannelResponseLogLevel { ERROR = 0, WARNING = 1, INFO = 2, DEBUG = 3, DISABLED = 4 }

	export enum DescribeChannelResponseState { CREATING = 0, CREATE_FAILED = 1, IDLE = 2, STARTING = 3, RUNNING = 4, RECOVERING = 5, STOPPING = 6, DELETING = 7, DELETED = 8, UPDATING = 9, UPDATE_FAILED = 10 }


	/**Placeholder documentation for DescribeInputResponse */
	export interface DescribeInputResponse {

		/**Placeholder documentation for __string */
		Arn?: string;

		/**Placeholder documentation for __listOf__string */
		AttachedChannels?: Array<__string>;

		/**Placeholder documentation for __listOfInputDestination */
		Destinations?: Array<InputDestination>;

		/**Placeholder documentation for __string */
		Id?: string;

		/**A standard input has two sources and a single pipeline input only has one. */
		InputClass?: DescribeInputResponseInputClass;

		/**Placeholder documentation for __listOfInputDeviceSettings */
		InputDevices?: Array<InputDeviceSettings>;

		/**
		 * There are two types of input sources, static and dynamic. If an input source is dynamic you can
		 * change the source url of the input dynamically using an input switch action. However, the only input type
		 * to support a dynamic url at this time is MP4_FILE. By default all input sources are static.
		 */
		InputSourceType?: DescribeInputResponseInputSourceType;

		/**Placeholder documentation for __listOfMediaConnectFlow */
		MediaConnectFlows?: Array<MediaConnectFlow>;

		/**Placeholder documentation for __string */
		Name?: string;

		/**Placeholder documentation for __string */
		RoleArn?: string;

		/**Placeholder documentation for __listOf__string */
		SecurityGroups?: Array<__string>;

		/**Placeholder documentation for __listOfInputSource */
		Sources?: Array<InputSource>;

		/**Placeholder documentation for InputState */
		State?: DescribeInputResponseState;

		/**Placeholder documentation for Tags */
		Tags?: Tags;

		/**Placeholder documentation for InputType */
		Type?: DescribeInputResponseType;
	}

	export enum DescribeInputResponseInputClass { STANDARD = 0, SINGLE_PIPELINE = 1 }

	export enum DescribeInputResponseInputSourceType { STATIC = 0, DYNAMIC = 1 }

	export enum DescribeInputResponseState { CREATING = 0, DETACHED = 1, ATTACHED = 2, DELETING = 3, DELETED = 4 }

	export enum DescribeInputResponseType { UDP_PUSH = 0, RTP_PUSH = 1, RTMP_PUSH = 2, RTMP_PULL = 3, URL_PULL = 4, MP4_FILE = 5, MEDIACONNECT = 6, INPUT_DEVICE = 7 }


	/**Placeholder documentation for DescribeInputDeviceResponse */
	export interface DescribeInputDeviceResponse {

		/**Placeholder documentation for __string */
		Arn?: string;

		/**The state of the connection between the input device and AWS. */
		ConnectionState?: DescribeInputDeviceResponseConnectionState;

		/**The status of the action to synchronize the device configuration. If you change the configuration of the input device (for example, the maximum bitrate), MediaLive sends the new data to the device. The device might not update itself immediately. SYNCED means the device has updated its configuration. SYNCING means that it has not updated its configuration. */
		DeviceSettingsSyncState?: DescribeInputDeviceResponseDeviceSettingsSyncState;

		/**Settings that describe the active source from the input device, and the video characteristics of that source. */
		HdDeviceSettings?: InputDeviceHdSettings;

		/**Placeholder documentation for __string */
		Id?: string;

		/**Placeholder documentation for __string */
		MacAddress?: string;

		/**Placeholder documentation for __string */
		Name?: string;

		/**The network settings for the input device. */
		NetworkSettings?: InputDeviceNetworkSettings;

		/**Placeholder documentation for __string */
		SerialNumber?: string;

		/**The type of the input device. For an AWS Elemental Link device that outputs resolutions up to 1080, choose "HD". */
		Type?: DescribeInputDeviceResponseType;
	}

	export enum DescribeInputDeviceResponseConnectionState { DISCONNECTED = 0, CONNECTED = 1 }

	export enum DescribeInputDeviceResponseDeviceSettingsSyncState { SYNCED = 0, SYNCING = 1 }

	export enum DescribeInputDeviceResponseType { HD = 0 }


	/**Placeholder documentation for DescribeInputSecurityGroupResponse */
	export interface DescribeInputSecurityGroupResponse {

		/**Placeholder documentation for __string */
		Arn?: string;

		/**Placeholder documentation for __string */
		Id?: string;

		/**Placeholder documentation for __listOf__string */
		Inputs?: Array<__string>;

		/**Placeholder documentation for InputSecurityGroupState */
		State?: DescribeInputSecurityGroupResponseState;

		/**Placeholder documentation for Tags */
		Tags?: Tags;

		/**Placeholder documentation for __listOfInputWhitelistRule */
		WhitelistRules?: Array<InputWhitelistRule>;
	}

	export enum DescribeInputSecurityGroupResponseState { IDLE = 0, IN_USE = 1, UPDATING = 2, DELETED = 3 }


	/**Placeholder documentation for DescribeMultiplexResponse */
	export interface DescribeMultiplexResponse {

		/**Placeholder documentation for __string */
		Arn?: string;

		/**Placeholder documentation for __listOf__string */
		AvailabilityZones?: Array<__string>;

		/**Placeholder documentation for __listOfMultiplexOutputDestination */
		Destinations?: Array<MultiplexOutputDestination>;

		/**Placeholder documentation for __string */
		Id?: string;

		/**Contains configuration for a Multiplex event */
		MultiplexSettings?: MultiplexSettings;

		/**Placeholder documentation for __string */
		Name?: string;

		/**Placeholder documentation for __integer */
		PipelinesRunningCount?: number;

		/**Placeholder documentation for __integer */
		ProgramCount?: number;

		/**The current state of the multiplex. */
		State?: DescribeMultiplexResponseState;

		/**Placeholder documentation for Tags */
		Tags?: Tags;
	}

	export enum DescribeMultiplexResponseState { CREATING = 0, CREATE_FAILED = 1, IDLE = 2, STARTING = 3, RUNNING = 4, RECOVERING = 5, STOPPING = 6, DELETING = 7, DELETED = 8 }


	/**Placeholder documentation for DescribeMultiplexProgramResponse */
	export interface DescribeMultiplexProgramResponse {

		/**Placeholder documentation for __string */
		ChannelId?: string;

		/**Multiplex Program settings configuration. */
		MultiplexProgramSettings?: MultiplexProgramSettings;

		/**Packet identifiers map for a given Multiplex program. */
		PacketIdentifiersMap?: MultiplexProgramPacketIdentifiersMap;

		/**Placeholder documentation for __string */
		ProgramName?: string;
	}


	/**Placeholder documentation for DescribeOfferingResponse */
	export interface DescribeOfferingResponse {

		/**Placeholder documentation for __string */
		Arn?: string;

		/**Placeholder documentation for __string */
		CurrencyCode?: string;

		/**Placeholder documentation for __integer */
		Duration?: number;

		/**Units for duration, e.g. 'MONTHS' */
		DurationUnits?: DescribeOfferingResponseDurationUnits;

		/**Placeholder documentation for __double */
		FixedPrice?: number;

		/**Placeholder documentation for __string */
		OfferingDescription?: string;

		/**Placeholder documentation for __string */
		OfferingId?: string;

		/**Offering type, e.g. 'NO_UPFRONT' */
		OfferingType?: DescribeOfferingResponseOfferingType;

		/**Placeholder documentation for __string */
		Region?: string;

		/**Resource configuration (codec, resolution, bitrate, ...) */
		ResourceSpecification?: ReservationResourceSpecification;

		/**Placeholder documentation for __double */
		UsagePrice?: number;
	}

	export enum DescribeOfferingResponseDurationUnits { MONTHS = 0 }

	export enum DescribeOfferingResponseOfferingType { NO_UPFRONT = 0 }


	/**Placeholder documentation for DescribeReservationResponse */
	export interface DescribeReservationResponse {

		/**Placeholder documentation for __string */
		Arn?: string;

		/**Placeholder documentation for __integer */
		Count?: number;

		/**Placeholder documentation for __string */
		CurrencyCode?: string;

		/**Placeholder documentation for __integer */
		Duration?: number;

		/**Units for duration, e.g. 'MONTHS' */
		DurationUnits?: DescribeReservationResponseDurationUnits;

		/**Placeholder documentation for __string */
		End?: string;

		/**Placeholder documentation for __double */
		FixedPrice?: number;

		/**Placeholder documentation for __string */
		Name?: string;

		/**Placeholder documentation for __string */
		OfferingDescription?: string;

		/**Placeholder documentation for __string */
		OfferingId?: string;

		/**Offering type, e.g. 'NO_UPFRONT' */
		OfferingType?: DescribeReservationResponseOfferingType;

		/**Placeholder documentation for __string */
		Region?: string;

		/**Placeholder documentation for __string */
		ReservationId?: string;

		/**Resource configuration (codec, resolution, bitrate, ...) */
		ResourceSpecification?: ReservationResourceSpecification;

		/**Placeholder documentation for __string */
		Start?: string;

		/**Current reservation state */
		State?: DescribeReservationResponseState;

		/**Placeholder documentation for Tags */
		Tags?: Tags;

		/**Placeholder documentation for __double */
		UsagePrice?: number;
	}

	export enum DescribeReservationResponseDurationUnits { MONTHS = 0 }

	export enum DescribeReservationResponseOfferingType { NO_UPFRONT = 0 }

	export enum DescribeReservationResponseState { ACTIVE = 0, EXPIRED = 1, CANCELED = 2, DELETED = 3 }


	/**Placeholder documentation for DescribeScheduleResponse */
	export interface DescribeScheduleResponse {

		/**Placeholder documentation for __string */
		NextToken?: string;

		/**Placeholder documentation for __listOfScheduleAction */
		ScheduleActions?: Array<ScheduleAction>;
	}


	/**Placeholder documentation for ListChannelsResponse */
	export interface ListChannelsResponse {

		/**Placeholder documentation for __listOfChannelSummary */
		Channels?: Array<ChannelSummary>;

		/**Placeholder documentation for __string */
		NextToken?: string;
	}


	/**Placeholder documentation for ListInputDevicesResponse */
	export interface ListInputDevicesResponse {

		/**Placeholder documentation for __listOfInputDeviceSummary */
		InputDevices?: Array<InputDeviceSummary>;

		/**Placeholder documentation for __string */
		NextToken?: string;
	}


	/**Placeholder documentation for ListInputSecurityGroupsResponse */
	export interface ListInputSecurityGroupsResponse {

		/**Placeholder documentation for __listOfInputSecurityGroup */
		InputSecurityGroups?: Array<InputSecurityGroup>;

		/**Placeholder documentation for __string */
		NextToken?: string;
	}


	/**Placeholder documentation for ListInputsResponse */
	export interface ListInputsResponse {

		/**Placeholder documentation for __listOfInput */
		Inputs?: Array<Input>;

		/**Placeholder documentation for __string */
		NextToken?: string;
	}


	/**Placeholder documentation for ListMultiplexProgramsResponse */
	export interface ListMultiplexProgramsResponse {

		/**Placeholder documentation for __listOfMultiplexProgramSummary */
		MultiplexPrograms?: Array<MultiplexProgramSummary>;

		/**Placeholder documentation for __string */
		NextToken?: string;
	}


	/**Placeholder documentation for ListMultiplexesResponse */
	export interface ListMultiplexesResponse {

		/**Placeholder documentation for __listOfMultiplexSummary */
		Multiplexes?: Array<MultiplexSummary>;

		/**Placeholder documentation for __string */
		NextToken?: string;
	}


	/**Placeholder documentation for ListOfferingsResponse */
	export interface ListOfferingsResponse {

		/**Placeholder documentation for __string */
		NextToken?: string;

		/**Placeholder documentation for __listOfOffering */
		Offerings?: Array<Offering>;
	}


	/**Placeholder documentation for ListReservationsResponse */
	export interface ListReservationsResponse {

		/**Placeholder documentation for __string */
		NextToken?: string;

		/**Placeholder documentation for __listOfReservation */
		Reservations?: Array<Reservation>;
	}


	/**Placeholder documentation for ListTagsForResourceResponse */
	export interface ListTagsForResourceResponse {

		/**Placeholder documentation for Tags */
		Tags?: Tags;
	}


	/**Placeholder documentation for PurchaseOfferingResponse */
	export interface PurchaseOfferingResponse {

		/**Reserved resources available to use */
		Reservation?: Reservation;
	}


	/**Placeholder documentation for StartChannelResponse */
	export interface StartChannelResponse {

		/**Placeholder documentation for __string */
		Arn?: string;

		/**A standard channel has two encoding pipelines and a single pipeline channel only has one. */
		ChannelClass?: StartChannelResponseChannelClass;

		/**Placeholder documentation for __listOfOutputDestination */
		Destinations?: Array<OutputDestination>;

		/**Placeholder documentation for __listOfChannelEgressEndpoint */
		EgressEndpoints?: Array<ChannelEgressEndpoint>;

		/**Encoder Settings */
		EncoderSettings?: EncoderSettings;

		/**Placeholder documentation for __string */
		Id?: string;

		/**Placeholder documentation for __listOfInputAttachment */
		InputAttachments?: Array<InputAttachment>;

		/**Placeholder documentation for InputSpecification */
		InputSpecification?: InputSpecification;

		/**The log level the user wants for their channel. */
		LogLevel?: StartChannelResponseLogLevel;

		/**Placeholder documentation for __string */
		Name?: string;

		/**Placeholder documentation for __listOfPipelineDetail */
		PipelineDetails?: Array<PipelineDetail>;

		/**Placeholder documentation for __integer */
		PipelinesRunningCount?: number;

		/**Placeholder documentation for __string */
		RoleArn?: string;

		/**Placeholder documentation for ChannelState */
		State?: StartChannelResponseState;

		/**Placeholder documentation for Tags */
		Tags?: Tags;
	}

	export enum StartChannelResponseChannelClass { STANDARD = 0, SINGLE_PIPELINE = 1 }

	export enum StartChannelResponseLogLevel { ERROR = 0, WARNING = 1, INFO = 2, DEBUG = 3, DISABLED = 4 }

	export enum StartChannelResponseState { CREATING = 0, CREATE_FAILED = 1, IDLE = 2, STARTING = 3, RUNNING = 4, RECOVERING = 5, STOPPING = 6, DELETING = 7, DELETED = 8, UPDATING = 9, UPDATE_FAILED = 10 }


	/**Placeholder documentation for StartMultiplexResponse */
	export interface StartMultiplexResponse {

		/**Placeholder documentation for __string */
		Arn?: string;

		/**Placeholder documentation for __listOf__string */
		AvailabilityZones?: Array<__string>;

		/**Placeholder documentation for __listOfMultiplexOutputDestination */
		Destinations?: Array<MultiplexOutputDestination>;

		/**Placeholder documentation for __string */
		Id?: string;

		/**Contains configuration for a Multiplex event */
		MultiplexSettings?: MultiplexSettings;

		/**Placeholder documentation for __string */
		Name?: string;

		/**Placeholder documentation for __integer */
		PipelinesRunningCount?: number;

		/**Placeholder documentation for __integer */
		ProgramCount?: number;

		/**The current state of the multiplex. */
		State?: StartMultiplexResponseState;

		/**Placeholder documentation for Tags */
		Tags?: Tags;
	}

	export enum StartMultiplexResponseState { CREATING = 0, CREATE_FAILED = 1, IDLE = 2, STARTING = 3, RUNNING = 4, RECOVERING = 5, STOPPING = 6, DELETING = 7, DELETED = 8 }


	/**Placeholder documentation for StopChannelResponse */
	export interface StopChannelResponse {

		/**Placeholder documentation for __string */
		Arn?: string;

		/**A standard channel has two encoding pipelines and a single pipeline channel only has one. */
		ChannelClass?: StopChannelResponseChannelClass;

		/**Placeholder documentation for __listOfOutputDestination */
		Destinations?: Array<OutputDestination>;

		/**Placeholder documentation for __listOfChannelEgressEndpoint */
		EgressEndpoints?: Array<ChannelEgressEndpoint>;

		/**Encoder Settings */
		EncoderSettings?: EncoderSettings;

		/**Placeholder documentation for __string */
		Id?: string;

		/**Placeholder documentation for __listOfInputAttachment */
		InputAttachments?: Array<InputAttachment>;

		/**Placeholder documentation for InputSpecification */
		InputSpecification?: InputSpecification;

		/**The log level the user wants for their channel. */
		LogLevel?: StopChannelResponseLogLevel;

		/**Placeholder documentation for __string */
		Name?: string;

		/**Placeholder documentation for __listOfPipelineDetail */
		PipelineDetails?: Array<PipelineDetail>;

		/**Placeholder documentation for __integer */
		PipelinesRunningCount?: number;

		/**Placeholder documentation for __string */
		RoleArn?: string;

		/**Placeholder documentation for ChannelState */
		State?: StopChannelResponseState;

		/**Placeholder documentation for Tags */
		Tags?: Tags;
	}

	export enum StopChannelResponseChannelClass { STANDARD = 0, SINGLE_PIPELINE = 1 }

	export enum StopChannelResponseLogLevel { ERROR = 0, WARNING = 1, INFO = 2, DEBUG = 3, DISABLED = 4 }

	export enum StopChannelResponseState { CREATING = 0, CREATE_FAILED = 1, IDLE = 2, STARTING = 3, RUNNING = 4, RECOVERING = 5, STOPPING = 6, DELETING = 7, DELETED = 8, UPDATING = 9, UPDATE_FAILED = 10 }


	/**Placeholder documentation for StopMultiplexResponse */
	export interface StopMultiplexResponse {

		/**Placeholder documentation for __string */
		Arn?: string;

		/**Placeholder documentation for __listOf__string */
		AvailabilityZones?: Array<__string>;

		/**Placeholder documentation for __listOfMultiplexOutputDestination */
		Destinations?: Array<MultiplexOutputDestination>;

		/**Placeholder documentation for __string */
		Id?: string;

		/**Contains configuration for a Multiplex event */
		MultiplexSettings?: MultiplexSettings;

		/**Placeholder documentation for __string */
		Name?: string;

		/**Placeholder documentation for __integer */
		PipelinesRunningCount?: number;

		/**Placeholder documentation for __integer */
		ProgramCount?: number;

		/**The current state of the multiplex. */
		State?: StopMultiplexResponseState;

		/**Placeholder documentation for Tags */
		Tags?: Tags;
	}

	export enum StopMultiplexResponseState { CREATING = 0, CREATE_FAILED = 1, IDLE = 2, STARTING = 3, RUNNING = 4, RECOVERING = 5, STOPPING = 6, DELETING = 7, DELETED = 8 }


	/**Placeholder documentation for UpdateChannelResponse */
	export interface UpdateChannelResponse {

		/**Placeholder documentation for Channel */
		Channel?: Channel;
	}


	/**Placeholder documentation for UpdateChannelClassResponse */
	export interface UpdateChannelClassResponse {

		/**Placeholder documentation for Channel */
		Channel?: Channel;
	}


	/**Placeholder documentation for UpdateInputResponse */
	export interface UpdateInputResponse {

		/**Placeholder documentation for Input */
		Input?: Input;
	}


	/**Settings for an input device. */
	export interface InputDeviceRequest {

		/**Placeholder documentation for __string */
		Id?: string;
	}


	/**Placeholder documentation for UpdateInputDeviceResponse */
	export interface UpdateInputDeviceResponse {

		/**Placeholder documentation for __string */
		Arn?: string;

		/**The state of the connection between the input device and AWS. */
		ConnectionState?: UpdateInputDeviceResponseConnectionState;

		/**The status of the action to synchronize the device configuration. If you change the configuration of the input device (for example, the maximum bitrate), MediaLive sends the new data to the device. The device might not update itself immediately. SYNCED means the device has updated its configuration. SYNCING means that it has not updated its configuration. */
		DeviceSettingsSyncState?: UpdateInputDeviceResponseDeviceSettingsSyncState;

		/**Settings that describe the active source from the input device, and the video characteristics of that source. */
		HdDeviceSettings?: InputDeviceHdSettings;

		/**Placeholder documentation for __string */
		Id?: string;

		/**Placeholder documentation for __string */
		MacAddress?: string;

		/**Placeholder documentation for __string */
		Name?: string;

		/**The network settings for the input device. */
		NetworkSettings?: InputDeviceNetworkSettings;

		/**Placeholder documentation for __string */
		SerialNumber?: string;

		/**The type of the input device. For an AWS Elemental Link device that outputs resolutions up to 1080, choose "HD". */
		Type?: UpdateInputDeviceResponseType;
	}

	export enum UpdateInputDeviceResponseConnectionState { DISCONNECTED = 0, CONNECTED = 1 }

	export enum UpdateInputDeviceResponseDeviceSettingsSyncState { SYNCED = 0, SYNCING = 1 }

	export enum UpdateInputDeviceResponseType { HD = 0 }


	/**The source to activate (use) from the input device. */
	export enum InputDeviceConfiguredInput { AUTO = 0, HDMI = 1, SDI = 2 }


	/**Placeholder documentation for UpdateInputSecurityGroupResponse */
	export interface UpdateInputSecurityGroupResponse {

		/**An Input Security Group */
		SecurityGroup?: InputSecurityGroup;
	}


	/**Placeholder documentation for UpdateMultiplexResponse */
	export interface UpdateMultiplexResponse {

		/**The multiplex object. */
		Multiplex?: Multiplex;
	}


	/**Placeholder documentation for UpdateMultiplexProgramResponse */
	export interface UpdateMultiplexProgramResponse {

		/**The multiplex program object. */
		MultiplexProgram?: MultiplexProgram;
	}


	/**Placeholder documentation for UpdateReservationResponse */
	export interface UpdateReservationResponse {

		/**Reserved resources available to use */
		Reservation?: Reservation;
	}


	/**Aac Coding Mode */
	export enum AacCodingMode { AD_RECEIVER_MIX = 0, CODING_MODE_1_0 = 1, CODING_MODE_1_1 = 2, CODING_MODE_2_0 = 3, CODING_MODE_5_1 = 4 }


	/**Aac Input Type */
	export enum AacInputType { BROADCASTER_MIXED_AD = 0, NORMAL = 1 }


	/**Aac Profile */
	export enum AacProfile { HEV1 = 0, HEV2 = 1, LC = 2 }


	/**Aac Rate Control Mode */
	export enum AacRateControlMode { CBR = 0, VBR = 1 }


	/**Aac Raw Format */
	export enum AacRawFormat { LATM_LOAS = 0, NONE = 1 }


	/**Aac Spec */
	export enum AacSpec { MPEG2 = 0, MPEG4 = 1 }


	/**Aac Vbr Quality */
	export enum AacVbrQuality { HIGH = 0, LOW = 1, MEDIUM_HIGH = 2, MEDIUM_LOW = 3 }


	/**Aac Settings */
	export interface AacSettings {

		/**Placeholder documentation for __double */
		Bitrate?: number;

		/**Aac Coding Mode */
		CodingMode?: AacSettingsCodingMode;

		/**Aac Input Type */
		InputType?: AacSettingsInputType;

		/**Aac Profile */
		Profile?: AacSettingsProfile;

		/**Aac Rate Control Mode */
		RateControlMode?: AacSettingsRateControlMode;

		/**Aac Raw Format */
		RawFormat?: AacSettingsRawFormat;

		/**Placeholder documentation for __double */
		SampleRate?: number;

		/**Aac Spec */
		Spec?: AacSettingsSpec;

		/**Aac Vbr Quality */
		VbrQuality?: AacSettingsVbrQuality;
	}

	export enum AacSettingsCodingMode { AD_RECEIVER_MIX = 0, CODING_MODE_1_0 = 1, CODING_MODE_1_1 = 2, CODING_MODE_2_0 = 3, CODING_MODE_5_1 = 4 }

	export enum AacSettingsInputType { BROADCASTER_MIXED_AD = 0, NORMAL = 1 }

	export enum AacSettingsProfile { HEV1 = 0, HEV2 = 1, LC = 2 }

	export enum AacSettingsRateControlMode { CBR = 0, VBR = 1 }

	export enum AacSettingsRawFormat { LATM_LOAS = 0, NONE = 1 }

	export enum AacSettingsSpec { MPEG2 = 0, MPEG4 = 1 }

	export enum AacSettingsVbrQuality { HIGH = 0, LOW = 1, MEDIUM_HIGH = 2, MEDIUM_LOW = 3 }


	/**Ac3 Bitstream Mode */
	export enum Ac3BitstreamMode { COMMENTARY = 0, COMPLETE_MAIN = 1, DIALOGUE = 2, EMERGENCY = 3, HEARING_IMPAIRED = 4, MUSIC_AND_EFFECTS = 5, VISUALLY_IMPAIRED = 6, VOICE_OVER = 7 }


	/**Ac3 Coding Mode */
	export enum Ac3CodingMode { CODING_MODE_1_0 = 0, CODING_MODE_1_1 = 1, CODING_MODE_2_0 = 2, CODING_MODE_3_2_LFE = 3 }


	/**Ac3 Drc Profile */
	export enum Ac3DrcProfile { FILM_STANDARD = 0, NONE = 1 }


	/**Ac3 Lfe Filter */
	export enum Ac3LfeFilter { DISABLED = 0, ENABLED = 1 }


	/**Ac3 Metadata Control */
	export enum Ac3MetadataControl { FOLLOW_INPUT = 0, USE_CONFIGURED = 1 }


	/**Ac3 Settings */
	export interface Ac3Settings {

		/**Placeholder documentation for __double */
		Bitrate?: number;

		/**Ac3 Bitstream Mode */
		BitstreamMode?: Ac3SettingsBitstreamMode;

		/**Ac3 Coding Mode */
		CodingMode?: Ac3SettingsCodingMode;

		/**
		 * Placeholder documentation for __integerMin1Max31
		 * Minimum: 1
		 * Maximum: 31
		 */
		Dialnorm?: number;

		/**Ac3 Drc Profile */
		DrcProfile?: Ac3SettingsDrcProfile;

		/**Ac3 Lfe Filter */
		LfeFilter?: Ac3SettingsLfeFilter;

		/**Ac3 Metadata Control */
		MetadataControl?: Ac3SettingsMetadataControl;
	}

	export enum Ac3SettingsBitstreamMode { COMMENTARY = 0, COMPLETE_MAIN = 1, DIALOGUE = 2, EMERGENCY = 3, HEARING_IMPAIRED = 4, MUSIC_AND_EFFECTS = 5, VISUALLY_IMPAIRED = 6, VOICE_OVER = 7 }

	export enum Ac3SettingsCodingMode { CODING_MODE_1_0 = 0, CODING_MODE_1_1 = 1, CODING_MODE_2_0 = 2, CODING_MODE_3_2_LFE = 3 }

	export enum Ac3SettingsDrcProfile { FILM_STANDARD = 0, NONE = 1 }

	export enum Ac3SettingsLfeFilter { DISABLED = 0, ENABLED = 1 }

	export enum Ac3SettingsMetadataControl { FOLLOW_INPUT = 0, USE_CONFIGURED = 1 }


	/**Afd Signaling */
	export enum AfdSignaling { AUTO = 0, FIXED = 1, NONE = 2 }


	/**M2ts Settings */
	export interface M2tsSettings {

		/**M2ts Absent Input Audio Behavior */
		AbsentInputAudioBehavior?: M2tsSettingsAbsentInputAudioBehavior;

		/**M2ts Arib */
		Arib?: M2tsSettingsArib;

		/**Placeholder documentation for __string */
		AribCaptionsPid?: string;

		/**M2ts Arib Captions Pid Control */
		AribCaptionsPidControl?: M2tsSettingsAribCaptionsPidControl;

		/**M2ts Audio Buffer Model */
		AudioBufferModel?: M2tsSettingsAudioBufferModel;

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		AudioFramesPerPes?: number;

		/**Placeholder documentation for __string */
		AudioPids?: string;

		/**M2ts Audio Stream Type */
		AudioStreamType?: M2tsSettingsAudioStreamType;

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		Bitrate?: number;

		/**M2ts Buffer Model */
		BufferModel?: M2tsSettingsBufferModel;

		/**M2ts Cc Descriptor */
		CcDescriptor?: M2tsSettingsCcDescriptor;

		/**DVB Network Information Table (NIT) */
		DvbNitSettings?: DvbNitSettings;

		/**DVB Service Description Table (SDT) */
		DvbSdtSettings?: DvbSdtSettings;

		/**Placeholder documentation for __string */
		DvbSubPids?: string;

		/**DVB Time and Date Table (SDT) */
		DvbTdtSettings?: DvbTdtSettings;

		/**Placeholder documentation for __string */
		DvbTeletextPid?: string;

		/**M2ts Ebif Control */
		Ebif?: M2tsSettingsEbif;

		/**M2ts Audio Interval */
		EbpAudioInterval?: M2tsSettingsEbpAudioInterval;

		/**
		 * Placeholder documentation for __integerMin0Max10000
		 * Minimum: 0
		 * Maximum: 10000
		 */
		EbpLookaheadMs?: number;

		/**M2ts Ebp Placement */
		EbpPlacement?: M2tsSettingsEbpPlacement;

		/**Placeholder documentation for __string */
		EcmPid?: string;

		/**M2ts Es Rate In Pes */
		EsRateInPes?: M2tsSettingsEsRateInPes;

		/**Placeholder documentation for __string */
		EtvPlatformPid?: string;

		/**Placeholder documentation for __string */
		EtvSignalPid?: string;

		/**Placeholder documentation for __doubleMin0 */
		FragmentTime?: number;

		/**M2ts Klv */
		Klv?: M2tsSettingsKlv;

		/**Placeholder documentation for __string */
		KlvDataPids?: string;

		/**M2ts Nielsen Id3 Behavior */
		NielsenId3Behavior?: M2tsSettingsNielsenId3Behavior;

		/**Placeholder documentation for __doubleMin0 */
		NullPacketBitrate?: number;

		/**
		 * Placeholder documentation for __integerMin0Max1000
		 * Minimum: 0
		 * Maximum: 1000
		 */
		PatInterval?: number;

		/**M2ts Pcr Control */
		PcrControl?: M2tsSettingsPcrControl;

		/**
		 * Placeholder documentation for __integerMin0Max500
		 * Minimum: 0
		 * Maximum: 500
		 */
		PcrPeriod?: number;

		/**Placeholder documentation for __string */
		PcrPid?: string;

		/**
		 * Placeholder documentation for __integerMin0Max1000
		 * Minimum: 0
		 * Maximum: 1000
		 */
		PmtInterval?: number;

		/**Placeholder documentation for __string */
		PmtPid?: string;

		/**
		 * Placeholder documentation for __integerMin0Max65535
		 * Minimum: 0
		 * Maximum: 65535
		 */
		ProgramNum?: number;

		/**M2ts Rate Mode */
		RateMode?: M2tsSettingsRateMode;

		/**Placeholder documentation for __string */
		Scte27Pids?: string;

		/**M2ts Scte35 Control */
		Scte35Control?: M2tsSettingsScte35Control;

		/**Placeholder documentation for __string */
		Scte35Pid?: string;

		/**M2ts Segmentation Markers */
		SegmentationMarkers?: M2tsSettingsSegmentationMarkers;

		/**M2ts Segmentation Style */
		SegmentationStyle?: M2tsSettingsSegmentationStyle;

		/**Placeholder documentation for __doubleMin1 */
		SegmentationTime?: number;

		/**M2ts Timed Metadata Behavior */
		TimedMetadataBehavior?: M2tsSettingsTimedMetadataBehavior;

		/**Placeholder documentation for __string */
		TimedMetadataPid?: string;

		/**
		 * Placeholder documentation for __integerMin0Max65535
		 * Minimum: 0
		 * Maximum: 65535
		 */
		TransportStreamId?: number;

		/**Placeholder documentation for __string */
		VideoPid?: string;
	}

	export enum M2tsSettingsAbsentInputAudioBehavior { DROP = 0, ENCODE_SILENCE = 1 }

	export enum M2tsSettingsArib { DISABLED = 0, ENABLED = 1 }

	export enum M2tsSettingsAribCaptionsPidControl { AUTO = 0, USE_CONFIGURED = 1 }

	export enum M2tsSettingsAudioBufferModel { ATSC = 0, DVB = 1 }

	export enum M2tsSettingsAudioStreamType { ATSC = 0, DVB = 1 }

	export enum M2tsSettingsBufferModel { MULTIPLEX = 0, NONE = 1 }

	export enum M2tsSettingsCcDescriptor { DISABLED = 0, ENABLED = 1 }

	export enum M2tsSettingsEbif { NONE = 0, PASSTHROUGH = 1 }

	export enum M2tsSettingsEbpAudioInterval { VIDEO_AND_FIXED_INTERVALS = 0, VIDEO_INTERVAL = 1 }

	export enum M2tsSettingsEbpPlacement { VIDEO_AND_AUDIO_PIDS = 0, VIDEO_PID = 1 }

	export enum M2tsSettingsEsRateInPes { EXCLUDE = 0, INCLUDE = 1 }

	export enum M2tsSettingsKlv { NONE = 0, PASSTHROUGH = 1 }

	export enum M2tsSettingsNielsenId3Behavior { NO_PASSTHROUGH = 0, PASSTHROUGH = 1 }

	export enum M2tsSettingsPcrControl { CONFIGURED_PCR_PERIOD = 0, PCR_EVERY_PES_PACKET = 1 }

	export enum M2tsSettingsRateMode { CBR = 0, VBR = 1 }

	export enum M2tsSettingsScte35Control { NONE = 0, PASSTHROUGH = 1 }

	export enum M2tsSettingsSegmentationMarkers { EBP = 0, EBP_LEGACY = 1, NONE = 2, PSI_SEGSTART = 3, RAI_ADAPT = 4, RAI_SEGSTART = 5 }

	export enum M2tsSettingsSegmentationStyle { MAINTAIN_CADENCE = 0, RESET_CADENCE = 1 }

	export enum M2tsSettingsTimedMetadataBehavior { NO_PASSTHROUGH = 0, PASSTHROUGH = 1 }


	/**Archive Container Settings */
	export interface ArchiveContainerSettings {

		/**M2ts Settings */
		M2tsSettings?: M2tsSettings;
	}


	/**Reference to an OutputDestination ID defined in the channel */
	export interface OutputLocationRef {

		/**Placeholder documentation for __string */
		DestinationRefId?: string;
	}


	/**Archive Group Settings */
	export interface ArchiveGroupSettings {

		/**Reference to an OutputDestination ID defined in the channel */
		Destination: OutputLocationRef;

		/**
		 * Placeholder documentation for __integerMin1
		 * Minimum: 1
		 */
		RolloverInterval?: number;
	}


	/**Archive Output Settings */
	export interface ArchiveOutputSettings {

		/**Archive Container Settings */
		ContainerSettings: ArchiveContainerSettings;

		/**Placeholder documentation for __string */
		Extension?: string;

		/**Placeholder documentation for __string */
		NameModifier?: string;
	}


	/**Audio Channel Mapping */
	export interface AudioChannelMapping {

		/**Placeholder documentation for __listOfInputChannelLevel */
		InputChannelLevels: Array<InputChannelLevel>;

		/**
		 * Placeholder documentation for __integerMin0Max7
		 * Minimum: 0
		 * Maximum: 7
		 */
		OutputChannel: number;
	}


	/**Eac3 Settings */
	export interface Eac3Settings {

		/**Eac3 Attenuation Control */
		AttenuationControl?: Eac3SettingsAttenuationControl;

		/**Placeholder documentation for __double */
		Bitrate?: number;

		/**Eac3 Bitstream Mode */
		BitstreamMode?: Eac3SettingsBitstreamMode;

		/**Eac3 Coding Mode */
		CodingMode?: Eac3SettingsCodingMode;

		/**Eac3 Dc Filter */
		DcFilter?: Eac3SettingsDcFilter;

		/**
		 * Placeholder documentation for __integerMin1Max31
		 * Minimum: 1
		 * Maximum: 31
		 */
		Dialnorm?: number;

		/**Eac3 Drc Line */
		DrcLine?: Eac3SettingsDrcLine;

		/**Eac3 Drc Rf */
		DrcRf?: Eac3SettingsDrcRf;

		/**Eac3 Lfe Control */
		LfeControl?: Eac3SettingsLfeControl;

		/**Eac3 Lfe Filter */
		LfeFilter?: Eac3SettingsLfeFilter;

		/**Placeholder documentation for __double */
		LoRoCenterMixLevel?: number;

		/**Placeholder documentation for __double */
		LoRoSurroundMixLevel?: number;

		/**Placeholder documentation for __double */
		LtRtCenterMixLevel?: number;

		/**Placeholder documentation for __double */
		LtRtSurroundMixLevel?: number;

		/**Eac3 Metadata Control */
		MetadataControl?: Eac3SettingsMetadataControl;

		/**Eac3 Passthrough Control */
		PassthroughControl?: Eac3SettingsPassthroughControl;

		/**Eac3 Phase Control */
		PhaseControl?: Eac3SettingsPhaseControl;

		/**Eac3 Stereo Downmix */
		StereoDownmix?: Eac3SettingsStereoDownmix;

		/**Eac3 Surround Ex Mode */
		SurroundExMode?: Eac3SettingsSurroundExMode;

		/**Eac3 Surround Mode */
		SurroundMode?: Eac3SettingsSurroundMode;
	}

	export enum Eac3SettingsAttenuationControl { ATTENUATE_3_DB = 0, NONE = 1 }

	export enum Eac3SettingsBitstreamMode { COMMENTARY = 0, COMPLETE_MAIN = 1, EMERGENCY = 2, HEARING_IMPAIRED = 3, VISUALLY_IMPAIRED = 4 }

	export enum Eac3SettingsCodingMode { CODING_MODE_1_0 = 0, CODING_MODE_2_0 = 1, CODING_MODE_3_2 = 2 }

	export enum Eac3SettingsDcFilter { DISABLED = 0, ENABLED = 1 }

	export enum Eac3SettingsDrcLine { FILM_LIGHT = 0, FILM_STANDARD = 1, MUSIC_LIGHT = 2, MUSIC_STANDARD = 3, NONE = 4, SPEECH = 5 }

	export enum Eac3SettingsDrcRf { FILM_LIGHT = 0, FILM_STANDARD = 1, MUSIC_LIGHT = 2, MUSIC_STANDARD = 3, NONE = 4, SPEECH = 5 }

	export enum Eac3SettingsLfeControl { LFE = 0, NO_LFE = 1 }

	export enum Eac3SettingsLfeFilter { DISABLED = 0, ENABLED = 1 }

	export enum Eac3SettingsMetadataControl { FOLLOW_INPUT = 0, USE_CONFIGURED = 1 }

	export enum Eac3SettingsPassthroughControl { NO_PASSTHROUGH = 0, WHEN_POSSIBLE = 1 }

	export enum Eac3SettingsPhaseControl { NO_SHIFT = 0, SHIFT_90_DEGREES = 1 }

	export enum Eac3SettingsStereoDownmix { DPL2 = 0, LO_RO = 1, LT_RT = 2, NOT_INDICATED = 3 }

	export enum Eac3SettingsSurroundExMode { DISABLED = 0, ENABLED = 1, NOT_INDICATED = 2 }

	export enum Eac3SettingsSurroundMode { DISABLED = 0, ENABLED = 1, NOT_INDICATED = 2 }


	/**Mp2 Settings */
	export interface Mp2Settings {

		/**Placeholder documentation for __double */
		Bitrate?: number;

		/**Mp2 Coding Mode */
		CodingMode?: Mp2SettingsCodingMode;

		/**Placeholder documentation for __double */
		SampleRate?: number;
	}

	export enum Mp2SettingsCodingMode { CODING_MODE_1_0 = 0, CODING_MODE_2_0 = 1 }


	/**Audio Codec Settings */
	export interface AudioCodecSettings {

		/**Aac Settings */
		AacSettings?: AacSettings;

		/**Ac3 Settings */
		Ac3Settings?: Ac3Settings;

		/**Eac3 Settings */
		Eac3Settings?: Eac3Settings;

		/**Mp2 Settings */
		Mp2Settings?: Mp2Settings;

		/**Pass Through Settings */
		PassThroughSettings?: PassThroughSettings;
	}


	/**Audio Normalization Settings */
	export interface AudioNormalizationSettings {

		/**Audio Normalization Algorithm */
		Algorithm?: AudioNormalizationSettingsAlgorithm;

		/**Audio Normalization Algorithm Control */
		AlgorithmControl?: AudioNormalizationSettingsAlgorithmControl;

		/**Placeholder documentation for __doubleMinNegative59Max0 */
		TargetLkfs?: number;
	}

	export enum AudioNormalizationSettingsAlgorithm { ITU_1770_1 = 0, ITU_1770_2 = 1 }

	export enum AudioNormalizationSettingsAlgorithmControl { CORRECT_AUDIO = 0 }


	/**Audio Type */
	export enum AudioType { CLEAN_EFFECTS = 0, HEARING_IMPAIRED = 1, UNDEFINED = 2, VISUAL_IMPAIRED_COMMENTARY = 3 }


	/**Audio Description Audio Type Control */
	export enum AudioDescriptionAudioTypeControl { FOLLOW_INPUT = 0, USE_CONFIGURED = 1 }


	/**Audio Description Language Code Control */
	export enum AudioDescriptionLanguageCodeControl { FOLLOW_INPUT = 0, USE_CONFIGURED = 1 }


	/**Remix Settings */
	export interface RemixSettings {

		/**Placeholder documentation for __listOfAudioChannelMapping */
		ChannelMappings: Array<AudioChannelMapping>;

		/**
		 * Placeholder documentation for __integerMin1Max16
		 * Minimum: 1
		 * Maximum: 16
		 */
		ChannelsIn?: number;

		/**
		 * Placeholder documentation for __integerMin1Max8
		 * Minimum: 1
		 * Maximum: 8
		 */
		ChannelsOut?: number;
	}


	/**Audio Description */
	export interface AudioDescription {

		/**Audio Normalization Settings */
		AudioNormalizationSettings?: AudioNormalizationSettings;

		/**Placeholder documentation for __string */
		AudioSelectorName: string;

		/**Audio Type */
		AudioType?: AudioDescriptionAudioType;

		/**Audio Description Audio Type Control */
		AudioTypeControl?: AudioDescriptionAudioTypeControl;

		/**Audio Codec Settings */
		CodecSettings?: AudioCodecSettings;

		/**
		 * Placeholder documentation for __stringMin3Max3
		 * Max length: 3
		 * Min length: 3
		 */
		LanguageCode?: string;

		/**Audio Description Language Code Control */
		LanguageCodeControl?: AudioDescriptionLanguageCodeControl;

		/**Placeholder documentation for __string */
		Name: string;

		/**Remix Settings */
		RemixSettings?: RemixSettings;

		/**Placeholder documentation for __string */
		StreamName?: string;
	}

	export enum AudioDescriptionAudioType { CLEAN_EFFECTS = 0, HEARING_IMPAIRED = 1, UNDEFINED = 2, VISUAL_IMPAIRED_COMMENTARY = 3 }

	export enum AudioDescriptionAudioTypeControl { FOLLOW_INPUT = 0, USE_CONFIGURED = 1 }

	export enum AudioDescriptionLanguageCodeControl { FOLLOW_INPUT = 0, USE_CONFIGURED = 1 }


	/**Audio Language Selection Policy */
	export enum AudioLanguageSelectionPolicy { LOOSE = 0, STRICT = 1 }


	/**Audio Language Selection */
	export interface AudioLanguageSelection {

		/**Placeholder documentation for __string */
		LanguageCode: string;

		/**Audio Language Selection Policy */
		LanguageSelectionPolicy?: AudioLanguageSelectionLanguageSelectionPolicy;
	}

	export enum AudioLanguageSelectionLanguageSelectionPolicy { LOOSE = 0, STRICT = 1 }


	/**Audio Normalization Algorithm */
	export enum AudioNormalizationAlgorithm { ITU_1770_1 = 0, ITU_1770_2 = 1 }


	/**Audio Normalization Algorithm Control */
	export enum AudioNormalizationAlgorithmControl { CORRECT_AUDIO = 0 }


	/**Audio Only Hls Segment Type */
	export enum AudioOnlyHlsSegmentType { AAC = 0, FMP4 = 1 }


	/**Input Location */
	export interface InputLocation {

		/**Placeholder documentation for __string */
		PasswordParam?: string;

		/**Placeholder documentation for __string */
		Uri: string;

		/**Placeholder documentation for __string */
		Username?: string;
	}


	/**Audio Only Hls Track Type */
	export enum AudioOnlyHlsTrackType { ALTERNATE_AUDIO_AUTO_SELECT = 0, ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT = 1, ALTERNATE_AUDIO_NOT_AUTO_SELECT = 2, AUDIO_ONLY_VARIANT_STREAM = 3 }


	/**Audio Only Hls Settings */
	export interface AudioOnlyHlsSettings {

		/**Placeholder documentation for __string */
		AudioGroupId?: string;

		/**Input Location */
		AudioOnlyImage?: InputLocation;

		/**Audio Only Hls Track Type */
		AudioTrackType?: AudioOnlyHlsSettingsAudioTrackType;

		/**Audio Only Hls Segment Type */
		SegmentType?: AudioOnlyHlsSettingsSegmentType;
	}

	export enum AudioOnlyHlsSettingsAudioTrackType { ALTERNATE_AUDIO_AUTO_SELECT = 0, ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT = 1, ALTERNATE_AUDIO_NOT_AUTO_SELECT = 2, AUDIO_ONLY_VARIANT_STREAM = 3 }

	export enum AudioOnlyHlsSettingsSegmentType { AAC = 0, FMP4 = 1 }


	/**Audio Pid Selection */
	export interface AudioPidSelection {

		/**
		 * Placeholder documentation for __integerMin0Max8191
		 * Minimum: 0
		 * Maximum: 8191
		 */
		Pid: number;
	}


	/**Audio Selector Settings */
	export interface AudioSelectorSettings {

		/**Audio Language Selection */
		AudioLanguageSelection?: AudioLanguageSelection;

		/**Audio Pid Selection */
		AudioPidSelection?: AudioPidSelection;

		/**Audio Track Selection */
		AudioTrackSelection?: AudioTrackSelection;
	}


	/**Audio Selector */
	export interface AudioSelector {

		/**
		 * Placeholder documentation for __stringMin1
		 * Min length: 1
		 */
		Name: string;

		/**Audio Selector Settings */
		SelectorSettings?: AudioSelectorSettings;
	}


	/**Audio Track Selection */
	export interface AudioTrackSelection {

		/**Placeholder documentation for __listOfAudioTrack */
		Tracks: Array<AudioTrack>;
	}


	/**Audio Track */
	export interface AudioTrack {

		/**
		 * Placeholder documentation for __integerMin1
		 * Minimum: 1
		 */
		Track: number;
	}


	/**Authentication Scheme */
	export enum AuthenticationScheme { AKAMAI = 0, COMMON = 1 }


	/**
	 * Input preference when deciding which input to make active when a previously failed input has recovered.
	 * If \"EQUAL_INPUT_PREFERENCE\", then the active input will stay active as long as it is healthy.
	 * If \"PRIMARY_INPUT_PREFERRED\", then always switch back to the primary input when it is healthy.
	 */
	export enum InputPreference { EQUAL_INPUT_PREFERENCE = 0, PRIMARY_INPUT_PREFERRED = 1 }


	/**The settings for Automatic Input Failover. */
	export interface AutomaticInputFailoverSettings {

		/**
		 * Input preference when deciding which input to make active when a previously failed input has recovered.
		 * If \"EQUAL_INPUT_PREFERENCE\", then the active input will stay active as long as it is healthy.
		 * If \"PRIMARY_INPUT_PREFERRED\", then always switch back to the primary input when it is healthy.
		 */
		InputPreference?: AutomaticInputFailoverSettingsInputPreference;

		/**Placeholder documentation for __string */
		SecondaryInputId: string;
	}

	export enum AutomaticInputFailoverSettingsInputPreference { EQUAL_INPUT_PREFERENCE = 0, PRIMARY_INPUT_PREFERRED = 1 }


	/**Avail Blanking State */
	export enum AvailBlankingState { DISABLED = 0, ENABLED = 1 }


	/**Avail Settings */
	export interface AvailSettings {

		/**Scte35 Splice Insert */
		Scte35SpliceInsert?: Scte35SpliceInsert;

		/**Scte35 Time Signal Apos */
		Scte35TimeSignalApos?: Scte35TimeSignalApos;
	}


	/**Scte35 Splice Insert */
	export interface Scte35SpliceInsert {

		/**
		 * Placeholder documentation for __integerMinNegative1000Max1000
		 * Minimum: -1000
		 * Maximum: 1000
		 */
		AdAvailOffset?: number;

		/**Scte35 Splice Insert No Regional Blackout Behavior */
		NoRegionalBlackoutFlag?: Scte35SpliceInsertNoRegionalBlackoutFlag;

		/**Scte35 Splice Insert Web Delivery Allowed Behavior */
		WebDeliveryAllowedFlag?: Scte35SpliceInsertWebDeliveryAllowedFlag;
	}

	export enum Scte35SpliceInsertNoRegionalBlackoutFlag { FOLLOW = 0, IGNORE = 1 }

	export enum Scte35SpliceInsertWebDeliveryAllowedFlag { FOLLOW = 0, IGNORE = 1 }


	/**Scte35 Time Signal Apos */
	export interface Scte35TimeSignalApos {

		/**
		 * Placeholder documentation for __integerMinNegative1000Max1000
		 * Minimum: -1000
		 * Maximum: 1000
		 */
		AdAvailOffset?: number;

		/**Scte35 Apos No Regional Blackout Behavior */
		NoRegionalBlackoutFlag?: Scte35TimeSignalAposNoRegionalBlackoutFlag;

		/**Scte35 Apos Web Delivery Allowed Behavior */
		WebDeliveryAllowedFlag?: Scte35TimeSignalAposWebDeliveryAllowedFlag;
	}

	export enum Scte35TimeSignalAposNoRegionalBlackoutFlag { FOLLOW = 0, IGNORE = 1 }

	export enum Scte35TimeSignalAposWebDeliveryAllowedFlag { FOLLOW = 0, IGNORE = 1 }


	/**A list of schedule actions to create (in a request) or that have been created (in a response). */
	export interface BatchScheduleActionCreateRequest {

		/**Placeholder documentation for __listOfScheduleAction */
		ScheduleActions: Array<ScheduleAction>;
	}


	/**List of actions that have been created in the schedule. */
	export interface BatchScheduleActionCreateResult {

		/**Placeholder documentation for __listOfScheduleAction */
		ScheduleActions: Array<ScheduleAction>;
	}


	/**A list of schedule actions to delete. */
	export interface BatchScheduleActionDeleteRequest {

		/**Placeholder documentation for __listOf__string */
		ActionNames: Array<__string>;
	}


	/**List of actions that have been deleted from the schedule. */
	export interface BatchScheduleActionDeleteResult {

		/**Placeholder documentation for __listOfScheduleAction */
		ScheduleActions: Array<ScheduleAction>;
	}


	/**List of actions to create and list of actions to delete. */
	export interface BatchUpdateScheduleRequest {

		/**A list of schedule actions to create (in a request) or that have been created (in a response). */
		Creates?: BatchScheduleActionCreateRequest;

		/**A list of schedule actions to delete. */
		Deletes?: BatchScheduleActionDeleteRequest;
	}


	/**Blackout Slate Network End Blackout */
	export enum BlackoutSlateNetworkEndBlackout { DISABLED = 0, ENABLED = 1 }


	/**Blackout Slate State */
	export enum BlackoutSlateState { DISABLED = 0, ENABLED = 1 }


	/**Burn In Alignment */
	export enum BurnInAlignment { CENTERED = 0, LEFT = 1, SMART = 2 }


	/**Burn In Background Color */
	export enum BurnInBackgroundColor { BLACK = 0, NONE = 1, WHITE = 2 }


	/**Burn In Font Color */
	export enum BurnInFontColor { BLACK = 0, BLUE = 1, GREEN = 2, RED = 3, WHITE = 4, YELLOW = 5 }


	/**Burn In Outline Color */
	export enum BurnInOutlineColor { BLACK = 0, BLUE = 1, GREEN = 2, RED = 3, WHITE = 4, YELLOW = 5 }


	/**Burn In Shadow Color */
	export enum BurnInShadowColor { BLACK = 0, NONE = 1, WHITE = 2 }


	/**Burn In Teletext Grid Control */
	export enum BurnInTeletextGridControl { FIXED = 0, SCALED = 1 }


	/**Burn In Destination Settings */
	export interface BurnInDestinationSettings {

		/**Burn In Alignment */
		Alignment?: BurnInDestinationSettingsAlignment;

		/**Burn In Background Color */
		BackgroundColor?: BurnInDestinationSettingsBackgroundColor;

		/**
		 * Placeholder documentation for __integerMin0Max255
		 * Minimum: 0
		 * Maximum: 255
		 */
		BackgroundOpacity?: number;

		/**Input Location */
		Font?: InputLocation;

		/**Burn In Font Color */
		FontColor?: BurnInDestinationSettingsFontColor;

		/**
		 * Placeholder documentation for __integerMin0Max255
		 * Minimum: 0
		 * Maximum: 255
		 */
		FontOpacity?: number;

		/**
		 * Placeholder documentation for __integerMin96Max600
		 * Minimum: 96
		 * Maximum: 600
		 */
		FontResolution?: number;

		/**Placeholder documentation for __string */
		FontSize?: string;

		/**Burn In Outline Color */
		OutlineColor?: BurnInDestinationSettingsOutlineColor;

		/**
		 * Placeholder documentation for __integerMin0Max10
		 * Minimum: 0
		 * Maximum: 10
		 */
		OutlineSize?: number;

		/**Burn In Shadow Color */
		ShadowColor?: BurnInDestinationSettingsShadowColor;

		/**
		 * Placeholder documentation for __integerMin0Max255
		 * Minimum: 0
		 * Maximum: 255
		 */
		ShadowOpacity?: number;

		/**Placeholder documentation for __integer */
		ShadowXOffset?: number;

		/**Placeholder documentation for __integer */
		ShadowYOffset?: number;

		/**Burn In Teletext Grid Control */
		TeletextGridControl?: BurnInDestinationSettingsTeletextGridControl;

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		XPosition?: number;

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		YPosition?: number;
	}

	export enum BurnInDestinationSettingsAlignment { CENTERED = 0, LEFT = 1, SMART = 2 }

	export enum BurnInDestinationSettingsBackgroundColor { BLACK = 0, NONE = 1, WHITE = 2 }

	export enum BurnInDestinationSettingsFontColor { BLACK = 0, BLUE = 1, GREEN = 2, RED = 3, WHITE = 4, YELLOW = 5 }

	export enum BurnInDestinationSettingsOutlineColor { BLACK = 0, BLUE = 1, GREEN = 2, RED = 3, WHITE = 4, YELLOW = 5 }

	export enum BurnInDestinationSettingsShadowColor { BLACK = 0, NONE = 1, WHITE = 2 }

	export enum BurnInDestinationSettingsTeletextGridControl { FIXED = 0, SCALED = 1 }


	/**Caption Destination Settings */
	export interface CaptionDestinationSettings {

		/**Arib Destination Settings */
		AribDestinationSettings?: AribDestinationSettings;

		/**Burn In Destination Settings */
		BurnInDestinationSettings?: BurnInDestinationSettings;

		/**Dvb Sub Destination Settings */
		DvbSubDestinationSettings?: DvbSubDestinationSettings;

		/**Embedded Destination Settings */
		EmbeddedDestinationSettings?: EmbeddedDestinationSettings;

		/**Embedded Plus Scte20 Destination Settings */
		EmbeddedPlusScte20DestinationSettings?: EmbeddedPlusScte20DestinationSettings;

		/**Rtmp Caption Info Destination Settings */
		RtmpCaptionInfoDestinationSettings?: RtmpCaptionInfoDestinationSettings;

		/**Scte20 Plus Embedded Destination Settings */
		Scte20PlusEmbeddedDestinationSettings?: Scte20PlusEmbeddedDestinationSettings;

		/**Scte27 Destination Settings */
		Scte27DestinationSettings?: Scte27DestinationSettings;

		/**Smpte Tt Destination Settings */
		SmpteTtDestinationSettings?: SmpteTtDestinationSettings;

		/**Teletext Destination Settings */
		TeletextDestinationSettings?: TeletextDestinationSettings;

		/**Ttml Destination Settings */
		TtmlDestinationSettings?: TtmlDestinationSettings;

		/**Webvtt Destination Settings */
		WebvttDestinationSettings?: WebvttDestinationSettings;
	}


	/**Caption Description */
	export interface CaptionDescription {

		/**Placeholder documentation for __string */
		CaptionSelectorName: string;

		/**Caption Destination Settings */
		DestinationSettings?: CaptionDestinationSettings;

		/**Placeholder documentation for __string */
		LanguageCode?: string;

		/**Placeholder documentation for __string */
		LanguageDescription?: string;

		/**Placeholder documentation for __string */
		Name: string;
	}


	/**Dvb Sub Destination Settings */
	export interface DvbSubDestinationSettings {

		/**Dvb Sub Destination Alignment */
		Alignment?: DvbSubDestinationSettingsAlignment;

		/**Dvb Sub Destination Background Color */
		BackgroundColor?: DvbSubDestinationSettingsBackgroundColor;

		/**
		 * Placeholder documentation for __integerMin0Max255
		 * Minimum: 0
		 * Maximum: 255
		 */
		BackgroundOpacity?: number;

		/**Input Location */
		Font?: InputLocation;

		/**Dvb Sub Destination Font Color */
		FontColor?: DvbSubDestinationSettingsFontColor;

		/**
		 * Placeholder documentation for __integerMin0Max255
		 * Minimum: 0
		 * Maximum: 255
		 */
		FontOpacity?: number;

		/**
		 * Placeholder documentation for __integerMin96Max600
		 * Minimum: 96
		 * Maximum: 600
		 */
		FontResolution?: number;

		/**Placeholder documentation for __string */
		FontSize?: string;

		/**Dvb Sub Destination Outline Color */
		OutlineColor?: DvbSubDestinationSettingsOutlineColor;

		/**
		 * Placeholder documentation for __integerMin0Max10
		 * Minimum: 0
		 * Maximum: 10
		 */
		OutlineSize?: number;

		/**Dvb Sub Destination Shadow Color */
		ShadowColor?: DvbSubDestinationSettingsShadowColor;

		/**
		 * Placeholder documentation for __integerMin0Max255
		 * Minimum: 0
		 * Maximum: 255
		 */
		ShadowOpacity?: number;

		/**Placeholder documentation for __integer */
		ShadowXOffset?: number;

		/**Placeholder documentation for __integer */
		ShadowYOffset?: number;

		/**Dvb Sub Destination Teletext Grid Control */
		TeletextGridControl?: DvbSubDestinationSettingsTeletextGridControl;

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		XPosition?: number;

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		YPosition?: number;
	}

	export enum DvbSubDestinationSettingsAlignment { CENTERED = 0, LEFT = 1, SMART = 2 }

	export enum DvbSubDestinationSettingsBackgroundColor { BLACK = 0, NONE = 1, WHITE = 2 }

	export enum DvbSubDestinationSettingsFontColor { BLACK = 0, BLUE = 1, GREEN = 2, RED = 3, WHITE = 4, YELLOW = 5 }

	export enum DvbSubDestinationSettingsOutlineColor { BLACK = 0, BLUE = 1, GREEN = 2, RED = 3, WHITE = 4, YELLOW = 5 }

	export enum DvbSubDestinationSettingsShadowColor { BLACK = 0, NONE = 1, WHITE = 2 }

	export enum DvbSubDestinationSettingsTeletextGridControl { FIXED = 0, SCALED = 1 }


	/**Ttml Destination Settings */
	export interface TtmlDestinationSettings {

		/**Ttml Destination Style Control */
		StyleControl?: TtmlDestinationSettingsStyleControl;
	}

	export enum TtmlDestinationSettingsStyleControl { PASSTHROUGH = 0, USE_CONFIGURED = 1 }


	/**Maps a caption channel to an ISO 693-2 language code (http://www.loc.gov/standards/iso639-2), with an optional description. */
	export interface CaptionLanguageMapping {

		/**
		 * Placeholder documentation for __integerMin1Max4
		 * Minimum: 1
		 * Maximum: 4
		 */
		CaptionChannel: number;

		/**
		 * Placeholder documentation for __stringMin3Max3
		 * Max length: 3
		 * Min length: 3
		 */
		LanguageCode: string;

		/**
		 * Placeholder documentation for __stringMin1
		 * Min length: 1
		 */
		LanguageDescription: string;
	}


	/**Caption Selector Settings */
	export interface CaptionSelectorSettings {

		/**Arib Source Settings */
		AribSourceSettings?: AribSourceSettings;

		/**Dvb Sub Source Settings */
		DvbSubSourceSettings?: DvbSubSourceSettings;

		/**Embedded Source Settings */
		EmbeddedSourceSettings?: EmbeddedSourceSettings;

		/**Scte20 Source Settings */
		Scte20SourceSettings?: Scte20SourceSettings;

		/**Scte27 Source Settings */
		Scte27SourceSettings?: Scte27SourceSettings;

		/**Teletext Source Settings */
		TeletextSourceSettings?: TeletextSourceSettings;
	}


	/**Output groups for this Live Event. Output groups contain information about where streams should be distributed. */
	export interface CaptionSelector {

		/**Placeholder documentation for __string */
		LanguageCode?: string;

		/**
		 * Placeholder documentation for __stringMin1
		 * Min length: 1
		 */
		Name: string;

		/**Caption Selector Settings */
		SelectorSettings?: CaptionSelectorSettings;
	}


	/**Dvb Sub Source Settings */
	export interface DvbSubSourceSettings {

		/**
		 * Placeholder documentation for __integerMin1
		 * Minimum: 1
		 */
		Pid?: number;
	}


	/**Embedded Source Settings */
	export interface EmbeddedSourceSettings {

		/**Embedded Convert608 To708 */
		Convert608To708?: EmbeddedSourceSettingsConvert608To708;

		/**Embedded Scte20 Detection */
		Scte20Detection?: EmbeddedSourceSettingsScte20Detection;

		/**
		 * Placeholder documentation for __integerMin1Max4
		 * Minimum: 1
		 * Maximum: 4
		 */
		Source608ChannelNumber?: number;

		/**
		 * Placeholder documentation for __integerMin1Max5
		 * Minimum: 1
		 * Maximum: 5
		 */
		Source608TrackNumber?: number;
	}

	export enum EmbeddedSourceSettingsConvert608To708 { DISABLED = 0, UPCONVERT = 1 }

	export enum EmbeddedSourceSettingsScte20Detection { AUTO = 0, OFF = 1 }


	/**Scte20 Source Settings */
	export interface Scte20SourceSettings {

		/**Scte20 Convert608 To708 */
		Convert608To708?: Scte20SourceSettingsConvert608To708;

		/**
		 * Placeholder documentation for __integerMin1Max4
		 * Minimum: 1
		 * Maximum: 4
		 */
		Source608ChannelNumber?: number;
	}

	export enum Scte20SourceSettingsConvert608To708 { DISABLED = 0, UPCONVERT = 1 }


	/**Scte27 Source Settings */
	export interface Scte27SourceSettings {

		/**
		 * Placeholder documentation for __integerMin1
		 * Minimum: 1
		 */
		Pid?: number;
	}


	/**Teletext Source Settings */
	export interface TeletextSourceSettings {

		/**Placeholder documentation for __string */
		PageNumber?: string;
	}


	/**A standard channel has two encoding pipelines and a single pipeline channel only has one. */
	export enum ChannelClass { STANDARD = 0, SINGLE_PIPELINE = 1 }


	/**Encoder Settings */
	export interface EncoderSettings {

		/**Placeholder documentation for __listOfAudioDescription */
		AudioDescriptions: Array<AudioDescription>;

		/**Avail Blanking */
		AvailBlanking?: AvailBlanking;

		/**Avail Configuration */
		AvailConfiguration?: AvailConfiguration;

		/**Blackout Slate */
		BlackoutSlate?: BlackoutSlate;

		/**Placeholder documentation for __listOfCaptionDescription */
		CaptionDescriptions?: Array<CaptionDescription>;

		/**Global Configuration */
		GlobalConfiguration?: GlobalConfiguration;

		/**Nielsen Configuration */
		NielsenConfiguration?: NielsenConfiguration;

		/**Placeholder documentation for __listOfOutputGroup */
		OutputGroups: Array<OutputGroup>;

		/**Timecode Config */
		TimecodeConfig: TimecodeConfig;

		/**Placeholder documentation for __listOfVideoDescription */
		VideoDescriptions: Array<VideoDescription>;
	}


	/**Placeholder documentation for InputSpecification */
	export interface InputSpecification {

		/**codec in increasing order of complexity */
		Codec?: InputSpecificationCodec;

		/**Maximum input bitrate in megabits per second. Bitrates up to 50 Mbps are supported currently. */
		MaximumBitrate?: InputSpecificationMaximumBitrate;

		/**
		 * Input resolution based on lines of vertical resolution in the input; SD is less than 720 lines, HD is 720 to 1080 lines, UHD is greater than 1080 lines
		 */
		Resolution?: InputSpecificationResolution;
	}

	export enum InputSpecificationCodec { MPEG2 = 0, AVC = 1, HEVC = 2 }

	export enum InputSpecificationMaximumBitrate { MAX_10_MBPS = 0, MAX_20_MBPS = 1, MAX_50_MBPS = 2 }

	export enum InputSpecificationResolution { SD = 0, HD = 1, UHD = 2 }


	/**The log level the user wants for their channel. */
	export enum LogLevel { ERROR = 0, WARNING = 1, INFO = 2, DEBUG = 3, DISABLED = 4 }


	/**Placeholder documentation for ChannelState */
	export enum ChannelState { CREATING = 0, CREATE_FAILED = 1, IDLE = 2, STARTING = 3, RUNNING = 4, RECOVERING = 5, STOPPING = 6, DELETING = 7, DELETED = 8, UPDATING = 9, UPDATE_FAILED = 10 }


	/**Placeholder documentation for Channel */
	export interface Channel {

		/**Placeholder documentation for __string */
		Arn?: string;

		/**A standard channel has two encoding pipelines and a single pipeline channel only has one. */
		ChannelClass?: ChannelChannelClass;

		/**Placeholder documentation for __listOfOutputDestination */
		Destinations?: Array<OutputDestination>;

		/**Placeholder documentation for __listOfChannelEgressEndpoint */
		EgressEndpoints?: Array<ChannelEgressEndpoint>;

		/**Encoder Settings */
		EncoderSettings?: EncoderSettings;

		/**Placeholder documentation for __string */
		Id?: string;

		/**Placeholder documentation for __listOfInputAttachment */
		InputAttachments?: Array<InputAttachment>;

		/**Placeholder documentation for InputSpecification */
		InputSpecification?: InputSpecification;

		/**The log level the user wants for their channel. */
		LogLevel?: ChannelLogLevel;

		/**Placeholder documentation for __string */
		Name?: string;

		/**Placeholder documentation for __listOfPipelineDetail */
		PipelineDetails?: Array<PipelineDetail>;

		/**Placeholder documentation for __integer */
		PipelinesRunningCount?: number;

		/**Placeholder documentation for __string */
		RoleArn?: string;

		/**Placeholder documentation for ChannelState */
		State?: ChannelState;

		/**Placeholder documentation for Tags */
		Tags?: Tags;
	}

	export enum ChannelChannelClass { STANDARD = 0, SINGLE_PIPELINE = 1 }

	export enum ChannelLogLevel { ERROR = 0, WARNING = 1, INFO = 2, DEBUG = 3, DISABLED = 4 }

	export enum ChannelState { CREATING = 0, CREATE_FAILED = 1, IDLE = 2, STARTING = 3, RUNNING = 4, RECOVERING = 5, STOPPING = 6, DELETING = 7, DELETED = 8, UPDATING = 9, UPDATE_FAILED = 10 }


	/**Placeholder documentation for ChannelEgressEndpoint */
	export interface ChannelEgressEndpoint {

		/**Placeholder documentation for __string */
		SourceIp?: string;
	}


	/**Placeholder documentation for ChannelSummary */
	export interface ChannelSummary {

		/**Placeholder documentation for __string */
		Arn?: string;

		/**A standard channel has two encoding pipelines and a single pipeline channel only has one. */
		ChannelClass?: ChannelSummaryChannelClass;

		/**Placeholder documentation for __listOfOutputDestination */
		Destinations?: Array<OutputDestination>;

		/**Placeholder documentation for __listOfChannelEgressEndpoint */
		EgressEndpoints?: Array<ChannelEgressEndpoint>;

		/**Placeholder documentation for __string */
		Id?: string;

		/**Placeholder documentation for __listOfInputAttachment */
		InputAttachments?: Array<InputAttachment>;

		/**Placeholder documentation for InputSpecification */
		InputSpecification?: InputSpecification;

		/**The log level the user wants for their channel. */
		LogLevel?: ChannelSummaryLogLevel;

		/**Placeholder documentation for __string */
		Name?: string;

		/**Placeholder documentation for __integer */
		PipelinesRunningCount?: number;

		/**Placeholder documentation for __string */
		RoleArn?: string;

		/**Placeholder documentation for ChannelState */
		State?: ChannelSummaryState;

		/**Placeholder documentation for Tags */
		Tags?: Tags;
	}

	export enum ChannelSummaryChannelClass { STANDARD = 0, SINGLE_PIPELINE = 1 }

	export enum ChannelSummaryLogLevel { ERROR = 0, WARNING = 1, INFO = 2, DEBUG = 3, DISABLED = 4 }

	export enum ChannelSummaryState { CREATING = 0, CREATE_FAILED = 1, IDLE = 2, STARTING = 3, RUNNING = 4, RECOVERING = 5, STOPPING = 6, DELETING = 7, DELETED = 8, UPDATING = 9, UPDATE_FAILED = 10 }


	/**A request to create a channel */
	export interface CreateChannelRequest {

		/**A standard channel has two encoding pipelines and a single pipeline channel only has one. */
		ChannelClass?: CreateChannelRequestChannelClass;

		/**Placeholder documentation for __listOfOutputDestination */
		Destinations?: Array<OutputDestination>;

		/**Encoder Settings */
		EncoderSettings?: EncoderSettings;

		/**Placeholder documentation for __listOfInputAttachment */
		InputAttachments?: Array<InputAttachment>;

		/**Placeholder documentation for InputSpecification */
		InputSpecification?: InputSpecification;

		/**The log level the user wants for their channel. */
		LogLevel?: CreateChannelRequestLogLevel;

		/**Placeholder documentation for __string */
		Name?: string;

		/**Placeholder documentation for __string */
		RequestId?: string;

		/**Placeholder documentation for __string */
		Reserved?: string;

		/**Placeholder documentation for __string */
		RoleArn?: string;

		/**Placeholder documentation for Tags */
		Tags?: Tags;
	}

	export enum CreateChannelRequestChannelClass { STANDARD = 0, SINGLE_PIPELINE = 1 }

	export enum CreateChannelRequestLogLevel { ERROR = 0, WARNING = 1, INFO = 2, DEBUG = 3, DISABLED = 4 }


	/**Placeholder documentation for InputType */
	export enum InputType { UDP_PUSH = 0, RTP_PUSH = 1, RTMP_PUSH = 2, RTMP_PULL = 3, URL_PULL = 4, MP4_FILE = 5, MEDIACONNECT = 6, INPUT_DEVICE = 7 }


	/**
	 * Settings for a private VPC Input.
	 * When this property is specified, the input destination addresses will be created in a VPC rather than with public Internet addresses.
	 * This property requires setting the roleArn property on Input creation.
	 * Not compatible with the inputSecurityGroups property.
	 */
	export interface InputVpcRequest {

		/**Placeholder documentation for __listOf__string */
		SecurityGroupIds?: Array<__string>;

		/**Placeholder documentation for __listOf__string */
		SubnetIds: Array<__string>;
	}


	/**The name of the input */
	export interface CreateInputRequest {

		/**Placeholder documentation for __listOfInputDestinationRequest */
		Destinations?: Array<InputDestinationRequest>;

		/**Placeholder documentation for __listOfInputDeviceSettings */
		InputDevices?: Array<InputDeviceSettings>;

		/**Placeholder documentation for __listOf__string */
		InputSecurityGroups?: Array<__string>;

		/**Placeholder documentation for __listOfMediaConnectFlowRequest */
		MediaConnectFlows?: Array<MediaConnectFlowRequest>;

		/**Placeholder documentation for __string */
		Name?: string;

		/**Placeholder documentation for __string */
		RequestId?: string;

		/**Placeholder documentation for __string */
		RoleArn?: string;

		/**Placeholder documentation for __listOfInputSourceRequest */
		Sources?: Array<InputSourceRequest>;

		/**Placeholder documentation for Tags */
		Tags?: Tags;

		/**Placeholder documentation for InputType */
		Type?: CreateInputRequestType;

		/**
		 * Settings for a private VPC Input.
		 * When this property is specified, the input destination addresses will be created in a VPC rather than with public Internet addresses.
		 * This property requires setting the roleArn property on Input creation.
		 * Not compatible with the inputSecurityGroups property.
		 */
		Vpc?: InputVpcRequest;
	}

	export enum CreateInputRequestType { UDP_PUSH = 0, RTP_PUSH = 1, RTMP_PUSH = 2, RTMP_PULL = 3, URL_PULL = 4, MP4_FILE = 5, MEDIACONNECT = 6, INPUT_DEVICE = 7 }


	/**Placeholder documentation for Input */
	export interface Input {

		/**Placeholder documentation for __string */
		Arn?: string;

		/**Placeholder documentation for __listOf__string */
		AttachedChannels?: Array<__string>;

		/**Placeholder documentation for __listOfInputDestination */
		Destinations?: Array<InputDestination>;

		/**Placeholder documentation for __string */
		Id?: string;

		/**A standard input has two sources and a single pipeline input only has one. */
		InputClass?: InputInputClass;

		/**Placeholder documentation for __listOfInputDeviceSettings */
		InputDevices?: Array<InputDeviceSettings>;

		/**
		 * There are two types of input sources, static and dynamic. If an input source is dynamic you can
		 * change the source url of the input dynamically using an input switch action. However, the only input type
		 * to support a dynamic url at this time is MP4_FILE. By default all input sources are static.
		 */
		InputSourceType?: InputInputSourceType;

		/**Placeholder documentation for __listOfMediaConnectFlow */
		MediaConnectFlows?: Array<MediaConnectFlow>;

		/**Placeholder documentation for __string */
		Name?: string;

		/**Placeholder documentation for __string */
		RoleArn?: string;

		/**Placeholder documentation for __listOf__string */
		SecurityGroups?: Array<__string>;

		/**Placeholder documentation for __listOfInputSource */
		Sources?: Array<InputSource>;

		/**Placeholder documentation for InputState */
		State?: InputState;

		/**Placeholder documentation for Tags */
		Tags?: Tags;

		/**Placeholder documentation for InputType */
		Type?: InputType;
	}

	export enum InputInputClass { STANDARD = 0, SINGLE_PIPELINE = 1 }

	export enum InputInputSourceType { STATIC = 0, DYNAMIC = 1 }

	export enum InputState { CREATING = 0, DETACHED = 1, ATTACHED = 2, DELETING = 3, DELETED = 4 }

	export enum InputType { UDP_PUSH = 0, RTP_PUSH = 1, RTMP_PUSH = 2, RTMP_PULL = 3, URL_PULL = 4, MP4_FILE = 5, MEDIACONNECT = 6, INPUT_DEVICE = 7 }


	/**The IPv4 CIDRs to whitelist for this Input Security Group */
	export interface CreateInputSecurityGroupRequest {

		/**Placeholder documentation for Tags */
		Tags?: Tags;

		/**Placeholder documentation for __listOfInputWhitelistRuleCidr */
		WhitelistRules?: Array<InputWhitelistRuleCidr>;
	}


	/**An Input Security Group */
	export interface InputSecurityGroup {

		/**Placeholder documentation for __string */
		Arn?: string;

		/**Placeholder documentation for __string */
		Id?: string;

		/**Placeholder documentation for __listOf__string */
		Inputs?: Array<__string>;

		/**Placeholder documentation for InputSecurityGroupState */
		State?: InputSecurityGroupState;

		/**Placeholder documentation for Tags */
		Tags?: Tags;

		/**Placeholder documentation for __listOfInputWhitelistRule */
		WhitelistRules?: Array<InputWhitelistRule>;
	}

	export enum InputSecurityGroupState { IDLE = 0, IN_USE = 1, UPDATING = 2, DELETED = 3 }


	/**Multiplex Program settings configuration. */
	export interface MultiplexProgramSettings {

		/**
		 * Indicates which pipeline is preferred by the multiplex for program ingest.
		 * If set to \"PIPELINE_0\" or \"PIPELINE_1\" and an unhealthy ingest causes the multiplex to switch to the non-preferred pipeline,
		 * it will switch back once that ingest is healthy again. If set to \"CURRENTLY_ACTIVE\",
		 * it will not switch back to the other pipeline based on it recovering to a healthy state,
		 * it will only switch if the active pipeline becomes unhealthy.
		 */
		PreferredChannelPipeline?: MultiplexProgramSettingsPreferredChannelPipeline;

		/**
		 * Placeholder documentation for __integerMin0Max65535
		 * Minimum: 0
		 * Maximum: 65535
		 */
		ProgramNumber: number;

		/**Transport stream service descriptor configuration for the Multiplex program. */
		ServiceDescriptor?: MultiplexProgramServiceDescriptor;

		/**The video configuration for each program in a multiplex. */
		VideoSettings?: MultiplexVideoSettings;
	}

	export enum MultiplexProgramSettingsPreferredChannelPipeline { CURRENTLY_ACTIVE = 0, PIPELINE_0 = 1, PIPELINE_1 = 2 }


	/**A request to create a program in a multiplex. */
	export interface CreateMultiplexProgramRequest {

		/**Multiplex Program settings configuration. */
		MultiplexProgramSettings: MultiplexProgramSettings;

		/**Placeholder documentation for __string */
		ProgramName: string;

		/**Placeholder documentation for __string */
		RequestId: string;
	}


	/**The multiplex program object. */
	export interface MultiplexProgram {

		/**Placeholder documentation for __string */
		ChannelId?: string;

		/**Multiplex Program settings configuration. */
		MultiplexProgramSettings?: MultiplexProgramSettings;

		/**Packet identifiers map for a given Multiplex program. */
		PacketIdentifiersMap?: MultiplexProgramPacketIdentifiersMap;

		/**Placeholder documentation for __string */
		ProgramName?: string;
	}


	/**Contains configuration for a Multiplex event */
	export interface MultiplexSettings {

		/**
		 * Placeholder documentation for __integerMin1000Max3000
		 * Minimum: 1000
		 * Maximum: 3000
		 */
		MaximumVideoBufferDelayMilliseconds?: number;

		/**
		 * Placeholder documentation for __integerMin1000000Max100000000
		 * Minimum: 1000000
		 * Maximum: 100000000
		 */
		TransportStreamBitrate: number;

		/**
		 * Placeholder documentation for __integerMin0Max65535
		 * Minimum: 0
		 * Maximum: 65535
		 */
		TransportStreamId: number;

		/**
		 * Placeholder documentation for __integerMin0Max100000000
		 * Minimum: 0
		 * Maximum: 100000000
		 */
		TransportStreamReservedBitrate?: number;
	}


	/**A request to create a multiplex. */
	export interface CreateMultiplexRequest {

		/**Placeholder documentation for __listOf__string */
		AvailabilityZones: Array<__string>;

		/**Contains configuration for a Multiplex event */
		MultiplexSettings: MultiplexSettings;

		/**Placeholder documentation for __string */
		Name: string;

		/**Placeholder documentation for __string */
		RequestId: string;

		/**Placeholder documentation for Tags */
		Tags?: Tags;
	}


	/**The multiplex object. */
	export interface Multiplex {

		/**Placeholder documentation for __string */
		Arn?: string;

		/**Placeholder documentation for __listOf__string */
		AvailabilityZones?: Array<__string>;

		/**Placeholder documentation for __listOfMultiplexOutputDestination */
		Destinations?: Array<MultiplexOutputDestination>;

		/**Placeholder documentation for __string */
		Id?: string;

		/**Contains configuration for a Multiplex event */
		MultiplexSettings?: MultiplexSettings;

		/**Placeholder documentation for __string */
		Name?: string;

		/**Placeholder documentation for __integer */
		PipelinesRunningCount?: number;

		/**Placeholder documentation for __integer */
		ProgramCount?: number;

		/**The current state of the multiplex. */
		State?: MultiplexState;

		/**Placeholder documentation for Tags */
		Tags?: Tags;
	}

	export enum MultiplexState { CREATING = 0, CREATE_FAILED = 1, IDLE = 2, STARTING = 3, RUNNING = 4, RECOVERING = 5, STOPPING = 6, DELETING = 7, DELETED = 8 }


	/**Placeholder documentation for CreateTagsRequest */
	export interface CreateTagsRequest {

		/**Placeholder documentation for Tags */
		Tags?: Tags;
	}


	/**Packet identifiers map for a given Multiplex program. */
	export interface MultiplexProgramPacketIdentifiersMap {

		/**Placeholder documentation for __listOf__integer */
		AudioPids?: Array<__integer>;

		/**Placeholder documentation for __listOf__integer */
		DvbSubPids?: Array<__integer>;

		/**Placeholder documentation for __integer */
		DvbTeletextPid?: number;

		/**Placeholder documentation for __integer */
		EtvPlatformPid?: number;

		/**Placeholder documentation for __integer */
		EtvSignalPid?: number;

		/**Placeholder documentation for __listOf__integer */
		KlvDataPids?: Array<__integer>;

		/**Placeholder documentation for __integer */
		PcrPid?: number;

		/**Placeholder documentation for __integer */
		PmtPid?: number;

		/**Placeholder documentation for __integer */
		PrivateMetadataPid?: number;

		/**Placeholder documentation for __listOf__integer */
		Scte27Pids?: Array<__integer>;

		/**Placeholder documentation for __integer */
		Scte35Pid?: number;

		/**Placeholder documentation for __integer */
		TimedMetadataPid?: number;

		/**Placeholder documentation for __integer */
		VideoPid?: number;
	}


	/**The current state of the multiplex. */
	export enum MultiplexState { CREATING = 0, CREATE_FAILED = 1, IDLE = 2, STARTING = 3, RUNNING = 4, RECOVERING = 5, STOPPING = 6, DELETING = 7, DELETED = 8 }


	/**Units for duration, e.g. 'MONTHS' */
	export enum OfferingDurationUnits { MONTHS = 0 }


	/**Offering type, e.g. 'NO_UPFRONT' */
	export enum OfferingType { NO_UPFRONT = 0 }


	/**Resource configuration (codec, resolution, bitrate, ...) */
	export interface ReservationResourceSpecification {

		/**A standard channel has two encoding pipelines and a single pipeline channel only has one. */
		ChannelClass?: ReservationResourceSpecificationChannelClass;

		/**Codec, 'MPEG2', 'AVC', 'HEVC', or 'AUDIO' */
		Codec?: ReservationResourceSpecificationCodec;

		/**Maximum bitrate in megabits per second */
		MaximumBitrate?: ReservationResourceSpecificationMaximumBitrate;

		/**Maximum framerate in frames per second (Outputs only) */
		MaximumFramerate?: ReservationResourceSpecificationMaximumFramerate;

		/**
		 * Resolution based on lines of vertical resolution; SD is less than 720 lines, HD is 720 to 1080 lines, FHD is 1080 lines, UHD is greater than 1080 lines
		 */
		Resolution?: ReservationResourceSpecificationResolution;

		/**Resource type, 'INPUT', 'OUTPUT', 'MULTIPLEX', or 'CHANNEL' */
		ResourceType?: ReservationResourceSpecificationResourceType;

		/**Special features, 'ADVANCED_AUDIO' or 'AUDIO_NORMALIZATION' */
		SpecialFeature?: ReservationResourceSpecificationSpecialFeature;

		/**Video quality, e.g. 'STANDARD' (Outputs only) */
		VideoQuality?: ReservationResourceSpecificationVideoQuality;
	}

	export enum ReservationResourceSpecificationChannelClass { STANDARD = 0, SINGLE_PIPELINE = 1 }

	export enum ReservationResourceSpecificationCodec { MPEG2 = 0, AVC = 1, HEVC = 2, AUDIO = 3 }

	export enum ReservationResourceSpecificationMaximumBitrate { MAX_10_MBPS = 0, MAX_20_MBPS = 1, MAX_50_MBPS = 2 }

	export enum ReservationResourceSpecificationMaximumFramerate { MAX_30_FPS = 0, MAX_60_FPS = 1 }

	export enum ReservationResourceSpecificationResolution { SD = 0, HD = 1, FHD = 2, UHD = 3 }

	export enum ReservationResourceSpecificationResourceType { INPUT = 0, OUTPUT = 1, MULTIPLEX = 2, CHANNEL = 3 }

	export enum ReservationResourceSpecificationSpecialFeature { ADVANCED_AUDIO = 0, AUDIO_NORMALIZATION = 1 }

	export enum ReservationResourceSpecificationVideoQuality { STANDARD = 0, ENHANCED = 1, PREMIUM = 2 }


	/**Current reservation state */
	export enum ReservationState { ACTIVE = 0, EXPIRED = 1, CANCELED = 2, DELETED = 3 }


	/**The state of the connection between the input device and AWS. */
	export enum InputDeviceConnectionState { DISCONNECTED = 0, CONNECTED = 1 }


	/**The status of the action to synchronize the device configuration. If you change the configuration of the input device (for example, the maximum bitrate), MediaLive sends the new data to the device. The device might not update itself immediately. SYNCED means the device has updated its configuration. SYNCING means that it has not updated its configuration. */
	export enum DeviceSettingsSyncState { SYNCED = 0, SYNCING = 1 }


	/**Settings that describe the active source from the input device, and the video characteristics of that source. */
	export interface InputDeviceHdSettings {

		/**The source at the input device that is currently active. */
		ActiveInput?: InputDeviceHdSettingsActiveInput;

		/**The source to activate (use) from the input device. */
		ConfiguredInput?: InputDeviceHdSettingsConfiguredInput;

		/**The state of the input device. */
		DeviceState?: InputDeviceHdSettingsDeviceState;

		/**Placeholder documentation for __double */
		Framerate?: number;

		/**Placeholder documentation for __integer */
		Height?: number;

		/**Placeholder documentation for __integer */
		MaxBitrate?: number;

		/**The scan type of the video source. */
		ScanType?: InputDeviceHdSettingsScanType;

		/**Placeholder documentation for __integer */
		Width?: number;
	}

	export enum InputDeviceHdSettingsActiveInput { HDMI = 0, SDI = 1 }

	export enum InputDeviceHdSettingsConfiguredInput { AUTO = 0, HDMI = 1, SDI = 2 }

	export enum InputDeviceHdSettingsDeviceState { IDLE = 0, STREAMING = 1 }

	export enum InputDeviceHdSettingsScanType { INTERLACED = 0, PROGRESSIVE = 1 }


	/**The network settings for the input device. */
	export interface InputDeviceNetworkSettings {

		/**Placeholder documentation for __listOf__string */
		DnsAddresses?: Array<__string>;

		/**Placeholder documentation for __string */
		Gateway?: string;

		/**Placeholder documentation for __string */
		IpAddress?: string;

		/**Specifies whether the input device has been configured (outside of MediaLive) to use a dynamic IP address assignment (DHCP) or a static IP address. */
		IpScheme?: InputDeviceNetworkSettingsIpScheme;

		/**Placeholder documentation for __string */
		SubnetMask?: string;
	}

	export enum InputDeviceNetworkSettingsIpScheme { STATIC = 0, DHCP = 1 }


	/**The type of the input device. For an AWS Elemental Link device that outputs resolutions up to 1080, choose "HD". */
	export enum InputDeviceType { HD = 0 }


	/**A standard input has two sources and a single pipeline input only has one. */
	export enum InputClass { STANDARD = 0, SINGLE_PIPELINE = 1 }


	/**
	 * There are two types of input sources, static and dynamic. If an input source is dynamic you can
	 * change the source url of the input dynamically using an input switch action. However, the only input type
	 * to support a dynamic url at this time is MP4_FILE. By default all input sources are static.
	 */
	export enum InputSourceType { STATIC = 0, DYNAMIC = 1 }


	/**Placeholder documentation for InputState */
	export enum InputState { CREATING = 0, DETACHED = 1, ATTACHED = 2, DELETING = 3, DELETED = 4 }


	/**Placeholder documentation for InputSecurityGroupState */
	export enum InputSecurityGroupState { IDLE = 0, IN_USE = 1, UPDATING = 2, DELETED = 3 }


	/**DVB Network Information Table (NIT) */
	export interface DvbNitSettings {

		/**
		 * Placeholder documentation for __integerMin0Max65536
		 * Minimum: 0
		 * Maximum: 65536
		 */
		NetworkId: number;

		/**
		 * Placeholder documentation for __stringMin1Max256
		 * Max length: 256
		 * Min length: 1
		 */
		NetworkName: string;

		/**
		 * Placeholder documentation for __integerMin25Max10000
		 * Minimum: 25
		 * Maximum: 10000
		 */
		RepInterval?: number;
	}


	/**Dvb Sdt Output Sdt */
	export enum DvbSdtOutputSdt { SDT_FOLLOW = 0, SDT_FOLLOW_IF_PRESENT = 1, SDT_MANUAL = 2, SDT_NONE = 3 }


	/**DVB Service Description Table (SDT) */
	export interface DvbSdtSettings {

		/**Dvb Sdt Output Sdt */
		OutputSdt?: DvbSdtSettingsOutputSdt;

		/**
		 * Placeholder documentation for __integerMin25Max2000
		 * Minimum: 25
		 * Maximum: 2000
		 */
		RepInterval?: number;

		/**
		 * Placeholder documentation for __stringMin1Max256
		 * Max length: 256
		 * Min length: 1
		 */
		ServiceName?: string;

		/**
		 * Placeholder documentation for __stringMin1Max256
		 * Max length: 256
		 * Min length: 1
		 */
		ServiceProviderName?: string;
	}

	export enum DvbSdtSettingsOutputSdt { SDT_FOLLOW = 0, SDT_FOLLOW_IF_PRESENT = 1, SDT_MANUAL = 2, SDT_NONE = 3 }


	/**Dvb Sub Destination Alignment */
	export enum DvbSubDestinationAlignment { CENTERED = 0, LEFT = 1, SMART = 2 }


	/**Dvb Sub Destination Background Color */
	export enum DvbSubDestinationBackgroundColor { BLACK = 0, NONE = 1, WHITE = 2 }


	/**Dvb Sub Destination Font Color */
	export enum DvbSubDestinationFontColor { BLACK = 0, BLUE = 1, GREEN = 2, RED = 3, WHITE = 4, YELLOW = 5 }


	/**Dvb Sub Destination Outline Color */
	export enum DvbSubDestinationOutlineColor { BLACK = 0, BLUE = 1, GREEN = 2, RED = 3, WHITE = 4, YELLOW = 5 }


	/**Dvb Sub Destination Shadow Color */
	export enum DvbSubDestinationShadowColor { BLACK = 0, NONE = 1, WHITE = 2 }


	/**Dvb Sub Destination Teletext Grid Control */
	export enum DvbSubDestinationTeletextGridControl { FIXED = 0, SCALED = 1 }


	/**DVB Time and Date Table (SDT) */
	export interface DvbTdtSettings {

		/**
		 * Placeholder documentation for __integerMin1000Max30000
		 * Minimum: 1000
		 * Maximum: 30000
		 */
		RepInterval?: number;
	}


	/**Eac3 Attenuation Control */
	export enum Eac3AttenuationControl { ATTENUATE_3_DB = 0, NONE = 1 }


	/**Eac3 Bitstream Mode */
	export enum Eac3BitstreamMode { COMMENTARY = 0, COMPLETE_MAIN = 1, EMERGENCY = 2, HEARING_IMPAIRED = 3, VISUALLY_IMPAIRED = 4 }


	/**Eac3 Coding Mode */
	export enum Eac3CodingMode { CODING_MODE_1_0 = 0, CODING_MODE_2_0 = 1, CODING_MODE_3_2 = 2 }


	/**Eac3 Dc Filter */
	export enum Eac3DcFilter { DISABLED = 0, ENABLED = 1 }


	/**Eac3 Drc Line */
	export enum Eac3DrcLine { FILM_LIGHT = 0, FILM_STANDARD = 1, MUSIC_LIGHT = 2, MUSIC_STANDARD = 3, NONE = 4, SPEECH = 5 }


	/**Eac3 Drc Rf */
	export enum Eac3DrcRf { FILM_LIGHT = 0, FILM_STANDARD = 1, MUSIC_LIGHT = 2, MUSIC_STANDARD = 3, NONE = 4, SPEECH = 5 }


	/**Eac3 Lfe Control */
	export enum Eac3LfeControl { LFE = 0, NO_LFE = 1 }


	/**Eac3 Lfe Filter */
	export enum Eac3LfeFilter { DISABLED = 0, ENABLED = 1 }


	/**Eac3 Metadata Control */
	export enum Eac3MetadataControl { FOLLOW_INPUT = 0, USE_CONFIGURED = 1 }


	/**Eac3 Passthrough Control */
	export enum Eac3PassthroughControl { NO_PASSTHROUGH = 0, WHEN_POSSIBLE = 1 }


	/**Eac3 Phase Control */
	export enum Eac3PhaseControl { NO_SHIFT = 0, SHIFT_90_DEGREES = 1 }


	/**Eac3 Stereo Downmix */
	export enum Eac3StereoDownmix { DPL2 = 0, LO_RO = 1, LT_RT = 2, NOT_INDICATED = 3 }


	/**Eac3 Surround Ex Mode */
	export enum Eac3SurroundExMode { DISABLED = 0, ENABLED = 1, NOT_INDICATED = 2 }


	/**Eac3 Surround Mode */
	export enum Eac3SurroundMode { DISABLED = 0, ENABLED = 1, NOT_INDICATED = 2 }


	/**Embedded Convert608 To708 */
	export enum EmbeddedConvert608To708 { DISABLED = 0, UPCONVERT = 1 }


	/**Embedded Scte20 Detection */
	export enum EmbeddedScte20Detection { AUTO = 0, OFF = 1 }


	/**Fec Output Include Fec */
	export enum FecOutputIncludeFec { COLUMN = 0, COLUMN_AND_ROW = 1 }


	/**Fec Output Settings */
	export interface FecOutputSettings {

		/**
		 * Placeholder documentation for __integerMin4Max20
		 * Minimum: 4
		 * Maximum: 20
		 */
		ColumnDepth?: number;

		/**Fec Output Include Fec */
		IncludeFec?: FecOutputSettingsIncludeFec;

		/**
		 * Placeholder documentation for __integerMin1Max20
		 * Minimum: 1
		 * Maximum: 20
		 */
		RowLength?: number;
	}

	export enum FecOutputSettingsIncludeFec { COLUMN = 0, COLUMN_AND_ROW = 1 }


	/**Fixed Afd */
	export enum FixedAfd { AFD_0000 = 0, AFD_0010 = 1, AFD_0011 = 2, AFD_0100 = 3, AFD_1000 = 4, AFD_1001 = 5, AFD_1010 = 6, AFD_1011 = 7, AFD_1101 = 8, AFD_1110 = 9, AFD_1111 = 10 }


	/**Start time for the action. */
	export interface FixedModeScheduleActionStartSettings {

		/**Placeholder documentation for __string */
		Time: string;
	}


	/**Fmp4 Nielsen Id3 Behavior */
	export enum Fmp4NielsenId3Behavior { NO_PASSTHROUGH = 0, PASSTHROUGH = 1 }


	/**Fmp4 Timed Metadata Behavior */
	export enum Fmp4TimedMetadataBehavior { NO_PASSTHROUGH = 0, PASSTHROUGH = 1 }


	/**Fmp4 Hls Settings */
	export interface Fmp4HlsSettings {

		/**Placeholder documentation for __string */
		AudioRenditionSets?: string;

		/**Fmp4 Nielsen Id3 Behavior */
		NielsenId3Behavior?: Fmp4HlsSettingsNielsenId3Behavior;

		/**Fmp4 Timed Metadata Behavior */
		TimedMetadataBehavior?: Fmp4HlsSettingsTimedMetadataBehavior;
	}

	export enum Fmp4HlsSettingsNielsenId3Behavior { NO_PASSTHROUGH = 0, PASSTHROUGH = 1 }

	export enum Fmp4HlsSettingsTimedMetadataBehavior { NO_PASSTHROUGH = 0, PASSTHROUGH = 1 }


	/**Follow reference point. */
	export enum FollowPoint { END = 0, START = 1 }


	/**Settings to specify if an action follows another. */
	export interface FollowModeScheduleActionStartSettings {

		/**Follow reference point. */
		FollowPoint: FollowModeScheduleActionStartSettingsFollowPoint;

		/**Placeholder documentation for __string */
		ReferenceActionName: string;
	}

	export enum FollowModeScheduleActionStartSettingsFollowPoint { END = 0, START = 1 }


	/**Frame Capture Group Settings */
	export interface FrameCaptureGroupSettings {

		/**Reference to an OutputDestination ID defined in the channel */
		Destination: OutputLocationRef;
	}


	/**Frame Capture Interval Unit */
	export enum FrameCaptureIntervalUnit { MILLISECONDS = 0, SECONDS = 1 }


	/**Frame Capture Output Settings */
	export interface FrameCaptureOutputSettings {

		/**Placeholder documentation for __string */
		NameModifier?: string;
	}


	/**Frame Capture Settings */
	export interface FrameCaptureSettings {

		/**
		 * Placeholder documentation for __integerMin1Max3600000
		 * Minimum: 1
		 * Maximum: 3600000
		 */
		CaptureInterval: number;

		/**Frame Capture Interval Unit */
		CaptureIntervalUnits?: FrameCaptureSettingsCaptureIntervalUnits;
	}

	export enum FrameCaptureSettingsCaptureIntervalUnits { MILLISECONDS = 0, SECONDS = 1 }


	/**Global Configuration Input End Action */
	export enum GlobalConfigurationInputEndAction { NONE = 0, SWITCH_AND_LOOP_INPUTS = 1 }


	/**Input Loss Behavior */
	export interface InputLossBehavior {

		/**
		 * Placeholder documentation for __integerMin0Max1000000
		 * Minimum: 0
		 * Maximum: 1000000
		 */
		BlackFrameMsec?: number;

		/**
		 * Placeholder documentation for __stringMin6Max6
		 * Max length: 6
		 * Min length: 6
		 */
		InputLossImageColor?: string;

		/**Input Location */
		InputLossImageSlate?: InputLocation;

		/**Input Loss Image Type */
		InputLossImageType?: InputLossBehaviorInputLossImageType;

		/**
		 * Placeholder documentation for __integerMin0Max1000000
		 * Minimum: 0
		 * Maximum: 1000000
		 */
		RepeatFrameMsec?: number;
	}

	export enum InputLossBehaviorInputLossImageType { COLOR = 0, SLATE = 1 }


	/**Global Configuration Output Locking Mode */
	export enum GlobalConfigurationOutputLockingMode { EPOCH_LOCKING = 0, PIPELINE_LOCKING = 1 }


	/**Global Configuration Output Timing Source */
	export enum GlobalConfigurationOutputTimingSource { INPUT_CLOCK = 0, SYSTEM_CLOCK = 1 }


	/**Global Configuration Low Framerate Inputs */
	export enum GlobalConfigurationLowFramerateInputs { DISABLED = 0, ENABLED = 1 }


	/**H264 Adaptive Quantization */
	export enum H264AdaptiveQuantization { HIGH = 0, HIGHER = 1, LOW = 2, MAX = 3, MEDIUM = 4, OFF = 5 }


	/**H264 Color Metadata */
	export enum H264ColorMetadata { IGNORE = 0, INSERT = 1 }


	/**H264 Color Space Settings */
	export interface H264ColorSpaceSettings {

		/**Passthrough applies no color space conversion to the output */
		ColorSpacePassthroughSettings?: ColorSpacePassthroughSettings;

		/**Rec601 Settings */
		Rec601Settings?: Rec601Settings;

		/**Rec709 Settings */
		Rec709Settings?: Rec709Settings;
	}


	/**H264 Entropy Encoding */
	export enum H264EntropyEncoding { CABAC = 0, CAVLC = 1 }


	/**Temporal Filter Settings */
	export interface TemporalFilterSettings {

		/**Temporal Filter Post Filter Sharpening */
		PostFilterSharpening?: TemporalFilterSettingsPostFilterSharpening;

		/**Temporal Filter Strength */
		Strength?: TemporalFilterSettingsStrength;
	}

	export enum TemporalFilterSettingsPostFilterSharpening { AUTO = 0, DISABLED = 1, ENABLED = 2 }

	export enum TemporalFilterSettingsStrength { AUTO = 0, STRENGTH_1 = 1, STRENGTH_2 = 2, STRENGTH_3 = 3, STRENGTH_4 = 4, STRENGTH_5 = 5, STRENGTH_6 = 6, STRENGTH_7 = 7, STRENGTH_8 = 8, STRENGTH_9 = 9, STRENGTH_10 = 10, STRENGTH_11 = 11, STRENGTH_12 = 12, STRENGTH_13 = 13, STRENGTH_14 = 14, STRENGTH_15 = 15, STRENGTH_16 = 16 }


	/**H264 Filter Settings */
	export interface H264FilterSettings {

		/**Temporal Filter Settings */
		TemporalFilterSettings?: TemporalFilterSettings;
	}


	/**H264 Flicker Aq */
	export enum H264FlickerAq { DISABLED = 0, ENABLED = 1 }


	/**H264 Force Field Pictures */
	export enum H264ForceFieldPictures { DISABLED = 0, ENABLED = 1 }


	/**H264 Framerate Control */
	export enum H264FramerateControl { INITIALIZE_FROM_SOURCE = 0, SPECIFIED = 1 }


	/**H264 Gop BReference */
	export enum H264GopBReference { DISABLED = 0, ENABLED = 1 }


	/**H264 Gop Size Units */
	export enum H264GopSizeUnits { FRAMES = 0, SECONDS = 1 }


	/**H264 Level */
	export enum H264Level { H264_LEVEL_1 = 0, H264_LEVEL_1_1 = 1, H264_LEVEL_1_2 = 2, H264_LEVEL_1_3 = 3, H264_LEVEL_2 = 4, H264_LEVEL_2_1 = 5, H264_LEVEL_2_2 = 6, H264_LEVEL_3 = 7, H264_LEVEL_3_1 = 8, H264_LEVEL_3_2 = 9, H264_LEVEL_4 = 10, H264_LEVEL_4_1 = 11, H264_LEVEL_4_2 = 12, H264_LEVEL_5 = 13, H264_LEVEL_5_1 = 14, H264_LEVEL_5_2 = 15, H264_LEVEL_AUTO = 16 }


	/**H264 Look Ahead Rate Control */
	export enum H264LookAheadRateControl { HIGH = 0, LOW = 1, MEDIUM = 2 }


	/**H264 Par Control */
	export enum H264ParControl { INITIALIZE_FROM_SOURCE = 0, SPECIFIED = 1 }


	/**H264 Profile */
	export enum H264Profile { BASELINE = 0, HIGH = 1, HIGH_10BIT = 2, HIGH_422 = 3, HIGH_422_10BIT = 4, MAIN = 5 }


	/**H264 Quality Level */
	export enum H264QualityLevel { ENHANCED_QUALITY = 0, STANDARD_QUALITY = 1 }


	/**H264 Rate Control Mode */
	export enum H264RateControlMode { CBR = 0, MULTIPLEX = 1, QVBR = 2, VBR = 3 }


	/**H264 Scan Type */
	export enum H264ScanType { INTERLACED = 0, PROGRESSIVE = 1 }


	/**H264 Scene Change Detect */
	export enum H264SceneChangeDetect { DISABLED = 0, ENABLED = 1 }


	/**H264 Spatial Aq */
	export enum H264SpatialAq { DISABLED = 0, ENABLED = 1 }


	/**H264 Sub Gop Length */
	export enum H264SubGopLength { DYNAMIC = 0, FIXED = 1 }


	/**H264 Syntax */
	export enum H264Syntax { DEFAULT = 0, RP2027 = 1 }


	/**H264 Temporal Aq */
	export enum H264TemporalAq { DISABLED = 0, ENABLED = 1 }


	/**H264 Timecode Insertion Behavior */
	export enum H264TimecodeInsertionBehavior { DISABLED = 0, PIC_TIMING_SEI = 1 }


	/**H264 Settings */
	export interface H264Settings {

		/**H264 Adaptive Quantization */
		AdaptiveQuantization?: H264SettingsAdaptiveQuantization;

		/**Afd Signaling */
		AfdSignaling?: H264SettingsAfdSignaling;

		/**
		 * Placeholder documentation for __integerMin1000
		 * Minimum: 1000
		 */
		Bitrate?: number;

		/**
		 * Placeholder documentation for __integerMin0Max100
		 * Minimum: 0
		 * Maximum: 100
		 */
		BufFillPct?: number;

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		BufSize?: number;

		/**H264 Color Metadata */
		ColorMetadata?: H264SettingsColorMetadata;

		/**H264 Color Space Settings */
		ColorSpaceSettings?: H264ColorSpaceSettings;

		/**H264 Entropy Encoding */
		EntropyEncoding?: H264SettingsEntropyEncoding;

		/**H264 Filter Settings */
		FilterSettings?: H264FilterSettings;

		/**Fixed Afd */
		FixedAfd?: H264SettingsFixedAfd;

		/**H264 Flicker Aq */
		FlickerAq?: H264SettingsFlickerAq;

		/**H264 Force Field Pictures */
		ForceFieldPictures?: H264SettingsForceFieldPictures;

		/**H264 Framerate Control */
		FramerateControl?: H264SettingsFramerateControl;

		/**
		 * Placeholder documentation for __integerMin1
		 * Minimum: 1
		 */
		FramerateDenominator?: number;

		/**
		 * Placeholder documentation for __integerMin1
		 * Minimum: 1
		 */
		FramerateNumerator?: number;

		/**H264 Gop BReference */
		GopBReference?: H264SettingsGopBReference;

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		GopClosedCadence?: number;

		/**
		 * Placeholder documentation for __integerMin0Max7
		 * Minimum: 0
		 * Maximum: 7
		 */
		GopNumBFrames?: number;

		/**Placeholder documentation for __double */
		GopSize?: number;

		/**H264 Gop Size Units */
		GopSizeUnits?: H264SettingsGopSizeUnits;

		/**H264 Level */
		Level?: H264SettingsLevel;

		/**H264 Look Ahead Rate Control */
		LookAheadRateControl?: H264SettingsLookAheadRateControl;

		/**
		 * Placeholder documentation for __integerMin1000
		 * Minimum: 1000
		 */
		MaxBitrate?: number;

		/**
		 * Placeholder documentation for __integerMin0Max30
		 * Minimum: 0
		 * Maximum: 30
		 */
		MinIInterval?: number;

		/**
		 * Placeholder documentation for __integerMin1Max6
		 * Minimum: 1
		 * Maximum: 6
		 */
		NumRefFrames?: number;

		/**H264 Par Control */
		ParControl?: H264SettingsParControl;

		/**
		 * Placeholder documentation for __integerMin1
		 * Minimum: 1
		 */
		ParDenominator?: number;

		/**Placeholder documentation for __integer */
		ParNumerator?: number;

		/**H264 Profile */
		Profile?: H264SettingsProfile;

		/**H264 Quality Level */
		QualityLevel?: H264SettingsQualityLevel;

		/**
		 * Placeholder documentation for __integerMin1Max10
		 * Minimum: 1
		 * Maximum: 10
		 */
		QvbrQualityLevel?: number;

		/**H264 Rate Control Mode */
		RateControlMode?: H264SettingsRateControlMode;

		/**H264 Scan Type */
		ScanType?: H264SettingsScanType;

		/**H264 Scene Change Detect */
		SceneChangeDetect?: H264SettingsSceneChangeDetect;

		/**
		 * Placeholder documentation for __integerMin1Max32
		 * Minimum: 1
		 * Maximum: 32
		 */
		Slices?: number;

		/**
		 * Placeholder documentation for __integerMin0Max128
		 * Minimum: 0
		 * Maximum: 128
		 */
		Softness?: number;

		/**H264 Spatial Aq */
		SpatialAq?: H264SettingsSpatialAq;

		/**H264 Sub Gop Length */
		SubgopLength?: H264SettingsSubgopLength;

		/**H264 Syntax */
		Syntax?: H264SettingsSyntax;

		/**H264 Temporal Aq */
		TemporalAq?: H264SettingsTemporalAq;

		/**H264 Timecode Insertion Behavior */
		TimecodeInsertion?: H264SettingsTimecodeInsertion;
	}

	export enum H264SettingsAdaptiveQuantization { HIGH = 0, HIGHER = 1, LOW = 2, MAX = 3, MEDIUM = 4, OFF = 5 }

	export enum H264SettingsAfdSignaling { AUTO = 0, FIXED = 1, NONE = 2 }

	export enum H264SettingsColorMetadata { IGNORE = 0, INSERT = 1 }

	export enum H264SettingsEntropyEncoding { CABAC = 0, CAVLC = 1 }

	export enum H264SettingsFixedAfd { AFD_0000 = 0, AFD_0010 = 1, AFD_0011 = 2, AFD_0100 = 3, AFD_1000 = 4, AFD_1001 = 5, AFD_1010 = 6, AFD_1011 = 7, AFD_1101 = 8, AFD_1110 = 9, AFD_1111 = 10 }

	export enum H264SettingsFlickerAq { DISABLED = 0, ENABLED = 1 }

	export enum H264SettingsForceFieldPictures { DISABLED = 0, ENABLED = 1 }

	export enum H264SettingsFramerateControl { INITIALIZE_FROM_SOURCE = 0, SPECIFIED = 1 }

	export enum H264SettingsGopBReference { DISABLED = 0, ENABLED = 1 }

	export enum H264SettingsGopSizeUnits { FRAMES = 0, SECONDS = 1 }

	export enum H264SettingsLevel { H264_LEVEL_1 = 0, H264_LEVEL_1_1 = 1, H264_LEVEL_1_2 = 2, H264_LEVEL_1_3 = 3, H264_LEVEL_2 = 4, H264_LEVEL_2_1 = 5, H264_LEVEL_2_2 = 6, H264_LEVEL_3 = 7, H264_LEVEL_3_1 = 8, H264_LEVEL_3_2 = 9, H264_LEVEL_4 = 10, H264_LEVEL_4_1 = 11, H264_LEVEL_4_2 = 12, H264_LEVEL_5 = 13, H264_LEVEL_5_1 = 14, H264_LEVEL_5_2 = 15, H264_LEVEL_AUTO = 16 }

	export enum H264SettingsLookAheadRateControl { HIGH = 0, LOW = 1, MEDIUM = 2 }

	export enum H264SettingsParControl { INITIALIZE_FROM_SOURCE = 0, SPECIFIED = 1 }

	export enum H264SettingsProfile { BASELINE = 0, HIGH = 1, HIGH_10BIT = 2, HIGH_422 = 3, HIGH_422_10BIT = 4, MAIN = 5 }

	export enum H264SettingsQualityLevel { ENHANCED_QUALITY = 0, STANDARD_QUALITY = 1 }

	export enum H264SettingsRateControlMode { CBR = 0, MULTIPLEX = 1, QVBR = 2, VBR = 3 }

	export enum H264SettingsScanType { INTERLACED = 0, PROGRESSIVE = 1 }

	export enum H264SettingsSceneChangeDetect { DISABLED = 0, ENABLED = 1 }

	export enum H264SettingsSpatialAq { DISABLED = 0, ENABLED = 1 }

	export enum H264SettingsSubgopLength { DYNAMIC = 0, FIXED = 1 }

	export enum H264SettingsSyntax { DEFAULT = 0, RP2027 = 1 }

	export enum H264SettingsTemporalAq { DISABLED = 0, ENABLED = 1 }

	export enum H264SettingsTimecodeInsertion { DISABLED = 0, PIC_TIMING_SEI = 1 }


	/**H265 Adaptive Quantization */
	export enum H265AdaptiveQuantization { HIGH = 0, HIGHER = 1, LOW = 2, MAX = 3, MEDIUM = 4, OFF = 5 }


	/**H265 Alternative Transfer Function */
	export enum H265AlternativeTransferFunction { INSERT = 0, OMIT = 1 }


	/**H265 Color Metadata */
	export enum H265ColorMetadata { IGNORE = 0, INSERT = 1 }


	/**Hdr10 Settings */
	export interface Hdr10Settings {

		/**
		 * Placeholder documentation for __integerMin0Max32768
		 * Minimum: 0
		 * Maximum: 32768
		 */
		MaxCll?: number;

		/**
		 * Placeholder documentation for __integerMin0Max32768
		 * Minimum: 0
		 * Maximum: 32768
		 */
		MaxFall?: number;
	}


	/**H265 Color Space Settings */
	export interface H265ColorSpaceSettings {

		/**Passthrough applies no color space conversion to the output */
		ColorSpacePassthroughSettings?: ColorSpacePassthroughSettings;

		/**Hdr10 Settings */
		Hdr10Settings?: Hdr10Settings;

		/**Rec601 Settings */
		Rec601Settings?: Rec601Settings;

		/**Rec709 Settings */
		Rec709Settings?: Rec709Settings;
	}


	/**H265 Flicker Aq */
	export enum H265FlickerAq { DISABLED = 0, ENABLED = 1 }


	/**H265 Gop Size Units */
	export enum H265GopSizeUnits { FRAMES = 0, SECONDS = 1 }


	/**H265 Level */
	export enum H265Level { H265_LEVEL_1 = 0, H265_LEVEL_2 = 1, H265_LEVEL_2_1 = 2, H265_LEVEL_3 = 3, H265_LEVEL_3_1 = 4, H265_LEVEL_4 = 5, H265_LEVEL_4_1 = 6, H265_LEVEL_5 = 7, H265_LEVEL_5_1 = 8, H265_LEVEL_5_2 = 9, H265_LEVEL_6 = 10, H265_LEVEL_6_1 = 11, H265_LEVEL_6_2 = 12, H265_LEVEL_AUTO = 13 }


	/**H265 Look Ahead Rate Control */
	export enum H265LookAheadRateControl { HIGH = 0, LOW = 1, MEDIUM = 2 }


	/**H265 Profile */
	export enum H265Profile { MAIN = 0, MAIN_10BIT = 1 }


	/**H265 Rate Control Mode */
	export enum H265RateControlMode { CBR = 0, MULTIPLEX = 1, QVBR = 2 }


	/**H265 Scan Type */
	export enum H265ScanType { PROGRESSIVE = 0 }


	/**H265 Scene Change Detect */
	export enum H265SceneChangeDetect { DISABLED = 0, ENABLED = 1 }


	/**H265 Tier */
	export enum H265Tier { HIGH = 0, MAIN = 1 }


	/**H265 Timecode Insertion Behavior */
	export enum H265TimecodeInsertionBehavior { DISABLED = 0, PIC_TIMING_SEI = 1 }


	/**H265 Settings */
	export interface H265Settings {

		/**H265 Adaptive Quantization */
		AdaptiveQuantization?: H265SettingsAdaptiveQuantization;

		/**Afd Signaling */
		AfdSignaling?: H265SettingsAfdSignaling;

		/**H265 Alternative Transfer Function */
		AlternativeTransferFunction?: H265SettingsAlternativeTransferFunction;

		/**
		 * Placeholder documentation for __integerMin100000Max40000000
		 * Minimum: 100000
		 * Maximum: 40000000
		 */
		Bitrate?: number;

		/**
		 * Placeholder documentation for __integerMin100000Max80000000
		 * Minimum: 100000
		 * Maximum: 80000000
		 */
		BufSize?: number;

		/**H265 Color Metadata */
		ColorMetadata?: H265SettingsColorMetadata;

		/**H265 Color Space Settings */
		ColorSpaceSettings?: H265ColorSpaceSettings;

		/**Fixed Afd */
		FixedAfd?: H265SettingsFixedAfd;

		/**H265 Flicker Aq */
		FlickerAq?: H265SettingsFlickerAq;

		/**
		 * Placeholder documentation for __integerMin1Max3003
		 * Minimum: 1
		 * Maximum: 3003
		 */
		FramerateDenominator: number;

		/**
		 * Placeholder documentation for __integerMin1
		 * Minimum: 1
		 */
		FramerateNumerator: number;

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		GopClosedCadence?: number;

		/**Placeholder documentation for __double */
		GopSize?: number;

		/**H265 Gop Size Units */
		GopSizeUnits?: H265SettingsGopSizeUnits;

		/**H265 Level */
		Level?: H265SettingsLevel;

		/**H265 Look Ahead Rate Control */
		LookAheadRateControl?: H265SettingsLookAheadRateControl;

		/**
		 * Placeholder documentation for __integerMin100000Max40000000
		 * Minimum: 100000
		 * Maximum: 40000000
		 */
		MaxBitrate?: number;

		/**
		 * Placeholder documentation for __integerMin0Max30
		 * Minimum: 0
		 * Maximum: 30
		 */
		MinIInterval?: number;

		/**
		 * Placeholder documentation for __integerMin1
		 * Minimum: 1
		 */
		ParDenominator?: number;

		/**
		 * Placeholder documentation for __integerMin1
		 * Minimum: 1
		 */
		ParNumerator?: number;

		/**H265 Profile */
		Profile?: H265SettingsProfile;

		/**
		 * Placeholder documentation for __integerMin1Max10
		 * Minimum: 1
		 * Maximum: 10
		 */
		QvbrQualityLevel?: number;

		/**H265 Rate Control Mode */
		RateControlMode?: H265SettingsRateControlMode;

		/**H265 Scan Type */
		ScanType?: H265SettingsScanType;

		/**H265 Scene Change Detect */
		SceneChangeDetect?: H265SettingsSceneChangeDetect;

		/**
		 * Placeholder documentation for __integerMin1Max16
		 * Minimum: 1
		 * Maximum: 16
		 */
		Slices?: number;

		/**H265 Tier */
		Tier?: H265SettingsTier;

		/**H265 Timecode Insertion Behavior */
		TimecodeInsertion?: H265SettingsTimecodeInsertion;
	}

	export enum H265SettingsAdaptiveQuantization { HIGH = 0, HIGHER = 1, LOW = 2, MAX = 3, MEDIUM = 4, OFF = 5 }

	export enum H265SettingsAfdSignaling { AUTO = 0, FIXED = 1, NONE = 2 }

	export enum H265SettingsAlternativeTransferFunction { INSERT = 0, OMIT = 1 }

	export enum H265SettingsColorMetadata { IGNORE = 0, INSERT = 1 }

	export enum H265SettingsFixedAfd { AFD_0000 = 0, AFD_0010 = 1, AFD_0011 = 2, AFD_0100 = 3, AFD_1000 = 4, AFD_1001 = 5, AFD_1010 = 6, AFD_1011 = 7, AFD_1101 = 8, AFD_1110 = 9, AFD_1111 = 10 }

	export enum H265SettingsFlickerAq { DISABLED = 0, ENABLED = 1 }

	export enum H265SettingsGopSizeUnits { FRAMES = 0, SECONDS = 1 }

	export enum H265SettingsLevel { H265_LEVEL_1 = 0, H265_LEVEL_2 = 1, H265_LEVEL_2_1 = 2, H265_LEVEL_3 = 3, H265_LEVEL_3_1 = 4, H265_LEVEL_4 = 5, H265_LEVEL_4_1 = 6, H265_LEVEL_5 = 7, H265_LEVEL_5_1 = 8, H265_LEVEL_5_2 = 9, H265_LEVEL_6 = 10, H265_LEVEL_6_1 = 11, H265_LEVEL_6_2 = 12, H265_LEVEL_AUTO = 13 }

	export enum H265SettingsLookAheadRateControl { HIGH = 0, LOW = 1, MEDIUM = 2 }

	export enum H265SettingsProfile { MAIN = 0, MAIN_10BIT = 1 }

	export enum H265SettingsRateControlMode { CBR = 0, MULTIPLEX = 1, QVBR = 2 }

	export enum H265SettingsScanType { PROGRESSIVE = 0 }

	export enum H265SettingsSceneChangeDetect { DISABLED = 0, ENABLED = 1 }

	export enum H265SettingsTier { HIGH = 0, MAIN = 1 }

	export enum H265SettingsTimecodeInsertion { DISABLED = 0, PIC_TIMING_SEI = 1 }


	/**Hls Ad Markers */
	export enum HlsAdMarkers { ADOBE = 0, ELEMENTAL = 1, ELEMENTAL_SCTE35 = 2 }


	/**Hls Akamai Http Transfer Mode */
	export enum HlsAkamaiHttpTransferMode { CHUNKED = 0, NON_CHUNKED = 1 }


	/**Hls Akamai Settings */
	export interface HlsAkamaiSettings {

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		ConnectionRetryInterval?: number;

		/**
		 * Placeholder documentation for __integerMin0Max600
		 * Minimum: 0
		 * Maximum: 600
		 */
		FilecacheDuration?: number;

		/**Hls Akamai Http Transfer Mode */
		HttpTransferMode?: HlsAkamaiSettingsHttpTransferMode;

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		NumRetries?: number;

		/**
		 * Placeholder documentation for __integerMin0Max15
		 * Minimum: 0
		 * Maximum: 15
		 */
		RestartDelay?: number;

		/**Placeholder documentation for __string */
		Salt?: string;

		/**Placeholder documentation for __string */
		Token?: string;
	}

	export enum HlsAkamaiSettingsHttpTransferMode { CHUNKED = 0, NON_CHUNKED = 1 }


	/**Hls Basic Put Settings */
	export interface HlsBasicPutSettings {

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		ConnectionRetryInterval?: number;

		/**
		 * Placeholder documentation for __integerMin0Max600
		 * Minimum: 0
		 * Maximum: 600
		 */
		FilecacheDuration?: number;

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		NumRetries?: number;

		/**
		 * Placeholder documentation for __integerMin0Max15
		 * Minimum: 0
		 * Maximum: 15
		 */
		RestartDelay?: number;
	}


	/**Hls Caption Language Setting */
	export enum HlsCaptionLanguageSetting { INSERT = 0, NONE = 1, OMIT = 2 }


	/**Hls Media Store Settings */
	export interface HlsMediaStoreSettings {

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		ConnectionRetryInterval?: number;

		/**
		 * Placeholder documentation for __integerMin0Max600
		 * Minimum: 0
		 * Maximum: 600
		 */
		FilecacheDuration?: number;

		/**Hls Media Store Storage Class */
		MediaStoreStorageClass?: HlsMediaStoreSettingsMediaStoreStorageClass;

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		NumRetries?: number;

		/**
		 * Placeholder documentation for __integerMin0Max15
		 * Minimum: 0
		 * Maximum: 15
		 */
		RestartDelay?: number;
	}

	export enum HlsMediaStoreSettingsMediaStoreStorageClass { TEMPORAL = 0 }


	/**Hls Webdav Settings */
	export interface HlsWebdavSettings {

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		ConnectionRetryInterval?: number;

		/**
		 * Placeholder documentation for __integerMin0Max600
		 * Minimum: 0
		 * Maximum: 600
		 */
		FilecacheDuration?: number;

		/**Hls Webdav Http Transfer Mode */
		HttpTransferMode?: HlsWebdavSettingsHttpTransferMode;

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		NumRetries?: number;

		/**
		 * Placeholder documentation for __integerMin0Max15
		 * Minimum: 0
		 * Maximum: 15
		 */
		RestartDelay?: number;
	}

	export enum HlsWebdavSettingsHttpTransferMode { CHUNKED = 0, NON_CHUNKED = 1 }


	/**Hls Cdn Settings */
	export interface HlsCdnSettings {

		/**Hls Akamai Settings */
		HlsAkamaiSettings?: HlsAkamaiSettings;

		/**Hls Basic Put Settings */
		HlsBasicPutSettings?: HlsBasicPutSettings;

		/**Hls Media Store Settings */
		HlsMediaStoreSettings?: HlsMediaStoreSettings;

		/**Hls Webdav Settings */
		HlsWebdavSettings?: HlsWebdavSettings;
	}


	/**Hls Client Cache */
	export enum HlsClientCache { DISABLED = 0, ENABLED = 1 }


	/**Hls Codec Specification */
	export enum HlsCodecSpecification { RFC_4281 = 0, RFC_6381 = 1 }


	/**Hls Directory Structure */
	export enum HlsDirectoryStructure { SINGLE_DIRECTORY = 0, SUBDIRECTORY_PER_STREAM = 1 }


	/**Hls Encryption Type */
	export enum HlsEncryptionType { AES128 = 0, SAMPLE_AES = 1 }


	/**State of HLS ID3 Segment Tagging */
	export enum HlsId3SegmentTaggingState { DISABLED = 0, ENABLED = 1 }


	/**When set to "standard", an I-Frame only playlist will be written out for each video output in the output group. This I-Frame only playlist will contain byte range offsets pointing to the I-frame(s) in each segment. */
	export enum IFrameOnlyPlaylistType { DISABLED = 0, STANDARD = 1 }


	/**Input Loss Action For Hls Out */
	export enum InputLossActionForHlsOut { EMIT_OUTPUT = 0, PAUSE_OUTPUT = 1 }


	/**Hls Iv In Manifest */
	export enum HlsIvInManifest { EXCLUDE = 0, INCLUDE = 1 }


	/**Hls Iv Source */
	export enum HlsIvSource { EXPLICIT = 0, FOLLOWS_SEGMENT_NUMBER = 1 }


	/**Key Provider Settings */
	export interface KeyProviderSettings {

		/**Static Key Settings */
		StaticKeySettings?: StaticKeySettings;
	}


	/**Hls Manifest Compression */
	export enum HlsManifestCompression { GZIP = 0, NONE = 1 }


	/**Hls Manifest Duration Format */
	export enum HlsManifestDurationFormat { FLOATING_POINT = 0, INTEGER = 1 }


	/**Hls Mode */
	export enum HlsMode { LIVE = 0, VOD = 1 }


	/**Hls Output Selection */
	export enum HlsOutputSelection { MANIFESTS_AND_SEGMENTS = 0, SEGMENTS_ONLY = 1 }


	/**Hls Program Date Time */
	export enum HlsProgramDateTime { EXCLUDE = 0, INCLUDE = 1 }


	/**Hls Redundant Manifest */
	export enum HlsRedundantManifest { DISABLED = 0, ENABLED = 1 }


	/**Hls Segmentation Mode */
	export enum HlsSegmentationMode { USE_INPUT_SEGMENTATION = 0, USE_SEGMENT_DURATION = 1 }


	/**Hls Stream Inf Resolution */
	export enum HlsStreamInfResolution { EXCLUDE = 0, INCLUDE = 1 }


	/**Hls Timed Metadata Id3 Frame */
	export enum HlsTimedMetadataId3Frame { NONE = 0, PRIV = 1, TDRL = 2 }


	/**Hls Ts File Mode */
	export enum HlsTsFileMode { SEGMENTED_FILES = 0, SINGLE_FILE = 1 }


	/**Hls Group Settings */
	export interface HlsGroupSettings {

		/**Placeholder documentation for __listOfHlsAdMarkers */
		AdMarkers?: Array<HlsAdMarkers>;

		/**Placeholder documentation for __string */
		BaseUrlContent?: string;

		/**Placeholder documentation for __string */
		BaseUrlContent1?: string;

		/**Placeholder documentation for __string */
		BaseUrlManifest?: string;

		/**Placeholder documentation for __string */
		BaseUrlManifest1?: string;

		/**Placeholder documentation for __listOfCaptionLanguageMapping */
		CaptionLanguageMappings?: Array<CaptionLanguageMapping>;

		/**Hls Caption Language Setting */
		CaptionLanguageSetting?: HlsGroupSettingsCaptionLanguageSetting;

		/**Hls Client Cache */
		ClientCache?: HlsGroupSettingsClientCache;

		/**Hls Codec Specification */
		CodecSpecification?: HlsGroupSettingsCodecSpecification;

		/**
		 * Placeholder documentation for __stringMin32Max32
		 * Max length: 32
		 * Min length: 32
		 */
		ConstantIv?: string;

		/**Reference to an OutputDestination ID defined in the channel */
		Destination: OutputLocationRef;

		/**Hls Directory Structure */
		DirectoryStructure?: HlsGroupSettingsDirectoryStructure;

		/**Hls Encryption Type */
		EncryptionType?: HlsGroupSettingsEncryptionType;

		/**Hls Cdn Settings */
		HlsCdnSettings?: HlsCdnSettings;

		/**State of HLS ID3 Segment Tagging */
		HlsId3SegmentTagging?: HlsGroupSettingsHlsId3SegmentTagging;

		/**When set to "standard", an I-Frame only playlist will be written out for each video output in the output group. This I-Frame only playlist will contain byte range offsets pointing to the I-frame(s) in each segment. */
		IFrameOnlyPlaylists?: HlsGroupSettingsIFrameOnlyPlaylists;

		/**
		 * Placeholder documentation for __integerMin3
		 * Minimum: 3
		 */
		IndexNSegments?: number;

		/**Input Loss Action For Hls Out */
		InputLossAction?: HlsGroupSettingsInputLossAction;

		/**Hls Iv In Manifest */
		IvInManifest?: HlsGroupSettingsIvInManifest;

		/**Hls Iv Source */
		IvSource?: HlsGroupSettingsIvSource;

		/**
		 * Placeholder documentation for __integerMin1
		 * Minimum: 1
		 */
		KeepSegments?: number;

		/**Placeholder documentation for __string */
		KeyFormat?: string;

		/**Placeholder documentation for __string */
		KeyFormatVersions?: string;

		/**Key Provider Settings */
		KeyProviderSettings?: KeyProviderSettings;

		/**Hls Manifest Compression */
		ManifestCompression?: HlsGroupSettingsManifestCompression;

		/**Hls Manifest Duration Format */
		ManifestDurationFormat?: HlsGroupSettingsManifestDurationFormat;

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		MinSegmentLength?: number;

		/**Hls Mode */
		Mode?: HlsGroupSettingsMode;

		/**Hls Output Selection */
		OutputSelection?: HlsGroupSettingsOutputSelection;

		/**Hls Program Date Time */
		ProgramDateTime?: HlsGroupSettingsProgramDateTime;

		/**
		 * Placeholder documentation for __integerMin0Max3600
		 * Minimum: 0
		 * Maximum: 3600
		 */
		ProgramDateTimePeriod?: number;

		/**Hls Redundant Manifest */
		RedundantManifest?: HlsGroupSettingsRedundantManifest;

		/**
		 * Placeholder documentation for __integerMin1
		 * Minimum: 1
		 */
		SegmentLength?: number;

		/**Hls Segmentation Mode */
		SegmentationMode?: HlsGroupSettingsSegmentationMode;

		/**
		 * Placeholder documentation for __integerMin1
		 * Minimum: 1
		 */
		SegmentsPerSubdirectory?: number;

		/**Hls Stream Inf Resolution */
		StreamInfResolution?: HlsGroupSettingsStreamInfResolution;

		/**Hls Timed Metadata Id3 Frame */
		TimedMetadataId3Frame?: HlsGroupSettingsTimedMetadataId3Frame;

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		TimedMetadataId3Period?: number;

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		TimestampDeltaMilliseconds?: number;

		/**Hls Ts File Mode */
		TsFileMode?: HlsGroupSettingsTsFileMode;
	}

	export enum HlsGroupSettingsCaptionLanguageSetting { INSERT = 0, NONE = 1, OMIT = 2 }

	export enum HlsGroupSettingsClientCache { DISABLED = 0, ENABLED = 1 }

	export enum HlsGroupSettingsCodecSpecification { RFC_4281 = 0, RFC_6381 = 1 }

	export enum HlsGroupSettingsDirectoryStructure { SINGLE_DIRECTORY = 0, SUBDIRECTORY_PER_STREAM = 1 }

	export enum HlsGroupSettingsEncryptionType { AES128 = 0, SAMPLE_AES = 1 }

	export enum HlsGroupSettingsHlsId3SegmentTagging { DISABLED = 0, ENABLED = 1 }

	export enum HlsGroupSettingsIFrameOnlyPlaylists { DISABLED = 0, STANDARD = 1 }

	export enum HlsGroupSettingsInputLossAction { EMIT_OUTPUT = 0, PAUSE_OUTPUT = 1 }

	export enum HlsGroupSettingsIvInManifest { EXCLUDE = 0, INCLUDE = 1 }

	export enum HlsGroupSettingsIvSource { EXPLICIT = 0, FOLLOWS_SEGMENT_NUMBER = 1 }

	export enum HlsGroupSettingsManifestCompression { GZIP = 0, NONE = 1 }

	export enum HlsGroupSettingsManifestDurationFormat { FLOATING_POINT = 0, INTEGER = 1 }

	export enum HlsGroupSettingsMode { LIVE = 0, VOD = 1 }

	export enum HlsGroupSettingsOutputSelection { MANIFESTS_AND_SEGMENTS = 0, SEGMENTS_ONLY = 1 }

	export enum HlsGroupSettingsProgramDateTime { EXCLUDE = 0, INCLUDE = 1 }

	export enum HlsGroupSettingsRedundantManifest { DISABLED = 0, ENABLED = 1 }

	export enum HlsGroupSettingsSegmentationMode { USE_INPUT_SEGMENTATION = 0, USE_SEGMENT_DURATION = 1 }

	export enum HlsGroupSettingsStreamInfResolution { EXCLUDE = 0, INCLUDE = 1 }

	export enum HlsGroupSettingsTimedMetadataId3Frame { NONE = 0, PRIV = 1, TDRL = 2 }

	export enum HlsGroupSettingsTsFileMode { SEGMENTED_FILES = 0, SINGLE_FILE = 1 }


	/**Hls H265 Packaging Type */
	export enum HlsH265PackagingType { HEV1 = 0, HVC1 = 1 }


	/**Settings for the action to insert a user-defined ID3 tag in each HLS segment */
	export interface HlsId3SegmentTaggingScheduleActionSettings {

		/**Placeholder documentation for __string */
		Tag: string;
	}


	/**Hls Input Settings */
	export interface HlsInputSettings {

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		Bandwidth?: number;

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		BufferSegments?: number;

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		Retries?: number;

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		RetryInterval?: number;
	}


	/**Hls Media Store Storage Class */
	export enum HlsMediaStoreStorageClass { TEMPORAL = 0 }


	/**Hls Settings */
	export interface HlsSettings {

		/**Audio Only Hls Settings */
		AudioOnlyHlsSettings?: AudioOnlyHlsSettings;

		/**Fmp4 Hls Settings */
		Fmp4HlsSettings?: Fmp4HlsSettings;

		/**Standard Hls Settings */
		StandardHlsSettings?: StandardHlsSettings;
	}


	/**Hls Output Settings */
	export interface HlsOutputSettings {

		/**Hls H265 Packaging Type */
		H265PackagingType?: HlsOutputSettingsH265PackagingType;

		/**Hls Settings */
		HlsSettings: HlsSettings;

		/**
		 * Placeholder documentation for __stringMin1
		 * Min length: 1
		 */
		NameModifier?: string;

		/**Placeholder documentation for __string */
		SegmentModifier?: string;
	}

	export enum HlsOutputSettingsH265PackagingType { HEV1 = 0, HVC1 = 1 }


	/**Standard Hls Settings */
	export interface StandardHlsSettings {

		/**Placeholder documentation for __string */
		AudioRenditionSets?: string;

		/**Settings information for the .m3u8 container */
		M3u8Settings: M3u8Settings;
	}


	/**Settings for the action to emit HLS metadata */
	export interface HlsTimedMetadataScheduleActionSettings {

		/**Placeholder documentation for __string */
		Id3: string;
	}


	/**Hls Webdav Http Transfer Mode */
	export enum HlsWebdavHttpTransferMode { CHUNKED = 0, NON_CHUNKED = 1 }


	/**Live Event input parameters. There can be multiple inputs in a single Live Event. */
	export interface InputSettings {

		/**Placeholder documentation for __listOfAudioSelector */
		AudioSelectors?: Array<AudioSelector>;

		/**Placeholder documentation for __listOfCaptionSelector */
		CaptionSelectors?: Array<CaptionSelector>;

		/**Input Deblock Filter */
		DeblockFilter?: InputSettingsDeblockFilter;

		/**Input Denoise Filter */
		DenoiseFilter?: InputSettingsDenoiseFilter;

		/**
		 * Placeholder documentation for __integerMin1Max5
		 * Minimum: 1
		 * Maximum: 5
		 */
		FilterStrength?: number;

		/**Input Filter */
		InputFilter?: InputSettingsInputFilter;

		/**Network source to transcode. Must be accessible to the Elemental Live node that is running the live event through a network connection. */
		NetworkInputSettings?: NetworkInputSettings;

		/**Smpte2038 Data Preference */
		Smpte2038DataPreference?: InputSettingsSmpte2038DataPreference;

		/**Input Source End Behavior */
		SourceEndBehavior?: InputSettingsSourceEndBehavior;

		/**Specifies a particular video stream within an input source. An input may have only a single video selector. */
		VideoSelector?: VideoSelector;
	}

	export enum InputSettingsDeblockFilter { DISABLED = 0, ENABLED = 1 }

	export enum InputSettingsDenoiseFilter { DISABLED = 0, ENABLED = 1 }

	export enum InputSettingsInputFilter { AUTO = 0, DISABLED = 1, FORCED = 2 }

	export enum InputSettingsSmpte2038DataPreference { IGNORE = 0, PREFER = 1 }

	export enum InputSettingsSourceEndBehavior { CONTINUE = 0, LOOP = 1 }


	/**Input Channel Level */
	export interface InputChannelLevel {

		/**
		 * Placeholder documentation for __integerMinNegative60Max6
		 * Minimum: -60
		 * Maximum: 6
		 */
		Gain: number;

		/**
		 * Placeholder documentation for __integerMin0Max15
		 * Minimum: 0
		 * Maximum: 15
		 */
		InputChannel: number;
	}


	/**Documentation update needed */
	export enum InputTimecodeSource { ZEROBASED = 0, EMBEDDED = 1 }


	/**Settings to identify the start of the clip. */
	export interface StartTimecode {

		/**Placeholder documentation for __string */
		Timecode?: string;
	}


	/**Settings to identify the end of the clip. */
	export interface StopTimecode {

		/**If you specify a StopTimecode in an input (in order to clip the file), you can specify if you want the clip to exclude (the default) or include the frame specified by the timecode. */
		LastFrameClippingBehavior?: StopTimecodeLastFrameClippingBehavior;

		/**Placeholder documentation for __string */
		Timecode?: string;
	}

	export enum StopTimecodeLastFrameClippingBehavior { EXCLUDE_LAST_FRAME = 0, INCLUDE_LAST_FRAME = 1 }


	/**Settings to let you create a clip of the file input, in order to set up the input to ingest only a portion of the file. */
	export interface InputClippingSettings {

		/**Documentation update needed */
		InputTimecodeSource: InputClippingSettingsInputTimecodeSource;

		/**Settings to identify the start of the clip. */
		StartTimecode?: StartTimecode;

		/**Settings to identify the end of the clip. */
		StopTimecode?: StopTimecode;
	}

	export enum InputClippingSettingsInputTimecodeSource { ZEROBASED = 0, EMBEDDED = 1 }


	/**Input Deblock Filter */
	export enum InputDeblockFilter { DISABLED = 0, ENABLED = 1 }


	/**Input Denoise Filter */
	export enum InputDenoiseFilter { DISABLED = 0, ENABLED = 1 }


	/**The properties for a VPC type input destination. */
	export interface InputDestinationVpc {

		/**Placeholder documentation for __string */
		AvailabilityZone?: string;

		/**Placeholder documentation for __string */
		NetworkInterfaceId?: string;
	}


	/**The settings for a PUSH type input. */
	export interface InputDestination {

		/**Placeholder documentation for __string */
		Ip?: string;

		/**Placeholder documentation for __string */
		Port?: string;

		/**Placeholder documentation for __string */
		Url?: string;

		/**The properties for a VPC type input destination. */
		Vpc?: InputDestinationVpc;
	}


	/**The source at the input device that is currently active. */
	export enum InputDeviceActiveInput { HDMI = 0, SDI = 1 }


	/**Configurable settings for the input device. */
	export interface InputDeviceConfigurableSettings {

		/**The source to activate (use) from the input device. */
		ConfiguredInput?: InputDeviceConfigurableSettingsConfiguredInput;

		/**Placeholder documentation for __integer */
		MaxBitrate?: number;
	}

	export enum InputDeviceConfigurableSettingsConfiguredInput { AUTO = 0, HDMI = 1, SDI = 2 }


	/**The state of the input device. */
	export enum InputDeviceState { IDLE = 0, STREAMING = 1 }


	/**The scan type of the video source. */
	export enum InputDeviceScanType { INTERLACED = 0, PROGRESSIVE = 1 }


	/**Specifies whether the input device has been configured (outside of MediaLive) to use a dynamic IP address assignment (DHCP) or a static IP address. */
	export enum InputDeviceIpScheme { STATIC = 0, DHCP = 1 }


	/**Details of the input device. */
	export interface InputDeviceSummary {

		/**Placeholder documentation for __string */
		Arn?: string;

		/**The state of the connection between the input device and AWS. */
		ConnectionState?: InputDeviceSummaryConnectionState;

		/**The status of the action to synchronize the device configuration. If you change the configuration of the input device (for example, the maximum bitrate), MediaLive sends the new data to the device. The device might not update itself immediately. SYNCED means the device has updated its configuration. SYNCING means that it has not updated its configuration. */
		DeviceSettingsSyncState?: InputDeviceSummaryDeviceSettingsSyncState;

		/**Settings that describe the active source from the input device, and the video characteristics of that source. */
		HdDeviceSettings?: InputDeviceHdSettings;

		/**Placeholder documentation for __string */
		Id?: string;

		/**Placeholder documentation for __string */
		MacAddress?: string;

		/**Placeholder documentation for __string */
		Name?: string;

		/**The network settings for the input device. */
		NetworkSettings?: InputDeviceNetworkSettings;

		/**Placeholder documentation for __string */
		SerialNumber?: string;

		/**The type of the input device. For an AWS Elemental Link device that outputs resolutions up to 1080, choose "HD". */
		Type?: InputDeviceSummaryType;
	}

	export enum InputDeviceSummaryConnectionState { DISCONNECTED = 0, CONNECTED = 1 }

	export enum InputDeviceSummaryDeviceSettingsSyncState { SYNCED = 0, SYNCING = 1 }

	export enum InputDeviceSummaryType { HD = 0 }


	/**Input Filter */
	export enum InputFilter { AUTO = 0, DISABLED = 1, FORCED = 2 }


	/**Input Loss Action For Ms Smooth Out */
	export enum InputLossActionForMsSmoothOut { EMIT_OUTPUT = 0, PAUSE_OUTPUT = 1 }


	/**Input Loss Action For Rtmp Out */
	export enum InputLossActionForRtmpOut { EMIT_OUTPUT = 0, PAUSE_OUTPUT = 1 }


	/**Input Loss Action For Udp Out */
	export enum InputLossActionForUdpOut { DROP_PROGRAM = 0, DROP_TS = 1, EMIT_PROGRAM = 2 }


	/**Input Loss Image Type */
	export enum InputLossImageType { COLOR = 0, SLATE = 1 }


	/**Network source to transcode. Must be accessible to the Elemental Live node that is running the live event through a network connection. */
	export interface NetworkInputSettings {

		/**Hls Input Settings */
		HlsInputSettings?: HlsInputSettings;

		/**Network Input Server Validation */
		ServerValidation?: NetworkInputSettingsServerValidation;
	}

	export enum NetworkInputSettingsServerValidation { CHECK_CRYPTOGRAPHY_AND_VALIDATE_NAME = 0, CHECK_CRYPTOGRAPHY_ONLY = 1 }


	/**Smpte2038 Data Preference */
	export enum Smpte2038DataPreference { IGNORE = 0, PREFER = 1 }


	/**Input Source End Behavior */
	export enum InputSourceEndBehavior { CONTINUE = 0, LOOP = 1 }


	/**Specifies a particular video stream within an input source. An input may have only a single video selector. */
	export interface VideoSelector {

		/**Video Selector Color Space */
		ColorSpace?: VideoSelectorColorSpace;

		/**Video Selector Color Space Usage */
		ColorSpaceUsage?: VideoSelectorColorSpaceUsage;

		/**Video Selector Settings */
		SelectorSettings?: VideoSelectorSettings;
	}

	export enum VideoSelectorColorSpace { FOLLOW = 0, REC_601 = 1, REC_709 = 2 }

	export enum VideoSelectorColorSpaceUsage { FALLBACK = 0, FORCE = 1 }


	/**The settings for a PULL type input. */
	export interface InputSource {

		/**Placeholder documentation for __string */
		PasswordParam?: string;

		/**Placeholder documentation for __string */
		Url?: string;

		/**Placeholder documentation for __string */
		Username?: string;
	}


	/**Settings for the "switch input" action: to switch from ingesting one input to ingesting another input. */
	export interface InputSwitchScheduleActionSettings {

		/**Placeholder documentation for __string */
		InputAttachmentNameReference: string;

		/**Settings to let you create a clip of the file input, in order to set up the input to ingest only a portion of the file. */
		InputClippingSettings?: InputClippingSettings;

		/**Placeholder documentation for __listOf__string */
		UrlPath?: Array<__string>;
	}


	/**Whitelist rule */
	export interface InputWhitelistRule {

		/**Placeholder documentation for __string */
		Cidr?: string;
	}


	/**Static Key Settings */
	export interface StaticKeySettings {

		/**Input Location */
		KeyProviderServer?: InputLocation;

		/**
		 * Placeholder documentation for __stringMin32Max32
		 * Max length: 32
		 * Min length: 32
		 */
		StaticKeyValue: string;
	}


	/**If you specify a StopTimecode in an input (in order to clip the file), you can specify if you want the clip to exclude (the default) or include the frame specified by the timecode. */
	export enum LastFrameClippingBehavior { EXCLUDE_LAST_FRAME = 0, INCLUDE_LAST_FRAME = 1 }


	/**M2ts Absent Input Audio Behavior */
	export enum M2tsAbsentInputAudioBehavior { DROP = 0, ENCODE_SILENCE = 1 }


	/**M2ts Arib */
	export enum M2tsArib { DISABLED = 0, ENABLED = 1 }


	/**M2ts Arib Captions Pid Control */
	export enum M2tsAribCaptionsPidControl { AUTO = 0, USE_CONFIGURED = 1 }


	/**M2ts Audio Buffer Model */
	export enum M2tsAudioBufferModel { ATSC = 0, DVB = 1 }


	/**M2ts Audio Interval */
	export enum M2tsAudioInterval { VIDEO_AND_FIXED_INTERVALS = 0, VIDEO_INTERVAL = 1 }


	/**M2ts Audio Stream Type */
	export enum M2tsAudioStreamType { ATSC = 0, DVB = 1 }


	/**M2ts Buffer Model */
	export enum M2tsBufferModel { MULTIPLEX = 0, NONE = 1 }


	/**M2ts Cc Descriptor */
	export enum M2tsCcDescriptor { DISABLED = 0, ENABLED = 1 }


	/**M2ts Ebif Control */
	export enum M2tsEbifControl { NONE = 0, PASSTHROUGH = 1 }


	/**M2ts Ebp Placement */
	export enum M2tsEbpPlacement { VIDEO_AND_AUDIO_PIDS = 0, VIDEO_PID = 1 }


	/**M2ts Es Rate In Pes */
	export enum M2tsEsRateInPes { EXCLUDE = 0, INCLUDE = 1 }


	/**M2ts Klv */
	export enum M2tsKlv { NONE = 0, PASSTHROUGH = 1 }


	/**M2ts Nielsen Id3 Behavior */
	export enum M2tsNielsenId3Behavior { NO_PASSTHROUGH = 0, PASSTHROUGH = 1 }


	/**M2ts Pcr Control */
	export enum M2tsPcrControl { CONFIGURED_PCR_PERIOD = 0, PCR_EVERY_PES_PACKET = 1 }


	/**M2ts Rate Mode */
	export enum M2tsRateMode { CBR = 0, VBR = 1 }


	/**M2ts Scte35 Control */
	export enum M2tsScte35Control { NONE = 0, PASSTHROUGH = 1 }


	/**M2ts Segmentation Markers */
	export enum M2tsSegmentationMarkers { EBP = 0, EBP_LEGACY = 1, NONE = 2, PSI_SEGSTART = 3, RAI_ADAPT = 4, RAI_SEGSTART = 5 }


	/**M2ts Segmentation Style */
	export enum M2tsSegmentationStyle { MAINTAIN_CADENCE = 0, RESET_CADENCE = 1 }


	/**M2ts Timed Metadata Behavior */
	export enum M2tsTimedMetadataBehavior { NO_PASSTHROUGH = 0, PASSTHROUGH = 1 }


	/**M3u8 Nielsen Id3 Behavior */
	export enum M3u8NielsenId3Behavior { NO_PASSTHROUGH = 0, PASSTHROUGH = 1 }


	/**M3u8 Pcr Control */
	export enum M3u8PcrControl { CONFIGURED_PCR_PERIOD = 0, PCR_EVERY_PES_PACKET = 1 }


	/**M3u8 Scte35 Behavior */
	export enum M3u8Scte35Behavior { NO_PASSTHROUGH = 0, PASSTHROUGH = 1 }


	/**M3u8 Timed Metadata Behavior */
	export enum M3u8TimedMetadataBehavior { NO_PASSTHROUGH = 0, PASSTHROUGH = 1 }


	/**Settings information for the .m3u8 container */
	export interface M3u8Settings {

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		AudioFramesPerPes?: number;

		/**Placeholder documentation for __string */
		AudioPids?: string;

		/**Placeholder documentation for __string */
		EcmPid?: string;

		/**M3u8 Nielsen Id3 Behavior */
		NielsenId3Behavior?: M3u8SettingsNielsenId3Behavior;

		/**
		 * Placeholder documentation for __integerMin0Max1000
		 * Minimum: 0
		 * Maximum: 1000
		 */
		PatInterval?: number;

		/**M3u8 Pcr Control */
		PcrControl?: M3u8SettingsPcrControl;

		/**
		 * Placeholder documentation for __integerMin0Max500
		 * Minimum: 0
		 * Maximum: 500
		 */
		PcrPeriod?: number;

		/**Placeholder documentation for __string */
		PcrPid?: string;

		/**
		 * Placeholder documentation for __integerMin0Max1000
		 * Minimum: 0
		 * Maximum: 1000
		 */
		PmtInterval?: number;

		/**Placeholder documentation for __string */
		PmtPid?: string;

		/**
		 * Placeholder documentation for __integerMin0Max65535
		 * Minimum: 0
		 * Maximum: 65535
		 */
		ProgramNum?: number;

		/**M3u8 Scte35 Behavior */
		Scte35Behavior?: M3u8SettingsScte35Behavior;

		/**Placeholder documentation for __string */
		Scte35Pid?: string;

		/**M3u8 Timed Metadata Behavior */
		TimedMetadataBehavior?: M3u8SettingsTimedMetadataBehavior;

		/**Placeholder documentation for __string */
		TimedMetadataPid?: string;

		/**
		 * Placeholder documentation for __integerMin0Max65535
		 * Minimum: 0
		 * Maximum: 65535
		 */
		TransportStreamId?: number;

		/**Placeholder documentation for __string */
		VideoPid?: string;
	}

	export enum M3u8SettingsNielsenId3Behavior { NO_PASSTHROUGH = 0, PASSTHROUGH = 1 }

	export enum M3u8SettingsPcrControl { CONFIGURED_PCR_PERIOD = 0, PCR_EVERY_PES_PACKET = 1 }

	export enum M3u8SettingsScte35Behavior { NO_PASSTHROUGH = 0, PASSTHROUGH = 1 }

	export enum M3u8SettingsTimedMetadataBehavior { NO_PASSTHROUGH = 0, PASSTHROUGH = 1 }


	/**The settings for a MediaConnect Flow. */
	export interface MediaConnectFlow {

		/**Placeholder documentation for __string */
		FlowArn?: string;
	}


	/**Media Package Group Settings */
	export interface MediaPackageGroupSettings {

		/**Reference to an OutputDestination ID defined in the channel */
		Destination: OutputLocationRef;
	}


	/**MediaPackage Output Destination Settings */
	export interface MediaPackageOutputDestinationSettings {

		/**
		 * Placeholder documentation for __stringMin1
		 * Min length: 1
		 */
		ChannelId?: string;
	}


	/**Mp2 Coding Mode */
	export enum Mp2CodingMode { CODING_MODE_1_0 = 0, CODING_MODE_2_0 = 1 }


	/**Smooth Group Audio Only Timecode Control */
	export enum SmoothGroupAudioOnlyTimecodeControl { PASSTHROUGH = 0, USE_CONFIGURED_CLOCK = 1 }


	/**Smooth Group Certificate Mode */
	export enum SmoothGroupCertificateMode { SELF_SIGNED = 0, VERIFY_AUTHENTICITY = 1 }


	/**Smooth Group Event Id Mode */
	export enum SmoothGroupEventIdMode { NO_EVENT_ID = 0, USE_CONFIGURED = 1, USE_TIMESTAMP = 2 }


	/**Smooth Group Event Stop Behavior */
	export enum SmoothGroupEventStopBehavior { NONE = 0, SEND_EOS = 1 }


	/**Smooth Group Segmentation Mode */
	export enum SmoothGroupSegmentationMode { USE_INPUT_SEGMENTATION = 0, USE_SEGMENT_DURATION = 1 }


	/**Smooth Group Sparse Track Type */
	export enum SmoothGroupSparseTrackType { NONE = 0, SCTE_35 = 1, SCTE_35_WITHOUT_SEGMENTATION = 2 }


	/**Smooth Group Stream Manifest Behavior */
	export enum SmoothGroupStreamManifestBehavior { DO_NOT_SEND = 0, SEND = 1 }


	/**Smooth Group Timestamp Offset Mode */
	export enum SmoothGroupTimestampOffsetMode { USE_CONFIGURED_OFFSET = 0, USE_EVENT_START_DATE = 1 }


	/**Ms Smooth Group Settings */
	export interface MsSmoothGroupSettings {

		/**Placeholder documentation for __string */
		AcquisitionPointId?: string;

		/**Smooth Group Audio Only Timecode Control */
		AudioOnlyTimecodeControl?: MsSmoothGroupSettingsAudioOnlyTimecodeControl;

		/**Smooth Group Certificate Mode */
		CertificateMode?: MsSmoothGroupSettingsCertificateMode;

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		ConnectionRetryInterval?: number;

		/**Reference to an OutputDestination ID defined in the channel */
		Destination: OutputLocationRef;

		/**Placeholder documentation for __string */
		EventId?: string;

		/**Smooth Group Event Id Mode */
		EventIdMode?: MsSmoothGroupSettingsEventIdMode;

		/**Smooth Group Event Stop Behavior */
		EventStopBehavior?: MsSmoothGroupSettingsEventStopBehavior;

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		FilecacheDuration?: number;

		/**
		 * Placeholder documentation for __integerMin1
		 * Minimum: 1
		 */
		FragmentLength?: number;

		/**Input Loss Action For Ms Smooth Out */
		InputLossAction?: MsSmoothGroupSettingsInputLossAction;

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		NumRetries?: number;

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		RestartDelay?: number;

		/**Smooth Group Segmentation Mode */
		SegmentationMode?: MsSmoothGroupSettingsSegmentationMode;

		/**
		 * Placeholder documentation for __integerMin0Max10000
		 * Minimum: 0
		 * Maximum: 10000
		 */
		SendDelayMs?: number;

		/**Smooth Group Sparse Track Type */
		SparseTrackType?: MsSmoothGroupSettingsSparseTrackType;

		/**Smooth Group Stream Manifest Behavior */
		StreamManifestBehavior?: MsSmoothGroupSettingsStreamManifestBehavior;

		/**Placeholder documentation for __string */
		TimestampOffset?: string;

		/**Smooth Group Timestamp Offset Mode */
		TimestampOffsetMode?: MsSmoothGroupSettingsTimestampOffsetMode;
	}

	export enum MsSmoothGroupSettingsAudioOnlyTimecodeControl { PASSTHROUGH = 0, USE_CONFIGURED_CLOCK = 1 }

	export enum MsSmoothGroupSettingsCertificateMode { SELF_SIGNED = 0, VERIFY_AUTHENTICITY = 1 }

	export enum MsSmoothGroupSettingsEventIdMode { NO_EVENT_ID = 0, USE_CONFIGURED = 1, USE_TIMESTAMP = 2 }

	export enum MsSmoothGroupSettingsEventStopBehavior { NONE = 0, SEND_EOS = 1 }

	export enum MsSmoothGroupSettingsInputLossAction { EMIT_OUTPUT = 0, PAUSE_OUTPUT = 1 }

	export enum MsSmoothGroupSettingsSegmentationMode { USE_INPUT_SEGMENTATION = 0, USE_SEGMENT_DURATION = 1 }

	export enum MsSmoothGroupSettingsSparseTrackType { NONE = 0, SCTE_35 = 1, SCTE_35_WITHOUT_SEGMENTATION = 2 }

	export enum MsSmoothGroupSettingsStreamManifestBehavior { DO_NOT_SEND = 0, SEND = 1 }

	export enum MsSmoothGroupSettingsTimestampOffsetMode { USE_CONFIGURED_OFFSET = 0, USE_EVENT_START_DATE = 1 }


	/**Ms Smooth H265 Packaging Type */
	export enum MsSmoothH265PackagingType { HEV1 = 0, HVC1 = 1 }


	/**Ms Smooth Output Settings */
	export interface MsSmoothOutputSettings {

		/**Ms Smooth H265 Packaging Type */
		H265PackagingType?: MsSmoothOutputSettingsH265PackagingType;

		/**Placeholder documentation for __string */
		NameModifier?: string;
	}

	export enum MsSmoothOutputSettingsH265PackagingType { HEV1 = 0, HVC1 = 1 }


	/**Multiplex MediaConnect output destination settings. */
	export interface MultiplexMediaConnectOutputDestinationSettings {

		/**
		 * Placeholder documentation for __stringMin1
		 * Min length: 1
		 */
		EntitlementArn?: string;
	}


	/**Multiplex output destination settings */
	export interface MultiplexOutputDestination {

		/**Multiplex MediaConnect output destination settings. */
		MediaConnectSettings?: MultiplexMediaConnectOutputDestinationSettings;
	}


	/**Multiplex Output Settings */
	export interface MultiplexOutputSettings {

		/**Reference to an OutputDestination ID defined in the channel */
		Destination: OutputLocationRef;
	}


	/**Multiplex Program Input Destination Settings for outputting a Channel to a Multiplex */
	export interface MultiplexProgramChannelDestinationSettings {

		/**
		 * Placeholder documentation for __stringMin1
		 * Min length: 1
		 */
		MultiplexId?: string;

		/**
		 * Placeholder documentation for __stringMin1
		 * Min length: 1
		 */
		ProgramName?: string;
	}


	/**Placeholder documentation for MultiplexProgramSummary */
	export interface MultiplexProgramSummary {

		/**Placeholder documentation for __string */
		ChannelId?: string;

		/**Placeholder documentation for __string */
		ProgramName?: string;
	}


	/**Contains summary configuration for a Multiplex event. */
	export interface MultiplexSettingsSummary {

		/**
		 * Placeholder documentation for __integerMin1000000Max100000000
		 * Minimum: 1000000
		 * Maximum: 100000000
		 */
		TransportStreamBitrate?: number;
	}


	/**Statmux rate control settings */
	export interface MultiplexStatmuxVideoSettings {

		/**
		 * Placeholder documentation for __integerMin100000Max100000000
		 * Minimum: 100000
		 * Maximum: 100000000
		 */
		MaximumBitrate?: number;

		/**
		 * Placeholder documentation for __integerMin100000Max100000000
		 * Minimum: 100000
		 * Maximum: 100000000
		 */
		MinimumBitrate?: number;
	}


	/**Placeholder documentation for MultiplexSummary */
	export interface MultiplexSummary {

		/**Placeholder documentation for __string */
		Arn?: string;

		/**Placeholder documentation for __listOf__string */
		AvailabilityZones?: Array<__string>;

		/**Placeholder documentation for __string */
		Id?: string;

		/**Contains summary configuration for a Multiplex event. */
		MultiplexSettings?: MultiplexSettingsSummary;

		/**Placeholder documentation for __string */
		Name?: string;

		/**Placeholder documentation for __integer */
		PipelinesRunningCount?: number;

		/**Placeholder documentation for __integer */
		ProgramCount?: number;

		/**The current state of the multiplex. */
		State?: MultiplexSummaryState;

		/**Placeholder documentation for Tags */
		Tags?: Tags;
	}

	export enum MultiplexSummaryState { CREATING = 0, CREATE_FAILED = 1, IDLE = 2, STARTING = 3, RUNNING = 4, RECOVERING = 5, STOPPING = 6, DELETING = 7, DELETED = 8 }


	/**Network Input Server Validation */
	export enum NetworkInputServerValidation { CHECK_CRYPTOGRAPHY_AND_VALIDATE_NAME = 0, CHECK_CRYPTOGRAPHY_ONLY = 1 }


	/**State of Nielsen PCM to ID3 tagging */
	export enum NielsenPcmToId3TaggingState { DISABLED = 0, ENABLED = 1 }


	/**Reserved resources available for purchase */
	export interface Offering {

		/**Placeholder documentation for __string */
		Arn?: string;

		/**Placeholder documentation for __string */
		CurrencyCode?: string;

		/**Placeholder documentation for __integer */
		Duration?: number;

		/**Units for duration, e.g. 'MONTHS' */
		DurationUnits?: OfferingDurationUnits;

		/**Placeholder documentation for __double */
		FixedPrice?: number;

		/**Placeholder documentation for __string */
		OfferingDescription?: string;

		/**Placeholder documentation for __string */
		OfferingId?: string;

		/**Offering type, e.g. 'NO_UPFRONT' */
		OfferingType?: OfferingOfferingType;

		/**Placeholder documentation for __string */
		Region?: string;

		/**Resource configuration (codec, resolution, bitrate, ...) */
		ResourceSpecification?: ReservationResourceSpecification;

		/**Placeholder documentation for __double */
		UsagePrice?: number;
	}

	export enum OfferingDurationUnits { MONTHS = 0 }

	export enum OfferingOfferingType { NO_UPFRONT = 0 }


	/**Output Settings */
	export interface OutputSettings {

		/**Archive Output Settings */
		ArchiveOutputSettings?: ArchiveOutputSettings;

		/**Frame Capture Output Settings */
		FrameCaptureOutputSettings?: FrameCaptureOutputSettings;

		/**Hls Output Settings */
		HlsOutputSettings?: HlsOutputSettings;

		/**Media Package Output Settings */
		MediaPackageOutputSettings?: MediaPackageOutputSettings;

		/**Ms Smooth Output Settings */
		MsSmoothOutputSettings?: MsSmoothOutputSettings;

		/**Multiplex Output Settings */
		MultiplexOutputSettings?: MultiplexOutputSettings;

		/**Rtmp Output Settings */
		RtmpOutputSettings?: RtmpOutputSettings;

		/**Udp Output Settings */
		UdpOutputSettings?: UdpOutputSettings;
	}


	/**Output settings. There can be multiple outputs within a group. */
	export interface Output {

		/**Placeholder documentation for __listOf__string */
		AudioDescriptionNames?: Array<__string>;

		/**Placeholder documentation for __listOf__string */
		CaptionDescriptionNames?: Array<__string>;

		/**
		 * Placeholder documentation for __stringMin1Max255
		 * Max length: 255
		 * Min length: 1
		 */
		OutputName?: string;

		/**Output Settings */
		OutputSettings: OutputSettings;

		/**Placeholder documentation for __string */
		VideoDescriptionName?: string;
	}


	/**Placeholder documentation for OutputDestinationSettings */
	export interface OutputDestinationSettings {

		/**Placeholder documentation for __string */
		PasswordParam?: string;

		/**Placeholder documentation for __string */
		StreamName?: string;

		/**Placeholder documentation for __string */
		Url?: string;

		/**Placeholder documentation for __string */
		Username?: string;
	}


	/**Output Group Settings */
	export interface OutputGroupSettings {

		/**Archive Group Settings */
		ArchiveGroupSettings?: ArchiveGroupSettings;

		/**Frame Capture Group Settings */
		FrameCaptureGroupSettings?: FrameCaptureGroupSettings;

		/**Hls Group Settings */
		HlsGroupSettings?: HlsGroupSettings;

		/**Media Package Group Settings */
		MediaPackageGroupSettings?: MediaPackageGroupSettings;

		/**Ms Smooth Group Settings */
		MsSmoothGroupSettings?: MsSmoothGroupSettings;

		/**Multiplex Group Settings */
		MultiplexGroupSettings?: MultiplexGroupSettings;

		/**Rtmp Group Settings */
		RtmpGroupSettings?: RtmpGroupSettings;

		/**Udp Group Settings */
		UdpGroupSettings?: UdpGroupSettings;
	}


	/**Output groups for this Live Event. Output groups contain information about where streams should be distributed. */
	export interface OutputGroup {

		/**
		 * Placeholder documentation for __stringMax32
		 * Max length: 32
		 */
		Name?: string;

		/**Output Group Settings */
		OutputGroupSettings: OutputGroupSettings;

		/**Placeholder documentation for __listOfOutput */
		Outputs: Array<Output>;
	}


	/**Rtmp Group Settings */
	export interface RtmpGroupSettings {

		/**Authentication Scheme */
		AuthenticationScheme?: RtmpGroupSettingsAuthenticationScheme;

		/**Rtmp Cache Full Behavior */
		CacheFullBehavior?: RtmpGroupSettingsCacheFullBehavior;

		/**
		 * Placeholder documentation for __integerMin30
		 * Minimum: 30
		 */
		CacheLength?: number;

		/**Rtmp Caption Data */
		CaptionData?: RtmpGroupSettingsCaptionData;

		/**Input Loss Action For Rtmp Out */
		InputLossAction?: RtmpGroupSettingsInputLossAction;

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		RestartDelay?: number;
	}

	export enum RtmpGroupSettingsAuthenticationScheme { AKAMAI = 0, COMMON = 1 }

	export enum RtmpGroupSettingsCacheFullBehavior { DISCONNECT_IMMEDIATELY = 0, WAIT_FOR_SERVER = 1 }

	export enum RtmpGroupSettingsCaptionData { ALL = 0, FIELD1_608 = 1, FIELD1_AND_FIELD2_608 = 2 }

	export enum RtmpGroupSettingsInputLossAction { EMIT_OUTPUT = 0, PAUSE_OUTPUT = 1 }


	/**Udp Group Settings */
	export interface UdpGroupSettings {

		/**Input Loss Action For Udp Out */
		InputLossAction?: UdpGroupSettingsInputLossAction;

		/**Udp Timed Metadata Id3 Frame */
		TimedMetadataId3Frame?: UdpGroupSettingsTimedMetadataId3Frame;

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		TimedMetadataId3Period?: number;
	}

	export enum UdpGroupSettingsInputLossAction { DROP_PROGRAM = 0, DROP_TS = 1, EMIT_PROGRAM = 2 }

	export enum UdpGroupSettingsTimedMetadataId3Frame { NONE = 0, PRIV = 1, TDRL = 2 }


	/**Rtmp Output Settings */
	export interface RtmpOutputSettings {

		/**Rtmp Output Certificate Mode */
		CertificateMode?: RtmpOutputSettingsCertificateMode;

		/**
		 * Placeholder documentation for __integerMin1
		 * Minimum: 1
		 */
		ConnectionRetryInterval?: number;

		/**Reference to an OutputDestination ID defined in the channel */
		Destination: OutputLocationRef;

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		NumRetries?: number;
	}

	export enum RtmpOutputSettingsCertificateMode { SELF_SIGNED = 0, VERIFY_AUTHENTICITY = 1 }


	/**Udp Output Settings */
	export interface UdpOutputSettings {

		/**
		 * Placeholder documentation for __integerMin0Max10000
		 * Minimum: 0
		 * Maximum: 10000
		 */
		BufferMsec?: number;

		/**Udp Container Settings */
		ContainerSettings: UdpContainerSettings;

		/**Reference to an OutputDestination ID defined in the channel */
		Destination: OutputLocationRef;

		/**Fec Output Settings */
		FecOutputSettings?: FecOutputSettings;
	}


	/**Settings for the action to set pause state of a channel. */
	export interface PauseStateScheduleActionSettings {

		/**Placeholder documentation for __listOfPipelinePauseStateSettings */
		Pipelines?: Array<PipelinePauseStateSettings>;
	}


	/**Runtime details of a pipeline when a channel is running. */
	export interface PipelineDetail {

		/**Placeholder documentation for __string */
		ActiveInputAttachmentName?: string;

		/**Placeholder documentation for __string */
		ActiveInputSwitchActionName?: string;

		/**Placeholder documentation for __string */
		PipelineId?: string;
	}


	/**Pipeline ID */
	export enum PipelineId { PIPELINE_0 = 0, PIPELINE_1 = 1 }


	/**Settings for pausing a pipeline. */
	export interface PipelinePauseStateSettings {

		/**Pipeline ID */
		PipelineId: PipelinePauseStateSettingsPipelineId;
	}

	export enum PipelinePauseStateSettingsPipelineId { PIPELINE_0 = 0, PIPELINE_1 = 1 }


	/**Placeholder documentation for PurchaseOfferingRequest */
	export interface PurchaseOfferingRequest {

		/**
		 * Placeholder documentation for __integerMin1
		 * Minimum: 1
		 */
		Count: number;

		/**Placeholder documentation for __string */
		Name?: string;

		/**Placeholder documentation for __string */
		RequestId?: string;

		/**Placeholder documentation for __string */
		Start?: string;

		/**Placeholder documentation for Tags */
		Tags?: Tags;
	}


	/**Reserved resources available to use */
	export interface Reservation {

		/**Placeholder documentation for __string */
		Arn?: string;

		/**Placeholder documentation for __integer */
		Count?: number;

		/**Placeholder documentation for __string */
		CurrencyCode?: string;

		/**Placeholder documentation for __integer */
		Duration?: number;

		/**Units for duration, e.g. 'MONTHS' */
		DurationUnits?: ReservationDurationUnits;

		/**Placeholder documentation for __string */
		End?: string;

		/**Placeholder documentation for __double */
		FixedPrice?: number;

		/**Placeholder documentation for __string */
		Name?: string;

		/**Placeholder documentation for __string */
		OfferingDescription?: string;

		/**Placeholder documentation for __string */
		OfferingId?: string;

		/**Offering type, e.g. 'NO_UPFRONT' */
		OfferingType?: ReservationOfferingType;

		/**Placeholder documentation for __string */
		Region?: string;

		/**Placeholder documentation for __string */
		ReservationId?: string;

		/**Resource configuration (codec, resolution, bitrate, ...) */
		ResourceSpecification?: ReservationResourceSpecification;

		/**Placeholder documentation for __string */
		Start?: string;

		/**Current reservation state */
		State?: ReservationState;

		/**Placeholder documentation for Tags */
		Tags?: Tags;

		/**Placeholder documentation for __double */
		UsagePrice?: number;
	}

	export enum ReservationDurationUnits { MONTHS = 0 }

	export enum ReservationOfferingType { NO_UPFRONT = 0 }

	export enum ReservationState { ACTIVE = 0, EXPIRED = 1, CANCELED = 2, DELETED = 3 }


	/**Codec, 'MPEG2', 'AVC', 'HEVC', or 'AUDIO' */
	export enum ReservationCodec { MPEG2 = 0, AVC = 1, HEVC = 2, AUDIO = 3 }


	/**Maximum bitrate in megabits per second */
	export enum ReservationMaximumBitrate { MAX_10_MBPS = 0, MAX_20_MBPS = 1, MAX_50_MBPS = 2 }


	/**Maximum framerate in frames per second (Outputs only) */
	export enum ReservationMaximumFramerate { MAX_30_FPS = 0, MAX_60_FPS = 1 }


	/**
	 * Resolution based on lines of vertical resolution; SD is less than 720 lines, HD is 720 to 1080 lines, FHD is 1080 lines, UHD is greater than 1080 lines
	 */
	export enum ReservationResolution { SD = 0, HD = 1, FHD = 2, UHD = 3 }


	/**Resource type, 'INPUT', 'OUTPUT', 'MULTIPLEX', or 'CHANNEL' */
	export enum ReservationResourceType { INPUT = 0, OUTPUT = 1, MULTIPLEX = 2, CHANNEL = 3 }


	/**Special features, 'ADVANCED_AUDIO' or 'AUDIO_NORMALIZATION' */
	export enum ReservationSpecialFeature { ADVANCED_AUDIO = 0, AUDIO_NORMALIZATION = 1 }


	/**Video quality, e.g. 'STANDARD' (Outputs only) */
	export enum ReservationVideoQuality { STANDARD = 0, ENHANCED = 1, PREMIUM = 2 }


	/**Rtmp Cache Full Behavior */
	export enum RtmpCacheFullBehavior { DISCONNECT_IMMEDIATELY = 0, WAIT_FOR_SERVER = 1 }


	/**Rtmp Caption Data */
	export enum RtmpCaptionData { ALL = 0, FIELD1_608 = 1, FIELD1_AND_FIELD2_608 = 2 }


	/**Rtmp Output Certificate Mode */
	export enum RtmpOutputCertificateMode { SELF_SIGNED = 0, VERIFY_AUTHENTICITY = 1 }


	/**Holds the settings for a single schedule action. */
	export interface ScheduleActionSettings {

		/**Settings for the action to insert a user-defined ID3 tag in each HLS segment */
		HlsId3SegmentTaggingSettings?: HlsId3SegmentTaggingScheduleActionSettings;

		/**Settings for the action to emit HLS metadata */
		HlsTimedMetadataSettings?: HlsTimedMetadataScheduleActionSettings;

		/**Settings for the "switch input" action: to switch from ingesting one input to ingesting another input. */
		InputSwitchSettings?: InputSwitchScheduleActionSettings;

		/**Settings for the action to set pause state of a channel. */
		PauseStateSettings?: PauseStateScheduleActionSettings;

		/**Settings for a SCTE-35 return_to_network message. */
		Scte35ReturnToNetworkSettings?: Scte35ReturnToNetworkScheduleActionSettings;

		/**Settings for a SCTE-35 splice_insert message. */
		Scte35SpliceInsertSettings?: Scte35SpliceInsertScheduleActionSettings;

		/**Settings for a SCTE-35 time_signal. */
		Scte35TimeSignalSettings?: Scte35TimeSignalScheduleActionSettings;

		/**Settings for the action to activate a static image. */
		StaticImageActivateSettings?: StaticImageActivateScheduleActionSettings;

		/**Settings for the action to deactivate the image in a specific layer. */
		StaticImageDeactivateSettings?: StaticImageDeactivateScheduleActionSettings;
	}


	/**Settings to specify when an action should occur. Only one of the options must be selected. */
	export interface ScheduleActionStartSettings {

		/**Start time for the action. */
		FixedModeScheduleActionStartSettings?: FixedModeScheduleActionStartSettings;

		/**Settings to specify if an action follows another. */
		FollowModeScheduleActionStartSettings?: FollowModeScheduleActionStartSettings;

		/**Settings to configure an action so that it occurs as soon as possible. */
		ImmediateModeScheduleActionStartSettings?: ImmediateModeScheduleActionStartSettings;
	}


	/**Contains information on a single schedule action. */
	export interface ScheduleAction {

		/**Placeholder documentation for __string */
		ActionName: string;

		/**Holds the settings for a single schedule action. */
		ScheduleActionSettings: ScheduleActionSettings;

		/**Settings to specify when an action should occur. Only one of the options must be selected. */
		ScheduleActionStartSettings: ScheduleActionStartSettings;
	}


	/**Settings for a SCTE-35 return_to_network message. */
	export interface Scte35ReturnToNetworkScheduleActionSettings {

		/**
		 * Placeholder documentation for __longMin0Max4294967295
		 * Minimum: 0
		 * Maximum: 4294967295
		 */
		SpliceEventId: number;
	}


	/**Settings for a SCTE-35 splice_insert message. */
	export interface Scte35SpliceInsertScheduleActionSettings {

		/**
		 * Placeholder documentation for __longMin0Max8589934591
		 * Minimum: 0
		 * Maximum: 8589934591
		 */
		Duration?: number;

		/**
		 * Placeholder documentation for __longMin0Max4294967295
		 * Minimum: 0
		 * Maximum: 4294967295
		 */
		SpliceEventId: number;
	}


	/**Settings for a SCTE-35 time_signal. */
	export interface Scte35TimeSignalScheduleActionSettings {

		/**Placeholder documentation for __listOfScte35Descriptor */
		Scte35Descriptors: Array<Scte35Descriptor>;
	}


	/**Settings for the action to activate a static image. */
	export interface StaticImageActivateScheduleActionSettings {

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		Duration?: number;

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		FadeIn?: number;

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		FadeOut?: number;

		/**
		 * Placeholder documentation for __integerMin1
		 * Minimum: 1
		 */
		Height?: number;

		/**Input Location */
		Image: InputLocation;

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		ImageX?: number;

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		ImageY?: number;

		/**
		 * Placeholder documentation for __integerMin0Max7
		 * Minimum: 0
		 * Maximum: 7
		 */
		Layer?: number;

		/**
		 * Placeholder documentation for __integerMin0Max100
		 * Minimum: 0
		 * Maximum: 100
		 */
		Opacity?: number;

		/**
		 * Placeholder documentation for __integerMin1
		 * Minimum: 1
		 */
		Width?: number;
	}


	/**Settings for the action to deactivate the image in a specific layer. */
	export interface StaticImageDeactivateScheduleActionSettings {

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		FadeOut?: number;

		/**
		 * Placeholder documentation for __integerMin0Max7
		 * Minimum: 0
		 * Maximum: 7
		 */
		Layer?: number;
	}


	/**Scte20 Convert608 To708 */
	export enum Scte20Convert608To708 { DISABLED = 0, UPCONVERT = 1 }


	/**Scte35 Apos No Regional Blackout Behavior */
	export enum Scte35AposNoRegionalBlackoutBehavior { FOLLOW = 0, IGNORE = 1 }


	/**Scte35 Apos Web Delivery Allowed Behavior */
	export enum Scte35AposWebDeliveryAllowedBehavior { FOLLOW = 0, IGNORE = 1 }


	/**Corresponds to the archive_allowed parameter. A value of ARCHIVE_NOT_ALLOWED corresponds to 0 (false) in the SCTE-35 specification. If you include one of the "restriction" flags then you must include all four of them. */
	export enum Scte35ArchiveAllowedFlag { ARCHIVE_NOT_ALLOWED = 0, ARCHIVE_ALLOWED = 1 }


	/**Corresponds to the device_restrictions parameter in a segmentation_descriptor. If you include one of the "restriction" flags then you must include all four of them. */
	export enum Scte35DeviceRestrictions { NONE = 0, RESTRICT_GROUP0 = 1, RESTRICT_GROUP1 = 2, RESTRICT_GROUP2 = 3 }


	/**Corresponds to the no_regional_blackout_flag parameter. A value of REGIONAL_BLACKOUT corresponds to 0 (false) in the SCTE-35 specification. If you include one of the "restriction" flags then you must include all four of them. */
	export enum Scte35NoRegionalBlackoutFlag { REGIONAL_BLACKOUT = 0, NO_REGIONAL_BLACKOUT = 1 }


	/**Corresponds to the web_delivery_allowed_flag parameter. A value of WEB_DELIVERY_NOT_ALLOWED corresponds to 0 (false) in the SCTE-35 specification. If you include one of the "restriction" flags then you must include all four of them. */
	export enum Scte35WebDeliveryAllowedFlag { WEB_DELIVERY_NOT_ALLOWED = 0, WEB_DELIVERY_ALLOWED = 1 }


	/**Corresponds to SCTE-35 delivery_not_restricted_flag parameter. To declare delivery restrictions, include this element and its four "restriction" flags. To declare that there are no restrictions, omit this element. */
	export interface Scte35DeliveryRestrictions {

		/**Corresponds to the archive_allowed parameter. A value of ARCHIVE_NOT_ALLOWED corresponds to 0 (false) in the SCTE-35 specification. If you include one of the "restriction" flags then you must include all four of them. */
		ArchiveAllowedFlag: Scte35DeliveryRestrictionsArchiveAllowedFlag;

		/**Corresponds to the device_restrictions parameter in a segmentation_descriptor. If you include one of the "restriction" flags then you must include all four of them. */
		DeviceRestrictions: Scte35DeliveryRestrictionsDeviceRestrictions;

		/**Corresponds to the no_regional_blackout_flag parameter. A value of REGIONAL_BLACKOUT corresponds to 0 (false) in the SCTE-35 specification. If you include one of the "restriction" flags then you must include all four of them. */
		NoRegionalBlackoutFlag: Scte35DeliveryRestrictionsNoRegionalBlackoutFlag;

		/**Corresponds to the web_delivery_allowed_flag parameter. A value of WEB_DELIVERY_NOT_ALLOWED corresponds to 0 (false) in the SCTE-35 specification. If you include one of the "restriction" flags then you must include all four of them. */
		WebDeliveryAllowedFlag: Scte35DeliveryRestrictionsWebDeliveryAllowedFlag;
	}

	export enum Scte35DeliveryRestrictionsArchiveAllowedFlag { ARCHIVE_NOT_ALLOWED = 0, ARCHIVE_ALLOWED = 1 }

	export enum Scte35DeliveryRestrictionsDeviceRestrictions { NONE = 0, RESTRICT_GROUP0 = 1, RESTRICT_GROUP1 = 2, RESTRICT_GROUP2 = 3 }

	export enum Scte35DeliveryRestrictionsNoRegionalBlackoutFlag { REGIONAL_BLACKOUT = 0, NO_REGIONAL_BLACKOUT = 1 }

	export enum Scte35DeliveryRestrictionsWebDeliveryAllowedFlag { WEB_DELIVERY_NOT_ALLOWED = 0, WEB_DELIVERY_ALLOWED = 1 }


	/**SCTE-35 Descriptor settings. */
	export interface Scte35DescriptorSettings {

		/**Corresponds to SCTE-35 segmentation_descriptor. */
		SegmentationDescriptorScte35DescriptorSettings: Scte35SegmentationDescriptor;
	}


	/**Holds one set of SCTE-35 Descriptor Settings. */
	export interface Scte35Descriptor {

		/**SCTE-35 Descriptor settings. */
		Scte35DescriptorSettings: Scte35DescriptorSettings;
	}


	/**Corresponds to SCTE-35 segmentation_descriptor. */
	export interface Scte35SegmentationDescriptor {

		/**Corresponds to SCTE-35 delivery_not_restricted_flag parameter. To declare delivery restrictions, include this element and its four "restriction" flags. To declare that there are no restrictions, omit this element. */
		DeliveryRestrictions?: Scte35DeliveryRestrictions;

		/**
		 * Placeholder documentation for __integerMin0Max255
		 * Minimum: 0
		 * Maximum: 255
		 */
		SegmentNum?: number;

		/**Corresponds to SCTE-35 segmentation_event_cancel_indicator. SEGMENTATION_EVENT_NOT_CANCELED corresponds to 0 in the SCTE-35 specification and indicates that this is an insertion request. SEGMENTATION_EVENT_CANCELED corresponds to 1 in the SCTE-35 specification and indicates that this is a cancelation request, in which case complete this field and the existing event ID to cancel. */
		SegmentationCancelIndicator: Scte35SegmentationDescriptorSegmentationCancelIndicator;

		/**
		 * Placeholder documentation for __longMin0Max1099511627775
		 * Minimum: 0
		 * Maximum: 1099511627775
		 */
		SegmentationDuration?: number;

		/**
		 * Placeholder documentation for __longMin0Max4294967295
		 * Minimum: 0
		 * Maximum: 4294967295
		 */
		SegmentationEventId: number;

		/**
		 * Placeholder documentation for __integerMin0Max255
		 * Minimum: 0
		 * Maximum: 255
		 */
		SegmentationTypeId?: number;

		/**Placeholder documentation for __string */
		SegmentationUpid?: string;

		/**
		 * Placeholder documentation for __integerMin0Max255
		 * Minimum: 0
		 * Maximum: 255
		 */
		SegmentationUpidType?: number;

		/**
		 * Placeholder documentation for __integerMin0Max255
		 * Minimum: 0
		 * Maximum: 255
		 */
		SegmentsExpected?: number;

		/**
		 * Placeholder documentation for __integerMin0Max255
		 * Minimum: 0
		 * Maximum: 255
		 */
		SubSegmentNum?: number;

		/**
		 * Placeholder documentation for __integerMin0Max255
		 * Minimum: 0
		 * Maximum: 255
		 */
		SubSegmentsExpected?: number;
	}

	export enum Scte35SegmentationDescriptorSegmentationCancelIndicator { SEGMENTATION_EVENT_NOT_CANCELED = 0, SEGMENTATION_EVENT_CANCELED = 1 }


	/**Corresponds to SCTE-35 segmentation_event_cancel_indicator. SEGMENTATION_EVENT_NOT_CANCELED corresponds to 0 in the SCTE-35 specification and indicates that this is an insertion request. SEGMENTATION_EVENT_CANCELED corresponds to 1 in the SCTE-35 specification and indicates that this is a cancelation request, in which case complete this field and the existing event ID to cancel. */
	export enum Scte35SegmentationCancelIndicator { SEGMENTATION_EVENT_NOT_CANCELED = 0, SEGMENTATION_EVENT_CANCELED = 1 }


	/**Scte35 Splice Insert No Regional Blackout Behavior */
	export enum Scte35SpliceInsertNoRegionalBlackoutBehavior { FOLLOW = 0, IGNORE = 1 }


	/**Scte35 Splice Insert Web Delivery Allowed Behavior */
	export enum Scte35SpliceInsertWebDeliveryAllowedBehavior { FOLLOW = 0, IGNORE = 1 }


	/**Temporal Filter Post Filter Sharpening */
	export enum TemporalFilterPostFilterSharpening { AUTO = 0, DISABLED = 1, ENABLED = 2 }


	/**Temporal Filter Strength */
	export enum TemporalFilterStrength { AUTO = 0, STRENGTH_1 = 1, STRENGTH_2 = 2, STRENGTH_3 = 3, STRENGTH_4 = 4, STRENGTH_5 = 5, STRENGTH_6 = 6, STRENGTH_7 = 7, STRENGTH_8 = 8, STRENGTH_9 = 9, STRENGTH_10 = 10, STRENGTH_11 = 11, STRENGTH_12 = 12, STRENGTH_13 = 13, STRENGTH_14 = 14, STRENGTH_15 = 15, STRENGTH_16 = 16 }


	/**Timecode Config Source */
	export enum TimecodeConfigSource { EMBEDDED = 0, SYSTEMCLOCK = 1, ZEROBASED = 2 }


	/**Ttml Destination Style Control */
	export enum TtmlDestinationStyleControl { PASSTHROUGH = 0, USE_CONFIGURED = 1 }


	/**Udp Container Settings */
	export interface UdpContainerSettings {

		/**M2ts Settings */
		M2tsSettings?: M2tsSettings;
	}


	/**Udp Timed Metadata Id3 Frame */
	export enum UdpTimedMetadataId3Frame { NONE = 0, PRIV = 1, TDRL = 2 }


	/**Channel class that the channel should be updated to. */
	export interface UpdateChannelClassRequest {

		/**A standard channel has two encoding pipelines and a single pipeline channel only has one. */
		ChannelClass: UpdateChannelClassRequestChannelClass;

		/**Placeholder documentation for __listOfOutputDestination */
		Destinations?: Array<OutputDestination>;
	}

	export enum UpdateChannelClassRequestChannelClass { STANDARD = 0, SINGLE_PIPELINE = 1 }


	/**A request to update a channel. */
	export interface UpdateChannelRequest {

		/**Placeholder documentation for __listOfOutputDestination */
		Destinations?: Array<OutputDestination>;

		/**Encoder Settings */
		EncoderSettings?: EncoderSettings;

		/**Placeholder documentation for __listOfInputAttachment */
		InputAttachments?: Array<InputAttachment>;

		/**Placeholder documentation for InputSpecification */
		InputSpecification?: InputSpecification;

		/**The log level the user wants for their channel. */
		LogLevel?: UpdateChannelRequestLogLevel;

		/**Placeholder documentation for __string */
		Name?: string;

		/**Placeholder documentation for __string */
		RoleArn?: string;
	}

	export enum UpdateChannelRequestLogLevel { ERROR = 0, WARNING = 1, INFO = 2, DEBUG = 3, DISABLED = 4 }


	/**A request to update an input device. */
	export interface UpdateInputDeviceRequest {

		/**Configurable settings for the input device. */
		HdDeviceSettings?: InputDeviceConfigurableSettings;

		/**Placeholder documentation for __string */
		Name?: string;
	}


	/**A request to update an input. */
	export interface UpdateInputRequest {

		/**Placeholder documentation for __listOfInputDestinationRequest */
		Destinations?: Array<InputDestinationRequest>;

		/**Placeholder documentation for __listOfInputDeviceRequest */
		InputDevices?: Array<InputDeviceRequest>;

		/**Placeholder documentation for __listOf__string */
		InputSecurityGroups?: Array<__string>;

		/**Placeholder documentation for __listOfMediaConnectFlowRequest */
		MediaConnectFlows?: Array<MediaConnectFlowRequest>;

		/**Placeholder documentation for __string */
		Name?: string;

		/**Placeholder documentation for __string */
		RoleArn?: string;

		/**Placeholder documentation for __listOfInputSourceRequest */
		Sources?: Array<InputSourceRequest>;
	}


	/**The request to update some combination of the Input Security Group name and the IPv4 CIDRs the Input Security Group should allow. */
	export interface UpdateInputSecurityGroupRequest {

		/**Placeholder documentation for Tags */
		Tags?: Tags;

		/**Placeholder documentation for __listOfInputWhitelistRuleCidr */
		WhitelistRules?: Array<InputWhitelistRuleCidr>;
	}


	/**A request to update a program in a multiplex. */
	export interface UpdateMultiplexProgramRequest {

		/**Multiplex Program settings configuration. */
		MultiplexProgramSettings?: MultiplexProgramSettings;
	}


	/**A request to update a multiplex. */
	export interface UpdateMultiplexRequest {

		/**Contains configuration for a Multiplex event */
		MultiplexSettings?: MultiplexSettings;

		/**Placeholder documentation for __string */
		Name?: string;
	}


	/**Request to update a reservation */
	export interface UpdateReservationRequest {

		/**Placeholder documentation for __string */
		Name?: string;
	}


	/**Video Codec Settings */
	export interface VideoCodecSettings {

		/**Frame Capture Settings */
		FrameCaptureSettings?: FrameCaptureSettings;

		/**H264 Settings */
		H264Settings?: H264Settings;

		/**H265 Settings */
		H265Settings?: H265Settings;
	}


	/**Video Description Respond To Afd */
	export enum VideoDescriptionRespondToAfd { NONE = 0, PASSTHROUGH = 1, RESPOND = 2 }


	/**Video Description Scaling Behavior */
	export enum VideoDescriptionScalingBehavior { DEFAULT = 0, STRETCH_TO_OUTPUT = 1 }


	/**Video settings for this stream. */
	export interface VideoDescription {

		/**Video Codec Settings */
		CodecSettings?: VideoCodecSettings;

		/**Placeholder documentation for __integer */
		Height?: number;

		/**Placeholder documentation for __string */
		Name: string;

		/**Video Description Respond To Afd */
		RespondToAfd?: VideoDescriptionRespondToAfd;

		/**Video Description Scaling Behavior */
		ScalingBehavior?: VideoDescriptionScalingBehavior;

		/**
		 * Placeholder documentation for __integerMin0Max100
		 * Minimum: 0
		 * Maximum: 100
		 */
		Sharpness?: number;

		/**Placeholder documentation for __integer */
		Width?: number;
	}

	export enum VideoDescriptionRespondToAfd { NONE = 0, PASSTHROUGH = 1, RESPOND = 2 }

	export enum VideoDescriptionScalingBehavior { DEFAULT = 0, STRETCH_TO_OUTPUT = 1 }


	/**Video Selector Color Space */
	export enum VideoSelectorColorSpace { FOLLOW = 0, REC_601 = 1, REC_709 = 2 }


	/**Video Selector Color Space Usage */
	export enum VideoSelectorColorSpaceUsage { FALLBACK = 0, FORCE = 1 }


	/**Video Selector Settings */
	export interface VideoSelectorSettings {

		/**Video Selector Pid */
		VideoSelectorPid?: VideoSelectorPid;

		/**Video Selector Program Id */
		VideoSelectorProgramId?: VideoSelectorProgramId;
	}


	/**Video Selector Pid */
	export interface VideoSelectorPid {

		/**
		 * Placeholder documentation for __integerMin0Max8191
		 * Minimum: 0
		 * Maximum: 8191
		 */
		Pid?: number;
	}


	/**Video Selector Program Id */
	export interface VideoSelectorProgramId {

		/**
		 * Placeholder documentation for __integerMin0Max65536
		 * Minimum: 0
		 * Maximum: 65536
		 */
		ProgramId?: number;
	}

	export class DemoClient {
		constructor(private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/') {
		}

		/**
		 * Update a channel schedule
		 * Put /prod/channels/{channelId}/schedule
		 * @param {string} channelId Id of the channel whose schedule is being updated.
		 * @return {BatchUpdateScheduleResponse} Success
		 */
		BatchUpdateSchedule(channelId: string, requestBody: BatchUpdateScheduleBody, headersHandler?: () => {[header: string]: string}): Promise<BatchUpdateScheduleResponse> {
			return Axios.put<BatchUpdateScheduleResponse>(this.baseUri + '/prod/channels/' + (channelId == null ? '' : encodeURIComponent(channelId)) + '/schedule', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Delete all schedule actions on a channel.
		 * Delete /prod/channels/{channelId}/schedule
		 * @param {string} channelId Id of the channel whose schedule is being deleted.
		 * @return {DeleteScheduleResponse} Success
		 */
		DeleteSchedule(channelId: string, headersHandler?: () => {[header: string]: string}): Promise<DeleteScheduleResponse> {
			return Axios.delete<DeleteScheduleResponse>(this.baseUri + '/prod/channels/' + (channelId == null ? '' : encodeURIComponent(channelId)) + '/schedule', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Get a channel schedule
		 * Get /prod/channels/{channelId}/schedule
		 * @param {string} channelId Id of the channel whose schedule is being updated.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeScheduleResponse} Success
		 */
		DescribeSchedule(channelId: string, maxResults: number, nextToken: string, MaxResults: string, NextToken: string, headersHandler?: () => {[header: string]: string}): Promise<DescribeScheduleResponse> {
			return Axios.get<DescribeScheduleResponse>(this.baseUri + '/prod/channels/' + (channelId == null ? '' : encodeURIComponent(channelId)) + '/schedule&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Creates a new channel
		 * Post /prod/channels
		 * @return {void} 
		 */
		CreateChannel(requestBody: CreateChannelBody, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.post(this.baseUri + '/prod/channels', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Produces list of channels that have been created
		 * Get /prod/channels
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListChannelsResponse} Success
		 */
		ListChannels(maxResults: number, nextToken: string, MaxResults: string, NextToken: string, headersHandler?: () => {[header: string]: string}): Promise<ListChannelsResponse> {
			return Axios.get<ListChannelsResponse>(this.baseUri + '/prod/channels?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Create an input
		 * Post /prod/inputs
		 * @return {void} 
		 */
		CreateInput(requestBody: CreateInputBody, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.post(this.baseUri + '/prod/inputs', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Produces list of inputs that have been created
		 * Get /prod/inputs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListInputsResponse} Success
		 */
		ListInputs(maxResults: number, nextToken: string, MaxResults: string, NextToken: string, headersHandler?: () => {[header: string]: string}): Promise<ListInputsResponse> {
			return Axios.get<ListInputsResponse>(this.baseUri + '/prod/inputs?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Creates a Input Security Group
		 * Post /prod/inputSecurityGroups
		 * @return {CreateInputSecurityGroupResponse} Success
		 */
		CreateInputSecurityGroup(requestBody: CreateInputSecurityGroupBody, headersHandler?: () => {[header: string]: string}): Promise<CreateInputSecurityGroupResponse> {
			return Axios.post<CreateInputSecurityGroupResponse>(this.baseUri + '/prod/inputSecurityGroups', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Produces a list of Input Security Groups for an account
		 * Get /prod/inputSecurityGroups
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListInputSecurityGroupsResponse} Success
		 */
		ListInputSecurityGroups(maxResults: number, nextToken: string, MaxResults: string, NextToken: string, headersHandler?: () => {[header: string]: string}): Promise<ListInputSecurityGroupsResponse> {
			return Axios.get<ListInputSecurityGroupsResponse>(this.baseUri + '/prod/inputSecurityGroups?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Create a new multiplex.
		 * Post /prod/multiplexes
		 * @return {void} 
		 */
		CreateMultiplex(requestBody: CreateMultiplexBody, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.post(this.baseUri + '/prod/multiplexes', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Retrieve a list of the existing multiplexes.
		 * Get /prod/multiplexes
		 * @param {number} maxResults The maximum number of items to return.
		 * @param {string} nextToken The token to retrieve the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListMultiplexesResponse} Success
		 */
		ListMultiplexes(maxResults: number, nextToken: string, MaxResults: string, NextToken: string, headersHandler?: () => {[header: string]: string}): Promise<ListMultiplexesResponse> {
			return Axios.get<ListMultiplexesResponse>(this.baseUri + '/prod/multiplexes?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Create a new program in the multiplex.
		 * Post /prod/multiplexes/{multiplexId}/programs
		 * @param {string} multiplexId ID of the multiplex where the program is to be created.
		 * @return {void} 
		 */
		CreateMultiplexProgram(multiplexId: string, requestBody: CreateMultiplexProgramBody, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.post(this.baseUri + '/prod/multiplexes/' + (multiplexId == null ? '' : encodeURIComponent(multiplexId)) + '/programs', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * List the programs that currently exist for a specific multiplex.
		 * Get /prod/multiplexes/{multiplexId}/programs
		 * @param {number} maxResults The maximum number of items to return.
		 * @param {string} multiplexId The ID of the multiplex that the programs belong to.
		 * @param {string} nextToken The token to retrieve the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListMultiplexProgramsResponse} Success
		 */
		ListMultiplexPrograms(maxResults: number, multiplexId: string, nextToken: string, MaxResults: string, NextToken: string, headersHandler?: () => {[header: string]: string}): Promise<ListMultiplexProgramsResponse> {
			return Axios.get<ListMultiplexProgramsResponse>(this.baseUri + '/prod/multiplexes/' + (multiplexId == null ? '' : encodeURIComponent(multiplexId)) + '/programs?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Create tags for a resource
		 * Post /prod/tags/{resource_arn}
		 * @return {void} 
		 */
		CreateTags(resource_arn: string, requestBody: CreateTagsBody, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.post(this.baseUri + '/prod/tags/' + (resource_arn == null ? '' : encodeURIComponent(resource_arn)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Produces list of tags that have been created for a resource
		 * Get /prod/tags/{resource_arn}
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resource_arn: string, headersHandler?: () => {[header: string]: string}): Promise<ListTagsForResourceResponse> {
			return Axios.get<ListTagsForResourceResponse>(this.baseUri + '/prod/tags/' + (resource_arn == null ? '' : encodeURIComponent(resource_arn)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Starts deletion of channel. The associated outputs are also deleted.
		 * Delete /prod/channels/{channelId}
		 * @param {string} channelId Unique ID of the channel.
		 * @return {DeleteChannelResponse} Success
		 */
		DeleteChannel(channelId: string, headersHandler?: () => {[header: string]: string}): Promise<DeleteChannelResponse> {
			return Axios.delete<DeleteChannelResponse>(this.baseUri + '/prod/channels/' + (channelId == null ? '' : encodeURIComponent(channelId)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Gets details about a channel
		 * Get /prod/channels/{channelId}
		 * @param {string} channelId channel ID
		 * @return {DescribeChannelResponse} Success
		 */
		DescribeChannel(channelId: string, headersHandler?: () => {[header: string]: string}): Promise<DescribeChannelResponse> {
			return Axios.get<DescribeChannelResponse>(this.baseUri + '/prod/channels/' + (channelId == null ? '' : encodeURIComponent(channelId)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Updates a channel.
		 * Put /prod/channels/{channelId}
		 * @param {string} channelId channel ID
		 * @return {UpdateChannelResponse} Success
		 */
		UpdateChannel(channelId: string, requestBody: UpdateChannelBody, headersHandler?: () => {[header: string]: string}): Promise<UpdateChannelResponse> {
			return Axios.put<UpdateChannelResponse>(this.baseUri + '/prod/channels/' + (channelId == null ? '' : encodeURIComponent(channelId)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Deletes the input end point
		 * Delete /prod/inputs/{inputId}
		 * @param {string} inputId Unique ID of the input
		 * @return {DeleteInputResponse} Success
		 */
		DeleteInput(inputId: string, headersHandler?: () => {[header: string]: string}): Promise<DeleteInputResponse> {
			return Axios.delete<DeleteInputResponse>(this.baseUri + '/prod/inputs/' + (inputId == null ? '' : encodeURIComponent(inputId)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Produces details about an input
		 * Get /prod/inputs/{inputId}
		 * @param {string} inputId Unique ID of the input
		 * @return {DescribeInputResponse} Success
		 */
		DescribeInput(inputId: string, headersHandler?: () => {[header: string]: string}): Promise<DescribeInputResponse> {
			return Axios.get<DescribeInputResponse>(this.baseUri + '/prod/inputs/' + (inputId == null ? '' : encodeURIComponent(inputId)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Updates an input.
		 * Put /prod/inputs/{inputId}
		 * @param {string} inputId Unique ID of the input.
		 * @return {UpdateInputResponse} Success
		 */
		UpdateInput(inputId: string, requestBody: UpdateInputBody, headersHandler?: () => {[header: string]: string}): Promise<UpdateInputResponse> {
			return Axios.put<UpdateInputResponse>(this.baseUri + '/prod/inputs/' + (inputId == null ? '' : encodeURIComponent(inputId)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Deletes an Input Security Group
		 * Delete /prod/inputSecurityGroups/{inputSecurityGroupId}
		 * @param {string} inputSecurityGroupId The Input Security Group to delete
		 * @return {DeleteInputSecurityGroupResponse} Success
		 */
		DeleteInputSecurityGroup(inputSecurityGroupId: string, headersHandler?: () => {[header: string]: string}): Promise<DeleteInputSecurityGroupResponse> {
			return Axios.delete<DeleteInputSecurityGroupResponse>(this.baseUri + '/prod/inputSecurityGroups/' + (inputSecurityGroupId == null ? '' : encodeURIComponent(inputSecurityGroupId)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Produces a summary of an Input Security Group
		 * Get /prod/inputSecurityGroups/{inputSecurityGroupId}
		 * @param {string} inputSecurityGroupId The id of the Input Security Group to describe
		 * @return {DescribeInputSecurityGroupResponse} Success
		 */
		DescribeInputSecurityGroup(inputSecurityGroupId: string, headersHandler?: () => {[header: string]: string}): Promise<DescribeInputSecurityGroupResponse> {
			return Axios.get<DescribeInputSecurityGroupResponse>(this.baseUri + '/prod/inputSecurityGroups/' + (inputSecurityGroupId == null ? '' : encodeURIComponent(inputSecurityGroupId)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Update an Input Security Group's Whilelists.
		 * Put /prod/inputSecurityGroups/{inputSecurityGroupId}
		 * @param {string} inputSecurityGroupId The id of the Input Security Group to update.
		 * @return {UpdateInputSecurityGroupResponse} Success
		 */
		UpdateInputSecurityGroup(inputSecurityGroupId: string, requestBody: UpdateInputSecurityGroupBody, headersHandler?: () => {[header: string]: string}): Promise<UpdateInputSecurityGroupResponse> {
			return Axios.put<UpdateInputSecurityGroupResponse>(this.baseUri + '/prod/inputSecurityGroups/' + (inputSecurityGroupId == null ? '' : encodeURIComponent(inputSecurityGroupId)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Delete a multiplex. The multiplex must be idle.
		 * Delete /prod/multiplexes/{multiplexId}
		 * @param {string} multiplexId The ID of the multiplex.
		 * @return {void} 
		 */
		DeleteMultiplex(multiplexId: string, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.delete(this.baseUri + '/prod/multiplexes/' + (multiplexId == null ? '' : encodeURIComponent(multiplexId)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Gets details about a multiplex.
		 * Get /prod/multiplexes/{multiplexId}
		 * @param {string} multiplexId The ID of the multiplex.
		 * @return {DescribeMultiplexResponse} Success
		 */
		DescribeMultiplex(multiplexId: string, headersHandler?: () => {[header: string]: string}): Promise<DescribeMultiplexResponse> {
			return Axios.get<DescribeMultiplexResponse>(this.baseUri + '/prod/multiplexes/' + (multiplexId == null ? '' : encodeURIComponent(multiplexId)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Updates a multiplex.
		 * Put /prod/multiplexes/{multiplexId}
		 * @param {string} multiplexId ID of the multiplex to update.
		 * @return {UpdateMultiplexResponse} Success
		 */
		UpdateMultiplex(multiplexId: string, requestBody: UpdateMultiplexBody, headersHandler?: () => {[header: string]: string}): Promise<UpdateMultiplexResponse> {
			return Axios.put<UpdateMultiplexResponse>(this.baseUri + '/prod/multiplexes/' + (multiplexId == null ? '' : encodeURIComponent(multiplexId)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Delete a program from a multiplex.
		 * Delete /prod/multiplexes/{multiplexId}/programs/{programName}
		 * @param {string} multiplexId The ID of the multiplex that the program belongs to.
		 * @param {string} programName The multiplex program name.
		 * @return {DeleteMultiplexProgramResponse} Success
		 */
		DeleteMultiplexProgram(multiplexId: string, programName: string, headersHandler?: () => {[header: string]: string}): Promise<DeleteMultiplexProgramResponse> {
			return Axios.delete<DeleteMultiplexProgramResponse>(this.baseUri + '/prod/multiplexes/' + (multiplexId == null ? '' : encodeURIComponent(multiplexId)) + '/programs/' + (programName == null ? '' : encodeURIComponent(programName)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Get the details for a program in a multiplex.
		 * Get /prod/multiplexes/{multiplexId}/programs/{programName}
		 * @param {string} multiplexId The ID of the multiplex that the program belongs to.
		 * @param {string} programName The name of the program.
		 * @return {DescribeMultiplexProgramResponse} Success
		 */
		DescribeMultiplexProgram(multiplexId: string, programName: string, headersHandler?: () => {[header: string]: string}): Promise<DescribeMultiplexProgramResponse> {
			return Axios.get<DescribeMultiplexProgramResponse>(this.baseUri + '/prod/multiplexes/' + (multiplexId == null ? '' : encodeURIComponent(multiplexId)) + '/programs/' + (programName == null ? '' : encodeURIComponent(programName)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Update a program in a multiplex.
		 * Put /prod/multiplexes/{multiplexId}/programs/{programName}
		 * @param {string} multiplexId The ID of the multiplex of the program to update.
		 * @param {string} programName The name of the program to update.
		 * @return {UpdateMultiplexProgramResponse} Success
		 */
		UpdateMultiplexProgram(multiplexId: string, programName: string, requestBody: UpdateMultiplexProgramBody, headersHandler?: () => {[header: string]: string}): Promise<UpdateMultiplexProgramResponse> {
			return Axios.put<UpdateMultiplexProgramResponse>(this.baseUri + '/prod/multiplexes/' + (multiplexId == null ? '' : encodeURIComponent(multiplexId)) + '/programs/' + (programName == null ? '' : encodeURIComponent(programName)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Delete an expired reservation.
		 * Delete /prod/reservations/{reservationId}
		 * @param {string} reservationId Unique reservation ID, e.g. '1234567'
		 * @return {DeleteReservationResponse} Success
		 */
		DeleteReservation(reservationId: string, headersHandler?: () => {[header: string]: string}): Promise<DeleteReservationResponse> {
			return Axios.delete<DeleteReservationResponse>(this.baseUri + '/prod/reservations/' + (reservationId == null ? '' : encodeURIComponent(reservationId)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Get details for a reservation.
		 * Get /prod/reservations/{reservationId}
		 * @param {string} reservationId Unique reservation ID, e.g. '1234567'
		 * @return {DescribeReservationResponse} Success
		 */
		DescribeReservation(reservationId: string, headersHandler?: () => {[header: string]: string}): Promise<DescribeReservationResponse> {
			return Axios.get<DescribeReservationResponse>(this.baseUri + '/prod/reservations/' + (reservationId == null ? '' : encodeURIComponent(reservationId)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Update reservation.
		 * Put /prod/reservations/{reservationId}
		 * @param {string} reservationId Unique reservation ID, e.g. '1234567'
		 * @return {UpdateReservationResponse} Success
		 */
		UpdateReservation(reservationId: string, requestBody: UpdateReservationBody, headersHandler?: () => {[header: string]: string}): Promise<UpdateReservationResponse> {
			return Axios.put<UpdateReservationResponse>(this.baseUri + '/prod/reservations/' + (reservationId == null ? '' : encodeURIComponent(reservationId)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Removes tags for a resource
		 * Delete /prod/tags/{resource_arn}#tagKeys
		 * @param {Array<__string>} tagKeys An array of tag keys to delete
		 * @return {void} 
		 */
		DeleteTags(resource_arn: string, tagKeys: Array<__string>, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.delete(this.baseUri + '/prod/tags/' + (resource_arn == null ? '' : encodeURIComponent(resource_arn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${z}`).join('&'), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Gets the details for the input device
		 * Get /prod/inputDevices/{inputDeviceId}
		 * @param {string} inputDeviceId The unique ID of this input device. For example, hd-123456789abcdef.
		 * @return {DescribeInputDeviceResponse} Success
		 */
		DescribeInputDevice(inputDeviceId: string, headersHandler?: () => {[header: string]: string}): Promise<DescribeInputDeviceResponse> {
			return Axios.get<DescribeInputDeviceResponse>(this.baseUri + '/prod/inputDevices/' + (inputDeviceId == null ? '' : encodeURIComponent(inputDeviceId)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Updates the parameters for the input device.
		 * Put /prod/inputDevices/{inputDeviceId}
		 * @param {string} inputDeviceId The unique ID of the input device. For example, hd-123456789abcdef.
		 * @return {UpdateInputDeviceResponse} Success
		 */
		UpdateInputDevice(inputDeviceId: string, requestBody: UpdateInputDeviceBody, headersHandler?: () => {[header: string]: string}): Promise<UpdateInputDeviceResponse> {
			return Axios.put<UpdateInputDeviceResponse>(this.baseUri + '/prod/inputDevices/' + (inputDeviceId == null ? '' : encodeURIComponent(inputDeviceId)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Get details for an offering.
		 * Get /prod/offerings/{offeringId}
		 * @param {string} offeringId Unique offering ID, e.g. '87654321'
		 * @return {DescribeOfferingResponse} Success
		 */
		DescribeOffering(offeringId: string, headersHandler?: () => {[header: string]: string}): Promise<DescribeOfferingResponse> {
			return Axios.get<DescribeOfferingResponse>(this.baseUri + '/prod/offerings/' + (offeringId == null ? '' : encodeURIComponent(offeringId)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * List input devices
		 * Get /prod/inputDevices
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListInputDevicesResponse} Success
		 */
		ListInputDevices(maxResults: number, nextToken: string, MaxResults: string, NextToken: string, headersHandler?: () => {[header: string]: string}): Promise<ListInputDevicesResponse> {
			return Axios.get<ListInputDevicesResponse>(this.baseUri + '/prod/inputDevices?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * List offerings available for purchase.
		 * Get /prod/offerings
		 * @param {string} channelClass Filter by channel class, 'STANDARD' or 'SINGLE_PIPELINE'
		 * @param {string} channelConfiguration Filter to offerings that match the configuration of an existing channel, e.g. '2345678' (a channel ID)
		 * @param {string} codec Filter by codec, 'AVC', 'HEVC', 'MPEG2', or 'AUDIO'
		 * @param {string} duration Filter by offering duration, e.g. '12'
		 * @param {string} maximumBitrate Filter by bitrate, 'MAX_10_MBPS', 'MAX_20_MBPS', or 'MAX_50_MBPS'
		 * @param {string} maximumFramerate Filter by framerate, 'MAX_30_FPS' or 'MAX_60_FPS'
		 * @param {string} resolution Filter by resolution, 'SD', 'HD', 'FHD', or 'UHD'
		 * @param {string} resourceType Filter by resource type, 'INPUT', 'OUTPUT', 'MULTIPLEX', or 'CHANNEL'
		 * @param {string} specialFeature Filter by special feature, 'ADVANCED_AUDIO' or 'AUDIO_NORMALIZATION'
		 * @param {string} videoQuality Filter by video quality, 'STANDARD', 'ENHANCED', or 'PREMIUM'
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListOfferingsResponse} Success
		 */
		ListOfferings(channelClass: string, channelConfiguration: string, codec: string, duration: string, maxResults: number, maximumBitrate: string, maximumFramerate: string, nextToken: string, resolution: string, resourceType: string, specialFeature: string, videoQuality: string, MaxResults: string, NextToken: string, headersHandler?: () => {[header: string]: string}): Promise<ListOfferingsResponse> {
			return Axios.get<ListOfferingsResponse>(this.baseUri + '/prod/offerings?channelClass=' + (channelClass == null ? '' : encodeURIComponent(channelClass)) + '&channelConfiguration=' + (channelConfiguration == null ? '' : encodeURIComponent(channelConfiguration)) + '&codec=' + (codec == null ? '' : encodeURIComponent(codec)) + '&duration=' + (duration == null ? '' : encodeURIComponent(duration)) + '&maxResults=' + maxResults + '&maximumBitrate=' + (maximumBitrate == null ? '' : encodeURIComponent(maximumBitrate)) + '&maximumFramerate=' + (maximumFramerate == null ? '' : encodeURIComponent(maximumFramerate)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&resolution=' + (resolution == null ? '' : encodeURIComponent(resolution)) + '&resourceType=' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '&specialFeature=' + (specialFeature == null ? '' : encodeURIComponent(specialFeature)) + '&videoQuality=' + (videoQuality == null ? '' : encodeURIComponent(videoQuality)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * List purchased reservations.
		 * Get /prod/reservations
		 * @param {string} channelClass Filter by channel class, 'STANDARD' or 'SINGLE_PIPELINE'
		 * @param {string} codec Filter by codec, 'AVC', 'HEVC', 'MPEG2', or 'AUDIO'
		 * @param {string} maximumBitrate Filter by bitrate, 'MAX_10_MBPS', 'MAX_20_MBPS', or 'MAX_50_MBPS'
		 * @param {string} maximumFramerate Filter by framerate, 'MAX_30_FPS' or 'MAX_60_FPS'
		 * @param {string} resolution Filter by resolution, 'SD', 'HD', 'FHD', or 'UHD'
		 * @param {string} resourceType Filter by resource type, 'INPUT', 'OUTPUT', 'MULTIPLEX', or 'CHANNEL'
		 * @param {string} specialFeature Filter by special feature, 'ADVANCED_AUDIO' or 'AUDIO_NORMALIZATION'
		 * @param {string} videoQuality Filter by video quality, 'STANDARD', 'ENHANCED', or 'PREMIUM'
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListReservationsResponse} Success
		 */
		ListReservations(channelClass: string, codec: string, maxResults: number, maximumBitrate: string, maximumFramerate: string, nextToken: string, resolution: string, resourceType: string, specialFeature: string, videoQuality: string, MaxResults: string, NextToken: string, headersHandler?: () => {[header: string]: string}): Promise<ListReservationsResponse> {
			return Axios.get<ListReservationsResponse>(this.baseUri + '/prod/reservations?channelClass=' + (channelClass == null ? '' : encodeURIComponent(channelClass)) + '&codec=' + (codec == null ? '' : encodeURIComponent(codec)) + '&maxResults=' + maxResults + '&maximumBitrate=' + (maximumBitrate == null ? '' : encodeURIComponent(maximumBitrate)) + '&maximumFramerate=' + (maximumFramerate == null ? '' : encodeURIComponent(maximumFramerate)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&resolution=' + (resolution == null ? '' : encodeURIComponent(resolution)) + '&resourceType=' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '&specialFeature=' + (specialFeature == null ? '' : encodeURIComponent(specialFeature)) + '&videoQuality=' + (videoQuality == null ? '' : encodeURIComponent(videoQuality)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Purchase an offering and create a reservation.
		 * Post /prod/offerings/{offeringId}/purchase
		 * @param {string} offeringId Offering to purchase, e.g. '87654321'
		 * @return {void} 
		 */
		PurchaseOffering(offeringId: string, requestBody: PurchaseOfferingBody, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.post(this.baseUri + '/prod/offerings/' + (offeringId == null ? '' : encodeURIComponent(offeringId)) + '/purchase', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Starts an existing channel
		 * Post /prod/channels/{channelId}/start
		 * @param {string} channelId A request to start a channel
		 * @return {StartChannelResponse} Success
		 */
		StartChannel(channelId: string, headersHandler?: () => {[header: string]: string}): Promise<StartChannelResponse> {
			return Axios.post<StartChannelResponse>(this.baseUri + '/prod/channels/' + (channelId == null ? '' : encodeURIComponent(channelId)) + '/start', null, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Start (run) the multiplex. Starting the multiplex does not start the channels. You must explicitly start each channel.
		 * Post /prod/multiplexes/{multiplexId}/start
		 * @param {string} multiplexId The ID of the multiplex.
		 * @return {void} 
		 */
		StartMultiplex(multiplexId: string, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.post(this.baseUri + '/prod/multiplexes/' + (multiplexId == null ? '' : encodeURIComponent(multiplexId)) + '/start', null, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Stops a running channel
		 * Post /prod/channels/{channelId}/stop
		 * @param {string} channelId A request to stop a running channel
		 * @return {StopChannelResponse} Success
		 */
		StopChannel(channelId: string, headersHandler?: () => {[header: string]: string}): Promise<StopChannelResponse> {
			return Axios.post<StopChannelResponse>(this.baseUri + '/prod/channels/' + (channelId == null ? '' : encodeURIComponent(channelId)) + '/stop', null, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Stops a running multiplex. If the multiplex isn't running, this action has no effect.
		 * Post /prod/multiplexes/{multiplexId}/stop
		 * @param {string} multiplexId The ID of the multiplex.
		 * @return {void} 
		 */
		StopMultiplex(multiplexId: string, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.post(this.baseUri + '/prod/multiplexes/' + (multiplexId == null ? '' : encodeURIComponent(multiplexId)) + '/stop', null, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Changes the class of the channel.
		 * Put /prod/channels/{channelId}/channelClass
		 * @param {string} channelId Channel Id of the channel whose class should be updated.
		 * @return {UpdateChannelClassResponse} Success
		 */
		UpdateChannelClass(channelId: string, requestBody: UpdateChannelClassBody, headersHandler?: () => {[header: string]: string}): Promise<UpdateChannelClassResponse> {
			return Axios.put<UpdateChannelClassResponse>(this.baseUri + '/prod/channels/' + (channelId == null ? '' : encodeURIComponent(channelId)) + '/channelClass', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}
	}

	export interface BatchUpdateScheduleBody {

		/**A list of schedule actions to create (in a request) or that have been created (in a response). */
		creates?: string;

		/**A list of schedule actions to delete. */
		deletes?: string;
	}

	export interface CreateChannelBody {

		/**A standard channel has two encoding pipelines and a single pipeline channel only has one. */
		channelClass?: CreateChannelBodyChannelClass;

		/**Placeholder documentation for __listOfOutputDestination */
		destinations?: Array<OutputDestination>;

		/**Encoder Settings */
		encoderSettings?: string;

		/**Placeholder documentation for __listOfInputAttachment */
		inputAttachments?: Array<InputAttachment>;

		/**Placeholder documentation for InputSpecification */
		inputSpecification?: string;

		/**The log level the user wants for their channel. */
		logLevel?: CreateChannelBodyLogLevel;

		/**Placeholder documentation for __string */
		name?: string;

		/**Placeholder documentation for __string */
		requestId?: string;

		/**Placeholder documentation for __string */
		reserved?: string;

		/**Placeholder documentation for __string */
		roleArn?: string;

		/**Placeholder documentation for Tags */
		tags?: string;
	}

	export enum CreateChannelBodyChannelClass { STANDARD = 0, SINGLE_PIPELINE = 1 }

	export enum CreateChannelBodyLogLevel { ERROR = 0, WARNING = 1, INFO = 2, DEBUG = 3, DISABLED = 4 }

	export interface CreateInputBody {

		/**Placeholder documentation for __listOfInputDestinationRequest */
		destinations?: Array<InputDestinationRequest>;

		/**Placeholder documentation for __listOfInputDeviceSettings */
		inputDevices?: Array<InputDeviceSettings>;

		/**Placeholder documentation for __listOf__string */
		inputSecurityGroups?: Array<__string>;

		/**Placeholder documentation for __listOfMediaConnectFlowRequest */
		mediaConnectFlows?: Array<MediaConnectFlowRequest>;

		/**Placeholder documentation for __string */
		name?: string;

		/**Placeholder documentation for __string */
		requestId?: string;

		/**Placeholder documentation for __string */
		roleArn?: string;

		/**Placeholder documentation for __listOfInputSourceRequest */
		sources?: Array<InputSourceRequest>;

		/**Placeholder documentation for Tags */
		tags?: string;

		/**Placeholder documentation for InputType */
		type?: CreateInputBodyType;

		/**
		 * Settings for a private VPC Input.
		 * When this property is specified, the input destination addresses will be created in a VPC rather than with public Internet addresses.
		 * This property requires setting the roleArn property on Input creation.
		 * Not compatible with the inputSecurityGroups property.
		 */
		vpc?: string;
	}

	export enum CreateInputBodyType { UDP_PUSH = 0, RTP_PUSH = 1, RTMP_PUSH = 2, RTMP_PULL = 3, URL_PULL = 4, MP4_FILE = 5, MEDIACONNECT = 6, INPUT_DEVICE = 7 }

	export interface CreateInputSecurityGroupBody {

		/**Placeholder documentation for Tags */
		tags?: string;

		/**Placeholder documentation for __listOfInputWhitelistRuleCidr */
		whitelistRules?: Array<InputWhitelistRuleCidr>;
	}

	export interface CreateMultiplexBody {

		/**Placeholder documentation for __listOf__string */
		availabilityZones: Array<__string>;

		/**Contains configuration for a Multiplex event */
		multiplexSettings: string;

		/**Placeholder documentation for __string */
		name: string;

		/**Placeholder documentation for __string */
		requestId: string;

		/**Placeholder documentation for Tags */
		tags?: string;
	}

	export interface CreateMultiplexProgramBody {

		/**Multiplex Program settings configuration. */
		multiplexProgramSettings: string;

		/**Placeholder documentation for __string */
		programName: string;

		/**Placeholder documentation for __string */
		requestId: string;
	}

	export interface CreateTagsBody {

		/**Placeholder documentation for Tags */
		tags?: string;
	}

	export interface UpdateChannelBody {

		/**Placeholder documentation for __listOfOutputDestination */
		destinations?: Array<OutputDestination>;

		/**Encoder Settings */
		encoderSettings?: string;

		/**Placeholder documentation for __listOfInputAttachment */
		inputAttachments?: Array<InputAttachment>;

		/**Placeholder documentation for InputSpecification */
		inputSpecification?: string;

		/**The log level the user wants for their channel. */
		logLevel?: UpdateChannelBodyLogLevel;

		/**Placeholder documentation for __string */
		name?: string;

		/**Placeholder documentation for __string */
		roleArn?: string;
	}

	export enum UpdateChannelBodyLogLevel { ERROR = 0, WARNING = 1, INFO = 2, DEBUG = 3, DISABLED = 4 }

	export interface UpdateInputBody {

		/**Placeholder documentation for __listOfInputDestinationRequest */
		destinations?: Array<InputDestinationRequest>;

		/**Placeholder documentation for __listOfInputDeviceRequest */
		inputDevices?: Array<InputDeviceRequest>;

		/**Placeholder documentation for __listOf__string */
		inputSecurityGroups?: Array<__string>;

		/**Placeholder documentation for __listOfMediaConnectFlowRequest */
		mediaConnectFlows?: Array<MediaConnectFlowRequest>;

		/**Placeholder documentation for __string */
		name?: string;

		/**Placeholder documentation for __string */
		roleArn?: string;

		/**Placeholder documentation for __listOfInputSourceRequest */
		sources?: Array<InputSourceRequest>;
	}

	export interface UpdateInputSecurityGroupBody {

		/**Placeholder documentation for Tags */
		tags?: string;

		/**Placeholder documentation for __listOfInputWhitelistRuleCidr */
		whitelistRules?: Array<InputWhitelistRuleCidr>;
	}

	export interface UpdateMultiplexBody {

		/**Contains configuration for a Multiplex event */
		multiplexSettings?: string;

		/**Placeholder documentation for __string */
		name?: string;
	}

	export interface UpdateMultiplexProgramBody {

		/**Multiplex Program settings configuration. */
		multiplexProgramSettings?: string;
	}

	export interface UpdateReservationBody {

		/**Placeholder documentation for __string */
		name?: string;
	}

	export interface UpdateInputDeviceBody {

		/**Configurable settings for the input device. */
		hdDeviceSettings?: string;

		/**Placeholder documentation for __string */
		name?: string;
	}

	export interface PurchaseOfferingBody {

		/**
		 * Placeholder documentation for __integerMin1
		 * Minimum: 1
		 */
		count: number;

		/**Placeholder documentation for __string */
		name?: string;

		/**Placeholder documentation for __string */
		requestId?: string;

		/**Placeholder documentation for __string */
		start?: string;

		/**Placeholder documentation for Tags */
		tags?: string;
	}

	export interface UpdateChannelClassBody {

		/**A standard channel has two encoding pipelines and a single pipeline channel only has one. */
		channelClass: UpdateChannelClassBodyChannelClass;

		/**Placeholder documentation for __listOfOutputDestination */
		destinations?: Array<OutputDestination>;
	}

	export enum UpdateChannelClassBodyChannelClass { STANDARD = 0, SINGLE_PIPELINE = 1 }

}

