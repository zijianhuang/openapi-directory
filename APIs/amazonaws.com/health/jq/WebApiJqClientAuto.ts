///<reference path="HttpClient.ts" />
namespace My_Demo_Client {
	export interface DescribeAffectedAccountsForOrganizationResponse {
		affectedAccounts?: Array<accountId>;
		eventScopeCode?: DescribeAffectedAccountsForOrganizationResponseEventScopeCode;
		nextToken?: string;
	}

	export enum DescribeAffectedAccountsForOrganizationResponseEventScopeCode { PUBLIC = 0, ACCOUNT_SPECIFIC = 1, NONE = 2 }

	export interface DescribeAffectedAccountsForOrganizationRequest {
		eventArn: string;
		nextToken?: string;
		maxResults?: number;
	}

	export interface DescribeAffectedEntitiesResponse {
		entities?: Array<AffectedEntity>;
		nextToken?: string;
	}

	export interface DescribeAffectedEntitiesRequest {

		/**The values to use to filter results from the <a>DescribeAffectedEntities</a> operation. */
		filter: EntityFilter;
		locale?: string;
		nextToken?: string;
		maxResults?: number;
	}

	export interface DescribeAffectedEntitiesForOrganizationResponse {
		entities?: Array<AffectedEntity>;
		failedSet?: Array<OrganizationAffectedEntitiesErrorItem>;
		nextToken?: string;
	}

	export interface DescribeAffectedEntitiesForOrganizationRequest {
		organizationEntityFilters: Array<EventAccountFilter>;
		locale?: string;
		nextToken?: string;
		maxResults?: number;
	}

	export interface DescribeEntityAggregatesResponse {
		entityAggregates?: Array<EntityAggregate>;
	}

	export interface DescribeEntityAggregatesRequest {
		eventArns?: Array<eventArn>;
	}

	export interface DescribeEventAggregatesResponse {
		eventAggregates?: Array<EventAggregate>;
		nextToken?: string;
	}

	export interface DescribeEventAggregatesRequest {

		/**The values to use to filter results from the <a>DescribeEvents</a> and <a>DescribeEventAggregates</a> operations. */
		filter?: EventFilter;
		aggregateField: DescribeEventAggregatesRequestAggregateField;
		maxResults?: number;
		nextToken?: string;
	}

	export enum DescribeEventAggregatesRequestAggregateField { eventTypeCategory = 0 }

	export interface DescribeEventDetailsResponse {
		successfulSet?: Array<EventDetails>;
		failedSet?: Array<EventDetailsErrorItem>;
	}

	export interface DescribeEventDetailsRequest {
		eventArns: Array<eventArn>;
		locale?: string;
	}

	export interface DescribeEventDetailsForOrganizationResponse {
		successfulSet?: Array<OrganizationEventDetails>;
		failedSet?: Array<OrganizationEventDetailsErrorItem>;
	}

	export interface DescribeEventDetailsForOrganizationRequest {
		organizationEventDetailFilters: Array<EventAccountFilter>;
		locale?: string;
	}

	export interface DescribeEventTypesResponse {
		eventTypes?: Array<EventType>;
		nextToken?: string;
	}

	export interface DescribeEventTypesRequest {

		/**The values to use to filter results from the <a>DescribeEventTypes</a> operation. */
		filter?: EventTypeFilter;
		locale?: string;
		nextToken?: string;
		maxResults?: number;
	}

	export interface DescribeEventsResponse {
		events?: Array<Event>;
		nextToken?: string;
	}

	export interface DescribeEventsRequest {

		/**The values to use to filter results from the <a>DescribeEvents</a> and <a>DescribeEventAggregates</a> operations. */
		filter?: EventFilter;
		nextToken?: string;
		maxResults?: number;
		locale?: string;
	}

	export interface DescribeEventsForOrganizationResponse {
		events?: Array<OrganizationEvent>;
		nextToken?: string;
	}

	export interface DescribeEventsForOrganizationRequest {

		/**The values to filter results from the <a>DescribeEventsForOrganization</a> operation. */
		filter?: OrganizationEventFilter;
		nextToken?: string;
		maxResults?: number;
		locale?: string;
	}

	export interface DescribeHealthServiceStatusForOrganizationResponse {
		healthServiceAccessStatusForOrganization?: string;
	}

	export enum EntityStatusCode { IMPAIRED = 0, UNIMPAIRED = 1, UNKNOWN = 2 }


	/**Information about an entity that is affected by a Health event. */
	export interface AffectedEntity {
		entityArn?: string;
		eventArn?: string;
		entityValue?: string;
		entityUrl?: string;
		awsAccountId?: string;
		lastUpdatedTime?: Date;
		statusCode?: AffectedEntityStatusCode;
		tags?: tagSet;
	}

	export enum AffectedEntityStatusCode { IMPAIRED = 0, UNIMPAIRED = 1, UNKNOWN = 2 }


	/**A range of dates and times that is used by the <a>EventFilter</a> and <a>EntityFilter</a> objects. If <code>from</code> is set and <code>to</code> is set: match items where the timestamp (<code>startTime</code>, <code>endTime</code>, or <code>lastUpdatedTime</code>) is between <code>from</code> and <code>to</code> inclusive. If <code>from</code> is set and <code>to</code> is not set: match items where the timestamp value is equal to or after <code>from</code>. If <code>from</code> is not set and <code>to</code> is set: match items where the timestamp value is equal to or before <code>to</code>. */
	export interface DateTimeRange {
		from?: Date;
		to?: Date;
	}

	export enum EventScopeCode { PUBLIC = 0, ACCOUNT_SPECIFIC = 1, NONE = 2 }


	/**Error information returned when a <a>DescribeAffectedEntitiesForOrganization</a> operation cannot find or process a specific entity. */
	export interface OrganizationAffectedEntitiesErrorItem {
		awsAccountId?: string;
		eventArn?: string;
		errorName?: string;
		errorMessage?: string;
	}


	/**The values to use to filter results from the <a>DescribeAffectedEntities</a> operation. */
	export interface EntityFilter {
		eventArns: Array<eventArn>;
		entityArns?: Array<entityArn>;
		entityValues?: Array<entityValue>;
		lastUpdatedTimes?: Array<DateTimeRange>;
		tags?: Array<tagSet>;
		statusCodes?: Array<entityStatusCode>;
	}


	/**The values to use to filter results from the <a>DescribeEvents</a> and <a>DescribeEventAggregates</a> operations. */
	export interface EventFilter {
		eventArns?: Array<eventArn>;
		eventTypeCodes?: Array<eventType>;
		services?: Array<service>;
		regions?: Array<region>;
		availabilityZones?: Array<availabilityZone>;
		startTimes?: Array<DateTimeRange>;
		endTimes?: Array<DateTimeRange>;
		lastUpdatedTimes?: Array<DateTimeRange>;
		entityArns?: Array<entityArn>;
		entityValues?: Array<entityValue>;
		eventTypeCategories?: Array<eventTypeCategory>;
		tags?: Array<tagSet>;
		eventStatusCodes?: Array<eventStatusCode>;
	}

	export enum EventAggregateField { eventTypeCategory = 0 }


	/**Error information returned when a <a>DescribeEventDetails</a> operation cannot find a specified event. */
	export interface EventDetailsErrorItem {
		eventArn?: string;
		errorName?: string;
		errorMessage?: string;
	}


	/**Error information returned when a <a>DescribeEventDetailsForOrganization</a> operation cannot find a specified event. */
	export interface OrganizationEventDetailsErrorItem {
		awsAccountId?: string;
		eventArn?: string;
		errorName?: string;
		errorMessage?: string;
	}


	/**Detailed information about an event. A combination of an <a>Event</a> object, an <a>EventDescription</a> object, and additional metadata about the event. Returned by the <a>DescribeEventDetailsForOrganization</a> operation. */
	export interface OrganizationEventDetails {
		awsAccountId?: string;

		/**Summary information about an AWS Health event. */
		event?: Event;

		/**The detailed description of the event. Included in the information returned by the <a>DescribeEventDetails</a> operation. */
		eventDescription?: EventDescription;
		eventMetadata?: eventMetadata;
	}


	/**Detailed information about an event. A combination of an <a>Event</a> object, an <a>EventDescription</a> object, and additional metadata about the event. Returned by the <a>DescribeEventDetails</a> operation. */
	export interface EventDetails {

		/**Summary information about an AWS Health event. */
		event?: Event;

		/**The detailed description of the event. Included in the information returned by the <a>DescribeEventDetails</a> operation. */
		eventDescription?: EventDescription;
		eventMetadata?: eventMetadata;
	}


	/**The values to use to filter results from the <a>DescribeEventTypes</a> operation. */
	export interface EventTypeFilter {
		eventTypeCodes?: Array<eventTypeCode>;
		services?: Array<service>;
		eventTypeCategories?: Array<eventTypeCategory>;
	}


	/**The values to filter results from the <a>DescribeEventsForOrganization</a> operation. */
	export interface OrganizationEventFilter {
		eventTypeCodes?: Array<eventType>;
		awsAccountIds?: Array<accountId>;
		services?: Array<service>;
		regions?: Array<region>;

		/**A range of dates and times that is used by the <a>EventFilter</a> and <a>EntityFilter</a> objects. If <code>from</code> is set and <code>to</code> is set: match items where the timestamp (<code>startTime</code>, <code>endTime</code>, or <code>lastUpdatedTime</code>) is between <code>from</code> and <code>to</code> inclusive. If <code>from</code> is set and <code>to</code> is not set: match items where the timestamp value is equal to or after <code>from</code>. If <code>from</code> is not set and <code>to</code> is set: match items where the timestamp value is equal to or before <code>to</code>. */
		startTime?: DateTimeRange;

		/**A range of dates and times that is used by the <a>EventFilter</a> and <a>EntityFilter</a> objects. If <code>from</code> is set and <code>to</code> is set: match items where the timestamp (<code>startTime</code>, <code>endTime</code>, or <code>lastUpdatedTime</code>) is between <code>from</code> and <code>to</code> inclusive. If <code>from</code> is set and <code>to</code> is not set: match items where the timestamp value is equal to or after <code>from</code>. If <code>from</code> is not set and <code>to</code> is set: match items where the timestamp value is equal to or before <code>to</code>. */
		endTime?: DateTimeRange;

		/**A range of dates and times that is used by the <a>EventFilter</a> and <a>EntityFilter</a> objects. If <code>from</code> is set and <code>to</code> is set: match items where the timestamp (<code>startTime</code>, <code>endTime</code>, or <code>lastUpdatedTime</code>) is between <code>from</code> and <code>to</code> inclusive. If <code>from</code> is set and <code>to</code> is not set: match items where the timestamp value is equal to or after <code>from</code>. If <code>from</code> is not set and <code>to</code> is set: match items where the timestamp value is equal to or before <code>to</code>. */
		lastUpdatedTime?: DateTimeRange;
		entityArns?: Array<entityArn>;
		entityValues?: Array<entityValue>;
		eventTypeCategories?: Array<eventTypeCategory>;
		eventStatusCodes?: Array<eventStatusCode>;
	}


	/**The number of entities that are affected by one or more events. Returned by the <a>DescribeEntityAggregates</a> operation. */
	export interface EntityAggregate {
		eventArn?: string;
		count?: number;
	}

	export enum EventTypeCategory { issue = 0, accountNotification = 1, scheduledChange = 2, investigation = 3 }

	export enum EventStatusCode { open = 0, closed = 1, upcoming = 2 }


	/**Summary information about an AWS Health event. */
	export interface Event {
		arn?: string;
		service?: string;
		eventTypeCode?: string;
		eventTypeCategory?: EventEventTypeCategory;
		region?: string;
		availabilityZone?: string;
		startTime?: Date;
		endTime?: Date;
		lastUpdatedTime?: Date;
		statusCode?: EventStatusCode;
		eventScopeCode?: EventEventScopeCode;
	}

	export enum EventEventTypeCategory { issue = 0, accountNotification = 1, scheduledChange = 2, investigation = 3 }

	export enum EventStatusCode { open = 0, closed = 1, upcoming = 2 }

	export enum EventEventScopeCode { PUBLIC = 0, ACCOUNT_SPECIFIC = 1, NONE = 2 }


	/**The values used to filter results from the <a>DescribeEventDetailsForOrganization</a> and <a>DescribeAffectedEntitiesForOrganization</a> operations. */
	export interface EventAccountFilter {
		eventArn: string;
		awsAccountId?: string;
	}


	/**The number of events of each issue type. Returned by the <a>DescribeEventAggregates</a> operation. */
	export interface EventAggregate {
		aggregateValue?: string;
		count?: number;
	}


	/**The detailed description of the event. Included in the information returned by the <a>DescribeEventDetails</a> operation. */
	export interface EventDescription {
		latestDescription?: string;
	}


	/**Metadata about a type of event that is reported by AWS Health. Data consists of the category (for example, <code>issue</code>), the service (for example, <code>EC2</code>), and the event type code (for example, <code>AWS_EC2_SYSTEM_MAINTENANCE_EVENT</code>). */
	export interface EventType {
		service?: string;
		code?: string;
		category?: EventTypeCategory;
	}

	export enum EventTypeCategory { issue = 0, accountNotification = 1, scheduledChange = 2, investigation = 3 }


	/**Summary information about an event, returned by the <a>DescribeEventsForOrganization</a> operation. */
	export interface OrganizationEvent {
		arn?: string;
		service?: string;
		eventTypeCode?: string;
		eventTypeCategory?: OrganizationEventEventTypeCategory;
		eventScopeCode?: OrganizationEventEventScopeCode;
		region?: string;
		startTime?: Date;
		endTime?: Date;
		lastUpdatedTime?: Date;
		statusCode?: OrganizationEventStatusCode;
	}

	export enum OrganizationEventEventTypeCategory { issue = 0, accountNotification = 1, scheduledChange = 2, investigation = 3 }

	export enum OrganizationEventEventScopeCode { PUBLIC = 0, ACCOUNT_SPECIFIC = 1, NONE = 2 }

	export enum OrganizationEventStatusCode { open = 0, closed = 1, upcoming = 2 }

	export class DemoClient {
		constructor(private baseUri: string = HttpClient.locationOrigin, private httpClient: HttpClientBase = new HttpClient(), private error?: (xhr: JQueryXHR, ajaxOptions: string, thrown: string) => any, private statusCode?: { [key: string]: any; }) {
		}

		/**
		 * <p>Returns a list of accounts in the organization from AWS Organizations that are affected by the provided event.</p> <p>Before you can call this operation, you must first enable AWS Health to work with AWS Organizations. To do this, call the <a>EnableHealthServiceAccessForOrganization</a> operation from your organization's master account.</p>
		 * Post /#X-Amz-Target=AWSHealth_20160804.DescribeAffectedAccountsForOrganization
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeAffectedAccountsForOrganizationResponse} Success
		 */
		DescribeAffectedAccountsForOrganization(maxResults: string, nextToken: string, callback: (data : DescribeAffectedAccountsForOrganizationResponse) => any, requestBody: DescribeAffectedAccountsForOrganizationRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWSHealth_20160804.DescribeAffectedAccountsForOrganization?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Returns a list of entities that have been affected by the specified events, based on the specified filter criteria. Entities can refer to individual customer resources, groups of customer resources, or any other construct, depending on the AWS service. Events that have impact beyond that of the affected entities, or where the extent of impact is unknown, include at least one entity indicating this.</p> <p>At least one event ARN is required. Results are sorted by the <code>lastUpdatedTime</code> of the entity, starting with the most recent.</p>
		 * Post /#X-Amz-Target=AWSHealth_20160804.DescribeAffectedEntities
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeAffectedEntitiesResponse} Success
		 */
		DescribeAffectedEntities(maxResults: string, nextToken: string, callback: (data : DescribeAffectedEntitiesResponse) => any, requestBody: DescribeAffectedEntitiesRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWSHealth_20160804.DescribeAffectedEntities?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Returns a list of entities that have been affected by one or more events for one or more accounts in your organization in AWS Organizations, based on the filter criteria. Entities can refer to individual customer resources, groups of customer resources, or any other construct, depending on the AWS service.</p> <p>At least one event ARN and account ID are required. Results are sorted by the <code>lastUpdatedTime</code> of the entity, starting with the most recent.</p> <p>Before you can call this operation, you must first enable AWS Health to work with AWS Organizations. To do this, call the <a>EnableHealthServiceAccessForOrganization</a> operation from your organization's master account. </p>
		 * Post /#X-Amz-Target=AWSHealth_20160804.DescribeAffectedEntitiesForOrganization
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeAffectedEntitiesForOrganizationResponse} Success
		 */
		DescribeAffectedEntitiesForOrganization(maxResults: string, nextToken: string, callback: (data : DescribeAffectedEntitiesForOrganizationResponse) => any, requestBody: DescribeAffectedEntitiesForOrganizationRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWSHealth_20160804.DescribeAffectedEntitiesForOrganization?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Returns the number of entities that are affected by each of the specified events. If no events are specified, the counts of all affected entities are returned.
		 * Post /#X-Amz-Target=AWSHealth_20160804.DescribeEntityAggregates
		 * @return {DescribeEntityAggregatesResponse} Success
		 */
		DescribeEntityAggregates(callback: (data : DescribeEntityAggregatesResponse) => any, requestBody: DescribeEntityAggregatesRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWSHealth_20160804.DescribeEntityAggregates', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Returns the number of events of each event type (issue, scheduled change, and account notification). If no filter is specified, the counts of all events in each category are returned.
		 * Post /#X-Amz-Target=AWSHealth_20160804.DescribeEventAggregates
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeEventAggregatesResponse} Success
		 */
		DescribeEventAggregates(maxResults: string, nextToken: string, callback: (data : DescribeEventAggregatesResponse) => any, requestBody: DescribeEventAggregatesRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWSHealth_20160804.DescribeEventAggregates?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Returns detailed information about one or more specified events. Information includes standard event data (region, service, and so on, as returned by <a>DescribeEvents</a>), a detailed event description, and possible additional metadata that depends upon the nature of the event. Affected entities are not included; to retrieve those, use the <a>DescribeAffectedEntities</a> operation.</p> <p>If a specified event cannot be retrieved, an error message is returned for that event.</p>
		 * Post /#X-Amz-Target=AWSHealth_20160804.DescribeEventDetails
		 * @return {DescribeEventDetailsResponse} Success
		 */
		DescribeEventDetails(callback: (data : DescribeEventDetailsResponse) => any, requestBody: DescribeEventDetailsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWSHealth_20160804.DescribeEventDetails', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Returns detailed information about one or more specified events for one or more accounts in your organization. Information includes standard event data (Region, service, and so on, as returned by <a>DescribeEventsForOrganization</a>, a detailed event description, and possible additional metadata that depends upon the nature of the event. Affected entities are not included; to retrieve those, use the <a>DescribeAffectedEntitiesForOrganization</a> operation.</p> <p>Before you can call this operation, you must first enable AWS Health to work with AWS Organizations. To do this, call the <a>EnableHealthServiceAccessForOrganization</a> operation from your organization's master account.</p>
		 * Post /#X-Amz-Target=AWSHealth_20160804.DescribeEventDetailsForOrganization
		 * @return {DescribeEventDetailsForOrganizationResponse} Success
		 */
		DescribeEventDetailsForOrganization(callback: (data : DescribeEventDetailsForOrganizationResponse) => any, requestBody: DescribeEventDetailsForOrganizationRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWSHealth_20160804.DescribeEventDetailsForOrganization', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Returns the event types that meet the specified filter criteria. If no filter criteria are specified, all event types are returned, in no particular order.
		 * Post /#X-Amz-Target=AWSHealth_20160804.DescribeEventTypes
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeEventTypesResponse} Success
		 */
		DescribeEventTypes(maxResults: string, nextToken: string, callback: (data : DescribeEventTypesResponse) => any, requestBody: DescribeEventTypesRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWSHealth_20160804.DescribeEventTypes?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Returns information about events that meet the specified filter criteria. Events are returned in a summary form and do not include the detailed description, any additional metadata that depends on the event type, or any affected resources. To retrieve that information, use the <a>DescribeEventDetails</a> and <a>DescribeAffectedEntities</a> operations.</p> <p>If no filter criteria are specified, all events are returned. Results are sorted by <code>lastModifiedTime</code>, starting with the most recent.</p>
		 * Post /#X-Amz-Target=AWSHealth_20160804.DescribeEvents
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeEventsResponse} Success
		 */
		DescribeEvents(maxResults: string, nextToken: string, callback: (data : DescribeEventsResponse) => any, requestBody: DescribeEventsRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWSHealth_20160804.DescribeEvents?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>Returns information about events across your organization in AWS Organizations, meeting the specified filter criteria. Events are returned in a summary form and do not include the accounts impacted, detailed description, any additional metadata that depends on the event type, or any affected resources. To retrieve that information, use the <a>DescribeAffectedAccountsForOrganization</a>, <a>DescribeEventDetailsForOrganization</a>, and <a>DescribeAffectedEntitiesForOrganization</a> operations.</p> <p>If no filter criteria are specified, all events across your organization are returned. Results are sorted by <code>lastModifiedTime</code>, starting with the most recent.</p> <p>Before you can call this operation, you must first enable Health to work with AWS Organizations. To do this, call the <a>EnableHealthServiceAccessForOrganization</a> operation from your organization's master account.</p>
		 * Post /#X-Amz-Target=AWSHealth_20160804.DescribeEventsForOrganization
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeEventsForOrganizationResponse} Success
		 */
		DescribeEventsForOrganization(maxResults: string, nextToken: string, callback: (data : DescribeEventsForOrganizationResponse) => any, requestBody: DescribeEventsForOrganizationRequest, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWSHealth_20160804.DescribeEventsForOrganization?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * This operation provides status information on enabling or disabling AWS Health to work with your organization. To call this operation, you must sign in as an IAM user, assume an IAM role, or sign in as the root user (not recommended) in the organization's master account.
		 * Post /#X-Amz-Target=AWSHealth_20160804.DescribeHealthServiceStatusForOrganization
		 * @return {DescribeHealthServiceStatusForOrganizationResponse} Success
		 */
		DescribeHealthServiceStatusForOrganization(callback: (data : DescribeHealthServiceStatusForOrganizationResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWSHealth_20160804.DescribeHealthServiceStatusForOrganization', null, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Calling this operation disables Health from working with AWS Organizations. This does not remove the Service Linked Role (SLR) from the the master account in your organization. Use the IAM console, API, or AWS CLI to remove the SLR if desired. To call this operation, you must sign in as an IAM user, assume an IAM role, or sign in as the root user (not recommended) in the organization's master account.
		 * Post /#X-Amz-Target=AWSHealth_20160804.DisableHealthServiceAccessForOrganization
		 * @return {void} Success
		 */
		DisableHealthServiceAccessForOrganization(callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWSHealth_20160804.DisableHealthServiceAccessForOrganization', null, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Calling this operation enables AWS Health to work with AWS Organizations. This applies a Service Linked Role (SLR) to the master account in the organization. To learn more about the steps in this process, visit enabling service access for AWS Health in AWS Organizations. To call this operation, you must sign in as an IAM user, assume an IAM role, or sign in as the root user (not recommended) in the organization's master account.
		 * Post /#X-Amz-Target=AWSHealth_20160804.EnableHealthServiceAccessForOrganization
		 * @return {void} Success
		 */
		EnableHealthServiceAccessForOrganization(callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=AWSHealth_20160804.EnableHealthServiceAccessForOrganization', null, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}
	}

}

