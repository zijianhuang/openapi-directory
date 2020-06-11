import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace My_Demo_Client {
	export interface GetConnectionResponse {
		ConnectedAt?: Date;
		Identity?: Identity;
		LastActiveAt?: Date;
	}

	export interface Identity {
		SourceIp: string;
		UserAgent: string;
	}

	export interface PostToConnectionRequest {

		/**
		 * The data to be sent to the client specified by its connection id.
		 * Max length: 131072
		 */
		Data: string;
	}

	@Injectable()
	export class DemoClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Delete the connection with the provided id.
		 * Delete @connections/{connectionId}
		 * @return {void} 
		 */
		DeleteConnection(connectionId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '@connections/' + (connectionId == null ? '' : encodeURIComponent(connectionId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get information about the connection with the provided id.
		 * Get @connections/{connectionId}
		 * @return {GetConnectionResponse} Success
		 */
		GetConnection(connectionId: string, headersHandler?: () => HttpHeaders): Observable<GetConnectionResponse> {
			return this.http.get<GetConnectionResponse>(this.baseUri + '@connections/' + (connectionId == null ? '' : encodeURIComponent(connectionId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Sends the provided data to the specified connection.
		 * Post @connections/{connectionId}
		 * @param {string} connectionId The identifier of the connection that a specific client is using.
		 * @return {void} Success
		 */
		PostToConnection(connectionId: string, requestBody: PostToConnectionBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '@connections/' + (connectionId == null ? '' : encodeURIComponent(connectionId)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}
	}

	export interface PostToConnectionBody {

		/**
		 * The data to be sent to the client specified by its connection id.
		 * Max length: 131072
		 */
		Data: string;
	}

}

