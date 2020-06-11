import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace My_Demo_Client {
	export interface ApproveSkillRequest {
		SkillId: string;
	}

	export interface AssociateContactWithAddressBookRequest {
		ContactArn: string;
		AddressBookArn: string;
	}

	export interface AssociateDeviceWithNetworkProfileRequest {
		DeviceArn: string;
		NetworkProfileArn: string;
	}

	export interface AssociateDeviceWithRoomRequest {
		DeviceArn?: string;
		RoomArn?: string;
	}

	export interface AssociateSkillGroupWithRoomRequest {
		SkillGroupArn?: string;
		RoomArn?: string;
	}

	export interface AssociateSkillWithSkillGroupRequest {
		SkillGroupArn?: string;
		SkillId: string;
	}

	export interface AssociateSkillWithUsersRequest {
		SkillId: string;
	}

	export interface CreateAddressBookResponse {
		AddressBookArn?: string;
	}

	export interface CreateAddressBookRequest {
		Name: string;
		Description?: string;

		/**
		 * A unique, user-specified identifier for the request that ensures idempotency.
		 * Max length: 150
		 * Min length: 10
		 * Pattern: [a-zA-Z0-9][a-zA-Z0-9_-]*
		 */
		ClientRequestToken?: string;
	}

	export interface CreateBusinessReportScheduleResponse {
		ScheduleArn?: string;
	}

	export interface CreateBusinessReportScheduleRequest {
		ScheduleName?: string;
		S3BucketName?: string;
		S3KeyPrefix?: string;
		Format: CreateBusinessReportScheduleRequestFormat;

		/**The content range of the report. */
		ContentRange: BusinessReportContentRange;

		/**The recurrence of the reports. */
		Recurrence?: BusinessReportRecurrence;

		/**
		 * A unique, user-specified identifier for the request that ensures idempotency.
		 * Max length: 150
		 * Min length: 10
		 * Pattern: [a-zA-Z0-9][a-zA-Z0-9_-]*
		 */
		ClientRequestToken?: string;
	}

	export enum CreateBusinessReportScheduleRequestFormat { CSV = 0, CSV_ZIP = 1 }

	export interface CreateConferenceProviderResponse {
		ConferenceProviderArn?: string;
	}

	export interface CreateConferenceProviderRequest {
		ConferenceProviderName: string;
		ConferenceProviderType: CreateConferenceProviderRequestConferenceProviderType;

		/**The IP endpoint and protocol for calling. */
		IPDialIn?: IPDialIn;

		/**The information for public switched telephone network (PSTN) conferencing. */
		PSTNDialIn?: PSTNDialIn;

		/**<p>The values that indicate whether a pin is always required (YES), never required (NO), or OPTIONAL.</p> <ul> <li> <p>If YES, Alexa will always ask for a meeting pin.</p> </li> <li> <p>If NO, Alexa will never ask for a meeting pin.</p> </li> <li> <p>If OPTIONAL, Alexa will ask if you have a meeting pin and if the customer responds with yes, it will ask for the meeting pin.</p> </li> </ul> */
		MeetingSetting: MeetingSetting;

		/**
		 * A unique, user-specified identifier for the request that ensures idempotency.
		 * Max length: 150
		 * Min length: 10
		 * Pattern: [a-zA-Z0-9][a-zA-Z0-9_-]*
		 */
		ClientRequestToken?: string;
	}

	export enum CreateConferenceProviderRequestConferenceProviderType { CHIME = 0, BLUEJEANS = 1, FUZE = 2, GOOGLE_HANGOUTS = 3, POLYCOM = 4, RINGCENTRAL = 5, SKYPE_FOR_BUSINESS = 6, WEBEX = 7, ZOOM = 8, CUSTOM = 9 }

	export interface CreateContactResponse {
		ContactArn?: string;
	}

	export interface CreateContactRequest {
		DisplayName?: string;
		FirstName: string;
		LastName?: string;
		PhoneNumber?: string;
		PhoneNumbers?: Array<PhoneNumber>;
		SipAddresses?: Array<SipAddress>;

		/**
		 * A unique, user-specified identifier for the request that ensures idempotency.
		 * Max length: 150
		 * Min length: 10
		 * Pattern: [a-zA-Z0-9][a-zA-Z0-9_-]*
		 */
		ClientRequestToken?: string;
	}

	export interface CreateGatewayGroupResponse {
		GatewayGroupArn?: string;
	}

	export interface CreateGatewayGroupRequest {
		Name: string;
		Description?: string;

		/**
		 * A unique, user-specified identifier for the request that ensures idempotency.
		 * Max length: 150
		 * Min length: 10
		 * Pattern: [a-zA-Z0-9][a-zA-Z0-9_-]*
		 */
		ClientRequestToken: string;
	}

	export interface CreateNetworkProfileResponse {
		NetworkProfileArn?: string;
	}

	export interface CreateNetworkProfileRequest {
		NetworkProfileName: string;
		Description?: string;
		Ssid: string;
		SecurityType: CreateNetworkProfileRequestSecurityType;
		EapMethod?: CreateNetworkProfileRequestEapMethod;
		CurrentPassword?: string;
		NextPassword?: string;
		CertificateAuthorityArn?: string;
		TrustAnchors?: Array<TrustAnchor>;

		/**
		 * A unique, user-specified identifier for the request that ensures idempotency.
		 * Max length: 150
		 * Min length: 10
		 * Pattern: [a-zA-Z0-9][a-zA-Z0-9_-]*
		 */
		ClientRequestToken: string;
	}

	export enum CreateNetworkProfileRequestSecurityType { OPEN = 0, WEP = 1, WPA_PSK = 2, WPA2_PSK = 3, WPA2_ENTERPRISE = 4 }

	export enum CreateNetworkProfileRequestEapMethod { EAP_TLS = 0 }

	export interface CreateProfileResponse {
		ProfileArn?: string;
	}

	export interface CreateProfileRequest {
		ProfileName: string;
		Timezone: string;
		Address: string;
		DistanceUnit: CreateProfileRequestDistanceUnit;
		TemperatureUnit: CreateProfileRequestTemperatureUnit;
		WakeWord: CreateProfileRequestWakeWord;
		Locale?: string;

		/**
		 * A unique, user-specified identifier for the request that ensures idempotency.
		 * Max length: 150
		 * Min length: 10
		 * Pattern: [a-zA-Z0-9][a-zA-Z0-9_-]*
		 */
		ClientRequestToken?: string;
		SetupModeDisabled?: boolean;
		MaxVolumeLimit?: number;
		PSTNEnabled?: boolean;

		/**Creates meeting room settings of a room profile. */
		MeetingRoomConfiguration?: CreateMeetingRoomConfiguration;
	}

	export enum CreateProfileRequestDistanceUnit { METRIC = 0, IMPERIAL = 1 }

	export enum CreateProfileRequestTemperatureUnit { FAHRENHEIT = 0, CELSIUS = 1 }

	export enum CreateProfileRequestWakeWord { ALEXA = 0, AMAZON = 1, ECHO = 2, COMPUTER = 3 }

	export interface CreateRoomResponse {
		RoomArn?: string;
	}

	export interface CreateRoomRequest {
		RoomName: string;
		Description?: string;
		ProfileArn?: string;
		ProviderCalendarId?: string;

		/**
		 * A unique, user-specified identifier for the request that ensures idempotency.
		 * Max length: 150
		 * Min length: 10
		 * Pattern: [a-zA-Z0-9][a-zA-Z0-9_-]*
		 */
		ClientRequestToken?: string;
		Tags?: Array<Tag>;
	}

	export interface CreateSkillGroupResponse {
		SkillGroupArn?: string;
	}

	export interface CreateSkillGroupRequest {
		SkillGroupName: string;
		Description?: string;

		/**
		 * A unique, user-specified identifier for the request that ensures idempotency.
		 * Max length: 150
		 * Min length: 10
		 * Pattern: [a-zA-Z0-9][a-zA-Z0-9_-]*
		 */
		ClientRequestToken?: string;
	}

	export interface CreateUserResponse {
		UserArn?: string;
	}

	export interface CreateUserRequest {
		UserId: string;
		FirstName?: string;
		LastName?: string;
		Email?: string;

		/**
		 * A unique, user-specified identifier for the request that ensures idempotency.
		 * Max length: 150
		 * Min length: 10
		 * Pattern: [a-zA-Z0-9][a-zA-Z0-9_-]*
		 */
		ClientRequestToken?: string;
		Tags?: Array<Tag>;
	}

	export interface DeleteAddressBookRequest {
		AddressBookArn: string;
	}

	export interface DeleteBusinessReportScheduleRequest {
		ScheduleArn: string;
	}

	export interface DeleteConferenceProviderRequest {
		ConferenceProviderArn: string;
	}

	export interface DeleteContactRequest {
		ContactArn: string;
	}

	export interface DeleteDeviceRequest {
		DeviceArn: string;
	}

	export interface DeleteDeviceUsageDataRequest {
		DeviceArn: string;
		DeviceUsageType: DeleteDeviceUsageDataRequestDeviceUsageType;
	}

	export enum DeleteDeviceUsageDataRequestDeviceUsageType { VOICE = 0 }

	export interface DeleteGatewayGroupRequest {
		GatewayGroupArn: string;
	}

	export interface DeleteNetworkProfileRequest {
		NetworkProfileArn: string;
	}

	export interface DeleteProfileRequest {
		ProfileArn?: string;
	}

	export interface DeleteRoomRequest {
		RoomArn?: string;
	}

	export interface DeleteRoomSkillParameterRequest {
		RoomArn?: string;
		SkillId: string;
		ParameterKey: string;
	}

	export interface DeleteSkillAuthorizationRequest {
		SkillId: string;
		RoomArn?: string;
	}

	export interface DeleteSkillGroupRequest {
		SkillGroupArn?: string;
	}

	export interface DeleteUserRequest {
		UserArn?: string;
		EnrollmentId: string;
	}

	export interface DisassociateContactFromAddressBookRequest {
		ContactArn: string;
		AddressBookArn: string;
	}

	export interface DisassociateDeviceFromRoomRequest {
		DeviceArn?: string;
	}

	export interface DisassociateSkillFromSkillGroupRequest {
		SkillGroupArn?: string;
		SkillId: string;
	}

	export interface DisassociateSkillFromUsersRequest {
		SkillId: string;
	}

	export interface DisassociateSkillGroupFromRoomRequest {
		SkillGroupArn?: string;
		RoomArn?: string;
	}

	export interface ForgetSmartHomeAppliancesRequest {
		RoomArn: string;
	}

	export interface GetAddressBookResponse {

		/**An address book with attributes. */
		AddressBook?: AddressBook;
	}

	export interface GetAddressBookRequest {
		AddressBookArn: string;
	}

	export interface GetConferencePreferenceResponse {

		/**The default conference provider that is used if no other scheduled meetings are detected. */
		Preference?: ConferencePreference;
	}

	export interface GetConferenceProviderResponse {

		/**An entity that provides a conferencing solution. Alexa for Business acts as the voice interface and mediator that connects users to their preferred conference provider. Examples of conference providers include Amazon Chime, Zoom, Cisco, and Polycom. */
		ConferenceProvider?: ConferenceProvider;
	}

	export interface GetConferenceProviderRequest {
		ConferenceProviderArn: string;
	}

	export interface GetContactResponse {

		/**A contact with attributes. */
		Contact?: Contact;
	}

	export interface GetContactRequest {
		ContactArn: string;
	}

	export interface GetDeviceResponse {

		/**A device with attributes. */
		Device?: Device;
	}

	export interface GetDeviceRequest {
		DeviceArn?: string;
	}

	export interface GetGatewayResponse {

		/**The details of the gateway. */
		Gateway?: Gateway;
	}

	export interface GetGatewayRequest {
		GatewayArn: string;
	}

	export interface GetGatewayGroupResponse {

		/**The details of the gateway group. */
		GatewayGroup?: GatewayGroup;
	}

	export interface GetGatewayGroupRequest {
		GatewayGroupArn: string;
	}

	export interface GetInvitationConfigurationResponse {
		OrganizationName?: string;
		ContactEmail?: string;
		PrivateSkillIds?: Array<SkillId>;
	}

	export interface GetNetworkProfileResponse {

		/**The network profile associated with a device. */
		NetworkProfile?: NetworkProfile;
	}

	export interface GetNetworkProfileRequest {
		NetworkProfileArn: string;
	}

	export interface GetProfileResponse {

		/**A room profile with attributes. */
		Profile?: Profile;
	}

	export interface GetProfileRequest {
		ProfileArn?: string;
	}

	export interface GetRoomResponse {

		/**A room with attributes. */
		Room?: Room;
	}

	export interface GetRoomRequest {
		RoomArn?: string;
	}

	export interface GetRoomSkillParameterResponse {

		/**A skill parameter associated with a room. */
		RoomSkillParameter?: RoomSkillParameter;
	}

	export interface GetRoomSkillParameterRequest {
		RoomArn?: string;
		SkillId: string;
		ParameterKey: string;
	}

	export interface GetSkillGroupResponse {

		/**A skill group with attributes. */
		SkillGroup?: SkillGroup;
	}

	export interface GetSkillGroupRequest {
		SkillGroupArn?: string;
	}

	export interface ListBusinessReportSchedulesResponse {
		BusinessReportSchedules?: Array<BusinessReportSchedule>;
		NextToken?: string;
	}

	export interface ListBusinessReportSchedulesRequest {
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListConferenceProvidersResponse {
		ConferenceProviders?: Array<ConferenceProvider>;
		NextToken?: string;
	}

	export interface ListConferenceProvidersRequest {
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListDeviceEventsResponse {
		DeviceEvents?: Array<DeviceEvent>;
		NextToken?: string;
	}

	export interface ListDeviceEventsRequest {
		DeviceArn: string;
		EventType?: ListDeviceEventsRequestEventType;
		NextToken?: string;
		MaxResults?: number;
	}

	export enum ListDeviceEventsRequestEventType { CONNECTION_STATUS = 0, DEVICE_STATUS = 1 }

	export interface ListGatewayGroupsResponse {
		GatewayGroups?: Array<GatewayGroupSummary>;
		NextToken?: string;
	}

	export interface ListGatewayGroupsRequest {
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListGatewaysResponse {
		Gateways?: Array<GatewaySummary>;
		NextToken?: string;
	}

	export interface ListGatewaysRequest {
		GatewayGroupArn?: string;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListSkillsResponse {
		SkillSummaries?: Array<SkillSummary>;
		NextToken?: string;
	}

	export interface ListSkillsRequest {
		SkillGroupArn?: string;
		EnablementType?: ListSkillsRequestEnablementType;
		SkillType?: ListSkillsRequestSkillType;
		NextToken?: string;
		MaxResults?: number;
	}

	export enum ListSkillsRequestEnablementType { ENABLED = 0, PENDING = 1 }

	export enum ListSkillsRequestSkillType { PUBLIC = 0, PRIVATE = 1, ALL = 2 }

	export interface ListSkillsStoreCategoriesResponse {
		CategoryList?: Array<Category>;
		NextToken?: string;
	}

	export interface ListSkillsStoreCategoriesRequest {
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListSkillsStoreSkillsByCategoryResponse {
		SkillsStoreSkills?: Array<SkillsStoreSkill>;
		NextToken?: string;
	}

	export interface ListSkillsStoreSkillsByCategoryRequest {
		CategoryId: number;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListSmartHomeAppliancesResponse {
		SmartHomeAppliances?: Array<SmartHomeAppliance>;
		NextToken?: string;
	}

	export interface ListSmartHomeAppliancesRequest {
		RoomArn: string;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface ListTagsResponse {
		Tags?: Array<Tag>;
		NextToken?: string;
	}

	export interface ListTagsRequest {
		Arn: string;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface PutConferencePreferenceRequest {

		/**The default conference provider that is used if no other scheduled meetings are detected. */
		ConferencePreference: ConferencePreference;
	}

	export interface PutInvitationConfigurationRequest {
		OrganizationName: string;
		ContactEmail?: string;
		PrivateSkillIds?: Array<SkillId>;
	}

	export interface PutRoomSkillParameterRequest {
		RoomArn?: string;
		SkillId: string;

		/**A skill parameter associated with a room. */
		RoomSkillParameter: RoomSkillParameter;
	}

	export interface PutSkillAuthorizationRequest {
		AuthorizationResult: AuthorizationResult;
		SkillId: string;
		RoomArn?: string;
	}

	export interface RegisterAVSDeviceResponse {
		DeviceArn?: string;
	}

	export interface RegisterAVSDeviceRequest {
		ClientId: string;
		UserCode: string;
		ProductId: string;
		DeviceSerialNumber: string;
		AmazonId: string;
	}

	export interface RejectSkillRequest {
		SkillId: string;
	}

	export interface ResolveRoomResponse {
		RoomArn?: string;
		RoomName?: string;
		RoomSkillParameters?: Array<RoomSkillParameter>;
	}

	export interface ResolveRoomRequest {
		UserId: string;
		SkillId: string;
	}

	export interface RevokeInvitationRequest {
		UserArn?: string;
		EnrollmentId?: string;
	}

	export interface SearchAddressBooksResponse {
		AddressBooks?: Array<AddressBookData>;
		NextToken?: string;
		TotalCount?: number;
	}

	export interface SearchAddressBooksRequest {
		Filters?: Array<Filter>;
		SortCriteria?: Array<Sort>;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface SearchContactsResponse {
		Contacts?: Array<ContactData>;
		NextToken?: string;
		TotalCount?: number;
	}

	export interface SearchContactsRequest {
		Filters?: Array<Filter>;
		SortCriteria?: Array<Sort>;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface SearchDevicesResponse {
		Devices?: Array<DeviceData>;
		NextToken?: string;
		TotalCount?: number;
	}

	export interface SearchDevicesRequest {
		NextToken?: string;
		MaxResults?: number;
		Filters?: Array<Filter>;
		SortCriteria?: Array<Sort>;
	}

	export interface SearchNetworkProfilesResponse {
		NetworkProfiles?: Array<NetworkProfileData>;
		NextToken?: string;
		TotalCount?: number;
	}

	export interface SearchNetworkProfilesRequest {
		NextToken?: string;
		MaxResults?: number;
		Filters?: Array<Filter>;
		SortCriteria?: Array<Sort>;
	}

	export interface SearchProfilesResponse {
		Profiles?: Array<ProfileData>;
		NextToken?: string;
		TotalCount?: number;
	}

	export interface SearchProfilesRequest {
		NextToken?: string;
		MaxResults?: number;
		Filters?: Array<Filter>;
		SortCriteria?: Array<Sort>;
	}

	export interface SearchRoomsResponse {
		Rooms?: Array<RoomData>;
		NextToken?: string;
		TotalCount?: number;
	}

	export interface SearchRoomsRequest {
		NextToken?: string;
		MaxResults?: number;
		Filters?: Array<Filter>;
		SortCriteria?: Array<Sort>;
	}

	export interface SearchSkillGroupsResponse {
		SkillGroups?: Array<SkillGroupData>;
		NextToken?: string;
		TotalCount?: number;
	}

	export interface SearchSkillGroupsRequest {
		NextToken?: string;
		MaxResults?: number;
		Filters?: Array<Filter>;
		SortCriteria?: Array<Sort>;
	}

	export interface SearchUsersResponse {
		Users?: Array<UserData>;
		NextToken?: string;
		TotalCount?: number;
	}

	export interface SearchUsersRequest {
		NextToken?: string;
		MaxResults?: number;
		Filters?: Array<Filter>;
		SortCriteria?: Array<Sort>;
	}

	export interface SendAnnouncementResponse {
		AnnouncementArn?: string;
	}

	export interface SendAnnouncementRequest {
		RoomFilters: Array<Filter>;

		/**The content definition. This can contain only one text, SSML, or audio list object. */
		Content: Content;
		TimeToLiveInSeconds?: number;

		/**
		 * A unique, user-specified identifier for the request that ensures idempotency.
		 * Max length: 150
		 * Min length: 10
		 * Pattern: [a-zA-Z0-9][a-zA-Z0-9_-]*
		 */
		ClientRequestToken: string;
	}

	export interface SendInvitationRequest {
		UserArn?: string;
	}

	export interface StartDeviceSyncRequest {
		RoomArn?: string;
		DeviceArn?: string;
		Features: Array<Feature>;
	}

	export interface StartSmartHomeApplianceDiscoveryRequest {
		RoomArn: string;
	}

	export interface TagResourceRequest {
		Arn: string;
		Tags: Array<Tag>;
	}

	export interface UntagResourceRequest {
		Arn: string;
		TagKeys: Array<TagKey>;
	}

	export interface UpdateAddressBookRequest {
		AddressBookArn: string;
		Name?: string;
		Description?: string;
	}

	export interface UpdateBusinessReportScheduleRequest {
		ScheduleArn: string;
		S3BucketName?: string;
		S3KeyPrefix?: string;
		Format?: UpdateBusinessReportScheduleRequestFormat;
		ScheduleName?: string;

		/**The recurrence of the reports. */
		Recurrence?: BusinessReportRecurrence;
	}

	export enum UpdateBusinessReportScheduleRequestFormat { CSV = 0, CSV_ZIP = 1 }

	export interface UpdateConferenceProviderRequest {
		ConferenceProviderArn: string;
		ConferenceProviderType: UpdateConferenceProviderRequestConferenceProviderType;

		/**The IP endpoint and protocol for calling. */
		IPDialIn?: IPDialIn;

		/**The information for public switched telephone network (PSTN) conferencing. */
		PSTNDialIn?: PSTNDialIn;

		/**<p>The values that indicate whether a pin is always required (YES), never required (NO), or OPTIONAL.</p> <ul> <li> <p>If YES, Alexa will always ask for a meeting pin.</p> </li> <li> <p>If NO, Alexa will never ask for a meeting pin.</p> </li> <li> <p>If OPTIONAL, Alexa will ask if you have a meeting pin and if the customer responds with yes, it will ask for the meeting pin.</p> </li> </ul> */
		MeetingSetting: MeetingSetting;
	}

	export enum UpdateConferenceProviderRequestConferenceProviderType { CHIME = 0, BLUEJEANS = 1, FUZE = 2, GOOGLE_HANGOUTS = 3, POLYCOM = 4, RINGCENTRAL = 5, SKYPE_FOR_BUSINESS = 6, WEBEX = 7, ZOOM = 8, CUSTOM = 9 }

	export interface UpdateContactRequest {
		ContactArn: string;
		DisplayName?: string;
		FirstName?: string;
		LastName?: string;
		PhoneNumber?: string;
		PhoneNumbers?: Array<PhoneNumber>;
		SipAddresses?: Array<SipAddress>;
	}

	export interface UpdateDeviceRequest {
		DeviceArn?: string;
		DeviceName?: string;
	}

	export interface UpdateGatewayRequest {
		GatewayArn: string;
		Name?: string;
		Description?: string;
		SoftwareVersion?: string;
	}

	export interface UpdateGatewayGroupRequest {
		GatewayGroupArn: string;
		Name?: string;
		Description?: string;
	}

	export interface UpdateNetworkProfileRequest {
		NetworkProfileArn: string;
		NetworkProfileName?: string;
		Description?: string;
		CurrentPassword?: string;
		NextPassword?: string;
		CertificateAuthorityArn?: string;
		TrustAnchors?: Array<TrustAnchor>;
	}

	export interface UpdateProfileRequest {
		ProfileArn?: string;
		ProfileName?: string;
		IsDefault?: boolean;
		Timezone?: string;
		Address?: string;
		DistanceUnit?: UpdateProfileRequestDistanceUnit;
		TemperatureUnit?: UpdateProfileRequestTemperatureUnit;
		WakeWord?: UpdateProfileRequestWakeWord;
		Locale?: string;
		SetupModeDisabled?: boolean;
		MaxVolumeLimit?: number;
		PSTNEnabled?: boolean;

		/**Updates meeting room settings of a room profile. */
		MeetingRoomConfiguration?: UpdateMeetingRoomConfiguration;
	}

	export enum UpdateProfileRequestDistanceUnit { METRIC = 0, IMPERIAL = 1 }

	export enum UpdateProfileRequestTemperatureUnit { FAHRENHEIT = 0, CELSIUS = 1 }

	export enum UpdateProfileRequestWakeWord { ALEXA = 0, AMAZON = 1, ECHO = 2, COMPUTER = 3 }

	export interface UpdateRoomRequest {
		RoomArn?: string;
		RoomName?: string;
		Description?: string;
		ProviderCalendarId?: string;
		ProfileArn?: string;
	}

	export interface UpdateSkillGroupRequest {
		SkillGroupArn?: string;
		SkillGroupName?: string;
		Description?: string;
	}


	/**An address book with attributes. */
	export interface AddressBook {
		AddressBookArn?: string;
		Name?: string;
		Description?: string;
	}


	/**Information related to an address book. */
	export interface AddressBookData {
		AddressBookArn?: string;
		Name?: string;
		Description?: string;
	}

	export enum Locale { en-US = 0 }


	/**<p>The audio message. There is a 1 MB limit on the audio file input and the only supported format is MP3. To convert your MP3 audio files to an Alexa-friendly, </p> <p>required codec version (MPEG version 2) and bit rate (48 kbps), you might use converter software. One option for this is a command-line tool, FFmpeg. For more information, see <a href="https://www.ffmpeg.org/">FFmpeg</a>. The following command converts the provided &lt;input-file&gt; to an MP3 file that is played in the announcement:</p> <p> <code>ffmpeg -i &lt;input-file&gt; -ac 2 -codec:a libmp3lame -b:a 48k -ar 16000 &lt;output-file.mp3&gt;</code> </p> */
	export interface Audio {
		Locale: AudioLocale;
		Location: string;
	}

	export enum AudioLocale { en-US = 0 }

	export enum BusinessReportStatus { RUNNING = 0, SUCCEEDED = 1, FAILED = 2 }

	export enum BusinessReportFailureCode { ACCESS_DENIED = 0, NO_SUCH_BUCKET = 1, INTERNAL_FAILURE = 2 }


	/**The S3 location of the output reports. */
	export interface BusinessReportS3Location {
		Path?: string;
		BucketName?: string;
	}


	/**Usage report with specified parameters. */
	export interface BusinessReport {
		Status?: BusinessReportStatus;
		FailureCode?: BusinessReportFailureCode;

		/**The S3 location of the output reports. */
		S3Location?: BusinessReportS3Location;
		DeliveryTime?: Date;
		DownloadUrl?: string;
	}

	export enum BusinessReportStatus { RUNNING = 0, SUCCEEDED = 1, FAILED = 2 }

	export enum BusinessReportFailureCode { ACCESS_DENIED = 0, NO_SUCH_BUCKET = 1, INTERNAL_FAILURE = 2 }

	export enum BusinessReportInterval { ONE_DAY = 0, ONE_WEEK = 1, THIRTY_DAYS = 2 }


	/**The content range of the report. */
	export interface BusinessReportContentRange {
		Interval?: BusinessReportContentRangeInterval;
	}

	export enum BusinessReportContentRangeInterval { ONE_DAY = 0, ONE_WEEK = 1, THIRTY_DAYS = 2 }

	export enum BusinessReportFormat { CSV = 0, CSV_ZIP = 1 }


	/**The recurrence of the reports. */
	export interface BusinessReportRecurrence {
		StartDate?: string;
	}


	/**The schedule of the usage report. */
	export interface BusinessReportSchedule {
		ScheduleArn?: string;
		ScheduleName?: string;
		S3BucketName?: string;
		S3KeyPrefix?: string;
		Format?: BusinessReportScheduleFormat;

		/**The content range of the report. */
		ContentRange?: BusinessReportContentRange;

		/**The recurrence of the reports. */
		Recurrence?: BusinessReportRecurrence;

		/**Usage report with specified parameters. */
		LastBusinessReport?: BusinessReport;
	}

	export enum BusinessReportScheduleFormat { CSV = 0, CSV_ZIP = 1 }


	/**The skill store category that is shown. Alexa skills are assigned a specific skill category during creation, such as News, Social, and Sports. */
	export interface Category {
		CategoryId?: number;
		CategoryName?: string;
	}

	export enum CommsProtocol { SIP = 0, SIPS = 1, H323 = 2 }


	/**The default conference provider that is used if no other scheduled meetings are detected. */
	export interface ConferencePreference {
		DefaultConferenceProviderArn?: string;
	}

	export enum ConferenceProviderType { CHIME = 0, BLUEJEANS = 1, FUZE = 2, GOOGLE_HANGOUTS = 3, POLYCOM = 4, RINGCENTRAL = 5, SKYPE_FOR_BUSINESS = 6, WEBEX = 7, ZOOM = 8, CUSTOM = 9 }


	/**The IP endpoint and protocol for calling. */
	export interface IPDialIn {
		Endpoint: string;
		CommsProtocol: IPDialInCommsProtocol;
	}

	export enum IPDialInCommsProtocol { SIP = 0, SIPS = 1, H323 = 2 }


	/**The information for public switched telephone network (PSTN) conferencing. */
	export interface PSTNDialIn {
		CountryCode: string;
		PhoneNumber: string;
		OneClickIdDelay: string;
		OneClickPinDelay: string;
	}


	/**<p>The values that indicate whether a pin is always required (YES), never required (NO), or OPTIONAL.</p> <ul> <li> <p>If YES, Alexa will always ask for a meeting pin.</p> </li> <li> <p>If NO, Alexa will never ask for a meeting pin.</p> </li> <li> <p>If OPTIONAL, Alexa will ask if you have a meeting pin and if the customer responds with yes, it will ask for the meeting pin.</p> </li> </ul> */
	export interface MeetingSetting {
		RequirePin: MeetingSettingRequirePin;
	}

	export enum MeetingSettingRequirePin { YES = 0, NO = 1, OPTIONAL = 2 }


	/**An entity that provides a conferencing solution. Alexa for Business acts as the voice interface and mediator that connects users to their preferred conference provider. Examples of conference providers include Amazon Chime, Zoom, Cisco, and Polycom.  */
	export interface ConferenceProvider {
		Arn?: string;
		Name?: string;
		Type?: ConferenceProviderType;

		/**The IP endpoint and protocol for calling. */
		IPDialIn?: IPDialIn;

		/**The information for public switched telephone network (PSTN) conferencing. */
		PSTNDialIn?: PSTNDialIn;

		/**<p>The values that indicate whether a pin is always required (YES), never required (NO), or OPTIONAL.</p> <ul> <li> <p>If YES, Alexa will always ask for a meeting pin.</p> </li> <li> <p>If NO, Alexa will never ask for a meeting pin.</p> </li> <li> <p>If OPTIONAL, Alexa will ask if you have a meeting pin and if the customer responds with yes, it will ask for the meeting pin.</p> </li> </ul> */
		MeetingSetting?: MeetingSetting;
	}

	export enum ConferenceProviderType { CHIME = 0, BLUEJEANS = 1, FUZE = 2, GOOGLE_HANGOUTS = 3, POLYCOM = 4, RINGCENTRAL = 5, SKYPE_FOR_BUSINESS = 6, WEBEX = 7, ZOOM = 8, CUSTOM = 9 }

	export enum ConnectionStatus { ONLINE = 0, OFFLINE = 1 }


	/**A contact with attributes. */
	export interface Contact {
		ContactArn?: string;
		DisplayName?: string;
		FirstName?: string;
		LastName?: string;
		PhoneNumber?: string;
		PhoneNumbers?: Array<PhoneNumber>;
		SipAddresses?: Array<SipAddress>;
	}


	/**Information related to a contact. */
	export interface ContactData {
		ContactArn?: string;
		DisplayName?: string;
		FirstName?: string;
		LastName?: string;
		PhoneNumber?: string;
		PhoneNumbers?: Array<PhoneNumber>;
		SipAddresses?: Array<SipAddress>;
	}


	/**The content definition. This can contain only one text, SSML, or audio list object. */
	export interface Content {
		TextList?: Array<Text>;
		SsmlList?: Array<Ssml>;
		AudioList?: Array<Audio>;
	}

	export enum EndOfMeetingReminderType { ANNOUNCEMENT_TIME_CHECK = 0, ANNOUNCEMENT_VARIABLE_TIME_LEFT = 1, CHIME = 2, KNOCK = 3 }


	/**Creates settings for the end of meeting reminder feature that are applied to a room profile. The end of meeting reminder enables Alexa to remind users when a meeting is ending. */
	export interface CreateEndOfMeetingReminder {
		ReminderAtMinutes: Array<Minutes>;
		ReminderType: CreateEndOfMeetingReminderReminderType;
		Enabled: boolean;
	}

	export enum CreateEndOfMeetingReminderReminderType { ANNOUNCEMENT_TIME_CHECK = 0, ANNOUNCEMENT_VARIABLE_TIME_LEFT = 1, CHIME = 2, KNOCK = 3 }


	/**Creates settings for the instant booking feature that are applied to a room profile. When users start their meeting with Alexa, Alexa automatically books the room for the configured duration if the room is available. */
	export interface CreateInstantBooking {
		DurationInMinutes: number;
		Enabled: boolean;
	}


	/**Creates settings for the require check in feature that are applied to a room profile. Require check in allows a meeting room’s Alexa or AVS device to prompt the user to check in; otherwise, the room will be released. */
	export interface CreateRequireCheckIn {
		ReleaseAfterMinutes: number;
		Enabled: boolean;
	}


	/**Creates meeting room settings of a room profile. */
	export interface CreateMeetingRoomConfiguration {
		RoomUtilizationMetricsEnabled?: boolean;

		/**Creates settings for the end of meeting reminder feature that are applied to a room profile. The end of meeting reminder enables Alexa to remind users when a meeting is ending. */
		EndOfMeetingReminder?: CreateEndOfMeetingReminder;

		/**Creates settings for the instant booking feature that are applied to a room profile. When users start their meeting with Alexa, Alexa automatically books the room for the configured duration if the room is available. */
		InstantBooking?: CreateInstantBooking;

		/**Creates settings for the require check in feature that are applied to a room profile. Require check in allows a meeting room’s Alexa or AVS device to prompt the user to check in; otherwise, the room will be released. */
		RequireCheckIn?: CreateRequireCheckIn;
	}

	export enum NetworkSecurityType { OPEN = 0, WEP = 1, WPA_PSK = 2, WPA2_PSK = 3, WPA2_ENTERPRISE = 4 }

	export enum NetworkEapMethod { EAP_TLS = 0 }

	export enum DistanceUnit { METRIC = 0, IMPERIAL = 1 }

	export enum TemperatureUnit { FAHRENHEIT = 0, CELSIUS = 1 }

	export enum WakeWord { ALEXA = 0, AMAZON = 1, ECHO = 2, COMPUTER = 3 }

	export enum DeviceUsageType { VOICE = 0 }


	/**The details about the developer that published the skill. */
	export interface DeveloperInfo {
		DeveloperName?: string;
		PrivacyPolicy?: string;
		Email?: string;
		Url?: string;
	}

	export enum DeviceStatus { READY = 0, PENDING = 1, WAS_OFFLINE = 2, DEREGISTERED = 3, FAILED = 4 }


	/**Detailed information about a device's status. */
	export interface DeviceStatusInfo {
		DeviceStatusDetails?: Array<DeviceStatusDetail>;
		ConnectionStatus?: DeviceStatusInfoConnectionStatus;
		ConnectionStatusUpdatedTime?: Date;
	}

	export enum DeviceStatusInfoConnectionStatus { ONLINE = 0, OFFLINE = 1 }


	/**Detailed information about a device's network profile. */
	export interface DeviceNetworkProfileInfo {
		NetworkProfileArn?: string;
		CertificateArn?: string;
		CertificateExpirationTime?: Date;
	}


	/**A device with attributes. */
	export interface Device {
		DeviceArn?: string;
		DeviceSerialNumber?: string;
		DeviceType?: string;
		DeviceName?: string;
		SoftwareVersion?: string;
		MacAddress?: string;
		RoomArn?: string;
		DeviceStatus?: DeviceDeviceStatus;

		/**Detailed information about a device's status. */
		DeviceStatusInfo?: DeviceStatusInfo;

		/**Detailed information about a device's network profile. */
		NetworkProfileInfo?: DeviceNetworkProfileInfo;
	}

	export enum DeviceDeviceStatus { READY = 0, PENDING = 1, WAS_OFFLINE = 2, DEREGISTERED = 3, FAILED = 4 }


	/**Device attributes. */
	export interface DeviceData {
		DeviceArn?: string;
		DeviceSerialNumber?: string;
		DeviceType?: string;
		DeviceName?: string;
		SoftwareVersion?: string;
		MacAddress?: string;
		DeviceStatus?: DeviceDataDeviceStatus;
		NetworkProfileArn?: string;
		NetworkProfileName?: string;
		RoomArn?: string;
		RoomName?: string;

		/**Detailed information about a device's status. */
		DeviceStatusInfo?: DeviceStatusInfo;
		CreatedTime?: Date;
	}

	export enum DeviceDataDeviceStatus { READY = 0, PENDING = 1, WAS_OFFLINE = 2, DEREGISTERED = 3, FAILED = 4 }

	export enum DeviceEventType { CONNECTION_STATUS = 0, DEVICE_STATUS = 1 }


	/**The list of device events. */
	export interface DeviceEvent {
		Type?: DeviceEventType;
		Value?: string;
		Timestamp?: Date;
	}

	export enum DeviceEventType { CONNECTION_STATUS = 0, DEVICE_STATUS = 1 }

	export enum Feature { BLUETOOTH = 0, VOLUME = 1, NOTIFICATIONS = 2, LISTS = 3, SKILLS = 4, NETWORK_PROFILE = 5, SETTINGS = 6, ALL = 7 }

	export enum DeviceStatusDetailCode { DEVICE_SOFTWARE_UPDATE_NEEDED = 0, DEVICE_WAS_OFFLINE = 1, CREDENTIALS_ACCESS_FAILURE = 2, TLS_VERSION_MISMATCH = 3, ASSOCIATION_REJECTION = 4, AUTHENTICATION_FAILURE = 5, DHCP_FAILURE = 6, INTERNET_UNAVAILABLE = 7, DNS_FAILURE = 8, UNKNOWN_FAILURE = 9, CERTIFICATE_ISSUING_LIMIT_EXCEEDED = 10, INVALID_CERTIFICATE_AUTHORITY = 11, NETWORK_PROFILE_NOT_FOUND = 12, INVALID_PASSWORD_STATE = 13, PASSWORD_NOT_FOUND = 14 }


	/**Details of a device’s status. */
	export interface DeviceStatusDetail {
		Feature?: DeviceStatusDetailFeature;
		Code?: DeviceStatusDetailCode;
	}

	export enum DeviceStatusDetailFeature { BLUETOOTH = 0, VOLUME = 1, NOTIFICATIONS = 2, LISTS = 3, SKILLS = 4, NETWORK_PROFILE = 5, SETTINGS = 6, ALL = 7 }

	export enum DeviceStatusDetailCode { DEVICE_SOFTWARE_UPDATE_NEEDED = 0, DEVICE_WAS_OFFLINE = 1, CREDENTIALS_ACCESS_FAILURE = 2, TLS_VERSION_MISMATCH = 3, ASSOCIATION_REJECTION = 4, AUTHENTICATION_FAILURE = 5, DHCP_FAILURE = 6, INTERNET_UNAVAILABLE = 7, DNS_FAILURE = 8, UNKNOWN_FAILURE = 9, CERTIFICATE_ISSUING_LIMIT_EXCEEDED = 10, INVALID_CERTIFICATE_AUTHORITY = 11, NETWORK_PROFILE_NOT_FOUND = 12, INVALID_PASSWORD_STATE = 13, PASSWORD_NOT_FOUND = 14 }

	export enum EnablementType { ENABLED = 0, PENDING = 1 }

	export enum EnablementTypeFilter { ENABLED = 0, PENDING = 1 }


	/**Settings for the end of meeting reminder feature that are applied to a room profile. The end of meeting reminder enables Alexa to remind users when a meeting is ending.  */
	export interface EndOfMeetingReminder {
		ReminderAtMinutes?: Array<Minutes>;
		ReminderType?: EndOfMeetingReminderReminderType;
		Enabled?: boolean;
	}

	export enum EndOfMeetingReminderReminderType { ANNOUNCEMENT_TIME_CHECK = 0, ANNOUNCEMENT_VARIABLE_TIME_LEFT = 1, CHIME = 2, KNOCK = 3 }

	export enum EnrollmentStatus { INITIALIZED = 0, PENDING = 1, REGISTERED = 2, DISASSOCIATING = 3, DEREGISTERING = 4 }


	/**A filter name and value pair that is used to return a more specific list of results. Filters can be used to match a set of resources by various criteria. */
	export interface Filter {
		Key: string;
		Values: Array<FilterValue>;
	}


	/**The details of the gateway.  */
	export interface Gateway {
		Arn?: string;
		Name?: string;
		Description?: string;
		GatewayGroupArn?: string;
		SoftwareVersion?: string;
	}


	/**The details of the gateway group. */
	export interface GatewayGroup {
		Arn?: string;
		Name?: string;
		Description?: string;
	}


	/**The summary of a gateway group. */
	export interface GatewayGroupSummary {
		Arn?: string;
		Name?: string;
		Description?: string;
	}


	/**The summary of a gateway. */
	export interface GatewaySummary {
		Arn?: string;
		Name?: string;
		Description?: string;
		GatewayGroupArn?: string;
		SoftwareVersion?: string;
	}


	/**The network profile associated with a device. */
	export interface NetworkProfile {
		NetworkProfileArn?: string;
		NetworkProfileName?: string;
		Description?: string;
		Ssid?: string;
		SecurityType?: NetworkProfileSecurityType;
		EapMethod?: NetworkProfileEapMethod;
		CurrentPassword?: string;
		NextPassword?: string;
		CertificateAuthorityArn?: string;
		TrustAnchors?: Array<TrustAnchor>;
	}

	export enum NetworkProfileSecurityType { OPEN = 0, WEP = 1, WPA_PSK = 2, WPA2_PSK = 3, WPA2_ENTERPRISE = 4 }

	export enum NetworkProfileEapMethod { EAP_TLS = 0 }


	/**A room profile with attributes. */
	export interface Profile {
		ProfileArn?: string;
		ProfileName?: string;
		IsDefault?: boolean;
		Address?: string;
		Timezone?: string;
		DistanceUnit?: ProfileDistanceUnit;
		TemperatureUnit?: ProfileTemperatureUnit;
		WakeWord?: ProfileWakeWord;
		Locale?: string;
		SetupModeDisabled?: boolean;
		MaxVolumeLimit?: number;
		PSTNEnabled?: boolean;
		AddressBookArn?: string;

		/**Meeting room settings of a room profile. */
		MeetingRoomConfiguration?: MeetingRoomConfiguration;
	}

	export enum ProfileDistanceUnit { METRIC = 0, IMPERIAL = 1 }

	export enum ProfileTemperatureUnit { FAHRENHEIT = 0, CELSIUS = 1 }

	export enum ProfileWakeWord { ALEXA = 0, AMAZON = 1, ECHO = 2, COMPUTER = 3 }


	/**A room with attributes. */
	export interface Room {
		RoomArn?: string;
		RoomName?: string;
		Description?: string;
		ProviderCalendarId?: string;
		ProfileArn?: string;
	}


	/**A skill parameter associated with a room. */
	export interface RoomSkillParameter {
		ParameterKey: string;
		ParameterValue: string;
	}


	/**A skill group with attributes. */
	export interface SkillGroup {
		SkillGroupArn?: string;
		SkillGroupName?: string;
		Description?: string;
	}


	/**Settings for the instant booking feature that are applied to a room profile. When users start their meeting with Alexa, Alexa automatically books the room for the configured duration if the room is available. */
	export interface InstantBooking {
		DurationInMinutes?: number;
		Enabled?: boolean;
	}

	export enum SkillTypeFilter { PUBLIC = 0, PRIVATE = 1, ALL = 2 }


	/**Settings for the require check in feature that are applied to a room profile. Require check in allows a meeting room’s Alexa or AVS device to prompt the user to check in; otherwise, the room will be released.  */
	export interface RequireCheckIn {
		ReleaseAfterMinutes?: number;
		Enabled?: boolean;
	}


	/**Meeting room settings of a room profile. */
	export interface MeetingRoomConfiguration {
		RoomUtilizationMetricsEnabled?: boolean;

		/**Settings for the end of meeting reminder feature that are applied to a room profile. The end of meeting reminder enables Alexa to remind users when a meeting is ending. */
		EndOfMeetingReminder?: EndOfMeetingReminder;

		/**Settings for the instant booking feature that are applied to a room profile. When users start their meeting with Alexa, Alexa automatically books the room for the configured duration if the room is available. */
		InstantBooking?: InstantBooking;

		/**Settings for the require check in feature that are applied to a room profile. Require check in allows a meeting room’s Alexa or AVS device to prompt the user to check in; otherwise, the room will be released. */
		RequireCheckIn?: RequireCheckIn;
	}

	export enum RequirePin { YES = 0, NO = 1, OPTIONAL = 2 }


	/**The data associated with a network profile. */
	export interface NetworkProfileData {
		NetworkProfileArn?: string;
		NetworkProfileName?: string;
		Description?: string;
		Ssid?: string;
		SecurityType?: NetworkProfileDataSecurityType;
		EapMethod?: NetworkProfileDataEapMethod;
		CertificateAuthorityArn?: string;
	}

	export enum NetworkProfileDataSecurityType { OPEN = 0, WEP = 1, WPA_PSK = 2, WPA2_PSK = 3, WPA2_ENTERPRISE = 4 }

	export enum NetworkProfileDataEapMethod { EAP_TLS = 0 }

	export enum PhoneNumberType { MOBILE = 0, WORK = 1, HOME = 2 }


	/**The phone number for the contact containing the raw number and phone number type. */
	export interface PhoneNumber {
		Number: string;
		Type: PhoneNumberType;
	}

	export enum PhoneNumberType { MOBILE = 0, WORK = 1, HOME = 2 }


	/**The data of a room profile. */
	export interface ProfileData {
		ProfileArn?: string;
		ProfileName?: string;
		IsDefault?: boolean;
		Address?: string;
		Timezone?: string;
		DistanceUnit?: ProfileDataDistanceUnit;
		TemperatureUnit?: ProfileDataTemperatureUnit;
		WakeWord?: ProfileDataWakeWord;
		Locale?: string;
	}

	export enum ProfileDataDistanceUnit { METRIC = 0, IMPERIAL = 1 }

	export enum ProfileDataTemperatureUnit { FAHRENHEIT = 0, CELSIUS = 1 }

	export enum ProfileDataWakeWord { ALEXA = 0, AMAZON = 1, ECHO = 2, COMPUTER = 3 }


	/**The data of a room. */
	export interface RoomData {
		RoomArn?: string;
		RoomName?: string;
		Description?: string;
		ProviderCalendarId?: string;
		ProfileArn?: string;
		ProfileName?: string;
	}

	export enum SipType { WORK = 0 }


	/**The SIP address for the contact containing the URI and SIP address type. */
	export interface SipAddress {
		Uri: string;
		Type: SipAddressType;
	}

	export enum SipAddressType { WORK = 0 }


	/**Granular information about the skill. */
	export interface SkillDetails {
		ProductDescription?: string;
		InvocationPhrase?: string;
		ReleaseDate?: string;
		EndUserLicenseAgreement?: string;
		GenericKeywords?: Array<GenericKeyword>;
		BulletPoints?: Array<BulletPoint>;
		NewInThisVersionBulletPoints?: Array<BulletPoint>;
		SkillTypes?: Array<SkillStoreType>;
		Reviews?: Reviews;

		/**The details about the developer that published the skill. */
		DeveloperInfo?: DeveloperInfo;
	}


	/**The attributes of a skill group. */
	export interface SkillGroupData {
		SkillGroupArn?: string;
		SkillGroupName?: string;
		Description?: string;
	}

	export enum SkillType { PUBLIC = 0, PRIVATE = 1 }


	/**The summary of skills. */
	export interface SkillSummary {
		SkillId?: string;
		SkillName?: string;
		SupportsLinking?: boolean;
		EnablementType?: SkillSummaryEnablementType;
		SkillType?: SkillSummarySkillType;
	}

	export enum SkillSummaryEnablementType { ENABLED = 0, PENDING = 1 }

	export enum SkillSummarySkillType { PUBLIC = 0, PRIVATE = 1 }


	/**The detailed information about an Alexa skill. */
	export interface SkillsStoreSkill {
		SkillId?: string;
		SkillName?: string;
		ShortDescription?: string;
		IconUrl?: string;
		SampleUtterances?: Array<Utterance>;

		/**Granular information about the skill. */
		SkillDetails?: SkillDetails;
		SupportsLinking?: boolean;
	}


	/**A smart home appliance that can connect to a central system. Any domestic device can be a smart appliance.  */
	export interface SmartHomeAppliance {
		FriendlyName?: string;
		Description?: string;
		ManufacturerName?: string;
	}

	export enum SortValue { ASC = 0, DESC = 1 }


	/**An object representing a sort criteria.  */
	export interface Sort {
		Key: string;
		Value: SortValue;
	}

	export enum SortValue { ASC = 0, DESC = 1 }


	/**The SSML message. For more information, see <a href="https://developer.amazon.com/docs/custom-skills/speech-synthesis-markup-language-ssml-reference.html">SSML Reference</a>. */
	export interface Ssml {
		Locale: SsmlLocale;
		Value: string;
	}

	export enum SsmlLocale { en-US = 0 }


	/**A key-value pair that can be associated with a resource.  */
	export interface Tag {
		Key: string;
		Value: string;
	}


	/**The text message. */
	export interface Text {
		Locale: TextLocale;
		Value: string;
	}

	export enum TextLocale { en-US = 0 }


	/**Settings for the end of meeting reminder feature that are applied to a room profile. The end of meeting reminder enables Alexa to remind users when a meeting is ending.  */
	export interface UpdateEndOfMeetingReminder {
		ReminderAtMinutes?: Array<Minutes>;
		ReminderType?: UpdateEndOfMeetingReminderReminderType;
		Enabled?: boolean;
	}

	export enum UpdateEndOfMeetingReminderReminderType { ANNOUNCEMENT_TIME_CHECK = 0, ANNOUNCEMENT_VARIABLE_TIME_LEFT = 1, CHIME = 2, KNOCK = 3 }


	/**Updates settings for the instant booking feature that are applied to a room profile. If instant booking is enabled, Alexa automatically reserves a room if it is free when a user joins a meeting with Alexa. */
	export interface UpdateInstantBooking {
		DurationInMinutes?: number;
		Enabled?: boolean;
	}


	/**Updates settings for the require check in feature that are applied to a room profile. Require check in allows a meeting room’s Alexa or AVS device to prompt the user to check in; otherwise, the room will be released.  */
	export interface UpdateRequireCheckIn {
		ReleaseAfterMinutes?: number;
		Enabled?: boolean;
	}


	/**Updates meeting room settings of a room profile. */
	export interface UpdateMeetingRoomConfiguration {
		RoomUtilizationMetricsEnabled?: boolean;

		/**Settings for the end of meeting reminder feature that are applied to a room profile. The end of meeting reminder enables Alexa to remind users when a meeting is ending. */
		EndOfMeetingReminder?: UpdateEndOfMeetingReminder;

		/**Updates settings for the instant booking feature that are applied to a room profile. If instant booking is enabled, Alexa automatically reserves a room if it is free when a user joins a meeting with Alexa. */
		InstantBooking?: UpdateInstantBooking;

		/**Updates settings for the require check in feature that are applied to a room profile. Require check in allows a meeting room’s Alexa or AVS device to prompt the user to check in; otherwise, the room will be released. */
		RequireCheckIn?: UpdateRequireCheckIn;
	}


	/**Information related to a user. */
	export interface UserData {
		UserArn?: string;
		FirstName?: string;
		LastName?: string;
		Email?: string;
		EnrollmentStatus?: UserDataEnrollmentStatus;
		EnrollmentId?: string;
	}

	export enum UserDataEnrollmentStatus { INITIALIZED = 0, PENDING = 1, REGISTERED = 2, DISASSOCIATING = 3, DEREGISTERING = 4 }

	@Injectable()
	export class DemoClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Associates a skill with the organization under the customer's AWS account. If a skill is private, the user implicitly accepts access to this skill during enablement.
		 * Post #X-Amz-Target=AlexaForBusiness.ApproveSkill
		 * @return {ApproveSkillResponse} Success
		 */
		ApproveSkill(requestBody: ApproveSkillRequest, headersHandler?: () => HttpHeaders): Observable<ApproveSkillResponse> {
			return this.http.post<ApproveSkillResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.ApproveSkill', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Associates a contact with a given address book.
		 * Post #X-Amz-Target=AlexaForBusiness.AssociateContactWithAddressBook
		 * @return {AssociateContactWithAddressBookResponse} Success
		 */
		AssociateContactWithAddressBook(requestBody: AssociateContactWithAddressBookRequest, headersHandler?: () => HttpHeaders): Observable<AssociateContactWithAddressBookResponse> {
			return this.http.post<AssociateContactWithAddressBookResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.AssociateContactWithAddressBook', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Associates a device with the specified network profile.
		 * Post #X-Amz-Target=AlexaForBusiness.AssociateDeviceWithNetworkProfile
		 * @return {AssociateDeviceWithNetworkProfileResponse} Success
		 */
		AssociateDeviceWithNetworkProfile(requestBody: AssociateDeviceWithNetworkProfileRequest, headersHandler?: () => HttpHeaders): Observable<AssociateDeviceWithNetworkProfileResponse> {
			return this.http.post<AssociateDeviceWithNetworkProfileResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.AssociateDeviceWithNetworkProfile', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Associates a device with a given room. This applies all the settings from the room profile to the device, and all the skills in any skill groups added to that room. This operation requires the device to be online, or else a manual sync is required.
		 * Post #X-Amz-Target=AlexaForBusiness.AssociateDeviceWithRoom
		 * @return {AssociateDeviceWithRoomResponse} Success
		 */
		AssociateDeviceWithRoom(requestBody: AssociateDeviceWithRoomRequest, headersHandler?: () => HttpHeaders): Observable<AssociateDeviceWithRoomResponse> {
			return this.http.post<AssociateDeviceWithRoomResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.AssociateDeviceWithRoom', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Associates a skill group with a given room. This enables all skills in the associated skill group on all devices in the room.
		 * Post #X-Amz-Target=AlexaForBusiness.AssociateSkillGroupWithRoom
		 * @return {AssociateSkillGroupWithRoomResponse} Success
		 */
		AssociateSkillGroupWithRoom(requestBody: AssociateSkillGroupWithRoomRequest, headersHandler?: () => HttpHeaders): Observable<AssociateSkillGroupWithRoomResponse> {
			return this.http.post<AssociateSkillGroupWithRoomResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.AssociateSkillGroupWithRoom', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Associates a skill with a skill group.
		 * Post #X-Amz-Target=AlexaForBusiness.AssociateSkillWithSkillGroup
		 * @return {AssociateSkillWithSkillGroupResponse} Success
		 */
		AssociateSkillWithSkillGroup(requestBody: AssociateSkillWithSkillGroupRequest, headersHandler?: () => HttpHeaders): Observable<AssociateSkillWithSkillGroupResponse> {
			return this.http.post<AssociateSkillWithSkillGroupResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.AssociateSkillWithSkillGroup', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Makes a private skill available for enrolled users to enable on their devices.
		 * Post #X-Amz-Target=AlexaForBusiness.AssociateSkillWithUsers
		 * @return {AssociateSkillWithUsersResponse} Success
		 */
		AssociateSkillWithUsers(requestBody: AssociateSkillWithUsersRequest, headersHandler?: () => HttpHeaders): Observable<AssociateSkillWithUsersResponse> {
			return this.http.post<AssociateSkillWithUsersResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.AssociateSkillWithUsers', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Creates an address book with the specified details.
		 * Post #X-Amz-Target=AlexaForBusiness.CreateAddressBook
		 * @return {CreateAddressBookResponse} Success
		 */
		CreateAddressBook(requestBody: CreateAddressBookRequest, headersHandler?: () => HttpHeaders): Observable<CreateAddressBookResponse> {
			return this.http.post<CreateAddressBookResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.CreateAddressBook', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Creates a recurring schedule for usage reports to deliver to the specified S3 location with a specified daily or weekly interval.
		 * Post #X-Amz-Target=AlexaForBusiness.CreateBusinessReportSchedule
		 * @return {CreateBusinessReportScheduleResponse} Success
		 */
		CreateBusinessReportSchedule(requestBody: CreateBusinessReportScheduleRequest, headersHandler?: () => HttpHeaders): Observable<CreateBusinessReportScheduleResponse> {
			return this.http.post<CreateBusinessReportScheduleResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.CreateBusinessReportSchedule', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Adds a new conference provider under the user's AWS account.
		 * Post #X-Amz-Target=AlexaForBusiness.CreateConferenceProvider
		 * @return {CreateConferenceProviderResponse} Success
		 */
		CreateConferenceProvider(requestBody: CreateConferenceProviderRequest, headersHandler?: () => HttpHeaders): Observable<CreateConferenceProviderResponse> {
			return this.http.post<CreateConferenceProviderResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.CreateConferenceProvider', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Creates a contact with the specified details.
		 * Post #X-Amz-Target=AlexaForBusiness.CreateContact
		 * @return {CreateContactResponse} Success
		 */
		CreateContact(requestBody: CreateContactRequest, headersHandler?: () => HttpHeaders): Observable<CreateContactResponse> {
			return this.http.post<CreateContactResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.CreateContact', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Creates a gateway group with the specified details.
		 * Post #X-Amz-Target=AlexaForBusiness.CreateGatewayGroup
		 * @return {CreateGatewayGroupResponse} Success
		 */
		CreateGatewayGroup(requestBody: CreateGatewayGroupRequest, headersHandler?: () => HttpHeaders): Observable<CreateGatewayGroupResponse> {
			return this.http.post<CreateGatewayGroupResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.CreateGatewayGroup', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Creates a network profile with the specified details.
		 * Post #X-Amz-Target=AlexaForBusiness.CreateNetworkProfile
		 * @return {CreateNetworkProfileResponse} Success
		 */
		CreateNetworkProfile(requestBody: CreateNetworkProfileRequest, headersHandler?: () => HttpHeaders): Observable<CreateNetworkProfileResponse> {
			return this.http.post<CreateNetworkProfileResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.CreateNetworkProfile', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Creates a new room profile with the specified details.
		 * Post #X-Amz-Target=AlexaForBusiness.CreateProfile
		 * @return {CreateProfileResponse} Success
		 */
		CreateProfile(requestBody: CreateProfileRequest, headersHandler?: () => HttpHeaders): Observable<CreateProfileResponse> {
			return this.http.post<CreateProfileResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.CreateProfile', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Creates a room with the specified details.
		 * Post #X-Amz-Target=AlexaForBusiness.CreateRoom
		 * @return {CreateRoomResponse} Success
		 */
		CreateRoom(requestBody: CreateRoomRequest, headersHandler?: () => HttpHeaders): Observable<CreateRoomResponse> {
			return this.http.post<CreateRoomResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.CreateRoom', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Creates a skill group with a specified name and description.
		 * Post #X-Amz-Target=AlexaForBusiness.CreateSkillGroup
		 * @return {CreateSkillGroupResponse} Success
		 */
		CreateSkillGroup(requestBody: CreateSkillGroupRequest, headersHandler?: () => HttpHeaders): Observable<CreateSkillGroupResponse> {
			return this.http.post<CreateSkillGroupResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.CreateSkillGroup', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Creates a user.
		 * Post #X-Amz-Target=AlexaForBusiness.CreateUser
		 * @return {CreateUserResponse} Success
		 */
		CreateUser(requestBody: CreateUserRequest, headersHandler?: () => HttpHeaders): Observable<CreateUserResponse> {
			return this.http.post<CreateUserResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.CreateUser', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Deletes an address book by the address book ARN.
		 * Post #X-Amz-Target=AlexaForBusiness.DeleteAddressBook
		 * @return {DeleteAddressBookResponse} Success
		 */
		DeleteAddressBook(requestBody: DeleteAddressBookRequest, headersHandler?: () => HttpHeaders): Observable<DeleteAddressBookResponse> {
			return this.http.post<DeleteAddressBookResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.DeleteAddressBook', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Deletes the recurring report delivery schedule with the specified schedule ARN.
		 * Post #X-Amz-Target=AlexaForBusiness.DeleteBusinessReportSchedule
		 * @return {DeleteBusinessReportScheduleResponse} Success
		 */
		DeleteBusinessReportSchedule(requestBody: DeleteBusinessReportScheduleRequest, headersHandler?: () => HttpHeaders): Observable<DeleteBusinessReportScheduleResponse> {
			return this.http.post<DeleteBusinessReportScheduleResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.DeleteBusinessReportSchedule', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Deletes a conference provider.
		 * Post #X-Amz-Target=AlexaForBusiness.DeleteConferenceProvider
		 * @return {DeleteConferenceProviderResponse} Success
		 */
		DeleteConferenceProvider(requestBody: DeleteConferenceProviderRequest, headersHandler?: () => HttpHeaders): Observable<DeleteConferenceProviderResponse> {
			return this.http.post<DeleteConferenceProviderResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.DeleteConferenceProvider', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Deletes a contact by the contact ARN.
		 * Post #X-Amz-Target=AlexaForBusiness.DeleteContact
		 * @return {DeleteContactResponse} Success
		 */
		DeleteContact(requestBody: DeleteContactRequest, headersHandler?: () => HttpHeaders): Observable<DeleteContactResponse> {
			return this.http.post<DeleteContactResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.DeleteContact', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Removes a device from Alexa For Business.
		 * Post #X-Amz-Target=AlexaForBusiness.DeleteDevice
		 * @return {DeleteDeviceResponse} Success
		 */
		DeleteDevice(requestBody: DeleteDeviceRequest, headersHandler?: () => HttpHeaders): Observable<DeleteDeviceResponse> {
			return this.http.post<DeleteDeviceResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.DeleteDevice', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * When this action is called for a specified shared device, it allows authorized users to delete the device's entire previous history of voice input data and associated response data. This action can be called once every 24 hours for a specific shared device.
		 * Post #X-Amz-Target=AlexaForBusiness.DeleteDeviceUsageData
		 * @return {DeleteDeviceUsageDataResponse} Success
		 */
		DeleteDeviceUsageData(requestBody: DeleteDeviceUsageDataRequest, headersHandler?: () => HttpHeaders): Observable<DeleteDeviceUsageDataResponse> {
			return this.http.post<DeleteDeviceUsageDataResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.DeleteDeviceUsageData', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Deletes a gateway group.
		 * Post #X-Amz-Target=AlexaForBusiness.DeleteGatewayGroup
		 * @return {DeleteGatewayGroupResponse} Success
		 */
		DeleteGatewayGroup(requestBody: DeleteGatewayGroupRequest, headersHandler?: () => HttpHeaders): Observable<DeleteGatewayGroupResponse> {
			return this.http.post<DeleteGatewayGroupResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.DeleteGatewayGroup', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Deletes a network profile by the network profile ARN.
		 * Post #X-Amz-Target=AlexaForBusiness.DeleteNetworkProfile
		 * @return {DeleteNetworkProfileResponse} Success
		 */
		DeleteNetworkProfile(requestBody: DeleteNetworkProfileRequest, headersHandler?: () => HttpHeaders): Observable<DeleteNetworkProfileResponse> {
			return this.http.post<DeleteNetworkProfileResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.DeleteNetworkProfile', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Deletes a room profile by the profile ARN.
		 * Post #X-Amz-Target=AlexaForBusiness.DeleteProfile
		 * @return {DeleteProfileResponse} Success
		 */
		DeleteProfile(requestBody: DeleteProfileRequest, headersHandler?: () => HttpHeaders): Observable<DeleteProfileResponse> {
			return this.http.post<DeleteProfileResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.DeleteProfile', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Deletes a room by the room ARN.
		 * Post #X-Amz-Target=AlexaForBusiness.DeleteRoom
		 * @return {DeleteRoomResponse} Success
		 */
		DeleteRoom(requestBody: DeleteRoomRequest, headersHandler?: () => HttpHeaders): Observable<DeleteRoomResponse> {
			return this.http.post<DeleteRoomResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.DeleteRoom', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Deletes room skill parameter details by room, skill, and parameter key ID.
		 * Post #X-Amz-Target=AlexaForBusiness.DeleteRoomSkillParameter
		 * @return {DeleteRoomSkillParameterResponse} Success
		 */
		DeleteRoomSkillParameter(requestBody: DeleteRoomSkillParameterRequest, headersHandler?: () => HttpHeaders): Observable<DeleteRoomSkillParameterResponse> {
			return this.http.post<DeleteRoomSkillParameterResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.DeleteRoomSkillParameter', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Unlinks a third-party account from a skill.
		 * Post #X-Amz-Target=AlexaForBusiness.DeleteSkillAuthorization
		 * @return {DeleteSkillAuthorizationResponse} Success
		 */
		DeleteSkillAuthorization(requestBody: DeleteSkillAuthorizationRequest, headersHandler?: () => HttpHeaders): Observable<DeleteSkillAuthorizationResponse> {
			return this.http.post<DeleteSkillAuthorizationResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.DeleteSkillAuthorization', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Deletes a skill group by skill group ARN.
		 * Post #X-Amz-Target=AlexaForBusiness.DeleteSkillGroup
		 * @return {DeleteSkillGroupResponse} Success
		 */
		DeleteSkillGroup(requestBody: DeleteSkillGroupRequest, headersHandler?: () => HttpHeaders): Observable<DeleteSkillGroupResponse> {
			return this.http.post<DeleteSkillGroupResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.DeleteSkillGroup', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Deletes a specified user by user ARN and enrollment ARN.
		 * Post #X-Amz-Target=AlexaForBusiness.DeleteUser
		 * @return {DeleteUserResponse} Success
		 */
		DeleteUser(requestBody: DeleteUserRequest, headersHandler?: () => HttpHeaders): Observable<DeleteUserResponse> {
			return this.http.post<DeleteUserResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.DeleteUser', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Disassociates a contact from a given address book.
		 * Post #X-Amz-Target=AlexaForBusiness.DisassociateContactFromAddressBook
		 * @return {DisassociateContactFromAddressBookResponse} Success
		 */
		DisassociateContactFromAddressBook(requestBody: DisassociateContactFromAddressBookRequest, headersHandler?: () => HttpHeaders): Observable<DisassociateContactFromAddressBookResponse> {
			return this.http.post<DisassociateContactFromAddressBookResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.DisassociateContactFromAddressBook', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Disassociates a device from its current room. The device continues to be connected to the Wi-Fi network and is still registered to the account. The device settings and skills are removed from the room.
		 * Post #X-Amz-Target=AlexaForBusiness.DisassociateDeviceFromRoom
		 * @return {DisassociateDeviceFromRoomResponse} Success
		 */
		DisassociateDeviceFromRoom(requestBody: DisassociateDeviceFromRoomRequest, headersHandler?: () => HttpHeaders): Observable<DisassociateDeviceFromRoomResponse> {
			return this.http.post<DisassociateDeviceFromRoomResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.DisassociateDeviceFromRoom', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Disassociates a skill from a skill group.
		 * Post #X-Amz-Target=AlexaForBusiness.DisassociateSkillFromSkillGroup
		 * @return {DisassociateSkillFromSkillGroupResponse} Success
		 */
		DisassociateSkillFromSkillGroup(requestBody: DisassociateSkillFromSkillGroupRequest, headersHandler?: () => HttpHeaders): Observable<DisassociateSkillFromSkillGroupResponse> {
			return this.http.post<DisassociateSkillFromSkillGroupResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.DisassociateSkillFromSkillGroup', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Makes a private skill unavailable for enrolled users and prevents them from enabling it on their devices.
		 * Post #X-Amz-Target=AlexaForBusiness.DisassociateSkillFromUsers
		 * @return {DisassociateSkillFromUsersResponse} Success
		 */
		DisassociateSkillFromUsers(requestBody: DisassociateSkillFromUsersRequest, headersHandler?: () => HttpHeaders): Observable<DisassociateSkillFromUsersResponse> {
			return this.http.post<DisassociateSkillFromUsersResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.DisassociateSkillFromUsers', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Disassociates a skill group from a specified room. This disables all skills in the skill group on all devices in the room.
		 * Post #X-Amz-Target=AlexaForBusiness.DisassociateSkillGroupFromRoom
		 * @return {DisassociateSkillGroupFromRoomResponse} Success
		 */
		DisassociateSkillGroupFromRoom(requestBody: DisassociateSkillGroupFromRoomRequest, headersHandler?: () => HttpHeaders): Observable<DisassociateSkillGroupFromRoomResponse> {
			return this.http.post<DisassociateSkillGroupFromRoomResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.DisassociateSkillGroupFromRoom', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Forgets smart home appliances associated to a room.
		 * Post #X-Amz-Target=AlexaForBusiness.ForgetSmartHomeAppliances
		 * @return {ForgetSmartHomeAppliancesResponse} Success
		 */
		ForgetSmartHomeAppliances(requestBody: ForgetSmartHomeAppliancesRequest, headersHandler?: () => HttpHeaders): Observable<ForgetSmartHomeAppliancesResponse> {
			return this.http.post<ForgetSmartHomeAppliancesResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.ForgetSmartHomeAppliances', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Gets address the book details by the address book ARN.
		 * Post #X-Amz-Target=AlexaForBusiness.GetAddressBook
		 * @return {GetAddressBookResponse} Success
		 */
		GetAddressBook(requestBody: GetAddressBookRequest, headersHandler?: () => HttpHeaders): Observable<GetAddressBookResponse> {
			return this.http.post<GetAddressBookResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.GetAddressBook', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieves the existing conference preferences.
		 * Post #X-Amz-Target=AlexaForBusiness.GetConferencePreference
		 * @return {GetConferencePreferenceResponse} Success
		 */
		GetConferencePreference(requestBody: GetConferencePreferenceRequest, headersHandler?: () => HttpHeaders): Observable<GetConferencePreferenceResponse> {
			return this.http.post<GetConferencePreferenceResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.GetConferencePreference', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Gets details about a specific conference provider.
		 * Post #X-Amz-Target=AlexaForBusiness.GetConferenceProvider
		 * @return {GetConferenceProviderResponse} Success
		 */
		GetConferenceProvider(requestBody: GetConferenceProviderRequest, headersHandler?: () => HttpHeaders): Observable<GetConferenceProviderResponse> {
			return this.http.post<GetConferenceProviderResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.GetConferenceProvider', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Gets the contact details by the contact ARN.
		 * Post #X-Amz-Target=AlexaForBusiness.GetContact
		 * @return {GetContactResponse} Success
		 */
		GetContact(requestBody: GetContactRequest, headersHandler?: () => HttpHeaders): Observable<GetContactResponse> {
			return this.http.post<GetContactResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.GetContact', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Gets the details of a device by device ARN.
		 * Post #X-Amz-Target=AlexaForBusiness.GetDevice
		 * @return {GetDeviceResponse} Success
		 */
		GetDevice(requestBody: GetDeviceRequest, headersHandler?: () => HttpHeaders): Observable<GetDeviceResponse> {
			return this.http.post<GetDeviceResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.GetDevice', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieves the details of a gateway.
		 * Post #X-Amz-Target=AlexaForBusiness.GetGateway
		 * @return {GetGatewayResponse} Success
		 */
		GetGateway(requestBody: GetGatewayRequest, headersHandler?: () => HttpHeaders): Observable<GetGatewayResponse> {
			return this.http.post<GetGatewayResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.GetGateway', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieves the details of a gateway group.
		 * Post #X-Amz-Target=AlexaForBusiness.GetGatewayGroup
		 * @return {GetGatewayGroupResponse} Success
		 */
		GetGatewayGroup(requestBody: GetGatewayGroupRequest, headersHandler?: () => HttpHeaders): Observable<GetGatewayGroupResponse> {
			return this.http.post<GetGatewayGroupResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.GetGatewayGroup', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieves the configured values for the user enrollment invitation email template.
		 * Post #X-Amz-Target=AlexaForBusiness.GetInvitationConfiguration
		 * @return {GetInvitationConfigurationResponse} Success
		 */
		GetInvitationConfiguration(requestBody: GetInvitationConfigurationRequest, headersHandler?: () => HttpHeaders): Observable<GetInvitationConfigurationResponse> {
			return this.http.post<GetInvitationConfigurationResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.GetInvitationConfiguration', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Gets the network profile details by the network profile ARN.
		 * Post #X-Amz-Target=AlexaForBusiness.GetNetworkProfile
		 * @return {GetNetworkProfileResponse} Success
		 */
		GetNetworkProfile(requestBody: GetNetworkProfileRequest, headersHandler?: () => HttpHeaders): Observable<GetNetworkProfileResponse> {
			return this.http.post<GetNetworkProfileResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.GetNetworkProfile', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Gets the details of a room profile by profile ARN.
		 * Post #X-Amz-Target=AlexaForBusiness.GetProfile
		 * @return {GetProfileResponse} Success
		 */
		GetProfile(requestBody: GetProfileRequest, headersHandler?: () => HttpHeaders): Observable<GetProfileResponse> {
			return this.http.post<GetProfileResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.GetProfile', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Gets room details by room ARN.
		 * Post #X-Amz-Target=AlexaForBusiness.GetRoom
		 * @return {GetRoomResponse} Success
		 */
		GetRoom(requestBody: GetRoomRequest, headersHandler?: () => HttpHeaders): Observable<GetRoomResponse> {
			return this.http.post<GetRoomResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.GetRoom', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Gets room skill parameter details by room, skill, and parameter key ARN.
		 * Post #X-Amz-Target=AlexaForBusiness.GetRoomSkillParameter
		 * @return {GetRoomSkillParameterResponse} Success
		 */
		GetRoomSkillParameter(requestBody: GetRoomSkillParameterRequest, headersHandler?: () => HttpHeaders): Observable<GetRoomSkillParameterResponse> {
			return this.http.post<GetRoomSkillParameterResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.GetRoomSkillParameter', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Gets skill group details by skill group ARN.
		 * Post #X-Amz-Target=AlexaForBusiness.GetSkillGroup
		 * @return {GetSkillGroupResponse} Success
		 */
		GetSkillGroup(requestBody: GetSkillGroupRequest, headersHandler?: () => HttpHeaders): Observable<GetSkillGroupResponse> {
			return this.http.post<GetSkillGroupResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.GetSkillGroup', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lists the details of the schedules that a user configured. A download URL of the report associated with each schedule is returned every time this action is called. A new download URL is returned each time, and is valid for 24 hours.
		 * Post #X-Amz-Target=AlexaForBusiness.ListBusinessReportSchedules
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListBusinessReportSchedulesResponse} Success
		 */
		ListBusinessReportSchedules(MaxResults: string, NextToken: string, requestBody: ListBusinessReportSchedulesRequest, headersHandler?: () => HttpHeaders): Observable<ListBusinessReportSchedulesResponse> {
			return this.http.post<ListBusinessReportSchedulesResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.ListBusinessReportSchedules?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lists conference providers under a specific AWS account.
		 * Post #X-Amz-Target=AlexaForBusiness.ListConferenceProviders
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListConferenceProvidersResponse} Success
		 */
		ListConferenceProviders(MaxResults: string, NextToken: string, requestBody: ListConferenceProvidersRequest, headersHandler?: () => HttpHeaders): Observable<ListConferenceProvidersResponse> {
			return this.http.post<ListConferenceProvidersResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.ListConferenceProviders?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lists the device event history, including device connection status, for up to 30 days.
		 * Post #X-Amz-Target=AlexaForBusiness.ListDeviceEvents
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDeviceEventsResponse} Success
		 */
		ListDeviceEvents(MaxResults: string, NextToken: string, requestBody: ListDeviceEventsRequest, headersHandler?: () => HttpHeaders): Observable<ListDeviceEventsResponse> {
			return this.http.post<ListDeviceEventsResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.ListDeviceEvents?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieves a list of gateway group summaries. Use GetGatewayGroup to retrieve details of a specific gateway group.
		 * Post #X-Amz-Target=AlexaForBusiness.ListGatewayGroups
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListGatewayGroupsResponse} Success
		 */
		ListGatewayGroups(MaxResults: string, NextToken: string, requestBody: ListGatewayGroupsRequest, headersHandler?: () => HttpHeaders): Observable<ListGatewayGroupsResponse> {
			return this.http.post<ListGatewayGroupsResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.ListGatewayGroups?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieves a list of gateway summaries. Use GetGateway to retrieve details of a specific gateway. An optional gateway group ARN can be provided to only retrieve gateway summaries of gateways that are associated with that gateway group ARN.
		 * Post #X-Amz-Target=AlexaForBusiness.ListGateways
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListGatewaysResponse} Success
		 */
		ListGateways(MaxResults: string, NextToken: string, requestBody: ListGatewaysRequest, headersHandler?: () => HttpHeaders): Observable<ListGatewaysResponse> {
			return this.http.post<ListGatewaysResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.ListGateways?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lists all enabled skills in a specific skill group.
		 * Post #X-Amz-Target=AlexaForBusiness.ListSkills
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListSkillsResponse} Success
		 */
		ListSkills(MaxResults: string, NextToken: string, requestBody: ListSkillsRequest, headersHandler?: () => HttpHeaders): Observable<ListSkillsResponse> {
			return this.http.post<ListSkillsResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.ListSkills?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lists all categories in the Alexa skill store.
		 * Post #X-Amz-Target=AlexaForBusiness.ListSkillsStoreCategories
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListSkillsStoreCategoriesResponse} Success
		 */
		ListSkillsStoreCategories(MaxResults: string, NextToken: string, requestBody: ListSkillsStoreCategoriesRequest, headersHandler?: () => HttpHeaders): Observable<ListSkillsStoreCategoriesResponse> {
			return this.http.post<ListSkillsStoreCategoriesResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.ListSkillsStoreCategories?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lists all skills in the Alexa skill store by category.
		 * Post #X-Amz-Target=AlexaForBusiness.ListSkillsStoreSkillsByCategory
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListSkillsStoreSkillsByCategoryResponse} Success
		 */
		ListSkillsStoreSkillsByCategory(MaxResults: string, NextToken: string, requestBody: ListSkillsStoreSkillsByCategoryRequest, headersHandler?: () => HttpHeaders): Observable<ListSkillsStoreSkillsByCategoryResponse> {
			return this.http.post<ListSkillsStoreSkillsByCategoryResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.ListSkillsStoreSkillsByCategory?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lists all of the smart home appliances associated with a room.
		 * Post #X-Amz-Target=AlexaForBusiness.ListSmartHomeAppliances
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListSmartHomeAppliancesResponse} Success
		 */
		ListSmartHomeAppliances(MaxResults: string, NextToken: string, requestBody: ListSmartHomeAppliancesRequest, headersHandler?: () => HttpHeaders): Observable<ListSmartHomeAppliancesResponse> {
			return this.http.post<ListSmartHomeAppliancesResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.ListSmartHomeAppliances?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lists all tags for the specified resource.
		 * Post #X-Amz-Target=AlexaForBusiness.ListTags
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTagsResponse} Success
		 */
		ListTags(MaxResults: string, NextToken: string, requestBody: ListTagsRequest, headersHandler?: () => HttpHeaders): Observable<ListTagsResponse> {
			return this.http.post<ListTagsResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.ListTags?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Sets the conference preferences on a specific conference provider at the account level.
		 * Post #X-Amz-Target=AlexaForBusiness.PutConferencePreference
		 * @return {PutConferencePreferenceResponse} Success
		 */
		PutConferencePreference(requestBody: PutConferencePreferenceRequest, headersHandler?: () => HttpHeaders): Observable<PutConferencePreferenceResponse> {
			return this.http.post<PutConferencePreferenceResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.PutConferencePreference', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Configures the email template for the user enrollment invitation with the specified attributes.
		 * Post #X-Amz-Target=AlexaForBusiness.PutInvitationConfiguration
		 * @return {PutInvitationConfigurationResponse} Success
		 */
		PutInvitationConfiguration(requestBody: PutInvitationConfigurationRequest, headersHandler?: () => HttpHeaders): Observable<PutInvitationConfigurationResponse> {
			return this.http.post<PutInvitationConfigurationResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.PutInvitationConfiguration', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Updates room skill parameter details by room, skill, and parameter key ID. Not all skills have a room skill parameter.
		 * Post #X-Amz-Target=AlexaForBusiness.PutRoomSkillParameter
		 * @return {PutRoomSkillParameterResponse} Success
		 */
		PutRoomSkillParameter(requestBody: PutRoomSkillParameterRequest, headersHandler?: () => HttpHeaders): Observable<PutRoomSkillParameterResponse> {
			return this.http.post<PutRoomSkillParameterResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.PutRoomSkillParameter', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Links a user's account to a third-party skill provider. If this API operation is called by an assumed IAM role, the skill being linked must be a private skill. Also, the skill must be owned by the AWS account that assumed the IAM role.
		 * Post #X-Amz-Target=AlexaForBusiness.PutSkillAuthorization
		 * @return {PutSkillAuthorizationResponse} Success
		 */
		PutSkillAuthorization(requestBody: PutSkillAuthorizationRequest, headersHandler?: () => HttpHeaders): Observable<PutSkillAuthorizationResponse> {
			return this.http.post<PutSkillAuthorizationResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.PutSkillAuthorization', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Registers an Alexa-enabled device built by an Original Equipment Manufacturer (OEM) using Alexa Voice Service (AVS).
		 * Post #X-Amz-Target=AlexaForBusiness.RegisterAVSDevice
		 * @return {RegisterAVSDeviceResponse} Success
		 */
		RegisterAVSDevice(requestBody: RegisterAVSDeviceRequest, headersHandler?: () => HttpHeaders): Observable<RegisterAVSDeviceResponse> {
			return this.http.post<RegisterAVSDeviceResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.RegisterAVSDevice', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Disassociates a skill from the organization under a user's AWS account. If the skill is a private skill, it moves to an AcceptStatus of PENDING. Any private or public skill that is rejected can be added later by calling the ApproveSkill API.
		 * Post #X-Amz-Target=AlexaForBusiness.RejectSkill
		 * @return {RejectSkillResponse} Success
		 */
		RejectSkill(requestBody: RejectSkillRequest, headersHandler?: () => HttpHeaders): Observable<RejectSkillResponse> {
			return this.http.post<RejectSkillResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.RejectSkill', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Determines the details for the room from which a skill request was invoked. This operation is used by skill developers.
		 * Post #X-Amz-Target=AlexaForBusiness.ResolveRoom
		 * @return {ResolveRoomResponse} Success
		 */
		ResolveRoom(requestBody: ResolveRoomRequest, headersHandler?: () => HttpHeaders): Observable<ResolveRoomResponse> {
			return this.http.post<ResolveRoomResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.ResolveRoom', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Revokes an invitation and invalidates the enrollment URL.
		 * Post #X-Amz-Target=AlexaForBusiness.RevokeInvitation
		 * @return {RevokeInvitationResponse} Success
		 */
		RevokeInvitation(requestBody: RevokeInvitationRequest, headersHandler?: () => HttpHeaders): Observable<RevokeInvitationResponse> {
			return this.http.post<RevokeInvitationResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.RevokeInvitation', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Searches address books and lists the ones that meet a set of filter and sort criteria.
		 * Post #X-Amz-Target=AlexaForBusiness.SearchAddressBooks
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {SearchAddressBooksResponse} Success
		 */
		SearchAddressBooks(MaxResults: string, NextToken: string, requestBody: SearchAddressBooksRequest, headersHandler?: () => HttpHeaders): Observable<SearchAddressBooksResponse> {
			return this.http.post<SearchAddressBooksResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.SearchAddressBooks?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Searches contacts and lists the ones that meet a set of filter and sort criteria.
		 * Post #X-Amz-Target=AlexaForBusiness.SearchContacts
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {SearchContactsResponse} Success
		 */
		SearchContacts(MaxResults: string, NextToken: string, requestBody: SearchContactsRequest, headersHandler?: () => HttpHeaders): Observable<SearchContactsResponse> {
			return this.http.post<SearchContactsResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.SearchContacts?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Searches devices and lists the ones that meet a set of filter criteria.
		 * Post #X-Amz-Target=AlexaForBusiness.SearchDevices
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {SearchDevicesResponse} Success
		 */
		SearchDevices(MaxResults: string, NextToken: string, requestBody: SearchDevicesRequest, headersHandler?: () => HttpHeaders): Observable<SearchDevicesResponse> {
			return this.http.post<SearchDevicesResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.SearchDevices?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Searches network profiles and lists the ones that meet a set of filter and sort criteria.
		 * Post #X-Amz-Target=AlexaForBusiness.SearchNetworkProfiles
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {SearchNetworkProfilesResponse} Success
		 */
		SearchNetworkProfiles(MaxResults: string, NextToken: string, requestBody: SearchNetworkProfilesRequest, headersHandler?: () => HttpHeaders): Observable<SearchNetworkProfilesResponse> {
			return this.http.post<SearchNetworkProfilesResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.SearchNetworkProfiles?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Searches room profiles and lists the ones that meet a set of filter criteria.
		 * Post #X-Amz-Target=AlexaForBusiness.SearchProfiles
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {SearchProfilesResponse} Success
		 */
		SearchProfiles(MaxResults: string, NextToken: string, requestBody: SearchProfilesRequest, headersHandler?: () => HttpHeaders): Observable<SearchProfilesResponse> {
			return this.http.post<SearchProfilesResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.SearchProfiles?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Searches rooms and lists the ones that meet a set of filter and sort criteria.
		 * Post #X-Amz-Target=AlexaForBusiness.SearchRooms
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {SearchRoomsResponse} Success
		 */
		SearchRooms(MaxResults: string, NextToken: string, requestBody: SearchRoomsRequest, headersHandler?: () => HttpHeaders): Observable<SearchRoomsResponse> {
			return this.http.post<SearchRoomsResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.SearchRooms?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Searches skill groups and lists the ones that meet a set of filter and sort criteria.
		 * Post #X-Amz-Target=AlexaForBusiness.SearchSkillGroups
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {SearchSkillGroupsResponse} Success
		 */
		SearchSkillGroups(MaxResults: string, NextToken: string, requestBody: SearchSkillGroupsRequest, headersHandler?: () => HttpHeaders): Observable<SearchSkillGroupsResponse> {
			return this.http.post<SearchSkillGroupsResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.SearchSkillGroups?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Searches users and lists the ones that meet a set of filter and sort criteria.
		 * Post #X-Amz-Target=AlexaForBusiness.SearchUsers
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {SearchUsersResponse} Success
		 */
		SearchUsers(MaxResults: string, NextToken: string, requestBody: SearchUsersRequest, headersHandler?: () => HttpHeaders): Observable<SearchUsersResponse> {
			return this.http.post<SearchUsersResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.SearchUsers?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Triggers an asynchronous flow to send text, SSML, or audio announcements to rooms that are identified by a search or filter.
		 * Post #X-Amz-Target=AlexaForBusiness.SendAnnouncement
		 * @return {SendAnnouncementResponse} Success
		 */
		SendAnnouncement(requestBody: SendAnnouncementRequest, headersHandler?: () => HttpHeaders): Observable<SendAnnouncementResponse> {
			return this.http.post<SendAnnouncementResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.SendAnnouncement', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Sends an enrollment invitation email with a URL to a user. The URL is valid for 30 days or until you call this operation again, whichever comes first.
		 * Post #X-Amz-Target=AlexaForBusiness.SendInvitation
		 * @return {SendInvitationResponse} Success
		 */
		SendInvitation(requestBody: SendInvitationRequest, headersHandler?: () => HttpHeaders): Observable<SendInvitationResponse> {
			return this.http.post<SendInvitationResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.SendInvitation', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Resets a device and its account to the known default settings. This clears all information and settings set by previous users in the following ways:</p> <ul> <li> <p>Bluetooth - This unpairs all bluetooth devices paired with your echo device.</p> </li> <li> <p>Volume - This resets the echo device's volume to the default value.</p> </li> <li> <p>Notifications - This clears all notifications from your echo device.</p> </li> <li> <p>Lists - This clears all to-do items from your echo device.</p> </li> <li> <p>Settings - This internally syncs the room's profile (if the device is assigned to a room), contacts, address books, delegation access for account linking, and communications (if enabled on the room profile).</p> </li> </ul>
		 * Post #X-Amz-Target=AlexaForBusiness.StartDeviceSync
		 * @return {StartDeviceSyncResponse} Success
		 */
		StartDeviceSync(requestBody: StartDeviceSyncRequest, headersHandler?: () => HttpHeaders): Observable<StartDeviceSyncResponse> {
			return this.http.post<StartDeviceSyncResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.StartDeviceSync', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Initiates the discovery of any smart home appliances associated with the room.
		 * Post #X-Amz-Target=AlexaForBusiness.StartSmartHomeApplianceDiscovery
		 * @return {StartSmartHomeApplianceDiscoveryResponse} Success
		 */
		StartSmartHomeApplianceDiscovery(requestBody: StartSmartHomeApplianceDiscoveryRequest, headersHandler?: () => HttpHeaders): Observable<StartSmartHomeApplianceDiscoveryResponse> {
			return this.http.post<StartSmartHomeApplianceDiscoveryResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.StartSmartHomeApplianceDiscovery', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Adds metadata tags to a specified resource.
		 * Post #X-Amz-Target=AlexaForBusiness.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest, headersHandler?: () => HttpHeaders): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.TagResource', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Removes metadata tags from a specified resource.
		 * Post #X-Amz-Target=AlexaForBusiness.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest, headersHandler?: () => HttpHeaders): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.UntagResource', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Updates address book details by the address book ARN.
		 * Post #X-Amz-Target=AlexaForBusiness.UpdateAddressBook
		 * @return {UpdateAddressBookResponse} Success
		 */
		UpdateAddressBook(requestBody: UpdateAddressBookRequest, headersHandler?: () => HttpHeaders): Observable<UpdateAddressBookResponse> {
			return this.http.post<UpdateAddressBookResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.UpdateAddressBook', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Updates the configuration of the report delivery schedule with the specified schedule ARN.
		 * Post #X-Amz-Target=AlexaForBusiness.UpdateBusinessReportSchedule
		 * @return {UpdateBusinessReportScheduleResponse} Success
		 */
		UpdateBusinessReportSchedule(requestBody: UpdateBusinessReportScheduleRequest, headersHandler?: () => HttpHeaders): Observable<UpdateBusinessReportScheduleResponse> {
			return this.http.post<UpdateBusinessReportScheduleResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.UpdateBusinessReportSchedule', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Updates an existing conference provider's settings.
		 * Post #X-Amz-Target=AlexaForBusiness.UpdateConferenceProvider
		 * @return {UpdateConferenceProviderResponse} Success
		 */
		UpdateConferenceProvider(requestBody: UpdateConferenceProviderRequest, headersHandler?: () => HttpHeaders): Observable<UpdateConferenceProviderResponse> {
			return this.http.post<UpdateConferenceProviderResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.UpdateConferenceProvider', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Updates the contact details by the contact ARN.
		 * Post #X-Amz-Target=AlexaForBusiness.UpdateContact
		 * @return {UpdateContactResponse} Success
		 */
		UpdateContact(requestBody: UpdateContactRequest, headersHandler?: () => HttpHeaders): Observable<UpdateContactResponse> {
			return this.http.post<UpdateContactResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.UpdateContact', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Updates the device name by device ARN.
		 * Post #X-Amz-Target=AlexaForBusiness.UpdateDevice
		 * @return {UpdateDeviceResponse} Success
		 */
		UpdateDevice(requestBody: UpdateDeviceRequest, headersHandler?: () => HttpHeaders): Observable<UpdateDeviceResponse> {
			return this.http.post<UpdateDeviceResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.UpdateDevice', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Updates the details of a gateway. If any optional field is not provided, the existing corresponding value is left unmodified.
		 * Post #X-Amz-Target=AlexaForBusiness.UpdateGateway
		 * @return {UpdateGatewayResponse} Success
		 */
		UpdateGateway(requestBody: UpdateGatewayRequest, headersHandler?: () => HttpHeaders): Observable<UpdateGatewayResponse> {
			return this.http.post<UpdateGatewayResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.UpdateGateway', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Updates the details of a gateway group. If any optional field is not provided, the existing corresponding value is left unmodified.
		 * Post #X-Amz-Target=AlexaForBusiness.UpdateGatewayGroup
		 * @return {UpdateGatewayGroupResponse} Success
		 */
		UpdateGatewayGroup(requestBody: UpdateGatewayGroupRequest, headersHandler?: () => HttpHeaders): Observable<UpdateGatewayGroupResponse> {
			return this.http.post<UpdateGatewayGroupResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.UpdateGatewayGroup', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Updates a network profile by the network profile ARN.
		 * Post #X-Amz-Target=AlexaForBusiness.UpdateNetworkProfile
		 * @return {UpdateNetworkProfileResponse} Success
		 */
		UpdateNetworkProfile(requestBody: UpdateNetworkProfileRequest, headersHandler?: () => HttpHeaders): Observable<UpdateNetworkProfileResponse> {
			return this.http.post<UpdateNetworkProfileResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.UpdateNetworkProfile', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Updates an existing room profile by room profile ARN.
		 * Post #X-Amz-Target=AlexaForBusiness.UpdateProfile
		 * @return {UpdateProfileResponse} Success
		 */
		UpdateProfile(requestBody: UpdateProfileRequest, headersHandler?: () => HttpHeaders): Observable<UpdateProfileResponse> {
			return this.http.post<UpdateProfileResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.UpdateProfile', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Updates room details by room ARN.
		 * Post #X-Amz-Target=AlexaForBusiness.UpdateRoom
		 * @return {UpdateRoomResponse} Success
		 */
		UpdateRoom(requestBody: UpdateRoomRequest, headersHandler?: () => HttpHeaders): Observable<UpdateRoomResponse> {
			return this.http.post<UpdateRoomResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.UpdateRoom', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Updates skill group details by skill group ARN.
		 * Post #X-Amz-Target=AlexaForBusiness.UpdateSkillGroup
		 * @return {UpdateSkillGroupResponse} Success
		 */
		UpdateSkillGroup(requestBody: UpdateSkillGroupRequest, headersHandler?: () => HttpHeaders): Observable<UpdateSkillGroupResponse> {
			return this.http.post<UpdateSkillGroupResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.UpdateSkillGroup', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}
	}

}

