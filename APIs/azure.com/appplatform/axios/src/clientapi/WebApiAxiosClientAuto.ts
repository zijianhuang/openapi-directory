import Axios from 'axios';
import { AxiosResponse } from 'axios';
export namespace My_Demo_Client {

	/**App resource payload */
	export interface AppResource {

		/**App resource properties payload */
		properties?: AppResourceProperties;
	}


	/**Object that includes an array of App resources and a possible link for next set */
	export interface AppResourceCollection {

		/**
		 * URL client should use to fetch the next page (per server side paging).
		 * It's null for now, added for future use.
		 */
		nextLink?: string;

		/**Collection of App resources */
		value?: Array<AppResource>;
	}


	/**App resource properties payload */
	export interface AppResourceProperties {

		/**Name of the active deployment of the App */
		activeDeploymentName?: string;

		/**Date time when the resource is created */
		createdTime?: Date;

		/**Persistent disk payload */
		persistentDisk?: PersistentDisk;

		/**Provisioning state of the App */
		provisioningState?: AppResourcePropertiesProvisioningState;

		/**Indicates whether the App exposes public endpoint */
		public?: boolean;

		/**Temporary disk payload */
		temporaryDisk?: TemporaryDisk;

		/**URL of the App */
		url?: string;
	}

	export enum AppResourcePropertiesProvisioningState { Succeeded = 0, Failed = 1, Creating = 2, Updating = 3 }


	/**Available operations of the service */
	export interface AvailableOperations {

		/**
		 * URL client should use to fetch the next page (per server side paging).
		 * It's null for now, added for future use.
		 */
		nextLink?: string;

		/**Collection of available operation details */
		value?: Array<OperationDetail>;
	}


	/**Binding resource payload */
	export interface BindingResource {

		/**Binding resource properties payload */
		properties?: BindingResourceProperties;
	}


	/**Object that includes an array of Binding resources and a possible link for next set */
	export interface BindingResourceCollection {

		/**
		 * URL client should use to fetch the next page (per server side paging).
		 * It's null for now, added for future use.
		 */
		nextLink?: string;

		/**Collection of Binding resources */
		value?: Array<BindingResource>;
	}


	/**Binding resource properties payload */
	export interface BindingResourceProperties {

		/**Binding parameters of the Binding resource */
		bindingParameters?: string;

		/**Creation time of the Binding resource */
		createdAt?: string;

		/**The generated Spring Boot property file for this binding. The secret will be deducted. */
		generatedProperties?: string;

		/**The key of the bound resource */
		key?: string;

		/**The Azure resource id of the bound resource */
		resourceId?: string;

		/**The name of the bound resource */
		resourceName?: string;

		/**The standard Azure resource type of the bound resource */
		resourceType?: string;

		/**Update time of the Binding resource */
		updatedAt?: string;
	}


	/**An error response from the service. */
	export interface CloudError {

		/**An error response from the service. */
		error?: CloudErrorBody;
	}


	/**An error response from the service. */
	export interface CloudErrorBody {

		/**An identifier for the error. Codes are invariant and are intended to be consumed programmatically. */
		code?: string;

		/**A list of additional details about the error. */
		details?: Array<CloudErrorBody>;

		/**A message describing the error, intended to be suitable for display in a user interface. */
		message?: string;

		/**The target of the particular error. For example, the name of the property in error. */
		target?: string;
	}


	/**Service properties payload */
	export interface ClusterResourceProperties {

		/**Config server git properties payload */
		configServerProperties?: ConfigServerProperties;

		/**Provisioning state of the Service */
		provisioningState?: ClusterResourcePropertiesProvisioningState;

		/**ServiceInstanceEntity GUID which uniquely identifies a created resource */
		serviceId?: string;

		/**Trace properties payload */
		trace?: TraceProperties;

		/**Version of the Service */
		version?: number;
	}

	export enum ClusterResourcePropertiesProvisioningState { Creating = 0, Updating = 1, Deleting = 2, Deleted = 3, Succeeded = 4, Failed = 5, Moving = 6, Moved = 7, MoveFailed = 8 }


	/**Property of git. */
	export interface ConfigServerGitProperty {

		/**Public sshKey of git repository. */
		hostKey?: string;

		/**SshKey algorithm of git repository. */
		hostKeyAlgorithm?: string;

		/**Label of the repository */
		label?: string;

		/**Password of git repository basic auth. */
		password?: string;

		/**Private sshKey algorithm of git repository. */
		privateKey?: string;

		/**Repositories of git. */
		repositories?: Array<GitPatternRepository>;

		/**Searching path of the repository */
		searchPaths?: Array<string>;

		/**Strict host key checking or not. */
		strictHostKeyChecking?: boolean;

		/**URI of the repository */
		uri: string;

		/**Username of git repository basic auth. */
		username?: string;
	}


	/**Config server git properties payload */
	export interface ConfigServerProperties {

		/**The settings of config server. */
		configServer?: ConfigServerSettings;

		/**The error code compose of code and message. */
		error?: Error;

		/**State of the config server. */
		state?: ConfigServerPropertiesState;
	}

	export enum ConfigServerPropertiesState { NotAvailable = 0, Deleted = 1, Failed = 2, Succeeded = 3, Updating = 4 }


	/**The settings of config server. */
	export interface ConfigServerSettings {

		/**Property of git. */
		gitProperty?: ConfigServerGitProperty;
	}


	/**Deployment instance payload */
	export interface DeploymentInstance {

		/**Discovery status of the deployment instance */
		discoveryStatus?: string;

		/**Name of the deployment instance */
		name?: string;

		/**Failed reason of the deployment instance */
		reason?: string;

		/**Status of the deployment instance */
		status?: string;
	}


	/**Deployment resource payload */
	export interface DeploymentResource {

		/**Deployment resource properties payload */
		properties?: DeploymentResourceProperties;
	}


	/**Object that includes an array of App resources and a possible link for next set */
	export interface DeploymentResourceCollection {

		/**
		 * URL client should use to fetch the next page (per server side paging).
		 * It's null for now, added for future use.
		 */
		nextLink?: string;

		/**Collection of Deployment resources */
		value?: Array<DeploymentResource>;
	}


	/**Deployment resource properties payload */
	export interface DeploymentResourceProperties {

		/**Indicates whether the Deployment is active */
		active?: boolean;

		/**App name of the deployment */
		appName?: string;

		/**Date time when the resource is created */
		createdTime?: Date;

		/**Deployment settings payload */
		deploymentSettings?: DeploymentSettings;

		/**Collection of instances belong to the Deployment */
		instances?: Array<DeploymentInstance>;

		/**Provisioning state of the Deployment */
		provisioningState?: DeploymentResourcePropertiesProvisioningState;

		/**Source information for a deployment */
		source?: UserSourceInfo;

		/**Status of the Deployment */
		status?: DeploymentResourcePropertiesStatus;
	}

	export enum DeploymentResourcePropertiesProvisioningState { Creating = 0, Updating = 1, Succeeded = 2, Failed = 3 }

	export enum DeploymentResourcePropertiesStatus { Unknown = 0, Stopped = 1, Running = 2, Failed = 3, Allocating = 4, Upgrading = 5, Compiling = 6 }


	/**Deployment settings payload */
	export interface DeploymentSettings {

		/**
		 * Required CPU
		 * Minimum: 1
		 * Maximum: 4
		 */
		cpu?: number;

		/**Collection of environment variables */
		environmentVariables?: string;

		/**
		 * Instance count
		 * Minimum: 1
		 * Maximum: 20
		 */
		instanceCount?: number;

		/**JVM parameter */
		jvmOptions?: string;

		/**
		 * Required Memory size in GB
		 * Minimum: 1
		 * Maximum: 8
		 */
		memoryInGB?: number;

		/**Runtime version */
		runtimeVersion?: DeploymentSettingsRuntimeVersion;
	}

	export enum DeploymentSettingsRuntimeVersion { Java_8 = 0, Java_11 = 1 }


	/**The error code compose of code and message. */
	export interface Error {

		/**The code of error. */
		code?: string;

		/**The message of error. */
		message?: string;
	}


	/**Git repository property payload */
	export interface GitPatternRepository {

		/**Public sshKey of git repository. */
		hostKey?: string;

		/**SshKey algorithm of git repository. */
		hostKeyAlgorithm?: string;

		/**Label of the repository */
		label?: string;

		/**Name of the repository */
		name: string;

		/**Password of git repository basic auth. */
		password?: string;

		/**Collection of pattern of the repository */
		pattern?: Array<string>;

		/**Private sshKey algorithm of git repository. */
		privateKey?: string;

		/**Searching path of the repository */
		searchPaths?: Array<string>;

		/**Strict host key checking or not. */
		strictHostKeyChecking?: boolean;

		/**URI of the repository */
		uri: string;

		/**Username of git repository basic auth. */
		username?: string;
	}


	/**Log file URL payload */
	export interface LogFileUrlResponse {

		/**URL of the log file */
		url: string;
	}


	/**Specifications of the Log for Azure Monitoring */
	export interface LogSpecification {

		/**Blob duration of the log */
		blobDuration?: string;

		/**Localized friendly display name of the log */
		displayName?: string;

		/**Name of the log */
		name?: string;
	}


	/**Specifications of the Dimension of metrics */
	export interface MetricDimension {

		/**Localized friendly display name of the dimension */
		displayName?: string;

		/**Name of the dimension */
		name?: string;
	}


	/**Specifications of the Metrics for Azure Monitoring */
	export interface MetricSpecification {

		/**Only provide one value for this field. Valid values: Average, Minimum, Maximum, Total, Count. */
		aggregationType?: string;

		/**Name of the metric category that the metric belongs to. A metric can only belong to a single category. */
		category?: string;

		/**Dimensions of the metric */
		dimensions?: Array<MetricDimension>;

		/**Localized friendly description of the metric */
		displayDescription?: string;

		/**Localized friendly display name of the metric */
		displayName?: string;

		/**Optional. If set to true, then zero will be returned for time duration where no metric is emitted/published. */
		fillGapWithZero?: boolean;

		/**Name of the metric */
		name?: string;

		/**Supported aggregation types */
		supportedAggregationTypes?: Array<string>;

		/**Supported time grain types */
		supportedTimeGrainTypes?: Array<string>;

		/**Unit that makes sense for the metric */
		unit?: string;
	}


	/**Name availability result payload */
	export interface NameAvailability {

		/**Message why the name is not available */
		message?: string;

		/**Indicates whether the name is available */
		nameAvailable?: boolean;

		/**Reason why the name is not available */
		reason?: string;
	}


	/**Name availability parameters payload */
	export interface NameAvailabilityParameters {

		/**Name to be checked */
		name: string;

		/**Type of the resource to check name availability */
		type: string;
	}


	/**Operation detail payload */
	export interface OperationDetail {

		/**Indicates whether the operation is a data action */
		dataAction?: boolean;

		/**Operation display payload */
		display?: OperationDisplay;

		/**Name of the operation */
		name?: string;

		/**Origin of the operation */
		origin?: string;

		/**Extra Operation properties */
		properties?: OperationProperties;
	}


	/**Operation display payload */
	export interface OperationDisplay {

		/**Localized friendly description for the operation */
		description?: string;

		/**Localized friendly name for the operation */
		operation?: string;

		/**Resource provider of the operation */
		provider?: string;

		/**Resource of the operation */
		resource?: string;
	}


	/**Extra Operation properties */
	export interface OperationProperties {

		/**Service specification payload */
		serviceSpecification?: ServiceSpecification;
	}


	/**Persistent disk payload */
	export interface PersistentDisk {

		/**Mount path of the persistent disk */
		mountPath?: string;

		/**
		 * Size of the persistent disk in GB
		 * Minimum: 0
		 * Maximum: 50
		 */
		sizeInGB?: number;

		/**
		 * Size of the used persistent disk in GB
		 * Minimum: 0
		 * Maximum: 50
		 */
		usedInGB?: number;
	}


	/**Regenerate test key request payload */
	export interface RegenerateTestKeyRequestPayload {

		/**Type of the test key */
		keyType: RegenerateTestKeyRequestPayloadKeyType;
	}

	export enum RegenerateTestKeyRequestPayloadKeyType { Primary = 0, Secondary = 1 }


	/**The core properties of ARM resources. */
	export interface Resource {

		/**Fully qualified resource Id for the resource. */
		id?: string;

		/**The name of the resource. */
		name?: string;

		/**The type of the resource. */
		type?: string;
	}


	/**Resource upload definition payload */
	export interface ResourceUploadDefinition {

		/**Source relative path */
		relativePath?: string;

		/**Upload URL */
		uploadUrl?: string;
	}


	/**Service resource */
	export interface ServiceResource {

		/**Service properties payload */
		properties?: ClusterResourceProperties;
	}


	/**Object that includes an array of Service resources and a possible link for next set */
	export interface ServiceResourceList {

		/**
		 * URL client should use to fetch the next page (per server side paging).
		 * It's null for now, added for future use.
		 */
		nextLink?: string;

		/**Collection of Service resources */
		value?: Array<ServiceResource>;
	}


	/**Service specification payload */
	export interface ServiceSpecification {

		/**Specifications of the Log for Azure Monitoring */
		logSpecifications?: Array<LogSpecification>;

		/**Specifications of the Metrics for Azure Monitoring */
		metricSpecifications?: Array<MetricSpecification>;
	}


	/**Temporary disk payload */
	export interface TemporaryDisk {

		/**Mount path of the temporary disk */
		mountPath?: string;

		/**
		 * Size of the temporary disk in GB
		 * Minimum: 0
		 * Maximum: 5
		 */
		sizeInGB?: number;
	}


	/**Test keys payload */
	export interface TestKeys {

		/**Indicates whether the test endpoint feature enabled or not */
		enabled?: boolean;

		/**Primary key */
		primaryKey?: string;

		/**Primary test endpoint */
		primaryTestEndpoint?: string;

		/**Secondary key */
		secondaryKey?: string;

		/**Secondary test endpoint */
		secondaryTestEndpoint?: string;
	}


	/**Trace properties payload */
	export interface TraceProperties {

		/**Target application insight instrumentation key */
		appInsightInstrumentationKey?: string;

		/**Indicates whether enable the tracing functionality */
		enabled?: boolean;

		/**The error code compose of code and message. */
		error?: Error;

		/**State of the trace proxy. */
		state?: TracePropertiesState;
	}

	export enum TracePropertiesState { NotAvailable = 0, Failed = 1, Succeeded = 2, Updating = 3 }


	/**The resource model definition for a ARM tracked top level resource. */
	export interface TrackedResource {

		/**The GEO location of the resource. */
		location?: string;

		/**Tags of the service which is a list of key value pairs that describe the resource. */
		tags?: string;
	}


	/**Source information for a deployment */
	export interface UserSourceInfo {

		/**
		 * Selector for the artifact to be used for the deployment for multi-module projects. This should be
		 * the relative path to the target module/project.
		 */
		artifactSelector?: string;

		/**Relative path of the storage which stores the source */
		relativePath?: string;

		/**Type of the source uploaded */
		type?: UserSourceInfoType;

		/**Version of the source */
		version?: string;
	}

	export enum UserSourceInfoType { Jar = 0, Source = 1 }

	export class DemoClient {
		constructor(private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/') {
		}

		/**
		 * Lists all of the available REST API operations of the Microsoft.AppPlatform provider.
		 * Get providers/Microsoft.AppPlatform/operations
		 * @param {string} api_version Client Api Version.
		 * @return {AvailableOperations} Success. The response describes the list of operations.
		 */
		Operations_List(api_version: string, headersHandler?: () => {[header: string]: string}): Promise<AvailableOperations> {
			return Axios.get<AvailableOperations>(this.baseUri + 'providers/Microsoft.AppPlatform/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Handles requests to list all resources in a subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.AppPlatform/Spring
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {ServiceResourceList} Success. The response describes the list of Services in the subscription.
		 */
		Services_ListBySubscription(api_version: string, subscriptionId: string, headersHandler?: () => {[header: string]: string}): Promise<ServiceResourceList> {
			return Axios.get<ServiceResourceList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.AppPlatform/Spring?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Checks that the resource name is valid and is not already in use.
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.AppPlatform/locations/{location}/checkNameAvailability
		 * @param {string} location the region
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {NameAvailabilityParameters} requestBody Parameters supplied to the operation.
		 * @return {NameAvailability} Success. The response describes the name availability.
		 */
		Services_CheckNameAvailability(location: string, api_version: string, subscriptionId: string, requestBody: NameAvailabilityParameters, headersHandler?: () => {[header: string]: string}): Promise<NameAvailability> {
			return Axios.post<NameAvailability>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.AppPlatform/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/checkNameAvailability&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Handles requests to list all resources in a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @return {ServiceResourceList} Success. The response describes the list of Services in the resource group.
		 */
		Services_List(api_version: string, subscriptionId: string, resourceGroupName: string, headersHandler?: () => {[header: string]: string}): Promise<ServiceResourceList> {
			return Axios.get<ServiceResourceList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppPlatform/Spring?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Operation to delete a Service.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serviceName The name of the Service resource.
		 * @return {void} 
		 */
		Services_Delete(api_version: string, subscriptionId: string, resourceGroupName: string, serviceName: string, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppPlatform/Spring/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Get a Service and its properties.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serviceName The name of the Service resource.
		 * @return {ServiceResource} Success. The response describes the corresponding Service.
		 */
		Services_Get(api_version: string, subscriptionId: string, resourceGroupName: string, serviceName: string, headersHandler?: () => {[header: string]: string}): Promise<ServiceResource> {
			return Axios.get<ServiceResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppPlatform/Spring/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Create a new Service or update an exiting Service.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serviceName The name of the Service resource.
		 * @param {ServiceResource} requestBody Parameters for the create or update operation
		 * @return {ServiceResource} Success. The response describes the updated Service.
		 */
		Services_CreateOrUpdate(api_version: string, subscriptionId: string, resourceGroupName: string, serviceName: string, requestBody: ServiceResource, headersHandler?: () => {[header: string]: string}): Promise<ServiceResource> {
			return Axios.put<ServiceResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppPlatform/Spring/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Handles requests to list all resources in a Service.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serviceName The name of the Service resource.
		 * @return {AppResourceCollection} Success. The response describes the list of Apps in the Service.
		 */
		Apps_List(api_version: string, subscriptionId: string, resourceGroupName: string, serviceName: string, headersHandler?: () => {[header: string]: string}): Promise<AppResourceCollection> {
			return Axios.get<AppResourceCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppPlatform/Spring/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apps?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Operation to delete an App.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serviceName The name of the Service resource.
		 * @param {string} appName The name of the App resource.
		 * @return {void} Success. The response indicates the resource is deleted.
		 */
		Apps_Delete(api_version: string, subscriptionId: string, resourceGroupName: string, serviceName: string, appName: string, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppPlatform/Spring/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Get an App and its properties.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}
		 * @param {string} syncStatus Indicates whether sync status
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serviceName The name of the Service resource.
		 * @param {string} appName The name of the App resource.
		 * @return {AppResource} Success. The response describes the corresponding App.
		 */
		Apps_Get(syncStatus: string, api_version: string, subscriptionId: string, resourceGroupName: string, serviceName: string, appName: string, headersHandler?: () => {[header: string]: string}): Promise<AppResource> {
			return Axios.get<AppResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppPlatform/Spring/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '?syncStatus=' + (syncStatus == null ? '' : encodeURIComponent(syncStatus)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Create a new App or update an exiting App.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serviceName The name of the Service resource.
		 * @param {string} appName The name of the App resource.
		 * @param {AppResource} requestBody Parameters for the create or update operation
		 * @return {AppResource} Success. The response describes the updated App.
		 */
		Apps_CreateOrUpdate(api_version: string, subscriptionId: string, resourceGroupName: string, serviceName: string, appName: string, requestBody: AppResource, headersHandler?: () => {[header: string]: string}): Promise<AppResource> {
			return Axios.put<AppResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppPlatform/Spring/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Handles requests to list all resources in an App.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/bindings
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serviceName The name of the Service resource.
		 * @param {string} appName The name of the App resource.
		 * @return {BindingResourceCollection} Success. The response describes the list of Bindings in the App.
		 */
		Bindings_List(api_version: string, subscriptionId: string, resourceGroupName: string, serviceName: string, appName: string, headersHandler?: () => {[header: string]: string}): Promise<BindingResourceCollection> {
			return Axios.get<BindingResourceCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppPlatform/Spring/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '/bindings?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Operation to delete a Binding.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/bindings/{bindingName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serviceName The name of the Service resource.
		 * @param {string} appName The name of the App resource.
		 * @param {string} bindingName The name of the Binding resource.
		 * @return {void} Success. The response indicates the resource is deleted.
		 */
		Bindings_Delete(api_version: string, subscriptionId: string, resourceGroupName: string, serviceName: string, appName: string, bindingName: string, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppPlatform/Spring/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '/bindings/' + (bindingName == null ? '' : encodeURIComponent(bindingName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Get a Binding and its properties.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/bindings/{bindingName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serviceName The name of the Service resource.
		 * @param {string} appName The name of the App resource.
		 * @param {string} bindingName The name of the Binding resource.
		 * @return {BindingResource} Success. The response describes the corresponding Binding.
		 */
		Bindings_Get(api_version: string, subscriptionId: string, resourceGroupName: string, serviceName: string, appName: string, bindingName: string, headersHandler?: () => {[header: string]: string}): Promise<BindingResource> {
			return Axios.get<BindingResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppPlatform/Spring/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '/bindings/' + (bindingName == null ? '' : encodeURIComponent(bindingName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Create a new Binding or update an exiting Binding.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/bindings/{bindingName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serviceName The name of the Service resource.
		 * @param {string} appName The name of the App resource.
		 * @param {string} bindingName The name of the Binding resource.
		 * @param {BindingResource} requestBody Parameters for the create or update operation
		 * @return {BindingResource} Success. The response describes the created or updated Binding.
		 */
		Bindings_CreateOrUpdate(api_version: string, subscriptionId: string, resourceGroupName: string, serviceName: string, appName: string, bindingName: string, requestBody: BindingResource, headersHandler?: () => {[header: string]: string}): Promise<BindingResource> {
			return Axios.put<BindingResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppPlatform/Spring/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '/bindings/' + (bindingName == null ? '' : encodeURIComponent(bindingName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Handles requests to list all resources in an App.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/deployments
		 * @param {Array<string>} version Version of the deployments to be listed
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serviceName The name of the Service resource.
		 * @param {string} appName The name of the App resource.
		 * @return {DeploymentResourceCollection} Success. The response describes the list of Deployments in the App.
		 */
		Deployments_List(version: Array<string>, api_version: string, subscriptionId: string, resourceGroupName: string, serviceName: string, appName: string, headersHandler?: () => {[header: string]: string}): Promise<DeploymentResourceCollection> {
			return Axios.get<DeploymentResourceCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppPlatform/Spring/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '/deployments?' + version.map(z => `version=${encodeURIComponent(z)}`).join('&') + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Operation to delete a Deployment.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/deployments/{deploymentName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serviceName The name of the Service resource.
		 * @param {string} appName The name of the App resource.
		 * @param {string} deploymentName The name of the Deployment resource.
		 * @return {void} Success. The response indicates the resource is deleted.
		 */
		Deployments_Delete(api_version: string, subscriptionId: string, resourceGroupName: string, serviceName: string, appName: string, deploymentName: string, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppPlatform/Spring/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '/deployments/' + (deploymentName == null ? '' : encodeURIComponent(deploymentName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Get a Deployment and its properties.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/deployments/{deploymentName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serviceName The name of the Service resource.
		 * @param {string} appName The name of the App resource.
		 * @param {string} deploymentName The name of the Deployment resource.
		 * @return {DeploymentResource} Success. The response describes the corresponding Deployment.
		 */
		Deployments_Get(api_version: string, subscriptionId: string, resourceGroupName: string, serviceName: string, appName: string, deploymentName: string, headersHandler?: () => {[header: string]: string}): Promise<DeploymentResource> {
			return Axios.get<DeploymentResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppPlatform/Spring/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '/deployments/' + (deploymentName == null ? '' : encodeURIComponent(deploymentName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Create a new Deployment or update an exiting Deployment.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/deployments/{deploymentName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serviceName The name of the Service resource.
		 * @param {string} appName The name of the App resource.
		 * @param {string} deploymentName The name of the Deployment resource.
		 * @param {DeploymentResource} requestBody Parameters for the create or update operation
		 * @return {DeploymentResource} Success. The response describes the updated Deployment.
		 */
		Deployments_CreateOrUpdate(api_version: string, subscriptionId: string, resourceGroupName: string, serviceName: string, appName: string, deploymentName: string, requestBody: DeploymentResource, headersHandler?: () => {[header: string]: string}): Promise<DeploymentResource> {
			return Axios.put<DeploymentResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppPlatform/Spring/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '/deployments/' + (deploymentName == null ? '' : encodeURIComponent(deploymentName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Get deployment log file URL
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/deployments/{deploymentName}/getLogFileUrl
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serviceName The name of the Service resource.
		 * @param {string} appName The name of the App resource.
		 * @param {string} deploymentName The name of the Deployment resource.
		 * @return {LogFileUrlResponse} Success. The response contains the log file URL.
		 */
		Deployments_GetLogFileUrl(api_version: string, subscriptionId: string, resourceGroupName: string, serviceName: string, appName: string, deploymentName: string, headersHandler?: () => {[header: string]: string}): Promise<LogFileUrlResponse> {
			return Axios.post<LogFileUrlResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppPlatform/Spring/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '/deployments/' + (deploymentName == null ? '' : encodeURIComponent(deploymentName)) + '/getLogFileUrl?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Restart the deployment.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/deployments/{deploymentName}/restart
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serviceName The name of the Service resource.
		 * @param {string} appName The name of the App resource.
		 * @param {string} deploymentName The name of the Deployment resource.
		 * @return {void} Success.
		 */
		Deployments_Restart(api_version: string, subscriptionId: string, resourceGroupName: string, serviceName: string, appName: string, deploymentName: string, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppPlatform/Spring/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '/deployments/' + (deploymentName == null ? '' : encodeURIComponent(deploymentName)) + '/restart?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Start the deployment.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/deployments/{deploymentName}/start
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serviceName The name of the Service resource.
		 * @param {string} appName The name of the App resource.
		 * @param {string} deploymentName The name of the Deployment resource.
		 * @return {void} Success.
		 */
		Deployments_Start(api_version: string, subscriptionId: string, resourceGroupName: string, serviceName: string, appName: string, deploymentName: string, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppPlatform/Spring/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '/deployments/' + (deploymentName == null ? '' : encodeURIComponent(deploymentName)) + '/start?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Stop the deployment.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/deployments/{deploymentName}/stop
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serviceName The name of the Service resource.
		 * @param {string} appName The name of the App resource.
		 * @param {string} deploymentName The name of the Deployment resource.
		 * @return {void} Success.
		 */
		Deployments_Stop(api_version: string, subscriptionId: string, resourceGroupName: string, serviceName: string, appName: string, deploymentName: string, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppPlatform/Spring/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '/deployments/' + (deploymentName == null ? '' : encodeURIComponent(deploymentName)) + '/stop?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Get an resource upload URL for an App, which may be artifacts or source archive.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/getResourceUploadUrl
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serviceName The name of the Service resource.
		 * @param {string} appName The name of the App resource.
		 * @return {ResourceUploadDefinition} Success. The response describes the resource upload URL.
		 */
		Apps_GetResourceUploadUrl(api_version: string, subscriptionId: string, resourceGroupName: string, serviceName: string, appName: string, headersHandler?: () => {[header: string]: string}): Promise<ResourceUploadDefinition> {
			return Axios.post<ResourceUploadDefinition>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppPlatform/Spring/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '/getResourceUploadUrl?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * List deployments for a certain service
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/deployments
		 * @param {Array<string>} version Version of the deployments to be listed
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serviceName The name of the Service resource.
		 * @return {DeploymentResourceCollection} Success
		 */
		Deployments_ListClusterAllDeployments(version: Array<string>, api_version: string, subscriptionId: string, resourceGroupName: string, serviceName: string, headersHandler?: () => {[header: string]: string}): Promise<DeploymentResourceCollection> {
			return Axios.get<DeploymentResourceCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppPlatform/Spring/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/deployments?' + version.map(z => `version=${encodeURIComponent(z)}`).join('&') + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/disableTestEndpoint
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serviceName The name of the Service resource.
		 * @return {void} Success
		 */
		Services_DisableTestEndpoint(api_version: string, subscriptionId: string, resourceGroupName: string, serviceName: string, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppPlatform/Spring/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/disableTestEndpoint?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/enableTestEndpoint
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serviceName The name of the Service resource.
		 * @return {TestKeys} Success
		 */
		Services_EnableTestEndpoint(api_version: string, subscriptionId: string, resourceGroupName: string, serviceName: string, headersHandler?: () => {[header: string]: string}): Promise<TestKeys> {
			return Axios.post<TestKeys>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppPlatform/Spring/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/enableTestEndpoint?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * List test keys for a Service.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/listTestKeys
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serviceName The name of the Service resource.
		 * @return {TestKeys} Success. The response describes the test keys.
		 */
		Services_ListTestKeys(api_version: string, subscriptionId: string, resourceGroupName: string, serviceName: string, headersHandler?: () => {[header: string]: string}): Promise<TestKeys> {
			return Axios.post<TestKeys>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppPlatform/Spring/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/listTestKeys?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Regenerate a test key for a Service.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/regenerateTestKey
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serviceName The name of the Service resource.
		 * @param {RegenerateTestKeyRequestPayload} requestBody Parameters for the operation
		 * @return {TestKeys} Success.
		 */
		Services_RegenerateTestKey(api_version: string, subscriptionId: string, resourceGroupName: string, serviceName: string, requestBody: RegenerateTestKeyRequestPayload, headersHandler?: () => {[header: string]: string}): Promise<TestKeys> {
			return Axios.post<TestKeys>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppPlatform/Spring/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/regenerateTestKey?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}
	}

}

