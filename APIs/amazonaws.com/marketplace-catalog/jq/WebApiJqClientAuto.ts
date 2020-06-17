///<reference path="HttpClient.ts" />
namespace My_Demo_Client {
	export interface CancelChangeSetResponse {
		ChangeSetId?: string;
		ChangeSetArn?: string;
	}

	export interface DescribeChangeSetResponse {
		ChangeSetId?: string;
		ChangeSetArn?: string;
		ChangeSetName?: string;
		StartTime?: string;
		EndTime?: string;
		Status?: DescribeChangeSetResponseStatus;
		FailureDescription?: string;
		ChangeSet?: Array<ChangeSummary>;
	}

	export enum DescribeChangeSetResponseStatus { PREPARING = 0, APPLYING = 1, SUCCEEDED = 2, CANCELLED = 3, FAILED = 4 }

	export interface DescribeEntityResponse {
		EntityType?: string;
		EntityIdentifier?: string;
		EntityArn?: string;
		LastModifiedDate?: string;
		Details?: string;
	}

	export interface ListChangeSetsResponse {
		ChangeSetSummaryList?: Array<ChangeSetSummaryListItem>;
		NextToken?: string;
	}


	/**A filter object, used to optionally filter results from calls to the <code>ListEntities</code> and <code>ListChangeSets</code> actions. */
	export interface Filter {
		Name?: string;
		ValueList?: Array<StringValue>;
	}

	export enum SortOrder { ASCENDING = 0, DESCENDING = 1 }

	export interface ListEntitiesResponse {
		EntitySummaryList?: Array<EntitySummary>;
		NextToken?: string;
	}

	export interface StartChangeSetResponse {
		ChangeSetId?: string;
		ChangeSetArn?: string;
	}


	/**An object that contains the <code>ChangeType</code>, <code>Details</code>, and <code>Entity</code>. */
	export interface Change {
		ChangeType: string;

		/**A product entity contains data that describes your product, its supported features, and how it can be used or launched by your customer. */
		Entity: Entity;
		Details: string;
	}


	/**A product entity contains data that describes your product, its supported features, and how it can be used or launched by your customer.  */
	export interface Entity {
		Type: string;
		Identifier?: string;
	}


	/**This object is a container for common summary information about the change. The summary doesn't contain the whole change structure. */
	export interface ChangeSummary {
		ChangeType?: string;

		/**A product entity contains data that describes your product, its supported features, and how it can be used or launched by your customer. */
		Entity?: Entity;
		Details?: string;
		ErrorDetailList?: Array<ErrorDetail>;
	}


	/**A summary of a change set returned in a list of change sets when the <code>ListChangeSets</code> action is called. */
	export interface ChangeSetSummaryListItem {
		ChangeSetId?: string;
		ChangeSetArn?: string;
		ChangeSetName?: string;
		StartTime?: string;
		EndTime?: string;
		Status?: ChangeSetSummaryListItemStatus;
		EntityIdList?: Array<ResourceId>;
	}

	export enum ChangeSetSummaryListItemStatus { PREPARING = 0, APPLYING = 1, SUCCEEDED = 2, CANCELLED = 3, FAILED = 4 }

	export enum ChangeStatus { PREPARING = 0, APPLYING = 1, SUCCEEDED = 2, CANCELLED = 3, FAILED = 4 }


	/**This object is a container for common summary information about the entity. The summary doesn't contain the whole entity structure, but it does contain information common across all entities. */
	export interface EntitySummary {
		Name?: string;
		EntityType?: string;
		EntityId?: string;
		EntityArn?: string;
		LastModifiedDate?: string;
		Visibility?: string;
	}


	/**Details about the error. */
	export interface ErrorDetail {
		ErrorCode?: string;
		ErrorMessage?: string;
	}


	/**An object that contains two attributes, <code>SortBy</code> and <code>SortOrder</code>. */
	export interface Sort {
		SortBy?: string;
		SortOrder?: SortSortOrder;
	}

	export enum SortSortOrder { ASCENDING = 0, DESCENDING = 1 }

	export interface ListChangeSetsRequest {
		Catalog: string;
		FilterList?: Array<Filter>;

		/**An object that contains two attributes, <code>SortBy</code> and <code>SortOrder</code>. */
		Sort?: Sort;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface ListEntitiesRequest {
		Catalog: string;
		EntityType: string;
		FilterList?: Array<Filter>;

		/**An object that contains two attributes, <code>SortBy</code> and <code>SortOrder</code>. */
		Sort?: Sort;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface StartChangeSetRequest {
		Catalog: string;
		ChangeSet: Array<Change>;
		ChangeSetName?: string;
		ClientRequestToken?: string;
	}

	export class DemoClient {
		constructor(private baseUri: string = HttpClient.locationOrigin, private httpClient: HttpClientBase = new HttpClient(), private error?: (xhr: JQueryXHR, ajaxOptions: string, thrown: string) => any, private statusCode?: { [key: string]: any; }) {
		}

		/**
		 * Provides information about a given change set.
		 * Get /DescribeChangeSet#catalog&changeSetId
		 * @param {string} catalog Required. The catalog related to the request. Fixed value: <code>AWSMarketplace</code> 
		 * @param {string} changeSetId Required. The unique identifier for the <code>StartChangeSet</code> request that you want to describe the details for.
		 * @return {DescribeChangeSetResponse} Success
		 */
		DescribeChangeSet(catalog: string, changeSetId: string, callback: (data : DescribeChangeSetResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/DescribeChangeSet#catalog&changeSetId?catalog=' + (catalog == null ? '' : encodeURIComponent(catalog)) + '&changeSetId=' + (changeSetId == null ? '' : encodeURIComponent(changeSetId)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Returns the metadata and content of the entity.
		 * Get /DescribeEntity#catalog&entityId
		 * @param {string} catalog Required. The catalog related to the request. Fixed value: <code>AWSMarketplace</code> 
		 * @param {string} entityId Required. The unique ID of the entity to describe.
		 * @return {DescribeEntityResponse} Success
		 */
		DescribeEntity(catalog: string, entityId: string, callback: (data : DescribeEntityResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/DescribeEntity#catalog&entityId?catalog=' + (catalog == null ? '' : encodeURIComponent(catalog)) + '&entityId=' + (entityId == null ? '' : encodeURIComponent(entityId)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * <p>Returns the list of change sets owned by the account being used to make the call. You can filter this list by providing any combination of <code>entityId</code>, <code>ChangeSetName</code>, and status. If you provide more than one filter, the API operation applies a logical AND between the filters.</p> <p>You can describe a change during the 60-day request history retention period for API calls.</p>
		 * Post /ListChangeSets
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListChangeSetsResponse} Success
		 */
		ListChangeSets(MaxResults: string, NextToken: string, callback: (data : ListChangeSetsResponse) => any, requestBody: ListChangeSetsBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/ListChangeSets?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Provides the list of entities of a given type.
		 * Post /ListEntities
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListEntitiesResponse} Success
		 */
		ListEntities(MaxResults: string, NextToken: string, callback: (data : ListEntitiesResponse) => any, requestBody: ListEntitiesBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/ListEntities?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * <p>This operation allows you to request changes for your entities. Within a single ChangeSet, you cannot start the same change type against the same entity multiple times. Additionally, when a ChangeSet is running, all the entities targeted by the different changes are locked until the ChangeSet has completed (either succeeded, cancelled, or failed). If you try to start a ChangeSet containing a change against an entity that is already locked, you will receive a <code>ResourceInUseException</code>.</p> <p>For example, you cannot start the ChangeSet described in the <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_StartChangeSet.html#API_StartChangeSet_Examples">example</a> below because it contains two changes to execute the same change type (<code>AddRevisions</code>) against the same entity (<code>entity-id@1)</code>.</p>
		 * Post /StartChangeSet
		 * @return {StartChangeSetResponse} Success
		 */
		StartChangeSet(callback: (data : StartChangeSetResponse) => any, requestBody: StartChangeSetBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/StartChangeSet', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}
	}

	export interface ListChangeSetsBody {

		/**
		 * The catalog related to the request. Fixed value: <code>AWSMarketplace</code>
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z]+$
		 */
		Catalog: string;

		/**
		 * An array of filter objects.
		 * Minimum items: 1
		 * Maximum items: 8
		 */
		FilterList?: Array<Filter>;

		/**An object that contains two attributes, <code>SortBy</code> and <code>SortOrder</code>. */
		Sort?: string;

		/**
		 * The maximum number of results returned by a single call. This value must be provided in the next call to retrieve the next set of results. By default, this value is 20.
		 * Minimum: 1
		 * Maximum: 20
		 */
		MaxResults?: number;

		/**
		 * The token value retrieved from a previous call to access the next page of results.
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: ^[\w+=.:@\-\/]$
		 */
		NextToken?: string;
	}

	export interface ListEntitiesBody {

		/**
		 * The catalog related to the request. Fixed value: <code>AWSMarketplace</code>
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z]+$
		 */
		Catalog: string;

		/**
		 * The type of entities to retrieve.
		 * Max length: 255
		 * Min length: 1
		 * Pattern: ^[a-zA-Z]+$
		 */
		EntityType: string;

		/**
		 * An array of filter objects. Each filter object contains two attributes, <code>filterName</code> and <code>filterValues</code>.
		 * Minimum items: 1
		 * Maximum items: 8
		 */
		FilterList?: Array<Filter>;

		/**An object that contains two attributes, <code>SortBy</code> and <code>SortOrder</code>. */
		Sort?: string;

		/**
		 * The value of the next token, if it exists. Null if there are no more results.
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: ^[\w+=.:@\-\/]$
		 */
		NextToken?: string;

		/**
		 * Specifies the upper limit of the elements on a single page. If a value isn't provided, the default value is 20.
		 * Minimum: 1
		 * Maximum: 20
		 */
		MaxResults?: number;
	}

	export interface StartChangeSetBody {

		/**
		 * The catalog related to the request. Fixed value: <code>AWSMarketplace</code>
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z]+$
		 */
		Catalog: string;

		/**
		 * Array of <code>change</code> object.
		 * Minimum items: 1
		 * Maximum items: 20
		 */
		ChangeSet: Array<Change>;

		/**
		 * Optional case sensitive string of up to 100 ASCII characters. The change set name can be used to filter the list of change sets.
		 * Max length: 100
		 * Min length: 1
		 * Pattern: ^[\w\s+=.:@-]+$
		 */
		ChangeSetName?: string;

		/**
		 * A unique token to identify the request to ensure idempotency.
		 * Max length: 36
		 * Min length: 1
		 * Pattern: ^[\w\-]+$
		 */
		ClientRequestToken?: string;
	}

}

