import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace My_Demo_Client {
	export interface GetRawMessageContentResponse {
		messageContent: string;
	}

	@Injectable()
	export class DemoClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieves the raw content of an in-transit email message, in MIME format.
		 * Get /messages/{messageId}
		 * @param {string} messageId The identifier of the email message to retrieve.
		 * @return {GetRawMessageContentResponse} Success
		 */
		GetRawMessageContent(messageId: string, headersHandler?: () => HttpHeaders): Observable<GetRawMessageContentResponse> {
			return this.http.get<GetRawMessageContentResponse>(this.baseUri + '/messages/' + (messageId == null ? '' : encodeURIComponent(messageId)), { headers: headersHandler ? headersHandler() : undefined });
		}
	}

}

