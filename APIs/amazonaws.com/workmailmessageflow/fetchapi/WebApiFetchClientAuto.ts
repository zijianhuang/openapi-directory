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
			return fetch(this.baseUri + '/messages/' + (messageId == null ? '' : encodeURIComponent(messageId)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}
	}

}

