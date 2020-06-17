///<reference path="HttpClient.ts" />
namespace My_Demo_Client {
	export interface GetRawMessageContentResponse {
		messageContent: string;
	}

	export class DemoClient {
		constructor(private baseUri: string = HttpClient.locationOrigin, private httpClient: HttpClientBase = new HttpClient(), private error?: (xhr: JQueryXHR, ajaxOptions: string, thrown: string) => any, private statusCode?: { [key: string]: any; }) {
		}

		/**
		 * Retrieves the raw content of an in-transit email message, in MIME format.
		 * Get /messages/{messageId}
		 * @param {string} messageId The identifier of the email message to retrieve.
		 * @return {GetRawMessageContentResponse} Success
		 */
		GetRawMessageContent(messageId: string, callback: (data : GetRawMessageContentResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/messages/' + (messageId == null ? '' : encodeURIComponent(messageId)), callback, this.error, this.statusCode, headersHandler);
		}
	}

}

