import Axios from 'axios';
import { AxiosResponse } from 'axios';
export namespace My_Demo_Client {
	export interface CreateBrokerResponse {
		BrokerArn?: string;
		BrokerId?: string;
	}

	export enum DayOfWeek { MONDAY = 0, TUESDAY = 1, WEDNESDAY = 2, THURSDAY = 3, FRIDAY = 4, SATURDAY = 5, SUNDAY = 6 }


	/**An ActiveMQ user associated with the broker. */
	export interface User {
		ConsoleAccess?: boolean;
		Groups?: Array<__string>;
		Password?: string;
		Username?: string;
	}

	export interface CreateConfigurationResponse {
		Arn?: string;
		Created?: Date;
		Id?: string;

		/**Returns information about the specified configuration revision. */
		LatestRevision?: ConfigurationRevision;
		Name?: string;
	}

	export interface DeleteBrokerResponse {
		BrokerId?: string;
	}

	export interface DescribeBrokerResponse {
		AutoMinorVersionUpgrade?: boolean;
		BrokerArn?: string;
		BrokerId?: string;
		BrokerInstances?: Array<BrokerInstance>;
		BrokerName?: string;

		/**The status of the broker. */
		BrokerState?: DescribeBrokerResponseBrokerState;

		/**Broker configuration information */
		Configurations?: Configurations;
		Created?: Date;

		/**The deployment mode of the broker. */
		DeploymentMode?: DescribeBrokerResponseDeploymentMode;

		/**Encryption options for the broker. */
		EncryptionOptions?: EncryptionOptions;

		/**The type of broker engine. Note: Currently, Amazon MQ supports only ActiveMQ. */
		EngineType?: DescribeBrokerResponseEngineType;
		EngineVersion?: string;
		HostInstanceType?: string;

		/**The list of information about logs currently enabled and pending to be deployed for the specified broker. */
		Logs?: LogsSummary;

		/**The scheduled time period relative to UTC during which Amazon MQ begins to apply pending updates or patches to the broker. */
		MaintenanceWindowStartTime?: WeeklyStartTime;
		PendingEngineVersion?: string;
		PendingHostInstanceType?: string;
		PendingSecurityGroups?: Array<__string>;
		PubliclyAccessible?: boolean;
		SecurityGroups?: Array<__string>;

		/**The storage type of the broker. */
		StorageType?: DescribeBrokerResponseStorageType;
		SubnetIds?: Array<__string>;
		Tags?: __mapOf__string;
		Users?: Array<UserSummary>;
	}

	export enum DescribeBrokerResponseBrokerState { CREATION_IN_PROGRESS = 0, CREATION_FAILED = 1, DELETION_IN_PROGRESS = 2, RUNNING = 3, REBOOT_IN_PROGRESS = 4 }

	export enum DescribeBrokerResponseDeploymentMode { SINGLE_INSTANCE = 0, ACTIVE_STANDBY_MULTI_AZ = 1 }

	export enum DescribeBrokerResponseEngineType { ACTIVEMQ = 0 }

	export enum DescribeBrokerResponseStorageType { EBS = 0, EFS = 1 }

	export interface DescribeBrokerEngineTypesResponse {
		BrokerEngineTypes?: Array<BrokerEngineType>;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface DescribeBrokerInstanceOptionsResponse {
		BrokerInstanceOptions?: Array<BrokerInstanceOption>;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface DescribeConfigurationResponse {
		Arn?: string;
		Created?: Date;
		Description?: string;

		/**The type of broker engine. Note: Currently, Amazon MQ supports only ActiveMQ. */
		EngineType?: DescribeConfigurationResponseEngineType;
		EngineVersion?: string;
		Id?: string;

		/**Returns information about the specified configuration revision. */
		LatestRevision?: ConfigurationRevision;
		Name?: string;
		Tags?: __mapOf__string;
	}

	export enum DescribeConfigurationResponseEngineType { ACTIVEMQ = 0 }

	export interface DescribeConfigurationRevisionResponse {
		ConfigurationId?: string;
		Created?: Date;
		Data?: string;
		Description?: string;
	}

	export interface DescribeUserResponse {
		BrokerId?: string;
		ConsoleAccess?: boolean;
		Groups?: Array<__string>;

		/**Returns information about the status of the changes pending for the ActiveMQ user. */
		Pending?: UserPendingChanges;
		Username?: string;
	}

	export interface ListBrokersResponse {
		BrokerSummaries?: Array<BrokerSummary>;
		NextToken?: string;
	}

	export interface ListConfigurationRevisionsResponse {
		ConfigurationId?: string;
		MaxResults?: number;
		NextToken?: string;
		Revisions?: Array<ConfigurationRevision>;
	}

	export interface ListConfigurationsResponse {
		Configurations?: Array<Configuration>;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface ListTagsResponse {
		Tags?: __mapOf__string;
	}

	export interface ListUsersResponse {
		BrokerId?: string;
		MaxResults?: number;
		NextToken?: string;
		Users?: Array<UserSummary>;
	}

	export interface UpdateBrokerResponse {
		AutoMinorVersionUpgrade?: boolean;
		BrokerId?: string;

		/**A list of information about the configuration. */
		Configuration?: ConfigurationId;
		EngineVersion?: string;
		HostInstanceType?: string;

		/**The list of information about logs to be enabled for the specified broker. */
		Logs?: Logs;
		SecurityGroups?: Array<__string>;
	}

	export interface UpdateConfigurationResponse {
		Arn?: string;
		Created?: Date;
		Id?: string;

		/**Returns information about the specified configuration revision. */
		LatestRevision?: ConfigurationRevision;
		Name?: string;
		Warnings?: Array<SanitizationWarning>;
	}


	/**Name of the availability zone. */
	export interface AvailabilityZone {
		Name?: string;
	}


	/**The type of broker engine. Note: Currently, Amazon MQ supports only ActiveMQ. */
	export enum EngineType { ACTIVEMQ = 0 }


	/**Types of broker engines. */
	export interface BrokerEngineType {

		/**The type of broker engine. Note: Currently, Amazon MQ supports only ActiveMQ. */
		EngineType?: BrokerEngineTypeEngineType;
		EngineVersions?: Array<EngineVersion>;
	}

	export enum BrokerEngineTypeEngineType { ACTIVEMQ = 0 }


	/**Returns information about all brokers. */
	export interface BrokerInstance {
		ConsoleURL?: string;
		Endpoints?: Array<__string>;
		IpAddress?: string;
	}


	/**The storage type of the broker. */
	export enum BrokerStorageType { EBS = 0, EFS = 1 }


	/**Option for host instance type. */
	export interface BrokerInstanceOption {
		AvailabilityZones?: Array<AvailabilityZone>;

		/**The type of broker engine. Note: Currently, Amazon MQ supports only ActiveMQ. */
		EngineType?: BrokerInstanceOptionEngineType;
		HostInstanceType?: string;

		/**The storage type of the broker. */
		StorageType?: BrokerInstanceOptionStorageType;
		SupportedDeploymentModes?: Array<DeploymentMode>;
		SupportedEngineVersions?: Array<__string>;
	}

	export enum BrokerInstanceOptionEngineType { ACTIVEMQ = 0 }

	export enum BrokerInstanceOptionStorageType { EBS = 0, EFS = 1 }


	/**The status of the broker. */
	export enum BrokerState { CREATION_IN_PROGRESS = 0, CREATION_FAILED = 1, DELETION_IN_PROGRESS = 2, RUNNING = 3, REBOOT_IN_PROGRESS = 4 }


	/**The deployment mode of the broker. */
	export enum DeploymentMode { SINGLE_INSTANCE = 0, ACTIVE_STANDBY_MULTI_AZ = 1 }


	/**The Amazon Resource Name (ARN) of the broker. */
	export interface BrokerSummary {
		BrokerArn?: string;
		BrokerId?: string;
		BrokerName?: string;

		/**The status of the broker. */
		BrokerState?: BrokerSummaryBrokerState;
		Created?: Date;

		/**The deployment mode of the broker. */
		DeploymentMode?: BrokerSummaryDeploymentMode;
		HostInstanceType?: string;
	}

	export enum BrokerSummaryBrokerState { CREATION_IN_PROGRESS = 0, CREATION_FAILED = 1, DELETION_IN_PROGRESS = 2, RUNNING = 3, REBOOT_IN_PROGRESS = 4 }

	export enum BrokerSummaryDeploymentMode { SINGLE_INSTANCE = 0, ACTIVE_STANDBY_MULTI_AZ = 1 }


	/**The type of change pending for the ActiveMQ user. */
	export enum ChangeType { CREATE = 0, UPDATE = 1, DELETE = 2 }


	/**Returns information about the specified configuration revision. */
	export interface ConfigurationRevision {
		Created?: Date;
		Description?: string;
		Revision?: number;
	}


	/**Returns information about all configurations. */
	export interface Configuration {
		Arn?: string;
		Created?: Date;
		Description?: string;

		/**The type of broker engine. Note: Currently, Amazon MQ supports only ActiveMQ. */
		EngineType?: ConfigurationEngineType;
		EngineVersion?: string;
		Id?: string;

		/**Returns information about the specified configuration revision. */
		LatestRevision?: ConfigurationRevision;
		Name?: string;
		Tags?: __mapOf__string;
	}

	export enum ConfigurationEngineType { ACTIVEMQ = 0 }


	/**A list of information about the configuration. */
	export interface ConfigurationId {
		Id?: string;
		Revision?: number;
	}


	/**Broker configuration information */
	export interface Configurations {

		/**A list of information about the configuration. */
		Current?: ConfigurationId;
		History?: Array<ConfigurationId>;

		/**A list of information about the configuration. */
		Pending?: ConfigurationId;
	}


	/**Encryption options for the broker. */
	export interface EncryptionOptions {
		KmsKeyId?: string;
		UseAwsOwnedKey: boolean;
	}


	/**The list of information about logs to be enabled for the specified broker. */
	export interface Logs {
		Audit?: boolean;
		General?: boolean;
	}


	/**The scheduled time period relative to UTC during which Amazon MQ begins to apply pending updates or patches to the broker. */
	export interface WeeklyStartTime {
		DayOfWeek?: WeeklyStartTimeDayOfWeek;
		TimeOfDay?: string;
		TimeZone?: string;
	}

	export enum WeeklyStartTimeDayOfWeek { MONDAY = 0, TUESDAY = 1, WEDNESDAY = 2, THURSDAY = 3, FRIDAY = 4, SATURDAY = 5, SUNDAY = 6 }


	/**Creates a broker using the specified properties. */
	export interface CreateBrokerRequest {
		AutoMinorVersionUpgrade?: boolean;
		BrokerName?: string;

		/**A list of information about the configuration. */
		Configuration?: ConfigurationId;
		CreatorRequestId?: string;

		/**The deployment mode of the broker. */
		DeploymentMode?: CreateBrokerRequestDeploymentMode;

		/**Encryption options for the broker. */
		EncryptionOptions?: EncryptionOptions;

		/**The type of broker engine. Note: Currently, Amazon MQ supports only ActiveMQ. */
		EngineType?: CreateBrokerRequestEngineType;
		EngineVersion?: string;
		HostInstanceType?: string;

		/**The list of information about logs to be enabled for the specified broker. */
		Logs?: Logs;

		/**The scheduled time period relative to UTC during which Amazon MQ begins to apply pending updates or patches to the broker. */
		MaintenanceWindowStartTime?: WeeklyStartTime;
		PubliclyAccessible?: boolean;
		SecurityGroups?: Array<__string>;

		/**The storage type of the broker. */
		StorageType?: CreateBrokerRequestStorageType;
		SubnetIds?: Array<__string>;
		Tags?: __mapOf__string;
		Users?: Array<User>;
	}

	export enum CreateBrokerRequestDeploymentMode { SINGLE_INSTANCE = 0, ACTIVE_STANDBY_MULTI_AZ = 1 }

	export enum CreateBrokerRequestEngineType { ACTIVEMQ = 0 }

	export enum CreateBrokerRequestStorageType { EBS = 0, EFS = 1 }


	/**Creates a new configuration for the specified configuration name. Amazon MQ uses the default configuration (the engine type and version). */
	export interface CreateConfigurationRequest {

		/**The type of broker engine. Note: Currently, Amazon MQ supports only ActiveMQ. */
		EngineType?: CreateConfigurationRequestEngineType;
		EngineVersion?: string;
		Name?: string;
		Tags?: __mapOf__string;
	}

	export enum CreateConfigurationRequestEngineType { ACTIVEMQ = 0 }


	/**A map of the key-value pairs for the resource tag. */
	export interface CreateTagsRequest {
		Tags?: __mapOf__string;
	}


	/**Creates a new ActiveMQ user. */
	export interface CreateUserRequest {
		ConsoleAccess?: boolean;
		Groups?: Array<__string>;
		Password?: string;
	}


	/**The list of information about logs currently enabled and pending to be deployed for the specified broker. */
	export interface LogsSummary {
		Audit?: boolean;
		AuditLogGroup?: string;
		General?: boolean;
		GeneralLogGroup?: string;

		/**The list of information about logs to be enabled for the specified broker. */
		Pending?: PendingLogs;
	}


	/**Returns information about the status of the changes pending for the ActiveMQ user. */
	export interface UserPendingChanges {
		ConsoleAccess?: boolean;
		Groups?: Array<__string>;

		/**The type of change pending for the ActiveMQ user. */
		PendingChange?: UserPendingChangesPendingChange;
	}

	export enum UserPendingChangesPendingChange { CREATE = 0, UPDATE = 1, DELETE = 2 }


	/**Id of the engine version. */
	export interface EngineVersion {
		Name?: string;
	}


	/**The list of information about logs to be enabled for the specified broker. */
	export interface PendingLogs {
		Audit?: boolean;
		General?: boolean;
	}


	/**The reason for which the XML elements or attributes were sanitized. */
	export enum SanitizationWarningReason { DISALLOWED_ELEMENT_REMOVED = 0, DISALLOWED_ATTRIBUTE_REMOVED = 1, INVALID_ATTRIBUTE_VALUE_REMOVED = 2 }


	/**Returns information about the XML element or attribute that was sanitized in the configuration. */
	export interface SanitizationWarning {
		AttributeName?: string;
		ElementName?: string;

		/**The reason for which the XML elements or attributes were sanitized. */
		Reason?: SanitizationWarningReason;
	}

	export enum SanitizationWarningReason { DISALLOWED_ELEMENT_REMOVED = 0, DISALLOWED_ATTRIBUTE_REMOVED = 1, INVALID_ATTRIBUTE_VALUE_REMOVED = 2 }


	/**Updates the broker using the specified properties. */
	export interface UpdateBrokerRequest {
		AutoMinorVersionUpgrade?: boolean;

		/**A list of information about the configuration. */
		Configuration?: ConfigurationId;
		EngineVersion?: string;
		HostInstanceType?: string;

		/**The list of information about logs to be enabled for the specified broker. */
		Logs?: Logs;
		SecurityGroups?: Array<__string>;
	}


	/**Updates the specified configuration. */
	export interface UpdateConfigurationRequest {
		Data?: string;
		Description?: string;
	}


	/**Updates the information for an ActiveMQ user. */
	export interface UpdateUserRequest {
		ConsoleAccess?: boolean;
		Groups?: Array<__string>;
		Password?: string;
	}


	/**Returns a list of all ActiveMQ users. */
	export interface UserSummary {

		/**The type of change pending for the ActiveMQ user. */
		PendingChange?: UserSummaryPendingChange;
		Username?: string;
	}

	export enum UserSummaryPendingChange { CREATE = 0, UPDATE = 1, DELETE = 2 }

	export class DemoClient {
		constructor(private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/') {
		}

		/**
		 * Creates a broker. Note: This API is asynchronous.
		 * Post /v1/brokers
		 * @return {CreateBrokerResponse} Success
		 */
		CreateBroker(requestBody: CreateBrokerBody, headersHandler?: () => {[header: string]: string}): Promise<CreateBrokerResponse> {
			return Axios.post<CreateBrokerResponse>(this.baseUri + '/v1/brokers', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Returns a list of all brokers.
		 * Get /v1/brokers
		 * @param {number} maxResults The maximum number of brokers that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.
		 * @param {string} nextToken The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
		 * @return {ListBrokersResponse} Success
		 */
		ListBrokers(maxResults: number, nextToken: string, headersHandler?: () => {[header: string]: string}): Promise<ListBrokersResponse> {
			return Axios.get<ListBrokersResponse>(this.baseUri + '/v1/brokers?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Creates a new configuration for the specified configuration name. Amazon MQ uses the default configuration (the engine type and version).
		 * Post /v1/configurations
		 * @return {CreateConfigurationResponse} Success
		 */
		CreateConfiguration(requestBody: CreateConfigurationBody, headersHandler?: () => {[header: string]: string}): Promise<CreateConfigurationResponse> {
			return Axios.post<CreateConfigurationResponse>(this.baseUri + '/v1/configurations', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Returns a list of all configurations.
		 * Get /v1/configurations
		 * @param {number} maxResults The maximum number of configurations that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.
		 * @param {string} nextToken The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
		 * @return {ListConfigurationsResponse} Success
		 */
		ListConfigurations(maxResults: number, nextToken: string, headersHandler?: () => {[header: string]: string}): Promise<ListConfigurationsResponse> {
			return Axios.get<ListConfigurationsResponse>(this.baseUri + '/v1/configurations?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Add a tag to a resource.
		 * Post /v1/tags/{resource_arn}
		 * @param {string} resource_arn The Amazon Resource Name (ARN) of the resource tag.
		 * @return {void} 
		 */
		CreateTags(resource_arn: string, requestBody: CreateTagsBody, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.post(this.baseUri + '/v1/tags/' + (resource_arn == null ? '' : encodeURIComponent(resource_arn)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Lists tags for a resource.
		 * Get /v1/tags/{resource_arn}
		 * @param {string} resource_arn The Amazon Resource Name (ARN) of the resource tag.
		 * @return {ListTagsResponse} Success
		 */
		ListTags(resource_arn: string, headersHandler?: () => {[header: string]: string}): Promise<ListTagsResponse> {
			return Axios.get<ListTagsResponse>(this.baseUri + '/v1/tags/' + (resource_arn == null ? '' : encodeURIComponent(resource_arn)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Creates an ActiveMQ user.
		 * Post /v1/brokers/{broker_id}/users/{username}
		 * @param {string} broker_id The unique ID that Amazon MQ generates for the broker.
		 * @param {string} username The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
		 * @return {CreateUserResponse} Success
		 */
		CreateUser(broker_id: string, username: string, requestBody: CreateUserBody, headersHandler?: () => {[header: string]: string}): Promise<CreateUserResponse> {
			return Axios.post<CreateUserResponse>(this.baseUri + '/v1/brokers/' + (broker_id == null ? '' : encodeURIComponent(broker_id)) + '/users/' + (username == null ? '' : encodeURIComponent(username)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Deletes an ActiveMQ user.
		 * Delete /v1/brokers/{broker_id}/users/{username}
		 * @param {string} broker_id The unique ID that Amazon MQ generates for the broker.
		 * @param {string} username The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
		 * @return {DeleteUserResponse} Success
		 */
		DeleteUser(broker_id: string, username: string, headersHandler?: () => {[header: string]: string}): Promise<DeleteUserResponse> {
			return Axios.delete<DeleteUserResponse>(this.baseUri + '/v1/brokers/' + (broker_id == null ? '' : encodeURIComponent(broker_id)) + '/users/' + (username == null ? '' : encodeURIComponent(username)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Returns information about an ActiveMQ user.
		 * Get /v1/brokers/{broker_id}/users/{username}
		 * @param {string} broker_id The unique ID that Amazon MQ generates for the broker.
		 * @param {string} username The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
		 * @return {DescribeUserResponse} Success
		 */
		DescribeUser(broker_id: string, username: string, headersHandler?: () => {[header: string]: string}): Promise<DescribeUserResponse> {
			return Axios.get<DescribeUserResponse>(this.baseUri + '/v1/brokers/' + (broker_id == null ? '' : encodeURIComponent(broker_id)) + '/users/' + (username == null ? '' : encodeURIComponent(username)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Updates the information for an ActiveMQ user.
		 * Put /v1/brokers/{broker_id}/users/{username}
		 * @param {string} broker_id The unique ID that Amazon MQ generates for the broker.
		 * @param {string} username Required. The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
		 * @return {UpdateUserResponse} Success
		 */
		UpdateUser(broker_id: string, username: string, requestBody: UpdateUserBody, headersHandler?: () => {[header: string]: string}): Promise<UpdateUserResponse> {
			return Axios.put<UpdateUserResponse>(this.baseUri + '/v1/brokers/' + (broker_id == null ? '' : encodeURIComponent(broker_id)) + '/users/' + (username == null ? '' : encodeURIComponent(username)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Deletes a broker. Note: This API is asynchronous.
		 * Delete /v1/brokers/{broker_id}
		 * @param {string} broker_id The name of the broker. This value must be unique in your AWS account, 1-50 characters long, must contain only letters, numbers, dashes, and underscores, and must not contain whitespaces, brackets, wildcard characters, or special characters.
		 * @return {DeleteBrokerResponse} Success
		 */
		DeleteBroker(broker_id: string, headersHandler?: () => {[header: string]: string}): Promise<DeleteBrokerResponse> {
			return Axios.delete<DeleteBrokerResponse>(this.baseUri + '/v1/brokers/' + (broker_id == null ? '' : encodeURIComponent(broker_id)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Returns information about the specified broker.
		 * Get /v1/brokers/{broker_id}
		 * @param {string} broker_id The name of the broker. This value must be unique in your AWS account, 1-50 characters long, must contain only letters, numbers, dashes, and underscores, and must not contain whitespaces, brackets, wildcard characters, or special characters.
		 * @return {DescribeBrokerResponse} Success
		 */
		DescribeBroker(broker_id: string, headersHandler?: () => {[header: string]: string}): Promise<DescribeBrokerResponse> {
			return Axios.get<DescribeBrokerResponse>(this.baseUri + '/v1/brokers/' + (broker_id == null ? '' : encodeURIComponent(broker_id)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Adds a pending configuration change to a broker.
		 * Put /v1/brokers/{broker_id}
		 * @param {string} broker_id The name of the broker. This value must be unique in your AWS account, 1-50 characters long, must contain only letters, numbers, dashes, and underscores, and must not contain whitespaces, brackets, wildcard characters, or special characters.
		 * @return {UpdateBrokerResponse} Success
		 */
		UpdateBroker(broker_id: string, requestBody: UpdateBrokerBody, headersHandler?: () => {[header: string]: string}): Promise<UpdateBrokerResponse> {
			return Axios.put<UpdateBrokerResponse>(this.baseUri + '/v1/brokers/' + (broker_id == null ? '' : encodeURIComponent(broker_id)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Removes a tag from a resource.
		 * Delete /v1/tags/{resource_arn}#tagKeys
		 * @param {string} resource_arn The Amazon Resource Name (ARN) of the resource tag.
		 * @param {Array<__string>} tagKeys An array of tag keys to delete
		 * @return {void} 
		 */
		DeleteTags(resource_arn: string, tagKeys: Array<__string>, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.delete(this.baseUri + '/v1/tags/' + (resource_arn == null ? '' : encodeURIComponent(resource_arn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${z}`).join('&'), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Describe available engine types and versions.
		 * Get /v1/broker-engine-types
		 * @param {string} engineType Filter response by engine type.
		 * @param {number} maxResults The maximum number of engine types that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.
		 * @param {string} nextToken The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
		 * @return {DescribeBrokerEngineTypesResponse} Success
		 */
		DescribeBrokerEngineTypes(engineType: string, maxResults: number, nextToken: string, headersHandler?: () => {[header: string]: string}): Promise<DescribeBrokerEngineTypesResponse> {
			return Axios.get<DescribeBrokerEngineTypesResponse>(this.baseUri + '/v1/broker-engine-types?engineType=' + (engineType == null ? '' : encodeURIComponent(engineType)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Describe available broker instance options.
		 * Get /v1/broker-instance-options
		 * @param {string} engineType Filter response by engine type.
		 * @param {string} hostInstanceType Filter response by host instance type.
		 * @param {number} maxResults The maximum number of instance options that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.
		 * @param {string} nextToken The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
		 * @param {string} storageType Filter response by storage type.
		 * @return {DescribeBrokerInstanceOptionsResponse} Success
		 */
		DescribeBrokerInstanceOptions(engineType: string, hostInstanceType: string, maxResults: number, nextToken: string, storageType: string, headersHandler?: () => {[header: string]: string}): Promise<DescribeBrokerInstanceOptionsResponse> {
			return Axios.get<DescribeBrokerInstanceOptionsResponse>(this.baseUri + '/v1/broker-instance-options?engineType=' + (engineType == null ? '' : encodeURIComponent(engineType)) + '&hostInstanceType=' + (hostInstanceType == null ? '' : encodeURIComponent(hostInstanceType)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&storageType=' + (storageType == null ? '' : encodeURIComponent(storageType)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Returns information about the specified configuration.
		 * Get /v1/configurations/{configuration_id}
		 * @param {string} configuration_id The unique ID that Amazon MQ generates for the configuration.
		 * @return {DescribeConfigurationResponse} Success
		 */
		DescribeConfiguration(configuration_id: string, headersHandler?: () => {[header: string]: string}): Promise<DescribeConfigurationResponse> {
			return Axios.get<DescribeConfigurationResponse>(this.baseUri + '/v1/configurations/' + (configuration_id == null ? '' : encodeURIComponent(configuration_id)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Updates the specified configuration.
		 * Put /v1/configurations/{configuration_id}
		 * @param {string} configuration_id The unique ID that Amazon MQ generates for the configuration.
		 * @return {UpdateConfigurationResponse} Success
		 */
		UpdateConfiguration(configuration_id: string, requestBody: UpdateConfigurationBody, headersHandler?: () => {[header: string]: string}): Promise<UpdateConfigurationResponse> {
			return Axios.put<UpdateConfigurationResponse>(this.baseUri + '/v1/configurations/' + (configuration_id == null ? '' : encodeURIComponent(configuration_id)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Returns the specified configuration revision for the specified configuration.
		 * Get /v1/configurations/{configuration_id}/revisions/{configuration_revision}
		 * @param {string} configuration_id The unique ID that Amazon MQ generates for the configuration.
		 * @param {string} configuration_revision The revision of the configuration.
		 * @return {DescribeConfigurationRevisionResponse} Success
		 */
		DescribeConfigurationRevision(configuration_id: string, configuration_revision: string, headersHandler?: () => {[header: string]: string}): Promise<DescribeConfigurationRevisionResponse> {
			return Axios.get<DescribeConfigurationRevisionResponse>(this.baseUri + '/v1/configurations/' + (configuration_id == null ? '' : encodeURIComponent(configuration_id)) + '/revisions/' + (configuration_revision == null ? '' : encodeURIComponent(configuration_revision)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Returns a list of all revisions for the specified configuration.
		 * Get /v1/configurations/{configuration_id}/revisions
		 * @param {string} configuration_id The unique ID that Amazon MQ generates for the configuration.
		 * @param {number} maxResults The maximum number of configurations that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.
		 * @param {string} nextToken The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
		 * @return {ListConfigurationRevisionsResponse} Success
		 */
		ListConfigurationRevisions(configuration_id: string, maxResults: number, nextToken: string, headersHandler?: () => {[header: string]: string}): Promise<ListConfigurationRevisionsResponse> {
			return Axios.get<ListConfigurationRevisionsResponse>(this.baseUri + '/v1/configurations/' + (configuration_id == null ? '' : encodeURIComponent(configuration_id)) + '/revisions&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Returns a list of all ActiveMQ users.
		 * Get /v1/brokers/{broker_id}/users
		 * @param {string} broker_id The unique ID that Amazon MQ generates for the broker.
		 * @param {number} maxResults The maximum number of ActiveMQ users that can be returned per page (20 by default). This value must be an integer from 5 to 100.
		 * @param {string} nextToken The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
		 * @return {ListUsersResponse} Success
		 */
		ListUsers(broker_id: string, maxResults: number, nextToken: string, headersHandler?: () => {[header: string]: string}): Promise<ListUsersResponse> {
			return Axios.get<ListUsersResponse>(this.baseUri + '/v1/brokers/' + (broker_id == null ? '' : encodeURIComponent(broker_id)) + '/users&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Reboots a broker. Note: This API is asynchronous.
		 * Post /v1/brokers/{broker_id}/reboot
		 * @param {string} broker_id The unique ID that Amazon MQ generates for the broker.
		 * @return {RebootBrokerResponse} Success
		 */
		RebootBroker(broker_id: string, headersHandler?: () => {[header: string]: string}): Promise<RebootBrokerResponse> {
			return Axios.post<RebootBrokerResponse>(this.baseUri + '/v1/brokers/' + (broker_id == null ? '' : encodeURIComponent(broker_id)) + '/reboot', null, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}
	}

	export interface CreateBrokerBody {

		/**Required. Enables automatic upgrades to new minor versions for brokers, as Apache releases the versions. The automatic upgrades occur during the maintenance window of the broker or after a manual broker reboot. */
		autoMinorVersionUpgrade?: boolean;

		/**Required. The name of the broker. This value must be unique in your AWS account, 1-50 characters long, must contain only letters, numbers, dashes, and underscores, and must not contain whitespaces, brackets, wildcard characters, or special characters. */
		brokerName?: string;

		/**A list of information about the configuration. */
		configuration?: string;

		/**The unique ID that the requester receives for the created broker. Amazon MQ passes your ID with the API action. Note: We recommend using a Universally Unique Identifier (UUID) for the creatorRequestId. You may omit the creatorRequestId if your application doesn't require idempotency. */
		creatorRequestId?: string;

		/**The deployment mode of the broker. */
		deploymentMode?: CreateBrokerBodyDeploymentMode;

		/**Encryption options for the broker. */
		encryptionOptions?: string;

		/**The type of broker engine. Note: Currently, Amazon MQ supports only ActiveMQ. */
		engineType?: CreateBrokerBodyEngineType;

		/**Required. The version of the broker engine. For a list of supported engine versions, see https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-engine.html */
		engineVersion?: string;

		/**Required. The broker's instance type. */
		hostInstanceType?: string;

		/**The list of information about logs to be enabled for the specified broker. */
		logs?: string;

		/**The scheduled time period relative to UTC during which Amazon MQ begins to apply pending updates or patches to the broker. */
		maintenanceWindowStartTime?: string;

		/**Required. Enables connections from applications outside of the VPC that hosts the broker's subnets. */
		publiclyAccessible?: boolean;

		/**The list of security groups (1 minimum, 5 maximum) that authorizes connections to brokers. */
		securityGroups?: Array<__string>;

		/**The storage type of the broker. */
		storageType?: CreateBrokerBodyStorageType;

		/**The list of groups (2 maximum) that define which subnets and IP ranges the broker can use from different Availability Zones. A SINGLE_INSTANCE deployment requires one subnet (for example, the default subnet). An ACTIVE_STANDBY_MULTI_AZ deployment requires two subnets. */
		subnetIds?: Array<__string>;

		/**Create tags when creating the broker. */
		tags?: string;

		/**Required. The list of ActiveMQ users (persons or applications) who can access queues and topics. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long. */
		users?: Array<User>;
	}

	export enum CreateBrokerBodyDeploymentMode { SINGLE_INSTANCE = 0, ACTIVE_STANDBY_MULTI_AZ = 1 }

	export enum CreateBrokerBodyEngineType { ACTIVEMQ = 0 }

	export enum CreateBrokerBodyStorageType { EBS = 0, EFS = 1 }

	export interface CreateConfigurationBody {

		/**The type of broker engine. Note: Currently, Amazon MQ supports only ActiveMQ. */
		engineType?: CreateConfigurationBodyEngineType;

		/**Required. The version of the broker engine. For a list of supported engine versions, see https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-engine.html */
		engineVersion?: string;

		/**Required. The name of the configuration. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long. */
		name?: string;

		/**Create tags when creating the configuration. */
		tags?: string;
	}

	export enum CreateConfigurationBodyEngineType { ACTIVEMQ = 0 }

	export interface CreateTagsBody {

		/**The key-value pair for the resource tag. */
		tags?: string;
	}

	export interface CreateUserBody {

		/**Enables access to the the ActiveMQ Web Console for the ActiveMQ user. */
		consoleAccess?: boolean;

		/**The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long. */
		groups?: Array<__string>;

		/**Required. The password of the user. This value must be at least 12 characters long, must contain at least 4 unique characters, and must not contain commas. */
		password?: string;
	}

	export interface UpdateUserBody {

		/**Enables access to the the ActiveMQ Web Console for the ActiveMQ user. */
		consoleAccess?: boolean;

		/**The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long. */
		groups?: Array<__string>;

		/**The password of the user. This value must be at least 12 characters long, must contain at least 4 unique characters, and must not contain commas. */
		password?: string;
	}

	export interface UpdateBrokerBody {

		/**Enables automatic upgrades to new minor versions for brokers, as Apache releases the versions. The automatic upgrades occur during the maintenance window of the broker or after a manual broker reboot. */
		autoMinorVersionUpgrade?: boolean;

		/**A list of information about the configuration. */
		configuration?: string;

		/**The version of the broker engine. For a list of supported engine versions, see https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-engine.html */
		engineVersion?: string;

		/**The host instance type of the broker to upgrade to. For a list of supported instance types, see https://docs.aws.amazon.com/amazon-mq/latest/developer-guide//broker.html#broker-instance-types */
		hostInstanceType?: string;

		/**The list of information about logs to be enabled for the specified broker. */
		logs?: string;

		/**The list of security groups (1 minimum, 5 maximum) that authorizes connections to brokers. */
		securityGroups?: Array<__string>;
	}

	export interface UpdateConfigurationBody {

		/**Required. The base64-encoded XML configuration. */
		data?: string;

		/**The description of the configuration. */
		description?: string;
	}

}

