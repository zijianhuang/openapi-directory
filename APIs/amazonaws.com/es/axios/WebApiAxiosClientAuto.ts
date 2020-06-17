import Axios from 'axios';
import { AxiosResponse } from 'axios';
export namespace My_Demo_Client {

	/**The result of a <code><a>AcceptInboundCrossClusterSearchConnection</a></code> operation. Contains details of accepted inbound connection. */
	export interface AcceptInboundCrossClusterSearchConnectionResponse {

		/**Specifies details of an inbound connection. */
		CrossClusterSearchConnection?: InboundCrossClusterSearchConnection;
	}


	/**Specifies a key value pair for a resource tag. */
	export interface Tag {

		/**
		 * A string of length from 1 to 128 characters that specifies the key for a Tag. Tag keys must be unique for the Elasticsearch domain to which they are attached.
		 * Max length: 128
		 * Min length: 1
		 */
		Key: string;

		/**
		 * A string of length from 0 to 256 characters that specifies the value for a Tag. Tag values can be null and do not have to be unique in a tag set.
		 * Max length: 256
		 * Min length: 0
		 */
		Value: string;
	}


	/** Container for response returned by <code> <a>AssociatePackage</a> </code> operation.  */
	export interface AssociatePackageResponse {

		/**Information on a package that is associated with a domain. */
		DomainPackageDetails?: DomainPackageDetails;
	}


	/**The result of a <code>CancelElasticsearchServiceSoftwareUpdate</code> operation. Contains the status of the update. */
	export interface CancelElasticsearchServiceSoftwareUpdateResponse {

		/**The current options of an Elasticsearch domain service software options. */
		ServiceSoftwareOptions?: ServiceSoftwareOptions;
	}


	/**The result of a <code>CreateElasticsearchDomain</code> operation. Contains the status of the newly created Elasticsearch domain. */
	export interface CreateElasticsearchDomainResponse {

		/**The current status of an Elasticsearch domain. */
		DomainStatus?: ElasticsearchDomainStatus;
	}

	export enum ESPartitionInstanceType { m3.medium.elasticsearch = 0, m3.large.elasticsearch = 1, m3.xlarge.elasticsearch = 2, m3.2xlarge.elasticsearch = 3, m4.large.elasticsearch = 4, m4.xlarge.elasticsearch = 5, m4.2xlarge.elasticsearch = 6, m4.4xlarge.elasticsearch = 7, m4.10xlarge.elasticsearch = 8, m5.large.elasticsearch = 9, m5.xlarge.elasticsearch = 10, m5.2xlarge.elasticsearch = 11, m5.4xlarge.elasticsearch = 12, m5.12xlarge.elasticsearch = 13, r5.large.elasticsearch = 14, r5.xlarge.elasticsearch = 15, r5.2xlarge.elasticsearch = 16, r5.4xlarge.elasticsearch = 17, r5.12xlarge.elasticsearch = 18, c5.large.elasticsearch = 19, c5.xlarge.elasticsearch = 20, c5.2xlarge.elasticsearch = 21, c5.4xlarge.elasticsearch = 22, c5.9xlarge.elasticsearch = 23, c5.18xlarge.elasticsearch = 24, ultrawarm1.medium.elasticsearch = 25, ultrawarm1.large.elasticsearch = 26, t2.micro.elasticsearch = 27, t2.small.elasticsearch = 28, t2.medium.elasticsearch = 29, r3.large.elasticsearch = 30, r3.xlarge.elasticsearch = 31, r3.2xlarge.elasticsearch = 32, r3.4xlarge.elasticsearch = 33, r3.8xlarge.elasticsearch = 34, i2.xlarge.elasticsearch = 35, i2.2xlarge.elasticsearch = 36, d2.xlarge.elasticsearch = 37, d2.2xlarge.elasticsearch = 38, d2.4xlarge.elasticsearch = 39, d2.8xlarge.elasticsearch = 40, c4.large.elasticsearch = 41, c4.xlarge.elasticsearch = 42, c4.2xlarge.elasticsearch = 43, c4.4xlarge.elasticsearch = 44, c4.8xlarge.elasticsearch = 45, r4.large.elasticsearch = 46, r4.xlarge.elasticsearch = 47, r4.2xlarge.elasticsearch = 48, r4.4xlarge.elasticsearch = 49, r4.8xlarge.elasticsearch = 50, r4.16xlarge.elasticsearch = 51, i3.large.elasticsearch = 52, i3.xlarge.elasticsearch = 53, i3.2xlarge.elasticsearch = 54, i3.4xlarge.elasticsearch = 55, i3.8xlarge.elasticsearch = 56, i3.16xlarge.elasticsearch = 57 }


	/**Specifies the zone awareness configuration for the domain cluster, such as the number of availability zones. */
	export interface ZoneAwarenessConfig {
		AvailabilityZoneCount?: number;
	}

	export enum ESWarmPartitionInstanceType { ultrawarm1.medium.elasticsearch = 0, ultrawarm1.large.elasticsearch = 1 }


	/** The type of EBS volume, standard, gp2, or io1. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank">Configuring EBS-based Storage</a>for more information. */
	export enum VolumeType { standard = 0, gp2 = 1, io1 = 2 }


	/**Log Publishing option that is set for given domain. <br/>Attributes and their details: <ul> <li>CloudWatchLogsLogGroupArn: ARN of the Cloudwatch log group to which log needs to be published.</li> <li>Enabled: Whether the log publishing for given log type is enabled or not</li> </ul>  */
	export interface LogPublishingOption {

		/**ARN of the Cloudwatch log group to which log needs to be published. */
		CloudWatchLogsLogGroupArn?: string;
		Enabled?: boolean;
	}

	export enum TLSSecurityPolicy { Policy-Min-TLS-1-0-2019-07 = 0, Policy-Min-TLS-1-2-2019-07 = 1 }


	/**Credentials for the master user: username and password, ARN, or both. */
	export interface MasterUserOptions {

		/**The Amazon Resource Name (ARN) of the Elasticsearch domain. See <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html" target="_blank">Identifiers for IAM Entities</a> in <i>Using AWS Identity and Access Management</i> for more information. */
		MasterUserARN?: string;
		MasterUserName?: string;
		MasterUserPassword?: string;
	}


	/**The result of a <code><a>CreateOutboundCrossClusterSearchConnection</a></code> request. Contains the details of the newly created cross-cluster search connection. */
	export interface CreateOutboundCrossClusterSearchConnectionResponse {
		SourceDomainInfo?: DomainInformation;
		DestinationDomainInfo?: DomainInformation;
		ConnectionAlias?: string;

		/**Specifies the connection status of an outbound cross-cluster search connection. */
		ConnectionStatus?: OutboundCrossClusterSearchConnectionStatus;
		CrossClusterSearchConnectionId?: string;
	}


	/** Container for response returned by <code> <a>CreatePackage</a> </code> operation.  */
	export interface CreatePackageResponse {

		/**Basic information about a package. */
		PackageDetails?: PackageDetails;
	}


	/**The result of a <code>DeleteElasticsearchDomain</code> request. Contains the status of the pending deletion, or no status if the domain and all of its resources have been deleted. */
	export interface DeleteElasticsearchDomainResponse {

		/**The current status of an Elasticsearch domain. */
		DomainStatus?: ElasticsearchDomainStatus;
	}


	/**The result of a <code><a>DeleteInboundCrossClusterSearchConnection</a></code> operation. Contains details of deleted inbound connection. */
	export interface DeleteInboundCrossClusterSearchConnectionResponse {

		/**Specifies details of an inbound connection. */
		CrossClusterSearchConnection?: InboundCrossClusterSearchConnection;
	}


	/**The result of a <code><a>DeleteOutboundCrossClusterSearchConnection</a></code> operation. Contains details of deleted outbound connection. */
	export interface DeleteOutboundCrossClusterSearchConnectionResponse {

		/**Specifies details of an outbound connection. */
		CrossClusterSearchConnection?: OutboundCrossClusterSearchConnection;
	}


	/** Container for response parameters to <code> <a>DeletePackage</a> </code> operation.  */
	export interface DeletePackageResponse {

		/**Basic information about a package. */
		PackageDetails?: PackageDetails;
	}


	/**The result of a <code>DescribeElasticsearchDomain</code> request. Contains the status of the domain specified in the request. */
	export interface DescribeElasticsearchDomainResponse {

		/**The current status of an Elasticsearch domain. */
		DomainStatus: ElasticsearchDomainStatus;
	}


	/**The result of a <code>DescribeElasticsearchDomainConfig</code> request. Contains the configuration information of the requested domain. */
	export interface DescribeElasticsearchDomainConfigResponse {

		/**The configuration of an Elasticsearch domain. */
		DomainConfig: ElasticsearchDomainConfig;
	}


	/**The result of a <code>DescribeElasticsearchDomains</code> request. Contains the status of the specified domains or all domains owned by the account. */
	export interface DescribeElasticsearchDomainsResponse {

		/**A list that contains the status of each requested Elasticsearch domain. */
		DomainStatusList: Array<ElasticsearchDomainStatus>;
	}


	/** Container for the parameters received from <code> <a>DescribeElasticsearchInstanceTypeLimits</a> </code> operation.  */
	export interface DescribeElasticsearchInstanceTypeLimitsResponse {

		/**Map of Role of the Instance and Limits that are applicable. Role performed by given Instance in Elasticsearch can be one of the following: <ul> <li>data: If the given InstanceType is used as data node</li> <li>master: If the given InstanceType is used as master node</li> <li>ultra_warm: If the given InstanceType is used as warm node</li> </ul> */
		LimitsByRole?: LimitsByRole;
	}


	/**The result of a <code><a>DescribeInboundCrossClusterSearchConnections</a></code> request. Contains the list of connections matching the filter criteria. */
	export interface DescribeInboundCrossClusterSearchConnectionsResponse {
		CrossClusterSearchConnections?: Array<InboundCrossClusterSearchConnection>;

		/**Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. */
		NextToken?: string;
	}


	/** A filter used to limit results when describing inbound or outbound cross-cluster search connections. Multiple values can be specified per filter. A cross-cluster search connection must match at least one of the specified values for it to be returned from an operation.  */
	export interface Filter {
		Name?: string;
		Values?: Array<NonEmptyString>;
	}


	/**The result of a <code><a>DescribeOutboundCrossClusterSearchConnections</a></code> request. Contains the list of connections matching the filter criteria. */
	export interface DescribeOutboundCrossClusterSearchConnectionsResponse {
		CrossClusterSearchConnections?: Array<OutboundCrossClusterSearchConnection>;

		/**Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. */
		NextToken?: string;
	}


	/** Container for response returned by <code> <a>DescribePackages</a> </code> operation.  */
	export interface DescribePackagesResponse {
		PackageDetailsList?: Array<PackageDetails>;
		NextToken?: string;
	}


	/**Filter to apply in <code>DescribePackage</code> response. */
	export interface DescribePackagesFilter {
		Name?: DescribePackagesFilterName;
		Value?: Array<DescribePackagesFilterValue>;
	}

	export enum DescribePackagesFilterName { PackageID = 0, PackageName = 1, PackageStatus = 2 }


	/**Container for results from <code>DescribeReservedElasticsearchInstanceOfferings</code> */
	export interface DescribeReservedElasticsearchInstanceOfferingsResponse {

		/**Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. */
		NextToken?: string;
		ReservedElasticsearchInstanceOfferings?: Array<ReservedElasticsearchInstanceOffering>;
	}


	/**Container for results from <code>DescribeReservedElasticsearchInstances</code> */
	export interface DescribeReservedElasticsearchInstancesResponse {
		NextToken?: string;
		ReservedElasticsearchInstances?: Array<ReservedElasticsearchInstance>;
	}


	/** Container for response returned by <code> <a>DissociatePackage</a> </code> operation.  */
	export interface DissociatePackageResponse {

		/**Information on a package that is associated with a domain. */
		DomainPackageDetails?: DomainPackageDetails;
	}


	/** Container for response returned by <code> <a>GetCompatibleElasticsearchVersions</a> </code> operation.  */
	export interface GetCompatibleElasticsearchVersionsResponse {
		CompatibleElasticsearchVersions?: Array<CompatibleVersionsMap>;
	}


	/** Container for response returned by <code> <a>GetUpgradeHistory</a> </code> operation.  */
	export interface GetUpgradeHistoryResponse {
		UpgradeHistories?: Array<UpgradeHistory>;
		NextToken?: string;
	}


	/** Container for response returned by <code> <a>GetUpgradeStatus</a> </code> operation.  */
	export interface GetUpgradeStatusResponse {
		UpgradeStep?: GetUpgradeStatusResponseUpgradeStep;
		StepStatus?: GetUpgradeStatusResponseStepStatus;
		UpgradeName?: string;
	}

	export enum GetUpgradeStatusResponseUpgradeStep { PRE_UPGRADE_CHECK = 0, SNAPSHOT = 1, UPGRADE = 2 }

	export enum GetUpgradeStatusResponseStepStatus { IN_PROGRESS = 0, SUCCEEDED = 1, SUCCEEDED_WITH_ISSUES = 2, FAILED = 3 }


	/**The result of a <code>ListDomainNames</code> operation. Contains the names of all Elasticsearch domains owned by this account. */
	export interface ListDomainNamesResponse {

		/**Contains the list of Elasticsearch domain information. */
		DomainNames?: Array<DomainInfo>;
	}


	/** Container for response parameters to <code> <a>ListDomainsForPackage</a> </code> operation.  */
	export interface ListDomainsForPackageResponse {
		DomainPackageDetailsList?: Array<DomainPackageDetails>;
		NextToken?: string;
	}


	/** Container for the parameters returned by <code> <a>ListElasticsearchInstanceTypes</a> </code> operation.  */
	export interface ListElasticsearchInstanceTypesResponse {

		/**List of instance types supported by Amazon Elasticsearch service. */
		ElasticsearchInstanceTypes?: Array<ESPartitionInstanceType>;

		/**Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. */
		NextToken?: string;
	}


	/** Container for the parameters for response received from <code> <a>ListElasticsearchVersions</a> </code> operation.  */
	export interface ListElasticsearchVersionsResponse {

		/**List of supported elastic search versions. */
		ElasticsearchVersions?: Array<ElasticsearchVersionString>;

		/**Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. */
		NextToken?: string;
	}


	/** Container for response parameters to <code> <a>ListPackagesForDomain</a> </code> operation.  */
	export interface ListPackagesForDomainResponse {
		DomainPackageDetailsList?: Array<DomainPackageDetails>;
		NextToken?: string;
	}


	/**The result of a <code>ListTags</code> operation. Contains tags for all requested Elasticsearch domains. */
	export interface ListTagsResponse {

		/**A list of <code>Tag</code> */
		TagList?: Array<Tag>;
	}


	/**Represents the output of a <code>PurchaseReservedElasticsearchInstanceOffering</code> operation. */
	export interface PurchaseReservedElasticsearchInstanceOfferingResponse {
		ReservedElasticsearchInstanceId?: string;
		ReservationName?: string;
	}


	/**The result of a <code><a>RejectInboundCrossClusterSearchConnection</a></code> operation. Contains details of rejected inbound connection. */
	export interface RejectInboundCrossClusterSearchConnectionResponse {

		/**Specifies details of an inbound connection. */
		CrossClusterSearchConnection?: InboundCrossClusterSearchConnection;
	}


	/**The result of a <code>StartElasticsearchServiceSoftwareUpdate</code> operation. Contains the status of the update. */
	export interface StartElasticsearchServiceSoftwareUpdateResponse {

		/**The current options of an Elasticsearch domain service software options. */
		ServiceSoftwareOptions?: ServiceSoftwareOptions;
	}


	/**The result of an <code>UpdateElasticsearchDomain</code> request. Contains the status of the Elasticsearch domain being updated. */
	export interface UpdateElasticsearchDomainConfigResponse {

		/**The configuration of an Elasticsearch domain. */
		DomainConfig: ElasticsearchDomainConfig;
	}


	/** Container for response returned by <code> <a>UpgradeElasticsearchDomain</a> </code> operation.  */
	export interface UpgradeElasticsearchDomainResponse {

		/**
		 * The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Max length: 28
		 * Min length: 3
		 * Pattern: [a-z][a-z0-9\-]+
		 */
		DomainName?: string;
		TargetVersion?: string;
		PerformCheckOnly?: boolean;
	}


	/**Specifies details of an inbound connection. */
	export interface InboundCrossClusterSearchConnection {
		SourceDomainInfo?: DomainInformation;
		DestinationDomainInfo?: DomainInformation;
		CrossClusterSearchConnectionId?: string;

		/**Specifies the coonection status of an inbound cross-cluster search connection. */
		ConnectionStatus?: InboundCrossClusterSearchConnectionStatus;
	}


	/**Provides the current status of the entity. */
	export interface OptionStatus {
		CreationDate: Date;
		UpdateDate: Date;
		UpdateVersion?: number;

		/**<p>The state of a requested change. One of the following:</p> <ul> <li>Processing: The request change is still in-process.</li> <li>Active: The request change is processed and deployed to the Elasticsearch domain.</li> </ul> */
		State: OptionStatusState;
		PendingDeletion?: boolean;
	}

	export enum OptionStatusState { RequiresIndexDocuments = 0, Processing = 1, Active = 2 }


	/**The configured access rules for the domain's document and search endpoints, and the current status of those rules. */
	export interface AccessPoliciesStatus {

		/**Access policy rules for an Elasticsearch domain service endpoints. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-access-policies" target="_blank">Configuring Access Policies</a> in the <i>Amazon Elasticsearch Service Developer Guide</i>. The maximum size of a policy document is 100 KB. */
		Options: string;

		/**Provides the current status of the entity. */
		Status: OptionStatus;
	}


	/**Container for the parameters to the <code><a>AddTags</a></code> operation. Specify the tags that you want to attach to the Elasticsearch domain. */
	export interface AddTagsRequest {

		/**The Amazon Resource Name (ARN) of the Elasticsearch domain. See <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html" target="_blank">Identifiers for IAM Entities</a> in <i>Using AWS Identity and Access Management</i> for more information. */
		ARN: string;

		/**A list of <code>Tag</code> */
		TagList: Array<Tag>;
	}


	/** List of limits that are specific to a given InstanceType and for each of it's <code> <a>InstanceRole</a> </code> .  */
	export interface AdditionalLimit {
		LimitName?: string;
		LimitValues?: Array<LimitValue>;
	}


	/**<p> Status of the advanced options for the specified Elasticsearch domain. Currently, the following advanced options are available:</p> <ul> <li>Option to allow references to indices in an HTTP request body. Must be <code>false</code> when configuring access to individual sub-resources. By default, the value is <code>true</code>. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuration Advanced Options</a> for more information.</li> <li>Option to specify the percentage of heap space that is allocated to field data. By default, this setting is unbounded.</li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options">Configuring Advanced Options</a>.</p> */
	export interface AdvancedOptionsStatus {

		/**<p> Exposes select native Elasticsearch configuration values from <code>elasticsearch.yml</code>. Currently, the following advanced options are available:</p> <ul> <li>Option to allow references to indices in an HTTP request body. Must be <code>false</code> when configuring access to individual sub-resources. By default, the value is <code>true</code>. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuration Advanced Options</a> for more information.</li> <li>Option to specify the percentage of heap space that is allocated to field data. By default, this setting is unbounded.</li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options">Configuring Advanced Options</a>.</p> */
		Options: AdvancedOptions;

		/**Provides the current status of the entity. */
		Status: OptionStatus;
	}


	/**Specifies the advanced security configuration: whether advanced security is enabled, whether the internal database option is enabled. */
	export interface AdvancedSecurityOptions {
		Enabled?: boolean;
		InternalUserDatabaseEnabled?: boolean;
	}


	/**Specifies the advanced security configuration: whether advanced security is enabled, whether the internal database option is enabled, master username and password (if internal database is enabled), and master user ARN (if IAM is enabled). */
	export interface AdvancedSecurityOptionsInput {
		Enabled?: boolean;
		InternalUserDatabaseEnabled?: boolean;

		/**Credentials for the master user: username and password, ARN, or both. */
		MasterUserOptions?: MasterUserOptions;
	}


	/** Specifies the status of advanced security options for the specified Elasticsearch domain. */
	export interface AdvancedSecurityOptionsStatus {

		/**Specifies the advanced security configuration: whether advanced security is enabled, whether the internal database option is enabled. */
		Options: AdvancedSecurityOptions;

		/**Provides the current status of the entity. */
		Status: OptionStatus;
	}


	/**Information on a package that is associated with a domain. */
	export interface DomainPackageDetails {
		PackageID?: string;
		PackageName?: string;
		PackageType?: DomainPackageDetailsPackageType;
		LastUpdated?: Date;

		/**
		 * The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Max length: 28
		 * Min length: 3
		 * Pattern: [a-z][a-z0-9\-]+
		 */
		DomainName?: string;
		DomainPackageStatus?: DomainPackageDetailsDomainPackageStatus;
		ReferencePath?: string;
		ErrorDetails?: ErrorDetails;
	}

	export enum DomainPackageDetailsPackageType { TXT-DICTIONARY = 0 }

	export enum DomainPackageDetailsDomainPackageStatus { ASSOCIATING = 0, ASSOCIATION_FAILED = 1, ACTIVE = 2, DISSOCIATING = 3, DISSOCIATION_FAILED = 4 }


	/**Container for the parameters to the <code><a>CancelElasticsearchServiceSoftwareUpdate</a></code> operation. Specifies the name of the Elasticsearch domain that you wish to cancel a service software update on. */
	export interface CancelElasticsearchServiceSoftwareUpdateRequest {

		/**
		 * The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Max length: 28
		 * Min length: 3
		 * Pattern: [a-z][a-z0-9\-]+
		 */
		DomainName: string;
	}


	/**The current options of an Elasticsearch domain service software options. */
	export interface ServiceSoftwareOptions {
		CurrentVersion?: string;
		NewVersion?: string;
		UpdateAvailable?: boolean;
		Cancellable?: boolean;
		UpdateStatus?: ServiceSoftwareOptionsUpdateStatus;
		Description?: string;
		AutomatedUpdateDate?: Date;
		OptionalDeployment?: boolean;
	}

	export enum ServiceSoftwareOptionsUpdateStatus { PENDING_UPDATE = 0, IN_PROGRESS = 1, COMPLETED = 2, NOT_ELIGIBLE = 3, ELIGIBLE = 4 }


	/**Options to specify the Cognito user and identity pools for Kibana authentication. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html" target="_blank">Amazon Cognito Authentication for Kibana</a>. */
	export interface CognitoOptions {
		Enabled?: boolean;
		UserPoolId?: string;
		IdentityPoolId?: string;
		RoleArn?: string;
	}


	/**Status of the Cognito options for the specified Elasticsearch domain. */
	export interface CognitoOptionsStatus {

		/**Options to specify the Cognito user and identity pools for Kibana authentication. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html" target="_blank">Amazon Cognito Authentication for Kibana</a>. */
		Options: CognitoOptions;

		/**Provides the current status of the entity. */
		Status: OptionStatus;
	}


	/** A map from an <code> <a>ElasticsearchVersion</a> </code> to a list of compatible <code> <a>ElasticsearchVersion</a> </code> s to which the domain can be upgraded.  */
	export interface CompatibleVersionsMap {
		SourceVersion?: string;

		/**List of supported elastic search versions. */
		TargetVersions?: Array<ElasticsearchVersionString>;
	}


	/**Specifies the configuration for the domain cluster, such as the type and number of instances. */
	export interface ElasticsearchClusterConfig {
		InstanceType?: ElasticsearchClusterConfigInstanceType;
		InstanceCount?: number;
		DedicatedMasterEnabled?: boolean;
		ZoneAwarenessEnabled?: boolean;

		/**Specifies the zone awareness configuration for the domain cluster, such as the number of availability zones. */
		ZoneAwarenessConfig?: ZoneAwarenessConfig;
		DedicatedMasterType?: ElasticsearchClusterConfigDedicatedMasterType;
		DedicatedMasterCount?: number;
		WarmEnabled?: boolean;
		WarmType?: ElasticsearchClusterConfigWarmType;
		WarmCount?: number;
	}

	export enum ElasticsearchClusterConfigInstanceType { m3.medium.elasticsearch = 0, m3.large.elasticsearch = 1, m3.xlarge.elasticsearch = 2, m3.2xlarge.elasticsearch = 3, m4.large.elasticsearch = 4, m4.xlarge.elasticsearch = 5, m4.2xlarge.elasticsearch = 6, m4.4xlarge.elasticsearch = 7, m4.10xlarge.elasticsearch = 8, m5.large.elasticsearch = 9, m5.xlarge.elasticsearch = 10, m5.2xlarge.elasticsearch = 11, m5.4xlarge.elasticsearch = 12, m5.12xlarge.elasticsearch = 13, r5.large.elasticsearch = 14, r5.xlarge.elasticsearch = 15, r5.2xlarge.elasticsearch = 16, r5.4xlarge.elasticsearch = 17, r5.12xlarge.elasticsearch = 18, c5.large.elasticsearch = 19, c5.xlarge.elasticsearch = 20, c5.2xlarge.elasticsearch = 21, c5.4xlarge.elasticsearch = 22, c5.9xlarge.elasticsearch = 23, c5.18xlarge.elasticsearch = 24, ultrawarm1.medium.elasticsearch = 25, ultrawarm1.large.elasticsearch = 26, t2.micro.elasticsearch = 27, t2.small.elasticsearch = 28, t2.medium.elasticsearch = 29, r3.large.elasticsearch = 30, r3.xlarge.elasticsearch = 31, r3.2xlarge.elasticsearch = 32, r3.4xlarge.elasticsearch = 33, r3.8xlarge.elasticsearch = 34, i2.xlarge.elasticsearch = 35, i2.2xlarge.elasticsearch = 36, d2.xlarge.elasticsearch = 37, d2.2xlarge.elasticsearch = 38, d2.4xlarge.elasticsearch = 39, d2.8xlarge.elasticsearch = 40, c4.large.elasticsearch = 41, c4.xlarge.elasticsearch = 42, c4.2xlarge.elasticsearch = 43, c4.4xlarge.elasticsearch = 44, c4.8xlarge.elasticsearch = 45, r4.large.elasticsearch = 46, r4.xlarge.elasticsearch = 47, r4.2xlarge.elasticsearch = 48, r4.4xlarge.elasticsearch = 49, r4.8xlarge.elasticsearch = 50, r4.16xlarge.elasticsearch = 51, i3.large.elasticsearch = 52, i3.xlarge.elasticsearch = 53, i3.2xlarge.elasticsearch = 54, i3.4xlarge.elasticsearch = 55, i3.8xlarge.elasticsearch = 56, i3.16xlarge.elasticsearch = 57 }

	export enum ElasticsearchClusterConfigDedicatedMasterType { m3.medium.elasticsearch = 0, m3.large.elasticsearch = 1, m3.xlarge.elasticsearch = 2, m3.2xlarge.elasticsearch = 3, m4.large.elasticsearch = 4, m4.xlarge.elasticsearch = 5, m4.2xlarge.elasticsearch = 6, m4.4xlarge.elasticsearch = 7, m4.10xlarge.elasticsearch = 8, m5.large.elasticsearch = 9, m5.xlarge.elasticsearch = 10, m5.2xlarge.elasticsearch = 11, m5.4xlarge.elasticsearch = 12, m5.12xlarge.elasticsearch = 13, r5.large.elasticsearch = 14, r5.xlarge.elasticsearch = 15, r5.2xlarge.elasticsearch = 16, r5.4xlarge.elasticsearch = 17, r5.12xlarge.elasticsearch = 18, c5.large.elasticsearch = 19, c5.xlarge.elasticsearch = 20, c5.2xlarge.elasticsearch = 21, c5.4xlarge.elasticsearch = 22, c5.9xlarge.elasticsearch = 23, c5.18xlarge.elasticsearch = 24, ultrawarm1.medium.elasticsearch = 25, ultrawarm1.large.elasticsearch = 26, t2.micro.elasticsearch = 27, t2.small.elasticsearch = 28, t2.medium.elasticsearch = 29, r3.large.elasticsearch = 30, r3.xlarge.elasticsearch = 31, r3.2xlarge.elasticsearch = 32, r3.4xlarge.elasticsearch = 33, r3.8xlarge.elasticsearch = 34, i2.xlarge.elasticsearch = 35, i2.2xlarge.elasticsearch = 36, d2.xlarge.elasticsearch = 37, d2.2xlarge.elasticsearch = 38, d2.4xlarge.elasticsearch = 39, d2.8xlarge.elasticsearch = 40, c4.large.elasticsearch = 41, c4.xlarge.elasticsearch = 42, c4.2xlarge.elasticsearch = 43, c4.4xlarge.elasticsearch = 44, c4.8xlarge.elasticsearch = 45, r4.large.elasticsearch = 46, r4.xlarge.elasticsearch = 47, r4.2xlarge.elasticsearch = 48, r4.4xlarge.elasticsearch = 49, r4.8xlarge.elasticsearch = 50, r4.16xlarge.elasticsearch = 51, i3.large.elasticsearch = 52, i3.xlarge.elasticsearch = 53, i3.2xlarge.elasticsearch = 54, i3.4xlarge.elasticsearch = 55, i3.8xlarge.elasticsearch = 56, i3.16xlarge.elasticsearch = 57 }

	export enum ElasticsearchClusterConfigWarmType { ultrawarm1.medium.elasticsearch = 0, ultrawarm1.large.elasticsearch = 1 }


	/**Options to enable, disable, and specify the properties of EBS storage volumes. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank"> Configuring EBS-based Storage</a>. */
	export interface EBSOptions {
		EBSEnabled?: boolean;

		/**The type of EBS volume, standard, gp2, or io1. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank">Configuring EBS-based Storage</a>for more information. */
		VolumeType?: EBSOptionsVolumeType;
		VolumeSize?: number;
		Iops?: number;
	}

	export enum EBSOptionsVolumeType { standard = 0, gp2 = 1, io1 = 2 }


	/**Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain. Default value is <code>0</code> hours. */
	export interface SnapshotOptions {
		AutomatedSnapshotStartHour?: number;
	}


	/**Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank"> VPC Endpoints for Amazon Elasticsearch Service Domains</a>. */
	export interface VPCOptions {
		SubnetIds?: Array<String>;
		SecurityGroupIds?: Array<String>;
	}


	/**Specifies the Encryption At Rest Options. */
	export interface EncryptionAtRestOptions {
		Enabled?: boolean;
		KmsKeyId?: string;
	}


	/**Specifies the node-to-node encryption options. */
	export interface NodeToNodeEncryptionOptions {
		Enabled?: boolean;
	}


	/**Options to configure endpoint for the Elasticsearch domain. */
	export interface DomainEndpointOptions {
		EnforceHTTPS?: boolean;
		TLSSecurityPolicy?: DomainEndpointOptionsTLSSecurityPolicy;
	}

	export enum DomainEndpointOptionsTLSSecurityPolicy { Policy-Min-TLS-1-0-2019-07 = 0, Policy-Min-TLS-1-2-2019-07 = 1 }

	export interface CreateElasticsearchDomainRequest {

		/**
		 * The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Max length: 28
		 * Min length: 3
		 * Pattern: [a-z][a-z0-9\-]+
		 */
		DomainName: string;
		ElasticsearchVersion?: string;

		/**Specifies the configuration for the domain cluster, such as the type and number of instances. */
		ElasticsearchClusterConfig?: ElasticsearchClusterConfig;

		/**Options to enable, disable, and specify the properties of EBS storage volumes. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank"> Configuring EBS-based Storage</a>. */
		EBSOptions?: EBSOptions;

		/**Access policy rules for an Elasticsearch domain service endpoints. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-access-policies" target="_blank">Configuring Access Policies</a> in the <i>Amazon Elasticsearch Service Developer Guide</i>. The maximum size of a policy document is 100 KB. */
		AccessPolicies?: string;

		/**Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain. Default value is <code>0</code> hours. */
		SnapshotOptions?: SnapshotOptions;

		/**Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank"> VPC Endpoints for Amazon Elasticsearch Service Domains</a>. */
		VPCOptions?: VPCOptions;

		/**Options to specify the Cognito user and identity pools for Kibana authentication. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html" target="_blank">Amazon Cognito Authentication for Kibana</a>. */
		CognitoOptions?: CognitoOptions;

		/**Specifies the Encryption At Rest Options. */
		EncryptionAtRestOptions?: EncryptionAtRestOptions;

		/**Specifies the node-to-node encryption options. */
		NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions;

		/**<p> Exposes select native Elasticsearch configuration values from <code>elasticsearch.yml</code>. Currently, the following advanced options are available:</p> <ul> <li>Option to allow references to indices in an HTTP request body. Must be <code>false</code> when configuring access to individual sub-resources. By default, the value is <code>true</code>. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuration Advanced Options</a> for more information.</li> <li>Option to specify the percentage of heap space that is allocated to field data. By default, this setting is unbounded.</li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options">Configuring Advanced Options</a>.</p> */
		AdvancedOptions?: AdvancedOptions;
		LogPublishingOptions?: LogPublishingOptions;

		/**Options to configure endpoint for the Elasticsearch domain. */
		DomainEndpointOptions?: DomainEndpointOptions;

		/**Specifies the advanced security configuration: whether advanced security is enabled, whether the internal database option is enabled, master username and password (if internal database is enabled), and master user ARN (if IAM is enabled). */
		AdvancedSecurityOptions?: AdvancedSecurityOptionsInput;
	}


	/**The current status of an Elasticsearch domain. */
	export interface ElasticsearchDomainStatus {

		/**
		 * Unique identifier for an Elasticsearch domain.
		 * Max length: 64
		 * Min length: 1
		 */
		DomainId: string;

		/**
		 * The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Max length: 28
		 * Min length: 3
		 * Pattern: [a-z][a-z0-9\-]+
		 */
		DomainName: string;

		/**The Amazon Resource Name (ARN) of the Elasticsearch domain. See <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html" target="_blank">Identifiers for IAM Entities</a> in <i>Using AWS Identity and Access Management</i> for more information. */
		ARN: string;
		Created?: boolean;
		Deleted?: boolean;

		/**The endpoint to which service requests are submitted. For example, <code>search-imdb-movies-oopcnjfn6ugofer3zx5iadxxca.eu-west-1.es.amazonaws.com</code> or <code>doc-imdb-movies-oopcnjfn6ugofer3zx5iadxxca.eu-west-1.es.amazonaws.com</code>. */
		Endpoint?: string;
		Endpoints?: EndpointsMap;
		Processing?: boolean;
		UpgradeProcessing?: boolean;
		ElasticsearchVersion?: string;

		/**Specifies the configuration for the domain cluster, such as the type and number of instances. */
		ElasticsearchClusterConfig: ElasticsearchClusterConfig;

		/**Options to enable, disable, and specify the properties of EBS storage volumes. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank"> Configuring EBS-based Storage</a>. */
		EBSOptions?: EBSOptions;

		/**Access policy rules for an Elasticsearch domain service endpoints. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-access-policies" target="_blank">Configuring Access Policies</a> in the <i>Amazon Elasticsearch Service Developer Guide</i>. The maximum size of a policy document is 100 KB. */
		AccessPolicies?: string;

		/**Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain. Default value is <code>0</code> hours. */
		SnapshotOptions?: SnapshotOptions;

		/**Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank"> VPC Endpoints for Amazon Elasticsearch Service Domains</a>. */
		VPCOptions?: VPCDerivedInfo;

		/**Options to specify the Cognito user and identity pools for Kibana authentication. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html" target="_blank">Amazon Cognito Authentication for Kibana</a>. */
		CognitoOptions?: CognitoOptions;

		/**Specifies the Encryption At Rest Options. */
		EncryptionAtRestOptions?: EncryptionAtRestOptions;

		/**Specifies the node-to-node encryption options. */
		NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions;

		/**<p> Exposes select native Elasticsearch configuration values from <code>elasticsearch.yml</code>. Currently, the following advanced options are available:</p> <ul> <li>Option to allow references to indices in an HTTP request body. Must be <code>false</code> when configuring access to individual sub-resources. By default, the value is <code>true</code>. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuration Advanced Options</a> for more information.</li> <li>Option to specify the percentage of heap space that is allocated to field data. By default, this setting is unbounded.</li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options">Configuring Advanced Options</a>.</p> */
		AdvancedOptions?: AdvancedOptions;
		LogPublishingOptions?: LogPublishingOptions;

		/**The current options of an Elasticsearch domain service software options. */
		ServiceSoftwareOptions?: ServiceSoftwareOptions;

		/**Options to configure endpoint for the Elasticsearch domain. */
		DomainEndpointOptions?: DomainEndpointOptions;

		/**Specifies the advanced security configuration: whether advanced security is enabled, whether the internal database option is enabled. */
		AdvancedSecurityOptions?: AdvancedSecurityOptions;
	}

	export interface DomainInformation {
		OwnerId?: string;

		/**
		 * The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Max length: 28
		 * Min length: 3
		 * Pattern: [a-z][a-z0-9\-]+
		 */
		DomainName: string;
		Region?: string;
	}


	/**Container for the parameters to the <code><a>CreateOutboundCrossClusterSearchConnection</a></code> operation. */
	export interface CreateOutboundCrossClusterSearchConnectionRequest {
		SourceDomainInfo: DomainInformation;
		DestinationDomainInfo: DomainInformation;
		ConnectionAlias: string;
	}


	/**Specifies the connection status of an outbound cross-cluster search connection. */
	export interface OutboundCrossClusterSearchConnectionStatus {
		StatusCode?: OutboundCrossClusterSearchConnectionStatusStatusCode;
		Message?: string;
	}

	export enum OutboundCrossClusterSearchConnectionStatusStatusCode { PENDING_ACCEPTANCE = 0, VALIDATING = 1, VALIDATION_FAILED = 2, PROVISIONING = 3, ACTIVE = 4, REJECTED = 5, DELETING = 6, DELETED = 7 }

	export enum PackageType { TXT-DICTIONARY = 0 }


	/**The S3 location for importing the package specified as <code>S3BucketName</code> and <code>S3Key</code> */
	export interface PackageSource {
		S3BucketName?: string;
		S3Key?: string;
	}


	/** Container for request parameters to <code> <a>CreatePackage</a> </code> operation.  */
	export interface CreatePackageRequest {
		PackageName: string;
		PackageType: CreatePackageRequestPackageType;
		PackageDescription?: string;

		/**The S3 location for importing the package specified as <code>S3BucketName</code> and <code>S3Key</code> */
		PackageSource: PackageSource;
	}

	export enum CreatePackageRequestPackageType { TXT-DICTIONARY = 0 }


	/**Basic information about a package. */
	export interface PackageDetails {
		PackageID?: string;
		PackageName?: string;
		PackageType?: PackageDetailsPackageType;
		PackageDescription?: string;
		PackageStatus?: PackageDetailsPackageStatus;
		CreatedAt?: Date;
		ErrorDetails?: ErrorDetails;
	}

	export enum PackageDetailsPackageType { TXT-DICTIONARY = 0 }

	export enum PackageDetailsPackageStatus { COPYING = 0, COPY_FAILED = 1, VALIDATING = 2, VALIDATION_FAILED = 3, AVAILABLE = 4, DELETING = 5, DELETED = 6, DELETE_FAILED = 7 }


	/**Specifies details of an outbound connection. */
	export interface OutboundCrossClusterSearchConnection {
		SourceDomainInfo?: DomainInformation;
		DestinationDomainInfo?: DomainInformation;
		CrossClusterSearchConnectionId?: string;
		ConnectionAlias?: string;

		/**Specifies the connection status of an outbound cross-cluster search connection. */
		ConnectionStatus?: OutboundCrossClusterSearchConnectionStatus;
	}

	export enum DeploymentStatus { PENDING_UPDATE = 0, IN_PROGRESS = 1, COMPLETED = 2, NOT_ELIGIBLE = 3, ELIGIBLE = 4 }


	/**The configuration of an Elasticsearch domain. */
	export interface ElasticsearchDomainConfig {

		/**Status of the Elasticsearch version options for the specified Elasticsearch domain. */
		ElasticsearchVersion?: ElasticsearchVersionStatus;

		/**Specifies the configuration status for the specified Elasticsearch domain. */
		ElasticsearchClusterConfig?: ElasticsearchClusterConfigStatus;

		/**Status of the EBS options for the specified Elasticsearch domain. */
		EBSOptions?: EBSOptionsStatus;

		/**The configured access rules for the domain's document and search endpoints, and the current status of those rules. */
		AccessPolicies?: AccessPoliciesStatus;

		/**Status of a daily automated snapshot. */
		SnapshotOptions?: SnapshotOptionsStatus;

		/**Status of the VPC options for the specified Elasticsearch domain. */
		VPCOptions?: VPCDerivedInfoStatus;

		/**Status of the Cognito options for the specified Elasticsearch domain. */
		CognitoOptions?: CognitoOptionsStatus;

		/**Status of the Encryption At Rest options for the specified Elasticsearch domain. */
		EncryptionAtRestOptions?: EncryptionAtRestOptionsStatus;

		/**Status of the node-to-node encryption options for the specified Elasticsearch domain. */
		NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptionsStatus;

		/**<p> Status of the advanced options for the specified Elasticsearch domain. Currently, the following advanced options are available:</p> <ul> <li>Option to allow references to indices in an HTTP request body. Must be <code>false</code> when configuring access to individual sub-resources. By default, the value is <code>true</code>. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuration Advanced Options</a> for more information.</li> <li>Option to specify the percentage of heap space that is allocated to field data. By default, this setting is unbounded.</li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options">Configuring Advanced Options</a>.</p> */
		AdvancedOptions?: AdvancedOptionsStatus;

		/**The configured log publishing options for the domain and their current status. */
		LogPublishingOptions?: LogPublishingOptionsStatus;

		/**The configured endpoint options for the domain and their current status. */
		DomainEndpointOptions?: DomainEndpointOptionsStatus;

		/**Specifies the status of advanced security options for the specified Elasticsearch domain. */
		AdvancedSecurityOptions?: AdvancedSecurityOptionsStatus;
	}


	/**Container for the parameters to the <code><a>DescribeElasticsearchDomains</a></code> operation. By default, the API returns the status of all Elasticsearch domains. */
	export interface DescribeElasticsearchDomainsRequest {

		/**A list of Elasticsearch domain names. */
		DomainNames: Array<DomainName>;
	}


	/**Container for the parameters to the <code><a>DescribeInboundCrossClusterSearchConnections</a></code> operation. */
	export interface DescribeInboundCrossClusterSearchConnectionsRequest {
		Filters?: Array<Filter>;

		/**
		 * Set this value to limit the number of results returned.
		 * Maximum: 100
		 */
		MaxResults?: number;

		/**Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. */
		NextToken?: string;
	}


	/**Container for the parameters to the <code><a>DescribeOutboundCrossClusterSearchConnections</a></code> operation. */
	export interface DescribeOutboundCrossClusterSearchConnectionsRequest {
		Filters?: Array<Filter>;

		/**
		 * Set this value to limit the number of results returned.
		 * Maximum: 100
		 */
		MaxResults?: number;

		/**Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. */
		NextToken?: string;
	}

	export enum DescribePackagesFilterName { PackageID = 0, PackageName = 1, PackageStatus = 2 }


	/** Container for request parameters to <code> <a>DescribePackage</a> </code> operation.  */
	export interface DescribePackagesRequest {

		/**A list of <code>DescribePackagesFilter</code> to filter the packages included in a <code>DescribePackages</code> response. */
		Filters?: Array<DescribePackagesFilter>;

		/**
		 * Set this value to limit the number of results returned.
		 * Maximum: 100
		 */
		MaxResults?: number;

		/**Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. */
		NextToken?: string;
	}


	/**The configured endpoint options for the domain and their current status. */
	export interface DomainEndpointOptionsStatus {

		/**Options to configure endpoint for the Elasticsearch domain. */
		Options: DomainEndpointOptions;

		/**Provides the current status of the entity. */
		Status: OptionStatus;
	}

	export interface DomainInfo {

		/**
		 * The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Max length: 28
		 * Min length: 3
		 * Pattern: [a-z][a-z0-9\-]+
		 */
		DomainName?: string;
	}

	export enum DomainPackageStatus { ASSOCIATING = 0, ASSOCIATION_FAILED = 1, ACTIVE = 2, DISSOCIATING = 3, DISSOCIATION_FAILED = 4 }

	export interface ErrorDetails {
		ErrorType?: string;
		ErrorMessage?: string;
	}


	/** Status of the EBS options for the specified Elasticsearch domain. */
	export interface EBSOptionsStatus {

		/**Options to enable, disable, and specify the properties of EBS storage volumes. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank"> Configuring EBS-based Storage</a>. */
		Options: EBSOptions;

		/**Provides the current status of the entity. */
		Status: OptionStatus;
	}


	/** Specifies the configuration status for the specified Elasticsearch domain. */
	export interface ElasticsearchClusterConfigStatus {

		/**Specifies the configuration for the domain cluster, such as the type and number of instances. */
		Options: ElasticsearchClusterConfig;

		/**Provides the current status of the entity. */
		Status: OptionStatus;
	}


	/** Status of the Elasticsearch version options for the specified Elasticsearch domain. */
	export interface ElasticsearchVersionStatus {
		Options: string;

		/**Provides the current status of the entity. */
		Status: OptionStatus;
	}


	/**Status of a daily automated snapshot. */
	export interface SnapshotOptionsStatus {

		/**Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain. Default value is <code>0</code> hours. */
		Options: SnapshotOptions;

		/**Provides the current status of the entity. */
		Status: OptionStatus;
	}


	/** Status of the VPC options for the specified Elasticsearch domain. */
	export interface VPCDerivedInfoStatus {

		/**Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank"> VPC Endpoints for Amazon Elasticsearch Service Domains</a>. */
		Options: VPCDerivedInfo;

		/**Provides the current status of the entity. */
		Status: OptionStatus;
	}


	/** Status of the Encryption At Rest options for the specified Elasticsearch domain. */
	export interface EncryptionAtRestOptionsStatus {

		/**Specifies the Encryption At Rest Options. */
		Options: EncryptionAtRestOptions;

		/**Provides the current status of the entity. */
		Status: OptionStatus;
	}


	/**Status of the node-to-node encryption options for the specified Elasticsearch domain. */
	export interface NodeToNodeEncryptionOptionsStatus {

		/**Specifies the node-to-node encryption options. */
		Options: NodeToNodeEncryptionOptions;

		/**Provides the current status of the entity. */
		Status: OptionStatus;
	}


	/**The configured log publishing options for the domain and their current status. */
	export interface LogPublishingOptionsStatus {
		Options?: LogPublishingOptions;

		/**Provides the current status of the entity. */
		Status?: OptionStatus;
	}


	/**Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank"> VPC Endpoints for Amazon Elasticsearch Service Domains</a>. */
	export interface VPCDerivedInfo {
		VPCId?: string;
		SubnetIds?: Array<String>;
		AvailabilityZones?: Array<String>;
		SecurityGroupIds?: Array<String>;
	}

	export enum UpgradeStep { PRE_UPGRADE_CHECK = 0, SNAPSHOT = 1, UPGRADE = 2 }

	export enum UpgradeStatus { IN_PROGRESS = 0, SUCCEEDED = 1, SUCCEEDED_WITH_ISSUES = 2, FAILED = 3 }


	/**Specifies the coonection status of an inbound cross-cluster search connection. */
	export interface InboundCrossClusterSearchConnectionStatus {
		StatusCode?: InboundCrossClusterSearchConnectionStatusStatusCode;
		Message?: string;
	}

	export enum InboundCrossClusterSearchConnectionStatusStatusCode { PENDING_ACCEPTANCE = 0, APPROVED = 1, REJECTING = 2, REJECTED = 3, DELETING = 4, DELETED = 5 }

	export enum InboundCrossClusterSearchConnectionStatusCode { PENDING_ACCEPTANCE = 0, APPROVED = 1, REJECTING = 2, REJECTED = 3, DELETING = 4, DELETED = 5 }


	/** InstanceCountLimits represents the limits on number of instances that be created in Amazon Elasticsearch for given InstanceType.  */
	export interface InstanceCountLimits {

		/**Minimum number of Instances that can be instantiated for given InstanceType. */
		MinimumInstanceCount?: number;

		/**Maximum number of Instances that can be instantiated for given InstanceType. */
		MaximumInstanceCount?: number;
	}


	/**InstanceLimits represents the list of instance related attributes that are available for given InstanceType.  */
	export interface InstanceLimits {

		/**InstanceCountLimits represents the limits on number of instances that be created in Amazon Elasticsearch for given InstanceType. */
		InstanceCountLimits?: InstanceCountLimits;
	}


	/** Limits for given InstanceType and for each of it's role. <br/> Limits contains following <code> <a>StorageTypes,</a> </code> <code> <a>InstanceLimits</a> </code> and <code> <a>AdditionalLimits</a> </code>  */
	export interface Limits {
		StorageTypes?: Array<StorageType>;

		/**InstanceLimits represents the list of instance related attributes that are available for given InstanceType. */
		InstanceLimits?: InstanceLimits;
		AdditionalLimits?: Array<AdditionalLimit>;
	}


	/**Type of Log File, it can be one of the following: <ul> <li>INDEX_SLOW_LOGS: Index slow logs contain insert requests that took more time than configured index query log threshold to execute.</li> <li>SEARCH_SLOW_LOGS: Search slow logs contain search queries that took more time than configured search query log threshold to execute.</li> <li>ES_APPLICATION_LOGS: Elasticsearch application logs contain information about errors and warnings raised during the operation of the service and can be useful for troubleshooting.</li> </ul>  */
	export enum LogType { INDEX_SLOW_LOGS = 0, SEARCH_SLOW_LOGS = 1, ES_APPLICATION_LOGS = 2 }


	/**<p>The state of a requested change. One of the following:</p> <ul> <li>Processing: The request change is still in-process.</li> <li>Active: The request change is processed and deployed to the Elasticsearch domain.</li> </ul> */
	export enum OptionState { RequiresIndexDocuments = 0, Processing = 1, Active = 2 }

	export enum OutboundCrossClusterSearchConnectionStatusCode { PENDING_ACCEPTANCE = 0, VALIDATING = 1, VALIDATION_FAILED = 2, PROVISIONING = 3, ACTIVE = 4, REJECTED = 5, DELETING = 6, DELETED = 7 }

	export enum PackageStatus { COPYING = 0, COPY_FAILED = 1, VALIDATING = 2, VALIDATION_FAILED = 3, AVAILABLE = 4, DELETING = 5, DELETED = 6, DELETE_FAILED = 7 }


	/**Container for parameters to <code>PurchaseReservedElasticsearchInstanceOffering</code> */
	export interface PurchaseReservedElasticsearchInstanceOfferingRequest {
		ReservedElasticsearchInstanceOfferingId: string;
		ReservationName: string;

		/**
		 * Specifies the number of EC2 instances in the Elasticsearch domain.
		 * Minimum: 1
		 */
		InstanceCount?: number;
	}


	/**Contains the specific price and frequency of a recurring charges for a reserved Elasticsearch instance, or for a reserved Elasticsearch instance offering. */
	export interface RecurringCharge {
		RecurringChargeAmount?: number;
		RecurringChargeFrequency?: string;
	}


	/**Container for the parameters to the <code><a>RemoveTags</a></code> operation. Specify the <code>ARN</code> for the Elasticsearch domain from which you want to remove the specified <code>TagKey</code>. */
	export interface RemoveTagsRequest {

		/**The Amazon Resource Name (ARN) of the Elasticsearch domain. See <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html" target="_blank">Identifiers for IAM Entities</a> in <i>Using AWS Identity and Access Management</i> for more information. */
		ARN: string;
		TagKeys: Array<String>;
	}

	export enum ReservedElasticsearchInstancePaymentOption { ALL_UPFRONT = 0, PARTIAL_UPFRONT = 1, NO_UPFRONT = 2 }


	/**Details of a reserved Elasticsearch instance. */
	export interface ReservedElasticsearchInstance {
		ReservationName?: string;
		ReservedElasticsearchInstanceId?: string;
		ReservedElasticsearchInstanceOfferingId?: string;
		ElasticsearchInstanceType?: ReservedElasticsearchInstanceElasticsearchInstanceType;
		StartTime?: Date;
		Duration?: number;
		FixedPrice?: number;
		UsagePrice?: number;
		CurrencyCode?: string;
		ElasticsearchInstanceCount?: number;
		State?: string;
		PaymentOption?: ReservedElasticsearchInstancePaymentOption;
		RecurringCharges?: Array<RecurringCharge>;
	}

	export enum ReservedElasticsearchInstanceElasticsearchInstanceType { m3.medium.elasticsearch = 0, m3.large.elasticsearch = 1, m3.xlarge.elasticsearch = 2, m3.2xlarge.elasticsearch = 3, m4.large.elasticsearch = 4, m4.xlarge.elasticsearch = 5, m4.2xlarge.elasticsearch = 6, m4.4xlarge.elasticsearch = 7, m4.10xlarge.elasticsearch = 8, m5.large.elasticsearch = 9, m5.xlarge.elasticsearch = 10, m5.2xlarge.elasticsearch = 11, m5.4xlarge.elasticsearch = 12, m5.12xlarge.elasticsearch = 13, r5.large.elasticsearch = 14, r5.xlarge.elasticsearch = 15, r5.2xlarge.elasticsearch = 16, r5.4xlarge.elasticsearch = 17, r5.12xlarge.elasticsearch = 18, c5.large.elasticsearch = 19, c5.xlarge.elasticsearch = 20, c5.2xlarge.elasticsearch = 21, c5.4xlarge.elasticsearch = 22, c5.9xlarge.elasticsearch = 23, c5.18xlarge.elasticsearch = 24, ultrawarm1.medium.elasticsearch = 25, ultrawarm1.large.elasticsearch = 26, t2.micro.elasticsearch = 27, t2.small.elasticsearch = 28, t2.medium.elasticsearch = 29, r3.large.elasticsearch = 30, r3.xlarge.elasticsearch = 31, r3.2xlarge.elasticsearch = 32, r3.4xlarge.elasticsearch = 33, r3.8xlarge.elasticsearch = 34, i2.xlarge.elasticsearch = 35, i2.2xlarge.elasticsearch = 36, d2.xlarge.elasticsearch = 37, d2.2xlarge.elasticsearch = 38, d2.4xlarge.elasticsearch = 39, d2.8xlarge.elasticsearch = 40, c4.large.elasticsearch = 41, c4.xlarge.elasticsearch = 42, c4.2xlarge.elasticsearch = 43, c4.4xlarge.elasticsearch = 44, c4.8xlarge.elasticsearch = 45, r4.large.elasticsearch = 46, r4.xlarge.elasticsearch = 47, r4.2xlarge.elasticsearch = 48, r4.4xlarge.elasticsearch = 49, r4.8xlarge.elasticsearch = 50, r4.16xlarge.elasticsearch = 51, i3.large.elasticsearch = 52, i3.xlarge.elasticsearch = 53, i3.2xlarge.elasticsearch = 54, i3.4xlarge.elasticsearch = 55, i3.8xlarge.elasticsearch = 56, i3.16xlarge.elasticsearch = 57 }

	export enum ReservedElasticsearchInstancePaymentOption { ALL_UPFRONT = 0, PARTIAL_UPFRONT = 1, NO_UPFRONT = 2 }


	/**Details of a reserved Elasticsearch instance offering. */
	export interface ReservedElasticsearchInstanceOffering {
		ReservedElasticsearchInstanceOfferingId?: string;
		ElasticsearchInstanceType?: ReservedElasticsearchInstanceOfferingElasticsearchInstanceType;
		Duration?: number;
		FixedPrice?: number;
		UsagePrice?: number;
		CurrencyCode?: string;
		PaymentOption?: ReservedElasticsearchInstanceOfferingPaymentOption;
		RecurringCharges?: Array<RecurringCharge>;
	}

	export enum ReservedElasticsearchInstanceOfferingElasticsearchInstanceType { m3.medium.elasticsearch = 0, m3.large.elasticsearch = 1, m3.xlarge.elasticsearch = 2, m3.2xlarge.elasticsearch = 3, m4.large.elasticsearch = 4, m4.xlarge.elasticsearch = 5, m4.2xlarge.elasticsearch = 6, m4.4xlarge.elasticsearch = 7, m4.10xlarge.elasticsearch = 8, m5.large.elasticsearch = 9, m5.xlarge.elasticsearch = 10, m5.2xlarge.elasticsearch = 11, m5.4xlarge.elasticsearch = 12, m5.12xlarge.elasticsearch = 13, r5.large.elasticsearch = 14, r5.xlarge.elasticsearch = 15, r5.2xlarge.elasticsearch = 16, r5.4xlarge.elasticsearch = 17, r5.12xlarge.elasticsearch = 18, c5.large.elasticsearch = 19, c5.xlarge.elasticsearch = 20, c5.2xlarge.elasticsearch = 21, c5.4xlarge.elasticsearch = 22, c5.9xlarge.elasticsearch = 23, c5.18xlarge.elasticsearch = 24, ultrawarm1.medium.elasticsearch = 25, ultrawarm1.large.elasticsearch = 26, t2.micro.elasticsearch = 27, t2.small.elasticsearch = 28, t2.medium.elasticsearch = 29, r3.large.elasticsearch = 30, r3.xlarge.elasticsearch = 31, r3.2xlarge.elasticsearch = 32, r3.4xlarge.elasticsearch = 33, r3.8xlarge.elasticsearch = 34, i2.xlarge.elasticsearch = 35, i2.2xlarge.elasticsearch = 36, d2.xlarge.elasticsearch = 37, d2.2xlarge.elasticsearch = 38, d2.4xlarge.elasticsearch = 39, d2.8xlarge.elasticsearch = 40, c4.large.elasticsearch = 41, c4.xlarge.elasticsearch = 42, c4.2xlarge.elasticsearch = 43, c4.4xlarge.elasticsearch = 44, c4.8xlarge.elasticsearch = 45, r4.large.elasticsearch = 46, r4.xlarge.elasticsearch = 47, r4.2xlarge.elasticsearch = 48, r4.4xlarge.elasticsearch = 49, r4.8xlarge.elasticsearch = 50, r4.16xlarge.elasticsearch = 51, i3.large.elasticsearch = 52, i3.xlarge.elasticsearch = 53, i3.2xlarge.elasticsearch = 54, i3.4xlarge.elasticsearch = 55, i3.8xlarge.elasticsearch = 56, i3.16xlarge.elasticsearch = 57 }

	export enum ReservedElasticsearchInstanceOfferingPaymentOption { ALL_UPFRONT = 0, PARTIAL_UPFRONT = 1, NO_UPFRONT = 2 }


	/**Container for the parameters to the <code><a>StartElasticsearchServiceSoftwareUpdate</a></code> operation. Specifies the name of the Elasticsearch domain that you wish to schedule a service software update on. */
	export interface StartElasticsearchServiceSoftwareUpdateRequest {

		/**
		 * The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Max length: 28
		 * Min length: 3
		 * Pattern: [a-z][a-z0-9\-]+
		 */
		DomainName: string;
	}


	/**StorageTypes represents the list of storage related types and their attributes that are available for given InstanceType.  */
	export interface StorageType {

		/**Type of the storage. List of available storage options: <ol> <li>instance</li> Inbuilt storage available for the given Instance <li>ebs</li> Elastic block storage that would be attached to the given Instance </ol> */
		StorageTypeName?: string;

		/**SubType of the given storage type. List of available sub-storage options: For "instance" storageType we wont have any storageSubType, in case of "ebs" storageType we will have following valid storageSubTypes <ol> <li>standard</li> <li>gp2</li> <li>io1</li> </ol> Refer <code><a>VolumeType</a></code> for more information regarding above EBS storage options. */
		StorageSubTypeName?: string;
		StorageTypeLimits?: Array<StorageTypeLimit>;
	}


	/**Limits that are applicable for given storage type.  */
	export interface StorageTypeLimit {
		LimitName?: string;
		LimitValues?: Array<LimitValue>;
	}


	/**Container for the parameters to the <code><a>UpdateElasticsearchDomain</a></code> operation. Specifies the type and number of instances in the domain cluster. */
	export interface UpdateElasticsearchDomainConfigRequest {

		/**Specifies the configuration for the domain cluster, such as the type and number of instances. */
		ElasticsearchClusterConfig?: ElasticsearchClusterConfig;

		/**Options to enable, disable, and specify the properties of EBS storage volumes. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank"> Configuring EBS-based Storage</a>. */
		EBSOptions?: EBSOptions;

		/**Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain. Default value is <code>0</code> hours. */
		SnapshotOptions?: SnapshotOptions;

		/**Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank"> VPC Endpoints for Amazon Elasticsearch Service Domains</a>. */
		VPCOptions?: VPCOptions;

		/**Options to specify the Cognito user and identity pools for Kibana authentication. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html" target="_blank">Amazon Cognito Authentication for Kibana</a>. */
		CognitoOptions?: CognitoOptions;

		/**<p> Exposes select native Elasticsearch configuration values from <code>elasticsearch.yml</code>. Currently, the following advanced options are available:</p> <ul> <li>Option to allow references to indices in an HTTP request body. Must be <code>false</code> when configuring access to individual sub-resources. By default, the value is <code>true</code>. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuration Advanced Options</a> for more information.</li> <li>Option to specify the percentage of heap space that is allocated to field data. By default, this setting is unbounded.</li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options">Configuring Advanced Options</a>.</p> */
		AdvancedOptions?: AdvancedOptions;

		/**Access policy rules for an Elasticsearch domain service endpoints. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-access-policies" target="_blank">Configuring Access Policies</a> in the <i>Amazon Elasticsearch Service Developer Guide</i>. The maximum size of a policy document is 100 KB. */
		AccessPolicies?: string;
		LogPublishingOptions?: LogPublishingOptions;

		/**Options to configure endpoint for the Elasticsearch domain. */
		DomainEndpointOptions?: DomainEndpointOptions;

		/**Specifies the advanced security configuration: whether advanced security is enabled, whether the internal database option is enabled, master username and password (if internal database is enabled), and master user ARN (if IAM is enabled). */
		AdvancedSecurityOptions?: AdvancedSecurityOptionsInput;
	}


	/** Container for request parameters to <code> <a>UpgradeElasticsearchDomain</a> </code> operation.  */
	export interface UpgradeElasticsearchDomainRequest {

		/**
		 * The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Max length: 28
		 * Min length: 3
		 * Pattern: [a-z][a-z0-9\-]+
		 */
		DomainName: string;
		TargetVersion: string;
		PerformCheckOnly?: boolean;
	}


	/**History of the last 10 Upgrades and Upgrade Eligibility Checks. */
	export interface UpgradeHistory {
		UpgradeName?: string;
		StartTimestamp?: Date;
		UpgradeStatus?: UpgradeHistoryUpgradeStatus;
		StepsList?: Array<UpgradeStepItem>;
	}

	export enum UpgradeHistoryUpgradeStatus { IN_PROGRESS = 0, SUCCEEDED = 1, SUCCEEDED_WITH_ISSUES = 2, FAILED = 3 }


	/**Represents a single step of the Upgrade or Upgrade Eligibility Check workflow. */
	export interface UpgradeStepItem {
		UpgradeStep?: UpgradeStepItemUpgradeStep;
		UpgradeStepStatus?: UpgradeStepItemUpgradeStepStatus;
		Issues?: Array<Issue>;
		ProgressPercent?: number;
	}

	export enum UpgradeStepItemUpgradeStep { PRE_UPGRADE_CHECK = 0, SNAPSHOT = 1, UPGRADE = 2 }

	export enum UpgradeStepItemUpgradeStepStatus { IN_PROGRESS = 0, SUCCEEDED = 1, SUCCEEDED_WITH_ISSUES = 2, FAILED = 3 }

	export class DemoClient {
		constructor(private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/') {
		}

		/**
		 * Allows the destination domain owner to accept an inbound cross-cluster search connection request.
		 * Put /2015-01-01/es/ccs/inboundConnection/{ConnectionId}/accept
		 * @param {string} ConnectionId The id of the inbound connection that you want to accept.
		 * @return {AcceptInboundCrossClusterSearchConnectionResponse} Success
		 */
		AcceptInboundCrossClusterSearchConnection(ConnectionId: string, headersHandler?: () => {[header: string]: string}): Promise<AcceptInboundCrossClusterSearchConnectionResponse> {
			return Axios.put<AcceptInboundCrossClusterSearchConnectionResponse>(this.baseUri + '/2015-01-01/es/ccs/inboundConnection/' + (ConnectionId == null ? '' : encodeURIComponent(ConnectionId)) + '/accept', null, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Attaches tags to an existing Elasticsearch domain. Tags are a set of case-sensitive key value pairs. An Elasticsearch domain may have up to 10 tags. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-managedomains.html#es-managedomains-awsresorcetagging" target="_blank"> Tagging Amazon Elasticsearch Service Domains for more information.</a>
		 * Post /2015-01-01/tags
		 * @return {void} Success
		 */
		AddTags(requestBody: AddTagsBody, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.post(this.baseUri + '/2015-01-01/tags', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Associates a package with an Amazon ES domain.
		 * Post /2015-01-01/packages/associate/{PackageID}/{DomainName}
		 * @param {string} PackageID Internal ID of the package that you want to associate with a domain. Use <code>DescribePackages</code> to find this value.
		 * @param {string} DomainName Name of the domain that you want to associate the package with.
		 * @return {AssociatePackageResponse} Success
		 */
		AssociatePackage(PackageID: string, DomainName: string, headersHandler?: () => {[header: string]: string}): Promise<AssociatePackageResponse> {
			return Axios.post<AssociatePackageResponse>(this.baseUri + '/2015-01-01/packages/associate/' + (PackageID == null ? '' : encodeURIComponent(PackageID)) + '/' + (DomainName == null ? '' : encodeURIComponent(DomainName)), null, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Cancels a scheduled service software update for an Amazon ES domain. You can only perform this operation before the <code>AutomatedUpdateDate</code> and when the <code>UpdateStatus</code> is in the <code>PENDING_UPDATE</code> state.
		 * Post /2015-01-01/es/serviceSoftwareUpdate/cancel
		 * @return {CancelElasticsearchServiceSoftwareUpdateResponse} Success
		 */
		CancelElasticsearchServiceSoftwareUpdate(requestBody: CancelElasticsearchServiceSoftwareUpdateBody, headersHandler?: () => {[header: string]: string}): Promise<CancelElasticsearchServiceSoftwareUpdateResponse> {
			return Axios.post<CancelElasticsearchServiceSoftwareUpdateResponse>(this.baseUri + '/2015-01-01/es/serviceSoftwareUpdate/cancel', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Creates a new Elasticsearch domain. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomains" target="_blank">Creating Elasticsearch Domains</a> in the <i>Amazon Elasticsearch Service Developer Guide</i>.
		 * Post /2015-01-01/es/domain
		 * @return {CreateElasticsearchDomainResponse} Success
		 */
		CreateElasticsearchDomain(requestBody: CreateElasticsearchDomainBody, headersHandler?: () => {[header: string]: string}): Promise<CreateElasticsearchDomainResponse> {
			return Axios.post<CreateElasticsearchDomainResponse>(this.baseUri + '/2015-01-01/es/domain', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Creates a new cross-cluster search connection from a source domain to a destination domain.
		 * Post /2015-01-01/es/ccs/outboundConnection
		 * @return {CreateOutboundCrossClusterSearchConnectionResponse} Success
		 */
		CreateOutboundCrossClusterSearchConnection(requestBody: CreateOutboundCrossClusterSearchConnectionBody, headersHandler?: () => {[header: string]: string}): Promise<CreateOutboundCrossClusterSearchConnectionResponse> {
			return Axios.post<CreateOutboundCrossClusterSearchConnectionResponse>(this.baseUri + '/2015-01-01/es/ccs/outboundConnection', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Create a package for use with Amazon ES domains.
		 * Post /2015-01-01/packages
		 * @return {CreatePackageResponse} Success
		 */
		CreatePackage(requestBody: CreatePackageBody, headersHandler?: () => {[header: string]: string}): Promise<CreatePackageResponse> {
			return Axios.post<CreatePackageResponse>(this.baseUri + '/2015-01-01/packages', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Permanently deletes the specified Elasticsearch domain and all of its data. Once a domain is deleted, it cannot be recovered.
		 * Delete /2015-01-01/es/domain/{DomainName}
		 * @param {string} DomainName The name of the Elasticsearch domain that you want to permanently delete.
		 * @return {DeleteElasticsearchDomainResponse} Success
		 */
		DeleteElasticsearchDomain(DomainName: string, headersHandler?: () => {[header: string]: string}): Promise<DeleteElasticsearchDomainResponse> {
			return Axios.delete<DeleteElasticsearchDomainResponse>(this.baseUri + '/2015-01-01/es/domain/' + (DomainName == null ? '' : encodeURIComponent(DomainName)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Returns domain configuration information about the specified Elasticsearch domain, including the domain ID, domain endpoint, and domain ARN.
		 * Get /2015-01-01/es/domain/{DomainName}
		 * @param {string} DomainName The name of the Elasticsearch domain for which you want information.
		 * @return {DescribeElasticsearchDomainResponse} Success
		 */
		DescribeElasticsearchDomain(DomainName: string, headersHandler?: () => {[header: string]: string}): Promise<DescribeElasticsearchDomainResponse> {
			return Axios.get<DescribeElasticsearchDomainResponse>(this.baseUri + '/2015-01-01/es/domain/' + (DomainName == null ? '' : encodeURIComponent(DomainName)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Deletes the service-linked role that Elasticsearch Service uses to manage and maintain VPC domains. Role deletion will fail if any existing VPC domains use the role. You must delete any such Elasticsearch domains before deleting the role. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html#es-enabling-slr" target="_blank">Deleting Elasticsearch Service Role</a> in <i>VPC Endpoints for Amazon Elasticsearch Service Domains</i>.
		 * Delete /2015-01-01/es/role
		 * @return {void} Success
		 */
		DeleteElasticsearchServiceRole(headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.delete(this.baseUri + '/2015-01-01/es/role', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Allows the destination domain owner to delete an existing inbound cross-cluster search connection.
		 * Delete /2015-01-01/es/ccs/inboundConnection/{ConnectionId}
		 * @param {string} ConnectionId The id of the inbound connection that you want to permanently delete.
		 * @return {DeleteInboundCrossClusterSearchConnectionResponse} Success
		 */
		DeleteInboundCrossClusterSearchConnection(ConnectionId: string, headersHandler?: () => {[header: string]: string}): Promise<DeleteInboundCrossClusterSearchConnectionResponse> {
			return Axios.delete<DeleteInboundCrossClusterSearchConnectionResponse>(this.baseUri + '/2015-01-01/es/ccs/inboundConnection/' + (ConnectionId == null ? '' : encodeURIComponent(ConnectionId)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Allows the source domain owner to delete an existing outbound cross-cluster search connection.
		 * Delete /2015-01-01/es/ccs/outboundConnection/{ConnectionId}
		 * @param {string} ConnectionId The id of the outbound connection that you want to permanently delete.
		 * @return {DeleteOutboundCrossClusterSearchConnectionResponse} Success
		 */
		DeleteOutboundCrossClusterSearchConnection(ConnectionId: string, headersHandler?: () => {[header: string]: string}): Promise<DeleteOutboundCrossClusterSearchConnectionResponse> {
			return Axios.delete<DeleteOutboundCrossClusterSearchConnectionResponse>(this.baseUri + '/2015-01-01/es/ccs/outboundConnection/' + (ConnectionId == null ? '' : encodeURIComponent(ConnectionId)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Delete the package.
		 * Delete /2015-01-01/packages/{PackageID}
		 * @param {string} PackageID Internal ID of the package that you want to delete. Use <code>DescribePackages</code> to find this value.
		 * @return {DeletePackageResponse} Success
		 */
		DeletePackage(PackageID: string, headersHandler?: () => {[header: string]: string}): Promise<DeletePackageResponse> {
			return Axios.delete<DeletePackageResponse>(this.baseUri + '/2015-01-01/packages/' + (PackageID == null ? '' : encodeURIComponent(PackageID)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Provides cluster configuration information about the specified Elasticsearch domain, such as the state, creation date, update version, and update date for cluster options.
		 * Get /2015-01-01/es/domain/{DomainName}/config
		 * @param {string} DomainName The Elasticsearch domain that you want to get information about.
		 * @return {DescribeElasticsearchDomainConfigResponse} Success
		 */
		DescribeElasticsearchDomainConfig(DomainName: string, headersHandler?: () => {[header: string]: string}): Promise<DescribeElasticsearchDomainConfigResponse> {
			return Axios.get<DescribeElasticsearchDomainConfigResponse>(this.baseUri + '/2015-01-01/es/domain/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/config', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Modifies the cluster configuration of the specified Elasticsearch domain, setting as setting the instance type and the number of instances.
		 * Post /2015-01-01/es/domain/{DomainName}/config
		 * @param {string} DomainName The name of the Elasticsearch domain that you are updating. 
		 * @return {UpdateElasticsearchDomainConfigResponse} Success
		 */
		UpdateElasticsearchDomainConfig(DomainName: string, requestBody: UpdateElasticsearchDomainConfigBody, headersHandler?: () => {[header: string]: string}): Promise<UpdateElasticsearchDomainConfigResponse> {
			return Axios.post<UpdateElasticsearchDomainConfigResponse>(this.baseUri + '/2015-01-01/es/domain/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/config', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Returns domain configuration information about the specified Elasticsearch domains, including the domain ID, domain endpoint, and domain ARN.
		 * Post /2015-01-01/es/domain-info
		 * @return {DescribeElasticsearchDomainsResponse} Success
		 */
		DescribeElasticsearchDomains(requestBody: DescribeElasticsearchDomainsBody, headersHandler?: () => {[header: string]: string}): Promise<DescribeElasticsearchDomainsResponse> {
			return Axios.post<DescribeElasticsearchDomainsResponse>(this.baseUri + '/2015-01-01/es/domain-info', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Describe Elasticsearch Limits for a given InstanceType and ElasticsearchVersion. When modifying existing Domain, specify the <code> <a>DomainName</a> </code> to know what Limits are supported for modifying.
		 * Get /2015-01-01/es/instanceTypeLimits/{ElasticsearchVersion}/{InstanceType}
		 * @param {string} domainName  DomainName represents the name of the Domain that we are trying to modify. This should be present only if we are querying for Elasticsearch <code> <a>Limits</a> </code> for existing domain. 
		 * @param {ESPartitionInstanceType} InstanceType  The instance type for an Elasticsearch cluster for which Elasticsearch <code> <a>Limits</a> </code> are needed. 
		 * @param {string} ElasticsearchVersion  Version of Elasticsearch for which <code> <a>Limits</a> </code> are needed. 
		 * @return {DescribeElasticsearchInstanceTypeLimitsResponse} Success
		 */
		DescribeElasticsearchInstanceTypeLimits(domainName: string, InstanceType: ESPartitionInstanceType, ElasticsearchVersion: string, headersHandler?: () => {[header: string]: string}): Promise<DescribeElasticsearchInstanceTypeLimitsResponse> {
			return Axios.get<DescribeElasticsearchInstanceTypeLimitsResponse>(this.baseUri + '/2015-01-01/es/instanceTypeLimits/' + (ElasticsearchVersion == null ? '' : encodeURIComponent(ElasticsearchVersion)) + '/' + InstanceType + '?domainName=' + (domainName == null ? '' : encodeURIComponent(domainName)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Lists all the inbound cross-cluster search connections for a destination domain.
		 * Post /2015-01-01/es/ccs/inboundConnection/search
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeInboundCrossClusterSearchConnectionsResponse} Success
		 */
		DescribeInboundCrossClusterSearchConnections(MaxResults: string, NextToken: string, requestBody: DescribeInboundCrossClusterSearchConnectionsBody, headersHandler?: () => {[header: string]: string}): Promise<DescribeInboundCrossClusterSearchConnectionsResponse> {
			return Axios.post<DescribeInboundCrossClusterSearchConnectionsResponse>(this.baseUri + '/2015-01-01/es/ccs/inboundConnection/search?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Lists all the outbound cross-cluster search connections for a source domain.
		 * Post /2015-01-01/es/ccs/outboundConnection/search
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeOutboundCrossClusterSearchConnectionsResponse} Success
		 */
		DescribeOutboundCrossClusterSearchConnections(MaxResults: string, NextToken: string, requestBody: DescribeOutboundCrossClusterSearchConnectionsBody, headersHandler?: () => {[header: string]: string}): Promise<DescribeOutboundCrossClusterSearchConnectionsResponse> {
			return Axios.post<DescribeOutboundCrossClusterSearchConnectionsResponse>(this.baseUri + '/2015-01-01/es/ccs/outboundConnection/search?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Describes all packages available to Amazon ES. Includes options for filtering, limiting the number of results, and pagination.
		 * Post /2015-01-01/packages/describe
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribePackagesResponse} Success
		 */
		DescribePackages(MaxResults: string, NextToken: string, requestBody: DescribePackagesBody, headersHandler?: () => {[header: string]: string}): Promise<DescribePackagesResponse> {
			return Axios.post<DescribePackagesResponse>(this.baseUri + '/2015-01-01/packages/describe?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Lists available reserved Elasticsearch instance offerings.
		 * Get /2015-01-01/es/reservedInstanceOfferings
		 * @param {string} offeringId The offering identifier filter value. Use this parameter to show only the available offering that matches the specified reservation identifier.
		 * @param {number} maxResults Set this value to limit the number of results returned. If not specified, defaults to 100.
		 * @param {string} nextToken NextToken should be sent in case if earlier API call produced result containing NextToken. It is used for pagination.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeReservedElasticsearchInstanceOfferingsResponse} Success
		 */
		DescribeReservedElasticsearchInstanceOfferings(offeringId: string, maxResults: number, nextToken: string, MaxResults: string, NextToken: string, headersHandler?: () => {[header: string]: string}): Promise<DescribeReservedElasticsearchInstanceOfferingsResponse> {
			return Axios.get<DescribeReservedElasticsearchInstanceOfferingsResponse>(this.baseUri + '/2015-01-01/es/reservedInstanceOfferings?offeringId=' + (offeringId == null ? '' : encodeURIComponent(offeringId)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Returns information about reserved Elasticsearch instances for this account.
		 * Get /2015-01-01/es/reservedInstances
		 * @param {string} reservationId The reserved instance identifier filter value. Use this parameter to show only the reservation that matches the specified reserved Elasticsearch instance ID.
		 * @param {number} maxResults Set this value to limit the number of results returned. If not specified, defaults to 100.
		 * @param {string} nextToken NextToken should be sent in case if earlier API call produced result containing NextToken. It is used for pagination.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeReservedElasticsearchInstancesResponse} Success
		 */
		DescribeReservedElasticsearchInstances(reservationId: string, maxResults: number, nextToken: string, MaxResults: string, NextToken: string, headersHandler?: () => {[header: string]: string}): Promise<DescribeReservedElasticsearchInstancesResponse> {
			return Axios.get<DescribeReservedElasticsearchInstancesResponse>(this.baseUri + '/2015-01-01/es/reservedInstances?reservationId=' + (reservationId == null ? '' : encodeURIComponent(reservationId)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Dissociates a package from the Amazon ES domain.
		 * Post /2015-01-01/packages/dissociate/{PackageID}/{DomainName}
		 * @param {string} PackageID Internal ID of the package that you want to associate with a domain. Use <code>DescribePackages</code> to find this value.
		 * @param {string} DomainName Name of the domain that you want to associate the package with.
		 * @return {DissociatePackageResponse} Success
		 */
		DissociatePackage(PackageID: string, DomainName: string, headersHandler?: () => {[header: string]: string}): Promise<DissociatePackageResponse> {
			return Axios.post<DissociatePackageResponse>(this.baseUri + '/2015-01-01/packages/dissociate/' + (PackageID == null ? '' : encodeURIComponent(PackageID)) + '/' + (DomainName == null ? '' : encodeURIComponent(DomainName)), null, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Returns a list of upgrade compatible Elastisearch versions. You can optionally pass a <code> <a>DomainName</a> </code> to get all upgrade compatible Elasticsearch versions for that specific domain.
		 * Get /2015-01-01/es/compatibleVersions
		 * @return {GetCompatibleElasticsearchVersionsResponse} Success
		 */
		GetCompatibleElasticsearchVersions(domainName: string, headersHandler?: () => {[header: string]: string}): Promise<GetCompatibleElasticsearchVersionsResponse> {
			return Axios.get<GetCompatibleElasticsearchVersionsResponse>(this.baseUri + '/2015-01-01/es/compatibleVersions?domainName=' + (domainName == null ? '' : encodeURIComponent(domainName)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Retrieves the complete history of the last 10 upgrades that were performed on the domain.
		 * Get /2015-01-01/es/upgradeDomain/{DomainName}/history
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetUpgradeHistoryResponse} Success
		 */
		GetUpgradeHistory(DomainName: string, maxResults: number, nextToken: string, MaxResults: string, NextToken: string, headersHandler?: () => {[header: string]: string}): Promise<GetUpgradeHistoryResponse> {
			return Axios.get<GetUpgradeHistoryResponse>(this.baseUri + '/2015-01-01/es/upgradeDomain/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/history&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Retrieves the latest status of the last upgrade or upgrade eligibility check that was performed on the domain.
		 * Get /2015-01-01/es/upgradeDomain/{DomainName}/status
		 * @return {GetUpgradeStatusResponse} Success
		 */
		GetUpgradeStatus(DomainName: string, headersHandler?: () => {[header: string]: string}): Promise<GetUpgradeStatusResponse> {
			return Axios.get<GetUpgradeStatusResponse>(this.baseUri + '/2015-01-01/es/upgradeDomain/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/status', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Returns the name of all Elasticsearch domains owned by the current user's account.
		 * Get /2015-01-01/domain
		 * @return {ListDomainNamesResponse} Success
		 */
		ListDomainNames(headersHandler?: () => {[header: string]: string}): Promise<ListDomainNamesResponse> {
			return Axios.get<ListDomainNamesResponse>(this.baseUri + '/2015-01-01/domain', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Lists all Amazon ES domains associated with the package.
		 * Get /2015-01-01/packages/{PackageID}/domains
		 * @param {string} PackageID The package for which to list domains.
		 * @param {number} maxResults Limits results to a maximum number of domains.
		 * @param {string} nextToken Used for pagination. Only necessary if a previous API call includes a non-null NextToken value. If provided, returns results for the next page.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDomainsForPackageResponse} Success
		 */
		ListDomainsForPackage(PackageID: string, maxResults: number, nextToken: string, MaxResults: string, NextToken: string, headersHandler?: () => {[header: string]: string}): Promise<ListDomainsForPackageResponse> {
			return Axios.get<ListDomainsForPackageResponse>(this.baseUri + '/2015-01-01/packages/' + (PackageID == null ? '' : encodeURIComponent(PackageID)) + '/domains&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * List all Elasticsearch instance types that are supported for given ElasticsearchVersion
		 * Get /2015-01-01/es/instanceTypes/{ElasticsearchVersion}
		 * @param {string} ElasticsearchVersion Version of Elasticsearch for which list of supported elasticsearch instance types are needed. 
		 * @param {string} domainName DomainName represents the name of the Domain that we are trying to modify. This should be present only if we are querying for list of available Elasticsearch instance types when modifying existing domain. 
		 * @param {number} maxResults  Set this value to limit the number of results returned. Value provided must be greater than 30 else it wont be honored. 
		 * @param {string} nextToken NextToken should be sent in case if earlier API call produced result containing NextToken. It is used for pagination. 
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListElasticsearchInstanceTypesResponse} Success
		 */
		ListElasticsearchInstanceTypes(ElasticsearchVersion: string, domainName: string, maxResults: number, nextToken: string, MaxResults: string, NextToken: string, headersHandler?: () => {[header: string]: string}): Promise<ListElasticsearchInstanceTypesResponse> {
			return Axios.get<ListElasticsearchInstanceTypesResponse>(this.baseUri + '/2015-01-01/es/instanceTypes/' + (ElasticsearchVersion == null ? '' : encodeURIComponent(ElasticsearchVersion)) + '&domainName=' + (domainName == null ? '' : encodeURIComponent(domainName)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * List all supported Elasticsearch versions
		 * Get /2015-01-01/es/versions
		 * @param {number} maxResults  Set this value to limit the number of results returned. Value provided must be greater than 10 else it wont be honored. 
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListElasticsearchVersionsResponse} Success
		 */
		ListElasticsearchVersions(maxResults: number, nextToken: string, MaxResults: string, NextToken: string, headersHandler?: () => {[header: string]: string}): Promise<ListElasticsearchVersionsResponse> {
			return Axios.get<ListElasticsearchVersionsResponse>(this.baseUri + '/2015-01-01/es/versions?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Lists all packages associated with the Amazon ES domain.
		 * Get /2015-01-01/domain/{DomainName}/packages
		 * @param {string} DomainName The name of the domain for which you want to list associated packages.
		 * @param {number} maxResults Limits results to a maximum number of packages.
		 * @param {string} nextToken Used for pagination. Only necessary if a previous API call includes a non-null NextToken value. If provided, returns results for the next page.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListPackagesForDomainResponse} Success
		 */
		ListPackagesForDomain(DomainName: string, maxResults: number, nextToken: string, MaxResults: string, NextToken: string, headersHandler?: () => {[header: string]: string}): Promise<ListPackagesForDomainResponse> {
			return Axios.get<ListPackagesForDomainResponse>(this.baseUri + '/2015-01-01/domain/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/packages&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Returns all tags for the given Elasticsearch domain.
		 * Get /2015-01-01/tags/#arn
		 * @param {string} arn  Specify the <code>ARN</code> for the Elasticsearch domain to which the tags are attached that you want to view.
		 * @return {ListTagsResponse} Success
		 */
		ListTags(arn: string, headersHandler?: () => {[header: string]: string}): Promise<ListTagsResponse> {
			return Axios.get<ListTagsResponse>(this.baseUri + '/2015-01-01/tags/#arn?arn=' + (arn == null ? '' : encodeURIComponent(arn)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Allows you to purchase reserved Elasticsearch instances.
		 * Post /2015-01-01/es/purchaseReservedInstanceOffering
		 * @return {PurchaseReservedElasticsearchInstanceOfferingResponse} Success
		 */
		PurchaseReservedElasticsearchInstanceOffering(requestBody: PurchaseReservedElasticsearchInstanceOfferingBody, headersHandler?: () => {[header: string]: string}): Promise<PurchaseReservedElasticsearchInstanceOfferingResponse> {
			return Axios.post<PurchaseReservedElasticsearchInstanceOfferingResponse>(this.baseUri + '/2015-01-01/es/purchaseReservedInstanceOffering', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Allows the destination domain owner to reject an inbound cross-cluster search connection request.
		 * Put /2015-01-01/es/ccs/inboundConnection/{ConnectionId}/reject
		 * @param {string} ConnectionId The id of the inbound connection that you want to reject.
		 * @return {RejectInboundCrossClusterSearchConnectionResponse} Success
		 */
		RejectInboundCrossClusterSearchConnection(ConnectionId: string, headersHandler?: () => {[header: string]: string}): Promise<RejectInboundCrossClusterSearchConnectionResponse> {
			return Axios.put<RejectInboundCrossClusterSearchConnectionResponse>(this.baseUri + '/2015-01-01/es/ccs/inboundConnection/' + (ConnectionId == null ? '' : encodeURIComponent(ConnectionId)) + '/reject', null, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Removes the specified set of tags from the specified Elasticsearch domain.
		 * Post /2015-01-01/tags-removal
		 * @return {void} Success
		 */
		RemoveTags(requestBody: RemoveTagsBody, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.post(this.baseUri + '/2015-01-01/tags-removal', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Schedules a service software update for an Amazon ES domain.
		 * Post /2015-01-01/es/serviceSoftwareUpdate/start
		 * @return {StartElasticsearchServiceSoftwareUpdateResponse} Success
		 */
		StartElasticsearchServiceSoftwareUpdate(requestBody: StartElasticsearchServiceSoftwareUpdateBody, headersHandler?: () => {[header: string]: string}): Promise<StartElasticsearchServiceSoftwareUpdateResponse> {
			return Axios.post<StartElasticsearchServiceSoftwareUpdateResponse>(this.baseUri + '/2015-01-01/es/serviceSoftwareUpdate/start', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Allows you to either upgrade your domain or perform an Upgrade eligibility check to a compatible Elasticsearch version.
		 * Post /2015-01-01/es/upgradeDomain
		 * @return {UpgradeElasticsearchDomainResponse} Success
		 */
		UpgradeElasticsearchDomain(requestBody: UpgradeElasticsearchDomainBody, headersHandler?: () => {[header: string]: string}): Promise<UpgradeElasticsearchDomainResponse> {
			return Axios.post<UpgradeElasticsearchDomainResponse>(this.baseUri + '/2015-01-01/es/upgradeDomain', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}
	}

	export interface AddTagsBody {

		/**The Amazon Resource Name (ARN) of the Elasticsearch domain. See <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html" target="_blank">Identifiers for IAM Entities</a> in <i>Using AWS Identity and Access Management</i> for more information. */
		ARN: string;

		/**A list of <code>Tag</code> */
		TagList: Array<Tag>;
	}

	export interface CancelElasticsearchServiceSoftwareUpdateBody {

		/**
		 * The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Max length: 28
		 * Min length: 3
		 * Pattern: [a-z][a-z0-9\-]+
		 */
		DomainName: string;
	}

	export interface CreateElasticsearchDomainBody {

		/**
		 * The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Max length: 28
		 * Min length: 3
		 * Pattern: [a-z][a-z0-9\-]+
		 */
		DomainName: string;

		/**String of format X.Y to specify version for the Elasticsearch domain eg. "1.5" or "2.3". For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomains" target="_blank">Creating Elasticsearch Domains</a> in the <i>Amazon Elasticsearch Service Developer Guide</i>. */
		ElasticsearchVersion?: string;

		/**Specifies the configuration for the domain cluster, such as the type and number of instances. */
		ElasticsearchClusterConfig?: string;

		/**Options to enable, disable, and specify the properties of EBS storage volumes. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank"> Configuring EBS-based Storage</a>. */
		EBSOptions?: string;

		/**Access policy rules for an Elasticsearch domain service endpoints. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-access-policies" target="_blank">Configuring Access Policies</a> in the <i>Amazon Elasticsearch Service Developer Guide</i>. The maximum size of a policy document is 100 KB. */
		AccessPolicies?: string;

		/**Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain. Default value is <code>0</code> hours. */
		SnapshotOptions?: string;

		/**Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank"> VPC Endpoints for Amazon Elasticsearch Service Domains</a>. */
		VPCOptions?: string;

		/**Options to specify the Cognito user and identity pools for Kibana authentication. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html" target="_blank">Amazon Cognito Authentication for Kibana</a>. */
		CognitoOptions?: string;

		/**Specifies the Encryption At Rest Options. */
		EncryptionAtRestOptions?: string;

		/**Specifies the node-to-node encryption options. */
		NodeToNodeEncryptionOptions?: string;

		/**<p> Exposes select native Elasticsearch configuration values from <code>elasticsearch.yml</code>. Currently, the following advanced options are available:</p> <ul> <li>Option to allow references to indices in an HTTP request body. Must be <code>false</code> when configuring access to individual sub-resources. By default, the value is <code>true</code>. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuration Advanced Options</a> for more information.</li> <li>Option to specify the percentage of heap space that is allocated to field data. By default, this setting is unbounded.</li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options">Configuring Advanced Options</a>.</p> */
		AdvancedOptions?: string;

		/**Map of <code>LogType</code> and <code>LogPublishingOption</code>, each containing options to publish a given type of Elasticsearch log. */
		LogPublishingOptions?: string;

		/**Options to configure endpoint for the Elasticsearch domain. */
		DomainEndpointOptions?: string;

		/**Specifies the advanced security configuration: whether advanced security is enabled, whether the internal database option is enabled, master username and password (if internal database is enabled), and master user ARN (if IAM is enabled). */
		AdvancedSecurityOptions?: string;
	}

	export interface CreateOutboundCrossClusterSearchConnectionBody {

		/**Specifies the <code><a>DomainInformation</a></code> for the source Elasticsearch domain. */
		SourceDomainInfo: string;

		/**Specifies the <code><a>DomainInformation</a></code> for the destination Elasticsearch domain. */
		DestinationDomainInfo: string;

		/**
		 * Specifies the connection alias that will be used by the customer for this connection.
		 * Max length: 20
		 */
		ConnectionAlias: string;
	}

	export interface CreatePackageBody {

		/**
		 * Unique identifier for the package.
		 * Max length: 28
		 * Min length: 3
		 * Pattern: [a-z][a-z0-9\-]+
		 */
		PackageName: string;

		/**Type of package. Currently supports only TXT-DICTIONARY. */
		PackageType: CreatePackageBodyPackageType;

		/**
		 * Description of the package.
		 * Max length: 1024
		 */
		PackageDescription?: string;

		/**The S3 location for importing the package specified as <code>S3BucketName</code> and <code>S3Key</code> */
		PackageSource: string;
	}

	export enum CreatePackageBodyPackageType { TXT-DICTIONARY = 0 }

	export interface UpdateElasticsearchDomainConfigBody {

		/**Specifies the configuration for the domain cluster, such as the type and number of instances. */
		ElasticsearchClusterConfig?: string;

		/**Options to enable, disable, and specify the properties of EBS storage volumes. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank"> Configuring EBS-based Storage</a>. */
		EBSOptions?: string;

		/**Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain. Default value is <code>0</code> hours. */
		SnapshotOptions?: string;

		/**Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank"> VPC Endpoints for Amazon Elasticsearch Service Domains</a>. */
		VPCOptions?: string;

		/**Options to specify the Cognito user and identity pools for Kibana authentication. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html" target="_blank">Amazon Cognito Authentication for Kibana</a>. */
		CognitoOptions?: string;

		/**<p> Exposes select native Elasticsearch configuration values from <code>elasticsearch.yml</code>. Currently, the following advanced options are available:</p> <ul> <li>Option to allow references to indices in an HTTP request body. Must be <code>false</code> when configuring access to individual sub-resources. By default, the value is <code>true</code>. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuration Advanced Options</a> for more information.</li> <li>Option to specify the percentage of heap space that is allocated to field data. By default, this setting is unbounded.</li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options">Configuring Advanced Options</a>.</p> */
		AdvancedOptions?: string;

		/**Access policy rules for an Elasticsearch domain service endpoints. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-access-policies" target="_blank">Configuring Access Policies</a> in the <i>Amazon Elasticsearch Service Developer Guide</i>. The maximum size of a policy document is 100 KB. */
		AccessPolicies?: string;

		/**Map of <code>LogType</code> and <code>LogPublishingOption</code>, each containing options to publish a given type of Elasticsearch log. */
		LogPublishingOptions?: string;

		/**Options to configure endpoint for the Elasticsearch domain. */
		DomainEndpointOptions?: string;

		/**Specifies the advanced security configuration: whether advanced security is enabled, whether the internal database option is enabled, master username and password (if internal database is enabled), and master user ARN (if IAM is enabled). */
		AdvancedSecurityOptions?: string;
	}

	export interface DescribeElasticsearchDomainsBody {

		/**A list of Elasticsearch domain names. */
		DomainNames: Array<DomainName>;
	}

	export interface DescribeInboundCrossClusterSearchConnectionsBody {

		/**A list of filters used to match properties for inbound cross-cluster search connection. Available <code><a>Filter</a></code> names for this operation are: <ul> <li>cross-cluster-search-connection-id</li> <li>source-domain-info.domain-name</li> <li>source-domain-info.owner-id</li> <li>source-domain-info.region</li> <li>destination-domain-info.domain-name</li> </ul> */
		Filters?: Array<Filter>;

		/**
		 * Set this value to limit the number of results returned.
		 * Maximum: 100
		 */
		MaxResults?: number;

		/**Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. */
		NextToken?: string;
	}

	export interface DescribeOutboundCrossClusterSearchConnectionsBody {

		/**A list of filters used to match properties for outbound cross-cluster search connection. Available <code><a>Filter</a></code> names for this operation are: <ul> <li>cross-cluster-search-connection-id</li> <li>destination-domain-info.domain-name</li> <li>destination-domain-info.owner-id</li> <li>destination-domain-info.region</li> <li>source-domain-info.domain-name</li> </ul> */
		Filters?: Array<Filter>;

		/**
		 * Set this value to limit the number of results returned.
		 * Maximum: 100
		 */
		MaxResults?: number;

		/**Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. */
		NextToken?: string;
	}

	export interface DescribePackagesBody {

		/**A list of <code>DescribePackagesFilter</code> to filter the packages included in a <code>DescribePackages</code> response. */
		Filters?: Array<DescribePackagesFilter>;

		/**
		 * Set this value to limit the number of results returned.
		 * Maximum: 100
		 */
		MaxResults?: number;

		/**Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. */
		NextToken?: string;
	}

	export interface PurchaseReservedElasticsearchInstanceOfferingBody {

		/**
		 * The ID of the reserved Elasticsearch instance offering to purchase.
		 * Pattern: \p{XDigit}{8}-\p{XDigit}{4}-\p{XDigit}{4}-\p{XDigit}{4}-\p{XDigit}{12}
		 */
		ReservedElasticsearchInstanceOfferingId: string;

		/**
		 * A customer-specified identifier to track this reservation.
		 * Max length: 64
		 * Min length: 5
		 */
		ReservationName: string;

		/**
		 * Specifies the number of EC2 instances in the Elasticsearch domain.
		 * Minimum: 1
		 */
		InstanceCount?: number;
	}

	export interface RemoveTagsBody {

		/**The Amazon Resource Name (ARN) of the Elasticsearch domain. See <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html" target="_blank">Identifiers for IAM Entities</a> in <i>Using AWS Identity and Access Management</i> for more information. */
		ARN: string;

		/**Specifies the <code>TagKey</code> list which you want to remove from the Elasticsearch domain. */
		TagKeys: Array<String>;
	}

	export interface StartElasticsearchServiceSoftwareUpdateBody {

		/**
		 * The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Max length: 28
		 * Min length: 3
		 * Pattern: [a-z][a-z0-9\-]+
		 */
		DomainName: string;
	}

	export interface UpgradeElasticsearchDomainBody {

		/**
		 * The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Max length: 28
		 * Min length: 3
		 * Pattern: [a-z][a-z0-9\-]+
		 */
		DomainName: string;

		/**The version of Elasticsearch that you intend to upgrade the domain to. */
		TargetVersion: string;

		/**This flag, when set to True, indicates that an Upgrade Eligibility Check needs to be performed. This will not actually perform the Upgrade. */
		PerformCheckOnly?: boolean;
	}

}

