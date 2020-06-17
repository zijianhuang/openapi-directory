import {HttpClient} from 'aurelia-fetch-client';
import {autoinject} from 'aurelia-framework';
export namespace My_Demo_Client {
	export interface CancelJournalKinesisStreamResponse {
		StreamId?: string;
	}

	export interface CreateLedgerResponse {
		Name?: string;
		Arn?: string;
		State?: CreateLedgerResponseState;
		CreationDateTime?: Date;
		DeletionProtection?: boolean;
	}

	export enum CreateLedgerResponseState { CREATING = 0, ACTIVE = 1, DELETING = 2, DELETED = 3 }

	export interface DescribeJournalKinesisStreamResponse {

		/**The information about an Amazon QLDB journal stream, including the Amazon Resource Name (ARN), stream name, creation time, current status, and the parameters of your original stream creation request. */
		Stream?: JournalKinesisStreamDescription;
	}

	export interface DescribeJournalS3ExportResponse {

		/**The information about a journal export job, including the ledger name, export ID, when it was created, current status, and its start and end time export parameters. */
		ExportDescription: JournalS3ExportDescription;
	}

	export interface DescribeLedgerResponse {
		Name?: string;
		Arn?: string;
		State?: DescribeLedgerResponseState;
		CreationDateTime?: Date;
		DeletionProtection?: boolean;
	}

	export enum DescribeLedgerResponseState { CREATING = 0, ACTIVE = 1, DELETING = 2, DELETED = 3 }

	export interface ExportJournalToS3Response {
		ExportId: string;
	}


	/**The encryption settings that are used by a journal export job to write data in an Amazon Simple Storage Service (Amazon S3) bucket. */
	export interface S3EncryptionConfiguration {
		ObjectEncryptionType: S3EncryptionConfigurationObjectEncryptionType;
		KmsKeyArn?: string;
	}

	export enum S3EncryptionConfigurationObjectEncryptionType { SSE_KMS = 0, SSE_S3 = 1, NO_ENCRYPTION = 2 }

	export interface GetBlockResponse {

		/**A structure that can contain an Amazon Ion value in multiple encoding formats. */
		Block: ValueHolder;

		/**A structure that can contain an Amazon Ion value in multiple encoding formats. */
		Proof?: ValueHolder;
	}

	export interface GetDigestResponse {
		Digest: string;

		/**A structure that can contain an Amazon Ion value in multiple encoding formats. */
		DigestTipAddress: ValueHolder;
	}

	export interface GetRevisionResponse {

		/**A structure that can contain an Amazon Ion value in multiple encoding formats. */
		Proof?: ValueHolder;

		/**A structure that can contain an Amazon Ion value in multiple encoding formats. */
		Revision: ValueHolder;
	}

	export interface ListJournalKinesisStreamsForLedgerResponse {
		Streams?: Array<JournalKinesisStreamDescription>;
		NextToken?: string;
	}

	export interface ListJournalS3ExportsResponse {
		JournalS3Exports?: Array<JournalS3ExportDescription>;
		NextToken?: string;
	}

	export interface ListJournalS3ExportsForLedgerResponse {
		JournalS3Exports?: Array<JournalS3ExportDescription>;
		NextToken?: string;
	}

	export interface ListLedgersResponse {
		Ledgers?: Array<LedgerSummary>;
		NextToken?: string;
	}

	export interface ListTagsForResourceResponse {
		Tags?: Tags;
	}

	export interface StreamJournalToKinesisResponse {
		StreamId?: string;
	}

	export interface UpdateLedgerResponse {
		Name?: string;
		Arn?: string;
		State?: UpdateLedgerResponseState;
		CreationDateTime?: Date;
		DeletionProtection?: boolean;
	}

	export enum UpdateLedgerResponseState { CREATING = 0, ACTIVE = 1, DELETING = 2, DELETED = 3 }

	export enum PermissionsMode { ALLOW_ALL = 0 }

	export interface CreateLedgerRequest {
		Name: string;
		Tags?: Tags;
		PermissionsMode: CreateLedgerRequestPermissionsMode;
		DeletionProtection?: boolean;
	}

	export enum CreateLedgerRequestPermissionsMode { ALLOW_ALL = 0 }

	export enum LedgerState { CREATING = 0, ACTIVE = 1, DELETING = 2, DELETED = 3 }


	/**The information about an Amazon QLDB journal stream, including the Amazon Resource Name (ARN), stream name, creation time, current status, and the parameters of your original stream creation request. */
	export interface JournalKinesisStreamDescription {
		LedgerName: string;
		CreationTime?: Date;
		InclusiveStartTime?: Date;
		ExclusiveEndTime?: Date;
		RoleArn: string;
		StreamId: string;
		Arn?: string;
		Status: JournalKinesisStreamDescriptionStatus;

		/**The configuration settings of the Amazon Kinesis Data Streams destination for your Amazon QLDB journal stream. */
		KinesisConfiguration: KinesisConfiguration;
		ErrorCause?: JournalKinesisStreamDescriptionErrorCause;
		StreamName: string;
	}

	export enum JournalKinesisStreamDescriptionStatus { ACTIVE = 0, COMPLETED = 1, CANCELED = 2, FAILED = 3, IMPAIRED = 4 }

	export enum JournalKinesisStreamDescriptionErrorCause { KINESIS_STREAM_NOT_FOUND = 0, IAM_PERMISSION_REVOKED = 1 }


	/**The information about a journal export job, including the ledger name, export ID, when it was created, current status, and its start and end time export parameters. */
	export interface JournalS3ExportDescription {
		LedgerName: string;
		ExportId: string;
		ExportCreationTime: Date;
		Status: JournalS3ExportDescriptionStatus;
		InclusiveStartTime: Date;
		ExclusiveEndTime: Date;

		/**The Amazon Simple Storage Service (Amazon S3) bucket location in which a journal export job writes the journal contents. */
		S3ExportConfiguration: S3ExportConfiguration;
		RoleArn: string;
	}

	export enum JournalS3ExportDescriptionStatus { IN_PROGRESS = 0, COMPLETED = 1, CANCELLED = 2 }

	export enum ErrorCause { KINESIS_STREAM_NOT_FOUND = 0, IAM_PERMISSION_REVOKED = 1 }


	/**The Amazon Simple Storage Service (Amazon S3) bucket location in which a journal export job writes the journal contents. */
	export interface S3ExportConfiguration {
		Bucket: string;
		Prefix: string;

		/**The encryption settings that are used by a journal export job to write data in an Amazon Simple Storage Service (Amazon S3) bucket. */
		EncryptionConfiguration: S3EncryptionConfiguration;
	}

	export interface ExportJournalToS3Request {
		InclusiveStartTime: Date;
		ExclusiveEndTime: Date;

		/**The Amazon Simple Storage Service (Amazon S3) bucket location in which a journal export job writes the journal contents. */
		S3ExportConfiguration: S3ExportConfiguration;
		RoleArn: string;
	}

	export enum ExportStatus { IN_PROGRESS = 0, COMPLETED = 1, CANCELLED = 2 }


	/**A structure that can contain an Amazon Ion value in multiple encoding formats. */
	export interface ValueHolder {
		IonText?: string;
	}

	export interface GetBlockRequest {

		/**A structure that can contain an Amazon Ion value in multiple encoding formats. */
		BlockAddress: ValueHolder;

		/**A structure that can contain an Amazon Ion value in multiple encoding formats. */
		DigestTipAddress?: ValueHolder;
	}

	export interface GetRevisionRequest {

		/**A structure that can contain an Amazon Ion value in multiple encoding formats. */
		BlockAddress: ValueHolder;
		DocumentId: string;

		/**A structure that can contain an Amazon Ion value in multiple encoding formats. */
		DigestTipAddress?: ValueHolder;
	}

	export enum StreamStatus { ACTIVE = 0, COMPLETED = 1, CANCELED = 2, FAILED = 3, IMPAIRED = 4 }


	/**The configuration settings of the Amazon Kinesis Data Streams destination for your Amazon QLDB journal stream. */
	export interface KinesisConfiguration {
		StreamArn: string;
		AggregationEnabled?: boolean;
	}


	/**Information about a ledger, including its name, state, and when it was created. */
	export interface LedgerSummary {
		Name?: string;
		State?: LedgerSummaryState;
		CreationDateTime?: Date;
	}

	export enum LedgerSummaryState { CREATING = 0, ACTIVE = 1, DELETING = 2, DELETED = 3 }

	export enum S3ObjectEncryptionType { SSE_KMS = 0, SSE_S3 = 1, NO_ENCRYPTION = 2 }

	export interface StreamJournalToKinesisRequest {
		RoleArn: string;
		Tags?: Tags;
		InclusiveStartTime: Date;
		ExclusiveEndTime?: Date;

		/**The configuration settings of the Amazon Kinesis Data Streams destination for your Amazon QLDB journal stream. */
		KinesisConfiguration: KinesisConfiguration;
		StreamName: string;
	}

	export interface TagResourceRequest {
		Tags: Tags;
	}

	export interface UpdateLedgerRequest {
		DeletionProtection?: boolean;
	}

	@autoinject()
	export class DemoClient {
		constructor(private http: HttpClient) {
		}

		/**
		 * <p>Ends a given Amazon QLDB journal stream. Before a stream can be canceled, its current status must be <code>ACTIVE</code>.</p> <p>You can't restart a stream after you cancel it. Canceled QLDB stream resources are subject to a 7-day retention period, so they are automatically deleted after this limit expires.</p>
		 * Delete /ledgers/{name}/journal-kinesis-streams/{streamId}
		 * @param {string} name The name of the ledger.
		 * @param {string} streamId The unique ID that QLDB assigns to each QLDB journal stream.
		 * @return {CancelJournalKinesisStreamResponse} Success
		 */
		CancelJournalKinesisStream(name: string, streamId: string, headersHandler?: () => {[header: string]: string}): Promise<CancelJournalKinesisStreamResponse> {
			return this.http.delete('/ledgers/' + (name == null ? '' : encodeURIComponent(name)) + '/journal-kinesis-streams/' + (streamId == null ? '' : encodeURIComponent(streamId)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Returns detailed information about a given Amazon QLDB journal stream. The output includes the Amazon Resource Name (ARN), stream name, current status, creation time, and the parameters of your original stream creation request.
		 * Get /ledgers/{name}/journal-kinesis-streams/{streamId}
		 * @param {string} name The name of the ledger.
		 * @param {string} streamId The unique ID that QLDB assigns to each QLDB journal stream.
		 * @return {DescribeJournalKinesisStreamResponse} Success
		 */
		DescribeJournalKinesisStream(name: string, streamId: string, headersHandler?: () => {[header: string]: string}): Promise<DescribeJournalKinesisStreamResponse> {
			return this.http.get('/ledgers/' + (name == null ? '' : encodeURIComponent(name)) + '/journal-kinesis-streams/' + (streamId == null ? '' : encodeURIComponent(streamId)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Creates a new ledger in your AWS account.
		 * Post /ledgers
		 * @return {CreateLedgerResponse} Success
		 */
		CreateLedger(requestBody: CreateLedgerBody, headersHandler?: () => {[header: string]: string}): Promise<CreateLedgerResponse> {
			return this.http.post('/ledgers', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * <p>Returns an array of ledger summaries that are associated with the current AWS account and Region.</p> <p>This action returns a maximum of 100 items and is paginated so that you can retrieve all the items by calling <code>ListLedgers</code> multiple times.</p>
		 * Get /ledgers
		 * @param {number} max_results The maximum number of results to return in a single <code>ListLedgers</code> request. (The actual number of results returned might be fewer.)
		 * @param {string} next_token A pagination token, indicating that you want to retrieve the next page of results. If you received a value for <code>NextToken</code> in the response from a previous <code>ListLedgers</code> call, then you should use that value as input here.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListLedgersResponse} Success
		 */
		ListLedgers(max_results: number, next_token: string, MaxResults: string, NextToken: string, headersHandler?: () => {[header: string]: string}): Promise<ListLedgersResponse> {
			return this.http.get('/ledgers?max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * <p>Deletes a ledger and all of its contents. This action is irreversible.</p> <p>If deletion protection is enabled, you must first disable it before you can delete the ledger using the QLDB API or the AWS Command Line Interface (AWS CLI). You can disable it by calling the <code>UpdateLedger</code> operation to set the flag to <code>false</code>. The QLDB console disables deletion protection for you when you use it to delete a ledger.</p>
		 * Delete /ledgers/{name}
		 * @param {string} name The name of the ledger that you want to delete.
		 * @return {void} Success
		 */
		DeleteLedger(name: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.delete('/ledgers/' + (name == null ? '' : encodeURIComponent(name)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns information about a ledger, including its state and when it was created.
		 * Get /ledgers/{name}
		 * @param {string} name The name of the ledger that you want to describe.
		 * @return {DescribeLedgerResponse} Success
		 */
		DescribeLedger(name: string, headersHandler?: () => {[header: string]: string}): Promise<DescribeLedgerResponse> {
			return this.http.get('/ledgers/' + (name == null ? '' : encodeURIComponent(name)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * <p>Returns information about a journal export job, including the ledger name, export ID, when it was created, current status, and its start and end time export parameters.</p> <p>This action does not return any expired export jobs. For more information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/export-journal.request.html#export-journal.request.expiration">Export Job Expiration</a> in the <i>Amazon QLDB Developer Guide</i>.</p> <p>If the export job with the given <code>ExportId</code> doesn't exist, then throws <code>ResourceNotFoundException</code>.</p> <p>If the ledger with the given <code>Name</code> doesn't exist, then throws <code>ResourceNotFoundException</code>.</p>
		 * Get /ledgers/{name}/journal-s3-exports/{exportId}
		 * @param {string} name The name of the ledger.
		 * @param {string} exportId The unique ID of the journal export job that you want to describe.
		 * @return {DescribeJournalS3ExportResponse} Success
		 */
		DescribeJournalS3Export(name: string, exportId: string, headersHandler?: () => {[header: string]: string}): Promise<DescribeJournalS3ExportResponse> {
			return this.http.get('/ledgers/' + (name == null ? '' : encodeURIComponent(name)) + '/journal-s3-exports/' + (exportId == null ? '' : encodeURIComponent(exportId)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * <p>Exports journal contents within a date and time range from a ledger into a specified Amazon Simple Storage Service (Amazon S3) bucket. The data is written as files in Amazon Ion format.</p> <p>If the ledger with the given <code>Name</code> doesn't exist, then throws <code>ResourceNotFoundException</code>.</p> <p>If the ledger with the given <code>Name</code> is in <code>CREATING</code> status, then throws <code>ResourcePreconditionNotMetException</code>.</p> <p>You can initiate up to two concurrent journal export requests for each ledger. Beyond this limit, journal export requests throw <code>LimitExceededException</code>.</p>
		 * Post /ledgers/{name}/journal-s3-exports
		 * @param {string} name The name of the ledger.
		 * @return {ExportJournalToS3Response} Success
		 */
		ExportJournalToS3(name: string, requestBody: ExportJournalToS3Body, headersHandler?: () => {[header: string]: string}): Promise<ExportJournalToS3Response> {
			return this.http.post('/ledgers/' + (name == null ? '' : encodeURIComponent(name)) + '/journal-s3-exports', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * <p>Returns an array of journal export job descriptions for a specified ledger.</p> <p>This action returns a maximum of <code>MaxResults</code> items, and is paginated so that you can retrieve all the items by calling <code>ListJournalS3ExportsForLedger</code> multiple times.</p> <p>This action does not return any expired export jobs. For more information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/export-journal.request.html#export-journal.request.expiration">Export Job Expiration</a> in the <i>Amazon QLDB Developer Guide</i>.</p>
		 * Get /ledgers/{name}/journal-s3-exports
		 * @param {string} name The name of the ledger.
		 * @param {number} max_results The maximum number of results to return in a single <code>ListJournalS3ExportsForLedger</code> request. (The actual number of results returned might be fewer.)
		 * @param {string} next_token A pagination token, indicating that you want to retrieve the next page of results. If you received a value for <code>NextToken</code> in the response from a previous <code>ListJournalS3ExportsForLedger</code> call, then you should use that value as input here.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListJournalS3ExportsForLedgerResponse} Success
		 */
		ListJournalS3ExportsForLedger(name: string, max_results: number, next_token: string, MaxResults: string, NextToken: string, headersHandler?: () => {[header: string]: string}): Promise<ListJournalS3ExportsForLedgerResponse> {
			return this.http.get('/ledgers/' + (name == null ? '' : encodeURIComponent(name)) + '/journal-s3-exports&max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * <p>Returns a journal block object at a specified address in a ledger. Also returns a proof of the specified block for verification if <code>DigestTipAddress</code> is provided.</p> <p>If the specified ledger doesn't exist or is in <code>DELETING</code> status, then throws <code>ResourceNotFoundException</code>.</p> <p>If the specified ledger is in <code>CREATING</code> status, then throws <code>ResourcePreconditionNotMetException</code>.</p> <p>If no block exists with the specified address, then throws <code>InvalidParameterException</code>.</p>
		 * Post /ledgers/{name}/block
		 * @param {string} name The name of the ledger.
		 * @return {GetBlockResponse} Success
		 */
		GetBlock(name: string, requestBody: GetBlockBody, headersHandler?: () => {[header: string]: string}): Promise<GetBlockResponse> {
			return this.http.post('/ledgers/' + (name == null ? '' : encodeURIComponent(name)) + '/block', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Returns the digest of a ledger at the latest committed block in the journal. The response includes a 256-bit hash value and a block address.
		 * Post /ledgers/{name}/digest
		 * @param {string} name The name of the ledger.
		 * @return {GetDigestResponse} Success
		 */
		GetDigest(name: string, headersHandler?: () => {[header: string]: string}): Promise<GetDigestResponse> {
			return this.http.post('/ledgers/' + (name == null ? '' : encodeURIComponent(name)) + '/digest', null, { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Returns a revision data object for a specified document ID and block address. Also returns a proof of the specified revision for verification if <code>DigestTipAddress</code> is provided.
		 * Post /ledgers/{name}/revision
		 * @param {string} name The name of the ledger.
		 * @return {GetRevisionResponse} Success
		 */
		GetRevision(name: string, requestBody: GetRevisionBody, headersHandler?: () => {[header: string]: string}): Promise<GetRevisionResponse> {
			return this.http.post('/ledgers/' + (name == null ? '' : encodeURIComponent(name)) + '/revision', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * <p>Returns an array of all Amazon QLDB journal stream descriptors for a given ledger. The output of each stream descriptor includes the same details that are returned by <code>DescribeJournalKinesisStream</code>.</p> <p>This action returns a maximum of <code>MaxResults</code> items. It is paginated so that you can retrieve all the items by calling <code>ListJournalKinesisStreamsForLedger</code> multiple times.</p>
		 * Get /ledgers/{name}/journal-kinesis-streams
		 * @param {string} name The name of the ledger.
		 * @param {number} max_results The maximum number of results to return in a single <code>ListJournalKinesisStreamsForLedger</code> request. (The actual number of results returned might be fewer.)
		 * @param {string} next_token A pagination token, indicating that you want to retrieve the next page of results. If you received a value for <code>NextToken</code> in the response from a previous <code>ListJournalKinesisStreamsForLedger</code> call, you should use that value as input here.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListJournalKinesisStreamsForLedgerResponse} Success
		 */
		ListJournalKinesisStreamsForLedger(name: string, max_results: number, next_token: string, MaxResults: string, NextToken: string, headersHandler?: () => {[header: string]: string}): Promise<ListJournalKinesisStreamsForLedgerResponse> {
			return this.http.get('/ledgers/' + (name == null ? '' : encodeURIComponent(name)) + '/journal-kinesis-streams&max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Creates a stream for a given Amazon QLDB ledger that delivers the journal data to a specified Amazon Kinesis Data Streams resource. The stream captures every document revision that is committed to your journal and sends it to the Kinesis data stream.
		 * Post /ledgers/{name}/journal-kinesis-streams
		 * @param {string} name The name of the ledger.
		 * @return {StreamJournalToKinesisResponse} Success
		 */
		StreamJournalToKinesis(name: string, requestBody: StreamJournalToKinesisBody, headersHandler?: () => {[header: string]: string}): Promise<StreamJournalToKinesisResponse> {
			return this.http.post('/ledgers/' + (name == null ? '' : encodeURIComponent(name)) + '/journal-kinesis-streams', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * <p>Returns an array of journal export job descriptions for all ledgers that are associated with the current AWS account and Region.</p> <p>This action returns a maximum of <code>MaxResults</code> items, and is paginated so that you can retrieve all the items by calling <code>ListJournalS3Exports</code> multiple times.</p> <p>This action does not return any expired export jobs. For more information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/export-journal.request.html#export-journal.request.expiration">Export Job Expiration</a> in the <i>Amazon QLDB Developer Guide</i>.</p>
		 * Get /journal-s3-exports
		 * @param {number} max_results The maximum number of results to return in a single <code>ListJournalS3Exports</code> request. (The actual number of results returned might be fewer.)
		 * @param {string} next_token A pagination token, indicating that you want to retrieve the next page of results. If you received a value for <code>NextToken</code> in the response from a previous <code>ListJournalS3Exports</code> call, then you should use that value as input here.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListJournalS3ExportsResponse} Success
		 */
		ListJournalS3Exports(max_results: number, next_token: string, MaxResults: string, NextToken: string, headersHandler?: () => {[header: string]: string}): Promise<ListJournalS3ExportsResponse> {
			return this.http.get('/journal-s3-exports?max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Returns all tags for a specified Amazon QLDB resource.
		 * Get /tags/{resourceArn}
		 * @param {string} resourceArn <p>The Amazon Resource Name (ARN) for which you want to list the tags. For example:</p> <p> <code>arn:aws:qldb:us-east-1:123456789012:ledger/exampleLedger</code> </p>
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string, headersHandler?: () => {[header: string]: string}): Promise<ListTagsForResourceResponse> {
			return this.http.get('/tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * <p>Adds one or more tags to a specified Amazon QLDB resource.</p> <p>A resource can have up to 50 tags. If you try to create more than 50 tags for a resource, your request fails and returns an error.</p>
		 * Post /tags/{resourceArn}
		 * @param {string} resourceArn <p>The Amazon Resource Name (ARN) to which you want to add the tags. For example:</p> <p> <code>arn:aws:qldb:us-east-1:123456789012:ledger/exampleLedger</code> </p>
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourceBody, headersHandler?: () => {[header: string]: string}): Promise<TagResourceResponse> {
			return this.http.post('/tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Removes one or more tags from a specified Amazon QLDB resource. You can specify up to 50 tag keys to remove.
		 * Delete /tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn <p>The Amazon Resource Name (ARN) from which you want to remove the tags. For example:</p> <p> <code>arn:aws:qldb:us-east-1:123456789012:ledger/exampleLedger</code> </p>
		 * @param {Array<TagKey>} tagKeys The list of tag keys that you want to remove.
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<TagKey>, headersHandler?: () => {[header: string]: string}): Promise<UntagResourceResponse> {
			return this.http.delete('/tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${z}`).join('&'), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}
	}

	export interface CreateLedgerBody {

		/**
		 * The name of the ledger that you want to create. The name must be unique among all of your ledgers in the current AWS Region.
		 * Max length: 32
		 * Min length: 1
		 * Pattern: (?!^.*--)(?!^[0-9]+$)(?!^-)(?!.*-$)^[A-Za-z0-9-]+$
		 */
		Name: string;

		/**The key-value pairs to add as tags to the ledger that you want to create. Tag keys are case sensitive. Tag values are case sensitive and can be null. */
		Tags?: string;

		/**The permissions mode to assign to the ledger that you want to create. */
		PermissionsMode: CreateLedgerBodyPermissionsMode;

		/**<p>The flag that prevents a ledger from being deleted by any user. If not provided on ledger creation, this feature is enabled (<code>true</code>) by default.</p> <p>If deletion protection is enabled, you must first disable it before you can delete the ledger using the QLDB API or the AWS Command Line Interface (AWS CLI). You can disable it by calling the <code>UpdateLedger</code> operation to set the flag to <code>false</code>. The QLDB console disables deletion protection for you when you use it to delete a ledger.</p> */
		DeletionProtection?: boolean;
	}

	export enum CreateLedgerBodyPermissionsMode { ALLOW_ALL = 0 }

	export interface ExportJournalToS3Body {

		/**<p>The inclusive start date and time for the range of journal contents that you want to export.</p> <p>The <code>InclusiveStartTime</code> must be in <code>ISO 8601</code> date and time format and in Universal Coordinated Time (UTC). For example: <code>2019-06-13T21:36:34Z</code> </p> <p>The <code>InclusiveStartTime</code> must be before <code>ExclusiveEndTime</code>.</p> <p>If you provide an <code>InclusiveStartTime</code> that is before the ledger's <code>CreationDateTime</code>, Amazon QLDB defaults it to the ledger's <code>CreationDateTime</code>.</p> */
		InclusiveStartTime: Date;

		/**<p>The exclusive end date and time for the range of journal contents that you want to export.</p> <p>The <code>ExclusiveEndTime</code> must be in <code>ISO 8601</code> date and time format and in Universal Coordinated Time (UTC). For example: <code>2019-06-13T21:36:34Z</code> </p> <p>The <code>ExclusiveEndTime</code> must be less than or equal to the current UTC date and time.</p> */
		ExclusiveEndTime: Date;

		/**The Amazon Simple Storage Service (Amazon S3) bucket location in which a journal export job writes the journal contents. */
		S3ExportConfiguration: string;

		/**
		 * <p>The Amazon Resource Name (ARN) of the IAM role that grants QLDB permissions for a journal export job to do the following:</p> <ul> <li> <p>Write objects into your Amazon Simple Storage Service (Amazon S3) bucket.</p> </li> <li> <p>(Optional) Use your customer master key (CMK) in AWS Key Management Service (AWS KMS) for server-side encryption of your exported data.</p> </li> </ul>
		 * Max length: 1600
		 * Min length: 20
		 */
		RoleArn: string;
	}

	export interface GetBlockBody {

		/**A structure that can contain an Amazon Ion value in multiple encoding formats. */
		BlockAddress: string;

		/**A structure that can contain an Amazon Ion value in multiple encoding formats. */
		DigestTipAddress?: string;
	}

	export interface GetRevisionBody {

		/**A structure that can contain an Amazon Ion value in multiple encoding formats. */
		BlockAddress: string;

		/**
		 * The unique ID of the document to be verified.
		 * Max length: 22
		 * Min length: 22
		 * Pattern: ^[A-Za-z-0-9]+$
		 */
		DocumentId: string;

		/**A structure that can contain an Amazon Ion value in multiple encoding formats. */
		DigestTipAddress?: string;
	}

	export interface StreamJournalToKinesisBody {

		/**
		 * The Amazon Resource Name (ARN) of the IAM role that grants QLDB permissions for a journal stream to write data records to a Kinesis Data Streams resource.
		 * Max length: 1600
		 * Min length: 20
		 */
		RoleArn: string;

		/**The key-value pairs to add as tags to the stream that you want to create. Tag keys are case sensitive. Tag values are case sensitive and can be null. */
		Tags?: string;

		/**<p>The inclusive start date and time from which to start streaming journal data. This parameter must be in <code>ISO 8601</code> date and time format and in Universal Coordinated Time (UTC). For example: <code>2019-06-13T21:36:34Z</code> </p> <p>The <code>InclusiveStartTime</code> cannot be in the future and must be before <code>ExclusiveEndTime</code>.</p> <p>If you provide an <code>InclusiveStartTime</code> that is before the ledger's <code>CreationDateTime</code>, QLDB effectively defaults it to the ledger's <code>CreationDateTime</code>.</p> */
		InclusiveStartTime: Date;

		/**<p>The exclusive date and time that specifies when the stream ends. If you keep this parameter blank, the stream runs indefinitely until you cancel it.</p> <p>The <code>ExclusiveEndTime</code> must be in <code>ISO 8601</code> date and time format and in Universal Coordinated Time (UTC). For example: <code>2019-06-13T21:36:34Z</code> </p> */
		ExclusiveEndTime?: Date;

		/**The configuration settings of the Amazon Kinesis Data Streams destination for your Amazon QLDB journal stream. */
		KinesisConfiguration: string;

		/**
		 * <p>The name that you want to assign to the QLDB journal stream. User-defined names can help identify and indicate the purpose of a stream.</p> <p>Your stream name must be unique among other <i>active</i> streams for a given ledger. If you try to create a stream with the same name and configuration of an active, existing stream for the same ledger, QLDB simply returns the existing stream. Stream names have the same naming constraints as ledger names, as defined in <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/limits.html#limits.naming">Quotas in Amazon QLDB</a> in the <i>Amazon QLDB Developer Guide</i>.</p>
		 * Max length: 32
		 * Min length: 1
		 * Pattern: (?!^.*--)(?!^[0-9]+$)(?!^-)(?!.*-$)^[A-Za-z0-9-]+$
		 */
		StreamName: string;
	}

	export interface TagResourceBody {

		/**The key-value pairs to add as tags to the specified QLDB resource. Tag keys are case sensitive. If you specify a key that already exists for the resource, your request fails and returns an error. Tag values are case sensitive and can be null. */
		Tags: string;
	}

}

