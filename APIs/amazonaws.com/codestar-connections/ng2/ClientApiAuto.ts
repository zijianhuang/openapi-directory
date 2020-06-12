import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace My_Demo_Client {
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

	@Injectable()
	export class DemoClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates a connection that can then be given to other AWS services like CodePipeline so that it can access third-party code repositories. The connection is in pending status until the third-party connection handshake is completed from the console.
		 * Post /#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateConnection
		 * @return {CreateConnectionOutput} Success
		 */
		CreateConnection(requestBody: CreateConnectionInput, headersHandler?: () => HttpHeaders): Observable<CreateConnectionOutput> {
			return this.http.post<CreateConnectionOutput>(this.baseUri + '/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateConnection', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * The connection to be deleted.
		 * Post /#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.DeleteConnection
		 * @return {DeleteConnectionOutput} Success
		 */
		DeleteConnection(requestBody: DeleteConnectionInput, headersHandler?: () => HttpHeaders): Observable<DeleteConnectionOutput> {
			return this.http.post<DeleteConnectionOutput>(this.baseUri + '/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.DeleteConnection', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Returns the connection ARN and details such as status, owner, and provider type.
		 * Post /#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.GetConnection
		 * @return {GetConnectionOutput} Success
		 */
		GetConnection(requestBody: GetConnectionInput, headersHandler?: () => HttpHeaders): Observable<GetConnectionOutput> {
			return this.http.post<GetConnectionOutput>(this.baseUri + '/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.GetConnection', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lists the connections associated with your account.
		 * Post /#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListConnections
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListConnectionsOutput} Success
		 */
		ListConnections(MaxResults: string, NextToken: string, requestBody: ListConnectionsInput, headersHandler?: () => HttpHeaders): Observable<ListConnectionsOutput> {
			return this.http.post<ListConnectionsOutput>(this.baseUri + '/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListConnections?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Gets the set of key-value pairs (metadata) that are used to manage the resource.
		 * Post /#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListTagsForResource
		 * @return {ListTagsForResourceOutput} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceInput, headersHandler?: () => HttpHeaders): Observable<ListTagsForResourceOutput> {
			return this.http.post<ListTagsForResourceOutput>(this.baseUri + '/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListTagsForResource', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Adds to or modifies the tags of the given resource. Tags are metadata that can be used to manage a resource.
		 * Post /#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.TagResource
		 * @return {TagResourceOutput} Success
		 */
		TagResource(requestBody: TagResourceInput, headersHandler?: () => HttpHeaders): Observable<TagResourceOutput> {
			return this.http.post<TagResourceOutput>(this.baseUri + '/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.TagResource', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Removes tags from an AWS resource.
		 * Post /#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.UntagResource
		 * @return {UntagResourceOutput} Success
		 */
		UntagResource(requestBody: UntagResourceInput, headersHandler?: () => HttpHeaders): Observable<UntagResourceOutput> {
			return this.http.post<UntagResourceOutput>(this.baseUri + '/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.UntagResource', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}
	}

}

