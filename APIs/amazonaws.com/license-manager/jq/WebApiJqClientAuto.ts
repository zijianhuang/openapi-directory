///<reference path="HttpClient.ts" />
namespace My_Demo_Client {
	export interface CreateLicenseConfigurationResponse {
		LicenseConfigurationArn?: string;
	}

	export interface CreateLicenseConfigurationRequest {
		Name: string;
		Description?: string;
		LicenseCountingType: CreateLicenseConfigurationRequestLicenseCountingType;
		LicenseCount?: number;
		LicenseCountHardLimit?: boolean;
		LicenseRules?: Array<String>;
		Tags?: Array<Tag>;
		ProductInformationList?: Array<ProductInformation>;
	}

	export enum CreateLicenseConfigurationRequestLicenseCountingType { vCPU = 0, Instance = 1, Core = 2, Socket = 3 }

	export interface DeleteLicenseConfigurationRequest {
		LicenseConfigurationArn: string;
	}

	export interface GetLicenseConfigurationResponse {
		LicenseConfigurationId?: string;
		LicenseConfigurationArn?: string;
		Name?: string;
		Description?: string;
		LicenseCountingType?: GetLicenseConfigurationResponseLicenseCountingType;
		LicenseRules?: Array<String>;
		LicenseCount?: number;
		LicenseCountHardLimit?: boolean;
		ConsumedLicenses?: number;
		Status?: string;
		OwnerAccountId?: string;
		ConsumedLicenseSummaryList?: Array<ConsumedLicenseSummary>;
		ManagedResourceSummaryList?: Array<ManagedResourceSummary>;
		Tags?: Array<Tag>;
		ProductInformationList?: Array<ProductInformation>;

		/**Describes automated discovery. */
		AutomatedDiscoveryInformation?: AutomatedDiscoveryInformation;
	}

	export enum GetLicenseConfigurationResponseLicenseCountingType { vCPU = 0, Instance = 1, Core = 2, Socket = 3 }

	export interface GetLicenseConfigurationRequest {
		LicenseConfigurationArn: string;
	}

	export interface GetServiceSettingsResponse {
		S3BucketArn?: string;
		SnsTopicArn?: string;

		/**Configuration information for AWS Organizations. */
		OrganizationConfiguration?: OrganizationConfiguration;
		EnableCrossAccountsDiscovery?: boolean;
		LicenseManagerResourceShareArn?: string;
	}

	export interface ListAssociationsForLicenseConfigurationResponse {
		LicenseConfigurationAssociations?: Array<LicenseConfigurationAssociation>;
		NextToken?: string;
	}

	export interface ListAssociationsForLicenseConfigurationRequest {
		LicenseConfigurationArn: string;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface ListFailuresForLicenseConfigurationOperationsResponse {
		LicenseOperationFailureList?: Array<LicenseOperationFailure>;
		NextToken?: string;
	}

	export interface ListFailuresForLicenseConfigurationOperationsRequest {
		LicenseConfigurationArn: string;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface ListLicenseConfigurationsResponse {
		LicenseConfigurations?: Array<LicenseConfiguration>;
		NextToken?: string;
	}

	export interface ListLicenseConfigurationsRequest {
		LicenseConfigurationArns?: Array<String>;
		MaxResults?: number;
		NextToken?: string;
		Filters?: Array<Filter>;
	}

	export interface ListLicenseSpecificationsForResourceResponse {
		LicenseSpecifications?: Array<LicenseSpecification>;
		NextToken?: string;
	}

	export interface ListLicenseSpecificationsForResourceRequest {
		ResourceArn: string;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface ListResourceInventoryResponse {
		ResourceInventoryList?: Array<ResourceInventory>;
		NextToken?: string;
	}

	export interface ListResourceInventoryRequest {
		MaxResults?: number;
		NextToken?: string;
		Filters?: Array<InventoryFilter>;
	}

	export interface ListTagsForResourceResponse {
		Tags?: Array<Tag>;
	}

	export interface ListTagsForResourceRequest {
		ResourceArn: string;
	}

	export interface ListUsageForLicenseConfigurationResponse {
		LicenseConfigurationUsageList?: Array<LicenseConfigurationUsage>;
		NextToken?: string;
	}

	export interface ListUsageForLicenseConfigurationRequest {
		LicenseConfigurationArn: string;
		MaxResults?: number;
		NextToken?: string;
		Filters?: Array<Filter>;
	}

	export interface TagResourceRequest {
		ResourceArn: string;
		Tags: Array<Tag>;
	}

	export interface UntagResourceRequest {
		ResourceArn: string;
		TagKeys: Array<String>;
	}

	export interface UpdateLicenseConfigurationRequest {
		LicenseConfigurationArn: string;
		LicenseConfigurationStatus?: UpdateLicenseConfigurationRequestLicenseConfigurationStatus;
		LicenseRules?: Array<String>;
		LicenseCount?: number;
		LicenseCountHardLimit?: boolean;
		Name?: string;
		Description?: string;
		ProductInformationList?: Array<ProductInformation>;
	}

	export enum UpdateLicenseConfigurationRequestLicenseConfigurationStatus { AVAILABLE = 0, DISABLED = 1 }

	export interface UpdateLicenseSpecificationsForResourceRequest {
		ResourceArn: string;
		AddLicenseSpecifications?: Array<LicenseSpecification>;
		RemoveLicenseSpecifications?: Array<LicenseSpecification>;
	}

	export interface UpdateServiceSettingsRequest {
		S3BucketArn?: string;
		SnsTopicArn?: string;

		/**Configuration information for AWS Organizations. */
		OrganizationConfiguration?: OrganizationConfiguration;
		EnableCrossAccountsDiscovery?: boolean;
	}


	/**Describes automated discovery. */
	export interface AutomatedDiscoveryInformation {
		LastRunTime?: Date;
	}

	export enum ResourceType { EC2_INSTANCE = 0, EC2_HOST = 1, EC2_AMI = 2, RDS = 3, SYSTEMS_MANAGER_MANAGED_INSTANCE = 4 }


	/**Details about license consumption. */
	export interface ConsumedLicenseSummary {
		ResourceType?: ConsumedLicenseSummaryResourceType;
		ConsumedLicenses?: number;
	}

	export enum ConsumedLicenseSummaryResourceType { EC2_INSTANCE = 0, EC2_HOST = 1, EC2_AMI = 2, RDS = 3, SYSTEMS_MANAGER_MANAGED_INSTANCE = 4 }

	export enum LicenseCountingType { vCPU = 0, Instance = 1, Core = 2, Socket = 3 }


	/**A filter name and value pair that is used to return more specific results from a describe operation. Filters can be used to match a set of resources by specific criteria, such as tags, attributes, or IDs. */
	export interface Filter {
		Name?: string;
		Values?: Array<FilterValue>;
	}


	/**Configuration information for AWS Organizations. */
	export interface OrganizationConfiguration {
		EnableIntegration: boolean;
	}

	export enum InventoryFilterCondition { EQUALS = 0, NOT_EQUALS = 1, BEGINS_WITH = 2, CONTAINS = 3 }


	/**An inventory filter. */
	export interface InventoryFilter {
		Name: string;
		Condition: InventoryFilterCondition;
		Value?: string;
	}

	export enum InventoryFilterCondition { EQUALS = 0, NOT_EQUALS = 1, BEGINS_WITH = 2, CONTAINS = 3 }


	/**A license configuration is an abstraction of a customer license agreement that can be consumed and enforced by License Manager. Components include specifications for the license type (licensing by instance, socket, CPU, or vCPU), allowed tenancy (shared tenancy, Dedicated Instance, Dedicated Host, or all of these), host affinity (how long a VM must be associated with a host), and the number of licenses purchased and used. */
	export interface LicenseConfiguration {
		LicenseConfigurationId?: string;
		LicenseConfigurationArn?: string;
		Name?: string;
		Description?: string;
		LicenseCountingType?: LicenseConfigurationLicenseCountingType;
		LicenseRules?: Array<String>;
		LicenseCount?: number;
		LicenseCountHardLimit?: boolean;
		ConsumedLicenses?: number;
		Status?: string;
		OwnerAccountId?: string;
		ConsumedLicenseSummaryList?: Array<ConsumedLicenseSummary>;
		ManagedResourceSummaryList?: Array<ManagedResourceSummary>;
		ProductInformationList?: Array<ProductInformation>;

		/**Describes automated discovery. */
		AutomatedDiscoveryInformation?: AutomatedDiscoveryInformation;
	}

	export enum LicenseConfigurationLicenseCountingType { vCPU = 0, Instance = 1, Core = 2, Socket = 3 }


	/**Describes an association with a license configuration. */
	export interface LicenseConfigurationAssociation {
		ResourceArn?: string;
		ResourceType?: LicenseConfigurationAssociationResourceType;
		ResourceOwnerId?: string;
		AssociationTime?: Date;
	}

	export enum LicenseConfigurationAssociationResourceType { EC2_INSTANCE = 0, EC2_HOST = 1, EC2_AMI = 2, RDS = 3, SYSTEMS_MANAGER_MANAGED_INSTANCE = 4 }

	export enum LicenseConfigurationStatus { AVAILABLE = 0, DISABLED = 1 }


	/**Details about the usage of a resource associated with a license configuration. */
	export interface LicenseConfigurationUsage {
		ResourceArn?: string;
		ResourceType?: LicenseConfigurationUsageResourceType;
		ResourceStatus?: string;
		ResourceOwnerId?: string;
		AssociationTime?: Date;
		ConsumedLicenses?: number;
	}

	export enum LicenseConfigurationUsageResourceType { EC2_INSTANCE = 0, EC2_HOST = 1, EC2_AMI = 2, RDS = 3, SYSTEMS_MANAGER_MANAGED_INSTANCE = 4 }


	/**Describes the failure of a license operation. */
	export interface LicenseOperationFailure {
		ResourceArn?: string;
		ResourceType?: LicenseOperationFailureResourceType;
		ErrorMessage?: string;
		FailureTime?: Date;
		OperationName?: string;
		ResourceOwnerId?: string;
		OperationRequestedBy?: string;
		MetadataList?: Array<Metadata>;
	}

	export enum LicenseOperationFailureResourceType { EC2_INSTANCE = 0, EC2_HOST = 1, EC2_AMI = 2, RDS = 3, SYSTEMS_MANAGER_MANAGED_INSTANCE = 4 }


	/**Details for associating a license configuration with a resource. */
	export interface LicenseSpecification {
		LicenseConfigurationArn: string;
	}


	/**Summary information about a managed resource. */
	export interface ManagedResourceSummary {
		ResourceType?: ManagedResourceSummaryResourceType;
		AssociationCount?: number;
	}

	export enum ManagedResourceSummaryResourceType { EC2_INSTANCE = 0, EC2_HOST = 1, EC2_AMI = 2, RDS = 3, SYSTEMS_MANAGER_MANAGED_INSTANCE = 4 }


	/**Reserved. */
	export interface Metadata {
		Name?: string;
		Value?: string;
	}


	/**Describes product information for a license configuration. */
	export interface ProductInformation {
		ResourceType: string;
		ProductInformationFilterList: Array<ProductInformationFilter>;
	}


	/**Describes product information filters. */
	export interface ProductInformationFilter {
		ProductInformationFilterName: string;
		ProductInformationFilterValue: Array<String>;
		ProductInformationFilterComparator: string;
	}


	/**Details about a resource. */
	export interface ResourceInventory {
		ResourceId?: string;
		ResourceType?: ResourceInventoryResourceType;
		ResourceArn?: string;
		Platform?: string;
		PlatformVersion?: string;
		ResourceOwningAccountId?: string;
	}

	export enum ResourceInventoryResourceType { EC2_INSTANCE = 0, EC2_HOST = 1, EC2_AMI = 2, RDS = 3, SYSTEMS_MANAGER_MANAGED_INSTANCE = 4 }


	/**Details about a tag for a license configuration. */
	export interface Tag {
		Key?: string;
		Value?: string;
	}

	export class DemoClient {
		constructor(private baseUri: string = HttpClient.locationOrigin, private httpClient: HttpClientBase = new HttpClient(), private error?: (xhr: JQueryXHR, ajaxOptions: string, thrown: string) => any, private statusCode?: { [key: string]: any; }) {
		}

		/**
		 * <p>Creates a license configuration.</p> <p>A license configuration is an abstraction of a customer license agreement that can be consumed and enforced by License Manager. Components include specifications for the license type (licensing by instance, socket, CPU, or vCPU), allowed tenancy (shared tenancy, Dedicated Instance, Dedicated Host, or all of these), host affinity (how long a VM must be associated with a host), and the number of licenses purchased and used.</p>
		 * Post /#X-Amz-Target=AWSLicenseManager.CreateLicenseConfiguration
		 * @return {CreateLicenseConfigurationResponse} Success
		 */
		CreateLicenseConfiguration(callback: (data : CreateLicenseConfigurationResponse) => any, requestBody: CreateLicenseConfigurationRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWSLicenseManager.CreateLicenseConfiguration', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Deletes the specified license configuration.</p> <p>You cannot delete a license configuration that is in use.</p>
		 * Post /#X-Amz-Target=AWSLicenseManager.DeleteLicenseConfiguration
		 * @return {DeleteLicenseConfigurationResponse} Success
		 */
		DeleteLicenseConfiguration(callback: (data : DeleteLicenseConfigurationResponse) => any, requestBody: DeleteLicenseConfigurationRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWSLicenseManager.DeleteLicenseConfiguration', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Gets detailed information about the specified license configuration.
		 * Post /#X-Amz-Target=AWSLicenseManager.GetLicenseConfiguration
		 * @return {GetLicenseConfigurationResponse} Success
		 */
		GetLicenseConfiguration(callback: (data : GetLicenseConfigurationResponse) => any, requestBody: GetLicenseConfigurationRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWSLicenseManager.GetLicenseConfiguration', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Gets the License Manager settings for the current Region.
		 * Post /#X-Amz-Target=AWSLicenseManager.GetServiceSettings
		 * @return {GetServiceSettingsResponse} Success
		 */
		GetServiceSettings(callback: (data : GetServiceSettingsResponse) => any, requestBody: GetServiceSettingsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWSLicenseManager.GetServiceSettings', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Lists the resource associations for the specified license configuration.</p> <p>Resource associations need not consume licenses from a license configuration. For example, an AMI or a stopped instance might not consume a license (depending on the license rules).</p>
		 * Post /#X-Amz-Target=AWSLicenseManager.ListAssociationsForLicenseConfiguration
		 * @return {ListAssociationsForLicenseConfigurationResponse} Success
		 */
		ListAssociationsForLicenseConfiguration(callback: (data : ListAssociationsForLicenseConfigurationResponse) => any, requestBody: ListAssociationsForLicenseConfigurationRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWSLicenseManager.ListAssociationsForLicenseConfiguration', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Lists the license configuration operations that failed.
		 * Post /#X-Amz-Target=AWSLicenseManager.ListFailuresForLicenseConfigurationOperations
		 * @return {ListFailuresForLicenseConfigurationOperationsResponse} Success
		 */
		ListFailuresForLicenseConfigurationOperations(callback: (data : ListFailuresForLicenseConfigurationOperationsResponse) => any, requestBody: ListFailuresForLicenseConfigurationOperationsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWSLicenseManager.ListFailuresForLicenseConfigurationOperations', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Lists the license configurations for your account.
		 * Post /#X-Amz-Target=AWSLicenseManager.ListLicenseConfigurations
		 * @return {ListLicenseConfigurationsResponse} Success
		 */
		ListLicenseConfigurations(callback: (data : ListLicenseConfigurationsResponse) => any, requestBody: ListLicenseConfigurationsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWSLicenseManager.ListLicenseConfigurations', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Describes the license configurations for the specified resource.
		 * Post /#X-Amz-Target=AWSLicenseManager.ListLicenseSpecificationsForResource
		 * @return {ListLicenseSpecificationsForResourceResponse} Success
		 */
		ListLicenseSpecificationsForResource(callback: (data : ListLicenseSpecificationsForResourceResponse) => any, requestBody: ListLicenseSpecificationsForResourceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWSLicenseManager.ListLicenseSpecificationsForResource', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Lists resources managed using Systems Manager inventory.
		 * Post /#X-Amz-Target=AWSLicenseManager.ListResourceInventory
		 * @return {ListResourceInventoryResponse} Success
		 */
		ListResourceInventory(callback: (data : ListResourceInventoryResponse) => any, requestBody: ListResourceInventoryRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWSLicenseManager.ListResourceInventory', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Lists the tags for the specified license configuration.
		 * Post /#X-Amz-Target=AWSLicenseManager.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(callback: (data : ListTagsForResourceResponse) => any, requestBody: ListTagsForResourceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWSLicenseManager.ListTagsForResource', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Lists all license usage records for a license configuration, displaying license consumption details by resource at a selected point in time. Use this action to audit the current license consumption for any license inventory and configuration.
		 * Post /#X-Amz-Target=AWSLicenseManager.ListUsageForLicenseConfiguration
		 * @return {ListUsageForLicenseConfigurationResponse} Success
		 */
		ListUsageForLicenseConfiguration(callback: (data : ListUsageForLicenseConfigurationResponse) => any, requestBody: ListUsageForLicenseConfigurationRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWSLicenseManager.ListUsageForLicenseConfiguration', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Adds the specified tags to the specified license configuration.
		 * Post /#X-Amz-Target=AWSLicenseManager.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(callback: (data : TagResourceResponse) => any, requestBody: TagResourceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWSLicenseManager.TagResource', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Removes the specified tags from the specified license configuration.
		 * Post /#X-Amz-Target=AWSLicenseManager.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(callback: (data : UntagResourceResponse) => any, requestBody: UntagResourceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWSLicenseManager.UntagResource', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Modifies the attributes of an existing license configuration.</p> <p>A license configuration is an abstraction of a customer license agreement that can be consumed and enforced by License Manager. Components include specifications for the license type (licensing by instance, socket, CPU, or vCPU), allowed tenancy (shared tenancy, Dedicated Instance, Dedicated Host, or all of these), host affinity (how long a VM must be associated with a host), and the number of licenses purchased and used.</p>
		 * Post /#X-Amz-Target=AWSLicenseManager.UpdateLicenseConfiguration
		 * @return {UpdateLicenseConfigurationResponse} Success
		 */
		UpdateLicenseConfiguration(callback: (data : UpdateLicenseConfigurationResponse) => any, requestBody: UpdateLicenseConfigurationRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWSLicenseManager.UpdateLicenseConfiguration', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Adds or removes the specified license configurations for the specified AWS resource.</p> <p>You can update the license specifications of AMIs, instances, and hosts. You cannot update the license specifications for launch templates and AWS CloudFormation templates, as they send license configurations to the operation that creates the resource.</p>
		 * Post /#X-Amz-Target=AWSLicenseManager.UpdateLicenseSpecificationsForResource
		 * @return {UpdateLicenseSpecificationsForResourceResponse} Success
		 */
		UpdateLicenseSpecificationsForResource(callback: (data : UpdateLicenseSpecificationsForResourceResponse) => any, requestBody: UpdateLicenseSpecificationsForResourceRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWSLicenseManager.UpdateLicenseSpecificationsForResource', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Updates License Manager settings for the current Region.
		 * Post /#X-Amz-Target=AWSLicenseManager.UpdateServiceSettings
		 * @return {UpdateServiceSettingsResponse} Success
		 */
		UpdateServiceSettings(callback: (data : UpdateServiceSettingsResponse) => any, requestBody: UpdateServiceSettingsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWSLicenseManager.UpdateServiceSettings', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}
	}

}

