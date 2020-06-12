export namespace My_Demo_Client {

	/**Represents the request to add custom attributes. */
	export interface AddCustomAttributesRequest {
		UserPoolId: string;
		CustomAttributes: Array<SchemaAttributeType>;
	}

	export interface AdminAddUserToGroupRequest {
		UserPoolId: string;
		Username: string;
		GroupName: string;
	}


	/**Represents the request to confirm user registration. */
	export interface AdminConfirmSignUpRequest {
		UserPoolId: string;
		Username: string;
		ClientMetadata?: ClientMetadataType;
	}


	/**Represents the response from the server to the request to create the user. */
	export interface AdminCreateUserResponse {

		/**The user type. */
		User?: UserType;
	}


	/**Represents the request to create a user in the specified user pool. */
	export interface AdminCreateUserRequest {
		UserPoolId: string;
		Username: string;
		UserAttributes?: Array<AttributeType>;
		ValidationData?: Array<AttributeType>;
		TemporaryPassword?: string;
		ForceAliasCreation?: boolean;
		MessageAction?: AdminCreateUserRequestMessageAction;
		DesiredDeliveryMediums?: Array<DeliveryMediumType>;
		ClientMetadata?: ClientMetadataType;
	}

	export enum AdminCreateUserRequestMessageAction { RESEND = 0, SUPPRESS = 1 }


	/**Represents the request to delete a user as an administrator. */
	export interface AdminDeleteUserRequest {
		UserPoolId: string;
		Username: string;
	}


	/**Represents the request to delete user attributes as an administrator. */
	export interface AdminDeleteUserAttributesRequest {
		UserPoolId: string;
		Username: string;
		UserAttributeNames: Array<AttributeNameType>;
	}

	export interface AdminDisableProviderForUserRequest {
		UserPoolId: string;

		/**A container for information about an identity provider for a user pool. */
		User: ProviderUserIdentifierType;
	}


	/**Represents the request to disable any user as an administrator. */
	export interface AdminDisableUserRequest {
		UserPoolId: string;
		Username: string;
	}


	/**Represents the request that enables the user as an administrator. */
	export interface AdminEnableUserRequest {
		UserPoolId: string;
		Username: string;
	}


	/**Sends the forgot device request, as an administrator. */
	export interface AdminForgetDeviceRequest {
		UserPoolId: string;
		Username: string;
		DeviceKey: string;
	}


	/**Gets the device response, as an administrator. */
	export interface AdminGetDeviceResponse {

		/**The device type. */
		Device: DeviceType;
	}


	/**Represents the request to get the device, as an administrator. */
	export interface AdminGetDeviceRequest {
		DeviceKey: string;
		UserPoolId: string;
		Username: string;
	}


	/**Represents the response from the server from the request to get the specified user as an administrator. */
	export interface AdminGetUserResponse {
		Username: string;
		UserAttributes?: Array<AttributeType>;
		UserCreateDate?: Date;
		UserLastModifiedDate?: Date;
		Enabled?: boolean;
		UserStatus?: AdminGetUserResponseUserStatus;
		MFAOptions?: Array<MFAOptionType>;
		PreferredMfaSetting?: string;
		UserMFASettingList?: Array<StringType>;
	}

	export enum AdminGetUserResponseUserStatus { UNCONFIRMED = 0, CONFIRMED = 1, ARCHIVED = 2, COMPROMISED = 3, UNKNOWN = 4, RESET_REQUIRED = 5, FORCE_CHANGE_PASSWORD = 6 }


	/**Represents the request to get the specified user as an administrator. */
	export interface AdminGetUserRequest {
		UserPoolId: string;
		Username: string;
	}


	/**Initiates the authentication response, as an administrator. */
	export interface AdminInitiateAuthResponse {
		ChallengeName?: AdminInitiateAuthResponseChallengeName;
		Session?: string;
		ChallengeParameters?: ChallengeParametersType;

		/**The authentication result. */
		AuthenticationResult?: AuthenticationResultType;
	}

	export enum AdminInitiateAuthResponseChallengeName { SMS_MFA = 0, SOFTWARE_TOKEN_MFA = 1, SELECT_MFA_TYPE = 2, MFA_SETUP = 3, PASSWORD_VERIFIER = 4, CUSTOM_CHALLENGE = 5, DEVICE_SRP_AUTH = 6, DEVICE_PASSWORD_VERIFIER = 7, ADMIN_NO_SRP_AUTH = 8, NEW_PASSWORD_REQUIRED = 9 }


	/**Initiates the authorization request, as an administrator. */
	export interface AdminInitiateAuthRequest {
		UserPoolId: string;
		ClientId: string;
		AuthFlow: AdminInitiateAuthRequestAuthFlow;
		AuthParameters?: AuthParametersType;
		ClientMetadata?: ClientMetadataType;

		/**<p>An Amazon Pinpoint analytics endpoint.</p> <p>An endpoint uniquely identifies a mobile device, email address, or phone number that can receive messages from Amazon Pinpoint analytics.</p> <note> <p>Cognito User Pools only supports sending events to Amazon Pinpoint projects in the US East (N. Virginia) us-east-1 Region, regardless of the region in which the user pool resides.</p> </note> */
		AnalyticsMetadata?: AnalyticsMetadataType;

		/**Contextual user data type used for evaluating the risk of an unexpected event by Amazon Cognito advanced security. */
		ContextData?: ContextDataType;
	}

	export enum AdminInitiateAuthRequestAuthFlow { USER_SRP_AUTH = 0, REFRESH_TOKEN_AUTH = 1, REFRESH_TOKEN = 2, CUSTOM_AUTH = 3, ADMIN_NO_SRP_AUTH = 4, USER_PASSWORD_AUTH = 5, ADMIN_USER_PASSWORD_AUTH = 6 }

	export interface AdminLinkProviderForUserRequest {
		UserPoolId: string;

		/**A container for information about an identity provider for a user pool. */
		DestinationUser: ProviderUserIdentifierType;

		/**A container for information about an identity provider for a user pool. */
		SourceUser: ProviderUserIdentifierType;
	}


	/**Lists the device's response, as an administrator. */
	export interface AdminListDevicesResponse {
		Devices?: Array<DeviceType>;
		PaginationToken?: string;
	}


	/**Represents the request to list devices, as an administrator. */
	export interface AdminListDevicesRequest {
		UserPoolId: string;
		Username: string;
		Limit?: number;
		PaginationToken?: string;
	}

	export interface AdminListGroupsForUserResponse {
		Groups?: Array<GroupType>;
		NextToken?: string;
	}

	export interface AdminListGroupsForUserRequest {
		Username: string;
		UserPoolId: string;
		Limit?: number;
		NextToken?: string;
	}

	export interface AdminListUserAuthEventsResponse {
		AuthEvents?: Array<AuthEventType>;
		NextToken?: string;
	}

	export interface AdminListUserAuthEventsRequest {
		UserPoolId: string;
		Username: string;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface AdminRemoveUserFromGroupRequest {
		UserPoolId: string;
		Username: string;
		GroupName: string;
	}


	/**Represents the request to reset a user's password as an administrator. */
	export interface AdminResetUserPasswordRequest {
		UserPoolId: string;
		Username: string;
		ClientMetadata?: ClientMetadataType;
	}


	/**Responds to the authentication challenge, as an administrator. */
	export interface AdminRespondToAuthChallengeResponse {
		ChallengeName?: AdminRespondToAuthChallengeResponseChallengeName;
		Session?: string;
		ChallengeParameters?: ChallengeParametersType;

		/**The authentication result. */
		AuthenticationResult?: AuthenticationResultType;
	}

	export enum AdminRespondToAuthChallengeResponseChallengeName { SMS_MFA = 0, SOFTWARE_TOKEN_MFA = 1, SELECT_MFA_TYPE = 2, MFA_SETUP = 3, PASSWORD_VERIFIER = 4, CUSTOM_CHALLENGE = 5, DEVICE_SRP_AUTH = 6, DEVICE_PASSWORD_VERIFIER = 7, ADMIN_NO_SRP_AUTH = 8, NEW_PASSWORD_REQUIRED = 9 }


	/**The request to respond to the authentication challenge, as an administrator. */
	export interface AdminRespondToAuthChallengeRequest {
		UserPoolId: string;
		ClientId: string;
		ChallengeName: AdminRespondToAuthChallengeRequestChallengeName;
		ChallengeResponses?: ChallengeResponsesType;
		Session?: string;

		/**<p>An Amazon Pinpoint analytics endpoint.</p> <p>An endpoint uniquely identifies a mobile device, email address, or phone number that can receive messages from Amazon Pinpoint analytics.</p> <note> <p>Cognito User Pools only supports sending events to Amazon Pinpoint projects in the US East (N. Virginia) us-east-1 Region, regardless of the region in which the user pool resides.</p> </note> */
		AnalyticsMetadata?: AnalyticsMetadataType;

		/**Contextual user data type used for evaluating the risk of an unexpected event by Amazon Cognito advanced security. */
		ContextData?: ContextDataType;
		ClientMetadata?: ClientMetadataType;
	}

	export enum AdminRespondToAuthChallengeRequestChallengeName { SMS_MFA = 0, SOFTWARE_TOKEN_MFA = 1, SELECT_MFA_TYPE = 2, MFA_SETUP = 3, PASSWORD_VERIFIER = 4, CUSTOM_CHALLENGE = 5, DEVICE_SRP_AUTH = 6, DEVICE_PASSWORD_VERIFIER = 7, ADMIN_NO_SRP_AUTH = 8, NEW_PASSWORD_REQUIRED = 9 }

	export interface AdminSetUserMFAPreferenceRequest {

		/**The type used for enabling SMS MFA at the user level. */
		SMSMfaSettings?: SMSMfaSettingsType;

		/**The type used for enabling software token MFA at the user level. */
		SoftwareTokenMfaSettings?: SoftwareTokenMfaSettingsType;
		Username: string;
		UserPoolId: string;
	}

	export interface AdminSetUserPasswordRequest {
		UserPoolId: string;
		Username: string;
		Password: string;
		Permanent?: boolean;
	}


	/**You can use this parameter to set an MFA configuration that uses the SMS delivery medium. */
	export interface AdminSetUserSettingsRequest {
		UserPoolId: string;
		Username: string;
		MFAOptions: Array<MFAOptionType>;
	}

	export interface AdminUpdateAuthEventFeedbackRequest {
		UserPoolId: string;
		Username: string;
		EventId: string;
		FeedbackValue: AdminUpdateAuthEventFeedbackRequestFeedbackValue;
	}

	export enum AdminUpdateAuthEventFeedbackRequestFeedbackValue { Valid = 0, Invalid = 1 }


	/**The request to update the device status, as an administrator. */
	export interface AdminUpdateDeviceStatusRequest {
		UserPoolId: string;
		Username: string;
		DeviceKey: string;
		DeviceRememberedStatus?: AdminUpdateDeviceStatusRequestDeviceRememberedStatus;
	}

	export enum AdminUpdateDeviceStatusRequestDeviceRememberedStatus { remembered = 0, not_remembered = 1 }


	/**Represents the request to update the user's attributes as an administrator. */
	export interface AdminUpdateUserAttributesRequest {
		UserPoolId: string;
		Username: string;
		UserAttributes: Array<AttributeType>;
		ClientMetadata?: ClientMetadataType;
	}


	/**The request to sign out of all devices, as an administrator. */
	export interface AdminUserGlobalSignOutRequest {
		UserPoolId: string;
		Username: string;
	}

	export interface AssociateSoftwareTokenResponse {
		SecretCode?: string;
		Session?: string;
	}

	export interface AssociateSoftwareTokenRequest {
		AccessToken?: string;
		Session?: string;
	}


	/**Represents the request to change a user password. */
	export interface ChangePasswordRequest {
		PreviousPassword: string;
		ProposedPassword: string;
		AccessToken: string;
	}


	/**Confirms the device response. */
	export interface ConfirmDeviceResponse {
		UserConfirmationNecessary?: boolean;
	}


	/**Confirms the device request. */
	export interface ConfirmDeviceRequest {
		AccessToken: string;
		DeviceKey: string;

		/**The device verifier against which it will be authenticated. */
		DeviceSecretVerifierConfig?: DeviceSecretVerifierConfigType;
		DeviceName?: string;
	}


	/**The request representing the confirmation for a password reset. */
	export interface ConfirmForgotPasswordRequest {
		ClientId: string;
		SecretHash?: string;
		Username: string;
		ConfirmationCode: string;
		Password: string;

		/**<p>An Amazon Pinpoint analytics endpoint.</p> <p>An endpoint uniquely identifies a mobile device, email address, or phone number that can receive messages from Amazon Pinpoint analytics.</p> <note> <p>Cognito User Pools only supports sending events to Amazon Pinpoint projects in the US East (N. Virginia) us-east-1 Region, regardless of the region in which the user pool resides.</p> </note> */
		AnalyticsMetadata?: AnalyticsMetadataType;

		/**Contextual data such as the user's device fingerprint, IP address, or location used for evaluating the risk of an unexpected event by Amazon Cognito advanced security. */
		UserContextData?: UserContextDataType;
		ClientMetadata?: ClientMetadataType;
	}


	/**Represents the request to confirm registration of a user. */
	export interface ConfirmSignUpRequest {
		ClientId: string;
		SecretHash?: string;
		Username: string;
		ConfirmationCode: string;
		ForceAliasCreation?: boolean;

		/**<p>An Amazon Pinpoint analytics endpoint.</p> <p>An endpoint uniquely identifies a mobile device, email address, or phone number that can receive messages from Amazon Pinpoint analytics.</p> <note> <p>Cognito User Pools only supports sending events to Amazon Pinpoint projects in the US East (N. Virginia) us-east-1 Region, regardless of the region in which the user pool resides.</p> </note> */
		AnalyticsMetadata?: AnalyticsMetadataType;

		/**Contextual data such as the user's device fingerprint, IP address, or location used for evaluating the risk of an unexpected event by Amazon Cognito advanced security. */
		UserContextData?: UserContextDataType;
		ClientMetadata?: ClientMetadataType;
	}

	export interface CreateGroupResponse {

		/**The group type. */
		Group?: GroupType;
	}

	export interface CreateGroupRequest {
		GroupName: string;
		UserPoolId: string;
		Description?: string;
		RoleArn?: string;
		Precedence?: number;
	}

	export interface CreateIdentityProviderResponse {

		/**A container for information about an identity provider. */
		IdentityProvider: IdentityProviderType;
	}

	export interface CreateIdentityProviderRequest {
		UserPoolId: string;
		ProviderName: string;
		ProviderType: CreateIdentityProviderRequestProviderType;
		ProviderDetails: ProviderDetailsType;
		AttributeMapping?: AttributeMappingType;
		IdpIdentifiers?: Array<IdpIdentifierType>;
	}

	export enum CreateIdentityProviderRequestProviderType { SAML = 0, Facebook = 1, Google = 2, LoginWithAmazon = 3, SignInWithApple = 4, OIDC = 5 }

	export interface CreateResourceServerResponse {

		/**A container for information about a resource server for a user pool. */
		ResourceServer: ResourceServerType;
	}

	export interface CreateResourceServerRequest {
		UserPoolId: string;
		Identifier: string;
		Name: string;
		Scopes?: Array<ResourceServerScopeType>;
	}


	/**Represents the response from the server to the request to create the user import job. */
	export interface CreateUserImportJobResponse {

		/**The user import job type. */
		UserImportJob?: UserImportJobType;
	}


	/**Represents the request to create the user import job. */
	export interface CreateUserImportJobRequest {
		JobName: string;
		UserPoolId: string;
		CloudWatchLogsRoleArn: string;
	}


	/**Represents the response from the server for the request to create a user pool. */
	export interface CreateUserPoolResponse {

		/**A container for information about the user pool. */
		UserPool?: UserPoolType;
	}


	/**Represents the request to create a user pool. */
	export interface CreateUserPoolRequest {
		PoolName: string;

		/**The policy associated with a user pool. */
		Policies?: UserPoolPolicyType;

		/**Specifies the configuration for AWS Lambda triggers. */
		LambdaConfig?: LambdaConfigType;
		AutoVerifiedAttributes?: Array<VerifiedAttributeType>;
		AliasAttributes?: Array<AliasAttributeType>;
		UsernameAttributes?: Array<UsernameAttributeType>;
		SmsVerificationMessage?: string;
		EmailVerificationMessage?: string;
		EmailVerificationSubject?: string;

		/**The template for verification messages. */
		VerificationMessageTemplate?: VerificationMessageTemplateType;
		SmsAuthenticationMessage?: string;
		MfaConfiguration?: CreateUserPoolRequestMfaConfiguration;

		/**The configuration for the user pool's device tracking. */
		DeviceConfiguration?: DeviceConfigurationType;

		/**The email configuration type. */
		EmailConfiguration?: EmailConfigurationType;

		/**The SMS configuration type that includes the settings the Cognito User Pool needs to call for the Amazon SNS service to send an SMS message from your AWS account. The Cognito User Pool makes the request to the Amazon SNS Service by using an AWS IAM role that you provide for your AWS account. */
		SmsConfiguration?: SmsConfigurationType;
		UserPoolTags?: UserPoolTagsType;

		/**The configuration for creating a new user profile. */
		AdminCreateUserConfig?: AdminCreateUserConfigType;
		Schema?: Array<SchemaAttributeType>;

		/**The user pool add-ons type. */
		UserPoolAddOns?: UserPoolAddOnsType;

		/**The username configuration type. */
		UsernameConfiguration?: UsernameConfigurationType;

		/**The data type for <code>AccountRecoverySetting</code>. */
		AccountRecoverySetting?: AccountRecoverySettingType;
	}

	export enum CreateUserPoolRequestMfaConfiguration { OFF = 0, ON = 1, OPTIONAL = 2 }


	/**Represents the response from the server to create a user pool client. */
	export interface CreateUserPoolClientResponse {

		/**Contains information about a user pool client. */
		UserPoolClient?: UserPoolClientType;
	}


	/**Represents the request to create a user pool client. */
	export interface CreateUserPoolClientRequest {
		UserPoolId: string;
		ClientName: string;
		GenerateSecret?: boolean;
		RefreshTokenValidity?: number;
		ReadAttributes?: Array<ClientPermissionType>;
		WriteAttributes?: Array<ClientPermissionType>;
		ExplicitAuthFlows?: Array<ExplicitAuthFlowsType>;
		SupportedIdentityProviders?: Array<ProviderNameType>;
		CallbackURLs?: Array<RedirectUrlType>;
		LogoutURLs?: Array<RedirectUrlType>;
		DefaultRedirectURI?: string;
		AllowedOAuthFlows?: Array<OAuthFlowType>;
		AllowedOAuthScopes?: Array<ScopeType>;
		AllowedOAuthFlowsUserPoolClient?: boolean;

		/**<p>The Amazon Pinpoint analytics configuration for collecting metrics for a user pool.</p> <note> <p>Cognito User Pools only supports sending events to Amazon Pinpoint projects in the US East (N. Virginia) us-east-1 Region, regardless of the region in which the user pool resides.</p> </note> */
		AnalyticsConfiguration?: AnalyticsConfigurationType;
		PreventUserExistenceErrors?: CreateUserPoolClientRequestPreventUserExistenceErrors;
	}

	export enum CreateUserPoolClientRequestPreventUserExistenceErrors { LEGACY = 0, ENABLED = 1 }

	export interface CreateUserPoolDomainResponse {
		CloudFrontDomain?: string;
	}

	export interface CreateUserPoolDomainRequest {
		Domain: string;
		UserPoolId: string;

		/**The configuration for a custom domain that hosts the sign-up and sign-in webpages for your application. */
		CustomDomainConfig?: CustomDomainConfigType;
	}

	export interface DeleteGroupRequest {
		GroupName: string;
		UserPoolId: string;
	}

	export interface DeleteIdentityProviderRequest {
		UserPoolId: string;
		ProviderName: string;
	}

	export interface DeleteResourceServerRequest {
		UserPoolId: string;
		Identifier: string;
	}


	/**Represents the request to delete a user. */
	export interface DeleteUserRequest {
		AccessToken: string;
	}


	/**Represents the request to delete user attributes. */
	export interface DeleteUserAttributesRequest {
		UserAttributeNames: Array<AttributeNameType>;
		AccessToken: string;
	}


	/**Represents the request to delete a user pool. */
	export interface DeleteUserPoolRequest {
		UserPoolId: string;
	}


	/**Represents the request to delete a user pool client. */
	export interface DeleteUserPoolClientRequest {
		UserPoolId: string;
		ClientId: string;
	}

	export interface DeleteUserPoolDomainRequest {
		Domain: string;
		UserPoolId: string;
	}

	export interface DescribeIdentityProviderResponse {

		/**A container for information about an identity provider. */
		IdentityProvider: IdentityProviderType;
	}

	export interface DescribeIdentityProviderRequest {
		UserPoolId: string;
		ProviderName: string;
	}

	export interface DescribeResourceServerResponse {

		/**A container for information about a resource server for a user pool. */
		ResourceServer: ResourceServerType;
	}

	export interface DescribeResourceServerRequest {
		UserPoolId: string;
		Identifier: string;
	}

	export interface DescribeRiskConfigurationResponse {

		/**The risk configuration type. */
		RiskConfiguration: RiskConfigurationType;
	}

	export interface DescribeRiskConfigurationRequest {
		UserPoolId: string;
		ClientId?: string;
	}


	/**Represents the response from the server to the request to describe the user import job. */
	export interface DescribeUserImportJobResponse {

		/**The user import job type. */
		UserImportJob?: UserImportJobType;
	}


	/**Represents the request to describe the user import job. */
	export interface DescribeUserImportJobRequest {
		UserPoolId: string;
		JobId: string;
	}


	/**Represents the response to describe the user pool. */
	export interface DescribeUserPoolResponse {

		/**A container for information about the user pool. */
		UserPool?: UserPoolType;
	}


	/**Represents the request to describe the user pool. */
	export interface DescribeUserPoolRequest {
		UserPoolId: string;
	}


	/**Represents the response from the server from a request to describe the user pool client. */
	export interface DescribeUserPoolClientResponse {

		/**Contains information about a user pool client. */
		UserPoolClient?: UserPoolClientType;
	}


	/**Represents the request to describe a user pool client. */
	export interface DescribeUserPoolClientRequest {
		UserPoolId: string;
		ClientId: string;
	}

	export interface DescribeUserPoolDomainResponse {

		/**A container for information about a domain. */
		DomainDescription?: DomainDescriptionType;
	}

	export interface DescribeUserPoolDomainRequest {
		Domain: string;
	}


	/**Represents the request to forget the device. */
	export interface ForgetDeviceRequest {
		AccessToken?: string;
		DeviceKey: string;
	}


	/**Respresents the response from the server regarding the request to reset a password. */
	export interface ForgotPasswordResponse {

		/**The code delivery details being returned from the server. */
		CodeDeliveryDetails?: CodeDeliveryDetailsType;
	}


	/**Represents the request to reset a user's password. */
	export interface ForgotPasswordRequest {
		ClientId: string;
		SecretHash?: string;

		/**Contextual data such as the user's device fingerprint, IP address, or location used for evaluating the risk of an unexpected event by Amazon Cognito advanced security. */
		UserContextData?: UserContextDataType;
		Username: string;

		/**<p>An Amazon Pinpoint analytics endpoint.</p> <p>An endpoint uniquely identifies a mobile device, email address, or phone number that can receive messages from Amazon Pinpoint analytics.</p> <note> <p>Cognito User Pools only supports sending events to Amazon Pinpoint projects in the US East (N. Virginia) us-east-1 Region, regardless of the region in which the user pool resides.</p> </note> */
		AnalyticsMetadata?: AnalyticsMetadataType;
		ClientMetadata?: ClientMetadataType;
	}


	/**Represents the response from the server to the request to get the header information for the .csv file for the user import job. */
	export interface GetCSVHeaderResponse {
		UserPoolId?: string;
		CSVHeader?: Array<StringType>;
	}


	/**Represents the request to get the header information for the .csv file for the user import job. */
	export interface GetCSVHeaderRequest {
		UserPoolId: string;
	}


	/**Gets the device response. */
	export interface GetDeviceResponse {

		/**The device type. */
		Device: DeviceType;
	}


	/**Represents the request to get the device. */
	export interface GetDeviceRequest {
		DeviceKey: string;
		AccessToken?: string;
	}

	export interface GetGroupResponse {

		/**The group type. */
		Group?: GroupType;
	}

	export interface GetGroupRequest {
		GroupName: string;
		UserPoolId: string;
	}

	export interface GetIdentityProviderByIdentifierResponse {

		/**A container for information about an identity provider. */
		IdentityProvider: IdentityProviderType;
	}

	export interface GetIdentityProviderByIdentifierRequest {
		UserPoolId: string;
		IdpIdentifier: string;
	}


	/**Response from Cognito for a signing certificate request. */
	export interface GetSigningCertificateResponse {
		Certificate?: string;
	}


	/**Request to get a signing certificate from Cognito. */
	export interface GetSigningCertificateRequest {
		UserPoolId: string;
	}

	export interface GetUICustomizationResponse {

		/**A container for the UI customization information for a user pool's built-in app UI. */
		UICustomization: UICustomizationType;
	}

	export interface GetUICustomizationRequest {
		UserPoolId: string;
		ClientId?: string;
	}


	/**Represents the response from the server from the request to get information about the user. */
	export interface GetUserResponse {
		Username: string;
		UserAttributes: Array<AttributeType>;
		MFAOptions?: Array<MFAOptionType>;
		PreferredMfaSetting?: string;
		UserMFASettingList?: Array<StringType>;
	}


	/**Represents the request to get information about the user. */
	export interface GetUserRequest {
		AccessToken: string;
	}


	/**The verification code response returned by the server response to get the user attribute verification code. */
	export interface GetUserAttributeVerificationCodeResponse {

		/**The code delivery details being returned from the server. */
		CodeDeliveryDetails?: CodeDeliveryDetailsType;
	}


	/**Represents the request to get user attribute verification. */
	export interface GetUserAttributeVerificationCodeRequest {
		AccessToken: string;
		AttributeName: string;
		ClientMetadata?: ClientMetadataType;
	}

	export interface GetUserPoolMfaConfigResponse {

		/**The SMS text message multi-factor authentication (MFA) configuration type. */
		SmsMfaConfiguration?: SmsMfaConfigType;

		/**The type used for enabling software token MFA at the user pool level. */
		SoftwareTokenMfaConfiguration?: SoftwareTokenMfaConfigType;
		MfaConfiguration?: GetUserPoolMfaConfigResponseMfaConfiguration;
	}

	export enum GetUserPoolMfaConfigResponseMfaConfiguration { OFF = 0, ON = 1, OPTIONAL = 2 }

	export interface GetUserPoolMfaConfigRequest {
		UserPoolId: string;
	}


	/**Represents the request to sign out all devices. */
	export interface GlobalSignOutRequest {
		AccessToken: string;
	}


	/**Initiates the authentication response. */
	export interface InitiateAuthResponse {
		ChallengeName?: InitiateAuthResponseChallengeName;
		Session?: string;
		ChallengeParameters?: ChallengeParametersType;

		/**The authentication result. */
		AuthenticationResult?: AuthenticationResultType;
	}

	export enum InitiateAuthResponseChallengeName { SMS_MFA = 0, SOFTWARE_TOKEN_MFA = 1, SELECT_MFA_TYPE = 2, MFA_SETUP = 3, PASSWORD_VERIFIER = 4, CUSTOM_CHALLENGE = 5, DEVICE_SRP_AUTH = 6, DEVICE_PASSWORD_VERIFIER = 7, ADMIN_NO_SRP_AUTH = 8, NEW_PASSWORD_REQUIRED = 9 }


	/**Initiates the authentication request. */
	export interface InitiateAuthRequest {
		AuthFlow: InitiateAuthRequestAuthFlow;
		AuthParameters?: AuthParametersType;
		ClientMetadata?: ClientMetadataType;
		ClientId: string;

		/**<p>An Amazon Pinpoint analytics endpoint.</p> <p>An endpoint uniquely identifies a mobile device, email address, or phone number that can receive messages from Amazon Pinpoint analytics.</p> <note> <p>Cognito User Pools only supports sending events to Amazon Pinpoint projects in the US East (N. Virginia) us-east-1 Region, regardless of the region in which the user pool resides.</p> </note> */
		AnalyticsMetadata?: AnalyticsMetadataType;

		/**Contextual data such as the user's device fingerprint, IP address, or location used for evaluating the risk of an unexpected event by Amazon Cognito advanced security. */
		UserContextData?: UserContextDataType;
	}

	export enum InitiateAuthRequestAuthFlow { USER_SRP_AUTH = 0, REFRESH_TOKEN_AUTH = 1, REFRESH_TOKEN = 2, CUSTOM_AUTH = 3, ADMIN_NO_SRP_AUTH = 4, USER_PASSWORD_AUTH = 5, ADMIN_USER_PASSWORD_AUTH = 6 }


	/**Represents the response to list devices. */
	export interface ListDevicesResponse {
		Devices?: Array<DeviceType>;
		PaginationToken?: string;
	}


	/**Represents the request to list the devices. */
	export interface ListDevicesRequest {
		AccessToken: string;
		Limit?: number;
		PaginationToken?: string;
	}

	export interface ListGroupsResponse {
		Groups?: Array<GroupType>;
		NextToken?: string;
	}

	export interface ListGroupsRequest {
		UserPoolId: string;
		Limit?: number;
		NextToken?: string;
	}

	export interface ListIdentityProvidersResponse {
		Providers: Array<ProviderDescription>;
		NextToken?: string;
	}

	export interface ListIdentityProvidersRequest {
		UserPoolId: string;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface ListResourceServersResponse {
		ResourceServers: Array<ResourceServerType>;
		NextToken?: string;
	}

	export interface ListResourceServersRequest {
		UserPoolId: string;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface ListTagsForResourceResponse {
		Tags?: UserPoolTagsType;
	}

	export interface ListTagsForResourceRequest {
		ResourceArn: string;
	}


	/**Represents the response from the server to the request to list the user import jobs. */
	export interface ListUserImportJobsResponse {
		UserImportJobs?: Array<UserImportJobType>;
		PaginationToken?: string;
	}


	/**Represents the request to list the user import jobs. */
	export interface ListUserImportJobsRequest {
		UserPoolId: string;
		MaxResults: number;
		PaginationToken?: string;
	}


	/**Represents the response from the server that lists user pool clients. */
	export interface ListUserPoolClientsResponse {
		UserPoolClients?: Array<UserPoolClientDescription>;
		NextToken?: string;
	}


	/**Represents the request to list the user pool clients. */
	export interface ListUserPoolClientsRequest {
		UserPoolId: string;
		MaxResults?: number;
		NextToken?: string;
	}


	/**Represents the response to list user pools. */
	export interface ListUserPoolsResponse {
		UserPools?: Array<UserPoolDescriptionType>;
		NextToken?: string;
	}


	/**Represents the request to list user pools. */
	export interface ListUserPoolsRequest {
		NextToken?: string;
		MaxResults: number;
	}


	/**The response from the request to list users. */
	export interface ListUsersResponse {
		Users?: Array<UserType>;
		PaginationToken?: string;
	}


	/**Represents the request to list users. */
	export interface ListUsersRequest {
		UserPoolId: string;
		AttributesToGet?: Array<AttributeNameType>;
		Limit?: number;
		PaginationToken?: string;
		Filter?: string;
	}

	export interface ListUsersInGroupResponse {
		Users?: Array<UserType>;
		NextToken?: string;
	}

	export interface ListUsersInGroupRequest {
		UserPoolId: string;
		GroupName: string;
		Limit?: number;
		NextToken?: string;
	}


	/**The response from the server when the Amazon Cognito Your User Pools service makes the request to resend a confirmation code. */
	export interface ResendConfirmationCodeResponse {

		/**The code delivery details being returned from the server. */
		CodeDeliveryDetails?: CodeDeliveryDetailsType;
	}


	/**Represents the request to resend the confirmation code. */
	export interface ResendConfirmationCodeRequest {
		ClientId: string;
		SecretHash?: string;

		/**Contextual data such as the user's device fingerprint, IP address, or location used for evaluating the risk of an unexpected event by Amazon Cognito advanced security. */
		UserContextData?: UserContextDataType;
		Username: string;

		/**<p>An Amazon Pinpoint analytics endpoint.</p> <p>An endpoint uniquely identifies a mobile device, email address, or phone number that can receive messages from Amazon Pinpoint analytics.</p> <note> <p>Cognito User Pools only supports sending events to Amazon Pinpoint projects in the US East (N. Virginia) us-east-1 Region, regardless of the region in which the user pool resides.</p> </note> */
		AnalyticsMetadata?: AnalyticsMetadataType;
		ClientMetadata?: ClientMetadataType;
	}


	/**The response to respond to the authentication challenge. */
	export interface RespondToAuthChallengeResponse {
		ChallengeName?: RespondToAuthChallengeResponseChallengeName;
		Session?: string;
		ChallengeParameters?: ChallengeParametersType;

		/**The authentication result. */
		AuthenticationResult?: AuthenticationResultType;
	}

	export enum RespondToAuthChallengeResponseChallengeName { SMS_MFA = 0, SOFTWARE_TOKEN_MFA = 1, SELECT_MFA_TYPE = 2, MFA_SETUP = 3, PASSWORD_VERIFIER = 4, CUSTOM_CHALLENGE = 5, DEVICE_SRP_AUTH = 6, DEVICE_PASSWORD_VERIFIER = 7, ADMIN_NO_SRP_AUTH = 8, NEW_PASSWORD_REQUIRED = 9 }


	/**The request to respond to an authentication challenge. */
	export interface RespondToAuthChallengeRequest {
		ClientId: string;
		ChallengeName: RespondToAuthChallengeRequestChallengeName;
		Session?: string;
		ChallengeResponses?: ChallengeResponsesType;

		/**<p>An Amazon Pinpoint analytics endpoint.</p> <p>An endpoint uniquely identifies a mobile device, email address, or phone number that can receive messages from Amazon Pinpoint analytics.</p> <note> <p>Cognito User Pools only supports sending events to Amazon Pinpoint projects in the US East (N. Virginia) us-east-1 Region, regardless of the region in which the user pool resides.</p> </note> */
		AnalyticsMetadata?: AnalyticsMetadataType;

		/**Contextual data such as the user's device fingerprint, IP address, or location used for evaluating the risk of an unexpected event by Amazon Cognito advanced security. */
		UserContextData?: UserContextDataType;
		ClientMetadata?: ClientMetadataType;
	}

	export enum RespondToAuthChallengeRequestChallengeName { SMS_MFA = 0, SOFTWARE_TOKEN_MFA = 1, SELECT_MFA_TYPE = 2, MFA_SETUP = 3, PASSWORD_VERIFIER = 4, CUSTOM_CHALLENGE = 5, DEVICE_SRP_AUTH = 6, DEVICE_PASSWORD_VERIFIER = 7, ADMIN_NO_SRP_AUTH = 8, NEW_PASSWORD_REQUIRED = 9 }

	export interface SetRiskConfigurationResponse {

		/**The risk configuration type. */
		RiskConfiguration: RiskConfigurationType;
	}

	export interface SetRiskConfigurationRequest {
		UserPoolId: string;
		ClientId?: string;

		/**The compromised credentials risk configuration type. */
		CompromisedCredentialsRiskConfiguration?: CompromisedCredentialsRiskConfigurationType;

		/**Configuration for mitigation actions and notification for different levels of risk detected for a potential account takeover. */
		AccountTakeoverRiskConfiguration?: AccountTakeoverRiskConfigurationType;

		/**The type of the configuration to override the risk decision. */
		RiskExceptionConfiguration?: RiskExceptionConfigurationType;
	}

	export interface SetUICustomizationResponse {

		/**A container for the UI customization information for a user pool's built-in app UI. */
		UICustomization: UICustomizationType;
	}

	export interface SetUICustomizationRequest {
		UserPoolId: string;
		ClientId?: string;
		CSS?: string;
		ImageFile?: string;
	}

	export interface SetUserMFAPreferenceRequest {

		/**The type used for enabling SMS MFA at the user level. */
		SMSMfaSettings?: SMSMfaSettingsType;

		/**The type used for enabling software token MFA at the user level. */
		SoftwareTokenMfaSettings?: SoftwareTokenMfaSettingsType;
		AccessToken: string;
	}

	export interface SetUserPoolMfaConfigResponse {

		/**The SMS text message multi-factor authentication (MFA) configuration type. */
		SmsMfaConfiguration?: SmsMfaConfigType;

		/**The type used for enabling software token MFA at the user pool level. */
		SoftwareTokenMfaConfiguration?: SoftwareTokenMfaConfigType;
		MfaConfiguration?: SetUserPoolMfaConfigResponseMfaConfiguration;
	}

	export enum SetUserPoolMfaConfigResponseMfaConfiguration { OFF = 0, ON = 1, OPTIONAL = 2 }

	export interface SetUserPoolMfaConfigRequest {
		UserPoolId: string;

		/**The SMS text message multi-factor authentication (MFA) configuration type. */
		SmsMfaConfiguration?: SmsMfaConfigType;

		/**The type used for enabling software token MFA at the user pool level. */
		SoftwareTokenMfaConfiguration?: SoftwareTokenMfaConfigType;
		MfaConfiguration?: SetUserPoolMfaConfigRequestMfaConfiguration;
	}

	export enum SetUserPoolMfaConfigRequestMfaConfiguration { OFF = 0, ON = 1, OPTIONAL = 2 }


	/**Represents the request to set user settings. */
	export interface SetUserSettingsRequest {
		AccessToken: string;
		MFAOptions: Array<MFAOptionType>;
	}


	/**The response from the server for a registration request. */
	export interface SignUpResponse {
		UserConfirmed: boolean;

		/**The code delivery details being returned from the server. */
		CodeDeliveryDetails?: CodeDeliveryDetailsType;
		UserSub: string;
	}


	/**Represents the request to register a user. */
	export interface SignUpRequest {
		ClientId: string;
		SecretHash?: string;
		Username: string;
		Password: string;
		UserAttributes?: Array<AttributeType>;
		ValidationData?: Array<AttributeType>;

		/**<p>An Amazon Pinpoint analytics endpoint.</p> <p>An endpoint uniquely identifies a mobile device, email address, or phone number that can receive messages from Amazon Pinpoint analytics.</p> <note> <p>Cognito User Pools only supports sending events to Amazon Pinpoint projects in the US East (N. Virginia) us-east-1 Region, regardless of the region in which the user pool resides.</p> </note> */
		AnalyticsMetadata?: AnalyticsMetadataType;

		/**Contextual data such as the user's device fingerprint, IP address, or location used for evaluating the risk of an unexpected event by Amazon Cognito advanced security. */
		UserContextData?: UserContextDataType;
		ClientMetadata?: ClientMetadataType;
	}


	/**Represents the response from the server to the request to start the user import job. */
	export interface StartUserImportJobResponse {

		/**The user import job type. */
		UserImportJob?: UserImportJobType;
	}


	/**Represents the request to start the user import job. */
	export interface StartUserImportJobRequest {
		UserPoolId: string;
		JobId: string;
	}


	/**Represents the response from the server to the request to stop the user import job. */
	export interface StopUserImportJobResponse {

		/**The user import job type. */
		UserImportJob?: UserImportJobType;
	}


	/**Represents the request to stop the user import job. */
	export interface StopUserImportJobRequest {
		UserPoolId: string;
		JobId: string;
	}

	export interface TagResourceRequest {
		ResourceArn: string;
		Tags: UserPoolTagsType;
	}

	export interface UntagResourceRequest {
		ResourceArn: string;
		TagKeys: Array<TagKeysType>;
	}

	export interface UpdateAuthEventFeedbackRequest {
		UserPoolId: string;
		Username: string;
		EventId: string;
		FeedbackToken: string;
		FeedbackValue: UpdateAuthEventFeedbackRequestFeedbackValue;
	}

	export enum UpdateAuthEventFeedbackRequestFeedbackValue { Valid = 0, Invalid = 1 }


	/**Represents the request to update the device status. */
	export interface UpdateDeviceStatusRequest {
		AccessToken: string;
		DeviceKey: string;
		DeviceRememberedStatus?: UpdateDeviceStatusRequestDeviceRememberedStatus;
	}

	export enum UpdateDeviceStatusRequestDeviceRememberedStatus { remembered = 0, not_remembered = 1 }

	export interface UpdateGroupResponse {

		/**The group type. */
		Group?: GroupType;
	}

	export interface UpdateGroupRequest {
		GroupName: string;
		UserPoolId: string;
		Description?: string;
		RoleArn?: string;
		Precedence?: number;
	}

	export interface UpdateIdentityProviderResponse {

		/**A container for information about an identity provider. */
		IdentityProvider: IdentityProviderType;
	}

	export interface UpdateIdentityProviderRequest {
		UserPoolId: string;
		ProviderName: string;
		ProviderDetails?: ProviderDetailsType;
		AttributeMapping?: AttributeMappingType;
		IdpIdentifiers?: Array<IdpIdentifierType>;
	}

	export interface UpdateResourceServerResponse {

		/**A container for information about a resource server for a user pool. */
		ResourceServer: ResourceServerType;
	}

	export interface UpdateResourceServerRequest {
		UserPoolId: string;
		Identifier: string;
		Name: string;
		Scopes?: Array<ResourceServerScopeType>;
	}


	/**Represents the response from the server for the request to update user attributes. */
	export interface UpdateUserAttributesResponse {
		CodeDeliveryDetailsList?: Array<CodeDeliveryDetailsType>;
	}


	/**Represents the request to update user attributes. */
	export interface UpdateUserAttributesRequest {
		UserAttributes: Array<AttributeType>;
		AccessToken: string;
		ClientMetadata?: ClientMetadataType;
	}


	/**Represents the request to update the user pool. */
	export interface UpdateUserPoolRequest {
		UserPoolId: string;

		/**The policy associated with a user pool. */
		Policies?: UserPoolPolicyType;

		/**Specifies the configuration for AWS Lambda triggers. */
		LambdaConfig?: LambdaConfigType;
		AutoVerifiedAttributes?: Array<VerifiedAttributeType>;
		SmsVerificationMessage?: string;
		EmailVerificationMessage?: string;
		EmailVerificationSubject?: string;

		/**The template for verification messages. */
		VerificationMessageTemplate?: VerificationMessageTemplateType;
		SmsAuthenticationMessage?: string;
		MfaConfiguration?: UpdateUserPoolRequestMfaConfiguration;

		/**The configuration for the user pool's device tracking. */
		DeviceConfiguration?: DeviceConfigurationType;

		/**The email configuration type. */
		EmailConfiguration?: EmailConfigurationType;

		/**The SMS configuration type that includes the settings the Cognito User Pool needs to call for the Amazon SNS service to send an SMS message from your AWS account. The Cognito User Pool makes the request to the Amazon SNS Service by using an AWS IAM role that you provide for your AWS account. */
		SmsConfiguration?: SmsConfigurationType;
		UserPoolTags?: UserPoolTagsType;

		/**The configuration for creating a new user profile. */
		AdminCreateUserConfig?: AdminCreateUserConfigType;

		/**The user pool add-ons type. */
		UserPoolAddOns?: UserPoolAddOnsType;

		/**The data type for <code>AccountRecoverySetting</code>. */
		AccountRecoverySetting?: AccountRecoverySettingType;
	}

	export enum UpdateUserPoolRequestMfaConfiguration { OFF = 0, ON = 1, OPTIONAL = 2 }


	/**Represents the response from the server to the request to update the user pool client. */
	export interface UpdateUserPoolClientResponse {

		/**Contains information about a user pool client. */
		UserPoolClient?: UserPoolClientType;
	}


	/**Represents the request to update the user pool client. */
	export interface UpdateUserPoolClientRequest {
		UserPoolId: string;
		ClientId: string;
		ClientName?: string;
		RefreshTokenValidity?: number;
		ReadAttributes?: Array<ClientPermissionType>;
		WriteAttributes?: Array<ClientPermissionType>;
		ExplicitAuthFlows?: Array<ExplicitAuthFlowsType>;
		SupportedIdentityProviders?: Array<ProviderNameType>;
		CallbackURLs?: Array<RedirectUrlType>;
		LogoutURLs?: Array<RedirectUrlType>;
		DefaultRedirectURI?: string;
		AllowedOAuthFlows?: Array<OAuthFlowType>;
		AllowedOAuthScopes?: Array<ScopeType>;
		AllowedOAuthFlowsUserPoolClient?: boolean;

		/**<p>The Amazon Pinpoint analytics configuration for collecting metrics for a user pool.</p> <note> <p>Cognito User Pools only supports sending events to Amazon Pinpoint projects in the US East (N. Virginia) us-east-1 Region, regardless of the region in which the user pool resides.</p> </note> */
		AnalyticsConfiguration?: AnalyticsConfigurationType;
		PreventUserExistenceErrors?: UpdateUserPoolClientRequestPreventUserExistenceErrors;
	}

	export enum UpdateUserPoolClientRequestPreventUserExistenceErrors { LEGACY = 0, ENABLED = 1 }


	/**The UpdateUserPoolDomain response output. */
	export interface UpdateUserPoolDomainResponse {
		CloudFrontDomain?: string;
	}


	/**The UpdateUserPoolDomain request input. */
	export interface UpdateUserPoolDomainRequest {
		Domain: string;
		UserPoolId: string;

		/**The configuration for a custom domain that hosts the sign-up and sign-in webpages for your application. */
		CustomDomainConfig: CustomDomainConfigType;
	}

	export interface VerifySoftwareTokenResponse {
		Status?: VerifySoftwareTokenResponseStatus;
		Session?: string;
	}

	export enum VerifySoftwareTokenResponseStatus { SUCCESS = 0, ERROR = 1 }

	export interface VerifySoftwareTokenRequest {
		AccessToken?: string;
		Session?: string;
		UserCode: string;
		FriendlyDeviceName?: string;
	}


	/**Represents the request to verify user attributes. */
	export interface VerifyUserAttributeRequest {
		AccessToken: string;
		AttributeName: string;
		Code: string;
	}


	/**The data type for <code>AccountRecoverySetting</code>. */
	export interface AccountRecoverySettingType {
		RecoveryMechanisms?: Array<RecoveryOptionType>;
	}

	export enum AccountTakeoverEventActionType { BLOCK = 0, MFA_IF_CONFIGURED = 1, MFA_REQUIRED = 2, NO_ACTION = 3 }


	/**Account takeover action type. */
	export interface AccountTakeoverActionType {
		Notify: boolean;
		EventAction: AccountTakeoverActionTypeEventAction;
	}

	export enum AccountTakeoverActionTypeEventAction { BLOCK = 0, MFA_IF_CONFIGURED = 1, MFA_REQUIRED = 2, NO_ACTION = 3 }


	/**Account takeover actions type. */
	export interface AccountTakeoverActionsType {

		/**Account takeover action type. */
		LowAction?: AccountTakeoverActionType;

		/**Account takeover action type. */
		MediumAction?: AccountTakeoverActionType;

		/**Account takeover action type. */
		HighAction?: AccountTakeoverActionType;
	}


	/**The notify configuration type. */
	export interface NotifyConfigurationType {
		From?: string;
		ReplyTo?: string;
		SourceArn: string;

		/**The notify email type. */
		BlockEmail?: NotifyEmailType;

		/**The notify email type. */
		NoActionEmail?: NotifyEmailType;

		/**The notify email type. */
		MfaEmail?: NotifyEmailType;
	}


	/**Configuration for mitigation actions and notification for different levels of risk detected for a potential account takeover. */
	export interface AccountTakeoverRiskConfigurationType {

		/**The notify configuration type. */
		NotifyConfiguration?: NotifyConfigurationType;

		/**Account takeover actions type. */
		Actions: AccountTakeoverActionsType;
	}


	/**The message template structure. */
	export interface MessageTemplateType {
		SMSMessage?: string;
		EmailMessage?: string;
		EmailSubject?: string;
	}


	/**The configuration for creating a new user profile. */
	export interface AdminCreateUserConfigType {
		AllowAdminCreateUserOnly?: boolean;
		UnusedAccountValidityDays?: number;

		/**The message template structure. */
		InviteMessageTemplate?: MessageTemplateType;
	}

	export enum MessageActionType { RESEND = 0, SUPPRESS = 1 }


	/**The user type. */
	export interface UserType {
		Username?: string;
		Attributes?: Array<AttributeType>;
		UserCreateDate?: Date;
		UserLastModifiedDate?: Date;
		Enabled?: boolean;
		UserStatus?: UserTypeUserStatus;
		MFAOptions?: Array<MFAOptionType>;
	}

	export enum UserTypeUserStatus { UNCONFIRMED = 0, CONFIRMED = 1, ARCHIVED = 2, COMPROMISED = 3, UNKNOWN = 4, RESET_REQUIRED = 5, FORCE_CHANGE_PASSWORD = 6 }


	/**A container for information about an identity provider for a user pool. */
	export interface ProviderUserIdentifierType {
		ProviderName?: string;
		ProviderAttributeName?: string;
		ProviderAttributeValue?: string;
	}


	/**The device type. */
	export interface DeviceType {
		DeviceKey?: string;
		DeviceAttributes?: Array<AttributeType>;
		DeviceCreateDate?: Date;
		DeviceLastModifiedDate?: Date;
		DeviceLastAuthenticatedDate?: Date;
	}

	export enum UserStatusType { UNCONFIRMED = 0, CONFIRMED = 1, ARCHIVED = 2, COMPROMISED = 3, UNKNOWN = 4, RESET_REQUIRED = 5, FORCE_CHANGE_PASSWORD = 6 }

	export enum AuthFlowType { USER_SRP_AUTH = 0, REFRESH_TOKEN_AUTH = 1, REFRESH_TOKEN = 2, CUSTOM_AUTH = 3, ADMIN_NO_SRP_AUTH = 4, USER_PASSWORD_AUTH = 5, ADMIN_USER_PASSWORD_AUTH = 6 }


	/**<p>An Amazon Pinpoint analytics endpoint.</p> <p>An endpoint uniquely identifies a mobile device, email address, or phone number that can receive messages from Amazon Pinpoint analytics.</p> <note> <p>Cognito User Pools only supports sending events to Amazon Pinpoint projects in the US East (N. Virginia) us-east-1 Region, regardless of the region in which the user pool resides.</p> </note> */
	export interface AnalyticsMetadataType {
		AnalyticsEndpointId?: string;
	}


	/**Contextual user data type used for evaluating the risk of an unexpected event by Amazon Cognito advanced security. */
	export interface ContextDataType {
		IpAddress: string;
		ServerName: string;
		ServerPath: string;
		HttpHeaders: Array<HttpHeader>;
		EncodedData?: string;
	}

	export enum ChallengeNameType { SMS_MFA = 0, SOFTWARE_TOKEN_MFA = 1, SELECT_MFA_TYPE = 2, MFA_SETUP = 3, PASSWORD_VERIFIER = 4, CUSTOM_CHALLENGE = 5, DEVICE_SRP_AUTH = 6, DEVICE_PASSWORD_VERIFIER = 7, ADMIN_NO_SRP_AUTH = 8, NEW_PASSWORD_REQUIRED = 9 }


	/**The authentication result. */
	export interface AuthenticationResultType {
		AccessToken?: string;
		ExpiresIn?: number;
		TokenType?: string;
		RefreshToken?: string;
		IdToken?: string;

		/**The new device metadata type. */
		NewDeviceMetadata?: NewDeviceMetadataType;
	}


	/**The type used for enabling SMS MFA at the user level. */
	export interface SMSMfaSettingsType {
		Enabled?: boolean;
		PreferredMfa?: boolean;
	}


	/**The type used for enabling software token MFA at the user level. */
	export interface SoftwareTokenMfaSettingsType {
		Enabled?: boolean;
		PreferredMfa?: boolean;
	}

	export enum FeedbackValueType { Valid = 0, Invalid = 1 }

	export enum DeviceRememberedStatusType { remembered = 0, not_remembered = 1 }

	export enum AdvancedSecurityModeType { OFF = 0, AUDIT = 1, ENFORCED = 2 }

	export enum AliasAttributeType { phone_number = 0, email = 1, preferred_username = 2 }


	/**<p>The Amazon Pinpoint analytics configuration for collecting metrics for a user pool.</p> <note> <p>Cognito User Pools only supports sending events to Amazon Pinpoint projects in the US East (N. Virginia) us-east-1 Region, regardless of the region in which the user pool resides.</p> </note> */
	export interface AnalyticsConfigurationType {
		ApplicationId: string;
		RoleArn: string;
		ExternalId: string;
		UserDataShared?: boolean;
	}

	export enum AttributeDataType { String = 0, Number = 1, DateTime = 2, Boolean = 3 }


	/**Specifies whether the attribute is standard or custom. */
	export interface AttributeType {
		Name: string;
		Value?: string;
	}

	export enum EventType { SignIn = 0, SignUp = 1, ForgotPassword = 2 }

	export enum EventResponseType { Success = 0, Failure = 1 }


	/**The event risk type. */
	export interface EventRiskType {
		RiskDecision?: EventRiskTypeRiskDecision;
		RiskLevel?: EventRiskTypeRiskLevel;
		CompromisedCredentialsDetected?: boolean;
	}

	export enum EventRiskTypeRiskDecision { NoRisk = 0, AccountTakeover = 1, Block = 2 }

	export enum EventRiskTypeRiskLevel { Low = 0, Medium = 1, High = 2 }


	/**Specifies the user context data captured at the time of an event request. */
	export interface EventContextDataType {
		IpAddress?: string;
		DeviceName?: string;
		Timezone?: string;
		City?: string;
		Country?: string;
	}


	/**Specifies the event feedback type. */
	export interface EventFeedbackType {
		FeedbackValue: EventFeedbackTypeFeedbackValue;
		Provider: string;
		FeedbackDate?: Date;
	}

	export enum EventFeedbackTypeFeedbackValue { Valid = 0, Invalid = 1 }


	/**The authentication event type. */
	export interface AuthEventType {
		EventId?: string;
		EventType?: AuthEventTypeEventType;
		CreationDate?: Date;
		EventResponse?: AuthEventTypeEventResponse;

		/**The event risk type. */
		EventRisk?: EventRiskType;
		ChallengeResponses?: Array<ChallengeResponseType>;

		/**Specifies the user context data captured at the time of an event request. */
		EventContextData?: EventContextDataType;

		/**Specifies the event feedback type. */
		EventFeedback?: EventFeedbackType;
	}

	export enum AuthEventTypeEventType { SignIn = 0, SignUp = 1, ForgotPassword = 2 }

	export enum AuthEventTypeEventResponse { Success = 0, Failure = 1 }


	/**The new device metadata type. */
	export interface NewDeviceMetadataType {
		DeviceKey?: string;
		DeviceGroupKey?: string;
	}

	export enum ChallengeName { Password = 0, Mfa = 1 }

	export enum ChallengeResponse { Success = 0, Failure = 1 }


	/**The challenge response type. */
	export interface ChallengeResponseType {
		ChallengeName?: ChallengeResponseTypeChallengeName;
		ChallengeResponse?: ChallengeResponseTypeChallengeResponse;
	}

	export enum ChallengeResponseTypeChallengeName { Password = 0, Mfa = 1 }

	export enum ChallengeResponseTypeChallengeResponse { Success = 0, Failure = 1 }


	/**The code delivery details being returned from the server. */
	export interface CodeDeliveryDetailsType {
		Destination?: string;
		DeliveryMedium?: CodeDeliveryDetailsTypeDeliveryMedium;
		AttributeName?: string;
	}

	export enum CodeDeliveryDetailsTypeDeliveryMedium { SMS = 0, EMAIL = 1 }

	export enum DeliveryMediumType { SMS = 0, EMAIL = 1 }

	export enum CompromisedCredentialsEventActionType { BLOCK = 0, NO_ACTION = 1 }


	/**The compromised credentials actions type */
	export interface CompromisedCredentialsActionsType {
		EventAction: CompromisedCredentialsActionsTypeEventAction;
	}

	export enum CompromisedCredentialsActionsTypeEventAction { BLOCK = 0, NO_ACTION = 1 }


	/**The compromised credentials risk configuration type. */
	export interface CompromisedCredentialsRiskConfigurationType {
		EventFilter?: Array<EventFilterType>;

		/**The compromised credentials actions type */
		Actions: CompromisedCredentialsActionsType;
	}


	/**The device verifier against which it will be authenticated. */
	export interface DeviceSecretVerifierConfigType {
		PasswordVerifier?: string;
		Salt?: string;
	}


	/**Contextual data such as the user's device fingerprint, IP address, or location used for evaluating the risk of an unexpected event by Amazon Cognito advanced security. */
	export interface UserContextDataType {
		EncodedData?: string;
	}


	/**The group type. */
	export interface GroupType {
		GroupName?: string;
		UserPoolId?: string;
		Description?: string;
		RoleArn?: string;
		Precedence?: number;
		LastModifiedDate?: Date;
		CreationDate?: Date;
	}

	export enum IdentityProviderTypeType { SAML = 0, Facebook = 1, Google = 2, LoginWithAmazon = 3, SignInWithApple = 4, OIDC = 5 }


	/**A container for information about an identity provider. */
	export interface IdentityProviderType {
		UserPoolId?: string;
		ProviderName?: string;
		ProviderType?: IdentityProviderTypeProviderType;
		ProviderDetails?: ProviderDetailsType;
		AttributeMapping?: AttributeMappingType;
		IdpIdentifiers?: Array<IdpIdentifierType>;
		LastModifiedDate?: Date;
		CreationDate?: Date;
	}

	export enum IdentityProviderTypeProviderType { SAML = 0, Facebook = 1, Google = 2, LoginWithAmazon = 3, SignInWithApple = 4, OIDC = 5 }


	/**A container for information about a resource server for a user pool. */
	export interface ResourceServerType {
		UserPoolId?: string;
		Identifier?: string;
		Name?: string;
		Scopes?: Array<ResourceServerScopeType>;
	}


	/**The user import job type. */
	export interface UserImportJobType {
		JobName?: string;
		JobId?: string;
		UserPoolId?: string;
		PreSignedUrl?: string;
		CreationDate?: Date;
		StartDate?: Date;
		CompletionDate?: Date;
		Status?: UserImportJobTypeStatus;
		CloudWatchLogsRoleArn?: string;
		ImportedUsers?: number;
		SkippedUsers?: number;
		FailedUsers?: number;
		CompletionMessage?: string;
	}

	export enum UserImportJobTypeStatus { Created = 0, Pending = 1, InProgress = 2, Stopping = 3, Expired = 4, Stopped = 5, Failed = 6, Succeeded = 7 }

	export enum PreventUserExistenceErrorTypes { LEGACY = 0, ENABLED = 1 }


	/**Contains information about a user pool client. */
	export interface UserPoolClientType {
		UserPoolId?: string;
		ClientName?: string;
		ClientId?: string;
		ClientSecret?: string;
		LastModifiedDate?: Date;
		CreationDate?: Date;
		RefreshTokenValidity?: number;
		ReadAttributes?: Array<ClientPermissionType>;
		WriteAttributes?: Array<ClientPermissionType>;
		ExplicitAuthFlows?: Array<ExplicitAuthFlowsType>;
		SupportedIdentityProviders?: Array<ProviderNameType>;
		CallbackURLs?: Array<RedirectUrlType>;
		LogoutURLs?: Array<RedirectUrlType>;
		DefaultRedirectURI?: string;
		AllowedOAuthFlows?: Array<OAuthFlowType>;
		AllowedOAuthScopes?: Array<ScopeType>;
		AllowedOAuthFlowsUserPoolClient?: boolean;

		/**<p>The Amazon Pinpoint analytics configuration for collecting metrics for a user pool.</p> <note> <p>Cognito User Pools only supports sending events to Amazon Pinpoint projects in the US East (N. Virginia) us-east-1 Region, regardless of the region in which the user pool resides.</p> </note> */
		AnalyticsConfiguration?: AnalyticsConfigurationType;
		PreventUserExistenceErrors?: UserPoolClientTypePreventUserExistenceErrors;
	}

	export enum UserPoolClientTypePreventUserExistenceErrors { LEGACY = 0, ENABLED = 1 }


	/**The configuration for a custom domain that hosts the sign-up and sign-in webpages for your application. */
	export interface CustomDomainConfigType {
		CertificateArn: string;
	}


	/**The policy associated with a user pool. */
	export interface UserPoolPolicyType {

		/**The password policy type. */
		PasswordPolicy?: PasswordPolicyType;
	}


	/**Specifies the configuration for AWS Lambda triggers. */
	export interface LambdaConfigType {
		PreSignUp?: string;
		CustomMessage?: string;
		PostConfirmation?: string;
		PreAuthentication?: string;
		PostAuthentication?: string;
		DefineAuthChallenge?: string;
		CreateAuthChallenge?: string;
		VerifyAuthChallengeResponse?: string;
		PreTokenGeneration?: string;
		UserMigration?: string;
	}


	/**The template for verification messages. */
	export interface VerificationMessageTemplateType {
		SmsMessage?: string;
		EmailMessage?: string;
		EmailSubject?: string;
		EmailMessageByLink?: string;
		EmailSubjectByLink?: string;
		DefaultEmailOption?: VerificationMessageTemplateTypeDefaultEmailOption;
	}

	export enum VerificationMessageTemplateTypeDefaultEmailOption { CONFIRM_WITH_LINK = 0, CONFIRM_WITH_CODE = 1 }

	export enum UserPoolMfaType { OFF = 0, ON = 1, OPTIONAL = 2 }


	/**The configuration for the user pool's device tracking. */
	export interface DeviceConfigurationType {
		ChallengeRequiredOnNewDevice?: boolean;
		DeviceOnlyRememberedOnUserPrompt?: boolean;
	}


	/**The email configuration type. */
	export interface EmailConfigurationType {
		SourceArn?: string;
		ReplyToEmailAddress?: string;
		EmailSendingAccount?: EmailConfigurationTypeEmailSendingAccount;
		From?: string;
		ConfigurationSet?: string;
	}

	export enum EmailConfigurationTypeEmailSendingAccount { COGNITO_DEFAULT = 0, DEVELOPER = 1 }


	/**The SMS configuration type that includes the settings the Cognito User Pool needs to call for the Amazon SNS service to send an SMS message from your AWS account. The Cognito User Pool makes the request to the Amazon SNS Service by using an AWS IAM role that you provide for your AWS account. */
	export interface SmsConfigurationType {
		SnsCallerArn: string;
		ExternalId?: string;
	}


	/**The user pool add-ons type. */
	export interface UserPoolAddOnsType {
		AdvancedSecurityMode: UserPoolAddOnsTypeAdvancedSecurityMode;
	}

	export enum UserPoolAddOnsTypeAdvancedSecurityMode { OFF = 0, AUDIT = 1, ENFORCED = 2 }


	/**The username configuration type.  */
	export interface UsernameConfigurationType {
		CaseSensitive: boolean;
	}


	/**A container for information about the user pool. */
	export interface UserPoolType {
		Id?: string;
		Name?: string;

		/**The policy associated with a user pool. */
		Policies?: UserPoolPolicyType;

		/**Specifies the configuration for AWS Lambda triggers. */
		LambdaConfig?: LambdaConfigType;
		Status?: UserPoolTypeStatus;
		LastModifiedDate?: Date;
		CreationDate?: Date;
		SchemaAttributes?: Array<SchemaAttributeType>;
		AutoVerifiedAttributes?: Array<VerifiedAttributeType>;
		AliasAttributes?: Array<AliasAttributeType>;
		UsernameAttributes?: Array<UsernameAttributeType>;
		SmsVerificationMessage?: string;
		EmailVerificationMessage?: string;
		EmailVerificationSubject?: string;

		/**The template for verification messages. */
		VerificationMessageTemplate?: VerificationMessageTemplateType;
		SmsAuthenticationMessage?: string;
		MfaConfiguration?: UserPoolTypeMfaConfiguration;

		/**The configuration for the user pool's device tracking. */
		DeviceConfiguration?: DeviceConfigurationType;
		EstimatedNumberOfUsers?: number;

		/**The email configuration type. */
		EmailConfiguration?: EmailConfigurationType;

		/**The SMS configuration type that includes the settings the Cognito User Pool needs to call for the Amazon SNS service to send an SMS message from your AWS account. The Cognito User Pool makes the request to the Amazon SNS Service by using an AWS IAM role that you provide for your AWS account. */
		SmsConfiguration?: SmsConfigurationType;
		UserPoolTags?: UserPoolTagsType;
		SmsConfigurationFailure?: string;
		EmailConfigurationFailure?: string;
		Domain?: string;
		CustomDomain?: string;

		/**The configuration for creating a new user profile. */
		AdminCreateUserConfig?: AdminCreateUserConfigType;

		/**The user pool add-ons type. */
		UserPoolAddOns?: UserPoolAddOnsType;

		/**The username configuration type. */
		UsernameConfiguration?: UsernameConfigurationType;
		Arn?: string;

		/**The data type for <code>AccountRecoverySetting</code>. */
		AccountRecoverySetting?: AccountRecoverySettingType;
	}

	export enum UserPoolTypeStatus { Enabled = 0, Disabled = 1 }

	export enum UserPoolTypeMfaConfiguration { OFF = 0, ON = 1, OPTIONAL = 2 }


	/**Contains information about the schema attribute. */
	export interface SchemaAttributeType {
		Name?: string;
		AttributeDataType?: SchemaAttributeTypeAttributeDataType;
		DeveloperOnlyAttribute?: boolean;
		Mutable?: boolean;
		Required?: boolean;

		/**The minimum and maximum value of an attribute that is of the number data type. */
		NumberAttributeConstraints?: NumberAttributeConstraintsType;

		/**The constraints associated with a string attribute. */
		StringAttributeConstraints?: StringAttributeConstraintsType;
	}

	export enum SchemaAttributeTypeAttributeDataType { String = 0, Number = 1, DateTime = 2, Boolean = 3 }

	export enum DefaultEmailOptionType { CONFIRM_WITH_LINK = 0, CONFIRM_WITH_CODE = 1 }


	/**The risk configuration type. */
	export interface RiskConfigurationType {
		UserPoolId?: string;
		ClientId?: string;

		/**The compromised credentials risk configuration type. */
		CompromisedCredentialsRiskConfiguration?: CompromisedCredentialsRiskConfigurationType;

		/**Configuration for mitigation actions and notification for different levels of risk detected for a potential account takeover. */
		AccountTakeoverRiskConfiguration?: AccountTakeoverRiskConfigurationType;

		/**The type of the configuration to override the risk decision. */
		RiskExceptionConfiguration?: RiskExceptionConfigurationType;
		LastModifiedDate?: Date;
	}


	/**A container for information about a domain. */
	export interface DomainDescriptionType {
		UserPoolId?: string;
		AWSAccountId?: string;
		Domain?: string;
		S3Bucket?: string;
		CloudFrontDistribution?: string;
		Version?: string;
		Status?: DomainDescriptionTypeStatus;

		/**The configuration for a custom domain that hosts the sign-up and sign-in webpages for your application. */
		CustomDomainConfig?: CustomDomainConfigType;
	}

	export enum DomainDescriptionTypeStatus { CREATING = 0, DELETING = 1, UPDATING = 2, ACTIVE = 3, FAILED = 4 }

	export enum DomainStatusType { CREATING = 0, DELETING = 1, UPDATING = 2, ACTIVE = 3, FAILED = 4 }

	export enum EmailSendingAccountType { COGNITO_DEFAULT = 0, DEVELOPER = 1 }

	export enum EventFilterType { SIGN_IN = 0, PASSWORD_CHANGE = 1, SIGN_UP = 2 }

	export enum RiskDecisionType { NoRisk = 0, AccountTakeover = 1, Block = 2 }

	export enum RiskLevelType { Low = 0, Medium = 1, High = 2 }

	export enum ExplicitAuthFlowsType { ADMIN_NO_SRP_AUTH = 0, CUSTOM_AUTH_FLOW_ONLY = 1, USER_PASSWORD_AUTH = 2, ALLOW_ADMIN_USER_PASSWORD_AUTH = 3, ALLOW_CUSTOM_AUTH = 4, ALLOW_USER_PASSWORD_AUTH = 5, ALLOW_USER_SRP_AUTH = 6, ALLOW_REFRESH_TOKEN_AUTH = 7 }


	/**A container for the UI customization information for a user pool's built-in app UI. */
	export interface UICustomizationType {
		UserPoolId?: string;
		ClientId?: string;
		ImageUrl?: string;
		CSS?: string;
		CSSVersion?: string;
		LastModifiedDate?: Date;
		CreationDate?: Date;
	}


	/**The SMS text message multi-factor authentication (MFA) configuration type. */
	export interface SmsMfaConfigType {
		SmsAuthenticationMessage?: string;

		/**The SMS configuration type that includes the settings the Cognito User Pool needs to call for the Amazon SNS service to send an SMS message from your AWS account. The Cognito User Pool makes the request to the Amazon SNS Service by using an AWS IAM role that you provide for your AWS account. */
		SmsConfiguration?: SmsConfigurationType;
	}


	/**The type used for enabling software token MFA at the user pool level. */
	export interface SoftwareTokenMfaConfigType {
		Enabled?: boolean;
	}


	/**The HTTP header. */
	export interface HttpHeader {
		headerName?: string;
		headerValue?: string;
	}


	/**<p> <i>This data type is no longer supported.</i> You can use it only for SMS MFA configurations. You can't use it for TOTP software token MFA configurations.</p> <p>To set either type of MFA configuration, use the <a>AdminSetUserMFAPreference</a> or <a>SetUserMFAPreference</a> actions.</p> <p>To look up information about either type of MFA configuration, use the <a>AdminGetUserResponse$UserMFASettingList</a> or <a>GetUserResponse$UserMFASettingList</a> responses.</p> */
	export interface MFAOptionType {
		DeliveryMedium?: MFAOptionTypeDeliveryMedium;
		AttributeName?: string;
	}

	export enum MFAOptionTypeDeliveryMedium { SMS = 0, EMAIL = 1 }


	/**The notify email type. */
	export interface NotifyEmailType {
		Subject: string;
		HtmlBody?: string;
		TextBody?: string;
	}


	/**The minimum and maximum value of an attribute that is of the number data type. */
	export interface NumberAttributeConstraintsType {
		MinValue?: string;
		MaxValue?: string;
	}

	export enum OAuthFlowType { code = 0, implicit = 1, client_credentials = 2 }


	/**The password policy type. */
	export interface PasswordPolicyType {
		MinimumLength?: number;
		RequireUppercase?: boolean;
		RequireLowercase?: boolean;
		RequireNumbers?: boolean;
		RequireSymbols?: boolean;
		TemporaryPasswordValidityDays?: number;
	}


	/**A container for identity provider details. */
	export interface ProviderDescription {
		ProviderName?: string;
		ProviderType?: ProviderDescriptionProviderType;
		LastModifiedDate?: Date;
		CreationDate?: Date;
	}

	export enum ProviderDescriptionProviderType { SAML = 0, Facebook = 1, Google = 2, LoginWithAmazon = 3, SignInWithApple = 4, OIDC = 5 }


	/**A map containing a priority as a key, and recovery method name as a value. */
	export interface RecoveryOptionType {
		Priority: number;
		Name: RecoveryOptionTypeName;
	}

	export enum RecoveryOptionTypeName { verified_email = 0, verified_phone_number = 1, admin_only = 2 }

	export enum RecoveryOptionNameType { verified_email = 0, verified_phone_number = 1, admin_only = 2 }


	/**A resource server scope. */
	export interface ResourceServerScopeType {
		ScopeName: string;
		ScopeDescription: string;
	}


	/**The type of the configuration to override the risk decision. */
	export interface RiskExceptionConfigurationType {
		BlockedIPRangeList?: Array<StringType>;
		SkippedIPRangeList?: Array<StringType>;
	}


	/**The constraints associated with a string attribute. */
	export interface StringAttributeConstraintsType {
		MinLength?: string;
		MaxLength?: string;
	}

	export enum StatusType { Enabled = 0, Disabled = 1 }

	export enum UserImportJobStatusType { Created = 0, Pending = 1, InProgress = 2, Stopping = 3, Expired = 4, Stopped = 5, Failed = 6, Succeeded = 7 }


	/**The description of the user pool client. */
	export interface UserPoolClientDescription {
		ClientId?: string;
		UserPoolId?: string;
		ClientName?: string;
	}


	/**A user pool description. */
	export interface UserPoolDescriptionType {
		Id?: string;
		Name?: string;

		/**Specifies the configuration for AWS Lambda triggers. */
		LambdaConfig?: LambdaConfigType;
		Status?: UserPoolDescriptionTypeStatus;
		LastModifiedDate?: Date;
		CreationDate?: Date;
	}

	export enum UserPoolDescriptionTypeStatus { Enabled = 0, Disabled = 1 }

	export enum UsernameAttributeType { phone_number = 0, email = 1 }

	export enum VerifiedAttributeType { phone_number = 0, email = 1 }

	export enum VerifySoftwareTokenResponseType { SUCCESS = 0, ERROR = 1 }

	export class DemoClient {
		constructor(private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/') {
		}

		/**
		 * Adds additional user attributes to the user pool schema.
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.AddCustomAttributes
		 * @return {AddCustomAttributesResponse} Success
		 */
		AddCustomAttributes(requestBody: AddCustomAttributesRequest, headersHandler?: () => {[header: string]: string}): Promise<AddCustomAttributesResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.AddCustomAttributes', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Adds the specified user to the specified group.</p> <p>Calling this action requires developer credentials.</p>
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.AdminAddUserToGroup
		 * @return {void} Success
		 */
		AdminAddUserToGroup(requestBody: AdminAddUserToGroupRequest, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminAddUserToGroup', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * <p>Confirms user registration as an admin without using a confirmation code. Works on any user.</p> <p>Calling this action requires developer credentials.</p>
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.AdminConfirmSignUp
		 * @return {AdminConfirmSignUpResponse} Success
		 */
		AdminConfirmSignUp(requestBody: AdminConfirmSignUpRequest, headersHandler?: () => {[header: string]: string}): Promise<AdminConfirmSignUpResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminConfirmSignUp', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Creates a new user in the specified user pool.</p> <p>If <code>MessageAction</code> is not set, the default is to send a welcome message via email or phone (SMS).</p> <note> <p>This message is based on a template that you configured in your call to or . This template includes your custom sign-up instructions and placeholders for user name and temporary password.</p> </note> <p>Alternatively, you can call AdminCreateUser with “SUPPRESS” for the <code>MessageAction</code> parameter, and Amazon Cognito will not send any email. </p> <p>In either case, the user will be in the <code>FORCE_CHANGE_PASSWORD</code> state until they sign in and change their password.</p> <p>AdminCreateUser requires developer credentials.</p>
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.AdminCreateUser
		 * @return {AdminCreateUserResponse} Success
		 */
		AdminCreateUser(requestBody: AdminCreateUserRequest, headersHandler?: () => {[header: string]: string}): Promise<AdminCreateUserResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminCreateUser', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Deletes a user as an administrator. Works on any user.</p> <p>Calling this action requires developer credentials.</p>
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDeleteUser
		 * @return {void} Success
		 */
		AdminDeleteUser(requestBody: AdminDeleteUserRequest, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDeleteUser', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * <p>Deletes the user attributes in a user pool as an administrator. Works on any user.</p> <p>Calling this action requires developer credentials.</p>
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDeleteUserAttributes
		 * @return {AdminDeleteUserAttributesResponse} Success
		 */
		AdminDeleteUserAttributes(requestBody: AdminDeleteUserAttributesRequest, headersHandler?: () => {[header: string]: string}): Promise<AdminDeleteUserAttributesResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDeleteUserAttributes', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Disables the user from signing in with the specified external (SAML or social) identity provider. If the user to disable is a Cognito User Pools native username + password user, they are not permitted to use their password to sign-in. If the user to disable is a linked external IdP user, any link between that user and an existing user is removed. The next time the external user (no longer attached to the previously linked <code>DestinationUser</code>) signs in, they must create a new user account. See .</p> <p>This action is enabled only for admin access and requires developer credentials.</p> <p>The <code>ProviderName</code> must match the value specified when creating an IdP for the pool. </p> <p>To disable a native username + password user, the <code>ProviderName</code> value must be <code>Cognito</code> and the <code>ProviderAttributeName</code> must be <code>Cognito_Subject</code>, with the <code>ProviderAttributeValue</code> being the name that is used in the user pool for the user.</p> <p>The <code>ProviderAttributeName</code> must always be <code>Cognito_Subject</code> for social identity providers. The <code>ProviderAttributeValue</code> must always be the exact subject that was used when the user was originally linked as a source user.</p> <p>For de-linking a SAML identity, there are two scenarios. If the linked identity has not yet been used to sign-in, the <code>ProviderAttributeName</code> and <code>ProviderAttributeValue</code> must be the same values that were used for the <code>SourceUser</code> when the identities were originally linked in the call. (If the linking was done with <code>ProviderAttributeName</code> set to <code>Cognito_Subject</code>, the same applies here). However, if the user has already signed in, the <code>ProviderAttributeName</code> must be <code>Cognito_Subject</code> and <code>ProviderAttributeValue</code> must be the subject of the SAML assertion.</p>
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDisableProviderForUser
		 * @return {AdminDisableProviderForUserResponse} Success
		 */
		AdminDisableProviderForUser(requestBody: AdminDisableProviderForUserRequest, headersHandler?: () => {[header: string]: string}): Promise<AdminDisableProviderForUserResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDisableProviderForUser', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Disables the specified user.</p> <p>Calling this action requires developer credentials.</p>
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDisableUser
		 * @return {AdminDisableUserResponse} Success
		 */
		AdminDisableUser(requestBody: AdminDisableUserRequest, headersHandler?: () => {[header: string]: string}): Promise<AdminDisableUserResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDisableUser', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Enables the specified user as an administrator. Works on any user.</p> <p>Calling this action requires developer credentials.</p>
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.AdminEnableUser
		 * @return {AdminEnableUserResponse} Success
		 */
		AdminEnableUser(requestBody: AdminEnableUserRequest, headersHandler?: () => {[header: string]: string}): Promise<AdminEnableUserResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminEnableUser', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Forgets the device, as an administrator.</p> <p>Calling this action requires developer credentials.</p>
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.AdminForgetDevice
		 * @return {void} Success
		 */
		AdminForgetDevice(requestBody: AdminForgetDeviceRequest, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminForgetDevice', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * <p>Gets the device, as an administrator.</p> <p>Calling this action requires developer credentials.</p>
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.AdminGetDevice
		 * @return {AdminGetDeviceResponse} Success
		 */
		AdminGetDevice(requestBody: AdminGetDeviceRequest, headersHandler?: () => {[header: string]: string}): Promise<AdminGetDeviceResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminGetDevice', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Gets the specified user by user name in a user pool as an administrator. Works on any user.</p> <p>Calling this action requires developer credentials.</p>
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.AdminGetUser
		 * @return {AdminGetUserResponse} Success
		 */
		AdminGetUser(requestBody: AdminGetUserRequest, headersHandler?: () => {[header: string]: string}): Promise<AdminGetUserResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminGetUser', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Initiates the authentication flow, as an administrator.</p> <p>Calling this action requires developer credentials.</p>
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.AdminInitiateAuth
		 * @return {AdminInitiateAuthResponse} Success
		 */
		AdminInitiateAuth(requestBody: AdminInitiateAuthRequest, headersHandler?: () => {[header: string]: string}): Promise<AdminInitiateAuthResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminInitiateAuth', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Links an existing user account in a user pool (<code>DestinationUser</code>) to an identity from an external identity provider (<code>SourceUser</code>) based on a specified attribute name and value from the external identity provider. This allows you to create a link from the existing user account to an external federated user identity that has not yet been used to sign in, so that the federated user identity can be used to sign in as the existing user account. </p> <p> For example, if there is an existing user with a username and password, this API links that user to a federated user identity, so that when the federated user identity is used, the user signs in as the existing user account. </p> <important> <p>Because this API allows a user with an external federated identity to sign in as an existing user in the user pool, it is critical that it only be used with external identity providers and provider attributes that have been trusted by the application owner.</p> </important> <p>See also .</p> <p>This action is enabled only for admin access and requires developer credentials.</p>
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.AdminLinkProviderForUser
		 * @return {AdminLinkProviderForUserResponse} Success
		 */
		AdminLinkProviderForUser(requestBody: AdminLinkProviderForUserRequest, headersHandler?: () => {[header: string]: string}): Promise<AdminLinkProviderForUserResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminLinkProviderForUser', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Lists devices, as an administrator.</p> <p>Calling this action requires developer credentials.</p>
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListDevices
		 * @return {AdminListDevicesResponse} Success
		 */
		AdminListDevices(requestBody: AdminListDevicesRequest, headersHandler?: () => {[header: string]: string}): Promise<AdminListDevicesResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListDevices', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Lists the groups that the user belongs to.</p> <p>Calling this action requires developer credentials.</p>
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListGroupsForUser
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {AdminListGroupsForUserResponse} Success
		 */
		AdminListGroupsForUser(Limit: string, NextToken: string, requestBody: AdminListGroupsForUserRequest, headersHandler?: () => {[header: string]: string}): Promise<AdminListGroupsForUserResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListGroupsForUser?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Lists a history of user activity and any risks detected as part of Amazon Cognito advanced security.
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListUserAuthEvents
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {AdminListUserAuthEventsResponse} Success
		 */
		AdminListUserAuthEvents(MaxResults: string, NextToken: string, requestBody: AdminListUserAuthEventsRequest, headersHandler?: () => {[header: string]: string}): Promise<AdminListUserAuthEventsResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListUserAuthEvents?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Removes the specified user from the specified group.</p> <p>Calling this action requires developer credentials.</p>
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.AdminRemoveUserFromGroup
		 * @return {void} Success
		 */
		AdminRemoveUserFromGroup(requestBody: AdminRemoveUserFromGroupRequest, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminRemoveUserFromGroup', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * <p>Resets the specified user's password in a user pool as an administrator. Works on any user.</p> <p>When a developer calls this API, the current password is invalidated, so it must be changed. If a user tries to sign in after the API is called, the app will get a PasswordResetRequiredException exception back and should direct the user down the flow to reset the password, which is the same as the forgot password flow. In addition, if the user pool has phone verification selected and a verified phone number exists for the user, or if email verification is selected and a verified email exists for the user, calling this API will also result in sending a message to the end user with the code to change their password.</p> <p>Calling this action requires developer credentials.</p>
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.AdminResetUserPassword
		 * @return {AdminResetUserPasswordResponse} Success
		 */
		AdminResetUserPassword(requestBody: AdminResetUserPasswordRequest, headersHandler?: () => {[header: string]: string}): Promise<AdminResetUserPasswordResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminResetUserPassword', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Responds to an authentication challenge, as an administrator.</p> <p>Calling this action requires developer credentials.</p>
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.AdminRespondToAuthChallenge
		 * @return {AdminRespondToAuthChallengeResponse} Success
		 */
		AdminRespondToAuthChallenge(requestBody: AdminRespondToAuthChallengeRequest, headersHandler?: () => {[header: string]: string}): Promise<AdminRespondToAuthChallengeResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminRespondToAuthChallenge', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Sets the user's multi-factor authentication (MFA) preference, including which MFA options are enabled and if any are preferred. Only one factor can be set as preferred. The preferred MFA factor will be used to authenticate a user if multiple factors are enabled. If multiple options are enabled and no preference is set, a challenge to choose an MFA option will be returned during sign in.
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserMFAPreference
		 * @return {AdminSetUserMFAPreferenceResponse} Success
		 */
		AdminSetUserMFAPreference(requestBody: AdminSetUserMFAPreferenceRequest, headersHandler?: () => {[header: string]: string}): Promise<AdminSetUserMFAPreferenceResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserMFAPreference', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Sets the specified user's password in a user pool as an administrator. Works on any user. </p> <p>The password can be temporary or permanent. If it is temporary, the user status will be placed into the <code>FORCE_CHANGE_PASSWORD</code> state. When the user next tries to sign in, the InitiateAuth/AdminInitiateAuth response will contain the <code>NEW_PASSWORD_REQUIRED</code> challenge. If the user does not sign in before it expires, the user will not be able to sign in and their password will need to be reset by an administrator. </p> <p>Once the user has set a new password, or the password is permanent, the user status will be set to <code>Confirmed</code>.</p>
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserPassword
		 * @return {AdminSetUserPasswordResponse} Success
		 */
		AdminSetUserPassword(requestBody: AdminSetUserPasswordRequest, headersHandler?: () => {[header: string]: string}): Promise<AdminSetUserPasswordResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserPassword', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <i>This action is no longer supported.</i> You can use it to configure only SMS MFA. You can't use it to configure TOTP software token MFA. To configure either type of MFA, use the <a>AdminSetUserMFAPreference</a> action instead.
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserSettings
		 * @return {AdminSetUserSettingsResponse} Success
		 */
		AdminSetUserSettings(requestBody: AdminSetUserSettingsRequest, headersHandler?: () => {[header: string]: string}): Promise<AdminSetUserSettingsResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserSettings', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Provides feedback for an authentication event as to whether it was from a valid user. This feedback is used for improving the risk evaluation decision for the user pool as part of Amazon Cognito advanced security.
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateAuthEventFeedback
		 * @return {AdminUpdateAuthEventFeedbackResponse} Success
		 */
		AdminUpdateAuthEventFeedback(requestBody: AdminUpdateAuthEventFeedbackRequest, headersHandler?: () => {[header: string]: string}): Promise<AdminUpdateAuthEventFeedbackResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateAuthEventFeedback', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Updates the device status as an administrator.</p> <p>Calling this action requires developer credentials.</p>
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateDeviceStatus
		 * @return {AdminUpdateDeviceStatusResponse} Success
		 */
		AdminUpdateDeviceStatus(requestBody: AdminUpdateDeviceStatusRequest, headersHandler?: () => {[header: string]: string}): Promise<AdminUpdateDeviceStatusResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateDeviceStatus', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Updates the specified user's attributes, including developer attributes, as an administrator. Works on any user.</p> <p>For custom attributes, you must prepend the <code>custom:</code> prefix to the attribute name.</p> <p>In addition to updating user attributes, this API can also be used to mark phone and email as verified.</p> <p>Calling this action requires developer credentials.</p>
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateUserAttributes
		 * @return {AdminUpdateUserAttributesResponse} Success
		 */
		AdminUpdateUserAttributes(requestBody: AdminUpdateUserAttributesRequest, headersHandler?: () => {[header: string]: string}): Promise<AdminUpdateUserAttributesResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateUserAttributes', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Signs out users from all devices, as an administrator. It also invalidates all refresh tokens issued to a user. The user's current access and Id tokens remain valid until their expiry. Access and Id tokens expire one hour after they are issued.</p> <p>Calling this action requires developer credentials.</p>
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUserGlobalSignOut
		 * @return {AdminUserGlobalSignOutResponse} Success
		 */
		AdminUserGlobalSignOut(requestBody: AdminUserGlobalSignOutRequest, headersHandler?: () => {[header: string]: string}): Promise<AdminUserGlobalSignOutResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUserGlobalSignOut', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns a unique generated shared secret key code for the user account. The request takes an access token or a session string, but not both.
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.AssociateSoftwareToken
		 * @return {AssociateSoftwareTokenResponse} Success
		 */
		AssociateSoftwareToken(requestBody: AssociateSoftwareTokenRequest, headersHandler?: () => {[header: string]: string}): Promise<AssociateSoftwareTokenResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.AssociateSoftwareToken', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Changes the password for a specified user in a user pool.
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.ChangePassword
		 * @return {ChangePasswordResponse} Success
		 */
		ChangePassword(requestBody: ChangePasswordRequest, headersHandler?: () => {[header: string]: string}): Promise<ChangePasswordResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.ChangePassword', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Confirms tracking of the device. This API call is the call that begins device tracking.
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmDevice
		 * @return {ConfirmDeviceResponse} Success
		 */
		ConfirmDevice(requestBody: ConfirmDeviceRequest, headersHandler?: () => {[header: string]: string}): Promise<ConfirmDeviceResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmDevice', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Allows a user to enter a confirmation code to reset a forgotten password.
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmForgotPassword
		 * @return {ConfirmForgotPasswordResponse} Success
		 */
		ConfirmForgotPassword(requestBody: ConfirmForgotPasswordRequest, headersHandler?: () => {[header: string]: string}): Promise<ConfirmForgotPasswordResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmForgotPassword', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Confirms registration of a user and handles the existing alias from a previous user.
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmSignUp
		 * @return {ConfirmSignUpResponse} Success
		 */
		ConfirmSignUp(requestBody: ConfirmSignUpRequest, headersHandler?: () => {[header: string]: string}): Promise<ConfirmSignUpResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmSignUp', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Creates a new group in the specified user pool.</p> <p>Calling this action requires developer credentials.</p>
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.CreateGroup
		 * @return {CreateGroupResponse} Success
		 */
		CreateGroup(requestBody: CreateGroupRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateGroupResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.CreateGroup', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Creates an identity provider for a user pool.
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.CreateIdentityProvider
		 * @return {CreateIdentityProviderResponse} Success
		 */
		CreateIdentityProvider(requestBody: CreateIdentityProviderRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateIdentityProviderResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.CreateIdentityProvider', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Creates a new OAuth2.0 resource server and defines custom scopes in it.
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.CreateResourceServer
		 * @return {CreateResourceServerResponse} Success
		 */
		CreateResourceServer(requestBody: CreateResourceServerRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateResourceServerResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.CreateResourceServer', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Creates the user import job.
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserImportJob
		 * @return {CreateUserImportJobResponse} Success
		 */
		CreateUserImportJob(requestBody: CreateUserImportJobRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateUserImportJobResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserImportJob', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Creates a new Amazon Cognito user pool and sets the password policy for the pool.
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPool
		 * @return {CreateUserPoolResponse} Success
		 */
		CreateUserPool(requestBody: CreateUserPoolRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateUserPoolResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPool', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Creates the user pool client.
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPoolClient
		 * @return {CreateUserPoolClientResponse} Success
		 */
		CreateUserPoolClient(requestBody: CreateUserPoolClientRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateUserPoolClientResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPoolClient', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Creates a new domain for a user pool.
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPoolDomain
		 * @return {CreateUserPoolDomainResponse} Success
		 */
		CreateUserPoolDomain(requestBody: CreateUserPoolDomainRequest, headersHandler?: () => {[header: string]: string}): Promise<CreateUserPoolDomainResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPoolDomain', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Deletes a group. Currently only groups with no members can be deleted.</p> <p>Calling this action requires developer credentials.</p>
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteGroup
		 * @return {void} Success
		 */
		DeleteGroup(requestBody: DeleteGroupRequest, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteGroup', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Deletes an identity provider for a user pool.
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteIdentityProvider
		 * @return {void} Success
		 */
		DeleteIdentityProvider(requestBody: DeleteIdentityProviderRequest, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteIdentityProvider', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Deletes a resource server.
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteResourceServer
		 * @return {void} Success
		 */
		DeleteResourceServer(requestBody: DeleteResourceServerRequest, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteResourceServer', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Allows a user to delete himself or herself.
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUser
		 * @return {void} Success
		 */
		DeleteUser(requestBody: DeleteUserRequest, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUser', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Deletes the attributes for a user.
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserAttributes
		 * @return {DeleteUserAttributesResponse} Success
		 */
		DeleteUserAttributes(requestBody: DeleteUserAttributesRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteUserAttributesResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserAttributes', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Deletes the specified Amazon Cognito user pool.
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPool
		 * @return {void} Success
		 */
		DeleteUserPool(requestBody: DeleteUserPoolRequest, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPool', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Allows the developer to delete the user pool client.
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPoolClient
		 * @return {void} Success
		 */
		DeleteUserPoolClient(requestBody: DeleteUserPoolClientRequest, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPoolClient', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Deletes a domain for a user pool.
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPoolDomain
		 * @return {DeleteUserPoolDomainResponse} Success
		 */
		DeleteUserPoolDomain(requestBody: DeleteUserPoolDomainRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteUserPoolDomainResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPoolDomain', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Gets information about a specific identity provider.
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeIdentityProvider
		 * @return {DescribeIdentityProviderResponse} Success
		 */
		DescribeIdentityProvider(requestBody: DescribeIdentityProviderRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeIdentityProviderResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeIdentityProvider', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Describes a resource server.
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeResourceServer
		 * @return {DescribeResourceServerResponse} Success
		 */
		DescribeResourceServer(requestBody: DescribeResourceServerRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeResourceServerResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeResourceServer', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Describes the risk configuration.
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeRiskConfiguration
		 * @return {DescribeRiskConfigurationResponse} Success
		 */
		DescribeRiskConfiguration(requestBody: DescribeRiskConfigurationRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeRiskConfigurationResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeRiskConfiguration', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Describes the user import job.
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserImportJob
		 * @return {DescribeUserImportJobResponse} Success
		 */
		DescribeUserImportJob(requestBody: DescribeUserImportJobRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeUserImportJobResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserImportJob', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns the configuration information and metadata of the specified user pool.
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPool
		 * @return {DescribeUserPoolResponse} Success
		 */
		DescribeUserPool(requestBody: DescribeUserPoolRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeUserPoolResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPool', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Client method for returning the configuration information and metadata of the specified user pool app client.
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPoolClient
		 * @return {DescribeUserPoolClientResponse} Success
		 */
		DescribeUserPoolClient(requestBody: DescribeUserPoolClientRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeUserPoolClientResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPoolClient', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Gets information about a domain.
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPoolDomain
		 * @return {DescribeUserPoolDomainResponse} Success
		 */
		DescribeUserPoolDomain(requestBody: DescribeUserPoolDomainRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeUserPoolDomainResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPoolDomain', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Forgets the specified device.
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.ForgetDevice
		 * @return {void} Success
		 */
		ForgetDevice(requestBody: ForgetDeviceRequest, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.ForgetDevice', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Calling this API causes a message to be sent to the end user with a confirmation code that is required to change the user's password. For the <code>Username</code> parameter, you can use the username or user alias. The method used to send the confirmation code is sent according to the specified AccountRecoverySetting. For more information, see <a href="">Recovering User Accounts</a> in the <i>Amazon Cognito Developer Guide</i>. If neither a verified phone number nor a verified email exists, an <code>InvalidParameterException</code> is thrown. To use the confirmation code for resetting the password, call .
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.ForgotPassword
		 * @return {ForgotPasswordResponse} Success
		 */
		ForgotPassword(requestBody: ForgotPasswordRequest, headersHandler?: () => {[header: string]: string}): Promise<ForgotPasswordResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.ForgotPassword', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Gets the header information for the .csv file to be used as input for the user import job.
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.GetCSVHeader
		 * @return {GetCSVHeaderResponse} Success
		 */
		GetCSVHeader(requestBody: GetCSVHeaderRequest, headersHandler?: () => {[header: string]: string}): Promise<GetCSVHeaderResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.GetCSVHeader', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Gets the device.
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.GetDevice
		 * @return {GetDeviceResponse} Success
		 */
		GetDevice(requestBody: GetDeviceRequest, headersHandler?: () => {[header: string]: string}): Promise<GetDeviceResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.GetDevice', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Gets a group.</p> <p>Calling this action requires developer credentials.</p>
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.GetGroup
		 * @return {GetGroupResponse} Success
		 */
		GetGroup(requestBody: GetGroupRequest, headersHandler?: () => {[header: string]: string}): Promise<GetGroupResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.GetGroup', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Gets the specified identity provider.
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.GetIdentityProviderByIdentifier
		 * @return {GetIdentityProviderByIdentifierResponse} Success
		 */
		GetIdentityProviderByIdentifier(requestBody: GetIdentityProviderByIdentifierRequest, headersHandler?: () => {[header: string]: string}): Promise<GetIdentityProviderByIdentifierResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.GetIdentityProviderByIdentifier', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * This method takes a user pool ID, and returns the signing certificate.
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.GetSigningCertificate
		 * @return {GetSigningCertificateResponse} Success
		 */
		GetSigningCertificate(requestBody: GetSigningCertificateRequest, headersHandler?: () => {[header: string]: string}): Promise<GetSigningCertificateResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.GetSigningCertificate', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Gets the UI Customization information for a particular app client's app UI, if there is something set. If nothing is set for the particular client, but there is an existing pool level customization (app <code>clientId</code> will be <code>ALL</code>), then that is returned. If nothing is present, then an empty shape is returned.
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.GetUICustomization
		 * @return {GetUICustomizationResponse} Success
		 */
		GetUICustomization(requestBody: GetUICustomizationRequest, headersHandler?: () => {[header: string]: string}): Promise<GetUICustomizationResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.GetUICustomization', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Gets the user attributes and metadata for a user.
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.GetUser
		 * @return {GetUserResponse} Success
		 */
		GetUser(requestBody: GetUserRequest, headersHandler?: () => {[header: string]: string}): Promise<GetUserResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.GetUser', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Gets the user attribute verification code for the specified attribute name.
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.GetUserAttributeVerificationCode
		 * @return {GetUserAttributeVerificationCodeResponse} Success
		 */
		GetUserAttributeVerificationCode(requestBody: GetUserAttributeVerificationCodeRequest, headersHandler?: () => {[header: string]: string}): Promise<GetUserAttributeVerificationCodeResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.GetUserAttributeVerificationCode', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Gets the user pool multi-factor authentication (MFA) configuration.
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.GetUserPoolMfaConfig
		 * @return {GetUserPoolMfaConfigResponse} Success
		 */
		GetUserPoolMfaConfig(requestBody: GetUserPoolMfaConfigRequest, headersHandler?: () => {[header: string]: string}): Promise<GetUserPoolMfaConfigResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.GetUserPoolMfaConfig', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Signs out users from all devices. It also invalidates all refresh tokens issued to a user. The user's current access and Id tokens remain valid until their expiry. Access and Id tokens expire one hour after they are issued.
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.GlobalSignOut
		 * @return {GlobalSignOutResponse} Success
		 */
		GlobalSignOut(requestBody: GlobalSignOutRequest, headersHandler?: () => {[header: string]: string}): Promise<GlobalSignOutResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.GlobalSignOut', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Initiates the authentication flow.
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.InitiateAuth
		 * @return {InitiateAuthResponse} Success
		 */
		InitiateAuth(requestBody: InitiateAuthRequest, headersHandler?: () => {[header: string]: string}): Promise<InitiateAuthResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.InitiateAuth', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Lists the devices.
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.ListDevices
		 * @return {ListDevicesResponse} Success
		 */
		ListDevices(requestBody: ListDevicesRequest, headersHandler?: () => {[header: string]: string}): Promise<ListDevicesResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.ListDevices', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Lists the groups associated with a user pool.</p> <p>Calling this action requires developer credentials.</p>
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.ListGroups
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListGroupsResponse} Success
		 */
		ListGroups(Limit: string, NextToken: string, requestBody: ListGroupsRequest, headersHandler?: () => {[header: string]: string}): Promise<ListGroupsResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.ListGroups?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Lists information about all identity providers for a user pool.
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.ListIdentityProviders
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListIdentityProvidersResponse} Success
		 */
		ListIdentityProviders(MaxResults: string, NextToken: string, requestBody: ListIdentityProvidersRequest, headersHandler?: () => {[header: string]: string}): Promise<ListIdentityProvidersResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.ListIdentityProviders?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Lists the resource servers for a user pool.
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.ListResourceServers
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListResourceServersResponse} Success
		 */
		ListResourceServers(MaxResults: string, NextToken: string, requestBody: ListResourceServersRequest, headersHandler?: () => {[header: string]: string}): Promise<ListResourceServersResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.ListResourceServers?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Lists the tags that are assigned to an Amazon Cognito user pool.</p> <p>A tag is a label that you can apply to user pools to categorize and manage them in different ways, such as by purpose, owner, environment, or other criteria.</p> <p>You can use this action up to 10 times per second, per account.</p>
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest, headersHandler?: () => {[header: string]: string}): Promise<ListTagsForResourceResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.ListTagsForResource', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Lists the user import jobs.
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserImportJobs
		 * @return {ListUserImportJobsResponse} Success
		 */
		ListUserImportJobs(requestBody: ListUserImportJobsRequest, headersHandler?: () => {[header: string]: string}): Promise<ListUserImportJobsResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserImportJobs', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Lists the clients that have been created for the specified user pool.
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserPoolClients
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListUserPoolClientsResponse} Success
		 */
		ListUserPoolClients(MaxResults: string, NextToken: string, requestBody: ListUserPoolClientsRequest, headersHandler?: () => {[header: string]: string}): Promise<ListUserPoolClientsResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserPoolClients?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Lists the user pools associated with an AWS account.
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserPools
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListUserPoolsResponse} Success
		 */
		ListUserPools(MaxResults: string, NextToken: string, requestBody: ListUserPoolsRequest, headersHandler?: () => {[header: string]: string}): Promise<ListUserPoolsResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserPools?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Lists the users in the Amazon Cognito user pool.
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.ListUsers
		 * @param {string} Limit Pagination limit
		 * @param {string} PaginationToken Pagination token
		 * @return {ListUsersResponse} Success
		 */
		ListUsers(Limit: string, PaginationToken: string, requestBody: ListUsersRequest, headersHandler?: () => {[header: string]: string}): Promise<ListUsersResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.ListUsers?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&PaginationToken=' + (PaginationToken == null ? '' : encodeURIComponent(PaginationToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Lists the users in the specified group.</p> <p>Calling this action requires developer credentials.</p>
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.ListUsersInGroup
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListUsersInGroupResponse} Success
		 */
		ListUsersInGroup(Limit: string, NextToken: string, requestBody: ListUsersInGroupRequest, headersHandler?: () => {[header: string]: string}): Promise<ListUsersInGroupResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.ListUsersInGroup?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Resends the confirmation (for confirmation of registration) to a specific user in the user pool.
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.ResendConfirmationCode
		 * @return {ResendConfirmationCodeResponse} Success
		 */
		ResendConfirmationCode(requestBody: ResendConfirmationCodeRequest, headersHandler?: () => {[header: string]: string}): Promise<ResendConfirmationCodeResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.ResendConfirmationCode', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Responds to the authentication challenge.
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.RespondToAuthChallenge
		 * @return {RespondToAuthChallengeResponse} Success
		 */
		RespondToAuthChallenge(requestBody: RespondToAuthChallengeRequest, headersHandler?: () => {[header: string]: string}): Promise<RespondToAuthChallengeResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.RespondToAuthChallenge', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Configures actions on detected risks. To delete the risk configuration for <code>UserPoolId</code> or <code>ClientId</code>, pass null values for all four configuration types.</p> <p>To enable Amazon Cognito advanced security features, update the user pool to include the <code>UserPoolAddOns</code> key<code>AdvancedSecurityMode</code>.</p> <p>See .</p>
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.SetRiskConfiguration
		 * @return {SetRiskConfigurationResponse} Success
		 */
		SetRiskConfiguration(requestBody: SetRiskConfigurationRequest, headersHandler?: () => {[header: string]: string}): Promise<SetRiskConfigurationResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.SetRiskConfiguration', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Sets the UI customization information for a user pool's built-in app UI.</p> <p>You can specify app UI customization settings for a single client (with a specific <code>clientId</code>) or for all clients (by setting the <code>clientId</code> to <code>ALL</code>). If you specify <code>ALL</code>, the default configuration will be used for every client that has no UI customization set previously. If you specify UI customization settings for a particular client, it will no longer fall back to the <code>ALL</code> configuration. </p> <note> <p>To use this API, your user pool must have a domain associated with it. Otherwise, there is no place to host the app's pages, and the service will throw an error.</p> </note>
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.SetUICustomization
		 * @return {SetUICustomizationResponse} Success
		 */
		SetUICustomization(requestBody: SetUICustomizationRequest, headersHandler?: () => {[header: string]: string}): Promise<SetUICustomizationResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.SetUICustomization', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Set the user's multi-factor authentication (MFA) method preference, including which MFA factors are enabled and if any are preferred. Only one factor can be set as preferred. The preferred MFA factor will be used to authenticate a user if multiple factors are enabled. If multiple options are enabled and no preference is set, a challenge to choose an MFA option will be returned during sign in.
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserMFAPreference
		 * @return {SetUserMFAPreferenceResponse} Success
		 */
		SetUserMFAPreference(requestBody: SetUserMFAPreferenceRequest, headersHandler?: () => {[header: string]: string}): Promise<SetUserMFAPreferenceResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserMFAPreference', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Set the user pool multi-factor authentication (MFA) configuration.
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserPoolMfaConfig
		 * @return {SetUserPoolMfaConfigResponse} Success
		 */
		SetUserPoolMfaConfig(requestBody: SetUserPoolMfaConfigRequest, headersHandler?: () => {[header: string]: string}): Promise<SetUserPoolMfaConfigResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserPoolMfaConfig', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <i>This action is no longer supported.</i> You can use it to configure only SMS MFA. You can't use it to configure TOTP software token MFA. To configure either type of MFA, use the <a>SetUserMFAPreference</a> action instead.
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserSettings
		 * @return {SetUserSettingsResponse} Success
		 */
		SetUserSettings(requestBody: SetUserSettingsRequest, headersHandler?: () => {[header: string]: string}): Promise<SetUserSettingsResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserSettings', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Registers the user in the specified user pool and creates a user name, password, and user attributes.
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.SignUp
		 * @return {SignUpResponse} Success
		 */
		SignUp(requestBody: SignUpRequest, headersHandler?: () => {[header: string]: string}): Promise<SignUpResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.SignUp', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Starts the user import.
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.StartUserImportJob
		 * @return {StartUserImportJobResponse} Success
		 */
		StartUserImportJob(requestBody: StartUserImportJobRequest, headersHandler?: () => {[header: string]: string}): Promise<StartUserImportJobResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.StartUserImportJob', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Stops the user import job.
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.StopUserImportJob
		 * @return {StopUserImportJobResponse} Success
		 */
		StopUserImportJob(requestBody: StopUserImportJobRequest, headersHandler?: () => {[header: string]: string}): Promise<StopUserImportJobResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.StopUserImportJob', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Assigns a set of tags to an Amazon Cognito user pool. A tag is a label that you can use to categorize and manage user pools in different ways, such as by purpose, owner, environment, or other criteria.</p> <p>Each tag consists of a key and value, both of which you define. A key is a general category for more specific values. For example, if you have two versions of a user pool, one for testing and another for production, you might assign an <code>Environment</code> tag key to both user pools. The value of this key might be <code>Test</code> for one user pool and <code>Production</code> for the other.</p> <p>Tags are useful for cost tracking and access control. You can activate your tags so that they appear on the Billing and Cost Management console, where you can track the costs associated with your user pools. In an IAM policy, you can constrain permissions for user pools based on specific tags or tag values.</p> <p>You can use this action up to 5 times per second, per account. A user pool can have as many as 50 tags.</p>
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest, headersHandler?: () => {[header: string]: string}): Promise<TagResourceResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.TagResource', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Removes the specified tags from an Amazon Cognito user pool. You can use this action up to 5 times per second, per account
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest, headersHandler?: () => {[header: string]: string}): Promise<UntagResourceResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.UntagResource', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Provides the feedback for an authentication event whether it was from a valid user or not. This feedback is used for improving the risk evaluation decision for the user pool as part of Amazon Cognito advanced security.
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateAuthEventFeedback
		 * @return {UpdateAuthEventFeedbackResponse} Success
		 */
		UpdateAuthEventFeedback(requestBody: UpdateAuthEventFeedbackRequest, headersHandler?: () => {[header: string]: string}): Promise<UpdateAuthEventFeedbackResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateAuthEventFeedback', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Updates the device status.
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateDeviceStatus
		 * @return {UpdateDeviceStatusResponse} Success
		 */
		UpdateDeviceStatus(requestBody: UpdateDeviceStatusRequest, headersHandler?: () => {[header: string]: string}): Promise<UpdateDeviceStatusResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateDeviceStatus', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Updates the specified group with the specified attributes.</p> <p>Calling this action requires developer credentials.</p> <important> <p>If you don't provide a value for an attribute, it will be set to the default value.</p> </important>
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateGroup
		 * @return {UpdateGroupResponse} Success
		 */
		UpdateGroup(requestBody: UpdateGroupRequest, headersHandler?: () => {[header: string]: string}): Promise<UpdateGroupResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateGroup', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Updates identity provider information for a user pool.
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateIdentityProvider
		 * @return {UpdateIdentityProviderResponse} Success
		 */
		UpdateIdentityProvider(requestBody: UpdateIdentityProviderRequest, headersHandler?: () => {[header: string]: string}): Promise<UpdateIdentityProviderResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateIdentityProvider', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Updates the name and scopes of resource server. All other fields are read-only.</p> <important> <p>If you don't provide a value for an attribute, it will be set to the default value.</p> </important>
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateResourceServer
		 * @return {UpdateResourceServerResponse} Success
		 */
		UpdateResourceServer(requestBody: UpdateResourceServerRequest, headersHandler?: () => {[header: string]: string}): Promise<UpdateResourceServerResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateResourceServer', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Allows a user to update a specific attribute (one at a time).
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserAttributes
		 * @return {UpdateUserAttributesResponse} Success
		 */
		UpdateUserAttributes(requestBody: UpdateUserAttributesRequest, headersHandler?: () => {[header: string]: string}): Promise<UpdateUserAttributesResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserAttributes', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Updates the specified user pool with the specified attributes. You can get a list of the current user pool settings with .</p> <important> <p>If you don't provide a value for an attribute, it will be set to the default value.</p> </important>
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPool
		 * @return {UpdateUserPoolResponse} Success
		 */
		UpdateUserPool(requestBody: UpdateUserPoolRequest, headersHandler?: () => {[header: string]: string}): Promise<UpdateUserPoolResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPool', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Updates the specified user pool app client with the specified attributes. You can get a list of the current user pool app client settings with .</p> <important> <p>If you don't provide a value for an attribute, it will be set to the default value.</p> </important>
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPoolClient
		 * @return {UpdateUserPoolClientResponse} Success
		 */
		UpdateUserPoolClient(requestBody: UpdateUserPoolClientRequest, headersHandler?: () => {[header: string]: string}): Promise<UpdateUserPoolClientResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPoolClient', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Updates the Secure Sockets Layer (SSL) certificate for the custom domain for your user pool.</p> <p>You can use this operation to provide the Amazon Resource Name (ARN) of a new certificate to Amazon Cognito. You cannot use it to change the domain for a user pool.</p> <p>A custom domain is used to host the Amazon Cognito hosted UI, which provides sign-up and sign-in pages for your application. When you set up a custom domain, you provide a certificate that you manage with AWS Certificate Manager (ACM). When necessary, you can use this operation to change the certificate that you applied to your custom domain.</p> <p>Usually, this is unnecessary following routine certificate renewal with ACM. When you renew your existing certificate in ACM, the ARN for your certificate remains the same, and your custom domain uses the new certificate automatically.</p> <p>However, if you replace your existing certificate with a new one, ACM gives the new certificate a new ARN. To apply the new certificate to your custom domain, you must provide this ARN to Amazon Cognito.</p> <p>When you add your new certificate in ACM, you must choose US East (N. Virginia) as the AWS Region.</p> <p>After you submit your request, Amazon Cognito requires up to 1 hour to distribute your new certificate to your custom domain.</p> <p>For more information about adding a custom domain to your user pool, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-add-custom-domain.html">Using Your Own Domain for the Hosted UI</a>.</p>
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPoolDomain
		 * @return {UpdateUserPoolDomainResponse} Success
		 */
		UpdateUserPoolDomain(requestBody: UpdateUserPoolDomainRequest, headersHandler?: () => {[header: string]: string}): Promise<UpdateUserPoolDomainResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPoolDomain', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Use this API to register a user's entered TOTP code and mark the user's software token MFA status as "verified" if successful. The request takes an access token or a session string, but not both.
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.VerifySoftwareToken
		 * @return {VerifySoftwareTokenResponse} Success
		 */
		VerifySoftwareToken(requestBody: VerifySoftwareTokenRequest, headersHandler?: () => {[header: string]: string}): Promise<VerifySoftwareTokenResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.VerifySoftwareToken', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Verifies the specified user attributes in the user pool.
		 * Post /#X-Amz-Target=AWSCognitoIdentityProviderService.VerifyUserAttribute
		 * @return {VerifyUserAttributeResponse} Success
		 */
		VerifyUserAttribute(requestBody: VerifyUserAttributeRequest, headersHandler?: () => {[header: string]: string}): Promise<VerifyUserAttributeResponse> {
			return fetch(this.baseUri + '/#X-Amz-Target=AWSCognitoIdentityProviderService.VerifyUserAttribute', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}
	}

}

