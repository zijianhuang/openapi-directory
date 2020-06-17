import {HttpClient} from 'aurelia-fetch-client';
import {autoinject} from 'aurelia-framework';
export namespace My_Demo_Client {
	export interface GetRawMessageContentResponse {
		messageContent: string;
	}

	@autoinject()
	export class DemoClient {
		constructor(private http: HttpClient) {
		}

		/**
		 * Retrieves the raw content of an in-transit email message, in MIME format.
		 * Get /messages/{messageId}
		 * @param {string} messageId The identifier of the email message to retrieve.
		 * @return {GetRawMessageContentResponse} Success
		 */
		GetRawMessageContent(messageId: string, headersHandler?: () => {[header: string]: string}): Promise<GetRawMessageContentResponse> {
			return this.http.get('/messages/' + (messageId == null ? '' : encodeURIComponent(messageId)), { headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}
	}

}

