export namespace My_Demo_Client {
	export interface AssociatePhoneNumbersWithVoiceConnectorResponse {
		PhoneNumberErrors?: Array<PhoneNumberError>;
	}

	export interface AssociatePhoneNumbersWithVoiceConnectorGroupResponse {
		PhoneNumberErrors?: Array<PhoneNumberError>;
	}


	/**An Active Directory (AD) group whose members are granted permission to act as delegates. */
	export interface SigninDelegateGroup {
		GroupName?: string;
	}

	export interface BatchCreateAttendeeResponse {
		Attendees?: Array<Attendee>;
		Errors?: Array<CreateAttendeeError>;
	}


	/**The Amazon Chime SDK attendee fields to create, used with the BatchCreateAttendee action. */
	export interface CreateAttendeeRequestItem {
		ExternalUserId: string;
		Tags?: Array<Tag>;
	}

	export interface BatchCreateRoomMembershipResponse {
		Errors?: Array<MemberError>;
	}


	/**Membership details, such as member ID and member role. */
	export interface MembershipItem {
		MemberId?: string;
		Role?: MembershipItemRole;
	}

	export enum MembershipItemRole { Administrator = 0, Member = 1 }

	export interface BatchDeletePhoneNumberResponse {
		PhoneNumberErrors?: Array<PhoneNumberError>;
	}

	export interface BatchSuspendUserResponse {
		UserErrors?: Array<UserError>;
	}

	export interface BatchUnsuspendUserResponse {
		UserErrors?: Array<UserError>;
	}

	export interface BatchUpdatePhoneNumberResponse {
		PhoneNumberErrors?: Array<PhoneNumberError>;
	}


	/**The phone number ID, product type, or calling name fields to update, used with the <a>BatchUpdatePhoneNumber</a> and <a>UpdatePhoneNumber</a> actions. */
	export interface UpdatePhoneNumberRequestItem {
		PhoneNumberId: string;
		ProductType?: UpdatePhoneNumberRequestItemProductType;
		CallingName?: string;
	}

	export enum UpdatePhoneNumberRequestItemProductType { BusinessCalling = 0, VoiceConnector = 1 }

	export interface BatchUpdateUserResponse {
		UserErrors?: Array<UserError>;
	}


	/**The user ID and user fields to update, used with the <a>BatchUpdateUser</a> action. */
	export interface UpdateUserRequestItem {
		UserId: string;
		LicenseType?: UpdateUserRequestItemLicenseType;
		UserType?: UpdateUserRequestItemUserType;

		/**The Alexa for Business metadata associated with an Amazon Chime user, used to integrate Alexa for Business with a device. */
		AlexaForBusinessMetadata?: AlexaForBusinessMetadata;
	}

	export enum UpdateUserRequestItemLicenseType { Basic = 0, Plus = 1, Pro = 2, ProTrial = 3 }

	export enum UpdateUserRequestItemUserType { PrivateUser = 0, SharedDevice = 1 }

	export interface CreateAccountResponse {

		/**The Amazon Chime account details. An AWS account can have multiple Amazon Chime accounts. */
		Account?: Account;
	}

	export interface CreateAttendeeResponse {

		/**<p>An Amazon Chime SDK meeting attendee. Includes a unique <code>AttendeeId</code> and <code>JoinToken</code>. The <code>JoinToken</code> allows a client to authenticate and join as the specified attendee. The <code>JoinToken</code> expires when the meeting ends or when <a>DeleteAttendee</a> is called. After that, the attendee is unable to join the meeting.</p> <p>We recommend securely transferring each <code>JoinToken</code> from your server application to the client so that no other client has access to the token except for the one authorized to represent the attendee.</p> */
		Attendee?: Attendee;
	}


	/**Describes a tag applied to a resource. */
	export interface Tag {
		Key: string;
		Value: string;
	}

	export interface CreateBotResponse {

		/**A resource that allows Enterprise account administrators to configure an interface to receive events from Amazon Chime. */
		Bot?: Bot;
	}

	export interface CreateMeetingResponse {

		/**A meeting created using the Amazon Chime SDK. */
		Meeting?: Meeting;
	}

	export interface CreatePhoneNumberOrderResponse {

		/**The details of a phone number order created for Amazon Chime. */
		PhoneNumberOrder?: PhoneNumberOrder;
	}

	export interface CreateProxySessionResponse {

		/**The proxy session for an Amazon Chime Voice Connector. */
		ProxySession?: ProxySession;
	}

	export enum Capability { Voice = 0, SMS = 1 }

	export interface CreateRoomResponse {

		/**The Amazon Chime chat room details. */
		Room?: Room;
	}

	export interface CreateRoomMembershipResponse {

		/**The room membership details. */
		RoomMembership?: RoomMembership;
	}

	export interface CreateUserResponse {

		/**The user on the Amazon Chime account. */
		User?: User;
	}

	export interface CreateVoiceConnectorResponse {

		/**The Amazon Chime Voice Connector configuration, including outbound host name and encryption settings. */
		VoiceConnector?: VoiceConnector;
	}

	export interface CreateVoiceConnectorGroupResponse {

		/**The Amazon Chime Voice Connector group configuration, including associated Amazon Chime Voice Connectors. You can include Amazon Chime Voice Connectors from different AWS Regions in your group. This creates a fault tolerant mechanism for fallback in case of availability events. */
		VoiceConnectorGroup?: VoiceConnectorGroup;
	}


	/**For Amazon Chime Voice Connector groups, the Amazon Chime Voice Connectors to which to route inbound calls. Includes priority configuration settings. Limit: 3 <code>VoiceConnectorItems</code> per Amazon Chime Voice Connector group. */
	export interface VoiceConnectorItem {
		VoiceConnectorId: string;
		Priority: number;
	}

	export interface DisassociatePhoneNumbersFromVoiceConnectorResponse {
		PhoneNumberErrors?: Array<PhoneNumberError>;
	}

	export interface DisassociatePhoneNumbersFromVoiceConnectorGroupResponse {
		PhoneNumberErrors?: Array<PhoneNumberError>;
	}

	export interface GetAccountResponse {

		/**The Amazon Chime account details. An AWS account can have multiple Amazon Chime accounts. */
		Account?: Account;
	}

	export interface GetAccountSettingsResponse {

		/**Settings related to the Amazon Chime account. This includes settings that start or stop remote control of shared screens, or start or stop the dial-out option in the Amazon Chime web application. For more information about these settings, see <a href="https://docs.aws.amazon.com/chime/latest/ag/policies.html">Use the Policies Page</a> in the <i>Amazon Chime Administration Guide</i>. */
		AccountSettings?: AccountSettings;
	}

	export interface GetAttendeeResponse {

		/**<p>An Amazon Chime SDK meeting attendee. Includes a unique <code>AttendeeId</code> and <code>JoinToken</code>. The <code>JoinToken</code> allows a client to authenticate and join as the specified attendee. The <code>JoinToken</code> expires when the meeting ends or when <a>DeleteAttendee</a> is called. After that, the attendee is unable to join the meeting.</p> <p>We recommend securely transferring each <code>JoinToken</code> from your server application to the client so that no other client has access to the token except for the one authorized to represent the attendee.</p> */
		Attendee?: Attendee;
	}

	export interface GetBotResponse {

		/**A resource that allows Enterprise account administrators to configure an interface to receive events from Amazon Chime. */
		Bot?: Bot;
	}

	export interface GetEventsConfigurationResponse {

		/**The configuration that allows a bot to receive outgoing events. Can be either an HTTPS endpoint or a Lambda function ARN. */
		EventsConfiguration?: EventsConfiguration;
	}

	export interface GetGlobalSettingsResponse {

		/**The Amazon Chime Business Calling settings for the administrator's AWS account. Includes any Amazon S3 buckets designated for storing call detail records. */
		BusinessCalling?: BusinessCallingSettings;

		/**The Amazon Chime Voice Connector settings. Includes any Amazon S3 buckets designated for storing call detail records. */
		VoiceConnector?: VoiceConnectorSettings;
	}

	export interface GetMeetingResponse {

		/**A meeting created using the Amazon Chime SDK. */
		Meeting?: Meeting;
	}

	export interface GetPhoneNumberResponse {

		/**A phone number used for Amazon Chime Business Calling or an Amazon Chime Voice Connector. */
		PhoneNumber?: PhoneNumber;
	}

	export interface GetPhoneNumberOrderResponse {

		/**The details of a phone number order created for Amazon Chime. */
		PhoneNumberOrder?: PhoneNumberOrder;
	}

	export interface GetPhoneNumberSettingsResponse {
		CallingName?: string;
		CallingNameUpdatedTimestamp?: Date;
	}

	export interface GetProxySessionResponse {

		/**The proxy session for an Amazon Chime Voice Connector. */
		ProxySession?: ProxySession;
	}

	export interface GetRetentionSettingsResponse {

		/**The retention settings for an Amazon Chime Enterprise account that determine how long to retain items such as chat room messages and chat conversation messages. */
		RetentionSettings?: RetentionSettings;
		InitiateDeletionTimestamp?: Date;
	}

	export interface GetRoomResponse {

		/**The Amazon Chime chat room details. */
		Room?: Room;
	}

	export interface GetUserResponse {

		/**The user on the Amazon Chime account. */
		User?: User;
	}

	export interface GetUserSettingsResponse {

		/**Settings associated with an Amazon Chime user, including inbound and outbound calling and text messaging. */
		UserSettings?: UserSettings;
	}

	export interface GetVoiceConnectorResponse {

		/**The Amazon Chime Voice Connector configuration, including outbound host name and encryption settings. */
		VoiceConnector?: VoiceConnector;
	}

	export interface GetVoiceConnectorGroupResponse {

		/**The Amazon Chime Voice Connector group configuration, including associated Amazon Chime Voice Connectors. You can include Amazon Chime Voice Connectors from different AWS Regions in your group. This creates a fault tolerant mechanism for fallback in case of availability events. */
		VoiceConnectorGroup?: VoiceConnectorGroup;
	}

	export interface GetVoiceConnectorLoggingConfigurationResponse {

		/**The logging configuration associated with an Amazon Chime Voice Connector. Specifies whether SIP message logs are enabled for sending to Amazon CloudWatch Logs. */
		LoggingConfiguration?: LoggingConfiguration;
	}

	export interface GetVoiceConnectorOriginationResponse {

		/**Origination settings enable your SIP hosts to receive inbound calls using your Amazon Chime Voice Connector. */
		Origination?: Origination;
	}

	export interface GetVoiceConnectorProxyResponse {

		/**The proxy configuration for an Amazon Chime Voice Connector. */
		Proxy?: Proxy;
	}

	export interface GetVoiceConnectorStreamingConfigurationResponse {

		/**The streaming configuration associated with an Amazon Chime Voice Connector. Specifies whether media streaming is enabled for sending to Amazon Kinesis, and shows the retention period for the Amazon Kinesis data, in hours. */
		StreamingConfiguration?: StreamingConfiguration;
	}

	export interface GetVoiceConnectorTerminationResponse {

		/**Termination settings enable your SIP hosts to make outbound calls using your Amazon Chime Voice Connector. */
		Termination?: Termination;
	}

	export interface GetVoiceConnectorTerminationHealthResponse {

		/**The termination health details, including the source IP address and timestamp of the last successful SIP <code>OPTIONS</code> message from your SIP infrastructure. */
		TerminationHealth?: TerminationHealth;
	}

	export interface InviteUsersResponse {
		Invites?: Array<Invite>;
	}

	export interface ListAccountsResponse {
		Accounts?: Array<Account>;
		NextToken?: string;
	}

	export interface ListAttendeeTagsResponse {
		Tags?: Array<Tag>;
	}

	export interface ListAttendeesResponse {
		Attendees?: Array<Attendee>;
		NextToken?: string;
	}

	export interface ListBotsResponse {
		Bots?: Array<Bot>;
		NextToken?: string;
	}

	export interface ListMeetingTagsResponse {
		Tags?: Array<Tag>;
	}

	export interface ListMeetingsResponse {
		Meetings?: Array<Meeting>;
		NextToken?: string;
	}

	export interface ListPhoneNumberOrdersResponse {
		PhoneNumberOrders?: Array<PhoneNumberOrder>;
		NextToken?: string;
	}

	export interface ListPhoneNumbersResponse {
		PhoneNumbers?: Array<PhoneNumber>;
		NextToken?: string;
	}

	export interface ListProxySessionsResponse {
		ProxySessions?: Array<ProxySession>;
		NextToken?: string;
	}

	export interface ListRoomMembershipsResponse {
		RoomMemberships?: Array<RoomMembership>;
		NextToken?: string;
	}

	export interface ListRoomsResponse {
		Rooms?: Array<Room>;
		NextToken?: string;
	}

	export interface ListTagsForResourceResponse {
		Tags?: Array<Tag>;
	}

	export interface ListUsersResponse {
		Users?: Array<User>;
		NextToken?: string;
	}

	export interface ListVoiceConnectorGroupsResponse {
		VoiceConnectorGroups?: Array<VoiceConnectorGroup>;
		NextToken?: string;
	}

	export interface ListVoiceConnectorTerminationCredentialsResponse {
		Usernames?: Array<SensitiveString>;
	}

	export interface ListVoiceConnectorsResponse {
		VoiceConnectors?: Array<VoiceConnector>;
		NextToken?: string;
	}

	export interface PutEventsConfigurationResponse {

		/**The configuration that allows a bot to receive outgoing events. Can be either an HTTPS endpoint or a Lambda function ARN. */
		EventsConfiguration?: EventsConfiguration;
	}

	export interface PutRetentionSettingsResponse {

		/**The retention settings for an Amazon Chime Enterprise account that determine how long to retain items such as chat room messages and chat conversation messages. */
		RetentionSettings?: RetentionSettings;
		InitiateDeletionTimestamp?: Date;
	}


	/**The retention settings that determine how long to retain chat room messages for an Amazon Chime Enterprise account. */
	export interface RoomRetentionSettings {
		RetentionDays?: number;
	}


	/**The retention settings that determine how long to retain chat conversation messages for an Amazon Chime Enterprise account. */
	export interface ConversationRetentionSettings {
		RetentionDays?: number;
	}

	export interface PutVoiceConnectorLoggingConfigurationResponse {

		/**The logging configuration associated with an Amazon Chime Voice Connector. Specifies whether SIP message logs are enabled for sending to Amazon CloudWatch Logs. */
		LoggingConfiguration?: LoggingConfiguration;
	}

	export interface PutVoiceConnectorOriginationResponse {

		/**Origination settings enable your SIP hosts to receive inbound calls using your Amazon Chime Voice Connector. */
		Origination?: Origination;
	}

	export interface PutVoiceConnectorProxyResponse {

		/**The proxy configuration for an Amazon Chime Voice Connector. */
		Proxy?: Proxy;
	}

	export interface PutVoiceConnectorStreamingConfigurationResponse {

		/**The streaming configuration associated with an Amazon Chime Voice Connector. Specifies whether media streaming is enabled for sending to Amazon Kinesis, and shows the retention period for the Amazon Kinesis data, in hours. */
		StreamingConfiguration?: StreamingConfiguration;
	}

	export interface PutVoiceConnectorTerminationResponse {

		/**Termination settings enable your SIP hosts to make outbound calls using your Amazon Chime Voice Connector. */
		Termination?: Termination;
	}


	/**The SIP credentials used to authenticate requests to your Amazon Chime Voice Connector. */
	export interface Credential {
		Username?: string;
		Password?: string;
	}

	export interface RegenerateSecurityTokenResponse {

		/**A resource that allows Enterprise account administrators to configure an interface to receive events from Amazon Chime. */
		Bot?: Bot;
	}

	export interface ResetPersonalPINResponse {

		/**The user on the Amazon Chime account. */
		User?: User;
	}

	export interface RestorePhoneNumberResponse {

		/**A phone number used for Amazon Chime Business Calling or an Amazon Chime Voice Connector. */
		PhoneNumber?: PhoneNumber;
	}

	export interface SearchAvailablePhoneNumbersResponse {
		E164PhoneNumbers?: Array<E164PhoneNumber>;
	}

	export interface UpdateAccountResponse {

		/**The Amazon Chime account details. An AWS account can have multiple Amazon Chime accounts. */
		Account?: Account;
	}

	export interface UpdateBotResponse {

		/**A resource that allows Enterprise account administrators to configure an interface to receive events from Amazon Chime. */
		Bot?: Bot;
	}

	export interface UpdatePhoneNumberResponse {

		/**A phone number used for Amazon Chime Business Calling or an Amazon Chime Voice Connector. */
		PhoneNumber?: PhoneNumber;
	}

	export interface UpdateProxySessionResponse {

		/**The proxy session for an Amazon Chime Voice Connector. */
		ProxySession?: ProxySession;
	}

	export interface UpdateRoomResponse {

		/**The Amazon Chime chat room details. */
		Room?: Room;
	}

	export interface UpdateRoomMembershipResponse {

		/**The room membership details. */
		RoomMembership?: RoomMembership;
	}

	export interface UpdateUserResponse {

		/**The user on the Amazon Chime account. */
		User?: User;
	}


	/**Settings that allow management of telephony permissions for an Amazon Chime user, such as inbound and outbound calling and text messaging. */
	export interface TelephonySettings {
		InboundCalling: boolean;
		OutboundCalling: boolean;
		SMS: boolean;
	}

	export interface UpdateVoiceConnectorResponse {

		/**The Amazon Chime Voice Connector configuration, including outbound host name and encryption settings. */
		VoiceConnector?: VoiceConnector;
	}

	export interface UpdateVoiceConnectorGroupResponse {

		/**The Amazon Chime Voice Connector group configuration, including associated Amazon Chime Voice Connectors. You can include Amazon Chime Voice Connectors from different AWS Regions in your group. This creates a fault tolerant mechanism for fallback in case of availability events. */
		VoiceConnectorGroup?: VoiceConnectorGroup;
	}

	export enum AccountType { Team = 0, EnterpriseDirectory = 1, EnterpriseLWA = 2, EnterpriseOIDC = 3 }

	export enum License { Basic = 0, Plus = 1, Pro = 2, ProTrial = 3 }


	/**The Amazon Chime account details. An AWS account can have multiple Amazon Chime accounts. */
	export interface Account {
		AwsAccountId: string;
		AccountId: string;
		Name: string;
		AccountType?: AccountAccountType;
		CreatedTimestamp?: Date;
		DefaultLicense?: AccountDefaultLicense;
		SupportedLicenses?: Array<License>;
		SigninDelegateGroups?: Array<SigninDelegateGroup>;
	}

	export enum AccountAccountType { Team = 0, EnterpriseDirectory = 1, EnterpriseLWA = 2, EnterpriseOIDC = 3 }

	export enum AccountDefaultLicense { Basic = 0, Plus = 1, Pro = 2, ProTrial = 3 }


	/**Settings related to the Amazon Chime account. This includes settings that start or stop remote control of shared screens, or start or stop the dial-out option in the Amazon Chime web application. For more information about these settings, see <a href="https://docs.aws.amazon.com/chime/latest/ag/policies.html">Use the Policies Page</a> in the <i>Amazon Chime Administration Guide</i>. */
	export interface AccountSettings {
		DisableRemoteControl?: boolean;
		EnableDialOut?: boolean;
	}


	/**The Alexa for Business metadata associated with an Amazon Chime user, used to integrate Alexa for Business with a device. */
	export interface AlexaForBusinessMetadata {
		IsAlexaForBusinessEnabled?: boolean;
		AlexaForBusinessRoomArn?: string;
	}

	export interface AssociatePhoneNumberWithUserRequest {
		E164PhoneNumber: string;
	}

	export interface AssociatePhoneNumbersWithVoiceConnectorGroupRequest {
		E164PhoneNumbers?: Array<E164PhoneNumber>;
		ForceAssociate?: boolean;
	}

	export interface AssociatePhoneNumbersWithVoiceConnectorRequest {
		E164PhoneNumbers?: Array<E164PhoneNumber>;
		ForceAssociate?: boolean;
	}

	export interface AssociateSigninDelegateGroupsWithAccountRequest {
		SigninDelegateGroups: Array<SigninDelegateGroup>;
	}


	/**<p>An Amazon Chime SDK meeting attendee. Includes a unique <code>AttendeeId</code> and <code>JoinToken</code>. The <code>JoinToken</code> allows a client to authenticate and join as the specified attendee. The <code>JoinToken</code> expires when the meeting ends or when <a>DeleteAttendee</a> is called. After that, the attendee is unable to join the meeting.</p> <p>We recommend securely transferring each <code>JoinToken</code> from your server application to the client so that no other client has access to the token except for the one authorized to represent the attendee.</p> */
	export interface Attendee {
		ExternalUserId?: string;
		AttendeeId?: string;
		JoinToken?: string;
	}


	/**The list of errors returned when errors are encountered during the BatchCreateAttendee and CreateAttendee actions. This includes external user IDs, error codes, and error messages. */
	export interface CreateAttendeeError {
		ExternalUserId?: string;
		ErrorCode?: string;
		ErrorMessage?: string;
	}

	export interface BatchCreateAttendeeRequest {
		Attendees: Array<CreateAttendeeRequestItem>;
	}

	export interface BatchCreateRoomMembershipRequest {
		MembershipItemList: Array<MembershipItem>;
	}

	export interface BatchDeletePhoneNumberRequest {
		PhoneNumberIds: Array<String>;
	}

	export interface BatchSuspendUserRequest {
		UserIdList: Array<NonEmptyString>;
	}

	export interface BatchUnsuspendUserRequest {
		UserIdList: Array<NonEmptyString>;
	}

	export interface BatchUpdatePhoneNumberRequest {
		UpdatePhoneNumberRequestItems: Array<UpdatePhoneNumberRequestItem>;
	}

	export interface BatchUpdateUserRequest {
		UpdateUserRequestItems: Array<UpdateUserRequestItem>;
	}

	export enum BotType { ChatBot = 0 }


	/**A resource that allows Enterprise account administrators to configure an interface to receive events from Amazon Chime. */
	export interface Bot {
		BotId?: string;
		UserId?: string;
		DisplayName?: string;
		BotType?: BotBotType;
		Disabled?: boolean;
		CreatedTimestamp?: Date;
		UpdatedTimestamp?: Date;
		BotEmail?: string;
		SecurityToken?: string;
	}

	export enum BotBotType { ChatBot = 0 }


	/**The Amazon Chime Business Calling settings for the administrator's AWS account. Includes any Amazon S3 buckets designated for storing call detail records. */
	export interface BusinessCallingSettings {
		CdrBucket?: string;
	}

	export enum CallingNameStatus { Unassigned = 0, UpdateInProgress = 1, UpdateSucceeded = 2, UpdateFailed = 3 }

	export interface CreateAccountRequest {
		Name: string;
	}

	export interface CreateAttendeeRequest {
		ExternalUserId: string;
		Tags?: Array<Tag>;
	}

	export interface CreateBotRequest {
		DisplayName: string;
		Domain?: string;
	}


	/**The configuration for resource targets to receive notifications when Amazon Chime SDK meeting and attendee events occur. */
	export interface MeetingNotificationConfiguration {
		SnsTopicArn?: string;
		SqsQueueArn?: string;
	}

	export interface CreateMeetingRequest {
		ClientRequestToken: string;
		ExternalMeetingId?: string;
		MeetingHostId?: string;
		MediaRegion?: string;
		Tags?: Array<Tag>;

		/**The configuration for resource targets to receive notifications when Amazon Chime SDK meeting and attendee events occur. */
		NotificationsConfiguration?: MeetingNotificationConfiguration;
	}


	/**A meeting created using the Amazon Chime SDK. */
	export interface Meeting {
		MeetingId?: string;
		ExternalMeetingId?: string;

		/**A set of endpoints used by clients to connect to the media service group for a Amazon Chime SDK meeting. */
		MediaPlacement?: MediaPlacement;
		MediaRegion?: string;
	}

	export enum PhoneNumberProductType { BusinessCalling = 0, VoiceConnector = 1 }

	export interface CreatePhoneNumberOrderRequest {
		ProductType: CreatePhoneNumberOrderRequestProductType;
		E164PhoneNumbers: Array<E164PhoneNumber>;
	}

	export enum CreatePhoneNumberOrderRequestProductType { BusinessCalling = 0, VoiceConnector = 1 }


	/**The details of a phone number order created for Amazon Chime. */
	export interface PhoneNumberOrder {
		PhoneNumberOrderId?: string;
		ProductType?: PhoneNumberOrderProductType;
		Status?: PhoneNumberOrderStatus;
		OrderedPhoneNumbers?: Array<OrderedPhoneNumber>;
		CreatedTimestamp?: Date;
		UpdatedTimestamp?: Date;
	}

	export enum PhoneNumberOrderProductType { BusinessCalling = 0, VoiceConnector = 1 }

	export enum PhoneNumberOrderStatus { Processing = 0, Successful = 1, Failed = 2, Partial = 3 }

	export enum NumberSelectionBehavior { PreferSticky = 0, AvoidSticky = 1 }

	export enum GeoMatchLevel { Country = 0, AreaCode = 1 }


	/**The country and area code for a proxy phone number in a proxy phone session. */
	export interface GeoMatchParams {
		Country: string;
		AreaCode: string;
	}

	export interface CreateProxySessionRequest {
		ParticipantPhoneNumbers: Array<E164PhoneNumber>;
		Name?: string;
		ExpiryMinutes?: number;
		Capabilities: Array<Capability>;
		NumberSelectionBehavior?: CreateProxySessionRequestNumberSelectionBehavior;
		GeoMatchLevel?: CreateProxySessionRequestGeoMatchLevel;

		/**The country and area code for a proxy phone number in a proxy phone session. */
		GeoMatchParams?: GeoMatchParams;
	}

	export enum CreateProxySessionRequestNumberSelectionBehavior { PreferSticky = 0, AvoidSticky = 1 }

	export enum CreateProxySessionRequestGeoMatchLevel { Country = 0, AreaCode = 1 }


	/**The proxy session for an Amazon Chime Voice Connector. */
	export interface ProxySession {
		VoiceConnectorId?: string;
		ProxySessionId?: string;
		Name?: string;
		Status?: ProxySessionStatus;
		ExpiryMinutes?: number;
		Capabilities?: Array<Capability>;
		CreatedTimestamp?: Date;
		UpdatedTimestamp?: Date;
		EndedTimestamp?: Date;
		Participants?: Array<Participant>;
		NumberSelectionBehavior?: ProxySessionNumberSelectionBehavior;
		GeoMatchLevel?: ProxySessionGeoMatchLevel;

		/**The country and area code for a proxy phone number in a proxy phone session. */
		GeoMatchParams?: GeoMatchParams;
	}

	export enum ProxySessionStatus { Open = 0, InProgress = 1, Closed = 2 }

	export enum ProxySessionNumberSelectionBehavior { PreferSticky = 0, AvoidSticky = 1 }

	export enum ProxySessionGeoMatchLevel { Country = 0, AreaCode = 1 }

	export enum RoomMembershipRole { Administrator = 0, Member = 1 }

	export interface CreateRoomMembershipRequest {
		MemberId: string;
		Role?: CreateRoomMembershipRequestRole;
	}

	export enum CreateRoomMembershipRequestRole { Administrator = 0, Member = 1 }


	/**The room membership details. */
	export interface RoomMembership {
		RoomId?: string;

		/**The member details, such as email address, name, member ID, and member type. */
		Member?: Member;
		Role?: RoomMembershipRole;
		InvitedBy?: string;
		UpdatedTimestamp?: Date;
	}

	export enum RoomMembershipRole { Administrator = 0, Member = 1 }

	export interface CreateRoomRequest {
		Name: string;
		ClientRequestToken?: string;
	}


	/**The Amazon Chime chat room details. */
	export interface Room {
		RoomId?: string;
		Name?: string;
		AccountId?: string;
		CreatedBy?: string;
		CreatedTimestamp?: Date;
		UpdatedTimestamp?: Date;
	}

	export enum UserType { PrivateUser = 0, SharedDevice = 1 }

	export interface CreateUserRequest {
		Username?: string;
		Email?: string;
		UserType?: CreateUserRequestUserType;
	}

	export enum CreateUserRequestUserType { PrivateUser = 0, SharedDevice = 1 }


	/**The user on the Amazon Chime account. */
	export interface User {
		UserId: string;
		AccountId?: string;
		PrimaryEmail?: string;
		PrimaryProvisionedNumber?: string;
		DisplayName?: string;
		LicenseType?: UserLicenseType;
		UserType?: UserUserType;
		UserRegistrationStatus?: UserUserRegistrationStatus;
		UserInvitationStatus?: UserUserInvitationStatus;
		RegisteredOn?: Date;
		InvitedOn?: Date;

		/**The Alexa for Business metadata associated with an Amazon Chime user, used to integrate Alexa for Business with a device. */
		AlexaForBusinessMetadata?: AlexaForBusinessMetadata;
		PersonalPIN?: string;
	}

	export enum UserLicenseType { Basic = 0, Plus = 1, Pro = 2, ProTrial = 3 }

	export enum UserUserType { PrivateUser = 0, SharedDevice = 1 }

	export enum UserUserRegistrationStatus { Unregistered = 0, Registered = 1, Suspended = 2 }

	export enum UserUserInvitationStatus { Pending = 0, Accepted = 1, Failed = 2 }

	export interface CreateVoiceConnectorGroupRequest {
		Name: string;
		VoiceConnectorItems?: Array<VoiceConnectorItem>;
	}


	/**The Amazon Chime Voice Connector group configuration, including associated Amazon Chime Voice Connectors. You can include Amazon Chime Voice Connectors from different AWS Regions in your group. This creates a fault tolerant mechanism for fallback in case of availability events. */
	export interface VoiceConnectorGroup {
		VoiceConnectorGroupId?: string;
		Name?: string;
		VoiceConnectorItems?: Array<VoiceConnectorItem>;
		CreatedTimestamp?: Date;
		UpdatedTimestamp?: Date;
	}

	export enum VoiceConnectorAwsRegion { us-east-1 = 0, us-west-2 = 1 }

	export interface CreateVoiceConnectorRequest {
		Name: string;
		AwsRegion?: CreateVoiceConnectorRequestAwsRegion;
		RequireEncryption: boolean;
	}

	export enum CreateVoiceConnectorRequestAwsRegion { us-east-1 = 0, us-west-2 = 1 }


	/**The Amazon Chime Voice Connector configuration, including outbound host name and encryption settings. */
	export interface VoiceConnector {
		VoiceConnectorId?: string;
		AwsRegion?: VoiceConnectorAwsRegion;
		Name?: string;
		OutboundHostName?: string;
		RequireEncryption?: boolean;
		CreatedTimestamp?: Date;
		UpdatedTimestamp?: Date;
	}

	export enum VoiceConnectorAwsRegion { us-east-1 = 0, us-west-2 = 1 }

	export interface DeleteVoiceConnectorTerminationCredentialsRequest {
		Usernames?: Array<SensitiveString>;
	}

	export interface DisassociatePhoneNumbersFromVoiceConnectorGroupRequest {
		E164PhoneNumbers?: Array<E164PhoneNumber>;
	}

	export interface DisassociatePhoneNumbersFromVoiceConnectorRequest {
		E164PhoneNumbers?: Array<E164PhoneNumber>;
	}

	export interface DisassociateSigninDelegateGroupsFromAccountRequest {
		GroupNames: Array<String>;
	}

	export enum EmailStatus { NotSent = 0, Sent = 1, Failed = 2 }

	export enum ErrorCode { BadRequest = 0, Conflict = 1, Forbidden = 2, NotFound = 3, PreconditionFailed = 4, ResourceLimitExceeded = 5, ServiceFailure = 6, AccessDenied = 7, ServiceUnavailable = 8, Throttled = 9, Unauthorized = 10, Unprocessable = 11, VoiceConnectorGroupAssociationsExist = 12, PhoneNumberAssociationsExist = 13 }


	/**The configuration that allows a bot to receive outgoing events. Can be either an HTTPS endpoint or a Lambda function ARN. */
	export interface EventsConfiguration {
		BotId?: string;
		OutboundEventsHTTPSEndpoint?: string;
		LambdaFunctionArn?: string;
	}


	/**The Amazon Chime Voice Connector settings. Includes any Amazon S3 buckets designated for storing call detail records. */
	export interface VoiceConnectorSettings {
		CdrBucket?: string;
	}


	/**A phone number used for Amazon Chime Business Calling or an Amazon Chime Voice Connector. */
	export interface PhoneNumber {
		PhoneNumberId?: string;
		E164PhoneNumber?: string;
		Type?: PhoneNumberType;
		ProductType?: PhoneNumberProductType;
		Status?: PhoneNumberStatus;

		/**The phone number capabilities for Amazon Chime Business Calling phone numbers, such as enabled inbound and outbound calling and text messaging. */
		Capabilities?: PhoneNumberCapabilities;
		Associations?: Array<PhoneNumberAssociation>;
		CallingName?: string;
		CallingNameStatus?: PhoneNumberCallingNameStatus;
		CreatedTimestamp?: Date;
		UpdatedTimestamp?: Date;
		DeletionTimestamp?: Date;
	}

	export enum PhoneNumberType { Local = 0, TollFree = 1 }

	export enum PhoneNumberProductType { BusinessCalling = 0, VoiceConnector = 1 }

	export enum PhoneNumberStatus { AcquireInProgress = 0, AcquireFailed = 1, Unassigned = 2, Assigned = 3, ReleaseInProgress = 4, DeleteInProgress = 5, ReleaseFailed = 6, DeleteFailed = 7 }

	export enum PhoneNumberCallingNameStatus { Unassigned = 0, UpdateInProgress = 1, UpdateSucceeded = 2, UpdateFailed = 3 }


	/**The retention settings for an Amazon Chime Enterprise account that determine how long to retain items such as chat room messages and chat conversation messages. */
	export interface RetentionSettings {

		/**The retention settings that determine how long to retain chat room messages for an Amazon Chime Enterprise account. */
		RoomRetentionSettings?: RoomRetentionSettings;

		/**The retention settings that determine how long to retain chat conversation messages for an Amazon Chime Enterprise account. */
		ConversationRetentionSettings?: ConversationRetentionSettings;
	}


	/**Settings associated with an Amazon Chime user, including inbound and outbound calling and text messaging. */
	export interface UserSettings {

		/**Settings that allow management of telephony permissions for an Amazon Chime user, such as inbound and outbound calling and text messaging. */
		Telephony: TelephonySettings;
	}


	/**The logging configuration associated with an Amazon Chime Voice Connector. Specifies whether SIP message logs are enabled for sending to Amazon CloudWatch Logs. */
	export interface LoggingConfiguration {
		EnableSIPLogs?: boolean;
	}


	/**Origination settings enable your SIP hosts to receive inbound calls using your Amazon Chime Voice Connector. */
	export interface Origination {
		Routes?: Array<OriginationRoute>;
		Disabled?: boolean;
	}


	/**The proxy configuration for an Amazon Chime Voice Connector. */
	export interface Proxy {
		DefaultSessionExpiryMinutes?: number;
		Disabled?: boolean;
		FallBackPhoneNumber?: string;
		PhoneNumberCountries?: Array<String>;
	}


	/**The streaming configuration associated with an Amazon Chime Voice Connector. Specifies whether media streaming is enabled for sending to Amazon Kinesis, and shows the retention period for the Amazon Kinesis data, in hours. */
	export interface StreamingConfiguration {
		DataRetentionInHours: number;
		Disabled?: boolean;
		StreamingNotificationTargets?: Array<StreamingNotificationTarget>;
	}


	/**The termination health details, including the source IP address and timestamp of the last successful SIP <code>OPTIONS</code> message from your SIP infrastructure. */
	export interface TerminationHealth {
		Timestamp?: Date;
		Source?: string;
	}


	/**Termination settings enable your SIP hosts to make outbound calls using your Amazon Chime Voice Connector. */
	export interface Termination {
		CpsLimit?: number;
		DefaultPhoneNumber?: string;
		CallingRegions?: Array<CallingRegion>;
		CidrAllowedList?: Array<String>;
		Disabled?: boolean;
	}

	export enum InviteStatus { Pending = 0, Accepted = 1, Failed = 2 }


	/**Invitation object returned after emailing users to invite them to join the Amazon Chime <code>Team</code> account. */
	export interface Invite {
		InviteId?: string;
		Status?: InviteStatus;
		EmailAddress?: string;
		EmailStatus?: InviteEmailStatus;
	}

	export enum InviteStatus { Pending = 0, Accepted = 1, Failed = 2 }

	export enum InviteEmailStatus { NotSent = 0, Sent = 1, Failed = 2 }

	export interface InviteUsersRequest {
		UserEmailList: Array<EmailAddress>;
		UserType?: InviteUsersRequestUserType;
	}

	export enum InviteUsersRequestUserType { PrivateUser = 0, SharedDevice = 1 }

	export enum PhoneNumberStatus { AcquireInProgress = 0, AcquireFailed = 1, Unassigned = 2, Assigned = 3, ReleaseInProgress = 4, DeleteInProgress = 5, ReleaseFailed = 6, DeleteFailed = 7 }

	export enum PhoneNumberAssociationName { AccountId = 0, UserId = 1, VoiceConnectorId = 2, VoiceConnectorGroupId = 3 }

	export enum ProxySessionStatus { Open = 0, InProgress = 1, Closed = 2 }


	/**A set of endpoints used by clients to connect to the media service group for a Amazon Chime SDK meeting. */
	export interface MediaPlacement {
		AudioHostUrl?: string;
		AudioFallbackUrl?: string;
		ScreenDataUrl?: string;
		ScreenSharingUrl?: string;
		ScreenViewingUrl?: string;
		SignalingUrl?: string;
		TurnControlUrl?: string;
	}

	export enum MemberType { User = 0, Bot = 1, Webhook = 2 }


	/**The member details, such as email address, name, member ID, and member type. */
	export interface Member {
		MemberId?: string;
		MemberType?: MemberMemberType;
		Email?: string;
		FullName?: string;
		AccountId?: string;
	}

	export enum MemberMemberType { User = 0, Bot = 1, Webhook = 2 }


	/**The list of errors returned when a member action results in an error. */
	export interface MemberError {
		MemberId?: string;
		ErrorCode?: MemberErrorErrorCode;
		ErrorMessage?: string;
	}

	export enum MemberErrorErrorCode { BadRequest = 0, Conflict = 1, Forbidden = 2, NotFound = 3, PreconditionFailed = 4, ResourceLimitExceeded = 5, ServiceFailure = 6, AccessDenied = 7, ServiceUnavailable = 8, Throttled = 9, Unauthorized = 10, Unprocessable = 11, VoiceConnectorGroupAssociationsExist = 12, PhoneNumberAssociationsExist = 13 }

	export enum NotificationTarget { EventBridge = 0, SNS = 1, SQS = 2 }

	export enum OrderedPhoneNumberStatus { Processing = 0, Acquired = 1, Failed = 2 }


	/**A phone number for which an order has been placed. */
	export interface OrderedPhoneNumber {
		E164PhoneNumber?: string;
		Status?: OrderedPhoneNumberStatus;
	}

	export enum OrderedPhoneNumberStatus { Processing = 0, Acquired = 1, Failed = 2 }

	export enum OriginationRouteProtocol { TCP = 0, UDP = 1 }


	/**Origination routes define call distribution properties for your SIP hosts to receive inbound calls using your Amazon Chime Voice Connector. Limit: Ten origination routes for each Amazon Chime Voice Connector. */
	export interface OriginationRoute {
		Host?: string;
		Port?: number;
		Protocol?: OriginationRouteProtocol;
		Priority?: number;
		Weight?: number;
	}

	export enum OriginationRouteProtocol { TCP = 0, UDP = 1 }


	/**The phone number and proxy phone number for a participant in an Amazon Chime Voice Connector proxy session. */
	export interface Participant {
		PhoneNumber?: string;
		ProxyPhoneNumber?: string;
	}

	export enum PhoneNumberType { Local = 0, TollFree = 1 }


	/**The phone number capabilities for Amazon Chime Business Calling phone numbers, such as enabled inbound and outbound calling and text messaging. */
	export interface PhoneNumberCapabilities {
		InboundCall?: boolean;
		OutboundCall?: boolean;
		InboundSMS?: boolean;
		OutboundSMS?: boolean;
		InboundMMS?: boolean;
		OutboundMMS?: boolean;
	}


	/**The phone number associations, such as Amazon Chime account ID, Amazon Chime user ID, Amazon Chime Voice Connector ID, or Amazon Chime Voice Connector group ID. */
	export interface PhoneNumberAssociation {
		Value?: string;
		Name?: PhoneNumberAssociationName;
		AssociatedTimestamp?: Date;
	}

	export enum PhoneNumberAssociationName { AccountId = 0, UserId = 1, VoiceConnectorId = 2, VoiceConnectorGroupId = 3 }


	/**If the phone number action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages. */
	export interface PhoneNumberError {
		PhoneNumberId?: string;
		ErrorCode?: PhoneNumberErrorErrorCode;
		ErrorMessage?: string;
	}

	export enum PhoneNumberErrorErrorCode { BadRequest = 0, Conflict = 1, Forbidden = 2, NotFound = 3, PreconditionFailed = 4, ResourceLimitExceeded = 5, ServiceFailure = 6, AccessDenied = 7, ServiceUnavailable = 8, Throttled = 9, Unauthorized = 10, Unprocessable = 11, VoiceConnectorGroupAssociationsExist = 12, PhoneNumberAssociationsExist = 13 }

	export enum PhoneNumberOrderStatus { Processing = 0, Successful = 1, Failed = 2, Partial = 3 }

	export interface PutEventsConfigurationRequest {
		OutboundEventsHTTPSEndpoint?: string;
		LambdaFunctionArn?: string;
	}

	export interface PutRetentionSettingsRequest {

		/**The retention settings for an Amazon Chime Enterprise account that determine how long to retain items such as chat room messages and chat conversation messages. */
		RetentionSettings: RetentionSettings;
	}

	export interface PutVoiceConnectorLoggingConfigurationRequest {

		/**The logging configuration associated with an Amazon Chime Voice Connector. Specifies whether SIP message logs are enabled for sending to Amazon CloudWatch Logs. */
		LoggingConfiguration: LoggingConfiguration;
	}

	export interface PutVoiceConnectorOriginationRequest {

		/**Origination settings enable your SIP hosts to receive inbound calls using your Amazon Chime Voice Connector. */
		Origination: Origination;
	}

	export interface PutVoiceConnectorProxyRequest {
		DefaultSessionExpiryMinutes: number;
		PhoneNumberPoolCountries: Array<Country>;
		FallBackPhoneNumber?: string;
		Disabled?: boolean;
	}

	export interface PutVoiceConnectorStreamingConfigurationRequest {

		/**The streaming configuration associated with an Amazon Chime Voice Connector. Specifies whether media streaming is enabled for sending to Amazon Kinesis, and shows the retention period for the Amazon Kinesis data, in hours. */
		StreamingConfiguration: StreamingConfiguration;
	}

	export interface PutVoiceConnectorTerminationCredentialsRequest {
		Credentials?: Array<Credential>;
	}

	export interface PutVoiceConnectorTerminationRequest {

		/**Termination settings enable your SIP hosts to make outbound calls using your Amazon Chime Voice Connector. */
		Termination: Termination;
	}

	export enum RegistrationStatus { Unregistered = 0, Registered = 1, Suspended = 2 }


	/**The targeted recipient for a streaming configuration notification. */
	export interface StreamingNotificationTarget {
		NotificationTarget: StreamingNotificationTargetNotificationTarget;
	}

	export enum StreamingNotificationTargetNotificationTarget { EventBridge = 0, SNS = 1, SQS = 2 }

	export interface TagAttendeeRequest {
		Tags: Array<Tag>;
	}

	export interface TagMeetingRequest {
		Tags: Array<Tag>;
	}

	export interface TagResourceRequest {
		ResourceARN: string;
		Tags: Array<Tag>;
	}

	export interface UntagAttendeeRequest {
		TagKeys: Array<TagKey>;
	}

	export interface UntagMeetingRequest {
		TagKeys: Array<TagKey>;
	}

	export interface UntagResourceRequest {
		ResourceARN: string;
		TagKeys: Array<TagKey>;
	}

	export interface UpdateAccountRequest {
		Name?: string;
	}

	export interface UpdateAccountSettingsRequest {

		/**Settings related to the Amazon Chime account. This includes settings that start or stop remote control of shared screens, or start or stop the dial-out option in the Amazon Chime web application. For more information about these settings, see <a href="https://docs.aws.amazon.com/chime/latest/ag/policies.html">Use the Policies Page</a> in the <i>Amazon Chime Administration Guide</i>. */
		AccountSettings: AccountSettings;
	}

	export interface UpdateBotRequest {
		Disabled?: boolean;
	}

	export interface UpdateGlobalSettingsRequest {

		/**The Amazon Chime Business Calling settings for the administrator's AWS account. Includes any Amazon S3 buckets designated for storing call detail records. */
		BusinessCalling: BusinessCallingSettings;

		/**The Amazon Chime Voice Connector settings. Includes any Amazon S3 buckets designated for storing call detail records. */
		VoiceConnector: VoiceConnectorSettings;
	}

	export interface UpdatePhoneNumberRequest {
		ProductType?: UpdatePhoneNumberRequestProductType;
		CallingName?: string;
	}

	export enum UpdatePhoneNumberRequestProductType { BusinessCalling = 0, VoiceConnector = 1 }

	export interface UpdatePhoneNumberSettingsRequest {
		CallingName: string;
	}

	export interface UpdateProxySessionRequest {
		Capabilities: Array<Capability>;
		ExpiryMinutes?: number;
	}

	export interface UpdateRoomMembershipRequest {
		Role?: UpdateRoomMembershipRequestRole;
	}

	export enum UpdateRoomMembershipRequestRole { Administrator = 0, Member = 1 }

	export interface UpdateRoomRequest {
		Name?: string;
	}

	export interface UpdateUserRequest {
		LicenseType?: UpdateUserRequestLicenseType;
		UserType?: UpdateUserRequestUserType;

		/**The Alexa for Business metadata associated with an Amazon Chime user, used to integrate Alexa for Business with a device. */
		AlexaForBusinessMetadata?: AlexaForBusinessMetadata;
	}

	export enum UpdateUserRequestLicenseType { Basic = 0, Plus = 1, Pro = 2, ProTrial = 3 }

	export enum UpdateUserRequestUserType { PrivateUser = 0, SharedDevice = 1 }

	export interface UpdateUserSettingsRequest {

		/**Settings associated with an Amazon Chime user, including inbound and outbound calling and text messaging. */
		UserSettings: UserSettings;
	}

	export interface UpdateVoiceConnectorGroupRequest {
		Name: string;
		VoiceConnectorItems: Array<VoiceConnectorItem>;
	}

	export interface UpdateVoiceConnectorRequest {
		Name: string;
		RequireEncryption: boolean;
	}


	/**The list of errors returned when errors are encountered during the <a>BatchSuspendUser</a>, <a>BatchUnsuspendUser</a>, or <a>BatchUpdateUser</a> actions. This includes user IDs, error codes, and error messages. */
	export interface UserError {
		UserId?: string;
		ErrorCode?: UserErrorErrorCode;
		ErrorMessage?: string;
	}

	export enum UserErrorErrorCode { BadRequest = 0, Conflict = 1, Forbidden = 2, NotFound = 3, PreconditionFailed = 4, ResourceLimitExceeded = 5, ServiceFailure = 6, AccessDenied = 7, ServiceUnavailable = 8, Throttled = 9, Unauthorized = 10, Unprocessable = 11, VoiceConnectorGroupAssociationsExist = 12, PhoneNumberAssociationsExist = 13 }

	export class DemoClient {
		constructor(private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/') {
		}

		/**
		 * Associates a phone number with the specified Amazon Chime user.
		 * Post /accounts/{accountId}/users/{userId}#operation=associate-phone-number
		 * @param {string} accountId The Amazon Chime account ID.
		 * @param {string} userId The user ID.
		 * @return {AssociatePhoneNumberWithUserResponse} Success
		 */
		AssociatePhoneNumberWithUser(accountId: string, userId: string, operation: string, requestBody: AssociatePhoneNumberWithUserBody, headersHandler?: () => {[header: string]: string}): Promise<AssociatePhoneNumberWithUserResponse> {
			return fetch(this.baseUri + '/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '#operation=associate-phone-number&operation=' + (operation == null ? '' : encodeURIComponent(operation)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Associates phone numbers with the specified Amazon Chime Voice Connector.
		 * Post /voice-connectors/{voiceConnectorId}#operation=associate-phone-numbers
		 * @param {string} voiceConnectorId The Amazon Chime Voice Connector ID.
		 * @return {AssociatePhoneNumbersWithVoiceConnectorResponse} Success
		 */
		AssociatePhoneNumbersWithVoiceConnector(voiceConnectorId: string, operation: string, requestBody: AssociatePhoneNumbersWithVoiceConnectorBody, headersHandler?: () => {[header: string]: string}): Promise<AssociatePhoneNumbersWithVoiceConnectorResponse> {
			return fetch(this.baseUri + '/voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '#operation=associate-phone-numbers&operation=' + (operation == null ? '' : encodeURIComponent(operation)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Associates phone numbers with the specified Amazon Chime Voice Connector group.
		 * Post /voice-connector-groups/{voiceConnectorGroupId}#operation=associate-phone-numbers
		 * @param {string} voiceConnectorGroupId The Amazon Chime Voice Connector group ID.
		 * @return {AssociatePhoneNumbersWithVoiceConnectorGroupResponse} Success
		 */
		AssociatePhoneNumbersWithVoiceConnectorGroup(voiceConnectorGroupId: string, operation: string, requestBody: AssociatePhoneNumbersWithVoiceConnectorGroupBody, headersHandler?: () => {[header: string]: string}): Promise<AssociatePhoneNumbersWithVoiceConnectorGroupResponse> {
			return fetch(this.baseUri + '/voice-connector-groups/' + (voiceConnectorGroupId == null ? '' : encodeURIComponent(voiceConnectorGroupId)) + '#operation=associate-phone-numbers&operation=' + (operation == null ? '' : encodeURIComponent(operation)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Associates the specified sign-in delegate groups with the specified Amazon Chime account.
		 * Post /accounts/{accountId}#operation=associate-signin-delegate-groups
		 * @param {string} accountId The Amazon Chime account ID.
		 * @return {AssociateSigninDelegateGroupsWithAccountResponse} Success
		 */
		AssociateSigninDelegateGroupsWithAccount(accountId: string, operation: string, requestBody: AssociateSigninDelegateGroupsWithAccountBody, headersHandler?: () => {[header: string]: string}): Promise<AssociateSigninDelegateGroupsWithAccountResponse> {
			return fetch(this.baseUri + '/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '#operation=associate-signin-delegate-groups&operation=' + (operation == null ? '' : encodeURIComponent(operation)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Creates up to 100 new attendees for an active Amazon Chime SDK meeting. For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime Developer Guide</i>.
		 * Post /meetings/{meetingId}/attendees#operation=batch-create
		 * @param {string} meetingId The Amazon Chime SDK meeting ID.
		 * @return {void} 
		 */
		BatchCreateAttendee(meetingId: string, operation: string, requestBody: BatchCreateAttendeeBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/meetings/' + (meetingId == null ? '' : encodeURIComponent(meetingId)) + '/attendees#operation=batch-create&operation=' + (operation == null ? '' : encodeURIComponent(operation)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Adds up to 50 members to a chat room in an Amazon Chime Enterprise account. Members can be either users or bots. The member role designates whether the member is a chat room administrator or a general chat room member.
		 * Post /accounts/{accountId}/rooms/{roomId}/memberships#operation=batch-create
		 * @param {string} accountId The Amazon Chime account ID.
		 * @param {string} roomId The room ID.
		 * @return {void} 
		 */
		BatchCreateRoomMembership(accountId: string, roomId: string, operation: string, requestBody: BatchCreateRoomMembershipBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/rooms/' + (roomId == null ? '' : encodeURIComponent(roomId)) + '/memberships#operation=batch-create&operation=' + (operation == null ? '' : encodeURIComponent(operation)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * <p>Moves phone numbers into the <b>Deletion queue</b>. Phone numbers must be disassociated from any users or Amazon Chime Voice Connectors before they can be deleted.</p> <p>Phone numbers remain in the <b>Deletion queue</b> for 7 days before they are deleted permanently.</p>
		 * Post /phone-numbers#operation=batch-delete
		 * @return {BatchDeletePhoneNumberResponse} Success
		 */
		BatchDeletePhoneNumber(operation: string, requestBody: BatchDeletePhoneNumberBody, headersHandler?: () => {[header: string]: string}): Promise<BatchDeletePhoneNumberResponse> {
			return fetch(this.baseUri + '/phone-numbers#operation=batch-delete?operation=' + (operation == null ? '' : encodeURIComponent(operation)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Suspends up to 50 users from a <code>Team</code> or <code>EnterpriseLWA</code> Amazon Chime account. For more information about different account types, see <a href="https://docs.aws.amazon.com/chime/latest/ag/manage-chime-account.html">Managing Your Amazon Chime Accounts</a> in the <i>Amazon Chime Administration Guide</i>.</p> <p>Users suspended from a <code>Team</code> account are disassociated from the account, but they can continue to use Amazon Chime as free users. To remove the suspension from suspended <code>Team</code> account users, invite them to the <code>Team</code> account again. You can use the <a>InviteUsers</a> action to do so.</p> <p>Users suspended from an <code>EnterpriseLWA</code> account are immediately signed out of Amazon Chime and can no longer sign in. To remove the suspension from suspended <code>EnterpriseLWA</code> account users, use the <a>BatchUnsuspendUser</a> action. </p> <p>To sign out users without suspending them, use the <a>LogoutUser</a> action.</p>
		 * Post /accounts/{accountId}/users#operation=suspend
		 * @param {string} accountId The Amazon Chime account ID.
		 * @return {BatchSuspendUserResponse} Success
		 */
		BatchSuspendUser(accountId: string, operation: string, requestBody: BatchSuspendUserBody, headersHandler?: () => {[header: string]: string}): Promise<BatchSuspendUserResponse> {
			return fetch(this.baseUri + '/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/users#operation=suspend&operation=' + (operation == null ? '' : encodeURIComponent(operation)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Removes the suspension from up to 50 previously suspended users for the specified Amazon Chime <code>EnterpriseLWA</code> account. Only users on <code>EnterpriseLWA</code> accounts can be unsuspended using this action. For more information about different account types, see <a href="https://docs.aws.amazon.com/chime/latest/ag/manage-chime-account.html">Managing Your Amazon Chime Accounts</a> in the <i>Amazon Chime Administration Guide</i>.</p> <p>Previously suspended users who are unsuspended using this action are returned to <code>Registered</code> status. Users who are not previously suspended are ignored.</p>
		 * Post /accounts/{accountId}/users#operation=unsuspend
		 * @param {string} accountId The Amazon Chime account ID.
		 * @return {BatchUnsuspendUserResponse} Success
		 */
		BatchUnsuspendUser(accountId: string, operation: string, requestBody: BatchUnsuspendUserBody, headersHandler?: () => {[header: string]: string}): Promise<BatchUnsuspendUserResponse> {
			return fetch(this.baseUri + '/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/users#operation=unsuspend&operation=' + (operation == null ? '' : encodeURIComponent(operation)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Updates phone number product types or calling names. You can update one attribute at a time for each <code>UpdatePhoneNumberRequestItem</code>. For example, you can update either the product type or the calling name.</p> <p>For product types, choose from Amazon Chime Business Calling and Amazon Chime Voice Connector. For toll-free numbers, you must use the Amazon Chime Voice Connector product type.</p> <p>Updates to outbound calling names can take up to 72 hours to complete. Pending updates to outbound calling names must be complete before you can request another update.</p>
		 * Post /phone-numbers#operation=batch-update
		 * @return {BatchUpdatePhoneNumberResponse} Success
		 */
		BatchUpdatePhoneNumber(operation: string, requestBody: BatchUpdatePhoneNumberBody, headersHandler?: () => {[header: string]: string}): Promise<BatchUpdatePhoneNumberResponse> {
			return fetch(this.baseUri + '/phone-numbers#operation=batch-update?operation=' + (operation == null ? '' : encodeURIComponent(operation)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Updates user details within the <a>UpdateUserRequestItem</a> object for up to 20 users for the specified Amazon Chime account. Currently, only <code>LicenseType</code> updates are supported for this action.
		 * Post /accounts/{accountId}/users
		 * @param {string} accountId The Amazon Chime account ID.
		 * @return {BatchUpdateUserResponse} Success
		 */
		BatchUpdateUser(accountId: string, requestBody: BatchUpdateUserBody, headersHandler?: () => {[header: string]: string}): Promise<BatchUpdateUserResponse> {
			return fetch(this.baseUri + '/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/users', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Lists the users that belong to the specified Amazon Chime account. You can specify an email address to list only the user that the email address belongs to.
		 * Get /accounts/{accountId}/users
		 * @param {string} accountId The Amazon Chime account ID.
		 * @param {string} user_email Optional. The user email address used to filter results. Maximum 1.
		 * @param {UpdateUserRequestItemUserType} user_type The user type.
		 * @param {number} max_results The maximum number of results to return in a single call. Defaults to 100.
		 * @param {string} next_token The token to use to retrieve the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListUsersResponse} Success
		 */
		ListUsers(accountId: string, user_email: string, user_type: UpdateUserRequestItemUserType, max_results: number, next_token: string, MaxResults: string, NextToken: string, headersHandler?: () => {[header: string]: string}): Promise<ListUsersResponse> {
			return fetch(this.baseUri + '/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/users&user_email=' + (user_email == null ? '' : encodeURIComponent(user_email)) + '&user_type=' + user_type + '&max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Creates an Amazon Chime account under the administrator's AWS account. Only <code>Team</code> account types are currently supported for this action. For more information about different account types, see <a href="https://docs.aws.amazon.com/chime/latest/ag/manage-chime-account.html">Managing Your Amazon Chime Accounts</a> in the <i>Amazon Chime Administration Guide</i>.
		 * Post /accounts
		 * @return {void} 
		 */
		CreateAccount(requestBody: CreateAccountBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/accounts', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Lists the Amazon Chime accounts under the administrator's AWS account. You can filter accounts by account name prefix. To find out which Amazon Chime account a user belongs to, you can filter by the user's email address, which returns one account result.
		 * Get /accounts
		 * @param {string} name Amazon Chime account name prefix with which to filter results.
		 * @param {string} user_email User email address with which to filter results.
		 * @param {string} next_token The token to use to retrieve the next page of results.
		 * @param {number} max_results The maximum number of results to return in a single call. Defaults to 100.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAccountsResponse} Success
		 */
		ListAccounts(name: string, user_email: string, next_token: string, max_results: number, MaxResults: string, NextToken: string, headersHandler?: () => {[header: string]: string}): Promise<ListAccountsResponse> {
			return fetch(this.baseUri + '/accounts?name=' + (name == null ? '' : encodeURIComponent(name)) + '&user_email=' + (user_email == null ? '' : encodeURIComponent(user_email)) + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&max_results=' + max_results + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Creates a new attendee for an active Amazon Chime SDK meeting. For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime Developer Guide</i>.
		 * Post /meetings/{meetingId}/attendees
		 * @param {string} meetingId The Amazon Chime SDK meeting ID.
		 * @return {void} 
		 */
		CreateAttendee(meetingId: string, requestBody: CreateAttendeeBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/meetings/' + (meetingId == null ? '' : encodeURIComponent(meetingId)) + '/attendees', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Lists the attendees for the specified Amazon Chime SDK meeting. For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime Developer Guide</i>.
		 * Get /meetings/{meetingId}/attendees
		 * @param {string} meetingId The Amazon Chime SDK meeting ID.
		 * @param {string} next_token The token to use to retrieve the next page of results.
		 * @param {number} max_results The maximum number of results to return in a single call.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAttendeesResponse} Success
		 */
		ListAttendees(meetingId: string, next_token: string, max_results: number, MaxResults: string, NextToken: string, headersHandler?: () => {[header: string]: string}): Promise<ListAttendeesResponse> {
			return fetch(this.baseUri + '/meetings/' + (meetingId == null ? '' : encodeURIComponent(meetingId)) + '/attendees&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&max_results=' + max_results + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Creates a bot for an Amazon Chime Enterprise account.
		 * Post /accounts/{accountId}/bots
		 * @param {string} accountId The Amazon Chime account ID.
		 * @return {void} 
		 */
		CreateBot(accountId: string, requestBody: CreateBotBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/bots', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Lists the bots associated with the administrator's Amazon Chime Enterprise account ID.
		 * Get /accounts/{accountId}/bots
		 * @param {string} accountId The Amazon Chime account ID.
		 * @param {number} max_results The maximum number of results to return in a single call. The default is 10.
		 * @param {string} next_token The token to use to retrieve the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListBotsResponse} Success
		 */
		ListBots(accountId: string, max_results: number, next_token: string, MaxResults: string, NextToken: string, headersHandler?: () => {[header: string]: string}): Promise<ListBotsResponse> {
			return fetch(this.baseUri + '/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/bots&max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Creates a new Amazon Chime SDK meeting in the specified media Region with no initial attendees. For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime Developer Guide</i>.
		 * Post /meetings
		 * @return {void} 
		 */
		CreateMeeting(requestBody: CreateMeetingBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/meetings', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Lists up to 100 active Amazon Chime SDK meetings. For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime Developer Guide</i>.
		 * Get /meetings
		 * @param {string} next_token The token to use to retrieve the next page of results.
		 * @param {number} max_results The maximum number of results to return in a single call.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListMeetingsResponse} Success
		 */
		ListMeetings(next_token: string, max_results: number, MaxResults: string, NextToken: string, headersHandler?: () => {[header: string]: string}): Promise<ListMeetingsResponse> {
			return fetch(this.baseUri + '/meetings?next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&max_results=' + max_results + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Creates an order for phone numbers to be provisioned. Choose from Amazon Chime Business Calling and Amazon Chime Voice Connector product types. For toll-free numbers, you must use the Amazon Chime Voice Connector product type.
		 * Post /phone-number-orders
		 * @return {void} 
		 */
		CreatePhoneNumberOrder(requestBody: CreatePhoneNumberOrderBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/phone-number-orders', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Lists the phone number orders for the administrator's Amazon Chime account.
		 * Get /phone-number-orders
		 * @param {string} next_token The token to use to retrieve the next page of results.
		 * @param {number} max_results The maximum number of results to return in a single call.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListPhoneNumberOrdersResponse} Success
		 */
		ListPhoneNumberOrders(next_token: string, max_results: number, MaxResults: string, NextToken: string, headersHandler?: () => {[header: string]: string}): Promise<ListPhoneNumberOrdersResponse> {
			return fetch(this.baseUri + '/phone-number-orders?next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&max_results=' + max_results + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Creates a proxy session on the specified Amazon Chime Voice Connector for the specified participant phone numbers.
		 * Post /voice-connectors/{voiceConnectorId}/proxy-sessions
		 * @param {string} voiceConnectorId The Amazon Chime voice connector ID.
		 * @return {void} 
		 */
		CreateProxySession(voiceConnectorId: string, requestBody: CreateProxySessionBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/proxy-sessions', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Lists the proxy sessions for the specified Amazon Chime Voice Connector.
		 * Get /voice-connectors/{voiceConnectorId}/proxy-sessions
		 * @param {string} voiceConnectorId The Amazon Chime voice connector ID.
		 * @param {ProxySessionStatus} status The proxy session status.
		 * @param {string} next_token The token to use to retrieve the next page of results.
		 * @param {number} max_results The maximum number of results to return in a single call.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListProxySessionsResponse} Success
		 */
		ListProxySessions(voiceConnectorId: string, status: ProxySessionStatus, next_token: string, max_results: number, MaxResults: string, NextToken: string, headersHandler?: () => {[header: string]: string}): Promise<ListProxySessionsResponse> {
			return fetch(this.baseUri + '/voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/proxy-sessions&status=' + status + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&max_results=' + max_results + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Creates a chat room for the specified Amazon Chime Enterprise account.
		 * Post /accounts/{accountId}/rooms
		 * @param {string} accountId The Amazon Chime account ID.
		 * @return {void} 
		 */
		CreateRoom(accountId: string, requestBody: CreateRoomBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/rooms', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Lists the room details for the specified Amazon Chime Enterprise account. Optionally, filter the results by a member ID (user ID or bot ID) to see a list of rooms that the member belongs to.
		 * Get /accounts/{accountId}/rooms
		 * @param {string} accountId The Amazon Chime account ID.
		 * @param {string} member_id The member ID (user ID or bot ID).
		 * @param {number} max_results The maximum number of results to return in a single call.
		 * @param {string} next_token The token to use to retrieve the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListRoomsResponse} Success
		 */
		ListRooms(accountId: string, member_id: string, max_results: number, next_token: string, MaxResults: string, NextToken: string, headersHandler?: () => {[header: string]: string}): Promise<ListRoomsResponse> {
			return fetch(this.baseUri + '/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/rooms&member_id=' + (member_id == null ? '' : encodeURIComponent(member_id)) + '&max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Adds a member to a chat room in an Amazon Chime Enterprise account. A member can be either a user or a bot. The member role designates whether the member is a chat room administrator or a general chat room member.
		 * Post /accounts/{accountId}/rooms/{roomId}/memberships
		 * @param {string} accountId The Amazon Chime account ID.
		 * @param {string} roomId The room ID.
		 * @return {void} 
		 */
		CreateRoomMembership(accountId: string, roomId: string, requestBody: CreateRoomMembershipBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/rooms/' + (roomId == null ? '' : encodeURIComponent(roomId)) + '/memberships', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Lists the membership details for the specified room in an Amazon Chime Enterprise account, such as the members' IDs, email addresses, and names.
		 * Get /accounts/{accountId}/rooms/{roomId}/memberships
		 * @param {string} accountId The Amazon Chime account ID.
		 * @param {string} roomId The room ID.
		 * @param {number} max_results The maximum number of results to return in a single call.
		 * @param {string} next_token The token to use to retrieve the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListRoomMembershipsResponse} Success
		 */
		ListRoomMemberships(accountId: string, roomId: string, max_results: number, next_token: string, MaxResults: string, NextToken: string, headersHandler?: () => {[header: string]: string}): Promise<ListRoomMembershipsResponse> {
			return fetch(this.baseUri + '/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/rooms/' + (roomId == null ? '' : encodeURIComponent(roomId)) + '/memberships&max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Creates a user under the specified Amazon Chime account.
		 * Post /accounts/{accountId}/users#operation=create
		 * @param {string} accountId The Amazon Chime account ID.
		 * @return {void} 
		 */
		CreateUser(accountId: string, operation: string, requestBody: CreateUserBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/users#operation=create&operation=' + (operation == null ? '' : encodeURIComponent(operation)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * <p>Creates an Amazon Chime Voice Connector under the administrator's AWS account. You can choose to create an Amazon Chime Voice Connector in a specific AWS Region.</p> <p>Enabling <a>CreateVoiceConnectorRequest$RequireEncryption</a> configures your Amazon Chime Voice Connector to use TLS transport for SIP signaling and Secure RTP (SRTP) for media. Inbound calls use TLS transport, and unencrypted outbound calls are blocked.</p>
		 * Post /voice-connectors
		 * @return {void} 
		 */
		CreateVoiceConnector(requestBody: CreateVoiceConnectorBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/voice-connectors', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Lists the Amazon Chime Voice Connectors for the administrator's AWS account.
		 * Get /voice-connectors
		 * @param {string} next_token The token to use to retrieve the next page of results.
		 * @param {number} max_results The maximum number of results to return in a single call.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListVoiceConnectorsResponse} Success
		 */
		ListVoiceConnectors(next_token: string, max_results: number, MaxResults: string, NextToken: string, headersHandler?: () => {[header: string]: string}): Promise<ListVoiceConnectorsResponse> {
			return fetch(this.baseUri + '/voice-connectors?next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&max_results=' + max_results + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * <p>Creates an Amazon Chime Voice Connector group under the administrator's AWS account. You can associate Amazon Chime Voice Connectors with the Amazon Chime Voice Connector group by including <code>VoiceConnectorItems</code> in the request.</p> <p>You can include Amazon Chime Voice Connectors from different AWS Regions in your group. This creates a fault tolerant mechanism for fallback in case of availability events.</p>
		 * Post /voice-connector-groups
		 * @return {void} 
		 */
		CreateVoiceConnectorGroup(requestBody: CreateVoiceConnectorGroupBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/voice-connector-groups', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Lists the Amazon Chime Voice Connector groups for the administrator's AWS account.
		 * Get /voice-connector-groups
		 * @param {string} next_token The token to use to retrieve the next page of results.
		 * @param {number} max_results The maximum number of results to return in a single call.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListVoiceConnectorGroupsResponse} Success
		 */
		ListVoiceConnectorGroups(next_token: string, max_results: number, MaxResults: string, NextToken: string, headersHandler?: () => {[header: string]: string}): Promise<ListVoiceConnectorGroupsResponse> {
			return fetch(this.baseUri + '/voice-connector-groups?next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&max_results=' + max_results + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * <p>Deletes the specified Amazon Chime account. You must suspend all users before deleting a <code>Team</code> account. You can use the <a>BatchSuspendUser</a> action to do so.</p> <p>For <code>EnterpriseLWA</code> and <code>EnterpriseAD</code> accounts, you must release the claimed domains for your Amazon Chime account before deletion. As soon as you release the domain, all users under that account are suspended.</p> <p>Deleted accounts appear in your <code>Disabled</code> accounts list for 90 days. To restore a deleted account from your <code>Disabled</code> accounts list, you must contact AWS Support.</p> <p>After 90 days, deleted accounts are permanently removed from your <code>Disabled</code> accounts list.</p>
		 * Delete /accounts/{accountId}
		 * @param {string} accountId The Amazon Chime account ID.
		 * @return {void} 
		 */
		DeleteAccount(accountId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieves details for the specified Amazon Chime account, such as account type and supported licenses.
		 * Get /accounts/{accountId}
		 * @param {string} accountId The Amazon Chime account ID.
		 * @return {GetAccountResponse} Success
		 */
		GetAccount(accountId: string, headersHandler?: () => {[header: string]: string}): Promise<GetAccountResponse> {
			return fetch(this.baseUri + '/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Updates account details for the specified Amazon Chime account. Currently, only account name updates are supported for this action.
		 * Post /accounts/{accountId}
		 * @param {string} accountId The Amazon Chime account ID.
		 * @return {UpdateAccountResponse} Success
		 */
		UpdateAccount(accountId: string, requestBody: UpdateAccountBody, headersHandler?: () => {[header: string]: string}): Promise<UpdateAccountResponse> {
			return fetch(this.baseUri + '/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Deletes an attendee from the specified Amazon Chime SDK meeting and deletes their <code>JoinToken</code>. Attendees are automatically deleted when a Amazon Chime SDK meeting is deleted. For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime Developer Guide</i>.
		 * Delete /meetings/{meetingId}/attendees/{attendeeId}
		 * @param {string} meetingId The Amazon Chime SDK meeting ID.
		 * @param {string} attendeeId The Amazon Chime SDK attendee ID.
		 * @return {void} 
		 */
		DeleteAttendee(meetingId: string, attendeeId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/meetings/' + (meetingId == null ? '' : encodeURIComponent(meetingId)) + '/attendees/' + (attendeeId == null ? '' : encodeURIComponent(attendeeId)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets the Amazon Chime SDK attendee details for a specified meeting ID and attendee ID. For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime Developer Guide</i>.
		 * Get /meetings/{meetingId}/attendees/{attendeeId}
		 * @param {string} meetingId The Amazon Chime SDK meeting ID.
		 * @param {string} attendeeId The Amazon Chime SDK attendee ID.
		 * @return {GetAttendeeResponse} Success
		 */
		GetAttendee(meetingId: string, attendeeId: string, headersHandler?: () => {[header: string]: string}): Promise<GetAttendeeResponse> {
			return fetch(this.baseUri + '/meetings/' + (meetingId == null ? '' : encodeURIComponent(meetingId)) + '/attendees/' + (attendeeId == null ? '' : encodeURIComponent(attendeeId)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Deletes the events configuration that allows a bot to receive outgoing events.
		 * Delete /accounts/{accountId}/bots/{botId}/events-configuration
		 * @param {string} accountId The Amazon Chime account ID.
		 * @param {string} botId The bot ID.
		 * @return {void} 
		 */
		DeleteEventsConfiguration(accountId: string, botId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '/events-configuration', { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets details for an events configuration that allows a bot to receive outgoing events, such as an HTTPS endpoint or Lambda function ARN.
		 * Get /accounts/{accountId}/bots/{botId}/events-configuration
		 * @param {string} accountId The Amazon Chime account ID.
		 * @param {string} botId The bot ID.
		 * @return {GetEventsConfigurationResponse} Success
		 */
		GetEventsConfiguration(accountId: string, botId: string, headersHandler?: () => {[header: string]: string}): Promise<GetEventsConfigurationResponse> {
			return fetch(this.baseUri + '/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '/events-configuration', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Creates an events configuration that allows a bot to receive outgoing events sent by Amazon Chime. Choose either an HTTPS endpoint or a Lambda function ARN. For more information, see <a>Bot</a>.
		 * Put /accounts/{accountId}/bots/{botId}/events-configuration
		 * @param {string} accountId The Amazon Chime account ID.
		 * @param {string} botId The bot ID.
		 * @return {void} 
		 */
		PutEventsConfiguration(accountId: string, botId: string, requestBody: PutEventsConfigurationBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '/events-configuration', { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Deletes the specified Amazon Chime SDK meeting. When a meeting is deleted, its attendees are also deleted and clients can no longer join it. For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime Developer Guide</i>.
		 * Delete /meetings/{meetingId}
		 * @param {string} meetingId The Amazon Chime SDK meeting ID.
		 * @return {void} 
		 */
		DeleteMeeting(meetingId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/meetings/' + (meetingId == null ? '' : encodeURIComponent(meetingId)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets the Amazon Chime SDK meeting details for the specified meeting ID. For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime Developer Guide</i>.
		 * Get /meetings/{meetingId}
		 * @param {string} meetingId The Amazon Chime SDK meeting ID.
		 * @return {GetMeetingResponse} Success
		 */
		GetMeeting(meetingId: string, headersHandler?: () => {[header: string]: string}): Promise<GetMeetingResponse> {
			return fetch(this.baseUri + '/meetings/' + (meetingId == null ? '' : encodeURIComponent(meetingId)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * <p>Moves the specified phone number into the <b>Deletion queue</b>. A phone number must be disassociated from any users or Amazon Chime Voice Connectors before it can be deleted.</p> <p>Deleted phone numbers remain in the <b>Deletion queue</b> for 7 days before they are deleted permanently.</p>
		 * Delete /phone-numbers/{phoneNumberId}
		 * @param {string} phoneNumberId The phone number ID.
		 * @return {void} 
		 */
		DeletePhoneNumber(phoneNumberId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/phone-numbers/' + (phoneNumberId == null ? '' : encodeURIComponent(phoneNumberId)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieves details for the specified phone number ID, such as associations, capabilities, and product type.
		 * Get /phone-numbers/{phoneNumberId}
		 * @param {string} phoneNumberId The phone number ID.
		 * @return {GetPhoneNumberResponse} Success
		 */
		GetPhoneNumber(phoneNumberId: string, headersHandler?: () => {[header: string]: string}): Promise<GetPhoneNumberResponse> {
			return fetch(this.baseUri + '/phone-numbers/' + (phoneNumberId == null ? '' : encodeURIComponent(phoneNumberId)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * <p>Updates phone number details, such as product type or calling name, for the specified phone number ID. You can update one phone number detail at a time. For example, you can update either the product type or the calling name in one action.</p> <p>For toll-free numbers, you must use the Amazon Chime Voice Connector product type.</p> <p>Updates to outbound calling names can take up to 72 hours to complete. Pending updates to outbound calling names must be complete before you can request another update.</p>
		 * Post /phone-numbers/{phoneNumberId}
		 * @param {string} phoneNumberId The phone number ID.
		 * @return {UpdatePhoneNumberResponse} Success
		 */
		UpdatePhoneNumber(phoneNumberId: string, requestBody: UpdatePhoneNumberBody, headersHandler?: () => {[header: string]: string}): Promise<UpdatePhoneNumberResponse> {
			return fetch(this.baseUri + '/phone-numbers/' + (phoneNumberId == null ? '' : encodeURIComponent(phoneNumberId)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Deletes the specified proxy session from the specified Amazon Chime Voice Connector.
		 * Delete /voice-connectors/{voiceConnectorId}/proxy-sessions/{proxySessionId}
		 * @param {string} voiceConnectorId The Amazon Chime voice connector ID.
		 * @param {string} proxySessionId The proxy session ID.
		 * @return {void} 
		 */
		DeleteProxySession(voiceConnectorId: string, proxySessionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/proxy-sessions/' + (proxySessionId == null ? '' : encodeURIComponent(proxySessionId)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets the specified proxy session details for the specified Amazon Chime Voice Connector.
		 * Get /voice-connectors/{voiceConnectorId}/proxy-sessions/{proxySessionId}
		 * @param {string} voiceConnectorId The Amazon Chime voice connector ID.
		 * @param {string} proxySessionId The proxy session ID.
		 * @return {GetProxySessionResponse} Success
		 */
		GetProxySession(voiceConnectorId: string, proxySessionId: string, headersHandler?: () => {[header: string]: string}): Promise<GetProxySessionResponse> {
			return fetch(this.baseUri + '/voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/proxy-sessions/' + (proxySessionId == null ? '' : encodeURIComponent(proxySessionId)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Updates the specified proxy session details, such as voice or SMS capabilities.
		 * Post /voice-connectors/{voiceConnectorId}/proxy-sessions/{proxySessionId}
		 * @param {string} voiceConnectorId The Amazon Chime voice connector ID.
		 * @param {string} proxySessionId The proxy session ID.
		 * @return {void} 
		 */
		UpdateProxySession(voiceConnectorId: string, proxySessionId: string, requestBody: UpdateProxySessionBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/proxy-sessions/' + (proxySessionId == null ? '' : encodeURIComponent(proxySessionId)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Deletes a chat room in an Amazon Chime Enterprise account.
		 * Delete /accounts/{accountId}/rooms/{roomId}
		 * @param {string} accountId The Amazon Chime account ID.
		 * @param {string} roomId The chat room ID.
		 * @return {void} 
		 */
		DeleteRoom(accountId: string, roomId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/rooms/' + (roomId == null ? '' : encodeURIComponent(roomId)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieves room details, such as the room name, for a room in an Amazon Chime Enterprise account.
		 * Get /accounts/{accountId}/rooms/{roomId}
		 * @param {string} accountId The Amazon Chime account ID.
		 * @param {string} roomId The room ID.
		 * @return {GetRoomResponse} Success
		 */
		GetRoom(accountId: string, roomId: string, headersHandler?: () => {[header: string]: string}): Promise<GetRoomResponse> {
			return fetch(this.baseUri + '/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/rooms/' + (roomId == null ? '' : encodeURIComponent(roomId)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Updates room details, such as the room name, for a room in an Amazon Chime Enterprise account.
		 * Post /accounts/{accountId}/rooms/{roomId}
		 * @param {string} accountId The Amazon Chime account ID.
		 * @param {string} roomId The room ID.
		 * @return {UpdateRoomResponse} Success
		 */
		UpdateRoom(accountId: string, roomId: string, requestBody: UpdateRoomBody, headersHandler?: () => {[header: string]: string}): Promise<UpdateRoomResponse> {
			return fetch(this.baseUri + '/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/rooms/' + (roomId == null ? '' : encodeURIComponent(roomId)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Removes a member from a chat room in an Amazon Chime Enterprise account.
		 * Delete /accounts/{accountId}/rooms/{roomId}/memberships/{memberId}
		 * @param {string} accountId The Amazon Chime account ID.
		 * @param {string} roomId The room ID.
		 * @param {string} memberId The member ID (user ID or bot ID).
		 * @return {void} 
		 */
		DeleteRoomMembership(accountId: string, roomId: string, memberId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/rooms/' + (roomId == null ? '' : encodeURIComponent(roomId)) + '/memberships/' + (memberId == null ? '' : encodeURIComponent(memberId)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Updates room membership details, such as the member role, for a room in an Amazon Chime Enterprise account. The member role designates whether the member is a chat room administrator or a general chat room member. The member role can be updated only for user IDs.
		 * Post /accounts/{accountId}/rooms/{roomId}/memberships/{memberId}
		 * @param {string} accountId The Amazon Chime account ID.
		 * @param {string} roomId The room ID.
		 * @param {string} memberId The member ID.
		 * @return {UpdateRoomMembershipResponse} Success
		 */
		UpdateRoomMembership(accountId: string, roomId: string, memberId: string, requestBody: UpdateRoomMembershipBody, headersHandler?: () => {[header: string]: string}): Promise<UpdateRoomMembershipResponse> {
			return fetch(this.baseUri + '/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/rooms/' + (roomId == null ? '' : encodeURIComponent(roomId)) + '/memberships/' + (memberId == null ? '' : encodeURIComponent(memberId)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Deletes the specified Amazon Chime Voice Connector. Any phone numbers associated with the Amazon Chime Voice Connector must be disassociated from it before it can be deleted.
		 * Delete /voice-connectors/{voiceConnectorId}
		 * @param {string} voiceConnectorId The Amazon Chime Voice Connector ID.
		 * @return {void} 
		 */
		DeleteVoiceConnector(voiceConnectorId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieves details for the specified Amazon Chime Voice Connector, such as timestamps, name, outbound host, and encryption requirements.
		 * Get /voice-connectors/{voiceConnectorId}
		 * @param {string} voiceConnectorId The Amazon Chime Voice Connector ID.
		 * @return {GetVoiceConnectorResponse} Success
		 */
		GetVoiceConnector(voiceConnectorId: string, headersHandler?: () => {[header: string]: string}): Promise<GetVoiceConnectorResponse> {
			return fetch(this.baseUri + '/voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Updates details for the specified Amazon Chime Voice Connector.
		 * Put /voice-connectors/{voiceConnectorId}
		 * @param {string} voiceConnectorId The Amazon Chime Voice Connector ID.
		 * @return {UpdateVoiceConnectorResponse} Success
		 */
		UpdateVoiceConnector(voiceConnectorId: string, requestBody: UpdateVoiceConnectorBody, headersHandler?: () => {[header: string]: string}): Promise<UpdateVoiceConnectorResponse> {
			return fetch(this.baseUri + '/voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)), { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Deletes the specified Amazon Chime Voice Connector group. Any <code>VoiceConnectorItems</code> and phone numbers associated with the group must be removed before it can be deleted.
		 * Delete /voice-connector-groups/{voiceConnectorGroupId}
		 * @param {string} voiceConnectorGroupId The Amazon Chime Voice Connector group ID.
		 * @return {void} 
		 */
		DeleteVoiceConnectorGroup(voiceConnectorGroupId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/voice-connector-groups/' + (voiceConnectorGroupId == null ? '' : encodeURIComponent(voiceConnectorGroupId)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieves details for the specified Amazon Chime Voice Connector group, such as timestamps, name, and associated <code>VoiceConnectorItems</code>.
		 * Get /voice-connector-groups/{voiceConnectorGroupId}
		 * @param {string} voiceConnectorGroupId The Amazon Chime Voice Connector group ID.
		 * @return {GetVoiceConnectorGroupResponse} Success
		 */
		GetVoiceConnectorGroup(voiceConnectorGroupId: string, headersHandler?: () => {[header: string]: string}): Promise<GetVoiceConnectorGroupResponse> {
			return fetch(this.baseUri + '/voice-connector-groups/' + (voiceConnectorGroupId == null ? '' : encodeURIComponent(voiceConnectorGroupId)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Updates details for the specified Amazon Chime Voice Connector group, such as the name and Amazon Chime Voice Connector priority ranking.
		 * Put /voice-connector-groups/{voiceConnectorGroupId}
		 * @param {string} voiceConnectorGroupId The Amazon Chime Voice Connector group ID.
		 * @return {void} 
		 */
		UpdateVoiceConnectorGroup(voiceConnectorGroupId: string, requestBody: UpdateVoiceConnectorGroupBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/voice-connector-groups/' + (voiceConnectorGroupId == null ? '' : encodeURIComponent(voiceConnectorGroupId)), { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Deletes the origination settings for the specified Amazon Chime Voice Connector.
		 * Delete /voice-connectors/{voiceConnectorId}/origination
		 * @param {string} voiceConnectorId The Amazon Chime Voice Connector ID.
		 * @return {void} 
		 */
		DeleteVoiceConnectorOrigination(voiceConnectorId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/origination', { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieves origination setting details for the specified Amazon Chime Voice Connector.
		 * Get /voice-connectors/{voiceConnectorId}/origination
		 * @param {string} voiceConnectorId The Amazon Chime Voice Connector ID.
		 * @return {GetVoiceConnectorOriginationResponse} Success
		 */
		GetVoiceConnectorOrigination(voiceConnectorId: string, headersHandler?: () => {[header: string]: string}): Promise<GetVoiceConnectorOriginationResponse> {
			return fetch(this.baseUri + '/voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/origination', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Adds origination settings for the specified Amazon Chime Voice Connector.
		 * Put /voice-connectors/{voiceConnectorId}/origination
		 * @param {string} voiceConnectorId The Amazon Chime Voice Connector ID.
		 * @return {PutVoiceConnectorOriginationResponse} Success
		 */
		PutVoiceConnectorOrigination(voiceConnectorId: string, requestBody: PutVoiceConnectorOriginationBody, headersHandler?: () => {[header: string]: string}): Promise<PutVoiceConnectorOriginationResponse> {
			return fetch(this.baseUri + '/voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/origination', { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Deletes the proxy configuration from the specified Amazon Chime Voice Connector.
		 * Delete /voice-connectors/{voiceConnectorId}/programmable-numbers/proxy
		 * @param {string} voiceConnectorId The Amazon Chime Voice Connector ID.
		 * @return {void} 
		 */
		DeleteVoiceConnectorProxy(voiceConnectorId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/programmable-numbers/proxy', { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets the proxy configuration details for the specified Amazon Chime Voice Connector.
		 * Get /voice-connectors/{voiceConnectorId}/programmable-numbers/proxy
		 * @param {string} voiceConnectorId The Amazon Chime voice connector ID.
		 * @return {GetVoiceConnectorProxyResponse} Success
		 */
		GetVoiceConnectorProxy(voiceConnectorId: string, headersHandler?: () => {[header: string]: string}): Promise<GetVoiceConnectorProxyResponse> {
			return fetch(this.baseUri + '/voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/programmable-numbers/proxy', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Puts the specified proxy configuration to the specified Amazon Chime Voice Connector.
		 * Put /voice-connectors/{voiceConnectorId}/programmable-numbers/proxy
		 * @param {string} voiceConnectorId The Amazon Chime voice connector ID.
		 * @return {PutVoiceConnectorProxyResponse} Success
		 */
		PutVoiceConnectorProxy(voiceConnectorId: string, requestBody: PutVoiceConnectorProxyBody, headersHandler?: () => {[header: string]: string}): Promise<PutVoiceConnectorProxyResponse> {
			return fetch(this.baseUri + '/voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/programmable-numbers/proxy', { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Deletes the streaming configuration for the specified Amazon Chime Voice Connector.
		 * Delete /voice-connectors/{voiceConnectorId}/streaming-configuration
		 * @param {string} voiceConnectorId The Amazon Chime Voice Connector ID.
		 * @return {void} 
		 */
		DeleteVoiceConnectorStreamingConfiguration(voiceConnectorId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/streaming-configuration', { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieves the streaming configuration details for the specified Amazon Chime Voice Connector. Shows whether media streaming is enabled for sending to Amazon Kinesis. It also shows the retention period, in hours, for the Amazon Kinesis data.
		 * Get /voice-connectors/{voiceConnectorId}/streaming-configuration
		 * @param {string} voiceConnectorId The Amazon Chime Voice Connector ID.
		 * @return {GetVoiceConnectorStreamingConfigurationResponse} Success
		 */
		GetVoiceConnectorStreamingConfiguration(voiceConnectorId: string, headersHandler?: () => {[header: string]: string}): Promise<GetVoiceConnectorStreamingConfigurationResponse> {
			return fetch(this.baseUri + '/voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/streaming-configuration', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Adds a streaming configuration for the specified Amazon Chime Voice Connector. The streaming configuration specifies whether media streaming is enabled for sending to Amazon Kinesis. It also sets the retention period, in hours, for the Amazon Kinesis data.
		 * Put /voice-connectors/{voiceConnectorId}/streaming-configuration
		 * @param {string} voiceConnectorId The Amazon Chime Voice Connector ID.
		 * @return {PutVoiceConnectorStreamingConfigurationResponse} Success
		 */
		PutVoiceConnectorStreamingConfiguration(voiceConnectorId: string, requestBody: PutVoiceConnectorStreamingConfigurationBody, headersHandler?: () => {[header: string]: string}): Promise<PutVoiceConnectorStreamingConfigurationResponse> {
			return fetch(this.baseUri + '/voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/streaming-configuration', { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Deletes the termination settings for the specified Amazon Chime Voice Connector.
		 * Delete /voice-connectors/{voiceConnectorId}/termination
		 * @param {string} voiceConnectorId The Amazon Chime Voice Connector ID.
		 * @return {void} 
		 */
		DeleteVoiceConnectorTermination(voiceConnectorId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/termination', { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieves termination setting details for the specified Amazon Chime Voice Connector.
		 * Get /voice-connectors/{voiceConnectorId}/termination
		 * @param {string} voiceConnectorId The Amazon Chime Voice Connector ID.
		 * @return {GetVoiceConnectorTerminationResponse} Success
		 */
		GetVoiceConnectorTermination(voiceConnectorId: string, headersHandler?: () => {[header: string]: string}): Promise<GetVoiceConnectorTerminationResponse> {
			return fetch(this.baseUri + '/voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/termination', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Adds termination settings for the specified Amazon Chime Voice Connector.
		 * Put /voice-connectors/{voiceConnectorId}/termination
		 * @param {string} voiceConnectorId The Amazon Chime Voice Connector ID.
		 * @return {PutVoiceConnectorTerminationResponse} Success
		 */
		PutVoiceConnectorTermination(voiceConnectorId: string, requestBody: PutVoiceConnectorTerminationBody, headersHandler?: () => {[header: string]: string}): Promise<PutVoiceConnectorTerminationResponse> {
			return fetch(this.baseUri + '/voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/termination', { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Deletes the specified SIP credentials used by your equipment to authenticate during call termination.
		 * Post /voice-connectors/{voiceConnectorId}/termination/credentials#operation=delete
		 * @param {string} voiceConnectorId The Amazon Chime Voice Connector ID.
		 * @return {void} 
		 */
		DeleteVoiceConnectorTerminationCredentials(voiceConnectorId: string, operation: string, requestBody: DeleteVoiceConnectorTerminationCredentialsBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/termination/credentials#operation=delete&operation=' + (operation == null ? '' : encodeURIComponent(operation)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Disassociates the primary provisioned phone number from the specified Amazon Chime user.
		 * Post /accounts/{accountId}/users/{userId}#operation=disassociate-phone-number
		 * @param {string} accountId The Amazon Chime account ID.
		 * @param {string} userId The user ID.
		 * @return {DisassociatePhoneNumberFromUserResponse} Success
		 */
		DisassociatePhoneNumberFromUser(accountId: string, userId: string, operation: string, headersHandler?: () => {[header: string]: string}): Promise<DisassociatePhoneNumberFromUserResponse> {
			return fetch(this.baseUri + '/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '#operation=disassociate-phone-number&operation=' + (operation == null ? '' : encodeURIComponent(operation)), { method: 'post', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Disassociates the specified phone numbers from the specified Amazon Chime Voice Connector.
		 * Post /voice-connectors/{voiceConnectorId}#operation=disassociate-phone-numbers
		 * @param {string} voiceConnectorId The Amazon Chime Voice Connector ID.
		 * @return {DisassociatePhoneNumbersFromVoiceConnectorResponse} Success
		 */
		DisassociatePhoneNumbersFromVoiceConnector(voiceConnectorId: string, operation: string, requestBody: DisassociatePhoneNumbersFromVoiceConnectorBody, headersHandler?: () => {[header: string]: string}): Promise<DisassociatePhoneNumbersFromVoiceConnectorResponse> {
			return fetch(this.baseUri + '/voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '#operation=disassociate-phone-numbers&operation=' + (operation == null ? '' : encodeURIComponent(operation)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Disassociates the specified phone numbers from the specified Amazon Chime Voice Connector group.
		 * Post /voice-connector-groups/{voiceConnectorGroupId}#operation=disassociate-phone-numbers
		 * @param {string} voiceConnectorGroupId The Amazon Chime Voice Connector group ID.
		 * @return {DisassociatePhoneNumbersFromVoiceConnectorGroupResponse} Success
		 */
		DisassociatePhoneNumbersFromVoiceConnectorGroup(voiceConnectorGroupId: string, operation: string, requestBody: DisassociatePhoneNumbersFromVoiceConnectorGroupBody, headersHandler?: () => {[header: string]: string}): Promise<DisassociatePhoneNumbersFromVoiceConnectorGroupResponse> {
			return fetch(this.baseUri + '/voice-connector-groups/' + (voiceConnectorGroupId == null ? '' : encodeURIComponent(voiceConnectorGroupId)) + '#operation=disassociate-phone-numbers&operation=' + (operation == null ? '' : encodeURIComponent(operation)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Disassociates the specified sign-in delegate groups from the specified Amazon Chime account.
		 * Post /accounts/{accountId}#operation=disassociate-signin-delegate-groups
		 * @param {string} accountId The Amazon Chime account ID.
		 * @return {DisassociateSigninDelegateGroupsFromAccountResponse} Success
		 */
		DisassociateSigninDelegateGroupsFromAccount(accountId: string, operation: string, requestBody: DisassociateSigninDelegateGroupsFromAccountBody, headersHandler?: () => {[header: string]: string}): Promise<DisassociateSigninDelegateGroupsFromAccountResponse> {
			return fetch(this.baseUri + '/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '#operation=disassociate-signin-delegate-groups&operation=' + (operation == null ? '' : encodeURIComponent(operation)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Retrieves account settings for the specified Amazon Chime account ID, such as remote control and dial out settings. For more information about these settings, see <a href="https://docs.aws.amazon.com/chime/latest/ag/policies.html">Use the Policies Page</a> in the <i>Amazon Chime Administration Guide</i>.
		 * Get /accounts/{accountId}/settings
		 * @param {string} accountId The Amazon Chime account ID.
		 * @return {GetAccountSettingsResponse} Success
		 */
		GetAccountSettings(accountId: string, headersHandler?: () => {[header: string]: string}): Promise<GetAccountSettingsResponse> {
			return fetch(this.baseUri + '/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/settings', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Updates the settings for the specified Amazon Chime account. You can update settings for remote control of shared screens, or for the dial-out option. For more information about these settings, see <a href="https://docs.aws.amazon.com/chime/latest/ag/policies.html">Use the Policies Page</a> in the <i>Amazon Chime Administration Guide</i>.
		 * Put /accounts/{accountId}/settings
		 * @param {string} accountId The Amazon Chime account ID.
		 * @return {void} 
		 */
		UpdateAccountSettings(accountId: string, requestBody: UpdateAccountSettingsBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/settings', { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Retrieves details for the specified bot, such as bot email address, bot type, status, and display name.
		 * Get /accounts/{accountId}/bots/{botId}
		 * @param {string} accountId The Amazon Chime account ID.
		 * @param {string} botId The bot ID.
		 * @return {GetBotResponse} Success
		 */
		GetBot(accountId: string, botId: string, headersHandler?: () => {[header: string]: string}): Promise<GetBotResponse> {
			return fetch(this.baseUri + '/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/bots/' + (botId == null ? '' : encodeURIComponent(botId)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Updates the status of the specified bot, such as starting or stopping the bot from running in your Amazon Chime Enterprise account.
		 * Post /accounts/{accountId}/bots/{botId}
		 * @param {string} accountId The Amazon Chime account ID.
		 * @param {string} botId The bot ID.
		 * @return {UpdateBotResponse} Success
		 */
		UpdateBot(accountId: string, botId: string, requestBody: UpdateBotBody, headersHandler?: () => {[header: string]: string}): Promise<UpdateBotResponse> {
			return fetch(this.baseUri + '/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/bots/' + (botId == null ? '' : encodeURIComponent(botId)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Retrieves global settings for the administrator's AWS account, such as Amazon Chime Business Calling and Amazon Chime Voice Connector settings.
		 * Get /settings
		 * @return {GetGlobalSettingsResponse} Success
		 */
		GetGlobalSettings(headersHandler?: () => {[header: string]: string}): Promise<GetGlobalSettingsResponse> {
			return fetch(this.baseUri + '/settings', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Updates global settings for the administrator's AWS account, such as Amazon Chime Business Calling and Amazon Chime Voice Connector settings.
		 * Put /settings
		 * @return {void} 
		 */
		UpdateGlobalSettings(requestBody: UpdateGlobalSettingsBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/settings', { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Retrieves details for the specified phone number order, such as order creation timestamp, phone numbers in E.164 format, product type, and order status.
		 * Get /phone-number-orders/{phoneNumberOrderId}
		 * @param {string} phoneNumberOrderId The ID for the phone number order.
		 * @return {GetPhoneNumberOrderResponse} Success
		 */
		GetPhoneNumberOrder(phoneNumberOrderId: string, headersHandler?: () => {[header: string]: string}): Promise<GetPhoneNumberOrderResponse> {
			return fetch(this.baseUri + '/phone-number-orders/' + (phoneNumberOrderId == null ? '' : encodeURIComponent(phoneNumberOrderId)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Retrieves the phone number settings for the administrator's AWS account, such as the default outbound calling name.
		 * Get /settings/phone-number
		 * @return {GetPhoneNumberSettingsResponse} Success
		 */
		GetPhoneNumberSettings(headersHandler?: () => {[header: string]: string}): Promise<GetPhoneNumberSettingsResponse> {
			return fetch(this.baseUri + '/settings/phone-number', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Updates the phone number settings for the administrator's AWS account, such as the default outbound calling name. You can update the default outbound calling name once every seven days. Outbound calling names can take up to 72 hours to update.
		 * Put /settings/phone-number
		 * @return {void} 
		 */
		UpdatePhoneNumberSettings(requestBody: UpdatePhoneNumberSettingsBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/settings/phone-number', { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Gets the retention settings for the specified Amazon Chime Enterprise account. For more information about retention settings, see <a href="https://docs.aws.amazon.com/chime/latest/ag/chat-retention.html">Managing Chat Retention Policies</a> in the <i>Amazon Chime Administration Guide</i>.
		 * Get /accounts/{accountId}/retention-settings
		 * @param {string} accountId The Amazon Chime account ID.
		 * @return {GetRetentionSettingsResponse} Success
		 */
		GetRetentionSettings(accountId: string, headersHandler?: () => {[header: string]: string}): Promise<GetRetentionSettingsResponse> {
			return fetch(this.baseUri + '/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/retention-settings', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * <p>Puts retention settings for the specified Amazon Chime Enterprise account. We recommend using AWS CloudTrail to monitor usage of this API for your account. For more information, see <a href="https://docs.aws.amazon.com/chime/latest/ag/cloudtrail.html">Logging Amazon Chime API Calls with AWS CloudTrail</a> in the <i>Amazon Chime Administration Guide</i>.</p> <p>To turn off existing retention settings, remove the number of days from the corresponding <b>RetentionDays</b> field in the <b>RetentionSettings</b> object. For more information about retention settings, see <a href="https://docs.aws.amazon.com/chime/latest/ag/chat-retention.html">Managing Chat Retention Policies</a> in the <i>Amazon Chime Administration Guide</i>.</p>
		 * Put /accounts/{accountId}/retention-settings
		 * @param {string} accountId The Amazon Chime account ID.
		 * @return {void} 
		 */
		PutRetentionSettings(accountId: string, requestBody: PutRetentionSettingsBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/retention-settings', { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * <p>Retrieves details for the specified user ID, such as primary email address, license type, and personal meeting PIN.</p> <p>To retrieve user details with an email address instead of a user ID, use the <a>ListUsers</a> action, and then filter by email address.</p>
		 * Get /accounts/{accountId}/users/{userId}
		 * @param {string} accountId The Amazon Chime account ID.
		 * @param {string} userId The user ID.
		 * @return {GetUserResponse} Success
		 */
		GetUser(accountId: string, userId: string, headersHandler?: () => {[header: string]: string}): Promise<GetUserResponse> {
			return fetch(this.baseUri + '/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/users/' + (userId == null ? '' : encodeURIComponent(userId)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Updates user details for a specified user ID. Currently, only <code>LicenseType</code> updates are supported for this action.
		 * Post /accounts/{accountId}/users/{userId}
		 * @param {string} accountId The Amazon Chime account ID.
		 * @param {string} userId The user ID.
		 * @return {UpdateUserResponse} Success
		 */
		UpdateUser(accountId: string, userId: string, requestBody: UpdateUserBody, headersHandler?: () => {[header: string]: string}): Promise<UpdateUserResponse> {
			return fetch(this.baseUri + '/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/users/' + (userId == null ? '' : encodeURIComponent(userId)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Retrieves settings for the specified user ID, such as any associated phone number settings.
		 * Get /accounts/{accountId}/users/{userId}/settings
		 * @param {string} accountId The Amazon Chime account ID.
		 * @param {string} userId The user ID.
		 * @return {GetUserSettingsResponse} Success
		 */
		GetUserSettings(accountId: string, userId: string, headersHandler?: () => {[header: string]: string}): Promise<GetUserSettingsResponse> {
			return fetch(this.baseUri + '/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/settings', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Updates the settings for the specified user, such as phone number settings.
		 * Put /accounts/{accountId}/users/{userId}/settings
		 * @param {string} accountId The Amazon Chime account ID.
		 * @param {string} userId The user ID.
		 * @return {void} 
		 */
		UpdateUserSettings(accountId: string, userId: string, requestBody: UpdateUserSettingsBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/settings', { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Retrieves the logging configuration details for the specified Amazon Chime Voice Connector. Shows whether SIP message logs are enabled for sending to Amazon CloudWatch Logs.
		 * Get /voice-connectors/{voiceConnectorId}/logging-configuration
		 * @param {string} voiceConnectorId The Amazon Chime Voice Connector ID.
		 * @return {GetVoiceConnectorLoggingConfigurationResponse} Success
		 */
		GetVoiceConnectorLoggingConfiguration(voiceConnectorId: string, headersHandler?: () => {[header: string]: string}): Promise<GetVoiceConnectorLoggingConfigurationResponse> {
			return fetch(this.baseUri + '/voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/logging-configuration', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Adds a logging configuration for the specified Amazon Chime Voice Connector. The logging configuration specifies whether SIP message logs are enabled for sending to Amazon CloudWatch Logs.
		 * Put /voice-connectors/{voiceConnectorId}/logging-configuration
		 * @param {string} voiceConnectorId The Amazon Chime Voice Connector ID.
		 * @return {PutVoiceConnectorLoggingConfigurationResponse} Success
		 */
		PutVoiceConnectorLoggingConfiguration(voiceConnectorId: string, requestBody: PutVoiceConnectorLoggingConfigurationBody, headersHandler?: () => {[header: string]: string}): Promise<PutVoiceConnectorLoggingConfigurationResponse> {
			return fetch(this.baseUri + '/voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/logging-configuration', { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Retrieves information about the last time a SIP <code>OPTIONS</code> ping was received from your SIP infrastructure for the specified Amazon Chime Voice Connector.
		 * Get /voice-connectors/{voiceConnectorId}/termination/health
		 * @param {string} voiceConnectorId The Amazon Chime Voice Connector ID.
		 * @return {GetVoiceConnectorTerminationHealthResponse} Success
		 */
		GetVoiceConnectorTerminationHealth(voiceConnectorId: string, headersHandler?: () => {[header: string]: string}): Promise<GetVoiceConnectorTerminationHealthResponse> {
			return fetch(this.baseUri + '/voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/termination/health', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Sends email to a maximum of 50 users, inviting them to the specified Amazon Chime <code>Team</code> account. Only <code>Team</code> account types are currently supported for this action.
		 * Post /accounts/{accountId}/users#operation=add
		 * @param {string} accountId The Amazon Chime account ID.
		 * @return {void} 
		 */
		InviteUsers(accountId: string, operation: string, requestBody: InviteUsersBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/users#operation=add&operation=' + (operation == null ? '' : encodeURIComponent(operation)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Lists the tags applied to an Amazon Chime SDK attendee resource.
		 * Get /meetings/{meetingId}/attendees/{attendeeId}/tags
		 * @param {string} meetingId The Amazon Chime SDK meeting ID.
		 * @param {string} attendeeId The Amazon Chime SDK attendee ID.
		 * @return {ListAttendeeTagsResponse} Success
		 */
		ListAttendeeTags(meetingId: string, attendeeId: string, headersHandler?: () => {[header: string]: string}): Promise<ListAttendeeTagsResponse> {
			return fetch(this.baseUri + '/meetings/' + (meetingId == null ? '' : encodeURIComponent(meetingId)) + '/attendees/' + (attendeeId == null ? '' : encodeURIComponent(attendeeId)) + '/tags', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Lists the tags applied to an Amazon Chime SDK meeting resource.
		 * Get /meetings/{meetingId}/tags
		 * @param {string} meetingId The Amazon Chime SDK meeting ID.
		 * @return {ListMeetingTagsResponse} Success
		 */
		ListMeetingTags(meetingId: string, headersHandler?: () => {[header: string]: string}): Promise<ListMeetingTagsResponse> {
			return fetch(this.baseUri + '/meetings/' + (meetingId == null ? '' : encodeURIComponent(meetingId)) + '/tags', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Lists the phone numbers for the specified Amazon Chime account, Amazon Chime user, Amazon Chime Voice Connector, or Amazon Chime Voice Connector group.
		 * Get /phone-numbers
		 * @param {PhoneNumberStatus} status The phone number status.
		 * @param {UpdatePhoneNumberRequestItemProductType} product_type The phone number product type.
		 * @param {PhoneNumberAssociationName} filter_name The filter to use to limit the number of results.
		 * @param {string} filter_value The value to use for the filter.
		 * @param {number} max_results The maximum number of results to return in a single call.
		 * @param {string} next_token The token to use to retrieve the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListPhoneNumbersResponse} Success
		 */
		ListPhoneNumbers(status: PhoneNumberStatus, product_type: UpdatePhoneNumberRequestItemProductType, filter_name: PhoneNumberAssociationName, filter_value: string, max_results: number, next_token: string, MaxResults: string, NextToken: string, headersHandler?: () => {[header: string]: string}): Promise<ListPhoneNumbersResponse> {
			return fetch(this.baseUri + '/phone-numbers?status=' + status + '&product_type=' + product_type + '&filter_name=' + filter_name + '&filter_value=' + (filter_value == null ? '' : encodeURIComponent(filter_value)) + '&max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Lists the tags applied to an Amazon Chime SDK meeting resource.
		 * Get /tags#arn
		 * @param {string} arn The resource ARN.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(arn: string, headersHandler?: () => {[header: string]: string}): Promise<ListTagsForResourceResponse> {
			return fetch(this.baseUri + '/tags#arn?arn=' + (arn == null ? '' : encodeURIComponent(arn)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Lists the SIP credentials for the specified Amazon Chime Voice Connector.
		 * Get /voice-connectors/{voiceConnectorId}/termination/credentials
		 * @param {string} voiceConnectorId The Amazon Chime Voice Connector ID.
		 * @return {ListVoiceConnectorTerminationCredentialsResponse} Success
		 */
		ListVoiceConnectorTerminationCredentials(voiceConnectorId: string, headersHandler?: () => {[header: string]: string}): Promise<ListVoiceConnectorTerminationCredentialsResponse> {
			return fetch(this.baseUri + '/voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/termination/credentials', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Logs out the specified user from all of the devices they are currently logged into.
		 * Post /accounts/{accountId}/users/{userId}#operation=logout
		 * @param {string} accountId The Amazon Chime account ID.
		 * @param {string} userId The user ID.
		 * @return {void} 
		 */
		LogoutUser(accountId: string, userId: string, operation: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '#operation=logout&operation=' + (operation == null ? '' : encodeURIComponent(operation)), { method: 'post', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Adds termination SIP credentials for the specified Amazon Chime Voice Connector.
		 * Post /voice-connectors/{voiceConnectorId}/termination/credentials#operation=put
		 * @param {string} voiceConnectorId The Amazon Chime Voice Connector ID.
		 * @return {void} 
		 */
		PutVoiceConnectorTerminationCredentials(voiceConnectorId: string, operation: string, requestBody: PutVoiceConnectorTerminationCredentialsBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/termination/credentials#operation=put&operation=' + (operation == null ? '' : encodeURIComponent(operation)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Redacts the specified message from the specified Amazon Chime conversation.
		 * Post /accounts/{accountId}/conversations/{conversationId}/messages/{messageId}#operation=redact
		 * @param {string} accountId The Amazon Chime account ID.
		 * @param {string} conversationId The conversation ID.
		 * @param {string} messageId The message ID.
		 * @return {RedactConversationMessageResponse} Success
		 */
		RedactConversationMessage(accountId: string, conversationId: string, messageId: string, operation: string, headersHandler?: () => {[header: string]: string}): Promise<RedactConversationMessageResponse> {
			return fetch(this.baseUri + '/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/conversations/' + (conversationId == null ? '' : encodeURIComponent(conversationId)) + '/messages/' + (messageId == null ? '' : encodeURIComponent(messageId)) + '#operation=redact&operation=' + (operation == null ? '' : encodeURIComponent(operation)), { method: 'post', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Redacts the specified message from the specified Amazon Chime chat room.
		 * Post /accounts/{accountId}/rooms/{roomId}/messages/{messageId}#operation=redact
		 * @param {string} accountId The Amazon Chime account ID.
		 * @param {string} roomId The room ID.
		 * @param {string} messageId The message ID.
		 * @return {RedactRoomMessageResponse} Success
		 */
		RedactRoomMessage(accountId: string, roomId: string, messageId: string, operation: string, headersHandler?: () => {[header: string]: string}): Promise<RedactRoomMessageResponse> {
			return fetch(this.baseUri + '/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/rooms/' + (roomId == null ? '' : encodeURIComponent(roomId)) + '/messages/' + (messageId == null ? '' : encodeURIComponent(messageId)) + '#operation=redact&operation=' + (operation == null ? '' : encodeURIComponent(operation)), { method: 'post', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Regenerates the security token for a bot.
		 * Post /accounts/{accountId}/bots/{botId}#operation=regenerate-security-token
		 * @param {string} accountId The Amazon Chime account ID.
		 * @param {string} botId The bot ID.
		 * @return {RegenerateSecurityTokenResponse} Success
		 */
		RegenerateSecurityToken(accountId: string, botId: string, operation: string, headersHandler?: () => {[header: string]: string}): Promise<RegenerateSecurityTokenResponse> {
			return fetch(this.baseUri + '/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '#operation=regenerate-security-token&operation=' + (operation == null ? '' : encodeURIComponent(operation)), { method: 'post', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Resets the personal meeting PIN for the specified user on an Amazon Chime account. Returns the <a>User</a> object with the updated personal meeting PIN.
		 * Post /accounts/{accountId}/users/{userId}#operation=reset-personal-pin
		 * @param {string} accountId The Amazon Chime account ID.
		 * @param {string} userId The user ID.
		 * @return {ResetPersonalPINResponse} Success
		 */
		ResetPersonalPIN(accountId: string, userId: string, operation: string, headersHandler?: () => {[header: string]: string}): Promise<ResetPersonalPINResponse> {
			return fetch(this.baseUri + '/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '#operation=reset-personal-pin&operation=' + (operation == null ? '' : encodeURIComponent(operation)), { method: 'post', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Moves a phone number from the <b>Deletion queue</b> back into the phone number <b>Inventory</b>.
		 * Post /phone-numbers/{phoneNumberId}#operation=restore
		 * @param {string} phoneNumberId The phone number.
		 * @return {RestorePhoneNumberResponse} Success
		 */
		RestorePhoneNumber(phoneNumberId: string, operation: string, headersHandler?: () => {[header: string]: string}): Promise<RestorePhoneNumberResponse> {
			return fetch(this.baseUri + '/phone-numbers/' + (phoneNumberId == null ? '' : encodeURIComponent(phoneNumberId)) + '#operation=restore&operation=' + (operation == null ? '' : encodeURIComponent(operation)), { method: 'post', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Searches phone numbers that can be ordered.
		 * Get /search#type=phone-numbers
		 * @param {string} area_code The area code used to filter results.
		 * @param {string} city The city used to filter results.
		 * @param {string} country The country used to filter results.
		 * @param {string} state The state used to filter results.
		 * @param {string} toll_free_prefix The toll-free prefix that you use to filter results.
		 * @param {number} max_results The maximum number of results to return in a single call.
		 * @param {string} next_token The token to use to retrieve the next page of results.
		 * @return {SearchAvailablePhoneNumbersResponse} Success
		 */
		SearchAvailablePhoneNumbers(area_code: string, city: string, country: string, state: string, toll_free_prefix: string, max_results: number, next_token: string, type: string, headersHandler?: () => {[header: string]: string}): Promise<SearchAvailablePhoneNumbersResponse> {
			return fetch(this.baseUri + '/search#type=phone-numbers?area_code=' + (area_code == null ? '' : encodeURIComponent(area_code)) + '&city=' + (city == null ? '' : encodeURIComponent(city)) + '&country=' + (country == null ? '' : encodeURIComponent(country)) + '&state=' + (state == null ? '' : encodeURIComponent(state)) + '&toll_free_prefix=' + (toll_free_prefix == null ? '' : encodeURIComponent(toll_free_prefix)) + '&max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&type=' + (type == null ? '' : encodeURIComponent(type)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Applies the specified tags to the specified Amazon Chime SDK attendee.
		 * Post /meetings/{meetingId}/attendees/{attendeeId}/tags#operation=add
		 * @param {string} meetingId The Amazon Chime SDK meeting ID.
		 * @param {string} attendeeId The Amazon Chime SDK attendee ID.
		 * @return {void} 
		 */
		TagAttendee(meetingId: string, attendeeId: string, operation: string, requestBody: TagAttendeeBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/meetings/' + (meetingId == null ? '' : encodeURIComponent(meetingId)) + '/attendees/' + (attendeeId == null ? '' : encodeURIComponent(attendeeId)) + '/tags#operation=add&operation=' + (operation == null ? '' : encodeURIComponent(operation)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Applies the specified tags to the specified Amazon Chime SDK meeting.
		 * Post /meetings/{meetingId}/tags#operation=add
		 * @param {string} meetingId The Amazon Chime SDK meeting ID.
		 * @return {void} 
		 */
		TagMeeting(meetingId: string, operation: string, requestBody: TagMeetingBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/meetings/' + (meetingId == null ? '' : encodeURIComponent(meetingId)) + '/tags#operation=add&operation=' + (operation == null ? '' : encodeURIComponent(operation)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Applies the specified tags to the specified Amazon Chime SDK meeting resource.
		 * Post /tags#operation=tag-resource
		 * @return {void} 
		 */
		TagResource(operation: string, requestBody: TagResourceBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/tags#operation=tag-resource?operation=' + (operation == null ? '' : encodeURIComponent(operation)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Untags the specified tags from the specified Amazon Chime SDK attendee.
		 * Post /meetings/{meetingId}/attendees/{attendeeId}/tags#operation=delete
		 * @param {string} meetingId The Amazon Chime SDK meeting ID.
		 * @param {string} attendeeId The Amazon Chime SDK attendee ID.
		 * @return {void} 
		 */
		UntagAttendee(meetingId: string, attendeeId: string, operation: string, requestBody: UntagAttendeeBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/meetings/' + (meetingId == null ? '' : encodeURIComponent(meetingId)) + '/attendees/' + (attendeeId == null ? '' : encodeURIComponent(attendeeId)) + '/tags#operation=delete&operation=' + (operation == null ? '' : encodeURIComponent(operation)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Untags the specified tags from the specified Amazon Chime SDK meeting.
		 * Post /meetings/{meetingId}/tags#operation=delete
		 * @param {string} meetingId The Amazon Chime SDK meeting ID.
		 * @return {void} 
		 */
		UntagMeeting(meetingId: string, operation: string, requestBody: UntagMeetingBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/meetings/' + (meetingId == null ? '' : encodeURIComponent(meetingId)) + '/tags#operation=delete&operation=' + (operation == null ? '' : encodeURIComponent(operation)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Untags the specified tags from the specified Amazon Chime SDK meeting resource.
		 * Post /tags#operation=untag-resource
		 * @return {void} 
		 */
		UntagResource(operation: string, requestBody: UntagResourceBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/tags#operation=untag-resource?operation=' + (operation == null ? '' : encodeURIComponent(operation)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}
	}

	export interface AssociatePhoneNumberWithUserBody {

		/**
		 * The phone number, in E.164 format.
		 * Pattern: ^\+?[1-9]\d{1,14}$
		 */
		E164PhoneNumber: string;
	}

	export interface AssociatePhoneNumbersWithVoiceConnectorBody {

		/**List of phone numbers, in E.164 format. */
		E164PhoneNumbers?: Array<E164PhoneNumber>;

		/**If true, associates the provided phone numbers with the provided Amazon Chime Voice Connector and removes any previously existing associations. If false, does not associate any phone numbers that have previously existing associations. */
		ForceAssociate?: boolean;
	}

	export interface AssociatePhoneNumbersWithVoiceConnectorGroupBody {

		/**List of phone numbers, in E.164 format. */
		E164PhoneNumbers?: Array<E164PhoneNumber>;

		/**If true, associates the provided phone numbers with the provided Amazon Chime Voice Connector Group and removes any previously existing associations. If false, does not associate any phone numbers that have previously existing associations. */
		ForceAssociate?: boolean;
	}

	export interface AssociateSigninDelegateGroupsWithAccountBody {

		/**The sign-in delegate groups. */
		SigninDelegateGroups: Array<SigninDelegateGroup>;
	}

	export interface BatchCreateAttendeeBody {

		/**The request containing the attendees to create. */
		Attendees: Array<CreateAttendeeRequestItem>;
	}

	export interface BatchCreateRoomMembershipBody {

		/**
		 * The list of membership items.
		 * Maximum items: 50
		 */
		MembershipItemList: Array<MembershipItem>;
	}

	export interface BatchDeletePhoneNumberBody {

		/**
		 * List of phone number IDs.
		 * Minimum items: 1
		 */
		PhoneNumberIds: Array<String>;
	}

	export interface BatchSuspendUserBody {

		/**
		 * The request containing the user IDs to suspend.
		 * Maximum items: 50
		 */
		UserIdList: Array<NonEmptyString>;
	}

	export interface BatchUnsuspendUserBody {

		/**
		 * The request containing the user IDs to unsuspend.
		 * Maximum items: 50
		 */
		UserIdList: Array<NonEmptyString>;
	}

	export interface BatchUpdatePhoneNumberBody {

		/**The request containing the phone number IDs and product types or calling names to update. */
		UpdatePhoneNumberRequestItems: Array<UpdatePhoneNumberRequestItem>;
	}

	export interface BatchUpdateUserBody {

		/**
		 * The request containing the user IDs and details to update.
		 * Maximum items: 20
		 */
		UpdateUserRequestItems: Array<UpdateUserRequestItem>;
	}

	export interface CreateAccountBody {

		/**
		 * The name of the Amazon Chime account.
		 * Max length: 100
		 * Min length: 1
		 * Pattern: .*\S.*
		 */
		Name: string;
	}

	export interface CreateAttendeeBody {

		/**
		 * The Amazon Chime SDK external user ID. Links the attendee to an identity managed by a builder application.
		 * Max length: 64
		 * Min length: 2
		 */
		ExternalUserId: string;

		/**
		 * The tag key-value pairs.
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		Tags?: Array<Tag>;
	}

	export interface CreateBotBody {

		/**The bot display name. */
		DisplayName: string;

		/**
		 * The domain of the Amazon Chime Enterprise account.
		 * Pattern: .*\S.*
		 */
		Domain?: string;
	}

	export interface CreateMeetingBody {

		/**
		 * The unique identifier for the client request. Use a different token for different meetings.
		 * Max length: 64
		 * Min length: 2
		 * Pattern: [-_a-zA-Z0-9]*
		 */
		ClientRequestToken: string;

		/**
		 * The external meeting ID.
		 * Max length: 64
		 * Min length: 2
		 */
		ExternalMeetingId?: string;

		/**
		 * Reserved.
		 * Max length: 64
		 * Min length: 2
		 */
		MeetingHostId?: string;

		/**The Region in which to create the meeting. Available values: <code>ap-northeast-1</code>, <code>ap-southeast-1</code>, <code>ap-southeast-2</code>, <code>ca-central-1</code>, <code>eu-central-1</code>, <code>eu-north-1</code>, <code>eu-west-1</code>, <code>eu-west-2</code>, <code>eu-west-3</code>, <code>sa-east-1</code>, <code>us-east-1</code>, <code>us-east-2</code>, <code>us-west-1</code>, <code>us-west-2</code>. */
		MediaRegion?: string;

		/**
		 * The tag key-value pairs.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;

		/**The configuration for resource targets to receive notifications when Amazon Chime SDK meeting and attendee events occur. */
		NotificationsConfiguration?: string;
	}

	export interface CreatePhoneNumberOrderBody {

		/**The phone number product type. */
		ProductType: CreatePhoneNumberOrderBodyProductType;

		/**List of phone numbers, in E.164 format. */
		E164PhoneNumbers: Array<E164PhoneNumber>;
	}

	export enum CreatePhoneNumberOrderBodyProductType { BusinessCalling = 0, VoiceConnector = 1 }

	export interface CreateProxySessionBody {

		/**
		 * The participant phone numbers.
		 * Minimum items: 2
		 * Maximum items: 2
		 */
		ParticipantPhoneNumbers: Array<E164PhoneNumber>;

		/**
		 * The name of the proxy session.
		 * Pattern: ^$|^[a-zA-Z0-9 ]{0,30}$
		 */
		Name?: string;

		/**
		 * The number of minutes allowed for the proxy session.
		 * Minimum: 1
		 */
		ExpiryMinutes?: number;

		/**The proxy session capabilities. */
		Capabilities: Array<Capability>;

		/**The preference for proxy phone number reuse, or stickiness, between the same participants across sessions. */
		NumberSelectionBehavior?: CreateProxySessionBodyNumberSelectionBehavior;

		/**The preference for matching the country or area code of the proxy phone number with that of the first participant. */
		GeoMatchLevel?: CreateProxySessionBodyGeoMatchLevel;

		/**The country and area code for a proxy phone number in a proxy phone session. */
		GeoMatchParams?: string;
	}

	export enum CreateProxySessionBodyNumberSelectionBehavior { PreferSticky = 0, AvoidSticky = 1 }

	export enum CreateProxySessionBodyGeoMatchLevel { Country = 0, AreaCode = 1 }

	export interface CreateRoomBody {

		/**The room name. */
		Name: string;

		/**
		 * The idempotency token for the request.
		 * Max length: 64
		 * Min length: 2
		 * Pattern: [-_a-zA-Z0-9]*
		 */
		ClientRequestToken?: string;
	}

	export interface CreateRoomMembershipBody {

		/**
		 * The Amazon Chime member ID (user ID or bot ID).
		 * Pattern: .*\S.*
		 */
		MemberId: string;

		/**The role of the member. */
		Role?: CreateRoomMembershipBodyRole;
	}

	export enum CreateRoomMembershipBodyRole { Administrator = 0, Member = 1 }

	export interface CreateUserBody {

		/**The user name. */
		Username?: string;

		/**
		 * The user's email address.
		 * Pattern: .+@.+\..+
		 */
		Email?: string;

		/**The user type. */
		UserType?: CreateUserBodyUserType;
	}

	export enum CreateUserBodyUserType { PrivateUser = 0, SharedDevice = 1 }

	export interface CreateVoiceConnectorBody {

		/**
		 * The name of the Amazon Chime Voice Connector.
		 * Max length: 256
		 * Min length: 1
		 */
		Name: string;

		/**The AWS Region in which the Amazon Chime Voice Connector is created. Default value: <code>us-east-1</code>. */
		AwsRegion?: CreateVoiceConnectorBodyAwsRegion;

		/**When enabled, requires encryption for the Amazon Chime Voice Connector. */
		RequireEncryption: boolean;
	}

	export enum CreateVoiceConnectorBodyAwsRegion { us-east-1 = 0, us-west-2 = 1 }

	export interface CreateVoiceConnectorGroupBody {

		/**
		 * The name of the Amazon Chime Voice Connector group.
		 * Max length: 256
		 * Min length: 1
		 */
		Name: string;

		/**The Amazon Chime Voice Connectors to route inbound calls to. */
		VoiceConnectorItems?: Array<VoiceConnectorItem>;
	}

	export interface UpdateAccountBody {

		/**
		 * The new name for the specified Amazon Chime account.
		 * Max length: 100
		 * Min length: 1
		 * Pattern: .*\S.*
		 */
		Name?: string;
	}

	export interface PutEventsConfigurationBody {

		/**HTTPS endpoint that allows the bot to receive outgoing events. */
		OutboundEventsHTTPSEndpoint?: string;

		/**Lambda function ARN that allows the bot to receive outgoing events. */
		LambdaFunctionArn?: string;
	}

	export interface UpdatePhoneNumberBody {

		/**The product type. */
		ProductType?: UpdatePhoneNumberBodyProductType;

		/**
		 * The outbound calling name associated with the phone number.
		 * Pattern: ^$|^[a-zA-Z0-9 ]{2,15}$
		 */
		CallingName?: string;
	}

	export enum UpdatePhoneNumberBodyProductType { BusinessCalling = 0, VoiceConnector = 1 }

	export interface UpdateProxySessionBody {

		/**The proxy session capabilities. */
		Capabilities: Array<Capability>;

		/**
		 * The number of minutes allowed for the proxy session.
		 * Minimum: 1
		 */
		ExpiryMinutes?: number;
	}

	export interface UpdateRoomBody {

		/**The room name. */
		Name?: string;
	}

	export interface UpdateRoomMembershipBody {

		/**The role of the member. */
		Role?: UpdateRoomMembershipBodyRole;
	}

	export enum UpdateRoomMembershipBodyRole { Administrator = 0, Member = 1 }

	export interface UpdateVoiceConnectorBody {

		/**
		 * The name of the Amazon Chime Voice Connector.
		 * Max length: 256
		 * Min length: 1
		 */
		Name: string;

		/**When enabled, requires encryption for the Amazon Chime Voice Connector. */
		RequireEncryption: boolean;
	}

	export interface UpdateVoiceConnectorGroupBody {

		/**
		 * The name of the Amazon Chime Voice Connector group.
		 * Max length: 256
		 * Min length: 1
		 */
		Name: string;

		/**The <code>VoiceConnectorItems</code> to associate with the group. */
		VoiceConnectorItems: Array<VoiceConnectorItem>;
	}

	export interface PutVoiceConnectorOriginationBody {

		/**Origination settings enable your SIP hosts to receive inbound calls using your Amazon Chime Voice Connector. */
		Origination: string;
	}

	export interface PutVoiceConnectorProxyBody {

		/**The default number of minutes allowed for proxy sessions. */
		DefaultSessionExpiryMinutes: number;

		/**
		 * The countries for proxy phone numbers to be selected from.
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		PhoneNumberPoolCountries: Array<Country>;

		/**
		 * The phone number to route calls to after a proxy session expires.
		 * Pattern: ^\+?[1-9]\d{1,14}$
		 */
		FallBackPhoneNumber?: string;

		/**When true, stops proxy sessions from being created on the specified Amazon Chime Voice Connector. */
		Disabled?: boolean;
	}

	export interface PutVoiceConnectorStreamingConfigurationBody {

		/**The streaming configuration associated with an Amazon Chime Voice Connector. Specifies whether media streaming is enabled for sending to Amazon Kinesis, and shows the retention period for the Amazon Kinesis data, in hours. */
		StreamingConfiguration: string;
	}

	export interface PutVoiceConnectorTerminationBody {

		/**Termination settings enable your SIP hosts to make outbound calls using your Amazon Chime Voice Connector. */
		Termination: string;
	}

	export interface DeleteVoiceConnectorTerminationCredentialsBody {

		/**The RFC2617 compliant username associated with the SIP credentials, in US-ASCII format. */
		Usernames?: Array<SensitiveString>;
	}

	export interface DisassociatePhoneNumbersFromVoiceConnectorBody {

		/**List of phone numbers, in E.164 format. */
		E164PhoneNumbers?: Array<E164PhoneNumber>;
	}

	export interface DisassociatePhoneNumbersFromVoiceConnectorGroupBody {

		/**List of phone numbers, in E.164 format. */
		E164PhoneNumbers?: Array<E164PhoneNumber>;
	}

	export interface DisassociateSigninDelegateGroupsFromAccountBody {

		/**
		 * The sign-in delegate group names.
		 * Minimum items: 1
		 */
		GroupNames: Array<String>;
	}

	export interface UpdateAccountSettingsBody {

		/**Settings related to the Amazon Chime account. This includes settings that start or stop remote control of shared screens, or start or stop the dial-out option in the Amazon Chime web application. For more information about these settings, see <a href="https://docs.aws.amazon.com/chime/latest/ag/policies.html">Use the Policies Page</a> in the <i>Amazon Chime Administration Guide</i>. */
		AccountSettings: string;
	}

	export interface UpdateBotBody {

		/**When true, stops the specified bot from running in your account. */
		Disabled?: boolean;
	}

	export interface UpdateGlobalSettingsBody {

		/**The Amazon Chime Business Calling settings for the administrator's AWS account. Includes any Amazon S3 buckets designated for storing call detail records. */
		BusinessCalling: string;

		/**The Amazon Chime Voice Connector settings. Includes any Amazon S3 buckets designated for storing call detail records. */
		VoiceConnector: string;
	}

	export interface UpdatePhoneNumberSettingsBody {

		/**
		 * The default outbound calling name for the account.
		 * Pattern: ^$|^[a-zA-Z0-9 ]{2,15}$
		 */
		CallingName: string;
	}

	export interface PutRetentionSettingsBody {

		/**The retention settings for an Amazon Chime Enterprise account that determine how long to retain items such as chat room messages and chat conversation messages. */
		RetentionSettings: string;
	}

	export interface UpdateUserBody {

		/**The user license type to update. This must be a supported license type for the Amazon Chime account that the user belongs to. */
		LicenseType?: UpdateUserBodyLicenseType;

		/**The user type. */
		UserType?: UpdateUserBodyUserType;

		/**The Alexa for Business metadata associated with an Amazon Chime user, used to integrate Alexa for Business with a device. */
		AlexaForBusinessMetadata?: string;
	}

	export enum UpdateUserBodyLicenseType { Basic = 0, Plus = 1, Pro = 2, ProTrial = 3 }

	export enum UpdateUserBodyUserType { PrivateUser = 0, SharedDevice = 1 }

	export interface UpdateUserSettingsBody {

		/**Settings associated with an Amazon Chime user, including inbound and outbound calling and text messaging. */
		UserSettings: string;
	}

	export interface PutVoiceConnectorLoggingConfigurationBody {

		/**The logging configuration associated with an Amazon Chime Voice Connector. Specifies whether SIP message logs are enabled for sending to Amazon CloudWatch Logs. */
		LoggingConfiguration: string;
	}

	export interface InviteUsersBody {

		/**
		 * The user email addresses to which to send the email invitation.
		 * Maximum items: 50
		 */
		UserEmailList: Array<EmailAddress>;

		/**The user type. */
		UserType?: InviteUsersBodyUserType;
	}

	export enum InviteUsersBodyUserType { PrivateUser = 0, SharedDevice = 1 }

	export interface PutVoiceConnectorTerminationCredentialsBody {

		/**The termination SIP credentials. */
		Credentials?: Array<Credential>;
	}

	export interface TagAttendeeBody {

		/**
		 * The tag key-value pairs.
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		Tags: Array<Tag>;
	}

	export interface TagMeetingBody {

		/**
		 * The tag key-value pairs.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Tags: Array<Tag>;
	}

	export interface TagResourceBody {

		/**
		 * The resource ARN.
		 * Max length: 1024
		 * Min length: 1
		 * Pattern: ^arn[\/\:\-\_\.a-zA-Z0-9]+$
		 */
		ResourceARN: string;

		/**
		 * The tag key-value pairs.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Tags: Array<Tag>;
	}

	export interface UntagAttendeeBody {

		/**
		 * The tag keys.
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		TagKeys: Array<TagKey>;
	}

	export interface UntagMeetingBody {

		/**
		 * The tag keys.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		TagKeys: Array<TagKey>;
	}

	export interface UntagResourceBody {

		/**
		 * The resource ARN.
		 * Max length: 1024
		 * Min length: 1
		 * Pattern: ^arn[\/\:\-\_\.a-zA-Z0-9]+$
		 */
		ResourceARN: string;

		/**
		 * The tag keys.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		TagKeys: Array<TagKey>;
	}

}

