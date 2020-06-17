import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace My_Demo_Client {

	/**The GetEntitlementsRequest contains results from the GetEntitlements operation. */
	export interface GetEntitlementsResult {
		Entitlements?: Array<Entitlement>;
		NextToken?: string;
	}


	/**The GetEntitlementsRequest contains parameters for the GetEntitlements operation. */
	export interface GetEntitlementsRequest {
		ProductCode: string;
		Filter?: GetEntitlementFilters;
		NextToken?: string;
		MaxResults?: number;
	}


	/**One or more parameters in your request was invalid. */
	export interface InvalidParameterException {
		message?: string;
	}


	/**The calls to the GetEntitlements API are throttled. */
	export interface ThrottlingException {
		message?: string;
	}


	/**An internal error has occurred. Retry your request. If the problem persists, post a message with details on the AWS forums. */
	export interface InternalServiceErrorException {
		message?: string;
	}


	/**The EntitlementValue represents the amount of capacity that the customer is entitled to for the product. */
	export interface EntitlementValue {
		IntegerValue?: number;
		DoubleValue?: number;
		BooleanValue?: boolean;
		StringValue?: string;
	}


	/**An entitlement represents capacity in a product owned by the customer. For example, a customer might own some number of users or seats in an SaaS application or some amount of data capacity in a multi-tenant database. */
	export interface Entitlement {
		ProductCode?: string;
		Dimension?: string;
		CustomerIdentifier?: string;

		/**The EntitlementValue represents the amount of capacity that the customer is entitled to for the product. */
		Value?: EntitlementValue;
		ExpirationDate?: Date;
	}

	export enum GetEntitlementFilterName { CUSTOMER_IDENTIFIER = 0, DIMENSION = 1 }

	@Injectable()
	export class DemoClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * GetEntitlements retrieves entitlement values for a given product. The results can be filtered based on customer identifier or product dimensions.
		 * Post /#X-Amz-Target=AWSMPEntitlementService.GetEntitlements
		 * @return {GetEntitlementsResult} Success
		 */
		GetEntitlements(requestBody: GetEntitlementsRequest, headersHandler?: () => HttpHeaders): Observable<GetEntitlementsResult> {
			return this.http.post<GetEntitlementsResult>(this.baseUri + '/#X-Amz-Target=AWSMPEntitlementService.GetEntitlements', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}
	}

}

