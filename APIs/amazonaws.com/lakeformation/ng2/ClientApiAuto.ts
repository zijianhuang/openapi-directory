import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace My_Demo_Client {
	export interface BatchGrantPermissionsResponse {
		Failures?: Array<BatchPermissionsFailureEntry>;
	}

	export interface BatchGrantPermissionsRequest {
		CatalogId?: string;
		Entries: Array<BatchPermissionsRequestEntry>;
	}

	export interface BatchRevokePermissionsResponse {
		Failures?: Array<BatchPermissionsFailureEntry>;
	}

	export interface BatchRevokePermissionsRequest {
		CatalogId?: string;
		Entries: Array<BatchPermissionsRequestEntry>;
	}

	export interface DeregisterResourceRequest {
		ResourceArn: string;
	}

	export interface DescribeResourceResponse {

		/**A structure containing information about an AWS Lake Formation resource. */
		ResourceInfo?: ResourceInfo;
	}

	export interface DescribeResourceRequest {
		ResourceArn: string;
	}

	export interface GetDataLakeSettingsResponse {

		/**The AWS Lake Formation principal. */
		DataLakeSettings?: DataLakeSettings;
	}

	export interface GetDataLakeSettingsRequest {
		CatalogId?: string;
	}

	export interface GetEffectivePermissionsForPathResponse {
		Permissions?: Array<PrincipalResourcePermissions>;
		NextToken?: string;
	}

	export interface GetEffectivePermissionsForPathRequest {
		CatalogId?: string;
		ResourceArn: string;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface GrantPermissionsRequest {
		CatalogId?: string;

		/**The AWS Lake Formation principal. */
		Principal: DataLakePrincipal;

		/**A structure for the resource. */
		Resource: Resource;
		Permissions: Array<Permission>;
		PermissionsWithGrantOption?: Array<Permission>;
	}

	export interface ListPermissionsResponse {
		PrincipalResourcePermissions?: Array<PrincipalResourcePermissions>;
		NextToken?: string;
	}

	export interface ListPermissionsRequest {
		CatalogId?: string;

		/**The AWS Lake Formation principal. */
		Principal?: DataLakePrincipal;
		ResourceType?: ListPermissionsRequestResourceType;

		/**A structure for the resource. */
		Resource?: Resource;
		NextToken?: string;
		MaxResults?: number;
	}

	export enum ListPermissionsRequestResourceType { CATALOG = 0, DATABASE = 1, TABLE = 2, DATA_LOCATION = 3 }

	export interface ListResourcesResponse {
		ResourceInfoList?: Array<ResourceInfo>;
		NextToken?: string;
	}

	export interface ListResourcesRequest {
		FilterConditionList?: Array<FilterCondition>;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface PutDataLakeSettingsRequest {
		CatalogId?: string;

		/**The AWS Lake Formation principal. */
		DataLakeSettings: DataLakeSettings;
	}

	export interface RegisterResourceRequest {
		ResourceArn: string;
		UseServiceLinkedRole?: boolean;
		RoleArn?: string;
	}

	export interface RevokePermissionsRequest {
		CatalogId?: string;

		/**The AWS Lake Formation principal. */
		Principal: DataLakePrincipal;

		/**A structure for the resource. */
		Resource: Resource;
		Permissions: Array<Permission>;
		PermissionsWithGrantOption?: Array<Permission>;
	}

	export interface UpdateResourceRequest {
		RoleArn: string;
		ResourceArn: string;
	}


	/**A permission to a resource granted by batch operation to the principal. */
	export interface BatchPermissionsRequestEntry {
		Id: string;

		/**The AWS Lake Formation principal. */
		Principal?: DataLakePrincipal;

		/**A structure for the resource. */
		Resource?: Resource;
		Permissions?: Array<Permission>;
		PermissionsWithGrantOption?: Array<Permission>;
	}


	/**Contains details about an error. */
	export interface ErrorDetail {
		ErrorCode?: string;
		ErrorMessage?: string;
	}


	/**A list of failures when performing a batch grant or batch revoke operation. */
	export interface BatchPermissionsFailureEntry {

		/**A permission to a resource granted by batch operation to the principal. */
		RequestEntry?: BatchPermissionsRequestEntry;

		/**Contains details about an error. */
		Error?: ErrorDetail;
	}


	/**The AWS Lake Formation principal. */
	export interface DataLakePrincipal {
		DataLakePrincipalIdentifier?: string;
	}


	/**A structure for the resource. */
	export interface Resource {

		/**A structure for the catalog object. */
		Catalog?: CatalogResource;

		/**A structure for the database object. */
		Database?: DatabaseResource;

		/**A structure for the table object. A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal. */
		Table?: TableResource;

		/**<p>A structure for a table with columns object. This object is only used when granting a SELECT permission.</p> <p>This object must take a value for at least one of <code>ColumnsNames</code>, <code>ColumnsIndexes</code>, or <code>ColumnsWildcard</code>.</p> */
		TableWithColumns?: TableWithColumnsResource;

		/**A structure for a data location object where permissions are granted or revoked. */
		DataLocation?: DataLocationResource;
	}


	/**A wildcard object, consisting of an optional list of excluded column names or indexes. */
	export interface ColumnWildcard {
		ExcludedColumnNames?: Array<NameString>;
	}

	export enum ComparisonOperator { EQ = 0, NE = 1, LE = 2, LT = 3, GE = 4, GT = 5, CONTAINS = 6, NOT_CONTAINS = 7, BEGINS_WITH = 8, IN = 9, BETWEEN = 10 }

	export enum DataLakeResourceType { CATALOG = 0, DATABASE = 1, TABLE = 2, DATA_LOCATION = 3 }


	/**The AWS Lake Formation principal. */
	export interface DataLakeSettings {
		DataLakeAdmins?: Array<DataLakePrincipal>;
		CreateDatabaseDefaultPermissions?: Array<PrincipalPermissions>;
		CreateTableDefaultPermissions?: Array<PrincipalPermissions>;
	}


	/**A structure for a data location object where permissions are granted or revoked.  */
	export interface DataLocationResource {
		ResourceArn: string;
	}


	/**A structure for the database object. */
	export interface DatabaseResource {
		Name: string;
	}


	/**A structure containing information about an AWS Lake Formation resource. */
	export interface ResourceInfo {
		ResourceArn?: string;
		RoleArn?: string;
		LastModified?: Date;
	}

	export enum FieldNameString { RESOURCE_ARN = 0, ROLE_ARN = 1, LAST_MODIFIED = 2 }


	/**This structure describes the filtering of columns in a table based on a filter condition. */
	export interface FilterCondition {
		Field?: FilterConditionField;
		ComparisonOperator?: FilterConditionComparisonOperator;
		StringValueList?: Array<StringValue>;
	}

	export enum FilterConditionField { RESOURCE_ARN = 0, ROLE_ARN = 1, LAST_MODIFIED = 2 }

	export enum FilterConditionComparisonOperator { EQ = 0, NE = 1, LE = 2, LT = 3, GE = 4, GT = 5, CONTAINS = 6, NOT_CONTAINS = 7, BEGINS_WITH = 8, IN = 9, BETWEEN = 10 }

	export enum Permission { ALL = 0, SELECT = 1, ALTER = 2, DROP = 3, DELETE = 4, INSERT = 5, CREATE_DATABASE = 6, CREATE_TABLE = 7, DATA_LOCATION_ACCESS = 8 }


	/**Permissions granted to a principal. */
	export interface PrincipalPermissions {

		/**The AWS Lake Formation principal. */
		Principal?: DataLakePrincipal;
		Permissions?: Array<Permission>;
	}


	/**The permissions granted or revoked on a resource. */
	export interface PrincipalResourcePermissions {

		/**The AWS Lake Formation principal. */
		Principal?: DataLakePrincipal;

		/**A structure for the resource. */
		Resource?: Resource;
		Permissions?: Array<Permission>;
		PermissionsWithGrantOption?: Array<Permission>;
	}


	/**A structure for the table object. A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal.  */
	export interface TableResource {
		DatabaseName: string;
		Name: string;
	}


	/**<p>A structure for a table with columns object. This object is only used when granting a SELECT permission.</p> <p>This object must take a value for at least one of <code>ColumnsNames</code>, <code>ColumnsIndexes</code>, or <code>ColumnsWildcard</code>.</p> */
	export interface TableWithColumnsResource {
		DatabaseName?: string;
		Name?: string;
		ColumnNames?: Array<NameString>;

		/**A wildcard object, consisting of an optional list of excluded column names or indexes. */
		ColumnWildcard?: ColumnWildcard;
	}

	@Injectable()
	export class DemoClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Batch operation to grant permissions to the principal.
		 * Post /#X-Amz-Target=AWSLakeFormation.BatchGrantPermissions
		 * @return {BatchGrantPermissionsResponse} Success
		 */
		BatchGrantPermissions(requestBody: BatchGrantPermissionsRequest, headersHandler?: () => HttpHeaders): Observable<BatchGrantPermissionsResponse> {
			return this.http.post<BatchGrantPermissionsResponse>(this.baseUri + '/#X-Amz-Target=AWSLakeFormation.BatchGrantPermissions', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Batch operation to revoke permissions from the principal.
		 * Post /#X-Amz-Target=AWSLakeFormation.BatchRevokePermissions
		 * @return {BatchRevokePermissionsResponse} Success
		 */
		BatchRevokePermissions(requestBody: BatchRevokePermissionsRequest, headersHandler?: () => HttpHeaders): Observable<BatchRevokePermissionsResponse> {
			return this.http.post<BatchRevokePermissionsResponse>(this.baseUri + '/#X-Amz-Target=AWSLakeFormation.BatchRevokePermissions', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Deregisters the resource as managed by the Data Catalog.</p> <p>When you deregister a path, Lake Formation removes the path from the inline policy attached to your service-linked role.</p>
		 * Post /#X-Amz-Target=AWSLakeFormation.DeregisterResource
		 * @return {DeregisterResourceResponse} Success
		 */
		DeregisterResource(requestBody: DeregisterResourceRequest, headersHandler?: () => HttpHeaders): Observable<DeregisterResourceResponse> {
			return this.http.post<DeregisterResourceResponse>(this.baseUri + '/#X-Amz-Target=AWSLakeFormation.DeregisterResource', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieves the current data access role for the given resource registered in AWS Lake Formation.
		 * Post /#X-Amz-Target=AWSLakeFormation.DescribeResource
		 * @return {DescribeResourceResponse} Success
		 */
		DescribeResource(requestBody: DescribeResourceRequest, headersHandler?: () => HttpHeaders): Observable<DescribeResourceResponse> {
			return this.http.post<DescribeResourceResponse>(this.baseUri + '/#X-Amz-Target=AWSLakeFormation.DescribeResource', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * The AWS Lake Formation principal.
		 * Post /#X-Amz-Target=AWSLakeFormation.GetDataLakeSettings
		 * @return {GetDataLakeSettingsResponse} Success
		 */
		GetDataLakeSettings(requestBody: GetDataLakeSettingsRequest, headersHandler?: () => HttpHeaders): Observable<GetDataLakeSettingsResponse> {
			return this.http.post<GetDataLakeSettingsResponse>(this.baseUri + '/#X-Amz-Target=AWSLakeFormation.GetDataLakeSettings', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Returns the permissions for a specified table or database resource located at a path in Amazon S3.
		 * Post /#X-Amz-Target=AWSLakeFormation.GetEffectivePermissionsForPath
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetEffectivePermissionsForPathResponse} Success
		 */
		GetEffectivePermissionsForPath(MaxResults: string, NextToken: string, requestBody: GetEffectivePermissionsForPathRequest, headersHandler?: () => HttpHeaders): Observable<GetEffectivePermissionsForPathResponse> {
			return this.http.post<GetEffectivePermissionsForPathResponse>(this.baseUri + '/#X-Amz-Target=AWSLakeFormation.GetEffectivePermissionsForPath?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Grants permissions to the principal to access metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3.</p> <p>For information about permissions, see <a href="https://docs-aws.amazon.com/michigan/latest/dg/security-data-access.html">Security and Access Control to Metadata and Data</a>.</p>
		 * Post /#X-Amz-Target=AWSLakeFormation.GrantPermissions
		 * @return {GrantPermissionsResponse} Success
		 */
		GrantPermissions(requestBody: GrantPermissionsRequest, headersHandler?: () => HttpHeaders): Observable<GrantPermissionsResponse> {
			return this.http.post<GrantPermissionsResponse>(this.baseUri + '/#X-Amz-Target=AWSLakeFormation.GrantPermissions', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Returns a list of the principal permissions on the resource, filtered by the permissions of the caller. For example, if you are granted an ALTER permission, you are able to see only the principal permissions for ALTER.</p> <p>This operation returns only those permissions that have been explicitly granted.</p> <p>For information about permissions, see <a href="https://docs-aws.amazon.com/michigan/latest/dg/security-data-access.html">Security and Access Control to Metadata and Data</a>.</p>
		 * Post /#X-Amz-Target=AWSLakeFormation.ListPermissions
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListPermissionsResponse} Success
		 */
		ListPermissions(MaxResults: string, NextToken: string, requestBody: ListPermissionsRequest, headersHandler?: () => HttpHeaders): Observable<ListPermissionsResponse> {
			return this.http.post<ListPermissionsResponse>(this.baseUri + '/#X-Amz-Target=AWSLakeFormation.ListPermissions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lists the resources registered to be managed by the Data Catalog.
		 * Post /#X-Amz-Target=AWSLakeFormation.ListResources
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListResourcesResponse} Success
		 */
		ListResources(MaxResults: string, NextToken: string, requestBody: ListResourcesRequest, headersHandler?: () => HttpHeaders): Observable<ListResourcesResponse> {
			return this.http.post<ListResourcesResponse>(this.baseUri + '/#X-Amz-Target=AWSLakeFormation.ListResources?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * The AWS Lake Formation principal.
		 * Post /#X-Amz-Target=AWSLakeFormation.PutDataLakeSettings
		 * @return {PutDataLakeSettingsResponse} Success
		 */
		PutDataLakeSettings(requestBody: PutDataLakeSettingsRequest, headersHandler?: () => HttpHeaders): Observable<PutDataLakeSettingsResponse> {
			return this.http.post<PutDataLakeSettingsResponse>(this.baseUri + '/#X-Amz-Target=AWSLakeFormation.PutDataLakeSettings', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Registers the resource as managed by the Data Catalog.</p> <p>To add or update data, Lake Formation needs read/write access to the chosen Amazon S3 path. Choose a role that you know has permission to do this, or choose the AWSServiceRoleForLakeFormationDataAccess service-linked role. When you register the first Amazon S3 path, the service-linked role and a new inline policy are created on your behalf. Lake Formation adds the first path to the inline policy and attaches it to the service-linked role. When you register subsequent paths, Lake Formation adds the path to the existing policy.</p>
		 * Post /#X-Amz-Target=AWSLakeFormation.RegisterResource
		 * @return {RegisterResourceResponse} Success
		 */
		RegisterResource(requestBody: RegisterResourceRequest, headersHandler?: () => HttpHeaders): Observable<RegisterResourceResponse> {
			return this.http.post<RegisterResourceResponse>(this.baseUri + '/#X-Amz-Target=AWSLakeFormation.RegisterResource', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Revokes permissions to the principal to access metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3.
		 * Post /#X-Amz-Target=AWSLakeFormation.RevokePermissions
		 * @return {RevokePermissionsResponse} Success
		 */
		RevokePermissions(requestBody: RevokePermissionsRequest, headersHandler?: () => HttpHeaders): Observable<RevokePermissionsResponse> {
			return this.http.post<RevokePermissionsResponse>(this.baseUri + '/#X-Amz-Target=AWSLakeFormation.RevokePermissions', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Updates the data access role used for vending access to the given (registered) resource in AWS Lake Formation.
		 * Post /#X-Amz-Target=AWSLakeFormation.UpdateResource
		 * @return {UpdateResourceResponse} Success
		 */
		UpdateResource(requestBody: UpdateResourceRequest, headersHandler?: () => HttpHeaders): Observable<UpdateResourceResponse> {
			return this.http.post<UpdateResourceResponse>(this.baseUri + '/#X-Amz-Target=AWSLakeFormation.UpdateResource', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}
	}

}

