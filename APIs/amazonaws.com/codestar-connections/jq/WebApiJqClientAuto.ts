///<reference path="HttpClient.ts" />
namespace My_Demo_Client {
	export interface CreateConnectionOutput {
		ConnectionArn: string;
		Tags?: Array<Tag>;
	}

	export interface CreateConnectionInput {
		ProviderType: CreateConnectionInputProviderType;
		ConnectionName: string;
		Tags?: Array<Tag>;
	}

	export enum CreateConnectionInputProviderType { Bitbucket = 0 }

	export interface DeleteConnectionInput {
		ConnectionArn: string;
	}

	export interface GetConnectionOutput {

		/**<p>The AWS::CodeStarConnections::Connection resource can be used to connect external source providers with services like AWS CodePipeline.</p> <p>Note: A connection created through CloudFormation is in `PENDING` status by default. You can make its status `AVAILABLE` by editing the connection in the CodePipeline console.</p> */
		Connection?: Connection;
	}

	export interface GetConnectionInput {
		ConnectionArn: string;
	}

	export interface ListConnectionsOutput {
		Connections?: Array<Connection>;
		NextToken?: string;
	}

	export interface ListConnectionsInput {
		ProviderTypeFilter?: ListConnectionsInputProviderTypeFilter;
		MaxResults?: number;
		NextToken?: string;
	}

	export enum ListConnectionsInputProviderTypeFilter { Bitbucket = 0 }

	export interface ListTagsForResourceOutput {
		Tags?: Array<Tag>;
	}

	export interface ListTagsForResourceInput {
		ResourceArn: string;
	}

	export interface TagResourceInput {
		ResourceArn: string;
		Tags: Array<Tag>;
	}

	export interface UntagResourceInput {
		ResourceArn: string;
		TagKeys: Array<TagKey>;
	}

	export enum ProviderType { Bitbucket = 0 }

	export enum ConnectionStatus { PENDING = 0, AVAILABLE = 1, ERROR = 2 }


	/**<p>The AWS::CodeStarConnections::Connection resource can be used to connect external source providers with services like AWS CodePipeline.</p> <p>Note: A connection created through CloudFormation is in `PENDING` status by default. You can make its status `AVAILABLE` by editing the connection in the CodePipeline console.</p> */
	export interface Connection {
		ConnectionName?: string;
		ConnectionArn?: string;
		ProviderType?: ConnectionProviderType;
		OwnerAccountId?: string;
		ConnectionStatus?: ConnectionConnectionStatus;
	}

	export enum ConnectionProviderType { Bitbucket = 0 }

	export enum ConnectionConnectionStatus { PENDING = 0, AVAILABLE = 1, ERROR = 2 }


	/**<p>A tag is a key-value pair that is used to manage the resource.</p> <p>This tag is available for use by AWS services that support tags.</p> */
	export interface Tag {
		Key: string;
		Value: string;
	}

	export class DemoClient {
		constructor(private baseUri: string = HttpClient.locationOrigin, private httpClient: HttpClientBase = new HttpClient(), private error?: (xhr: JQueryXHR, ajaxOptions: string, thrown: string) => any, private statusCode?: { [key: string]: any; }) {
		}

		/**
		 * Creates a connection that can then be given to other AWS services like CodePipeline so that it can access third-party code repositories. The connection is in pending status until the third-party connection handshake is completed from the console.
		 * Post /#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateConnection
		 * @return {CreateConnectionOutput} Success
		 */
		CreateConnection(callback: (data : CreateConnectionOutput) => any, requestBody: CreateConnectionInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateConnection', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * The connection to be deleted.
		 * Post /#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.DeleteConnection
		 * @return {DeleteConnectionOutput} Success
		 */
		DeleteConnection(callback: (data : DeleteConnectionOutput) => any, requestBody: DeleteConnectionInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.DeleteConnection', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Returns the connection ARN and details such as status, owner, and provider type.
		 * Post /#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.GetConnection
		 * @return {GetConnectionOutput} Success
		 */
		GetConnection(callback: (data : GetConnectionOutput) => any, requestBody: GetConnectionInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.GetConnection', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Lists the connections associated with your account.
		 * Post /#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListConnections
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListConnectionsOutput} Success
		 */
		ListConnections(MaxResults: string, NextToken: string, callback: (data : ListConnectionsOutput) => any, requestBody: ListConnectionsInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListConnections?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Gets the set of key-value pairs (metadata) that are used to manage the resource.
		 * Post /#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListTagsForResource
		 * @return {ListTagsForResourceOutput} Success
		 */
		ListTagsForResource(callback: (data : ListTagsForResourceOutput) => any, requestBody: ListTagsForResourceInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListTagsForResource', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Adds to or modifies the tags of the given resource. Tags are metadata that can be used to manage a resource.
		 * Post /#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.TagResource
		 * @return {TagResourceOutput} Success
		 */
		TagResource(callback: (data : TagResourceOutput) => any, requestBody: TagResourceInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.TagResource', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Removes tags from an AWS resource.
		 * Post /#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.UntagResource
		 * @return {UntagResourceOutput} Success
		 */
		UntagResource(callback: (data : UntagResourceOutput) => any, requestBody: UntagResourceInput, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.UntagResource', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}
	}

}

