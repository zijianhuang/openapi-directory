import {HttpClient} from 'aurelia-fetch-client';
import {autoinject} from 'aurelia-framework';
export namespace My_Demo_Client {

	/**An object representing an Amazon Cognito identity pool. */
	export interface IdentityPool {
		IdentityPoolId: string;
		IdentityPoolName: string;
		AllowUnauthenticatedIdentities: boolean;
		AllowClassicFlow?: boolean;
		SupportedLoginProviders?: IdentityProviders;
		DeveloperProviderName?: string;
		OpenIdConnectProviderARNs?: Array<ARNString>;
		CognitoIdentityProviders?: Array<CognitoIdentityProvider>;
		SamlProviderARNs?: Array<ARNString>;
		IdentityPoolTags?: IdentityPoolTagsType;
	}


	/**Input to the CreateIdentityPool action. */
	export interface CreateIdentityPoolInput {
		IdentityPoolName: string;
		AllowUnauthenticatedIdentities: boolean;
		AllowClassicFlow?: boolean;
		SupportedLoginProviders?: IdentityProviders;
		DeveloperProviderName?: string;
		OpenIdConnectProviderARNs?: Array<ARNString>;
		CognitoIdentityProviders?: Array<CognitoIdentityProvider>;
		SamlProviderARNs?: Array<ARNString>;
		IdentityPoolTags?: IdentityPoolTagsType;
	}


	/**Returned in response to a successful <code>DeleteIdentities</code> operation. */
	export interface DeleteIdentitiesResponse {
		UnprocessedIdentityIds?: Array<UnprocessedIdentityId>;
	}


	/**Input to the <code>DeleteIdentities</code> action. */
	export interface DeleteIdentitiesInput {
		IdentityIdsToDelete: Array<IdentityId>;
	}


	/**Input to the DeleteIdentityPool action. */
	export interface DeleteIdentityPoolInput {
		IdentityPoolId: string;
	}


	/**A description of the identity. */
	export interface IdentityDescription {
		IdentityId?: string;
		Logins?: Array<IdentityProviderName>;
		CreationDate?: Date;
		LastModifiedDate?: Date;
	}


	/**Input to the <code>DescribeIdentity</code> action. */
	export interface DescribeIdentityInput {
		IdentityId: string;
	}


	/**Input to the DescribeIdentityPool action. */
	export interface DescribeIdentityPoolInput {
		IdentityPoolId: string;
	}


	/**Returned in response to a successful <code>GetCredentialsForIdentity</code> operation. */
	export interface GetCredentialsForIdentityResponse {
		IdentityId?: string;

		/**Credentials for the provided identity ID. */
		Credentials?: Credentials;
	}


	/**Input to the <code>GetCredentialsForIdentity</code> action. */
	export interface GetCredentialsForIdentityInput {
		IdentityId: string;
		Logins?: LoginsMap;
		CustomRoleArn?: string;
	}


	/**Returned in response to a GetId request. */
	export interface GetIdResponse {
		IdentityId?: string;
	}


	/**Input to the GetId action. */
	export interface GetIdInput {
		AccountId?: string;
		IdentityPoolId: string;
		Logins?: LoginsMap;
	}


	/**Returned in response to a successful <code>GetIdentityPoolRoles</code> operation. */
	export interface GetIdentityPoolRolesResponse {
		IdentityPoolId?: string;
		Roles?: RolesMap;
		RoleMappings?: RoleMappingMap;
	}


	/**Input to the <code>GetIdentityPoolRoles</code> action. */
	export interface GetIdentityPoolRolesInput {
		IdentityPoolId: string;
	}


	/**Returned in response to a successful GetOpenIdToken request. */
	export interface GetOpenIdTokenResponse {
		IdentityId?: string;
		Token?: string;
	}


	/**Input to the GetOpenIdToken action. */
	export interface GetOpenIdTokenInput {
		IdentityId: string;
		Logins?: LoginsMap;
	}


	/**Returned in response to a successful <code>GetOpenIdTokenForDeveloperIdentity</code> request. */
	export interface GetOpenIdTokenForDeveloperIdentityResponse {
		IdentityId?: string;
		Token?: string;
	}


	/**Input to the <code>GetOpenIdTokenForDeveloperIdentity</code> action. */
	export interface GetOpenIdTokenForDeveloperIdentityInput {
		IdentityPoolId: string;
		IdentityId?: string;
		Logins: LoginsMap;
		TokenDuration?: number;
	}


	/**The response to a ListIdentities request. */
	export interface ListIdentitiesResponse {
		IdentityPoolId?: string;
		Identities?: Array<IdentityDescription>;
		NextToken?: string;
	}


	/**Input to the ListIdentities action. */
	export interface ListIdentitiesInput {
		IdentityPoolId: string;
		MaxResults: number;
		NextToken?: string;
		HideDisabled?: boolean;
	}


	/**The result of a successful ListIdentityPools action. */
	export interface ListIdentityPoolsResponse {
		IdentityPools?: Array<IdentityPoolShortDescription>;
		NextToken?: string;
	}


	/**Input to the ListIdentityPools action. */
	export interface ListIdentityPoolsInput {
		MaxResults: number;
		NextToken?: string;
	}

	export interface ListTagsForResourceResponse {
		Tags?: IdentityPoolTagsType;
	}

	export interface ListTagsForResourceInput {
		ResourceArn: string;
	}


	/**Returned in response to a successful <code>LookupDeveloperIdentity</code> action. */
	export interface LookupDeveloperIdentityResponse {
		IdentityId?: string;
		DeveloperUserIdentifierList?: Array<DeveloperUserIdentifier>;
		NextToken?: string;
	}


	/**Input to the <code>LookupDeveloperIdentityInput</code> action. */
	export interface LookupDeveloperIdentityInput {
		IdentityPoolId: string;
		IdentityId?: string;
		DeveloperUserIdentifier?: string;
		MaxResults?: number;
		NextToken?: string;
	}


	/**Returned in response to a successful <code>MergeDeveloperIdentities</code> action. */
	export interface MergeDeveloperIdentitiesResponse {
		IdentityId?: string;
	}


	/**Input to the <code>MergeDeveloperIdentities</code> action. */
	export interface MergeDeveloperIdentitiesInput {
		SourceUserIdentifier: string;
		DestinationUserIdentifier: string;
		DeveloperProviderName: string;
		IdentityPoolId: string;
	}


	/**Input to the <code>SetIdentityPoolRoles</code> action. */
	export interface SetIdentityPoolRolesInput {
		IdentityPoolId: string;
		Roles: RolesMap;
		RoleMappings?: RoleMappingMap;
	}

	export interface TagResourceInput {
		ResourceArn: string;
		Tags: IdentityPoolTagsType;
	}


	/**Input to the <code>UnlinkDeveloperIdentity</code> action. */
	export interface UnlinkDeveloperIdentityInput {
		IdentityId: string;
		IdentityPoolId: string;
		DeveloperProviderName: string;
		DeveloperUserIdentifier: string;
	}


	/**Input to the UnlinkIdentity action. */
	export interface UnlinkIdentityInput {
		IdentityId: string;
		Logins: LoginsMap;
		LoginsToRemove: Array<IdentityProviderName>;
	}

	export interface UntagResourceInput {
		ResourceArn: string;
		TagKeys: Array<TagKeysType>;
	}

	export enum AmbiguousRoleResolutionType { AuthenticatedRole = 0, Deny = 1 }


	/**A provider representing an Amazon Cognito user pool and its client ID. */
	export interface CognitoIdentityProvider {
		ProviderName?: string;
		ClientId?: string;
		ServerSideTokenCheck?: boolean;
	}


	/**Credentials for the provided identity ID. */
	export interface Credentials {
		AccessKeyId?: string;
		SecretKey?: string;
		SessionToken?: string;
		Expiration?: Date;
	}

	export enum ErrorCode { AccessDenied = 0, InternalServerError = 1 }


	/**A description of the identity pool. */
	export interface IdentityPoolShortDescription {
		IdentityPoolId?: string;
		IdentityPoolName?: string;
	}

	export enum MappingRuleMatchType { Equals = 0, Contains = 1, StartsWith = 2, NotEqual = 3 }


	/**A rule that maps a claim name, a claim value, and a match type to a role ARN. */
	export interface MappingRule {
		Claim: string;
		MatchType: MappingRuleMatchType;
		Value: string;
		RoleARN: string;
	}

	export enum MappingRuleMatchType { Equals = 0, Contains = 1, StartsWith = 2, NotEqual = 3 }

	export enum RoleMappingType { Token = 0, Rules = 1 }


	/**A container for rules. */
	export interface RulesConfigurationType {
		Rules: Array<MappingRule>;
	}


	/**A role mapping. */
	export interface RoleMapping {
		Type: RoleMappingType;
		AmbiguousRoleResolution?: RoleMappingAmbiguousRoleResolution;

		/**A container for rules. */
		RulesConfiguration?: RulesConfigurationType;
	}

	export enum RoleMappingType { Token = 0, Rules = 1 }

	export enum RoleMappingAmbiguousRoleResolution { AuthenticatedRole = 0, Deny = 1 }


	/**An array of UnprocessedIdentityId objects, each of which contains an ErrorCode and IdentityId. */
	export interface UnprocessedIdentityId {
		IdentityId?: string;
		ErrorCode?: UnprocessedIdentityIdErrorCode;
	}

	export enum UnprocessedIdentityIdErrorCode { AccessDenied = 0, InternalServerError = 1 }

	@autoinject()
	export class DemoClient {
		constructor(private http: HttpClient) {
		}

		/**
		 * <p>Creates a new identity pool. The identity pool is a store of user identity information that is specific to your AWS account. The keys for <code>SupportedLoginProviders</code> are as follows:</p> <ul> <li> <p>Facebook: <code>graph.facebook.com</code> </p> </li> <li> <p>Google: <code>accounts.google.com</code> </p> </li> <li> <p>Amazon: <code>www.amazon.com</code> </p> </li> <li> <p>Twitter: <code>api.twitter.com</code> </p> </li> <li> <p>Digits: <code>www.digits.com</code> </p> </li> </ul> <p>You must use AWS Developer credentials to call this API.</p>
		 * Post /#X-Amz-Target=AWSCognitoIdentityService.CreateIdentityPool
		 * @return {IdentityPool} Success
		 */
		CreateIdentityPool(requestBody: CreateIdentityPoolInput, headersHandler?: () => {[header: string]: string}): Promise<IdentityPool> {
			return this.http.post('/#X-Amz-Target=AWSCognitoIdentityService.CreateIdentityPool', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * <p>Deletes identities from an identity pool. You can specify a list of 1-60 identities that you want to delete.</p> <p>You must use AWS Developer credentials to call this API.</p>
		 * Post /#X-Amz-Target=AWSCognitoIdentityService.DeleteIdentities
		 * @return {DeleteIdentitiesResponse} Success
		 */
		DeleteIdentities(requestBody: DeleteIdentitiesInput, headersHandler?: () => {[header: string]: string}): Promise<DeleteIdentitiesResponse> {
			return this.http.post('/#X-Amz-Target=AWSCognitoIdentityService.DeleteIdentities', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * <p>Deletes an identity pool. Once a pool is deleted, users will not be able to authenticate with the pool.</p> <p>You must use AWS Developer credentials to call this API.</p>
		 * Post /#X-Amz-Target=AWSCognitoIdentityService.DeleteIdentityPool
		 * @return {void} Success
		 */
		DeleteIdentityPool(requestBody: DeleteIdentityPoolInput, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.post('/#X-Amz-Target=AWSCognitoIdentityService.DeleteIdentityPool', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns metadata related to the given identity, including when the identity was created and any associated linked logins.</p> <p>You must use AWS Developer credentials to call this API.</p>
		 * Post /#X-Amz-Target=AWSCognitoIdentityService.DescribeIdentity
		 * @return {IdentityDescription} Success
		 */
		DescribeIdentity(requestBody: DescribeIdentityInput, headersHandler?: () => {[header: string]: string}): Promise<IdentityDescription> {
			return this.http.post('/#X-Amz-Target=AWSCognitoIdentityService.DescribeIdentity', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * <p>Gets details about a particular identity pool, including the pool name, ID description, creation date, and current number of users.</p> <p>You must use AWS Developer credentials to call this API.</p>
		 * Post /#X-Amz-Target=AWSCognitoIdentityService.DescribeIdentityPool
		 * @return {IdentityPool} Success
		 */
		DescribeIdentityPool(requestBody: DescribeIdentityPoolInput, headersHandler?: () => {[header: string]: string}): Promise<IdentityPool> {
			return this.http.post('/#X-Amz-Target=AWSCognitoIdentityService.DescribeIdentityPool', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * <p>Returns credentials for the provided identity ID. Any provided logins will be validated against supported login providers. If the token is for cognito-identity.amazonaws.com, it will be passed through to AWS Security Token Service with the appropriate role for the token.</p> <p>This is a public API. You do not need any credentials to call this API.</p>
		 * Post /#X-Amz-Target=AWSCognitoIdentityService.GetCredentialsForIdentity
		 * @return {GetCredentialsForIdentityResponse} Success
		 */
		GetCredentialsForIdentity(requestBody: GetCredentialsForIdentityInput, headersHandler?: () => {[header: string]: string}): Promise<GetCredentialsForIdentityResponse> {
			return this.http.post('/#X-Amz-Target=AWSCognitoIdentityService.GetCredentialsForIdentity', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * <p>Generates (or retrieves) a Cognito ID. Supplying multiple logins will create an implicit linked account.</p> <p>This is a public API. You do not need any credentials to call this API.</p>
		 * Post /#X-Amz-Target=AWSCognitoIdentityService.GetId
		 * @return {GetIdResponse} Success
		 */
		GetId(requestBody: GetIdInput, headersHandler?: () => {[header: string]: string}): Promise<GetIdResponse> {
			return this.http.post('/#X-Amz-Target=AWSCognitoIdentityService.GetId', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * <p>Gets the roles for an identity pool.</p> <p>You must use AWS Developer credentials to call this API.</p>
		 * Post /#X-Amz-Target=AWSCognitoIdentityService.GetIdentityPoolRoles
		 * @return {GetIdentityPoolRolesResponse} Success
		 */
		GetIdentityPoolRoles(requestBody: GetIdentityPoolRolesInput, headersHandler?: () => {[header: string]: string}): Promise<GetIdentityPoolRolesResponse> {
			return this.http.post('/#X-Amz-Target=AWSCognitoIdentityService.GetIdentityPoolRoles', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * <p>Gets an OpenID token, using a known Cognito ID. This known Cognito ID is returned by <a>GetId</a>. You can optionally add additional logins for the identity. Supplying multiple logins creates an implicit link.</p> <p>The OpenId token is valid for 10 minutes.</p> <p>This is a public API. You do not need any credentials to call this API.</p>
		 * Post /#X-Amz-Target=AWSCognitoIdentityService.GetOpenIdToken
		 * @return {GetOpenIdTokenResponse} Success
		 */
		GetOpenIdToken(requestBody: GetOpenIdTokenInput, headersHandler?: () => {[header: string]: string}): Promise<GetOpenIdTokenResponse> {
			return this.http.post('/#X-Amz-Target=AWSCognitoIdentityService.GetOpenIdToken', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * <p>Registers (or retrieves) a Cognito <code>IdentityId</code> and an OpenID Connect token for a user authenticated by your backend authentication process. Supplying multiple logins will create an implicit linked account. You can only specify one developer provider as part of the <code>Logins</code> map, which is linked to the identity pool. The developer provider is the "domain" by which Cognito will refer to your users.</p> <p>You can use <code>GetOpenIdTokenForDeveloperIdentity</code> to create a new identity and to link new logins (that is, user credentials issued by a public provider or developer provider) to an existing identity. When you want to create a new identity, the <code>IdentityId</code> should be null. When you want to associate a new login with an existing authenticated/unauthenticated identity, you can do so by providing the existing <code>IdentityId</code>. This API will create the identity in the specified <code>IdentityPoolId</code>.</p> <p>You must use AWS Developer credentials to call this API.</p>
		 * Post /#X-Amz-Target=AWSCognitoIdentityService.GetOpenIdTokenForDeveloperIdentity
		 * @return {GetOpenIdTokenForDeveloperIdentityResponse} Success
		 */
		GetOpenIdTokenForDeveloperIdentity(requestBody: GetOpenIdTokenForDeveloperIdentityInput, headersHandler?: () => {[header: string]: string}): Promise<GetOpenIdTokenForDeveloperIdentityResponse> {
			return this.http.post('/#X-Amz-Target=AWSCognitoIdentityService.GetOpenIdTokenForDeveloperIdentity', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * <p>Lists the identities in an identity pool.</p> <p>You must use AWS Developer credentials to call this API.</p>
		 * Post /#X-Amz-Target=AWSCognitoIdentityService.ListIdentities
		 * @return {ListIdentitiesResponse} Success
		 */
		ListIdentities(requestBody: ListIdentitiesInput, headersHandler?: () => {[header: string]: string}): Promise<ListIdentitiesResponse> {
			return this.http.post('/#X-Amz-Target=AWSCognitoIdentityService.ListIdentities', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * <p>Lists all of the Cognito identity pools registered for your account.</p> <p>You must use AWS Developer credentials to call this API.</p>
		 * Post /#X-Amz-Target=AWSCognitoIdentityService.ListIdentityPools
		 * @return {ListIdentityPoolsResponse} Success
		 */
		ListIdentityPools(requestBody: ListIdentityPoolsInput, headersHandler?: () => {[header: string]: string}): Promise<ListIdentityPoolsResponse> {
			return this.http.post('/#X-Amz-Target=AWSCognitoIdentityService.ListIdentityPools', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * <p>Lists the tags that are assigned to an Amazon Cognito identity pool.</p> <p>A tag is a label that you can apply to identity pools to categorize and manage them in different ways, such as by purpose, owner, environment, or other criteria.</p> <p>You can use this action up to 10 times per second, per account.</p>
		 * Post /#X-Amz-Target=AWSCognitoIdentityService.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceInput, headersHandler?: () => {[header: string]: string}): Promise<ListTagsForResourceResponse> {
			return this.http.post('/#X-Amz-Target=AWSCognitoIdentityService.ListTagsForResource', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * <p>Retrieves the <code>IdentityID</code> associated with a <code>DeveloperUserIdentifier</code> or the list of <code>DeveloperUserIdentifier</code> values associated with an <code>IdentityId</code> for an existing identity. Either <code>IdentityID</code> or <code>DeveloperUserIdentifier</code> must not be null. If you supply only one of these values, the other value will be searched in the database and returned as a part of the response. If you supply both, <code>DeveloperUserIdentifier</code> will be matched against <code>IdentityID</code>. If the values are verified against the database, the response returns both values and is the same as the request. Otherwise a <code>ResourceConflictException</code> is thrown.</p> <p> <code>LookupDeveloperIdentity</code> is intended for low-throughput control plane operations: for example, to enable customer service to locate an identity ID by username. If you are using it for higher-volume operations such as user authentication, your requests are likely to be throttled. <a>GetOpenIdTokenForDeveloperIdentity</a> is a better option for higher-volume operations for user authentication.</p> <p>You must use AWS Developer credentials to call this API.</p>
		 * Post /#X-Amz-Target=AWSCognitoIdentityService.LookupDeveloperIdentity
		 * @return {LookupDeveloperIdentityResponse} Success
		 */
		LookupDeveloperIdentity(requestBody: LookupDeveloperIdentityInput, headersHandler?: () => {[header: string]: string}): Promise<LookupDeveloperIdentityResponse> {
			return this.http.post('/#X-Amz-Target=AWSCognitoIdentityService.LookupDeveloperIdentity', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * <p>Merges two users having different <code>IdentityId</code>s, existing in the same identity pool, and identified by the same developer provider. You can use this action to request that discrete users be merged and identified as a single user in the Cognito environment. Cognito associates the given source user (<code>SourceUserIdentifier</code>) with the <code>IdentityId</code> of the <code>DestinationUserIdentifier</code>. Only developer-authenticated users can be merged. If the users to be merged are associated with the same public provider, but as two different users, an exception will be thrown.</p> <p>The number of linked logins is limited to 20. So, the number of linked logins for the source user, <code>SourceUserIdentifier</code>, and the destination user, <code>DestinationUserIdentifier</code>, together should not be larger than 20. Otherwise, an exception will be thrown.</p> <p>You must use AWS Developer credentials to call this API.</p>
		 * Post /#X-Amz-Target=AWSCognitoIdentityService.MergeDeveloperIdentities
		 * @return {MergeDeveloperIdentitiesResponse} Success
		 */
		MergeDeveloperIdentities(requestBody: MergeDeveloperIdentitiesInput, headersHandler?: () => {[header: string]: string}): Promise<MergeDeveloperIdentitiesResponse> {
			return this.http.post('/#X-Amz-Target=AWSCognitoIdentityService.MergeDeveloperIdentities', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * <p>Sets the roles for an identity pool. These roles are used when making calls to <a>GetCredentialsForIdentity</a> action.</p> <p>You must use AWS Developer credentials to call this API.</p>
		 * Post /#X-Amz-Target=AWSCognitoIdentityService.SetIdentityPoolRoles
		 * @return {void} Success
		 */
		SetIdentityPoolRoles(requestBody: SetIdentityPoolRolesInput, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.post('/#X-Amz-Target=AWSCognitoIdentityService.SetIdentityPoolRoles', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Assigns a set of tags to an Amazon Cognito identity pool. A tag is a label that you can use to categorize and manage identity pools in different ways, such as by purpose, owner, environment, or other criteria.</p> <p>Each tag consists of a key and value, both of which you define. A key is a general category for more specific values. For example, if you have two versions of an identity pool, one for testing and another for production, you might assign an <code>Environment</code> tag key to both identity pools. The value of this key might be <code>Test</code> for one identity pool and <code>Production</code> for the other.</p> <p>Tags are useful for cost tracking and access control. You can activate your tags so that they appear on the Billing and Cost Management console, where you can track the costs associated with your identity pools. In an IAM policy, you can constrain permissions for identity pools based on specific tags or tag values.</p> <p>You can use this action up to 5 times per second, per account. An identity pool can have as many as 50 tags.</p>
		 * Post /#X-Amz-Target=AWSCognitoIdentityService.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceInput, headersHandler?: () => {[header: string]: string}): Promise<TagResourceResponse> {
			return this.http.post('/#X-Amz-Target=AWSCognitoIdentityService.TagResource', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * <p>Unlinks a <code>DeveloperUserIdentifier</code> from an existing identity. Unlinked developer users will be considered new identities next time they are seen. If, for a given Cognito identity, you remove all federated identities as well as the developer user identifier, the Cognito identity becomes inaccessible.</p> <p>You must use AWS Developer credentials to call this API.</p>
		 * Post /#X-Amz-Target=AWSCognitoIdentityService.UnlinkDeveloperIdentity
		 * @return {void} Success
		 */
		UnlinkDeveloperIdentity(requestBody: UnlinkDeveloperIdentityInput, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.post('/#X-Amz-Target=AWSCognitoIdentityService.UnlinkDeveloperIdentity', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Unlinks a federated identity from an existing account. Unlinked logins will be considered new identities next time they are seen. Removing the last linked login will make this identity inaccessible.</p> <p>This is a public API. You do not need any credentials to call this API.</p>
		 * Post /#X-Amz-Target=AWSCognitoIdentityService.UnlinkIdentity
		 * @return {void} Success
		 */
		UnlinkIdentity(requestBody: UnlinkIdentityInput, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return this.http.post('/#X-Amz-Target=AWSCognitoIdentityService.UnlinkIdentity', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the specified tags from an Amazon Cognito identity pool. You can use this action up to 5 times per second, per account
		 * Post /#X-Amz-Target=AWSCognitoIdentityService.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceInput, headersHandler?: () => {[header: string]: string}): Promise<UntagResourceResponse> {
			return this.http.post('/#X-Amz-Target=AWSCognitoIdentityService.UntagResource', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}

		/**
		 * <p>Updates an identity pool.</p> <p>You must use AWS Developer credentials to call this API.</p>
		 * Post /#X-Amz-Target=AWSCognitoIdentityService.UpdateIdentityPool
		 * @return {IdentityPool} Success
		 */
		UpdateIdentityPool(requestBody: IdentityPool, headersHandler?: () => {[header: string]: string}): Promise<IdentityPool> {
			return this.http.post('/#X-Amz-Target=AWSCognitoIdentityService.UpdateIdentityPool', JSON.stringify(requestBody), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.json());
		}
	}

}

