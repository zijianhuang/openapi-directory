import Axios from 'axios';
import { AxiosResponse } from 'axios';
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

	export class DemoClient {
		constructor(private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/') {
		}

		/**
		 * Delete the connection with the provided id.
		 * Delete @connections/{connectionId}
		 * @return {void} 
		 */
		DeleteConnection(connectionId: string, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.delete(this.baseUri + '@connections/' + (connectionId == null ? '' : encodeURIComponent(connectionId)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Get information about the connection with the provided id.
		 * Get @connections/{connectionId}
		 * @return {GetConnectionResponse} Success
		 */
		GetConnection(connectionId: string, headersHandler?: () => {[header: string]: string}): Promise<GetConnectionResponse> {
			return Axios.get<GetConnectionResponse>(this.baseUri + '@connections/' + (connectionId == null ? '' : encodeURIComponent(connectionId)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}

		/**
		 * Sends the provided data to the specified connection.
		 * Post @connections/{connectionId}
		 * @param {string} connectionId The identifier of the connection that a specific client is using.
		 * @return {void} Success
		 */
		PostToConnection(connectionId: string, requestBody: PostToConnectionBody, headersHandler?: () => {[header: string]: string}): Promise<AxiosResponse<string>> {
			return Axios.post(this.baseUri + '@connections/' + (connectionId == null ? '' : encodeURIComponent(connectionId)), JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
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

