import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace My_Demo_Client {
	export interface CreateGraphResponse {
		GraphArn?: string;
	}

	export interface CreateMembersResponse {
		Members?: Array<MemberDetail>;
		UnprocessedAccounts?: Array<UnprocessedAccount>;
	}


	/**An AWS account that is the master of or a member of a behavior graph. */
	export interface Account {
		AccountId: string;
		EmailAddress: string;
	}

	export interface DeleteMembersResponse {
		AccountIds?: Array<AccountId>;
		UnprocessedAccounts?: Array<UnprocessedAccount>;
	}

	export interface GetMembersResponse {
		MemberDetails?: Array<MemberDetail>;
		UnprocessedAccounts?: Array<UnprocessedAccount>;
	}

	export interface ListGraphsResponse {
		GraphList?: Array<Graph>;
		NextToken?: string;
	}

	export interface ListInvitationsResponse {
		Invitations?: Array<MemberDetail>;
		NextToken?: string;
	}

	export interface ListMembersResponse {
		MemberDetails?: Array<MemberDetail>;
		NextToken?: string;
	}

	export interface AcceptInvitationRequest {
		GraphArn: string;
	}

	export interface CreateMembersRequest {
		GraphArn: string;
		Message?: string;
		Accounts: Array<Account>;
	}

	export interface DeleteGraphRequest {
		GraphArn: string;
	}

	export interface DeleteMembersRequest {
		GraphArn: string;
		AccountIds: Array<AccountId>;
	}

	export interface DisassociateMembershipRequest {
		GraphArn: string;
	}

	export interface GetMembersRequest {
		GraphArn: string;
		AccountIds: Array<AccountId>;
	}


	/**A behavior graph in Detective. */
	export interface Graph {
		Arn?: string;
		CreatedTime?: Date;
	}

	export interface ListGraphsRequest {
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListInvitationsRequest {
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListMembersRequest {
		GraphArn: string;
		NextToken?: string;
		MaxResults?: number;
	}

	export enum MemberStatus { INVITED = 0, VERIFICATION_IN_PROGRESS = 1, VERIFICATION_FAILED = 2, ENABLED = 3, ACCEPTED_BUT_DISABLED = 4 }

	export enum MemberDisabledReason { VOLUME_TOO_HIGH = 0, VOLUME_UNKNOWN = 1 }


	/**Details about a member account that was invited to contribute to a behavior graph. */
	export interface MemberDetail {
		AccountId?: string;
		EmailAddress?: string;
		GraphArn?: string;
		MasterId?: string;
		Status?: MemberDetailStatus;
		DisabledReason?: MemberDetailDisabledReason;
		InvitedTime?: Date;
		UpdatedTime?: Date;
		PercentOfGraphUtilization?: number;
		PercentOfGraphUtilizationUpdatedTime?: Date;
	}

	export enum MemberDetailStatus { INVITED = 0, VERIFICATION_IN_PROGRESS = 1, VERIFICATION_FAILED = 2, ENABLED = 3, ACCEPTED_BUT_DISABLED = 4 }

	export enum MemberDetailDisabledReason { VOLUME_TOO_HIGH = 0, VOLUME_UNKNOWN = 1 }

	export interface RejectInvitationRequest {
		GraphArn: string;
	}

	export interface StartMonitoringMemberRequest {
		GraphArn: string;
		AccountId: string;
	}


	/**A member account that was included in a request but for which the request could not be processed. */
	export interface UnprocessedAccount {
		AccountId?: string;
		Reason?: string;
	}

	@Injectable()
	export class DemoClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Accepts an invitation for the member account to contribute data to a behavior graph. This operation can only be called by an invited member account. </p> <p>The request provides the ARN of behavior graph.</p> <p>The member account status in the graph must be <code>INVITED</code>.</p>
		 * Put /invitation
		 * @return {void} Success
		 */
		AcceptInvitation(requestBody: AcceptInvitationBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + '/invitation', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a new behavior graph for the calling account, and sets that account as the master account. This operation is called by the account that is enabling Detective.</p> <p>Before you try to enable Detective, make sure that your account has been enrolled in Amazon GuardDuty for at least 48 hours. If you do not meet this requirement, you cannot enable Detective. If you do meet the GuardDuty prerequisite, then when you make the request to enable Detective, it checks whether your data volume is within the Detective quota. If it exceeds the quota, then you cannot enable Detective. </p> <p>The operation also enables Detective for the calling account in the currently selected Region. It returns the ARN of the new behavior graph.</p> <p> <code>CreateGraph</code> triggers a process to create the corresponding data tables for the new behavior graph.</p> <p>An account can only be the master account for one behavior graph within a Region. If the same account calls <code>CreateGraph</code> with the same master account, it always returns the same behavior graph ARN. It does not create a new behavior graph.</p>
		 * Post /graph
		 * @return {CreateGraphResponse} Success
		 */
		CreateGraph(headersHandler?: () => HttpHeaders): Observable<CreateGraphResponse> {
			return this.http.post<CreateGraphResponse>(this.baseUri + '/graph', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * <p>Sends a request to invite the specified AWS accounts to be member accounts in the behavior graph. This operation can only be called by the master account for a behavior graph. </p> <p> <code>CreateMembers</code> verifies the accounts and then sends invitations to the verified accounts.</p> <p>The request provides the behavior graph ARN and the list of accounts to invite.</p> <p>The response separates the requested accounts into two lists:</p> <ul> <li> <p>The accounts that <code>CreateMembers</code> was able to start the verification for. This list includes member accounts that are being verified, that have passed verification and are being sent an invitation, and that have failed verification.</p> </li> <li> <p>The accounts that <code>CreateMembers</code> was unable to process. This list includes accounts that were already invited to be member accounts in the behavior graph.</p> </li> </ul>
		 * Post /graph/members
		 * @return {CreateMembersResponse} Success
		 */
		CreateMembers(requestBody: CreateMembersBody, headersHandler?: () => HttpHeaders): Observable<CreateMembersResponse> {
			return this.http.post<CreateMembersResponse>(this.baseUri + '/graph/members', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Disables the specified behavior graph and queues it to be deleted. This operation removes the graph from each member account's list of behavior graphs.</p> <p> <code>DeleteGraph</code> can only be called by the master account for a behavior graph.</p>
		 * Post /graph/removal
		 * @return {void} Success
		 */
		DeleteGraph(requestBody: DeleteGraphBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '/graph/removal', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes one or more member accounts from the master account behavior graph. This operation can only be called by a Detective master account. That account cannot use <code>DeleteMembers</code> to delete their own account from the behavior graph. To disable a behavior graph, the master account uses the <code>DeleteGraph</code> API method.
		 * Post /graph/members/removal
		 * @return {DeleteMembersResponse} Success
		 */
		DeleteMembers(requestBody: DeleteMembersBody, headersHandler?: () => HttpHeaders): Observable<DeleteMembersResponse> {
			return this.http.post<DeleteMembersResponse>(this.baseUri + '/graph/members/removal', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Removes the member account from the specified behavior graph. This operation can only be called by a member account that has the <code>ENABLED</code> status.
		 * Post /membership/removal
		 * @return {void} Success
		 */
		DisassociateMembership(requestBody: DisassociateMembershipBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '/membership/removal', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the membership details for specified member accounts for a behavior graph.
		 * Post /graph/members/get
		 * @return {GetMembersResponse} Success
		 */
		GetMembers(requestBody: GetMembersBody, headersHandler?: () => HttpHeaders): Observable<GetMembersResponse> {
			return this.http.post<GetMembersResponse>(this.baseUri + '/graph/members/get', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Returns the list of behavior graphs that the calling account is a master of. This operation can only be called by a master account.</p> <p>Because an account can currently only be the master of one behavior graph within a Region, the results always contain a single graph.</p>
		 * Post /graphs/list
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListGraphsResponse} Success
		 */
		ListGraphs(MaxResults: string, NextToken: string, requestBody: ListGraphsBody, headersHandler?: () => HttpHeaders): Observable<ListGraphsResponse> {
			return this.http.post<ListGraphsResponse>(this.baseUri + '/graphs/list?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Retrieves the list of open and accepted behavior graph invitations for the member account. This operation can only be called by a member account.</p> <p>Open invitations are invitations that the member account has not responded to.</p> <p>The results do not include behavior graphs for which the member account declined the invitation. The results also do not include behavior graphs that the member account resigned from or was removed from.</p>
		 * Post /invitations/list
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListInvitationsResponse} Success
		 */
		ListInvitations(MaxResults: string, NextToken: string, requestBody: ListInvitationsBody, headersHandler?: () => HttpHeaders): Observable<ListInvitationsResponse> {
			return this.http.post<ListInvitationsResponse>(this.baseUri + '/invitations/list?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieves the list of member accounts for a behavior graph. Does not return member accounts that were removed from the behavior graph.
		 * Post /graph/members/list
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListMembersResponse} Success
		 */
		ListMembers(MaxResults: string, NextToken: string, requestBody: ListMembersBody, headersHandler?: () => HttpHeaders): Observable<ListMembersResponse> {
			return this.http.post<ListMembersResponse>(this.baseUri + '/graph/members/list?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Rejects an invitation to contribute the account data to a behavior graph. This operation must be called by a member account that has the <code>INVITED</code> status.
		 * Post /invitation/removal
		 * @return {void} Success
		 */
		RejectInvitation(requestBody: RejectInvitationBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '/invitation/removal', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Sends a request to enable data ingest for a member account that has a status of <code>ACCEPTED_BUT_DISABLED</code>.</p> <p>For valid member accounts, the status is updated as follows.</p> <ul> <li> <p>If Detective enabled the member account, then the new status is <code>ENABLED</code>.</p> </li> <li> <p>If Detective cannot enable the member account, the status remains <code>ACCEPTED_BUT_DISABLED</code>. </p> </li> </ul>
		 * Post /graph/member/monitoringstate
		 * @return {void} Success
		 */
		StartMonitoringMember(requestBody: StartMonitoringMemberBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '/graph/member/monitoringstate', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}
	}

	export interface AcceptInvitationBody {

		/**
		 * <p>The ARN of the behavior graph that the member account is accepting the invitation for.</p> <p>The member account status in the behavior graph must be <code>INVITED</code>.</p>
		 * Pattern: ^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$
		 */
		GraphArn: string;
	}

	export interface CreateMembersBody {

		/**
		 * The ARN of the behavior graph to invite the member accounts to contribute their data to.
		 * Pattern: ^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$
		 */
		GraphArn: string;

		/**
		 * Customized message text to include in the invitation email message to the invited member accounts.
		 * Max length: 1000
		 * Min length: 1
		 */
		Message?: string;

		/**
		 * The list of AWS accounts to invite to become member accounts in the behavior graph. For each invited account, the account list contains the account identifier and the AWS account root user email address.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Accounts: Array<Account>;
	}

	export interface DeleteGraphBody {

		/**
		 * The ARN of the behavior graph to disable.
		 * Pattern: ^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$
		 */
		GraphArn: string;
	}

	export interface DeleteMembersBody {

		/**
		 * The ARN of the behavior graph to delete members from.
		 * Pattern: ^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$
		 */
		GraphArn: string;

		/**
		 * The list of AWS account identifiers for the member accounts to delete from the behavior graph.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		AccountIds: Array<AccountId>;
	}

	export interface DisassociateMembershipBody {

		/**
		 * <p>The ARN of the behavior graph to remove the member account from.</p> <p>The member account's member status in the behavior graph must be <code>ENABLED</code>.</p>
		 * Pattern: ^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$
		 */
		GraphArn: string;
	}

	export interface GetMembersBody {

		/**
		 * The ARN of the behavior graph for which to request the member details.
		 * Pattern: ^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$
		 */
		GraphArn: string;

		/**
		 * <p>The list of AWS account identifiers for the member account for which to return member details.</p> <p>You cannot use <code>GetMembers</code> to retrieve information about member accounts that were removed from the behavior graph.</p>
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		AccountIds: Array<AccountId>;
	}

	export interface ListGraphsBody {

		/**
		 * For requests to get the next page of results, the pagination token that was returned with the previous set of results. The initial request does not include a pagination token.
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken?: string;

		/**
		 * The maximum number of graphs to return at a time. The total must be less than the overall limit on the number of results to return, which is currently 200.
		 * Minimum: 1
		 * Maximum: 200
		 */
		MaxResults?: number;
	}

	export interface ListInvitationsBody {

		/**
		 * For requests to retrieve the next page of results, the pagination token that was returned with the previous page of results. The initial request does not include a pagination token.
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken?: string;

		/**
		 * The maximum number of behavior graph invitations to return in the response. The total must be less than the overall limit on the number of results to return, which is currently 200.
		 * Minimum: 1
		 * Maximum: 200
		 */
		MaxResults?: number;
	}

	export interface ListMembersBody {

		/**
		 * The ARN of the behavior graph for which to retrieve the list of member accounts.
		 * Pattern: ^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$
		 */
		GraphArn: string;

		/**
		 * For requests to retrieve the next page of member account results, the pagination token that was returned with the previous page of results. The initial request does not include a pagination token.
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken?: string;

		/**
		 * The maximum number of member accounts to include in the response. The total must be less than the overall limit on the number of results to return, which is currently 200.
		 * Minimum: 1
		 * Maximum: 200
		 */
		MaxResults?: number;
	}

	export interface RejectInvitationBody {

		/**
		 * <p>The ARN of the behavior graph to reject the invitation to.</p> <p>The member account's current member status in the behavior graph must be <code>INVITED</code>.</p>
		 * Pattern: ^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$
		 */
		GraphArn: string;
	}

	export interface StartMonitoringMemberBody {

		/**
		 * The ARN of the behavior graph.
		 * Pattern: ^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$
		 */
		GraphArn: string;

		/**
		 * <p>The account ID of the member account to try to enable.</p> <p>The account must be an invited member account with a status of <code>ACCEPTED_BUT_DISABLED</code>. </p>
		 * Max length: 12
		 * Min length: 12
		 * Pattern: ^[0-9]+$
		 */
		AccountId: string;
	}

}

