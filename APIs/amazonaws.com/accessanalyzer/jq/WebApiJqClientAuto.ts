///<reference path="HttpClient.ts" />
namespace My_Demo_Client {

	/**The response to the request to create an analyzer. */
	export interface CreateAnalyzerResponse {
		arn?: string;
	}


	/**An criterion statement in an archive rule. Each archive rule may have multiple criteria. */
	export interface InlineArchiveRule {
		filter: FilterCriteriaMap;
		ruleName: string;
	}


	/**The criteria to use in the filter that defines the archive rule. */
	export interface Criterion {
		contains?: Array<String>;
		eq?: Array<String>;
		exists?: boolean;
		neq?: Array<String>;
	}


	/**The response to the request. */
	export interface GetAnalyzedResourceResponse {

		/**Contains details about the analyzed resource. */
		resource?: AnalyzedResource;
	}


	/**The response to the request. */
	export interface GetAnalyzerResponse {

		/**Contains information about the analyzer. */
		analyzer: AnalyzerSummary;
	}


	/**The response to the request. */
	export interface GetArchiveRuleResponse {

		/**Contains information about an archive rule. */
		archiveRule: ArchiveRuleSummary;
	}


	/**The response to the request. */
	export interface GetFindingResponse {

		/**Contains information about a finding. */
		finding?: Finding;
	}


	/**The response to the request. */
	export interface ListAnalyzedResourcesResponse {
		analyzedResources: Array<AnalyzedResourceSummary>;
		nextToken?: string;
	}


	/**The response to the request. */
	export interface ListAnalyzersResponse {
		analyzers: Array<AnalyzerSummary>;
		nextToken?: string;
	}


	/**The response to the request. */
	export interface ListArchiveRulesResponse {
		archiveRules: Array<ArchiveRuleSummary>;
		nextToken?: string;
	}


	/**The response to the request. */
	export interface ListFindingsResponse {
		findings: Array<FindingSummary>;
		nextToken?: string;
	}

	export enum OrderBy { ASC = 0, DESC = 1 }


	/**The response to the request. */
	export interface ListTagsForResourceResponse {
		tags?: TagsMap;
	}

	export enum ResourceType { AWS::IAM::Role = 0, AWS::KMS::Key = 1, AWS::Lambda::Function = 2, AWS::Lambda::LayerVersion = 3, AWS::S3::Bucket = 4, AWS::SQS::Queue = 5 }

	export enum FindingStatus { ACTIVE = 0, ARCHIVED = 1, RESOLVED = 2 }


	/**Contains details about the analyzed resource. */
	export interface AnalyzedResource {
		actions?: Array<String>;
		analyzedAt: Date;
		createdAt: Date;
		error?: string;
		isPublic: boolean;
		resourceArn: string;
		resourceOwnerAccount: string;
		resourceType: AnalyzedResourceResourceType;
		sharedVia?: Array<String>;
		status?: AnalyzedResourceStatus;
		updatedAt: Date;
	}

	export enum AnalyzedResourceResourceType { AWS::IAM::Role = 0, AWS::KMS::Key = 1, AWS::Lambda::Function = 2, AWS::Lambda::LayerVersion = 3, AWS::S3::Bucket = 4, AWS::SQS::Queue = 5 }

	export enum AnalyzedResourceStatus { ACTIVE = 0, ARCHIVED = 1, RESOLVED = 2 }


	/**Contains the ARN of the analyzed resource. */
	export interface AnalyzedResourceSummary {
		resourceArn: string;
		resourceOwnerAccount: string;
		resourceType: AnalyzedResourceSummaryResourceType;
	}

	export enum AnalyzedResourceSummaryResourceType { AWS::IAM::Role = 0, AWS::KMS::Key = 1, AWS::Lambda::Function = 2, AWS::Lambda::LayerVersion = 3, AWS::S3::Bucket = 4, AWS::SQS::Queue = 5 }

	export enum AnalyzerStatus { ACTIVE = 0, CREATING = 1, DISABLED = 2, FAILED = 3 }


	/**Provides more details about the current status of the analyzer. For example, if the creation for the analyzer fails, a <code>Failed</code> status is displayed. For an analyzer with organization as the type, this failure can be due to an issue with creating the service-linked roles required in the member accounts of the AWS organization. */
	export interface StatusReason {
		code: StatusReasonCode;
	}

	export enum StatusReasonCode { AWS_SERVICE_ACCESS_DISABLED = 0, DELEGATED_ADMINISTRATOR_DEREGISTERED = 1, ORGANIZATION_DELETED = 2, SERVICE_LINKED_ROLE_CREATION_FAILED = 3 }

	export enum Type { ACCOUNT = 0, ORGANIZATION = 1 }


	/**Contains information about the analyzer. */
	export interface AnalyzerSummary {
		arn: string;
		createdAt: Date;
		lastResourceAnalyzed?: string;
		lastResourceAnalyzedAt?: Date;
		name: string;
		status: AnalyzerSummaryStatus;

		/**Provides more details about the current status of the analyzer. For example, if the creation for the analyzer fails, a <code>Failed</code> status is displayed. For an analyzer with organization as the type, this failure can be due to an issue with creating the service-linked roles required in the member accounts of the AWS organization. */
		statusReason?: StatusReason;
		tags?: TagsMap;
		type: AnalyzerSummaryType;
	}

	export enum AnalyzerSummaryStatus { ACTIVE = 0, CREATING = 1, DISABLED = 2, FAILED = 3 }

	export enum AnalyzerSummaryType { ACCOUNT = 0, ORGANIZATION = 1 }


	/**Contains information about an archive rule. */
	export interface ArchiveRuleSummary {
		createdAt: Date;
		filter: FilterCriteriaMap;
		ruleName: string;
		updatedAt: Date;
	}


	/**Creates an analyzer. */
	export interface CreateAnalyzerRequest {
		analyzerName: string;
		archiveRules?: Array<InlineArchiveRule>;
		clientToken?: string;
		tags?: TagsMap;
		type: CreateAnalyzerRequestType;
	}

	export enum CreateAnalyzerRequestType { ACCOUNT = 0, ORGANIZATION = 1 }


	/**Creates an archive rule. */
	export interface CreateArchiveRuleRequest {
		clientToken?: string;
		filter: FilterCriteriaMap;
		ruleName: string;
	}


	/**Contains information about a finding. */
	export interface Finding {
		action?: Array<String>;
		analyzedAt: Date;
		condition: ConditionKeyMap;
		createdAt: Date;
		error?: string;
		id: string;
		isPublic?: boolean;
		principal?: PrincipalMap;
		resource?: string;
		resourceOwnerAccount: string;
		resourceType: FindingResourceType;
		sources?: Array<FindingSource>;
		status: FindingStatus;
		updatedAt: Date;
	}

	export enum FindingResourceType { AWS::IAM::Role = 0, AWS::KMS::Key = 1, AWS::Lambda::Function = 2, AWS::Lambda::LayerVersion = 3, AWS::S3::Bucket = 4, AWS::SQS::Queue = 5 }

	export enum FindingStatus { ACTIVE = 0, ARCHIVED = 1, RESOLVED = 2 }


	/**Includes details about how the access that generated the finding is granted. This is populated for Amazon S3 bucket findings. */
	export interface FindingSourceDetail {
		accessPointArn?: string;
	}

	export enum FindingSourceType { BUCKET_ACL = 0, POLICY = 1, S3_ACCESS_POINT = 2 }


	/**The source of the finding. This indicates how the access that generated the finding is granted. It is populated for Amazon S3 bucket findings. */
	export interface FindingSource {

		/**Includes details about how the access that generated the finding is granted. This is populated for Amazon S3 bucket findings. */
		detail?: FindingSourceDetail;
		type: FindingSourceType;
	}

	export enum FindingSourceType { BUCKET_ACL = 0, POLICY = 1, S3_ACCESS_POINT = 2 }

	export enum FindingStatusUpdate { ACTIVE = 0, ARCHIVED = 1 }


	/**Contains information about a finding. */
	export interface FindingSummary {
		action?: Array<String>;
		analyzedAt: Date;
		condition: ConditionKeyMap;
		createdAt: Date;
		error?: string;
		id: string;
		isPublic?: boolean;
		principal?: PrincipalMap;
		resource?: string;
		resourceOwnerAccount: string;
		resourceType: FindingSummaryResourceType;
		sources?: Array<FindingSource>;
		status: FindingSummaryStatus;
		updatedAt: Date;
	}

	export enum FindingSummaryResourceType { AWS::IAM::Role = 0, AWS::KMS::Key = 1, AWS::Lambda::Function = 2, AWS::Lambda::LayerVersion = 3, AWS::S3::Bucket = 4, AWS::SQS::Queue = 5 }

	export enum FindingSummaryStatus { ACTIVE = 0, ARCHIVED = 1, RESOLVED = 2 }


	/**Retrieves a list of resources that have been analyzed. */
	export interface ListAnalyzedResourcesRequest {
		analyzerArn: string;
		maxResults?: number;
		nextToken?: string;
		resourceType?: ListAnalyzedResourcesRequestResourceType;
	}

	export enum ListAnalyzedResourcesRequestResourceType { AWS::IAM::Role = 0, AWS::KMS::Key = 1, AWS::Lambda::Function = 2, AWS::Lambda::LayerVersion = 3, AWS::S3::Bucket = 4, AWS::SQS::Queue = 5 }


	/**The criteria used to sort. */
	export interface SortCriteria {
		attributeName?: string;
		orderBy?: SortCriteriaOrderBy;
	}

	export enum SortCriteriaOrderBy { ASC = 0, DESC = 1 }


	/**Retrieves a list of findings generated by the specified analyzer. */
	export interface ListFindingsRequest {
		analyzerArn: string;
		filter?: FilterCriteriaMap;
		maxResults?: number;
		nextToken?: string;

		/**The criteria used to sort. */
		sort?: SortCriteria;
	}

	export enum ReasonCode { AWS_SERVICE_ACCESS_DISABLED = 0, DELEGATED_ADMINISTRATOR_DEREGISTERED = 1, ORGANIZATION_DELETED = 2, SERVICE_LINKED_ROLE_CREATION_FAILED = 3 }


	/**Starts a scan of the policies applied to the specified resource. */
	export interface StartResourceScanRequest {
		analyzerArn: string;
		resourceArn: string;
	}


	/**Adds a tag to the specified resource. */
	export interface TagResourceRequest {
		tags: TagsMap;
	}


	/**Updates the specified archive rule. */
	export interface UpdateArchiveRuleRequest {
		clientToken?: string;
		filter: FilterCriteriaMap;
	}


	/**Updates findings with the new values provided in the request. */
	export interface UpdateFindingsRequest {
		analyzerArn: string;
		clientToken?: string;
		ids?: Array<FindingId>;
		resourceArn?: string;
		status: UpdateFindingsRequestStatus;
	}

	export enum UpdateFindingsRequestStatus { ACTIVE = 0, ARCHIVED = 1 }

	export class DemoClient {
		constructor(private baseUri: string = HttpClient.locationOrigin, private httpClient: HttpClientBase = new HttpClient(), private error?: (xhr: JQueryXHR, ajaxOptions: string, thrown: string) => any, private statusCode?: { [key: string]: any; }) {
		}

		/**
		 * Creates an analyzer for your account.
		 * Put analyzer
		 * @return {CreateAnalyzerResponse} Success
		 */
		CreateAnalyzer(callback: (data : CreateAnalyzerResponse) => any, requestBody: CreateAnalyzerBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.put(this.baseUri + 'analyzer', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Retrieves a list of analyzers.
		 * Get analyzer
		 * @param {number} maxResults The maximum number of results to return in the response.
		 * @param {string} nextToken A token used for pagination of results returned.
		 * @param {Type} type The type of analyzer.
		 * @return {ListAnalyzersResponse} Success
		 */
		ListAnalyzers(maxResults: number, nextToken: string, type: Type, callback: (data : ListAnalyzersResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'analyzer?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&type=' + type, callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Creates an archive rule for the specified analyzer. Archive rules automatically archive findings that meet the criteria you define when you create the rule.
		 * Put analyzer/{analyzerName}/archive-rule
		 * @param {string} analyzerName The name of the created analyzer.
		 * @return {void} Success
		 */
		CreateArchiveRule(analyzerName: string, callback: (data : void) => any, requestBody: CreateArchiveRuleBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.put(this.baseUri + 'analyzer/' + (analyzerName == null ? '' : encodeURIComponent(analyzerName)) + '/archive-rule', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Retrieves a list of archive rules created for the specified analyzer.
		 * Get analyzer/{analyzerName}/archive-rule
		 * @param {string} analyzerName The name of the analyzer to retrieve rules from.
		 * @param {number} maxResults The maximum number of results to return in the request.
		 * @param {string} nextToken A token used for pagination of results returned.
		 * @return {ListArchiveRulesResponse} Success
		 */
		ListArchiveRules(analyzerName: string, maxResults: number, nextToken: string, callback: (data : ListArchiveRulesResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'analyzer/' + (analyzerName == null ? '' : encodeURIComponent(analyzerName)) + '/archive-rule&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Deletes the specified analyzer. When you delete an analyzer, Access Analyzer is disabled for the account in the current or specific Region. All findings that were generated by the analyzer are deleted. You cannot undo this action.
		 * Delete analyzer/{analyzerName}
		 * @param {string} analyzerName The name of the analyzer to delete.
		 * @param {string} clientToken A client token.
		 * @return {void} Success
		 */
		DeleteAnalyzer(analyzerName: string, clientToken: string, callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + 'analyzer/' + (analyzerName == null ? '' : encodeURIComponent(analyzerName)) + '&clientToken=' + (clientToken == null ? '' : encodeURIComponent(clientToken)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Retrieves information about the specified analyzer.
		 * Get analyzer/{analyzerName}
		 * @param {string} analyzerName The name of the analyzer retrieved.
		 * @return {GetAnalyzerResponse} Success
		 */
		GetAnalyzer(analyzerName: string, callback: (data : GetAnalyzerResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'analyzer/' + (analyzerName == null ? '' : encodeURIComponent(analyzerName)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Deletes the specified archive rule.
		 * Delete analyzer/{analyzerName}/archive-rule/{ruleName}
		 * @param {string} analyzerName The name of the analyzer that associated with the archive rule to delete.
		 * @param {string} clientToken A client token.
		 * @param {string} ruleName The name of the rule to delete.
		 * @return {void} Success
		 */
		DeleteArchiveRule(analyzerName: string, clientToken: string, ruleName: string, callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + 'analyzer/' + (analyzerName == null ? '' : encodeURIComponent(analyzerName)) + '/archive-rule/' + (ruleName == null ? '' : encodeURIComponent(ruleName)) + '&clientToken=' + (clientToken == null ? '' : encodeURIComponent(clientToken)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Retrieves information about an archive rule.
		 * Get analyzer/{analyzerName}/archive-rule/{ruleName}
		 * @param {string} analyzerName The name of the analyzer to retrieve rules from.
		 * @param {string} ruleName The name of the rule to retrieve.
		 * @return {GetArchiveRuleResponse} Success
		 */
		GetArchiveRule(analyzerName: string, ruleName: string, callback: (data : GetArchiveRuleResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'analyzer/' + (analyzerName == null ? '' : encodeURIComponent(analyzerName)) + '/archive-rule/' + (ruleName == null ? '' : encodeURIComponent(ruleName)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Updates the criteria and values for the specified archive rule.
		 * Put analyzer/{analyzerName}/archive-rule/{ruleName}
		 * @param {string} analyzerName The name of the analyzer to update the archive rules for.
		 * @param {string} ruleName The name of the rule to update.
		 * @return {void} Success
		 */
		UpdateArchiveRule(analyzerName: string, ruleName: string, callback: (data : void) => any, requestBody: UpdateArchiveRuleBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.put(this.baseUri + 'analyzer/' + (analyzerName == null ? '' : encodeURIComponent(analyzerName)) + '/archive-rule/' + (ruleName == null ? '' : encodeURIComponent(ruleName)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Retrieves information about a resource that was analyzed.
		 * Get analyzed-resource#analyzerArn&resourceArn
		 * @param {string} analyzerArn The ARN of the analyzer to retrieve information from.
		 * @param {string} resourceArn The ARN of the resource to retrieve information about.
		 * @return {GetAnalyzedResourceResponse} Success
		 */
		GetAnalyzedResource(analyzerArn: string, resourceArn: string, callback: (data : GetAnalyzedResourceResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'analyzed-resource#analyzerArn&resourceArn?analyzerArn=' + (analyzerArn == null ? '' : encodeURIComponent(analyzerArn)) + '&resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Retrieves information about the specified finding.
		 * Get finding/{id}#analyzerArn
		 * @param {string} analyzerArn The ARN of the analyzer that generated the finding.
		 * @param {string} id The ID of the finding to retrieve.
		 * @return {GetFindingResponse} Success
		 */
		GetFinding(analyzerArn: string, id: string, callback: (data : GetFindingResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'finding/' + (id == null ? '' : encodeURIComponent(id)) + '#analyzerArn?analyzerArn=' + (analyzerArn == null ? '' : encodeURIComponent(analyzerArn)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Retrieves a list of resources of the specified type that have been analyzed by the specified analyzer..
		 * Post analyzed-resource
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListAnalyzedResourcesResponse} Success
		 */
		ListAnalyzedResources(maxResults: string, nextToken: string, callback: (data : ListAnalyzedResourcesResponse) => any, requestBody: ListAnalyzedResourcesBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'analyzed-resource?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Retrieves a list of findings generated by the specified analyzer.
		 * Post finding
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListFindingsResponse} Success
		 */
		ListFindings(maxResults: string, nextToken: string, callback: (data : ListFindingsResponse) => any, requestBody: ListFindingsBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'finding?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Updates the status for the specified findings.
		 * Put finding
		 * @return {void} Success
		 */
		UpdateFindings(callback: (data : void) => any, requestBody: UpdateFindingsBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.put(this.baseUri + 'finding', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Retrieves a list of tags applied to the specified resource.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn The ARN of the resource to retrieve tags from.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string, callback: (data : ListTagsForResourceResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Adds a tag to the specified resource.
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn The ARN of the resource to add the tag to.
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, callback: (data : TagResourceResponse) => any, requestBody: TagResourceBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Immediately starts a scan of the policies applied to the specified resource.
		 * Post resource/scan
		 * @return {void} Success
		 */
		StartResourceScan(callback: (data : void) => any, requestBody: StartResourceScanBody, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'resource/scan', requestBody, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Removes a tag from the specified resource.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The ARN of the resource to remove the tag from.
		 * @param {Array<String>} tagKeys The key for the tag to add.
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<String>, callback: (data : UntagResourceResponse) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${z}`).join('&'), callback, this.error, this.statusCode, headersHandler);
		}
	}

	export interface CreateAnalyzerBody {

		/**
		 * The name of the analyzer to create.
		 * Max length: 255
		 * Min length: 1
		 * Pattern: ^[A-Za-z][A-Za-z0-9_.-]*$
		 */
		analyzerName: string;

		/**Specifies the archive rules to add for the analyzer. Archive rules automatically archive findings that meet the criteria you define for the rule. */
		archiveRules?: Array<InlineArchiveRule>;

		/**A client token. */
		clientToken?: string;

		/**The tags to apply to the analyzer. */
		tags?: string;

		/**The type of analyzer to create. Only ACCOUNT analyzers are supported. You can create only one analyzer per account per Region. */
		type: CreateAnalyzerBodyType;
	}

	export enum CreateAnalyzerBodyType { ACCOUNT = 0, ORGANIZATION = 1 }

	export interface CreateArchiveRuleBody {

		/**A client token. */
		clientToken?: string;

		/**The criteria for the rule. */
		filter: string;

		/**
		 * The name of the rule to create.
		 * Max length: 255
		 * Min length: 1
		 * Pattern: ^[A-Za-z][A-Za-z0-9_.-]*$
		 */
		ruleName: string;
	}

	export interface UpdateArchiveRuleBody {

		/**A client token. */
		clientToken?: string;

		/**A filter to match for the rules to update. Only rules that match the filter are updated. */
		filter: string;
	}

	export interface ListAnalyzedResourcesBody {

		/**
		 * The ARN of the analyzer to retrieve a list of analyzed resources from.
		 * Pattern: ^[^:]*:[^:]*:[^:]*:[^:]*:[^:]*:analyzer/.{1,255}$
		 */
		analyzerArn: string;

		/**The maximum number of results to return in the response. */
		maxResults?: number;

		/**A token used for pagination of results returned. */
		nextToken?: string;

		/**The type of resource. */
		resourceType?: ListAnalyzedResourcesBodyResourceType;
	}

	export enum ListAnalyzedResourcesBodyResourceType { AWS::IAM::Role = 0, AWS::KMS::Key = 1, AWS::Lambda::Function = 2, AWS::Lambda::LayerVersion = 3, AWS::S3::Bucket = 4, AWS::SQS::Queue = 5 }

	export interface ListFindingsBody {

		/**
		 * The ARN of the analyzer to retrieve findings from.
		 * Pattern: ^[^:]*:[^:]*:[^:]*:[^:]*:[^:]*:analyzer/.{1,255}$
		 */
		analyzerArn: string;

		/**A filter to match for the findings to return. */
		filter?: string;

		/**The maximum number of results to return in the response. */
		maxResults?: number;

		/**A token used for pagination of results returned. */
		nextToken?: string;

		/**The criteria used to sort. */
		sort?: string;
	}

	export interface UpdateFindingsBody {

		/**
		 * The ARN of the analyzer that generated the findings to update.
		 * Pattern: ^[^:]*:[^:]*:[^:]*:[^:]*:[^:]*:analyzer/.{1,255}$
		 */
		analyzerArn: string;

		/**A client token. */
		clientToken?: string;

		/**The IDs of the findings to update. */
		ids?: Array<FindingId>;

		/**
		 * The ARN of the resource identified in the finding.
		 * Pattern: arn:[^:]*:[^:]*:[^:]*:[^:]*:.*$
		 */
		resourceArn?: string;

		/**The state represents the action to take to update the finding Status. Use <code>ARCHIVE</code> to change an Active finding to an Archived finding. Use <code>ACTIVE</code> to change an Archived finding to an Active finding. */
		status: UpdateFindingsBodyStatus;
	}

	export enum UpdateFindingsBodyStatus { ACTIVE = 0, ARCHIVED = 1 }

	export interface TagResourceBody {

		/**The tags to add to the resource. */
		tags: string;
	}

	export interface StartResourceScanBody {

		/**
		 * The ARN of the analyzer to use to scan the policies applied to the specified resource.
		 * Pattern: ^[^:]*:[^:]*:[^:]*:[^:]*:[^:]*:analyzer/.{1,255}$
		 */
		analyzerArn: string;

		/**
		 * The ARN of the resource to scan.
		 * Pattern: arn:[^:]*:[^:]*:[^:]*:[^:]*:.*$
		 */
		resourceArn: string;
	}

}

