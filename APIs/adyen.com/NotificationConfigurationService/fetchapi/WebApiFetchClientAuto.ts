export namespace My_Demo_Client {
	export interface CreateNotificationConfigurationRequest {
		configurationDetails: NotificationConfigurationDetails;
	}

	export interface DeleteNotificationConfigurationRequest {

		/**A list of IDs of the notification subscription configurations to be deleted. */
		notificationIds: Array<number>;
	}

	export interface ExchangeMessage {
		messageCode?: string;
		messageDescription?: string;
	}

	export interface GenericResponse {

		/**The reference of a request.  Can be used to uniquely identify the request. */
		pspReference: string;

		/**
		 * Indicates whether the request is processed synchronously or asynchronously.  Depending on the request's marketplace settings, the following scenarios may be applied:
		 * * **sync:** The processing of the request is immediately attempted; it may result in an error if the providing service is unavailable.
		 * * **async:** The request is queued and will be executed when the providing service is available in the order in which the requests are received.
		 * * **asyncOnError:** The processing of the request is immediately attempted, but if the providing service is unavailable, the request is scheduled in a queue.
		 */
		submittedAsync: boolean;
	}

	export interface GetNotificationConfigurationListResponse {

		/**Details of the notification subscription configurations. */
		configurations: Array<NotificationConfigurationDetails>;

		/**The reference of a request.  Can be used to uniquely identify the request. */
		pspReference: string;

		/**
		 * Indicates whether the request is processed synchronously or asynchronously.  Depending on the request's marketplace settings, the following scenarios may be applied:
		 * * **sync:** The processing of the request is immediately attempted; it may result in an error if the providing service is unavailable.
		 * * **async:** The request is queued and will be executed when the providing service is available in the order in which the requests are received.
		 * * **asyncOnError:** The processing of the request is immediately attempted, but if the providing service is unavailable, the request is scheduled in a queue.
		 */
		submittedAsync: boolean;
	}

	export interface GetNotificationConfigurationRequest {

		/**The ID of the notification subscription configuration whose details are to be retrieved. */
		notificationId: number;
	}

	export interface GetNotificationConfigurationResponse {
		configurationDetails: NotificationConfigurationDetails;

		/**The reference of a request.  Can be used to uniquely identify the request. */
		pspReference: string;

		/**
		 * Indicates whether the request is processed synchronously or asynchronously.  Depending on the request's marketplace settings, the following scenarios may be applied:
		 * * **sync:** The processing of the request is immediately attempted; it may result in an error if the providing service is unavailable.
		 * * **async:** The request is queued and will be executed when the providing service is available in the order in which the requests are received.
		 * * **asyncOnError:** The processing of the request is immediately attempted, but if the providing service is unavailable, the request is scheduled in a queue.
		 */
		submittedAsync: boolean;
	}

	export interface NotificationConfigurationDetails {

		/**Indicates whether the notification subscription is active. */
		active?: boolean;

		/**The API version of the notification to send. */
		apiVersion?: number;

		/**
		 * A description of the notification subscription configuration.
		 * >Required when creating a configuration, forbidden when updating a configuration.
		 */
		description?: string;

		/**The types of events whose notifications apply to this configuration. */
		eventConfigs: Array<NotificationEventConfiguration>;

		/**
		 * The ID of the configuration.
		 * >Required if updating an existing configuration, ignored during the creation of a configuration.
		 */
		notificationId?: number;

		/**The password to use when accessing the notifyURL with the specified username. */
		notifyPassword?: string;

		/**The URL to which the notifications are to be sent. */
		notifyURL: string;

		/**The username to use when accessing the notifyURL. */
		notifyUsername?: string;

		/**
		 * The SSL protocol employed by the endpoint.
		 * >Permitted values: `SSL`, `SSLv3`, `SSLInsecureCiphers`, `TLS`, `TLSv10`, `TLSv10InsecureCiphers`, `TLSv11`, `TLSv12`.
		 */
		sslProtocol?: NotificationConfigurationDetailsSslProtocol;
	}

	export enum NotificationConfigurationDetailsSslProtocol { SSL = 0, SSLInsecureCiphers = 1, SSLv3 = 2, TLS = 3, TLSv10 = 4, TLSv10InsecureCiphers = 5, TLSv11 = 6, TLSv12 = 7 }

	export interface NotificationEventConfiguration {

		/**
		 * The type of event triggering the notification.
		 * >Permitted values: `ACCOUNT_HOLDER_CREATED`, `ACCOUNT_CREATED`, `ACCOUNT_UPDATED`, `ACCOUNT_HOLDER_UPDATED`, `ACCOUNT_HOLDER_STATUS_CHANGE`, `ACCOUNT_HOLDER_VERIFICATION`, `ACCOUNT_HOLDER_LIMIT_REACHED`, `ACCOUNT_HOLDER_PAYOUT`, `PAYMENT_FAILURE`, `SCHEDULED_REFUNDS`, `REPORT_AVAILABLE`, `TRANSFER_FUNDS`, `BENEFICIARY_SETUP`, `COMPENSATE_NEGATIVE_BALANCE`.
		 */
		eventType: NotificationEventConfigurationEventType;

		/**
		 * Indicates whether the specified eventType is to be sent to the endpoint or all events other than the specified eventType (and other specified eventTypes) are to be sent.
		 * >Permitted values: `INCLUDE`, `EXCLUDE`.
		 * >- `INCLUDE`: send the specified eventType.
		 * >- `EXCLUDE`: send all eventTypes other than the specified eventType (and other eventTypes marked with `EXCLUDE`).
		 */
		includeMode: NotificationEventConfigurationIncludeMode;
	}

	export enum NotificationEventConfigurationEventType { ACCOUNT_CREATED = 0, ACCOUNT_HOLDER_CREATED = 1, ACCOUNT_HOLDER_LIMIT_REACHED = 2, ACCOUNT_HOLDER_PAYOUT = 3, ACCOUNT_HOLDER_STATUS_CHANGE = 4, ACCOUNT_HOLDER_UPDATED = 5, ACCOUNT_HOLDER_VERIFICATION = 6, ACCOUNT_UPDATED = 7, BENEFICIARY_SETUP = 8, COMPENSATE_NEGATIVE_BALANCE = 9, PAYMENT_FAILURE = 10, REPORT_AVAILABLE = 11, SCHEDULED_REFUNDS = 12, TRANSFER_FUNDS = 13 }

	export enum NotificationEventConfigurationIncludeMode { EXCLUDE = 0, INCLUDE = 1 }

	export interface TestNotificationConfigurationRequest {

		/**
		 * The event types to test.  If left blank, then all of the configured event types will be tested.
		 * >Permitted values: `ACCOUNT_HOLDER_CREATED`, `ACCOUNT_CREATED`, `ACCOUNT_UPDATED`, `ACCOUNT_HOLDER_UPDATED`, `ACCOUNT_HOLDER_STATUS_CHANGE`, `ACCOUNT_HOLDER_VERIFICATION`, `ACCOUNT_HOLDER_LIMIT_REACHED`, `ACCOUNT_HOLDER_PAYOUT`, `PAYMENT_FAILURE`, `SCHEDULED_REFUNDS`, `REPORT_AVAILABLE`, `TRANSFER_FUNDS`, `BENEFICIARY_SETUP`, `COMPENSATE_NEGATIVE_BALANCE`.
		 */
		eventTypes?: Array<string>;

		/**The ID of the notification subscription configuration to be tested. */
		notificationId: number;
	}

	export interface TestNotificationConfigurationResponse {

		/**Any error messages encountered. */
		errorMessages?: Array<string>;

		/**
		 * The event types that were tested.
		 * >Permitted values: `ACCOUNT_HOLDER_CREATED`, `ACCOUNT_CREATED`, `ACCOUNT_UPDATED`, `ACCOUNT_HOLDER_UPDATED`, `ACCOUNT_HOLDER_STATUS_CHANGE`, `ACCOUNT_HOLDER_VERIFICATION`, `ACCOUNT_HOLDER_LIMIT_REACHED`, `ACCOUNT_HOLDER_PAYOUT`, `PAYMENT_FAILURE`, `SCHEDULED_REFUNDS`, `REPORT_AVAILABLE`, `TRANSFER_FUNDS`, `BENEFICIARY_SETUP`, `COMPENSATE_NEGATIVE_BALANCE`.
		 */
		eventTypes: Array<string>;

		/**The notification message and related response messages. */
		exchangeMessages: Array<ExchangeMessage>;

		/**The ID of the notification subscription configuration. */
		notificationId: number;

		/**A list of messages describing the testing steps. */
		okMessages: Array<string>;

		/**The reference of a request.  Can be used to uniquely identify the request. */
		pspReference: string;

		/**
		 * Indicates whether the request is processed synchronously or asynchronously.  Depending on the request's marketplace settings, the following scenarios may be applied:
		 * * **sync:** The processing of the request is immediately attempted; it may result in an error if the providing service is unavailable.
		 * * **async:** The request is queued and will be executed when the providing service is available in the order in which the requests are received.
		 * * **asyncOnError:** The processing of the request is immediately attempted, but if the providing service is unavailable, the request is scheduled in a queue.
		 */
		submittedAsync: boolean;
	}

	export interface UpdateNotificationConfigurationRequest {
		configurationDetails: NotificationConfigurationDetails;
	}

	export class DemoClient {
		constructor(private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/') {
		}

		/**
		 * Configure a new subscription to notifications.
		 * This endpoint is used to create a subscription to MarketPay event notifications. After the subscription is created, the events specified in the configuration will be sent to the URL specified in the configuration. Subscriptions must be configured on a per-event basis (as opposed to, for example, a per-account holder basis), so all event notifications of a marketplace and of a given type will be sent to the same endpoint(s). A marketplace may have multiple endpoints if desired; an event notification may be sent to as many or as few different endpoints as configured.
		 * Post createNotificationConfiguration
		 * @return {GetNotificationConfigurationResponse} OK - the request has succeeded.
		 */
		CreateNotificationConfigurationPost(requestBody: CreateNotificationConfigurationRequest, headersHandler?: () => {[header: string]: string}): Promise<GetNotificationConfigurationResponse> {
			return fetch(this.baseUri + 'createNotificationConfiguration', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Delete an existing notification subscription configuration.
		 * This endpoint is used to delete an existing notification subscription configuration. After the subscription is deleted, no further event notifications will be sent to the URL that was in the subscription.
		 * Post deleteNotificationConfigurations
		 * @return {GenericResponse} OK - the request has succeeded.
		 */
		DeleteNotificationConfigurationsPost(requestBody: DeleteNotificationConfigurationRequest, headersHandler?: () => {[header: string]: string}): Promise<GenericResponse> {
			return fetch(this.baseUri + 'deleteNotificationConfigurations', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Retrieve an existing notification subscription configuration.
		 * This endpoint is used to retrieve the details of the configuration of a notification subscription.
		 * Post getNotificationConfiguration
		 * @return {GetNotificationConfigurationResponse} OK - the request has succeeded.
		 */
		GetNotificationConfigurationPost(requestBody: GetNotificationConfigurationRequest, headersHandler?: () => {[header: string]: string}): Promise<GetNotificationConfigurationResponse> {
			return fetch(this.baseUri + 'getNotificationConfiguration', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Retrive a list of existing notification subscription configurations.
		 * This endpoint is used to retrieve the details of the configurations of all of the notification subscriptions in the marketplace of the executing user.
		 * Post getNotificationConfigurationList
		 * @return {GetNotificationConfigurationListResponse} OK - the request has succeeded.
		 */
		GetNotificationConfigurationListPost(requestBody: EmptyRequest, headersHandler?: () => {[header: string]: string}): Promise<GetNotificationConfigurationListResponse> {
			return fetch(this.baseUri + 'getNotificationConfigurationList', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Test an existing notification configuration.
		 * This endpoint is used to test an existing notification subscription configuration. For each event type specified, a test notification will be generated and sent to the URL configured in the subscription specified.
		 * Post testNotificationConfiguration
		 * @return {TestNotificationConfigurationResponse} OK - the request has succeeded.
		 */
		TestNotificationConfigurationPost(requestBody: TestNotificationConfigurationRequest, headersHandler?: () => {[header: string]: string}): Promise<TestNotificationConfigurationResponse> {
			return fetch(this.baseUri + 'testNotificationConfiguration', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Update an existing notification subscription configuration.
		 * This endpoint is used to update an existing notification subscription configuration. If updating the event types, all event types desired must be provided, otherwise the previous event type configuration will be overwritten.
		 * Post updateNotificationConfiguration
		 * @return {GetNotificationConfigurationResponse} OK - the request has succeeded.
		 */
		UpdateNotificationConfigurationPost(requestBody: UpdateNotificationConfigurationRequest, headersHandler?: () => {[header: string]: string}): Promise<GetNotificationConfigurationResponse> {
			return fetch(this.baseUri + 'updateNotificationConfiguration', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}
	}

}

