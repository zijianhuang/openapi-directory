///<reference path="HttpClient.ts" />
namespace My_Demo_Client {
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

	export class DemoClient {
		constructor(private baseUri: string = HttpClient.locationOrigin, private httpClient: HttpClientBase = new HttpClient(), private error?: (xhr: JQueryXHR, ajaxOptions: string, thrown: string) => any, private statusCode?: { [key: string]: any; }) {
		}

		/**
		 * Delete the connection with the provided id.
		 * Delete @connections/{connectionId}
		 * @return {void} 
		 */
		DeleteConnection(connectionId: string, callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + '@connections/' + (connectionId == null ? '' : encodeURIComponent(connectionId)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Get information about the connection with the provided id.
		 * Get @connections/{connectionId}
		 * @return {GetConnectionResponse} Success
		 */
		GetConnection(connectionId: string, callback: (data : GetConnectionResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '@connections/' + (connectionId == null ? '' : encodeURIComponent(connectionId)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Sends the provided data to the specified connection.
		 * Post @connections/{connectionId}
		 * @param {string} connectionId The identifier of the connection that a specific client is using.
		 * @return {void} Success
		 */
		PostToConnection(connectionId: string, callback: (data : void) => any, requestBody: PostToConnectionBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '@connections/' + (connectionId == null ? '' : encodeURIComponent(connectionId)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
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

