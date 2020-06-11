import Axios from 'axios';
import { AxiosResponse } from 'axios';
export namespace My_Demo_Client {
	export interface Activity {
		action?: string;
		created_at?: string;
		data?: string;
		id?: number;
		model?: string;
		updated_at?: string;
		user_id?: number;
	}

	export interface Block {
		block_feeds?: Array<BlockFeed>;
		column?: number;
		description?: string;
		key?: string;
		name?: string;
		row?: number;
		size_x?: number;
		size_y?: number;
		visual_type?: string;
	}

	export interface BlockFeed {
		feed?: Feed;
		group?: Group;
		id?: string;
	}

	export interface Dashboard {
		blocks?: Array<Block>;
		description?: string;
		key?: string;
		name?: string;
	}

	export interface Data {
		completed_at?: string;
		created_at?: string;
		created_epoch?: number;
		ele?: number;
		expiration?: string;
		feed_id?: number;
		group_id?: number;
		id?: string;
		lat?: number;
		lon?: number;
		updated_at?: string;
		value?: string;
	}

	export interface DataResponse {
		completed_at?: string;
		created_at?: string;
		created_epoch?: number;
		ele?: number;
		expiration?: string;
		feed_id?: number;
		group_id?: number;
		id?: string;
		lat?: number;
		lon?: number;
		updated_at?: string;
		value?: string;
	}

	export interface Error {
		code?: string;
		message?: string;
	}

	export interface Feed {
		created_at?: string;
		description?: string;

		/**Additional details about this feed. */
		details?: string;
		enabled?: boolean;
		group?: string;
		groups?: Array<ShallowGroup>;
		history?: boolean;
		id?: number;
		key?: string;
		last_value?: string;
		license?: string;
		name?: string;
		status?: string;

		/**Is status notification active? */
		status_notify?: boolean;

		/**Status notification timeout in minutes. */
		status_timeout?: number;
		unit_symbol?: string;
		unit_type?: string;
		updated_at?: string;
		visibility?: FeedVisibility;
	}

	export enum FeedVisibility { private = 0, public = 1 }

	export interface Group {
		created_at?: string;
		description?: string;
		feeds?: Array<Feed>;
		id?: number;
		name?: string;
		updated_at?: string;
	}

	export interface Permission {
		created_at?: string;
		id?: number;
		model?: PermissionModel;
		object_id?: number;
		scope?: PermissionScope;
		scope_value?: string;
		updated_at?: string;
		user_id?: number;
	}

	export enum PermissionModel { feed = 0, group = 1, dashboard = 2 }

	export enum PermissionScope { secret = 0, public = 1, user = 2, organization = 3 }

	export interface ShallowGroup {
		created_at?: string;
		description?: string;
		id?: number;
		name?: string;
		updated_at?: string;
	}

	export interface Token {
		token?: string;
	}

	export interface Trigger {
		name?: string;
	}

	export interface User {
		color?: string;
		created_at?: string;
		id?: number;
		name?: string;
		time_zone?: string;
		updated_at?: string;
		username?: string;
	}

	export class DemoClient {
		constructor(private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/') {
		}

		/**
		 * Get information about the current user
		 * Get user
		 * @return {User} A User record
		 */
		CurrentUser(headersHandler?: () => {[header: string]: string}): Promise<User> {
			return Axios.get<User>(this.baseUri + 'user', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Send data to a feed via webhook URL.
		 * Post webhooks/feed/:token
		 * @param {CreateWebhookFeedDataBody} requestBody Webhook payload containing data `value` parameter.
		 * @return {Data} New feed data record
		 */
		CreateWebhookFeedData(requestBody: CreateWebhookFeedDataBody, headersHandler?: () => {[header: string]: string}): Promise<Data> {
			return Axios.post<Data>(this.baseUri + 'webhooks/feed/:token', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Send arbitrary data to a feed via webhook URL.
		 * The raw data webhook receiver accepts POST requests and stores the raw request body on your feed. This is useful when you don't have control of the webhook sender. If feed history is turned on, payloads will be truncated at 1024 bytes. If feed history is turned off, payloads will be truncated at 100KB.
		 * Post webhooks/feed/:token/raw
		 * @return {Data} New feed data record
		 */
		CreateRawWebhookFeedData(headersHandler?: () => {[header: string]: string}): Promise<Data> {
			return Axios.post<Data>(this.baseUri + 'webhooks/feed/:token/raw', null, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * All activities for current user
		 * Delete all your activities.
		 * Delete {username}/activities
		 * @param {string} username a valid username string
		 * @return {void} Deleted activities successfully
		 */
		DestroyActivities(username: string, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.delete(this.baseUri + (username == null ? '' : encodeURIComponent(username)) + '/activities', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * All activities for current user
		 * The Activities endpoint returns information about the user's activities.
		 * Get {username}/activities
		 * @param {string} username a valid username string
		 * @param {Date} start_time Start time for filtering, returns records created after given time.
		 * @param {Date} end_time End time for filtering, returns records created before give time.
		 * @param {number} limit Limit the number of records returned.
		 * @return {Array<Activity>} An array of activities
		 */
		AllActivities(username: string, start_time: Date, end_time: Date, limit: number, headersHandler?: () => {[header: string]: string}): Promise<Array<Activity>> {
			return Axios.get<Array<Activity>>(this.baseUri + (username == null ? '' : encodeURIComponent(username)) + '/activities&start_time=' + start_time.toISOString() + '&end_time=' + end_time.toISOString() + '&limit=' + limit + '', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Get activities by type for current user
		 * The Activities endpoint returns information about the user's activities.
		 * Get {username}/activities/{type}
		 * @param {string} username a valid username string
		 * @param {Date} start_time Start time for filtering, returns records created after given time.
		 * @param {Date} end_time End time for filtering, returns records created before give time.
		 * @param {number} limit Limit the number of records returned.
		 * @return {Array<Activity>} An array of activities
		 */
		GetActivity(username: string, type: string, start_time: Date, end_time: Date, limit: number, headersHandler?: () => {[header: string]: string}): Promise<Array<Activity>> {
			return Axios.get<Array<Activity>>(this.baseUri + (username == null ? '' : encodeURIComponent(username)) + '/activities/' + (type == null ? '' : encodeURIComponent(type)) + '&start_time=' + start_time.toISOString() + '&end_time=' + end_time.toISOString() + '&limit=' + limit + '', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * All dashboards for current user
		 * The Dashboards endpoint returns information about the user's dashboards.
		 * Get {username}/dashboards
		 * @param {string} username a valid username string
		 * @return {Array<Dashboard>} An array of dashboards
		 */
		AllDashboards(username: string, headersHandler?: () => {[header: string]: string}): Promise<Array<Dashboard>> {
			return Axios.get<Array<Dashboard>>(this.baseUri + (username == null ? '' : encodeURIComponent(username)) + '/dashboards', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Create a new Dashboard
		 * Post {username}/dashboards
		 * @param {string} username a valid username string
		 * @return {Dashboard} New Dashboard
		 */
		CreateDashboard(username: string, requestBody: createDashboardDashboard, headersHandler?: () => {[header: string]: string}): Promise<Dashboard> {
			return Axios.post<Dashboard>(this.baseUri + (username == null ? '' : encodeURIComponent(username)) + '/dashboards', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * All blocks for current user
		 * The Blocks endpoint returns information about the user's blocks.
		 * Get {username}/dashboards/{dashboard_id}/blocks
		 * @param {string} username a valid username string
		 * @return {Array<Block>} An array of blocks
		 */
		AllBlocks(username: string, dashboard_id: string, headersHandler?: () => {[header: string]: string}): Promise<Array<Block>> {
			return Axios.get<Array<Block>>(this.baseUri + (username == null ? '' : encodeURIComponent(username)) + '/dashboards/' + (dashboard_id == null ? '' : encodeURIComponent(dashboard_id)) + '/blocks', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Create a new Block
		 * Post {username}/dashboards/{dashboard_id}/blocks
		 * @param {string} username a valid username string
		 * @return {Block} New Block
		 */
		CreateBlock(username: string, dashboard_id: string, requestBody: createBlockBlock, headersHandler?: () => {[header: string]: string}): Promise<Block> {
			return Axios.post<Block>(this.baseUri + (username == null ? '' : encodeURIComponent(username)) + '/dashboards/' + (dashboard_id == null ? '' : encodeURIComponent(dashboard_id)) + '/blocks', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Delete an existing Block
		 * Delete {username}/dashboards/{dashboard_id}/blocks/{id}
		 * @param {string} username a valid username string
		 * @return {string} Deleted Block successfully
		 */
		DestroyBlock(username: string, dashboard_id: string, id: string, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return Axios.delete(this.baseUri + (username == null ? '' : encodeURIComponent(username)) + '/dashboards/' + (dashboard_id == null ? '' : encodeURIComponent(dashboard_id)) + '/blocks/' + (id == null ? '' : encodeURIComponent(id)) + '', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' }).then(d => d.data);
		}

		/**
		 * Returns Block based on ID
		 * Get {username}/dashboards/{dashboard_id}/blocks/{id}
		 * @param {string} username a valid username string
		 * @return {Block} Block response
		 */
		GetBlock(username: string, dashboard_id: string, id: string, headersHandler?: () => {[header: string]: string}): Promise<Block> {
			return Axios.get<Block>(this.baseUri + (username == null ? '' : encodeURIComponent(username)) + '/dashboards/' + (dashboard_id == null ? '' : encodeURIComponent(dashboard_id)) + '/blocks/' + (id == null ? '' : encodeURIComponent(id)) + '', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Replace an existing Block
		 * Put {username}/dashboards/{dashboard_id}/blocks/{id}
		 * @param {string} username a valid username string
		 * @return {Block} Updated block
		 */
		ReplaceBlock(username: string, dashboard_id: string, id: string, requestBody: createBlockBlock, headersHandler?: () => {[header: string]: string}): Promise<Block> {
			return Axios.put<Block>(this.baseUri + (username == null ? '' : encodeURIComponent(username)) + '/dashboards/' + (dashboard_id == null ? '' : encodeURIComponent(dashboard_id)) + '/blocks/' + (id == null ? '' : encodeURIComponent(id)) + '', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Delete an existing Dashboard
		 * Delete {username}/dashboards/{id}
		 * @param {string} username a valid username string
		 * @return {string} Deleted Dashboard successfully
		 */
		DestroyDashboard(username: string, id: string, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return Axios.delete(this.baseUri + (username == null ? '' : encodeURIComponent(username)) + '/dashboards/' + (id == null ? '' : encodeURIComponent(id)) + '', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' }).then(d => d.data);
		}

		/**
		 * Returns Dashboard based on ID
		 * Get {username}/dashboards/{id}
		 * @param {string} username a valid username string
		 * @return {Dashboard} Dashboard response
		 */
		GetDashboard(username: string, id: string, headersHandler?: () => {[header: string]: string}): Promise<Dashboard> {
			return Axios.get<Dashboard>(this.baseUri + (username == null ? '' : encodeURIComponent(username)) + '/dashboards/' + (id == null ? '' : encodeURIComponent(id)) + '', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Replace an existing Dashboard
		 * Put {username}/dashboards/{id}
		 * @param {string} username a valid username string
		 * @return {Dashboard} Updated dashboard
		 */
		ReplaceDashboard(username: string, id: string, requestBody: createDashboardDashboard, headersHandler?: () => {[header: string]: string}): Promise<Dashboard> {
			return Axios.put<Dashboard>(this.baseUri + (username == null ? '' : encodeURIComponent(username)) + '/dashboards/' + (id == null ? '' : encodeURIComponent(id)) + '', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * All feeds for current user
		 * The Feeds endpoint returns information about the user's feeds. The response includes the latest value of each feed, and other metadata about each feed.
		 * Get {username}/feeds
		 * @param {string} username a valid username string
		 * @return {Array<Feed>} An array of feeds
		 */
		AllFeeds(username: string, headersHandler?: () => {[header: string]: string}): Promise<Array<Feed>> {
			return Axios.get<Array<Feed>>(this.baseUri + (username == null ? '' : encodeURIComponent(username)) + '/feeds', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Create a new Feed
		 * Post {username}/feeds
		 * @param {string} username a valid username string
		 * @return {Feed} New feed
		 */
		CreateFeed(username: string, group_key: string, requestBody: createFeedFeed, headersHandler?: () => {[header: string]: string}): Promise<Feed> {
			return Axios.post<Feed>(this.baseUri + (username == null ? '' : encodeURIComponent(username)) + '/feeds&group_key=' + (group_key == null ? '' : encodeURIComponent(group_key)) + '', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Delete an existing Feed
		 * Delete {username}/feeds/{feed_key}
		 * @param {string} username a valid username string
		 * @param {string} feed_key a valid feed key
		 * @return {void} Deleted feed successfully
		 */
		DestroyFeed(username: string, feed_key: string, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.delete(this.baseUri + (username == null ? '' : encodeURIComponent(username)) + '/feeds/' + (feed_key == null ? '' : encodeURIComponent(feed_key)) + '', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Get feed by feed key
		 * Returns feed based on the feed key
		 * Get {username}/feeds/{feed_key}
		 * @param {string} username a valid username string
		 * @param {string} feed_key a valid feed key
		 * @return {Feed} Feed response
		 */
		GetFeed(username: string, feed_key: string, headersHandler?: () => {[header: string]: string}): Promise<Feed> {
			return Axios.get<Feed>(this.baseUri + (username == null ? '' : encodeURIComponent(username)) + '/feeds/' + (feed_key == null ? '' : encodeURIComponent(feed_key)) + '', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Replace an existing Feed
		 * Put {username}/feeds/{feed_key}
		 * @param {string} username a valid username string
		 * @param {string} feed_key a valid feed key
		 * @return {Feed} Updated feed
		 */
		ReplaceFeed(username: string, feed_key: string, requestBody: createFeedFeed, headersHandler?: () => {[header: string]: string}): Promise<Feed> {
			return Axios.put<Feed>(this.baseUri + (username == null ? '' : encodeURIComponent(username)) + '/feeds/' + (feed_key == null ? '' : encodeURIComponent(feed_key)) + '', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Get all data for the given feed
		 * Get {username}/feeds/{feed_key}/data
		 * @param {string} username a valid username string
		 * @param {string} feed_key a valid feed key
		 * @param {Date} start_time Start time for filtering, returns records created after given time.
		 * @param {Date} end_time End time for filtering, returns records created before give time.
		 * @param {number} limit Limit the number of records returned.
		 * @param {string} include List of Data record fields to include in response as comma separated list. Acceptable values are: `value`, `lat`, `lon`, `ele`, `id`, and `created_at`. 
		 * @return {Array<DataResponse>} An array of data
		 */
		AllData(username: string, feed_key: string, start_time: Date, end_time: Date, limit: number, include: string, headersHandler?: () => {[header: string]: string}): Promise<Array<DataResponse>> {
			return Axios.get<Array<DataResponse>>(this.baseUri + (username == null ? '' : encodeURIComponent(username)) + '/feeds/' + (feed_key == null ? '' : encodeURIComponent(feed_key)) + '/data&start_time=' + start_time.toISOString() + '&end_time=' + end_time.toISOString() + '&limit=' + limit + '&include=' + (include == null ? '' : encodeURIComponent(include)) + '', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Create new Data
		 * Create new data records on the given feed.
		 * **NOTE:** when feed history is on, data `value` size is limited to 1KB, when feed history is turned off data value size is limited to 100KB.
		 * Post {username}/feeds/{feed_key}/data
		 * @param {string} username a valid username string
		 * @param {string} feed_key a valid feed key
		 * @param {createDataDatum} requestBody Data record including a `value` field (required) and optionally including: `lat`, `lon`, `ele` (latitude, longitude, and elevation values), and `created_at` (a date/time string).
		 * @return {Data} New data
		 */
		CreateData(username: string, feed_key: string, requestBody: createDataDatum, headersHandler?: () => {[header: string]: string}): Promise<Data> {
			return Axios.post<Data>(this.baseUri + (username == null ? '' : encodeURIComponent(username)) + '/feeds/' + (feed_key == null ? '' : encodeURIComponent(feed_key)) + '/data', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Create multiple new Data records
		 * Post {username}/feeds/{feed_key}/data/batch
		 * @param {string} username a valid username string
		 * @param {string} feed_key a valid feed key
		 * @param {Array<string>} requestBody A collection of data records including `value` (required) and optionally including: `lat`, `lon`, `ele` (latitude, longitude, and elevation values), and `created_at` (a date/time string).
		 * @return {Array<DataResponse>} New data
		 */
		BatchCreateData(username: string, feed_key: string, requestBody: Array<string>, headersHandler?: () => {[header: string]: string}): Promise<Array<DataResponse>> {
			return Axios.post<Array<DataResponse>>(this.baseUri + (username == null ? '' : encodeURIComponent(username)) + '/feeds/' + (feed_key == null ? '' : encodeURIComponent(feed_key)) + '/data/batch', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Chart data for current feed
		 * The Chart API is what we use on io.adafruit.com to populate charts over varying timespans with a consistent number of data points. The maximum number of points returned is 480. This API works by aggregating slices of time into a single value by averaging.
		 * All time-based parameters are optional, if none are given it will default to 1 hour at the finest-grained resolution possible.
		 * Get {username}/feeds/{feed_key}/data/chart
		 * @param {string} username a valid username string
		 * @param {string} feed_key a valid feed key
		 * @param {Date} start_time Start time for filtering, returns records created after given time.
		 * @param {Date} end_time End time for filtering, returns records created before give time.
		 * @param {number} resolution A resolution size in minutes. By giving a resolution value you will get back grouped data points aggregated over resolution-sized intervals. NOTE: time span is preferred over resolution, so if you request a span of time that includes more than max limit points you may get a larger resolution than you requested. Valid resolutions are 1, 5, 10, 30, 60, and 120.
		 * @param {number} hours The number of hours the chart should cover.
		 * @return {string} A JSON record containing chart data and the parameters used to generate it.
		 */
		ChartData(username: string, feed_key: string, start_time: Date, end_time: Date, resolution: number, hours: number, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return Axios.get(this.baseUri + (username == null ? '' : encodeURIComponent(username)) + '/feeds/' + (feed_key == null ? '' : encodeURIComponent(feed_key)) + '/data/chart&start_time=' + start_time.toISOString() + '&end_time=' + end_time.toISOString() + '&resolution=' + resolution + '&hours=' + hours + '', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' }).then(d => d.data);
		}

		/**
		 * First Data in Queue
		 * Get the oldest data point in the feed. This request sets the queue pointer to the beginning of the feed.
		 * Get {username}/feeds/{feed_key}/data/first
		 * @param {string} username a valid username string
		 * @param {string} feed_key a valid feed key
		 * @param {string} include List of Data record fields to include in response as comma separated list. Acceptable values are: `value`, `lat`, `lon`, `ele`, `id`, and `created_at`. 
		 * @return {DataResponse} Data response
		 */
		FirstData(username: string, feed_key: string, include: string, headersHandler?: () => {[header: string]: string}): Promise<DataResponse> {
			return Axios.get<DataResponse>(this.baseUri + (username == null ? '' : encodeURIComponent(username)) + '/feeds/' + (feed_key == null ? '' : encodeURIComponent(feed_key)) + '/data/first&include=' + (include == null ? '' : encodeURIComponent(include)) + '', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Last Data in Queue
		 * Get the most recent data point in the feed. This request sets the queue pointer to the end of the feed.
		 * Get {username}/feeds/{feed_key}/data/last
		 * @param {string} username a valid username string
		 * @param {string} feed_key a valid feed key
		 * @param {string} include List of Data record fields to include in response as comma separated list. Acceptable values are: `value`, `lat`, `lon`, `ele`, `id`, and `created_at`. 
		 * @return {DataResponse} Data response
		 */
		LastData(username: string, feed_key: string, include: string, headersHandler?: () => {[header: string]: string}): Promise<DataResponse> {
			return Axios.get<DataResponse>(this.baseUri + (username == null ? '' : encodeURIComponent(username)) + '/feeds/' + (feed_key == null ? '' : encodeURIComponent(feed_key)) + '/data/last&include=' + (include == null ? '' : encodeURIComponent(include)) + '', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Next Data in Queue
		 * Get the next newest data point in the feed. If queue processing hasn't been started, the first data point in the feed will be returned.
		 * Get {username}/feeds/{feed_key}/data/next
		 * @param {string} username a valid username string
		 * @param {string} feed_key a valid feed key
		 * @param {string} include List of Data record fields to include in response as comma separated list. Acceptable values are: `value`, `lat`, `lon`, `ele`, `id`, and `created_at`. 
		 * @return {DataResponse} Data response
		 */
		NextData(username: string, feed_key: string, include: string, headersHandler?: () => {[header: string]: string}): Promise<DataResponse> {
			return Axios.get<DataResponse>(this.baseUri + (username == null ? '' : encodeURIComponent(username)) + '/feeds/' + (feed_key == null ? '' : encodeURIComponent(feed_key)) + '/data/next&include=' + (include == null ? '' : encodeURIComponent(include)) + '', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Previous Data in Queue
		 * Get the previously processed data point in the feed. NOTE: this method doesn't move the processing queue pointer.
		 * Get {username}/feeds/{feed_key}/data/previous
		 * @param {string} username a valid username string
		 * @param {string} feed_key a valid feed key
		 * @param {string} include List of Data record fields to include in response as comma separated list. Acceptable values are: `value`, `lat`, `lon`, `ele`, `id`, and `created_at`. 
		 * @return {DataResponse} Data response
		 */
		PreviousData(username: string, feed_key: string, include: string, headersHandler?: () => {[header: string]: string}): Promise<DataResponse> {
			return Axios.get<DataResponse>(this.baseUri + (username == null ? '' : encodeURIComponent(username)) + '/feeds/' + (feed_key == null ? '' : encodeURIComponent(feed_key)) + '/data/previous&include=' + (include == null ? '' : encodeURIComponent(include)) + '', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Last Data in MQTT CSV format
		 * Get the most recent data point in the feed in an MQTT compatible CSV format: `value,lat,lon,ele`
		 * Get {username}/feeds/{feed_key}/data/retain
		 * @param {string} username a valid username string
		 * @param {string} feed_key a valid feed key
		 * @return {void} CSV string in `value,lat,lon,ele` format. The lat, lon, and ele values are left blank if they are not set.
		 */
		RetainData(username: string, feed_key: string, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.get(this.baseUri + (username == null ? '' : encodeURIComponent(username)) + '/feeds/' + (feed_key == null ? '' : encodeURIComponent(feed_key)) + '/data/retain', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Delete existing Data
		 * Delete {username}/feeds/{feed_key}/data/{id}
		 * @param {string} username a valid username string
		 * @param {string} feed_key a valid feed key
		 * @return {string} Deleted Group successfully
		 */
		DestroyData(username: string, feed_key: string, id: string, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return Axios.delete(this.baseUri + (username == null ? '' : encodeURIComponent(username)) + '/feeds/' + (feed_key == null ? '' : encodeURIComponent(feed_key)) + '/data/' + (id == null ? '' : encodeURIComponent(id)) + '', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' }).then(d => d.data);
		}

		/**
		 * Returns data based on feed key
		 * Get {username}/feeds/{feed_key}/data/{id}
		 * @param {string} username a valid username string
		 * @param {string} feed_key a valid feed key
		 * @param {string} include List of Data record fields to include in response as comma separated list. Acceptable values are: `value`, `lat`, `lon`, `ele`, `id`, and `created_at`. 
		 * @return {DataResponse} Data response
		 */
		GetData(username: string, feed_key: string, id: string, include: string, headersHandler?: () => {[header: string]: string}): Promise<DataResponse> {
			return Axios.get<DataResponse>(this.baseUri + (username == null ? '' : encodeURIComponent(username)) + '/feeds/' + (feed_key == null ? '' : encodeURIComponent(feed_key)) + '/data/' + (id == null ? '' : encodeURIComponent(id)) + '&include=' + (include == null ? '' : encodeURIComponent(include)) + '', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Replace existing Data
		 * Put {username}/feeds/{feed_key}/data/{id}
		 * @param {string} username a valid username string
		 * @param {string} feed_key a valid feed key
		 * @param {createDataDatum} requestBody Data record including a `value` field (required) and optionally including: `lat`, `lon`, `ele` (latitude, longitude, and elevation values), and `created_at` (a date/time string).
		 * @return {DataResponse} Updated Data
		 */
		ReplaceData(username: string, feed_key: string, id: string, requestBody: createDataDatum, headersHandler?: () => {[header: string]: string}): Promise<DataResponse> {
			return Axios.put<DataResponse>(this.baseUri + (username == null ? '' : encodeURIComponent(username)) + '/feeds/' + (feed_key == null ? '' : encodeURIComponent(feed_key)) + '/data/' + (id == null ? '' : encodeURIComponent(id)) + '', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Get detailed feed by feed key
		 * Returns more detailed feed record based on the feed key
		 * Get {username}/feeds/{feed_key}/details
		 * @param {string} username a valid username string
		 * @param {string} feed_key a valid feed key
		 * @return {Feed} Feed response
		 */
		GetFeedDetails(username: string, feed_key: string, headersHandler?: () => {[header: string]: string}): Promise<Feed> {
			return Axios.get<Feed>(this.baseUri + (username == null ? '' : encodeURIComponent(username)) + '/feeds/' + (feed_key == null ? '' : encodeURIComponent(feed_key)) + '/details', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * All groups for current user
		 * The Groups endpoint returns information about the user's groups. The response includes the latest value of each feed in the group, and other metadata about the group.
		 * Get {username}/groups
		 * @param {string} username a valid username string
		 * @return {Array<Group>} An array of groups
		 */
		AllGroups(username: string, headersHandler?: () => {[header: string]: string}): Promise<Array<Group>> {
			return Axios.get<Array<Group>>(this.baseUri + (username == null ? '' : encodeURIComponent(username)) + '/groups', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Create a new Group
		 * Post {username}/groups
		 * @param {string} username a valid username string
		 * @return {Group} New Group
		 */
		CreateGroup(username: string, requestBody: createGroupGroup, headersHandler?: () => {[header: string]: string}): Promise<Group> {
			return Axios.post<Group>(this.baseUri + (username == null ? '' : encodeURIComponent(username)) + '/groups', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Delete an existing Group
		 * Delete {username}/groups/{group_key}
		 * @param {string} username a valid username string
		 * @return {string} Deleted Group successfully
		 */
		DestroyGroup(username: string, group_key: string, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return Axios.delete(this.baseUri + (username == null ? '' : encodeURIComponent(username)) + '/groups/' + (group_key == null ? '' : encodeURIComponent(group_key)) + '', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' }).then(d => d.data);
		}

		/**
		 * Returns Group based on ID
		 * Get {username}/groups/{group_key}
		 * @param {string} username a valid username string
		 * @return {Group} Group response
		 */
		GetGroup(username: string, group_key: string, headersHandler?: () => {[header: string]: string}): Promise<Group> {
			return Axios.get<Group>(this.baseUri + (username == null ? '' : encodeURIComponent(username)) + '/groups/' + (group_key == null ? '' : encodeURIComponent(group_key)) + '', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Replace an existing Group
		 * Put {username}/groups/{group_key}
		 * @param {string} username a valid username string
		 * @return {Group} Updated group
		 */
		ReplaceGroup(username: string, group_key: string, requestBody: createGroupGroup, headersHandler?: () => {[header: string]: string}): Promise<Group> {
			return Axios.put<Group>(this.baseUri + (username == null ? '' : encodeURIComponent(username)) + '/groups/' + (group_key == null ? '' : encodeURIComponent(group_key)) + '', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Add an existing Feed to a Group
		 * Post {username}/groups/{group_key}/add
		 * @param {string} username a valid username string
		 * @return {Group} Updated group
		 */
		AddFeedToGroup(group_key: string, username: string, feed_key: string, headersHandler?: () => {[header: string]: string}): Promise<Group> {
			return Axios.post<Group>(this.baseUri + (username == null ? '' : encodeURIComponent(username)) + '/groups/' + (group_key == null ? '' : encodeURIComponent(group_key)) + '/add&feed_key=' + (feed_key == null ? '' : encodeURIComponent(feed_key)) + '', null, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Create new data for multiple feeds in a group
		 * Post {username}/groups/{group_key}/data
		 * @param {string} username a valid username string
		 * @return {Array<DataResponse>} New data
		 */
		CreateGroupData(username: string, group_key: string, requestBody: CreateGroupDataBody, headersHandler?: () => {[header: string]: string}): Promise<Array<DataResponse>> {
			return Axios.post<Array<DataResponse>>(this.baseUri + (username == null ? '' : encodeURIComponent(username)) + '/groups/' + (group_key == null ? '' : encodeURIComponent(group_key)) + '/data', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * All feeds for current user in a given group
		 * The Group Feeds endpoint returns information about the user's feeds. The response includes the latest value of each feed, and other metadata about each feed, but only for feeds within the given group.
		 * Get {username}/groups/{group_key}/feeds
		 * @param {string} username a valid username string
		 * @return {Array<Feed>} An array of feeds
		 */
		AllGroupFeeds(group_key: string, username: string, headersHandler?: () => {[header: string]: string}): Promise<Array<Feed>> {
			return Axios.get<Array<Feed>>(this.baseUri + (username == null ? '' : encodeURIComponent(username)) + '/groups/' + (group_key == null ? '' : encodeURIComponent(group_key)) + '/feeds', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Create a new Feed in a Group
		 * Post {username}/groups/{group_key}/feeds
		 * @param {string} username a valid username string
		 * @return {Feed} New feed
		 */
		CreateGroupFeed(username: string, group_key: string, requestBody: createFeedFeed, headersHandler?: () => {[header: string]: string}): Promise<Feed> {
			return Axios.post<Feed>(this.baseUri + (username == null ? '' : encodeURIComponent(username)) + '/groups/' + (group_key == null ? '' : encodeURIComponent(group_key)) + '/feeds', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * All data for current feed in a specific group
		 * Get {username}/groups/{group_key}/feeds/{feed_key}/data
		 * @param {string} username a valid username string
		 * @param {string} feed_key a valid feed key
		 * @param {Date} start_time Start time for filtering data. Returns data created after given time.
		 * @param {Date} end_time End time for filtering data. Returns data created before give time.
		 * @param {number} limit Limit the number of records returned.
		 * @return {Array<DataResponse>} An array of data
		 */
		AllGroupFeedData(username: string, group_key: string, feed_key: string, start_time: Date, end_time: Date, limit: number, headersHandler?: () => {[header: string]: string}): Promise<Array<DataResponse>> {
			return Axios.get<Array<DataResponse>>(this.baseUri + (username == null ? '' : encodeURIComponent(username)) + '/groups/' + (group_key == null ? '' : encodeURIComponent(group_key)) + '/feeds/' + (feed_key == null ? '' : encodeURIComponent(feed_key)) + '/data&start_time=' + start_time.toISOString() + '&end_time=' + end_time.toISOString() + '&limit=' + limit + '', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Create new Data in a feed belonging to a particular group
		 * Post {username}/groups/{group_key}/feeds/{feed_key}/data
		 * @param {string} username a valid username string
		 * @param {string} feed_key a valid feed key
		 * @param {createDataDatum} requestBody Data record including a `value` field (required) and optionally including: `lat`, `lon`, `ele` (latitude, longitude, and elevation values), and `created_at` (a date/time string).
		 * @return {DataResponse} New data
		 */
		CreateGroupFeedData(username: string, group_key: string, feed_key: string, requestBody: createDataDatum, headersHandler?: () => {[header: string]: string}): Promise<DataResponse> {
			return Axios.post<DataResponse>(this.baseUri + (username == null ? '' : encodeURIComponent(username)) + '/groups/' + (group_key == null ? '' : encodeURIComponent(group_key)) + '/feeds/' + (feed_key == null ? '' : encodeURIComponent(feed_key)) + '/data', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Create multiple new Data records in a feed belonging to a particular group
		 * Post {username}/groups/{group_key}/feeds/{feed_key}/data/batch
		 * @param {string} username a valid username string
		 * @param {string} feed_key a valid feed key
		 * @param {Array<string>} requestBody A collection of data records including `value` (required) and optionally including: `lat`, `lon`, `ele` (latitude, longitude, and elevation values), and `created_at` (a date/time string).
		 * @return {Array<DataResponse>} New data
		 */
		BatchCreateGroupFeedData(username: string, group_key: string, feed_key: string, requestBody: Array<string>, headersHandler?: () => {[header: string]: string}): Promise<Array<DataResponse>> {
			return Axios.post<Array<DataResponse>>(this.baseUri + (username == null ? '' : encodeURIComponent(username)) + '/groups/' + (group_key == null ? '' : encodeURIComponent(group_key)) + '/feeds/' + (feed_key == null ? '' : encodeURIComponent(feed_key)) + '/data/batch', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Remove a Feed from a Group
		 * Post {username}/groups/{group_key}/remove
		 * @param {string} username a valid username string
		 * @return {Group} Updated group
		 */
		RemoveFeedFromGroup(group_key: string, username: string, feed_key: string, headersHandler?: () => {[header: string]: string}): Promise<Group> {
			return Axios.post<Group>(this.baseUri + (username == null ? '' : encodeURIComponent(username)) + '/groups/' + (group_key == null ? '' : encodeURIComponent(group_key)) + '/remove&feed_key=' + (feed_key == null ? '' : encodeURIComponent(feed_key)) + '', null, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Get the user's data rate limit and current activity level.
		 * Get {username}/throttle
		 * @param {string} username a valid username string
		 * @return {string} Data rate limit and current actions.
		 */
		GetCurrentUserThrottle(username: string, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return Axios.get(this.baseUri + (username == null ? '' : encodeURIComponent(username)) + '/throttle', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' }).then(d => d.data);
		}

		/**
		 * All tokens for current user
		 * The Tokens endpoint returns information about the user's tokens.
		 * Get {username}/tokens
		 * @param {string} username a valid username string
		 * @return {Array<Token>} An array of tokens
		 */
		AllTokens(username: string, headersHandler?: () => {[header: string]: string}): Promise<Array<Token>> {
			return Axios.get<Array<Token>>(this.baseUri + (username == null ? '' : encodeURIComponent(username)) + '/tokens', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Create a new Token
		 * Post {username}/tokens
		 * @param {string} username a valid username string
		 * @return {Token} New Token
		 */
		CreateToken(username: string, requestBody: createTokenToken, headersHandler?: () => {[header: string]: string}): Promise<Token> {
			return Axios.post<Token>(this.baseUri + (username == null ? '' : encodeURIComponent(username)) + '/tokens', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Delete an existing Token
		 * Delete {username}/tokens/{id}
		 * @param {string} username a valid username string
		 * @return {string} Deleted Token successfully
		 */
		DestroyToken(username: string, id: string, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return Axios.delete(this.baseUri + (username == null ? '' : encodeURIComponent(username)) + '/tokens/' + (id == null ? '' : encodeURIComponent(id)) + '', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' }).then(d => d.data);
		}

		/**
		 * Returns Token based on ID
		 * Get {username}/tokens/{id}
		 * @param {string} username a valid username string
		 * @return {Token} Token response
		 */
		GetToken(username: string, id: string, headersHandler?: () => {[header: string]: string}): Promise<Token> {
			return Axios.get<Token>(this.baseUri + (username == null ? '' : encodeURIComponent(username)) + '/tokens/' + (id == null ? '' : encodeURIComponent(id)) + '', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Replace an existing Token
		 * Put {username}/tokens/{id}
		 * @param {string} username a valid username string
		 * @return {Token} Updated token
		 */
		ReplaceToken(username: string, id: string, requestBody: createTokenToken, headersHandler?: () => {[header: string]: string}): Promise<Token> {
			return Axios.put<Token>(this.baseUri + (username == null ? '' : encodeURIComponent(username)) + '/tokens/' + (id == null ? '' : encodeURIComponent(id)) + '', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * All triggers for current user
		 * The Triggers endpoint returns information about the user's triggers.
		 * Get {username}/triggers
		 * @param {string} username a valid username string
		 * @return {Array<Trigger>} An array of triggers
		 */
		AllTriggers(username: string, headersHandler?: () => {[header: string]: string}): Promise<Array<Trigger>> {
			return Axios.get<Array<Trigger>>(this.baseUri + (username == null ? '' : encodeURIComponent(username)) + '/triggers', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Create a new Trigger
		 * Post {username}/triggers
		 * @param {string} username a valid username string
		 * @return {Trigger} New Trigger
		 */
		CreateTrigger(username: string, requestBody: createTriggerTrigger, headersHandler?: () => {[header: string]: string}): Promise<Trigger> {
			return Axios.post<Trigger>(this.baseUri + (username == null ? '' : encodeURIComponent(username)) + '/triggers', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Delete an existing Trigger
		 * Delete {username}/triggers/{id}
		 * @param {string} username a valid username string
		 * @return {string} Deleted Trigger successfully
		 */
		DestroyTrigger(username: string, id: string, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return Axios.delete(this.baseUri + (username == null ? '' : encodeURIComponent(username)) + '/triggers/' + (id == null ? '' : encodeURIComponent(id)) + '', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' }).then(d => d.data);
		}

		/**
		 * Returns Trigger based on ID
		 * Get {username}/triggers/{id}
		 * @param {string} username a valid username string
		 * @return {Trigger} Trigger response
		 */
		GetTrigger(username: string, id: string, headersHandler?: () => {[header: string]: string}): Promise<Trigger> {
			return Axios.get<Trigger>(this.baseUri + (username == null ? '' : encodeURIComponent(username)) + '/triggers/' + (id == null ? '' : encodeURIComponent(id)) + '', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Replace an existing Trigger
		 * Put {username}/triggers/{id}
		 * @param {string} username a valid username string
		 * @return {Trigger} Updated trigger
		 */
		ReplaceTrigger(username: string, id: string, requestBody: createTriggerTrigger, headersHandler?: () => {[header: string]: string}): Promise<Trigger> {
			return Axios.put<Trigger>(this.baseUri + (username == null ? '' : encodeURIComponent(username)) + '/triggers/' + (id == null ? '' : encodeURIComponent(id)) + '', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * All permissions for current user and type
		 * The Permissions endpoint returns information about the user's permissions.
		 * Get {username}/{type}/{type_id}/acl
		 * @param {string} username a valid username string
		 * @return {Array<Permission>} An array of permissions
		 */
		AllPermissions(username: string, type: string, type_id: string, headersHandler?: () => {[header: string]: string}): Promise<Array<Permission>> {
			return Axios.get<Array<Permission>>(this.baseUri + (username == null ? '' : encodeURIComponent(username)) + '/' + (type == null ? '' : encodeURIComponent(type)) + '/' + (type_id == null ? '' : encodeURIComponent(type_id)) + '/acl', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Create a new Permission
		 * Post {username}/{type}/{type_id}/acl
		 * @param {string} username a valid username string
		 * @return {Permission} New Permission
		 */
		CreatePermission(username: string, type: string, type_id: string, requestBody: createPermissionPermission, headersHandler?: () => {[header: string]: string}): Promise<Permission> {
			return Axios.post<Permission>(this.baseUri + (username == null ? '' : encodeURIComponent(username)) + '/' + (type == null ? '' : encodeURIComponent(type)) + '/' + (type_id == null ? '' : encodeURIComponent(type_id)) + '/acl', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * Delete an existing Permission
		 * Delete {username}/{type}/{type_id}/acl/{id}
		 * @param {string} username a valid username string
		 * @return {string} Deleted Permission successfully
		 */
		DestroyPermission(username: string, type: string, type_id: string, id: string, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return Axios.delete(this.baseUri + (username == null ? '' : encodeURIComponent(username)) + '/' + (type == null ? '' : encodeURIComponent(type)) + '/' + (type_id == null ? '' : encodeURIComponent(type_id)) + '/acl/' + (id == null ? '' : encodeURIComponent(id)) + '', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' }).then(d => d.data);
		}

		/**
		 * Returns Permission based on ID
		 * Get {username}/{type}/{type_id}/acl/{id}
		 * @param {string} username a valid username string
		 * @return {Permission} Permission response
		 */
		GetPermission(username: string, type: string, type_id: string, id: string, headersHandler?: () => {[header: string]: string}): Promise<Permission> {
			return Axios.get<Permission>(this.baseUri + (username == null ? '' : encodeURIComponent(username)) + '/' + (type == null ? '' : encodeURIComponent(type)) + '/' + (type_id == null ? '' : encodeURIComponent(type_id)) + '/acl/' + (id == null ? '' : encodeURIComponent(id)) + '', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Replace an existing Permission
		 * Put {username}/{type}/{type_id}/acl/{id}
		 * @param {string} username a valid username string
		 * @return {Permission} Updated permission
		 */
		ReplacePermission(username: string, type: string, type_id: string, id: string, requestBody: createPermissionPermission, headersHandler?: () => {[header: string]: string}): Promise<Permission> {
			return Axios.put<Permission>(this.baseUri + (username == null ? '' : encodeURIComponent(username)) + '/' + (type == null ? '' : encodeURIComponent(type)) + '/' + (type_id == null ? '' : encodeURIComponent(type_id)) + '/acl/' + (id == null ? '' : encodeURIComponent(id)) + '', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}
	}

	export interface CreateWebhookFeedDataBody {
		value?: string;
	}

	export interface CreateGroupDataBody {

		/**Optional created_at timestamp which will be applied to all feed values created. */
		created_at?: string;

		/**An array of feed data records with `key` and `value` properties. */
		CreateGroupDataBodyFeeds: Array<CreateGroupDataBodyFeeds>;

		/**A location record with `lat`, `lon`, and [optional] `ele` properties. */
		location?: string;
	}

	export interface CreateGroupDataBodyFeeds {
		key: string;
		value: string;
	}

}

