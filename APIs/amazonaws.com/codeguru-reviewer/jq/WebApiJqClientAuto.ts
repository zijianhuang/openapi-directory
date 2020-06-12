///<reference path="HttpClient.ts" />
namespace My_Demo_Client {
	export interface AssociateRepositoryResponse {

		/**Information about a repository association. */
		RepositoryAssociation?: RepositoryAssociation;
	}


	/**Information about an AWS CodeCommit repository. */
	export interface CodeCommitRepository {
		Name: string;
	}


	/** Information about a third party source repository connected through CodeStar Connections.  */
	export interface ThirdPartySourceRepository {
		Name: string;
		ConnectionArn: string;
		Owner: string;
	}

	export interface DescribeCodeReviewResponse {

		/**Information about a code review. */
		CodeReview?: CodeReview;
	}

	export interface DescribeRecommendationFeedbackResponse {

		/**Information about the recommendation feedback. */
		RecommendationFeedback?: RecommendationFeedback;
	}

	export interface DescribeRepositoryAssociationResponse {

		/**Information about a repository association. */
		RepositoryAssociation?: RepositoryAssociation;
	}

	export interface DisassociateRepositoryResponse {

		/**Information about a repository association. */
		RepositoryAssociation?: RepositoryAssociation;
	}

	export interface ListCodeReviewsResponse {
		CodeReviewSummaries?: Array<CodeReviewSummary>;
		NextToken?: string;
	}

	export enum ProviderType { CodeCommit = 0, GitHub = 1, Bitbucket = 2 }

	export enum JobState { Completed = 0, Pending = 1, Failed = 2, Deleting = 3 }

	export interface ListRecommendationFeedbackResponse {
		RecommendationFeedbackSummaries?: Array<RecommendationFeedbackSummary>;
		NextToken?: string;
	}

	export interface ListRecommendationsResponse {
		RecommendationSummaries?: Array<RecommendationSummary>;
		NextToken?: string;
	}

	export interface ListRepositoryAssociationsResponse {
		RepositoryAssociationSummaries?: Array<RepositoryAssociationSummary>;
		NextToken?: string;
	}

	export enum RepositoryAssociationState { Associated = 0, Associating = 1, Failed = 2, Disassociating = 3 }

	export enum Reaction { ThumbsUp = 0, ThumbsDown = 1 }


	/**Information about a repository. */
	export interface Repository {

		/**Information about an AWS CodeCommit repository. */
		CodeCommit?: CodeCommitRepository;

		/**Information about a third party source repository connected through CodeStar Connections. */
		Bitbucket?: ThirdPartySourceRepository;
	}

	export interface AssociateRepositoryRequest {

		/**Information about a repository. */
		Repository: Repository;
		ClientRequestToken?: string;
	}


	/**Information about a repository association. */
	export interface RepositoryAssociation {
		AssociationId?: string;
		AssociationArn?: string;
		ConnectionArn?: string;
		Name?: string;
		Owner?: string;
		ProviderType?: RepositoryAssociationProviderType;
		State?: RepositoryAssociationState;
		StateReason?: string;
		LastUpdatedTimeStamp?: Date;
		CreatedTimeStamp?: Date;
	}

	export enum RepositoryAssociationProviderType { CodeCommit = 0, GitHub = 1, Bitbucket = 2 }

	export enum RepositoryAssociationState { Associated = 0, Associating = 1, Failed = 2, Disassociating = 3 }

	export enum Type { PullRequest = 0 }


	/** Information about the source code type.  */
	export interface SourceCodeType {

		/**The commit diff for the pull request. */
		CommitDiff?: CommitDiffSourceCodeType;
	}


	/** Information about the statistics from the code review.  */
	export interface Metrics {
		MeteredLinesOfCodeCount?: number;
		FindingsCount?: number;
	}


	/** Information about a code review.  */
	export interface CodeReview {
		Name?: string;
		CodeReviewArn?: string;
		RepositoryName?: string;
		Owner?: string;
		ProviderType?: CodeReviewProviderType;
		State?: CodeReviewState;
		StateReason?: string;
		CreatedTimeStamp?: Date;
		LastUpdatedTimeStamp?: Date;
		Type?: CodeReviewType;
		PullRequestId?: string;

		/**Information about the source code type. */
		SourceCodeType?: SourceCodeType;

		/**Information about the statistics from the code review. */
		Metrics?: Metrics;
	}

	export enum CodeReviewProviderType { CodeCommit = 0, GitHub = 1, Bitbucket = 2 }

	export enum CodeReviewState { Completed = 0, Pending = 1, Failed = 2, Deleting = 3 }

	export enum CodeReviewType { PullRequest = 0 }


	/** Information about the summary of the code review.  */
	export interface CodeReviewSummary {
		Name?: string;
		CodeReviewArn?: string;
		RepositoryName?: string;
		Owner?: string;
		ProviderType?: CodeReviewSummaryProviderType;
		State?: CodeReviewSummaryState;
		CreatedTimeStamp?: Date;
		LastUpdatedTimeStamp?: Date;
		Type?: CodeReviewSummaryType;
		PullRequestId?: string;

		/**Information about metrics summaries. */
		MetricsSummary?: MetricsSummary;
	}

	export enum CodeReviewSummaryProviderType { CodeCommit = 0, GitHub = 1, Bitbucket = 2 }

	export enum CodeReviewSummaryState { Completed = 0, Pending = 1, Failed = 2, Deleting = 3 }

	export enum CodeReviewSummaryType { PullRequest = 0 }


	/** Information about metrics summaries.  */
	export interface MetricsSummary {
		MeteredLinesOfCodeCount?: number;
		FindingsCount?: number;
	}


	/** The commit diff for the pull request.  */
	export interface CommitDiffSourceCodeType {
		SourceCommit?: string;
		DestinationCommit?: string;
	}


	/** Information about the recommendation feedback.  */
	export interface RecommendationFeedback {
		CodeReviewArn?: string;
		RecommendationId?: string;
		Reactions?: Array<Reaction>;
		UserId?: string;
		CreatedTimeStamp?: Date;
		LastUpdatedTimeStamp?: Date;
	}

	export interface PutRecommendationFeedbackRequest {
		CodeReviewArn: string;
		RecommendationId: string;
		Reactions: Array<Reaction>;
	}


	/** Information about recommendation feedback summaries.  */
	export interface RecommendationFeedbackSummary {
		RecommendationId?: string;
		Reactions?: Array<Reaction>;
		UserId?: string;
	}


	/** Information about recommendations.  */
	export interface RecommendationSummary {
		FilePath?: string;
		RecommendationId?: string;
		StartLine?: number;
		EndLine?: number;
		Description?: string;
	}


	/**Information about a repository association. */
	export interface RepositoryAssociationSummary {
		AssociationArn?: string;
		ConnectionArn?: string;
		LastUpdatedTimeStamp?: Date;
		AssociationId?: string;
		Name?: string;
		Owner?: string;
		ProviderType?: RepositoryAssociationSummaryProviderType;
		State?: RepositoryAssociationSummaryState;
	}

	export enum RepositoryAssociationSummaryProviderType { CodeCommit = 0, GitHub = 1, Bitbucket = 2 }

	export enum RepositoryAssociationSummaryState { Associated = 0, Associating = 1, Failed = 2, Disassociating = 3 }

	export class DemoClient {
		constructor(private baseUri: string = HttpClient.locationOrigin, private httpClient: HttpClientBase = new HttpClient(), private error?: (xhr: JQueryXHR, ajaxOptions: string, thrown: string) => any, private statusCode?: { [key: string]: any; }) {
		}

		/**
		 * <p>Associates an AWS CodeCommit repository with Amazon CodeGuru Reviewer. When you associate an AWS CodeCommit repository with Amazon CodeGuru Reviewer, Amazon CodeGuru Reviewer will provide recommendations for each pull request raised within the repository. You can view recommendations in the AWS CodeCommit repository.</p> <p>You can associate a GitHub repository using the Amazon CodeGuru Reviewer console.</p>
		 * Post /associations
		 * @return {AssociateRepositoryResponse} Success
		 */
		AssociateRepository(callback: (data : AssociateRepositoryResponse) => any, requestBody: AssociateRepositoryBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + '/associations', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Lists repository associations. You can optionally filter on one or more of the following recommendation properties: provider types, states, names, and owners.
		 * Get /associations
		 * @param {Array<ProviderType>} ProviderType List of provider types to use as a filter.
		 * @param {Array<RepositoryAssociationState>} State List of states to use as a filter.
		 * @param {Array<Name>} Name List of repository names to use as a filter.
		 * @param {Array<Owner>} Owner List of owners to use as a filter. For GitHub, this is name of the GitHub account that was used to associate the repository. For AWS CodeCommit, it is the name of the CodeCommit account that was used to associate the repository.
		 * @param {number} MaxResults The maximum number of repository association results returned by <code>ListRepositoryAssociations</code> in paginated output. When this parameter is used, <code>ListRepositoryAssociations</code> only returns <code>maxResults</code> results in a single page with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListRepositoryAssociations</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 25. If this parameter is not used, <code>ListRepositoryAssociations</code> returns up to 25 results and a <code>nextToken</code> value if applicable. 
		 * @param {string} NextToken <p>The <code>nextToken</code> value returned from a previous paginated <code>ListRepositoryAssociations</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. </p> <note> <p>Treat this token as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>
		 * @return {ListRepositoryAssociationsResponse} Success
		 */
		ListRepositoryAssociations(ProviderType: Array<ProviderType>, State: Array<RepositoryAssociationState>, Name: Array<Name>, Owner: Array<Owner>, MaxResults: number, NextToken: string, callback: (data : ListRepositoryAssociationsResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/associations?' + ProviderType.map(z => `ProviderType=${z}`).join('&') + '&' + State.map(z => `State=${z}`).join('&') + '&' + Name.map(z => `Name=${z}`).join('&') + '&' + Owner.map(z => `Owner=${z}`).join('&') + '&MaxResults=' + MaxResults + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Returns the metadaata associated with the code review along with its status.
		 * Get /codereviews/{CodeReviewArn}
		 * @param {string} CodeReviewArn  The Amazon Resource Name (ARN) of the code review to describe. 
		 * @return {DescribeCodeReviewResponse} Success
		 */
		DescribeCodeReview(CodeReviewArn: string, callback: (data : DescribeCodeReviewResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/codereviews/' + (CodeReviewArn == null ? '' : encodeURIComponent(CodeReviewArn)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Describes the customer feedback for a CodeGuru Reviewer recommendation.
		 * Get /feedback/{CodeReviewArn}#RecommendationId
		 * @param {string} CodeReviewArn  The Amazon Resource Name (ARN) that identifies the code review. 
		 * @param {string} RecommendationId  The recommendation ID that can be used to track the provided recommendations and then to collect the feedback. 
		 * @param {string} UserId  Optional parameter to describe the feedback for a given user. If this is not supplied, it defaults to the user making the request. 
		 * @return {DescribeRecommendationFeedbackResponse} Success
		 */
		DescribeRecommendationFeedback(CodeReviewArn: string, RecommendationId: string, UserId: string, callback: (data : DescribeRecommendationFeedbackResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/feedback/' + (CodeReviewArn == null ? '' : encodeURIComponent(CodeReviewArn)) + '#RecommendationId&RecommendationId=' + (RecommendationId == null ? '' : encodeURIComponent(RecommendationId)) + '&UserId=' + (UserId == null ? '' : encodeURIComponent(UserId)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Describes a repository association.
		 * Get /associations/{AssociationArn}
		 * @param {string} AssociationArn The Amazon Resource Name (ARN) identifying the association. You can retrieve this ARN by calling <code>ListRepositories</code>.
		 * @return {DescribeRepositoryAssociationResponse} Success
		 */
		DescribeRepositoryAssociation(AssociationArn: string, callback: (data : DescribeRepositoryAssociationResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/associations/' + (AssociationArn == null ? '' : encodeURIComponent(AssociationArn)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Removes the association between Amazon CodeGuru Reviewer and a repository.
		 * Delete /associations/{AssociationArn}
		 * @param {string} AssociationArn The Amazon Resource Name (ARN) identifying the association.
		 * @return {DisassociateRepositoryResponse} Success
		 */
		DisassociateRepository(AssociationArn: string, callback: (data : DisassociateRepositoryResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + '/associations/' + (AssociationArn == null ? '' : encodeURIComponent(AssociationArn)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Lists all the code reviews that the customer has created in the past 90 days.
		 * Get /codereviews#Type
		 * @param {Array<ProviderType>} ProviderTypes  List of provider types for filtering that needs to be applied before displaying the result. For example, "providerTypes=[GitHub]" will list code reviews from GitHub. 
		 * @param {Array<JobState>} States  List of states for filtering that needs to be applied before displaying the result. For example, "states=[Pending]" will list code reviews in the Pending state. 
		 * @param {Array<Name>} RepositoryNames  List of repository names for filtering that needs to be applied before displaying the result. 
		 * @param {Type} Type  The type of code reviews to list in the response. 
		 * @param {number} MaxResults  The maximum number of results that are returned per call. The default is 100. 
		 * @param {string} NextToken  If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. 
		 * @return {ListCodeReviewsResponse} Success
		 */
		ListCodeReviews(ProviderTypes: Array<ProviderType>, States: Array<JobState>, RepositoryNames: Array<Name>, Type: Type, MaxResults: number, NextToken: string, callback: (data : ListCodeReviewsResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/codereviews#Type?' + ProviderTypes.map(z => `ProviderTypes=${z}`).join('&') + '&' + States.map(z => `States=${z}`).join('&') + '&' + RepositoryNames.map(z => `RepositoryNames=${z}`).join('&') + '&Type=' + Type + '&MaxResults=' + MaxResults + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Lists the customer feedback for a CodeGuru Reviewer recommendation for all users. This API will be used from the console to extract the previously given feedback by the user to pre-populate the feedback emojis for all recommendations.
		 * Get /feedback/{CodeReviewArn}/RecommendationFeedback
		 * @param {string} NextToken  If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. 
		 * @param {number} MaxResults  The maximum number of results that are returned per call. The default is 100. 
		 * @param {string} CodeReviewArn  The Amazon Resource Name (ARN) that identifies the code review. 
		 * @param {Array<UserId>} UserIds  Filter on userIds that need to be applied before displaying the result. This can be used to query all the recommendation feedback for a code review from a given user. 
		 * @param {Array<RecommendationId>} RecommendationIds  Filter on recommendationIds that need to be applied before displaying the result. This can be used to query all the recommendation feedback for a given recommendation. 
		 * @return {ListRecommendationFeedbackResponse} Success
		 */
		ListRecommendationFeedback(NextToken: string, MaxResults: number, CodeReviewArn: string, UserIds: Array<UserId>, RecommendationIds: Array<RecommendationId>, callback: (data : ListRecommendationFeedbackResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/feedback/' + (CodeReviewArn == null ? '' : encodeURIComponent(CodeReviewArn)) + '/RecommendationFeedback?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults + '&' + UserIds.map(z => `UserIds=${z}`).join('&') + '&' + RecommendationIds.map(z => `RecommendationIds=${z}`).join('&'), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Returns the list of all recommendations for a completed code review.
		 * Get /codereviews/{CodeReviewArn}/Recommendations
		 * @param {string} NextToken  Pagination token. 
		 * @param {number} MaxResults  The maximum number of results that are returned per call. The default is 100. 
		 * @param {string} CodeReviewArn  The Amazon Resource Name (ARN) of the code review to describe. 
		 * @return {ListRecommendationsResponse} Success
		 */
		ListRecommendations(NextToken: string, MaxResults: number, CodeReviewArn: string, callback: (data : ListRecommendationsResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + '/codereviews/' + (CodeReviewArn == null ? '' : encodeURIComponent(CodeReviewArn)) + '/Recommendations?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults, callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Stores customer feedback for a CodeGuru-Reviewer recommendation. When this API is called again with different reactions the previous feedback is overwritten.
		 * Put /feedback
		 * @return {PutRecommendationFeedbackResponse} Success
		 */
		PutRecommendationFeedback(callback: (data : PutRecommendationFeedbackResponse) => any, requestBody: PutRecommendationFeedbackBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.put(this.baseUri + '/feedback', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}
	}

	export interface AssociateRepositoryBody {

		/**Information about a repository. */
		Repository: string;

		/**
		 * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p> <p>To add a new repository association, this parameter specifies a unique identifier for the new repository association that helps ensure idempotency.</p> <p>If you use the AWS CLI or one of the AWS SDKs to call this operation, you can leave this parameter empty. The CLI or SDK generates a random UUID for you and includes that in the request. If you don't use the SDK and instead generate a raw HTTP request to the Secrets Manager service endpoint, you must generate a ClientRequestToken yourself for new versions and include that value in the request.</p> <p>You typically interact with this value if you implement your own retry logic and want to ensure that a given repository association is not created twice. We recommend that you generate a UUID-type value to ensure uniqueness within the specified repository association.</p> <p>Amazon CodeGuru Reviewer uses this value to prevent the accidental creation of duplicate repository associations if there are failures and retries. </p>
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[\w-]+$
		 */
		ClientRequestToken?: string;
	}

	export interface PutRecommendationFeedbackBody {

		/**
		 * The Amazon Resource Name (ARN) that identifies the code review.
		 * Max length: 1600
		 * Min length: 1
		 * Pattern: ^arn:aws[^:\s]*:codeguru-reviewer:[^:\s]+:[\d]{12}:[a-z-]+:[\w-]+$
		 */
		CodeReviewArn: string;

		/**
		 * The recommendation ID that can be used to track the provided recommendations and then to collect the feedback.
		 * Max length: 64
		 * Min length: 1
		 */
		RecommendationId: string;

		/**
		 * List for storing reactions. Reactions are utf-8 text code for emojis. If you send an empty list it clears all your feedback.
		 * Minimum items: 0
		 * Maximum items: 1
		 */
		Reactions: Array<Reaction>;
	}

}

