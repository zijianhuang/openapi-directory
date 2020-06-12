import Axios from 'axios';
import { AxiosResponse } from 'axios';
export namespace My_Demo_Client {

	/**The output for the BulkPublish operation. */
	export interface BulkPublishResponse {
		IdentityPoolId?: string;
	}


	/**Thrown when a user is not authorized to access the requested resource. */
	export interface NotAuthorizedException {
		message: string;
	}


	/**Thrown when a request parameter does not comply with the associated constraints. */
	export interface InvalidParameterException {
		message: string;
	}


	/**Thrown if the resource doesn't exist. */
	export interface ResourceNotFoundException {
		message: string;
	}


	/**Indicates an internal service error. */
	export interface InternalErrorException {
		message: string;
	}


	/**An exception thrown when there is an IN_PROGRESS bulk publish operation for the given identity pool. */
	export interface DuplicateRequestException {
		message: string;
	}


	/**An exception thrown when a bulk publish operation is requested less than 24 hours after a previous bulk publish operation completed successfully. */
	export interface AlreadyStreamedException {
		message: string;
	}


	/**Response to a successful DeleteDataset request. */
	export interface DeleteDatasetResponse {

		/**A collection of data for an identity pool. An identity pool can have multiple datasets. A dataset is per identity and can be general or associated with a particular entity in an application (like a saved game). Datasets are automatically created if they don't exist. Data is synced by dataset, and a dataset can hold up to 1MB of key-value pairs. */
		Dataset?: Dataset;
	}


	/**Thrown if the request is throttled. */
	export interface TooManyRequestsException {
		message: string;
	}


	/**Thrown if an update can't be applied because the resource was changed by another call and this would result in a conflict. */
	export interface ResourceConflictException {
		message: string;
	}


	/**Response to a successful DescribeDataset request. */
	export interface DescribeDatasetResponse {

		/**A collection of data for an identity pool. An identity pool can have multiple datasets. A dataset is per identity and can be general or associated with a particular entity in an application (like a saved game). Datasets are automatically created if they don't exist. Data is synced by dataset, and a dataset can hold up to 1MB of key-value pairs. */
		Dataset?: Dataset;
	}


	/**Response to a successful DescribeIdentityPoolUsage request. */
	export interface DescribeIdentityPoolUsageResponse {

		/**Usage information for the identity pool. */
		IdentityPoolUsage?: IdentityPoolUsage;
	}


	/**The response to a successful DescribeIdentityUsage request. */
	export interface DescribeIdentityUsageResponse {

		/**Usage information for the identity. */
		IdentityUsage?: IdentityUsage;
	}


	/**The output for the GetBulkPublishDetails operation. */
	export interface GetBulkPublishDetailsResponse {
		IdentityPoolId?: string;
		BulkPublishStartTime?: Date;
		BulkPublishCompleteTime?: Date;
		BulkPublishStatus?: GetBulkPublishDetailsResponseBulkPublishStatus;
		FailureMessage?: string;
	}

	export enum GetBulkPublishDetailsResponseBulkPublishStatus { NOT_STARTED = 0, IN_PROGRESS = 1, FAILED = 2, SUCCEEDED = 3 }


	/**The response from the GetCognitoEvents request */
	export interface GetCognitoEventsResponse {
		Events?: Events;
	}


	/**The output for the GetIdentityPoolConfiguration operation. */
	export interface GetIdentityPoolConfigurationResponse {
		IdentityPoolId?: string;

		/**Configuration options to be applied to the identity pool. */
		PushSync?: PushSync;

		/**Configuration options for configure Cognito streams. */
		CognitoStreams?: CognitoStreams;
	}


	/**Returned for a successful ListDatasets request. */
	export interface ListDatasetsResponse {
		Datasets?: Array<Dataset>;
		Count?: number;
		NextToken?: string;
	}


	/**Returned for a successful ListIdentityPoolUsage request. */
	export interface ListIdentityPoolUsageResponse {
		IdentityPoolUsages?: Array<IdentityPoolUsage>;
		MaxResults?: number;
		Count?: number;
		NextToken?: string;
	}


	/**Returned for a successful ListRecordsRequest. */
	export interface ListRecordsResponse {
		Records?: Array<Record>;
		NextToken?: string;
		Count?: number;
		DatasetSyncCount?: number;
		LastModifiedBy?: string;
		MergedDatasetNames?: Array<String>;
		DatasetExists?: boolean;
		DatasetDeletedAfterRequestedSyncCount?: boolean;
		SyncSessionToken?: string;
	}


	/**Response to a RegisterDevice request. */
	export interface RegisterDeviceResponse {
		DeviceId?: string;
	}

	export interface InvalidConfigurationException {
		message: string;
	}


	/**The output for the SetIdentityPoolConfiguration operation */
	export interface SetIdentityPoolConfigurationResponse {
		IdentityPoolId?: string;

		/**Configuration options to be applied to the identity pool. */
		PushSync?: PushSync;

		/**Configuration options for configure Cognito streams. */
		CognitoStreams?: CognitoStreams;
	}

	export enum StreamingStatus { ENABLED = 0, DISABLED = 1 }


	/**Thrown if there are parallel requests to modify a resource. */
	export interface ConcurrentModificationException {
		message: string;
	}


	/**Returned for a successful UpdateRecordsRequest. */
	export interface UpdateRecordsResponse {
		Records?: Array<Record>;
	}


	/**An update operation for a record. */
	export interface RecordPatch {
		Op: RecordPatchOp;
		Key: string;
		Value?: string;
		SyncCount: number;
		DeviceLastModifiedDate?: Date;
	}

	export enum RecordPatchOp { replace = 0, remove = 1 }


	/**Thrown when the limit on the number of objects or operations has been exceeded. */
	export interface LimitExceededException {
		message: string;
	}


	/**The AWS Lambda function returned invalid output or an exception. */
	export interface InvalidLambdaFunctionOutputException {
		message: string;
	}


	/**AWS Lambda throttled your account, please contact AWS Support */
	export interface LambdaThrottledException {
		message: string;
	}

	export enum BulkPublishStatus { NOT_STARTED = 0, IN_PROGRESS = 1, FAILED = 2, SUCCEEDED = 3 }


	/**Configuration options for configure Cognito streams. */
	export interface CognitoStreams {
		StreamName?: string;
		RoleArn?: string;
		StreamingStatus?: CognitoStreamsStreamingStatus;
	}

	export enum CognitoStreamsStreamingStatus { ENABLED = 0, DISABLED = 1 }


	/**A collection of data for an identity pool. An identity pool can have multiple datasets. A dataset is per identity and can be general or associated with a particular entity in an application (like a saved game). Datasets are automatically created if they don't exist. Data is synced by dataset, and a dataset can hold up to 1MB of key-value pairs. */
	export interface Dataset {
		IdentityId?: string;
		DatasetName?: string;
		CreationDate?: Date;
		LastModifiedDate?: Date;
		LastModifiedBy?: string;
		DataStorage?: number;
		NumRecords?: number;
	}


	/**Usage information for the identity pool. */
	export interface IdentityPoolUsage {
		IdentityPoolId?: string;
		SyncSessionsCount?: number;
		DataStorage?: number;
		LastModifiedDate?: Date;
	}


	/**Usage information for the identity. */
	export interface IdentityUsage {
		IdentityId?: string;
		IdentityPoolId?: string;
		LastModifiedDate?: Date;
		DatasetCount?: number;
		DataStorage?: number;
	}


	/**Configuration options to be applied to the identity pool. */
	export interface PushSync {
		ApplicationArns?: Array<ApplicationArn>;
		RoleArn?: string;
	}

	export enum Operation { replace = 0, remove = 1 }

	export enum Platform { APNS = 0, APNS_SANDBOX = 1, GCM = 2, ADM = 3 }


	/**The basic data structure of a dataset. */
	export interface Record {
		Key?: string;
		Value?: string;
		SyncCount?: number;
		LastModifiedDate?: Date;
		LastModifiedBy?: string;
		DeviceLastModifiedDate?: Date;
	}


	/**A request to RegisterDevice. */
	export interface RegisterDeviceRequest {
		Platform: RegisterDeviceRequestPlatform;
		Token: string;
	}

	export enum RegisterDeviceRequestPlatform { APNS = 0, APNS_SANDBOX = 1, GCM = 2, ADM = 3 }


	/**<p>A request to configure Cognito Events"</p>" */
	export interface SetCognitoEventsRequest {
		Events: Events;
	}


	/**The input for the SetIdentityPoolConfiguration operation. */
	export interface SetIdentityPoolConfigurationRequest {

		/**Configuration options to be applied to the identity pool. */
		PushSync?: PushSync;

		/**Configuration options for configure Cognito streams. */
		CognitoStreams?: CognitoStreams;
	}


	/**A request to post updates to records or add and delete records for a dataset and user. */
	export interface UpdateRecordsRequest {
		DeviceId?: string;
		RecordPatches?: Array<RecordPatch>;
		SyncSessionToken: string;
	}

	export class DemoClient {
		constructor(private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/') {
		}

		/**
		 * <p>Initiates a bulk publish of all existing datasets for an Identity Pool to the configured stream. Customers are limited to one successful bulk publish per 24 hours. Bulk publish is an asynchronous request, customers can see the status of the request via the GetBulkPublishDetails operation.</p> <p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
		 * Post /identitypools/{IdentityPoolId}/bulkpublish
		 * @param {string} IdentityPoolId A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.
		 * @return {BulkPublishResponse} Success
		 */
		BulkPublish(IdentityPoolId: string, headersHandler?: () => {[header: string]: string}): Promise<BulkPublishResponse> {
			return Axios.post<BulkPublishResponse>(this.baseUri + '/identitypools/' + (IdentityPoolId == null ? '' : encodeURIComponent(IdentityPoolId)) + '/bulkpublish', null, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * <p>Deletes the specific dataset. The dataset will be deleted permanently, and the action can't be undone. Datasets that this dataset was merged with will no longer report the merge. Any subsequent operation on this dataset will result in a ResourceNotFoundException.</p> <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.</p>
		 * Delete /identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}
		 * @param {string} IdentityPoolId A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.
		 * @param {string} IdentityId A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.
		 * @param {string} DatasetName A string of up to 128 characters. Allowed characters are a-z, A-Z, 0-9, '_' (underscore), '-' (dash), and '.' (dot).
		 * @return {DeleteDatasetResponse} Success
		 */
		DeleteDataset(IdentityPoolId: string, IdentityId: string, DatasetName: string, headersHandler?: () => {[header: string]: string}): Promise<DeleteDatasetResponse> {
			return Axios.delete<DeleteDatasetResponse>(this.baseUri + '/identitypools/' + (IdentityPoolId == null ? '' : encodeURIComponent(IdentityPoolId)) + '/identities/' + (IdentityId == null ? '' : encodeURIComponent(IdentityId)) + '/datasets/' + (DatasetName == null ? '' : encodeURIComponent(DatasetName)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * <p>Gets meta data about a dataset by identity and dataset name. With Amazon Cognito Sync, each identity has access only to its own data. Thus, the credentials used to make this API call need to have access to the identity data.</p> <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials. You should use Cognito Identity credentials to make this API call.</p>
		 * Get /identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}
		 * @param {string} IdentityPoolId A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.
		 * @param {string} IdentityId A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.
		 * @param {string} DatasetName A string of up to 128 characters. Allowed characters are a-z, A-Z, 0-9, '_' (underscore), '-' (dash), and '.' (dot).
		 * @return {DescribeDatasetResponse} Success
		 */
		DescribeDataset(IdentityPoolId: string, IdentityId: string, DatasetName: string, headersHandler?: () => {[header: string]: string}): Promise<DescribeDatasetResponse> {
			return Axios.get<DescribeDatasetResponse>(this.baseUri + '/identitypools/' + (IdentityPoolId == null ? '' : encodeURIComponent(IdentityPoolId)) + '/identities/' + (IdentityId == null ? '' : encodeURIComponent(IdentityId)) + '/datasets/' + (DatasetName == null ? '' : encodeURIComponent(DatasetName)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * <p>Posts updates to records and adds and deletes records for a dataset and user.</p> <p>The sync count in the record patch is your last known sync count for that record. The server will reject an UpdateRecords request with a ResourceConflictException if you try to patch a record with a new value but a stale sync count.</p> <p>For example, if the sync count on the server is 5 for a key called highScore and you try and submit a new highScore with sync count of 4, the request will be rejected. To obtain the current sync count for a record, call ListRecords. On a successful update of the record, the response returns the new sync count for that record. You should present that sync count the next time you try to update that same record. When the record does not exist, specify the sync count as 0.</p> <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.</p>
		 * Post /identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}
		 * @param {string} IdentityPoolId A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.
		 * @param {string} IdentityId A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.
		 * @param {string} DatasetName A string of up to 128 characters. Allowed characters are a-z, A-Z, 0-9, '_' (underscore), '-' (dash), and '.' (dot).
		 * @return {UpdateRecordsResponse} Success
		 */
		UpdateRecords(IdentityPoolId: string, IdentityId: string, DatasetName: string, requestBody: UpdateRecordsBody, headersHandler?: () => {[header: string]: string}): Promise<UpdateRecordsResponse> {
			return Axios.post<UpdateRecordsResponse>(this.baseUri + '/identitypools/' + (IdentityPoolId == null ? '' : encodeURIComponent(IdentityPoolId)) + '/identities/' + (IdentityId == null ? '' : encodeURIComponent(IdentityId)) + '/datasets/' + (DatasetName == null ? '' : encodeURIComponent(DatasetName)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * <p>Gets usage details (for example, data storage) about a particular identity pool.</p> <p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
		 * Get /identitypools/{IdentityPoolId}
		 * @param {string} IdentityPoolId A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.
		 * @return {DescribeIdentityPoolUsageResponse} Success
		 */
		DescribeIdentityPoolUsage(IdentityPoolId: string, headersHandler?: () => {[header: string]: string}): Promise<DescribeIdentityPoolUsageResponse> {
			return Axios.get<DescribeIdentityPoolUsageResponse>(this.baseUri + '/identitypools/' + (IdentityPoolId == null ? '' : encodeURIComponent(IdentityPoolId)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * <p>Gets usage information for an identity, including number of datasets and data usage.</p> <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.</p>
		 * Get /identitypools/{IdentityPoolId}/identities/{IdentityId}
		 * @param {string} IdentityPoolId A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.
		 * @param {string} IdentityId A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.
		 * @return {DescribeIdentityUsageResponse} Success
		 */
		DescribeIdentityUsage(IdentityPoolId: string, IdentityId: string, headersHandler?: () => {[header: string]: string}): Promise<DescribeIdentityUsageResponse> {
			return Axios.get<DescribeIdentityUsageResponse>(this.baseUri + '/identitypools/' + (IdentityPoolId == null ? '' : encodeURIComponent(IdentityPoolId)) + '/identities/' + (IdentityId == null ? '' : encodeURIComponent(IdentityId)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * <p>Get the status of the last BulkPublish operation for an identity pool.</p> <p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
		 * Post /identitypools/{IdentityPoolId}/getBulkPublishDetails
		 * @param {string} IdentityPoolId A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.
		 * @return {GetBulkPublishDetailsResponse} Success
		 */
		GetBulkPublishDetails(IdentityPoolId: string, headersHandler?: () => {[header: string]: string}): Promise<GetBulkPublishDetailsResponse> {
			return Axios.post<GetBulkPublishDetailsResponse>(this.baseUri + '/identitypools/' + (IdentityPoolId == null ? '' : encodeURIComponent(IdentityPoolId)) + '/getBulkPublishDetails', null, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * <p>Gets the events and the corresponding Lambda functions associated with an identity pool.</p> <p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
		 * Get /identitypools/{IdentityPoolId}/events
		 * @param {string} IdentityPoolId The Cognito Identity Pool ID for the request
		 * @return {GetCognitoEventsResponse} Success
		 */
		GetCognitoEvents(IdentityPoolId: string, headersHandler?: () => {[header: string]: string}): Promise<GetCognitoEventsResponse> {
			return Axios.get<GetCognitoEventsResponse>(this.baseUri + '/identitypools/' + (IdentityPoolId == null ? '' : encodeURIComponent(IdentityPoolId)) + '/events', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * <p>Sets the AWS Lambda function for a given event type for an identity pool. This request only updates the key/value pair specified. Other key/values pairs are not updated. To remove a key value pair, pass a empty value for the particular key.</p> <p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
		 * Post /identitypools/{IdentityPoolId}/events
		 * @param {string} IdentityPoolId The Cognito Identity Pool to use when configuring Cognito Events
		 * @return {void} Success
		 */
		SetCognitoEvents(IdentityPoolId: string, requestBody: SetCognitoEventsBody, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.post(this.baseUri + '/identitypools/' + (IdentityPoolId == null ? '' : encodeURIComponent(IdentityPoolId)) + '/events', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * <p>Gets the configuration settings of an identity pool.</p> <p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
		 * Get /identitypools/{IdentityPoolId}/configuration
		 * @param {string} IdentityPoolId A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. This is the ID of the pool for which to return a configuration.
		 * @return {GetIdentityPoolConfigurationResponse} Success
		 */
		GetIdentityPoolConfiguration(IdentityPoolId: string, headersHandler?: () => {[header: string]: string}): Promise<GetIdentityPoolConfigurationResponse> {
			return Axios.get<GetIdentityPoolConfigurationResponse>(this.baseUri + '/identitypools/' + (IdentityPoolId == null ? '' : encodeURIComponent(IdentityPoolId)) + '/configuration', { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * <p>Sets the necessary configuration for push sync.</p> <p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
		 * Post /identitypools/{IdentityPoolId}/configuration
		 * @param {string} IdentityPoolId A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. This is the ID of the pool to modify.
		 * @return {SetIdentityPoolConfigurationResponse} Success
		 */
		SetIdentityPoolConfiguration(IdentityPoolId: string, requestBody: SetIdentityPoolConfigurationBody, headersHandler?: () => {[header: string]: string}): Promise<SetIdentityPoolConfigurationResponse> {
			return Axios.post<SetIdentityPoolConfigurationResponse>(this.baseUri + '/identitypools/' + (IdentityPoolId == null ? '' : encodeURIComponent(IdentityPoolId)) + '/configuration', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * <p>Lists datasets for an identity. With Amazon Cognito Sync, each identity has access only to its own data. Thus, the credentials used to make this API call need to have access to the identity data.</p> <p>ListDatasets can be called with temporary user credentials provided by Cognito Identity or with developer credentials. You should use the Cognito Identity credentials to make this API call.</p>
		 * Get /identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets
		 * @param {string} IdentityPoolId A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.
		 * @param {string} IdentityId A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.
		 * @param {string} nextToken A pagination token for obtaining the next page of results.
		 * @param {number} maxResults The maximum number of results to be returned.
		 * @return {ListDatasetsResponse} Success
		 */
		ListDatasets(IdentityPoolId: string, IdentityId: string, nextToken: string, maxResults: number, headersHandler?: () => {[header: string]: string}): Promise<ListDatasetsResponse> {
			return Axios.get<ListDatasetsResponse>(this.baseUri + '/identitypools/' + (IdentityPoolId == null ? '' : encodeURIComponent(IdentityPoolId)) + '/identities/' + (IdentityId == null ? '' : encodeURIComponent(IdentityId)) + '/datasets&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * <p>Gets a list of identity pools registered with Cognito.</p> <p>ListIdentityPoolUsage can only be called with developer credentials. You cannot make this API call with the temporary user credentials provided by Cognito Identity.</p>
		 * Get /identitypools
		 * @param {string} nextToken A pagination token for obtaining the next page of results.
		 * @param {number} maxResults The maximum number of results to be returned.
		 * @return {ListIdentityPoolUsageResponse} Success
		 */
		ListIdentityPoolUsage(nextToken: string, maxResults: number, headersHandler?: () => {[header: string]: string}): Promise<ListIdentityPoolUsageResponse> {
			return Axios.get<ListIdentityPoolUsageResponse>(this.baseUri + '/identitypools?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * <p>Gets paginated records, optionally changed after a particular sync count for a dataset and identity. With Amazon Cognito Sync, each identity has access only to its own data. Thus, the credentials used to make this API call need to have access to the identity data.</p> <p>ListRecords can be called with temporary user credentials provided by Cognito Identity or with developer credentials. You should use Cognito Identity credentials to make this API call.</p>
		 * Get /identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}/records
		 * @param {string} IdentityPoolId A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.
		 * @param {string} IdentityId A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.
		 * @param {string} DatasetName A string of up to 128 characters. Allowed characters are a-z, A-Z, 0-9, '_' (underscore), '-' (dash), and '.' (dot).
		 * @param {number} lastSyncCount The last server sync count for this record.
		 * @param {string} nextToken A pagination token for obtaining the next page of results.
		 * @param {number} maxResults The maximum number of results to be returned.
		 * @param {string} syncSessionToken A token containing a session ID, identity ID, and expiration.
		 * @return {ListRecordsResponse} Success
		 */
		ListRecords(IdentityPoolId: string, IdentityId: string, DatasetName: string, lastSyncCount: number, nextToken: string, maxResults: number, syncSessionToken: string, headersHandler?: () => {[header: string]: string}): Promise<ListRecordsResponse> {
			return Axios.get<ListRecordsResponse>(this.baseUri + '/identitypools/' + (IdentityPoolId == null ? '' : encodeURIComponent(IdentityPoolId)) + '/identities/' + (IdentityId == null ? '' : encodeURIComponent(IdentityId)) + '/datasets/' + (DatasetName == null ? '' : encodeURIComponent(DatasetName)) + '/records&lastSyncCount=' + lastSyncCount + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&syncSessionToken=' + (syncSessionToken == null ? '' : encodeURIComponent(syncSessionToken)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * <p>Registers a device to receive push sync notifications.</p> <p>This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.</p>
		 * Post /identitypools/{IdentityPoolId}/identity/{IdentityId}/device
		 * @param {string} IdentityPoolId A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. Here, the ID of the pool that the identity belongs to.
		 * @param {string} IdentityId The unique ID for this identity.
		 * @return {RegisterDeviceResponse} Success
		 */
		RegisterDevice(IdentityPoolId: string, IdentityId: string, requestBody: RegisterDeviceBody, headersHandler?: () => {[header: string]: string}): Promise<RegisterDeviceResponse> {
			return Axios.post<RegisterDeviceResponse>(this.baseUri + '/identitypools/' + (IdentityPoolId == null ? '' : encodeURIComponent(IdentityPoolId)) + '/identity/' + (IdentityId == null ? '' : encodeURIComponent(IdentityId)) + '/device', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data);
		}

		/**
		 * <p>Subscribes to receive notifications when a dataset is modified by another device.</p> <p>This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.</p>
		 * Post /identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}/subscriptions/{DeviceId}
		 * @param {string} IdentityPoolId A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. The ID of the pool to which the identity belongs.
		 * @param {string} IdentityId Unique ID for this identity.
		 * @param {string} DatasetName The name of the dataset to subcribe to.
		 * @param {string} DeviceId The unique ID generated for this device by Cognito.
		 * @return {SubscribeToDatasetResponse} Success
		 */
		SubscribeToDataset(IdentityPoolId: string, IdentityId: string, DatasetName: string, DeviceId: string, headersHandler?: () => {[header: string]: string}): Promise<SubscribeToDatasetResponse> {
			return Axios.post<SubscribeToDatasetResponse>(this.baseUri + '/identitypools/' + (IdentityPoolId == null ? '' : encodeURIComponent(IdentityPoolId)) + '/identities/' + (IdentityId == null ? '' : encodeURIComponent(IdentityId)) + '/datasets/' + (DatasetName == null ? '' : encodeURIComponent(DatasetName)) + '/subscriptions/' + (DeviceId == null ? '' : encodeURIComponent(DeviceId)), null, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * <p>Unsubscribes from receiving notifications when a dataset is modified by another device.</p> <p>This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.</p>
		 * Delete /identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}/subscriptions/{DeviceId}
		 * @param {string} IdentityPoolId A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. The ID of the pool to which this identity belongs.
		 * @param {string} IdentityId Unique ID for this identity.
		 * @param {string} DatasetName The name of the dataset from which to unsubcribe.
		 * @param {string} DeviceId The unique ID generated for this device by Cognito.
		 * @return {UnsubscribeFromDatasetResponse} Success
		 */
		UnsubscribeFromDataset(IdentityPoolId: string, IdentityId: string, DatasetName: string, DeviceId: string, headersHandler?: () => {[header: string]: string}): Promise<UnsubscribeFromDatasetResponse> {
			return Axios.delete<UnsubscribeFromDatasetResponse>(this.baseUri + '/identitypools/' + (IdentityPoolId == null ? '' : encodeURIComponent(IdentityPoolId)) + '/identities/' + (IdentityId == null ? '' : encodeURIComponent(IdentityId)) + '/datasets/' + (DatasetName == null ? '' : encodeURIComponent(DatasetName)) + '/subscriptions/' + (DeviceId == null ? '' : encodeURIComponent(DeviceId)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}
	}

	export interface UpdateRecordsBody {

		/**
		 * The unique ID generated for this device by Cognito.
		 * Max length: 256
		 * Min length: 1
		 */
		DeviceId?: string;

		/**A list of patch operations. */
		RecordPatches?: Array<RecordPatch>;

		/**The SyncSessionToken returned by a previous call to ListRecords for this dataset and identity. */
		SyncSessionToken: string;
	}

	export interface SetCognitoEventsBody {

		/**The events to configure */
		Events: string;
	}

	export interface SetIdentityPoolConfigurationBody {

		/**Configuration options to be applied to the identity pool. */
		PushSync?: string;

		/**Configuration options for configure Cognito streams. */
		CognitoStreams?: string;
	}

	export interface RegisterDeviceBody {

		/**The SNS platform type (e.g. GCM, SDM, APNS, APNS_SANDBOX). */
		Platform: RegisterDeviceBodyPlatform;

		/**The push token. */
		Token: string;
	}

	export enum RegisterDeviceBodyPlatform { APNS = 0, APNS_SANDBOX = 1, GCM = 2, ADM = 3 }

}

