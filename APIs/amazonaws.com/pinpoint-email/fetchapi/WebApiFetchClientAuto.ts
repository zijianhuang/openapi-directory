export namespace My_Demo_Client {

	/**Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS). If the value is <code>Require</code>, messages are only delivered if a TLS connection can be established. If the value is <code>Optional</code>, messages can be delivered in plain text if a TLS connection can't be established. */
	export enum TlsPolicy { REQUIRE = 0, OPTIONAL = 1 }


	/**<p>An object that defines the tags that are associated with a resource. A <i>tag</i> is a label that you optionally define and associate with a resource in Amazon Pinpoint. Tags can help you categorize and manage resources in different ways, such as by purpose, owner, environment, or other criteria. A resource can have as many as 50 tags.</p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for a more specific tag value. A tag value acts as a descriptor within a tag key. A tag key can contain as many as 128 characters. A tag value can contain as many as 256 characters. The characters can be Unicode letters, digits, white space, or one of the following symbols: _ . : / = + -. The following additional restrictions apply to tags:</p> <ul> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>For each associated resource, each tag key must be unique and it can have only one value.</p> </li> <li> <p>The <code>aws:</code> prefix is reserved for use by AWS; you can’t use it in any tag keys or values that you define. In addition, you can't edit or remove tag keys or values that use this prefix. Tags that use this prefix don’t count against the limit of 50 tags per resource.</p> </li> <li> <p>You can associate tags with public or shared resources, but the tags are available only for your AWS account, not any other accounts that share the resource. In addition, the tags are available only for resources that are located in the specified AWS Region for your AWS account.</p> </li> </ul> */
	export interface Tag {
		Key: string;
		Value: string;
	}


	/**An object that defines an Amazon Kinesis Data Firehose destination for email events. You can use Amazon Kinesis Data Firehose to stream data to other services, such as Amazon S3 and Amazon Redshift. */
	export interface KinesisFirehoseDestination {
		IamRoleArn: string;
		DeliveryStreamArn: string;
	}


	/**An object that defines an Amazon CloudWatch destination for email events. You can use Amazon CloudWatch to monitor and gain insights on your email sending metrics. */
	export interface CloudWatchDestination {
		DimensionConfigurations: Array<CloudWatchDimensionConfiguration>;
	}


	/**An object that defines an Amazon SNS destination for email events. You can use Amazon SNS to send notification when certain email events occur. */
	export interface SnsDestination {
		TopicArn: string;
	}


	/**An object that defines a Amazon Pinpoint destination for email events. You can use Amazon Pinpoint events to create attributes in Amazon Pinpoint projects. You can use these attributes to create segments for your campaigns. */
	export interface PinpointDestination {
		ApplicationArn?: string;
	}


	/**Information about the predictive inbox placement test that you created. */
	export interface CreateDeliverabilityTestReportResponse {

		/**A unique string that identifies a Deliverability dashboard report. */
		ReportId: string;

		/**The status of a predictive inbox placement test. If the status is <code>IN_PROGRESS</code>, then the predictive inbox placement test is currently running. Predictive inbox placement tests are usually complete within 24 hours of creating the test. If the status is <code>COMPLETE</code>, then the test is finished, and you can use the <code>GetDeliverabilityTestReport</code> operation to view the results of the test. */
		DeliverabilityTestStatus: CreateDeliverabilityTestReportResponseDeliverabilityTestStatus;
	}

	export enum CreateDeliverabilityTestReportResponseDeliverabilityTestStatus { IN_PROGRESS = 0, COMPLETED = 1 }


	/**Represents the email message that you're sending. The <code>Message</code> object consists of a subject line and a message body. */
	export interface Message {

		/**An object that represents the content of the email, and optionally a character set specification. */
		Subject: Content;

		/**Represents the body of the email message. */
		Body: Body;
	}


	/**The raw email message. */
	export interface RawMessage {

		/**<p>The raw email message. The message has to meet the following criteria:</p> <ul> <li> <p>The message has to contain a header and a body, separated by one blank line.</p> </li> <li> <p>All of the required header fields must be present in the message.</p> </li> <li> <p>Each part of a multipart MIME message must be formatted properly.</p> </li> <li> <p>Attachments must be in a file format that Amazon Pinpoint supports. </p> </li> <li> <p>The entire message must be Base64 encoded.</p> </li> <li> <p>If any of the MIME parts in your message contain content that is outside of the 7-bit ASCII character range, you should encode that content to ensure that recipients' email clients render the message properly.</p> </li> <li> <p>The length of any single line of text in the message can't exceed 1,000 characters. This restriction is defined in <a href="https://tools.ietf.org/html/rfc5321">RFC 5321</a>.</p> </li> </ul> */
		Data: string;
	}

	export interface Template {
		TemplateArn?: string;
		TemplateData?: string;
	}


	/**<p>If the email identity is a domain, this object contains tokens that you can use to create a set of CNAME records. To sucessfully verify your domain, you have to add these records to the DNS configuration for your domain.</p> <p>If the email identity is an email address, this object is empty. </p> */
	export interface CreateEmailIdentityResponse {

		/**<p>The email identity type. The identity type can be one of the following:</p> <ul> <li> <p> <code>EMAIL_ADDRESS</code> – The identity is an email address.</p> </li> <li> <p> <code>DOMAIN</code> – The identity is a domain.</p> </li> </ul> */
		IdentityType?: CreateEmailIdentityResponseIdentityType;
		VerifiedForSendingStatus?: boolean;

		/**An object that contains information about the DKIM configuration for an email identity. */
		DkimAttributes?: DkimAttributes;
	}

	export enum CreateEmailIdentityResponseIdentityType { EMAIL_ADDRESS = 0, DOMAIN = 1, MANAGED_DOMAIN = 2 }


	/**A list of details about the email-sending capabilities of your Amazon Pinpoint account in the current AWS Region. */
	export interface GetAccountResponse {

		/**An object that contains information about the per-day and per-second sending limits for your Amazon Pinpoint account in the current AWS Region. */
		SendQuota?: SendQuota;
		SendingEnabled?: boolean;
		DedicatedIpAutoWarmupEnabled?: boolean;
		EnforcementStatus?: string;
		ProductionAccessEnabled?: boolean;
	}


	/**An object that contains information about blacklist events. */
	export interface GetBlacklistReportsResponse {
		BlacklistReport: BlacklistReport;
	}


	/**Information about a configuration set. */
	export interface GetConfigurationSetResponse {

		/**<p>The name of a configuration set.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p> */
		ConfigurationSetName?: string;

		/**<p>An object that defines the tracking options for a configuration set. When you use Amazon Pinpoint to send an email, it contains an invisible image that's used to track when recipients open your email. If your email contains links, those links are changed slightly in order to track when recipients click them.</p> <p>These images and links include references to a domain operated by AWS. You can optionally configure Amazon Pinpoint to use a domain that you operate for these images and links.</p> */
		TrackingOptions?: TrackingOptions;

		/**Used to associate a configuration set with a dedicated IP pool. */
		DeliveryOptions?: DeliveryOptions;

		/**Enable or disable collection of reputation metrics for emails that you send using this configuration set in the current AWS Region. */
		ReputationOptions?: ReputationOptions;

		/**Used to enable or disable email sending for messages that use this configuration set in the current AWS Region. */
		SendingOptions?: SendingOptions;
		Tags?: Array<Tag>;
	}


	/**Information about an event destination for a configuration set. */
	export interface GetConfigurationSetEventDestinationsResponse {
		EventDestinations?: Array<EventDestination>;
	}


	/**Information about a dedicated IP address. */
	export interface GetDedicatedIpResponse {

		/**<p>Contains information about a dedicated IP address that is associated with your Amazon Pinpoint account.</p> <p/> */
		DedicatedIp?: DedicatedIp;
	}


	/**Information about the dedicated IP addresses that are associated with your Amazon Pinpoint account. */
	export interface GetDedicatedIpsResponse {

		/**A list of dedicated IP addresses that are associated with your Amazon Pinpoint account. */
		DedicatedIps?: Array<DedicatedIp>;
		NextToken?: string;
	}


	/**An object that shows the status of the Deliverability dashboard for your Amazon Pinpoint account. */
	export interface GetDeliverabilityDashboardOptionsResponse {
		DashboardEnabled: boolean;
		SubscriptionExpiryDate?: Date;

		/**The current status of your Deliverability dashboard subscription. If this value is <code>PENDING_EXPIRATION</code>, your subscription is scheduled to expire at the end of the current calendar month. */
		AccountStatus?: GetDeliverabilityDashboardOptionsResponseAccountStatus;

		/**An object that contains information about the Deliverability dashboard subscription for a verified domain that you use to send email and currently has an active Deliverability dashboard subscription. If a Deliverability dashboard subscription is active for a domain, you gain access to reputation, inbox placement, and other metrics for the domain. */
		ActiveSubscribedDomains?: Array<DomainDeliverabilityTrackingOption>;

		/**An object that contains information about the Deliverability dashboard subscription for a verified domain that you use to send email and currently has an active Deliverability dashboard subscription. If a Deliverability dashboard subscription is active for a domain, you gain access to reputation, inbox placement, and other metrics for the domain. */
		PendingExpirationSubscribedDomains?: Array<DomainDeliverabilityTrackingOption>;
	}

	export enum GetDeliverabilityDashboardOptionsResponseAccountStatus { ACTIVE = 0, PENDING_EXPIRATION = 1, DISABLED = 2 }


	/**The results of the predictive inbox placement test. */
	export interface GetDeliverabilityTestReportResponse {

		/**An object that contains metadata related to a predictive inbox placement test. */
		DeliverabilityTestReport: DeliverabilityTestReport;

		/**An object that contains inbox placement data for an email provider. */
		OverallPlacement: PlacementStatistics;
		IspPlacements: Array<IspPlacement>;

		/**The body of an email message. */
		Message?: string;
		Tags?: Array<Tag>;
	}


	/**An object that contains all the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for (<code>PutDeliverabilityDashboardOption</code> operation). */
	export interface GetDomainDeliverabilityCampaignResponse {

		/**An object that contains the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for (<code>PutDeliverabilityDashboardOption</code> operation). */
		DomainDeliverabilityCampaign: DomainDeliverabilityCampaign;
	}


	/**An object that includes statistics that are related to the domain that you specified. */
	export interface GetDomainStatisticsReportResponse {

		/**An object that contains information about email that was sent from the selected domain. */
		OverallVolume: OverallVolume;
		DailyVolumes: Array<DailyVolume>;
	}


	/**Details about an email identity. */
	export interface GetEmailIdentityResponse {

		/**<p>The email identity type. The identity type can be one of the following:</p> <ul> <li> <p> <code>EMAIL_ADDRESS</code> – The identity is an email address.</p> </li> <li> <p> <code>DOMAIN</code> – The identity is a domain.</p> </li> </ul> */
		IdentityType?: GetEmailIdentityResponseIdentityType;
		FeedbackForwardingStatus?: boolean;
		VerifiedForSendingStatus?: boolean;

		/**An object that contains information about the DKIM configuration for an email identity. */
		DkimAttributes?: DkimAttributes;

		/**A list of attributes that are associated with a MAIL FROM domain. */
		MailFromAttributes?: MailFromAttributes;
		Tags?: Array<Tag>;
	}

	export enum GetEmailIdentityResponseIdentityType { EMAIL_ADDRESS = 0, DOMAIN = 1, MANAGED_DOMAIN = 2 }


	/**A list of configuration sets in your Amazon Pinpoint account in the current AWS Region. */
	export interface ListConfigurationSetsResponse {
		ConfigurationSets?: Array<ConfigurationSetName>;
		NextToken?: string;
	}


	/**A list of dedicated IP pools. */
	export interface ListDedicatedIpPoolsResponse {

		/**A list of dedicated IP pools that are associated with your Amazon Pinpoint account. */
		DedicatedIpPools?: Array<PoolName>;
		NextToken?: string;
	}


	/**A list of the predictive inbox placement test reports that are available for your account, regardless of whether or not those tests are complete. */
	export interface ListDeliverabilityTestReportsResponse {
		DeliverabilityTestReports: Array<DeliverabilityTestReport>;
		NextToken?: string;
	}


	/**An array of objects that provide deliverability data for all the campaigns that used a specific domain to send email during a specified time range. This data is available for a domain only if you enabled the Deliverability dashboard (<code>PutDeliverabilityDashboardOption</code> operation) for the domain. */
	export interface ListDomainDeliverabilityCampaignsResponse {

		/**<p/> */
		DomainDeliverabilityCampaigns: Array<DomainDeliverabilityCampaign>;
		NextToken?: string;
	}


	/**A list of all of the identities that you've attempted to verify for use with Amazon Pinpoint, regardless of whether or not those identities were successfully verified. */
	export interface ListEmailIdentitiesResponse {
		EmailIdentities?: Array<IdentityInfo>;
		NextToken?: string;
	}

	export interface ListTagsForResourceResponse {
		Tags: Array<Tag>;
	}


	/**An object that contains information about the Deliverability dashboard subscription for a verified domain that you use to send email and currently has an active Deliverability dashboard subscription. If a Deliverability dashboard subscription is active for a domain, you gain access to reputation, inbox placement, and other metrics for the domain. */
	export interface DomainDeliverabilityTrackingOption {
		Domain?: string;
		SubscriptionStartDate?: Date;

		/**An object that contains information about the inbox placement data settings for a verified domain that’s associated with your AWS account. This data is available only if you enabled the Deliverability dashboard for the domain (<code>PutDeliverabilityDashboardOption</code> operation). */
		InboxPlacementTrackingOption?: InboxPlacementTrackingOption;
	}


	/**A unique message ID that you receive when Amazon Pinpoint accepts an email for sending. */
	export interface SendEmailResponse {
		MessageId?: string;
	}


	/**Contains the name and value of a tag that you apply to an email. You can use message tags when you publish email sending events.  */
	export interface MessageTag {

		/**<p>The name of the message tag. The message tag name has to meet the following criteria:</p> <ul> <li> <p>It can only contain ASCII letters (a–z, A–Z), numbers (0–9), underscores (_), or dashes (-).</p> </li> <li> <p>It can contain no more than 256 characters.</p> </li> </ul> */
		Name: string;

		/**<p>The value of the message tag. The message tag value has to meet the following criteria:</p> <ul> <li> <p>It can only contain ASCII letters (a–z, A–Z), numbers (0–9), underscores (_), or dashes (-).</p> </li> <li> <p>It can contain no more than 256 characters.</p> </li> </ul> */
		Value: string;
	}


	/**<p>The action that you want Amazon Pinpoint to take if it can't read the required MX record for a custom MAIL FROM domain. When you set this value to <code>UseDefaultValue</code>, Amazon Pinpoint uses <i>amazonses.com</i> as the MAIL FROM domain. When you set this value to <code>RejectMessage</code>, Amazon Pinpoint returns a <code>MailFromDomainNotVerified</code> error, and doesn't attempt to deliver the email.</p> <p>These behaviors are taken when the custom MAIL FROM domain configuration is in the <code>Pending</code>, <code>Failed</code>, and <code>TemporaryFailure</code> states.</p> */
	export enum BehaviorOnMxFailure { USE_DEFAULT_VALUE = 0, REJECT_MESSAGE = 1 }


	/**An object that contains information about a blacklisting event that impacts one of the dedicated IP addresses that is associated with your account. */
	export interface BlacklistEntry {

		/**The name of a blacklist that an IP address was found on. */
		RblName?: string;
		ListingTime?: Date;

		/**A description of the blacklisting event. */
		Description?: string;
	}


	/**An object that represents the content of the email, and optionally a character set specification. */
	export interface Content {
		Data: string;
		Charset?: string;
	}


	/**Represents the body of the email message. */
	export interface Body {

		/**An object that represents the content of the email, and optionally a character set specification. */
		Text?: Content;

		/**An object that represents the content of the email, and optionally a character set specification. */
		Html?: Content;
	}


	/**The location where Amazon Pinpoint finds the value of a dimension to publish to Amazon CloudWatch. If you want Amazon Pinpoint to use the message tags that you specify using an X-SES-MESSAGE-TAGS header or a parameter to the SendEmail/SendRawEmail API, choose <code>messageTag</code>. If you want Amazon Pinpoint to use your own email headers, choose <code>emailHeader</code>. If you want Amazon Pinpoint to use link tags, choose <code>linkTags</code>. */
	export enum DimensionValueSource { MESSAGE_TAG = 0, EMAIL_HEADER = 1, LINK_TAG = 2 }


	/**An object that defines the dimension configuration to use when you send Amazon Pinpoint email events to Amazon CloudWatch. */
	export interface CloudWatchDimensionConfiguration {

		/**<p>The name of an Amazon CloudWatch dimension associated with an email sending metric. The name has to meet the following criteria:</p> <ul> <li> <p>It can only contain ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).</p> </li> <li> <p>It can contain no more than 256 characters.</p> </li> </ul> */
		DimensionName: string;

		/**The location where Amazon Pinpoint finds the value of a dimension to publish to Amazon CloudWatch. If you want Amazon Pinpoint to use the message tags that you specify using an X-SES-MESSAGE-TAGS header or a parameter to the SendEmail/SendRawEmail API, choose <code>messageTag</code>. If you want Amazon Pinpoint to use your own email headers, choose <code>emailHeader</code>. If you want Amazon Pinpoint to use link tags, choose <code>linkTags</code>. */
		DimensionValueSource: CloudWatchDimensionConfigurationDimensionValueSource;

		/**<p>The default value of the dimension that is published to Amazon CloudWatch if you don't provide the value of the dimension when you send an email. This value has to meet the following criteria:</p> <ul> <li> <p>It can only contain ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).</p> </li> <li> <p>It can contain no more than 256 characters.</p> </li> </ul> */
		DefaultDimensionValue: string;
	}

	export enum CloudWatchDimensionConfigurationDimensionValueSource { MESSAGE_TAG = 0, EMAIL_HEADER = 1, LINK_TAG = 2 }


	/**An object that defines the event destination. Specifically, it defines which services receive events from emails sent using the configuration set that the event destination is associated with. Also defines the types of events that are sent to the event destination. */
	export interface EventDestinationDefinition {
		Enabled?: boolean;
		MatchingEventTypes?: Array<EventType>;

		/**An object that defines an Amazon Kinesis Data Firehose destination for email events. You can use Amazon Kinesis Data Firehose to stream data to other services, such as Amazon S3 and Amazon Redshift. */
		KinesisFirehoseDestination?: KinesisFirehoseDestination;

		/**An object that defines an Amazon CloudWatch destination for email events. You can use Amazon CloudWatch to monitor and gain insights on your email sending metrics. */
		CloudWatchDestination?: CloudWatchDestination;

		/**An object that defines an Amazon SNS destination for email events. You can use Amazon SNS to send notification when certain email events occur. */
		SnsDestination?: SnsDestination;

		/**An object that defines a Amazon Pinpoint destination for email events. You can use Amazon Pinpoint events to create attributes in Amazon Pinpoint projects. You can use these attributes to create segments for your campaigns. */
		PinpointDestination?: PinpointDestination;
	}


	/**A request to add an event destination to a configuration set. */
	export interface CreateConfigurationSetEventDestinationRequest {

		/**<p>The name of an event destination.</p> <p>In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p> */
		EventDestinationName: string;

		/**An object that defines the event destination. Specifically, it defines which services receive events from emails sent using the configuration set that the event destination is associated with. Also defines the types of events that are sent to the event destination. */
		EventDestination: EventDestinationDefinition;
	}


	/**<p>An object that defines the tracking options for a configuration set. When you use Amazon Pinpoint to send an email, it contains an invisible image that's used to track when recipients open your email. If your email contains links, those links are changed slightly in order to track when recipients click them.</p> <p>These images and links include references to a domain operated by AWS. You can optionally configure Amazon Pinpoint to use a domain that you operate for these images and links.</p> */
	export interface TrackingOptions {

		/**The domain that you want to use for tracking open and click events. */
		CustomRedirectDomain: string;
	}


	/**Used to associate a configuration set with a dedicated IP pool. */
	export interface DeliveryOptions {

		/**Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS). If the value is <code>Require</code>, messages are only delivered if a TLS connection can be established. If the value is <code>Optional</code>, messages can be delivered in plain text if a TLS connection can't be established. */
		TlsPolicy?: DeliveryOptionsTlsPolicy;

		/**The name of a dedicated IP pool. */
		SendingPoolName?: string;
	}

	export enum DeliveryOptionsTlsPolicy { REQUIRE = 0, OPTIONAL = 1 }


	/**Enable or disable collection of reputation metrics for emails that you send using this configuration set in the current AWS Region.  */
	export interface ReputationOptions {
		ReputationMetricsEnabled?: boolean;

		/**The date and time (in Unix time) when the reputation metrics were last given a fresh start. When your account is given a fresh start, your reputation metrics are calculated starting from the date of the fresh start. */
		LastFreshStart?: Date;
	}


	/**Used to enable or disable email sending for messages that use this configuration set in the current AWS Region. */
	export interface SendingOptions {
		SendingEnabled?: boolean;
	}


	/**A request to create a configuration set. */
	export interface CreateConfigurationSetRequest {

		/**<p>The name of a configuration set.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p> */
		ConfigurationSetName: string;

		/**<p>An object that defines the tracking options for a configuration set. When you use Amazon Pinpoint to send an email, it contains an invisible image that's used to track when recipients open your email. If your email contains links, those links are changed slightly in order to track when recipients click them.</p> <p>These images and links include references to a domain operated by AWS. You can optionally configure Amazon Pinpoint to use a domain that you operate for these images and links.</p> */
		TrackingOptions?: TrackingOptions;

		/**Used to associate a configuration set with a dedicated IP pool. */
		DeliveryOptions?: DeliveryOptions;

		/**Enable or disable collection of reputation metrics for emails that you send using this configuration set in the current AWS Region. */
		ReputationOptions?: ReputationOptions;

		/**Used to enable or disable email sending for messages that use this configuration set in the current AWS Region. */
		SendingOptions?: SendingOptions;
		Tags?: Array<Tag>;
	}


	/**A request to create a new dedicated IP pool. */
	export interface CreateDedicatedIpPoolRequest {

		/**The name of a dedicated IP pool. */
		PoolName: string;
		Tags?: Array<Tag>;
	}


	/**An object that defines the entire content of the email, including the message headers and the body content. You can create a simple email message, in which you specify the subject and the text and HTML versions of the message body. You can also create raw messages, in which you specify a complete MIME-formatted message. Raw messages can include attachments and custom headers. */
	export interface EmailContent {

		/**Represents the email message that you're sending. The <code>Message</code> object consists of a subject line and a message body. */
		Simple?: Message;

		/**The raw email message. */
		Raw?: RawMessage;
		Template?: Template;
	}


	/**A request to perform a predictive inbox placement test. Predictive inbox placement tests can help you predict how your messages will be handled by various email providers around the world. When you perform a predictive inbox placement test, you provide a sample message that contains the content that you plan to send to your customers. Amazon Pinpoint then sends that message to special email addresses spread across several major email providers. After about 24 hours, the test is complete, and you can use the <code>GetDeliverabilityTestReport</code> operation to view the results of the test. */
	export interface CreateDeliverabilityTestReportRequest {

		/**A name that helps you identify a report generated by the Deliverability dashboard. */
		ReportName?: string;
		FromEmailAddress: string;

		/**An object that defines the entire content of the email, including the message headers and the body content. You can create a simple email message, in which you specify the subject and the text and HTML versions of the message body. You can also create raw messages, in which you specify a complete MIME-formatted message. Raw messages can include attachments and custom headers. */
		Content: EmailContent;
		Tags?: Array<Tag>;
	}


	/**The status of a predictive inbox placement test. If the status is <code>IN_PROGRESS</code>, then the predictive inbox placement test is currently running. Predictive inbox placement tests are usually complete within 24 hours of creating the test. If the status is <code>COMPLETE</code>, then the test is finished, and you can use the <code>GetDeliverabilityTestReport</code> operation to view the results of the test. */
	export enum DeliverabilityTestStatus { IN_PROGRESS = 0, COMPLETED = 1 }


	/**A request to begin the verification process for an email identity (an email address or domain). */
	export interface CreateEmailIdentityRequest {
		EmailIdentity: string;
		Tags?: Array<Tag>;
	}


	/**<p>The email identity type. The identity type can be one of the following:</p> <ul> <li> <p> <code>EMAIL_ADDRESS</code> – The identity is an email address.</p> </li> <li> <p> <code>DOMAIN</code> – The identity is a domain.</p> </li> </ul> */
	export enum IdentityType { EMAIL_ADDRESS = 0, DOMAIN = 1, MANAGED_DOMAIN = 2 }


	/**An object that contains information about the DKIM configuration for an email identity. */
	export interface DkimAttributes {
		SigningEnabled?: boolean;

		/**<p>The DKIM authentication status of the identity. The status can be one of the following:</p> <ul> <li> <p> <code>PENDING</code> – The DKIM verification process was initiated, and Amazon Pinpoint is still waiting for the required CNAME records to appear in the DNS configuration for the domain.</p> </li> <li> <p> <code>SUCCESS</code> – The DKIM authentication process completed successfully.</p> </li> <li> <p> <code>FAILED</code> – The DKIM authentication process failed. This can happen when Amazon Pinpoint fails to find the required CNAME records in the DNS configuration of the domain.</p> </li> <li> <p> <code>TEMPORARY_FAILURE</code> – A temporary issue is preventing Amazon Pinpoint from determining the DKIM authentication status of the domain.</p> </li> <li> <p> <code>NOT_STARTED</code> – The DKIM verification process hasn't been initiated for the domain.</p> </li> </ul> */
		Status?: DkimAttributesStatus;
		Tokens?: Array<DnsToken>;
	}

	export enum DkimAttributesStatus { PENDING = 0, SUCCESS = 1, FAILED = 2, TEMPORARY_FAILURE = 3, NOT_STARTED = 4 }


	/**An object that contains information about the amount of email that was delivered to recipients. */
	export interface VolumeStatistics {

		/**An object that contains information about inbox placement volume. */
		InboxRawCount?: number;

		/**An object that contains information about inbox placement volume. */
		SpamRawCount?: number;

		/**An object that contains information about inbox placement volume. */
		ProjectedInbox?: number;

		/**An object that contains information about inbox placement volume. */
		ProjectedSpam?: number;
	}


	/**An object that contains information about the volume of email sent on each day of the analysis period. */
	export interface DailyVolume {
		StartDate?: Date;

		/**An object that contains information about the amount of email that was delivered to recipients. */
		VolumeStatistics?: VolumeStatistics;
		DomainIspPlacements?: Array<DomainIspPlacement>;
	}


	/**The warmup status of a dedicated IP. */
	export enum WarmupStatus { IN_PROGRESS = 0, DONE = 1 }


	/**<p>Contains information about a dedicated IP address that is associated with your Amazon Pinpoint account.</p> <p/> */
	export interface DedicatedIp {

		/**A dedicated IP address that is associated with your Amazon Pinpoint account. */
		Ip: string;

		/**The warmup status of a dedicated IP. */
		WarmupStatus: DedicatedIpWarmupStatus;
		WarmupPercentage: number;

		/**The name of a dedicated IP pool. */
		PoolName?: string;
	}

	export enum DedicatedIpWarmupStatus { IN_PROGRESS = 0, DONE = 1 }


	/**The current status of your Deliverability dashboard subscription. If this value is <code>PENDING_EXPIRATION</code>, your subscription is scheduled to expire at the end of the current calendar month. */
	export enum DeliverabilityDashboardAccountStatus { ACTIVE = 0, PENDING_EXPIRATION = 1, DISABLED = 2 }


	/**An object that contains metadata related to a predictive inbox placement test. */
	export interface DeliverabilityTestReport {

		/**A unique string that identifies a Deliverability dashboard report. */
		ReportId?: string;

		/**A name that helps you identify a report generated by the Deliverability dashboard. */
		ReportName?: string;

		/**The subject line for an email that you submitted in a predictive inbox placement test. */
		Subject?: string;
		FromEmailAddress?: string;
		CreateDate?: Date;

		/**The status of a predictive inbox placement test. If the status is <code>IN_PROGRESS</code>, then the predictive inbox placement test is currently running. Predictive inbox placement tests are usually complete within 24 hours of creating the test. If the status is <code>COMPLETE</code>, then the test is finished, and you can use the <code>GetDeliverabilityTestReport</code> operation to view the results of the test. */
		DeliverabilityTestStatus?: DeliverabilityTestReportDeliverabilityTestStatus;
	}

	export enum DeliverabilityTestReportDeliverabilityTestStatus { IN_PROGRESS = 0, COMPLETED = 1 }


	/**An object that describes the recipients for an email. */
	export interface Destination {
		ToAddresses?: Array<EmailAddress>;
		CcAddresses?: Array<EmailAddress>;
		BccAddresses?: Array<EmailAddress>;
	}


	/**<p>The DKIM authentication status of the identity. The status can be one of the following:</p> <ul> <li> <p> <code>PENDING</code> – The DKIM verification process was initiated, and Amazon Pinpoint is still waiting for the required CNAME records to appear in the DNS configuration for the domain.</p> </li> <li> <p> <code>SUCCESS</code> – The DKIM authentication process completed successfully.</p> </li> <li> <p> <code>FAILED</code> – The DKIM authentication process failed. This can happen when Amazon Pinpoint fails to find the required CNAME records in the DNS configuration of the domain.</p> </li> <li> <p> <code>TEMPORARY_FAILURE</code> – A temporary issue is preventing Amazon Pinpoint from determining the DKIM authentication status of the domain.</p> </li> <li> <p> <code>NOT_STARTED</code> – The DKIM verification process hasn't been initiated for the domain.</p> </li> </ul> */
	export enum DkimStatus { PENDING = 0, SUCCESS = 1, FAILED = 2, TEMPORARY_FAILURE = 3, NOT_STARTED = 4 }


	/**An object that contains the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for (<code>PutDeliverabilityDashboardOption</code> operation). */
	export interface DomainDeliverabilityCampaign {
		CampaignId?: string;
		ImageUrl?: string;
		Subject?: string;
		FromAddress?: string;
		SendingIps?: Array<Ip>;
		FirstSeenDateTime?: Date;
		LastSeenDateTime?: Date;

		/**An object that contains information about inbox placement volume. */
		InboxCount?: number;

		/**An object that contains information about inbox placement volume. */
		SpamCount?: number;

		/**An object that contains information about inbox placement percentages. */
		ReadRate?: number;

		/**An object that contains information about inbox placement percentages. */
		DeleteRate?: number;

		/**An object that contains information about inbox placement percentages. */
		ReadDeleteRate?: number;

		/**An object that contains information about inbox placement volume. */
		ProjectedVolume?: number;
		Esps?: Array<Esp>;
	}


	/**An object that contains information about the inbox placement data settings for a verified domain that’s associated with your AWS account. This data is available only if you enabled the Deliverability dashboard for the domain (<code>PutDeliverabilityDashboardOption</code> operation). */
	export interface InboxPlacementTrackingOption {
		Global?: boolean;
		TrackedIsps?: Array<IspName>;
	}


	/**An object that contains inbox placement data for email sent from one of your email domains to a specific email provider. */
	export interface DomainIspPlacement {

		/**The name of an email provider. */
		IspName?: string;

		/**An object that contains information about inbox placement volume. */
		InboxRawCount?: number;

		/**An object that contains information about inbox placement volume. */
		SpamRawCount?: number;

		/**An object that contains information about inbox placement percentages. */
		InboxPercentage?: number;

		/**An object that contains information about inbox placement percentages. */
		SpamPercentage?: number;
	}


	/**In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage. */
	export interface EventDestination {

		/**<p>The name of an event destination.</p> <p>In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p> */
		Name: string;
		Enabled?: boolean;
		MatchingEventTypes: Array<EventType>;

		/**An object that defines an Amazon Kinesis Data Firehose destination for email events. You can use Amazon Kinesis Data Firehose to stream data to other services, such as Amazon S3 and Amazon Redshift. */
		KinesisFirehoseDestination?: KinesisFirehoseDestination;

		/**An object that defines an Amazon CloudWatch destination for email events. You can use Amazon CloudWatch to monitor and gain insights on your email sending metrics. */
		CloudWatchDestination?: CloudWatchDestination;

		/**An object that defines an Amazon SNS destination for email events. You can use Amazon SNS to send notification when certain email events occur. */
		SnsDestination?: SnsDestination;

		/**An object that defines a Amazon Pinpoint destination for email events. You can use Amazon Pinpoint events to create attributes in Amazon Pinpoint projects. You can use these attributes to create segments for your campaigns. */
		PinpointDestination?: PinpointDestination;
	}


	/**An email sending event type. For example, email sends, opens, and bounces are all email events. */
	export enum EventType { SEND = 0, REJECT = 1, BOUNCE = 2, COMPLAINT = 3, DELIVERY = 4, OPEN = 5, CLICK = 6, RENDERING_FAILURE = 7 }


	/**An object that contains information about the per-day and per-second sending limits for your Amazon Pinpoint account in the current AWS Region. */
	export interface SendQuota {
		Max24HourSend?: number;
		MaxSendRate?: number;
		SentLast24Hours?: number;
	}


	/**An object that contains inbox placement data for an email provider. */
	export interface PlacementStatistics {

		/**An object that contains information about inbox placement percentages. */
		InboxPercentage?: number;

		/**An object that contains information about inbox placement percentages. */
		SpamPercentage?: number;

		/**An object that contains information about inbox placement percentages. */
		MissingPercentage?: number;

		/**An object that contains information about inbox placement percentages. */
		SpfPercentage?: number;

		/**An object that contains information about inbox placement percentages. */
		DkimPercentage?: number;
	}


	/**An object that contains information about email that was sent from the selected domain. */
	export interface OverallVolume {

		/**An object that contains information about the amount of email that was delivered to recipients. */
		VolumeStatistics?: VolumeStatistics;

		/**An object that contains information about inbox placement percentages. */
		ReadRatePercent?: number;
		DomainIspPlacements?: Array<DomainIspPlacement>;
	}


	/**A list of attributes that are associated with a MAIL FROM domain. */
	export interface MailFromAttributes {

		/**The domain that you want to use as a MAIL FROM domain. */
		MailFromDomain: string;

		/**<p>The status of the MAIL FROM domain. This status can have the following values:</p> <ul> <li> <p> <code>PENDING</code> – Amazon Pinpoint hasn't started searching for the MX record yet.</p> </li> <li> <p> <code>SUCCESS</code> – Amazon Pinpoint detected the required MX record for the MAIL FROM domain.</p> </li> <li> <p> <code>FAILED</code> – Amazon Pinpoint can't find the required MX record, or the record no longer exists.</p> </li> <li> <p> <code>TEMPORARY_FAILURE</code> – A temporary issue occurred, which prevented Amazon Pinpoint from determining the status of the MAIL FROM domain.</p> </li> </ul> */
		MailFromDomainStatus: MailFromAttributesMailFromDomainStatus;

		/**<p>The action that you want Amazon Pinpoint to take if it can't read the required MX record for a custom MAIL FROM domain. When you set this value to <code>UseDefaultValue</code>, Amazon Pinpoint uses <i>amazonses.com</i> as the MAIL FROM domain. When you set this value to <code>RejectMessage</code>, Amazon Pinpoint returns a <code>MailFromDomainNotVerified</code> error, and doesn't attempt to deliver the email.</p> <p>These behaviors are taken when the custom MAIL FROM domain configuration is in the <code>Pending</code>, <code>Failed</code>, and <code>TemporaryFailure</code> states.</p> */
		BehaviorOnMxFailure: MailFromAttributesBehaviorOnMxFailure;
	}

	export enum MailFromAttributesMailFromDomainStatus { PENDING = 0, SUCCESS = 1, FAILED = 2, TEMPORARY_FAILURE = 3 }

	export enum MailFromAttributesBehaviorOnMxFailure { USE_DEFAULT_VALUE = 0, REJECT_MESSAGE = 1 }


	/**Information about an email identity. */
	export interface IdentityInfo {

		/**<p>The email identity type. The identity type can be one of the following:</p> <ul> <li> <p> <code>EMAIL_ADDRESS</code> – The identity is an email address.</p> </li> <li> <p> <code>DOMAIN</code> – The identity is a domain.</p> </li> </ul> */
		IdentityType?: IdentityInfoIdentityType;
		IdentityName?: string;
		SendingEnabled?: boolean;
	}

	export enum IdentityInfoIdentityType { EMAIL_ADDRESS = 0, DOMAIN = 1, MANAGED_DOMAIN = 2 }


	/**An object that describes how email sent during the predictive inbox placement test was handled by a certain email provider. */
	export interface IspPlacement {

		/**The name of an email provider. */
		IspName?: string;

		/**An object that contains inbox placement data for an email provider. */
		PlacementStatistics?: PlacementStatistics;
	}


	/**<p>The status of the MAIL FROM domain. This status can have the following values:</p> <ul> <li> <p> <code>PENDING</code> – Amazon Pinpoint hasn't started searching for the MX record yet.</p> </li> <li> <p> <code>SUCCESS</code> – Amazon Pinpoint detected the required MX record for the MAIL FROM domain.</p> </li> <li> <p> <code>FAILED</code> – Amazon Pinpoint can't find the required MX record, or the record no longer exists.</p> </li> <li> <p> <code>TEMPORARY_FAILURE</code> – A temporary issue occurred, which prevented Amazon Pinpoint from determining the status of the MAIL FROM domain.</p> </li> </ul> */
	export enum MailFromDomainStatus { PENDING = 0, SUCCESS = 1, FAILED = 2, TEMPORARY_FAILURE = 3 }


	/**A request to enable or disable the automatic IP address warm-up feature. */
	export interface PutAccountDedicatedIpWarmupAttributesRequest {
		AutoWarmupEnabled?: boolean;
	}


	/**A request to change the ability of your account to send email. */
	export interface PutAccountSendingAttributesRequest {
		SendingEnabled?: boolean;
	}


	/**A request to associate a configuration set with a dedicated IP pool. */
	export interface PutConfigurationSetDeliveryOptionsRequest {

		/**Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS). If the value is <code>Require</code>, messages are only delivered if a TLS connection can be established. If the value is <code>Optional</code>, messages can be delivered in plain text if a TLS connection can't be established. */
		TlsPolicy?: PutConfigurationSetDeliveryOptionsRequestTlsPolicy;

		/**The name of the dedicated IP pool that you want to associate with the configuration set. */
		SendingPoolName?: string;
	}

	export enum PutConfigurationSetDeliveryOptionsRequestTlsPolicy { REQUIRE = 0, OPTIONAL = 1 }


	/**A request to enable or disable tracking of reputation metrics for a configuration set. */
	export interface PutConfigurationSetReputationOptionsRequest {
		ReputationMetricsEnabled?: boolean;
	}


	/**A request to enable or disable the ability of Amazon Pinpoint to send emails that use a specific configuration set. */
	export interface PutConfigurationSetSendingOptionsRequest {
		SendingEnabled?: boolean;
	}


	/**A request to add a custom domain for tracking open and click events to a configuration set. */
	export interface PutConfigurationSetTrackingOptionsRequest {

		/**The domain that you want to use for tracking open and click events. */
		CustomRedirectDomain?: string;
	}


	/**A request to move a dedicated IP address to a dedicated IP pool. */
	export interface PutDedicatedIpInPoolRequest {

		/**The name of a dedicated IP pool. */
		DestinationPoolName: string;
	}


	/**A request to change the warm-up attributes for a dedicated IP address. This operation is useful when you want to resume the warm-up process for an existing IP address. */
	export interface PutDedicatedIpWarmupAttributesRequest {
		WarmupPercentage: number;
	}


	/**<p>Enable or disable the Deliverability dashboard for your Amazon Pinpoint account. When you enable the Deliverability dashboard, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email using Amazon Pinpoint. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon Pinpoint. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p> */
	export interface PutDeliverabilityDashboardOptionRequest {
		DashboardEnabled: boolean;

		/**An object that contains information about the Deliverability dashboard subscription for a verified domain that you use to send email and currently has an active Deliverability dashboard subscription. If a Deliverability dashboard subscription is active for a domain, you gain access to reputation, inbox placement, and other metrics for the domain. */
		SubscribedDomains?: Array<DomainDeliverabilityTrackingOption>;
	}


	/**A request to enable or disable DKIM signing of email that you send from an email identity. */
	export interface PutEmailIdentityDkimAttributesRequest {
		SigningEnabled?: boolean;
	}


	/**A request to set the attributes that control how bounce and complaint events are processed. */
	export interface PutEmailIdentityFeedbackAttributesRequest {
		EmailForwardingEnabled?: boolean;
	}


	/**A request to configure the custom MAIL FROM domain for a verified identity. */
	export interface PutEmailIdentityMailFromAttributesRequest {

		/**The domain that you want to use as a MAIL FROM domain. */
		MailFromDomain?: string;

		/**<p>The action that you want Amazon Pinpoint to take if it can't read the required MX record for a custom MAIL FROM domain. When you set this value to <code>UseDefaultValue</code>, Amazon Pinpoint uses <i>amazonses.com</i> as the MAIL FROM domain. When you set this value to <code>RejectMessage</code>, Amazon Pinpoint returns a <code>MailFromDomainNotVerified</code> error, and doesn't attempt to deliver the email.</p> <p>These behaviors are taken when the custom MAIL FROM domain configuration is in the <code>Pending</code>, <code>Failed</code>, and <code>TemporaryFailure</code> states.</p> */
		BehaviorOnMxFailure?: PutEmailIdentityMailFromAttributesRequestBehaviorOnMxFailure;
	}

	export enum PutEmailIdentityMailFromAttributesRequestBehaviorOnMxFailure { USE_DEFAULT_VALUE = 0, REJECT_MESSAGE = 1 }


	/**A request to send an email message. */
	export interface SendEmailRequest {
		FromEmailAddress?: string;

		/**An object that describes the recipients for an email. */
		Destination: Destination;
		ReplyToAddresses?: Array<EmailAddress>;
		FeedbackForwardingEmailAddress?: string;

		/**An object that defines the entire content of the email, including the message headers and the body content. You can create a simple email message, in which you specify the subject and the text and HTML versions of the message body. You can also create raw messages, in which you specify a complete MIME-formatted message. Raw messages can include attachments and custom headers. */
		Content: EmailContent;

		/**A list of message tags. */
		EmailTags?: Array<MessageTag>;

		/**<p>The name of a configuration set.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p> */
		ConfigurationSetName?: string;
	}

	export interface TagResourceRequest {
		ResourceArn: string;
		Tags: Array<Tag>;
	}


	/**A request to change the settings for an event destination for a configuration set. */
	export interface UpdateConfigurationSetEventDestinationRequest {

		/**An object that defines the event destination. Specifically, it defines which services receive events from emails sent using the configuration set that the event destination is associated with. Also defines the types of events that are sent to the event destination. */
		EventDestination: EventDestinationDefinition;
	}

	export class DemoClient {
		constructor(private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/') {
		}

		/**
		 * Create a configuration set. <i>Configuration sets</i> are groups of rules that you can apply to the emails you send using Amazon Pinpoint. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.
		 * Post /v1/email/configuration-sets
		 * @return {CreateConfigurationSetResponse} Success
		 */
		CreateConfigurationSet(requestBody: CreateConfigurationSetBody, headersHandler?: () => {[header: string]: string}): Promise<CreateConfigurationSetResponse> {
			return fetch(this.baseUri + '/v1/email/configuration-sets', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>List all of the configuration sets associated with your Amazon Pinpoint account in the current region.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>
		 * Get /v1/email/configuration-sets
		 * @param {string} NextToken A token returned from a previous call to <code>ListConfigurationSets</code> to indicate the position in the list of configuration sets.
		 * @param {number} PageSize The number of results to show in a single call to <code>ListConfigurationSets</code>. If the number of results is larger than the number you specified in this parameter, then the response includes a <code>NextToken</code> element, which you can use to obtain additional results.
		 * @return {ListConfigurationSetsResponse} Success
		 */
		ListConfigurationSets(NextToken: string, PageSize: number, headersHandler?: () => {[header: string]: string}): Promise<ListConfigurationSetsResponse> {
			return fetch(this.baseUri + '/v1/email/configuration-sets?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&PageSize=' + PageSize, { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * <p>Create an event destination. In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p> <p>A single configuration set can include more than one event destination.</p>
		 * Post /v1/email/configuration-sets/{ConfigurationSetName}/event-destinations
		 * @param {string} ConfigurationSetName The name of the configuration set that you want to add an event destination to.
		 * @return {CreateConfigurationSetEventDestinationResponse} Success
		 */
		CreateConfigurationSetEventDestination(ConfigurationSetName: string, requestBody: CreateConfigurationSetEventDestinationBody, headersHandler?: () => {[header: string]: string}): Promise<CreateConfigurationSetEventDestinationResponse> {
			return fetch(this.baseUri + '/v1/email/configuration-sets/' + (ConfigurationSetName == null ? '' : encodeURIComponent(ConfigurationSetName)) + '/event-destinations', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Retrieve a list of event destinations that are associated with a configuration set.</p> <p>In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>
		 * Get /v1/email/configuration-sets/{ConfigurationSetName}/event-destinations
		 * @param {string} ConfigurationSetName The name of the configuration set that contains the event destination.
		 * @return {GetConfigurationSetEventDestinationsResponse} Success
		 */
		GetConfigurationSetEventDestinations(ConfigurationSetName: string, headersHandler?: () => {[header: string]: string}): Promise<GetConfigurationSetEventDestinationsResponse> {
			return fetch(this.baseUri + '/v1/email/configuration-sets/' + (ConfigurationSetName == null ? '' : encodeURIComponent(ConfigurationSetName)) + '/event-destinations', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Create a new pool of dedicated IP addresses. A pool can include one or more dedicated IP addresses that are associated with your Amazon Pinpoint account. You can associate a pool with a configuration set. When you send an email that uses that configuration set, Amazon Pinpoint sends it using only the IP addresses in the associated pool.
		 * Post /v1/email/dedicated-ip-pools
		 * @return {CreateDedicatedIpPoolResponse} Success
		 */
		CreateDedicatedIpPool(requestBody: CreateDedicatedIpPoolBody, headersHandler?: () => {[header: string]: string}): Promise<CreateDedicatedIpPoolResponse> {
			return fetch(this.baseUri + '/v1/email/dedicated-ip-pools', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * List all of the dedicated IP pools that exist in your Amazon Pinpoint account in the current AWS Region.
		 * Get /v1/email/dedicated-ip-pools
		 * @param {string} NextToken A token returned from a previous call to <code>ListDedicatedIpPools</code> to indicate the position in the list of dedicated IP pools.
		 * @param {number} PageSize The number of results to show in a single call to <code>ListDedicatedIpPools</code>. If the number of results is larger than the number you specified in this parameter, then the response includes a <code>NextToken</code> element, which you can use to obtain additional results.
		 * @return {ListDedicatedIpPoolsResponse} Success
		 */
		ListDedicatedIpPools(NextToken: string, PageSize: number, headersHandler?: () => {[header: string]: string}): Promise<ListDedicatedIpPoolsResponse> {
			return fetch(this.baseUri + '/v1/email/dedicated-ip-pools?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&PageSize=' + PageSize, { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Create a new predictive inbox placement test. Predictive inbox placement tests can help you predict how your messages will be handled by various email providers around the world. When you perform a predictive inbox placement test, you provide a sample message that contains the content that you plan to send to your customers. Amazon Pinpoint then sends that message to special email addresses spread across several major email providers. After about 24 hours, the test is complete, and you can use the <code>GetDeliverabilityTestReport</code> operation to view the results of the test.
		 * Post /v1/email/deliverability-dashboard/test
		 * @return {CreateDeliverabilityTestReportResponse} Success
		 */
		CreateDeliverabilityTestReport(requestBody: CreateDeliverabilityTestReportBody, headersHandler?: () => {[header: string]: string}): Promise<CreateDeliverabilityTestReportResponse> {
			return fetch(this.baseUri + '/v1/email/deliverability-dashboard/test', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Verifies an email identity for use with Amazon Pinpoint. In Amazon Pinpoint, an identity is an email address or domain that you use when you send email. Before you can use an identity to send email with Amazon Pinpoint, you first have to verify it. By verifying an address, you demonstrate that you're the owner of the address, and that you've given Amazon Pinpoint permission to send email from the address.</p> <p>When you verify an email address, Amazon Pinpoint sends an email to the address. Your email address is verified as soon as you follow the link in the verification email. </p> <p>When you verify a domain, this operation provides a set of DKIM tokens, which you can convert into CNAME tokens. You add these CNAME tokens to the DNS configuration for your domain. Your domain is verified when Amazon Pinpoint detects these records in the DNS configuration for your domain. It usually takes around 72 hours to complete the domain verification process.</p>
		 * Post /v1/email/identities
		 * @return {CreateEmailIdentityResponse} Success
		 */
		CreateEmailIdentity(requestBody: CreateEmailIdentityBody, headersHandler?: () => {[header: string]: string}): Promise<CreateEmailIdentityResponse> {
			return fetch(this.baseUri + '/v1/email/identities', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns a list of all of the email identities that are associated with your Amazon Pinpoint account. An identity can be either an email address or a domain. This operation returns identities that are verified as well as those that aren't.
		 * Get /v1/email/identities
		 * @param {string} NextToken A token returned from a previous call to <code>ListEmailIdentities</code> to indicate the position in the list of identities.
		 * @param {number} PageSize <p>The number of results to show in a single call to <code>ListEmailIdentities</code>. If the number of results is larger than the number you specified in this parameter, then the response includes a <code>NextToken</code> element, which you can use to obtain additional results.</p> <p>The value you specify has to be at least 0, and can be no more than 1000.</p>
		 * @return {ListEmailIdentitiesResponse} Success
		 */
		ListEmailIdentities(NextToken: string, PageSize: number, headersHandler?: () => {[header: string]: string}): Promise<ListEmailIdentitiesResponse> {
			return fetch(this.baseUri + '/v1/email/identities?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&PageSize=' + PageSize, { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * <p>Delete an existing configuration set.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>
		 * Delete /v1/email/configuration-sets/{ConfigurationSetName}
		 * @param {string} ConfigurationSetName The name of the configuration set that you want to delete.
		 * @return {DeleteConfigurationSetResponse} Success
		 */
		DeleteConfigurationSet(ConfigurationSetName: string, headersHandler?: () => {[header: string]: string}): Promise<DeleteConfigurationSetResponse> {
			return fetch(this.baseUri + '/v1/email/configuration-sets/' + (ConfigurationSetName == null ? '' : encodeURIComponent(ConfigurationSetName)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * <p>Get information about an existing configuration set, including the dedicated IP pool that it's associated with, whether or not it's enabled for sending email, and more.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>
		 * Get /v1/email/configuration-sets/{ConfigurationSetName}
		 * @param {string} ConfigurationSetName The name of the configuration set that you want to obtain more information about.
		 * @return {GetConfigurationSetResponse} Success
		 */
		GetConfigurationSet(ConfigurationSetName: string, headersHandler?: () => {[header: string]: string}): Promise<GetConfigurationSetResponse> {
			return fetch(this.baseUri + '/v1/email/configuration-sets/' + (ConfigurationSetName == null ? '' : encodeURIComponent(ConfigurationSetName)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * <p>Delete an event destination.</p> <p>In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>
		 * Delete /v1/email/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}
		 * @param {string} ConfigurationSetName The name of the configuration set that contains the event destination that you want to delete.
		 * @param {string} EventDestinationName The name of the event destination that you want to delete.
		 * @return {DeleteConfigurationSetEventDestinationResponse} Success
		 */
		DeleteConfigurationSetEventDestination(ConfigurationSetName: string, EventDestinationName: string, headersHandler?: () => {[header: string]: string}): Promise<DeleteConfigurationSetEventDestinationResponse> {
			return fetch(this.baseUri + '/v1/email/configuration-sets/' + (ConfigurationSetName == null ? '' : encodeURIComponent(ConfigurationSetName)) + '/event-destinations/' + (EventDestinationName == null ? '' : encodeURIComponent(EventDestinationName)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * <p>Update the configuration of an event destination for a configuration set.</p> <p>In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>
		 * Put /v1/email/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}
		 * @param {string} ConfigurationSetName The name of the configuration set that contains the event destination that you want to modify.
		 * @param {string} EventDestinationName The name of the event destination that you want to modify.
		 * @return {UpdateConfigurationSetEventDestinationResponse} Success
		 */
		UpdateConfigurationSetEventDestination(ConfigurationSetName: string, EventDestinationName: string, requestBody: UpdateConfigurationSetEventDestinationBody, headersHandler?: () => {[header: string]: string}): Promise<UpdateConfigurationSetEventDestinationResponse> {
			return fetch(this.baseUri + '/v1/email/configuration-sets/' + (ConfigurationSetName == null ? '' : encodeURIComponent(ConfigurationSetName)) + '/event-destinations/' + (EventDestinationName == null ? '' : encodeURIComponent(EventDestinationName)), { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Delete a dedicated IP pool.
		 * Delete /v1/email/dedicated-ip-pools/{PoolName}
		 * @param {string} PoolName The name of the dedicated IP pool that you want to delete.
		 * @return {DeleteDedicatedIpPoolResponse} Success
		 */
		DeleteDedicatedIpPool(PoolName: string, headersHandler?: () => {[header: string]: string}): Promise<DeleteDedicatedIpPoolResponse> {
			return fetch(this.baseUri + '/v1/email/dedicated-ip-pools/' + (PoolName == null ? '' : encodeURIComponent(PoolName)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Deletes an email identity that you previously verified for use with Amazon Pinpoint. An identity can be either an email address or a domain name.
		 * Delete /v1/email/identities/{EmailIdentity}
		 * @param {string} EmailIdentity The identity (that is, the email address or domain) that you want to delete from your Amazon Pinpoint account.
		 * @return {DeleteEmailIdentityResponse} Success
		 */
		DeleteEmailIdentity(EmailIdentity: string, headersHandler?: () => {[header: string]: string}): Promise<DeleteEmailIdentityResponse> {
			return fetch(this.baseUri + '/v1/email/identities/' + (EmailIdentity == null ? '' : encodeURIComponent(EmailIdentity)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Provides information about a specific identity associated with your Amazon Pinpoint account, including the identity's verification status, its DKIM authentication status, and its custom Mail-From settings.
		 * Get /v1/email/identities/{EmailIdentity}
		 * @param {string} EmailIdentity The email identity that you want to retrieve details for.
		 * @return {GetEmailIdentityResponse} Success
		 */
		GetEmailIdentity(EmailIdentity: string, headersHandler?: () => {[header: string]: string}): Promise<GetEmailIdentityResponse> {
			return fetch(this.baseUri + '/v1/email/identities/' + (EmailIdentity == null ? '' : encodeURIComponent(EmailIdentity)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Obtain information about the email-sending status and capabilities of your Amazon Pinpoint account in the current AWS Region.
		 * Get /v1/email/account
		 * @return {GetAccountResponse} Success
		 */
		GetAccount(headersHandler?: () => {[header: string]: string}): Promise<GetAccountResponse> {
			return fetch(this.baseUri + '/v1/email/account', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Retrieve a list of the blacklists that your dedicated IP addresses appear on.
		 * Get /v1/email/deliverability-dashboard/blacklist-report#BlacklistItemNames
		 * @param {Array<BlacklistItemName>} BlacklistItemNames A list of IP addresses that you want to retrieve blacklist information about. You can only specify the dedicated IP addresses that you use to send email using Amazon Pinpoint or Amazon SES.
		 * @return {GetBlacklistReportsResponse} Success
		 */
		GetBlacklistReports(BlacklistItemNames: Array<BlacklistItemName>, headersHandler?: () => {[header: string]: string}): Promise<GetBlacklistReportsResponse> {
			return fetch(this.baseUri + '/v1/email/deliverability-dashboard/blacklist-report#BlacklistItemNames?' + BlacklistItemNames.map(z => `BlacklistItemNames=${z}`).join('&'), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Get information about a dedicated IP address, including the name of the dedicated IP pool that it's associated with, as well information about the automatic warm-up process for the address.
		 * Get /v1/email/dedicated-ips/{IP}
		 * @param {string} IP The IP address that you want to obtain more information about. The value you specify has to be a dedicated IP address that's assocaited with your Amazon Pinpoint account.
		 * @return {GetDedicatedIpResponse} Success
		 */
		GetDedicatedIp(IP: string, headersHandler?: () => {[header: string]: string}): Promise<GetDedicatedIpResponse> {
			return fetch(this.baseUri + '/v1/email/dedicated-ips/' + (IP == null ? '' : encodeURIComponent(IP)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * List the dedicated IP addresses that are associated with your Amazon Pinpoint account.
		 * Get /v1/email/dedicated-ips
		 * @param {string} PoolName The name of the IP pool that the dedicated IP address is associated with.
		 * @param {string} NextToken A token returned from a previous call to <code>GetDedicatedIps</code> to indicate the position of the dedicated IP pool in the list of IP pools.
		 * @param {number} PageSize The number of results to show in a single call to <code>GetDedicatedIpsRequest</code>. If the number of results is larger than the number you specified in this parameter, then the response includes a <code>NextToken</code> element, which you can use to obtain additional results.
		 * @return {GetDedicatedIpsResponse} Success
		 */
		GetDedicatedIps(PoolName: string, NextToken: string, PageSize: number, headersHandler?: () => {[header: string]: string}): Promise<GetDedicatedIpsResponse> {
			return fetch(this.baseUri + '/v1/email/dedicated-ips?PoolName=' + (PoolName == null ? '' : encodeURIComponent(PoolName)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&PageSize=' + PageSize, { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * <p>Retrieve information about the status of the Deliverability dashboard for your Amazon Pinpoint account. When the Deliverability dashboard is enabled, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email using Amazon Pinpoint. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon Pinpoint. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p>
		 * Get /v1/email/deliverability-dashboard
		 * @return {GetDeliverabilityDashboardOptionsResponse} Success
		 */
		GetDeliverabilityDashboardOptions(headersHandler?: () => {[header: string]: string}): Promise<GetDeliverabilityDashboardOptionsResponse> {
			return fetch(this.baseUri + '/v1/email/deliverability-dashboard', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * <p>Enable or disable the Deliverability dashboard for your Amazon Pinpoint account. When you enable the Deliverability dashboard, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email using Amazon Pinpoint. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon Pinpoint. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p>
		 * Put /v1/email/deliverability-dashboard
		 * @return {PutDeliverabilityDashboardOptionResponse} Success
		 */
		PutDeliverabilityDashboardOption(requestBody: PutDeliverabilityDashboardOptionBody, headersHandler?: () => {[header: string]: string}): Promise<PutDeliverabilityDashboardOptionResponse> {
			return fetch(this.baseUri + '/v1/email/deliverability-dashboard', { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Retrieve the results of a predictive inbox placement test.
		 * Get /v1/email/deliverability-dashboard/test-reports/{ReportId}
		 * @param {string} ReportId A unique string that identifies the predictive inbox placement test.
		 * @return {GetDeliverabilityTestReportResponse} Success
		 */
		GetDeliverabilityTestReport(ReportId: string, headersHandler?: () => {[header: string]: string}): Promise<GetDeliverabilityTestReportResponse> {
			return fetch(this.baseUri + '/v1/email/deliverability-dashboard/test-reports/' + (ReportId == null ? '' : encodeURIComponent(ReportId)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Retrieve all the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for (<code>PutDeliverabilityDashboardOption</code> operation).
		 * Get /v1/email/deliverability-dashboard/campaigns/{CampaignId}
		 * @param {string} CampaignId The unique identifier for the campaign. Amazon Pinpoint automatically generates and assigns this identifier to a campaign. This value is not the same as the campaign identifier that Amazon Pinpoint assigns to campaigns that you create and manage by using the Amazon Pinpoint API or the Amazon Pinpoint console.
		 * @return {GetDomainDeliverabilityCampaignResponse} Success
		 */
		GetDomainDeliverabilityCampaign(CampaignId: string, headersHandler?: () => {[header: string]: string}): Promise<GetDomainDeliverabilityCampaignResponse> {
			return fetch(this.baseUri + '/v1/email/deliverability-dashboard/campaigns/' + (CampaignId == null ? '' : encodeURIComponent(CampaignId)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Retrieve inbox placement and engagement rates for the domains that you use to send email.
		 * Get /v1/email/deliverability-dashboard/statistics-report/{Domain}#StartDate&EndDate
		 * @param {string} Domain The domain that you want to obtain deliverability metrics for.
		 * @param {Date} StartDate The first day (in Unix time) that you want to obtain domain deliverability metrics for.
		 * @param {Date} EndDate The last day (in Unix time) that you want to obtain domain deliverability metrics for. The <code>EndDate</code> that you specify has to be less than or equal to 30 days after the <code>StartDate</code>.
		 * @return {GetDomainStatisticsReportResponse} Success
		 */
		GetDomainStatisticsReport(Domain: string, StartDate: Date, EndDate: Date, headersHandler?: () => {[header: string]: string}): Promise<GetDomainStatisticsReportResponse> {
			return fetch(this.baseUri + '/v1/email/deliverability-dashboard/statistics-report/' + (Domain == null ? '' : encodeURIComponent(Domain)) + '#StartDate&EndDate&StartDate=' + StartDate.toISOString() + '&EndDate=' + EndDate.toISOString(), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Show a list of the predictive inbox placement tests that you've performed, regardless of their statuses. For predictive inbox placement tests that are complete, you can use the <code>GetDeliverabilityTestReport</code> operation to view the results.
		 * Get /v1/email/deliverability-dashboard/test-reports
		 * @param {string} NextToken A token returned from a previous call to <code>ListDeliverabilityTestReports</code> to indicate the position in the list of predictive inbox placement tests.
		 * @param {number} PageSize <p>The number of results to show in a single call to <code>ListDeliverabilityTestReports</code>. If the number of results is larger than the number you specified in this parameter, then the response includes a <code>NextToken</code> element, which you can use to obtain additional results.</p> <p>The value you specify has to be at least 0, and can be no more than 1000.</p>
		 * @return {ListDeliverabilityTestReportsResponse} Success
		 */
		ListDeliverabilityTestReports(NextToken: string, PageSize: number, headersHandler?: () => {[header: string]: string}): Promise<ListDeliverabilityTestReportsResponse> {
			return fetch(this.baseUri + '/v1/email/deliverability-dashboard/test-reports?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&PageSize=' + PageSize, { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Retrieve deliverability data for all the campaigns that used a specific domain to send email during a specified time range. This data is available for a domain only if you enabled the Deliverability dashboard (<code>PutDeliverabilityDashboardOption</code> operation) for the domain.
		 * Get /v1/email/deliverability-dashboard/domains/{SubscribedDomain}/campaigns#StartDate&EndDate
		 * @param {Date} StartDate The first day, in Unix time format, that you want to obtain deliverability data for.
		 * @param {Date} EndDate The last day, in Unix time format, that you want to obtain deliverability data for. This value has to be less than or equal to 30 days after the value of the <code>StartDate</code> parameter.
		 * @param {string} SubscribedDomain The domain to obtain deliverability data for.
		 * @param {string} NextToken A token that’s returned from a previous call to the <code>ListDomainDeliverabilityCampaigns</code> operation. This token indicates the position of a campaign in the list of campaigns.
		 * @param {number} PageSize The maximum number of results to include in response to a single call to the <code>ListDomainDeliverabilityCampaigns</code> operation. If the number of results is larger than the number that you specify in this parameter, the response includes a <code>NextToken</code> element, which you can use to obtain additional results.
		 * @return {ListDomainDeliverabilityCampaignsResponse} Success
		 */
		ListDomainDeliverabilityCampaigns(StartDate: Date, EndDate: Date, SubscribedDomain: string, NextToken: string, PageSize: number, headersHandler?: () => {[header: string]: string}): Promise<ListDomainDeliverabilityCampaignsResponse> {
			return fetch(this.baseUri + '/v1/email/deliverability-dashboard/domains/' + (SubscribedDomain == null ? '' : encodeURIComponent(SubscribedDomain)) + '/campaigns#StartDate&EndDate?StartDate=' + StartDate.toISOString() + '&EndDate=' + EndDate.toISOString() + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&PageSize=' + PageSize, { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Retrieve a list of the tags (keys and values) that are associated with a specified resource. A <i>tag</i> is a label that you optionally define and associate with a resource in Amazon Pinpoint. Each tag consists of a required <i>tag key</i> and an optional associated <i>tag value</i>. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.
		 * Get /v1/email/tags#ResourceArn
		 * @param {string} ResourceArn The Amazon Resource Name (ARN) of the resource that you want to retrieve tag information for.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(ResourceArn: string, headersHandler?: () => {[header: string]: string}): Promise<ListTagsForResourceResponse> {
			return fetch(this.baseUri + '/v1/email/tags#ResourceArn?ResourceArn=' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Enable or disable the automatic warm-up feature for dedicated IP addresses.
		 * Put /v1/email/account/dedicated-ips/warmup
		 * @return {PutAccountDedicatedIpWarmupAttributesResponse} Success
		 */
		PutAccountDedicatedIpWarmupAttributes(requestBody: PutAccountDedicatedIpWarmupAttributesBody, headersHandler?: () => {[header: string]: string}): Promise<PutAccountDedicatedIpWarmupAttributesResponse> {
			return fetch(this.baseUri + '/v1/email/account/dedicated-ips/warmup', { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Enable or disable the ability of your account to send email.
		 * Put /v1/email/account/sending
		 * @return {PutAccountSendingAttributesResponse} Success
		 */
		PutAccountSendingAttributes(requestBody: PutAccountSendingAttributesBody, headersHandler?: () => {[header: string]: string}): Promise<PutAccountSendingAttributesResponse> {
			return fetch(this.baseUri + '/v1/email/account/sending', { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Associate a configuration set with a dedicated IP pool. You can use dedicated IP pools to create groups of dedicated IP addresses for sending specific types of email.
		 * Put /v1/email/configuration-sets/{ConfigurationSetName}/delivery-options
		 * @param {string} ConfigurationSetName The name of the configuration set that you want to associate with a dedicated IP pool.
		 * @return {PutConfigurationSetDeliveryOptionsResponse} Success
		 */
		PutConfigurationSetDeliveryOptions(ConfigurationSetName: string, requestBody: PutConfigurationSetDeliveryOptionsBody, headersHandler?: () => {[header: string]: string}): Promise<PutConfigurationSetDeliveryOptionsResponse> {
			return fetch(this.baseUri + '/v1/email/configuration-sets/' + (ConfigurationSetName == null ? '' : encodeURIComponent(ConfigurationSetName)) + '/delivery-options', { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Enable or disable collection of reputation metrics for emails that you send using a particular configuration set in a specific AWS Region.
		 * Put /v1/email/configuration-sets/{ConfigurationSetName}/reputation-options
		 * @param {string} ConfigurationSetName The name of the configuration set that you want to enable or disable reputation metric tracking for.
		 * @return {PutConfigurationSetReputationOptionsResponse} Success
		 */
		PutConfigurationSetReputationOptions(ConfigurationSetName: string, requestBody: PutConfigurationSetReputationOptionsBody, headersHandler?: () => {[header: string]: string}): Promise<PutConfigurationSetReputationOptionsResponse> {
			return fetch(this.baseUri + '/v1/email/configuration-sets/' + (ConfigurationSetName == null ? '' : encodeURIComponent(ConfigurationSetName)) + '/reputation-options', { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Enable or disable email sending for messages that use a particular configuration set in a specific AWS Region.
		 * Put /v1/email/configuration-sets/{ConfigurationSetName}/sending
		 * @param {string} ConfigurationSetName The name of the configuration set that you want to enable or disable email sending for.
		 * @return {PutConfigurationSetSendingOptionsResponse} Success
		 */
		PutConfigurationSetSendingOptions(ConfigurationSetName: string, requestBody: PutConfigurationSetSendingOptionsBody, headersHandler?: () => {[header: string]: string}): Promise<PutConfigurationSetSendingOptionsResponse> {
			return fetch(this.baseUri + '/v1/email/configuration-sets/' + (ConfigurationSetName == null ? '' : encodeURIComponent(ConfigurationSetName)) + '/sending', { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Specify a custom domain to use for open and click tracking elements in email that you send using Amazon Pinpoint.
		 * Put /v1/email/configuration-sets/{ConfigurationSetName}/tracking-options
		 * @param {string} ConfigurationSetName The name of the configuration set that you want to add a custom tracking domain to.
		 * @return {PutConfigurationSetTrackingOptionsResponse} Success
		 */
		PutConfigurationSetTrackingOptions(ConfigurationSetName: string, requestBody: PutConfigurationSetTrackingOptionsBody, headersHandler?: () => {[header: string]: string}): Promise<PutConfigurationSetTrackingOptionsResponse> {
			return fetch(this.baseUri + '/v1/email/configuration-sets/' + (ConfigurationSetName == null ? '' : encodeURIComponent(ConfigurationSetName)) + '/tracking-options', { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Move a dedicated IP address to an existing dedicated IP pool.</p> <note> <p>The dedicated IP address that you specify must already exist, and must be associated with your Amazon Pinpoint account. </p> <p>The dedicated IP pool you specify must already exist. You can create a new pool by using the <code>CreateDedicatedIpPool</code> operation.</p> </note>
		 * Put /v1/email/dedicated-ips/{IP}/pool
		 * @param {string} IP The IP address that you want to move to the dedicated IP pool. The value you specify has to be a dedicated IP address that's associated with your Amazon Pinpoint account.
		 * @return {PutDedicatedIpInPoolResponse} Success
		 */
		PutDedicatedIpInPool(IP: string, requestBody: PutDedicatedIpInPoolBody, headersHandler?: () => {[header: string]: string}): Promise<PutDedicatedIpInPoolResponse> {
			return fetch(this.baseUri + '/v1/email/dedicated-ips/' + (IP == null ? '' : encodeURIComponent(IP)) + '/pool', { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p/>
		 * Put /v1/email/dedicated-ips/{IP}/warmup
		 * @param {string} IP The dedicated IP address that you want to update the warm-up attributes for.
		 * @return {PutDedicatedIpWarmupAttributesResponse} Success
		 */
		PutDedicatedIpWarmupAttributes(IP: string, requestBody: PutDedicatedIpWarmupAttributesBody, headersHandler?: () => {[header: string]: string}): Promise<PutDedicatedIpWarmupAttributesResponse> {
			return fetch(this.baseUri + '/v1/email/dedicated-ips/' + (IP == null ? '' : encodeURIComponent(IP)) + '/warmup', { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Used to enable or disable DKIM authentication for an email identity.
		 * Put /v1/email/identities/{EmailIdentity}/dkim
		 * @param {string} EmailIdentity The email identity that you want to change the DKIM settings for.
		 * @return {PutEmailIdentityDkimAttributesResponse} Success
		 */
		PutEmailIdentityDkimAttributes(EmailIdentity: string, requestBody: PutEmailIdentityDkimAttributesBody, headersHandler?: () => {[header: string]: string}): Promise<PutEmailIdentityDkimAttributesResponse> {
			return fetch(this.baseUri + '/v1/email/identities/' + (EmailIdentity == null ? '' : encodeURIComponent(EmailIdentity)) + '/dkim', { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Used to enable or disable feedback forwarding for an identity. This setting determines what happens when an identity is used to send an email that results in a bounce or complaint event.</p> <p>When you enable feedback forwarding, Amazon Pinpoint sends you email notifications when bounce or complaint events occur. Amazon Pinpoint sends this notification to the address that you specified in the Return-Path header of the original email.</p> <p>When you disable feedback forwarding, Amazon Pinpoint sends notifications through other mechanisms, such as by notifying an Amazon SNS topic. You're required to have a method of tracking bounces and complaints. If you haven't set up another mechanism for receiving bounce or complaint notifications, Amazon Pinpoint sends an email notification when these events occur (even if this setting is disabled).</p>
		 * Put /v1/email/identities/{EmailIdentity}/feedback
		 * @param {string} EmailIdentity The email identity that you want to configure bounce and complaint feedback forwarding for.
		 * @return {PutEmailIdentityFeedbackAttributesResponse} Success
		 */
		PutEmailIdentityFeedbackAttributes(EmailIdentity: string, requestBody: PutEmailIdentityFeedbackAttributesBody, headersHandler?: () => {[header: string]: string}): Promise<PutEmailIdentityFeedbackAttributesResponse> {
			return fetch(this.baseUri + '/v1/email/identities/' + (EmailIdentity == null ? '' : encodeURIComponent(EmailIdentity)) + '/feedback', { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Used to enable or disable the custom Mail-From domain configuration for an email identity.
		 * Put /v1/email/identities/{EmailIdentity}/mail-from
		 * @param {string} EmailIdentity The verified email identity that you want to set up the custom MAIL FROM domain for.
		 * @return {PutEmailIdentityMailFromAttributesResponse} Success
		 */
		PutEmailIdentityMailFromAttributes(EmailIdentity: string, requestBody: PutEmailIdentityMailFromAttributesBody, headersHandler?: () => {[header: string]: string}): Promise<PutEmailIdentityMailFromAttributesResponse> {
			return fetch(this.baseUri + '/v1/email/identities/' + (EmailIdentity == null ? '' : encodeURIComponent(EmailIdentity)) + '/mail-from', { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Sends an email message. You can use the Amazon Pinpoint Email API to send two types of messages:</p> <ul> <li> <p> <b>Simple</b> – A standard email message. When you create this type of message, you specify the sender, the recipient, and the message body, and Amazon Pinpoint assembles the message for you.</p> </li> <li> <p> <b>Raw</b> – A raw, MIME-formatted email message. When you send this type of email, you have to specify all of the message headers, as well as the message body. You can use this message type to send messages that contain attachments. The message that you specify has to be a valid MIME message.</p> </li> </ul>
		 * Post /v1/email/outbound-emails
		 * @return {SendEmailResponse} Success
		 */
		SendEmail(requestBody: SendEmailBody, headersHandler?: () => {[header: string]: string}): Promise<SendEmailResponse> {
			return fetch(this.baseUri + '/v1/email/outbound-emails', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Add one or more tags (keys and values) to a specified resource. A <i>tag</i> is a label that you optionally define and associate with a resource in Amazon Pinpoint. Tags can help you categorize and manage resources in different ways, such as by purpose, owner, environment, or other criteria. A resource can have as many as 50 tags.</p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.</p>
		 * Post /v1/email/tags
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceBody, headersHandler?: () => {[header: string]: string}): Promise<TagResourceResponse> {
			return fetch(this.baseUri + '/v1/email/tags', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Remove one or more tags (keys and values) from a specified resource.
		 * Delete /v1/email/tags#ResourceArn&TagKeys
		 * @param {string} ResourceArn The Amazon Resource Name (ARN) of the resource that you want to remove one or more tags from.
		 * @param {Array<TagKey>} TagKeys <p>The tags (tag keys) that you want to remove from the resource. When you specify a tag key, the action removes both that key and its associated tag value.</p> <p>To remove more than one tag from the resource, append the <code>TagKeys</code> parameter and argument for each additional tag to remove, separated by an ampersand. For example: <code>/v1/email/tags?ResourceArn=ResourceArn&amp;TagKeys=Key1&amp;TagKeys=Key2</code> </p>
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(ResourceArn: string, TagKeys: Array<TagKey>, headersHandler?: () => {[header: string]: string}): Promise<UntagResourceResponse> {
			return fetch(this.baseUri + '/v1/email/tags#ResourceArn&TagKeys?ResourceArn=' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)) + '&' + TagKeys.map(z => `TagKeys=${z}`).join('&'), { method: 'delete', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}
	}

	export interface CreateConfigurationSetBody {

		/**<p>The name of a configuration set.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p> */
		ConfigurationSetName: string;

		/**<p>An object that defines the tracking options for a configuration set. When you use Amazon Pinpoint to send an email, it contains an invisible image that's used to track when recipients open your email. If your email contains links, those links are changed slightly in order to track when recipients click them.</p> <p>These images and links include references to a domain operated by AWS. You can optionally configure Amazon Pinpoint to use a domain that you operate for these images and links.</p> */
		TrackingOptions?: string;

		/**Used to associate a configuration set with a dedicated IP pool. */
		DeliveryOptions?: string;

		/**Enable or disable collection of reputation metrics for emails that you send using this configuration set in the current AWS Region. */
		ReputationOptions?: string;

		/**Used to enable or disable email sending for messages that use this configuration set in the current AWS Region. */
		SendingOptions?: string;

		/**An array of objects that define the tags (keys and values) that you want to associate with the configuration set. */
		Tags?: Array<Tag>;
	}

	export interface CreateConfigurationSetEventDestinationBody {

		/**<p>The name of an event destination.</p> <p>In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p> */
		EventDestinationName: string;

		/**An object that defines the event destination. Specifically, it defines which services receive events from emails sent using the configuration set that the event destination is associated with. Also defines the types of events that are sent to the event destination. */
		EventDestination: string;
	}

	export interface CreateDedicatedIpPoolBody {

		/**The name of a dedicated IP pool. */
		PoolName: string;

		/**An object that defines the tags (keys and values) that you want to associate with the pool. */
		Tags?: Array<Tag>;
	}

	export interface CreateDeliverabilityTestReportBody {

		/**A name that helps you identify a report generated by the Deliverability dashboard. */
		ReportName?: string;

		/**The email address that the predictive inbox placement test email was sent from. */
		FromEmailAddress: string;

		/**An object that defines the entire content of the email, including the message headers and the body content. You can create a simple email message, in which you specify the subject and the text and HTML versions of the message body. You can also create raw messages, in which you specify a complete MIME-formatted message. Raw messages can include attachments and custom headers. */
		Content: string;

		/**An array of objects that define the tags (keys and values) that you want to associate with the predictive inbox placement test. */
		Tags?: Array<Tag>;
	}

	export interface CreateEmailIdentityBody {

		/**The email address or domain that you want to verify. */
		EmailIdentity: string;

		/**An array of objects that define the tags (keys and values) that you want to associate with the email identity. */
		Tags?: Array<Tag>;
	}

	export interface UpdateConfigurationSetEventDestinationBody {

		/**An object that defines the event destination. Specifically, it defines which services receive events from emails sent using the configuration set that the event destination is associated with. Also defines the types of events that are sent to the event destination. */
		EventDestination: string;
	}

	export interface PutDeliverabilityDashboardOptionBody {

		/**Specifies whether to enable the Deliverability dashboard for your Amazon Pinpoint account. To enable the dashboard, set this value to <code>true</code>. */
		DashboardEnabled: boolean;

		/**An object that contains information about the Deliverability dashboard subscription for a verified domain that you use to send email and currently has an active Deliverability dashboard subscription. If a Deliverability dashboard subscription is active for a domain, you gain access to reputation, inbox placement, and other metrics for the domain. */
		SubscribedDomains?: Array<DomainDeliverabilityTrackingOption>;
	}

	export interface PutAccountDedicatedIpWarmupAttributesBody {

		/**Enables or disables the automatic warm-up feature for dedicated IP addresses that are associated with your Amazon Pinpoint account in the current AWS Region. Set to <code>true</code> to enable the automatic warm-up feature, or set to <code>false</code> to disable it. */
		AutoWarmupEnabled?: boolean;
	}

	export interface PutAccountSendingAttributesBody {

		/**<p>Enables or disables your account's ability to send email. Set to <code>true</code> to enable email sending, or set to <code>false</code> to disable email sending.</p> <note> <p>If AWS paused your account's ability to send email, you can't use this operation to resume your account's ability to send email.</p> </note> */
		SendingEnabled?: boolean;
	}

	export interface PutConfigurationSetDeliveryOptionsBody {

		/**Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS). If the value is <code>Require</code>, messages are only delivered if a TLS connection can be established. If the value is <code>Optional</code>, messages can be delivered in plain text if a TLS connection can't be established. */
		TlsPolicy?: PutConfigurationSetDeliveryOptionsBodyTlsPolicy;

		/**The name of the dedicated IP pool that you want to associate with the configuration set. */
		SendingPoolName?: string;
	}

	export enum PutConfigurationSetDeliveryOptionsBodyTlsPolicy { REQUIRE = 0, OPTIONAL = 1 }

	export interface PutConfigurationSetReputationOptionsBody {

		/**If <code>true</code>, tracking of reputation metrics is enabled for the configuration set. If <code>false</code>, tracking of reputation metrics is disabled for the configuration set. */
		ReputationMetricsEnabled?: boolean;
	}

	export interface PutConfigurationSetSendingOptionsBody {

		/**If <code>true</code>, email sending is enabled for the configuration set. If <code>false</code>, email sending is disabled for the configuration set. */
		SendingEnabled?: boolean;
	}

	export interface PutConfigurationSetTrackingOptionsBody {

		/**The domain that you want to use for tracking open and click events. */
		CustomRedirectDomain?: string;
	}

	export interface PutDedicatedIpInPoolBody {

		/**The name of a dedicated IP pool. */
		DestinationPoolName: string;
	}

	export interface PutDedicatedIpWarmupAttributesBody {

		/**The warm-up percentage that you want to associate with the dedicated IP address. */
		WarmupPercentage: number;
	}

	export interface PutEmailIdentityDkimAttributesBody {

		/**<p>Sets the DKIM signing configuration for the identity.</p> <p>When you set this value <code>true</code>, then the messages that Amazon Pinpoint sends from the identity are DKIM-signed. When you set this value to <code>false</code>, then the messages that Amazon Pinpoint sends from the identity aren't DKIM-signed.</p> */
		SigningEnabled?: boolean;
	}

	export interface PutEmailIdentityFeedbackAttributesBody {

		/**<p>Sets the feedback forwarding configuration for the identity.</p> <p>If the value is <code>true</code>, Amazon Pinpoint sends you email notifications when bounce or complaint events occur. Amazon Pinpoint sends this notification to the address that you specified in the Return-Path header of the original email.</p> <p>When you set this value to <code>false</code>, Amazon Pinpoint sends notifications through other mechanisms, such as by notifying an Amazon SNS topic or another event destination. You're required to have a method of tracking bounces and complaints. If you haven't set up another mechanism for receiving bounce or complaint notifications, Amazon Pinpoint sends an email notification when these events occur (even if this setting is disabled).</p> */
		EmailForwardingEnabled?: boolean;
	}

	export interface PutEmailIdentityMailFromAttributesBody {

		/**The domain that you want to use as a MAIL FROM domain. */
		MailFromDomain?: string;

		/**<p>The action that you want Amazon Pinpoint to take if it can't read the required MX record for a custom MAIL FROM domain. When you set this value to <code>UseDefaultValue</code>, Amazon Pinpoint uses <i>amazonses.com</i> as the MAIL FROM domain. When you set this value to <code>RejectMessage</code>, Amazon Pinpoint returns a <code>MailFromDomainNotVerified</code> error, and doesn't attempt to deliver the email.</p> <p>These behaviors are taken when the custom MAIL FROM domain configuration is in the <code>Pending</code>, <code>Failed</code>, and <code>TemporaryFailure</code> states.</p> */
		BehaviorOnMxFailure?: PutEmailIdentityMailFromAttributesBodyBehaviorOnMxFailure;
	}

	export enum PutEmailIdentityMailFromAttributesBodyBehaviorOnMxFailure { USE_DEFAULT_VALUE = 0, REJECT_MESSAGE = 1 }

	export interface SendEmailBody {

		/**The email address that you want to use as the "From" address for the email. The address that you specify has to be verified. */
		FromEmailAddress?: string;

		/**An object that describes the recipients for an email. */
		Destination: string;

		/**The "Reply-to" email addresses for the message. When the recipient replies to the message, each Reply-to address receives the reply. */
		ReplyToAddresses?: Array<EmailAddress>;

		/**The address that Amazon Pinpoint should send bounce and complaint notifications to. */
		FeedbackForwardingEmailAddress?: string;

		/**An object that defines the entire content of the email, including the message headers and the body content. You can create a simple email message, in which you specify the subject and the text and HTML versions of the message body. You can also create raw messages, in which you specify a complete MIME-formatted message. Raw messages can include attachments and custom headers. */
		Content: string;

		/**A list of message tags. */
		EmailTags?: Array<MessageTag>;

		/**<p>The name of a configuration set.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p> */
		ConfigurationSetName?: string;
	}

	export interface TagResourceBody {

		/**The Amazon Resource Name (ARN) of the resource that you want to add one or more tags to. */
		ResourceArn: string;

		/**A list of the tags that you want to add to the resource. A tag consists of a required tag key (<code>Key</code>) and an associated tag value (<code>Value</code>). The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters. */
		Tags: Array<Tag>;
	}

}

