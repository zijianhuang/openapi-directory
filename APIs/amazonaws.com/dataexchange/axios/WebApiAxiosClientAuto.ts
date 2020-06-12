import Axios from 'axios';
import { AxiosResponse } from 'axios';
export namespace My_Demo_Client {
	export interface CreateDataSetResponse {

		/**An Amazon Resource Name (ARN) that uniquely identifies an AWS resource. */
		Arn?: string;

		/**The type of file your data is stored in. Currently, the supported asset type is S3_SNAPSHOT. */
		AssetType?: CreateDataSetResponseAssetType;

		/**Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		CreatedAt?: Date;

		/**A description of a resource. */
		Description?: string;

		/**A unique identifier. */
		Id?: string;

		/**The name of the model. */
		Name?: string;

		/**A property that defines the data set as OWNED by the account (for providers) or ENTITLED to the account (for subscribers). When an owned data set is published in a product, AWS Data Exchange creates a copy of the data set. Subscribers can access that copy of the data set as an entitled data set. */
		Origin?: CreateDataSetResponseOrigin;
		OriginDetails?: OriginDetails;

		/**A unique identifier. */
		SourceId?: string;
		Tags?: MapOf__string;

		/**Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		UpdatedAt?: Date;
	}

	export enum CreateDataSetResponseAssetType { S3_SNAPSHOT = 0 }

	export enum CreateDataSetResponseOrigin { OWNED = 0, ENTITLED = 1 }

	export interface CreateJobResponse {

		/**An Amazon Resource Name (ARN) that uniquely identifies an AWS resource. */
		Arn?: string;

		/**Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		CreatedAt?: Date;

		/**Details for the response. */
		Details?: ResponseDetails;
		Errors?: Array<JobError>;

		/**A unique identifier. */
		Id?: string;
		State?: CreateJobResponseState;
		Type?: CreateJobResponseType;

		/**Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		UpdatedAt?: Date;
	}

	export enum CreateJobResponseState { WAITING = 0, IN_PROGRESS = 1, ERROR = 2, COMPLETED = 3, CANCELLED = 4, TIMED_OUT = 5 }

	export enum CreateJobResponseType { IMPORT_ASSETS_FROM_S3 = 0, IMPORT_ASSET_FROM_SIGNED_URL = 1, EXPORT_ASSETS_TO_S3 = 2, EXPORT_ASSET_TO_SIGNED_URL = 3 }


	/**Details of the operation to be performed by the job. */
	export interface ExportAssetToSignedUrlRequestDetails {

		/**A unique identifier. */
		AssetId: string;

		/**A unique identifier. */
		DataSetId: string;

		/**A unique identifier. */
		RevisionId: string;
	}


	/**Details of the operation to be performed by the job. */
	export interface ExportAssetsToS3RequestDetails {

		/**The destination where the assets will be exported. */
		AssetDestinations: Array<AssetDestinationEntry>;

		/**A unique identifier. */
		DataSetId: string;

		/**Encryption configuration of the export job. Includes the encryption type as well as the AWS KMS key. The KMS key is only necessary if you chose the KMS encryption type. */
		Encryption?: ExportServerSideEncryption;

		/**A unique identifier. */
		RevisionId: string;
	}


	/**Details of the operation to be performed by the job. */
	export interface ImportAssetFromSignedUrlRequestDetails {

		/**The name of the asset. When importing from Amazon S3, the S3 object key is used as the asset name. When exporting to Amazon S3, the asset name is used as default target S3 object key. */
		AssetName: string;

		/**A unique identifier. */
		DataSetId: string;
		Md5Hash: string;

		/**A unique identifier. */
		RevisionId: string;
	}


	/**Details of the operation to be performed by the job. */
	export interface ImportAssetsFromS3RequestDetails {

		/**The list of sources for the assets. */
		AssetSources: Array<AssetSourceEntry>;

		/**A unique identifier. */
		DataSetId: string;

		/**A unique identifier. */
		RevisionId: string;
	}

	export interface CreateRevisionResponse {

		/**An Amazon Resource Name (ARN) that uniquely identifies an AWS resource. */
		Arn?: string;
		Comment?: string;

		/**Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		CreatedAt?: Date;

		/**A unique identifier. */
		DataSetId?: string;
		Finalized?: boolean;

		/**A unique identifier. */
		Id?: string;

		/**A unique identifier. */
		SourceId?: string;
		Tags?: MapOf__string;

		/**Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		UpdatedAt?: Date;
	}

	export interface GetAssetResponse {

		/**An Amazon Resource Name (ARN) that uniquely identifies an AWS resource. */
		Arn?: string;
		AssetDetails?: AssetDetails;

		/**The type of file your data is stored in. Currently, the supported asset type is S3_SNAPSHOT. */
		AssetType?: GetAssetResponseAssetType;

		/**Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		CreatedAt?: Date;

		/**A unique identifier. */
		DataSetId?: string;

		/**A unique identifier. */
		Id?: string;

		/**The name of the asset. When importing from Amazon S3, the S3 object key is used as the asset name. When exporting to Amazon S3, the asset name is used as default target S3 object key. */
		Name?: string;

		/**A unique identifier. */
		RevisionId?: string;

		/**A unique identifier. */
		SourceId?: string;

		/**Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		UpdatedAt?: Date;
	}

	export enum GetAssetResponseAssetType { S3_SNAPSHOT = 0 }

	export interface GetDataSetResponse {

		/**An Amazon Resource Name (ARN) that uniquely identifies an AWS resource. */
		Arn?: string;

		/**The type of file your data is stored in. Currently, the supported asset type is S3_SNAPSHOT. */
		AssetType?: GetDataSetResponseAssetType;

		/**Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		CreatedAt?: Date;

		/**A description of a resource. */
		Description?: string;

		/**A unique identifier. */
		Id?: string;

		/**The name of the model. */
		Name?: string;

		/**A property that defines the data set as OWNED by the account (for providers) or ENTITLED to the account (for subscribers). When an owned data set is published in a product, AWS Data Exchange creates a copy of the data set. Subscribers can access that copy of the data set as an entitled data set. */
		Origin?: GetDataSetResponseOrigin;
		OriginDetails?: OriginDetails;

		/**A unique identifier. */
		SourceId?: string;
		Tags?: MapOf__string;

		/**Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		UpdatedAt?: Date;
	}

	export enum GetDataSetResponseAssetType { S3_SNAPSHOT = 0 }

	export enum GetDataSetResponseOrigin { OWNED = 0, ENTITLED = 1 }

	export interface GetJobResponse {

		/**An Amazon Resource Name (ARN) that uniquely identifies an AWS resource. */
		Arn?: string;

		/**Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		CreatedAt?: Date;

		/**Details for the response. */
		Details?: ResponseDetails;
		Errors?: Array<JobError>;

		/**A unique identifier. */
		Id?: string;
		State?: GetJobResponseState;
		Type?: GetJobResponseType;

		/**Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		UpdatedAt?: Date;
	}

	export enum GetJobResponseState { WAITING = 0, IN_PROGRESS = 1, ERROR = 2, COMPLETED = 3, CANCELLED = 4, TIMED_OUT = 5 }

	export enum GetJobResponseType { IMPORT_ASSETS_FROM_S3 = 0, IMPORT_ASSET_FROM_SIGNED_URL = 1, EXPORT_ASSETS_TO_S3 = 2, EXPORT_ASSET_TO_SIGNED_URL = 3 }

	export interface GetRevisionResponse {

		/**An Amazon Resource Name (ARN) that uniquely identifies an AWS resource. */
		Arn?: string;
		Comment?: string;

		/**Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		CreatedAt?: Date;

		/**A unique identifier. */
		DataSetId?: string;
		Finalized?: boolean;

		/**A unique identifier. */
		Id?: string;

		/**A unique identifier. */
		SourceId?: string;
		Tags?: MapOf__string;

		/**Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		UpdatedAt?: Date;
	}

	export interface ListDataSetRevisionsResponse {

		/**The token value retrieved from a previous call to access the next page of results. */
		NextToken?: string;
		Revisions?: Array<RevisionEntry>;
	}

	export interface ListDataSetsResponse {
		DataSets?: Array<DataSetEntry>;

		/**The token value retrieved from a previous call to access the next page of results. */
		NextToken?: string;
	}

	export interface ListJobsResponse {
		Jobs?: Array<JobEntry>;

		/**The token value retrieved from a previous call to access the next page of results. */
		NextToken?: string;
	}

	export interface ListRevisionAssetsResponse {
		Assets?: Array<AssetEntry>;

		/**The token value retrieved from a previous call to access the next page of results. */
		NextToken?: string;
	}

	export interface ListTagsForResourceResponse {
		Tags?: MapOf__string;
	}

	export interface UpdateAssetResponse {

		/**An Amazon Resource Name (ARN) that uniquely identifies an AWS resource. */
		Arn?: string;
		AssetDetails?: AssetDetails;

		/**The type of file your data is stored in. Currently, the supported asset type is S3_SNAPSHOT. */
		AssetType?: UpdateAssetResponseAssetType;

		/**Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		CreatedAt?: Date;

		/**A unique identifier. */
		DataSetId?: string;

		/**A unique identifier. */
		Id?: string;

		/**The name of the asset. When importing from Amazon S3, the S3 object key is used as the asset name. When exporting to Amazon S3, the asset name is used as default target S3 object key. */
		Name?: string;

		/**A unique identifier. */
		RevisionId?: string;

		/**A unique identifier. */
		SourceId?: string;

		/**Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		UpdatedAt?: Date;
	}

	export enum UpdateAssetResponseAssetType { S3_SNAPSHOT = 0 }

	export interface UpdateDataSetResponse {

		/**An Amazon Resource Name (ARN) that uniquely identifies an AWS resource. */
		Arn?: string;

		/**The type of file your data is stored in. Currently, the supported asset type is S3_SNAPSHOT. */
		AssetType?: UpdateDataSetResponseAssetType;

		/**Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		CreatedAt?: Date;

		/**A description of a resource. */
		Description?: string;

		/**A unique identifier. */
		Id?: string;

		/**The name of the model. */
		Name?: string;

		/**A property that defines the data set as OWNED by the account (for providers) or ENTITLED to the account (for subscribers). When an owned data set is published in a product, AWS Data Exchange creates a copy of the data set. Subscribers can access that copy of the data set as an entitled data set. */
		Origin?: UpdateDataSetResponseOrigin;
		OriginDetails?: OriginDetails;

		/**A unique identifier. */
		SourceId?: string;

		/**Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		UpdatedAt?: Date;
	}

	export enum UpdateDataSetResponseAssetType { S3_SNAPSHOT = 0 }

	export enum UpdateDataSetResponseOrigin { OWNED = 0, ENTITLED = 1 }

	export interface UpdateRevisionResponse {

		/**An Amazon Resource Name (ARN) that uniquely identifies an AWS resource. */
		Arn?: string;
		Comment?: string;

		/**Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		CreatedAt?: Date;

		/**A unique identifier. */
		DataSetId?: string;
		Finalized?: boolean;

		/**A unique identifier. */
		Id?: string;

		/**A unique identifier. */
		SourceId?: string;

		/**Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		UpdatedAt?: Date;
	}


	/**The destination for the asset. */
	export interface AssetDestinationEntry {

		/**A unique identifier. */
		AssetId: string;
		Bucket: string;
		Key?: string;
	}


	/**The S3 object that is the asset. */
	export interface S3SnapshotAsset {
		Size: number;
	}

	export interface AssetDetails {

		/**The S3 object that is the asset. */
		S3SnapshotAsset?: S3SnapshotAsset;
	}


	/**The type of file your data is stored in. Currently, the supported asset type is S3_SNAPSHOT. */
	export enum AssetType { S3_SNAPSHOT = 0 }


	/**An asset in AWS Data Exchange is a piece of data that can be stored as an S3 object. The asset can be a structured data file, an image file, or some other data file. When you create an import job for your files, you create an asset in AWS Data Exchange for each of those files. */
	export interface AssetEntry {

		/**An Amazon Resource Name (ARN) that uniquely identifies an AWS resource. */
		Arn: string;
		AssetDetails: AssetDetails;

		/**The type of file your data is stored in. Currently, the supported asset type is S3_SNAPSHOT. */
		AssetType: AssetEntryAssetType;

		/**Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		CreatedAt: Date;

		/**A unique identifier. */
		DataSetId: string;

		/**A unique identifier. */
		Id: string;

		/**The name of the asset. When importing from Amazon S3, the S3 object key is used as the asset name. When exporting to Amazon S3, the asset name is used as default target S3 object key. */
		Name: string;

		/**A unique identifier. */
		RevisionId: string;

		/**A unique identifier. */
		SourceId?: string;

		/**Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		UpdatedAt: Date;
	}

	export enum AssetEntryAssetType { S3_SNAPSHOT = 0 }


	/**The source of the assets. */
	export interface AssetSourceEntry {
		Bucket: string;
		Key: string;
	}

	export enum Code { ACCESS_DENIED_EXCEPTION = 0, INTERNAL_SERVER_EXCEPTION = 1, MALWARE_DETECTED = 2, RESOURCE_NOT_FOUND_EXCEPTION = 3, SERVICE_QUOTA_EXCEEDED_EXCEPTION = 4, VALIDATION_EXCEPTION = 5, MALWARE_SCAN_ENCRYPTED_FILE = 6 }


	/**The request body for CreateDataSet. */
	export interface CreateDataSetRequest {

		/**The type of file your data is stored in. Currently, the supported asset type is S3_SNAPSHOT. */
		AssetType: CreateDataSetRequestAssetType;

		/**A description of a resource. */
		Description: string;

		/**The name of the model. */
		Name: string;
		Tags?: MapOf__string;
	}

	export enum CreateDataSetRequestAssetType { S3_SNAPSHOT = 0 }


	/**A property that defines the data set as OWNED by the account (for providers) or ENTITLED to the account (for subscribers). When an owned data set is published in a product, AWS Data Exchange creates a copy of the data set. Subscribers can access that copy of the data set as an entitled data set. */
	export enum Origin { OWNED = 0, ENTITLED = 1 }

	export interface OriginDetails {
		ProductId: string;
	}


	/**The details for the request. */
	export interface RequestDetails {

		/**Details of the operation to be performed by the job. */
		ExportAssetToSignedUrl?: ExportAssetToSignedUrlRequestDetails;

		/**Details of the operation to be performed by the job. */
		ExportAssetsToS3?: ExportAssetsToS3RequestDetails;

		/**Details of the operation to be performed by the job. */
		ImportAssetFromSignedUrl?: ImportAssetFromSignedUrlRequestDetails;

		/**Details of the operation to be performed by the job. */
		ImportAssetsFromS3?: ImportAssetsFromS3RequestDetails;
	}

	export enum Type { IMPORT_ASSETS_FROM_S3 = 0, IMPORT_ASSET_FROM_SIGNED_URL = 1, EXPORT_ASSETS_TO_S3 = 2, EXPORT_ASSET_TO_SIGNED_URL = 3 }


	/**The request body for CreateJob. */
	export interface CreateJobRequest {

		/**The details for the request. */
		Details: RequestDetails;
		Type: CreateJobRequestType;
	}

	export enum CreateJobRequestType { IMPORT_ASSETS_FROM_S3 = 0, IMPORT_ASSET_FROM_SIGNED_URL = 1, EXPORT_ASSETS_TO_S3 = 2, EXPORT_ASSET_TO_SIGNED_URL = 3 }


	/**Details for the response. */
	export interface ResponseDetails {

		/**The details of the export to signed URL response. */
		ExportAssetToSignedUrl?: ExportAssetToSignedUrlResponseDetails;

		/**Details about the export to Amazon S3 response. */
		ExportAssetsToS3?: ExportAssetsToS3ResponseDetails;

		/**The details in the response for an import request, including the signed URL and other information. */
		ImportAssetFromSignedUrl?: ImportAssetFromSignedUrlResponseDetails;

		/**Details from an import from Amazon S3 response. */
		ImportAssetsFromS3?: ImportAssetsFromS3ResponseDetails;
	}

	export enum State { WAITING = 0, IN_PROGRESS = 1, ERROR = 2, COMPLETED = 3, CANCELLED = 4, TIMED_OUT = 5 }


	/**The request body for CreateRevision. */
	export interface CreateRevisionRequest {
		Comment?: string;
		Tags?: MapOf__string;
	}


	/**A data set is an AWS resource with one or more revisions. */
	export interface DataSetEntry {

		/**An Amazon Resource Name (ARN) that uniquely identifies an AWS resource. */
		Arn: string;

		/**The type of file your data is stored in. Currently, the supported asset type is S3_SNAPSHOT. */
		AssetType: DataSetEntryAssetType;

		/**Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		CreatedAt: Date;

		/**A description of a resource. */
		Description: string;

		/**A unique identifier. */
		Id: string;

		/**The name of the model. */
		Name: string;

		/**A property that defines the data set as OWNED by the account (for providers) or ENTITLED to the account (for subscribers). When an owned data set is published in a product, AWS Data Exchange creates a copy of the data set. Subscribers can access that copy of the data set as an entitled data set. */
		Origin: DataSetEntryOrigin;
		OriginDetails?: OriginDetails;

		/**A unique identifier. */
		SourceId?: string;

		/**Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		UpdatedAt: Date;
	}

	export enum DataSetEntryAssetType { S3_SNAPSHOT = 0 }

	export enum DataSetEntryOrigin { OWNED = 0, ENTITLED = 1 }

	export interface ImportAssetFromSignedUrlJobErrorDetails {

		/**The name of the asset. When importing from Amazon S3, the S3 object key is used as the asset name. When exporting to Amazon S3, the asset name is used as default target S3 object key. */
		AssetName: string;
	}

	export interface Details {
		ImportAssetFromSignedUrlJobErrorDetails?: ImportAssetFromSignedUrlJobErrorDetails;

		/**The list of sources for the assets. */
		ImportAssetsFromS3JobErrorDetails?: Array<AssetSourceEntry>;
	}


	/**The details of the export to signed URL response. */
	export interface ExportAssetToSignedUrlResponseDetails {

		/**A unique identifier. */
		AssetId: string;

		/**A unique identifier. */
		DataSetId: string;

		/**A unique identifier. */
		RevisionId: string;
		SignedUrl?: string;

		/**Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		SignedUrlExpiresAt?: Date;
	}


	/**Encryption configuration of the export job. Includes the encryption type as well as the AWS KMS key. The KMS key is only necessary if you chose the KMS encryption type. */
	export interface ExportServerSideEncryption {
		KmsKeyArn: string;

		/**The types of encryption supported in export jobs to Amazon S3. */
		Type: ExportServerSideEncryptionType;
	}

	export enum ExportServerSideEncryptionType { aws:kms = 0, AES256 = 1 }


	/**Details about the export to Amazon S3 response. */
	export interface ExportAssetsToS3ResponseDetails {

		/**The destination where the assets will be exported. */
		AssetDestinations: Array<AssetDestinationEntry>;

		/**A unique identifier. */
		DataSetId: string;

		/**Encryption configuration of the export job. Includes the encryption type as well as the AWS KMS key. The KMS key is only necessary if you chose the KMS encryption type. */
		Encryption?: ExportServerSideEncryption;

		/**A unique identifier. */
		RevisionId: string;
	}


	/**The types of encryption supported in export jobs to Amazon S3. */
	export enum ServerSideEncryptionTypes { aws:kms = 0, AES256 = 1 }


	/**The details in the response for an import request, including the signed URL and other information. */
	export interface ImportAssetFromSignedUrlResponseDetails {

		/**The name of the asset. When importing from Amazon S3, the S3 object key is used as the asset name. When exporting to Amazon S3, the asset name is used as default target S3 object key. */
		AssetName: string;

		/**A unique identifier. */
		DataSetId: string;
		Md5Hash?: string;

		/**A unique identifier. */
		RevisionId: string;
		SignedUrl?: string;

		/**Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		SignedUrlExpiresAt?: Date;
	}


	/**Details from an import from Amazon S3 response. */
	export interface ImportAssetsFromS3ResponseDetails {

		/**The list of sources for the assets. */
		AssetSources: Array<AssetSourceEntry>;

		/**A unique identifier. */
		DataSetId: string;

		/**A unique identifier. */
		RevisionId: string;
	}


	/**AWS Data Exchange Jobs are asynchronous import or export operations used to create or copy assets. A data set owner can both import and export as they see fit. Someone with an entitlement to a data set can only export. Jobs are deleted 90 days after they are created. */
	export interface JobEntry {

		/**An Amazon Resource Name (ARN) that uniquely identifies an AWS resource. */
		Arn: string;

		/**Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		CreatedAt: Date;

		/**Details for the response. */
		Details: ResponseDetails;
		Errors?: Array<JobError>;

		/**A unique identifier. */
		Id: string;
		State: JobEntryState;
		Type: JobEntryType;

		/**Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		UpdatedAt: Date;
	}

	export enum JobEntryState { WAITING = 0, IN_PROGRESS = 1, ERROR = 2, COMPLETED = 3, CANCELLED = 4, TIMED_OUT = 5 }

	export enum JobEntryType { IMPORT_ASSETS_FROM_S3 = 0, IMPORT_ASSET_FROM_SIGNED_URL = 1, EXPORT_ASSETS_TO_S3 = 2, EXPORT_ASSET_TO_SIGNED_URL = 3 }


	/**The name of the limit that was reached. */
	export enum JobErrorLimitName { Assets per revision = 0, Asset size in GB = 1 }


	/**The types of resource which the job error can apply to. */
	export enum JobErrorResourceTypes { REVISION = 0, ASSET = 1 }


	/**An error that occurred with the job request. */
	export interface JobError {
		Code: JobErrorCode;
		Details?: Details;

		/**The name of the limit that was reached. */
		LimitName?: JobErrorLimitName;
		LimitValue?: number;
		Message: string;
		ResourceId?: string;

		/**The types of resource which the job error can apply to. */
		ResourceType?: JobErrorResourceType;
	}

	export enum JobErrorCode { ACCESS_DENIED_EXCEPTION = 0, INTERNAL_SERVER_EXCEPTION = 1, MALWARE_DETECTED = 2, RESOURCE_NOT_FOUND_EXCEPTION = 3, SERVICE_QUOTA_EXCEEDED_EXCEPTION = 4, VALIDATION_EXCEPTION = 5, MALWARE_SCAN_ENCRYPTED_FILE = 6 }

	export enum JobErrorLimitName { Assets per revision = 0, Asset size in GB = 1 }

	export enum JobErrorResourceType { REVISION = 0, ASSET = 1 }


	/**A revision is a container for one or more assets. */
	export interface RevisionEntry {

		/**An Amazon Resource Name (ARN) that uniquely identifies an AWS resource. */
		Arn: string;
		Comment?: string;

		/**Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		CreatedAt: Date;

		/**A unique identifier. */
		DataSetId: string;
		Finalized?: boolean;

		/**A unique identifier. */
		Id: string;

		/**A unique identifier. */
		SourceId?: string;

		/**Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		UpdatedAt: Date;
	}


	/**The request body for TagResource. */
	export interface TagResourceRequest {
		Tags: MapOf__string;
	}


	/**The request body for UpdateAsset. */
	export interface UpdateAssetRequest {

		/**The name of the asset. When importing from Amazon S3, the S3 object key is used as the asset name. When exporting to Amazon S3, the asset name is used as default target S3 object key. */
		Name: string;
	}


	/**The request body for UpdateDataSet. */
	export interface UpdateDataSetRequest {

		/**A description of a resource. */
		Description?: string;

		/**The name of the model. */
		Name?: string;
	}


	/**The request body for UpdateRevision. */
	export interface UpdateRevisionRequest {
		Comment?: string;
		Finalized?: boolean;
	}

	export class DemoClient {
		constructor(private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/') {
		}

		/**
		 * This operation cancels a job. Jobs can be cancelled only when they are in the WAITING state.
		 * Delete /v1/jobs/{JobId}
		 * @param {string} JobId The unique identifier for a job.
		 * @return {void} 
		 */
		CancelJob(JobId: string, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.delete(this.baseUri + '/v1/jobs/' + (JobId == null ? '' : encodeURIComponent(JobId)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * This operation returns information about a job.
		 * Get /v1/jobs/{JobId}
		 * @param {string} JobId The unique identifier for a job.
		 * @return {GetJobResponse} Success
		 */
		GetJob(JobId: string, headersHandler?: () => {[header: string]: string}): Promise<GetJobResponse> {
			return Axios.get<GetJobResponse>(this.baseUri + '/v1/jobs/' + (JobId == null ? '' : encodeURIComponent(JobId)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * This operation creates a data set.
		 * Post /v1/data-sets
		 * @return {void} 
		 */
		CreateDataSet(requestBody: CreateDataSetBody, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.post(this.baseUri + '/v1/data-sets', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * This operation lists your data sets. When listing by origin OWNED, results are sorted by CreatedAt in descending order. When listing by origin ENTITLED, there is no order and the maxResults parameter is ignored.
		 * Get /v1/data-sets
		 * @param {number} maxResults The maximum number of results returned by a single call.
		 * @param {string} nextToken The token value retrieved from a previous call to access the next page of results.
		 * @param {string} origin A property that defines the data set as OWNED by the account (for providers) or ENTITLED to the account (for subscribers).
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDataSetsResponse} Success
		 */
		ListDataSets(maxResults: number, nextToken: string, origin: string, MaxResults: string, NextToken: string, headersHandler?: () => {[header: string]: string}): Promise<ListDataSetsResponse> {
			return Axios.get<ListDataSetsResponse>(this.baseUri + '/v1/data-sets?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&origin=' + (origin == null ? '' : encodeURIComponent(origin)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * This operation creates a job.
		 * Post /v1/jobs
		 * @return {void} 
		 */
		CreateJob(requestBody: CreateJobBody, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.post(this.baseUri + '/v1/jobs', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * This operation lists your jobs sorted by CreatedAt in descending order.
		 * Get /v1/jobs
		 * @param {string} dataSetId The unique identifier for a data set.
		 * @param {number} maxResults The maximum number of results returned by a single call.
		 * @param {string} nextToken The token value retrieved from a previous call to access the next page of results.
		 * @param {string} revisionId The unique identifier for a revision.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListJobsResponse} Success
		 */
		ListJobs(dataSetId: string, maxResults: number, nextToken: string, revisionId: string, MaxResults: string, NextToken: string, headersHandler?: () => {[header: string]: string}): Promise<ListJobsResponse> {
			return Axios.get<ListJobsResponse>(this.baseUri + '/v1/jobs?dataSetId=' + (dataSetId == null ? '' : encodeURIComponent(dataSetId)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&revisionId=' + (revisionId == null ? '' : encodeURIComponent(revisionId)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * This operation creates a revision for a data set.
		 * Post /v1/data-sets/{DataSetId}/revisions
		 * @param {string} DataSetId The unique identifier for a data set.
		 * @return {void} 
		 */
		CreateRevision(DataSetId: string, requestBody: CreateRevisionBody, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.post(this.baseUri + '/v1/data-sets/' + (DataSetId == null ? '' : encodeURIComponent(DataSetId)) + '/revisions', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * This operation lists a data set's revisions sorted by CreatedAt in descending order.
		 * Get /v1/data-sets/{DataSetId}/revisions
		 * @param {string} DataSetId The unique identifier for a data set.
		 * @param {number} maxResults The maximum number of results returned by a single call.
		 * @param {string} nextToken The token value retrieved from a previous call to access the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDataSetRevisionsResponse} Success
		 */
		ListDataSetRevisions(DataSetId: string, maxResults: number, nextToken: string, MaxResults: string, NextToken: string, headersHandler?: () => {[header: string]: string}): Promise<ListDataSetRevisionsResponse> {
			return Axios.get<ListDataSetRevisionsResponse>(this.baseUri + '/v1/data-sets/' + (DataSetId == null ? '' : encodeURIComponent(DataSetId)) + '/revisions&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * This operation deletes an asset.
		 * Delete /v1/data-sets/{DataSetId}/revisions/{RevisionId}/assets/{AssetId}
		 * @param {string} AssetId The unique identifier for an asset.
		 * @param {string} DataSetId The unique identifier for a data set.
		 * @param {string} RevisionId The unique identifier for a revision.
		 * @return {void} 
		 */
		DeleteAsset(AssetId: string, DataSetId: string, RevisionId: string, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.delete(this.baseUri + '/v1/data-sets/' + (DataSetId == null ? '' : encodeURIComponent(DataSetId)) + '/revisions/' + (RevisionId == null ? '' : encodeURIComponent(RevisionId)) + '/assets/' + (AssetId == null ? '' : encodeURIComponent(AssetId)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * This operation returns information about an asset.
		 * Get /v1/data-sets/{DataSetId}/revisions/{RevisionId}/assets/{AssetId}
		 * @param {string} AssetId The unique identifier for an asset.
		 * @param {string} DataSetId The unique identifier for a data set.
		 * @param {string} RevisionId The unique identifier for a revision.
		 * @return {GetAssetResponse} Success
		 */
		GetAsset(AssetId: string, DataSetId: string, RevisionId: string, headersHandler?: () => {[header: string]: string}): Promise<GetAssetResponse> {
			return Axios.get<GetAssetResponse>(this.baseUri + '/v1/data-sets/' + (DataSetId == null ? '' : encodeURIComponent(DataSetId)) + '/revisions/' + (RevisionId == null ? '' : encodeURIComponent(RevisionId)) + '/assets/' + (AssetId == null ? '' : encodeURIComponent(AssetId)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * This operation deletes a data set.
		 * Delete /v1/data-sets/{DataSetId}
		 * @param {string} DataSetId The unique identifier for a data set.
		 * @return {void} 
		 */
		DeleteDataSet(DataSetId: string, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.delete(this.baseUri + '/v1/data-sets/' + (DataSetId == null ? '' : encodeURIComponent(DataSetId)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * This operation returns information about a data set.
		 * Get /v1/data-sets/{DataSetId}
		 * @param {string} DataSetId The unique identifier for a data set.
		 * @return {GetDataSetResponse} Success
		 */
		GetDataSet(DataSetId: string, headersHandler?: () => {[header: string]: string}): Promise<GetDataSetResponse> {
			return Axios.get<GetDataSetResponse>(this.baseUri + '/v1/data-sets/' + (DataSetId == null ? '' : encodeURIComponent(DataSetId)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * This operation deletes a revision.
		 * Delete /v1/data-sets/{DataSetId}/revisions/{RevisionId}
		 * @param {string} DataSetId The unique identifier for a data set.
		 * @param {string} RevisionId The unique identifier for a revision.
		 * @return {void} 
		 */
		DeleteRevision(DataSetId: string, RevisionId: string, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.delete(this.baseUri + '/v1/data-sets/' + (DataSetId == null ? '' : encodeURIComponent(DataSetId)) + '/revisions/' + (RevisionId == null ? '' : encodeURIComponent(RevisionId)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * This operation returns information about a revision.
		 * Get /v1/data-sets/{DataSetId}/revisions/{RevisionId}
		 * @param {string} DataSetId The unique identifier for a data set.
		 * @param {string} RevisionId The unique identifier for a revision.
		 * @return {GetRevisionResponse} Success
		 */
		GetRevision(DataSetId: string, RevisionId: string, headersHandler?: () => {[header: string]: string}): Promise<GetRevisionResponse> {
			return Axios.get<GetRevisionResponse>(this.baseUri + '/v1/data-sets/' + (DataSetId == null ? '' : encodeURIComponent(DataSetId)) + '/revisions/' + (RevisionId == null ? '' : encodeURIComponent(RevisionId)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * This operation lists a revision's assets sorted alphabetically in descending order.
		 * Get /v1/data-sets/{DataSetId}/revisions/{RevisionId}/assets
		 * @param {string} DataSetId The unique identifier for a data set.
		 * @param {number} maxResults The maximum number of results returned by a single call.
		 * @param {string} nextToken The token value retrieved from a previous call to access the next page of results.
		 * @param {string} RevisionId The unique identifier for a revision.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListRevisionAssetsResponse} Success
		 */
		ListRevisionAssets(DataSetId: string, maxResults: number, nextToken: string, RevisionId: string, MaxResults: string, NextToken: string, headersHandler?: () => {[header: string]: string}): Promise<ListRevisionAssetsResponse> {
			return Axios.get<ListRevisionAssetsResponse>(this.baseUri + '/v1/data-sets/' + (DataSetId == null ? '' : encodeURIComponent(DataSetId)) + '/revisions/' + (RevisionId == null ? '' : encodeURIComponent(RevisionId)) + '/assets&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * This operation lists the tags on the resource.
		 * Get /tags/{resource_arn}
		 * @param {string} resource_arn An Amazon Resource Name (ARN) that uniquely identifies an AWS resource.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resource_arn: string, headersHandler?: () => {[header: string]: string}): Promise<ListTagsForResourceResponse> {
			return Axios.get<ListTagsForResourceResponse>(this.baseUri + '/tags/' + (resource_arn == null ? '' : encodeURIComponent(resource_arn)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * This operation tags a resource.
		 * Post /tags/{resource_arn}
		 * @param {string} resource_arn An Amazon Resource Name (ARN) that uniquely identifies an AWS resource.
		 * @return {void} 
		 */
		TagResource(resource_arn: string, requestBody: TagResourceBody, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.post(this.baseUri + '/tags/' + (resource_arn == null ? '' : encodeURIComponent(resource_arn)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * This operation removes one or more tags from a resource.
		 * Delete /tags/{resource_arn}#tagKeys
		 * @param {string} resource_arn An Amazon Resource Name (ARN) that uniquely identifies an AWS resource.
		 * @param {Array<__string>} tagKeys The key tags.
		 * @return {void} 
		 */
		UntagResource(resource_arn: string, tagKeys: Array<__string>, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.delete(this.baseUri + '/tags/' + (resource_arn == null ? '' : encodeURIComponent(resource_arn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${z}`).join('&'), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}
	}

	export interface CreateDataSetBody {

		/**The type of file your data is stored in. Currently, the supported asset type is S3_SNAPSHOT. */
		AssetType: CreateDataSetBodyAssetType;

		/**A description of a resource. */
		Description: string;

		/**The name of the model. */
		Name: string;

		/**A data set tag is an optional label that you can assign to a data set when you create it. Each tag consists of a key and an optional value, both of which you define. When you use tagging, you can also use tag-based access control in IAM policies to control access to these data sets and revisions. */
		Tags?: string;
	}

	export enum CreateDataSetBodyAssetType { S3_SNAPSHOT = 0 }

	export interface CreateJobBody {

		/**The details for the request. */
		Details: string;

		/**The type of job to be created. */
		Type: CreateJobBodyType;
	}

	export enum CreateJobBodyType { IMPORT_ASSETS_FROM_S3 = 0, IMPORT_ASSET_FROM_SIGNED_URL = 1, EXPORT_ASSETS_TO_S3 = 2, EXPORT_ASSET_TO_SIGNED_URL = 3 }

	export interface CreateRevisionBody {

		/**
		 * An optional comment about the revision.
		 * Max length: 16384
		 * Min length: 0
		 */
		Comment?: string;

		/**A revision tag is an optional label that you can assign to a revision when you create it. Each tag consists of a key and an optional value, both of which you define. When you use tagging, you can also use tag-based access control in IAM policies to control access to these data sets and revisions. */
		Tags?: string;
	}

	export interface TagResourceBody {

		/**A label that consists of a customer-defined key and an optional value. */
		tags: string;
	}

}

