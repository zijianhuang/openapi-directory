export namespace My_Demo_Client {
	export interface AssociateTargetsWithJobResponse {
		jobArn?: string;
		jobId?: string;
		description?: string;
	}

	export interface CancelJobResponse {
		jobArn?: string;
		jobId?: string;
		description?: string;
	}

	export interface CreateAuthorizerResponse {
		authorizerName?: string;
		authorizerArn?: string;
	}


	/**A set of key/value pairs that are used to manage the resource. */
	export interface Tag {
		Key: string;
		Value?: string;
	}

	export interface CreateBillingGroupResponse {
		billingGroupName?: string;
		billingGroupArn?: string;
		billingGroupId?: string;
	}


	/**The output from the CreateCertificateFromCsr operation. */
	export interface CreateCertificateFromCsrResponse {
		certificateArn?: string;
		certificateId?: string;

		/**
		 * The PEM of a certificate.
		 * Max length: 65536
		 * Min length: 1
		 */
		certificatePem?: string;
	}

	export interface CreateDimensionResponse {
		name?: string;
		arn?: string;
	}

	export interface CreateDomainConfigurationResponse {
		domainConfigurationName?: string;
		domainConfigurationArn?: string;
	}

	export interface CreateDynamicThingGroupResponse {
		thingGroupName?: string;
		thingGroupArn?: string;
		thingGroupId?: string;
		indexName?: string;
		queryString?: string;
		queryVersion?: string;
	}


	/**The attribute payload. */
	export interface AttributePayload {
		attributes?: Attributes;
		merge?: boolean;
	}

	export interface CreateJobResponse {
		jobArn?: string;
		jobId?: string;
		description?: string;
	}


	/**Allows you to create an exponential rate of rollout for a job. */
	export interface ExponentialRolloutRate {
		baseRatePerMinute: number;
		incrementFactor: number;

		/**Allows you to define a criteria to initiate the increase in rate of rollout for a job. */
		rateIncreaseCriteria: RateIncreaseCriteria;
	}


	/**The output of the CreateKeysAndCertificate operation. */
	export interface CreateKeysAndCertificateResponse {
		certificateArn?: string;
		certificateId?: string;

		/**
		 * The PEM of a certificate.
		 * Max length: 65536
		 * Min length: 1
		 */
		certificatePem?: string;

		/**Describes a key pair. */
		keyPair?: KeyPair;
	}

	export interface CreateMitigationActionResponse {
		actionArn?: string;
		actionId?: string;
	}


	/**Parameters to define a mitigation action that changes the state of the device certificate to inactive. */
	export interface UpdateDeviceCertificateParams {
		action: UpdateDeviceCertificateParamsAction;
	}

	export enum UpdateDeviceCertificateParamsAction { DEACTIVATE = 0 }


	/**Parameters to define a mitigation action that changes the state of the CA certificate to inactive. */
	export interface UpdateCACertificateParams {
		action: UpdateCACertificateParamsAction;
	}

	export enum UpdateCACertificateParamsAction { DEACTIVATE = 0 }


	/**Parameters used when defining a mitigation action that move a set of things to a thing group. */
	export interface AddThingsToThingGroupParams {
		thingGroupNames: Array<ThingGroupName>;
		overrideDynamicGroups?: boolean;
	}


	/**Parameters to define a mitigation action that adds a blank policy to restrict permissions. */
	export interface ReplaceDefaultPolicyVersionParams {
		templateName: ReplaceDefaultPolicyVersionParamsTemplateName;
	}

	export enum ReplaceDefaultPolicyVersionParamsTemplateName { BLANK_POLICY = 0 }


	/**Parameters used when defining a mitigation action that enable AWS IoT logging. */
	export interface EnableIoTLoggingParams {
		roleArnForLogging: string;
		logLevel: EnableIoTLoggingParamsLogLevel;
	}

	export enum EnableIoTLoggingParamsLogLevel { DEBUG = 0, INFO = 1, ERROR = 2, WARN = 3, DISABLED = 4 }


	/**Parameters to define a mitigation action that publishes findings to Amazon SNS. You can implement your own custom actions in response to the Amazon SNS messages. */
	export interface PublishFindingToSnsParams {
		topicArn: string;
	}

	export interface CreateOTAUpdateResponse {
		otaUpdateId?: string;
		awsIotJobId?: string;
		otaUpdateArn?: string;
		awsIotJobArn?: string;
		otaUpdateStatus?: CreateOTAUpdateResponseOtaUpdateStatus;
	}

	export enum CreateOTAUpdateResponseOtaUpdateStatus { CREATE_PENDING = 0, CREATE_IN_PROGRESS = 1, CREATE_COMPLETE = 2, CREATE_FAILED = 3 }

	export enum Protocol { MQTT = 0, HTTP = 1 }


	/**Describes a file to be associated with an OTA update. */
	export interface OTAUpdateFile {
		fileName?: string;
		fileVersion?: string;

		/**The location of the OTA update. */
		fileLocation?: FileLocation;

		/**Describes the method to use when code signing a file. */
		codeSigning?: CodeSigning;
		attributes?: AttributesMap;
	}


	/**The output from the CreatePolicy operation. */
	export interface CreatePolicyResponse {
		policyName?: string;
		policyArn?: string;
		policyDocument?: string;
		policyVersionId?: string;
	}


	/**The output of the CreatePolicyVersion operation. */
	export interface CreatePolicyVersionResponse {
		policyArn?: string;
		policyDocument?: string;
		policyVersionId?: string;
		isDefaultVersion?: boolean;
	}

	export interface CreateProvisioningClaimResponse {
		certificateId?: string;

		/**
		 * The PEM of a certificate.
		 * Max length: 65536
		 * Min length: 1
		 */
		certificatePem?: string;

		/**Describes a key pair. */
		keyPair?: KeyPair;
		expiration?: Date;
	}

	export interface CreateProvisioningTemplateResponse {
		templateArn?: string;
		templateName?: string;
		defaultVersionId?: number;
	}

	export interface CreateProvisioningTemplateVersionResponse {
		templateArn?: string;
		templateName?: string;
		versionId?: number;
		isDefaultVersion?: boolean;
	}

	export interface CreateRoleAliasResponse {
		roleAlias?: string;
		roleAliasArn?: string;
	}

	export interface CreateScheduledAuditResponse {
		scheduledAuditArn?: string;
	}

	export interface CreateSecurityProfileResponse {
		securityProfileName?: string;
		securityProfileArn?: string;
	}


	/**A Device Defender security profile behavior. */
	export interface Behavior {
		name: string;
		metric?: string;

		/**The dimension of a metric. */
		metricDimension?: MetricDimension;

		/**The criteria by which the behavior is determined to be normal. */
		criteria?: BehaviorCriteria;
	}


	/**A structure containing the alert target ARN and the role ARN. */
	export interface AlertTarget {
		alertTargetArn: string;
		roleArn: string;
	}


	/**The metric you want to retain. Dimensions are optional. */
	export interface MetricToRetain {
		metric: string;

		/**The dimension of a metric. */
		metricDimension?: MetricDimension;
	}

	export interface CreateStreamResponse {
		streamId?: string;
		streamArn?: string;
		description?: string;
		streamVersion?: number;
	}


	/**Represents a file to stream. */
	export interface StreamFile {
		fileId?: number;

		/**The S3 location. */
		s3Location?: S3Location;
	}


	/**The output of the CreateThing operation. */
	export interface CreateThingResponse {
		thingName?: string;
		thingArn?: string;
		thingId?: string;
	}

	export interface CreateThingGroupResponse {
		thingGroupName?: string;
		thingGroupArn?: string;
		thingGroupId?: string;
	}


	/**The output of the CreateThingType operation. */
	export interface CreateThingTypeResponse {
		thingTypeName?: string;
		thingTypeArn?: string;
		thingTypeId?: string;
	}


	/**Describes the actions associated with a rule. */
	export interface Action {

		/**<p>Describes an action to write to a DynamoDB table.</p> <p>The <code>tableName</code>, <code>hashKeyField</code>, and <code>rangeKeyField</code> values must match the values used when you created the table.</p> <p>The <code>hashKeyValue</code> and <code>rangeKeyvalue</code> fields use a substitution template syntax. These templates provide data at runtime. The syntax is as follows: ${<i>sql-expression</i>}.</p> <p>You can specify any valid expression in a WHERE or SELECT clause, including JSON properties, comparisons, calculations, and functions. For example, the following field uses the third level of the topic:</p> <p> <code>"hashKeyValue": "${topic(3)}"</code> </p> <p>The following field uses the timestamp:</p> <p> <code>"rangeKeyValue": "${timestamp()}"</code> </p> */
		dynamoDB?: DynamoDBAction;

		/**<p>Describes an action to write to a DynamoDB table.</p> <p>This DynamoDB action writes each attribute in the message payload into it's own column in the DynamoDB table.</p> */
		dynamoDBv2?: DynamoDBv2Action;

		/**Describes an action to invoke a Lambda function. */
		lambda?: LambdaAction;

		/**Describes an action to publish to an Amazon SNS topic. */
		sns?: SnsAction;

		/**Describes an action to publish data to an Amazon SQS queue. */
		sqs?: SqsAction;

		/**Describes an action to write data to an Amazon Kinesis stream. */
		kinesis?: KinesisAction;

		/**Describes an action to republish to another topic. */
		republish?: RepublishAction;

		/**Describes an action to write data to an Amazon S3 bucket. */
		s3?: S3Action;

		/**Describes an action that writes data to an Amazon Kinesis Firehose stream. */
		firehose?: FirehoseAction;

		/**Describes an action that captures a CloudWatch metric. */
		cloudwatchMetric?: CloudwatchMetricAction;

		/**Describes an action that updates a CloudWatch alarm. */
		cloudwatchAlarm?: CloudwatchAlarmAction;

		/**Describes an action that sends data to CloudWatch Logs. */
		cloudwatchLogs?: CloudwatchLogsAction;

		/**Describes an action that writes data to an Amazon Elasticsearch Service domain. */
		elasticsearch?: ElasticsearchAction;

		/**Describes an action to write a message to a Salesforce IoT Cloud Input Stream. */
		salesforce?: SalesforceAction;

		/**Sends message data to an AWS IoT Analytics channel. */
		iotAnalytics?: IotAnalyticsAction;

		/**Sends an input to an AWS IoT Events detector. */
		iotEvents?: IotEventsAction;

		/**Describes an action to send data from an MQTT message that triggered the rule to AWS IoT SiteWise asset properties. */
		iotSiteWise?: IotSiteWiseAction;

		/**Starts execution of a Step Functions state machine. */
		stepFunctions?: StepFunctionsAction;

		/**Send data to an HTTPS endpoint. */
		http?: HttpAction;
	}

	export interface CreateTopicRuleDestinationResponse {

		/**A topic rule destination. */
		topicRuleDestination?: TopicRuleDestination;
	}


	/**HTTP URL destination configuration used by the topic rule's HTTP action. */
	export interface HttpUrlDestinationConfiguration {
		confirmationUrl: string;
	}

	export interface DescribeAccountAuditConfigurationResponse {
		roleArn?: string;
		auditNotificationTargetConfigurations?: AuditNotificationTargetConfigurations;
		auditCheckConfigurations?: AuditCheckConfigurations;
	}

	export interface DescribeAuditFindingResponse {

		/**The findings (results) of the audit. */
		finding?: AuditFinding;
	}

	export interface DescribeAuditMitigationActionsTaskResponse {
		taskStatus?: DescribeAuditMitigationActionsTaskResponseTaskStatus;
		startTime?: Date;
		endTime?: Date;
		taskStatistics?: AuditMitigationActionsTaskStatistics;

		/**Used in MitigationActionParams, this information identifies the target findings to which the mitigation actions are applied. Only one entry appears. */
		target?: AuditMitigationActionsTaskTarget;
		auditCheckToActionsMapping?: AuditCheckToActionsMapping;
		actionsDefinition?: Array<MitigationAction>;
	}

	export enum DescribeAuditMitigationActionsTaskResponseTaskStatus { IN_PROGRESS = 0, COMPLETED = 1, FAILED = 2, CANCELED = 3 }

	export interface DescribeAuditTaskResponse {
		taskStatus?: DescribeAuditTaskResponseTaskStatus;
		taskType?: DescribeAuditTaskResponseTaskType;
		taskStartTime?: Date;

		/**Statistics for the checks performed during the audit. */
		taskStatistics?: TaskStatistics;
		scheduledAuditName?: string;
		auditDetails?: AuditDetails;
	}

	export enum DescribeAuditTaskResponseTaskStatus { IN_PROGRESS = 0, COMPLETED = 1, FAILED = 2, CANCELED = 3 }

	export enum DescribeAuditTaskResponseTaskType { ON_DEMAND_AUDIT_TASK = 0, SCHEDULED_AUDIT_TASK = 1 }

	export interface DescribeAuthorizerResponse {

		/**The authorizer description. */
		authorizerDescription?: AuthorizerDescription;
	}

	export interface DescribeBillingGroupResponse {
		billingGroupName?: string;
		billingGroupId?: string;
		billingGroupArn?: string;
		version?: number;

		/**The properties of a billing group. */
		billingGroupProperties?: BillingGroupProperties;

		/**Additional information about the billing group. */
		billingGroupMetadata?: BillingGroupMetadata;
	}


	/**The output from the DescribeCACertificate operation. */
	export interface DescribeCACertificateResponse {

		/**Describes a CA certificate. */
		certificateDescription?: CACertificateDescription;

		/**The registration configuration. */
		registrationConfig?: RegistrationConfig;
	}


	/**The output of the DescribeCertificate operation. */
	export interface DescribeCertificateResponse {

		/**Describes a certificate. */
		certificateDescription?: CertificateDescription;
	}

	export interface DescribeDefaultAuthorizerResponse {

		/**The authorizer description. */
		authorizerDescription?: AuthorizerDescription;
	}

	export interface DescribeDimensionResponse {
		name?: string;
		arn?: string;
		type?: DescribeDimensionResponseType;
		stringValues?: Array<DimensionStringValue>;
		creationDate?: Date;
		lastModifiedDate?: Date;
	}

	export enum DescribeDimensionResponseType { TOPIC_FILTER = 0 }

	export interface DescribeDomainConfigurationResponse {
		domainConfigurationName?: string;
		domainConfigurationArn?: string;
		domainName?: string;
		serverCertificates?: Array<ServerCertificateSummary>;

		/**An object that specifies the authorization service for a domain. */
		authorizerConfig?: AuthorizerConfig;
		domainConfigurationStatus?: DescribeDomainConfigurationResponseDomainConfigurationStatus;
		serviceType?: DescribeDomainConfigurationResponseServiceType;
		domainType?: DescribeDomainConfigurationResponseDomainType;
	}

	export enum DescribeDomainConfigurationResponseDomainConfigurationStatus { ENABLED = 0, DISABLED = 1 }

	export enum DescribeDomainConfigurationResponseServiceType { DATA = 0, CREDENTIAL_PROVIDER = 1, JOBS = 2 }

	export enum DescribeDomainConfigurationResponseDomainType { ENDPOINT = 0, AWS_MANAGED = 1, CUSTOMER_MANAGED = 2 }


	/**The output from the DescribeEndpoint operation. */
	export interface DescribeEndpointResponse {
		endpointAddress?: string;
	}

	export interface DescribeEventConfigurationsResponse {
		eventConfigurations?: EventConfigurations;
		creationDate?: Date;
		lastModifiedDate?: Date;
	}

	export interface DescribeIndexResponse {
		indexName?: string;
		indexStatus?: DescribeIndexResponseIndexStatus;
		schema?: string;
	}

	export enum DescribeIndexResponseIndexStatus { ACTIVE = 0, BUILDING = 1, REBUILDING = 2 }

	export interface DescribeJobResponse {
		documentSource?: string;

		/**The <code>Job</code> object contains details about a job. */
		job?: Job;
	}

	export interface DescribeJobExecutionResponse {

		/**The job execution object represents the execution of a job on a particular device. */
		execution?: JobExecution;
	}

	export interface DescribeMitigationActionResponse {
		actionName?: string;
		actionType?: DescribeMitigationActionResponseActionType;
		actionArn?: string;
		actionId?: string;
		roleArn?: string;

		/**The set of parameters for this mitigation action. You can specify only one type of parameter (in other words, you can apply only one action for each defined mitigation action). */
		actionParams?: MitigationActionParams;
		creationDate?: Date;
		lastModifiedDate?: Date;
	}

	export enum DescribeMitigationActionResponseActionType { UPDATE_DEVICE_CERTIFICATE = 0, UPDATE_CA_CERTIFICATE = 1, ADD_THINGS_TO_THING_GROUP = 2, REPLACE_DEFAULT_POLICY_VERSION = 3, ENABLE_IOT_LOGGING = 4, PUBLISH_FINDING_TO_SNS = 5 }

	export interface DescribeProvisioningTemplateResponse {
		templateArn?: string;
		templateName?: string;
		description?: string;
		creationDate?: Date;
		lastModifiedDate?: Date;
		defaultVersionId?: number;
		templateBody?: string;
		enabled?: boolean;
		provisioningRoleArn?: string;

		/**Structure that contains <code>payloadVersion</code> and <code>targetArn</code>. */
		preProvisioningHook?: ProvisioningHook;
	}

	export interface DescribeProvisioningTemplateVersionResponse {
		versionId?: number;
		creationDate?: Date;
		templateBody?: string;
		isDefaultVersion?: boolean;
	}

	export interface DescribeRoleAliasResponse {

		/**Role alias description. */
		roleAliasDescription?: RoleAliasDescription;
	}

	export interface DescribeScheduledAuditResponse {
		frequency?: DescribeScheduledAuditResponseFrequency;
		dayOfMonth?: string;
		dayOfWeek?: DescribeScheduledAuditResponseDayOfWeek;
		targetCheckNames?: Array<AuditCheckName>;
		scheduledAuditName?: string;
		scheduledAuditArn?: string;
	}

	export enum DescribeScheduledAuditResponseFrequency { DAILY = 0, WEEKLY = 1, BIWEEKLY = 2, MONTHLY = 3 }

	export enum DescribeScheduledAuditResponseDayOfWeek { SUN = 0, MON = 1, TUE = 2, WED = 3, THU = 4, FRI = 5, SAT = 6 }

	export interface DescribeSecurityProfileResponse {
		securityProfileName?: string;
		securityProfileArn?: string;
		securityProfileDescription?: string;
		behaviors?: Array<Behavior>;
		alertTargets?: AlertTargets;
		additionalMetricsToRetain?: Array<BehaviorMetric>;
		additionalMetricsToRetainV2?: Array<MetricToRetain>;
		version?: number;
		creationDate?: Date;
		lastModifiedDate?: Date;
	}

	export interface DescribeStreamResponse {

		/**Information about a stream. */
		streamInfo?: StreamInfo;
	}


	/**The output from the DescribeThing operation. */
	export interface DescribeThingResponse {
		defaultClientId?: string;
		thingName?: string;
		thingId?: string;
		thingArn?: string;
		thingTypeName?: string;
		attributes?: Attributes;
		version?: number;
		billingGroupName?: string;
	}

	export interface DescribeThingGroupResponse {
		thingGroupName?: string;
		thingGroupId?: string;
		thingGroupArn?: string;
		version?: number;

		/**Thing group properties. */
		thingGroupProperties?: ThingGroupProperties;

		/**Thing group metadata. */
		thingGroupMetadata?: ThingGroupMetadata;
		indexName?: string;
		queryString?: string;
		queryVersion?: string;
		status?: DescribeThingGroupResponseStatus;
	}

	export enum DescribeThingGroupResponseStatus { ACTIVE = 0, BUILDING = 1, REBUILDING = 2 }

	export interface DescribeThingRegistrationTaskResponse {
		taskId?: string;
		creationDate?: Date;
		lastModifiedDate?: Date;
		templateBody?: string;
		inputFileBucket?: string;
		inputFileKey?: string;
		roleArn?: string;
		status?: DescribeThingRegistrationTaskResponseStatus;
		message?: string;
		successCount?: number;
		failureCount?: number;
		percentageProgress?: number;
	}

	export enum DescribeThingRegistrationTaskResponseStatus { InProgress = 0, Completed = 1, Failed = 2, Cancelled = 3, Cancelling = 4 }


	/**The output for the DescribeThingType operation. */
	export interface DescribeThingTypeResponse {
		thingTypeName?: string;
		thingTypeId?: string;
		thingTypeArn?: string;

		/**The ThingTypeProperties contains information about the thing type including: a thing type description, and a list of searchable thing attribute names. */
		thingTypeProperties?: ThingTypeProperties;

		/**The ThingTypeMetadata contains additional information about the thing type including: creation date and time, a value indicating whether the thing type is deprecated, and a date and time when time was deprecated. */
		thingTypeMetadata?: ThingTypeMetadata;
	}

	export interface GetCardinalityResponse {
		cardinality?: number;
	}

	export interface GetEffectivePoliciesResponse {
		effectivePolicies?: Array<EffectivePolicy>;
	}

	export interface GetIndexingConfigurationResponse {

		/**The thing indexing configuration. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/managing-index.html">Managing Thing Indexing</a>. */
		thingIndexingConfiguration?: ThingIndexingConfiguration;

		/**Thing group indexing configuration. */
		thingGroupIndexingConfiguration?: ThingGroupIndexingConfiguration;
	}

	export interface GetJobDocumentResponse {
		document?: string;
	}


	/**The output from the GetLoggingOptions operation. */
	export interface GetLoggingOptionsResponse {
		roleArn?: string;
		logLevel?: GetLoggingOptionsResponseLogLevel;
	}

	export enum GetLoggingOptionsResponseLogLevel { DEBUG = 0, INFO = 1, ERROR = 2, WARN = 3, DISABLED = 4 }

	export interface GetOTAUpdateResponse {

		/**Information about an OTA update. */
		otaUpdateInfo?: OTAUpdateInfo;
	}

	export interface GetPercentilesResponse {
		percentiles?: Array<PercentPair>;
	}


	/**The output from the GetPolicy operation. */
	export interface GetPolicyResponse {
		policyName?: string;
		policyArn?: string;
		policyDocument?: string;
		defaultVersionId?: string;
		creationDate?: Date;
		lastModifiedDate?: Date;
		generationId?: string;
	}


	/**The output from the GetPolicyVersion operation. */
	export interface GetPolicyVersionResponse {
		policyArn?: string;
		policyName?: string;
		policyDocument?: string;
		policyVersionId?: string;
		isDefaultVersion?: boolean;
		creationDate?: Date;
		lastModifiedDate?: Date;
		generationId?: string;
	}


	/**The output from the GetRegistrationCode operation. */
	export interface GetRegistrationCodeResponse {
		registrationCode?: string;
	}

	export interface GetStatisticsResponse {

		/**A map of key-value pairs for all supported statistics. Currently, only count is supported. */
		statistics?: Statistics;
	}


	/**The output from the GetTopicRule operation. */
	export interface GetTopicRuleResponse {
		ruleArn?: string;

		/**Describes a rule. */
		rule?: TopicRule;
	}

	export interface GetTopicRuleDestinationResponse {

		/**A topic rule destination. */
		topicRuleDestination?: TopicRuleDestination;
	}

	export interface GetV2LoggingOptionsResponse {
		roleArn?: string;
		defaultLogLevel?: GetV2LoggingOptionsResponseDefaultLogLevel;
		disableAllLogs?: boolean;
	}

	export enum GetV2LoggingOptionsResponseDefaultLogLevel { DEBUG = 0, INFO = 1, ERROR = 2, WARN = 3, DISABLED = 4 }

	export interface ListActiveViolationsResponse {
		activeViolations?: Array<ActiveViolation>;
		nextToken?: string;
	}

	export interface ListAttachedPoliciesResponse {
		policies?: Array<Policy>;
		nextMarker?: string;
	}

	export interface ListAuditFindingsResponse {
		findings?: Array<AuditFinding>;
		nextToken?: string;
	}


	/**Information about the version of the policy associated with the resource. */
	export interface PolicyVersionIdentifier {
		policyName?: string;
		policyVersionId?: string;
	}

	export interface ListAuditMitigationActionsExecutionsResponse {
		actionsExecutions?: Array<AuditMitigationActionExecutionMetadata>;
		nextToken?: string;
	}

	export interface ListAuditMitigationActionsTasksResponse {
		tasks?: Array<AuditMitigationActionsTaskMetadata>;
		nextToken?: string;
	}

	export interface ListAuditTasksResponse {
		tasks?: Array<AuditTaskMetadata>;
		nextToken?: string;
	}

	export interface ListAuthorizersResponse {
		authorizers?: Array<AuthorizerSummary>;
		nextMarker?: string;
	}

	export interface ListBillingGroupsResponse {
		billingGroups?: Array<GroupNameAndArn>;
		nextToken?: string;
	}


	/**The output from the ListCACertificates operation. */
	export interface ListCACertificatesResponse {
		certificates?: Array<CACertificate>;
		nextMarker?: string;
	}


	/**The output of the ListCertificates operation. */
	export interface ListCertificatesResponse {
		certificates?: Array<Certificate>;
		nextMarker?: string;
	}


	/**The output of the ListCertificatesByCA operation. */
	export interface ListCertificatesByCAResponse {
		certificates?: Array<Certificate>;
		nextMarker?: string;
	}

	export interface ListDimensionsResponse {
		dimensionNames?: Array<DimensionName>;
		nextToken?: string;
	}

	export interface ListDomainConfigurationsResponse {
		domainConfigurations?: Array<DomainConfigurationSummary>;
		nextMarker?: string;
	}

	export interface ListIndicesResponse {
		indexNames?: Array<IndexName>;
		nextToken?: string;
	}

	export interface ListJobExecutionsForJobResponse {
		executionSummaries?: Array<JobExecutionSummaryForJob>;
		nextToken?: string;
	}

	export interface ListJobExecutionsForThingResponse {
		executionSummaries?: Array<JobExecutionSummaryForThing>;
		nextToken?: string;
	}

	export interface ListJobsResponse {
		jobs?: Array<JobSummary>;
		nextToken?: string;
	}

	export interface ListMitigationActionsResponse {
		actionIdentifiers?: Array<MitigationActionIdentifier>;
		nextToken?: string;
	}

	export interface ListOTAUpdatesResponse {
		otaUpdates?: Array<OTAUpdateSummary>;
		nextToken?: string;
	}


	/**The output from the ListOutgoingCertificates operation. */
	export interface ListOutgoingCertificatesResponse {
		outgoingCertificates?: Array<OutgoingCertificate>;
		nextMarker?: string;
	}


	/**The output from the ListPolicies operation. */
	export interface ListPoliciesResponse {
		policies?: Array<Policy>;
		nextMarker?: string;
	}


	/**The output from the ListPolicyPrincipals operation. */
	export interface ListPolicyPrincipalsResponse {
		principals?: Array<PrincipalArn>;
		nextMarker?: string;
	}


	/**The output from the ListPolicyVersions operation. */
	export interface ListPolicyVersionsResponse {
		policyVersions?: Array<PolicyVersion>;
	}


	/**The output from the ListPrincipalPolicies operation. */
	export interface ListPrincipalPoliciesResponse {
		policies?: Array<Policy>;
		nextMarker?: string;
	}


	/**The output from the ListPrincipalThings operation. */
	export interface ListPrincipalThingsResponse {
		things?: Array<ThingName>;
		nextToken?: string;
	}

	export interface ListProvisioningTemplateVersionsResponse {
		versions?: Array<ProvisioningTemplateVersionSummary>;
		nextToken?: string;
	}

	export interface ListProvisioningTemplatesResponse {
		templates?: Array<ProvisioningTemplateSummary>;
		nextToken?: string;
	}

	export interface ListRoleAliasesResponse {
		roleAliases?: Array<RoleAlias>;
		nextMarker?: string;
	}

	export interface ListScheduledAuditsResponse {
		scheduledAudits?: Array<ScheduledAuditMetadata>;
		nextToken?: string;
	}

	export interface ListSecurityProfilesResponse {
		securityProfileIdentifiers?: Array<SecurityProfileIdentifier>;
		nextToken?: string;
	}

	export interface ListSecurityProfilesForTargetResponse {
		securityProfileTargetMappings?: Array<SecurityProfileTargetMapping>;
		nextToken?: string;
	}

	export interface ListStreamsResponse {
		streams?: Array<StreamSummary>;
		nextToken?: string;
	}

	export interface ListTagsForResourceResponse {
		tags?: Array<Tag>;
		nextToken?: string;
	}

	export interface ListTargetsForPolicyResponse {
		targets?: Array<PolicyTarget>;
		nextMarker?: string;
	}

	export interface ListTargetsForSecurityProfileResponse {
		securityProfileTargets?: Array<SecurityProfileTarget>;
		nextToken?: string;
	}

	export interface ListThingGroupsResponse {
		thingGroups?: Array<GroupNameAndArn>;
		nextToken?: string;
	}

	export interface ListThingGroupsForThingResponse {
		thingGroups?: Array<GroupNameAndArn>;
		nextToken?: string;
	}


	/**The output from the ListThingPrincipals operation. */
	export interface ListThingPrincipalsResponse {
		principals?: Array<PrincipalArn>;
	}

	export interface ListThingRegistrationTaskReportsResponse {
		resourceLinks?: Array<S3FileUrl>;
		reportType?: ListThingRegistrationTaskReportsResponseReportType;
		nextToken?: string;
	}

	export enum ListThingRegistrationTaskReportsResponseReportType { ERRORS = 0, RESULTS = 1 }

	export interface ListThingRegistrationTasksResponse {
		taskIds?: Array<TaskId>;
		nextToken?: string;
	}


	/**The output for the ListThingTypes operation. */
	export interface ListThingTypesResponse {
		thingTypes?: Array<ThingTypeDefinition>;
		nextToken?: string;
	}


	/**The output from the ListThings operation. */
	export interface ListThingsResponse {
		things?: Array<ThingAttribute>;
		nextToken?: string;
	}

	export interface ListThingsInBillingGroupResponse {
		things?: Array<ThingName>;
		nextToken?: string;
	}

	export interface ListThingsInThingGroupResponse {
		things?: Array<ThingName>;
		nextToken?: string;
	}

	export interface ListTopicRuleDestinationsResponse {
		destinationSummaries?: Array<TopicRuleDestinationSummary>;
		nextToken?: string;
	}


	/**The output from the ListTopicRules operation. */
	export interface ListTopicRulesResponse {
		rules?: Array<TopicRuleListItem>;
		nextToken?: string;
	}

	export interface ListV2LoggingLevelsResponse {
		logTargetConfigurations?: Array<LogTargetConfiguration>;
		nextToken?: string;
	}

	export interface ListViolationEventsResponse {
		violationEvents?: Array<ViolationEvent>;
		nextToken?: string;
	}


	/**The output from the RegisterCACertificateResponse operation. */
	export interface RegisterCACertificateResponse {
		certificateArn?: string;
		certificateId?: string;
	}


	/**The output from the RegisterCertificate operation. */
	export interface RegisterCertificateResponse {
		certificateArn?: string;
		certificateId?: string;
	}

	export interface RegisterCertificateWithoutCAResponse {
		certificateArn?: string;
		certificateId?: string;
	}

	export interface RegisterThingResponse {

		/**
		 * The PEM of a certificate.
		 * Max length: 65536
		 * Min length: 1
		 */
		certificatePem?: string;
		resourceArns?: ResourceArns;
	}

	export interface SearchIndexResponse {
		nextToken?: string;
		things?: Array<ThingDocument>;
		thingGroups?: Array<ThingGroupDocument>;
	}

	export interface SetDefaultAuthorizerResponse {
		authorizerName?: string;
		authorizerArn?: string;
	}

	export enum LogLevel { DEBUG = 0, INFO = 1, ERROR = 2, WARN = 3, DISABLED = 4 }

	export enum LogTargetType { DEFAULT = 0, THING_GROUP = 1 }

	export interface StartAuditMitigationActionsTaskResponse {
		taskId?: string;
	}

	export interface StartOnDemandAuditTaskResponse {
		taskId?: string;
	}

	export interface StartThingRegistrationTaskResponse {
		taskId?: string;
	}

	export interface TestAuthorizationResponse {
		authResults?: Array<AuthResult>;
	}


	/**A collection of authorization information. */
	export interface AuthInfo {
		actionType?: AuthInfoActionType;
		resources: Array<Resource>;
	}

	export enum AuthInfoActionType { PUBLISH = 0, SUBSCRIBE = 1, RECEIVE = 2, CONNECT = 3 }

	export interface TestInvokeAuthorizerResponse {
		isAuthenticated?: boolean;
		principalId?: string;
		policyDocuments?: Array<PolicyDocument>;
		refreshAfterInSeconds?: number;
		disconnectAfterInSeconds?: number;
	}


	/**The output from the TransferCertificate operation. */
	export interface TransferCertificateResponse {
		transferredCertificateArn?: string;
	}


	/**Information about the targets to which audit notifications are sent. */
	export interface AuditNotificationTarget {
		targetArn?: string;
		roleArn?: string;
		enabled?: boolean;
	}


	/**Which audit checks are enabled and disabled for this account. */
	export interface AuditCheckConfiguration {
		enabled?: boolean;
	}

	export interface UpdateAuthorizerResponse {
		authorizerName?: string;
		authorizerArn?: string;
	}

	export interface UpdateBillingGroupResponse {
		version?: number;
	}

	export interface UpdateDimensionResponse {
		name?: string;
		arn?: string;
		type?: UpdateDimensionResponseType;
		stringValues?: Array<DimensionStringValue>;
		creationDate?: Date;
		lastModifiedDate?: Date;
	}

	export enum UpdateDimensionResponseType { TOPIC_FILTER = 0 }

	export interface UpdateDomainConfigurationResponse {
		domainConfigurationName?: string;
		domainConfigurationArn?: string;
	}

	export interface UpdateDynamicThingGroupResponse {
		version?: number;
	}


	/**Configuration. */
	export interface Configuration {
		Enabled?: boolean;
	}

	export enum ThingIndexingMode { OFF = 0, REGISTRY = 1, REGISTRY_AND_SHADOW = 2 }

	export enum ThingConnectivityIndexingMode { OFF = 0, STATUS = 1 }

	export enum ThingGroupIndexingMode { OFF = 0, ON = 1 }

	export interface UpdateMitigationActionResponse {
		actionArn?: string;
		actionId?: string;
	}

	export interface UpdateRoleAliasResponse {
		roleAlias?: string;
		roleAliasArn?: string;
	}

	export interface UpdateScheduledAuditResponse {
		scheduledAuditArn?: string;
	}

	export interface UpdateSecurityProfileResponse {
		securityProfileName?: string;
		securityProfileArn?: string;
		securityProfileDescription?: string;
		behaviors?: Array<Behavior>;
		alertTargets?: AlertTargets;
		additionalMetricsToRetain?: Array<BehaviorMetric>;
		additionalMetricsToRetainV2?: Array<MetricToRetain>;
		version?: number;
		creationDate?: Date;
		lastModifiedDate?: Date;
	}

	export interface UpdateStreamResponse {
		streamId?: string;
		streamArn?: string;
		description?: string;
		streamVersion?: number;
	}

	export interface UpdateThingGroupResponse {
		version?: number;
	}

	export interface ValidateSecurityProfileBehaviorsResponse {
		valid?: boolean;
		validationErrors?: Array<ValidationError>;
	}

	export enum AbortAction { CANCEL = 0 }


	/**Details of abort criteria to abort the job. */
	export interface AbortConfig {
		criteriaList: Array<AbortCriteria>;
	}

	export enum JobExecutionFailureType { FAILED = 0, REJECTED = 1, TIMED_OUT = 2, ALL = 3 }


	/**Details of abort criteria to define rules to abort the job. */
	export interface AbortCriteria {
		failureType: AbortCriteriaFailureType;
		action: AbortCriteriaAction;
		thresholdPercentage: number;
		minNumberOfExecutedThings: number;
	}

	export enum AbortCriteriaFailureType { FAILED = 0, REJECTED = 1, TIMED_OUT = 2, ALL = 3 }

	export enum AbortCriteriaAction { CANCEL = 0 }


	/**<p>Describes an action to write to a DynamoDB table.</p> <p>The <code>tableName</code>, <code>hashKeyField</code>, and <code>rangeKeyField</code> values must match the values used when you created the table.</p> <p>The <code>hashKeyValue</code> and <code>rangeKeyvalue</code> fields use a substitution template syntax. These templates provide data at runtime. The syntax is as follows: ${<i>sql-expression</i>}.</p> <p>You can specify any valid expression in a WHERE or SELECT clause, including JSON properties, comparisons, calculations, and functions. For example, the following field uses the third level of the topic:</p> <p> <code>"hashKeyValue": "${topic(3)}"</code> </p> <p>The following field uses the timestamp:</p> <p> <code>"rangeKeyValue": "${timestamp()}"</code> </p> */
	export interface DynamoDBAction {
		tableName: string;
		roleArn: string;
		operation?: string;
		hashKeyField: string;
		hashKeyValue: string;
		hashKeyType?: DynamoDBActionHashKeyType;
		rangeKeyField?: string;
		rangeKeyValue?: string;
		rangeKeyType?: DynamoDBActionRangeKeyType;
		payloadField?: string;
	}

	export enum DynamoDBActionHashKeyType { STRING = 0, NUMBER = 1 }

	export enum DynamoDBActionRangeKeyType { STRING = 0, NUMBER = 1 }


	/**<p>Describes an action to write to a DynamoDB table.</p> <p>This DynamoDB action writes each attribute in the message payload into it's own column in the DynamoDB table.</p> */
	export interface DynamoDBv2Action {
		roleArn: string;

		/**The input for the DynamoActionVS action that specifies the DynamoDB table to which the message data will be written. */
		putItem: PutItemInput;
	}


	/**Describes an action to invoke a Lambda function. */
	export interface LambdaAction {
		functionArn: string;
	}


	/**Describes an action to publish to an Amazon SNS topic. */
	export interface SnsAction {
		targetArn: string;
		roleArn: string;
		messageFormat?: SnsActionMessageFormat;
	}

	export enum SnsActionMessageFormat { RAW = 0, JSON = 1 }


	/**Describes an action to publish data to an Amazon SQS queue. */
	export interface SqsAction {
		roleArn: string;
		queueUrl: string;
		useBase64?: boolean;
	}


	/**Describes an action to write data to an Amazon Kinesis stream. */
	export interface KinesisAction {
		roleArn: string;
		streamName: string;
		partitionKey?: string;
	}


	/**Describes an action to republish to another topic. */
	export interface RepublishAction {
		roleArn: string;
		topic: string;
		qos?: number;
	}


	/**Describes an action to write data to an Amazon S3 bucket. */
	export interface S3Action {
		roleArn: string;
		bucketName: string;
		key: string;
		cannedAcl?: S3ActionCannedAcl;
	}

	export enum S3ActionCannedAcl { private = 0, public-read = 1, public-read-write = 2, aws-exec-read = 3, authenticated-read = 4, bucket-owner-read = 5, bucket-owner-full-control = 6, log-delivery-write = 7 }


	/**Describes an action that writes data to an Amazon Kinesis Firehose stream. */
	export interface FirehoseAction {
		roleArn: string;
		deliveryStreamName: string;
		separator?: string;
	}


	/**Describes an action that captures a CloudWatch metric. */
	export interface CloudwatchMetricAction {
		roleArn: string;
		metricNamespace: string;
		metricName: string;
		metricValue: string;
		metricUnit: string;
		metricTimestamp?: string;
	}


	/**Describes an action that updates a CloudWatch alarm. */
	export interface CloudwatchAlarmAction {
		roleArn: string;
		alarmName: string;
		stateReason: string;
		stateValue: string;
	}


	/**Describes an action that sends data to CloudWatch Logs. */
	export interface CloudwatchLogsAction {
		roleArn: string;
		logGroupName: string;
	}


	/**Describes an action that writes data to an Amazon Elasticsearch Service domain. */
	export interface ElasticsearchAction {
		roleArn: string;
		endpoint: string;
		index: string;
		type: string;
		id: string;
	}


	/**Describes an action to write a message to a Salesforce IoT Cloud Input Stream. */
	export interface SalesforceAction {
		token: string;
		url: string;
	}


	/**Sends message data to an AWS IoT Analytics channel. */
	export interface IotAnalyticsAction {
		channelArn?: string;
		channelName?: string;
		roleArn?: string;
	}


	/**Sends an input to an AWS IoT Events detector. */
	export interface IotEventsAction {
		inputName: string;
		messageId?: string;
		roleArn: string;
	}


	/**Describes an action to send data from an MQTT message that triggered the rule to AWS IoT SiteWise asset properties. */
	export interface IotSiteWiseAction {
		putAssetPropertyValueEntries: Array<PutAssetPropertyValueEntry>;
		roleArn: string;
	}


	/**Starts execution of a Step Functions state machine. */
	export interface StepFunctionsAction {
		executionNamePrefix?: string;
		stateMachineName: string;
		roleArn: string;
	}


	/**Send data to an HTTPS endpoint. */
	export interface HttpAction {
		url: string;
		confirmationUrl?: string;
		headers?: Array<HttpActionHeader>;

		/**The authorization method used to send messages. */
		auth?: HttpAuthorization;
	}

	export enum ActionType { PUBLISH = 0, SUBSCRIBE = 1, RECEIVE = 2, CONNECT = 3 }


	/**The value to be compared with the <code>metric</code>. */
	export interface MetricValue {
		count?: number;
		cidrs?: Array<Cidr>;
		ports?: Array<Port>;
	}


	/**Information about an active Device Defender security profile behavior violation. */
	export interface ActiveViolation {
		violationId?: string;
		thingName?: string;
		securityProfileName?: string;

		/**A Device Defender security profile behavior. */
		behavior?: Behavior;

		/**The value to be compared with the <code>metric</code>. */
		lastViolationValue?: MetricValue;
		lastViolationTime?: Date;
		violationStartTime?: Date;
	}

	export interface AddThingToBillingGroupRequest {
		billingGroupName?: string;
		billingGroupArn?: string;
		thingName?: string;
		thingArn?: string;
	}

	export interface AddThingToThingGroupRequest {
		thingGroupName?: string;
		thingGroupArn?: string;
		thingName?: string;
		thingArn?: string;
		overrideDynamicGroups?: boolean;
	}


	/**The type of alert target: one of "SNS". */
	export enum AlertTargetType { SNS = 0 }


	/**Contains information that allowed the authorization. */
	export interface Allowed {
		policies?: Array<Policy>;
	}


	/**An asset property timestamp entry containing the following information. */
	export interface AssetPropertyTimestamp {
		timeInSeconds: string;
		offsetInNanos?: string;
	}


	/**Contains an asset property value (of a single type). */
	export interface AssetPropertyVariant {
		stringValue?: string;
		integerValue?: string;
		doubleValue?: string;
		booleanValue?: string;
	}


	/**An asset property value entry containing the following information. */
	export interface AssetPropertyValue {

		/**Contains an asset property value (of a single type). */
		value: AssetPropertyVariant;

		/**An asset property timestamp entry containing the following information. */
		timestamp: AssetPropertyTimestamp;
		quality?: string;
	}

	export interface AssociateTargetsWithJobRequest {
		targets: Array<TargetArn>;
		comment?: string;
	}

	export interface AttachPolicyRequest {
		target: string;
	}

	export enum AuditCheckRunStatus { IN_PROGRESS = 0, WAITING_FOR_DATA_COLLECTION = 1, CANCELED = 2, COMPLETED_COMPLIANT = 3, COMPLETED_NON_COMPLIANT = 4, FAILED = 5 }


	/**Information about the audit check. */
	export interface AuditCheckDetails {
		checkRunStatus?: AuditCheckDetailsCheckRunStatus;
		checkCompliant?: boolean;
		totalResourcesCount?: number;
		nonCompliantResourcesCount?: number;
		errorCode?: string;
		message?: string;
	}

	export enum AuditCheckDetailsCheckRunStatus { IN_PROGRESS = 0, WAITING_FOR_DATA_COLLECTION = 1, CANCELED = 2, COMPLETED_COMPLIANT = 3, COMPLETED_NON_COMPLIANT = 4, FAILED = 5 }

	export enum AuditFindingSeverity { CRITICAL = 0, HIGH = 1, MEDIUM = 2, LOW = 3 }


	/**Information about the resource that was noncompliant with the audit check. */
	export interface NonCompliantResource {
		resourceType?: NonCompliantResourceResourceType;

		/**Information that identifies the noncompliant resource. */
		resourceIdentifier?: ResourceIdentifier;
		additionalInfo?: StringMap;
	}

	export enum NonCompliantResourceResourceType { DEVICE_CERTIFICATE = 0, CA_CERTIFICATE = 1, IOT_POLICY = 2, COGNITO_IDENTITY_POOL = 3, CLIENT_ID = 4, ACCOUNT_SETTINGS = 5, ROLE_ALIAS = 6, IAM_ROLE = 7 }


	/**The findings (results) of the audit. */
	export interface AuditFinding {
		findingId?: string;
		taskId?: string;

		/**An audit check name. Checks must be enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.) */
		checkName?: string;
		taskStartTime?: Date;
		findingTime?: Date;
		severity?: AuditFindingSeverity;

		/**Information about the resource that was noncompliant with the audit check. */
		nonCompliantResource?: NonCompliantResource;
		relatedResources?: Array<RelatedResource>;
		reasonForNonCompliance?: string;
		reasonForNonComplianceCode?: string;
	}

	export enum AuditFindingSeverity { CRITICAL = 0, HIGH = 1, MEDIUM = 2, LOW = 3 }

	export enum AuditFrequency { DAILY = 0, WEEKLY = 1, BIWEEKLY = 2, MONTHLY = 3 }

	export enum AuditMitigationActionsExecutionStatus { IN_PROGRESS = 0, COMPLETED = 1, FAILED = 2, CANCELED = 3, SKIPPED = 4, PENDING = 5 }


	/**Returned by ListAuditMitigationActionsTask, this object contains information that describes a mitigation action that has been started. */
	export interface AuditMitigationActionExecutionMetadata {
		taskId?: string;
		findingId?: string;
		actionName?: string;
		actionId?: string;
		status?: AuditMitigationActionExecutionMetadataStatus;
		startTime?: Date;
		endTime?: Date;
		errorCode?: string;
		message?: string;
	}

	export enum AuditMitigationActionExecutionMetadataStatus { IN_PROGRESS = 0, COMPLETED = 1, FAILED = 2, CANCELED = 3, SKIPPED = 4, PENDING = 5 }

	export enum AuditMitigationActionsTaskStatus { IN_PROGRESS = 0, COMPLETED = 1, FAILED = 2, CANCELED = 3 }


	/**Information about an audit mitigation actions task that is returned by <code>ListAuditMitigationActionsTasks</code>. */
	export interface AuditMitigationActionsTaskMetadata {
		taskId?: string;
		startTime?: Date;
		taskStatus?: AuditMitigationActionsTaskMetadataTaskStatus;
	}

	export enum AuditMitigationActionsTaskMetadataTaskStatus { IN_PROGRESS = 0, COMPLETED = 1, FAILED = 2, CANCELED = 3 }


	/**Provides summary counts of how many tasks for findings are in a particular state. This information is included in the response from DescribeAuditMitigationActionsTask. */
	export interface TaskStatisticsForAuditCheck {
		totalFindingsCount?: number;
		failedFindingsCount?: number;
		succeededFindingsCount?: number;
		skippedFindingsCount?: number;
		canceledFindingsCount?: number;
	}


	/**Used in MitigationActionParams, this information identifies the target findings to which the mitigation actions are applied. Only one entry appears. */
	export interface AuditMitigationActionsTaskTarget {
		auditTaskId?: string;
		findingIds?: Array<FindingId>;
		auditCheckToReasonCodeFilter?: AuditCheckToReasonCodeFilter;
	}

	export enum AuditNotificationType { SNS = 0 }

	export enum AuditTaskStatus { IN_PROGRESS = 0, COMPLETED = 1, FAILED = 2, CANCELED = 3 }

	export enum AuditTaskType { ON_DEMAND_AUDIT_TASK = 0, SCHEDULED_AUDIT_TASK = 1 }


	/**The audits that were performed. */
	export interface AuditTaskMetadata {
		taskId?: string;
		taskStatus?: AuditTaskMetadataTaskStatus;
		taskType?: AuditTaskMetadataTaskType;
	}

	export enum AuditTaskMetadataTaskStatus { IN_PROGRESS = 0, COMPLETED = 1, FAILED = 2, CANCELED = 3 }

	export enum AuditTaskMetadataTaskType { ON_DEMAND_AUDIT_TASK = 0, SCHEDULED_AUDIT_TASK = 1 }

	export enum AuthDecision { ALLOWED = 0, EXPLICIT_DENY = 1, IMPLICIT_DENY = 2 }


	/**Contains information that denied the authorization. */
	export interface Denied {

		/**Information that implicitly denies authorization. When policy doesn't explicitly deny or allow an action on a resource it is considered an implicit deny. */
		implicitDeny?: ImplicitDeny;

		/**Information that explicitly denies authorization. */
		explicitDeny?: ExplicitDeny;
	}


	/**The authorizer result. */
	export interface AuthResult {

		/**A collection of authorization information. */
		authInfo?: AuthInfo;

		/**Contains information that allowed the authorization. */
		allowed?: Allowed;

		/**Contains information that denied the authorization. */
		denied?: Denied;
		authDecision?: AuthResultAuthDecision;
		missingContextValues?: Array<MissingContextValue>;
	}

	export enum AuthResultAuthDecision { ALLOWED = 0, EXPLICIT_DENY = 1, IMPLICIT_DENY = 2 }


	/**An object that specifies the authorization service for a domain. */
	export interface AuthorizerConfig {
		defaultAuthorizerName?: string;
		allowAuthorizerOverride?: boolean;
	}

	export enum AuthorizerStatus { ACTIVE = 0, INACTIVE = 1 }


	/**The authorizer description. */
	export interface AuthorizerDescription {
		authorizerName?: string;
		authorizerArn?: string;
		authorizerFunctionArn?: string;
		tokenKeyName?: string;
		tokenSigningPublicKeys?: PublicKeyMap;
		status?: AuthorizerDescriptionStatus;
		creationDate?: Date;
		lastModifiedDate?: Date;
		signingDisabled?: boolean;
	}

	export enum AuthorizerDescriptionStatus { ACTIVE = 0, INACTIVE = 1 }


	/**The authorizer summary. */
	export interface AuthorizerSummary {
		authorizerName?: string;
		authorizerArn?: string;
	}

	export enum AutoRegistrationStatus { ENABLE = 0, DISABLE = 1 }


	/**Configuration for the rollout of OTA updates. */
	export interface AwsJobExecutionsRolloutConfig {
		maximumPerMinute?: number;
	}


	/**Configuration information for pre-signed URLs. Valid when <code>protocols</code> contains HTTP. */
	export interface AwsJobPresignedUrlConfig {
		expiresInSec?: number;
	}


	/**The dimension of a metric. */
	export interface MetricDimension {
		dimensionName: string;
		operator?: MetricDimensionOperator;
	}

	export enum MetricDimensionOperator { IN = 0, NOT_IN = 1 }


	/**The criteria by which the behavior is determined to be normal. */
	export interface BehaviorCriteria {
		comparisonOperator?: BehaviorCriteriaComparisonOperator;

		/**The value to be compared with the <code>metric</code>. */
		value?: MetricValue;
		durationSeconds?: number;
		consecutiveDatapointsToAlarm?: number;
		consecutiveDatapointsToClear?: number;

		/**A statistical ranking (percentile) which indicates a threshold value by which a behavior is determined to be in compliance or in violation of the behavior. */
		statisticalThreshold?: StatisticalThreshold;
	}

	export enum BehaviorCriteriaComparisonOperator { less-than = 0, less-than-equals = 1, greater-than = 2, greater-than-equals = 3, in-cidr-set = 4, not-in-cidr-set = 5, in-port-set = 6, not-in-port-set = 7 }

	export enum ComparisonOperator { less-than = 0, less-than-equals = 1, greater-than = 2, greater-than-equals = 3, in-cidr-set = 4, not-in-cidr-set = 5, in-port-set = 6, not-in-port-set = 7 }


	/**A statistical ranking (percentile) which indicates a threshold value by which a behavior is determined to be in compliance or in violation of the behavior. */
	export interface StatisticalThreshold {
		statistic?: string;
	}


	/**Additional information about the billing group. */
	export interface BillingGroupMetadata {
		creationDate?: Date;
	}


	/**The name and ARN of a group. */
	export interface GroupNameAndArn {
		groupName?: string;
		groupArn?: string;
	}


	/**The properties of a billing group. */
	export interface BillingGroupProperties {
		billingGroupDescription?: string;
	}

	export enum CACertificateStatus { ACTIVE = 0, INACTIVE = 1 }


	/**A CA certificate. */
	export interface CACertificate {
		certificateArn?: string;
		certificateId?: string;
		status?: CACertificateStatus;
		creationDate?: Date;
	}

	export enum CACertificateStatus { ACTIVE = 0, INACTIVE = 1 }


	/**When the certificate is valid. */
	export interface CertificateValidity {
		notBefore?: Date;
		notAfter?: Date;
	}


	/**Describes a CA certificate. */
	export interface CACertificateDescription {
		certificateArn?: string;
		certificateId?: string;
		status?: CACertificateDescriptionStatus;

		/**
		 * The PEM of a certificate.
		 * Max length: 65536
		 * Min length: 1
		 */
		certificatePem?: string;
		ownedBy?: string;
		creationDate?: Date;
		autoRegistrationStatus?: CACertificateDescriptionAutoRegistrationStatus;
		lastModifiedDate?: Date;
		customerVersion?: number;
		generationId?: string;

		/**When the certificate is valid. */
		validity?: CertificateValidity;
	}

	export enum CACertificateDescriptionStatus { ACTIVE = 0, INACTIVE = 1 }

	export enum CACertificateDescriptionAutoRegistrationStatus { ENABLE = 0, DISABLE = 1 }

	export enum CACertificateUpdateAction { DEACTIVATE = 0 }

	export interface CancelJobExecutionRequest {
		expectedVersion?: number;
		statusDetails?: DetailsMap;
	}

	export interface CancelJobRequest {
		reasonCode?: string;
		comment?: string;
	}

	export enum CannedAccessControlList { private = 0, public-read = 1, public-read-write = 2, aws-exec-read = 3, authenticated-read = 4, bucket-owner-read = 5, bucket-owner-full-control = 6, log-delivery-write = 7 }

	export enum CertificateStatus { ACTIVE = 0, INACTIVE = 1, REVOKED = 2, PENDING_TRANSFER = 3, REGISTER_INACTIVE = 4, PENDING_ACTIVATION = 5 }

	export enum CertificateMode { DEFAULT = 0, SNI_ONLY = 1 }


	/**Information about a certificate. */
	export interface Certificate {
		certificateArn?: string;
		certificateId?: string;
		status?: CertificateStatus;
		certificateMode?: CertificateCertificateMode;
		creationDate?: Date;
	}

	export enum CertificateStatus { ACTIVE = 0, INACTIVE = 1, REVOKED = 2, PENDING_TRANSFER = 3, REGISTER_INACTIVE = 4, PENDING_ACTIVATION = 5 }

	export enum CertificateCertificateMode { DEFAULT = 0, SNI_ONLY = 1 }


	/**Data used to transfer a certificate to an AWS account. */
	export interface TransferData {
		transferMessage?: string;
		rejectReason?: string;
		transferDate?: Date;
		acceptDate?: Date;
		rejectDate?: Date;
	}


	/**Describes a certificate. */
	export interface CertificateDescription {
		certificateArn?: string;
		certificateId?: string;
		caCertificateId?: string;
		status?: CertificateDescriptionStatus;

		/**
		 * The PEM of a certificate.
		 * Max length: 65536
		 * Min length: 1
		 */
		certificatePem?: string;
		ownedBy?: string;
		previousOwnedBy?: string;
		creationDate?: Date;
		lastModifiedDate?: Date;
		customerVersion?: number;

		/**Data used to transfer a certificate to an AWS account. */
		transferData?: TransferData;
		generationId?: string;

		/**When the certificate is valid. */
		validity?: CertificateValidity;
		certificateMode?: CertificateDescriptionCertificateMode;
	}

	export enum CertificateDescriptionStatus { ACTIVE = 0, INACTIVE = 1, REVOKED = 2, PENDING_TRANSFER = 3, REGISTER_INACTIVE = 4, PENDING_ACTIVATION = 5 }

	export enum CertificateDescriptionCertificateMode { DEFAULT = 0, SNI_ONLY = 1 }


	/**Information required to start a signing job. */
	export interface StartSigningJobParameter {

		/**Describes the code-signing profile. */
		signingProfileParameter?: SigningProfileParameter;
		signingProfileName?: string;

		/**Describes the location of the updated firmware. */
		destination?: Destination;
	}


	/**Describes a custom method used to code sign a file. */
	export interface CustomCodeSigning {

		/**Describes the signature for a file. */
		signature?: CodeSigningSignature;

		/**Describes the certificate chain being used when code signing a file. */
		certificateChain?: CodeSigningCertificateChain;
		hashAlgorithm?: string;
		signatureAlgorithm?: string;
	}


	/**Describes the method to use when code signing a file. */
	export interface CodeSigning {
		awsSignerJobId?: string;

		/**Information required to start a signing job. */
		startSigningJobParameter?: StartSigningJobParameter;

		/**Describes a custom method used to code sign a file. */
		customCodeSigning?: CustomCodeSigning;
	}


	/**Describes the certificate chain being used when code signing a file. */
	export interface CodeSigningCertificateChain {
		certificateName?: string;
		inlineDocument?: string;
	}


	/**Describes the signature for a file. */
	export interface CodeSigningSignature {
		inlineDocument?: string;
	}

	export interface CreateAuthorizerRequest {
		authorizerFunctionArn: string;
		tokenKeyName?: string;
		tokenSigningPublicKeys?: PublicKeyMap;
		status?: CreateAuthorizerRequestStatus;
		tags?: Array<Tag>;
		signingDisabled?: boolean;
	}

	export enum CreateAuthorizerRequestStatus { ACTIVE = 0, INACTIVE = 1 }

	export interface CreateBillingGroupRequest {

		/**The properties of a billing group. */
		billingGroupProperties?: BillingGroupProperties;
		tags?: Array<Tag>;
	}


	/**The input for the CreateCertificateFromCsr operation. */
	export interface CreateCertificateFromCsrRequest {
		certificateSigningRequest: string;
	}

	export enum DimensionType { TOPIC_FILTER = 0 }

	export interface CreateDimensionRequest {
		type: CreateDimensionRequestType;
		stringValues: Array<DimensionStringValue>;
		tags?: Array<Tag>;
		clientRequestToken: string;
	}

	export enum CreateDimensionRequestType { TOPIC_FILTER = 0 }

	export enum ServiceType { DATA = 0, CREDENTIAL_PROVIDER = 1, JOBS = 2 }

	export interface CreateDomainConfigurationRequest {
		domainName?: string;
		serverCertificateArns?: Array<AcmCertificateArn>;
		validationCertificateArn?: string;

		/**An object that specifies the authorization service for a domain. */
		authorizerConfig?: AuthorizerConfig;
		serviceType?: CreateDomainConfigurationRequestServiceType;
		tags?: Array<Tag>;
	}

	export enum CreateDomainConfigurationRequestServiceType { DATA = 0, CREDENTIAL_PROVIDER = 1, JOBS = 2 }


	/**Thing group properties. */
	export interface ThingGroupProperties {
		thingGroupDescription?: string;

		/**The attribute payload. */
		attributePayload?: AttributePayload;
	}

	export interface CreateDynamicThingGroupRequest {

		/**Thing group properties. */
		thingGroupProperties?: ThingGroupProperties;
		indexName?: string;
		queryString: string;
		queryVersion?: string;
		tags?: Array<Tag>;
	}


	/**Configuration for pre-signed S3 URLs. */
	export interface PresignedUrlConfig {
		roleArn?: string;
		expiresInSec?: number;
	}

	export enum TargetSelection { CONTINUOUS = 0, SNAPSHOT = 1 }


	/**Allows you to create a staged rollout of a job. */
	export interface JobExecutionsRolloutConfig {
		maximumPerMinute?: number;

		/**Allows you to create an exponential rate of rollout for a job. */
		exponentialRate?: ExponentialRolloutRate;
	}


	/**Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>. */
	export interface TimeoutConfig {
		inProgressTimeoutInMinutes?: number;
	}

	export interface CreateJobRequest {
		targets: Array<TargetArn>;
		documentSource?: string;
		document?: string;
		description?: string;

		/**Configuration for pre-signed S3 URLs. */
		presignedUrlConfig?: PresignedUrlConfig;
		targetSelection?: CreateJobRequestTargetSelection;

		/**Allows you to create a staged rollout of a job. */
		jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig;

		/**Details of abort criteria to abort the job. */
		abortConfig?: AbortConfig;

		/**Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>. */
		timeoutConfig?: TimeoutConfig;
		tags?: Array<Tag>;
	}

	export enum CreateJobRequestTargetSelection { CONTINUOUS = 0, SNAPSHOT = 1 }


	/**Describes a key pair. */
	export interface KeyPair {
		PublicKey?: string;
		PrivateKey?: string;
	}


	/**The set of parameters for this mitigation action. You can specify only one type of parameter (in other words, you can apply only one action for each defined mitigation action). */
	export interface MitigationActionParams {

		/**Parameters to define a mitigation action that changes the state of the device certificate to inactive. */
		updateDeviceCertificateParams?: UpdateDeviceCertificateParams;

		/**Parameters to define a mitigation action that changes the state of the CA certificate to inactive. */
		updateCACertificateParams?: UpdateCACertificateParams;

		/**Parameters used when defining a mitigation action that move a set of things to a thing group. */
		addThingsToThingGroupParams?: AddThingsToThingGroupParams;

		/**Parameters to define a mitigation action that adds a blank policy to restrict permissions. */
		replaceDefaultPolicyVersionParams?: ReplaceDefaultPolicyVersionParams;

		/**Parameters used when defining a mitigation action that enable AWS IoT logging. */
		enableIoTLoggingParams?: EnableIoTLoggingParams;

		/**Parameters to define a mitigation action that publishes findings to Amazon SNS. You can implement your own custom actions in response to the Amazon SNS messages. */
		publishFindingToSnsParams?: PublishFindingToSnsParams;
	}

	export interface CreateMitigationActionRequest {
		roleArn: string;

		/**The set of parameters for this mitigation action. You can specify only one type of parameter (in other words, you can apply only one action for each defined mitigation action). */
		actionParams: MitigationActionParams;
		tags?: Array<Tag>;
	}

	export interface CreateOTAUpdateRequest {
		description?: string;
		targets: Array<Target>;
		protocols?: Array<Protocol>;
		targetSelection?: CreateOTAUpdateRequestTargetSelection;

		/**Configuration for the rollout of OTA updates. */
		awsJobExecutionsRolloutConfig?: AwsJobExecutionsRolloutConfig;

		/**Configuration information for pre-signed URLs. Valid when <code>protocols</code> contains HTTP. */
		awsJobPresignedUrlConfig?: AwsJobPresignedUrlConfig;
		files: Array<OTAUpdateFile>;
		roleArn: string;
		additionalParameters?: AdditionalParameterMap;
		tags?: Array<Tag>;
	}

	export enum CreateOTAUpdateRequestTargetSelection { CONTINUOUS = 0, SNAPSHOT = 1 }

	export enum OTAUpdateStatus { CREATE_PENDING = 0, CREATE_IN_PROGRESS = 1, CREATE_COMPLETE = 2, CREATE_FAILED = 3 }


	/**The input for the CreatePolicy operation. */
	export interface CreatePolicyRequest {
		policyDocument: string;
		tags?: Array<Tag>;
	}


	/**The input for the CreatePolicyVersion operation. */
	export interface CreatePolicyVersionRequest {
		policyDocument: string;
	}


	/**Structure that contains <code>payloadVersion</code> and <code>targetArn</code>. */
	export interface ProvisioningHook {
		payloadVersion?: string;
		targetArn: string;
	}

	export interface CreateProvisioningTemplateRequest {
		templateName: string;
		description?: string;
		templateBody: string;
		enabled?: boolean;
		provisioningRoleArn: string;

		/**Structure that contains <code>payloadVersion</code> and <code>targetArn</code>. */
		preProvisioningHook?: ProvisioningHook;
		tags?: Array<Tag>;
	}

	export interface CreateProvisioningTemplateVersionRequest {
		templateBody: string;
	}

	export interface CreateRoleAliasRequest {
		roleArn: string;
		credentialDurationSeconds?: number;
		tags?: Array<Tag>;
	}

	export enum DayOfWeek { SUN = 0, MON = 1, TUE = 2, WED = 3, THU = 4, FRI = 5, SAT = 6 }

	export interface CreateScheduledAuditRequest {
		frequency: CreateScheduledAuditRequestFrequency;
		dayOfMonth?: string;
		dayOfWeek?: CreateScheduledAuditRequestDayOfWeek;
		targetCheckNames: Array<AuditCheckName>;
		tags?: Array<Tag>;
	}

	export enum CreateScheduledAuditRequestFrequency { DAILY = 0, WEEKLY = 1, BIWEEKLY = 2, MONTHLY = 3 }

	export enum CreateScheduledAuditRequestDayOfWeek { SUN = 0, MON = 1, TUE = 2, WED = 3, THU = 4, FRI = 5, SAT = 6 }

	export interface CreateSecurityProfileRequest {
		securityProfileDescription?: string;
		behaviors?: Array<Behavior>;
		alertTargets?: AlertTargets;
		additionalMetricsToRetain?: Array<BehaviorMetric>;
		additionalMetricsToRetainV2?: Array<MetricToRetain>;
		tags?: Array<Tag>;
	}

	export interface CreateStreamRequest {
		description?: string;
		files: Array<StreamFile>;
		roleArn: string;
		tags?: Array<Tag>;
	}

	export interface CreateThingGroupRequest {
		parentGroupName?: string;

		/**Thing group properties. */
		thingGroupProperties?: ThingGroupProperties;
		tags?: Array<Tag>;
	}


	/**The input for the CreateThing operation. */
	export interface CreateThingRequest {
		thingTypeName?: string;

		/**The attribute payload. */
		attributePayload?: AttributePayload;
		billingGroupName?: string;
	}


	/**The ThingTypeProperties contains information about the thing type including: a thing type description, and a list of searchable thing attribute names. */
	export interface ThingTypeProperties {
		thingTypeDescription?: string;
		searchableAttributes?: Array<AttributeName>;
	}


	/**The input for the CreateThingType operation. */
	export interface CreateThingTypeRequest {

		/**The ThingTypeProperties contains information about the thing type including: a thing type description, and a list of searchable thing attribute names. */
		thingTypeProperties?: ThingTypeProperties;
		tags?: Array<Tag>;
	}


	/**Configuration of the topic rule destination. */
	export interface TopicRuleDestinationConfiguration {

		/**HTTP URL destination configuration used by the topic rule's HTTP action. */
		httpUrlConfiguration?: HttpUrlDestinationConfiguration;
	}

	export interface CreateTopicRuleDestinationRequest {

		/**Configuration of the topic rule destination. */
		destinationConfiguration: TopicRuleDestinationConfiguration;
	}


	/**A topic rule destination. */
	export interface TopicRuleDestination {
		arn?: string;
		status?: TopicRuleDestinationStatus;
		statusReason?: string;

		/**HTTP URL destination properties. */
		httpUrlProperties?: HttpUrlDestinationProperties;
	}

	export enum TopicRuleDestinationStatus { ENABLED = 0, IN_PROGRESS = 1, DISABLED = 2, ERROR = 3 }


	/**Describes a rule. */
	export interface TopicRulePayload {
		sql: string;
		description?: string;
		actions: Array<Action>;
		ruleDisabled?: boolean;
		awsIotSqlVersion?: string;

		/**Describes the actions associated with a rule. */
		errorAction?: Action;
	}


	/**The input for the CreateTopicRule operation. */
	export interface CreateTopicRuleRequest {

		/**Describes a rule. */
		topicRulePayload: TopicRulePayload;
	}


	/**Information that implicitly denies authorization. When policy doesn't explicitly deny or allow an action on a resource it is considered an implicit deny. */
	export interface ImplicitDeny {
		policies?: Array<Policy>;
	}


	/**Information that explicitly denies authorization. */
	export interface ExplicitDeny {
		policies?: Array<Policy>;
	}


	/**The input for the DeprecateThingType operation. */
	export interface DeprecateThingTypeRequest {
		undoDeprecate?: boolean;
	}


	/**Statistics for the checks performed during the audit. */
	export interface TaskStatistics {
		totalChecks?: number;
		inProgressChecks?: number;
		waitingForDataCollectionChecks?: number;
		compliantChecks?: number;
		nonCompliantChecks?: number;
		failedChecks?: number;
		canceledChecks?: number;
	}


	/**The registration configuration. */
	export interface RegistrationConfig {
		templateBody?: string;
		roleArn?: string;
	}

	export enum DomainConfigurationStatus { ENABLED = 0, DISABLED = 1 }

	export enum DomainType { ENDPOINT = 0, AWS_MANAGED = 1, CUSTOMER_MANAGED = 2 }

	export enum IndexStatus { ACTIVE = 0, BUILDING = 1, REBUILDING = 2 }


	/**The job execution object represents the execution of a job on a particular device. */
	export interface JobExecution {
		jobId?: string;
		status?: JobExecutionStatus;
		forceCanceled?: boolean;

		/**Details of the job execution status. */
		statusDetails?: JobExecutionStatusDetails;
		thingArn?: string;
		queuedAt?: Date;
		startedAt?: Date;
		lastUpdatedAt?: Date;
		executionNumber?: number;
		versionNumber?: number;
		approximateSecondsBeforeTimedOut?: number;
	}

	export enum JobExecutionStatus { QUEUED = 0, IN_PROGRESS = 1, SUCCEEDED = 2, FAILED = 3, TIMED_OUT = 4, REJECTED = 5, REMOVED = 6, CANCELED = 7 }


	/**The <code>Job</code> object contains details about a job. */
	export interface Job {
		jobArn?: string;
		jobId?: string;
		targetSelection?: JobTargetSelection;
		status?: JobStatus;
		forceCanceled?: boolean;
		reasonCode?: string;
		comment?: string;
		targets?: Array<TargetArn>;
		description?: string;

		/**Configuration for pre-signed S3 URLs. */
		presignedUrlConfig?: PresignedUrlConfig;

		/**Allows you to create a staged rollout of a job. */
		jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig;

		/**Details of abort criteria to abort the job. */
		abortConfig?: AbortConfig;
		createdAt?: Date;
		lastUpdatedAt?: Date;
		completedAt?: Date;

		/**The job process details. */
		jobProcessDetails?: JobProcessDetails;

		/**Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>. */
		timeoutConfig?: TimeoutConfig;
	}

	export enum JobTargetSelection { CONTINUOUS = 0, SNAPSHOT = 1 }

	export enum JobStatus { IN_PROGRESS = 0, CANCELED = 1, COMPLETED = 2, DELETION_IN_PROGRESS = 3 }

	export enum MitigationActionType { UPDATE_DEVICE_CERTIFICATE = 0, UPDATE_CA_CERTIFICATE = 1, ADD_THINGS_TO_THING_GROUP = 2, REPLACE_DEFAULT_POLICY_VERSION = 3, ENABLE_IOT_LOGGING = 4, PUBLISH_FINDING_TO_SNS = 5 }


	/**Role alias description. */
	export interface RoleAliasDescription {
		roleAlias?: string;
		roleAliasArn?: string;
		roleArn?: string;
		owner?: string;
		credentialDurationSeconds?: number;
		creationDate?: Date;
		lastModifiedDate?: Date;
	}


	/**Information about a stream. */
	export interface StreamInfo {
		streamId?: string;
		streamArn?: string;
		streamVersion?: number;
		description?: string;
		files?: Array<StreamFile>;
		createdAt?: Date;
		lastUpdatedAt?: Date;
		roleArn?: string;
	}


	/**Thing group metadata. */
	export interface ThingGroupMetadata {
		parentGroupName?: string;
		rootToParentThingGroups?: Array<GroupNameAndArn>;
		creationDate?: Date;
	}

	export enum DynamicGroupStatus { ACTIVE = 0, BUILDING = 1, REBUILDING = 2 }

	export enum Status { InProgress = 0, Completed = 1, Failed = 2, Cancelled = 3, Cancelling = 4 }


	/**The ThingTypeMetadata contains additional information about the thing type including: creation date and time, a value indicating whether the thing type is deprecated, and a date and time when time was deprecated. */
	export interface ThingTypeMetadata {
		deprecated?: boolean;
		deprecationDate?: Date;
		creationDate?: Date;
	}


	/**Describes the location of updated firmware in S3. */
	export interface S3Destination {
		bucket?: string;
		prefix?: string;
	}


	/**Describes the location of the updated firmware. */
	export interface Destination {

		/**Describes the location of updated firmware in S3. */
		s3Destination?: S3Destination;
	}

	export interface DetachPolicyRequest {
		target: string;
	}

	export enum DeviceCertificateUpdateAction { DEACTIVATE = 0 }

	export enum DimensionValueOperator { IN = 0, NOT_IN = 1 }


	/**<p>The summary of a domain configuration. A domain configuration specifies custom IoT-specific information about a domain. A domain configuration can be associated with an AWS-managed domain (for example, dbc123defghijk.iot.us-west-2.amazonaws.com), a customer managed domain, or a default endpoint.</p> <ul> <li> <p>Data</p> </li> <li> <p>Jobs</p> </li> <li> <p>CredentialProvider</p> </li> </ul> <note> <p>The domain configuration feature is in public preview and is subject to change.</p> </note> */
	export interface DomainConfigurationSummary {
		domainConfigurationName?: string;
		domainConfigurationArn?: string;
		serviceType?: DomainConfigurationSummaryServiceType;
	}

	export enum DomainConfigurationSummaryServiceType { DATA = 0, CREDENTIAL_PROVIDER = 1, JOBS = 2 }

	export enum DynamoKeyType { STRING = 0, NUMBER = 1 }


	/**The input for the DynamoActionVS action that specifies the DynamoDB table to which the message data will be written. */
	export interface PutItemInput {
		tableName: string;
	}


	/**The policy that has the effect on the authorization results. */
	export interface EffectivePolicy {
		policyName?: string;
		policyArn?: string;
		policyDocument?: string;
	}


	/**Error information. */
	export interface ErrorInfo {
		code?: string;
		message?: string;
	}

	export enum EventType { THING = 0, THING_GROUP = 1, THING_TYPE = 2, THING_GROUP_MEMBERSHIP = 3, THING_GROUP_HIERARCHY = 4, THING_TYPE_ASSOCIATION = 5, JOB = 6, JOB_EXECUTION = 7, POLICY = 8, CERTIFICATE = 9, CA_CERTIFICATE = 10 }


	/**Allows you to define a criteria to initiate the increase in rate of rollout for a job. */
	export interface RateIncreaseCriteria {
		numberOfNotifiedThings?: number;
		numberOfSucceededThings?: number;
	}

	export enum FieldType { Number = 0, String = 1, Boolean = 2 }


	/**Describes the name and data type at a field. */
	export interface Field {
		name?: string;
		type?: FieldType;
	}

	export enum FieldType { Number = 0, String = 1, Boolean = 2 }


	/**Describes a group of files that can be streamed. */
	export interface Stream {
		streamId?: string;
		fileId?: number;
	}


	/**The S3 location. */
	export interface S3Location {
		bucket?: string;
		key?: string;
		version?: string;
	}


	/**The location of the OTA update. */
	export interface FileLocation {

		/**Describes a group of files that can be streamed. */
		stream?: Stream;

		/**The S3 location. */
		s3Location?: S3Location;
	}

	export interface GetCardinalityRequest {
		indexName?: string;
		queryString: string;
		aggregationField?: string;
		queryVersion?: string;
	}

	export interface GetEffectivePoliciesRequest {
		principal?: string;
		cognitoIdentityPoolId?: string;
	}


	/**The thing indexing configuration. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/managing-index.html">Managing Thing Indexing</a>. */
	export interface ThingIndexingConfiguration {
		thingIndexingMode: ThingIndexingConfigurationThingIndexingMode;
		thingConnectivityIndexingMode?: ThingIndexingConfigurationThingConnectivityIndexingMode;
		managedFields?: Array<Field>;
		customFields?: Array<Field>;
	}

	export enum ThingIndexingConfigurationThingIndexingMode { OFF = 0, REGISTRY = 1, REGISTRY_AND_SHADOW = 2 }

	export enum ThingIndexingConfigurationThingConnectivityIndexingMode { OFF = 0, STATUS = 1 }


	/**Thing group indexing configuration. */
	export interface ThingGroupIndexingConfiguration {
		thingGroupIndexingMode: ThingGroupIndexingConfigurationThingGroupIndexingMode;
		managedFields?: Array<Field>;
		customFields?: Array<Field>;
	}

	export enum ThingGroupIndexingConfigurationThingGroupIndexingMode { OFF = 0, ON = 1 }


	/**Information about an OTA update. */
	export interface OTAUpdateInfo {
		otaUpdateId?: string;
		otaUpdateArn?: string;
		creationDate?: Date;
		lastModifiedDate?: Date;
		description?: string;
		targets?: Array<Target>;
		protocols?: Array<Protocol>;

		/**Configuration for the rollout of OTA updates. */
		awsJobExecutionsRolloutConfig?: AwsJobExecutionsRolloutConfig;

		/**Configuration information for pre-signed URLs. Valid when <code>protocols</code> contains HTTP. */
		awsJobPresignedUrlConfig?: AwsJobPresignedUrlConfig;
		targetSelection?: OTAUpdateInfoTargetSelection;
		otaUpdateFiles?: Array<OTAUpdateFile>;
		otaUpdateStatus?: OTAUpdateInfoOtaUpdateStatus;
		awsIotJobId?: string;
		awsIotJobArn?: string;

		/**Error information. */
		errorInfo?: ErrorInfo;
		additionalParameters?: AdditionalParameterMap;
	}

	export enum OTAUpdateInfoTargetSelection { CONTINUOUS = 0, SNAPSHOT = 1 }

	export enum OTAUpdateInfoOtaUpdateStatus { CREATE_PENDING = 0, CREATE_IN_PROGRESS = 1, CREATE_COMPLETE = 2, CREATE_FAILED = 3 }

	export interface GetPercentilesRequest {
		indexName?: string;
		queryString: string;
		aggregationField?: string;
		queryVersion?: string;
		percents?: Array<Percent>;
	}

	export interface GetStatisticsRequest {
		indexName?: string;
		queryString: string;
		aggregationField?: string;
		queryVersion?: string;
	}


	/**A map of key-value pairs for all supported statistics. Currently, only count is supported. */
	export interface Statistics {
		count?: number;
		average?: number;
		sum?: number;
		minimum?: number;
		maximum?: number;
		sumOfSquares?: number;
		variance?: number;
		stdDeviation?: number;
	}


	/**Describes a rule. */
	export interface TopicRule {
		ruleName?: string;
		sql?: string;
		description?: string;
		createdAt?: Date;
		actions?: Array<Action>;
		ruleDisabled?: boolean;
		awsIotSqlVersion?: string;

		/**Describes the actions associated with a rule. */
		errorAction?: Action;
	}


	/**The HTTP action header. */
	export interface HttpActionHeader {
		key: string;
		value: string;
	}


	/**The authorization method used to send messages. */
	export interface HttpAuthorization {

		/**Use Sig V4 authorization. */
		sigv4?: SigV4Authorization;
	}


	/**Use Sig V4 authorization. */
	export interface SigV4Authorization {
		signingRegion: string;
		serviceName: string;
		roleArn: string;
	}


	/**Specifies the HTTP context to use for the test authorizer request. */
	export interface HttpContext {
		headers?: HttpHeaders;
		queryString?: string;
	}


	/**HTTP URL destination properties. */
	export interface HttpUrlDestinationProperties {
		confirmationUrl?: string;
	}


	/**Information about an HTTP URL destination. */
	export interface HttpUrlDestinationSummary {
		confirmationUrl?: string;
	}

	export enum JobStatus { IN_PROGRESS = 0, CANCELED = 1, COMPLETED = 2, DELETION_IN_PROGRESS = 3 }


	/**The job process details. */
	export interface JobProcessDetails {
		processingTargets?: Array<ProcessingTargetName>;
		numberOfCanceledThings?: number;
		numberOfSucceededThings?: number;
		numberOfFailedThings?: number;
		numberOfRejectedThings?: number;
		numberOfQueuedThings?: number;
		numberOfInProgressThings?: number;
		numberOfRemovedThings?: number;
		numberOfTimedOutThings?: number;
	}

	export enum JobExecutionStatus { QUEUED = 0, IN_PROGRESS = 1, SUCCEEDED = 2, FAILED = 3, TIMED_OUT = 4, REJECTED = 5, REMOVED = 6, CANCELED = 7 }


	/**Details of the job execution status. */
	export interface JobExecutionStatusDetails {
		detailsMap?: DetailsMap;
	}


	/**The job execution summary. */
	export interface JobExecutionSummary {
		status?: JobExecutionSummaryStatus;
		queuedAt?: Date;
		startedAt?: Date;
		lastUpdatedAt?: Date;
		executionNumber?: number;
	}

	export enum JobExecutionSummaryStatus { QUEUED = 0, IN_PROGRESS = 1, SUCCEEDED = 2, FAILED = 3, TIMED_OUT = 4, REJECTED = 5, REMOVED = 6, CANCELED = 7 }


	/**Contains a summary of information about job executions for a specific job. */
	export interface JobExecutionSummaryForJob {
		thingArn?: string;

		/**The job execution summary. */
		jobExecutionSummary?: JobExecutionSummary;
	}


	/**The job execution summary for a thing. */
	export interface JobExecutionSummaryForThing {
		jobId?: string;

		/**The job execution summary. */
		jobExecutionSummary?: JobExecutionSummary;
	}


	/**The job summary. */
	export interface JobSummary {
		jobArn?: string;
		jobId?: string;
		thingGroupId?: string;
		targetSelection?: JobSummaryTargetSelection;
		status?: JobSummaryStatus;
		createdAt?: Date;
		lastUpdatedAt?: Date;
		completedAt?: Date;
	}

	export enum JobSummaryTargetSelection { CONTINUOUS = 0, SNAPSHOT = 1 }

	export enum JobSummaryStatus { IN_PROGRESS = 0, CANCELED = 1, COMPLETED = 2, DELETION_IN_PROGRESS = 3 }


	/**Information that identifies the noncompliant resource. */
	export interface ResourceIdentifier {
		deviceCertificateId?: string;
		caCertificateId?: string;
		cognitoIdentityPoolId?: string;
		clientId?: string;

		/**Information about the version of the policy associated with the resource. */
		policyVersionIdentifier?: PolicyVersionIdentifier;
		account?: string;
		iamRoleArn?: string;
		roleAliasArn?: string;
	}

	export interface ListAuditFindingsRequest {
		taskId?: string;

		/**An audit check name. Checks must be enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.) */
		checkName?: string;

		/**Information that identifies the noncompliant resource. */
		resourceIdentifier?: ResourceIdentifier;
		maxResults?: number;
		nextToken?: string;
		startTime?: Date;
		endTime?: Date;
	}

	export enum ReportType { ERRORS = 0, RESULTS = 1 }


	/**A log target. */
	export interface LogTarget {
		targetType: LogTargetTargetType;
		targetName?: string;
	}

	export enum LogTargetTargetType { DEFAULT = 0, THING_GROUP = 1 }


	/**The target configuration. */
	export interface LogTargetConfiguration {

		/**A log target. */
		logTarget?: LogTarget;
		logLevel?: LogTargetConfigurationLogLevel;
	}

	export enum LogTargetConfigurationLogLevel { DEBUG = 0, INFO = 1, ERROR = 2, WARN = 3, DISABLED = 4 }


	/**Describes the logging options payload. */
	export interface LoggingOptionsPayload {
		roleArn: string;
		logLevel?: LoggingOptionsPayloadLogLevel;
	}

	export enum LoggingOptionsPayloadLogLevel { DEBUG = 0, INFO = 1, ERROR = 2, WARN = 3, DISABLED = 4 }

	export enum MessageFormat { RAW = 0, JSON = 1 }


	/**Describes which changes should be applied as part of a mitigation action. */
	export interface MitigationAction {
		name?: string;
		id?: string;
		roleArn?: string;

		/**The set of parameters for this mitigation action. You can specify only one type of parameter (in other words, you can apply only one action for each defined mitigation action). */
		actionParams?: MitigationActionParams;
	}


	/**Information that identifies a mitigation action. This information is returned by ListMitigationActions. */
	export interface MitigationActionIdentifier {
		actionName?: string;
		actionArn?: string;
		creationDate?: Date;
	}


	/**Specifies the MQTT context to use for the test authorizer request */
	export interface MqttContext {
		username?: string;
		password?: string;
		clientId?: string;
	}

	export enum ResourceType { DEVICE_CERTIFICATE = 0, CA_CERTIFICATE = 1, IOT_POLICY = 2, COGNITO_IDENTITY_POOL = 3, CLIENT_ID = 4, ACCOUNT_SETTINGS = 5, ROLE_ALIAS = 6, IAM_ROLE = 7 }


	/**An OTA update summary. */
	export interface OTAUpdateSummary {
		otaUpdateId?: string;
		otaUpdateArn?: string;
		creationDate?: Date;
	}


	/**A certificate that has been transferred but not yet accepted. */
	export interface OutgoingCertificate {
		certificateArn?: string;
		certificateId?: string;
		transferredTo?: string;
		transferDate?: Date;
		transferMessage?: string;
		creationDate?: Date;
	}


	/**Describes the percentile and percentile value. */
	export interface PercentPair {
		percent?: number;
		value?: number;
	}


	/**Describes an AWS IoT policy. */
	export interface Policy {
		policyName?: string;
		policyArn?: string;
	}

	export enum PolicyTemplateName { BLANK_POLICY = 0 }


	/**Describes a policy version. */
	export interface PolicyVersion {
		versionId?: string;
		isDefaultVersion?: boolean;
		createDate?: Date;
	}


	/**A summary of information about a fleet provisioning template. */
	export interface ProvisioningTemplateSummary {
		templateArn?: string;
		templateName?: string;
		description?: string;
		creationDate?: Date;
		lastModifiedDate?: Date;
		enabled?: boolean;
	}


	/**A summary of information about a fleet provision template version. */
	export interface ProvisioningTemplateVersionSummary {
		versionId?: number;
		creationDate?: Date;
		isDefaultVersion?: boolean;
	}


	/**An asset property value entry containing the following information. */
	export interface PutAssetPropertyValueEntry {
		entryId?: string;
		assetId?: string;
		propertyId?: string;
		propertyAlias?: string;
		propertyValues: Array<AssetPropertyValue>;
	}


	/**The input to the RegisterCACertificate operation. */
	export interface RegisterCACertificateRequest {

		/**
		 * The PEM of a certificate.
		 * Max length: 65536
		 * Min length: 1
		 */
		caCertificate: string;

		/**
		 * The PEM of a certificate.
		 * Max length: 65536
		 * Min length: 1
		 */
		verificationCertificate: string;

		/**The registration configuration. */
		registrationConfig?: RegistrationConfig;
		tags?: Array<Tag>;
	}


	/**The input to the RegisterCertificate operation. */
	export interface RegisterCertificateRequest {

		/**
		 * The PEM of a certificate.
		 * Max length: 65536
		 * Min length: 1
		 */
		certificatePem: string;

		/**
		 * The PEM of a certificate.
		 * Max length: 65536
		 * Min length: 1
		 */
		caCertificatePem?: string;
		status?: RegisterCertificateRequestStatus;
	}

	export enum RegisterCertificateRequestStatus { ACTIVE = 0, INACTIVE = 1, REVOKED = 2, PENDING_TRANSFER = 3, REGISTER_INACTIVE = 4, PENDING_ACTIVATION = 5 }

	export interface RegisterCertificateWithoutCARequest {

		/**
		 * The PEM of a certificate.
		 * Max length: 65536
		 * Min length: 1
		 */
		certificatePem: string;
		status?: RegisterCertificateWithoutCARequestStatus;
	}

	export enum RegisterCertificateWithoutCARequestStatus { ACTIVE = 0, INACTIVE = 1, REVOKED = 2, PENDING_TRANSFER = 3, REGISTER_INACTIVE = 4, PENDING_ACTIVATION = 5 }

	export interface RegisterThingRequest {
		templateBody: string;
		parameters?: Parameters;
	}


	/**The input for the RejectCertificateTransfer operation. */
	export interface RejectCertificateTransferRequest {
		rejectReason?: string;
	}


	/**Information about a related resource. */
	export interface RelatedResource {
		resourceType?: RelatedResourceResourceType;

		/**Information that identifies the noncompliant resource. */
		resourceIdentifier?: ResourceIdentifier;
		additionalInfo?: StringMap;
	}

	export enum RelatedResourceResourceType { DEVICE_CERTIFICATE = 0, CA_CERTIFICATE = 1, IOT_POLICY = 2, COGNITO_IDENTITY_POOL = 3, CLIENT_ID = 4, ACCOUNT_SETTINGS = 5, ROLE_ALIAS = 6, IAM_ROLE = 7 }

	export interface RemoveThingFromBillingGroupRequest {
		billingGroupName?: string;
		billingGroupArn?: string;
		thingName?: string;
		thingArn?: string;
	}

	export interface RemoveThingFromThingGroupRequest {
		thingGroupName?: string;
		thingGroupArn?: string;
		thingName?: string;
		thingArn?: string;
	}


	/**The input for the ReplaceTopicRule operation. */
	export interface ReplaceTopicRuleRequest {

		/**Describes a rule. */
		topicRulePayload: TopicRulePayload;
	}


	/**Information about the scheduled audit. */
	export interface ScheduledAuditMetadata {
		scheduledAuditName?: string;
		scheduledAuditArn?: string;
		frequency?: ScheduledAuditMetadataFrequency;
		dayOfMonth?: string;
		dayOfWeek?: ScheduledAuditMetadataDayOfWeek;
	}

	export enum ScheduledAuditMetadataFrequency { DAILY = 0, WEEKLY = 1, BIWEEKLY = 2, MONTHLY = 3 }

	export enum ScheduledAuditMetadataDayOfWeek { SUN = 0, MON = 1, TUE = 2, WED = 3, THU = 4, FRI = 5, SAT = 6 }

	export interface SearchIndexRequest {
		indexName?: string;
		queryString: string;
		nextToken?: string;
		maxResults?: number;
		queryVersion?: string;
	}


	/**Identifying information for a Device Defender security profile. */
	export interface SecurityProfileIdentifier {
		name: string;
		arn: string;
	}


	/**A target to which an alert is sent when a security profile behavior is violated. */
	export interface SecurityProfileTarget {
		arn: string;
	}


	/**Information about a security profile and the target associated with it. */
	export interface SecurityProfileTargetMapping {

		/**Identifying information for a Device Defender security profile. */
		securityProfileIdentifier?: SecurityProfileIdentifier;

		/**A target to which an alert is sent when a security profile behavior is violated. */
		target?: SecurityProfileTarget;
	}

	export enum ServerCertificateStatus { INVALID = 0, VALID = 1 }


	/**An object that contains information about a server certificate. */
	export interface ServerCertificateSummary {
		serverCertificateArn?: string;
		serverCertificateStatus?: ServerCertificateSummaryServerCertificateStatus;
		serverCertificateStatusDetail?: string;
	}

	export enum ServerCertificateSummaryServerCertificateStatus { INVALID = 0, VALID = 1 }

	export interface SetDefaultAuthorizerRequest {
		authorizerName: string;
	}


	/**The input for the SetLoggingOptions operation. */
	export interface SetLoggingOptionsRequest {

		/**Describes the logging options payload. */
		loggingOptionsPayload: LoggingOptionsPayload;
	}

	export interface SetV2LoggingLevelRequest {

		/**A log target. */
		logTarget: LogTarget;
		logLevel: SetV2LoggingLevelRequestLogLevel;
	}

	export enum SetV2LoggingLevelRequestLogLevel { DEBUG = 0, INFO = 1, ERROR = 2, WARN = 3, DISABLED = 4 }

	export interface SetV2LoggingOptionsRequest {
		roleArn?: string;
		defaultLogLevel?: SetV2LoggingOptionsRequestDefaultLogLevel;
		disableAllLogs?: boolean;
	}

	export enum SetV2LoggingOptionsRequestDefaultLogLevel { DEBUG = 0, INFO = 1, ERROR = 2, WARN = 3, DISABLED = 4 }


	/**Describes the code-signing profile. */
	export interface SigningProfileParameter {
		certificateArn?: string;
		platform?: string;
		certificatePathOnDevice?: string;
	}

	export interface StartAuditMitigationActionsTaskRequest {

		/**Used in MitigationActionParams, this information identifies the target findings to which the mitigation actions are applied. Only one entry appears. */
		target: AuditMitigationActionsTaskTarget;
		auditCheckToActionsMapping: AuditCheckToActionsMapping;
		clientRequestToken: string;
	}

	export interface StartOnDemandAuditTaskRequest {
		targetCheckNames: Array<AuditCheckName>;
	}

	export interface StartThingRegistrationTaskRequest {
		templateBody: string;
		inputFileBucket: string;
		inputFileKey: string;
		roleArn: string;
	}


	/**A summary of a stream. */
	export interface StreamSummary {
		streamId?: string;
		streamArn?: string;
		streamVersion?: number;
		description?: string;
	}

	export interface TagResourceRequest {
		resourceArn: string;
		tags: Array<Tag>;
	}

	export interface TestAuthorizationRequest {
		principal?: string;
		cognitoIdentityPoolId?: string;
		authInfos: Array<AuthInfo>;
		policyNamesToAdd?: Array<PolicyName>;
		policyNamesToSkip?: Array<PolicyName>;
	}


	/**Specifies the TLS context to use for the test authorizer request. */
	export interface TlsContext {
		serverName?: string;
	}

	export interface TestInvokeAuthorizerRequest {
		token?: string;
		tokenSignature?: string;

		/**Specifies the HTTP context to use for the test authorizer request. */
		httpContext?: HttpContext;

		/**Specifies the MQTT context to use for the test authorizer request */
		mqttContext?: MqttContext;

		/**Specifies the TLS context to use for the test authorizer request. */
		tlsContext?: TlsContext;
	}


	/**The properties of the thing, including thing name, thing type name, and a list of thing attributes. */
	export interface ThingAttribute {
		thingName?: string;
		thingTypeName?: string;
		thingArn?: string;
		attributes?: Attributes;
		version?: number;
	}


	/**The connectivity status of the thing. */
	export interface ThingConnectivity {
		connected?: boolean;
		timestamp?: number;
	}


	/**The thing search index document. */
	export interface ThingDocument {
		thingName?: string;
		thingId?: string;
		thingTypeName?: string;
		thingGroupNames?: Array<ThingGroupName>;
		attributes?: Attributes;
		shadow?: string;

		/**The connectivity status of the thing. */
		connectivity?: ThingConnectivity;
	}


	/**The thing group search index document. */
	export interface ThingGroupDocument {
		thingGroupName?: string;
		thingGroupId?: string;
		thingGroupDescription?: string;
		attributes?: Attributes;
		parentGroupNames?: Array<ThingGroupName>;
	}


	/**The definition of the thing type, including thing type name and description. */
	export interface ThingTypeDefinition {
		thingTypeName?: string;
		thingTypeArn?: string;

		/**The ThingTypeProperties contains information about the thing type including: a thing type description, and a list of searchable thing attribute names. */
		thingTypeProperties?: ThingTypeProperties;

		/**The ThingTypeMetadata contains additional information about the thing type including: creation date and time, a value indicating whether the thing type is deprecated, and a date and time when time was deprecated. */
		thingTypeMetadata?: ThingTypeMetadata;
	}

	export enum TopicRuleDestinationStatus { ENABLED = 0, IN_PROGRESS = 1, DISABLED = 2, ERROR = 3 }


	/**Information about the topic rule destination. */
	export interface TopicRuleDestinationSummary {
		arn?: string;
		status?: TopicRuleDestinationSummaryStatus;
		statusReason?: string;

		/**Information about an HTTP URL destination. */
		httpUrlSummary?: HttpUrlDestinationSummary;
	}

	export enum TopicRuleDestinationSummaryStatus { ENABLED = 0, IN_PROGRESS = 1, DISABLED = 2, ERROR = 3 }


	/**Describes a rule. */
	export interface TopicRuleListItem {
		ruleArn?: string;
		ruleName?: string;
		topicPattern?: string;
		createdAt?: Date;
		ruleDisabled?: boolean;
	}


	/**The input for the TransferCertificate operation. */
	export interface TransferCertificateRequest {
		transferMessage?: string;
	}

	export interface UntagResourceRequest {
		resourceArn: string;
		tagKeys: Array<TagKey>;
	}

	export interface UpdateAccountAuditConfigurationRequest {
		roleArn?: string;
		auditNotificationTargetConfigurations?: AuditNotificationTargetConfigurations;
		auditCheckConfigurations?: AuditCheckConfigurations;
	}

	export interface UpdateAuthorizerRequest {
		authorizerFunctionArn?: string;
		tokenKeyName?: string;
		tokenSigningPublicKeys?: PublicKeyMap;
		status?: UpdateAuthorizerRequestStatus;
	}

	export enum UpdateAuthorizerRequestStatus { ACTIVE = 0, INACTIVE = 1 }

	export interface UpdateBillingGroupRequest {

		/**The properties of a billing group. */
		billingGroupProperties: BillingGroupProperties;
		expectedVersion?: number;
	}


	/**The input to the UpdateCACertificate operation. */
	export interface UpdateCACertificateRequest {

		/**The registration configuration. */
		registrationConfig?: RegistrationConfig;
		removeAutoRegistration?: boolean;
	}

	export interface UpdateDimensionRequest {
		stringValues: Array<DimensionStringValue>;
	}

	export interface UpdateDomainConfigurationRequest {

		/**An object that specifies the authorization service for a domain. */
		authorizerConfig?: AuthorizerConfig;
		domainConfigurationStatus?: UpdateDomainConfigurationRequestDomainConfigurationStatus;
		removeAuthorizerConfig?: boolean;
	}

	export enum UpdateDomainConfigurationRequestDomainConfigurationStatus { ENABLED = 0, DISABLED = 1 }

	export interface UpdateDynamicThingGroupRequest {

		/**Thing group properties. */
		thingGroupProperties: ThingGroupProperties;
		expectedVersion?: number;
		indexName?: string;
		queryString?: string;
		queryVersion?: string;
	}

	export interface UpdateEventConfigurationsRequest {
		eventConfigurations?: EventConfigurations;
	}

	export interface UpdateIndexingConfigurationRequest {

		/**The thing indexing configuration. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/managing-index.html">Managing Thing Indexing</a>. */
		thingIndexingConfiguration?: ThingIndexingConfiguration;

		/**Thing group indexing configuration. */
		thingGroupIndexingConfiguration?: ThingGroupIndexingConfiguration;
	}

	export interface UpdateJobRequest {
		description?: string;

		/**Configuration for pre-signed S3 URLs. */
		presignedUrlConfig?: PresignedUrlConfig;

		/**Allows you to create a staged rollout of a job. */
		jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig;

		/**Details of abort criteria to abort the job. */
		abortConfig?: AbortConfig;

		/**Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>. */
		timeoutConfig?: TimeoutConfig;
	}

	export interface UpdateMitigationActionRequest {
		roleArn?: string;

		/**The set of parameters for this mitigation action. You can specify only one type of parameter (in other words, you can apply only one action for each defined mitigation action). */
		actionParams?: MitigationActionParams;
	}

	export interface UpdateProvisioningTemplateRequest {
		description?: string;
		enabled?: boolean;
		defaultVersionId?: number;
		provisioningRoleArn?: string;

		/**Structure that contains <code>payloadVersion</code> and <code>targetArn</code>. */
		preProvisioningHook?: ProvisioningHook;
		removePreProvisioningHook?: boolean;
	}

	export interface UpdateRoleAliasRequest {
		roleArn?: string;
		credentialDurationSeconds?: number;
	}

	export interface UpdateScheduledAuditRequest {
		frequency?: UpdateScheduledAuditRequestFrequency;
		dayOfMonth?: string;
		dayOfWeek?: UpdateScheduledAuditRequestDayOfWeek;
		targetCheckNames?: Array<AuditCheckName>;
	}

	export enum UpdateScheduledAuditRequestFrequency { DAILY = 0, WEEKLY = 1, BIWEEKLY = 2, MONTHLY = 3 }

	export enum UpdateScheduledAuditRequestDayOfWeek { SUN = 0, MON = 1, TUE = 2, WED = 3, THU = 4, FRI = 5, SAT = 6 }

	export interface UpdateSecurityProfileRequest {
		securityProfileDescription?: string;
		behaviors?: Array<Behavior>;
		alertTargets?: AlertTargets;
		additionalMetricsToRetain?: Array<BehaviorMetric>;
		additionalMetricsToRetainV2?: Array<MetricToRetain>;
		deleteBehaviors?: boolean;
		deleteAlertTargets?: boolean;
		deleteAdditionalMetricsToRetain?: boolean;
	}

	export interface UpdateStreamRequest {
		description?: string;
		files?: Array<StreamFile>;
		roleArn?: string;
	}

	export interface UpdateThingGroupRequest {

		/**Thing group properties. */
		thingGroupProperties: ThingGroupProperties;
		expectedVersion?: number;
	}

	export interface UpdateThingGroupsForThingRequest {
		thingName?: string;
		thingGroupsToAdd?: Array<ThingGroupName>;
		thingGroupsToRemove?: Array<ThingGroupName>;
		overrideDynamicGroups?: boolean;
	}


	/**The input for the UpdateThing operation. */
	export interface UpdateThingRequest {
		thingTypeName?: string;

		/**The attribute payload. */
		attributePayload?: AttributePayload;
		expectedVersion?: number;
		removeThingType?: boolean;
	}

	export interface UpdateTopicRuleDestinationRequest {
		arn: string;
		status: UpdateTopicRuleDestinationRequestStatus;
	}

	export enum UpdateTopicRuleDestinationRequestStatus { ENABLED = 0, IN_PROGRESS = 1, DISABLED = 2, ERROR = 3 }

	export interface ValidateSecurityProfileBehaviorsRequest {
		behaviors: Array<Behavior>;
	}


	/**Information about an error found in a behavior specification. */
	export interface ValidationError {
		errorMessage?: string;
	}

	export enum ViolationEventType { in-alarm = 0, alarm-cleared = 1, alarm-invalidated = 2 }


	/**Information about a Device Defender security profile behavior violation. */
	export interface ViolationEvent {
		violationId?: string;
		thingName?: string;
		securityProfileName?: string;

		/**A Device Defender security profile behavior. */
		behavior?: Behavior;

		/**The value to be compared with the <code>metric</code>. */
		metricValue?: MetricValue;
		violationEventType?: ViolationEventViolationEventType;
		violationEventTime?: Date;
	}

	export enum ViolationEventViolationEventType { in-alarm = 0, alarm-cleared = 1, alarm-invalidated = 2 }

	export class DemoClient {
		constructor(private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/') {
		}

		/**
		 * Adds a thing to a billing group.
		 * Put /billing-groups/addThingToBillingGroup
		 * @return {AddThingToBillingGroupResponse} Success
		 */
		AddThingToBillingGroup(requestBody: AddThingToBillingGroupBody, headersHandler?: () => {[header: string]: string}): Promise<AddThingToBillingGroupResponse> {
			return fetch(this.baseUri + '/billing-groups/addThingToBillingGroup', { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Adds a thing to a thing group.
		 * Put /thing-groups/addThingToThingGroup
		 * @return {AddThingToThingGroupResponse} Success
		 */
		AddThingToThingGroup(requestBody: AddThingToThingGroupBody, headersHandler?: () => {[header: string]: string}): Promise<AddThingToThingGroupResponse> {
			return fetch(this.baseUri + '/thing-groups/addThingToThingGroup', { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Associates a group with a continuous job. The following criteria must be met: </p> <ul> <li> <p>The job must have been created with the <code>targetSelection</code> field set to "CONTINUOUS".</p> </li> <li> <p>The job status must currently be "IN_PROGRESS".</p> </li> <li> <p>The total number of targets associated with a job must not exceed 100.</p> </li> </ul>
		 * Post /jobs/{jobId}/targets
		 * @param {string} jobId The unique identifier you assigned to this job when it was created.
		 * @return {AssociateTargetsWithJobResponse} Success
		 */
		AssociateTargetsWithJob(jobId: string, requestBody: AssociateTargetsWithJobBody, headersHandler?: () => {[header: string]: string}): Promise<AssociateTargetsWithJobResponse> {
			return fetch(this.baseUri + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/targets', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Attaches a policy to the specified target.
		 * Put /target-policies/{policyName}
		 * @param {string} policyName The name of the policy to attach.
		 * @return {void} Success
		 */
		AttachPolicy(policyName: string, requestBody: AttachPolicyBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/target-policies/' + (policyName == null ? '' : encodeURIComponent(policyName)), { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Detaches a policy from the specified target.
		 * Post /target-policies/{policyName}
		 * @param {string} policyName The policy to detach.
		 * @return {void} Success
		 */
		DetachPolicy(policyName: string, requestBody: DetachPolicyBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/target-policies/' + (policyName == null ? '' : encodeURIComponent(policyName)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * <p>Attaches the specified policy to the specified principal (certificate or other credential).</p> <p> <b>Note:</b> This API is deprecated. Please use <a>AttachPolicy</a> instead.</p>
		 * Put /principal-policies/{policyName}#x-amzn-iot-principal
		 * @param {string} policyName The policy name.
		 * @return {void} Success
		 */
		AttachPrincipalPolicy(policyName: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/principal-policies/' + (policyName == null ? '' : encodeURIComponent(policyName)) + '#x-amzn-iot-principal', { method: 'put', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Removes the specified policy from the specified certificate.</p> <p> <b>Note:</b> This API is deprecated. Please use <a>DetachPolicy</a> instead.</p>
		 * Delete /principal-policies/{policyName}#x-amzn-iot-principal
		 * @param {string} policyName The name of the policy to detach.
		 * @return {void} Success
		 */
		DetachPrincipalPolicy(policyName: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/principal-policies/' + (policyName == null ? '' : encodeURIComponent(policyName)) + '#x-amzn-iot-principal', { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Associates a Device Defender security profile with a thing group or this account. Each thing group or account can have up to five security profiles associated with it.
		 * Put /security-profiles/{securityProfileName}/targets#securityProfileTargetArn
		 * @param {string} securityProfileName The security profile that is attached.
		 * @param {string} securityProfileTargetArn The ARN of the target (thing group) to which the security profile is attached.
		 * @return {AttachSecurityProfileResponse} Success
		 */
		AttachSecurityProfile(securityProfileName: string, securityProfileTargetArn: string, headersHandler?: () => {[header: string]: string}): Promise<AttachSecurityProfileResponse> {
			return fetch(this.baseUri + '/security-profiles/' + (securityProfileName == null ? '' : encodeURIComponent(securityProfileName)) + '/targets#securityProfileTargetArn&securityProfileTargetArn=' + (securityProfileTargetArn == null ? '' : encodeURIComponent(securityProfileTargetArn)), { method: 'put', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Disassociates a Device Defender security profile from a thing group or from this account.
		 * Delete /security-profiles/{securityProfileName}/targets#securityProfileTargetArn
		 * @param {string} securityProfileName The security profile that is detached.
		 * @param {string} securityProfileTargetArn The ARN of the thing group from which the security profile is detached.
		 * @return {DetachSecurityProfileResponse} Success
		 */
		DetachSecurityProfile(securityProfileName: string, securityProfileTargetArn: string, headersHandler?: () => {[header: string]: string}): Promise<DetachSecurityProfileResponse> {
			return fetch(this.baseUri + '/security-profiles/' + (securityProfileName == null ? '' : encodeURIComponent(securityProfileName)) + '/targets#securityProfileTargetArn&securityProfileTargetArn=' + (securityProfileTargetArn == null ? '' : encodeURIComponent(securityProfileTargetArn)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Attaches the specified principal to the specified thing. A principal can be X.509 certificates, IAM users, groups, and roles, Amazon Cognito identities or federated identities.
		 * Put /things/{thingName}/principals#x-amzn-principal
		 * @param {string} thingName The name of the thing.
		 * @return {AttachThingPrincipalResponse} Success
		 */
		AttachThingPrincipal(thingName: string, headersHandler?: () => {[header: string]: string}): Promise<AttachThingPrincipalResponse> {
			return fetch(this.baseUri + '/things/' + (thingName == null ? '' : encodeURIComponent(thingName)) + '/principals#x-amzn-principal', { method: 'put', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * <p>Detaches the specified principal from the specified thing. A principal can be X.509 certificates, IAM users, groups, and roles, Amazon Cognito identities or federated identities.</p> <note> <p>This call is asynchronous. It might take several seconds for the detachment to propagate.</p> </note>
		 * Delete /things/{thingName}/principals#x-amzn-principal
		 * @param {string} thingName The name of the thing.
		 * @return {DetachThingPrincipalResponse} Success
		 */
		DetachThingPrincipal(thingName: string, headersHandler?: () => {[header: string]: string}): Promise<DetachThingPrincipalResponse> {
			return fetch(this.baseUri + '/things/' + (thingName == null ? '' : encodeURIComponent(thingName)) + '/principals#x-amzn-principal', { method: 'delete', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Cancels a mitigation action task that is in progress. If the task is not in progress, an InvalidRequestException occurs.
		 * Put /audit/mitigationactions/tasks/{taskId}/cancel
		 * @param {string} taskId The unique identifier for the task that you want to cancel. 
		 * @return {CancelAuditMitigationActionsTaskResponse} Success
		 */
		CancelAuditMitigationActionsTask(taskId: string, headersHandler?: () => {[header: string]: string}): Promise<CancelAuditMitigationActionsTaskResponse> {
			return fetch(this.baseUri + '/audit/mitigationactions/tasks/' + (taskId == null ? '' : encodeURIComponent(taskId)) + '/cancel', { method: 'put', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Cancels an audit that is in progress. The audit can be either scheduled or on-demand. If the audit is not in progress, an "InvalidRequestException" occurs.
		 * Put /audit/tasks/{taskId}/cancel
		 * @param {string} taskId The ID of the audit you want to cancel. You can only cancel an audit that is "IN_PROGRESS".
		 * @return {CancelAuditTaskResponse} Success
		 */
		CancelAuditTask(taskId: string, headersHandler?: () => {[header: string]: string}): Promise<CancelAuditTaskResponse> {
			return fetch(this.baseUri + '/audit/tasks/' + (taskId == null ? '' : encodeURIComponent(taskId)) + '/cancel', { method: 'put', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Cancels a job.
		 * Put /jobs/{jobId}/cancel
		 * @param {string} jobId The unique identifier you assigned to this job when it was created.
		 * @param {boolean} force <p>(Optional) If <code>true</code> job executions with status "IN_PROGRESS" and "QUEUED" are canceled, otherwise only job executions with status "QUEUED" are canceled. The default is <code>false</code>.</p> <p>Canceling a job which is "IN_PROGRESS", will cause a device which is executing the job to be unable to update the job execution status. Use caution and ensure that each device executing a job which is canceled is able to recover to a valid state.</p>
		 * @return {CancelJobResponse} Success
		 */
		CancelJob(jobId: string, force: boolean, requestBody: CancelJobBody, headersHandler?: () => {[header: string]: string}): Promise<CancelJobResponse> {
			return fetch(this.baseUri + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/cancel&force=' + force, { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Cancels the execution of a job for a given thing.
		 * Put /things/{thingName}/jobs/{jobId}/cancel
		 * @param {string} jobId The ID of the job to be canceled.
		 * @param {string} thingName The name of the thing whose execution of the job will be canceled.
		 * @param {boolean} force <p>(Optional) If <code>true</code> the job execution will be canceled if it has status IN_PROGRESS or QUEUED, otherwise the job execution will be canceled only if it has status QUEUED. If you attempt to cancel a job execution that is IN_PROGRESS, and you do not set <code>force</code> to <code>true</code>, then an <code>InvalidStateTransitionException</code> will be thrown. The default is <code>false</code>.</p> <p>Canceling a job execution which is "IN_PROGRESS", will cause the device to be unable to update the job execution status. Use caution and ensure that the device is able to recover to a valid state.</p>
		 * @return {void} Success
		 */
		CancelJobExecution(jobId: string, thingName: string, force: boolean, requestBody: CancelJobExecutionBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/things/' + (thingName == null ? '' : encodeURIComponent(thingName)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/cancel&force=' + force, { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Clears the default authorizer.
		 * Delete /default-authorizer
		 * @return {ClearDefaultAuthorizerResponse} Success
		 */
		ClearDefaultAuthorizer(headersHandler?: () => {[header: string]: string}): Promise<ClearDefaultAuthorizerResponse> {
			return fetch(this.baseUri + '/default-authorizer', { method: 'delete', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Describes the default authorizer.
		 * Get /default-authorizer
		 * @return {DescribeDefaultAuthorizerResponse} Success
		 */
		DescribeDefaultAuthorizer(headersHandler?: () => {[header: string]: string}): Promise<DescribeDefaultAuthorizerResponse> {
			return fetch(this.baseUri + '/default-authorizer', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Sets the default authorizer. This will be used if a websocket connection is made without specifying an authorizer.
		 * Post /default-authorizer
		 * @return {SetDefaultAuthorizerResponse} Success
		 */
		SetDefaultAuthorizer(requestBody: SetDefaultAuthorizerBody, headersHandler?: () => {[header: string]: string}): Promise<SetDefaultAuthorizerResponse> {
			return fetch(this.baseUri + '/default-authorizer', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Confirms a topic rule destination. When you create a rule requiring a destination, AWS IoT sends a confirmation message to the endpoint or base address you specify. The message includes a token which you pass back when calling <code>ConfirmTopicRuleDestination</code> to confirm that you own or have access to the endpoint.
		 * Get /confirmdestination/{confirmationToken}
		 * @param {string} confirmationToken The token used to confirm ownership or access to the topic rule confirmation URL.
		 * @return {ConfirmTopicRuleDestinationResponse} Success
		 */
		ConfirmTopicRuleDestination(confirmationToken: string, headersHandler?: () => {[header: string]: string}): Promise<ConfirmTopicRuleDestinationResponse> {
			return fetch(this.baseUri + '/confirmdestination/' + (confirmationToken == null ? '' : encodeURIComponent(confirmationToken)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Creates an authorizer.
		 * Post /authorizer/{authorizerName}
		 * @param {string} authorizerName The authorizer name.
		 * @return {CreateAuthorizerResponse} Success
		 */
		CreateAuthorizer(authorizerName: string, requestBody: CreateAuthorizerBody, headersHandler?: () => {[header: string]: string}): Promise<CreateAuthorizerResponse> {
			return fetch(this.baseUri + '/authorizer/' + (authorizerName == null ? '' : encodeURIComponent(authorizerName)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Deletes an authorizer.
		 * Delete /authorizer/{authorizerName}
		 * @param {string} authorizerName The name of the authorizer to delete.
		 * @return {DeleteAuthorizerResponse} Success
		 */
		DeleteAuthorizer(authorizerName: string, headersHandler?: () => {[header: string]: string}): Promise<DeleteAuthorizerResponse> {
			return fetch(this.baseUri + '/authorizer/' + (authorizerName == null ? '' : encodeURIComponent(authorizerName)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Describes an authorizer.
		 * Get /authorizer/{authorizerName}
		 * @param {string} authorizerName The name of the authorizer to describe.
		 * @return {DescribeAuthorizerResponse} Success
		 */
		DescribeAuthorizer(authorizerName: string, headersHandler?: () => {[header: string]: string}): Promise<DescribeAuthorizerResponse> {
			return fetch(this.baseUri + '/authorizer/' + (authorizerName == null ? '' : encodeURIComponent(authorizerName)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Updates an authorizer.
		 * Put /authorizer/{authorizerName}
		 * @param {string} authorizerName The authorizer name.
		 * @return {UpdateAuthorizerResponse} Success
		 */
		UpdateAuthorizer(authorizerName: string, requestBody: UpdateAuthorizerBody, headersHandler?: () => {[header: string]: string}): Promise<UpdateAuthorizerResponse> {
			return fetch(this.baseUri + '/authorizer/' + (authorizerName == null ? '' : encodeURIComponent(authorizerName)), { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Creates a billing group.
		 * Post /billing-groups/{billingGroupName}
		 * @param {string} billingGroupName The name you wish to give to the billing group.
		 * @return {CreateBillingGroupResponse} Success
		 */
		CreateBillingGroup(billingGroupName: string, requestBody: CreateBillingGroupBody, headersHandler?: () => {[header: string]: string}): Promise<CreateBillingGroupResponse> {
			return fetch(this.baseUri + '/billing-groups/' + (billingGroupName == null ? '' : encodeURIComponent(billingGroupName)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Deletes the billing group.
		 * Delete /billing-groups/{billingGroupName}
		 * @param {string} billingGroupName The name of the billing group.
		 * @param {number} expectedVersion The expected version of the billing group. If the version of the billing group does not match the expected version specified in the request, the <code>DeleteBillingGroup</code> request is rejected with a <code>VersionConflictException</code>.
		 * @return {DeleteBillingGroupResponse} Success
		 */
		DeleteBillingGroup(billingGroupName: string, expectedVersion: number, headersHandler?: () => {[header: string]: string}): Promise<DeleteBillingGroupResponse> {
			return fetch(this.baseUri + '/billing-groups/' + (billingGroupName == null ? '' : encodeURIComponent(billingGroupName)) + '&expectedVersion=' + expectedVersion, { method: 'delete', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Returns information about a billing group.
		 * Get /billing-groups/{billingGroupName}
		 * @param {string} billingGroupName The name of the billing group.
		 * @return {DescribeBillingGroupResponse} Success
		 */
		DescribeBillingGroup(billingGroupName: string, headersHandler?: () => {[header: string]: string}): Promise<DescribeBillingGroupResponse> {
			return fetch(this.baseUri + '/billing-groups/' + (billingGroupName == null ? '' : encodeURIComponent(billingGroupName)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * <p>Creates an X.509 certificate using the specified certificate signing request.</p> <p> <b>Note:</b> The CSR must include a public key that is either an RSA key with a length of at least 2048 bits or an ECC key from NIST P-256 or NIST P-384 curves. </p> <p> <b>Note:</b> Reusing the same certificate signing request (CSR) results in a distinct certificate.</p> <p>You can create multiple certificates in a batch by creating a directory, copying multiple .csr files into that directory, and then specifying that directory on the command line. The following commands show how to create a batch of certificates given a batch of CSRs.</p> <p>Assuming a set of CSRs are located inside of the directory my-csr-directory:</p> <p>On Linux and OS X, the command is:</p> <p>$ ls my-csr-directory/ | xargs -I {} aws iot create-certificate-from-csr --certificate-signing-request file://my-csr-directory/{}</p> <p>This command lists all of the CSRs in my-csr-directory and pipes each CSR file name to the aws iot create-certificate-from-csr AWS CLI command to create a certificate for the corresponding CSR.</p> <p>The aws iot create-certificate-from-csr part of the command can also be run in parallel to speed up the certificate creation process:</p> <p>$ ls my-csr-directory/ | xargs -P 10 -I {} aws iot create-certificate-from-csr --certificate-signing-request file://my-csr-directory/{}</p> <p>On Windows PowerShell, the command to create certificates for all CSRs in my-csr-directory is:</p> <p>&gt; ls -Name my-csr-directory | %{aws iot create-certificate-from-csr --certificate-signing-request file://my-csr-directory/$_}</p> <p>On a Windows command prompt, the command to create certificates for all CSRs in my-csr-directory is:</p> <p>&gt; forfiles /p my-csr-directory /c "cmd /c aws iot create-certificate-from-csr --certificate-signing-request file://@path"</p>
		 * Post /certificates
		 * @param {boolean} setAsActive Specifies whether the certificate is active.
		 * @return {CreateCertificateFromCsrResponse} Success
		 */
		CreateCertificateFromCsr(setAsActive: boolean, requestBody: CreateCertificateFromCsrBody, headersHandler?: () => {[header: string]: string}): Promise<CreateCertificateFromCsrResponse> {
			return fetch(this.baseUri + '/certificates?setAsActive=' + setAsActive, { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Lists the certificates registered in your AWS account.</p> <p>The results are paginated with a default page size of 25. You can use the returned marker to retrieve additional results.</p>
		 * Get /certificates
		 * @param {number} pageSize The result page size.
		 * @param {string} marker The marker for the next set of results.
		 * @param {boolean} isAscendingOrder Specifies the order for results. If True, the results are returned in ascending order, based on the creation date.
		 * @return {ListCertificatesResponse} Success
		 */
		ListCertificates(pageSize: number, marker: string, isAscendingOrder: boolean, headersHandler?: () => {[header: string]: string}): Promise<ListCertificatesResponse> {
			return fetch(this.baseUri + '/certificates?pageSize=' + pageSize + '&marker=' + (marker == null ? '' : encodeURIComponent(marker)) + '&isAscendingOrder=' + isAscendingOrder, { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Create a dimension that you can use to limit the scope of a metric used in a security profile for AWS IoT Device Defender. For example, using a <code>TOPIC_FILTER</code> dimension, you can narrow down the scope of the metric only to MQTT topics whose name match the pattern specified in the dimension.
		 * Post /dimensions/{name}
		 * @param {string} name A unique identifier for the dimension. Choose something that describes the type and value to make it easy to remember what it does.
		 * @return {CreateDimensionResponse} Success
		 */
		CreateDimension(name: string, requestBody: CreateDimensionBody, headersHandler?: () => {[header: string]: string}): Promise<CreateDimensionResponse> {
			return fetch(this.baseUri + '/dimensions/' + (name == null ? '' : encodeURIComponent(name)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Removes the specified dimension from your AWS account.
		 * Delete /dimensions/{name}
		 * @param {string} name The unique identifier for the dimension that you want to delete.
		 * @return {DeleteDimensionResponse} Success
		 */
		DeleteDimension(name: string, headersHandler?: () => {[header: string]: string}): Promise<DeleteDimensionResponse> {
			return fetch(this.baseUri + '/dimensions/' + (name == null ? '' : encodeURIComponent(name)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Provides details about a dimension that is defined in your AWS account.
		 * Get /dimensions/{name}
		 * @param {string} name The unique identifier for the dimension.
		 * @return {DescribeDimensionResponse} Success
		 */
		DescribeDimension(name: string, headersHandler?: () => {[header: string]: string}): Promise<DescribeDimensionResponse> {
			return fetch(this.baseUri + '/dimensions/' + (name == null ? '' : encodeURIComponent(name)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * <p>Creates a domain configuration.</p> <note> <p>The domain configuration feature is in public preview and is subject to change.</p> </note>
		 * Post /domainConfigurations/{domainConfigurationName}
		 * @param {string} domainConfigurationName The name of the domain configuration. This value must be unique to a region.
		 * @return {CreateDomainConfigurationResponse} Success
		 */
		CreateDomainConfiguration(domainConfigurationName: string, requestBody: CreateDomainConfigurationBody, headersHandler?: () => {[header: string]: string}): Promise<CreateDomainConfigurationResponse> {
			return fetch(this.baseUri + '/domainConfigurations/' + (domainConfigurationName == null ? '' : encodeURIComponent(domainConfigurationName)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Deletes the specified domain configuration.</p> <note> <p>The domain configuration feature is in public preview and is subject to change.</p> </note>
		 * Delete /domainConfigurations/{domainConfigurationName}
		 * @param {string} domainConfigurationName The name of the domain configuration to be deleted.
		 * @return {DeleteDomainConfigurationResponse} Success
		 */
		DeleteDomainConfiguration(domainConfigurationName: string, headersHandler?: () => {[header: string]: string}): Promise<DeleteDomainConfigurationResponse> {
			return fetch(this.baseUri + '/domainConfigurations/' + (domainConfigurationName == null ? '' : encodeURIComponent(domainConfigurationName)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * <p>Gets summary information about a domain configuration.</p> <note> <p>The domain configuration feature is in public preview and is subject to change.</p> </note>
		 * Get /domainConfigurations/{domainConfigurationName}
		 * @param {string} domainConfigurationName The name of the domain configuration.
		 * @return {DescribeDomainConfigurationResponse} Success
		 */
		DescribeDomainConfiguration(domainConfigurationName: string, headersHandler?: () => {[header: string]: string}): Promise<DescribeDomainConfigurationResponse> {
			return fetch(this.baseUri + '/domainConfigurations/' + (domainConfigurationName == null ? '' : encodeURIComponent(domainConfigurationName)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * <p>Updates values stored in the domain configuration. Domain configurations for default endpoints can't be updated.</p> <note> <p>The domain configuration feature is in public preview and is subject to change.</p> </note>
		 * Put /domainConfigurations/{domainConfigurationName}
		 * @param {string} domainConfigurationName The name of the domain configuration to be updated.
		 * @return {UpdateDomainConfigurationResponse} Success
		 */
		UpdateDomainConfiguration(domainConfigurationName: string, requestBody: UpdateDomainConfigurationBody, headersHandler?: () => {[header: string]: string}): Promise<UpdateDomainConfigurationResponse> {
			return fetch(this.baseUri + '/domainConfigurations/' + (domainConfigurationName == null ? '' : encodeURIComponent(domainConfigurationName)), { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Creates a dynamic thing group.
		 * Post /dynamic-thing-groups/{thingGroupName}
		 * @param {string} thingGroupName The dynamic thing group name to create.
		 * @return {CreateDynamicThingGroupResponse} Success
		 */
		CreateDynamicThingGroup(thingGroupName: string, requestBody: CreateDynamicThingGroupBody, headersHandler?: () => {[header: string]: string}): Promise<CreateDynamicThingGroupResponse> {
			return fetch(this.baseUri + '/dynamic-thing-groups/' + (thingGroupName == null ? '' : encodeURIComponent(thingGroupName)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Deletes a dynamic thing group.
		 * Delete /dynamic-thing-groups/{thingGroupName}
		 * @param {string} thingGroupName The name of the dynamic thing group to delete.
		 * @param {number} expectedVersion The expected version of the dynamic thing group to delete.
		 * @return {DeleteDynamicThingGroupResponse} Success
		 */
		DeleteDynamicThingGroup(thingGroupName: string, expectedVersion: number, headersHandler?: () => {[header: string]: string}): Promise<DeleteDynamicThingGroupResponse> {
			return fetch(this.baseUri + '/dynamic-thing-groups/' + (thingGroupName == null ? '' : encodeURIComponent(thingGroupName)) + '&expectedVersion=' + expectedVersion, { method: 'delete', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Creates a job.
		 * Put /jobs/{jobId}
		 * @param {string} jobId A job identifier which must be unique for your AWS account. We recommend using a UUID. Alpha-numeric characters, "-" and "_" are valid for use here.
		 * @return {CreateJobResponse} Success
		 */
		CreateJob(jobId: string, requestBody: CreateJobBody, headersHandler?: () => {[header: string]: string}): Promise<CreateJobResponse> {
			return fetch(this.baseUri + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)), { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Deletes a job and its related job executions.</p> <p>Deleting a job may take time, depending on the number of job executions created for the job and various other factors. While the job is being deleted, the status of the job will be shown as "DELETION_IN_PROGRESS". Attempting to delete or cancel a job whose status is already "DELETION_IN_PROGRESS" will result in an error.</p> <p>Only 10 jobs may have status "DELETION_IN_PROGRESS" at the same time, or a LimitExceededException will occur.</p>
		 * Delete /jobs/{jobId}
		 * @param {string} jobId <p>The ID of the job to be deleted.</p> <p>After a job deletion is completed, you may reuse this jobId when you create a new job. However, this is not recommended, and you must ensure that your devices are not using the jobId to refer to the deleted job.</p>
		 * @param {boolean} force <p>(Optional) When true, you can delete a job which is "IN_PROGRESS". Otherwise, you can only delete a job which is in a terminal state ("COMPLETED" or "CANCELED") or an exception will occur. The default is false.</p> <note> <p>Deleting a job which is "IN_PROGRESS", will cause a device which is executing the job to be unable to access job information or update the job execution status. Use caution and ensure that each device executing a job which is deleted is able to recover to a valid state.</p> </note>
		 * @return {void} Success
		 */
		DeleteJob(jobId: string, force: boolean, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '&force=' + force, { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Describes a job.
		 * Get /jobs/{jobId}
		 * @param {string} jobId The unique identifier you assigned to this job when it was created.
		 * @return {DescribeJobResponse} Success
		 */
		DescribeJob(jobId: string, headersHandler?: () => {[header: string]: string}): Promise<DescribeJobResponse> {
			return fetch(this.baseUri + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * <p>Creates a 2048-bit RSA key pair and issues an X.509 certificate using the issued public key. You can also call <code>CreateKeysAndCertificate</code> over MQTT from a device, for more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/provision-wo-cert.html#provision-mqtt-api">Provisioning MQTT API</a>.</p> <p> <b>Note</b> This is the only time AWS IoT issues the private key for this certificate, so it is important to keep it in a secure location.</p>
		 * Post /keys-and-certificate
		 * @param {boolean} setAsActive Specifies whether the certificate is active.
		 * @return {CreateKeysAndCertificateResponse} Success
		 */
		CreateKeysAndCertificate(setAsActive: boolean, headersHandler?: () => {[header: string]: string}): Promise<CreateKeysAndCertificateResponse> {
			return fetch(this.baseUri + '/keys-and-certificate?setAsActive=' + setAsActive, { method: 'post', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Defines an action that can be applied to audit findings by using StartAuditMitigationActionsTask. Each mitigation action can apply only one type of change.
		 * Post /mitigationactions/actions/{actionName}
		 * @param {string} actionName A friendly name for the action. Choose a friendly name that accurately describes the action (for example, <code>EnableLoggingAction</code>).
		 * @return {CreateMitigationActionResponse} Success
		 */
		CreateMitigationAction(actionName: string, requestBody: CreateMitigationActionBody, headersHandler?: () => {[header: string]: string}): Promise<CreateMitigationActionResponse> {
			return fetch(this.baseUri + '/mitigationactions/actions/' + (actionName == null ? '' : encodeURIComponent(actionName)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Deletes a defined mitigation action from your AWS account.
		 * Delete /mitigationactions/actions/{actionName}
		 * @param {string} actionName The name of the mitigation action that you want to delete.
		 * @return {DeleteMitigationActionResponse} Success
		 */
		DeleteMitigationAction(actionName: string, headersHandler?: () => {[header: string]: string}): Promise<DeleteMitigationActionResponse> {
			return fetch(this.baseUri + '/mitigationactions/actions/' + (actionName == null ? '' : encodeURIComponent(actionName)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Gets information about a mitigation action.
		 * Get /mitigationactions/actions/{actionName}
		 * @param {string} actionName The friendly name that uniquely identifies the mitigation action.
		 * @return {DescribeMitigationActionResponse} Success
		 */
		DescribeMitigationAction(actionName: string, headersHandler?: () => {[header: string]: string}): Promise<DescribeMitigationActionResponse> {
			return fetch(this.baseUri + '/mitigationactions/actions/' + (actionName == null ? '' : encodeURIComponent(actionName)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Creates an AWS IoT OTAUpdate on a target group of things or groups.
		 * Post /otaUpdates/{otaUpdateId}
		 * @param {string} otaUpdateId The ID of the OTA update to be created.
		 * @return {CreateOTAUpdateResponse} Success
		 */
		CreateOTAUpdate(otaUpdateId: string, requestBody: CreateOTAUpdateBody, headersHandler?: () => {[header: string]: string}): Promise<CreateOTAUpdateResponse> {
			return fetch(this.baseUri + '/otaUpdates/' + (otaUpdateId == null ? '' : encodeURIComponent(otaUpdateId)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Delete an OTA update.
		 * Delete /otaUpdates/{otaUpdateId}
		 * @param {string} otaUpdateId The OTA update ID to delete.
		 * @param {boolean} deleteStream Specifies if the stream associated with an OTA update should be deleted when the OTA update is deleted.
		 * @param {boolean} forceDeleteAWSJob Specifies if the AWS Job associated with the OTA update should be deleted with the OTA update is deleted.
		 * @return {DeleteOTAUpdateResponse} Success
		 */
		DeleteOTAUpdate(otaUpdateId: string, deleteStream: boolean, forceDeleteAWSJob: boolean, headersHandler?: () => {[header: string]: string}): Promise<DeleteOTAUpdateResponse> {
			return fetch(this.baseUri + '/otaUpdates/' + (otaUpdateId == null ? '' : encodeURIComponent(otaUpdateId)) + '&deleteStream=' + deleteStream + '&forceDeleteAWSJob=' + forceDeleteAWSJob, { method: 'delete', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Gets an OTA update.
		 * Get /otaUpdates/{otaUpdateId}
		 * @param {string} otaUpdateId The OTA update ID.
		 * @return {GetOTAUpdateResponse} Success
		 */
		GetOTAUpdate(otaUpdateId: string, headersHandler?: () => {[header: string]: string}): Promise<GetOTAUpdateResponse> {
			return fetch(this.baseUri + '/otaUpdates/' + (otaUpdateId == null ? '' : encodeURIComponent(otaUpdateId)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * <p>Creates an AWS IoT policy.</p> <p>The created policy is the default version for the policy. This operation creates a policy version with a version identifier of <b>1</b> and sets <b>1</b> as the policy's default version.</p>
		 * Post /policies/{policyName}
		 * @param {string} policyName The policy name.
		 * @return {CreatePolicyResponse} Success
		 */
		CreatePolicy(policyName: string, requestBody: CreatePolicyBody, headersHandler?: () => {[header: string]: string}): Promise<CreatePolicyResponse> {
			return fetch(this.baseUri + '/policies/' + (policyName == null ? '' : encodeURIComponent(policyName)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Deletes the specified policy.</p> <p>A policy cannot be deleted if it has non-default versions or it is attached to any certificate.</p> <p>To delete a policy, use the DeletePolicyVersion API to delete all non-default versions of the policy; use the DetachPrincipalPolicy API to detach the policy from any certificate; and then use the DeletePolicy API to delete the policy.</p> <p>When a policy is deleted using DeletePolicy, its default version is deleted with it.</p>
		 * Delete /policies/{policyName}
		 * @param {string} policyName The name of the policy to delete.
		 * @return {void} Success
		 */
		DeletePolicy(policyName: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/policies/' + (policyName == null ? '' : encodeURIComponent(policyName)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets information about the specified policy with the policy document of the default version.
		 * Get /policies/{policyName}
		 * @param {string} policyName The name of the policy.
		 * @return {GetPolicyResponse} Success
		 */
		GetPolicy(policyName: string, headersHandler?: () => {[header: string]: string}): Promise<GetPolicyResponse> {
			return fetch(this.baseUri + '/policies/' + (policyName == null ? '' : encodeURIComponent(policyName)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * <p>Creates a new version of the specified AWS IoT policy. To update a policy, create a new policy version. A managed policy can have up to five versions. If the policy has five versions, you must use <a>DeletePolicyVersion</a> to delete an existing version before you create a new one.</p> <p>Optionally, you can set the new version as the policy's default version. The default version is the operative version (that is, the version that is in effect for the certificates to which the policy is attached).</p>
		 * Post /policies/{policyName}/version
		 * @param {string} policyName The policy name.
		 * @param {boolean} setAsDefault Specifies whether the policy version is set as the default. When this parameter is true, the new policy version becomes the operative version (that is, the version that is in effect for the certificates to which the policy is attached).
		 * @return {CreatePolicyVersionResponse} Success
		 */
		CreatePolicyVersion(policyName: string, setAsDefault: boolean, requestBody: CreatePolicyVersionBody, headersHandler?: () => {[header: string]: string}): Promise<CreatePolicyVersionResponse> {
			return fetch(this.baseUri + '/policies/' + (policyName == null ? '' : encodeURIComponent(policyName)) + '/version&setAsDefault=' + setAsDefault, { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Lists the versions of the specified policy and identifies the default version.
		 * Get /policies/{policyName}/version
		 * @param {string} policyName The policy name.
		 * @return {ListPolicyVersionsResponse} Success
		 */
		ListPolicyVersions(policyName: string, headersHandler?: () => {[header: string]: string}): Promise<ListPolicyVersionsResponse> {
			return fetch(this.baseUri + '/policies/' + (policyName == null ? '' : encodeURIComponent(policyName)) + '/version', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Creates a provisioning claim.
		 * Post /provisioning-templates/{templateName}/provisioning-claim
		 * @param {string} templateName The name of the provisioning template to use.
		 * @return {CreateProvisioningClaimResponse} Success
		 */
		CreateProvisioningClaim(templateName: string, headersHandler?: () => {[header: string]: string}): Promise<CreateProvisioningClaimResponse> {
			return fetch(this.baseUri + '/provisioning-templates/' + (templateName == null ? '' : encodeURIComponent(templateName)) + '/provisioning-claim', { method: 'post', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Creates a fleet provisioning template.
		 * Post /provisioning-templates
		 * @return {CreateProvisioningTemplateResponse} Success
		 */
		CreateProvisioningTemplate(requestBody: CreateProvisioningTemplateBody, headersHandler?: () => {[header: string]: string}): Promise<CreateProvisioningTemplateResponse> {
			return fetch(this.baseUri + '/provisioning-templates', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Lists the fleet provisioning templates in your AWS account.
		 * Get /provisioning-templates
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @param {string} nextToken A token to retrieve the next set of results.
		 * @return {ListProvisioningTemplatesResponse} Success
		 */
		ListProvisioningTemplates(maxResults: number, nextToken: string, headersHandler?: () => {[header: string]: string}): Promise<ListProvisioningTemplatesResponse> {
			return fetch(this.baseUri + '/provisioning-templates?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Creates a new version of a fleet provisioning template.
		 * Post /provisioning-templates/{templateName}/versions
		 * @param {string} templateName The name of the fleet provisioning template.
		 * @param {boolean} setAsDefault Sets a fleet provision template version as the default version.
		 * @return {CreateProvisioningTemplateVersionResponse} Success
		 */
		CreateProvisioningTemplateVersion(templateName: string, setAsDefault: boolean, requestBody: CreateProvisioningTemplateVersionBody, headersHandler?: () => {[header: string]: string}): Promise<CreateProvisioningTemplateVersionResponse> {
			return fetch(this.baseUri + '/provisioning-templates/' + (templateName == null ? '' : encodeURIComponent(templateName)) + '/versions&setAsDefault=' + setAsDefault, { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * A list of fleet provisioning template versions.
		 * Get /provisioning-templates/{templateName}/versions
		 * @param {string} templateName The name of the fleet provisioning template.
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @param {string} nextToken A token to retrieve the next set of results.
		 * @return {ListProvisioningTemplateVersionsResponse} Success
		 */
		ListProvisioningTemplateVersions(templateName: string, maxResults: number, nextToken: string, headersHandler?: () => {[header: string]: string}): Promise<ListProvisioningTemplateVersionsResponse> {
			return fetch(this.baseUri + '/provisioning-templates/' + (templateName == null ? '' : encodeURIComponent(templateName)) + '/versions&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Creates a role alias.
		 * Post /role-aliases/{roleAlias}
		 * @param {string} roleAlias The role alias that points to a role ARN. This allows you to change the role without having to update the device.
		 * @return {CreateRoleAliasResponse} Success
		 */
		CreateRoleAlias(roleAlias: string, requestBody: CreateRoleAliasBody, headersHandler?: () => {[header: string]: string}): Promise<CreateRoleAliasResponse> {
			return fetch(this.baseUri + '/role-aliases/' + (roleAlias == null ? '' : encodeURIComponent(roleAlias)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Deletes a role alias
		 * Delete /role-aliases/{roleAlias}
		 * @param {string} roleAlias The role alias to delete.
		 * @return {DeleteRoleAliasResponse} Success
		 */
		DeleteRoleAlias(roleAlias: string, headersHandler?: () => {[header: string]: string}): Promise<DeleteRoleAliasResponse> {
			return fetch(this.baseUri + '/role-aliases/' + (roleAlias == null ? '' : encodeURIComponent(roleAlias)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Describes a role alias.
		 * Get /role-aliases/{roleAlias}
		 * @param {string} roleAlias The role alias to describe.
		 * @return {DescribeRoleAliasResponse} Success
		 */
		DescribeRoleAlias(roleAlias: string, headersHandler?: () => {[header: string]: string}): Promise<DescribeRoleAliasResponse> {
			return fetch(this.baseUri + '/role-aliases/' + (roleAlias == null ? '' : encodeURIComponent(roleAlias)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Updates a role alias.
		 * Put /role-aliases/{roleAlias}
		 * @param {string} roleAlias The role alias to update.
		 * @return {UpdateRoleAliasResponse} Success
		 */
		UpdateRoleAlias(roleAlias: string, requestBody: UpdateRoleAliasBody, headersHandler?: () => {[header: string]: string}): Promise<UpdateRoleAliasResponse> {
			return fetch(this.baseUri + '/role-aliases/' + (roleAlias == null ? '' : encodeURIComponent(roleAlias)), { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Creates a scheduled audit that is run at a specified time interval.
		 * Post /audit/scheduledaudits/{scheduledAuditName}
		 * @param {string} scheduledAuditName The name you want to give to the scheduled audit. (Max. 128 chars)
		 * @return {CreateScheduledAuditResponse} Success
		 */
		CreateScheduledAudit(scheduledAuditName: string, requestBody: CreateScheduledAuditBody, headersHandler?: () => {[header: string]: string}): Promise<CreateScheduledAuditResponse> {
			return fetch(this.baseUri + '/audit/scheduledaudits/' + (scheduledAuditName == null ? '' : encodeURIComponent(scheduledAuditName)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Deletes a scheduled audit.
		 * Delete /audit/scheduledaudits/{scheduledAuditName}
		 * @param {string} scheduledAuditName The name of the scheduled audit you want to delete.
		 * @return {DeleteScheduledAuditResponse} Success
		 */
		DeleteScheduledAudit(scheduledAuditName: string, headersHandler?: () => {[header: string]: string}): Promise<DeleteScheduledAuditResponse> {
			return fetch(this.baseUri + '/audit/scheduledaudits/' + (scheduledAuditName == null ? '' : encodeURIComponent(scheduledAuditName)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Gets information about a scheduled audit.
		 * Get /audit/scheduledaudits/{scheduledAuditName}
		 * @param {string} scheduledAuditName The name of the scheduled audit whose information you want to get.
		 * @return {DescribeScheduledAuditResponse} Success
		 */
		DescribeScheduledAudit(scheduledAuditName: string, headersHandler?: () => {[header: string]: string}): Promise<DescribeScheduledAuditResponse> {
			return fetch(this.baseUri + '/audit/scheduledaudits/' + (scheduledAuditName == null ? '' : encodeURIComponent(scheduledAuditName)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Creates a Device Defender security profile.
		 * Post /security-profiles/{securityProfileName}
		 * @param {string} securityProfileName The name you are giving to the security profile.
		 * @return {CreateSecurityProfileResponse} Success
		 */
		CreateSecurityProfile(securityProfileName: string, requestBody: CreateSecurityProfileBody, headersHandler?: () => {[header: string]: string}): Promise<CreateSecurityProfileResponse> {
			return fetch(this.baseUri + '/security-profiles/' + (securityProfileName == null ? '' : encodeURIComponent(securityProfileName)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Deletes a Device Defender security profile.
		 * Delete /security-profiles/{securityProfileName}
		 * @param {string} securityProfileName The name of the security profile to be deleted.
		 * @param {number} expectedVersion The expected version of the security profile. A new version is generated whenever the security profile is updated. If you specify a value that is different from the actual version, a <code>VersionConflictException</code> is thrown.
		 * @return {DeleteSecurityProfileResponse} Success
		 */
		DeleteSecurityProfile(securityProfileName: string, expectedVersion: number, headersHandler?: () => {[header: string]: string}): Promise<DeleteSecurityProfileResponse> {
			return fetch(this.baseUri + '/security-profiles/' + (securityProfileName == null ? '' : encodeURIComponent(securityProfileName)) + '&expectedVersion=' + expectedVersion, { method: 'delete', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Gets information about a Device Defender security profile.
		 * Get /security-profiles/{securityProfileName}
		 * @param {string} securityProfileName The name of the security profile whose information you want to get.
		 * @return {DescribeSecurityProfileResponse} Success
		 */
		DescribeSecurityProfile(securityProfileName: string, headersHandler?: () => {[header: string]: string}): Promise<DescribeSecurityProfileResponse> {
			return fetch(this.baseUri + '/security-profiles/' + (securityProfileName == null ? '' : encodeURIComponent(securityProfileName)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Creates a stream for delivering one or more large files in chunks over MQTT. A stream transports data bytes in chunks or blocks packaged as MQTT messages from a source like S3. You can have one or more files associated with a stream.
		 * Post /streams/{streamId}
		 * @param {string} streamId The stream ID.
		 * @return {CreateStreamResponse} Success
		 */
		CreateStream(streamId: string, requestBody: CreateStreamBody, headersHandler?: () => {[header: string]: string}): Promise<CreateStreamResponse> {
			return fetch(this.baseUri + '/streams/' + (streamId == null ? '' : encodeURIComponent(streamId)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Deletes a stream.
		 * Delete /streams/{streamId}
		 * @param {string} streamId The stream ID.
		 * @return {DeleteStreamResponse} Success
		 */
		DeleteStream(streamId: string, headersHandler?: () => {[header: string]: string}): Promise<DeleteStreamResponse> {
			return fetch(this.baseUri + '/streams/' + (streamId == null ? '' : encodeURIComponent(streamId)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Gets information about a stream.
		 * Get /streams/{streamId}
		 * @param {string} streamId The stream ID.
		 * @return {DescribeStreamResponse} Success
		 */
		DescribeStream(streamId: string, headersHandler?: () => {[header: string]: string}): Promise<DescribeStreamResponse> {
			return fetch(this.baseUri + '/streams/' + (streamId == null ? '' : encodeURIComponent(streamId)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Updates an existing stream. The stream version will be incremented by one.
		 * Put /streams/{streamId}
		 * @param {string} streamId The stream ID.
		 * @return {UpdateStreamResponse} Success
		 */
		UpdateStream(streamId: string, requestBody: UpdateStreamBody, headersHandler?: () => {[header: string]: string}): Promise<UpdateStreamResponse> {
			return fetch(this.baseUri + '/streams/' + (streamId == null ? '' : encodeURIComponent(streamId)), { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Creates a thing record in the registry. If this call is made multiple times using the same thing name and configuration, the call will succeed. If this call is made with the same thing name but different configuration a <code>ResourceAlreadyExistsException</code> is thrown.</p> <note> <p>This is a control plane operation. See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/iot-authorization.html">Authorization</a> for information about authorizing control plane actions.</p> </note>
		 * Post /things/{thingName}
		 * @param {string} thingName <p>The name of the thing to create.</p> <p>You can't change a thing's name after you create it. To change a thing's name, you must create a new thing, give it the new name, and then delete the old thing.</p>
		 * @return {CreateThingResponse} Success
		 */
		CreateThing(thingName: string, requestBody: CreateThingBody, headersHandler?: () => {[header: string]: string}): Promise<CreateThingResponse> {
			return fetch(this.baseUri + '/things/' + (thingName == null ? '' : encodeURIComponent(thingName)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Deletes the specified thing. Returns successfully with no error if the deletion is successful or you specify a thing that doesn't exist.
		 * Delete /things/{thingName}
		 * @param {string} thingName The name of the thing to delete.
		 * @param {number} expectedVersion The expected version of the thing record in the registry. If the version of the record in the registry does not match the expected version specified in the request, the <code>DeleteThing</code> request is rejected with a <code>VersionConflictException</code>.
		 * @return {DeleteThingResponse} Success
		 */
		DeleteThing(thingName: string, expectedVersion: number, headersHandler?: () => {[header: string]: string}): Promise<DeleteThingResponse> {
			return fetch(this.baseUri + '/things/' + (thingName == null ? '' : encodeURIComponent(thingName)) + '&expectedVersion=' + expectedVersion, { method: 'delete', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Gets information about the specified thing.
		 * Get /things/{thingName}
		 * @param {string} thingName The name of the thing.
		 * @return {DescribeThingResponse} Success
		 */
		DescribeThing(thingName: string, headersHandler?: () => {[header: string]: string}): Promise<DescribeThingResponse> {
			return fetch(this.baseUri + '/things/' + (thingName == null ? '' : encodeURIComponent(thingName)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * <p>Create a thing group.</p> <note> <p>This is a control plane operation. See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/iot-authorization.html">Authorization</a> for information about authorizing control plane actions.</p> </note>
		 * Post /thing-groups/{thingGroupName}
		 * @param {string} thingGroupName The thing group name to create.
		 * @return {CreateThingGroupResponse} Success
		 */
		CreateThingGroup(thingGroupName: string, requestBody: CreateThingGroupBody, headersHandler?: () => {[header: string]: string}): Promise<CreateThingGroupResponse> {
			return fetch(this.baseUri + '/thing-groups/' + (thingGroupName == null ? '' : encodeURIComponent(thingGroupName)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Deletes a thing group.
		 * Delete /thing-groups/{thingGroupName}
		 * @param {string} thingGroupName The name of the thing group to delete.
		 * @param {number} expectedVersion The expected version of the thing group to delete.
		 * @return {DeleteThingGroupResponse} Success
		 */
		DeleteThingGroup(thingGroupName: string, expectedVersion: number, headersHandler?: () => {[header: string]: string}): Promise<DeleteThingGroupResponse> {
			return fetch(this.baseUri + '/thing-groups/' + (thingGroupName == null ? '' : encodeURIComponent(thingGroupName)) + '&expectedVersion=' + expectedVersion, { method: 'delete', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Describe a thing group.
		 * Get /thing-groups/{thingGroupName}
		 * @param {string} thingGroupName The name of the thing group.
		 * @return {DescribeThingGroupResponse} Success
		 */
		DescribeThingGroup(thingGroupName: string, headersHandler?: () => {[header: string]: string}): Promise<DescribeThingGroupResponse> {
			return fetch(this.baseUri + '/thing-groups/' + (thingGroupName == null ? '' : encodeURIComponent(thingGroupName)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Creates a new thing type.
		 * Post /thing-types/{thingTypeName}
		 * @param {string} thingTypeName The name of the thing type.
		 * @return {CreateThingTypeResponse} Success
		 */
		CreateThingType(thingTypeName: string, requestBody: CreateThingTypeBody, headersHandler?: () => {[header: string]: string}): Promise<CreateThingTypeResponse> {
			return fetch(this.baseUri + '/thing-types/' + (thingTypeName == null ? '' : encodeURIComponent(thingTypeName)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Deletes the specified thing type. You cannot delete a thing type if it has things associated with it. To delete a thing type, first mark it as deprecated by calling <a>DeprecateThingType</a>, then remove any associated things by calling <a>UpdateThing</a> to change the thing type on any associated thing, and finally use <a>DeleteThingType</a> to delete the thing type.
		 * Delete /thing-types/{thingTypeName}
		 * @param {string} thingTypeName The name of the thing type.
		 * @return {DeleteThingTypeResponse} Success
		 */
		DeleteThingType(thingTypeName: string, headersHandler?: () => {[header: string]: string}): Promise<DeleteThingTypeResponse> {
			return fetch(this.baseUri + '/thing-types/' + (thingTypeName == null ? '' : encodeURIComponent(thingTypeName)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Gets information about the specified thing type.
		 * Get /thing-types/{thingTypeName}
		 * @param {string} thingTypeName The name of the thing type.
		 * @return {DescribeThingTypeResponse} Success
		 */
		DescribeThingType(thingTypeName: string, headersHandler?: () => {[header: string]: string}): Promise<DescribeThingTypeResponse> {
			return fetch(this.baseUri + '/thing-types/' + (thingTypeName == null ? '' : encodeURIComponent(thingTypeName)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Creates a rule. Creating rules is an administrator-level action. Any user who has permission to create rules will be able to access data processed by the rule.
		 * Post /rules/{ruleName}
		 * @param {string} ruleName The name of the rule.
		 * @return {void} Success
		 */
		CreateTopicRule(ruleName: string, requestBody: CreateTopicRuleBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/rules/' + (ruleName == null ? '' : encodeURIComponent(ruleName)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Deletes the rule.
		 * Delete /rules/{ruleName}
		 * @param {string} ruleName The name of the rule.
		 * @return {void} Success
		 */
		DeleteTopicRule(ruleName: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/rules/' + (ruleName == null ? '' : encodeURIComponent(ruleName)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets information about the rule.
		 * Get /rules/{ruleName}
		 * @param {string} ruleName The name of the rule.
		 * @return {GetTopicRuleResponse} Success
		 */
		GetTopicRule(ruleName: string, headersHandler?: () => {[header: string]: string}): Promise<GetTopicRuleResponse> {
			return fetch(this.baseUri + '/rules/' + (ruleName == null ? '' : encodeURIComponent(ruleName)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Creates a topic rule destination. The destination must be confirmed prior to use.
		 * Post /destinations
		 * @return {CreateTopicRuleDestinationResponse} Success
		 */
		CreateTopicRuleDestination(requestBody: CreateTopicRuleDestinationBody, headersHandler?: () => {[header: string]: string}): Promise<CreateTopicRuleDestinationResponse> {
			return fetch(this.baseUri + '/destinations', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Lists all the topic rule destinations in your AWS account.
		 * Get /destinations
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @param {string} nextToken The token to retrieve the next set of results.
		 * @return {ListTopicRuleDestinationsResponse} Success
		 */
		ListTopicRuleDestinations(maxResults: number, nextToken: string, headersHandler?: () => {[header: string]: string}): Promise<ListTopicRuleDestinationsResponse> {
			return fetch(this.baseUri + '/destinations?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Restores the default settings for Device Defender audits for this account. Any configuration data you entered is deleted and all audit checks are reset to disabled.
		 * Delete /audit/configuration
		 * @param {boolean} deleteScheduledAudits If true, all scheduled audits are deleted.
		 * @return {DeleteAccountAuditConfigurationResponse} Success
		 */
		DeleteAccountAuditConfiguration(deleteScheduledAudits: boolean, headersHandler?: () => {[header: string]: string}): Promise<DeleteAccountAuditConfigurationResponse> {
			return fetch(this.baseUri + '/audit/configuration?deleteScheduledAudits=' + deleteScheduledAudits, { method: 'delete', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Gets information about the Device Defender audit settings for this account. Settings include how audit notifications are sent and which audit checks are enabled or disabled.
		 * Get /audit/configuration
		 * @return {DescribeAccountAuditConfigurationResponse} Success
		 */
		DescribeAccountAuditConfiguration(headersHandler?: () => {[header: string]: string}): Promise<DescribeAccountAuditConfigurationResponse> {
			return fetch(this.baseUri + '/audit/configuration', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Deletes a registered CA certificate.
		 * Delete /cacertificate/{caCertificateId}
		 * @param {string} caCertificateId The ID of the certificate to delete. (The last part of the certificate ARN contains the certificate ID.)
		 * @return {DeleteCACertificateResponse} Success
		 */
		DeleteCACertificate(caCertificateId: string, headersHandler?: () => {[header: string]: string}): Promise<DeleteCACertificateResponse> {
			return fetch(this.baseUri + '/cacertificate/' + (caCertificateId == null ? '' : encodeURIComponent(caCertificateId)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Describes a registered CA certificate.
		 * Get /cacertificate/{caCertificateId}
		 * @param {string} caCertificateId The CA certificate identifier.
		 * @return {DescribeCACertificateResponse} Success
		 */
		DescribeCACertificate(caCertificateId: string, headersHandler?: () => {[header: string]: string}): Promise<DescribeCACertificateResponse> {
			return fetch(this.baseUri + '/cacertificate/' + (caCertificateId == null ? '' : encodeURIComponent(caCertificateId)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Updates a registered CA certificate.
		 * Put /cacertificate/{caCertificateId}
		 * @param {string} caCertificateId The CA certificate identifier.
		 * @param {AuthorizerStatus} newStatus <p>The updated status of the CA certificate.</p> <p> <b>Note:</b> The status value REGISTER_INACTIVE is deprecated and should not be used.</p>
		 * @param {AutoRegistrationStatus} newAutoRegistrationStatus The new value for the auto registration status. Valid values are: "ENABLE" or "DISABLE".
		 * @return {void} Success
		 */
		UpdateCACertificate(caCertificateId: string, newStatus: AuthorizerStatus, newAutoRegistrationStatus: AutoRegistrationStatus, requestBody: UpdateCACertificateBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/cacertificate/' + (caCertificateId == null ? '' : encodeURIComponent(caCertificateId)) + '&newStatus=' + newStatus + '&newAutoRegistrationStatus=' + newAutoRegistrationStatus, { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * <p>Deletes the specified certificate.</p> <p>A certificate cannot be deleted if it has a policy or IoT thing attached to it or if its status is set to ACTIVE. To delete a certificate, first use the <a>DetachPrincipalPolicy</a> API to detach all policies. Next, use the <a>UpdateCertificate</a> API to set the certificate to the INACTIVE status.</p>
		 * Delete /certificates/{certificateId}
		 * @param {string} certificateId The ID of the certificate. (The last part of the certificate ARN contains the certificate ID.)
		 * @param {boolean} forceDelete Forces the deletion of a certificate if it is inactive and is not attached to an IoT thing.
		 * @return {void} Success
		 */
		DeleteCertificate(certificateId: string, forceDelete: boolean, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/certificates/' + (certificateId == null ? '' : encodeURIComponent(certificateId)) + '&forceDelete=' + forceDelete, { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets information about the specified certificate.
		 * Get /certificates/{certificateId}
		 * @param {string} certificateId The ID of the certificate. (The last part of the certificate ARN contains the certificate ID.)
		 * @return {DescribeCertificateResponse} Success
		 */
		DescribeCertificate(certificateId: string, headersHandler?: () => {[header: string]: string}): Promise<DescribeCertificateResponse> {
			return fetch(this.baseUri + '/certificates/' + (certificateId == null ? '' : encodeURIComponent(certificateId)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Deletes a job execution.
		 * Delete /things/{thingName}/jobs/{jobId}/executionNumber/{executionNumber}
		 * @param {string} jobId The ID of the job whose execution on a particular device will be deleted.
		 * @param {string} thingName The name of the thing whose job execution will be deleted.
		 * @param {number} executionNumber <p>The ID of the job execution to be deleted. The <code>executionNumber</code> refers to the execution of a particular job on a particular device.</p> <p>Note that once a job execution is deleted, the <code>executionNumber</code> may be reused by IoT, so be sure you get and use the correct value here.</p>
		 * @param {boolean} force <p>(Optional) When true, you can delete a job execution which is "IN_PROGRESS". Otherwise, you can only delete a job execution which is in a terminal state ("SUCCEEDED", "FAILED", "REJECTED", "REMOVED" or "CANCELED") or an exception will occur. The default is false.</p> <note> <p>Deleting a job execution which is "IN_PROGRESS", will cause the device to be unable to access job information or update the job execution status. Use caution and ensure that the device is able to recover to a valid state.</p> </note>
		 * @return {void} Success
		 */
		DeleteJobExecution(jobId: string, thingName: string, executionNumber: number, force: boolean, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/things/' + (thingName == null ? '' : encodeURIComponent(thingName)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/executionNumber/' + executionNumber + '&force=' + force, { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes the specified version of the specified policy. You cannot delete the default version of a policy using this API. To delete the default version of a policy, use <a>DeletePolicy</a>. To find out which version of a policy is marked as the default version, use ListPolicyVersions.
		 * Delete /policies/{policyName}/version/{policyVersionId}
		 * @param {string} policyName The name of the policy.
		 * @param {string} policyVersionId The policy version ID.
		 * @return {void} Success
		 */
		DeletePolicyVersion(policyName: string, policyVersionId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/policies/' + (policyName == null ? '' : encodeURIComponent(policyName)) + '/version/' + (policyVersionId == null ? '' : encodeURIComponent(policyVersionId)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets information about the specified policy version.
		 * Get /policies/{policyName}/version/{policyVersionId}
		 * @param {string} policyName The name of the policy.
		 * @param {string} policyVersionId The policy version ID.
		 * @return {GetPolicyVersionResponse} Success
		 */
		GetPolicyVersion(policyName: string, policyVersionId: string, headersHandler?: () => {[header: string]: string}): Promise<GetPolicyVersionResponse> {
			return fetch(this.baseUri + '/policies/' + (policyName == null ? '' : encodeURIComponent(policyName)) + '/version/' + (policyVersionId == null ? '' : encodeURIComponent(policyVersionId)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Deletes a fleet provisioning template.
		 * Delete /provisioning-templates/{templateName}
		 * @param {string} templateName The name of the fleet provision template to delete.
		 * @return {DeleteProvisioningTemplateResponse} Success
		 */
		DeleteProvisioningTemplate(templateName: string, headersHandler?: () => {[header: string]: string}): Promise<DeleteProvisioningTemplateResponse> {
			return fetch(this.baseUri + '/provisioning-templates/' + (templateName == null ? '' : encodeURIComponent(templateName)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Returns information about a fleet provisioning template.
		 * Get /provisioning-templates/{templateName}
		 * @param {string} templateName The name of the fleet provisioning template.
		 * @return {DescribeProvisioningTemplateResponse} Success
		 */
		DescribeProvisioningTemplate(templateName: string, headersHandler?: () => {[header: string]: string}): Promise<DescribeProvisioningTemplateResponse> {
			return fetch(this.baseUri + '/provisioning-templates/' + (templateName == null ? '' : encodeURIComponent(templateName)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Deletes a fleet provisioning template version.
		 * Delete /provisioning-templates/{templateName}/versions/{versionId}
		 * @param {string} templateName The name of the fleet provisioning template version to delete.
		 * @param {number} versionId The fleet provisioning template version ID to delete.
		 * @return {DeleteProvisioningTemplateVersionResponse} Success
		 */
		DeleteProvisioningTemplateVersion(templateName: string, versionId: number, headersHandler?: () => {[header: string]: string}): Promise<DeleteProvisioningTemplateVersionResponse> {
			return fetch(this.baseUri + '/provisioning-templates/' + (templateName == null ? '' : encodeURIComponent(templateName)) + '/versions/' + versionId, { method: 'delete', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Returns information about a fleet provisioning template version.
		 * Get /provisioning-templates/{templateName}/versions/{versionId}
		 * @param {string} templateName The template name.
		 * @param {number} versionId The fleet provisioning template version ID.
		 * @return {DescribeProvisioningTemplateVersionResponse} Success
		 */
		DescribeProvisioningTemplateVersion(templateName: string, versionId: number, headersHandler?: () => {[header: string]: string}): Promise<DescribeProvisioningTemplateVersionResponse> {
			return fetch(this.baseUri + '/provisioning-templates/' + (templateName == null ? '' : encodeURIComponent(templateName)) + '/versions/' + versionId, { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Deletes a CA certificate registration code.
		 * Delete /registrationcode
		 * @return {DeleteRegistrationCodeResponse} Success
		 */
		DeleteRegistrationCode(headersHandler?: () => {[header: string]: string}): Promise<DeleteRegistrationCodeResponse> {
			return fetch(this.baseUri + '/registrationcode', { method: 'delete', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Gets a registration code used to register a CA certificate with AWS IoT.
		 * Get /registrationcode
		 * @return {GetRegistrationCodeResponse} Success
		 */
		GetRegistrationCode(headersHandler?: () => {[header: string]: string}): Promise<GetRegistrationCodeResponse> {
			return fetch(this.baseUri + '/registrationcode', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Deletes a topic rule destination.
		 * Delete /destinations/{arn}
		 * @param {string} arn The ARN of the topic rule destination to delete.
		 * @return {DeleteTopicRuleDestinationResponse} Success
		 */
		DeleteTopicRuleDestination(arn: string, headersHandler?: () => {[header: string]: string}): Promise<DeleteTopicRuleDestinationResponse> {
			return fetch(this.baseUri + '/destinations/' + (arn == null ? '' : encodeURIComponent(arn)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Gets information about a topic rule destination.
		 * Get /destinations/{arn}
		 * @param {string} arn The ARN of the topic rule destination.
		 * @return {GetTopicRuleDestinationResponse} Success
		 */
		GetTopicRuleDestination(arn: string, headersHandler?: () => {[header: string]: string}): Promise<GetTopicRuleDestinationResponse> {
			return fetch(this.baseUri + '/destinations/' + (arn == null ? '' : encodeURIComponent(arn)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Deletes a logging level.
		 * Delete /v2LoggingLevel#targetType&targetName
		 * @param {LogTargetType} targetType The type of resource for which you are configuring logging. Must be <code>THING_Group</code>.
		 * @param {string} targetName The name of the resource for which you are configuring logging.
		 * @return {void} Success
		 */
		DeleteV2LoggingLevel(targetType: LogTargetType, targetName: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/v2LoggingLevel#targetType&targetName?targetType=' + targetType + '&targetName=' + (targetName == null ? '' : encodeURIComponent(targetName)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deprecates a thing type. You can not associate new things with deprecated thing type.
		 * Post /thing-types/{thingTypeName}/deprecate
		 * @param {string} thingTypeName The name of the thing type to deprecate.
		 * @return {DeprecateThingTypeResponse} Success
		 */
		DeprecateThingType(thingTypeName: string, requestBody: DeprecateThingTypeBody, headersHandler?: () => {[header: string]: string}): Promise<DeprecateThingTypeResponse> {
			return fetch(this.baseUri + '/thing-types/' + (thingTypeName == null ? '' : encodeURIComponent(thingTypeName)) + '/deprecate', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Gets information about a single audit finding. Properties include the reason for noncompliance, the severity of the issue, and when the audit that returned the finding was started.
		 * Get /audit/findings/{findingId}
		 * @param {string} findingId A unique identifier for a single audit finding. You can use this identifier to apply mitigation actions to the finding.
		 * @return {DescribeAuditFindingResponse} Success
		 */
		DescribeAuditFinding(findingId: string, headersHandler?: () => {[header: string]: string}): Promise<DescribeAuditFindingResponse> {
			return fetch(this.baseUri + '/audit/findings/' + (findingId == null ? '' : encodeURIComponent(findingId)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Gets information about an audit mitigation task that is used to apply mitigation actions to a set of audit findings. Properties include the actions being applied, the audit checks to which they're being applied, the task status, and aggregated task statistics.
		 * Get /audit/mitigationactions/tasks/{taskId}
		 * @param {string} taskId The unique identifier for the audit mitigation task.
		 * @return {DescribeAuditMitigationActionsTaskResponse} Success
		 */
		DescribeAuditMitigationActionsTask(taskId: string, headersHandler?: () => {[header: string]: string}): Promise<DescribeAuditMitigationActionsTaskResponse> {
			return fetch(this.baseUri + '/audit/mitigationactions/tasks/' + (taskId == null ? '' : encodeURIComponent(taskId)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Starts a task that applies a set of mitigation actions to the specified target.
		 * Post /audit/mitigationactions/tasks/{taskId}
		 * @param {string} taskId A unique identifier for the task. You can use this identifier to check the status of the task or to cancel it.
		 * @return {StartAuditMitigationActionsTaskResponse} Success
		 */
		StartAuditMitigationActionsTask(taskId: string, requestBody: StartAuditMitigationActionsTaskBody, headersHandler?: () => {[header: string]: string}): Promise<StartAuditMitigationActionsTaskResponse> {
			return fetch(this.baseUri + '/audit/mitigationactions/tasks/' + (taskId == null ? '' : encodeURIComponent(taskId)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Gets information about a Device Defender audit.
		 * Get /audit/tasks/{taskId}
		 * @param {string} taskId The ID of the audit whose information you want to get.
		 * @return {DescribeAuditTaskResponse} Success
		 */
		DescribeAuditTask(taskId: string, headersHandler?: () => {[header: string]: string}): Promise<DescribeAuditTaskResponse> {
			return fetch(this.baseUri + '/audit/tasks/' + (taskId == null ? '' : encodeURIComponent(taskId)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Returns a unique endpoint specific to the AWS account making the call.
		 * Get /endpoint
		 * @param {string} endpointType <p>The endpoint type. Valid endpoint types include:</p> <ul> <li> <p> <code>iot:Data</code> - Returns a VeriSign signed data endpoint.</p> </li> </ul> <ul> <li> <p> <code>iot:Data-ATS</code> - Returns an ATS signed data endpoint.</p> </li> </ul> <ul> <li> <p> <code>iot:CredentialProvider</code> - Returns an AWS IoT credentials provider API endpoint.</p> </li> </ul> <ul> <li> <p> <code>iot:Jobs</code> - Returns an AWS IoT device management Jobs API endpoint.</p> </li> </ul> <p>We strongly recommend that customers use the newer <code>iot:Data-ATS</code> endpoint type to avoid issues related to the widespread distrust of Symantec certificate authorities.</p>
		 * @return {DescribeEndpointResponse} Success
		 */
		DescribeEndpoint(endpointType: string, headersHandler?: () => {[header: string]: string}): Promise<DescribeEndpointResponse> {
			return fetch(this.baseUri + '/endpoint?endpointType=' + (endpointType == null ? '' : encodeURIComponent(endpointType)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Describes event configurations.
		 * Get /event-configurations
		 * @return {DescribeEventConfigurationsResponse} Success
		 */
		DescribeEventConfigurations(headersHandler?: () => {[header: string]: string}): Promise<DescribeEventConfigurationsResponse> {
			return fetch(this.baseUri + '/event-configurations', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Describes a search index.
		 * Get /indices/{indexName}
		 * @param {string} indexName The index name.
		 * @return {DescribeIndexResponse} Success
		 */
		DescribeIndex(indexName: string, headersHandler?: () => {[header: string]: string}): Promise<DescribeIndexResponse> {
			return fetch(this.baseUri + '/indices/' + (indexName == null ? '' : encodeURIComponent(indexName)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Describes a job execution.
		 * Get /things/{thingName}/jobs/{jobId}
		 * @param {string} jobId The unique identifier you assigned to this job when it was created.
		 * @param {string} thingName The name of the thing on which the job execution is running.
		 * @param {number} executionNumber A string (consisting of the digits "0" through "9" which is used to specify a particular job execution on a particular device.
		 * @return {DescribeJobExecutionResponse} Success
		 */
		DescribeJobExecution(jobId: string, thingName: string, executionNumber: number, headersHandler?: () => {[header: string]: string}): Promise<DescribeJobExecutionResponse> {
			return fetch(this.baseUri + '/things/' + (thingName == null ? '' : encodeURIComponent(thingName)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '&executionNumber=' + executionNumber, { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Describes a bulk thing provisioning task.
		 * Get /thing-registration-tasks/{taskId}
		 * @param {string} taskId The task ID.
		 * @return {DescribeThingRegistrationTaskResponse} Success
		 */
		DescribeThingRegistrationTask(taskId: string, headersHandler?: () => {[header: string]: string}): Promise<DescribeThingRegistrationTaskResponse> {
			return fetch(this.baseUri + '/thing-registration-tasks/' + (taskId == null ? '' : encodeURIComponent(taskId)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Disables the rule.
		 * Post /rules/{ruleName}/disable
		 * @param {string} ruleName The name of the rule to disable.
		 * @return {void} Success
		 */
		DisableTopicRule(ruleName: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/rules/' + (ruleName == null ? '' : encodeURIComponent(ruleName)) + '/disable', { method: 'post', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Enables the rule.
		 * Post /rules/{ruleName}/enable
		 * @param {string} ruleName The name of the topic rule to enable.
		 * @return {void} Success
		 */
		EnableTopicRule(ruleName: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/rules/' + (ruleName == null ? '' : encodeURIComponent(ruleName)) + '/enable', { method: 'post', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the approximate count of unique values that match the query.
		 * Post /indices/cardinality
		 * @return {GetCardinalityResponse} Success
		 */
		GetCardinality(requestBody: GetCardinalityBody, headersHandler?: () => {[header: string]: string}): Promise<GetCardinalityResponse> {
			return fetch(this.baseUri + '/indices/cardinality', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Gets a list of the policies that have an effect on the authorization behavior of the specified device when it connects to the AWS IoT device gateway.
		 * Post /effective-policies
		 * @param {string} thingName The thing name.
		 * @return {GetEffectivePoliciesResponse} Success
		 */
		GetEffectivePolicies(thingName: string, requestBody: GetEffectivePoliciesBody, headersHandler?: () => {[header: string]: string}): Promise<GetEffectivePoliciesResponse> {
			return fetch(this.baseUri + '/effective-policies?thingName=' + (thingName == null ? '' : encodeURIComponent(thingName)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Gets the indexing configuration.
		 * Get /indexing/config
		 * @return {GetIndexingConfigurationResponse} Success
		 */
		GetIndexingConfiguration(headersHandler?: () => {[header: string]: string}): Promise<GetIndexingConfigurationResponse> {
			return fetch(this.baseUri + '/indexing/config', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Updates the search configuration.
		 * Post /indexing/config
		 * @return {UpdateIndexingConfigurationResponse} Success
		 */
		UpdateIndexingConfiguration(requestBody: UpdateIndexingConfigurationBody, headersHandler?: () => {[header: string]: string}): Promise<UpdateIndexingConfigurationResponse> {
			return fetch(this.baseUri + '/indexing/config', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Gets a job document.
		 * Get /jobs/{jobId}/job-document
		 * @param {string} jobId The unique identifier you assigned to this job when it was created.
		 * @return {GetJobDocumentResponse} Success
		 */
		GetJobDocument(jobId: string, headersHandler?: () => {[header: string]: string}): Promise<GetJobDocumentResponse> {
			return fetch(this.baseUri + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/job-document', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * <p>Gets the logging options.</p> <p>NOTE: use of this command is not recommended. Use <code>GetV2LoggingOptions</code> instead.</p>
		 * Get /loggingOptions
		 * @return {GetLoggingOptionsResponse} Success
		 */
		GetLoggingOptions(headersHandler?: () => {[header: string]: string}): Promise<GetLoggingOptionsResponse> {
			return fetch(this.baseUri + '/loggingOptions', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * <p>Sets the logging options.</p> <p>NOTE: use of this command is not recommended. Use <code>SetV2LoggingOptions</code> instead.</p>
		 * Post /loggingOptions
		 * @return {void} Success
		 */
		SetLoggingOptions(requestBody: SetLoggingOptionsBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/loggingOptions', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Groups the aggregated values that match the query into percentile groupings. The default percentile groupings are: 1,5,25,50,75,95,99, although you can specify your own when you call <code>GetPercentiles</code>. This function returns a value for each percentile group specified (or the default percentile groupings). The percentile group "1" contains the aggregated field value that occurs in approximately one percent of the values that match the query. The percentile group "5" contains the aggregated field value that occurs in approximately five percent of the values that match the query, and so on. The result is an approximation, the more values that match the query, the more accurate the percentile values.
		 * Post /indices/percentiles
		 * @return {GetPercentilesResponse} Success
		 */
		GetPercentiles(requestBody: GetPercentilesBody, headersHandler?: () => {[header: string]: string}): Promise<GetPercentilesResponse> {
			return fetch(this.baseUri + '/indices/percentiles', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Returns the count, average, sum, minimum, maximum, sum of squares, variance, and standard deviation for the specified aggregated field. If the aggregation field is of type <code>String</code>, only the count statistic is returned.
		 * Post /indices/statistics
		 * @return {GetStatisticsResponse} Success
		 */
		GetStatistics(requestBody: GetStatisticsBody, headersHandler?: () => {[header: string]: string}): Promise<GetStatisticsResponse> {
			return fetch(this.baseUri + '/indices/statistics', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Gets the fine grained logging options.
		 * Get /v2LoggingOptions
		 * @return {GetV2LoggingOptionsResponse} Success
		 */
		GetV2LoggingOptions(headersHandler?: () => {[header: string]: string}): Promise<GetV2LoggingOptionsResponse> {
			return fetch(this.baseUri + '/v2LoggingOptions', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Sets the logging options for the V2 logging service.
		 * Post /v2LoggingOptions
		 * @return {void} Success
		 */
		SetV2LoggingOptions(requestBody: SetV2LoggingOptionsBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/v2LoggingOptions', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Lists the active violations for a given Device Defender security profile.
		 * Get /active-violations
		 * @param {string} thingName The name of the thing whose active violations are listed.
		 * @param {string} securityProfileName The name of the Device Defender security profile for which violations are listed.
		 * @param {string} nextToken The token for the next set of results.
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @return {ListActiveViolationsResponse} Success
		 */
		ListActiveViolations(thingName: string, securityProfileName: string, nextToken: string, maxResults: number, headersHandler?: () => {[header: string]: string}): Promise<ListActiveViolationsResponse> {
			return fetch(this.baseUri + '/active-violations?thingName=' + (thingName == null ? '' : encodeURIComponent(thingName)) + '&securityProfileName=' + (securityProfileName == null ? '' : encodeURIComponent(securityProfileName)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Lists the policies attached to the specified thing group.
		 * Post /attached-policies/{target}
		 * @param {string} target The group or principal for which the policies will be listed.
		 * @param {boolean} recursive When true, recursively list attached policies.
		 * @param {string} marker The token to retrieve the next set of results.
		 * @param {number} pageSize The maximum number of results to be returned per request.
		 * @return {ListAttachedPoliciesResponse} Success
		 */
		ListAttachedPolicies(target: string, recursive: boolean, marker: string, pageSize: number, headersHandler?: () => {[header: string]: string}): Promise<ListAttachedPoliciesResponse> {
			return fetch(this.baseUri + '/attached-policies/' + (target == null ? '' : encodeURIComponent(target)) + '&recursive=' + recursive + '&marker=' + (marker == null ? '' : encodeURIComponent(marker)) + '&pageSize=' + pageSize, { method: 'post', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Lists the findings (results) of a Device Defender audit or of the audits performed during a specified time period. (Findings are retained for 180 days.)
		 * Post /audit/findings
		 * @return {ListAuditFindingsResponse} Success
		 */
		ListAuditFindings(requestBody: ListAuditFindingsBody, headersHandler?: () => {[header: string]: string}): Promise<ListAuditFindingsResponse> {
			return fetch(this.baseUri + '/audit/findings', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Gets the status of audit mitigation action tasks that were executed.
		 * Get /audit/mitigationactions/executions#taskId&findingId
		 * @param {string} taskId Specify this filter to limit results to actions for a specific audit mitigation actions task.
		 * @param {AuditMitigationActionsExecutionStatus} actionStatus Specify this filter to limit results to those with a specific status.
		 * @param {string} findingId Specify this filter to limit results to those that were applied to a specific audit finding.
		 * @param {number} maxResults The maximum number of results to return at one time. The default is 25.
		 * @param {string} nextToken The token for the next set of results.
		 * @return {ListAuditMitigationActionsExecutionsResponse} Success
		 */
		ListAuditMitigationActionsExecutions(taskId: string, actionStatus: AuditMitigationActionsExecutionStatus, findingId: string, maxResults: number, nextToken: string, headersHandler?: () => {[header: string]: string}): Promise<ListAuditMitigationActionsExecutionsResponse> {
			return fetch(this.baseUri + '/audit/mitigationactions/executions#taskId&findingId?taskId=' + (taskId == null ? '' : encodeURIComponent(taskId)) + '&actionStatus=' + actionStatus + '&findingId=' + (findingId == null ? '' : encodeURIComponent(findingId)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Gets a list of audit mitigation action tasks that match the specified filters.
		 * Get /audit/mitigationactions/tasks#startTime&endTime
		 * @param {string} auditTaskId Specify this filter to limit results to tasks that were applied to results for a specific audit.
		 * @param {string} findingId Specify this filter to limit results to tasks that were applied to a specific audit finding.
		 * @param {DescribeAuditMitigationActionsTaskResponseTaskStatus} taskStatus Specify this filter to limit results to tasks that are in a specific state.
		 * @param {number} maxResults The maximum number of results to return at one time. The default is 25.
		 * @param {string} nextToken The token for the next set of results.
		 * @param {Date} startTime Specify this filter to limit results to tasks that began on or after a specific date and time.
		 * @param {Date} endTime Specify this filter to limit results to tasks that were completed or canceled on or before a specific date and time.
		 * @return {ListAuditMitigationActionsTasksResponse} Success
		 */
		ListAuditMitigationActionsTasks(auditTaskId: string, findingId: string, taskStatus: DescribeAuditMitigationActionsTaskResponseTaskStatus, maxResults: number, nextToken: string, startTime: Date, endTime: Date, headersHandler?: () => {[header: string]: string}): Promise<ListAuditMitigationActionsTasksResponse> {
			return fetch(this.baseUri + '/audit/mitigationactions/tasks#startTime&endTime?auditTaskId=' + (auditTaskId == null ? '' : encodeURIComponent(auditTaskId)) + '&findingId=' + (findingId == null ? '' : encodeURIComponent(findingId)) + '&taskStatus=' + taskStatus + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&startTime=' + startTime.toISOString() + '&endTime=' + endTime.toISOString(), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Lists the Device Defender audits that have been performed during a given time period.
		 * Get /audit/tasks#startTime&endTime
		 * @param {Date} startTime The beginning of the time period. Audit information is retained for a limited time (180 days). Requesting a start time prior to what is retained results in an "InvalidRequestException".
		 * @param {Date} endTime The end of the time period.
		 * @param {DescribeAuditTaskResponseTaskType} taskType A filter to limit the output to the specified type of audit: can be one of "ON_DEMAND_AUDIT_TASK" or "SCHEDULED__AUDIT_TASK".
		 * @param {DescribeAuditMitigationActionsTaskResponseTaskStatus} taskStatus A filter to limit the output to audits with the specified completion status: can be one of "IN_PROGRESS", "COMPLETED", "FAILED", or "CANCELED".
		 * @param {string} nextToken The token for the next set of results.
		 * @param {number} maxResults The maximum number of results to return at one time. The default is 25.
		 * @return {ListAuditTasksResponse} Success
		 */
		ListAuditTasks(startTime: Date, endTime: Date, taskType: DescribeAuditTaskResponseTaskType, taskStatus: DescribeAuditMitigationActionsTaskResponseTaskStatus, nextToken: string, maxResults: number, headersHandler?: () => {[header: string]: string}): Promise<ListAuditTasksResponse> {
			return fetch(this.baseUri + '/audit/tasks#startTime&endTime?startTime=' + startTime.toISOString() + '&endTime=' + endTime.toISOString() + '&taskType=' + taskType + '&taskStatus=' + taskStatus + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Lists the authorizers registered in your account.
		 * Get /authorizers/
		 * @param {number} pageSize The maximum number of results to return at one time.
		 * @param {string} marker A marker used to get the next set of results.
		 * @param {boolean} isAscendingOrder Return the list of authorizers in ascending alphabetical order.
		 * @param {AuthorizerStatus} status The status of the list authorizers request.
		 * @return {ListAuthorizersResponse} Success
		 */
		ListAuthorizers(pageSize: number, marker: string, isAscendingOrder: boolean, status: AuthorizerStatus, headersHandler?: () => {[header: string]: string}): Promise<ListAuthorizersResponse> {
			return fetch(this.baseUri + '/authorizers/?pageSize=' + pageSize + '&marker=' + (marker == null ? '' : encodeURIComponent(marker)) + '&isAscendingOrder=' + isAscendingOrder + '&status=' + status, { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Lists the billing groups you have created.
		 * Get /billing-groups
		 * @param {string} nextToken The token to retrieve the next set of results.
		 * @param {number} maxResults The maximum number of results to return per request.
		 * @param {string} namePrefixFilter Limit the results to billing groups whose names have the given prefix.
		 * @return {ListBillingGroupsResponse} Success
		 */
		ListBillingGroups(nextToken: string, maxResults: number, namePrefixFilter: string, headersHandler?: () => {[header: string]: string}): Promise<ListBillingGroupsResponse> {
			return fetch(this.baseUri + '/billing-groups?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&namePrefixFilter=' + (namePrefixFilter == null ? '' : encodeURIComponent(namePrefixFilter)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * <p>Lists the CA certificates registered for your AWS account.</p> <p>The results are paginated with a default page size of 25. You can use the returned marker to retrieve additional results.</p>
		 * Get /cacertificates
		 * @param {number} pageSize The result page size.
		 * @param {string} marker The marker for the next set of results.
		 * @param {boolean} isAscendingOrder Determines the order of the results.
		 * @return {ListCACertificatesResponse} Success
		 */
		ListCACertificates(pageSize: number, marker: string, isAscendingOrder: boolean, headersHandler?: () => {[header: string]: string}): Promise<ListCACertificatesResponse> {
			return fetch(this.baseUri + '/cacertificates?pageSize=' + pageSize + '&marker=' + (marker == null ? '' : encodeURIComponent(marker)) + '&isAscendingOrder=' + isAscendingOrder, { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * List the device certificates signed by the specified CA certificate.
		 * Get /certificates-by-ca/{caCertificateId}
		 * @param {string} caCertificateId The ID of the CA certificate. This operation will list all registered device certificate that were signed by this CA certificate.
		 * @param {number} pageSize The result page size.
		 * @param {string} marker The marker for the next set of results.
		 * @param {boolean} isAscendingOrder Specifies the order for results. If True, the results are returned in ascending order, based on the creation date.
		 * @return {ListCertificatesByCAResponse} Success
		 */
		ListCertificatesByCA(caCertificateId: string, pageSize: number, marker: string, isAscendingOrder: boolean, headersHandler?: () => {[header: string]: string}): Promise<ListCertificatesByCAResponse> {
			return fetch(this.baseUri + '/certificates-by-ca/' + (caCertificateId == null ? '' : encodeURIComponent(caCertificateId)) + '&pageSize=' + pageSize + '&marker=' + (marker == null ? '' : encodeURIComponent(marker)) + '&isAscendingOrder=' + isAscendingOrder, { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * List the set of dimensions that are defined for your AWS account.
		 * Get /dimensions
		 * @param {string} nextToken The token for the next set of results.
		 * @param {number} maxResults The maximum number of results to retrieve at one time.
		 * @return {ListDimensionsResponse} Success
		 */
		ListDimensions(nextToken: string, maxResults: number, headersHandler?: () => {[header: string]: string}): Promise<ListDimensionsResponse> {
			return fetch(this.baseUri + '/dimensions?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * <p>Gets a list of domain configurations for the user. This list is sorted alphabetically by domain configuration name.</p> <note> <p>The domain configuration feature is in public preview and is subject to change.</p> </note>
		 * Get /domainConfigurations
		 * @param {string} marker The marker for the next set of results.
		 * @param {number} pageSize The result page size.
		 * @param {DescribeDomainConfigurationResponseServiceType} serviceType The type of service delivered by the endpoint.
		 * @return {ListDomainConfigurationsResponse} Success
		 */
		ListDomainConfigurations(marker: string, pageSize: number, serviceType: DescribeDomainConfigurationResponseServiceType, headersHandler?: () => {[header: string]: string}): Promise<ListDomainConfigurationsResponse> {
			return fetch(this.baseUri + '/domainConfigurations?marker=' + (marker == null ? '' : encodeURIComponent(marker)) + '&pageSize=' + pageSize + '&serviceType=' + serviceType, { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Lists the search indices.
		 * Get /indices
		 * @param {string} nextToken The token used to get the next set of results, or <code>null</code> if there are no additional results.
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @return {ListIndicesResponse} Success
		 */
		ListIndices(nextToken: string, maxResults: number, headersHandler?: () => {[header: string]: string}): Promise<ListIndicesResponse> {
			return fetch(this.baseUri + '/indices?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Lists the job executions for a job.
		 * Get /jobs/{jobId}/things
		 * @param {string} jobId The unique identifier you assigned to this job when it was created.
		 * @param {JobExecutionStatus} status The status of the job.
		 * @param {number} maxResults The maximum number of results to be returned per request.
		 * @param {string} nextToken The token to retrieve the next set of results.
		 * @return {ListJobExecutionsForJobResponse} Success
		 */
		ListJobExecutionsForJob(jobId: string, status: JobExecutionStatus, maxResults: number, nextToken: string, headersHandler?: () => {[header: string]: string}): Promise<ListJobExecutionsForJobResponse> {
			return fetch(this.baseUri + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/things&status=' + status + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Lists the job executions for the specified thing.
		 * Get /things/{thingName}/jobs
		 * @param {string} thingName The thing name.
		 * @param {JobExecutionStatus} status An optional filter that lets you search for jobs that have the specified status.
		 * @param {number} maxResults The maximum number of results to be returned per request.
		 * @param {string} nextToken The token to retrieve the next set of results.
		 * @return {ListJobExecutionsForThingResponse} Success
		 */
		ListJobExecutionsForThing(thingName: string, status: JobExecutionStatus, maxResults: number, nextToken: string, headersHandler?: () => {[header: string]: string}): Promise<ListJobExecutionsForThingResponse> {
			return fetch(this.baseUri + '/things/' + (thingName == null ? '' : encodeURIComponent(thingName)) + '/jobs&status=' + status + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Lists jobs.
		 * Get /jobs
		 * @param {JobStatus} status An optional filter that lets you search for jobs that have the specified status.
		 * @param {TargetSelection} targetSelection Specifies whether the job will continue to run (CONTINUOUS), or will be complete after all those things specified as targets have completed the job (SNAPSHOT). If continuous, the job may also be run on a thing when a change is detected in a target. For example, a job will run on a thing when the thing is added to a target group, even after the job was completed by all things originally in the group. 
		 * @param {number} maxResults The maximum number of results to return per request.
		 * @param {string} nextToken The token to retrieve the next set of results.
		 * @param {string} thingGroupName A filter that limits the returned jobs to those for the specified group.
		 * @param {string} thingGroupId A filter that limits the returned jobs to those for the specified group.
		 * @return {ListJobsResponse} Success
		 */
		ListJobs(status: JobStatus, targetSelection: TargetSelection, maxResults: number, nextToken: string, thingGroupName: string, thingGroupId: string, headersHandler?: () => {[header: string]: string}): Promise<ListJobsResponse> {
			return fetch(this.baseUri + '/jobs?status=' + status + '&targetSelection=' + targetSelection + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&thingGroupName=' + (thingGroupName == null ? '' : encodeURIComponent(thingGroupName)) + '&thingGroupId=' + (thingGroupId == null ? '' : encodeURIComponent(thingGroupId)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Gets a list of all mitigation actions that match the specified filter criteria.
		 * Get /mitigationactions/actions
		 * @param {DescribeMitigationActionResponseActionType} actionType Specify a value to limit the result to mitigation actions with a specific action type.
		 * @param {number} maxResults The maximum number of results to return at one time. The default is 25.
		 * @param {string} nextToken The token for the next set of results.
		 * @return {ListMitigationActionsResponse} Success
		 */
		ListMitigationActions(actionType: DescribeMitigationActionResponseActionType, maxResults: number, nextToken: string, headersHandler?: () => {[header: string]: string}): Promise<ListMitigationActionsResponse> {
			return fetch(this.baseUri + '/mitigationactions/actions?actionType=' + actionType + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Lists OTA updates.
		 * Get /otaUpdates
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @param {string} nextToken A token used to retrieve the next set of results.
		 * @param {CreateOTAUpdateResponseOtaUpdateStatus} otaUpdateStatus The OTA update job status.
		 * @return {ListOTAUpdatesResponse} Success
		 */
		ListOTAUpdates(maxResults: number, nextToken: string, otaUpdateStatus: CreateOTAUpdateResponseOtaUpdateStatus, headersHandler?: () => {[header: string]: string}): Promise<ListOTAUpdatesResponse> {
			return fetch(this.baseUri + '/otaUpdates?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&otaUpdateStatus=' + otaUpdateStatus, { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Lists certificates that are being transferred but not yet accepted.
		 * Get /certificates-out-going
		 * @param {number} pageSize The result page size.
		 * @param {string} marker The marker for the next set of results.
		 * @param {boolean} isAscendingOrder Specifies the order for results. If True, the results are returned in ascending order, based on the creation date.
		 * @return {ListOutgoingCertificatesResponse} Success
		 */
		ListOutgoingCertificates(pageSize: number, marker: string, isAscendingOrder: boolean, headersHandler?: () => {[header: string]: string}): Promise<ListOutgoingCertificatesResponse> {
			return fetch(this.baseUri + '/certificates-out-going?pageSize=' + pageSize + '&marker=' + (marker == null ? '' : encodeURIComponent(marker)) + '&isAscendingOrder=' + isAscendingOrder, { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Lists your policies.
		 * Get /policies
		 * @param {string} marker The marker for the next set of results.
		 * @param {number} pageSize The result page size.
		 * @param {boolean} isAscendingOrder Specifies the order for results. If true, the results are returned in ascending creation order.
		 * @return {ListPoliciesResponse} Success
		 */
		ListPolicies(marker: string, pageSize: number, isAscendingOrder: boolean, headersHandler?: () => {[header: string]: string}): Promise<ListPoliciesResponse> {
			return fetch(this.baseUri + '/policies?marker=' + (marker == null ? '' : encodeURIComponent(marker)) + '&pageSize=' + pageSize + '&isAscendingOrder=' + isAscendingOrder, { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * <p>Lists the principals associated with the specified policy.</p> <p> <b>Note:</b> This API is deprecated. Please use <a>ListTargetsForPolicy</a> instead.</p>
		 * Get /policy-principals#x-amzn-iot-policy
		 * @param {string} marker The marker for the next set of results.
		 * @param {number} pageSize The result page size.
		 * @param {boolean} isAscendingOrder Specifies the order for results. If true, the results are returned in ascending creation order.
		 * @return {ListPolicyPrincipalsResponse} Success
		 */
		ListPolicyPrincipals(marker: string, pageSize: number, isAscendingOrder: boolean, headersHandler?: () => {[header: string]: string}): Promise<ListPolicyPrincipalsResponse> {
			return fetch(this.baseUri + '/policy-principals#x-amzn-iot-policy?marker=' + (marker == null ? '' : encodeURIComponent(marker)) + '&pageSize=' + pageSize + '&isAscendingOrder=' + isAscendingOrder, { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * <p>Lists the policies attached to the specified principal. If you use an Cognito identity, the ID must be in <a href="https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_GetCredentialsForIdentity.html#API_GetCredentialsForIdentity_RequestSyntax">AmazonCognito Identity format</a>.</p> <p> <b>Note:</b> This API is deprecated. Please use <a>ListAttachedPolicies</a> instead.</p>
		 * Get /principal-policies#x-amzn-iot-principal
		 * @param {string} marker The marker for the next set of results.
		 * @param {number} pageSize The result page size.
		 * @param {boolean} isAscendingOrder Specifies the order for results. If true, results are returned in ascending creation order.
		 * @return {ListPrincipalPoliciesResponse} Success
		 */
		ListPrincipalPolicies(marker: string, pageSize: number, isAscendingOrder: boolean, headersHandler?: () => {[header: string]: string}): Promise<ListPrincipalPoliciesResponse> {
			return fetch(this.baseUri + '/principal-policies#x-amzn-iot-principal?marker=' + (marker == null ? '' : encodeURIComponent(marker)) + '&pageSize=' + pageSize + '&isAscendingOrder=' + isAscendingOrder, { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Lists the things associated with the specified principal. A principal can be X.509 certificates, IAM users, groups, and roles, Amazon Cognito identities or federated identities.
		 * Get /principals/things#x-amzn-principal
		 * @param {string} nextToken The token to retrieve the next set of results.
		 * @param {number} maxResults The maximum number of results to return in this operation.
		 * @return {ListPrincipalThingsResponse} Success
		 */
		ListPrincipalThings(nextToken: string, maxResults: number, headersHandler?: () => {[header: string]: string}): Promise<ListPrincipalThingsResponse> {
			return fetch(this.baseUri + '/principals/things#x-amzn-principal?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Lists the role aliases registered in your account.
		 * Get /role-aliases
		 * @param {number} pageSize The maximum number of results to return at one time.
		 * @param {string} marker A marker used to get the next set of results.
		 * @param {boolean} isAscendingOrder Return the list of role aliases in ascending alphabetical order.
		 * @return {ListRoleAliasesResponse} Success
		 */
		ListRoleAliases(pageSize: number, marker: string, isAscendingOrder: boolean, headersHandler?: () => {[header: string]: string}): Promise<ListRoleAliasesResponse> {
			return fetch(this.baseUri + '/role-aliases?pageSize=' + pageSize + '&marker=' + (marker == null ? '' : encodeURIComponent(marker)) + '&isAscendingOrder=' + isAscendingOrder, { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Lists all of your scheduled audits.
		 * Get /audit/scheduledaudits
		 * @param {string} nextToken The token for the next set of results.
		 * @param {number} maxResults The maximum number of results to return at one time. The default is 25.
		 * @return {ListScheduledAuditsResponse} Success
		 */
		ListScheduledAudits(nextToken: string, maxResults: number, headersHandler?: () => {[header: string]: string}): Promise<ListScheduledAuditsResponse> {
			return fetch(this.baseUri + '/audit/scheduledaudits?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Lists the Device Defender security profiles you have created. You can use filters to list only those security profiles associated with a thing group or only those associated with your account.
		 * Get /security-profiles
		 * @param {string} nextToken The token for the next set of results.
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @param {string} dimensionName A filter to limit results to the security profiles that use the defined dimension.
		 * @return {ListSecurityProfilesResponse} Success
		 */
		ListSecurityProfiles(nextToken: string, maxResults: number, dimensionName: string, headersHandler?: () => {[header: string]: string}): Promise<ListSecurityProfilesResponse> {
			return fetch(this.baseUri + '/security-profiles?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&dimensionName=' + (dimensionName == null ? '' : encodeURIComponent(dimensionName)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Lists the Device Defender security profiles attached to a target (thing group).
		 * Get /security-profiles-for-target#securityProfileTargetArn
		 * @param {string} nextToken The token for the next set of results.
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @param {boolean} recursive If true, return child groups too.
		 * @param {string} securityProfileTargetArn The ARN of the target (thing group) whose attached security profiles you want to get.
		 * @return {ListSecurityProfilesForTargetResponse} Success
		 */
		ListSecurityProfilesForTarget(nextToken: string, maxResults: number, recursive: boolean, securityProfileTargetArn: string, headersHandler?: () => {[header: string]: string}): Promise<ListSecurityProfilesForTargetResponse> {
			return fetch(this.baseUri + '/security-profiles-for-target#securityProfileTargetArn?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&recursive=' + recursive + '&securityProfileTargetArn=' + (securityProfileTargetArn == null ? '' : encodeURIComponent(securityProfileTargetArn)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Lists all of the streams in your AWS account.
		 * Get /streams
		 * @param {number} maxResults The maximum number of results to return at a time.
		 * @param {string} nextToken A token used to get the next set of results.
		 * @param {boolean} isAscendingOrder Set to true to return the list of streams in ascending order.
		 * @return {ListStreamsResponse} Success
		 */
		ListStreams(maxResults: number, nextToken: string, isAscendingOrder: boolean, headersHandler?: () => {[header: string]: string}): Promise<ListStreamsResponse> {
			return fetch(this.baseUri + '/streams?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&isAscendingOrder=' + isAscendingOrder, { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Lists the tags (metadata) you have assigned to the resource.
		 * Get /tags#resourceArn
		 * @param {string} resourceArn The ARN of the resource.
		 * @param {string} nextToken The token to retrieve the next set of results.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string, nextToken: string, headersHandler?: () => {[header: string]: string}): Promise<ListTagsForResourceResponse> {
			return fetch(this.baseUri + '/tags#resourceArn?resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * List targets for the specified policy.
		 * Post /policy-targets/{policyName}
		 * @param {string} policyName The policy name.
		 * @param {string} marker A marker used to get the next set of results.
		 * @param {number} pageSize The maximum number of results to return at one time.
		 * @return {ListTargetsForPolicyResponse} Success
		 */
		ListTargetsForPolicy(policyName: string, marker: string, pageSize: number, headersHandler?: () => {[header: string]: string}): Promise<ListTargetsForPolicyResponse> {
			return fetch(this.baseUri + '/policy-targets/' + (policyName == null ? '' : encodeURIComponent(policyName)) + '&marker=' + (marker == null ? '' : encodeURIComponent(marker)) + '&pageSize=' + pageSize, { method: 'post', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Lists the targets (thing groups) associated with a given Device Defender security profile.
		 * Get /security-profiles/{securityProfileName}/targets
		 * @param {string} securityProfileName The security profile.
		 * @param {string} nextToken The token for the next set of results.
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @return {ListTargetsForSecurityProfileResponse} Success
		 */
		ListTargetsForSecurityProfile(securityProfileName: string, nextToken: string, maxResults: number, headersHandler?: () => {[header: string]: string}): Promise<ListTargetsForSecurityProfileResponse> {
			return fetch(this.baseUri + '/security-profiles/' + (securityProfileName == null ? '' : encodeURIComponent(securityProfileName)) + '/targets&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * List the thing groups in your account.
		 * Get /thing-groups
		 * @param {string} nextToken The token to retrieve the next set of results.
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @param {string} parentGroup A filter that limits the results to those with the specified parent group.
		 * @param {string} namePrefixFilter A filter that limits the results to those with the specified name prefix.
		 * @param {boolean} recursive If true, return child groups as well.
		 * @return {ListThingGroupsResponse} Success
		 */
		ListThingGroups(nextToken: string, maxResults: number, parentGroup: string, namePrefixFilter: string, recursive: boolean, headersHandler?: () => {[header: string]: string}): Promise<ListThingGroupsResponse> {
			return fetch(this.baseUri + '/thing-groups?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&parentGroup=' + (parentGroup == null ? '' : encodeURIComponent(parentGroup)) + '&namePrefixFilter=' + (namePrefixFilter == null ? '' : encodeURIComponent(namePrefixFilter)) + '&recursive=' + recursive, { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * List the thing groups to which the specified thing belongs.
		 * Get /things/{thingName}/thing-groups
		 * @param {string} thingName The thing name.
		 * @param {string} nextToken The token to retrieve the next set of results.
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @return {ListThingGroupsForThingResponse} Success
		 */
		ListThingGroupsForThing(thingName: string, nextToken: string, maxResults: number, headersHandler?: () => {[header: string]: string}): Promise<ListThingGroupsForThingResponse> {
			return fetch(this.baseUri + '/things/' + (thingName == null ? '' : encodeURIComponent(thingName)) + '/thing-groups&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Lists the principals associated with the specified thing. A principal can be X.509 certificates, IAM users, groups, and roles, Amazon Cognito identities or federated identities.
		 * Get /things/{thingName}/principals
		 * @param {string} thingName The name of the thing.
		 * @return {ListThingPrincipalsResponse} Success
		 */
		ListThingPrincipals(thingName: string, headersHandler?: () => {[header: string]: string}): Promise<ListThingPrincipalsResponse> {
			return fetch(this.baseUri + '/things/' + (thingName == null ? '' : encodeURIComponent(thingName)) + '/principals', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Information about the thing registration tasks.
		 * Get /thing-registration-tasks/{taskId}/reports#reportType
		 * @param {string} taskId The id of the task.
		 * @param {ListThingRegistrationTaskReportsResponseReportType} reportType The type of task report.
		 * @param {string} nextToken The token to retrieve the next set of results.
		 * @param {number} maxResults The maximum number of results to return per request.
		 * @return {ListThingRegistrationTaskReportsResponse} Success
		 */
		ListThingRegistrationTaskReports(taskId: string, reportType: ListThingRegistrationTaskReportsResponseReportType, nextToken: string, maxResults: number, headersHandler?: () => {[header: string]: string}): Promise<ListThingRegistrationTaskReportsResponse> {
			return fetch(this.baseUri + '/thing-registration-tasks/' + (taskId == null ? '' : encodeURIComponent(taskId)) + '/reports#reportType&reportType=' + reportType + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * List bulk thing provisioning tasks.
		 * Get /thing-registration-tasks
		 * @param {string} nextToken The token to retrieve the next set of results.
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @param {DescribeThingRegistrationTaskResponseStatus} status The status of the bulk thing provisioning task.
		 * @return {ListThingRegistrationTasksResponse} Success
		 */
		ListThingRegistrationTasks(nextToken: string, maxResults: number, status: DescribeThingRegistrationTaskResponseStatus, headersHandler?: () => {[header: string]: string}): Promise<ListThingRegistrationTasksResponse> {
			return fetch(this.baseUri + '/thing-registration-tasks?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&status=' + status, { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Creates a bulk thing provisioning task.
		 * Post /thing-registration-tasks
		 * @return {StartThingRegistrationTaskResponse} Success
		 */
		StartThingRegistrationTask(requestBody: StartThingRegistrationTaskBody, headersHandler?: () => {[header: string]: string}): Promise<StartThingRegistrationTaskResponse> {
			return fetch(this.baseUri + '/thing-registration-tasks', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Lists the existing thing types.
		 * Get /thing-types
		 * @param {string} nextToken The token to retrieve the next set of results.
		 * @param {number} maxResults The maximum number of results to return in this operation.
		 * @param {string} thingTypeName The name of the thing type.
		 * @return {ListThingTypesResponse} Success
		 */
		ListThingTypes(nextToken: string, maxResults: number, thingTypeName: string, headersHandler?: () => {[header: string]: string}): Promise<ListThingTypesResponse> {
			return fetch(this.baseUri + '/thing-types?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&thingTypeName=' + (thingTypeName == null ? '' : encodeURIComponent(thingTypeName)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Lists your things. Use the <b>attributeName</b> and <b>attributeValue</b> parameters to filter your things. For example, calling <code>ListThings</code> with attributeName=Color and attributeValue=Red retrieves all things in the registry that contain an attribute <b>Color</b> with the value <b>Red</b>.
		 * Get /things
		 * @param {string} nextToken The token to retrieve the next set of results.
		 * @param {number} maxResults The maximum number of results to return in this operation.
		 * @param {string} attributeName The attribute name used to search for things.
		 * @param {string} attributeValue The attribute value used to search for things.
		 * @param {string} thingTypeName The name of the thing type used to search for things.
		 * @return {ListThingsResponse} Success
		 */
		ListThings(nextToken: string, maxResults: number, attributeName: string, attributeValue: string, thingTypeName: string, headersHandler?: () => {[header: string]: string}): Promise<ListThingsResponse> {
			return fetch(this.baseUri + '/things?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&attributeName=' + (attributeName == null ? '' : encodeURIComponent(attributeName)) + '&attributeValue=' + (attributeValue == null ? '' : encodeURIComponent(attributeValue)) + '&thingTypeName=' + (thingTypeName == null ? '' : encodeURIComponent(thingTypeName)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Provisions a thing in the device registry. RegisterThing calls other AWS IoT control plane APIs. These calls might exceed your account level <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_iot"> AWS IoT Throttling Limits</a> and cause throttle errors. Please contact <a href="https://console.aws.amazon.com/support/home">AWS Customer Support</a> to raise your throttling limits if necessary.
		 * Post /things
		 * @return {RegisterThingResponse} Success
		 */
		RegisterThing(requestBody: RegisterThingBody, headersHandler?: () => {[header: string]: string}): Promise<RegisterThingResponse> {
			return fetch(this.baseUri + '/things', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Lists the things you have added to the given billing group.
		 * Get /billing-groups/{billingGroupName}/things
		 * @param {string} billingGroupName The name of the billing group.
		 * @param {string} nextToken The token to retrieve the next set of results.
		 * @param {number} maxResults The maximum number of results to return per request.
		 * @return {ListThingsInBillingGroupResponse} Success
		 */
		ListThingsInBillingGroup(billingGroupName: string, nextToken: string, maxResults: number, headersHandler?: () => {[header: string]: string}): Promise<ListThingsInBillingGroupResponse> {
			return fetch(this.baseUri + '/billing-groups/' + (billingGroupName == null ? '' : encodeURIComponent(billingGroupName)) + '/things&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Lists the things in the specified group.
		 * Get /thing-groups/{thingGroupName}/things
		 * @param {string} thingGroupName The thing group name.
		 * @param {boolean} recursive When true, list things in this thing group and in all child groups as well.
		 * @param {string} nextToken The token to retrieve the next set of results.
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @return {ListThingsInThingGroupResponse} Success
		 */
		ListThingsInThingGroup(thingGroupName: string, recursive: boolean, nextToken: string, maxResults: number, headersHandler?: () => {[header: string]: string}): Promise<ListThingsInThingGroupResponse> {
			return fetch(this.baseUri + '/thing-groups/' + (thingGroupName == null ? '' : encodeURIComponent(thingGroupName)) + '/things&recursive=' + recursive + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Lists the rules for the specific topic.
		 * Get /rules
		 * @param {string} topic The topic.
		 * @param {number} maxResults The maximum number of results to return.
		 * @param {string} nextToken A token used to retrieve the next value.
		 * @param {boolean} ruleDisabled Specifies whether the rule is disabled.
		 * @return {ListTopicRulesResponse} Success
		 */
		ListTopicRules(topic: string, maxResults: number, nextToken: string, ruleDisabled: boolean, headersHandler?: () => {[header: string]: string}): Promise<ListTopicRulesResponse> {
			return fetch(this.baseUri + '/rules?topic=' + (topic == null ? '' : encodeURIComponent(topic)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&ruleDisabled=' + ruleDisabled, { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Lists logging levels.
		 * Get /v2LoggingLevel
		 * @param {LogTargetType} targetType The type of resource for which you are configuring logging. Must be <code>THING_Group</code>.
		 * @param {string} nextToken The token used to get the next set of results, or <b>null</b> if there are no additional results.
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @return {ListV2LoggingLevelsResponse} Success
		 */
		ListV2LoggingLevels(targetType: LogTargetType, nextToken: string, maxResults: number, headersHandler?: () => {[header: string]: string}): Promise<ListV2LoggingLevelsResponse> {
			return fetch(this.baseUri + '/v2LoggingLevel?targetType=' + targetType + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Sets the logging level.
		 * Post /v2LoggingLevel
		 * @return {void} Success
		 */
		SetV2LoggingLevel(requestBody: SetV2LoggingLevelBody, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/v2LoggingLevel', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Lists the Device Defender security profile violations discovered during the given time period. You can use filters to limit the results to those alerts issued for a particular security profile, behavior, or thing (device).
		 * Get /violation-events#startTime&endTime
		 * @param {Date} startTime The start time for the alerts to be listed.
		 * @param {Date} endTime The end time for the alerts to be listed.
		 * @param {string} thingName A filter to limit results to those alerts caused by the specified thing.
		 * @param {string} securityProfileName A filter to limit results to those alerts generated by the specified security profile.
		 * @param {string} nextToken The token for the next set of results.
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @return {ListViolationEventsResponse} Success
		 */
		ListViolationEvents(startTime: Date, endTime: Date, thingName: string, securityProfileName: string, nextToken: string, maxResults: number, headersHandler?: () => {[header: string]: string}): Promise<ListViolationEventsResponse> {
			return fetch(this.baseUri + '/violation-events#startTime&endTime?startTime=' + startTime.toISOString() + '&endTime=' + endTime.toISOString() + '&thingName=' + (thingName == null ? '' : encodeURIComponent(thingName)) + '&securityProfileName=' + (securityProfileName == null ? '' : encodeURIComponent(securityProfileName)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Registers a CA certificate with AWS IoT. This CA certificate can then be used to sign device certificates, which can be then registered with AWS IoT. You can register up to 10 CA certificates per AWS account that have the same subject field. This enables you to have up to 10 certificate authorities sign your device certificates. If you have more than one CA certificate registered, make sure you pass the CA certificate when you register your device certificates with the RegisterCertificate API.
		 * Post /cacertificate
		 * @param {boolean} setAsActive A boolean value that specifies if the CA certificate is set to active.
		 * @param {boolean} allowAutoRegistration Allows this CA certificate to be used for auto registration of device certificates.
		 * @return {RegisterCACertificateResponse} Success
		 */
		RegisterCACertificate(setAsActive: boolean, allowAutoRegistration: boolean, requestBody: RegisterCACertificateBody, headersHandler?: () => {[header: string]: string}): Promise<RegisterCACertificateResponse> {
			return fetch(this.baseUri + '/cacertificate?setAsActive=' + setAsActive + '&allowAutoRegistration=' + allowAutoRegistration, { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Registers a device certificate with AWS IoT. If you have more than one CA certificate that has the same subject field, you must specify the CA certificate that was used to sign the device certificate being registered.
		 * Post /certificate/register
		 * @param {boolean} setAsActive A boolean value that specifies if the certificate is set to active.
		 * @return {RegisterCertificateResponse} Success
		 */
		RegisterCertificate(setAsActive: boolean, requestBody: RegisterCertificateBody, headersHandler?: () => {[header: string]: string}): Promise<RegisterCertificateResponse> {
			return fetch(this.baseUri + '/certificate/register?setAsActive=' + setAsActive, { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Register a certificate that does not have a certificate authority (CA).
		 * Post /certificate/register-no-ca
		 * @return {RegisterCertificateWithoutCAResponse} Success
		 */
		RegisterCertificateWithoutCA(requestBody: RegisterCertificateWithoutCABody, headersHandler?: () => {[header: string]: string}): Promise<RegisterCertificateWithoutCAResponse> {
			return fetch(this.baseUri + '/certificate/register-no-ca', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Removes the given thing from the billing group.
		 * Put /billing-groups/removeThingFromBillingGroup
		 * @return {RemoveThingFromBillingGroupResponse} Success
		 */
		RemoveThingFromBillingGroup(requestBody: RemoveThingFromBillingGroupBody, headersHandler?: () => {[header: string]: string}): Promise<RemoveThingFromBillingGroupResponse> {
			return fetch(this.baseUri + '/billing-groups/removeThingFromBillingGroup', { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Remove the specified thing from the specified group.
		 * Put /thing-groups/removeThingFromThingGroup
		 * @return {RemoveThingFromThingGroupResponse} Success
		 */
		RemoveThingFromThingGroup(requestBody: RemoveThingFromThingGroupBody, headersHandler?: () => {[header: string]: string}): Promise<RemoveThingFromThingGroupResponse> {
			return fetch(this.baseUri + '/thing-groups/removeThingFromThingGroup', { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * The query search index.
		 * Post /indices/search
		 * @return {SearchIndexResponse} Success
		 */
		SearchIndex(requestBody: SearchIndexBody, headersHandler?: () => {[header: string]: string}): Promise<SearchIndexResponse> {
			return fetch(this.baseUri + '/indices/search', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Starts an on-demand Device Defender audit.
		 * Post /audit/tasks
		 * @return {StartOnDemandAuditTaskResponse} Success
		 */
		StartOnDemandAuditTask(requestBody: StartOnDemandAuditTaskBody, headersHandler?: () => {[header: string]: string}): Promise<StartOnDemandAuditTaskResponse> {
			return fetch(this.baseUri + '/audit/tasks', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Cancels a bulk thing provisioning task.
		 * Put /thing-registration-tasks/{taskId}/cancel
		 * @param {string} taskId The bulk thing provisioning task ID.
		 * @return {StopThingRegistrationTaskResponse} Success
		 */
		StopThingRegistrationTask(taskId: string, headersHandler?: () => {[header: string]: string}): Promise<StopThingRegistrationTaskResponse> {
			return fetch(this.baseUri + '/thing-registration-tasks/' + (taskId == null ? '' : encodeURIComponent(taskId)) + '/cancel', { method: 'put', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Adds to or modifies the tags of the given resource. Tags are metadata which can be used to manage a resource.
		 * Post /tags
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceBody, headersHandler?: () => {[header: string]: string}): Promise<TagResourceResponse> {
			return fetch(this.baseUri + '/tags', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Tests if a specified principal is authorized to perform an AWS IoT action on a specified resource. Use this to test and debug the authorization behavior of devices that connect to the AWS IoT device gateway.
		 * Post /test-authorization
		 * @param {string} clientId The MQTT client ID.
		 * @return {TestAuthorizationResponse} Success
		 */
		TestAuthorization(clientId: string, requestBody: TestAuthorizationBody, headersHandler?: () => {[header: string]: string}): Promise<TestAuthorizationResponse> {
			return fetch(this.baseUri + '/test-authorization?clientId=' + (clientId == null ? '' : encodeURIComponent(clientId)), { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Tests a custom authorization behavior by invoking a specified custom authorizer. Use this to test and debug the custom authorization behavior of devices that connect to the AWS IoT device gateway.
		 * Post /authorizer/{authorizerName}/test
		 * @param {string} authorizerName The custom authorizer name.
		 * @return {TestInvokeAuthorizerResponse} Success
		 */
		TestInvokeAuthorizer(authorizerName: string, requestBody: TestInvokeAuthorizerBody, headersHandler?: () => {[header: string]: string}): Promise<TestInvokeAuthorizerResponse> {
			return fetch(this.baseUri + '/authorizer/' + (authorizerName == null ? '' : encodeURIComponent(authorizerName)) + '/test', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Removes the given tags (metadata) from the resource.
		 * Post /untag
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceBody, headersHandler?: () => {[header: string]: string}): Promise<UntagResourceResponse> {
			return fetch(this.baseUri + '/untag', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * <p>Updates the status of the specified certificate. This operation is idempotent.</p> <p>Moving a certificate from the ACTIVE state (including REVOKED) will not disconnect currently connected devices, but these devices will be unable to reconnect.</p> <p>The ACTIVE state is required to authenticate devices connecting to AWS IoT using a certificate.</p>
		 * Put /certificates/{certificateId}#newStatus
		 * @param {string} certificateId The ID of the certificate. (The last part of the certificate ARN contains the certificate ID.)
		 * @param {CertificateStatus} newStatus <p>The new status.</p> <p> <b>Note:</b> Setting the status to PENDING_TRANSFER or PENDING_ACTIVATION will result in an exception being thrown. PENDING_TRANSFER and PENDING_ACTIVATION are statuses used internally by AWS IoT. They are not intended for developer use.</p> <p> <b>Note:</b> The status value REGISTER_INACTIVE is deprecated and should not be used.</p>
		 * @return {void} Success
		 */
		UpdateCertificate(certificateId: string, newStatus: CertificateStatus, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + '/certificates/' + (certificateId == null ? '' : encodeURIComponent(certificateId)) + '#newStatus&newStatus=' + newStatus, { method: 'put', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Updates the groups to which the thing belongs.
		 * Put /thing-groups/updateThingGroupsForThing
		 * @return {UpdateThingGroupsForThingResponse} Success
		 */
		UpdateThingGroupsForThing(requestBody: UpdateThingGroupsForThingBody, headersHandler?: () => {[header: string]: string}): Promise<UpdateThingGroupsForThingResponse> {
			return fetch(this.baseUri + '/thing-groups/updateThingGroupsForThing', { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Validates a Device Defender security profile behaviors specification.
		 * Post /security-profile-behaviors/validate
		 * @return {ValidateSecurityProfileBehaviorsResponse} Success
		 */
		ValidateSecurityProfileBehaviors(requestBody: ValidateSecurityProfileBehaviorsBody, headersHandler?: () => {[header: string]: string}): Promise<ValidateSecurityProfileBehaviorsResponse> {
			return fetch(this.baseUri + '/security-profile-behaviors/validate', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}
	}

	export interface AddThingToBillingGroupBody {

		/**
		 * The name of the billing group.
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9:_-]+
		 */
		billingGroupName?: string;

		/**The ARN of the billing group. */
		billingGroupArn?: string;

		/**
		 * The name of the thing to be added to the billing group.
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9:_-]+
		 */
		thingName?: string;

		/**The ARN of the thing to be added to the billing group. */
		thingArn?: string;
	}

	export interface AddThingToThingGroupBody {

		/**
		 * The name of the group to which you are adding a thing.
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9:_-]+
		 */
		thingGroupName?: string;

		/**The ARN of the group to which you are adding a thing. */
		thingGroupArn?: string;

		/**
		 * The name of the thing to add to a group.
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9:_-]+
		 */
		thingName?: string;

		/**The ARN of the thing to add to a group. */
		thingArn?: string;

		/**Override dynamic thing groups with static thing groups when 10-group limit is reached. If a thing belongs to 10 thing groups, and one or more of those groups are dynamic thing groups, adding a thing to a static group removes the thing from the last dynamic group. */
		overrideDynamicGroups?: boolean;
	}

	export interface AssociateTargetsWithJobBody {

		/**
		 * A list of thing group ARNs that define the targets of the job.
		 * Minimum items: 1
		 */
		targets: Array<TargetArn>;

		/**
		 * An optional comment string describing why the job was associated with the targets.
		 * Max length: 2028
		 * Pattern: [^\p{C}]+
		 */
		comment?: string;
	}

	export interface AttachPolicyBody {

		/**The <a href="https://docs.aws.amazon.com/iot/latest/developerguide/iot-security-identity.html">identity</a> to which the policy is attached. */
		target: string;
	}

	export interface DetachPolicyBody {

		/**The target from which the policy will be detached. */
		target: string;
	}

	export interface CancelJobBody {

		/**
		 * (Optional)A reason code string that explains why the job was canceled.
		 * Max length: 128
		 * Pattern: [\p{Upper}\p{Digit}_]+
		 */
		reasonCode?: string;

		/**
		 * An optional comment string describing why the job was canceled.
		 * Max length: 2028
		 * Pattern: [^\p{C}]+
		 */
		comment?: string;
	}

	export interface CancelJobExecutionBody {

		/**(Optional) The expected current version of the job execution. Each time you update the job execution, its version is incremented. If the version of the job execution stored in Jobs does not match, the update is rejected with a VersionMismatch error, and an ErrorResponse that contains the current job execution status data is returned. (This makes it unnecessary to perform a separate DescribeJobExecution request in order to obtain the job execution status data.) */
		expectedVersion?: number;

		/**A collection of name/value pairs that describe the status of the job execution. If not specified, the statusDetails are unchanged. You can specify at most 10 name/value pairs. */
		statusDetails?: string;
	}

	export interface SetDefaultAuthorizerBody {

		/**
		 * The authorizer name.
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [\w=,@-]+
		 */
		authorizerName: string;
	}

	export interface CreateAuthorizerBody {

		/**The ARN of the authorizer's Lambda function. */
		authorizerFunctionArn: string;

		/**
		 * The name of the token key used to extract the token from the HTTP headers.
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_-]+
		 */
		tokenKeyName?: string;

		/**The public keys used to verify the digital signature returned by your custom authentication service. */
		tokenSigningPublicKeys?: string;

		/**The status of the create authorizer request. */
		status?: CreateAuthorizerBodyStatus;

		/**<p>Metadata which can be used to manage the custom authorizer.</p> <note> <p>For URI Request parameters use format: ...key1=value1&amp;key2=value2...</p> <p>For the CLI command-line parameter use format: &amp;&amp;tags "key1=value1&amp;key2=value2..."</p> <p>For the cli-input-json file use format: "tags": "key1=value1&amp;key2=value2..."</p> </note> */
		tags?: Array<Tag>;

		/**Specifies whether AWS IoT validates the token signature in an authorization request. */
		signingDisabled?: boolean;
	}

	export enum CreateAuthorizerBodyStatus { ACTIVE = 0, INACTIVE = 1 }

	export interface UpdateAuthorizerBody {

		/**The ARN of the authorizer's Lambda function. */
		authorizerFunctionArn?: string;

		/**
		 * The key used to extract the token from the HTTP headers.
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_-]+
		 */
		tokenKeyName?: string;

		/**The public keys used to verify the token signature. */
		tokenSigningPublicKeys?: string;

		/**The status of the update authorizer request. */
		status?: UpdateAuthorizerBodyStatus;
	}

	export enum UpdateAuthorizerBodyStatus { ACTIVE = 0, INACTIVE = 1 }

	export interface CreateBillingGroupBody {

		/**The properties of a billing group. */
		billingGroupProperties?: string;

		/**Metadata which can be used to manage the billing group. */
		tags?: Array<Tag>;
	}

	export interface CreateCertificateFromCsrBody {

		/**
		 * The certificate signing request (CSR).
		 * Min length: 1
		 */
		certificateSigningRequest: string;
	}

	export interface CreateDimensionBody {

		/**Specifies the type of dimension. Supported types: <code>TOPIC_FILTER.</code> */
		type: CreateDimensionBodyType;

		/**
		 * Specifies the value or list of values for the dimension. For <code>TOPIC_FILTER</code> dimensions, this is a pattern used to match the MQTT topic (for example, "admin/#").
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		stringValues: Array<DimensionStringValue>;

		/**Metadata that can be used to manage the dimension. */
		tags?: Array<Tag>;

		/**
		 * Each dimension must have a unique client request token. If you try to create a new dimension with the same token as a dimension that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9-_]+$
		 */
		clientRequestToken: string;
	}

	export enum CreateDimensionBodyType { TOPIC_FILTER = 0 }

	export interface CreateDomainConfigurationBody {

		/**
		 * The name of the domain.
		 * Max length: 253
		 * Min length: 1
		 */
		domainName?: string;

		/**
		 * The ARNs of the certificates that AWS IoT passes to the device during the TLS handshake. Currently you can specify only one certificate ARN. This value is not required for AWS-managed domains.
		 * Minimum items: 0
		 * Maximum items: 1
		 */
		serverCertificateArns?: Array<AcmCertificateArn>;

		/**
		 * The certificate used to validate the server certificate and prove domain name ownership. This certificate must be signed by a public certificate authority. This value is not required for AWS-managed domains.
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:aws:acm:[a-z]{2}-(gov-)?[a-z]{4,9}-\d{1}:\d{12}:certificate/?[a-zA-Z0-9/-]+
		 */
		validationCertificateArn?: string;

		/**An object that specifies the authorization service for a domain. */
		authorizerConfig?: string;

		/**<p>The type of service delivered by the endpoint.</p> <note> <p>AWS IoT Core currently supports only the <code>DATA</code> service type.</p> </note> */
		serviceType?: CreateDomainConfigurationBodyServiceType;

		/**<p>Metadata which can be used to manage the domain configuration.</p> <note> <p>For URI Request parameters use format: ...key1=value1&amp;key2=value2...</p> <p>For the CLI command-line parameter use format: &amp;&amp;tags "key1=value1&amp;key2=value2..."</p> <p>For the cli-input-json file use format: "tags": "key1=value1&amp;key2=value2..."</p> </note> */
		tags?: Array<Tag>;
	}

	export enum CreateDomainConfigurationBodyServiceType { DATA = 0, CREDENTIAL_PROVIDER = 1, JOBS = 2 }

	export interface UpdateDomainConfigurationBody {

		/**An object that specifies the authorization service for a domain. */
		authorizerConfig?: string;

		/**The status to which the domain configuration should be updated. */
		domainConfigurationStatus?: UpdateDomainConfigurationBodyDomainConfigurationStatus;

		/**Removes the authorization configuration from a domain. */
		removeAuthorizerConfig?: boolean;
	}

	export enum UpdateDomainConfigurationBodyDomainConfigurationStatus { ENABLED = 0, DISABLED = 1 }

	export interface CreateDynamicThingGroupBody {

		/**Thing group properties. */
		thingGroupProperties?: string;

		/**
		 * <p>The dynamic thing group index name.</p> <note> <p>Currently one index is supported: "AWS_Things".</p> </note>
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9:_-]+
		 */
		indexName?: string;

		/**
		 * <p>The dynamic thing group search query string.</p> <p>See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/query-syntax.html">Query Syntax</a> for information about query string syntax.</p>
		 * Min length: 1
		 */
		queryString: string;

		/**<p>The dynamic thing group query version.</p> <note> <p>Currently one query version is supported: "2017-09-30". If not specified, the query version defaults to this value.</p> </note> */
		queryVersion?: string;

		/**Metadata which can be used to manage the dynamic thing group. */
		tags?: Array<Tag>;
	}

	export interface CreateJobBody {

		/**
		 * A list of things and thing groups to which the job should be sent.
		 * Minimum items: 1
		 */
		targets: Array<TargetArn>;

		/**
		 * An S3 link to the job document.
		 * Max length: 1350
		 * Min length: 1
		 */
		documentSource?: string;

		/**
		 * <p>The job document.</p> <note> <p>If the job document resides in an S3 bucket, you must use a placeholder link when specifying the document.</p> <p>The placeholder link is of the following form:</p> <p> <code>${aws:iot:s3-presigned-url:https://s3.amazonaws.com/<i>bucket</i>/<i>key</i>}</code> </p> <p>where <i>bucket</i> is your bucket name and <i>key</i> is the object in the bucket to which you are linking.</p> </note>
		 * Max length: 32768
		 */
		document?: string;

		/**
		 * A short text description of the job.
		 * Max length: 2028
		 * Pattern: [^\p{C}]+
		 */
		description?: string;

		/**Configuration for pre-signed S3 URLs. */
		presignedUrlConfig?: string;

		/**Specifies whether the job will continue to run (CONTINUOUS), or will be complete after all those things specified as targets have completed the job (SNAPSHOT). If continuous, the job may also be run on a thing when a change is detected in a target. For example, a job will run on a thing when the thing is added to a target group, even after the job was completed by all things originally in the group. */
		targetSelection?: CreateJobBodyTargetSelection;

		/**Allows you to create a staged rollout of a job. */
		jobExecutionsRolloutConfig?: string;

		/**Details of abort criteria to abort the job. */
		abortConfig?: string;

		/**Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>. */
		timeoutConfig?: string;

		/**Metadata which can be used to manage the job. */
		tags?: Array<Tag>;
	}

	export enum CreateJobBodyTargetSelection { CONTINUOUS = 0, SNAPSHOT = 1 }

	export interface CreateMitigationActionBody {

		/**
		 * The ARN of the IAM role that is used to apply the mitigation action.
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn: string;

		/**The set of parameters for this mitigation action. You can specify only one type of parameter (in other words, you can apply only one action for each defined mitigation action). */
		actionParams: string;

		/**Metadata that can be used to manage the mitigation action. */
		tags?: Array<Tag>;
	}

	export interface CreateOTAUpdateBody {

		/**
		 * The description of the OTA update.
		 * Max length: 2028
		 * Pattern: [^\p{C}]+
		 */
		description?: string;

		/**
		 * The targeted devices to receive OTA updates.
		 * Minimum items: 1
		 */
		targets: Array<Target>;

		/**
		 * The protocol used to transfer the OTA update image. Valid values are [HTTP], [MQTT], [HTTP, MQTT]. When both HTTP and MQTT are specified, the target device can choose the protocol.
		 * Minimum items: 1
		 * Maximum items: 2
		 */
		protocols?: Array<Protocol>;

		/**Specifies whether the update will continue to run (CONTINUOUS), or will be complete after all the things specified as targets have completed the update (SNAPSHOT). If continuous, the update may also be run on a thing when a change is detected in a target. For example, an update will run on a thing when the thing is added to a target group, even after the update was completed by all things originally in the group. Valid values: CONTINUOUS | SNAPSHOT. */
		targetSelection?: CreateOTAUpdateBodyTargetSelection;

		/**Configuration for the rollout of OTA updates. */
		awsJobExecutionsRolloutConfig?: string;

		/**Configuration information for pre-signed URLs. Valid when <code>protocols</code> contains HTTP. */
		awsJobPresignedUrlConfig?: string;

		/**
		 * The files to be streamed by the OTA update.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		files: Array<OTAUpdateFile>;

		/**
		 * The IAM role that allows access to the AWS IoT Jobs service.
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn: string;

		/**A list of additional OTA update parameters which are name-value pairs. */
		additionalParameters?: string;

		/**Metadata which can be used to manage updates. */
		tags?: Array<Tag>;
	}

	export enum CreateOTAUpdateBodyTargetSelection { CONTINUOUS = 0, SNAPSHOT = 1 }

	export interface CreatePolicyBody {

		/**The JSON document that describes the policy. <b>policyDocument</b> must have a minimum length of 1, with a maximum length of 2048, excluding whitespace. */
		policyDocument: string;

		/**<p>Metadata which can be used to manage the policy.</p> <note> <p>For URI Request parameters use format: ...key1=value1&amp;key2=value2...</p> <p>For the CLI command-line parameter use format: &amp;&amp;tags "key1=value1&amp;key2=value2..."</p> <p>For the cli-input-json file use format: "tags": "key1=value1&amp;key2=value2..."</p> </note> */
		tags?: Array<Tag>;
	}

	export interface CreatePolicyVersionBody {

		/**The JSON document that describes the policy. Minimum length of 1. Maximum length of 2048, excluding whitespace. */
		policyDocument: string;
	}

	export interface CreateProvisioningTemplateBody {

		/**
		 * The name of the fleet provisioning template.
		 * Max length: 36
		 * Min length: 1
		 * Pattern: ^[0-9A-Za-z_-]+$
		 */
		templateName: string;

		/**
		 * The description of the fleet provisioning template.
		 * Max length: 500
		 * Min length: 0
		 * Pattern: [^\p{C}]*
		 */
		description?: string;

		/**The JSON formatted contents of the fleet provisioning template. */
		templateBody: string;

		/**True to enable the fleet provisioning template, otherwise false. */
		enabled?: boolean;

		/**
		 * The role ARN for the role associated with the fleet provisioning template. This IoT role grants permission to provision a device.
		 * Max length: 2048
		 * Min length: 20
		 */
		provisioningRoleArn: string;

		/**Structure that contains <code>payloadVersion</code> and <code>targetArn</code>. */
		preProvisioningHook?: string;

		/**<p>Metadata which can be used to manage the fleet provisioning template.</p> <note> <p>For URI Request parameters use format: ...key1=value1&amp;key2=value2...</p> <p>For the CLI command-line parameter use format: &amp;&amp;tags "key1=value1&amp;key2=value2..."</p> <p>For the cli-input-json file use format: "tags": "key1=value1&amp;key2=value2..."</p> </note> */
		tags?: Array<Tag>;
	}

	export interface CreateProvisioningTemplateVersionBody {

		/**The JSON formatted contents of the fleet provisioning template. */
		templateBody: string;
	}

	export interface CreateRoleAliasBody {

		/**
		 * The role ARN.
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn: string;

		/**
		 * How long (in seconds) the credentials will be valid.
		 * Minimum: 900
		 * Maximum: 3600
		 */
		credentialDurationSeconds?: number;

		/**<p>Metadata which can be used to manage the role alias.</p> <note> <p>For URI Request parameters use format: ...key1=value1&amp;key2=value2...</p> <p>For the CLI command-line parameter use format: &amp;&amp;tags "key1=value1&amp;key2=value2..."</p> <p>For the cli-input-json file use format: "tags": "key1=value1&amp;key2=value2..."</p> </note> */
		tags?: Array<Tag>;
	}

	export interface UpdateRoleAliasBody {

		/**
		 * The role ARN.
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn?: string;

		/**
		 * The number of seconds the credential will be valid.
		 * Minimum: 900
		 * Maximum: 3600
		 */
		credentialDurationSeconds?: number;
	}

	export interface CreateScheduledAuditBody {

		/**How often the scheduled audit takes place. Can be one of "DAILY", "WEEKLY", "BIWEEKLY" or "MONTHLY". The start time of each audit is determined by the system. */
		frequency: CreateScheduledAuditBodyFrequency;

		/**
		 * The day of the month on which the scheduled audit takes place. Can be "1" through "31" or "LAST". This field is required if the "frequency" parameter is set to "MONTHLY". If days 29-31 are specified, and the month does not have that many days, the audit takes place on the "LAST" day of the month.
		 * Pattern: ^([1-9]|[12][0-9]|3[01])$|^LAST$
		 */
		dayOfMonth?: string;

		/**The day of the week on which the scheduled audit takes place. Can be one of "SUN", "MON", "TUE", "WED", "THU", "FRI", or "SAT". This field is required if the "frequency" parameter is set to "WEEKLY" or "BIWEEKLY". */
		dayOfWeek?: CreateScheduledAuditBodyDayOfWeek;

		/**Which checks are performed during the scheduled audit. Checks must be enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.) */
		targetCheckNames: Array<AuditCheckName>;

		/**Metadata that can be used to manage the scheduled audit. */
		tags?: Array<Tag>;
	}

	export enum CreateScheduledAuditBodyFrequency { DAILY = 0, WEEKLY = 1, BIWEEKLY = 2, MONTHLY = 3 }

	export enum CreateScheduledAuditBodyDayOfWeek { SUN = 0, MON = 1, TUE = 2, WED = 3, THU = 4, FRI = 5, SAT = 6 }

	export interface CreateSecurityProfileBody {

		/**
		 * A description of the security profile.
		 * Max length: 1000
		 * Pattern: [\p{Graph}\x20]*
		 */
		securityProfileDescription?: string;

		/**
		 * Specifies the behaviors that, when violated by a device (thing), cause an alert.
		 * Maximum items: 100
		 */
		behaviors?: Array<Behavior>;

		/**Specifies the destinations to which alerts are sent. (Alerts are always sent to the console.) Alerts are generated when a device (thing) violates a behavior. */
		alertTargets?: string;

		/**<p>A list of metrics whose data is retained (stored). By default, data is retained for any metric used in the profile's <code>behaviors</code>, but it is also retained for any metric specified here.</p> <p> <b>Note:</b> This API field is deprecated. Please use <a>CreateSecurityProfileRequest$additionalMetricsToRetainV2</a> instead.</p> */
		additionalMetricsToRetain?: Array<BehaviorMetric>;

		/**A list of metrics whose data is retained (stored). By default, data is retained for any metric used in the profile's <code>behaviors</code>, but it is also retained for any metric specified here. */
		additionalMetricsToRetainV2?: Array<MetricToRetain>;

		/**Metadata that can be used to manage the security profile. */
		tags?: Array<Tag>;
	}

	export interface CreateStreamBody {

		/**
		 * A description of the stream.
		 * Max length: 2028
		 * Pattern: [^\p{C}]+
		 */
		description?: string;

		/**
		 * The files to stream.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		files: Array<StreamFile>;

		/**
		 * An IAM role that allows the IoT service principal assumes to access your S3 files.
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn: string;

		/**Metadata which can be used to manage streams. */
		tags?: Array<Tag>;
	}

	export interface UpdateStreamBody {

		/**
		 * The description of the stream.
		 * Max length: 2028
		 * Pattern: [^\p{C}]+
		 */
		description?: string;

		/**
		 * The files associated with the stream.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		files?: Array<StreamFile>;

		/**
		 * An IAM role that allows the IoT service principal assumes to access your S3 files.
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn?: string;
	}

	export interface CreateThingBody {

		/**
		 * The name of the thing type associated with the new thing.
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9:_-]+
		 */
		thingTypeName?: string;

		/**The attribute payload. */
		attributePayload?: string;

		/**
		 * The name of the billing group the thing will be added to.
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9:_-]+
		 */
		billingGroupName?: string;
	}

	export interface CreateThingGroupBody {

		/**
		 * The name of the parent thing group.
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9:_-]+
		 */
		parentGroupName?: string;

		/**Thing group properties. */
		thingGroupProperties?: string;

		/**Metadata which can be used to manage the thing group. */
		tags?: Array<Tag>;
	}

	export interface CreateThingTypeBody {

		/**The ThingTypeProperties contains information about the thing type including: a thing type description, and a list of searchable thing attribute names. */
		thingTypeProperties?: string;

		/**Metadata which can be used to manage the thing type. */
		tags?: Array<Tag>;
	}

	export interface CreateTopicRuleBody {

		/**Describes a rule. */
		topicRulePayload: string;
	}

	export interface CreateTopicRuleDestinationBody {

		/**Configuration of the topic rule destination. */
		destinationConfiguration: string;
	}

	export interface UpdateCACertificateBody {

		/**The registration configuration. */
		registrationConfig?: string;

		/**If true, removes auto registration. */
		removeAutoRegistration?: boolean;
	}

	export interface DeprecateThingTypeBody {

		/**Whether to undeprecate a deprecated thing type. If <b>true</b>, the thing type will not be deprecated anymore and you can associate it with things. */
		undoDeprecate?: boolean;
	}

	export interface StartAuditMitigationActionsTaskBody {

		/**Used in MitigationActionParams, this information identifies the target findings to which the mitigation actions are applied. Only one entry appears. */
		target: string;

		/**For an audit check, specifies which mitigation actions to apply. Those actions must be defined in your AWS account. */
		auditCheckToActionsMapping: string;

		/**
		 * Each audit mitigation task must have a unique client request token. If you try to start a new task with the same token as a task that already exists, an exception occurs. If you omit this value, a unique client request token is generated automatically.
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9-_]+$
		 */
		clientRequestToken: string;
	}

	export interface GetCardinalityBody {

		/**
		 * The name of the index to search.
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9:_-]+
		 */
		indexName?: string;

		/**
		 * The search query.
		 * Min length: 1
		 */
		queryString: string;

		/**
		 * The field to aggregate.
		 * Min length: 1
		 */
		aggregationField?: string;

		/**The query version. */
		queryVersion?: string;
	}

	export interface GetEffectivePoliciesBody {

		/**The principal. */
		principal?: string;

		/**The Cognito identity pool ID. */
		cognitoIdentityPoolId?: string;
	}

	export interface UpdateIndexingConfigurationBody {

		/**The thing indexing configuration. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/managing-index.html">Managing Thing Indexing</a>. */
		thingIndexingConfiguration?: string;

		/**Thing group indexing configuration. */
		thingGroupIndexingConfiguration?: string;
	}

	export interface SetLoggingOptionsBody {

		/**Describes the logging options payload. */
		loggingOptionsPayload: string;
	}

	export interface GetPercentilesBody {

		/**
		 * The name of the index to search.
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9:_-]+
		 */
		indexName?: string;

		/**
		 * The query string.
		 * Min length: 1
		 */
		queryString: string;

		/**
		 * The field to aggregate.
		 * Min length: 1
		 */
		aggregationField?: string;

		/**The query version. */
		queryVersion?: string;

		/**The percentile groups returned. */
		percents?: Array<Percent>;
	}

	export interface GetStatisticsBody {

		/**
		 * The name of the index to search. The default value is <code>AWS_Things</code>.
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9:_-]+
		 */
		indexName?: string;

		/**
		 * The query used to search. You can specify "*" for the query string to get the count of all indexed things in your AWS account.
		 * Min length: 1
		 */
		queryString: string;

		/**
		 * The aggregation field name.
		 * Min length: 1
		 */
		aggregationField?: string;

		/**The version of the query used to search. */
		queryVersion?: string;
	}

	export interface SetV2LoggingOptionsBody {

		/**The ARN of the role that allows IoT to write to Cloudwatch logs. */
		roleArn?: string;

		/**The default logging level. */
		defaultLogLevel?: SetV2LoggingOptionsBodyDefaultLogLevel;

		/**If true all logs are disabled. The default is false. */
		disableAllLogs?: boolean;
	}

	export enum SetV2LoggingOptionsBodyDefaultLogLevel { DEBUG = 0, INFO = 1, ERROR = 2, WARN = 3, DISABLED = 4 }

	export interface ListAuditFindingsBody {

		/**
		 * A filter to limit results to the audit with the specified ID. You must specify either the taskId or the startTime and endTime, but not both.
		 * Max length: 40
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9\-]+
		 */
		taskId?: string;

		/**An audit check name. Checks must be enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.) */
		checkName?: string;

		/**Information that identifies the noncompliant resource. */
		resourceIdentifier?: string;

		/**
		 * The maximum number of results to return at one time. The default is 25.
		 * Minimum: 1
		 * Maximum: 250
		 */
		maxResults?: number;

		/**The token for the next set of results. */
		nextToken?: string;

		/**A filter to limit results to those found after the specified time. You must specify either the startTime and endTime or the taskId, but not both. */
		startTime?: Date;

		/**A filter to limit results to those found before the specified time. You must specify either the startTime and endTime or the taskId, but not both. */
		endTime?: Date;
	}

	export interface StartThingRegistrationTaskBody {

		/**The provisioning template. */
		templateBody: string;

		/**
		 * The S3 bucket that contains the input file.
		 * Max length: 256
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9._-]+
		 */
		inputFileBucket: string;

		/**
		 * The name of input file within the S3 bucket. This file contains a newline delimited JSON file. Each line contains the parameter values to provision one device (thing).
		 * Max length: 1024
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9!_.*'()-\/]+
		 */
		inputFileKey: string;

		/**
		 * The IAM role ARN that grants permission the input file.
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn: string;
	}

	export interface RegisterThingBody {

		/**The provisioning template. See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/provision-w-cert.html">Provisioning Devices That Have Device Certificates</a> for more information. */
		templateBody: string;

		/**The parameters for provisioning a thing. See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/provision-template.html">Provisioning Templates</a> for more information. */
		parameters?: string;
	}

	export interface SetV2LoggingLevelBody {

		/**A log target. */
		logTarget: string;

		/**The log level. */
		logLevel: SetV2LoggingLevelBodyLogLevel;
	}

	export enum SetV2LoggingLevelBodyLogLevel { DEBUG = 0, INFO = 1, ERROR = 2, WARN = 3, DISABLED = 4 }

	export interface RegisterCACertificateBody {

		/**
		 * The PEM of a certificate.
		 * Max length: 65536
		 * Min length: 1
		 */
		caCertificate: string;

		/**
		 * The PEM of a certificate.
		 * Max length: 65536
		 * Min length: 1
		 */
		verificationCertificate: string;

		/**The registration configuration. */
		registrationConfig?: string;

		/**<p>Metadata which can be used to manage the CA certificate.</p> <note> <p>For URI Request parameters use format: ...key1=value1&amp;key2=value2...</p> <p>For the CLI command-line parameter use format: &amp;&amp;tags "key1=value1&amp;key2=value2..."</p> <p>For the cli-input-json file use format: "tags": "key1=value1&amp;key2=value2..."</p> </note> */
		tags?: Array<Tag>;
	}

	export interface RegisterCertificateBody {

		/**
		 * The PEM of a certificate.
		 * Max length: 65536
		 * Min length: 1
		 */
		certificatePem: string;

		/**
		 * The PEM of a certificate.
		 * Max length: 65536
		 * Min length: 1
		 */
		caCertificatePem?: string;

		/**The status of the register certificate request. */
		status?: RegisterCertificateBodyStatus;
	}

	export enum RegisterCertificateBodyStatus { ACTIVE = 0, INACTIVE = 1, REVOKED = 2, PENDING_TRANSFER = 3, REGISTER_INACTIVE = 4, PENDING_ACTIVATION = 5 }

	export interface RegisterCertificateWithoutCABody {

		/**
		 * The PEM of a certificate.
		 * Max length: 65536
		 * Min length: 1
		 */
		certificatePem: string;

		/**The status of the register certificate request. */
		status?: RegisterCertificateWithoutCABodyStatus;
	}

	export enum RegisterCertificateWithoutCABodyStatus { ACTIVE = 0, INACTIVE = 1, REVOKED = 2, PENDING_TRANSFER = 3, REGISTER_INACTIVE = 4, PENDING_ACTIVATION = 5 }

	export interface RemoveThingFromBillingGroupBody {

		/**
		 * The name of the billing group.
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9:_-]+
		 */
		billingGroupName?: string;

		/**The ARN of the billing group. */
		billingGroupArn?: string;

		/**
		 * The name of the thing to be removed from the billing group.
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9:_-]+
		 */
		thingName?: string;

		/**The ARN of the thing to be removed from the billing group. */
		thingArn?: string;
	}

	export interface RemoveThingFromThingGroupBody {

		/**
		 * The group name.
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9:_-]+
		 */
		thingGroupName?: string;

		/**The group ARN. */
		thingGroupArn?: string;

		/**
		 * The name of the thing to remove from the group.
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9:_-]+
		 */
		thingName?: string;

		/**The ARN of the thing to remove from the group. */
		thingArn?: string;
	}

	export interface SearchIndexBody {

		/**
		 * The search index name.
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9:_-]+
		 */
		indexName?: string;

		/**
		 * The search query string.
		 * Min length: 1
		 */
		queryString: string;

		/**The token used to get the next set of results, or <code>null</code> if there are no additional results. */
		nextToken?: string;

		/**
		 * The maximum number of results to return at one time.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults?: number;

		/**The query version. */
		queryVersion?: string;
	}

	export interface StartOnDemandAuditTaskBody {

		/**Which checks are performed during the audit. The checks you specify must be enabled for your account or an exception occurs. Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are enabled or <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled. */
		targetCheckNames: Array<AuditCheckName>;
	}

	export interface TagResourceBody {

		/**The ARN of the resource. */
		resourceArn: string;

		/**The new or modified tags for the resource. */
		tags: Array<Tag>;
	}

	export interface TestAuthorizationBody {

		/**The principal. */
		principal?: string;

		/**The Cognito identity pool ID. */
		cognitoIdentityPoolId?: string;

		/**
		 * A list of authorization info objects. Simulating authorization will create a response for each <code>authInfo</code> object in the list.
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		authInfos: Array<AuthInfo>;

		/**When testing custom authorization, the policies specified here are treated as if they are attached to the principal being authorized. */
		policyNamesToAdd?: Array<PolicyName>;

		/**When testing custom authorization, the policies specified here are treated as if they are not attached to the principal being authorized. */
		policyNamesToSkip?: Array<PolicyName>;
	}

	export interface TestInvokeAuthorizerBody {

		/**
		 * The token returned by your custom authentication service.
		 * Max length: 6144
		 * Min length: 1
		 */
		token?: string;

		/**
		 * The signature made with the token and your custom authentication service's private key. This value must be Base-64-encoded.
		 * Max length: 2560
		 * Min length: 1
		 * Pattern: [A-Za-z0-9+/]+={0,2}
		 */
		tokenSignature?: string;

		/**Specifies the HTTP context to use for the test authorizer request. */
		httpContext?: string;

		/**Specifies the MQTT context to use for the test authorizer request */
		mqttContext?: string;

		/**Specifies the TLS context to use for the test authorizer request. */
		tlsContext?: string;
	}

	export interface UntagResourceBody {

		/**The ARN of the resource. */
		resourceArn: string;

		/**A list of the keys of the tags to be removed from the resource. */
		tagKeys: Array<TagKey>;
	}

	export interface UpdateThingGroupsForThingBody {

		/**
		 * The thing whose group memberships will be updated.
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9:_-]+
		 */
		thingName?: string;

		/**The groups to which the thing will be added. */
		thingGroupsToAdd?: Array<ThingGroupName>;

		/**The groups from which the thing will be removed. */
		thingGroupsToRemove?: Array<ThingGroupName>;

		/**Override dynamic thing groups with static thing groups when 10-group limit is reached. If a thing belongs to 10 thing groups, and one or more of those groups are dynamic thing groups, adding a thing to a static group removes the thing from the last dynamic group. */
		overrideDynamicGroups?: boolean;
	}

	export interface ValidateSecurityProfileBehaviorsBody {

		/**
		 * Specifies the behaviors that, when violated by a device (thing), cause an alert.
		 * Maximum items: 100
		 */
		behaviors: Array<Behavior>;
	}

}

