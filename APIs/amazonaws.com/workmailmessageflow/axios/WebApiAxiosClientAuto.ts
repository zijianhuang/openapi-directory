import Axios from 'axios';
import { AxiosResponse } from 'axios';
export namespace My_Demo_Client {
	export interface GetRawMessageContentResponse {
		messageContent: string;
	}

	export class DemoClient {
		constructor(private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/') {
		}

		/**
		 * Retrieves the raw content of an in-transit email message, in MIME format.
		 * Get /messages/{messageId}
		 * @param {string} messageId The identifier of the email message to retrieve.
		 * @return {GetRawMessageContentResponse} Success
		 */
		GetRawMessageContent(messageId: string, headersHandler?: () => {[header: string]: string}): Promise<GetRawMessageContentResponse> {
			return Axios.get<GetRawMessageContentResponse>(this.baseUri + '/messages/' + (messageId == null ? '' : encodeURIComponent(messageId)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.data);
		}
	}

}

