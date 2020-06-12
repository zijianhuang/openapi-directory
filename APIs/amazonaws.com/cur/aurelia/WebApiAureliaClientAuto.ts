import {HttpClient} from 'aurelia-fetch-client';
import {autoinject} from 'aurelia-framework';
export namespace My_Demo_Client {

	/**If the action is successful, the service sends back an HTTP 200 response. */
	export interface DeleteReportDefinitionResponse {

		/**Whether the deletion was successful or not. */
		ResponseMessage?: string;
	}


	/**Deletes the specified report. */
	export interface DeleteReportDefinitionRequest {

		/**
		 * The name of the report that you want to create. The name must be unique, is case sensitive, and can't include spaces.
		 * Max length: 256
		 * Pattern: [0-9A-Za-z!\-_.*\'()]+
		 */
		ReportName?: string;
	}


	/**If the action is successful, the service sends back an HTTP 200 response. */
	export interface DescribeReportDefinitionsResponse {

		/**A list of report definitions. */
		ReportDefinitions?: Array<ReportDefinition>;

		/**A generic string. */
		NextToken?: string;
	}


	/**Requests a list of AWS Cost and Usage reports owned by the account. */
	export interface DescribeReportDefinitionsRequest {

		/**
		 * The maximum number of results that AWS returns for the operation.
		 * Minimum: 5
		 * Maximum: 5
		 */
		MaxResults?: number;

		/**A generic string. */
		NextToken?: string;
	}

	export interface ModifyReportDefinitionRequest {

		/**
		 * The name of the report that you want to create. The name must be unique, is case sensitive, and can't include spaces.
		 * Max length: 256
		 * Pattern: [0-9A-Za-z!\-_.*\'()]+
		 */
		ReportName: string;

		/**The definition of AWS Cost and Usage Report. You can specify the report name, time unit, report format, compression format, S3 bucket, additional artifacts, and schema elements in the definition. */
		ReportDefinition: ReportDefinition;
	}


	/**Creates a Cost and Usage Report. */
	export interface PutReportDefinitionRequest {

		/**The definition of AWS Cost and Usage Report. You can specify the report name, time unit, report format, compression format, S3 bucket, additional artifacts, and schema elements in the definition. */
		ReportDefinition: ReportDefinition;
	}


	/**The region of the S3 bucket that AWS delivers the report into. */
	export enum AWSRegion { us-east-1 = 0, us-west-1 = 1, us-west-2 = 2, eu-central-1 = 3, eu-west-1 = 4, ap-southeast-1 = 5, ap-southeast-2 = 6, ap-northeast-1 = 7, eu-north-1 = 8, ap-northeast-3 = 9, ap-east-1 = 10 }


	/**The types of manifest that you want AWS to create for this report. */
	export enum AdditionalArtifact { REDSHIFT = 0, QUICKSIGHT = 1, ATHENA = 2 }


	/**The compression format that AWS uses for the report. */
	export enum CompressionFormat { ZIP = 0, GZIP = 1, Parquet = 2 }


	/**The definition of AWS Cost and Usage Report. You can specify the report name, time unit, report format, compression format, S3 bucket, additional artifacts, and schema elements in the definition.  */
	export interface ReportDefinition {

		/**
		 * The name of the report that you want to create. The name must be unique, is case sensitive, and can't include spaces.
		 * Max length: 256
		 * Pattern: [0-9A-Za-z!\-_.*\'()]+
		 */
		ReportName: string;

		/**The length of time covered by the report. */
		TimeUnit: ReportDefinitionTimeUnit;

		/**The format that AWS saves the report in. */
		Format: ReportDefinitionFormat;

		/**The compression format that AWS uses for the report. */
		Compression: ReportDefinitionCompression;

		/**A list of strings that indicate the content that is included in the report, such as service or usage type. */
		AdditionalSchemaElements: Array<SchemaElement>;

		/**
		 * The S3 bucket where AWS delivers the report.
		 * Max length: 256
		 */
		S3Bucket: string;

		/**
		 * The prefix that AWS adds to the report name when AWS delivers the report. Your prefix can't include spaces.
		 * Max length: 256
		 * Pattern: [0-9A-Za-z!\-_.*\'()/]*
		 */
		S3Prefix: string;

		/**The region of the S3 bucket that AWS delivers the report into. */
		S3Region: ReportDefinitionS3Region;

		/**A list of additional artifacts. */
		AdditionalArtifacts?: Array<AdditionalArtifact>;
		RefreshClosedReports?: boolean;
		ReportVersioning?: ReportDefinitionReportVersioning;
	}

	export enum ReportDefinitionTimeUnit { HOURLY = 0, DAILY = 1 }

	export enum ReportDefinitionFormat { textORcsv = 0, Parquet = 1 }

	export enum ReportDefinitionCompression { ZIP = 0, GZIP = 1, Parquet = 2 }

	export enum ReportDefinitionS3Region { us-east-1 = 0, us-west-1 = 1, us-west-2 = 2, eu-central-1 = 3, eu-west-1 = 4, ap-southeast-1 = 5, ap-southeast-2 = 6, ap-northeast-1 = 7, eu-north-1 = 8, ap-northeast-3 = 9, ap-east-1 = 10 }

	export enum ReportDefinitionReportVersioning { CREATE_NEW_REPORT = 0, OVERWRITE_REPORT = 1 }


	/**The length of time covered by the report.  */
	export enum TimeUnit { HOURLY = 0, DAILY = 1 }


	/**The format that AWS saves the report in. */
	export enum ReportFormat { textORcsv = 0, Parquet = 1 }

	export enum ReportVersioning { CREATE_NEW_REPORT = 0, OVERWRITE_REPORT = 1 }


	/**Whether or not AWS includes resource IDs in the report.  */
	export enum SchemaElement { RESOURCES = 0 }

	@autoinject()
	export class DemoClient {
		constructor(private http: HttpClient) {
		}

		/**
		 * Deletes the specified report.
		 * Post /#X-Amz-Target=AWSOrigamiServiceGatewayService.DeleteReportDefinition
		 * @return {DeleteReportDefinitionResponse} Success
		 */
		DeleteReportDefinition(requestBody: DeleteReportDefinitionRequest, headersHandler?: () => {[header: string]: string}): Promise<DeleteReportDefinitionResponse> {
			return this.http.post('/#X-Amz-Target=AWSOrigamiServiceGatewayService.DeleteReportDefinition', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Lists the AWS Cost and Usage reports available to this account.
		 * Post /#X-Amz-Target=AWSOrigamiServiceGatewayService.DescribeReportDefinitions
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeReportDefinitionsResponse} Success
		 */
		DescribeReportDefinitions(MaxResults: string, NextToken: string, requestBody: DescribeReportDefinitionsRequest, headersHandler?: () => {[header: string]: string}): Promise<DescribeReportDefinitionsResponse> {
			return this.http.post('/#X-Amz-Target=AWSOrigamiServiceGatewayService.DescribeReportDefinitions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Allows you to programatically update your report preferences.
		 * Post /#X-Amz-Target=AWSOrigamiServiceGatewayService.ModifyReportDefinition
		 * @return {ModifyReportDefinitionResponse} Success
		 */
		ModifyReportDefinition(requestBody: ModifyReportDefinitionRequest, headersHandler?: () => {[header: string]: string}): Promise<ModifyReportDefinitionResponse> {
			return this.http.post('/#X-Amz-Target=AWSOrigamiServiceGatewayService.ModifyReportDefinition', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * Creates a new report using the description that you provide.
		 * Post /#X-Amz-Target=AWSOrigamiServiceGatewayService.PutReportDefinition
		 * @return {PutReportDefinitionResponse} Success
		 */
		PutReportDefinition(requestBody: PutReportDefinitionRequest, headersHandler?: () => {[header: string]: string}): Promise<PutReportDefinitionResponse> {
			return this.http.post('/#X-Amz-Target=AWSOrigamiServiceGatewayService.PutReportDefinition', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}
	}

}

